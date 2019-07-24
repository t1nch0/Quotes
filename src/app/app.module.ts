import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrutamientoModule } from './enrutamiento/enrutamiento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, EnrutamientoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
