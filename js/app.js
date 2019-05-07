/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

const buttonReset = document.getElementById("btn__reset");
buttonReset.addEventListener("click", () => {
  game.startGame();
  let keys = document.querySelectorAll(".key");
  keys.forEach(element => {
    element.addEventListener("click", e => {
      game.handleInteraction(e.target);
    });
  });
  document.addEventListener("keypress", function(event) {
    console.log(event);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      game.handleInteraction(event.key.toLowerCase());
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
      game.handleInteraction(event.key);
    }
  });
});
