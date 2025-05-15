import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncriptService } from '../../utils/encript.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input() item!:any;

   constructor(
    private _route:Router,
    private _encript:EncriptService
    ){}

   getPais(item:any){
     const name=this._encript.encryptInfo(item.name.common);
     this._route.navigate(["/dashboard/pais",name])
   }



}
