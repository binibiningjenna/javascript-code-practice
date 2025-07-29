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