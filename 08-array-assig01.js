
const fruits =["Banana","orange","Apple","mango","Water Melon"];
console.log(fruits);
console.log("==log first element==");

const element = fruits[0];
console.log(element);
console.log("==log last element==");
const element1 = fruits[fruits.length-1];
console.log(element1);
console.log("==add element before banana==");
fruits.unshift("papaya");
console.log(fruits);
console.log("==remove mango from array==");
fruits.slice[4,1];
console.log(fruits);

console.log("==add element 'Pineapple'at last==");
fruits.push("Pineapple");
console.log(fruits);
console.log("==insert element dragon fruit before water melon==");
fruits.splice(5,0,"Dragon Fruit");
console.log(fruits);
console.log("==replace orange with kiwi==");
fruits.splice(2,1,"kivi");
console.log(fruits);
console.log("==log element starting from index 1 to 4");
const elements = fruits.splice(1,4);
console.log(elements);
console.log("==log 3 last element==");
const lastElement = fruits.slice(fruits.length-3);
console.log(lastElement);





