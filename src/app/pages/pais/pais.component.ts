import { routes } from './../../routes/app.routes';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { LoadingComponent } from "../../components/loading/loading.component";
import { EncriptService } from '../../utils/encript.service';
@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent {
   pais:any;
   name:any;
   loading:boolean;
   constructor(
    private _acroute:ActivatedRoute,
    private _service:PaisesService,
    private _route:Router,
    private _decript:EncriptService
    ){
    this.pais=[];
    this.name="";
    this.loading=false;
   }

   ngOnInit(){
      this.getPais()
   }
   back(){
     this._route.navigate(["dashboard/paises"])
   }

   getPais(){
    this.loading=true;
    this.name=this._acroute.snapshot.paramMap.get('name');
    this.name=this._decript.decryptInfo(this.name);
    this._service.getPais(this.name).subscribe({
      next:(data:any)=>{
         this.pais=data[0];
         console.log(data[0]);
      },error:(err:any)=>{
          console.log(err);
      },complete:()=>{
          console.log("final")
          this.loading=false;
      }
    })
   }
}
