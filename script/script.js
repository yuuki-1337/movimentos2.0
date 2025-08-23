function trocarLogo(){
    let logo = document.getElementById("logo");
    let largura = window.innerWidth;
    if (largura <= 768){
        logo.src = "../img/logo2.png"
    }
    else{
        logo.src = "../img/logo.png"
    }

}
trocarLogo();
window.addEventListener("resize", trocarLogo)

document.getElementById("verMais").addEventListener("click", function(){
    let proximo = document.getElementById("mainContent");
    proximo.scrollIntoView({behavior : "smooth"});
});

const instagram = document.getElementById("instagram");
const instagrams = document.getElementById("instagrams");
const linkedin = document.getElementById("linkedin");
const linkedins = document.getElementById("linkedins");
const redes_sociais = document.getElementById("redes_sociais");

instagram.addEventListener("mouseover", () => {
    linkedins.classList.remove("active");
    instagrams.classList.add("active");
    if(instagrams.style.display == "none"){
        instagrams.style.display = "flex";
    }
});

linkedin.addEventListener("mouseover", () => {
    instagrams.classList.remove("active");
    linkedins.classList.add("active");
    if(linkedins.style.display == "none"){
        linkedins.style.display = "flex";
    }
})

redes_sociais.addEventListener("mouseleave", () => {
    instagrams.classList.remove("active");
    linkedins.classList.remove("active");
});
