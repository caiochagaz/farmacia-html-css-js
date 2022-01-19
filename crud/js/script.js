var linhaSelecionada = null;

function enviar(e){
    // var event = Event
    event.preventDefault();
    var formDados = lerFormDados();
    if(linhaSelecionada === null){
        inserirNovoDado(formDados);
    }
    else{
        atualizarDados(formDados);
    }
    limpar();
}

//CRUD PARA LISTAGEM DE CLIENTES SOMENTE COM JAVASCRIPT

//C - CREATE/ R - READ/  U - UPDATE/ D - DELETE

//Função que faz a "leitura" do formulário HTML, buscando os valores de cada campo pelo ID
function lerFormDados(){
    var formDados = {};
    formDados["nome"] = document.getElementById("nome").value;
    formDados["email"] = document.getElementById("email").value;
    formDados["cidade"] = document.getElementById("cidade").value;
    formDados["telefone"] = document.getElementById("telefone").value;
    return formDados;
}

//Função para inserir um novo dado, nesse caso, um novo cliente ao CRUD
function inserirNovoDado(data){
    var tabela = document.getElementById("armazenar").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.length);
    var celula1 = novaLinha.insertCell(0);
        celula1.innerHTML = data.nome;
    var celula2 = novaLinha.insertCell(1);
        celula2.innerHTML = data.email;
    var celula3 = novaLinha.insertCell(2);
        celula3.innerHTML = data.cidade;
    var celula4 = novaLinha.insertCell(3);
        celula4.innerHTML = data.telefone;
    var celula5 = novaLinha.insertCell(4);
        celula5.innerHTML = `<button onClick='editar(this)'>Editar</button> <button onClick='deletar(this)'>Deletar</button>`
}

//Função para editar um cliente já cadastrado
function editar(td){
    linhaSelecionada = td.parentElement.parentElement;
    document.getElementById('nome').value = linhaSelecionada.cells[0].innerHTML;
    document.getElementById('email').value = linhaSelecionada.cells[1].innerHTML;
    document.getElementById('cidade').value = linhaSelecionada.cells[2].innerHTML;
    document.getElementById('telefone').value = linhaSelecionada.cells[3].innerHTML;
}

function atualizarDados(formDados){
    linhaSelecionada.cells[0].innerHTML = formDados.nome;
    linhaSelecionada.cells[1].innerHTML = formDados.email;
    linhaSelecionada.cells[2].innerHTML = formDados.cidade;
    linhaSelecionada.cells[3].innerHTML = formDados.telefone;
}

//Função para fazer a deleção dos dados dos clientes já cadastrados
function deletar(td){
    if(confirm('Tem certeza que você quer deletar esse arquivo?')){
        row = td.parentElement.parentElement;
        document.getElementById('armazenar').deleteRow(row.rowIndex);
    }
    limpar();
}

//Função para limpar os campos
function limpar(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('telefone').value = '';
}