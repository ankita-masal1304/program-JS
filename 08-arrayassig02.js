
const array = [20,31,40,25,11,29,9,60,2,11];
console.log("==total element available in array==");
let lengthOf =array.length;
console.log(`element available in array is: ${lengthOf}`);
console.log("==First element ===");
let arrayNum = array[0];
console.log(arrayNum);
console.log("==last element==");
let arrayLast = array[array.length-1];
console.log(arrayLast);
console.log("==third last element==");
let arrThree = array[array.length-3];
console.log(arrThree);

console.log("==all even num==");
let element3 = [20,31,40,25,11,29,9,60,2,11];
for (let index = 0; index < element3.length; index++) {
    if (element3[index] % 2==0) {
        console.log(element3[index]);
    }
    
}
console.log("==All ODD NUM==");
let array1 = [20,31,40,25,11,29,9,60,2,11];
for (let index = 0; index < array1.length; index++) {
    if (array1[index] %2 !==0) {
        console.log(array1[index]);
    }  
}
console.log("==all even num and sum it==");
let element4 = [20,31,40,25,11,29,9,60,2,11];
let sum = 0;
for (let index = 0; index < element4.length; index++) {
    if (element4[index] % 2==0) {
    
        sum = element4[index] + sum
    }   
}console.log(`sum of all even num:${sum}`);
console.log("== sum of all odd num==");
let element5=[20,31,40,25,11,29,9,60,2,11];
let sum1 = 0;
for (let index = 0; index < element5.length; index++) {
    if (element5[index] %2 !==0) {
    sum=element5[index] + sum;   
    }console.log(`sum of all odd:${sum}`); 
} 


console.log("==sum of all elements==");
let elementSum =[20,31,40,25,11,29,9,60,2,11];
let sum2 = 0;
for (let index = 0; index < elementSum.length; index++) {
    sum2 = elementSum[index]+ sum2;
}
console.log(`sum of all elements are :${sum2}`);

console.log("==num which is multiply by 5==");
let elementMulti =[20,31,40,25,11,29,9,60,2,11];
for (let index = 0; index < elementMulti.length; index++) {
    if (elementMulti[index] %5==0) {
        console.log(elementMulti[index]);
    }
}
console.log("== is number 115 available==");
let array3 = [20,31,40,23,11,29,9,60,2,11];
console.log(array3);

let setOfRollNum = new Set();
setOfRollNum.add(20);
setOfRollNum.add(31);
setOfRollNum.add(40);
setOfRollNum.add(23);
setOfRollNum.add(11);
setOfRollNum.add(29);
setOfRollNum.add(9);
setOfRollNum.add(60);
setOfRollNum.add(2);
setOfRollNum.add(11);
console.log(setOfRollNum);
console.log(`is number 115 is available:${setOfRollNum.has(115)}`);
console.log(`is number 23 is available:${setOfRollNum.has(23)}`);

console.log("==num 55,66 at index 3==");
let array4 =[20,31,40,23,11,29,9,60,2,11];
array4.splice (3,0,55,66);
console.log(array4);

console.log("==Delete 3 element from ==");
let array6 =[20,31,40,23,11,29,9,60,2,11];

array6.splice(3,4);
console.log(array6);









    






 
