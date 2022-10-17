export class Alloggio {
  nPartecipanti:number;
  destinazione :string;
  descrizione : string;
 
  nBagni : number;
  nStanzaLetto : number;
  pensione:string;
  titolo:string;
  linkImg:string;

  constructor (   nBagni : number, nStanzaLetto : number,
    nPartecipanti : number,destinazione:string,descrizione:string,
   pensione:string,titolo:string,linkImg:string
  ) {
      this.nBagni = nBagni;
      this.nPartecipanti = nPartecipanti;
      this.nStanzaLetto = nStanzaLetto;
      this.destinazione=destinazione;
      this.descrizione=descrizione;
      this.titolo=titolo;
      this.pensione=pensione;
      this.linkImg=linkImg;

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

public getNPartecipanti() : number {
  return this.nPartecipanti;
}
public setNLetti(nLetti : number) {
  this.nPartecipanti = nLetti;
}


public getDescrizione() : string {
  return this.descrizione;
}
public setDescrizione( descrizione : string) {
  this.descrizione = descrizione;
}
public getDestinazione() : string {
  return this.destinazione;
}
public setDestinazione( destinazione : string) {
  this.destinazione = destinazione;
}


public getPensione() : string {
  return this.pensione;
}
public setPensione( pensione : string) {
  this.pensione = pensione;
}
public getTitolo() : string {
  return this.titolo;
}
public setTitolo( titolo : string) {
  this.titolo = titolo;
}
public getLinkImg() : string {
  return this.linkImg;
}
public setLinkImg( linkImg : string) {
  this.linkImg = linkImg;
}

}
