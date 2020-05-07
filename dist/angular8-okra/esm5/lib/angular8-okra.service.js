/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { PUBLIC_KEY_TOKEN } from './okra-token';
import * as i0 from "@angular/core";
import * as i1 from "./okra-token";
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
    /** @nocollapse */ Angular8OkraService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angular8OkraService_Factory() { return new Angular8OkraService(i0.ɵɵinject(i1.PUBLIC_KEY_TOKEN)); }, token: Angular8OkraService, providedIn: "root" });
    return Angular8OkraService;
}());
export { Angular8OkraService };
if (false) {
    /** @type {?} */
    Angular8OkraService.prototype.okraPublicKey;
    /**
     * @type {?}
     * @private
     */
    Angular8OkraService.prototype.token;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjgtb2tyYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyOC1va3JhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBRWhELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFJWDtJQU9FLDZCQUE4QyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO2dCQUMzRCxPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7O2dCQUdLLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLDhCQUE4QixDQUFDLENBQUM7O2dCQUVwRCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ25DLFVBQVU7OztZQUFHO2dCQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEdBQWdCOztZQUN2QixXQUFXLEdBQWdCO1lBQy9CLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1lBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1lBQ3hCLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWTtZQUc5QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ2hCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztZQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1lBQ3hCLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYztZQUNsQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO1lBQzlCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWM7WUFDbEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1lBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUNqQixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWE7WUFDaEMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlO1lBR3BDLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1lBQ3hCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztTQUVyQjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXZFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzZDQUtjLE1BQU0sU0FBQyxnQkFBZ0I7Ozs4QkFoQnRDO0NBaUZDLEFBeEVELElBd0VDO1NBckVZLG1CQUFtQjs7O0lBRTlCLDRDQUFzQjs7Ozs7SUFFVixvQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9rcmFPcHRpb25zIH0gZnJvbSAnLi9Pa3JhT3B0aW9ucyc7XG5pbXBvcnQgeyBQVUJMSUNfS0VZX1RPS0VOIH0gZnJvbSAnLi9va3JhLXRva2VuJztcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgb2tyYTogYW55XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFTZXJ2aWNlIHtcblxuICBva3JhUHVibGljS2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQVUJMSUNfS0VZX1RPS0VOKSBwcml2YXRlIHRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9rcmFQdWJsaWNLZXkgPSB0b2tlbjtcbiAgfVxuXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5va3JhICYmIHR5cGVvZiB3aW5kb3cub2tyYS5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cblxuICAgICAgY29uc3QgbGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vY2RuLm9rcmEubmcvb2tyYS5jc3MnKTtcblxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY2RuLm9rcmEubmcvb2tyYS5taW4uanMnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE9rcmFPcHRpb25zKG9iajogT2tyYU9wdGlvbnMpOiBPa3JhT3B0aW9ucyB7XG4gICAgY29uc3Qgb2tyYU9wdGlvbnM6IE9rcmFPcHRpb25zID0ge1xuICAgICAgZW52OiBvYmouZW52LFxuICAgICAgdXJsX2Vudjogb2JqLnVybF9lbnYsXG4gICAgICBjbGllbnROYW1lOiBvYmouY2xpZW50TmFtZSxcbiAgICAgIGtleTogb2JqLmtleSxcbiAgICAgIHJlY29yZF9pZDogb2JqLnJlY29yZF9pZCxcbiAgICAgIGNhbGxiYWNrX3VybDogb2JqLmNhbGxiYWNrX3VybCxcblxuICAgICAgXG4gICAgICBvcHRpb25zOiBvYmoub3B0aW9ucyxcbiAgICAgIHRva2VuOiBvYmoudG9rZW4sXG4gICAgICBjb2xvcjogb2JqLmNvbG9yLFxuICAgICAgbGltaXQ6IG9iai5saW1pdCxcbiAgICAgIGNvcnBvcmF0ZTogb2JqLmNvcnBvcmF0ZSxcbiAgICAgIGNvbm5lY3RNZXNzYWdlOiBvYmouY29ubmVjdE1lc3NhZ2UsXG4gICAgICBndWFyYW50b3JzOiBvYmouZ3VhcmFudG9ycyxcbiAgICAgIHJlZGlyZWN0X3VybDogb2JqLnJlZGlyZWN0X3VybCxcbiAgICAgIGxvZ286IG9iai5sb2dvLFxuICAgICAgZmlsdGVyOiBvYmouZmlsdGVyLFxuICAgICAgd2lkZ2V0X3N1Y2Nlc3M6IG9iai53aWRnZXRfc3VjY2VzcyxcbiAgICAgIGN1cnJlbmN5OiBvYmouY3VycmVuY3ksXG4gICAgICBleHA6IG9iai5jdXJyZW5jeSxcbiAgICAgIHN1Y2Nlc3NfdGl0bGU6IG9iai5zdWNjZXNzX3RpdGxlLFxuICAgICAgc3VjY2Vzc19tZXNzYWdlOiBvYmouc3VjY2Vzc19tZXNzYWdlLFxuXG5cbiAgICAgIHNvdXJjZTogXCJhbmd1bGFyXCIsXG4gICAgICBwcm9kdWN0czogb2JqLnByb2R1Y3RzLFxuICAgICAgb25DbG9zZTogb2JqLm9uQ2xvc2UsXG4gICAgICBvblN1Y2Nlc3M6IG9iai5vblN1Y2Nlc3MsXG4gICAgICBvbkVycm9yOiBvYmoub25FcnJvclxuICAgICAgXG4gICAgfTtcbiAgICByZXR1cm4gb2tyYU9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==