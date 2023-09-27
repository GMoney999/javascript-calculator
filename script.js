
// Listens to any button clicks on entire calculator
document.addEventListener("DOMContentLoaded", function() {

    // Create variable for calculator display
    const display = document.querySelector("input[name='display']");

    // Function to update the display with the button value
    function updateDisplay(value) {
        display.value += value;
    }

    // Function to evaluate the expression
    function evaluateExpression() {
        // Replace 'x' with '*' for multiplication
        let expression = display.value.replace(/x/g, "*");

        // Check for division by zero
        if (/\/0(?![0-9])/.test(expression)) {
            display.value = "Error";
            return;
        }

        // Output an error message if the expression cannot be evaluated
        try {
            display.value = eval(expression);
        } catch (e) {
            display.value = "Error";
        }
    }

    // Add event listeners for number and operator buttons
    document.querySelectorAll('.calculator input[type="button"]').forEach(button => {
        button.addEventListener("click", function() {
            // Clear error messages before further computation
            if (display.value === "Error") {
                display.value = "";
            }

            if (this.value === '=') {
                evaluateExpression();
            } else if (this.value === 'C') {
                display.value = '';
            } else {
                updateDisplay(this.value);
            }
        });
    });
});
