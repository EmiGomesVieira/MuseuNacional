// Exibir mensagem de sucesso ao agendar
document.getElementById('formAgendamento').addEventListener('submit', function(event) {
  event.preventDefault();  // Impede o envio real do formulário

  // Exibir a mensagem de confirmação
  var mensagem = document.getElementById('mensagem');
  mensagem.textContent = 'Sua visita foi agendada com sucesso!';
  mensagem.style.display = 'block';  // Torna a mensagem visível

  // Limpar os campos do formulário
  document.getElementById('data').value = '';
  document.getElementById('hora').value = '';

  // Fazer a mensagem desaparecer após 3 segundos
  setTimeout(function() {
      mensagem.style.display = 'none';  // Esconde a mensagem após 3 segundos
  }, 3000);
});


function toggleMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('active'); /* Adiciona ou remove a classe 'active' para mostrar/ocultar o menu */
}
