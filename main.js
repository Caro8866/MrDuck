const form = document.getElementById("message-submission");
const messageInput = document.getElementById("message");

form.addEventListener("submit", handleMessageSubmit);

messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior (form submission, new line in textarea, etc.)
    handleMessageSubmit(event); // Call the function to handle message submission
  }
});
// message array
let messages = [];

function handleMessageSubmit(e) {
  e.preventDefault(); // Prevent form submission

  // Get the text entered in the textarea
  const messageText = document.getElementById("message").value;

  // Create a new <li> element
  const newMessageItem = document.createElement("li");

  // Set the text content of the <li> to the message text
  newMessageItem.textContent = messageText;

  // Find the <ol> element with the class "messages"
  const messageList = document.querySelector(".messages");

  // Append the new <li> to the message list
  messageList.appendChild(newMessageItem);

  // Append message to array
  messages.push(messageText);

  // Clear the textarea
  document.getElementById("message").value = "";

  // Delay and then add duck's message
  setTimeout(() => {
    // Create a new <li> element for the duck's response
    const newDuckMessageItem = document.createElement("li");

    // Set the text content of the <li> to the duck's response
    newDuckMessageItem.textContent = "Quack Quack";

    // Add a class to the duck's message for styling
    newDuckMessageItem.classList.add("duck-message");

    // Append the new <li> to the message list
    messageList.appendChild(newDuckMessageItem);
  }, 1500); // Delay in milliseconds (adjust as needed)
}
