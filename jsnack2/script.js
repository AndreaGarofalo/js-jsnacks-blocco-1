console.log("JS OK");

// SNACK 2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa. (vietato usare includes() )

const partecipant = ["Pippo", "Ciccio", "Gennarino", "Franco", "Pdor"];

const nameField = document.getElementById("name");
const button = document.getElementById("button");
const partecipation = document.getElementById("target");

button.addEventListener("click", function () {
  const userName = nameField.value.trim();

  if (!userName) {
    partecipation.innerText = "Non hai compilato il form";
    return;
  }

  let isAllowed = false;

  for (let i = 0; i < partecipant.length; i++) {
    const currentPartecipant = partecipant[i];
    if (currentPartecipant === userName) {
      isAllowed = true;
    }
  }
  if (isAllowed) {
    partecipation.innerText = "Benvenuto";
  } else {
    partecipation.innerText = "Non sei uno degli invitati";
  }
});
