function createTuple(a, b, c, d){
    arguments[0] = "You can reasign a value with arguments";
    console.log(arguments[0]);
    console.log(arguments.length);
    //But it's not really an array =(
}


//createTuple('It', 'be', 'could', 'anyone', 'no one');




const  createTuple2 = function(a, b, c, ...d){
    console.log(arguments); //The arguments keyword has everything to do
    //with what is passed only
    return [[a, c],[b, d]];
}


console.log(createTuple2('It', 'be', 'could', 'anyone', 'no one'));