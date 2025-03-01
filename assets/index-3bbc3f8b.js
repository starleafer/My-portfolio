var ew=Object.defineProperty;var tw=(e,t,n)=>t in e?ew(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>(tw(e,typeof t!="symbol"?t+"":t,n),n);function nw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Og(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ng={exports:{}},La={},Dg={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),rw=Symbol.for("react.portal"),iw=Symbol.for("react.fragment"),ow=Symbol.for("react.strict_mode"),sw=Symbol.for("react.profiler"),aw=Symbol.for("react.provider"),lw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),cw=Symbol.for("react.suspense"),fw=Symbol.for("react.memo"),dw=Symbol.for("react.lazy"),Jd=Symbol.iterator;function hw(e){return e===null||typeof e!="object"?null:(e=Jd&&e[Jd]||e["@@iterator"],typeof e=="function"?e:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,$g={};function pi(e,t,n){this.props=e,this.context=t,this.refs=$g,this.updater=n||_g}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fg(){}Fg.prototype=pi.prototype;function nf(e,t,n){this.props=e,this.context=t,this.refs=$g,this.updater=n||_g}var rf=nf.prototype=new Fg;rf.constructor=nf;zg(rf,pi.prototype);rf.isPureReactComponent=!0;var eh=Array.isArray,Vg=Object.prototype.hasOwnProperty,of={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Ug(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Vg.call(t,r)&&!Bg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:e,key:o,ref:s,props:i,_owner:of.current}}function pw(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sf(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function mw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var th=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mw(""+e.key):t.toString(36)}function Ts(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zo:case rw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+gl(s,0):r,eh(i)?(n="",e!=null&&(n=e.replace(th,"$&/")+"/"),Ts(i,t,n,"",function(u){return u})):i!=null&&(sf(i)&&(i=pw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(th,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",eh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+gl(o,a);s+=Ts(o,t,n,l,i)}else if(l=hw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+gl(o,a++),s+=Ts(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ns(e,t,n){if(e==null)return e;var r=[],i=0;return Ts(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Es={transition:null},vw={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Es,ReactCurrentOwner:of};V.Children={map:ns,forEach:function(e,t,n){ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ns(e,function(){t++}),t},toArray:function(e){return ns(e,function(t){return t})||[]},only:function(e){if(!sf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=pi;V.Fragment=iw;V.Profiler=sw;V.PureComponent=nf;V.StrictMode=ow;V.Suspense=cw;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vw;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zg({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=of.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Vg.call(t,l)&&!Bg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zo,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:lw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:aw,_context:e},e.Consumer=e};V.createElement=Ug;V.createFactory=function(e){var t=Ug.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:uw,render:e}};V.isValidElement=sf;V.lazy=function(e){return{$$typeof:dw,_payload:{_status:-1,_result:e},_init:gw}};V.memo=function(e,t){return{$$typeof:fw,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Es.transition;Es.transition={};try{e()}finally{Es.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return $e.current.useCallback(e,t)};V.useContext=function(e){return $e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};V.useEffect=function(e,t){return $e.current.useEffect(e,t)};V.useId=function(){return $e.current.useId()};V.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return $e.current.useMemo(e,t)};V.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};V.useRef=function(e){return $e.current.useRef(e)};V.useState=function(e){return $e.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return $e.current.useTransition()};V.version="18.2.0";Dg.exports=V;var w=Dg.exports;const en=Og(w),yw=nw({__proto__:null,default:en},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=w,ww=Symbol.for("react.element"),Sw=Symbol.for("react.fragment"),kw=Object.prototype.hasOwnProperty,Cw=xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bw={key:!0,ref:!0,__self:!0,__source:!0};function Wg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kw.call(t,r)&&!bw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ww,type:e,key:o,ref:s,props:i,_owner:Cw.current}}La.Fragment=Sw;La.jsx=Wg;La.jsxs=Wg;Ng.exports=La;var v=Ng.exports,gu={},Hg={exports:{}},ot={},Yg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var N=j.length;j.push(O);e:for(;0<N;){var G=N-1>>>1,X=j[G];if(0<i(X,O))j[G]=O,j[N]=X,N=G;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],N=j.pop();if(N!==O){j[0]=N;e:for(var G=0,X=j.length,qe=X>>>1;G<qe;){var Q=2*(G+1)-1,xe=j[Q],me=Q+1,Pe=j[me];if(0>i(xe,N))me<X&&0>i(Pe,xe)?(j[G]=Pe,j[me]=N,G=me):(j[G]=xe,j[Q]=N,G=Q);else if(me<X&&0>i(Pe,N))j[G]=Pe,j[me]=N,G=me;else break e}}return O}function i(j,O){var N=j.sortIndex-O.sortIndex;return N!==0?N:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function C(j){if(x=!1,g(j),!y)if(n(l)!==null)y=!0,Qe(k);else{var O=n(u);O!==null&&U(C,O.startTime-j)}}function k(j,O){y=!1,x&&(x=!1,p(T),T=-1),m=!0;var N=d;try{for(g(O),f=n(l);f!==null&&(!(f.expirationTime>O)||j&&!F());){var G=f.callback;if(typeof G=="function"){f.callback=null,d=f.priorityLevel;var X=G(f.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?f.callback=X:f===n(l)&&r(l),g(O)}else r(l);f=n(l)}if(f!==null)var qe=!0;else{var Q=n(u);Q!==null&&U(C,Q.startTime-O),qe=!1}return qe}finally{f=null,d=N,m=!1}}var b=!1,P=null,T=-1,_=5,R=-1;function F(){return!(e.unstable_now()-R<_)}function Ve(){if(P!==null){var j=e.unstable_now();R=j;var O=!0;try{O=P(!0,j)}finally{O?Be():(b=!1,P=null)}}else b=!1}var Be;if(typeof h=="function")Be=function(){h(Ve)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Wt=je.port2;je.port1.onmessage=Ve,Be=function(){Wt.postMessage(null)}}else Be=function(){S(Ve,0)};function Qe(j){P=j,b||(b=!0,Be())}function U(j,O){T=S(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Qe(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var N=d;d=O;try{return j()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=d;d=j;try{return O()}finally{d=N}},e.unstable_scheduleCallback=function(j,O,N){var G=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?G+N:G):N=G,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,j={id:c++,callback:O,priorityLevel:j,startTime:N,expirationTime:X,sortIndex:-1},N>G?(j.sortIndex=N,t(u,j),n(l)===null&&j===n(u)&&(x?(p(T),T=-1):x=!0,U(C,N-G))):(j.sortIndex=X,t(l,j),y||m||(y=!0,Qe(k))),j},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(j){var O=d;return function(){var N=d;d=O;try{return j.apply(this,arguments)}finally{d=N}}}})(Gg);Yg.exports=Gg;var Pw=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg=w,rt=Pw;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,co={};function xr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(co[e]=t,e=0;e<t.length;e++)Xg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nh={},rh={};function Ew(e){return vu.call(rh,e)?!0:vu.call(nh,e)?!1:Tw.test(e)?rh[e]=!0:(nh[e]=!0,!1)}function Aw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jw(e,t,n,r){if(t===null||typeof t>"u"||Aw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(af,lf);Ae[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(af,lf);Ae[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(af,lf);Ae[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function uf(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jw(t,n,i,r)&&(n=null),r||i===null?Ew(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rs=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),qg=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),ih=Symbol.iterator;function Pi(e){return e===null||typeof e!="object"?null:(e=ih&&e[ih]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,vl;function Ni(e){if(vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var yl=!1;function xl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function Rw(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Pr:return"Portal";case yu:return"Profiler";case cf:return"StrictMode";case xu:return"Suspense";case wu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qg:return(e.displayName||"Context")+".Consumer";case Qg:return(e._context.displayName||"Context")+".Provider";case ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case df:return t=e.displayName||null,t!==null?t:Su(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return Su(e(t))}catch{}}return null}function Mw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(t);case 8:return t===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iw(e){var t=Jg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function is(e){e._valueTracker||(e._valueTracker=Iw(e))}function e0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ku(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function t0(e,t){t=t.checked,t!=null&&uf(e,"checked",t,!1)}function Cu(e,t){t0(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bu(e,t.type,n):t.hasOwnProperty("defaultValue")&&bu(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bu(e,t,n){(t!=="number"||Xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Di=Array.isArray;function Hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Di(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function n0(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function r0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?r0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var os,i0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(os=os||document.createElement("div"),os.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=os.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lw=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){Lw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function o0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function s0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ow=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(e,t){if(t){if(Ow[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function hf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ru=null,Yr=null,Gr=null;function uh(e){if(e=Vo(e)){if(typeof Ru!="function")throw Error(A(280));var t=e.stateNode;t&&(t=za(t),Ru(e.stateNode,e.type,t))}}function a0(e){Yr?Gr?Gr.push(e):Gr=[e]:Yr=e}function l0(){if(Yr){var e=Yr,t=Gr;if(Gr=Yr=null,uh(e),t)for(e=0;e<t.length;e++)uh(t[e])}}function u0(e,t){return e(t)}function c0(){}var wl=!1;function f0(e,t,n){if(wl)return e(t,n);wl=!0;try{return u0(e,t,n)}finally{wl=!1,(Yr!==null||Gr!==null)&&(c0(),l0())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Mu=!1;if(tn)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{Mu=!1}function Nw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Gi=!1,Qs=null,qs=!1,Iu=null,Dw={onError:function(e){Gi=!0,Qs=e}};function _w(e,t,n,r,i,o,s,a,l){Gi=!1,Qs=null,Nw.apply(Dw,arguments)}function zw(e,t,n,r,i,o,s,a,l){if(_w.apply(this,arguments),Gi){if(Gi){var u=Qs;Gi=!1,Qs=null}else throw Error(A(198));qs||(qs=!0,Iu=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ch(e){if(wr(e)!==e)throw Error(A(188))}function $w(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ch(i),e;if(o===r)return ch(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function h0(e){return e=$w(e),e!==null?p0(e):null}function p0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=p0(e);if(t!==null)return t;e=e.sibling}return null}var m0=rt.unstable_scheduleCallback,fh=rt.unstable_cancelCallback,Fw=rt.unstable_shouldYield,Vw=rt.unstable_requestPaint,fe=rt.unstable_now,Bw=rt.unstable_getCurrentPriorityLevel,pf=rt.unstable_ImmediatePriority,g0=rt.unstable_UserBlockingPriority,Zs=rt.unstable_NormalPriority,Uw=rt.unstable_LowPriority,v0=rt.unstable_IdlePriority,Oa=null,zt=null;function Ww(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Oa,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Gw,Hw=Math.log,Yw=Math.LN2;function Gw(e){return e>>>=0,e===0?32:31-(Hw(e)/Yw|0)|0}var ss=64,as=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Js(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_i(a):(o&=s,o!==0&&(r=_i(o)))}else s=n&~i,s!==0?r=_i(s):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Kw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Pt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Kw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function y0(){var e=ss;return ss<<=1,!(ss&4194240)&&(ss=64),e}function Sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function Qw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function mf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function x0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var w0,gf,S0,k0,C0,Ou=!1,ls=[],Tn=null,En=null,An=null,po=new Map,mo=new Map,wn=[],qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Ei(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vo(t),t!==null&&gf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zw(e,t,n,r,i){switch(t){case"focusin":return Tn=Ei(Tn,e,t,n,r,i),!0;case"dragenter":return En=Ei(En,e,t,n,r,i),!0;case"mouseover":return An=Ei(An,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return po.set(o,Ei(po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mo.set(o,Ei(mo.get(o)||null,e,t,n,r,i)),!0}return!1}function b0(e){var t=Zn(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=d0(n),t!==null){e.blockedOn=t,C0(e.priority,function(){S0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function As(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return t=Vo(n),t!==null&&gf(t),e.blockedOn=n,!1;t.shift()}return!0}function hh(e,t,n){As(e)&&n.delete(t)}function Jw(){Ou=!1,Tn!==null&&As(Tn)&&(Tn=null),En!==null&&As(En)&&(En=null),An!==null&&As(An)&&(An=null),po.forEach(hh),mo.forEach(hh)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Ou||(Ou=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Jw)))}function go(e){function t(i){return Ai(i,e)}if(0<ls.length){Ai(ls[0],e);for(var n=1;n<ls.length;n++){var r=ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&Ai(Tn,e),En!==null&&Ai(En,e),An!==null&&Ai(An,e),po.forEach(t),mo.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)b0(n),n.blockedOn===null&&wn.shift()}var Kr=ln.ReactCurrentBatchConfig,ea=!0;function e2(e,t,n,r){var i=Y,o=Kr.transition;Kr.transition=null;try{Y=1,vf(e,t,n,r)}finally{Y=i,Kr.transition=o}}function t2(e,t,n,r){var i=Y,o=Kr.transition;Kr.transition=null;try{Y=4,vf(e,t,n,r)}finally{Y=i,Kr.transition=o}}function vf(e,t,n,r){if(ea){var i=Nu(e,t,n,r);if(i===null)Ml(e,t,r,ta,n),dh(e,r);else if(Zw(i,e,t,n,r))r.stopPropagation();else if(dh(e,r),t&4&&-1<qw.indexOf(e)){for(;i!==null;){var o=Vo(i);if(o!==null&&w0(o),o=Nu(e,t,n,r),o===null&&Ml(e,t,r,ta,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var ta=null;function Nu(e,t,n,r){if(ta=null,e=hf(r),e=Zn(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=d0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ta=e,null}function P0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bw()){case pf:return 1;case g0:return 4;case Zs:case Uw:return 16;case v0:return 536870912;default:return 16}default:return 16}}var kn=null,yf=null,js=null;function T0(){if(js)return js;var e,t=yf,n=t.length,r,i="value"in kn?kn.value:kn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return js=i.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function us(){return!0}function ph(){return!1}function st(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?us:ph,this.isPropagationStopped=ph,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=us)},persist:function(){},isPersistent:us}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=st(mi),Fo=ae({},mi,{view:0,detail:0}),n2=st(Fo),kl,Cl,ji,Na=ae({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(kl=e.screenX-ji.screenX,Cl=e.screenY-ji.screenY):Cl=kl=0,ji=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),mh=st(Na),r2=ae({},Na,{dataTransfer:0}),i2=st(r2),o2=ae({},Fo,{relatedTarget:0}),bl=st(o2),s2=ae({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),a2=st(s2),l2=ae({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u2=st(l2),c2=ae({},mi,{data:0}),gh=st(c2),f2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h2[e])?!!t[e]:!1}function wf(){return p2}var m2=ae({},Fo,{key:function(e){if(e.key){var t=f2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g2=st(m2),v2=ae({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=st(v2),y2=ae({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),x2=st(y2),w2=ae({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S2=st(w2),k2=ae({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C2=st(k2),b2=[9,13,27,32],Sf=tn&&"CompositionEvent"in window,Ki=null;tn&&"documentMode"in document&&(Ki=document.documentMode);var P2=tn&&"TextEvent"in window&&!Ki,E0=tn&&(!Sf||Ki&&8<Ki&&11>=Ki),yh=String.fromCharCode(32),xh=!1;function A0(e,t){switch(e){case"keyup":return b2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function T2(e,t){switch(e){case"compositionend":return j0(t);case"keypress":return t.which!==32?null:(xh=!0,yh);case"textInput":return e=t.data,e===yh&&xh?null:e;default:return null}}function E2(e,t){if(Er)return e==="compositionend"||!Sf&&A0(e,t)?(e=T0(),js=yf=kn=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return E0&&t.locale!=="ko"?null:t.data;default:return null}}var A2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A2[e.type]:t==="textarea"}function R0(e,t,n,r){a0(r),t=na(t,"onChange"),0<t.length&&(n=new xf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xi=null,vo=null;function j2(e){V0(e,0)}function Da(e){var t=Rr(e);if(e0(t))return e}function R2(e,t){if(e==="change")return t}var M0=!1;if(tn){var Pl;if(tn){var Tl="oninput"in document;if(!Tl){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Tl=typeof Sh.oninput=="function"}Pl=Tl}else Pl=!1;M0=Pl&&(!document.documentMode||9<document.documentMode)}function kh(){Xi&&(Xi.detachEvent("onpropertychange",I0),vo=Xi=null)}function I0(e){if(e.propertyName==="value"&&Da(vo)){var t=[];R0(t,vo,e,hf(e)),f0(j2,t)}}function M2(e,t,n){e==="focusin"?(kh(),Xi=t,vo=n,Xi.attachEvent("onpropertychange",I0)):e==="focusout"&&kh()}function I2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(vo)}function L2(e,t){if(e==="click")return Da(t)}function O2(e,t){if(e==="input"||e==="change")return Da(t)}function N2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:N2;function yo(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vu.call(t,i)||!At(e[i],t[i]))return!1}return!0}function Ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bh(e,t){var n=Ch(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ch(n)}}function L0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?L0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function O0(){for(var e=window,t=Xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xs(e.document)}return t}function kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D2(e){var t=O0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bh(n,o);var s=bh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _2=tn&&"documentMode"in document&&11>=document.documentMode,Ar=null,Du=null,Qi=null,_u=!1;function Ph(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||Ar==null||Ar!==Xs(r)||(r=Ar,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&yo(Qi,r)||(Qi=r,r=na(Du,"onSelect"),0<r.length&&(t=new xf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionend:cs("Transition","TransitionEnd")},El={},N0={};tn&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function _a(e){if(El[e])return El[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in N0)return El[e]=t[n];return e}var D0=_a("animationend"),_0=_a("animationiteration"),z0=_a("animationstart"),$0=_a("transitionend"),F0=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){F0.set(e,t),xr(t,[e])}for(var Al=0;Al<Th.length;Al++){var jl=Th[Al],z2=jl.toLowerCase(),$2=jl[0].toUpperCase()+jl.slice(1);Fn(z2,"on"+$2)}Fn(D0,"onAnimationEnd");Fn(_0,"onAnimationIteration");Fn(z0,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn($0,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F2=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function Eh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zw(r,t,void 0,e),e.currentTarget=null}function V0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Eh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Eh(i,a,u),o=l}}}if(qs)throw e=Iu,qs=!1,Iu=null,e}function Z(e,t){var n=t[Bu];n===void 0&&(n=t[Bu]=new Set);var r=e+"__bubble";n.has(r)||(B0(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),B0(n,e,r,t)}var fs="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[fs]){e[fs]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(F2.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fs]||(t[fs]=!0,Rl("selectionchange",!1,t))}}function B0(e,t,n,r){switch(P0(t)){case 1:var i=e2;break;case 4:i=t2;break;default:i=vf}n=i.bind(null,t,n,e),i=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}f0(function(){var u=o,c=hf(n),f=[];e:{var d=F0.get(e);if(d!==void 0){var m=xf,y=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":m=g2;break;case"focusin":y="focus",m=bl;break;case"focusout":y="blur",m=bl;break;case"beforeblur":case"afterblur":m=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=i2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=x2;break;case D0:case _0:case z0:m=a2;break;case $0:m=S2;break;case"scroll":m=n2;break;case"wheel":m=C2;break;case"copy":case"cut":case"paste":m=u2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vh}var x=(t&4)!==0,S=!x&&e==="scroll",p=x?d!==null?d+"Capture":null:d;x=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=ho(h,p),C!=null&&x.push(wo(h,C,g)))),S)break;h=h.return}0<x.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:x}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",d&&n!==ju&&(y=n.relatedTarget||n.fromElement)&&(Zn(y)||y[nn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Zn(y):null,y!==null&&(S=wr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=mh,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=vh,C="onPointerLeave",p="onPointerEnter",h="pointer"),S=m==null?d:Rr(m),g=y==null?d:Rr(y),d=new x(C,h+"leave",m,n,c),d.target=S,d.relatedTarget=g,C=null,Zn(c)===u&&(x=new x(p,h+"enter",y,n,c),x.target=g,x.relatedTarget=S,C=x),S=C,m&&y)t:{for(x=m,p=y,h=0,g=x;g;g=kr(g))h++;for(g=0,C=p;C;C=kr(C))g++;for(;0<h-g;)x=kr(x),h--;for(;0<g-h;)p=kr(p),g--;for(;h--;){if(x===p||p!==null&&x===p.alternate)break t;x=kr(x),p=kr(p)}x=null}else x=null;m!==null&&Ah(f,d,m,x,!1),y!==null&&S!==null&&Ah(f,S,y,x,!0)}}e:{if(d=u?Rr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=R2;else if(wh(d))if(M0)k=O2;else{k=I2;var b=M2}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=L2);if(k&&(k=k(e,u))){R0(f,k,n,c);break e}b&&b(e,d,u),e==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&bu(d,"number",d.value)}switch(b=u?Rr(u):window,e){case"focusin":(wh(b)||b.contentEditable==="true")&&(Ar=b,Du=u,Qi=null);break;case"focusout":Qi=Du=Ar=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Ph(f,n,c);break;case"selectionchange":if(_2)break;case"keydown":case"keyup":Ph(f,n,c)}var P;if(Sf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Er?A0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(E0&&n.locale!=="ko"&&(Er||T!=="onCompositionStart"?T==="onCompositionEnd"&&Er&&(P=T0()):(kn=c,yf="value"in kn?kn.value:kn.textContent,Er=!0)),b=na(u,T),0<b.length&&(T=new gh(T,e,null,n,c),f.push({event:T,listeners:b}),P?T.data=P:(P=j0(n),P!==null&&(T.data=P)))),(P=P2?T2(e,n):E2(e,n))&&(u=na(u,"onBeforeInput"),0<u.length&&(c=new gh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}V0(f,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function na(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ho(e,n),o!=null&&r.unshift(wo(e,o,i)),o=ho(e,t),o!=null&&r.push(wo(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ah(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ho(n,o),l!=null&&s.unshift(wo(n,l,a))):i||(l=ho(n,o),l!=null&&s.push(wo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var V2=/\r\n?/g,B2=/\u0000|\uFFFD/g;function jh(e){return(typeof e=="string"?e:""+e).replace(V2,`
`).replace(B2,"")}function ds(e,t,n){if(t=jh(t),jh(e)!==t&&n)throw Error(A(425))}function ra(){}var zu=null,$u=null;function Fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,U2=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,W2=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(e){return Rh.resolve(null).then(e).catch(H2)}:Vu;function H2(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),Ot="__reactFiber$"+gi,So="__reactProps$"+gi,nn="__reactContainer$"+gi,Bu="__reactEvents$"+gi,Y2="__reactListeners$"+gi,G2="__reactHandles$"+gi;function Zn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mh(e);e!==null;){if(n=e[Ot])return n;e=Mh(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){return e=e[Ot]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function za(e){return e[So]||null}var Uu=[],Mr=-1;function Vn(e){return{current:e}}function ee(e){0>Mr||(e.current=Uu[Mr],Uu[Mr]=null,Mr--)}function q(e,t){Mr++,Uu[Mr]=e.current,e.current=t}var Nn={},Oe=Vn(Nn),Ye=Vn(!1),fr=Nn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function ia(){ee(Ye),ee(Oe)}function Ih(e,t,n){if(Oe.current!==Nn)throw Error(A(168));q(Oe,t),q(Ye,n)}function U0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Mw(e)||"Unknown",i));return ae({},n,r)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,fr=Oe.current,q(Oe,e),q(Ye,Ye.current),!0}function Lh(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=U0(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,ee(Ye),ee(Oe),q(Oe,e)):ee(Ye),q(Ye,n)}var Kt=null,$a=!1,Ll=!1;function W0(e){Kt===null?Kt=[e]:Kt.push(e)}function K2(e){$a=!0,W0(e)}function Bn(){if(!Ll&&Kt!==null){Ll=!0;var e=0,t=Y;try{var n=Kt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,$a=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),m0(pf,Bn),i}finally{Y=t,Ll=!1}}return null}var Ir=[],Lr=0,sa=null,aa=0,ft=[],dt=0,dr=null,Xt=1,Qt="";function Gn(e,t){Ir[Lr++]=aa,Ir[Lr++]=sa,sa=e,aa=t}function H0(e,t,n){ft[dt++]=Xt,ft[dt++]=Qt,ft[dt++]=dr,dr=e;var r=Xt;e=Qt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var o=32-Pt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xt=1<<32-Pt(t)+i|n<<i|r,Qt=o+e}else Xt=1<<o|n<<i|r,Qt=e}function Cf(e){e.return!==null&&(Gn(e,1),H0(e,1,0))}function bf(e){for(;e===sa;)sa=Ir[--Lr],Ir[Lr]=null,aa=Ir[--Lr],Ir[Lr]=null;for(;e===dr;)dr=ft[--dt],ft[dt]=null,Qt=ft[--dt],ft[dt]=null,Xt=ft[--dt],ft[dt]=null}var et=null,Je=null,ne=!1,bt=null;function Y0(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:Xt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Je=null,!0):!1;default:return!1}}function Wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hu(e){if(ne){var t=Je;if(t){var n=t;if(!Oh(e,t)){if(Wu(e))throw Error(A(418));t=jn(n.nextSibling);var r=et;t&&Oh(e,t)?Y0(r,n):(e.flags=e.flags&-4097|2,ne=!1,et=e)}}else{if(Wu(e))throw Error(A(418));e.flags=e.flags&-4097|2,ne=!1,et=e}}}function Nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function hs(e){if(e!==et)return!1;if(!ne)return Nh(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fu(e.type,e.memoizedProps)),t&&(t=Je)){if(Wu(e))throw G0(),Error(A(418));for(;t;)Y0(e,t),t=jn(t.nextSibling)}if(Nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?jn(e.stateNode.nextSibling):null;return!0}function G0(){for(var e=Je;e;)e=jn(e.nextSibling)}function ei(){Je=et=null,ne=!1}function Pf(e){bt===null?bt=[e]:bt.push(e)}var X2=ln.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var la=Vn(null),ua=null,Or=null,Tf=null;function Ef(){Tf=Or=ua=null}function Af(e){var t=la.current;ee(la),e._currentValue=t}function Yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){ua=e,Tf=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Tf!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(ua===null)throw Error(A(308));Or=e,ua.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var Jn=null;function jf(e){Jn===null?Jn=[e]:Jn.push(e)}function K0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jf(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,jf(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}function Dh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(d=t,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=ae({},f,d);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=s,e.lanes=s,e.memoizedState=f}}function _h(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Q0=new Kg.Component().refs;function Gu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fa={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=In(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(Tt(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=In(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(Tt(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=In(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(Tt(t,e,r,n),Ms(t,e,r))}};function zh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(i,o):!0}function q0(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(i=Ge(t)?fr:Oe.current,r=t.contextTypes,o=(r=r!=null)?Jr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $h(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function Ku(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Q0,Rf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mt(o):(o=Ge(t)?fr:Oe.current,i.context=Jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Gu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fa.enqueueReplaceState(i,i.state,null),ca(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Q0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ps(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fh(e){var t=e._init;return t(e._payload)}function Z0(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Ln(p,h),p.index=0,p.sibling=null,p}function o(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,C){return h===null||h.tag!==6?(h=Fl(g,p.mode,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,C){var k=g.type;return k===Tr?c(p,h,g.props.children,C,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yn&&Fh(k)===h.type)?(C=i(h,g.props),C.ref=Ri(p,h,g),C.return=p,C):(C=_s(g.type,g.key,g.props,null,p.mode,C),C.ref=Ri(p,h,g),C.return=p,C)}function u(p,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Vl(g,p.mode,C),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,C,k){return h===null||h.tag!==7?(h=ir(g,p.mode,C,k),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Fl(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rs:return g=_s(h.type,h.key,h.props,null,p.mode,g),g.ref=Ri(p,null,h),g.return=p,g;case Pr:return h=Vl(h,p.mode,g),h.return=p,h;case yn:var C=h._init;return f(p,C(h._payload),g)}if(Di(h)||Pi(h))return h=ir(h,p.mode,g,null),h.return=p,h;ps(p,h)}return null}function d(p,h,g,C){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rs:return g.key===k?l(p,h,g,C):null;case Pr:return g.key===k?u(p,h,g,C):null;case yn:return k=g._init,d(p,h,k(g._payload),C)}if(Di(g)||Pi(g))return k!==null?null:c(p,h,g,C,null);ps(p,g)}return null}function m(p,h,g,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(h,p,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case rs:return p=p.get(C.key===null?g:C.key)||null,l(h,p,C,k);case Pr:return p=p.get(C.key===null?g:C.key)||null,u(h,p,C,k);case yn:var b=C._init;return m(p,h,g,b(C._payload),k)}if(Di(C)||Pi(C))return p=p.get(g)||null,c(h,p,C,k,null);ps(h,C)}return null}function y(p,h,g,C){for(var k=null,b=null,P=h,T=h=0,_=null;P!==null&&T<g.length;T++){P.index>T?(_=P,P=null):_=P.sibling;var R=d(p,P,g[T],C);if(R===null){P===null&&(P=_);break}e&&P&&R.alternate===null&&t(p,P),h=o(R,h,T),b===null?k=R:b.sibling=R,b=R,P=_}if(T===g.length)return n(p,P),ne&&Gn(p,T),k;if(P===null){for(;T<g.length;T++)P=f(p,g[T],C),P!==null&&(h=o(P,h,T),b===null?k=P:b.sibling=P,b=P);return ne&&Gn(p,T),k}for(P=r(p,P);T<g.length;T++)_=m(P,p,T,g[T],C),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?T:_.key),h=o(_,h,T),b===null?k=_:b.sibling=_,b=_);return e&&P.forEach(function(F){return t(p,F)}),ne&&Gn(p,T),k}function x(p,h,g,C){var k=Pi(g);if(typeof k!="function")throw Error(A(150));if(g=k.call(g),g==null)throw Error(A(151));for(var b=k=null,P=h,T=h=0,_=null,R=g.next();P!==null&&!R.done;T++,R=g.next()){P.index>T?(_=P,P=null):_=P.sibling;var F=d(p,P,R.value,C);if(F===null){P===null&&(P=_);break}e&&P&&F.alternate===null&&t(p,P),h=o(F,h,T),b===null?k=F:b.sibling=F,b=F,P=_}if(R.done)return n(p,P),ne&&Gn(p,T),k;if(P===null){for(;!R.done;T++,R=g.next())R=f(p,R.value,C),R!==null&&(h=o(R,h,T),b===null?k=R:b.sibling=R,b=R);return ne&&Gn(p,T),k}for(P=r(p,P);!R.done;T++,R=g.next())R=m(P,p,T,R.value,C),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?T:R.key),h=o(R,h,T),b===null?k=R:b.sibling=R,b=R);return e&&P.forEach(function(Ve){return t(p,Ve)}),ne&&Gn(p,T),k}function S(p,h,g,C){if(typeof g=="object"&&g!==null&&g.type===Tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case rs:e:{for(var k=g.key,b=h;b!==null;){if(b.key===k){if(k=g.type,k===Tr){if(b.tag===7){n(p,b.sibling),h=i(b,g.props.children),h.return=p,p=h;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yn&&Fh(k)===b.type){n(p,b.sibling),h=i(b,g.props),h.ref=Ri(p,b,g),h.return=p,p=h;break e}n(p,b);break}else t(p,b);b=b.sibling}g.type===Tr?(h=ir(g.props.children,p.mode,C,g.key),h.return=p,p=h):(C=_s(g.type,g.key,g.props,null,p.mode,C),C.ref=Ri(p,h,g),C.return=p,p=C)}return s(p);case Pr:e:{for(b=g.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Vl(g,p.mode,C),h.return=p,p=h}return s(p);case yn:return b=g._init,S(p,h,b(g._payload),C)}if(Di(g))return y(p,h,g,C);if(Pi(g))return x(p,h,g,C);ps(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=Fl(g,p.mode,C),h.return=p,p=h),s(p)):n(p,h)}return S}var ti=Z0(!0),J0=Z0(!1),Bo={},$t=Vn(Bo),ko=Vn(Bo),Co=Vn(Bo);function er(e){if(e===Bo)throw Error(A(174));return e}function Mf(e,t){switch(q(Co,t),q(ko,e),q($t,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tu(t,e)}ee($t),q($t,t)}function ni(){ee($t),ee(ko),ee(Co)}function ev(e){er(Co.current);var t=er($t.current),n=Tu(t,e.type);t!==n&&(q(ko,e),q($t,n))}function If(e){ko.current===e&&(ee($t),ee(ko))}var ie=Vn(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function Lf(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Is=ln.ReactCurrentDispatcher,Nl=ln.ReactCurrentBatchConfig,hr=0,se=null,ge=null,Se=null,da=!1,qi=!1,bo=0,Q2=0;function Re(){throw Error(A(321))}function Of(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Nf(e,t,n,r,i,o){if(hr=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?eS:tS,e=n(r,i),qi){o=0;do{if(qi=!1,bo=0,25<=o)throw Error(A(301));o+=1,Se=ge=null,t.updateQueue=null,Is.current=nS,e=n(r,i)}while(qi)}if(Is.current=ha,t=ge!==null&&ge.next!==null,hr=0,Se=ge=se=null,da=!1,t)throw Error(A(300));return e}function Df(){var e=bo!==0;return bo=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=e:Se=Se.next=e,Se}function gt(){if(ge===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Se===null?se.memoizedState:Se.next;if(t!==null)Se=t,ge=e;else{if(e===null)throw Error(A(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Se===null?se.memoizedState=Se=e:Se=Se.next=e}return Se}function Po(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=gt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,se.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,At(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=gt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);At(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function tv(){}function nv(e,t){var n=se,r=gt(),i=t(),o=!At(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,_f(ov.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,To(9,iv.bind(null,n,r,i,t),void 0,null),be===null)throw Error(A(349));hr&30||rv(n,t,i)}return i}function rv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function iv(e,t,n,r){t.value=n,t.getSnapshot=r,sv(t)&&av(e)}function ov(e,t,n){return n(function(){sv(t)&&av(e)})}function sv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function av(e){var t=rn(e,1);t!==null&&Tt(t,e,1,-1)}function Vh(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=J2.bind(null,se,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lv(){return gt().memoizedState}function Ls(e,t,n,r){var i=Mt();se.flags|=e,i.memoizedState=To(1|t,n,void 0,r===void 0?null:r)}function Va(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(ge!==null){var s=ge.memoizedState;if(o=s.destroy,r!==null&&Of(r,s.deps)){i.memoizedState=To(t,n,o,r);return}}se.flags|=e,i.memoizedState=To(1|t,n,o,r)}function Bh(e,t){return Ls(8390656,8,e,t)}function _f(e,t){return Va(2048,8,e,t)}function uv(e,t){return Va(4,2,e,t)}function cv(e,t){return Va(4,4,e,t)}function fv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dv(e,t,n){return n=n!=null?n.concat([e]):null,Va(4,4,fv.bind(null,t,e),n)}function zf(){}function hv(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Of(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pv(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Of(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mv(e,t,n){return hr&21?(At(n,t)||(n=y0(),se.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function q2(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Nl.transition;Nl.transition={};try{e(!1),t()}finally{Y=n,Nl.transition=r}}function gv(){return gt().memoizedState}function Z2(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vv(e))yv(t,n);else if(n=K0(e,t,n,r),n!==null){var i=_e();Tt(n,e,r,i),xv(n,t,r)}}function J2(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(e))yv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,s)){var l=t.interleaved;l===null?(i.next=i,jf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=K0(e,t,i,r),n!==null&&(i=_e(),Tt(n,e,r,i),xv(n,t,r))}}function vv(e){var t=e.alternate;return e===se||t!==null&&t===se}function yv(e,t){qi=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}var ha={readContext:mt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},eS={readContext:mt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Bh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,fv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z2.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Vh,useDebugValue:zf,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Vh(!1),t=e[0];return e=q2.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Mt();if(ne){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),be===null)throw Error(A(349));hr&30||rv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bh(ov.bind(null,r,o,e),[e]),r.flags|=2048,To(9,iv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mt(),t=be.identifierPrefix;if(ne){var n=Qt,r=Xt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tS={readContext:mt,useCallback:hv,useContext:mt,useEffect:_f,useImperativeHandle:dv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:Dl,useRef:lv,useState:function(){return Dl(Po)},useDebugValue:zf,useDeferredValue:function(e){var t=gt();return mv(t,ge.memoizedState,e)},useTransition:function(){var e=Dl(Po)[0],t=gt().memoizedState;return[e,t]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},nS={readContext:mt,useCallback:hv,useContext:mt,useEffect:_f,useImperativeHandle:dv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:_l,useRef:lv,useState:function(){return _l(Po)},useDebugValue:zf,useDeferredValue:function(e){var t=gt();return ge===null?t.memoizedState=e:mv(t,ge.memoizedState,e)},useTransition:function(){var e=_l(Po)[0],t=gt().memoizedState;return[e,t]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function ri(e,t){try{var n="",r=t;do n+=Rw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rS=typeof WeakMap=="function"?WeakMap:Map;function wv(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ma||(ma=!0,oc=r),Xu(e,t)},n}function Sv(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xu(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vS.bind(null,e,t,n),t.then(e,e))}function Wh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var iS=ln.ReactCurrentOwner,We=!1;function De(e,t,n,r){t.child=e===null?J0(t,null,n,r):ti(t,e.child,n,r)}function Yh(e,t,n,r,i){n=n.render;var o=t.ref;return Xr(t,i),r=Nf(e,t,n,r,o,i),n=Df(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(ne&&n&&Cf(t),t.flags|=1,De(e,t,r,i),t.child)}function Gh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,kv(e,t,o,r,i)):(e=_s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(s,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function kv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(yo(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,on(e,t,i)}return Qu(e,t,n,r,i)}function Cv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Dr,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Dr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(Dr,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(Dr,Ze),Ze|=r;return De(e,t,i,n),t.child}function bv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qu(e,t,n,r,i){var o=Ge(n)?fr:Oe.current;return o=Jr(t,o),Xr(t,i),n=Nf(e,t,n,r,o,i),r=Df(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(ne&&r&&Cf(t),t.flags|=1,De(e,t,n,i),t.child)}function Kh(e,t,n,r,i){if(Ge(n)){var o=!0;oa(t)}else o=!1;if(Xr(t,i),t.stateNode===null)Os(e,t),q0(t,n,r),Ku(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Ge(n)?fr:Oe.current,u=Jr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$h(t,s,r,u),xn=!1;var d=t.memoizedState;s.state=d,ca(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ye.current||xn?(typeof c=="function"&&(Gu(t,n,c,r),l=t.memoizedState),(a=xn||zh(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,X0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:kt(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Ge(n)?fr:Oe.current,l=Jr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&$h(t,s,r,l),xn=!1,d=t.memoizedState,s.state=d,ca(t,r,s,i);var y=t.memoizedState;a!==f||d!==y||Ye.current||xn?(typeof m=="function"&&(Gu(t,n,m,r),y=t.memoizedState),(u=xn||zh(t,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return qu(e,t,n,r,o,i)}function qu(e,t,n,r,i,o){bv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Lh(t,n,!1),on(e,t,o);r=t.stateNode,iS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ti(t,e.child,null,o),t.child=ti(t,null,a,o)):De(e,t,a,o),t.memoizedState=r.state,i&&Lh(t,n,!0),t.child}function Pv(e){var t=e.stateNode;t.pendingContext?Ih(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ih(e,t.context,!1),Mf(e,t.containerInfo)}function Xh(e,t,n,r,i){return ei(),Pf(i),t.flags|=256,De(e,t,n,r),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tv(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(ie,i&1),e===null)return Hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Wa(s,r,0,null),e=ir(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ju(n),t.memoizedState=Zu,e):$f(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ln(a,o):(o=ir(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ju(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Zu,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $f(e,t){return t=Wa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ms(e,t,n,r){return r!==null&&Pf(r),ti(t,e.child,null,n),e=$f(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=zl(Error(A(422))),ms(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Wa({mode:"visible",children:r.children},i,0,null),o=ir(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ti(t,e.child,null,s),t.child.memoizedState=Ju(s),t.memoizedState=Zu,o);if(!(t.mode&1))return ms(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=zl(o,r,void 0),ms(e,t,s,r)}if(a=(s&e.childLanes)!==0,We||a){if(r=be,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),Tt(r,e,i,-1))}return Hf(),r=zl(Error(A(421))),ms(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=jn(i.nextSibling),et=t,ne=!0,bt=null,e!==null&&(ft[dt++]=Xt,ft[dt++]=Qt,ft[dt++]=dr,Xt=e.id,Qt=e.overflow,dr=t),t=$f(t,r.children),t.flags|=4096,t)}function Qh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yu(e.return,t,n)}function $l(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ev(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qh(e,n,t);else if(e.tag===19)Qh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$l(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sS(e,t,n){switch(t.tag){case 3:Pv(t),ei();break;case 5:ev(t);break;case 1:Ge(t.type)&&oa(t);break;case 4:Mf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Tv(e,t,n):(q(ie,ie.current&1),e=on(e,t,n),e!==null?e.sibling:null);q(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ev(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Cv(e,t,n)}return on(e,t,n)}var Av,ec,jv,Rv;Av=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};jv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,er($t.current);var o=null;switch(n){case"input":i=ku(e,i),r=ku(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=Pu(e,i),r=Pu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}Eu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function aS(e,t,n){var r=t.pendingProps;switch(bf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ge(t.type)&&ia(),Me(t),null;case 3:return r=t.stateNode,ni(),ee(Ye),ee(Oe),Lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(lc(bt),bt=null))),ec(e,t),Me(t),null;case 5:If(t);var i=er(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)jv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Me(t),null}if(e=er($t.current),hs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[So]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)Z(zi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":oh(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":ah(r,o),Z("invalid",r)}Eu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ds(r.textContent,a,e),i=["children",""+a]):co.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":is(r),sh(r,o,!0);break;case"textarea":is(r),lh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ra)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=r0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ot]=t,e[So]=r,Av(e,t,!1,!1),t.stateNode=e;e:{switch(s=Au(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)Z(zi[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":oh(e,r),i=ku(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Z("invalid",e);break;case"textarea":ah(e,r),i=Pu(e,r),Z("invalid",e);break;default:i=r}Eu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?s0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(e,l):typeof l=="number"&&fo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(co.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Z("scroll",e):l!=null&&uf(e,o,l,s))}switch(n){case"input":is(e),sh(e,r,!1);break;case"textarea":is(e),lh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Rv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=er(Co.current),er($t.current),hs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ds(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Me(t),null;case 13:if(ee(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Je!==null&&t.mode&1&&!(t.flags&128))G0(),ei(),t.flags|=98560,o=!1;else if(o=hs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Ot]=t}else ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else bt!==null&&(lc(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):Hf())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return ni(),ec(e,t),e===null&&xo(t.stateNode.containerInfo),Me(t),null;case 10:return Af(t.type._context),Me(t),null;case 17:return Ge(t.type)&&ia(),Me(t),null;case 19:if(ee(ie),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Mi(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=fa(e),s!==null){for(t.flags|=128,Mi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>ii&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304)}else{if(!r)if(e=fa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return Me(t),null}else 2*fe()-o.renderingStartTime>ii&&n!==1073741824&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,n=ie.current,q(ie,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Wf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function lS(e,t){switch(bf(t),t.tag){case 1:return Ge(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ni(),ee(Ye),ee(Oe),Lf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return If(t),null;case 13:if(ee(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ie),null;case 4:return ni(),null;case 10:return Af(t.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var gs=!1,Le=!1,uS=typeof WeakSet=="function"?WeakSet:Set,M=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function tc(e,t,n){try{n()}catch(r){ue(e,t,r)}}var qh=!1;function cS(e,t){if(zu=ea,e=O0(),kf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:e,selectionRange:n},ea=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:kt(t.type,x),S);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(C){ue(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=qh,qh=!1,y}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tc(t,n,o)}i=i.next}while(i!==r)}}function Ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mv(e){var t=e.alternate;t!==null&&(e.alternate=null,Mv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[So],delete t[Bu],delete t[Y2],delete t[G2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iv(e){return e.tag===5||e.tag===3||e.tag===4}function Zh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}var Te=null,Ct=!1;function fn(e,t,n){for(n=n.child;n!==null;)Lv(e,t,n),n=n.sibling}function Lv(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Oa,n)}catch{}switch(n.tag){case 5:Le||Nr(n,t);case 6:var r=Te,i=Ct;Te=null,fn(e,t,n),Te=r,Ct=i,Te!==null&&(Ct?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(Ct?(e=Te,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),go(e)):Il(Te,n.stateNode));break;case 4:r=Te,i=Ct,Te=n.stateNode.containerInfo,Ct=!0,fn(e,t,n),Te=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&tc(n,t,s),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Le&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,fn(e,t,n),Le=r):fn(e,t,n);break;default:fn(e,t,n)}}function Jh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uS),t.forEach(function(r){var i=xS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,Ct=!1;break e;case 3:Te=a.stateNode.containerInfo,Ct=!0;break e;case 4:Te=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(Te===null)throw Error(A(160));Lv(o,s,i),Te=null,Ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ov(t,e),t=t.sibling}function Ov(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Rt(e),r&4){try{Zi(3,e,e.return),Ba(3,e)}catch(x){ue(e,e.return,x)}try{Zi(5,e,e.return)}catch(x){ue(e,e.return,x)}}break;case 1:xt(t,e),Rt(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(xt(t,e),Rt(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var i=e.stateNode;try{fo(i,"")}catch(x){ue(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&t0(i,o),Au(a,s);var u=Au(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?s0(i,f):c==="dangerouslySetInnerHTML"?i0(i,f):c==="children"?fo(i,f):uf(i,c,f,u)}switch(a){case"input":Cu(i,o);break;case"textarea":n0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Hr(i,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Hr(i,!!o.multiple,o.defaultValue,!0):Hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[So]=o}catch(x){ue(e,e.return,x)}}break;case 6:if(xt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ue(e,e.return,x)}}break;case 3:if(xt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(x){ue(e,e.return,x)}break;case 4:xt(t,e),Rt(e);break;case 13:xt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bf=fe())),r&4&&Jh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||c,xt(t,e),Le=u):xt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(d=M,m=d.child,d.tag){case 0:case 11:case 14:case 15:Zi(4,d,d.return);break;case 1:Nr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ue(r,n,x)}}break;case 5:Nr(d,d.return);break;case 22:if(d.memoizedState!==null){tp(f);continue}}m!==null?(m.return=d,M=m):tp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=o0("display",s))}catch(x){ue(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ue(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(t,e),Rt(e),r&4&&Jh(e);break;case 21:break;default:xt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iv(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var o=Zh(e);ic(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zh(e);rc(e,a,s);break;default:throw Error(A(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fS(e,t,n){M=e,Nv(e)}function Nv(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||gs;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=gs;var u=Le;if(gs=s,(Le=l)&&!u)for(M=i;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?np(i):l!==null?(l.return=s,M=l):np(i);for(;o!==null;)M=o,Nv(o),o=o.sibling;M=i,gs=a,Le=u}ep(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):ep(e)}}function ep(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_h(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_h(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Le||t.flags&512&&nc(t)}catch(d){ue(t,t.return,d)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function tp(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function np(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ba(4,t)}catch(l){ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ue(t,i,l)}}var o=t.return;try{nc(t)}catch(l){ue(t,o,l)}break;case 5:var s=t.return;try{nc(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var dS=Math.ceil,pa=ln.ReactCurrentDispatcher,Ff=ln.ReactCurrentOwner,pt=ln.ReactCurrentBatchConfig,B=0,be=null,he=null,Ee=0,Ze=0,Dr=Vn(0),ve=0,Eo=null,pr=0,Ua=0,Vf=0,Ji=null,Ue=null,Bf=0,ii=1/0,Yt=null,ma=!1,oc=null,Mn=null,vs=!1,Cn=null,ga=0,eo=0,sc=null,Ns=-1,Ds=0;function _e(){return B&6?fe():Ns!==-1?Ns:Ns=fe()}function In(e){return e.mode&1?B&2&&Ee!==0?Ee&-Ee:X2.transition!==null?(Ds===0&&(Ds=y0()),Ds):(e=Y,e!==0||(e=window.event,e=e===void 0?16:P0(e.type)),e):1}function Tt(e,t,n,r){if(50<eo)throw eo=0,sc=null,Error(A(185));$o(e,n,r),(!(B&2)||e!==be)&&(e===be&&(!(B&2)&&(Ua|=n),ve===4&&Sn(e,Ee)),Ke(e,r),n===1&&B===0&&!(t.mode&1)&&(ii=fe()+500,$a&&Bn()))}function Ke(e,t){var n=e.callbackNode;Xw(e,t);var r=Js(e,e===be?Ee:0);if(r===0)n!==null&&fh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fh(n),t===1)e.tag===0?K2(rp.bind(null,e)):W0(rp.bind(null,e)),W2(function(){!(B&6)&&Bn()}),n=null;else{switch(x0(r)){case 1:n=pf;break;case 4:n=g0;break;case 16:n=Zs;break;case 536870912:n=v0;break;default:n=Zs}n=Uv(n,Dv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dv(e,t){if(Ns=-1,Ds=0,B&6)throw Error(A(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=Js(e,e===be?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=va(e,r);else{t=r;var i=B;B|=2;var o=zv();(be!==e||Ee!==t)&&(Yt=null,ii=fe()+500,rr(e,t));do try{mS();break}catch(a){_v(e,a)}while(1);Ef(),pa.current=o,B=i,he!==null?t=0:(be=null,Ee=0,t=ve)}if(t!==0){if(t===2&&(i=Lu(e),i!==0&&(r=i,t=ac(e,i))),t===1)throw n=Eo,rr(e,0),Sn(e,r),Ke(e,fe()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!hS(i)&&(t=va(e,r),t===2&&(o=Lu(e),o!==0&&(r=o,t=ac(e,o))),t===1))throw n=Eo,rr(e,0),Sn(e,r),Ke(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Kn(e,Ue,Yt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Bf+500-fe(),10<t)){if(Js(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vu(Kn.bind(null,e,Ue,Yt),t);break}Kn(e,Ue,Yt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Pt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dS(r/1960))-r,10<r){e.timeoutHandle=Vu(Kn.bind(null,e,Ue,Yt),r);break}Kn(e,Ue,Yt);break;case 5:Kn(e,Ue,Yt);break;default:throw Error(A(329))}}}return Ke(e,fe()),e.callbackNode===n?Dv.bind(null,e):null}function ac(e,t){var n=Ji;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=va(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&lc(t)),e}function lc(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function hS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!At(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Vf,t&=~Ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function rp(e){if(B&6)throw Error(A(327));Qr();var t=Js(e,0);if(!(t&1))return Ke(e,fe()),null;var n=va(e,t);if(e.tag!==0&&n===2){var r=Lu(e);r!==0&&(t=r,n=ac(e,r))}if(n===1)throw n=Eo,rr(e,0),Sn(e,t),Ke(e,fe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,Ue,Yt),Ke(e,fe()),null}function Uf(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(ii=fe()+500,$a&&Bn())}}function mr(e){Cn!==null&&Cn.tag===0&&!(B&6)&&Qr();var t=B;B|=1;var n=pt.transition,r=Y;try{if(pt.transition=null,Y=1,e)return e()}finally{Y=r,pt.transition=n,B=t,!(B&6)&&Bn()}}function Wf(){Ze=Dr.current,ee(Dr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U2(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:ni(),ee(Ye),ee(Oe),Lf();break;case 5:If(r);break;case 4:ni();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Af(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(be=e,he=e=Ln(e.current,null),Ee=Ze=t,ve=0,Eo=null,Vf=Ua=pr=0,Ue=Ji=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Jn=null}return e}function _v(e,t){do{var n=he;try{if(Ef(),Is.current=ha,da){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if(hr=0,Se=ge=se=null,qi=!1,bo=0,Ff.current=null,n===null||n.return===null){ve=1,Eo=t,he=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Wh(s);if(m!==null){m.flags&=-257,Hh(m,s,a,o,t),m.mode&1&&Uh(o,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Uh(o,u,t),Hf();break e}l=Error(A(426))}}else if(ne&&a.mode&1){var S=Wh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hh(S,s,a,o,t),Pf(ri(l,a));break e}}o=l=ri(l,a),ve!==4&&(ve=2),Ji===null?Ji=[o]:Ji.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=wv(o,l,t);Dh(o,p);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mn===null||!Mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Sv(o,a,t);Dh(o,C);break e}}o=o.return}while(o!==null)}Fv(n)}catch(k){t=k,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function zv(){var e=pa.current;return pa.current=ha,e===null?ha:e}function Hf(){(ve===0||ve===3||ve===2)&&(ve=4),be===null||!(pr&268435455)&&!(Ua&268435455)||Sn(be,Ee)}function va(e,t){var n=B;B|=2;var r=zv();(be!==e||Ee!==t)&&(Yt=null,rr(e,t));do try{pS();break}catch(i){_v(e,i)}while(1);if(Ef(),B=n,pa.current=r,he!==null)throw Error(A(261));return be=null,Ee=0,ve}function pS(){for(;he!==null;)$v(he)}function mS(){for(;he!==null&&!Fw();)$v(he)}function $v(e){var t=Bv(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Fv(e):he=t,Ff.current=null}function Fv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lS(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(n=aS(n,t,Ze),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function Kn(e,t,n){var r=Y,i=pt.transition;try{pt.transition=null,Y=1,gS(e,t,n,r)}finally{pt.transition=i,Y=r}return null}function gS(e,t,n,r){do Qr();while(Cn!==null);if(B&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qw(e,o),e===be&&(he=be=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vs||(vs=!0,Uv(Zs,function(){return Qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pt.transition,pt.transition=null;var s=Y;Y=1;var a=B;B|=4,Ff.current=null,cS(e,n),Ov(n,e),D2($u),ea=!!zu,$u=zu=null,e.current=n,fS(n),Vw(),B=a,Y=s,pt.transition=o}else e.current=n;if(vs&&(vs=!1,Cn=e,ga=i),o=e.pendingLanes,o===0&&(Mn=null),Ww(n.stateNode),Ke(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ma)throw ma=!1,e=oc,oc=null,e;return ga&1&&e.tag!==0&&Qr(),o=e.pendingLanes,o&1?e===sc?eo++:(eo=0,sc=e):eo=0,Bn(),null}function Qr(){if(Cn!==null){var e=x0(ga),t=pt.transition,n=Y;try{if(pt.transition=null,Y=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,ga=0,B&6)throw Error(A(331));var i=B;for(B|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Zi(8,c,o)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var d=c.sibling,m=c.return;if(Mv(c),c===u){M=null;break}if(d!==null){d.return=m,M=d;break}M=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var h=e.current;for(M=h;M!==null;){s=M;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,M=g;else e:for(s=h;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ba(9,a)}}catch(k){ue(a,a.return,k)}if(a===s){M=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,M=C;break e}M=a.return}}if(B=i,Bn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Oa,e)}catch{}r=!0}return r}finally{Y=n,pt.transition=t}}return!1}function ip(e,t,n){t=ri(n,t),t=wv(e,t,1),e=Rn(e,t,1),t=_e(),e!==null&&($o(e,1,t),Ke(e,t))}function ue(e,t,n){if(e.tag===3)ip(e,e,n);else for(;t!==null;){if(t.tag===3){ip(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=ri(n,e),e=Sv(t,e,1),t=Rn(t,e,1),e=_e(),t!==null&&($o(t,1,e),Ke(t,e));break}}t=t.return}}function vS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Ee&n)===n&&(ve===4||ve===3&&(Ee&130023424)===Ee&&500>fe()-Bf?rr(e,0):Vf|=n),Ke(e,t)}function Vv(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=_e();e=rn(e,t),e!==null&&($o(e,t,n),Ke(e,n))}function yS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vv(e,n)}function xS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Vv(e,n)}var Bv;Bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,sS(e,t,n);We=!!(e.flags&131072)}else We=!1,ne&&t.flags&1048576&&H0(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=Jr(t,Oe.current);Xr(t,n),i=Nf(null,t,r,e,i,n);var o=Df();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(o=!0,oa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rf(t),i.updater=Fa,t.stateNode=i,i._reactInternals=t,Ku(t,r,e,n),t=qu(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&Cf(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=SS(r),e=kt(r,e),i){case 0:t=Qu(null,t,r,e,n);break e;case 1:t=Kh(null,t,r,e,n);break e;case 11:t=Yh(null,t,r,e,n);break e;case 14:t=Gh(null,t,r,kt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Kh(e,t,r,i,n);case 3:e:{if(Pv(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,X0(e,t),ca(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ri(Error(A(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=ri(Error(A(424)),t),t=Xh(e,t,r,n,i);break e}else for(Je=jn(t.stateNode.containerInfo.firstChild),et=t,ne=!0,bt=null,n=J0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===i){t=on(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return ev(t),e===null&&Hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Fu(r,i)?s=null:o!==null&&Fu(r,o)&&(t.flags|=32),bv(e,t),De(e,t,s,n),t.child;case 6:return e===null&&Hu(t),null;case 13:return Tv(e,t,n);case 4:return Mf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ti(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Yh(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(la,r._currentValue),r._currentValue=s,o!==null)if(At(o.value,s)){if(o.children===i.children&&!Ye.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=qt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Yu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=mt(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Gh(e,t,r,i,n);case 15:return kv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Os(e,t),t.tag=1,Ge(r)?(e=!0,oa(t)):e=!1,Xr(t,n),q0(t,r,i),Ku(t,r,i,n),qu(null,t,r,!0,e,n);case 19:return Ev(e,t,n);case 22:return Cv(e,t,n)}throw Error(A(156,t.tag))};function Uv(e,t){return m0(e,t)}function wS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new wS(e,t,n,r)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function SS(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ff)return 11;if(e===df)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _s(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Tr:return ir(n.children,i,o,t);case cf:s=8,i|=8;break;case yu:return e=ht(12,n,t,i|2),e.elementType=yu,e.lanes=o,e;case xu:return e=ht(13,n,t,i),e.elementType=xu,e.lanes=o,e;case wu:return e=ht(19,n,t,i),e.elementType=wu,e.lanes=o,e;case Zg:return Wa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qg:s=10;break e;case qg:s=9;break e;case ff:s=11;break e;case df:s=14;break e;case yn:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=ht(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ir(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function Wa(e,t,n,r){return e=ht(22,e,r,t),e.elementType=Zg,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gf(e,t,n,r,i,o,s,a,l){return e=new kS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(o),e}function CS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wv(e){if(!e)return Nn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ge(n))return U0(e,n,t)}return t}function Hv(e,t,n,r,i,o,s,a,l){return e=Gf(n,r,!0,e,i,o,s,a,l),e.context=Wv(null),n=e.current,r=_e(),i=In(n),o=qt(r,i),o.callback=t??null,Rn(n,o,i),e.current.lanes=i,$o(e,i,r),Ke(e,r),e}function Ha(e,t,n,r){var i=t.current,o=_e(),s=In(i);return n=Wv(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,s),e!==null&&(Tt(e,i,s,o),Ms(e,i,s)),s}function ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kf(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function bS(){return null}var Yv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xf(e){this._internalRoot=e}Ya.prototype.render=Xf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ha(e,t,null,null)};Ya.prototype.unmount=Xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Ha(null,e,null,null)}),t[nn]=null}};function Ya(e){this._internalRoot=e}Ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=k0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&b0(e)}};function Qf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function PS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ya(s);o.call(u)}}var s=Hv(t,r,e,0,null,!1,!1,"",sp);return e._reactRootContainer=s,e[nn]=s.current,xo(e.nodeType===8?e.parentNode:e),mr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ya(l);a.call(u)}}var l=Gf(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=l,e[nn]=l.current,xo(e.nodeType===8?e.parentNode:e),mr(function(){Ha(t,l,n,r)}),l}function Ka(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ya(s);a.call(l)}}Ha(t,s,e,i)}else s=PS(n,t,e,i,r);return ya(s)}w0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(mf(t,n|1),Ke(t,fe()),!(B&6)&&(ii=fe()+500,Bn()))}break;case 13:mr(function(){var r=rn(e,1);if(r!==null){var i=_e();Tt(r,e,1,i)}}),Kf(e,1)}};gf=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=_e();Tt(t,e,134217728,n)}Kf(e,134217728)}};S0=function(e){if(e.tag===13){var t=In(e),n=rn(e,t);if(n!==null){var r=_e();Tt(n,e,t,r)}Kf(e,t)}};k0=function(){return Y};C0=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};Ru=function(e,t,n){switch(t){case"input":if(Cu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=za(r);if(!i)throw Error(A(90));e0(r),Cu(r,i)}}}break;case"textarea":n0(e,n);break;case"select":t=n.value,t!=null&&Hr(e,!!n.multiple,t,!1)}};u0=Uf;c0=mr;var TS={usingClientEntryPoint:!1,Events:[Vo,Rr,za,a0,l0,Uf]},Ii={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ES={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=h0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||bS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{Oa=ys.inject(ES),zt=ys}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(t))throw Error(A(200));return CS(e,t,null,n)};ot.createRoot=function(e,t){if(!Qf(e))throw Error(A(299));var n=!1,r="",i=Yv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gf(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,xo(e.nodeType===8?e.parentNode:e),new Xf(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=h0(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return mr(e)};ot.hydrate=function(e,t,n){if(!Ga(t))throw Error(A(200));return Ka(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Qf(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Yv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hv(t,null,e,1,n??null,i,!1,o,s),e[nn]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ya(t)};ot.render=function(e,t,n){if(!Ga(t))throw Error(A(200));return Ka(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Ga(e))throw Error(A(40));return e._reactRootContainer?(mr(function(){Ka(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ot.unstable_batchedUpdates=Uf;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ga(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ka(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(e){console.error(e)}}Gv(),Hg.exports=ot;var AS=Hg.exports,ap=AS;gu.createRoot=ap.createRoot,gu.hydrateRoot=ap.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bn||(bn={}));const lp="popstate";function jS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return uc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kv(i)}return MS(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function RS(){return Math.random().toString(36).substr(2,8)}function up(e,t){return{usr:e.state,key:e.key,idx:t}}function uc(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vi(t):t,{state:n,key:t&&t.key||r||RS()})}function Kv(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function MS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=bn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ao({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=bn.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:a,location:x.location,delta:p})}function d(S,p){a=bn.Push;let h=uc(x.location,S,p);n&&n(h,S),u=c()+1;let g=up(h,u),C=x.createHref(h);try{s.pushState(g,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(C)}o&&l&&l({action:a,location:x.location,delta:1})}function m(S,p){a=bn.Replace;let h=uc(x.location,S,p);n&&n(h,S),u=c();let g=up(h,u),C=x.createHref(h);s.replaceState(g,"",C),o&&l&&l({action:a,location:x.location,delta:0})}function y(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:Kv(S);return ye(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lp,f),l=S,()=>{i.removeEventListener(lp,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(S){return s.go(S)}};return x}var cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cp||(cp={}));function IS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vi(t):t,i=qv(r.pathname||"/",n);if(i==null)return null;let o=Xv(e);LS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=BS(o[a],HS(i));return s}function Xv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:FS(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Qv(o.path))i(o,s,l)}),t}function Qv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Qv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function LS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:VS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OS=/^:\w+$/,NS=3,DS=2,_S=1,zS=10,$S=-2,fp=e=>e==="*";function FS(e,t){let n=e.split("/"),r=n.length;return n.some(fp)&&(r+=$S),t&&(r+=DS),n.filter(i=>!fp(i)).reduce((i,o)=>i+(OS.test(o)?NS:o===""?_S:zS),r)}function VS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function BS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=US({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:or([i,c.pathname]),pathnameBase:qS(or([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return o}function US(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=WS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=YS(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function WS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function HS(e){try{return decodeURI(e)}catch(t){return qf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function YS(e,t){try{return decodeURIComponent(e)}catch(n){return qf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function qv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function GS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vi(e):e;return{pathname:n?n.startsWith("/")?n:KS(n,t):t,search:ZS(r),hash:JS(i)}}function KS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function QS(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vi(e):(i=Ao({},e),ye(!i.pathname||!i.pathname.includes("?"),Bl("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Bl("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Bl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=GS(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=e=>e.join("/").replace(/\/\/+/g,"/"),qS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ZS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,JS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ek(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zv=["post","put","patch","delete"];new Set(Zv);const tk=["get",...Zv];new Set(tk);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}const Zf=w.createContext(null),nk=w.createContext(null),Xa=w.createContext(null),Qa=w.createContext(null),yi=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Jv=w.createContext(null);function qa(){return w.useContext(Qa)!=null}function Uo(){return qa()||ye(!1),w.useContext(Qa).location}function ey(e){w.useContext(Xa).static||w.useLayoutEffect(e)}function Wo(){let{isDataRoute:e}=w.useContext(yi);return e?mk():rk()}function rk(){qa()||ye(!1);let e=w.useContext(Zf),{basename:t,navigator:n}=w.useContext(Xa),{matches:r}=w.useContext(yi),{pathname:i}=Uo(),o=JSON.stringify(XS(r).map(l=>l.pathnameBase)),s=w.useRef(!1);return ey(()=>{s.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=QS(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:or([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function ik(e,t){return ok(e,t)}function ok(e,t,n){qa()||ye(!1);let{navigator:r}=w.useContext(Xa),{matches:i}=w.useContext(yi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Uo(),u;if(t){var c;let x=typeof t=="string"?vi(t):t;a==="/"||(c=x.pathname)!=null&&c.startsWith(a)||ye(!1),u=x}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",m=IS(e,{pathname:d}),y=ck(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:or([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?w.createElement(Qa.Provider,{value:{location:xa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bn.Pop}},y):y}function sk(){let e=pk(),t=ek(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const ak=w.createElement(sk,null);class lk extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(yi.Provider,{value:this.props.routeContext},w.createElement(Jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uk(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Zf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(yi.Provider,{value:t},r)}function ck(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ye(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||ak);let d=t.concat(o.slice(0,u+1)),m=()=>{let y;return c?y=f:l.route.Component?y=w.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,w.createElement(uk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(lk,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var ty=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ty||{}),wa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wa||{});function fk(e){let t=w.useContext(Zf);return t||ye(!1),t}function dk(e){let t=w.useContext(nk);return t||ye(!1),t}function hk(e){let t=w.useContext(yi);return t||ye(!1),t}function ny(e){let t=hk(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function pk(){var e;let t=w.useContext(Jv),n=dk(wa.UseRouteError),r=ny(wa.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function mk(){let{router:e}=fk(ty.UseNavigateStable),t=ny(wa.UseNavigateStable),n=w.useRef(!1);return ey(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xa({fromRouteId:t},o)))},[e,t])}function pn(e){ye(!1)}function ry(e){let{basename:t="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:o,static:s=!1}=e;qa()&&ye(!1);let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=vi(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:m="default"}=r,y=w.useMemo(()=>{let x=qv(u,a);return x==null?null:{location:{pathname:x,search:c,hash:f,state:d,key:m},navigationType:i}},[a,u,c,f,d,m,i]);return y==null?null:w.createElement(Xa.Provider,{value:l},w.createElement(Qa.Provider,{children:n,value:y}))}function gk(e){let{children:t,location:n}=e;return ik(cc(t),n)}new Promise(()=>{});function cc(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,cc(r.props.children,o));return}r.type!==pn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=cc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vk="startTransition",dp=yw[vk];function yk(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=jS({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=w.useCallback(f=>{u&&dp?dp(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>s.listen(c),[s,c]),w.createElement(ry,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}var hp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(hp||(hp={}));var pp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pp||(pp={}));var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},He.apply(this,arguments)};function jo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var J="-ms-",to="-moz-",H="-webkit-",iy="comm",Za="rule",Jf="decl",xk="@import",oy="@keyframes",wk="@layer",Sk=Math.abs,ed=String.fromCharCode,fc=Object.assign;function kk(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function sy(e){return e.trim()}function Gt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function zs(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function oi(e,t,n){return e.slice(t,n)}function It(e){return e.length}function ay(e){return e.length}function $i(e,t){return t.push(e),e}function Ck(e,t){return e.map(t).join("")}function mp(e,t){return e.filter(function(n){return!Gt(n,t)})}var Ja=1,si=1,ly=0,vt=0,de=0,xi="";function el(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ja,column:si,length:s,return:"",siblings:a}}function mn(e,t){return fc(el("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cr(e){for(;e.root;)e=mn(e.root,{children:[e]});$i(e,e.siblings)}function bk(){return de}function Pk(){return de=vt>0?ke(xi,--vt):0,si--,de===10&&(si=1,Ja--),de}function Et(){return de=vt<ly?ke(xi,vt++):0,si++,de===10&&(si=1,Ja++),de}function sr(){return ke(xi,vt)}function $s(){return vt}function tl(e,t){return oi(xi,e,t)}function dc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tk(e){return Ja=si=1,ly=It(xi=e),vt=0,[]}function Ek(e){return xi="",e}function Ul(e){return sy(tl(vt-1,hc(e===91?e+2:e===40?e+1:e)))}function Ak(e){for(;(de=sr())&&de<33;)Et();return dc(e)>2||dc(de)>3?"":" "}function jk(e,t){for(;--t&&Et()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return tl(e,$s()+(t<6&&sr()==32&&Et()==32))}function hc(e){for(;Et();)switch(de){case e:return vt;case 34:case 39:e!==34&&e!==39&&hc(de);break;case 40:e===41&&hc(e);break;case 92:Et();break}return vt}function Rk(e,t){for(;Et()&&e+de!==47+10;)if(e+de===42+42&&sr()===47)break;return"/*"+tl(t,vt-1)+"*"+ed(e===47?e:Et())}function Mk(e){for(;!dc(sr());)Et();return tl(e,vt)}function Ik(e){return Ek(Fs("",null,null,null,[""],e=Tk(e),0,[0],e))}function Fs(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,m=0,y=0,x=1,S=1,p=1,h=0,g="",C=i,k=o,b=r,P=g;S;)switch(y=h,h=Et()){case 40:if(y!=108&&ke(P,f-1)==58){zs(P+=$(Ul(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:P+=Ul(h);break;case 9:case 10:case 13:case 32:P+=Ak(y);break;case 92:P+=jk($s()-1,7);continue;case 47:switch(sr()){case 42:case 47:$i(Lk(Rk(Et(),$s()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[u++]=It(P)*p;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+c:p==-1&&(P=$(P,/\f/g,"")),m>0&&It(P)-f&&$i(m>32?vp(P+";",r,n,f-1,l):vp($(P," ","")+";",r,n,f-2,l),l);break;case 59:P+=";";default:if($i(b=gp(P,t,n,u,c,i,a,g,C=[],k=[],f,o),o),h===123)if(c===0)Fs(P,t,b,b,C,o,f,a,k);else switch(d===99&&ke(P,3)===110?100:d){case 100:case 108:case 109:case 115:Fs(e,b,b,r&&$i(gp(e,b,b,0,0,i,a,g,i,C=[],f,k),k),i,k,f,a,r?C:k);break;default:Fs(P,b,b,b,[""],k,0,a,k)}}u=c=m=0,x=p=1,g=P="",f=s;break;case 58:f=1+It(P),m=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Pk()==125)continue}switch(P+=ed(h),h*x){case 38:p=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(It(P)-1)*p,p=1;break;case 64:sr()===45&&(P+=Ul(Et())),d=sr(),c=f=It(g=P+=Mk($s())),h++;break;case 45:y===45&&It(P)==2&&(x=0)}}return o}function gp(e,t,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,m=i===0?o:[""],y=ay(m),x=0,S=0,p=0;x<r;++x)for(var h=0,g=oi(e,d+1,d=Sk(S=s[x])),C=e;h<y;++h)(C=sy(S>0?m[h]+" "+g:$(g,/&\f/g,m[h])))&&(l[p++]=C);return el(e,t,n,i===0?Za:a,l,u,c,f)}function Lk(e,t,n,r){return el(e,t,n,iy,ed(bk()),oi(e,2,-2),0,r)}function vp(e,t,n,r,i){return el(e,t,n,Jf,oi(e,0,r),oi(e,r+1,-1),r,i)}function uy(e,t,n){switch(kk(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+to+e+J+e+e;case 5936:switch(ke(e,t+11)){case 114:return H+e+J+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+J+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+J+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+J+e+e;case 6165:return H+e+J+"flex-"+e+e;case 5187:return H+e+$(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return H+e+J+"flex-item-"+$(e,/flex-|-self/g,"")+(Gt(e,/flex-|baseline/)?"":J+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return H+e+J+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+J+$(e,"shrink","negative")+e;case 5292:return H+e+J+$(e,"basis","preferred-size")+e;case 6060:return H+"box-"+$(e,"-grow","")+H+e+J+$(e,"grow","positive")+e;case 4554:return H+$(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Gt(e,/flex-|baseline/))return J+"grid-column-align"+oi(e,t)+e;break;case 2592:case 3360:return J+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Gt(r.props,/grid-\w+-end/)})?~zs(e+(n=n[t].value),"span")?e:J+$(e,"-start","")+e+J+"grid-row-span:"+(~zs(n,"span")?Gt(n,/\d+/):+Gt(n,/\d+/)-+Gt(e,/\d+/))+";":J+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Gt(r.props,/grid-\w+-start/)})?e:J+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+to+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~zs(e,"stretch")?uy($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return J+i+":"+o+u+(s?J+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ke(e,t+6)===121)return $(e,":",":"+H)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(ke(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+J+"$2box$3")+e;case 100:return $(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Sa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ok(e,t,n,r){switch(e.type){case wk:if(e.children.length)break;case xk:case Jf:return e.return=e.return||e.value;case iy:return"";case oy:return e.return=e.value+"{"+Sa(e.children,r)+"}";case Za:if(!It(e.value=e.props.join(",")))return""}return It(n=Sa(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nk(e){var t=ay(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Dk(e){return function(t){t.root||(t=t.return)&&e(t)}}function _k(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Jf:e.return=uy(e.value,e.length,n);return;case oy:return Sa([mn(e,{value:$(e.value,"@","@"+H)})],r);case Za:if(e.length)return Ck(n=e.props,function(i){switch(Gt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cr(mn(e,{props:[$(i,/:(read-\w+)/,":"+to+"$1")]})),Cr(mn(e,{props:[i]})),fc(e,{props:mp(n,r)});break;case"::placeholder":Cr(mn(e,{props:[$(i,/:(plac\w+)/,":"+H+"input-$1")]})),Cr(mn(e,{props:[$(i,/:(plac\w+)/,":"+to+"$1")]})),Cr(mn(e,{props:[$(i,/:(plac\w+)/,J+"input-$1")]})),Cr(mn(e,{props:[i]})),fc(e,{props:mp(n,r)});break}return""})}}var zk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ai=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",td=typeof window<"u"&&"HTMLElement"in window,$k=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),nl=Object.freeze([]),li=Object.freeze({});function Fk(e,t,n){return n===void 0&&(n=li),e.theme!==n.theme&&e.theme||t||n.theme}var cy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bk=/(^-|-$)/g;function yp(e){return e.replace(Vk,"-").replace(Bk,"")}var Uk=/(a)(d)/gi,xp=function(e){return String.fromCharCode(e+(e>25?39:97))};function pc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xp(t%52)+n;return(xp(t%52)+n).replace(Uk,"$1-$2")}var Wl,_r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fy=function(e){return _r(5381,e)};function dy(e){return pc(fy(e)>>>0)}function Wk(e){return e.displayName||e.name||"Component"}function Hl(e){return typeof e=="string"&&!0}var hy=typeof Symbol=="function"&&Symbol.for,py=hy?Symbol.for("react.memo"):60115,Hk=hy?Symbol.for("react.forward_ref"):60112,Yk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},my={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kk=((Wl={})[Hk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wl[py]=my,Wl);function wp(e){return("type"in(t=e)&&t.type.$$typeof)===py?my:"$$typeof"in e?Kk[e.$$typeof]:Yk;var t}var Xk=Object.defineProperty,Qk=Object.getOwnPropertyNames,Sp=Object.getOwnPropertySymbols,qk=Object.getOwnPropertyDescriptor,Zk=Object.getPrototypeOf,kp=Object.prototype;function gy(e,t,n){if(typeof t!="string"){if(kp){var r=Zk(t);r&&r!==kp&&gy(e,r,n)}var i=Qk(t);Sp&&(i=i.concat(Sp(t)));for(var o=wp(e),s=wp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Gk||n&&n[l]||s&&l in s||o&&l in o)){var u=qk(t,l);try{Xk(e,l,u)}catch{}}}}return e}function ui(e){return typeof e=="function"}function nd(e){return typeof e=="object"&&"styledComponentId"in e}function tr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ro(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gc(e,t,n){if(n===void 0&&(n=!1),!n&&!Ro(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gc(e[r],t[r]);else if(Ro(t))for(var r in t)e[r]=gc(e[r],t[r]);return e}function rd(e,t){Object.defineProperty(e,"toString",{value:t})}function Ho(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ho(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),Vs=new Map,ka=new Map,Yl=1,xs=function(e){if(Vs.has(e))return Vs.get(e);for(;ka.has(Yl);)Yl++;var t=Yl++;return Vs.set(e,t),ka.set(t,e),t},eC=function(e,t){Vs.set(e,t),ka.set(t,e)},tC="style[".concat(ai,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),nC=new RegExp("^".concat(ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},iC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(nC);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(eC(c,u),rC(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function oC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ai,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ai,"active"),r.setAttribute("data-styled-version","6.0.8");var s=oC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},sC=function(){function e(t){this.element=vy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Ho(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),aC=function(){function e(t){this.element=vy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),lC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cp=td,uC={isServer:!td,useCSSOMInjection:!$k},yy=function(){function e(t,n,r){t===void 0&&(t=li),n===void 0&&(n={});var i=this;this.options=He(He({},uC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&td&&Cp&&(Cp=!1,function(o){for(var s=document.querySelectorAll(tC),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ai)!=="active"&&(iC(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),rd(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(p){return ka.get(p)}(f);if(d===void 0)return"continue";var m=o.names.get(d),y=s.getGroup(f);if(m===void 0||y.length===0)return"continue";var x="".concat(ai,".g").concat(f,'[id="').concat(d,'"]'),S="";m!==void 0&&m.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(y).concat(x,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return xs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(He(He({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new lC(i):r?new sC(i):new aC(i)}(this.options),new Jk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(xs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(xs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(xs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cC=/&/g,fC=/^\s*\/\/.*$/gm;function xy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xy(n.children,t)),n})}function dC(e){var t,n,r,i=e===void 0?li:e,o=i.options,s=o===void 0?li:o,a=i.plugins,l=a===void 0?nl:a,u=function(d,m,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===Za&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(cC,n).replace(r,u))}),s.prefix&&c.push(_k),c.push(Ok);var f=function(d,m,y,x){m===void 0&&(m=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=d.replace(fC,""),p=Ik(y||m?"".concat(y," ").concat(m," { ").concat(S," }"):S);s.namespace&&(p=xy(p,s.namespace));var h=[];return Sa(p,Nk(c.concat(Dk(function(g){return h.push(g)})))),h};return f.hash=l.length?l.reduce(function(d,m){return m.name||Ho(15),_r(d,m.name)},5381).toString():"",f}var hC=new yy,vc=dC(),wy=en.createContext({shouldForwardProp:void 0,styleSheet:hC,stylis:vc});wy.Consumer;en.createContext(void 0);function bp(){return w.useContext(wy)}var Sy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=vc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,rd(this,function(){throw Ho(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=vc),this.name+t.hash},e}(),pC=function(e){return e>="A"&&e<="Z"};function Pp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;pC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ky=function(e){return e==null||e===!1||e===""},Cy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!ky(o)&&(Array.isArray(o)&&o.isCss||ui(o)?r.push("".concat(Pp(i),":"),o,";"):Ro(o)?r.push.apply(r,jo(jo(["".concat(i," {")],Cy(o),!1),["}"],!1)):r.push("".concat(Pp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in zk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ar(e,t,n,r){if(ky(e))return[];if(nd(e))return[".".concat(e.styledComponentId)];if(ui(e)){if(!ui(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ar(i,t,n,r)}var o;return e instanceof Sy?n?(e.inject(n,r),[e.getName(r)]):[e]:Ro(e)?Cy(e):Array.isArray(e)?Array.prototype.concat.apply(nl,e.map(function(s){return ar(s,t,n,r)})):[e.toString()]}function mC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ui(n)&&!nd(n))return!1}return!0}var gC=fy("6.0.8"),vC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mC(t),this.componentId=n,this.baseHash=_r(gC,n),this.baseStyle=r,yy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=tr(i,this.staticRulesId);else{var o=mc(ar(this.rules,t,n,r)),s=pc(_r(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=tr(i,s),this.staticRulesId=s}else{for(var l=_r(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=mc(ar(f,t,n,r));l=_r(l,d+c),u+=d}}if(u){var m=pc(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=tr(i,m)}}return i},e}(),by=en.createContext(void 0);by.Consumer;var Gl={};function yC(e,t,n){var r=nd(e),i=e,o=!Hl(e),s=t.attrs,a=s===void 0?nl:s,l=t.componentId,u=l===void 0?function(g,C){var k=typeof g!="string"?"sc":yp(g);Gl[k]=(Gl[k]||0)+1;var b="".concat(k,"-").concat(dy("6.0.8"+k+Gl[k]));return C?"".concat(C,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(g){return Hl(g)?"styled.".concat(g):"Styled(".concat(Wk(g),")")}(e);var f=t.displayName&&t.componentId?"".concat(yp(t.displayName),"-").concat(t.componentId):t.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(g,C){return y(g,C)&&x(g,C)}}else m=y}var S=new vC(n,f,r?i.componentStyle:void 0);function p(g,C){return function(k,b,P){var T=k.attrs,_=k.componentStyle,R=k.defaultProps,F=k.foldedComponentIds,Ve=k.styledComponentId,Be=k.target,je=en.useContext(by),Wt=bp(),Qe=k.shouldForwardProp||Wt.shouldForwardProp,U=function(qe,Q,xe){for(var me,Pe=He(He({},Q),{className:void 0,theme:xe}),Ht=0;Ht<qe.length;Ht+=1){var cn=ui(me=qe[Ht])?me(Pe):me;for(var lt in cn)Pe[lt]=lt==="className"?tr(Pe[lt],cn[lt]):lt==="style"?He(He({},Pe[lt]),cn[lt]):cn[lt]}return Q.className&&(Pe.className=tr(Pe.className,Q.className)),Pe}(T,b,Fk(b,je,R)||li),j=U.as||Be,O={};for(var N in U)U[N]===void 0||N[0]==="$"||N==="as"||N==="theme"||(N==="forwardedAs"?O.as=U.forwardedAs:Qe&&!Qe(N,j)||(O[N]=U[N]));var G=function(qe,Q){var xe=bp(),me=qe.generateAndInjectStyles(Q,xe.styleSheet,xe.stylis);return me}(_,U),X=tr(F,Ve);return G&&(X+=" "+G),U.className&&(X+=" "+U.className),O[Hl(j)&&!cy.has(j)?"class":"className"]=X,O.ref=P,w.createElement(j,O)}(h,g,C)}var h=en.forwardRef(p);return h.attrs=d,h.componentStyle=S,h.shouldForwardProp=m,h.foldedComponentIds=r?tr(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=f,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(C){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var P=0,T=k;P<T.length;P++)gc(C,T[P],!0);return C}({},i.defaultProps,g):g}}),rd(h,function(){return".".concat(h.styledComponentId)}),o&&gy(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Tp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ep=function(e){return Object.assign(e,{isCss:!0})};function rl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ui(e)||Ro(e)){var r=e;return Ep(ar(Tp(nl,jo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ar(i):Ep(ar(Tp(i,t)))}function yc(e,t,n){if(n===void 0&&(n=li),!t)throw Ho(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,rl.apply(void 0,jo([i],o,!1)))};return r.attrs=function(i){return yc(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yc(e,t,He(He({},n),i))},r}var Py=function(e){return yc(yC,e)},E=Py;cy.forEach(function(e){E[e]=Py(e)});function K(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mc(rl.apply(void 0,jo([e],t,!1))),i=dy(r);return new Sy(i,r)}const Ty=w.createContext(),xC=({children:e})=>{const[t,n]=w.useState(!1);return v.jsx(Ty.Provider,{value:{buttonFade:t,setButtonFade:n},children:e})},wC=()=>w.useContext(Ty),Ap=()=>{};let id={},Ey={},Ay=null,jy={mark:Ap,measure:Ap};try{typeof window<"u"&&(id=window),typeof document<"u"&&(Ey=document),typeof MutationObserver<"u"&&(Ay=MutationObserver),typeof performance<"u"&&(jy=performance)}catch{}const{userAgent:jp=""}=id.navigator||{},Dn=id,te=Ey,Rp=Ay,ws=jy;Dn.document;const un=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Ry=~jp.indexOf("MSIE")||~jp.indexOf("Trident/");var re="classic",My="duotone",tt="sharp",nt="sharp-duotone",SC=[re,My,tt,nt],kC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Mp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},CC=["kit"],bC=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,PC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,TC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},EC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},AC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},jC={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},RC={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},MC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Iy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},IC=["solid","regular","light","thin","duotone","brands"],Ly=[1,2,3,4,5,6,7,8,9,10],LC=Ly.concat([11,12,13,14,15,16,17,18,19,20]),Fi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},OC=[...Object.keys(jC),...IC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fi.GROUP,Fi.SWAP_OPACITY,Fi.PRIMARY,Fi.SECONDARY].concat(Ly.map(e=>"".concat(e,"x"))).concat(LC.map(e=>"w-".concat(e))),NC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},DC={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_C={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ip={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const sn="___FONT_AWESOME___",xc=16,Oy="fa",Ny="svg-inline--fa",gr="data-fa-i2svg",wc="data-fa-pseudo-element",zC="data-fa-pseudo-element-pending",od="data-prefix",sd="data-icon",Lp="fontawesome-i2svg",$C="async",FC=["HTML","HEAD","STYLE","SCRIPT"],Dy=(()=>{try{return!0}catch{return!1}})(),_y=[re,tt,nt];function Yo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[re]}})}const zy={...Iy};zy[re]={...Iy[re],...Mp.kit,...Mp["kit-duotone"]};const lr=Yo(zy),Sc={...MC};Sc[re]={...Sc[re],...Ip.kit,...Ip["kit-duotone"]};const Mo=Yo(Sc),kc={...RC};kc[re]={...kc[re],..._C.kit};const ur=Yo(kc),Cc={...AC};Cc[re]={...Cc[re],...DC.kit};const VC=Yo(Cc),BC=bC,$y="fa-layers-text",UC=PC,WC={...kC};Yo(WC);const HC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kl=Fi,ci=new Set;Object.keys(Mo[re]).map(ci.add.bind(ci));Object.keys(Mo[tt]).map(ci.add.bind(ci));Object.keys(Mo[nt]).map(ci.add.bind(ci));const YC=[...CC,...OC],no=Dn.FontAwesomeConfig||{};function GC(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function KC(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}te&&typeof te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=KC(GC(n));i!=null&&(no[r]=i)});const Fy={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oy,replacementClass:Ny,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};no.familyPrefix&&(no.cssPrefix=no.familyPrefix);const fi={...Fy,...no};fi.autoReplaceSvg||(fi.observeMutations=!1);const L={};Object.keys(Fy).forEach(e=>{Object.defineProperty(L,e,{enumerable:!0,set:function(t){fi[e]=t,ro.forEach(n=>n(L))},get:function(){return fi[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){fi.cssPrefix=e,ro.forEach(t=>t(L))},get:function(){return fi.cssPrefix}});Dn.FontAwesomeConfig=L;const ro=[];function XC(e){return ro.push(e),()=>{ro.splice(ro.indexOf(e),1)}}const dn=xc,Nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function QC(e){if(!e||!un)return;const t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return te.head.insertBefore(t,r),e}const qC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Io(){let e=12,t="";for(;e-- >0;)t+=qC[Math.random()*62|0];return t}function wi(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ad(e){return e.classList?wi(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Vy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ZC(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Vy(e[n]),'" '),"").trim()}function il(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ld(e){return e.size!==Nt.size||e.x!==Nt.x||e.y!==Nt.y||e.rotate!==Nt.rotate||e.flipX||e.flipY}function JC(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function eb(e){let{transform:t,width:n=xc,height:r=xc,startCentered:i=!1}=e,o="";return i&&Ry?o+="translate(".concat(t.x/dn-n/2,"em, ").concat(t.y/dn-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/dn,"em), calc(-50% + ").concat(t.y/dn,"em)) "):o+="translate(".concat(t.x/dn,"em, ").concat(t.y/dn,"em) "),o+="scale(".concat(t.size/dn*(t.flipX?-1:1),", ").concat(t.size/dn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var tb=`:root, :host {
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
}`;function By(){const e=Oy,t=Ny,n=L.cssPrefix,r=L.replacementClass;let i=tb;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Op=!1;function Xl(){L.autoAddCss&&!Op&&(QC(By()),Op=!0)}var nb={mixout(){return{dom:{css:By,insertCss:Xl}}},hooks(){return{beforeDOMElementCreation(){Xl()},beforeI2svg(){Xl()}}}};const an=Dn||{};an[sn]||(an[sn]={});an[sn].styles||(an[sn].styles={});an[sn].hooks||(an[sn].hooks={});an[sn].shims||(an[sn].shims=[]);var Dt=an[sn];const Uy=[],Wy=function(){te.removeEventListener("DOMContentLoaded",Wy),Ca=1,Uy.map(e=>e())};let Ca=!1;un&&(Ca=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),Ca||te.addEventListener("DOMContentLoaded",Wy));function rb(e){un&&(Ca?setTimeout(e,0):Uy.push(e))}function Go(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Vy(e):"<".concat(t," ").concat(ZC(n),">").concat(r.map(Go).join(""),"</").concat(t,">")}function Np(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ib=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Ql=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?ib(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function ob(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function bc(e){const t=ob(e);return t.length===1?t[0].toString(16):null}function sb(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Dp(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pc(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Dp(t);typeof Dt.hooks.addPack=="function"&&!r?Dt.hooks.addPack(e,Dp(t)):Dt.styles[e]={...Dt.styles[e]||{},...i},e==="fas"&&Pc("fa",t)}const{styles:qn,shims:ab}=Dt,lb={[re]:Object.values(ur[re]),[tt]:Object.values(ur[tt]),[nt]:Object.values(ur[nt])};let ud=null,Hy={},Yy={},Gy={},Ky={},Xy={};const ub={[re]:Object.keys(lr[re]),[tt]:Object.keys(lr[tt]),[nt]:Object.keys(lr[nt])};function cb(e){return~YC.indexOf(e)}function fb(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!cb(i)?i:null}const Qy=()=>{const e=r=>Ql(qn,(i,o,s)=>(i[s]=Ql(o,r,{}),i),{});Hy=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Yy=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),Xy=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in qn||L.autoFetchSvg,n=Ql(ab,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Gy=n.names,Ky=n.unicodes,ud=ol(L.styleDefault,{family:L.familyDefault})};XC(e=>{ud=ol(e.styleDefault,{family:L.familyDefault})});Qy();function cd(e,t){return(Hy[e]||{})[t]}function db(e,t){return(Yy[e]||{})[t]}function Pn(e,t){return(Xy[e]||{})[t]}function qy(e){return Gy[e]||{prefix:null,iconName:null}}function hb(e){const t=Ky[e],n=cd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return ud}const fd=()=>({prefix:null,iconName:null,rest:[]});function ol(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=re}=t,r=lr[n][e],i=Mo[n][e]||Mo[n][r],o=e in Dt.styles?e:null;return i||o||null}const pb={[re]:Object.keys(ur[re]),[tt]:Object.keys(ur[tt]),[nt]:Object.keys(ur[nt])};function sl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[re]:"".concat(L.cssPrefix,"-").concat(re),[tt]:"".concat(L.cssPrefix,"-").concat(tt),[nt]:"".concat(L.cssPrefix,"-").concat(nt)};let i=null,o=re;const s=SC.filter(l=>l!==My);s.forEach(l=>{(e.includes(r[l])||e.some(u=>pb[l].includes(u)))&&(o=l)});const a=e.reduce((l,u)=>{const c=fb(L.cssPrefix,u);if(qn[u]?(u=lb[o].includes(u)?VC[o][u]:u,i=u,l.prefix=u):ub[o].indexOf(u)>-1?(i=u,l.prefix=ol(u,{family:o})):c?l.iconName=c:u!==L.replacementClass&&!s.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=i==="fa"?qy(l.iconName):{},d=Pn(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!qn.far&&qn.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},fd());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===tt&&(qn.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=Pn(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===nt&&(qn.fasds||L.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Pn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=_n()||"fas"),a}class mb{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Pc(o,i[o]);const s=ur[re][o];s&&Pc(s,i[o]),Qy()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}}let _p=[],zr={};const qr={},gb=Object.keys(qr);function vb(e,t){let{mixoutsTo:n}=t;return _p=e,zr={},Object.keys(qr).forEach(r=>{gb.indexOf(r)===-1&&delete qr[r]}),_p.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{zr[s]||(zr[s]=[]),zr[s].push(o[s])})}r.provides&&r.provides(qr)}),n}function Tc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(zr[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(zr[e]||[]).forEach(o=>{o.apply(null,n)})}function zn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qr[e]?qr[e].apply(null,t):void 0}function Ec(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||_n();if(t)return t=Pn(n,t)||t,Np(Zy.definitions,n,t)||Np(Dt.styles,n,t)}const Zy=new mb,yb=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,vr("noAuto")},xb={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return un?(vr("beforeI2svg",e),zn("pseudoElements2svg",e),zn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,rb(()=>{Sb({autoReplaceSvgRoot:t}),vr("watch",e)})}},wb={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Pn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ol(e[0]);return{prefix:n,iconName:Pn(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(BC))){const t=sl(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||_n(),iconName:Pn(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=_n();return{prefix:t,iconName:Pn(t,e)||e}}}},at={noAuto:yb,config:L,dom:xb,parse:wb,library:Zy,findIconDefinition:Ec,toHtml:Go},Sb=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=te}=e;(Object.keys(Dt.styles).length>0||L.autoFetchSvg)&&un&&L.autoReplaceSvg&&at.dom.i2svg({node:t})};function al(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Go(n))}}),Object.defineProperty(e,"node",{get:function(){if(!un)return;const n=te.createElement("div");return n.innerHTML=e.html,n.children}}),e}function kb(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(ld(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=il({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Cb(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function dd(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:u,extra:c,watchable:f=!1}=e,{width:d,height:m}=n.found?n:t,y=r==="fak",x=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(k=>c.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(c.classes).join(" ");let S={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:x,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)}};const p=y&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};f&&(S.attributes[gr]=""),a&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Io())},children:[a]}),delete S.attributes.title);const h={...S,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...p,...c.styles}},{children:g,attributes:C}=n.found&&t.found?zn("generateAbstractMask",h)||{children:[],attributes:{}}:zn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=g,h.attributes=C,s?Cb(h):kb(h)}function zp(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[gr]="");const u={...s.styles};ld(i)&&(u.transform=eb({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=il(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function bb(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=il(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ql}=Dt;function Ac(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Kl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Kl.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Kl.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const Pb={found:!1,width:512,height:512};function Tb(e,t){!Dy&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jc(e,t){let n=t;return t==="fa"&&L.styleDefault!==null&&(t=_n()),new Promise((r,i)=>{if(n==="fa"){const o=qy(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ql[t]&&ql[t][e]){const o=ql[t][e];return r(Ac(o))}Tb(e,t),r({...Pb,icon:L.showMissingIcons&&e?zn("missingIconAbstract")||{}:{}})})}const $p=()=>{},Rc=L.measurePerformance&&ws&&ws.mark&&ws.measure?ws:{mark:$p,measure:$p},Vi='FA "6.6.0"',Eb=e=>(Rc.mark("".concat(Vi," ").concat(e," begins")),()=>Jy(e)),Jy=e=>{Rc.mark("".concat(Vi," ").concat(e," ends")),Rc.measure("".concat(Vi," ").concat(e),"".concat(Vi," ").concat(e," begins"),"".concat(Vi," ").concat(e," ends"))};var hd={begin:Eb,end:Jy};const Bs=()=>{};function Fp(e){return typeof(e.getAttribute?e.getAttribute(gr):null)=="string"}function Ab(e){const t=e.getAttribute?e.getAttribute(od):null,n=e.getAttribute?e.getAttribute(sd):null;return t&&n}function jb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function Rb(){return L.autoReplaceSvg===!0?Us.replace:Us[L.autoReplaceSvg]||Us.replace}function Mb(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Ib(e){return te.createElement(e)}function e1(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Mb:Ib}=t;if(typeof e=="string")return te.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(e1(o,{ceFn:n}))}),r}function Lb(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Us={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(e1(n),t)}),t.getAttribute(gr)===null&&L.keepOriginalSource){let n=te.createComment(Lb(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ad(t).indexOf(L.replacementClass))return Us.replace(e);const r=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===L.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Go(o)).join(`
`);t.setAttribute(gr,""),t.innerHTML=i}};function Vp(e){e()}function t1(e,t){const n=typeof t=="function"?t:Bs;if(e.length===0)n();else{let r=Vp;L.mutateApproach===$C&&(r=Dn.requestAnimationFrame||Vp),r(()=>{const i=Rb(),o=hd.begin("mutate");e.map(i),o(),n()})}}let pd=!1;function n1(){pd=!0}function Mc(){pd=!1}let ba=null;function Bp(e){if(!Rp||!L.observeMutations)return;const{treeCallback:t=Bs,nodeCallback:n=Bs,pseudoElementsCallback:r=Bs,observeMutationsRoot:i=te}=e;ba=new Rp(o=>{if(pd)return;const s=_n();wi(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Fp(a.addedNodes[0])&&(L.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&L.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Fp(a.target)&&~HC.indexOf(a.attributeName))if(a.attributeName==="class"&&Ab(a.target)){const{prefix:l,iconName:u}=sl(ad(a.target));a.target.setAttribute(od,l||s),u&&a.target.setAttribute(sd,u)}else jb(a.target)&&n(a.target)})}),un&&ba.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ob(){ba&&ba.disconnect()}function Nb(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function Db(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=sl(ad(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=db(i.prefix,e.innerText)||cd(i.prefix,bc(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function _b(e){const t=wi(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Io()):(t["aria-hidden"]="true",t.focusable="false")),t}function zb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Up(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Db(e),o=_b(e),s=Tc("parseNodeAttributes",{},e);let a=t.styleParser?Nb(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:$b}=Dt;function r1(e){const t=L.autoReplaceSvg==="nest"?Up(e,{styleParser:!1}):Up(e);return~t.extra.classes.indexOf($y)?zn("generateLayersText",e,t):zn("generateSvgReplacementMutation",e,t)}let Bt=new Set;_y.map(e=>{Bt.add("fa-".concat(e))});Object.keys(lr[re]).map(Bt.add.bind(Bt));Object.keys(lr[tt]).map(Bt.add.bind(Bt));Object.keys(lr[nt]).map(Bt.add.bind(Bt));Bt=[...Bt];function Wp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!un)return Promise.resolve();const n=te.documentElement.classList,r=c=>n.add("".concat(Lp,"-").concat(c)),i=c=>n.remove("".concat(Lp,"-").concat(c)),o=L.autoFetchSvg?Bt:_y.map(c=>"fa-".concat(c)).concat(Object.keys($b));o.includes("fa")||o.push("fa");const s=[".".concat($y,":not([").concat(gr,"])")].concat(o.map(c=>".".concat(c,":not([").concat(gr,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=wi(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=hd.begin("onTree"),u=a.reduce((c,f)=>{try{const d=r1(f);d&&c.push(d)}catch(d){Dy||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(d=>{t1(d,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(d=>{l(),f(d)})})}function Fb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r1(e).then(n=>{n&&t1([n],t)})}function Vb(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ec(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ec(i||{})),e(r,{...n,mask:i})}}const Bb=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Nt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:m}=e;return al({type:"icon",...e},()=>(vr("beforeDOMElementCreation",{iconDefinition:e,params:t}),L.autoA11y&&(s?u["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(a||Io()):(u["aria-hidden"]="true",u.focusable="false")),dd({icons:{main:Ac(m),mask:i?Ac(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...Nt,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var Ub={mixout(){return{icon:Vb(Bb)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Wp,e.nodeCallback=Fb,e}}},provides(e){e.i2svg=function(t){const{node:n=te,callback:r=()=>{}}=t;return Wp(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((d,m)=>{Promise.all([jc(r,s),u.iconName?jc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,S]=y;d([t,dd({icons:{main:x,mask:S},prefix:s,iconName:r,transform:a,symbol:l,maskId:c,title:i,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=il(s);a.length>0&&(r.style=a);let l;return ld(o)&&(l=zn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},Wb={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return al({type:"layer"},()=>{vr("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Hb={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return al({type:"counter",content:e},()=>(vr("beforeDOMElementCreation",{content:e,params:t}),bb({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(L.cssPrefix,"-layers-counter"),...r]}})))}}}},Yb={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Nt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return al({type:"text",content:e},()=>(vr("beforeDOMElementCreation",{content:e,params:t}),zp({content:e,transform:{...Nt,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(L.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(Ry){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/l,a=u.height/l}return L.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,zp({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const Gb=new RegExp('"',"ug"),Hp=[1105920,1112319],Yp={FontAwesome:{normal:"fas",400:"fas"},...EC,...TC,...NC},Ic=Object.keys(Yp).reduce((e,t)=>(e[t.toLowerCase()]=Yp[t],e),{}),Kb=Object.keys(Ic).reduce((e,t)=>{const n=Ic[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Xb(e){const t=e.replace(Gb,""),n=sb(t,0),r=n>=Hp[0]&&n<=Hp[1],i=t.length===2?t[0]===t[1]:!1;return{value:bc(i?t[0]:t),isSecondary:r||i}}function Qb(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Ic[n]||{})[i]||Kb[n]}function Gp(e,t){const n="".concat(zC).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=wi(e.children).filter(d=>d.getAttribute(wc)===t)[0],a=Dn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(UC),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let m=Qb(l,c);const{value:y,isSecondary:x}=Xb(d),S=u[0].startsWith("FontAwesome");let p=cd(m,y),h=p;if(S){const g=hb(y);g.iconName&&g.prefix&&(p=g.iconName,m=g.prefix)}if(p&&!x&&(!s||s.getAttribute(od)!==m||s.getAttribute(sd)!==h)){e.setAttribute(n,h),s&&e.removeChild(s);const g=zb(),{extra:C}=g;C.attributes[wc]=t,jc(p,m).then(k=>{const b=dd({...g,icons:{main:k,mask:fd()},prefix:m,iconName:h,extra:C,watchable:!0}),P=te.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=b.map(T=>Go(T)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function qb(e){return Promise.all([Gp(e,"::before"),Gp(e,"::after")])}function Zb(e){return e.parentNode!==document.head&&!~FC.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Kp(e){if(un)return new Promise((t,n)=>{const r=wi(e.querySelectorAll("*")).filter(Zb).map(qb),i=hd.begin("searchPseudoElements");n1(),Promise.all(r).then(()=>{i(),Mc(),t()}).catch(()=>{i(),Mc(),n()})})}var Jb={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Kp,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=te}=t;L.searchPseudoElements&&Kp(n)}}};let Xp=!1;var e3={mixout(){return{dom:{unwatch(){n1(),Xp=!0}}}},hooks(){return{bootstrap(){Bp(Tc("mutationObserverCallbacks",{}))},noAuto(){Ob()},watch(e){const{observeMutationsRoot:t}=e;Xp?Mc():Bp(Tc("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Qp=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var t3={mixout(){return{parse:{transform:e=>Qp(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Qp(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:c,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Zl={x:0,y:0,width:"100%",height:"100%"};function qp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function n3(e){return e.tag==="g"?e.children:[e]}var r3={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?sl(n.split(" ").map(i=>i.trim())):fd();return r.prefix||(r.prefix=_n()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:u}=i,{width:c,icon:f}=o,d=JC({transform:a,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:{...Zl,fill:"white"}},y=u.children?{children:u.children.map(qp)}:{},x={tag:"g",attributes:{...d.inner},children:[qp({tag:u.tag,attributes:{...u.attributes,...d.path},...y})]},S={tag:"g",attributes:{...d.outer},children:[x]},p="mask-".concat(s||Io()),h="clip-".concat(s||Io()),g={tag:"mask",attributes:{...Zl,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,S]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:n3(f)},g]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...Zl}}),{children:n,attributes:r}}}},i3={provides(e){let t=!1;Dn.matchMedia&&(t=Dn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},o3={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},s3=[nb,Ub,Wb,Hb,Yb,Jb,e3,t3,r3,i3,o3];vb(s3,{mixoutsTo:at});at.noAuto;at.config;at.library;at.dom;const Lc=at.parse;at.findIconDefinition;at.toHtml;const a3=at.icon;at.layer;at.text;at.counter;var i1={exports:{}},l3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",u3=l3,c3=u3;function o1(){}function s1(){}s1.resetWarningCache=o1;var f3=function(){function e(r,i,o,s,a,l){if(l!==c3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s1,resetWarningCache:o1};return n.PropTypes=n,n};i1.exports=f3();var d3=i1.exports;const I=Og(d3);function Zp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zp(Object(n),!0).forEach(function(r){$r(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pa(e){"@babel/helpers - typeof";return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pa(e)}function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function p3(e,t){if(e==null)return{};var n=h3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oc(e){return m3(e)||g3(e)||v3(e)||y3()}function m3(e){if(Array.isArray(e))return Nc(e)}function g3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function v3(e,t){if(e){if(typeof e=="string")return Nc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nc(e,t)}}function Nc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x3(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,m=e.inverse,y=e.border,x=e.listItem,S=e.flip,p=e.size,h=e.rotation,g=e.pull,C=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":x,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},$r(t,"fa-".concat(p),typeof p<"u"&&p!==null),$r(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),$r(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),$r(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(k){return C[k]?k:null}).filter(function(k){return k})}function w3(e){return e=e-0,e===e}function a1(e){return w3(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var S3=["style"];function k3(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C3(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=a1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[k3(i)]=o:t[i]=o,t},{})}function l1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return l1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=C3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[a1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=p3(n,S3);return i.attrs.style=Lt(Lt({},i.attrs.style),s),e.apply(void 0,[t.tag,Lt(Lt({},i.attrs),a)].concat(Oc(r)))}var u1=!1;try{u1=!0}catch{}function b3(){if(!u1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jp(e){if(e&&Pa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Lc.icon)return Lc.icon(e);if(e===null)return null;if(e&&Pa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Jl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$r({},e,t):{}}var em={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ne=en.forwardRef(function(e,t){var n=Lt(Lt({},em),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,u=n.maskId,c=Jp(r),f=Jl("classes",[].concat(Oc(x3(n)),Oc((s||"").split(" ")))),d=Jl("transform",typeof n.transform=="string"?Lc.transform(n.transform):n.transform),m=Jl("mask",Jp(i)),y=a3(c,Lt(Lt(Lt(Lt({},f),d),m),{},{symbol:o,title:a,titleId:l,maskId:u}));if(!y)return b3("Could not find icon",c),null;var x=y.abstract,S={ref:t};return Object.keys(n).forEach(function(p){em.hasOwnProperty(p)||(S[p]=n[p])}),P3(x[0],S)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};var P3=l1.bind(null,en.createElement);const T3={prefix:"far",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"]},E3=({logo:e})=>{const t=()=>{switch(e){case 1:return v.jsxs("div",{style:wt.cleaningContainer,children:[v.jsx("div",{style:wt.dust,children:"Dust"}),v.jsx("div",{style:wt.busters,children:"Busters"})]});case 2:return v.jsxs("div",{style:wt.dashboard,children:[v.jsx("span",{style:{color:"var(--light-blueish)"},children:"/"}),"Daily Helper",v.jsx("span",{style:{color:"var(--light-blueish)"},children:"/"})," "]});case 3:return v.jsx("div",{style:wt.soleSoul,children:"SoleSoul.com"});case 4:return v.jsxs("div",{style:wt.chatContainer,children:[v.jsx("div",{style:wt.classChat,children:"Class"}),v.jsxs("div",{style:wt.chatRow,children:[v.jsx("div",{style:{...wt.classChat,marginLeft:"55px"},children:"Chat"}),v.jsx(Ne,{style:wt.chatIcon,icon:T3})]})]});case 5:return v.jsx("div",{style:wt.movieNight,children:"Movie Night"});default:return null}};return v.jsx(A3,{children:t()})},A3=E.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: "Poppins";
`,wt={cleaningContainer:{display:"flex",width:"100%",padding:"10px",backgroundColor:"var(--dark)"},dust:{fontSize:"1.1em",color:"white",fontFamily:"Poppins"},busters:{fontSize:"1.1em",color:"#FFD530",fontFamily:"Poppins"},soleSoul:{fontSize:"1.2em",color:"var(--bisque)",fontFamily:"Righteous"},chatContainer:{display:"flex",flexDirection:"column",padding:"10px",borderRadius:"3px",marginRight:"30px"},classChat:{fontSize:"1.4em",color:"#F7ECE1",fontFamily:"Arial"},chatRow:{display:"flex",justifyContent:"center",marginTop:"-10px",gap:"5px"},chatIcon:{color:"var(--neon-green)",marginTop:"12px",fontStyle:"bold"},movieNight:{fontSize:"1.2em",fontFamily:"Righteous",color:"var(--bisque)",padding:"5px",border:"4px solid var(--bisque)",borderRadius:"10px",textShadow:`
            0 0 0.125em rgb(223, 58, 29),
            0 0 0.45em rgb(255, 42, 5)
        `,boxShadow:"0 0 0.2em"},dashboard:{fontSize:"1em",fontFamily:"Poppins",color:"var(--silver-light)"}},j3=({isVisible:e,delay:t,id:n})=>{let r;switch(n){case 1:r=1;break;case 2:r=2;break;case 3:r=3;break;case 4:r=4;break;case 5:r=5;break;default:r=void 0;break}return v.jsx(M3,{delay:t,style:{display:e?"block":"none"},children:v.jsx(E3,{logo:r})})},R3=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,M3=E.div`
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
  animation: ${R3} 0.3s ease-out forwards;
  animation-delay: ${({delay:e})=>e||"0s"};
  text-align: center;

  
  @media (max-width: 768px) {
    /* visibility: hidden; */
  }
    @media (max-width: 375px) {
      /* visibility: hidden; */
  }
`;function I3({id:e,path:t,title:n,label:r,type:i,color:o,backgroundColor:s,setCursorHoverColor:a,setIsHoveringCards:l}){const[u,c]=w.useState(!1),[f,d]=w.useState(!1),[m,y]=w.useState(!1),{setButtonFade:x}=wC(),S=Wo(),p=()=>{d(!0),y(!0),x(!0),l(!1);const h=setTimeout(()=>{d(!1),S(`/${t}`),x(!1)},800);return()=>{clearTimeout(h)}};return v.jsxs(N3,{children:[m&&v.jsx(F3,{style:{backgroundColor:f?s:""}}),v.jsx(D3,{children:v.jsxs(_3,{onClick:p,onKeyDown:h=>h.key==="Enter"&&p(),onFocus:()=>c(e),onBlur:()=>c(null),onMouseEnter:()=>{c(e),a(o),l(!0)},onMouseLeave:()=>{c(null),a("var(--darker)"),l(!1)},className:`${u===e?"hovered":""} ${f?"clicked":""}`,style:{backgroundColor:u===e?s:"",color:u===e?o:""},cursorHoverColor:o,children:[v.jsx(z3,{className:u===e?"fade-out":"fade-in",backgroundColor:s,children:i}),v.jsx($3,{className:u===e?"fade-out":"fade-in",backgroundColor:s,children:r}),window.innerWidth>480&&v.jsx(j3,{isVisible:u===e,id:e,delay:"0.3s"})," "]},e)})]})}const md=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,gd=K`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,tm=K`
0% {
  box-shadow: 0 0 0 var(--dark);
}
100% {
  box-shadow: 1vw 1vw var(--dark);
}
`,L3=K`
  0% {
    box-shadow: 1vw 1vw var(--dark);
  }
  100% {
    box-shadow: 0 0 0 var(--dark);
  }
`,O3=K`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(3);
  opacity: 1;
}
`,N3=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`,D3=E.div`
  position: relative;
`,_3=E.div.attrs({tabIndex:0})`
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
    animation: ${tm} 0.5s ease forwards;

    .title {
      animation: ${gd} 0.5s forwards;
    }

    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${L3} 0.8s ease forwards;

    .title {
      animation: ${md} 0.5s forwards;
    }
  }

  &:focus {
    outline: none;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${tm} 0.5s ease forwards;
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
`,z3=E.div`
  flex: 1;
  margin: 5px;
  margin-left: 10px;

  @media (max-width: 768px) and (min-width: 320px) {
    color: ${e=>e.backgroundColor};
  }

  &.fade-in {
    animation: ${md} 0.5s forwards;
  }

  &.fade-out {
    animation: ${gd} 0.5s forwards;
  }
`,$3=E.div`
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;

  &.fade-in {
    animation: ${md} 0.5s forwards;
  }

  &.fade-out {
    animation: ${gd} 0.5s forwards;
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
`,F3=E.div`
  position: absolute;
  width: 70%;
  height: 80%;
  border-radius: 50%;
  background-color: transparent;
  animation: ${O3} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 110;
  opacity: 1;
`;var V3={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},B3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wn={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},U3={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},W3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},H3={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Y3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const c1=w.createContext(),ll=({children:e})=>{const t=[{id:1,title:"Dust Busters",path:"cleaning",type:"Cleaning service",label:"React.js",color:"var(--dark)",backgroundColor:"var(--yellowish)",shadow:"var(--shadow-yellowish)",descriptions:{primary:"Embark on a journey with Dust Busters, an exceptional online platform meticulously hosted on Firebase. This website combines innovative front-end design with a robust back-end infrastructure, complemented by CRUD logic.",secondary:"Envision a React-based front-end that simplifies your experience, whether you're navigating bookings, securely logging in, or leaving insightful reviews. It's akin to having a highly efficient superhero dedicated to cleaning services, right at your fingertips.",tertiary:"Powered by Firebase's seamless hosting, Dust Busters delivers a fast, secure, and reliable online experience. Effortless cleanup, perfected for you!"},images:{browserImage:[{id:"1",src:"pageimages/dustbusters/1.png",info:"Welcome to the home of Dust Busters! Here you can find...",alt:"browser search"},{id:"2",src:"pageimages/dustbusters/2.png",info:"...our booking page..",alt:"browser pager"},{id:"3",src:"pageimages/dustbusters/dbBook.png",info:"...our booking form..",alt:"browser series"},{id:"4",src:"pageimages/dustbusters/dbLogin.png",info:"...and our login page!",alt:"browser series"},{id:"5",src:"pageimages/dustbusters/dbReviews.png",info:"Checkout our reviews!",alt:"browser series"}]},repos:[{browser:"https://github.com/jonaelghid3y/DustBusters",icon:v.jsx(Ne,{icon:Wn})},{website:"https://dustbusters-207c6.web.app/",icon:v.jsx(Ne,{icon:U3})}]},{id:2,title:"Daily Helper",path:"dashboard",type:"Dashboard",label:"Typescript, Next.js",color:"var(--light-blueish)",backgroundColor:"var(--shadow-blueish)",shadow:"var(--shadow-blueish)",descriptions:{primary:"This modern dashboard application is a comprehensive financial and productivity tool built with TypeScript and Next.js. It implements secure authentication using NextAuth.js for protected user access and data privacy. The app leverages React Aria's headless components for accessible, customizable UI elements, combining real-time stock tracking (Alpha Vantage API), weather updates, and news feeds with a task management system.",secondary:"Built with TypeScript for type safety and Tailwind CSS for styling, it offers a responsive interface with dark/light themes. The integration of NextAuth.js, React Aria components, and multiple APIs creates a secure, accessible platform for managing financial portfolios and daily tasks."},images:{browserImage:[{id:"1",src:"pageimages/dashboard/dashboardDark.png",info:"The dashboards homepage with integrated weather update, stock tracking and task tracking calendar.",alt:"browser search"},{id:"2",src:"pageimages/dashboard/dashboardLight.png",info:"Light mode version of the dashboard homepage.",alt:"browser search"},{id:"3",src:"pageimages/dashboard/dashboardFullCalendar.png",info:"Full calendar view with drag and drop functionality on the task management system.",alt:"browser search"},{id:"4",src:"pageimages/dashboard/dashboardNewsCategories.png",info:"News categories from the Public News API.",alt:"browser search"},{id:"5",src:"pageimages/dashboard/dashboardNewsArticles.png",info:"Choose your favorite news articles from the Public News API.",alt:"browser search"},{id:"6",src:"pageimages/dashboard/dashboardArticle.png",info:"Read the full article from the Public News API.",alt:"browser search"},{id:"7",src:"pageimages/dashboard/dashboardStocks.png",info:"Track your stocks with the Alpha Vantage API.",alt:"browser search"},{id:"8",src:"pageimages/dashboard/dashboardProfile.png",info:"Authenticated users can manage their own tasks and calendar.",alt:"browser search"}]},repos:[{browser:"https://github.com/starleafer/Dashboard",icon:v.jsx(Ne,{icon:Wn})}]},{id:3,title:"Sole Soul",path:"webbshop",type:"Web store",label:"React.js",color:"var(--bisque)",backgroundColor:"var(--greenish)",shadow:"var(--shadow-bisuqe)",descriptions:{primary:"Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!",secondary:"Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish!"},images:{browserImage:[{id:"1",src:"pageimages/webbshop/products.png",info:"Have a look at our products!",alt:"browser search"},{id:"2",src:"pageimages/webbshop/description.png",info:"And feel free to read more about them!",alt:"browser pager"},{id:"3",src:"pageimages/webbshop/cart.png",info:"Did you find something you like? Great! Add it to your cart!",alt:"browser series"},{id:"4",src:"pageimages/webbshop/create.png",info:"Are you an admin? Cool! You can create new products here!",alt:"browser series"},{id:"5",src:"pageimages/webbshop/admin.png",info:"And you can also manage your products here!",alt:"browser pager"}]},repos:[{browser:"https://github.com/tobionesies/gruppuppgift-webshop-let",icon:v.jsx(Ne,{icon:Wn})}]},{id:4,title:"Class Chat",path:"chatapp",type:"Chat app",label:"React Native",color:"var(--neon-green)",backgroundColor:"var(--light-purple)",shadow:"var(--shadow-neon-green)",descriptions:{primary:"Class Chat serves as a dedicated platform for group communication, meticulously designed to facilitate smooth interaction within your class or group. Leveraging CRUD logic (Create, Read, Update, Delete), it efficiently manages users and messages, ensuring easy collaboration. Security is paramount, with the implementation of a secure access token mechanism, allowing only authorized individuals to join the conversation.",secondary:"Whether you're in a classroom setting or simply spending time with your friends, Class Chat provides a comprehensive solution for your communication needs. The platform empowers you to create a dynamic and engaging space for your group, giving you control over participants and content. Here's to hassle-free communication!"},images:{nativeImage:[{id:"1",src:"pageimages/chatapp/login.jpg",info:"Welcome to Class Chat! Login to get started!",alt:"browser search"},{id:"2",src:"pageimages/chatapp/registeruser.jpg",info:"Register a new user!",alt:"browser pager"},{id:"3",src:"pageimages/chatapp/chat.jpg",info:"Start chatting with your friends!",alt:"browser series"},{id:"4",src:"pageimages/chatapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"5",src:"pageimages/chatapp/profile.jpg",info:"Check out your profile!",alt:"browser series"},{id:"6",src:"pageimages/chatapp/photo.jpg",info:"Upload a profile picture!",alt:"browser series"},{id:"7",src:"pageimages/chatapp/profilephoto.jpg",info:"And you can also upload a profile picture!",alt:"browser series"},{id:"8",src:"pageimages/chatapp/chatphoto.jpg",info:"Cool!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/ClassChat",icon:v.jsx(Ne,{icon:Wn})}]},{id:5,title:"Movie Night",path:"movieapp",type:"Movie browser",label:"React.js / React Native",color:"var(--redish)",backgroundColor:"var(--darker)",shadow:"var(--shadow-redish)",descriptions:{primary:"Welcome to Movie Night, where we've got your movie cravings covered effortlessly with the OMDb API. Dive into a treasure trove of movie details, spanning from classic gems to the latest blockbusters. Get the info on titles, release dates, genres, casts, runtimes, ratings, and more.",secondary:"The magic doesn't stop there! With the power-packed combo of React and React Native, Movie Night ensures a seamless experience across different platforms. Whether you're chilling on the web version (courtesy of React) or enjoying the mobile app (crafted with React Native) on your smartphones and tablets, movie exploration has never been this effortless. Time to let the movie marathon begin!"},images:{browserImage:[{id:"1",src:"pageimages/movieapp/browserSearch.png",info:"Time for a movie night! Search for your favorite movie!",alt:"browser search"},{id:"2",src:"pageimages/movieapp/browserPager.png",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"pageimages/movieapp/browserSerier.png",info:"Or is it a series you're looking for? We've got you covered!",alt:"browser series"}],nativeImage:[{id:"1",src:"pageimages/movieapp/login.jpg",info:"Welcome to Movie Night! Login to get started!",alt:"browser search"},{id:"2",src:"pageimages/movieapp/movielist.jpg",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"pageimages/movieapp/movieinfo.jpg",info:"Check out the details of your favorite movie!",alt:"browser series"},{id:"4",src:"pageimages/movieapp/search.jpg",info:"Search for your favorite movie!",alt:"browser series"},{id:"5",src:"pageimages/movieapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"6",src:"pageimages/movieapp/mypage.jpg",info:"Check out your profile!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/The-movie-app",icon:v.jsx(Ne,{icon:Wn})},{native:"https://github.com/starleafer/The-Movie-App-Native",icon:v.jsx(Ne,{icon:Wn})}]}],n={id:1,title:"About me",path:"about",color:"white",backgroundColor:"var(--dark)",shadow:"var(--shadow-dark)",descriptions:{primary:v.jsxs(v.Fragment,{children:["Well hello there! Nice to see you here.",v.jsx("br",{}),"I'm Emil Stjernlöf, a newly graduated Frontend Developer based in Uppsala, Sweden. As a 30-something former health care worker, I decided to broaden my views and pursue a career change. Scary, I know!",v.jsx("br",{}),v.jsx("br",{}),"From 2022 to 2024, I studied frontend development at Jensen Yrkeshögskola in Kista, where I honed my skills in building engaging and user-friendly web experiences using"," ",v.jsx("b",{style:{color:"var(--neon-green)"},children:"JavaScript"}),",",v.jsx("b",{style:{color:"var(--neon-green)"},children:" React"}),", and",v.jsx("b",{style:{color:"var(--neon-green)"},children:" React Native"}),"."]}),secondary:v.jsx(v.Fragment,{children:"I enjoy working on dynamic and interactive applications that respond to users' needs. For me, great frontend development is about more than just writing code—it's about designing intuitive and visually appealing experiences that make people's lives easier."}),tertiary:v.jsxs(v.Fragment,{children:["During my time at Jensen, I also had the opportunity to gain hands-on experience through a work placement (LIA) at Sigholm. There, I developed my skills in"," ",v.jsx("b",{style:{color:"var(--neon-green)"},children:"TypeScript"})," and agile methodologies, gaining valuable insight into real-world development workflows. This experience also taught me how to quickly adapt to new technologies and work efficiently in a dynamic environment."]}),quaternary:v.jsx(v.Fragment,{children:"I’m excited about the opportunity to pursue this new path. Outside of coding, I love exploring new technologies and keeping up with the latest trends in frontend development. I’m always looking for ways to push my skills further and create digital experiences that are both impactful and memorable."})},images:{profilePic:"pageimages/aboutme/profilepic1.jpg",profilePic2:"pageimages/aboutme/profilepic2.jpg",profilePic3:"pageimages/aboutme/profilepic3.jpg",profilePic4:"pageimages/aboutme/profilepic4.jpg",profilePic5:"pageimages/aboutme/profilepic5.jpg",profilePic6:"pageimages/aboutme/profilepic6.jpg",profilePic7:"pageimages/aboutme/profilepic7.jpg"},repos:[{browser:"https://github.com/starleafer",icon:v.jsx(Ne,{icon:Wn})},{linkedin:"https://www.linkedin.com/in/emil-stjernlof/",icon:v.jsx(Ne,{icon:B3})},{email:"mailto:emil.stjernlof@gmail.com",icon:v.jsx(Ne,{icon:Y3})}],music:[{song:"https://open.spotify.com/track/1A6u3ufwPK5apJlpmXjOK8?si=6707a186001f4f8b",songtitle:"Jonathan Johansson - På Boulevarden"},{song:"https://open.spotify.com/track/7j3KGtoP432CcQLA9zLrAo?si=ae7dc7e146734b27",songtitle:"Drab Majesty - Ellipsis"},{song:"https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=d6f658457e794997",songtitle:"Frank Ocean - Pink + White"},{song:"https://open.spotify.com/track/2cGlzTR9gC93lc12cZ8afB?si=66362dab1fa94d5d",songtitle:"Moonica Mac - 80´s"},{song:"https://open.spotify.com/track/413CBplTN03RNZD8H34B6q?si=a5a98e900ac14884",songtitle:"The War On Drugs - Strangest Thing"}],musicIcon:v.jsx(Ne,{icon:V3,style:{width:"1em",height:"1em"}})};return v.jsx(c1.Provider,{value:{card:t,main:n},children:e})};ll.propTypes={children:I.node.isRequired};const yt=()=>w.useContext(c1),vd=w.createContext({});function Si(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const ul=w.createContext(null),Ko=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class G3 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=r instanceof HTMLElement&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function K3({children:e,isPresent:t,anchorX:n}){const r=w.useId(),i=w.useRef(null),o=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=w.useContext(Ko);return w.useInsertionEffect(()=>{const{width:a,height:l,top:u,left:c,right:f}=o.current;if(t||!i.current||!a||!l)return;const d=n==="left"?`left: ${c}`:`right: ${f}`;i.current.dataset.motionPopId=r;const m=document.createElement("style");return s&&(m.nonce=s),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),v.jsx(G3,{isPresent:t,childRef:i,sizeRef:o,children:w.cloneElement(e,{ref:i})})}const X3=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a})=>{const l=Si(Q3),u=w.useId(),c=w.useCallback(d=>{l.set(d,!0);for(const m of l.values())if(!m)return;r&&r()},[l,r]),f=w.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:d=>(l.set(d,!1),()=>l.delete(d))}),o?[Math.random(),c]:[n,c]);return w.useMemo(()=>{l.forEach((d,m)=>l.set(m,!1))},[n]),w.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=v.jsx(K3,{isPresent:n,anchorX:a,children:e})),v.jsx(ul.Provider,{value:f,children:e})};function Q3(){return new Map}function f1(e=!0){const t=w.useContext(ul);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{e&&i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Ss=e=>e.key||"";function nm(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const yd=typeof window<"u",Xo=yd?w.useLayoutEffect:w.useEffect,Dc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left"})=>{const[l,u]=f1(s),c=w.useMemo(()=>nm(e),[e]),f=s&&!l?[]:c.map(Ss),d=w.useRef(!0),m=w.useRef(c),y=Si(()=>new Map),[x,S]=w.useState(c),[p,h]=w.useState(c);Xo(()=>{d.current=!1,m.current=c;for(let k=0;k<p.length;k++){const b=Ss(p[k]);f.includes(b)?y.delete(b):y.get(b)!==!0&&y.set(b,!1)}},[p,f.length,f.join("-")]);const g=[];if(c!==x){let k=[...c];for(let b=0;b<p.length;b++){const P=p[b],T=Ss(P);f.includes(T)||(k.splice(b,0,P),g.push(P))}o==="wait"&&g.length&&(k=g),h(nm(k)),S(c);return}const{forceRender:C}=w.useContext(vd);return v.jsx(v.Fragment,{children:p.map(k=>{const b=Ss(k),P=s&&!l?!1:c===p||f.includes(b),T=()=>{if(y.has(b))y.set(b,!0);else return;let _=!0;y.forEach(R=>{R||(_=!1)}),_&&(C==null||C(),h(m.current),s&&(u==null||u()),r&&r())};return v.jsx(X3,{isPresent:P,initial:!d.current||n?void 0:!1,custom:P?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:P?void 0:T,anchorX:a,children:k},b)})})},ze=e=>e;let q3=ze,d1=ze;function xd(e){let t;return()=>(t===void 0&&(t=e()),t)}const yr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Zt=e=>e*1e3,Jt=e=>e/1e3,Z3={skipAnimations:!1,useManualTiming:!1};function J3(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,f=!1)=>{const m=f&&r?t:n;return c&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const ks=["read","resolveKeyframes","update","preRender","render","postRender"],eP=40;function h1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=ks.reduce((p,h)=>(p[h]=J3(o),p),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=s,m=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,eP),1),i.timestamp=p,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),f.process(i),d.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:ks.reduce((p,h)=>{const g=s[h];return p[h]=(C,k=!1,b=!1)=>(n||y(),g.schedule(C,k,b)),p},{}),cancel:p=>{for(let h=0;h<ks.length;h++)s[ks[h]].cancel(p)},state:i,steps:s}}const{schedule:W,cancel:jt,state:we,steps:eu}=h1(typeof requestAnimationFrame<"u"?requestAnimationFrame:ze,!0),p1=w.createContext({strict:!1}),rm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},di={};for(const e in rm)di[e]={isEnabled:t=>rm[e].some(n=>!!t[n])};function tP(e){for(const t in e)di[t]={...di[t],...e[t]}}const nP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ta(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||nP.has(e)}let m1=e=>!Ta(e);function rP(e){e&&(m1=t=>t.startsWith("on")?!Ta(t):e(t))}try{rP(require("@emotion/is-prop-valid").default)}catch{}function iP(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(m1(i)||n===!0&&Ta(i)||!t&&!Ta(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function oP(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const cl=w.createContext({});function Lo(e){return typeof e=="string"||Array.isArray(e)}function fl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const wd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sd=["initial",...wd];function dl(e){return fl(e.animate)||Sd.some(t=>Lo(e[t]))}function g1(e){return!!(dl(e)||e.variants)}function sP(e,t){if(dl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Lo(n)?n:void 0,animate:Lo(r)?r:void 0}}return e.inherit!==!1?t:{}}function aP(e){const{initial:t,animate:n}=sP(e,w.useContext(cl));return w.useMemo(()=>({initial:t,animate:n}),[im(t),im(n)])}function im(e){return Array.isArray(e)?e.join(" "):e}const lP=Symbol.for("motionComponentSymbol");function Fr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function uP(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Fr(n)&&(n.current=r))},[t])}const kd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),cP="framerAppearId",v1="data-"+kd(cP),{schedule:Cd,cancel:gj}=h1(queueMicrotask,!1),y1=w.createContext({});function fP(e,t,n,r,i){var o,s;const{visualElement:a}=w.useContext(cl),l=w.useContext(p1),u=w.useContext(ul),c=w.useContext(Ko).reducedMotion,f=w.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const d=f.current,m=w.useContext(y1);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&dP(f.current,n,i,m);const y=w.useRef(!1);w.useInsertionEffect(()=>{d&&y.current&&d.update(n,u)});const x=n[v1],S=w.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,x)));return Xo(()=>{d&&(y.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Cd.render(d.render),S.current&&d.animationState&&d.animationState.animateChanges())}),w.useEffect(()=>{d&&(!S.current&&d.animationState&&d.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,x)}),S.current=!1))}),d}function dP(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:x1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Fr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function x1(e){if(e)return e.options.allowProjection!==!1?e.projection:x1(e.parent)}function hP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&tP(e);function a(u,c){let f;const d={...w.useContext(Ko),...u,layoutId:pP(u)},{isStatic:m}=d,y=aP(u),x=r(u,m);if(!m&&yd){mP();const S=gP(d);f=S.MeasureLayout,y.visualElement=fP(i,x,d,t,S.ProjectionNode)}return v.jsxs(cl.Provider,{value:y,children:[f&&y.visualElement?v.jsx(f,{visualElement:y.visualElement,...d}):null,n(i,u,uP(x,y.visualElement,c),x,m,y.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const l=w.forwardRef(a);return l[lP]=i,l}function pP({layoutId:e}){const t=w.useContext(vd).id;return t&&e!==void 0?t+"-"+e:e}function mP(e,t){w.useContext(p1).strict}function gP(e){const{drag:t,layout:n}=di;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const vP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bd(e){return typeof e!="string"||e.includes("-")?!1:!!(vP.indexOf(e)>-1||/[A-Z]/u.test(e))}function om(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Pd(e,t,n,r){if(typeof t=="function"){const[i,o]=om(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=om(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const _c=e=>Array.isArray(e),yP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),xP=e=>_c(e)?e[e.length-1]||0:e,Ce=e=>!!(e&&e.getVelocity);function Ws(e){const t=Ce(e)?e.get():e;return yP(t)?t.toValue():t}function wP({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:SP(r,i,o,e),renderState:t()};return n&&(s.onMount=a=>n({props:r,current:a,...s}),s.onUpdate=a=>n(a)),s}const w1=e=>(t,n)=>{const r=w.useContext(cl),i=w.useContext(ul),o=()=>wP(e,t,r,i);return n?o():Si(o)};function SP(e,t,n,r){const i={},o=r(e,{});for(const d in o)i[d]=Ws(o[d]);let{initial:s,animate:a}=e;const l=dl(e),u=g1(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const f=c?a:s;if(f&&typeof f!="boolean"&&!fl(f)){const d=Array.isArray(f)?f:[f];for(let m=0;m<d.length;m++){const y=Pd(e,d[m]);if(y){const{transitionEnd:x,transition:S,...p}=y;for(const h in p){let g=p[h];if(Array.isArray(g)){const C=c?g.length-1:0;g=g[C]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const ki=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sr=new Set(ki),S1=e=>t=>typeof t=="string"&&t.startsWith(e),Td=S1("--"),kP=S1("var(--"),Ed=e=>kP(e)?CP.test(e.split("/*")[0].trim()):!1,CP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,k1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ut=(e,t,n)=>n>t?t:n<e?e:n,Ci={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Oo={...Ci,transform:e=>Ut(0,1,e)},Cs={...Ci,default:1},Qo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gn=Qo("deg"),Ft=Qo("%"),z=Qo("px"),bP=Qo("vh"),PP=Qo("vw"),sm={...Ft,parse:e=>Ft.parse(e)/100,transform:e=>Ft.transform(e*100)},TP={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},EP={rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:Cs,scaleX:Cs,scaleY:Cs,scaleZ:Cs,skew:gn,skewX:gn,skewY:gn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Oo,originX:sm,originY:sm,originZ:z},am={...Ci,transform:Math.round},Ad={...TP,...EP,zIndex:am,size:z,fillOpacity:Oo,strokeOpacity:Oo,numOctaves:am},AP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jP=ki.length;function RP(e,t,n){let r="",i=!0;for(let o=0;o<jP;o++){const s=ki[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=k1(a,Ad[s]);if(!l){i=!1;const c=AP[s]||s;r+=`${c}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function jd(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(Sr.has(l)){s=!0;continue}else if(Td(l)){i[l]=u;continue}else{const c=k1(u,Ad[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=RP(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}const MP={offset:"stroke-dashoffset",array:"stroke-dasharray"},IP={offset:"strokeDashoffset",array:"strokeDasharray"};function LP(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?MP:IP;e[o.offset]=z.transform(-r);const s=z.transform(t),a=z.transform(n);e[o.array]=`${s} ${a}`}function lm(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function OP(e,t,n){const r=lm(t,e.x,e.width),i=lm(n,e.y,e.height);return`${r} ${i}`}function Rd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(jd(e,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:m,dimensions:y}=e;d.transform&&(y&&(m.transform=d.transform),delete d.transform),y&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=OP(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),s!==void 0&&LP(d,s,a,l,!1)}const Md=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),C1=()=>({...Md(),attrs:{}}),Id=e=>typeof e=="string"&&e.toLowerCase()==="svg";function b1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const P1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function T1(e,t,n,r){b1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(P1.has(i)?i:kd(i),t.attrs[i])}const No={};function NP(e){for(const t in e)No[t]=e[t],Td(t)&&(No[t].isCSSVariable=!0)}function E1(e,{layout:t,layoutId:n}){return Sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!No[e]||e==="opacity")}function Ld(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Ce(i[s])||t.style&&Ce(t.style[s])||E1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function A1(e,t,n){const r=Ld(e,t,n);for(const i in e)if(Ce(e[i])||Ce(t[i])){const o=ki.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function DP(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const um=["x","y","width","height","cx","cy","r"],_P={useVisualState:w1({scrapeMotionValuesFromProps:A1,createRenderState:C1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const a in i)if(Sr.has(a)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let a=0;a<um.length;a++){const l=um[a];e[l]!==t[l]&&(s=!0)}s&&W.read(()=>{DP(n,r),W.render(()=>{Rd(r,i,Id(n.tagName),e.transformTemplate),T1(n,r)})})}})},zP={useVisualState:w1({scrapeMotionValuesFromProps:Ld,createRenderState:Md})};function j1(e,t,n){for(const r in t)!Ce(t[r])&&!E1(r,n)&&(e[r]=t[r])}function $P({transformTemplate:e},t){return w.useMemo(()=>{const n=Md();return jd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function FP(e,t){const n=e.style||{},r={};return j1(r,n,e),Object.assign(r,$P(e,t)),r}function VP(e,t){const n={},r=FP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function BP(e,t,n,r){const i=w.useMemo(()=>{const o=C1();return Rd(o,t,Id(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};j1(o,e.style,e),i.style={...o,...i.style}}return i}function UP(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(bd(n)?BP:VP)(r,o,s,n),u=iP(r,typeof n=="string",e),c=n!==w.Fragment?{...u,...l,ref:i}:{},{children:f}=r,d=w.useMemo(()=>Ce(f)?f.get():f,[f]);return w.createElement(n,{...c,children:d})}}function WP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...bd(r)?_P:zP,preloadedFeatures:e,useRender:UP(i),createVisualElement:t,Component:r};return hP(s)}}function R1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function hl(e,t,n){const r=e.getProps();return Pd(r,t,n!==void 0?n:r.custom,e)}const M1=xd(()=>window.ScrollTimeline!==void 0);class HP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(M1()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class YP extends HP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Od(e,t){return e?e[t]||e.default||e:void 0}const zc=2e4;function I1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<zc;)t+=n,r=e.next(t);return t>=zc?1/0:t}function Nd(e){return typeof e=="function"}function cm(e,t){e.timeline=t,e.onfinish=null}const Dd=e=>Array.isArray(e)&&typeof e[0]=="number",GP={linearEasing:void 0};function KP(e,t){const n=xd(e);return()=>{var r;return(r=GP[t])!==null&&r!==void 0?r:n()}}const Ea=KP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),L1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(yr(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function O1(e){return!!(typeof e=="function"&&Ea()||!e||typeof e=="string"&&(e in $c||Ea())||Dd(e)||Array.isArray(e)&&e.every(O1))}const Bi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,$c={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bi([0,.65,.55,1]),circOut:Bi([.55,0,1,.45]),backIn:Bi([.31,.01,.66,-.59]),backOut:Bi([.33,1.53,.69,.99])};function N1(e,t){if(e)return typeof e=="function"&&Ea()?L1(e,t):Dd(e)?Bi(e):Array.isArray(e)?e.map(n=>N1(n,t)||$c.easeOut):$c[e]}const St={x:!1,y:!1};function D1(){return St.x||St.y}function _1(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;t&&(i=t.current);const o=(r=n==null?void 0:n[e])!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function z1(e,t){const n=_1(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function fm(e){return!(e.pointerType==="touch"||D1())}function XP(e,t,n={}){const[r,i,o]=z1(e,n),s=a=>{if(!fm(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const c=f=>{fm(f)&&(u(f),l.removeEventListener("pointerleave",c))};l.addEventListener("pointerleave",c,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const $1=(e,t)=>t?e===t?!0:$1(e,t.parentElement):!1,_d=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,QP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function qP(e){return QP.has(e.tagName)||e.tabIndex!==-1}const Ui=new WeakSet;function dm(e){return t=>{t.key==="Enter"&&e(t)}}function tu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const ZP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=dm(()=>{if(Ui.has(n))return;tu(n,"down");const i=dm(()=>{tu(n,"up")}),o=()=>tu(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function hm(e){return _d(e)&&!D1()}function JP(e,t,n={}){const[r,i,o]=z1(e,n),s=a=>{const l=a.currentTarget;if(!hm(a)||Ui.has(l))return;Ui.add(l);const u=t(l,a),c=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!hm(m)||!Ui.has(l))&&(Ui.delete(l),typeof u=="function"&&u(m,{success:y}))},f=m=>{c(m,n.useGlobalTarget||$1(l,m.target))},d=m=>{c(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",d,i)};return r.forEach(a=>{!qP(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),a.addEventListener("focus",u=>ZP(u,i),i)}),o}function e5(e){return e==="x"||e==="y"?St[e]?null:(St[e]=!0,()=>{St[e]=!1}):St.x||St.y?null:(St.x=St.y=!0,()=>{St.x=St.y=!1})}const F1=new Set(["width","height","top","left","right","bottom",...ki]);let Hs;function t5(){Hs=void 0}const Vt={now:()=>(Hs===void 0&&Vt.set(we.isProcessing||Z3.useManualTiming?we.timestamp:performance.now()),Hs),set:e=>{Hs=e,queueMicrotask(t5)}};function zd(e,t){e.indexOf(t)===-1&&e.push(t)}function $d(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Fd{constructor(){this.subscriptions=[]}add(t){return zd(this.subscriptions,t),()=>$d(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Vd(e,t){return t?e*(1e3/t):0}const pm=30,n5=e=>!isNaN(parseFloat(e)),io={current:void 0};class r5{constructor(t,n={}){this.version="12.0.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Vt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Vt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=n5(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Fd);const r=this.events[t].add(n);return t==="change"?()=>{r(),W.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return io.current&&io.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Vt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>pm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,pm);return Vd(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _t(e,t){return new r5(e,t)}function i5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,_t(n))}function o5(e,t){const n=hl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=xP(o[s]);i5(e,s,a)}}function s5(e){return!!(Ce(e)&&e.add)}function Fc(e,t){const n=e.getValue("willChange");if(s5(n))return n.add(t)}function V1(e){return e.props[v1]}const B1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,a5=1e-7,l5=12;function u5(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=B1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>a5&&++a<l5);return s}function qo(e,t,n,r){if(e===t&&n===r)return ze;const i=o=>u5(o,0,1,e,n);return o=>o===0||o===1?o:B1(i(o),t,r)}const U1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,W1=e=>t=>1-e(1-t),H1=qo(.33,1.53,.69,.99),Bd=W1(H1),Y1=U1(Bd),G1=e=>(e*=2)<1?.5*Bd(e):.5*(2-Math.pow(2,-10*(e-1))),Ud=e=>1-Math.sin(Math.acos(e)),K1=W1(Ud),X1=U1(Ud),Q1=e=>/^0[^.\s]+$/u.test(e);function c5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Q1(e):!0}const oo=e=>Math.round(e*1e5)/1e5,Wd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function f5(e){return e==null}const d5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hd=(e,t)=>n=>!!(typeof n=="string"&&d5.test(n)&&n.startsWith(e)||t&&!f5(n)&&Object.prototype.hasOwnProperty.call(n,t)),q1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Wd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},h5=e=>Ut(0,255,e),nu={...Ci,transform:e=>Math.round(h5(e))},nr={test:Hd("rgb","red"),parse:q1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+nu.transform(e)+", "+nu.transform(t)+", "+nu.transform(n)+", "+oo(Oo.transform(r))+")"};function p5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Vc={test:Hd("#"),parse:p5,transform:nr.transform},Vr={test:Hd("hsl","hue"),parse:q1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ft.transform(oo(t))+", "+Ft.transform(oo(n))+", "+oo(Oo.transform(r))+")"},Ie={test:e=>nr.test(e)||Vc.test(e)||Vr.test(e),parse:e=>nr.test(e)?nr.parse(e):Vr.test(e)?Vr.parse(e):Vc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?nr.transform(e):Vr.transform(e)},m5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function g5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Wd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(m5))===null||n===void 0?void 0:n.length)||0)>0}const Z1="number",J1="color",v5="var",y5="var(",mm="${}",x5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Do(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(x5,l=>(Ie.test(l)?(r.color.push(o),i.push(J1),n.push(Ie.parse(l))):l.startsWith(y5)?(r.var.push(o),i.push(v5),n.push(l)):(r.number.push(o),i.push(Z1),n.push(parseFloat(l))),++o,mm)).split(mm);return{values:n,split:a,indexes:r,types:i}}function ex(e){return Do(e).values}function tx(e){const{split:t,types:n}=Do(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Z1?o+=oo(i[s]):a===J1?o+=Ie.transform(i[s]):o+=i[s]}return o}}const w5=e=>typeof e=="number"?0:e;function S5(e){const t=ex(e);return tx(e)(t.map(w5))}const $n={test:g5,parse:ex,createTransformer:tx,getAnimatableNone:S5},k5=new Set(["brightness","contrast","saturate","opacity"]);function C5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Wd)||[];if(!r)return e;const i=n.replace(r,"");let o=k5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const b5=/\b([a-z-]*)\(.*?\)/gu,Bc={...$n,getAnimatableNone:e=>{const t=e.match(b5);return t?t.map(C5).join(" "):e}},P5={...Ad,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:Bc,WebkitFilter:Bc},Yd=e=>P5[e];function nx(e,t){let n=Yd(e);return n!==Bc&&(n=$n),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const T5=new Set(["auto","none","0"]);function E5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!T5.has(o)&&Do(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=nx(n,i)}const gm=e=>e===Ci||e===z,vm=(e,t)=>parseFloat(e.split(", ")[t]),ym=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return vm(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?vm(o[1],e):0}},A5=new Set(["x","y","z"]),j5=ki.filter(e=>!A5.has(e));function R5(e){const t=[];return j5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const hi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ym(4,13),y:ym(5,14)};hi.translateX=hi.x;hi.translateY=hi.y;const cr=new Set;let Uc=!1,Wc=!1;function rx(){if(Wc){const e=Array.from(cr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=R5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Wc=!1,Uc=!1,cr.forEach(e=>e.complete()),cr.clear()}function ix(){cr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Wc=!0)})}function M5(){ix(),rx()}class Gd{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(cr.add(this),Uc||(Uc=!0,W.read(ix),W.resolveKeyframes(rx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),cr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,cr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ox=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),I5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function L5(e){const t=I5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function sx(e,t,n=1){const[r,i]=L5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return ox(s)?parseFloat(s):s}return Ed(i)?sx(i,t,n+1):i}const ax=e=>t=>t.test(e),O5={test:e=>e==="auto",parse:e=>e},lx=[Ci,z,Ft,gn,PP,bP,O5],xm=e=>lx.find(ax(e));class ux extends Gd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Ed(u))){const c=sx(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!F1.has(r)||t.length!==2)return;const[i,o]=t,s=xm(i),a=xm(o);if(s!==a)if(gm(s)&&gm(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)c5(t[i])&&r.push(i);r.length&&E5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=hi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const wm=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($n.test(e)||e==="0")&&!e.startsWith("url("));function N5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function D5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=wm(i,t),a=wm(o,t);return!s||!a?!1:N5(e)||(n==="spring"||Nd(n))&&r}const _5=e=>e!==null;function pl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(_5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const z5=40;class cx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Vt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>z5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&M5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Vt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!D5(t,r,i,o))if(s)this.options.duration=0;else{l&&l(pl(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function ru(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=ru(l,a,e+1/3),o=ru(l,a,e),s=ru(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Aa(e,t){return n=>n>0?t:e}const iu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},F5=[Vc,nr,Vr],V5=e=>F5.find(t=>t.test(e));function Sm(e){const t=V5(e);if(!t)return!1;let n=t.parse(e);return t===Vr&&(n=$5(n)),n}const km=(e,t)=>{const n=Sm(e),r=Sm(t);if(!n||!r)return Aa(e,t);const i={...n};return o=>(i.red=iu(n.red,r.red,o),i.green=iu(n.green,r.green,o),i.blue=iu(n.blue,r.blue,o),i.alpha=oe(n.alpha,r.alpha,o),nr.transform(i))},B5=(e,t)=>n=>t(e(n)),Zo=(...e)=>e.reduce(B5),Hc=new Set(["none","hidden"]);function U5(e,t){return Hc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function W5(e,t){return n=>oe(e,t,n)}function Kd(e){return typeof e=="number"?W5:typeof e=="string"?Ed(e)?Aa:Ie.test(e)?km:G5:Array.isArray(e)?fx:typeof e=="object"?Ie.test(e)?km:H5:Aa}function fx(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Kd(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function H5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Kd(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Y5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const G5=(e,t)=>{const n=$n.createTransformer(t),r=Do(e),i=Do(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Hc.has(e)&&!i.values.length||Hc.has(t)&&!r.values.length?U5(e,t):Zo(fx(Y5(r,i),i.values),n):Aa(e,t)};function dx(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):Kd(e)(e,t)}const K5=5;function hx(e,t,n){const r=Math.max(t-K5,0);return Vd(n-e(r),t-r)}const le={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ou=.001;function X5({duration:e=le.duration,bounce:t=le.bounce,velocity:n=le.velocity,mass:r=le.mass}){let i,o,s=1-t;s=Ut(le.minDamping,le.maxDamping,s),e=Ut(le.minDuration,le.maxDuration,Jt(e)),s<1?(i=u=>{const c=u*s,f=c*e,d=c-n,m=Yc(u,s),y=Math.exp(-f);return ou-d/m*y},o=u=>{const f=u*s*e,d=f*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),x=Yc(Math.pow(u,2),s);return(-i(u)+ou>0?-1:1)*((d-m)*y)/x}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-ou+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=q5(i,o,a);if(e=Zt(e),isNaN(l))return{stiffness:le.stiffness,damping:le.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const Q5=12;function q5(e,t,n){let r=n;for(let i=1;i<Q5;i++)r=r-e(r)/t(r);return r}function Yc(e,t){return e*Math.sqrt(1-t*t)}const Z5=["duration","bounce"],J5=["stiffness","damping","mass"];function Cm(e,t){return t.some(n=>e[n]!==void 0)}function eT(e){let t={velocity:le.velocity,stiffness:le.stiffness,damping:le.damping,mass:le.mass,isResolvedFromDuration:!1,...e};if(!Cm(e,J5)&&Cm(e,Z5))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Ut(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:le.mass,stiffness:i,damping:o}}else{const n=X5(e);t={...t,...n,mass:le.mass},t.isResolvedFromDuration=!0}return t}function px(e=le.visualDuration,t=le.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:m}=eT({...n,velocity:-Jt(n.velocity||0)}),y=d||0,x=u/(2*Math.sqrt(l*c)),S=s-o,p=Jt(Math.sqrt(l/c)),h=Math.abs(S)<5;r||(r=h?le.restSpeed.granular:le.restSpeed.default),i||(i=h?le.restDelta.granular:le.restDelta.default);let g;if(x<1){const k=Yc(p,x);g=b=>{const P=Math.exp(-x*p*b);return s-P*((y+x*p*S)/k*Math.sin(k*b)+S*Math.cos(k*b))}}else if(x===1)g=k=>s-Math.exp(-p*k)*(S+(y+p*S)*k);else{const k=p*Math.sqrt(x*x-1);g=b=>{const P=Math.exp(-x*p*b),T=Math.min(k*b,300);return s-P*((y+x*p*S)*Math.sinh(T)+k*S*Math.cosh(T))/k}}const C={calculatedDuration:m&&f||null,next:k=>{const b=g(k);if(m)a.done=k>=f;else{let P=0;x<1&&(P=k===0?Zt(y):hx(g,k,b));const T=Math.abs(P)<=r,_=Math.abs(s-b)<=i;a.done=T&&_}return a.value=a.done?s:b,a},toString:()=>{const k=Math.min(I1(C),zc),b=L1(P=>C.next(k*P).value,k,30);return k+"ms "+b}};return C}function bm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],d={done:!1,value:f},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const S=f+x,p=s===void 0?S:s(S);p!==S&&(x=p-f);const h=T=>-x*Math.exp(-T/r),g=T=>p+h(T),C=T=>{const _=h(T),R=g(T);d.done=Math.abs(_)<=u,d.value=d.done?p:R};let k,b;const P=T=>{m(d.value)&&(k=T,b=px({keyframes:[d.value,y(d.value)],velocity:hx(g,T,d.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:T=>{let _=!1;return!b&&k===void 0&&(_=!0,C(T),P(T)),k!==void 0&&T>=k?b.next(T-k):(!_&&C(T),d)}}}const tT=qo(.42,0,1,1),nT=qo(0,0,.58,1),mx=qo(.42,0,.58,1),rT=e=>Array.isArray(e)&&typeof e[0]!="number",iT={linear:ze,easeIn:tT,easeInOut:mx,easeOut:nT,circIn:Ud,circInOut:X1,circOut:K1,backIn:Bd,backInOut:Y1,backOut:H1,anticipate:G1},Pm=e=>{if(Dd(e)){d1(e.length===4);const[t,n,r,i]=e;return qo(t,n,r,i)}else if(typeof e=="string")return iT[e];return e};function oT(e,t,n){const r=[],i=n||dx,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ze:t;a=Zo(l,a)}r.push(a)}return r}function Xd(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(d1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=oT(t,r,i),l=a.length,u=c=>{if(s&&c<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const d=yr(e[f],e[f+1],c);return a[f](d)};return n?c=>u(Ut(e[0],e[o-1],c)):u}function sT(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=yr(0,t,r);e.push(oe(n,1,i))}}function gx(e){const t=[0];return sT(t,e.length-1),t}function aT(e,t){return e.map(n=>n*t)}function lT(e,t){return e.map(()=>t||mx).splice(0,e.length-1)}function ja({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=rT(r)?r.map(Pm):Pm(r),o={done:!1,value:t[0]},s=aT(n&&n.length===t.length?n:gx(t),e),a=Xd(s,t,{ease:Array.isArray(i)?i:lT(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const uT=e=>{const t=({timestamp:n})=>e(n);return{start:()=>W.update(t,!0),stop:()=>jt(t),now:()=>we.isProcessing?we.timestamp:Vt.now()}},cT={decay:bm,inertia:bm,tween:ja,keyframes:ja,spring:px},fT=e=>e/100;class ml extends cx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Gd,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Nd(n)?n:cT[n]||ja;let l,u;a!==ja&&typeof t[0]!="number"&&(l=Zo(fT,dx(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=I1(c));const{calculatedDuration:f}=c,d=f+i,m=d*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:d,repeat:m,repeatType:y,repeatDelay:x,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-d*(this.speed>=0?1:-1),h=this.speed>=0?p<0:p>c;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,C=o;if(m){const T=Math.min(this.currentTime,c)/f;let _=Math.floor(T),R=T%1;!R&&T>=1&&(R=1),R===1&&_--,_=Math.min(_,m+1),!!(_%2)&&(y==="reverse"?(R=1-R,x&&(R-=x/f)):y==="mirror"&&(C=s)),g=Ut(0,1,R)*f}const k=h?{done:!1,value:l[0]}:C.next(g);a&&(k.value=a(k.value));let{done:b}=k;!h&&u!==null&&(b=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return P&&i!==void 0&&(k.value=pl(l,this.options,i)),S&&S(k.value),P&&this.finish(),k}get duration(){const{resolved:t}=this;return t?Jt(t.calculatedDuration):0}get time(){return Jt(this.currentTime)}set time(t){t=Zt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Jt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=uT,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function dT(e){return new ml(e)}const hT=new Set(["opacity","clipPath","filter","transform"]);function pT(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=N1(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const mT=xd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ra=10,gT=2e4;function vT(e){return Nd(e.type)||e.type==="spring"||!O1(e.ease)}function yT(e,t){const n=new ml({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<gT;)r=n.sample(o),i.push(r.value),o+=Ra;return{times:void 0,keyframes:i,duration:o-Ra,ease:"linear"}}const vx={anticipate:G1,backInOut:Y1,circInOut:X1};function xT(e){return e in vx}class Tm extends cx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new ux(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&Ea()&&xT(o)&&(o=vx[o]),vT(this.options)){const{onComplete:f,onUpdate:d,motionValue:m,element:y,...x}=this.options,S=yT(t,x);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,o=S.ease,s="keyframes"}const c=pT(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:o});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(cm(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(pl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Jt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Jt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Zt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ze;const{animation:r}=n;cm(r,t)}return ze}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...m}=this.options,y=new ml({...m,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=Zt(this.time);u.setWithVelocity(y.sample(x-Ra).value,y.sample(x).value,Ra)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return mT()&&r&&hT.has(r)&&!l&&!u&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const wT={type:"spring",stiffness:500,damping:25,restSpeed:10},ST=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),kT={type:"keyframes",duration:.8},CT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bT=(e,{keyframes:t})=>t.length>2?kT:Sr.has(e)?e.startsWith("scale")?ST(t[1]):wT:CT;function PT({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Qd=(e,t,n,r={},i,o)=>s=>{const a=Od(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Zt(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:d=>{t.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};PT(a)||(c={...c,...bT(e,c)}),c.duration&&(c.duration=Zt(c.duration)),c.repeatDelay&&(c.repeatDelay=Zt(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const d=pl(c.keyframes,a);if(d!==void 0)return W.update(()=>{c.onUpdate(d),c.onComplete()}),new YP([])}return!o&&Tm.supports(c)?new Tm(c):new ml(c)};function TT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function yx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const d=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=l[f];if(m===void 0||c&&TT(c,f))continue;const y={delay:n,...Od(s||{},f)};let x=!1;if(window.MotionHandoffAnimation){const p=V1(e);if(p){const h=window.MotionHandoffAnimation(p,f,W);h!==null&&(y.startTime=h,x=!0)}}Fc(e,f),d.start(Qd(f,d,m,e.shouldReduceMotion&&F1.has(f)?{type:!1}:y,e,x));const S=d.animation;S&&u.push(S)}return a&&Promise.all(u).then(()=>{W.update(()=>{a&&o5(e,a)})}),u}function Gc(e,t,n={}){var r;const i=hl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(yx(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=o;return ET(e,t,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function ET(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(AT).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Gc(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function AT(e,t){return e.sortNodePosition(t)}function jT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Gc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Gc(e,t,n);else{const i=typeof t=="function"?hl(e,t,n.custom):t;r=Promise.all(yx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const RT=Sd.length;function xx(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?xx(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<RT;n++){const r=Sd[n],i=e.props[r];(Lo(i)||i===!1)&&(t[r]=i)}return t}const MT=[...wd].reverse(),IT=wd.length;function LT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>jT(e,n,r)))}function OT(e){let t=LT(e),n=Em(),r=!0;const i=l=>(u,c)=>{var f;const d=hl(e,c,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:m,transitionEnd:y,...x}=d;u={...u,...x,...y}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,c=xx(e.parent)||{},f=[],d=new Set;let m={},y=1/0;for(let S=0;S<IT;S++){const p=MT[S],h=n[p],g=u[p]!==void 0?u[p]:c[p],C=Lo(g),k=p===l?h.isActive:null;k===!1&&(y=S);let b=g===c[p]&&g!==u[p]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...m},!h.isActive&&k===null||!g&&!h.prevProp||fl(g)||typeof g=="boolean")continue;const P=NT(h.prevProp,g);let T=P||p===l&&h.isActive&&!b&&C||S>y&&C,_=!1;const R=Array.isArray(g)?g:[g];let F=R.reduce(i(p),{});k===!1&&(F={});const{prevResolvedValues:Ve={}}=h,Be={...Ve,...F},je=U=>{T=!0,d.has(U)&&(_=!0,d.delete(U)),h.needsAnimating[U]=!0;const j=e.getValue(U);j&&(j.liveStyle=!1)};for(const U in Be){const j=F[U],O=Ve[U];if(m.hasOwnProperty(U))continue;let N=!1;_c(j)&&_c(O)?N=!R1(j,O):N=j!==O,N?j!=null?je(U):d.add(U):j!==void 0&&d.has(U)?je(U):h.protectedKeys[U]=!0}h.prevProp=g,h.prevResolvedValues=F,h.isActive&&(m={...m,...F}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(b&&P)||_)&&f.push(...R.map(U=>({animation:U,options:{type:p}})))}if(d.size){const S={};d.forEach(p=>{const h=e.getBaseTarget(p),g=e.getValue(p);g&&(g.liveStyle=!0),S[p]=h??null}),f.push({animation:S})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const f=s(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Em(),r=!0}}}function NT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!R1(t,e):!1}function Hn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Em(){return{animate:Hn(!0),whileInView:Hn(),whileHover:Hn(),whileTap:Hn(),whileDrag:Hn(),whileFocus:Hn(),exit:Hn()}}class Un{constructor(t){this.isMounted=!1,this.node=t}update(){}}class DT extends Un{constructor(t){super(t),t.animationState||(t.animationState=OT(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();fl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let _T=0;class zT extends Un{constructor(){super(...arguments),this.id=_T++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const $T={animation:{Feature:DT},exit:{Feature:zT}};function _o(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Jo(e){return{point:{x:e.pageX,y:e.pageY}}}const FT=e=>t=>_d(t)&&e(t,Jo(t));function so(e,t,n,r){return _o(e,t,FT(n),r)}const Am=(e,t)=>Math.abs(e-t);function VT(e,t){const n=Am(e.x,t.x),r=Am(e.y,t.y);return Math.sqrt(n**2+r**2)}class wx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=au(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,m=VT(f.offset,{x:0,y:0})>=3;if(!d&&!m)return;const{point:y}=f,{timestamp:x}=we;this.history.push({...y,timestamp:x});const{onStart:S,onMove:p}=this.handlers;d||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=su(d,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=au(f.type==="pointercancel"?this.lastMoveEventInfo:su(d,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,S),y&&y(f,S)},!_d(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Jo(t),a=su(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=we;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,au(a,this.history)),this.removeListeners=Zo(so(this.contextWindow,"pointermove",this.handlePointerMove),so(this.contextWindow,"pointerup",this.handlePointerUp),so(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),jt(this.updatePoint)}}function su(e,t){return t?{point:t(e.point)}:e}function jm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function au({point:e},t){return{point:e,delta:jm(e,Sx(t)),offset:jm(e,BT(t)),velocity:UT(t,.1)}}function BT(e){return e[0]}function Sx(e){return e[e.length-1]}function UT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Sx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Zt(t)));)n--;if(!r)return{x:0,y:0};const o=Jt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const kx=1e-4,WT=1-kx,HT=1+kx,Cx=.01,YT=0-Cx,GT=0+Cx;function it(e){return e.max-e.min}function KT(e,t,n){return Math.abs(e-t)<=n}function Rm(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=it(n)/it(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=WT&&e.scale<=HT||isNaN(e.scale))&&(e.scale=1),(e.translate>=YT&&e.translate<=GT||isNaN(e.translate))&&(e.translate=0)}function ao(e,t,n,r){Rm(e.x,t.x,n.x,r?r.originX:void 0),Rm(e.y,t.y,n.y,r?r.originY:void 0)}function Mm(e,t,n){e.min=n.min+t.min,e.max=e.min+it(t)}function XT(e,t,n){Mm(e.x,t.x,n.x),Mm(e.y,t.y,n.y)}function Im(e,t,n){e.min=t.min-n.min,e.max=e.min+it(t)}function lo(e,t,n){Im(e.x,t.x,n.x),Im(e.y,t.y,n.y)}function QT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function Lm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function qT(e,{top:t,left:n,bottom:r,right:i}){return{x:Lm(e.x,n,i),y:Lm(e.y,t,r)}}function Om(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ZT(e,t){return{x:Om(e.x,t.x),y:Om(e.y,t.y)}}function JT(e,t){let n=.5;const r=it(e),i=it(t);return i>r?n=yr(t.min,t.max-r,e.min):r>i&&(n=yr(e.min,e.max-i,t.min)),Ut(0,1,n)}function eE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Kc=.35;function tE(e=Kc){return e===!1?e=0:e===!0&&(e=Kc),{x:Nm(e,"left","right"),y:Nm(e,"top","bottom")}}function Nm(e,t,n){return{min:Dm(e,t),max:Dm(e,n)}}function Dm(e,t){return typeof e=="number"?e:e[t]||0}const _m=()=>({translate:0,scale:1,origin:0,originPoint:0}),Br=()=>({x:_m(),y:_m()}),zm=()=>({min:0,max:0}),ce=()=>({x:zm(),y:zm()});function ct(e){return[e("x"),e("y")]}function bx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function nE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function rE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function lu(e){return e===void 0||e===1}function Xc({scale:e,scaleX:t,scaleY:n}){return!lu(e)||!lu(t)||!lu(n)}function Xn(e){return Xc(e)||Px(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Px(e){return $m(e.x)||$m(e.y)}function $m(e){return e&&e!=="0%"}function Ma(e,t,n){const r=e-n,i=t*r;return n+i}function Fm(e,t,n,r,i){return i!==void 0&&(e=Ma(e,i,r)),Ma(e,n,r)+t}function Qc(e,t=0,n=1,r,i){e.min=Fm(e.min,t,n,r,i),e.max=Fm(e.max,t,n,r,i)}function Tx(e,{x:t,y:n}){Qc(e.x,t.translate,t.scale,t.originPoint),Qc(e.y,n.translate,n.scale,n.originPoint)}const Vm=.999999999999,Bm=1.0000000000001;function iE(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Wr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Tx(e,s)),r&&Xn(o.latestValues)&&Wr(e,o.latestValues))}t.x<Bm&&t.x>Vm&&(t.x=1),t.y<Bm&&t.y>Vm&&(t.y=1)}function Ur(e,t){e.min=e.min+t,e.max=e.max+t}function Um(e,t,n,r,i=.5){const o=oe(e.min,e.max,i);Qc(e,t,n,o,r)}function Wr(e,t){Um(e.x,t.x,t.scaleX,t.scale,t.originX),Um(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ex(e,t){return bx(rE(e.getBoundingClientRect(),t))}function oE(e,t,n){const r=Ex(e,n),{scroll:i}=t;return i&&(Ur(r.x,i.offset.x),Ur(r.y,i.offset.y)),r}const Ax=({current:e})=>e?e.ownerDocument.defaultView:null,sE=new WeakMap;class aE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ce(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Jo(c).point)},o=(c,f)=>{const{drag:d,dragPropagation:m,onDragStart:y}=this.getProps();if(d&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=e5(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ct(S=>{let p=this.getAxisMotionValue(S).get()||0;if(Ft.test(p)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[S];g&&(p=it(g)*(parseFloat(p)/100))}}this.originPoint[S]=p}),y&&W.postRender(()=>y(c,f)),Fc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,f)=>{const{dragPropagation:d,dragDirectionLock:m,onDirectionLock:y,onDrag:x}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:S}=f;if(m&&this.currentDirection===null){this.currentDirection=lE(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),x&&x(c,f)},a=(c,f)=>this.stop(c,f),l=()=>ct(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new wx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ax(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&W.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!bs(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=QT(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Fr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=qT(i.layoutBox,n):this.constraints=!1,this.elastic=tE(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ct(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=eE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Fr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=oE(r,i.root,this.visualElement.getTransformPagePoint());let s=ZT(i.layout.layoutBox,o);if(n){const a=n(nE(s));this.hasMutatedConstraints=!!a,a&&(s=bx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ct(c=>{if(!bs(c,n,this.currentDirection))return;let f=l&&l[c]||{};s&&(f={min:0,max:0});const d=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Fc(this.visualElement,t),r.start(Qd(t,r,0,n,this.visualElement,!1))}stopAnimation(){ct(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ct(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ct(n=>{const{drag:r}=this.getProps();if(!bs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-oe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Fr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ct(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=JT({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ct(s=>{if(!bs(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(oe(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;sE.set(this.visualElement,this);const t=this.visualElement.current,n=so(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Fr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),W.read(r);const s=_o(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ct(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Kc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function bs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function lE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class uE extends Un{constructor(t){super(t),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new aE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const Wm=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class cE extends Un{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(t){this.session=new wx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ax(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Wm(t),onStart:Wm(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&W.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=so(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ys={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Li={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Hm(e,t.target.x),r=Hm(e,t.target.y);return`${n}% ${r}%`}},fE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$n.parse(e);if(i.length>5)return r;const o=$n.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=oe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class dE extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;NP(hE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ys.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||W.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Cd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function jx(e){const[t,n]=f1(),r=w.useContext(vd);return v.jsx(dE,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(y1),isPresent:t,safeToRemove:n})}const hE={borderRadius:{...Li,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Li,borderTopRightRadius:Li,borderBottomLeftRadius:Li,borderBottomRightRadius:Li,boxShadow:fE};function pE(e,t,n){const r=Ce(e)?e:_t(e);return r.start(Qd("",r,t,n)),r.animation}function mE(e){return e instanceof SVGElement&&e.tagName!=="svg"}const gE=(e,t)=>e.depth-t.depth;class vE{constructor(){this.children=[],this.isDirty=!1}add(t){zd(this.children,t),this.isDirty=!0}remove(t){$d(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(gE),this.isDirty=!1,this.children.forEach(t)}}function yE(e,t){const n=Vt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(jt(r),e(o-t))};return W.read(r,!0),()=>jt(r)}const Rx=["TopLeft","TopRight","BottomLeft","BottomRight"],xE=Rx.length,Ym=e=>typeof e=="string"?parseFloat(e):e,Gm=e=>typeof e=="number"||z.test(e);function wE(e,t,n,r,i,o){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,SE(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,kE(r))):o&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<xE;s++){const a=`border${Rx[s]}Radius`;let l=Km(t,a),u=Km(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gm(l)===Gm(u)?(e[a]=Math.max(oe(Ym(l),Ym(u),r),0),(Ft.test(u)||Ft.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function Km(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const SE=Mx(0,.5,K1),kE=Mx(.5,.95,ze);function Mx(e,t,n){return r=>r<e?0:r>t?1:n(yr(e,t,r))}function Xm(e,t){e.min=t.min,e.max=t.max}function ut(e,t){Xm(e.x,t.x),Xm(e.y,t.y)}function Qm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function qm(e,t,n,r,i){return e-=t,e=Ma(e,1/n,r),i!==void 0&&(e=Ma(e,1/i,r)),e}function CE(e,t=0,n=1,r=.5,i,o=e,s=e){if(Ft.test(t)&&(t=parseFloat(t),t=oe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=oe(o.min,o.max,r);e===o&&(a-=t),e.min=qm(e.min,t,n,a,i),e.max=qm(e.max,t,n,a,i)}function Zm(e,t,[n,r,i],o,s){CE(e,t[n],t[r],t[i],t.scale,o,s)}const bE=["x","scaleX","originX"],PE=["y","scaleY","originY"];function Jm(e,t,n,r){Zm(e.x,t,bE,n?n.x:void 0,r?r.x:void 0),Zm(e.y,t,PE,n?n.y:void 0,r?r.y:void 0)}function eg(e){return e.translate===0&&e.scale===1}function Ix(e){return eg(e.x)&&eg(e.y)}function tg(e,t){return e.min===t.min&&e.max===t.max}function TE(e,t){return tg(e.x,t.x)&&tg(e.y,t.y)}function ng(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Lx(e,t){return ng(e.x,t.x)&&ng(e.y,t.y)}function rg(e){return it(e.x)/it(e.y)}function ig(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class EE{constructor(){this.members=[]}add(t){zd(this.members,t),t.scheduleRender()}remove(t){if($d(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function AE(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:m,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),f&&(r+=`rotateX(${f}deg) `),d&&(r+=`rotateY(${d}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Qn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wi=typeof window<"u"&&window.MotionDebug!==void 0,uu=["","X","Y","Z"],jE={visibility:"hidden"},og=1e3;let RE=0;function cu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ox(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=V1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ox(r)}function Nx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=RE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wi&&(Qn.totalNodes=Qn.resolvedTargetDeltas=Qn.recalculatedProjection=0),this.nodes.forEach(LE),this.nodes.forEach(zE),this.nodes.forEach($E),this.nodes.forEach(OE),Wi&&window.MotionDebug.record(Qn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new vE)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Fd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=mE(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const d=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=yE(d,250),Ys.hasAnimatedSinceResize&&(Ys.hasAnimatedSinceResize=!1,this.nodes.forEach(ag))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||WE,{onLayoutAnimationStart:S,onLayoutAnimationComplete:p}=c.getProps(),h=!this.targetLayout||!Lx(this.targetLayout,y),g=!d&&m;if(this.options.layoutRoot||this.resumeFrom||g||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const C={...Od(x,"layout"),onPlay:S,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else d||ag(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,jt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(FE),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ox(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(sg);return}this.isUpdating||this.nodes.forEach(DE),this.isUpdating=!1,this.nodes.forEach(_E),this.nodes.forEach(ME),this.nodes.forEach(IE),this.clearAllSnapshots();const a=Vt.now();we.delta=Ut(0,1e3/60,a-we.timestamp),we.timestamp=a,we.isProcessing=!0,eu.update.process(we),eu.preRender.process(we),eu.render.process(we),we.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(NE),this.sharedNodes.forEach(VE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ce(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Ix(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Xn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),HE(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return ce();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(YE))){const{scroll:c}=this.root;c&&(Ur(l.x,c.offset.x),Ur(l.y,c.offset.y))}return l}removeElementScroll(s){var a;const l=ce();if(ut(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&ut(l,s),Ur(l.x,f.offset.x),Ur(l.y,f.offset.y))}return l}applyTransform(s,a=!1){const l=ce();ut(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Wr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Xn(c.latestValues)&&Wr(l,c.latestValues)}return Xn(this.latestValues)&&Wr(l,this.latestValues),l}removeTransform(s){const a=ce();ut(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Xn(u.latestValues))continue;Xc(u.latestValues)&&u.updateSnapshot();const c=ce(),f=u.measurePageBox();ut(c,f),Jm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Xn(this.latestValues)&&Jm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==we.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=we.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ce(),this.relativeTargetOrigin=ce(),lo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ut(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ce(),this.targetWithTransforms=ce()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),XT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ut(this.target,this.layout.layoutBox),Tx(this.target,this.targetDelta)):ut(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ce(),this.relativeTargetOrigin=ce(),lo(this.relativeTargetOrigin,this.target,m.target),ut(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wi&&Qn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Xc(this.parent.latestValues)||Px(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===we.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;ut(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,m=this.treeScale.y;iE(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ce());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qm(this.prevProjectionDelta.x,this.projectionDelta.x),Qm(this.prevProjectionDelta.y,this.projectionDelta.y)),ao(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==m||!ig(this.projectionDelta.x,this.prevProjectionDelta.x)||!ig(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Wi&&Qn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Br(),this.projectionDelta=Br(),this.projectionDeltaWithTransform=Br()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ce(),m=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=m!==y,S=this.getStack(),p=!S||S.members.length<=1,h=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(UE));this.animationProgress=0;let g;this.mixTargetDelta=C=>{const k=C/1e3;lg(f.x,s.x,k),lg(f.y,s.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),BE(this.relativeTarget,this.relativeTargetOrigin,d,k),g&&TE(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ce()),ut(g,this.relativeTarget)),x&&(this.animationValues=c,wE(c,u,this.latestValues,k,h,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(jt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{Ys.hasAnimatedSinceResize=!0,this.currentAnimation=pE(0,og,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(og),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&Dx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ce();const f=it(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const d=it(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+d}ut(a,l),Wr(a,c),ao(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new EE),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&cu("z",s,u,this.animationValues);for(let c=0;c<uu.length;c++)cu(`rotate${uu[c]}`,s,u,this.animationValues),cu(`skew${uu[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return jE;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ws(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ws(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Xn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=AE(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in No){if(d[x]===void 0)continue;const{correct:S,applyTo:p,isCSSVariable:h}=No[x],g=u.transform==="none"?d[x]:S(d[x],f);if(p){const C=p.length;for(let k=0;k<C;k++)u[p[k]]=g}else h?this.options.visualElement.renderState.vars[x]=g:u[x]=g}return this.options.layoutId&&(u.pointerEvents=f===this?Ws(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(sg),this.root.sharedNodes.clear()}}}function ME(e){e.updateLayout()}function IE(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?ct(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],m=it(d);d.min=r[f].min,d.max=d.min+m}):Dx(o,n.layoutBox,r)&&ct(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],m=it(r[f]);d.max=d.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const a=Br();ao(a,r,n.layoutBox);const l=Br();s?ao(l,e.applyTransform(i,!0),n.measuredBox):ao(l,r,n.layoutBox);const u=!Ix(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:m}=f;if(d&&m){const y=ce();lo(y,n.layoutBox,d.layoutBox);const x=ce();lo(x,r,m.layoutBox),Lx(y,x)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function LE(e){Wi&&Qn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function OE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function NE(e){e.clearSnapshot()}function sg(e){e.clearMeasurements()}function DE(e){e.isLayoutDirty=!1}function _E(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ag(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function zE(e){e.resolveTargetDelta()}function $E(e){e.calcProjection()}function FE(e){e.resetSkewAndRotation()}function VE(e){e.removeLeadSnapshot()}function lg(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ug(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function BE(e,t,n,r){ug(e.x,t.x,n.x,r),ug(e.y,t.y,n.y,r)}function UE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const WE={duration:.45,ease:[.4,0,.1,1]},cg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),fg=cg("applewebkit/")&&!cg("chrome/")?Math.round:ze;function dg(e){e.min=fg(e.min),e.max=fg(e.max)}function HE(e){dg(e.x),dg(e.y)}function Dx(e,t,n){return e==="position"||e==="preserve-aspect"&&!KT(rg(t),rg(n),.2)}function YE(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const GE=Nx({attachResizeListener:(e,t)=>_o(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fu={current:void 0},_x=Nx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fu.current){const e=new GE({});e.mount(window),e.setOptions({layoutScroll:!0}),fu.current=e}return fu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),KE={pan:{Feature:cE},drag:{Feature:uE,ProjectionNode:_x,MeasureLayout:jx}};function hg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&W.postRender(()=>o(t,Jo(t)))}class XE extends Un{mount(){const{current:t}=this.node;t&&(this.unmount=XP(t,(n,r)=>(hg(this.node,r,"Start"),i=>hg(this.node,i,"End"))))}unmount(){}}class QE extends Un{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zo(_o(this.node.current,"focus",()=>this.onFocus()),_o(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function pg(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&W.postRender(()=>o(t,Jo(t)))}class qE extends Un{mount(){const{current:t}=this.node;t&&(this.unmount=JP(t,(n,r)=>(pg(this.node,r,"Start"),(i,{success:o})=>pg(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const qc=new WeakMap,du=new WeakMap,ZE=e=>{const t=qc.get(e.target);t&&t(e)},JE=e=>{e.forEach(ZE)};function e4({root:e,...t}){const n=e||document;du.has(n)||du.set(n,{});const r=du.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(JE,{root:e,...t})),r[i]}function t4(e,t,n){const r=e4(t);return qc.set(e,n),r.observe(e),()=>{qc.delete(e),r.unobserve(e)}}const n4={some:0,all:1};class r4 extends Un{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:n4[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return t4(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(i4(t,n))&&this.startObserver()}unmount(){}}function i4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const o4={inView:{Feature:r4},tap:{Feature:qE},focus:{Feature:QE},hover:{Feature:XE}},s4={layout:{ProjectionNode:_x,MeasureLayout:jx}},Zc={current:null},zx={current:!1};function a4(){if(zx.current=!0,!!yd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Zc.current=e.matches;e.addListener(t),t()}else Zc.current=!1}const l4=[...lx,Ie,$n],u4=e=>l4.find(ax(e)),mg=new WeakMap;function c4(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ce(i))e.addValue(r,i);else if(Ce(o))e.addValue(r,_t(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,_t(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const gg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class f4{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=Vt.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,W.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=s;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=dl(n),this.isVariantNode=g1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in d){const y=d[m];l[m]!==void 0&&Ce(y)&&y.set(l[m],!1)}}mount(t){this.current=t,mg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),zx.current||a4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){mg.delete(this.current),this.projection&&this.projection.unmount(),jt(this.notifyUpdate),jt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Sr.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in di){const n=di[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ce()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<gg.length;r++){const i=gg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=c4(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=_t(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(ox(i)||Q1(i))?i=parseFloat(i):!u4(i)&&$n.test(n)&&(i=nx(t,n)),this.setBaseTarget(t,Ce(i)?i.get():i)),Ce(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=Pd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ce(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Fd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class $x extends f4{constructor(){super(...arguments),this.KeyframeResolver=ux}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ce(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function d4(e){return window.getComputedStyle(e)}class h4 extends $x{constructor(){super(...arguments),this.type="html",this.renderInstance=b1}readValueFromInstance(t,n){if(Sr.has(n)){const r=Yd(n);return r&&r.default||0}else{const r=d4(t),i=(Td(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Ex(t,n)}build(t,n,r){jd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Ld(t,n,r)}}class p4 extends $x{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ce}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Sr.has(n)){const r=Yd(n);return r&&r.default||0}return n=P1.has(n)?n:kd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return A1(t,n,r)}build(t,n,r){Rd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){T1(t,n,r,i)}mount(t){this.isSVGTag=Id(t.tagName),super.mount(t)}}const m4=(e,t)=>bd(e)?new p4(t):new h4(t,{allowProjection:e!==w.Fragment}),g4=WP({...$T,...o4,...KE,...s4},m4),pe=oP(g4);function v4(e,t,n){w.useInsertionEffect(()=>e.on(t,n),[e,t,n])}function Fx(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return W.update(r,!0),()=>jt(r)}const Gs=new WeakMap;let vn;function y4(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function x4({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Gs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return y4(e,n)}})})}function w4(e){e.forEach(x4)}function S4(){typeof ResizeObserver>"u"||(vn=new ResizeObserver(w4))}function k4(e,t){vn||S4();const n=_1(e);return n.forEach(r=>{let i=Gs.get(r);i||(i=new Set,Gs.set(r,i)),i.add(t),vn==null||vn.observe(r)}),()=>{n.forEach(r=>{const i=Gs.get(r);i==null||i.delete(t),i!=null&&i.size||vn==null||vn.unobserve(r)})}}const Ks=new Set;let uo;function C4(){uo=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Ks.forEach(n=>n(t))},window.addEventListener("resize",uo)}function b4(e){return Ks.add(e),uo||C4(),()=>{Ks.delete(e),!Ks.size&&uo&&(uo=void 0)}}function P4(e,t){return typeof e=="function"?b4(e):k4(e,t)}const T4=50,vg=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),E4=()=>({time:0,x:vg(),y:vg()}),A4={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function yg(e,t,n,r){const i=n[t],{length:o,position:s}=A4[t],a=i.current,l=n.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=yr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>T4?0:Vd(i.current-a,u)}function j4(e,t,n){yg(e,"x",t,n),yg(e,"y",t,n),t.time=n}function R4(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const Jc={start:0,center:.5,end:1};function xg(e,t,n=0){let r=0;if(e in Jc&&(e=Jc[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const M4=[0,0];function I4(e,t,n,r){let i=Array.isArray(e)?e:M4,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Jc[e]?e:"0"]),o=xg(i[0],n,r),s=xg(i[1],t),o-s}const L4={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},O4={x:0,y:0};function N4(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function D4(e,t,n){const{offset:r=L4.All}=n,{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?R4(i,e):O4,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:N4(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const f=r.length;for(let d=0;d<f;d++){const m=I4(r[d],u[s],l[s],a[o]);!c&&m!==t[o].interpolatorOffsets[d]&&(c=!0),t[o].offset[d]=m}c&&(t[o].interpolate=Xd(t[o].offset,gx(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=Ut(0,1,t[o].interpolate(t[o].current))}function _4(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function z4(e,t,n,r={}){return{measure:()=>_4(e,r.target,n),update:i=>{j4(e,n,i),(r.offset||r.target)&&D4(e,n,r)},notify:()=>t(n)}}const Oi=new WeakMap,wg=new WeakMap,hu=new WeakMap,Sg=e=>e===document.documentElement?window:e;function qd(e,{container:t=document.documentElement,...n}={}){let r=hu.get(t);r||(r=new Set,hu.set(t,r));const i=E4(),o=z4(t,e,i,n);if(r.add(o),!Oi.has(t)){const a=()=>{for(const d of r)d.measure()},l=()=>{for(const d of r)d.update(we.timestamp)},u=()=>{for(const d of r)d.notify()},c=()=>{W.read(a,!1,!0),W.read(l,!1,!0),W.update(u,!1,!0)};Oi.set(t,c);const f=Sg(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&wg.set(t,P4(t,c)),f.addEventListener("scroll",c,{passive:!0})}const s=Oi.get(t);return W.read(s,!1,!0),()=>{var a;jt(s);const l=hu.get(t);if(!l||(l.delete(o),l.size))return;const u=Oi.get(t);Oi.delete(t),u&&(Sg(t).removeEventListener("scroll",u),(a=wg.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function $4({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=qd(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const pu=new Map;function Vx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),pu.has(t)||pu.set(t,{});const r=pu.get(t);return r[n]||(r[n]=M1()?new ScrollTimeline({source:t,axis:n}):$4({source:t,axis:n})),r[n]}function F4(e){return e.length===2}function Bx(e){return e&&(e.target||e.offset)}function V4(e,t){return F4(e)||Bx(t)?qd(n=>{e(n[t.axis].progress,n)},t):Fx(e,Vx(t))}function B4(e,t){if(e.flatten(),Bx(t))return e.pause(),qd(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Vx(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),Fx(i=>{r.time=r.duration*i},n))):ze}}function U4(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?V4(e,r):B4(e,r)}function kg(e,t){q3(!!(!t||t.current))}const W4=()=>({scrollX:_t(0),scrollY:_t(0),scrollXProgress:_t(0),scrollYProgress:_t(0)});function Cg({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Si(W4);return(n?Xo:w.useEffect)(()=>(kg("target",t),kg("container",e),U4((s,{x:a,y:l})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function Ux(e){const t=Si(()=>_t(e)),{isStatic:n}=w.useContext(Ko);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}function Wx(e,t){const n=Ux(t()),r=()=>n.set(t());return r(),Xo(()=>{const i=()=>W.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),jt(r)}}),n}function bg(e){return typeof e=="number"?e:parseFloat(e)}function ef(e,t={}){const{isStatic:n}=w.useContext(Ko),r=w.useRef(null),i=Ux(Ce(e)?bg(e.get()):e),o=w.useRef(i.get()),s=w.useRef(()=>{}),a=()=>{l(),r.current=dT({keyframes:[i.get(),o.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:s.current})},l=()=>{r.current&&r.current.stop()};return w.useInsertionEffect(()=>i.attach((u,c)=>n?c(u):(o.current=u,s.current=c,W.postRender(a),i.get()),l),[JSON.stringify(t)]),Xo(()=>{if(Ce(e))return e.on("change",u=>i.set(bg(u)))},[i]),i}const H4=e=>e&&typeof e=="object"&&e.mix,Y4=e=>H4(e)?e.mix:void 0;function G4(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Xd(i,o,{mixer:Y4(o[0]),...s});return t?a(r):a}function K4(e){io.current=[],e();const t=Wx(io.current,e);return io.current=void 0,t}function Hi(e,t,n,r){if(typeof e=="function")return K4(e);const i=typeof t=="function"?t:G4(t,n,r);return Array.isArray(e)?Pg(e,i):Pg([e],([o])=>i(o))}function Pg(e,t){const n=Si(()=>[]);return Wx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function X4({setCursorHoverColor:e,setIsHoveringCards:t}){const{card:n}=yt(),r={offscreen:{x:100,opacity:0},onscreen:i=>({x:0,opacity:1,transition:{type:"spring",bounce:.4,delay:i*.1}})};return v.jsx(ll,{children:v.jsx(Q4,{children:v.jsx(q4,{children:n.map((i,o)=>v.jsx(Z4,{variants:r,initial:"offscreen",animate:"onscreen",custom:o,children:v.jsx(I3,{id:i.id,path:i.path,title:i.title,type:i.type,label:i.label,color:i.color,backgroundColor:i.backgroundColor,image:i.image,setCursorHoverColor:e,setIsHoveringCards:t},i.id)},i.id))})})})}const Q4=E.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 90vw;
        margin: 3em 0 0 4em;
    }
    `,q4=E.div`
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
`,Z4=E(pe.div)`
    display: flex;
    width: 15vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;function J4({setCursorHoverColor:e,setIsHoveringCards:t}){const[n,r]=w.useState(""),i=w.useRef(null),o=["--dark: #1b1f2e","--greenish: #497770","--yellowish: #f5ca80","--ocean: #00a6a6","--redish: #eeb7b7","--creamy: #f3b88474","--blueish: #12398d","--neon-green: #0ac753","--light-purple: #564d8d","--silver-light: #f7f7f7e8","--test: #c2b8f5","--more-red: #eb7d7d"].map(l=>l.split(": ")[1]),s=()=>o[Math.floor(Math.random()*o.length)],a="Emil Stjernlöf";return w.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&console.log("AboutMe section is in view")},{root:null,rootMargin:"0px",threshold:.1});return i.current&&l.observe(i.current),()=>{i.current&&l.unobserve(i.current)}},[]),v.jsx(v.Fragment,{children:v.jsx(n6,{style:{fontFamily:"Poiret One"},children:v.jsxs(r6,{children:[v.jsx(i6,{initial:{x:"10%",opacity:0},animate:{x:"0%",opacity:1},transition:{duration:.75,ease:"easeOut"},exit:{opacity:1},children:v.jsx(o6,{children:a.split("").map((l,u)=>l===" "?v.jsx("span",{children:" "},u):v.jsx(s6,{hovercolor:n,onMouseEnter:()=>r(s()),children:l},u))})}),v.jsx(X4,{setCursorHoverColor:e,setIsHoveringCards:t})]})})})}const e6=K`
0% {
  text-shadow: 0 0 0 var(--dark);
}
100% {
  text-shadow: 0.7vw 0.7vw var(--dark);
}
`,t6=K`
  0% {
    text-shadow: 0.7vw 0.7vw var(--dark);
  }
  100% {
    text-shadow: 0 0 0 var(--dark);
  }
`,n6=E.div`
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
`,r6=E.section`
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
`,i6=E(pe.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;
  margin-top: 8vh;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
`,o6=E.h1`
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark);

  @media (max-width: 768px) and (min-width: 320px) {
    margin-top: 2.5em;
  }
`,s6=E.span`
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
      animation: ${e6} 0.5s forwards;

      .hovered {
        color: white;
      }
    }

    &:not(:hover) {
      animation: ${t6} 0.8s forwards;
    }
  }
`;var a6="1.1.16";function Hx(e,t,n){return Math.max(e,Math.min(t,n))}function l6(e,t,n){return(1-n)*e+n*t}function u6(e,t,n,r){return l6(e,t,1-Math.exp(-n*r))}function c6(e,t){return(e%t+t)%t}var f6=class{constructor(){D(this,"isRunning",!1);D(this,"value",0);D(this,"from",0);D(this,"to",0);D(this,"currentTime",0);D(this,"lerp");D(this,"duration");D(this,"easing");D(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Hx(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=u6(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function d6(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var h6=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){D(this,"width",0);D(this,"height",0);D(this,"scrollHeight",0);D(this,"scrollWidth",0);D(this,"debouncedResize");D(this,"wrapperResizeObserver");D(this,"contentResizeObserver");D(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});D(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});D(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=d6(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Yx=class{constructor(){D(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},Tg=100/6,hn={passive:!1},p6=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){D(this,"touchStart",{x:0,y:0});D(this,"lastDelta",{x:0,y:0});D(this,"window",{width:0,height:0});D(this,"emitter",new Yx);D(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});D(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});D(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});D(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?Tg:r===2?this.window.width:1,o=r===1?Tg:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});D(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hn),this.element.addEventListener("touchstart",this.onTouchStart,hn),this.element.addEventListener("touchmove",this.onTouchMove,hn),this.element.addEventListener("touchend",this.onTouchEnd,hn)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,hn),this.element.removeEventListener("touchstart",this.onTouchStart,hn),this.element.removeEventListener("touchmove",this.onTouchMove,hn),this.element.removeEventListener("touchend",this.onTouchEnd,hn)}},Zd=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:s=35,duration:a,easing:l=k=>Math.min(1,1.001-Math.pow(2,-10*k)),lerp:u=.1,infinite:c=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:m=1,wheelMultiplier:y=1,autoResize:x=!0,prevent:S,virtualScroll:p,overscroll:h=!0,autoRaf:g=!1,__experimental__naiveDimensions:C=!1}={}){D(this,"_isScrolling",!1);D(this,"_isStopped",!1);D(this,"_isLocked",!1);D(this,"_preventNextNativeScrollEvent",!1);D(this,"_resetVelocityTimeout",null);D(this,"__rafID",null);D(this,"isTouching");D(this,"time",0);D(this,"userData",{});D(this,"lastVelocity",0);D(this,"velocity",0);D(this,"direction",0);D(this,"options");D(this,"targetScroll");D(this,"animatedScroll");D(this,"animate",new f6);D(this,"emitter",new Yx);D(this,"dimensions");D(this,"virtualScroll");D(this,"onPointerDown",e=>{e.button===1&&this.reset()});D(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");if(this.isTouching=r.type==="touchstart"||r.type==="touchmove",this.options.syncTouch&&i&&r.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const a=t===0&&n===0,l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let u=r.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const c=this.options.prevent;if(u.find(S=>{var p,h,g;return S instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(S))||((p=S.hasAttribute)==null?void 0:p.call(S,"data-lenis-prevent"))||i&&((h=S.hasAttribute)==null?void 0:h.call(S,"data-lenis-prevent-touch"))||o&&((g=S.hasAttribute)==null?void 0:g.call(S,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.preventDefault();const m=i&&this.options.syncTouch,x=i&&r.type==="touchend"&&Math.abs(d)>5;x&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...m?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});D(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});D(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=a6,(!e||e===document.documentElement||e===document.body)&&(e=window),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaMultiplier:s,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:d,orientation:f,touchMultiplier:m,wheelMultiplier:y,autoResize:x,prevent:S,virtualScroll:p,overscroll:h,autoRaf:g,__experimental__naiveDimensions:C},this.dimensions=new h6(e,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new p6(n,{touchMultiplier:m,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,duration:i=this.options.duration,easing:o=this.options.easing,lerp:s=this.options.lerp,onStart:a,onComplete:l,force:u=!1,programmatic:c=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof e=="string"&&["top","left","start"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(d=e),d){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?y.left:y.top}const m=d.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=Hx(0,e,this.limit),e===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}c||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:i,easing:o,lerp:s,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),c&&(this.targetScroll=d),m||this.emit(),m&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?c6(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Gx=w.createContext(),Kx=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(""),o=s=>{n(!0),i(s)};return w.useEffect(()=>{if(t){const s=setTimeout(()=>{n(!1)},800);return()=>clearTimeout(s)}},[t]),v.jsx(Gx.Provider,{value:{runTransition:t,setRunTransition:n,transitionDirection:r,setTransitionDirection:i,triggerTransition:o},children:e})},bi=()=>w.useContext(Gx),Xe=({width:e,border:t,onClick:n,color:r,padding:i,backgroundColor:o,invertedColors:s,small:a,label:l,previous:u,next:c,cleaning:f,showCopyAlert:d,copyMessage:m,showViewSwitch:y,animationY:x})=>v.jsxs(m6,{children:[v.jsx(S6,{onClick:n,color:r,backgroundColor:o,padding:i,cleaning:f,width:e,border:t,invertedColors:s,small:a,showViewSwitch:y,children:u||c?v.jsxs(v.Fragment,{children:[u&&v.jsxs(v.Fragment,{children:[v.jsx(Ia,{color:r,backgroundColor:o,invertedColors:s,icon:H3})," ",l]}),c&&v.jsxs(v.Fragment,{children:[l," ",v.jsx(Ia,{color:r,backgroundColor:o,invertedColors:s,icon:W3})]})]}):l}),d&&m&&v.jsx(k6,{color:r,backgroundColor:o,className:"clicked",animationY:x,children:m})]});Xe.propTypes={width:I.string,border:I.bool,onClick:I.func,color:I.string,backgroundColor:I.string,invertedColors:I.bool,shadowColor:I.string,label:I.node,previous:I.bool,next:I.bool,cleaning:I.bool,showCopyAlert:I.bool,copyMessage:I.string};const m6=E.div`
  position: relative;
  display: inline-flex;
`,Eg=()=>K`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
`,Ag=()=>K`
  0% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
`,g6=K`
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
`,v6=K`
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
    left: -100%;
    opacity: 1;
  }
  100% {
    left: 200%;
    opacity: 1;
  }
  `,Ia=E(Ne)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5em;
  height: 0.5em;
  font-size: 1.5em;
  color: ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
`,S6=E.button`
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
  ${e=>rl`
    &:hover {
      transform: translateY(-0.3vw);
      animation: ${Eg(e.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:not(:hover) {
      animation: ${Ag(e.shadowColor||"var(--dark)")} 0.8s;
      border-color: ${t=>t.border?`1px solid ${t.color}`:t.invertedColors&&t.border?t.backgroundColor:"transparent"};
      background-color: ${t=>t.showViewSwitch?t.color:"transparent"};
    }

    &:focus {
      transform: translateY(-0.3vw);
      animation: ${Eg(e.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
    }

    &:focus:not(:hover) {
      transform: translateY(0);
      animation: ${Ag(e.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border-color: ${e.border?e.color:e.invertedColors&&e.border?e.backgroundColor:"transparent"};
    }

    &:active {
      color: ${t=>t.invertedColors?t.color:t.backgroundColor||"transparent"};
      background-color: ${t=>t.invertedColors?t.backgroundColor:t.color||"var(--dark)"};
      transition: color 0.1s, background-color 0.1s;

      ${Ia} {
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

      ${Ia} {
        color: ${e=>e.invertedColors?e.color:e.backgroundColor||"var(--dark)"};
      }
    }
  }
`,k6=E.div`
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
    animation: ${e=>e.animationY?v6:g6} 2s forwards;

    @media (max-width: 768px) and (min-width: 320px) {
      animation: ${e=>e.animationY?x6:y6} 1.5s forwards;
      width: 80px;
      height: 25px;
      padding: 4px;
      left: ${e=>e.animationY?"-60%":"100%"};
      margin-left: 1em;
      font-size: 0.8rem;
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
      animation: ${w6} 0.5s ease-in-out;
      animation-delay: 0.3s;
    }
  }
`;function C6({title:e,shadowColor:t,isOpen:n}){const{card:r}=yt(),i=Wo(),{setRunTransition:o,triggerTransition:s}=bi(),a=window.location.pathname.replace("/My-portfolio/","").replace("/",""),l=r.find(y=>y.path===a)||r[0],u=r.findIndex(y=>y.path===a),c=l.color,f=l.backgroundColor,d=()=>{o(!0),s("previous");const y=(u-1+r.length)%r.length,x=r[y].path,S=setTimeout(()=>{o(!1),i(`/${x}`)},800);return()=>{clearTimeout(S)}},m=()=>{o(!0),s("next");const y=(u+1)%r.length,x=r[y].path,S=setTimeout(()=>{o(!1),i(`/${x}`)},800);return()=>{clearTimeout(S)}};return v.jsxs(b6,{isOpen:n,children:[v.jsx(jg,{className:"navigation-buttons",style:{marginRight:"3em"},children:v.jsx(Xe,{onClick:d,style:{color:c},color:c,shadowColor:t,backgroundColor:f,label:"Previous Project",previous:!0,width:"10em"})}),v.jsx(P6,{children:e}),v.jsx(jg,{className:"navigation-buttons",children:v.jsx(Xe,{onClick:m,style:{color:c},color:c,shadowColor:t,backgroundColor:f,label:"Next Project",next:!0,width:"10em"})})]})}const b6=E.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  gap: 6em;
  margin-top: 4vh;
  z-index: 99;
  opacity: ${({isOpen:e})=>e?0:1};
  visibility: ${({isOpen:e})=>e?"hidden":"visible"};
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
`,jg=E.div`
  width: 10em;
`,P6=E.h1`
 font-size: clamp(45px, 5vw, 100px);
 font-family: 'Poiret One';

 @media (max-width: 768px) and (min-width: 320px) {
  margin-top: 1em;
 }


`;Xx.propTypes={descriptions:I.shape({primary:I.string,secondary:I.string,tertiary:I.string,quaternary:I.string}).isRequired,repos:I.array.isRequired,color:I.string.isRequired,backgroundColor:I.string.isRequired,showViewSwitch:I.bool.isRequired,onSwitchView:I.func.isRequired,isSwitchActive:I.bool.isRequired};function Xx({descriptions:e,repos:t,color:n,backgroundColor:r,showViewSwitch:i,onSwitchView:o,isSwitchActive:s}){const a=()=>{if(i){const l=s?t.find(u=>u.browser):t.find(u=>u.native);l&&window.open(s?l.browser:l.native,"_blank")}else window.open(Object.values(t[0])[0],"_blank")};return v.jsxs(T6,{children:[e.primary&&v.jsxs(mu,{children:[e.primary.charAt(0)&&v.jsx("span",{style:{fontSize:"1.25em",fontWeight:"bold"},children:e.primary.charAt(0)}),e.primary.slice(1)]}),e.secondary&&v.jsx(mu,{children:e.secondary}),e.tertiary&&v.jsx(mu,{children:e.tertiary}),v.jsxs(j6,{showViewSwitch:i,children:[v.jsx(E6,{children:v.jsx(A6,{color:n,children:v.jsx(Xe,{color:n,backgroundColor:r,small:!0,onClick:a,label:v.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5em"},children:v.jsx(R6,{children:t[0].icon})})})})}),i&&v.jsx(M6,{children:v.jsx(I6,{children:v.jsx(Xe,{onClick:o,color:n,border:!0,pulse:!0,backgroundColor:r,label:s?"Show Native":"Show Browser",invertedColors:!0,showViewSwitch:i})})})]})]})}const T6=E.div`
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
`,mu=E.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1em;
    line-height: 1.5;
  }
`,E6=E.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 90;
`,A6=E.div`
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
`,j6=E.div`
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
`,R6=E.div`
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
`,M6=E.div`
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
`,I6=E.div`
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
`;function L6({color:e,images:t,scrollProgress:n,isNative:r,doubleRepo:i,isSwitchActive:o}){return v.jsx(N6,{isNative:r,isSwitchActive:o,doubleRepo:i,children:v.jsx(D6,{children:t.map((s,a)=>{const l=a/t.length,u=(a+1)/t.length,c=.1/t.length,f=Hi(n,[l-c,l+c,u-c,u+c],a===0?[1,1,1,.2]:a===t.length-1?[.1,1,1,1]:[.1,1,1,.2]),d=ef(f,{stiffness:30,damping:12,mass:1.5,restDelta:1e-5});return v.jsx(_6,{as:pe.div,color:e,style:{opacity:d}},a)})})},o)}const O6=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,N6=E.div`
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
  animation: ${O6} 0.5s ease-in-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 1536px) and (min-width: 769px) {
    bottom: 0;
    right: ${e=>e.isNative?"5vw":"4vw"};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`,D6=E.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,_6=E.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${e=>e.color};
  position: relative;
  overflow: hidden;
`,Qx=w.createContext(),z6=({children:e})=>{const[t,n]=w.useState(!1);return v.jsx(Qx.Provider,{value:{isPopoverOpen:t,setIsPopoverOpen:n},children:e})},qx=()=>{const e=w.useContext(Qx);if(e===void 0)throw new Error("usePopover must be used within a PopoverProvider");return e},$6=({image:e,images:t=[],onClose:n,color:r,backgroundColor:i,invertedColors:o,doubleRepo:s,shadowColor:a,isNative:l})=>{const{setIsPopoverOpen:u}=qx(),[c,f]=w.useState(t.indexOf(e)),[d,m]=w.useState(0);w.useEffect(()=>{t.indexOf(e)===-1?f(0):f(t.indexOf(e))},[e,t]),w.useEffect(()=>(u(!!e),()=>u(!1)),[e,u]);const y=()=>{m(1),f(h=>(h+1)%t.length)},x=()=>{m(-1),f(h=>(h-1+t.length)%t.length)},S=t[c],p={enter:h=>({x:h>0?300:-300,opacity:0,scale:.98,filter:"blur(4px)"}),center:{zIndex:1,x:0,opacity:1,scale:1,filter:"blur(0px)"},exit:h=>({zIndex:0,x:h<0?300:-300,opacity:0,scale:.98,filter:"blur(4px)"})};return v.jsx(Dc,{children:e&&v.jsx(F6,{as:pe.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n,children:v.jsxs(V6,{isNative:l,as:pe.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onClick:h=>h.stopPropagation(),children:[v.jsxs(W6,{isNative:l,children:[v.jsx(B6,{isNative:l,children:v.jsx(Dc,{mode:"wait",custom:d,initial:!1,children:v.jsx(U6,{as:pe.img,src:S.src,alt:S.alt||"Image",custom:d,variants:p,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:200,damping:18,mass:.4,restSpeed:.5},opacity:{duration:.2,ease:"easeInOut"},scale:{duration:.2,ease:"easeOut"},filter:{duration:.15,ease:"easeOut"}},onClick:n,isNative:l,backgroundColor:i},S.src)})}),v.jsx(H6,{isNative:l,children:v.jsx(Xe,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:n,label:"X",padding:".7em",border:!0,hasIcon:!0,small:!0})})]}),v.jsxs(Y6,{isNative:l,children:[v.jsx(Xe,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:x,width:"7em",label:"Previous",border:!0,title:!0,hasIcon:!0,previous:!0}),v.jsx(Xe,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:y,label:"Next ",width:"7em",border:!0,title:!0,hasIcon:!0,next:!0})]})]})})})},F6=E(pe.div)`
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
`,V6=E(pe.div)`
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
`,B6=E.div`
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
`,U6=E(pe.img)`
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
`,W6=E.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  position: relative;
`,H6=E.div`
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
`,Y6=E.div`
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
`;function tf({images:e=[],backgroundColor:t,color:n,invertedColors:r,isNative:i,doubleRepo:o,isSwitchActive:s,textColor:a}){const l=w.useRef(null),[u,c]=w.useState(0),[f,d]=w.useState(null),[m,y]=w.useState(null),[x,S]=w.useState(!1),{scrollYProgress:p}=Cg({container:l,offset:["start start","end end"]});w.useEffect(()=>{const k=new Zd({wrapper:l.current,content:l.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});y(k);function b(P){k.raf(P),requestAnimationFrame(b)}return requestAnimationFrame(b),()=>{k.destroy()}},[]);const h=(k,b)=>{const P=b===0?.1:.3;k>(b===0?.3:.5)?c(b):k<P&&b>0&&c(b-1)};if(!e||e.length===0)return null;const g=k=>{d(k),m==null||m.stop()},C=()=>{d(null),m==null||m.start()};return w.useEffect(()=>{var P;const k=()=>{var T;!x&&((T=l.current)==null?void 0:T.scrollTop)>20&&S(!0)};if(window.innerWidth<=768&&window.innerWidth>=321)return(P=l.current)==null||P.addEventListener("scroll",k),()=>{var T;return(T=l.current)==null?void 0:T.removeEventListener("scroll",k)}},[x]),v.jsxs(G6,{ref:l,isNative:i,doubleRepo:o,children:[window.innerWidth<=768&&window.innerWidth>=321&&!x&&v.jsx(J6,{color:n}),e.map((k,b)=>{const P=w.useRef(null),{scrollYProgress:T}=Cg({target:P,container:l,offset:["start 60%","center center"],default:0}),_=Hi(p||0,[0,1],[1,1-(e.length-b)*.05]),R=Hi(p||0,[0,1],[0,-((e.length-b)*15)]);v4(T,"change",j=>{h(j,b)});const F=Hi(T,[0,.5,1],[0,1,1]),Ve=Hi(T,[0,.5,1],[1.5,1,1]),Be=ef(F,{stiffness:100,damping:20}),je=ef(Ve,{stiffness:100,damping:20}),Wt=k.src||k,Qe=k.alt||`Image ${b+1}`,U=(j,O,N)=>{const G=75/(O-1),X=15+j*G,qe=Math.min(X,90);return`color-mix(in srgb, ${N} ${qe}%, black)`};return v.jsxs(K6,{onClick:()=>g(k),ref:P,isFirst:b===0,isLast:b===e.length-1,isNative:i,textColor:a,style:{backgroundColor:U(b,e.length,r?n:t),color:r?t:n,top:i?`${b*10}px`:`${b*10}px`,marginBottom:b===e.length-1?"40vh":"0",scale:_,y:R},children:[v.jsx(X6,{children:v.jsx(Q6,{children:k.info})}),v.jsx(q6,{isNative:i,children:v.jsx(Z6,{src:Wt,alt:Qe,style:{opacity:Be,scale:je}})})]},k.id||b)}),v.jsx($6,{image:f,images:e,onClose:C,color:n,backgroundColor:t,invertedColors:r,isNative:i,doubleRepo:o}),v.jsx(L6,{color:n,images:e,scrollProgress:p,isNative:i,doubleRepo:o,isSwitchActive:s})]})}const G6=E.div`
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
`,K6=E(pe.div)`
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

`,X6=E.div`
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
`,Q6=E.p`
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
`,q6=E.div`
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
`,Z6=E(pe.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`,J6=E.div`
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
`,eA=({nativeImages:e,browserImages:t,backgroundColor:n,color:r,invertedColors:i,doubleRepo:o,isSwitchActive:s})=>{const a={nativeView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:"-100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}}},l={nativeView:{x:"100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},hidden:{x:"100%",opacity:0}};return v.jsx(tA,{children:v.jsxs(nA,{children:[v.jsx(Rg,{variants:a,animate:s?"browserView":"nativeView",initial:"nativeView",children:v.jsx(tf,{images:e,backgroundColor:n,color:r,invertedColors:i,isNative:!0,isSwitchActive:s,doubleRepo:o})}),v.jsx(Rg,{variants:l,animate:s?"browserView":"nativeView",initial:"hidden",isSwitchActive:s,style:{position:"absolute",width:"100%",height:"100%",right:s?"5em":"0"},children:v.jsx(tf,{images:t,backgroundColor:n,color:r,invertedColors:i,isNative:!1,isSwitchActive:s,doubleRepo:o})})]})})},tA=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 1vh;
`,Rg=E(pe.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  right: ${e=>e.isSwitchActive?"5em":"0"};

  @media (max-width: 768px) and (min-width: 320px) {
    right: ${e=>e.isSwitchActive?"0":"3em"};
    left: -2.5em;
  }
`,nA=E.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15vh);
  overflow: hidden;
`;function es({title:e,descriptions:t,repos:n,nativeImages:r=[],browserImages:i=[],isNative:o,isBrowser:s,invertedColors:a,textColor:l,isOpen:u}){const[c,f]=w.useState(!1),[d,m]=w.useState(!1),[y,x]=w.useState(null),[S,p]=w.useState(null),[h,g]=w.useState(!1),{card:C}=yt(),k=Wo(),{setRunTransition:b,triggerTransition:P}=bi(),T=window.location.pathname.replace("/My-portfolio/","").replace("/",""),_=C.find(Q=>Q.path===T)||C[0],R=_.color,F=_.backgroundColor,Ve=_.shadow,Be=50,je=w.useRef(null),Wt=w.useRef(null),[Qe,U]=w.useState(null);w.useEffect(()=>{f(o&&s)},[o,s]),w.useEffect(()=>{if(window.matchMedia("(max-width: 768px)").matches&&je.current){let xe=function(Pe){me.raf(Pe),requestAnimationFrame(xe)};const me=new Zd({wrapper:je.current,content:Wt.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return U(me),requestAnimationFrame(xe),()=>{me.destroy()}}},[]),w.useEffect(()=>{const Q=()=>{je.current&&g(je.current.scrollTop>300)},xe=je.current;return xe&&xe.addEventListener("scroll",Q),()=>{xe&&xe.removeEventListener("scroll",Q)}},[]);const j=()=>{m(!d)},O=()=>{if(!y||!S)return;const Q=y-S,xe=Q>Be,me=Q<-Be,Pe=C.findIndex(Ht=>Ht.path===T);if(xe){b(!0),P("next");const Ht=(Pe+1)%C.length,cn=C[Ht].path,lt=setTimeout(()=>{b(!1),k(`/${cn}`)},800);return()=>clearTimeout(lt)}if(me){b(!0),P("previous");const Ht=(Pe-1+C.length)%C.length,cn=C[Ht].path,lt=setTimeout(()=>{b(!1),k(`/${cn}`)},800);return()=>clearTimeout(lt)}},N=Q=>{p(null),x(Q.touches[0].clientX)},G=Q=>{p(Q.touches[0].clientX)},X=()=>{O()},qe=()=>{Qe&&Qe.scrollTo(0)};return v.jsxs(iA,{ref:je,backgroundColor:F,onTouchStart:N,onTouchMove:G,onTouchEnd:X,children:[v.jsxs(oA,{ref:Wt,color:R,children:[v.jsx(aA,{backgroundColor:F,children:v.jsx(C6,{title:e,shadowColor:Ve,isOpen:u})}),v.jsxs(sA,{children:[v.jsx(Xx,{descriptions:t,repos:n,color:R,backgroundColor:F,showViewSwitch:o&&s,onSwitchView:j,isSwitchActive:d}),v.jsx(uA,{children:o&&s?v.jsx(lA,{children:v.jsx(eA,{nativeImages:r,browserImages:i,backgroundColor:F,color:R,textColor:l,invertedColors:a,doubleRepo:c,isSwitchActive:d})}):v.jsx(tf,{images:o?r:i,backgroundColor:F,color:R,textColor:l,invertedColors:a,isNative:o})})]})]}),v.jsx(cA,{onClick:qe,show:h,color:R,backgroundColor:F,children:"↑"})]})}const rA=K`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,iA=E.div`
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

`,oA=E.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  animation: ${rA} 0.8s forwards;
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
`,sA=E.div`
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
`,aA=E.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 90;
  background-color: ${e=>e.backgroundColor};

  @media (max-width: 768px) and (min-width: 320px) {
    position: relative;
    z-index: 0;
    .navigation-buttons {
      display: none;
    }
  }
`,lA=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`,uA=E(pe.div)`
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
`,cA=E.button`
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
`;function ts(){const{runTransition:e,transitionDirection:t}=bi(),{card:n}=yt(),r=window.location.pathname.replace("/My-portfolio/","").replace("/",""),i=n.findIndex(u=>u.path===r),o=(i-1+n.length)%n.length,s=(i+1)%n.length,a=n[s].backgroundColor,l=n[o].backgroundColor;return v.jsx(v.Fragment,{children:e&&v.jsx(hA,{direction:t,color:t==="next"?a:l})})}const fA=K`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,dA=K`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,hA=E(pe.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: ${e=>e.color};
  animation: ${e=>e.direction==="next"?fA:dA} 0.7s ease-in-out forwards;
`;function pA(){const{card:e}=yt(),t=e.find(s=>s.path==="chatapp"),[n,r]=w.useState(!0),[i,o]=w.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsx(es,{title:t.title,descriptions:t.descriptions,repos:t.repos,nativeImages:t.images.nativeImage,isNative:n,isBrowser:i,previousPage:!0,nextPage:!0}),v.jsx(ts,{})]})}function mA(){const{runTransition:e}=bi(),{card:t}=yt(),n=t.find(o=>o.path==="webbshop"),[r,i]=w.useState(!0);return v.jsxs(v.Fragment,{children:[v.jsx(es,{title:n.title,descriptions:n.descriptions,browserImages:n.images.browserImage,repos:n.repos,isBrowser:r}),e===!0?v.jsx(ts,{}):""]})}function gA(){const{runTransition:e}=bi(),{card:t}=yt(),n=t.find(r=>r.path==="movieapp");return v.jsxs(v.Fragment,{children:[v.jsx(es,{title:n.title,descriptions:n.descriptions,repos:n.repos,nativeImages:n.images.nativeImage,browserImages:n.images.browserImage,isNative:!0,isBrowser:!0}),e===!0?v.jsx(ts,{}):""]})}function vA(){const{card:e}=yt(),t=e.find(n=>n.path==="cleaning");return v.jsxs(v.Fragment,{children:[v.jsx(es,{title:t.title,descriptions:t.descriptions,repos:t.repos,browserImages:t.images.browserImage,invertedColors:!0}),v.jsx(ts,{})]})}function yA(){const{main:e}=yt(),t=w.useRef(null),n=w.useRef(null),[r,i]=w.useState(null),[o,s]=w.useState(0),[a,l]=w.useState("");w.useState(!1),w.useEffect(()=>{if(window.matchMedia("(max-width: 768px) and (min-width: 320px)").matches){let d=function(y){m.raf(y),requestAnimationFrame(d)};const m=new Zd({duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return i(m),requestAnimationFrame(d),()=>{m.destroy()}}},[]),w.useEffect(()=>{const f=setInterval(()=>{s(d=>d===Object.keys(e.images).length-1?0:d+1)},3e3);return()=>clearInterval(f)},[e.images]);const u=f=>{Object.keys(f)[0]==="email"?(l("Email copied!"),navigator.clipboard.writeText("emil.stjernlof@gmail.com"),setTimeout(()=>{l("")},3e3)):Object.keys(f)[0]==="browser"?window.open(f.browser,"_blank"):Object.keys(f)[0]==="linkedin"&&window.open(f.linkedin,"_blank")},c=f=>{f.song&&window.open(f.song,"_blank")};return v.jsx(SA,{ref:t,children:v.jsxs(kA,{ref:n,children:[v.jsxs(CA,{children:[v.jsx("h2",{children:e.title}),v.jsx(Ps,{delay:"0.2s",children:v.jsx("p",{children:e.descriptions.primary})}),v.jsx(Ps,{delay:"0.3s",children:v.jsx("p",{children:e.descriptions.secondary})}),v.jsx(Ps,{delay:"0.4s",children:v.jsx("p",{children:e.descriptions.tertiary})}),v.jsx(Ps,{delay:"0.5s",children:v.jsx("p",{children:e.descriptions.quaternary})})]}),v.jsxs(bA,{children:[v.jsxs(PA,{children:[v.jsx(TA,{children:Object.values(e.images).map((f,d)=>v.jsx(EA,{src:f,alt:`profile picture ${d+1}`,active:d===o},f))}),v.jsxs(AA,{children:[v.jsx(jA,{children:v.jsx(RA,{children:"What's in my headphones?"})}),e.music.map((f,d)=>v.jsx(MA,{children:v.jsx(IA,{children:v.jsx(Xe,{color:e.color,backgroundColor:e.backgroundColor,onClick:()=>c(f),width:"100%",height:"100%",border:!0,label:v.jsxs(Mg,{children:[e.musicIcon,v.jsx(LA,{children:v.jsxs(OA,{shouldScroll:f.songtitle.length>10,duration:`${f.songtitle.length*.6}s`,children:[f.songtitle," "]})})]})},d)})},d))]})]}),v.jsx(NA,{children:e.repos.map((f,d)=>v.jsx(DA,{children:v.jsx(Xe,{color:e.color,backgroundColor:e.backgroundColor,onClick:()=>u(f),label:v.jsx(Mg,{children:f.icon}),showCopyAlert:Object.keys(f)[0]==="email"&&a,copyMessage:a,small:!0})},d))})]})]})})}const Zx=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Jx=K`
  from {
    transform: translateY(5%);
  }
  to {
    transform: translateY(0);
  }
`,xA=K`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,wA=K`
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
`,SA=E.div`
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
`,kA=E.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: white;
  animation: ${Zx} 2s, ${Jx} 1s;
  margin: 5vh;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 80%;
    flex-direction: column;
    gap: 0;
    margin: 10vh 0 4vh 0;
    height: auto;
  }
`,CA=E.div`
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
`,Ps=E.div`
  margin: 1em 0;
  font-size: clamp(1rem, calc(0.1vw + .5rem), 13rem);

  p {
    opacity: 0;
    animation: ${xA} 1s forwards;
    animation-delay: ${e=>e.delay||"0s"};
    margin: 0;
  }



  @media (max-width: 768px) and (min-width: 320px) {
    max-height: 70%;
  }
`,bA=E.div`
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
`,PA=E.div`
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
`,TA=E.div`
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
`,EA=E.img`
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
`,AA=E.div`
  width: 280px;
  border-radius: 15px;
  padding: .5em 1em;
 

  @media (max-width: 768px) and (min-width: 320px) {
    width: 320px;
  }
`,jA=E.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1em 0;

  @media (max-width: 1536px) and (min-width: 768px) {
    padding: 0;
  }
`,RA=E.h4`
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
`,MA=E.div`
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
`,IA=E.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`,LA=E.div`
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
`,OA=E.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.2em;
  font-family: "Lato", sans-serif;
  ${e=>e.shouldScroll&&rl`
      animation: ${wA} ${t=>t.duration||"8s"} infinite;
      padding-right: 2em;
    `}

  &:hover {
    animation-play-state: paused;
  }
`,NA=E.div`
  display: flex;
  height: 5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
  opacity: 0;
  animation: ${Zx} 2s forwards, ${Jx} 1s forwards;
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
`,DA=E.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
  `,Mg=E.div`
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
`;function _A({about:e,setIsHoverButton:t}){const[n,r]=w.useState("");w.useState(!1);const[i,o]=w.useState(!1),[s,a]=w.useState(!1),[l,u]=w.useState(""),[c,f]=w.useState(!1),{card:d,main:m}=yt(),y=Wo(),{isPopoverOpen:x}=qx(),S=window.location.pathname.replace("/My-portfolio/","").replace("/",""),p=d.find(P=>P.path===S)||d[0];let h=p.color,g=p.backgroundColor,C=p.shadow;(S==="about"||S==="")&&(h=m.backgroundColor,g=m.color,C=m.shadow);const k=Uo();w.useEffect(()=>{f(!0);const P=setTimeout(()=>{r("")},3e3);return()=>clearTimeout(P)},[n]),w.useEffect(()=>{f(!1);const P=setTimeout(()=>{f(!0)},100);return()=>clearTimeout(P)},[k.pathname]);const b=(P,T)=>{o(!0),a(!0),u(T);const _=setTimeout(()=>{o(!1),y(P),a(!1)},800);return()=>{clearTimeout(_)}};return v.jsxs(v.Fragment,{children:[s&&v.jsx(VA,{color:i?l:""}),v.jsx(FA,{isPopoverOpen:x,path:S,color:h,backgroundColor:g,shadow:C,fadeIn:c,about:e,children:v.jsx(Xe,{color:h,backgroundColor:g,invertedColors:e,onClick:()=>b("/","white"),label:"Home"})})]})}const zA=K`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 1;
  }
`,$A=K`
  0% {
    transform: translate(50%, 50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%) scale(300);
    opacity: 1;
  }
`,FA=E.div`
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
`;const VA=E.div`
  position: absolute;
  width: 70%;
  height: 80%;
  right: 60%;
  bottom: 55%;
  border-radius: 50%;
  background-color: ${e=>e.color};
  animation: ${zA} 0.7s ease-in-out forwards;
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
    animation: ${$A} 1s ease-in-out forwards;
  }
`;function BA(){const{card:e}=yt(),t=e.find(n=>n.path==="dashboard");return v.jsxs(v.Fragment,{children:[v.jsx(es,{title:t.title,descriptions:t.descriptions,repos:t.repos,browserImages:t.images.browserImage,isBrowser:!0,invertedColors:!1}),v.jsx(ts,{})]})}const UA=()=>v.jsx(WA,{children:v.jsx(HA,{children:"ES"})}),WA=E.div`
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
  `,HA=E.div`
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
`,YA=()=>{const[e,t]=w.useState({x:null,y:null}),n=r=>{t({x:r.clientX,y:r.clientY})};return w.useEffect(()=>(window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)),[]),e},GA=({isHoverButton:e,isHoveringCards:t,cursorColor:n,cursorHoverColor:r,isOpen:i,backgroundColor:o})=>{const[s,a]=w.useState(!1),[l,u]=w.useState(!1),{x:c,y:f}=YA();let d,m,y;switch(!0){case t:d=80,m=window.innerWidth<=1536?10:-40,y=-40;break;case l:d=15,m=window.innerWidth<=1536?50:-10,y=-8;break;case e:d=40,m=-20,y=-20;break;case s:d=130,m=window.innerWidth<=1536?0:-60,y=-60;break;default:d=35,m=window.innerWidth<=1536?-(d/-1):-(d/2),y=-(d/2)}const x="Frontend developer in development";return w.useEffect(()=>{const S=()=>u(!0),p=()=>u(!1);return window.addEventListener("mousedown",S),window.addEventListener("mouseup",p),()=>{window.removeEventListener("mousedown",S),window.removeEventListener("mouseup",p)}},[]),v.jsx(v.Fragment,{children:v.jsx(KA,{children:v.jsx(XA,{animate:{WebkitMaskPosition:`${c-d-m}px ${f-d-y}px`,WebkitMaskSize:`${d}px`,backgroundColor:i&&c>window.innerWidth-240?o:t&&l||t?r:n},transition:{type:"tween",ease:"backOut",duration:.2,x:{type:"tween",ease:"backOut",duration:.2},y:{type:"tween",ease:"backOut",duration:.2},width:{type:"tween",ease:"backOut",duration:.4},height:{type:"tween",ease:"backOut",duration:.4}},style:{paddingRight:"4em",paddingTop:"8em"},isOpen:i,cursorColor:n,backgroundColor:o,children:location.pathname==="/My-portfolio/"&&!i&&v.jsx(QA,{onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)},style:{margin:"0"},children:x})})})})},KA=E.div`
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
`,XA=E(pe.div)`
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
`,QA=E.h4`
  width: 20em;
  pointer-events: auto; 
  
 `,qA=({color:e})=>{const t=`M100 0 L201 0 L201 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`,n=`M100 0 L201 0 L201 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`,r={initial:{d:t},enter:{d:n,transition:{duration:.8,ease:[.76,0,.24,1],delay:.2}},exit:{d:t,transition:{duration:.8,ease:[.76,0,.24,1]}}};return v.jsx(ZA,{children:v.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 201 100%",preserveAspectRatio:"none",children:v.jsx(pe.path,{fill:e,variants:r,initial:"initial",animate:"enter",exit:"exit"})})})},ZA=E.div`
  position: absolute;
  top: 0;
  left: -100px;
  width: 101px;
  height: 100%;
  pointer-events: none;
`,JA={initial:{x:"calc(100% + 100px)"},enter:{x:"0",transition:{duration:.8,ease:[.76,0,.24,1]}},exit:{x:"calc(100% + 100px)",transition:{duration:.8,ease:[.76,0,.24,1]}}},Ig={initial:{x:80},enter:e=>({x:0,transition:{duration:.8,ease:[.76,0,.24,1],delay:.08*e}}),exit:e=>({x:80,transition:{duration:.8,ease:[.76,0,.24,1],delay:.08*e}})},ej=({color:e,backgroundColor:t,isOpen:n,onNavigate:r})=>{const{main:i}=yt(),[o,s]=w.useState(""),a=l=>{Object.keys(l)[0]==="email"?(s("Email copied!"),navigator.clipboard.writeText("emil.stjernlof@gmail.com"),setTimeout(()=>{s("")},3e3)):Object.keys(l)[0]==="browser"?window.open(l.browser,"_blank"):Object.keys(l)[0]==="linkedin"&&window.open(l.linkedin,"_blank")};return v.jsx(v.Fragment,{children:v.jsx(Dc,{mode:"wait",children:n&&v.jsxs(tj,{as:pe.div,color:e,backgroundColor:t,initial:"initial",animate:"enter",exit:"exit",variants:JA,children:[v.jsx(qA,{color:e}),v.jsx(nj,{children:v.jsxs(oj,{children:[v.jsx(pe.div,{custom:0,variants:Ig,initial:"initial",animate:"enter",exit:"exit",children:v.jsx(Lg,{children:v.jsx(Xe,{label:v.jsx(rj,{children:"ES"}),invertedColors:!0,color:e,backgroundColor:t,onClick:l=>r("/about","var(--dark)",l)})})}),i.repos.map((l,u)=>v.jsx(pe.div,{custom:u+1,variants:Ig,initial:"initial",animate:"enter",exit:"exit",children:v.jsx(Lg,{children:v.jsx(Xe,{color:e,backgroundColor:t,invertedColors:!0,onClick:()=>a(l),label:v.jsx(ij,{children:l.icon}),showCopyAlert:Object.keys(l)[0]==="email"&&o,copyMessage:o,animationY:!0})})},u))]})})]})})})},tj=E(pe.div)`
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
`,nj=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,Lg=E.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
`,rj=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: clamp(1.8rem, 1.8vw, 2rem);
  font-weight: bold;
  padding-right: 0.1rem;
`,ij=E.div`
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
`,oj=E.div`
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
`,br=({color:e,backgroundColor:t,isOpen:n,setIsOpen:r})=>{const i=Uo(),o=Wo(),[s,a]=w.useState(!1),[l,u]=w.useState(!1),[c,f]=w.useState(""),[d,m]=w.useState({x:0,y:0}),y=()=>{r(!n)};w.useEffect(()=>{const S=p=>{const h=15*parseFloat(getComputedStyle(document.documentElement).fontSize);n&&p.clientX<window.innerWidth-h&&r(!1)};return document.addEventListener("click",S),()=>document.removeEventListener("click",S)},[n,r]);const x=(S,p,h)=>{m({x:h.clientX,y:h.clientY}),u(!0),a(!0),f(p),r(!1);const g=setTimeout(()=>{u(!1),o(S),a(!1)},1200);return()=>{clearTimeout(g)}};return v.jsxs(v.Fragment,{children:[s&&v.jsx(fj,{color:c,position:d}),v.jsxs(sj,{location:i,children:[i.pathname!=="/"&&v.jsx(Xe,{label:"Home",color:e,backgroundColor:t,onClick:S=>x("/","white",S)}),v.jsx(lj,{color:e,backgroundColor:t,isOpen:n,onClick:y}),v.jsx(ej,{color:e,backgroundColor:t,isOpen:n,onNavigate:(S,p,h)=>x(S,p,h)})]})]})},sj=E.div`
  position: fixed;
  display: flex;
  width: calc(100% - 4rem);
  height: 5vh;
  justify-content: ${({location:e})=>e.pathname==="/"?"flex-end":"space-between"};
  align-items: center;
  z-index: 100;
  padding: 2rem;
`,aj=K`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,lj=E.button`
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
  animation: ${aj} 0.8s ease-in-out forwards ;
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
`,uj=K`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(100);
    opacity: 1;
  }
`,cj=K`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(300);
    opacity: 1;
  }
`,fj=E.div`
  position: fixed;
  width: 100px;
  height: 100px;
  left: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  animation: ${uj} 1.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    forwards;
  z-index: 9999;
  opacity: 1;
  transform-origin: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 20px;
    height: 20px;
    animation: ${cj} 1.2s
      cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }
`;function dj(){const{runTransition:e}=bi(),t=Uo(),[n,r]=w.useState(""),[i,o]=w.useState(!0),[s,a]=w.useState(!1),[l,u]=w.useState(!1),[c,f]=w.useState(""),[d,m]=w.useState(""),[y,x]=w.useState(!0),[S,p]=w.useState(1),[h,g]=w.useState(!1),C="/",k="/cleaning",b="/chatapp",P="/webbshop",T="/movieapp",_="/dashboard";return w.useEffect(()=>{let R="",F="";switch(t.pathname){case C:R="white",F="var(--dark)";break;case k:R="var(--yellowish)",F="var(--dark)";break;case P:R="var(--greenish)",F="var(--bisque)";break;case b:R="var(--light-purple)",F="var(--neon-green)";break;case T:R="var(--darker)",F="var(--redish)";break;case _:R="var(--blueish)",F="var(--light-blueish)";break;case"/about":R="white",F="white";break;default:R=""}p(0),setTimeout(()=>{r(R),p(1),m()},300),f(F)},[t.pathname]),w.useEffect(()=>{const R=setTimeout(()=>o(!1),3200);return()=>clearTimeout(R)},[]),w.useEffect(()=>{e&&(x(!1),setTimeout(()=>x(!0)))},[e]),v.jsx(v.Fragment,{children:i?v.jsx(UA,{}):v.jsx(ll,{children:v.jsxs(z6,{children:[v.jsx(GA,{isHoverButton:l,isHoveringCards:s,cursorColor:c,cursorHoverColor:d,isOpen:h,backgroundColor:n}),v.jsx(hj,{color:n,children:v.jsx(Kx,{children:v.jsx(pj,{children:v.jsxs(gk,{children:[v.jsx(pn,{path:C,element:v.jsxs(Yn,{children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(J4,{setCursorHoverColor:m,setIsHoveringCards:a,isOpen:h})]})}),v.jsx(pn,{path:k,element:v.jsxs(Yn,{className:"scrollCleaning",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(vA,{})]})}),v.jsx(pn,{path:b,element:v.jsxs(Yn,{className:"scrollChatApp",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(pA,{isOpen:h})]})}),v.jsx(pn,{path:P,element:v.jsxs(Yn,{className:"scrollWebbShop",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(mA,{isOpen:h})]})}),v.jsx(pn,{path:T,element:v.jsxs(Yn,{className:"scrollMovies",children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(gA,{isOpen:h})]})}),v.jsx(pn,{path:_,element:v.jsxs(Yn,{children:[v.jsx(br,{color:c,backgroundColor:n,isOpen:h,setIsOpen:g}),v.jsx(BA,{isOpen:h})]})}),v.jsx(pn,{path:"/about",element:v.jsxs(Yn,{children:[v.jsx(_A,{path:"/about",about:!0}),v.jsx(yA,{})]})})]})})})})]})})})}const hj=E.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${e=>e.color};
`,pj=E.div`
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
`;gu.createRoot(document.getElementById("root")).render(v.jsx(en.StrictMode,{children:v.jsx(yk,{basename:"/My-portfolio/",children:v.jsx(Kx,{children:v.jsx(xC,{children:v.jsx(ll,{children:v.jsx(dj,{router:ry})})})})})}));
