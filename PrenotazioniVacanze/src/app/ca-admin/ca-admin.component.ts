import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Alloggio } from '../dati/alloggio';
import { AdminService } from '../admin.service';
import { Offerta } from '../dati/offerta';
@Component({
  selector: 'app-ca-admin',
  templateUrl: './ca-admin.component.html',
  styleUrls: ['./ca-admin.component.css']
})
export class CaAdminComponent implements OnInit {
  mioForm2:FormGroup;
  mioForm3:FormGroup;

  offerta : Offerta;
  alloggio : Alloggio;
  nBagni:number;
  nStanzaLetto:number;
  destinazione:string;
  descrizione:string;
  titolo:string;
  pensione:string;
  linkImg:string;
  nPartecipanti:number;

  dataFineOfferta:Date;
  dataInizioOfferta:Date;
  prezzo:number;
  idVacanzaOfferta:number;

  constructor(private fb: FormBuilder,private adminService:AdminService) {
    this.nBagni=0;
    this.nStanzaLetto=0;
    this.destinazione="";
    this.descrizione="";
    this.titolo="";
    this.pensione="";
    this.linkImg="";
    this.nPartecipanti=0;
    this.alloggio=null;


    this.dataFineOfferta=null;
    this.dataInizioOfferta=null;
    this.prezzo=0;
    this.idVacanzaOfferta=0;
    this.offerta=null;
   }

  ngOnInit(): void {
    this.mioForm2 = this.fb.group({
      nBagni: 0,nPartecipanti: 0,nStanzaLetto:0,destinazione:'',descrizione:'',
      dataFine:null,dataInizio:null,titolo:'',pensione:'',linkImg:''
      })

    this.mioForm3 = this.fb.group({
        prezzo: 0,idVacanzaOfferta: 0,
        dataFineOfferta:null,dataInizioOfferta:null
        })
  }
  aggiungiViaggio(){}
  aggiungiPacchetto(){}
  aggiungiAlloggio(){
    this.nBagni=this.mioForm2.get("nBagni").value
    this.nPartecipanti=this.mioForm2.get("nPartecipanti").value
    this.nStanzaLetto=this.mioForm2.get("nStanzaLetto").value
    this.destinazione=this.mioForm2.get("destinazione").value
    this.descrizione=this.mioForm2.get("descrizione").value
    this.titolo=this.mioForm2.get("titolo").value
    this.pensione=this.mioForm2.get("pensione").value
    this.linkImg=this.mioForm2.get("linkImg").value
    this.alloggio=new Alloggio(this.nBagni,this.nStanzaLetto,this.nPartecipanti,this.destinazione
      ,this.descrizione,this.pensione,this.titolo,this.linkImg);
      this.adminService.creaAlloggio(this.alloggio).subscribe(
      (response:any)=>{
        alert("alloggio creato")
      },
      (error: any) => { alert("alloggio già presente");
      }
      )
  }
  aggiungiOfferta(){
    this.prezzo=this.mioForm3.get("prezzo").value
    this.idVacanzaOfferta=this.mioForm3.get("idVacanzaOfferta").value
    this.dataFineOfferta=this.mioForm3.get("dataFineOfferta").value
    this.dataInizioOfferta=this.mioForm3.get("dataInizioOfferta").value
    this.offerta=new Offerta(this.idVacanzaOfferta,this.dataInizioOfferta,this.dataFineOfferta,this.prezzo);
    this.adminService.creaOfferta(this.offerta).subscribe(
      (response:any)=>{
        alert("offerta creato")
      },
      (error: any) => { alert("offerta già presente");
      }
    )
  }

}
