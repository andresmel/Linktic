import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
