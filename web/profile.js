function handleSubmitColor(e) {
	e.preventDefault();
	
	alert('Black');
}

function handleSubmitPlace(e) {
	e.preventDefault();
	
	alert('My bed');
}

function handleSubmitRitual(e) {
	e.preventDefault();
	
	alert('Bulletproof coffee in the morning');
}


let colorBtn = document.getElementById('color');
colorBtn.addEventListener('click', handleSubmitColor);

let placeBtn = document.getElementById('place');
placeBtn.addEventListener('click', handleSubmitPlace);


let ritualBtn = document.getElementById('ritual');
ritualBtn.addEventListener('click', handleSubmitRitual) 