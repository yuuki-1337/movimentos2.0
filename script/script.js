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