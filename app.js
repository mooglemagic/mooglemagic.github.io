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

let profitTotalContainer = document.getElementById("profit_total");

let float = 150.0; 
let totalMoneyInTill = 0;

function checkFloat() {
	const error = !isFloatEnteredReasonable();
	totalMoneyInTill = sumFloat();
	float_total.innerHTML= "£" + totalMoneyInTill;
	errorHandling(error);	
}

function errorHandling(error){
	if (totalMoneyInTill == float) {
		floatValueContainer.classList.add('border-success');
		floatValueContainer.classList.remove('border-danger');
	} else {
		floatValueContainer.classList.add('border-danger');
		floatValueContainer.classList.remove('border-success');
	}
	if (error) {
		floatErrorMsgContainer.innerHTML = "Some values are input incorrectly!!";
	} else if (totalMoneyInTill!= float) {
		floatErrorMsgContainer.innerHTML = "Total is not equal to £" + float;
	} else {
		floatErrorMsgContainer.innerHTML = ".";
	}
}

function checkTakings() {
	clearTillObjects();
	addToTillObject();
	sumTakings();
	const profit = totalMoneyInTill - float;
	takingsTotal.innerHTML = "£" + totalMoneyInTill.toFixed(2);

	//error handling needs updating 

	if (profit < 0) {
		console.log("Money is missing");
	} else {
		console.log("Checking money...")
		createNewFloat();
		enterProfit(profit);	
		enterNewFloat();
	}
}

function clearTillObjects() {
	for(let m in moneyInTill){
		moneyInTill[m] = 0;
	}
	for(let n in moneyInProfit){
		moneyInProfit[n] = 0;
	}

	return 0;
}

function addToTillObject() {
	moneyInTill["20pound"] = Number(twentyPoundTakings.value);
	moneyInTill["10pound"] = Number(tenPoundTakings.value);
	moneyInTill["5pound"] = Number(fivePoundTakings.value); 
	moneyInTill["2pound"] = Number(twoPoundTakings.value);
	moneyInTill["1pound"] = Number(onePoundTakings.value);
	moneyInTill["50pence"] = Number(fiftyPenceTakings.value);
	moneyInTill["20pence"] = Number(twentyPenceTakings.value);
	moneyInTill["10pence"] = Number(tenPenceTakings.value);
	moneyInTill["5pence"] = Number(fivePenceTakings.value);
	moneyInTill["2pence"] = Number(twoPenceTakings.value);
	moneyInTill["1pence"] = Number(onePenceTakings.value);

}

function sumFloat() {
	let sum = Number(twentyPound.value) + Number(tenPound.value) + Number(fivePound.value) + Number(twoPound.value) + Number(onePound.value) + Number(fiftyPence.value) + Number(twentyPence.value) + Number(tenPence.value) + Number(fivePence.value) + Number(twoPence.value) + Number(onePence.value);
	return sum.toFixed(2);
}

function sumTakings() {
	totalMoneyInTill = 0

	for (let value in moneyInTill) {
		totalMoneyInTill += moneyInTill[value]
	}

	return 0;
}

function createNewFloat() {
	// multiply all money * 100 to remove float errors?

	let total = totalMoneyInTill;
	let escapeCounter = 0;

	// const values = ["20pound", "10Pound", "5pound", "2Pound", "1Pound", "50Pence", "20Pence", "10Pence", "5Pence", "2Pence", "1Pence"];
	// const pounds = [20, 10, 50, 2, 1, .5, .20, .10, .05, .02, .01];

	while(total != float && escapeCounter < 100000) {

		// for(let n = 0; n < values.length; n++){
		// 	while (moneyInTill[values[n]] >= pounds[n] && total-pounds[n] >= float) {
		// 		moneyInTill[values[n]] -= pounds[n];
		// 		moneyInProfit[values[n]] += pounds[n];
		// 		total-=pounds[n];
		// 		escapeCounter++;
		// 	}
		// }
		

		while (moneyInTill["20pound"] >= 20 && total-20 >= float) {
			moneyInTill["20pound"] -= 20;
			moneyInProfit["20pound"] += 20;
			total-=20;
		}
		while (moneyInTill["10pound"] >= 10 && total-10 >= float) {
			moneyInTill["10pound"] -= 10;
			moneyInProfit["10pound"] += 10;
			total-=10;
		}
		while (moneyInTill["5pound"] >= 5 && total-5 >= float) {
			moneyInTill["5pound"] -= 5;
			moneyInProfit["5pound"] += 5;
			total-=5;
		}
		while (moneyInTill["2pound"] >= 2 && total-2 >= float) {
			moneyInTill["2pound"] -= 2;
			moneyInProfit["2pound"] += 2;
			total-=2;
		}
		while (moneyInTill["1pound"] >= 1 && total-1 >= float) {
			moneyInTill["1pound"] -= 1;
			moneyInProfit["1pound"] += 1;
			total-=1;
		}
		while (moneyInTill["50pence"] >= .5 && total-.5 >= float) {
			moneyInTill["50pence"] -= .5;
			moneyInProfit["50pence"] += .5;
			total-=.5;
		}
		while (moneyInTill["20pence"] >= .2 && total-.2 >= float) {
			moneyInTill["20pence"] -= .2;
			moneyInProfit["20pence"] += .2;
			total-=.2;
		}
		while (moneyInTill["10pence"] >= .1 && total-.1 >= float) {
			moneyInTill["10pence"] -= .1;
			moneyInProfit["10pence"] += .1;
			total-=.1;
		}
		while (moneyInTill["5pence"] >= .05 && total-.05 >= float) {
			moneyInTill["5pence"] -= .05;
			moneyInProfit["5pence"] += .05;
			total-=.05;
		}
		while (moneyInTill["2pence"] >= .02 && total-.02 >= float) {
			moneyInTill["2pence"] -= .02;
			moneyInProfit["2pence"] += .02;
			total-=.02;
		}
		while (moneyInTill["1pence"] >= .01 && total-.01 >= float) {
			moneyInTill["1pence"] -= .01;
			moneyInProfit["1pence"] += .01;
			total-=.01;
		}
		escapeCounter++;

	} 

}

function enterProfit(profit){
	twentyPoundProfit.value = moneyInProfit["20pound"];
	tenPoundProfit.value = moneyInProfit["10pound"];
	fivePoundProfit.value = moneyInProfit["5pound"];
	twoPoundProfit.value = moneyInProfit["2pound"];
	onePoundProfit.value  = moneyInProfit["1pound"];
	fiftyPenceProfit.value = moneyInProfit["50pence"];
	twentyPenceProfit.value = moneyInProfit["20pence"];
	tenPenceProfit.value = moneyInProfit["10pence"];
	fivePenceProfit.value = moneyInProfit["5pence"];
	twoPenceProfit.value = moneyInProfit["2pence"];
	onePenceProfit.value= moneyInProfit["1pence"];

	profitTotalContainer.innerHTML = "£" + profit.toFixed(2);
}

function enterNewFloat(){
	twentyPound.value = moneyInTill["20pound"];
	tenPound.value = moneyInTill["10pound"];
	fivePound.value = moneyInTill["5pound"];
	twoPound.value = moneyInTill["2pound"];
	onePound.value  = moneyInTill["1pound"];
	fiftyPence.value = moneyInTill["50pence"];
	twentyPence.value = moneyInTill["20pence"].toFixed(2);
	tenPence.value = moneyInTill["10pence"].toFixed(2);
	fivePence.value = moneyInTill["5pence"].toFixed(2);
	twoPence.value = moneyInTill["2pence"].toFixed(2);
	onePence.value= moneyInTill["1pence"].toFixed(2);

	totalMoneyInTill = sumFloat();
	float_total.innerHTML= "£" + totalMoneyInTill;
}

function isFloatEnteredReasonable() {
	// multiply by 100 to get in pence
	let correct = true;
	const values = [twentyPound, tenPound, fivePound, twoPound, onePound, fiftyPence, twentyPence, tenPence, fivePence, twoPence, onePence];
	const pennies = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

	for(let i = 0; i < values.length; i ++ ) {
		if(values[i].value != 0 && (values[i].value*100)%pennies[i] != 0) {
			values[i].classList.add('border-danger');
			correct = false;
		} else {
			values[i].classList.remove("border-danger")
		}
	}
	return correct;
}