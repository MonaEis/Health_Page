import './style.css'

const bodySizeInput = document.querySelector("#body") as HTMLInputElement;
const ageInput = document.querySelector("#age") as HTMLInputElement;
const weightInput = document.querySelector("#weight") as HTMLInputElement;
const activityInput = document.querySelector("#activity") as HTMLSelectElement;

const genderInput = document.querySelector("#male") as HTMLInputElement;
console.log(genderInput.value)




const form = document.querySelector("form");
form?.addEventListener("submit", calculateCalories);

function calculateCalories(event: Event){
        event.preventDefault();
        console.log("Juhu", genderInput.value)
    console.log("i've been clicked")
    // const female = genderInput.value === "female";
    // const male = genderInput.value === "male";

    //* Harris-Benedict-Formel
    if(genderInput.checked === true){
        const maleBasalMetabolism = 66.47 +(13.7 * Number(weightInput.value)) + (5* Number(bodySizeInput.value)) - (6.8 * Number(ageInput.value))

        const maleTotal = maleBasalMetabolism * Number(activityInput.value);
        console.log("Test: ", maleTotal)
    } else {
        const femaleBasalMetabolism = 655.1 +(9.6 * Number(weightInput.value)) + (1.8* Number(bodySizeInput.value)) - (4.7 * Number(ageInput.value))
        const femaleTotal = femaleBasalMetabolism * Number(activityInput.value);
    }
}


// - Zuerst musst du den Grundumsatz berechnen. Der Grundumsatz wird mithilfe der Harris-Benedict-Formel berechnet.
//     - Grundumsatz bei Männern (Kalorien je Tag):
//         - 66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz
//     - Grundumsatz bei Frauen (Kalorien je Tag):
//         - 655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm) – (4.7 * Alter in Jahren) = Grundumsatz
// - Um den Gesamtumsatz auszurechnen, sollte der PAL-Faktor (PAL=Physical Activity Level) mit dem Grundumsatz multipliziert werden.