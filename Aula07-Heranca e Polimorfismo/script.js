class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade);
        this.cpf = cpf;
        this.rg = rg;
    }
}

const cidadao = new Cidadao('teste', 20, '00000', '11111');
console.log(
  cidadao instanceof Cidadao, //true
  cidadao instanceof Pessoa   //true
);