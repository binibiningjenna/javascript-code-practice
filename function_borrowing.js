// call()	Immediately calls the function with given this and arguments.
// apply()	Same as call() but arguments are passed as an array.
// bind()	Returns a new function with bound this, to be called later.



// Personal Introductions
function introduce(city) {
  console.log(`Hello! I'm ${this.firstName} ${this.lastName}, a ${this.job} from ${city}.`);
}

const person1 = {
  firstName: 'Jenna',
  lastName: 'Reyes',
  job: 'Developer'
};

const person2 = {
  firstName: 'Jomari',
  lastName: 'Castillo',
  job: 'Designer'
};

// Using call()
introduce.call(person1, 'Quezon City');

// Using apply()
introduce.apply(person2, ['Cebu City']);

// Using bind()
const boundIntro = introduce.bind(person1, 'Manila');
boundIntro();





// Payment System Logging
const logTransaction = function(amount, item) {
    console.log(`${this.name} paid ₱${amount} for ${item}`);
}

const customer1 = {
    name: "Jenna"
}

const customer2 = {
    name: "Jomari"
}

// Using call()
logTransaction.call(customer1, 500, 'Keyboard');

// Using apply()
logTransaction.apply(customer2, [1299, 'Headphone']);

// Using bind()
const boundTransaction = logTransaction.bind(customer1, 100, 'Pen');
boundTransaction();





// Role-Based Access Logger
const logAccess = function(resource, time) {
  console.log(`[${this.role}] user ${this.name} accessed ${resource} at ${time}`);
};

// 2. Users
const admin = {
  name: 'Jenna',
  role: 'Admin'
};

const guest = {
  name: 'Jomari',
  role: 'Guest'
};

// 3. Using call() 
logAccess.call(admin, 'Dashboard', '10:00 AM');

// 4. Using apply() 
logAccess.apply(guest, ['Homepage', '10:05 AM']);

// 5. Using bind() 
const adminLogger = logAccess.bind(admin);
adminLogger('Settings', '10:15 AM');
