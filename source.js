console.log("js check")
// validator 

var slider = document.querySelector('input[name=salary]');
var output = document.querySelector('span[name=salaryValue]');
console.log (slider.value);
$( "checkbox" ).prop('checked' , true);
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
var male = document.querySelector('input[id=male]').checked;
var female = document.querySelector('input[id=female]').checked;
var salary = document.querySelector('input[name=salary]').value;
var accept = document.querySelector('input[name=accept]').checked;


// console.log (country);
// console.log ("Male " + male);
// console.log ("Female " + female);
// console.log (salary);
// console.log (accept)

if (name[0]===name[0].toUpperCase()){
	console.log ("name is Fine");
}
else {
	console.log("name is wrong")
}

}