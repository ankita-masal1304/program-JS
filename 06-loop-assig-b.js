str1 ="Hard work always pays back";
str2 = "Soon i will be Angular IT Champ";
nam = " ";
  function reverseString(str){
    for (let index = str.length-1; index >= 0; index--) {
        if (str[index] !== ' ' ) {
          nam += str[index] 
        }
       
        
        
    }console.log(nam);
    
  }
reverseString(str1);
reverseString(str2);
 