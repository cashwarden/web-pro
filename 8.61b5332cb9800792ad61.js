(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2lp2":function(e,t,n){"use strict";n.r(t),n.d(t,"BudgetModule",function(){return Z});var o=n("M0ag"),i=n("tyNb"),a=n("ExrR"),c=n("sWYD"),r=n("fXoL"),s=n("dEAy"),l=n("PScX"),d=n("Ac7g"),b=n("luDG"),g=n("3Pt+"),u=n("ocnv"),m=n("O3k0"),p=n("PTRe"),h=n("bE2y"),f=n("zAKX"),z=n("ofXK"),V=n("C2AL"),y=n("EGpF"),_=n("0lU3"),W=n("OzZK"),C=n("RwU8"),M=n("FwiY");function v(e,t){if(1&e&&(r.Wb(0,"nz-option",36),r.Rb(1,"i",37),r.Kc(2),r.Vb()),2&e){const e=t.$implicit;r.oc("nzLabel",e.name)("nzValue",e.id),r.Cb(1),r.qc("nzIconfont","icon-",e.icon_name,""),r.Cb(1),r.Mc(" ",e.name," ")}}function P(e,t){if(1&e){const e=r.Xb();r.Wb(0,"se",38),r.Wb(1,"nz-input-group",19),r.Wb(2,"input",39),r.dc("ngModelChange",function(t){return r.Ac(e),r.gc().form.init_amount=t}),r.Vb(),r.Vb(),r.Vb()}if(2&e){const e=r.gc();r.Cb(2),r.oc("ngModel",e.form.init_amount)}}function x(e,t){if(1&e&&r.Rb(0,"nz-option",40),2&e){const e=t.$implicit;r.oc("nzLabel",e.label)("nzValue",e.value)}}function I(e,t){if(1&e&&r.Rb(0,"nz-option",40),2&e){const e=t.$implicit;r.oc("nzLabel",e.label)("nzValue",e.value)}}let S=(()=>{class e{constructor(e,t,n,o){this.modal=e,this.msgSrv=t,this.http=n,this.cache=o,this.record={},this.selectData={},this.dateMode="month",this.form={name:"",if_keywords:[],ledger_id:0,amount:"",transaction_type:"expense",period:"month",category_ids:[],exclude_tags:"",include_tags:"",rollover:!1,init_amount:"",started_at:null,ended_at:null},this.category_ids=[]}ngOnInit(){this.record.id&&(this.form=Object.assign({},this.record),this.dateMode="one_time"===this.form.period?"date":this.form.period),this.form.ledger_id=this.cache.getNone(a.a.cacheKey.defaultIdLedger),this.changeCategoryIds()}changeTransactionType(){this.form.category_ids=[],this.changeCategoryIds()}changeCategoryIds(){this.category_ids=this.selectData.category_id.filter(e=>e.transaction_type===this.form.transaction_type)}save(e){const t=this.record.id?`/${this.record.id}`:"";e.started_at=Object(c.a)(new Date(e.started_at),"yyyy-MM-dd"),e.ended_at=Object(c.a)(new Date(e.ended_at),"yyyy-MM-dd"),this.http.request(this.record.id?"put":"post",`/api/budget-configs${t}`,{body:e}).subscribe(e=>{0===e.code?(this.msgSrv.success("\u4fdd\u5b58\u6210\u529f"),this.modal.close(e.data)):this.msgSrv.warning(e.message)})}close(){this.modal.destroy()}changePeriod(){this.dateMode="one_time"===this.form.period?"date":this.form.period}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(s.b),r.Qb(l.e),r.Qb(d.p),r.Qb(b.a))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-budget-form"]],decls:50,vars:17,consts:[[1,"modal-header"],[1,"modal-title"],["nz-form","","se-container","1",3,"ngSubmit"],["f","ngForm"],["label","\u540d\u79f0","required",""],["nz-input","","name","name","required","",3,"ngModel","ngModelChange"],["label","\u4ea4\u6613\u7c7b\u578b","required",""],["nzButtonStyle","solid","name","transaction_type",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","expense"],["nz-radio-button","","nzValue","income"],["label","\u7c7b\u522b","required",""],["name","category_ids","nzMode","multiple","required","",3,"ngModel","ngModelChange"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["label","\u5468\u671f","required",""],["nzButtonStyle","solid","name","period",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","month"],["nz-radio-button","","nzValue","year"],["nz-radio-button","","nzValue","one_time"],["label","\u9884\u7b97\u91d1\u989d","required",""],["nzAddOnAfter","CNY"],["nz-input","","type","number","name","amount","required","",3,"ngModel","ngModelChange"],["label","\u7ed3\u8f6c","col","1"],["name","exclude_from_stats",3,"ngModel","ngModelChange"],["label","\u521d\u59cb\u9884\u7b97",4,"ngIf"],["label","\u5305\u542b\u6807\u7b7e"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","\u9009\u62e9\u4e00\u4e2a","name","include_tags",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["label","\u6392\u9664\u6807\u7b7e"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","\u9009\u62e9\u4e00\u4e2a","name","exclude_tags",3,"ngModel","ngModelChange"],["label","\u5f00\u59cb\u65e5\u671f","required",""],["name","started_at","required","",3,"ngModel","nzMode","ngModelChange"],["label","\u7ed3\u675f\u65e5\u671f","required",""],["name","ended_at","required","",3,"ngModel","nzMode","ngModelChange"],["col","1"],["nz-button","","type","button",3,"click"],["nz-button","","nzType","primary",3,"disabled"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",3,"nzIconfont"],["label","\u521d\u59cb\u9884\u7b97"],["nz-input","","type","number","name","init_amount",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue"]],template:function(e,t){if(1&e&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Kc(2,"\u7f16\u8f91\u9884\u7b97"),r.Vb(),r.Vb(),r.Wb(3,"form",2,3),r.dc("ngSubmit",function(){return t.save(t.form)}),r.Wb(5,"se",4),r.Wb(6,"input",5),r.dc("ngModelChange",function(e){return t.form.name=e}),r.Vb(),r.Vb(),r.Wb(7,"se",6),r.Wb(8,"nz-radio-group",7),r.dc("ngModelChange",function(e){return t.form.transaction_type=e})("ngModelChange",function(){return t.changeTransactionType()}),r.Wb(9,"label",8),r.Wb(10,"span"),r.Kc(11,"\u652f\u51fa"),r.Vb(),r.Vb(),r.Wb(12,"label",9),r.Wb(13,"span"),r.Kc(14,"\u6536\u5165"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(15,"se",10),r.Wb(16,"nz-select",11),r.dc("ngModelChange",function(e){return t.form.category_ids=e}),r.Ic(17,v,3,4,"nz-option",12),r.Vb(),r.Vb(),r.Wb(18,"se",13),r.Wb(19,"nz-radio-group",14),r.dc("ngModelChange",function(e){return t.form.period=e})("ngModelChange",function(){return t.changePeriod()}),r.Wb(20,"label",15),r.Wb(21,"span"),r.Kc(22,"\u6bcf\u6708"),r.Vb(),r.Vb(),r.Wb(23,"label",16),r.Wb(24,"span"),r.Kc(25,"\u6bcf\u5e74"),r.Vb(),r.Vb(),r.Wb(26,"label",17),r.Wb(27,"span"),r.Kc(28,"\u4e00\u6b21\u6027"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(29,"se",18),r.Wb(30,"nz-input-group",19),r.Wb(31,"input",20),r.dc("ngModelChange",function(e){return t.form.amount=e}),r.Vb(),r.Vb(),r.Vb(),r.Wb(32,"se",21),r.Wb(33,"nz-switch",22),r.dc("ngModelChange",function(e){return t.form.rollover=e}),r.Vb(),r.Vb(),r.Ic(34,P,3,1,"se",23),r.Wb(35,"se",24),r.Wb(36,"nz-select",25),r.dc("ngModelChange",function(e){return t.form.include_tags=e}),r.Ic(37,x,1,2,"nz-option",26),r.Vb(),r.Vb(),r.Wb(38,"se",27),r.Wb(39,"nz-select",28),r.dc("ngModelChange",function(e){return t.form.exclude_tags=e}),r.Ic(40,I,1,2,"nz-option",26),r.Vb(),r.Vb(),r.Wb(41,"se",29),r.Wb(42,"nz-date-picker",30),r.dc("ngModelChange",function(e){return t.form.started_at=e}),r.Vb(),r.Vb(),r.Wb(43,"se",31),r.Wb(44,"nz-date-picker",32),r.dc("ngModelChange",function(e){return t.form.ended_at=e}),r.Vb(),r.Vb(),r.Wb(45,"se",33),r.Wb(46,"button",34),r.dc("click",function(){return t.close()}),r.Kc(47,"\u5173\u95ed"),r.Vb(),r.Wb(48,"button",35),r.Kc(49,"\u4fdd\u5b58"),r.Vb(),r.Vb(),r.Vb()),2&e){const e=r.xc(4);r.Cb(6),r.oc("ngModel",t.form.name),r.Cb(2),r.oc("ngModel",t.form.transaction_type),r.Cb(8),r.oc("ngModel",t.form.category_ids),r.Cb(1),r.oc("ngForOf",t.category_ids),r.Cb(2),r.oc("ngModel",t.form.period),r.Cb(12),r.oc("ngModel",t.form.amount),r.Cb(2),r.oc("ngModel",t.form.rollover),r.Cb(1),r.oc("ngIf",t.form.rollover),r.Cb(2),r.oc("ngModel",t.form.include_tags),r.Cb(1),r.oc("ngForOf",t.selectData.tags),r.Cb(2),r.oc("ngModel",t.form.exclude_tags),r.Cb(1),r.oc("ngForOf",t.selectData.tags),r.Cb(2),r.oc("ngModel",t.form.started_at)("nzMode",t.dateMode),r.Cb(2),r.oc("ngModel",t.form.ended_at)("nzMode",t.dateMode),r.Cb(4),r.oc("disabled",e.invalid)}},directives:[g.u,g.n,g.o,u.b,m.b,m.a,p.b,g.d,g.s,g.m,g.p,h.c,h.b,h.a,f.e,z.n,V.a,p.c,g.q,y.a,z.o,_.a,W.a,C.a,f.a,M.a],encapsulation:2}),e})();var K=n("JA5x"),w=n("B+r4"),D=n("ok2U"),O=n("Ff2k"),q=n("5vDB"),T=n("ngc+"),$=n("W9fG"),k=n("KupA"),L=n("0lRi"),R=n("SKKP");function A(e,t){if(1&e&&r.Rb(0,"nz-divider",9),2&e){const e=r.gc().$implicit;r.oc("nzText",e.name)}}function F(e,t){if(1&e){const e=r.Xb();r.Wb(0,"strong"),r.Wb(1,"a",17),r.dc("click",function(){return r.Ac(e),r.gc(3).view()}),r.Kc(2),r.Vb(),r.Vb(),r.Kc(3," \u5269\u4f59\u989d\u5ea6 ")}if(2&e){const e=r.gc().$implicit;r.Cb(2),r.Lc(e.name)}}function j(e,t){if(1&e&&r.Rb(0,"nz-progress",20),2&e){const e=r.gc(2).$implicit;r.oc("nzPercent",null==e.budgetProgress?null:e.budgetProgress.progress)("nzStatus",(null==e.budgetProgress?null:e.budgetProgress.progress)>100?"exception":"normal")("nzWidth",50)}}function Q(e,t){1&e&&r.Rb(0,"nz-progress",21),2&e&&r.oc("nzPercent",0)("nzWidth",50)}function J(e,t){if(1&e&&(r.Ic(0,j,1,3,"nz-progress",18),r.Ic(1,Q,1,2,"nz-progress",19)),2&e){const e=r.gc().$implicit;r.oc("ngIf",e.budgetProgress.started_at),r.Cb(1),r.oc("ngIf",!e.budgetProgress.started_at)}}function G(e,t){if(1&e){const e=r.Xb();r.Wb(0,"span",15),r.Wb(1,"i",22),r.dc("click",function(){r.Ac(e);const t=r.gc().$implicit;return r.gc(2).form(t)}),r.Vb(),r.Vb(),r.Wb(2,"span",15),r.Wb(3,"i",23),r.dc("click",function(){r.Ac(e);const t=r.gc().$implicit;return r.gc(2).copy(t)}),r.Vb(),r.Vb(),r.Wb(4,"span",15),r.Wb(5,"i",24),r.dc("nzOnConfirm",function(){r.Ac(e);const t=r.gc().$implicit;return r.gc(2).delete(t)}),r.Vb(),r.Vb()}}function N(e,t){if(1&e&&(r.Wb(0,"sv-container",25),r.Wb(1,"sv",26),r.Rb(2,"nz-progress",27),r.Vb(),r.Wb(3,"sv",28),r.Kc(4),r.Vb(),r.Wb(5,"sv",29),r.Kc(6),r.hc(7,"_date"),r.hc(8,"_date"),r.Vb(),r.Wb(9,"sv",30),r.Kc(10),r.Vb(),r.Wb(11,"sv",31),r.Kc(12),r.Vb(),r.Wb(13,"sv",32),r.Rb(14,"nz-badge",33),r.Vb(),r.Wb(15,"sv",34),r.Kc(16),r.Vb(),r.Wb(17,"sv",35),r.Kc(18),r.Vb(),r.Vb()),2&e){const e=r.gc().$implicit;r.Cb(2),r.oc("nzPercent",null==e.budgetProgress?null:e.budgetProgress.progress)("nzStatus",(null==e.budgetProgress?null:e.budgetProgress.progress)>100?"exception":"normal")("nzShowInfo",!1),r.Cb(2),r.Mc(" ",e.category_ids_txt," "),r.Cb(2),r.Nc(" ",r.jc(7,12,e.budgetProgress.started_at,"yyyy-MM-dd"),"\uff5e",r.jc(8,15,e.budgetProgress.ended_at,"yyyy-MM-dd")," "),r.Cb(4),r.Lc(e.rollover?"\u662f":"\u5426"),r.Cb(2),r.Lc(e.period_txt),r.Cb(2),r.oc("nzColor","expense"===e.transaction_type?"green":"red")("nzText",e.transaction_type_txt),r.Cb(2),r.Lc(e.include_tags),r.Cb(2),r.Lc(e.exclude_tags)}}function X(e,t){if(1&e&&(r.Wb(0,"g2-card",10),r.hc(1,"_currency"),r.Ic(2,F,4,1,"ng-template",null,11,r.Jc),r.Ic(4,J,2,2,"ng-template",null,12,r.Jc),r.Ic(6,G,6,0,"ng-template",null,13,r.Jc),r.Wb(8,"div",14),r.Wb(9,"span"),r.Kc(10),r.Vb(),r.Wb(11,"span",15),r.Kc(12),r.Vb(),r.Vb(),r.Ic(13,N,19,18,"ng-template",null,16,r.Jc),r.Vb()),2&e){const e=t.$implicit,n=r.xc(3),o=r.xc(5),i=r.xc(7),a=r.xc(14);r.oc("title",n)("bordered",!0)("total",r.ic(1,8,null==e.budgetProgress?null:e.budgetProgress.surplus_amount))("footer",a)("avatar",o)("action",i),r.Cb(10),r.Mc("\u5df2\u7528: ",null==e.budgetProgress?null:e.budgetProgress.actual_amount,""),r.Cb(2),r.Mc("\u9884\u7b97: ",null==e.budgetProgress?null:e.budgetProgress.budget_amount,"")}}const B=function(){return{gutter:24,lg:8,md:12,sm:24,xs:24}};function E(e,t){if(1&e&&(r.Wb(0,"div"),r.Ic(1,A,1,1,"nz-divider",6),r.Wb(2,"nz-list",7),r.Ic(3,X,15,10,"ng-template",null,8,r.Jc),r.Vb(),r.Vb()),2&e){const e=t.$implicit,n=r.xc(4),o=r.gc();r.Cb(1),r.oc("ngIf",e.items.length),r.Cb(1),r.oc("nzDataSource",e.items)("nzLoading",o.loading)("nzRenderItem",n)("nzGrid",r.rc(5,B))}}const U=function(){return{xs:6,sm:16,md:24,lg:32}},Y=[{path:"index",component:(()=>{class e{constructor(e,t,n,o,i){this.http=e,this.modal=t,this.message=n,this.cache=o,this.cdr=i,this.loading=!0,this.list=[],this.selectData={},this.ledger_id=0,this.q={page:1,pageSize:100,name:"",ledger_id:0,transaction_type:""},this.url="/api/budget-configs",this.searchSchema={properties:{name:{type:"string",title:"\u540d\u79f0"}}}}ngOnInit(){this.ledger_id=this.cache.getNone(a.a.cacheKey.defaultIdLedger),this.getData(),this.loadSelect("/api/categories","category_id"),this.loadSelect("/api/tags","tags")}getData(){this.loading=!0,this.q.ledger_id=this.ledger_id,this.http.get(this.url,this.q).subscribe(e=>{const t=e.data,n=[{name:"\u6708\u5ea6\u989d\u5ea6",items:t.items.filter(e=>"month"===e.period)},{name:"\u5e74\u5ea6\u989d\u5ea6",items:t.items.filter(e=>"year"===e.period)},{name:"\u4e00\u6b21\u6027\u989d\u5ea6",items:t.items.filter(e=>"one_time"===e.period)}];this.list=n.filter(e=>e.items.length>0),this.pagination=t._meta,this.loading=!1,this.cdr.detectChanges()})}form(e={}){this.modal.create(S,{record:e,selectData:this.selectData},{size:"md"}).subscribe(e=>{this.getData()})}copy(e){this.http.post(`${this.url}/${e.id}/copy`).subscribe(e=>{0===(null==e?void 0:e.code)?(this.getData(),this.message.success("\u590d\u5236\u6210\u529f")):this.message.warning(null==e?void 0:e.message)})}view(){this.message.success("\u656c\u8bf7\u671f\u5f85")}delete(e){this.http.delete(`${this.url}/${e.id}`).subscribe(e=>{0===(null==e?void 0:e.code)?(this.getData(),this.message.success("\u5220\u9664\u6210\u529f")):this.message.warning(null==e?void 0:e.message)})}loadSelect(e,t){this.http.get(e,{pageSize:100,ledger_id:this.ledger_id}).subscribe(e=>{e.data&&(this.selectData[t]="tags"===t?e.data.items.map(e=>({value:e.name,label:e.name})):["account_id"].includes(t)?e.data.items.map(e=>({id:e.id,name:e.name,icon:e.icon_name})):"transaction_type"===t?e.data.map(e=>({value:e.type,label:e.name})):e.data.items)})}submit(e){e.name&&(this.q.name=e.name,this.getData())}reset(){this.q.name="",this.getData()}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(d.p),r.Qb(d.j),r.Qb(l.e),r.Qb(b.a),r.Qb(r.h))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-budget-index"]],decls:9,vars:4,consts:[[1,"pt-md"],["nz-row","",3,"nzGutter"],["nz-col",""],["mode","search",3,"schema","formSubmit","formReset"],["nz-button","","nzType","primary",3,"click"],[4,"ngFor","ngForOf"],["nzOrientation","left",3,"nzText",4,"ngIf"],[3,"nzDataSource","nzLoading","nzRenderItem","nzGrid"],["item",""],["nzOrientation","left",3,"nzText"],[3,"title","bordered","total","footer","avatar","action"],["title",""],["avatar",""],["action",""],[1,"d-flex","justify-content-between","text-truncate"],[1,"pl-sm"],["footer",""],[3,"click"],["nzType","circle",3,"nzPercent","nzStatus","nzWidth",4,"ngIf"],["nzType","circle","nzStatus","exception",3,"nzPercent","nzWidth",4,"ngIf"],["nzType","circle",3,"nzPercent","nzStatus","nzWidth"],["nzType","circle","nzStatus","exception",3,"nzPercent","nzWidth"],["nz-icon","","nzType","edit",3,"click"],["nz-icon","","nzType","copy",3,"click"],["nz-icon","","nzType","delete","nz-popconfirm","","nzPopconfirmTitle","\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f","nzPopconfirmPlacement","bottom",3,"nzOnConfirm"],["size","small","col","2"],["label","\u8fdb\u5ea6","col","1"],[3,"nzPercent","nzStatus","nzShowInfo"],["label","\u7c7b\u522b","col","1",1,"text-truncate"],["label","\u65f6\u95f4"],["label","\u8f6c\u7ed3"],["label","\u5468\u671f"],["label","\u4ea4\u6613\u7c7b\u578b"],[3,"nzColor","nzText"],["label","\u5305\u542b\u6807\u7b7e"],["label","\u6392\u9664\u6807\u7b7e"]],template:function(e,t){1&e&&(r.Wb(0,"div",0),r.Wb(1,"nz-card"),r.Wb(2,"div",1),r.Wb(3,"div",2),r.Wb(4,"sf",3),r.dc("formSubmit",function(e){return t.submit(e)})("formReset",function(){return t.reset()}),r.Vb(),r.Vb(),r.Wb(5,"div",2),r.Wb(6,"button",4),r.dc("click",function(){return t.form()}),r.Kc(7,"\u65b0\u5efa"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Ic(8,E,5,6,"div",5)),2&e&&(r.Cb(2),r.oc("nzGutter",r.rc(3,U)),r.Cb(2),r.oc("schema",t.searchSchema),r.Cb(4),r.oc("ngForOf",t.list))},directives:[K.a,w.c,w.a,D.b,W.a,C.a,V.a,z.n,z.o,O.a,O.b,q.a,T.a,$.a,M.a,k.a,L.b,L.a,R.a],pipes:[d.c,d.e],encapsulation:2}),e})()}];let H=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[i.n.forChild(Y)],i.n]}),e})(),Z=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[o.b,H]]}),e})()}}]);