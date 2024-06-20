function calculateDose() {
    // Get input values
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const creatinine = parseFloat(document.getElementById('creatinine').value);
    const sex = document.getElementById('sex').value;

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(creatinine)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate creatinine clearance using the Cockcroft-Gault formula
    let clearance;
    if (sex === "male") {
        clearance = ((140 - age) * weight) / (72 * creatinine);
    } else {
        clearance = ((140 - age) * weight) / (72 * creatinine) * 0.85;
    }

    // Calculate EDTA infusion dose (for this example, we'll assume a simple conversion to mL)
    const dose = clearance * 0.2; // Example conversion factor to mL

    // Display result
    document.getElementById('result').innerText = `The EDTA infusion dose is ${dose.toFixed(2)} mL.`;
}
