// Validação do Formulário de Contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    event.preventDefault(); // Impede o envio do formulário
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Mensagem enviada com sucesso!");
  }
});

// Animação de rolagem suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// AOS - Animações ao rolar a página
AOS.init({
  duration: 1000, // Duração da animação
  easing: 'ease-in-out', // Tipo de transição
  once: true, // A animação acontece apenas uma vez
});

// Interação do botão de Download do Currículo
document.getElementById("download-curriculo").addEventListener("click", function() {
  alert("Currículo baixado com sucesso!");
});

// Função para controlar o envio de mensagens no formulário
function handleSubmit(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    alert("Mensagem enviada! Vamos entrar em contato em breve.");
    document.getElementById("form-contato").reset(); // Limpa o formulário após o envio
  } else {
    alert("Preencha todos os campos antes de enviar.");
  }
}

// Adiciona o evento de submit ao formulário
document.getElementById("form-contato").addEventListener("submit", handleSubmit);

// Animações para os projetos em destaque
window.addEventListener("scroll", function() {
  const projetos = document.querySelectorAll(".projeto, .artigo, .depoimento");

  projetos.forEach((projeto) => {
    if (isInViewport(projeto)) {
      projeto.classList.add("aos-animate");
    }
  });
});

// Função que verifica se o elemento está visível na tela
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// script.js

// Alterna o modo claro/escuro
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
const body = document.body;

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleDarkModeButton.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Inicializa o AOS (Animações ao rolar)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

// Validação do formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    event.preventDefault(); // Impede o envio do formulário
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Mensagem enviada com sucesso!");
  }
});
