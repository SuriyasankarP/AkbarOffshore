function lengthMethod(){
    let text=document.getElementById("textarea").value
    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
    let answer=text.length
    document.getElementById("lm").innerHTML=answer
    }
    
}
function sliceMethod(){
    let text=document.getElementById("textarea").value
    let start=document.getElementById("start").value
    let end=document.getElementById("end").value

    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
        if(start && end){
            if (end>=text.length){
             alert("Out Of Index")
        }
        else{
            
            let answer=text.slice(start,end)
            document.getElementById("sm").innerHTML=answer 
        }
        }else{
            alert("Enter Start And End for Slicing")
        }
        
        
    }

   
}
function subMethod(){
    let text=document.getElementById("textarea").value
    let start=document.getElementById("start2").value
    let end=document.getElementById("end2").value
    
    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
        if(start && end){
            if (end>=text.length){
             alert("Out Of Index")
        }
        else{
            
            let answer=text.substring(start,end)
            document.getElementById("ssm").innerHTML=answer
        }
        }else{
            alert("Enter Start And End Position")
        }
        
        
    }
}
function replaceMethod(){
    let text=document.getElementById("textarea").value
    let present=document.getElementById("present").value
    let replace=document.getElementById("replace").value
    

    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
        if(present && replace){
            let answer=text.replace(`${present}`,`${replace}`)
            document.getElementById("rm").innerHTML=answer
        }
        else{
             alert("Enter Present And replace Field")
        } 
    }
}
function upperMethod(){
    let text=document.getElementById("textarea").value
    
    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
        let answer=text.toUpperCase()
        document.getElementById("um").innerHTML=answer
    }

}
function lowerMethod(){
    let text=document.getElementById("textarea").value
   
    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
         let answer=text.toLowerCase()
         document.getElementById("lom").innerHTML=answer
    }

}
function trimMethod(){
    let text=document.getElementById("textarea").value
    
    if(text=='' || text==null){
        alert("Enter Any Text")
    }
    else{
        let answer=text.trim()
        document.getElementById("tm").innerHTML=answer
    }

}


