import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

const routes: Routes = [
  {path:'info' ,component:InfoComponent},
  {path:'home' , component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'contacto',component:ContactoComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'tecnologias',component:TecnologiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
