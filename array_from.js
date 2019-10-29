function f() {
    return Array.from(arguments);
  }
  
  console.log(f(1, 2, 3));
f.hola = 'Hola mundo cruel';

console.log(f);