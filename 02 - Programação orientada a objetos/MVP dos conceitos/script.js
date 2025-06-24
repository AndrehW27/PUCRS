const cliente = {
    primeiroNome: "André Willian",
    segundoNome: "Gorgo de Carvalho",
    idade: 25,
    email: "teste@gmail.com",
    senha: "123456",   
    cpf: "123.456.789-00",
    rg: "123456789",
    endereco: {
        rua: "Rua 1",
        numero: 123,
        bairro: "Bairro 1",
        cidade: "Cidade 1",
        estado: "Estado 1",
        cep: "12345-678"
    }, 
    compras: [
        {descricao: "Notebook", valor: 5000},
        {descricao: "Celular", valor: 2000}
    ],
    ativo: true,
    // Método para exibir o nome completo
    nomeCompleto: function() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    },
    // Método para adicionar compras
    addCompra: function(descricao, valor) {
        this.compras.push({descricao, valor});
    },
}

console.log(cliente.nomeCompleto());
console.log(cliente);
console.log(cliente.endereco.rua);

cliente.addCompra("Carro", 50000);

document.getElementById("demo").innerHTML = JSON.stringify(cliente);
// document.getElementById("demo").writingSuggestions("<p>JSON.stringify(cliente)</p>");



