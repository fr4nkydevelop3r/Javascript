const DOGS_URL = "https://dog.ceo/api/breeds/image/random"

const doggos = document.querySelector(".doggos");

const loadDog = () => {
    
    const promise = fetch(DOGS_URL);

    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        })

console.log("this will log first");
}


const loadDoggo = document.querySelector(".load_doggo");

loadDoggo.addEventListener("click", loadDog);