import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { NikeComponent } from './components/nike/nike.component';
import { PatprimoComponent } from './components/patprimo/patprimo.component';
import { ReebokComponent } from './components/reebok/reebok.component';

//servicios
import { AdidasService, Adida } from './services/adidas.service';
import { NikeService, Nike } from './services/nike.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdidasComponent,
    NikeComponent,
    PatprimoComponent,
    ReebokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AdidasService,
    NikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
