var Zx=Object.defineProperty;var Jx=(e,t,n)=>t in e?Zx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(Jx(e,typeof t!="symbol"?t+"":t,n),n);function ew(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ig(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lg={exports:{}},Ma={},Ng={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),tw=Symbol.for("react.portal"),nw=Symbol.for("react.fragment"),rw=Symbol.for("react.strict_mode"),iw=Symbol.for("react.profiler"),ow=Symbol.for("react.provider"),sw=Symbol.for("react.context"),aw=Symbol.for("react.forward_ref"),lw=Symbol.for("react.suspense"),uw=Symbol.for("react.memo"),cw=Symbol.for("react.lazy"),Zd=Symbol.iterator;function fw(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dg=Object.assign,_g={};function pi(e,t,n){this.props=e,this.context=t,this.refs=_g,this.updater=n||Og}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zg(){}zg.prototype=pi.prototype;function tf(e,t,n){this.props=e,this.context=t,this.refs=_g,this.updater=n||Og}var nf=tf.prototype=new zg;nf.constructor=tf;Dg(nf,pi.prototype);nf.isPureReactComponent=!0;var Jd=Array.isArray,Fg=Object.prototype.hasOwnProperty,rf={current:null},$g={key:!0,ref:!0,__self:!0,__source:!0};function Vg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Fg.call(t,r)&&!$g.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:e,key:o,ref:s,props:i,_owner:rf.current}}function dw(e,t){return{$$typeof:zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function of(e){return typeof e=="object"&&e!==null&&e.$$typeof===zo}function hw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eh=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hw(""+e.key):t.toString(36)}function bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zo:case tw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+gl(s,0):r,Jd(i)?(n="",e!=null&&(n=e.replace(eh,"$&/")+"/"),bs(i,t,n,"",function(u){return u})):i!=null&&(of(i)&&(i=dw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(eh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Jd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+gl(o,a);s+=bs(o,t,n,l,i)}else if(l=fw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+gl(o,a++),s+=bs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function es(e,t,n){if(e==null)return e;var r=[],i=0;return bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function pw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Ps={transition:null},mw={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ps,ReactCurrentOwner:rf};$.Children={map:es,forEach:function(e,t,n){es(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return es(e,function(){t++}),t},toArray:function(e){return es(e,function(t){return t})||[]},only:function(e){if(!of(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=pi;$.Fragment=nw;$.Profiler=iw;$.PureComponent=tf;$.StrictMode=rw;$.Suspense=lw;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dg({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=rf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Fg.call(t,l)&&!$g.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zo,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:sw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ow,_context:e},e.Consumer=e};$.createElement=Vg;$.createFactory=function(e){var t=Vg.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:aw,render:e}};$.isValidElement=of;$.lazy=function(e){return{$$typeof:cw,_payload:{_status:-1,_result:e},_init:pw}};$.memo=function(e,t){return{$$typeof:uw,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ps.transition;Ps.transition={};try{e()}finally{Ps.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return $e.current.useCallback(e,t)};$.useContext=function(e){return $e.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};$.useEffect=function(e,t){return $e.current.useEffect(e,t)};$.useId=function(){return $e.current.useId()};$.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return $e.current.useMemo(e,t)};$.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};$.useRef=function(e){return $e.current.useRef(e)};$.useState=function(e){return $e.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return $e.current.useTransition()};$.version="18.2.0";Ng.exports=$;var w=Ng.exports;const Zt=Ig(w),gw=ew({__proto__:null,default:Zt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw=w,yw=Symbol.for("react.element"),xw=Symbol.for("react.fragment"),ww=Object.prototype.hasOwnProperty,Sw=vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kw={key:!0,ref:!0,__self:!0,__source:!0};function Bg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ww.call(t,r)&&!kw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:yw,type:e,key:o,ref:s,props:i,_owner:Sw.current}}Ma.Fragment=xw;Ma.jsx=Bg;Ma.jsxs=Bg;Lg.exports=Ma;var v=Lg.exports,gu={},Ug={exports:{}},rt={},Wg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,O){var D=R.length;R.push(O);e:for(;0<D;){var G=D-1>>>1,K=R[G];if(0<i(K,O))R[G]=O,R[D]=K,D=G;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var O=R[0],D=R.pop();if(D!==O){R[0]=D;e:for(var G=0,K=R.length,ee=K>>>1;G<ee;){var re=2*(G+1)-1,Be=R[re],xe=re+1,we=R[xe];if(0>i(Be,D))xe<K&&0>i(we,Be)?(R[G]=we,R[xe]=D,G=xe):(R[G]=Be,R[re]=D,G=re);else if(xe<K&&0>i(we,D))R[G]=we,R[xe]=D,G=xe;else break e}}return O}function i(R,O){var D=R.sortIndex-O.sortIndex;return D!==0?D:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=R)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function C(R){if(x=!1,g(R),!y)if(n(l)!==null)y=!0,at(S);else{var O=n(u);O!==null&&U(C,O.startTime-R)}}function S(R,O){y=!1,x&&(x=!1,p(T),T=-1),m=!0;var D=d;try{for(g(O),f=n(l);f!==null&&(!(f.expirationTime>O)||R&&!B());){var G=f.callback;if(typeof G=="function"){f.callback=null,d=f.priorityLevel;var K=G(f.expirationTime<=O);O=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&r(l),g(O)}else r(l);f=n(l)}if(f!==null)var ee=!0;else{var re=n(u);re!==null&&U(C,re.startTime-O),ee=!1}return ee}finally{f=null,d=D,m=!1}}var b=!1,P=null,T=-1,N=5,M=-1;function B(){return!(e.unstable_now()-M<N)}function Te(){if(P!==null){var R=e.unstable_now();M=R;var O=!0;try{O=P(!0,R)}finally{O?he():(b=!1,P=null)}}else b=!1}var he;if(typeof h=="function")he=function(){h(Te)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ut=st.port2;st.port1.onmessage=Te,he=function(){Ut.postMessage(null)}}else he=function(){k(Te,0)};function at(R){P=R,b||(b=!0,he())}function U(R,O){T=k(function(){R(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,at(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var D=d;d=O;try{return R()}finally{d=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=d;d=R;try{return O()}finally{d=D}},e.unstable_scheduleCallback=function(R,O,D){var G=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=D+K,R={id:c++,callback:O,priorityLevel:R,startTime:D,expirationTime:K,sortIndex:-1},D>G?(R.sortIndex=D,t(u,R),n(l)===null&&R===n(u)&&(x?(p(T),T=-1):x=!0,U(C,D-G))):(R.sortIndex=K,t(l,R),y||m||(y=!0,at(S))),R},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(R){var O=d;return function(){var D=d;d=O;try{return R.apply(this,arguments)}finally{d=D}}}})(Hg);Wg.exports=Hg;var Cw=Wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=w,tt=Cw;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gg=new Set,co={};function wr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(co[e]=t,e=0;e<t.length;e++)Gg.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function Pw(e){return vu.call(nh,e)?!0:vu.call(th,e)?!1:bw.test(e)?nh[e]=!0:(th[e]=!0,!1)}function Tw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ew(e,t,n,r){if(t===null||typeof t>"u"||Tw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function af(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sf,af);Re[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sf,af);Re[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sf,af);Re[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function lf(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ew(t,n,i,r)&&(n=null),r||i===null?Pw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ts=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),rh=Symbol.iterator;function Pi(e){return e===null||typeof e!="object"?null:(e=rh&&e[rh]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,vl;function Oi(e){if(vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var yl=!1;function xl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oi(e):""}function Aw(e){switch(e.tag){case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Pr:return"Portal";case yu:return"Profiler";case uf:return"StrictMode";case xu:return"Suspense";case wu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xg:return(e.displayName||"Context")+".Consumer";case Kg:return(e._context.displayName||"Context")+".Provider";case cf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ff:return t=e.displayName||null,t!==null?t:Su(e.type)||"Memo";case vn:t=e._payload,e=e._init;try{return Su(e(t))}catch{}}return null}function Rw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(t);case 8:return t===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jw(e){var t=qg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ns(e){e._valueTracker||(e._valueTracker=jw(e))}function Zg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ku(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ih(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jg(e,t){t=t.checked,t!=null&&lf(e,"checked",t,!1)}function Cu(e,t){Jg(e,t);var n=Ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bu(e,t.type,n):t.hasOwnProperty("defaultValue")&&bu(e,t.type,Ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bu(e,t,n){(t!=="number"||Gs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Di=Array.isArray;function Hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Di(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ln(n)}}function e0(e,t){var n=Ln(t.value),r=Ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ah(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function t0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?t0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rs,n0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mw=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){Mw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function r0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function i0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Iw=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(e,t){if(t){if(Iw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function df(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ju=null,Yr=null,Gr=null;function lh(e){if(e=Vo(e)){if(typeof ju!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Da(t),ju(e.stateNode,e.type,t))}}function o0(e){Yr?Gr?Gr.push(e):Gr=[e]:Yr=e}function s0(){if(Yr){var e=Yr,t=Gr;if(Gr=Yr=null,lh(e),t)for(e=0;e<t.length;e++)lh(t[e])}}function a0(e,t){return e(t)}function l0(){}var wl=!1;function u0(e,t,n){if(wl)return e(t,n);wl=!0;try{return a0(e,t,n)}finally{wl=!1,(Yr!==null||Gr!==null)&&(l0(),s0())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=Da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Mu=!1;if(Jt)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{Mu=!1}function Lw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Gi=!1,Ks=null,Xs=!1,Iu=null,Nw={onError:function(e){Gi=!0,Ks=e}};function Ow(e,t,n,r,i,o,s,a,l){Gi=!1,Ks=null,Lw.apply(Nw,arguments)}function Dw(e,t,n,r,i,o,s,a,l){if(Ow.apply(this,arguments),Gi){if(Gi){var u=Ks;Gi=!1,Ks=null}else throw Error(E(198));Xs||(Xs=!0,Iu=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function c0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uh(e){if(Sr(e)!==e)throw Error(E(188))}function _w(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return uh(i),e;if(o===r)return uh(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function f0(e){return e=_w(e),e!==null?d0(e):null}function d0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=d0(e);if(t!==null)return t;e=e.sibling}return null}var h0=tt.unstable_scheduleCallback,ch=tt.unstable_cancelCallback,zw=tt.unstable_shouldYield,Fw=tt.unstable_requestPaint,de=tt.unstable_now,$w=tt.unstable_getCurrentPriorityLevel,hf=tt.unstable_ImmediatePriority,p0=tt.unstable_UserBlockingPriority,Qs=tt.unstable_NormalPriority,Vw=tt.unstable_LowPriority,m0=tt.unstable_IdlePriority,Ia=null,_t=null;function Bw(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Hw,Uw=Math.log,Ww=Math.LN2;function Hw(e){return e>>>=0,e===0?32:31-(Uw(e)/Ww|0)|0}var is=64,os=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_i(a):(o&=s,o!==0&&(r=_i(o)))}else s=n&~i,s!==0?r=_i(s):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function Yw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ct(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Yw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function g0(){var e=is;return is<<=1,!(is&4194240)&&(is=64),e}function Sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Kw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function v0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var y0,mf,x0,w0,S0,Nu=!1,ss=[],Pn=null,Tn=null,En=null,po=new Map,mo=new Map,xn=[],Xw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Ei(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vo(t),t!==null&&mf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qw(e,t,n,r,i){switch(t){case"focusin":return Pn=Ei(Pn,e,t,n,r,i),!0;case"dragenter":return Tn=Ei(Tn,e,t,n,r,i),!0;case"mouseover":return En=Ei(En,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return po.set(o,Ei(po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mo.set(o,Ei(mo.get(o)||null,e,t,n,r,i)),!0}return!1}function k0(e){var t=Jn(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=c0(n),t!==null){e.blockedOn=t,S0(e.priority,function(){x0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ou(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ru=r,n.target.dispatchEvent(r),Ru=null}else return t=Vo(n),t!==null&&mf(t),e.blockedOn=n,!1;t.shift()}return!0}function dh(e,t,n){Ts(e)&&n.delete(t)}function qw(){Nu=!1,Pn!==null&&Ts(Pn)&&(Pn=null),Tn!==null&&Ts(Tn)&&(Tn=null),En!==null&&Ts(En)&&(En=null),po.forEach(dh),mo.forEach(dh)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Nu||(Nu=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,qw)))}function go(e){function t(i){return Ai(i,e)}if(0<ss.length){Ai(ss[0],e);for(var n=1;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Ai(Pn,e),Tn!==null&&Ai(Tn,e),En!==null&&Ai(En,e),po.forEach(t),mo.forEach(t),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&xn.shift()}var Kr=sn.ReactCurrentBatchConfig,Zs=!0;function Zw(e,t,n,r){var i=Y,o=Kr.transition;Kr.transition=null;try{Y=1,gf(e,t,n,r)}finally{Y=i,Kr.transition=o}}function Jw(e,t,n,r){var i=Y,o=Kr.transition;Kr.transition=null;try{Y=4,gf(e,t,n,r)}finally{Y=i,Kr.transition=o}}function gf(e,t,n,r){if(Zs){var i=Ou(e,t,n,r);if(i===null)Ml(e,t,r,Js,n),fh(e,r);else if(Qw(i,e,t,n,r))r.stopPropagation();else if(fh(e,r),t&4&&-1<Xw.indexOf(e)){for(;i!==null;){var o=Vo(i);if(o!==null&&y0(o),o=Ou(e,t,n,r),o===null&&Ml(e,t,r,Js,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var Js=null;function Ou(e,t,n,r){if(Js=null,e=df(r),e=Jn(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=c0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Js=e,null}function C0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($w()){case hf:return 1;case p0:return 4;case Qs:case Vw:return 16;case m0:return 536870912;default:return 16}default:return 16}}var Sn=null,vf=null,Es=null;function b0(){if(Es)return Es;var e,t=vf,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Es=i.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function hh(){return!1}function it(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?as:hh,this.isPropagationStopped=hh,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=it(mi),$o=ae({},mi,{view:0,detail:0}),e2=it($o),kl,Cl,Ri,La=ae({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?(kl=e.screenX-Ri.screenX,Cl=e.screenY-Ri.screenY):Cl=kl=0,Ri=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),ph=it(La),t2=ae({},La,{dataTransfer:0}),n2=it(t2),r2=ae({},$o,{relatedTarget:0}),bl=it(r2),i2=ae({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),o2=it(i2),s2=ae({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a2=it(s2),l2=ae({},mi,{data:0}),mh=it(l2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=f2[e])?!!t[e]:!1}function xf(){return d2}var h2=ae({},$o,{key:function(e){if(e.key){var t=u2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p2=it(h2),m2=ae({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=it(m2),g2=ae({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),v2=it(g2),y2=ae({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),x2=it(y2),w2=ae({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S2=it(w2),k2=[9,13,27,32],wf=Jt&&"CompositionEvent"in window,Ki=null;Jt&&"documentMode"in document&&(Ki=document.documentMode);var C2=Jt&&"TextEvent"in window&&!Ki,P0=Jt&&(!wf||Ki&&8<Ki&&11>=Ki),vh=String.fromCharCode(32),yh=!1;function T0(e,t){switch(e){case"keyup":return k2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function b2(e,t){switch(e){case"compositionend":return E0(t);case"keypress":return t.which!==32?null:(yh=!0,vh);case"textInput":return e=t.data,e===vh&&yh?null:e;default:return null}}function P2(e,t){if(Er)return e==="compositionend"||!wf&&T0(e,t)?(e=b0(),Es=vf=Sn=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return P0&&t.locale!=="ko"?null:t.data;default:return null}}var T2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!T2[e.type]:t==="textarea"}function A0(e,t,n,r){o0(r),t=ea(t,"onChange"),0<t.length&&(n=new yf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xi=null,vo=null;function E2(e){F0(e,0)}function Na(e){var t=jr(e);if(Zg(t))return e}function A2(e,t){if(e==="change")return t}var R0=!1;if(Jt){var Pl;if(Jt){var Tl="oninput"in document;if(!Tl){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Tl=typeof wh.oninput=="function"}Pl=Tl}else Pl=!1;R0=Pl&&(!document.documentMode||9<document.documentMode)}function Sh(){Xi&&(Xi.detachEvent("onpropertychange",j0),vo=Xi=null)}function j0(e){if(e.propertyName==="value"&&Na(vo)){var t=[];A0(t,vo,e,df(e)),u0(E2,t)}}function R2(e,t,n){e==="focusin"?(Sh(),Xi=t,vo=n,Xi.attachEvent("onpropertychange",j0)):e==="focusout"&&Sh()}function j2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na(vo)}function M2(e,t){if(e==="click")return Na(t)}function I2(e,t){if(e==="input"||e==="change")return Na(t)}function L2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:L2;function yo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vu.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ch(e,t){var n=kh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function M0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?M0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(){for(var e=window,t=Gs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gs(e.document)}return t}function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N2(e){var t=I0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&M0(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ch(n,o);var s=Ch(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var O2=Jt&&"documentMode"in document&&11>=document.documentMode,Ar=null,Du=null,Qi=null,_u=!1;function bh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||Ar==null||Ar!==Gs(r)||(r=Ar,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&yo(Qi,r)||(Qi=r,r=ea(Du,"onSelect"),0<r.length&&(t=new yf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rr={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionend:ls("Transition","TransitionEnd")},El={},L0={};Jt&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Oa(e){if(El[e])return El[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in L0)return El[e]=t[n];return e}var N0=Oa("animationend"),O0=Oa("animationiteration"),D0=Oa("animationstart"),_0=Oa("transitionend"),z0=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){z0.set(e,t),wr(t,[e])}for(var Al=0;Al<Ph.length;Al++){var Rl=Ph[Al],D2=Rl.toLowerCase(),_2=Rl[0].toUpperCase()+Rl.slice(1);Fn(D2,"on"+_2)}Fn(N0,"onAnimationEnd");Fn(O0,"onAnimationIteration");Fn(D0,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(_0,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z2=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function Th(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dw(r,t,void 0,e),e.currentTarget=null}function F0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Th(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Th(i,a,u),o=l}}}if(Xs)throw e=Iu,Xs=!1,Iu=null,e}function Q(e,t){var n=t[Bu];n===void 0&&(n=t[Bu]=new Set);var r=e+"__bubble";n.has(r)||($0(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),$0(n,e,r,t)}var us="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[us]){e[us]=!0,Gg.forEach(function(n){n!=="selectionchange"&&(z2.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[us]||(t[us]=!0,jl("selectionchange",!1,t))}}function $0(e,t,n,r){switch(C0(t)){case 1:var i=Zw;break;case 4:i=Jw;break;default:i=gf}n=i.bind(null,t,n,e),i=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}u0(function(){var u=o,c=df(n),f=[];e:{var d=z0.get(e);if(d!==void 0){var m=yf,y=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":m=p2;break;case"focusin":y="focus",m=bl;break;case"focusout":y="blur",m=bl;break;case"beforeblur":case"afterblur":m=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=v2;break;case N0:case O0:case D0:m=o2;break;case _0:m=x2;break;case"scroll":m=e2;break;case"wheel":m=S2;break;case"copy":case"cut":case"paste":m=a2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gh}var x=(t&4)!==0,k=!x&&e==="scroll",p=x?d!==null?d+"Capture":null:d;x=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=ho(h,p),C!=null&&x.push(wo(h,C,g)))),k)break;h=h.return}0<x.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:x}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",d&&n!==Ru&&(y=n.relatedTarget||n.fromElement)&&(Jn(y)||y[en]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Jn(y):null,y!==null&&(k=Sr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=ph,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=gh,C="onPointerLeave",p="onPointerEnter",h="pointer"),k=m==null?d:jr(m),g=y==null?d:jr(y),d=new x(C,h+"leave",m,n,c),d.target=k,d.relatedTarget=g,C=null,Jn(c)===u&&(x=new x(p,h+"enter",y,n,c),x.target=g,x.relatedTarget=k,C=x),k=C,m&&y)t:{for(x=m,p=y,h=0,g=x;g;g=Cr(g))h++;for(g=0,C=p;C;C=Cr(C))g++;for(;0<h-g;)x=Cr(x),h--;for(;0<g-h;)p=Cr(p),g--;for(;h--;){if(x===p||p!==null&&x===p.alternate)break t;x=Cr(x),p=Cr(p)}x=null}else x=null;m!==null&&Eh(f,d,m,x,!1),y!==null&&k!==null&&Eh(f,k,y,x,!0)}}e:{if(d=u?jr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var S=A2;else if(xh(d))if(R0)S=I2;else{S=j2;var b=R2}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=M2);if(S&&(S=S(e,u))){A0(f,S,n,c);break e}b&&b(e,d,u),e==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&bu(d,"number",d.value)}switch(b=u?jr(u):window,e){case"focusin":(xh(b)||b.contentEditable==="true")&&(Ar=b,Du=u,Qi=null);break;case"focusout":Qi=Du=Ar=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,bh(f,n,c);break;case"selectionchange":if(O2)break;case"keydown":case"keyup":bh(f,n,c)}var P;if(wf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Er?T0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(P0&&n.locale!=="ko"&&(Er||T!=="onCompositionStart"?T==="onCompositionEnd"&&Er&&(P=b0()):(Sn=c,vf="value"in Sn?Sn.value:Sn.textContent,Er=!0)),b=ea(u,T),0<b.length&&(T=new mh(T,e,null,n,c),f.push({event:T,listeners:b}),P?T.data=P:(P=E0(n),P!==null&&(T.data=P)))),(P=C2?b2(e,n):P2(e,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(c=new mh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}F0(f,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ho(e,n),o!=null&&r.unshift(wo(e,o,i)),o=ho(e,t),o!=null&&r.push(wo(e,o,i))),e=e.return}return r}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ho(n,o),l!=null&&s.unshift(wo(n,l,a))):i||(l=ho(n,o),l!=null&&s.push(wo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var F2=/\r\n?/g,$2=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(F2,`
`).replace($2,"")}function cs(e,t,n){if(t=Ah(t),Ah(e)!==t&&n)throw Error(E(425))}function ta(){}var zu=null,Fu=null;function $u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,V2=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,B2=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(e){return Rh.resolve(null).then(e).catch(U2)}:Vu;function U2(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),Lt="__reactFiber$"+gi,So="__reactProps$"+gi,en="__reactContainer$"+gi,Bu="__reactEvents$"+gi,W2="__reactListeners$"+gi,H2="__reactHandles$"+gi;function Jn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jh(e);e!==null;){if(n=e[Lt])return n;e=jh(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){return e=e[Lt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Da(e){return e[So]||null}var Uu=[],Mr=-1;function $n(e){return{current:e}}function Z(e){0>Mr||(e.current=Uu[Mr],Uu[Mr]=null,Mr--)}function X(e,t){Mr++,Uu[Mr]=e.current,e.current=t}var Nn={},Ne=$n(Nn),Ye=$n(!1),dr=Nn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function na(){Z(Ye),Z(Ne)}function Mh(e,t,n){if(Ne.current!==Nn)throw Error(E(168));X(Ne,t),X(Ye,n)}function V0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Rw(e)||"Unknown",i));return ae({},n,r)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,dr=Ne.current,X(Ne,e),X(Ye,Ye.current),!0}function Ih(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=V0(e,t,dr),r.__reactInternalMemoizedMergedChildContext=e,Z(Ye),Z(Ne),X(Ne,e)):Z(Ye),X(Ye,n)}var Yt=null,_a=!1,Ll=!1;function B0(e){Yt===null?Yt=[e]:Yt.push(e)}function Y2(e){_a=!0,B0(e)}function Vn(){if(!Ll&&Yt!==null){Ll=!0;var e=0,t=Y;try{var n=Yt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,_a=!1}catch(i){throw Yt!==null&&(Yt=Yt.slice(e+1)),h0(hf,Vn),i}finally{Y=t,Ll=!1}}return null}var Ir=[],Lr=0,ia=null,oa=0,ct=[],ft=0,hr=null,Gt=1,Kt="";function Kn(e,t){Ir[Lr++]=oa,Ir[Lr++]=ia,ia=e,oa=t}function U0(e,t,n){ct[ft++]=Gt,ct[ft++]=Kt,ct[ft++]=hr,hr=e;var r=Gt;e=Kt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var o=32-Ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gt=1<<32-Ct(t)+i|n<<i|r,Kt=o+e}else Gt=1<<o|n<<i|r,Kt=e}function kf(e){e.return!==null&&(Kn(e,1),U0(e,1,0))}function Cf(e){for(;e===ia;)ia=Ir[--Lr],Ir[Lr]=null,oa=Ir[--Lr],Ir[Lr]=null;for(;e===hr;)hr=ct[--ft],ct[ft]=null,Kt=ct[--ft],ct[ft]=null,Gt=ct[--ft],ct[ft]=null}var qe=null,Qe=null,te=!1,kt=null;function W0(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Qe=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Qe=null,!0):!1;default:return!1}}function Wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hu(e){if(te){var t=Qe;if(t){var n=t;if(!Lh(e,t)){if(Wu(e))throw Error(E(418));t=An(n.nextSibling);var r=qe;t&&Lh(e,t)?W0(r,n):(e.flags=e.flags&-4097|2,te=!1,qe=e)}}else{if(Wu(e))throw Error(E(418));e.flags=e.flags&-4097|2,te=!1,qe=e}}}function Nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function fs(e){if(e!==qe)return!1;if(!te)return Nh(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$u(e.type,e.memoizedProps)),t&&(t=Qe)){if(Wu(e))throw H0(),Error(E(418));for(;t;)W0(e,t),t=An(t.nextSibling)}if(Nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=qe?An(e.stateNode.nextSibling):null;return!0}function H0(){for(var e=Qe;e;)e=An(e.nextSibling)}function ei(){Qe=qe=null,te=!1}function bf(e){kt===null?kt=[e]:kt.push(e)}var G2=sn.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var sa=$n(null),aa=null,Nr=null,Pf=null;function Tf(){Pf=Nr=aa=null}function Ef(e){var t=sa.current;Z(sa),e._currentValue=t}function Yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){aa=e,Pf=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Pf!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(aa===null)throw Error(E(308));Nr=e,aa.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var er=null;function Af(e){er===null?er=[e]:er.push(e)}function Y0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Af(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yn=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,Af(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pf(e,n)}}function Oh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,r){var i=e.updateQueue;yn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(d=t,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=ae({},f,d);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mr|=s,e.lanes=s,e.memoizedState=f}}function Dh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var K0=new Yg.Component().refs;function Gu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=Mn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(bt(t,e,i,r),Rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=Mn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(bt(t,e,i,r),Rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Mn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(bt(t,e,r,n),Rs(t,e,r))}};function _h(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(i,o):!0}function X0(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Ge(t)?dr:Ne.current,r=t.contextTypes,o=(r=r!=null)?Jr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function Ku(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=K0,Rf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Ge(t)?dr:Ne.current,i.context=Jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Gu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&za.enqueueReplaceState(i,i.state,null),la(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ji(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===K0&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ds(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fh(e){var t=e._init;return t(e._payload)}function Q0(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=In(p,h),p.index=0,p.sibling=null,p}function o(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,C){return h===null||h.tag!==6?(h=$l(g,p.mode,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,C){var S=g.type;return S===Tr?c(p,h,g.props.children,C,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vn&&Fh(S)===h.type)?(C=i(h,g.props),C.ref=ji(p,h,g),C.return=p,C):(C=Os(g.type,g.key,g.props,null,p.mode,C),C.ref=ji(p,h,g),C.return=p,C)}function u(p,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Vl(g,p.mode,C),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,C,S){return h===null||h.tag!==7?(h=or(g,p.mode,C,S),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$l(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ts:return g=Os(h.type,h.key,h.props,null,p.mode,g),g.ref=ji(p,null,h),g.return=p,g;case Pr:return h=Vl(h,p.mode,g),h.return=p,h;case vn:var C=h._init;return f(p,C(h._payload),g)}if(Di(h)||Pi(h))return h=or(h,p.mode,g,null),h.return=p,h;ds(p,h)}return null}function d(p,h,g,C){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(p,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ts:return g.key===S?l(p,h,g,C):null;case Pr:return g.key===S?u(p,h,g,C):null;case vn:return S=g._init,d(p,h,S(g._payload),C)}if(Di(g)||Pi(g))return S!==null?null:c(p,h,g,C,null);ds(p,g)}return null}function m(p,h,g,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(h,p,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ts:return p=p.get(C.key===null?g:C.key)||null,l(h,p,C,S);case Pr:return p=p.get(C.key===null?g:C.key)||null,u(h,p,C,S);case vn:var b=C._init;return m(p,h,g,b(C._payload),S)}if(Di(C)||Pi(C))return p=p.get(g)||null,c(h,p,C,S,null);ds(h,C)}return null}function y(p,h,g,C){for(var S=null,b=null,P=h,T=h=0,N=null;P!==null&&T<g.length;T++){P.index>T?(N=P,P=null):N=P.sibling;var M=d(p,P,g[T],C);if(M===null){P===null&&(P=N);break}e&&P&&M.alternate===null&&t(p,P),h=o(M,h,T),b===null?S=M:b.sibling=M,b=M,P=N}if(T===g.length)return n(p,P),te&&Kn(p,T),S;if(P===null){for(;T<g.length;T++)P=f(p,g[T],C),P!==null&&(h=o(P,h,T),b===null?S=P:b.sibling=P,b=P);return te&&Kn(p,T),S}for(P=r(p,P);T<g.length;T++)N=m(P,p,T,g[T],C),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?T:N.key),h=o(N,h,T),b===null?S=N:b.sibling=N,b=N);return e&&P.forEach(function(B){return t(p,B)}),te&&Kn(p,T),S}function x(p,h,g,C){var S=Pi(g);if(typeof S!="function")throw Error(E(150));if(g=S.call(g),g==null)throw Error(E(151));for(var b=S=null,P=h,T=h=0,N=null,M=g.next();P!==null&&!M.done;T++,M=g.next()){P.index>T?(N=P,P=null):N=P.sibling;var B=d(p,P,M.value,C);if(B===null){P===null&&(P=N);break}e&&P&&B.alternate===null&&t(p,P),h=o(B,h,T),b===null?S=B:b.sibling=B,b=B,P=N}if(M.done)return n(p,P),te&&Kn(p,T),S;if(P===null){for(;!M.done;T++,M=g.next())M=f(p,M.value,C),M!==null&&(h=o(M,h,T),b===null?S=M:b.sibling=M,b=M);return te&&Kn(p,T),S}for(P=r(p,P);!M.done;T++,M=g.next())M=m(P,p,T,M.value,C),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?T:M.key),h=o(M,h,T),b===null?S=M:b.sibling=M,b=M);return e&&P.forEach(function(Te){return t(p,Te)}),te&&Kn(p,T),S}function k(p,h,g,C){if(typeof g=="object"&&g!==null&&g.type===Tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ts:e:{for(var S=g.key,b=h;b!==null;){if(b.key===S){if(S=g.type,S===Tr){if(b.tag===7){n(p,b.sibling),h=i(b,g.props.children),h.return=p,p=h;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vn&&Fh(S)===b.type){n(p,b.sibling),h=i(b,g.props),h.ref=ji(p,b,g),h.return=p,p=h;break e}n(p,b);break}else t(p,b);b=b.sibling}g.type===Tr?(h=or(g.props.children,p.mode,C,g.key),h.return=p,p=h):(C=Os(g.type,g.key,g.props,null,p.mode,C),C.ref=ji(p,h,g),C.return=p,p=C)}return s(p);case Pr:e:{for(b=g.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Vl(g,p.mode,C),h.return=p,p=h}return s(p);case vn:return b=g._init,k(p,h,b(g._payload),C)}if(Di(g))return y(p,h,g,C);if(Pi(g))return x(p,h,g,C);ds(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=$l(g,p.mode,C),h.return=p,p=h),s(p)):n(p,h)}return k}var ti=Q0(!0),q0=Q0(!1),Bo={},zt=$n(Bo),ko=$n(Bo),Co=$n(Bo);function tr(e){if(e===Bo)throw Error(E(174));return e}function jf(e,t){switch(X(Co,t),X(ko,e),X(zt,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tu(t,e)}Z(zt),X(zt,t)}function ni(){Z(zt),Z(ko),Z(Co)}function Z0(e){tr(Co.current);var t=tr(zt.current),n=Tu(t,e.type);t!==n&&(X(ko,e),X(zt,n))}function Mf(e){ko.current===e&&(Z(zt),Z(ko))}var ie=$n(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function If(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var js=sn.ReactCurrentDispatcher,Ol=sn.ReactCurrentBatchConfig,pr=0,se=null,ge=null,ke=null,ca=!1,qi=!1,bo=0,K2=0;function je(){throw Error(E(321))}function Lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Nf(e,t,n,r,i,o){if(pr=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,js.current=e===null||e.memoizedState===null?Z2:J2,e=n(r,i),qi){o=0;do{if(qi=!1,bo=0,25<=o)throw Error(E(301));o+=1,ke=ge=null,t.updateQueue=null,js.current=eS,e=n(r,i)}while(qi)}if(js.current=fa,t=ge!==null&&ge.next!==null,pr=0,ke=ge=se=null,ca=!1,t)throw Error(E(300));return e}function Of(){var e=bo!==0;return bo=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?se.memoizedState=ke=e:ke=ke.next=e,ke}function mt(){if(ge===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ke===null?se.memoizedState:ke.next;if(t!==null)ke=t,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ke===null?se.memoizedState=ke=e:ke=ke.next=e}return ke}function Po(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=mt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,se.lanes|=c,mr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Tt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,mr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=mt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Tt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function J0(){}function ev(e,t){var n=se,r=mt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,Df(rv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,To(9,nv.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(E(349));pr&30||tv(n,t,i)}return i}function tv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nv(e,t,n,r){t.value=n,t.getSnapshot=r,iv(t)&&ov(e)}function rv(e,t,n){return n(function(){iv(t)&&ov(e)})}function iv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function ov(e){var t=tn(e,1);t!==null&&bt(t,e,1,-1)}function $h(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=q2.bind(null,se,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sv(){return mt().memoizedState}function Ms(e,t,n,r){var i=jt();se.flags|=e,i.memoizedState=To(1|t,n,void 0,r===void 0?null:r)}function Fa(e,t,n,r){var i=mt();r=r===void 0?null:r;var o=void 0;if(ge!==null){var s=ge.memoizedState;if(o=s.destroy,r!==null&&Lf(r,s.deps)){i.memoizedState=To(t,n,o,r);return}}se.flags|=e,i.memoizedState=To(1|t,n,o,r)}function Vh(e,t){return Ms(8390656,8,e,t)}function Df(e,t){return Fa(2048,8,e,t)}function av(e,t){return Fa(4,2,e,t)}function lv(e,t){return Fa(4,4,e,t)}function uv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cv(e,t,n){return n=n!=null?n.concat([e]):null,Fa(4,4,uv.bind(null,t,e),n)}function _f(){}function fv(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dv(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hv(e,t,n){return pr&21?(Tt(n,t)||(n=g0(),se.lanes|=n,mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function X2(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{Y=n,Ol.transition=r}}function pv(){return mt().memoizedState}function Q2(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mv(e))gv(t,n);else if(n=Y0(e,t,n,r),n!==null){var i=_e();bt(n,e,r,i),vv(n,t,r)}}function q2(e,t,n){var r=Mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(e))gv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,s)){var l=t.interleaved;l===null?(i.next=i,Af(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Y0(e,t,i,r),n!==null&&(i=_e(),bt(n,e,r,i),vv(n,t,r))}}function mv(e){var t=e.alternate;return e===se||t!==null&&t===se}function gv(e,t){qi=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pf(e,n)}}var fa={readContext:pt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Z2={readContext:pt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Vh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4194308,4,uv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Q2.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:$h,useDebugValue:_f,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=$h(!1),t=e[0];return e=X2.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=jt();if(te){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Pe===null)throw Error(E(349));pr&30||tv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vh(rv.bind(null,r,o,e),[e]),r.flags|=2048,To(9,nv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=jt(),t=Pe.identifierPrefix;if(te){var n=Kt,r=Gt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J2={readContext:pt,useCallback:fv,useContext:pt,useEffect:Df,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:Dl,useRef:sv,useState:function(){return Dl(Po)},useDebugValue:_f,useDeferredValue:function(e){var t=mt();return hv(t,ge.memoizedState,e)},useTransition:function(){var e=Dl(Po)[0],t=mt().memoizedState;return[e,t]},useMutableSource:J0,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},eS={readContext:pt,useCallback:fv,useContext:pt,useEffect:Df,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:_l,useRef:sv,useState:function(){return _l(Po)},useDebugValue:_f,useDeferredValue:function(e){var t=mt();return ge===null?t.memoizedState=e:hv(t,ge.memoizedState,e)},useTransition:function(){var e=_l(Po)[0],t=mt().memoizedState;return[e,t]},useMutableSource:J0,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function ri(e,t){try{var n="",r=t;do n+=Aw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function yv(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,oc=r),Xu(e,t)},n}function xv(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xu(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mS.bind(null,e,t,n),t.then(e,e))}function Uh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var nS=sn.ReactCurrentOwner,We=!1;function De(e,t,n,r){t.child=e===null?q0(t,null,n,r):ti(t,e.child,n,r)}function Hh(e,t,n,r,i){n=n.render;var o=t.ref;return Xr(t,i),r=Nf(e,t,n,r,o,i),n=Of(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(te&&n&&kf(t),t.flags|=1,De(e,t,r,i),t.child)}function Yh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Hf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wv(e,t,o,r,i)):(e=Os(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(s,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=In(o,r),e.ref=t.ref,e.return=t,t.child=e}function wv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(yo(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,nn(e,t,i)}return Qu(e,t,n,r,i)}function Sv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Dr,Xe),Xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Dr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(Dr,Xe),Xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(Dr,Xe),Xe|=r;return De(e,t,i,n),t.child}function kv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qu(e,t,n,r,i){var o=Ge(n)?dr:Ne.current;return o=Jr(t,o),Xr(t,i),n=Nf(e,t,n,r,o,i),r=Of(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(te&&r&&kf(t),t.flags|=1,De(e,t,n,i),t.child)}function Gh(e,t,n,r,i){if(Ge(n)){var o=!0;ra(t)}else o=!1;if(Xr(t,i),t.stateNode===null)Is(e,t),X0(t,n,r),Ku(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ge(n)?dr:Ne.current,u=Jr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zh(t,s,r,u),yn=!1;var d=t.memoizedState;s.state=d,la(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ye.current||yn?(typeof c=="function"&&(Gu(t,n,c,r),l=t.memoizedState),(a=yn||_h(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,G0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:wt(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ge(n)?dr:Ne.current,l=Jr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&zh(t,s,r,l),yn=!1,d=t.memoizedState,s.state=d,la(t,r,s,i);var y=t.memoizedState;a!==f||d!==y||Ye.current||yn?(typeof m=="function"&&(Gu(t,n,m,r),y=t.memoizedState),(u=yn||_h(t,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return qu(e,t,n,r,o,i)}function qu(e,t,n,r,i,o){kv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ih(t,n,!1),nn(e,t,o);r=t.stateNode,nS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ti(t,e.child,null,o),t.child=ti(t,null,a,o)):De(e,t,a,o),t.memoizedState=r.state,i&&Ih(t,n,!0),t.child}function Cv(e){var t=e.stateNode;t.pendingContext?Mh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mh(e,t.context,!1),jf(e,t.containerInfo)}function Kh(e,t,n,r,i){return ei(),bf(i),t.flags|=256,De(e,t,n,r),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function bv(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ie,i&1),e===null)return Hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ba(s,r,0,null),e=or(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ju(n),t.memoizedState=Zu,e):zf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=In(a,o):(o=or(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ju(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Zu,r}return o=e.child,e=o.sibling,r=In(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zf(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&bf(r),ti(t,e.child,null,n),e=zf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=zl(Error(E(422))),hs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ba({mode:"visible",children:r.children},i,0,null),o=or(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ti(t,e.child,null,s),t.child.memoizedState=Ju(s),t.memoizedState=Zu,o);if(!(t.mode&1))return hs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=zl(o,r,void 0),hs(e,t,s,r)}if(a=(s&e.childLanes)!==0,We||a){if(r=Pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),bt(r,e,i,-1))}return Wf(),r=zl(Error(E(421))),hs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=An(i.nextSibling),qe=t,te=!0,kt=null,e!==null&&(ct[ft++]=Gt,ct[ft++]=Kt,ct[ft++]=hr,Gt=e.id,Kt=e.overflow,hr=t),t=zf(t,r.children),t.flags|=4096,t)}function Xh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yu(e.return,t,n)}function Fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xh(e,n,t);else if(e.tag===19)Xh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fl(t,!0,n,null,o);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Is(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iS(e,t,n){switch(t.tag){case 3:Cv(t),ei();break;case 5:Z0(t);break;case 1:Ge(t.type)&&ra(t);break;case 4:jf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(sa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?bv(e,t,n):(X(ie,ie.current&1),e=nn(e,t,n),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Sv(e,t,n)}return nn(e,t,n)}var Tv,ec,Ev,Av;Tv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};Ev=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(zt.current);var o=null;switch(n){case"input":i=ku(e,i),r=ku(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=Pu(e,i),r=Pu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ta)}Eu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Q("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Av=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function oS(e,t,n){var r=t.pendingProps;switch(Cf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ge(t.type)&&na(),Me(t),null;case 3:return r=t.stateNode,ni(),Z(Ye),Z(Ne),If(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(lc(kt),kt=null))),ec(e,t),Me(t),null;case 5:Mf(t);var i=tr(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)Ev(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Me(t),null}if(e=tr(zt.current),fs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Lt]=t,r[So]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)Q(zi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ih(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":sh(r,o),Q("invalid",r)}Eu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&cs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&cs(r.textContent,a,e),i=["children",""+a]):co.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":ns(r),oh(r,o,!0);break;case"textarea":ns(r),ah(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ta)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=t0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Lt]=t,e[So]=r,Tv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Au(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)Q(zi[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":ih(e,r),i=ku(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Q("invalid",e);break;case"textarea":sh(e,r),i=Pu(e,r),Q("invalid",e);break;default:i=r}Eu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?i0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(e,l):typeof l=="number"&&fo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(co.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Q("scroll",e):l!=null&&lf(e,o,l,s))}switch(n){case"input":ns(e),oh(e,r,!1);break;case"textarea":ns(e),ah(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Av(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=tr(Co.current),tr(zt.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:cs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Me(t),null;case 13:if(Z(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Qe!==null&&t.mode&1&&!(t.flags&128))H0(),ei(),t.flags|=98560,o=!1;else if(o=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Lt]=t}else ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else kt!==null&&(lc(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ve===0&&(ve=3):Wf())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return ni(),ec(e,t),e===null&&xo(t.stateNode.containerInfo),Me(t),null;case 10:return Ef(t.type._context),Me(t),null;case 17:return Ge(t.type)&&na(),Me(t),null;case 19:if(Z(ie),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Mi(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ua(e),s!==null){for(t.flags|=128,Mi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>ii&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return Me(t),null}else 2*de()-o.renderingStartTime>ii&&n!==1073741824&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Uf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function sS(e,t){switch(Cf(t),t.tag){case 1:return Ge(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ni(),Z(Ye),Z(Ne),If(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mf(t),null;case 13:if(Z(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ie),null;case 4:return ni(),null;case 10:return Ef(t.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var ps=!1,Le=!1,aS=typeof WeakSet=="function"?WeakSet:Set,j=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function tc(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Qh=!1;function lS(e,t){if(zu=Zs,e=I0(),Sf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:e,selectionRange:n},Zs=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:wt(t.type,x),k);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(C){ce(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=Qh,Qh=!1,y}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tc(t,n,o)}i=i.next}while(i!==r)}}function $a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rv(e){var t=e.alternate;t!==null&&(e.alternate=null,Rv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[So],delete t[Bu],delete t[W2],delete t[H2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jv(e){return e.tag===5||e.tag===3||e.tag===4}function qh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(r!==4&&(e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}var Ee=null,St=!1;function cn(e,t,n){for(n=n.child;n!==null;)Mv(e,t,n),n=n.sibling}function Mv(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ia,n)}catch{}switch(n.tag){case 5:Le||Or(n,t);case 6:var r=Ee,i=St;Ee=null,cn(e,t,n),Ee=r,St=i,Ee!==null&&(St?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(St?(e=Ee,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),go(e)):Il(Ee,n.stateNode));break;case 4:r=Ee,i=St,Ee=n.stateNode.containerInfo,St=!0,cn(e,t,n),Ee=r,St=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&tc(n,t,s),i=i.next}while(i!==r)}cn(e,t,n);break;case 1:if(!Le&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,cn(e,t,n),Le=r):cn(e,t,n);break;default:cn(e,t,n)}}function Zh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new aS),t.forEach(function(r){var i=vS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,St=!1;break e;case 3:Ee=a.stateNode.containerInfo,St=!0;break e;case 4:Ee=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ee===null)throw Error(E(160));Mv(o,s,i),Ee=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Iv(t,e),t=t.sibling}function Iv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Rt(e),r&4){try{Zi(3,e,e.return),$a(3,e)}catch(x){ce(e,e.return,x)}try{Zi(5,e,e.return)}catch(x){ce(e,e.return,x)}}break;case 1:vt(t,e),Rt(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(vt(t,e),Rt(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var i=e.stateNode;try{fo(i,"")}catch(x){ce(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Jg(i,o),Au(a,s);var u=Au(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?i0(i,f):c==="dangerouslySetInnerHTML"?n0(i,f):c==="children"?fo(i,f):lf(i,c,f,u)}switch(a){case"input":Cu(i,o);break;case"textarea":e0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Hr(i,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Hr(i,!!o.multiple,o.defaultValue,!0):Hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[So]=o}catch(x){ce(e,e.return,x)}}break;case 6:if(vt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ce(e,e.return,x)}}break;case 3:if(vt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(x){ce(e,e.return,x)}break;case 4:vt(t,e),Rt(e);break;case 13:vt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Vf=de())),r&4&&Zh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||c,vt(t,e),Le=u):vt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(f=j=c;j!==null;){switch(d=j,m=d.child,d.tag){case 0:case 11:case 14:case 15:Zi(4,d,d.return);break;case 1:Or(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:Or(d,d.return);break;case 22:if(d.memoizedState!==null){ep(f);continue}}m!==null?(m.return=d,j=m):ep(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r0("display",s))}catch(x){ce(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ce(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vt(t,e),Rt(e),r&4&&Zh(e);break;case 21:break;default:vt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jv(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var o=qh(e);ic(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=qh(e);rc(e,a,s);break;default:throw Error(E(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uS(e,t,n){j=e,Lv(e)}function Lv(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ps;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=ps;var u=Le;if(ps=s,(Le=l)&&!u)for(j=i;j!==null;)s=j,l=s.child,s.tag===22&&s.memoizedState!==null?tp(i):l!==null?(l.return=s,j=l):tp(i);for(;o!==null;)j=o,Lv(o),o=o.sibling;j=i,ps=a,Le=u}Jh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):Jh(e)}}function Jh(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||$a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Le||t.flags&512&&nc(t)}catch(d){ce(t,t.return,d)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function ep(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function tp(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$a(4,t)}catch(l){ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ce(t,i,l)}}var o=t.return;try{nc(t)}catch(l){ce(t,o,l)}break;case 5:var s=t.return;try{nc(t)}catch(l){ce(t,s,l)}}}catch(l){ce(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var cS=Math.ceil,da=sn.ReactCurrentDispatcher,Ff=sn.ReactCurrentOwner,ht=sn.ReactCurrentBatchConfig,V=0,Pe=null,me=null,Ae=0,Xe=0,Dr=$n(0),ve=0,Eo=null,mr=0,Va=0,$f=0,Ji=null,Ue=null,Vf=0,ii=1/0,Wt=null,ha=!1,oc=null,jn=null,ms=!1,kn=null,pa=0,eo=0,sc=null,Ls=-1,Ns=0;function _e(){return V&6?de():Ls!==-1?Ls:Ls=de()}function Mn(e){return e.mode&1?V&2&&Ae!==0?Ae&-Ae:G2.transition!==null?(Ns===0&&(Ns=g0()),Ns):(e=Y,e!==0||(e=window.event,e=e===void 0?16:C0(e.type)),e):1}function bt(e,t,n,r){if(50<eo)throw eo=0,sc=null,Error(E(185));Fo(e,n,r),(!(V&2)||e!==Pe)&&(e===Pe&&(!(V&2)&&(Va|=n),ve===4&&wn(e,Ae)),Ke(e,r),n===1&&V===0&&!(t.mode&1)&&(ii=de()+500,_a&&Vn()))}function Ke(e,t){var n=e.callbackNode;Gw(e,t);var r=qs(e,e===Pe?Ae:0);if(r===0)n!==null&&ch(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ch(n),t===1)e.tag===0?Y2(np.bind(null,e)):B0(np.bind(null,e)),B2(function(){!(V&6)&&Vn()}),n=null;else{switch(v0(r)){case 1:n=hf;break;case 4:n=p0;break;case 16:n=Qs;break;case 536870912:n=m0;break;default:n=Qs}n=Vv(n,Nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nv(e,t){if(Ls=-1,Ns=0,V&6)throw Error(E(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=qs(e,e===Pe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ma(e,r);else{t=r;var i=V;V|=2;var o=Dv();(Pe!==e||Ae!==t)&&(Wt=null,ii=de()+500,ir(e,t));do try{hS();break}catch(a){Ov(e,a)}while(1);Tf(),da.current=o,V=i,me!==null?t=0:(Pe=null,Ae=0,t=ve)}if(t!==0){if(t===2&&(i=Lu(e),i!==0&&(r=i,t=ac(e,i))),t===1)throw n=Eo,ir(e,0),wn(e,r),Ke(e,de()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!fS(i)&&(t=ma(e,r),t===2&&(o=Lu(e),o!==0&&(r=o,t=ac(e,o))),t===1))throw n=Eo,ir(e,0),wn(e,r),Ke(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Xn(e,Ue,Wt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=Vf+500-de(),10<t)){if(qs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vu(Xn.bind(null,e,Ue,Wt),t);break}Xn(e,Ue,Wt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cS(r/1960))-r,10<r){e.timeoutHandle=Vu(Xn.bind(null,e,Ue,Wt),r);break}Xn(e,Ue,Wt);break;case 5:Xn(e,Ue,Wt);break;default:throw Error(E(329))}}}return Ke(e,de()),e.callbackNode===n?Nv.bind(null,e):null}function ac(e,t){var n=Ji;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=ma(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&lc(t)),e}function lc(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function fS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~$f,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function np(e){if(V&6)throw Error(E(327));Qr();var t=qs(e,0);if(!(t&1))return Ke(e,de()),null;var n=ma(e,t);if(e.tag!==0&&n===2){var r=Lu(e);r!==0&&(t=r,n=ac(e,r))}if(n===1)throw n=Eo,ir(e,0),wn(e,t),Ke(e,de()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,Ue,Wt),Ke(e,de()),null}function Bf(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(ii=de()+500,_a&&Vn())}}function gr(e){kn!==null&&kn.tag===0&&!(V&6)&&Qr();var t=V;V|=1;var n=ht.transition,r=Y;try{if(ht.transition=null,Y=1,e)return e()}finally{Y=r,ht.transition=n,V=t,!(V&6)&&Vn()}}function Uf(){Xe=Dr.current,Z(Dr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,V2(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:ni(),Z(Ye),Z(Ne),If();break;case 5:Mf(r);break;case 4:ni();break;case 13:Z(ie);break;case 19:Z(ie);break;case 10:Ef(r.type._context);break;case 22:case 23:Uf()}n=n.return}if(Pe=e,me=e=In(e.current,null),Ae=Xe=t,ve=0,Eo=null,$f=Va=mr=0,Ue=Ji=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}er=null}return e}function Ov(e,t){do{var n=me;try{if(Tf(),js.current=fa,ca){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(pr=0,ke=ge=se=null,qi=!1,bo=0,Ff.current=null,n===null||n.return===null){ve=1,Eo=t,me=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Uh(s);if(m!==null){m.flags&=-257,Wh(m,s,a,o,t),m.mode&1&&Bh(o,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Bh(o,u,t),Wf();break e}l=Error(E(426))}}else if(te&&a.mode&1){var k=Uh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Wh(k,s,a,o,t),bf(ri(l,a));break e}}o=l=ri(l,a),ve!==4&&(ve=2),Ji===null?Ji=[o]:Ji.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=yv(o,l,t);Oh(o,p);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jn===null||!jn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=xv(o,a,t);Oh(o,C);break e}}o=o.return}while(o!==null)}zv(n)}catch(S){t=S,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Dv(){var e=da.current;return da.current=fa,e===null?fa:e}function Wf(){(ve===0||ve===3||ve===2)&&(ve=4),Pe===null||!(mr&268435455)&&!(Va&268435455)||wn(Pe,Ae)}function ma(e,t){var n=V;V|=2;var r=Dv();(Pe!==e||Ae!==t)&&(Wt=null,ir(e,t));do try{dS();break}catch(i){Ov(e,i)}while(1);if(Tf(),V=n,da.current=r,me!==null)throw Error(E(261));return Pe=null,Ae=0,ve}function dS(){for(;me!==null;)_v(me)}function hS(){for(;me!==null&&!zw();)_v(me)}function _v(e){var t=$v(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?zv(e):me=t,Ff.current=null}function zv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sS(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(n=oS(n,t,Xe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function Xn(e,t,n){var r=Y,i=ht.transition;try{ht.transition=null,Y=1,pS(e,t,n,r)}finally{ht.transition=i,Y=r}return null}function pS(e,t,n,r){do Qr();while(kn!==null);if(V&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kw(e,o),e===Pe&&(me=Pe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,Vv(Qs,function(){return Qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ht.transition,ht.transition=null;var s=Y;Y=1;var a=V;V|=4,Ff.current=null,lS(e,n),Iv(n,e),N2(Fu),Zs=!!zu,Fu=zu=null,e.current=n,uS(n),Fw(),V=a,Y=s,ht.transition=o}else e.current=n;if(ms&&(ms=!1,kn=e,pa=i),o=e.pendingLanes,o===0&&(jn=null),Bw(n.stateNode),Ke(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ha)throw ha=!1,e=oc,oc=null,e;return pa&1&&e.tag!==0&&Qr(),o=e.pendingLanes,o&1?e===sc?eo++:(eo=0,sc=e):eo=0,Vn(),null}function Qr(){if(kn!==null){var e=v0(pa),t=ht.transition,n=Y;try{if(ht.transition=null,Y=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,pa=0,V&6)throw Error(E(331));var i=V;for(V|=4,j=e.current;j!==null;){var o=j,s=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Zi(8,c,o)}var f=c.child;if(f!==null)f.return=c,j=f;else for(;j!==null;){c=j;var d=c.sibling,m=c.return;if(Rv(c),c===u){j=null;break}if(d!==null){d.return=m,j=d;break}j=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}j=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,j=s;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,j=p;break e}j=o.return}}var h=e.current;for(j=h;j!==null;){s=j;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,j=g;else e:for(s=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$a(9,a)}}catch(S){ce(a,a.return,S)}if(a===s){j=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,j=C;break e}j=a.return}}if(V=i,Vn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ia,e)}catch{}r=!0}return r}finally{Y=n,ht.transition=t}}return!1}function rp(e,t,n){t=ri(n,t),t=yv(e,t,1),e=Rn(e,t,1),t=_e(),e!==null&&(Fo(e,1,t),Ke(e,t))}function ce(e,t,n){if(e.tag===3)rp(e,e,n);else for(;t!==null;){if(t.tag===3){rp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=ri(n,e),e=xv(t,e,1),t=Rn(t,e,1),e=_e(),t!==null&&(Fo(t,1,e),Ke(t,e));break}}t=t.return}}function mS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ae&n)===n&&(ve===4||ve===3&&(Ae&130023424)===Ae&&500>de()-Vf?ir(e,0):$f|=n),Ke(e,t)}function Fv(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=_e();e=tn(e,t),e!==null&&(Fo(e,t,n),Ke(e,n))}function gS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fv(e,n)}function vS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Fv(e,n)}var $v;$v=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,iS(e,t,n);We=!!(e.flags&131072)}else We=!1,te&&t.flags&1048576&&U0(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Is(e,t),e=t.pendingProps;var i=Jr(t,Ne.current);Xr(t,n),i=Nf(null,t,r,e,i,n);var o=Of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(o=!0,ra(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rf(t),i.updater=za,t.stateNode=i,i._reactInternals=t,Ku(t,r,e,n),t=qu(null,t,r,!0,o,n)):(t.tag=0,te&&o&&kf(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Is(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xS(r),e=wt(r,e),i){case 0:t=Qu(null,t,r,e,n);break e;case 1:t=Gh(null,t,r,e,n);break e;case 11:t=Hh(null,t,r,e,n);break e;case 14:t=Yh(null,t,r,wt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Gh(e,t,r,i,n);case 3:e:{if(Cv(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,G0(e,t),la(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ri(Error(E(423)),t),t=Kh(e,t,r,n,i);break e}else if(r!==i){i=ri(Error(E(424)),t),t=Kh(e,t,r,n,i);break e}else for(Qe=An(t.stateNode.containerInfo.firstChild),qe=t,te=!0,kt=null,n=q0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===i){t=nn(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Z0(t),e===null&&Hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,$u(r,i)?s=null:o!==null&&$u(r,o)&&(t.flags|=32),kv(e,t),De(e,t,s,n),t.child;case 6:return e===null&&Hu(t),null;case 13:return bv(e,t,n);case 4:return jf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ti(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Hh(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,X(sa,r._currentValue),r._currentValue=s,o!==null)if(Tt(o.value,s)){if(o.children===i.children&&!Ye.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Yu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=pt(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),Yh(e,t,r,i,n);case 15:return wv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Is(e,t),t.tag=1,Ge(r)?(e=!0,ra(t)):e=!1,Xr(t,n),X0(t,r,i),Ku(t,r,i,n),qu(null,t,r,!0,e,n);case 19:return Pv(e,t,n);case 22:return Sv(e,t,n)}throw Error(E(156,t.tag))};function Vv(e,t){return h0(e,t)}function yS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new yS(e,t,n,r)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xS(e){if(typeof e=="function")return Hf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cf)return 11;if(e===ff)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Os(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Hf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Tr:return or(n.children,i,o,t);case uf:s=8,i|=8;break;case yu:return e=dt(12,n,t,i|2),e.elementType=yu,e.lanes=o,e;case xu:return e=dt(13,n,t,i),e.elementType=xu,e.lanes=o,e;case wu:return e=dt(19,n,t,i),e.elementType=wu,e.lanes=o,e;case Qg:return Ba(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kg:s=10;break e;case Xg:s=9;break e;case cf:s=11;break e;case ff:s=14;break e;case vn:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=dt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function or(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Qg,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yf(e,t,n,r,i,o,s,a,l){return e=new wS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(o),e}function SS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bv(e){if(!e)return Nn;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ge(n))return V0(e,n,t)}return t}function Uv(e,t,n,r,i,o,s,a,l){return e=Yf(n,r,!0,e,i,o,s,a,l),e.context=Bv(null),n=e.current,r=_e(),i=Mn(n),o=Xt(r,i),o.callback=t??null,Rn(n,o,i),e.current.lanes=i,Fo(e,i,r),Ke(e,r),e}function Ua(e,t,n,r){var i=t.current,o=_e(),s=Mn(i);return n=Bv(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,s),e!==null&&(bt(e,i,s,o),Rs(e,i,s)),s}function ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gf(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function kS(){return null}var Wv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kf(e){this._internalRoot=e}Wa.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ua(e,t,null,null)};Wa.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){Ua(null,e,null,null)}),t[en]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=w0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xn.length&&t!==0&&t<xn[n].priority;n++);xn.splice(n,0,e),n===0&&k0(e)}};function Xf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function op(){}function CS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ga(s);o.call(u)}}var s=Uv(t,r,e,0,null,!1,!1,"",op);return e._reactRootContainer=s,e[en]=s.current,xo(e.nodeType===8?e.parentNode:e),gr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ga(l);a.call(u)}}var l=Yf(e,0,!1,null,null,!1,!1,"",op);return e._reactRootContainer=l,e[en]=l.current,xo(e.nodeType===8?e.parentNode:e),gr(function(){Ua(t,l,n,r)}),l}function Ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ga(s);a.call(l)}}Ua(t,s,e,i)}else s=CS(n,t,e,i,r);return ga(s)}y0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(pf(t,n|1),Ke(t,de()),!(V&6)&&(ii=de()+500,Vn()))}break;case 13:gr(function(){var r=tn(e,1);if(r!==null){var i=_e();bt(r,e,1,i)}}),Gf(e,1)}};mf=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=_e();bt(t,e,134217728,n)}Gf(e,134217728)}};x0=function(e){if(e.tag===13){var t=Mn(e),n=tn(e,t);if(n!==null){var r=_e();bt(n,e,t,r)}Gf(e,t)}};w0=function(){return Y};S0=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ju=function(e,t,n){switch(t){case"input":if(Cu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Da(r);if(!i)throw Error(E(90));Zg(r),Cu(r,i)}}}break;case"textarea":e0(e,n);break;case"select":t=n.value,t!=null&&Hr(e,!!n.multiple,t,!1)}};a0=Bf;l0=gr;var bS={usingClientEntryPoint:!1,Events:[Vo,jr,Da,o0,s0,Bf]},Ii={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PS={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=f0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||kS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{Ia=gs.inject(PS),_t=gs}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(t))throw Error(E(200));return SS(e,t,null,n)};rt.createRoot=function(e,t){if(!Xf(e))throw Error(E(299));var n=!1,r="",i=Wv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yf(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,xo(e.nodeType===8?e.parentNode:e),new Kf(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=f0(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return gr(e)};rt.hydrate=function(e,t,n){if(!Ha(t))throw Error(E(200));return Ya(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!Xf(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Uv(t,null,e,1,n??null,i,!1,o,s),e[en]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wa(t)};rt.render=function(e,t,n){if(!Ha(t))throw Error(E(200));return Ya(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Ha(e))throw Error(E(40));return e._reactRootContainer?(gr(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};rt.unstable_batchedUpdates=Bf;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ha(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ya(e,t,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(e){console.error(e)}}Hv(),Ug.exports=rt;var TS=Ug.exports,sp=TS;gu.createRoot=sp.createRoot,gu.hydrateRoot=sp.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const ap="popstate";function ES(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return uc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yv(i)}return RS(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function AS(){return Math.random().toString(36).substr(2,8)}function lp(e,t){return{usr:e.state,key:e.key,idx:t}}function uc(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vi(t):t,{state:n,key:t&&t.key||r||AS()})}function Yv(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function RS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Cn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ao({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Cn.Pop;let k=c(),p=k==null?null:k-u;u=k,l&&l({action:a,location:x.location,delta:p})}function d(k,p){a=Cn.Push;let h=uc(x.location,k,p);n&&n(h,k),u=c()+1;let g=lp(h,u),C=x.createHref(h);try{s.pushState(g,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(C)}o&&l&&l({action:a,location:x.location,delta:1})}function m(k,p){a=Cn.Replace;let h=uc(x.location,k,p);n&&n(h,k),u=c();let g=lp(h,u),C=x.createHref(h);s.replaceState(g,"",C),o&&l&&l({action:a,location:x.location,delta:0})}function y(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:Yv(k);return ye(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let x={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ap,f),l=k,()=>{i.removeEventListener(ap,f),l=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let p=y(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(k){return s.go(k)}};return x}var up;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(up||(up={}));function jS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vi(t):t,i=Xv(r.pathname||"/",n);if(i==null)return null;let o=Gv(e);MS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=$S(o[a],US(i));return s}function Gv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sr([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:zS(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Kv(o.path))i(o,s,l)}),t}function Kv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Kv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function MS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:FS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const IS=/^:\w+$/,LS=3,NS=2,OS=1,DS=10,_S=-2,cp=e=>e==="*";function zS(e,t){let n=e.split("/"),r=n.length;return n.some(cp)&&(r+=_S),t&&(r+=NS),n.filter(i=>!cp(i)).reduce((i,o)=>i+(IS.test(o)?LS:o===""?OS:DS),r)}function FS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function $S(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=VS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:sr([i,c.pathname]),pathnameBase:XS(sr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=sr([i,c.pathnameBase]))}return o}function VS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=BS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=WS(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function BS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function US(e){try{return decodeURI(e)}catch(t){return Qf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function WS(e,t){try{return decodeURIComponent(e)}catch(n){return Qf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function HS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vi(e):e;return{pathname:n?n.startsWith("/")?n:YS(n,t):t,search:QS(r),hash:qS(i)}}function YS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function KS(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vi(e):(i=Ao({},e),ye(!i.pathname||!i.pathname.includes("?"),Bl("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Bl("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Bl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=HS(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sr=e=>e.join("/").replace(/\/\/+/g,"/"),XS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),QS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ZS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qv=["post","put","patch","delete"];new Set(Qv);const JS=["get",...Qv];new Set(JS);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}const qf=w.createContext(null),ek=w.createContext(null),Ga=w.createContext(null),Ka=w.createContext(null),yi=w.createContext({outlet:null,matches:[],isDataRoute:!1}),qv=w.createContext(null);function Xa(){return w.useContext(Ka)!=null}function Qa(){return Xa()||ye(!1),w.useContext(Ka).location}function Zv(e){w.useContext(Ga).static||w.useLayoutEffect(e)}function qa(){let{isDataRoute:e}=w.useContext(yi);return e?hk():tk()}function tk(){Xa()||ye(!1);let e=w.useContext(qf),{basename:t,navigator:n}=w.useContext(Ga),{matches:r}=w.useContext(yi),{pathname:i}=Qa(),o=JSON.stringify(GS(r).map(l=>l.pathnameBase)),s=w.useRef(!1);return Zv(()=>{s.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=KS(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:sr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function nk(e,t){return rk(e,t)}function rk(e,t,n){Xa()||ye(!1);let{navigator:r}=w.useContext(Ga),{matches:i}=w.useContext(yi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Qa(),u;if(t){var c;let x=typeof t=="string"?vi(t):t;a==="/"||(c=x.pathname)!=null&&c.startsWith(a)||ye(!1),u=x}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",m=jS(e,{pathname:d}),y=lk(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:sr([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:sr([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?w.createElement(Ka.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Cn.Pop}},y):y}function ik(){let e=dk(),t=ZS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const ok=w.createElement(ik,null);class sk extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(yi.Provider,{value:this.props.routeContext},w.createElement(qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ak(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(qf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(yi.Provider,{value:t},r)}function lk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ye(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||ok);let d=t.concat(o.slice(0,u+1)),m=()=>{let y;return c?y=f:l.route.Component?y=w.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,w.createElement(ak,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(sk,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Jv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jv||{}),ya=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ya||{});function uk(e){let t=w.useContext(qf);return t||ye(!1),t}function ck(e){let t=w.useContext(ek);return t||ye(!1),t}function fk(e){let t=w.useContext(yi);return t||ye(!1),t}function ey(e){let t=fk(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function dk(){var e;let t=w.useContext(qv),n=ck(ya.UseRouteError),r=ey(ya.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function hk(){let{router:e}=uk(Jv.UseNavigateStable),t=ey(ya.UseNavigateStable),n=w.useRef(!1);return Zv(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,va({fromRouteId:t},o)))},[e,t])}function hn(e){ye(!1)}function ty(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Cn.Pop,navigator:o,static:s=!1}=e;Xa()&&ye(!1);let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=vi(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:m="default"}=r,y=w.useMemo(()=>{let x=Xv(u,a);return x==null?null:{location:{pathname:x,search:c,hash:f,state:d,key:m},navigationType:i}},[a,u,c,f,d,m,i]);return y==null?null:w.createElement(Ga.Provider,{value:l},w.createElement(Ka.Provider,{children:n,value:y}))}function pk(e){let{children:t,location:n}=e;return nk(cc(t),n)}new Promise(()=>{});function cc(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,cc(r.props.children,o));return}r.type!==hn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=cc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mk="startTransition",fp=gw[mk];function gk(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=ES({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=w.useCallback(f=>{u&&fp?fp(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>s.listen(c),[s,c]),w.createElement(ty,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}var dp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(dp||(dp={}));var hp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hp||(hp={}));var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},He.apply(this,arguments)};function Ro(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var q="-ms-",to="-moz-",H="-webkit-",ny="comm",Za="rule",Zf="decl",vk="@import",ry="@keyframes",yk="@layer",xk=Math.abs,Jf=String.fromCharCode,fc=Object.assign;function wk(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function iy(e){return e.trim()}function Ht(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Ds(e,t){return e.indexOf(t)}function Ce(e,t){return e.charCodeAt(t)|0}function oi(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function oy(e){return e.length}function Fi(e,t){return t.push(e),e}function Sk(e,t){return e.map(t).join("")}function pp(e,t){return e.filter(function(n){return!Ht(n,t)})}var Ja=1,si=1,sy=0,gt=0,pe=0,xi="";function el(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ja,column:si,length:s,return:"",siblings:a}}function pn(e,t){return fc(el("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function br(e){for(;e.root;)e=pn(e.root,{children:[e]});Fi(e,e.siblings)}function kk(){return pe}function Ck(){return pe=gt>0?Ce(xi,--gt):0,si--,pe===10&&(si=1,Ja--),pe}function Pt(){return pe=gt<sy?Ce(xi,gt++):0,si++,pe===10&&(si=1,Ja++),pe}function ar(){return Ce(xi,gt)}function _s(){return gt}function tl(e,t){return oi(xi,e,t)}function dc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bk(e){return Ja=si=1,sy=Mt(xi=e),gt=0,[]}function Pk(e){return xi="",e}function Ul(e){return iy(tl(gt-1,hc(e===91?e+2:e===40?e+1:e)))}function Tk(e){for(;(pe=ar())&&pe<33;)Pt();return dc(e)>2||dc(pe)>3?"":" "}function Ek(e,t){for(;--t&&Pt()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return tl(e,_s()+(t<6&&ar()==32&&Pt()==32))}function hc(e){for(;Pt();)switch(pe){case e:return gt;case 34:case 39:e!==34&&e!==39&&hc(pe);break;case 40:e===41&&hc(e);break;case 92:Pt();break}return gt}function Ak(e,t){for(;Pt()&&e+pe!==47+10;)if(e+pe===42+42&&ar()===47)break;return"/*"+tl(t,gt-1)+"*"+Jf(e===47?e:Pt())}function Rk(e){for(;!dc(ar());)Pt();return tl(e,gt)}function jk(e){return Pk(zs("",null,null,null,[""],e=bk(e),0,[0],e))}function zs(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,d=0,m=0,y=0,x=1,k=1,p=1,h=0,g="",C=i,S=o,b=r,P=g;k;)switch(y=h,h=Pt()){case 40:if(y!=108&&Ce(P,f-1)==58){Ds(P+=F(Ul(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:P+=Ul(h);break;case 9:case 10:case 13:case 32:P+=Tk(y);break;case 92:P+=Ek(_s()-1,7);continue;case 47:switch(ar()){case 42:case 47:Fi(Mk(Ak(Pt(),_s()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[u++]=Mt(P)*p;case 125*x:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+c:p==-1&&(P=F(P,/\f/g,"")),m>0&&Mt(P)-f&&Fi(m>32?gp(P+";",r,n,f-1,l):gp(F(P," ","")+";",r,n,f-2,l),l);break;case 59:P+=";";default:if(Fi(b=mp(P,t,n,u,c,i,a,g,C=[],S=[],f,o),o),h===123)if(c===0)zs(P,t,b,b,C,o,f,a,S);else switch(d===99&&Ce(P,3)===110?100:d){case 100:case 108:case 109:case 115:zs(e,b,b,r&&Fi(mp(e,b,b,0,0,i,a,g,i,C=[],f,S),S),i,S,f,a,r?C:S);break;default:zs(P,b,b,b,[""],S,0,a,S)}}u=c=m=0,x=p=1,g=P="",f=s;break;case 58:f=1+Mt(P),m=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Ck()==125)continue}switch(P+=Jf(h),h*x){case 38:p=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(Mt(P)-1)*p,p=1;break;case 64:ar()===45&&(P+=Ul(Pt())),d=ar(),c=f=Mt(g=P+=Rk(_s())),h++;break;case 45:y===45&&Mt(P)==2&&(x=0)}}return o}function mp(e,t,n,r,i,o,s,a,l,u,c,f){for(var d=i-1,m=i===0?o:[""],y=oy(m),x=0,k=0,p=0;x<r;++x)for(var h=0,g=oi(e,d+1,d=xk(k=s[x])),C=e;h<y;++h)(C=iy(k>0?m[h]+" "+g:F(g,/&\f/g,m[h])))&&(l[p++]=C);return el(e,t,n,i===0?Za:a,l,u,c,f)}function Mk(e,t,n,r){return el(e,t,n,ny,Jf(kk()),oi(e,2,-2),0,r)}function gp(e,t,n,r,i){return el(e,t,n,Zf,oi(e,0,r),oi(e,r+1,-1),r,i)}function ay(e,t,n){switch(wk(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+to+e+q+e+e;case 5936:switch(Ce(e,t+11)){case 114:return H+e+q+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+q+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+q+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+q+e+e;case 6165:return H+e+q+"flex-"+e+e;case 5187:return H+e+F(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return H+e+q+"flex-item-"+F(e,/flex-|-self/g,"")+(Ht(e,/flex-|baseline/)?"":q+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return H+e+q+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+q+F(e,"shrink","negative")+e;case 5292:return H+e+q+F(e,"basis","preferred-size")+e;case 6060:return H+"box-"+F(e,"-grow","")+H+e+q+F(e,"grow","positive")+e;case 4554:return H+F(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Ht(e,/flex-|baseline/))return q+"grid-column-align"+oi(e,t)+e;break;case 2592:case 3360:return q+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ht(r.props,/grid-\w+-end/)})?~Ds(e+(n=n[t].value),"span")?e:q+F(e,"-start","")+e+q+"grid-row-span:"+(~Ds(n,"span")?Ht(n,/\d+/):+Ht(n,/\d+/)-+Ht(e,/\d+/))+";":q+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ht(r.props,/grid-\w+-start/)})?e:q+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+to+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ds(e,"stretch")?ay(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return q+i+":"+o+u+(s?q+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return F(e,":",":"+H)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(Ce(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+q+"$2box$3")+e;case 100:return F(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function xa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ik(e,t,n,r){switch(e.type){case yk:if(e.children.length)break;case vk:case Zf:return e.return=e.return||e.value;case ny:return"";case ry:return e.return=e.value+"{"+xa(e.children,r)+"}";case Za:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=xa(e.children,r))?e.return=e.value+"{"+n+"}":""}function Lk(e){var t=oy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Nk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ok(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Zf:e.return=ay(e.value,e.length,n);return;case ry:return xa([pn(e,{value:F(e.value,"@","@"+H)})],r);case Za:if(e.length)return Sk(n=e.props,function(i){switch(Ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":br(pn(e,{props:[F(i,/:(read-\w+)/,":"+to+"$1")]})),br(pn(e,{props:[i]})),fc(e,{props:pp(n,r)});break;case"::placeholder":br(pn(e,{props:[F(i,/:(plac\w+)/,":"+H+"input-$1")]})),br(pn(e,{props:[F(i,/:(plac\w+)/,":"+to+"$1")]})),br(pn(e,{props:[F(i,/:(plac\w+)/,q+"input-$1")]})),br(pn(e,{props:[i]})),fc(e,{props:pp(n,r)});break}return""})}}var Dk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ai=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ed=typeof window<"u"&&"HTMLElement"in window,_k=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),nl=Object.freeze([]),li=Object.freeze({});function zk(e,t,n){return n===void 0&&(n=li),e.theme!==n.theme&&e.theme||t||n.theme}var ly=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$k=/(^-|-$)/g;function vp(e){return e.replace(Fk,"-").replace($k,"")}var Vk=/(a)(d)/gi,yp=function(e){return String.fromCharCode(e+(e>25?39:97))};function pc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yp(t%52)+n;return(yp(t%52)+n).replace(Vk,"$1-$2")}var Wl,_r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},uy=function(e){return _r(5381,e)};function cy(e){return pc(uy(e)>>>0)}function Bk(e){return e.displayName||e.name||"Component"}function Hl(e){return typeof e=="string"&&!0}var fy=typeof Symbol=="function"&&Symbol.for,dy=fy?Symbol.for("react.memo"):60115,Uk=fy?Symbol.for("react.forward_ref"):60112,Wk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yk=((Wl={})[Uk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wl[dy]=hy,Wl);function xp(e){return("type"in(t=e)&&t.type.$$typeof)===dy?hy:"$$typeof"in e?Yk[e.$$typeof]:Wk;var t}var Gk=Object.defineProperty,Kk=Object.getOwnPropertyNames,wp=Object.getOwnPropertySymbols,Xk=Object.getOwnPropertyDescriptor,Qk=Object.getPrototypeOf,Sp=Object.prototype;function py(e,t,n){if(typeof t!="string"){if(Sp){var r=Qk(t);r&&r!==Sp&&py(e,r,n)}var i=Kk(t);wp&&(i=i.concat(wp(t)));for(var o=xp(e),s=xp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Hk||n&&n[l]||s&&l in s||o&&l in o)){var u=Xk(t,l);try{Gk(e,l,u)}catch{}}}}return e}function ui(e){return typeof e=="function"}function td(e){return typeof e=="object"&&"styledComponentId"in e}function nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gc(e,t,n){if(n===void 0&&(n=!1),!n&&!jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gc(e[r],t[r]);else if(jo(t))for(var r in t)e[r]=gc(e[r],t[r]);return e}function nd(e,t){Object.defineProperty(e,"toString",{value:t})}function Uo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Uo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),Fs=new Map,wa=new Map,Yl=1,vs=function(e){if(Fs.has(e))return Fs.get(e);for(;wa.has(Yl);)Yl++;var t=Yl++;return Fs.set(e,t),wa.set(t,e),t},Zk=function(e,t){Fs.set(e,t),wa.set(t,e)},Jk="style[".concat(ai,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),eC=new RegExp("^".concat(ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},nC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(eC);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Zk(c,u),tC(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function rC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var my=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ai,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ai,"active"),r.setAttribute("data-styled-version","6.0.8");var s=rC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},iC=function(){function e(t){this.element=my(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Uo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),oC=function(){function e(t){this.element=my(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),kp=ed,aC={isServer:!ed,useCSSOMInjection:!_k},gy=function(){function e(t,n,r){t===void 0&&(t=li),n===void 0&&(n={});var i=this;this.options=He(He({},aC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ed&&kp&&(kp=!1,function(o){for(var s=document.querySelectorAll(Jk),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ai)!=="active"&&(nC(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),nd(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var d=function(p){return wa.get(p)}(f);if(d===void 0)return"continue";var m=o.names.get(d),y=s.getGroup(f);if(m===void 0||y.length===0)return"continue";var x="".concat(ai,".g").concat(f,'[id="').concat(d,'"]'),k="";m!==void 0&&m.forEach(function(p){p.length>0&&(k+="".concat(p,","))}),l+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return vs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(He(He({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sC(i):r?new iC(i):new oC(i)}(this.options),new qk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(vs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(vs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lC=/&/g,uC=/^\s*\/\/.*$/gm;function vy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vy(n.children,t)),n})}function cC(e){var t,n,r,i=e===void 0?li:e,o=i.options,s=o===void 0?li:o,a=i.plugins,l=a===void 0?nl:a,u=function(d,m,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===Za&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(lC,n).replace(r,u))}),s.prefix&&c.push(Ok),c.push(Ik);var f=function(d,m,y,x){m===void 0&&(m=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var k=d.replace(uC,""),p=jk(y||m?"".concat(y," ").concat(m," { ").concat(k," }"):k);s.namespace&&(p=vy(p,s.namespace));var h=[];return xa(p,Lk(c.concat(Nk(function(g){return h.push(g)})))),h};return f.hash=l.length?l.reduce(function(d,m){return m.name||Uo(15),_r(d,m.name)},5381).toString():"",f}var fC=new gy,vc=cC(),yy=Zt.createContext({shouldForwardProp:void 0,styleSheet:fC,stylis:vc});yy.Consumer;Zt.createContext(void 0);function Cp(){return w.useContext(yy)}var xy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=vc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,nd(this,function(){throw Uo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=vc),this.name+t.hash},e}(),dC=function(e){return e>="A"&&e<="Z"};function bp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;dC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var wy=function(e){return e==null||e===!1||e===""},Sy=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!wy(o)&&(Array.isArray(o)&&o.isCss||ui(o)?r.push("".concat(bp(i),":"),o,";"):jo(o)?r.push.apply(r,Ro(Ro(["".concat(i," {")],Sy(o),!1),["}"],!1)):r.push("".concat(bp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Dk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){if(wy(e))return[];if(td(e))return[".".concat(e.styledComponentId)];if(ui(e)){if(!ui(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return lr(i,t,n,r)}var o;return e instanceof xy?n?(e.inject(n,r),[e.getName(r)]):[e]:jo(e)?Sy(e):Array.isArray(e)?Array.prototype.concat.apply(nl,e.map(function(s){return lr(s,t,n,r)})):[e.toString()]}function hC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ui(n)&&!td(n))return!1}return!0}var pC=uy("6.0.8"),mC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hC(t),this.componentId=n,this.baseHash=_r(pC,n),this.baseStyle=r,gy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=nr(i,this.staticRulesId);else{var o=mc(lr(this.rules,t,n,r)),s=pc(_r(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=nr(i,s),this.staticRulesId=s}else{for(var l=_r(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=mc(lr(f,t,n,r));l=_r(l,d+c),u+=d}}if(u){var m=pc(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=nr(i,m)}}return i},e}(),ky=Zt.createContext(void 0);ky.Consumer;var Gl={};function gC(e,t,n){var r=td(e),i=e,o=!Hl(e),s=t.attrs,a=s===void 0?nl:s,l=t.componentId,u=l===void 0?function(g,C){var S=typeof g!="string"?"sc":vp(g);Gl[S]=(Gl[S]||0)+1;var b="".concat(S,"-").concat(cy("6.0.8"+S+Gl[S]));return C?"".concat(C,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(g){return Hl(g)?"styled.".concat(g):"Styled(".concat(Bk(g),")")}(e);var f=t.displayName&&t.componentId?"".concat(vp(t.displayName),"-").concat(t.componentId):t.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(g,C){return y(g,C)&&x(g,C)}}else m=y}var k=new mC(n,f,r?i.componentStyle:void 0);function p(g,C){return function(S,b,P){var T=S.attrs,N=S.componentStyle,M=S.defaultProps,B=S.foldedComponentIds,Te=S.styledComponentId,he=S.target,st=Zt.useContext(ky),Ut=Cp(),at=S.shouldForwardProp||Ut.shouldForwardProp,U=function(ee,re,Be){for(var xe,we=He(He({},re),{className:void 0,theme:Be}),Un=0;Un<ee.length;Un+=1){var ln=ui(xe=ee[Un])?xe(we):xe;for(var un in ln)we[un]=un==="className"?nr(we[un],ln[un]):un==="style"?He(He({},we[un]),ln[un]):ln[un]}return re.className&&(we.className=nr(we.className,re.className)),we}(T,b,zk(b,st,M)||li),R=U.as||he,O={};for(var D in U)U[D]===void 0||D[0]==="$"||D==="as"||D==="theme"||(D==="forwardedAs"?O.as=U.forwardedAs:at&&!at(D,R)||(O[D]=U[D]));var G=function(ee,re){var Be=Cp(),xe=ee.generateAndInjectStyles(re,Be.styleSheet,Be.stylis);return xe}(N,U),K=nr(B,Te);return G&&(K+=" "+G),U.className&&(K+=" "+U.className),O[Hl(R)&&!ly.has(R)?"class":"className"]=K,O.ref=P,w.createElement(R,O)}(h,g,C)}var h=Zt.forwardRef(p);return h.attrs=d,h.componentStyle=k,h.shouldForwardProp=m,h.foldedComponentIds=r?nr(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=f,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(C){for(var S=[],b=1;b<arguments.length;b++)S[b-1]=arguments[b];for(var P=0,T=S;P<T.length;P++)gc(C,T[P],!0);return C}({},i.defaultProps,g):g}}),nd(h,function(){return".".concat(h.styledComponentId)}),o&&py(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Pp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Tp=function(e){return Object.assign(e,{isCss:!0})};function rl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ui(e)||jo(e)){var r=e;return Tp(lr(Pp(nl,Ro([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?lr(i):Tp(lr(Pp(i,t)))}function yc(e,t,n){if(n===void 0&&(n=li),!t)throw Uo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,rl.apply(void 0,Ro([i],o,!1)))};return r.attrs=function(i){return yc(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yc(e,t,He(He({},n),i))},r}var Cy=function(e){return yc(gC,e)},A=Cy;ly.forEach(function(e){A[e]=Cy(e)});function le(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mc(rl.apply(void 0,Ro([e],t,!1))),i=cy(r);return new xy(i,r)}const by=w.createContext(),vC=({children:e})=>{const[t,n]=w.useState(!1);return v.jsx(by.Provider,{value:{buttonFade:t,setButtonFade:n},children:e})},yC=()=>w.useContext(by),Ep=()=>{};let rd={},Py={},Ty=null,Ey={mark:Ep,measure:Ep};try{typeof window<"u"&&(rd=window),typeof document<"u"&&(Py=document),typeof MutationObserver<"u"&&(Ty=MutationObserver),typeof performance<"u"&&(Ey=performance)}catch{}const{userAgent:Ap=""}=rd.navigator||{},On=rd,J=Py,Rp=Ty,ys=Ey;On.document;const an=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Ay=~Ap.indexOf("MSIE")||~Ap.indexOf("Trident/");var ne="classic",Ry="duotone",Ze="sharp",Je="sharp-duotone",xC=[ne,Ry,Ze,Je],wC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},jp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},SC=["kit"],kC=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,CC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},PC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},TC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},EC={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},AC={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},RC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},jy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},jC=["solid","regular","light","thin","duotone","brands"],My=[1,2,3,4,5,6,7,8,9,10],MC=My.concat([11,12,13,14,15,16,17,18,19,20]),$i={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},IC=[...Object.keys(EC),...jC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$i.GROUP,$i.SWAP_OPACITY,$i.PRIMARY,$i.SECONDARY].concat(My.map(e=>"".concat(e,"x"))).concat(MC.map(e=>"w-".concat(e))),LC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},NC={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},OC={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Mp={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const rn="___FONT_AWESOME___",xc=16,Iy="fa",Ly="svg-inline--fa",vr="data-fa-i2svg",wc="data-fa-pseudo-element",DC="data-fa-pseudo-element-pending",id="data-prefix",od="data-icon",Ip="fontawesome-i2svg",_C="async",zC=["HTML","HEAD","STYLE","SCRIPT"],Ny=(()=>{try{return!0}catch{return!1}})(),Oy=[ne,Ze,Je];function Wo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ne]}})}const Dy={...jy};Dy[ne]={...jy[ne],...jp.kit,...jp["kit-duotone"]};const ur=Wo(Dy),Sc={...RC};Sc[ne]={...Sc[ne],...Mp.kit,...Mp["kit-duotone"]};const Mo=Wo(Sc),kc={...AC};kc[ne]={...kc[ne],...OC.kit};const cr=Wo(kc),Cc={...TC};Cc[ne]={...Cc[ne],...NC.kit};const FC=Wo(Cc),$C=kC,_y="fa-layers-text",VC=CC,BC={...wC};Wo(BC);const UC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kl=$i,ci=new Set;Object.keys(Mo[ne]).map(ci.add.bind(ci));Object.keys(Mo[Ze]).map(ci.add.bind(ci));Object.keys(Mo[Je]).map(ci.add.bind(ci));const WC=[...SC,...IC],no=On.FontAwesomeConfig||{};function HC(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function YC(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}J&&typeof J.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=YC(HC(n));i!=null&&(no[r]=i)});const zy={styleDefault:"solid",familyDefault:"classic",cssPrefix:Iy,replacementClass:Ly,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};no.familyPrefix&&(no.cssPrefix=no.familyPrefix);const fi={...zy,...no};fi.autoReplaceSvg||(fi.observeMutations=!1);const L={};Object.keys(zy).forEach(e=>{Object.defineProperty(L,e,{enumerable:!0,set:function(t){fi[e]=t,ro.forEach(n=>n(L))},get:function(){return fi[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){fi.cssPrefix=e,ro.forEach(t=>t(L))},get:function(){return fi.cssPrefix}});On.FontAwesomeConfig=L;const ro=[];function GC(e){return ro.push(e),()=>{ro.splice(ro.indexOf(e),1)}}const fn=xc,Nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KC(e){if(!e||!an)return;const t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=J.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return J.head.insertBefore(t,r),e}const XC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Io(){let e=12,t="";for(;e-- >0;)t+=XC[Math.random()*62|0];return t}function wi(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sd(e){return e.classList?wi(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Fy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function QC(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Fy(e[n]),'" '),"").trim()}function il(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ad(e){return e.size!==Nt.size||e.x!==Nt.x||e.y!==Nt.y||e.rotate!==Nt.rotate||e.flipX||e.flipY}function qC(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function ZC(e){let{transform:t,width:n=xc,height:r=xc,startCentered:i=!1}=e,o="";return i&&Ay?o+="translate(".concat(t.x/fn-n/2,"em, ").concat(t.y/fn-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/fn,"em), calc(-50% + ").concat(t.y/fn,"em)) "):o+="translate(".concat(t.x/fn,"em, ").concat(t.y/fn,"em) "),o+="scale(".concat(t.size/fn*(t.flipX?-1:1),", ").concat(t.size/fn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var JC=`:root, :host {
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
}`;function $y(){const e=Iy,t=Ly,n=L.cssPrefix,r=L.replacementClass;let i=JC;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Lp=!1;function Xl(){L.autoAddCss&&!Lp&&(KC($y()),Lp=!0)}var e3={mixout(){return{dom:{css:$y,insertCss:Xl}}},hooks(){return{beforeDOMElementCreation(){Xl()},beforeI2svg(){Xl()}}}};const on=On||{};on[rn]||(on[rn]={});on[rn].styles||(on[rn].styles={});on[rn].hooks||(on[rn].hooks={});on[rn].shims||(on[rn].shims=[]);var Ot=on[rn];const Vy=[],By=function(){J.removeEventListener("DOMContentLoaded",By),Sa=1,Vy.map(e=>e())};let Sa=!1;an&&(Sa=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Sa||J.addEventListener("DOMContentLoaded",By));function t3(e){an&&(Sa?setTimeout(e,0):Vy.push(e))}function Ho(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Fy(e):"<".concat(t," ").concat(QC(n),">").concat(r.map(Ho).join(""),"</").concat(t,">")}function Np(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var n3=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Ql=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?n3(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function r3(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function bc(e){const t=r3(e);return t.length===1?t[0].toString(16):null}function i3(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Op(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pc(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Op(t);typeof Ot.hooks.addPack=="function"&&!r?Ot.hooks.addPack(e,Op(t)):Ot.styles[e]={...Ot.styles[e]||{},...i},e==="fas"&&Pc("fa",t)}const{styles:Zn,shims:o3}=Ot,s3={[ne]:Object.values(cr[ne]),[Ze]:Object.values(cr[Ze]),[Je]:Object.values(cr[Je])};let ld=null,Uy={},Wy={},Hy={},Yy={},Gy={};const a3={[ne]:Object.keys(ur[ne]),[Ze]:Object.keys(ur[Ze]),[Je]:Object.keys(ur[Je])};function l3(e){return~WC.indexOf(e)}function u3(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!l3(i)?i:null}const Ky=()=>{const e=r=>Ql(Zn,(i,o,s)=>(i[s]=Ql(o,r,{}),i),{});Uy=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Wy=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),Gy=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in Zn||L.autoFetchSvg,n=Ql(o3,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Hy=n.names,Yy=n.unicodes,ld=ol(L.styleDefault,{family:L.familyDefault})};GC(e=>{ld=ol(e.styleDefault,{family:L.familyDefault})});Ky();function ud(e,t){return(Uy[e]||{})[t]}function c3(e,t){return(Wy[e]||{})[t]}function bn(e,t){return(Gy[e]||{})[t]}function Xy(e){return Hy[e]||{prefix:null,iconName:null}}function f3(e){const t=Yy[e],n=ud("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dn(){return ld}const cd=()=>({prefix:null,iconName:null,rest:[]});function ol(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ne}=t,r=ur[n][e],i=Mo[n][e]||Mo[n][r],o=e in Ot.styles?e:null;return i||o||null}const d3={[ne]:Object.keys(cr[ne]),[Ze]:Object.keys(cr[Ze]),[Je]:Object.keys(cr[Je])};function sl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[ne]:"".concat(L.cssPrefix,"-").concat(ne),[Ze]:"".concat(L.cssPrefix,"-").concat(Ze),[Je]:"".concat(L.cssPrefix,"-").concat(Je)};let i=null,o=ne;const s=xC.filter(l=>l!==Ry);s.forEach(l=>{(e.includes(r[l])||e.some(u=>d3[l].includes(u)))&&(o=l)});const a=e.reduce((l,u)=>{const c=u3(L.cssPrefix,u);if(Zn[u]?(u=s3[o].includes(u)?FC[o][u]:u,i=u,l.prefix=u):a3[o].indexOf(u)>-1?(i=u,l.prefix=ol(u,{family:o})):c?l.iconName=c:u!==L.replacementClass&&!s.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=i==="fa"?Xy(l.iconName):{},d=bn(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Zn.far&&Zn.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},cd());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===Ze&&(Zn.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=bn(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===Je&&(Zn.fasds||L.autoFetchSvg)&&(a.prefix="fasds",a.iconName=bn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Dn()||"fas"),a}class h3{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Pc(o,i[o]);const s=cr[ne][o];s&&Pc(s,i[o]),Ky()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}}let Dp=[],zr={};const qr={},p3=Object.keys(qr);function m3(e,t){let{mixoutsTo:n}=t;return Dp=e,zr={},Object.keys(qr).forEach(r=>{p3.indexOf(r)===-1&&delete qr[r]}),Dp.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{zr[s]||(zr[s]=[]),zr[s].push(o[s])})}r.provides&&r.provides(qr)}),n}function Tc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(zr[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function yr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(zr[e]||[]).forEach(o=>{o.apply(null,n)})}function _n(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qr[e]?qr[e].apply(null,t):void 0}function Ec(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Dn();if(t)return t=bn(n,t)||t,Np(Qy.definitions,n,t)||Np(Ot.styles,n,t)}const Qy=new h3,g3=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,yr("noAuto")},v3={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return an?(yr("beforeI2svg",e),_n("pseudoElements2svg",e),_n("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,t3(()=>{x3({autoReplaceSvgRoot:t}),yr("watch",e)})}},y3={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:bn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ol(e[0]);return{prefix:n,iconName:bn(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match($C))){const t=sl(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Dn(),iconName:bn(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Dn();return{prefix:t,iconName:bn(t,e)||e}}}},ot={noAuto:g3,config:L,dom:v3,parse:y3,library:Qy,findIconDefinition:Ec,toHtml:Ho},x3=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=J}=e;(Object.keys(Ot.styles).length>0||L.autoFetchSvg)&&an&&L.autoReplaceSvg&&ot.dom.i2svg({node:t})};function al(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ho(n))}}),Object.defineProperty(e,"node",{get:function(){if(!an)return;const n=J.createElement("div");return n.innerHTML=e.html,n.children}}),e}function w3(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(ad(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=il({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function S3(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function fd(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:u,extra:c,watchable:f=!1}=e,{width:d,height:m}=n.found?n:t,y=r==="fak",x=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(S=>c.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(c.classes).join(" ");let k={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:x,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)}};const p=y&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};f&&(k.attributes[vr]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||Io())},children:[a]}),delete k.attributes.title);const h={...k,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...p,...c.styles}},{children:g,attributes:C}=n.found&&t.found?_n("generateAbstractMask",h)||{children:[],attributes:{}}:_n("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=g,h.attributes=C,s?S3(h):w3(h)}function _p(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[vr]="");const u={...s.styles};ad(i)&&(u.transform=ZC({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=il(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function k3(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=il(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ql}=Ot;function Ac(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Kl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Kl.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Kl.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const C3={found:!1,width:512,height:512};function b3(e,t){!Ny&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rc(e,t){let n=t;return t==="fa"&&L.styleDefault!==null&&(t=Dn()),new Promise((r,i)=>{if(n==="fa"){const o=Xy(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ql[t]&&ql[t][e]){const o=ql[t][e];return r(Ac(o))}b3(e,t),r({...C3,icon:L.showMissingIcons&&e?_n("missingIconAbstract")||{}:{}})})}const zp=()=>{},jc=L.measurePerformance&&ys&&ys.mark&&ys.measure?ys:{mark:zp,measure:zp},Vi='FA "6.6.0"',P3=e=>(jc.mark("".concat(Vi," ").concat(e," begins")),()=>qy(e)),qy=e=>{jc.mark("".concat(Vi," ").concat(e," ends")),jc.measure("".concat(Vi," ").concat(e),"".concat(Vi," ").concat(e," begins"),"".concat(Vi," ").concat(e," ends"))};var dd={begin:P3,end:qy};const $s=()=>{};function Fp(e){return typeof(e.getAttribute?e.getAttribute(vr):null)=="string"}function T3(e){const t=e.getAttribute?e.getAttribute(id):null,n=e.getAttribute?e.getAttribute(od):null;return t&&n}function E3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function A3(){return L.autoReplaceSvg===!0?Vs.replace:Vs[L.autoReplaceSvg]||Vs.replace}function R3(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function j3(e){return J.createElement(e)}function Zy(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?R3:j3}=t;if(typeof e=="string")return J.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Zy(o,{ceFn:n}))}),r}function M3(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Vs={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Zy(n),t)}),t.getAttribute(vr)===null&&L.keepOriginalSource){let n=J.createComment(M3(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~sd(t).indexOf(L.replacementClass))return Vs.replace(e);const r=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===L.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Ho(o)).join(`
`);t.setAttribute(vr,""),t.innerHTML=i}};function $p(e){e()}function Jy(e,t){const n=typeof t=="function"?t:$s;if(e.length===0)n();else{let r=$p;L.mutateApproach===_C&&(r=On.requestAnimationFrame||$p),r(()=>{const i=A3(),o=dd.begin("mutate");e.map(i),o(),n()})}}let hd=!1;function e1(){hd=!0}function Mc(){hd=!1}let ka=null;function Vp(e){if(!Rp||!L.observeMutations)return;const{treeCallback:t=$s,nodeCallback:n=$s,pseudoElementsCallback:r=$s,observeMutationsRoot:i=J}=e;ka=new Rp(o=>{if(hd)return;const s=Dn();wi(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Fp(a.addedNodes[0])&&(L.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&L.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Fp(a.target)&&~UC.indexOf(a.attributeName))if(a.attributeName==="class"&&T3(a.target)){const{prefix:l,iconName:u}=sl(sd(a.target));a.target.setAttribute(id,l||s),u&&a.target.setAttribute(od,u)}else E3(a.target)&&n(a.target)})}),an&&ka.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function I3(){ka&&ka.disconnect()}function L3(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function N3(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=sl(sd(e));return i.prefix||(i.prefix=Dn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=c3(i.prefix,e.innerText)||ud(i.prefix,bc(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function O3(e){const t=wi(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Io()):(t["aria-hidden"]="true",t.focusable="false")),t}function D3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=N3(e),o=O3(e),s=Tc("parseNodeAttributes",{},e);let a=t.styleParser?L3(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:_3}=Ot;function t1(e){const t=L.autoReplaceSvg==="nest"?Bp(e,{styleParser:!1}):Bp(e);return~t.extra.classes.indexOf(_y)?_n("generateLayersText",e,t):_n("generateSvgReplacementMutation",e,t)}let Vt=new Set;Oy.map(e=>{Vt.add("fa-".concat(e))});Object.keys(ur[ne]).map(Vt.add.bind(Vt));Object.keys(ur[Ze]).map(Vt.add.bind(Vt));Object.keys(ur[Je]).map(Vt.add.bind(Vt));Vt=[...Vt];function Up(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!an)return Promise.resolve();const n=J.documentElement.classList,r=c=>n.add("".concat(Ip,"-").concat(c)),i=c=>n.remove("".concat(Ip,"-").concat(c)),o=L.autoFetchSvg?Vt:Oy.map(c=>"fa-".concat(c)).concat(Object.keys(_3));o.includes("fa")||o.push("fa");const s=[".".concat(_y,":not([").concat(vr,"])")].concat(o.map(c=>".".concat(c,":not([").concat(vr,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=wi(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=dd.begin("onTree"),u=a.reduce((c,f)=>{try{const d=t1(f);d&&c.push(d)}catch(d){Ny||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(d=>{Jy(d,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(d=>{l(),f(d)})})}function z3(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;t1(e).then(n=>{n&&Jy([n],t)})}function F3(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ec(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ec(i||{})),e(r,{...n,mask:i})}}const $3=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Nt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:m}=e;return al({type:"icon",...e},()=>(yr("beforeDOMElementCreation",{iconDefinition:e,params:t}),L.autoA11y&&(s?u["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(a||Io()):(u["aria-hidden"]="true",u.focusable="false")),fd({icons:{main:Ac(m),mask:i?Ac(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...Nt,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var V3={mixout(){return{icon:F3($3)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Up,e.nodeCallback=z3,e}}},provides(e){e.i2svg=function(t){const{node:n=J,callback:r=()=>{}}=t;return Up(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((d,m)=>{Promise.all([Rc(r,s),u.iconName?Rc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,k]=y;d([t,fd({icons:{main:x,mask:k},prefix:s,iconName:r,transform:a,symbol:l,maskId:c,title:i,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=il(s);a.length>0&&(r.style=a);let l;return ad(o)&&(l=_n("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},B3={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return al({type:"layer"},()=>{yr("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},U3={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return al({type:"counter",content:e},()=>(yr("beforeDOMElementCreation",{content:e,params:t}),k3({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(L.cssPrefix,"-layers-counter"),...r]}})))}}}},W3={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Nt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return al({type:"text",content:e},()=>(yr("beforeDOMElementCreation",{content:e,params:t}),_p({content:e,transform:{...Nt,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(L.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(Ay){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/l,a=u.height/l}return L.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,_p({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const H3=new RegExp('"',"ug"),Wp=[1105920,1112319],Hp={FontAwesome:{normal:"fas",400:"fas"},...PC,...bC,...LC},Ic=Object.keys(Hp).reduce((e,t)=>(e[t.toLowerCase()]=Hp[t],e),{}),Y3=Object.keys(Ic).reduce((e,t)=>{const n=Ic[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function G3(e){const t=e.replace(H3,""),n=i3(t,0),r=n>=Wp[0]&&n<=Wp[1],i=t.length===2?t[0]===t[1]:!1;return{value:bc(i?t[0]:t),isSecondary:r||i}}function K3(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Ic[n]||{})[i]||Y3[n]}function Yp(e,t){const n="".concat(DC).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=wi(e.children).filter(d=>d.getAttribute(wc)===t)[0],a=On.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(VC),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let m=K3(l,c);const{value:y,isSecondary:x}=G3(d),k=u[0].startsWith("FontAwesome");let p=ud(m,y),h=p;if(k){const g=f3(y);g.iconName&&g.prefix&&(p=g.iconName,m=g.prefix)}if(p&&!x&&(!s||s.getAttribute(id)!==m||s.getAttribute(od)!==h)){e.setAttribute(n,h),s&&e.removeChild(s);const g=D3(),{extra:C}=g;C.attributes[wc]=t,Rc(p,m).then(S=>{const b=fd({...g,icons:{main:S,mask:cd()},prefix:m,iconName:h,extra:C,watchable:!0}),P=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=b.map(T=>Ho(T)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function X3(e){return Promise.all([Yp(e,"::before"),Yp(e,"::after")])}function Q3(e){return e.parentNode!==document.head&&!~zC.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Gp(e){if(an)return new Promise((t,n)=>{const r=wi(e.querySelectorAll("*")).filter(Q3).map(X3),i=dd.begin("searchPseudoElements");e1(),Promise.all(r).then(()=>{i(),Mc(),t()}).catch(()=>{i(),Mc(),n()})})}var q3={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Gp,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=J}=t;L.searchPseudoElements&&Gp(n)}}};let Kp=!1;var Z3={mixout(){return{dom:{unwatch(){e1(),Kp=!0}}}},hooks(){return{bootstrap(){Vp(Tc("mutationObserverCallbacks",{}))},noAuto(){I3()},watch(e){const{observeMutationsRoot:t}=e;Kp?Mc():Vp(Tc("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Xp=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var J3={mixout(){return{parse:{transform:e=>Xp(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Xp(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:c,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Zl={x:0,y:0,width:"100%",height:"100%"};function Qp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function eb(e){return e.tag==="g"?e.children:[e]}var tb={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?sl(n.split(" ").map(i=>i.trim())):cd();return r.prefix||(r.prefix=Dn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:u}=i,{width:c,icon:f}=o,d=qC({transform:a,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:{...Zl,fill:"white"}},y=u.children?{children:u.children.map(Qp)}:{},x={tag:"g",attributes:{...d.inner},children:[Qp({tag:u.tag,attributes:{...u.attributes,...d.path},...y})]},k={tag:"g",attributes:{...d.outer},children:[x]},p="mask-".concat(s||Io()),h="clip-".concat(s||Io()),g={tag:"mask",attributes:{...Zl,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,k]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:eb(f)},g]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...Zl}}),{children:n,attributes:r}}}},nb={provides(e){let t=!1;On.matchMedia&&(t=On.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},rb={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},ib=[e3,V3,B3,U3,W3,q3,Z3,J3,tb,nb,rb];m3(ib,{mixoutsTo:ot});ot.noAuto;ot.config;ot.library;ot.dom;const Lc=ot.parse;ot.findIconDefinition;ot.toHtml;const ob=ot.icon;ot.layer;ot.text;ot.counter;var n1={exports:{}},sb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ab=sb,lb=ab;function r1(){}function i1(){}i1.resetWarningCache=r1;var ub=function(){function e(r,i,o,s,a,l){if(l!==lb){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i1,resetWarningCache:r1};return n.PropTypes=n,n};n1.exports=ub();var cb=n1.exports;const I=Ig(cb);function qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qp(Object(n),!0).forEach(function(r){Fr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ca(e){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}function Fr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function db(e,t){if(e==null)return{};var n=fb(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Nc(e){return hb(e)||pb(e)||mb(e)||gb()}function hb(e){if(Array.isArray(e))return Oc(e)}function pb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mb(e,t){if(e){if(typeof e=="string")return Oc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oc(e,t)}}function Oc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vb(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,m=e.inverse,y=e.border,x=e.listItem,k=e.flip,p=e.size,h=e.rotation,g=e.pull,C=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":x,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Fr(t,"fa-".concat(p),typeof p<"u"&&p!==null),Fr(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Fr(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Fr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function yb(e){return e=e-0,e===e}function o1(e){return yb(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var xb=["style"];function wb(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Sb(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=o1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[wb(i)]=o:t[i]=o,t},{})}function s1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return s1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Sb(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[o1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=db(n,xb);return i.attrs.style=It(It({},i.attrs.style),s),e.apply(void 0,[t.tag,It(It({},i.attrs),a)].concat(Nc(r)))}var a1=!1;try{a1=!0}catch{}function kb(){if(!a1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zp(e){if(e&&Ca(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Lc.icon)return Lc.icon(e);if(e===null)return null;if(e&&Ca(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Jl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Fr({},e,t):{}}var Jp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Oe=Zt.forwardRef(function(e,t){var n=It(It({},Jp),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,u=n.maskId,c=Zp(r),f=Jl("classes",[].concat(Nc(vb(n)),Nc((s||"").split(" ")))),d=Jl("transform",typeof n.transform=="string"?Lc.transform(n.transform):n.transform),m=Jl("mask",Zp(i)),y=ob(c,It(It(It(It({},f),d),m),{},{symbol:o,title:a,titleId:l,maskId:u}));if(!y)return kb("Could not find icon",c),null;var x=y.abstract,k={ref:t};return Object.keys(n).forEach(function(p){Jp.hasOwnProperty(p)||(k[p]=n[p])}),Cb(x[0],k)});Oe.displayName="FontAwesomeIcon";Oe.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};var Cb=s1.bind(null,Zt.createElement);const bb={prefix:"far",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"]},Pb=({logo:e})=>{const t=()=>{switch(e){case 1:return v.jsxs("div",{style:yt.cleaningContainer,children:[v.jsx("div",{style:yt.dust,children:"Dust"}),v.jsx("div",{style:yt.busters,children:"Busters"})]});case 2:return v.jsxs("div",{style:yt.dashboard,children:[v.jsx("span",{style:{color:"var(--light-blueish)"},children:"/"}),"Daily Helper",v.jsx("span",{style:{color:"var(--light-blueish)"},children:"/"})," "]});case 3:return v.jsx("div",{style:yt.soleSoul,children:"SoleSoul.com"});case 4:return v.jsxs("div",{style:yt.chatContainer,children:[v.jsx("div",{style:yt.classChat,children:"Class"}),v.jsxs("div",{style:yt.chatRow,children:[v.jsx("div",{style:{...yt.classChat,marginLeft:"55px"},children:"Chat"}),v.jsx(Oe,{style:yt.chatIcon,icon:bb})]})]});case 5:return v.jsx("div",{style:yt.movieNight,children:"Movie Night"});default:return null}};return v.jsx(Tb,{children:t()})},Tb=A.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: "Poppins";
`,yt={cleaningContainer:{display:"flex",width:"100%",padding:"10px",backgroundColor:"var(--dark)"},dust:{fontSize:"1.1em",color:"white",fontFamily:"Poppins"},busters:{fontSize:"1.1em",color:"#FFD530",fontFamily:"Poppins"},soleSoul:{fontSize:"1.2em",color:"var(--bisque)",fontFamily:"Righteous"},chatContainer:{display:"flex",flexDirection:"column",padding:"10px",borderRadius:"3px",marginRight:"30px"},classChat:{fontSize:"1.4em",color:"#F7ECE1",fontFamily:"Arial"},chatRow:{display:"flex",justifyContent:"center",marginTop:"-10px",gap:"5px"},chatIcon:{color:"var(--neon-green)",marginTop:"12px",fontStyle:"bold"},movieNight:{fontSize:"1.2em",fontFamily:"Righteous",color:"var(--bisque)",padding:"5px",border:"4px solid var(--bisque)",borderRadius:"10px",textShadow:`
            0 0 0.125em rgb(223, 58, 29),
            0 0 0.45em rgb(255, 42, 5)
        `,boxShadow:"0 0 0.2em"},dashboard:{fontSize:"1em",fontFamily:"Poppins",color:"var(--silver-light)"}},Eb=({isVisible:e,delay:t,id:n})=>{let r;switch(n){case 1:r=1;break;case 2:r=2;break;case 3:r=3;break;case 4:r=4;break;case 5:r=5;break;default:r=void 0;break}return v.jsx(Rb,{delay:t,style:{display:e?"block":"none"},children:v.jsx(Pb,{logo:r})})},Ab=le`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Rb=A.div`
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
  animation: ${Ab} 0.3s ease-out forwards;
  animation-delay: ${({delay:e})=>e||"0s"};
  text-align: center;

  
  @media (max-width: 768px) {
    /* visibility: hidden; */
  }
    @media (max-width: 375px) {
      /* visibility: hidden; */
  }
`;function jb({id:e,path:t,title:n,label:r,type:i,color:o,backgroundColor:s,setCursorHoverColor:a,setIsHoveringCards:l}){const[u,c]=w.useState(!1),[f,d]=w.useState(!1),[m,y]=w.useState(!1),{setButtonFade:x}=yC(),k=qa(),p=()=>{d(!0),y(!0),x(!0),l(!1);const h=setTimeout(()=>{d(!1),k(`/${t}`),x(!1)},800);return()=>{clearTimeout(h)}};return v.jsxs(Lb,{children:[m&&v.jsx(zb,{style:{backgroundColor:f?s:""}}),v.jsx(Nb,{children:v.jsxs(Ob,{onClick:p,onKeyDown:h=>h.key==="Enter"&&p(),onFocus:()=>c(e),onBlur:()=>c(null),onMouseEnter:()=>{c(e),a(o),l(!0)},onMouseLeave:()=>{c(null),a("var(--darker)"),l(!1)},className:`${u===e?"hovered":""} ${f?"clicked":""}`,style:{backgroundColor:u===e?s:"",color:u===e?o:""},cursorHoverColor:o,children:[v.jsx(Db,{className:u===e?"fade-out":"fade-in",backgroundColor:s,children:i}),v.jsx(_b,{className:u===e?"fade-out":"fade-in",backgroundColor:s,children:r}),window.innerWidth>480&&v.jsx(Eb,{isVisible:u===e,id:e,delay:"0.3s"})," "]},e)})]})}const pd=le`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,md=le`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,em=le`
0% {
  box-shadow: 0 0 0 var(--dark);
}
100% {
  box-shadow: 1vw 1vw var(--dark);
}
`,Mb=le`
  0% {
    box-shadow: 1vw 1vw var(--dark);
  }
  100% {
    box-shadow: 0 0 0 var(--dark);
  }
`,Ib=le`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(3);
  opacity: 1;
}
`,Lb=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`,Nb=A.div`
  position: relative;
`,Ob=A.div.attrs({tabIndex:0})`
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
    animation: ${em} 0.5s ease forwards;

    .title {
      animation: ${md} 0.5s forwards;
    }

    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${Mb} 0.8s ease forwards;

    .title {
      animation: ${pd} 0.5s forwards;
    }
  }

  &:focus {
    outline: none;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${em} 0.5s ease forwards;
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
`,Db=A.div`
  flex: 1;
  margin: 5px;
  margin-left: 10px;

  @media (max-width: 768px) and (min-width: 320px) {
    color: ${e=>e.backgroundColor};
  }

  &.fade-in {
    animation: ${pd} 0.5s forwards;
  }

  &.fade-out {
    animation: ${md} 0.5s forwards;
  }
`,_b=A.div`
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;

  &.fade-in {
    animation: ${pd} 0.5s forwards;
  }

  &.fade-out {
    animation: ${md} 0.5s forwards;
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
`,zb=A.div`
  position: absolute;
  width: 70%;
  height: 80%;
  border-radius: 50%;
  background-color: transparent;
  animation: ${Ib} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 110;
  opacity: 1;
`;var Fb={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},$b={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wn={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Vb={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},Bb={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Ub={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Wb={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const l1=w.createContext(),ll=({children:e})=>{const t=[{id:1,title:"Dust Busters",path:"cleaning",type:"Cleaning service",label:"React.js",color:"var(--dark)",backgroundColor:"var(--yellowish)",shadow:"var(--shadow-yellowish)",descriptions:{primary:"Embark on a journey with Dust Busters, an exceptional online platform meticulously hosted on Firebase. This website combines innovative front-end design with a robust back-end infrastructure, complemented by CRUD logic.",secondary:"Envision a React-based front-end that simplifies your experience, whether you're navigating bookings, securely logging in, or leaving insightful reviews. It's akin to having a highly efficient superhero dedicated to cleaning services, right at your fingertips.",tertiary:"Powered by Firebase's seamless hosting, Dust Busters delivers a fast, secure, and reliable online experience. Effortless cleanup, perfected for you!"},images:{browserImage:[{id:"1",src:"pageimages/dustbusters/1.png",info:"Welcome to the home of Dust Busters! Here you can find...",alt:"browser search"},{id:"2",src:"pageimages/dustbusters/2.png",info:"...our booking page..",alt:"browser pager"},{id:"3",src:"pageimages/dustbusters/dbBook.png",info:"...our booking form..",alt:"browser series"},{id:"4",src:"pageimages/dustbusters/dbLogin.png",info:"...and our login page!",alt:"browser series"},{id:"5",src:"pageimages/dustbusters/dbReviews.png",info:"Checkout our reviews!",alt:"browser series"}]},repos:[{browser:"https://github.com/jonaelghid3y/DustBusters",icon:v.jsx(Oe,{icon:Wn})},{website:"https://dustbusters-207c6.web.app/",icon:v.jsx(Oe,{icon:Vb})}]},{id:2,title:"Daily Helper",path:"dashboard",type:"Dashboard",label:"Typescript, Next.js",color:"var(--light-blueish)",backgroundColor:"var(--shadow-blueish)",shadow:"var(--shadow-blueish)",descriptions:{primary:"This modern dashboard application is a comprehensive financial and productivity tool built with TypeScript and Next.js. It implements secure authentication using NextAuth.js for protected user access and data privacy. The app leverages React Aria's headless components for accessible, customizable UI elements, combining real-time stock tracking (Alpha Vantage API), weather updates, and news feeds with a task management system.",secondary:"Built with TypeScript for type safety and Tailwind CSS for styling, it offers a responsive interface with dark/light themes. The integration of NextAuth.js, React Aria components, and multiple APIs creates a secure, accessible platform for managing financial portfolios and daily tasks."},images:{browserImage:[{id:"1",src:"pageimages/dashboard/dashboardDark.png",info:"The dashboards homepage with integrated weather update, stock tracking and task tracking calendar.",alt:"browser search"},{id:"2",src:"pageimages/dashboard/dashboardLight.png",info:"Light mode version of the dashboard homepage.",alt:"browser search"},{id:"3",src:"pageimages/dashboard/dashboardFullCalendar.png",info:"Full calendar view with drag and drop functionality on the task management system.",alt:"browser search"},{id:"4",src:"pageimages/dashboard/dashboardNewsCategories.png",info:"News categories from the Public News API.",alt:"browser search"},{id:"5",src:"pageimages/dashboard/dashboardNewsArticles.png",info:"Choose your favorite news articles from the Public News API.",alt:"browser search"},{id:"6",src:"pageimages/dashboard/dashboardArticle.png",info:"Read the full article from the Public News API.",alt:"browser search"},{id:"7",src:"pageimages/dashboard/dashboardStocks.png",info:"Track your stocks with the Alpha Vantage API.",alt:"browser search"},{id:"8",src:"pageimages/dashboard/dashboardProfile.png",info:"Authenticated users can manage their own tasks and calendar.",alt:"browser search"}]},repos:[{browser:"https://github.com/starleafer/Dashboard",icon:v.jsx(Oe,{icon:Wn})}]},{id:3,title:"Sole Soul",path:"webbshop",type:"Web store",label:"React.js",color:"var(--bisque)",backgroundColor:"var(--greenish)",shadow:"var(--shadow-bisuqe)",descriptions:{primary:"Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!",secondary:"Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish!"},images:{browserImage:[{id:"1",src:"pageimages/webbshop/products.png",info:"Have a look at our products!",alt:"browser search"},{id:"2",src:"pageimages/webbshop/description.png",info:"And feel free to read more about them!",alt:"browser pager"},{id:"3",src:"pageimages/webbshop/cart.png",info:"Did you find something you like? Great! Add it to your cart!",alt:"browser series"},{id:"4",src:"pageimages/webbshop/create.png",info:"Are you an admin? Cool! You can create new products here!",alt:"browser series"},{id:"5",src:"pageimages/webbshop/admin.png",info:"And you can also manage your products here!",alt:"browser pager"}]},repos:[{browser:"https://github.com/tobionesies/gruppuppgift-webshop-let",icon:v.jsx(Oe,{icon:Wn})}]},{id:4,title:"Class Chat",path:"chatapp",type:"Chat app",label:"React Native",color:"var(--neon-green)",backgroundColor:"var(--light-purple)",shadow:"var(--shadow-neon-green)",descriptions:{primary:"Class Chat serves as a dedicated platform for group communication, meticulously designed to facilitate smooth interaction within your class or group. Leveraging CRUD logic (Create, Read, Update, Delete), it efficiently manages users and messages, ensuring easy collaboration. Security is paramount, with the implementation of a secure access token mechanism, allowing only authorized individuals to join the conversation.",secondary:"Whether you're in a classroom setting or simply spending time with your friends, Class Chat provides a comprehensive solution for your communication needs. The platform empowers you to create a dynamic and engaging space for your group, giving you control over participants and content. Here's to hassle-free communication!"},images:{nativeImage:[{id:"1",src:"pageimages/chatapp/login.jpg",info:"Welcome to Class Chat! Login to get started!",alt:"browser search"},{id:"2",src:"pageimages/chatapp/registeruser.jpg",info:"Register a new user!",alt:"browser pager"},{id:"3",src:"pageimages/chatapp/chat.jpg",info:"Start chatting with your friends!",alt:"browser series"},{id:"4",src:"pageimages/chatapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"5",src:"pageimages/chatapp/profile.jpg",info:"Check out your profile!",alt:"browser series"},{id:"6",src:"pageimages/chatapp/photo.jpg",info:"Upload a profile picture!",alt:"browser series"},{id:"7",src:"pageimages/chatapp/profilephoto.jpg",info:"And you can also upload a profile picture!",alt:"browser series"},{id:"8",src:"pageimages/chatapp/chatphoto.jpg",info:"Cool!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/ClassChat",icon:v.jsx(Oe,{icon:Wn})}]},{id:5,title:"Movie Night",path:"movieapp",type:"Movie browser",label:"React.js / React Native",color:"var(--redish)",backgroundColor:"var(--darker)",shadow:"var(--shadow-redish)",descriptions:{primary:"Welcome to Movie Night, where we've got your movie cravings covered effortlessly with the OMDb API. Dive into a treasure trove of movie details, spanning from classic gems to the latest blockbusters. Get the info on titles, release dates, genres, casts, runtimes, ratings, and more.",secondary:"The magic doesn't stop there! With the power-packed combo of React and React Native, Movie Night ensures a seamless experience across different platforms. Whether you're chilling on the web version (courtesy of React) or enjoying the mobile app (crafted with React Native) on your smartphones and tablets, movie exploration has never been this effortless. Time to let the movie marathon begin!"},images:{browserImage:[{id:"1",src:"pageimages/movieapp/browserSearch.png",info:"Time for a movie night! Search for your favorite movie!",alt:"browser search"},{id:"2",src:"pageimages/movieapp/browserPager.png",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"pageimages/movieapp/browserSerier.png",info:"Or is it a series you're looking for? We've got you covered!",alt:"browser series"}],nativeImage:[{id:"1",src:"pageimages/movieapp/login.jpg",info:"Welcome to Movie Night! Login to get started!",alt:"browser search"},{id:"2",src:"pageimages/movieapp/movielist.jpg",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"pageimages/movieapp/movieinfo.jpg",info:"Check out the details of your favorite movie!",alt:"browser series"},{id:"4",src:"pageimages/movieapp/search.jpg",info:"Search for your favorite movie!",alt:"browser series"},{id:"5",src:"pageimages/movieapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"6",src:"pageimages/movieapp/mypage.jpg",info:"Check out your profile!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/The-movie-app",icon:v.jsx(Oe,{icon:Wn})},{native:"https://github.com/starleafer/The-Movie-App-Native",icon:v.jsx(Oe,{icon:Wn})}]}],n={id:1,title:"About Emil",path:"about",color:"white",backgroundColor:"var(--dark)",shadow:"var(--shadow-dark)",descriptions:{primary:v.jsxs(v.Fragment,{children:["Well hello there! Nice to see you here.",v.jsx("br",{}),"I'm Emil Stjernlöf, a newly graduated Frontend Developer based in Uppsala, Sweden. As a 30-something former health care worker, I decided to broaden my views and pursue a career change. Scary, I know!",v.jsx("br",{}),v.jsx("br",{}),"From 2022 to 2024, I studied frontend development at Jensen Yrkeshögskola in Kista, where I honed my skills in building engaging and user-friendly web experiences using"," ",v.jsx("b",{style:{color:"var(--neon-green)"},children:"JavaScript"}),",",v.jsx("b",{style:{color:"var(--neon-green)"},children:" React"}),", and",v.jsx("b",{style:{color:"var(--neon-green)"},children:" React Native"}),"."]}),secondary:v.jsx(v.Fragment,{children:"I enjoy working on dynamic and interactive applications that respond to users' needs. For me, great frontend development is about more than just writing code—it's about designing intuitive and visually appealing experiences that make people's lives easier."}),tertiary:v.jsxs(v.Fragment,{children:["During my time at Jensen, I also had the opportunity to gain hands-on experience through a work placement (LIA) at Sigholm. There, I developed my skills in"," ",v.jsx("b",{style:{color:"var(--neon-green)"},children:"TypeScript"})," and agile methodologies, gaining valuable insight into real-world development workflows. This experience also taught me how to quickly adapt to new technologies and work efficiently in a dynamic environment."]}),quaternary:v.jsx(v.Fragment,{children:"I’m excited about the opportunity to pursue this new path. Outside of coding, I love exploring new technologies and keeping up with the latest trends in frontend development. I’m always looking for ways to push my skills further and create digital experiences that are both impactful and memorable."})},images:{profilePic:"pageimages/aboutme/profilepic1.jpg",profilePic2:"pageimages/aboutme/profilepic2.jpg",profilePic3:"pageimages/aboutme/profilepic3.jpg",profilePic4:"pageimages/aboutme/profilepic4.jpg",profilePic5:"pageimages/aboutme/profilepic5.jpg",profilePic6:"pageimages/aboutme/profilepic6.jpg",profilePic7:"pageimages/aboutme/profilepic7.jpg"},repos:[{browser:"https://github.com/starleafer",icon:v.jsx(Oe,{icon:Wn})},{linkedin:"https://www.linkedin.com/in/emil-stjernlof/",icon:v.jsx(Oe,{icon:$b})},{email:"mailto:emil.stjernlof@gmail.com",icon:v.jsx(Oe,{icon:Wb})}],music:[{song:"https://open.spotify.com/track/1A6u3ufwPK5apJlpmXjOK8?si=6707a186001f4f8b",songtitle:"Jonathan Johansson - På Boulevarden"},{song:"https://open.spotify.com/track/7j3KGtoP432CcQLA9zLrAo?si=ae7dc7e146734b27",songtitle:"Drab Majesty - Ellipsis"},{song:"https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=d6f658457e794997",songtitle:"Frank Ocean - Pink + White"},{song:"https://open.spotify.com/track/2cGlzTR9gC93lc12cZ8afB?si=66362dab1fa94d5d",songtitle:"Moonica Mac - 80´s"},{song:"https://open.spotify.com/track/413CBplTN03RNZD8H34B6q?si=a5a98e900ac14884",songtitle:"The War On Drugs - Strangest Thing"}],musicIcon:v.jsx(Oe,{icon:Fb,style:{width:"1em",height:"1em"}})};return v.jsx(l1.Provider,{value:{card:t,main:n},children:e})};ll.propTypes={children:I.node.isRequired};const At=()=>w.useContext(l1),gd=w.createContext({});function Si(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const ul=w.createContext(null),Yo=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Hb extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=r instanceof HTMLElement&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Yb({children:e,isPresent:t,anchorX:n}){const r=w.useId(),i=w.useRef(null),o=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=w.useContext(Yo);return w.useInsertionEffect(()=>{const{width:a,height:l,top:u,left:c,right:f}=o.current;if(t||!i.current||!a||!l)return;const d=n==="left"?`left: ${c}`:`right: ${f}`;i.current.dataset.motionPopId=r;const m=document.createElement("style");return s&&(m.nonce=s),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),v.jsx(Hb,{isPresent:t,childRef:i,sizeRef:o,children:w.cloneElement(e,{ref:i})})}const Gb=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a})=>{const l=Si(Kb),u=w.useId(),c=w.useCallback(d=>{l.set(d,!0);for(const m of l.values())if(!m)return;r&&r()},[l,r]),f=w.useMemo(()=>({id:u,initial:t,isPresent:n,custom:i,onExitComplete:c,register:d=>(l.set(d,!1),()=>l.delete(d))}),o?[Math.random(),c]:[n,c]);return w.useMemo(()=>{l.forEach((d,m)=>l.set(m,!1))},[n]),w.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=v.jsx(Yb,{isPresent:n,anchorX:a,children:e})),v.jsx(ul.Provider,{value:f,children:e})};function Kb(){return new Map}function u1(e=!0){const t=w.useContext(ul);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{e&&i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const xs=e=>e.key||"";function tm(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const vd=typeof window<"u",Go=vd?w.useLayoutEffect:w.useEffect,nm=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left"})=>{const[l,u]=u1(s),c=w.useMemo(()=>tm(e),[e]),f=s&&!l?[]:c.map(xs),d=w.useRef(!0),m=w.useRef(c),y=Si(()=>new Map),[x,k]=w.useState(c),[p,h]=w.useState(c);Go(()=>{d.current=!1,m.current=c;for(let S=0;S<p.length;S++){const b=xs(p[S]);f.includes(b)?y.delete(b):y.get(b)!==!0&&y.set(b,!1)}},[p,f.length,f.join("-")]);const g=[];if(c!==x){let S=[...c];for(let b=0;b<p.length;b++){const P=p[b],T=xs(P);f.includes(T)||(S.splice(b,0,P),g.push(P))}o==="wait"&&g.length&&(S=g),h(tm(S)),k(c);return}const{forceRender:C}=w.useContext(gd);return v.jsx(v.Fragment,{children:p.map(S=>{const b=xs(S),P=s&&!l?!1:c===p||f.includes(b),T=()=>{if(y.has(b))y.set(b,!0);else return;let N=!0;y.forEach(M=>{M||(N=!1)}),N&&(C==null||C(),h(m.current),s&&(u==null||u()),r&&r())};return v.jsx(Gb,{isPresent:P,initial:!d.current||n?void 0:!1,custom:P?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:P?void 0:T,anchorX:a,children:S},b)})})},ze=e=>e;let Xb=ze,c1=ze;function yd(e){let t;return()=>(t===void 0&&(t=e()),t)}const xr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Qt=e=>e*1e3,qt=e=>e/1e3,Qb={skipAnimations:!1,useManualTiming:!1};function qb(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,c=!1,f=!1)=>{const m=f&&r?t:n;return c&&o.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const ws=["read","resolveKeyframes","update","preRender","render","postRender"],Zb=40;function f1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=ws.reduce((p,h)=>(p[h]=qb(o),p),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=s,m=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,Zb),1),i.timestamp=p,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),f.process(i),d.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:ws.reduce((p,h)=>{const g=s[h];return p[h]=(C,S=!1,b=!1)=>(n||y(),g.schedule(C,S,b)),p},{}),cancel:p=>{for(let h=0;h<ws.length;h++)s[ws[h]].cancel(p)},state:i,steps:s}}const{schedule:W,cancel:Et,state:Se,steps:eu}=f1(typeof requestAnimationFrame<"u"?requestAnimationFrame:ze,!0),d1=w.createContext({strict:!1}),rm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},di={};for(const e in rm)di[e]={isEnabled:t=>rm[e].some(n=>!!t[n])};function Jb(e){for(const t in e)di[t]={...di[t],...e[t]}}const eP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ba(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||eP.has(e)}let h1=e=>!ba(e);function tP(e){e&&(h1=t=>t.startsWith("on")?!ba(t):e(t))}try{tP(require("@emotion/is-prop-valid").default)}catch{}function nP(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(h1(i)||n===!0&&ba(i)||!t&&!ba(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function rP(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const cl=w.createContext({});function Lo(e){return typeof e=="string"||Array.isArray(e)}function fl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const xd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wd=["initial",...xd];function dl(e){return fl(e.animate)||wd.some(t=>Lo(e[t]))}function p1(e){return!!(dl(e)||e.variants)}function iP(e,t){if(dl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Lo(n)?n:void 0,animate:Lo(r)?r:void 0}}return e.inherit!==!1?t:{}}function oP(e){const{initial:t,animate:n}=iP(e,w.useContext(cl));return w.useMemo(()=>({initial:t,animate:n}),[im(t),im(n)])}function im(e){return Array.isArray(e)?e.join(" "):e}const sP=Symbol.for("motionComponentSymbol");function $r(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function aP(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):$r(n)&&(n.current=r))},[t])}const Sd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),lP="framerAppearId",m1="data-"+Sd(lP),{schedule:kd,cancel:qA}=f1(queueMicrotask,!1),g1=w.createContext({});function uP(e,t,n,r,i){var o,s;const{visualElement:a}=w.useContext(cl),l=w.useContext(d1),u=w.useContext(ul),c=w.useContext(Yo).reducedMotion,f=w.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const d=f.current,m=w.useContext(g1);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&cP(f.current,n,i,m);const y=w.useRef(!1);w.useInsertionEffect(()=>{d&&y.current&&d.update(n,u)});const x=n[m1],k=w.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,x)));return Go(()=>{d&&(y.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),kd.render(d.render),k.current&&d.animationState&&d.animationState.animateChanges())}),w.useEffect(()=>{d&&(!k.current&&d.animationState&&d.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,x)}),k.current=!1))}),d}function cP(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:v1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&$r(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function v1(e){if(e)return e.options.allowProjection!==!1?e.projection:v1(e.parent)}function fP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&Jb(e);function a(u,c){let f;const d={...w.useContext(Yo),...u,layoutId:dP(u)},{isStatic:m}=d,y=oP(u),x=r(u,m);if(!m&&vd){hP();const k=pP(d);f=k.MeasureLayout,y.visualElement=uP(i,x,d,t,k.ProjectionNode)}return v.jsxs(cl.Provider,{value:y,children:[f&&y.visualElement?v.jsx(f,{visualElement:y.visualElement,...d}):null,n(i,u,aP(x,y.visualElement,c),x,m,y.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const l=w.forwardRef(a);return l[sP]=i,l}function dP({layoutId:e}){const t=w.useContext(gd).id;return t&&e!==void 0?t+"-"+e:e}function hP(e,t){w.useContext(d1).strict}function pP(e){const{drag:t,layout:n}=di;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const mP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cd(e){return typeof e!="string"||e.includes("-")?!1:!!(mP.indexOf(e)>-1||/[A-Z]/u.test(e))}function om(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function bd(e,t,n,r){if(typeof t=="function"){const[i,o]=om(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=om(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const Dc=e=>Array.isArray(e),gP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),vP=e=>Dc(e)?e[e.length-1]||0:e,be=e=>!!(e&&e.getVelocity);function Bs(e){const t=be(e)?e.get():e;return gP(t)?t.toValue():t}function yP({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:xP(r,i,o,e),renderState:t()};return n&&(s.onMount=a=>n({props:r,current:a,...s}),s.onUpdate=a=>n(a)),s}const y1=e=>(t,n)=>{const r=w.useContext(cl),i=w.useContext(ul),o=()=>yP(e,t,r,i);return n?o():Si(o)};function xP(e,t,n,r){const i={},o=r(e,{});for(const d in o)i[d]=Bs(o[d]);let{initial:s,animate:a}=e;const l=dl(e),u=p1(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const f=c?a:s;if(f&&typeof f!="boolean"&&!fl(f)){const d=Array.isArray(f)?f:[f];for(let m=0;m<d.length;m++){const y=bd(e,d[m]);if(y){const{transitionEnd:x,transition:k,...p}=y;for(const h in p){let g=p[h];if(Array.isArray(g)){const C=c?g.length-1:0;g=g[C]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const ki=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kr=new Set(ki),x1=e=>t=>typeof t=="string"&&t.startsWith(e),Pd=x1("--"),wP=x1("var(--"),Td=e=>wP(e)?SP.test(e.split("/*")[0].trim()):!1,SP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,w1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Bt=(e,t,n)=>n>t?t:n<e?e:n,Ci={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},No={...Ci,transform:e=>Bt(0,1,e)},Ss={...Ci,default:1},Ko=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),mn=Ko("deg"),Ft=Ko("%"),z=Ko("px"),kP=Ko("vh"),CP=Ko("vw"),sm={...Ft,parse:e=>Ft.parse(e)/100,transform:e=>Ft.transform(e*100)},bP={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},PP={rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:Ss,scaleX:Ss,scaleY:Ss,scaleZ:Ss,skew:mn,skewX:mn,skewY:mn,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:No,originX:sm,originY:sm,originZ:z},am={...Ci,transform:Math.round},Ed={...bP,...PP,zIndex:am,size:z,fillOpacity:No,strokeOpacity:No,numOctaves:am},TP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},EP=ki.length;function AP(e,t,n){let r="",i=!0;for(let o=0;o<EP;o++){const s=ki[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=w1(a,Ed[s]);if(!l){i=!1;const c=TP[s]||s;r+=`${c}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Ad(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(kr.has(l)){s=!0;continue}else if(Pd(l)){i[l]=u;continue}else{const c=w1(u,Ed[l]);l.startsWith("origin")?(a=!0,o[l]=c):r[l]=c}}if(t.transform||(s||n?r.transform=AP(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}const RP={offset:"stroke-dashoffset",array:"stroke-dasharray"},jP={offset:"strokeDashoffset",array:"strokeDasharray"};function MP(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?RP:jP;e[o.offset]=z.transform(-r);const s=z.transform(t),a=z.transform(n);e[o.array]=`${s} ${a}`}function lm(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function IP(e,t,n){const r=lm(t,e.x,e.width),i=lm(n,e.y,e.height);return`${r} ${i}`}function Rd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(Ad(e,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:m,dimensions:y}=e;d.transform&&(y&&(m.transform=d.transform),delete d.transform),y&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=IP(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),s!==void 0&&MP(d,s,a,l,!1)}const jd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),S1=()=>({...jd(),attrs:{}}),Md=e=>typeof e=="string"&&e.toLowerCase()==="svg";function k1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const C1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function b1(e,t,n,r){k1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(C1.has(i)?i:Sd(i),t.attrs[i])}const Oo={};function LP(e){for(const t in e)Oo[t]=e[t],Pd(t)&&(Oo[t].isCSSVariable=!0)}function P1(e,{layout:t,layoutId:n}){return kr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Oo[e]||e==="opacity")}function Id(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(be(i[s])||t.style&&be(t.style[s])||P1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function T1(e,t,n){const r=Id(e,t,n);for(const i in e)if(be(e[i])||be(t[i])){const o=ki.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function NP(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const um=["x","y","width","height","cx","cy","r"],OP={useVisualState:y1({scrapeMotionValuesFromProps:T1,createRenderState:S1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const a in i)if(kr.has(a)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let a=0;a<um.length;a++){const l=um[a];e[l]!==t[l]&&(s=!0)}s&&W.read(()=>{NP(n,r),W.render(()=>{Rd(r,i,Md(n.tagName),e.transformTemplate),b1(n,r)})})}})},DP={useVisualState:y1({scrapeMotionValuesFromProps:Id,createRenderState:jd})};function E1(e,t,n){for(const r in t)!be(t[r])&&!P1(r,n)&&(e[r]=t[r])}function _P({transformTemplate:e},t){return w.useMemo(()=>{const n=jd();return Ad(n,t,e),Object.assign({},n.vars,n.style)},[t])}function zP(e,t){const n=e.style||{},r={};return E1(r,n,e),Object.assign(r,_P(e,t)),r}function FP(e,t){const n={},r=zP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function $P(e,t,n,r){const i=w.useMemo(()=>{const o=S1();return Rd(o,t,Md(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};E1(o,e.style,e),i.style={...o,...i.style}}return i}function VP(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Cd(n)?$P:FP)(r,o,s,n),u=nP(r,typeof n=="string",e),c=n!==w.Fragment?{...u,...l,ref:i}:{},{children:f}=r,d=w.useMemo(()=>be(f)?f.get():f,[f]);return w.createElement(n,{...c,children:d})}}function BP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Cd(r)?OP:DP,preloadedFeatures:e,useRender:VP(i),createVisualElement:t,Component:r};return fP(s)}}function A1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function hl(e,t,n){const r=e.getProps();return bd(r,t,n!==void 0?n:r.custom,e)}const R1=yd(()=>window.ScrollTimeline!==void 0);class UP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(R1()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class WP extends UP{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Ld(e,t){return e?e[t]||e.default||e:void 0}const _c=2e4;function j1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<_c;)t+=n,r=e.next(t);return t>=_c?1/0:t}function Nd(e){return typeof e=="function"}function cm(e,t){e.timeline=t,e.onfinish=null}const Od=e=>Array.isArray(e)&&typeof e[0]=="number",HP={linearEasing:void 0};function YP(e,t){const n=yd(e);return()=>{var r;return(r=HP[t])!==null&&r!==void 0?r:n()}}const Pa=YP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),M1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(xr(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function I1(e){return!!(typeof e=="function"&&Pa()||!e||typeof e=="string"&&(e in zc||Pa())||Od(e)||Array.isArray(e)&&e.every(I1))}const Bi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,zc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bi([0,.65,.55,1]),circOut:Bi([.55,0,1,.45]),backIn:Bi([.31,.01,.66,-.59]),backOut:Bi([.33,1.53,.69,.99])};function L1(e,t){if(e)return typeof e=="function"&&Pa()?M1(e,t):Od(e)?Bi(e):Array.isArray(e)?e.map(n=>L1(n,t)||zc.easeOut):zc[e]}const xt={x:!1,y:!1};function N1(){return xt.x||xt.y}function O1(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;t&&(i=t.current);const o=(r=n==null?void 0:n[e])!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function D1(e,t){const n=O1(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function fm(e){return!(e.pointerType==="touch"||N1())}function GP(e,t,n={}){const[r,i,o]=D1(e,n),s=a=>{if(!fm(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const c=f=>{fm(f)&&(u(f),l.removeEventListener("pointerleave",c))};l.addEventListener("pointerleave",c,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const _1=(e,t)=>t?e===t?!0:_1(e,t.parentElement):!1,Dd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,KP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function XP(e){return KP.has(e.tagName)||e.tabIndex!==-1}const Ui=new WeakSet;function dm(e){return t=>{t.key==="Enter"&&e(t)}}function tu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const QP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=dm(()=>{if(Ui.has(n))return;tu(n,"down");const i=dm(()=>{tu(n,"up")}),o=()=>tu(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function hm(e){return Dd(e)&&!N1()}function qP(e,t,n={}){const[r,i,o]=D1(e,n),s=a=>{const l=a.currentTarget;if(!hm(a)||Ui.has(l))return;Ui.add(l);const u=t(l,a),c=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!hm(m)||!Ui.has(l))&&(Ui.delete(l),typeof u=="function"&&u(m,{success:y}))},f=m=>{c(m,n.useGlobalTarget||_1(l,m.target))},d=m=>{c(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",d,i)};return r.forEach(a=>{!XP(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),a.addEventListener("focus",u=>QP(u,i),i)}),o}function ZP(e){return e==="x"||e==="y"?xt[e]?null:(xt[e]=!0,()=>{xt[e]=!1}):xt.x||xt.y?null:(xt.x=xt.y=!0,()=>{xt.x=xt.y=!1})}const z1=new Set(["width","height","top","left","right","bottom",...ki]);let Us;function JP(){Us=void 0}const $t={now:()=>(Us===void 0&&$t.set(Se.isProcessing||Qb.useManualTiming?Se.timestamp:performance.now()),Us),set:e=>{Us=e,queueMicrotask(JP)}};function _d(e,t){e.indexOf(t)===-1&&e.push(t)}function zd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Fd{constructor(){this.subscriptions=[]}add(t){return _d(this.subscriptions,t),()=>zd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $d(e,t){return t?e*(1e3/t):0}const pm=30,eT=e=>!isNaN(parseFloat(e)),io={current:void 0};class tT{constructor(t,n={}){this.version="12.0.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=$t.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=$t.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=eT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Fd);const r=this.events[t].add(n);return t==="change"?()=>{r(),W.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return io.current&&io.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=$t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>pm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,pm);return $d(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Dt(e,t){return new tT(e,t)}function nT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Dt(n))}function rT(e,t){const n=hl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=vP(o[s]);nT(e,s,a)}}function iT(e){return!!(be(e)&&e.add)}function Fc(e,t){const n=e.getValue("willChange");if(iT(n))return n.add(t)}function F1(e){return e.props[m1]}const $1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,oT=1e-7,sT=12;function aT(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=$1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>oT&&++a<sT);return s}function Xo(e,t,n,r){if(e===t&&n===r)return ze;const i=o=>aT(o,0,1,e,n);return o=>o===0||o===1?o:$1(i(o),t,r)}const V1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,B1=e=>t=>1-e(1-t),U1=Xo(.33,1.53,.69,.99),Vd=B1(U1),W1=V1(Vd),H1=e=>(e*=2)<1?.5*Vd(e):.5*(2-Math.pow(2,-10*(e-1))),Bd=e=>1-Math.sin(Math.acos(e)),Y1=B1(Bd),G1=V1(Bd),K1=e=>/^0[^.\s]+$/u.test(e);function lT(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||K1(e):!0}const oo=e=>Math.round(e*1e5)/1e5,Ud=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function uT(e){return e==null}const cT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wd=(e,t)=>n=>!!(typeof n=="string"&&cT.test(n)&&n.startsWith(e)||t&&!uT(n)&&Object.prototype.hasOwnProperty.call(n,t)),X1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Ud);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},fT=e=>Bt(0,255,e),nu={...Ci,transform:e=>Math.round(fT(e))},rr={test:Wd("rgb","red"),parse:X1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+nu.transform(e)+", "+nu.transform(t)+", "+nu.transform(n)+", "+oo(No.transform(r))+")"};function dT(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const $c={test:Wd("#"),parse:dT,transform:rr.transform},Vr={test:Wd("hsl","hue"),parse:X1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ft.transform(oo(t))+", "+Ft.transform(oo(n))+", "+oo(No.transform(r))+")"},Ie={test:e=>rr.test(e)||$c.test(e)||Vr.test(e),parse:e=>rr.test(e)?rr.parse(e):Vr.test(e)?Vr.parse(e):$c.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?rr.transform(e):Vr.transform(e)},hT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pT(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ud))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(hT))===null||n===void 0?void 0:n.length)||0)>0}const Q1="number",q1="color",mT="var",gT="var(",mm="${}",vT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Do(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(vT,l=>(Ie.test(l)?(r.color.push(o),i.push(q1),n.push(Ie.parse(l))):l.startsWith(gT)?(r.var.push(o),i.push(mT),n.push(l)):(r.number.push(o),i.push(Q1),n.push(parseFloat(l))),++o,mm)).split(mm);return{values:n,split:a,indexes:r,types:i}}function Z1(e){return Do(e).values}function J1(e){const{split:t,types:n}=Do(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Q1?o+=oo(i[s]):a===q1?o+=Ie.transform(i[s]):o+=i[s]}return o}}const yT=e=>typeof e=="number"?0:e;function xT(e){const t=Z1(e);return J1(e)(t.map(yT))}const zn={test:pT,parse:Z1,createTransformer:J1,getAnimatableNone:xT},wT=new Set(["brightness","contrast","saturate","opacity"]);function ST(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ud)||[];if(!r)return e;const i=n.replace(r,"");let o=wT.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const kT=/\b([a-z-]*)\(.*?\)/gu,Vc={...zn,getAnimatableNone:e=>{const t=e.match(kT);return t?t.map(ST).join(" "):e}},CT={...Ed,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:Vc,WebkitFilter:Vc},Hd=e=>CT[e];function ex(e,t){let n=Hd(e);return n!==Vc&&(n=zn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bT=new Set(["auto","none","0"]);function PT(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!bT.has(o)&&Do(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=ex(n,i)}const gm=e=>e===Ci||e===z,vm=(e,t)=>parseFloat(e.split(", ")[t]),ym=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return vm(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?vm(o[1],e):0}},TT=new Set(["x","y","z"]),ET=ki.filter(e=>!TT.has(e));function AT(e){const t=[];return ET.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const hi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ym(4,13),y:ym(5,14)};hi.translateX=hi.x;hi.translateY=hi.y;const fr=new Set;let Bc=!1,Uc=!1;function tx(){if(Uc){const e=Array.from(fr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=AT(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Uc=!1,Bc=!1,fr.forEach(e=>e.complete()),fr.clear()}function nx(){fr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Uc=!0)})}function RT(){nx(),tx()}class Yd{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(fr.add(this),Bc||(Bc=!0,W.read(nx),W.resolveKeyframes(tx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),fr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,fr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const rx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),jT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function MT(e){const t=jT.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function ix(e,t,n=1){const[r,i]=MT(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return rx(s)?parseFloat(s):s}return Td(i)?ix(i,t,n+1):i}const ox=e=>t=>t.test(e),IT={test:e=>e==="auto",parse:e=>e},sx=[Ci,z,Ft,mn,CP,kP,IT],xm=e=>sx.find(ox(e));class ax extends Yd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Td(u))){const c=ix(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!z1.has(r)||t.length!==2)return;const[i,o]=t,s=xm(i),a=xm(o);if(s!==a)if(gm(s)&&gm(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)lT(t[i])&&r.push(i);r.length&&PT(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=hi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const wm=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(zn.test(e)||e==="0")&&!e.startsWith("url("));function LT(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function NT(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=wm(i,t),a=wm(o,t);return!s||!a?!1:LT(e)||(n==="spring"||Nd(n))&&r}const OT=e=>e!==null;function pl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(OT),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const DT=40;class lx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=$t.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>DT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&RT(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=$t.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!NT(t,r,i,o))if(s)this.options.duration=0;else{l&&l(pl(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const oe=(e,t,n)=>e+(t-e)*n;function ru(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _T({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=ru(l,a,e+1/3),o=ru(l,a,e),s=ru(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Ta(e,t){return n=>n>0?t:e}const iu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},zT=[$c,rr,Vr],FT=e=>zT.find(t=>t.test(e));function Sm(e){const t=FT(e);if(!t)return!1;let n=t.parse(e);return t===Vr&&(n=_T(n)),n}const km=(e,t)=>{const n=Sm(e),r=Sm(t);if(!n||!r)return Ta(e,t);const i={...n};return o=>(i.red=iu(n.red,r.red,o),i.green=iu(n.green,r.green,o),i.blue=iu(n.blue,r.blue,o),i.alpha=oe(n.alpha,r.alpha,o),rr.transform(i))},$T=(e,t)=>n=>t(e(n)),Qo=(...e)=>e.reduce($T),Wc=new Set(["none","hidden"]);function VT(e,t){return Wc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function BT(e,t){return n=>oe(e,t,n)}function Gd(e){return typeof e=="number"?BT:typeof e=="string"?Td(e)?Ta:Ie.test(e)?km:HT:Array.isArray(e)?ux:typeof e=="object"?Ie.test(e)?km:UT:Ta}function ux(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Gd(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function UT(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Gd(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function WT(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const HT=(e,t)=>{const n=zn.createTransformer(t),r=Do(e),i=Do(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Wc.has(e)&&!i.values.length||Wc.has(t)&&!r.values.length?VT(e,t):Qo(ux(WT(r,i),i.values),n):Ta(e,t)};function cx(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?oe(e,t,n):Gd(e)(e,t)}const YT=5;function fx(e,t,n){const r=Math.max(t-YT,0);return $d(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ou=.001;function GT({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,o,s=1-t;s=Bt(ue.minDamping,ue.maxDamping,s),e=Bt(ue.minDuration,ue.maxDuration,qt(e)),s<1?(i=u=>{const c=u*s,f=c*e,d=c-n,m=Hc(u,s),y=Math.exp(-f);return ou-d/m*y},o=u=>{const f=u*s*e,d=f*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),x=Hc(Math.pow(u,2),s);return(-i(u)+ou>0?-1:1)*((d-m)*y)/x}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-ou+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const a=5/e,l=XT(i,o,a);if(e=Qt(e),isNaN(l))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const KT=12;function XT(e,t,n){let r=n;for(let i=1;i<KT;i++)r=r-e(r)/t(r);return r}function Hc(e,t){return e*Math.sqrt(1-t*t)}const QT=["duration","bounce"],qT=["stiffness","damping","mass"];function Cm(e,t){return t.some(n=>e[n]!==void 0)}function ZT(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!Cm(e,qT)&&Cm(e,QT))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Bt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:o}}else{const n=GT(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function dx(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:m}=ZT({...n,velocity:-qt(n.velocity||0)}),y=d||0,x=u/(2*Math.sqrt(l*c)),k=s-o,p=qt(Math.sqrt(l/c)),h=Math.abs(k)<5;r||(r=h?ue.restSpeed.granular:ue.restSpeed.default),i||(i=h?ue.restDelta.granular:ue.restDelta.default);let g;if(x<1){const S=Hc(p,x);g=b=>{const P=Math.exp(-x*p*b);return s-P*((y+x*p*k)/S*Math.sin(S*b)+k*Math.cos(S*b))}}else if(x===1)g=S=>s-Math.exp(-p*S)*(k+(y+p*k)*S);else{const S=p*Math.sqrt(x*x-1);g=b=>{const P=Math.exp(-x*p*b),T=Math.min(S*b,300);return s-P*((y+x*p*k)*Math.sinh(T)+S*k*Math.cosh(T))/S}}const C={calculatedDuration:m&&f||null,next:S=>{const b=g(S);if(m)a.done=S>=f;else{let P=0;x<1&&(P=S===0?Qt(y):fx(g,S,b));const T=Math.abs(P)<=r,N=Math.abs(s-b)<=i;a.done=T&&N}return a.value=a.done?s:b,a},toString:()=>{const S=Math.min(j1(C),_c),b=M1(P=>C.next(S*P).value,S,30);return S+"ms "+b}};return C}function bm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],d={done:!1,value:f},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const k=f+x,p=s===void 0?k:s(k);p!==k&&(x=p-f);const h=T=>-x*Math.exp(-T/r),g=T=>p+h(T),C=T=>{const N=h(T),M=g(T);d.done=Math.abs(N)<=u,d.value=d.done?p:M};let S,b;const P=T=>{m(d.value)&&(S=T,b=dx({keyframes:[d.value,y(d.value)],velocity:fx(g,T,d.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:T=>{let N=!1;return!b&&S===void 0&&(N=!0,C(T),P(T)),S!==void 0&&T>=S?b.next(T-S):(!N&&C(T),d)}}}const JT=Xo(.42,0,1,1),eE=Xo(0,0,.58,1),hx=Xo(.42,0,.58,1),tE=e=>Array.isArray(e)&&typeof e[0]!="number",nE={linear:ze,easeIn:JT,easeInOut:hx,easeOut:eE,circIn:Bd,circInOut:G1,circOut:Y1,backIn:Vd,backInOut:W1,backOut:U1,anticipate:H1},Pm=e=>{if(Od(e)){c1(e.length===4);const[t,n,r,i]=e;return Xo(t,n,r,i)}else if(typeof e=="string")return nE[e];return e};function rE(e,t,n){const r=[],i=n||cx,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ze:t;a=Qo(l,a)}r.push(a)}return r}function Kd(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(c1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=rE(t,r,i),l=a.length,u=c=>{if(s&&c<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const d=xr(e[f],e[f+1],c);return a[f](d)};return n?c=>u(Bt(e[0],e[o-1],c)):u}function iE(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=xr(0,t,r);e.push(oe(n,1,i))}}function px(e){const t=[0];return iE(t,e.length-1),t}function oE(e,t){return e.map(n=>n*t)}function sE(e,t){return e.map(()=>t||hx).splice(0,e.length-1)}function Ea({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=tE(r)?r.map(Pm):Pm(r),o={done:!1,value:t[0]},s=oE(n&&n.length===t.length?n:px(t),e),a=Kd(s,t,{ease:Array.isArray(i)?i:sE(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const aE=e=>{const t=({timestamp:n})=>e(n);return{start:()=>W.update(t,!0),stop:()=>Et(t),now:()=>Se.isProcessing?Se.timestamp:$t.now()}},lE={decay:bm,inertia:bm,tween:Ea,keyframes:Ea,spring:dx},uE=e=>e/100;class ml extends lx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Yd,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Nd(n)?n:lE[n]||Ea;let l,u;a!==Ea&&typeof t[0]!="number"&&(l=Qo(uE,cx(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=j1(c));const{calculatedDuration:f}=c,d=f+i,m=d*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:m}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:d,repeat:m,repeatType:y,repeatDelay:x,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-d*(this.speed>=0?1:-1),h=this.speed>=0?p<0:p>c;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,C=o;if(m){const T=Math.min(this.currentTime,c)/f;let N=Math.floor(T),M=T%1;!M&&T>=1&&(M=1),M===1&&N--,N=Math.min(N,m+1),!!(N%2)&&(y==="reverse"?(M=1-M,x&&(M-=x/f)):y==="mirror"&&(C=s)),g=Bt(0,1,M)*f}const S=h?{done:!1,value:l[0]}:C.next(g);a&&(S.value=a(S.value));let{done:b}=S;!h&&u!==null&&(b=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return P&&i!==void 0&&(S.value=pl(l,this.options,i)),k&&k(S.value),P&&this.finish(),S}get duration(){const{resolved:t}=this;return t?qt(t.calculatedDuration):0}get time(){return qt(this.currentTime)}set time(t){t=Qt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=qt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=aE,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function cE(e){return new ml(e)}const fE=new Set(["opacity","clipPath","filter","transform"]);function dE(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=L1(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const hE=yd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Aa=10,pE=2e4;function mE(e){return Nd(e.type)||e.type==="spring"||!I1(e.ease)}function gE(e,t){const n=new ml({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<pE;)r=n.sample(o),i.push(r.value),o+=Aa;return{times:void 0,keyframes:i,duration:o-Aa,ease:"linear"}}const mx={anticipate:H1,backInOut:W1,circInOut:G1};function vE(e){return e in mx}class Tm extends lx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new ax(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&Pa()&&vE(o)&&(o=mx[o]),mE(this.options)){const{onComplete:f,onUpdate:d,motionValue:m,element:y,...x}=this.options,k=gE(t,x);t=k.keyframes,t.length===1&&(t[1]=t[0]),r=k.duration,i=k.times,o=k.ease,s="keyframes"}const c=dE(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:o});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(cm(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(pl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return qt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return qt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Qt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ze;const{animation:r}=n;cm(r,t)}return ze}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...m}=this.options,y=new ml({...m,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=Qt(this.time);u.setWithVelocity(y.sample(x-Aa).value,y.sample(x).value,Aa)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return hE()&&r&&fE.has(r)&&!l&&!u&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const yE={type:"spring",stiffness:500,damping:25,restSpeed:10},xE=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),wE={type:"keyframes",duration:.8},SE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},kE=(e,{keyframes:t})=>t.length>2?wE:kr.has(e)?e.startsWith("scale")?xE(t[1]):yE:SE;function CE({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Xd=(e,t,n,r={},i,o)=>s=>{const a=Ld(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Qt(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:d=>{t.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};CE(a)||(c={...c,...kE(e,c)}),c.duration&&(c.duration=Qt(c.duration)),c.repeatDelay&&(c.repeatDelay=Qt(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const d=pl(c.keyframes,a);if(d!==void 0)return W.update(()=>{c.onUpdate(d),c.onComplete()}),new WP([])}return!o&&Tm.supports(c)?new Tm(c):new ml(c)};function bE({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function gx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const d=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),m=l[f];if(m===void 0||c&&bE(c,f))continue;const y={delay:n,...Ld(s||{},f)};let x=!1;if(window.MotionHandoffAnimation){const p=F1(e);if(p){const h=window.MotionHandoffAnimation(p,f,W);h!==null&&(y.startTime=h,x=!0)}}Fc(e,f),d.start(Xd(f,d,m,e.shouldReduceMotion&&z1.has(f)?{type:!1}:y,e,x));const k=d.animation;k&&u.push(k)}return a&&Promise.all(u).then(()=>{W.update(()=>{a&&rT(e,a)})}),u}function Yc(e,t,n={}){var r;const i=hl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(gx(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=o;return PE(e,t,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function PE(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(TE).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Yc(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function TE(e,t){return e.sortNodePosition(t)}function EE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Yc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Yc(e,t,n);else{const i=typeof t=="function"?hl(e,t,n.custom):t;r=Promise.all(gx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const AE=wd.length;function vx(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?vx(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<AE;n++){const r=wd[n],i=e.props[r];(Lo(i)||i===!1)&&(t[r]=i)}return t}const RE=[...xd].reverse(),jE=xd.length;function ME(e){return t=>Promise.all(t.map(({animation:n,options:r})=>EE(e,n,r)))}function IE(e){let t=ME(e),n=Em(),r=!0;const i=l=>(u,c)=>{var f;const d=hl(e,c,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:m,transitionEnd:y,...x}=d;u={...u,...x,...y}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,c=vx(e.parent)||{},f=[],d=new Set;let m={},y=1/0;for(let k=0;k<jE;k++){const p=RE[k],h=n[p],g=u[p]!==void 0?u[p]:c[p],C=Lo(g),S=p===l?h.isActive:null;S===!1&&(y=k);let b=g===c[p]&&g!==u[p]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...m},!h.isActive&&S===null||!g&&!h.prevProp||fl(g)||typeof g=="boolean")continue;const P=LE(h.prevProp,g);let T=P||p===l&&h.isActive&&!b&&C||k>y&&C,N=!1;const M=Array.isArray(g)?g:[g];let B=M.reduce(i(p),{});S===!1&&(B={});const{prevResolvedValues:Te={}}=h,he={...Te,...B},st=U=>{T=!0,d.has(U)&&(N=!0,d.delete(U)),h.needsAnimating[U]=!0;const R=e.getValue(U);R&&(R.liveStyle=!1)};for(const U in he){const R=B[U],O=Te[U];if(m.hasOwnProperty(U))continue;let D=!1;Dc(R)&&Dc(O)?D=!A1(R,O):D=R!==O,D?R!=null?st(U):d.add(U):R!==void 0&&d.has(U)?st(U):h.protectedKeys[U]=!0}h.prevProp=g,h.prevResolvedValues=B,h.isActive&&(m={...m,...B}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(b&&P)||N)&&f.push(...M.map(U=>({animation:U,options:{type:p}})))}if(d.size){const k={};d.forEach(p=>{const h=e.getBaseTarget(p),g=e.getValue(p);g&&(g.liveStyle=!0),k[p]=h??null}),f.push({animation:k})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const f=s(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Em(),r=!0}}}function LE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!A1(t,e):!1}function Hn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Em(){return{animate:Hn(!0),whileInView:Hn(),whileHover:Hn(),whileTap:Hn(),whileDrag:Hn(),whileFocus:Hn(),exit:Hn()}}class Bn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class NE extends Bn{constructor(t){super(t),t.animationState||(t.animationState=IE(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();fl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let OE=0;class DE extends Bn{constructor(){super(...arguments),this.id=OE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const _E={animation:{Feature:NE},exit:{Feature:DE}};function _o(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function qo(e){return{point:{x:e.pageX,y:e.pageY}}}const zE=e=>t=>Dd(t)&&e(t,qo(t));function so(e,t,n,r){return _o(e,t,zE(n),r)}const Am=(e,t)=>Math.abs(e-t);function FE(e,t){const n=Am(e.x,t.x),r=Am(e.y,t.y);return Math.sqrt(n**2+r**2)}class yx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=au(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,m=FE(f.offset,{x:0,y:0})>=3;if(!d&&!m)return;const{point:y}=f,{timestamp:x}=Se;this.history.push({...y,timestamp:x});const{onStart:k,onMove:p}=this.handlers;d||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=su(d,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=au(f.type==="pointercancel"?this.lastMoveEventInfo:su(d,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,k),y&&y(f,k)},!Dd(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=qo(t),a=su(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Se;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,au(a,this.history)),this.removeListeners=Qo(so(this.contextWindow,"pointermove",this.handlePointerMove),so(this.contextWindow,"pointerup",this.handlePointerUp),so(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Et(this.updatePoint)}}function su(e,t){return t?{point:t(e.point)}:e}function Rm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function au({point:e},t){return{point:e,delta:Rm(e,xx(t)),offset:Rm(e,$E(t)),velocity:VE(t,.1)}}function $E(e){return e[0]}function xx(e){return e[e.length-1]}function VE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=xx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Qt(t)));)n--;if(!r)return{x:0,y:0};const o=qt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const wx=1e-4,BE=1-wx,UE=1+wx,Sx=.01,WE=0-Sx,HE=0+Sx;function nt(e){return e.max-e.min}function YE(e,t,n){return Math.abs(e-t)<=n}function jm(e,t,n,r=.5){e.origin=r,e.originPoint=oe(t.min,t.max,e.origin),e.scale=nt(n)/nt(t),e.translate=oe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=BE&&e.scale<=UE||isNaN(e.scale))&&(e.scale=1),(e.translate>=WE&&e.translate<=HE||isNaN(e.translate))&&(e.translate=0)}function ao(e,t,n,r){jm(e.x,t.x,n.x,r?r.originX:void 0),jm(e.y,t.y,n.y,r?r.originY:void 0)}function Mm(e,t,n){e.min=n.min+t.min,e.max=e.min+nt(t)}function GE(e,t,n){Mm(e.x,t.x,n.x),Mm(e.y,t.y,n.y)}function Im(e,t,n){e.min=t.min-n.min,e.max=e.min+nt(t)}function lo(e,t,n){Im(e.x,t.x,n.x),Im(e.y,t.y,n.y)}function KE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?oe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?oe(n,e,r.max):Math.min(e,n)),e}function Lm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function XE(e,{top:t,left:n,bottom:r,right:i}){return{x:Lm(e.x,n,i),y:Lm(e.y,t,r)}}function Nm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function QE(e,t){return{x:Nm(e.x,t.x),y:Nm(e.y,t.y)}}function qE(e,t){let n=.5;const r=nt(e),i=nt(t);return i>r?n=xr(t.min,t.max-r,e.min):r>i&&(n=xr(e.min,e.max-i,t.min)),Bt(0,1,n)}function ZE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Gc=.35;function JE(e=Gc){return e===!1?e=0:e===!0&&(e=Gc),{x:Om(e,"left","right"),y:Om(e,"top","bottom")}}function Om(e,t,n){return{min:Dm(e,t),max:Dm(e,n)}}function Dm(e,t){return typeof e=="number"?e:e[t]||0}const _m=()=>({translate:0,scale:1,origin:0,originPoint:0}),Br=()=>({x:_m(),y:_m()}),zm=()=>({min:0,max:0}),fe=()=>({x:zm(),y:zm()});function ut(e){return[e("x"),e("y")]}function kx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function e5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function t5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function lu(e){return e===void 0||e===1}function Kc({scale:e,scaleX:t,scaleY:n}){return!lu(e)||!lu(t)||!lu(n)}function Qn(e){return Kc(e)||Cx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Cx(e){return Fm(e.x)||Fm(e.y)}function Fm(e){return e&&e!=="0%"}function Ra(e,t,n){const r=e-n,i=t*r;return n+i}function $m(e,t,n,r,i){return i!==void 0&&(e=Ra(e,i,r)),Ra(e,n,r)+t}function Xc(e,t=0,n=1,r,i){e.min=$m(e.min,t,n,r,i),e.max=$m(e.max,t,n,r,i)}function bx(e,{x:t,y:n}){Xc(e.x,t.translate,t.scale,t.originPoint),Xc(e.y,n.translate,n.scale,n.originPoint)}const Vm=.999999999999,Bm=1.0000000000001;function n5(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Wr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,bx(e,s)),r&&Qn(o.latestValues)&&Wr(e,o.latestValues))}t.x<Bm&&t.x>Vm&&(t.x=1),t.y<Bm&&t.y>Vm&&(t.y=1)}function Ur(e,t){e.min=e.min+t,e.max=e.max+t}function Um(e,t,n,r,i=.5){const o=oe(e.min,e.max,i);Xc(e,t,n,o,r)}function Wr(e,t){Um(e.x,t.x,t.scaleX,t.scale,t.originX),Um(e.y,t.y,t.scaleY,t.scale,t.originY)}function Px(e,t){return kx(t5(e.getBoundingClientRect(),t))}function r5(e,t,n){const r=Px(e,n),{scroll:i}=t;return i&&(Ur(r.x,i.offset.x),Ur(r.y,i.offset.y)),r}const Tx=({current:e})=>e?e.ownerDocument.defaultView:null,i5=new WeakMap;class o5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(qo(c).point)},o=(c,f)=>{const{drag:d,dragPropagation:m,onDragStart:y}=this.getProps();if(d&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ZP(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ut(k=>{let p=this.getAxisMotionValue(k).get()||0;if(Ft.test(p)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[k];g&&(p=nt(g)*(parseFloat(p)/100))}}this.originPoint[k]=p}),y&&W.postRender(()=>y(c,f)),Fc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,f)=>{const{dragPropagation:d,dragDirectionLock:m,onDirectionLock:y,onDrag:x}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:k}=f;if(m&&this.currentDirection===null){this.currentDirection=s5(k),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),x&&x(c,f)},a=(c,f)=>this.stop(c,f),l=()=>ut(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new yx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Tx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&W.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ks(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=KE(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&$r(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=XE(i.layoutBox,n):this.constraints=!1,this.elastic=JE(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ut(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=ZE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!$r(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=r5(r,i.root,this.visualElement.getTransformPagePoint());let s=QE(i.layout.layoutBox,o);if(n){const a=n(e5(s));this.hasMutatedConstraints=!!a,a&&(s=kx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ut(c=>{if(!ks(c,n,this.currentDirection))return;let f=l&&l[c]||{};s&&(f={min:0,max:0});const d=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Fc(this.visualElement,t),r.start(Xd(t,r,0,n,this.visualElement,!1))}stopAnimation(){ut(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ut(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ut(n=>{const{drag:r}=this.getProps();if(!ks(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-oe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!$r(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ut(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=qE({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ut(s=>{if(!ks(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(oe(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;i5.set(this.visualElement,this);const t=this.visualElement.current,n=so(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();$r(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),W.read(r);const s=_o(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ut(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Gc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function ks(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function s5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class a5 extends Bn{constructor(t){super(t),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new o5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const Wm=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class l5 extends Bn{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(t){this.session=new yx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Tx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Wm(t),onStart:Wm(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&W.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=so(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ws={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Li={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Hm(e,t.target.x),r=Hm(e,t.target.y);return`${n}% ${r}%`}},u5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=zn.parse(e);if(i.length>5)return r;const o=zn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=oe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class c5 extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;LP(f5),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ws.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||W.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),kd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ex(e){const[t,n]=u1(),r=w.useContext(gd);return v.jsx(c5,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(g1),isPresent:t,safeToRemove:n})}const f5={borderRadius:{...Li,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Li,borderTopRightRadius:Li,borderBottomLeftRadius:Li,borderBottomRightRadius:Li,boxShadow:u5};function d5(e,t,n){const r=be(e)?e:Dt(e);return r.start(Xd("",r,t,n)),r.animation}function h5(e){return e instanceof SVGElement&&e.tagName!=="svg"}const p5=(e,t)=>e.depth-t.depth;class m5{constructor(){this.children=[],this.isDirty=!1}add(t){_d(this.children,t),this.isDirty=!0}remove(t){zd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(p5),this.isDirty=!1,this.children.forEach(t)}}function g5(e,t){const n=$t.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Et(r),e(o-t))};return W.read(r,!0),()=>Et(r)}const Ax=["TopLeft","TopRight","BottomLeft","BottomRight"],v5=Ax.length,Ym=e=>typeof e=="string"?parseFloat(e):e,Gm=e=>typeof e=="number"||z.test(e);function y5(e,t,n,r,i,o){i?(e.opacity=oe(0,n.opacity!==void 0?n.opacity:1,x5(r)),e.opacityExit=oe(t.opacity!==void 0?t.opacity:1,0,w5(r))):o&&(e.opacity=oe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<v5;s++){const a=`border${Ax[s]}Radius`;let l=Km(t,a),u=Km(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gm(l)===Gm(u)?(e[a]=Math.max(oe(Ym(l),Ym(u),r),0),(Ft.test(u)||Ft.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=oe(t.rotate||0,n.rotate||0,r))}function Km(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const x5=Rx(0,.5,Y1),w5=Rx(.5,.95,ze);function Rx(e,t,n){return r=>r<e?0:r>t?1:n(xr(e,t,r))}function Xm(e,t){e.min=t.min,e.max=t.max}function lt(e,t){Xm(e.x,t.x),Xm(e.y,t.y)}function Qm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function qm(e,t,n,r,i){return e-=t,e=Ra(e,1/n,r),i!==void 0&&(e=Ra(e,1/i,r)),e}function S5(e,t=0,n=1,r=.5,i,o=e,s=e){if(Ft.test(t)&&(t=parseFloat(t),t=oe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=oe(o.min,o.max,r);e===o&&(a-=t),e.min=qm(e.min,t,n,a,i),e.max=qm(e.max,t,n,a,i)}function Zm(e,t,[n,r,i],o,s){S5(e,t[n],t[r],t[i],t.scale,o,s)}const k5=["x","scaleX","originX"],C5=["y","scaleY","originY"];function Jm(e,t,n,r){Zm(e.x,t,k5,n?n.x:void 0,r?r.x:void 0),Zm(e.y,t,C5,n?n.y:void 0,r?r.y:void 0)}function eg(e){return e.translate===0&&e.scale===1}function jx(e){return eg(e.x)&&eg(e.y)}function tg(e,t){return e.min===t.min&&e.max===t.max}function b5(e,t){return tg(e.x,t.x)&&tg(e.y,t.y)}function ng(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Mx(e,t){return ng(e.x,t.x)&&ng(e.y,t.y)}function rg(e){return nt(e.x)/nt(e.y)}function ig(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class P5{constructor(){this.members=[]}add(t){_d(this.members,t),t.scheduleRender()}remove(t){if(zd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function T5(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:m,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),f&&(r+=`rotateX(${f}deg) `),d&&(r+=`rotateY(${d}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const qn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wi=typeof window<"u"&&window.MotionDebug!==void 0,uu=["","X","Y","Z"],E5={visibility:"hidden"},og=1e3;let A5=0;function cu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ix(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=F1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ix(r)}function Lx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=A5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wi&&(qn.totalNodes=qn.resolvedTargetDeltas=qn.recalculatedProjection=0),this.nodes.forEach(M5),this.nodes.forEach(D5),this.nodes.forEach(_5),this.nodes.forEach(I5),Wi&&window.MotionDebug.record(qn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new m5)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Fd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=h5(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const d=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=g5(d,250),Ws.hasAnimatedSinceResize&&(Ws.hasAnimatedSinceResize=!1,this.nodes.forEach(ag))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||B5,{onLayoutAnimationStart:k,onLayoutAnimationComplete:p}=c.getProps(),h=!this.targetLayout||!Mx(this.targetLayout,y),g=!d&&m;if(this.options.layoutRoot||this.resumeFrom||g||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const C={...Ld(x,"layout"),onPlay:k,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else d||ag(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Et(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(z5),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ix(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(sg);return}this.isUpdating||this.nodes.forEach(N5),this.isUpdating=!1,this.nodes.forEach(O5),this.nodes.forEach(R5),this.nodes.forEach(j5),this.clearAllSnapshots();const a=$t.now();Se.delta=Bt(0,1e3/60,a-Se.timestamp),Se.timestamp=a,Se.isProcessing=!0,eu.update.process(Se),eu.preRender.process(Se),eu.render.process(Se),Se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(L5),this.sharedNodes.forEach(F5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!jx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Qn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),U5(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return fe();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(W5))){const{scroll:c}=this.root;c&&(Ur(l.x,c.offset.x),Ur(l.y,c.offset.y))}return l}removeElementScroll(s){var a;const l=fe();if(lt(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&lt(l,s),Ur(l.x,f.offset.x),Ur(l.y,f.offset.y))}return l}applyTransform(s,a=!1){const l=fe();lt(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Wr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Qn(c.latestValues)&&Wr(l,c.latestValues)}return Qn(this.latestValues)&&Wr(l,this.latestValues),l}removeTransform(s){const a=fe();lt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Qn(u.latestValues))continue;Kc(u.latestValues)&&u.updateSnapshot();const c=fe(),f=u.measurePageBox();lt(c,f),Jm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Qn(this.latestValues)&&Jm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Se.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),lo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=fe(),this.targetWithTransforms=fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),GE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):lt(this.target,this.layout.layoutBox),bx(this.target,this.targetDelta)):lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),lo(this.relativeTargetOrigin,this.target,m.target),lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wi&&qn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Kc(this.parent.latestValues)||Cx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Se.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;lt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,m=this.treeScale.y;n5(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=fe());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qm(this.prevProjectionDelta.x,this.projectionDelta.x),Qm(this.prevProjectionDelta.y,this.projectionDelta.y)),ao(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==m||!ig(this.projectionDelta.x,this.prevProjectionDelta.x)||!ig(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Wi&&qn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Br(),this.projectionDelta=Br(),this.projectionDeltaWithTransform=Br()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=fe(),m=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=m!==y,k=this.getStack(),p=!k||k.members.length<=1,h=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(V5));this.animationProgress=0;let g;this.mixTargetDelta=C=>{const S=C/1e3;lg(f.x,s.x,S),lg(f.y,s.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$5(this.relativeTarget,this.relativeTargetOrigin,d,S),g&&b5(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=fe()),lt(g,this.relativeTarget)),x&&(this.animationValues=c,y5(c,u,this.latestValues,S,h,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Et(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{Ws.hasAnimatedSinceResize=!0,this.currentAnimation=d5(0,og,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(og),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&Nx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||fe();const f=nt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const d=nt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+d}lt(a,l),Wr(a,c),ao(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new P5),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&cu("z",s,u,this.animationValues);for(let c=0;c<uu.length;c++)cu(`rotate${uu[c]}`,s,u,this.animationValues),cu(`skew${uu[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return E5;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Bs(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Bs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Qn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=T5(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in Oo){if(d[x]===void 0)continue;const{correct:k,applyTo:p,isCSSVariable:h}=Oo[x],g=u.transform==="none"?d[x]:k(d[x],f);if(p){const C=p.length;for(let S=0;S<C;S++)u[p[S]]=g}else h?this.options.visualElement.renderState.vars[x]=g:u[x]=g}return this.options.layoutId&&(u.pointerEvents=f===this?Bs(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(sg),this.root.sharedNodes.clear()}}}function R5(e){e.updateLayout()}function j5(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?ut(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],m=nt(d);d.min=r[f].min,d.max=d.min+m}):Nx(o,n.layoutBox,r)&&ut(f=>{const d=s?n.measuredBox[f]:n.layoutBox[f],m=nt(r[f]);d.max=d.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const a=Br();ao(a,r,n.layoutBox);const l=Br();s?ao(l,e.applyTransform(i,!0),n.measuredBox):ao(l,r,n.layoutBox);const u=!jx(a);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:m}=f;if(d&&m){const y=fe();lo(y,n.layoutBox,d.layoutBox);const x=fe();lo(x,r,m.layoutBox),Mx(y,x)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function M5(e){Wi&&qn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function I5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function L5(e){e.clearSnapshot()}function sg(e){e.clearMeasurements()}function N5(e){e.isLayoutDirty=!1}function O5(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ag(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function D5(e){e.resolveTargetDelta()}function _5(e){e.calcProjection()}function z5(e){e.resetSkewAndRotation()}function F5(e){e.removeLeadSnapshot()}function lg(e,t,n){e.translate=oe(t.translate,0,n),e.scale=oe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ug(e,t,n,r){e.min=oe(t.min,n.min,r),e.max=oe(t.max,n.max,r)}function $5(e,t,n,r){ug(e.x,t.x,n.x,r),ug(e.y,t.y,n.y,r)}function V5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const B5={duration:.45,ease:[.4,0,.1,1]},cg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),fg=cg("applewebkit/")&&!cg("chrome/")?Math.round:ze;function dg(e){e.min=fg(e.min),e.max=fg(e.max)}function U5(e){dg(e.x),dg(e.y)}function Nx(e,t,n){return e==="position"||e==="preserve-aspect"&&!YE(rg(t),rg(n),.2)}function W5(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const H5=Lx({attachResizeListener:(e,t)=>_o(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fu={current:void 0},Ox=Lx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fu.current){const e=new H5({});e.mount(window),e.setOptions({layoutScroll:!0}),fu.current=e}return fu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Y5={pan:{Feature:l5},drag:{Feature:a5,ProjectionNode:Ox,MeasureLayout:Ex}};function hg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&W.postRender(()=>o(t,qo(t)))}class G5 extends Bn{mount(){const{current:t}=this.node;t&&(this.unmount=GP(t,(n,r)=>(hg(this.node,r,"Start"),i=>hg(this.node,i,"End"))))}unmount(){}}class K5 extends Bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qo(_o(this.node.current,"focus",()=>this.onFocus()),_o(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function pg(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&W.postRender(()=>o(t,qo(t)))}class X5 extends Bn{mount(){const{current:t}=this.node;t&&(this.unmount=qP(t,(n,r)=>(pg(this.node,r,"Start"),(i,{success:o})=>pg(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qc=new WeakMap,du=new WeakMap,Q5=e=>{const t=Qc.get(e.target);t&&t(e)},q5=e=>{e.forEach(Q5)};function Z5({root:e,...t}){const n=e||document;du.has(n)||du.set(n,{});const r=du.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(q5,{root:e,...t})),r[i]}function J5(e,t,n){const r=Z5(t);return Qc.set(e,n),r.observe(e),()=>{Qc.delete(e),r.unobserve(e)}}const e4={some:0,all:1};class t4 extends Bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:e4[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return J5(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(n4(t,n))&&this.startObserver()}unmount(){}}function n4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const r4={inView:{Feature:t4},tap:{Feature:X5},focus:{Feature:K5},hover:{Feature:G5}},i4={layout:{ProjectionNode:Ox,MeasureLayout:Ex}},qc={current:null},Dx={current:!1};function o4(){if(Dx.current=!0,!!vd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>qc.current=e.matches;e.addListener(t),t()}else qc.current=!1}const s4=[...sx,Ie,zn],a4=e=>s4.find(ox(e)),mg=new WeakMap;function l4(e,t,n){for(const r in t){const i=t[r],o=n[r];if(be(i))e.addValue(r,i);else if(be(o))e.addValue(r,Dt(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Dt(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const gg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class u4{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Yd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=$t.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,W.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=s;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=dl(n),this.isVariantNode=p1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in d){const y=d[m];l[m]!==void 0&&be(y)&&y.set(l[m],!1)}}mount(t){this.current=t,mg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Dx.current||o4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){mg.delete(this.current),this.projection&&this.projection.unmount(),Et(this.notifyUpdate),Et(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=kr.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in di){const n=di[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<gg.length;r++){const i=gg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=l4(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Dt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(rx(i)||K1(i))?i=parseFloat(i):!a4(i)&&zn.test(n)&&(i=ex(t,n)),this.setBaseTarget(t,be(i)?i.get():i)),be(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=bd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!be(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Fd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class _x extends u4{constructor(){super(...arguments),this.KeyframeResolver=ax}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;be(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function c4(e){return window.getComputedStyle(e)}class f4 extends _x{constructor(){super(...arguments),this.type="html",this.renderInstance=k1}readValueFromInstance(t,n){if(kr.has(n)){const r=Hd(n);return r&&r.default||0}else{const r=c4(t),i=(Pd(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Px(t,n)}build(t,n,r){Ad(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Id(t,n,r)}}class d4 extends _x{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(kr.has(n)){const r=Hd(n);return r&&r.default||0}return n=C1.has(n)?n:Sd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return T1(t,n,r)}build(t,n,r){Rd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){b1(t,n,r,i)}mount(t){this.isSVGTag=Md(t.tagName),super.mount(t)}}const h4=(e,t)=>Cd(e)?new d4(t):new f4(t,{allowProjection:e!==w.Fragment}),p4=BP({..._E,...r4,...Y5,...i4},h4),Fe=rP(p4);function m4(e,t,n){w.useInsertionEffect(()=>e.on(t,n),[e,t,n])}function zx(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return W.update(r,!0),()=>Et(r)}const Hs=new WeakMap;let gn;function g4(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function v4({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Hs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return g4(e,n)}})})}function y4(e){e.forEach(v4)}function x4(){typeof ResizeObserver>"u"||(gn=new ResizeObserver(y4))}function w4(e,t){gn||x4();const n=O1(e);return n.forEach(r=>{let i=Hs.get(r);i||(i=new Set,Hs.set(r,i)),i.add(t),gn==null||gn.observe(r)}),()=>{n.forEach(r=>{const i=Hs.get(r);i==null||i.delete(t),i!=null&&i.size||gn==null||gn.unobserve(r)})}}const Ys=new Set;let uo;function S4(){uo=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Ys.forEach(n=>n(t))},window.addEventListener("resize",uo)}function k4(e){return Ys.add(e),uo||S4(),()=>{Ys.delete(e),!Ys.size&&uo&&(uo=void 0)}}function C4(e,t){return typeof e=="function"?k4(e):w4(e,t)}const b4=50,vg=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),P4=()=>({time:0,x:vg(),y:vg()}),T4={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function yg(e,t,n,r){const i=n[t],{length:o,position:s}=T4[t],a=i.current,l=n.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=xr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>b4?0:$d(i.current-a,u)}function E4(e,t,n){yg(e,"x",t,n),yg(e,"y",t,n),t.time=n}function A4(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const Zc={start:0,center:.5,end:1};function xg(e,t,n=0){let r=0;if(e in Zc&&(e=Zc[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const R4=[0,0];function j4(e,t,n,r){let i=Array.isArray(e)?e:R4,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Zc[e]?e:"0"]),o=xg(i[0],n,r),s=xg(i[1],t),o-s}const M4={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},I4={x:0,y:0};function L4(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function N4(e,t,n){const{offset:r=M4.All}=n,{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?A4(i,e):I4,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:L4(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const f=r.length;for(let d=0;d<f;d++){const m=j4(r[d],u[s],l[s],a[o]);!c&&m!==t[o].interpolatorOffsets[d]&&(c=!0),t[o].offset[d]=m}c&&(t[o].interpolate=Kd(t[o].offset,px(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=Bt(0,1,t[o].interpolate(t[o].current))}function O4(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function D4(e,t,n,r={}){return{measure:()=>O4(e,r.target,n),update:i=>{E4(e,n,i),(r.offset||r.target)&&N4(e,n,r)},notify:()=>t(n)}}const Ni=new WeakMap,wg=new WeakMap,hu=new WeakMap,Sg=e=>e===document.documentElement?window:e;function Qd(e,{container:t=document.documentElement,...n}={}){let r=hu.get(t);r||(r=new Set,hu.set(t,r));const i=P4(),o=D4(t,e,i,n);if(r.add(o),!Ni.has(t)){const a=()=>{for(const d of r)d.measure()},l=()=>{for(const d of r)d.update(Se.timestamp)},u=()=>{for(const d of r)d.notify()},c=()=>{W.read(a,!1,!0),W.read(l,!1,!0),W.update(u,!1,!0)};Ni.set(t,c);const f=Sg(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&wg.set(t,C4(t,c)),f.addEventListener("scroll",c,{passive:!0})}const s=Ni.get(t);return W.read(s,!1,!0),()=>{var a;Et(s);const l=hu.get(t);if(!l||(l.delete(o),l.size))return;const u=Ni.get(t);Ni.delete(t),u&&(Sg(t).removeEventListener("scroll",u),(a=wg.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function _4({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Qd(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const pu=new Map;function Fx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),pu.has(t)||pu.set(t,{});const r=pu.get(t);return r[n]||(r[n]=R1()?new ScrollTimeline({source:t,axis:n}):_4({source:t,axis:n})),r[n]}function z4(e){return e.length===2}function $x(e){return e&&(e.target||e.offset)}function F4(e,t){return z4(e)||$x(t)?Qd(n=>{e(n[t.axis].progress,n)},t):zx(e,Fx(t))}function $4(e,t){if(e.flatten(),$x(t))return e.pause(),Qd(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Fx(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),zx(i=>{r.time=r.duration*i},n))):ze}}function V4(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?F4(e,r):$4(e,r)}function kg(e,t){Xb(!!(!t||t.current))}const B4=()=>({scrollX:Dt(0),scrollY:Dt(0),scrollXProgress:Dt(0),scrollYProgress:Dt(0)});function Cg({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Si(B4);return(n?Go:w.useEffect)(()=>(kg("target",t),kg("container",e),V4((s,{x:a,y:l})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function Vx(e){const t=Si(()=>Dt(e)),{isStatic:n}=w.useContext(Yo);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}function Bx(e,t){const n=Vx(t()),r=()=>n.set(t());return r(),Go(()=>{const i=()=>W.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Et(r)}}),n}function bg(e){return typeof e=="number"?e:parseFloat(e)}function Jc(e,t={}){const{isStatic:n}=w.useContext(Yo),r=w.useRef(null),i=Vx(be(e)?bg(e.get()):e),o=w.useRef(i.get()),s=w.useRef(()=>{}),a=()=>{l(),r.current=cE({keyframes:[i.get(),o.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:s.current})},l=()=>{r.current&&r.current.stop()};return w.useInsertionEffect(()=>i.attach((u,c)=>n?c(u):(o.current=u,s.current=c,W.postRender(a),i.get()),l),[JSON.stringify(t)]),Go(()=>{if(be(e))return e.on("change",u=>i.set(bg(u)))},[i]),i}const U4=e=>e&&typeof e=="object"&&e.mix,W4=e=>U4(e)?e.mix:void 0;function H4(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Kd(i,o,{mixer:W4(o[0]),...s});return t?a(r):a}function Y4(e){io.current=[],e();const t=Bx(io.current,e);return io.current=void 0,t}function Hi(e,t,n,r){if(typeof e=="function")return Y4(e);const i=typeof t=="function"?t:H4(t,n,r);return Array.isArray(e)?Pg(e,i):Pg([e],([o])=>i(o))}function Pg(e,t){const n=Si(()=>[]);return Bx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function G4({setCursorHoverColor:e,setIsHoveringCards:t}){const{card:n}=At(),r={offscreen:{x:100,opacity:0},onscreen:i=>({x:0,opacity:1,transition:{type:"spring",bounce:.4,delay:i*.1}})};return v.jsx(ll,{children:v.jsx(K4,{children:v.jsx(X4,{children:n.map((i,o)=>v.jsx(Q4,{variants:r,initial:"offscreen",animate:"onscreen",custom:o,children:v.jsx(jb,{id:i.id,path:i.path,title:i.title,type:i.type,label:i.label,color:i.color,backgroundColor:i.backgroundColor,image:i.image,setCursorHoverColor:e,setIsHoveringCards:t},i.id)},i.id))})})})}const K4=A.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 90vw;
        margin: 3em 0 0 4em;
    }
    `,X4=A.div`
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
`,Q4=A(Fe.div)`
    display: flex;
    width: 15vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;function q4({setCursorHoverColor:e,setIsHoveringCards:t}){const[n,r]=w.useState(""),i=w.useRef(null),o=["--dark: #1b1f2e","--greenish: #497770","--yellowish: #f5ca80","--ocean: #00a6a6","--redish: #eeb7b7","--creamy: #f3b88474","--blueish: #12398d","--neon-green: #0ac753","--light-purple: #564d8d","--silver-light: #f7f7f7e8","--test: #c2b8f5","--more-red: #eb7d7d"].map(l=>l.split(": ")[1]),s=()=>o[Math.floor(Math.random()*o.length)],a="Emil Stjernlöf";return w.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&console.log("AboutMe section is in view")},{root:null,rootMargin:"0px",threshold:.1});return i.current&&l.observe(i.current),()=>{i.current&&l.unobserve(i.current)}},[]),v.jsx(v.Fragment,{children:v.jsx(e6,{style:{fontFamily:"Poiret One"},children:v.jsxs(t6,{children:[v.jsx(n6,{initial:{x:"10%",opacity:0},animate:{x:"0%",opacity:1},transition:{duration:.75,ease:"easeOut"},exit:{opacity:1},children:v.jsx(r6,{children:a.split("").map((l,u)=>l===" "?v.jsx("span",{children:" "},u):v.jsx(i6,{hovercolor:n,onMouseEnter:()=>r(s()),children:l},u))})}),v.jsx(G4,{setCursorHoverColor:e,setIsHoveringCards:t})]})})})}const Z4=le`
0% {
  text-shadow: 0 0 0 var(--dark);
}
100% {
  text-shadow: 0.7vw 0.7vw var(--dark);
}
`,J4=le`
  0% {
    text-shadow: 0.7vw 0.7vw var(--dark);
  }
  100% {
    text-shadow: 0 0 0 var(--dark);
  }
`,e6=A.div`
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
`,t6=A.section`
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
`,n6=A(Fe.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;
  margin-top: 8vh;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
`,r6=A.h1`
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark);

  @media (max-width: 768px) and (min-width: 320px) {
    margin-top: 2.5em;
  }
`,i6=A.span`
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
      animation: ${Z4} 0.5s forwards;

      .hovered {
        color: white;
      }
    }

    &:not(:hover) {
      animation: ${J4} 0.8s forwards;
    }
  }
`;var o6="1.1.16";function Ux(e,t,n){return Math.max(e,Math.min(t,n))}function s6(e,t,n){return(1-n)*e+n*t}function a6(e,t,n,r){return s6(e,t,1-Math.exp(-n*r))}function l6(e,t){return(e%t+t)%t}var u6=class{constructor(){_(this,"isRunning",!1);_(this,"value",0);_(this,"from",0);_(this,"to",0);_(this,"currentTime",0);_(this,"lerp");_(this,"duration");_(this,"easing");_(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Ux(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=a6(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function c6(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var f6=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){_(this,"width",0);_(this,"height",0);_(this,"scrollHeight",0);_(this,"scrollWidth",0);_(this,"debouncedResize");_(this,"wrapperResizeObserver");_(this,"contentResizeObserver");_(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});_(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});_(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=c6(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wx=class{constructor(){_(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},Tg=100/6,dn={passive:!1},d6=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){_(this,"touchStart",{x:0,y:0});_(this,"lastDelta",{x:0,y:0});_(this,"window",{width:0,height:0});_(this,"emitter",new Wx);_(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});_(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});_(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});_(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?Tg:r===2?this.window.width:1,o=r===1?Tg:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});_(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,dn),this.element.addEventListener("touchstart",this.onTouchStart,dn),this.element.addEventListener("touchmove",this.onTouchMove,dn),this.element.addEventListener("touchend",this.onTouchEnd,dn)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,dn),this.element.removeEventListener("touchstart",this.onTouchStart,dn),this.element.removeEventListener("touchmove",this.onTouchMove,dn),this.element.removeEventListener("touchend",this.onTouchEnd,dn)}},qd=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:s=35,duration:a,easing:l=S=>Math.min(1,1.001-Math.pow(2,-10*S)),lerp:u=.1,infinite:c=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:m=1,wheelMultiplier:y=1,autoResize:x=!0,prevent:k,virtualScroll:p,overscroll:h=!0,autoRaf:g=!1,__experimental__naiveDimensions:C=!1}={}){_(this,"_isScrolling",!1);_(this,"_isStopped",!1);_(this,"_isLocked",!1);_(this,"_preventNextNativeScrollEvent",!1);_(this,"_resetVelocityTimeout",null);_(this,"__rafID",null);_(this,"isTouching");_(this,"time",0);_(this,"userData",{});_(this,"lastVelocity",0);_(this,"velocity",0);_(this,"direction",0);_(this,"options");_(this,"targetScroll");_(this,"animatedScroll");_(this,"animate",new u6);_(this,"emitter",new Wx);_(this,"dimensions");_(this,"virtualScroll");_(this,"onPointerDown",e=>{e.button===1&&this.reset()});_(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");if(this.isTouching=r.type==="touchstart"||r.type==="touchmove",this.options.syncTouch&&i&&r.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const a=t===0&&n===0,l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let u=r.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const c=this.options.prevent;if(u.find(k=>{var p,h,g;return k instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(k))||((p=k.hasAttribute)==null?void 0:p.call(k,"data-lenis-prevent"))||i&&((h=k.hasAttribute)==null?void 0:h.call(k,"data-lenis-prevent-touch"))||o&&((g=k.hasAttribute)==null?void 0:g.call(k,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.preventDefault();const m=i&&this.options.syncTouch,x=i&&r.type==="touchend"&&Math.abs(d)>5;x&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...m?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});_(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});_(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=o6,(!e||e===document.documentElement||e===document.body)&&(e=window),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaMultiplier:s,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:d,orientation:f,touchMultiplier:m,wheelMultiplier:y,autoResize:x,prevent:k,virtualScroll:p,overscroll:h,autoRaf:g,__experimental__naiveDimensions:C},this.dimensions=new f6(e,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new d6(n,{touchMultiplier:m,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,duration:i=this.options.duration,easing:o=this.options.easing,lerp:s=this.options.lerp,onStart:a,onComplete:l,force:u=!1,programmatic:c=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof e=="string"&&["top","left","start"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(d=e),d){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?y.left:y.top}const m=d.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=Ux(0,e,this.limit),e===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}c||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:i,easing:o,lerp:s,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),c&&(this.targetScroll=d),m||this.emit(),m&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?l6(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Hx=w.createContext(),Yx=({children:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(""),o=s=>{n(!0),i(s)};return w.useEffect(()=>{if(t){const s=setTimeout(()=>{n(!1)},800);return()=>clearTimeout(s)}},[t]),v.jsx(Hx.Provider,{value:{runTransition:t,setRunTransition:n,transitionDirection:r,setTransitionDirection:i,triggerTransition:o},children:e})},bi=()=>w.useContext(Hx),et=({width:e,border:t,onClick:n,color:r,padding:i,backgroundColor:o,invertedColors:s,small:a,label:l,previous:u,next:c,cleaning:f,showCopyAlert:d,copyMessage:m,showViewSwitch:y})=>v.jsxs(h6,{children:[v.jsx(v6,{onClick:n,color:r,backgroundColor:o,padding:i,cleaning:f,width:e,border:t,invertedColors:s,small:a,showViewSwitch:y,children:u||c?v.jsxs(v.Fragment,{children:[u&&v.jsxs(v.Fragment,{children:[v.jsx(ja,{color:r,backgroundColor:o,invertedColors:s,icon:Ub})," ",l]}),c&&v.jsxs(v.Fragment,{children:[l," ",v.jsx(ja,{color:r,backgroundColor:o,invertedColors:s,icon:Bb})]})]}):l}),d&&m&&v.jsx(y6,{color:r,backgroundColor:o,className:"clicked",children:m})]});et.propTypes={width:I.string,border:I.bool,onClick:I.func,color:I.string,backgroundColor:I.string,invertedColors:I.bool,shadowColor:I.string,label:I.node,previous:I.bool,next:I.bool,cleaning:I.bool,showCopyAlert:I.bool,copyMessage:I.string};const h6=A.div`
  position: relative;
  display: inline-flex;
`,Eg=()=>le`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
`,Ag=()=>le`
  0% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
`,p6=le`
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
`,m6=le`
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
`,g6=le`
  0% {
    left: -100%;
    opacity: 1;
  }
  100% {
    left: 200%;
    opacity: 1;
  }
  `,ja=A(Oe)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5em;
  height: 0.5em;
  font-size: 1.5em;
  color: ${e=>e.invertedColors?e.backgroundColor:e.color||"var(--dark)"};
`,v6=A.button`
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

      ${ja} {
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

      ${ja} {
        color: ${e=>e.invertedColors?e.color:e.backgroundColor||"var(--dark)"};
      }
    }
  }
`,y6=A.div`
  position: absolute;
  left: 6vw;
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
  background-color: ${e=>e.color};
  color: ${e=>e.backgroundColor};
  transform: translateX(-50%);
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  overflow: hidden;

  &.clicked {
    animation: ${p6} 2s forwards;

    @media (max-width: 768px) and (min-width: 320px) {
      animation: ${m6} 1.5s forwards;
      width: 80px;
      height: 25px;
      padding: 4px;
      left: 100%;
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
      animation: ${g6} 0.5s ease-in-out;
      animation-delay: 0.3s;
    }
  }
`;function x6({title:e,shadowColor:t}){const{card:n}=At(),r=qa(),{setRunTransition:i,triggerTransition:o}=bi(),s=window.location.pathname.replace("/My-portfolio/","").replace("/",""),a=n.find(m=>m.path===s)||n[0],l=n.findIndex(m=>m.path===s),u=a.color,c=a.backgroundColor,f=()=>{i(!0),o("previous");const m=(l-1+n.length)%n.length,y=n[m].path,x=setTimeout(()=>{i(!1),r(`/${y}`)},800);return()=>{clearTimeout(x)}},d=()=>{i(!0),o("next");const m=(l+1)%n.length,y=n[m].path,x=setTimeout(()=>{i(!1),r(`/${y}`)},800);return()=>{clearTimeout(x)}};return v.jsxs(w6,{children:[v.jsx(Rg,{className:"navigation-buttons",style:{marginRight:"3em"},children:v.jsx(et,{onClick:f,style:{color:u},color:u,shadowColor:t,backgroundColor:c,label:"Previous Project",previous:!0,width:"10em"})}),v.jsx(S6,{children:e}),v.jsx(Rg,{className:"navigation-buttons",children:v.jsx(et,{onClick:d,style:{color:u},color:u,shadowColor:t,backgroundColor:c,label:"Next Project",next:!0,width:"10em"})})]})}const w6=A.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  gap: 6em;
  margin-top: 4vh;
  z-index: 99;


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
`,Rg=A.div`
  width: 10em;
`,S6=A.h1`
 font-size: clamp(45px, 5vw, 100px);
 font-family: 'Poiret One';

 @media (max-width: 768px) and (min-width: 320px) {
  margin-top: 1em;
 }


`;Gx.propTypes={descriptions:I.shape({primary:I.string,secondary:I.string,tertiary:I.string,quaternary:I.string}).isRequired,repos:I.array.isRequired,color:I.string.isRequired,backgroundColor:I.string.isRequired,showViewSwitch:I.bool.isRequired,onSwitchView:I.func.isRequired,isSwitchActive:I.bool.isRequired};function Gx({descriptions:e,repos:t,color:n,backgroundColor:r,showViewSwitch:i,onSwitchView:o,isSwitchActive:s}){const a=()=>{if(i){const l=s?t.find(u=>u.browser):t.find(u=>u.native);l&&window.open(s?l.browser:l.native,"_blank")}else window.open(Object.values(t[0])[0],"_blank")};return v.jsxs(k6,{children:[e.primary&&v.jsxs(mu,{children:[e.primary.charAt(0)&&v.jsx("span",{style:{fontSize:"1.25em",fontWeight:"bold"},children:e.primary.charAt(0)}),e.primary.slice(1)]}),e.secondary&&v.jsx(mu,{children:e.secondary}),e.tertiary&&v.jsx(mu,{children:e.tertiary}),v.jsxs(P6,{showViewSwitch:i,children:[v.jsx(C6,{children:v.jsx(b6,{color:n,children:v.jsx(et,{color:n,backgroundColor:r,small:!0,onClick:a,label:v.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5em"},children:v.jsx(T6,{children:t[0].icon})})})})}),i&&v.jsx(E6,{children:v.jsx(A6,{children:v.jsx(et,{onClick:o,color:n,border:!0,pulse:!0,backgroundColor:r,label:s?"Show Native":"Show Browser",invertedColors:!0,showViewSwitch:i})})})]})]})}const k6=A.div`
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
`,mu=A.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1em;
    line-height: 1.5;
  }
`,C6=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 90;
`,b6=A.div`
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
`,P6=A.div`
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
`,T6=A.div`
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
`,E6=A.div`
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
`,A6=A.div`
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
`;function R6({color:e,images:t,scrollProgress:n,isNative:r,doubleRepo:i,isSwitchActive:o}){return v.jsx(M6,{isNative:r,isSwitchActive:o,doubleRepo:i,children:v.jsx(I6,{children:t.map((s,a)=>{const l=a/t.length,u=(a+1)/t.length,c=.1/t.length,f=Hi(n,[l-c,l+c,u-c,u+c],a===0?[1,1,1,.2]:a===t.length-1?[.1,1,1,1]:[.1,1,1,.2]),d=Jc(f,{stiffness:30,damping:12,mass:1.5,restDelta:1e-5});return v.jsx(L6,{as:Fe.div,color:e,style:{opacity:d}},a)})})},o)}const j6=le`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,M6=A.div`
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
  animation: ${j6} 0.5s ease-in-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 1536px) and (min-width: 769px) {
    bottom: 0;
    right: ${e=>e.isNative?"5vw":"4vw"};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`,I6=A.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,L6=A.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${e=>e.color};
  position: relative;
  overflow: hidden;
`,Kx=w.createContext(),N6=({children:e})=>{const[t,n]=w.useState(!1);return v.jsx(Kx.Provider,{value:{isPopoverOpen:t,setIsPopoverOpen:n},children:e})},Xx=()=>{const e=w.useContext(Kx);if(e===void 0)throw new Error("usePopover must be used within a PopoverProvider");return e},O6=({image:e,images:t=[],onClose:n,color:r,backgroundColor:i,invertedColors:o,doubleRepo:s,shadowColor:a,isNative:l})=>{const{setIsPopoverOpen:u}=Xx(),[c,f]=w.useState(t.indexOf(e)),[d,m]=w.useState(0);w.useEffect(()=>{t.indexOf(e)===-1?f(0):f(t.indexOf(e))},[e,t]),w.useEffect(()=>(u(!!e),()=>u(!1)),[e,u]);const y=()=>{m(1),f(h=>(h+1)%t.length)},x=()=>{m(-1),f(h=>(h-1+t.length)%t.length)},k=t[c],p={enter:h=>({x:h>0?300:-300,opacity:0,scale:.98,filter:"blur(4px)"}),center:{zIndex:1,x:0,opacity:1,scale:1,filter:"blur(0px)"},exit:h=>({zIndex:0,x:h<0?300:-300,opacity:0,scale:.98,filter:"blur(4px)"})};return v.jsx(nm,{children:e&&v.jsx(D6,{as:Fe.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n,children:v.jsxs(_6,{isNative:l,as:Fe.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onClick:h=>h.stopPropagation(),children:[v.jsxs($6,{isNative:l,children:[v.jsx(z6,{isNative:l,children:v.jsx(nm,{mode:"wait",custom:d,initial:!1,children:v.jsx(F6,{as:Fe.img,src:k.src,alt:k.alt||"Image",custom:d,variants:p,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:200,damping:18,mass:.4,restSpeed:.5},opacity:{duration:.2,ease:"easeInOut"},scale:{duration:.2,ease:"easeOut"},filter:{duration:.15,ease:"easeOut"}},onClick:n,isNative:l,backgroundColor:i},k.src)})}),v.jsx(V6,{isNative:l,children:v.jsx(et,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:n,label:"X",padding:".7em",border:!0,hasIcon:!0,small:!0})})]}),v.jsxs(B6,{isNative:l,children:[v.jsx(et,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:x,width:"7em",label:"Previous",border:!0,title:!0,hasIcon:!0,previous:!0}),v.jsx(et,{color:r,backgroundColor:i,invertedColors:o,shadowColor:a,onClick:y,label:"Next ",width:"7em",border:!0,title:!0,hasIcon:!0,next:!0})]})]})})})},D6=A(Fe.div)`
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
`,_6=A(Fe.div)`
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
`,z6=A.div`
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
`,F6=A(Fe.img)`
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
`,$6=A.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  position: relative;
`,V6=A.div`
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
`,B6=A.div`
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
`;function ef({images:e=[],backgroundColor:t,color:n,invertedColors:r,isNative:i,doubleRepo:o,isSwitchActive:s,textColor:a}){const l=w.useRef(null),[u,c]=w.useState(0),[f,d]=w.useState(null),[m,y]=w.useState(null),[x,k]=w.useState(!1),{scrollYProgress:p}=Cg({container:l,offset:["start start","end end"]});w.useEffect(()=>{const S=new qd({wrapper:l.current,content:l.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});y(S);function b(P){S.raf(P),requestAnimationFrame(b)}return requestAnimationFrame(b),()=>{S.destroy()}},[]);const h=(S,b)=>{const P=b===0?.1:.3;S>(b===0?.3:.5)?c(b):S<P&&b>0&&c(b-1)};if(!e||e.length===0)return null;const g=S=>{d(S),m==null||m.stop()},C=()=>{d(null),m==null||m.start()};return w.useEffect(()=>{var P;const S=()=>{var T;!x&&((T=l.current)==null?void 0:T.scrollTop)>20&&k(!0)};if(window.innerWidth<=768&&window.innerWidth>=321)return(P=l.current)==null||P.addEventListener("scroll",S),()=>{var T;return(T=l.current)==null?void 0:T.removeEventListener("scroll",S)}},[x]),v.jsxs(U6,{ref:l,isNative:i,doubleRepo:o,children:[window.innerWidth<=768&&window.innerWidth>=321&&!x&&v.jsx(X6,{color:n}),e.map((S,b)=>{const P=w.useRef(null),{scrollYProgress:T}=Cg({target:P,container:l,offset:["start 60%","center center"],default:0}),N=Hi(p||0,[0,1],[1,1-(e.length-b)*.05]),M=Hi(p||0,[0,1],[0,-((e.length-b)*15)]);m4(T,"change",R=>{h(R,b)});const B=Hi(T,[0,.5,1],[0,1,1]),Te=Hi(T,[0,.5,1],[1.5,1,1]),he=Jc(B,{stiffness:100,damping:20}),st=Jc(Te,{stiffness:100,damping:20}),Ut=S.src||S,at=S.alt||`Image ${b+1}`,U=(R,O,D)=>{const G=75/(O-1),K=15+R*G,ee=Math.min(K,90);return`color-mix(in srgb, ${D} ${ee}%, black)`};return v.jsxs(W6,{onClick:()=>g(S),ref:P,isFirst:b===0,isLast:b===e.length-1,isNative:i,textColor:a,style:{backgroundColor:U(b,e.length,r?n:t),color:r?t:n,top:i?`${b*10}px`:`${b*10}px`,marginBottom:b===e.length-1?"40vh":"0",scale:N,y:M},children:[v.jsx(H6,{children:v.jsx(Y6,{children:S.info})}),v.jsx(G6,{isNative:i,children:v.jsx(K6,{src:Ut,alt:at,style:{opacity:he,scale:st}})})]},S.id||b)}),v.jsx(O6,{image:f,images:e,onClose:C,color:n,backgroundColor:t,invertedColors:r,isNative:i,doubleRepo:o}),v.jsx(R6,{color:n,images:e,scrollProgress:p,isNative:i,doubleRepo:o,isSwitchActive:s})]})}const U6=A.div`
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
`,W6=A(Fe.div)`
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

`,H6=A.div`
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
`,Y6=A.p`
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
`,G6=A.div`
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
`,K6=A(Fe.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`,X6=A.div`
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
`,Q6=({nativeImages:e,browserImages:t,backgroundColor:n,color:r,invertedColors:i,doubleRepo:o,isSwitchActive:s})=>{const a={nativeView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:"-100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}}},l={nativeView:{x:"100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},hidden:{x:"100%",opacity:0}};return v.jsx(q6,{children:v.jsxs(Z6,{children:[v.jsx(jg,{variants:a,animate:s?"browserView":"nativeView",initial:"nativeView",children:v.jsx(ef,{images:e,backgroundColor:n,color:r,invertedColors:i,isNative:!0,isSwitchActive:s,doubleRepo:o})}),v.jsx(jg,{variants:l,animate:s?"browserView":"nativeView",initial:"hidden",isSwitchActive:s,style:{position:"absolute",width:"100%",height:"100%",right:s?"5em":"0"},children:v.jsx(ef,{images:t,backgroundColor:n,color:r,invertedColors:i,isNative:!1,isSwitchActive:s,doubleRepo:o})})]})})},q6=A.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 1vh;
`,jg=A(Fe.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  right: ${e=>e.isSwitchActive?"5em":"0"};

  @media (max-width: 768px) and (min-width: 320px) {
    right: ${e=>e.isSwitchActive?"0":"3em"};
    left: -2.5em;
  }
`,Z6=A.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15vh);
  overflow: hidden;
`;function Zo({title:e,descriptions:t,repos:n,nativeImages:r=[],browserImages:i=[],isNative:o,isBrowser:s,invertedColors:a,textColor:l}){const[u,c]=w.useState(!1),[f,d]=w.useState(!1),[m,y]=w.useState(null),[x,k]=w.useState(null),[p,h]=w.useState(!1),{card:g}=At(),C=qa(),{setRunTransition:S,triggerTransition:b}=bi(),P=window.location.pathname.replace("/My-portfolio/","").replace("/",""),T=g.find(ee=>ee.path===P)||g[0],N=T.color,M=T.backgroundColor,B=T.shadow,Te=50,he=w.useRef(null),st=w.useRef(null),[Ut,at]=w.useState(null);w.useEffect(()=>{c(o&&s)},[o,s]),w.useEffect(()=>{if(window.matchMedia("(max-width: 768px)").matches&&he.current){let re=function(xe){Be.raf(xe),requestAnimationFrame(re)};const Be=new qd({wrapper:he.current,content:st.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return at(Be),requestAnimationFrame(re),()=>{Be.destroy()}}},[]),w.useEffect(()=>{const ee=()=>{he.current&&h(he.current.scrollTop>300)},re=he.current;return re&&re.addEventListener("scroll",ee),()=>{re&&re.removeEventListener("scroll",ee)}},[]);const U=()=>{d(!f)},R=()=>{if(!m||!x)return;const ee=m-x,re=ee>Te,Be=ee<-Te,xe=g.findIndex(we=>we.path===P);if(re){S(!0),b("next");const we=(xe+1)%g.length,Un=g[we].path,ln=setTimeout(()=>{S(!1),C(`/${Un}`)},800);return()=>clearTimeout(ln)}if(Be){S(!0),b("previous");const we=(xe-1+g.length)%g.length,Un=g[we].path,ln=setTimeout(()=>{S(!1),C(`/${Un}`)},800);return()=>clearTimeout(ln)}},O=ee=>{k(null),y(ee.touches[0].clientX)},D=ee=>{k(ee.touches[0].clientX)},G=()=>{R()},K=()=>{Ut&&Ut.scrollTo(0)};return v.jsxs(eA,{ref:he,backgroundColor:M,onTouchStart:O,onTouchMove:D,onTouchEnd:G,children:[v.jsxs(tA,{ref:st,color:N,children:[v.jsx(rA,{backgroundColor:M,children:v.jsx(x6,{title:e,shadowColor:B})}),v.jsxs(nA,{children:[v.jsx(Gx,{descriptions:t,repos:n,color:N,backgroundColor:M,showViewSwitch:o&&s,onSwitchView:U,isSwitchActive:f}),v.jsx(oA,{children:o&&s?v.jsx(iA,{children:v.jsx(Q6,{nativeImages:r,browserImages:i,backgroundColor:M,color:N,textColor:l,invertedColors:a,doubleRepo:u,isSwitchActive:f})}):v.jsx(ef,{images:o?r:i,backgroundColor:M,color:N,textColor:l,invertedColors:a,isNative:o})})]})]}),v.jsx(sA,{onClick:K,show:p,color:N,backgroundColor:M,children:"↑"})]})}const J6=le`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,eA=A.div`
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

`,tA=A.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  animation: ${J6} 0.8s forwards;
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
`,nA=A.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  margin-left: 10vw;
  gap: 2em;
  z-index: 105;
  overflow: hidden;


  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    margin-left: 0;
    gap: 0;
    overflow: visible;
  }
`,rA=A.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 101;
  background-color: ${e=>e.backgroundColor};

  @media (max-width: 768px) and (min-width: 320px) {
    position: relative;
    z-index: 0;
    .navigation-buttons {
      display: none;
    }
  }
`,iA=A.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`,oA=A(Fe.div)`
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
`,sA=A.button`
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
`;function Jo(){const{runTransition:e,transitionDirection:t}=bi(),{card:n}=At(),r=window.location.pathname.replace("/My-portfolio/","").replace("/",""),i=n.findIndex(u=>u.path===r),o=(i-1+n.length)%n.length,s=(i+1)%n.length,a=n[s].backgroundColor,l=n[o].backgroundColor;return v.jsx(v.Fragment,{children:e&&v.jsx(uA,{direction:t,color:t==="next"?a:l})})}const aA=le`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,lA=le`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,uA=A(Fe.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: ${e=>e.color};
  animation: ${e=>e.direction==="next"?aA:lA} 0.7s ease-in-out forwards;
`;function cA(){const{card:e}=At(),t=e.find(s=>s.path==="chatapp"),[n,r]=w.useState(!0),[i,o]=w.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsx(Zo,{title:t.title,descriptions:t.descriptions,repos:t.repos,nativeImages:t.images.nativeImage,isNative:n,isBrowser:i,previousPage:!0,nextPage:!0}),v.jsx(Jo,{})]})}function fA(){const{runTransition:e}=bi(),{card:t}=At(),n=t.find(o=>o.path==="webbshop"),[r,i]=w.useState(!0);return v.jsxs(v.Fragment,{children:[v.jsx(Zo,{title:n.title,descriptions:n.descriptions,browserImages:n.images.browserImage,repos:n.repos,isBrowser:r}),e===!0?v.jsx(Jo,{}):""]})}function dA(){const{runTransition:e}=bi(),{card:t}=At(),n=t.find(r=>r.path==="movieapp");return v.jsxs(v.Fragment,{children:[v.jsx(Zo,{title:n.title,descriptions:n.descriptions,repos:n.repos,nativeImages:n.images.nativeImage,browserImages:n.images.browserImage,isNative:!0,isBrowser:!0}),e===!0?v.jsx(Jo,{}):""]})}function hA(){const{card:e}=At(),t=e.find(n=>n.path==="cleaning");return v.jsxs(v.Fragment,{children:[v.jsx(Zo,{title:t.title,descriptions:t.descriptions,repos:t.repos,browserImages:t.images.browserImage,invertedColors:!0}),v.jsx(Jo,{})]})}function pA(){const{main:e}=At(),t=w.useRef(null),n=w.useRef(null),[r,i]=w.useState(null),[o,s]=w.useState(0),[a,l]=w.useState("");w.useState(!1),w.useEffect(()=>{if(window.matchMedia("(max-width: 768px) and (min-width: 320px)").matches){let d=function(y){m.raf(y),requestAnimationFrame(d)};const m=new qd({duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return i(m),requestAnimationFrame(d),()=>{m.destroy()}}},[]),w.useEffect(()=>{const f=setInterval(()=>{s(d=>d===Object.keys(e.images).length-1?0:d+1)},3e3);return()=>clearInterval(f)},[e.images]);const u=f=>{Object.keys(f)[0]==="email"?(l("Email copied!"),navigator.clipboard.writeText("emil.stjernlof@gmail.com"),setTimeout(()=>{l("")},3e3)):Object.keys(f)[0]==="browser"?window.open(f.browser,"_blank"):Object.keys(f)[0]==="linkedin"&&window.open(f.linkedin,"_blank")},c=f=>{f.song&&window.open(f.song,"_blank")};return v.jsx(vA,{ref:t,children:v.jsxs(yA,{ref:n,children:[v.jsxs(xA,{children:[v.jsx("h2",{children:e.title}),v.jsx(Cs,{delay:"0.2s",children:v.jsx("p",{children:e.descriptions.primary})}),v.jsx(Cs,{delay:"0.3s",children:v.jsx("p",{children:e.descriptions.secondary})}),v.jsx(Cs,{delay:"0.4s",children:v.jsx("p",{children:e.descriptions.tertiary})}),v.jsx(Cs,{delay:"0.5s",children:v.jsx("p",{children:e.descriptions.quaternary})})]}),v.jsxs(wA,{children:[v.jsxs(SA,{children:[v.jsx(kA,{children:Object.values(e.images).map((f,d)=>v.jsx(CA,{src:f,alt:`profile picture ${d+1}`,active:d===o},f))}),v.jsxs(bA,{children:[v.jsx(PA,{children:v.jsx(TA,{children:"What's in my headphones?"})}),e.music.map((f,d)=>v.jsx(EA,{children:v.jsx(AA,{children:v.jsx(et,{color:e.color,backgroundColor:e.backgroundColor,onClick:()=>c(f),width:"100%",height:"100%",border:!0,label:v.jsxs(Mg,{children:[e.musicIcon,v.jsx(RA,{children:v.jsxs(jA,{shouldScroll:f.songtitle.length>10,duration:`${f.songtitle.length*.6}s`,children:[f.songtitle," "]})})]})},d)})},d))]})]}),v.jsx(MA,{children:e.repos.map((f,d)=>v.jsx(IA,{children:v.jsx(et,{color:e.color,backgroundColor:e.backgroundColor,onClick:()=>u(f),label:v.jsx(Mg,{children:f.icon}),showCopyAlert:Object.keys(f)[0]==="email"&&a,copyMessage:a,small:!0})},d))})]})]})})}const Qx=le`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,qx=le`
  from {
    transform: translateY(5%);
  }
  to {
    transform: translateY(0);
  }
`,mA=le`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,gA=le`
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
`,vA=A.div`
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
`,yA=A.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: white;
  animation: ${Qx} 2s, ${qx} 1s;
  margin: 5vh;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 80%;
    flex-direction: column;
    gap: 0;
    margin: 10vh 0 4vh 0;
    height: auto;
  }
`,xA=A.div`
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
`,Cs=A.div`
  margin: 1em 0;
  font-size: clamp(1rem, calc(0.1vw + .5rem), 13rem);

  p {
    opacity: 0;
    animation: ${mA} 1s forwards;
    animation-delay: ${e=>e.delay||"0s"};
    margin: 0;
  }



  @media (max-width: 768px) and (min-width: 320px) {
    max-height: 70%;
  }
`,wA=A.div`
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
`,SA=A.div`
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
`,kA=A.div`
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
`,CA=A.img`
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
`,bA=A.div`
  width: 280px;
  border-radius: 15px;
  padding: .5em 1em;
 

  @media (max-width: 768px) and (min-width: 320px) {
    width: 320px;
  }
`,PA=A.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1em 0;

  @media (max-width: 1536px) and (min-width: 768px) {
    padding: 0;
  }
`,TA=A.h4`
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
`,EA=A.div`
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
`,AA=A.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`,RA=A.div`
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
`,jA=A.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.2em;
  font-family: "Lato", sans-serif;
  ${e=>e.shouldScroll&&rl`
      animation: ${gA} ${t=>t.duration||"8s"} infinite;
      padding-right: 2em;
    `}

  &:hover {
    animation-play-state: paused;
  }
`,MA=A.div`
  display: flex;
  height: 5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
  opacity: 0;
  animation: ${Qx} 2s forwards, ${qx} 1s forwards;
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
`,IA=A.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
  `,Mg=A.div`
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
`;function Yn({about:e,setIsHoverButton:t}){const[n,r]=w.useState(""),[i,o]=w.useState(!1),[s,a]=w.useState(!1),[l,u]=w.useState(!1),[c,f]=w.useState(""),[d,m]=w.useState(!1),{card:y,main:x}=At(),k=qa(),{isPopoverOpen:p}=Xx(),h=window.location.pathname.replace("/My-portfolio/","").replace("/",""),g=y.find(B=>B.path===h)||y[0];let C=g.color,S=g.backgroundColor,b=g.shadow;(h==="about"||h==="")&&(C=x.backgroundColor,S=x.color,b=x.shadow);const P=Qa(),T="emil.stjernlof@gmail.com";w.useEffect(()=>{m(!0);const B=setTimeout(()=>{r("")},3e3);return()=>clearTimeout(B)},[n]),w.useEffect(()=>{m(!1);const B=setTimeout(()=>{m(!0)},100);return()=>clearTimeout(B)},[P.pathname]);function N(){navigator.clipboard.writeText(T),r("Email copied!"),o(!0),setTimeout(()=>{o(!1)},200)}const M=(B,Te)=>{a(!0),u(!0),f(Te);const he=setTimeout(()=>{a(!1),k(B),u(!1)},800);return()=>{clearTimeout(he)}};return v.jsxs(v.Fragment,{children:[l&&v.jsx(_A,{color:s?c:""}),v.jsxs(OA,{isPopoverOpen:p,path:h,color:C,backgroundColor:S,shadow:b,fadeIn:d,about:e,children:[P.pathname!=="/"?v.jsx(et,{color:C,backgroundColor:S,invertedColors:e,onClick:()=>M("/","white"),label:"Home"}):null,P.pathname!=="/about"?v.jsx(et,{color:C,backgroundColor:S,invertedColors:e,onClick:()=>M("/about","var(--dark)"),label:"About me"}):null,v.jsx(DA,{className:i?"active":"",children:v.jsx(et,{color:C,backgroundColor:S,invertedColors:e,onClick:N,label:"Contact",copyMessage:n,showCopyAlert:!0})})]})]})}const LA=le`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 1;
  }
`,NA=le`
  0% {
    transform: translate(50%, 50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%) scale(300);
    opacity: 1;
  }
`,OA=A.div`
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
`,DA=A.div`  position: relative;
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
`,_A=A.div`
  position: absolute;
  width: 70%;
  height: 80%;
  right: 60%;
  bottom: 55%;
  border-radius: 50%;
  background-color: ${e=>e.color};
  animation: ${LA} 0.7s ease-in-out forwards;
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
    animation: ${NA} 1s ease-in-out forwards;
  }
`;function zA(){const{card:e}=At(),t=e.find(n=>n.path==="dashboard");return v.jsxs(v.Fragment,{children:[v.jsx(Zo,{title:t.title,descriptions:t.descriptions,repos:t.repos,browserImages:t.images.browserImage,isBrowser:!0,invertedColors:!1}),v.jsx(Jo,{})]})}const FA=()=>v.jsx($A,{children:v.jsx(VA,{children:"ES"})}),$A=A.div`
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
  }
  `,VA=A.div`
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
      width: 15vw;
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
`,BA=()=>{const[e,t]=w.useState({x:null,y:null}),n=r=>{t({x:r.clientX,y:r.clientY})};return w.useEffect(()=>(window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)),[]),e},UA=({isHoverButton:e,isHoveringCards:t,cursorColor:n,cursorHoverColor:r})=>{const[i,o]=w.useState(!1),[s,a]=w.useState(!1),{x:l,y:u}=BA();let c,f,d;switch(!0){case t:c=80,f=window.innerWidth<=1536?10:-40,d=-40;break;case s:c=15,f=window.innerWidth<=1536?50:-10,d=-8;break;case e:c=40,f=-20,d=-20;break;case i:c=130,f=window.innerWidth<=1536?0:-60,d=-60;break;default:c=35,f=window.innerWidth<=1536?-(c/-1):-(c/2),d=-(c/2)}const m="Frontend developer in development";return w.useEffect(()=>{const y=()=>a(!0),x=()=>a(!1);return window.addEventListener("mousedown",y),window.addEventListener("mouseup",x),()=>{window.removeEventListener("mousedown",y),window.removeEventListener("mouseup",x)}},[]),v.jsx(v.Fragment,{children:v.jsx(WA,{children:v.jsx(HA,{animate:{WebkitMaskPosition:`${l-c-f}px ${u-c-d}px`,WebkitMaskSize:`${c}px`,backgroundColor:t&&s||t?r:n},transition:{type:"tween",ease:"backOut",duration:.2,x:{type:"tween",ease:"backOut",duration:.2},y:{type:"tween",ease:"backOut",duration:.2},width:{type:"tween",ease:"backOut",duration:.4},height:{type:"tween",ease:"backOut",duration:.4}},style:{paddingRight:"4em",paddingTop:"8em"},children:location.pathname==="/My-portfolio/"&&v.jsx(YA,{onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},style:{margin:"0"},children:m})})})})},WA=A.div`
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
`,HA=A(Fe.div)`
    font-size: 1.8em;
    font-weight: 600;
    mask-image: url(./mask.svg);
    font-family: "Poiret One", sans-serif;
    mask-repeat: no-repeat;
    mask-size: 40px;
    background: var(--dark);
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
`,YA=A.h4`
  width: 20em;
  pointer-events: auto; 

 `;function GA(){const{runTransition:e}=bi(),t=Qa(),[n,r]=w.useState(""),[i,o]=w.useState(!0),[s,a]=w.useState(!1),[l,u]=w.useState(!1),[c,f]=w.useState(""),[d,m]=w.useState(""),[y,x]=w.useState(!0),[k,p]=w.useState(1),h="/",g="/cleaning",C="/chatapp",S="/webbshop",b="/movieapp",P="/dashboard";return w.useEffect(()=>{let T="",N="";switch(t.pathname){case h:N="var(--dark)";break;case g:T="var(--yellowish)",N="var(--dark)";break;case S:T="var(--greenish)",N="var(--bisque)";break;case C:T="var(--light-purple)",N="var(--neon-green)";break;case b:T="var(--darker)",N="var(--redish)";break;case P:T="var(--blueish)",N="var(--light-blueish)";break;case"/about":T="white",N="white";break;default:T=""}p(0),setTimeout(()=>{r(T),p(1),m()},300),f(N)},[t.pathname]),w.useEffect(()=>{const T=setTimeout(()=>o(!1),3200);return()=>clearTimeout(T)},[]),w.useEffect(()=>{e&&(x(!1),setTimeout(()=>x(!0)))},[e]),v.jsx(v.Fragment,{children:i?v.jsx(FA,{}):v.jsx(ll,{children:v.jsxs(N6,{children:[v.jsx(UA,{isHoverButton:l,isHoveringCards:s,cursorColor:c,cursorHoverColor:d}),v.jsx(KA,{color:n,children:v.jsx(Yx,{children:v.jsx(XA,{children:v.jsxs(pk,{children:[v.jsx(hn,{path:h,element:v.jsxs(Gn,{children:[v.jsx(Yn,{path:h,setIsHoverButton:u}),v.jsx(q4,{setCursorHoverColor:m,setIsHoveringCards:a})]})}),v.jsx(hn,{path:g,element:v.jsxs(Gn,{className:"scrollCleaning",children:[v.jsx(Yn,{path:g,setIsHoverButton:u}),v.jsx(hA,{})]})}),v.jsx(hn,{path:C,element:v.jsxs(Gn,{className:"scrollChatApp",children:[v.jsx(Yn,{path:C,setIsHoverButton:u}),v.jsx(cA,{})]})}),v.jsx(hn,{path:S,element:v.jsxs(Gn,{className:"scrollWebbShop",children:[v.jsx(Yn,{path:S,setIsHoverButton:u}),v.jsx(fA,{})]})}),v.jsx(hn,{path:b,element:v.jsxs(Gn,{className:"scrollMovies",children:[v.jsx(Yn,{path:b,setIsHoverButton:u}),v.jsx(dA,{})]})}),v.jsx(hn,{path:P,element:v.jsxs(Gn,{children:[v.jsx(Yn,{path:P,setIsHoverButton:u}),v.jsx(zA,{})]})}),v.jsx(hn,{path:"/about",element:v.jsxs(Gn,{children:[v.jsx(Yn,{path:"/about",about:!0}),v.jsx(pA,{})]})})]})})})})]})})})}const KA=A.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${e=>e.color};
`,XA=A.div`
  flex-grow: 1;
`,Gn=A.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;gu.createRoot(document.getElementById("root")).render(v.jsx(Zt.StrictMode,{children:v.jsx(gk,{basename:"/My-portfolio/",children:v.jsx(Yx,{children:v.jsx(vC,{children:v.jsx(ll,{children:v.jsx(GA,{router:ty})})})})})}));
