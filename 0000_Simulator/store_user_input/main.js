let userInput = function getUserName() {
  let nameField = document.querySelector("#nameField").value;
  let result = document.querySelector("#result");

  result.innerText = nameField;
};

let subButton = document.getElementById("subButton");
subButton.addEventListener("click", userInput);

console.log(userInput);
