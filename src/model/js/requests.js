const url_server = "http://localhost:3001";

function cadastrar() {
    console.log('Enviando dados ao servidor...');

    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
        marca: document.querySelector('[name="marca"]').value,
        modelo: document.querySelector('[name="modelo"]').value,
        versao: document.querySelector('[name="versao"]').value,
        placa: document.querySelector('[name="placa"]').value,
        combustivel: document.querySelector('[name="combustivel"]').value,
        eixos: document.querySelector('[name="eixos"]').value,
        peso: document.querySelector('[name="peso"]').value
    }

    console.log(dados);
    // Requisição para back-end

    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        // Depois de feita a requisição, o front-end irá receber um retorno do servidor
        .then(response => response.json())
        // Se toda a requisição deu certo, será informado no log
        .then(dados => {
            console.log('Resposta do servidor:', dados);
            // Faça algo com a resposta do servidor, se necessário
        })
        // Caso tenha algum tipo de erro na requisição, é lançada a excessão
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Trate os erros, se necessário
        });
}

function listarPessoas() {
    fetch(`${url_server}/veiculos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(veiculos => {
                console.log(veiculos);
            })
        });

    // exibir informações na tabela
    data.forEach(veiculos => {
        // Criando os elementos HTML
        const tabela = document.querySelector('table');
        const elementTr = document.createElement('tr');
        const tdMarca = document.createElement('td');
        const tdModelo = document.createElement('td');
        const tdVersao = document.createElement('td');
        const tdPlaca = document.createElement('td');
        const tdCombustivel = document.createElement('td');
        const tdEixos = document.createAttribute('td');
        const tdPeso = document.createAttribute('td');


        // Inserindo os dados da pessoa no elemento	
        tdMarca.textContent = veiculos.marca;
        tdModelo.textContent = veiculos.modelo;
        tdVersao.textContent = veiculos.versao;
        tdPlaca.textContent = veiculos.placa;
        tdCombustivel.textContent = veiculos.combustivel;
        tdEixos.textContent = veiculos.eixos;
        tdPeso.textContent = veiculos.peso;

        // Inserindo os elementos nas linhas da tabela (tr => TableRow)
        elementTr.appendChild(tdMarca);
        elementTr.appendChild(tdModelo);
        elementTr.appendChild(tdVersao);
        elementTr.appendChild(tdPlaca);
        elementTr.appendChild(tdCombustivel);
        elementTr.appendChild(tdEixos);
        elementTr.appendChild(tdPeso);

        // Adicionando a linha com as informações na tabela
        tabela.appendChild(elementTr);
    })
}