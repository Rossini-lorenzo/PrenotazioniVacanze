import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-viaggi',
  templateUrl: './ca-viaggi.component.html',
  styleUrls: ['./ca-viaggi.component.css']
})
export class CaViaggiComponent implements OnInit {
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
