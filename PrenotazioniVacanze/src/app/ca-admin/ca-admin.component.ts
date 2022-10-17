import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ca-admin',
  templateUrl: './ca-admin.component.html',
  styleUrls: ['./ca-admin.component.css']
})
export class CaAdminComponent implements OnInit {
  mioForm2:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mioForm2 = this.fb.group({
      
      })
  }
  aggiungiViaggio(){}
  aggiungiPacchetto(){}
  aggiungiAlloggio(){}

}
