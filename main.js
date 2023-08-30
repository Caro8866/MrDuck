const form = document.getElementById("message-submission");

form.addEventListener("submit", handleMessageSubmit);

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
}
