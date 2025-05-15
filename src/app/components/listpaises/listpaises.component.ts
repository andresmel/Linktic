import { Component,OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { SearchComponent } from "../search/search.component";


@Component({
  selector: 'app-listpaises',
  standalone: true,
  imports: [LoadingComponent, CommonModule, CardComponent, SearchComponent],
  templateUrl: './listpaises.component.html',
  styleUrl: './listpaises.component.css'
})
export class ListpaisesComponent {
  listPaises:any;
  origin:any;
  loading:boolean;
   constructor(private _paisesService:PaisesService){
       this.listPaises=[];
       this.loading=false;
       this.origin=[];
   }

   ngOnInit() {
    this.getPaises();
   }

   filtrarPaises(e:string){
      e=e.toLowerCase();
      this.listPaises=this.origin.filter((pais:any) =>
      pais.name.common.toLowerCase().includes(e)
    );
   }

   filtrarRegion(e:string){
    this.loading=true;
     this._paisesService.getRegion(e).subscribe({
      next:(data:any)=>{
         this.listPaises=data;
      },error:(error:any)=>{
          console.log(error)
      },complete:()=>{
        this.loading=false
      }
     })
   }

   getPaises(){
    this.loading=true;
    this._paisesService.getPaises().subscribe({
      next: (data: any[]) => {
        this.listPaises = data;
        this.origin=this.listPaises;

      },
      error: (err: any) => {
        console.error('Error al cargar países:', err);
      },
      complete: () => {
         this.loading=false;
      }
    });
  }
}
