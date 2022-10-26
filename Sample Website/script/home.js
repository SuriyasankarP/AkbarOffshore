$("#logBtn").click(function(){
    window.localStorage.removeItem('auth')
    $(location).prop("href","home.html")
})

// function logout(){
//     window.localStorage.removeItem('auth')
//     location.href="home.html"
// }
var vis=window.localStorage.getItem("auth")
let logBtn=$("#logBtn")
let lPortal=$("#L-portal")
let valButton=$(".validation")
// let logBtn=document.getElementById("logBtn")
// let lPortal=document.getElementById("L-portal")
if (vis){
      logBtn.css("visibility","visible")
      lPortal.css("visibility","visible")
      valButton.css("visibility","hidden")
//    logBtn.style.visibility="visible"
//    lPortal.style.visibility="visible"
}
if(!vis){
    logBtn.css("visibility","hidden")
    lPortal.css("visibility","hidden")
    valButton.css("visibility","visible")
    // logBtn.style.visibility="hidden"
    // lPortal.style.visibility="hidden"
}
