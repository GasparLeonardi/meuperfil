let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML = "O campo Nome deve conter no mínimo 3 caracteres."
        txtNome.style.display = "block"
    } else {
        txtNome.style.display = "none"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "O campo e-mail deve conter um endereço válido."
        txtEmail.style.display = "block"
    } else {
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validaMensagem () {
    let txtMensagem = document.querySelector("#txtMensagem")
    if (mensagem.value.length > 100) {
        txtMensagem.innerHTML = "O campo Mensagem deve conter no maxímo 100 caracteres."
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert ("Mensagem enviada com sucesso!")
    } else {
        alert ("Revise todos os campos antes de enviar!")
    }
}