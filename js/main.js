
// Menu do celular

const botaoMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav");

botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("is-open");
});


// Fechar o menu quando clicar em um link

const linksMenu = document.querySelectorAll(".nav a");

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("is-open");
    });
});


// Mudar o fundo do menu quando rolar a pagina

const cabecalho = document.querySelector(".header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        cabecalho.classList.add("is-solid");
    } else {
        cabecalho.classList.remove("is-solid");
    }
});


// Abrir os videos do portfolio

const botoesVideo = document.querySelectorAll(".card__btn");
const janelaVideo = document.querySelector("#modal");
const lugarVideo = document.querySelector("#modal-media");
const tituloVideo = document.querySelector("#modal-title");
const tipoVideo = document.querySelector("#modal-tag");

botoesVideo.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const arquivo = botao.getAttribute("data-video");
        const titulo = botao.getAttribute("data-title");
        const tipo = botao.getAttribute("data-tag");

        tituloVideo.textContent = titulo;
        tipoVideo.textContent = tipo;

        lugarVideo.innerHTML = "";

        const video = document.createElement("video");

        video.src = arquivo;
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;

        lugarVideo.appendChild(video);

        janelaVideo.hidden = false;
        document.body.style.overflow = "hidden";

    });

});


// Fechar a janela do video

const botaoFechar = document.querySelector(".modal__close");

function fecharVideo() {
    janelaVideo.hidden = true;
    lugarVideo.innerHTML = "";
    document.body.style.overflow = "";
}

botaoFechar.addEventListener("click", fecharVideo);


// Fechar clicando fora do video

janelaVideo.addEventListener("click", function(evento) {
    if (evento.target === janelaVideo) {
        fecharVideo();
    }
});


// Fechar apertando ESC

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape" && !janelaVideo.hidden) {
        fecharVideo();
    }
});


// Setas dos videos

const setas = document.querySelectorAll(".reel__arrow");

setas.forEach(function(seta) {

    seta.addEventListener("click", function() {

        const area = seta.closest(".reel__track-wrap");
        const lista = area.querySelector(".reel__track");

        const direcao = Number(seta.getAttribute("data-dir"));

        lista.scrollBy({
            left: direcao * 280,
            behavior: "smooth"
        });

    });

});


// Links de contato

const numeroWhatsapp = "11988864329";
const instagram = "https://www.instagram.com/story_eduarda/";


// Mensagem pronta para pedir orcamento

const mensagem = "Olá, Eduarda! Tudo bem? Vi seu portfólio e gostei muito do seu trabalho! Gostaria de saber mais sobre seus serviços e solicitar um orçamento.";

const botoesWhatsapp = document.querySelectorAll("[data-wa]");

botoesWhatsapp.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        if (numeroWhatsapp === "") {
            alert("Adicione o numero do WhatsApp.");
        } else {

            const link = "https://wa.me/" + numeroWhatsapp +
                         "?text=" + encodeURIComponent(mensagem);

            window.open(link, "_blank");
        }

    });

});


// Link do Instagram

const botoesInstagram = document.querySelectorAll("[data-ig]");

botoesInstagram.forEach(function(botao) {
    botao.href = instagram;
});


// Atualizar o ano do rodape

const ano = document.querySelector("#year");

ano.textContent = new Date().getFullYear();


// Botao de orcamento para casamento

const botaoCasamento = document.querySelector("[data-casamento]");

if (botaoCasamento) {

    botaoCasamento.addEventListener("click", function(evento) {

        evento.preventDefault();

        const mensagemCasamento =
            "Olá, Eduarda! Tudo bem? Gostaria de saber mais sobre a cobertura de casamento e solicitar um orçamento.";

        const linkCasamento =
            "https://wa.me/" + numeroWhatsapp +
            "?text=" + encodeURIComponent(mensagemCasamento);

        window.open(linkCasamento, "_blank");

    });

}


// Abas dos pacotes

const abasPacotes = document.querySelectorAll("[data-prices-tab]");
const paineisPacotes = document.querySelectorAll(".prices__panel");

abasPacotes.forEach(function(aba) {

    aba.addEventListener("click", function() {

        const categoria = aba.getAttribute("data-prices-tab");

        abasPacotes.forEach(function(item) {

            const ativa = item === aba;

            item.classList.toggle("is-active", ativa);
            item.setAttribute("aria-selected", String(ativa));

        });

        paineisPacotes.forEach(function(painel) {

            painel.hidden = painel.id !== "painel-" + categoria;

        });

    });

});


// WhatsApp dos novos pacotes

const botoesPacotes = document.querySelectorAll("[data-pacote]");

botoesPacotes.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        const pacote = botao.getAttribute("data-pacote");

        const mensagemPacote =
            "Olá, Eduarda! Tudo bem? Vi seu portfólio e gostaria de saber mais sobre o pacote " +
            pacote +
            " e solicitar um orçamento.";

        const linkPacote =
            "https://wa.me/" +
            numeroWhatsapp +
            "?text=" +
            encodeURIComponent(mensagemPacote);

        window.open(linkPacote, "_blank", "noopener,noreferrer");

    });

});
