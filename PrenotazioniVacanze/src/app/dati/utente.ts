import { NumberSymbol } from "@angular/common";

export class Utente {

  idUtente : number;
  email : string;
  nome : string;
  cognome : string;
  dataNascita : Date;
  indirizzo : string;
  telefono : string;
  codCartaIdentita : string;
  sesso : string;
  nomeUtente : string;
  password : string;

  constructor (idUtente:number, email : string, nome:string, cognome:string, dataNascita:Date,
    indirizzo:string, telefono:string, codCartaIdentita:string, sesso:string,
    nomeUtente:string, password:string) {

      this.idUtente = idUtente;
      this.email = email;
      this.nome = nome;
      this.cognome = cognome;
      this.dataNascita = dataNascita;
      this.indirizzo = indirizzo;
      this.telefono = telefono;
      this.codCartaIdentita = codCartaIdentita;
      this.sesso = sesso;
      this.nomeUtente = nomeUtente;
      this.password = password;

  }

  public getIdUtente() : number {
    return this.idUtente;
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
    return this.codCartaIdentita;
  }
  public setCodCartaIdentita( codCartaIdentita : string) {
    this.codCartaIdentita = codCartaIdentita;
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
    return this.password;
  }
  public setPassword( password : string) {
    this.password = password;
  }

}
