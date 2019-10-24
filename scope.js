const A = "A";
let F;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D);
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E);
console.log(G);

doStuff("B");
console.log(B);
console.log(C);
console.log(F);

//When you don't declare a variable and you assign a value to it, that variable 
//will be going to the global scope

var teacher  = "Kyle";

function otherClass(){
  teacher = "Susy";
  topic = "React";
  console.log("Welcome");
}

otherClass();

console.log(teacher);
console.log(topic);