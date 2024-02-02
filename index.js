const array1 = [1, 2, 5, 9, 4, 13, 4, 10];

console.log("Елементи більше 3 і менше 10:");
for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  if (element > 3 && element < 10) {
    console.log(element);
  }
}

console.log("\n");

console.log("Перевірка наявності елемента зі значенням 4:");
for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  if (element === 4) {
    console.log('Наявний!');
    break;
  }
}
console.log("\n");

const array2 = [42, 2, 33, 11, 12, 10, 0];
const average = array2.reduce((acc, current) => acc + current, 0) / array2.length;

console.log("Середнє арифметичне елементів масиву:", average);
console.log("\n");

const array3 = ["parrot", "bull", "bear", "monkey"];
const totalCharacters = array3.reduce((acc, current) => acc + current.length, 0);

console.log("Сумарна кількість символів у всіх стрічках:", totalCharacters);
console.log("\n");

const array4 = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
const stringArray = array4.filter(item => typeof item === 'string');

console.log("Масив, що містить лише стрічки:", stringArray);
console.log("\n");