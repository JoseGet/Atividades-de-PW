var formulario = document.forms.namedItem("formulario");
formulario === null || formulario === void 0 ? void 0 : formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    var raio = formulario.raio;
    var area = formulario.area;
    var circunferencia = formulario.circunferencia;
    var raio_number = parseFloat(raio.value);
    area.value = (3.14 * raio_number * raio_number).toString();
    circunferencia.value = (3.14 * 2 * raio_number).toString();
});
