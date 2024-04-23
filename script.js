let proIt = {
    sale: [{name: `John`, salary: 1000}, {name: `Alice`, salary: 600}],
    development: {
        web: [{name: `Peter`, salary: 2000}, {name: `Alex`, salary: 1800}],
        qa: [{name: `Chan`, salary: 1400}, {name: `Mark`, salary: 1700}],
        internals: [{name: `Jack`, salary: 1300}]
    }
};

function getSum(department) {
    let totalSalary = 0;
    if (Array.isArray(department)) {
        for (const person of department) {
            totalSalary += person.salary;
        }
    } else {
        for (const subDep of Object.values(department)) {
            totalSalary += getSum(subDep)
        }
    }
    return totalSalary;
}

console.log(getSum(proIt))