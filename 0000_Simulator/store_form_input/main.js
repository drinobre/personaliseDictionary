console.log(`hi`);

function getInputFromForm() {
  // users input the value on the fields
  let name = document.querySelector(`#newName`).value;
  let game = document.querySelector(`#newGame`).value;
  let score = document.querySelector(`#newScore`).value;
  return {
    name,
    game,
    score,
  };
}

function AddNewUser() {
  let inputUser = getInputFromForm();
  console.log(inputUser);
  return inputUser;
}

let submit = document.querySelector(`#submit`);
submit.addEventListener(`click`, AddNewUser);
