let empDetails = [
    { id: 1, name: "Roger", salary: 50000, Bonus: 1000, appraisal: 80 },
    { id: 2, name: "David", salary: 55000, Bonus: 1000, appraisal: 70 },
    { id: 3, name: "Alison", salary: 65000, Bonus: 1000, appraisal: 90 },
    { id: 4, name: "Anthony", salary: 70000, Bonus: 1000, appraisal: 95 },
    { id: 5, name: "Kristen", salary: 80000, Bonus: 1000, appraisal: 98 },
];

// 1. Create a function named 'arrangeEmpDetails' to sort the employee details name-wise
function arrangeEmpDetails(data) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
}

// 2. Display all the employee details in a single array
const displayEmp = empDetails.map((emp) => `${emp.id} ---- ${emp.name} ---- ${emp.salary}`);

// 3. Display the total income of all employees whose names start with 'A'
const totalSal = empDetails
    .filter((emp) => emp.name.startsWith('A'))
    .reduce((total, emp) => total + emp.salary + emp.Bonus, 0);

// 4. Find the maximum appraisal rating from the given array
const maxAppraisalScore = empDetails.reduce((max, emp) => (emp.appraisal > max ? emp.appraisal : max), 0);

// Create a function to calculate the appraisal percentage hike
async function getAppraisalPct(maxAppraisalScore) {
    return new Promise((resolve) => {
        if (maxAppraisalScore >= 100) {
            resolve('20% hike to be given');
        } else if (maxAppraisalScore > 90) {
            resolve('10% hike to be given');
        } else if (maxAppraisalScore > 85) {
            resolve('5% hike to be given');
        } else {
            resolve('Unfortunately, you are not eligible for a hike');
        }
    });
}

module.exports = {
    arrangeEmpDetails,
    getAppraisalPct,
};
