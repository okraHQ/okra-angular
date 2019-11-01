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
    pay() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!Angular8OkraDirective} */ function* () {
            this.generateOptions(this);
            yield this.okraWidgetService.loadScript();
            /** @type {?} */
            const payment = new window.okra.create(this._okraOptions);
            payment.open();
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
            this.pay();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXBELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFRWCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBZWhDLFlBQW1CLGlCQUFzQztRQUF0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO1FBTC9DLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQyxDQUFDLHNCQUFzQjs7UUFDNUUsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSy9ELElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDSSxHQUFHOztZQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7O2tCQUNwQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixDQUFDO0tBQUE7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7O1FBQUcsR0FBRyxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFHLEdBQUcsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7OztJQUdLLFdBQVc7O1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQztLQUFBOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBVFEsbUJBQW1COzs7a0JBYXpCLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxNQUFNO3dCQUNOLE1BQU07MEJBNkJOLFlBQVksU0FBQyxPQUFPOzs7O0lBdENyQixvQ0FBcUI7O0lBQ3JCLHdDQUF5Qjs7SUFDekIsMkNBQTRCOztJQUM1QiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQix5Q0FBNEI7O0lBQzVCLDRDQUFrQzs7SUFDbEMsd0NBQStEOztJQUMvRCwwQ0FBaUU7O0lBQ2pFLDZDQUFpRDs7SUFDakQsb0NBQVk7O0lBRUEsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2tyYU9wdGlvbnMsIFByaXZhdGVPa3JhT3B0aW9ucyB9IGZyb20gJy4vT2tyYU9wdGlvbnMnO1xuaW1wb3J0IHsgQW5ndWxhcjhPa3JhU2VydmljZSB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBva3JhOiBhbnlcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tva3JhQnV0dG9uXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGVudjogc3RyaW5nO1xuICBASW5wdXQoKSB1cmxfZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IG51bWJlcjtcbiAgQElucHV0KCkgcmVjb3JkX2lkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrX3VybDogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyOiB7fTtcbiAgQElucHV0KCkgcHJvZHVjdHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBva3JhT3B0aW9uczogT2tyYU9wdGlvbnM7XG4gIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBfb2tyYU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZU9rcmFPcHRpb25zPjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBrZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2tyYVdpZGdldFNlcnZpY2U6IEFuZ3VsYXI4T2tyYVNlcnZpY2UpIHtcbiAgICB0aGlzLmtleSA9IG9rcmFXaWRnZXRTZXJ2aWNlLm9rcmFQdWJsaWNLZXk7XG4gICB9XG4gIGFzeW5jIHBheSgpIHtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmxvYWRTY3JpcHQoKTtcbiAgICBjb25zdCBwYXltZW50ID0gbmV3IHdpbmRvdy5va3JhLmNyZWF0ZSh0aGlzLl9va3JhT3B0aW9ucyk7XG4gICAgcGF5bWVudC5vcGVuKCk7XG4gIH1cblxuICBnZW5lcmF0ZU9wdGlvbnMob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9va3JhT3B0aW9ucyA9IHRoaXMub2tyYVdpZGdldFNlcnZpY2UuZ2V0T2tyYU9wdGlvbnMob2JqKTtcbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25DbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgICB9IFxuICAgIH07XG5cbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vblN1Y2Nlc3Mub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KCk7XG4gICAgICB9IFxuICAgIH07XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGFzeW5jIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KCk7XG4gIH1cblxufVxuIl19