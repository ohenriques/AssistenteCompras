import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http'

import { AppComponent } from './app.component';
import { AssistenteComponent } from './modules/assistente/assistente.component';

@NgModule({
  declarations: [
    AppComponent,
    AssistenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
