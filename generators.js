// Paginated Chat History Loader
const chatHistory = [
    { sender: "Alice", text: "Hey there!" },
    { sender: "Bob", text: "Hi! How’s your day?" },
    { sender: "Alice", text: "Pretty good, thanks!" },
    { sender: "Charlie", text: "Anyone up for coffee later?" },
    { sender: "Alice", text: "Count me in." },
    { sender: "Bob", text: "Me too!" },
    { sender: "Charlie", text: "Great, let’s meet at 4pm." },
    { sender: "Alice", text: "Perfect." },
    { sender: "Bob", text: "See you guys!" },
    { sender: "Charlie", text: "Bye for now." },
    { sender: "Alice", text: "Take care." },
    { sender: "Bob", text: "You too." }
]

class ChatHistory {
    #messages = [];

    addMessage(sender, text) {
        this.#messages.push({
            sender: sender,
            text: text,
            date: new Date()
        })
    }

    async *getMessagesPaginated(pageSize) {
        let start = 0

        while (start < chatHistory.length) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield this.#messages.slice(start, start + pageSize);
            start += pageSize;
        }
    }
}

const chat = new ChatHistory();

for (let msg of chatHistory) {
    chat.addMessage(msg.sender, msg.text);
}

(async () => {
    const pageSize = 5;
    const paginator = chat.getMessagesPaginated(pageSize);

    let result = await paginator.next();
    while (!result.done) {
        console.log("Loaded page: ", result.value);
        await new Promise (resolve => setTimeout(resolve, 1500));
        result = await paginator.next();
    }
    console.log(`No more messages`);
})();