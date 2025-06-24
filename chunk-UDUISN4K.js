import{c as le,d as O,f as b,g as y,h as I,n as g}from"./chunk-GFYZHMAX.js";import{A as ae,C as ce,E as pe,a as G,e as J,g as ee,h as te,j as L,m as ie,n as oe,v as ne,w as re,x as v,z as se}from"./chunk-GMA7BCZF.js";import{$a as X,Da as N,F as $,Fa as Q,G as H,Ga as x,L as z,M as E,O as A,Oa as f,Pa as Y,Q as d,T as F,U as h,Va as W,Wa as q,Xa as K,Y as R,Ya as U,ab as m,ca as w,da as Z,ia as B,k as P,ka as u,l as D,la as r,ma as M,na as j,o as p,r as l,ra as k,s as c,ta as T,ua as S,v as C,x as _,y as V}from"./chunk-5JI43ALG.js";var he=["content"],ue=["*"],fe=(t,s)=>({showTransitionParams:t,hideTransitionParams:s}),me=(t,s)=>({value:t,params:s}),ve=t=>({closeCallback:t});function be(t,s){}function ye(t,s){t&1&&d(0,be,0,0,"ng-template")}function ge(t,s){if(t&1){let e=B();w(0,"div",1),u("click",function(o){l(e);let n=r();return c(n.onOverlayClick(o))})("@animation.start",function(o){l(e);let n=r();return c(n.onAnimationStart(o))})("@animation.done",function(o){l(e);let n=r();return c(n.onAnimationEnd(o))}),w(1,"div",2),u("click",function(o){l(e);let n=r();return c(n.onContentClick(o))})("mousedown",function(o){l(e);let n=r();return c(n.onContentClick(o))}),j(2),d(3,ye,1,0,null,3),Z()()}if(t&2){let e=r();R(e.styleClass),h("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",x(13,me,e.overlayVisible?"open":"close",x(10,fe,e.showTransitionOptions,e.hideTransitionOptions))),F("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),H(3),h("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Q(16,ve,e.onCloseClick.bind(e)))}}var Ce=({dt:t})=>`
.p-popover {
    margin-top: ${t("popover.gutter")};
    background: ${t("popover.background")};
    color: ${t("popover.color")};
    border: 1px solid ${t("popover.border.color")};
    border-radius: ${t("popover.border.radius")};
    box-shadow: ${t("popover.shadow")};
    position: absolute
}

.p-popover-content {
    padding: ${t("popover.content.padding")};
}

.p-popover-flipped {
    margin-top: calc(${t("popover.gutter")} * -1);
    margin-bottom: ${t("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(${t("popover.arrow.offset")} + ${t("popover.arrow.left")});
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${t("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${t("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.background")};
}

.p-popover:before {
    border-width: ${t("popover.gutter")};
    margin-left: calc(-1 * ${t("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.border.color")};
}

`,_e={root:"p-popover p-component",content:"p-popover-content"},de=(()=>{class t extends ae{name="popover";theme=Ce;classes=_e;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),we=(()=>{class t extends ce{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new _;onHide=new _;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=p(de);zone=p(V);overlayService=p(ne);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(m(this.platformId)&&!this.documentClickListener){let e=ie()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):ee(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&g.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),J(this.container,this.target,!1);let e=L(this.container),i=L(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(se("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),G(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&g.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=te(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!oe()&&this.hide()}bindDocumentResizeListener(){if(m(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){m(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new pe(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&g.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-popover"]],contentQueries:function(i,o,n){if(i&1&&(k(n,he,4),k(n,re,4)),i&2){let a;T(a=S())&&(o.contentTemplate=a.first),T(a=S())&&(o.templates=a)}},hostBindings:function(i,o){i&1&&u("keydown.escape",function(a){return o.onEscapeKeydown(a)},!1,$)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",f],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",f],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",Y],focusOnShow:[2,"focusOnShow","focusOnShow",f],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[N([de]),A],ngContentSelectors:ue,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(M(),d(0,ge,4,18,"div",0)),i&2&&h("ngIf",o.render)},dependencies:[X,W,q,U,K,v],encapsulation:2,data:{animation:[le("animation",[y("void",b({transform:"scaleY(0.8)",opacity:0})),y("close",b({opacity:0})),y("open",b({transform:"translateY(0)",opacity:1})),I("void => open",O("{{showTransitionParams}}")),I("open => close",O("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),Qe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=E({type:t});static \u0275inj=D({imports:[we,v,v]})}return t})();export{we as a,Qe as b};
