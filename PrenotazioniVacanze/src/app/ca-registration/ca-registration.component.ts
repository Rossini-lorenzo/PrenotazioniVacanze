import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../costum-validation';

@Component({
  selector: 'app-ca-registration',
  templateUrl: './ca-registration.component.html',
  styleUrls: ['./ca-registration.component.css']
})
export class CaRegistrationComponent implements OnInit {
  public frmSignup: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private fb: FormBuilder) {
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
        ],
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

  submit () {
    const { email, password, confirmpassword } = this.frmSignup.value;

    console.log({      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
