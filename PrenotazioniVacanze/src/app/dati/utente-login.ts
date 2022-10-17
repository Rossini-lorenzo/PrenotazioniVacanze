export class UtenteLogin {
  email : string;
  passwordUtente : string;
  constructor(email:string, passwordUtente:string){
    this.email=email;
    this.passwordUtente=passwordUtente;
  }
  public getEmail() : string {
    return this.email;
  }
  public setEmail(email: string) {
    this.email = email;
  }
  public getPasswordUtente() : string {
    return this.passwordUtente;
  }
  public setPasswordUtente( passwordUtente : string) {
    this.passwordUtente = passwordUtente;
  }
}
