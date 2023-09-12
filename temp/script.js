function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDisplay = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    let resultUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = "Fahrenheit (°F)";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultUnit = "Celsius (°C)";
    }

    resultDisplay.textContent = `Result: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
