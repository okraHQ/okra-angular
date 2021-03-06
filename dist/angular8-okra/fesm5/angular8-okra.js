import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, Input, Output, Directive, HostListener, NgModule } from '@angular/core';
import { __awaiter, __generator } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PUBLIC_KEY_TOKEN = new InjectionToken('okra.publickey');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.okra;
}
var Angular8OkraService = /** @class */ (function () {
    function Angular8OkraService(token) {
        this.token = token;
        this.okraPublicKey = token;
    }
    /**
     * @return {?}
     */
    Angular8OkraService.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (window.okra && typeof window.okra.create === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            var link = window.document.createElement('link');
            window.document.head.appendChild(link);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'https://cdn.okra.ng/okra.css');
            /** @type {?} */
            var script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            var onLoadFunc = (/**
             * @return {?}
             */
            function () {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://cdn.okra.ng/okra.min.js');
        }));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Angular8OkraService.prototype.getOkraOptions = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var okraOptions = {
            env: obj.env,
            url_env: obj.url_env,
            clientName: obj.clientName,
            key: obj.key,
            record_id: obj.record_id,
            callback_url: obj.callback_url,
            options: obj.options,
            token: obj.token,
            color: obj.color,
            limit: obj.limit,
            corporate: obj.corporate,
            connectMessage: obj.connectMessage,
            guarantors: obj.guarantors,
            redirect_url: obj.redirect_url,
            logo: obj.logo,
            filter: obj.filter,
            widget_success: obj.widget_success,
            currency: obj.currency,
            exp: obj.currency,
            success_title: obj.success_title,
            success_message: obj.success_message,
            source: "angular",
            products: obj.products,
            onClose: obj.onClose,
            onSuccess: obj.onSuccess,
            onError: obj.onError
        };
        return okraOptions;
    };
    Angular8OkraService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Angular8OkraService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PUBLIC_KEY_TOKEN,] }] }
    ]; };
    /** @nocollapse */ Angular8OkraService.ngInjectableDef = ɵɵdefineInjectable({ factory: function Angular8OkraService_Factory() { return new Angular8OkraService(ɵɵinject(PUBLIC_KEY_TOKEN)); }, token: Angular8OkraService, providedIn: "root" });
    return Angular8OkraService;
}());
if (false) {
    /** @type {?} */
    Angular8OkraService.prototype.okraPublicKey;
    /**
     * @type {?}
     * @private
     */
    Angular8OkraService.prototype.token;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$1() { }
if (false) {
    /** @type {?} */
    MyWindow$1.prototype.okra;
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
        return __awaiter(this, void 0, void 0, function () {
            var okra;
            return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$2() { }
if (false) {
    /** @type {?} */
    MyWindow$2.prototype.okra;
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
        return __awaiter(this, void 0, void 0, function () {
            var okra;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angular8OkraModule = /** @class */ (function () {
    function Angular8OkraModule() {
    }
    /**
     * @param {?} token
     * @return {?}
     */
    Angular8OkraModule.forRoot = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return {
            ngModule: Angular8OkraModule,
            providers: [
                Angular8OkraService,
                { provide: PUBLIC_KEY_TOKEN, useValue: token }
            ]
        };
    };
    Angular8OkraModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Angular8OkraComponent, Angular8OkraDirective],
                    imports: [
                        CommonModule
                    ],
                    exports: [Angular8OkraComponent, Angular8OkraDirective],
                    providers: [],
                },] }
    ];
    return Angular8OkraModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angular8OkraComponent, Angular8OkraDirective, Angular8OkraModule, Angular8OkraService, PUBLIC_KEY_TOKEN as ɵa };
//# sourceMappingURL=angular8-okra.js.map
