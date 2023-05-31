import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InfoComponent,
    HomeComponent,
    TecnologiasComponent,
    ContactoComponent,
    ProyectosComponent,
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
