const items = document.querySelector("#items");
const toDoList = document.querySelector("#todo ul");

// Verify elements are found
if (!items || !toDoList) {
    console.error("Error: #items or #todo ul not found in the DOM");
}

// Add task when pressing Enter
items.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && items.value.trim() !== "") {
        const li = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = items.value;
        taskSpan.classList.add("task-text");

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");

        li.appendChild(taskSpan);
        li.appendChild(deleteIcon);
        toDoList.appendChild(li);

        items.value = "";
        console.log(`Added task: ${taskSpan.textContent}`);
    }
});

// Handle clicks on the <ul>
toDoList.addEventListener('click', (event) => {
    console.log("Click detected on <ul>", event.target); // Debug: Log clicked element
    const target = event.target;

    // Delete task if clicking the delete icon
    if (target.classList.contains("fa-xmark")) {
        const li = target.parentElement;
        li.remove();
        console.log(`Deleted task: ${li.textContent}`);
    }
    // Toggle strikethrough if clicking the task text
    else if (target.classList.contains("task-text")) {
        console.log("Task text clicked:", target.textContent); // Debug: Confirm click
        target.style.textDecoration = target.style.textDecoration === "line-through" ? "none" : "line-through";
        console.log(`Toggled strikethrough for: ${target.textContent}`);
    }
});