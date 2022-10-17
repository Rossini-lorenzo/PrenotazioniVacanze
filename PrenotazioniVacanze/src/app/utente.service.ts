import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utente } from './dati/utente';
import { UtenteLogin } from './dati/utente-login';

const baseUrl:string="http://localhost:8080/demo"
@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json',
                                "Access-Control-Allow_Origin":"*"})
  }
  constructor(private http : HttpClient) {
   }
   

   creataUtente(utente:Utente){
       return this.http.post<any>(baseUrl+'/addUser',utente,this.httpOptions);
   }
   login(utenteLogin:UtenteLogin){
       return this.http.post<any>(baseUrl+'/login',utenteLogin,this.httpOptions);
   }
}
