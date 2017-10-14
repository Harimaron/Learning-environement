
/*JEUX-DU-PENDU*/

function guessLetter() {
    var textTyped = window.prompt('Enter a letter here')[0];
    for (var i = 0; i < word.length; i = i + 1) {
      var letter = word[i];
      if (letter.toLowerCase() === textTyped.toLowerCase()) wordGuessed[i] = letter;
    }
    alert(wordGuessed.join(' '));
    if (wordGuessed.indexOf("_") === -1) alert("Congratulations!");
    else guessLetter();
  }
  var word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
  var wordGuessed = ['_', '_', '_', '_', '_', '_', '_'];
  guessLetter();

  
/* Déclarez des variables. */

var min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var sum = min + max;

alert(min + ' ' + max + ' ' + sum);