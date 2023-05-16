export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor( data: Date, quantidade: number, valor: number){
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    /*get data() { //getters não apresentam _ como diferenciacao de atributo
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }


}

*/


    constructor(
        public readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    //public readonly permite accessar como um getter, mas não alterar como um private, substituindo ambos.
    //também nao precisamo das propriedades, pois o typescript entende que o constructor terá os mesmos nomes
