// Define a getEmployee function that iterates over the employees list and returns it
// Employees must be displayed after a timeout of 1 second.
getEmployee = (employees, callback) => {
    setTimeout(() => {
        const names = employees.map(employee => employee.name);
        callback(null, names);  // null indicates no error
    }, 1000);  // After a timeout of 1 second
}

// Define a function that creates a new employee after 2 seconds.
// and then makes a call to callback function to display the same.
createEmployee = (employees, employee, callback) => {
    setTimeout(() => {
        // Check if employee object is not empty and if the name is not already in the list
        if (Object.keys(employee).length > 0 && !employees.some(e => e.name === employee.name)) {
            employees.push(employee);
            callback(null, employees);  // null indicates no error
        } else {
            const error = 'Employee data is either empty or already exists in the list.';
            callback(error, null);
        }
    }, 2000);  // After a timeout of 2 seconds
}

module.exports = { getEmployee, createEmployee }
