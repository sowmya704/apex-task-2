
document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (!name || !email || !phone || !message) {
        errorMsg.textContent = "All fields are required!";
        return;
    }

    if (!email.match(emailPattern)) {
        errorMsg.textContent = "Enter valid email!";
        return;
    }

    if (!phone.match(phonePattern)) {
        errorMsg.textContent = "Phone number must be 10 digits!";
        return;
    }

    alert("Form submitted successfully!");
});

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    let taskList = document.getElementById("taskList");

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");


    let span = document.createElement("span");
    span.textContent = taskValue;
    span.classList.add("task-text");

    span.onclick = function() {
        span.classList.toggle("completed");
    };

  
    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("task-actions");

  
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.onclick = function() {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function() {
        li.remove();
    };

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actionsDiv);

    taskList.appendChild(li);

    taskInput.value = "";
}
