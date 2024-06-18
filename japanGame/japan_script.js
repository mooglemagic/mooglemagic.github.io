// shortcuts
// windows + spacebar
// ctrl + spacebar

let lives = 5;
let englishVerbArray;
let englishVerb;

let verbs = {
	"To appear/come out": "でる",
	"To know": "しる",
	"To ride/ get on": "のる",
	"To fix/mend": "なおす",
	"To move operate": "うごく",
	"To laugh": "わらう",
	"To be mad": "おこる",
	"To cry": "なく"
}

let questionLabel = document.getElementById("questionVerb");
let submitButton = document.getElementById("submit");
let answerInput = document.getElementById("answer");
let livesHeader = document.getElementById("lives");


submitButton.onclick = ()=> {
	let isAnswerCorrect = checkVerbEnglishToJapanese(englishVerb, answerInput.value);
	if (isAnswerCorrect == false) {
		reduceLife();
	} else {
		removeCurrentVerbFromArray();
	}
	playRound()
};

function setRandomVerb() {
	let index = Math.floor(Math.random()*englishVerbArray.length);
	englishVerb = englishVerbArray[index];
}

function removeCurrentVerbFromArray() {
	// console.log(
	// 	englishVerbArray.indexOf(englishVerb)
	// );
	delete verbs[englishVerb];
	console.log(verbs)
}

function checkVerbEnglishToJapanese(englishQuestion, japaneseAnswer) {
	// console.log(`${verbs[englishQuestion]} is the question and ${japaneseAnswer} is the answer`)
	return verbs[englishQuestion] == japaneseAnswer;
}

function checkVerbJapaneseToEnglish(japaneseQuestion, englishAnswer) {
	// get key
	return true
}

function reduceLife() {
	lives--;
	livesHeader.innerHTML = "Lives : " + lives;
}

function playRound() {
	englishVerbArray = Object.keys(verbs);
	setRandomVerb();
	console.log(englishVerb);
	questionLabel.innerHTML = englishVerb + ":"
}

// starts game
//further rounds instigated by button
playRound();