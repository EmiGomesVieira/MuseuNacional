// Selecionando todos os botões de perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Adicionando o evento de clique para cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Alterna a visibilidade da resposta
        const answer = this.nextElementSibling;
        
        // Se a resposta estiver oculta, exibe-a. Caso contrário, oculta.
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block'; // Exibe a resposta
        } else {
            answer.style.display = 'none'; // Oculta a resposta
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Captura o evento de envio do formulário
    document.getElementById('formContato').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Exibe a mensagem de sucesso
        var responseMessage = document.getElementById('response-message');
        responseMessage.style.display = 'block';

        // Adiciona um delay para ocultar a mensagem depois de alguns segundos
        setTimeout(function() {
            responseMessage.style.display = 'none';
        }, 5000); // A mensagem desaparece após 5 segundos
    });
});

function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active'); /* Adiciona ou remove a classe 'active' para mostrar/ocultar o menu */
  }
  