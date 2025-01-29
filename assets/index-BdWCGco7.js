var rv=Object.defineProperty;var iv=(n,i,a)=>i in n?rv(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a;var re=(n,i,a)=>iv(n,typeof i!="symbol"?i+"":i,a);import{motion as it,useTransform as Sa,useSpring as pu,AnimatePresence as ov,useScroll as dp,useMotionValueEvent as av}from"framer-motion";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function Vu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yl={exports:{}},Mi={},Xl={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function sv(){if(pp)return me;pp=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),C=Symbol.iterator;function w(b){return b===null||typeof b!="object"?null:(b=C&&b[C]||b["@@iterator"],typeof b=="function"?b:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,I={};function O(b,A,ie){this.props=b,this.context=A,this.refs=I,this.updater=ie||T}O.prototype.isReactComponent={},O.prototype.setState=function(b,A){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,A,"setState")},O.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function L(){}L.prototype=O.prototype;function N(b,A,ie){this.props=b,this.context=A,this.refs=I,this.updater=ie||T}var z=N.prototype=new L;z.constructor=N,R(z,O.prototype),z.isPureReactComponent=!0;var D=Array.isArray,V=Object.prototype.hasOwnProperty,Q={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function se(b,A,ie){var ue,de={},fe=null,ge=null;if(A!=null)for(ue in A.ref!==void 0&&(ge=A.ref),A.key!==void 0&&(fe=""+A.key),A)V.call(A,ue)&&!Y.hasOwnProperty(ue)&&(de[ue]=A[ue]);var he=arguments.length-2;if(he===1)de.children=ie;else if(1<he){for(var we=Array(he),Ke=0;Ke<he;Ke++)we[Ke]=arguments[Ke+2];de.children=we}if(b&&b.defaultProps)for(ue in he=b.defaultProps,he)de[ue]===void 0&&(de[ue]=he[ue]);return{$$typeof:n,type:b,key:fe,ref:ge,props:de,_owner:Q.current}}function le(b,A){return{$$typeof:n,type:b.type,key:A,ref:b.ref,props:b.props,_owner:b._owner}}function ye(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function Ve(b){var A={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ie){return A[ie]})}var Ne=/\/+/g;function Fe(b,A){return typeof b=="object"&&b!==null&&b.key!=null?Ve(""+b.key):A.toString(36)}function $e(b,A,ie,ue,de){var fe=typeof b;(fe==="undefined"||fe==="boolean")&&(b=null);var ge=!1;if(b===null)ge=!0;else switch(fe){case"string":case"number":ge=!0;break;case"object":switch(b.$$typeof){case n:case i:ge=!0}}if(ge)return ge=b,de=de(ge),b=ue===""?"."+Fe(ge,0):ue,D(de)?(ie="",b!=null&&(ie=b.replace(Ne,"$&/")+"/"),$e(de,A,ie,"",function(Ke){return Ke})):de!=null&&(ye(de)&&(de=le(de,ie+(!de.key||ge&&ge.key===de.key?"":(""+de.key).replace(Ne,"$&/")+"/")+b)),A.push(de)),1;if(ge=0,ue=ue===""?".":ue+":",D(b))for(var he=0;he<b.length;he++){fe=b[he];var we=ue+Fe(fe,he);ge+=$e(fe,A,ie,we,de)}else if(we=w(b),typeof we=="function")for(b=we.call(b),he=0;!(fe=b.next()).done;)fe=fe.value,we=ue+Fe(fe,he++),ge+=$e(fe,A,ie,we,de);else if(fe==="object")throw A=String(b),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return ge}function Ze(b,A,ie){if(b==null)return b;var ue=[],de=0;return $e(b,ue,"","",function(fe){return A.call(ie,fe,de++)}),ue}function De(b){if(b._status===-1){var A=b._result;A=A(),A.then(function(ie){(b._status===0||b._status===-1)&&(b._status=1,b._result=ie)},function(ie){(b._status===0||b._status===-1)&&(b._status=2,b._result=ie)}),b._status===-1&&(b._status=0,b._result=A)}if(b._status===1)return b._result.default;throw b._result}var Se={current:null},H={transition:null},J={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:H,ReactCurrentOwner:Q};function X(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:Ze,forEach:function(b,A,ie){Ze(b,function(){A.apply(this,arguments)},ie)},count:function(b){var A=0;return Ze(b,function(){A++}),A},toArray:function(b){return Ze(b,function(A){return A})||[]},only:function(b){if(!ye(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},me.Component=O,me.Fragment=a,me.Profiler=u,me.PureComponent=N,me.StrictMode=s,me.Suspense=m,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,me.act=X,me.cloneElement=function(b,A,ie){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ue=R({},b.props),de=b.key,fe=b.ref,ge=b._owner;if(A!=null){if(A.ref!==void 0&&(fe=A.ref,ge=Q.current),A.key!==void 0&&(de=""+A.key),b.type&&b.type.defaultProps)var he=b.type.defaultProps;for(we in A)V.call(A,we)&&!Y.hasOwnProperty(we)&&(ue[we]=A[we]===void 0&&he!==void 0?he[we]:A[we])}var we=arguments.length-2;if(we===1)ue.children=ie;else if(1<we){he=Array(we);for(var Ke=0;Ke<we;Ke++)he[Ke]=arguments[Ke+2];ue.children=he}return{$$typeof:n,type:b.type,key:de,ref:fe,props:ue,_owner:ge}},me.createContext=function(b){return b={$$typeof:p,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:f,_context:b},b.Consumer=b},me.createElement=se,me.createFactory=function(b){var A=se.bind(null,b);return A.type=b,A},me.createRef=function(){return{current:null}},me.forwardRef=function(b){return{$$typeof:h,render:b}},me.isValidElement=ye,me.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:De}},me.memo=function(b,A){return{$$typeof:g,type:b,compare:A===void 0?null:A}},me.startTransition=function(b){var A=H.transition;H.transition={};try{b()}finally{H.transition=A}},me.unstable_act=X,me.useCallback=function(b,A){return Se.current.useCallback(b,A)},me.useContext=function(b){return Se.current.useContext(b)},me.useDebugValue=function(){},me.useDeferredValue=function(b){return Se.current.useDeferredValue(b)},me.useEffect=function(b,A){return Se.current.useEffect(b,A)},me.useId=function(){return Se.current.useId()},me.useImperativeHandle=function(b,A,ie){return Se.current.useImperativeHandle(b,A,ie)},me.useInsertionEffect=function(b,A){return Se.current.useInsertionEffect(b,A)},me.useLayoutEffect=function(b,A){return Se.current.useLayoutEffect(b,A)},me.useMemo=function(b,A){return Se.current.useMemo(b,A)},me.useReducer=function(b,A,ie){return Se.current.useReducer(b,A,ie)},me.useRef=function(b){return Se.current.useRef(b)},me.useState=function(b){return Se.current.useState(b)},me.useSyncExternalStore=function(b,A,ie){return Se.current.useSyncExternalStore(b,A,ie)},me.useTransition=function(){return Se.current.useTransition()},me.version="18.3.1",me}var hp;function Yu(){return hp||(hp=1,Xl.exports=sv()),Xl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function lv(){if(mp)return Mi;mp=1;var n=Yu(),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(h,m,g){var y,C={},w=null,T=null;g!==void 0&&(w=""+g),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(T=m.ref);for(y in m)s.call(m,y)&&!f.hasOwnProperty(y)&&(C[y]=m[y]);if(h&&h.defaultProps)for(y in m=h.defaultProps,m)C[y]===void 0&&(C[y]=m[y]);return{$$typeof:i,type:h,key:w,ref:T,props:C,_owner:u.current}}return Mi.Fragment=a,Mi.jsx=p,Mi.jsxs=p,Mi}var gp;function uv(){return gp||(gp=1,Yl.exports=lv()),Yl.exports}var x=uv(),E=Yu();const Fn=Vu(E);var ha={},Gl={exports:{}},pt={},Ql={exports:{}},Kl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function cv(){return vp||(vp=1,function(n){function i(H,J){var X=H.length;H.push(J);e:for(;0<X;){var b=X-1>>>1,A=H[b];if(0<u(A,J))H[b]=J,H[X]=A,X=b;else break e}}function a(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var J=H[0],X=H.pop();if(X!==J){H[0]=X;e:for(var b=0,A=H.length,ie=A>>>1;b<ie;){var ue=2*(b+1)-1,de=H[ue],fe=ue+1,ge=H[fe];if(0>u(de,X))fe<A&&0>u(ge,de)?(H[b]=ge,H[fe]=X,b=fe):(H[b]=de,H[ue]=X,b=ue);else if(fe<A&&0>u(ge,X))H[b]=ge,H[fe]=X,b=fe;else break e}}return J}function u(H,J){var X=H.sortIndex-J.sortIndex;return X!==0?X:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var p=Date,h=p.now();n.unstable_now=function(){return p.now()-h}}var m=[],g=[],y=1,C=null,w=3,T=!1,R=!1,I=!1,O=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(H){for(var J=a(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=H)s(g),J.sortIndex=J.expirationTime,i(m,J);else break;J=a(g)}}function D(H){if(I=!1,z(H),!R)if(a(m)!==null)R=!0,De(V);else{var J=a(g);J!==null&&Se(D,J.startTime-H)}}function V(H,J){R=!1,I&&(I=!1,L(se),se=-1),T=!0;var X=w;try{for(z(J),C=a(m);C!==null&&(!(C.expirationTime>J)||H&&!Ve());){var b=C.callback;if(typeof b=="function"){C.callback=null,w=C.priorityLevel;var A=b(C.expirationTime<=J);J=n.unstable_now(),typeof A=="function"?C.callback=A:C===a(m)&&s(m),z(J)}else s(m);C=a(m)}if(C!==null)var ie=!0;else{var ue=a(g);ue!==null&&Se(D,ue.startTime-J),ie=!1}return ie}finally{C=null,w=X,T=!1}}var Q=!1,Y=null,se=-1,le=5,ye=-1;function Ve(){return!(n.unstable_now()-ye<le)}function Ne(){if(Y!==null){var H=n.unstable_now();ye=H;var J=!0;try{J=Y(!0,H)}finally{J?Fe():(Q=!1,Y=null)}}else Q=!1}var Fe;if(typeof N=="function")Fe=function(){N(Ne)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ze=$e.port2;$e.port1.onmessage=Ne,Fe=function(){Ze.postMessage(null)}}else Fe=function(){O(Ne,0)};function De(H){Y=H,Q||(Q=!0,Fe())}function Se(H,J){se=O(function(){H(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){R||T||(R=!0,De(V))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return a(m)},n.unstable_next=function(H){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var X=w;w=J;try{return H()}finally{w=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=w;w=H;try{return J()}finally{w=X}},n.unstable_scheduleCallback=function(H,J,X){var b=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?b+X:b):X=b,H){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=X+A,H={id:y++,callback:J,priorityLevel:H,startTime:X,expirationTime:A,sortIndex:-1},X>b?(H.sortIndex=X,i(g,H),a(m)===null&&H===a(g)&&(I?(L(se),se=-1):I=!0,Se(D,X-b))):(H.sortIndex=A,i(m,H),R||T||(R=!0,De(V))),H},n.unstable_shouldYield=Ve,n.unstable_wrapCallback=function(H){var J=w;return function(){var X=w;w=J;try{return H.apply(this,arguments)}finally{w=X}}}}(Kl)),Kl}var yp;function fv(){return yp||(yp=1,Ql.exports=cv()),Ql.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function dv(){if(wp)return pt;wp=1;var n=Yu(),i=fv();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,u={};function f(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(u[e]=t,e=0;e<t.length;e++)s.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},C={};function w(e){return m.call(C,e)?!0:m.call(y,e)?!1:g.test(e)?C[e]=!0:(y[e]=!0,!1)}function T(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,t,r,o){if(t===null||typeof t>"u"||T(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,o,l,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(L,N);O[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(L,N);O[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(L,N);O[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function z(e,t,r,o){var l=O.hasOwnProperty(t)?O[t]:null;(l!==null?l.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R(t,r,l,o)&&(r=null),o||l===null?w(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,o=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),Q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ve=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),H=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,b;function A(e){if(b===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var ie=!1;function ue(e,t){if(!e||ie)return"";ie=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var o=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){o=j}e.call(t.prototype)}else{try{throw Error()}catch(j){o=j}e()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),c=o.stack.split(`
`),d=l.length-1,v=c.length-1;1<=d&&0<=v&&l[d]!==c[v];)v--;for(;1<=d&&0<=v;d--,v--)if(l[d]!==c[v]){if(d!==1||v!==1)do if(d--,v--,0>v||l[d]!==c[v]){var S=`
`+l[d].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=d&&0<=v);break}}}finally{ie=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?A(e):""}function de(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Portal";case le:return"Profiler";case se:return"StrictMode";case Fe:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ve:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ke(e){var t=we(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){o=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jt(e){e._valueTracker||(e._valueTracker=Ke(e))}function Nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Za(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function yc(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wc(e,t){t=t.checked,t!=null&&z(e,"checked",t,!1)}function es(e,t){wc(e,t);var r=he(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,r):t.hasOwnProperty("defaultValue")&&ts(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ts(e,t,r){(t!=="number"||io(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Jr=Array.isArray;function dr(e,t,r,o){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(a(92));if(Jr(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function kc(e,t){var r=he(t.value),o=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ec(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lg=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){lg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function Pc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function Tc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,l=Pc(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,l):e[r]=l}}var ug=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function is(e,t){if(t){if(ug[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var as=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,pr=null,hr=null;function Rc(e){if(e=ki(e)){if(typeof ls!="function")throw Error(a(280));var t=e.stateNode;t&&(t=_o(t),ls(e.stateNode,e.type,t))}}function _c(e){pr?hr?hr.push(e):hr=[e]:pr=e}function Nc(){if(pr){var e=pr,t=hr;if(hr=pr=null,Rc(e),t)for(e=0;e<t.length;e++)Rc(t[e])}}function jc(e,t){return e(t)}function Ic(){}var us=!1;function Oc(e,t,r){if(us)return e(t,r);us=!0;try{return jc(e,t,r)}finally{us=!1,(pr!==null||hr!==null)&&(Ic(),Nc())}}function ti(e,t){var r=e.stateNode;if(r===null)return null;var o=_o(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,t,typeof r));return r}var cs=!1;if(h)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){cs=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{cs=!1}function cg(e,t,r,o,l,c,d,v,S){var j=Array.prototype.slice.call(arguments,3);try{t.apply(r,j)}catch(F){this.onError(F)}}var ri=!1,ao=null,so=!1,fs=null,fg={onError:function(e){ri=!0,ao=e}};function dg(e,t,r,o,l,c,d,v,S){ri=!1,ao=null,cg.apply(fg,arguments)}function pg(e,t,r,o,l,c,d,v,S){if(dg.apply(this,arguments),ri){if(ri){var j=ao;ri=!1,ao=null}else throw Error(a(198));so||(so=!0,fs=j)}}function Bn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ac(e){if(Bn(e)!==e)throw Error(a(188))}function hg(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var r=e,o=t;;){var l=r.return;if(l===null)break;var c=l.alternate;if(c===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===r)return Ac(l),e;if(c===o)return Ac(l),t;c=c.sibling}throw Error(a(188))}if(r.return!==o.return)r=l,o=c;else{for(var d=!1,v=l.child;v;){if(v===r){d=!0,r=l,o=c;break}if(v===o){d=!0,o=l,r=c;break}v=v.sibling}if(!d){for(v=c.child;v;){if(v===r){d=!0,r=c,o=l;break}if(v===o){d=!0,o=c,r=l;break}v=v.sibling}if(!d)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:t}function zc(e){return e=hg(e),e!==null?Mc(e):null}function Mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mc(e);if(t!==null)return t;e=e.sibling}return null}var Fc=i.unstable_scheduleCallback,$c=i.unstable_cancelCallback,mg=i.unstable_shouldYield,gg=i.unstable_requestPaint,ze=i.unstable_now,vg=i.unstable_getCurrentPriorityLevel,ds=i.unstable_ImmediatePriority,Dc=i.unstable_UserBlockingPriority,lo=i.unstable_NormalPriority,yg=i.unstable_LowPriority,Wc=i.unstable_IdlePriority,uo=null,Dt=null;function wg(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:kg,xg=Math.log,Sg=Math.LN2;function kg(e){return e>>>=0,e===0?32:31-(xg(e)/Sg|0)|0}var co=64,fo=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,l=e.suspendedLanes,c=e.pingedLanes,d=r&268435455;if(d!==0){var v=d&~l;v!==0?o=ii(v):(c&=d,c!==0&&(o=ii(c)))}else d=r&~l,d!==0?o=ii(d):c!==0&&(o=ii(c));if(o===0)return 0;if(t!==0&&t!==o&&!(t&l)&&(l=o&-o,c=t&-t,l>=c||l===16&&(c&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-jt(t),l=1<<r,o|=e[r],t&=~l;return o}function Cg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eg(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-jt(c),v=1<<d,S=l[d];S===-1?(!(v&r)||v&o)&&(l[d]=Cg(v,t)):S<=t&&(e.expiredLanes|=v),c&=~v}}function ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function hs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function oi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function bg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-jt(r),c=1<<l;t[l]=0,o[l]=-1,e[l]=-1,r&=~c}}function ms(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-jt(r),l=1<<o;l&t|e[o]&t&&(e[o]|=t),r&=~l}}var Ce=0;function Bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hc,gs,Vc,Yc,Xc,vs=!1,ho=[],mn=null,gn=null,vn=null,ai=new Map,si=new Map,yn=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function li(e,t,r,o,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:c,targetContainers:[l]},t!==null&&(t=ki(t),t!==null&&gs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Tg(e,t,r,o,l){switch(t){case"focusin":return mn=li(mn,e,t,r,o,l),!0;case"dragenter":return gn=li(gn,e,t,r,o,l),!0;case"mouseover":return vn=li(vn,e,t,r,o,l),!0;case"pointerover":var c=l.pointerId;return ai.set(c,li(ai.get(c)||null,e,t,r,o,l)),!0;case"gotpointercapture":return c=l.pointerId,si.set(c,li(si.get(c)||null,e,t,r,o,l)),!0}return!1}function Qc(e){var t=Hn(e.target);if(t!==null){var r=Bn(t);if(r!==null){if(t=r.tag,t===13){if(t=Lc(r),t!==null){e.blockedOn=t,Xc(e.priority,function(){Vc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);as=o,r.target.dispatchEvent(o),as=null}else return t=ki(r),t!==null&&gs(t),e.blockedOn=r,!1;t.shift()}return!0}function Kc(e,t,r){mo(e)&&r.delete(t)}function Rg(){vs=!1,mn!==null&&mo(mn)&&(mn=null),gn!==null&&mo(gn)&&(gn=null),vn!==null&&mo(vn)&&(vn=null),ai.forEach(Kc),si.forEach(Kc)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Rg)))}function ci(e){function t(l){return ui(l,e)}if(0<ho.length){ui(ho[0],e);for(var r=1;r<ho.length;r++){var o=ho[r];o.blockedOn===e&&(o.blockedOn=null)}}for(mn!==null&&ui(mn,e),gn!==null&&ui(gn,e),vn!==null&&ui(vn,e),ai.forEach(t),si.forEach(t),r=0;r<yn.length;r++)o=yn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<yn.length&&(r=yn[0],r.blockedOn===null);)Qc(r),r.blockedOn===null&&yn.shift()}var mr=D.ReactCurrentBatchConfig,go=!0;function _g(e,t,r,o){var l=Ce,c=mr.transition;mr.transition=null;try{Ce=1,ys(e,t,r,o)}finally{Ce=l,mr.transition=c}}function Ng(e,t,r,o){var l=Ce,c=mr.transition;mr.transition=null;try{Ce=4,ys(e,t,r,o)}finally{Ce=l,mr.transition=c}}function ys(e,t,r,o){if(go){var l=ws(e,t,r,o);if(l===null)zs(e,t,o,vo,r),Gc(e,o);else if(Tg(l,e,t,r,o))o.stopPropagation();else if(Gc(e,o),t&4&&-1<Pg.indexOf(e)){for(;l!==null;){var c=ki(l);if(c!==null&&Hc(c),c=ws(e,t,r,o),c===null&&zs(e,t,o,vo,r),c===l)break;l=c}l!==null&&o.stopPropagation()}else zs(e,t,o,null,r)}}var vo=null;function ws(e,t,r,o){if(vo=null,e=ss(o),e=Hn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Lc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vo=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vg()){case ds:return 1;case Dc:return 4;case lo:case yg:return 16;case Wc:return 536870912;default:return 16}default:return 16}}var wn=null,xs=null,yo=null;function Jc(){if(yo)return yo;var e,t=xs,r=t.length,o,l="value"in wn?wn.value:wn.textContent,c=l.length;for(e=0;e<r&&t[e]===l[e];e++);var d=r-e;for(o=1;o<=d&&t[r-o]===l[c-o];o++);return yo=l.slice(e,1<o?1-o:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function Zc(){return!1}function gt(e){function t(r,o,l,c,d){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(r=e[v],this[v]=r?r(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?xo:Zc,this.isPropagationStopped=Zc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=gt(gr),fi=X({},gr,{view:0,detail:0}),jg=gt(fi),ks,Cs,di,So=X({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(ks=e.screenX-di.screenX,Cs=e.screenY-di.screenY):Cs=ks=0,di=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),ef=gt(So),Ig=X({},So,{dataTransfer:0}),Og=gt(Ig),Lg=X({},fi,{relatedTarget:0}),Es=gt(Lg),Ag=X({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),zg=gt(Ag),Mg=X({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=gt(Mg),$g=X({},gr,{data:0}),tf=gt($g),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function bs(){return Bg}var Hg=X({},fi,{key:function(e){if(e.key){var t=Dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vg=gt(Hg),Yg=X({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=gt(Yg),Xg=X({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Gg=gt(Xg),Qg=X({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=gt(Qg),qg=X({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=gt(qg),Zg=[9,13,27,32],Ps=h&&"CompositionEvent"in window,pi=null;h&&"documentMode"in document&&(pi=document.documentMode);var e0=h&&"TextEvent"in window&&!pi,rf=h&&(!Ps||pi&&8<pi&&11>=pi),of=" ",af=!1;function sf(e,t){switch(e){case"keyup":return Zg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function t0(e,t){switch(e){case"compositionend":return lf(t);case"keypress":return t.which!==32?null:(af=!0,of);case"textInput":return e=t.data,e===of&&af?null:e;default:return null}}function n0(e,t){if(vr)return e==="compositionend"||!Ps&&sf(e,t)?(e=Jc(),yo=xs=wn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rf&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function cf(e,t,r,o){_c(o),t=Po(t,"onChange"),0<t.length&&(r=new Ss("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var hi=null,mi=null;function i0(e){Rf(e,0)}function ko(e){var t=kr(e);if(Nt(t))return e}function o0(e,t){if(e==="change")return t}var ff=!1;if(h){var Ts;if(h){var Rs="oninput"in document;if(!Rs){var df=document.createElement("div");df.setAttribute("oninput","return;"),Rs=typeof df.oninput=="function"}Ts=Rs}else Ts=!1;ff=Ts&&(!document.documentMode||9<document.documentMode)}function pf(){hi&&(hi.detachEvent("onpropertychange",hf),mi=hi=null)}function hf(e){if(e.propertyName==="value"&&ko(mi)){var t=[];cf(t,mi,e,ss(e)),Oc(i0,t)}}function a0(e,t,r){e==="focusin"?(pf(),hi=t,mi=r,hi.attachEvent("onpropertychange",hf)):e==="focusout"&&pf()}function s0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(mi)}function l0(e,t){if(e==="click")return ko(t)}function u0(e,t){if(e==="input"||e==="change")return ko(t)}function c0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:c0;function gi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!m.call(t,l)||!It(e[l],t[l]))return!1}return!0}function mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gf(e,t){var r=mf(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=mf(r)}}function vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(){for(var e=window,t=io();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=io(e.document)}return t}function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f0(e){var t=yf(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&vf(r.ownerDocument.documentElement,r)){if(o!==null&&_s(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,c=Math.min(o.start,l);o=o.end===void 0?c:Math.min(o.end,l),!e.extend&&c>o&&(l=o,o=c,c=l),l=gf(r,c);var d=gf(r,o);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),c>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var d0=h&&"documentMode"in document&&11>=document.documentMode,yr=null,Ns=null,vi=null,js=!1;function wf(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;js||yr==null||yr!==io(o)||(o=yr,"selectionStart"in o&&_s(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vi&&gi(vi,o)||(vi=o,o=Po(Ns,"onSelect"),0<o.length&&(t=new Ss("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=yr)))}function Co(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Is={},xf={};h&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Eo(e){if(Is[e])return Is[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in xf)return Is[e]=t[r];return e}var Sf=Eo("animationend"),kf=Eo("animationiteration"),Cf=Eo("animationstart"),Ef=Eo("transitionend"),bf=new Map,Pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){bf.set(e,t),f(t,[e])}for(var Os=0;Os<Pf.length;Os++){var Ls=Pf[Os],p0=Ls.toLowerCase(),h0=Ls[0].toUpperCase()+Ls.slice(1);xn(p0,"on"+h0)}xn(Sf,"onAnimationEnd"),xn(kf,"onAnimationIteration"),xn(Cf,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(Ef,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function Tf(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,pg(o,t,void 0,e),e.currentTarget=null}function Rf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],l=o.event;o=o.listeners;e:{var c=void 0;if(t)for(var d=o.length-1;0<=d;d--){var v=o[d],S=v.instance,j=v.currentTarget;if(v=v.listener,S!==c&&l.isPropagationStopped())break e;Tf(l,v,j),c=S}else for(d=0;d<o.length;d++){if(v=o[d],S=v.instance,j=v.currentTarget,v=v.listener,S!==c&&l.isPropagationStopped())break e;Tf(l,v,j),c=S}}}if(so)throw e=fs,so=!1,fs=null,e}function be(e,t){var r=t[Us];r===void 0&&(r=t[Us]=new Set);var o=e+"__bubble";r.has(o)||(_f(t,e,2,!1),r.add(o))}function As(e,t,r){var o=0;t&&(o|=4),_f(r,e,o,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[bo]){e[bo]=!0,s.forEach(function(r){r!=="selectionchange"&&(m0.has(r)||As(r,!1,e),As(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,As("selectionchange",!1,t))}}function _f(e,t,r,o){switch(qc(t)){case 1:var l=_g;break;case 4:l=Ng;break;default:l=ys}r=l.bind(null,t,r,e),l=void 0,!cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function zs(e,t,r,o,l){var c=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var v=o.stateNode.containerInfo;if(v===l||v.nodeType===8&&v.parentNode===l)break;if(d===4)for(d=o.return;d!==null;){var S=d.tag;if((S===3||S===4)&&(S=d.stateNode.containerInfo,S===l||S.nodeType===8&&S.parentNode===l))return;d=d.return}for(;v!==null;){if(d=Hn(v),d===null)return;if(S=d.tag,S===5||S===6){o=c=d;continue e}v=v.parentNode}}o=o.return}Oc(function(){var j=c,F=ss(r),$=[];e:{var M=bf.get(e);if(M!==void 0){var G=Ss,q=e;switch(e){case"keypress":if(wo(r)===0)break e;case"keydown":case"keyup":G=Vg;break;case"focusin":q="focus",G=Es;break;case"focusout":q="blur",G=Es;break;case"beforeblur":case"afterblur":G=Es;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Gg;break;case Sf:case kf:case Cf:G=zg;break;case Ef:G=Kg;break;case"scroll":G=jg;break;case"wheel":G=Jg;break;case"copy":case"cut":case"paste":G=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=nf}var Z=(t&4)!==0,Me=!Z&&e==="scroll",P=Z?M!==null?M+"Capture":null:M;Z=[];for(var k=j,_;k!==null;){_=k;var U=_.stateNode;if(_.tag===5&&U!==null&&(_=U,P!==null&&(U=ti(k,P),U!=null&&Z.push(xi(k,U,_)))),Me)break;k=k.return}0<Z.length&&(M=new G(M,q,null,r,F),$.push({event:M,listeners:Z}))}}if(!(t&7)){e:{if(M=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",M&&r!==as&&(q=r.relatedTarget||r.fromElement)&&(Hn(q)||q[Zt]))break e;if((G||M)&&(M=F.window===F?F:(M=F.ownerDocument)?M.defaultView||M.parentWindow:window,G?(q=r.relatedTarget||r.toElement,G=j,q=q?Hn(q):null,q!==null&&(Me=Bn(q),q!==Me||q.tag!==5&&q.tag!==6)&&(q=null)):(G=null,q=j),G!==q)){if(Z=ef,U="onMouseLeave",P="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Z=nf,U="onPointerLeave",P="onPointerEnter",k="pointer"),Me=G==null?M:kr(G),_=q==null?M:kr(q),M=new Z(U,k+"leave",G,r,F),M.target=Me,M.relatedTarget=_,U=null,Hn(F)===j&&(Z=new Z(P,k+"enter",q,r,F),Z.target=_,Z.relatedTarget=Me,U=Z),Me=U,G&&q)t:{for(Z=G,P=q,k=0,_=Z;_;_=xr(_))k++;for(_=0,U=P;U;U=xr(U))_++;for(;0<k-_;)Z=xr(Z),k--;for(;0<_-k;)P=xr(P),_--;for(;k--;){if(Z===P||P!==null&&Z===P.alternate)break t;Z=xr(Z),P=xr(P)}Z=null}else Z=null;G!==null&&Nf($,M,G,Z,!1),q!==null&&Me!==null&&Nf($,Me,q,Z,!0)}}e:{if(M=j?kr(j):window,G=M.nodeName&&M.nodeName.toLowerCase(),G==="select"||G==="input"&&M.type==="file")var te=o0;else if(uf(M))if(ff)te=u0;else{te=s0;var oe=a0}else(G=M.nodeName)&&G.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(te=l0);if(te&&(te=te(e,j))){cf($,te,r,F);break e}oe&&oe(e,M,j),e==="focusout"&&(oe=M._wrapperState)&&oe.controlled&&M.type==="number"&&ts(M,"number",M.value)}switch(oe=j?kr(j):window,e){case"focusin":(uf(oe)||oe.contentEditable==="true")&&(yr=oe,Ns=j,vi=null);break;case"focusout":vi=Ns=yr=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,wf($,r,F);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":wf($,r,F)}var ae;if(Ps)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else vr?sf(e,r)&&(ce="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ce="onCompositionStart");ce&&(rf&&r.locale!=="ko"&&(vr||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&vr&&(ae=Jc()):(wn=F,xs="value"in wn?wn.value:wn.textContent,vr=!0)),oe=Po(j,ce),0<oe.length&&(ce=new tf(ce,e,null,r,F),$.push({event:ce,listeners:oe}),ae?ce.data=ae:(ae=lf(r),ae!==null&&(ce.data=ae)))),(ae=e0?t0(e,r):n0(e,r))&&(j=Po(j,"onBeforeInput"),0<j.length&&(F=new tf("onBeforeInput","beforeinput",null,r,F),$.push({event:F,listeners:j}),F.data=ae))}Rf($,t)})}function xi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Po(e,t){for(var r=t+"Capture",o=[];e!==null;){var l=e,c=l.stateNode;l.tag===5&&c!==null&&(l=c,c=ti(e,r),c!=null&&o.unshift(xi(e,c,l)),c=ti(e,t),c!=null&&o.push(xi(e,c,l))),e=e.return}return o}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nf(e,t,r,o,l){for(var c=t._reactName,d=[];r!==null&&r!==o;){var v=r,S=v.alternate,j=v.stateNode;if(S!==null&&S===o)break;v.tag===5&&j!==null&&(v=j,l?(S=ti(r,c),S!=null&&d.unshift(xi(r,S,v))):l||(S=ti(r,c),S!=null&&d.push(xi(r,S,v)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var g0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function jf(e){return(typeof e=="string"?e:""+e).replace(g0,`
`).replace(v0,"")}function To(e,t,r){if(t=jf(t),jf(e)!==t&&r)throw Error(a(425))}function Ro(){}var Ms=null,Fs=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(e){return If.resolve(null).then(e).catch(x0)}:Ds;function x0(e){setTimeout(function(){throw e})}function Ws(e,t){var r=t,o=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(o===0){e.removeChild(l),ci(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=l}while(r);ci(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Sr,Si="__reactProps$"+Sr,Zt="__reactContainer$"+Sr,Us="__reactEvents$"+Sr,S0="__reactListeners$"+Sr,k0="__reactHandles$"+Sr;function Hn(e){var t=e[Wt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Zt]||r[Wt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Of(e);e!==null;){if(r=e[Wt])return r;e=Of(e)}return t}e=r,r=e.parentNode}return null}function ki(e){return e=e[Wt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function _o(e){return e[Si]||null}var Bs=[],Cr=-1;function kn(e){return{current:e}}function Pe(e){0>Cr||(e.current=Bs[Cr],Bs[Cr]=null,Cr--)}function Ee(e,t){Cr++,Bs[Cr]=e.current,e.current=t}var Cn={},et=kn(Cn),lt=kn(!1),Vn=Cn;function Er(e,t){var r=e.type.contextTypes;if(!r)return Cn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var l={},c;for(c in r)l[c]=t[c];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ut(e){return e=e.childContextTypes,e!=null}function No(){Pe(lt),Pe(et)}function Lf(e,t,r){if(et.current!==Cn)throw Error(a(168));Ee(et,t),Ee(lt,r)}function Af(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var l in o)if(!(l in t))throw Error(a(108,ge(e)||"Unknown",l));return X({},r,o)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Vn=et.current,Ee(et,e),Ee(lt,lt.current),!0}function zf(e,t,r){var o=e.stateNode;if(!o)throw Error(a(169));r?(e=Af(e,t,Vn),o.__reactInternalMemoizedMergedChildContext=e,Pe(lt),Pe(et),Ee(et,e)):Pe(lt),Ee(lt,r)}var en=null,Io=!1,Hs=!1;function Mf(e){en===null?en=[e]:en.push(e)}function C0(e){Io=!0,Mf(e)}function En(){if(!Hs&&en!==null){Hs=!0;var e=0,t=Ce;try{var r=en;for(Ce=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}en=null,Io=!1}catch(l){throw en!==null&&(en=en.slice(e+1)),Fc(ds,En),l}finally{Ce=t,Hs=!1}}return null}var br=[],Pr=0,Oo=null,Lo=0,kt=[],Ct=0,Yn=null,tn=1,nn="";function Xn(e,t){br[Pr++]=Lo,br[Pr++]=Oo,Oo=e,Lo=t}function Ff(e,t,r){kt[Ct++]=tn,kt[Ct++]=nn,kt[Ct++]=Yn,Yn=e;var o=tn;e=nn;var l=32-jt(o)-1;o&=~(1<<l),r+=1;var c=32-jt(t)+l;if(30<c){var d=l-l%5;c=(o&(1<<d)-1).toString(32),o>>=d,l-=d,tn=1<<32-jt(t)+l|r<<l|o,nn=c+e}else tn=1<<c|r<<l|o,nn=e}function Vs(e){e.return!==null&&(Xn(e,1),Ff(e,1,0))}function Ys(e){for(;e===Oo;)Oo=br[--Pr],br[Pr]=null,Lo=br[--Pr],br[Pr]=null;for(;e===Yn;)Yn=kt[--Ct],kt[Ct]=null,nn=kt[--Ct],kt[Ct]=null,tn=kt[--Ct],kt[Ct]=null}var vt=null,yt=null,_e=!1,Ot=null;function $f(e,t){var r=Tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Df(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vt=e,yt=null,!0):!1;default:return!1}}function Xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gs(e){if(_e){var t=yt;if(t){var r=t;if(!Df(e,t)){if(Xs(e))throw Error(a(418));t=Sn(r.nextSibling);var o=vt;t&&Df(e,t)?$f(o,r):(e.flags=e.flags&-4097|2,_e=!1,vt=e)}}else{if(Xs(e))throw Error(a(418));e.flags=e.flags&-4097|2,_e=!1,vt=e}}}function Wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Ao(e){if(e!==vt)return!1;if(!_e)return Wf(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=yt)){if(Xs(e))throw Uf(),Error(a(418));for(;t;)$f(e,t),t=Sn(t.nextSibling)}if(Wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yt=Sn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?Sn(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=yt;e;)e=Sn(e.nextSibling)}function Tr(){yt=vt=null,_e=!1}function Qs(e){Ot===null?Ot=[e]:Ot.push(e)}var E0=D.ReactCurrentBatchConfig;function Ci(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(a(309));var o=r.stateNode}if(!o)throw Error(a(147,e));var l=o,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var v=l.refs;d===null?delete v[c]:v[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bf(e){var t=e._init;return t(e._payload)}function Hf(e){function t(P,k){if(e){var _=P.deletions;_===null?(P.deletions=[k],P.flags|=16):_.push(k)}}function r(P,k){if(!e)return null;for(;k!==null;)t(P,k),k=k.sibling;return null}function o(P,k){for(P=new Map;k!==null;)k.key!==null?P.set(k.key,k):P.set(k.index,k),k=k.sibling;return P}function l(P,k){return P=In(P,k),P.index=0,P.sibling=null,P}function c(P,k,_){return P.index=_,e?(_=P.alternate,_!==null?(_=_.index,_<k?(P.flags|=2,k):_):(P.flags|=2,k)):(P.flags|=1048576,k)}function d(P){return e&&P.alternate===null&&(P.flags|=2),P}function v(P,k,_,U){return k===null||k.tag!==6?(k=Dl(_,P.mode,U),k.return=P,k):(k=l(k,_),k.return=P,k)}function S(P,k,_,U){var te=_.type;return te===Y?F(P,k,_.props.children,U,_.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===De&&Bf(te)===k.type)?(U=l(k,_.props),U.ref=Ci(P,k,_),U.return=P,U):(U=aa(_.type,_.key,_.props,null,P.mode,U),U.ref=Ci(P,k,_),U.return=P,U)}function j(P,k,_,U){return k===null||k.tag!==4||k.stateNode.containerInfo!==_.containerInfo||k.stateNode.implementation!==_.implementation?(k=Wl(_,P.mode,U),k.return=P,k):(k=l(k,_.children||[]),k.return=P,k)}function F(P,k,_,U,te){return k===null||k.tag!==7?(k=tr(_,P.mode,U,te),k.return=P,k):(k=l(k,_),k.return=P,k)}function $(P,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Dl(""+k,P.mode,_),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case V:return _=aa(k.type,k.key,k.props,null,P.mode,_),_.ref=Ci(P,null,k),_.return=P,_;case Q:return k=Wl(k,P.mode,_),k.return=P,k;case De:var U=k._init;return $(P,U(k._payload),_)}if(Jr(k)||J(k))return k=tr(k,P.mode,_,null),k.return=P,k;zo(P,k)}return null}function M(P,k,_,U){var te=k!==null?k.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return te!==null?null:v(P,k,""+_,U);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case V:return _.key===te?S(P,k,_,U):null;case Q:return _.key===te?j(P,k,_,U):null;case De:return te=_._init,M(P,k,te(_._payload),U)}if(Jr(_)||J(_))return te!==null?null:F(P,k,_,U,null);zo(P,_)}return null}function G(P,k,_,U,te){if(typeof U=="string"&&U!==""||typeof U=="number")return P=P.get(_)||null,v(k,P,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case V:return P=P.get(U.key===null?_:U.key)||null,S(k,P,U,te);case Q:return P=P.get(U.key===null?_:U.key)||null,j(k,P,U,te);case De:var oe=U._init;return G(P,k,_,oe(U._payload),te)}if(Jr(U)||J(U))return P=P.get(_)||null,F(k,P,U,te,null);zo(k,U)}return null}function q(P,k,_,U){for(var te=null,oe=null,ae=k,ce=k=0,Ge=null;ae!==null&&ce<_.length;ce++){ae.index>ce?(Ge=ae,ae=null):Ge=ae.sibling;var xe=M(P,ae,_[ce],U);if(xe===null){ae===null&&(ae=Ge);break}e&&ae&&xe.alternate===null&&t(P,ae),k=c(xe,k,ce),oe===null?te=xe:oe.sibling=xe,oe=xe,ae=Ge}if(ce===_.length)return r(P,ae),_e&&Xn(P,ce),te;if(ae===null){for(;ce<_.length;ce++)ae=$(P,_[ce],U),ae!==null&&(k=c(ae,k,ce),oe===null?te=ae:oe.sibling=ae,oe=ae);return _e&&Xn(P,ce),te}for(ae=o(P,ae);ce<_.length;ce++)Ge=G(ae,P,ce,_[ce],U),Ge!==null&&(e&&Ge.alternate!==null&&ae.delete(Ge.key===null?ce:Ge.key),k=c(Ge,k,ce),oe===null?te=Ge:oe.sibling=Ge,oe=Ge);return e&&ae.forEach(function(On){return t(P,On)}),_e&&Xn(P,ce),te}function Z(P,k,_,U){var te=J(_);if(typeof te!="function")throw Error(a(150));if(_=te.call(_),_==null)throw Error(a(151));for(var oe=te=null,ae=k,ce=k=0,Ge=null,xe=_.next();ae!==null&&!xe.done;ce++,xe=_.next()){ae.index>ce?(Ge=ae,ae=null):Ge=ae.sibling;var On=M(P,ae,xe.value,U);if(On===null){ae===null&&(ae=Ge);break}e&&ae&&On.alternate===null&&t(P,ae),k=c(On,k,ce),oe===null?te=On:oe.sibling=On,oe=On,ae=Ge}if(xe.done)return r(P,ae),_e&&Xn(P,ce),te;if(ae===null){for(;!xe.done;ce++,xe=_.next())xe=$(P,xe.value,U),xe!==null&&(k=c(xe,k,ce),oe===null?te=xe:oe.sibling=xe,oe=xe);return _e&&Xn(P,ce),te}for(ae=o(P,ae);!xe.done;ce++,xe=_.next())xe=G(ae,P,ce,xe.value,U),xe!==null&&(e&&xe.alternate!==null&&ae.delete(xe.key===null?ce:xe.key),k=c(xe,k,ce),oe===null?te=xe:oe.sibling=xe,oe=xe);return e&&ae.forEach(function(nv){return t(P,nv)}),_e&&Xn(P,ce),te}function Me(P,k,_,U){if(typeof _=="object"&&_!==null&&_.type===Y&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case V:e:{for(var te=_.key,oe=k;oe!==null;){if(oe.key===te){if(te=_.type,te===Y){if(oe.tag===7){r(P,oe.sibling),k=l(oe,_.props.children),k.return=P,P=k;break e}}else if(oe.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===De&&Bf(te)===oe.type){r(P,oe.sibling),k=l(oe,_.props),k.ref=Ci(P,oe,_),k.return=P,P=k;break e}r(P,oe);break}else t(P,oe);oe=oe.sibling}_.type===Y?(k=tr(_.props.children,P.mode,U,_.key),k.return=P,P=k):(U=aa(_.type,_.key,_.props,null,P.mode,U),U.ref=Ci(P,k,_),U.return=P,P=U)}return d(P);case Q:e:{for(oe=_.key;k!==null;){if(k.key===oe)if(k.tag===4&&k.stateNode.containerInfo===_.containerInfo&&k.stateNode.implementation===_.implementation){r(P,k.sibling),k=l(k,_.children||[]),k.return=P,P=k;break e}else{r(P,k);break}else t(P,k);k=k.sibling}k=Wl(_,P.mode,U),k.return=P,P=k}return d(P);case De:return oe=_._init,Me(P,k,oe(_._payload),U)}if(Jr(_))return q(P,k,_,U);if(J(_))return Z(P,k,_,U);zo(P,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,k!==null&&k.tag===6?(r(P,k.sibling),k=l(k,_),k.return=P,P=k):(r(P,k),k=Dl(_,P.mode,U),k.return=P,P=k),d(P)):r(P,k)}return Me}var Rr=Hf(!0),Vf=Hf(!1),Mo=kn(null),Fo=null,_r=null,Ks=null;function qs(){Ks=_r=Fo=null}function Js(e){var t=Mo.current;Pe(Mo),e._currentValue=t}function Zs(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Nr(e,t){Fo=e,Ks=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(Fo===null)throw Error(a(308));_r=e,Fo.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var Gn=null;function el(e){Gn===null?Gn=[e]:Gn.push(e)}function Yf(e,t,r,o){var l=t.interleaved;return l===null?(r.next=r,el(t)):(r.next=l.next,l.next=r),t.interleaved=r,rn(e,o)}function rn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var bn=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ve&2){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,rn(e,r)}return l=o.interleaved,l===null?(t.next=t,el(o)):(t.next=l.next,l.next=t),o.interleaved=t,rn(e,r)}function $o(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,ms(e,r)}}function Gf(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?l=c=d:c=c.next=d,r=r.next}while(r!==null);c===null?l=c=t:c=c.next=t}else l=c=t;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Do(e,t,r,o){var l=e.updateQueue;bn=!1;var c=l.firstBaseUpdate,d=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var S=v,j=S.next;S.next=null,d===null?c=j:d.next=j,d=S;var F=e.alternate;F!==null&&(F=F.updateQueue,v=F.lastBaseUpdate,v!==d&&(v===null?F.firstBaseUpdate=j:v.next=j,F.lastBaseUpdate=S))}if(c!==null){var $=l.baseState;d=0,F=j=S=null,v=c;do{var M=v.lane,G=v.eventTime;if((o&M)===M){F!==null&&(F=F.next={eventTime:G,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var q=e,Z=v;switch(M=t,G=r,Z.tag){case 1:if(q=Z.payload,typeof q=="function"){$=q.call(G,$,M);break e}$=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Z.payload,M=typeof q=="function"?q.call(G,$,M):q,M==null)break e;$=X({},$,M);break e;case 2:bn=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,M=l.effects,M===null?l.effects=[v]:M.push(v))}else G={eventTime:G,lane:M,tag:v.tag,payload:v.payload,callback:v.callback,next:null},F===null?(j=F=G,S=$):F=F.next=G,d|=M;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;M=v,v=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);if(F===null&&(S=$),l.baseState=S,l.firstBaseUpdate=j,l.lastBaseUpdate=F,t=l.shared.interleaved,t!==null){l=t;do d|=l.lane,l=l.next;while(l!==t)}else c===null&&(l.shared.lanes=0);qn|=d,e.lanes=d,e.memoizedState=$}}function Qf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],l=o.callback;if(l!==null){if(o.callback=null,o=r,typeof l!="function")throw Error(a(191,l));l.call(o)}}}var Ei={},Ut=kn(Ei),bi=kn(Ei),Pi=kn(Ei);function Qn(e){if(e===Ei)throw Error(a(174));return e}function nl(e,t){switch(Ee(Pi,t),Ee(bi,e),Ee(Ut,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}Pe(Ut),Ee(Ut,t)}function jr(){Pe(Ut),Pe(bi),Pe(Pi)}function Kf(e){Qn(Pi.current);var t=Qn(Ut.current),r=rs(t,e.type);t!==r&&(Ee(bi,e),Ee(Ut,r))}function rl(e){bi.current===e&&(Pe(Ut),Pe(bi))}var je=kn(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function ol(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Uo=D.ReactCurrentDispatcher,al=D.ReactCurrentBatchConfig,Kn=0,Ie=null,Be=null,Ye=null,Bo=!1,Ti=!1,Ri=0,b0=0;function tt(){throw Error(a(321))}function sl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!It(e[r],t[r]))return!1;return!0}function ll(e,t,r,o,l,c){if(Kn=c,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?_0:N0,e=r(o,l),Ti){c=0;do{if(Ti=!1,Ri=0,25<=c)throw Error(a(301));c+=1,Ye=Be=null,t.updateQueue=null,Uo.current=j0,e=r(o,l)}while(Ti)}if(Uo.current=Yo,t=Be!==null&&Be.next!==null,Kn=0,Ye=Be=Ie=null,Bo=!1,t)throw Error(a(300));return e}function ul(){var e=Ri!==0;return Ri=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ie.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function bt(){if(Be===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ye===null?Ie.memoizedState:Ye.next;if(t!==null)Ye=t,Be=e;else{if(e===null)throw Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?Ie.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function _i(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=bt(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=Be,l=o.baseQueue,c=r.pending;if(c!==null){if(l!==null){var d=l.next;l.next=c.next,c.next=d}o.baseQueue=l=c,r.pending=null}if(l!==null){c=l.next,o=o.baseState;var v=d=null,S=null,j=c;do{var F=j.lane;if((Kn&F)===F)S!==null&&(S=S.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:e(o,j.action);else{var $={lane:F,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};S===null?(v=S=$,d=o):S=S.next=$,Ie.lanes|=F,qn|=F}j=j.next}while(j!==null&&j!==c);S===null?d=o:S.next=v,It(o,t.memoizedState)||(ct=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=S,r.lastRenderedState=o}if(e=r.interleaved,e!==null){l=e;do c=l.lane,Ie.lanes|=c,qn|=c,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fl(e){var t=bt(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,l=r.pending,c=t.memoizedState;if(l!==null){r.pending=null;var d=l=l.next;do c=e(c,d.action),d=d.next;while(d!==l);It(c,t.memoizedState)||(ct=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,o]}function qf(){}function Jf(e,t){var r=Ie,o=bt(),l=t(),c=!It(o.memoizedState,l);if(c&&(o.memoizedState=l,ct=!0),o=o.queue,dl(td.bind(null,r,o,e),[e]),o.getSnapshot!==t||c||Ye!==null&&Ye.memoizedState.tag&1){if(r.flags|=2048,Ni(9,ed.bind(null,r,o,l,t),void 0,null),Xe===null)throw Error(a(349));Kn&30||Zf(r,t,l)}return l}function Zf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ed(e,t,r,o){t.value=r,t.getSnapshot=o,nd(t)&&rd(e)}function td(e,t,r){return r(function(){nd(t)&&rd(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!It(e,r)}catch{return!0}}function rd(e){var t=rn(e,1);t!==null&&Mt(t,e,1,-1)}function id(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=R0.bind(null,Ie,e),[t.memoizedState,e]}function Ni(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function od(){return bt().memoizedState}function Ho(e,t,r,o){var l=Bt();Ie.flags|=e,l.memoizedState=Ni(1|t,r,void 0,o===void 0?null:o)}function Vo(e,t,r,o){var l=bt();o=o===void 0?null:o;var c=void 0;if(Be!==null){var d=Be.memoizedState;if(c=d.destroy,o!==null&&sl(o,d.deps)){l.memoizedState=Ni(t,r,c,o);return}}Ie.flags|=e,l.memoizedState=Ni(1|t,r,c,o)}function ad(e,t){return Ho(8390656,8,e,t)}function dl(e,t){return Vo(2048,8,e,t)}function sd(e,t){return Vo(4,2,e,t)}function ld(e,t){return Vo(4,4,e,t)}function ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,r){return r=r!=null?r.concat([e]):null,Vo(4,4,ud.bind(null,t,e),r)}function pl(){}function fd(e,t){var r=bt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&sl(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function dd(e,t){var r=bt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&sl(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function pd(e,t,r){return Kn&21?(It(r,t)||(r=Uc(),Ie.lanes|=r,qn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=r)}function P0(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var o=al.transition;al.transition={};try{e(!1),t()}finally{Ce=r,al.transition=o}}function hd(){return bt().memoizedState}function T0(e,t,r){var o=Nn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},md(e))gd(t,r);else if(r=Yf(e,t,r,o),r!==null){var l=st();Mt(r,e,o,l),vd(r,t,o)}}function R0(e,t,r){var o=Nn(e),l={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(md(e))gd(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,v=c(d,r);if(l.hasEagerState=!0,l.eagerState=v,It(v,d)){var S=t.interleaved;S===null?(l.next=l,el(t)):(l.next=S.next,S.next=l),t.interleaved=l;return}}catch{}finally{}r=Yf(e,t,l,o),r!==null&&(l=st(),Mt(r,e,o,l),vd(r,t,o))}}function md(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function gd(e,t){Ti=Bo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vd(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,ms(e,r)}}var Yo={readContext:Et,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},_0={readContext:Et,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:ad,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ho(4194308,4,ud.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Bt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=T0.bind(null,Ie,e),[o.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:pl,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=P0.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Ie,l=Bt();if(_e){if(r===void 0)throw Error(a(407));r=r()}else{if(r=t(),Xe===null)throw Error(a(349));Kn&30||Zf(o,t,r)}l.memoizedState=r;var c={value:r,getSnapshot:t};return l.queue=c,ad(td.bind(null,o,c,e),[e]),o.flags|=2048,Ni(9,ed.bind(null,o,c,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Xe.identifierPrefix;if(_e){var r=nn,o=tn;r=(o&~(1<<32-jt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ri++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=b0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N0={readContext:Et,useCallback:fd,useContext:Et,useEffect:dl,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:ld,useMemo:dd,useReducer:cl,useRef:od,useState:function(){return cl(_i)},useDebugValue:pl,useDeferredValue:function(e){var t=bt();return pd(t,Be.memoizedState,e)},useTransition:function(){var e=cl(_i)[0],t=bt().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:Jf,useId:hd,unstable_isNewReconciler:!1},j0={readContext:Et,useCallback:fd,useContext:Et,useEffect:dl,useImperativeHandle:cd,useInsertionEffect:sd,useLayoutEffect:ld,useMemo:dd,useReducer:fl,useRef:od,useState:function(){return fl(_i)},useDebugValue:pl,useDeferredValue:function(e){var t=bt();return Be===null?t.memoizedState=e:pd(t,Be.memoizedState,e)},useTransition:function(){var e=fl(_i)[0],t=bt().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:Jf,useId:hd,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function hl(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=st(),l=Nn(e),c=on(o,l);c.payload=t,r!=null&&(c.callback=r),t=Pn(e,c,l),t!==null&&(Mt(t,e,l,o),$o(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=st(),l=Nn(e),c=on(o,l);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=Pn(e,c,l),t!==null&&(Mt(t,e,l,o),$o(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),o=Nn(e),l=on(r,o);l.tag=2,t!=null&&(l.callback=t),t=Pn(e,l,o),t!==null&&(Mt(t,e,o,r),$o(t,e,o))}};function yd(e,t,r,o,l,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,c,d):t.prototype&&t.prototype.isPureReactComponent?!gi(r,o)||!gi(l,c):!0}function wd(e,t,r){var o=!1,l=Cn,c=t.contextType;return typeof c=="object"&&c!==null?c=Et(c):(l=ut(t)?Vn:et.current,o=t.contextTypes,c=(o=o!=null)?Er(e,l):Cn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=c),t}function xd(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function ml(e,t,r,o){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},tl(e);var c=t.contextType;typeof c=="object"&&c!==null?l.context=Et(c):(c=ut(t)?Vn:et.current,l.context=Er(e,c)),l.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(hl(e,t,c,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Xo.enqueueReplaceState(l,l.state,null),Do(e,r,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var r="",o=t;do r+=de(o),o=o.return;while(o);var l=r}catch(c){l=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:l,digest:null}}function gl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function Sd(e,t,r){r=on(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ea||(ea=!0,Il=o),vl(e,t)},r}function kd(e,t,r){r=on(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=t.value;r.payload=function(){return o(l)},r.callback=function(){vl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){vl(e,t),typeof o!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Cd(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new I0;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(r)||(l.add(r),e=Y0.bind(null,e,t,r),t.then(e,e))}function Ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bd(e,t,r,o,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=on(-1,1),t.tag=2,Pn(r,t,1))),r.lanes|=1),e)}var O0=D.ReactCurrentOwner,ct=!1;function at(e,t,r,o){t.child=e===null?Vf(t,null,r,o):Rr(t,e.child,r,o)}function Pd(e,t,r,o,l){r=r.render;var c=t.ref;return Nr(t,l),o=ll(e,t,r,o,c,l),r=ul(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,an(e,t,l)):(_e&&r&&Vs(t),t.flags|=1,at(e,t,o,l),t.child)}function Td(e,t,r,o,l){if(e===null){var c=r.type;return typeof c=="function"&&!$l(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Rd(e,t,c,o,l)):(e=aa(r.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&l)){var d=c.memoizedProps;if(r=r.compare,r=r!==null?r:gi,r(d,o)&&e.ref===t.ref)return an(e,t,l)}return t.flags|=1,e=In(c,o),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,r,o,l){if(e!==null){var c=e.memoizedProps;if(gi(c,o)&&e.ref===t.ref)if(ct=!1,t.pendingProps=o=c,(e.lanes&l)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,an(e,t,l)}return yl(e,t,r,o,l)}function _d(e,t,r){var o=t.pendingProps,l=o.children,c=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Lr,wt),wt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Lr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=c!==null?c.baseLanes:r,Ee(Lr,wt),wt|=o}else c!==null?(o=c.baseLanes|r,t.memoizedState=null):o=r,Ee(Lr,wt),wt|=o;return at(e,t,l,r),t.child}function Nd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,r,o,l){var c=ut(r)?Vn:et.current;return c=Er(t,c),Nr(t,l),r=ll(e,t,r,o,c,l),o=ul(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,an(e,t,l)):(_e&&o&&Vs(t),t.flags|=1,at(e,t,r,l),t.child)}function jd(e,t,r,o,l){if(ut(r)){var c=!0;jo(t)}else c=!1;if(Nr(t,l),t.stateNode===null)Qo(e,t),wd(t,r,o),ml(t,r,o,l),o=!0;else if(e===null){var d=t.stateNode,v=t.memoizedProps;d.props=v;var S=d.context,j=r.contextType;typeof j=="object"&&j!==null?j=Et(j):(j=ut(r)?Vn:et.current,j=Er(t,j));var F=r.getDerivedStateFromProps,$=typeof F=="function"||typeof d.getSnapshotBeforeUpdate=="function";$||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==o||S!==j)&&xd(t,d,o,j),bn=!1;var M=t.memoizedState;d.state=M,Do(t,o,d,l),S=t.memoizedState,v!==o||M!==S||lt.current||bn?(typeof F=="function"&&(hl(t,r,F,o),S=t.memoizedState),(v=bn||yd(t,r,v,o,M,S,j))?($||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=S),d.props=o,d.state=S,d.context=j,o=v):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Xf(e,t),v=t.memoizedProps,j=t.type===t.elementType?v:Lt(t.type,v),d.props=j,$=t.pendingProps,M=d.context,S=r.contextType,typeof S=="object"&&S!==null?S=Et(S):(S=ut(r)?Vn:et.current,S=Er(t,S));var G=r.getDerivedStateFromProps;(F=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==$||M!==S)&&xd(t,d,o,S),bn=!1,M=t.memoizedState,d.state=M,Do(t,o,d,l);var q=t.memoizedState;v!==$||M!==q||lt.current||bn?(typeof G=="function"&&(hl(t,r,G,o),q=t.memoizedState),(j=bn||yd(t,r,j,o,M,q,S)||!1)?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,q,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,q,S)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=q),d.props=o,d.state=q,d.context=S,o=j):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),o=!1)}return wl(e,t,r,o,c,l)}function wl(e,t,r,o,l,c){Nd(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return l&&zf(t,r,!1),an(e,t,c);o=t.stateNode,O0.current=t;var v=d&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Rr(t,e.child,null,c),t.child=Rr(t,null,v,c)):at(e,t,v,c),t.memoizedState=o.state,l&&zf(t,r,!0),t.child}function Id(e){var t=e.stateNode;t.pendingContext?Lf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lf(e,t.context,!1),nl(e,t.containerInfo)}function Od(e,t,r,o,l){return Tr(),Qs(l),t.flags|=256,at(e,t,r,o),t.child}var xl={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,t,r){var o=t.pendingProps,l=je.current,c=!1,d=(t.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(l&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ee(je,l&1),e===null)return Gs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=o.children,e=o.fallback,c?(o=t.mode,c=t.child,d={mode:"hidden",children:d},!(o&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=sa(d,o,0,null),e=tr(e,o,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Sl(r),t.memoizedState=xl,e):kl(t,d));if(l=e.memoizedState,l!==null&&(v=l.dehydrated,v!==null))return L0(e,t,d,o,v,l,r);if(c){c=o.fallback,d=t.mode,l=e.child,v=l.sibling;var S={mode:"hidden",children:o.children};return!(d&1)&&t.child!==l?(o=t.child,o.childLanes=0,o.pendingProps=S,t.deletions=null):(o=In(l,S),o.subtreeFlags=l.subtreeFlags&14680064),v!==null?c=In(v,c):(c=tr(c,d,r,null),c.flags|=2),c.return=t,o.return=t,o.sibling=c,t.child=o,o=c,c=t.child,d=e.child.memoizedState,d=d===null?Sl(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~r,t.memoizedState=xl,o}return c=e.child,e=c.sibling,o=In(c,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function kl(e,t){return t=sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Go(e,t,r,o){return o!==null&&Qs(o),Rr(t,e.child,null,r),e=kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L0(e,t,r,o,l,c,d){if(r)return t.flags&256?(t.flags&=-257,o=gl(Error(a(422))),Go(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=o.fallback,l=t.mode,o=sa({mode:"visible",children:o.children},l,0,null),c=tr(c,l,d,null),c.flags|=2,o.return=t,c.return=t,o.sibling=c,t.child=o,t.mode&1&&Rr(t,e.child,null,d),t.child.memoizedState=Sl(d),t.memoizedState=xl,c);if(!(t.mode&1))return Go(e,t,d,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var v=o.dgst;return o=v,c=Error(a(419)),o=gl(c,o,void 0),Go(e,t,d,o)}if(v=(d&e.childLanes)!==0,ct||v){if(o=Xe,o!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(o.suspendedLanes|d)?0:l,l!==0&&l!==c.retryLane&&(c.retryLane=l,rn(e,l),Mt(o,e,l,-1))}return Fl(),o=gl(Error(a(421))),Go(e,t,d,o)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),l._reactRetry=t,null):(e=c.treeContext,yt=Sn(l.nextSibling),vt=t,_e=!0,Ot=null,e!==null&&(kt[Ct++]=tn,kt[Ct++]=nn,kt[Ct++]=Yn,tn=e.id,nn=e.overflow,Yn=t),t=kl(t,o.children),t.flags|=4096,t)}function Ad(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Zs(e.return,t,r)}function Cl(e,t,r,o,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=o,c.tail=r,c.tailMode=l)}function zd(e,t,r){var o=t.pendingProps,l=o.revealOrder,c=o.tail;if(at(e,t,o.children,r),o=je.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,r,t);else if(e.tag===19)Ad(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(je,o),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Wo(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Cl(t,!1,l,r,c);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Wo(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Cl(t,!0,r,null,c);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,r=In(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=In(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function A0(e,t,r){switch(t.tag){case 3:Id(t),Tr();break;case 5:Kf(t);break;case 1:ut(t.type)&&jo(t);break;case 4:nl(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,l=t.memoizedProps.value;Ee(Mo,o._currentValue),o._currentValue=l;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(je,je.current&1),t.flags|=128,null):r&t.child.childLanes?Ld(e,t,r):(Ee(je,je.current&1),e=an(e,t,r),e!==null?e.sibling:null);Ee(je,je.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return zd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ee(je,je.current),o)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,r)}return an(e,t,r)}var Md,El,Fd,$d;Md=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},El=function(){},Fd=function(e,t,r,o){var l=e.memoizedProps;if(l!==o){e=t.stateNode,Qn(Ut.current);var c=null;switch(r){case"input":l=Za(e,l),o=Za(e,o),c=[];break;case"select":l=X({},l,{value:void 0}),o=X({},o,{value:void 0}),c=[];break;case"textarea":l=ns(e,l),o=ns(e,o),c=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ro)}is(r,o);var d;r=null;for(j in l)if(!o.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var v=l[j];for(d in v)v.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(u.hasOwnProperty(j)?c||(c=[]):(c=c||[]).push(j,null));for(j in o){var S=o[j];if(v=l!=null?l[j]:void 0,o.hasOwnProperty(j)&&S!==v&&(S!=null||v!=null))if(j==="style")if(v){for(d in v)!v.hasOwnProperty(d)||S&&S.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in S)S.hasOwnProperty(d)&&v[d]!==S[d]&&(r||(r={}),r[d]=S[d])}else r||(c||(c=[]),c.push(j,r)),r=S;else j==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,v=v?v.__html:void 0,S!=null&&v!==S&&(c=c||[]).push(j,S)):j==="children"?typeof S!="string"&&typeof S!="number"||(c=c||[]).push(j,""+S):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(u.hasOwnProperty(j)?(S!=null&&j==="onScroll"&&be("scroll",e),c||v===S||(c=[])):(c=c||[]).push(j,S))}r&&(c=c||[]).push("style",r);var j=c;(t.updateQueue=j)&&(t.flags|=4)}},$d=function(e,t,r,o){r!==o&&(t.flags|=4)};function ji(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function z0(e,t,r){var o=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return ut(t.type)&&No(),nt(t),null;case 3:return o=t.stateNode,jr(),Pe(lt),Pe(et),ol(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(Al(Ot),Ot=null))),El(e,t),nt(t),null;case 5:rl(t);var l=Qn(Pi.current);if(r=t.type,e!==null&&t.stateNode!=null)Fd(e,t,r,o,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(a(166));return nt(t),null}if(e=Qn(Ut.current),Ao(t)){o=t.stateNode,r=t.type;var c=t.memoizedProps;switch(o[Wt]=t,o[Si]=c,e=(t.mode&1)!==0,r){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(l=0;l<yi.length;l++)be(yi[l],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":yc(o,c),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},be("invalid",o);break;case"textarea":Sc(o,c),be("invalid",o)}is(r,c),l=null;for(var d in c)if(c.hasOwnProperty(d)){var v=c[d];d==="children"?typeof v=="string"?o.textContent!==v&&(c.suppressHydrationWarning!==!0&&To(o.textContent,v,e),l=["children",v]):typeof v=="number"&&o.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&To(o.textContent,v,e),l=["children",""+v]):u.hasOwnProperty(d)&&v!=null&&d==="onScroll"&&be("scroll",o)}switch(r){case"input":Jt(o),xc(o,c,!0);break;case"textarea":Jt(o),Cc(o);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(o.onclick=Ro)}o=l,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ec(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(r,{is:o.is}):(e=d.createElement(r),r==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,r),e[Wt]=t,e[Si]=o,Md(e,t,!1,!1),t.stateNode=e;e:{switch(d=os(r,o),r){case"dialog":be("cancel",e),be("close",e),l=o;break;case"iframe":case"object":case"embed":be("load",e),l=o;break;case"video":case"audio":for(l=0;l<yi.length;l++)be(yi[l],e);l=o;break;case"source":be("error",e),l=o;break;case"img":case"image":case"link":be("error",e),be("load",e),l=o;break;case"details":be("toggle",e),l=o;break;case"input":yc(e,o),l=Za(e,o),be("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=X({},o,{value:void 0}),be("invalid",e);break;case"textarea":Sc(e,o),l=ns(e,o),be("invalid",e);break;default:l=o}is(r,l),v=l;for(c in v)if(v.hasOwnProperty(c)){var S=v[c];c==="style"?Tc(e,S):c==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&bc(e,S)):c==="children"?typeof S=="string"?(r!=="textarea"||S!=="")&&Zr(e,S):typeof S=="number"&&Zr(e,""+S):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?S!=null&&c==="onScroll"&&be("scroll",e):S!=null&&z(e,c,S,d))}switch(r){case"input":Jt(e),xc(e,o,!1);break;case"textarea":Jt(e),Cc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+he(o.value));break;case"select":e.multiple=!!o.multiple,c=o.value,c!=null?dr(e,!!o.multiple,c,!1):o.defaultValue!=null&&dr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ro)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)$d(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(a(166));if(r=Qn(Pi.current),Qn(Ut.current),Ao(t)){if(o=t.stateNode,r=t.memoizedProps,o[Wt]=t,(c=o.nodeValue!==r)&&(e=vt,e!==null))switch(e.tag){case 3:To(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(o.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Wt]=t,t.stateNode=o}return nt(t),null;case 13:if(Pe(je),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&yt!==null&&t.mode&1&&!(t.flags&128))Uf(),Tr(),t.flags|=98560,c=!1;else if(c=Ao(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Wt]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),c=!1}else Ot!==null&&(Al(Ot),Ot=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?He===0&&(He=3):Fl())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return jr(),El(e,t),e===null&&wi(t.stateNode.containerInfo),nt(t),null;case 10:return Js(t.type._context),nt(t),null;case 17:return ut(t.type)&&No(),nt(t),null;case 19:if(Pe(je),c=t.memoizedState,c===null)return nt(t),null;if(o=(t.flags&128)!==0,d=c.rendering,d===null)if(o)ji(c,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=Wo(e),d!==null){for(t.flags|=128,ji(c,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)c=r,e=o,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(je,je.current&1|2),t.child}e=e.sibling}c.tail!==null&&ze()>Ar&&(t.flags|=128,o=!0,ji(c,!1),t.lanes=4194304)}else{if(!o)if(e=Wo(d),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ji(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!_e)return nt(t),null}else 2*ze()-c.renderingStartTime>Ar&&r!==1073741824&&(t.flags|=128,o=!0,ji(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(r=c.last,r!==null?r.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ze(),t.sibling=null,r=je.current,Ee(je,o?r&1|2:r&1),t):(nt(t),null);case 22:case 23:return Ml(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?wt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function M0(e,t){switch(Ys(t),t.tag){case 1:return ut(t.type)&&No(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),Pe(lt),Pe(et),ol(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rl(t),null;case 13:if(Pe(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(je),null;case 4:return jr(),null;case 10:return Js(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Ko=!1,rt=!1,F0=typeof WeakSet=="function"?WeakSet:Set,K=null;function Or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Le(e,t,o)}else r.current=null}function bl(e,t,r){try{r()}catch(o){Le(e,t,o)}}var Dd=!1;function $0(e,t){if(Ms=go,e=yf(),_s(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var d=0,v=-1,S=-1,j=0,F=0,$=e,M=null;t:for(;;){for(var G;$!==r||l!==0&&$.nodeType!==3||(v=d+l),$!==c||o!==0&&$.nodeType!==3||(S=d+o),$.nodeType===3&&(d+=$.nodeValue.length),(G=$.firstChild)!==null;)M=$,$=G;for(;;){if($===e)break t;if(M===r&&++j===l&&(v=d),M===c&&++F===o&&(S=d),(G=$.nextSibling)!==null)break;$=M,M=$.parentNode}$=G}r=v===-1||S===-1?null:{start:v,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fs={focusedElem:e,selectionRange:r},go=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var q=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Z=q.memoizedProps,Me=q.memoizedState,P=t.stateNode,k=P.getSnapshotBeforeUpdate(t.elementType===t.type?Z:Lt(t.type,Z),Me);P.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(U){Le(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return q=Dd,Dd=!1,q}function Ii(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var c=l.destroy;l.destroy=void 0,c!==void 0&&bl(t,r,c)}l=l.next}while(l!==o)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Pl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[Si],delete t[Us],delete t[S0],delete t[k0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ud(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ro));else if(o!==4&&(e=e.child,e!==null))for(Tl(e,t,r),e=e.sibling;e!==null;)Tl(e,t,r),e=e.sibling}function Rl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Rl(e,t,r),e=e.sibling;e!==null;)Rl(e,t,r),e=e.sibling}var qe=null,At=!1;function Tn(e,t,r){for(r=r.child;r!==null;)Hd(e,t,r),r=r.sibling}function Hd(e,t,r){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(uo,r)}catch{}switch(r.tag){case 5:rt||Or(r,t);case 6:var o=qe,l=At;qe=null,Tn(e,t,r),qe=o,At=l,qe!==null&&(At?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(At?(e=qe,r=r.stateNode,e.nodeType===8?Ws(e.parentNode,r):e.nodeType===1&&Ws(e,r),ci(e)):Ws(qe,r.stateNode));break;case 4:o=qe,l=At,qe=r.stateNode.containerInfo,At=!0,Tn(e,t,r),qe=o,At=l;break;case 0:case 11:case 14:case 15:if(!rt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var c=l,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&bl(r,t,d),l=l.next}while(l!==o)}Tn(e,t,r);break;case 1:if(!rt&&(Or(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(v){Le(r,t,v)}Tn(e,t,r);break;case 21:Tn(e,t,r);break;case 22:r.mode&1?(rt=(o=rt)||r.memoizedState!==null,Tn(e,t,r),rt=o):Tn(e,t,r);break;default:Tn(e,t,r)}}function Vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new F0),t.forEach(function(o){var l=G0.bind(null,e,o);r.has(o)||(r.add(o),o.then(l,l))})}}function zt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o];try{var c=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 5:qe=v.stateNode,At=!1;break e;case 3:qe=v.stateNode.containerInfo,At=!0;break e;case 4:qe=v.stateNode.containerInfo,At=!0;break e}v=v.return}if(qe===null)throw Error(a(160));Hd(c,d,l),qe=null,At=!1;var S=l.alternate;S!==null&&(S.return=null),l.return=null}catch(j){Le(l,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}function Yd(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Ht(e),o&4){try{Ii(3,e,e.return),qo(3,e)}catch(Z){Le(e,e.return,Z)}try{Ii(5,e,e.return)}catch(Z){Le(e,e.return,Z)}}break;case 1:zt(t,e),Ht(e),o&512&&r!==null&&Or(r,r.return);break;case 5:if(zt(t,e),Ht(e),o&512&&r!==null&&Or(r,r.return),e.flags&32){var l=e.stateNode;try{Zr(l,"")}catch(Z){Le(e,e.return,Z)}}if(o&4&&(l=e.stateNode,l!=null)){var c=e.memoizedProps,d=r!==null?r.memoizedProps:c,v=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&wc(l,c),os(v,d);var j=os(v,c);for(d=0;d<S.length;d+=2){var F=S[d],$=S[d+1];F==="style"?Tc(l,$):F==="dangerouslySetInnerHTML"?bc(l,$):F==="children"?Zr(l,$):z(l,F,$,j)}switch(v){case"input":es(l,c);break;case"textarea":kc(l,c);break;case"select":var M=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!c.multiple;var G=c.value;G!=null?dr(l,!!c.multiple,G,!1):M!==!!c.multiple&&(c.defaultValue!=null?dr(l,!!c.multiple,c.defaultValue,!0):dr(l,!!c.multiple,c.multiple?[]:"",!1))}l[Si]=c}catch(Z){Le(e,e.return,Z)}}break;case 6:if(zt(t,e),Ht(e),o&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,c=e.memoizedProps;try{l.nodeValue=c}catch(Z){Le(e,e.return,Z)}}break;case 3:if(zt(t,e),Ht(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(Z){Le(e,e.return,Z)}break;case 4:zt(t,e),Ht(e);break;case 13:zt(t,e),Ht(e),l=e.child,l.flags&8192&&(c=l.memoizedState!==null,l.stateNode.isHidden=c,!c||l.alternate!==null&&l.alternate.memoizedState!==null||(jl=ze())),o&4&&Vd(e);break;case 22:if(F=r!==null&&r.memoizedState!==null,e.mode&1?(rt=(j=rt)||F,zt(t,e),rt=j):zt(t,e),Ht(e),o&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!F&&e.mode&1)for(K=e,F=e.child;F!==null;){for($=K=F;K!==null;){switch(M=K,G=M.child,M.tag){case 0:case 11:case 14:case 15:Ii(4,M,M.return);break;case 1:Or(M,M.return);var q=M.stateNode;if(typeof q.componentWillUnmount=="function"){o=M,r=M.return;try{t=o,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Z){Le(o,r,Z)}}break;case 5:Or(M,M.return);break;case 22:if(M.memoizedState!==null){Qd($);continue}}G!==null?(G.return=M,K=G):Qd($)}F=F.sibling}e:for(F=null,$=e;;){if($.tag===5){if(F===null){F=$;try{l=$.stateNode,j?(c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=$.stateNode,S=$.memoizedProps.style,d=S!=null&&S.hasOwnProperty("display")?S.display:null,v.style.display=Pc("display",d))}catch(Z){Le(e,e.return,Z)}}}else if($.tag===6){if(F===null)try{$.stateNode.nodeValue=j?"":$.memoizedProps}catch(Z){Le(e,e.return,Z)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===e)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===e)break e;for(;$.sibling===null;){if($.return===null||$.return===e)break e;F===$&&(F=null),$=$.return}F===$&&(F=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:zt(t,e),Ht(e),o&4&&Vd(e);break;case 21:break;default:zt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ud(r)){var o=r;break e}r=r.return}throw Error(a(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Zr(l,""),o.flags&=-33);var c=Bd(e);Rl(e,c,l);break;case 3:case 4:var d=o.stateNode.containerInfo,v=Bd(e);Tl(e,v,d);break;default:throw Error(a(161))}}catch(S){Le(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D0(e,t,r){K=e,Xd(e)}function Xd(e,t,r){for(var o=(e.mode&1)!==0;K!==null;){var l=K,c=l.child;if(l.tag===22&&o){var d=l.memoizedState!==null||Ko;if(!d){var v=l.alternate,S=v!==null&&v.memoizedState!==null||rt;v=Ko;var j=rt;if(Ko=d,(rt=S)&&!j)for(K=l;K!==null;)d=K,S=d.child,d.tag===22&&d.memoizedState!==null?Kd(l):S!==null?(S.return=d,K=S):Kd(l);for(;c!==null;)K=c,Xd(c),c=c.sibling;K=l,Ko=v,rt=j}Gd(e)}else l.subtreeFlags&8772&&c!==null?(c.return=l,K=c):Gd(e)}}function Gd(e){for(;K!==null;){var t=K;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||qo(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!rt)if(r===null)o.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Lt(t.type,r.memoizedProps);o.componentDidUpdate(l,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Qf(t,c,o);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Qf(t,d,r)}break;case 5:var v=t.stateNode;if(r===null&&t.flags&4){r=v;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&r.focus();break;case"img":S.src&&(r.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var F=j.memoizedState;if(F!==null){var $=F.dehydrated;$!==null&&ci($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}rt||t.flags&512&&Pl(t)}catch(M){Le(t,t.return,M)}}if(t===e){K=null;break}if(r=t.sibling,r!==null){r.return=t.return,K=r;break}K=t.return}}function Qd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var r=t.sibling;if(r!==null){r.return=t.return,K=r;break}K=t.return}}function Kd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{qo(4,t)}catch(S){Le(t,r,S)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var l=t.return;try{o.componentDidMount()}catch(S){Le(t,l,S)}}var c=t.return;try{Pl(t)}catch(S){Le(t,c,S)}break;case 5:var d=t.return;try{Pl(t)}catch(S){Le(t,d,S)}}}catch(S){Le(t,t.return,S)}if(t===e){K=null;break}var v=t.sibling;if(v!==null){v.return=t.return,K=v;break}K=t.return}}var W0=Math.ceil,Jo=D.ReactCurrentDispatcher,_l=D.ReactCurrentOwner,Pt=D.ReactCurrentBatchConfig,ve=0,Xe=null,We=null,Je=0,wt=0,Lr=kn(0),He=0,Oi=null,qn=0,Zo=0,Nl=0,Li=null,ft=null,jl=0,Ar=1/0,sn=null,ea=!1,Il=null,Rn=null,ta=!1,_n=null,na=0,Ai=0,Ol=null,ra=-1,ia=0;function st(){return ve&6?ze():ra!==-1?ra:ra=ze()}function Nn(e){return e.mode&1?ve&2&&Je!==0?Je&-Je:E0.transition!==null?(ia===0&&(ia=Uc()),ia):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function Mt(e,t,r,o){if(50<Ai)throw Ai=0,Ol=null,Error(a(185));oi(e,r,o),(!(ve&2)||e!==Xe)&&(e===Xe&&(!(ve&2)&&(Zo|=r),He===4&&jn(e,Je)),dt(e,o),r===1&&ve===0&&!(t.mode&1)&&(Ar=ze()+500,Io&&En()))}function dt(e,t){var r=e.callbackNode;Eg(e,t);var o=po(e,e===Xe?Je:0);if(o===0)r!==null&&$c(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&$c(r),t===1)e.tag===0?C0(Jd.bind(null,e)):Mf(Jd.bind(null,e)),w0(function(){!(ve&6)&&En()}),r=null;else{switch(Bc(o)){case 1:r=ds;break;case 4:r=Dc;break;case 16:r=lo;break;case 536870912:r=Wc;break;default:r=lo}r=ap(r,qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qd(e,t){if(ra=-1,ia=0,ve&6)throw Error(a(327));var r=e.callbackNode;if(zr()&&e.callbackNode!==r)return null;var o=po(e,e===Xe?Je:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=oa(e,o);else{t=o;var l=ve;ve|=2;var c=ep();(Xe!==e||Je!==t)&&(sn=null,Ar=ze()+500,Zn(e,t));do try{H0();break}catch(v){Zd(e,v)}while(!0);qs(),Jo.current=c,ve=l,We!==null?t=0:(Xe=null,Je=0,t=He)}if(t!==0){if(t===2&&(l=ps(e),l!==0&&(o=l,t=Ll(e,l))),t===1)throw r=Oi,Zn(e,0),jn(e,o),dt(e,ze()),r;if(t===6)jn(e,o);else{if(l=e.current.alternate,!(o&30)&&!U0(l)&&(t=oa(e,o),t===2&&(c=ps(e),c!==0&&(o=c,t=Ll(e,c))),t===1))throw r=Oi,Zn(e,0),jn(e,o),dt(e,ze()),r;switch(e.finishedWork=l,e.finishedLanes=o,t){case 0:case 1:throw Error(a(345));case 2:er(e,ft,sn);break;case 3:if(jn(e,o),(o&130023424)===o&&(t=jl+500-ze(),10<t)){if(po(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){st(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ds(er.bind(null,e,ft,sn),t);break}er(e,ft,sn);break;case 4:if(jn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,l=-1;0<o;){var d=31-jt(o);c=1<<d,d=t[d],d>l&&(l=d),o&=~c}if(o=l,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*W0(o/1960))-o,10<o){e.timeoutHandle=Ds(er.bind(null,e,ft,sn),o);break}er(e,ft,sn);break;case 5:er(e,ft,sn);break;default:throw Error(a(329))}}}return dt(e,ze()),e.callbackNode===r?qd.bind(null,e):null}function Ll(e,t){var r=Li;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=oa(e,t),e!==2&&(t=ft,ft=r,t!==null&&Al(t)),e}function Al(e){ft===null?ft=e:ft.push.apply(ft,e)}function U0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var l=r[o],c=l.getSnapshot;l=l.value;try{if(!It(c(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~Nl,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),o=1<<r;e[r]=-1,t&=~o}}function Jd(e){if(ve&6)throw Error(a(327));zr();var t=po(e,0);if(!(t&1))return dt(e,ze()),null;var r=oa(e,t);if(e.tag!==0&&r===2){var o=ps(e);o!==0&&(t=o,r=Ll(e,o))}if(r===1)throw r=Oi,Zn(e,0),jn(e,t),dt(e,ze()),r;if(r===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,ft,sn),dt(e,ze()),null}function zl(e,t){var r=ve;ve|=1;try{return e(t)}finally{ve=r,ve===0&&(Ar=ze()+500,Io&&En())}}function Jn(e){_n!==null&&_n.tag===0&&!(ve&6)&&zr();var t=ve;ve|=1;var r=Pt.transition,o=Ce;try{if(Pt.transition=null,Ce=1,e)return e()}finally{Ce=o,Pt.transition=r,ve=t,!(ve&6)&&En()}}function Ml(){wt=Lr.current,Pe(Lr)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,y0(r)),We!==null)for(r=We.return;r!==null;){var o=r;switch(Ys(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&No();break;case 3:jr(),Pe(lt),Pe(et),ol();break;case 5:rl(o);break;case 4:jr();break;case 13:Pe(je);break;case 19:Pe(je);break;case 10:Js(o.type._context);break;case 22:case 23:Ml()}r=r.return}if(Xe=e,We=e=In(e.current,null),Je=wt=t,He=0,Oi=null,Nl=Zo=qn=0,ft=Li=null,Gn!==null){for(t=0;t<Gn.length;t++)if(r=Gn[t],o=r.interleaved,o!==null){r.interleaved=null;var l=o.next,c=r.pending;if(c!==null){var d=c.next;c.next=l,o.next=d}r.pending=o}Gn=null}return e}function Zd(e,t){do{var r=We;try{if(qs(),Uo.current=Yo,Bo){for(var o=Ie.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Bo=!1}if(Kn=0,Ye=Be=Ie=null,Ti=!1,Ri=0,_l.current=null,r===null||r.return===null){He=1,Oi=t,We=null;break}e:{var c=e,d=r.return,v=r,S=t;if(t=Je,v.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var j=S,F=v,$=F.tag;if(!(F.mode&1)&&($===0||$===11||$===15)){var M=F.alternate;M?(F.updateQueue=M.updateQueue,F.memoizedState=M.memoizedState,F.lanes=M.lanes):(F.updateQueue=null,F.memoizedState=null)}var G=Ed(d);if(G!==null){G.flags&=-257,bd(G,d,v,c,t),G.mode&1&&Cd(c,j,t),t=G,S=j;var q=t.updateQueue;if(q===null){var Z=new Set;Z.add(S),t.updateQueue=Z}else q.add(S);break e}else{if(!(t&1)){Cd(c,j,t),Fl();break e}S=Error(a(426))}}else if(_e&&v.mode&1){var Me=Ed(d);if(Me!==null){!(Me.flags&65536)&&(Me.flags|=256),bd(Me,d,v,c,t),Qs(Ir(S,v));break e}}c=S=Ir(S,v),He!==4&&(He=2),Li===null?Li=[c]:Li.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var P=Sd(c,S,t);Gf(c,P);break e;case 1:v=S;var k=c.type,_=c.stateNode;if(!(c.flags&128)&&(typeof k.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Rn===null||!Rn.has(_)))){c.flags|=65536,t&=-t,c.lanes|=t;var U=kd(c,v,t);Gf(c,U);break e}}c=c.return}while(c!==null)}np(r)}catch(te){t=te,We===r&&r!==null&&(We=r=r.return);continue}break}while(!0)}function ep(){var e=Jo.current;return Jo.current=Yo,e===null?Yo:e}function Fl(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(qn&268435455)&&!(Zo&268435455)||jn(Xe,Je)}function oa(e,t){var r=ve;ve|=2;var o=ep();(Xe!==e||Je!==t)&&(sn=null,Zn(e,t));do try{B0();break}catch(l){Zd(e,l)}while(!0);if(qs(),ve=r,Jo.current=o,We!==null)throw Error(a(261));return Xe=null,Je=0,He}function B0(){for(;We!==null;)tp(We)}function H0(){for(;We!==null&&!mg();)tp(We)}function tp(e){var t=op(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?np(e):We=t,_l.current=null}function np(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=M0(r,t),r!==null){r.flags&=32767,We=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,We=null;return}}else if(r=z0(r,t,wt),r!==null){We=r;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);He===0&&(He=5)}function er(e,t,r){var o=Ce,l=Pt.transition;try{Pt.transition=null,Ce=1,V0(e,t,r,o)}finally{Pt.transition=l,Ce=o}return null}function V0(e,t,r,o){do zr();while(_n!==null);if(ve&6)throw Error(a(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(bg(e,c),e===Xe&&(We=Xe=null,Je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ta||(ta=!0,ap(lo,function(){return zr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=Pt.transition,Pt.transition=null;var d=Ce;Ce=1;var v=ve;ve|=4,_l.current=null,$0(e,r),Yd(r,e),f0(Fs),go=!!Ms,Fs=Ms=null,e.current=r,D0(r),gg(),ve=v,Ce=d,Pt.transition=c}else e.current=r;if(ta&&(ta=!1,_n=e,na=l),c=e.pendingLanes,c===0&&(Rn=null),wg(r.stateNode),dt(e,ze()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],o(l.value,{componentStack:l.stack,digest:l.digest});if(ea)throw ea=!1,e=Il,Il=null,e;return na&1&&e.tag!==0&&zr(),c=e.pendingLanes,c&1?e===Ol?Ai++:(Ai=0,Ol=e):Ai=0,En(),null}function zr(){if(_n!==null){var e=Bc(na),t=Pt.transition,r=Ce;try{if(Pt.transition=null,Ce=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,na=0,ve&6)throw Error(a(331));var l=ve;for(ve|=4,K=e.current;K!==null;){var c=K,d=c.child;if(K.flags&16){var v=c.deletions;if(v!==null){for(var S=0;S<v.length;S++){var j=v[S];for(K=j;K!==null;){var F=K;switch(F.tag){case 0:case 11:case 15:Ii(8,F,c)}var $=F.child;if($!==null)$.return=F,K=$;else for(;K!==null;){F=K;var M=F.sibling,G=F.return;if(Wd(F),F===j){K=null;break}if(M!==null){M.return=G,K=M;break}K=G}}}var q=c.alternate;if(q!==null){var Z=q.child;if(Z!==null){q.child=null;do{var Me=Z.sibling;Z.sibling=null,Z=Me}while(Z!==null)}}K=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,K=d;else e:for(;K!==null;){if(c=K,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Ii(9,c,c.return)}var P=c.sibling;if(P!==null){P.return=c.return,K=P;break e}K=c.return}}var k=e.current;for(K=k;K!==null;){d=K;var _=d.child;if(d.subtreeFlags&2064&&_!==null)_.return=d,K=_;else e:for(d=k;K!==null;){if(v=K,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:qo(9,v)}}catch(te){Le(v,v.return,te)}if(v===d){K=null;break e}var U=v.sibling;if(U!==null){U.return=v.return,K=U;break e}K=v.return}}if(ve=l,En(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(uo,e)}catch{}o=!0}return o}finally{Ce=r,Pt.transition=t}}return!1}function rp(e,t,r){t=Ir(r,t),t=Sd(e,t,1),e=Pn(e,t,1),t=st(),e!==null&&(oi(e,1,t),dt(e,t))}function Le(e,t,r){if(e.tag===3)rp(e,e,r);else for(;t!==null;){if(t.tag===3){rp(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Rn===null||!Rn.has(o))){e=Ir(r,e),e=kd(t,e,1),t=Pn(t,e,1),e=st(),t!==null&&(oi(t,1,e),dt(t,e));break}}t=t.return}}function Y0(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Xe===e&&(Je&r)===r&&(He===4||He===3&&(Je&130023424)===Je&&500>ze()-jl?Zn(e,0):Nl|=r),dt(e,t)}function ip(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var r=st();e=rn(e,t),e!==null&&(oi(e,t,r),dt(e,r))}function X0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ip(e,r)}function G0(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(a(314))}o!==null&&o.delete(t),ip(e,r)}var op;op=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)ct=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ct=!1,A0(e,t,r);ct=!!(e.flags&131072)}else ct=!1,_e&&t.flags&1048576&&Ff(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Qo(e,t),e=t.pendingProps;var l=Er(t,et.current);Nr(t,r),l=ll(null,t,o,e,l,r);var c=ul();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(o)?(c=!0,jo(t)):c=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,tl(t),l.updater=Xo,t.stateNode=l,l._reactInternals=t,ml(t,o,e,r),t=wl(null,t,o,!0,c,r)):(t.tag=0,_e&&c&&Vs(t),at(null,t,l,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=K0(o),e=Lt(o,e),l){case 0:t=yl(null,t,o,e,r);break e;case 1:t=jd(null,t,o,e,r);break e;case 11:t=Pd(null,t,o,e,r);break e;case 14:t=Td(null,t,o,Lt(o.type,e),r);break e}throw Error(a(306,o,""))}return t;case 0:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Lt(o,l),yl(e,t,o,l,r);case 1:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Lt(o,l),jd(e,t,o,l,r);case 3:e:{if(Id(t),e===null)throw Error(a(387));o=t.pendingProps,c=t.memoizedState,l=c.element,Xf(e,t),Do(t,o,null,r);var d=t.memoizedState;if(o=d.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){l=Ir(Error(a(423)),t),t=Od(e,t,o,r,l);break e}else if(o!==l){l=Ir(Error(a(424)),t),t=Od(e,t,o,r,l);break e}else for(yt=Sn(t.stateNode.containerInfo.firstChild),vt=t,_e=!0,Ot=null,r=Vf(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Tr(),o===l){t=an(e,t,r);break e}at(e,t,o,r)}t=t.child}return t;case 5:return Kf(t),e===null&&Gs(t),o=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,d=l.children,$s(o,l)?d=null:c!==null&&$s(o,c)&&(t.flags|=32),Nd(e,t),at(e,t,d,r),t.child;case 6:return e===null&&Gs(t),null;case 13:return Ld(e,t,r);case 4:return nl(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Rr(t,null,o,r):at(e,t,o,r),t.child;case 11:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Lt(o,l),Pd(e,t,o,l,r);case 7:return at(e,t,t.pendingProps,r),t.child;case 8:return at(e,t,t.pendingProps.children,r),t.child;case 12:return at(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,l=t.pendingProps,c=t.memoizedProps,d=l.value,Ee(Mo,o._currentValue),o._currentValue=d,c!==null)if(It(c.value,d)){if(c.children===l.children&&!lt.current){t=an(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){d=c.child;for(var S=v.firstContext;S!==null;){if(S.context===o){if(c.tag===1){S=on(-1,r&-r),S.tag=2;var j=c.updateQueue;if(j!==null){j=j.shared;var F=j.pending;F===null?S.next=S:(S.next=F.next,F.next=S),j.pending=S}}c.lanes|=r,S=c.alternate,S!==null&&(S.lanes|=r),Zs(c.return,r,t),v.lanes|=r;break}S=S.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(a(341));d.lanes|=r,v=d.alternate,v!==null&&(v.lanes|=r),Zs(d,r,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}at(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,o=t.pendingProps.children,Nr(t,r),l=Et(l),o=o(l),t.flags|=1,at(e,t,o,r),t.child;case 14:return o=t.type,l=Lt(o,t.pendingProps),l=Lt(o.type,l),Td(e,t,o,l,r);case 15:return Rd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Lt(o,l),Qo(e,t),t.tag=1,ut(o)?(e=!0,jo(t)):e=!1,Nr(t,r),wd(t,o,l),ml(t,o,l,r),wl(null,t,o,!0,e,r);case 19:return zd(e,t,r);case 22:return _d(e,t,r)}throw Error(a(156,t.tag))};function ap(e,t){return Fc(e,t)}function Q0(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,r,o){return new Q0(e,t,r,o)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===Ze)return 14}return 2}function In(e,t){var r=e.alternate;return r===null?(r=Tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function aa(e,t,r,o,l,c){var d=2;if(o=e,typeof e=="function")$l(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Y:return tr(r.children,l,c,t);case se:d=8,l|=8;break;case le:return e=Tt(12,r,t,l|2),e.elementType=le,e.lanes=c,e;case Fe:return e=Tt(13,r,t,l),e.elementType=Fe,e.lanes=c,e;case $e:return e=Tt(19,r,t,l),e.elementType=$e,e.lanes=c,e;case Se:return sa(r,l,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:d=10;break e;case Ve:d=9;break e;case Ne:d=11;break e;case Ze:d=14;break e;case De:d=16,o=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=Tt(d,r,t,l),t.elementType=e,t.type=o,t.lanes=c,t}function tr(e,t,r,o){return e=Tt(7,e,o,t),e.lanes=r,e}function sa(e,t,r,o){return e=Tt(22,e,o,t),e.elementType=Se,e.lanes=r,e.stateNode={isHidden:!1},e}function Dl(e,t,r){return e=Tt(6,e,null,t),e.lanes=r,e}function Wl(e,t,r){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function q0(e,t,r,o,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ul(e,t,r,o,l,c,d,v,S){return e=new q0(e,t,r,v,S),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Tt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(c),e}function J0(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function sp(e){if(!e)return Cn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var r=e.type;if(ut(r))return Af(e,r,t)}return t}function lp(e,t,r,o,l,c,d,v,S){return e=Ul(r,o,!0,e,l,c,d,v,S),e.context=sp(null),r=e.current,o=st(),l=Nn(r),c=on(o,l),c.callback=t??null,Pn(r,c,l),e.current.lanes=l,oi(e,l,o),dt(e,o),e}function la(e,t,r,o){var l=t.current,c=st(),d=Nn(l);return r=sp(r),t.context===null?t.context=r:t.pendingContext=r,t=on(c,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Pn(l,t,d),e!==null&&(Mt(e,l,d,c),$o(e,l,d)),d}function ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bl(e,t){up(e,t),(e=e.alternate)&&up(e,t)}var cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}ca.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));la(e,t,null,null)},ca.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){la(null,e,null,null)}),t[Zt]=null}};function ca(e){this._internalRoot=e}ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yn.length&&t!==0&&t<yn[r].priority;r++);yn.splice(r,0,e),r===0&&Qc(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Z0(e,t,r,o,l){if(l){if(typeof o=="function"){var c=o;o=function(){var j=ua(d);c.call(j)}}var d=lp(t,o,e,0,null,!1,!1,"",fp);return e._reactRootContainer=d,e[Zt]=d.current,wi(e.nodeType===8?e.parentNode:e),Jn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var v=o;o=function(){var j=ua(S);v.call(j)}}var S=Ul(e,0,!1,null,null,!1,!1,"",fp);return e._reactRootContainer=S,e[Zt]=S.current,wi(e.nodeType===8?e.parentNode:e),Jn(function(){la(t,S,r,o)}),S}function da(e,t,r,o,l){var c=r._reactRootContainer;if(c){var d=c;if(typeof l=="function"){var v=l;l=function(){var S=ua(d);v.call(S)}}la(t,d,e,l)}else d=Z0(r,t,e,l,o);return ua(d)}Hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ii(t.pendingLanes);r!==0&&(ms(t,r|1),dt(t,ze()),!(ve&6)&&(Ar=ze()+500,En()))}break;case 13:Jn(function(){var o=rn(e,1);if(o!==null){var l=st();Mt(o,e,1,l)}}),Bl(e,1)}},gs=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var r=st();Mt(t,e,134217728,r)}Bl(e,134217728)}},Vc=function(e){if(e.tag===13){var t=Nn(e),r=rn(e,t);if(r!==null){var o=st();Mt(r,e,t,o)}Bl(e,t)}},Yc=function(){return Ce},Xc=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}},ls=function(e,t,r){switch(t){case"input":if(es(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var l=_o(o);if(!l)throw Error(a(90));Nt(o),es(o,l)}}}break;case"textarea":kc(e,r);break;case"select":t=r.value,t!=null&&dr(e,!!r.multiple,t,!1)}},jc=zl,Ic=Jn;var ev={usingClientEntryPoint:!1,Events:[ki,kr,_o,_c,Nc,zl]},zi={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{uo=pa.inject(tv),Dt=pa}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev,pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(a(200));return J0(e,t,null,r)},pt.createRoot=function(e,t){if(!Vl(e))throw Error(a(299));var r=!1,o="",l=cp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ul(e,1,!1,null,null,r,!1,o,l),e[Zt]=t.current,wi(e.nodeType===8?e.parentNode:e),new Hl(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=zc(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return Jn(e)},pt.hydrate=function(e,t,r){if(!fa(t))throw Error(a(200));return da(null,e,t,!0,r)},pt.hydrateRoot=function(e,t,r){if(!Vl(e))throw Error(a(405));var o=r!=null&&r.hydratedSources||null,l=!1,c="",d=cp;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=lp(t,null,e,1,r??null,l,!1,c,d),e[Zt]=t.current,wi(e),o)for(e=0;e<o.length;e++)r=o[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new ca(t)},pt.render=function(e,t,r){if(!fa(t))throw Error(a(200));return da(null,e,t,!1,r)},pt.unmountComponentAtNode=function(e){if(!fa(e))throw Error(a(40));return e._reactRootContainer?(Jn(function(){da(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},pt.unstable_batchedUpdates=zl,pt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!fa(r))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return da(e,t,r,!1,o)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var xp;function pv(){if(xp)return Gl.exports;xp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Gl.exports=dv(),Gl.exports}var Sp;function hv(){if(Sp)return ha;Sp=1;var n=pv();return ha.createRoot=n.createRoot,ha.hydrateRoot=n.hydrateRoot,ha}var mv=hv();const gv=Vu(mv);var Fi={},kp;function vv(){if(kp)return Fi;kp=1,Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.parse=p,Fi.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function p(w,T){const R=new f,I=w.length;if(I<2)return R;const O=(T==null?void 0:T.decode)||y;let L=0;do{const N=w.indexOf("=",L);if(N===-1)break;const z=w.indexOf(";",L),D=z===-1?I:z;if(N>D){L=w.lastIndexOf(";",N-1)+1;continue}const V=h(w,L,N),Q=m(w,N,V),Y=w.slice(V,Q);if(R[Y]===void 0){let se=h(w,N+1,D),le=m(w,D,se);const ye=O(w.slice(se,le));R[Y]=ye}L=D+1}while(L<I);return R}function h(w,T,R){do{const I=w.charCodeAt(T);if(I!==32&&I!==9)return T}while(++T<R);return R}function m(w,T,R){for(;T>R;){const I=w.charCodeAt(--T);if(I!==32&&I!==9)return T+1}return R}function g(w,T,R){const I=(R==null?void 0:R.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const O=I(T);if(!i.test(O))throw new TypeError(`argument val is invalid: ${T}`);let L=w+"="+O;if(!R)return L;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);L+="; Max-Age="+R.maxAge}if(R.domain){if(!a.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);L+="; Domain="+R.domain}if(R.path){if(!s.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);L+="; Path="+R.path}if(R.expires){if(!C(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);L+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(L+="; HttpOnly"),R.secure&&(L+="; Secure"),R.partitioned&&(L+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return L}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function C(w){return u.call(w)==="[object Date]"}return Fi}vv();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cp="popstate";function yv(n={}){function i(s,u){let{pathname:f,search:p,hash:h}=s.location;return hu("",{pathname:f,search:p,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(s,u){return typeof u=="string"?u:Vi(u)}return xv(i,a,null,n)}function Oe(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Qt(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function wv(){return Math.random().toString(36).substring(2,10)}function Ep(n,i){return{usr:n.state,key:n.key,idx:i}}function hu(n,i,a=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Gr(i):i,state:a,key:i&&i.key||s||wv()}}function Vi({pathname:n="/",search:i="",hash:a=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Gr(n){let i={};if(n){let a=n.indexOf("#");a>=0&&(i.hash=n.substring(a),n=n.substring(0,a));let s=n.indexOf("?");s>=0&&(i.search=n.substring(s),n=n.substring(0,s)),n&&(i.pathname=n)}return i}function xv(n,i,a,s={}){let{window:u=document.defaultView,v5Compat:f=!1}=s,p=u.history,h="POP",m=null,g=y();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function y(){return(p.state||{idx:null}).idx}function C(){h="POP";let O=y(),L=O==null?null:O-g;g=O,m&&m({action:h,location:I.location,delta:L})}function w(O,L){h="PUSH";let N=hu(I.location,O,L);g=y()+1;let z=Ep(N,g),D=I.createHref(N);try{p.pushState(z,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;u.location.assign(D)}f&&m&&m({action:h,location:I.location,delta:1})}function T(O,L){h="REPLACE";let N=hu(I.location,O,L);g=y();let z=Ep(N,g),D=I.createHref(N);p.replaceState(z,"",D),f&&m&&m({action:h,location:I.location,delta:0})}function R(O){let L=u.location.origin!=="null"?u.location.origin:u.location.href,N=typeof O=="string"?O:Vi(O);return N=N.replace(/ $/,"%20"),Oe(L,`No window.location.(origin|href) available to create URL for href: ${N}`),new URL(N,L)}let I={get action(){return h},get location(){return n(u,p)},listen(O){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(Cp,C),m=O,()=>{u.removeEventListener(Cp,C),m=null}},createHref(O){return i(u,O)},createURL:R,encodeLocation(O){let L=R(O);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:T,go(O){return p.go(O)}};return I}function Th(n,i,a="/"){return Sv(n,i,a,!1)}function Sv(n,i,a,s){let u=typeof i=="string"?Gr(i):i,f=$n(u.pathname||"/",a);if(f==null)return null;let p=Rh(n);kv(p);let h=null;for(let m=0;h==null&&m<p.length;++m){let g=Ov(f);h=jv(p[m],g,s)}return h}function Rh(n,i=[],a=[],s=""){let u=(f,p,h)=>{let m={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};m.relativePath.startsWith("/")&&(Oe(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=un([s,m.relativePath]),y=a.concat(m);f.children&&f.children.length>0&&(Oe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Rh(f.children,i,y,g)),!(f.path==null&&!f.index)&&i.push({path:g,score:_v(g,f.index),routesMeta:y})};return n.forEach((f,p)=>{var h;if(f.path===""||!((h=f.path)!=null&&h.includes("?")))u(f,p);else for(let m of _h(f.path))u(f,p,m)}),i}function _h(n){let i=n.split("/");if(i.length===0)return[];let[a,...s]=i,u=a.endsWith("?"),f=a.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let p=_h(s.join("/")),h=[];return h.push(...p.map(m=>m===""?f:[f,m].join("/"))),u&&h.push(...p),h.map(m=>n.startsWith("/")&&m===""?"/":m)}function kv(n){n.sort((i,a)=>i.score!==a.score?a.score-i.score:Nv(i.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}var Cv=/^:[\w-]+$/,Ev=3,bv=2,Pv=1,Tv=10,Rv=-2,bp=n=>n==="*";function _v(n,i){let a=n.split("/"),s=a.length;return a.some(bp)&&(s+=Rv),i&&(s+=bv),a.filter(u=>!bp(u)).reduce((u,f)=>u+(Cv.test(f)?Ev:f===""?Pv:Tv),s)}function Nv(n,i){return n.length===i.length&&n.slice(0,-1).every((s,u)=>s===i[u])?n[n.length-1]-i[i.length-1]:0}function jv(n,i,a=!1){let{routesMeta:s}=n,u={},f="/",p=[];for(let h=0;h<s.length;++h){let m=s[h],g=h===s.length-1,y=f==="/"?i:i.slice(f.length)||"/",C=ja({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),w=m.route;if(!C&&g&&a&&!s[s.length-1].route.index&&(C=ja({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!C)return null;Object.assign(u,C.params),p.push({params:u,pathname:un([f,C.pathname]),pathnameBase:Mv(un([f,C.pathnameBase])),route:w}),C.pathnameBase!=="/"&&(f=un([f,C.pathnameBase]))}return p}function ja(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,s]=Iv(n.path,n.caseSensitive,n.end),u=i.match(a);if(!u)return null;let f=u[0],p=f.replace(/(.)\/+$/,"$1"),h=u.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:C},w)=>{if(y==="*"){let R=h[w]||"";p=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const T=h[w];return C&&!T?g[y]=void 0:g[y]=(T||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:p,pattern:n}}function Iv(n,i=!1,a=!0){Qt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function Ov(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Qt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function $n(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,s=n.charAt(a);return s&&s!=="/"?null:n.slice(a)||"/"}function Lv(n,i="/"){let{pathname:a,search:s="",hash:u=""}=typeof n=="string"?Gr(n):n;return{pathname:a?a.startsWith("/")?a:Av(a,i):i,search:Fv(s),hash:$v(u)}}function Av(n,i){let a=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function ql(n,i,a,s){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zv(n){return n.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function Nh(n){let i=zv(n);return i.map((a,s)=>s===i.length-1?a.pathname:a.pathnameBase)}function jh(n,i,a,s=!1){let u;typeof n=="string"?u=Gr(n):(u={...n},Oe(!u.pathname||!u.pathname.includes("?"),ql("?","pathname","search",u)),Oe(!u.pathname||!u.pathname.includes("#"),ql("#","pathname","hash",u)),Oe(!u.search||!u.search.includes("#"),ql("#","search","hash",u)));let f=n===""||u.pathname==="",p=f?"/":u.pathname,h;if(p==null)h=a;else{let C=i.length-1;if(!s&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),C-=1;u.pathname=w.join("/")}h=C>=0?i[C]:"/"}let m=Lv(u,h),g=p&&p!=="/"&&p.endsWith("/"),y=(f||p===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var un=n=>n.join("/").replace(/\/\/+/g,"/"),Mv=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Fv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$v=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Dv(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ih=["POST","PUT","PATCH","DELETE"];new Set(Ih);var Wv=["GET",...Ih];new Set(Wv);var Qr=E.createContext(null);Qr.displayName="DataRouter";var Fa=E.createContext(null);Fa.displayName="DataRouterState";var Oh=E.createContext({isTransitioning:!1});Oh.displayName="ViewTransition";var Uv=E.createContext(new Map);Uv.displayName="Fetchers";var Bv=E.createContext(null);Bv.displayName="Await";var Kt=E.createContext(null);Kt.displayName="Navigation";var Ki=E.createContext(null);Ki.displayName="Location";var dn=E.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Xu=E.createContext(null);Xu.displayName="RouteError";function Hv(n,{relative:i}={}){Oe(qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:s}=E.useContext(Kt),{hash:u,pathname:f,search:p}=Zi(n,{relative:i}),h=f;return a!=="/"&&(h=f==="/"?a:un([a,f])),s.createHref({pathname:h,search:p,hash:u})}function qi(){return E.useContext(Ki)!=null}function pn(){return Oe(qi(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Ki).location}var Lh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ah(n){E.useContext(Kt).static||E.useLayoutEffect(n)}function Ji(){let{isDataRoute:n}=E.useContext(dn);return n?ry():Vv()}function Vv(){Oe(qi(),"useNavigate() may be used only in the context of a <Router> component.");let n=E.useContext(Qr),{basename:i,navigator:a}=E.useContext(Kt),{matches:s}=E.useContext(dn),{pathname:u}=pn(),f=JSON.stringify(Nh(s)),p=E.useRef(!1);return Ah(()=>{p.current=!0}),E.useCallback((m,g={})=>{if(Qt(p.current,Lh),!p.current)return;if(typeof m=="number"){a.go(m);return}let y=jh(m,JSON.parse(f),u,g.relative==="path");n==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:un([i,y.pathname])),(g.replace?a.replace:a.push)(y,g.state,g)},[i,a,f,u,n])}E.createContext(null);function Zi(n,{relative:i}={}){let{matches:a}=E.useContext(dn),{pathname:s}=pn(),u=JSON.stringify(Nh(a));return E.useMemo(()=>jh(n,JSON.parse(u),s,i==="path"),[n,u,s,i])}function Yv(n,i){return zh(n,i)}function zh(n,i,a,s){var L;Oe(qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=E.useContext(Kt),{matches:f}=E.useContext(dn),p=f[f.length-1],h=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",y=p&&p.route;{let N=y&&y.path||"";Mh(m,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let C=pn(),w;if(i){let N=typeof i=="string"?Gr(i):i;Oe(g==="/"||((L=N.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${N.pathname}" was given in the \`location\` prop.`),w=N}else w=C;let T=w.pathname||"/",R=T;if(g!=="/"){let N=g.replace(/^\//,"").split("/");R="/"+T.replace(/^\//,"").split("/").slice(N.length).join("/")}let I=Th(n,{pathname:R});Qt(y||I!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Qt(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=qv(I&&I.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:un([g,u.encodeLocation?u.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?g:un([g,u.encodeLocation?u.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),f,a,s);return i&&O?E.createElement(Ki.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},O):O}function Xv(){let n=ny(),i=Dv(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),a=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:f},"ErrorBoundary")," or"," ",E.createElement("code",{style:f},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},i),a?E.createElement("pre",{style:u},a):null,p)}var Gv=E.createElement(Xv,null),Qv=class extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?E.createElement(dn.Provider,{value:this.props.routeContext},E.createElement(Xu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kv({routeContext:n,match:i,children:a}){let s=E.useContext(Qr);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),E.createElement(dn.Provider,{value:n},a)}function qv(n,i=[],a=null,s=null){if(n==null){if(!a)return null;if(a.errors)n=a.matches;else if(i.length===0&&!a.initialized&&a.matches.length>0)n=a.matches;else return null}let u=n,f=a==null?void 0:a.errors;if(f!=null){let m=u.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);Oe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,m+1))}let p=!1,h=-1;if(a)for(let m=0;m<u.length;m++){let g=u[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:y,errors:C}=a,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||w){p=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((m,g,y)=>{let C,w=!1,T=null,R=null;a&&(C=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||Gv,p&&(h<0&&y===0?(Mh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,R=null):h===y&&(w=!0,R=g.route.hydrateFallbackElement||null)));let I=i.concat(u.slice(0,y+1)),O=()=>{let L;return C?L=T:w?L=R:g.route.Component?L=E.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=m,E.createElement(Kv,{match:g,routeContext:{outlet:m,matches:I,isDataRoute:a!=null},children:L})};return a&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?E.createElement(Qv,{location:a.location,revalidation:a.revalidation,component:T,error:C,children:O(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):O()},null)}function Gu(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jv(n){let i=E.useContext(Qr);return Oe(i,Gu(n)),i}function Zv(n){let i=E.useContext(Fa);return Oe(i,Gu(n)),i}function ey(n){let i=E.useContext(dn);return Oe(i,Gu(n)),i}function Qu(n){let i=ey(n),a=i.matches[i.matches.length-1];return Oe(a.route.id,`${n} can only be used on routes that contain a unique "id"`),a.route.id}function ty(){return Qu("useRouteId")}function ny(){var s;let n=E.useContext(Xu),i=Zv("useRouteError"),a=Qu("useRouteError");return n!==void 0?n:(s=i.errors)==null?void 0:s[a]}function ry(){let{router:n}=Jv("useNavigate"),i=Qu("useNavigate"),a=E.useRef(!1);return Ah(()=>{a.current=!0}),E.useCallback(async(u,f={})=>{Qt(a.current,Lh),a.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var Pp={};function Mh(n,i,a){!i&&!Pp[n]&&(Pp[n]=!0,Qt(!1,a))}E.memo(iy);function iy({routes:n,future:i,state:a}){return zh(n,void 0,a,i)}function zn(n){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fh({basename:n="/",children:i=null,location:a,navigationType:s="POP",navigator:u,static:f=!1}){Oe(!qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),h=E.useMemo(()=>({basename:p,navigator:u,static:f,future:{}}),[p,u,f]);typeof a=="string"&&(a=Gr(a));let{pathname:m="/",search:g="",hash:y="",state:C=null,key:w="default"}=a,T=E.useMemo(()=>{let R=$n(m,p);return R==null?null:{location:{pathname:R,search:g,hash:y,state:C,key:w},navigationType:s}},[p,m,g,y,C,w,s]);return Qt(T!=null,`<Router basename="${p}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:E.createElement(Kt.Provider,{value:h},E.createElement(Ki.Provider,{children:i,value:T}))}function oy({children:n,location:i}){return Yv(mu(n),i)}function mu(n,i=[]){let a=[];return E.Children.forEach(n,(s,u)=>{if(!E.isValidElement(s))return;let f=[...i,u];if(s.type===E.Fragment){a.push.apply(a,mu(s.props.children,f));return}Oe(s.type===zn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=mu(s.props.children,f)),a.push(p)}),a}var ka="get",Ca="application/x-www-form-urlencoded";function $a(n){return n!=null&&typeof n.tagName=="string"}function ay(n){return $a(n)&&n.tagName.toLowerCase()==="button"}function sy(n){return $a(n)&&n.tagName.toLowerCase()==="form"}function ly(n){return $a(n)&&n.tagName.toLowerCase()==="input"}function uy(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cy(n,i){return n.button===0&&(!i||i==="_self")&&!uy(n)}var ma=null;function fy(){if(ma===null)try{new FormData(document.createElement("form"),0),ma=!1}catch{ma=!0}return ma}var dy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jl(n){return n!=null&&!dy.has(n)?(Qt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ca}"`),null):n}function py(n,i){let a,s,u,f,p;if(sy(n)){let h=n.getAttribute("action");s=h?$n(h,i):null,a=n.getAttribute("method")||ka,u=Jl(n.getAttribute("enctype"))||Ca,f=new FormData(n)}else if(ay(n)||ly(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||h.getAttribute("action");if(s=m?$n(m,i):null,a=n.getAttribute("formmethod")||h.getAttribute("method")||ka,u=Jl(n.getAttribute("formenctype"))||Jl(h.getAttribute("enctype"))||Ca,f=new FormData(h,n),!fy()){let{name:g,type:y,value:C}=n;if(y==="image"){let w=g?`${g}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else g&&f.append(g,C)}}else{if($a(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ka,s=null,u=Ca,p=n}return f&&u==="text/plain"&&(p=f,f=void 0),{action:s,method:a.toLowerCase(),encType:u,formData:f,body:p}}function Ku(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function hy(n,i){if(n.id in i)return i[n.id];try{let a=await import(n.module);return i[n.id]=a,a}catch(a){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function my(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function gy(n,i,a){let s=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let p=await hy(f,a);return p.links?p.links():[]}return[]}));return xy(s.flat(1).filter(my).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Tp(n,i,a,s,u,f){let p=(m,g)=>a[g]?m.route.id!==a[g].route.id:!0,h=(m,g)=>{var y;return a[g].pathname!==m.pathname||((y=a[g].route.path)==null?void 0:y.endsWith("*"))&&a[g].params["*"]!==m.params["*"]};return f==="assets"?i.filter((m,g)=>p(m,g)||h(m,g)):f==="data"?i.filter((m,g)=>{var C;let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(p(m,g)||h(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((C=a[0])==null?void 0:C.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function vy(n,i){return yy(n.map(a=>{let s=i.routes[a.route.id];if(!s)return[];let u=[s.module];return s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function yy(n){return[...new Set(n)]}function wy(n){let i={},a=Object.keys(n).sort();for(let s of a)i[s]=n[s];return i}function xy(n,i){let a=new Set;return new Set(i),n.reduce((s,u)=>{let f=JSON.stringify(wy(u));return a.has(f)||(a.add(f),s.push({key:f,link:u})),s},[])}function Sy(n){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function ky(){let n=E.useContext(Qr);return Ku(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Cy(){let n=E.useContext(Fa);return Ku(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var qu=E.createContext(void 0);qu.displayName="FrameworkContext";function $h(){let n=E.useContext(qu);return Ku(n,"You must render this element inside a <HydratedRouter> element"),n}function Ey(n,i){let a=E.useContext(qu),[s,u]=E.useState(!1),[f,p]=E.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:C}=i,w=E.useRef(null);E.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let I=L=>{L.forEach(N=>{p(N.isIntersecting)})},O=new IntersectionObserver(I,{threshold:.5});return w.current&&O.observe(w.current),()=>{O.disconnect()}}},[n]),E.useEffect(()=>{if(s){let I=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(I)}}},[s]);let T=()=>{u(!0)},R=()=>{u(!1),p(!1)};return a?n!=="intent"?[f,w,{}]:[f,w,{onFocus:$i(h,T),onBlur:$i(m,R),onMouseEnter:$i(g,T),onMouseLeave:$i(y,R),onTouchStart:$i(C,T)}]:[!1,w,{}]}function $i(n,i){return a=>{n&&n(a),a.defaultPrevented||i(a)}}function by({page:n,...i}){let{router:a}=ky(),s=E.useMemo(()=>Th(a.routes,n,a.basename),[a.routes,n,a.basename]);return s?E.createElement(Ty,{page:n,matches:s,...i}):null}function Py(n){let{manifest:i,routeModules:a}=$h(),[s,u]=E.useState([]);return E.useEffect(()=>{let f=!1;return gy(n,i,a).then(p=>{f||u(p)}),()=>{f=!0}},[n,i,a]),s}function Ty({page:n,matches:i,...a}){let s=pn(),{manifest:u,routeModules:f}=$h(),{loaderData:p,matches:h}=Cy(),m=E.useMemo(()=>Tp(n,i,h,u,s,"data"),[n,i,h,u,s]),g=E.useMemo(()=>Tp(n,i,h,u,s,"assets"),[n,i,h,u,s]),y=E.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let T=new Set,R=!1;if(i.forEach(O=>{var N;let L=u.routes[O.route.id];!L||!L.hasLoader||(!m.some(z=>z.route.id===O.route.id)&&O.route.id in p&&((N=f[O.route.id])!=null&&N.shouldRevalidate)||L.hasClientLoader?R=!0:T.add(O.route.id))}),T.size===0)return[];let I=Sy(n);return R&&T.size>0&&I.searchParams.set("_routes",i.filter(O=>T.has(O.route.id)).map(O=>O.route.id).join(",")),[I.pathname+I.search]},[p,s,u,m,i,n,f]),C=E.useMemo(()=>vy(g,u),[g,u]),w=Py(g);return E.createElement(E.Fragment,null,y.map(T=>E.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),C.map(T=>E.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),w.map(({key:T,link:R})=>E.createElement("link",{key:T,...R})))}function Ry(...n){return i=>{n.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var Dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dh&&(window.__reactRouterVersion="7.1.3")}catch{}function _y({basename:n,children:i,window:a}){let s=E.useRef();s.current==null&&(s.current=yv({window:a,v5Compat:!0}));let u=s.current,[f,p]=E.useState({action:u.action,location:u.location}),h=E.useCallback(m=>{E.startTransition(()=>p(m))},[p]);return E.useLayoutEffect(()=>u.listen(h),[u,h]),E.createElement(Fh,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var Wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uh=E.forwardRef(function({onClick:i,discover:a="render",prefetch:s="none",relative:u,reloadDocument:f,replace:p,state:h,target:m,to:g,preventScrollReset:y,viewTransition:C,...w},T){let{basename:R}=E.useContext(Kt),I=typeof g=="string"&&Wh.test(g),O,L=!1;if(typeof g=="string"&&I&&(O=g,Dh))try{let le=new URL(window.location.href),ye=g.startsWith("//")?new URL(le.protocol+g):new URL(g),Ve=$n(ye.pathname,R);ye.origin===le.origin&&Ve!=null?g=Ve+ye.search+ye.hash:L=!0}catch{Qt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=Hv(g,{relative:u}),[z,D,V]=Ey(s,w),Q=Oy(g,{replace:p,state:h,target:m,preventScrollReset:y,relative:u,viewTransition:C});function Y(le){i&&i(le),le.defaultPrevented||Q(le)}let se=E.createElement("a",{...w,...V,href:O||N,onClick:L||f?i:Y,ref:Ry(T,D),target:m,"data-discover":!I&&a==="render"?"true":void 0});return z&&!I?E.createElement(E.Fragment,null,se,E.createElement(by,{page:N})):se});Uh.displayName="Link";var Ny=E.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:s="",end:u=!1,style:f,to:p,viewTransition:h,children:m,...g},y){let C=Zi(p,{relative:g.relative}),w=pn(),T=E.useContext(Fa),{navigator:R,basename:I}=E.useContext(Kt),O=T!=null&&Fy(C)&&h===!0,L=R.encodeLocation?R.encodeLocation(C).pathname:C.pathname,N=w.pathname,z=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(N=N.toLowerCase(),z=z?z.toLowerCase():null,L=L.toLowerCase()),z&&I&&(z=$n(z,I)||z);const D=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let V=N===L||!u&&N.startsWith(L)&&N.charAt(D)==="/",Q=z!=null&&(z===L||!u&&z.startsWith(L)&&z.charAt(L.length)==="/"),Y={isActive:V,isPending:Q,isTransitioning:O},se=V?i:void 0,le;typeof s=="function"?le=s(Y):le=[s,V?"active":null,Q?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let ye=typeof f=="function"?f(Y):f;return E.createElement(Uh,{...g,"aria-current":se,className:le,ref:y,style:ye,to:p,viewTransition:h},typeof m=="function"?m(Y):m)});Ny.displayName="NavLink";var jy=E.forwardRef(({discover:n="render",fetcherKey:i,navigate:a,reloadDocument:s,replace:u,state:f,method:p=ka,action:h,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:C,...w},T)=>{let R=zy(),I=My(h,{relative:g}),O=p.toLowerCase()==="get"?"get":"post",L=typeof h=="string"&&Wh.test(h),N=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let D=z.nativeEvent.submitter,V=(D==null?void 0:D.getAttribute("formmethod"))||p;R(D||z.currentTarget,{fetcherKey:i,method:V,navigate:a,replace:u,state:f,relative:g,preventScrollReset:y,viewTransition:C})};return E.createElement("form",{ref:T,method:O,action:I,onSubmit:s?m:N,...w,"data-discover":!L&&n==="render"?"true":void 0})});jy.displayName="Form";function Iy(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bh(n){let i=E.useContext(Qr);return Oe(i,Iy(n)),i}function Oy(n,{target:i,replace:a,state:s,preventScrollReset:u,relative:f,viewTransition:p}={}){let h=Ji(),m=pn(),g=Zi(n,{relative:f});return E.useCallback(y=>{if(cy(y,i)){y.preventDefault();let C=a!==void 0?a:Vi(m)===Vi(g);h(n,{replace:C,state:s,preventScrollReset:u,relative:f,viewTransition:p})}},[m,h,g,a,s,i,n,u,f,p])}var Ly=0,Ay=()=>`__${String(++Ly)}__`;function zy(){let{router:n}=Bh("useSubmit"),{basename:i}=E.useContext(Kt),a=ty();return E.useCallback(async(s,u={})=>{let{action:f,method:p,encType:h,formData:m,body:g}=py(s,i);if(u.navigate===!1){let y=u.fetcherKey||Ay();await n.fetch(y,a,u.action||f,{preventScrollReset:u.preventScrollReset,formData:m,body:g,formMethod:u.method||p,formEncType:u.encType||h,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:m,body:g,formMethod:u.method||p,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:a,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,a])}function My(n,{relative:i}={}){let{basename:a}=E.useContext(Kt),s=E.useContext(dn);Oe(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),f={...Zi(n||".",{relative:i})},p=pn();if(n==null){f.search=p.search;let h=new URLSearchParams(f.search),m=h.getAll("index");if(m.some(y=>y==="")){h.delete("index"),m.filter(C=>C).forEach(C=>h.append("index",C));let y=h.toString();f.search=y?`?${y}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(f.pathname=f.pathname==="/"?a:un([a,f.pathname])),Vi(f)}function Fy(n,i={}){let a=E.useContext(Oh);Oe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Bh("useViewTransitionState"),u=Zi(n,{relative:i.relative});if(!a.isTransitioning)return!1;let f=$n(a.currentLocation.pathname,s)||a.currentLocation.pathname,p=$n(a.nextLocation.pathname,s)||a.nextLocation.pathname;return ja(u.pathname,p)!=null||ja(u.pathname,f)!=null}new TextEncoder;var mt=function(){return mt=Object.assign||function(i){for(var a,s=1,u=arguments.length;s<u;s++){a=arguments[s];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(i[f]=a[f])}return i},mt.apply(this,arguments)};function Yi(n,i,a){if(a||arguments.length===2)for(var s=0,u=i.length,f;s<u;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return n.concat(f||Array.prototype.slice.call(i))}var Te="-ms-",Ui="-moz-",ke="-webkit-",Hh="comm",Da="rule",Ju="decl",$y="@import",Vh="@keyframes",Dy="@layer",Yh=Math.abs,Zu=String.fromCharCode,gu=Object.assign;function Wy(n,i){return Qe(n,0)^45?(((i<<2^Qe(n,0))<<2^Qe(n,1))<<2^Qe(n,2))<<2^Qe(n,3):0}function Xh(n){return n.trim()}function ln(n,i){return(n=i.exec(n))?n[0]:n}function pe(n,i,a){return n.replace(i,a)}function Ea(n,i,a){return n.indexOf(i,a)}function Qe(n,i){return n.charCodeAt(i)|0}function Ur(n,i,a){return n.slice(i,a)}function Vt(n){return n.length}function Gh(n){return n.length}function Di(n,i){return i.push(n),n}function Uy(n,i){return n.map(i).join("")}function Rp(n,i){return n.filter(function(a){return!ln(a,i)})}var Wa=1,Br=1,Qh=0,_t=0,Ue=0,Kr="";function Ua(n,i,a,s,u,f,p,h){return{value:n,root:i,parent:a,type:s,props:u,children:f,line:Wa,column:Br,length:p,return:"",siblings:h}}function Mn(n,i){return gu(Ua("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Mr(n){for(;n.root;)n=Mn(n.root,{children:[n]});Di(n,n.siblings)}function By(){return Ue}function Hy(){return Ue=_t>0?Qe(Kr,--_t):0,Br--,Ue===10&&(Br=1,Wa--),Ue}function $t(){return Ue=_t<Qh?Qe(Kr,_t++):0,Br++,Ue===10&&(Br=1,Wa++),Ue}function sr(){return Qe(Kr,_t)}function ba(){return _t}function Ba(n,i){return Ur(Kr,n,i)}function vu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vy(n){return Wa=Br=1,Qh=Vt(Kr=n),_t=0,[]}function Yy(n){return Kr="",n}function Zl(n){return Xh(Ba(_t-1,yu(n===91?n+2:n===40?n+1:n)))}function Xy(n){for(;(Ue=sr())&&Ue<33;)$t();return vu(n)>2||vu(Ue)>3?"":" "}function Gy(n,i){for(;--i&&$t()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return Ba(n,ba()+(i<6&&sr()==32&&$t()==32))}function yu(n){for(;$t();)switch(Ue){case n:return _t;case 34:case 39:n!==34&&n!==39&&yu(Ue);break;case 40:n===41&&yu(n);break;case 92:$t();break}return _t}function Qy(n,i){for(;$t()&&n+Ue!==57;)if(n+Ue===84&&sr()===47)break;return"/*"+Ba(i,_t-1)+"*"+Zu(n===47?n:$t())}function Ky(n){for(;!vu(sr());)$t();return Ba(n,_t)}function qy(n){return Yy(Pa("",null,null,null,[""],n=Vy(n),0,[0],n))}function Pa(n,i,a,s,u,f,p,h,m){for(var g=0,y=0,C=p,w=0,T=0,R=0,I=1,O=1,L=1,N=0,z="",D=u,V=f,Q=s,Y=z;O;)switch(R=N,N=$t()){case 40:if(R!=108&&Qe(Y,C-1)==58){Ea(Y+=pe(Zl(N),"&","&\f"),"&\f",Yh(g?h[g-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:Y+=Zl(N);break;case 9:case 10:case 13:case 32:Y+=Xy(R);break;case 92:Y+=Gy(ba()-1,7);continue;case 47:switch(sr()){case 42:case 47:Di(Jy(Qy($t(),ba()),i,a,m),m);break;default:Y+="/"}break;case 123*I:h[g++]=Vt(Y)*L;case 125*I:case 59:case 0:switch(N){case 0:case 125:O=0;case 59+y:L==-1&&(Y=pe(Y,/\f/g,"")),T>0&&Vt(Y)-C&&Di(T>32?Np(Y+";",s,a,C-1,m):Np(pe(Y," ","")+";",s,a,C-2,m),m);break;case 59:Y+=";";default:if(Di(Q=_p(Y,i,a,g,y,u,h,z,D=[],V=[],C,f),f),N===123)if(y===0)Pa(Y,i,Q,Q,D,f,C,h,V);else switch(w===99&&Qe(Y,3)===110?100:w){case 100:case 108:case 109:case 115:Pa(n,Q,Q,s&&Di(_p(n,Q,Q,0,0,u,h,z,u,D=[],C,V),V),u,V,C,h,s?D:V);break;default:Pa(Y,Q,Q,Q,[""],V,0,h,V)}}g=y=T=0,I=L=1,z=Y="",C=p;break;case 58:C=1+Vt(Y),T=R;default:if(I<1){if(N==123)--I;else if(N==125&&I++==0&&Hy()==125)continue}switch(Y+=Zu(N),N*I){case 38:L=y>0?1:(Y+="\f",-1);break;case 44:h[g++]=(Vt(Y)-1)*L,L=1;break;case 64:sr()===45&&(Y+=Zl($t())),w=sr(),y=C=Vt(z=Y+=Ky(ba())),N++;break;case 45:R===45&&Vt(Y)==2&&(I=0)}}return f}function _p(n,i,a,s,u,f,p,h,m,g,y,C){for(var w=u-1,T=u===0?f:[""],R=Gh(T),I=0,O=0,L=0;I<s;++I)for(var N=0,z=Ur(n,w+1,w=Yh(O=p[I])),D=n;N<R;++N)(D=Xh(O>0?T[N]+" "+z:pe(z,/&\f/g,T[N])))&&(m[L++]=D);return Ua(n,i,a,u===0?Da:h,m,g,y,C)}function Jy(n,i,a,s){return Ua(n,i,a,Hh,Zu(By()),Ur(n,2,-2),0,s)}function Np(n,i,a,s,u){return Ua(n,i,a,Ju,Ur(n,0,s),Ur(n,s+1,-1),s,u)}function Kh(n,i,a){switch(Wy(n,i)){case 5103:return ke+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+n+n;case 4789:return Ui+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+n+Ui+n+Te+n+n;case 5936:switch(Qe(n,i+11)){case 114:return ke+n+Te+pe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ke+n+Te+pe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ke+n+Te+pe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ke+n+Te+n+n;case 6165:return ke+n+Te+"flex-"+n+n;case 5187:return ke+n+pe(n,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Te+"flex-$1$2")+n;case 5443:return ke+n+Te+"flex-item-"+pe(n,/flex-|-self/g,"")+(ln(n,/flex-|baseline/)?"":Te+"grid-row-"+pe(n,/flex-|-self/g,""))+n;case 4675:return ke+n+Te+"flex-line-pack"+pe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ke+n+Te+pe(n,"shrink","negative")+n;case 5292:return ke+n+Te+pe(n,"basis","preferred-size")+n;case 6060:return ke+"box-"+pe(n,"-grow","")+ke+n+Te+pe(n,"grow","positive")+n;case 4554:return ke+pe(n,/([^-])(transform)/g,"$1"+ke+"$2")+n;case 6187:return pe(pe(pe(n,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),n,"")+n;case 5495:case 3959:return pe(n,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return pe(pe(n,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+n+n;case 4200:if(!ln(n,/flex-|baseline/))return Te+"grid-column-align"+Ur(n,i)+n;break;case 2592:case 3360:return Te+pe(n,"template-","")+n;case 4384:case 3616:return a&&a.some(function(s,u){return i=u,ln(s.props,/grid-\w+-end/)})?~Ea(n+(a=a[i].value),"span",0)?n:Te+pe(n,"-start","")+n+Te+"grid-row-span:"+(~Ea(a,"span",0)?ln(a,/\d+/):+ln(a,/\d+/)-+ln(n,/\d+/))+";":Te+pe(n,"-start","")+n;case 4896:case 4128:return a&&a.some(function(s){return ln(s.props,/grid-\w+-start/)})?n:Te+pe(pe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return pe(n,/(.+)-inline(.+)/,ke+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vt(n)-1-i>6)switch(Qe(n,i+1)){case 109:if(Qe(n,i+4)!==45)break;case 102:return pe(n,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Ui+(Qe(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Ea(n,"stretch",0)?Kh(pe(n,"stretch","fill-available"),i,a)+n:n}break;case 5152:case 5920:return pe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,f,p,h,m,g){return Te+u+":"+f+g+(p?Te+u+"-span:"+(h?m:+m-+f)+g:"")+n});case 4949:if(Qe(n,i+6)===121)return pe(n,":",":"+ke)+n;break;case 6444:switch(Qe(n,Qe(n,14)===45?18:11)){case 120:return pe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(Qe(n,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Te+"$2box$3")+n;case 100:return pe(n,":",":"+Te)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(n,"scroll-","scroll-snap-")+n}return n}function Ia(n,i){for(var a="",s=0;s<n.length;s++)a+=i(n[s],s,n,i)||"";return a}function Zy(n,i,a,s){switch(n.type){case Dy:if(n.children.length)break;case $y:case Ju:return n.return=n.return||n.value;case Hh:return"";case Vh:return n.return=n.value+"{"+Ia(n.children,s)+"}";case Da:if(!Vt(n.value=n.props.join(",")))return""}return Vt(a=Ia(n.children,s))?n.return=n.value+"{"+a+"}":""}function e1(n){var i=Gh(n);return function(a,s,u,f){for(var p="",h=0;h<i;h++)p+=n[h](a,s,u,f)||"";return p}}function t1(n){return function(i){i.root||(i=i.return)&&n(i)}}function n1(n,i,a,s){if(n.length>-1&&!n.return)switch(n.type){case Ju:n.return=Kh(n.value,n.length,a);return;case Vh:return Ia([Mn(n,{value:pe(n.value,"@","@"+ke)})],s);case Da:if(n.length)return Uy(a=n.props,function(u){switch(ln(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(Mn(n,{props:[pe(u,/:(read-\w+)/,":"+Ui+"$1")]})),Mr(Mn(n,{props:[u]})),gu(n,{props:Rp(a,s)});break;case"::placeholder":Mr(Mn(n,{props:[pe(u,/:(plac\w+)/,":"+ke+"input-$1")]})),Mr(Mn(n,{props:[pe(u,/:(plac\w+)/,":"+Ui+"$1")]})),Mr(Mn(n,{props:[pe(u,/:(plac\w+)/,Te+"input-$1")]})),Mr(Mn(n,{props:[u]})),gu(n,{props:Rp(a,s)});break}return""})}}var r1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},Hr=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",qh="active",Jh="data-styled-version",Ha="6.1.14",ec=`/*!sc*/
`,Oa=typeof window<"u"&&"HTMLElement"in window,i1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),Va=Object.freeze([]),Vr=Object.freeze({});function o1(n,i,a){return a===void 0&&(a=Vr),n.theme!==a.theme&&n.theme||i||a.theme}var Zh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),a1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,s1=/(^-|-$)/g;function jp(n){return n.replace(a1,"-").replace(s1,"")}var l1=/(a)(d)/gi,ga=52,Ip=function(n){return String.fromCharCode(n+(n>25?39:97))};function wu(n){var i,a="";for(i=Math.abs(n);i>ga;i=i/ga|0)a=Ip(i%ga)+a;return(Ip(i%ga)+a).replace(l1,"$1-$2")}var eu,em=5381,Fr=function(n,i){for(var a=i.length;a;)n=33*n^i.charCodeAt(--a);return n},tm=function(n){return Fr(em,n)};function nm(n){return wu(tm(n)>>>0)}function u1(n){return n.displayName||n.name||"Component"}function tu(n){return typeof n=="string"&&!0}var rm=typeof Symbol=="function"&&Symbol.for,im=rm?Symbol.for("react.memo"):60115,c1=rm?Symbol.for("react.forward_ref"):60112,f1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p1=((eu={})[c1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eu[im]=om,eu);function Op(n){return("type"in(i=n)&&i.type.$$typeof)===im?om:"$$typeof"in n?p1[n.$$typeof]:f1;var i}var h1=Object.defineProperty,m1=Object.getOwnPropertyNames,Lp=Object.getOwnPropertySymbols,g1=Object.getOwnPropertyDescriptor,v1=Object.getPrototypeOf,Ap=Object.prototype;function am(n,i,a){if(typeof i!="string"){if(Ap){var s=v1(i);s&&s!==Ap&&am(n,s,a)}var u=m1(i);Lp&&(u=u.concat(Lp(i)));for(var f=Op(n),p=Op(i),h=0;h<u.length;++h){var m=u[h];if(!(m in d1||a&&a[m]||p&&m in p||f&&m in f)){var g=g1(i,m);try{h1(n,m,g)}catch{}}}}return n}function Yr(n){return typeof n=="function"}function tc(n){return typeof n=="object"&&"styledComponentId"in n}function or(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function xu(n,i){if(n.length===0)return"";for(var a=n[0],s=1;s<n.length;s++)a+=n[s];return a}function Xi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Su(n,i,a){if(a===void 0&&(a=!1),!a&&!Xi(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)n[s]=Su(n[s],i[s]);else if(Xi(i))for(var s in i)n[s]=Su(n[s],i[s]);return n}function nc(n,i){Object.defineProperty(n,"toString",{value:i})}function eo(n){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var y1=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var a=0,s=0;s<i;s++)a+=this.groupSizes[s];return a},n.prototype.insertRules=function(i,a){if(i>=this.groupSizes.length){for(var s=this.groupSizes,u=s.length,f=u;i>=f;)if((f<<=1)<0)throw eo(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var p=u;p<f;p++)this.groupSizes[p]=0}for(var h=this.indexOfGroup(i+1),m=(p=0,a.length);p<m;p++)this.tag.insertRule(h,a[p])&&(this.groupSizes[i]++,h++)},n.prototype.clearGroup=function(i){if(i<this.length){var a=this.groupSizes[i],s=this.indexOfGroup(i),u=s+a;this.groupSizes[i]=0;for(var f=s;f<u;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(i){var a="";if(i>=this.length||this.groupSizes[i]===0)return a;for(var s=this.groupSizes[i],u=this.indexOfGroup(i),f=u+s,p=u;p<f;p++)a+="".concat(this.tag.getRule(p)).concat(ec);return a},n}(),Ta=new Map,La=new Map,Ra=1,va=function(n){if(Ta.has(n))return Ta.get(n);for(;La.has(Ra);)Ra++;var i=Ra++;return Ta.set(n,i),La.set(i,n),i},w1=function(n,i){Ra=i+1,Ta.set(n,i),La.set(i,n)},x1="style[".concat(Hr,"][").concat(Jh,'="').concat(Ha,'"]'),S1=new RegExp("^".concat(Hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),k1=function(n,i,a){for(var s,u=a.split(","),f=0,p=u.length;f<p;f++)(s=u[f])&&n.registerName(i,s)},C1=function(n,i){for(var a,s=((a=i.textContent)!==null&&a!==void 0?a:"").split(ec),u=[],f=0,p=s.length;f<p;f++){var h=s[f].trim();if(h){var m=h.match(S1);if(m){var g=0|parseInt(m[1],10),y=m[2];g!==0&&(w1(y,g),k1(n,y,m[3]),n.getTag().insertRules(g,u)),u.length=0}else u.push(h)}}},zp=function(n){for(var i=document.querySelectorAll(x1),a=0,s=i.length;a<s;a++){var u=i[a];u&&u.getAttribute(Hr)!==qh&&(C1(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function E1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sm=function(n){var i=document.head,a=n||i,s=document.createElement("style"),u=function(h){var m=Array.from(h.querySelectorAll("style[".concat(Hr,"]")));return m[m.length-1]}(a),f=u!==void 0?u.nextSibling:null;s.setAttribute(Hr,qh),s.setAttribute(Jh,Ha);var p=E1();return p&&s.setAttribute("nonce",p),a.insertBefore(s,f),s},b1=function(){function n(i){this.element=sm(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,u=0,f=s.length;u<f;u++){var p=s[u];if(p.ownerNode===a)return p}throw eo(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,a){try{return this.sheet.insertRule(a,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var a=this.sheet.cssRules[i];return a&&a.cssText?a.cssText:""},n}(),P1=function(){function n(i){this.element=sm(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,a){if(i<=this.length&&i>=0){var s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),T1=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,a){return i<=this.length&&(this.rules.splice(i,0,a),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),Mp=Oa,R1={isServer:!Oa,useCSSOMInjection:!i1},lm=function(){function n(i,a,s){i===void 0&&(i=Vr),a===void 0&&(a={});var u=this;this.options=mt(mt({},R1),i),this.gs=a,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Oa&&Mp&&(Mp=!1,zp(this)),nc(this,function(){return function(f){for(var p=f.getTag(),h=p.length,m="",g=function(C){var w=function(L){return La.get(L)}(C);if(w===void 0)return"continue";var T=f.names.get(w),R=p.getGroup(C);if(T===void 0||!T.size||R.length===0)return"continue";var I="".concat(Hr,".g").concat(C,'[id="').concat(w,'"]'),O="";T!==void 0&&T.forEach(function(L){L.length>0&&(O+="".concat(L,","))}),m+="".concat(R).concat(I,'{content:"').concat(O,'"}').concat(ec)},y=0;y<h;y++)g(y);return m}(u)})}return n.registerId=function(i){return va(i)},n.prototype.rehydrate=function(){!this.server&&Oa&&zp(this)},n.prototype.reconstructWithOptions=function(i,a){return a===void 0&&(a=!0),new n(mt(mt({},this.options),i),this.gs,a&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(a){var s=a.useCSSOMInjection,u=a.target;return a.isServer?new T1(u):s?new b1(u):new P1(u)}(this.options),new y1(i)));var i},n.prototype.hasNameForId=function(i,a){return this.names.has(i)&&this.names.get(i).has(a)},n.prototype.registerName=function(i,a){if(va(i),this.names.has(i))this.names.get(i).add(a);else{var s=new Set;s.add(a),this.names.set(i,s)}},n.prototype.insertRules=function(i,a,s){this.registerName(i,a),this.getTag().insertRules(va(i),s)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(va(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),_1=/&/g,N1=/^\s*\/\/.*$/gm;function um(n,i){return n.map(function(a){return a.type==="rule"&&(a.value="".concat(i," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(i," ")),a.props=a.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=um(a.children,i)),a})}function j1(n){var i,a,s,u=Vr,f=u.options,p=f===void 0?Vr:f,h=u.plugins,m=h===void 0?Va:h,g=function(w,T,R){return R.startsWith(a)&&R.endsWith(a)&&R.replaceAll(a,"").length>0?".".concat(i):w},y=m.slice();y.push(function(w){w.type===Da&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(_1,a).replace(s,g))}),p.prefix&&y.push(n1),y.push(Zy);var C=function(w,T,R,I){T===void 0&&(T=""),R===void 0&&(R=""),I===void 0&&(I="&"),i=I,a=T,s=new RegExp("\\".concat(a,"\\b"),"g");var O=w.replace(N1,""),L=qy(R||T?"".concat(R," ").concat(T," { ").concat(O," }"):O);p.namespace&&(L=um(L,p.namespace));var N=[];return Ia(L,e1(y.concat(t1(function(z){return N.push(z)})))),N};return C.hash=m.length?m.reduce(function(w,T){return T.name||eo(15),Fr(w,T.name)},em).toString():"",C}var I1=new lm,ku=j1(),cm=Fn.createContext({shouldForwardProp:void 0,styleSheet:I1,stylis:ku});cm.Consumer;Fn.createContext(void 0);function Fp(){return E.useContext(cm)}var fm=function(){function n(i,a){var s=this;this.inject=function(u,f){f===void 0&&(f=ku);var p=s.name+f.hash;u.hasNameForId(s.id,p)||u.insertRules(s.id,p,f(s.rules,p,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=a,nc(this,function(){throw eo(12,String(s.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=ku),this.name+i.hash},n}(),O1=function(n){return n>="A"&&n<="Z"};function $p(n){for(var i="",a=0;a<n.length;a++){var s=n[a];if(a===1&&s==="-"&&n[0]==="-")return n;O1(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var dm=function(n){return n==null||n===!1||n===""},pm=function(n){var i,a,s=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!dm(f)&&(Array.isArray(f)&&f.isCss||Yr(f)?s.push("".concat($p(u),":"),f,";"):Xi(f)?s.push.apply(s,Yi(Yi(["".concat(u," {")],pm(f),!1),["}"],!1)):s.push("".concat($p(u),": ").concat((i=u,(a=f)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||i in r1||i.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return s};function lr(n,i,a,s){if(dm(n))return[];if(tc(n))return[".".concat(n.styledComponentId)];if(Yr(n)){if(!Yr(f=n)||f.prototype&&f.prototype.isReactComponent||!i)return[n];var u=n(i);return lr(u,i,a,s)}var f;return n instanceof fm?a?(n.inject(a,s),[n.getName(s)]):[n]:Xi(n)?pm(n):Array.isArray(n)?Array.prototype.concat.apply(Va,n.map(function(p){return lr(p,i,a,s)})):[n.toString()]}function L1(n){for(var i=0;i<n.length;i+=1){var a=n[i];if(Yr(a)&&!tc(a))return!1}return!0}var A1=tm(Ha),z1=function(){function n(i,a,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&L1(i),this.componentId=a,this.baseHash=Fr(A1,a),this.baseStyle=s,lm.registerId(a)}return n.prototype.generateAndInjectStyles=function(i,a,s){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,a,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))u=or(u,this.staticRulesId);else{var f=xu(lr(this.rules,i,a,s)),p=wu(Fr(this.baseHash,f)>>>0);if(!a.hasNameForId(this.componentId,p)){var h=s(f,".".concat(p),void 0,this.componentId);a.insertRules(this.componentId,p,h)}u=or(u,p),this.staticRulesId=p}else{for(var m=Fr(this.baseHash,s.hash),g="",y=0;y<this.rules.length;y++){var C=this.rules[y];if(typeof C=="string")g+=C;else if(C){var w=xu(lr(C,i,a,s));m=Fr(m,w+y),g+=w}}if(g){var T=wu(m>>>0);a.hasNameForId(this.componentId,T)||a.insertRules(this.componentId,T,s(g,".".concat(T),void 0,this.componentId)),u=or(u,T)}}return u},n}(),hm=Fn.createContext(void 0);hm.Consumer;var nu={};function M1(n,i,a){var s=tc(n),u=n,f=!tu(n),p=i.attrs,h=p===void 0?Va:p,m=i.componentId,g=m===void 0?function(D,V){var Q=typeof D!="string"?"sc":jp(D);nu[Q]=(nu[Q]||0)+1;var Y="".concat(Q,"-").concat(nm(Ha+Q+nu[Q]));return V?"".concat(V,"-").concat(Y):Y}(i.displayName,i.parentComponentId):m,y=i.displayName,C=y===void 0?function(D){return tu(D)?"styled.".concat(D):"Styled(".concat(u1(D),")")}(n):y,w=i.displayName&&i.componentId?"".concat(jp(i.displayName),"-").concat(i.componentId):i.componentId||g,T=s&&u.attrs?u.attrs.concat(h).filter(Boolean):h,R=i.shouldForwardProp;if(s&&u.shouldForwardProp){var I=u.shouldForwardProp;if(i.shouldForwardProp){var O=i.shouldForwardProp;R=function(D,V){return I(D,V)&&O(D,V)}}else R=I}var L=new z1(a,w,s?u.componentStyle:void 0);function N(D,V){return function(Q,Y,se){var le=Q.attrs,ye=Q.componentStyle,Ve=Q.defaultProps,Ne=Q.foldedComponentIds,Fe=Q.styledComponentId,$e=Q.target,Ze=Fn.useContext(hm),De=Fp(),Se=Q.shouldForwardProp||De.shouldForwardProp,H=o1(Y,Ze,Ve)||Vr,J=function(de,fe,ge){for(var he,we=mt(mt({},fe),{className:void 0,theme:ge}),Ke=0;Ke<de.length;Ke+=1){var Jt=Yr(he=de[Ke])?he(we):he;for(var Nt in Jt)we[Nt]=Nt==="className"?or(we[Nt],Jt[Nt]):Nt==="style"?mt(mt({},we[Nt]),Jt[Nt]):Jt[Nt]}return fe.className&&(we.className=or(we.className,fe.className)),we}(le,Y,H),X=J.as||$e,b={};for(var A in J)J[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&J.theme===H||(A==="forwardedAs"?b.as=J.forwardedAs:Se&&!Se(A,X)||(b[A]=J[A]));var ie=function(de,fe){var ge=Fp(),he=de.generateAndInjectStyles(fe,ge.styleSheet,ge.stylis);return he}(ye,J),ue=or(Ne,Fe);return ie&&(ue+=" "+ie),J.className&&(ue+=" "+J.className),b[tu(X)&&!Zh.has(X)?"class":"className"]=ue,se&&(b.ref=se),E.createElement(X,b)}(z,D,V)}N.displayName=C;var z=Fn.forwardRef(N);return z.attrs=T,z.componentStyle=L,z.displayName=C,z.shouldForwardProp=R,z.foldedComponentIds=s?or(u.foldedComponentIds,u.styledComponentId):"",z.styledComponentId=w,z.target=s?u.target:n,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=s?function(V){for(var Q=[],Y=1;Y<arguments.length;Y++)Q[Y-1]=arguments[Y];for(var se=0,le=Q;se<le.length;se++)Su(V,le[se],!0);return V}({},u.defaultProps,D):D}}),nc(z,function(){return".".concat(z.styledComponentId)}),f&&am(z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function Dp(n,i){for(var a=[n[0]],s=0,u=i.length;s<u;s+=1)a.push(i[s],n[s+1]);return a}var Wp=function(n){return Object.assign(n,{isCss:!0})};function rc(n){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];if(Yr(n)||Xi(n))return Wp(lr(Dp(Va,Yi([n],i,!0))));var s=n;return i.length===0&&s.length===1&&typeof s[0]=="string"?lr(s):Wp(lr(Dp(s,i)))}function Cu(n,i,a){if(a===void 0&&(a=Vr),!i)throw eo(1,i);var s=function(u){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return n(i,a,rc.apply(void 0,Yi([u],f,!1)))};return s.attrs=function(u){return Cu(n,i,mt(mt({},a),{attrs:Array.prototype.concat(a.attrs,u).filter(Boolean)}))},s.withConfig=function(u){return Cu(n,i,mt(mt({},a),u))},s}var mm=function(n){return Cu(M1,n)},B=mm;Zh.forEach(function(n){B[n]=mm(n)});function Ae(n){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];var s=xu(rc.apply(void 0,Yi([n],i,!1))),u=nm(s);return new fm(u,s)}const gm=E.createContext(),F1=({children:n})=>{const[i,a]=E.useState(!1);return x.jsx(gm.Provider,{value:{buttonFade:i,setButtonFade:a},children:n})},$1=()=>E.useContext(gm);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function D1(n,i,a){return(i=U1(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}function Up(n,i){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),a.push.apply(a,s)}return a}function W(n){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Up(Object(a),!0).forEach(function(s){D1(n,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Up(Object(a)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))})}return n}function W1(n,i){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var s=a.call(n,i||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function U1(n){var i=W1(n,"string");return typeof i=="symbol"?i:i+""}const Bp=()=>{};let ic={},vm={},ym=null,wm={mark:Bp,measure:Bp};try{typeof window<"u"&&(ic=window),typeof document<"u"&&(vm=document),typeof MutationObserver<"u"&&(ym=MutationObserver),typeof performance<"u"&&(wm=performance)}catch{}const{userAgent:Hp=""}=ic.navigator||{},Dn=ic,Re=vm,Vp=ym,ya=wm;Dn.document;const hn=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",xm=~Hp.indexOf("MSIE")||~Hp.indexOf("Trident/");var B1=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,H1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},V1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},km=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ot="classic",Ya="duotone",Y1="sharp",X1="sharp-duotone",Cm=[ot,Ya,Y1,X1],G1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Q1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},K1=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),q1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},J1=["fak","fa-kit","fakd","fa-kit-duotone"],Yp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Z1=["kit"],ew={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},tw=["fak","fakd"],nw={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xp={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},wa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],iw=["fak","fa-kit","fakd","fa-kit-duotone"],ow={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},aw={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},sw={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Eu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},lw=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],bu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...rw,...lw],uw=["solid","regular","light","thin","duotone","brands"],Em=[1,2,3,4,5,6,7,8,9,10],cw=Em.concat([11,12,13,14,15,16,17,18,19,20]),fw=[...Object.keys(sw),...uw,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wa.GROUP,wa.SWAP_OPACITY,wa.PRIMARY,wa.SECONDARY].concat(Em.map(n=>"".concat(n,"x"))).concat(cw.map(n=>"w-".concat(n))),dw={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const cn="___FONT_AWESOME___",Pu=16,bm="fa",Pm="svg-inline--fa",ur="data-fa-i2svg",Tu="data-fa-pseudo-element",pw="data-fa-pseudo-element-pending",oc="data-prefix",ac="data-icon",Gp="fontawesome-i2svg",hw="async",mw=["HTML","HEAD","STYLE","SCRIPT"],Tm=(()=>{try{return!0}catch{return!1}})();function to(n){return new Proxy(n,{get(i,a){return a in i?i[a]:i[ot]}})}const Rm=W({},Sm);Rm[ot]=W(W(W(W({},{"fa-duotone":"duotone"}),Sm[ot]),Yp.kit),Yp["kit-duotone"]);const gw=to(Rm),Ru=W({},q1);Ru[ot]=W(W(W(W({},{duotone:"fad"}),Ru[ot]),Xp.kit),Xp["kit-duotone"]);const Qp=to(Ru),_u=W({},Eu);_u[ot]=W(W({},_u[ot]),nw.kit);const sc=to(_u),Nu=W({},aw);Nu[ot]=W(W({},Nu[ot]),ew.kit);to(Nu);const vw=B1,_m="fa-layers-text",yw=H1,ww=W({},G1);to(ww);const xw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ru=V1,Sw=[...Z1,...fw],Bi=Dn.FontAwesomeConfig||{};function kw(n){var i=Re.querySelector("script["+n+"]");if(i)return i.getAttribute(n)}function Cw(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Re&&typeof Re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(i=>{let[a,s]=i;const u=Cw(kw(a));u!=null&&(Bi[s]=u)});const Nm={styleDefault:"solid",familyDefault:ot,cssPrefix:bm,replacementClass:Pm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bi.familyPrefix&&(Bi.cssPrefix=Bi.familyPrefix);const Xr=W(W({},Nm),Bi);Xr.autoReplaceSvg||(Xr.observeMutations=!1);const ne={};Object.keys(Nm).forEach(n=>{Object.defineProperty(ne,n,{enumerable:!0,set:function(i){Xr[n]=i,Hi.forEach(a=>a(ne))},get:function(){return Xr[n]}})});Object.defineProperty(ne,"familyPrefix",{enumerable:!0,set:function(n){Xr.cssPrefix=n,Hi.forEach(i=>i(ne))},get:function(){return Xr.cssPrefix}});Dn.FontAwesomeConfig=ne;const Hi=[];function Ew(n){return Hi.push(n),()=>{Hi.splice(Hi.indexOf(n),1)}}const Ln=Pu,Xt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bw(n){if(!n||!hn)return;const i=Re.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=n;const a=Re.head.childNodes;let s=null;for(let u=a.length-1;u>-1;u--){const f=a[u],p=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(s=f)}return Re.head.insertBefore(i,s),n}const Pw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gi(){let n=12,i="";for(;n-- >0;)i+=Pw[Math.random()*62|0];return i}function qr(n){const i=[];for(let a=(n||[]).length>>>0;a--;)i[a]=n[a];return i}function lc(n){return n.classList?qr(n.classList):(n.getAttribute("class")||"").split(" ").filter(i=>i)}function jm(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tw(n){return Object.keys(n||{}).reduce((i,a)=>i+"".concat(a,'="').concat(jm(n[a]),'" '),"").trim()}function Xa(n){return Object.keys(n||{}).reduce((i,a)=>i+"".concat(a,": ").concat(n[a].trim(),";"),"")}function uc(n){return n.size!==Xt.size||n.x!==Xt.x||n.y!==Xt.y||n.rotate!==Xt.rotate||n.flipX||n.flipY}function Rw(n){let{transform:i,containerWidth:a,iconWidth:s}=n;const u={transform:"translate(".concat(a/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(f," ").concat(p," ").concat(h)},g={transform:"translate(".concat(s/2*-1," -256)")};return{outer:u,inner:m,path:g}}function _w(n){let{transform:i,width:a=Pu,height:s=Pu,startCentered:u=!1}=n,f="";return u&&xm?f+="translate(".concat(i.x/Ln-a/2,"em, ").concat(i.y/Ln-s/2,"em) "):u?f+="translate(calc(-50% + ".concat(i.x/Ln,"em), calc(-50% + ").concat(i.y/Ln,"em)) "):f+="translate(".concat(i.x/Ln,"em, ").concat(i.y/Ln,"em) "),f+="scale(".concat(i.size/Ln*(i.flipX?-1:1),", ").concat(i.size/Ln*(i.flipY?-1:1),") "),f+="rotate(".concat(i.rotate,"deg) "),f}var Nw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
}`;function Im(){const n=bm,i=Pm,a=ne.cssPrefix,s=ne.replacementClass;let u=Nw;if(a!==n||s!==i){const f=new RegExp("\\.".concat(n,"\\-"),"g"),p=new RegExp("\\--".concat(n,"\\-"),"g"),h=new RegExp("\\.".concat(i),"g");u=u.replace(f,".".concat(a,"-")).replace(p,"--".concat(a,"-")).replace(h,".".concat(s))}return u}let Kp=!1;function iu(){ne.autoAddCss&&!Kp&&(bw(Im()),Kp=!0)}var jw={mixout(){return{dom:{css:Im,insertCss:iu}}},hooks(){return{beforeDOMElementCreation(){iu()},beforeI2svg(){iu()}}}};const fn=Dn||{};fn[cn]||(fn[cn]={});fn[cn].styles||(fn[cn].styles={});fn[cn].hooks||(fn[cn].hooks={});fn[cn].shims||(fn[cn].shims=[]);var Gt=fn[cn];const Om=[],Lm=function(){Re.removeEventListener("DOMContentLoaded",Lm),Aa=1,Om.map(n=>n())};let Aa=!1;hn&&(Aa=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),Aa||Re.addEventListener("DOMContentLoaded",Lm));function Iw(n){hn&&(Aa?setTimeout(n,0):Om.push(n))}function no(n){const{tag:i,attributes:a={},children:s=[]}=n;return typeof n=="string"?jm(n):"<".concat(i," ").concat(Tw(a),">").concat(s.map(no).join(""),"</").concat(i,">")}function qp(n,i,a){if(n&&n[i]&&n[i][a])return{prefix:i,iconName:a,icon:n[i][a]}}var ou=function(i,a,s,u){var f=Object.keys(i),p=f.length,h=a,m,g,y;for(s===void 0?(m=1,y=i[f[0]]):(m=0,y=s);m<p;m++)g=f[m],y=h(y,i[g],g,i);return y};function Ow(n){const i=[];let a=0;const s=n.length;for(;a<s;){const u=n.charCodeAt(a++);if(u>=55296&&u<=56319&&a<s){const f=n.charCodeAt(a++);(f&64512)==56320?i.push(((u&1023)<<10)+(f&1023)+65536):(i.push(u),a--)}else i.push(u)}return i}function ju(n){const i=Ow(n);return i.length===1?i[0].toString(16):null}function Lw(n,i){const a=n.length;let s=n.charCodeAt(i),u;return s>=55296&&s<=56319&&a>i+1&&(u=n.charCodeAt(i+1),u>=56320&&u<=57343)?(s-55296)*1024+u-56320+65536:s}function Jp(n){return Object.keys(n).reduce((i,a)=>{const s=n[a];return!!s.icon?i[s.iconName]=s.icon:i[a]=s,i},{})}function Iu(n,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=a,u=Jp(i);typeof Gt.hooks.addPack=="function"&&!s?Gt.hooks.addPack(n,Jp(i)):Gt.styles[n]=W(W({},Gt.styles[n]||{}),u),n==="fas"&&Iu("fa",i)}const{styles:Qi,shims:Aw}=Gt,Am=Object.keys(sc),zw=Am.reduce((n,i)=>(n[i]=Object.keys(sc[i]),n),{});let cc=null,zm={},Mm={},Fm={},$m={},Dm={};function Mw(n){return~Sw.indexOf(n)}function Fw(n,i){const a=i.split("-"),s=a[0],u=a.slice(1).join("-");return s===n&&u!==""&&!Mw(u)?u:null}const Wm=()=>{const n=s=>ou(Qi,(u,f,p)=>(u[p]=ou(f,s,{}),u),{});zm=n((s,u,f)=>(u[3]&&(s[u[3]]=f),u[2]&&u[2].filter(h=>typeof h=="number").forEach(h=>{s[h.toString(16)]=f}),s)),Mm=n((s,u,f)=>(s[f]=f,u[2]&&u[2].filter(h=>typeof h=="string").forEach(h=>{s[h]=f}),s)),Dm=n((s,u,f)=>{const p=u[2];return s[f]=f,p.forEach(h=>{s[h]=f}),s});const i="far"in Qi||ne.autoFetchSvg,a=ou(Aw,(s,u)=>{const f=u[0];let p=u[1];const h=u[2];return p==="far"&&!i&&(p="fas"),typeof f=="string"&&(s.names[f]={prefix:p,iconName:h}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:p,iconName:h}),s},{names:{},unicodes:{}});Fm=a.names,$m=a.unicodes,cc=Ga(ne.styleDefault,{family:ne.familyDefault})};Ew(n=>{cc=Ga(n.styleDefault,{family:ne.familyDefault})});Wm();function fc(n,i){return(zm[n]||{})[i]}function $w(n,i){return(Mm[n]||{})[i]}function ar(n,i){return(Dm[n]||{})[i]}function Um(n){return Fm[n]||{prefix:null,iconName:null}}function Dw(n){const i=$m[n],a=fc("fas",n);return i||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Wn(){return cc}const Bm=()=>({prefix:null,iconName:null,rest:[]});function Ww(n){let i=ot;const a=Am.reduce((s,u)=>(s[u]="".concat(ne.cssPrefix,"-").concat(u),s),{});return Cm.forEach(s=>{(n.includes(a[s])||n.some(u=>zw[s].includes(u)))&&(i=s)}),i}function Ga(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:a=ot}=i,s=gw[a][n];if(a===Ya&&!n)return"fad";const u=Qp[a][n]||Qp[a][s],f=n in Gt.styles?n:null;return u||f||null}function Uw(n){let i=[],a=null;return n.forEach(s=>{const u=Fw(ne.cssPrefix,s);u?a=u:s&&i.push(s)}),{iconName:a,rest:i}}function Zp(n){return n.sort().filter((i,a,s)=>s.indexOf(i)===a)}function Qa(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:a=!1}=i;let s=null;const u=bu.concat(iw),f=Zp(n.filter(C=>u.includes(C))),p=Zp(n.filter(C=>!bu.includes(C))),h=f.filter(C=>(s=C,!km.includes(C))),[m=null]=h,g=Ww(f),y=W(W({},Uw(p)),{},{prefix:Ga(m,{family:g})});return W(W(W({},y),Yw({values:n,family:g,styles:Qi,config:ne,canonical:y,givenPrefix:s})),Bw(a,s,y))}function Bw(n,i,a){let{prefix:s,iconName:u}=a;if(n||!s||!u)return{prefix:s,iconName:u};const f=i==="fa"?Um(u):{},p=ar(s,u);return u=f.iconName||p||u,s=f.prefix||s,s==="far"&&!Qi.far&&Qi.fas&&!ne.autoFetchSvg&&(s="fas"),{prefix:s,iconName:u}}const Hw=Cm.filter(n=>n!==ot||n!==Ya),Vw=Object.keys(Eu).filter(n=>n!==ot).map(n=>Object.keys(Eu[n])).flat();function Yw(n){const{values:i,family:a,canonical:s,givenPrefix:u="",styles:f={},config:p={}}=n,h=a===Ya,m=i.includes("fa-duotone")||i.includes("fad"),g=p.familyDefault==="duotone",y=s.prefix==="fad"||s.prefix==="fa-duotone";if(!h&&(m||g||y)&&(s.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(s.prefix="fab"),!s.prefix&&Hw.includes(a)&&(Object.keys(f).find(w=>Vw.includes(w))||p.autoFetchSvg)){const w=K1.get(a).defaultShortPrefixId;s.prefix=w,s.iconName=ar(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||u==="fa")&&(s.prefix=Wn()||"fas"),s}class Xw{constructor(){this.definitions={}}add(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];const u=a.reduce(this._pullDefinitions,{});Object.keys(u).forEach(f=>{this.definitions[f]=W(W({},this.definitions[f]||{}),u[f]),Iu(f,u[f]);const p=sc[ot][f];p&&Iu(p,u[f]),Wm()})}reset(){this.definitions={}}_pullDefinitions(i,a){const s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(u=>{const{prefix:f,iconName:p,icon:h}=s[u],m=h[2];i[f]||(i[f]={}),m.length>0&&m.forEach(g=>{typeof g=="string"&&(i[f][g]=h)}),i[f][p]=h}),i}}let eh=[],$r={};const Wr={},Gw=Object.keys(Wr);function Qw(n,i){let{mixoutsTo:a}=i;return eh=n,$r={},Object.keys(Wr).forEach(s=>{Gw.indexOf(s)===-1&&delete Wr[s]}),eh.forEach(s=>{const u=s.mixout?s.mixout():{};if(Object.keys(u).forEach(f=>{typeof u[f]=="function"&&(a[f]=u[f]),typeof u[f]=="object"&&Object.keys(u[f]).forEach(p=>{a[f]||(a[f]={}),a[f][p]=u[f][p]})}),s.hooks){const f=s.hooks();Object.keys(f).forEach(p=>{$r[p]||($r[p]=[]),$r[p].push(f[p])})}s.provides&&s.provides(Wr)}),a}function Ou(n,i){for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];return($r[n]||[]).forEach(p=>{i=p.apply(null,[i,...s])}),i}function cr(n){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];($r[n]||[]).forEach(f=>{f.apply(null,a)})}function Un(){const n=arguments[0],i=Array.prototype.slice.call(arguments,1);return Wr[n]?Wr[n].apply(null,i):void 0}function Lu(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:i}=n;const a=n.prefix||Wn();if(i)return i=ar(a,i)||i,qp(Hm.definitions,a,i)||qp(Gt.styles,a,i)}const Hm=new Xw,Kw=()=>{ne.autoReplaceSvg=!1,ne.observeMutations=!1,cr("noAuto")},qw={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hn?(cr("beforeI2svg",n),Un("pseudoElements2svg",n),Un("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:i}=n;ne.autoReplaceSvg===!1&&(ne.autoReplaceSvg=!0),ne.observeMutations=!0,Iw(()=>{Zw({autoReplaceSvgRoot:i}),cr("watch",n)})}},Jw={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ar(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const i=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ga(n[0]);return{prefix:a,iconName:ar(a,i)||i}}if(typeof n=="string"&&(n.indexOf("".concat(ne.cssPrefix,"-"))>-1||n.match(vw))){const i=Qa(n.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wn(),iconName:ar(i.prefix,i.iconName)||i.iconName}}if(typeof n=="string"){const i=Wn();return{prefix:i,iconName:ar(i,n)||n}}}},St={noAuto:Kw,config:ne,dom:qw,parse:Jw,library:Hm,findIconDefinition:Lu,toHtml:no},Zw=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:i=Re}=n;(Object.keys(Gt.styles).length>0||ne.autoFetchSvg)&&hn&&ne.autoReplaceSvg&&St.dom.i2svg({node:i})};function Ka(n,i){return Object.defineProperty(n,"abstract",{get:i}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(a=>no(a))}}),Object.defineProperty(n,"node",{get:function(){if(!hn)return;const a=Re.createElement("div");return a.innerHTML=n.html,a.children}}),n}function ex(n){let{children:i,main:a,mask:s,attributes:u,styles:f,transform:p}=n;if(uc(p)&&a.found&&!s.found){const{width:h,height:m}=a,g={x:h/m/2,y:.5};u.style=Xa(W(W({},f),{},{"transform-origin":"".concat(g.x+p.x/16,"em ").concat(g.y+p.y/16,"em")}))}return[{tag:"svg",attributes:u,children:i}]}function tx(n){let{prefix:i,iconName:a,children:s,attributes:u,symbol:f}=n;const p=f===!0?"".concat(i,"-").concat(ne.cssPrefix,"-").concat(a):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},u),{},{id:p}),children:s}]}]}function dc(n){const{icons:{main:i,mask:a},prefix:s,iconName:u,transform:f,symbol:p,title:h,maskId:m,titleId:g,extra:y,watchable:C=!1}=n,{width:w,height:T}=a.found?a:i,R=tw.includes(s),I=[ne.replacementClass,u?"".concat(ne.cssPrefix,"-").concat(u):""].filter(V=>y.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(y.classes).join(" ");let O={children:[],attributes:W(W({},y.attributes),{},{"data-prefix":s,"data-icon":u,class:I,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})};const L=R&&!~y.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};C&&(O.attributes[ur]=""),h&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(g||Gi())},children:[h]}),delete O.attributes.title);const N=W(W({},O),{},{prefix:s,iconName:u,main:i,mask:a,maskId:m,transform:f,symbol:p,styles:W(W({},L),y.styles)}),{children:z,attributes:D}=a.found&&i.found?Un("generateAbstractMask",N)||{children:[],attributes:{}}:Un("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=z,N.attributes=D,p?tx(N):ex(N)}function th(n){const{content:i,width:a,height:s,transform:u,title:f,extra:p,watchable:h=!1}=n,m=W(W(W({},p.attributes),f?{title:f}:{}),{},{class:p.classes.join(" ")});h&&(m[ur]="");const g=W({},p.styles);uc(u)&&(g.transform=_w({transform:u,startCentered:!0,width:a,height:s}),g["-webkit-transform"]=g.transform);const y=Xa(g);y.length>0&&(m.style=y);const C=[];return C.push({tag:"span",attributes:m,children:[i]}),f&&C.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),C}function nx(n){const{content:i,title:a,extra:s}=n,u=W(W(W({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),f=Xa(s.styles);f.length>0&&(u.style=f);const p=[];return p.push({tag:"span",attributes:u,children:[i]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}const{styles:au}=Gt;function Au(n){const i=n[0],a=n[1],[s]=n.slice(4);let u=null;return Array.isArray(s)?u={tag:"g",attributes:{class:"".concat(ne.cssPrefix,"-").concat(ru.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ne.cssPrefix,"-").concat(ru.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ne.cssPrefix,"-").concat(ru.PRIMARY),fill:"currentColor",d:s[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:i,height:a,icon:u}}const rx={found:!1,width:512,height:512};function ix(n,i){!Tm&&!ne.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(i,'" is missing.'))}function zu(n,i){let a=i;return i==="fa"&&ne.styleDefault!==null&&(i=Wn()),new Promise((s,u)=>{if(a==="fa"){const f=Um(n);n=f.iconName||n,i=f.prefix||i}if(n&&i&&au[i]&&au[i][n]){const f=au[i][n];return s(Au(f))}ix(n,i),s(W(W({},rx),{},{icon:ne.showMissingIcons&&n?Un("missingIconAbstract")||{}:{}}))})}const nh=()=>{},Mu=ne.measurePerformance&&ya&&ya.mark&&ya.measure?ya:{mark:nh,measure:nh},Wi='FA "6.7.2"',ox=n=>(Mu.mark("".concat(Wi," ").concat(n," begins")),()=>Vm(n)),Vm=n=>{Mu.mark("".concat(Wi," ").concat(n," ends")),Mu.measure("".concat(Wi," ").concat(n),"".concat(Wi," ").concat(n," begins"),"".concat(Wi," ").concat(n," ends"))};var pc={begin:ox,end:Vm};const _a=()=>{};function rh(n){return typeof(n.getAttribute?n.getAttribute(ur):null)=="string"}function ax(n){const i=n.getAttribute?n.getAttribute(oc):null,a=n.getAttribute?n.getAttribute(ac):null;return i&&a}function sx(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(ne.replacementClass)}function lx(){return ne.autoReplaceSvg===!0?Na.replace:Na[ne.autoReplaceSvg]||Na.replace}function ux(n){return Re.createElementNS("http://www.w3.org/2000/svg",n)}function cx(n){return Re.createElement(n)}function Ym(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:a=n.tag==="svg"?ux:cx}=i;if(typeof n=="string")return Re.createTextNode(n);const s=a(n.tag);return Object.keys(n.attributes||[]).forEach(function(f){s.setAttribute(f,n.attributes[f])}),(n.children||[]).forEach(function(f){s.appendChild(Ym(f,{ceFn:a}))}),s}function fx(n){let i=" ".concat(n.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}const Na={replace:function(n){const i=n[0];if(i.parentNode)if(n[1].forEach(a=>{i.parentNode.insertBefore(Ym(a),i)}),i.getAttribute(ur)===null&&ne.keepOriginalSource){let a=Re.createComment(fx(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(n){const i=n[0],a=n[1];if(~lc(i).indexOf(ne.replacementClass))return Na.replace(n);const s=new RegExp("".concat(ne.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){const f=a[0].attributes.class.split(" ").reduce((p,h)=>(h===ne.replacementClass||h.match(s)?p.toSvg.push(h):p.toNode.push(h),p),{toNode:[],toSvg:[]});a[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",f.toNode.join(" "))}const u=a.map(f=>no(f)).join(`
`);i.setAttribute(ur,""),i.innerHTML=u}};function ih(n){n()}function Xm(n,i){const a=typeof i=="function"?i:_a;if(n.length===0)a();else{let s=ih;ne.mutateApproach===hw&&(s=Dn.requestAnimationFrame||ih),s(()=>{const u=lx(),f=pc.begin("mutate");n.map(u),f(),a()})}}let hc=!1;function Gm(){hc=!0}function Fu(){hc=!1}let za=null;function oh(n){if(!Vp||!ne.observeMutations)return;const{treeCallback:i=_a,nodeCallback:a=_a,pseudoElementsCallback:s=_a,observeMutationsRoot:u=Re}=n;za=new Vp(f=>{if(hc)return;const p=Wn();qr(f).forEach(h=>{if(h.type==="childList"&&h.addedNodes.length>0&&!rh(h.addedNodes[0])&&(ne.searchPseudoElements&&s(h.target),i(h.target)),h.type==="attributes"&&h.target.parentNode&&ne.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&rh(h.target)&&~xw.indexOf(h.attributeName))if(h.attributeName==="class"&&ax(h.target)){const{prefix:m,iconName:g}=Qa(lc(h.target));h.target.setAttribute(oc,m||p),g&&h.target.setAttribute(ac,g)}else sx(h.target)&&a(h.target)})}),hn&&za.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function dx(){za&&za.disconnect()}function px(n){const i=n.getAttribute("style");let a=[];return i&&(a=i.split(";").reduce((s,u)=>{const f=u.split(":"),p=f[0],h=f.slice(1);return p&&h.length>0&&(s[p]=h.join(":").trim()),s},{})),a}function hx(n){const i=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),s=n.innerText!==void 0?n.innerText.trim():"";let u=Qa(lc(n));return u.prefix||(u.prefix=Wn()),i&&a&&(u.prefix=i,u.iconName=a),u.iconName&&u.prefix||(u.prefix&&s.length>0&&(u.iconName=$w(u.prefix,n.innerText)||fc(u.prefix,ju(n.innerText))),!u.iconName&&ne.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=n.firstChild.data)),u}function mx(n){const i=qr(n.attributes).reduce((u,f)=>(u.name!=="class"&&u.name!=="style"&&(u[f.name]=f.value),u),{}),a=n.getAttribute("title"),s=n.getAttribute("data-fa-title-id");return ne.autoA11y&&(a?i["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(s||Gi()):(i["aria-hidden"]="true",i.focusable="false")),i}function gx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ah(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:a,prefix:s,rest:u}=hx(n),f=mx(n),p=Ou("parseNodeAttributes",{},n);let h=i.styleParser?px(n):[];return W({iconName:a,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:s,transform:Xt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:h,attributes:f}},p)}const{styles:vx}=Gt;function Qm(n){const i=ne.autoReplaceSvg==="nest"?ah(n,{styleParser:!1}):ah(n);return~i.extra.classes.indexOf(_m)?Un("generateLayersText",n,i):Un("generateSvgReplacementMutation",n,i)}function yx(){return[...J1,...bu]}function sh(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hn)return Promise.resolve();const a=Re.documentElement.classList,s=y=>a.add("".concat(Gp,"-").concat(y)),u=y=>a.remove("".concat(Gp,"-").concat(y)),f=ne.autoFetchSvg?yx():km.concat(Object.keys(vx));f.includes("fa")||f.push("fa");const p=[".".concat(_m,":not([").concat(ur,"])")].concat(f.map(y=>".".concat(y,":not([").concat(ur,"])"))).join(", ");if(p.length===0)return Promise.resolve();let h=[];try{h=qr(n.querySelectorAll(p))}catch{}if(h.length>0)s("pending"),u("complete");else return Promise.resolve();const m=pc.begin("onTree"),g=h.reduce((y,C)=>{try{const w=Qm(C);w&&y.push(w)}catch(w){Tm||w.name==="MissingIcon"&&console.error(w)}return y},[]);return new Promise((y,C)=>{Promise.all(g).then(w=>{Xm(w,()=>{s("active"),s("complete"),u("pending"),typeof i=="function"&&i(),m(),y()})}).catch(w=>{m(),C(w)})})}function wx(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qm(n).then(a=>{a&&Xm([a],i)})}function xx(n){return function(i){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(i||{}).icon?i:Lu(i||{});let{mask:u}=a;return u&&(u=(u||{}).icon?u:Lu(u||{})),n(s,W(W({},a),{},{mask:u}))}}const Sx=function(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=Xt,symbol:s=!1,mask:u=null,maskId:f=null,title:p=null,titleId:h=null,classes:m=[],attributes:g={},styles:y={}}=i;if(!n)return;const{prefix:C,iconName:w,icon:T}=n;return Ka(W({type:"icon"},n),()=>(cr("beforeDOMElementCreation",{iconDefinition:n,params:i}),ne.autoA11y&&(p?g["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(h||Gi()):(g["aria-hidden"]="true",g.focusable="false")),dc({icons:{main:Au(T),mask:u?Au(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:w,transform:W(W({},Xt),a),symbol:s,title:p,maskId:f,titleId:h,extra:{attributes:g,styles:y,classes:m}})))};var kx={mixout(){return{icon:xx(Sx)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=sh,n.nodeCallback=wx,n}}},provides(n){n.i2svg=function(i){const{node:a=Re,callback:s=()=>{}}=i;return sh(a,s)},n.generateSvgReplacementMutation=function(i,a){const{iconName:s,title:u,titleId:f,prefix:p,transform:h,symbol:m,mask:g,maskId:y,extra:C}=a;return new Promise((w,T)=>{Promise.all([zu(s,p),g.iconName?zu(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[I,O]=R;w([i,dc({icons:{main:I,mask:O},prefix:p,iconName:s,transform:h,symbol:m,maskId:y,title:u,titleId:f,extra:C,watchable:!0})])}).catch(T)})},n.generateAbstractIcon=function(i){let{children:a,attributes:s,main:u,transform:f,styles:p}=i;const h=Xa(p);h.length>0&&(s.style=h);let m;return uc(f)&&(m=Un("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),a.push(m||u.icon),{children:a,attributes:s}}}},Cx={mixout(){return{layer(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:a=[]}=i;return Ka({type:"layer"},()=>{cr("beforeDOMElementCreation",{assembler:n,params:i});let s=[];return n(u=>{Array.isArray(u)?u.map(f=>{s=s.concat(f.abstract)}):s=s.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(ne.cssPrefix,"-layers"),...a].join(" ")},children:s}]})}}}},Ex={mixout(){return{counter(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:a=null,classes:s=[],attributes:u={},styles:f={}}=i;return Ka({type:"counter",content:n},()=>(cr("beforeDOMElementCreation",{content:n,params:i}),nx({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(ne.cssPrefix,"-layers-counter"),...s]}})))}}}},bx={mixout(){return{text(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=Xt,title:s=null,classes:u=[],attributes:f={},styles:p={}}=i;return Ka({type:"text",content:n},()=>(cr("beforeDOMElementCreation",{content:n,params:i}),th({content:n,transform:W(W({},Xt),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(ne.cssPrefix,"-layers-text"),...u]}})))}}},provides(n){n.generateLayersText=function(i,a){const{title:s,transform:u,extra:f}=a;let p=null,h=null;if(xm){const m=parseInt(getComputedStyle(i).fontSize,10),g=i.getBoundingClientRect();p=g.width/m,h=g.height/m}return ne.autoA11y&&!s&&(f.attributes["aria-hidden"]="true"),Promise.resolve([i,th({content:i.innerHTML,width:p,height:h,transform:u,title:s,extra:f,watchable:!0})])}}};const Px=new RegExp('"',"ug"),lh=[1105920,1112319],uh=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),Q1),dw),ow),$u=Object.keys(uh).reduce((n,i)=>(n[i.toLowerCase()]=uh[i],n),{}),Tx=Object.keys($u).reduce((n,i)=>{const a=$u[i];return n[i]=a[900]||[...Object.entries(a)][0][1],n},{});function Rx(n){const i=n.replace(Px,""),a=Lw(i,0),s=a>=lh[0]&&a<=lh[1],u=i.length===2?i[0]===i[1]:!1;return{value:ju(u?i[0]:i),isSecondary:s||u}}function _x(n,i){const a=n.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(i),u=isNaN(s)?"normal":s;return($u[a]||{})[u]||Tx[a]}function ch(n,i){const a="".concat(pw).concat(i.replace(":","-"));return new Promise((s,u)=>{if(n.getAttribute(a)!==null)return s();const p=qr(n.children).filter(w=>w.getAttribute(Tu)===i)[0],h=Dn.getComputedStyle(n,i),m=h.getPropertyValue("font-family"),g=m.match(yw),y=h.getPropertyValue("font-weight"),C=h.getPropertyValue("content");if(p&&!g)return n.removeChild(p),s();if(g&&C!=="none"&&C!==""){const w=h.getPropertyValue("content");let T=_x(m,y);const{value:R,isSecondary:I}=Rx(w),O=g[0].startsWith("FontAwesome");let L=fc(T,R),N=L;if(O){const z=Dw(R);z.iconName&&z.prefix&&(L=z.iconName,T=z.prefix)}if(L&&!I&&(!p||p.getAttribute(oc)!==T||p.getAttribute(ac)!==N)){n.setAttribute(a,N),p&&n.removeChild(p);const z=gx(),{extra:D}=z;D.attributes[Tu]=i,zu(L,T).then(V=>{const Q=dc(W(W({},z),{},{icons:{main:V,mask:Bm()},prefix:T,iconName:N,extra:D,watchable:!0})),Y=Re.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?n.insertBefore(Y,n.firstChild):n.appendChild(Y),Y.outerHTML=Q.map(se=>no(se)).join(`
`),n.removeAttribute(a),s()}).catch(u)}else s()}else s()})}function Nx(n){return Promise.all([ch(n,"::before"),ch(n,"::after")])}function jx(n){return n.parentNode!==document.head&&!~mw.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Tu)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function fh(n){if(hn)return new Promise((i,a)=>{const s=qr(n.querySelectorAll("*")).filter(jx).map(Nx),u=pc.begin("searchPseudoElements");Gm(),Promise.all(s).then(()=>{u(),Fu(),i()}).catch(()=>{u(),Fu(),a()})})}var Ix={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=fh,n}}},provides(n){n.pseudoElements2svg=function(i){const{node:a=Re}=i;ne.searchPseudoElements&&fh(a)}}};let dh=!1;var Ox={mixout(){return{dom:{unwatch(){Gm(),dh=!0}}}},hooks(){return{bootstrap(){oh(Ou("mutationObserverCallbacks",{}))},noAuto(){dx()},watch(n){const{observeMutationsRoot:i}=n;dh?Fu():oh(Ou("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}};const ph=n=>{let i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((a,s)=>{const u=s.toLowerCase().split("-"),f=u[0];let p=u.slice(1).join("-");if(f&&p==="h")return a.flipX=!0,a;if(f&&p==="v")return a.flipY=!0,a;if(p=parseFloat(p),isNaN(p))return a;switch(f){case"grow":a.size=a.size+p;break;case"shrink":a.size=a.size-p;break;case"left":a.x=a.x-p;break;case"right":a.x=a.x+p;break;case"up":a.y=a.y-p;break;case"down":a.y=a.y+p;break;case"rotate":a.rotate=a.rotate+p;break}return a},i)};var Lx={mixout(){return{parse:{transform:n=>ph(n)}}},hooks(){return{parseNodeAttributes(n,i){const a=i.getAttribute("data-fa-transform");return a&&(n.transform=ph(a)),n}}},provides(n){n.generateAbstractTransformGrouping=function(i){let{main:a,transform:s,containerWidth:u,iconWidth:f}=i;const p={transform:"translate(".concat(u/2," 256)")},h="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),y={transform:"".concat(h," ").concat(m," ").concat(g)},C={transform:"translate(".concat(f/2*-1," -256)")},w={outer:p,inner:y,path:C};return{tag:"g",attributes:W({},w.outer),children:[{tag:"g",attributes:W({},w.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:W(W({},a.icon.attributes),w.path)}]}]}}}};const su={x:0,y:0,width:"100%",height:"100%"};function hh(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||i)&&(n.attributes.fill="black"),n}function Ax(n){return n.tag==="g"?n.children:[n]}var zx={hooks(){return{parseNodeAttributes(n,i){const a=i.getAttribute("data-fa-mask"),s=a?Qa(a.split(" ").map(u=>u.trim())):Bm();return s.prefix||(s.prefix=Wn()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(i){let{children:a,attributes:s,main:u,mask:f,maskId:p,transform:h}=i;const{width:m,icon:g}=u,{width:y,icon:C}=f,w=Rw({transform:h,containerWidth:y,iconWidth:m}),T={tag:"rect",attributes:W(W({},su),{},{fill:"white"})},R=g.children?{children:g.children.map(hh)}:{},I={tag:"g",attributes:W({},w.inner),children:[hh(W({tag:g.tag,attributes:W(W({},g.attributes),w.path)},R))]},O={tag:"g",attributes:W({},w.outer),children:[I]},L="mask-".concat(p||Gi()),N="clip-".concat(p||Gi()),z={tag:"mask",attributes:W(W({},su),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,O]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ax(C)},z]};return a.push(D,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(L,")")},su)}),{children:a,attributes:s}}}},Mx={provides(n){let i=!1;Dn.matchMedia&&(i=Dn.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const a=[],s={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:W(W({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=W(W({},u),{},{attributeName:"opacity"}),p={tag:"circle",attributes:W(W({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||p.children.push({tag:"animate",attributes:W(W({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(p),a.push({tag:"path",attributes:W(W({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:W(W({},f),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:W(W({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Fx={hooks(){return{parseNodeAttributes(n,i){const a=i.getAttribute("data-fa-symbol"),s=a===null?!1:a===""?!0:a;return n.symbol=s,n}}}},$x=[jw,kx,Cx,Ex,bx,Ix,Ox,Lx,zx,Mx,Fx];Qw($x,{mixoutsTo:St});St.noAuto;St.config;St.library;St.dom;const Du=St.parse;St.findIconDefinition;St.toHtml;const Dx=St.icon;St.layer;St.text;St.counter;var lu={exports:{}},uu,mh;function Wx(){if(mh)return uu;mh=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return uu=n,uu}var cu,gh;function Ux(){if(gh)return cu;gh=1;var n=Wx();function i(){}function a(){}return a.resetWarningCache=i,cu=function(){function s(p,h,m,g,y,C){if(C!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}s.isRequired=s;function u(){return s}var f={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:u,element:s,elementType:s,instanceOf:u,node:s,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:a,resetWarningCache:i};return f.PropTypes=f,f},cu}var vh;function Bx(){return vh||(vh=1,lu.exports=Ux()()),lu.exports}var Hx=Bx();const ee=Vu(Hx);function yh(n,i){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),a.push.apply(a,s)}return a}function Yt(n){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?yh(Object(a),!0).forEach(function(s){Dr(n,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):yh(Object(a)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))})}return n}function Ma(n){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ma(n)}function Dr(n,i,a){return i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}function Vx(n,i){if(n==null)return{};var a={},s=Object.keys(n),u,f;for(f=0;f<s.length;f++)u=s[f],!(i.indexOf(u)>=0)&&(a[u]=n[u]);return a}function Yx(n,i){if(n==null)return{};var a=Vx(n,i),s,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)s=f[u],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(a[s]=n[s])}return a}function Wu(n){return Xx(n)||Gx(n)||Qx(n)||Kx()}function Xx(n){if(Array.isArray(n))return Uu(n)}function Gx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Qx(n,i){if(n){if(typeof n=="string")return Uu(n,i);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Uu(n,i)}}function Uu(n,i){(i==null||i>n.length)&&(i=n.length);for(var a=0,s=new Array(i);a<i;a++)s[a]=n[a];return s}function Kx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qx(n){var i,a=n.beat,s=n.fade,u=n.beatFade,f=n.bounce,p=n.shake,h=n.flash,m=n.spin,g=n.spinPulse,y=n.spinReverse,C=n.pulse,w=n.fixedWidth,T=n.inverse,R=n.border,I=n.listItem,O=n.flip,L=n.size,N=n.rotation,z=n.pull,D=(i={"fa-beat":a,"fa-fade":s,"fa-beat-fade":u,"fa-bounce":f,"fa-shake":p,"fa-flash":h,"fa-spin":m,"fa-spin-reverse":y,"fa-spin-pulse":g,"fa-pulse":C,"fa-fw":w,"fa-inverse":T,"fa-border":R,"fa-li":I,"fa-flip":O===!0,"fa-flip-horizontal":O==="horizontal"||O==="both","fa-flip-vertical":O==="vertical"||O==="both"},Dr(i,"fa-".concat(L),typeof L<"u"&&L!==null),Dr(i,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),Dr(i,"fa-pull-".concat(z),typeof z<"u"&&z!==null),Dr(i,"fa-swap-opacity",n.swapOpacity),i);return Object.keys(D).map(function(V){return D[V]?V:null}).filter(function(V){return V})}function Jx(n){return n=n-0,n===n}function Km(n){return Jx(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(i,a){return a?a.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var Zx=["style"];function eS(n){return n.charAt(0).toUpperCase()+n.slice(1)}function tS(n){return n.split(";").map(function(i){return i.trim()}).filter(function(i){return i}).reduce(function(i,a){var s=a.indexOf(":"),u=Km(a.slice(0,s)),f=a.slice(s+1).trim();return u.startsWith("webkit")?i[eS(u)]=f:i[u]=f,i},{})}function qm(n,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof i=="string")return i;var s=(i.children||[]).map(function(m){return qm(n,m)}),u=Object.keys(i.attributes||{}).reduce(function(m,g){var y=i.attributes[g];switch(g){case"class":m.attrs.className=y,delete i.attributes.class;break;case"style":m.attrs.style=tS(y);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?m.attrs[g.toLowerCase()]=y:m.attrs[Km(g)]=y}return m},{attrs:{}}),f=a.style,p=f===void 0?{}:f,h=Yx(a,Zx);return u.attrs.style=Yt(Yt({},u.attrs.style),p),n.apply(void 0,[i.tag,Yt(Yt({},u.attrs),h)].concat(Wu(s)))}var Jm=!1;try{Jm=!0}catch{}function nS(){if(!Jm&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function wh(n){if(n&&Ma(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Du.icon)return Du.icon(n);if(n===null)return null;if(n&&Ma(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function fu(n,i){return Array.isArray(i)&&i.length>0||!Array.isArray(i)&&i?Dr({},n,i):{}}var xh={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ht=Fn.forwardRef(function(n,i){var a=Yt(Yt({},xh),n),s=a.icon,u=a.mask,f=a.symbol,p=a.className,h=a.title,m=a.titleId,g=a.maskId,y=wh(s),C=fu("classes",[].concat(Wu(qx(a)),Wu((p||"").split(" ")))),w=fu("transform",typeof a.transform=="string"?Du.transform(a.transform):a.transform),T=fu("mask",wh(u)),R=Dx(y,Yt(Yt(Yt(Yt({},C),w),T),{},{symbol:f,title:h,titleId:m,maskId:g}));if(!R)return nS("Could not find icon",y),null;var I=R.abstract,O={ref:i};return Object.keys(a).forEach(function(L){xh.hasOwnProperty(L)||(O[L]=a[L])}),rS(I[0],O)});ht.displayName="FontAwesomeIcon";ht.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};var rS=qm.bind(null,Fn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const iS={prefix:"far",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"]},oS=({logo:n})=>{const i=()=>{switch(n){case 1:return x.jsxs("div",{style:Ft.cleaningContainer,children:[x.jsx("div",{style:Ft.dust,children:"Dust"}),x.jsx("div",{style:Ft.busters,children:"Busters"})]});case 2:return x.jsx("div",{style:Ft.soleSoul,children:"SoleSoul.com"});case 3:return x.jsxs("div",{style:Ft.chatContainer,children:[x.jsx("div",{style:Ft.classChat,children:"Class"}),x.jsxs("div",{style:Ft.chatRow,children:[x.jsx("div",{style:{...Ft.classChat,marginLeft:"55px"},children:"Chat"}),x.jsx(ht,{style:Ft.chatIcon,icon:iS})]})]});case 4:return x.jsx("div",{style:Ft.movieNight,children:"Movie Night"});case 5:return x.jsx("div",{style:Ft.dashboard,children:"Daily Helper (WIP)"});default:return null}};return x.jsx(aS,{children:i()})},aS=B.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-family: 'Poppins';
`,Ft={cleaningContainer:{display:"flex",width:"100%",padding:"10px",backgroundColor:"var(--dark)"},dust:{fontSize:"1.1em",color:"white",fontFamily:"Poppins"},busters:{fontSize:"1.1em",color:"#FFD530",fontFamily:"Poppins"},soleSoul:{fontSize:"1.2em",color:"var(--bisque)",fontFamily:"Righteous"},chatContainer:{display:"flex",flexDirection:"column",padding:"10px",borderRadius:"3px",marginRight:"30px"},classChat:{fontSize:"1.4em",color:"#F7ECE1",fontFamily:"Arial"},chatRow:{display:"flex",justifyContent:"center",marginTop:"-10px",gap:"5px"},chatIcon:{color:"var(--neon-green)",marginTop:"12px",fontStyle:"bold"},movieNight:{fontSize:"1.2em",fontFamily:"Righteous",color:"var(--bisque)",padding:"5px",border:"4px solid var(--bisque)",borderRadius:"10px",textShadow:`
            0 0 0.125em rgb(223, 58, 29),
            0 0 0.45em rgb(255, 42, 5)
        `,boxShadow:"0 0 0.2em"},dashboard:{fontSize:"1.2em",fontFamily:"Poppins",color:"var(--silver-light)"}},sS=({isVisible:n,delay:i,id:a})=>{let s;switch(a){case 1:s=1;break;case 2:s=2;break;case 3:s=3;break;case 4:s=4;break;case 5:s=5;break;default:s=void 0;break}return x.jsx(uS,{delay:i,style:{display:n?"block":"none"},children:x.jsx(oS,{logo:s})})},lS=Ae`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,uS=B.div`
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
  animation: ${lS} 0.3s ease-out forwards;
  animation-delay: ${({delay:n})=>n||"0s"};
  text-align: center;

  
  @media (max-width: 768px) {
    /* visibility: hidden; */
  }
    @media (max-width: 375px) {
      /* visibility: hidden; */
  }
`;function cS({id:n,path:i,title:a,label:s,type:u,color:f,backgroundColor:p,setCursorHoverColor:h,setIsHoveringCards:m}){const[g,y]=E.useState(!1),[C,w]=E.useState(!1),[T,R]=E.useState(!1),{setButtonFade:I}=$1(),O=Ji(),L=()=>{w(!0),R(!0),I(!0),m(!1);const N=setTimeout(()=>{w(!1),O(`/${i}`),I(!1)},800);return()=>{clearTimeout(N)}};return x.jsxs(pS,{children:[T&&x.jsx(yS,{style:{backgroundColor:C?p:""}}),x.jsx(hS,{children:x.jsxs(mS,{onClick:L,onKeyDown:N=>N.key==="Enter"&&L(),onFocus:()=>y(n),onBlur:()=>y(null),onMouseEnter:()=>{y(n),h(f),m(!0)},onMouseLeave:()=>{y(null),h("var(--darker)"),m(!1)},className:`${g===n?"hovered":""} ${C?"clicked":""}`,style:{backgroundColor:g===n?p:"",color:g===n?f:""},cursorHoverColor:f,children:[x.jsx(gS,{className:g===n?"fade-out":"fade-in",backgroundColor:p,children:u}),x.jsx(vS,{className:g===n?"fade-out":"fade-in",backgroundColor:p,children:s}),x.jsx(sS,{isVisible:g===n,id:n,delay:"0.3s"})]},n)})]})}const mc=Ae`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,gc=Ae`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,Sh=Ae`
0% {
  box-shadow: 0 0 0 var(--dark);
}
100% {
  box-shadow: 1vw 1vw var(--dark);
}
`,fS=Ae`
  0% {
    box-shadow: 1vw 1vw var(--dark);
  }
  100% {
    box-shadow: 0 0 0 var(--dark);
  }
`,dS=Ae`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(3);
  opacity: 1;
}
`,pS=B.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`,hS=B.div`
  position: relative;
`,mS=B.div.attrs({tabIndex:0})`
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
    color: ${n=>n.color};
    border-color: ${n=>n.cursorHoverColor};
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${Sh} 0.5s ease forwards;

    .title {
      animation: ${gc} 0.5s forwards;
    }

    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${fS} 0.8s ease forwards;

    .title {
      animation: ${mc} 0.5s forwards;
    }
  }

  &:focus {
    outline: none;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${Sh} 0.5s ease forwards;
  }

  @media (max-width: 768px) and (min-width: 321px) {
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
    }
  }

  @media (max-width: 480px) and (min-width: 321px) {
    width: 70vw;
    font-size: 1.2em;
    padding: 10px;

    &:active {
      background-color: ${n=>n.backgroundColor};
      color: ${n=>n.color};
    }

    &:hover {
      color: var(--dark) !important;
      background-color: transparent !important;
      transform: none;
    }
  }
`,gS=B.div`
  flex: 1;
  margin: 5px;
  margin-left: 10px;

  @media (max-width: 768px) and (min-width: 321px) {
    color: ${n=>n.backgroundColor};
  }

  &.fade-in {
    animation: ${mc} 0.5s forwards;
  }

  &.fade-out {
    animation: ${gc} 0.5s forwards;
  }
`,vS=B.div`
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;

  &.fade-in {
    animation: ${mc} 0.5s forwards;
  }

  &.fade-out {
    animation: ${gc} 0.5s forwards;
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
`,yS=B.div`
  position: absolute;
  width: 70%;
  height: 80%;
  border-radius: 50%;
  background-color: transparent;
  animation: ${dS} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 110;
  opacity: 1;

  @media (max-width: 768px) {
    /* border-radius: 15px; */
  }
`;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wS={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},nr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const xS={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},SS={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},kS={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},CS={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Zm=E.createContext(),qa=({children:n})=>{const i=[{id:1,title:"Dust Busters",path:"cleaning",type:"Cleaning service",label:"React.js",color:"var(--dark)",backgroundColor:"var(--yellowish)",shadow:"var(--shadow-yellowish)",descriptions:{primary:"Embark on a journey with Dust Busters, an exceptional online platform meticulously hosted on Firebase. This website combines innovative front-end design with a robust back-end infrastructure, complemented by CRUD logic.",secondary:"Envision a React-based front-end that simplifies your experience, whether you're navigating bookings, securely logging in, or leaving insightful reviews. It's akin to having a highly efficient superhero dedicated to cleaning services, right at your fingertips.",tertiary:"Benefiting from Firebase's enchanting hosting capabilities, our site operates with unparalleled efficiency. Swift, secure, and poised for action, Dust Busters stands as your premier destination for a dynamic and reliable online experience. Streamlined cleanup, tailored to perfection!"},images:{browserImage:[{id:"1",src:"/pageimages/dustbusters/1.png",info:"Welcome to the home of Dust Busters! Here you can find...",alt:"browser search"},{id:"2",src:"/pageimages/dustbusters/2.png",info:"...our booking page..",alt:"browser pager"},{id:"3",src:"/pageimages/dustbusters/dbBook.png",info:"...our booking form..",alt:"browser series"},{id:"4",src:"/pageimages/dustbusters/dbLogin.png",info:"...and our login page!",alt:"browser series"},{id:"5",src:"/pageimages/dustbusters/dbReviews.png",info:"Checkout our reviews!",alt:"browser series"}]},repos:[{browser:"https://github.com/jonaelghid3y/DustBusters",icon:x.jsx(ht,{icon:nr})},{website:"https://dustbusters-207c6.web.app/",icon:x.jsx(ht,{icon:xS})}]},{id:2,title:"Sole Soul",path:"webbshop",type:"Web store",label:"React.js",color:"var(--bisque)",backgroundColor:"var(--greenish)",shadow:"var(--shadow-bisuqe)",descriptions:{primary:"Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!",secondary:"Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish!"},images:{browserImage:[{id:"1",src:"/pageimages/webbshop/products.png",info:"Have a look at our products!",alt:"browser search"},{id:"2",src:"/pageimages/webbshop/description.png",info:"And feel free to read more about them!",alt:"browser pager"},{id:"3",src:"/pageimages/webbshop/cart.png",info:"Did you find something you like? Great! Add it to your cart!",alt:"browser series"},{id:"4",src:"/pageimages/webbshop/create.png",info:"Are you an admin? Cool! You can create new products here!",alt:"browser series"},{id:"5",src:"/pageimages/webbshop/admin.png",info:"And you can also manage your products here!",alt:"browser pager"}]},repos:[{browser:"https://github.com/tobionesies/gruppuppgift-webshop-let",icon:x.jsx(ht,{icon:nr})}]},{id:3,title:"Class Chat",path:"chatapp",type:"Chat app",label:"React Native",color:"var(--neon-green)",backgroundColor:"var(--light-purple)",shadow:"var(--shadow-neon-green)",descriptions:{primary:"Class Chat serves as a dedicated platform for group communication, meticulously designed to facilitate smooth interaction within your class or group. Leveraging CRUD logic (Create, Read, Update, Delete), it efficiently manages users and messages, ensuring easy collaboration. Security is paramount, with the implementation of a secure access token mechanism, allowing only authorized individuals to join the conversation.",secondary:"Whether you're in a classroom setting or simply spending time with your friends, Class Chat provides a comprehensive solution for your communication needs. The platform empowers you to create a dynamic and engaging space for your group, giving you control over participants and content. Here's to hassle-free communication!"},images:{nativeImage:[{id:"1",src:"/pageimages/chatapp/login.jpg",info:"Welcome to Class Chat! Login to get started!",alt:"browser search"},{id:"2",src:"/pageimages/chatapp/registeruser.jpg",info:"Register a new user!",alt:"browser pager"},{id:"3",src:"/pageimages/chatapp/chat.jpg",info:"Start chatting with your friends!",alt:"browser series"},{id:"4",src:"/pageimages/chatapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"5",src:"/pageimages/chatapp/profile.jpg",info:"Check out your profile!",alt:"browser series"},{id:"6",src:"/pageimages/chatapp/photo.jpg",info:"Upload a profile picture!",alt:"browser series"},{id:"7",src:"/pageimages/chatapp/profilephoto.jpg",info:"And you can also upload a profile picture!",alt:"browser series"},{id:"8",src:"/pageimages/chatapp/chatphoto.jpg",info:"Cool!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/ClassChat",icon:x.jsx(ht,{icon:nr})}]},{id:4,title:"Movie Night",path:"movieapp",type:"Movie browser",label:"React.js / React Native",color:"var(--redish)",backgroundColor:"var(--darker)",shadow:"var(--shadow-redish)",descriptions:{primary:"Welcome to Movie Night, where we've got your movie cravings covered effortlessly with the OMDb API. Dive into a treasure trove of movie details, spanning from classic gems to the latest blockbusters. Get the info on titles, release dates, genres, casts, runtimes, ratings, and more.",secondary:"The magic doesn't stop there! With the power-packed combo of React and React Native, Movie Night ensures a seamless experience across different platforms. Whether you're chilling on the web version (courtesy of React) or enjoying the mobile app (crafted with React Native) on your smartphones and tablets, movie exploration has never been this effortless. Time to let the movie marathon begin!"},images:{browserImage:[{id:"1",src:"/pageimages/movieapp/browserSearch.png",info:"Time for a movie night! Search for your favorite movie!",alt:"browser search"},{id:"2",src:"/pageimages/movieapp/browserPager.png",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"/pageimages/movieapp/browserSerier.png",info:"Or is it a series you're looking for? We've got you covered!",alt:"browser series"}],nativeImage:[{id:"1",src:"/pageimages/movieapp/login.jpg",info:"Welcome to Movie Night! Login to get started!",alt:"browser search"},{id:"2",src:"/pageimages/movieapp/movielist.jpg",info:"We have a wide range of movies to choose from!",alt:"browser pager"},{id:"3",src:"/pageimages/movieapp/movieinfo.jpg",info:"Check out the details of your favorite movie!",alt:"browser series"},{id:"4",src:"/pageimages/movieapp/search.jpg",info:"Search for your favorite movie!",alt:"browser series"},{id:"5",src:"/pageimages/movieapp/drawer.jpg",info:"And you can also manage your profile here!",alt:"browser series"},{id:"6",src:"/pageimages/movieapp/mypage.jpg",info:"Check out your profile!",alt:"browser series"}]},repos:[{browser:"https://github.com/starleafer/The-movie-app",icon:x.jsx(ht,{icon:nr})},{native:"https://github.com/starleafer/The-Movie-App-Native",icon:x.jsx(ht,{icon:nr})}]},{id:5,title:"Daily Helper",path:"dashboard",type:"Dashboard",label:"Typescript, Next.js",color:"var(--silver-light)",backgroundColor:"var(--shadow-blueish)",shadow:"var(--shadow-blueish)",descriptions:{primary:"Daily Helper is a web application that helps you manage your daily tasks and schedule.",secondary:"It is built with React and Typescript."},images:{browserImage:[{id:"1",alt:"browser search"}]},repos:[{browser:"https://github.com/starleafer/Daily-Helper",icon:x.jsx(ht,{icon:nr})}]}],a={id:1,title:"About me",path:"about",color:"white",backgroundColor:"var(--dark)",shadow:"var(--shadow-dark)",descriptions:{primary:"Hi there! I'm Emil Stjernlöf, a dedicated Frontend Developer based in Stockholm, Sweden. Currently pursuing my education at Jensen Yrkeshögskola in Kista, I am deeply passionate about creating seamless user experiences.",secondary:"Proficient in JavaScript and specialized in React, I thrive on the challenge of crafting dynamic and interactive web applications. With a keen eye for design and functionality, I believe in the power of technology to enhance the way we interact with the digital world.",tertiary:"My journey as a developer has exposed me to a diverse range of projects, allowing me to adapt swiftly to new technologies and frameworks. I am a strong advocate for collaboration and effective communication, valuing the insights and contributions of fellow developers and stakeholders alike.",quaternary:"Outside of coding, I find inspiration in exploring emerging technologies and trends in the ever-evolving field of frontend development. I am excited to continue pushing boundaries and creating compelling digital experiences that leave a lasting impression."},images:{profilePic:"/src/assets/profilepic1.jpg"},repos:[{browser:"https://github.com/starleafer",icon:x.jsx(ht,{icon:nr})},{linkedin:"https://www.linkedin.com/in/emil-stjernlof/",icon:x.jsx(ht,{icon:wS})},{email:"mailto:emil.stjernlof@gmail.com",icon:x.jsx(ht,{icon:CS})}]};return x.jsx(Zm.Provider,{value:{card:i,main:a},children:n})};qa.propTypes={children:ee.node.isRequired};const qt=()=>E.useContext(Zm);function ES({setCursorHoverColor:n,setIsHoveringCards:i}){const{card:a}=qt(),s={offscreen:{x:100,opacity:0},onscreen:u=>({x:0,opacity:1,transition:{type:"spring",bounce:.4,delay:u*.1}})};return x.jsx(qa,{children:x.jsx(bS,{children:x.jsx(PS,{children:a.map((u,f)=>x.jsx(TS,{variants:s,initial:"offscreen",animate:"onscreen",custom:f,children:x.jsx(cS,{id:u.id,path:u.path,title:u.title,type:u.type,label:u.label,color:u.color,backgroundColor:u.backgroundColor,image:u.image,setCursorHoverColor:n,setIsHoveringCards:i},u.id)},u.id))})})})}const bS=B.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 90vw;
        margin: 3em 0 0 4em;
    }
    `,PS=B.div`
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
`,TS=B(it.div)`
    display: flex;
    width: 15vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,Rt=({width:n,border:i,onClick:a,color:s,padding:u,backgroundColor:f,invertedColors:p,small:h,label:m,previous:g,next:y,cleaning:C,showCopyAlert:w,copyMessage:T,showViewSwitch:R})=>x.jsxs(RS,{children:[x.jsx(IS,{onClick:a,color:s,backgroundColor:f,padding:u,cleaning:C,width:n,border:i,invertedColors:p,small:h,showViewSwitch:R,children:g||y?x.jsxs(x.Fragment,{children:[g&&x.jsxs(x.Fragment,{children:[x.jsx(Bu,{color:s,backgroundColor:f,invertedColors:p,icon:kS})," ",m]}),y&&x.jsxs(x.Fragment,{children:[m," ",x.jsx(Bu,{color:s,backgroundColor:f,invertedColors:p,icon:SS})]})]}):m}),w&&T&&x.jsx(OS,{color:s,backgroundColor:f,className:"clicked",children:T})]});Rt.propTypes={width:ee.string,border:ee.bool,onClick:ee.func,color:ee.string,backgroundColor:ee.string,invertedColors:ee.bool,shadowColor:ee.string,label:ee.node,previous:ee.bool,next:ee.bool,cleaning:ee.bool,showCopyAlert:ee.bool,copyMessage:ee.string};const RS=B.div`
  position: relative;
  display: inline-flex;
`,kh=()=>Ae`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
`,Ch=()=>Ae`
  0% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
`,_S=Ae`
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
`,NS=Ae`
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
`,jS=Ae`
  0% {
    left: -100%;
    opacity: 1;
  }
  100% {
    left: 200%;
    opacity: 1;
  }
  `,IS=B.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${n=>n.width||""};
  border: 1px solid transparent;
  color: ${n=>n.invertedColors?n.backgroundColor:n.color||"var(--dark)"};
  background-color: ${n=>n.invertedColors?n.color:n.backgroundColor||"transparent"};
  border-radius: 10px;
  padding: ${n=>n.padding||"10px"};
  font-size: clamp(15px, 2vw, 20px);
  font-family: "Poiret One";
  font-weight: 600;
  gap: 0.4em;
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  ${n=>rc`
    &:hover {
      transform: translateY(-0.3vw);
      animation: ${kh(n.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${n.invertedColors?n.backgroundColor:n.color||"var(--dark)"};
    }

    &:not(:hover) {
      animation: ${Ch(n.shadowColor||"var(--dark)")} 0.8s;
      border-color: ${i=>i.border?`1px solid ${i.color}`:i.invertedColors&&i.border?i.backgroundColor:"transparent"};
      background-color: ${i=>i.showViewSwitch?i.color:"transparent"};
    }

    &:focus {
      transform: translateY(-0.3vw);
      animation: ${kh(n.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${n.invertedColors?n.backgroundColor:n.color||"var(--dark)"};
    }

    &:focus:not(:hover) {
      transform: translateY(0);
      animation: ${Ch(n.shadowColor||"var(--dark)")} 0.5s ease
        forwards;
      border-color: ${n.border?n.color:n.invertedColors&&n.border?n.backgroundColor:"transparent"};
    }

    &:active {
      color: ${i=>i.invertedColors?i.color:i.backgroundColor||"transparent"};
      background-color: ${i=>i.invertedColors?i.backgroundColor:i.color||"var(--dark)"};
      transition: color 0.1s, background-color 0.1s;

      ${Bu} {
        color: ${n.invertedColors?n.color:n.backgroundColor||"var(--dark)"};
      }
    }
  `}

  @media (max-width: 1536px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    width: ${n=>n.small?"4rem":"9rem"};
    padding: 1.3vw;
    border: 1px solid
      ${n=>n.invertedColors?n.backgroundColor:n.color||"var(--dark)"};
  }
`,OS=B.div`
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
  background-color: ${n=>n.color};
  color: ${n=>n.backgroundColor};
  transform: translateX(-50%);
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  overflow: hidden;

  &.clicked {
    animation: ${_S} 2s forwards;

    @media (max-width: 768px) {
      animation: ${NS} 1.5s forwards;
      height: 3.5vh;
      padding: 6px;
      left: 100%;
      margin-left: 1em;
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
      animation: ${jS} 0.5s ease-in-out;
      animation-delay: 0.3s;
    }
  }
`,Bu=B(ht)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5em;
  height: 0.5em;
  font-size: 1.5em;
  color: ${n=>n.invertedColors?n.backgroundColor:n.color||"var(--dark)"};
`;var LS="1.1.20";function eg(n,i,a){return Math.max(n,Math.min(i,a))}function AS(n,i,a){return(1-a)*n+a*i}function zS(n,i,a,s){return AS(n,i,1-Math.exp(-a*s))}function MS(n,i){return(n%i+i)%i}var FS=class{constructor(){re(this,"isRunning",!1);re(this,"value",0);re(this,"from",0);re(this,"to",0);re(this,"currentTime",0);re(this,"lerp");re(this,"duration");re(this,"easing");re(this,"onUpdate")}advance(n){var a;if(!this.isRunning)return;let i=!1;if(this.duration&&this.easing){this.currentTime+=n;const s=eg(0,this.currentTime/this.duration,1);i=s>=1;const u=i?1:this.easing(s);this.value=this.from+(this.to-this.from)*u}else this.lerp?(this.value=zS(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,i=!0)):(this.value=this.to,i=!0);i&&this.stop(),(a=this.onUpdate)==null||a.call(this,this.value,i)}stop(){this.isRunning=!1}fromTo(n,i,{lerp:a,duration:s,easing:u,onStart:f,onUpdate:p}){this.from=this.value=n,this.to=i,this.lerp=a,this.duration=s,this.easing=u,this.currentTime=0,this.isRunning=!0,f==null||f(),this.onUpdate=p}};function $S(n,i){let a;return function(...s){let u=this;clearTimeout(a),a=setTimeout(()=>{a=void 0,n.apply(u,s)},i)}}var DS=class{constructor(n,i,{autoResize:a=!0,debounce:s=250}={}){re(this,"width",0);re(this,"height",0);re(this,"scrollHeight",0);re(this,"scrollWidth",0);re(this,"debouncedResize");re(this,"wrapperResizeObserver");re(this,"contentResizeObserver");re(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});re(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});re(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=i,a&&(this.debouncedResize=$S(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,i;(n=this.wrapperResizeObserver)==null||n.disconnect(),(i=this.contentResizeObserver)==null||i.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},tg=class{constructor(){re(this,"events",{})}emit(n,...i){var s;let a=this.events[n]||[];for(let u=0,f=a.length;u<f;u++)(s=a[u])==null||s.call(a,...i)}on(n,i){var a;return(a=this.events[n])!=null&&a.push(i)||(this.events[n]=[i]),()=>{var s;this.events[n]=(s=this.events[n])==null?void 0:s.filter(u=>i!==u)}}off(n,i){var a;this.events[n]=(a=this.events[n])==null?void 0:a.filter(s=>i!==s)}destroy(){this.events={}}},Eh=100/6,An={passive:!1},WS=class{constructor(n,i={wheelMultiplier:1,touchMultiplier:1}){re(this,"touchStart",{x:0,y:0});re(this,"lastDelta",{x:0,y:0});re(this,"window",{width:0,height:0});re(this,"emitter",new tg);re(this,"onTouchStart",n=>{const{clientX:i,clientY:a}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=i,this.touchStart.y=a,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});re(this,"onTouchMove",n=>{const{clientX:i,clientY:a}=n.targetTouches?n.targetTouches[0]:n,s=-(i-this.touchStart.x)*this.options.touchMultiplier,u=-(a-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=a,this.lastDelta={x:s,y:u},this.emitter.emit("scroll",{deltaX:s,deltaY:u,event:n})});re(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});re(this,"onWheel",n=>{let{deltaX:i,deltaY:a,deltaMode:s}=n;const u=s===1?Eh:s===2?this.window.width:1,f=s===1?Eh:s===2?this.window.height:1;i*=u,a*=f,i*=this.options.wheelMultiplier,a*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:a,event:n})});re(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=i,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,An),this.element.addEventListener("touchstart",this.onTouchStart,An),this.element.addEventListener("touchmove",this.onTouchMove,An),this.element.addEventListener("touchend",this.onTouchEnd,An)}on(n,i){return this.emitter.on(n,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,An),this.element.removeEventListener("touchstart",this.onTouchStart,An),this.element.removeEventListener("touchmove",this.onTouchMove,An),this.element.removeEventListener("touchend",this.onTouchEnd,An)}},vc=class{constructor({wrapper:n=window,content:i=document.documentElement,eventsTarget:a=n,smoothWheel:s=!0,syncTouch:u=!1,syncTouchLerp:f=.075,touchInertiaMultiplier:p=35,duration:h,easing:m=Q=>Math.min(1,1.001-Math.pow(2,-10*Q)),lerp:g=.1,infinite:y=!1,orientation:C="vertical",gestureOrientation:w="vertical",touchMultiplier:T=1,wheelMultiplier:R=1,autoResize:I=!0,prevent:O,virtualScroll:L,overscroll:N=!0,autoRaf:z=!1,anchors:D=!1,__experimental__naiveDimensions:V=!1}={}){re(this,"_isScrolling",!1);re(this,"_isStopped",!1);re(this,"_isLocked",!1);re(this,"_preventNextNativeScrollEvent",!1);re(this,"_resetVelocityTimeout",null);re(this,"__rafID",null);re(this,"isTouching");re(this,"time",0);re(this,"userData",{});re(this,"lastVelocity",0);re(this,"velocity",0);re(this,"direction",0);re(this,"options");re(this,"targetScroll");re(this,"animatedScroll");re(this,"animate",new FS);re(this,"emitter",new tg);re(this,"dimensions");re(this,"virtualScroll");re(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});re(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});re(this,"onClick",n=>{const a=n.composedPath().find(s=>{var u;return s instanceof HTMLAnchorElement&&((u=s.getAttribute("href"))==null?void 0:u.startsWith("#"))});if(a){const s=a.getAttribute("href");if(s){const u=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(s,u)}}});re(this,"onPointerDown",n=>{n.button===1&&this.reset()});re(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:i,deltaY:a,event:s}=n;if(this.emitter.emit("virtual-scroll",{deltaX:i,deltaY:a,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const u=s.type.includes("touch"),f=s.type.includes("wheel");this.isTouching=s.type==="touchstart"||s.type==="touchmove";const p=i===0&&a===0;if(this.options.syncTouch&&u&&s.type==="touchstart"&&p&&!this.isStopped&&!this.isLocked){this.reset();return}const m=this.options.gestureOrientation==="vertical"&&a===0||this.options.gestureOrientation==="horizontal"&&i===0;if(p||m)return;let g=s.composedPath();g=g.slice(0,g.indexOf(this.rootElement));const y=this.options.prevent;if(g.find(O=>{var L,N,z;return O instanceof HTMLElement&&(typeof y=="function"&&(y==null?void 0:y(O))||((L=O.hasAttribute)==null?void 0:L.call(O,"data-lenis-prevent"))||u&&((N=O.hasAttribute)==null?void 0:N.call(O,"data-lenis-prevent-touch"))||f&&((z=O.hasAttribute)==null?void 0:z.call(O,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){s.preventDefault();return}if(!(this.options.syncTouch&&u||this.options.smoothWheel&&f)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let w=a;this.options.gestureOrientation==="both"?w=Math.abs(a)>Math.abs(i)?a:i:this.options.gestureOrientation==="horizontal"&&(w=i),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&a>0||this.animatedScroll===this.limit&&a<0))&&(s.lenisStopPropagation=!0),s.preventDefault();const T=u&&this.options.syncTouch,I=u&&s.type==="touchend"&&Math.abs(w)>5;I&&(w=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+w,{programmatic:!1,...T?{lerp:I?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});re(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});re(this,"raf",n=>{const i=n-(this.time||n);this.time=n,this.animate.advance(i*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=LS,(!n||n===document.documentElement)&&(n=window),this.options={wrapper:n,content:i,eventsTarget:a,smoothWheel:s,syncTouch:u,syncTouchLerp:f,touchInertiaMultiplier:p,duration:h,easing:m,lerp:g,infinite:y,gestureOrientation:w,orientation:C,touchMultiplier:T,wheelMultiplier:R,autoResize:I,prevent:O,virtualScroll:L,overscroll:N,autoRaf:z,anchors:D,__experimental__naiveDimensions:V},this.dimensions=new DS(n,i,{autoResize:I}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new WS(a,{touchMultiplier:T,wheelMultiplier:R}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(n,i){return this.emitter.on(n,i)}off(n,i){return this.emitter.off(n,i)}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(n,{offset:i=0,immediate:a=!1,lock:s=!1,duration:u=this.options.duration,easing:f=this.options.easing,lerp:p=this.options.lerp,onStart:h,onComplete:m,force:g=!1,programmatic:y=!0,userData:C}={}){if(!((this.isStopped||this.isLocked)&&!g)){if(typeof n=="string"&&["top","left","start"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let w;if(typeof n=="string"?w=document.querySelector(n):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(w=n),w){if(this.options.wrapper!==window){const R=this.rootElement.getBoundingClientRect();i-=this.isHorizontal?R.left:R.top}const T=w.getBoundingClientRect();n=(this.isHorizontal?T.left:T.top)+this.animatedScroll}}if(typeof n=="number"){if(n+=i,n=Math.round(n),this.options.infinite?y&&(this.targetScroll=this.animatedScroll=this.scroll):n=eg(0,n,this.limit),n===this.targetScroll){h==null||h(this),m==null||m(this);return}if(this.userData=C??{},a){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}y||(this.targetScroll=n),this.animate.fromTo(this.animatedScroll,n,{duration:u,easing:f,lerp:p,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",h==null||h(this)},onUpdate:(w,T)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=w-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=w,this.setScroll(this.scroll),y&&(this.targetScroll=w),T||this.emit(),T&&(this.reset(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?MS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function US(){const{main:n}=qt(),i=E.useRef(null),a=E.useRef(null),[s,u]=E.useState(null),[f,p]=E.useState(""),[h,m]=E.useState(!1);E.useEffect(()=>{if(window.matchMedia("(max-width: 768px) and (min-width: 321px)").matches&&i.current){let C=function(T){w.raf(T),requestAnimationFrame(C)};const w=new vc({wrapper:i.current,content:a.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return u(w),requestAnimationFrame(C),()=>{w.destroy()}}},[]);const g=(y,C)=>{Object.keys(y)[0]==="email"?(navigator.clipboard.writeText("emil.stjernlof@gmail.com"),p("Email copied!"),m(!0),setTimeout(()=>{m(!1),p("")},2e3)):window.open(Object.values(y)[0],"_blank")};return x.jsxs(HS,{ref:i,children:[x.jsxs(VS,{ref:a,children:[x.jsxs(YS,{children:[x.jsx("h2",{children:n.title}),x.jsx(xa,{delay:"0.2s",children:x.jsx("p",{children:n.descriptions.primary})}),x.jsx(xa,{delay:"0.3s",children:x.jsx("p",{children:n.descriptions.secondary})}),x.jsx(xa,{delay:"0.4s",children:x.jsx("p",{children:n.descriptions.tertiary})}),x.jsx(xa,{delay:"0.5s",children:x.jsx("p",{children:n.descriptions.quaternary})})]}),x.jsx(XS,{src:n.images.profilePic,alt:"profile picture"})]}),x.jsx(GS,{children:n.repos.map((y,C)=>x.jsx(QS,{children:x.jsx(Rt,{color:n.color,backgroundColor:n.backgroundColor,onClick:()=>g(y),label:x.jsx(KS,{children:y.icon}),showCopyAlert:Object.keys(y)[0]==="email"&&f,copyMessage:f,small:!0})},C))})]})}const ng=Ae`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,rg=Ae`
  from {
    transform: translateY(5%);
  }
  to {
    transform: translateY(0);
  }
`,BS=Ae`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,HS=B.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  overflow: hidden;

  @media (max-width: 1536px) {
  }

  @media (max-width: 768px) and (min-width: 321px) {
    height: auto;
    min-height: 100vh;
    padding: 5vh 0 5vh 0;
    overflow-y: auto; // Enable scrolling for mobile
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
  }
`,VS=B.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: white;
  animation: ${ng} 2s, ${rg} 1s;
  margin-bottom: 15vh;

  @media (max-width: 768px) and (min-width: 321px) {
    width: 90%;
    flex-direction: column;
    margin: 8vh 0;
    
  }
`,YS=B.div`
  font-weight: 500;
  font-size: 1.1rem;
  font-family: "Lato", sans-serif;
  margin-right: 6vw;
  max-height: 500px;
  max-width: 500px;

  @media (max-width: 768px) and (min-width: 321px) {
    margin-right: 0;
    margin-bottom: 4vh;
    max-width: 100%;
  }
`,xa=B.div`
  margin: 1em 0;

  p {
    opacity: 0;
    animation: ${BS} 1s forwards;
    animation-delay: ${n=>n.delay||"0s"};
    margin: 0;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    font-size: 2.4vw;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    font-size: 2.4vw;
  }
`,XS=B.img`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 20em;
  margin-top: 2em;
  background-color: #fff;
  border-radius: 5%;
  filter: grayscale(100%);
  z-index: 1;

  @media (max-width: 1536px) {
    max-width: 15em;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    max-width: 60%;
    border-radius: 10%;
    margin-top: 0;
  }
`,GS=B.div`
  position: fixed;
  display: flex;
  width: 60%;
  height: 5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 3em;
  opacity: 0;
  animation: ${ng} 2s forwards, ${rg} 1s forwards;
  animation-delay: 0.7s;
  bottom: 20vh;

  @media (max-width: 1536px) {
    bottom: 10vh;
    left: 20%;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    position: relative;
    bottom: auto;
    left: auto;
    width: 90%;
    margin-top: 2vh;
    justify-content: center;
  }
`,QS=B.div`
  width: 5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 321px) {
    width: 4rem;
    height: 2rem;
  }
`,KS=B.div`
  transform: translateZ(0);
  will-change: transform;

  svg {
    width: 2em;
    height: 2em;

    @media (max-width: 768px) and (min-width: 321px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`,qS=()=>{const[n,i]=E.useState({x:null,y:null}),a=s=>{i({x:s.clientX,y:s.clientY})};return E.useEffect(()=>(window.addEventListener("mousemove",a),()=>window.removeEventListener("mousemove",a)),[]),n};function JS({setCursorHoverColor:n,setIsHoveringCards:i}){const[a,s]=E.useState(""),u=E.useRef(null),f=["--dark: #1b1f2e","--greenish: #497770","--yellowish: #f5ca80","--ocean: #00a6a6","--redish: #eeb7b7","--creamy: #f3b88474","--blueish: #12398d","--neon-green: #0ac753","--light-purple: #564d8d","--silver-light: #f7f7f7e8","--test: #c2b8f5","--more-red: #eb7d7d"].map(m=>m.split(": ")[1]),p=()=>f[Math.floor(Math.random()*f.length)],h="Emil Stjernlöf";return E.useEffect(()=>{const m=new IntersectionObserver(([g])=>{g.isIntersecting&&console.log("AboutMe section is in view")},{root:null,rootMargin:"0px",threshold:.1});return u.current&&m.observe(u.current),()=>{u.current&&m.unobserve(u.current)}},[]),x.jsx(x.Fragment,{children:x.jsx(tk,{style:{fontFamily:"Poiret One"},children:x.jsxs(nk,{children:[x.jsx(rk,{initial:{x:"10%",opacity:0},animate:{x:"0%",opacity:1},transition:{duration:.75,ease:"easeOut"},exit:{opacity:1},children:x.jsx(ik,{children:h.split("").map((m,g)=>m===" "?x.jsx("span",{children:" "},g):x.jsx(ok,{hovercolor:a,onMouseEnter:()=>s(p()),children:m},g))})}),x.jsx(ES,{setCursorHoverColor:n,setIsHoveringCards:i})]})})})}const ZS=Ae`
0% {
  text-shadow: 0 0 0 var(--dark);
}
100% {
  text-shadow: 0.7vw 0.7vw var(--dark);
}
`,ek=Ae`
  0% {
    text-shadow: 0.7vw 0.7vw var(--dark);
  }
  100% {
    text-shadow: 0 0 0 var(--dark);
  }
`,tk=B.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #fff;

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
  }
`,nk=B.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 20px 20px 20px 5vw;
  scroll-snap-align: start;
  background-color: ${n=>n.dark?"var(--dark)":"#fff"};
`,rk=B(it.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;
  margin-top: 8vh;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
`,ik=B.h1`
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark);
`,ok=B.span`
  display: inline-block; 
  font-size: clamp(2vw, 10vw, 204px);
  font-weight: 500;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
  background-color: transparent; 
  transition: color 0.2s cubic-bezier(.27,-0.32,.7,1.37), background-color 0.1s , transform 0.3s; 

  &:hover {
    color: ${n=>n.hovercolor||"white"};
    transform: translateY(-0.7vw) translateX(-0.7vw);
    animation: ${ZS} 0.5s  forwards;
    
    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${ek} 0.8s  forwards;
  }
`,ig=E.createContext(),og=({children:n})=>{const[i,a]=E.useState(!1),[s,u]=E.useState(""),f=p=>{a(!0),u(p)};return E.useEffect(()=>{if(i){const p=setTimeout(()=>{a(!1)},800);return()=>clearTimeout(p)}},[i]),x.jsx(ig.Provider,{value:{runTransition:i,setRunTransition:a,transitionDirection:s,setTransitionDirection:u,triggerTransition:f},children:n})},fr=()=>E.useContext(ig);function ag({title:n,shadowColor:i}){const{card:a}=qt(),s=Ji(),{setRunTransition:u,triggerTransition:f}=fr(),p=window.location.pathname.replace("/",""),h=a.find(T=>T.path===p)||a[0],m=a.findIndex(T=>T.path===p),g=h.color,y=h.backgroundColor,C=()=>{u(!0),f("previous");const T=(m-1+a.length)%a.length,R=a[T].path,I=setTimeout(()=>{u(!1),s(`/${R}`)},800);return()=>{clearTimeout(I)}},w=()=>{u(!0),f("next");const T=(m+1)%a.length,R=a[T].path,I=setTimeout(()=>{u(!1),s(`/${R}`)},800);return()=>{clearTimeout(I)}};return x.jsxs(ak,{children:[x.jsx(bh,{className:"navigation-buttons",style:{marginRight:"3em"},children:x.jsx(Rt,{onClick:C,style:{color:g},color:g,shadowColor:i,backgroundColor:y,label:"Previous Project",previous:!0,width:"10em"})}),x.jsx(sk,{children:n}),x.jsx(bh,{className:"navigation-buttons",children:x.jsx(Rt,{onClick:w,style:{color:g},color:g,shadowColor:i,backgroundColor:y,label:"Next Project",next:!0,width:"10em"})})]})}const ak=B.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  gap: 6em;
  margin-top: 4vh;
  z-index: 106;


  @media (max-width: 1536px) and (min-width: 769px) {
    margin-top: 8vh;
  }


  @media (max-width: 768px) and (min-width: 321px) {
    gap: 2em;
    width: 100vw;
    margin-top: 1vh;
    justify-content: flex-start;
    padding-left: 4em;
  }
`,bh=B.div`
  width: 10em;
`,sk=B.h1`
 font-size: clamp(45px, 5vw, 100px);
 font-family: 'Poiret One';

 @media (max-width: 768px) and (min-width: 321px) {
  margin-top: 1em;
 }


`;function lk({color:n,images:i,scrollProgress:a,isNative:s,doubleRepo:u,isSwitchActive:f}){return x.jsx(ck,{isNative:s,isSwitchActive:f,doubleRepo:u,children:x.jsx(fk,{children:i.map((p,h)=>{const m=h/i.length,g=(h+1)/i.length,y=.1/i.length,C=Sa(a,[m-y,m+y,g-y,g+y],h===0?[1,1,1,.2]:h===i.length-1?[.1,1,1,1]:[.1,1,1,.2]),w=pu(C,{stiffness:30,damping:12,mass:1.5,restDelta:1e-5});return x.jsx(dk,{as:it.div,color:n,style:{opacity:w}},h)})})},f)}const uk=Ae`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ck=B.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  bottom: 10vh;
  right: ${n=>n.doubleRepo?n.isSwitchActive?"5vw":"12vw":n.isNative?"12vw":"5vw"};
  z-index: 100;
  opacity: 0;
  animation: ${uk} 0.5s ease-in-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) and (min-width: 321px) {
    position: sticky;
    border: 1px solid red;
    height: 20vh;
    top: 50vh;

  }

`,fk=B.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,dk=B.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${n=>n.color};
  position: relative;
  overflow: hidden;
`,pk=({image:n,images:i=[],onClose:a,color:s,backgroundColor:u,invertedColors:f,doubleRepo:p,shadowColor:h,isNative:m})=>{const[g,y]=E.useState(i.indexOf(n));E.useEffect(()=>{i.indexOf(n)===-1?y(0):y(i.indexOf(n))},[n,i]);const C=()=>{y(R=>(R+1)%i.length)},w=()=>{y(R=>(R-1+i.length)%i.length)},T=i[g];return x.jsx(ov,{children:n&&x.jsx(hk,{as:it.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:a,children:x.jsxs(mk,{as:it.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},onClick:R=>R.stopPropagation(),children:[x.jsxs(yk,{isNative:m,children:[x.jsx(gk,{isNative:m,children:x.jsx(vk,{src:T.src,alt:T.alt||"Image",onClick:a,isNative:m,backgroundColor:u})}),x.jsx(wk,{children:x.jsx(Rt,{color:s,backgroundColor:u,invertedColors:f,shadowColor:h,onClick:a,label:"X",padding:".7em",border:!0,hasIcon:!0,small:!0})})]}),x.jsxs(xk,{children:[x.jsx(Rt,{color:s,backgroundColor:u,invertedColors:f,shadowColor:h,onClick:w,width:"10em",label:"Previous",border:!0,title:!0,hasIcon:!0,previous:!0}),x.jsx(Rt,{color:s,backgroundColor:u,invertedColors:f,shadowColor:h,onClick:C,label:"Next ",width:"10em",border:!0,title:!0,hasIcon:!0,next:!0})]})]})})})},hk=B(it.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 130;
`,mk=B(it.div)`
  border-radius: 10px;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
`,gk=B.div`
  width: ${n=>n.isNative?"35%":"100%"};
  height: ${n=>n.isNative?"auto":"700px"}; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${n=>n.backgroundColor};

  @media (max-width: 1536px) {
    width: ${n=>n.isNative?"60%":"80%"};
    height: ${n=>n.isNative?"auto":"400px"};
  }
`,vk=B(it.img)`
  width: ${n=>n.isNative?"100%":"auto"};
  height: ${n=>n.isNative?"auto":"100%"}; 
  max-height: 100%;
  object-fit: cover;
  background-color: ${n=>n.backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 1536px) {
    width: ${n=>n.isNative?"100%":"auto"};
    height: ${n=>n.isNative?"auto":"100%"};
  }

  @media (max-width: 768px) and (min-width: 321px) {
    width: ${n=>n.isNative?"70%":"auto"};
    height: ${n=>n.isNative?"auto":"100%"};
  }
`,yk=B.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  position: relative;
`,wk=B.div`
  position: absolute;
  top: 5em;
  right: -8em;
  width: 5em;
  margin-top: 0;
  z-index: 110;

  @media (max-width: 768px) and (min-width: 321px) {
    top: ${n=>n.isNative?"2em":n.doubleRepo?"-5em":"1em"};
    right: 4em;
  }
`,xk=B.div`
  display: flex;
  justify-content: center;
  gap: 4em;
  height: 4em;
  width: 25em;
  margin-top: auto;
  padding-bottom: 2em;
`;function Hu({images:n=[],backgroundColor:i,color:a,invertedColors:s,isNative:u,doubleRepo:f,isSwitchActive:p}){const h=E.useRef(null),[m,g]=E.useState(0),[y,C]=E.useState(null),[w,T]=E.useState(null),{scrollYProgress:R}=dp({container:h,offset:["start start","end end"]});E.useEffect(()=>{const N=new vc({wrapper:h.current,content:h.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});T(N);function z(D){N.raf(D),requestAnimationFrame(z)}return requestAnimationFrame(z),()=>{N.destroy()}},[]);const I=(N,z)=>{const D=z===0?.1:.3;N>(z===0?.3:.5)?g(z):N<D&&z>0&&g(z-1)};if(!n||n.length===0)return null;const O=N=>{C(N),w==null||w.stop()},L=()=>{C(null),w==null||w.start()};return x.jsxs(Sk,{ref:h,isNative:u,children:[n.map((N,z)=>{const D=E.useRef(null),{scrollYProgress:V}=dp({target:D,container:h,offset:["start 60%","center center"]}),Q=Sa(R,[0,1],[1,1-(n.length-z)*.05]);av(V,"change",$e=>{I($e,z)});const Y=Sa(V,[0,.5,1],[0,1,1]),se=Sa(V,[0,.5,1],[1.5,1,1]),le=pu(Y,{stiffness:100,damping:20}),ye=pu(se,{stiffness:100,damping:20}),Ve=N.src||N,Ne=N.alt||`Image ${z+1}`,Fe=($e,Ze,De)=>{const Se=75/(Ze-1),H=15+$e*Se,J=Math.min(H,90);return`color-mix(in srgb, ${De} ${J}%, black)`};return x.jsxs(kk,{onClick:()=>O(N),ref:D,isFirst:z===0,isLast:z===n.length-1,isNative:u,style:{backgroundColor:Fe(z,n.length,s?a:i),color:s?i:a,top:u?`${z*10}px`:`${z*35}px`,marginBottom:z===n.length-1?"40vh":"0",scale:Q},children:[x.jsx(Ck,{children:x.jsx(Ek,{children:N.info})}),x.jsx(bk,{isNative:u,children:x.jsx(Pk,{src:Ve,alt:Ne,style:{opacity:le,scale:ye}})})]},N.id||z)}),x.jsx(pk,{image:y,images:n,onClose:L,color:a,backgroundColor:i,invertedColors:s,isNative:u,doubleRepo:f}),x.jsx(lk,{color:a,images:n,scrollProgress:R,isNative:u,doubleRepo:f,isSwitchActive:p})]})}const Sk=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  padding-top: 3vh;
  right: ${n=>n.isNative?"3vw":"10vw"};

  @media (max-width: 768px) and (min-width: 321px) {
    right: 3vw;
  }
  

`,kk=B(it.div)`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: ${n=>n.isNative?"0":"5em"};
  left: 50vw;
  margin-top: ${n=>n.isFirst?"0":"80vh"};
  min-height: ${n=>n.isNative?"450px":"400px"};
  width: ${n=>n.isNative?"25vw":"40vw"};
  padding: 10px 20px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${n=>n.backgroundColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    gap: ${n=>n.isNative?"0":"2em"};
    width: ${n=>n.isNative?"30vw":"40vw"};
    min-height: ${n=>n.isNative?"330px":"300px"};
    padding: 0 20px;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    width: ${n=>n.isNative?"60vw":"75vw"};
    left: ${n=>n.isNative?"25vw":"15vw"};
    justify-content: flex-start;
    margin-left: 1em;

  }

`,Ck=B.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-size: 1rem;
  margin: 0 0 10px 30px;
  width: 170px;
  left: 20px;

  @media (max-width: 1536px) and (min-width: 769px) {
    margin: 0 0 10px 10px;
  }
`,Ek=B.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;   /* Roboto Flex; */


  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1.2vw;
  }
`,bk=B.div`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${n=>(n.isNative,"60%")};
  height: ${n=>n.isNative?"400px":"300px"};
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1536px) {
    height: ${n=>n.isNative?"300px":"200px"};
    width: ${n=>n.isNative?"50%":"60%"};
  }
`,Pk=B(it.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;sg.propTypes={descriptions:ee.shape({primary:ee.string,secondary:ee.string,tertiary:ee.string,quaternary:ee.string}).isRequired,repos:ee.array.isRequired,color:ee.string.isRequired,backgroundColor:ee.string.isRequired,showViewSwitch:ee.bool.isRequired,onSwitchView:ee.func.isRequired,isSwitchActive:ee.bool.isRequired};function sg({descriptions:n,repos:i,color:a,backgroundColor:s,showViewSwitch:u,onSwitchView:f,isSwitchActive:p}){return x.jsxs(Tk,{children:[n.primary&&x.jsxs(du,{children:[n.primary.charAt(0)&&x.jsx("span",{style:{fontSize:"1.25em",fontWeight:"bold"},children:n.primary.charAt(0)}),n.primary.slice(1)]}),n.secondary&&x.jsx(du,{children:n.secondary}),n.tertiary&&x.jsx(du,{children:n.tertiary}),x.jsx("br",{}),x.jsxs(Nk,{showViewSwitch:u,children:[x.jsx(Rk,{children:x.jsx(_k,{color:a,children:i.map((h,m)=>x.jsx(Rt,{color:a,backgroundColor:s,onClick:()=>window.open(Object.values(h)[0],"_blank"),label:x.jsxs(x.Fragment,{children:[h.icon,Object.keys(h)[0]==="browser"&&"Browser code",Object.keys(h)[0]==="native"&&"Native code",Object.keys(h)[0]==="website"&&"Website"]})},m))})}),u&&x.jsx(jk,{children:x.jsx(Rt,{onClick:f,color:a,border:!0,pulse:!0,backgroundColor:s,label:p?"Show Native":"Show Browser",invertedColors:!0,showViewSwitch:u})})]})]})}const Tk=B.div`
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  margin: 2em 0;
  width: 30vw;

  @media (max-width: 768px) and (min-width: 321px) {
    align-items: center;
    justify-content: center;
    margin: 0 3em;
    width: 75vw;
    
  }
`,du=B.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1.2vw;
  }




  @media (max-width: 768px) and (min-width: 321px) {
    font-size: 1em;
  }

`,Rk=B.div`
  display: flex;
  flex-direction: row;
  z-index: 90;
`,_k=B.div`
  display: flex;
  flex-direction: row;
  height: 3em;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  padding: 1em;
  border-radius: 15px;
  border: 4px dotted ${n=>n.color};

  @media (max-width: 768px) and (min-width: 321px) {
    gap: 1em;
    padding: 0.5em;
    border: none;
  }
`,Nk=B.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${n=>n.showViewSwitch?"center":"flex-start"};
  gap: 2em;
  min-height: 3em;
 
`,jk=B.div`

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

  @media (max-width: 768px) and (min-width: 321px) {
    width: 100%;
    min-width: 20%;
    justify-content: flex-start;  
    font-size: .8em;
  }
`,Ik=({nativeImages:n,browserImages:i,backgroundColor:a,color:s,invertedColors:u,doubleRepo:f,isSwitchActive:p,onSwitchView:h})=>{const m={nativeView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:"-100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}}},g={nativeView:{x:"100%",opacity:0,transition:{duration:.5,ease:"easeInOut"}},browserView:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},hidden:{x:"100%",opacity:0}};return x.jsx(Ok,{children:x.jsxs(Lk,{children:[x.jsx(it.div,{variants:m,animate:p?"browserView":"nativeView",initial:"nativeView",style:{position:"absolute",width:"100%",height:"100%"},children:x.jsx(Hu,{images:n,backgroundColor:a,color:s,invertedColors:u,isNative:!0,isSwitchActive:p,doubleRepo:f})}),x.jsx(it.div,{variants:g,animate:p?"browserView":"nativeView",initial:"hidden",style:{position:"absolute",width:"100%",height:"100%"},children:x.jsx(Hu,{images:i,backgroundColor:a,color:s,invertedColors:u,isNative:!1,isSwitchActive:p,doubleRepo:f})})]})})},Ok=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 1vh;

  
  `,Lk=B.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15vh);
  overflow: hidden;
  `;function Ja({title:n,descriptions:i,repos:a,nativeImages:s=[],browserImages:u=[],isNative:f,isBrowser:p,invertedColors:h}){const[m,g]=E.useState(!1),[y,C]=E.useState(!1),[w,T]=E.useState(null),[R,I]=E.useState(null),[O,L]=E.useState(!1),{card:N}=qt(),z=Ji(),{setRunTransition:D,triggerTransition:V}=fr(),Q=window.location.pathname.replace("/",""),Y=N.find(A=>A.path===Q)||N[0],se=Y.color,le=Y.backgroundColor,ye=Y.shadow,Ve=50,Ne=E.useRef(null),Fe=E.useRef(null),[$e,Ze]=E.useState(null);E.useEffect(()=>{g(f&&p)},[f,p]),E.useEffect(()=>{if(window.matchMedia("(max-width: 768px) and (min-width: 321px)").matches&&Ne.current){let ie=function(de){ue.raf(de),requestAnimationFrame(ie)};const ue=new vc({wrapper:Ne.current,content:Fe.current,duration:1.2,orientation:"vertical",smooth:!0,smoothWheel:!0,touchMultiplier:2});return Ze(ue),requestAnimationFrame(ie),()=>{ue.destroy()}}},[]),E.useEffect(()=>{const A=()=>{Ne.current&&L(Ne.current.scrollTop>300)},ie=Ne.current;return ie&&ie.addEventListener("scroll",A),()=>{ie&&ie.removeEventListener("scroll",A)}},[]);const De=()=>{C(!y)},Se=()=>{if(!w||!R)return;const A=w-R,ie=A>Ve,ue=A<-50,de=N.findIndex(fe=>fe.path===Q);if(ie){D(!0),V("next");const fe=(de+1)%N.length,ge=N[fe].path,he=setTimeout(()=>{D(!1),z(`/${ge}`)},800);return()=>clearTimeout(he)}if(ue){D(!0),V("previous");const fe=(de-1+N.length)%N.length,ge=N[fe].path,he=setTimeout(()=>{D(!1),z(`/${ge}`)},800);return()=>clearTimeout(he)}},H=A=>{I(null),T(A.touches[0].clientX)},J=A=>{I(A.touches[0].clientX)},X=()=>{Se()},b=()=>{$e&&$e.scrollTo(0)};return x.jsxs(zk,{ref:Ne,backgroundColor:le,onTouchStart:H,onTouchMove:J,onTouchEnd:X,children:[x.jsxs(Mk,{ref:Fe,color:se,children:[x.jsx($k,{backgroundColor:le,children:x.jsx(ag,{title:n,shadowColor:ye})}),x.jsxs(Fk,{children:[x.jsx(sg,{descriptions:i,repos:a,color:se,backgroundColor:le,showViewSwitch:f&&p,onSwitchView:De,isSwitchActive:y}),x.jsx(Wk,{children:f&&p?x.jsx(Dk,{children:x.jsx(Ik,{nativeImages:s,browserImages:u,backgroundColor:le,color:se,invertedColors:h,doubleRepo:m,isSwitchActive:y})}):x.jsx(Hu,{images:f?s:u,backgroundColor:le,color:se,invertedColors:h,isNative:f})})]})]}),x.jsx(Uk,{onClick:b,show:O,color:se,backgroundColor:le,children:"↑"})]})}const Ak=Ae`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,zk=B.div`
  position: relative;
  display: flex;
  background-color: ${n=>n.backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) and (min-width: 321px) {
    margin: 0;
    padding: 20px 0;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    overflow: hidden;
    width: 90vw;
  }
`,Mk=B.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  animation: ${Ak} 0.8s forwards;
  position: relative;
  color: ${n=>n.color};

  @media (max-width: 768px) and (min-width: 321px) {
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding-top: 20px;
    margin: 0;
    gap: 2em;
  }
`,Fk=B.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  margin-left: 10vw;
  gap: 2em;
  z-index: 105;

  @media (max-width: 768px) and (min-width: 321px) {
    flex-direction: column;
    margin-left: 0;
  }
`,$k=B.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 101;
  background-color: ${n=>n.backgroundColor};
  padding: 20px 0;

  @media (max-width: 768px) and (min-width: 321px) {
    position: relative;
    z-index: 0;
    .navigation-buttons {
      display: none;
    }
  }
`,Dk=B.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`,Wk=B(it.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    pointer-events: auto;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    width: 90vw;
    height: auto;
    min-height: 100vh;
    position: relative;
  }
`,Uk=B.button`
  display: none;

  @media (max-width: 768px) and (min-width: 321px) {
    display: ${n=>n.show?"flex":"none"};
    position: fixed;
    bottom: 2em;
    right: 1em;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    border: 2px solid ${n=>n.color};
    background-color: ${n=>n.backgroundColor};
    color: ${n=>n.color};
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
`;function ro(){const{runTransition:n,transitionDirection:i}=fr(),{card:a}=qt(),s=window.location.pathname.replace("/",""),u=a.findIndex(g=>g.path===s),f=(u-1+a.length)%a.length,p=(u+1)%a.length,h=a[p].backgroundColor,m=a[f].backgroundColor;return x.jsx(x.Fragment,{children:n&&x.jsx(Vk,{direction:i,color:i==="next"?h:m})})}const Bk=Ae`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,Hk=Ae`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,Vk=B(it.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: ${n=>n.color};
  animation: ${n=>n.direction==="next"?Bk:Hk} 0.7s ease-in-out forwards;
`;function Yk(){const{card:n}=qt(),i=n.find(p=>p.path==="chatapp"),[a,s]=E.useState(!0),[u,f]=E.useState(!1);return x.jsxs(x.Fragment,{children:[x.jsx(Ja,{title:i.title,descriptions:i.descriptions,repos:i.repos,nativeImages:i.images.nativeImage,isNative:a,isBrowser:u,previousPage:!0,nextPage:!0}),x.jsx(ro,{})]})}function Xk(){const{runTransition:n}=fr(),{card:i}=qt(),a=i.find(f=>f.path==="webbshop"),[s,u]=E.useState(!0);return x.jsxs(x.Fragment,{children:[x.jsx(Ja,{title:a.title,descriptions:a.descriptions,browserImages:a.images.browserImage,repos:a.repos,isBrowser:s}),n===!0?x.jsx(ro,{}):""]})}function Gk(){const{runTransition:n}=fr(),{card:i}=qt(),a=i.find(s=>s.path==="movieapp");return x.jsxs(x.Fragment,{children:[x.jsx(Ja,{title:a.title,descriptions:a.descriptions,repos:a.repos,nativeImages:a.images.nativeImage,browserImages:a.images.browserImage,isNative:!0,isBrowser:!0}),n===!0?x.jsx(ro,{}):""]})}function Qk(){const{card:n}=qt(),i=n.find(a=>a.path==="cleaning");return x.jsxs(x.Fragment,{children:[x.jsx(Ja,{title:i.title,descriptions:i.descriptions,repos:i.repos,browserImages:i.images.browserImage,invertedColors:!0}),x.jsx(ro,{})]})}function rr({about:n,setIsHoverButton:i}){const[a,s]=E.useState(""),[u,f]=E.useState(!1),[p,h]=E.useState(!1),[m,g]=E.useState(!1),[y,C]=E.useState(""),[w,T]=E.useState(!1),{card:R,main:I}=qt(),O=Ji(),L=window.location.pathname.replace("/",""),N=R.find(ye=>ye.path===L)||R[0];let z=N.color,D=N.backgroundColor,V=N.shadow;(L==="about"||L==="")&&(z=I.backgroundColor,D=I.color,V=I.shadow);const Q=pn(),Y="emil.stjernlof@gmail.com";E.useEffect(()=>{T(!0);const ye=setTimeout(()=>{s("")},3e3);return()=>clearTimeout(ye)},[a]),E.useEffect(()=>{T(!1);const ye=setTimeout(()=>{T(!0)},100);return()=>clearTimeout(ye)},[Q.pathname]);function se(){navigator.clipboard.writeText(Y),s("Email copied!"),f(!0),setTimeout(()=>{f(!1)},200)}const le=(ye,Ve)=>{h(!0),g(!0),C(Ve);const Ne=setTimeout(()=>{h(!1),O(ye),g(!1)},800);return()=>{clearTimeout(Ne)}};return x.jsxs(x.Fragment,{children:[m&&x.jsx(e2,{color:p?y:""}),x.jsxs(Jk,{path:L,backgroundColor:D,shadow:V,fadeIn:w,children:[Q.pathname!=="/"?x.jsx(Rt,{color:z,backgroundColor:D,invertedColors:n,onClick:()=>le("/","white"),label:"Home"}):null,Q.pathname!=="/about"?x.jsx(Rt,{color:z,backgroundColor:D,invertedColors:n,onClick:()=>le("/about","var(--dark)"),label:"About me"}):null,x.jsx(Zk,{className:u?"active":"",children:x.jsx(Rt,{color:z,backgroundColor:D,invertedColors:n,onClick:se,label:"Contact",copyMessage:a,showCopyAlert:!0})})]})]})}const Kk=Ae`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 1;
  }
`,qk=Ae`
  0% {
    transform: translate(50%, 50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%) scale(300);
    opacity: 1;
  }
`,Jk=B.div`
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
  opacity: ${n=>n.fadeIn?1:0};
  transition: opacity 1s;

  @media (max-width: 768px) and (min-width: 321px) {
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${n=>n.backgroundColor};
    z-index: 100;
  }
`,Zk=B.div`
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
`,e2=B.div`
  position: absolute;
  width: 70%;
  height: 80%;
  right: 60%;
  bottom: 55%;
  border-radius: 50%;
  background-color: ${n=>n.color};
  animation: ${Kk} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 9999;
  opacity: 1;

  @media (max-width: 768px) and (min-width: 321px) {
    position: fixed;
    width: 20px;
    height: 20px;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    animation: ${qk} 1s ease-in-out forwards;
  }
`;function t2(){const{runTransition:n}=fr();return x.jsxs(x.Fragment,{children:[x.jsx(n2,{children:x.jsxs(r2,{children:[x.jsx(i2,{children:"Daily Helper"}),x.jsxs(o2,{children:["Daily Helper is a web application that helps you manage your daily tasks and schedule, view weather forecast and more. It is built with React, ",x.jsx(Ph,{children:"Typescript"})," and ",x.jsx(Ph,{children:"Next.js"}),"."]}),x.jsx(a2,{children:"Currently under development. Please check back soon!"}),x.jsx(ag,{})]})}),n===!0?x.jsx(ro,{}):""]})}const n2=B(it.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--shadow-blueish);
  height: 100vh;
  width: 100%;
  font-family: "Poppins", sans-serif;
`,r2=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
`,i2=B.h1`
  color: var(--silver-light);
`,o2=B.p`
  color: var(--silver-light);
`,a2=B.h3`
  color: var(--silver-light);
  text-decoration: underline;
`,Ph=B.b`
  color: var(--yellowish);
`,s2=()=>x.jsx(l2,{children:x.jsx(u2,{children:"ES"})}),l2=B.div`
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

  @media (max-width: 768px) and (min-width: 321px) {
    margin: 25vh 0 0 5vw;
    align-items: flex-start;
  }
  `,u2=B.div`
  display: flex;
  /* width: 16vw; */
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
  transform: translateY(-1.5vw);
  transition: 0.5s 1.2s;
  box-shadow: 1vw 1vw var(--dark);

  @starting-style {
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
    opacity: 0; 
    transition: 0.6s 0.5s; 
    opacity: 1; 

    @starting-style {
      left: -22vw;
    }
  }

  &:after {
    width: 3vw;
  }
`,c2=({isHoverButton:n,isHoveringCards:i,cursorColor:a,cursorHoverColor:s})=>{const[u,f]=E.useState(!1),[p,h]=E.useState(!1),{x:m,y:g}=qS();let y,C,w;switch(!0){case i:y=80,C=window.innerWidth<=1536?10:-40,w=-40;break;case p:y=15,C=window.innerWidth<=1536?50:-10,w=-8;break;case n:y=40,C=-20,w=-20;break;case u:y=130,C=window.innerWidth<=1536?0:-60,w=-60;break;default:y=35,C=window.innerWidth<=1536?-(y/-1):-(y/2),w=-(y/2)}const T="Frontend developer in development";return E.useEffect(()=>{const R=()=>h(!0),I=()=>h(!1);return window.addEventListener("mousedown",R),window.addEventListener("mouseup",I),()=>{window.removeEventListener("mousedown",R),window.removeEventListener("mouseup",I)}},[]),x.jsx(x.Fragment,{children:x.jsx(f2,{children:x.jsx(d2,{animate:{WebkitMaskPosition:`${m-y-C}px ${g-y-w}px`,WebkitMaskSize:`${y}px`,backgroundColor:i&&p||i?s:a},transition:{type:"tween",ease:"backOut",duration:.2,x:{type:"tween",ease:"backOut",duration:.2},y:{type:"tween",ease:"backOut",duration:.2},width:{type:"tween",ease:"backOut",duration:.4},height:{type:"tween",ease:"backOut",duration:.4}},style:{paddingRight:"4em",paddingTop:"8em"},children:location.pathname==="/"&&x.jsx(p2,{onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)},style:{margin:"0"},children:T})})})})},f2=B.div`
    position: absolute;
    justify-content: flex-end;
    align-items: start;
    width: 100%;
    height: 100vh;
    z-index: 110;
    pointer-events: none; 

  @media (max-width: 768px) and (min-width: 321px) {
    display: none;
  }
`,d2=B(it.div)`
    font-size: 1.8em;
    font-weight: 600;
    mask-image: url('../../../public/mask.svg');
    font-family: "Poiret One", sans-serif;
    mask-repeat: no-repeat;
    mask-size: 40px;
    background: var(--dark);
    color: white;
    display: flex;
    align-items: start;
    justify-content: end;
    width: 100vw;
    height: 100vh;
    pointer-events: none;

    @media (max-width: 1536px) {
        margin-left: 2.5em;
        font-size: 1.4em;
    }
`,p2=B.h4`
  width: 20em;
  pointer-events: auto; 

 `;function h2(){const{runTransition:n}=fr(),i=pn(),[a,s]=E.useState(""),[u,f]=E.useState(!0),[p,h]=E.useState(!1),[m,g]=E.useState(!1),[y,C]=E.useState(""),[w,T]=E.useState(""),[R,I]=E.useState(!0),[O,L]=E.useState(1),N="/",z="/cleaning",D="/chatapp",V="/webbshop",Q="/movieapp",Y="/dashboard";return E.useEffect(()=>{let se="",le="";switch(i.pathname){case N:le="var(--dark)";break;case z:se="var(--yellowish)",le="var(--dark)";break;case V:se="var(--greenish)",le="var(--bisque)";break;case D:se="var(--light-purple)",le="var(--neon-green)";break;case Q:se="var(--darker)",le="var(--redish)";break;case Y:se="var(--blueish)",le="var(--silver-light)";break;case"/about":se="white",le="white";break;default:se=""}L(0),setTimeout(()=>{s(se),L(1),T()},300),C(le)},[i.pathname]),E.useEffect(()=>{const se=setTimeout(()=>f(!1),3200);return()=>clearTimeout(se)},[]),E.useEffect(()=>{n&&(I(!1),setTimeout(()=>I(!0)))},[n]),x.jsx(x.Fragment,{children:u?x.jsx(s2,{}):x.jsxs(qa,{children:[x.jsx(c2,{isHoverButton:m,isHoveringCards:p,cursorColor:y,cursorHoverColor:w}),x.jsx(m2,{color:a,children:x.jsx(og,{children:x.jsx(g2,{children:x.jsxs(oy,{children:[x.jsx(zn,{path:N,element:x.jsxs(ir,{children:[x.jsx(rr,{path:N,setIsHoverButton:g}),x.jsx(JS,{setCursorHoverColor:T,setIsHoveringCards:h})]})}),x.jsx(zn,{path:z,element:x.jsxs(ir,{className:"scrollCleaning",children:[x.jsx(rr,{path:z,setIsHoverButton:g}),x.jsx(Qk,{})]})}),x.jsx(zn,{path:D,element:x.jsxs(ir,{className:"scrollChatApp",children:[x.jsx(rr,{path:D,setIsHoverButton:g}),x.jsx(Yk,{})]})}),x.jsx(zn,{path:V,element:x.jsxs(ir,{className:"scrollWebbShop",children:[x.jsx(rr,{path:V,setIsHoverButton:g}),x.jsx(Xk,{})]})}),x.jsx(zn,{path:Q,element:x.jsxs(ir,{className:"scrollMovies",children:[x.jsx(rr,{path:Q,setIsHoverButton:g}),x.jsx(Gk,{})]})}),x.jsx(zn,{path:Y,element:x.jsxs(ir,{children:[x.jsx(rr,{path:Y,setIsHoverButton:g}),x.jsx(t2,{})]})}),x.jsx(zn,{path:"/about",element:x.jsxs(ir,{children:[x.jsx(rr,{path:"/about",about:!0}),x.jsx(US,{})]})})]})})})})]})})}const m2=B.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${n=>n.color};
`,g2=B.div`
  flex-grow: 1;
  /* height: 100%; */
`,ir=B.div`
  display: flex;
  flex-direction: row;
  /* height: 100%; */
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;gv.createRoot(document.getElementById("root")).render(x.jsx(Fn.StrictMode,{children:x.jsx(_y,{children:x.jsx(og,{children:x.jsx(F1,{children:x.jsx(qa,{children:x.jsx(h2,{router:Fh})})})})})}));
