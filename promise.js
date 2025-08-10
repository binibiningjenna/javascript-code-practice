// ASYNC, AWAIT AND PROMISES


// Grocery Delivery Simulation
function checkInventory(item) {
    console.log(`Checking inventory for: ${item}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (item === 'eggs' || item === 'milk') {
                console.log(`Item available: ${item}`);
                resolve(item);
            } else {
                reject(`Error: ${item} is out of stock.`);
            }
        }, 2000)
    })
}

function processPayment(amount) {
    console.log(`Processing payment of ₱${amount}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Payment of ₱${amount} successful.`)
        }, 3000);
    })
}

function scheduleDelivery() {
    console.log(`Scheduling delivery...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Delivery scheduled successfully`);
        }, 1000);
    })
}

async function placeOrder(item, amount) {
    try {
        await checkInventory(item);
        const paymentMessage = await processPayment(amount);
        console.log(paymentMessage);

        const deliveryMessage = await scheduleDelivery();
        console.log(deliveryMessage);

        console.log('Order complete! Your groceries are on the way.');
    } catch (error) {
        console.error(error);
    }
}

const itemToOrder = 'eggs';
const paymentAmount = 150;

placeOrder(itemToOrder, paymentAmount);




// ====================================

// Online Book Order System

function checkBookStock(bookTitle) {
    console.log(`Checking stock for: ${bookTitle}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bookTitle === 'JavaScript Basics' || bookTitle === 'Async in Depth') {
                console.log(`Book in stock: ${bookTitle}`);
                resolve(bookTitle);
            } else {
                reject(`Error: ${bookTitle} is not available in stock.`);
            }
        }, 2000)
    })
}

function processPayment(price) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (price > 0) {
                resolve(`Payment of ₱${price} successful`);
            } else {
                reject(`Error: Invalid Price`);
            }
        }, 1500);
    })
}

function sendConfirmationEmail(bookTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Confirmation email sent for your order: ${bookTitle}`);
        }, 1000);
    })
}

async function placeBookOrder(bookTitle, price) {
    try {
        await checkBookStock(bookTitle);

        const processMessage = await processPayment(price);
        console.log(processMessage);

        const confirmationMessage = await sendConfirmationEmail(bookTitle);
        console.log(confirmationMessage);

        console.log('Order Complete!');
    } catch (error) {
        console.log(error);
    }
}

const bookOrder = 'Java';
const bookPrice = 25;

placeBookOrder(bookOrder, bookPrice);



// ========================================

// Online Movie Ticket Booking System

function checkSeatAvailability(seatNumber) {
    console.log(`Checking availability for seat: ${seatNumber}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seatNumber >= 1 && seatNumber <= 100) {
                console.log(`Seat available: ${seatNumber}`);
                resolve(seatNumber);
            } else {
                reject(`Error: Seat ${seatNumber} is not available.`);
            }
        }, 2000);
    })
}

function processPayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 0) {
                resolve(`Payment of ₱${amount} successful.`);
            } else {
                reject(`Error: Invalid Transaction.`);
            }
        }, 1000);
    })
}

function generateTicket(movieTitle, seatNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Ticket Confirmed for ${movieTitle} - Seat ${seatNumber}`);
        }, 1000);
    })
}

async function bookMovieTicket(movieTitle, seatNumber, amount) {
    try {
        await checkSeatAvailability(seatNumber);

        const moviePaymentProcess = await processPayment(amount);
        console.log(moviePaymentProcess);

        const ticketGenerationProcess = await generateTicket(movieTitle, seatNumber);
        console.log(ticketGenerationProcess);

        console.log('Enjoy your movie');
    } catch (error) {
        console.log(error);
    }
}

const selectedMovie = "The Great Adventure";
const selectedSeat = 45;
const ticketPrice = 350;

bookMovieTicket(selectedMovie, selectedSeat, ticketPrice);



// ===============================

// Detect Plagiarism in Uploaded Assignments

function scanForForbiddenKeywords(text) {
    console.log('Scanning assignment...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text.includes('ChatGPT') || text.includes('AI-generated')) {
                reject(`Rejected: Contains forbidden keyword`)
            } else {
                resolve('Scan Complete');
            }
        }, 1500);
    })
}


function checkOriginalityScore() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const score = Math.floor((Math.random() * 100) + 1);
            if (score >= 60) {
                resolve(`Originality Score: ${score}`);
            } else {
                reject(`Rejected: Originality score too low (${score})`);
            }
        }, 1500);
    })
}

function saveAssignment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Assignment saved to database');
        }, 1000);
    })
}

async function submitAssignment(text) {
    try {
        const forbiddenMessage = await scanForForbiddenKeywords(text);
        console.log(forbiddenMessage);

        const scoreMessage = await checkOriginalityScore();
        console.log(scoreMessage);

        const saveMessage = await saveAssignment();
        console.log(saveMessage);

        console.log('Assignment accepted!');
    } catch (error) {
        console.log(error);
        console.log('Assignment rejected.');
    }
}

const assignment = 'This is my work';

submitAssignment(assignment);