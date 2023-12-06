const url_server = "http://localhost:3001";

function cadastrar() {
    console.log('Enviando dados ao servidor...');

    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
        marca: document.querySelector('[name="marca"]').value,
        modelo: document.querySelector('[name="modelo"]').value,
        ano_fabricacao: document.querySelector('[name="ano_fabricacao"]').value,
        placa: document.querySelector('[name="placa"]').value,
        cor: document.querySelector('[name="cor"]').value,
        peso: document.querySelector('[name="peso"]').value,
        combustivel: document.querySelector('[name="combustivel"]').value,
        eixos: document.querySelector('[name="eixos"]').value,
        tipo_veiculo: document.querySelector('[name="tipo_veiculo"]').value
    }

    console.log(dados);
    // Requisição para back-end

    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastrar`, {
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

function listarVeiculos() {
    fetch(`${url_server}/veiculos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(veiculos => {
                console.log(veiculos);
            })
        });
    
        data.forEach(veiculos => {
            // Criando os elementos HTML
            const tabela = document.querySelector('table');
            const elementTr = document.createElement('tr');
            const tdMarca = document.createElement('td');
            const tdModelo = document.createElement('td');
            const tdAno_Fabricacao = document.createElement('td');
            const tdPlaca = document.createElement('td');
            const tdCor = document.createElement('td');
            const tdPeso = document.createAttribute('td');
            const tdCombustivel = document.createAttribute('td');
            const tdEixos = document.createAttribute('td');
            const tdTipos_Veiculo = document.createAttribute('td');
    
    
            // Inserindo os dados do veiculo no elemento	
            tdMarca.textContent = veiculos.marca;
            tdModelo.textContent = veiculos.modelo;
            tdAno_Fabricacao.textContent = veiculos.ano_fabricacao;
            tdPlaca.textContent = veiculos.placa;
            tdCor.textContent = veiculos.cor;
            tdPeso.textContent = veiculos.peso;
            tdCombustivel.textContent = veiculos.combustivel;
            tdEixos.textContent = veiculos.eixos;
            tdTipos_Veiculo.textContent = veiculos.tipo_veiculo;
    
            // Inserindo os elementos nas linhas da tabela (tr => TableRow)
            elementTr.appendChild(tdMarca);
            elementTr.appendChild(tdModelo);
            elementTr.appendChild(tdAno_Fabricacao);
            elementTr.appendChild(tdPlaca);
            elementTr.appendChild(tdCor);
            elementTr.appendChild(tdPeso);
            elementTr.appendChild(tdCombustivel);
            elementTr.appendChild(tdEixos);
            elementTr.appendChild(tdTipos_Veiculo);
            
            // Adicionando a linha com as informações na tabela                                                    
            tabela.appendChild(elementTr);
        })
}