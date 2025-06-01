const arrayNumbers=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 const ReturnFilter=arrayNumbers.filter((element)=>{
     return element>50;
})
console.log("Greater than 50 :",ReturnFilter);
const arrayNumbers1=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 const ReturnFilter1=arrayNumbers.filter((element)=>{
     return element %2==0;
})
console.log("Even num :",ReturnFilter1);
const arrayNumbers2=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 const ReturnFilter2=arrayNumbers.filter((element)=>{
     return element%2!=0;
})
console.log("ODD Num :",ReturnFilter2);
const arrayNumbers3=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 const ReturnFilter3=arrayNumbers.filter((element)=>{
     return element%5==0 ;
})
console.log("all num which are multi by 5 :",ReturnFilter3);
const arrayNumbers4=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 const ReturnFilter4=arrayNumbers.filter((element)=>{
     return element>20 && element <50 ;
})
console.log("num between 20 and 50 :",ReturnFilter4);
