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
    Angular8OkraComponent.prototype.initOkra = /**
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
                        okra = new window.okra.create();
                        okra.open(this._okraOptions);
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
                    template: "<button [ngClass]=\"customClass\" [ngStyle]=\"customStyle\" (click)=\"initOkra()\"><ng-content></ng-content></button>"
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
    Angular8OkraComponent.prototype.token;
    /** @type {?} */
    Angular8OkraComponent.prototype.options;
    /** @type {?} */
    Angular8OkraComponent.prototype.source;
    /** @type {?} */
    Angular8OkraComponent.prototype.color;
    /** @type {?} */
    Angular8OkraComponent.prototype.limit;
    /** @type {?} */
    Angular8OkraComponent.prototype.corporate;
    /** @type {?} */
    Angular8OkraComponent.prototype.connectMessage;
    /** @type {?} */
    Angular8OkraComponent.prototype.guarantors;
    /** @type {?} */
    Angular8OkraComponent.prototype.redirect_url;
    /** @type {?} */
    Angular8OkraComponent.prototype.logo;
    /** @type {?} */
    Angular8OkraComponent.prototype.filter;
    /** @type {?} */
    Angular8OkraComponent.prototype.widget_success;
    /** @type {?} */
    Angular8OkraComponent.prototype.currency;
    /** @type {?} */
    Angular8OkraComponent.prototype.exp;
    /** @type {?} */
    Angular8OkraComponent.prototype.success_title;
    /** @type {?} */
    Angular8OkraComponent.prototype.success_message;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFcEQsdUJBRUM7OztJQURDLHdCQUFTOztBQUlYO0lBMENFLCtCQUFtQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUwvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUMsQ0FBQyxzQkFBc0I7O1FBQzVFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUsvRCxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0ksd0NBQVE7OztJQUFkOzs7Ozs7d0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0IscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3QkFDcEMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7OztLQUM5Qjs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLEdBQVE7UUFBeEIsaUJBYUM7UUFaQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7UUFBRztZQUMxQixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7UUFBRztZQUM1QixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHVIQUFpSDtpQkFDNUg7Ozs7Z0JBVlEsbUJBQW1COzs7c0JBY3pCLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUdMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7OEJBR0wsS0FBSzswQkFDTCxNQUFNOzRCQUNOLE1BQU07O0lBNEJULDRCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFkscUJBQXFCOzs7SUFFaEMsb0NBQXFCOztJQUNyQix3Q0FBeUI7O0lBQ3pCLDJDQUE0Qjs7SUFDNUIsNENBQXlCOztJQUN6Qiw0Q0FBeUI7O0lBQ3pCLDBDQUEyQjs7SUFDM0IsNkNBQThCOztJQUM5QixxQ0FBa0I7O0lBQ2xCLHlDQUE0Qjs7SUFHNUIsc0NBQXdCOztJQUN4Qix3Q0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsc0NBQXdCOztJQUN4QixzQ0FBd0I7O0lBQ3hCLDBDQUEwQjs7SUFDMUIsK0NBQWlDOztJQUNqQywyQ0FBeUI7O0lBQ3pCLDZDQUErQjs7SUFDL0IscUNBQXVCOztJQUN2Qix1Q0FBcUI7O0lBQ3JCLCtDQUFpQzs7SUFDakMseUNBQTJCOztJQUMzQixvQ0FBc0I7O0lBQ3RCLDhDQUFnQzs7SUFDaEMsZ0RBQWtDOztJQUdsQyw0Q0FBa0M7O0lBQ2xDLHdDQUErRDs7SUFDL0QsMENBQWlFOztJQUNqRSw2Q0FBaUQ7O0lBQ2pELG9DQUFZOztJQUVBLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9rcmFPcHRpb25zLCBQcml2YXRlT2tyYU9wdGlvbnMgfSBmcm9tICcuL09rcmFPcHRpb25zJztcbmltcG9ydCB7IEFuZ3VsYXI4T2tyYVNlcnZpY2UgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgb2tyYTogYW55XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdva3JhLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBbbmdDbGFzc109XCJjdXN0b21DbGFzc1wiIFtuZ1N0eWxlXT1cImN1c3RvbVN0eWxlXCIgKGNsaWNrKT1cImluaXRPa3JhKClcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9idXR0b24+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGVudjogc3RyaW5nO1xuICBASW5wdXQoKSB1cmxfZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tU3R5bGU6IHt9O1xuICBASW5wdXQoKSBjdXN0b21DbGFzczoge307XG4gIEBJbnB1dCgpIHJlY29yZF9pZDogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja191cmw6IHN0cmluZztcbiAgQElucHV0KCkgdXNlcjoge307XG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBzdHJpbmdbXTtcblxuXG4gIEBJbnB1dCgpIHRva2VuIDogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zIDoge307XG4gIEBJbnB1dCgpIHNvdXJjZSA6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3IgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbWl0IDogc3RyaW5nO1xuICBASW5wdXQoKSBjb3Jwb3JhdGUgOiBudWxsO1xuICBASW5wdXQoKSBjb25uZWN0TWVzc2FnZSA6IHN0cmluZztcbiAgQElucHV0KCkgZ3VhcmFudG9ycyA6IHt9O1xuICBASW5wdXQoKSByZWRpcmVjdF91cmwgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ28gOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlciA6IHt9O1xuICBASW5wdXQoKSB3aWRnZXRfc3VjY2VzcyA6IHN0cmluZztcbiAgQElucHV0KCkgY3VycmVuY3kgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4cCA6IHN0cmluZztcbiAgQElucHV0KCkgc3VjY2Vzc190aXRsZSA6IHN0cmluZztcbiAgQElucHV0KCkgc3VjY2Vzc19tZXNzYWdlIDogc3RyaW5nO1xuXG5cbiAgQElucHV0KCkgb2tyYU9wdGlvbnM6IE9rcmFPcHRpb25zO1xuICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBAT3V0cHV0KCkgb25TdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwdWJsaWMgX29rcmFPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVPa3JhT3B0aW9ucz47IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAga2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9rcmFXaWRnZXRTZXJ2aWNlOiBBbmd1bGFyOE9rcmFTZXJ2aWNlKSB7XG4gICAgdGhpcy5rZXkgPSBva3JhV2lkZ2V0U2VydmljZS5va3JhUHVibGljS2V5O1xuICAgfVxuICBhc3luYyBpbml0T2tyYSgpIHtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmxvYWRTY3JpcHQoKTtcbiAgICBjb25zdCBva3JhID0gbmV3IHdpbmRvdy5va3JhLmNyZWF0ZSgpO1xuICAgIG9rcmEub3Blbih0aGlzLl9va3JhT3B0aW9ucyk7XG4gIH1cblxuICBnZW5lcmF0ZU9wdGlvbnMob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9va3JhT3B0aW9ucyA9IHRoaXMub2tyYVdpZGdldFNlcnZpY2UuZ2V0T2tyYU9wdGlvbnMob2JqKTtcbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25DbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgICB9IFxuICAgIH07XG5cbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vblN1Y2Nlc3Mub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KCk7XG4gICAgICB9IFxuICAgIH07XG4gIH1cbn1cbiJdfQ==