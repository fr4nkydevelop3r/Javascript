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

//A(3)
//E(3)
//ReferenceError: G is not defined
//B(B)
//ReferenceError: D is not defined
//H(something else )
//ReferenceError: B is not defined
//ReferenceError: C is not defined
//F(F)

