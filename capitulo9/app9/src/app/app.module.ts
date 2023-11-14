import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MimoduloModule } from './mimodulo/mimodulo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MimoduloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
