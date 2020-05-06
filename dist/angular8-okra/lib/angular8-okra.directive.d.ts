import { EventEmitter } from '@angular/core';
import { OkraOptions, PrivateOkraOptions } from './OkraOptions';
import { Angular8OkraService } from '../public-api';
export declare class Angular8OkraDirective {
    okraWidgetService: Angular8OkraService;
    env: string;
    url_env: string;
    clientName: number;
    record_id: string;
    callback_url: string;
    user: {};
    products: string[];
    token: string;
    options: {};
    source: string;
    color: string;
    limit: string;
    corporate: null;
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
    okraOptions: OkraOptions;
    onClose: EventEmitter<any>;
    onSuccess: EventEmitter<any>;
    _okraOptions: Partial<PrivateOkraOptions>;
    key: string;
    constructor(okraWidgetService: Angular8OkraService);
    initOkra(): Promise<void>;
    generateOptions(obj: any): void;
    buttonClick(): Promise<void>;
}