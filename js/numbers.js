console.log("JS OK");

const finalNumbers = document.getElementById("target");
let userNumbers = 0;

for (i = 0; i < 10; i++) {
  userNumbers += parseInt(prompt("scrivi un numero", 1).trim());
  if (isNaN(userNumbers)) {
    alert("I dati inseriti non sono corretti");
    break;
  }
  console.log(userNumbers);
  finalNumbers.innerHTML = `<p>The sum of the numbers you have chosen is: <strong>${userNumbers}</strong></p>`;
}
