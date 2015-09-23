var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {peso : tdPeso.textContent, altura : tdAltura.textContent};

var diferenteDeZero = (paciente.altura != 0);

if (diferenteDeZero) {
	var imc = paciente.peso / (paciente.altura * paciente.altura);

	var tdimc = document.getElementById("imc-2");
	tdimc.textContent = imc;
	console.log(imc);
} else {
	console.log("Altura igual a zero");
}