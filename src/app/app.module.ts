import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular8OkraModule } from 'angular8-okra';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular8OkraModule.forRoot('101ffe400-bedd-54fe-b3e4-3336744794b6'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
