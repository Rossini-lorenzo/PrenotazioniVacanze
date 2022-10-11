export class Alloggio {

  codAlloggio : number;
  camere : number;
  nBagni : number;
  nStanzaLetto : number;
  nLetti : number;
  maxPartecipanti : number;

  constructor ( codAlloggio : number, camere : number, nBagni : number, nStanzaLetto : number,
    nLetti : number, maxPartecipanti : number ) {
      this.codAlloggio = codAlloggio;
      this.camere = camere;
      this.nBagni = nBagni;
      this.nLetti = nLetti;
      this.nStanzaLetto = nStanzaLetto;
      this.maxPartecipanti = maxPartecipanti;

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
  this.maxPartecipanti = this.maxPartecipanti;
}

}
