function populateOptionDay(fieldId){
	for (var i = 1; i <= 31; i++) {
		document.getElementById(fieldId).innerHTML += '<option value="'+i+'">'+i+'</option>';
	}
}

function populateOptionYear(fieldId){
	for (var i = 1970; i <= 2000; i++) {
		document.getElementById(fieldId).innerHTML += '<option value="'+i+'">'+i+'</option>';
	}	
}

function populateOptionMonth(fieldId){
	var months = ["Janeiro", "Fevereiro", "Mar\ço", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	for (var i = 0; i < months.length; i++) {
		document.getElementById(fieldId).innerHTML += '<option value="'+months[i].toLowerCase().replace(/ç/, "c")+'">'+months[i]+'</option>';
	}
}