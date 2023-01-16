let input = prompt("What would you do?")
let myArray = []
while (input !== 'quit') {
    if (input === "list") {
        for (let [index, element] of myArray.entries()) {
            console.log(`${index}, ${element}`);
        }
    }

    else if (input === "new") {
        addTodo = prompt("Enter new Todo");
        myArray.push(addTodo);
        console.log(`${addTodo} added to the list `)
    }
    else if (input === "delete") {
        deleteIndex = prompt("enter the index of todo to delete")
        myArray.splice(deleteIndex, 1);
    }
    input = prompt('what would you like to do?')
}

console.log('OK quit the app')