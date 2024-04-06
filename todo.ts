#!/user/bin/env node
import inquirer from "inquirer";

let todos : string[] = ["Alam", "khan" ,"mangrio", "nasir"];
async function createTodo(todos:string[]){
    do{
        let ans =await inquirer.prompt({

            type: "list",
            name: "select",
            message: "select an operation",
            choices: ["Add", "update","view","delete"],
        });
        if (ans.select=="Add"){
    
            let addTodo =await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add item in the list",
            });
            todos .push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select =="update"){
            let updateTodo =await inquirer.prompt({
                type: "list",           
                name: "tpdo",
                message:"update an item in the list",
                choices:todos.map(item =>item)
            });
            let addTodo =await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add item in the list",
            });
            let newTodo=todos.filter(val => val !==updateTodo.todo);
            todos = [...newTodo,addTodo.todo];
            console.log(todos);
        }
    if (ans.select=="view"){
        console.log("**** TO DO LIST******");
        console.log(todos);
        console.log("*******************");
    }
     if (ans.select=="delete"){
    
        let deleteTodo =await inquirer.prompt({
            type: "list",
            message: "update items in the list",
            name: "todo",
            choices:todos.map(item=>item)
        });
        let newTodo=todos.filter(val => val !==deleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
     }

        }while(true)

}
createTodo(todos);
