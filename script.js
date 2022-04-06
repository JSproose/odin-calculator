function add(num1, num2) {return num1 + num2;};
function subtract(num1, num2) {return num1 - num2;};
function multiply (num1, num2) {return num1 * num2};
function divide (num1, num2) {return num1/num2};

function operator (op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

let memory = {
    num1: undefined,
    operator: undefined,
    num2: undefined,
    reset: function() {
        this.num1 = undefined;
        this.operator = undefined;
        this.num2 = undefined;
    }
}

let displayValue = '';

const buttons = document.querySelectorAll('button');
const div_display = document.querySelector('.display');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.classList.value) {
            case "num":
                displayValue = displayValue + e.target.innerText;
                div_display.innerText = displayValue;
                console.log(memory)
                break;
            case "operator": 
                memory.num1 = parseInt(displayValue);
                if (memory.num1 && !memory.operator) {
                    memory.operator = e.target.innerText;
                    displayValue = displayValue + e.target.innerText;
                    div_display.innerText = displayValue;
                }
                console.log(memory);
                break;
            case "equals":
                memory.num2 = parseInt(displayValue.split(memory.operator)[1]);
                if (memory.num1 && memory.operator && memory.num2) {
                    console.log(memory)

                    const answer = Math.round(operator(memory.operator, memory.num1, memory.num2) *10 )/10;

                    displayValue = answer
                    div_display.innerText = displayValue;

                    memory.num1 = answer;
                    memory.operator = undefined;
                    memory.num2 = undefined;
                }
                break;
            case "clear":
                memory.reset();
                displayValue = '';
                div_display.innerText = 0;
                console.log(memory);
                break;
        };
    });
});

// console.log(operator(prompt('operator: '), prompt('first num'), prompt('second num')));