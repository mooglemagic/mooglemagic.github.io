// float variables
let twentyPound = document.getElementById("20");
let tenPound = document.getElementById("10");
let fivePound = document.getElementById("5");
let twoPound = document.getElementById("2");
let onePound = document.getElementById("1");
let fiftyPence = document.getElementById("50p");
let twentyPence = document.getElementById("20p");
let tenPence = document.getElementById("10p");
let fivePence = document.getElementById("5p");
let twoPence = document.getElementById("2p");
let onePence = document.getElementById("1p");

// takings variables
let twentyPoundTakings = document.getElementById("20-takings");
let tenPoundTakings = document.getElementById("10-takings");
let fivePoundTakings = document.getElementById("5-takings");
let twoPoundTakings = document.getElementById("2-takings");
let onePoundTakings = document.getElementById("1-takings");
let fiftyPenceTakings = document.getElementById("50p-takings");
let twentyPenceTakings = document.getElementById("20p-takings");
let tenPenceTakings = document.getElementById("10p-takings");
let fivePenceTakings = document.getElementById("5p-takings");
let twoPenceTakings = document.getElementById("2p-takings");
let onePenceTakings = document.getElementById("1p-takings");

// profit variables
let twentyPoundProfit = document.getElementById("20-profit");
let tenPoundProfit = document.getElementById("10-profit");
let fivePoundProfit = document.getElementById("5-profit");
let twoPoundProfit = document.getElementById("2-profit");
let onePoundProfit = document.getElementById("1-profit");
let fiftyPenceProfit = document.getElementById("50p-profit");
let twentyPenceProfit = document.getElementById("20p-profit");
let tenPenceProfit = document.getElementById("10p-profit");
let fivePenceProfit = document.getElementById("5p-profit");
let twoPenceProfit = document.getElementById("2p-profit");
let onePenceProfit = document.getElementById("1p-profit");

let moneyInTill = {
	// [amount, pence value]
	"20pound": [0, 2000],
	"10pound": [0, 1000],
	"5pound": [0, 500],
	"2pound": [0, 200],
	"1pound": [0, 100],
	"50pence": [0, 50],
	"20pence": [0, 20],
	"10pence": [0, 10],
	"5pence": [0, 5],
	"2pence": [0, 2],
	"1pence": [0, 1] 
}

let moneyInProfit = {
	"20pound": 0,
	"10pound": 0,
	"5pound": 0,
	"2pound": 0,
	"1pound": 0,
	"50pence": 0,
	"20pence": 0,
	"10pence": 0,
	"5pence": 0,
	"2pence": 0,
	"1pence": 0 
}

let floatTotal = document.getElementById("float_total");
let floatValueContainer = document.getElementById("float_value_container");

let takingsTotal = document.getElementById("takings_total");
let takingsValueContainer = document.getElementById("takings_value_container");

let floatErrorMsgContainer = document.getElementById("float_error_container");
let takingsErrorContainer = document.getElementById("takings_error_container");

let profitTotalContainer = document.getElementById("profit_total");

let float = 150.0; 
let totalMoneyInTill = 0;

function checkFloat() {
	// two similar error methods
	if(checkForErrors("float")){
		totalMoneyInTill = sumFloat();
		float_total.innerHTML= "£" + totalMoneyInTill;
		errorHandling();
	}	
}

function errorHandling(){
	if (totalMoneyInTill == float) {
		floatValueContainer.classList.add('border-success');
		floatValueContainer.classList.remove('border-danger');
	} else {
		floatValueContainer.classList.add('border-danger');
		floatValueContainer.classList.remove('border-success');
	}
	if (totalMoneyInTill!= float) {
		floatErrorMsgContainer.innerHTML = "Total is not equal to £" + float;
	} 
}

function checkTakings() {
	clearTillObjects();
	if (checkForErrors("takings")){
		addToTillObject();
		// takings is in pence
		sumTakings();
		if(totalMoneyInTill >= float) {
			const profit = (totalMoneyInTill - float*100)/100;
			takingsTotal.innerHTML = "£" + (totalMoneyInTill/100).toFixed(2);
			createNewFloat();
			enterProfit(profit);	
			enterNewFloat();
		} else {
			floatHigherThanTakingsWarning();
		}

	};

}

function clearTillObjects() {
	for(let m in moneyInTill){
		moneyInTill[m][0] = 0;
	}
	for(let n in moneyInProfit){
		moneyInProfit[n] = 0;
	}
	return 0;
}

function addToTillObject() {
	// adds number of notes/coins to object
	moneyInTill["20pound"][0] = Number(twentyPoundTakings.value)/20;
	moneyInTill["10pound"][0] = Number(tenPoundTakings.value)/10;
	moneyInTill["5pound"][0] = Number(fivePoundTakings.value)/5; 
	moneyInTill["2pound"][0] = Number(twoPoundTakings.value)/2;
	moneyInTill["1pound"][0] = Number(onePoundTakings.value);
	moneyInTill["50pence"][0] = Math.round(Number(fiftyPenceTakings.value)/.5);
	moneyInTill["20pence"][0] = Math.round(Number(twentyPenceTakings.value)/.2);
	moneyInTill["10pence"][0] = Math.round(Number(tenPenceTakings.value)/.1);
	moneyInTill["5pence"][0] = Math.round(Number(fivePenceTakings.value)/.05);
	moneyInTill["2pence"][0] = Math.round(Number(twoPenceTakings.value)/.02);
	moneyInTill["1pence"][0] = Math.round(Number(onePenceTakings.value)/.01);
}

function sumFloat() {
	let sum = Number(twentyPound.value) + Number(tenPound.value) + Number(fivePound.value) + Number(twoPound.value) + Number(onePound.value) + Number(fiftyPence.value) + Number(twentyPence.value) + Number(tenPence.value) + Number(fivePence.value) + Number(twoPence.value) + Number(onePence.value);
	return sum.toFixed(2);
}

function sumTakings() {
	totalMoneyInTill = 0

	for (let value in moneyInTill) {
		totalMoneyInTill += moneyInTill[value][0]*moneyInTill[value][1]
	}
	return 0;
}

function createNewFloat() {
	// multiply all money * 100 to remove float errors?

	let total = totalMoneyInTill;
	let escapeCounter = 0;
	let floatInPence = float*100

	// const values = ["20pound", "10Pound", "5pound", "2Pound", "1Pound", "50Pence", "20Pence", "10Pence", "5Pence", "2Pence", "1Pence"];
	// const pounds = [20, 10, 50, 2, 1, .5, .20, .10, .05, .02, .01];

	while(total != floatInPence && escapeCounter < 100000) {
		// one for-loop?

		while (moneyInTill["20pound"][0] >= 1 && total-2000 >= floatInPence) {
			moneyInTill["20pound"][0]--;
			moneyInProfit["20pound"] += 1;
			total-=2000;
		}
		while (moneyInTill["10pound"][0] >= 1 && total-1000 >= floatInPence) {
			moneyInTill["10pound"][0]--;
			moneyInProfit["10pound"] += 1;
			total-=1000;
		}
		while (moneyInTill["5pound"][0] >= 1 && total-500 >= floatInPence) {
			moneyInTill["5pound"][0]--;
			moneyInProfit["5pound"] += 1;
			total-=500;
		}
		while (moneyInTill["2pound"][0] >= 1 && total-200 >= floatInPence) {
			moneyInTill["2pound"][0]--;
			moneyInProfit["2pound"] += 1;
			total-=200;
		}
		while (moneyInTill["1pound"][0] >= 1 && total-100 >= floatInPence) {
			moneyInTill["1pound"][0]--;
			moneyInProfit["1pound"] += 1;
			total-=100;
		}
		while (moneyInTill["50pence"][0] >= 1 && total-50 >= floatInPence) {
			moneyInTill["50pence"][0]--;
			moneyInProfit["50pence"] += 1;
			total-=50;
		}
		while (moneyInTill["20pence"][0] >= 1 && total-20 >= floatInPence) {
			moneyInTill["20pence"][0]--;
			moneyInProfit["20pence"] += 1;
			total-=20;
		}
		while (moneyInTill["10pence"][0] >= 1 && total-10 >= floatInPence) {
			moneyInTill["10pence"][0]--;
			moneyInProfit["10pence"] += 1;
			total-=10;
		}
		while (moneyInTill["5pence"][0] >= 1 && total-5 >= floatInPence) {
			moneyInTill["5pence"][0]--;
			moneyInProfit["5pence"] += 1;
			total-=5;
		}
		while (moneyInTill["2pence"][0] >= 1 && total-2 >= floatInPence) {
			moneyInTill["2pence"][0]--;
			moneyInProfit["2pence"] += 1;
			total-=2;
		}
		while (moneyInTill["1pence"][0] >= 1 && total-1 >= floatInPence) {
			moneyInTill["1pence"][0]--;
			moneyInProfit["1pence"] += 1;
			total-=1;
		}
		escapeCounter++;

	} 

}

function enterProfit(profit){
	twentyPoundProfit.value = moneyInProfit["20pound"]*20;
	tenPoundProfit.value = moneyInProfit["10pound"]*10;
	fivePoundProfit.value = moneyInProfit["5pound"]*5;
	twoPoundProfit.value = moneyInProfit["2pound"]*2;
	onePoundProfit.value  = moneyInProfit["1pound"];
	fiftyPenceProfit.value = (moneyInProfit["50pence"]*.5).toFixed(2);
	twentyPenceProfit.value = (moneyInProfit["20pence"]*.2).toFixed(2);
	tenPenceProfit.value = (moneyInProfit["10pence"]*.1).toFixed(2);
	fivePenceProfit.value = (moneyInProfit["5pence"]*.05).toFixed(2);
	twoPenceProfit.value = (moneyInProfit["2pence"]*.02).toFixed(2);
	onePenceProfit.value= (moneyInProfit["1pence"]*.01).toFixed(2);

	profitTotalContainer.innerHTML = "£" + profit.toFixed(2);
}

function enterNewFloat(){
	twentyPound.value = moneyInTill["20pound"][0]*20;
	tenPound.value = moneyInTill["10pound"][0]*10;
	fivePound.value = moneyInTill["5pound"][0]*5;
	twoPound.value = moneyInTill["2pound"][0]*2;
	onePound.value  = moneyInTill["1pound"][0];
	fiftyPence.value = (moneyInTill["50pence"][0]*.5).toFixed(2);
	twentyPence.value = (moneyInTill["20pence"][0]*.2).toFixed(2);
	tenPence.value = (moneyInTill["10pence"][0]*.1).toFixed(2);
	fivePence.value = (moneyInTill["5pence"][0]*.05).toFixed(2);
	twoPence.value = (moneyInTill["2pence"][0]*.02).toFixed(2);
	onePence.value= (moneyInTill["1pence"][0]*.01).toFixed(2);

	totalMoneyInTill = sumFloat();
	float_total.innerHTML= "£" + totalMoneyInTill;
}

function floatHigherThanTakingsWarning() {
	takingsErrorContainer.innerHTML = "Takings is lower than float!";
	takingsValueContainer.classList.add('border-danger');
}

function removeWarnings() {
	//pass
}

function checkForErrors(expectedValue) {
	// same as error checker below
	let correct = true;
	let values;
	let errorContainer;
	if (expectedValue=="takings") {
		values = [twentyPoundTakings, tenPoundTakings, fivePoundTakings, twoPoundTakings, onePoundTakings, fiftyPenceTakings, twentyPenceTakings, tenPenceTakings, fivePenceTakings, twoPenceTakings, onePenceTakings];
		errorContainer = takingsErrorContainer;
	} else {
		values = [twentyPound, tenPound, fivePound, twoPound, onePound, fiftyPence, twentyPence, tenPence, fivePence, twoPence, onePence];
		errorContainer = floatErrorMsgContainer;
	}
	 
	const pennies = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

	for(let i = 0; i < values.length; i ++ ) {
		if(values[i].value != 0 && (Math.floor(values[i].value*100))%pennies[i] != 0) {
			values[i].classList.add('border-danger');
			correct = false;
		} else {
			values[i].classList.remove("border-danger")
		}
	}

	if (!correct) {
	 	errorContainer.innerHTML = "Some values are entered incorrectly";
	} else {
		errorContainer.innerHTML = ".";
	} 

	return correct;
}