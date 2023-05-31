import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimationBackgroundComponent } from './components/animation-background/animation-background.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimationBackgroundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
