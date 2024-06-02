const teams = [
    {
        representante: "Carlos Silva",
        time: "SK gaming",
        membros: "Fallen, TACO, Coldzera, FNX, Fer"
    },
    {
        representante: "Mariana Lima",
        time: "Immortals",
        membros: "KNG, Boltz, Steel, HEN1, Lucas1"
    },
    // Adicione mais times conforme necessário
];

const teamListContainer = document.querySelector(".team-list");

teams.forEach(team => {
    const teamItem = document.createElement("div");
    teamItem.classList.add("team-item");

    const representanteDiv = document.createElement("div");
    representanteDiv.textContent = team.representante;

    const timeDiv = document.createElement("div");
    timeDiv.textContent = team.time;

    const membrosDiv = document.createElement("div");
    membrosDiv.textContent = team.membros;

    teamItem.appendChild(representanteDiv);
    teamItem.appendChild(timeDiv);
    teamItem.appendChild(membrosDiv);

    teamListContainer.appendChild(teamItem);
});