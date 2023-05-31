import { AfterViewInit, Component, OnInit } from '@angular/core';
import Lottie from 'lottie-web';

@Component({
  selector: 'app-animation-background',
  templateUrl: './animation-background.component.html',
  styleUrls: ['./animation-background.component.css']
})
export class AnimationBackgroundComponent  implements OnInit, AfterViewInit {

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const animationContainer = document.getElementById('animationContainer');
    const animationOptions = {
      container: animationContainer,
      path: "../../../assets/Animaciones/fondo.animation.json" // Ruta relativa al archivo Lottie en la carpeta de activos
    };
    Lottie.loadAnimation(animationOptions);
  }
}
