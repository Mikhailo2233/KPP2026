//Завдання 1

function unique(arr) {

  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O


//Завдання 2

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// Приклад використання:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // ["PAN", "hectares", "era"] (або інші варіанти анаграм)


//Завдання 3

function countOccurrences(arr) {
  const map = new Map();

  for (const item of arr) {
    const currentCount = map.get(item) || 0;
    map.set(item, currentCount + 1);
  }

  return map;
}

// Тестування:
const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);

console.log(result); 
// Результат: Map { 1 => 2, 2 => 2, 3 => 2, 4 => 1, 5 => 2, 6 => 1 }





//Завдання 4

function areElementsUnique(arr) {
  return arr.length === new Set(arr).size;
}

// Приклад використання:
console.log(areElementsUnique([1, 2, 3, 4])); // true
console.log(areElementsUnique([1, 2, 2, 4])); // false