// shortcuts
// windows + spacebar
// ctrl + spacebar

let lives = 5;

const verbs = {
	"appear/come out": "でる",
	"to know": "しる",
	"to ride/ get on": "のる",
	"fix/mend": "なおす",
	"move operate": "うごく"
}

document.getElementById("test").textContent = verbs["appear/come out"];

while (lives > 0) {
	//game go
	lives--;
}


function checkVerbEnglishToJapanese(englishQuestion, japaneseAnswer) {
	return verbs[englishQuestion] == japaneseAnswer;
}

function checkVerbJapaneseToEnglish(japaneseQuestion, englishAnswer) {
	// get key
	return true
}

console.log(
	checkVerbEnglishToJapanese("to know", "しり")
)
