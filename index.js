

const inputNum = document.querySelector("input");
const addButton = document.querySelector("#addNumber");

const numBank = document.getElementById("numberBank").querySelector("output");
let NumBank = [];


const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");


const Odds = document.getElementById("odds").querySelector("output");
const Evens = document.getElementById("evens").querySelector("output");


// ------- ADD NUMBER ------
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    numBank.innerText = "";
    NumBank.push(inputNum.value);
    numBank.innerText = NumBank;
});


// ------- SORT NUMBERS -------
sortOne.addEventListener("click", () => {
    if (NumBank.length !== 0) {
        let popped = NumBank.pop(); 
        if (popped % 2 === 0) {
            Evens.append(popped + ",");
        } else {
            Odds.append(popped + ",");
        }
        numBank.innerText = NumBank;
    }
});


// ------ EVENT LISTENER ------
sortAll.addEventListener("click", () => {
    if (NumBank.length !== 0) {
        for (let bankedNumber of NumBank) {
            if (bankedNumber % 2 === 0) {
                Evens.append(bankedNumber + ",");
            } else {
                Odds.append(bankedNumber + ",");
            }
        }
        NumBank = [];
        numBank.innerText = "";
    }
});
