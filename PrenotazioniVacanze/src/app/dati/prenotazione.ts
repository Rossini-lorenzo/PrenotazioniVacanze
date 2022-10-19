export class Prenotazione {
   
    codPrenotazione : number;
    nPartecipanti: number;
    titolo : string;
    utente : number; 
    offerta : number;
    dataInizio : Date;
    dataFine : Date;
    destinazione:string;
    descrizione:string;
    prezzo:number;
    imgLink:string;


    constructor(nPartecipanti: number, titolo : string,
        Utente : number,offerta : number) {
        
        this.nPartecipanti=nPartecipanti;
        this.titolo=titolo;
        this.utente=Utente;
        this.offerta=offerta;
   
     }
}
