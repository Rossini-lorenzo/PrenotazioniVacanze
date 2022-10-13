import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-pacchetti',
  templateUrl: './ca-pacchetti.component.html',
  styleUrls: ['./ca-pacchetti.component.css']
})
export class CaPacchettiComponent implements OnInit {

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
