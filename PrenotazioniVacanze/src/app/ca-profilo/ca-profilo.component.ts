import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-ca-profilo',
  templateUrl: './ca-profilo.component.html',
  styleUrls: ['./ca-profilo.component.css']
})
export class CaProfiloComponent implements OnInit {

  modificaEmail=false;
  modificaTelefono=false;
  modificaPassword=false;
  nome:string;
  cognome:string;
  nomeUtente:string;
  email:string;
  dataNascita:Date;
  indirizzo:string;
  telfono:string;
  codiceCarta:string;
  sesso:string;


  constructor(private utenteService : UtenteService) { 
    this.nome="";
  this.cognome="";
  this.nomeUtente="";
  this.email="";
  this.dataNascita=null;
  this.indirizzo="";
  this.telfono="";
  this.codiceCarta="";
  this.sesso="";
  }

  ngOnInit(): void {
     this.utenteService.getUtente(sessionStorage.getItem("id")).subscribe(
      (response:any)=>{
        
          console.log(response.nome);
          this.nome=response.nome;
          this.cognome=response.cognome;
          this.nomeUtente=response.nomeUtente;
          this.email=response.email;
          this.dataNascita=response.dataNascita;
          this.indirizzo=response.indirizzo;
          this.telfono=response.telefono;
          this.codiceCarta=response.codiceCartaIdentita;
          this.sesso=response.sex;
        
      },
      (error:any)=>{

      }
     )

  }

  toggleEmail() {
    if(this.modificaEmail==true) {
      this.modificaEmail=false;
    } else {
      this.modificaEmail=true;
    }
  }
  toggleTelefono() {
    if(this.modificaTelefono==true) {
      this.modificaTelefono=false;
    } else {
      this.modificaTelefono=true;
    }
  }
  togglePassword() {
    if(this.modificaPassword==true) {
      this.modificaPassword=false;
    } else {
      this.modificaPassword=true;
    }
  }
  bAnnulla() {
    this.modificaEmail=false;
    this.modificaTelefono=false;
    this.modificaPassword=false;
  }
}
