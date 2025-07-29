
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
