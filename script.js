// DARK / LIGHT MODE
const modeBtn = document.getElementById("mode");

modeBtn.onclick = () => {
document.body.classList.toggle("light");
};

// FAKE LANGUAGE SWITCH (demo)
const langBtn = document.getElementById("lang");

langBtn.onclick = () => {
alert("Languages: EN / AR / RU (soon)");
};
