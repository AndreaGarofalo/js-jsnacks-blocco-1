console.log("JS OK");
// SNACK 1
// Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.

const finalNumbers = document.getElementById("target");
let userNumbers = 0;

for (let i = 0; i < 10; i++) {
  userNumbers += parseInt(prompt("scrivi un numero", 1).trim());
  if (isNaN(userNumbers)) {
    alert("I dati inseriti non sono corretti");
    break;
  }
  console.log(userNumbers);
}

finalNumbers.innerHTML = `<p>The sum of the numbers you have chosen is: <strong>${userNumbers}</strong></p>`;
