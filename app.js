let input = prompt("What would you do?")
let myArray = []
while (input !== 'quit') {
    if (input === "new") {
        addTodo = prompt("Enter new Todo");
        myArray.push(addTodo);
        console.log()
    }
    else if (input === "list") {
        for (let element of myArray)
            console.log(`element: ${myArray[element]}`);
    }
    //else if (input === "delete") {
    //deleteIndex = prompt("enter the index of todo to delete")
    //for (let index of )
    //myArray.pop(deleteIndex);
    //}
    else if (input === "quit") break;
    else {
        "Please, enter a valid command";
    }
}

if (input === quit) {
    console.log("You quit")
}
else {

}