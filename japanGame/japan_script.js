// shortcuts
// windows + spacebar
// ctrl + spacebar

let lives = 5;
let englishVerbArray;
let englishVerb;

let words = {
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
let lifeContainer = document.getElementById("life-container");



submitButton.onclick = ()=> {
	let isAnswerCorrect = checkVerbEnglishToJapanese(englishVerb, answerInput.value);
	if (isAnswerCorrect == false) {
		reduceLife();
		checkLife()
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
	delete words[englishVerb];
	console.log(words)
}

function checkVerbEnglishToJapanese(englishQuestion, japaneseAnswer) {
	// console.log(`${words[englishQuestion]} is the question and ${japaneseAnswer} is the answer`)
	return words[englishQuestion] == japaneseAnswer;
}

function checkVerbJapaneseToEnglish(japaneseQuestion, englishAnswer) {
	// get key
	return true
}

function reduceLife() {
	lives--;
	lifeContainer.innerHTML = '<h3 id="lives">Lives :</h3>'
;
	livesHeader.innerHTML = "Lives : " + lives;
	for(let i = 0; i < lives; i++) {
		lifeContainer.innerHTML += '<img class="heart-img" src="imgs/heart.png">'
	}
	
}

function checkLife(){
	if(lives<=0) {
		//reset()
		console.log("DEAD");
	}
}

function playRound() {
	englishVerbArray = Object.keys(words);
	setRandomVerb();
	answerInput.value = "";
	// console.log(englishVerb);
	questionLabel.innerHTML = englishVerb + ":"
}

function reset() {
	//pass
}

// starts game
//further rounds instigated by button
playRound();