var redBtnElement = document.getElementById('redBtn');
redBtnElement.onclick = function(){
	var divOneElement = document.getElementById('divOne');
	divOneElement.style.backgroundColor = 'red';
};

var greenBtnElement = document.getElementById('greenBtn');
greenBtnElement.onclick = function(){
	var divOneElement = document.getElementById('divOne');
	divOneElement.style.backgroundColor = 'green';
};

var blueBtnElement = document.getElementById('blueBtn');
blueBtnElement.onclick = function(){
	var divOneElement = document.getElementById('divOne');
	divOneElement.style.backgroundColor = 'blue';
};

var defaultBtnElement = document.getElementById('defaultBtn');
defaultBtnElement.onclick = function(){
	var divOneElement = document.getElementById('divOne');
	divOneElement.style.backgroundColor = 'white';
};






var btnElement = document.getElementById('btn');
	btnElement.onclick = function(){
		var startingNumberValue = document.getElementById('startingNumber').value;
		var endingNumberValue = document.getElementById('endingNumber').value;

		var res=' ';
		for (var x=startingNumberValue; x<=endingNumberValue; x++){
			res+=x;
		}
		document.getElementById('result').value = res;
	}

