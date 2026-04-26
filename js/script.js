async function buscarClima() {
    const cidade = document.getElementById("cidade").value;
    const apiKey = "6f455bcd9fc628f63a741c79e975b4ce";

    if (!cidade) {
        alert("Digite uma cidade");
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;

        const resposta = await fetch(url);
        const dados = await resposta.json();

        // Erro de cidade não encontrada
        if (dados.cod == 404) {
            alert("Cidade não encontrada");
            return;
        }

        // Preencher dados na tela
        document.getElementById("city").innerText = dados.name;
        document.getElementById("temp").innerText = Math.round(dados.main.temp) + "°C";
        document.getElementById("desc").innerText = dados.weather[0].description;
        document.getElementById("humidity").innerText = "Umidade: " + dados.main.humidity + "%";

        // Ícone do clima
        const iconCode = dados.weather[0].icon;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro ao buscar dados");
    }
}


// Evento de clique no botão
document.getElementById("btnBuscar")
    .addEventListener("click", buscarClima);


// Buscar ao apertar ENTER
document.getElementById("cidade")
    .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            buscarClima();
        }
    });