const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector("tel");

function cadastrar()  {

     fetch("http://localhost:8080/cadastrar",
      {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify({
            email: Iemail.Value,
            senha: Isenha.Value,
      })
    })
    .then(function (res) { console.log(res) })  
    .catch(function (res) { console.log(res)})
};

function limpar() {
    Iemail.Value="";
    Isenha.Value="";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();
});
