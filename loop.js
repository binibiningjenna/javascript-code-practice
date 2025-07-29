// WHILE LOOP

// while loop challenge — ATM Withdrawal Simulation
// You're simulating an ATM machine. A user wants to withdraw money until the account reaches a minimum balance of ₱500.
let balance = 5000;
const withdrawal = 1200;

while (balance - withdrawal >= 500) {
  balance -= withdrawal;
  console.log("Withdrew ₱" + withdrawal + ". New balance: ₱" + balance);
}
console.log("Insufficient funds to withdraw ₱1200.");

// Countdown Timer
// Scenario: You’re creating a simple countdown timer from 10 seconds to 0.

let countTimer = 10;

while (countTimer >= 1) {
  console.log("Countdown: " + countTimer);
  countTimer--;
}
console.log("Blast Off!");


// Parking Fee Calculator
//  Scenario: A parking lot charges ₱20 per hour. A driver parked for a certain number of hours.

let fee = 20;
let money = 500;
let hour = 5;

while (hour > 0 && money >= fee) {
  console.log("Paid ₱" + fee + ". Remaining balance: ₱" + (money - fee));
  money -= fee;
  hour--;
}


// Battery Drain Simulation
// Scenario: You’re building a battery status indicator for a phone. Each loop drains 10%.

let percent = 100;
let drainValue = 10;

while (percent - drainValue >= 10) {
  percent -= drainValue;
  console.log("Battery at " + percent + "%");
}
console.log("Battery drained!")


// Bus Seat Booking Simulation
// There are 10 bus seats available. People keep arriving one by one to buy a ticket. 
// Each ticket costs ₱50. The user only has ₱300. 
// Simulate how many tickets the user can buy until either the seats are gone or money runs out.

let seats = 10;
let ticket = 50;
let userMoney = 300;

while (seats > 0 && userMoney >= ticket) {

  seats--;
  userMoney -= ticket;
  console.log("Ticket Booked! Seats Left: " + seats + ", Balance: ₱" + userMoney);
}


// Gas Pump Refill
// You have a car with a gas tank that can hold 50 liters. Each second, the pump adds 5 liters. 
// Simulate the refill process until the tank is full, and print the total liters added each time.

let currentLevel = 5;
let tankLiters = 50;
let literPerSecond = 5;

while (currentLevel + literPerSecond <= tankLiters) {
  currentLevel += literPerSecond;
  console.log("Added " + literPerSecond + "L. Current level: " + currentLevel + "L");
}
console.log("Tank is full");

// Vending Machine Purchase
// A vending machine sells soda for ₱25. You have ₱100. 
// Use a while loop to simulate buying sodas one by one until you can’t afford any more.

let price = 25;
let currentMoney = 80;

while (currentMoney >= price) {
  currentMoney -= price;
  console.log("Bought Soda. Remaining Balance: ₱" + currentMoney);
}
console.log("Out of money!");




// DO WHILE LOOP

// do...while loop challenge — Login Attempt Limit
// A user is trying to log in. They are allowed to enter their password up to 3 times. 
// If they get it right, stop. If not, after 3 tries, show a lockout message.

const correctPassword = "letmein";
const attempts = ["hello", "1234", "letmein"];

let i = 0;
let input;
let success = false;

do {
  input = attempts[i];
  console.log(`Attempt ${i + 1} : Entered Password -> ${input}`);
  if (input === correctPassword) {
    console.log("Login successful");
    success = true;
    break;
  }
  i++;
} while (i < 3);

if (!success) {
  console.log("Account locked due to too many failed attempts.");
}

// Water Delivery
// A water truck has 100L of water. Each house consumes 12L.
// Deliver water to as many houses as possible, and log:
// Delivered to House #X. Water Left: __L

let water = 100;
let houseWater = 12;
let house = 0;

while (water >= houseWater) {
  water -= houseWater;
  house++
  console.log("Delivered to House #" + house + ". Water Left: " + water + "L")
}

// Social Media Scroll
// A user scrolls and consumes 2% battery per scroll.
// Battery starts at 60%.
// Stop when battery goes below 10%.
// Log:
// Scroll #X - Battery: __%

let batteryPerScroll = 2;
let batteryLevel = 60;
let scroll = 0;

while (batteryLevel - batteryPerScroll >= 10) {
  scroll++;
  batteryLevel -= batteryPerScroll;
  console.log("Scroll #" + scroll + " - Battery : " + batteryLevel + "%")
}