document.addEventListener("DOMContentLoaded", () => {

    const botaoTema = document.getElementById("theme-toggle");

    if (!botaoTema) {
        return;
    }


    /* ============================================
       ATUALIZA O BOTÃO
       ============================================ */

    function atualizarBotaoTema() {

        const modoClaro =
            document.body.classList.contains("light-mode");

        if (modoClaro) {

            botaoTema.textContent = "🌙 Modo escuro";

            botaoTema.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );

        } else {

            botaoTema.textContent = "☀️ Modo claro";

            botaoTema.setAttribute(
                "aria-label",
                "Ativar modo claro"
            );
        }
    }


    /* ============================================
       CARREGA O TEMA SALVO
       ============================================ */

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "claro") {

        document.body.classList.add("light-mode");

    } else {

        document.body.classList.remove("light-mode");
    }


    atualizarBotaoTema();


    /* ============================================
       ALTERAR TEMA
       ============================================ */

    botaoTema.addEventListener("click", () => {

        const modoClaro =
            document.body.classList.toggle("light-mode");


        if (modoClaro) {

            localStorage.setItem("tema", "claro");

        } else {

            localStorage.setItem("tema", "escuro");
        }


        atualizarBotaoTema();
    });

});