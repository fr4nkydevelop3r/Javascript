const constructArr = function(){
    //it takes an array like object and turn it into an array
    //we pass the array argument as the context to slice
    const arr = Array.prototype.slice.call(arguments); 
    arr.push("the billiards room?");
    return arr.join(' ');
};

console.log(constructArr('was', 'it', 'in'));