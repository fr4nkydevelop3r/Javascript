
function ask(question){
    setTimeout(function waitASec(){
        console.log(question);//with closure you can access to variables declared in outside scope
}, 1000);
}

ask("What is closure?");


function ask(question){


    return function holdYourQuestion(){
        console.log(question);
    }
}



var myQuestion = ask("What is closure?");

myQuestion();