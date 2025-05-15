import { PaisComponent } from './../pages/pais/pais.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { MainlayoutComponent } from '../layouts/mainlayout/mainlayout.component';
import { PaisesComponent } from '../pages/paises/paises.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';

export const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"dashboard",component:MainlayoutComponent,children:[
    { path: "", redirectTo: "paises", pathMatch: "full" },
    {path:"paises",component:PaisesComponent},
    {path:"pais/:name",component:PaisComponent},
  ]},
  {path:"**",component:NotfoundComponent}

];
