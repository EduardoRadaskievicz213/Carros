// Dados dos carros (você pode substituir por uma API)
const cars = [
    {
        name: "Ferrari LaFerrari",
        image: "https://link-para-imagem-ferrari.com",
        description: "Um supercarro híbrido com 950 cavalos de potência.",
        details: "Alcança 0 a 100 km/h em menos de 3 segundos e possui um design impressionante."
    },
    {
        name: "Lamborghini Aventador",
        image: "https://link-para-imagem-lamborghini.com",
        description: "Supercarro de 770 cavalos e motor V12.",
        details: "Atinge 350 km/h com um design aerodinâmico agressivo e inovador."
    },
    {
        name: "Porsche 911 Turbo",
        image: "https://link-para-imagem-porsche.com",
        description: "Carro esportivo clássico com motor turbo e 650 cavalos.",
        details: "Incrível estabilidade e desempenho. É um ícone da engenharia alemã."
    }
];

// Função para exibir carros
function displayCars() {
    const carList = document.getElementById('car-list');

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <h2>${car.name}</h2>
                <p>${car.description}</p>
                <button onclick="showDetails('${car.details}')">Ver Detalhes</button>
            </div>
        `;
        
        carList.appendChild(carCard);
    });
}

// Função para exibir detalhes
function showDetails(details) {
    alert(details);
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', displayCars);
