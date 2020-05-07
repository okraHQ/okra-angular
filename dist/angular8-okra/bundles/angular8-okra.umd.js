(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular8-okra', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['angular8-okra'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PUBLIC_KEY_TOKEN = new core.InjectionToken('okra.publickey');

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Angular8OkraService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [PUBLIC_KEY_TOKEN,] }] }
        ]; };
        /** @nocollapse */ Angular8OkraService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angular8OkraService_Factory() { return new Angular8OkraService(core.ɵɵinject(PUBLIC_KEY_TOKEN)); }, token: Angular8OkraService, providedIn: "root" });
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
            this.onClose = new core.EventEmitter(); // tslint:disable-line
            // tslint:disable-line
            this.onSuccess = new core.EventEmitter();
            this.onError = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'okra-button',
                        template: "<button [ngClass]=\"customClass\" [ngStyle]=\"customStyle\" (click)=\"initOkra()\"><ng-content></ng-content></button>"
                    }] }
        ];
        /** @nocollapse */
        Angular8OkraComponent.ctorParameters = function () { return [
            { type: Angular8OkraService }
        ]; };
        Angular8OkraComponent.propDecorators = {
            env: [{ type: core.Input }],
            url_env: [{ type: core.Input }],
            clientName: [{ type: core.Input }],
            customStyle: [{ type: core.Input }],
            customClass: [{ type: core.Input }],
            record_id: [{ type: core.Input }],
            callback_url: [{ type: core.Input }],
            user: [{ type: core.Input }],
            products: [{ type: core.Input }],
            token: [{ type: core.Input }],
            options: [{ type: core.Input }],
            source: [{ type: core.Input }],
            color: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            corporate: [{ type: core.Input }],
            connectMessage: [{ type: core.Input }],
            guarantors: [{ type: core.Input }],
            redirect_url: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            widget_success: [{ type: core.Input }],
            currency: [{ type: core.Input }],
            exp: [{ type: core.Input }],
            success_title: [{ type: core.Input }],
            success_message: [{ type: core.Input }],
            okraOptions: [{ type: core.Input }],
            onClose: [{ type: core.Output }],
            onSuccess: [{ type: core.Output }],
            onError: [{ type: core.Output }]
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
            this.onClose = new core.EventEmitter();
            this.onSuccess = new core.EventEmitter();
            this.onError = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[okraButton]'
                    },] }
        ];
        /** @nocollapse */
        Angular8OkraDirective.ctorParameters = function () { return [
            { type: Angular8OkraService }
        ]; };
        Angular8OkraDirective.propDecorators = {
            env: [{ type: core.Input }],
            url_env: [{ type: core.Input }],
            clientName: [{ type: core.Input }],
            record_id: [{ type: core.Input }],
            callback_url: [{ type: core.Input }],
            user: [{ type: core.Input }],
            products: [{ type: core.Input }],
            token: [{ type: core.Input }],
            options: [{ type: core.Input }],
            source: [{ type: core.Input }],
            color: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            corporate: [{ type: core.Input }],
            connectMessage: [{ type: core.Input }],
            guarantors: [{ type: core.Input }],
            redirect_url: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            widget_success: [{ type: core.Input }],
            currency: [{ type: core.Input }],
            exp: [{ type: core.Input }],
            success_title: [{ type: core.Input }],
            success_message: [{ type: core.Input }],
            okraOptions: [{ type: core.Input }],
            onClose: [{ type: core.Output }],
            onSuccess: [{ type: core.Output }],
            onError: [{ type: core.Output }],
            buttonClick: [{ type: core.HostListener, args: ['click',] }]
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
            { type: core.NgModule, args: [{
                        declarations: [Angular8OkraComponent, Angular8OkraDirective],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [Angular8OkraComponent, Angular8OkraDirective],
                        providers: [],
                    },] }
        ];
        return Angular8OkraModule;
    }());

    exports.Angular8OkraComponent = Angular8OkraComponent;
    exports.Angular8OkraDirective = Angular8OkraDirective;
    exports.Angular8OkraModule = Angular8OkraModule;
    exports.Angular8OkraService = Angular8OkraService;
    exports.ɵa = PUBLIC_KEY_TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular8-okra.umd.js.map
