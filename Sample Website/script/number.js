function stringMethod(){
    let number=parseInt(document.getElementById("NumberArea").value)
    if(number=='' || number==null){
        alert("Enter Any number")
    }
    else{
    let answer=number.toString()

    console.log(typeof(number))
    document.getElementById("sm").innerHTML=answer
    }
    
}
function expoMethod(){
    let number=parseFloat(document.getElementById("NumberArea").value)
    let expo=parseInt(document.getElementById("expo"))
    if(number=='' || number==null){
        alert("Enter Any number")
    }
    else{
    let answer=number.toExponential(expo)
    document.getElementById("em").innerHTML=answer
    }
    
}
function preMethod(){
    let number=parseFloat(document.getElementById("NumberArea").value)
    let pre=parseInt(document.getElementById("pre").value)
    let answer=number.toPrecision(pre)
    document.getElementById("pm").innerHTML=answer
    
}
function intMethod(){
    let number=parseFloat(document.getElementById("NumberArea").value)
    let answer=parseInt(number)
    document.getElementById("im").innerHTML=answer
    
    
}
function floatMethod(){
    let number=parseFloat(document.getElementById("NumberArea").value)
    let answer=parseFloat(number)
    document.getElementById("fm").innerHTML=answer
    
    
}
function maxMethod(){
    let answer=Number.MAX_VALUE
    document.getElementById("mm").innerHTML=answer
}


