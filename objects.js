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

const fruits = Object.values(fruitInventory);
const soldOut = fruits.some((fruit => fruit === 0));
console.log(soldOut);


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


// Print how many movies you've watched in each genre.
// Find the genre with the most movies watched.
// Get the total number of movies you've watched in all genres
const movieWatchlist = {
  Action: ["Mad Max", "John Wick", "Die Hard"],
  Comedy: ["The Mask", "Superbad"],
  Drama: ["The Godfather", "Forrest Gump", "Fight Club", "Titanic"],
  SciFi: ["Interstellar", "Inception"]
};

let mostWatchedGenre = '';
let mostWatchedCount = 0;
let totalMovies = 0;

for ( let [genre, movies] of Object.entries(movieWatchlist)) {
    const count = movies.length;
    console.log(`${genre} : ${count} movies`);
    totalMovies+= count;

    if (count > mostWatchedCount) {
        mostWatchedGenre = genre;
        mostWatchedCount = count;
    }
}

console.log(`\nYou watched the most ${mostWatchedGenre} movies: ${mostWatchedCount}`);
console.log(`Total movies watched: ${totalMovies}`);



// Employee Attendance Tracker
// Print each employee’s name and how many days they were present.
// Calculate and print the average attendance of all employees.
// List employees who were present less than 18 days.
// Find the employee(s) with perfect attendance (22 days).
const attendanceRecord = {
  Alice: 22,
  Bob: 19,
  Charlie: 20,
  Dana: 17,
  Ethan: 22,
  Fiona: 15
};

let totalAttendance = 0;
let lowAttendance = [];
let perfectAttendance = [];
const maxDays = Math.max(...Object.values(attendanceRecord));

for (let [employee, daysPresent] of Object.entries(attendanceRecord)) {
    console.log(`${employee} : ${daysPresent} days present`);
    totalAttendance += daysPresent;

    if (daysPresent < 18) {
        lowAttendance.push(employee);
    }

    if(daysPresent === maxDays) {
        perfectAttendance.push(employee);
    }
}

let averagePresentDays = totalAttendance / Object.keys(attendanceRecord).length;
console.log(`Average Attendance: ${averagePresentDays.toFixed(2)}`);
console.log(`Employees with less than 18 days: ${lowAttendance.join(', ')}`);
console.log(`Perfect Attendance: ${perfectAttendance.join(', ')}`);



// Monthly Sales Report
// Total Sales per Employee – Calculate and log the total sales for each employee.
// Top Seller – Identify and log the name(s) of the employee(s) with the highest total sales.
// Employees Below Average – Compute the average total sales of all employees, then list those whose total sales are below the average.
const salesData = {
  Alice: [1200, 1300, 1250, 1400, 1500, 1600],
  Bob: [900, 950, 1000, 980, 1100, 1200],
  Charlie: [1500, 1600, 1550, 1650, 1700, 1750],
  Dana: [800, 750, 770, 820, 790, 850],
  Ethan: [1300, 1350, 1320, 1400, 1380, 1420]
};

let totalSales = 0;
const employeeTotals = {}; // store name: total
const topSeller = [];
const belowAverage = [];

// 1. Calculate total sales per employee and accumulate totalSales
for (const [employee, sales] of Object.entries(salesData)) {
  const total = sales.reduce((sum, val) => sum + val, 0);
  employeeTotals[employee] = total;
  totalSales += total;
}

// 2. Compute average and highest
const totalsArray = Object.values(employeeTotals);
const highestSales = Math.max(...totalsArray);
const averageSales = totalSales / totalsArray.length;

// 3. Identify top sellers and below-average employees
for (const [employee, total] of Object.entries(employeeTotals)) {
  if (total === highestSales) {
    topSeller.push(employee);
  }
  if (total < averageSales) {
    belowAverage.push(employee);
  }
}

// 4. Output
console.log("Sales Totals:");
for (const [employee, total] of Object.entries(employeeTotals)) {
  console.log(`${employee}: ${total}`);
}

console.log(`\nTop Seller(s): ${topSeller.join(', ')}`);
console.log(`Below Average: ${belowAverage.join(', ')}`);
console.log(`Average Sales: ${averageSales}`);
