const form = document.getElementById("message-submission");
const messageInput = document.getElementById("message");

// Retrieve messages from LocalStorage when the page loads
window.addEventListener("load", () => {
  const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
  messages = storedMessages;
  displayMessages();
});

form.addEventListener("submit", handleMessageSubmit);

messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleMessageSubmit(event);
  }
});

let messages = [];

function handleMessageSubmit(e) {
  e.preventDefault();
  const messageText = document.getElementById("message").value;
  const newMessageItem = document.createElement("li");
  newMessageItem.textContent = messageText;
  const messageList = document.querySelector(".messages");
  messageList.appendChild(newMessageItem);
  messages.push(messageText);
  document.getElementById("message").value = "";
  saveMessagesToLocalStorage(); // Save messages to LocalStorage
  setTimeout(() => {
    const newDuckMessageItem = document.createElement("li");
    newDuckMessageItem.textContent = "Quack Quack";
    newDuckMessageItem.classList.add("duck-message");
    messageList.appendChild(newDuckMessageItem);
  }, 1500);
}

// Function to save messages to LocalStorage
function saveMessagesToLocalStorage() {
  localStorage.setItem("messages", JSON.stringify(messages));
}

// Function to display messages from the messages array
function displayMessages() {
  const messageList = document.querySelector(".messages");
  messageList.innerHTML = ""; // Clear existing messages
  messages.forEach((messageText) => {
    const newMessageItem = document.createElement("li");
    newMessageItem.textContent = messageText;
    messageList.appendChild(newMessageItem);
  });
}

// Call displayMessages() initially to load messages from LocalStorage
displayMessages();
