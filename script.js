var science = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
];

var memes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
];

const quotesByCategory = {
	"science": [
		"The only way to do great work is to love what you do. - Steve Jobs",
		"Believe you can and you're halfway there. - Theodore Roosevelt",
		"In the middle of difficulty lies opportunity. - Albert Einstein"
	],
	"memes": [
		"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
		"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
		"You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
	],
	"inspirational": [
		"I'm not clumsy, I'm just gravity's best friend.",
		"I'm on a whiskey diet. I've lost three days already.",
		"I'm not lazy, I'm just in energy-saving mode."
	],
	"anime": [
		"I'm not clumsy, I'm just gravity's best friend.",
		"I'm on a whiskey diet. I've lost three days already.",
		"I'm not lazy, I'm just in energy-saving mode."
	]
};
let index = 0;
function displayText() {
	const categoryElements = document.getElementsByName("category");
    let selectedCategory = "";
    for (let i = 0; i < categoryElements.length; i++) {
        if (categoryElements[i].checked) {
            selectedCategory = categoryElements[i].id;
            break;
        }
    }  
	const quotes = quotesByCategory[selectedCategory];
	var text = document.getElementById("quote");
	text.textContent = quotes[index];
}

function nextQuote() {
  index = (index + 1) % science.length;
  displayText();
}

function prevQuote() {
  index = (index - 1 + science.length) % science.length;
  displayText();
}

function ranQuote() {
  index = Math.floor(Math.random() * science.length);
  displayText();
}

function switchTheme() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

function increase() {
  var quote = document.getElementById("quote");
  var currentSize = parseFloat(
    window.getComputedStyle(quote).getPropertyValue("font-size")
  );
  var newSize = currentSize + 2;
  quote.style.fontSize = newSize + "px";
}

function decrease() {
  var quote = document.getElementById("quote");
  var currentSize = parseFloat(
    window.getComputedStyle(quote).getPropertyValue("font-size")
  );
  var newSize = currentSize - 2;
  quote.style.fontSize = newSize + "px";
}

