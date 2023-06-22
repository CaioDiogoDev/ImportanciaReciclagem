# ImportanciaReciclagem

Esse codigo foi desenvolvido para atender ao Projeto 2 da disciplina de Programaço web front-end.  


# Requisitos funcionais mais regras de negocio  implementados na aplicação. 

Devem ser implementadas as seguintes funcionalidades utilizando JavaScript e a API DOM:
1. Cadastro de dicas de reciclagem por tipo de material, com os campos: material
(plástico, metal, papel, vidro, orgânico), dica (texto contendo uma dica de como esse
material pode ser reciclado ou estatísticas sobre a reciclagem desse material).
2. Lista de dicas cadastradas. A cada dica cadastrada, deve ser apresentada essa dica
em uma lista. A cor do item da lista deve corresponder à cor de cada material (azul
para papéis, vermelho para plásticos, verde para vidros, amarelo para metais,
marrom para orgânicos).
3. Filtro de dicas de reciclagem por material. O usuário informa o nome de um material
e são apresentadas as dicas em uma lista, referentes a esse material.
4. Exclusão de dicas de reciclagem por material. O usuário pode excluir uma dica
cadastrada.
5. Ver horários de coleta por bairro. Ao clicar em um botão, é apresentado ao usuário
uma lista dos dias de coleta por bairro (mostrar de ao menos 5 bairros).
Para cadastrar as dicas, deve ser inserida uma caixa de diálogo com os campos de
preenchimento.

# Regras para as funçoes
Para filtrar as dicas, deve ser inserida uma caixa de diálogo com o campo de busca. Ao
clicar no botão “Filtrar”, deve ser feita uma validação para verificar se o campo foi digitado
ou se ele corresponde a um material. Caso não tenha sido informado nada no campo de
busca, apresentar um alerta “informe um material a ser pesquisado”. Caso não seja
informado um material existente, apresente o alerta “material não encontrado”.
O resultado da busca deve ser apresentado ao clicar no botão “Filtrar”, apresentando as
dicas em uma lista. Ao lado de cada dica, deve ser incluído um botão que, quando clicado,
exclui a mesma