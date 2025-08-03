// Fetch and Display Post Titles
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");

xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        const counter = 5;
        for (let i = 0; i < counter; i++) {
            console.log(`Post ${i + 1}: ${data[i].title} `)
        }
    } else {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
}

xhr.send();



// Get a Random User's Full Name and Email
const user = new XMLHttpRequest();

user.open("GET", "https://randomuser.me/api/");

user.onload = function () {
    if (user.status === 200) {
        const result = JSON.parse(user.responseText);
        const person = result.results[0];

        const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
        const email = person.email;

        console.log(`👤 Full Name: ${fullName}`);
        console.log(`📧 Email: ${email}`);
    } else {
        console.log(`Error ${user.status}: ${user.statusText}`);
    }
};

user.send();


//  Random User Identity Card Generator
const randomUser = new XMLHttpRequest();

randomUser.open("GET", "https://randomuser.me/api/?results=3");

randomUser.onload = function () {
    if (randomUser.status === 200) {
        const result = JSON.parse(randomUser.responseText);

        for (let i = 0; i < result.results.length; i++) {
            const user = result.results[i];

            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const email = user.email;
            const location = `${user.location.city}, ${user.location.country}`;
            const birthday = new Date(user.dob.date).toDateString();
            const picture = user.picture.thumbnail;

            console.log(`👤 Full Name: ${fullName}`);
            console.log(`📧 Email: ${email}`);
            console.log(`🌍 Location: ${location}`);
            console.log(`📅 Birthday: ${birthday}`);
            console.log(`📸 Picture: ${picture}`);
            console.log("----------------------------");
        }

    } else {
        console.log(`Error ${randomUser.status}: ${randomUser.statusText}`);
    }
};

randomUser.send();



// Find the Oldest Programmer
const applicant = new XMLHttpRequest();

applicant.open("GET", "https://randomuser.me/api/?results=5");

applicant.onload = function () {
    if (applicant.status === 200) {
        const result = JSON.parse(applicant.responseText);
        const sorted = result.results.sort((a, b) => b.dob.age - a.dob.age);
        const oldest = sorted[0];

        const name = `${oldest.name.title} ${oldest.name.first} ${oldest.name.last}`;
        const age = `${oldest.dob.age}`;
        const email = `${oldest.email}`;
        const nationality = `${oldest.nat}`;
        const birthday = new Date(oldest.dob.date).toDateString();
        const gender = `${oldest.gender}`;

        console.log(`👑 Oldest Applicant`);
        console.log(`👤 Name: ${name}`);
        console.log(`🎂 Age: ${age}`);
        console.log(`📧 Email: ${email}`);
        console.log(`🌍 Nationality: ${nationality}`);
        console.log(`📅 DOB: ${birthday}`);
        console.log(`⚧ Gender: ${gender}`);
        console.log("----------------------------");
    } else {
        console.log(`Error ${applicant.status}: ${applicant.statusText}`);
    }
}

applicant.send();



// SpaceX Mission Tracker
const space = new XMLHttpRequest();

space.open("GET", "https://api.spacexdata.com/v4/launches/past");

space.onload = function () {
    const data = JSON.parse(space.responseText);

    const sorted = data.sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc));
    const latest = sorted.slice(0, 3);

    latest.forEach(launch => {
        getRocketAndPadInfo(launch);
    });
};

space.send();

function getRocketAndPadInfo(launch) {
    const rocketId = launch.rocket;
    const padId = launch.launchpad;

    // Get rocket name
    const rocketXHR = new XMLHttpRequest();
    rocketXHR.open("GET", `https://api.spacexdata.com/v4/rockets/${rocketId}`);
    rocketXHR.onload = function () {
        const rocket = JSON.parse(rocketXHR.responseText);

        // Get launchpad name
        const padXHR = new XMLHttpRequest();
        padXHR.open("GET", `https://api.spacexdata.com/v4/launchpads/${padId}`);
        padXHR.onload = function () {
            const pad = JSON.parse(padXHR.responseText);

            console.log(`🚀 Mission: ${launch.name}`);
            console.log(`📅 Date: ${new Date(launch.date_utc).toDateString()}`);
            console.log(`🛰️ Rocket: ${rocket.name}`);
            console.log(`🌍 Launch Site: ${pad.name}`);
            console.log(`✅ Success: ${launch.success}`);
            console.log("----------------------------");
        };
        padXHR.send();
    };
    rocketXHR.send();
}
