"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1134],{91512:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},c=0,i=function(e){return e&&(e.host||i(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],s=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else{var t=e.getAttribute(u),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,c),d.set(e,i),s.push(e),1===c&&a&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}})};return p(t),f.clear(),c++,function(){s.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,n,"aria-hidden")):function(){return null}}},72661:function(e,t,n){n.d(t,{Z:function(){return q}});var r,o,a,c,i,u,l,d=n(31258),s=n(45291),f="right-scroll-bar-position",v="width-before-scroll-bar";function m(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var p=new WeakMap,h=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),a=[],c=!1,i={read:function(){if(c)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=o(e,c);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(c=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){c=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=(0,d.pi)({async:!0,ssr:!1},r),i),g=function(){},E=s.forwardRef(function(e,t){var n,r,o,a,c=s.useRef(null),i=s.useState({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:g}),u=i[0],l=i[1],f=e.forwardProps,v=e.children,E=e.className,y=e.removeScrollBar,b=e.enabled,w=e.shards,S=e.sideCar,C=e.noIsolation,k=e.inert,T=e.allowPinchZoom,L=e.as,A=(0,d._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),N=(n=[c,t],r=function(e){return n.forEach(function(t){return m(t,e)})},(o=(0,s.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,s.useLayoutEffect(function(){var e=p.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||m(e,null)}),r.forEach(function(e){t.has(e)||m(e,o)})}p.set(a,n)},[n]),a),M=(0,d.pi)((0,d.pi)({},A),u);return s.createElement(s.Fragment,null,b&&s.createElement(S,{sideCar:h,removeScrollBar:y,shards:w,noIsolation:C,inert:k,setCallbacks:l,allowPinchZoom:!!T,lockRef:c}),f?s.cloneElement(s.Children.only(v),(0,d.pi)((0,d.pi)({},M),{ref:N})):s.createElement(void 0===L?"div":L,(0,d.pi)({},M,{className:E,ref:N}),v))});E.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},E.classNames={fullWidth:v,zeroRight:f};var y=function(e){var t=e.sideCar,n=(0,d._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,(0,d.pi)({},n))};y.isSideCarExport=!0;var b=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=l||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},w=function(){var e=b();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},S=function(){var e=w();return function(t){return e(t.styles,t.dynamic),null}},C={left:0,top:0,right:0,gap:0},k=function(e){return parseInt(e||"",10)||0},T=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[k(n),k(r),k(o)]},L=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return C;var t=T(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},A=S(),N="data-scroll-locked",M=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(N,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(v," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(N,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},R=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=s.useMemo(function(){return L(o)},[o]);return s.useEffect(function(){return document.body.setAttribute(N,""),function(){document.body.removeAttribute(N)}},[]),s.createElement(A,{styles:M(a,!t,o,n?"":"!important")})},x=!1;if("undefined"!=typeof window)try{var W=Object.defineProperty({},"passive",{get:function(){return x=!0,!0}});window.addEventListener("test",W,W),window.removeEventListener("test",W,W)}catch(e){x=!1}var I=!!x&&{passive:!1},P=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},F=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),_(e,n)){var r=B(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},_=function(e,t){return"v"===e?P(t,"overflowY"):P(t,"overflowX")},B=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},D=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),d=!1,s=i>0,f=0,v=0;do{var m=B(e,u),p=m[0],h=m[1]-m[2]-c*p;(p||h)&&_(e,u)&&(f+=h,v+=p),u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&0===f||!o&&i>f)?d=!0:!s&&(o&&0===v||!o&&-i>v)&&(d=!0),d},K=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},X=function(e){return[e.deltaX,e.deltaY]},Y=function(e){return e&&"current"in e?e.current:e},O=0,Z=[],j=(u=function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(O++)[0],a=s.useState(function(){return S()})[0],c=s.useRef(e);s.useEffect(function(){c.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,d.ev)([e.lockRef.current],(e.shards||[]).map(Y),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,a=K(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],d=e.target,s=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=F(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=F(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var v=r.current||o;return D(v,t,e,"h"===v?u:l,!0)},[]),u=s.useCallback(function(e){if(Z.length&&Z[Z.length-1]===a){var n="deltaY"in e?X(e):K(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(Y).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=s.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),f=s.useCallback(function(e){n.current=K(e),r.current=void 0},[]),v=s.useCallback(function(t){l(t.type,X(t),t.target,i(t,e.lockRef.current))},[]),m=s.useCallback(function(t){l(t.type,K(t),t.target,i(t,e.lockRef.current))},[]);s.useEffect(function(){return Z.push(a),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",u,I),document.addEventListener("touchmove",u,I),document.addEventListener("touchstart",f,I),function(){Z=Z.filter(function(e){return e!==a}),document.removeEventListener("wheel",u,I),document.removeEventListener("touchmove",u,I),document.removeEventListener("touchstart",f,I)}},[]);var p=e.removeScrollBar,h=e.inert;return s.createElement(s.Fragment,null,h?s.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?s.createElement(R,{gapMode:"margin"}):null)},h.useMedium(u),y),H=s.forwardRef(function(e,t){return s.createElement(E,(0,d.pi)({},e,{ref:t,sideCar:j}))});H.classNames=E.classNames;var q=H},9780:function(e,t,n){n.d(t,{EW:function(){return a}});var r=n(45291);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},79876:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(71524),a=n(45291),c=n(74704),i=n(41020),u=n(76292);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...E}=e,[y,b]=(0,a.useState)(null),w=(0,u.W)(f),S=(0,u.W)(g),C=(0,a.useRef)(null),k=(0,c.e)(t,e=>b(e)),T=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(T.paused||!y)return;let t=e.target;y.contains(t)?C.current=t:p(C.current,{select:!0})}function t(e){if(T.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||p(C.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(y)});return y&&n.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,y,T.paused]),(0,a.useEffect)(()=>{if(y){h.add(T);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(l,s);y.addEventListener(l,w),y.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(v(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(y))}return()=>{y.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(d,s);y.addEventListener(d,S),y.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),y.removeEventListener(d,S),h.remove(T)},0)}}},[y,w,S,T]);let L=(0,a.useCallback)(e=>{if(!n&&!r||T.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=v(e);return[m(t,e),m(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&p(a,{select:!0})):(e.preventDefault(),n&&p(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,T.paused]);return(0,a.createElement)(i.WV.div,(0,o.Z)({tabIndex:-1},E,{ref:k,onKeyDown:L}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}}}]);