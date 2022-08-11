function criaPessoa (nome, sobrenome, idade, situaçao){
    return{
        nome: nome, 
        sobrenome: sobrenome, 
        idade: idade,
        situaçao: situaçao

    };
}

const pessoa1 = criaPessoa('luiz', 'lima', 32, 'calvo');
const pessoa2 = criaPessoa('Lucio', 'Freitas', 19, 'semicalvo');
const pessoa3 = criaPessoa('Maria', 'Luiza', 15, 'cabeluda');
const pessoa4 = criaPessoa('Roberto', 'Lima', 21, 'calvo');
console.log(pessoa1, pessoa2, pessoa3);