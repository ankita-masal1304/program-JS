
 var findOut = function voteEligible (age){
    if (age>=18) {
        return "this is eligible for vote"; 
        
    } else {
        return"this is not eligible for vote";
        
    }
     

}
  var result = findOut(45);
  console.log(`45 age is :${result}`);
  var result = findOut(17);
  console.log(`age 17 is:${result}`);
  var result = findOut(20);
  console.log(`age 20 is:${result}`);
  

  
  