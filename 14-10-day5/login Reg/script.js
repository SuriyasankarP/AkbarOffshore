var uname=document.getElementById('name')
var email=document.getElementById('mail')
var password=document.getElementById('password')
var submitForm=document.getElementById('sub')
const arr=[]
submitForm.addEventListener('click',e=>{
    let flag=1
    
   if(uname.value && email.value && password.value){
    for (i=0;i<arr.length;i++){
        if(uname.value==arr[i].name){
            flag=0
            break;
        }
    }
    if(flag==1){
        var detail={}
    detail.name=uname.value
    detail.email=email.value
    detail.password=password.value
    arr.push(detail)
    alert("Successfully Register")
    }
    else{
        alert("username is already taken")
    }
    
   }
   else{
    alert("Fill all Field")
   }


    e.preventDefault()
})
