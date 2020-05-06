/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Angular8OkraService } from '../public-api';
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.okra;
}
export class Angular8OkraDirective {
    /**
     * @param {?} okraWidgetService
     */
    constructor(okraWidgetService) {
        this.okraWidgetService = okraWidgetService;
        this.onClose = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onSuccess = new EventEmitter();
        this.key = okraWidgetService.okraPublicKey;
    }
    /**
     * @return {?}
     */
    initOkra() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!Angular8OkraDirective} */ function* () {
            this.generateOptions(this);
            yield this.okraWidgetService.loadScript();
            /** @type {?} */
            const okra = new window.okra.create();
            okra.open(this._okraOptions);
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._okraOptions = this.okraWidgetService.getOkraOptions(obj);
        this._okraOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._okraOptions.onSuccess = (/**
         * @return {?}
         */
        () => {
            if (this.onSuccess.observers.length) {
                this.onSuccess.emit();
            }
        });
    }
    /**
     * @return {?}
     */
    buttonClick() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!Angular8OkraDirective} */ function* () {
            this.initOkra();
        });
    }
}
Angular8OkraDirective.decorators = [
    { type: Directive, args: [{
                selector: '[okraButton]'
            },] }
];
/** @nocollapse */
Angular8OkraDirective.ctorParameters = () => [
    { type: Angular8OkraService }
];
Angular8OkraDirective.propDecorators = {
    env: [{ type: Input }],
    url_env: [{ type: Input }],
    clientName: [{ type: Input }],
    record_id: [{ type: Input }],
    callback_url: [{ type: Input }],
    user: [{ type: Input }],
    products: [{ type: Input }],
    token: [{ type: Input }],
    options: [{ type: Input }],
    source: [{ type: Input }],
    color: [{ type: Input }],
    limit: [{ type: Input }],
    corporate: [{ type: Input }],
    connectMessage: [{ type: Input }],
    guarantors: [{ type: Input }],
    redirect_url: [{ type: Input }],
    logo: [{ type: Input }],
    filter: [{ type: Input }],
    widget_success: [{ type: Input }],
    currency: [{ type: Input }],
    exp: [{ type: Input }],
    success_title: [{ type: Input }],
    success_message: [{ type: Input }],
    okraOptions: [{ type: Input }],
    onClose: [{ type: Output }],
    onSuccess: [{ type: Output }],
    buttonClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    Angular8OkraDirective.prototype.env;
    /** @type {?} */
    Angular8OkraDirective.prototype.url_env;
    /** @type {?} */
    Angular8OkraDirective.prototype.clientName;
    /** @type {?} */
    Angular8OkraDirective.prototype.record_id;
    /** @type {?} */
    Angular8OkraDirective.prototype.callback_url;
    /** @type {?} */
    Angular8OkraDirective.prototype.user;
    /** @type {?} */
    Angular8OkraDirective.prototype.products;
    /** @type {?} */
    Angular8OkraDirective.prototype.token;
    /** @type {?} */
    Angular8OkraDirective.prototype.options;
    /** @type {?} */
    Angular8OkraDirective.prototype.source;
    /** @type {?} */
    Angular8OkraDirective.prototype.color;
    /** @type {?} */
    Angular8OkraDirective.prototype.limit;
    /** @type {?} */
    Angular8OkraDirective.prototype.corporate;
    /** @type {?} */
    Angular8OkraDirective.prototype.connectMessage;
    /** @type {?} */
    Angular8OkraDirective.prototype.guarantors;
    /** @type {?} */
    Angular8OkraDirective.prototype.redirect_url;
    /** @type {?} */
    Angular8OkraDirective.prototype.logo;
    /** @type {?} */
    Angular8OkraDirective.prototype.filter;
    /** @type {?} */
    Angular8OkraDirective.prototype.widget_success;
    /** @type {?} */
    Angular8OkraDirective.prototype.currency;
    /** @type {?} */
    Angular8OkraDirective.prototype.exp;
    /** @type {?} */
    Angular8OkraDirective.prototype.success_title;
    /** @type {?} */
    Angular8OkraDirective.prototype.success_message;
    /** @type {?} */
    Angular8OkraDirective.prototype.okraOptions;
    /** @type {?} */
    Angular8OkraDirective.prototype.onClose;
    /** @type {?} */
    Angular8OkraDirective.prototype.onSuccess;
    /** @type {?} */
    Angular8OkraDirective.prototype._okraOptions;
    /** @type {?} */
    Angular8OkraDirective.prototype.key;
    /** @type {?} */
    Angular8OkraDirective.prototype.okraWidgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXBELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFRWCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBbUNoQyxZQUFtQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUwvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUMsQ0FBQyxzQkFBc0I7O1FBQzVFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUsvRCxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0ksUUFBUTs7WUFDWixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDOztrQkFDcEMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBOzs7OztJQUVELGVBQWUsQ0FBQyxHQUFRO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87OztRQUFHLEdBQUcsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBRyxHQUFHLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7SUFHSyxXQUFXOztZQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDO0tBQUE7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFUUSxtQkFBbUI7OztrQkFhekIsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFHTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUdMLEtBQUs7c0JBQ0wsTUFBTTt3QkFDTixNQUFNOzBCQTZCTixZQUFZLFNBQUMsT0FBTzs7OztJQTFEckIsb0NBQXFCOztJQUNyQix3Q0FBeUI7O0lBQ3pCLDJDQUE0Qjs7SUFDNUIsMENBQTJCOztJQUMzQiw2Q0FBOEI7O0lBQzlCLHFDQUFrQjs7SUFDbEIseUNBQTRCOztJQUc1QixzQ0FBd0I7O0lBQ3hCLHdDQUFzQjs7SUFDdEIsdUNBQXlCOztJQUN6QixzQ0FBd0I7O0lBQ3hCLHNDQUF3Qjs7SUFDeEIsMENBQTBCOztJQUMxQiwrQ0FBaUM7O0lBQ2pDLDJDQUF5Qjs7SUFDekIsNkNBQStCOztJQUMvQixxQ0FBdUI7O0lBQ3ZCLHVDQUFxQjs7SUFDckIsK0NBQWlDOztJQUNqQyx5Q0FBMkI7O0lBQzNCLG9DQUFzQjs7SUFDdEIsOENBQWdDOztJQUNoQyxnREFBa0M7O0lBR2xDLDRDQUFrQzs7SUFDbEMsd0NBQStEOztJQUMvRCwwQ0FBaUU7O0lBQ2pFLDZDQUFpRDs7SUFDakQsb0NBQVk7O0lBRUEsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2tyYU9wdGlvbnMsIFByaXZhdGVPa3JhT3B0aW9ucyB9IGZyb20gJy4vT2tyYU9wdGlvbnMnO1xuaW1wb3J0IHsgQW5ndWxhcjhPa3JhU2VydmljZSB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBva3JhOiBhbnlcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tva3JhQnV0dG9uXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGVudjogc3RyaW5nO1xuICBASW5wdXQoKSB1cmxfZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IG51bWJlcjtcbiAgQElucHV0KCkgcmVjb3JkX2lkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrX3VybDogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyOiB7fTtcbiAgQElucHV0KCkgcHJvZHVjdHM6IHN0cmluZ1tdO1xuXG5cbiAgQElucHV0KCkgdG9rZW4gOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbnMgOiB7fTtcbiAgQElucHV0KCkgc291cmNlIDogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvciA6IHN0cmluZztcbiAgQElucHV0KCkgbGltaXQgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvcnBvcmF0ZSA6IG51bGw7XG4gIEBJbnB1dCgpIGNvbm5lY3RNZXNzYWdlIDogc3RyaW5nO1xuICBASW5wdXQoKSBndWFyYW50b3JzIDoge307XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybCA6IHN0cmluZztcbiAgQElucHV0KCkgbG9nbyA6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyIDoge307XG4gIEBJbnB1dCgpIHdpZGdldF9zdWNjZXNzIDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXJyZW5jeSA6IHN0cmluZztcbiAgQElucHV0KCkgZXhwIDogc3RyaW5nO1xuICBASW5wdXQoKSBzdWNjZXNzX3RpdGxlIDogc3RyaW5nO1xuICBASW5wdXQoKSBzdWNjZXNzX21lc3NhZ2UgOiBzdHJpbmc7XG5cblxuICBASW5wdXQoKSBva3JhT3B0aW9uczogT2tyYU9wdGlvbnM7XG4gIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBfb2tyYU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZU9rcmFPcHRpb25zPjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBrZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2tyYVdpZGdldFNlcnZpY2U6IEFuZ3VsYXI4T2tyYVNlcnZpY2UpIHtcbiAgICB0aGlzLmtleSA9IG9rcmFXaWRnZXRTZXJ2aWNlLm9rcmFQdWJsaWNLZXk7XG4gICB9XG4gIGFzeW5jIGluaXRPa3JhKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHRoaXMpO1xuICAgIGF3YWl0IHRoaXMub2tyYVdpZGdldFNlcnZpY2UubG9hZFNjcmlwdCgpO1xuICAgIGNvbnN0IG9rcmEgPSBuZXcgd2luZG93Lm9rcmEuY3JlYXRlKCk7XG4gICAgb2tyYS5vcGVuKHRoaXMuX29rcmFPcHRpb25zKTtcbiAgfVxuXG4gIGdlbmVyYXRlT3B0aW9ucyhvYmo6IGFueSkge1xuICAgIHRoaXMuX29rcmFPcHRpb25zID0gdGhpcy5va3JhV2lkZ2V0U2VydmljZS5nZXRPa3JhT3B0aW9ucyhvYmopO1xuICAgIHRoaXMuX29rcmFPcHRpb25zLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbkNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICAgIH0gXG4gICAgfTtcblxuICAgIHRoaXMuX29rcmFPcHRpb25zLm9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9uU3VjY2Vzcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQoKTtcbiAgICAgIH0gXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgYXN5bmMgYnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5pbml0T2tyYSgpO1xuICB9XG5cbn1cbiJdfQ==