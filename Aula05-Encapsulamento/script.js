function Quadrado(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado = new Quadrado(10,20);
console.log(quadrado.cor);

function createQuadrado(base, altura){

    let cor = 'blue';
  
    return {
      base,
      altura,
      getCor : function() { return cor; }
    };
  
  }
  
  const quadrado = createQuadrado(3,4);
console.log(quadrado);
//{ base: 3, altura: 4, getCor: [Function: getCor] }
console.log(quadrado.cor);
//undefined
quadrado.cor = 'red';
console.log(quadrado.cor);
//red
console.log(quadrado.getCor());
//blue