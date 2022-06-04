(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["currency-currency-module"],{

/***/ "QrtV":
/*!********************************************************!*\
  !*** ./src/app/routes/currency/form/form.component.ts ***!
  \********************************************************/
/*! exports provided: CurrencyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormComponent", function() { return CurrencyFormComponent; });
/* harmony import */ var src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/params */ "ExrR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/cache */ "luDG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _delon_abc_se__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/abc/se */ "O3k0");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
















function CurrencyFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u7F16\u8F91\u8D27\u5E01");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrencyFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u6DFB\u52A0\u8D27\u5E01");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrencyFormComponent_nz_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", i_r6.name)("nzValue", i_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r6.name, " ");
} }
function CurrencyFormComponent_nz_spin_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spin", 16);
} }
function CurrencyFormComponent_se_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("1", ctx_r8.form.currency_code_from, "=");
} }
function CurrencyFormComponent_se_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "se", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-input-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyFormComponent_se_11_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.form.rate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CurrencyFormComponent_se_11_ng_template_3_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _r7)("nzAddOnAfter", ctx_r5.form.currency_code_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.form.rate);
} }
class CurrencyFormComponent {
    constructor(modal, msgSrv, http, cdr, cache) {
        this.modal = modal;
        this.msgSrv = msgSrv;
        this.http = http;
        this.cdr = cdr;
        this.cache = cache;
        this.record = {};
        this.ledger_id = 0;
        this.form = {
            ledger_id: 0,
            currency_code_from: '',
            currency_code_to: '',
            rate: 0,
        };
        this.loading = false;
    }
    ngOnInit() {
        if (this.record.id) {
            this.form = this.record;
        }
        this.ledger_id = this.cache.getNone(src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__["params"].cacheKey.defaultIdLedger);
        this.form.currency_code_to = this.base_currency_code;
    }
    save(value) {
        const url = this.record.id ? `/${this.record.id}` : '';
        const method = this.record.id ? 'put' : 'post';
        value.ledger_id = this.ledger_id;
        this.http.request(method, `/api/currencies${url}`, { body: value }).subscribe((res) => {
            if (res.code !== 0) {
                this.msgSrv.warning(res.message);
                return;
            }
            this.msgSrv.success('保存成功');
            this.modal.close(res.data);
        });
    }
    changeCurrency(code) {
        this.loading = true;
        this.http.get(`/api/currencies/rate/${code}/${this.form.currency_code_to}`).subscribe((res) => {
            if (res.code !== 0) {
                this.msgSrv.warning(res.message);
                return;
            }
            this.form.rate = res.data.rate;
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
    close() {
        this.modal.destroy();
    }
}
CurrencyFormComponent.ɵfac = function CurrencyFormComponent_Factory(t) { return new (t || CurrencyFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"])); };
CurrencyFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrencyFormComponent, selectors: [["app-currency-form"]], decls: 17, vars: 8, consts: [[1, "modal-header"], ["class", "modal-title", 4, "ngIf"], ["nz-form", "", "se-container", "1", "labelWidth", "100", 3, "ngSubmit"], ["f", "ngForm"], ["label", "\u57FA\u7840\u8D27\u5E01"], ["type", "text", "nz-input", "", "name", "currency_code_to", "disabled", "", 3, "ngModel", "ngModelChange"], ["label", "\u8D27\u5E01\u540D\u79F0"], ["name", "currency_code_from", "required", "", 3, "ngModel", "ngModelChange"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzSimple", "", "style", "padding-top: 1rem", 4, "ngIf"], ["label", "\u6C47\u7387", "optionalHelp", "\u9ED8\u8BA4\u81EA\u52A8\u83B7\u53D6\u6700\u65B0\u6C47\u7387\uFF0C\u53EF\u4FEE\u6539", 4, "ngIf"], ["col", "1"], ["nz-button", "", "nzType", "primary", 3, "disabled"], ["nz-button", "", "type", "button", 3, "click"], [1, "modal-title"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], ["nzSimple", "", 2, "padding-top", "1rem"], ["label", "\u6C47\u7387", "optionalHelp", "\u9ED8\u8BA4\u81EA\u52A8\u83B7\u53D6\u6700\u65B0\u6C47\u7387\uFF0C\u53EF\u4FEE\u6539"], [3, "nzAddOnBefore", "nzAddOnAfter"], ["type", "number", "nz-input", "", "name", "rate", "required", "", 3, "ngModel", "ngModelChange"], ["addOnBefore", ""]], template: function CurrencyFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrencyFormComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurrencyFormComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CurrencyFormComponent_Template_form_ngSubmit_3_listener() { return ctx.save(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "se", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.form.currency_code_to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "se", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyFormComponent_Template_nz_select_ngModelChange_8_listener($event) { return ctx.form.currency_code_from = $event; })("ngModelChange", function CurrencyFormComponent_Template_nz_select_ngModelChange_8_listener($event) { return ctx.changeCurrency($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CurrencyFormComponent_nz_option_9_Template, 2, 3, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CurrencyFormComponent_nz_spin_10_Template, 1, 0, "nz-spin", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CurrencyFormComponent_se_11_Template, 5, 3, "se", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "se", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrencyFormComponent_Template_button_click_15_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.record.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.record.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.currency_code_to);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.currency_code_from);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.codes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.currency_code_from && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r2.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _delon_abc_se__WEBPACK_IMPORTED_MODULE_9__["SEContainerComponent"], _delon_abc_se__WEBPACK_IMPORTED_MODULE_9__["SEComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzOptionComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_15__["NzSpinComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]], encapsulation: 2 });


/***/ }),

/***/ "UaRu":
/*!************************************************************!*\
  !*** ./src/app/routes/currency/currency-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CurrencyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyRoutingModule", function() { return CurrencyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "rSz6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyIndexComponent"] }
];
class CurrencyRoutingModule {
}
CurrencyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CurrencyRoutingModule });
CurrencyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CurrencyRoutingModule_Factory(t) { return new (t || CurrencyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CurrencyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mKul":
/*!****************************************************!*\
  !*** ./src/app/routes/currency/currency.module.ts ***!
  \****************************************************/
/*! exports provided: CurrencyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyModule", function() { return CurrencyModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _currency_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-routing.module */ "UaRu");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "rSz6");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "QrtV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const COMPONENTS = [
    _index_index_component__WEBPACK_IMPORTED_MODULE_2__["CurrencyIndexComponent"],
    _form_form_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyFormComponent"]
];
class CurrencyModule {
}
CurrencyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CurrencyModule });
CurrencyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CurrencyModule_Factory(t) { return new (t || CurrencyModule)(); }, imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _currency_routing_module__WEBPACK_IMPORTED_MODULE_1__["CurrencyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CurrencyModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_2__["CurrencyIndexComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyFormComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _currency_routing_module__WEBPACK_IMPORTED_MODULE_1__["CurrencyRoutingModule"]] }); })();


/***/ }),

/***/ "rSz6":
/*!**********************************************************!*\
  !*** ./src/app/routes/currency/index/index.component.ts ***!
  \**********************************************************/
/*! exports provided: CurrencyIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyIndexComponent", function() { return CurrencyIndexComponent; });
/* harmony import */ var src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/params */ "ExrR");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/form.component */ "QrtV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/cache */ "luDG");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _delon_abc_st__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @delon/abc/st */ "DGaY");












const _c0 = ["st"];
function CurrencyIndexComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" 1 ", item_r2.currency_code_from, " = ", item_r2.rate, " ", item_r2.currency_code_to, " ");
} }
const _c1 = function () { return { xs: 6, sm: 16, md: 24, lg: 32 }; };
class CurrencyIndexComponent {
    constructor(http, modal, cache, msg, cdr) {
        this.http = http;
        this.modal = modal;
        this.cache = cache;
        this.msg = msg;
        this.cdr = cdr;
        this.loading = true;
        this.list = [];
        this.q = {
            page: 1,
            pageSize: 100,
            name: '',
            ledger_id: 0,
        };
        this.columns = [
            { title: '货币', index: 'currency_code_from' },
            { title: '汇率', index: 'rate' },
            { title: '描述', render: 'custom' },
            { title: '时间', type: 'date', index: 'updated_at' },
            {
                title: '',
                buttons: [
                    {
                        icon: 'edit',
                        click: (item) => this.form(item),
                    },
                    {
                        icon: 'delete',
                        type: 'del',
                        pop: {
                            title: '确定要删除吗？',
                            okType: 'danger',
                        },
                        click: (record, _modal, comp) => {
                            this.delete(record, comp);
                        },
                    },
                ],
            },
        ];
    }
    ngOnInit() {
        this.getData();
        this.loadCodes();
        this.ledger = this.cache.getNone(src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__["params"].cacheKey.defaultLedger);
        this.base_currency_code = this.ledger.base_currency_code;
    }
    getData() {
        this.loading = true;
        this.q.ledger_id = this.cache.getNone(src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__["params"].cacheKey.defaultIdLedger);
        this.http.get('/api/currencies', this.q).subscribe((res) => {
            this.list = res.data.items;
            this.pagination = res.data._meta;
            this.loading = false;
        });
    }
    form(record = {}) {
        this.modal.create(_form_form_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyFormComponent"], { record: record, codes: this.codes, base_currency_code: this.base_currency_code }, { size: 'md' }).subscribe((res) => {
            if (record.id) {
                this.getData();
            }
            else {
                this.list.splice(0, 0, res);
                this.list = [...this.list];
            }
        });
    }
    delete(record, comp) {
        this.http.delete(`/api/currencies/${record.id}`).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.code) !== 0) {
                this.msg.warning(res === null || res === void 0 ? void 0 : res.message);
                return;
            }
            // tslint:disable-next-line: no-non-null-assertion
            comp.removeRow(record);
            // this.getData();
            this.msg.success('删除成功');
        });
    }
    loadCodes() {
        this.http.get('/api/currencies/codes').subscribe((res) => {
            if (res.code !== 0) {
                this.msg.warning(res.message);
                return;
            }
            this.codes = res.data.filter((item) => item.code !== this.base_currency_code);
            this.cdr.detectChanges();
        });
    }
    submit(value) {
        if (value.name) {
            this.q.name = value.name;
            this.getData();
        }
    }
}
CurrencyIndexComponent.ɵfac = function CurrencyIndexComponent_Factory(t) { return new (t || CurrencyIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_cache__WEBPACK_IMPORTED_MODULE_4__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
CurrencyIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CurrencyIndexComponent, selectors: [["app-currency-index"]], viewQuery: function CurrencyIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.st = _t.first);
    } }, decls: 10, vars: 4, consts: [[1, "pt-lg"], ["nz-row", "", 3, "nzGutter"], ["nz-col", ""], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "data", "columns"], ["st", ""], ["st-row", "custom"]], template: function CurrencyIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CurrencyIndexComponent_Template_button_click_4_listener() { return ctx.form(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u65B0\u5EFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "st", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CurrencyIndexComponent_ng_template_9_Template, 1, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], _delon_abc_st__WEBPACK_IMPORTED_MODULE_11__["STComponent"], _delon_abc_st__WEBPACK_IMPORTED_MODULE_11__["STRowDirective"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=currency-currency-module.js.map