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
var Angular8OkraDirective = /** @class */ (function () {
    function Angular8OkraDirective(okraWidgetService) {
        this.okraWidgetService = okraWidgetService;
        this.onClose = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onSuccess = new EventEmitter();
        this.key = okraWidgetService.okraPublicKey;
    }
    /**
     * @return {?}
     */
    Angular8OkraDirective.prototype.initOkra = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var okra;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.generateOptions(this);
                        return [4 /*yield*/, this.okraWidgetService.loadScript()];
                    case 1:
                        _a.sent();
                        okra = new window.okra.create(this._okraOptions);
                        okra.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular8OkraDirective.prototype.generateOptions = /**
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
    /**
     * @return {?}
     */
    Angular8OkraDirective.prototype.buttonClick = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.initOkra();
                return [2 /*return*/];
            });
        });
    };
    Angular8OkraDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[okraButton]'
                },] }
    ];
    /** @nocollapse */
    Angular8OkraDirective.ctorParameters = function () { return [
        { type: Angular8OkraService }
    ]; };
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
    return Angular8OkraDirective;
}());
export { Angular8OkraDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXBELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFJWDtJQW1CRSwrQkFBbUIsaUJBQXNDO1FBQXRDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUFML0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDLENBQUMsc0JBQXNCOztRQUM1RSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNJLHdDQUFROzs7SUFBZDs7Ozs7O3dCQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7d0JBQ3BDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7S0FDYjs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLEdBQVE7UUFBeEIsaUJBYUM7UUFaQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7UUFBRztZQUMxQixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBRztZQUM1QixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7OztJQUdLLDJDQUFXOzs7SUFEakI7OztnQkFFRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7S0FDakI7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVRRLG1CQUFtQjs7O3NCQWF6QixLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFDTixNQUFNOzhCQTZCTixZQUFZLFNBQUMsT0FBTzs7SUFLdkIsNEJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTdDWSxxQkFBcUI7OztJQUVoQyxvQ0FBcUI7O0lBQ3JCLHdDQUF5Qjs7SUFDekIsMkNBQTRCOztJQUM1QiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQix5Q0FBNEI7O0lBQzVCLDRDQUFrQzs7SUFDbEMsd0NBQStEOztJQUMvRCwwQ0FBaUU7O0lBQ2pFLDZDQUFpRDs7SUFDakQsb0NBQVk7O0lBRUEsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2tyYU9wdGlvbnMsIFByaXZhdGVPa3JhT3B0aW9ucyB9IGZyb20gJy4vT2tyYU9wdGlvbnMnO1xuaW1wb3J0IHsgQW5ndWxhcjhPa3JhU2VydmljZSB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBva3JhOiBhbnlcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tva3JhQnV0dG9uXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGVudjogc3RyaW5nO1xuICBASW5wdXQoKSB1cmxfZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IG51bWJlcjtcbiAgQElucHV0KCkgcmVjb3JkX2lkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrX3VybDogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyOiB7fTtcbiAgQElucHV0KCkgcHJvZHVjdHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBva3JhT3B0aW9uczogT2tyYU9wdGlvbnM7XG4gIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBfb2tyYU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZU9rcmFPcHRpb25zPjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBrZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2tyYVdpZGdldFNlcnZpY2U6IEFuZ3VsYXI4T2tyYVNlcnZpY2UpIHtcbiAgICB0aGlzLmtleSA9IG9rcmFXaWRnZXRTZXJ2aWNlLm9rcmFQdWJsaWNLZXk7XG4gICB9XG4gIGFzeW5jIGluaXRPa3JhKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHRoaXMpO1xuICAgIGF3YWl0IHRoaXMub2tyYVdpZGdldFNlcnZpY2UubG9hZFNjcmlwdCgpO1xuICAgIGNvbnN0IG9rcmEgPSBuZXcgd2luZG93Lm9rcmEuY3JlYXRlKHRoaXMuX29rcmFPcHRpb25zKTtcbiAgICBva3JhLm9wZW4oKTtcbiAgfVxuXG4gIGdlbmVyYXRlT3B0aW9ucyhvYmo6IGFueSkge1xuICAgIHRoaXMuX29rcmFPcHRpb25zID0gdGhpcy5va3JhV2lkZ2V0U2VydmljZS5nZXRPa3JhT3B0aW9ucyhvYmopO1xuICAgIHRoaXMuX29rcmFPcHRpb25zLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbkNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICAgIH0gXG4gICAgfTtcblxuICAgIHRoaXMuX29rcmFPcHRpb25zLm9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9uU3VjY2Vzcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQoKTtcbiAgICAgIH0gXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgYXN5bmMgYnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5pbml0T2tyYSgpO1xuICB9XG5cbn1cbiJdfQ==