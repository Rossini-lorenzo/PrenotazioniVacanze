import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../costum-validation';
import { Utente } from '../dati/utente';
import { UtenteService } from '../utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-registration',
  templateUrl: './ca-registration.component.html',
  styleUrls: ['./ca-registration.component.css']
})
export class CaRegistrationComponent implements OnInit {
  public frmSignup: FormGroup;
  form: any = {
    email: null,
    password: null,
    confirmPassword: null,
    nome: null,
    cognome: null,
    username: null,
    indirizzo: null,
    cartaIdentita: null,
    telefono: null,
    dataNascita: null,
    sex: null
  }
  utente: Utente = null;
  
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private fb: FormBuilder,private serviceUtente : UtenteService,private router :Router) {
    this.frmSignup = this.createSignupForm();
   }

  ngOnInit(): void {
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        nome: [
          null,
          Validators.compose([Validators.required])
        ]
        ,
        sex: [
          null,
          Validators.compose([Validators.required])
        ]
        ,
        dataNascita: [
          null,
          Validators.compose([Validators.required])
        ]
        ,
        cognome: [
          null,
          Validators.compose([Validators.required])
        ],
        username: [
          null,
          Validators.compose([Validators.required])
        ],
        indirizzo: [
          null,
          Validators.compose([Validators.required])
        ],
        cartaIdentita: [
          null,
          Validators.compose([Validators.required])
        ],
        telefono: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            //Controlla la password se ha almeno un numero
            CustomValidators.patternValidator(/\d/,{
              hasNumber:true
            }),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null,Validators.compose([Validators.required])]
      },
      {
        //Controlla se la password e la password di conferma  corrispondono
        validator: CustomValidators.passwordMatchValidator
      }
    );

  }

  onSubmit () : void {
    const {  email, password, nome, cognome,
      username, indirizzo, cartaIdentita, telefono, dataNascita, sex} = this.frmSignup.value;
      this.utente = new Utente(email,nome,cognome,dataNascita,indirizzo,telefono,cartaIdentita,sex,username,password);
      this.serviceUtente.creataUtente(this.utente).subscribe(
        (response:any)=>{this.router.navigate(['/login'])},
        (error: any) => { alert(error);
        }
      )
       
    
    
    
    
    
        
  }
}


