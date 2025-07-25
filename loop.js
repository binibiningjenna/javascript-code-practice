// ARRAY LOOP

const arr = ["apple", "banana", "cherry"];

// ✅ for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ✅ for...of
for (let fruit of arr) {
  console.log(fruit);
}

// ✅ forEach
arr.forEach(fruit => console.log(fruit));

// EXERCISE 1 - Add “Crate of” before each fruit name and store them in a new array.
const fruits = ["apple", "banana", "cherry"];
let newFruits = [];

for (let i = 0; i < fruits.length; i++) {
  const label = "Crate of ";
  const fruitLabels = label + fruits[i];
  newFruits.push(fruitLabels);
}
console.log(newFruits);

// EXERCISE 2 - Convert each fruit name to UPPERCASE and log it.
// const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

// EXERCISE 3
// const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log("Delivering " + fruit + " to customer..."));

// EXERCISE 4 -  Count how many bookings each guest has.
const bookings = [
  { guest: "Alice", room: 101 },
  { guest: "Bob", room: 102 },
  { guest: "Alice", room: 103 },
  { guest: "Dana", room: 104 },
  { guest: "Bob", room: 105 },
];

let count = {};
for (let i = 0; i < bookings.length; i++) {
  const guestName = bookings[i].guest;
  if (count[guestName]) {
    count[guestName]++;
  } else {
    count[guestName] = 1;
  }
}

console.log(count);


// EXERCISE 5 - Print a list of unique guest names.
// const bookings = [
//   { guest: "Alice", room: 101 },
//   { guest: "Bob", room: 102 },
//   { guest: "Alice", room: 103 },
//   { guest: "Dana", room: 104 },
//   { guest: "Bob", room: 105 },
// ];

const uniqueGuest = new Set();

for (const booking of bookings) {
  uniqueGuest.add(booking.guest);
}
console.log([...uniqueGuest]);
console.log(uniqueGuest);

// Loop Through Array of Objects (studentsData)
// Instruction:
// Use a do...while loop to go through each student and log:
// "Anna passed" if score >= 60
// "Frank failed" if score < 60
const studentsData = [
  { name: 'Anna', score: 87 },
  { name: 'Ben', score: 59 },
  { name: 'Cathy', score: 94 },
  { name: 'Daniel', score: 76 },
  { name: 'Ella', score: 65 },
  { name: 'Frank', score: 47 },
];

let index = 0;

do {
  const student = studentsData[index];
  if (student.score >= 60) {
    console.log(`${student.name} passed`);
  } else {
    console.log(`${student.name} failed`);
  }
  index++;
} while (index < studentsData.length);

// Unique Student Grades Tracker
const students = [
  { name: "Jenna", grades: { math: 90, english: 85, science: 88 } },
  { name: "Mika", grades: { math: 75, history: 80, english: 90 } },
  { name: "Liam", grades: { science: 82, history: 78, math: 88 } }
];

const uniqueSubject = new Set();
const averageGrade = new Map();

for (let student of students) {
  for (let subject of Object.keys(student.grades)) {
    uniqueSubject.add(subject);
  }

  const grades = Object.values(student.grades);
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  averageGrade.set(student.name, Math.floor(average));
}

console.log("Unique Subjects:", uniqueSubject);
console.log("Average Grades:", averageGrade);


// Product Sales Tracker
const sales = [
  { customer: "Jenna", product: "Laptop", quantity: 1 },
  { customer: "Mika", product: "Phone", quantity: 2 },
  { customer: "Jenna", product: "Phone", quantity: 1 },
  { customer: "Liam", product: "Tablet", quantity: 3 },
  { customer: "Mika", product: "Laptop", quantity: 1 },
  { customer: "Liam", product: "Phone", quantity: 2 }
];

const uniqueProducts = new Set();
const customerDetails = new Map();

for (let sale of sales) {
  uniqueProducts.add(sale.product);

  if (!customerDetails.has(sale.customer)) {
    customerDetails.set(sale.customer, sale.quantity);
  } else {
    const current = customerDetails.get(sale.customer);
    customerDetails.set(sale.customer, current + sale.quantity);
  }
}

console.log("Unique Products:", [...uniqueProducts]);
console.log("Customer Details:", customerDetails);




// OBJECT LOOP

const obj = { name: "Jenna", age: 22, city: "Manila" };

// ✅ for...in (best for objects)
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// ✅ Object.keys + forEach
Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`);
});

// ✅ Object.entries + for...of
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}


// CHALLENGE 1: Inventory Tracker
// You have an object representing items in a grocery store with their quantities:

const inventory = {
  apples: 10,
  bananas: 5,
  oranges: 8,
  mangoes: 0
};

for (let key in inventory) {
  if (inventory[key] === 0) {
    console.log(`Out of Stock: ${key}`)
  } else {
    console.log(`Item: ${key} - Quantity: ${inventory[key]}`);
  }
}

// CHALLENGE 2: Student Grades Printer

const studentGrades = {
  Jenna: 90,
  Marco: 87,
  Luis: 75,
  Belle: 95
};

Object.keys(studentGrades).forEach(key => {
  console.log(`${key} scored ${studentGrades[key]}`)
})

let total = Object.keys(studentGrades).length;
console.log(`Total number of students: ${total}`);

// CHALLENGE 3: User Settings Update

const userSettings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  locationTracking: false
};

let counter = 0;
for (let [key, value] of Object.entries(userSettings)) {
  if (value === true) {
    console.log(`Enabled: ${key}`)
    counter++;
  }
}
console.log(`Total Number of Settings Enabled: ${counter}`);


// Filter Active Users
const users = {
  user1: { name: "Jenna", active: true },
  user2: { name: "Marco", active: false },
  user3: { name: "Luis", active: true },
  user4: { name: "Belle", active: false }
};

const activeUsers = Object.values(users)
  .filter(user => user.active)
  .map(user => user.name);
console.log("Active Users: ", activeUsers);


// Average Score Calculator
const scores = {
  math: 90,
  science: 85,
  english: 78,
  history: 88
};

const average = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.values(scores).length;
console.log("Average Score: ", average);


// Find Student with Highest Grade
// Find and print the student with the highest grade using Object.entries() and reduce.
const grades = {
  Jenna: 95,
  Marco: 89,
  Luis: 98,
  Belle: 92
};

const highestGrade = Math.max(...Object.values(grades));
console.log("Highest Grade: ", highestGrade);


// Check if Any Item is Sold Out
// Use some() to check if any item has a quantity of 0. Print true or false.
const fruitInventory = {
  apples: 5,
  oranges: 0,
  bananas: 12,
  grapes: 0
};


// Count Passed Subjects (scores object)
// Instruction:
// Use Object.values() and a do...while loop to count how many subjects have scores >= 80. Print the total.

const subjectScores = {
  math: 90,
  science: 85,
  english: 78,
  history: 88
};

const subjects = Object.values(subjectScores);
let idx = 0;

do {
  const score = subjects[idx];
  const passed = score >= 80;
  console.log(`Score: ${score}, Passed: ${passed}`);
  idx++
} while (idx < subjects.length);




// MAP LOOP

const map = new Map([
  ["Jenna", 90],
  ["Caleb", 85],
  ["Luna", 95]
]);

// ✅ forEach
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// ✅ for...of
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}



// JSON LOOP


// ✅ Convert to object
const parsed = JSON.parse(jsonString);

// ✅ Now you can loop like an object
for (let key in parsed) {
  console.log(`${key}: ${parsed[key]}`);
}

// Parse JSON and Display Info
// Instruction:

// Parse the JSON string to a JavaScript object.

// Using a do...while loop, go through the keys (name, age, city) and display each like:
// Key: name, Value: Jenna

const jsonString = '{"name":"Jenna","age":22,"city":"Manila"}';

const object = JSON.parse(jsonString);
const keys = Object.keys(object);

let indexx = 0;
do {
  const key = keys[indexx];
  const value = object[key];
  console.log(`Key: ${key}, Value: ${value}`);
  indexx++;
} while (indexx < keys.length);


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

// Typing Speed Challenge
// A user must type 50 words.
// Each minute, they type 7 words.
// Simulate the typing and show how many words are left per minute.


// Analyze Sales Orders
const orders = [
  {
    orderId: 101,
    customer: 'Jenna',
    items: [
      { product: 'Laptop', quantity: 1, price: 50000 },
      { product: 'Mouse', quantity: 2, price: 500 }
    ],
    isPaid: true
  },
  {
    orderId: 102,
    customer: 'Kaye',
    items: [
      { product: 'Monitor', quantity: 1, price: 10000 },
      { product: 'Mouse', quantity: 1, price: 500 }
    ],
    isPaid: false
  },
  {
    orderId: 103,
    customer: 'Jenna',
    items: [
      { product: 'Keyboard', quantity: 1, price: 1500 },
      { product: 'Mouse', quantity: 1, price: 500 }
    ],
    isPaid: true
  }
];

// 1. Total amount spent by Jenna
const jennaTotal = orders
  .filter(order => order.customer === 'Jenna' && order.isPaid)
  .reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    return total + orderTotal;
  }, 0);
console.log('Jenna total:', jennaTotal);

// 2. Unique products
const uniqueItems = new Set();
orders.forEach(order => {
  order.items.forEach(item => {
    uniqueItems.add(item.product);
  });
});
console.log('Unique items:', [...uniqueItems]);

// 3. Anyone ordered Laptop?
const hasLaptop = orders.some(order =>
  order.items.some(item => item.product === 'Laptop')
);
console.log('Has Laptop:', hasLaptop);

// 4. Find first order with more than 1 Mouse
const findOrder = orders.find(order =>
  order.items.some(item => item.product === 'Mouse' && item.quantity > 1)
);
console.log('First order with >1 Mouse:', findOrder);

// 5. Unpaid orders
const notPaid = orders.filter(order => !order.isPaid);
console.log('Unpaid orders:', notPaid);


// ====================
// Challenge: Employee Training Tracker
const trainings = [
  {
    employee: "Jenna",
    isCompleted: true,
    courses: [
      { title: "JavaScript Basics", hours: 10 },
      { title: "React", hours: 12 }
    ]
  },
  {
    employee: "Mika",
    isCompleted: false,
    courses: [
      { title: "UI/UX Design", hours: 8 },
      { title: "JavaScript Basics", hours: 10 }
    ]
  },
  {
    employee: "Jenna",
    isCompleted: true,
    courses: [
      { title: "Node.js", hours: 15 }
    ]
  },
  {
    employee: "Liam",
    isCompleted: true,
    courses: [
      { title: "JavaScript Basics", hours: 10 },
      { title: "TypeScript", hours: 14 }
    ]
  }
];

// Total training hours completed by Jenna
const trainingHours = trainings
  .filter(name => name.employee === 'Jenna' && name.isCompleted)
  .reduce((total, training) => {
    const hourTotal = training.courses.reduce((sum, courses) => sum + courses.hours, 0);
    return total += hourTotal;
  }, 0)
console.log("Total Hours completed by Jenna: ", trainingHours);

// List of all unique course titles taken (even if not completed)
const uniqueCourse = new Set();
trainings.forEach(training => {
  training.courses.forEach(course => {
    uniqueCourse.add(course.title);
  })
})
console.log("Unique Course Title: ", [...uniqueCourse]);

// Check if anyone took a course in “UI/UX Design”
const hasDesignCourse = trainings.some(training => training.courses.some(course => course.title === 'UI/UX Design'));
console.log("Has anyone took UI/UX Design? ", hasDesignCourse);

// Find the first training where someone took more than 1 course
const moreCourse = trainings.find(training => training.courses.length > 1);
console.log("Training with more than 1 course: ", moreCourse);

// List all trainings that are not completed
const notCompleted = trainings.filter(training => !training.isCompleted);
console.log("Trainings that are not completed: ", notCompleted);




// ===============================
// Student Exam Performance Tracker

const studentExams = [
  {
    name: "Jenna",
    exams: [
      { subject: "Math", score: 88 },
      { subject: "English", score: 92 },
      { subject: "Science", score: 76 }
    ]
  },
  {
    name: "Mika",
    exams: [
      { subject: "Math", score: 59 },
      { subject: "English", score: 61 },
      { subject: "Science", score: 70 }
    ]
  },
  {
    name: "Liam",
    exams: [
      { subject: "Math", score: 95 },
      { subject: "English", score: 85 },
      { subject: "Science", score: 89 }
    ]
  }
];

// Average score per student
const averages = studentExams
  .map(student => {
    const total = student.exams.reduce((sum, exam) => sum + exam.score, 0);
    const average = total / student.exams.length;
    return { name: student.name, average };
});

// List of all subjects taken (unique)
const uniqueSubjectTaken = new Set();
studentExams.forEach(student => {
  student.exams.forEach(exam => {
    uniqueSubjectTaken.add(exam.subject);
  })
});
console.log("List of all subjects taken: ", uniqueSubjectTaken);

// Find top scorer in Math
let topScorerInMath = { name: "", score: -Infinity };

studentExams.forEach(student => {
  const mathExam = student.exams.find(exam => exam.subject === 'Math');
  if (mathExam && mathExam.score > topScorerInMath.score) {
    topScorerInMath = { name: student.name, score: mathExam.score };
  }
});
console.log("Top Scorer in Math", topScorerInMath);

// Total score in each subject (across all students)
const subjectTotals = {};
studentExams.forEach(student => {
  student.exams.forEach(exam => {
    if(!subjectTotals[exam.subject]) {
      subjectTotals[exam.subject] = 0;
    }
    subjectTotals[exam.subject] += exam.score;
  })
});
console.log("Total score per subject:", subjectTotals); 