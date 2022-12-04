let input = document.querySelector('input[name=produto]')
let btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')
let card = document.querySelector('.card')
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

//----------------------------------------------------------------------------------------------------
function detelarTarefas(tar){
    tarefas.splice(tarefas.indexOf(tar.textContent), 1)
    renderizarTarefas()
    salvarDadosNoStorage()
}

//----------------------------------------------------------------------------------------------------
function renderizarTarefas(){
    lista.innerHTML = ''
    for(tarefa of tarefas){
        let itemLista = document.createElement('li')
        itemLista.setAttribute('class', 'list-group-item list-group-item-action')
        itemLista.onclick = function(){
            detelarTarefas(this)
        }

        let itemTexto = document.createTextNode(tarefa)
        itemLista.appendChild(itemTexto)
        lista.appendChild(itemLista)
    }
}

//----------------------------------------------------------------------------------------------------
function removerSpans(){
    let spans = document.querySelectorAll('span')
    for(let i = 0; i < spans.length; i++){
        card.removeChild(span[i])
    }
}
//----------------------------------------------------------------------------------------------------
function salvarDadosNoStorage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}
//----------------------------------------------------------------------------------------------------

btn.onclick = function(){
    let novaTarefa = input.value

    if(novaTarefa !== ""){
        tarefas.push(novaTarefa)
        input.value = ''
        salvarDadosNoStorage()
        renderizarTarefas()
        removerSpans()
    }
    else{
        let span = document.createElement('span')
        span.setAttribute('class', 'alert alert-warning')
        let msg = document.createTextNode ('Você precisa digitar o produto que deseja registrar')
        span.appendChild(msg)
        card.appendChild(span)
    }

}

