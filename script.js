const menuBtn =
document.getElementById("menu-btn");

const nav =
document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if(nav.style.display === "flex"){

        nav.style.display = "none";

    }else{

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.background = "#050B14";

        nav.style.padding = "20px";

    }

    const popup =
document.getElementById("popup");

const fechar =
document.getElementById("fecharPopup");

const fecharX =
document.querySelector(".close-popup");

fechar.addEventListener("click",()=>{

popup.style.display="none";

});

fecharX.addEventListener("click",()=>{

popup.style.display="none";

});
});