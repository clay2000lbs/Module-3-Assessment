console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const handlemouseover = (e) => {
	alert('You did it!')
}
 

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let  img = document	.querySelector('img');

img.addEventListener('mouseover', handlemouseover);