function stringHandsOn(){
    console.log("==Print the string==");
    
 var string = "  Hey you are doing good, keep it up  ";
 console.log(string);
 console.log("==length of string==");
 
 console.log(`length of string is:${string.length}`);
 console.log(`==After trim==`);
 
 var index =`  Hey you are doing good, keep it up  `;
console.log(index.trim());
var after ="Hey you are doing good, keep it up";
console.log("==After trim length of string==");

console.log(`length of string after a trim in s both sides:${after.length}`);
console.log("==First and last char==");

console.log(`first char:${after.charAt(0)}`,`last char:${after.charAt(33)}`);
console.log(`total words:${after.length}`);
console.log(`index of world good is:${after.indexOf("good")}`);
console.log(`the substring is:${after.substring(22)}`);
console.log(`sting end with up is:${after.endsWith("up")}`);
console.log(`string start with word Hey is:${after.startsWith("Hey")}`);








 
 

}
stringHandsOn();
