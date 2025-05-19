
console.log("====Implicit convert to a string====");

result ='3'+2;
console.log(`the output is a "32" means the 2 is a number and 3 isa string  in a example a conversion is is done by a '+'operator at a time a 2 is convert into a string and we get a string number :${result}`);//the output is a "32" means the 2 is a number and 3 isa string  in a example a conversion is is done by a '+'operator at a time a 2 is convert into a string and we get a string number. 
result ='3'+true;
console.log(`we get a "3true" value means the true is a boolean value and a "3"is a string at a time a this boolean is convert a into means the implicit into a string then we get a :${result}`);// we get a "3true" value means the true is a boolean value and a "3"is a string at a time a this boolean is convert a into means the implicit into a string then we get a 
result = '3'+undefined;
console.log(`we get a "3undefined" output means the undefined is convert into a string and this is don e by a "+" operator :${result}`);//we get a "3undefined" output means the undefined is convert into a string and this is don e by a "+" operator 
result = '3'+null;
console.log(`/we grt a "3null" as a output mens a null is convert into a string. and this conversion is done by a "+"operator:${result}`);//we grt a "3null" as a output mens a null is convert into a string. and this conversion is done by a "+"operator

console.log("====Implicit boolean conversion into a number====");
// boolean true is 1 and false is 0
result ='4'-true;
console.log(`the output is a 3 means the true is boolean value 1 is convert into a number by using a "-"operator means 4-1 = 3:${result}`);//the output is a 3 means the true is boolean value 1 is convert into a number by using a "-"operator means 4-1 = 3
result = 4 + true;
console.log(`the output is a 5 at in case the true is a boolean and this convert into a 1 by using conversion with "+"operator and the 1 is add with a number means a 4+1:${result}`);//the output is a 5 at in case the true is a boolean and this convert into a 1 by using conversion with "+"operator and the 1 is add with a number means a 4+1
result = 4 + false;
console.log(`the output is a 4,the false is a boolean means the value is a 0 , and this 0 is convert into a "+"" operation then result is 4 + 0 = 4 :${result}`);//the output is a 4,the false is a boolean means the value is a 0 , and this 0 is convert into a "+"" operation then result is 4 + 0 = 4 

console.log("===Implicit string conversion to number===");
result = '4' - '2';
console.log(`this are a string values so the conversion is done by "-" operation:${result}`);//this are a string values so the conversion is done by "-" operation.
result = '4' - 2;
console.log(`this 2 is a number and '4' is a string then this number is convert into a string  by using a "-" operator:${result}`);// this 2 is a number and '4' is a string then this number is convert into a string  by using a "-" operator
result = '4' * 2;
console.log(`this 2 is a number and '4' is a string then this number is convert into a string  by using a "*" operator:${result}`);// this 2 is a number and '4' is a string then this number is convert into a string  by using a "*" operator
result = '4' / 2;
console.log(`this 2 is a number and '4' is a string then this number is convert into a string  by using a "/" operator:${result}`);// this 2 is a number and '4' is a string then this number is convert into a string  by using a "/" operator

console.log("===Implicit conversion of undefined with a number===");
result = 4 + undefined;
console.log(`this undefined is convert into a number  by using "+" operator then output is NUll:${result}`);// this undefined is convert into a number  by using "+" operator then output is NUll
result = 4 - undefined;
console.log(`this undefined is convert into a number by using "-"operator then output is NUll:${result}`);// this undefined is convert into a number by using "-"operator then output is NUll
result = true + undefined;
console.log(`this undefined is convert into a boolean then by using a "+"operator output is NUll:${result}`);
result = null + undefined;
console.log(`this undefined is convert into a null by using  a "+" operator then output is NUll:${result}`);
console.log("===Explicit conversion===");
var num ='324';
var result = + num;
console.log(`the '324'is a string value and by using a explicit conversion this is convert in to a number.and output is 324:${result}`);
var num ='324e-1';
var result = + num;
console.log(`the '324e-1'is a string value and by using a explicit conversion this is convert in to a number. the output is 32.4:${result}`);

result = Number(true);
console.log(`the 'true'is a boolean value and by using a explicit conversion this is convert in to a number the output is 1:${result}`);

result = Number(false);
console.log(`the 'false'is a boolean value and by using a explicit conversion this is convert in to a number.the output is 0:${result}`);

console.log("===invalid string to num===");
result = Number('hello');
console.log(`the string is invalid , the string is convert into a number  so the output is a null :${result}`);

result = Number(undefined);
console.log(`this ia a undefined , the undefined is convert into a number  so the output is a null:${result}`);

result = Number(NaN);
console.log(`the NaN is convert into a number  so the output is a null :${result}`);

var numberInString = "100";
console.log(` output is a string means the number is convert into a string and we find a its datatype:${+numberInString},${typeof numberInString}`);


console.log(`output is a string means the number is convert into a string and we find a its datatype.and the by using "+" operator:${numberInString}`);

var number1 = 100; 
console.log(`output is a number means the number is convert into a string and we find a its datatype: ${typeof number1}`);

var myNumber = number1.toString();
console.log(`output is a string means the number is convert into a string and we find a its datatype by using a toString() method: ${typeof myNumber}`);











 




