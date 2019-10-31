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
    Angular8OkraModule.forRoot('c81f3e05-7a5c-5727-8d33-1113a3c7a5e4'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
