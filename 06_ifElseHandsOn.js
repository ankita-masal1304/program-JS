
var elseIf =function (num){
  if (num%2 ==0) {
    return "EVEN";
       
  } else {
    return "ODD";
  }
}
var result = elseIf(45);
console.log(`45 value is a :${result}`);
var result = elseIf(70);
console.log(`70 value is a :${result}`);
var result = elseIf(67);
console.log(`67 value is a :${result}`);
var result = elseIf(98);
console.log(`98 value is a:${result}`);


console.log("==2==");

 var eligible = function (age){
    if (age>=18) {
        return "eligible for vote" ;
        
    } else {
        return "not eligible for vote";
        
    }

 }
var result = eligible(18);
 console.log(`age is a 18:${result}`);
 var result = eligible(20);
 console.log(`age is a 20:${result}`);
 var result = eligible(17);
 console.log(`age is 17:${result}`);
 var result = eligible(40);
 console.log(`age is a 40:${result}`);

console.log('===3===');
var valueIs = function (str){
    if (str.length>10) {
        return"the length is more than 10";  
    } else {
        return" the length is less then 10";  
    }
    
 } 
  var result= valueIs("javaScript-ES6");
  console.log(`javaScript:${result}`);
  
var valueOf = function (word) {
    if ( word.startsWith("Java")) {
        return"this word is start with java";
        
    } else {
        return"not start with java";
        
    }
    
} 
 var result = valueOf("JavaScript Language");
 console.log(`javaScript Language is :${result}`);
  var result = valueOf("programming Language");
 console.log(`programming Language is :${result}`);
 
 
 
 
