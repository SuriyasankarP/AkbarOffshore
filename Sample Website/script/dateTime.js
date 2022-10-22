function yearMethod(){
    let year=new Date()
    document.getElementById("ym").innerHTML=year.getFullYear()
}
function monthMethod(){
    const list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month=new Date()
    document.getElementById("mm").innerHTML=list[month.getMonth()]
}
function dateMethod(){
    let date=new Date()
    document.getElementById("dm").innerHTML=date.getDate()
}
function dayMethod(){
    let date=new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    document.getElementById("dym").innerHTML=day
}

function minuteMethod(){
    let date=new Date()
    document.getElementById("mim").innerHTML=date.getMinutes()
}
function current(){
    const listMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date=new Date()
    let dateNum=date.getDate()
    let month=listMonth[date.getMonth()]
    let year=date.getFullYear()
    let answer=`<strong>${dateNum}-${month}-${year}</strong>`
    document.getElementById("cm").innerHTML=answer

}

