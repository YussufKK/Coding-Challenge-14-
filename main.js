// main.js
function calculateInterest(principal, rate, time) {
    return principal * rate * time;
}

function calculateLoanPayment(principal, rate, numberOfPayments) {
    const monthlyRate = rate / 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}

function calculateInvestmentReturn(principal, rate, timesCompounded, time) {
    return principal * Math.pow((1 + rate / timesCompounded), (timesCompounded * time));
}

function validateInputs(inputs) {
    for (let input of inputs) {
        if (isNaN(input) || input === '') {
            return false;
        }
    }
    return true;
}

document.getElementById('calculateInterest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal1').value);
    const rate = parseFloat(document.getElementById('rate1').value);
    const time = parseFloat(document.getElementById('time1').value);
    
    console.log(`Interest Calculation Inputs - Principal: ${principal}, Rate: ${rate}, Time: ${time}`);
    
    if (validateInputs([principal, rate, time])) {
        const result = calculateInterest(principal, rate, time);
        console.log(`Interest Result: ${result}`);
        document.getElementById('interestResult').textContent = `Interest: ${result}`;
    } else {
        document.getElementById('interestResult').textContent = 'Please enter valid inputs.';
    }
});

document.getElementById('calculateLoanPayment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal2').value);
    const rate = parseFloat(document.getElementById('rate2').value);
    const time = parseFloat(document.getElementById('time2').value);

    console.log(`Loan Payment Inputs - Principal: ${principal}, Rate: ${rate}, Time: ${time}`);
    
    if (validateInputs([principal, rate, time])) {
        const result = calculateLoanPayment(principal, rate, time);
        console.log(`Loan Payment Result: ${result}`);
        document.getElementById('loanResult').textContent = `Loan Payment: ${result}`;
    } else {
        document.getElementById('loanResult').textContent = 'Please enter valid inputs.';
    }
});

document.getElementById('calculateInvestmentReturn').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal3').value);
    const rate = parseFloat(document.getElementById('rate3').value);
    const timesCompounded = parseFloat(document.getElementById('timesCompounded').value);
    const time = parseFloat(document.getElementById('time3').value);

    console.log(`Investment Return Inputs - Principal: ${principal}, Rate: ${rate}, Times Compounded: ${timesCompounded}, Time: ${time}`);
    
    if (validateInputs([principal, rate, timesCompounded, time])) {
        const result = calculateInvestmentReturn(principal, rate, timesCompounded, time);
        console.log(`Investment Return Result: ${result}`);
        document.getElementById('investmentResult').textContent = `Investment Return: ${result}`;
    } else {
        document.getElementById('investmentResult').textContent = 'Please enter valid inputs.';
    }
});
