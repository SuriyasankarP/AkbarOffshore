
const signUpButton=document.getElementById("signUp")
const mailRE=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneRE=/(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
const psRE=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

signUpButton.addEventListener('click',e=>{
    var fname=document.getElementById("full_name").value
    var uname=document.getElementById("user_name").value
    var email=document.getElementById("email").value
    var phone=document.getElementById("phone").value
    var password=document.getElementById("password").value
    var mailFlag=0
    var phoneFlag=0
    var psFlag=0
    console.log(password)
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
            var user={
                fullname:fname,
                username:uname,
                email:email,
                phone:phone,
                password:password
            }

            var json=JSON.stringify(user)
            localStorage.setItem(username,json)
            console.log()
        }
    }else{
        alert("Fill All field")
    }
})
console.log("12")

var Login=document.getElementById("loginInButton")
console.log(Login)

Login.addEventListener('click',e=>{
    
    console.log("1234")
    e.preventDefault()
})
