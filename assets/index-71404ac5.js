var tw=Object.defineProperty;var nw=(e,t,n)=>t in e?tw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>(nw(e,typeof t!="symbol"?t+"":t,n),n);function rw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _g={exports:{}},Oa={},zg={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),iw=Symbol.for("react.portal"),ow=Symbol.for("react.fragment"),sw=Symbol.for("react.strict_mode"),aw=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),uw=Symbol.for("react.context"),cw=Symbol.for("react.forward_ref"),fw=Symbol.for("react.suspense"),dw=Symbol.for("react.memo"),hw=Symbol.for("react.lazy"),th=Symbol.iterator;function pw(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var $g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,Vg={};function pi(e,t,n){this.props=e,this.context=t,this.refs=Vg,this.updater=n||$g}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bg(){}Bg.prototype=pi.prototype;function of(e,t,n){this.props=e,this.context=t,this.refs=Vg,this.updater=n||$g}var sf=of.prototype=new Bg;sf.constructor=of;Fg(sf,pi.prototype);sf.isPureReactComponent=!0;var nh=Array.isArray,Ug=Object.prototype.hasOwnProperty,af={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ug.call(t,r)&&!Wg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:e,key:o,ref:s,props:i,_owner:af.current}}function mw(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function gw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gw(""+e.key):t.toString(36)}function Es(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zo:case iw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+yl(s,0):r,nh(i)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),Es(i,t,n,"",function(u){return u})):i!=null&&(lf(i)&&(i=mw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+yl(o,a);s+=Es(o,t,n,l,i)}else if(l=pw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+yl(o,a++),s+=Es(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function rs(e,t,n){if(e==null)return e;var r=[],i=0;return Es(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},As={transition:null},yw={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:As,ReactCurrentOwner:af};V.Children={map:rs,forEach:function(e,t,n){rs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rs(e,function(){t++}),t},toArray:function(e){return rs(e,function(t){return t})||[]},only:function(e){if(!lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=pi;V.Fragment=ow;V.Profiler=aw;V.PureComponent=of;V.StrictMode=sw;V.Suspense=fw;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fg({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=af.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ug.call(t,l)&&!Wg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zo,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:uw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lw,_context:e},e.Consumer=e};V.createElement=Hg;V.createFactory=function(e){var t=Hg.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:cw,render:e}};V.isValidElement=lf;V.lazy=function(e){return{$$typeof:hw,_payload:{_status:-1,_result:e},_init:vw}};V.memo=function(e,t){return{$$typeof:dw,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=As.transition;As.transition={};try{e()}finally{As.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return $e.current.useCallback(e,t)};V.useContext=function(e){return $e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};V.useEffect=function(e,t){return $e.current.useEffect(e,t)};V.useId=function(){return $e.current.useId()};V.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return $e.current.useMemo(e,t)};V.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};V.useRef=function(e){return $e.current.useRef(e)};V.useState=function(e){return $e.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return $e.current.useTransition()};V.version="18.2.0";zg.exports=V;var w=zg.exports;const en=Dg(w),xw=rw({__proto__:null,default:en},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=w,Sw=Symbol.for("react.element"),kw=Symbol.for("react.fragment"),Cw=Object.prototype.hasOwnProperty,bw=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pw={key:!0,ref:!0,__self:!0,__source:!0};function Yg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Cw.call(t,r)&&!Pw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sw,type:e,key:o,ref:s,props:i,_owner:bw.current}}Oa.Fragment=kw;Oa.jsx=Yg;Oa.jsxs=Yg;_g.exports=Oa;var v=_g.exports,yu={},Gg={exports:{}},ot={},Kg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var N=j.length;j.push(O);e:for(;0<N;){var G=N-1>>>1,X=j[G];if(0<i(X,O))j[G]=O,j[N]=X,N=G;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],N=j.pop();if(N!==O){j[0]=N;e:for(var G=0,X=j.length,qe=X>>>1;G<qe;){var Oe=2*(G+1)-1,ce=j[Oe],re=Oe+1,we=j[re];if(0>i(ce,N))re<X&&0>i(we,ce)?(j[G]=we,j[re]=N,G=re):(j[G]=ce,j[Oe]=N,G=Oe);else if(re<X&&0>i(we,N))j[G]=we,j[re]=N,G=re;else break e}}return O}function i(j,O){var N=j.sortIndex-O.sortIndex;return N!==0?N:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function C(j){if(x=!1,g(j),!y)if(n(l)!==null)y=!0,Qe(S);else{var O=n(u);O!==null&&B(C,O.startTime-j)}}function S(j,O){y=!1,x&&(x=!1,p(T),T=-1),m=!0;var N=d;try{for(g(O),f=n(l);f!==null&&(!(f.expirationTime>O)||j&&!F());){var G=f.callback;if(typeof G=="function"){f.callback=null,d=f.priorityLevel;var X=G(f.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?f.callback=X:f===n(l)&&r(l),g(O)}else r(l);f=n(l)}if(f!==null)var qe=!0;else{var Oe=n(u);Oe!==null&&B(C,Oe.startTime-O),qe=!1}return qe}finally{f=null,d=N,m=!1}}var b=!1,P=null,T=-1,_=5,R=-1;function F(){return!(e.unstable_now()-R<_)}function ge(){if(P!==null){var j=e.unstable_now();R=j;var O=!0;try{O=P(!0,j)}finally{O?Ke():(b=!1,P=null)}}else b=!1}var Ke;if(typeof h=="function")Ke=function(){h(ge)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Xe=lt.port2;lt.port1.onmessage=ge,Ke=function(){Xe.postMessage(null)}}else Ke=function(){k(ge,0)};function Qe(j){P=j,b||(b=!0,Ke())}function B(j,O){T=k(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Qe(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var N=d;d=O;try{return j()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=d;d=j;try{return O()}finally{d=N}},e.unstable_scheduleCallback=function(j,O,N){var G=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?G+N:G):N=G,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,j={id:c++,callback:O,priorityLevel:j,startTime:N,expirationTime:X,sortIndex:-1},N>G?(j.sortIndex=N,t(u,j),n(l)===null&&j===n(u)&&(x?(p(T),T=-1):x=!0,B(C,N-G))):(j.sortIndex=X,t(l,j),y||m||(y=!0,Qe(S))),j},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(j){var O=d;return function(){var N=d;d=O;try{return j.apply(this,arguments)}finally{d=N}}}})(Xg);Kg.exports=Xg;var Tw=Kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg=w,rt=Tw;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,co={};function xr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(co[e]=t,e=0;e<t.length;e++)qg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,Ew=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},oh={};function Aw(e){return xu.call(oh,e)?!0:xu.call(ih,e)?!1:Ew.test(e)?oh[e]=!0:(ih[e]=!0,!1)}function jw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rw(e,t,n,r){if(t===null||typeof t>"u"||jw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uf,cf);Ae[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uf,cf);Ae[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uf,cf);Ae[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ff(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rw(t,n,i,r)&&(n=null),r||i===null?Aw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,is=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),sh=Symbol.iterator;function Pi(e){return e===null||typeof e!="object"?null:(e=sh&&e[sh]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,xl;function Ni(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var wl=!1;function Sl(e,t){if(!e||wl)return"";wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function Mw(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Pr:return"Portal";case wu:return"Profiler";case df:return"StrictMode";case Su:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jg:return(e.displayName||"Context")+".Consumer";case Zg:return(e._context.displayName||"Context")+".Provider";case hf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pf:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}function Iw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(t);case 8:return t===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lw(e){var t=t0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function os(e){e._valueTracker||(e._valueTracker=Lw(e))}function n0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=t0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bu(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ah(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function r0(e,t){t=t.checked,t!=null&&ff(e,"checked",t,!1)}function Pu(e,t){r0(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tu(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tu(e,t,n){(t!=="number"||Qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Di=Array.isArray;function Hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Di(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function i0(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function o0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?o0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ss,s0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ss=ss||document.createElement("div"),ss.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ss.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ow=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){Ow.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function a0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function l0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=a0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nw=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(e,t){if(t){if(Nw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Iu=null,Yr=null,Gr=null;function fh(e){if(e=Vo(e)){if(typeof Iu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=$a(t),Iu(e.stateNode,e.type,t))}}function u0(e){Yr?Gr?Gr.push(e):Gr=[e]:Yr=e}function c0(){if(Yr){var e=Yr,t=Gr;if(Gr=Yr=null,fh(e),t)for(e=0;e<t.length;e++)fh(t[e])}}function f0(e,t){return e(t)}function d0(){}var kl=!1;function h0(e,t,n){if(kl)return e(t,n);kl=!0;try{return f0(e,t,n)}finally{kl=!1,(Yr!==null||Gr!==null)&&(d0(),c0())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=$a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Lu=!1;if(tn)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{Lu=!1}function Dw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Gi=!1,qs=null,Zs=!1,Ou=null,_w={onError:function(e){Gi=!0,qs=e}};function zw(e,t,n,r,i,o,s,a,l){Gi=!1,qs=null,Dw.apply(_w,arguments)}function $w(e,t,n,r,i,o,s,a,l){if(zw.apply(this,arguments),Gi){if(Gi){var u=qs;Gi=!1,qs=null}else throw Error(A(198));Zs||(Zs=!0,Ou=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dh(e){if(wr(e)!==e)throw Error(A(188))}function Fw(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dh(i),e;if(o===r)return dh(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function m0(e){return e=Fw(e),e!==null?g0(e):null}function g0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=g0(e);if(t!==null)return t;e=e.sibling}return null}var v0=rt.unstable_scheduleCallback,hh=rt.unstable_cancelCallback,Vw=rt.unstable_shouldYield,Bw=rt.unstable_requestPaint,de=rt.unstable_now,Uw=rt.unstable_getCurrentPriorityLevel,gf=rt.unstable_ImmediatePriority,y0=rt.unstable_UserBlockingPriority,Js=rt.unstable_NormalPriority,Ww=rt.unstable_LowPriority,x0=rt.unstable_IdlePriority,Na=null,Ft=null;function Hw(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Kw,Yw=Math.log,Gw=Math.LN2;function Kw(e){return e>>>=0,e===0?32:31-(Yw(e)/Gw|0)|0}var as=64,ls=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_i(a):(o&=s,o!==0&&(r=_i(o)))}else s=n&~i,s!==0?r=_i(s):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Xw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Tt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Xw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Nu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function w0(){var e=as;return as<<=1,!(as&4194240)&&(as=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function qw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function S0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var k0,yf,C0,b0,P0,Du=!1,us=[],Tn=null,En=null,An=null,po=new Map,mo=new Map,wn=[],Zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Ei(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vo(t),t!==null&&yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jw(e,t,n,r,i){switch(t){case"focusin":return Tn=Ei(Tn,e,t,n,r,i),!0;case"dragenter":return En=Ei(En,e,t,n,r,i),!0;case"mouseover":return An=Ei(An,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return po.set(o,Ei(po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mo.set(o,Ei(mo.get(o)||null,e,t,n,r,i)),!0}return!1}function T0(e){var t=Zn(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=p0(n),t!==null){e.blockedOn=t,P0(e.priority,function(){C0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mu=r,n.target.dispatchEvent(r),Mu=null}else return t=Vo(n),t!==null&&yf(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){js(e)&&n.delete(t)}function e2(){Du=!1,Tn!==null&&js(Tn)&&(Tn=null),En!==null&&js(En)&&(En=null),An!==null&&js(An)&&(An=null),po.forEach(mh),mo.forEach(mh)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,e2)))}function go(e){function t(i){return Ai(i,e)}if(0<us.length){Ai(us[0],e);for(var n=1;n<us.length;n++){var r=us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&Ai(Tn,e),En!==null&&Ai(En,e),An!==null&&Ai(An,e),po.forEach(t),mo.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)T0(n),n.blockedOn===null&&wn.shift()}var Kr=ln.ReactCurrentBatchConfig,ta=!0;function t2(e,t,n,r){var i=Y,o=Kr.transition;Kr.transition=null;try{Y=1,xf(e,t,n,r)}finally{Y=i,Kr.transition=o}}function n2(e,t,n,r){var i=Y,o=Kr.transition;Kr.transition=null;try{Y=4,xf(e,t,n,r)}finally{Y=i,Kr.transition=o}}function xf(e,t,n,r){if(ta){var i=_u(e,t,n,r);if(i===null)Ll(e,t,r,na,n),ph(e,r);else if(Jw(i,e,t,n,r))r.stopPropagation();else if(ph(e,r),t&4&&-1<Zw.indexOf(e)){for(;i!==null;){var o=Vo(i);if(o!==null&&k0(o),o=_u(e,t,n,r),o===null&&Ll(e,t,r,na,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var na=null;function _u(e,t,n,r){if(na=null,e=mf(r),e=Zn(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=p0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return na=e,null}function E0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uw()){case gf:return 1;case y0:return 4;case Js:case Ww:return 16;case x0:return 536870912;default:return 16}default:return 16}}var kn=null,wf=null,Rs=null;function A0(){if(Rs)return Rs;var e,t=wf,n=t.length,r,i="value"in kn?kn.value:kn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Rs=i.slice(e,1<r?1-r:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function gh(){return!1}function st(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cs:gh,this.isPropagationStopped=gh,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=st(mi),Fo=ae({},mi,{view:0,detail:0}),r2=st(Fo),bl,Pl,ji,Da=ae({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(bl=e.screenX-ji.screenX,Pl=e.screenY-ji.screenY):Pl=bl=0,ji=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),vh=st(Da),i2=ae({},Da,{dataTransfer:0}),o2=st(i2),s2=ae({},Fo,{relatedTarget:0}),Tl=st(s2),a2=ae({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),l2=st(a2),u2=ae({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c2=st(u2),f2=ae({},mi,{data:0}),yh=st(f2),d2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p2[e])?!!t[e]:!1}function kf(){return m2}var g2=ae({},Fo,{key:function(e){if(e.key){var t=d2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v2=st(g2),y2=ae({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=st(y2),x2=ae({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),w2=st(x2),S2=ae({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),k2=st(S2),C2=ae({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b2=st(C2),P2=[9,13,27,32],Cf=tn&&"CompositionEvent"in window,Ki=null;tn&&"documentMode"in document&&(Ki=document.documentMode);var T2=tn&&"TextEvent"in window&&!Ki,j0=tn&&(!Cf||Ki&&8<Ki&&11>=Ki),wh=String.fromCharCode(32),Sh=!1;function R0(e,t){switch(e){case"keyup":return P2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function E2(e,t){switch(e){case"compositionend":return M0(t);case"keypress":return t.which!==32?null:(Sh=!0,wh);case"textInput":return e=t.data,e===wh&&Sh?null:e;default:return null}}function A2(e,t){if(Er)return e==="compositionend"||!Cf&&R0(e,t)?(e=A0(),Rs=wf=kn=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return j0&&t.locale!=="ko"?null:t.data;default:return null}}var j2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j2[e.type]:t==="textarea"}function I0(e,t,n,r){u0(r),t=ra(t,"onChange"),0<t.length&&(n=new Sf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xi=null,vo=null;function R2(e){U0(e,0)}function _a(e){var t=Rr(e);if(n0(t))return e}function M2(e,t){if(e==="change")return t}var L0=!1;if(tn){var El;if(tn){var Al="oninput"in document;if(!Al){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),Al=typeof Ch.oninput=="function"}El=Al}else El=!1;L0=El&&(!document.documentMode||9<document.documentMode)}function bh(){Xi&&(Xi.detachEvent("onpropertychange",O0),vo=Xi=null)}function O0(e){if(e.propertyName==="value"&&_a(vo)){var t=[];I0(t,vo,e,mf(e)),h0(R2,t)}}function I2(e,t,n){e==="focusin"?(bh(),Xi=t,vo=n,Xi.attachEvent("onpropertychange",O0)):e==="focusout"&&bh()}function L2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _a(vo)}function O2(e,t){if(e==="click")return _a(t)}function N2(e,t){if(e==="input"||e==="change")return _a(t)}function D2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:D2;function yo(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xu.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function Ph(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var n=Ph(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function N0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?N0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function D0(){for(var e=window,t=Qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qs(e.document)}return t}function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _2(e){var t=D0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&N0(n.ownerDocument.documentElement,n)){if(r!==null&&bf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Th(n,o);var s=Th(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var z2=tn&&"documentMode"in document&&11>=document.documentMode,Ar=null,zu=null,Qi=null,$u=!1;function Eh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||Ar==null||Ar!==Qs(r)||(r=Ar,"selectionStart"in r&&bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&yo(Qi,r)||(Qi=r,r=ra(zu,"onSelect"),0<r.length&&(t=new Sf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionend:fs("Transition","TransitionEnd")},jl={},_0={};tn&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function za(e){if(jl[e])return jl[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _0)return jl[e]=t[n];return e}var z0=za("animationend"),$0=za("animationiteration"),F0=za("animationstart"),V0=za("transitionend"),B0=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){B0.set(e,t),xr(t,[e])}for(var Rl=0;Rl<Ah.length;Rl++){var Ml=Ah[Rl],$2=Ml.toLowerCase(),F2=Ml[0].toUpperCase()+Ml.slice(1);Fn($2,"on"+F2)}Fn(z0,"onAnimationEnd");Fn($0,"onAnimationIteration");Fn(F0,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(V0,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V2=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function jh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$w(r,t,void 0,e),e.currentTarget=null}function U0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;jh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;jh(i,a,u),o=l}}}if(Zs)throw e=Ou,Zs=!1,Ou=null,e}function q(e,t){var n=t[Wu];n===void 0&&(n=t[Wu]=new Set);var r=e+"__bubble";n.has(r)||(W0(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),W0(n,e,r,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[ds]){e[ds]=!0,qg.forEach(function(n){n!=="selectionchange"&&(V2.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Il("selectionchange",!1,t))}}function W0(e,t,n,r){switch(E0(t)){case 1:var i=t2;break;case 4:i=n2;break;default:i=xf}n=i.bind(null,t,n,e),i=void 0,!Lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}h0(function(){var u=o,c=mf(n),f=[];e:{var d=B0.get(e);if(d!==void 0){var m=Sf,y=e;switch(e){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":m=v2;break;case"focusin":y="focus",m=Tl;break;case"focusout":y="blur",m=Tl;break;case"beforeblur":case"afterblur":m=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=o2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=w2;break;case z0:case $0:case F0:m=l2;break;case V0:m=k2;break;case"scroll":m=r2;break;case"wheel":m=b2;break;case"copy":case"cut":case"paste":m=c2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=xh}var x=(t&4)!==0,k=!x&&e==="scroll",p=x?d!==null?d+"Capture":null:d;x=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=ho(h,p),C!=null&&x.push(wo(h,C,g)))),k)break;h=h.return}0<x.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:x}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",d&&n!==Mu&&(y=n.relatedTarget||n.fromElement)&&(Zn(y)||y[nn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Zn(y):null,y!==null&&(k=wr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=vh,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=xh,C="onPointerLeave",p="onPointerEnter",h="pointer"),k=m==null?d:Rr(m),g=y==null?d:Rr(y),d=new x(C,h+"leave",m,n,c),d.target=k,d.relatedTarget=g,C=null,Zn(c)===u&&(x=new x(p,h+"enter",y,n,c),x.target=g,x.relatedTarget=k,C=x),k=C,m&&y)t:{for(x=m,p=y,h=0,g=x;g;g=kr(g))h++;for(g=0,C=p;C;C=kr(C))g++;for(;0<h-g;)x=kr(x),h--;for(;0<g-h;)p=kr(p),g--;for(;h--;){if(x===p||p!==null&&x===p.alternate)break t;x=kr(x),p=kr(p)}x=null}else x=null;m!==null&&Rh(f,d,m,x,!1),y!==null&&k!==null&&Rh(f,k,y,x,!0)}}e:{if(d=u?Rr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var S=M2;else if(kh(d))if(L0)S=N2;else{S=L2;var b=I2}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=O2);if(S&&(S=S(e,u))){I0(f,S,n,c);break e}b&&b(e,d,u),e==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Tu(d,"number",d.value)}switch(b=u?Rr(u):window,e){case"focusin":(kh(b)||b.contentEditable==="true")&&(Ar=b,zu=u,Qi=null);break;case"focusout":Qi=zu=Ar=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,Eh(f,n,c);break;case"selectionchange":if(z2)break;case"keydown":case"keyup":Eh(f,n,c)}var P;if(Cf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Er?R0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(j0&&n.locale!=="ko"&&(Er||T!=="onCompositionStart"?T==="onCompositionEnd"&&Er&&(P=A0()):(kn=c,wf="value"in kn?kn.value:kn.textContent,Er=!0)),b=ra(u,T),0<b.length&&(T=new yh(T,e,null,n,c),f.push({event:T,listeners:b}),P?T.data=P:(P=M0(n),P!==null&&(T.data=P)))),(P=T2?E2(e,n):A2(e,n))&&(u=ra(u,"onBeforeInput"),0<u.length&&(c=new yh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}U0(f,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ra(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ho(e,n),o!=null&&r.unshift(wo(e,o,i)),o=ho(e,t),o!=null&&r.push(wo(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ho(n,o),l!=null&&s.unshift(wo(n,l,a))):i||(l=ho(n,o),l!=null&&s.push(wo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var B2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function Mh(e){return(typeof e=="string"?e:""+e).replace(B2,`
`).replace(U2,"")}function hs(e,t,n){if(t=Mh(t),Mh(e)!==t&&n)throw Error(A(425))}function ia(){}var Fu=null,Vu=null;function Bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,W2=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,H2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(e){return Ih.resolve(null).then(e).catch(Y2)}:Uu;function Y2(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),Dt="__reactFiber$"+gi,So="__reactProps$"+gi,nn="__reactContainer$"+gi,Wu="__reactEvents$"+gi,G2="__reactListeners$"+gi,K2="__reactHandles$"+gi;function Zn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lh(e);e!==null;){if(n=e[Dt])return n;e=Lh(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){return e=e[Dt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function $a(e){return e[So]||null}var Hu=[],Mr=-1;function Vn(e){return{current:e}}function J(e){0>Mr||(e.current=Hu[Mr],Hu[Mr]=null,Mr--)}function Q(e,t){Mr++,Hu[Mr]=e.current,e.current=t}var Nn={},Le=Vn(Nn),We=Vn(!1),fr=Nn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function oa(){J(We),J(Le)}function Oh(e,t,n){if(Le.current!==Nn)throw Error(A(168));Q(Le,t),Q(We,n)}function H0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Iw(e)||"Unknown",i));return ae({},n,r)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,fr=Le.current,Q(Le,e),Q(We,We.current),!0}function Nh(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=H0(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,J(We),J(Le),Q(Le,e)):J(We),Q(We,n)}var Kt=null,Fa=!1,Nl=!1;function Y0(e){Kt===null?Kt=[e]:Kt.push(e)}function X2(e){Fa=!0,Y0(e)}function Bn(){if(!Nl&&Kt!==null){Nl=!0;var e=0,t=Y;try{var n=Kt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Fa=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),v0(gf,Bn),i}finally{Y=t,Nl=!1}}return null}var Ir=[],Lr=0,aa=null,la=0,dt=[],ht=0,dr=null,Xt=1,Qt="";function Gn(e,t){Ir[Lr++]=la,Ir[Lr++]=aa,aa=e,la=t}function G0(e,t,n){dt[ht++]=Xt,dt[ht++]=Qt,dt[ht++]=dr,dr=e;var r=Xt;e=Qt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var o=32-Tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xt=1<<32-Tt(t)+i|n<<i|r,Qt=o+e}else Xt=1<<o|n<<i|r,Qt=e}function Pf(e){e.return!==null&&(Gn(e,1),G0(e,1,0))}function Tf(e){for(;e===aa;)aa=Ir[--Lr],Ir[Lr]=null,la=Ir[--Lr],Ir[Lr]=null;for(;e===dr;)dr=dt[--ht],dt[ht]=null,Qt=dt[--ht],dt[ht]=null,Xt=dt[--ht],dt[ht]=null}var et=null,Je=null,te=!1,Pt=null;function K0(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:Xt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Je=null,!0):!1;default:return!1}}function Yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gu(e){if(te){var t=Je;if(t){var n=t;if(!Dh(e,t)){if(Yu(e))throw Error(A(418));t=jn(n.nextSibling);var r=et;t&&Dh(e,t)?K0(r,n):(e.flags=e.flags&-4097|2,te=!1,et=e)}}else{if(Yu(e))throw Error(A(418));e.flags=e.flags&-4097|2,te=!1,et=e}}}function _h(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function ps(e){if(e!==et)return!1;if(!te)return _h(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bu(e.type,e.memoizedProps)),t&&(t=Je)){if(Yu(e))throw X0(),Error(A(418));for(;t;)K0(e,t),t=jn(t.nextSibling)}if(_h(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?jn(e.stateNode.nextSibling):null;return!0}function X0(){for(var e=Je;e;)e=jn(e.nextSibling)}function ei(){Je=et=null,te=!1}function Ef(e){Pt===null?Pt=[e]:Pt.push(e)}var Q2=ln.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ua=Vn(null),ca=null,Or=null,Af=null;function jf(){Af=Or=ca=null}function Rf(e){var t=ua.current;J(ua),e._currentValue=t}function Ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){ca=e,Af=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Af!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(ca===null)throw Error(A(308));Or=e,ca.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var Jn=null;function Mf(e){Jn===null?Jn=[e]:Jn.push(e)}function Q0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Mf(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function If(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Mf(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}function zh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fa(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(d=t,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=ae({},f,d);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=s,e.lanes=s,e.memoizedState=f}}function $h(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Z0=new Qg.Component().refs;function Xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Va={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=In(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(Et(t,e,i,r),Is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=In(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(Et(t,e,i,r),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=In(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(Et(t,e,r,n),Is(t,e,r))}};function Fh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(i,o):!0}function J0(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=He(t)?fr:Le.current,r=t.contextTypes,o=(r=r!=null)?Jr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function Qu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Z0,If(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=He(t)?fr:Le.current,i.context=Jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Va.enqueueReplaceState(i,i.state,null),fa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Z0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ms(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bh(e){var t=e._init;return t(e._payload)}function ev(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Ln(p,h),p.index=0,p.sibling=null,p}function o(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,C){return h===null||h.tag!==6?(h=Bl(g,p.mode,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,C){var S=g.type;return S===Tr?c(p,h,g.props.children,C,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yn&&Bh(S)===h.type)?(C=i(h,g.props),C.ref=Ri(p,h,g),C.return=p,C):(C=zs(g.type,g.key,g.props,null,p.mode,C),C.ref=Ri(p,h,g),C.return=p,C)}function u(p,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Ul(g,p.mode,C),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,C,S){return h===null||h.tag!==7?(h=ir(g,p.mode,C,S),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Bl(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case is:return g=zs(h.type,h.key,h.props,null,p.mode,g),g.ref=Ri(p,null,h),g.return=p,g;case Pr:return h=Ul(h,p.mode,g),h.return=p,h;case yn:var C=h._init;return f(p,C(h._payload),g)}if(Di(h)||Pi(h))return h=ir(h,p.mode,g,null),h.return=p,h;ms(p,h)}return null}function d(p,h,g,C){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(p,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case is:return g.key===S?l(p,h,g,C):null;case Pr:return g.key===S?u(p,h,g,C):null;case yn:return S=g._init,d(p,h,S(g._payload),C)}if(Di(g)||Pi(g))return S!==null?null:c(p,h,g,C,null);ms(p,g)}return null}function m(p,h,g,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(h,p,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case is:return p=p.get(C.key===null?g:C.key)||null,l(h,p,C,S);case Pr:return p=p.get(C.key===null?g:C.key)||null,u(h,p,C,S);case yn:var b=C._init;return m(p,h,g,b(C._payload),S)}if(Di(C)||Pi(C))return p=p.get(g)||null,c(h,p,C,S,null);ms(h,C)}return null}function y(p,h,g,C){for(var S=null,b=null,P=h,T=h=0,_=null;P!==null&&T<g.length;T++){P.index>T?(_=P,P=null):_=P.sibling;var R=d(p,P,g[T],C);if(R===null){P===null&&(P=_);break}e&&P&&R.alternate===null&&t(p,P),h=o(R,h,T),b===null?S=R:b.sibling=R,b=R,P=_}if(T===g.length)return n(p,P),te&&Gn(p,T),S;if(P===null){for(;T<g.length;T++)P=f(p,g[T],C),P!==null&&(h=o(P,h,T),b===null?S=P:b.sibling=P,b=P);return te&&Gn(p,T),S}for(P=r(p,P);T<g.length;T++)_=m(P,p,T,g[T],C),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?T:_.key),h=o(_,h,T),b===null?S=_:b.sibling=_,b=_);return e&&P.forEach(function(F){return t(p,F)}),te&&Gn(p,T),S}function x(p,h,g,C){var S=Pi(g);if(typeof S!="function")throw Error(A(150));if(g=S.call(g),g==null)throw Error(A(151));for(var b=S=null,P=h,T=h=0,_=null,R=g.next();P!==null&&!R.done;T++,R=g.next()){P.index>T?(_=P,P=null):_=P.sibling;var F=d(p,P,R.value,C);if(F===null){P===null&&(P=_);break}e&&P&&F.alternate===null&&t(p,P),h=o(F,h,T),b===null?S=F:b.sibling=F,b=F,P=_}if(R.done)return n(p,P),te&&Gn(p,T),S;if(P===null){for(;!R.done;T++,R=g.next())R=f(p,R.value,C),R!==null&&(h=o(R,h,T),b===null?S=R:b.sibling=R,b=R);return te&&Gn(p,T),S}for(P=r(p,P);!R.done;T++,R=g.next())R=m(P,p,T,R.value,C),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?T:R.key),h=o(R,h,T),b===null?S=R:b.sibling=R,b=R);return e&&P.forEach(function(ge){return t(p,ge)}),te&&Gn(p,T),S}function k(p,h,g,C){if(typeof g=="object"&&g!==null&&g.type===Tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case is:e:{for(var S=g.key,b=h;b!==null;){if(b.key===S){if(S=g.type,S===Tr){if(b.tag===7){n(p,b.sibling),h=i(b,g.props.children),h.return=p,p=h;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yn&&Bh(S)===b.type){n(p,b.sibling),h=i(b,g.props),h.ref=Ri(p,b,g),h.return=p,p=h;break e}n(p,b);break}else t(p,b);b=b.sibling}g.type===Tr?(h=ir(g.props.children,p.mode,C,g.key),h.return=p,p=h):(C=zs(g.type,g.key,g.props,null,p.mode,C),C.ref=Ri(p,h,g),C.return=p,p=C)}return s(p);case Pr:e:{for(b=g.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Ul(g,p.mode,C),h.return=p,p=h}return s(p);case yn:return b=g._init,k(p,h,b(g._payload),C)}if(Di(g))return y(p,h,g,C);if(Pi(g))return x(p,h,g,C);ms(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=Bl(g,p.mode,C),h.return=p,p=h),s(p)):n(p,h)}return k}var ti=ev(!0),tv=ev(!1),Bo={},Vt=Vn(Bo),ko=Vn(Bo),Co=Vn(Bo);function er(e){if(e===Bo)throw Error(A(174));return e}function Lf(e,t){switch(Q(Co,t),Q(ko,e),Q(Vt,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Au(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Au(t,e)}J(Vt),Q(Vt,t)}function ni(){J(Vt),J(ko),J(Co)}function nv(e){er(Co.current);var t=er(Vt.current),n=Au(t,e.type);t!==n&&(Q(ko,e),Q(Vt,n))}function Of(e){ko.current===e&&(J(Vt),J(ko))}var ie=Vn(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function Nf(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Ls=ln.ReactCurrentDispatcher,_l=ln.ReactCurrentBatchConfig,hr=0,se=null,ve=null,ke=null,ha=!1,qi=!1,bo=0,q2=0;function je(){throw Error(A(321))}function Df(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function _f(e,t,n,r,i,o){if(hr=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ls.current=e===null||e.memoizedState===null?tS:nS,e=n(r,i),qi){o=0;do{if(qi=!1,bo=0,25<=o)throw Error(A(301));o+=1,ke=ve=null,t.updateQueue=null,Ls.current=rS,e=n(r,i)}while(qi)}if(Ls.current=pa,t=ve!==null&&ve.next!==null,hr=0,ke=ve=se=null,ha=!1,t)throw Error(A(300));return e}function zf(){var e=bo!==0;return bo=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?se.memoizedState=ke=e:ke=ke.next=e,ke}function vt(){if(ve===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?se.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(A(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?se.memoizedState=ke=e:ke=ke.next=e}return ke}function Po(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=vt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,se.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,jt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=vt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);jt(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rv(){}function iv(e,t){var n=se,r=vt(),i=t(),o=!jt(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,$f(av.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,To(9,sv.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(A(349));hr&30||ov(n,t,i)}return i}function ov(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sv(e,t,n,r){t.value=n,t.getSnapshot=r,lv(t)&&uv(e)}function av(e,t,n){return n(function(){lv(t)&&uv(e)})}function lv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function uv(e){var t=rn(e,1);t!==null&&Et(t,e,1,-1)}function Uh(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=eS.bind(null,se,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cv(){return vt().memoizedState}function Os(e,t,n,r){var i=Lt();se.flags|=e,i.memoizedState=To(1|t,n,void 0,r===void 0?null:r)}function Ba(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(ve!==null){var s=ve.memoizedState;if(o=s.destroy,r!==null&&Df(r,s.deps)){i.memoizedState=To(t,n,o,r);return}}se.flags|=e,i.memoizedState=To(1|t,n,o,r)}function Wh(e,t){return Os(8390656,8,e,t)}function $f(e,t){return Ba(2048,8,e,t)}function fv(e,t){return Ba(4,2,e,t)}function dv(e,t){return Ba(4,4,e,t)}function hv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pv(e,t,n){return n=n!=null?n.concat([e]):null,Ba(4,4,hv.bind(null,t,e),n)}function Ff(){}function mv(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Df(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gv(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Df(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vv(e,t,n){return hr&21?(jt(n,t)||(n=w0(),se.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function Z2(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{Y=n,_l.transition=r}}function yv(){return vt().memoizedState}function J2(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xv(e))wv(t,n);else if(n=Q0(e,t,n,r),n!==null){var i=_e();Et(n,e,r,i),Sv(n,t,r)}}function eS(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xv(e))wv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,jt(a,s)){var l=t.interleaved;l===null?(i.next=i,Mf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Q0(e,t,i,r),n!==null&&(i=_e(),Et(n,e,r,i),Sv(n,t,r))}}function xv(e){var t=e.alternate;return e===se||t!==null&&t===se}function wv(e,t){qi=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}var pa={readContext:gt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},tS={readContext:gt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Wh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Os(4194308,4,hv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){return Os(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J2.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Uh,useDebugValue:Ff,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Uh(!1),t=e[0];return e=Z2.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Lt();if(te){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Pe===null)throw Error(A(349));hr&30||ov(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wh(av.bind(null,r,o,e),[e]),r.flags|=2048,To(9,sv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Pe.identifierPrefix;if(te){var n=Qt,r=Xt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=q2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nS={readContext:gt,useCallback:mv,useContext:gt,useEffect:$f,useImperativeHandle:pv,useInsertionEffect:fv,useLayoutEffect:dv,useMemo:gv,useReducer:zl,useRef:cv,useState:function(){return zl(Po)},useDebugValue:Ff,useDeferredValue:function(e){var t=vt();return vv(t,ve.memoizedState,e)},useTransition:function(){var e=zl(Po)[0],t=vt().memoizedState;return[e,t]},useMutableSource:rv,useSyncExternalStore:iv,useId:yv,unstable_isNewReconciler:!1},rS={readContext:gt,useCallback:mv,useContext:gt,useEffect:$f,useImperativeHandle:pv,useInsertionEffect:fv,useLayoutEffect:dv,useMemo:gv,useReducer:$l,useRef:cv,useState:function(){return $l(Po)},useDebugValue:Ff,useDeferredValue:function(e){var t=vt();return ve===null?t.memoizedState=e:vv(t,ve.memoizedState,e)},useTransition:function(){var e=$l(Po)[0],t=vt().memoizedState;return[e,t]},useMutableSource:rv,useSyncExternalStore:iv,useId:yv,unstable_isNewReconciler:!1};function ri(e,t){try{var n="",r=t;do n+=Mw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iS=typeof WeakMap=="function"?WeakMap:Map;function kv(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ga||(ga=!0,ac=r),qu(e,t)},n}function Cv(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){qu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qu(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yS.bind(null,e,t,n),t.then(e,e))}function Yh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var oS=ln.ReactCurrentOwner,Be=!1;function De(e,t,n,r){t.child=e===null?tv(t,null,n,r):ti(t,e.child,n,r)}function Kh(e,t,n,r,i){n=n.render;var o=t.ref;return Xr(t,i),r=_f(e,t,n,r,o,i),n=zf(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(te&&n&&Pf(t),t.flags|=1,De(e,t,r,i),t.child)}function Xh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bv(e,t,o,r,i)):(e=zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(s,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function bv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(yo(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,on(e,t,i)}return Zu(e,t,n,r,i)}function Pv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Dr,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Dr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(Dr,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(Dr,Ze),Ze|=r;return De(e,t,i,n),t.child}function Tv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zu(e,t,n,r,i){var o=He(n)?fr:Le.current;return o=Jr(t,o),Xr(t,i),n=_f(e,t,n,r,o,i),r=zf(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(te&&r&&Pf(t),t.flags|=1,De(e,t,n,i),t.child)}function Qh(e,t,n,r,i){if(He(n)){var o=!0;sa(t)}else o=!1;if(Xr(t,i),t.stateNode===null)Ns(e,t),J0(t,n,r),Qu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=He(n)?fr:Le.current,u=Jr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vh(t,s,r,u),xn=!1;var d=t.memoizedState;s.state=d,fa(t,r,s,i),l=t.memoizedState,a!==r||d!==l||We.current||xn?(typeof c=="function"&&(Xu(t,n,c,r),l=t.memoizedState),(a=xn||Fh(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,q0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ct(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=gt(l):(l=He(n)?fr:Le.current,l=Jr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Vh(t,s,r,l),xn=!1,d=t.memoizedState,s.state=d,fa(t,r,s,i);var y=t.memoizedState;a!==f||d!==y||We.current||xn?(typeof m=="function"&&(Xu(t,n,m,r),y=t.memoizedState),(u=xn||Fh(t,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ju(e,t,n,r,o,i)}function Ju(e,t,n,r,i,o){Tv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Nh(t,n,!1),on(e,t,o);r=t.stateNode,oS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ti(t,e.child,null,o),t.child=ti(t,null,a,o)):De(e,t,a,o),t.memoizedState=r.state,i&&Nh(t,n,!0),t.child}function Ev(e){var t=e.stateNode;t.pendingContext?Oh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oh(e,t.context,!1),Lf(e,t.containerInfo)}function qh(e,t,n,r,i){return ei(),Ef(i),t.flags|=256,De(e,t,n,r),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Av(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(ie,i&1),e===null)return Gu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ha(s,r,0,null),e=ir(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=tc(n),t.memoizedState=ec,e):Vf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ln(a,o):(o=ir(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?tc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ec,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vf(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gs(e,t,n,r){return r!==null&&Ef(r),ti(t,e.child,null,n),e=Vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(A(422))),gs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ha({mode:"visible",children:r.children},i,0,null),o=ir(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ti(t,e.child,null,s),t.child.memoizedState=tc(s),t.memoizedState=ec,o);if(!(t.mode&1))return gs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=Fl(o,r,void 0),gs(e,t,s,r)}if(a=(s&e.childLanes)!==0,Be||a){if(r=Pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),Et(r,e,i,-1))}return Gf(),r=Fl(Error(A(421))),gs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=jn(i.nextSibling),et=t,te=!0,Pt=null,e!==null&&(dt[ht++]=Xt,dt[ht++]=Qt,dt[ht++]=dr,Xt=e.id,Qt=e.overflow,dr=t),t=Vf(t,r.children),t.flags|=4096,t)}function Zh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ku(e.return,t,n)}function Vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zh(e,n,t);else if(e.tag===19)Zh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&da(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function aS(e,t,n){switch(t.tag){case 3:Ev(t),ei();break;case 5:nv(t);break;case 1:He(t.type)&&sa(t);break;case 4:Lf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(ua,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Av(e,t,n):(Q(ie,ie.current&1),e=on(e,t,n),e!==null?e.sibling:null);Q(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Pv(e,t,n)}return on(e,t,n)}var Rv,nc,Mv,Iv;Rv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};Mv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,er(Vt.current);var o=null;switch(n){case"input":i=bu(e,i),r=bu(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=Eu(e,i),r=Eu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ia)}ju(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Iv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lS(e,t,n){var r=t.pendingProps;switch(Tf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return He(t.type)&&oa(),Re(t),null;case 3:return r=t.stateNode,ni(),J(We),J(Le),Nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(cc(Pt),Pt=null))),nc(e,t),Re(t),null;case 5:Of(t);var i=er(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Mv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Re(t),null}if(e=er(Vt.current),ps(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[So]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)q(zi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":ah(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":uh(r,o),q("invalid",r)}ju(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&hs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&hs(r.textContent,a,e),i=["children",""+a]):co.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":os(r),lh(r,o,!0);break;case"textarea":os(r),ch(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ia)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=o0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Dt]=t,e[So]=r,Rv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ru(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)q(zi[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":ah(e,r),i=bu(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),q("invalid",e);break;case"textarea":uh(e,r),i=Eu(e,r),q("invalid",e);break;default:i=r}ju(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?l0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(e,l):typeof l=="number"&&fo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(co.hasOwnProperty(o)?l!=null&&o==="onScroll"&&q("scroll",e):l!=null&&ff(e,o,l,s))}switch(n){case"input":os(e),lh(e,r,!1);break;case"textarea":os(e),ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Iv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=er(Co.current),er(Vt.current),ps(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:hs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Re(t),null;case 13:if(J(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Je!==null&&t.mode&1&&!(t.flags&128))X0(),ei(),t.flags|=98560,o=!1;else if(o=ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Dt]=t}else ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else Pt!==null&&(cc(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ye===0&&(ye=3):Gf())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return ni(),nc(e,t),e===null&&xo(t.stateNode.containerInfo),Re(t),null;case 10:return Rf(t.type._context),Re(t),null;case 17:return He(t.type)&&oa(),Re(t),null;case 19:if(J(ie),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Mi(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=da(e),s!==null){for(t.flags|=128,Mi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>ii&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304)}else{if(!r)if(e=da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return Re(t),null}else 2*de()-o.renderingStartTime>ii&&n!==1073741824&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,Q(ie,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Yf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function uS(e,t){switch(Tf(t),t.tag){case 1:return He(t.type)&&oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ni(),J(We),J(Le),Nf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Of(t),null;case 13:if(J(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ie),null;case 4:return ni(),null;case 10:return Rf(t.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var vs=!1,Ie=!1,cS=typeof WeakSet=="function"?WeakSet:Set,M=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function rc(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Jh=!1;function fS(e,t){if(Fu=ta,e=D0(),bf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:e,selectionRange:n},ta=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ct(t.type,x),k);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(C){ue(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=Jh,Jh=!1,y}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&rc(t,n,o)}i=i.next}while(i!==r)}}function Ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ic(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lv(e){var t=e.alternate;t!==null&&(e.alternate=null,Lv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[So],delete t[Wu],delete t[G2],delete t[K2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ov(e){return e.tag===5||e.tag===3||e.tag===4}function ep(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ov(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(r!==4&&(e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}var Te=null,bt=!1;function fn(e,t,n){for(n=n.child;n!==null;)Nv(e,t,n),n=n.sibling}function Nv(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:Ie||Nr(n,t);case 6:var r=Te,i=bt;Te=null,fn(e,t,n),Te=r,bt=i,Te!==null&&(bt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(bt?(e=Te,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),go(e)):Ol(Te,n.stateNode));break;case 4:r=Te,i=bt,Te=n.stateNode.containerInfo,bt=!0,fn(e,t,n),Te=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rc(n,t,s),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Ie&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,fn(e,t,n),Ie=r):fn(e,t,n);break;default:fn(e,t,n)}}function tp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cS),t.forEach(function(r){var i=wS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,bt=!1;break e;case 3:Te=a.stateNode.containerInfo,bt=!0;break e;case 4:Te=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Te===null)throw Error(A(160));Nv(o,s,i),Te=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dv(t,e),t=t.sibling}function Dv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),It(e),r&4){try{Zi(3,e,e.return),Ua(3,e)}catch(x){ue(e,e.return,x)}try{Zi(5,e,e.return)}catch(x){ue(e,e.return,x)}}break;case 1:wt(t,e),It(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(wt(t,e),It(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var i=e.stateNode;try{fo(i,"")}catch(x){ue(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&r0(i,o),Ru(a,s);var u=Ru(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?l0(i,f):c==="dangerouslySetInnerHTML"?s0(i,f):c==="children"?fo(i,f):ff(i,c,f,u)}switch(a){case"input":Pu(i,o);break;case"textarea":i0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Hr(i,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Hr(i,!!o.multiple,o.defaultValue,!0):Hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[So]=o}catch(x){ue(e,e.return,x)}}break;case 6:if(wt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ue(e,e.return,x)}}break;case 3:if(wt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(x){ue(e,e.return,x)}break;case 4:wt(t,e),It(e);break;case 13:wt(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wf=de())),r&4&&tp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||c,wt(t,e),Ie=u):wt(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(d=M,m=d.child,d.tag){case 0:case 11:case 14:case 15:Zi(4,d,d.return);break;case 1:Nr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ue(r,n,x)}}break;case 5:Nr(d,d.return);break;case 22:if(d.memoizedState!==null){rp(f);continue}}m!==null?(m.return=d,M=m):rp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a0("display",s))}catch(x){ue(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ue(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wt(t,e),It(e),r&4&&tp(e);break;case 21:break;default:wt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ov(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var o=ep(e);sc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ep(e);oc(e,a,s);break;default:throw Error(A(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dS(e,t,n){M=e,_v(e)}function _v(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vs;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=vs;var u=Ie;if(vs=s,(Ie=l)&&!u)for(M=i;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?ip(i):l!==null?(l.return=s,M=l):ip(i);for(;o!==null;)M=o,_v(o),o=o.sibling;M=i,vs=a,Ie=u}np(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):np(e)}}function np(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$h(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$h(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ie||t.flags&512&&ic(t)}catch(d){ue(t,t.return,d)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function rp(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function ip(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ua(4,t)}catch(l){ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ue(t,i,l)}}var o=t.return;try{ic(t)}catch(l){ue(t,o,l)}break;case 5:var s=t.return;try{ic(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var hS=Math.ceil,ma=ln.ReactCurrentDispatcher,Bf=ln.ReactCurrentOwner,mt=ln.ReactCurrentBatchConfig,U=0,Pe=null,pe=null,Ee=0,Ze=0,Dr=Vn(0),ye=0,Eo=null,pr=0,Wa=0,Uf=0,Ji=null,Ve=null,Wf=0,ii=1/0,Yt=null,ga=!1,ac=null,Mn=null,ys=!1,Cn=null,va=0,eo=0,lc=null,Ds=-1,_s=0;function _e(){return U&6?de():Ds!==-1?Ds:Ds=de()}function In(e){return e.mode&1?U&2&&Ee!==0?Ee&-Ee:Q2.transition!==null?(_s===0&&(_s=w0()),_s):(e=Y,e!==0||(e=window.event,e=e===void 0?16:E0(e.type)),e):1}function Et(e,t,n,r){if(50<eo)throw eo=0,lc=null,Error(A(185));$o(e,n,r),(!(U&2)||e!==Pe)&&(e===Pe&&(!(U&2)&&(Wa|=n),ye===4&&Sn(e,Ee)),Ye(e,r),n===1&&U===0&&!(t.mode&1)&&(ii=de()+500,Fa&&Bn()))}function Ye(e,t){var n=e.callbackNode;Qw(e,t);var r=ea(e,e===Pe?Ee:0);if(r===0)n!==null&&hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hh(n),t===1)e.tag===0?X2(op.bind(null,e)):Y0(op.bind(null,e)),H2(function(){!(U&6)&&Bn()}),n=null;else{switch(S0(r)){case 1:n=gf;break;case 4:n=y0;break;case 16:n=Js;break;case 536870912:n=x0;break;default:n=Js}n=Hv(n,zv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zv(e,t){if(Ds=-1,_s=0,U&6)throw Error(A(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=ea(e,e===Pe?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ya(e,r);else{t=r;var i=U;U|=2;var o=Fv();(Pe!==e||Ee!==t)&&(Yt=null,ii=de()+500,rr(e,t));do try{gS();break}catch(a){$v(e,a)}while(1);jf(),ma.current=o,U=i,pe!==null?t=0:(Pe=null,Ee=0,t=ye)}if(t!==0){if(t===2&&(i=Nu(e),i!==0&&(r=i,t=uc(e,i))),t===1)throw n=Eo,rr(e,0),Sn(e,r),Ye(e,de()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!pS(i)&&(t=ya(e,r),t===2&&(o=Nu(e),o!==0&&(r=o,t=uc(e,o))),t===1))throw n=Eo,rr(e,0),Sn(e,r),Ye(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Kn(e,Ve,Yt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Wf+500-de(),10<t)){if(ea(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Uu(Kn.bind(null,e,Ve,Yt),t);break}Kn(e,Ve,Yt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hS(r/1960))-r,10<r){e.timeoutHandle=Uu(Kn.bind(null,e,Ve,Yt),r);break}Kn(e,Ve,Yt);break;case 5:Kn(e,Ve,Yt);break;default:throw Error(A(329))}}}return Ye(e,de()),e.callbackNode===n?zv.bind(null,e):null}function uc(e,t){var n=Ji;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=ya(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&cc(t)),e}function cc(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function pS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!jt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Uf,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function op(e){if(U&6)throw Error(A(327));Qr();var t=ea(e,0);if(!(t&1))return Ye(e,de()),null;var n=ya(e,t);if(e.tag!==0&&n===2){var r=Nu(e);r!==0&&(t=r,n=uc(e,r))}if(n===1)throw n=Eo,rr(e,0),Sn(e,t),Ye(e,de()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,Ve,Yt),Ye(e,de()),null}function Hf(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(ii=de()+500,Fa&&Bn())}}function mr(e){Cn!==null&&Cn.tag===0&&!(U&6)&&Qr();var t=U;U|=1;var n=mt.transition,r=Y;try{if(mt.transition=null,Y=1,e)return e()}finally{Y=r,mt.transition=n,U=t,!(U&6)&&Bn()}}function Yf(){Ze=Dr.current,J(Dr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,W2(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oa();break;case 3:ni(),J(We),J(Le),Nf();break;case 5:Of(r);break;case 4:ni();break;case 13:J(ie);break;case 19:J(ie);break;case 10:Rf(r.type._context);break;case 22:case 23:Yf()}n=n.return}if(Pe=e,pe=e=Ln(e.current,null),Ee=Ze=t,ye=0,Eo=null,Uf=Wa=pr=0,Ve=Ji=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jn=null}return e}function $v(e,t){do{var n=pe;try{if(jf(),Ls.current=pa,ha){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(hr=0,ke=ve=se=null,qi=!1,bo=0,Bf.current=null,n===null||n.return===null){ye=1,Eo=t,pe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Yh(s);if(m!==null){m.flags&=-257,Gh(m,s,a,o,t),m.mode&1&&Hh(o,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Hh(o,u,t),Gf();break e}l=Error(A(426))}}else if(te&&a.mode&1){var k=Yh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Gh(k,s,a,o,t),Ef(ri(l,a));break e}}o=l=ri(l,a),ye!==4&&(ye=2),Ji===null?Ji=[o]:Ji.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=kv(o,l,t);zh(o,p);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mn===null||!Mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Cv(o,a,t);zh(o,C);break e}}o=o.return}while(o!==null)}Bv(n)}catch(S){t=S,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Fv(){var e=ma.current;return ma.current=pa,e===null?pa:e}function Gf(){(ye===0||ye===3||ye===2)&&(ye=4),Pe===null||!(pr&268435455)&&!(Wa&268435455)||Sn(Pe,Ee)}function ya(e,t){var n=U;U|=2;var r=Fv();(Pe!==e||Ee!==t)&&(Yt=null,rr(e,t));do try{mS();break}catch(i){$v(e,i)}while(1);if(jf(),U=n,ma.current=r,pe!==null)throw Error(A(261));return Pe=null,Ee=0,ye}function mS(){for(;pe!==null;)Vv(pe)}function gS(){for(;pe!==null&&!Vw();)Vv(pe)}function Vv(e){var t=Wv(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Bv(e):pe=t,Bf.current=null}function Bv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uS(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,pe=null;return}}else if(n=lS(n,t,Ze),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ye===0&&(ye=5)}function Kn(e,t,n){var r=Y,i=mt.transition;try{mt.transition=null,Y=1,vS(e,t,n,r)}finally{mt.transition=i,Y=r}return null}function vS(e,t,n,r){do Qr();while(Cn!==null);if(U&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qw(e,o),e===Pe&&(pe=Pe=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ys||(ys=!0,Hv(Js,function(){return Qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mt.transition,mt.transition=null;var s=Y;Y=1;var a=U;U|=4,Bf.current=null,fS(e,n),Dv(n,e),_2(Vu),ta=!!Fu,Vu=Fu=null,e.current=n,dS(n),Bw(),U=a,Y=s,mt.transition=o}else e.current=n;if(ys&&(ys=!1,Cn=e,va=i),o=e.pendingLanes,o===0&&(Mn=null),Hw(n.stateNode),Ye(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,e=ac,ac=null,e;return va&1&&e.tag!==0&&Qr(),o=e.pendingLanes,o&1?e===lc?eo++:(eo=0,lc=e):eo=0,Bn(),null}function Qr(){if(Cn!==null){var e=S0(va),t=mt.transition,n=Y;try{if(mt.transition=null,Y=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,va=0,U&6)throw Error(A(331));var i=U;for(U|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Zi(8,c,o)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var d=c.sibling,m=c.return;if(Lv(c),c===u){M=null;break}if(d!==null){d.return=m,M=d;break}M=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var h=e.current;for(M=h;M!==null;){s=M;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,M=g;else e:for(s=h;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ua(9,a)}}catch(S){ue(a,a.return,S)}if(a===s){M=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,M=C;break e}M=a.return}}if(U=i,Bn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Na,e)}catch{}r=!0}return r}finally{Y=n,mt.transition=t}}return!1}function sp(e,t,n){t=ri(n,t),t=kv(e,t,1),e=Rn(e,t,1),t=_e(),e!==null&&($o(e,1,t),Ye(e,t))}function ue(e,t,n){if(e.tag===3)sp(e,e,n);else for(;t!==null;){if(t.tag===3){sp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=ri(n,e),e=Cv(t,e,1),t=Rn(t,e,1),e=_e(),t!==null&&($o(t,1,e),Ye(t,e));break}}t=t.return}}function yS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ee&n)===n&&(ye===4||ye===3&&(Ee&130023424)===Ee&&500>de()-Wf?rr(e,0):Uf|=n),Ye(e,t)}function Uv(e,t){t===0&&(e.mode&1?(t=ls,ls<<=1,!(ls&130023424)&&(ls=4194304)):t=1);var n=_e();e=rn(e,t),e!==null&&($o(e,t,n),Ye(e,n))}function xS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uv(e,n)}function wS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Uv(e,n)}var Wv;Wv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,aS(e,t,n);Be=!!(e.flags&131072)}else Be=!1,te&&t.flags&1048576&&G0(t,la,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ns(e,t),e=t.pendingProps;var i=Jr(t,Le.current);Xr(t,n),i=_f(null,t,r,e,i,n);var o=zf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,sa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,If(t),i.updater=Va,t.stateNode=i,i._reactInternals=t,Qu(t,r,e,n),t=Ju(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Pf(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kS(r),e=Ct(r,e),i){case 0:t=Zu(null,t,r,e,n);break e;case 1:t=Qh(null,t,r,e,n);break e;case 11:t=Kh(null,t,r,e,n);break e;case 14:t=Xh(null,t,r,Ct(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Zu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Qh(e,t,r,i,n);case 3:e:{if(Ev(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,q0(e,t),fa(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ri(Error(A(423)),t),t=qh(e,t,r,n,i);break e}else if(r!==i){i=ri(Error(A(424)),t),t=qh(e,t,r,n,i);break e}else for(Je=jn(t.stateNode.containerInfo.firstChild),et=t,te=!0,Pt=null,n=tv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===i){t=on(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return nv(t),e===null&&Gu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Bu(r,i)?s=null:o!==null&&Bu(r,o)&&(t.flags|=32),Tv(e,t),De(e,t,s,n),t.child;case 6:return e===null&&Gu(t),null;case 13:return Av(e,t,n);case 4:return Lf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ti(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Kh(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Q(ua,r._currentValue),r._currentValue=s,o!==null)if(jt(o.value,s)){if(o.children===i.children&&!We.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=qt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ku(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ku(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=gt(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),Xh(e,t,r,i,n);case 15:return bv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Ns(e,t),t.tag=1,He(r)?(e=!0,sa(t)):e=!1,Xr(t,n),J0(t,r,i),Qu(t,r,i,n),Ju(null,t,r,!0,e,n);case 19:return jv(e,t,n);case 22:return Pv(e,t,n)}throw Error(A(156,t.tag))};function Hv(e,t){return v0(e,t)}function SS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new SS(e,t,n,r)}function Kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kS(e){if(typeof e=="function")return Kf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hf)return 11;if(e===pf)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Kf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Tr:return ir(n.children,i,o,t);case df:s=8,i|=8;break;case wu:return e=pt(12,n,t,i|2),e.elementType=wu,e.lanes=o,e;case Su:return e=pt(13,n,t,i),e.elementType=Su,e.lanes=o,e;case ku:return e=pt(19,n,t,i),e.elementType=ku,e.lanes=o,e;case e0:return Ha(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zg:s=10;break e;case Jg:s=9;break e;case hf:s=11;break e;case pf:s=14;break e;case yn:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=pt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ir(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Ha(e,t,n,r){return e=pt(22,e,r,t),e.elementType=e0,e.lanes=n,e.stateNode={isHidden:!1},e}function Bl(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Ul(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function CS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xf(e,t,n,r,i,o,s,a,l){return e=new CS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(o),e}function bS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yv(e){if(!e)return Nn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(He(n))return H0(e,n,t)}return t}function Gv(e,t,n,r,i,o,s,a,l){return e=Xf(n,r,!0,e,i,o,s,a,l),e.context=Yv(null),n=e.current,r=_e(),i=In(n),o=qt(r,i),o.callback=t??null,Rn(n,o,i),e.current.lanes=i,$o(e,i,r),Ye(e,r),e}function Ya(e,t,n,r){var i=t.current,o=_e(),s=In(i);return n=Yv(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,s),e!==null&&(Et(e,i,s,o),Is(e,i,s)),s}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qf(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function PS(){return null}var Kv=typeof reportError=="function"?reportError:function(e){console.error(e)};function qf(e){this._internalRoot=e}Ga.prototype.render=qf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ya(e,t,null,null)};Ga.prototype.unmount=qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Ya(null,e,null,null)}),t[nn]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=b0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&T0(e)}};function Zf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lp(){}function TS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=xa(s);o.call(u)}}var s=Gv(t,r,e,0,null,!1,!1,"",lp);return e._reactRootContainer=s,e[nn]=s.current,xo(e.nodeType===8?e.parentNode:e),mr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xa(l);a.call(u)}}var l=Xf(e,0,!1,null,null,!1,!1,"",lp);return e._reactRootContainer=l,e[nn]=l.current,xo(e.nodeType===8?e.parentNode:e),mr(function(){Ya(t,l,n,r)}),l}function Xa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=xa(s);a.call(l)}}Ya(t,s,e,i)}else s=TS(n,t,e,i,r);return xa(s)}k0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(vf(t,n|1),Ye(t,de()),!(U&6)&&(ii=de()+500,Bn()))}break;case 13:mr(function(){var r=rn(e,1);if(r!==null){var i=_e();Et(r,e,1,i)}}),Qf(e,1)}};yf=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=_e();Et(t,e,134217728,n)}Qf(e,134217728)}};C0=function(e){if(e.tag===13){var t=In(e),n=rn(e,t);if(n!==null){var r=_e();Et(n,e,t,r)}Qf(e,t)}};b0=function(){return Y};P0=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};Iu=function(e,t,n){switch(t){case"input":if(Pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$a(r);if(!i)throw Error(A(90));n0(r),Pu(r,i)}}}break;case"textarea":i0(e,n);break;case"select":t=n.value,t!=null&&Hr(e,!!n.multiple,t,!1)}};f0=Hf;d0=mr;var ES={usingClientEntryPoint:!1,Events:[Vo,Rr,$a,u0,c0,Hf]},Ii={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},AS={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=m0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Na=xs.inject(AS),Ft=xs}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(t))throw Error(A(200));return bS(e,t,null,n)};ot.createRoot=function(e,t){if(!Zf(e))throw Error(A(299));var n=!1,r="",i=Kv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xf(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,xo(e.nodeType===8?e.parentNode:e),new qf(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=m0(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return mr(e)};ot.hydrate=function(e,t,n){if(!Ka(t))throw Error(A(200));return Xa(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Zf(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Gv(t,null,e,1,n??null,i,!1,o,s),e[nn]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};ot.render=function(e,t,n){if(!Ka(t))throw Error(A(200));return Xa(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(A(40));return e._reactRootContainer?(mr(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ot.unstable_batchedUpdates=Hf;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ka(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Xa(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(e){console.error(e)}}Xv(),Gg.exports=ot;var jS=Gg.exports,up=jS;yu.createRoot=up.createRoot,yu.hydrateRoot=up.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bn||(bn={}));const cp="popstate";function RS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return fc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qv(i)}return IS(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function MS(){return Math.random().toString(36).substr(2,8)}function fp(e,t){return{usr:e.state,key:e.key,idx:t}}function fc(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vi(t):t,{state:n,key:t&&t.key||r||MS()})}function Qv(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function IS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=bn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ao({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=bn.Pop;let k=c(),p=k==null?null:k-u;u=k,l&&l({action:a,location:x.location,delta:p})}function d(k,p){a=bn.Push;let h=fc(x.location,k,p);n&&n(h,k),u=c()+1;let g=fp(h,u),C=x.createHref(h);try{s.pushState(g,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(C)}o&&l&&l({action:a,location:x.location,delta:1})}function m(k,p){a=bn.Replace;let h=fc(x.location,k,p);n&&n(h,k),u=c();let g=fp(h,u),C=x.createHref(h);s.replaceState(g,"",C),o&&l&&l({action:a,location:x.location,delta:0})}function y(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:Qv(k);return xe(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let x={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cp,f),l=k,()=>{i.removeEventListener(cp,f),l=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let p=y(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(k){return s.go(k)}};return x}var dp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dp||(dp={}));function LS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vi(t):t,i=Jv(r.pathname||"/",n);if(i==null)return null;let o=qv(e);OS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=US(o[a],YS(i));return s}function qv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:VS(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Zv(o.path))i(o,s,l)}),t}function Zv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Zv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function OS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:BS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const NS=/^:\w+$/,DS=3,_S=2,zS=1,$S=10,FS=-2,hp=e=>e==="*";function VS(e,t){let n=e.split("/"),r=n.length;return n.some(hp)&&(r+=FS),t&&(r+=_S),n.filter(i=>!hp(i)).reduce((i,o)=>i+(NS.test(o)?DS:o===""?zS:$S),r)}function BS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function US(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=WS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:or([i,c.pathname]),pathnameBase:ZS(or([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return o}function WS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=HS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=GS(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function HS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function YS(e){try{return decodeURI(e)}catch(t){return Jf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function GS(e,t){try{return decodeURIComponent(e)}catch(n){return Jf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Jv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function KS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vi(e):e;return{pathname:n?n.startsWith("/")?n:XS(n,t):t,search:JS(r),hash:ek(i)}}function XS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qS(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vi(e):(i=Ao({},e),xe(!i.pathname||!i.pathname.includes("?"),Wl("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Wl("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Wl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=KS(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=e=>e.join("/").replace(/\/\/+/g,"/"),ZS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),JS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ek=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ey=["post","put","patch","delete"];new Set(ey);const nk=["get",...ey];new Set(nk);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wa.apply(this,arguments)}const ed=w.createContext(null),rk=w.createContext(null),Qa=w.createContext(null),qa=w.createContext(null),yi=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ty=w.createContext(null);function Za(){return w.useContext(qa)!=null}function Uo(){return Za()||xe(!1),w.useContext(qa).location}function ny(e){w.useContext(Qa).static||w.useLayoutEffect(e)}function Wo(){let{isDataRoute:e}=w.useContext(yi);return e?gk():ik()}function ik(){Za()||xe(!1);let e=w.useContext(ed),{basename:t,navigator:n}=w.useContext(Qa),{matches:r}=w.useContext(yi),{pathname:i}=Uo(),o=JSON.stringify(QS(r).map(l=>l.pathnameBase)),s=w.useRef(!1);return ny(()=>{s.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=qS(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:or([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function ok(e,t){return sk(e,t)}function sk(e,t,n){Za()||xe(!1);let{navigator:r}=w.useContext(Qa),{matches:i}=w.useContext(yi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Uo(),u;if(t){var c;let x=typeof t=="string"?vi(t):t;a==="/"||(c=x.pathname)!=null&&c.startsWith(a)||xe(!1),u=x}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",m=LS(e,{pathname:d}),y=fk(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:or([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?w.createElement(qa.Provider,{value:{location:wa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bn.Pop}},y):y}function ak(){let e=mk(),t=tk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const lk=w.createElement(ak,null);class uk extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(yi.Provider,{value:this.props.routeContext},w.createElement(ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ck(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(ed);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(yi.Provider,{value:t},r)}function fk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||xe(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||lk);let d=t.concat(o.slice(0,u+1)),m=()=>{let y;return c?y=f:l.route.Component?y=w.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,w.createElement(ck,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(uk,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var ry=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ry||{}),Sa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sa||{});function dk(e){let t=w.useContext(ed);return t||xe(!1),t}function hk(e){let t=w.useContext(rk);return t||xe(!1),t}function pk(e){let t=w.useContext(yi);return t||xe(!1),t}function iy(e){let t=pk(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function mk(){var e;let t=w.useContext(ty),n=hk(Sa.UseRouteError),r=iy(Sa.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function gk(){let{router:e}=dk(ry.UseNavigateStable),t=iy(Sa.UseNavigateStable),n=w.useRef(!1);return ny(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wa({fromRouteId:t},o)))},[e,t])}function pn(e){xe(!1)}function oy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:o,static:s=!1}=e;Za()&&xe(!1);let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=vi(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:m="default"}=r,y=w.useMemo(()=>{let x=Jv(u,a);return x==null?null:{location:{pathname:x,search:c,hash:f,state:d,key:m},navigationType:i}},[a,u,c,f,d,m,i]);return y==null?null:w.createElement(Qa.Provider,{value:l},w.createElement(qa.Provider,{children:n,value:y}))}function vk(e){let{children:t,location:n}=e;return ok(dc(t),n)}new Promise(()=>{});function dc(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,dc(r.props.children,o));return}r.type!==pn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=dc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yk="startTransition",pp=xw[yk];function xk(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=RS({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=w.useCallback(f=>{u&&pp?pp(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>s.listen(c),[s,c]),w.createElement(oy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}var mp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(mp||(mp={}));var gp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gp||(gp={}));var Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ue.apply(this,arguments)};function jo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",to="-moz-",H="-webkit-",sy="comm",Ja="rule",td="decl",wk="@import",ay="@keyframes",Sk="@layer",kk=Math.abs,nd=String.fromCharCode,hc=Object.assign;function Ck(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function ly(e){return e.trim()}function Gt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function $s(e,t){return e.indexOf(t)}function Ce(e,t){return e.charCodeAt(t)|0}function oi(e,t,n){return e.slice(t,n)}function Ot(e){return e.length}function uy(e){return e.length}function $i(e,t){return t.push(e),e}function bk(e,t){return e.map(t).join("")}function vp(e,t){return e.filter(function(n){return!Gt(n,t)})}var el=1,si=1,cy=0,yt=0,he=0,xi="";function tl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:el,column:si,length:s,return:"",siblings:a}}function mn(e,t){return hc(tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cr(e){for(;e.root;)e=mn(e.root,{children:[e]});$i(e,e.siblings)}function Pk(){return he}function Tk(){return he=yt>0?Ce(xi,--yt):0,si--,he===10&&(si=1,el--),he}function At(){return he=yt<cy?Ce(xi,yt++):0,si++,he===10&&(si=1,el++),he}function sr(){return Ce(xi,yt)}function Fs(){return yt}function nl(e,t){return oi(xi,e,t)}function pc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ek(e){return el=si=1,cy=Ot(xi=e),yt=0,[]}function Ak(e){return xi="",e}function Hl(e){return ly(nl(yt-1,mc(e===91?e+2:e===40?e+1:e)))}function jk(e){for(;(he=sr())&&he<33;)At();return pc(e)>2||pc(he)>3?"":" "}function Rk(e,t){for(;--t&&At()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return nl(e,Fs()+(t<6&&sr()==32&&At()==32))}function mc(e){for(;At();)switch(he){case e:return yt;case 34:case 39:e!==34&&e!==39&&mc(he);break;case 40:e===41&&mc(e);break;case 92:At();break}return yt}function Mk(e,t){for(;At()&&e+he!==47+10;)if(e+he===42+42&&sr()===47)break;return"/*"+nl(t,yt-1)+"*"+nd(e===47?e:At())}function Ik(e){for(;!pc(sr());)At();return nl(e,yt)}function Lk(e){return Ak(Vs("",null,null,null,[""],e=Ek(e),0,[0],e))}function Vs(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,m=0,y=0,x=1,k=1,p=1,h=0,g="",C=i,S=o,b=r,P=g;k;)switch(y=h,h=At()){case 40:if(y!=108&&Ce(P,f-1)==58){$s(P+=$(Hl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:P+=Hl(h);break;case 9:case 10:case 13:case 32:P+=jk(y);break;case 92:P+=Rk(Fs()-1,7);continue;case 47:switch(sr()){case 42:case 47:$i(Ok(Mk(At(),Fs()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[u++]=Ot(P)*p;case 125*x:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+c:p==-1&&(P=$(P,/\f/g,"")),m>0&&Ot(P)-f&&$i(m>32?xp(P+";",r,n,f-1,l):xp($(P," ","")+";",r,n,f-2,l),l);break;case 59:P+=";";default:if($i(b=yp(P,t,n,u,c,i,a,g,C=[],S=[],f,o),o),h===123)if(c===0)Vs(P,t,b,b,C,o,f,a,S);else switch(d===99&&Ce(P,3)===110?100:d){case 100:case 108:case 109:case 115:Vs(e,b,b,r&&$i(yp(e,b,b,0,0,i,a,g,i,C=[],f,S),S),i,S,f,a,r?C:S);break;default:Vs(P,b,b,b,[""],S,0,a,S)}}u=c=m=0,x=p=1,g=P="",f=s;break;case 58:f=1+Ot(P),m=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Tk()==125)continue}switch(P+=nd(h),h*x){case 38:p=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(Ot(P)-1)*p,p=1;break;case 64:sr()===45&&(P+=Hl(At())),d=sr(),c=f=Ot(g=P+=Ik(Fs())),h++;break;case 45:y===45&&Ot(P)==2&&(x=0)}}return o}function yp(e,t,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,m=i===0?o:[""],y=uy(m),x=0,k=0,p=0;x<r;++x)for(var h=0,g=oi(e,d+1,d=kk(k=s[x])),C=e;h<y;++h)(C=ly(k>0?m[h]+" "+g:$(g,/&\f/g,m[h])))&&(l[p++]=C);return tl(e,t,n,i===0?Ja:a,l,u,c,f)}function Ok(e,t,n,r){return tl(e,t,n,sy,nd(Pk()),oi(e,2,-2),0,r)}function xp(e,t,n,r,i){return tl(e,t,n,td,oi(e,0,r),oi(e,r+1,-1),r,i)}function fy(e,t,n){switch(Ck(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+to+e+Z+e+e;case 5936:switch(Ce(e,t+11)){case 114:return H+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+Z+e+e;case 6165:return H+e+Z+"flex-"+e+e;case 5187:return H+e+$(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return H+e+Z+"flex-item-"+$(e,/flex-|-self/g,"")+(Gt(e,/flex-|baseline/)?"":Z+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return H+e+Z+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+Z+$(e,"shrink","negative")+e;case 5292:return H+e+Z+$(e,"basis","preferred-size")+e;case 6060:return H+"box-"+$(e,"-grow","")+H+e+Z+$(e,"grow","positive")+e;case 4554:return H+$(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Gt(e,/flex-|baseline/))return Z+"grid-column-align"+oi(e,t)+e;break;case 2592:case 3360:return Z+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Gt(r.props,/grid-\w+-end/)})?~$s(e+(n=n[t].value),"span")?e:Z+$(e,"-start","")+e+Z+"grid-row-span:"+(~$s(n,"span")?Gt(n,/\d+/):+Gt(n,/\d+/)-+Gt(e,/\d+/))+";":Z+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Gt(r.props,/grid-\w+-start/)})?e:Z+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ot(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+to+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$s(e,"stretch")?fy($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Z+i+":"+o+u+(s?Z+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return $(e,":",":"+H)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(Ce(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+Z+"$2box$3")+e;case 100:return $(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function ka(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Nk(e,t,n,r){switch(e.type){case Sk:if(e.children.length)break;case wk:case td:return e.return=e.return||e.value;case sy:return"";case ay:return e.return=e.value+"{"+ka(e.children,r)+"}";case Ja:if(!Ot(e.value=e.props.join(",")))return""}return Ot(n=ka(e.children,r))?e.return=e.value+"{"+n+"}":""}function Dk(e){var t=uy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function _k(e){return function(t){t.root||(t=t.return)&&e(t)}}function zk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case td:e.return=fy(e.value,e.length,n);return;case ay:return ka([mn(e,{value:$(e.value,"@","@"+H)})],r);case Ja:if(e.length)return bk(n=e.props,function(i){switch(Gt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cr(mn(e,{props:[$(i,/:(read-\w+)/,":"+to+"$1")]})),Cr(mn(e,{props:[i]})),hc(e,{props:vp(n,r)});break;case"::placeholder":Cr(mn(e,{props:[$(i,/:(plac\w+)/,":"+H+"input-$1")]})),Cr(mn(e,{props:[$(i,/:(plac\w+)/,":"+to+"$1")]})),Cr(mn(e,{props:[$(i,/:(plac\w+)/,Z+"input-$1")]})),Cr(mn(e,{props:[i]})),hc(e,{props:vp(n,r)});break}return""})}}var $k={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ai=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rd=typeof window<"u"&&"HTMLElement"in window,Fk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),rl=Object.freeze([]),li=Object.freeze({});function Vk(e,t,n){return n===void 0&&(n=li),e.theme!==n.theme&&e.theme||t||n.theme}var dy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uk=/(^-|-$)/g;function wp(e){return e.replace(Bk,"-").replace(Uk,"")}var Wk=/(a)(d)/gi,Sp=function(e){return String.fromCharCode(e+(e>25?39:97))};function gc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Sp(t%52)+n;return(Sp(t%52)+n).replace(Wk,"$1-$2")}var Yl,_r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hy=function(e){return _r(5381,e)};function py(e){return gc(hy(e)>>>0)}function Hk(e){return e.displayName||e.name||"Component"}function Gl(e){return typeof e=="string"&&!0}var my=typeof Symbol=="function"&&Symbol.for,gy=my?Symbol.for("react.memo"):60115,Yk=my?Symbol.for("react.forward_ref"):60112,Gk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xk=((Yl={})[Yk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yl[gy]=vy,Yl);function kp(e){return("type"in(t=e)&&t.type.$$typeof)===gy?vy:"$$typeof"in e?Xk[e.$$typeof]:Gk;var t}var Qk=Object.defineProperty,qk=Object.getOwnPropertyNames,Cp=Object.getOwnPropertySymbols,Zk=Object.getOwnPropertyDescriptor,Jk=Object.getPrototypeOf,bp=Object.prototype;function yy(e,t,n){if(typeof t!="string"){if(bp){var r=Jk(t);r&&r!==bp&&yy(e,r,n)}var i=qk(t);Cp&&(i=i.concat(Cp(t)));for(var o=kp(e),s=kp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Kk||n&&n[l]||s&&l in s||o&&l in o)){var u=Zk(t,l);try{Qk(e,l,u)}catch{}}}}return e}function ui(e){return typeof e=="function"}function id(e){return typeof e=="object"&&"styledComponentId"in e}function tr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ro(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yc(e,t,n){if(n===void 0&&(n=!1),!n&&!Ro(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=yc(e[r],t[r]);else if(Ro(t))for(var r in t)e[r]=yc(e[r],t[r]);return e}function od(e,t){Object.defineProperty(e,"toString",{value:t})}function Ho(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ho(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),Bs=new Map,Ca=new Map,Kl=1,ws=function(e){if(Bs.has(e))return Bs.get(e);for(;Ca.has(Kl);)Kl++;var t=Kl++;return Bs.set(e,t),Ca.set(t,e),t},tC=function(e,t){Bs.set(e,t),Ca.set(t,e)},nC="style[".concat(ai,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),rC=new RegExp("^".concat(ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},oC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(rC);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(tC(c,u),iC(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function sC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ai,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ai,"active"),r.setAttribute("data-styled-version","6.0.8");var s=sC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},aC=function(){function e(t){this.element=xy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Ho(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lC=function(){function e(t){this.element=xy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),uC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pp=rd,cC={isServer:!rd,useCSSOMInjection:!Fk},wy=function(){function e(t,n,r){t===void 0&&(t=li),n===void 0&&(n={});var i=this;this.options=Ue(Ue({},cC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&rd&&Pp&&(Pp=!1,function(o){for(var s=document.querySelectorAll(nC),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ai)!=="active"&&(oC(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),od(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(p){return Ca.get(p)}(f);if(d===void 0)return"continue";var m=o.names.get(d),y=s.getGroup(f);if(m===void 0||y.length===0)return"continue";var x="".concat(ai,".g").concat(f,'[id="').concat(d,'"]'),k="";m!==void 0&&m.forEach(function(p){p.length>0&&(k+="".concat(p,","))}),l+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return ws(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new uC(i):r?new aC(i):new lC(i)}(this.options),new eC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ws(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ws(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ws(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fC=/&/g,dC=/^\s*\/\/.*$/gm;function Sy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Sy(n.children,t)),n})}function hC(e){var t,n,r,i=e===void 0?li:e,o=i.options,s=o===void 0?li:o,a=i.plugins,l=a===void 0?rl:a,u=function(d,m,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===Ja&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(fC,n).replace(r,u))}),s.prefix&&c.push(zk),c.push(Nk);var f=function(d,m,y,x){m===void 0&&(m=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var k=d.replace(dC,""),p=Lk(y||m?"".concat(y," ").concat(m," { ").concat(k," }"):k);s.namespace&&(p=Sy(p,s.namespace));var h=[];return ka(p,Dk(c.concat(_k(function(g){return h.push(g)})))),h};return f.hash=l.length?l.reduce(function(d,m){return m.name||Ho(15),_r(d,m.name)},5381).toString():"",f}var pC=new wy,xc=hC(),ky=en.createContext({shouldForwardProp:void 0,styleSheet:pC,stylis:xc});ky.Consumer;en.createContext(void 0);function Tp(){return w.useContext(ky)}var Cy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=xc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,od(this,function(){throw Ho(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xc),this.name+t.hash},e}(),mC=function(e){return e>="A"&&e<="Z"};function Ep(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var by=function(e){return e==null||e===!1||e===""},Py=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!by(o)&&(Array.isArray(o)&&o.isCss||ui(o)?r.push("".concat(Ep(i),":"),o,";"):Ro(o)?r.push.apply(r,jo(jo(["".concat(i," {")],Py(o),!1),["}"],!1)):r.push("".concat(Ep(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in $k||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ar(e,t,n,r){if(by(e))return[];if(id(e))return[".".concat(e.styledComponentId)];if(ui(e)){if(!ui(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ar(i,t,n,r)}var o;return e instanceof Cy?n?(e.inject(n,r),[e.getName(r)]):[e]:Ro(e)?Py(e):Array.isArray(e)?Array.prototype.concat.apply(rl,e.map(function(s){return ar(s,t,n,r)})):[e.toString()]}function gC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ui(n)&&!id(n))return!1}return!0}var vC=hy("6.0.8"),yC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gC(t),this.componentId=n,this.baseHash=_r(vC,n),this.baseStyle=r,wy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=tr(i,this.staticRulesId);else{var o=vc(ar(this.rules,t,n,r)),s=gc(_r(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=tr(i,s),this.staticRulesId=s}else{for(var l=_r(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=vc(ar(f,t,n,r));l=_r(l,d+c),u+=d}}if(u){var m=gc(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=tr(i,m)}}return i},e}(),Ty=en.createContext(void 0);Ty.Consumer;var Xl={};function xC(e,t,n){var r=id(e),i=e,o=!Gl(e),s=t.attrs,a=s===void 0?rl:s,l=t.componentId,u=l===void 0?function(g,C){var S=typeof g!="string"?"sc":wp(g);Xl[S]=(Xl[S]||0)+1;var b="".concat(S,"-").concat(py("6.0.8"+S+Xl[S]));return C?"".concat(C,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(g){return Gl(g)?"styled.".concat(g):"Styled(".concat(Hk(g),")")}(e);var f=t.displayName&&t.componentId?"".concat(wp(t.displayName),"-").concat(t.componentId):t.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(g,C){return y(g,C)&&x(g,C)}}else m=y}var k=new yC(n,f,r?i.componentStyle:void 0);function p(g,C){return function(S,b,P){var T=S.attrs,_=S.componentStyle,R=S.defaultProps,F=S.foldedComponentIds,ge=S.styledComponentId,Ke=S.target,lt=en.useContext(Ty),Xe=Tp(),Qe=S.shouldForwardProp||Xe.shouldForwardProp,B=function(qe,Oe,ce){for(var re,we=Ue(Ue({},Oe),{className:void 0,theme:ce}),cn=0;cn<qe.length;cn+=1){var Mt=ui(re=qe[cn])?re(we):re;for(var ut in Mt)we[ut]=ut==="className"?tr(we[ut],Mt[ut]):ut==="style"?Ue(Ue({},we[ut]),Mt[ut]):Mt[ut]}return Oe.className&&(we.className=tr(we.className,Oe.className)),we}(T,b,Vk(b,lt,R)||li),j=B.as||Ke,O={};for(var N in B)B[N]===void 0||N[0]==="$"||N==="as"||N==="theme"||(N==="forwardedAs"?O.as=B.forwardedAs:Qe&&!Qe(N,j)||(O[N]=B[N]));var G=function(qe,Oe){var ce=Tp(),re=qe.generateAndInjectStyles(Oe,ce.styleSheet,ce.stylis);return re}(_,B),X=tr(F,ge);return G&&(X+=" "+G),B.className&&(X+=" "+B.className),O[Gl(j)&&!dy.has(j)?"class":"className"]=X,O.ref=P,w.createElement(j,O)}(h,g,C)}var h=en.forwardRef(p);return h.attrs=d,h.componentStyle=k,h.shouldForwardProp=m,h.foldedComponentIds=r?tr(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=f,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(C){for(var S=[],b=1;b<arguments.length;b++)S[b-1]=arguments[b];for(var P=0,T=S;P<T.length;P++)yc(C,T[P],!0);return C}({},i.defaultProps,g):g}}),od(h,function(){return".".concat(h.styledComponentId)}),o&&yy(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Ap(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var jp=function(e){return Object.assign(e,{isCss:!0})};function il(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ui(e)||Ro(e)){var r=e;return jp(ar(Ap(rl,jo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ar(i):jp(ar(Ap(i,t)))}function wc(e,t,n){if(n===void 0&&(n=li),!t)throw Ho(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,il.apply(void 0,jo([i],o,!1)))};return r.attrs=function(i){return wc(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return wc(e,t,Ue(Ue({},n),i))},r}var Ey=function(e){return wc(xC,e)},E=Ey;dy.forEach(function(e){E[e]=Ey(e)});function K(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=vc(il.apply(void 0,jo([e],t,!1))),i=py(r);return new Cy(i,r)}const Ay=w.createContext(),wC=({children:e})=>{const[t,n]=w.useState(!1);return v.jsx(Ay.Provider,{value:{buttonFade:t,setButtonFade:n},children:e})},SC=()=>w.useContext(Ay),Rp=()=>{};let sd={},jy={},Ry=null,My={mark:Rp,measure:Rp};try{typeof window<"u"&&(sd=window),typeof document<"u"&&(jy=document),typeof MutationObserver<"u"&&(Ry=MutationObserver),typeof performance<"u"&&(My=performance)}catch{}const{userAgent:Mp=""}=sd.navigator||{},Dn=sd,ee=jy,Ip=Ry,Ss=My;Dn.document;const un=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",Iy=~Mp.indexOf("MSIE")||~Mp.indexOf("Trident/");var ne="classic",Ly="duotone",tt="sharp",nt="sharp-duotone",kC=[ne,Ly,tt,nt],CC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Lp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},bC=["kit"],PC=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,TC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,EC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},AC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},jC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},RC={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},MC={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},IC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Oy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},LC=["solid","regular","light","thin","duotone","brands"],Ny=[1,2,3,4,5,6,7,8,9,10],OC=Ny.concat([11,12,13,14,15,16,17,18,19,20]),Fi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},NC=[...Object.keys(RC),...LC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fi.GROUP,Fi.SWAP_OPACITY,Fi.PRIMARY,Fi.SECONDARY].concat(Ny.map(e=>"".concat(e,"x"))).concat(OC.map(e=>"w-".concat(e))),DC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_C={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},zC={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Op={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const sn="___FONT_AWESOME___",Sc=16,Dy="fa",_y="svg-inline--fa",gr="data-fa-i2svg",kc="data-fa-pseudo-element",$C="data-fa-pseudo-element-pending",ad="data-prefix",ld="data-icon",Np="fontawesome-i2svg",FC="async",VC=["HTML","HEAD","STYLE","SCRIPT"],zy=(()=>{try{return!0}catch{return!1}})(),$y=[ne,tt,nt];function Yo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ne]}})}const Fy={...Oy};Fy[ne]={...Oy[ne],...Lp.kit,...Lp["kit-duotone"]};const lr=Yo(Fy),Cc={...IC};Cc[ne]={...Cc[ne],...Op.kit,...Op["kit-duotone"]};const Mo=Yo(Cc),bc={...MC};bc[ne]={...bc[ne],...zC.kit};const ur=Yo(bc),Pc={...jC};Pc[ne]={...Pc[ne],..._C.kit};const BC=Yo(Pc),UC=PC,Vy="fa-layers-text",WC=TC,HC={...CC};Yo(HC);const YC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ql=Fi,ci=new Set;Object.keys(Mo[ne]).map(ci.add.bind(ci));Object.keys(Mo[tt]).map(ci.add.bind(ci));Object.keys(Mo[nt]).map(ci.add.bind(ci));const GC=[...bC,...NC],no=Dn.FontAwesomeConfig||{};function KC(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function XC(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}ee&&typeof ee.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=XC(KC(n));i!=null&&(no[r]=i)});const By={styleDefault:"solid",familyDefault:"classic",cssPrefix:Dy,replacementClass:_y,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};no.familyPrefix&&(no.cssPrefix=no.familyPrefix);const fi={...By,...no};fi.autoReplaceSvg||(fi.observeMutations=!1);const L={};Object.keys(By).forEach(e=>{Object.defineProperty(L,e,{enumerable:!0,set:function(t){fi[e]=t,ro.forEach(n=>n(L))},get:function(){return fi[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){fi.cssPrefix=e,ro.forEach(t=>t(L))},get:function(){return fi.cssPrefix}});Dn.FontAwesomeConfig=L;const ro=[];function QC(e){return ro.push(e),()=>{ro.splice(ro.indexOf(e),1)}}const dn=Sc,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qC(e){if(!e||!un)return;const t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=ee.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return ee.head.insertBefore(t,r),e}const ZC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Io(){let e=12,t="";for(;e-- >0;)t+=ZC[Math.random()*62|0];return t}function wi(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ud(e){return e.classList?wi(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Uy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function JC(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Uy(e[n]),'" '),"").trim()}function ol(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function cd(e){return e.size!==_t.size||e.x!==_t.x||e.y!==_t.y||e.rotate!==_t.rotate||e.flipX||e.flipY}function e3(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function t3(e){let{transform:t,width:n=Sc,height:r=Sc,startCentered:i=!1}=e,o="";return i&&Iy?o+="translate(".concat(t.x/dn-n/2,"em, ").concat(t.y/dn-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/dn,"em), calc(-50% + ").concat(t.y/dn,"em)) "):o+="translate(".concat(t.x/dn,"em, ").concat(t.y/dn,"em) "),o+="scale(".concat(t.size/dn*(t.flipX?-1:1),", ").concat(t.size/dn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var n3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wy(){const e=Dy,t=_y,n=L.cssPrefix,r=L.replacementClass;let i=n3;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Dp=!1;function ql(){L.autoAddCss&&!Dp&&(qC(Wy()),Dp=!0)}var r3={mixout(){return{dom:{css:Wy,insertCss:ql}}},hooks(){return{beforeDOMElementCreation(){ql()},beforeI2svg(){ql()}}}};const an=Dn||{};an[sn]||(an[sn]={});an[sn].styles||(an[sn].styles={});an[sn].hooks||(an[sn].hooks={});an[sn].shims||(an[sn].shims=[]);var zt=an[sn];const Hy=[],Yy=function(){ee.removeEventListener("DOMContentLoaded",Yy),ba=1,Hy.map(e=>e())};let ba=!1;un&&(ba=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ba||ee.addEventListener("DOMContentLoaded",Yy));function i3(e){un&&(ba?setTimeout(e,0):Hy.push(e))}function Go(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Uy(e):"<".concat(t," ").concat(JC(n),">").concat(r.map(Go).join(""),"</").concat(t,">")}function _p(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var o3=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Zl=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?o3(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function s3(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Tc(e){const t=s3(e);return t.length===1?t[0].toString(16):null}function a3(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function zp(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ec(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=zp(t);typeof zt.hooks.addPack=="function"&&!r?zt.hooks.addPack(e,zp(t)):zt.styles[e]={...zt.styles[e]||{},...i},e==="fas"&&Ec("fa",t)}const{styles:qn,shims:l3}=zt,u3={[ne]:Object.values(ur[ne]),[tt]:Object.values(ur[tt]),[nt]:Object.values(ur[nt])};let fd=null,Gy={},Ky={},Xy={},Qy={},qy={};const c3={[ne]:Object.keys(lr[ne]),[tt]:Object.keys(lr[tt]),[nt]:Object.keys(lr[nt])};function f3(e){return~GC.indexOf(e)}function d3(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!f3(i)?i:null}const Zy=()=>{const e=r=>Zl(qn,(i,o,s)=>(i[s]=Zl(o,r,{}),i),{});Gy=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Ky=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),qy=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in qn||L.autoFetchSvg,n=Zl(l3,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Xy=n.names,Qy=n.unicodes,fd=sl(L.styleDefault,{family:L.familyDefault})};QC(e=>{fd=sl(e.styleDefault,{family:L.familyDefault})});Zy();function dd(e,t){return(Gy[e]||{})[t]}function h3(e,t){return(Ky[e]||{})[t]}function Pn(e,t){return(qy[e]||{})[t]}function Jy(e){return Xy[e]||{prefix:null,iconName:null}}function p3(e){const t=Qy[e],n=dd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return fd}const hd=()=>({prefix:null,iconName:null,rest:[]});function sl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ne}=t,r=lr[n][e],i=Mo[n][e]||Mo[n][r],o=e in zt.styles?e:null;return i||o||null}const m3={[ne]:Object.keys(ur[ne]),[tt]:Object.keys(ur[tt]),[nt]:Object.keys(ur[nt])};function al(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[ne]:"".concat(L.cssPrefix,"-").concat(ne),[tt]:"".concat(L.cssPrefix,"-").concat(tt),[nt]:"".concat(L.cssPrefix,"-").concat(nt)};let i=null,o=ne;const s=kC.filter(l=>l!==Ly);s.forEach(l=>{(e.includes(r[l])||e.some(u=>m3[l].includes(u)))&&(o=l)});const a=e.reduce((l,u)=>{const c=d3(L.cssPrefix,u);if(qn[u]?(u=u3[o].includes(u)?BC[o][u]:u,i=u,l.prefix=u):c3[o].indexOf(u)>-1?(i=u,l.prefix=sl(u,{family:o})):c?l.iconName=c:u!==L.replacementClass&&!s.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=i==="fa"?Jy(l.iconName):{},d=Pn(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!qn.far&&qn.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},hd());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===tt&&(qn.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=Pn(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===nt&&(qn.fasds||L.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Pn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=_n()||"fas"),a}class g3{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Ec(o,i[o]);const s=ur[ne][o];s&&Ec(s,i[o]),Zy()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}}let $p=[],zr={};const qr={},v3=Object.keys(qr);function y3(e,t){let{mixoutsTo:n}=t;return $p=e,zr={},Object.keys(qr).forEach(r=>{v3.indexOf(r)===-1&&delete qr[r]}),$p.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{zr[s]||(zr[s]=[]),zr[s].push(o[s])})}r.provides&&r.provides(qr)}),n}function Ac(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(zr[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(zr[e]||[]).forEach(o=>{o.apply(null,n)})}function zn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qr[e]?qr[e].apply(null,t):void 0}function jc(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||_n();if(t)return t=Pn(n,t)||t,_p(e1.definitions,n,t)||_p(zt.styles,n,t)}const e1=new g3,x3=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,vr("noAuto")},w3={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return un?(vr("beforeI2svg",e),zn("pseudoElements2svg",e),zn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,i3(()=>{k3({autoReplaceSvgRoot:t}),vr("watch",e)})}},S3={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Pn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=sl(e[0]);return{prefix:n,iconName:Pn(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(UC))){const t=al(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||_n(),iconName:Pn(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=_n();return{prefix:t,iconName:Pn(t,e)||e}}}},at={noAuto:x3,config:L,dom:w3,parse:S3,library:e1,findIconDefinition:jc,toHtml:Go},k3=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=ee}=e;(Object.keys(zt.styles).length>0||L.autoFetchSvg)&&un&&L.autoReplaceSvg&&at.dom.i2svg({node:t})};function ll(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Go(n))}}),Object.defineProperty(e,"node",{get:function(){if(!un)return;const n=ee.createElement("div");return n.innerHTML=e.html,n.children}}),e}function C3(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(cd(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=ol({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function b3(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function pd(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:u,extra:c,watchable:f=!1}=e,{width:d,height:m}=n.found?n:t,y=r==="fak",x=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(S=>c.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(c.classes).join(" ");let k={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:x,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)}};const p=y&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};f&&(k.attributes[gr]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||Io())},children:[a]}),delete k.attributes.title);const h={...k,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...p,...c.styles}},{children:g,attributes:C}=n.found&&t.found?zn("generateAbstractMask",h)||{children:[],attributes:{}}:zn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=g,h.attributes=C,s?b3(h):C3(h)}function Fp(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[gr]="");const u={...s.styles};cd(i)&&(u.transform=t3({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=ol(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function P3(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=ol(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Jl}=zt;function Rc(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Ql.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Ql.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Ql.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const T3={found:!1,width:512,height:512};function E3(e,t){!zy&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mc(e,t){let n=t;return t==="fa"&&L.styleDefault!==null&&(t=_n()),new Promise((r,i)=>{if(n==="fa"){const o=Jy(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Jl[t]&&Jl[t][e]){const o=Jl[t][e];return r(Rc(o))}E3(e,t),r({...T3,icon:L.showMissingIcons&&e?zn("missingIconAbstract")||{}:{}})})}const Vp=()=>{},Ic=L.measurePerformance&&Ss&&Ss.mark&&Ss.measure?Ss:{mark:Vp,measure:Vp},Vi='FA "6.6.0"',A3=e=>(Ic.mark("".concat(Vi," ").concat(e," begins")),()=>t1(e)),t1=e=>{Ic.mark("".concat(Vi," ").concat(e," ends")),Ic.measure("".concat(Vi," ").concat(e),"".concat(Vi," ").concat(e," begins"),"".concat(Vi," ").concat(e," ends"))};var md={begin:A3,end:t1};const Us=()=>{};function Bp(e){return typeof(e.getAttribute?e.getAttribute(gr):null)=="string"}function j3(e){const t=e.getAttribute?e.getAttribute(ad):null,n=e.getAttribute?e.getAttribute(ld):null;return t&&n}function R3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function M3(){return L.autoReplaceSvg===!0?Ws.replace:Ws[L.autoReplaceSvg]||Ws.replace}function I3(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function L3(e){return ee.createElement(e)}function n1(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?I3:L3}=t;if(typeof e=="string")return ee.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(n1(o,{ceFn:n}))}),r}function O3(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ws={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(n1(n),t)}),t.getAttribute(gr)===null&&L.keepOriginalSource){let n=ee.createComment(O3(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ud(t).indexOf(L.replacementClass))return Ws.replace(e);const r=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===L.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Go(o)).join(`
`);t.setAttribute(gr,""),t.innerHTML=i}};function Up(e){e()}function r1(e,t){const n=typeof t=="function"?t:Us;if(e.length===0)n();else{let r=Up;L.mutateApproach===FC&&(r=Dn.requestAnimationFrame||Up),r(()=>{const i=M3(),o=md.begin("mutate");e.map(i),o(),n()})}}let gd=!1;function i1(){gd=!0}function Lc(){gd=!1}let Pa=null;function Wp(e){if(!Ip||!L.observeMutations)return;const{treeCallback:t=Us,nodeCallback:n=Us,pseudoElementsCallback:r=Us,observeMutationsRoot:i=ee}=e;Pa=new Ip(o=>{if(gd)return;const s=_n();wi(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Bp(a.addedNodes[0])&&(L.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&L.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Bp(a.target)&&~YC.indexOf(a.attributeName))if(a.attributeName==="class"&&j3(a.target)){const{prefix:l,iconName:u}=al(ud(a.target));a.target.setAttribute(ad,l||s),u&&a.target.setAttribute(ld,u)}else R3(a.target)&&n(a.target)})}),un&&Pa.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function N3(){Pa&&Pa.disconnect()}function D3(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function _3(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=al(ud(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=h3(i.prefix,e.innerText)||dd(i.prefix,Tc(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function z3(e){const t=wi(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Io()):(t["aria-hidden"]="true",t.focusable="false")),t}function $3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=_3(e),o=z3(e),s=Ac("parseNodeAttributes",{},e);let a=t.styleParser?D3(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:F3}=zt;function o1(e){const t=L.autoReplaceSvg==="nest"?Hp(e,{styleParser:!1}):Hp(e);return~t.extra.classes.indexOf(Vy)?zn("generateLayersText",e,t):zn("generateSvgReplacementMutation",e,t)}let Wt=new Set;$y.map(e=>{Wt.add("fa-".concat(e))});Object.keys(lr[ne]).map(Wt.add.bind(Wt));Object.keys(lr[tt]).map(Wt.add.bind(Wt));Object.keys(lr[nt]).map(Wt.add.bind(Wt));Wt=[...Wt];function Yp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!un)return Promise.resolve();const n=ee.documentElement.classList,r=c=>n.add("".concat(Np,"-").concat(c)),i=c=>n.remove("".concat(Np,"-").concat(c)),o=L.autoFetchSvg?Wt:$y.map(c=>"fa-".concat(c)).concat(Object.keys(F3));o.includes("fa")||o.push("fa");const s=[".".concat(Vy,":not([").concat(gr,"])")].concat(o.map(c=>".".concat(c,":not([").concat(gr,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=wi(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=md.begin("onTree"),u=a.reduce((c,f)=>{try{const d=o1(f);d&&c.push(d)}catch(d){zy||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(d=>{r1(d,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(d=>{l(),f(d)})})}function V3(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;o1(e).then(n=>{n&&r1([n],t)})}function B3(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:jc(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:jc(i||{})),e(r,{...n,mask:i})}}const U3=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_t,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:m}=e;return ll({type:"icon",...e},()=>(vr("beforeDOMElementCreation",{iconDefinition:e,params:t}),L.autoA11y&&(s?u["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(a||Io()):(u["aria-hidden"]="true",u.focusable="false")),pd({icons:{main:Rc(m),mask:i?Rc(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{..._t,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var W3={mixout(){return{icon:B3(U3)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Yp,e.nodeCallback=V3,e}}},provides(e){e.i2svg=function(t){const{node:n=ee,callback:r=()=>{}}=t;return Yp(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((d,m)=>{Promise.all([Mc(r,s),u.iconName?Mc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,k]=y;d([t,pd({icons:{main:x,mask:k},prefix:s,iconName:r,transform:a,symbol:l,maskId:c,title:i,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=ol(s);a.length>0&&(r.style=a);let l;return cd(o)&&(l=zn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},H3={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ll({type:"layer"},()=>{vr("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Y3={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return ll({type:"counter",content:e},()=>(vr("beforeDOMElementCreation",{content:e,params:t}),P3({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(L.cssPrefix,"-layers-counter"),...r]}})))}}}},G3={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_t,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return ll({type:"text",content:e},()=>(vr("beforeDOMElementCreation",{content:e,params:t}),Fp({content:e,transform:{..._t,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(L.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(Iy){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/l,a=u.height/l}return L.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Fp({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const K3=new RegExp('"',"ug"),Gp=[1105920,1112319],Kp={FontAwesome:{normal:"fas",400:"fas"},...AC,...EC,...DC},Oc=Object.keys(Kp).reduce((e,t)=>(e[t.toLowerCase()]=Kp[t],e),{}),X3=Object.keys(Oc).reduce((e,t)=>{const n=Oc[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Q3(e){const t=e.replace(K3,""),n=a3(t,0),r=n>=Gp[0]&&n<=Gp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Tc(i?t[0]:t),isSecondary:r||i}}function q3(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Oc[n]||{})[i]||X3[n]}function Xp(e,t){const n="".concat($C).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=wi(e.children).filter(d=>d.getAttribute(kc)===t)[0],a=Dn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(WC),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let m=q3(l,c);const{value:y,isSecondary:x}=Q3(d),k=u[0].startsWith("FontAwesome");let p=dd(m,y),h=p;if(k){const g=p3(y);g.iconName&&g.prefix&&(p=g.iconName,m=g.prefix)}if(p&&!x&&(!s||s.getAttribute(ad)!==m||s.getAttribute(ld)!==h)){e.setAttribute(n,h),s&&e.removeChild(s);const g=$3(),{extra:C}=g;C.attributes[kc]=t,Mc(p,m).then(S=>{const b=pd({...g,icons:{main:S,mask:hd()},prefix:m,iconName:h,extra:C,watchable:!0}),P=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=b.map(T=>Go(T)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Z3(e){return Promise.all([Xp(e,"::before"),Xp(e,"::after")])}function J3(e){return e.parentNode!==document.head&&!~VC.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qp(e){if(un)return new Promise((t,n)=>{const r=wi(e.querySelectorAll("*")).filter(J3).map(Z3),i=md.begin("searchPseudoElements");i1(),Promise.all(r).then(()=>{i(),Lc(),t()}).catch(()=>{i(),Lc(),n()})})}var eb={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Qp,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=ee}=t;L.searchPseudoElements&&Qp(n)}}};let qp=!1;var tb={mixout(){return{dom:{unwatch(){i1(),qp=!0}}}},hooks(){return{bootstrap(){Wp(Ac("mutationObserverCallbacks",{}))},noAuto(){N3()},watch(e){const{observeMutationsRoot:t}=e;qp?Lc():Wp(Ac("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Zp=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var nb={mixout(){return{parse:{transform:e=>Zp(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Zp(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:c,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const eu={x:0,y:0,width:"100%",height:"100%"};function Jp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function rb(e){return e.tag==="g"?e.children:[e]}var ib={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?al(n.split(" ").map(i=>i.trim())):hd();return r.prefix||(r.prefix=_n()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:u}=i,{width:c,icon:f}=o,d=e3({transform:a,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:{...eu,fill:"white"}},y=u.children?{children:u.children.map(Jp)}:{},x={tag:"g",attributes:{...d.inner},children:[Jp({tag:u.tag,attributes:{...u.attributes,...d.path},...y})]},k={tag:"g",attributes:{...d.outer},children:[x]},p="mask-".concat(s||Io()),h="clip-".concat(s||Io()),g={tag:"mask",attributes:{...eu,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,k]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:rb(f)},g]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...eu}}),{children:n,attributes:r}}}},ob={provides(e){let t=!1;Dn.matchMedia&&(t=Dn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},sb={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},ab=[r3,W3,H3,Y3,G3,eb,tb,nb,ib,ob,sb];y3(ab,{mixoutsTo:at});at.noAuto;at.config;at.library;at.dom;const Nc=at.parse;at.findIconDefinition;at.toHtml;const lb=at.icon;at.layer;at.text;at.counter;var s1={exports:{}},ub="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cb=ub,fb=cb;function a1(){}function l1(){}l1.resetWarningCache=a1;var db=function(){function e(r,i,o,s,a,l){if(l!==fb){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l1,resetWarningCache:a1};return n.PropTypes=n,n};s1.exports=db();var hb=s1.exports;const I=Dg(hb);function em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?em(Object(n),!0).forEach(function(r){$r(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ta(e){"@babel/helpers - typeof";return Ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ta(e)}function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mb(e,t){if(e==null)return{};var n=pb(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dc(e){return gb(e)||vb(e)||yb(e)||xb()}function gb(e){if(Array.isArray(e))return _c(e)}function vb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yb(e,t){if(e){if(typeof e=="string")return _c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _c(e,t)}}function _c(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wb(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,m=e.inverse,y=e.border,x=e.listItem,k=e.flip,p=e.size,h=e.rotation,g=e.pull,C=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":x,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},$r(t,"fa-".concat(p),typeof p<"u"&&p!==null),$r(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),$r(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),$r(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function Sb(e){return e=e-0,e===e}function u1(e){return Sb(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var kb=["style"];function Cb(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bb(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=u1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Cb(i)]=o:t[i]=o,t},{})}function c1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return c1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=bb(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[u1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=mb(n,kb);return i.attrs.style=Nt(Nt({},i.attrs.style),s),e.apply(void 0,[t.tag,Nt(Nt({},i.attrs),a)].concat(Dc(r)))}var f1=!1;try{f1=!0}catch{}function Pb(){if(!f1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function tm(e){if(e&&Ta(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Nc.icon)return Nc.icon(e);if(e===null)return null;if(e&&Ta(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function tu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$r({},e,t):{}}var nm={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ne=en.forwardRef(function(e,t){var n=Nt(Nt({},nm),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,u=n.maskId,c=tm(r),f=tu("classes",[].concat(Dc(wb(n)),Dc((s||"").split(" ")))),d=tu("transform",typeof n.transform=="string"?Nc.transform(n.transform):n.transform),m=tu("mask",tm(i)),y=lb(c,Nt(Nt(Nt(Nt({},f),d),m),{},{symbol:o,title:a,titleId:l,maskId:u}));if(!y)return Pb("Could not find icon",c),null;var x=y.abstract,k={ref:t};return Object.keys(n).forEach(function(p){nm.hasOwnProperty(p)||(k[p]=n[p])}),Tb(x[0],k)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};var Tb=c1.bind(null,en.createElement);const Eb={prefix:"far",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"]},Ab=({logo:e})=>{const t=()=>{switch(e){case 1:return v.jsxs("div",{style:St.cleaningContainer,children:[v.jsx("div",{style:St.dust,children:"Dust"}),v.jsx("div",{style:St.busters,children:"Busters"})]});case 2:return v.jsxs("div",{style:St.dashboard,children:[v.jsx("span",{style:{color:"var(--light-blueish)"},children:"/"}),"Daily Helper",v.jsx("span",{style:{color:"var(--light-blueish)"},children:"/"})," "]});case 3:return v.jsx("div",{style:St.soleSoul,children:"SoleSoul.com"});case 4:return v.jsxs("div",{style:St.chatContainer,children:[v.jsx("div",{style:St.classChat,children:"Class"}),v.jsxs("div",{style:St.chatRow,children:[v.jsx("div",{style:{...St.classChat,marginLeft:"55px"},children:"Chat"}),v.jsx(Ne,{style:St.chatIcon,icon:Eb})]})]});case 5:return v.jsx("div",{style:St.movieNight,children:"Movie Night"});default:return null}};return v.jsx(jb,{children:t()})},jb=E.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: "Poppins";
`,St={cleaningContainer:{display:"flex",width:"100%",padding:"10px",backgroundColor:"var(--dark)"},dust:{fontSize:"1.1em",color:"white",fontFamily:"Poppins"},busters:{fontSize:"1.1em",color:"#FFD530",fontFamily:"Poppins"},soleSoul:{fontSize:"1.2em",color:"var(--bisque)",fontFamily:"Righteous"},chatContainer:{display:"flex",flexDirection:"column",padding:"10px",borderRadius:"3px",marginRight:"30px"},classChat:{fontSize:"1.4em",color:"#F7ECE1",fontFamily:"Arial"},chatRow:{display:"flex",justifyContent:"center",marginTop:"-10px",gap:"5px"},chatIcon:{color:"var(--neon-green)",marginTop:"12px",fontStyle:"bold"},movieNight:{fontSize:"1.2em",fontFamily:"Righteous",color:"var(--bisque)",padding:"5px",border:"4px solid var(--bisque)",borderRadius:"10px",textShadow:`
            0 0 0.125em rgb(223, 58, 29),
            0 0 0.45em rgb(255, 42, 5)
        `,boxShadow:"0 0 0.2em"},dashboard:{fontSize:"1em",fontFamily:"Poppins",color:"var(--silver-light)"}},Rb=({isVisible:e,delay:t,id:n})=>{let r;switch(n){case 1:r=1;break;case 2:r=2;break;case 3:r=3;break;case 4:r=4;break;case 5:r=5;break;default:r=void 0;break}return v.jsx(Ib,{delay:t,style:{display:e?"block":"none"},children:v.jsx(Ab,{logo:r})})},Mb=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ib=E.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--dark);
  border-radius: 15px;
  opacity: 0;
  animation: ${Mb} 0.3s ease-out forwards;
  animation-delay: ${({delay:e})=>e||"0s"};
  text-align: center;

  
  @media (max-width: 768px) {
    /* visibility: hidden; */
  }
    @media (max-width: 375px) {
      /* visibility: hidden; */
  }
`;function Lb({id:e,path:t,title:n,label:r,type:i,color:o,backgroundColor:s,setCursorHoverColor:a,setIsHoveringCards:l}){const[u,c]=w.useState(!1),[f,d]=w.useState(!1),[m,y]=w.useState(!1),{setButtonFade:x}=SC(),k=Wo(),p=()=>{d(!0),y(!0),x(!0),l(!1);const h=setTimeout(()=>{d(!1),k(`/${t}`),x(!1)},800);return()=>{clearTimeout(h)}};return v.jsxs(Db,{children:[m&&v.jsx(Vb,{style:{backgroundColor:f?s:""}}),v.jsx(_b,{children:v.jsxs(zb,{onClick:p,onKeyDown:h=>h.key==="Enter"&&p(),onFocus:()=>c(e),onBlur:()=>c(null),onMouseEnter:()=>{c(e),a(o),l(!0)},onMouseLeave:()=>{c(null),a("var(--darker)"),l(!1)},className:`${u===e?"hovered":""} ${f?"clicked":""}`,style:{backgroundColor:u===e?s:"",color:u===e?o:""},cursorHoverColor:o,children:[v.jsx($b,{className:u===e?"fade-out":"fade-in",backgroundColor:s,children:i}),v.jsx(Fb,{className:u===e?"fade-out":"fade-in",backgroundColor:s,children:r}),window.innerWidth>480&&v.jsx(Rb,{isVisible:u===e,id:e,delay:"0.3s"})," "]},e)})]})}const vd=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,yd=K`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,rm=K`
0% {
  box-shadow: 0 0 0 var(--dark);
}
100% {
  box-shadow: 1vw 1vw var(--dark);
}
`,Ob=K`
  0% {
    box-shadow: 1vw 1vw var(--dark);
  }
  100% {
    box-shadow: 0 0 0 var(--dark);
  }
`,Nb=K`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(3);
  opacity: 1;
}
`,Db=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`,_b=E.div`
  position: relative;
`,zb=E.div.attrs({tabIndex:0})`
  width: 12vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--dark);
  border: 3px solid var(--dark);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 1s;

  &:hover {
    color: ${e=>e.color};
    border-color: ${e=>e.cursorHoverColor};
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${rm} 0.5s ease forwards;

    .title {
      animation: ${yd} 0.5s forwards;
    }

    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${Ob} 0.8s ease forwards;

    .title {
      animation: ${vd} 0.5s forwards;
    }
  }

  &:focus {
    outline: none;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${rm} 0.5s ease forwards;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    border-width: 1px;
    height: 5vh;
    width: 70vw;
    align-items: center;
    border-radius: 5px;
    flex-direction: row;
    font-size: 1.2em;
    padding: 10px;

    &:hover {
      transform: none;
      animation: none;
    }

    
  &:not(:hover) {
    animation: none;

    .title {
      animation: none;
    }
  }


  }

  @media (max-width: 480px) and (min-width: 320px) {
    width: 70vw;
    font-size: 1.2em;
    padding: 10px;

    &:active {
      background-color: ${e=>e.cursorHoverColor};
      color: white;
      transition: all 0.3s ease;
    }

    &:hover {
      color: var(--dark);
      background-color: transparent;
      transform: none;
      animation: none;
      box-shadow: none;
    }
  }
`,$b=E.div`
  flex: 1;
  margin: 5px;
  margin-left: 10px;

  @media (max-width: 768px) and (min-width: 320px) {
    color: ${e=>e.backgroundColor};
  }

  &.fade-in {
    animation: ${vd} 0.5s forwards;
  }

  &.fade-out {
    animation: ${yd} 0.5s forwards;
  }
`,Fb=E.div`
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;

  &.fade-in {
    animation: ${vd} 0.5s forwards;
  }

  &.fade-out {
    animation: ${yd} 0.5s forwards;
  }

  @media (max-width: 768px) {
    &.nohover {
      color: #bbbbbb !important;
    }
  }
  @media (max-width: 480px) {
    &.nohover {
      color: #bbbbbb !important;
    }
  }
`,Vb=E.div`
  position: absolute;
  width: 70%;
  height: 80%;
  border-radius: 50%;
  background-color: transparent;
  animation: ${Nb} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 110;
  opacity: 1;
`;var Bb={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},Ub={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wn={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Wb={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},Hb={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Yb={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Gb={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const d1=w.createContext(),ul=({children:e})=>{const t=[{id:1,title:"Dust Busters",path:"cleaning",type:"Cleaning service",label:"React.js",color:"var(--dark)",backgroundColor:"var(--yellowish)",shadow:"var(--shadow-yellowish)",descriptions:{primary:"Embark on a journey with Dust Busters, an exceptional online platform meticulously hosted on Firebase. This website combines innovative front-end design with a robust back-end infrastructure, complemented by CRUD logic.",secondary:"Envision a React-based front-end that simplifies your experience, whether you're navigating bookings, securely logging in, or leaving insightful reviews. It's akin to having a highly efficient superhero dedicated to cleaning services, right at your fingertips.",tertiary:"Powered by Firebase's seamless hosting, Dust Busters delivers a fast, secure, and reliable online experience. Effortless cleanup, perfected for you!"},images:{browserImage:[{id:"1",src:"pageimages/dustbusters/1.png",info:"Welcome to the home of Dust Busters! Here you can find...",alt:"browser search"},{id:"2",src:"pageimages/dustbusters/2.png",info:"...our booking page..",alt:"browser pager"},{id:"3",src:"pageimages/dustbusters/dbBook.png",info:"...our booking form..",alt:"browser series"},{id:"4",src:"pageimages/dustbusters/dbLogin.png",info:"...and our login page!",alt:"browser series"},{id:"5",src:"pageimages/dustbusters/dbReviews.png",info:"Checkout our reviews!",alt:"browser series"}]},repos:[{browser:"https://github.com/jonaelghid3y/DustBusters",icon:v.jsx(Ne,{icon:Wn})},{website:"https://dustbusters-207c6.web.app/",icon:v.jsx(Ne,{icon:Wb})}]},{id:2,title:"Daily Helper",path:"dashboard",type:"Dashboard",label:"Typescript, Next.js",color:"var(--light-blueish)",backgroundColor:"var(--shadow-blueish)",shadow:"var(--shadow-blueish)",descriptions:{primary:"This modern dashboard application is a comprehensive financial and productivity tool built with TypeScript and Next.js. It implements secure authentication using NextAuth.js for protected user access and data privacy. The app leverages React Aria's headless components for accessible, customizable UI elements, combining real-time stock tracking (Alpha Vantage API), weather updates, and news feeds with a task management system.",secondary:"Built with TypeScript for type safety and Tailwind CSS for styling, it offers a responsive interface with dark/light themes. The integration of NextAuth.js, React Aria components, and multiple APIs creates a secure, accessible platform for managing financial portfolios and daily tasks."},images:{browserImage:[{id:"1",src:"pageimages/dashboard/dashboardDark.png",info:"The dashboards homepage with integrated weather update, stock tracking and task tracking calendar.",alt:"browser search"},{id:"2",src:"pageimages/dashboard/dashboardLight.png",info:"Light mode version of the dashboard homepage.",alt:"browser search"},{id:"3",src:"pageimages/dashboard/dashboardFullCalendar.png",info:"Full calendar view with drag and drop functionality on the task management system.",alt:"browser search"},{id:"4",src:"pageimages/dashboard/dashboardNewsCategories.png",info:"News categories from the Public News API.",alt:"browser search"},{id:"5",src:"pageimages/dashboard/dashboardNewsArticles.png",info:"Choose your favorite news articles from the Public News API.",alt:"browser search"},{id:"6",src:"pageimages/dashboard/dashboardArticle.png",info:"Read the full article from the Public News API.",alt:"browser search"},{id:"7",src:"pageimages/dashboard/dashboardStocks.png",info:"Track your stocks with the Alpha Vantage API.",alt:"browser search"},{id:"8",src:"pageimages/dashboard/dashboardProfile.png",info:"Authenticated users can manage their own tasks and calendar.",alt:"browser search"}]},repos:[{browser:"https://github.com/starleafer/Dashboard",icon:v.jsx(Ne,{icon:Wn})}]},{id:3,title:"Sole Soul",path:"webbshop",type:"Web store",label:"React.js",color:"var(--bisque)",backgroundColor:"var(--greenish)",shadow:"var(--shadow-bisuqe)",descriptions:{primary:"Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!",secondary:"Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish!"},images:{browserImage:[{id:"1",src:"pageimages/webbshop/products.png",info:"Have a look at our products!",alt:"browser search"},{id:"2",src:"pageimages/webbshop/description.png",info:"And feel free to read more about them!",alt:"browser pager"},{id:"3",src:"pageimages/webbshop/cart.png",info:"Did you find something you like? Great! Add it to your cart!",alt:"browser series"},{id:"4",src:"pageimages/webbshop/create.png",info:"Are you an admin? Cool! You can create new products here!",alt:"browser series"},{id:"5",src:"pageimages/webbshop/admin.png",info:"And you can also manage your products here!",alt:"browser pager"}]},repos:[{browser:"https://github.com/tobionesies/gruppuppgift-webshop-let",icon:v.jsx(Ne,{icon:Wn})}]},{id:4,title:"Class Chat",path:"chatapp",type:"Chat app",label:"React Native",color:"var(--neon-green)",backgroundColor:"var(--light-purple)",shadow:"var(--shadow-neon-green)",descriptions:{primary:"Class Chat serves as a dedicated platform for group communication, meticulously designed to facilitate smooth interaction within your class or group. Leveraging CRUD logic (Create, Read, Update, Delete), it efficiently manages users and messages, ensuring easy collaboration. Security is paramount, with the implementation of a secure access token mechanism, allowing only authorized individuals to join the conversation.",secondary:"Whether you're in a classroom setting or simply spending time with your friends, Class Chat provides a comprehensive solution for your communication needs. The platform empowers you to create a dynamic and engaging space for your group, giving you control over participants and content. Here's to hassle-free communication!"},images:{nativeImage:[{id:"1",src:"pageimages/chatapp/login.jpg",info:"Welcome to Class Chat! Login to get started!",alt:"browser search"},{id:"2",src:"pageimages/chatapp/registeruser.jpg",info:"Register a new user!",alt:"browser pager"},{id:"3",src:"pageimages/chatapp/chat.jpg",info:"Start chatting with your friends!",alt:"browser series"},{id:"4",src:"pageimages/chatapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"5",src:"pageimages/chatapp/profile.jpg",info:"Check out your profile!",alt:"browser series"},{id:"6",src:"pageimages/chatapp/photo.jpg",info:"Upload a profile picture!",alt:"browser series"},{id:"7",src:"pageimages/chatapp/profilephoto.jpg",info:"And you can also upload a profile picture!",alt:"browser series"},{id:"8",src:"pageimages/chatapp/chatphoto.jpg",info:"Cool!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/ClassChat",icon:v.jsx(Ne,{icon:Wn})}]},{id:5,title:"Movie Night",path:"movieapp",type:"Movie browser",label:"React.js / React Native",color:"var(--redish)",backgroundColor:"var(--darker)",shadow:"var(--shadow-redish)",descriptions:{primary:"Welcome to Movie Night, where we've got your movie cravings covered effortlessly with the OMDb API. Dive into a treasure trove of movie details, spanning from classic gems to the latest blockbusters. Get the info on titles, release dates, genres, casts, runtimes, ratings, and more.",secondary:"The magic doesn't stop there! With the power-packed combo of React and React Native, Movie Night ensures a seamless experience across different platforms. Whether you're chilling on the web version (courtesy of React) or enjoying the mobile app (crafted with React Native) on your smartphones and tablets, movie exploration has never been this effortless. Time to let the movie marathon begin!"},images:{browserImage:[{id:"1",src:"pageimages/movieapp/browserSearch.png",info:"Time for a movie night! Search for your favorite movie!",alt:"browser search"},{id:"2",src:"pageimages/movieapp/browserPager.png",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"pageimages/movieapp/browserSerier.png",info:"Or is it a series you're looking for? We've got you covered!",alt:"browser series"}],nativeImage:[{id:"1",src:"pageimages/movieapp/login.jpg",info:"Welcome to Movie Night! Login to get started!",alt:"browser search"},{id:"2",src:"pageimages/movieapp/movielist.jpg",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"pageimages/movieapp/movieinfo.jpg",info:"Check out the details of your favorite movie!",alt:"browser series"},{id:"4",src:"pageimages/movieapp/search.jpg",info:"Search for your favorite movie!",alt:"browser series"},{id:"5",src:"pageimages/movieapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"6",src:"pageimages/movieapp/mypage.jpg",info:"Check out your profile!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/The-movie-app",icon:v.jsx(Ne,{icon:Wn})},{native:"https://github.com/starleafer/The-Movie-App-Native",icon:v.jsx(Ne,{icon:Wn})}]}],n={id:1,title:"About me",path:"about",color:"white",backgroundColor:"var(--dark)",shadow:"var(--shadow-dark)",descriptions:{primary:v.jsxs(v.Fragment,{children:["Well hello there! Nice to see you here.",v.jsx("br",{}),"I'm Emil Stjernlöf, a newly graduated Frontend Developer based in Uppsala, Sweden. As a 30-something former health care worker, I decided to broaden my views and pursue a career change. Scary, I know!",v.jsx("br",{}),v.jsx("br",{}),"From 2022 to 2024, I studied frontend development at Jensen Yrkeshögskola in Kista, where I honed my skills in building engaging and user-friendly web experiences using"," ",v.jsx("b",{style:{color:"var(--neon-green)"},children:"JavaScript"}),",",v.jsx("b",{style:{color:"var(--neon-green)"},children:" React"}),", and",v.jsx("b",{style:{color:"var(--neon-green)"},children:" React Native"}),"."]}),secondary:v.jsx(v.Fragment,{children:"I enjoy working on dynamic and interactive applications that respond to users' needs. For me, great frontend development is about more than just writing code—it's about designing intuitive and visually appealing experiences that make people's lives easier."}),tertiary:v.jsxs(v.Fragment,{children:["During my time at Jensen, I also had the opportunity to gain hands-on experience through a work placement (LIA) at Sigholm. There, I developed my skills in"," ",v.jsx("b",{style:{color:"var(--neon-green)"},children:"TypeScript"})," and agile methodologies, gaining valuable insight into real-world development workflows. This experience also taught me how to quickly adapt to new technologies and work efficiently in a dynamic environment."]}),quaternary:v.jsx(v.Fragment,{children:"I’m excited about the opportunity to pursue this new path. Outside of coding, I love exploring new technologies and keeping up with the latest trends in frontend development. I’m always looking for ways to push my skills further and create digital experiences that are both impactful and memorable."})},images:{profilePic:"pageimages/aboutme/profilepic1.jpg",profilePic2:"pageimages/aboutme/profilepic2.jpg",profilePic3:"pageimages/aboutme/profilepic3.jpg",profilePic4:"pageimages/aboutme/profilepic4.jpg",profilePic5:"pageimages/aboutme/profilepic5.jpg",profilePic6:"pageimages/aboutme/profilepic6.jpg",profilePic7:"pageimages/aboutme/profilepic7.jpg"},repos:[{browser:"https://github.com/starleafer",icon:v.jsx(Ne,{icon:Wn})},{linkedin:"https://www.linkedin.com/in/emil-stjernlof/",icon:v.jsx(Ne,{icon:Ub})},{email:"mailto:emil.stjernlof@gmail.com",icon:v.jsx(Ne,{icon:Gb})}],music:[{song:"https://open.spotify.com/track/1A6u3ufwPK5apJlpmXjOK8?si=6707a186001f4f8b",songtitle:"Jonathan Johansson - På Boulevarden"},{song:"https://open.spotify.com/track/7j3KGtoP432CcQLA9zLrAo?si=ae7dc7e146734b27",songtitle:"Drab Majesty - Ellipsis"},{song:"https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=d6f658457e794997",songtitle:"Frank Ocean - Pink + White"},{song:"https://open.spotify.com/track/2cGlzTR9gC93lc12cZ8afB?si=66362dab1fa94d5d",songtitle:"Moonica Mac - 80´s"},{song:"https://open.spotify.com/track/413CBplTN03RNZD8H34B6q?si=a5a98e900ac14884",songtitle:"The War On Drugs - Strangest Thing"}],musicIcon:v.jsx(Ne,{icon:Bb,style:{width:"1em",height:"1em"}})};return v.jsx(d1.Provider,{value:{card:t,main:n},children:e})};ul.propTypes={children:I.node.isRequired};const xt=()=>w.useContext(d1),xd=w.createContext({});function Si(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const cl=w.createContext(null),Ko=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Kb extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=r instanceof HTMLElement&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Xb({children:e,isPresent:t,anchorX:n}){const r=w.useId(),i=w.useRef(null),o=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=w.useContext(Ko);return w.useInsertionEffect(()=>{const{width:a,height:l,top:u,left:c,right:f}=o.current;if(t||!i.current||!a||!l)return;const d=n==="left"?`left: ${c}`:`right: ${f}`;i.current.dataset.motionPopId=r;const m=document.createElement("style");return s&&(m.nonce=s),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),v.jsx(Kb,{isPresent:t,childRef:i,sizeRef:o,children:w.cloneElement(e,{ref:i})})}const Qb=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a})=>{const l=Si(qb),u=w.useId(),c=w.useCallback(d=>{l.set(d,!0);for(const m of l.values())if(!m)return;r&&r()},[l,r]),f=w.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:d=>(l.set(d,!1),()=>l.delete(d))}),o?[Math.random(),c]:[n,c]);return w.useMemo(()=>{l.forEach((d,m)=>l.set(m,!1))},[n]),w.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=v.jsx(Xb,{isPresent:n,anchorX:a,children:e})),v.jsx(cl.Provider,{value:f,children:e})};function qb(){return new Map}function h1(e=!0){const t=w.useContext(cl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{e&&i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const ks=e=>e.key||"";function im(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const wd=typeof window<"u",Xo=wd?w.useLayoutEffect:w.useEffect,zc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left"})=>{const[l,u]=h1(s),c=w.useMemo(()=>im(e),[e]),f=s&&!l?[]:c.map(ks),d=w.useRef(!0),m=w.useRef(c),y=Si(()=>new Map),[x,k]=w.useState(c),[p,h]=w.useState(c);Xo(()=>{d.current=!1,m.current=c;for(let S=0;S<p.length;S++){const b=ks(p[S]);f.includes(b)?y.delete(b):y.get(b)!==!0&&y.set(b,!1)}},[p,f.length,f.join("-")]);const g=[];if(c!==x){let S=[...c];for(let b=0;b<p.length;b++){const P=p[b],T=ks(P);f.includes(T)||(S.splice(b,0,P),g.push(P))}o==="wait"&&g.length&&(S=g),h(im(S)),k(c);return}const{forceRender:C}=w.useContext(xd);return v.jsx(v.Fragment,{children:p.map(S=>{const b=ks(S),P=s&&!l?!1:c===p||f.includes(b),T=()=>{if(y.has(b))y.set(b,!0);else return;let _=!0;y.forEach(R=>{R||(_=!1)}),_&&(C==null||C(),h(m.current),s&&(u==null||u()),r&&r())};return v.jsx(Qb,{isPresent:P,initial:!d.current||n?void 0:!1,custom:P?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:P?void 0:T,anchorX:a,children:S},b)})})},ze=e=>e;let Zb=ze,p1=ze;function Sd(e){let t;return()=>(t===void 0&&(t=e()),t)}const yr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Zt=e=>e*1e3,Jt=e=>e/1e3,Jb={skipAnimations:!1,useManualTiming:!1};function eP(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,f=!1)=>{const m=f&&r?t:n;return c&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Cs=["read","resolveKeyframes","update","preRender","render","postRender"],tP=40;function m1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Cs.reduce((p,h)=>(p[h]=eP(o),p),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=s,m=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,tP),1),i.timestamp=p,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),f.process(i),d.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Cs.reduce((p,h)=>{const g=s[h];return p[h]=(C,S=!1,b=!1)=>(n||y(),g.schedule(C,S,b)),p},{}),cancel:p=>{for(let h=0;h<Cs.length;h++)s[Cs[h]].cancel(p)},state:i,steps:s}}const{schedule:W,cancel:Rt,state:Se,steps:nu}=m1(typeof requestAnimationFrame<"u"?requestAnimationFrame:ze,!0),g1=w.createContext({strict:!1}),om={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},di={};for(const e in om)di[e]={isEnabled:t=>om[e].some(n=>!!t[n])};function nP(e){for(const t in e)di[t]={...di[t],...e[t]}}const rP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ea(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||rP.has(e)}let v1=e=>!Ea(e);function iP(e){e&&(v1=t=>t.startsWith("on")?!Ea(t):e(t))}try{iP(require("@emotion/is-prop-valid").default)}catch{}function oP(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(v1(i)||n===!0&&Ea(i)||!t&&!Ea(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function sP(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const fl=w.createContext({});function Lo(e){return typeof e=="string"||Array.isArray(e)}function dl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const kd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cd=["initial",...kd];function hl(e){return dl(e.animate)||Cd.some(t=>Lo(e[t]))}function y1(e){return!!(hl(e)||e.variants)}function aP(e,t){if(hl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Lo(n)?n:void 0,animate:Lo(r)?r:void 0}}return e.inherit!==!1?t:{}}function lP(e){const{initial:t,animate:n}=aP(e,w.useContext(fl));return w.useMemo(()=>({initial:t,animate:n}),[sm(t),sm(n)])}function sm(e){return Array.isArray(e)?e.join(" "):e}const uP=Symbol.for("motionComponentSymbol");function Fr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function cP(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Fr(n)&&(n.current=r))},[t])}const bd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),fP="framerAppearId",x1="data-"+bd(fP),{schedule:Pd,cancel:vj}=m1(queueMicrotask,!1),w1=w.createContext({});function dP(e,t,n,r,i){var o,s;const{visualElement:a}=w.useContext(fl),l=w.useContext(g1),u=w.useContext(cl),c=w.useContext(Ko).reducedMotion,f=w.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const d=f.current,m=w.useContext(w1);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&hP(f.current,n,i,m);const y=w.useRef(!1);w.useInsertionEffect(()=>{d&&y.current&&d.update(n,u)});const x=n[x1],k=w.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,x)));return Xo(()=>{d&&(y.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Pd.render(d.render),k.current&&d.animationState&&d.animationState.animateChanges())}),w.useEffect(()=>{d&&(!k.current&&d.animationState&&d.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,x)}),k.current=!1))}),d}function hP(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:S1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Fr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function S1(e){if(e)return e.options.allowProjection!==!1?e.projection:S1(e.parent)}function pP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&nP(e);function a(u,c){let f;const d={...w.useContext(Ko),...u,layoutId:mP(u)},{isStatic:m}=d,y=lP(u),x=r(u,m);if(!m&&wd){gP();const k=vP(d);f=k.MeasureLayout,y.visualElement=dP(i,x,d,t,k.ProjectionNode)}return v.jsxs(fl.Provider,{value:y,children:[f&&y.visualElement?v.jsx(f,{visualElement:y.visualElement,...d}):null,n(i,u,cP(x,y.visualElement,c),x,m,y.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const l=w.forwardRef(a);return l[uP]=i,l}function mP({layoutId:e}){const t=w.useContext(xd).id;return t&&e!==void 0?t+"-"+e:e}function gP(e,t){w.useContext(g1).strict}function vP(e){const{drag:t,layout:n}=di;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const yP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Td(e){return typeof e!="string"||e.includes("-")?!1:!!(yP.indexOf(e)>-1||/[A-Z]/u.test(e))}function am(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Ed(e,t,n,r){if(typeof t=="function"){const[i,o]=am(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=am(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const $c=e=>Array.isArray(e),xP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),wP=e=>$c(e)?e[e.length-1]||0:e,be=e=>!!(e&&e.getVelocity);function Hs(e){const t=be(e)?e.get():e;return xP(t)?t.toValue():t}function SP({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:kP(r,i,o,e),renderState:t()};return n&&(s.onMount=a=>n({props:r,current:a,...s}),s.onUpdate=a=>n(a)),s}const k1=e=>(t,n)=>{const r=w.useContext(fl),i=w.useContext(cl),o=()=>SP(e,t,r,i);return n?o():Si(o)};function kP(e,t,n,r){const i={},o=r(e,{});for(const d in o)i[d]=Hs(o[d]);let{initial:s,animate:a}=e;const l=hl(e),u=y1(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const f=c?a:s;if(f&&typeof f!="boolean"&&!dl(f)){const d=Array.isArray(f)?f:[f];for(let m=0;m<d.length;m++){const y=Ed(e,d[m]);if(y){const{transitionEnd:x,transition:k,...p}=y;for(const h in p){let g=p[h];if(Array.isArray(g)){const C=c?g.length-1:0;g=g[C]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const ki=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sr=new Set(ki),C1=e=>t=>typeof t=="string"&&t.startsWith(e),Ad=C1("--"),CP=C1("var(--"),jd=e=>CP(e)?bP.test(e.split("/*")[0].trim()):!1,bP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,b1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ht=(e,t,n)=>n>t?t:n<e?e:n,Ci={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Oo={...Ci,transform:e=>Ht(0,1,e)},bs={...Ci,default:1},Qo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gn=Qo("deg"),Bt=Qo("%"),z=Qo("px"),PP=Qo("vh"),TP=Qo("vw"),lm={...Bt,parse:e=>Bt.parse(e)/100,transform:e=>Bt.transform(e*100)},EP={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},AP={rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:bs,scaleX:bs,scaleY:bs,scaleZ:bs,skew:gn,skewX:gn,skewY:gn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Oo,originX:lm,originY:lm,originZ:z},um={...Ci,transform:Math.round},Rd={...EP,...AP,zIndex:um,size:z,fillOpacity:Oo,strokeOpacity:Oo,numOctaves:um},jP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},RP=ki.length;function MP(e,t,n){let r="",i=!0;for(let o=0;o<RP;o++){const s=ki[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=b1(a,Rd[s]);if(!l){i=!1;const c=jP[s]||s;r+=`${c}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Md(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(Sr.has(l)){s=!0;continue}else if(Ad(l)){i[l]=u;continue}else{const c=b1(u,Rd[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=MP(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}const IP={offset:"stroke-dashoffset",array:"stroke-dasharray"},LP={offset:"strokeDashoffset",array:"strokeDasharray"};function OP(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?IP:LP;e[o.offset]=z.transform(-r);const s=z.transform(t),a=z.transform(n);e[o.array]=`${s} ${a}`}function cm(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function NP(e,t,n){const r=cm(t,e.x,e.width),i=cm(n,e.y,e.height);return`${r} ${i}`}function Id(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(Md(e,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:m,dimensions:y}=e;d.transform&&(y&&(m.transform=d.transform),delete d.transform),y&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=NP(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),s!==void 0&&OP(d,s,a,l,!1)}const Ld=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),P1=()=>({...Ld(),attrs:{}}),Od=e=>typeof e=="string"&&e.toLowerCase()==="svg";function T1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const E1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function A1(e,t,n,r){T1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(E1.has(i)?i:bd(i),t.attrs[i])}const No={};function DP(e){for(const t in e)No[t]=e[t],Ad(t)&&(No[t].isCSSVariable=!0)}function j1(e,{layout:t,layoutId:n}){return Sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!No[e]||e==="opacity")}function Nd(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(be(i[s])||t.style&&be(t.style[s])||j1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function R1(e,t,n){const r=Nd(e,t,n);for(const i in e)if(be(e[i])||be(t[i])){const o=ki.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function _P(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const fm=["x","y","width","height","cx","cy","r"],zP={useVisualState:k1({scrapeMotionValuesFromProps:R1,createRenderState:P1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const a in i)if(Sr.has(a)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let a=0;a<fm.length;a++){const l=fm[a];e[l]!==t[l]&&(s=!0)}s&&W.read(()=>{_P(n,r),W.render(()=>{Id(r,i,Od(n.tagName),e.transformTemplate),A1(n,r)})})}})},$P={useVisualState:k1({scrapeMotionValuesFromProps:Nd,createRenderState:Ld})};function M1(e,t,n){for(const r in t)!be(t[r])&&!j1(r,n)&&(e[r]=t[r])}function FP({transformTemplate:e},t){return w.useMemo(()=>{const n=Ld();return Md(n,t,e),Object.assign({},n.vars,n.style)},[t])}function VP(e,t){const n=e.style||{},r={};return M1(r,n,e),Object.assign(r,FP(e,t)),r}function BP(e,t){const n={},r=VP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function UP(e,t,n,r){const i=w.useMemo(()=>{const o=P1();return Id(o,t,Od(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};M1(o,e.style,e),i.style={...o,...i.style}}return i}function WP(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Td(n)?UP:BP)(r,o,s,n),u=oP(r,typeof n=="string",e),c=n!==w.Fragment?{...u,...l,ref:i}:{},{children:f}=r,d=w.useMemo(()=>be(f)?f.get():f,[f]);return w.createElement(n,{...c,children:d})}}function HP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Td(r)?zP:$P,preloadedFeatures:e,useRender:WP(i),createVisualElement:t,Component:r};return pP(s)}}function I1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function pl(e,t,n){const r=e.getProps();return Ed(r,t,n!==void 0?n:r.custom,e)}const L1=Sd(()=>window.ScrollTimeline!==void 0);class YP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(L1()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class GP extends YP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Dd(e,t){return e?e[t]||e.default||e:void 0}const Fc=2e4;function O1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Fc;)t+=n,r=e.next(t);return t>=Fc?1/0:t}function _d(e){return typeof e=="function"}function dm(e,t){e.timeline=t,e.onfinish=null}const zd=e=>Array.isArray(e)&&typeof e[0]=="number",KP={linearEasing:void 0};function XP(e,t){const n=Sd(e);return()=>{var r;return(r=KP[t])!==null&&r!==void 0?r:n()}}const Aa=XP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),N1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(yr(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function D1(e){return!!(typeof e=="function"&&Aa()||!e||typeof e=="string"&&(e in Vc||Aa())||zd(e)||Array.isArray(e)&&e.every(D1))}const Bi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Vc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bi([0,.65,.55,1]),circOut:Bi([.55,0,1,.45]),backIn:Bi([.31,.01,.66,-.59]),backOut:Bi([.33,1.53,.69,.99])};function _1(e,t){if(e)return typeof e=="function"&&Aa()?N1(e,t):zd(e)?Bi(e):Array.isArray(e)?e.map(n=>_1(n,t)||Vc.easeOut):Vc[e]}const kt={x:!1,y:!1};function z1(){return kt.x||kt.y}function $1(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;t&&(i=t.current);const o=(r=n==null?void 0:n[e])!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function F1(e,t){const n=$1(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function hm(e){return!(e.pointerType==="touch"||z1())}function QP(e,t,n={}){const[r,i,o]=F1(e,n),s=a=>{if(!hm(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const c=f=>{hm(f)&&(u(f),l.removeEventListener("pointerleave",c))};l.addEventListener("pointerleave",c,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const V1=(e,t)=>t?e===t?!0:V1(e,t.parentElement):!1,$d=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,qP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ZP(e){return qP.has(e.tagName)||e.tabIndex!==-1}const Ui=new WeakSet;function pm(e){return t=>{t.key==="Enter"&&e(t)}}function ru(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const JP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=pm(()=>{if(Ui.has(n))return;ru(n,"down");const i=pm(()=>{ru(n,"up")}),o=()=>ru(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function mm(e){return $d(e)&&!z1()}function e5(e,t,n={}){const[r,i,o]=F1(e,n),s=a=>{const l=a.currentTarget;if(!mm(a)||Ui.has(l))return;Ui.add(l);const u=t(l,a),c=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!mm(m)||!Ui.has(l))&&(Ui.delete(l),typeof u=="function"&&u(m,{success:y}))},f=m=>{c(m,n.useGlobalTarget||V1(l,m.target))},d=m=>{c(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",d,i)};return r.forEach(a=>{!ZP(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),a.addEventListener("focus",u=>JP(u,i),i)}),o}function t5(e){return e==="x"||e==="y"?kt[e]?null:(kt[e]=!0,()=>{kt[e]=!1}):kt.x||kt.y?null:(kt.x=kt.y=!0,()=>{kt.x=kt.y=!1})}const B1=new Set(["width","height","top","left","right","bottom",...ki]);let Ys;function n5(){Ys=void 0}const Ut={now:()=>(Ys===void 0&&Ut.set(Se.isProcessing||Jb.useManualTiming?Se.timestamp:performance.now()),Ys),set:e=>{Ys=e,queueMicrotask(n5)}};function Fd(e,t){e.indexOf(t)===-1&&e.push(t)}function Vd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Bd{constructor(){this.subscriptions=[]}add(t){return Fd(this.subscriptions,t),()=>Vd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ud(e,t){return t?e*(1e3/t):0}const gm=30,r5=e=>!isNaN(parseFloat(e)),io={current:void 0};class i5{constructor(t,n={}){this.version="12.0.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Ut.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ut.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=r5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Bd);const r=this.events[t].add(n);return t==="change"?()=>{r(),W.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return io.current&&io.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>gm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gm);return Ud(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function $t(e,t){return new i5(e,t)}function o5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,$t(n))}function s5(e,t){const n=pl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=wP(o[s]);o5(e,s,a)}}function a5(e){return!!(be(e)&&e.add)}function Bc(e,t){const n=e.getValue("willChange");if(a5(n))return n.add(t)}function U1(e){return e.props[x1]}const W1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,l5=1e-7,u5=12;function c5(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=W1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>l5&&++a<u5);return s}function qo(e,t,n,r){if(e===t&&n===r)return ze;const i=o=>c5(o,0,1,e,n);return o=>o===0||o===1?o:W1(i(o),t,r)}const H1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Y1=e=>t=>1-e(1-t),G1=qo(.33,1.53,.69,.99),Wd=Y1(G1),K1=H1(Wd),X1=e=>(e*=2)<1?.5*Wd(e):.5*(2-Math.pow(2,-10*(e-1))),Hd=e=>1-Math.sin(Math.acos(e)),Q1=Y1(Hd),q1=H1(Hd),Z1=e=>/^0[^.\s]+$/u.test(e);function f5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Z1(e):!0}const oo=e=>Math.round(e*1e5)/1e5,Yd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function d5(e){return e==null}const h5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gd=(e,t)=>n=>!!(typeof n=="string"&&h5.test(n)&&n.startsWith(e)||t&&!d5(n)&&Object.prototype.hasOwnProperty.call(n,t)),J1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Yd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},p5=e=>Ht(0,255,e),iu={...Ci,transform:e=>Math.round(p5(e))},nr={test:Gd("rgb","red"),parse:J1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+iu.transform(e)+", "+iu.transform(t)+", "+iu.transform(n)+", "+oo(Oo.transform(r))+")"};function m5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Uc={test:Gd("#"),parse:m5,transform:nr.transform},Vr={test:Gd("hsl","hue"),parse:J1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Bt.transform(oo(t))+", "+Bt.transform(oo(n))+", "+oo(Oo.transform(r))+")"},Me={test:e=>nr.test(e)||Uc.test(e)||Vr.test(e),parse:e=>nr.test(e)?nr.parse(e):Vr.test(e)?Vr.parse(e):Uc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?nr.transform(e):Vr.transform(e)},g5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function v5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Yd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(g5))===null||n===void 0?void 0:n.length)||0)>0}const ex="number",tx="color",y5="var",x5="var(",vm="${}",w5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Do(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(w5,l=>(Me.test(l)?(r.color.push(o),i.push(tx),n.push(Me.parse(l))):l.startsWith(x5)?(r.var.push(o),i.push(y5),n.push(l)):(r.number.push(o),i.push(ex),n.push(parseFloat(l))),++o,vm)).split(vm);return{values:n,split:a,indexes:r,types:i}}function nx(e){return Do(e).values}function rx(e){const{split:t,types:n}=Do(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===ex?o+=oo(i[s]):a===tx?o+=Me.transform(i[s]):o+=i[s]}return o}}const S5=e=>typeof e=="number"?0:e;function k5(e){const t=nx(e);return rx(e)(t.map(S5))}const $n={test:v5,parse:nx,createTransformer:rx,getAnimatableNone:k5},C5=new Set(["brightness","contrast","saturate","opacity"]);function b5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Yd)||[];if(!r)return e;const i=n.replace(r,"");let o=C5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const P5=/\b([a-z-]*)\(.*?\)/gu,Wc={...$n,getAnimatableNone:e=>{const t=e.match(P5);return t?t.map(b5).join(" "):e}},T5={...Rd,color:Me,backgroundColor:Me,outlineColor:Me,fill:Me,stroke:Me,borderColor:Me,borderTopColor:Me,borderRightColor:Me,borderBottomColor:Me,borderLeftColor:Me,filter:Wc,WebkitFilter:Wc},Kd=e=>T5[e];function ix(e,t){let n=Kd(e);return n!==Wc&&(n=$n),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const E5=new Set(["auto","none","0"]);function A5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!E5.has(o)&&Do(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=ix(n,i)}const ym=e=>e===Ci||e===z,xm=(e,t)=>parseFloat(e.split(", ")[t]),wm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return xm(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?xm(o[1],e):0}},j5=new Set(["x","y","z"]),R5=ki.filter(e=>!j5.has(e));function M5(e){const t=[];return R5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const hi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:wm(4,13),y:wm(5,14)};hi.translateX=hi.x;hi.translateY=hi.y;const cr=new Set;let Hc=!1,Yc=!1;function ox(){if(Yc){const e=Array.from(cr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=M5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Yc=!1,Hc=!1,cr.forEach(e=>e.complete()),cr.clear()}function sx(){cr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Yc=!0)})}function I5(){sx(),ox()}class Xd{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(cr.add(this),Hc||(Hc=!0,W.read(sx),W.resolveKeyframes(ox))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),cr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,cr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ax=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),L5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function O5(e){const t=L5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function lx(e,t,n=1){const[r,i]=O5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return ax(s)?parseFloat(s):s}return jd(i)?lx(i,t,n+1):i}const ux=e=>t=>t.test(e),N5={test:e=>e==="auto",parse:e=>e},cx=[Ci,z,Bt,gn,TP,PP,N5],Sm=e=>cx.find(ux(e));class fx extends Xd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),jd(u))){const c=lx(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!B1.has(r)||t.length!==2)return;const[i,o]=t,s=Sm(i),a=Sm(o);if(s!==a)if(ym(s)&&ym(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)f5(t[i])&&r.push(i);r.length&&A5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=hi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const km=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($n.test(e)||e==="0")&&!e.startsWith("url("));function D5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function _5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=km(i,t),a=km(o,t);return!s||!a?!1:D5(e)||(n==="spring"||_d(n))&&r}const z5=e=>e!==null;function ml(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(z5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const $5=40;class dx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ut.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>$5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&I5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Ut.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!_5(t,r,i,o))if(s)this.options.duration=0;else{l&&l(ml(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function ou(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function F5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=ou(l,a,e+1/3),o=ou(l,a,e),s=ou(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function ja(e,t){return n=>n>0?t:e}const su=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},V5=[Uc,nr,Vr],B5=e=>V5.find(t=>t.test(e));function Cm(e){const t=B5(e);if(!t)return!1;let n=t.parse(e);return t===Vr&&(n=F5(n)),n}const bm=(e,t)=>{const n=Cm(e),r=Cm(t);if(!n||!r)return ja(e,t);const i={...n};return o=>(i.red=su(n.red,r.red,o),i.green=su(n.green,r.green,o),i.blue=su(n.blue,r.blue,o),i.alpha=oe(n.alpha,r.alpha,o),nr.transform(i))},U5=(e,t)=>n=>t(e(n)),Zo=(...e)=>e.reduce(U5),Gc=new Set(["none","hidden"]);function W5(e,t){return Gc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function H5(e,t){return n=>oe(e,t,n)}function Qd(e){return typeof e=="number"?H5:typeof e=="string"?jd(e)?ja:Me.test(e)?bm:K5:Array.isArray(e)?hx:typeof e=="object"?Me.test(e)?bm:Y5:ja}function hx(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Qd(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function Y5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Qd(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function G5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const K5=(e,t)=>{const n=$n.createTransformer(t),r=Do(e),i=Do(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Gc.has(e)&&!i.values.length||Gc.has(t)&&!r.values.length?W5(e,t):Zo(hx(G5(r,i),i.values),n):ja(e,t)};function px(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):Qd(e)(e,t)}const X5=5;function mx(e,t,n){const r=Math.max(t-X5,0);return Ud(n-e(r),t-r)}const le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},au=.001;function Q5({duration:e=le.duration,bounce:t=le.bounce,velocity:n=le.velocity,mass:r=le.mass}){let i,o,s=1-t;s=Ht(le.minDamping,le.maxDamping,s),e=Ht(le.minDuration,le.maxDuration,Jt(e)),s<1?(i=u=>{const c=u*s,f=c*e,d=c-n,m=Kc(u,s),y=Math.exp(-f);return au-d/m*y},o=u=>{const f=u*s*e,d=f*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),x=Kc(Math.pow(u,2),s);return(-i(u)+au>0?-1:1)*((d-m)*y)/x}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-au+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=Z5(i,o,a);if(e=Zt(e),isNaN(l))return{stiffness:le.stiffness,damping:le.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const q5=12;function Z5(e,t,n){let r=n;for(let i=1;i<q5;i++)r=r-e(r)/t(r);return r}function Kc(e,t){return e*Math.sqrt(1-t*t)}const J5=["duration","bounce"],eT=["stiffness","damping","mass"];function Pm(e,t){return t.some(n=>e[n]!==void 0)}function tT(e){let t={velocity:le.velocity,stiffness:le.stiffness,damping:le.damping,mass:le.mass,isResolvedFromDuration:!1,...e};if(!Pm(e,eT)&&Pm(e,J5))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Ht(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:le.mass,stiffness:i,damping:o}}else{const n=Q5(e);t={...t,...n,mass:le.mass},t.isResolvedFromDuration=!0}return t}function gx(e=le.visualDuration,t=le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:m}=tT({...n,velocity:-Jt(n.velocity||0)}),y=d||0,x=u/(2*Math.sqrt(l*c)),k=s-o,p=Jt(Math.sqrt(l/c)),h=Math.abs(k)<5;r||(r=h?le.restSpeed.granular:le.restSpeed.default),i||(i=h?le.restDelta.granular:le.restDelta.default);let g;if(x<1){const S=Kc(p,x);g=b=>{const P=Math.exp(-x*p*b);return s-P*((y+x*p*k)/S*Math.sin(S*b)+k*Math.cos(S*b))}}else if(x===1)g=S=>s-Math.exp(-p*S)*(k+(y+p*k)*S);else{const S=p*Math.sqrt(x*x-1);g=b=>{const P=Math.exp(-x*p*b),T=Math.min(S*b,300);return s-P*((y+x*p*k)*Math.sinh(T)+S*k*Math.cosh(T))/S}}const C={calculatedDuration:m&&f||null,next:S=>{const b=g(S);if(m)a.done=S>=f;else{let P=0;x<1&&(P=S===0?Zt(y):mx(g,S,b));const T=Math.abs(P)<=r,_=Math.abs(s-b)<=i;a.done=T&&_}return a.value=a.done?s:b,a},toString:()=>{const S=Math.min(O1(C),Fc),b=N1(P=>C.next(S*P).value,S,30);return S+"ms "+b}};return C}function Tm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],d={done:!1,value:f},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const k=f+x,p=s===void 0?k:s(k);p!==k&&(x=p-f);const h=T=>-x*Math.exp(-T/r),g=T=>p+h(T),C=T=>{const _=h(T),R=g(T);d.done=Math.abs(_)<=u,d.value=d.done?p:R};let S,b;const P=T=>{m(d.value)&&(S=T,b=gx({keyframes:[d.value,y(d.value)],velocity:mx(g,T,d.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:T=>{let _=!1;return!b&&S===void 0&&(_=!0,C(T),P(T)),S!==void 0&&T>=S?b.next(T-S):(!_&&C(T),d)}}}const nT=qo(.42,0,1,1),rT=qo(0,0,.58,1),vx=qo(.42,0,.58,1),iT=e=>Array.isArray(e)&&typeof e[0]!="number",oT={linear:ze,easeIn:nT,easeInOut:vx,easeOut:rT,circIn:Hd,circInOut:q1,circOut:Q1,backIn:Wd,backInOut:K1,backOut:G1,anticipate:X1},Em=e=>{if(zd(e)){p1(e.length===4);const[t,n,r,i]=e;return qo(t,n,r,i)}else if(typeof e=="string")return oT[e];return e};function sT(e,t,n){const r=[],i=n||px,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ze:t;a=Zo(l,a)}r.push(a)}return r}function qd(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(p1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=sT(t,r,i),l=a.length,u=c=>{if(s&&c<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const d=yr(e[f],e[f+1],c);return a[f](d)};return n?c=>u(Ht(e[0],e[o-1],c)):u}function aT(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=yr(0,t,r);e.push(oe(n,1,i))}}function yx(e){const t=[0];return aT(t,e.length-1),t}function lT(e,t){return e.map(n=>n*t)}function uT(e,t){return e.map(()=>t||vx).splice(0,e.length-1)}function Ra({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=iT(r)?r.map(Em):Em(r),o={done:!1,value:t[0]},s=lT(n&&n.length===t.length?n:yx(t),e),a=qd(s,t,{ease:Array.isArray(i)?i:uT(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const cT=e=>{const t=({timestamp:n})=>e(n);return{start:()=>W.update(t,!0),stop:()=>Rt(t),now:()=>Se.isProcessing?Se.timestamp:Ut.now()}},fT={decay:Tm,inertia:Tm,tween:Ra,keyframes:Ra,spring:gx},dT=e=>e/100;class gl extends dx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Xd,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=_d(n)?n:fT[n]||Ra;let l,u;a!==Ra&&typeof t[0]!="number"&&(l=Zo(dT,px(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=O1(c));const{calculatedDuration:f}=c,d=f+i,m=d*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:d,repeat:m,repeatType:y,repeatDelay:x,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-d*(this.speed>=0?1:-1),h=this.speed>=0?p<0:p>c;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,C=o;if(m){const T=Math.min(this.currentTime,c)/f;let _=Math.floor(T),R=T%1;!R&&T>=1&&(R=1),R===1&&_--,_=Math.min(_,m+1),!!(_%2)&&(y==="reverse"?(R=1-R,x&&(R-=x/f)):y==="mirror"&&(C=s)),g=Ht(0,1,R)*f}const S=h?{done:!1,value:l[0]}:C.next(g);a&&(S.value=a(S.value));let{done:b}=S;!h&&u!==null&&(b=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return P&&i!==void 0&&(S.value=ml(l,this.options,i)),k&&k(S.value),P&&this.finish(),S}get duration(){const{resolved:t}=this;return t?Jt(t.calculatedDuration):0}get time(){return Jt(this.currentTime)}set time(t){t=Zt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Jt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=cT,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function hT(e){return new gl(e)}const pT=new Set(["opacity","clipPath","filter","transform"]);function mT(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=_1(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const gT=Sd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ma=10,vT=2e4;function yT(e){return _d(e.type)||e.type==="spring"||!D1(e.ease)}function xT(e,t){const n=new gl({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<vT;)r=n.sample(o),i.push(r.value),o+=Ma;return{times:void 0,keyframes:i,duration:o-Ma,ease:"linear"}}const xx={anticipate:X1,backInOut:K1,circInOut:q1};function wT(e){return e in xx}class Am extends dx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new fx(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&Aa()&&wT(o)&&(o=xx[o]),yT(this.options)){const{onComplete:f,onUpdate:d,motionValue:m,element:y,...x}=this.options,k=xT(t,x);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,o=k.ease,s="keyframes"}const c=mT(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:o});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(dm(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(ml(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Jt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Jt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Zt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ze;const{animation:r}=n;dm(r,t)}return ze}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...m}=this.options,y=new gl({...m,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=Zt(this.time);u.setWithVelocity(y.sample(x-Ma).value,y.sample(x).value,Ma)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return gT()&&r&&pT.has(r)&&!l&&!u&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const ST={type:"spring",stiffness:500,damping:25,restSpeed:10},kT=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),CT={type:"keyframes",duration:.8},bT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},PT=(e,{keyframes:t})=>t.length>2?CT:Sr.has(e)?e.startsWith("scale")?kT(t[1]):ST:bT;function TT({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Zd=(e,t,n,r={},i,o)=>s=>{const a=Dd(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Zt(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:d=>{t.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};TT(a)||(c={...c,...PT(e,c)}),c.duration&&(c.duration=Zt(c.duration)),c.repeatDelay&&(c.repeatDelay=Zt(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const d=ml(c.keyframes,a);if(d!==void 0)return W.update(()=>{c.onUpdate(d),c.onComplete()}),new GP([])}return!o&&Am.supports(c)?new Am(c):new gl(c)};function ET({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function wx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const d=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=l[f];if(m===void 0||c&&ET(c,f))continue;const y={delay:n,...Dd(s||{},f)};let x=!1;if(window.MotionHandoffAnimation){const p=U1(e);if(p){const h=window.MotionHandoffAnimation(p,f,W);h!==null&&(y.startTime=h,x=!0)}}Bc(e,f),d.start(Zd(f,d,m,e.shouldReduceMotion&&B1.has(f)?{type:!1}:y,e,x));const k=d.animation;k&&u.push(k)}return a&&Promise.all(u).then(()=>{W.update(()=>{a&&s5(e,a)})}),u}function Xc(e,t,n={}){var r;const i=pl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(wx(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=o;return AT(e,t,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function AT(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(jT).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Xc(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function jT(e,t){return e.sortNodePosition(t)}function RT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Xc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Xc(e,t,n);else{const i=typeof t=="function"?pl(e,t,n.custom):t;r=Promise.all(wx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const MT=Cd.length;function Sx(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Sx(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<MT;n++){const r=Cd[n],i=e.props[r];(Lo(i)||i===!1)&&(t[r]=i)}return t}const IT=[...kd].reverse(),LT=kd.length;function OT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>RT(e,n,r)))}function NT(e){let t=OT(e),n=jm(),r=!0;const i=l=>(u,c)=>{var f;const d=pl(e,c,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:m,transitionEnd:y,...x}=d;u={...u,...x,...y}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,c=Sx(e.parent)||{},f=[],d=new Set;let m={},y=1/0;for(let k=0;k<LT;k++){const p=IT[k],h=n[p],g=u[p]!==void 0?u[p]:c[p],C=Lo(g),S=p===l?h.isActive:null;S===!1&&(y=k);let b=g===c[p]&&g!==u[p]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...m},!h.isActive&&S===null||!g&&!h.prevProp||dl(g)||typeof g=="boolean")continue;const P=DT(h.prevProp,g);let T=P||p===l&&h.isActive&&!b&&C||k>y&&C,_=!1;const R=Array.isArray(g)?g:[g];let F=R.reduce(i(p),{});S===!1&&(F={});const{prevResolvedValues:ge={}}=h,Ke={...ge,...F},lt=B=>{T=!0,d.has(B)&&(_=!0,d.delete(B)),h.needsAnimating[B]=!0;const j=e.getValue(B);j&&(j.liveStyle=!1)};for(const B in Ke){const j=F[B],O=ge[B];if(m.hasOwnProperty(B))continue;let N=!1;$c(j)&&$c(O)?N=!I1(j,O):N=j!==O,N?j!=null?lt(B):d.add(B):j!==void 0&&d.has(B)?lt(B):h.protectedKeys[B]=!0}h.prevProp=g,h.prevResolvedValues=F,h.isActive&&(m={...m,...F}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(b&&P)||_)&&f.push(...R.map(B=>({animation:B,options:{type:p}})))}if(d.size){const k={};d.forEach(p=>{const h=e.getBaseTarget(p),g=e.getValue(p);g&&(g.liveStyle=!0),k[p]=h??null}),f.push({animation:k})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const f=s(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=jm(),r=!0}}}function DT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!I1(t,e):!1}function Hn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function jm(){return{animate:Hn(!0),whileInView:Hn(),whileHover:Hn(),whileTap:Hn(),whileDrag:Hn(),whileFocus:Hn(),exit:Hn()}}class Un{constructor(t){this.isMounted=!1,this.node=t}update(){}}class _T extends Un{constructor(t){super(t),t.animationState||(t.animationState=NT(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();dl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let zT=0;class $T extends Un{constructor(){super(...arguments),this.id=zT++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const FT={animation:{Feature:_T},exit:{Feature:$T}};function _o(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Jo(e){return{point:{x:e.pageX,y:e.pageY}}}const VT=e=>t=>$d(t)&&e(t,Jo(t));function so(e,t,n,r){return _o(e,t,VT(n),r)}const Rm=(e,t)=>Math.abs(e-t);function BT(e,t){const n=Rm(e.x,t.x),r=Rm(e.y,t.y);return Math.sqrt(n**2+r**2)}class kx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=uu(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,m=BT(f.offset,{x:0,y:0})>=3;if(!d&&!m)return;const{point:y}=f,{timestamp:x}=Se;this.history.push({...y,timestamp:x});const{onStart:k,onMove:p}=this.handlers;d||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=lu(d,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=uu(f.type==="pointercancel"?this.lastMoveEventInfo:lu(d,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,k),y&&y(f,k)},!$d(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Jo(t),a=lu(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Se;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,uu(a,this.history)),this.removeListeners=Zo(so(this.contextWindow,"pointermove",this.handlePointerMove),so(this.contextWindow,"pointerup",this.handlePointerUp),so(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Rt(this.updatePoint)}}function lu(e,t){return t?{point:t(e.point)}:e}function Mm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function uu({point:e},t){return{point:e,delta:Mm(e,Cx(t)),offset:Mm(e,UT(t)),velocity:WT(t,.1)}}function UT(e){return e[0]}function Cx(e){return e[e.length-1]}function WT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Cx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Zt(t)));)n--;if(!r)return{x:0,y:0};const o=Jt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const bx=1e-4,HT=1-bx,YT=1+bx,Px=.01,GT=0-Px,KT=0+Px;function it(e){return e.max-e.min}function XT(e,t,n){return Math.abs(e-t)<=n}function Im(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=it(n)/it(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=HT&&e.scale<=YT||isNaN(e.scale))&&(e.scale=1),(e.translate>=GT&&e.translate<=KT||isNaN(e.translate))&&(e.translate=0)}function ao(e,t,n,r){Im(e.x,t.x,n.x,r?r.originX:void 0),Im(e.y,t.y,n.y,r?r.originY:void 0)}function Lm(e,t,n){e.min=n.min+t.min,e.max=e.min+it(t)}function QT(e,t,n){Lm(e.x,t.x,n.x),Lm(e.y,t.y,n.y)}function Om(e,t,n){e.min=t.min-n.min,e.max=e.min+it(t)}function lo(e,t,n){Om(e.x,t.x,n.x),Om(e.y,t.y,n.y)}function qT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function Nm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function ZT(e,{top:t,left:n,bottom:r,right:i}){return{x:Nm(e.x,n,i),y:Nm(e.y,t,r)}}function Dm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function JT(e,t){return{x:Dm(e.x,t.x),y:Dm(e.y,t.y)}}function eE(e,t){let n=.5;const r=it(e),i=it(t);return i>r?n=yr(t.min,t.max-r,e.min):r>i&&(n=yr(e.min,e.max-i,t.min)),Ht(0,1,n)}function tE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qc=.35;function nE(e=Qc){return e===!1?e=0:e===!0&&(e=Qc),{x:_m(e,"left","right"),y:_m(e,"top","bottom")}}function _m(e,t,n){return{min:zm(e,t),max:zm(e,n)}}function zm(e,t){return typeof e=="number"?e:e[t]||0}const $m=()=>({translate:0,scale:1,origin:0,originPoint:0}),Br=()=>({x:$m(),y:$m()}),Fm=()=>({min:0,max:0}),fe=()=>({x:Fm(),y:Fm()});function ft(e){return[e("x"),e("y")]}function Tx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function rE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function iE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function cu(e){return e===void 0||e===1}function qc({scale:e,scaleX:t,scaleY:n}){return!cu(e)||!cu(t)||!cu(n)}function Xn(e){return qc(e)||Ex(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ex(e){return Vm(e.x)||Vm(e.y)}function Vm(e){return e&&e!=="0%"}function Ia(e,t,n){const r=e-n,i=t*r;return n+i}function Bm(e,t,n,r,i){return i!==void 0&&(e=Ia(e,i,r)),Ia(e,n,r)+t}function Zc(e,t=0,n=1,r,i){e.min=Bm(e.min,t,n,r,i),e.max=Bm(e.max,t,n,r,i)}function Ax(e,{x:t,y:n}){Zc(e.x,t.translate,t.scale,t.originPoint),Zc(e.y,n.translate,n.scale,n.originPoint)}const Um=.999999999999,Wm=1.0000000000001;function oE(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Wr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Ax(e,s)),r&&Xn(o.latestValues)&&Wr(e,o.latestValues))}t.x<Wm&&t.x>Um&&(t.x=1),t.y<Wm&&t.y>Um&&(t.y=1)}function Ur(e,t){e.min=e.min+t,e.max=e.max+t}function Hm(e,t,n,r,i=.5){const o=oe(e.min,e.max,i);Zc(e,t,n,o,r)}function Wr(e,t){Hm(e.x,t.x,t.scaleX,t.scale,t.originX),Hm(e.y,t.y,t.scaleY,t.scale,t.originY)}function jx(e,t){return Tx(iE(e.getBoundingClientRect(),t))}function sE(e,t,n){const r=jx(e,n),{scroll:i}=t;return i&&(Ur(r.x,i.offset.x),Ur(r.y,i.offset.y)),r}const Rx=({current:e})=>e?e.ownerDocument.defaultView:null,aE=new WeakMap;class lE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Jo(c).point)},o=(c,f)=>{const{drag:d,dragPropagation:m,onDragStart:y}=this.getProps();if(d&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=t5(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ft(k=>{let p=this.getAxisMotionValue(k).get()||0;if(Bt.test(p)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[k];g&&(p=it(g)*(parseFloat(p)/100))}}this.originPoint[k]=p}),y&&W.postRender(()=>y(c,f)),Bc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,f)=>{const{dragPropagation:d,dragDirectionLock:m,onDirectionLock:y,onDrag:x}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:k}=f;if(m&&this.currentDirection===null){this.currentDirection=uE(k),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),x&&x(c,f)},a=(c,f)=>this.stop(c,f),l=()=>ft(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new kx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Rx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&W.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ps(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=qT(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Fr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=ZT(i.layoutBox,n):this.constraints=!1,this.elastic=nE(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ft(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=tE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Fr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=sE(r,i.root,this.visualElement.getTransformPagePoint());let s=JT(i.layout.layoutBox,o);if(n){const a=n(rE(s));this.hasMutatedConstraints=!!a,a&&(s=Tx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ft(c=>{if(!Ps(c,n,this.currentDirection))return;let f=l&&l[c]||{};s&&(f={min:0,max:0});const d=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Bc(this.visualElement,t),r.start(Zd(t,r,0,n,this.visualElement,!1))}stopAnimation(){ft(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ft(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ft(n=>{const{drag:r}=this.getProps();if(!Ps(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-oe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Fr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ft(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=eE({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ft(s=>{if(!Ps(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(oe(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;aE.set(this.visualElement,this);const t=this.visualElement.current,n=so(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Fr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),W.read(r);const s=_o(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ft(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Qc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ps(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function uE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class cE extends Un{constructor(t){super(t),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new lE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ym=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class fE extends Un{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(t){this.session=new kx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Rx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ym(t),onStart:Ym(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&W.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=so(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Gm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Li={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Gm(e,t.target.x),r=Gm(e,t.target.y);return`${n}% ${r}%`}},dE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$n.parse(e);if(i.length>5)return r;const o=$n.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=oe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class hE extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;DP(pE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Gs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||W.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Pd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Mx(e){const[t,n]=h1(),r=w.useContext(xd);return v.jsx(hE,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(w1),isPresent:t,safeToRemove:n})}const pE={borderRadius:{...Li,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Li,borderTopRightRadius:Li,borderBottomLeftRadius:Li,borderBottomRightRadius:Li,boxShadow:dE};function mE(e,t,n){const r=be(e)?e:$t(e);return r.start(Zd("",r,t,n)),r.animation}function gE(e){return e instanceof SVGElement&&e.tagName!=="svg"}const vE=(e,t)=>e.depth-t.depth;class yE{constructor(){this.children=[],this.isDirty=!1}add(t){Fd(this.children,t),this.isDirty=!0}remove(t){Vd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(vE),this.isDirty=!1,this.children.forEach(t)}}function xE(e,t){const n=Ut.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Rt(r),e(o-t))};return W.read(r,!0),()=>Rt(r)}const Ix=["TopLeft","TopRight","BottomLeft","BottomRight"],wE=Ix.length,Km=e=>typeof e=="string"?parseFloat(e):e,Xm=e=>typeof e=="number"||z.test(e);function SE(e,t,n,r,i,o){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,kE(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,CE(r))):o&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<wE;s++){const a=`border${Ix[s]}Radius`;let l=Qm(t,a),u=Qm(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Xm(l)===Xm(u)?(e[a]=Math.max(oe(Km(l),Km(u),r),0),(Bt.test(u)||Bt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function Qm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const kE=Lx(0,.5,Q1),CE=Lx(.5,.95,ze);function Lx(e,t,n){return r=>r<e?0:r>t?1:n(yr(e,t,r))}function qm(e,t){e.min=t.min,e.max=t.max}function ct(e,t){qm(e.x,t.x),qm(e.y,t.y)}function Zm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Jm(e,t,n,r,i){return e-=t,e=Ia(e,1/n,r),i!==void 0&&(e=Ia(e,1/i,r)),e}function bE(e,t=0,n=1,r=.5,i,o=e,s=e){if(Bt.test(t)&&(t=parseFloat(t),t=oe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=oe(o.min,o.max,r);e===o&&(a-=t),e.min=Jm(e.min,t,n,a,i),e.max=Jm(e.max,t,n,a,i)}function eg(e,t,[n,r,i],o,s){bE(e,t[n],t[r],t[i],t.scale,o,s)}const PE=["x","scaleX","originX"],TE=["y","scaleY","originY"];function tg(e,t,n,r){eg(e.x,t,PE,n?n.x:void 0,r?r.x:void 0),eg(e.y,t,TE,n?n.y:void 0,r?r.y:void 0)}function ng(e){return e.translate===0&&e.scale===1}function Ox(e){return ng(e.x)&&ng(e.y)}function rg(e,t){return e.min===t.min&&e.max===t.max}function EE(e,t){return rg(e.x,t.x)&&rg(e.y,t.y)}function ig(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nx(e,t){return ig(e.x,t.x)&&ig(e.y,t.y)}function og(e){return it(e.x)/it(e.y)}function sg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class AE{constructor(){this.members=[]}add(t){Fd(this.members,t),t.scheduleRender()}remove(t){if(Vd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jE(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:m,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),f&&(r+=`rotateX(${f}deg) `),d&&(r+=`rotateY(${d}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Qn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wi=typeof window<"u"&&window.MotionDebug!==void 0,fu=["","X","Y","Z"],RE={visibility:"hidden"},ag=1e3;let ME=0;function du(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Dx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=U1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Dx(r)}function _x({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=ME++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wi&&(Qn.totalNodes=Qn.resolvedTargetDeltas=Qn.recalculatedProjection=0),this.nodes.forEach(OE),this.nodes.forEach($E),this.nodes.forEach(FE),this.nodes.forEach(NE),Wi&&window.MotionDebug.record(Qn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new yE)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Bd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=gE(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const d=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=xE(d,250),Gs.hasAnimatedSinceResize&&(Gs.hasAnimatedSinceResize=!1,this.nodes.forEach(ug))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||HE,{onLayoutAnimationStart:k,onLayoutAnimationComplete:p}=c.getProps(),h=!this.targetLayout||!Nx(this.targetLayout,y),g=!d&&m;if(this.options.layoutRoot||this.resumeFrom||g||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const C={...Dd(x,"layout"),onPlay:k,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else d||ug(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Rt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(VE),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Dx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(lg);return}this.isUpdating||this.nodes.forEach(_E),this.isUpdating=!1,this.nodes.forEach(zE),this.nodes.forEach(IE),this.nodes.forEach(LE),this.clearAllSnapshots();const a=Ut.now();Se.delta=Ht(0,1e3/60,a-Se.timestamp),Se.timestamp=a,Se.isProcessing=!0,nu.update.process(Se),nu.preRender.process(Se),nu.render.process(Se),Se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(DE),this.sharedNodes.forEach(BE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Ox(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Xn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),YE(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return fe();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(GE))){const{scroll:c}=this.root;c&&(Ur(l.x,c.offset.x),Ur(l.y,c.offset.y))}return l}removeElementScroll(s){var a;const l=fe();if(ct(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&ct(l,s),Ur(l.x,f.offset.x),Ur(l.y,f.offset.y))}return l}applyTransform(s,a=!1){const l=fe();ct(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Wr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Xn(c.latestValues)&&Wr(l,c.latestValues)}return Xn(this.latestValues)&&Wr(l,this.latestValues),l}removeTransform(s){const a=fe();ct(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Xn(u.latestValues))continue;qc(u.latestValues)&&u.updateSnapshot();const c=fe(),f=u.measurePageBox();ct(c,f),tg(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Xn(this.latestValues)&&tg(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Se.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),lo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=fe(),this.targetWithTransforms=fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ct(this.target,this.layout.layoutBox),Ax(this.target,this.targetDelta)):ct(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),lo(this.relativeTargetOrigin,this.target,m.target),ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wi&&Qn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||qc(this.parent.latestValues)||Ex(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Se.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;ct(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,m=this.treeScale.y;oE(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=fe());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Zm(this.prevProjectionDelta.x,this.projectionDelta.x),Zm(this.prevProjectionDelta.y,this.projectionDelta.y)),ao(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==m||!sg(this.projectionDelta.x,this.prevProjectionDelta.x)||!sg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Wi&&Qn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Br(),this.projectionDelta=Br(),this.projectionDeltaWithTransform=Br()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=fe(),m=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=m!==y,k=this.getStack(),p=!k||k.members.length<=1,h=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(WE));this.animationProgress=0;let g;this.mixTargetDelta=C=>{const S=C/1e3;cg(f.x,s.x,S),cg(f.y,s.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),UE(this.relativeTarget,this.relativeTargetOrigin,d,S),g&&EE(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=fe()),ct(g,this.relativeTarget)),x&&(this.animationValues=c,SE(c,u,this.latestValues,S,h,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Rt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{Gs.hasAnimatedSinceResize=!0,this.currentAnimation=mE(0,ag,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ag),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&zx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||fe();const f=it(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const d=it(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+d}ct(a,l),Wr(a,c),ao(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new AE),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&du("z",s,u,this.animationValues);for(let c=0;c<fu.length;c++)du(`rotate${fu[c]}`,s,u,this.animationValues),du(`skew${fu[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return RE;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Hs(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Hs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Xn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=jE(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in No){if(d[x]===void 0)continue;const{correct:k,applyTo:p,isCSSVariable:h}=No[x],g=u.transform==="none"?d[x]:k(d[x],f);if(p){const C=p.length;for(let S=0;S<C;S++)u[p[S]]=g}else h?this.options.visualElement.renderState.vars[x]=g:u[x]=g}return this.options.layoutId&&(u.pointerEvents=f===this?Hs(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(lg),this.root.sharedNodes.clear()}}}function IE(e){e.updateLayout()}function LE(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?ft(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],m=it(d);d.min=r[f].min,d.max=d.min+m}):zx(o,n.layoutBox,r)&&ft(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],m=it(r[f]);d.max=d.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const a=Br();ao(a,r,n.layoutBox);const l=Br();s?ao(l,e.applyTransform(i,!0),n.measuredBox):ao(l,r,n.layoutBox);const u=!Ox(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:m}=f;if(d&&m){const y=fe();lo(y,n.layoutBox,d.layoutBox);const x=fe();lo(x,r,m.layoutBox),Nx(y,x)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function OE(e){Wi&&Qn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function NE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function DE(e){e.clearSnapshot()}function lg(e){e.clearMeasurements()}function _E(e){e.isLayoutDirty=!1}function zE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ug(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $E(e){e.resolveTargetDelta()}function FE(e){e.calcProjection()}function VE(e){e.resetSkewAndRotation()}function BE(e){e.removeLeadSnapshot()}function cg(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fg(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function UE(e,t,n,r){fg(e.x,t.x,n.x,r),fg(e.y,t.y,n.y,r)}function WE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const HE={duration:.45,ease:[.4,0,.1,1]},dg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hg=dg("applewebkit/")&&!dg("chrome/")?Math.round:ze;function pg(e){e.min=hg(e.min),e.max=hg(e.max)}function YE(e){pg(e.x),pg(e.y)}function zx(e,t,n){return e==="position"||e==="preserve-aspect"&&!XT(og(t),og(n),.2)}function GE(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const KE=_x({attachResizeListener:(e,t)=>_o(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),hu={current:void 0},$x=_x({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hu.current){const e=new KE({});e.mount(window),e.setOptions({layoutScroll:!0}),hu.current=e}return hu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),XE={pan:{Feature:fE},drag:{Feature:cE,ProjectionNode:$x,MeasureLayout:Mx}};function mg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&W.postRender(()=>o(t,Jo(t)))}class QE extends Un{mount(){const{current:t}=this.node;t&&(this.unmount=QP(t,(n,r)=>(mg(this.node,r,"Start"),i=>mg(this.node,i,"End"))))}unmount(){}}class qE extends Un{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zo(_o(this.node.current,"focus",()=>this.onFocus()),_o(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gg(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&W.postRender(()=>o(t,Jo(t)))}class ZE extends Un{mount(){const{current:t}=this.node;t&&(this.unmount=e5(t,(n,r)=>(gg(this.node,r,"Start"),(i,{success:o})=>gg(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jc=new WeakMap,pu=new WeakMap,JE=e=>{const t=Jc.get(e.target);t&&t(e)},e4=e=>{e.forEach(JE)};function t4({root:e,...t}){const n=e||document;pu.has(n)||pu.set(n,{});const r=pu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(e4,{root:e,...t})),r[i]}function n4(e,t,n){const r=t4(t);return Jc.set(e,n),r.observe(e),()=>{Jc.delete(e),r.unobserve(e)}}const r4={some:0,all:1};class i4 extends Un{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:r4[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return n4(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(o4(t,n))&&this.startObserver()}unmount(){}}function o4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const s4={inView:{Feature:i4},tap:{Feature:ZE},focus:{Feature:qE},hover:{Feature:QE}},a4={layout:{ProjectionNode:$x,MeasureLayout:Mx}},ef={current:null},Fx={current:!1};function l4(){if(Fx.current=!0,!!wd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ef.current=e.matches;e.addListener(t),t()}else ef.current=!1}const u4=[...cx,Me,$n],c4=e=>u4.find(ux(e)),vg=new WeakMap;function f4(e,t,n){for(const r in t){const i=t[r],o=n[r];if(be(i))e.addValue(r,i);else if(be(o))e.addValue(r,$t(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,$t(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const yg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class d4{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=Ut.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,W.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=s;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=hl(n),this.isVariantNode=y1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in d){const y=d[m];l[m]!==void 0&&be(y)&&y.set(l[m],!1)}}mount(t){this.current=t,vg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Fx.current||l4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ef.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){vg.delete(this.current),this.projection&&this.projection.unmount(),Rt(this.notifyUpdate),Rt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Sr.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in di){const n=di[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<yg.length;r++){const i=yg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=f4(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=$t(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(ax(i)||Z1(i))?i=parseFloat(i):!c4(i)&&$n.test(n)&&(i=ix(t,n)),this.setBaseTarget(t,be(i)?i.get():i)),be(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=Ed(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!be(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Bd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Vx extends d4{constructor(){super(...arguments),this.KeyframeResolver=fx}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;be(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function h4(e){return window.getComputedStyle(e)}class p4 extends Vx{constructor(){super(...arguments),this.type="html",this.renderInstance=T1}readValueFromInstance(t,n){if(Sr.has(n)){const r=Kd(n);return r&&r.default||0}else{const r=h4(t),i=(Ad(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return jx(t,n)}build(t,n,r){Md(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Nd(t,n,r)}}class m4 extends Vx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Sr.has(n)){const r=Kd(n);return r&&r.default||0}return n=E1.has(n)?n:bd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return R1(t,n,r)}build(t,n,r){Id(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){A1(t,n,r,i)}mount(t){this.isSVGTag=Od(t.tagName),super.mount(t)}}const g4=(e,t)=>Td(e)?new m4(t):new p4(t,{allowProjection:e!==w.Fragment}),v4=HP({...FT,...s4,...XE,...a4},g4),me=sP(v4);function y4(e,t,n){w.useInsertionEffect(()=>e.on(t,n),[e,t,n])}function Bx(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return W.update(r,!0),()=>Rt(r)}const Ks=new WeakMap;let vn;function x4(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function w4({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Ks.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return x4(e,n)}})})}function S4(e){e.forEach(w4)}function k4(){typeof ResizeObserver>"u"||(vn=new ResizeObserver(S4))}function C4(e,t){vn||k4();const n=$1(e);return n.forEach(r=>{let i=Ks.get(r);i||(i=new Set,Ks.set(r,i)),i.add(t),vn==null||vn.observe(r)}),()=>{n.forEach(r=>{const i=Ks.get(r);i==null||i.delete(t),i!=null&&i.size||vn==null||vn.unobserve(r)})}}const Xs=new Set;let uo;function b4(){uo=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Xs.forEach(n=>n(t))},window.addEventListener("resize",uo)}function P4(e){return Xs.add(e),uo||b4(),()=>{Xs.delete(e),!Xs.size&&uo&&(uo=void 0)}}function T4(e,t){return typeof e=="function"?P4(e):C4(e,t)}const E4=50,xg=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),A4=()=>({time:0,x:xg(),y:xg()}),j4={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function wg(e,t,n,r){const i=n[t],{length:o,position:s}=j4[t],a=i.current,l=n.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=yr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>E4?0:Ud(i.current-a,u)}function R4(e,t,n){wg(e,"x",t,n),wg(e,"y",t,n),t.time=n}function M4(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const tf={start:0,center:.5,end:1};function Sg(e,t,n=0){let r=0;if(e in tf&&(e=tf[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const I4=[0,0];function L4(e,t,n,r){let i=Array.isArray(e)?e:I4,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,tf[e]?e:"0"]),o=Sg(i[0],n,r),s=Sg(i[1],t),o-s}const O4={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},N4={x:0,y:0};function D4(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function _4(e,t,n){const{offset:r=O4.All}=n,{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?M4(i,e):N4,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:D4(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const f=r.length;for(let d=0;d<f;d++){const m=L4(r[d],u[s],l[s],a[o]);!c&&m!==t[o].interpolatorOffsets[d]&&(c=!0),t[o].offset[d]=m}c&&(t[o].interpolate=qd(t[o].offset,yx(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=Ht(0,1,t[o].interpolate(t[o].current))}function z4(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function $4(e,t,n,r={}){return{measure:()=>z4(e,r.target,n),update:i=>{R4(e,n,i),(r.offset||r.target)&&_4(e,n,r)},notify:()=>t(n)}}const Oi=new WeakMap,kg=new WeakMap,mu=new WeakMap,Cg=e=>e===document.documentElement?window:e;function Jd(e,{container:t=document.documentElement,...n}={}){let r=mu.get(t);r||(r=new Set,mu.set(t,r));const i=A4(),o=$4(t,e,i,n);if(r.add(o),!Oi.has(t)){const a=()=>{for(const d of r)d.measure()},l=()=>{for(const d of r)d.update(Se.timestamp)},u=()=>{for(const d of r)d.notify()},c=()=>{W.read(a,!1,!0),W.read(l,!1,!0),W.update(u,!1,!0)};Oi.set(t,c);const f=Cg(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&kg.set(t,T4(t,c)),f.addEventListener("scroll",c,{passive:!0})}const s=Oi.get(t);return W.read(s,!1,!0),()=>{var a;Rt(s);const l=mu.get(t);if(!l||(l.delete(o),l.size))return;const u=Oi.get(t);Oi.delete(t),u&&(Cg(t).removeEventListener("scroll",u),(a=kg.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function F4({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Jd(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const gu=new Map;function Ux({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),gu.has(t)||gu.set(t,{});const r=gu.get(t);return r[n]||(r[n]=L1()?new ScrollTimeline({source:t,axis:n}):F4({source:t,axis:n})),r[n]}function V4(e){return e.length===2}function Wx(e){return e&&(e.target||e.offset)}function B4(e,t){return V4(e)||Wx(t)?Jd(n=>{e(n[t.axis].progress,n)},t):Bx(e,Ux(t))}function U4(e,t){if(e.flatten(),Wx(t))return e.pause(),Jd(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Ux(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),Bx(i=>{r.time=r.duration*i},n))):ze}}function W4(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?B4(e,r):U4(e,r)}function bg(e,t){Zb(!!(!t||t.current))}const H4=()=>({scrollX:$t(0),scrollY:$t(0),scrollXProgress:$t(0),scrollYProgress:$t(0)});function Pg({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Si(H4);return(n?Xo:w.useEffect)(()=>(bg("target",t),bg("container",e),W4((s,{x:a,y:l})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function Hx(e){const t=Si(()=>$t(e)),{isStatic:n}=w.useContext(Ko);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}function Yx(e,t){const n=Hx(t()),r=()=>n.set(t());return r(),Xo(()=>{const i=()=>W.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Rt(r)}}),n}function Tg(e){return typeof e=="number"?e:parseFloat(e)}function nf(e,t={}){const{isStatic:n}=w.useContext(Ko),r=w.useRef(null),i=Hx(be(e)?Tg(e.get()):e),o=w.useRef(i.get()),s=w.useRef(()=>{}),a=()=>{l(),r.current=hT({keyframes:[i.get(),o.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:s.current})},l=()=>{r.current&&r.current.stop()};return w.useInsertionEffect(()=>i.attach((u,c)=>n?c(u):(o.current=u,s.current=c,W.postRender(a),i.get()),l),[JSON.stringify(t)]),Xo(()=>{if(be(e))return e.on("change",u=>i.set(Tg(u)))},[i]),i}const Y4=e=>e&&typeof e=="object"&&e.mix,G4=e=>Y4(e)?e.mix:void 0;function K4(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=qd(i,o,{mixer:G4(o[0]),...s});return t?a(r):a}function X4(e){io.current=[],e();const t=Yx(io.current,e);return io.current=void 0,t}function Hi(e,t,n,r){if(typeof e=="function")return X4(e);const i=typeof t=="function"?t:K4(t,n,r);return Array.isArray(e)?Eg(e,i):Eg([e],([o])=>i(o))}function Eg(e,t){const n=Si(()=>[]);return Yx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Q4({setCursorHoverColor:e,setIsHoveringCards:t}){const{card:n}=xt(),r={offscreen:{x:100,opacity:0},onscreen:i=>({x:0,opacity:1,transition:{type:"spring",bounce:.4,delay:i*.1}})};return v.jsx(ul,{children:v.jsx(q4,{children:v.jsx(Z4,{children:n.map((i,o)=>v.jsx(J4,{variants:r,initial:"offscreen",animate:"onscreen",custom:o,children:v.jsx(Lb,{id:i.id,path:i.path,title:i.title,type:i.type,label:i.label,color:i.color,backgroundColor:i.backgroundColor,image:i.image,setCursorHoverColor:e,setIsHoveringCards:t},i.id)},i.id))})})})}const q4=E.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 90vw;
        margin: 3em 0 0 4em;
    }
    `,Z4=E.div`
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1024px) {
        height: 45vh;
;
  }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
  }
`,J4=E(me.div)`
    display: flex;
    width: 15vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;function e6({setCursorHoverColor:e,setIsHoveringCards:t}){const[n,r]=w.useState(""),i=w.useRef(null),o=["--dark: #1b1f2e","--greenish: #497770","--yellowish: #f5ca80","--ocean: #00a6a6","--redish: #eeb7b7","--creamy: #f3b88474","--blueish: #12398d","--neon-green: #0ac753","--light-purple: #564d8d","--silver-light: #f7f7f7e8","--test: #c2b8f5","--more-red: #eb7d7d"].map(l=>l.split(": ")[1]),s=()=>o[Math.floor(Math.random()*o.length)],a="Emil Stjernlöf";return w.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&console.log("AboutMe section is in view")},{root:null,rootMargin:"0px",threshold:.1});return i.current&&l.observe(i.current),()=>{i.current&&l.unobserve(i.current)}},[]),v.jsx(v.Fragment,{children:v.jsx(r6,{style:{fontFamily:"Poiret One"},children:v.jsxs(i6,{children:[v.jsx(o6,{initial:{x:"10%",opacity:0},animate:{x:"0%",opacity:1},transition:{duration:.75,ease:"easeOut"},exit:{opacity:1},children:v.jsx(s6,{children:a.split("").map((l,u)=>l===" "?v.jsx("span",{children:" "},u):v.jsx(a6,{hovercolor:n,onMouseEnter:()=>r(s()),children:l},u))})}),v.jsx(Q4,{setCursorHoverColor:e,setIsHoveringCards:t})]})})})}const t6=K`
0% {
  text-shadow: 0 0 0 var(--dark);
}
100% {
  text-shadow: 0.7vw 0.7vw var(--dark);
}
`,n6=K`
  0% {
    text-shadow: 0.7vw 0.7vw var(--dark);
  }
  100% {
    text-shadow: 0 0 0 var(--dark);
  }
`,r6=E.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #fff;

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }
`,i6=E.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 20px 20px 20px 5vw;
  scroll-snap-align: start;
  background-color: ${e=>e.dark?"var(--dark)":"#fff"};
`,o6=E(me.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;
  margin-top: 8vh;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
`,s6=E.h1`
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark);

  @media (max-width: 768px) and (min-width: 320px) {
    margin-top: 2.5em;
  }
`,a6=E.span`
  display: inline-block;
  font-size: clamp(3rem, 12vw, 13rem);
  font-weight: 500;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark);
  background-color: transparent;
  transition: color 0.2s cubic-bezier(0.27, -0.32, 0.7, 1.37),
    background-color 0.1s, transform 0.3s;

  @media (min-width: 769px) {
    &:hover {
      color: ${e=>e.hovercolor||"white"};
      transform: translateY(-0.7vw) translateX(-0.7vw);
      animation: ${t6} 0.5s forwards;

      .hovered {
        color: white;
      }
    }

    &:not(:hover) {
      animation: ${n6} 0.8s forwards;
    }
  }
`;var l6="1.1.16";function Gx(e,t,n){return Math.max(e,Math.min(t,n))}function u6(e,t,n){return(1-n)*e+n*t}function c6(e,t,n,r){return u6(e,t,1-Math.exp(-n*r))}function f6(e,t){return(e%t+t)%t}var d6=class{constructor(){D(this,"isRunning",!1);D(this,"value",0);D(this,"from",0);D(this,"to",0);D(this,"currentTime",0);D(this,"lerp");D(this,"duration");D(this,"easing");D(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Gx(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=c6(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function h6(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var p6=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){D(this,"width",0);D(this,"height",0);D(this,"scrollHeight",0);D(this,"scrollWidth",0);D(this,"debouncedResize");D(this,"wrapperResizeObserver");D(this,"contentResizeObserver");D(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});D(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});D(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=h6(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Kx=class{constructor(){D(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},Ag=100/6,hn={passive:!1},m6=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){D(this,"touchStart",{x:0,y:0});D(this,"lastDelta",{x:0,y:0});D(this,"window",{width:0,height:0});D(this,"emitter",new Kx);D(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});D(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});D(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});D(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?Ag:r===2?this.window.width:1,o=r===1?Ag:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});D(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hn),this.element.addEventListener("touchstart",this.onTouchStart,hn),this.element.addEventListener("touchmove",this.onTouchMove,hn),this.element.addEventListener("touchend",this.onTouchEnd,hn)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,hn),this.element.removeEventListener("touchstart",this.onTouchStart,hn),this.element.removeEventListener("touchmove",this.onTouchMove,hn),this.element.removeEventListener("touchend",this.onTouchEnd,hn)}},eh=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:s=35,duration:a,easing:l=S=>Math.min(1,1.001-Math.pow(2,-10*S)),lerp:u=.1,infinite:c=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:m=1,wheelMultiplier:y=1,autoResize:x=!0,prevent:k,virtualScroll:p,overscroll:h=!0,autoRaf:g=!1,__experimental__naiveDimensions:C=!1}={}){D(this,"_isScrolling",!1);D(this,"_isStopped",!1);D(this,"_isLocked",!1);D(this,"_preventNextNativeScrollEvent",!1);D(this,"_resetVelocityTimeout",null);D(this,"__rafID",null);D(this,"isTouching");D(this,"time",0);D(this,"userData",{});D(this,"lastVelocity",0);D(this,"velocity",0);D(this,"direction",0);D(this,"options");D(this,"targetScroll");D(this,"animatedScroll");D(this,"animate",new d6);D(this,"emitter",new Kx);D(this,"dimensions");D(this,"virtualScroll");D(this,"onPointerDown",e=>{e.button===1&&this.reset()});D(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");if(this.isTouching=r.type==="touchstart"||r.type==="touchmove",this.options.syncTouch&&i&&r.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const a=t===0&&n===0,l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let u=r.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const c=this.options.prevent;if(u.find(k=>{var p,h,g;return k instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(k))||((p=k.hasAttribute)==null?void 0:p.call(k,"data-lenis-prevent"))||i&&((h=k.hasAttribute)==null?void 0:h.call(k,"data-lenis-prevent-touch"))||o&&((g=k.hasAttribute)==null?void 0:g.call(k,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.preventDefault();const m=i&&this.options.syncTouch,x=i&&r.type==="touchend"&&Math.abs(d)>5;x&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...m?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});D(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});D(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=l6,(!e||e===document.documentElement||e===document.body)&&(e=window),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaMultiplier:s,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:d,orientation:f,touchMultiplier:m,wheelMultiplier:y,autoResize:x,prevent:k,virtualScroll:p,overscroll:h,autoRaf:g,__experimental__naiveDimensions:C},this.dimensions=new p6(e,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new m6(n,{touchMultiplier:m,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,duration:i=this.options.duration,easing:o=this.options.easing,lerp:s=this.options.lerp,onStart:a,onComplete:l,force:u=!1,programmatic:c=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof e=="string"&&["top","left","start"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(d=e),d){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?y.left:y.top}const m=d.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=Gx(0,e,this.limit),e===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}c||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:i,easing:o,lerp:s,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),c&&(this.targetScroll=d),m||this.emit(),m&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?f6(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Xx=w.createContext(),Qx=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(""),o=s=>{n(!0),i(s)};return w.useEffect(()=>{if(t){const s=setTimeout(()=>{n(!1)},800);return()=>clearTimeout(s)}},[t]),v.jsx(Xx.Provider,{value:{runTransition:t,setRunTransition:n,transitionDirection:r,setTransitionDirection:i,triggerTransition:o},children:e})},bi=()=>w.useContext(Xx),qx=w.createContext(),g6=({children:e})=>{const[t,n]=w.useState(!1);return v.jsx(qx.Provider,{value:{isPopoverOpen:t,setIsPopoverOpen:n},children:e})},es=()=>{const e=w.useContext(qx);if(e===void 0)throw new Error("usePopover must be used within a PopoverProvider");return e},Ge=({width:e,border:t,onClick:n,color:r,padding:i,backgroundColor:o,invertedColors:s,small:a,label:l,previous:u,next:c,cleaning:f,showCopyAlert:d,copyMessage:m,showViewSwitch:y,animationY:x})=>v.jsxs(v6,{children:[v.jsx(C6,{onClick:n,color:r,backgroundColor:o,padding:i,cleaning:f,width:e,border:t,invertedColors:s,small:a,showViewSwitch:y,children:u||c?v.jsxs(v.Fragment,{children:[u&&v.jsxs(v.Fragment,{children:[v.jsx(La,{color:r,backgroundColor:o,invertedColors:s,icon:Yb})," ",l]}),c&&v.jsxs(v.Fragment,{children:[l," ",v.jsx(La,{color:r,backgroundColor:o,invertedColors:s,icon:Hb})]})]}):l}),d&&m&&v.jsx(b6,{color:r,backgroundColor:o,className:"clicked",animationY:x,children:m})]});Ge.propTypes={width:I.string,border:I.bool,onClick:I.func,color:I.string,backgroundColor:I.string,invertedColors:I.bool,shadowColor:I.string,label:I.node,previous:I.bool,next:I.bool,cleaning:I.bool,showCopyAlert:I.bool,copyMessage:I.string};const v6=E.div`
  position: relative;
  display: inline-flex;
`,jg=()=>K`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
`,Rg=()=>K`
  0% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
`,y6=K`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(50%);
  }
`,x6=K`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50%);
  }
`,w6=K`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(50%);
  }
`,S6=K`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50%);
  }
`,k6=K`
  0% {
    left: -100%;
    opacity: 1;
  }
  100% {
    left: 200%;
    opacity: 1;
  }
  `,La=E(Ne)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5em;
  height: 0.5em;
  font-size: 1.5em;
  color: ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
`,C6=E.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${e=>e.width||""};
  border: 1px solid transparent;
  color: ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
  background-color: ${e=>e.invertedColors?e.color:e.backgroundColor||"transparent"};
  border-radius: 10px;
  padding: ${e=>e.padding||"10px"};
  font-size: clamp(15px, 2vw, 20px);
  font-family: "Poiret One";
  font-weight: 600;
  gap: 0.4em;
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  ${e=>il`
    &:hover {
      transform: translateY(-0.3vw);
      animation: ${jg(e.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:not(:hover) {
      animation: ${Rg(e.shadowColor||"var(--dark)")} 0.8s;
      border-color: ${t=>t.border?`1px solid ${t.color}`:t.invertedColors&&t.border?t.backgroundColor:"transparent"};
      background-color: ${t=>t.showViewSwitch?t.color:"transparent"};
    }

    &:focus {
      transform: translateY(-0.3vw);
      animation: ${jg(e.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:focus:not(:hover) {
      transform: translateY(0);
      animation: ${Rg(e.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border-color: ${e.border?e.color:e.invertedColors&&e.border?e.backgroundColor:"transparent"};
    }

    &:active {
      color: ${t=>t.invertedColors?t.color:t.backgroundColor||"transparent"};
      background-color: ${t=>t.invertedColors?t.backgroundColor:t.color||"var(--dark)"};
      transition: color 0.1s, background-color 0.1s;

      ${La} {
        color: ${e.invertedColors?e.color:e.backgroundColor||"var(--dark)"};
      }
    }
  `}

  @media (max-width: 1536px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${e=>e.small?"3rem":e.width?e.width:"auto"};
    height: ${e=>e.small?"3rem":e.height?e.height:"auto"};
    padding: 0.7em;
    text-wrap: nowrap;
    border: 1px solid
      ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    transform: none;
    box-shadow: none;
    animation: none;

    &:hover {
      transform: none;
      animation: none;
      border: 1px solid
        ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:focus {
      transform: none;
      animation: none;
      border: 1px solid
        ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:focus:not(:hover) {
      transform: none;
      animation: none;
      border: 1px solid
        ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:not(:hover) {
      animation: none;
      border: 1px solid
        ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:active {
      color: ${e=>e.invertedColors?e.color:e.backgroundColor||"transparent"};
      background-color: ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
      transition: color 0.1s, background-color 0.1s;

      ${La} {
        color: ${e=>e.invertedColors?e.color:e.backgroundColor||"var(--dark)"};
      }
    }
  }
`,b6=E.div`
  position: absolute;
  left: ${e=>e.animationY?"-2vw":"6vw"};
  top: ${e=>e.animationY?"6rem":"0"};
  margin-left: 1em;
  width: 110px;
  height: 40px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1em;
  font-family: "Lato", sans-serif;
  border-radius: 10px;
  background-color: ${e=>e.backgroundColor};
  color: ${e=>e.color};
  transform: translateX(-50%);
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  overflow: hidden;

  &.clicked {
    animation: ${e=>e.animationY?x6:y6} 2s forwards;

    @media (max-width: 768px) and (min-width: 320px) {
      animation: ${e=>e.animationY?S6:w6} 1.5s forwards;
      width: 100px;
      height: 35px;
      padding: 4px;
      left: ${e=>e.animationY?"-60%":"100%"};
      margin-left: 1em;
      font-size: 1rem;
    }

    &::before {
      content: "";
      position: absolute;
      background-color: #f2f8ffe8;
      top: -100%;
      left: -100%;
      height: 300%;
      width: 50px;
      transform: rotate(30deg);
      animation: ${k6} 0.5s ease-in-out;
      animation-delay: 0.3s;
    }
  }
`;function P6({title:e,shadowColor:t,isOpen:n}){const{card:r}=xt(),i=Wo(),{isPopoverOpen:o}=es(),{setRunTransition:s,triggerTransition:a}=bi(),l=window.location.pathname.replace("/My-portfolio/","").replace("/",""),u=r.find(x=>x.path===l)||r[0],c=r.findIndex(x=>x.path===l),f=u.color,d=u.backgroundColor,m=()=>{s(!0),a("previous");const x=(c-1+r.length)%r.length,k=r[x].path,p=setTimeout(()=>{s(!1),i(`/${k}`)},800);return()=>{clearTimeout(p)}},y=()=>{s(!0),a("next");const x=(c+1)%r.length,k=r[x].path,p=setTimeout(()=>{s(!1),i(`/${k}`)},800);return()=>{clearTimeout(p)}};return v.jsxs(T6,{isOpen:n,isPopoverOpen:o,children:[v.jsx(Mg,{className:"navigation-buttons",style:{marginRight:"3em"},children:v.jsx(Ge,{onClick:m,style:{color:f},color:f,shadowColor:t,backgroundColor:d,label:"Previous Project",previous:!0,width:"10em"})}),v.jsx(E6,{children:e}),v.jsx(Mg,{className:"navigation-buttons",children:v.jsx(Ge,{onClick:y,style:{color:f},color:f,shadowColor:t,backgroundColor:d,label:"Next Project",next:!0,width:"10em"})})]})}const T6=E.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  gap: 6em;
  margin-top: 4vh;
  z-index: ${({isPopoverOpen:e})=>e?0:99};
  opacity: ${({isOpen:e,isPopoverOpen:t})=>e||t?0:1};
  visibility: ${({isOpen:e,isPopoverOpen:t})=>e||t?"hidden":"visible"};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 1536px) and (min-width: 769px) {
    margin-top: 5em;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 2em;
    width: 100vw;
    margin-top: 10vh;
    justify-content: flex-start;
    padding-left: 4em;
  }
`,Mg=E.div`
  width: 10em;
`,E6=E.h1`
 font-size: clamp(45px, 5vw, 100px);
 font-family: 'Poiret One';

 @media (max-width: 768px) and (min-width: 320px) {
  margin-top: 1em;
 }


`;Zx.propTypes={descriptions:I.shape({primary:I.string,secondary:I.string,tertiary:I.string,quaternary:I.string}).isRequired,repos:I.array.isRequired,color:I.string.isRequired,backgroundColor:I.string.isRequired,showViewSwitch:I.bool.isRequired,onSwitchView:I.func.isRequired,isSwitchActive:I.bool.isRequired};function Zx({descriptions:e,repos:t,color:n,backgroundColor:r,showViewSwitch:i,onSwitchView:o,isSwitchActive:s}){const a=()=>{if(i){const l=s?t.find(u=>u.browser):t.find(u=>u.native);l&&window.open(s?l.browser:l.native,"_blank")}else window.open(Object.values(t[0])[0],"_blank")};return v.jsxs(A6,{children:[e.primary&&v.jsxs(vu,{children:[e.primary.charAt(0)&&v.jsx("span",{style:{fontSize:"1.25em",fontWeight:"bold"},children:e.primary.charAt(0)}),e.primary.slice(1)]}),e.secondary&&v.jsx(vu,{children:e.secondary}),e.tertiary&&v.jsx(vu,{children:e.tertiary}),v.jsxs(M6,{showViewSwitch:i,children:[v.jsx(j6,{children:v.jsx(R6,{color:n,children:v.jsx(Ge,{color:n,backgroundColor:r,small:!0,onClick:a,label:v.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5em"},children:v.jsx(I6,{children:t[0].icon})})})})}),i&&v.jsx(L6,{children:v.jsx(O6,{children:v.jsx(Ge,{onClick:o,color:n,border:!0,pulse:!0,backgroundColor:r,label:s?"Show Native":"Show Browser",invertedColors:!0,showViewSwitch:i})})})]})]})}const A6=E.div`
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  margin: 2em 0;
  width: 30vw;

  @media (max-width: 1536px) and (min-width: 769px) {
    margin: 0;
    gap: 0.8em;
    margin-top: 2em;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    align-items: center;
    justify-content: center;
    margin: 0 3em;
    width: 75vw;
  }
`,vu=E.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1em;
    line-height: 1.5;
  }
`,j6=E.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 90;
`,R6=E.div`
  display: flex;
  flex-direction: row;
  height: 3em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  padding: 1em 0;
  border-radius: 15px;

  @media (max-width: 1536px) and (min-width: 769px) {
    padding: 0.3em;
    margin-top: 0;
    height: 2.5em;
    gap: 1em;
    border-width: 3px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    padding: 1em;
    border: none;
  }
`,M6=E.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
  min-height: 3em;
  /* border: 1px solid red; */

  @media (max-width: 1536px) and (min-width: 768px) {
    width: 35vw;
    margin-top: 5px;
    justify-content: flex-start;
    min-height: 2.5em;
    gap: 1em;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 2em;
  }
`,I6=E.div`
  display: flex;
  align-items: center;
  transform: translateZ(0);
  will-change: transform;
  max-width: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    font-size: 0.9rem;
  }

  svg {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`,L6=E.div`
  z-index: 90;

  @media (max-width: 768px) and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 90;
    height: 3em;
    width: 100%;
  }
`,O6=E.div`
  display: flex;
  justify-content: flex-start;
  z-index: 90;
  height: 3em;
  min-width: 160px;

  & > button {
    width: 100%;
    min-width: 160px;
    height: 100%;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    min-width: 20%;
    justify-content: center;
    font-size: 0.8em;
  }
`;function N6({color:e,images:t,scrollProgress:n,isNative:r,doubleRepo:i,isSwitchActive:o}){return v.jsx(_6,{isNative:r,isSwitchActive:o,doubleRepo:i,children:v.jsx(z6,{children:t.map((s,a)=>{const l=a/t.length,u=(a+1)/t.length,c=.1/t.length,f=Hi(n,[l-c,l+c,u-c,u+c],a===0?[1,1,1,.2]:a===t.length-1?[.1,1,1,1]:[.1,1,1,.2]),d=nf(f,{stiffness:30,damping:12,mass:1.5,restDelta:1e-5});return v.jsx($6,{as:me.div,color:e,style:{opacity:d}},a)})})},o)}const D6=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,_6=E.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  bottom: 10vh;
  right: ${e=>e.doubleRepo?e.isSwitchActive?"5vw":"12vw":e.isNative?"12vw":"5vw"};
  z-index: 100;
  opacity: 0;
  animation: ${D6} 0.5s ease-in-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 1536px) and (min-width: 769px) {
    bottom: 0;
    right: ${e=>e.isNative?"5vw":"4vw"};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`,z6=E.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$6=E.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${e=>e.color};
  position: relative;
  overflow: hidden;
`,F6=({image:e,images:t=[],onClose:n,color:r,backgroundColor:i,invertedColors:o,doubleRepo:s,shadowColor:a,isNative:l})=>{const{setIsPopoverOpen:u}=es(),[c,f]=w.useState(t.indexOf(e)),[d,m]=w.useState(0);w.useEffect(()=>{t.indexOf(e)===-1?f(0):f(t.indexOf(e))},[e,t]),w.useEffect(()=>(u(!!e),()=>u(!1)),[e,u]);const y=()=>{m(1),f(h=>(h+1)%t.length)},x=()=>{m(-1),f(h=>(h-1+t.length)%t.length)},k=t[c],p={enter:h=>({x:h>0?300:-300,opacity:0,scale:.98,filter:"blur(4px)"}),center:{zIndex:1,x:0,opacity:1,scale:1,filter:"blur(0px)"},exit:h=>({zIndex:0,x:h<0?300:-300,opacity:0,scale:.98,filter:"blur(4px)"})};return v.jsx(zc,{children:e&&v.jsx(V6,{as:me.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n,children:v.jsxs(B6,{isNative:l,as:me.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onClick:h=>h.stopPropagation(),children:[v.jsxs(H6,{isNative:l,children:[v.jsx(U6,{isNative:l,children:v.jsx(zc,{mode:"wait",custom:d,initial:!1,children:v.jsx(W6,{as:me.img,src:k.src,alt:k.alt||"Image",custom:d,variants:p,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:200,damping:18,mass:.4,restSpeed:.5},opacity:{duration:.2,ease:"easeInOut"},scale:{duration:.2,ease:"easeOut"},filter:{duration:.15,ease:"easeOut"}},onClick:n,isNative:l,backgroundColor:i},k.src)})}),v.jsx(Y6,{isNative:l,children:v.jsx(Ge,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:n,label:"X",padding:".7em",border:!0,hasIcon:!0,small:!0})})]}),v.jsxs(G6,{isNative:l,children:[v.jsx(Ge,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:x,width:"7em",label:"Previous",border:!0,title:!0,hasIcon:!0,previous:!0}),v.jsx(Ge,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:y,label:"Next ",width:"7em",border:!0,title:!0,hasIcon:!0,next:!0})]})]})})})},V6=E(me.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;  
  isolation: isolate; 


  @media (max-width: 768px) and (min-width: 320px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    align-items: flex-start;
    position: absolute;
    overflow-y: auto;
    padding: 1em 0;
  }
`,B6=E(me.div)`
  position: relative; 
  z-index: 10000; 
  border-radius: 10px;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    height: auto;
    width: auto;
    margin-left: ${e=>e.isNative?"23vw":"8vw"};

  }

  @media (max-width: 768px) and (orientation: landscape) {
    gap: 1em;
    min-height: 100vh;
    justify-content: center;
  }
`,U6=E.div`
  width: ${e=>e.isNative?"25%":"100%"};
  height: ${e=>e.isNative?"80vh":"700px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${e=>e.backgroundColor};
  position: relative;

  @media (max-width: 1536px) and (min-width: 768px) {
    width: ${e=>e.isNative?"20%":"80%"};
    height: ${e=>e.isNative?"80vh":"600px"};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${e=>e.isNative?"55vw":"85vw"};
    height: ${e=>e.isNative?"auto":"60vh"};
    max-height: 70vh;

  }

  @media (max-width: 768px) and (orientation: landscape) {
    width: 85vw;
    height: 70vh;
    margin: 0 auto;
  }
`,W6=E(me.img)`
  width: ${e=>e.isNative?"70%":"auto"};
  height: ${e=>e.isNative?"auto":"100%"};
  max-height: 100%;
  object-fit: cover;
  background-color: ${e=>e.backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  @media (max-width: 1536px) and (min-width: 769px) {
    width: ${e=>e.isNative?"80%":"100%"};
    height: ${e=>e.isNative?"auto":"100%"};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${e=>(e.isNative,"100%")};
    height: auto;
    max-height: ${e=>e.isNative?"70vh":"60vh"};
    min-height: 200px;
    display: block;
    position: relative;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    width: auto;
    height: auto;
    max-width: 70vw;
  }
`,H6=E.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  position: relative;
`,Y6=E.div`
  position: absolute;
  height: 100vh;
  margin-top: 0;
  z-index: 135;
  top: 1vw;
  right: ${e=>e.isNative?"5vw":"3vw"};

  @media (max-width: 768px) and (min-width: 320px) {
    top: ${e=>e.isNative?"2em":(e.doubleRepo,"-5em")};
    right: ${e=>e.isNative?"-4em":"1.9em"};
  }
`,G6=E.div`
  display: flex;
  justify-content: center;
  gap: 4em;
  height: 4em;
  width: 100%;
  margin-top: auto;
  padding-bottom: 2em;

  @media (max-width: 768px) and (min-width: 320px) {
    left: 20px;

  }
`;function rf({images:e=[],backgroundColor:t,color:n,invertedColors:r,isNative:i,doubleRepo:o,isSwitchActive:s,textColor:a}){const l=w.useRef(null),[u,c]=w.useState(0),[f,d]=w.useState(null),[m,y]=w.useState(null),[x,k]=w.useState(!1),{scrollYProgress:p}=Pg({container:l,offset:["start start","end end"]});w.useEffect(()=>{const S=new eh({wrapper:l.current,content:l.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});y(S);function b(P){S.raf(P),requestAnimationFrame(b)}return requestAnimationFrame(b),()=>{S.destroy()}},[]);const h=(S,b)=>{const P=b===0?.1:.3;S>(b===0?.3:.5)?c(b):S<P&&b>0&&c(b-1)};if(!e||e.length===0)return null;const g=S=>{d(S),m==null||m.stop()},C=()=>{d(null),m==null||m.start()};return w.useEffect(()=>{var P;const S=()=>{var T;!x&&((T=l.current)==null?void 0:T.scrollTop)>20&&k(!0)};if(window.innerWidth<=768&&window.innerWidth>=321)return(P=l.current)==null||P.addEventListener("scroll",S),()=>{var T;return(T=l.current)==null?void 0:T.removeEventListener("scroll",S)}},[x]),v.jsxs(K6,{ref:l,isNative:i,doubleRepo:o,children:[window.innerWidth<=768&&window.innerWidth>=321&&!x&&v.jsx(eA,{color:n}),e.map((S,b)=>{const P=w.useRef(null),{scrollYProgress:T}=Pg({target:P,container:l,offset:["start 60%","center center"],default:0}),_=Hi(p||0,[0,1],[1,1-(e.length-b)*.05]),R=Hi(p||0,[0,1],[0,-((e.length-b)*15)]);y4(T,"change",j=>{h(j,b)});const F=Hi(T,[0,.5,1],[0,1,1]),ge=Hi(T,[0,.5,1],[1.5,1,1]),Ke=nf(F,{stiffness:100,damping:20}),lt=nf(ge,{stiffness:100,damping:20}),Xe=S.src||S,Qe=S.alt||`Image ${b+1}`,B=(j,O,N)=>{const G=75/(O-1),X=15+j*G,qe=Math.min(X,90);return`color-mix(in srgb, ${N} ${qe}%, black)`};return v.jsxs(X6,{onClick:()=>g(S),ref:P,isFirst:b===0,isLast:b===e.length-1,isNative:i,textColor:a,style:{backgroundColor:B(b,e.length,r?n:t),color:r?t:n,top:i?`${b*10}px`:`${b*10}px`,marginBottom:b===e.length-1?"40vh":"0",scale:_,y:R},children:[v.jsx(Q6,{children:v.jsx(q6,{children:S.info})}),v.jsx(Z6,{isNative:i,children:v.jsx(J6,{src:Xe,alt:Qe,style:{opacity:Ke,scale:lt}})})]},S.id||b)}),v.jsx(F6,{image:f,images:e,onClose:C,color:n,backgroundColor:t,invertedColors:r,isNative:i,doubleRepo:o}),v.jsx(N6,{color:n,images:e,scrollProgress:p,isNative:i,doubleRepo:o,isSwitchActive:s})]})}const K6=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  right: ${e=>e.isNative?"3vw":"10vw"};
  padding: 40px;

  @media (max-width: 768px) and (min-width: 320px) {
    right: 3vw;
    padding-top: 40px;
    margin-top: 5vh;
    height: ${e=>e.doubleRepo?"100%":"auto"}; 
    overflow-y: ${e=>(e.doubleRepo,"scroll")}; 
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    
    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
`,X6=E(me.div)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: 0;
  left: 50vw;
  margin-top: ${e=>e.isFirst?"0":"80vh"};
  min-height: ${e=>e.isNative?"450px":"360px"};
  width: ${e=>e.isNative?"25vw":"40vw"};
  padding: 30px 20px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${e=>e.backgroundColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    gap: ${e=>e.isNative?"0":"1em"};
    width: ${e=>e.isNative?"30vw":"40vw"};
    min-height: ${e=>e.isNative?"330px":"300px"};
    padding:  20px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${e=>e.isNative?"60vw":"72vw"};
    left: ${e=>e.isNative?"25vw":"15vw"};
    margin-left: 1em;
    flex-direction: column-reverse;
    gap: 0;
    padding: 20px;
  }

`,Q6=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-size: 1rem;
  margin: 0 0 10px 30px;
  left: 20px;

  @media (max-width: 1536px) and (min-width: 769px) {
    margin: 0 0 10px 10px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 0 0 10px 10px;
    width: 90%;
  }
`,q6=E.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;   


  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 1rem;
  }
`,Z6=E.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.isNative?"60%":"100%"};
  height: ${e=>e.isNative?"400px":"300px"};
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1536px) and (min-width: 769px) {
    height: ${e=>e.isNative?"300px":"250px"};
    width: ${e=>e.isNative?"80%":"100%"};
    margin-top: ${e=>e.isNative?"0":"5px"};
  }

 @media (max-width: 768px) and (min-width: 320px) {
  width: 100%;
}
`,J6=E(me.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`,eA=E.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 105;
  pointer-events: none;
  opacity: 0.8;
  width: 15px;
  height: 15px;
  border-right: 2px solid ${e=>e.color||"var(--dark)"};
  border-bottom: 2px solid ${e=>e.color||"var(--dark)"};
  transform: rotate(45deg);
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: rotate(45deg) translate(-3px, -3px);
    }
    50% {
      transform: rotate(45deg) translate(0, 0);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`,tA=({nativeImages:e,browserImages:t,backgroundColor:n,color:r,invertedColors:i,doubleRepo:o,isSwitchActive:s})=>{const a={nativeView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:"-100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}}},l={nativeView:{x:"100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},hidden:{x:"100%",opacity:0}};return v.jsx(nA,{children:v.jsxs(rA,{children:[v.jsx(Ig,{variants:a,animate:s?"browserView":"nativeView",initial:"nativeView",children:v.jsx(rf,{images:e,backgroundColor:n,color:r,invertedColors:i,isNative:!0,isSwitchActive:s,doubleRepo:o})}),v.jsx(Ig,{variants:l,animate:s?"browserView":"nativeView",initial:"hidden",isSwitchActive:s,style:{position:"absolute",width:"100%",height:"100%",right:s?"5em":"0"},children:v.jsx(rf,{images:t,backgroundColor:n,color:r,invertedColors:i,isNative:!1,isSwitchActive:s,doubleRepo:o})})]})})},nA=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 1vh;
`,Ig=E(me.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  right: ${e=>e.isSwitchActive?"5em":"0"};

  @media (max-width: 768px) and (min-width: 320px) {
    right: ${e=>e.isSwitchActive?"0":"3em"};
    left: -2.5em;
  }
`,rA=E.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15vh);
  overflow: hidden;
`;function ts({title:e,descriptions:t,repos:n,nativeImages:r=[],browserImages:i=[],isNative:o,isBrowser:s,invertedColors:a,textColor:l,isOpen:u}){const[c,f]=w.useState(!1),[d,m]=w.useState(!1),[y,x]=w.useState(null),[k,p]=w.useState(null),[h,g]=w.useState(!1),{card:C}=xt(),S=Wo(),{setRunTransition:b,triggerTransition:P}=bi(),{isPopoverOpen:T}=es(),_=window.location.pathname.replace("/My-portfolio/","").replace("/",""),R=C.find(ce=>ce.path===_)||C[0],F=R.color,ge=R.backgroundColor,Ke=R.shadow,lt=50,Xe=w.useRef(null),Qe=w.useRef(null),[B,j]=w.useState(null);w.useEffect(()=>{f(o&&s)},[o,s]),w.useEffect(()=>{if(window.matchMedia("(max-width: 768px)").matches&&Xe.current){let re=function(cn){we.raf(cn),requestAnimationFrame(re)};const we=new eh({wrapper:Xe.current,content:Qe.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return j(we),requestAnimationFrame(re),()=>{we.destroy()}}},[]),w.useEffect(()=>{const ce=()=>{Xe.current&&g(Xe.current.scrollTop>300)},re=Xe.current;return re&&re.addEventListener("scroll",ce),()=>{re&&re.removeEventListener("scroll",ce)}},[]);const O=()=>{m(!d)},N=()=>{if(!y||!k)return;const ce=y-k,re=ce>lt,we=ce<-lt,cn=C.findIndex(Mt=>Mt.path===_);if(re){b(!0),P("next");const Mt=(cn+1)%C.length,ut=C[Mt].path,vl=setTimeout(()=>{b(!1),S(`/${ut}`)},800);return()=>clearTimeout(vl)}if(we){b(!0),P("previous");const Mt=(cn-1+C.length)%C.length,ut=C[Mt].path,vl=setTimeout(()=>{b(!1),S(`/${ut}`)},800);return()=>clearTimeout(vl)}},G=ce=>{p(null),x(ce.touches[0].clientX)},X=ce=>{p(ce.touches[0].clientX)},qe=()=>{N()},Oe=()=>{B&&B.scrollTo(0)};return v.jsxs(oA,{ref:Xe,backgroundColor:ge,onTouchStart:G,onTouchMove:X,onTouchEnd:qe,children:[v.jsxs(sA,{ref:Qe,color:F,children:[v.jsx(lA,{backgroundColor:ge,isPopoverOpen:T,children:v.jsx(P6,{title:e,shadowColor:Ke,isOpen:u})}),v.jsxs(aA,{children:[v.jsx(Zx,{descriptions:t,repos:n,color:F,backgroundColor:ge,showViewSwitch:o&&s,onSwitchView:O,isSwitchActive:d}),v.jsx(cA,{children:o&&s?v.jsx(uA,{children:v.jsx(tA,{nativeImages:r,browserImages:i,backgroundColor:ge,color:F,textColor:l,invertedColors:a,doubleRepo:c,isSwitchActive:d})}):v.jsx(rf,{images:o?r:i,backgroundColor:ge,color:F,textColor:l,invertedColors:a,isNative:o})})]})]}),v.jsx(fA,{onClick:Oe,show:h,color:F,backgroundColor:ge,children:"↑"})]})}const iA=K`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,oA=E.div`
  position: relative;
  display: flex;
  background-color: ${e=>e.backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 0;
    padding: 20px 0;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch; 
  }

`,sA=E.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  animation: ${iA} 0.8s forwards;
  position: relative;
  color: ${e=>e.color};

  @media (max-width: 768px) and (min-width: 320px) {
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding-top: 20px;
    margin: 0;
    gap: 2em;
    overflow-y: visible; 
  }
`,aA=E.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  margin-left: 10vw;
  gap: 2em;
  z-index: 85;
  overflow: hidden;

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    margin-left: 0;
    gap: 0;
    overflow: visible;
  }
`,lA=E.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;

  @media (max-width: 768px) and (min-width: 320px) {
    position: relative;
    z-index: 0;
    .navigation-buttons {
      display: none;
    }
  }
`,uA=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`,cA=E(me.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & > * {
    pointer-events: auto;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: 90vw;
    height: auto;
    min-height: 100vh;
    position: relative;
    overflow: visible;
  }
`,fA=E.button`
  display: none;

  @media (max-width: 768px) and (min-width: 320px) {
    display: ${e=>e.show?"flex":"none"};
    position: fixed;
    bottom: 2em;
    right: 1em;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    border: 2px solid ${e=>e.color};
    background-color: ${e=>e.backgroundColor};
    color: ${e=>e.color};
    font-size: 1.5em;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;function ns(){const{runTransition:e,transitionDirection:t}=bi(),{card:n}=xt(),r=window.location.pathname.replace("/My-portfolio/","").replace("/",""),i=n.findIndex(u=>u.path===r),o=(i-1+n.length)%n.length,s=(i+1)%n.length,a=n[s].backgroundColor,l=n[o].backgroundColor;return v.jsx(v.Fragment,{children:e&&v.jsx(pA,{direction:t,color:t==="next"?a:l})})}const dA=K`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,hA=K`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,pA=E(me.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: ${e=>e.color};
  animation: ${e=>e.direction==="next"?dA:hA} 0.7s ease-in-out forwards;
`;function mA(){const{card:e}=xt(),t=e.find(s=>s.path==="chatapp"),[n,r]=w.useState(!0),[i,o]=w.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsx(ts,{title:t.title,descriptions:t.descriptions,repos:t.repos,nativeImages:t.images.nativeImage,isNative:n,isBrowser:i,previousPage:!0,nextPage:!0}),v.jsx(ns,{})]})}function gA(){const{runTransition:e}=bi(),{card:t}=xt(),n=t.find(o=>o.path==="webbshop"),[r,i]=w.useState(!0);return v.jsxs(v.Fragment,{children:[v.jsx(ts,{title:n.title,descriptions:n.descriptions,browserImages:n.images.browserImage,repos:n.repos,isBrowser:r}),e===!0?v.jsx(ns,{}):""]})}function vA(){const{runTransition:e}=bi(),{card:t}=xt(),n=t.find(r=>r.path==="movieapp");return v.jsxs(v.Fragment,{children:[v.jsx(ts,{title:n.title,descriptions:n.descriptions,repos:n.repos,nativeImages:n.images.nativeImage,browserImages:n.images.browserImage,isNative:!0,isBrowser:!0}),e===!0?v.jsx(ns,{}):""]})}function yA(){const{card:e}=xt(),t=e.find(n=>n.path==="cleaning");return v.jsxs(v.Fragment,{children:[v.jsx(ts,{title:t.title,descriptions:t.descriptions,repos:t.repos,browserImages:t.images.browserImage,invertedColors:!0}),v.jsx(ns,{})]})}function xA(){const{main:e}=xt(),t=w.useRef(null),n=w.useRef(null),[r,i]=w.useState(null),[o,s]=w.useState(0),[a,l]=w.useState("");w.useState(!1),w.useEffect(()=>{if(window.matchMedia("(max-width: 768px) and (min-width: 320px)").matches){let d=function(y){m.raf(y),requestAnimationFrame(d)};const m=new eh({duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return i(m),requestAnimationFrame(d),()=>{m.destroy()}}},[]),w.useEffect(()=>{const f=setInterval(()=>{s(d=>d===Object.keys(e.images).length-1?0:d+1)},3e3);return()=>clearInterval(f)},[e.images]);const u=f=>{Object.keys(f)[0]==="email"?(l("Email copied!"),navigator.clipboard.writeText("emil.stjernlof@gmail.com"),setTimeout(()=>{l("")},3e3)):Object.keys(f)[0]==="browser"?window.open(f.browser,"_blank"):Object.keys(f)[0]==="linkedin"&&window.open(f.linkedin,"_blank")},c=f=>{f.song&&window.open(f.song,"_blank")};return v.jsx(kA,{ref:t,children:v.jsxs(CA,{ref:n,children:[v.jsxs(bA,{children:[v.jsx("h2",{children:e.title}),v.jsx(Ts,{delay:"0.2s",children:v.jsx("p",{children:e.descriptions.primary})}),v.jsx(Ts,{delay:"0.3s",children:v.jsx("p",{children:e.descriptions.secondary})}),v.jsx(Ts,{delay:"0.4s",children:v.jsx("p",{children:e.descriptions.tertiary})}),v.jsx(Ts,{delay:"0.5s",children:v.jsx("p",{children:e.descriptions.quaternary})})]}),v.jsxs(PA,{children:[v.jsxs(TA,{children:[v.jsx(EA,{children:Object.values(e.images).map((f,d)=>v.jsx(AA,{src:f,alt:`profile picture ${d+1}`,active:d===o},f))}),v.jsxs(jA,{children:[v.jsx(RA,{children:v.jsx(MA,{children:"What's in my headphones?"})}),e.music.map((f,d)=>v.jsx(IA,{children:v.jsx(LA,{children:v.jsx(Ge,{color:e.color,backgroundColor:e.backgroundColor,onClick:()=>c(f),width:"100%",height:"100%",border:!0,label:v.jsxs(Lg,{children:[e.musicIcon,v.jsx(OA,{children:v.jsxs(NA,{shouldScroll:f.songtitle.length>10,duration:`${f.songtitle.length*.6}s`,children:[f.songtitle," "]})})]})},d)})},d))]})]}),v.jsx(DA,{children:e.repos.map((f,d)=>v.jsx(_A,{children:v.jsx(Ge,{color:e.color,backgroundColor:e.backgroundColor,onClick:()=>u(f),label:v.jsx(Lg,{children:f.icon}),showCopyAlert:Object.keys(f)[0]==="email"&&a,copyMessage:a,small:!0})},d))})]})]})})}const Jx=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ew=K`
  from {
    transform: translateY(5%);
  }
  to {
    transform: translateY(0);
  }
`,wA=K`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,SA=K`
  0% { 
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  5% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  45% { 
    transform: translateX(-50%);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  50% {
    transform: translateX(-50%);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  85% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  95% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  100% { 
    transform: translateX(0);
  }
`,kA=E.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  @media (max-width: 1536px) and (min-width: 768px) {
    height: auto;
    margin-top: 5vh;
    overflow-y: hidden;
    padding-left: 10vw;
    align-items: flex-start;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    height: auto;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    padding: 2vh 0;
  }
`,CA=E.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: white;
  animation: ${Jx} 2s, ${ew} 1s;
  margin: 5vh;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 80%;
    flex-direction: column;
    gap: 0;
    margin: 10vh 0 4vh 0;
    height: auto;
  }
`,bA=E.div`
  font-weight: 500;
  font-size: 1.1rem;
  font-family: "Lato", sans-serif;
  margin-right: 6vw;
  max-height: 600px;
  max-width: 500px;
  min-width: 320px;

  @media (max-width: 1536px) and (min-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    margin-right: 0;
    margin-bottom: 4vh;
    max-width: 100%;
  }
`,Ts=E.div`
  margin: 1em 0;
  font-size: clamp(1rem, calc(0.1vw + .5rem), 13rem);

  p {
    opacity: 0;
    animation: ${wA} 1s forwards;
    animation-delay: ${e=>e.delay||"0s"};
    margin: 0;
  }



  @media (max-width: 768px) and (min-width: 320px) {
    max-height: 70%;
  }
`,PA=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 20em;
  margin-top: 12vh;

  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 100%;
    align-items: center;
    margin-top: 0;
  }
`,TA=E.div`
  display: flex;
  gap: 3em;
  padding: 1em;

  @media (max-width: 1536px) and (min-width: 768px) {
    padding: 0;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    gap: 2em;
  }
`,EA=E.div`
  position: relative;
  width: 320px;
  height: 25em;
  overflow: hidden;
  border-radius: 5%;

  @media (max-width: 1536px) {
    height: 22em;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 320px;
    height: 25em;
    margin: 0;
  }
`,AA=E.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
  opacity: ${e=>e.active?1:0};
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) and (min-width: 320px) {
    position: absolute;
    border-radius: 5%;
  }
`,jA=E.div`
  width: 280px;
  border-radius: 15px;
  padding: .5em 1em;
 

  @media (max-width: 768px) and (min-width: 320px) {
    width: 320px;
  }
`,RA=E.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1em 0;

  @media (max-width: 1536px) and (min-width: 768px) {
    padding: 0;
  }
`,MA=E.h4`
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  padding: 0 0 0.5em 0;
  width: 80%;

  @media (max-width: 1536px) and (min-width: 768px) {
    padding: 0;
  }
`,IA=E.div`
  margin: 1.5em auto;
  width: calc(100% - 2em);
  overflow: visible;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 1em auto;
    width: 90%;
    height: 35px;
  }
`,LA=E.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`,OA=E.div`
  overflow: hidden;
  width: 150px;
  position: relative;
  margin-left: 0.5em;
  height: 1.2em;
  display: flex;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 0 0 0 0.5em;
    width: 120px;
  }
`,NA=E.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.2em;
  font-family: "Lato", sans-serif;
  ${e=>e.shouldScroll&&il`
      animation: ${SA} ${t=>t.duration||"8s"} infinite;
      padding-right: 2em;
    `}

  &:hover {
    animation-play-state: paused;
  }
`,DA=E.div`
  display: flex;
  height: 5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
  opacity: 0;
  animation: ${Jx} 2s forwards, ${ew} 1s forwards;
  animation-delay: 0.7s;

  @media (max-width: 1536px) and (min-width: 768px) {
    margin-top: 0;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    justify-content: center;
    margin: 2em 0;
    padding-bottom: 2em;
    gap: 1em;
  }
`,_A=E.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
  `,Lg=E.div`
  display: flex;
  align-items: center;
  transform: translateZ(0);
  will-change: transform;
  max-width: 100%;
  
  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    font-size: 0.9rem;
  }

  svg {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;function zA({about:e,setIsHoverButton:t}){const[n,r]=w.useState("");w.useState(!1);const[i,o]=w.useState(!1),[s,a]=w.useState(!1),[l,u]=w.useState(""),[c,f]=w.useState(!1),{card:d,main:m}=xt(),y=Wo(),{isPopoverOpen:x}=es(),k=window.location.pathname.replace("/My-portfolio/","").replace("/",""),p=d.find(P=>P.path===k)||d[0];let h=p.color,g=p.backgroundColor,C=p.shadow;(k==="about"||k==="")&&(h=m.backgroundColor,g=m.color,C=m.shadow);const S=Uo();w.useEffect(()=>{f(!0);const P=setTimeout(()=>{r("")},3e3);return()=>clearTimeout(P)},[n]),w.useEffect(()=>{f(!1);const P=setTimeout(()=>{f(!0)},100);return()=>clearTimeout(P)},[S.pathname]);const b=(P,T)=>{o(!0),a(!0),u(T);const _=setTimeout(()=>{o(!1),y(P),a(!1)},800);return()=>{clearTimeout(_)}};return v.jsxs(v.Fragment,{children:[s&&v.jsx(BA,{color:i?l:""}),v.jsx(VA,{isPopoverOpen:x,path:k,color:h,backgroundColor:g,shadow:C,fadeIn:c,about:e,children:v.jsx(Ge,{color:h,backgroundColor:g,invertedColors:e,onClick:()=>b("/","white"),label:"Home"})})]})}const $A=K`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 1;
  }
`,FA=K`
  0% {
    transform: translate(50%, 50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%) scale(300);
    opacity: 1;
  }
`,VA=E.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5vh;
  padding: 3vh 2vw;
  z-index: 102;
  opacity: ${e=>e.isPopoverOpen?0:1};
  visibility: ${e=>e.isPopoverOpen?"hidden":"visible"};
  transition: opacity 0.3s, visibility 0.3s;
  background-color: ${e=>e.about?"var(--dark)":e.backgroundColor};

  &::after {
    bottom: -30px;
    height: 30px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    background-color: ${e=>e.about?"var(--dark)":e.backgroundColor};
    align-items: center;
    justify-content: flex-start;
    z-index: 102;
    padding: 4vh 9vw;
  }
`;E.div`
  position: relative;
  display: flex;
  min-width: 5vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    &.active {
      background-color: var(--dark);
      color: #fff;
      border-radius: 10px;
    }
  }
`;const BA=E.div`
  position: absolute;
  width: 70%;
  height: 80%;
  right: 60%;
  bottom: 55%;
  border-radius: 50%;
  background-color: ${e=>e.color};
  animation: ${$A} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 9999;
  opacity: 1;

  @media (max-width: 768px) and (min-width: 320px) {
    position: fixed;
    width: 20px;
    height: 20px;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    animation: ${FA} 1s ease-in-out forwards;
  }
`;function UA(){const{card:e}=xt(),t=e.find(n=>n.path==="dashboard");return v.jsxs(v.Fragment,{children:[v.jsx(ts,{title:t.title,descriptions:t.descriptions,repos:t.repos,browserImages:t.images.browserImage,isBrowser:!0,invertedColors:!1}),v.jsx(ns,{})]})}const WA=()=>v.jsx(HA,{children:v.jsx(YA,{children:"ES"})}),HA=E.div`
  display: flex;
  height: 100vh;
  min-width: 90vw;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: auto;
  transition: 1s;

  @starting-style {
    opacity: 0;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 25vh 0 0 5vw;
    align-items: flex-start;
    margin-left: 0;
  }
  `,YA=E.div`
  display: flex;
  width: 320px;
  height: 48vh;
  position: relative;
  overflow: hidden; 
  justify-content: center;
  align-items: center;
  font-size: 360px;
  font-weight: 500;
  text-align: center;
  color: white;
  font-family: "Poiret One", sans-serif;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
  padding: 0 1vw;
  z-index: 999;
  border: 3px solid var(--dark);
  border-radius: 15px;
  transform: translate(0, 0);
  transition: 0.5s 1.2s;
  box-shadow: 1rem 1rem var(--dark);

  @media (max-width: 768px) and (min-width: 374px) {
    width: 180px;
    height: 30vh;
    font-size: 200px;
    box-shadow: 1rem 1rem var(--dark);
  }

  @starting-style {
    transform: translate(0.5rem, 0.5rem);
    box-shadow: 0 0 0 var(--dark);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #f7f7f7e8;
    right: 500px;
    left: 140%;
    height: 40vw;
    width: 10vw;
    transform: skewX(-30deg);
    opacity: 1; 
    transition: 0.6s 0.5s; 

    @media (max-width: 768px) and (min-width: 374px) {
      height: 60vw;
      width: 18vw;
    }

    @starting-style {
      left: -22vw;
    }
  }

  &:after {
    width: 3vw;
    
    @media (max-width: 768px) and (min-width: 374px) {
      width: 5vw;
    }
  }

  @starting-style {
    box-shadow: 0 0 0 var(--dark);
  }
`,GA=()=>{const[e,t]=w.useState({x:null,y:null}),n=r=>{t({x:r.clientX,y:r.clientY})};return w.useEffect(()=>(window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)),[]),e},KA=({isHoverButton:e,isHoveringCards:t,cursorColor:n,cursorHoverColor:r,isOpen:i,backgroundColor:o})=>{const[s,a]=w.useState(!1),[l,u]=w.useState(!1),{x:c,y:f}=GA();let d,m,y;switch(!0){case t:d=80,m=window.innerWidth<=1536?10:-40,y=-40;break;case l:d=15,m=window.innerWidth<=1536?50:-10,y=-8;break;case e:d=40,m=-20,y=-20;break;case s:d=130,m=window.innerWidth<=1536?0:-60,y=-60;break;default:d=35,m=window.innerWidth<=1536?-(d/-1):-(d/2),y=-(d/2)}const x="Frontend developer in development";return w.useEffect(()=>{const k=()=>u(!0),p=()=>u(!1);return window.addEventListener("mousedown",k),window.addEventListener("mouseup",p),()=>{window.removeEventListener("mousedown",k),window.removeEventListener("mouseup",p)}},[]),v.jsx(v.Fragment,{children:v.jsx(XA,{children:v.jsx(QA,{animate:{WebkitMaskPosition:`${c-d-m}px ${f-d-y}px`,WebkitMaskSize:`${d}px`,backgroundColor:i&&c>window.innerWidth-240?o:t&&l||t?r:n},transition:{type:"tween",ease:"backOut",duration:.2,x:{type:"tween",ease:"backOut",duration:.2},y:{type:"tween",ease:"backOut",duration:.2},width:{type:"tween",ease:"backOut",duration:.4},height:{type:"tween",ease:"backOut",duration:.4}},style:{paddingRight:"4em",paddingTop:"8em"},isOpen:i,cursorColor:n,backgroundColor:o,children:location.pathname==="/My-portfolio/"&&!i&&v.jsx(qA,{onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)},style:{margin:"0"},children:x})})})})},XA=E.div`
    position: absolute;
    justify-content: flex-end;
    align-items: start;
    width: 100%;
    height: 100vh;
    z-index: 110;
    pointer-events: none;

  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`,QA=E(me.div)`
    font-size: 1.8em;
    font-weight: 600;
    mask-image: url(./mask.svg);
    font-family: "Poiret One", sans-serif;
    mask-repeat: no-repeat;
    mask-size: 40px;
    background: ${({isOpen:e,cursorColor:t,backgroundColor:n,x:r})=>e&&r>window.innerWidth-240?n:t};
    color: white;
    display: flex;
    justify-content: end;
    align-items: start;
    width: 100vw;
    height: 100vh;
    pointer-events: none;

    @media (max-width: 1536px) {
        margin-left: 2.5em;
        font-size: 1.4em;
    }
`,qA=E.h4`
  width: 20em;
  pointer-events: auto; 
  
 `,ZA=({color:e})=>{const t=`M100 0 L201 0 L201 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`,n=`M100 0 L201 0 L201 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`,r={initial:{d:t},enter:{d:n,transition:{duration:.8,ease:[.76,0,.24,1],delay:.2}},exit:{d:t,transition:{duration:.8,ease:[.76,0,.24,1]}}};return v.jsx(JA,{children:v.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 201 100%",preserveAspectRatio:"none",children:v.jsx(me.path,{fill:e,variants:r,initial:"initial",animate:"enter",exit:"exit"})})})},JA=E.div`
  position: absolute;
  top: 0;
  left: -100px;
  width: 101px;
  height: 100%;
  pointer-events: none;
`,ej={initial:{x:"calc(100% + 100px)"},enter:{x:"0",transition:{duration:.8,ease:[.76,0,.24,1]}},exit:{x:"calc(100% + 100px)",transition:{duration:.8,ease:[.76,0,.24,1]}}},Og={initial:{x:80},enter:e=>({x:0,transition:{duration:.8,ease:[.76,0,.24,1],delay:.08*e}}),exit:e=>({x:80,transition:{duration:.8,ease:[.76,0,.24,1],delay:.08*e}})},tj=({color:e,backgroundColor:t,isOpen:n,onNavigate:r})=>{const{main:i}=xt(),[o,s]=w.useState(""),a=l=>{Object.keys(l)[0]==="email"?(s("Email copied!"),navigator.clipboard.writeText("emil.stjernlof@gmail.com"),setTimeout(()=>{s("")},3e3)):Object.keys(l)[0]==="browser"?window.open(l.browser,"_blank"):Object.keys(l)[0]==="linkedin"&&window.open(l.linkedin,"_blank")};return v.jsx(v.Fragment,{children:v.jsx(zc,{mode:"wait",children:n&&v.jsxs(nj,{as:me.div,color:e,backgroundColor:t,initial:"initial",animate:"enter",exit:"exit",variants:ej,children:[v.jsx(ZA,{color:e}),v.jsx(rj,{children:v.jsxs(sj,{children:[v.jsx(me.div,{custom:0,variants:Og,initial:"initial",animate:"enter",exit:"exit",children:v.jsx(Ng,{children:v.jsx(Ge,{label:v.jsx(ij,{children:"ES"}),invertedColors:!0,color:e,backgroundColor:t,onClick:l=>r("/about","var(--dark)",l)})})}),i.repos.map((l,u)=>v.jsx(me.div,{custom:u+1,variants:Og,initial:"initial",animate:"enter",exit:"exit",children:v.jsx(Ng,{children:v.jsx(Ge,{color:e,backgroundColor:t,invertedColors:!0,onClick:()=>a(l),label:v.jsx(oj,{children:l.icon}),showCopyAlert:Object.keys(l)[0]==="email"&&o,copyMessage:o,animationY:!0})})},u))]})})]})})})},nj=E(me.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  width: 15rem;
  height: 100%;
  background-color: ${({color:e})=>e};
  color: ${({backgroundColor:e})=>e};
  z-index: 150;
`,rj=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,Ng=E.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
`,ij=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: clamp(1.8rem, 1.8vw, 2rem);
  font-weight: bold;
  padding-right: 0.1rem;
`,oj=E.div`
  display: flex;
  align-items: center;
  transform: translateZ(0);
  will-change: transform;
  max-width: 100%;
  

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    font-size: 1.4rem;
  }

  svg {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`,sj=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 3rem;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1rem;
    height: 40vh;
    justify-content: space-around;
    align-items: center;
  }
`,br=({color:e,backgroundColor:t,isOpen:n,setIsOpen:r})=>{const i=Uo(),o=Wo(),{isPopoverOpen:s}=es(),[a,l]=w.useState(!1),[u,c]=w.useState(!1),[f,d]=w.useState(""),[m,y]=w.useState({x:0,y:0}),x=()=>{r(!n)};w.useEffect(()=>{const p=h=>{const g=15*parseFloat(getComputedStyle(document.documentElement).fontSize);n&&h.clientX<window.innerWidth-g&&r(!1)};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[n,r]);const k=(p,h,g)=>{y({x:g.clientX,y:g.clientY}),c(!0),l(!0),d(h),r(!1);const C=setTimeout(()=>{c(!1),o(p),l(!1)},1200);return()=>{clearTimeout(C)}};return v.jsxs(v.Fragment,{children:[a&&v.jsx(dj,{color:f,position:m}),v.jsxs(aj,{location:i,isPopoverOpen:s,children:[i.pathname!=="/"&&v.jsx(Ge,{label:"Home",color:e,backgroundColor:t,onClick:p=>k("/","white",p)}),v.jsx(uj,{color:e,backgroundColor:t,isOpen:n,onClick:x}),v.jsx(tj,{color:e,backgroundColor:t,isOpen:n,onNavigate:(p,h,g)=>k(p,h,g)})]})]})},aj=E.div`
  position: fixed;
  display: flex;
  width: calc(100% - 4rem);
  height: 5vh;
  justify-content: ${({location:e})=>e.pathname==="/"?"flex-end":"space-between"};
  align-items: center;
  z-index: ${({isPopoverOpen:e})=>e?0:100};
  padding: 2rem;
  opacity: ${({isPopoverOpen:e})=>e?0:1};
  visibility: ${({isPopoverOpen:e})=>e?"hidden":"visible"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,lj=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,uj=E.button`
  position: fixed;
  background: none;
  border: none;
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({color:e,isOpen:t,backgroundColor:n})=>t?n:e};
  z-index: 1000;
  opacity: 0;
  animation: ${lj} 0.8s ease-in-out forwards ;
  animation-delay: 0.2s;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: ${({isOpen:e,color:t,backgroundColor:n})=>e?t:n};
    transition: transform 0.3s ease-in-out;
    left: 50%;
    transform-origin: center;
  }

  &:before {
    transform: ${({isOpen:e})=>e?"translate(-50%, 0) rotate(45deg)":"translate(-50%, -3px)"};
  }

  &:after {
    transform: ${({isOpen:e})=>e?"translate(-50%, 0) rotate(-45deg)":"translate(-50%, 3px)"};
  }
`,cj=K`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(100);
    opacity: 1;
  }
`,fj=K`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(300);
    opacity: 1;
  }
`,dj=E.div`
  position: fixed;
  width: 100px;
  height: 100px;
  left: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  animation: ${cj} 1.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    forwards;
  z-index: 9999;
  opacity: 1;
  transform-origin: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 20px;
    height: 20px;
    animation: ${fj} 1.2s
      cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }
`;function hj(){const{runTransition:e}=bi(),t=Uo(),[n,r]=w.useState(""),[i,o]=w.useState(!0),[s,a]=w.useState(!1),[l,u]=w.useState(!1),[c,f]=w.useState(""),[d,m]=w.useState(""),[y,x]=w.useState(!0),[k,p]=w.useState(1),[h,g]=w.useState(!1),C="/",S="/cleaning",b="/chatapp",P="/webbshop",T="/movieapp",_="/dashboard";return w.useEffect(()=>{let R="",F="";switch(t.pathname){case C:R="white",F="var(--dark)";break;case S:R="var(--yellowish)",F="var(--dark)";break;case P:R="var(--greenish)",F="var(--bisque)";break;case b:R="var(--light-purple)",F="var(--neon-green)";break;case T:R="var(--darker)",F="var(--redish)";break;case _:R="var(--blueish)",F="var(--light-blueish)";break;case"/about":R="white",F="white";break;default:R=""}p(0),setTimeout(()=>{r(R),p(1),m()},300),f(F)},[t.pathname]),w.useEffect(()=>{const R=setTimeout(()=>o(!1),3200);return()=>clearTimeout(R)},[]),w.useEffect(()=>{e&&(x(!1),setTimeout(()=>x(!0)))},[e]),v.jsx(v.Fragment,{children:i?v.jsx(WA,{}):v.jsx(ul,{children:v.jsxs(g6,{children:[v.jsx(KA,{isHoverButton:l,isHoveringCards:s,cursorColor:c,cursorHoverColor:d,isOpen:h,backgroundColor:n}),v.jsx(pj,{color:n,children:v.jsx(Qx,{children:v.jsx(mj,{children:v.jsxs(vk,{children:[v.jsx(pn,{path:C,element:v.jsxs(Yn,{children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(e6,{setCursorHoverColor:m,setIsHoveringCards:a,isOpen:h})]})}),v.jsx(pn,{path:S,element:v.jsxs(Yn,{className:"scrollCleaning",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(yA,{})]})}),v.jsx(pn,{path:b,element:v.jsxs(Yn,{className:"scrollChatApp",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(mA,{isOpen:h})]})}),v.jsx(pn,{path:P,element:v.jsxs(Yn,{className:"scrollWebbShop",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(gA,{isOpen:h})]})}),v.jsx(pn,{path:T,element:v.jsxs(Yn,{className:"scrollMovies",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(vA,{isOpen:h})]})}),v.jsx(pn,{path:_,element:v.jsxs(Yn,{children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(UA,{isOpen:h})]})}),v.jsx(pn,{path:"/about",element:v.jsxs(Yn,{children:[v.jsx(zA,{path:"/about",about:!0}),v.jsx(xA,{})]})})]})})})})]})})})}const pj=E.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${e=>e.color};
`,mj=E.div`
  flex-grow: 1;
`,Yn=E.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;yu.createRoot(document.getElementById("root")).render(v.jsx(en.StrictMode,{children:v.jsx(xk,{basename:"/My-portfolio/",children:v.jsx(Qx,{children:v.jsx(wC,{children:v.jsx(ul,{children:v.jsx(hj,{router:oy})})})})})}));
