const socket = io();

const formId = document.getElementById("form");
const inputId = document.getElementById("input");
const messages = document.getElementById("messages");

formId.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputId.value) {
    socket.emit("chat message", inputId.value);
  }
  inputId.value = "";
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
