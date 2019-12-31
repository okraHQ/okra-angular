import { EventEmitter } from '@angular/core';

export interface OkraOptions {
  
  env: string;

  clientName?: string;
  
  key?: string;

  url_env: string;

  source: String;
  
  record_id: string;
  
  callback_url: string;

  options?: {
    user?: {}
  };
  
  products: string [];

  onClose: any;

  onSuccess: any;
}

export interface PrivateOkraOptions extends OkraOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   * @param response?: The server response
   */
  callback: (response?: any) => void;
  /**
   * A function to be called when the pay modal is closed.
   */
  onClose: () => void;
  /**
   * A function to be called when payment is about to begin
   */
  onSuccess: () => void;
}

export interface PrivateOkraOptionsWithEmitters extends OkraOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   */
  callback: EventEmitter<any>;
  /**
   * A function to be called when the pay modal is closed.
   */
  onClose: EventEmitter<void>;
  /**
   * A function to be called when payment is about to begin
   */
  init: EventEmitter<void>;
}


