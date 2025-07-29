// CREATING KEY/VALUE PAIRS WITH MAPS 
// ===========================================



// Quiz Score Tracker 

// 1. Questions stored in an array
const questions = [
    { id: 1, question: "What is 2 + 2?", correct: "4" },
    { id: 2, question: "What is the capital of France?", correct: "Paris" },
    { id: 3, question: "Which language runs in the browser?", correct: "JavaScript" }
];

// 2. User answers stored in a Map
const userAnswers = new Map();

// 3. Loop through questions and collect answers using prompt()
questions.forEach(q => {
    const answer = prompt(q.question);
    userAnswers.set(q.id, answer);
});

// 4. Calculate score
let score = 0;
questions.forEach(q => {
    const userAnswer = userAnswers.get(q.id);
    const isCorrect = userAnswer?.trim().toLowerCase() === q.correct.toLowerCase();

    console.log(`\nQuestion: ${q.question}`);
    console.log(`Your answer: ${userAnswer}`);
    console.log(isCorrect ? "COrrect!" : `Wrong! Correct answer is ${q.correct}`);
    if (isCorrect) score++;
});

// 5. Final Score
console.log(`Score: ${score} / ${questions.length}`);




// ===========================================

// Shopping Cart Analyzer (Map + Array Methods)


// Step 1: Create a shopping cart using Map where the key is a product ID, and the value is an object with product details
const cart = new Map([
    [101, { name: "Laptop", price: 30000, quantity: 1 }],
    [102, { name: "Headphones", price: 1500, quantity: 2 }],
    [103, { name: "Mouse", price: 800, quantity: 1 }],
    [104, { name: "Keyboard", price: 1200, quantity: 1 }]
]);

// Step 2: Convert the Map to an array of [key, value] pairs using entries(), then use map() to calculate total price per item
const itemsWithTotal = [...cart.entries()].map(([id, item]) => ({
    ...item,
    total: item.price * item.quantity
}));

// Step 3: Use reduce() to compute the total price of all items in the cart (grand total)
const itemsTotalPrice = itemsWithTotal.reduce((sum, c) => sum + c.total, 0);

// Step 4: Use filter() on the values of the Map to find items with quantity greater than 1 (bulk orders)
const bulkOrder = [...cart.values()].filter(item => item.quantity > 1);

// Step 5: Use find() on the values of the Map to search for a product with name 'Headphones'
const searchProduct = [...cart.values()].find(item => item.name === 'Headphones');

// Step 6: Use some() to check if there is **any** item in the cart with price greater than 20,000
const checkItem = [...cart.values()].some(item => item.price > 20000);

// Step 7: Log all the results to see the outputs
console.log(itemsWithTotal);
console.log(itemsTotalPrice);
console.log(bulkOrder);
console.log(searchProduct);
console.log(checkItem);



// ===========================================

// Student Grades Tracker

const students = new Map([
    [1, { name: "Ava", grades: [89, 92, 84], yearLevel: 3 }],
    [2, { name: "Noah", grades: [76, 80, 72], yearLevel: 2 }],
    [3, { name: "Liam", grades: [90, 88, 95], yearLevel: 4 }],
    [4, { name: "Emma", grades: [65, 70, 68], yearLevel: 1 }],
    [5, { name: "Sophia", grades: [85, 87, 90], yearLevel: 2 }]
]);

// Get average grades per student
const averageGrade = [...students.values()]
    .map(student => {
        const sum = student.grades.reduce((sum, grade) => sum + grade, 0);
        const total = student.grades.length;
        const average = sum / total;
        return { name: student.name, average: Math.round(average) };
    });
console.log("Average Grade per Student:");
console.table(averageGrade);

// Filter students with average > 85
const highAverage = averageGrade.filter(student => student.average > 85);
console.log("Students with Average > 85");
console.table(highAverage);

// Find any student with failed (any grade < 75)
const failedStudent = [...students.values()].find(student =>
    student.grades.some(grade => grade < 75)
    );
console.log("First Student with a failing grade (<75)");
console.log(failedStudent);

// Check if someone is in Year Level 4
const checkLevel = [...students.values()].some(student => student.yearLevel === 4);
console.log("Is there a student in Year Level 4?", checkLevel);



// ===========================================


// Gym Membership Management

const memberships = new Map([
  [201, { planName: "Basic", pricePerMonth: 400, durationMonths: 6, active: true }],
  [202, { planName: "Standard", pricePerMonth: 600, durationMonths: 12, active: true }],
  [203, { planName: "Premium", pricePerMonth: 1000, durationMonths: 3, active: false }],
  [204, { planName: "Student", pricePerMonth: 300, durationMonths: 4, active: true }],
  [205, { planName: "Corporate", pricePerMonth: 1500, durationMonths: 18, active: false }]
]);

// List each membership and compute its total cost (price × duration).
const totalCost = [...memberships.entries()].map(([id, membership]) => ({
    ...membership,
    total: membership.pricePerMonth * membership.durationMonths
}));
console.log("Total cost per membership:", totalCost);

// Filter all active memberships.
const activeMembership = [...memberships.values()].filter(member => member.active === true);
console.log("Active memberships:", activeMembership);

// Check if any membership has more than 12 months duration.
const longDuration = [...memberships.values()].some(duration => duration.durationMonths > 12);
console.log("Has membership longer than 12 months?", longDuration);

// Find a plan that costs less than ₱500/month.
const lowPrice = [...memberships.values()].find(price => price.pricePerMonth < 500);
console.log("Plan cheaper than ₱500/month:", lowPrice);

// Get the total revenue from active plans.
const totalActivePrice = activeMembership.reduce((sum, plan) => sum + plan.pricePerMonth, 0);
console.log("Total revenue from active plans (per month):", totalActivePrice);




// ===========================================

// Order Management System

const orders = new Map([
  [301, { customerName: "Jenna", status: "delivered", items: [
    { name: "Phone", price: 15000, quantity: 1 },
    { name: "Charger", price: 1000, quantity: 1 }
  ]}],
  [302, { customerName: "Caleb", status: "pending", items: [
    { name: "Monitor", price: 7000, quantity: 1 },
    { name: "HDMI Cable", price: 500, quantity: 2 }
  ]}],
  [303, { customerName: "Luna", status: "delivered", items: [
    { name: "Tablet", price: 12000, quantity: 1 }
  ]}],
  [304, { customerName: "Mika", status: "cancelled", items: [
    { name: "USB Drive", price: 300, quantity: 3 }
  ]}],
  [305, { customerName: "Aiden", status: "delivered", items: [
    { name: "Laptop", price: 45000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 1 }
  ]}]
]);

// 1. Compute total cost of each order
const orderTotals = [...orders.entries()].map(([id, order]) => {
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    orderID: id,
    customer: order.customerName,
    total
  };
});
console.log("Total cost of each order:", orderTotals);

// 2. Filter delivered orders
const deliveredOrders = [...orders.values()].filter(order => order.status === "delivered");
console.log("Delivered Orders:", deliveredOrders);

// 3. Check if there are any cancelled orders
const hasCancelled = [...orders.values()].some(order => order.status === "cancelled");
console.log("Any cancelled orders?", hasCancelled);

// 4. Get total revenue from delivered orders
const totalRevenue = deliveredOrders.reduce((sum, order) => {
  return sum + order.items.reduce((itemSum, item) => itemSum + item.price * item.quantity, 0);
}, 0);
console.log("Total revenue from delivered orders:", totalRevenue);

// 5. Find a customer who bought a Monitor
const monitorBuyer = [...orders.values()].find(order =>
  order.items.some(item => item.name === "Monitor")
);
console.log("Customer who bought a Monitor:", monitorBuyer?.customerName || "None");


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
