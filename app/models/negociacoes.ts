import { Negociacao } from "./negociacao";

export class Negociacoes {

    //private negociacoes: Array<Negociacao>  = []; trocado por:
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);

    }

    // lista(): ReadonlyArray<Negociacao> trocado por:

    lista(): readonly Negociacao[] { //apenas para guardar negociacoes numa lista
        return this.negociacoes; //Readonly dispensa o spread operator ... para nao alterar a lista, uma vez que uma lista é a memoria de um encapsulamento, onde esse não a protege

    }

}

