(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recurrence-recurrence-module"],{

/***/ "N3d8":
/*!************************************************************!*\
  !*** ./src/app/routes/recurrence/index/index.component.ts ***!
  \************************************************************/
/*! exports provided: RecurrenceIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurrenceIndexComponent", function() { return RecurrenceIndexComponent; });
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/form.component */ "xK1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/form */ "ok2U");
/* harmony import */ var _delon_abc_st__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc/st */ "DGaY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["st"];
function RecurrenceIndexComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r2.transaction.type === "expense" ? "text-red" : "text-green");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", item_r2.transaction.type === "expense" ? "-" : "", " ", item_r2.transaction.currency_code, " ", item_r2.transaction.currency_amount, " ");
} }
const _c1 = function () { return { xs: 6, sm: 16, md: 24, lg: 32 }; };
class RecurrenceIndexComponent {
    constructor(http, modal, message) {
        this.http = http;
        this.modal = modal;
        this.message = message;
        this.loading = true;
        this.list = [];
        this.q = {
            page: 1,
            name: '',
        };
        this.url = `/api/recurrences`;
        this.searchSchema = {
            properties: {
                name: {
                    type: 'string',
                    title: '名称',
                },
            },
        };
        this.columns = [
            { title: '名称 ', index: 'name' },
            { title: '账本', index: 'transaction.ledger_name' },
            { title: '交易', render: 'custom' },
            { title: '频率', index: 'frequency_text' },
            { title: '时间值', index: 'schedule' },
            { title: '开始时间', type: 'date', index: 'started_at', dateFormat: 'yyyy-MM-dd' },
            { title: '下次执行时间', type: 'date', index: 'execution_date', dateFormat: 'yyyy-MM-dd' },
            {
                title: '状态',
                type: 'badge',
                index: 'status',
                badge: {
                    active: { text: '启用', color: 'success' },
                    unactivated: { text: '停用', color: 'default' },
                },
            },
            { title: '更新时间', type: 'date', index: 'updated_at' },
            {
                title: '',
                buttons: [
                    { icon: 'edit', type: 'modal', click: (item) => this.form(item) },
                    {
                        icon: 'play-circle',
                        click: (record) => this.updateStatus(record, 'active'),
                        iif: (record) => record.status === 'unactivated',
                        tooltip: `启用`,
                    },
                    {
                        icon: 'pause-circle',
                        click: (record) => this.updateStatus(record, 'unactivated'),
                        iif: (record) => record.status === 'active',
                        tooltip: `停用`,
                    },
                    {
                        icon: 'delete',
                        type: 'del',
                        pop: {
                            title: '确定要删除吗？',
                            okType: 'danger',
                        },
                        click: (record, _modal, comp) => {
                            this.delete(record);
                            // tslint:disable-next-line: no-non-null-assertion
                            comp.removeRow(record);
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
        this.http.get(this.url, this.q).subscribe((res) => {
            this.list = res.data.items;
            this.loading = false;
        });
    }
    form(record = {}) {
        this.modal.create(_form_form_component__WEBPACK_IMPORTED_MODULE_0__["RecurrenceFormComponent"], { record }, { size: 'md' }).subscribe((res) => {
            this.getData();
        });
    }
    copy(record) {
        this.http.post(`${this.url}/${record.id}/copy`).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.code) !== 0) {
                this.message.warning(res === null || res === void 0 ? void 0 : res.message);
                return;
            }
            this.list.splice(0, 0, res.data);
            this.list = [...this.list];
            this.message.success('复制成功');
        });
    }
    delete(record) {
        this.http.delete(`${this.url}/${record.id}`).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.code) !== 0) {
                this.message.warning(res === null || res === void 0 ? void 0 : res.message);
                return;
            }
            // this.getData();
            this.message.success('删除成功');
        });
    }
    updateStatus(record, status) {
        this.http.put(`${this.url}/${record.id}/status`, { status }).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.code) !== 0) {
                this.message.warning(res === null || res === void 0 ? void 0 : res.message);
                return;
            }
            this.getData();
            this.message.success('更新成功');
        });
    }
    submit(value) {
        this.q.name = value.name;
        this.getData();
    }
}
RecurrenceIndexComponent.ɵfac = function RecurrenceIndexComponent_Factory(t) { return new (t || RecurrenceIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_2__["ModalHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"])); };
RecurrenceIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecurrenceIndexComponent, selectors: [["app-recurrence-index"]], viewQuery: function RecurrenceIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.st = _t.first);
    } }, decls: 9, vars: 5, consts: [[1, "pt-lg"], ["nz-row", "", 3, "nzGutter"], ["nz-col", ""], ["mode", "search", 3, "schema", "formSubmit", "formReset"], [3, "data", "columns"], ["st", ""], ["st-row", "custom"], [3, "ngClass"]], template: function RecurrenceIndexComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "sf", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formSubmit", function RecurrenceIndexComponent_Template_sf_formSubmit_4_listener($event) { return ctx.submit($event); })("formReset", function RecurrenceIndexComponent_Template_sf_formReset_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return _r0.reset($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "st", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RecurrenceIndexComponent_ng_template_8_Template, 2, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("schema", ctx.searchSchema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _delon_form__WEBPACK_IMPORTED_MODULE_6__["SFComponent"], _delon_abc_st__WEBPACK_IMPORTED_MODULE_7__["STComponent"], _delon_abc_st__WEBPACK_IMPORTED_MODULE_7__["STRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "O+XU":
/*!********************************************************!*\
  !*** ./src/app/routes/recurrence/recurrence.module.ts ***!
  \********************************************************/
/*! exports provided: RecurrenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurrenceModule", function() { return RecurrenceModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _recurrence_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recurrence-routing.module */ "Ob82");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "N3d8");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "xK1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const COMPONENTS = [_index_index_component__WEBPACK_IMPORTED_MODULE_2__["RecurrenceIndexComponent"]];
const COMPONENTS_NOROUNT = [_form_form_component__WEBPACK_IMPORTED_MODULE_3__["RecurrenceFormComponent"]];
class RecurrenceModule {
}
RecurrenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RecurrenceModule });
RecurrenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function RecurrenceModule_Factory(t) { return new (t || RecurrenceModule)(); }, imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _recurrence_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecurrenceRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RecurrenceModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_2__["RecurrenceIndexComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_3__["RecurrenceFormComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _recurrence_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecurrenceRoutingModule"]] }); })();


/***/ }),

/***/ "Ob82":
/*!****************************************************************!*\
  !*** ./src/app/routes/recurrence/recurrence-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RecurrenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurrenceRoutingModule", function() { return RecurrenceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ "N3d8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["RecurrenceIndexComponent"] }];
class RecurrenceRoutingModule {
}
RecurrenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RecurrenceRoutingModule });
RecurrenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function RecurrenceRoutingModule_Factory(t) { return new (t || RecurrenceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RecurrenceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=recurrence-recurrence-module.js.map