/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular8OkraComponent } from './angular8-okra.component';
import { Angular8OkraService } from './angular8-okra.service';
import { PUBLIC_KEY_TOKEN } from './okra-token';
import { Angular8OkraDirective } from './angular8-okra.directive';
export class Angular8OkraModule {
    /**
     * @param {?} token
     * @return {?}
     */
    static forRoot(token) {
        return {
            ngModule: Angular8OkraModule,
            providers: [
                Angular8OkraService,
                { provide: PUBLIC_KEY_TOKEN, useValue: token }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjgtb2tyYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyOC1va3JhLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXI4LW9rcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBWWxFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYTtRQUMxQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2FBQy9DO1NBQ0YsQ0FBQztJQUNMLENBQUM7OztZQWpCRCxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUscUJBQXFCLENBQUM7Z0JBQzVELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFDLHFCQUFxQixDQUFDO2dCQUN0RCxTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBbmd1bGFyOE9rcmFDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXI4LW9rcmEuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXI4T2tyYVNlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXI4LW9rcmEuc2VydmljZSc7XG5pbXBvcnQgeyBQVUJMSUNfS0VZX1RPS0VOIH0gZnJvbSAnLi9va3JhLXRva2VuJztcbmltcG9ydCB7IEFuZ3VsYXI4T2tyYURpcmVjdGl2ZSB9IGZyb20gJy4vYW5ndWxhcjgtb2tyYS5kaXJlY3RpdmUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhcjhPa3JhQ29tcG9uZW50LCBBbmd1bGFyOE9rcmFEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyOE9rcmFDb21wb25lbnQsQW5ndWxhcjhPa3JhRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjhPa3JhTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QodG9rZW46IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhcjhPa3JhTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFuZ3VsYXI4T2tyYVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogUFVCTElDX0tFWV9UT0tFTiwgdXNlVmFsdWU6IHRva2VuIH1cbiAgICAgIF1cbiAgICB9O1xuIH1cbn1cbiJdfQ==