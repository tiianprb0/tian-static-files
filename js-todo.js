document.getElementById("add-item").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    newItem.className = "todo-item";
    document.getElementById("todo-list").appendChild(newItem);
});
