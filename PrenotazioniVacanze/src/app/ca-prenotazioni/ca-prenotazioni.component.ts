import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { Prenotazione } from '../dati/prenotazione';
@Component({
  selector: 'app-ca-prenotazioni',
  templateUrl: './ca-prenotazioni.component.html',
  styleUrls: ['./ca-prenotazioni.component.css']
})
export class CaPrenotazioniComponent implements OnInit {
  prenotazioni:Prenotazione[] ;
  prenotazione : Prenotazione;

  titolo:string;
  codOfferta:number;
  nPartecipanti:number;
  id:number;

  
  constructor(private utenteService: UtenteService) {
    this.prenotazioni=[];
    this.titolo="";
    this.codOfferta=0;
    this.nPartecipanti=0;
    this.id=0;
   }

  ngOnInit(): void {
    
    this.utenteService.getPrenotazioni(sessionStorage.getItem("id")).subscribe(
      (response : any)=>{
        for(let i in response){
          this.nPartecipanti=response[i].nPartecipanti;
          this.titolo=response[i].titolo;
          
            this.codOfferta=response[i].offertaPrenotazione.codOfferta;
          
         
            this.id=response[i].utente.id;
          
        
        this.prenotazione=new Prenotazione(this.nPartecipanti,this.titolo,this.id,this.codOfferta);
      
            this.prenotazione.codPrenotazione=response[i].codPrenotazione
            this.prenotazione.dataInizio=response[i].offertaPrenotazione.dataInizio;
            this.prenotazione.dataFine=response[i].offertaPrenotazione.dataFine;
            this.prenotazione.descrizione=response[i].vacanza.descrizione;
            this.prenotazione.destinazione=response[i].vacanza.destinazione; 
          

            this.prenotazione.imgLink=response[i].vacanza.linkImg
            this.prenotazione.prezzo=response[i].offertaPrenotazione.prezzo;
          
        
        this.prenotazioni.push(this.prenotazione);
        }
      },
      (error:any)=>{

      }
    )
  }

}
