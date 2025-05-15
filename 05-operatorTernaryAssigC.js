console.log("===step 1===");

function maleMarriageEligibility( gender,age,boyName){
    var result = gender=="male" && age>=21 ?` hey ${boyName}, you are eligible  marriage`:` hey ${boyName} you are not eligible for marriage`;
    return result;
    

}
var returnValue =maleMarriageEligibility("male",25,"Bill");
console.log(returnValue);
var returnValue =maleMarriageEligibility("male",17,"Stew jobs");
console.log(returnValue);

console.log("===step 2 ===");
function femaleMarriageEligibility(gender,age,girlName){
    var result = gender=="female" && age>=18 ?`Hey ${girlName}, you are eligible for marriage` : `hey${girlName},you are not eligible for marriage`;
    return result;
}
    
 var returnValue = femaleMarriageEligibility("female",16,"jenifer");
 console.log(returnValue);
 var returnValue = femaleMarriageEligibility("female",27,"Malinda Gates") ;
 console.log(returnValue);

 console.log(4+true);
 console.log(5-true);
 
 
