const topSection = document.getElementById('topSection');
const container = document.getElementById('container');
const gameInfo = document.querySelector('.game-info');

function toggleSections() {
    if (window.scrollY > 50) {
        topSection.classList.remove('visible');
        container.classList.add('visible');
        setTimeout(() => {
            gameInfo.classList.add('visible');
        }, 500); // Delay para permitir que o container fique visível antes de animar o conteúdo
    } else {
        topSection.classList.add('visible');
        container.classList.remove('visible');
        gameInfo.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleSections);
document.addEventListener('DOMContentLoaded', () => {
    toggleSections();
});