export class Offerta {
    idVacanzaOfferta : number;
    dataInizio: Date;
    dataFine :  Date;
    prezzo : number;

    
  constructor(idVacanza : number,dataInizio: Date,dataFine :  Date,prezzo : number) {
     this.idVacanzaOfferta=idVacanza;
     this.dataFine=dataFine;
     this.dataInizio=dataInizio;
     this.prezzo=prezzo;

  }

  public getIdVacanzaOfferta() : number{
    return this.idVacanzaOfferta;
  }
  public setIdVacanzaOfferta(idVacanzaOfferta: number) {
    this.idVacanzaOfferta = idVacanzaOfferta;
  }
  public getPrezzo() : number{
    return this.prezzo;
  }
  public setPrezzo(prezzo: number) {
    this.prezzo = prezzo
  }
  public getDataInizio() : Date{
    return this.dataInizio;
  }
  public setDataInizio(dataInizio: Date) {
    this.dataInizio = dataInizio;
  }
  public getDataFine() : Date{
    return this.dataFine;
  }
  public setDataFine(dataFine: Date) {
    this.dataFine = dataFine;
  }
}

