//Завдання 1

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  
  return sum;
}

alert( sumSalaries(salaries) ); // 650


//Завдання 2

function count(obj) {
  return Object.keys(obj).length;
}

// Перевірка:
let user = {
  name: 'Іван',
  age: 30
};

alert( count(user) ); // 2

//Завдання 3

let user = {
  name: "Іван",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

// Перевірка результату:
alert( name );    // Іван
alert( age );     // 30
alert( isAdmin ); // false