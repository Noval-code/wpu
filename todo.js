const todoList = [];
function addTodo(title, task) {
  const List = {
    titleTask: title,
    descTask: task,
  };

  todoList.push(List);
}
addTodo("hidup sehat", "no coli");

function updateTodo(title, newTitle, newDesc) {
  const findIndex = todoList.findIndex((todo) => {
    if (todo.titleTask == title) {
      (todo.titleTask = newTitle) && (todo.descTask = newDesc);
    }
  });
}
console.log(todoList);
updateTodo("hidup sehat", "sehat", "rutin olahraga");
console.log(todoList);

function deleteTodo(title) {
  const findIndex = todoList.findIndex((todo) => todo.titleTask == title);

  todoList.splice(findIndex, 1);
}

deleteTodo("sehat");
console.log(todoList);
