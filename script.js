function corregirCuestionario() {

    let correctas = 0;

    let respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
    let respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
    let respuesta3 = document.querySelector('input[name="pregunta3"]:checked');
    let respuesta4 = document.querySelector('input[name="pregunta4"]:checked');
    let respuesta5 = document.querySelector('input[name="pregunta5"]:checked');

    let respuestas = [
        { respuesta: respuesta1, correcta: "1913", id: "r1", texto: "1913" },
        { respuesta: respuesta2, correcta: "Zaragoza", id: "r2", texto: "Zaragoza" },
        { respuesta: respuesta3, correcta: "leer-escribir-rezar", id: "r3", texto: "A leer, escribir y rezar" },
        { respuesta: respuesta4, correcta: "Chiquitin", id: "r4", texto: "Chiquitín" },
        { respuesta: respuesta5, correcta: "2023", id: "r5", texto: "2023" }
    ];

    respuestas.forEach(function(pregunta) {

        let cartel = document.getElementById(pregunta.id);

        if (pregunta.respuesta && pregunta.respuesta.value === pregunta.correcta) {

            correctas++;

            cartel.innerHTML = "¡Correcto!";
            cartel.style.color = "green";

        } else {

            cartel.innerHTML = "Incorrecto. La respuesta correcta es: " + pregunta.texto;
            cartel.style.color = "red";

        }

    });

    document.getElementById("resultado").innerHTML =
        "Respondiste correctamente " + correctas + " de 5 preguntas.";

}