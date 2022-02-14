// Interfaccia Smartphone
interface Smartphone{
    //inserire proprietà
    carica: number;
	numeroChimate: number;
    //dichiarare i metodi
    ricarica(unaRicarica:number):void;
    chiamata(minutiDurata:number):void;
    numero404():string;
    getNumeroChiamate():string;
    azzeraChiamate():string;
}

//prima classe
class User implements Smartphone{
    //modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;

    //dichiarazione del costruttore
	constructor(carica: number, numeroChiamate: number) {
		this.carica = carica;
		this.numeroChiamate = numeroChiamate;
	}
    //implementazione metodo RICARICA
    public ricarica(unaRicarica:number):void {
        this.carica+=unaRicarica;
    }

    //implementazione metodo CHIAMATA
    public chiamata(minutiDurata:number):void {
        this.numeroChiamate+=1;
        this.carica-=(minutiDurata*0.2);
    }
    //implementazione metodo NUMERO404(return)
    public numero404():string {
        return "\nValore della carica disponibile: " + this.carica;
    }

    //implementazione metodo getNumeroChiamate(return)
    public getNumeroChiamate():string {
        return '\nNumero chiamate: ' + this.numeroChiamate;
    }
    //implementazione metodo azzeraChiamate
    public azzeraChiamate():string {
        this.numeroChiamate=0;
        return "\nDopo l'azzeramento delle chiamate:\nNumero chiamate: " + this.numeroChiamate;
    }
}

//implementazione della classe
const primoSmartphone=new User(20, 0);
const secondoSmartphone=new User(5, 0);
const terzoSmartphone=new User(3, 0);

//utilizzo dei metodi giusti per effettuare DUE ricariche e DUE chiamate
console.log("---PRIMO UTENTE---")
console.log(primoSmartphone.ricarica(10), primoSmartphone.ricarica(5), primoSmartphone.chiamata(6), primoSmartphone.chiamata(10), primoSmartphone.numero404(), primoSmartphone.getNumeroChiamate(), primoSmartphone.azzeraChiamate());

console.log("---SECONDO UTENTE---")
console.log(secondoSmartphone.ricarica(2), secondoSmartphone.ricarica(5), secondoSmartphone.chiamata(7), secondoSmartphone.chiamata(8), secondoSmartphone.numero404(), secondoSmartphone.getNumeroChiamate(), secondoSmartphone.azzeraChiamate());

console.log("---TERZO UTENTE---")
console.log(terzoSmartphone.ricarica(10), terzoSmartphone.ricarica(10), terzoSmartphone.chiamata(10), terzoSmartphone.chiamata(20), terzoSmartphone.numero404(), terzoSmartphone.getNumeroChiamate(), terzoSmartphone.azzeraChiamate());

//console.log():
/* 'primo utente'
'valore carica disponibile: ' -> metodo
'dopo l'azzeramento'
'numero chiamate: -> metodo */