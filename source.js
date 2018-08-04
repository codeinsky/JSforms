console.log("js check")
// validator 

var slider = document.querySelector('input[name=salary]');
var output = document.querySelector('span[name=salaryValue]');
console.log (slider.value);
slider.oninput = function() {
	output.textContent = slider.value;
}

$('form').submit(function(event){
	event.preventDefault();
});

$('form input[type=submit]').click(function(){
	validation();
});

function validation(){	
var name = document.querySelector('input[name=name]').value;
var country = document.querySelector('select[name=country]').value;
var gender = document.querySelector('input[name=gender]').value;
var salary = document.querySelector('input[name=salary]').value;
var accept = document.querySelector('input[name=accept]').value;
console.log (name);
console.log (country);
console.log (gender);
console.log (salary);
console.log (accept);
}