const currencyRates = {
    USD: 1,       // Base currency
    EUR: 0.85,
    GBP: 0.75,
    INR: 74.14,
    JPY: 109.66,
    AUD: 1.35,
    CAD: 1.25,
    CNY: 6.45,
    BRL: 5.25
};

const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');

// Populate currency options
Object.keys(currencyRates).forEach(currency => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = currency;
    option1.text = currency;
    option2.value = currency;
    option2.text = currency;
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
});

// Convert currency
convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromRate = currencyRates[fromCurrency.value];
    const toRate = currencyRates[toCurrency.value];
    
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    const convertedAmount = (amount / fromRate) * toRate;
    result.textContent = convertedAmount.toFixed(2);
});
