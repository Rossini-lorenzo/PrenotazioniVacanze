import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utente } from './dati/utente';
import { UtenteLogin } from './dati/utente-login';
import { Offerta } from './dati/offerta';
import { Prenotazione } from './dati/prenotazione';
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
   cercaAlloggi(){
    return this.http.get<any>(baseUrl+'/findAllAlloggi')
   }
   prenotazione(prenotazione : Prenotazione ){
    return this.http.post<any>(baseUrl+'/prenotaAlloggio',prenotazione,this.httpOptions);
   }




   setLogged(){sessionStorage.setItem("login","true");}
   setLogOut(){
    sessionStorage.setItem("login","false");
    sessionStorage.setItem("id","x");}
   getLogged():boolean{
     if(sessionStorage.getItem("login")=="true"){
      return true;
     }
     return false;
   } 
   setLoggedAdmin(){sessionStorage.setItem("admin","true");}
   setLogOutAdmin(){sessionStorage.setItem("admin","false");}
   getLoggedAdmin():boolean{
    if(sessionStorage.getItem("admin")=="true"){
     return true;
    }
    return false;
  } 

}
