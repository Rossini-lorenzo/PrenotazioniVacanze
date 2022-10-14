export class Viaggio {

  luogoPartenza : string;
  luogoArrivo : string;
  orarioPartenza : Date;
  orarioArrivo : Date;
  tipoMezzo : string;
  idViaggio : number;
  numeroBiglietti : number;

  constructor(  luogoPartenza : string, luogoArrivo : string, orarioPartenza : Date, orarioArrivo : Date,
    tipoMezzo : string, idViaggio : number, numeroBiglietti : number) {

      this.luogoPartenza =  luogoPartenza;
      this.luogoArrivo = luogoArrivo;
      this.orarioPartenza = orarioPartenza;
      this.orarioArrivo  = orarioArrivo;
      this.tipoMezzo = tipoMezzo;
      this.idViaggio = idViaggio;
      this.numeroBiglietti = numeroBiglietti;

  }

public getOrarioPartenza() : Date {
  return this.orarioPartenza;
}
public setOrarioPartenza( orario : Date) {
  this.orarioPartenza = orario;
}

public getOrarioArrivo() : Date {
  return this.orarioArrivo;
}
public setOrarioArrivo( orario : Date) {
  this.orarioArrivo = orario;
}

public getLuogoPartenza() : string {
  return this.luogoPartenza;
}
public setLuogoPartenza( luogo : string ) {
  this.luogoPartenza = luogo;
}

public getLuogoArrivo() : string {
  return this.luogoArrivo;
}
public setLuogoArrivo( luogo : string ) {
  this.luogoArrivo = luogo;
}

public getTipoMezzo() : string {
  return this.tipoMezzo;
}
public setTipoMezzo( tipoMezzo : string ) {
  this.tipoMezzo = tipoMezzo;
}

public getIdViaggio() : number {
  return this.idViaggio;
}

public setNumeroBiglietti ( numeroBiglietti : number ) {
  this.numeroBiglietti = numeroBiglietti;
}
public getNumeroBiglietti() : number {
  return this.numeroBiglietti;
}


  }
