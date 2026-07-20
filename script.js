import {
    db,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "./firebase.js";

// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        eggBreaking.style.opacity = "1";

        setTimeout(() => {

            egg.style.opacity = "0";

        }, 250);

    }, 1700);

    setTimeout(() => {

        eggPeek.style.opacity = "1";

        setTimeout(() => {

            eggBreaking.style.opacity = "0";

        }, 250);

    }, 2500);

    setTimeout(() => {

        dino.style.opacity = "1";

        setTimeout(() => {

            eggPeek.style.opacity = "0";

        }, 350);

    }, 3550);

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";
            contenido.style.display = "block";

        }, 800);

    }, 5200);

});

// ==============================
// CONTADOR
// ==============================

const fechaEvento = new Date("2026-08-01T16:00:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) return;

    const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferencia / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferencia / 1000 / 60) % 60;
    const segundos = Math.floor(diferencia / 1000) % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador, 1000);

// ==============================
// APARICIÓN AL HACER SCROLL
// ==============================

const paneles = document.querySelectorAll(".panel");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.2

});

paneles.forEach((panel) => {

    panel.classList.add("oculto");

    observador.observe(panel);

});

// ==============================
// HOJITAS
// ==============================

const hojas = document.getElementById("hojas");

if (hojas) {

    const imagenesHojas = [

        "img/hojas/hoja5.png",
        "img/hojas/hoja6.png"

    ];

    for (let i = 0; i < 10; i++) {

        const hoja = document.createElement("img");

        hoja.src = imagenesHojas[Math.floor(Math.random() * imagenesHojas.length)];

        hoja.className = "leaf";

        hoja.style.left = Math.random() * 100 + "vw";

        hoja.style.animationDelay = Math.random() * 12 + "s";

        hoja.style.animationDuration = (20 + Math.random() * 12) + "s";

        hoja.style.transform = `rotate(${Math.random() * 45}deg)`;

        hojas.appendChild(hoja);

    }

}

// ==============================
// BOTÓN MÚSICA
// ==============================

const musica = document.getElementById("musica");
const musicButton = document.getElementById("musicButton");

let reproduciendo = false;

musicButton.addEventListener("click", () => {

    if (reproduciendo) {

        musica.pause();
        musicButton.innerHTML = "🎵";

    } else {

        musica.play();
        musicButton.innerHTML = "⏸️";

    }

    reproduciendo = !reproduciendo;

});

// ==============================
// COPIAR ALIAS
// ==============================

const copiarAlias = document.getElementById("copiarAlias");
const textoAlias = document.getElementById("textoAlias");

if (copiarAlias) {

    copiarAlias.addEventListener("click", () => {

        navigator.clipboard.writeText("maruzuliani");

        textoAlias.textContent = "¡Alias copiado!";

        copiarAlias.style.background = "#DFF6E3";
        copiarAlias.style.borderColor = "#8CCB98";

        setTimeout(() => {

            textoAlias.textContent = "COPIAR ALIAS";

            copiarAlias.style.background = "white";
            copiarAlias.style.borderColor = "#DCE8D8";

        }, 2000);

    });

}

// ==============================
// MODAL REGALOS
// ==============================

const modal = document.getElementById("modalRegalos");
const abrir = document.getElementById("abrirLista");
const cerrar = document.getElementById("cerrarModal");

abrir.onclick = () => {

    modal.classList.add("activo");

};

cerrar.onclick = () => {

    modal.classList.remove("activo");

};

// ==============================
// CERRAR MODAL HACIENDO CLICK AFUERA
// ==============================

window.onclick = (e) => {

    if (e.target === modal) {

        modal.classList.remove("activo");

    }

    if (e.target === modalNombre) {

        modalNombre.classList.remove("activo");

    }

};