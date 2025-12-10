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

const movimentos_btn = document.getElementById("movimentos_btn");
const overlay_movimentos = document.getElementById("overlay_movimentos");

movimentos_btn.addEventListener("click", () => {
  document.querySelectorAll(".timer-btn, .agua-btn, .metabolismo-btn, .imc-btn, .movimentos-btn").forEach(btn => {
    btn.classList.toggle("active");
  });
  overlay_movimentos.classList.toggle("active");

});

function fecharMenu() {
  document.querySelectorAll(".timer-btn, .agua-btn, .metabolismo-btn, .imc-btn, .movimentos-btn")
    .forEach(btn => btn.classList.remove("active"));

  overlay_movimentos.classList.remove("active");
}
document.addEventListener("click", (e) => {
  const clicouNoBotaoPrincipal = movimentos_btn.contains(e.target);
  const clicouNosBotoes = [...document.querySelectorAll(".movimentos-button")]
    .some(btn => btn.contains(e.target));

  if (!clicouNoBotaoPrincipal && !clicouNosBotoes) {
    fecharMenu();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  let countdownInterval;
  let remainingSeconds = 0;

  const timerContainer = document.querySelector(".timer-container");
  const closeTimerContainer = document.querySelector(".close-timer-container");
  const countdown = document.querySelector(".countdown");
  const times = document.querySelectorAll(".time");
  const closeBtn = document.querySelector(".close-timer");
  const resetBtn = document.querySelector(".reset-timer");

  // procurar tanto por id quanto por classe (compatibilidade)
  let timerBtn = document.querySelector("#timer_btn") || document.querySelector(".timer-btn");

  console.log("timer.js carregado",
              { timerBtnExists: !!timerBtn,
                timerContainerExists: !!timerContainer,
                countdownExists: !!countdown,
                timesCount: times.length,
                closeBtnExists: !!closeBtn,
                resetBtnExists: !!resetBtn });

  // função auxiliar: atualiza display com segurança
  function updateCountdownDisplay() {
    if (!countdown) return;
    const min = Math.floor(remainingSeconds / 60);
    const sec = remainingSeconds % 60;
    countdown.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
  }

  function endTimer() {
    clearInterval(countdownInterval);
    if (countdown) {
      countdown.style.background = "red";
      countdown.style.color = "white";
    }
    if (navigator.vibrate) {
      navigator.vibrate([300, 150, 300]);
    }
  }

  // abrir timer
  if (timerBtn && timerContainer && closeTimerContainer && countdown) {
    timerBtn.addEventListener("click", () => {
      timerContainer.classList.add("active");
      closeTimerContainer.classList.add("active");

      clearInterval(countdownInterval);
      countdown.classList.remove("active");
      countdown.textContent = "";
      countdown.style.background = "var(--cor-verde)";
      countdown.style.color = "black";

      times.forEach(t => t.style.display = "block");
    });
  } else {
    console.warn("Não foi possível registrar listener de abertura do timer. Verifique elementos.", {
      timerBtn: !!timerBtn, timerContainer: !!timerContainer, countdown: !!countdown
    });
  }

  // iniciar timer - função pública
  window.startTimer = function (minutes) {
    if (!countdown) {
      console.warn("Countdown não encontrado. startTimer abortado.");
      return;
    }

    remainingSeconds = Math.max(0, Math.floor(Number(minutes) || 0) * 60);

    // esconder botões se existirem
    if (times.length) times.forEach(t => t.style.display = "none");

    countdown.classList.add("active");
    updateCountdownDisplay();

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      remainingSeconds--;
      updateCountdownDisplay();

      if (remainingSeconds <= 0) {
        endTimer();
      }
    }, 1000);
  };

  // reset
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      clearInterval(countdownInterval);

      if (countdown) {
        countdown.classList.remove("active");
        countdown.textContent = "";
        countdown.style.background = "var(--cor-verde)";
        countdown.style.color = "black";
      }
      if (times.length) times.forEach(t => t.style.display = "block");
    });
  } else {
    console.warn("Botão reset não encontrado (.reset-timer).");
  }

  // fechar
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      clearInterval(countdownInterval);

      if (timerContainer) timerContainer.classList.remove("active");
      if (closeTimerContainer) closeTimerContainer.classList.remove("active");

      if (countdown) {
        countdown.classList.remove("active");
        countdown.textContent = "";
        countdown.style.background = "var(--cor-verde)";
        countdown.style.color = "black";
      }

      if (times.length) times.forEach(t => t.style.display = "block");
    });
  } else {
    console.warn("Botão fechar não encontrado (.close-timer).");
  }
});