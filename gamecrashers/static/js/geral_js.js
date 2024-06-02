document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.getElementById("moreButton");
    const moreNav = document.getElementById("moreNav");

    // Adiciona um evento de clique ao botão "Mais"
    moreButton.addEventListener("click", function() {
        // Alterna a classe 'active' no elemento '.more-nav'
        moreNav.classList.toggle("active");
    });
});