const todoList = document.getElementById("todoList")
const addTodoBtn = document.todoForm.addTodoBtn;
const removBtn = document.getElementById("todoList").value;

addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const todo = document.todoForm.todo.value;

    const new_li = document.createElement("li");
    const new_txt = document.createTextNode(todo);

    const new_button = document.createElement("button");
    const new_btn_txt = document.createTextNode("삭제");

    new_button.appendChild(new_btn_txt);
    new_li.appendChild(new_txt);
    new_li.appendChild(new_button);

    todoList.appendChild(new_li);

    new_button.addEventListener("click", (event => {
        todoList.removeChild(new_li);
    }))
});