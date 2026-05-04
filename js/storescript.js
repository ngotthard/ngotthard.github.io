const totalSpan = document.querySelector("#total-amount");
const wolfBtn = document.querySelector("#wolfButton");
const recluseBtn = document.querySelector("#recluseButton");
const widowBtn = document.querySelector("#widowButton");
const crabBtn = document.querySelector("#crabButton");
const hoboBtn = document.querySelector("#hoboButton");
const woodlouseBtn = document.querySelector("#woodlouseButton");
const resetBtn = document.querySelector("#resetButton");

let currentTotal = 0;

function addToCart(price) {
    currentTotal += price;
    totalSpan.innerHTML = currentTotal.toFixed(2);
    console.log("Added $" + price + ". New total: $" + currentTotal.toFixed(2));
}

wolfBtn.addEventListener('click', function() {
    addToCart(19.99);
});

recluseBtn.addEventListener('click', function() {
    addToCart(19.99);
});

widowBtn.addEventListener('click', function() {
    addToCart(14.99);
});

crabBtn.addEventListener('click', function() {
    addToCart(17.95);
});

hoboBtn.addEventListener('click', function() {
    addToCart(29.99);
});

woodlouseBtn.addEventListener('click', function() {
    addToCart(16.99);
});

resetBtn.addEventListener('click', function() {
    currentTotal = 0;
    totalSpan.innerText = currentTotal.toFixed(2);
    alert("Cart has been cleared!");
});