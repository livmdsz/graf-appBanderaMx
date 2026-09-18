// ==================================================
// OBTENER ELEMENTOS DEL HTML
// ==================================================

const greenSelect = document.getElementById("greenSelect");
const redSelect = document.getElementById("redSelect");

const greenPanel = document.getElementById("greenPanel");
const redPanel = document.getElementById("redPanel");

const greenPreview = document.getElementById("greenPreview");
const redPreview = document.getElementById("redPreview");

const greenHex = document.getElementById("greenHex");
const redHex = document.getElementById("redHex");

const resetButton = document.getElementById("resetBtn");

const currentDate = document.getElementById("currentDate");
const currentYear = document.getElementById("currentYear");


// ==================================================
// ACTUALIZAR LOS COLORES DE LA BANDERA
// ==================================================

function updateFlag() {

    // Obtener colores seleccionados
    const green = greenSelect.value;
    const red = redSelect.value;


    // Cambiar franja verde
    greenPanel.style.backgroundColor = green;


    // Cambiar franja roja
    redPanel.style.backgroundColor = red;


    // Actualizar indicadores
    greenPreview.style.backgroundColor = green;
    redPreview.style.backgroundColor = red;


    // Actualizar códigos HEX
    greenHex.textContent = green.toUpperCase();
    redHex.textContent = red.toUpperCase();

}


// ==================================================
// ACTUALIZAR LA FECHA
// ==================================================

function updateDate() {

    const today = new Date();


    // Formato de fecha en español
    const formattedDate = new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    ).format(today);


    // Mostrar fecha
    currentDate.textContent = formattedDate;


    // Actualizar año del copyright
    currentYear.textContent = today.getFullYear();

}


// ==================================================
// CAMBIO DE COLOR VERDE
// ==================================================

greenSelect.addEventListener(
    "change",
    function () {

        updateFlag();

    }
);


// ==================================================
// CAMBIO DE COLOR ROJO
// ==================================================

redSelect.addEventListener(
    "change",
    function () {

        updateFlag();

    }
);


// ==================================================
// RESTAURAR COLORES
// ==================================================

resetButton.addEventListener(
    "click",
    function () {

        // Colores originales
        greenSelect.value = "#006847";

        redSelect.value = "#CE1126";


        // Actualizar bandera
        updateFlag();

    }
);


// ==================================================
// INICIALIZAR APLICACIÓN
// ==================================================

updateFlag();

updateDate();