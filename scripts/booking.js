/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let dailyRate = 35;
let numDay = 0;
let totalCost = 0;
let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");
let clearButton = document.getElementById("clear-button");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mon.addEventListener("click", function () {
  if (!mon.classList.contains("clicked")) {
    mon.classList.add("clicked");
    numDay = numDay + 1;
    calculation(dailyRate, numDay);
  }
});

tue.addEventListener("click", function () {
  if (!tue.classList.contains("clicked")) {
    tue.classList.add("clicked");
    numDay = numDay + 1;
    calculation(dailyRate, numDay);
  }
});

wed.addEventListener("click", function () {
  if (!wed.classList.contains("clicked")) {
    wed.classList.add("clicked");
    numDay = numDay + 1;
    calculation(dailyRate, numDay);
  }
});

thu.addEventListener("click", function () {
  if (!thu.classList.contains("clicked")) {
    thu.classList.add("clicked");
    numDay = numDay + 1;
    calculation(dailyRate, numDay);
  }
});

fri.addEventListener("click", function () {
  if (!fri.classList.contains("clicked")) {
    fri.classList.add("clicked");
    numDay = numDay + 1;
    calculation(dailyRate, numDay);
  }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function () {
  mon.classList.remove("clicked");
  tue.classList.remove("clicked");
  wed.classList.remove("clicked");
  thu.classList.remove("clicked");
  fri.classList.remove("clicked");
  dailyRate = 35;
  numDay = 0;
  calculation(dailyRate, numDay);
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", function () {
  dailyRate = 20;
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  calculation(dailyRate, numDay);
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", function () {
  dailyRate = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  calculation(dailyRate, numDay);
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation(dailyRate, numDay) {
  totalCost = numDay * dailyRate;
  calculatedCost.innerHTML = totalCost;
}
