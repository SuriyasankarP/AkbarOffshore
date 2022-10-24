let input = document.querySelector("#textarea");
let tablize = document.querySelector("#btn-table");
let firstTable = document.querySelector(".array");
let popBtn=document.getElementById("popBtn")
let popOutput=document.querySelector(".popArray")
function tableCreator(container, input) {
    let arr = [...input];
    container.innerHTML = "";
    let table = document.createElement("table");
    let row = document.createElement("tr");
    let index = document.createElement("tr");

    for (let i = 0; i < arr.length; i++) {
        let col = document.createElement("td");
        col.textContent = arr[i];
        let indexValue = document.createElement("td");
        indexValue.textContent = i;

        row.insertAdjacentElement("beforeend", col);
        index.insertAdjacentElement("beforeend", indexValue);
    }

    table.insertAdjacentElement("beforeend", row);
    table.insertAdjacentElement("beforeend", index);
    container.insertAdjacentElement("afterbegin", table);
}

tablize.addEventListener("click", () => {
    if(input.value){
        let arr1=input.value.split(" ")
        let arr = [...arr1];
        tableCreator(firstTable, arr)
    }
    else{
        alert("Enter Any String")
    }
    
});

popBtn.addEventListener("click", () => {
    if(input.value){
        let arr2=input.value.split(" ")
        let arr = [...arr2];
        arr.pop();
        tableCreator(popOutput, arr);
    }
    else{
        alert("Enter Any String")
    }
    
});
let sortBtn=document.getElementById("sortBtn")
let sortArray=document.querySelector(".sortArray")
sortBtn.addEventListener('click',() =>{
    if(input.value){
        let arr2=input.value.split(" ")
        let arr = [...arr2];
        arr.sort();
        tableCreator(sortArray, arr);
    }
    else{
        alert("Enter Any String")
    }
})
let pushBtn=document.getElementById("pushBtn")
let pushInput=document.getElementById("pushInput")
let pushArray=document.querySelector(".pushArray")
pushBtn.addEventListener('click',() =>{
    if(input.value){
        if(pushInput.value){
            let arr2=input.value.split(" ")
            let arr = [...arr2];
            arr.push(pushInput.value);
            tableCreator(pushArray, arr);
        }else{
            alert("Enter Push Element")
        }
        
    }
    else{
        alert("Enter Any String")
    }
})
let conBtn=document.getElementById("conBtn")
let conInput=document.getElementById("conInput")
let conArray=document.querySelector(".conArray")
conBtn.addEventListener('click',() =>{
    if(input.value){
        if(conInput.value){
            let arr2=input.value.split(" ")
            let arr = [...arr2];
            let constr=conInput.value.split(" ")
            let concatArray=[...constr] 
            let finalArr=arr.concat(concatArray);
            tableCreator(conArray, finalArr);
        }else{
            alert("Enter Array for Concodinate")
        }
        
    }
    else{
        alert("Enter Any Array ")
    }
})
let sliceBtn=document.getElementById("sliceBtn")
let sliceStart=document.getElementById("start")
let sliceEnd=document.getElementById("end")
let sliceArray=document.querySelector(".sliceArray")
sliceBtn.addEventListener('click',() =>{
    if(input.value){
        if(sliceStart.value && sliceEnd){
            let arr2=input.value.split(" ")
            let arr = [...arr2];
        
            if(sliceEnd.value>=arr.length){
                alert("Out of Index")
            }else{
                let finalArr=arr.slice(sliceStart.value,sliceEnd.value)
                console.log(finalArr)
               
                
                tableCreator(sliceArray, finalArr);
            }
            
           
        }else{
            alert("Enter start and end position")
        }
        
    }
    else{
        alert("Enter Any Array ")
    }
})
