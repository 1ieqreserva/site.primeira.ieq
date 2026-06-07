/* LOGIN */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const usuario =
document.getElementById("usuario").value;

const senha =
document.getElementById("senha").value;

/*
ATENÇÃO:
Trocar no Firebase depois.
*/

if(usuario === "jaque" && senha === "123"){

localStorage.setItem(
"admin",
"true"
);

window.location =
"painel.html";

}else{

alert("Usuário ou senha inválidos");

}

});

}

/* PROTEÇÃO */

if(
window.location.pathname.includes("painel.html")
){

if(
localStorage.getItem("admin")
!== "true"
){

window.location =
"login.html";

}

}

/* MENU */

function mostrar(secao){

document
.querySelectorAll("section")
.forEach(section => {

section.style.display =
"none";

});

document.getElementById(secao)
.style.display = "block";

}

/* LOGOUT */

function logout(){

localStorage.removeItem(
"admin"
);

window.location =
"login.html";

}

/* ORAÇÕES */

const pedidos =
JSON.parse(
localStorage.getItem("pedidos")
) || [];

const listaOracoes =
document.getElementById(
"listaOracoes"
);

if(listaOracoes){

document.getElementById(
"totalOracoes"
).textContent =
pedidos.length;

pedidos.forEach(item => {

listaOracoes.innerHTML += `
<div class="card-admin">

<h3>${item.nome}</h3>

<p>${item.pedido}</p>

<small>${item.data}</small>

</div>
`;

});

}

/* INSCRIÇÕES */

const inscricoes =
JSON.parse(
localStorage.getItem(
"inscricoes"
)
) || [];

const listaInscricoes =
document.getElementById(
"listaInscricoes"
);

if(listaInscricoes){

document.getElementById(
"totalInscricoes"
).textContent =
inscricoes.length;

inscricoes.forEach(item => {

listaInscricoes.innerHTML += `
<div class="card-admin">

<h3>${item.nome}</h3>

<p>${item.email}</p>

<p>${item.telefone}</p>

<p>${item.evento}</p>

</div>
`;

});

}