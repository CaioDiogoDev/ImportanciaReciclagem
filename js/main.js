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

        listaDicas.appendChild(novoItem);

        materialSelect.value = 'plastico';
        dicaInput.value = '';

        // Armazenar dados no Local Storage
        var dicasArmazenadas = JSON.parse(localStorage.getItem('dicas')) || [];
        dicasArmazenadas.push({ material: material, dica: dica });
        localStorage.setItem('dicas', JSON.stringify(dicasArmazenadas));
    }

});


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
        var material = dica.classList[0].toLowerCase();

        if (material === filtroInput) {
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

var listaDicas = document.getElementById('listaDicas');

listaDicas.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('remover-button')) {
        var divItem = event.target.parentNode;
        divItem.remove();
    }
});


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