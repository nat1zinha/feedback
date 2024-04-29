let botoes = documente.querySelectorAll(".botoes button")

botoes.foreach(botao=>{
    botao.addEventListener("click",guardarNota)
})

function guardarNota(){
   let nota = evento.target.innertext

   localStorage.setItem("nota", nota)
}