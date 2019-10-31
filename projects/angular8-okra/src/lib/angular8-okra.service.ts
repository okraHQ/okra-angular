import { Injectable, Inject } from '@angular/core';
import { OkraOptions } from './OkraOptions';
import { PUBLIC_KEY_TOKEN } from './okra-token';

interface MyWindow extends Window {
  okra: any
}
declare var window: MyWindow;

@Injectable({
  providedIn: 'root'
})
export class Angular8OkraService {

  okraPublicKey: string;

  constructor(@Inject(PUBLIC_KEY_TOKEN) private token: string) {
    this.okraPublicKey = token;   
  }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      if (window.okra && typeof window.okra.create === 'function') {
        resolve();
        return;
      }

 
      const link = window.document.createElement('link');
      window.document.head.appendChild(link);
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', 'https://cdn.okra.ng/okra.min.css');

      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://cdn.okra.ng/okra.min.js');
    });
  }

  getOkraOptions(obj: OkraOptions): OkraOptions {
    const okraOptions: OkraOptions = {
      env: obj.env,
      url_env: obj.url_env,
      clientName: obj.clientName,
      key: obj.key,
      record_id: obj.record_id,
      callback_url: obj.callback_url,
      user: {},
      products: obj.products,
      onClose: obj.onClose,
      onSuccess: obj.onSuccess
    };
    return okraOptions;
  }
}
