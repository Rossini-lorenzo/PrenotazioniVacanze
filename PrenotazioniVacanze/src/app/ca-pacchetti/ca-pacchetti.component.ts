import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-ca-pacchetti',
  templateUrl: './ca-pacchetti.component.html',
  styleUrls: ['./ca-pacchetti.component.css']
})
export class CaPacchettiComponent implements OnInit {
  log:boolean;
  viaggi:String[];
  logAdmin:boolean;
  constructor(private utenteService:UtenteService) { 
   this.viaggi=[];
   this.logAdmin=utenteService.getLoggedAdmin();
   this.log=utenteService.getLogged();
  }
  LogOut():void{
    this.utenteService.setLogOut();
    this.utenteService.setLogOutAdmin();
  }
  ngOnInit(): void {
  }
  cercaViaggi():void{
    this.viaggi=["roma","milano","napoli","torino"];
  }

}
