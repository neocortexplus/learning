const calculateTotalMarks = (math, english, science, social, language) => {
    return new Promise((resolve, reject) => {
        if (math === undefined || english === undefined || science === undefined || social === undefined || language === undefined) {
            reject('Null values for marks');
            return;
        }

        let total = math + english + science + social + language;
        resolve(total);
    });
};

const calculateAverageMarks = (totalMarks) => {
    return new Promise((resolve, reject) => {
        if (typeof totalMarks !== 'number' || isNaN(totalMarks)) {
            reject('Invalid total marks');
            return;
        }

        let average = totalMarks / 5;
        resolve(average);
    });
};

const calculateGrade = (averageMarks) => {
    return new Promise((resolve) => {
        if (averageMarks >= 90) {
            resolve('A+');
        } else if (averageMarks >= 80) {
            resolve('A');
        } else if (averageMarks >= 70) {
            resolve('B');
        } else if (averageMarks >= 60) {
            resolve('C');
        } else if (averageMarks >= 50) {
            resolve('E');
        } else {
            resolve('F');
        }
    });
};

module.exports = {
    calculateTotalMarks,
    calculateAverageMarks,
    calculateGrade
};
