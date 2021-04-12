!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function l(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function u(e,n){if(o(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[]};function d(e){return e.substr(2).toLowerCase()}function p(e,n){e.appendChild(n)}function v(e,n,t){i(t)?p(e,n):e.insertBefore(n,t)}function h(e,n){e.removeChild(n)}function m(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function g(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=m(e,n,t)}return null}function y(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&o(n)&&n()}))}function b(e,n,t){do{var r=e.flags;if(2033&r)return void(t&&e.dom.parentNode!==n||h(n,e.dom));var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)b(o[l],n,!1);return}e=o}}while(e)}function k(e,n,t){t.componentWillDisappear.length>0?y(t.componentWillDisappear,function(e,n){return function(){b(e,n,!0)}}(e,n)):b(e,n,!1)}function C(e,n,t){do{var r=e.flags;if(2033&r)return void v(n,e.dom,t);var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)C(o[l],n,t);return}e=o}}while(e)}function w(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var $={componentComparator:null,createVNode:null,renderComplete:null};function D(e,n){e.textContent=n}function F(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function A(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function P(e,n){return!!o(e)&&(e(n),!0)}var S="$";function x(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function U(t,o,a,u,c,f,s,d){var p=void 0===c?1:c,v=new x(p,u,a,t,s,f,d,o);return $.createVNode&&$.createVNode(v),0===p&&function(t,o){var a,u=1;if(r(o))a=o;else if(n(o))u=16,a=o;else if(e(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||e(s)){a=a||o.slice(0,f),M(o,a,f,"");break}if(n(s))(a=a||o.slice(0,f)).push(L(s,S+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=l(d)&&d[0]===S;p||v||h?(a=a||o.slice(0,f),(p||h)&&(s=I(s)),(v||h)&&(s.key=S+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||o).length?1:8}else(a=o).flags|=65536,81920&o.flags&&(a=I(o)),u=2;t.children=a,t.childFlags=u}(v,v.children),v}function V(e,n,r,o,l){var i=new x(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),o,function(e,n,r){var o=(32768&e?n.render:n).defaultProps;if(t(o))return r;if(t(r))return a(o,null);return A(r,o)}(e,n,r),function(e,n,r){if(4&e)return r;var o=(32768&e?n.render:n).defaultHooks;if(t(o))return r;if(t(r))return o;return A(r,o)}(e,n,l),n);return $.createVNode&&$.createVNode(i),i}function L(e,n){return new x(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function N(e,n,t){var r=U(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=W(),r.childFlags=2;break;case 16:r.children=[L(e)],r.childFlags=4}return r}function I(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new x(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return N(2===t?I(n):n.map(I),t,e.key)}(e)}function W(){return L("",null)}function M(t,o,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+S+a;if(e(f))M(f,o,0,s);else{if(n(f))f=L(f,s);else{var d=f.key,p=l(d)&&d[0]===S;(81920&f.flags||p)&&(f=I(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}o.push(f)}}}}function T(t){if(r(t)||n(t))return L(t,null);if(e(t))return N(t,0,null);return 16384&t.flags?I(t):t}var B="http://www.w3.org/1999/xlink",E="http://www.w3.org/XML/1998/namespace",O={"xlink:actuate":B,"xlink:arcrole":B,"xlink:href":B,"xlink:role":B,"xlink:show":B,"xlink:title":B,"xlink:type":B,"xml:base":E,"xml:lang":E,"xml:space":E};function R(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var j=R(0),H=R(null),X=R(!0);function _(e,n){var t=n.$EV;return t||(t=n.$EV=R(null)),t[e]||1===++j[e]&&(H[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();q(n,!0,e,Q(n))}}(e):function(e){return function(n){q(n,!1,e,Q(n))}}(e);return document.addEventListener(d(e),n),n}(e)),t}function K(e,n){var t=n.$EV;t&&t[e]&&(0===--j[e]&&(document.removeEventListener(d(e),H[e]),H[e]=null),t[e]=null)}function q(e,n,t,r){var l=function(e){return o(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&l.disabled)return;var a=l.$EV;if(a){var u=a[t];if(u&&(r.dom=l,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}l=l.parentNode}while(!i(l))}function z(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function G(){return this.defaultPrevented}function J(){return this.cancelBubble}function Q(e){var n={dom:document};return e.isDefaultPrevented=G,e.isPropagationStopped=J,e.stopPropagation=z,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function Y(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function Z(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(l(e))Y(i,e,t);else for(var u=0;u<e.length;++u)Y(i,e[u],t);if(o(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ee(e,n,t){var r="$"+n,l=e[r];if(l){if(l[1].wrapped)return;e.removeEventListener(l[0],l[1]),e[r]=null}o(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ne(e){return"checkbox"===e||"radio"===e}var te=Z("onInput",le),re=Z(["onClick","onChange"],le);function oe(e){e.stopPropagation()}function le(e,n){var r=e.type,o=e.value,l=e.checked,i=e.multiple,a=e.defaultValue,u=!t(o);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),ne(r)?(u&&(n.value=o),t(l)||(n.checked=l)):u&&n.value!==o?(n.defaultValue=o,n.value=o):t(l)||(n.checked=l)}function ie(n,r){if("option"===n.type)!function(n,r){var o=n.props||f,l=n.dom;l.value=o.value,o.value===r||e(r)&&-1!==r.indexOf(o.value)?l.selected=!0:t(r)&&t(o.selected)||(l.selected=o.selected||!1)}(n,r);else{var o=n.children,l=n.flags;if(4&l)ie(o.$LI,r);else if(8&l)ie(o,r);else if(2===n.childFlags)ie(o,r);else if(12&n.childFlags)for(var i=0,a=o.length;i<a;++i)ie(o[i],r)}}oe.wrapped=!0;var ae=Z("onChange",ue);function ue(e,n,r,o){var l=Boolean(e.multiple);t(e.multiple)||l===n.multiple||(n.multiple=l);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==o.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),r&&t(a)&&(a=e.defaultValue),ie(o,a)}}var ce,fe,se=Z("onInput",pe),de=Z("onChange");function pe(e,n,r){var o=e.value,l=n.value;if(t(o)){if(r){var i=e.defaultValue;t(i)||i===l||(n.defaultValue=i,n.value=i)}}else l!==o&&(n.defaultValue=o,n.value=o)}function ve(e,n,t,r,o,l){64&e?le(r,t):256&e?ue(r,t,o,n):128&e&&pe(r,t,o),l&&(t.$V=n)}function he(e){return e.type&&ne(e.type)?!t(e.checked):!t(e.value)}function me(e){e&&!P(e,null)&&e.current&&(e.current=null)}function ge(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){P(e,n)||void 0===e.current||(e.current=n)}))}function ye(e,n,t){be(e,t),k(e,n,t)}function be(e,n){var r,l=e.flags,a=e.children;if(481&l){r=e.ref;var u=e.props;me(r);var c=e.childFlags;if(!i(u))for(var d=Object.keys(u),p=0,v=d.length;p<v;p++){var h=d[p];X[h]&&K(h,e.dom)}12&c?ke(a,n):2===c&&be(a,n)}else if(a)if(4&l){o(a.componentWillUnmount)&&a.componentWillUnmount();var m=n;o(a.componentWillDisappear)&&(m=new s,$e(n,a,a.$LI.dom,l,void 0)),me(e.ref),a.$UN=!0,be(a.$LI,m)}else if(8&l){var y=n;if(!t(r=e.ref)){var b=g(e,!0);o(r.onComponentWillUnmount)&&r.onComponentWillUnmount(b,e.props||f),o(r.onComponentWillDisappear)&&(y=new s,$e(n,r,b,l,e.props))}be(a,y)}else 1024&l?ye(a,e.ref,n):8192&l&&12&e.childFlags&&ke(a,n)}function ke(e,n){for(var t=0,r=e.length;t<r;++t)be(e[t],n)}function Ce(e,n,t){t.componentWillDisappear.length>0?y(t.componentWillDisappear,function(e,n){return function(){if(n)for(var t=0;t<e.length;t++)b(e[t],n,!1)}}(n,e)):e.textContent=""}function we(e,n,t,r){ke(t,r),8192&n.flags?k(n,e,r):Ce(e,t,r)}function $e(e,n,t,r,o){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,o,e)}))}function De(e,n,r,a,u,f,s,p){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)break;var v=t(r)?"":r;a[e]!==v&&(a[e]=v);break;case"style":!function(e,n,r){if(t(n))return void r.removeAttribute("style");var o,i,a=r.style;if(l(n))return void(a.cssText=n);if(t(e)||l(e))for(o in n)i=n[o],a.setProperty(o,i);else{for(o in n)(i=n[o])!==e[o]&&a.setProperty(o,i);for(o in e)t(n[o])&&a.removeProperty(o)}}(n,r,a);break;case"dangerouslySetInnerHTML":!function(e,n,r,o,l){var a=e&&e.__html||"",u=n&&n.__html||"";a!==u&&(t(u)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(o,u)||(i(r)||(12&r.childFlags?ke(r.children,l):2===r.childFlags&&be(r.children,l),r.children=null,r.childFlags=1),o.innerHTML=u))}(n,r,s,a,p);break;default:X[e]?function(e,n,t,r){if(o(t))_(e,r)[e]=t;else if(c(t)){if(F(n,t))return;_(e,r)[e]=t}else K(e,r)}(e,n,r,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(c(t)){if(F(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}ee(r,d(e),t)}(e,n,r,a):t(r)?a.removeAttribute(e):u&&O[e]?a.setAttributeNS(O[e],e,r):a.setAttribute(e,r)}}function Fe(e,n,t){var r=T(e.render(n,e.state,t)),l=t;return o(e.getChildContext)&&(l=a(t,e.getChildContext())),e.$CX=l,r}function Ae(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function Pe(e,n,r,l,a,u,c){var d=e.flags|=16384;481&d?function(e,n,r,o,l,a,u){var c=e.flags,f=e.props,s=e.className,d=e.childFlags,p=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,o=o||(32&c)>0),h=e.children;if(t(s)||""===s||(o?p.setAttribute("class",s):p.className=s),16===d)D(p,h);else if(1!==d){var m=o&&"foreignObject"!==e.type;2===d?(16384&h.flags&&(e.children=h=I(h)),Pe(h,p,r,m,null,a,u)):8!==d&&4!==d||xe(h,p,r,m,null,a,u)}i(n)||v(n,p,l),i(f)||function(e,n,t,r,o,l){var i=!1,a=(448&n)>0;for(var u in a&&(i=he(t))&&function(e,n,t){64&e?function(e,n){ne(n.type)?(ee(e,"change",re),ee(e,"click",oe)):ee(e,"input",te)}(n,t):256&e?function(e){ee(e,"change",ae)}(n):128&e&&function(e,n){ee(e,"input",se),n.onChange&&ee(e,"change",de)}(n,t)}(n,r,t),t)De(u,null,t[u],r,o,i,null,l);a&&ve(n,e,r,t,!0,i)}(e,c,f,p,o,u),ge(e.ref,p,a)}(e,n,r,l,a,u,c):4&d?function(e,n,t,r,l,a,u){var c=function(e,n,t,r,l,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=l,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=w(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=Fe(u,t,r),u}(e,e.type,e.props||f,t,r,a),d=u;o(c.componentDidAppear)&&(d=new s),Pe(c.$LI,n,c.$CX,r,l,a,d),function(e,n,t,r){ge(e,n,t),o(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n)),o(n.componentDidAppear)&&Ue(r,n,n.$LI.dom,4,void 0)}(e.ref,c,a,u)}(e,n,r,l,a,u,c):8&d?function(e,n,r,l,i,a,u){var c=e.ref,d=u;!t(c)&&o(c.onComponentDidAppear)&&(d=new s),Pe(e.children=T(Ae(e,r)),n,r,l,i,a,d),function(e,n,r){var l=e.ref;t(l)||(P(l.onComponentWillMount,e.props||f),o(l.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(g(n,!0),n.props||f)}}(l,e)),o(l.onComponentDidAppear)&&Ue(r,l,g(e,!0),8,e.props))}(e,a,u)}(e,n,r,l,a,u,c):512&d||16&d?Se(e,n,a):8192&d?function(e,n,t,r,o,l,i){var a=e.children,u=e.childFlags;12&u&&0===a.length&&(u=e.childFlags=2,a=e.children=W()),2===u?Pe(a,t,o,r,o,l,i):xe(a,t,n,r,o,l,i)}(e,r,n,l,a,u,c):1024&d&&function(e,n,t,r,o,l){Pe(e.children,e.ref,n,!1,null,o,l);var i=W();Se(i,t,r),e.dom=i.dom}(e,r,n,a,u,c)}function Se(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||v(n,r,t)}function xe(e,n,t,r,o,l,i){for(var a=0;a<e.length;++a){var u=e[a];16384&u.flags&&(e[a]=u=I(u)),Pe(u,n,t,r,o,l,i)}}function Ue(e,n,t,r,o){e.componentDidAppear.push((function(){4&r?n.componentDidAppear(t):8&r&&n.onComponentDidAppear(t,o)}))}function Ve(e,n,l,u,c,s,d,v){var m=n.flags|=16384;e.flags!==m||e.type!==n.type||e.key!==n.key||2048&m?16384&e.flags?function(e,n,t,r,o,l,i){be(e,i),0!==(n.flags&e.flags&2033)?(Pe(n,null,r,o,null,l,i),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(Pe(n,t,r,o,g(e,!0),l,i),k(e,t,i))}(e,n,l,u,c,d,v):Pe(n,l,u,c,s,d,v):481&m?function(e,n,r,o,l,i,a){var u,c=n.dom=e.dom,s=e.props,d=n.props,p=!1,v=!1;if(o=o||(32&l)>0,s!==d){var h=s||f;if((u=d||f)!==f)for(var m in(p=(448&l)>0)&&(v=he(u)),u){var g=h[m],y=u[m];g!==y&&De(m,g,y,c,o,v,e,a)}if(h!==f)for(var b in h)t(u[b])&&!t(h[b])&&De(b,h[b],null,c,o,v,e,a)}var k=n.children,C=n.className;e.className!==C&&(t(C)?c.removeAttribute("class"):o?c.setAttribute("class",C):c.className=C),4096&l?function(e,n){e.textContent!==n&&(e.textContent=n)}(c,k):Le(e.childFlags,n.childFlags,e.children,k,c,r,o&&"foreignObject"!==n.type,null,e,i,a),p&&ve(l,n,c,u,!1,v);var w=n.ref,$=e.ref;$!==w&&(me($),ge(w,c,i))}(e,n,u,c,m,d,v):4&m?function(e,n,t,r,l,u,c,s){var d=n.children=e.children;if(i(d))return;d.$L=c;var p=n.props||f,v=n.ref,h=e.ref,m=d.state;if(!d.$N){if(o(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(p,r),d.$UN)return;d.$BR=!1}i(d.$PS)||(m=a(m,d.$PS),d.$PS=null)}(function(e,n,t,r,l,i,u,c,f,s){var d=e.state,p=e.props,v=Boolean(e.$N),h=o(e.shouldComponentUpdate);if(v&&(n=w(e,t,n!==d?a(d,n):n)),!h||h&&e.shouldComponentUpdate(t,n,l)){!v&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,l),e.props=t,e.state=n,e.context=l;var m=null,g=Fe(e,t,l);v&&o(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),Ve(e.$LI,g,r,e.$CX,i,c,f,s),e.$LI=g,o(e.componentDidUpdate)&&function(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}(e,p,d,m,f)}else e.props=t,e.state=n,e.context=l})(d,m,p,t,r,l,0,u,c,s),h!==v&&(me(h),ge(v,d,c))}(e,n,l,u,c,s,d,v):8&m?function(e,n,r,l,i,a,u,c){var s=!0,d=n.props||f,p=n.ref,v=e.props,h=!t(p),m=e.children;if(h&&o(p.onComponentShouldUpdate)&&(s=p.onComponentShouldUpdate(v,d)),!1!==s){h&&o(p.onComponentWillUpdate)&&p.onComponentWillUpdate(v,d);var g=T(Ae(n,l));Ve(m,g,r,l,i,a,u,c),n.children=g,h&&o(p.onComponentDidUpdate)&&p.onComponentDidUpdate(v,d)}else n.children=m}(e,n,l,u,c,s,d,v):16&m?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&m?n.dom=e.dom:8192&m?function(e,n,t,r,o,l,i){var a=e.children,u=n.children,c=e.childFlags,f=n.childFlags,s=null;12&f&&0===u.length&&(f=n.childFlags=2,u=n.children=W());var d=0!==(2&f);if(12&c){var p=a.length;(8&c&&8&f||d||!d&&u.length>p)&&(s=g(a[p-1],!1).nextSibling)}Le(c,f,a,u,t,r,o,s,e,l,i)}(e,n,l,u,c,d,v):function(e,n,t,o,l){var i=e.ref,a=n.ref,u=n.children;if(Le(e.childFlags,n.childFlags,e.children,u,i,t,!1,null,e,o,l),n.dom=e.dom,i!==a&&!r(u)){var c=u.dom;h(i,c),p(a,c)}}(e,n,u,d,v)}function Le(e,n,t,r,o,l,i,a,u,c,f){switch(e){case 2:switch(n){case 2:Ve(t,r,o,l,i,a,c,f);break;case 1:ye(t,o,f);break;case 16:be(t,f),D(o,r);break;default:!function(e,n,t,r,o,l,i){be(e,i),xe(n,t,r,o,g(e,!0),l,i),k(e,t,i)}(t,r,o,l,i,c,f)}break;case 1:switch(n){case 2:Pe(r,o,l,i,a,c,f);break;case 1:break;case 16:D(o,r);break;default:xe(r,o,l,i,a,c,f)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:D(t,n))}(t,r,o);break;case 2:Ce(o,t,f),Pe(r,o,l,i,a,c,f);break;case 1:Ce(o,t,f);break;default:Ce(o,t,f),xe(r,o,l,i,a,c,f)}break;default:switch(n){case 16:ke(t,f),D(o,r);break;case 2:we(o,u,t,f),Pe(r,o,l,i,a,c,f);break;case 1:we(o,u,t,f);break;default:var s=0|t.length,d=0|r.length;0===s?d>0&&xe(r,o,l,i,a,c,f):0===d?we(o,u,t,f):8===n&&8===e?function(e,n,t,r,o,l,i,a,u,c,f){var s,d,p=l-1,v=i-1,h=0,m=e[h],y=n[h];e:{for(;m.key===y.key;){if(16384&y.flags&&(n[h]=y=I(y)),Ve(m,y,t,r,o,a,c,f),e[h]=y,++h>p||h>v)break e;m=e[h],y=n[h]}for(m=e[p],y=n[v];m.key===y.key;){if(16384&y.flags&&(n[v]=y=I(y)),Ve(m,y,t,r,o,a,c,f),e[p]=y,v--,h>--p||h>v)break e;m=e[p],y=n[v]}}if(h>p){if(h<=v)for(d=(s=v+1)<i?g(n[s],!0):a;h<=v;)16384&(y=n[h]).flags&&(n[h]=y=I(y)),++h,Pe(y,t,r,o,d,c,f)}else if(h>v)for(;h<=p;)ye(e[h++],t,f);else!function(e,n,t,r,o,l,i,a,u,c,f,s,d,p){var v,h,m=0,y=0,b=a,k=a,w=l-a+1,$=i-a+1,D=new Int32Array($+1),F=w===r,A=!1,P=0,S=0;if(o<4||(w|$)<32)for(y=b;y<=l;++y)if(v=e[y],S<$){for(a=k;a<=i;a++)if(h=n[a],v.key===h.key){if(D[a-k]=y+1,F)for(F=!1;b<y;)ye(e[b++],u,p);P>a?A=!0:P=a,16384&h.flags&&(n[a]=h=I(h)),Ve(v,h,u,t,c,f,d,p),++S;break}!F&&a>i&&ye(v,u,p)}else F||ye(v,u,p);else{var x={};for(y=k;y<=i;++y)x[n[y].key]=y;for(y=b;y<=l;++y)if(v=e[y],S<$)if(void 0!==(a=x[v.key])){if(F)for(F=!1;y>b;)ye(e[b++],u,p);D[a-k]=y+1,P>a?A=!0:P=a,16384&(h=n[a]).flags&&(n[a]=h=I(h)),Ve(v,h,u,t,c,f,d,p),++S}else F||ye(v,u,p);else F||ye(v,u,p)}if(F)we(u,s,e,p),xe(n,u,t,c,f,d,p);else if(A){var U=function(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(u>Ne&&(Ne=u,ce=new Int32Array(u),fe=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=ce[o]]<n){fe[t]=r,ce[++o]=t;continue}for(l=0,i=o;l<i;)e[ce[a=l+i>>1]]<n?l=a+1:i=a;n<e[ce[l]]&&(l>0&&(fe[t]=ce[l-1]),ce[l]=t)}l=o+1;var c=new Int32Array(l);for(i=ce[l-1];l-- >0;)c[l]=i,i=fe[i],ce[l]=0;return c}(D);for(a=U.length-1,y=$-1;y>=0;y--)0===D[y]?(16384&(h=n[P=y+k]).flags&&(n[P]=h=I(h)),Pe(h,u,t,c,(m=P+1)<o?g(n[m],!0):f,d,p)):a<0||y!==U[a]?C(h=n[P=y+k],u,(m=P+1)<o?g(n[m],!0):f):a--}else if(S!==$)for(y=$-1;y>=0;y--)0===D[y]&&(16384&(h=n[P=y+k]).flags&&(n[P]=h=I(h)),Pe(h,u,t,c,(m=P+1)<o?g(n[m],!0):f,d,p))}(e,n,r,l,i,p,v,h,t,o,a,u,c,f)}(t,r,o,l,i,s,d,a,u,c,f):function(e,n,t,r,o,l,i,a,u,c){for(var f,s,d=l>i?i:l,p=0;p<d;++p)f=n[p],s=e[p],16384&f.flags&&(f=n[p]=I(f)),Ve(s,f,t,r,o,a,u,c),e[p]=f;if(l<i)for(p=d;p<i;++p)16384&(f=n[p]).flags&&(f=n[p]=I(f)),Pe(f,t,r,o,a,u,c);else if(l>i)for(p=d;p<l;++p)ye(e[p],t,c)}(t,r,o,l,i,s,d,a,c,f)}}}var Ne=0;function Ie(e,n,r,l){void 0===r&&(r=null),void 0===l&&(l=f),function(e,n,r,l){var i=[],a=new s,u=n.$V;t(u)?t(e)||(16384&e.flags&&(e=I(e)),Pe(e,n,l,!1,null,i,a),n.$V=e,u=e):t(e)?(ye(u,n,a),n.$V=null):(16384&e.flags&&(e=I(e)),Ve(u,e,n,l,!1,null,i,a),u=n.$V=e),function(e){for(var n=0;n<e.length;n++)e[n]()}(i),y(a.componentDidAppear),o(r)&&r(),o($.renderComplete)&&$.renderComplete(u,n)}(e,n,r,l)}function We(e){return U(1,"li","TreeLeaf",e.children,0,null,null,null)}function Me(e,n){return e!==n}function Te(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var l=n.children[o],i=l.id;l.container?r[o]=V(2,Te,{data:l},i,{onComponentShouldUpdate:Me}):r[o]=V(2,We,{children:i},i,{onComponentShouldUpdate:Me})}return U(1,"ul","TreeNode",r,0,null,null,null)}function Be(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return U(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Ee(e,n){console.log("Clicked",e),n.stopPropagation()}function Oe(e){var n=e.children;return U(1,"td","TableCell",[null,!1,[n]],0,{onClick:u(n,Ee)},null,null)}function Re(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var r=n.props,o=r.length+1,l=new Array(o);l[0]=V(2,Oe,{children:"#"+n.id},null,{onComponentShouldUpdate:Me});for(var i=1;i<o;i++)l[i]=V(2,Oe,{children:r[i-1]},null,{onComponentShouldUpdate:Me});return U(1,"tr",t,[null,l,!1],0,{"data-id":n.id},null,null)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno (normalization test)","7.4.8"),document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,o;Ie(("table"===(o=(t=e).location)?r=function(e){for(var n=e.items,t=n.length,r=new Array(t),o=0;o<t;o++){var l=n[o];r[o]=V(2,Re,{data:l,children:l},l.id,{onComponentShouldUpdate:Me})}return U(1,"table","Table",[[],r,[[]]],0,null,null,null)}(t.table):"anim"===o?r=function(e){for(var n=e.items,t=n.length,r=new Array(t),o=0;o<t;o++){var l=n[o];r[o]=V(2,Be,{data:l},l.id,{onComponentShouldUpdate:Me})}return U(1,"div","Anim",r,0,null,null,null)}(t.anim):"tree"===o&&(r=function(e){return U(1,"div","Tree",V(2,Te,{data:e.root},null,{onComponentShouldUpdate:Me}),2,null,null,null)}(t.tree)),U(1,"div","Main",r,0,null,null,null)),n)}),(function(e){Ie(U(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)}))}))}();
