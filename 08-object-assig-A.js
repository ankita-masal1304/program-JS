
const professor ={
    firstName : "Seema",
    lastName : "Mane",
    age :50,
    subject :"DSA",
    degrees:{
      engineering : "CSC",
      PHD:"Adv Computing",
      master: "DS"
}
    
    
};
console.log(professor);
console.log(typeof professor);

console.log("==using a nested");
console.log(professor.degrees);
console.log(typeof degrees);
console.log("===Add one Array===");

professor.degrees ="Hacker Rank Participation","certificate in a IFE Course","Certificate in Adv Programming"
console.log(professor);
console.log("===Add new property===");
professor.totalExperience ="14 year"
console.log(professor);
console.table(professor);
console.log("==modify property==");
professor.age = 45;
console.log(professor);
console.table(professor);
console.log("===Add new certificate===");

const lastCertificate = professor.degrees[professor.degrees.length-1]
console.log(`Last word is :${lastCertificate}`);




let student={
    firstName:"Bill Gate",
    age:89,
    detail:function(){
        console.log(`first name is :${this.firstName}`);
        
    }

};
student.detail();




