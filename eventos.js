const form =
document.getElementById("inscricaoForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inscricao = {

nome:
document.getElementById("nome").value,

email:
document.getElementById("email").value,

telefone:
document.getElementById("telefone").value,

evento:
document.getElementById("evento").value

};

let inscricoes =
JSON.parse(
localStorage.getItem("inscricoes")
) || [];

inscricoes.push(inscricao);

localStorage.setItem(
"inscricoes",
JSON.stringify(inscricoes)
);

alert("Inscrição realizada com sucesso!");

form.reset();

});

}