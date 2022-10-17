import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { UtenteService } from '../utente.service';
import { Router } from '@angular/router';
import { UtenteLogin } from '../dati/utente-login';
@Component({
  selector: 'app-ca-login',
  templateUrl: './ca-login.component.html',
  styleUrls: ['./ca-login.component.css']
})
export class CaLoginComponent implements OnInit {
  mioForm:FormGroup;
  email:string;
  password:string;
  user:UtenteLogin=null;
  constructor(private fb: FormBuilder,private serviceUtente : UtenteService,private router :Router) { 
    this.email="";
    this.password="";
  }

  ngOnInit(): void {
    this.mioForm = this.fb.group({
      email: '',password: ''
      })
  }
  //this.serviceUtente.creataUtente(this.utente).subscribe(
 login(){
  this.email=this.mioForm.get("email").value
  this.password=this.mioForm.get("password").value
  this.user = new UtenteLogin(this.email,this.password);
  this.serviceUtente.login(this.user).subscribe(
    (response:any)=>{
      this.serviceUtente.setLogged();
      this.router.navigate(['/alloggi'])
    },
    (error: any) => { alert("email o password non corretti");
    }
  )
  
 }

}
