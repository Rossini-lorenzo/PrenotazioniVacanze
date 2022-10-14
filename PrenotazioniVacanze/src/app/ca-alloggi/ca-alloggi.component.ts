import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-alloggi',
  templateUrl: './ca-alloggi.component.html',
  styleUrls: ['./ca-alloggi.component.css']
})
export class CaAlloggiComponent implements OnInit {

  viaggi:String[];
  constructor() { 
   this.viaggi=[];
  }
  
  ngOnInit(): void {
  }
  
  cercaViaggi():void{
    this.viaggi=["roma","milano","napoli","torino"];
  }
}
