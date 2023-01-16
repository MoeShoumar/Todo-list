let input = prompt("What would you do?")
let myArray = []
if (input === "new") {
    addTodo = prompt("Enter new Todo");
    myArray.push(addTodo);
}
else if (input === "list") {
    myArray.
}
else if (input === "delete") {
    deleteIndex = prompt("enter the index of todo to delete")
    myArray.pop(deleteIndex);
}
else if (input === "quit") {
    break;
}
else {
    "Please, enter a valid command"
}



