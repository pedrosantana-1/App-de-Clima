async function buscarClima() {
            const cidade = document.getElementById("cidade").value;
            const apiKey = "6f455bcd9fc628f63a741c79e975b4ce";
            

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;

            const resposta = await fetch(url);
            const dados = await resposta.json();

            if (dados.cod === "404") {
            alert("Cidade não encontrada");
            return;
            }

            console.log(dados);

            document.getElementById("city").innerText = dados.name;
            document.getElementById("temp").innerText = Math.round(dados.main.temp) + "°C";
            document.getElementById("desc").innerText = dados.weather[0].description;
            document.getElementById("humidity").innerText = "Umidade: " + dados.main.humidity + "%";
            }