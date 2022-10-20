import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Offerta } from '../dati/offerta';
import { AlloggioGet } from '../dati/alloggio-get';
import { Prenotazione } from '../dati/prenotazione';
import { Router } from '@angular/router';
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
  mostra:boolean;

  dataInizio : Date;
  dataFine : Date;
  nPresone : number;
  destinazione : string;
  prenotazione : Prenotazione;
  aGet:AlloggioGet;

  constructor(private fb: FormBuilder,private utenteService : UtenteService,private router :Router) { 
   this.viaggi=[];
   this.logAdmin=utenteService.getLoggedAdmin();
   this.log=utenteService.getLogged();
   this.dataFine=null;
   this.dataInizio=null;
   this.nPresone=0;
   this.destinazione="";
   this.mostra=false;
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
  prenota(codiceOfferta : number, titolo:string ,nPartecipanti : number):void{
    if(this.utenteService.getLogged()==false){
      alert("bisogna essere registrati e autenticati per poter prenotare");
      return;
    } 
    
     this.prenotazione = new Prenotazione(nPartecipanti,titolo,Number(sessionStorage.getItem("id")),codiceOfferta);
     this.utenteService.prenotazione(this.prenotazione).subscribe(
      (response:any)=>{     
        alert("Alloggio prenotato e inserito nelle prenotazioni"+"\n"+
              "id prenotazione : "+response.codPrenotazione);
              this.router.navigate(['/alloggi'])


      },
      (error:any)=>{alert("qualcosa è andato storto riprova");}
     )

    

  }
  cercaAlloggi():void{
    this.mostra=true;
    this.viaggi=[];
    this.destinazione=this.mioForm4.get("destinazione").value;
    this.dataFine=this.mioForm4.get("dataFine").value;
    this.dataInizio=this.mioForm4.get("dataInizio").value;
    this.nPresone=this.mioForm4.get("nPersone").value;
    this.utenteService.cercaAlloggi().subscribe(
      (response : any)=>{
        for(let i in response){
          for(let x in  response[i].offerte){

          if(response[i].offerte[x].disponibile==true&&
            response[i].destinazione==this.destinazione&&
            response[i].nPartecipanti==this.nPresone&&
            response[i].offerte[x].dataInizio==this.dataInizio&&
                response[i].offerte[x].dataFine==this.dataFine)
          {
               
                    this.aGet= new AlloggioGet(response[i])
                    this.aGet.dataFine=this.dataInizio;
                    this.aGet.dataInizio=this.dataInizio;
                    this.aGet.codOfferta=response[i].offerte[x].codOfferta;
                    this.aGet.prezzo=response[i].offerte[x].prezzo;
                    this.aGet.nStanzaLetto=response[i].nStanzeLetto;
                   this.viaggi.push(this.aGet);
                   
                
            }
          }
        }
      },
      (error : any)=>{

      }
    )
  }

  ordinaPerPrezzoCrescente(){
      this.viaggi.sort((a,b)=> {
        if(a.prezzo>b.prezzo)
           {return 1}
        if(a.prezzo<b.prezzo)
           {return -1;}
        return 0;
      });
    }
  ordinaPerPrezzoDecrescente(){
        this.viaggi.sort((a,b)=> {
          if(a.prezzo<b.prezzo)
             {return 1}
          if(a.prezzo>b.prezzo)
             {return -1;}
          return 0;
        });


  }
  
}
