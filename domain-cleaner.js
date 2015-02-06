var button = document.getElementById("submit");

function validate_domain(domain) {
	var reg = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
	
	return domain.match(reg);
}

function domain_found(domain) {
	var result = document.getElementById('result');
	
	result = result.innerHTML.split("\n");
	
	return result.indexOf(domain) > -1;
}

function accepted_extension(domain) {
	var extensions = [".com", ".net", ".org", ".int", ".edu", ".gov", ".mil", ".arpa", ".co.uk"];
	
	for (var i =0, steps=extensions.length; i < steps; i++) {
		entry = extensions[i];
		
		if (domain.indexOf(entry) == 	domain.length - entry.length) {
			return true;
		}		
	}
}

button.addEventListener("click", function () {
	var result = document.getElementById('result');
	result.innerHTML = '';
	
	var text = document.getElementById("text");
	text = text.value.replace(/(?:\r\n|\r|\n)/g, ' ');
	text = text.split(" ");
	text.forEach(function (entry) {
		if (validate_domain(entry) && !domain_found(entry) && accepted_extension(entry)) {
			result.innerHTML = result.innerHTML + entry + '<br />';
		}
	});
});