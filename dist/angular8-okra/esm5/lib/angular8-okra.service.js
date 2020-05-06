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
        console.log(obj);
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
            onSuccess: obj.onSuccess
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjgtb2tyYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyOC1va3JhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBRWhELHVCQUVDOzs7SUFEQyx3QkFBUzs7QUFJWDtJQU9FLDZCQUE4QyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO2dCQUMzRCxPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7O2dCQUdLLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLDhCQUE4QixDQUFDLENBQUM7O2dCQUVwRCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ25DLFVBQVU7OztZQUFHO2dCQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEdBQWdCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ1gsV0FBVyxHQUFnQjtZQUMvQixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7WUFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztZQUN4QixZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVk7WUFHOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztZQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztZQUN4QixjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWM7WUFDbEMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWTtZQUM5QixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsY0FBYyxFQUFFLEdBQUcsQ0FBQyxjQUFjO1lBQ2xDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDakIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhO1lBQ2hDLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZTtZQUdwQyxNQUFNLEVBQUUsU0FBUztZQUNqQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztTQUN6QjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQXRFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzZDQUtjLE1BQU0sU0FBQyxnQkFBZ0I7Ozs4QkFoQnRDO0NBZ0ZDLEFBdkVELElBdUVDO1NBcEVZLG1CQUFtQjs7O0lBRTlCLDRDQUFzQjs7Ozs7SUFFVixvQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9rcmFPcHRpb25zIH0gZnJvbSAnLi9Pa3JhT3B0aW9ucyc7XG5pbXBvcnQgeyBQVUJMSUNfS0VZX1RPS0VOIH0gZnJvbSAnLi9va3JhLXRva2VuJztcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgb2tyYTogYW55XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyOE9rcmFTZXJ2aWNlIHtcblxuICBva3JhUHVibGljS2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQVUJMSUNfS0VZX1RPS0VOKSBwcml2YXRlIHRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9rcmFQdWJsaWNLZXkgPSB0b2tlbjtcbiAgfVxuXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5va3JhICYmIHR5cGVvZiB3aW5kb3cub2tyYS5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cblxuICAgICAgY29uc3QgbGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vY2RuLm9rcmEubmcvb2tyYS5jc3MnKTtcblxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY2RuLm9rcmEubmcvb2tyYS5taW4uanMnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE9rcmFPcHRpb25zKG9iajogT2tyYU9wdGlvbnMpOiBPa3JhT3B0aW9ucyB7XG4gICAgY29uc29sZS5sb2cob2JqKTtcbiAgICBjb25zdCBva3JhT3B0aW9uczogT2tyYU9wdGlvbnMgPSB7XG4gICAgICBlbnY6IG9iai5lbnYsXG4gICAgICB1cmxfZW52OiBvYmoudXJsX2VudixcbiAgICAgIGNsaWVudE5hbWU6IG9iai5jbGllbnROYW1lLFxuICAgICAga2V5OiBvYmoua2V5LFxuICAgICAgcmVjb3JkX2lkOiBvYmoucmVjb3JkX2lkLFxuICAgICAgY2FsbGJhY2tfdXJsOiBvYmouY2FsbGJhY2tfdXJsLFxuXG4gICAgICBcbiAgICAgIG9wdGlvbnM6IG9iai5vcHRpb25zLFxuICAgICAgdG9rZW46IG9iai50b2tlbixcbiAgICAgIGNvbG9yOiBvYmouY29sb3IsXG4gICAgICBsaW1pdDogb2JqLmxpbWl0LFxuICAgICAgY29ycG9yYXRlOiBvYmouY29ycG9yYXRlLFxuICAgICAgY29ubmVjdE1lc3NhZ2U6IG9iai5jb25uZWN0TWVzc2FnZSxcbiAgICAgIGd1YXJhbnRvcnM6IG9iai5ndWFyYW50b3JzLFxuICAgICAgcmVkaXJlY3RfdXJsOiBvYmoucmVkaXJlY3RfdXJsLFxuICAgICAgbG9nbzogb2JqLmxvZ28sXG4gICAgICBmaWx0ZXI6IG9iai5maWx0ZXIsXG4gICAgICB3aWRnZXRfc3VjY2Vzczogb2JqLndpZGdldF9zdWNjZXNzLFxuICAgICAgY3VycmVuY3k6IG9iai5jdXJyZW5jeSxcbiAgICAgIGV4cDogb2JqLmN1cnJlbmN5LFxuICAgICAgc3VjY2Vzc190aXRsZTogb2JqLnN1Y2Nlc3NfdGl0bGUsXG4gICAgICBzdWNjZXNzX21lc3NhZ2U6IG9iai5zdWNjZXNzX21lc3NhZ2UsXG5cblxuICAgICAgc291cmNlOiBcImFuZ3VsYXJcIixcbiAgICAgIHByb2R1Y3RzOiBvYmoucHJvZHVjdHMsXG4gICAgICBvbkNsb3NlOiBvYmoub25DbG9zZSxcbiAgICAgIG9uU3VjY2Vzczogb2JqLm9uU3VjY2Vzc1xuICAgIH07XG4gICAgcmV0dXJuIG9rcmFPcHRpb25zO1xuICB9XG59XG4iXX0=