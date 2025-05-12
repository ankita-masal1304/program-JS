console.log("===1===");

function squareOfWorldLength(word){
    var length = word.length;
    console.log("length of a words:",length

    );
    
    var result = length*length;
    return result;
}
var square = squareOfWorldLength("javaScript");
console.log("Square of javaScript :",square);
var square1 =squareOfWorldLength("Google Chrome");
console.log("square of Google chrome:",square1);
var square2 = squareOfWorldLength("Web Developer Smart");
console.log("Square of web developer smart:",square2);

console.log("===2===");
function developer(){
    var string = "I Am MERN Stack developer";
    console.log(`string length is:${string.length}`);
    console.log(`string word num :${string.split(" ").length}`);
    var divide = string.length/string.split(" ").length;
    console.log(`divide by string length to string word :${divide}`);

    var multi = string.length*string.split(" ").length;
    console.log(`multi by a string length to a string word:${multi}`);
    return { divide :divide,
            multi :multi}
    
    

}
developer();

 





