/*=========================================
 EL PRIMER AÑITO DE FÁTIMA
 script.js
=========================================*/

/*=========================================
    CUENTA REGRESIVA
=========================================*/

// Fecha del evento
const eventDate = new Date("October 11, 2026 16:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.innerHTML = d.toString().padStart(2, "0");
    hours.innerHTML = h.toString().padStart(2, "0");
    minutes.innerHTML = m.toString().padStart(2, "0");
    seconds.innerHTML = s.toString().padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


/*=========================================
    BOTÓN GOOGLE MAPS
=========================================*/

const mapButton = document.querySelector(".map-btn");

if (mapButton) {

    mapButton.addEventListener("click", function () {

        console.log("Abriendo Google Maps...");

    });

}


/*=========================================
    BOTÓN WHATSAPP
=========================================*/

// CAMBIA ESTE NÚMERO
const phone = "573016609064";

// CAMBIA ESTE MENSAJE
const message =
"Hola 😊 quiero confirmar mi asistencia al primer añito de Fátima 🍯";

const whatsapp = document.querySelector(".whatsapp-btn");

if (whatsapp) {

    whatsapp.href =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}


/*=========================================
    SCROLL SUAVE
=========================================*/

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if (section) {

            section.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
    APARICIÓN AL HACER SCROLL
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
    ".card, .time-box, .image-placeholder"
).forEach((el) => {

    observer.observe(el);

});




/*=========================================
    MENSAJE EN CONSOLA
=========================================*/

console.log("🍯 EL PRIMER AÑITO DE FÁTIMA");
console.log("Proyecto cargado correctamente.");