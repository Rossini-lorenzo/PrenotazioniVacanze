import { NumberSymbol } from "@angular/common";

export class Utente {


email : string;
  nome : string;
  cognome : string;
  dataNascita : Date;
  indirizzo : string;
  telefono : string;
  codiceCartaIdentita : string;
  sesso : string;
  nomeUtente : string;
  passwordUtente : string;

  constructor (email : string, nome:string, cognome:string, dataNascita:Date,
    indirizzo:string, telefono:string, codiceCartaIdentita:string, sesso:string,
    nomeUtente:string, passwordUtente:string) {

      
      this.email = email;
      this.nome = nome;
      this.cognome = cognome;
      this.dataNascita = dataNascita;
      this.indirizzo = indirizzo;
      this.telefono = telefono;
      this.codiceCartaIdentita = codiceCartaIdentita;
      this.sesso = sesso;
      this.nomeUtente = nomeUtente;
      this.passwordUtente = passwordUtente;

  }

 
  public getEmail() : string {
    return this.email;
  }
  public setEmail(email: string) {
    this.email = email;
  }

  public getNome() : string {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }

  public getCognome() : string {
    return this.cognome;
  }
  public setCognome(cognome: string) {
    this.cognome = cognome;
  }

  public getDatanascita() : Date {
    return this.dataNascita;
  }
  public setDataNscita(dataNascita: Date) {
    this.dataNascita = dataNascita;
  }

  public getIndirizzo() : string {
    return this.indirizzo;
  }
  public setIndirizzo( indirizzo : string) {
    this.indirizzo = indirizzo;
  }

  public getTelefono() : string {
    return this.telefono;
  }
  public setTelefono( telefono : string) {
    this.telefono = telefono;
  }

  public getCodCartaIdentita() : string {
    return this.codiceCartaIdentita;
  }
  public setCodCartaIdentita( codiceCartaIdentita : string) {
    this.codiceCartaIdentita = codiceCartaIdentita;
  }

  public getSesso() : string {
    return this.sesso;
  }
  public setSesso( sesso : string) {
    this.sesso = sesso;
  }

  public getNomeUtente() : string {
    return this.nomeUtente;
  }
  public setNomeUtente( nomeUtente : string) {
    this.nomeUtente = nomeUtente;
  }

  public getPassword() : string {
    return this.passwordUtente;
  }
  public setPassword( passwordUtente : string) {
    this.passwordUtente = passwordUtente;
  }

}
