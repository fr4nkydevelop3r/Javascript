const increment = n => n + 1;
const square = n => n * n;

const doMathSoIDontHaveTo = (n, func) => func(n);

console.log(doMathSoIDontHaveTo(2,increment));
console.log(doMathSoIDontHaveTo(3,square));


const sayHi = (condition, positiveGreetings, negativeGreetings, ...args) => {
    return condition ? positiveGreetings(args) : negativeGreetings(args) 
}

const positiveGreetings = words => console.log(words);

const negativeGreetings = words => console.log(words);

sayHi(false, positiveGreetings, negativeGreetings, "HOLA", "MUNDO", "CRUEL");