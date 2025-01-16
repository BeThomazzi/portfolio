// // Função de envio do formulário
// const form = document.getElementById('contact-form');
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // Pega os dados do formulário
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries()); // Converte para um objeto JSON

//   try {
//     // Envia os dados para o backend
//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       alert('Formulário enviado com sucesso!');
//       form.reset(); // Limpa o formulário após o envio
//     } else {
//       alert('Erro ao enviar o formulário. Por favor, tente novamente.');
//     }
//   } catch (error) {
//     console.error('Erro no envio:', error);
//     alert('Ocorreu um erro inesperado. Por favor, tente novamente.');
//   }
// });

// Função do botão "Voltar ao Topo"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostra ou oculta o botão ao rolar a página
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};

// Ao clicar no botão, rola suavemente até o topo
scrollToTopBtn.onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
  });
};

// Get the hamburger icon and the menu
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");

// Toggle the menu when the hamburger icon is clicked
hamburger.onclick = function() {
    navbarMenu.classList.toggle("active");
};