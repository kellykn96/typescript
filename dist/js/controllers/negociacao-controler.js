export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data'); //# é o antigo _ de js;
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }
}
