(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JSWD:function(e,t,n){"use strict";n.r(t),n.d(t,"FavoritesModule",(function(){return x}));var o=n("tyNb"),r=n("ofXK"),a=n("fXoL"),c=n("KvfK"),i=n("3Pt+"),s=n("bN9u"),g=n("lGQG"),b=n("wOwU"),p=n("eq+F"),u=n("pDGf"),l=n("Xa2L");let h=(()=>{class e{transform(e,t,n){return n.trim()||t.trim()?e.filter(e=>e.categories.join("").includes(n)).filter(e=>e.value.toLowerCase().includes(t.toLowerCase())):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=a.Kb({name:"search",type:e,pure:!0}),e})();function f(e,t){1&e&&(a.Qb(0,"button",14),a.wc(1,"\xd7"),a.Pb())}function d(e,t){if(1&e&&(a.Qb(0,"div",22),a.Mb(1,"input",23),a.Qb(2,"label",24),a.wc(3),a.Pb(),a.Pb()),2&e){const e=t.$implicit;a.zb(1),a.hc("id",e)("value",e),a.zb(1),a.hc("for",e),a.zb(1),a.yc(" ",e," ")}}function m(e,t){if(1&e&&(a.Ob(0),a.Mb(1,"input",15),a.Qb(2,"div",16),a.Qb(3,"p"),a.wc(4," Search in: "),a.Pb(),a.Qb(5,"div",17),a.uc(6,d,4,4,"div",18),a.Qb(7,"div",19),a.Mb(8,"input",20),a.Qb(9,"label",21),a.wc(10," search everywhere "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Nb()),2&e){const e=a.bc(3);a.zb(6),a.hc("ngForOf",e.jokeCategories)}}function v(e,t){1&e&&a.Mb(0,"app-favorite-card",25),2&e&&a.hc("joke",t.$implicit)}function P(e,t){if(1&e){const e=a.Rb();a.Ob(0),a.Qb(1,"form",7),a.Xb("submit",(function(){return a.oc(e),a.bc(2).reset()})),a.Qb(2,"div",8),a.Mb(3,"input",9),a.Qb(4,"label",10),a.wc(5," show search "),a.Pb(),a.uc(6,f,2,0,"button",11),a.Pb(),a.uc(7,m,11,1,"ng-container",12),a.Pb(),a.Qb(8,"div"),a.uc(9,v,1,1,"app-favorite-card",13),a.cc(10,"search"),a.Pb(),a.Nb()}if(2&e){const e=a.bc(2);a.zb(1),a.hc("formGroup",e.form),a.zb(5),a.hc("ngIf",e.getControlValue("showSearch")),a.zb(1),a.hc("ngIf",e.getControlValue("showSearch")),a.zb(2),a.hc("ngForOf",a.ec(10,4,e.jokeService.favorites,e.getControlValue("value")||"",e.getControlValue("category")||""))}}function C(e,t){if(1&e&&(a.Ob(0),a.uc(1,P,11,8,"ng-container",4),a.Nb()),2&e){const e=a.bc(),t=a.mc(9);a.zb(1),a.hc("ngIf",e.jokeService.favorites.length)("ngIfElse",t)}}function w(e,t){1&e&&a.Mb(0,"app-empty-container",26)}function M(e,t){1&e&&a.Mb(0,"mat-spinner",27)}let O=(()=>{class e{constructor(e,t,n,o){this.jokeService=e,this.fb=t,this.jokesDataService=n,this.authService=o,this.loading=!0}ngOnInit(){this.updateJokes(),this.jokeCategories=this.jokeService.getActualCategories(),this.setForm(),this.jokesDataService.currentLoadingState.subscribe(e=>{this.loading=e})}updateJokes(){this.authService.authenticated&&(this.jokesDataService.changeLoading(!0),this.jokesDataService.getDataFromDb().subscribe(e=>{this.jokeService.updateJokes(e)}).add(()=>this.jokesDataService.changeLoading(!1)))}getControlValue(e){return this.form.get(e).value}setForm(){this.form=this.fb.group({showSearch:[!1],value:[null],category:[null]})}reset(){this.form.reset()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(i.d),a.Lb(s.a),a.Lb(g.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-favorites-page"]],decls:12,vars:2,consts:[[1,"container"],[1,"nav"],["href","#","routerLink","/",1,"btn"],[1,"container-inner"],[4,"ngIf","ngIfElse"],["empty",""],["loader",""],[3,"formGroup","submit"],[1,"tag-group","show-search"],["type","checkbox","id","showSearch","formControlName","showSearch",1,"tags"],["for","showSearch"],["class","btn",4,"ngIf"],[4,"ngIf"],[3,"joke",4,"ngFor","ngForOf"],[1,"btn"],["type","text","appInputFocus","","placeholder","Search...","formControlName","value",1,"base-input"],[1,"category-wrapper"],[1,"category"],["class","tag-group",4,"ngFor","ngForOf"],[1,"tag-group","everywhere"],["type","radio","id","search-everywhere","formControlName","category","value","",1,"tags"],["for","search-everywhere"],[1,"tag-group"],["type","radio","formControlName","category",1,"tags",3,"id","value"],[3,"for"],[3,"joke"],["title","No jokes saved..."],[1,"spinner"]],template:function(e,t){if(1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"a",2),a.wc(3," Home "),a.Pb(),a.Qb(4,"h3"),a.wc(5,"My favorites jokes"),a.Pb(),a.Pb(),a.Qb(6,"div",3),a.uc(7,C,2,2,"ng-container",4),a.uc(8,w,1,0,"ng-template",null,5,a.vc),a.uc(10,M,1,0,"ng-template",null,6,a.vc),a.Pb(),a.Pb()),2&e){const e=a.mc(11);a.zb(7),a.hc("ngIf",!t.loading)("ngIfElse",e)}},directives:[o.c,r.k,i.r,i.m,i.f,i.a,i.l,i.e,r.j,i.c,b.a,i.o,p.a,u.a,l.b],pipes:[h],styles:[".container[_ngcontent-%COMP%]{padding:40px;display:flex;flex-direction:column;width:100%}.container-inner[_ngcontent-%COMP%]{width:80%;margin:0 auto}.container-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:0;margin-bottom:10px}@media (max-width:350px){.container-inner[_ngcontent-%COMP%]{width:90%}}.container[_ngcontent-%COMP%]   .base-input[_ngcontent-%COMP%]{width:40%;display:block;margin-top:0}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]{display:flex;align-items:baseline}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width:480px){.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]{flex-direction:column;margin-top:20px}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{font-size:.9rem}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:5px 20px}.container[_ngcontent-%COMP%]   .category-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:10px}}.container[_ngcontent-%COMP%]   .everywhere[_ngcontent-%COMP%]{flex-basis:100%;margin-top:15px}.container[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%]{margin-left:0;margin-bottom:20px;display:flex;justify-content:flex-start;align-items:baseline}.container[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:0;align-self:center;padding:5px 10px;line-height:10px;margin-left:30px}.container[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{margin-left:0}@media (max-width:480px){.container[_ngcontent-%COMP%]{padding:20px 10px;width:auto}.container[_ngcontent-%COMP%]   .base-input[_ngcontent-%COMP%]{width:100%;display:block}}.spinner[_ngcontent-%COMP%]{margin:35px auto}"]}),e})();var y=n("PCNd");let _=(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){if(this.authService.authenticated)return!0;this.authService.logout(),this.router.navigate(["/auth"],{queryParams:{returnUrl:t.url}})}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(g.a),a.Ub(o.b))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},providers:[_],imports:[[r.c,y.a,o.d.forChild([{path:"",component:O,canActivate:[_]}])]]}),e})()}}]);