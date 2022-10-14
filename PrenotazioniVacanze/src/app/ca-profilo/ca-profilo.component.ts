import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-profilo',
  templateUrl: './ca-profilo.component.html',
  styleUrls: ['./ca-profilo.component.css']
})
export class CaProfiloComponent implements OnInit {

  modificaNome=false;
  modificaCognome=false;
  modificaEmail=false;
  modificaDataNascita=false;
  modificaIndirizzo=false;
  modificaTelefono=false;
  modificaCodiceCartaIdentita=false;
  modificaSesso=false;
  modificaNomeUtente=false;
  modificaPassword=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNome() {
    if(this.modificaNome==true) {
      this.modificaNome=false;
    } else {
      this.modificaNome=true;
    }
  }
  toggleEmail() {
    if(this.modificaEmail==true) {
      this.modificaEmail=false;
    } else {
      this.modificaEmail=true;
    }
  }
  toggleDataNascita() {
    if(this.modificaDataNascita==true) {
      this.modificaDataNascita=false;
    } else {
      this.modificaDataNascita=true;
    }
  }
  toggleTelefono() {
    if(this.modificaTelefono==true) {
      this.modificaTelefono=false;
    } else {
      this.modificaTelefono=true;
    }
  }
  toggleCodiceCartaIdentita() {
    if(this.modificaCodiceCartaIdentita==true) {
      this.modificaCodiceCartaIdentita=false;
    } else {
      this.modificaCodiceCartaIdentita=true;
    }
  }
  toggleNomeUtente() {
    if(this.modificaNomeUtente==true) {
      this.modificaNomeUtente=false;
    } else {
      this.modificaNomeUtente=true;
    }
  }
  togglePassword() {
    if(this.modificaPassword==true) {
      this.modificaPassword=false;
    } else {
      this.modificaPassword=true;
    }
  }
  toggleSesso() {
    if(this.modificaSesso==true) {
      this.modificaSesso=false;
    } else {
      this.modificaSesso=true;
    }
  }
  toggleCognome() {
    if(this.modificaCognome==true) {
      this.modificaCognome=false;
    } else {
      this.modificaCognome=true;
    }
  }
  toggleIndirizzo() {
    if(this.modificaIndirizzo==true) {
      this.modificaIndirizzo=false;
    } else {
      this.modificaIndirizzo=true;
    }
  }
  bAnnulla() {
    this.modificaNome=false;
    this.modificaCognome=false;
    this.modificaEmail=false;
    this.modificaDataNascita=false;
    this.modificaIndirizzo=false;
    this.modificaTelefono=false;
    this.modificaCodiceCartaIdentita=false;
    this.modificaSesso=false;
    this.modificaNomeUtente=false;
    this.modificaPassword=false;
    window.location.reload();
  }
}
