"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6570],{6570:(M,p,i)=>{i.r(p),i.d(p,{RegistroProfesorPageModule:()=>h});var d=i(177),f=i(4341),t=i(4742),u=i(8986),m=i(467),o=i(4438),c=i(369);const P=[{path:"",component:(()=>{var e;class l{constructor(r,n){this.router=r,this.storage=n,this.formlogin={nombre_profesor:"",rut_profesor:"",correo_profesor:"",password_profesor:""}}ngOnInit(){var r=this;return(0,m.A)(function*(){yield r.storage.create()})()}Registrarse(){var r=this;return(0,m.A)(function*(){console.log("nombre: "+r.formlogin.nombre_profesor),console.log("rut: "+r.formlogin.rut_profesor),console.log("correo: "+r.formlogin.correo_profesor),console.log("password: "+r.formlogin.password_profesor),yield r.storage.set(r.formlogin.rut_profesor,{nombre:r.formlogin.nombre_profesor,correo:r.formlogin.correo_profesor,password:r.formlogin.password_profesor}),r.router.navigate(["/login"],{queryParams:{rutUsuario:r.formlogin.rut_profesor}})})()}}return(e=l).\u0275fac=function(r){return new(r||e)(o.rXU(u.Ix),o.rXU(c.w))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-registro-profesor"]],decls:26,vars:6,consts:[[3,"translucent"],["slot","start"],[1,"custom-title"],[3,"fullscreen"],["src","assets/img/profesor.svg"],["position","floating"],["placeholder","Ingrese rut",1,"custom-input",3,"ngModelChange","ngModel"],["placeholder","Ingrese nombre y apellido",1,"custom-input",3,"ngModelChange","ngModel"],["placeholder","Ingrese correo",1,"custom-input",3,"ngModelChange","ngModel"],["type","password","placeholder","Ingrese contrase\xf1a",1,"custom-input",3,"ngModelChange","ngModel"],["type","password_profesor","placeholder","Repita la contrase\xf1a",1,"custom-input"],["size","large","shape","full",1,"custom-button",3,"click"]],template:function(r,n){1&r&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-back-button"),o.EFF(4,"a"),o.k0s()(),o.j41(5,"ion-title",2),o.EFF(6,"Registro"),o.k0s()()(),o.j41(7,"ion-content",3),o.nrm(8,"ion-img",4),o.j41(9,"ion-item"),o.nrm(10,"ion-label",5),o.j41(11,"ion-input",6),o.mxI("ngModelChange",function(s){return o.DH7(n.formlogin.rut_profesor,s)||(n.formlogin.rut_profesor=s),s}),o.k0s()(),o.j41(12,"ion-item"),o.nrm(13,"ion-label",5),o.j41(14,"ion-input",7),o.mxI("ngModelChange",function(s){return o.DH7(n.formlogin.nombre_profesor,s)||(n.formlogin.nombre_profesor=s),s}),o.k0s()(),o.j41(15,"ion-item"),o.nrm(16,"ion-label",5),o.j41(17,"ion-input",8),o.mxI("ngModelChange",function(s){return o.DH7(n.formlogin.correo_profesor,s)||(n.formlogin.correo_profesor=s),s}),o.k0s()(),o.j41(18,"ion-item"),o.nrm(19,"ion-label",5),o.j41(20,"ion-input",9),o.mxI("ngModelChange",function(s){return o.DH7(n.formlogin.password_profesor,s)||(n.formlogin.password_profesor=s),s}),o.k0s()(),o.j41(21,"ion-item"),o.nrm(22,"ion-label",5)(23,"ion-input",10),o.k0s(),o.j41(24,"ion-button",11),o.bIt("click",function(){return n.Registrarse()}),o.EFF(25,"Registrarse"),o.k0s()()),2&r&&(o.Y8G("translucent",!0),o.R7$(7),o.Y8G("fullscreen",!0),o.R7$(4),o.R50("ngModel",n.formlogin.rut_profesor),o.R7$(3),o.R50("ngModel",n.formlogin.nombre_profesor),o.R7$(3),o.R50("ngModel",n.formlogin.correo_profesor),o.R7$(3),o.R50("ngModel",n.formlogin.password_profesor))},dependencies:[f.BC,f.vS,t.Jm,t.QW,t.W9,t.eU,t.KW,t.$w,t.uz,t.he,t.BC,t.ai,t.Gw,t.el]}),l})()}];let R=(()=>{var e;class l{}return(e=l).\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[u.iI.forChild(P),u.iI]}),l})(),h=(()=>{var e;class l{}return(e=l).\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[d.MD,f.YN,t.bv,R]}),l})()}}]);