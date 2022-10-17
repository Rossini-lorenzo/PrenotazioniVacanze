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
  constructor(private utenteService:UtenteService) { 
   this.viaggi=[];
   this.log=utenteService.getLogged();
  }
  LogOut():void{this.utenteService.setLogOut();}

  ngOnInit(): void {
  }
  cercaViaggi():void{
    this.viaggi=["roma","milano","napoli","torino"];
  }

}
