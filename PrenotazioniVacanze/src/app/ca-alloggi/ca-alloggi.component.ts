import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-ca-alloggi',
  templateUrl: './ca-alloggi.component.html',
  styleUrls: ['./ca-alloggi.component.css']
})
export class CaAlloggiComponent implements OnInit {
  log : boolean;
  viaggi:String[];
  constructor(private utenteService : UtenteService) { 
   this.viaggi=[];
   this.log=utenteService.getLogged();
  }
  
  ngOnInit(): void {
  }
  LogOut():void{this.utenteService.setLogOut();}
  cercaViaggi():void{
    this.viaggi=["roma","milano","napoli","torino"];
  }
}
