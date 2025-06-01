 const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 
const totalNum = array_numbers.reduce ((sum,element)=>{

 return sum +element;
 },0);
  console.log("Sum of all num by using a reduce  ",totalNum);
 
  const array_numbers1 = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
 
const totalNum1 = array_numbers.reduce ((element)=>{

 return element %5==0;
 });
  console.log("Sum of all num by using a reduce  ",totalNum1);
 