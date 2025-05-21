console.log("==find vowels==");

var str = " I am very good IT Developer";
var vowels = "aeiouAEIOU";
var count = 0;
for (let index = 0; index <str.length; index++) {
    if (vowels.includes(str[index])){
        count++;
    }


    
}console.log(count);


console.log("===sum of a 1 to 5 numbers cube===");
var sum = 0;
for (let index = 1; index <= 5; index++) {
    sum = sum + index*index*index;
    
}
console.log(sum);

console.log("==ODD position cha ==");

var str1 = "Hard work always pays back";
var str2 = "Soon I will be UI IT Champ";
var empty = ' ';
  function oddPositionedChars(str1){
    for (let index = 0; index <= str1.length; index++) {
        if (index % 2 !== 0 && str[index] !==' ') {
            empty += str[index];     
        }
        
     }
    console.log(`odd position ch:${empty}`);
}

oddPositionedChars(str1);
oddPositionedChars(str2);


