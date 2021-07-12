/*class QuadradoOld{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
      this.setCor = (c) => cor = c;
    }
  }

  class Quadrado{
  
    constructor(lado, altura){
      this._cor = 'blue';
      this.lado = lado;
      this.altura = altura;
    }
  
    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
  }
  
  const quadrado = new Quadrado(3,4);
  console.log(quadrado);
  //Quadrado { cor: 'blue', lado: 3, altura: 4 }
  console.log(quadrado.cor);
  //blue
  quadrado.cor = 'red';
  console.log(quadrado.cor);
  //red

  class Quadrado2{
    constructor(base, altura){
      if(isNaN(base) || isNaN(altura)) throw 'Base e altura precisam ser números';
      this.base = base;
      this.altura = altura;
      this._cor = undefined;
    }
    get cor() { return this._cor; }
    set cor(cor) { 
      if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
        throw 'O valor da propriedade cor deve ser "red", "green" ou "blue"';
      }
      this._cor = cor; 
    }
  }
  
  const quadrado2 = new Quadrado2(3,4);
  console.log(quadrado2);
  //Quadrado { base: 3, altura: 4, _cor: undefined }
  console.log(quadrado2.cor);
  //blue
  quadrado2.cor = 'red';
  console.log(quadrado2.cor);
  //red
  quadrado2.cor = 'white';
  //O valor da propriedade cor deve ser "red", "green" ou "blue"
*/
  function createQuadrado(base, altura){
    if(isNaN(base) || isNaN(altura)) throw 'Base e altura precisam ser números';
    let _cor = undefined;
    return {
      base,
      altura,
      get cor() {return _cor; },
      set cor(cor) {
        if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
          throw 'QUADRADO 3 O valor da propriedade cor deve ser "red", "green" ou "blue"';
        }
        _cor = cor; 
      }    
    };
  }
  
  const quadrado3 = createQuadrado(3,4);
  console.log(quadrado3);
  //{ base: 3, altura: 4, cor: [Getter/Setter] }
  console.log(quadrado3.cor);
  //blue
  quadrado3.cor = 'red';
  console.log(quadrado3.cor);
  //red
  quadrado3.cor = 'white';
  //O valor da propriedade cor deve ser "red", "green" ou "blue"
  quadrado3._cor="teste";