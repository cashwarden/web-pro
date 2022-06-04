(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tag-tag-module"],{

/***/ "/f82":
/*!**************************************************!*\
  !*** ./src/app/routes/tag/tag-routing.module.ts ***!
  \**************************************************/
/*! exports provided: TagRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRoutingModule", function() { return TagRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "Ct7y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["TagIndexComponent"] }];
class TagRoutingModule {
}
TagRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TagRoutingModule });
TagRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TagRoutingModule_Factory(t) { return new (t || TagRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TagRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Ct7y":
/*!*****************************************************!*\
  !*** ./src/app/routes/tag/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: TagIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagIndexComponent", function() { return TagIndexComponent; });
/* harmony import */ var src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/params */ "ExrR");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/form.component */ "m70I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/cache */ "luDG");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/form */ "ok2U");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _delon_abc_st__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @delon/abc/st */ "DGaY");













const _c0 = ["st"];
const _c1 = function () { return { xs: 6, sm: 16, md: 24, lg: 32 }; };
class TagIndexComponent {
    constructor(http, modal, cache, msg) {
        this.http = http;
        this.modal = modal;
        this.cache = cache;
        this.msg = msg;
        this.loading = true;
        this.list = [];
        this.q = {
            page: 1,
            pageSize: 100,
            name: '',
            ledger_id: 0,
        };
        this.searchSchema = {
            properties: {
                name: {
                    type: 'string',
                    title: '名称',
                },
            },
        };
        this.columns = [
            { title: '名称', index: 'name' },
            { title: '次数', index: 'count' },
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
    }
    getData() {
        this.loading = true;
        this.q.ledger_id = this.cache.getNone(src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__["params"].cacheKey.defaultIdLedger);
        this.http.get('/api/tags', this.q).subscribe((res) => {
            this.list = res.data.items;
            this.pagination = res.data._meta;
            this.loading = false;
        });
    }
    form(record = {}) {
        this.modal.create(_form_form_component__WEBPACK_IMPORTED_MODULE_1__["TagFormComponent"], { record }, { size: 'md' }).subscribe((res) => {
            if (record.id) {
                // record = res;
                this.getData();
            }
            else {
                this.list.splice(0, 0, res);
                this.list = [...this.list];
            }
        });
    }
    delete(record, comp) {
        this.http.delete(`/api/tags/${record.id}`).subscribe((res) => {
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
    submit(value) {
        if (value.name) {
            this.q.name = value.name;
            this.getData();
        }
    }
}
TagIndexComponent.ɵfac = function TagIndexComponent_Factory(t) { return new (t || TagIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_cache__WEBPACK_IMPORTED_MODULE_4__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
TagIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TagIndexComponent, selectors: [["app-tag-index"]], viewQuery: function TagIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.st = _t.first);
    } }, decls: 11, vars: 5, consts: [[1, "pt-lg"], ["nz-row", "", 3, "nzGutter"], ["nz-col", ""], ["mode", "search", 3, "schema", "formSubmit", "formReset"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "data", "columns"], ["st", ""]], template: function TagIndexComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "sf", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("formSubmit", function TagIndexComponent_Template_sf_formSubmit_4_listener($event) { return ctx.submit($event); })("formReset", function TagIndexComponent_Template_sf_formReset_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _r0.reset($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TagIndexComponent_Template_button_click_6_listener() { return ctx.form(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u65B0\u5EFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "st", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("schema", ctx.searchSchema);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _delon_form__WEBPACK_IMPORTED_MODULE_8__["SFComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _delon_abc_st__WEBPACK_IMPORTED_MODULE_12__["STComponent"]], encapsulation: 2 });


/***/ }),

/***/ "m70I":
/*!***************************************************!*\
  !*** ./src/app/routes/tag/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: TagFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFormComponent", function() { return TagFormComponent; });
/* harmony import */ var src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/params */ "ExrR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/cache */ "luDG");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/form */ "ok2U");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");










const _c0 = ["sf"];
class TagFormComponent {
    constructor(modal, msgSrv, http, cache) {
        this.modal = modal;
        this.msgSrv = msgSrv;
        this.http = http;
        this.cache = cache;
        this.record = {};
        this.ledger_id = 0;
        this.schema = {
            properties: {
                name: { type: 'string', title: '名称' },
            },
            required: ['name'],
        };
        this.ui = {
            '*': {
                spanLabelFixed: 100,
                grid: { span: 24 },
            },
        };
    }
    ngOnInit() {
        this.ledger_id = this.cache.getNone(src_app_shared_params__WEBPACK_IMPORTED_MODULE_0__["params"].cacheKey.defaultIdLedger);
    }
    save(value) {
        const url = this.record.id ? `/${this.record.id}` : '';
        const method = this.record.id ? 'put' : 'post';
        value.ledger_id = this.ledger_id;
        this.http.request(method, `/api/tags${url}`, { body: value }).subscribe((res) => {
            if (res.code !== 0) {
                this.msgSrv.warning(res.message);
                return;
            }
            this.msgSrv.success('保存成功');
            this.modal.close(res.data);
        });
    }
    close() {
        this.modal.destroy();
    }
}
TagFormComponent.ɵfac = function TagFormComponent_Factory(t) { return new (t || TagFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"])); };
TagFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagFormComponent, selectors: [["app-tag-form"]], viewQuery: function TagFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sf = _t.first);
    } }, decls: 10, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["mode", "edit", "button", "none", 3, "schema", "ui", "formData"], ["sf", ""], [1, "modal-footer"], ["nz-button", "", "type", "button", 3, "click"], ["nz-button", "", "type", "submit", "nzType", "primary", 3, "disabled", "nzLoading", "click"]], template: function TagFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u7F16\u8F91\u6807\u7B7E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sf", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagFormComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagFormComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u4FDD\u5B58 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("schema", ctx.schema)("ui", ctx.ui)("formData", ctx.record);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid)("nzLoading", ctx.http.loading);
    } }, directives: [_delon_form__WEBPACK_IMPORTED_MODULE_6__["SFComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ "pIk6":
/*!******************************************!*\
  !*** ./src/app/routes/tag/tag.module.ts ***!
  \******************************************/
/*! exports provided: TagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModule", function() { return TagModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _tag_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-routing.module */ "/f82");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "m70I");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "Ct7y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const COMPONENTS = [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["TagIndexComponent"]];
const COMPONENTS_NOROUNT = [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["TagFormComponent"]];
class TagModule {
}
TagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TagModule });
TagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function TagModule_Factory(t) { return new (t || TagModule)(); }, imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _tag_routing_module__WEBPACK_IMPORTED_MODULE_1__["TagRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TagModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["TagIndexComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_2__["TagFormComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _tag_routing_module__WEBPACK_IMPORTED_MODULE_1__["TagRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=tag-tag-module.js.map