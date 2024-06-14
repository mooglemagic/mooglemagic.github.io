// shortcuts
// windows + spacebar
// ctrl + spacebar

let lives = 5;
let englishVerbArray;
let englishVerb;

const verbs = {
	"To appear/come out": "でる",
	"To know": "しる",
	"To ride/ get on": "のる",
	"To fix/mend": "なおす",
	"To move operate": "うごく"
}

let questionLabel = document.getElementById("questionVerb");

// document.getElementById("test").textContent = verbs["appear/come out"];

function setRandomVerb() {
	let index = Math.floor(Math.random()*englishVerbArray.length)
	englishVerb = englishVerbArray[index];
}

function removeCurrentVerbFromArray() {
	englishVerbArray.indexOf(englishVerb)
}

function checkVerbEnglishToJapanese(englishQuestion, japaneseAnswer) {
	return verbs[englishQuestion] == japaneseAnswer;
}

function checkVerbJapaneseToEnglish(japaneseQuestion, englishAnswer) {
	// get key
	return true
}


function startGame() {
	englishVerbArray = Object.keys(verbs);
	setRandomVerb();
	console.log(englishVerb);
	questionLabel.innerHTML = englishVerb + ":"
	// check if user has won
	// check if user is out of lives
	// ask next question
}

startGame()