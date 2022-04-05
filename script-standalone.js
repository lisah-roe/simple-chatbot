// Simple chatbot, with help from: https://codepen.io/tariq01/pen/yLVMJrr
// Send text to the screen - can be a user-message or a bot-message, or any other class
function output(input, type = "bot-message") {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.className = `${type}`;
  userDiv.innerHTML = `${input}`;
  messagesContainer.appendChild(userDiv);
  // Ensures the next message shows at the bottom of the scroll
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;
}

// Generates a reply to user input
function response(input) {
  // Finds out if this is a greeting and response accordingly
  if (greetings.includes(input.toLowerCase())) {
    return "Hello, nice to meet you";
  }
  // Here we have the logic for replies
  // Currently just picking a reply a random
  else {
    let len = replies.length;
    let rand = Math.floor(Math.random() * len);
    return replies[rand];
  }
}

// Possible replies
const replies = [
  "Yeah, me too",
  "Thats cool",
  "Had you thought about other peoples feelings?",
  "What about taking that one step further?"
];

// Possible greetings
const greetings = ["hello", "hi", "hiya", "wotcha"];
