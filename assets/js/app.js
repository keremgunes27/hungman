var words = [
  "tuş",
  "elma",
  "güneş",
  "ev",
  "ay",
  "bahçe",
  "türkçe",
  "antep",
  "türkiye",
  "dost",
];

var randomWordNumber = Math.floor(Math.random() * 10); //  1-10

const wordList = document.querySelector(".words");

console.log(words[randomWordNumber]);
var gameWord = words[randomWordNumber].split("");

for (let i = 0; i < gameWord.length; i++) {
  const createLi = document.createElement("li");
  wordList.appendChild(createLi);
}
const wordLi = document.querySelectorAll(".words li");
const wrongwordLi = document.querySelector(".wrong-words");
var wrongLettersNumber = 0;
var succesLettersNumber = 0;
var succesLetters = [];
var wrongLetters = [];
const manImage = document.querySelector(".man-image img");
const manImageBg = document.querySelector(".man-image");
window.addEventListener("keydown", (e) => {
  console.log(succesLetters);

  for (let i = 0; i < gameWord.length; i++) {
    if (e.key == gameWord[i]) {
      if (!succesLetters.includes(e.key)) {
        succesLetters.push(e.key);

        succesLettersNumber++;
      }
      console.log("succesLetters.length " + succesLettersNumber);
      console.log("gameWord.length " + gameWord.length);
      if (succesLettersNumber >= gameWord.length) {
        manImageBg.style.backgroundColor = "green";
      }

      console.log("test");

      wordLi[i].innerHTML = e.key;
    }
  }
  if (!words[randomWordNumber].includes(e.key)) {
    if (!wrongLetters.includes(e.key)) {
      wrongLettersNumber++;
      const createWrongLi = document.createElement("li");
      createWrongLi.innerHTML = e.key;
      wrongwordLi.appendChild(createWrongLi);
      wrongLetters.push(e.key);
      switch (wrongLettersNumber) {
        case 1:
          manImage.src = "assets/img/image2.svg";
          break;
        case 2:
          manImage.src = "assets/img/image3.svg";
          break;
        case 3:
          manImage.src = "assets/img/image4.svg";
          break;
        case 4:
          manImage.src = "assets/img/image5.svg";
          break;
        case 5:
          manImage.src = "assets/img/image6.svg";
          manImageBg.style.backgroundColor = "red";
          break;

        default:
          break;
      }
    }
  }
});
