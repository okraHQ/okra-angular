import { EventEmitter } from '@angular/core';
import { OkraOptions, PrivateOkraOptions } from './OkraOptions';
import { Angular8OkraService } from '../public-api';
export declare class Angular8OkraComponent {
    okraWidgetService: Angular8OkraService;
    env: string;
    url_env: string;
    clientName: number;
    customStyle: {};
    customClass: {};
    record_id: string;
    callback_url: string;
    user: {};
    products: string[];
    okraOptions: OkraOptions;
    onClose: EventEmitter<any>;
    onSuccess: EventEmitter<any>;
    _okraOptions: Partial<PrivateOkraOptions>;
    key: string;
    constructor(okraWidgetService: Angular8OkraService);
    initOkra(): Promise<void>;
    generateOptions(obj: any): void;
}
