// Local cache to satisfy PokéAPI Fair Use Policy
const pokemonCache = {};

const btn = document.getElementById('btn');
const pokeInput = document.getElementById('poke-input');
const pokeDataSection = document.getElementById('poke-data');
const teamDisplay = document.getElementById('team-display');

let activePokemon = null;

btn.addEventListener('click', async () => {
    const query = pokeInput.value.toLowerCase().trim();
    if (!query) return;

    if (pokemonCache[query]) {
        renderPokemon(pokemonCache[query]);
    } else {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            const data = await response.json();
            
            // Store in cache
            pokemonCache[query] = data;
            renderPokemon(data);
        } catch (error) {
            alert('Pokémon not found. Please check the name or ID and try again.');
        }

    }
});

function renderPokemon(data) {
    activePokemon = data;
    pokeDataSection.classList.remove('hidden');
    
    document.getElementById('poke-img').src = data.sprites.front_default;
    document.getElementById('poke-audio').src = data.cries.latest;

    // Load Moves into the 4 dropdowns
    const selects = document.querySelectorAll('.move-sel');
    selects.forEach(select => {
        select.innerHTML = ''; // Reset
        data.moves.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.move.name;
            opt.textContent = m.move.name;
            select.appendChild(opt);
        });
    });
}

document.getElementById('add-btn').addEventListener('click', () => {
    if (!activePokemon) return;

    const moves = Array.from(document.querySelectorAll('.move-sel')).map(s => s.value);
    
    const member = document.createElement('div');
    member.className = 'team-member';
    member.innerHTML = `
        <strong>${activePokemon.name.toUpperCase()}</strong><br>
        <img src="${activePokemon.sprites.front_default}" style="width:80px;"><br>
        <div style="font-size:10px; text-align:left;">
            ${moves.map(m => `• ${m}`).join('<br>')}
        </div>
    `;
    teamDisplay.appendChild(member);
});