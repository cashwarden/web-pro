(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exception-exception-module"],{

/***/ "KAcd":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/404.component.ts ***!
  \***************************************************/
/*! exports provided: Exception404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception404Component", function() { return Exception404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/abc/exception */ "0O26");


class Exception404Component {
}
Exception404Component.ɵfac = function Exception404Component_Factory(t) { return new (t || Exception404Component)(); };
Exception404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Exception404Component, selectors: [["exception-404"]], decls: 1, vars: 0, consts: [["type", "404", 2, "min-height", "500px", "height", "80%"]], template: function Exception404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "exception", 0);
    } }, directives: [_delon_abc_exception__WEBPACK_IMPORTED_MODULE_1__["ExceptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "NRFk":
/*!******************************************************!*\
  !*** ./src/app/routes/exception/exception.module.ts ***!
  \******************************************************/
/*! exports provided: ExceptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionModule", function() { return ExceptionModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _exception_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exception-routing.module */ "vNZU");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./403.component */ "WRKX");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404.component */ "KAcd");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./500.component */ "l9M9");
/* harmony import */ var _trigger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trigger.component */ "joH7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







const COMPONENTS = [_403_component__WEBPACK_IMPORTED_MODULE_2__["Exception403Component"], _404_component__WEBPACK_IMPORTED_MODULE_3__["Exception404Component"], _500_component__WEBPACK_IMPORTED_MODULE_4__["Exception500Component"], _trigger_component__WEBPACK_IMPORTED_MODULE_5__["ExceptionTriggerComponent"]];
const COMPONENTS_NOROUNT = [];
class ExceptionModule {
}
ExceptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ExceptionModule });
ExceptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ExceptionModule_Factory(t) { return new (t || ExceptionModule)(); }, imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _exception_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExceptionRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ExceptionModule, { declarations: [_403_component__WEBPACK_IMPORTED_MODULE_2__["Exception403Component"], _404_component__WEBPACK_IMPORTED_MODULE_3__["Exception404Component"], _500_component__WEBPACK_IMPORTED_MODULE_4__["Exception500Component"], _trigger_component__WEBPACK_IMPORTED_MODULE_5__["ExceptionTriggerComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _exception_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExceptionRoutingModule"]] }); })();


/***/ }),

/***/ "WRKX":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/403.component.ts ***!
  \***************************************************/
/*! exports provided: Exception403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception403Component", function() { return Exception403Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/abc/exception */ "0O26");


class Exception403Component {
}
Exception403Component.ɵfac = function Exception403Component_Factory(t) { return new (t || Exception403Component)(); };
Exception403Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Exception403Component, selectors: [["exception-403"]], decls: 1, vars: 0, consts: [["type", "403", 2, "min-height", "500px", "height", "80%"]], template: function Exception403Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "exception", 0);
    } }, directives: [_delon_abc_exception__WEBPACK_IMPORTED_MODULE_1__["ExceptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "joH7":
/*!*******************************************************!*\
  !*** ./src/app/routes/exception/trigger.component.ts ***!
  \*******************************************************/
/*! exports provided: ExceptionTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionTriggerComponent", function() { return ExceptionTriggerComponent; });
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");








function ExceptionTriggerComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExceptionTriggerComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const t_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.go(t_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u89E6\u53D1", t_r1, "");
} }
class ExceptionTriggerComponent {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.types = [401, 403, 404, 500];
    }
    go(type) {
        this.http.get(`/api/${type}`).subscribe();
    }
    refresh() {
        this.tokenService.set({ token: 'invalid-token' });
        // 必须提供一个后端地址，无法通过 Mock 来模拟
        this.http.post(`https://localhost:5001/auth`).subscribe((res) => console.warn('成功', res), (err) => {
            console.log('最后结果失败', err);
        });
    }
}
ExceptionTriggerComponent.ɵfac = function ExceptionTriggerComponent_Factory(t) { return new (t || ExceptionTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_auth__WEBPACK_IMPORTED_MODULE_0__["DA_SERVICE_TOKEN"])); };
ExceptionTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExceptionTriggerComponent, selectors: [["exception-trigger"]], decls: 5, vars: 1, consts: [[1, "pt-lg"], ["nz-button", "", "nzType", "danger", 3, "click", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-button", "", "nzType", "danger", 3, "click"]], template: function ExceptionTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExceptionTriggerComponent_button_2_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExceptionTriggerComponent_Template_button_click_3_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u89E6\u53D1\u5237\u65B0Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"]], encapsulation: 2 });


/***/ }),

/***/ "l9M9":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/500.component.ts ***!
  \***************************************************/
/*! exports provided: Exception500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception500Component", function() { return Exception500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/abc/exception */ "0O26");


class Exception500Component {
}
Exception500Component.ɵfac = function Exception500Component_Factory(t) { return new (t || Exception500Component)(); };
Exception500Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Exception500Component, selectors: [["exception-500"]], decls: 1, vars: 0, consts: [["type", "500", 2, "min-height", "500px", "height", "80%"]], template: function Exception500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "exception", 0);
    } }, directives: [_delon_abc_exception__WEBPACK_IMPORTED_MODULE_1__["ExceptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vNZU":
/*!**************************************************************!*\
  !*** ./src/app/routes/exception/exception-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ExceptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionRoutingModule", function() { return ExceptionRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./403.component */ "WRKX");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.component */ "KAcd");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./500.component */ "l9M9");
/* harmony import */ var _trigger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trigger.component */ "joH7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '403', component: _403_component__WEBPACK_IMPORTED_MODULE_1__["Exception403Component"] },
    { path: '404', component: _404_component__WEBPACK_IMPORTED_MODULE_2__["Exception404Component"] },
    { path: '500', component: _500_component__WEBPACK_IMPORTED_MODULE_3__["Exception500Component"] },
    { path: 'trigger', component: _trigger_component__WEBPACK_IMPORTED_MODULE_4__["ExceptionTriggerComponent"] },
];
class ExceptionRoutingModule {
}
ExceptionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExceptionRoutingModule });
ExceptionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function ExceptionRoutingModule_Factory(t) { return new (t || ExceptionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExceptionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=exception-exception-module.js.map