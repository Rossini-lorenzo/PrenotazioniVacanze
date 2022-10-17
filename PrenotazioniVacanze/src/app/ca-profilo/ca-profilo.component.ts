import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-profilo',
  templateUrl: './ca-profilo.component.html',
  styleUrls: ['./ca-profilo.component.css']
})
export class CaProfiloComponent implements OnInit {

  modificaEmail=false;
  modificaTelefono=false;
  modificaPassword=false;

  constructor() { }

  ngOnInit(): void {
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
