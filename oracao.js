const oracaoForm =
document.getElementById("oracaoForm");

if(oracaoForm){

oracaoForm.addEventListener("submit",(e)=>{

e.preventDefault();

const pedido = {

nome:
document.getElementById("nome").value,

pedido:
document.getElementById("pedido").value,

data:
new Date().toLocaleDateString()

};

let pedidos =
JSON.parse(
localStorage.getItem("pedidos")
) || [];

pedidos.push(pedido);

localStorage.setItem(
"pedidos",
JSON.stringify(pedidos)
);

alert("Pedido enviado com sucesso!");

oracaoForm.reset();

});

}