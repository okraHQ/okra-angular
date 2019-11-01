/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Angular8OkraService } from '../public-api';
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.okra;
}
var Angular8OkraComponent = /** @class */ (function () {
    function Angular8OkraComponent(okraWidgetService) {
        this.okraWidgetService = okraWidgetService;
        this.onClose = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onSuccess = new EventEmitter();
        this.key = okraWidgetService.okraPublicKey;
    }
    /**
     * @return {?}
     */
    Angular8OkraComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payment;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.generateOptions(this);
                        return [4 /*yield*/, this.okraWidgetService.loadScript()];
                    case 1:
                        _a.sent();
                        payment = new window.okra.create(this._okraOptions);
                        payment.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular8OkraComponent.prototype.generateOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        this._okraOptions = this.okraWidgetService.getOkraOptions(obj);
        this._okraOptions.onClose = (/**
         * @return {?}
         */
        function () {
            if (_this.onClose.observers.length) {
                _this.onClose.emit();
            }
        });
        this._okraOptions.onSuccess = (/**
         * @return {?}
         */
        function () {
            if (_this.onSuccess.observers.length) {
                _this.onSuccess.emit();
            }
        });
    };
    Angular8OkraComponent.decorators = [
        { type: Component, args: [{
                    selector: 'okra-button',
                    template: "<button [ngClass]=\"customClass\" [ngStyle]=\"customStyle\" (click)=\"pay()\">Init Okra</button>"
                }] }
    ];
    /** @nocollapse */
    Angular8OkraComponent.ctorParameters = function () { return [
        { type: Angular8OkraService }
    ]; };
    Angular8OkraComponent.propDecorators = {
        env: [{ type: Input }],
        url_env: [{ type: Input }],
        clientName: [{ type: Input }],
        customStyle: [{ type: Input }],
        customClass: [{ type: Input }],
        record_id: [{ type: Input }],
        callback_url: [{ type: Input }],
        user: [{ type: Input }],
        products: [{ type: Input }],
        okraOptions: [{ type: Input }],
        onClose: [{ type: Output }],
        onSuccess: [{ type: Output }]
    };
    return Angular8OkraComponent;
}());
export { Angular8OkraComponent };
if (false) {
    /** @type {?} */
    Angular8OkraComponent.prototype.env;
    /** @type {?} */
    Angular8OkraComponent.prototype.url_env;
    /** @type {?} */
    Angular8OkraComponent.prototype.clientName;
    /** @type {?} */
    Angular8OkraComponent.prototype.customStyle;
    /** @type {?} */
    Angular8OkraComponent.prototype.customClass;
    /** @type {?} */
    Angular8OkraComponent.prototype.record_id;
    /** @type {?} */
    Angular8OkraComponent.prototype.callback_url;
    /** @type {?} */
    Angular8OkraComponent.prototype.user;
    /** @type {?} */
    Angular8OkraComponent.prototype.products;
    /** @type {?} */
    Angular8OkraComponent.prototype.okraOptions;
    /** @type {?} */
    Angular8OkraComponent.prototype.onClose;
    /** @type {?} */
    Angular8OkraComponent.prototype.onSuccess;
    /** @type {?} */
    Angular8OkraComponent.prototype._okraOptions;
    /** @type {?} */
    Angular8OkraComponent.prototype.key;
    /** @type {?} */
    Angular8OkraComponent.prototype.okraWidgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFcEQsdUJBRUM7OztJQURDLHdCQUFTOztBQUlYO0lBc0JFLCtCQUFtQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUwvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUMsQ0FBQyxzQkFBc0I7O1FBQzVFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUsvRCxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0ksbUNBQUc7OztJQUFUOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0IscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3QkFDcEMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDekQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztLQUNoQjs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLEdBQVE7UUFBeEIsaUJBYUM7UUFaQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7UUFBRztZQUMxQixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBRztZQUM1QixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGtHQUE0RjtpQkFDdkc7Ozs7Z0JBVlEsbUJBQW1COzs7c0JBY3pCLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFDTixNQUFNOztJQTRCVCw0QkFBQztDQUFBLEFBOUNELElBOENDO1NBekNZLHFCQUFxQjs7O0lBRWhDLG9DQUFxQjs7SUFDckIsd0NBQXlCOztJQUN6QiwyQ0FBNEI7O0lBQzVCLDRDQUF5Qjs7SUFDekIsNENBQXlCOztJQUN6QiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQix5Q0FBNEI7O0lBQzVCLDRDQUFrQzs7SUFDbEMsd0NBQStEOztJQUMvRCwwQ0FBaUU7O0lBQ2pFLDZDQUFpRDs7SUFDakQsb0NBQVk7O0lBRUEsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2tyYU9wdGlvbnMsIFByaXZhdGVPa3JhT3B0aW9ucyB9IGZyb20gJy4vT2tyYU9wdGlvbnMnO1xuaW1wb3J0IHsgQW5ndWxhcjhPa3JhU2VydmljZSB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBva3JhOiBhbnlcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29rcmEtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIFtuZ0NsYXNzXT1cImN1c3RvbUNsYXNzXCIgW25nU3R5bGVdPVwiY3VzdG9tU3R5bGVcIiAoY2xpY2spPVwicGF5KClcIj5Jbml0IE9rcmE8L2J1dHRvbj5gLFxufSlcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI4T2tyYUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybF9lbnY6IHN0cmluZztcbiAgQElucHV0KCkgY2xpZW50TmFtZTogbnVtYmVyO1xuICBASW5wdXQoKSBjdXN0b21TdHlsZToge307XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7fTtcbiAgQElucHV0KCkgcmVjb3JkX2lkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrX3VybDogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyOiB7fTtcbiAgQElucHV0KCkgcHJvZHVjdHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBva3JhT3B0aW9uczogT2tyYU9wdGlvbnM7XG4gIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBfb2tyYU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZU9rcmFPcHRpb25zPjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBrZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2tyYVdpZGdldFNlcnZpY2U6IEFuZ3VsYXI4T2tyYVNlcnZpY2UpIHtcbiAgICB0aGlzLmtleSA9IG9rcmFXaWRnZXRTZXJ2aWNlLm9rcmFQdWJsaWNLZXk7XG4gICB9XG4gIGFzeW5jIHBheSgpIHtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmxvYWRTY3JpcHQoKTtcbiAgICBjb25zdCBwYXltZW50ID0gbmV3IHdpbmRvdy5va3JhLmNyZWF0ZSh0aGlzLl9va3JhT3B0aW9ucyk7XG4gICAgcGF5bWVudC5vcGVuKCk7XG4gIH1cblxuICBnZW5lcmF0ZU9wdGlvbnMob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9va3JhT3B0aW9ucyA9IHRoaXMub2tyYVdpZGdldFNlcnZpY2UuZ2V0T2tyYU9wdGlvbnMob2JqKTtcbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25DbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgICB9IFxuICAgIH07XG5cbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vblN1Y2Nlc3Mub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KCk7XG4gICAgICB9IFxuICAgIH07XG4gIH1cbn1cbiJdfQ==