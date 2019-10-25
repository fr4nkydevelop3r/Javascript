var person = {};

person.name = "Mrs. White";

var who = person.name; 

console.log(who); 

person.name = "Mr. White";

console.log(who); //Primitive values get pass by value

//While non-primite values get pass by reference
//Functions, Arrays and Objects you're offen sharing  the 
//same place in memory
