import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { OkraOptions, PrivateOkraOptions } from './OkraOptions';
import { Angular8OkraService } from '../public-api';

interface MyWindow extends Window {
  okra: any
}
declare var window: MyWindow;

@Directive({
  selector: '[okraButton]'
})

export class Angular8OkraDirective {

  @Input() env: string;
  @Input() url_env: string;
  @Input() clientName: number;
  @Input() record_id: string;
  @Input() callback_url: string;
  @Input() user: {};
  @Input() products: string[];
  @Input() okraOptions: OkraOptions;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>(); // tslint:disable-line
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  public _okraOptions: Partial<PrivateOkraOptions>; // tslint:disable-line
  key: string;

  constructor(public okraWidgetService: Angular8OkraService) {
    this.key = okraWidgetService.okraPublicKey;
   }
  async pay() {
    this.generateOptions(this);
    await this.okraWidgetService.loadScript();
    const payment = new window.okra.create(this._okraOptions);
    payment.open();
  }

  generateOptions(obj: any) {
    this._okraOptions = this.okraWidgetService.getOkraOptions(obj);
    this._okraOptions.onClose = () => {
      if (this.onClose.observers.length) {
        this.onClose.emit();
      } 
    };

    this._okraOptions.onSuccess = () => {
      if (this.onSuccess.observers.length) {
        this.onSuccess.emit();
      } 
    };
  }

  @HostListener('click')
  async buttonClick() {
    this.pay();
  }

}
