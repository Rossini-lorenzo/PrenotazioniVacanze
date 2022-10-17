export class Alloggio {
  
  destinazione :string;
  descrizione : string;
  dataInizio : Date;
  dataFine : Date;
  codAlloggio : number;
  camere : number;
  nBagni : number;
  nStanzaLetto : number;
  nLetti : number;
  maxPartecipanti : number;

  constructor ( codAlloggio : number, camere : number, nBagni : number, nStanzaLetto : number,
    nLetti : number, maxPartecipanti : number ,destinazione:string,descrizione:string,dataInizio:Date,
    dataFine:Date) {
      this.codAlloggio = codAlloggio;
      this.camere = camere;
      this.nBagni = nBagni;
      this.nLetti = nLetti;
      this.nStanzaLetto = nStanzaLetto;
      this.maxPartecipanti = maxPartecipanti;
      this.destinazione=destinazione;
      this.descrizione=descrizione;
      this.dataFine=dataFine;
      this.dataInizio=dataInizio;

  }

public getCodAlloggio() : number {
    return this.codAlloggio;
}

public getCamere() : number {
  return this.camere;
}
public setCamere(camere : number) {
  this.camere = camere;
}

public getNBagni() : number {
  return this.nBagni;
}
public setNBagni(nBagni : number) {
  this.nBagni = nBagni;
}

public getNStanzeLetto() : number {
  return this.nStanzaLetto;
}
public setNStanzeLetto(nStanzeLetto : number) {
  this.nStanzaLetto = nStanzeLetto;
}

public getNLetti() : number {
  return this.nLetti;
}
public setNLetti(nLetti : number) {
  this.nLetti = nLetti;
}

public getMaxPartecipanti() : number {
  return this.maxPartecipanti;
}
public setMaxPartecipanti( numero : number) {
  this.maxPartecipanti = numero;
}
public getDescrizione() : String {
  return this.descrizione;
}
public setDescrizione( descrizione : string) {
  this.descrizione = descrizione;
}
public getDestinazione() : String {
  return this.destinazione;
}
public setDestinazione( destinazione : string) {
  this.destinazione = destinazione;
}
public getDataInizio() : Date {
  return this.dataInizio;
}
public setDataInizio( dataInizio : Date) {
  this.dataInizio = dataInizio;
}

public getDataFine() : Date {
  return this.dataFine;
}
public setDataFine( dataFine : Date) {
  this.dataFine = dataFine;
}


}
