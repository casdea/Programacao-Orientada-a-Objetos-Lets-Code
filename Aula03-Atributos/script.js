class Quadrado {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) {
            throw 'Informação nao numerica';
        }

        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado('11', '12');
quadrado.cor = "red";
console.log(quadrado);

