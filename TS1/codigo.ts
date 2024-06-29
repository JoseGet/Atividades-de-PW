const formulario = document.forms.namedItem("formulario")

formulario?.addEventListener("submit", function(event: Event): void{

    event.preventDefault();

    let raio = formulario.raio as HTMLInputElement;
    let area = formulario.area as HTMLInputElement;
    let circunferencia = formulario.circunferencia as HTMLInputElement;

    const raio_number: number = parseFloat(raio.value);
    
    area.value = (3.14 * raio_number * raio_number).toString();
    circunferencia.value = (3.14 * 2 * raio_number).toString();

})
