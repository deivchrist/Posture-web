/* ============================================= */
/* JAVASCRIPT - SMOOTH SCROLL CON OFFSET         */
/* ============================================= */

// Esperamos a que todo el contenido del DOM (HTML) esté cargado
document.addEventListener("DOMContentLoaded", function() {

    // 1. Definimos la altura de nuestro header fijo (70px)
    const headerOffset = 70;

    // 2. Seleccionamos TODOS los enlaces <a> que su 'href' comience con '#'
    // (Esto es para los enlaces de la misma página, como #intro, #concepto, etc.)
    const links = document.querySelectorAll('a[href^="#"]');

    // 3. Recorremos cada enlace y le agregamos un "escuchador" de clics
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            
            // Obtenemos el ID del objetivo (ej: "#intro")
            const targetId = this.getAttribute("href");

            // Si el enlace no es solo un "#" vacío
            if (targetId.length > 1) {
                
                // 4. Prevenimos el comportamiento por defecto (el "salto" brusco)
                e.preventDefault();

                // 5. Encontramos el elemento en la página con ese ID
                const targetElement = document.querySelector(targetId);

                // Si el elemento existe...
                if (targetElement) {
                    
                    // 6. Calculamos la posición a la que queremos ir
                    const targetPosition = targetElement.getBoundingClientRect().top;
                    const currentPosition = window.pageYOffset;
                    
                    // La posición final es:
                    // Posición actual + Posición del objetivo - El offset del header
                    const finalPosition = targetPosition + currentPosition - headerOffset;

                    // 7. Realizamos el scroll suave a la posición calculada
                    window.scrollTo({
                        top: finalPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});