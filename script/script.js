const menu_toggle = document.getElementById("menu_toggle");
const menu_toggle_scoll = document.getElementById("menu_toggle_scroll");
const menu_mobile = document.getElementById("menu_mobile");
const overlay = document.getElementById("overlay");
const windowWidth = window.innerWidth;

overlay.addEventListener("click", () => {
  menu_mobile.classList.remove("active");
  overlay.classList.remove("active");

  document.querySelectorAll(".material-symbols-outlined").forEach(icon => {
    icon.textContent = "menu";
  });
});


function toggleMenu(button){
  menu_mobile.classList.toggle("active");
  overlay.classList.toggle("active");

  const icon = button.querySelector(".material-symbols-outlined");

  if(menu_mobile.classList.contains("active")){
    icon.textContent = "close";
  }else{
    icon.textContent = "menu";
  }
};

menu_toggle.addEventListener("click", () => toggleMenu(menu_toggle));
menu_toggle_scoll.addEventListener("click", () => toggleMenu(menu_toggle_scoll));

const initial_content_btn = document.getElementById("initial_content_btn");initial_content_btn.addEventListener("click", () => {
  initial_content_btn.scrollIntoView({behavior : "smooth"});
});

const navbarScroll = document.querySelector(".navbar-scroll");

window.addEventListener("scroll", () => {
  const halfScreen = window.innerHeight / 2;

  if (window.scrollY > halfScreen) {
    navbarScroll.classList.add("active");
  } else {
    navbarScroll.classList.remove("active");
  }
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

//CALCULADORA IMC
const btn = document.getElementById('calculate');

btn.addEventListener('click', ()=>{
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  if(height == '' || weight == ''){
    alert('Por favor preencha os dados!');
    return;
  }

  height = height / 100;
  let IMC = (weight / (height * height));
  IMC = IMC.toFixed(2);
  console.log(IMC);

  document.querySelector('#result').innerHTML = IMC;
  let status = '';
  let color = '';

  if(IMC < 18.5){
    status = "Abaixo do peso";
    color = '#6CA6D9';

  }
  if(IMC >= 18.5 && IMC < 25){
    status = "Normal";
    color = '#1FB259';
  }
  if(IMC >= 25 && IMC < 30){
    status = "Acima do peso";
    color = '#FFC145';
  }
  if(IMC >= 30){
    status = "Obeso";
    color = '#F20732';
  }
  document.getElementById('result').style.color = color;
  document.querySelector('.comment').innerHTML = `Você está <span id="comment" style="color: ${color}">${status}</span>`;
  
});