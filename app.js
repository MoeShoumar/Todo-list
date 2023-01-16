let input = prompt("What would you do?")
let myArray = []
if (input === "new") {
    addTodo = prompt("Enter new Todo");
    myArray.push(addTodo);
}
else if (input === "list") {
    for (let element of myArray) {
        console.log(element);
    }
else if (input === "delete") {
        deleteIndex = prompt("enter the index of todo to delete")
        for (let index of )
            myArray.pop(deleteIndex);
    }
    else if (input === "quit") {
        break;
    }
    else {
        "Please, enter a valid command"
    }



