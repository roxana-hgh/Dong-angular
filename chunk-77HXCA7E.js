import{a as lt}from"./chunk-D56ROKHL.js";import{A as N,C as P,s as V,t as k,w as z,x as A}from"./chunk-GMA7BCZF.js";import{a as Q,d as at,h as st,r as rt}from"./chunk-SK2G4LIT.js";import{$a as I,Da as M,Fa as K,G as g,Ga as S,L as E,La as nt,O as w,Oa as u,P as G,Pa as F,Q as r,T as m,U as c,Va as it,W as L,X as Y,Y as j,Ya as D,_ as y,aa as J,ba as W,ca as C,da as v,ea as X,ha as T,ia as Z,j as x,ja as tt,k as $,ka as O,la as s,o as B,r as H,ra as d,s as U,ta as p,ua as b,v as f,wa as et,x as _,xa as ot}from"./chunk-5JI43ALG.js";var ft=["icon"],mt=["content"],ut=t=>({$implicit:t}),yt=(t,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":a});function _t(t,a){t&1&&T(0)}function Ct(t,a){if(t&1&&X(0,"span",0),t&2){let e=s(3);j(e.checked?e.onIcon:e.offIcon),c("ngClass",S(4,yt,e.iconPos==="left",e.iconPos==="right")),m("data-pc-section","icon")}}function vt(t,a){if(t&1&&r(0,Ct,1,7,"span",2),t&2){let e=s(2);y(e.onIcon||e.offIcon?0:-1)}}function Tt(t,a){t&1&&T(0)}function kt(t,a){if(t&1&&r(0,Tt,1,0,"ng-container",1),t&2){let e=s(2);c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",K(2,ut,e.checked))}}function xt(t,a){if(t&1&&(r(0,vt,1,1)(1,kt,1,4,"ng-container"),C(2,"span",0),et(3),v()),t&2){let e=s();y(e.iconTemplate?1:0),g(2),c("ngClass",e.cx("label")),m("data-pc-section","label"),g(),ot(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var $t=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,Bt={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ct=(()=>{class t extends N{name="togglebutton";theme=$t;classes=Bt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Et={provide:Q,useExisting:x(()=>q),multi:!0},q=(()=>{class t extends P{get hostClass(){return this.styleClass||""}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new _;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=B(ct);onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,i){if(n&1&&(d(i,ft,4),d(i,mt,4),d(i,z,4)),n&2){let l;p(l=b())&&(o.iconTemplate=l.first),p(l=b())&&(o.contentTemplate=l.first),p(l=b())&&(o.templates=l)}},hostVars:23,hostBindings:function(n,o){n&1&&O("keydown",function(l){return o.onKeyDown(l)})("click",function(l){return o.toggle(l)}),n&2&&(tt("tabindex",o.tabindex),m("disabled",o.disabled)("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled)("type","button"),j(o.hostClass),L("p-togglebutton",!0)("p-togglebutton-checked",o.checked)("p-disabled",o.disabled)("p-togglebutton-sm",o.size==="small")("p-inputfield-sm",o.size==="small")("p-togglebutton-lg",o.size==="large")("p-inputfield-lg",o.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",u],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",F],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",u],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[M([Et,ct]),G([lt]),w],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(C(0,"span",0),r(1,_t,1,0,"ng-container",1)(2,xt,4,4),v()),n&2&&(c("ngClass",o.cx("content")),g(),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",K(4,ut,o.checked)),g(),y(o.contentTemplate?-1:2))},dependencies:[I,it,D,A],encapsulation:2,changeDetection:0})}return t})();var wt=["item"],Lt=(t,a)=>({$implicit:t,index:a});function Ot(t,a){return this.getOptionLabel(a)}function Mt(t,a){t&1&&T(0)}function St(t,a){if(t&1&&r(0,Mt,1,0,"ng-container",3),t&2){let e=s(2),n=e.$implicit,o=e.$index,i=s();c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",S(2,Lt,n,o))}}function Ft(t,a){t&1&&r(0,St,1,5,"ng-template",null,0,nt)}function Dt(t,a){if(t&1){let e=Z();C(0,"p-toggleButton",2),O("onChange",function(o){let i=H(e),l=i.$implicit,h=i.$index,R=s();return U(R.onOptionSelect(o,l,h))}),r(1,Ft,2,0),v()}if(t&2){let e=a.$implicit,n=s();c("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.disabled||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size),g(),y(n.itemTemplate||n._itemTemplate?1:-1)}}var It=({dt:t})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${t("selectbutton.border.radius")};
    border-end-start-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${t("selectbutton.border.radius")};
    border-end-end-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${t("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Vt={root:({props:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid}]},gt=(()=>{class t extends N{name="selectbutton";theme=It;classes=Vt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var zt={provide:Q,useExisting:x(()=>At),multi:!0},At=(()=>{class t extends P{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new _;onChange=new _;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=B(gt);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?V(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?V(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?V(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,n,o){if(this.disabled||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable)return;let l=this.getOptionValue(n),h;if(this.multiple)i?h=this.value.filter(R=>!k(R,l,this.equalityKey)):h=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;h=i?null:l}this.focusedIndex=o,this.value=h,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[l],index:l});n==="prev"?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!k(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(k(i,o,this.dataKey)){n=!0;break}}}else n=k(this.getOptionValue(e),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=f(t)))(o||t)}})();static \u0275cmp=E({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,i){if(n&1&&(d(i,wt,4),d(i,z,4)),n&2){let l;p(l=b())&&(o.itemTemplate=l.first),p(l=b())&&(o.templates=l)}},hostVars:10,hostBindings:function(n,o){n&2&&(m("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Y(o.style),L("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",u],tabindex:[2,"tabindex","tabindex",F],multiple:[2,"multiple","multiple",u],allowEmpty:[2,"allowEmpty","allowEmpty",u],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",u],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",u]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[M([zt,gt]),w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&J(0,Dt,2,9,"p-toggleButton",1,Ot,!0),n&2&&W(o.options)},dependencies:[q,rt,at,st,I,D,A],encapsulation:2,changeDetection:0})}return t})();export{At as a};
