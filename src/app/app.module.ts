import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { NikeComponent } from './components/nike/nike.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdidasComponent,
    NikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
