//prima classe
var User = /** @class */ (function () {
    //dichiarazione del costruttore
    function User(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    //implementazione metodo RICARICA
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    //implementazione metodo CHIAMATA
    User.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= (minutiDurata * 0.2);
    };
    //implementazione metodo NUMERO404(return)
    User.prototype.numero404 = function () {
        return "\nValore della carica disponibile: " + this.carica;
    };
    //implementazione metodo getNumeroChiamate(return)
    User.prototype.getNumeroChiamate = function () {
        return '\nNumero chiamate: ' + this.numeroChiamate;
    };
    //implementazione metodo azzeraChiamate
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        return "\nDopo l'azzeramento delle chiamate:\nNumero chiamate: " + this.numeroChiamate;
    };
    return User;
}());
var primoSmartphone = new User(20, 0);
var secondoSmartphone = new User(5, 0);
var terzoSmartphone = new User(3, 0);
//implementazione della classe
//utilizzo dei metodi giusti per effettuare DUE ricariche e DUE chiamate
console.log("---PRIMO UTENTE---");
console.log(primoSmartphone.ricarica(10), primoSmartphone.ricarica(5), primoSmartphone.chiamata(6), primoSmartphone.chiamata(10), primoSmartphone.numero404(), primoSmartphone.getNumeroChiamate(), primoSmartphone.azzeraChiamate());
console.log("---SECONDO UTENTE---");
console.log(secondoSmartphone.ricarica(2), secondoSmartphone.ricarica(5), secondoSmartphone.chiamata(7), secondoSmartphone.chiamata(8), secondoSmartphone.numero404(), secondoSmartphone.getNumeroChiamate(), secondoSmartphone.azzeraChiamate());
console.log("---TERZO UTENTE---");
console.log(terzoSmartphone.ricarica(10), terzoSmartphone.ricarica(10), terzoSmartphone.chiamata(10), terzoSmartphone.chiamata(20), terzoSmartphone.numero404(), terzoSmartphone.getNumeroChiamate(), terzoSmartphone.azzeraChiamate());
//console.log():
/* 'primo utente'
'valore carica disponibile: ' -> metodo
'dopo l'azzeramento'
'numero chiamate: -> metodo */ 
