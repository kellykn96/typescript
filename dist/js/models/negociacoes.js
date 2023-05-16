export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao>  = []; trocado por:
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> trocado por:
    lista() {
        return this.negociacoes; //Readonly dispensa o spread operator ... para nao alterar a lista, uma vez que uma lista é a memoria de um encapsulamento, onde esse não a protege
    }
}
