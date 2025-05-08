console.log("===Function with no arguments and no return===");

function city(){
   console.log("city is mumbai");
}
city();
city();

function itsMyLaptop(){
    console.log("it it my laptop");
    
}
itsMyLaptop();


console.log("===function with argument===");
function personalDetails(firstName,lastName,collageName){
   
    console.log("first name is:",firstName);
    console.log("lastName:",lastName);
    console.log("collageName:",collageName);

}
personalDetails("Ankita","Masal" ,"SNDT");
console.log("===3===");

function addThreeValues(n1,n2,n3){
    var values = n1 +n2+n3;
    console.log("addition of n1,n2,n3 is:",values);
}
addThreeValues(10.23,600,40);

function addThreeValues(a1,a2,a3){
    var result = a1+a2+a3;
    console.log("the add is:",result);
}
addThreeValues("Hello","Good","Morning");