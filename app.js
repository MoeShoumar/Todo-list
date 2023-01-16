let input = prompt("What would you do?")
let myArray = []
while (input !== 'quit') {
    if (input === "new") {
        addTodo = prompt("Enter new Todo");
        myArray.push(addTodo);
        console.log(`${addTodo} added to the list `)
    }
    else if (input === "list") {
        for (let [index, element] of myArray.entries()) {
            console.log(`${index}, ${element}`);
        }
    }
    else if (input === "delete") {
        deleteIndex = prompt("enter the index of todo to delete")
        myArray.splice(deleteIndex, 1);
    }
    else if (input === "quit") break;

    else {
        "Please, enter a valid command";
    }
}
input = prompt("What would you do?")


console.log('OK quit the app')