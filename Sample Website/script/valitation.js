
// const signUpButton=document.getElementById("signUp")
const mailRE=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneRE=/(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
const psRE=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

function signUp(e){
    var fname=document.getElementById("full_name").value
    var uname=document.getElementById("user_name").value
    var email=document.getElementById("email").value
    var phone=document.getElementById("phone").value
    var password=document.getElementById("password").value
    var mailFlag=0
    var phoneFlag=0
    var psFlag=0
    if(fname && uname && email && phone && password){
        if(email.toLowerCase().match(mailRE)){
           mailFlag=1
        }
        if(phoneRE.test(phone)){
            phoneFlag=1
        }
        if(psRE.test(password)){
            psFlag=1
        }
        if (mailFlag==0){
            alert("Enter Valid Mail")
        }
        if(phoneFlag==0){
            alert("Enter Valid Phone")
        }
        if(psFlag==0){
            alert("Please Enter Strong Password")
        }
        if(mailFlag && phoneFlag && psFlag){
            let formData=JSON.parse(localStorage.getItem("formData")) || [];

            let exist=formData.length && JSON.parse(localStorage.getItem("formData")).some(data =>
                data.email.toLowerCase() == email.toLowerCase()
                );

            if(!exist){
                formData.push({fname,uname,email,phone,password})
                localStorage.setItem('formData',JSON.stringify(formData))
                document.querySelector('form').reset()
                alert("Your Account Created")
                location.href="login.html"
            }
            else{
                alert("Email Is Already Taken")
            }
        }
    }else{
        alert("Fill All field")
    }
    e.preventDefault();
}



function Login(e){
    let email=document.getElementById("Email").value
    let pass=document.getElementById("Password").value
    let formData=JSON.parse(localStorage.getItem("formData")) || [];
    let exist=formData.length && JSON.parse(localStorage.getItem("formData")).some(data=>
        data.email.toLowerCase()==email.toLowerCase() && data.password.toLowerCase()==pass.toLowerCase()
        );
    if(email && pass){
        if(!exist){
        alert("Invalid Login Credentials")
    }
    else{
        alert("Welcome Back!!!")
        location.href="userPage.html"
        
    }
    }else{
        alert("Please Fill All Field")
    }
    
     e.preventDefault()
}



