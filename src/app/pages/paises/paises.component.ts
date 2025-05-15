import { Component } from '@angular/core';
import { ListpaisesComponent } from "../../components/listpaises/listpaises.component";


@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [ListpaisesComponent],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {

}
