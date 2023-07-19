import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './features/prova/prova.component';
import { RiprovaComponent } from './riprova/riprova.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    RiprovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
