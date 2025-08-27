let userName = "Alice";
let userAge = 19;

if (userAge >= 18) {
  document.getElementById("greeting").textContent = `Welcome, ${userName}! You are old enough.`;
} else {
  document.getElementById("greeting").textContent = `Sorry, ${userName}. You are under 18.`;
}

function calculateTotal(price1, price2) {
  return price1 + price2;
}
function showTotal() {
  let total = calculateTotal(25, 40);
  document.getElementById("totalResult").textContent = `The total is: $${total}`;
}
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Number ${i}`;
  document.getElementById("numberList").appendChild(li);
}
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}
let toggleBtn = document.getElementById("toggleBtn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});
message.addEventListener("mouseover", () => {
  message.style.color = "red";
});
message.addEventListener("mouseout", () => {
  message.style.color = "green";
});
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JavaScript!";
document.body.appendChild(newPara);
