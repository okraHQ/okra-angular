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


  @Input() token : string;
  @Input() options : {};
  @Input() source : string;
  @Input() color : string;
  @Input() limit : string;
  @Input() corporate : null;
  @Input() connectMessage : string;
  @Input() guarantors : {};
  @Input() redirect_url : string;
  @Input() logo : string;
  @Input() filter : {};
  @Input() widget_success : string;
  @Input() currency : string;
  @Input() exp : string;
  @Input() success_title : string;
  @Input() success_message : string;


  @Input() okraOptions: OkraOptions;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>(); // tslint:disable-line
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  public _okraOptions: Partial<PrivateOkraOptions>; // tslint:disable-line
  key: string;

  constructor(public okraWidgetService: Angular8OkraService) {
    this.key = okraWidgetService.okraPublicKey;
   }
  async initOkra() {
    this.generateOptions(this);
    await this.okraWidgetService.loadScript();
    const okra = new window.okra.create();
    okra.open(this._okraOptions);
  }

  generateOptions(obj: any) {
    this._okraOptions = this.okraWidgetService.getOkraOptions(obj);
    this._okraOptions.onClose = (json) => {
      if (this.onClose.observers.length) {
        this.onClose.emit(json);
      } 
    };

    this._okraOptions.onSuccess = (json) => {
      if (this.onSuccess.observers.length) {
        this.onSuccess.emit(json);
      } 
    };
  }

  @HostListener('click')
  async buttonClick() {
    this.initOkra();
  }

}
