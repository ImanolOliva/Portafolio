import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  constructor(){};

  texto: string = "1999, Buenos Aires, Argentina. \n Desarrollador de Software. \n Me encanta aprender y disfruto de hacerlo. \n Busco crear como tambien contribuir  \n en soluciones inovadoras \n y de utilidad  para \n quienes lo necesiten. \n La imaginacion no tiene limites \n Y ese es el motivo por el \n cual me apasiona lo que hago."
  ngOnInit() {
    
  }

}
