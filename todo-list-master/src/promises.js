const todolist = require('./todolist'); // Ensure that the path './todolist' is correct.

const getAllTodos = (todolist) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todolist);
        }, 2000);
    });
};
// Define a function to add a todo to the todolist array
const createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        if (todo === undefined) {
            return reject('No data to be added');
        }
        setTimeout(() => {
            todolist.push(todo);
            resolve(todolist);
        }, 2000);
    });
};
module.exports = {
    createTodo,
    getAllTodos
};