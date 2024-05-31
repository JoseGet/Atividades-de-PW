const botao = document.getElementById("botao")
const t1 = document.getElementById("t1")
const t2 = document.getElementById("t2")
const t3 = document.getElementById("t3")
const t4 = document.getElementById("t4")
const t5 = document.getElementById("t5")


botao.onclick = function(){

    t1.style.width = document.formulario.w.value + "px"
    t1.style.height = document.formulario.h1.value + "px"
    t1.style.backgroundColor = "red"

    t2.style.width = document.formulario.w.value + "px"
    t2.style.height = document.formulario.h2.value + "px"
    t2.style.backgroundColor = "red"

    t3.style.width = document.formulario.w.value + "px"
    t3.style.height = document.formulario.h3.value + "px"
    t3.style.backgroundColor = "red"

    t4.style.width = document.formulario.w.value + "px"
    t4.style.height = document.formulario.h4.value + "px"
    t4.style.backgroundColor = "red"

    t5.style.width = document.formulario.w.value + "px"
    t5.style.height = document.formulario.h5.value + "px"
    t5.style.backgroundColor = "red"

}
