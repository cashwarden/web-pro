(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yNfe:function(t,e,a){"use strict";a.r(e),a.d(e,"AnalysisModule",function(){return T});var n=a("M0ag"),i=a("tyNb"),c=a("2g7+"),o=a("QsJp"),s=a("ExrR"),r=a("NqGN"),d=a("fXoL"),b=a("Ac7g"),g=a("ofXK"),h=a("luDG"),l=a("PScX"),u=a("9H8w"),m=a("B+r4"),p=a("JA5x"),f=a("Ff2k"),y=a("f4vU"),z=a("J09d"),x=a("oyxB"),D=a("NBwf"),C=a("DGaY"),V=a("rMZv");const W=["st"];function S(t,e){if(1&t&&(d.Ub(0),d.Rb(1,"g2-pie",13),d.hc(2,"_currency"),d.Tb()),2&t){const t=d.gc();d.Cb(1),d.oc("hasLegend",!0)("total",d.ic(2,4,t.pieData.total.expense))("valueFormat",t.handlePieValueFormat)("data",t.pieData.expense)}}function _(t,e){if(1&t&&(d.Ub(0),d.Rb(1,"g2-pie",14),d.hc(2,"_currency"),d.Tb()),2&t){const t=d.gc();d.Cb(1),d.oc("hasLegend",!0)("total",d.ic(2,4,t.pieData.total.income))("valueFormat",t.handlePieValueFormat)("data",t.pieData.income)}}function q(t,e){if(1&t&&d.Rb(0,"g2-bar",20),2&t){const t=d.gc().$implicit,e=d.gc(2);d.oc("title","\u652f\u51fa"+t.name)("data",e.recordSumData.expense)}}function w(t,e){if(1&t&&d.Rb(0,"g2-bar",20),2&t){const t=d.gc().$implicit,e=d.gc(2);d.oc("title","\u6536\u5165"+t.name)("data",e.recordSumData.income)}}function L(t,e){if(1&t&&(d.Wb(0,"nz-tab",17),d.Wb(1,"div",18),d.Jc(2,q,1,2,"g2-bar",19),d.Vb(),d.Wb(3,"div",18),d.Jc(4,w,1,2,"g2-bar",19),d.Vb(),d.Vb()),2&t){const t=e.$implicit,a=d.gc(2);d.oc("nzTitle",t.name),d.Cb(2),d.oc("ngIf",t.show&&a.recordSumData.expense.length),d.Cb(2),d.oc("ngIf",t.show&&a.recordSumData.income.length)}}function v(t,e){if(1&t){const t=d.Xb();d.Wb(0,"nz-tabset",15),d.dc("nzSelectedIndexChange",function(e){return d.Bc(t),d.gc().changeTab(e)}),d.Jc(1,L,5,3,"nz-tab",16),d.Vb()}if(2&t){const t=d.gc();d.Cb(1),d.oc("ngForOf",t.tabs)}}function R(t,e){if(1&t){const t=d.Xb();d.Wb(0,"a",25),d.dc("click",function(){d.Bc(t);const a=e.$implicit;return d.gc(2).open(a.category_id)}),d.Lc(1),d.Vb()}if(2&t){const t=e.$implicit;d.Cb(1),d.Mc(t.category_name)}}function I(t,e){if(1&t&&(d.Wb(0,"tr"),d.Wb(1,"td"),d.Wb(2,"strong"),d.Lc(3,"\u7ed3\u4f59"),d.Vb(),d.Vb(),d.Wb(4,"td",26),d.Wb(5,"strong"),d.Lc(6),d.hc(7,"_currency"),d.Vb(),d.Vb(),d.Vb()),2&t){const t=d.gc(3);d.Cb(6),d.Mc(d.ic(7,1,t.data.total.surplus))}}function J(t,e){if(1&t&&(d.Wb(0,"tr"),d.Wb(1,"td"),d.Wb(2,"strong"),d.Lc(3,"\u5408\u8ba1"),d.Vb(),d.Vb(),d.Wb(4,"td",26),d.Wb(5,"strong"),d.Lc(6),d.hc(7,"_currency"),d.Vb(),d.Vb(),d.Vb(),d.Jc(8,I,8,3,"tr",5)),2&t){const t=d.gc().$implicit,e=d.gc();d.Cb(6),d.Mc(d.ic(7,2,null==e.data?null:e.data.total[t])),d.Cb(2),d.oc("ngIf","income"===t)}}const M=function(){return{show:!1}};function O(t,e){if(1&t&&(d.Ub(0),d.Wb(1,"st",21,22),d.Jc(3,R,2,1,"ng-template",23),d.Jc(4,J,9,4,"ng-template",null,24,d.Kc),d.Vb(),d.Tb()),2&t){const t=e.$implicit,a=d.yc(5),n=d.gc();d.Cb(1),d.oc("data",n.data?n.data[t]:null)("loading",n.loading)("columns",n.columns)("page",d.rc(5,M))("body",a)}}const F=[{path:"index",component:(()=>{class t{constructor(t,e,a,n,i,c){this.http=t,this.cdr=e,this.datePipe=a,this.cache=n,this.modal=i,this.msg=c,this.isVisible=!1,this.q={},this.date=[],this.loading=!0,this.types=["expense","income"],this.maxRecords=[],this.columns=[{title:"\u5206\u7c7b",render:"custom"},{title:"\u91d1\u989d",type:"number",index:"amount"}],this.tabs=[{key:"day",name:"\u65e5\u89c6\u56fe",show:!0},{key:"month",name:"\u6708\u89c6\u56fe"},{key:"year",name:"\u5e74\u89c6\u56fe"}]}ngOnInit(){this.date=Object(c.a)("month"),this.date&&(this.q.date=this.date.map(t=>this.datePipe.transform(t,"yyyy-MM-dd")).join("~")),this.q.ledger_id=this.cache.getNone(s.a.cacheKey.defaultIdLedger),this.getData(),this.getRecordSumData(),this.getMaxRecords()}getData(){this.loading=!0;const t={};Object.entries(this.q).filter(([,t])=>null!==t).map(([e,a])=>t[e]=a),this.q=t,this.http.get("/api/analysis/category",this.q).subscribe(t=>{this.data=Object(o.b)(t.data),this.pieData=Object(o.b)(t.data),this.pieData.expense=this.pieData.expense.map(t=>({x:t.category_name,y:t.amount})),this.pieData.income=this.pieData.income.map(t=>({x:t.category_name,y:t.amount})),this.loading=!1,this.cdr.detectChanges()})}getRecordSumData(){const t={};Object.entries(this.q).filter(([,t])=>null!==t).map(([e,a])=>t[e]=a),this.q=t,this.http.get("/api/analysis/date",this.q).subscribe(t=>{this.recordSumData=t.data,console.log(this.recordSumData),this.recordSumData.expense=this.recordSumData.expense.map(t=>({x:t.date,y:t.amount,color:"#f50"})),this.recordSumData.income=this.recordSumData.income.map(t=>({x:t.date,y:t.amount})),this.cdr.detectChanges()})}reloadData(t){t&&(this.q.ledger_id=this.cache.getNone(s.a.cacheKey.defaultIdLedger),this.q=t,this.getData(),this.getRecordSumData(),this.getMaxRecords())}getMaxRecords(){this.http.get("/api/records",{pageSize:6,transaction_type:"expense",ledger_id:this.q.ledger_id,sort:"-amount_cent",date:this.q.date}).subscribe(t=>{this.maxRecords=t.data.items,this.loading=!1,this.cdr.detectChanges()})}changeTab(t){this.tabs[t].show=!0,this.q.group_type=this.tabs[t].key,this.getRecordSumData(),this.cdr.detectChanges()}handlePieValueFormat(t){return Object(n.c)(t)}open(t){this.q.category_id=t,this.q.pageSize=100,this.q.reimbursement_status="none,todo",this.q.exclude_from_stats="false",this.modal.create(r.a,{q:this.q},{size:"md"}).subscribe(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(b.p),d.Qb(d.h),d.Qb(g.f),d.Qb(h.a),d.Qb(b.j),d.Qb(l.e))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-analysis-index"]],viewQuery:function(t,e){if(1&t&&d.Qc(W,1),2&t){let t;d.xc(t=d.ec())&&(e.st=t.first)}},decls:15,vars:14,consts:[[1,"pt-lg"],[3,"date","searched","reseted"],["nz-row","",3,"nzGutter"],["nz-col","","nzXs","24","nzSm","24","nzMd","24","nzLg","16"],["nzTitle","\u5206\u7c7b\u997c\u56fe",1,"mb-0",3,"nzLoading","nzBordered"],[4,"ngIf"],[1,"ant-card__body-nopadding","record-sum-card",3,"nzBordered"],[3,"nzSelectedIndexChange",4,"ngIf"],["nz-col","","nzXs","24","nzSm","24","nzMd","24","nzLg","8"],["nzTitle","\u5206\u7c7b\u7edf\u8ba1",1,"mb-0",3,"nzLoading","nzBordered"],[4,"ngFor","ngForOf"],["nzTitle","\u6700\u592710\u7b14\u652f\u51fa",1,"mb-0",3,"nzLoading","nzBordered"],[3,"items"],["title","\u603b\u652f\u51fa","subTitle","\u603b\u652f\u51fa","height","295",3,"hasLegend","total","valueFormat","data"],["title","\u603b\u6536\u5165","subTitle","\u603b\u6536\u5165","height","295",3,"hasLegend","total","valueFormat","data"],[3,"nzSelectedIndexChange"],[3,"nzTitle",4,"ngFor","ngForOf"],[3,"nzTitle"],[1,"bar"],["height","295",3,"title","data",4,"ngIf"],["height","295",3,"title","data"],["size","middle",3,"data","loading","columns","page","body"],["st",""],["st-row","custom"],["body",""],[3,"click"],[1,"text-right"]],template:function(t,e){1&t&&(d.Wb(0,"div",0),d.Wb(1,"app-record-search",1),d.dc("searched",function(t){return e.reloadData(t)})("reseted",function(t){return e.reloadData(t)}),d.Vb(),d.Vb(),d.Wb(2,"div",2),d.Wb(3,"div",3),d.Wb(4,"nz-card",4),d.Jc(5,S,3,6,"ng-container",5),d.Jc(6,_,3,6,"ng-container",5),d.Vb(),d.Wb(7,"nz-card",6),d.Jc(8,v,2,1,"nz-tabset",7),d.Vb(),d.Vb(),d.Wb(9,"div",8),d.Wb(10,"nz-card",9),d.Jc(11,O,6,6,"ng-container",10),d.Vb(),d.Wb(12,"nz-card",11),d.Wb(13,"nz-list"),d.Rb(14,"app-record-rows",12),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Cb(1),d.oc("date",e.date),d.Cb(1),d.oc("nzGutter",24),d.Cb(2),d.oc("nzLoading",e.loading)("nzBordered",!1),d.Cb(1),d.oc("ngIf",!e.loading),d.Cb(1),d.oc("ngIf",!e.loading),d.Cb(1),d.oc("nzBordered",!1),d.Cb(1),d.oc("ngIf",e.recordSumData),d.Cb(2),d.oc("nzLoading",e.loading)("nzBordered",!1),d.Cb(1),d.oc("ngForOf",e.types),d.Cb(1),d.oc("nzLoading",e.loading)("nzBordered",!1),d.Cb(2),d.oc("items",e.maxRecords))},directives:[u.a,m.c,m.a,p.a,g.o,g.n,f.a,y.a,z.a,x.b,x.a,D.a,C.a,C.c,V.l,V.b],pipes:[b.c],styles:["[_nghost-%COMP%]     .record-sum-card .bar{padding:0 24px 30px}[_nghost-%COMP%]     .record-sum-card .ant-tabs-nav-list{padding-left:24px}"]}),t})()}];let B=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[i.n.forChild(F)],i.n]}),t})(),T=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[n.b,B]]}),t})()}}]);