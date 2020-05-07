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
        this.onError = new EventEmitter();
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
         * @param {?} json
         * @return {?}
         */
        function (json) {
            if (_this.onClose.observers.length) {
                _this.onClose.emit();
            }
        });
        this._okraOptions.onSuccess = (/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            if (_this.onSuccess.observers.length) {
                _this.onSuccess.emit(json);
            }
        });
        this._okraOptions.onError = (/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            if (_this.onError.observers.length) {
                _this.onError.emit(json);
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
        onSuccess: [{ type: Output }],
        onError: [{ type: Output }]
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
    Angular8OkraComponent.prototype.onError;
    /** @type {?} */
    Angular8OkraComponent.prototype._okraOptions;
    /** @type {?} */
    Angular8OkraComponent.prototype.key;
    /** @type {?} */
    Angular8OkraComponent.prototype.okraWidgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFcEQsdUJBRUM7OztJQURDLHdCQUFTOztBQUlYO0lBMkNFLCtCQUFtQixpQkFBc0M7UUFBdEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQU4vQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUMsQ0FBQyxzQkFBc0I7O1FBQzVFLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2RCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNJLHdDQUFROzs7SUFBZDs7Ozs7O3dCQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7d0JBQ3BDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7S0FDOUI7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixHQUFRO1FBQXhCLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUcsVUFBQyxJQUFJO1lBQy9CLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBRyxVQUFDLElBQUk7WUFDakMsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBRyxVQUFDLElBQUk7WUFDL0IsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsdUhBQWlIO2lCQUM1SDs7OztnQkFWUSxtQkFBbUI7OztzQkFjekIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBR0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSztzQkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzs4QkFHTCxLQUFLOzBCQUNMLE1BQU07NEJBQ04sTUFBTTswQkFDTixNQUFNOztJQWtDVCw0QkFBQztDQUFBLEFBekVELElBeUVDO1NBcEVZLHFCQUFxQjs7O0lBRWhDLG9DQUFxQjs7SUFDckIsd0NBQXlCOztJQUN6QiwyQ0FBNEI7O0lBQzVCLDRDQUF5Qjs7SUFDekIsNENBQXlCOztJQUN6QiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIscUNBQWtCOztJQUNsQix5Q0FBNEI7O0lBRzVCLHNDQUF3Qjs7SUFDeEIsd0NBQXNCOztJQUN0Qix1Q0FBeUI7O0lBQ3pCLHNDQUF3Qjs7SUFDeEIsc0NBQXdCOztJQUN4QiwwQ0FBMEI7O0lBQzFCLCtDQUFpQzs7SUFDakMsMkNBQXlCOztJQUN6Qiw2Q0FBK0I7O0lBQy9CLHFDQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQiwrQ0FBaUM7O0lBQ2pDLHlDQUEyQjs7SUFDM0Isb0NBQXNCOztJQUN0Qiw4Q0FBZ0M7O0lBQ2hDLGdEQUFrQzs7SUFHbEMsNENBQWtDOztJQUNsQyx3Q0FBK0Q7O0lBQy9ELDBDQUFpRTs7SUFDakUsd0NBQStEOztJQUMvRCw2Q0FBaUQ7O0lBQ2pELG9DQUFZOztJQUVBLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9rcmFPcHRpb25zLCBQcml2YXRlT2tyYU9wdGlvbnMgfSBmcm9tICcuL09rcmFPcHRpb25zJztcbmltcG9ydCB7IEFuZ3VsYXI4T2tyYVNlcnZpY2UgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgb2tyYTogYW55XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdva3JhLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBbbmdDbGFzc109XCJjdXN0b21DbGFzc1wiIFtuZ1N0eWxlXT1cImN1c3RvbVN0eWxlXCIgKGNsaWNrKT1cImluaXRPa3JhKClcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9idXR0b24+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGVudjogc3RyaW5nO1xuICBASW5wdXQoKSB1cmxfZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tU3R5bGU6IHt9O1xuICBASW5wdXQoKSBjdXN0b21DbGFzczoge307XG4gIEBJbnB1dCgpIHJlY29yZF9pZDogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja191cmw6IHN0cmluZztcbiAgQElucHV0KCkgdXNlcjoge307XG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBzdHJpbmdbXTtcblxuXG4gIEBJbnB1dCgpIHRva2VuIDogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zIDoge307XG4gIEBJbnB1dCgpIHNvdXJjZSA6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3IgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbWl0IDogc3RyaW5nO1xuICBASW5wdXQoKSBjb3Jwb3JhdGUgOiBudWxsO1xuICBASW5wdXQoKSBjb25uZWN0TWVzc2FnZSA6IHN0cmluZztcbiAgQElucHV0KCkgZ3VhcmFudG9ycyA6IHt9O1xuICBASW5wdXQoKSByZWRpcmVjdF91cmwgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ28gOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlciA6IHt9O1xuICBASW5wdXQoKSB3aWRnZXRfc3VjY2VzcyA6IHN0cmluZztcbiAgQElucHV0KCkgY3VycmVuY3kgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4cCA6IHN0cmluZztcbiAgQElucHV0KCkgc3VjY2Vzc190aXRsZSA6IHN0cmluZztcbiAgQElucHV0KCkgc3VjY2Vzc19tZXNzYWdlIDogc3RyaW5nO1xuXG5cbiAgQElucHV0KCkgb2tyYU9wdGlvbnM6IE9rcmFPcHRpb25zO1xuICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBAT3V0cHV0KCkgb25TdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIF9va3JhT3B0aW9uczogUGFydGlhbDxQcml2YXRlT2tyYU9wdGlvbnM+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBva3JhV2lkZ2V0U2VydmljZTogQW5ndWxhcjhPa3JhU2VydmljZSkge1xuICAgIHRoaXMua2V5ID0gb2tyYVdpZGdldFNlcnZpY2Uub2tyYVB1YmxpY0tleTtcbiAgIH1cbiAgYXN5bmMgaW5pdE9rcmEoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnModGhpcyk7XG4gICAgYXdhaXQgdGhpcy5va3JhV2lkZ2V0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgY29uc3Qgb2tyYSA9IG5ldyB3aW5kb3cub2tyYS5jcmVhdGUoKTtcbiAgICBva3JhLm9wZW4odGhpcy5fb2tyYU9wdGlvbnMpO1xuICB9XG5cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMgPSB0aGlzLm9rcmFXaWRnZXRTZXJ2aWNlLmdldE9rcmFPcHRpb25zKG9iaik7XG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25DbG9zZSA9IChqc29uKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbkNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICAgIH0gXG4gICAgfTtcblxuICAgIHRoaXMuX29rcmFPcHRpb25zLm9uU3VjY2VzcyA9IChqc29uKSA9PiB7XG4gICAgICBpZiAodGhpcy5vblN1Y2Nlc3Mub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQoanNvbik7XG4gICAgICB9IFxuICAgIH07XG4gICAgXG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25FcnJvciA9IChqc29uKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbkVycm9yLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbkVycm9yLmVtaXQoanNvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19