(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lBUW:function(r,t,e){"use strict";e.r(t),e.d(t,"AuthModule",(function(){return A}));var i=e("ofXK"),o=e("tyNb"),s=e("PCNd"),n=e("VzXK"),a=e("fXoL"),l=e("lGQG"),m=e("3Pt+"),c=e("S9hJ"),u=e("bSwM");function b(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Email is required!"),a.Pb())}function f(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Email it`s not valid!"),a.Pb())}function d(r,t){if(1&r&&(a.Qb(0,"div",11),a.uc(1,b,2,0,"small",12),a.uc(2,f,2,0,"small",12),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("ngIf",r.form.get("email").errors.required),a.zb(1),a.hc("ngIf",r.form.get("email").errors.email)}}function p(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Password is required!"),a.Pb())}function g(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Password it`s not valid!"),a.Pb())}function h(r,t){if(1&r&&(a.Qb(0,"div",11),a.uc(1,p,2,0,"small",12),a.uc(2,g,2,0,"small",12),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("ngIf",r.form.get("password").errors.required),a.zb(1),a.hc("ngIf",null==r.form.get("password").errors?null:r.form.get("password").errors.minlength)}}let w=(()=>{class r{constructor(r,t,e,i){this.authService=r,this.fb=t,this.route=e,this.router=i,this.errorMessage="",this.loading=!1}ngOnInit(){this.setForm(),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}setForm(){this.form=this.fb.group({email:[null,[m.r.required,m.r.email]],password:[null,[m.r.required,m.r.minLength(6)]],remember:[!0]})}submit(){this.loading=!0,this.errorMessage="";const r=Object.assign({},this.form.value);this.authService.signin(r).subscribe(r=>{this.authService.setAuthData(r,this.form.get("remember").value),this.router.navigateByUrl(this.returnUrl),this.form.reset()},r=>{this.errorMessage=r.error}).add(()=>this.loading=!1)}}return r.\u0275fac=function(t){return new(t||r)(a.Lb(l.a),a.Lb(m.d),a.Lb(o.a),a.Lb(o.b))},r.\u0275cmp=a.Fb({type:r,selectors:[["app-sign-in-form"]],decls:18,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email",1,"base-input"],["class","validation",4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password",1,"base-input"],[1,"submit-group"],[1,"btn",3,"disabled"],["formControlName","remember"],[1,"invalid"],[1,"validation"],[4,"ngIf"]],template:function(r,t){1&r&&(a.Qb(0,"form",0),a.Xb("ngSubmit",(function(){return t.submit()})),a.Qb(1,"div",1),a.Qb(2,"label",2),a.wc(3,"Email:"),a.Pb(),a.Mb(4,"input",3),a.uc(5,d,3,2,"div",4),a.Pb(),a.Qb(6,"div",1),a.Qb(7,"label",5),a.wc(8,"Password:"),a.Pb(),a.Mb(9,"input",6),a.uc(10,h,3,2,"div",4),a.Pb(),a.Qb(11,"div",7),a.Qb(12,"button",8),a.wc(13," Sign In "),a.Pb(),a.Qb(14,"mat-checkbox",9),a.wc(15,"Remember Me!"),a.Pb(),a.Pb(),a.Qb(16,"small",10),a.wc(17),a.Pb(),a.Pb()),2&r&&(a.hc("formGroup",t.form),a.zb(5),a.hc("ngIf",t.form.get("email").touched&&t.form.get("email").invalid),a.zb(5),a.hc("ngIf",t.form.get("password").touched&&t.form.get("password").invalid),a.zb(2),a.hc("disabled",t.loading||t.form.invalid),a.zb(5),a.xc(t.errorMessage))},directives:[m.s,m.n,m.f,m.c,m.m,m.e,i.l,u.a],styles:[""]}),r})();function P(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Email is required!"),a.Pb())}function v(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Email it`s not valid!"),a.Pb())}function Q(r,t){if(1&r&&(a.Qb(0,"div",18),a.uc(1,P,2,0,"small",19),a.uc(2,v,2,0,"small",19),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("ngIf",r.form.get("email").errors.required),a.zb(1),a.hc("ngIf",r.form.get("email").errors.email)}}function N(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*First Name is required!"),a.Pb())}function I(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*First Name it`s not valid!"),a.Pb())}function M(r,t){if(1&r&&(a.Qb(0,"div",18),a.uc(1,N,2,0,"small",19),a.uc(2,I,2,0,"small",19),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("ngIf",r.form.get("firstName").errors.required),a.zb(1),a.hc("ngIf",null==r.form.get("firstName").errors?null:r.form.get("firstName").errors.minlength)}}function z(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Last Name is required!"),a.Pb())}function x(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Last Name it`s not valid!"),a.Pb())}function y(r,t){if(1&r&&(a.Qb(0,"div",18),a.uc(1,z,2,0,"small",19),a.uc(2,x,2,0,"small",19),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("ngIf",r.form.get("lastName").errors.required),a.zb(1),a.hc("ngIf",null==r.form.get("lastName").errors?null:r.form.get("lastName").errors.minlength)}}function S(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Password is required!"),a.Pb())}function C(r,t){1&r&&(a.Qb(0,"small"),a.wc(1,"*Password it`s not valid!"),a.Pb())}function q(r,t){if(1&r&&(a.Qb(0,"div",18),a.uc(1,S,2,0,"small",19),a.uc(2,C,2,0,"small",19),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("ngIf",r.form.get("passwords.password").errors.required),a.zb(1),a.hc("ngIf",null==r.form.get("passwords.password").errors?null:r.form.get("passwords.password").errors.minlength)}}function L(r,t){1&r&&(a.Qb(0,"div",18),a.Qb(1,"small"),a.wc(2," *Passwords not equal!"),a.Pb(),a.Pb())}let E=(()=>{class r{constructor(r,t,e,i){this.fb=r,this.authService=t,this.route=e,this.router=i,this.errorMessage="",this.loading=!1,this.rolesEnum=n.d}ngOnInit(){this.setForm(),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}setForm(){this.form=this.fb.group({email:[null,[m.r.required,m.r.email]],firstName:[null,[m.r.required,m.r.minLength(2)]],lastName:[null,[m.r.required,m.r.minLength(2)]],passwords:this.fb.group({password:[null,[m.r.required,m.r.minLength(6)]],confirmPassword:[null,[m.r.required,m.r.minLength(6)]]},{validator:r=>{if(r.get("password").value!==r.get("confirmPassword").value)return{notSame:!0}}}),roles:[null]})}submit(){this.loading=!0,this.errorMessage="";const{email:r,firstName:t,lastName:e,roles:i}=this.form.value,{password:o}=this.form.value.passwords,s={email:r,firstName:t,lastName:e,password:o,roles:i&&[this.rolesEnum["Super Admin"]]};this.authService.signup(s).subscribe(r=>{r?(this.loginAfterSignUp(s),this.form.reset()):this.errorMessage="Something went wrong..."},r=>this.errorMessage=r.error.message).add(()=>this.loading=!1)}loginAfterSignUp(r){this.authService.signin({email:r.email,password:r.password}).subscribe(r=>{this.authService.setAuthData(r,!0),this.router.navigateByUrl(this.returnUrl)})}}return r.\u0275fac=function(t){return new(t||r)(a.Lb(m.d),a.Lb(l.a),a.Lb(o.a),a.Lb(o.b))},r.\u0275cmp=a.Fb({type:r,selectors:[["app-sign-up-form"]],decls:34,vars:8,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email",1,"base-input"],["class","validation",4,"ngIf"],["for","firstName"],["type","text","id","firstName","formControlName","firstName",1,"base-input"],["for","lastName"],["type","text","id","lastName","formControlName","lastName",1,"base-input"],["formGroupName","passwords"],["for","password"],["type","password","id","password","formControlName","password",1,"base-input"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword",1,"base-input"],[1,"submit-group"],[1,"btn",3,"disabled"],["formControlName","roles"],[1,"invalid"],[1,"validation"],[4,"ngIf"]],template:function(r,t){1&r&&(a.Qb(0,"form",0),a.Xb("ngSubmit",(function(){return t.submit()})),a.Qb(1,"div",1),a.Qb(2,"label",2),a.wc(3,"Email:"),a.Pb(),a.Mb(4,"input",3),a.uc(5,Q,3,2,"div",4),a.Pb(),a.Qb(6,"div",1),a.Qb(7,"label",5),a.wc(8,"First Name:"),a.Pb(),a.Mb(9,"input",6),a.uc(10,M,3,2,"div",4),a.Pb(),a.Qb(11,"div",1),a.Qb(12,"label",7),a.wc(13,"Last Name:"),a.Pb(),a.Mb(14,"input",8),a.uc(15,y,3,2,"div",4),a.Pb(),a.Qb(16,"div",9),a.Qb(17,"div",1),a.Qb(18,"label",10),a.wc(19,"Password:"),a.Pb(),a.Mb(20,"input",11),a.uc(21,q,3,2,"div",4),a.Pb(),a.Qb(22,"div",1),a.Qb(23,"label",12),a.wc(24,"Confirm Password:"),a.Pb(),a.Mb(25,"input",13),a.uc(26,L,3,0,"div",4),a.Pb(),a.Pb(),a.Qb(27,"div",14),a.Qb(28,"button",15),a.wc(29," Sign In! "),a.Pb(),a.Qb(30,"mat-checkbox",16),a.wc(31,"Admin"),a.Pb(),a.Pb(),a.Qb(32,"small",17),a.wc(33),a.Pb(),a.Pb()),2&r&&(a.hc("formGroup",t.form),a.zb(5),a.hc("ngIf",t.form.get("email").touched&&t.form.get("email").invalid),a.zb(5),a.hc("ngIf",t.form.get("firstName").touched&&t.form.get("firstName").invalid),a.zb(5),a.hc("ngIf",t.form.get("lastName").touched&&t.form.get("lastName").invalid),a.zb(6),a.hc("ngIf",t.form.get("passwords.password").touched&&t.form.get("passwords.password").invalid),a.zb(5),a.hc("ngIf",t.form.get("passwords.confirmPassword").touched&&t.form.hasError("notSame","passwords")),a.zb(2),a.hc("disabled",t.loading||t.form.invalid),a.zb(5),a.xc(t.errorMessage))},directives:[m.s,m.n,m.f,m.c,m.m,m.e,i.l,m.g,u.a],styles:[""]}),r})();const O=function(){return["/auth"]};function k(r,t){if(1&r){const r=a.Rb();a.Qb(0,"div",4),a.Qb(1,"h3"),a.wc(2),a.cc(3,"titlecase"),a.Pb(),a.Qb(4,"a",5),a.Xb("click",(function(){return a.oc(r),a.bc().authService.logout()})),a.wc(5,"Log Out"),a.Pb(),a.Pb()}if(2&r){const r=a.bc();a.zb(2),a.yc(" You already login, ",a.dc(3,2,r.authService.user.firstName)," "),a.zb(2),a.hc("routerLink",a.ic(4,O))}}function U(r,t){1&r&&a.Mb(0,"app-sign-in-form")}function _(r,t){1&r&&a.Mb(0,"app-sign-up-form")}function F(r,t){if(1&r&&(a.Qb(0,"div",4),a.Qb(1,"form",6),a.Mb(2,"input",7),a.Qb(3,"label",8),a.wc(4,"Sign In"),a.Pb(),a.Mb(5,"input",9),a.Qb(6,"label",10),a.wc(7,"Sign Up"),a.Pb(),a.Pb(),a.uc(8,U,1,0,"app-sign-in-form",11),a.uc(9,_,1,0,"app-sign-up-form",11),a.Pb()),2&r){const r=a.bc();a.zb(1),a.hc("formGroup",r.form),a.zb(1),a.hc("value",r.authPropertiesEnum["Sign in"]),a.zb(3),a.hc("value",r.authPropertiesEnum["Sign up"]),a.zb(3),a.hc("ngIf",r.form.get("auth").value===r.authPropertiesEnum["Sign in"]),a.zb(1),a.hc("ngIf",r.form.get("auth").value===r.authPropertiesEnum["Sign up"])}}let G=(()=>{class r{constructor(r,t){this.authService=r,this.fb=t,this.authPropertiesEnum=n.a}ngOnInit(){this.form=this.fb.group({auth:[this.authPropertiesEnum["Sign in"]]})}}return r.\u0275fac=function(t){return new(t||r)(a.Lb(l.a),a.Lb(m.d))},r.\u0275cmp=a.Fb({type:r,selectors:[["app-auth-page"]],decls:5,vars:2,consts:[["title","Authentication"],[1,"container"],["class","content-wrapper",4,"ngIf","ngIfElse"],["authForm",""],[1,"content-wrapper"],["href","#",1,"btn",3,"routerLink","click"],[3,"formGroup"],["type","radio","formControlName","auth","id","signin",1,"tags",3,"value"],["for","signin"],["type","radio","formControlName","auth","id","signup",1,"tags",3,"value"],["for","signup"],[4,"ngIf"]],template:function(r,t){if(1&r&&(a.Mb(0,"app-toolbar",0),a.Qb(1,"div",1),a.uc(2,k,6,5,"div",2),a.uc(3,F,10,5,"ng-template",null,3,a.vc),a.Pb()),2&r){const r=a.mc(4);a.zb(2),a.hc("ngIf",t.authService.authenticated)("ngIfElse",r)}},directives:[c.a,i.l,o.d,m.s,m.n,m.f,m.p,m.c,m.m,m.e,w,E],pipes:[i.r],styles:[".container[_ngcontent-%COMP%]{position:relative;width:100%}.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{max-width:400px;text-align:center;margin:0 auto 20px;background:#fff;border:1px solid #f8f8f8;box-shadow:0 4px 6px rgba(0,0,0,.1);padding:20px;border-radius:5px}.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-flex;margin-top:20px}.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-bottom:10px}.container[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#fff;background-color:#8ea7ff}  form{text-align:left;position:relative;padding-bottom:20px}  form .form-group{position:relative;margin-bottom:30px}  form .form-group .validation{color:#dd0031;font-style:italic;position:absolute;bottom:-20px}  form .form-group .base-input{border:1px solid #8ea7ff;border-radius:5px;margin:0}  form .submit-group{display:flex;justify-content:space-between;align-items:center}  form .submit-group z .tags:checked+label{background:#8ea7ff;color:#fff}@media (max-width:350px){  form .submit-group .btn{padding:10px 20px}}  form .invalid{color:#dd0031;position:absolute;bottom:-5px;font-style:italic}"]}),r})(),A=(()=>{class r{}return r.\u0275mod=a.Jb({type:r}),r.\u0275inj=a.Ib({factory:function(t){return new(t||r)},imports:[[i.c,s.a,o.e.forChild([{path:"",component:G}])]]}),r})()}}]);