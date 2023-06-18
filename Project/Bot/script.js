let messages = document.getElementById("messages");
let input = document.getElementById("input");
let sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  let message = input.value;
  input.value = "";
  let messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("user-message");
  messages.appendChild(messageElement);

  let botMessage = generateBotMessage(message);

  setTimeout(function() {
    let botMessageElement = document.createElement("div");
    botMessageElement.innerText = botMessage;
    botMessageElement.classList.add("bot-message");
    messages.appendChild(botMessageElement);
  }, 1000);
}

function generateBotMessage(message) {
  let responses = {
    "hello": "Hi there!",
    "how are you": "I'm doing well. How are you?",
    "what's your favorite color?": "I'm a bot. I don't have a favorite color.",
    "goodbye": "Goodbye!"
  };

  let response = "I'm sorry, I don't understand.";

  for(let key in responses) {
    if(message.toLowerCase().includes(key)) {
      response = responses[key];
    }
  }

  return response;
}