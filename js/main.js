document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var materialSelect = document.getElementById('materialSelect');
    var dicaInput = document.getElementById('dicaInput');

    var material = materialSelect.value;
    var dica = dicaInput.value;

    if (dica !== '') {
        var listaDicas = document.getElementById('listaDicas');

        var novoItem = document.createElement('div');
        novoItem.classList.add('dica-item');

        var textoDica = document.createElement('span');
        textoDica.textContent = dica;
        novoItem.appendChild(textoDica);

        var removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.classList.add('remover-button');
        novoItem.appendChild(removerButton);

        // Adicionar classe de cor com base no material
        if (material === 'plastico') {
            novoItem.classList.add('plastico');
        } else if (material === 'metal') {
            novoItem.classList.add('metal');
        } else if (material === 'papel') {
            novoItem.classList.add('papel');
        } else if (material === 'vidro') {
            novoItem.classList.add('vidro');
        } else if (material === 'organico') {
            novoItem.classList.add('organico');
        }

        listaDicas.appendChild(novoItem);

        materialSelect.value = 'plastico';
        dicaInput.value = '';

        // Armazenar dados no Local Storage
        var dicasArmazenadas = JSON.parse(localStorage.getItem('dicas')) || [];
        dicasArmazenadas.push({ material: material, dica: dica });
        localStorage.setItem('dicas', JSON.stringify(dicasArmazenadas));
    } else {
        alert('Campo vazio, por favor insira a dica para ser cadastrada.');
        return;
    }
});


// Metodo para Filtrar os intens 
document.getElementById('filtroButton').addEventListener('click', function() {
    var filtroInput = document.getElementById('filtroInput').value.toLowerCase();
    var listaDicas = document.getElementById('listaDicas');
    var materialEncontrado = false;

    if (filtroInput === '') {
        alert('Informe um material a ser pesquisado.');
        return;
    }

    for (var i = 0; i < listaDicas.children.length; i++) {
        var dica = listaDicas.children[i];
        var material = dica.classList;

        var encontrouMaterial = false;
        for (var j = 0; j < material.length; j++) {
            if (material[j].toLowerCase() === filtroInput) {
                encontrouMaterial = true;
                break;
            }
        }

        if (encontrouMaterial) {
            dica.style.display = 'block';
            materialEncontrado = true;
        } else {
            dica.style.display = 'none';
        }
    }

    if (!materialEncontrado) {
        alert('Material não encontrado.');
    }
});

// Metodo para remover os itens 

var listaDicas = document.getElementById('listaDicas');

listaDicas.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('remover-button')) {
        var divItem = event.target.parentNode;
        divItem.remove();

        // Obter o texto da dica a ser removida
        var dicaTexto = divItem.firstChild.textContent;

        // Remover a dica do Local Storage
        var dicasArmazenadas = JSON.parse(localStorage.getItem('dicas')) || [];
        dicasArmazenadas = dicasArmazenadas.filter(function(item) {
            return item.dica !== dicaTexto;
        });
        localStorage.setItem('dicas', JSON.stringify(dicasArmazenadas));
    }
});



// Metodo para o botão mostar coloca nos bairros
var coletaButton = document.getElementById('coletaButton');
var horariosColeta = document.getElementById('horariosColeta');
var menuAberto = false;

coletaButton.addEventListener('click', function() {
    if (menuAberto) {
        horariosColeta.innerHTML = '';
        menuAberto = false;
    } else {
        var bairros = [{
            nome: 'Câmpus Universitários',
            horarios: ['Segunda-feira', 'Quinta-feira', 'Sexta-feira']
        }, {
            nome: 'Alvorada',
            horarios: ['Terça-feira', 'Quinta-feira', 'Sábado']
        }, {
            nome: 'Ayrtol Senna',
            horarios: ['Segunda-feira', 'Quinta-feira', 'Sexta-feira']
        }, {
            nome: 'Varotto',
            horarios: ['Terça-feira', 'Quinta-feira', 'Sábado']
        }, {
            nome: 'Porto Belo',
            horarios: ['Segunda-feira', 'Quinta-feira', 'Sexta-feira']
        }];

        for (var i = 0; i < bairros.length; i++) {
            var bairro = bairros[i];
            var paragrafo = document.createElement('p');
            paragrafo.textContent = bairro.nome + ': ' + bairro.horarios.join(', ');
            horariosColeta.appendChild(paragrafo);
        }

        menuAberto = true;
    }
});