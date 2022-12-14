import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alloggio } from './dati/alloggio';
import { Offerta } from './dati/offerta';
const baseUrl:string="http://localhost:8080/demo"

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json',
                                "Access-Control-Allow_Origin":"*"})
  }
  constructor(private http : HttpClient) { }

  creaAlloggio(alloggio:Alloggio){
    return this.http.post<any>(baseUrl+'/addAlloggio',alloggio,this.httpOptions);
}
creaOfferta(offerta:Offerta){
  return this.http.post<any>(baseUrl+'/addOfferta',offerta,this.httpOptions);
}
}
