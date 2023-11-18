let companies = [
    {
        id: Math.random(),
        name: "wepro",
        tax: 12,
        budget: 10000,
        expensesPerYear: [4000, 2000, 3000] 
    },
    {
        id: Math.random(),
        name: 'Allayor',
        tax: 12,
        budget: 200,
        expensesPerYear: [150, 300, 700]
    },
    {
        id: Math.random(),
        name: "Daler-Xrust",
        tax: 10,
        budget: 50000,
        expensesPerYear: [12000, 20000, 5000]
    },
    {
        id: Math.random(),
        name: 'Luchshiy Productoviy',
        tax: 20,
        budget: 23000,
        expensesPerYear: [2000, 1000, 5000]
    },
    {
        id: Math.random(),
        name: "dilrukh salon",
        tax: 4,
        budget: 32000,
        expensesPerYear: [12000, 10000, 10000]
    },
    {
        id: Math.random(),
        name: "Necromantiya",
        tax: 10,
        budget: 30000,
        expensesPerYear: [1200,3444,4666]
    },
    {
        id:Math.random(),
        name:'Artyomida.uz',
        tax:15,
        budget:100000,
        expensesPerYear:[10000,3000,90000]
    },
    {
        id: Math.random(),
        name: "bmw",
        tax: 13, 
        budget: 13000, 
        expensesPerYear: [3000, 4000, 1000]
    },
    {
        id: Math.random(),
        name: "dizayner",
        tax: 12,
        budget: 20000,
        expensesPerYear: [1000, 100, 200]
    },
    {
        id:Math.random(),
        name: 'Amerika_cherez_mexika',
        tax: 0,
        budget: 15000,
        expensesPerYear: [100,4000]
    },
    {
        id: Math.random(),
        name: 'Gradus MMM',
        tax: 12,
        budget: 250000,
        expensesPerYear: [20000, 50000, 15000]
    },
    {
        id:Math.random(),
        name:"Tangir Company",
        tax: 100,
        budget: 1000000,
        expensesPerYear: [10000,12000,20000]
    },
    {
        id: Math.random(),
        name: "film_for_adults",
        tax: 75,
        budget: 50000,
        expensesPerYear: [15000, 10000, 5000]
    }
]
/* do {
    name = prompt("Введите свое имя")
} while(name !== "daler")

do {
    surname = prompt("Введите свою фамилию")
} while(surname !== "sharifkulov") */


for (let item of companies) {
    item.expensesPerMonth = 0
    for(let num of item.expensesPerYear) {
        item.expensesPerMonth += num / 12
    }

    let tax_sum = item.tax * (item.budget / 12) / 100

    item.total = Math.round(item.budget / 12) - (item.expensesPerMonth + tax_sum)
}

console.log(companies);

let lost = [];
let profit = [];

for (let item of companies) {
    if (item.total < 0) {
        lost.push(item);
    } else {
        profit.push(item);
    }
}

console.log("Комнании которые заработали");
console.log(profit);
console.log("Комнании которые понесли убытки");
console.log(lost);