const inputElement = document.querySelector(".texting");
inputElement .addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        buttonElement.click();
    }
});
const buttonElement = document.querySelector(".add");
buttonElement.addEventListener('click', () => {
    // text typed by the user//
    // addind the task //
    const storeElement = inputElement.value
    if (storeElement === '') {
        return;
    };
    //the conter where all tasks are stored//
    const taskList = document.querySelector(".empty");

    const taskElement = document.createElement('li');
    taskElement.classList.add('task')
  
    const taskContent = document.createElement("div");
    //task text//
    taskContent.textContent = storeElement;

  
    // checkbox//
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener('click', () => {
        // adding the class//
     taskElement.classList.add("completed");
    })
    taskContent.appendChild(checkbox);

    //delete button//
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.addEventListener('click', () => {
     taskElement.remove();

     const taskElements = document.querySelectorAll('.task')
    const number = taskElements.length;
    itemElement.textContent = number + "items left"
    })
    deleteButton.classList.add("delete");
    // appending//
    taskElement.appendChild(taskContent);
    taskElement.appendChild(deleteButton);
    taskList.appendChild(taskElement);

    const itemElement = document.querySelector('.items');

    const taskElements = document.querySelectorAll('.task')
    const number = taskElements.length;
    itemElement.textContent = number + "items left"
    // emptying the input after adding the task
    inputElement.value = '';
});
// all
const allElements = document.querySelector(".all");
allElements.addEventListener('click', () => {
    console.log("ALL BUTTON CLICKED");
    const allLiElements = document.querySelectorAll('.empty li');

    allLiElements.forEach(list => {
        list.style.display = "flex";
       
    });
})
// active//
const activeElement = document.querySelector(".active");
activeElement.addEventListener('click', () => {
    const taskElements = document.querySelectorAll('li')
    taskElements.forEach(list1 => {
        list1.classList.contains("completed")

        if (list1.classList.contains("completed")) {
            list1.style.display = "none";
        } else {
            list1.style.display = "flex"
        }
    })
})

//completed //
const completeElement = document.querySelector('.Completed');
completeElement.addEventListener('click', () => {
    const taskElements = document.querySelectorAll('li');
    taskElements.forEach(list3 => {
        // list3.classList.contains("completed");
        if (list3.classList.contains("completed")) {
            list3.style.display = "flex";
        } else {
            list3.style.display = "none";
        }
    })
})

//clear completed//
const clearElement = document.querySelector('.Clear');
clearElement.addEventListener('click', () => {
    const taskElements = document.querySelectorAll('li');
    taskElements.forEach(list4 => {

        if (list4.classList.contains('completed')) {
            list4.remove();
            const itemElement = document.querySelector('.items');
            const taskElements = document.querySelectorAll('.task')
    const number = taskElements.length;
    itemElement.textContent = number + "items left"
        }
    });
})

const filterButtons = document.querySelectorAll(".all, .active, .Completed");
filterButtons.forEach(button=> {
    button.addEventListener("click", (event) => {
        filterButtons.forEach(btn=>{
            btn.classList.remove("selected");
            // btn.classList.add("selected");
        });
        event.target.classList.add("selected")
    })
})



