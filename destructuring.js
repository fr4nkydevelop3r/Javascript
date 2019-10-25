

var game = {
    name: "Rustyyy",
    room: "kitchen",
    weapon: "candlestick"
}

var {room, weapon} = game;

console.log(room);
console.log(weapon);

//Destructuring arrays

var [a, b] = [1, 2];
console.log(a, b);

//Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a,b);

//Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);

//Swap variables easily without map

var a = 1, b = 2;

[b, a] = [a, b];

console.log(a, b);