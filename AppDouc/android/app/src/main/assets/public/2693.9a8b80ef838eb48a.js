"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2693],{2693:(M,d,s)=>{s.r(d),s.d(d,{RegistroPageModule:()=>R});var c=s(177),a=s(4341),r=s(4742),u=s(8986),o=s(4438),p=s(369);const f=[{path:"",component:(()=>{var e;class g{constructor(n,t){this.router=n,this.storage=t,this.formlogin={nombre:"",rut:"",correo:"",password:""}}ngOnInit(){}Registrarse(){console.log("nombre"+this.formlogin.nombre),console.log("rut"+this.formlogin.rut),console.log("correo"+this.formlogin.rut),console.log("password"+this.formlogin.password),this.router.navigate(["/login"],{queryParams:{rutUsuario:this.formlogin.rut}}),this.storage.get(this.formlogin.nombre),this.storage.get(this.formlogin.rut),this.storage.get(this.formlogin.correo),this.storage.get(this.formlogin.password)}}return(e=g).\u0275fac=function(n){return new(n||e)(o.rXU(u.Ix),o.rXU(p.w))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-registro"]],decls:22,vars:5,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["src","assets/img/registro.svg"],["position","floating"],["placeholder","Ingrese rut",3,"ngModelChange","ngModel"],["placeholder","Ingrese correo",3,"ngModelChange","ngModel"],["type","password","placeholder","Ingrese contrase\xf1a",3,"ngModelChange","ngModel"],["type","password","placeholder","Repita la contrase\xf1a"],["shape","block",3,"click"]],template:function(n,t){1&n&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o.nrm(3,"ion-back-button"),o.k0s(),o.j41(4,"ion-title"),o.EFF(5,"registro"),o.k0s()()(),o.j41(6,"ion-content",2),o.nrm(7,"ion-img",3),o.j41(8,"ion-item"),o.nrm(9,"ion-label",4),o.j41(10,"ion-input",5),o.mxI("ngModelChange",function(i){return o.DH7(t.formlogin.rut,i)||(t.formlogin.rut=i),i}),o.k0s()(),o.j41(11,"ion-item"),o.nrm(12,"ion-label",4),o.j41(13,"ion-input",6),o.mxI("ngModelChange",function(i){return o.DH7(t.formlogin.correo,i)||(t.formlogin.correo=i),i}),o.k0s()(),o.j41(14,"ion-item"),o.nrm(15,"ion-label",4),o.j41(16,"ion-input",7),o.mxI("ngModelChange",function(i){return o.DH7(t.formlogin.password,i)||(t.formlogin.password=i),i}),o.k0s()(),o.j41(17,"ion-item"),o.nrm(18,"ion-label",4)(19,"ion-input",8),o.k0s(),o.j41(20,"ion-button",9),o.bIt("click",function(){return t.Registrarse()}),o.EFF(21,"registrase"),o.k0s()()),2&n&&(o.Y8G("translucent",!0),o.R7$(6),o.Y8G("fullscreen",!0),o.R7$(4),o.R50("ngModel",t.formlogin.rut),o.R7$(3),o.R50("ngModel",t.formlogin.correo),o.R7$(3),o.R50("ngModel",t.formlogin.password))},dependencies:[a.BC,a.vS,r.Jm,r.QW,r.W9,r.eU,r.KW,r.$w,r.uz,r.he,r.BC,r.ai,r.Gw,r.el]}),g})()}];let h=(()=>{var e;class g{}return(e=g).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[u.iI.forChild(f),u.iI]}),g})(),R=(()=>{var e;class g{}return(e=g).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[c.MD,a.YN,r.bv,h]}),g})()}}]);