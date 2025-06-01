const arrayNumbers1 =[20,11,40,25,11,9,31,60,2,19];

 const arrayTrans = arrayNumbers1.map((element)=>{
  return element*10;
});
console.log("Multi all element by 10:",arrayTrans);
const arrayNumbers=[20,11,40,25,11,9,31,60,2,19];
const array1=arrayNumbers.map((element)=>{
    return element*3;

})
console.log("Cube of element :",array1);

console.log(arrayTrans);
const arrayNumbers4=[20,11,40,25,11,9,31,60,2,19];
const array2=arrayNumbers4.map((element,index)=>{
    return element+index;

})
console.log("Add index values in a element:",array2);


