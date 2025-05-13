console.log("===1===");

function greaterNumber(num1,num2,num3,num4){
    var result = num1 >= num2 ? "Grater number" : "SmallNumber";
    console.log(`Number 10 is :${result}`);
    var result2 = num2 >= num1 ?"grater number" :"Smaller Number";
    console.log(`number -10 is :${result2}`);
    var result3 = num3 >= num4?"Greater number" :"Smaller Number";
    console.log(`800 is a :${result3}`);
    var result4 = num4 >= num4 ?"Greater Number":"Smaller Number";
    console.log(`899 is a :${result4}`);  
}
greaterNumber(10,-10,800,899);

console.log("===Find even or odd number===");
function isEvenOrOddNum(num){
var even = num %2 == 0 ? "even" : "oddNumber";
console.log(`the number is a :${num} is ${even} `);

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);

console.log("===3===");
function wordLength(num1){
 var result = num1.split("").length;
 console.log(`word length is:${result}`);
 var evenOrOdd = result %2==0 ?"even":"odd";
 console.log(`the word is a:${num1} is ${evenOrOdd}`);
 
 


}
wordLength("javaScript");
wordLength("Developer");
wordLength("Google")


 

