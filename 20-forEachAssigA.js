
const arrayNumbers =[1,-7,40,502,91,0,108,89,-601];
let sum = 0;
arrayNumbers.forEach((currentValue,index,array) =>{
    
    
    console.log("index of element is:",currentValue,index);
    sum = sum+ currentValue;
    if (currentValue>0) {
        console.log("Positive num",currentValue);
        
        
    }
    if (currentValue<0) {
        console.log("negative num:",currentValue);
        
        
    }
    if (currentValue%2==0) {
        console.log("Even num :",currentValue);
        
        
    }
    if (index%2==0) {
        console.log("Even num index:",index);
        
        
    }
    

})
console.log("sum of all element:",sum);

