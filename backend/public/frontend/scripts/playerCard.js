async function loadPlayers() {
    try {
        const response = await fetch('/api/players');
        const players = await response.json();

        const playerContainer = document.getElementById('player-container');

        players.forEach(player => {
            const playerCard = `
                <div class="player-card">
                    <img class="player-photo" src="${player.photo}" alt="${player.name}">
                    <h2>${player.name}</h2>
                    <div class="country">
                        <img src="https://flagcdn.com/w20/${player.country_code.toLowerCase()}.png" alt="${player.country}">
                        ${player.country}
                    </div>
                    <div class="grand-slam-results">
                        <div><span>Australian Open:</span> <span class="result">${player.results.australian_open}</span> (${player.results.australian_open_year})</div>
                        <div><span>French Open:</span> <span class="result">${player.results.french_open}</span> (${player.results.french_open_year})</div>
                        <div><span>Wimbledon:</span> <span class="result">${player.results.wimbledon}</span> (${player.results.wimbledon_year})</div>
                        <div><span>US Open:</span> <span class="result">${player.results.us_open}</span> (${player.results.us_open_year})</div>
                    </div>
                    <button class="read-more-btn">Read More</button>
                </div>
            `;

            playerContainer.innerHTML += playerCard;
        });
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadPlayers);
