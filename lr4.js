//Завдання 1

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Приклад:
console.log(ucFirst("василь")); // "Василь"


//Завдання 2

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('росі') || lowerStr.includes('xxx');
}

// Приклад використання:
console.log(checkSpam('купити XXX зараз')); // true
console.log(checkSpam('привіт, як справи?')); // false


//Завдання 3

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}

// Приклад використання:
console.log(truncate("Ось що я хотів сказати на цю тему:", 20)); // "Ось що я хотів ска…"
console.log(truncate("Всім привіт!", 20)); // "Всім привіт!"


//Завдання 4

function strikeStr(str) {
  let words = str.split(' ');
  
  if (words.length > 3) {
    return words.join('\n');
  }
  
  return str;
}

// Приклад використання:
console.log(strikeStr("Це короткий рядок")); 
// "Це короткий рядок" (3 слова, без змін)

console.log(strikeStr("Це дуже довгий рядок для перевірки")); 
/* Виведе:
Це
дуже
довгий
рядок
для
перевірки
*/