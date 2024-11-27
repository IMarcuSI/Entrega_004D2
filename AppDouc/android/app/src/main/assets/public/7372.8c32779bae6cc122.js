"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7372],{7372:(k,h,r)=>{r.r(h),r.d(h,{ion_loading:()=>L});var p=r(467),o=r(4261),m=r(464),u=r(4920),f=r(7838),l=r(5229),b=r(333),a=r(9483),n=r(9986);r(8476),r(7192),r(1970);const c=s=>{const i=(0,n.c)(),e=(0,n.c)(),t=(0,n.c)();return e.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([e,t])},E=s=>{const i=(0,n.c)(),e=(0,n.c)(),t=(0,n.c)();return e.addElement(s.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([e,t])},D=s=>{const i=(0,n.c)(),e=(0,n.c)(),t=(0,n.c)();return e.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([e,t])},C=s=>{const i=(0,n.c)(),e=(0,n.c)(),t=(0,n.c)();return e.addElement(s.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([e,t])},L=(()=>{let s=class{constructor(i){(0,o.r)(this,i),this.didPresent=(0,o.d)(this,"ionLoadingDidPresent",7),this.willPresent=(0,o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,o.d)(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=(0,o.d)(this,"didPresent",7),this.willPresentShorthand=(0,o.d)(this,"willPresent",7),this.willDismissShorthand=(0,o.d)(this,"willDismiss",7),this.didDismissShorthand=(0,o.d)(this,"didDismiss",7),this.delegateController=(0,l.d)(this),this.lockController=(0,f.c)(),this.triggerController=(0,l.e)(),this.customHTMLEnabled=a.c.get("innerHTMLTemplatesEnabled",m.E),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,l.B)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,e){!0===i&&!1===e?this.present():!1===i&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:i,el:e,triggerController:t}=this;i&&t.addClickListener(e,i)}connectedCallback(){(0,l.j)(this.el),this.triggerChanged()}componentWillLoad(){var i;if(void 0===this.spinner){const e=(0,a.b)(this);this.spinner=a.c.get("loadingSpinner",a.c.get("spinner","ios"===e?"lines":"crescent"))}null!==(i=this.htmlAttributes)&&void 0!==i&&i.id||(0,l.k)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}present(){var i=this;return(0,p.A)(function*(){const e=yield i.lockController.lock();yield i.delegateController.attachViewToDom(),yield(0,l.f)(i,"loadingEnter",c,D),i.duration>0&&(i.durationTimeout=setTimeout(()=>i.dismiss(),i.duration+10)),e()})()}dismiss(i,e){var t=this;return(0,p.A)(function*(){const x=yield t.lockController.lock();t.durationTimeout&&clearTimeout(t.durationTimeout);const g=yield(0,l.g)(t,i,e,"loadingLeave",E,C);return g&&t.delegateController.removeViewFromDom(),x(),g})()}onDidDismiss(){return(0,l.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(i){const{customHTMLEnabled:e,message:t}=this;return e?(0,o.h)("div",{class:"loading-content",id:i,innerHTML:(0,m.a)(t)}):(0,o.h)("div",{class:"loading-content",id:i},t)}render(){const{message:i,spinner:e,htmlAttributes:t,overlayIndex:x}=this,g=(0,a.b)(this),v=`loading-${x}-msg`;return(0,o.h)(o.f,Object.assign({key:"fb3d2cd7cd0539ed6540d8be50e243c7916b3ca2",role:"dialog","aria-modal":"true","aria-labelledby":void 0!==i?v:null,tabindex:"-1"},t,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,b.g)(this.cssClass)),{[g]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),(0,o.h)("ion-backdrop",{key:"c8bd30782f3040b1b80e88aa924861e439d40754",visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,o.h)("div",{key:"7ad4447fafa49aa861d311221b8c2e8171b4c610",tabindex:"0","aria-hidden":"true"}),(0,o.h)("div",{key:"1879df0d895eb8ee20ccdc94dd35d708c1140b91",class:"loading-wrapper ion-overlay-wrapper"},e&&(0,o.h)("div",{key:"220f292c136681f5fa91f94669aac75b15e490ce",class:"loading-spinner"},(0,o.h)("ion-spinner",{key:"d599084a1426d941bdd080a988d8ad5b9589b823",name:e,"aria-hidden":"true"})),void 0!==i&&this.renderLoadingMessage(v)),(0,o.h)("div",{key:"e443897b353a48e0c72718dba04d83d7c5070d73",tabindex:"0","aria-hidden":"true"}))}get el(){return(0,o.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};return s.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}"},s})()},333:(k,h,r)=>{r.d(h,{c:()=>m,g:()=>f,h:()=>o,o:()=>b});var p=r(467);const o=(a,n)=>null!==n.closest(a),m=(a,n)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},n):n,f=a=>{const n={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(a).forEach(d=>n[d]=!0),n},l=/^[a-z][a-z0-9+\-.]*:/,b=function(){var a=(0,p.A)(function*(n,d,_,y){if(null!=n&&"#"!==n[0]&&!l.test(n)){const c=document.querySelector("ion-router");if(c)return null!=d&&d.preventDefault(),c.push(n,_,y)}return!1});return function(d,_,y,c){return a.apply(this,arguments)}}()}}]);