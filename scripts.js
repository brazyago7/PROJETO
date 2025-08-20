const form = document.querySelector(".fale-conosco")
const mask = document.querySelector(".mascara-formulario")

function cliqueinobotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}
function cliqueimascra(){
    mask.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
}