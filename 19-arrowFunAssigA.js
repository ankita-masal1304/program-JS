console.log("NO args &No return in Arrow fun");

const display =()=>{
    console.log("Good morning,Today is Friday");
}
display();
console.log("===Multiply of 3 no===");
let multi = (n1,n2,n3=1)=>{
    console.log("Multi of 3 no:",n1*n2*n3);
}
multi(5,5,2);
console.log("assign default value is 1");
multi(10,4);

let add =(n1,n2,n3,n4,n5)=>{
console.log("Addition of 5 no:",n1+n2+n3+n4+n5);


return add;

}
add(100,100,200,349,756);
add("I am "," learning"," ES6"," Features","in depth");