console.log("01-object Literal");

const employee = {
    name:'Ankita',
    lastName:"Masal",
    age:20,
    location:"mumbai",
    study:"Eng"
   

};
console.log(employee);
console.log(typeof employee);
console.log("ACCEES data peoperty");

console.log(`first name is :${employee.name}`);
console.log(`Age is :${employee.age}`);

console.log("Adding property");
employee.pin = 413310;

console.log("Table create");
console.log(employee);
console.table(employee);

console.log("Update variable");
employee.location ="Piliv";
console.log(employee);
console.table(employee);

console.log("==== Delete object ===");
delete employee.age;
console.log(employee);
console.table(employee);

console.log("===Traversing key using a for in loop===");
for (const key in employee) {
        const value = employee[key];
        console.log(`${key} ===> ${value}`);
        
        
}
console.log("====Nested object===");
let student ={
    fname :"Stew",
    lname :"Job",
    age:26,
    address:{
        city:"LA",
        area:"Behind a LA ",
        pin:239200
    }
}
console.log("if want a pin value then");
console.log(student.address.pin);
student.address.street ="Mass";
console.table(student.address);

console.log("===object with a method===");
let parents ={
    fname : "Bill Gates",
    designation :"CEO",
    age:20,
    //methods
    details : function(){
        console.log(` object details:${this.fname}`);
        

    } 

    
}
parents.details();












