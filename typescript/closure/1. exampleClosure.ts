// Пример №1. Пример замыкания.
function outer() {
  // Внешняя функция
  let count = 0; // Внешняя переменная
  console.log(count);
  return function inner() {
    // Внутренняя функция
    count++; // Доступ к переменной родителя
    console.log(count);
  };
}

const counter = outer(); // outer выполняется, но inner остаётся в памяти

counter();
counter();
counter();
