// Double the Numbers (map + arrow function)
const nums = [1, 2, 3, 4, 5];

// 👉 Create a new array with each number doubled.
const doubled = num => nums.map(num => num * 2);
console.log(doubled(nums));


// Filter Even Numbers (filter + arrow function)
const numbers = [10, 15, 20, 25, 30];

// 👉 Return a new array that only contains even numbers.
const filterArray = number => numbers.filter(num => num % 2 === 0);
console.log(filterArray(numbers));


// Get First Three Elements (slice)
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// 👉 Use slice() to return the first 3 fruits.
const sliceFruits = fruits.slice(0, 3);
console.log(sliceFruits);


// Remove One Item (splice)
const colors = ['red', 'green', 'blue', 'yellow'];

// 👉 Use splice() to remove 'blue' from the array.
const removeItem = colors.splice(2, 1);
console.log(removeItem);
console.log(colors);


// Add Item Without Modifying Original (spread)
const animals = ['dog', 'cat', 'rabbit'];

// 👉 Use spread operator to create a new array with 'hamster' added at the end.
const newAnimals = [...animals, 'hamster'];
console.log(newAnimals);
console.log(animals);


// Capitalize Words (map + arrow + spread)
const words = ['hello', 'world'];

// 👉 Return a new array with each word capitalized: ['Hello', 'World']
const capitalized = word => words.map(w => w.charAt(0).toUpperCase() + w.substring(1));
console.log(capitalized(words));


// Uppercase All Words (map)
const fruitsList = ['apple', 'banana', 'cherry'];

// 👉 Return a new array with all words in UPPERCASE
const uppercase = fruit => fruitsList.map(list => list.toUpperCase());
console.log(uppercase(fruitsList));


// Filter Words with Length > 5 (filter)
const wordChoices = ['pear', 'pineapple', 'grape', 'watermelon'];

// 👉 Return a new array that only includes words longer than 5 letters
const longWords = wordChoices.filter(word => word.length > 5);
console.log(longWords);


// Get Last Two Items (slice)
const cityNames = ['Manila', 'Cebu', 'Davao', 'Baguio'];

// 👉 Use slice() to get the last 2 cities
const lastCities = cityNames.slice(-2);
console.log(lastCities);


// Insert Item into Middle (splice)
const techStack = ['HTML', 'CSS', 'JavaScript'];

// 👉 Insert 'Bootstrap' between 'CSS' and 'JavaScript'
techStack.splice(2, 0, 'Bootstrap');
console.log(techStack);


// Merge Arrays with Spread
const frontEndTools = ['HTML', 'CSS'];
const backEndTools = ['PHP', 'MySQL'];

// 👉 Create a new array using spread
const fullStack = [...frontEndTools, ...backEndTools];
console.log(fullStack);


// Group Numbers by Even and Odd
const mixedNumbers = [10, 3, 7, 4, 9, 2, 5];

const evenNumber = mixedNumbers.filter(num => num % 2 === 0);
const oddNumber = mixedNumbers.filter(num => num % 2 !== 0);

const result = {
    even: evenNumber,
    odd: oddNumber
};

console.log(result);


//  Advanced Student Score Processor
const studentsData = [
    { name: 'Anna', score: 87 },
    { name: 'Ben', score: 59 },
    { name: 'Cathy', score: 94 },
    { name: 'Daniel', score: 76 },
    { name: 'Ella', score: 65 },
    { name: 'Frank', score: 47 },
];

const passingStudents = studentsData
    .filter(student => student.score >= 60)
    .map(student => ({
        name: student.name.toUpperCase(),
        score: student.score,
        status: 'Passed'
    }));
passingStudents.splice(2, 0, { name: 'Grace', score: 90, status: 'Passed' });
const averagePassingScore = passingStudents.reduce((sum, student) => sum + student.score, 0) / passingStudents.length;

const resultData = {
    averagePassingScore: averagePassingScore,
    passingStudents: [...passingStudents],
    allStudents: [...studentsData]
};
console.log(resultData);


// Online Store Product Analyzer
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 59999, stock: 10 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 29999, stock: 0 },
    { id: 3, name: "Shoes", category: "Fashion", price: 1999, stock: 23 },
    { id: 4, name: "Backpack", category: "Fashion", price: 899, stock: 15 },
    { id: 5, name: "Coffee Maker", category: "Home", price: 2499, stock: 5 },
    { id: 6, name: "Headphones", category: "Electronics", price: 1499, stock: 7 },
];

const productStocks = products.filter(product => product.stock > 0);
const mapStock = productStocks.map(product => ({
    name: product.name.toUpperCase(),
    price: '₱' + product.price.toLocaleString()
}));
const highestPrice = Math.max(...products.map(product => product.price));
const highestPricedProduct = products.find(product => product.price === highestPrice);
const hasLowStock = products.some(product => product.stock < 10);
const totalnventory = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
const newProduct = products.splice(2, 3, { id: 7, name: "Air Fryer", category: "Home", price: 3599, stock: 12 });
const newResult = [
    ...products,
    { id: 8, name: "Desk Lamp", category: "Home", price: 799, stock: 30 }
]

console.log("Products in stock:", productStocks);
console.log("Mapped stock display:", mapStock);
console.log("Highest priced product:", highestPricedProduct);
console.log("Any product with low stock?", hasLowStock);
console.log("Total Inventory Value:", totalInventory);
console.log("New Products after Splice:", newProduct);
console.log("Final Product List:", newResult);


// Movie Review Analyzer
const reviews = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, reviewer: "Alice" },
    { title: "The Notebook", genre: "Romance", rating: 7.9, reviewer: "Ben" },
    { title: "Avengers: Endgame", genre: "Action", rating: 8.4, reviewer: "Clara" },
    { title: "Parasite", genre: "Thriller", rating: 8.6, reviewer: "Daniel" },
    { title: "Twilight", genre: "Romance", rating: 5.2, reviewer: "Ella" },
];

const ratings = reviews.filter(movie => movie.rating > 8.0);
const mapRating = ratings.map(rate => ({
    movie: rate.title,
    score: rate.rating
}));
const lowestRating = Math.min(...reviews.map(movie => movie.rating));
const lowestRatedMovie = reviews.find(movie => movie.rating === lowestRating);
const checkRomanceMovie = reviews.some(movie => movie.genre === 'Romance');
const sortedMovie = [...reviews].sort((a, b) => a.rating - b.rating);
const groupByGenre = reviews.reduce((acc, review) => {
    const genre = review.genre;

    if (!acc[genre]) {
        acc[genre] = [];
    }

    acc[genre].push(review);
    return acc;
}, {});
const replacedReviews = [...reviews];
replacedReviews.splice(4, 1, { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, reviewer: "Faye" });
const newReviewList = [...replacedReviews];
newReviewList.splice(5, 0, { title: "Dune", genre: "Sci-Fi", rating: 8.3, reviewer: "Gwen" });
