import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input() item!:any;

   constructor(private _route:Router){}

   getPais(item:any){
     const name=item.name.common;
     this._route.navigate(["/dashboard/pais",name])
   }



}
