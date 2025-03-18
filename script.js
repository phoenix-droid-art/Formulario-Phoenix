document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const titulo = document.getElementById("titulo");
    const confirmacao = document.getElementById("confirmacao");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio tradicional do formulário

        let valid = true;

        function showError(id, inputId, validator = (value) => !!value) {
            let input = document.getElementById(inputId);
            let error = document.getElementById(id);
            if (!validator(input.value)) {
                error.style.display = "block";
                input.classList.add("invalid");
                valid = false;
            } else {
                error.style.display = "none";
                input.classList.remove("invalid");
            }
        }

        showError("error-nome", "nome");
        showError("error-email", "email", (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)); // Valida email
        showError("error-telefone", "telefone", (value) => value.length >= 14); // Valida telefone (mínimo de caracteres)

        let aceita = document.getElementById("aceita");
        let errorAceita = document.getElementById("error-aceita");
        if (!aceita.checked) {
            errorAceita.style.display = "block";
            valid = false;
        } else {
            errorAceita.style.display = "none";
        }

        if (valid) {
    const container = document.querySelector(".container"); // Seleciona o container principal
    container.classList.add("hidden"); // Esconde o container completo
    confirmacao.classList.remove("hidden"); // Mostra a tela de confirmação
	}


    });

    // Formatação do número de telefone
    document.getElementById("telefone").addEventListener("input", function(event) {
        let value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

        if (value.length > 2 && value.length <= 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
        event.target.value = value;
    });
});
