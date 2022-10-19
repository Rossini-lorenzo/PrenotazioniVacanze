import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Offerta } from '../dati/offerta';
import { AlloggioGet } from '../dati/alloggio-get';
@Component({
  selector: 'app-ca-alloggi',
  templateUrl: './ca-alloggi.component.html',
  styleUrls: ['./ca-alloggi.component.css']
})
export class CaAlloggiComponent implements OnInit {
  log : boolean;
  logAdmin:boolean;
  viaggi:AlloggioGet[];
  mioForm4:FormGroup;

  dataInizio : Date;
  dataFine : Date;
  nPresone : number;
  destinazione : string;

  constructor(private fb: FormBuilder,private utenteService : UtenteService) { 
   this.viaggi=[];
   this.logAdmin=utenteService.getLoggedAdmin();
   this.log=utenteService.getLogged();
   this.dataFine=null;
   this.dataInizio=null;
   this.nPresone=0;
   this.destinazione="";
  }
  
  ngOnInit(): void {
    this.mioForm4 = this.fb.group({
      dataFine: null,dataInizio: null,
      nPersone:0,destinazione:""
      })
  }
  LogOut():void{
    this.utenteService.setLogOut();
    this.utenteService.setLogOutAdmin();
  }
  cercaAlloggi():void{
    this.viaggi=[];
    this.destinazione=this.mioForm4.get("destinazione").value;
    this.dataFine=this.mioForm4.get("dataFine").value;
    this.dataInizio=this.mioForm4.get("dataInizio").value;
    this.nPresone=this.mioForm4.get("nPersone").value;
    this.utenteService.cercaAlloggi().subscribe(
      (response : any)=>{
        for(let i in response){
          console.log(this.destinazione);
          if(response[i].destinazione==this.destinazione&&
            response[i].nPartecipanti==this.nPresone)
          {
            for(let x in  response[i].offerte){
               if( response[i].offerte[x].dataInizio==this.dataInizio&&
                response[i].offerte[x].dataFine==this.dataFine){
                   this.viaggi.push(new AlloggioGet(response[i]));
                }
            }
          }
        }
      },
      (error : any)=>{

      }
    )
  }
}
