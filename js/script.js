const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const instruction = document.getElementById("instruction");

seal.addEventListener("click", function () {

    envelope.classList.add("open");

    instruction.textContent = "Nuestra historia comienza aquí ♡";

});
