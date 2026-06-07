const pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];

function salvarPedido(){

const nome =
document.getElementById("nome").value;

const pedido =
document.getElementById("pedido").value;

pedidos.push({nome,pedido});

localStorage.setItem(
"pedidos",
JSON.stringify(pedidos)
);

}