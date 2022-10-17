import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-ca-viaggi',
  templateUrl: './ca-viaggi.component.html',
  styleUrls: ['./ca-viaggi.component.css']
})
export class CaViaggiComponent implements OnInit {
  viaggi:String[];
  log : boolean;
  logAdmin: boolean;
  constructor(private utenteService : UtenteService) { 
   this.viaggi=[];
   this.logAdmin=utenteService.getLoggedAdmin();
   this.log=utenteService.getLogged();
  }
  
  ngOnInit(): void {
  }
  LogOut():void{
    this.utenteService.setLogOut();
    this.utenteService.setLogOutAdmin();
  }
  cercaViaggi():void{
    this.viaggi=["roma","milano","napoli","torino"];
  }

}
