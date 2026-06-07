function login(){

const usuario =
document.getElementById("usuario").value;

const senha =
document.getElementById("senha").value;

if(usuario==="jaque" && senha==="123"){

localStorage.setItem("admin",true);

window.location="painel.html";

}else{

alert("Acesso negado");

}

}