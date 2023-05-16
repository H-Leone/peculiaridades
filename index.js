var errors = 0;
var peculiaridades = [
    "Sua risada escandalosa (você tem sorte que seu sorriso é lindo, pq se naõ fosse, seria esquisito)",
    "As caretas que você faz, que apesar de serem peculiares, são fofas",
    "Você tem vergonha de tudo, parece que quer enterrar sua cabeça no solo toda hora. Você não consegue nem pagar a moça do Bacio di Latte sem ter vergonha",
    'Falar um "Então tá show" pra tudo. Por sinal, acabei pegando o mesmo costume. Culpa sua',
    "Sua mania de ficar desviando o olhar e olhando de volta", 
    "Você ter medo de andar de ônibus ou transporte público",
    "Você depender da sua irmã, que é mais nova (era pra ser o contrário né)",
    "Seu hiperfoco (pode até encher um pouco o saco você só falar da mesma coisa por MUITO TEMPO, mas pelo menos eu passo mais tempo com vc e eu gosto disso)",
    "Não sei se enquadra muito, mas se achar feia às vezes. Eu não consigo compactuar pq pra mim vc é mt bonita mesmo, e n faz sentido se achar feia de vez em quando",
    "Você correndo (você corre toda princesinha, com as perninhas abertas)",
    "A melhor de todas: a sua afobação (consegue nem esperar uma aposta terminar meu, que isso)",
    "Você tem vergonha de falar certas coisas (sem motivo, pq vc deveria me falar esse tipo de coisa) e é pior ainda pra demonstrar (você tem vergonha de me ABRAÇAR)",
    "A maior de todas: ser #apocaliptica"
];
var index = 0;

setTimeout(() => {
    const qtdWrapper = document.createElement('div');
    qtdWrapper.id = 'qtd-wrapper';
    qtdWrapper.innerHTML = `
        <p>Quantas peculiaridades você acha que a lista terá? (3 chances)</p>
    `;
    document.body.appendChild(qtdWrapper);
}, 5000);

setTimeout(() => {
    const input = document.createElement('input');
    input.type = "number";
    input.name = "qtd";
    input.id = "qtd";
    input.style.opacity = '0%';
    input.style.appearance = 'none';
    document.querySelector("#qtd-wrapper").appendChild(input);
    setTimeout(() => {
        document.querySelector("#qtd-wrapper > input").style.opacity = '100%';
        document.querySelector("#qtd-wrapper > input").addEventListener('keydown', handleKeyDown);
    }, 1000);
}, 8500);

function handleKeyDown(event) {
    const key = event.key;
    if (key === '-') {
        event.preventDefault();
    } else if (key === 'Enter') {
        checkPeculiaridades(event.target.value, event.target);
    }
}

function checkPeculiaridades(number, target) {
    if(number === '') {
        return;
    }
    if (number === "13") {
        const button = document.createElement('button');
        button.innerHTML = "<div>Ver Peculiaridade</div>";
        button.id = "pec-button";
        button.style.margin = '20px';
        button.addEventListener('click', adicionarPeculiaridade)
        document.querySelector('body').appendChild(button);
        const list = document.createElement('ul');
        list.style.margin = '10px';
        document.querySelector('body').appendChild(list);
        target.disabled = true;
        window.alert("Parabéns! Você acertou o número 13!");
    } else {
        if(errors === 2) {
            target.disabled = true;
        }
        const diff = Math.abs(number - 13);
        let message = "";
        
        if (diff === 1) {
            message = "Quase lá, só falta um!";
            if(errors === 1) {
                message += ` Uma dica: ${Math.random() > 0.5 ? "Faz o L!!!" : "Número da sorte da Taylor Swift"}`;
            }
        } else if (diff < 5) {
            message = "Está esquentando, mas ainda não chegou!";
            if(errors === 1) {
                message += ` Uma dica: ${Math.random() > 0.5 ? "Faz o L!!!" : "Número da sorte da Taylor Swift"}`;
            }
        } else if (diff < 10) {
            message = "Ainda falta um bom pedaço!";
            if(errors === 1) {
                message += ` Uma dica: ${Math.random() > 0.5 ? "Faz o L!!!" : "Número da sorte da Taylor Swift"}`;
            }
        } else {
            message = "Está frio, precisa ir além!";
            if(errors === 1) {
                message += ` Uma dica: ${Math.random() > 0.5 ? "Faz o L!!!" : "Número da sorte da Taylor Swift"}`;
            }
        }
        window.alert(message);
        errors++;
    }
}

function adicionarPeculiaridade() {
    if(document.querySelector('ul').childNodes.length !== peculiaridades.length) {
        const item = document.createElement('li');
        item.textContent = peculiaridades[index];
        document.querySelector('ul').appendChild(item);
        index++;
        if(document.querySelector('ul').childNodes.length === peculiaridades.length) {
            const link = document.createElement('a');
            link.href = 'gosto.html';
            link.textContent = 'Ir para próxima página';
            const button = document.createElement('button');
            button.appendChild(link);
            document.querySelector('body').appendChild(link);
        }
    } 
}