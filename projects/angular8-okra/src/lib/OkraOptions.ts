import { EventEmitter } from '@angular/core';

export interface OkraOptions {

  env: string;

  clientName?: string;

  key?: string;

  url_env: string;

  source: string;

  record_id: string;

  callback_url: string;

  options?: {};

  token: string;

  color: string;
  
  limit: string;
  
  corporate: boolean;
  
  connectMessage: string;
  
  guarantors: {};
  
  redirect_url: string;
  
  logo: string;
  
  filter: {};
  
  widget_success: string;
  
  currency: string;
  
  exp: string;
  
  success_title: string;
  
  success_message: string;

  products: string[];

  onClose: any;

  onSuccess: any;

  onError: any;
}

export interface PrivateOkraOptions extends OkraOptions {
  /**
   * @param response?: The server response
   */
  callback: (response?: any) => void;
  /**
   * A function to be called when the okra widget is closed.
   */
  onClose: (response?: any) => void;
  /**
   * A function to be called when okra runs successfully
   */
  onSuccess: (response?: any) => void;
  /**
   * A function to be called when okra fails
   */
  onError: (response?: any) => void;
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


