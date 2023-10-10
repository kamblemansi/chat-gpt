// JavaScript functionality

function createNewChat() {
    const existingChats = document.querySelector("#existing-chats");
    const newChatText = "New Chat"; // Default chat text

    // Create a new chat div
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.textContent = newChatText;

    // Add the new chat to the existing chats
    existingChats.appendChild(chatDiv);
}

// Function to display a message in the right pane
function displayMessage() {
    const messageInput = document.querySelector("#message-input");
    const messageArea = document.querySelector("#message-area");
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = messageText;
        messageArea.appendChild(messageDiv);
        messageInput.value = "";

        // Scroll to the bottom of the message area to show the new message
        messageArea.scrollTop = messageArea.scrollHeight;
    }
}

const hideButton = document.getElementById('hideButton');
const leftPane = document.getElementById('leftPane');
const hideButtonTop = document.getElementById('hideButtonTop');

// Function to hide the left pane and create the hide button at the top left
hideButton.addEventListener('click', () => {
    leftPane.style.display = 'none';
    
    // Set the display style of the top-left hide button to 'block'
    hideButtonTop.style.display = 'block';
});

// Function to show the left pane and hide the top-left hide button
hideButtonTop.addEventListener('click', () => {
    leftPane.style.display = 'block';
    hideButtonTop.style.display = 'none';
});



// Function to change button color on click
function changeButtonColor(buttonId) {
    const button = document.querySelector(`#${buttonId}`);
    button.classList.toggle("dark-button");
}

// Add event listeners

document.querySelector("#send-button").addEventListener("click", displayMessage);
document.querySelector("#add-chat-button").addEventListener("click", createNewChat);

document.querySelector("#button1").addEventListener("click", () => changeButtonColor("button1"));
document.querySelector("#button2").addEventListener("click", () => changeButtonColor("button2"));
document.querySelector(".new-chat-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        createNewChat();
    }
});
// Initially create a new chat when the page loads
createNewChat();


