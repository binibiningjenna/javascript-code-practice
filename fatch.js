async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await response.json();
        const firstFive = data.slice(0, 5);

        firstFive.forEach(post => {
            console.log(`Post ID: ${post.id}`);
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('--------------------');
        });
    } catch (error) {
        console.log(error);
    }
}

getPost();





async function getUser() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();

        data.results.forEach(user => {
            console.log(`Full Name: ${user.name.first} ${user.name.last}`);
            console.log(`Country: ${user.location.country}`);
            console.log('------------------------');
        });

    } catch (error) {
        console.log(error);
    }
}

getUser();