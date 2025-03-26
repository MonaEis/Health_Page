import './style.css'

const bodySizeInput = document.querySelector("#body") as HTMLInputElement;
const ageInput = document.querySelector("#age") as HTMLInputElement;
const weightInput = document.querySelector("#weight") as HTMLInputElement;
const activityInput = document.querySelector("#activity") as HTMLSelectElement;

const genderInput = document.querySelector("#male") as HTMLInputElement;
console.log(genderInput.value)

let outputMetabolicKcal = document.querySelector(".metabolic-kcal") as HTMLParagraphElement;
let outputMetabolicKj = document.querySelector(".metabolic-kj") as HTMLParagraphElement;
let outputEnergyKcal = document.querySelector(".energy-kcal") as HTMLParagraphElement;
let outputEnergyKj = document.querySelector(".energy-kj") as HTMLParagraphElement;




const form = document.querySelector("form");
form?.addEventListener("submit", calculateCalories);

function calculateCalories(event: Event){
        event.preventDefault();
        console.log("Juhu", genderInput.value)
    console.log("i've been clicked")


    //* Harris-Benedict-Formel
    if(genderInput.checked === true){
        const maleBasalMetabolism = 66.47 +(13.7 * Number(weightInput.value)) + (5* Number(bodySizeInput.value)) - (6.8 * Number(ageInput.value))

        const maleTotal = maleBasalMetabolism * Number(activityInput.value);
        console.log("Test: ", maleTotal)
        outputMetabolicKcal.innerText = maleBasalMetabolism.toFixed(2);
        outputMetabolicKj.innerText = (Number(maleBasalMetabolism) * 4.184).toFixed(2);

        outputEnergyKcal.innerText = maleTotal.toFixed(2);
        outputEnergyKj.innerText = (Number(maleTotal) * 4.184).toFixed(2);
        

    } else {
        const femaleBasalMetabolism = 655.1 +(9.6 * Number(weightInput.value)) + (1.8* Number(bodySizeInput.value)) - (4.7 * Number(ageInput.value))
        const femaleTotal = femaleBasalMetabolism * Number(activityInput.value);

        outputMetabolicKcal.innerText = femaleBasalMetabolism.toFixed(2);
        outputMetabolicKj.innerText = (Number(femaleBasalMetabolism) * 4.184).toFixed(2);

        outputEnergyKcal.innerText = femaleTotal.toFixed(2);
        outputEnergyKj.innerText = (Number(femaleTotal) * 4.184).toFixed(2);
    }
}
