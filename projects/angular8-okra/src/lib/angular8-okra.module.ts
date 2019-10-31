import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular8OkraComponent } from './angular8-okra.component';
import { Angular8OkraService } from './angular8-okra.service';
import { PUBLIC_KEY_TOKEN } from './okra-token';



@NgModule({
  declarations: [Angular8OkraComponent],
  imports: [
    CommonModule
  ],
  exports: [Angular8OkraComponent],
  providers: [],
})
export class Angular8OkraModule {
  static forRoot(token: string): ModuleWithProviders {
    return {
      ngModule: Angular8OkraModule,
      providers: [
        Angular8OkraService,
        { provide: PUBLIC_KEY_TOKEN, useValue: token }
      ]
    };
 }
}
