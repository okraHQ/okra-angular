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
    Angular8OkraModule.forRoot('101ee499-beed-53ef-b9e4-1846790792a5'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
