/*adopta*/
const formulario = document.querySelector("#formAdopcion");

if (formulario) {
    const mensaje = document.querySelector("#mensaje");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        mensaje.textContent =
            "¡Solicitud registrada correctamente! Gracias por interesarte en la adopción.";

        mensaje.classList.add("exito");
        formulario.reset();
    });
}