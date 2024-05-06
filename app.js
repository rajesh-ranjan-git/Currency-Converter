const EXCHANGE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

const updateExRate = async () => {
    let amt = document.querySelector(".amount input");
    let amtVal = amt.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amt.value = "1";
    }

    let fromRate = exRate[fromCurr.value.toLowerCase()];
    let toRate = exRate[toCurr.value.toLowerCase()];
    let finalAmt = amtVal*(toRate/fromRate);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}

for(let select of dropdowns) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }        
        if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExRate();
});

window.addEventListener ("load", () => {
    updateExRate();
});