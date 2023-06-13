
const inputItem = document.getElementById("input-el");
const submitBtn = document.getElementById("submit-btn");
const listEl = document.getElementById("list-el");
const clearBtn = document.getElementById("clear-btn");


inputItem.addEventListener("click", function() {
    inputItem.value = "";
})

clearBtn.addEventListener("click", function(){
    listEl.innerHTML = '';
})

submitBtn.addEventListener("click", function(){

    const list = document.createElement("li");    
    list.innerText = inputItem.value;
    listEl.appendChild(list);
     

    const delButton = document.createElement("button");
    delButton.innerText = "del item";
    list.appendChild(delButton);
    delButton.addEventListener("click", function(){
        listEl.removeChild(list);
    });

    const doneButton = document.createElement("button");   
    doneButton.innerText = "done";
    list.appendChild(doneButton);

    doneButton.addEventListener("click", function(){

        if(doneButton.innerText === "done"){
            
            list.style.textDecoration = "line-through";
            list.style.textDecorationThickness = "0.15em"
            list.style.textDecorationColor = "#22b455";
            doneButton.innerText = "re-do";

        }else if(doneButton.innerText === "re-do"){

            list.style.textDecoration = "none";
            doneButton.innerText = "done";

        }                
    });
});



