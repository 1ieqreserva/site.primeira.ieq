function login() {

let usuario =
document.getElementById("usuario").value;

let senha =
document.getElementById("senha").value;

if(usuario === "jaque" && senha === "123"){
    
    window.location.href =
    "painel.html";

}else{

    alert("Usuário ou senha incorretos");

}

}