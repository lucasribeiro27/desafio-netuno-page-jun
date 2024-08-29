function clickMenuShow() {
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".container").style.display = "flex";
  document.querySelector(".container").style.flexDirection = "column";
  document.querySelector(".container").style.marginTop = "25%";
  document.querySelector(".items").style.flexDirection = "row";
  document.querySelector(".nav-menu").style.marginTop = "-5rem";
  document.querySelector("nav").style.display = "block";
  document.querySelector(".menu-arrow").style.display = "block";
  document.querySelector(".menu-arrow").style.marginTop = "-15rem";
  document.querySelector(".btn-res").style.display = "none";
  document.querySelector(".separator").style.display = "none";
  document.querySelector(".block-form").style.marginTop = "45%";
  document.querySelector(".vector3").style.marginTop = "45%";
}

function clickMenuClose() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const mensagemEnviada = document.getElementById("mensagem-enviada");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validando o nome
    const nomeInput = document.querySelector(".name");
    const nome = nomeInput.value.trim();
    if (nome === "") {
      alert("Por favor, preencha o campo Nome Completo.");
      nomeInput.focus();
      return false;
    }

    // Validando o e-mail
    const emailInput = document.querySelector(".e-mail");
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      emailInput.focus();
      return false;
    }

    // Validando se alguma opção de conhecimento foi selecionada
    const conhecimentoInputs = document.querySelectorAll(
      'input[type="checkbox"][name^=""]'
    );
    let conhecimentoSelecionado = false;
    conhecimentoInputs.forEach(function (input) {
      if (input.checked) {
        conhecimentoSelecionado = true;
      }
    });
    if (!conhecimentoSelecionado) {
      alert(
        "Por favor, selecione pelo menos uma opção de conhecimento em programação."
      );
      return false;
    }

    // Validando se a opção de já ter trabalhado com desenvolvimento foi selecionada
    const trabalhouInputYes = document.getElementById("btn-yes");
    const trabalhouInputNo = document.getElementById("btn-no");
    if (!trabalhouInputYes.checked && !trabalhouInputNo.checked) {
      alert("Por favor, selecione se já trabalhou com desenvolvimento.");
      return false;
    }

    // Se todos os campos estiverem válidos, o formulário pode ser enviado
    alert("Formulário enviado com sucesso!");
    form.reset();

    // Exibir a mensagem de "Cadastro enviado"
    mensagemEnviada.style.display = "block";
  });
});
