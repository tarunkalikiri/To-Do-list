document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; 

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn"); 
        li.appendChild(removeBtn);

        taskList.appendChild(li);
        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);

   
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    
    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.parentElement.remove();
        }
    });
});
