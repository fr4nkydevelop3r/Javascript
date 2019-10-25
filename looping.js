const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, 
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}


function foo() {
    for(let i = 0 ; i < game["suspects"].length; i++){
        if(game["suspects"][i]["color"] === "red"){
            game["suspects"][i]["gulty"] = true;
        }
    }
}

foo();

console.log(game);



var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, 
    {
        name: "Miss Scarlet",
        color: "red"
    }
];

var [{color:color1}, {color:color2}] = suspects;
console.log(color1);
console.log(color2);