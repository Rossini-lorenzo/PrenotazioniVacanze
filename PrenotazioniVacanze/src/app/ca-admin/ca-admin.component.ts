import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Alloggio } from '../dati/alloggio';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-ca-admin',
  templateUrl: './ca-admin.component.html',
  styleUrls: ['./ca-admin.component.css']
})
export class CaAdminComponent implements OnInit {
  mioForm2:FormGroup;
  alloggio : Alloggio;
  nBagni:number;
  nStanzaLetto:number;
  destinazione:string;
  descrizione:string;
  dataFine:Date;
  dataInizio:Date;
  titolo:string;
  pensione:string;
  linkImg:string;
  nPartecipanti:number;

  constructor(private fb: FormBuilder,private adminService:AdminService) {
    this.nBagni=0;
    this.nStanzaLetto=0;
    this.destinazione="";
    this.descrizione="";
    this.dataFine=null;
    this.dataInizio=null;
    this.titolo="";
    this.pensione="";
    this.linkImg="";
    this.nPartecipanti=0;
    this.alloggio=null;
   }

  ngOnInit(): void {
    this.mioForm2 = this.fb.group({
      nBagni: 0,nPartecipanti: 0,nStanzaLetto:0,destinazione:'',descrizione:'',
      dataFine:null,dataInizio:null,titolo:'',pensione:'',linkImg:''
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
    this.dataFine=this.mioForm2.get("dataFine").value
    this.dataInizio=this.mioForm2.get("dataInizio").value
    this.titolo=this.mioForm2.get("titolo").value
    this.pensione=this.mioForm2.get("pensione").value
    this.linkImg=this.mioForm2.get("linkImg").value
    this.alloggio=new Alloggio(this.nBagni,this.nStanzaLetto,this.nPartecipanti,this.descrizione
      ,this.descrizione,this.dataInizio,this.dataFine,this.pensione,this.titolo
      ,this.linkImg);
      this.adminService.creaAlloggio(this.alloggio).subscribe(
      (response:any)=>{
        alert("alloggio creato")
      },
      (error: any) => { alert("alloggio già presente");
      }
      )
  }

}
