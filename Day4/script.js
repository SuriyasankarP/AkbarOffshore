function addItem() {

  let list = document.getElementById("list");
  let text = document.getElementById("inputText");
  let li = document.createElement("li");
  console.log(text.value)
  if (text.value){
    li.setAttribute("id", text.value);
    li.appendChild(document.createTextNode(text.value));
    list.appendChild(li);
  }
  else{
    alert('Enter Any Items')
  }
  
 
}

function removeItem(){

    let list=document.getElementById('list')
    let text=document.getElementById("inputText")
    let item=document.getElementById(text.value)
    list.removeChild(item)
}


// Events 
// 1.User Interface Event --> load,resize
// 2.Focus and blur events--> focus
// 3.MouseEvent ---> click,dblclick
// 4.Keyboard --> keypress,keyup,keydown
// 5.form event --> submit


// Click
let clickMe=document.getElementById('click')

clickMe.addEventListener("click" ,e =>
{
    alert("Clicked")
    console.log(e)
})

// Double click
let dbclick=document.getElementById('DBclick')

dbclick.addEventListener("dblclick" , e =>
{
    alert("DoubleClicked")
    console.log(e)
})
// Focus
let focusEvent=document.getElementById('focus')

focusEvent.addEventListener("focus" , e =>
{
    e.target.style.background = 'lightgreen'
})
// Blur
focusEvent.addEventListener('blur',e => {
    e.target.style.background = ''
})

//keypress
let keypressEvent=document.getElementById('key')

keypressEvent.addEventListener("keypress" , e =>
{
   var letter=e.code
   alert(`${letter} was pressed`)
   console.log(e)
})