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
        this.onClose = new EventEmitter();
        this.onSuccess = new EventEmitter();
        this.onError = new EventEmitter();
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
    Angular8OkraDirective.prototype.generateOptions = /**
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
                _this.onClose.emit(json);
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
        onError: [{ type: Output }],
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
    Angular8OkraDirective.prototype.onError;
    /** @type {?} */
    Angular8OkraDirective.prototype._okraOptions;
    /** @type {?} */
    Angular8OkraDirective.prototype.key;
    /** @type {?} */
    Angular8OkraDirective.prototype.okraWidgetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXBELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFJWDtJQXdDRSwrQkFBbUIsaUJBQXNDO1FBQXRDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUFOL0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2RCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNLLHdDQUFROzs7SUFBZDs7Ozs7O3dCQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNCLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQXpDLFNBQXlDLENBQUM7d0JBQ3BDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7S0FDOUI7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixHQUFRO1FBQXhCLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUcsVUFBQyxJQUFJO1lBQy9CLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUcsVUFBQyxJQUFJO1lBQ2pDLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUcsVUFBQyxJQUFJO1lBQy9CLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7OztJQUdLLDJDQUFXOzs7SUFEakI7OztnQkFFRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7S0FDakI7O2dCQTNFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVRRLG1CQUFtQjs7O3NCQWF6QixLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUdMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7OEJBR0wsS0FBSzswQkFDTCxNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTs4QkFvQ04sWUFBWSxTQUFDLE9BQU87O0lBS3ZCLDRCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0F6RVkscUJBQXFCOzs7SUFFaEMsb0NBQXFCOztJQUNyQix3Q0FBeUI7O0lBQ3pCLDJDQUE0Qjs7SUFDNUIsMENBQTJCOztJQUMzQiw2Q0FBOEI7O0lBQzlCLHFDQUFrQjs7SUFDbEIseUNBQTRCOztJQUc1QixzQ0FBdUI7O0lBQ3ZCLHdDQUFxQjs7SUFDckIsdUNBQXdCOztJQUN4QixzQ0FBdUI7O0lBQ3ZCLHNDQUF1Qjs7SUFDdkIsMENBQXlCOztJQUN6QiwrQ0FBZ0M7O0lBQ2hDLDJDQUF3Qjs7SUFDeEIsNkNBQThCOztJQUM5QixxQ0FBc0I7O0lBQ3RCLHVDQUFvQjs7SUFDcEIsK0NBQWdDOztJQUNoQyx5Q0FBMEI7O0lBQzFCLG9DQUFxQjs7SUFDckIsOENBQStCOztJQUMvQixnREFBaUM7O0lBR2pDLDRDQUFrQzs7SUFDbEMsd0NBQStEOztJQUMvRCwwQ0FBaUU7O0lBQ2pFLHdDQUErRDs7SUFDL0QsNkNBQWlEOztJQUNqRCxvQ0FBWTs7SUFFQSxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPa3JhT3B0aW9ucywgUHJpdmF0ZU9rcmFPcHRpb25zIH0gZnJvbSAnLi9Pa3JhT3B0aW9ucyc7XG5pbXBvcnQgeyBBbmd1bGFyOE9rcmFTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIG9rcmE6IGFueVxufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW29rcmFCdXR0b25dJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI4T2tyYURpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgZW52OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybF9lbnY6IHN0cmluZztcbiAgQElucHV0KCkgY2xpZW50TmFtZTogbnVtYmVyO1xuICBASW5wdXQoKSByZWNvcmRfaWQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXI6IHt9O1xuICBASW5wdXQoKSBwcm9kdWN0czogc3RyaW5nW107XG5cblxuICBASW5wdXQoKSB0b2tlbjogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zOiB7fTtcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbWl0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvcnBvcmF0ZTogbnVsbDtcbiAgQElucHV0KCkgY29ubmVjdE1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgZ3VhcmFudG9yczoge307XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlcjoge307XG4gIEBJbnB1dCgpIHdpZGdldF9zdWNjZXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4cDogc3RyaW5nO1xuICBASW5wdXQoKSBzdWNjZXNzX3RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Y2Nlc3NfbWVzc2FnZTogc3RyaW5nO1xuXG5cbiAgQElucHV0KCkgb2tyYU9wdGlvbnM6IE9rcmFPcHRpb25zO1xuICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBfb2tyYU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZU9rcmFPcHRpb25zPjtcbiAga2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9rcmFXaWRnZXRTZXJ2aWNlOiBBbmd1bGFyOE9rcmFTZXJ2aWNlKSB7XG4gICAgdGhpcy5rZXkgPSBva3JhV2lkZ2V0U2VydmljZS5va3JhUHVibGljS2V5O1xuICB9XG4gIGFzeW5jIGluaXRPa3JhKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHRoaXMpO1xuICAgIGF3YWl0IHRoaXMub2tyYVdpZGdldFNlcnZpY2UubG9hZFNjcmlwdCgpO1xuICAgIGNvbnN0IG9rcmEgPSBuZXcgd2luZG93Lm9rcmEuY3JlYXRlKCk7XG4gICAgb2tyYS5vcGVuKHRoaXMuX29rcmFPcHRpb25zKTtcbiAgfVxuXG4gIGdlbmVyYXRlT3B0aW9ucyhvYmo6IGFueSkge1xuICAgIHRoaXMuX29rcmFPcHRpb25zID0gdGhpcy5va3JhV2lkZ2V0U2VydmljZS5nZXRPa3JhT3B0aW9ucyhvYmopO1xuXG4gICAgdGhpcy5fb2tyYU9wdGlvbnMub25DbG9zZSA9IChqc29uKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbkNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoanNvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX29rcmFPcHRpb25zLm9uU3VjY2VzcyA9IChqc29uKSA9PiB7XG4gICAgICBpZiAodGhpcy5vblN1Y2Nlc3Mub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KGpzb24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9va3JhT3B0aW9ucy5vbkVycm9yID0gKGpzb24pID0+IHtcbiAgICAgIGlmICh0aGlzLm9uRXJyb3Iub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uRXJyb3IuZW1pdChqc29uKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhc3luYyBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLmluaXRPa3JhKCk7XG4gIH1cblxufVxuIl19