// Scroll suave ao clicar nos links do menu
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Criação do botão flutuante de WhatsApp
  const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/5511976263651';
whatsappBtn.target = '_blank';
whatsappBtn.className = 'whatsapp-float';
whatsappBtn.innerHTML = '<img src="imagens/3d-fluency-whatsapp-logo.png" alt="WhatsApp" style="width: 60px; height: 60px;">';
document.body.appendChild(whatsappBtn);
});
