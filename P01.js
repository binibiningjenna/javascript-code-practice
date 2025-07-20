// CREATING AND CALLING A FUNCTION

// Creating the function - camelCase naming 
function getMilk() {

}
// Calling the function 
getMilk();

// Example Problem - Simple and not reduntdant code
function main() {
    moveFourTimes();
    turnLeft();
    moveFourTimes();
}

function moveFourTimes() {
    move();
    move();
    move();
    move();
}

// Example Problme - Diagonal Line
function main() {
    diagonalBepper();
    diagonalBepper();
    diagonalBepper();
    diagonalBepper();
    diagonalBepper();
}

function diagonalBepper() {
    putBeeper();
    move();
    turnLeft();
    move();
}

function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

//   PARAMETERS AND ARGUMENT

//  (money) - parameters
function getMilk(money) {
    var numberOfBottles = Math.floor(money / 1.5); // Math.floor - to round a number downward
    console.log("Buy " + numberOfBottles + " bottles of milk");
}
// (20) - Arguments
getMilk(20);

// OUTPUTS AND RETURN VALUES
function getMilk(money) {
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("Buy " + numberOfBottles + " bottles of milk");
    return money % 1.5; // remainder
}
var change = getMilk(4); 
console.log(change); 

// EFFECTIVE WAY OF USING RETURN OUPTUTS
function getMilk(money) {
    console.log("moveLeft");
    console.log("Buy " + numberOfBottles + " bottles of milk");
    console.log("moveDown");
    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % calcBottles;
    return change;
}
console.log("Hello mister, your change is " + getMilk(5, 1.5));

// Function to tell us how many days, weeks, motnh we have left if we live until 90 years old
function lifeInWeeks(age) {
    var remainingYears = 90 - age;
    var days = remainingYears * 365;
    var weeks = remainingYears * 52;
    var months = remainingYears * 12;

    console.log("You have " + days + "days, " + weeks + " weeks, and " + months + " months left.");
}
lifeInWeeks(20);

// BMI Calculator 
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2); // Math.pow is for base and exponent = h^2 to avoid (height * height)
    return Math.round(bmi);
}

var bmi = bmiCalculator(24, 1.75); // call the function and store it
console.log(bmi);

// RANDOM NUMBER GENERATOR
// Math.random() ranges from 0 to 0.9999999999999999

// Roll Dice Random Number
var n = Math.random();
n = n * 6 // Random number ranges
n = Math.floor(n) + 1;
console.log(n);

// Randomizer
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // + 1 to make it 1-100 not 0-99
console.log(loveScore);

// My Practice

function greetUser() {
    console.log("Hello there!");
    console.log("Welcome to our coding platform");
    console.log("Let's start coding!");
}
greetUser();

/*
COMPARATORS AND EQUALITY
=== - is equal to
!== - is not equal to

=== VS ==

== - doesn't care about the data types
=== - they both check for equality and checking the data types are matched
*/

// Check if a Person is Eligible to Vote
function eligibleToVote(age) {
    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }

}
eligibleToVote(20);

// Calculate the Area of a Circle
function calcAreaOfTheCircle(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area;
}
var area = calcAreaOfTheCircle(23);
console.log(area);

//  Check if a String is a Palindrome
function palindrome(word) {
    var string = word.toLowerCase();  
    var reversedString = string.split('').reverse().join('');  // Reverse the string into an array of cahracteres then join back to string
    if (string == reversedString) {  // Compare original string with reversed string
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

var word = palindrome("hello");  
console.log(word);

// Convert Celsius to Fahrenheit
function convertTemperature(celsius) {
    var convertedTemperature = celsius * (9 / 5) + 32;
    return convertedTemperature;
}
var fahrenheit = convertTemperature(20);
console.log(fahrenheit);

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year";
            } else {
                return "Not Leap Year";
            }
        } else {
            return "Leap Year"
        }
    } else {
        return "Not Leap Year";
    }
}

// Find the Largest of Three Numbers
function findLargestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
var largestNumber = findLargestNumber(5, 10, 15);
console.log(largestNumber);

// Fizz Buzz Game
var output = [];
var count = 1

function fizzBuzz() {

    if (count % 3 == 0 && count % 5 == 0) {
        output.push("Fizzbuzz");
    } else if (count % 3 == 0) {
        output.push("Fizz");
    } else if (count % 5 == 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}

//  Whos buying lunch challenge

function buyLunch(names) {
    var numberOfPeople = names.length;
    var randomPeople = Math.floor(Math.random() * numberOfPeople);
    var buyLunchPerson = names[randomPeople];

    return buyLuchPerson + " is going to buy lunch today!";
}

// FizzBuzz While Loop
var output = [];
var count = 1

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("Fizzbuzz");
        } else if (count % 3 == 0) {
            output.push("Fizz");
        } else if (count % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }

    console.log(output);
}

// FizzBuzz For Loop
var output = [];


function fizzBuzz() {
    for (var count = 1; count <= 100; count++) {
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("FizzBuzz");
        } else if (count % 3 == 0) {
            output.push("Fizz");
        } else if (count % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }
    console.log(output);
}

// Song 
var numberOfBottles = 99;

while (numberOfBottles > 0) {
    var bottleWord = "bottles";
    if (numberOfBottles == 1) {
        bottleWord = "bottle";
    }
    console.log(numberOfBottles + " " + bottleWord + " of the beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of the beer on the wall");
}

// Calculate sum
var number = 1;
var sum = 0;

function calculateSum() {
    while (number <= 50) {
        sum += number;
        number++;
    }
    console.log("The sum of numbers from 1 to 50 is: " + sum);
}
calculateSum();

// Count down
var count = 10;
var message = "Counting down: ";

function countDown() {

    while (count >= 1) {
        console.log(message + count);
        count--;
    }
}
countDown();

// Count Vowels

function countVowels(str) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    var index = 0;

    while (index < str.length) {
        if (vowels.includes(str[index])) {
            count++
        }
        index++;
    }
    console.log("Number of vowels: " + count);  
}
countVowels("Hello World!");

// Fibonacci Generator For Loop
function fibonacciGenerator(n) {
    var output = [];
    if (n == 1) {
        output = [0];
    } else if (n == 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output = fibonacciGenerator(5);
console.log(output);

// Calculate BIll
var prices = [10, 15, 20, 5];
var total = 0;

function calculateBill() {
    for (var i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    console.log("Total Bill: " + total);
}
calculateBill();

// Average Temperature
var temperatures = [72, 75, 79, 80, 78, 74, 73];
var sumOfTemperature = 0;
var minTemp = temperatures[0];
var numberOfTemperature;
var result;

function calculateTemperature() {
    // Initialize minTemp with the first temperature value
    for (var i = 0; i < temperatures.length; i++) {
        sumOfTemperature += temperatures[i];
        // Update minTemp if the current temperature is lower than the current minTemp
        if (temperatures[i] < minTemp) {
            minTemp = temperatures[i];
        }
    }
    numberOfTemperature = temperatures.length;
    result = sumOfTemperature / numberOfTemperature;
    console.log("The average temperature for the week is: " + Math.floor(result) + "F");
    console.log("The minimum temperature for the week is: " + minTemp + "F");
}

calculateTemperature();

// Book Sales
var prices = [12, 15, 9, 22, 18];
var sold = [3, 2, 4, 1, 5];
var sales = 0;

function calculateSales() {

    for (var i = 0; i < prices.length && i < sold.length; i++) {
        sales += prices[i] * sold[i];
        console.log("Book " + (i + 1) + " sales: " + (prices[i] * sold[i]));
    }
    console.log("Total sales for the day: " + sales);
}
calculateSales();

// Problem: Track the Calories Burned During a Week

var exerciseMinutes = [30, 45, 60, 50, 40, 70, 35];
var caloriesPerMinute = 10;
var totalCalories = 0;
var calories = 0;

function trackCalories() {
    for (var i = 0; i < exerciseMinutes.length; i++) {
        calories = exerciseMinutes[i] * caloriesPerMinute;
        totalCalories += calories;
        console.log("Day " + (i + 1) + ": " + calories + " calories");
    }
    console.log("Total calories burned for the week: " + totalCalories + "calories");
}
trackCalories();

// Problem: Calculate the Total Price of Items Purchased

var rate = 0.08;
var prices = [12, 15, 18, 20];
var totalPrice = 0;

function calculateTotalPrice() {

    for (var i = 0; i < prices.length; i++) {
        totalPrice += prices[i];
    }

    var totalPriceWithTax = totalPrice + (totalPrice * rate);

    console.log("Total Price: $" + totalPriceWithTax.toFixed(2));
}

calculateTotalPrice();

// Problem: Track the Weekly Hours Worked

var totalHours = 0;
var averageHours;

var hours = [8, 7, 9, 6, 8, 7, 5];

for (var i = 0; i < hours.length; i++) {
    totalHours += hours[i];
}

averageHours = totalHours / hours.length;

console.log("Total hours worked: " + totalHours);
console.log("Average hours worked: " + Math.round(averageHours));

// Calculate the sum of all even number from 1-50
var numbers = 50;
var sum = 0;

function calculateSum() {
    for (var i = 1; i <= numbers; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log("The sum of all even numbers from 1 to " + numbers + " is " + sum);
}

calculateSum();

var album = [
    "january/januaryAlbum.png",
    "february/februaryAlbum.png",
    "march/marchAlbum.png",
    "april/aprilAlbum.png",
    "may/mayAlbum.png",
    "june/juneAlbum.png",
    "july/julyAlbum.png",
    "august/augustAlbum.png",
    "september/septemberAlbum.png",
    "october/octoberAlbum.png",
    "november/novemberAlbum.png",
    "december/decemberAlbum.png"
];

function buildAlbum(images) {
    var container = document.getElementById("album");
    var htmlContent = "";
    for (var i = 0; i < album.length; i++) {
        htmlContent += `
                <img class="img-fluid mx-4" src="images/Album24/` + album[i] + `" alt="First Edition"
                    style="object-fit: cover; width:15%; height: auto;">
        `;
    }
    container.innerHTML = htmlContent;
}
buildAlbum(album);