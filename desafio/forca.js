class Forca {

  constructor(palavraSecreta) {
    this.vidas = 6;
    this.estado = "aguardando chute";
    this.letrasChutadas = [];
    this.palavra = [];
    this.palavraSecreta = palavraSecreta;
    
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      this.palavra.push('_');
    }
  }

  chutar(letra) {

    if (letra.length > 1) {
      return console.log("Digite apenas uma letra.");
    }

    if (this.letrasChutadas.find(letraChutada => letra === letraChutada)) {
      return console.log("Esta letra já foi chutada anteriormente.");
    }

    this.letrasChutadas.push(letra);

    if (this.palavraSecreta.indexOf(letra) < 0) {
      console.log('Errou');
      this.vidas -= 1;
    }

    if (this.vidas === 0) {
      return this.estado = "perdeu";
    }

    let i = 0
    var index = 0
    for(i in this.palavraSecreta){
      if(letra === this.palavraSecreta[i]){
        this.palavra[index] = letra;
      }
      index ++;
    }

    if (!this.palavra.find(element => element === "_")) {
      return this.estado = "ganhou";
    }

  }

  buscarEstado() {
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
