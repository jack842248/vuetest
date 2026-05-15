const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlogPost-w-HseySR.js","assets/ArrowLeftIcon-hwJRSK3P.js","assets/BlogPost-CSRUKxnt.css","assets/AboutView-BEESSP0D.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/ProjectList-DKVA81Mf.js","assets/ProjectOverview-rpGFKmnT.js","assets/YocueProject-CMMHS0ia.js","assets/effect-coverflow-yTOXjwnW.js","assets/ArrowTopRightOnSquareIcon-t7BosJQX.js","assets/CheckIcon-nSwNYZKP.js","assets/DprcProject-HW3dZrBT.js","assets/TjcosProject-DmBXc4v-.js","assets/KingShieldProject-DVBVEUlk.js","assets/House579Project-Dp3gOq9w.js","assets/HomeServiceProject-DspJ9ib4.js","assets/CiazhanProject-C1-1i1Fe.js","assets/KumonProject-ClRGqP9m.js","assets/MagicAbcProject-Bmb1566V.js","assets/CycacProject-yoxdy_vC.js","assets/DigitalTravelProject-gUOxGTo6.js","assets/IkeaProject-DZ8Fghn8.js"])))=>i.map(i=>d[i]);
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))_(w);new MutationObserver(w=>{for(const x of w)if(x.type==="childList")for(const E of x.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&_(E)}).observe(document,{childList:!0,subtree:!0});function f(w){const x={};return w.integrity&&(x.integrity=w.integrity),w.referrerPolicy&&(x.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?x.credentials="include":w.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function _(w){if(w.ep)return;w.ep=!0;const x=f(w);fetch(w.href,x)}})();function makeMap(e){const a=Object.create(null);for(const f of e.split(","))a[f]=1;return f=>f in a}const EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,isOn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),isModelListener=e=>e.startsWith("onUpdate:"),extend$3=Object.assign,remove=(e,a)=>{const f=e.indexOf(a);f>-1&&e.splice(f,1)},hasOwnProperty$1=Object.prototype.hasOwnProperty,hasOwn=(e,a)=>hasOwnProperty$1.call(e,a),isArray$1=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isFunction=e=>typeof e=="function",isString=e=>typeof e=="string",isSymbol=e=>typeof e=="symbol",isObject$3=e=>e!==null&&typeof e=="object",isPromise=e=>(isObject$3(e)||isFunction(e))&&isFunction(e.then)&&isFunction(e.catch),objectToString=Object.prototype.toString,toTypeString=e=>objectToString.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject$1=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const a=Object.create(null);return(f=>a[f]||(a[f]=e(f)))},camelizeRE=/-\w/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,a=>a.slice(1).toUpperCase())),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,a)=>!Object.is(e,a),invokeArrayFns=(e,...a)=>{for(let f=0;f<e.length;f++)e[f](...a)},def=(e,a,f,_=!1)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,writable:_,value:f})},looseToNumber=e=>{const a=parseFloat(e);return isNaN(a)?e:a},toNumber=e=>{const a=isString(e)?Number(e):NaN;return isNaN(a)?e:a};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"||typeof window<"u"?window:{});function normalizeStyle(e){if(isArray$1(e)){const a={};for(let f=0;f<e.length;f++){const _=e[f],w=isString(_)?parseStringStyle(_):normalizeStyle(_);if(w)for(const x in w)a[x]=w[x]}return a}else if(isString(e)||isObject$3(e))return e}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*[^]*?\*\//g;function parseStringStyle(e){const a={};return e.replace(styleCommentRE,"").split(listDelimiterRE).forEach(f=>{if(f){const _=f.split(propertyDelimiterRE);_.length>1&&(a[_[0].trim()]=_[1].trim())}}),a}function normalizeClass(e){let a="";if(isString(e))a=e;else if(isArray$1(e))for(let f=0;f<e.length;f++){const _=normalizeClass(e[f]);_&&(a+=_+" ")}else if(isObject$3(e))for(const f in e)e[f]&&(a+=f+" ");return a.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}const isRef$1=e=>!!(e&&e.__v_isRef===!0),toDisplayString=e=>isString(e)?e:e==null?"":isArray$1(e)||isObject$3(e)&&(e.toString===objectToString||!isFunction(e.toString))?isRef$1(e)?toDisplayString(e.value):JSON.stringify(e,replacer,2):String(e),replacer=(e,a)=>isRef$1(a)?replacer(e,a.value):isMap(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((f,[_,w],x)=>(f[stringifySymbol(_,x)+" =>"]=w,f),{})}:isSet(a)?{[`Set(${a.size})`]:[...a.values()].map(f=>stringifySymbol(f))}:isSymbol(a)?stringifySymbol(a):isObject$3(a)&&!isArray$1(a)&&!isPlainObject$1(a)?String(a):a,stringifySymbol=(e,a="")=>{var f;return isSymbol(e)?`Symbol(${(f=e.description)!=null?f:a})`:e};let activeEffectScope;class EffectScope{constructor(a=!1){this.detached=a,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=activeEffectScope,!a&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let a,f;if(this.scopes)for(a=0,f=this.scopes.length;a<f;a++)this.scopes[a].pause();for(a=0,f=this.effects.length;a<f;a++)this.effects[a].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let a,f;if(this.scopes)for(a=0,f=this.scopes.length;a<f;a++)this.scopes[a].resume();for(a=0,f=this.effects.length;a<f;a++)this.effects[a].resume()}}run(a){if(this._active){const f=activeEffectScope;try{return activeEffectScope=this,a()}finally{activeEffectScope=f}}}on(){++this._on===1&&(this.prevScope=activeEffectScope,activeEffectScope=this)}off(){this._on>0&&--this._on===0&&(activeEffectScope=this.prevScope,this.prevScope=void 0)}stop(a){if(this._active){this._active=!1;let f,_;for(f=0,_=this.effects.length;f<_;f++)this.effects[f].stop();for(this.effects.length=0,f=0,_=this.cleanups.length;f<_;f++)this.cleanups[f]();if(this.cleanups.length=0,this.scopes){for(f=0,_=this.scopes.length;f<_;f++)this.scopes[f].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!a){const w=this.parent.scopes.pop();w&&w!==this&&(this.parent.scopes[this.index]=w,w.index=this.index)}this.parent=void 0}}}function effectScope(e){return new EffectScope(e)}function getCurrentScope(){return activeEffectScope}function onScopeDispose(e,a=!1){activeEffectScope&&activeEffectScope.cleanups.push(e)}let activeSub;const pausedQueueEffects=new WeakSet;class ReactiveEffect{constructor(a){this.fn=a,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,activeEffectScope&&activeEffectScope.active&&activeEffectScope.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pausedQueueEffects.has(this)&&(pausedQueueEffects.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||batch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cleanupEffect(this),prepareDeps(this);const a=activeSub,f=shouldTrack;activeSub=this,shouldTrack=!0;try{return this.fn()}finally{cleanupDeps(this),activeSub=a,shouldTrack=f,this.flags&=-3}}stop(){if(this.flags&1){for(let a=this.deps;a;a=a.nextDep)removeSub(a);this.deps=this.depsTail=void 0,cleanupEffect(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pausedQueueEffects.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){isDirty(this)&&this.run()}get dirty(){return isDirty(this)}}let batchDepth=0,batchedSub,batchedComputed;function batch(e,a=!1){if(e.flags|=8,a){e.next=batchedComputed,batchedComputed=e;return}e.next=batchedSub,batchedSub=e}function startBatch(){batchDepth++}function endBatch(){if(--batchDepth>0)return;if(batchedComputed){let a=batchedComputed;for(batchedComputed=void 0;a;){const f=a.next;a.next=void 0,a.flags&=-9,a=f}}let e;for(;batchedSub;){let a=batchedSub;for(batchedSub=void 0;a;){const f=a.next;if(a.next=void 0,a.flags&=-9,a.flags&1)try{a.trigger()}catch(_){e||(e=_)}a=f}}if(e)throw e}function prepareDeps(e){for(let a=e.deps;a;a=a.nextDep)a.version=-1,a.prevActiveLink=a.dep.activeLink,a.dep.activeLink=a}function cleanupDeps(e){let a,f=e.depsTail,_=f;for(;_;){const w=_.prevDep;_.version===-1?(_===f&&(f=w),removeSub(_),removeDep(_)):a=_,_.dep.activeLink=_.prevActiveLink,_.prevActiveLink=void 0,_=w}e.deps=a,e.depsTail=f}function isDirty(e){for(let a=e.deps;a;a=a.nextDep)if(a.dep.version!==a.version||a.dep.computed&&(refreshComputed(a.dep.computed)||a.dep.version!==a.version))return!0;return!!e._dirty}function refreshComputed(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===globalVersion)||(e.globalVersion=globalVersion,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!isDirty(e))))return;e.flags|=2;const a=e.dep,f=activeSub,_=shouldTrack;activeSub=e,shouldTrack=!0;try{prepareDeps(e);const w=e.fn(e._value);(a.version===0||hasChanged(w,e._value))&&(e.flags|=128,e._value=w,a.version++)}catch(w){throw a.version++,w}finally{activeSub=f,shouldTrack=_,cleanupDeps(e),e.flags&=-3}}function removeSub(e,a=!1){const{dep:f,prevSub:_,nextSub:w}=e;if(_&&(_.nextSub=w,e.prevSub=void 0),w&&(w.prevSub=_,e.nextSub=void 0),f.subs===e&&(f.subs=_,!_&&f.computed)){f.computed.flags&=-5;for(let x=f.computed.deps;x;x=x.nextDep)removeSub(x,!0)}!a&&!--f.sc&&f.map&&f.map.delete(f.key)}function removeDep(e){const{prevDep:a,nextDep:f}=e;a&&(a.nextDep=f,e.prevDep=void 0),f&&(f.prevDep=a,e.nextDep=void 0)}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function cleanupEffect(e){const{cleanup:a}=e;if(e.cleanup=void 0,a){const f=activeSub;activeSub=void 0;try{a()}finally{activeSub=f}}}let globalVersion=0;class Link{constructor(a,f){this.sub=a,this.dep=f,this.version=f.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dep{constructor(a){this.computed=a,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(a){if(!activeSub||!shouldTrack||activeSub===this.computed)return;let f=this.activeLink;if(f===void 0||f.sub!==activeSub)f=this.activeLink=new Link(activeSub,this),activeSub.deps?(f.prevDep=activeSub.depsTail,activeSub.depsTail.nextDep=f,activeSub.depsTail=f):activeSub.deps=activeSub.depsTail=f,addSub(f);else if(f.version===-1&&(f.version=this.version,f.nextDep)){const _=f.nextDep;_.prevDep=f.prevDep,f.prevDep&&(f.prevDep.nextDep=_),f.prevDep=activeSub.depsTail,f.nextDep=void 0,activeSub.depsTail.nextDep=f,activeSub.depsTail=f,activeSub.deps===f&&(activeSub.deps=_)}return f}trigger(a){this.version++,globalVersion++,this.notify(a)}notify(a){startBatch();try{for(let f=this.subs;f;f=f.prevSub)f.sub.notify()&&f.sub.dep.notify()}finally{endBatch()}}}function addSub(e){if(e.dep.sc++,e.sub.flags&4){const a=e.dep.computed;if(a&&!e.dep.subs){a.flags|=20;for(let _=a.deps;_;_=_.nextDep)addSub(_)}const f=e.dep.subs;f!==e&&(e.prevSub=f,f&&(f.nextSub=e)),e.dep.subs=e}}const targetMap=new WeakMap,ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol(""),ARRAY_ITERATE_KEY=Symbol("");function track(e,a,f){if(shouldTrack&&activeSub){let _=targetMap.get(e);_||targetMap.set(e,_=new Map);let w=_.get(f);w||(_.set(f,w=new Dep),w.map=_,w.key=f),w.track()}}function trigger(e,a,f,_,w,x){const E=targetMap.get(e);if(!E){globalVersion++;return}const P=C=>{C&&C.trigger()};if(startBatch(),a==="clear")E.forEach(P);else{const C=isArray$1(e),M=C&&isIntegerKey(f);if(C&&f==="length"){const B=Number(_);E.forEach((q,J)=>{(J==="length"||J===ARRAY_ITERATE_KEY||!isSymbol(J)&&J>=B)&&P(q)})}else switch((f!==void 0||E.has(void 0))&&P(E.get(f)),M&&P(E.get(ARRAY_ITERATE_KEY)),a){case"add":C?M&&P(E.get("length")):(P(E.get(ITERATE_KEY)),isMap(e)&&P(E.get(MAP_KEY_ITERATE_KEY)));break;case"delete":C||(P(E.get(ITERATE_KEY)),isMap(e)&&P(E.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&P(E.get(ITERATE_KEY));break}}endBatch()}function getDepFromReactive(e,a){const f=targetMap.get(e);return f&&f.get(a)}function reactiveReadArray(e){const a=toRaw(e);return a===e?a:(track(a,"iterate",ARRAY_ITERATE_KEY),isShallow(e)?a:a.map(toReactive))}function shallowReadArray(e){return track(e=toRaw(e),"iterate",ARRAY_ITERATE_KEY),e}function toWrapped(e,a){return isReadonly(e)?isReactive(e)?toReadonly(toReactive(a)):toReadonly(a):toReactive(a)}const arrayInstrumentations={__proto__:null,[Symbol.iterator](){return iterator(this,Symbol.iterator,e=>toWrapped(this,e))},concat(...e){return reactiveReadArray(this).concat(...e.map(a=>isArray$1(a)?reactiveReadArray(a):a))},entries(){return iterator(this,"entries",e=>(e[1]=toWrapped(this,e[1]),e))},every(e,a){return apply(this,"every",e,a,void 0,arguments)},filter(e,a){return apply(this,"filter",e,a,f=>f.map(_=>toWrapped(this,_)),arguments)},find(e,a){return apply(this,"find",e,a,f=>toWrapped(this,f),arguments)},findIndex(e,a){return apply(this,"findIndex",e,a,void 0,arguments)},findLast(e,a){return apply(this,"findLast",e,a,f=>toWrapped(this,f),arguments)},findLastIndex(e,a){return apply(this,"findLastIndex",e,a,void 0,arguments)},forEach(e,a){return apply(this,"forEach",e,a,void 0,arguments)},includes(...e){return searchProxy(this,"includes",e)},indexOf(...e){return searchProxy(this,"indexOf",e)},join(e){return reactiveReadArray(this).join(e)},lastIndexOf(...e){return searchProxy(this,"lastIndexOf",e)},map(e,a){return apply(this,"map",e,a,void 0,arguments)},pop(){return noTracking(this,"pop")},push(...e){return noTracking(this,"push",e)},reduce(e,...a){return reduce(this,"reduce",e,a)},reduceRight(e,...a){return reduce(this,"reduceRight",e,a)},shift(){return noTracking(this,"shift")},some(e,a){return apply(this,"some",e,a,void 0,arguments)},splice(...e){return noTracking(this,"splice",e)},toReversed(){return reactiveReadArray(this).toReversed()},toSorted(e){return reactiveReadArray(this).toSorted(e)},toSpliced(...e){return reactiveReadArray(this).toSpliced(...e)},unshift(...e){return noTracking(this,"unshift",e)},values(){return iterator(this,"values",e=>toWrapped(this,e))}};function iterator(e,a,f){const _=shallowReadArray(e),w=_[a]();return _!==e&&!isShallow(e)&&(w._next=w.next,w.next=()=>{const x=w._next();return x.done||(x.value=f(x.value)),x}),w}const arrayProto=Array.prototype;function apply(e,a,f,_,w,x){const E=shallowReadArray(e),P=E!==e&&!isShallow(e),C=E[a];if(C!==arrayProto[a]){const q=C.apply(e,x);return P?toReactive(q):q}let M=f;E!==e&&(P?M=function(q,J){return f.call(this,toWrapped(e,q),J,e)}:f.length>2&&(M=function(q,J){return f.call(this,q,J,e)}));const B=C.call(E,M,_);return P&&w?w(B):B}function reduce(e,a,f,_){const w=shallowReadArray(e);let x=f;return w!==e&&(isShallow(e)?f.length>3&&(x=function(E,P,C){return f.call(this,E,P,C,e)}):x=function(E,P,C){return f.call(this,E,toWrapped(e,P),C,e)}),w[a](x,..._)}function searchProxy(e,a,f){const _=toRaw(e);track(_,"iterate",ARRAY_ITERATE_KEY);const w=_[a](...f);return(w===-1||w===!1)&&isProxy(f[0])?(f[0]=toRaw(f[0]),_[a](...f)):w}function noTracking(e,a,f=[]){pauseTracking(),startBatch();const _=toRaw(e)[a].apply(e,f);return endBatch(),resetTracking(),_}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol));function hasOwnProperty(e){isSymbol(e)||(e=String(e));const a=toRaw(this);return track(a,"has",e),a.hasOwnProperty(e)}class BaseReactiveHandler{constructor(a=!1,f=!1){this._isReadonly=a,this._isShallow=f}get(a,f,_){if(f==="__v_skip")return a.__v_skip;const w=this._isReadonly,x=this._isShallow;if(f==="__v_isReactive")return!w;if(f==="__v_isReadonly")return w;if(f==="__v_isShallow")return x;if(f==="__v_raw")return _===(w?x?shallowReadonlyMap:readonlyMap:x?shallowReactiveMap:reactiveMap).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(_)?a:void 0;const E=isArray$1(a);if(!w){let C;if(E&&(C=arrayInstrumentations[f]))return C;if(f==="hasOwnProperty")return hasOwnProperty}const P=Reflect.get(a,f,isRef(a)?a:_);if((isSymbol(f)?builtInSymbols.has(f):isNonTrackableKeys(f))||(w||track(a,"get",f),x))return P;if(isRef(P)){const C=E&&isIntegerKey(f)?P:P.value;return w&&isObject$3(C)?readonly(C):C}return isObject$3(P)?w?readonly(P):reactive(P):P}}class MutableReactiveHandler extends BaseReactiveHandler{constructor(a=!1){super(!1,a)}set(a,f,_,w){let x=a[f];const E=isArray$1(a)&&isIntegerKey(f);if(!this._isShallow){const M=isReadonly(x);if(!isShallow(_)&&!isReadonly(_)&&(x=toRaw(x),_=toRaw(_)),!E&&isRef(x)&&!isRef(_))return M||(x.value=_),!0}const P=E?Number(f)<a.length:hasOwn(a,f),C=Reflect.set(a,f,_,isRef(a)?a:w);return a===toRaw(w)&&(P?hasChanged(_,x)&&trigger(a,"set",f,_):trigger(a,"add",f,_)),C}deleteProperty(a,f){const _=hasOwn(a,f);a[f];const w=Reflect.deleteProperty(a,f);return w&&_&&trigger(a,"delete",f,void 0),w}has(a,f){const _=Reflect.has(a,f);return(!isSymbol(f)||!builtInSymbols.has(f))&&track(a,"has",f),_}ownKeys(a){return track(a,"iterate",isArray$1(a)?"length":ITERATE_KEY),Reflect.ownKeys(a)}}class ReadonlyReactiveHandler extends BaseReactiveHandler{constructor(a=!1){super(!0,a)}set(a,f){return!0}deleteProperty(a,f){return!0}}const mutableHandlers=new MutableReactiveHandler,readonlyHandlers=new ReadonlyReactiveHandler,shallowReactiveHandlers=new MutableReactiveHandler(!0),shallowReadonlyHandlers=new ReadonlyReactiveHandler(!0),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function createIterableMethod(e,a,f){return function(..._){const w=this.__v_raw,x=toRaw(w),E=isMap(x),P=e==="entries"||e===Symbol.iterator&&E,C=e==="keys"&&E,M=w[e](..._),B=f?toShallow:a?toReadonly:toReactive;return!a&&track(x,"iterate",C?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:q,done:J}=M.next();return J?{value:q,done:J}:{value:P?[B(q[0]),B(q[1])]:B(q),done:J}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function createInstrumentations(e,a){const f={get(w){const x=this.__v_raw,E=toRaw(x),P=toRaw(w);e||(hasChanged(w,P)&&track(E,"get",w),track(E,"get",P));const{has:C}=getProto(E),M=a?toShallow:e?toReadonly:toReactive;if(C.call(E,w))return M(x.get(w));if(C.call(E,P))return M(x.get(P));x!==E&&x.get(w)},get size(){const w=this.__v_raw;return!e&&track(toRaw(w),"iterate",ITERATE_KEY),w.size},has(w){const x=this.__v_raw,E=toRaw(x),P=toRaw(w);return e||(hasChanged(w,P)&&track(E,"has",w),track(E,"has",P)),w===P?x.has(w):x.has(w)||x.has(P)},forEach(w,x){const E=this,P=E.__v_raw,C=toRaw(P),M=a?toShallow:e?toReadonly:toReactive;return!e&&track(C,"iterate",ITERATE_KEY),P.forEach((B,q)=>w.call(x,M(B),M(q),E))}};return extend$3(f,e?{add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear")}:{add(w){!a&&!isShallow(w)&&!isReadonly(w)&&(w=toRaw(w));const x=toRaw(this);return getProto(x).has.call(x,w)||(x.add(w),trigger(x,"add",w,w)),this},set(w,x){!a&&!isShallow(x)&&!isReadonly(x)&&(x=toRaw(x));const E=toRaw(this),{has:P,get:C}=getProto(E);let M=P.call(E,w);M||(w=toRaw(w),M=P.call(E,w));const B=C.call(E,w);return E.set(w,x),M?hasChanged(x,B)&&trigger(E,"set",w,x):trigger(E,"add",w,x),this},delete(w){const x=toRaw(this),{has:E,get:P}=getProto(x);let C=E.call(x,w);C||(w=toRaw(w),C=E.call(x,w)),P&&P.call(x,w);const M=x.delete(w);return C&&trigger(x,"delete",w,void 0),M},clear(){const w=toRaw(this),x=w.size!==0,E=w.clear();return x&&trigger(w,"clear",void 0,void 0),E}}),["keys","values","entries",Symbol.iterator].forEach(w=>{f[w]=createIterableMethod(w,e,a)}),f}function createInstrumentationGetter(e,a){const f=createInstrumentations(e,a);return(_,w,x)=>w==="__v_isReactive"?!e:w==="__v_isReadonly"?e:w==="__v_raw"?_:Reflect.get(hasOwn(f,w)&&w in _?f:_,w,x)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},shallowReadonlyCollectionHandlers={get:createInstrumentationGetter(!0,!0)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function shallowReadonly(e){return createReactiveObject(e,!0,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap)}function createReactiveObject(e,a,f,_,w){if(!isObject$3(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const x=getTargetType(e);if(x===0)return e;const E=w.get(e);if(E)return E;const P=new Proxy(e,x===2?_:f);return w.set(e,P),P}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return e?!!e.__v_raw:!1}function toRaw(e){const a=e&&e.__v_raw;return a?toRaw(a):e}function markRaw(e){return!hasOwn(e,"__v_skip")&&Object.isExtensible(e)&&def(e,"__v_skip",!0),e}const toReactive=e=>isObject$3(e)?reactive(e):e,toReadonly=e=>isObject$3(e)?readonly(e):e;function isRef(e){return e?e.__v_isRef===!0:!1}function ref(e){return createRef(e,!1)}function shallowRef(e){return createRef(e,!0)}function createRef(e,a){return isRef(e)?e:new RefImpl(e,a)}class RefImpl{constructor(a,f){this.dep=new Dep,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=f?a:toRaw(a),this._value=f?a:toReactive(a),this.__v_isShallow=f}get value(){return this.dep.track(),this._value}set value(a){const f=this._rawValue,_=this.__v_isShallow||isShallow(a)||isReadonly(a);a=_?a:toRaw(a),hasChanged(a,f)&&(this._rawValue=a,this._value=_?a:toReactive(a),this.dep.trigger())}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,a,f)=>a==="__v_raw"?e:unref(Reflect.get(e,a,f)),set:(e,a,f,_)=>{const w=e[a];return isRef(w)&&!isRef(f)?(w.value=f,!0):Reflect.set(e,a,f,_)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}function toRefs(e){const a=isArray$1(e)?new Array(e.length):{};for(const f in e)a[f]=propertyToRef(e,f);return a}class ObjectRefImpl{constructor(a,f,_){this._object=a,this._key=f,this._defaultValue=_,this.__v_isRef=!0,this._value=void 0,this._raw=toRaw(a);let w=!0,x=a;if(!isArray$1(a)||!isIntegerKey(String(f)))do w=!isProxy(x)||isShallow(x);while(w&&(x=x.__v_raw));this._shallow=w}get value(){let a=this._object[this._key];return this._shallow&&(a=unref(a)),this._value=a===void 0?this._defaultValue:a}set value(a){if(this._shallow&&isRef(this._raw[this._key])){const f=this._object[this._key];if(isRef(f)){f.value=a;return}}this._object[this._key]=a}get dep(){return getDepFromReactive(this._raw,this._key)}}function propertyToRef(e,a,f){return new ObjectRefImpl(e,a,f)}class ComputedRefImpl{constructor(a,f,_){this.fn=a,this.setter=f,this._value=void 0,this.dep=new Dep(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=globalVersion-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!f,this.isSSR=_}notify(){if(this.flags|=16,!(this.flags&8)&&activeSub!==this)return batch(this,!0),!0}get value(){const a=this.dep.track();return refreshComputed(this),a&&(a.version=this.dep.version),this._value}set value(a){this.setter&&this.setter(a)}}function computed$1(e,a,f=!1){let _,w;return isFunction(e)?_=e:(_=e.get,w=e.set),new ComputedRefImpl(_,w,f)}const INITIAL_WATCHER_VALUE={},cleanupMap=new WeakMap;let activeWatcher;function onWatcherCleanup(e,a=!1,f=activeWatcher){if(f){let _=cleanupMap.get(f);_||cleanupMap.set(f,_=[]),_.push(e)}}function watch$1(e,a,f=EMPTY_OBJ){const{immediate:_,deep:w,once:x,scheduler:E,augmentJob:P,call:C}=f,M=mn=>w?mn:isShallow(mn)||w===!1||w===0?traverse(mn,1):traverse(mn);let B,q,J,Y,X=!1,en=!1;if(isRef(e)?(q=()=>e.value,X=isShallow(e)):isReactive(e)?(q=()=>M(e),X=!0):isArray$1(e)?(en=!0,X=e.some(mn=>isReactive(mn)||isShallow(mn)),q=()=>e.map(mn=>{if(isRef(mn))return mn.value;if(isReactive(mn))return M(mn);if(isFunction(mn))return C?C(mn,2):mn()})):isFunction(e)?a?q=C?()=>C(e,2):e:q=()=>{if(J){pauseTracking();try{J()}finally{resetTracking()}}const mn=activeWatcher;activeWatcher=B;try{return C?C(e,3,[Y]):e(Y)}finally{activeWatcher=mn}}:q=NOOP,a&&w){const mn=q,fn=w===!0?1/0:w;q=()=>traverse(mn(),fn)}const dn=getCurrentScope(),pn=()=>{B.stop(),dn&&dn.active&&remove(dn.effects,B)};if(x&&a){const mn=a;a=(...fn)=>{mn(...fn),pn()}}let an=en?new Array(e.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const un=mn=>{if(!(!(B.flags&1)||!B.dirty&&!mn))if(a){const fn=B.run();if(w||X||(en?fn.some((Pn,An)=>hasChanged(Pn,an[An])):hasChanged(fn,an))){J&&J();const Pn=activeWatcher;activeWatcher=B;try{const An=[fn,an===INITIAL_WATCHER_VALUE?void 0:en&&an[0]===INITIAL_WATCHER_VALUE?[]:an,Y];an=fn,C?C(a,3,An):a(...An)}finally{activeWatcher=Pn}}}else B.run()};return P&&P(un),B=new ReactiveEffect(q),B.scheduler=E?()=>E(un,!1):un,Y=mn=>onWatcherCleanup(mn,!1,B),J=B.onStop=()=>{const mn=cleanupMap.get(B);if(mn){if(C)C(mn,4);else for(const fn of mn)fn();cleanupMap.delete(B)}},a?_?un(!0):an=B.run():E?E(un.bind(null,!0),!0):B.run(),pn.pause=B.pause.bind(B),pn.resume=B.resume.bind(B),pn.stop=pn,pn}function traverse(e,a=1/0,f){if(a<=0||!isObject$3(e)||e.__v_skip||(f=f||new Map,(f.get(e)||0)>=a))return e;if(f.set(e,a),a--,isRef(e))traverse(e.value,a,f);else if(isArray$1(e))for(let _=0;_<e.length;_++)traverse(e[_],a,f);else if(isSet(e)||isMap(e))e.forEach(_=>{traverse(_,a,f)});else if(isPlainObject$1(e)){for(const _ in e)traverse(e[_],a,f);for(const _ of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,_)&&traverse(e[_],a,f)}return e}const stack=[];let isWarning=!1;function warn$1(e,...a){if(isWarning)return;isWarning=!0,pauseTracking();const f=stack.length?stack[stack.length-1].component:null,_=f&&f.appContext.config.warnHandler,w=getComponentTrace();if(_)callWithErrorHandling(_,f,11,[e+a.map(x=>{var E,P;return(P=(E=x.toString)==null?void 0:E.call(x))!=null?P:JSON.stringify(x)}).join(""),f&&f.proxy,w.map(({vnode:x})=>`at <${formatComponentName(f,x.type)}>`).join(`
`),w]);else{const x=[`[Vue warn]: ${e}`,...a];w.length&&x.push(`
`,...formatTrace(w)),console.warn(...x)}resetTracking(),isWarning=!1}function getComponentTrace(){let e=stack[stack.length-1];if(!e)return[];const a=[];for(;e;){const f=a[0];f&&f.vnode===e?f.recurseCount++:a.push({vnode:e,recurseCount:0});const _=e.component&&e.component.parent;e=_&&_.vnode}return a}function formatTrace(e){const a=[];return e.forEach((f,_)=>{a.push(..._===0?[]:[`
`],...formatTraceEntry(f))}),a}function formatTraceEntry({vnode:e,recurseCount:a}){const f=a>0?`... (${a} recursive calls)`:"",_=e.component?e.component.parent==null:!1,w=` at <${formatComponentName(e.component,e.type,_)}`,x=">"+f;return e.props?[w,...formatProps(e.props),x]:[w+x]}function formatProps(e){const a=[],f=Object.keys(e);return f.slice(0,3).forEach(_=>{a.push(...formatProp(_,e[_]))}),f.length>3&&a.push(" ..."),a}function formatProp(e,a,f){return isString(a)?(a=JSON.stringify(a),f?a:[`${e}=${a}`]):typeof a=="number"||typeof a=="boolean"||a==null?f?a:[`${e}=${a}`]:isRef(a)?(a=formatProp(e,toRaw(a.value),!0),f?a:[`${e}=Ref<`,a,">"]):isFunction(a)?[`${e}=fn${a.name?`<${a.name}>`:""}`]:(a=toRaw(a),f?a:[`${e}=`,a])}function callWithErrorHandling(e,a,f,_){try{return _?e(..._):e()}catch(w){handleError(w,a,f)}}function callWithAsyncErrorHandling(e,a,f,_){if(isFunction(e)){const w=callWithErrorHandling(e,a,f,_);return w&&isPromise(w)&&w.catch(x=>{handleError(x,a,f)}),w}if(isArray$1(e)){const w=[];for(let x=0;x<e.length;x++)w.push(callWithAsyncErrorHandling(e[x],a,f,_));return w}}function handleError(e,a,f,_=!0){const w=a?a.vnode:null,{errorHandler:x,throwUnhandledErrorInProduction:E}=a&&a.appContext.config||EMPTY_OBJ;if(a){let P=a.parent;const C=a.proxy,M=`https://vuejs.org/error-reference/#runtime-${f}`;for(;P;){const B=P.ec;if(B){for(let q=0;q<B.length;q++)if(B[q](e,C,M)===!1)return}P=P.parent}if(x){pauseTracking(),callWithErrorHandling(x,null,10,[e,C,M]),resetTracking();return}}logError(e,f,w,_,E)}function logError(e,a,f,_=!0,w=!1){if(w)throw e;console.error(e)}const queue=[];let flushIndex=-1;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick$1(e){const a=currentFlushPromise||resolvedPromise;return e?a.then(this?e.bind(this):e):a}function findInsertionIndex$1(e){let a=flushIndex+1,f=queue.length;for(;a<f;){const _=a+f>>>1,w=queue[_],x=getId(w);x<e||x===e&&w.flags&2?a=_+1:f=_}return a}function queueJob(e){if(!(e.flags&1)){const a=getId(e),f=queue[queue.length-1];!f||!(e.flags&2)&&a>=getId(f)?queue.push(e):queue.splice(findInsertionIndex$1(a),0,e),e.flags|=1,queueFlush()}}function queueFlush(){currentFlushPromise||(currentFlushPromise=resolvedPromise.then(flushJobs))}function queuePostFlushCb(e){isArray$1(e)?pendingPostFlushCbs.push(...e):activePostFlushCbs&&e.id===-1?activePostFlushCbs.splice(postFlushIndex+1,0,e):e.flags&1||(pendingPostFlushCbs.push(e),e.flags|=1),queueFlush()}function flushPreFlushCbs(e,a,f=flushIndex+1){for(;f<queue.length;f++){const _=queue[f];if(_&&_.flags&2){if(e&&_.id!==e.uid)continue;queue.splice(f,1),f--,_.flags&4&&(_.flags&=-2),_(),_.flags&4||(_.flags&=-2)}}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const a=[...new Set(pendingPostFlushCbs)].sort((f,_)=>getId(f)-getId(_));if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...a);return}for(activePostFlushCbs=a,postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){const f=activePostFlushCbs[postFlushIndex];f.flags&4&&(f.flags&=-2),f.flags&8||f(),f.flags&=-2}activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?e.flags&2?-1:1/0:e.id;function flushJobs(e){try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const a=queue[flushIndex];a&&!(a.flags&8)&&(a.flags&4&&(a.flags&=-2),callWithErrorHandling(a,a.i,a.i?15:14),a.flags&4||(a.flags&=-2))}}finally{for(;flushIndex<queue.length;flushIndex++){const a=queue[flushIndex];a&&(a.flags&=-2)}flushIndex=-1,queue.length=0,flushPostFlushCbs(),currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const a=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,a}function withCtx(e,a=currentRenderingInstance,f){if(!a||e._n)return e;const _=(...w)=>{_._d&&setBlockTracking(-1);const x=setCurrentRenderingInstance(a);let E;try{E=e(...w)}finally{setCurrentRenderingInstance(x),_._d&&setBlockTracking(1)}return E};return _._n=!0,_._c=!0,_._d=!0,_}function withDirectives(e,a){if(currentRenderingInstance===null)return e;const f=getComponentPublicInstance(currentRenderingInstance),_=e.dirs||(e.dirs=[]);for(let w=0;w<a.length;w++){let[x,E,P,C=EMPTY_OBJ]=a[w];x&&(isFunction(x)&&(x={mounted:x,updated:x}),x.deep&&traverse(E),_.push({dir:x,instance:f,value:E,oldValue:void 0,arg:P,modifiers:C}))}return e}function invokeDirectiveHook(e,a,f,_){const w=e.dirs,x=a&&a.dirs;for(let E=0;E<w.length;E++){const P=w[E];x&&(P.oldValue=x[E].value);let C=P.dir[_];C&&(pauseTracking(),callWithAsyncErrorHandling(C,f,8,[e.el,P,e,a]),resetTracking())}}function provide(e,a){if(currentInstance){let f=currentInstance.provides;const _=currentInstance.parent&&currentInstance.parent.provides;_===f&&(f=currentInstance.provides=Object.create(_)),f[e]=a}}function inject(e,a,f=!1){const _=getCurrentInstance();if(_||currentApp){let w=currentApp?currentApp._context.provides:_?_.parent==null||_.ce?_.vnode.appContext&&_.vnode.appContext.provides:_.parent.provides:void 0;if(w&&e in w)return w[e];if(arguments.length>1)return f&&isFunction(a)?a.call(_&&_.proxy):a}}function hasInjectionContext(){return!!(getCurrentInstance()||currentApp)}const ssrContextKey=Symbol.for("v-scx"),useSSRContext=()=>inject(ssrContextKey);function watchEffect(e,a){return doWatch(e,null,a)}function watch(e,a,f){return doWatch(e,a,f)}function doWatch(e,a,f=EMPTY_OBJ){const{immediate:_,deep:w,flush:x,once:E}=f,P=extend$3({},f),C=a&&_||!a&&x!=="post";let M;if(isInSSRComponentSetup){if(x==="sync"){const Y=useSSRContext();M=Y.__watcherHandles||(Y.__watcherHandles=[])}else if(!C){const Y=()=>{};return Y.stop=NOOP,Y.resume=NOOP,Y.pause=NOOP,Y}}const B=currentInstance;P.call=(Y,X,en)=>callWithAsyncErrorHandling(Y,B,X,en);let q=!1;x==="post"?P.scheduler=Y=>{queuePostRenderEffect(Y,B&&B.suspense)}:x!=="sync"&&(q=!0,P.scheduler=(Y,X)=>{X?Y():queueJob(Y)}),P.augmentJob=Y=>{a&&(Y.flags|=4),q&&(Y.flags|=2,B&&(Y.id=B.uid,Y.i=B))};const J=watch$1(e,a,P);return isInSSRComponentSetup&&(M?M.push(J):C&&J()),J}function instanceWatch(e,a,f){const _=this.proxy,w=isString(e)?e.includes(".")?createPathGetter(_,e):()=>_[e]:e.bind(_,_);let x;isFunction(a)?x=a:(x=a.handler,f=a);const E=setCurrentInstance(this),P=doWatch(w,x.bind(_),f);return E(),P}function createPathGetter(e,a){const f=a.split(".");return()=>{let _=e;for(let w=0;w<f.length&&_;w++)_=_[f[w]];return _}}const TeleportEndKey=Symbol("_vte"),isTeleport=e=>e.__isTeleport,leaveCbKey=Symbol("_leaveCb"),enterCbKey=Symbol("_enterCb");function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionPropsValidators={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},recursiveGetSubtree=e=>{const a=e.subTree;return a.component?recursiveGetSubtree(a.component):a},BaseTransitionImpl={name:"BaseTransition",props:BaseTransitionPropsValidators,setup(e,{slots:a}){const f=getCurrentInstance(),_=useTransitionState();return()=>{const w=a.default&&getTransitionRawChildren(a.default(),!0);if(!w||!w.length)return;const x=findNonCommentChild(w),E=toRaw(e),{mode:P}=E;if(_.isLeaving)return emptyPlaceholder(x);const C=getInnerChild$1(x);if(!C)return emptyPlaceholder(x);let M=resolveTransitionHooks(C,E,_,f,q=>M=q);C.type!==Comment$1&&setTransitionHooks(C,M);let B=f.subTree&&getInnerChild$1(f.subTree);if(B&&B.type!==Comment$1&&!isSameVNodeType(B,C)&&recursiveGetSubtree(f).type!==Comment$1){let q=resolveTransitionHooks(B,E,_,f);if(setTransitionHooks(B,q),P==="out-in"&&C.type!==Comment$1)return _.isLeaving=!0,q.afterLeave=()=>{_.isLeaving=!1,f.job.flags&8||f.update(),delete q.afterLeave,B=void 0},emptyPlaceholder(x);P==="in-out"&&C.type!==Comment$1?q.delayLeave=(J,Y,X)=>{const en=getLeavingNodesForType(_,B);en[String(B.key)]=B,J[leaveCbKey]=()=>{Y(),J[leaveCbKey]=void 0,delete M.delayedLeave,B=void 0},M.delayedLeave=()=>{X(),delete M.delayedLeave,B=void 0}}:B=void 0}else B&&(B=void 0);return x}}};function findNonCommentChild(e){let a=e[0];if(e.length>1){for(const f of e)if(f.type!==Comment$1){a=f;break}}return a}const BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,a){const{leavingVNodes:f}=e;let _=f.get(a.type);return _||(_=Object.create(null),f.set(a.type,_)),_}function resolveTransitionHooks(e,a,f,_,w){const{appear:x,mode:E,persisted:P=!1,onBeforeEnter:C,onEnter:M,onAfterEnter:B,onEnterCancelled:q,onBeforeLeave:J,onLeave:Y,onAfterLeave:X,onLeaveCancelled:en,onBeforeAppear:dn,onAppear:pn,onAfterAppear:an,onAppearCancelled:un}=a,mn=String(e.key),fn=getLeavingNodesForType(f,e),Pn=(xn,Tn)=>{xn&&callWithAsyncErrorHandling(xn,_,9,Tn)},An=(xn,Tn)=>{const gn=Tn[1];Pn(xn,Tn),isArray$1(xn)?xn.every(cn=>cn.length<=1)&&gn():xn.length<=1&&gn()},sn={mode:E,persisted:P,beforeEnter(xn){let Tn=C;if(!f.isMounted)if(x)Tn=dn||C;else return;xn[leaveCbKey]&&xn[leaveCbKey](!0);const gn=fn[mn];gn&&isSameVNodeType(e,gn)&&gn.el[leaveCbKey]&&gn.el[leaveCbKey](),Pn(Tn,[xn])},enter(xn){let Tn=M,gn=B,cn=q;if(!f.isMounted)if(x)Tn=pn||M,gn=an||B,cn=un||q;else return;let On=!1;const En=xn[enterCbKey]=Ln=>{On||(On=!0,Ln?Pn(cn,[xn]):Pn(gn,[xn]),sn.delayedLeave&&sn.delayedLeave(),xn[enterCbKey]=void 0)};Tn?An(Tn,[xn,En]):En()},leave(xn,Tn){const gn=String(e.key);if(xn[enterCbKey]&&xn[enterCbKey](!0),f.isUnmounting)return Tn();Pn(J,[xn]);let cn=!1;const On=xn[leaveCbKey]=En=>{cn||(cn=!0,Tn(),En?Pn(en,[xn]):Pn(X,[xn]),xn[leaveCbKey]=void 0,fn[gn]===e&&delete fn[gn])};fn[gn]=e,Y?An(Y,[xn,On]):On()},clone(xn){const Tn=resolveTransitionHooks(xn,a,f,_,w);return w&&w(Tn),Tn}};return sn}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getInnerChild$1(e){if(!isKeepAlive(e))return isTeleport(e.type)&&e.children?findNonCommentChild(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:a,children:f}=e;if(f){if(a&16)return f[0];if(a&32&&isFunction(f.default))return f.default()}}function setTransitionHooks(e,a){e.shapeFlag&6&&e.component?(e.transition=a,setTransitionHooks(e.component.subTree,a)):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function getTransitionRawChildren(e,a=!1,f){let _=[],w=0;for(let x=0;x<e.length;x++){let E=e[x];const P=f==null?E.key:String(f)+String(E.key!=null?E.key:x);E.type===Fragment?(E.patchFlag&128&&w++,_=_.concat(getTransitionRawChildren(E.children,a,P))):(a||E.type!==Comment$1)&&_.push(P!=null?cloneVNode(E,{key:P}):E)}if(w>1)for(let x=0;x<_.length;x++)_[x].patchFlag=-2;return _}function defineComponent(e,a){return isFunction(e)?extend$3({name:e.name},a,{setup:e}):e}function useId(){const e=getCurrentInstance();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function markAsyncBoundary(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const pendingSetRefMap=new WeakMap;function setRef(e,a,f,_,w=!1){if(isArray$1(e)){e.forEach((X,en)=>setRef(X,a&&(isArray$1(a)?a[en]:a),f,_,w));return}if(isAsyncWrapper(_)&&!w){_.shapeFlag&512&&_.type.__asyncResolved&&_.component.subTree.component&&setRef(e,a,f,_.component.subTree);return}const x=_.shapeFlag&4?getComponentPublicInstance(_.component):_.el,E=w?null:x,{i:P,r:C}=e,M=a&&a.r,B=P.refs===EMPTY_OBJ?P.refs={}:P.refs,q=P.setupState,J=toRaw(q),Y=q===EMPTY_OBJ?NO:X=>hasOwn(J,X);if(M!=null&&M!==C){if(invalidatePendingSetRef(a),isString(M))B[M]=null,Y(M)&&(q[M]=null);else if(isRef(M)){M.value=null;const X=a;X.k&&(B[X.k]=null)}}if(isFunction(C))callWithErrorHandling(C,P,12,[E,B]);else{const X=isString(C),en=isRef(C);if(X||en){const dn=()=>{if(e.f){const pn=X?Y(C)?q[C]:B[C]:C.value;if(w)isArray$1(pn)&&remove(pn,x);else if(isArray$1(pn))pn.includes(x)||pn.push(x);else if(X)B[C]=[x],Y(C)&&(q[C]=B[C]);else{const an=[x];C.value=an,e.k&&(B[e.k]=an)}}else X?(B[C]=E,Y(C)&&(q[C]=E)):en&&(C.value=E,e.k&&(B[e.k]=E))};if(E){const pn=()=>{dn(),pendingSetRefMap.delete(e)};pn.id=-1,pendingSetRefMap.set(e,pn),queuePostRenderEffect(pn,f)}else invalidatePendingSetRef(e),dn()}}}function invalidatePendingSetRef(e){const a=pendingSetRefMap.get(e);a&&(a.flags|=8,pendingSetRefMap.delete(e))}getGlobalThis().requestIdleCallback;getGlobalThis().cancelIdleCallback;const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive;function onActivated(e,a){registerKeepAliveHook(e,"a",a)}function onDeactivated(e,a){registerKeepAliveHook(e,"da",a)}function registerKeepAliveHook(e,a,f=currentInstance){const _=e.__wdc||(e.__wdc=()=>{let w=f;for(;w;){if(w.isDeactivated)return;w=w.parent}return e()});if(injectHook(a,_,f),f){let w=f.parent;for(;w&&w.parent;)isKeepAlive(w.parent.vnode)&&injectToKeepAliveRoot(_,a,f,w),w=w.parent}}function injectToKeepAliveRoot(e,a,f,_){const w=injectHook(a,e,_,!0);onUnmounted(()=>{remove(_[a],w)},f)}function injectHook(e,a,f=currentInstance,_=!1){if(f){const w=f[e]||(f[e]=[]),x=a.__weh||(a.__weh=(...E)=>{pauseTracking();const P=setCurrentInstance(f),C=callWithAsyncErrorHandling(a,f,e,E);return P(),resetTracking(),C});return _?w.unshift(x):w.push(x),x}}const createHook=e=>(a,f=currentInstance)=>{(!isInSSRComponentSetup||e==="sp")&&injectHook(e,(..._)=>a(..._),f)},onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,a=currentInstance){injectHook("ec",e,a)}const COMPONENTS="components";function resolveComponent(e,a){return resolveAsset(COMPONENTS,e,!0,a)||e}const NULL_DYNAMIC_COMPONENT=Symbol.for("v-ndc");function resolveDynamicComponent(e){return isString(e)?resolveAsset(COMPONENTS,e,!1)||e:e||NULL_DYNAMIC_COMPONENT}function resolveAsset(e,a,f=!0,_=!1){const w=currentRenderingInstance||currentInstance;if(w){const x=w.type;{const P=getComponentName(x,!1);if(P&&(P===a||P===camelize(a)||P===capitalize(camelize(a))))return x}const E=resolve(w[e]||x[e],a)||resolve(w.appContext[e],a);return!E&&_?x:E}}function resolve(e,a){return e&&(e[a]||e[camelize(a)]||e[capitalize(camelize(a))])}function renderList(e,a,f,_){let w;const x=f,E=isArray$1(e);if(E||isString(e)){const P=E&&isReactive(e);let C=!1,M=!1;P&&(C=!isShallow(e),M=isReadonly(e),e=shallowReadArray(e)),w=new Array(e.length);for(let B=0,q=e.length;B<q;B++)w[B]=a(C?M?toReadonly(toReactive(e[B])):toReactive(e[B]):e[B],B,void 0,x)}else if(typeof e=="number"){w=new Array(e);for(let P=0;P<e;P++)w[P]=a(P+1,P,void 0,x)}else if(isObject$3(e))if(e[Symbol.iterator])w=Array.from(e,(P,C)=>a(P,C,void 0,x));else{const P=Object.keys(e);w=new Array(P.length);for(let C=0,M=P.length;C<M;C++){const B=P[C];w[C]=a(e[B],B,C,x)}}else w=[];return w}const getPublicInstance=e=>e?isStatefulComponent(e)?getComponentPublicInstance(e):getPublicInstance(e.parent):null,publicPropertiesMap=extend$3(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>{queueJob(e.update)}),$nextTick:e=>e.n||(e.n=nextTick$1.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),hasSetupBinding=(e,a)=>e!==EMPTY_OBJ&&!e.__isScriptSetup&&hasOwn(e,a),PublicInstanceProxyHandlers={get({_:e},a){if(a==="__v_skip")return!0;const{ctx:f,setupState:_,data:w,props:x,accessCache:E,type:P,appContext:C}=e;if(a[0]!=="$"){const J=E[a];if(J!==void 0)switch(J){case 1:return _[a];case 2:return w[a];case 4:return f[a];case 3:return x[a]}else{if(hasSetupBinding(_,a))return E[a]=1,_[a];if(w!==EMPTY_OBJ&&hasOwn(w,a))return E[a]=2,w[a];if(hasOwn(x,a))return E[a]=3,x[a];if(f!==EMPTY_OBJ&&hasOwn(f,a))return E[a]=4,f[a];shouldCacheAccess&&(E[a]=0)}}const M=publicPropertiesMap[a];let B,q;if(M)return a==="$attrs"&&track(e.attrs,"get",""),M(e);if((B=P.__cssModules)&&(B=B[a]))return B;if(f!==EMPTY_OBJ&&hasOwn(f,a))return E[a]=4,f[a];if(q=C.config.globalProperties,hasOwn(q,a))return q[a]},set({_:e},a,f){const{data:_,setupState:w,ctx:x}=e;return hasSetupBinding(w,a)?(w[a]=f,!0):_!==EMPTY_OBJ&&hasOwn(_,a)?(_[a]=f,!0):hasOwn(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(x[a]=f,!0)},has({_:{data:e,setupState:a,accessCache:f,ctx:_,appContext:w,props:x,type:E}},P){let C;return!!(f[P]||e!==EMPTY_OBJ&&P[0]!=="$"&&hasOwn(e,P)||hasSetupBinding(a,P)||hasOwn(x,P)||hasOwn(_,P)||hasOwn(publicPropertiesMap,P)||hasOwn(w.config.globalProperties,P)||(C=E.__cssModules)&&C[P])},defineProperty(e,a,f){return f.get!=null?e._.accessCache[a]=0:hasOwn(f,"value")&&this.set(e,a,f.value,null),Reflect.defineProperty(e,a,f)}};function normalizePropsOrEmits(e){return isArray$1(e)?e.reduce((a,f)=>(a[f]=null,a),{}):e}let shouldCacheAccess=!0;function applyOptions(e){const a=resolveMergedOptions(e),f=e.proxy,_=e.ctx;shouldCacheAccess=!1,a.beforeCreate&&callHook$1(a.beforeCreate,e,"bc");const{data:w,computed:x,methods:E,watch:P,provide:C,inject:M,created:B,beforeMount:q,mounted:J,beforeUpdate:Y,updated:X,activated:en,deactivated:dn,beforeDestroy:pn,beforeUnmount:an,destroyed:un,unmounted:mn,render:fn,renderTracked:Pn,renderTriggered:An,errorCaptured:sn,serverPrefetch:xn,expose:Tn,inheritAttrs:gn,components:cn,directives:On,filters:En}=a;if(M&&resolveInjections(M,_,null),E)for(const Rn in E){const _n=E[Rn];isFunction(_n)&&(_[Rn]=_n.bind(f))}if(w){const Rn=w.call(f,f);isObject$3(Rn)&&(e.data=reactive(Rn))}if(shouldCacheAccess=!0,x)for(const Rn in x){const _n=x[Rn],Gn=isFunction(_n)?_n.bind(f,f):isFunction(_n.get)?_n.get.bind(f,f):NOOP,Xn=!isFunction(_n)&&isFunction(_n.set)?_n.set.bind(f):NOOP,Un=computed({get:Gn,set:Xn});Object.defineProperty(_,Rn,{enumerable:!0,configurable:!0,get:()=>Un.value,set:Yn=>Un.value=Yn})}if(P)for(const Rn in P)createWatcher(P[Rn],_,f,Rn);if(C){const Rn=isFunction(C)?C.call(f):C;Reflect.ownKeys(Rn).forEach(_n=>{provide(_n,Rn[_n])})}B&&callHook$1(B,e,"c");function qn(Rn,_n){isArray$1(_n)?_n.forEach(Gn=>Rn(Gn.bind(f))):_n&&Rn(_n.bind(f))}if(qn(onBeforeMount,q),qn(onMounted,J),qn(onBeforeUpdate,Y),qn(onUpdated,X),qn(onActivated,en),qn(onDeactivated,dn),qn(onErrorCaptured,sn),qn(onRenderTracked,Pn),qn(onRenderTriggered,An),qn(onBeforeUnmount,an),qn(onUnmounted,mn),qn(onServerPrefetch,xn),isArray$1(Tn))if(Tn.length){const Rn=e.exposed||(e.exposed={});Tn.forEach(_n=>{Object.defineProperty(Rn,_n,{get:()=>f[_n],set:Gn=>f[_n]=Gn,enumerable:!0})})}else e.exposed||(e.exposed={});fn&&e.render===NOOP&&(e.render=fn),gn!=null&&(e.inheritAttrs=gn),cn&&(e.components=cn),On&&(e.directives=On),xn&&markAsyncBoundary(e)}function resolveInjections(e,a,f=NOOP){isArray$1(e)&&(e=normalizeInject(e));for(const _ in e){const w=e[_];let x;isObject$3(w)?"default"in w?x=inject(w.from||_,w.default,!0):x=inject(w.from||_):x=inject(w),isRef(x)?Object.defineProperty(a,_,{enumerable:!0,configurable:!0,get:()=>x.value,set:E=>x.value=E}):a[_]=x}}function callHook$1(e,a,f){callWithAsyncErrorHandling(isArray$1(e)?e.map(_=>_.bind(a.proxy)):e.bind(a.proxy),a,f)}function createWatcher(e,a,f,_){let w=_.includes(".")?createPathGetter(f,_):()=>f[_];if(isString(e)){const x=a[e];isFunction(x)&&watch(w,x)}else if(isFunction(e))watch(w,e.bind(f));else if(isObject$3(e))if(isArray$1(e))e.forEach(x=>createWatcher(x,a,f,_));else{const x=isFunction(e.handler)?e.handler.bind(f):a[e.handler];isFunction(x)&&watch(w,x,e)}}function resolveMergedOptions(e){const a=e.type,{mixins:f,extends:_}=a,{mixins:w,optionsCache:x,config:{optionMergeStrategies:E}}=e.appContext,P=x.get(a);let C;return P?C=P:!w.length&&!f&&!_?C=a:(C={},w.length&&w.forEach(M=>mergeOptions$1(C,M,E,!0)),mergeOptions$1(C,a,E)),isObject$3(a)&&x.set(a,C),C}function mergeOptions$1(e,a,f,_=!1){const{mixins:w,extends:x}=a;x&&mergeOptions$1(e,x,f,!0),w&&w.forEach(E=>mergeOptions$1(e,E,f,!0));for(const E in a)if(!(_&&E==="expose")){const P=internalOptionMergeStrats[E]||f&&f[E];e[E]=P?P(e[E],a[E]):a[E]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeEmitsOrPropsOptions,emits:mergeEmitsOrPropsOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,a){return a?e?function(){return extend$3(isFunction(e)?e.call(this,this):e,isFunction(a)?a.call(this,this):a)}:a:e}function mergeInject(e,a){return mergeObjectOptions(normalizeInject(e),normalizeInject(a))}function normalizeInject(e){if(isArray$1(e)){const a={};for(let f=0;f<e.length;f++)a[e[f]]=e[f];return a}return e}function mergeAsArray(e,a){return e?[...new Set([].concat(e,a))]:a}function mergeObjectOptions(e,a){return e?extend$3(Object.create(null),e,a):a}function mergeEmitsOrPropsOptions(e,a){return e?isArray$1(e)&&isArray$1(a)?[...new Set([...e,...a])]:extend$3(Object.create(null),normalizePropsOrEmits(e),normalizePropsOrEmits(a??{})):a}function mergeWatchOptions(e,a){if(!e)return a;if(!a)return e;const f=extend$3(Object.create(null),e);for(const _ in a)f[_]=mergeAsArray(e[_],a[_]);return f}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(e,a){return function(_,w=null){isFunction(_)||(_=extend$3({},_)),w!=null&&!isObject$3(w)&&(w=null);const x=createAppContext(),E=new WeakSet,P=[];let C=!1;const M=x.app={_uid:uid$1++,_component:_,_props:w,_container:null,_context:x,_instance:null,version,get config(){return x.config},set config(B){},use(B,...q){return E.has(B)||(B&&isFunction(B.install)?(E.add(B),B.install(M,...q)):isFunction(B)&&(E.add(B),B(M,...q))),M},mixin(B){return x.mixins.includes(B)||x.mixins.push(B),M},component(B,q){return q?(x.components[B]=q,M):x.components[B]},directive(B,q){return q?(x.directives[B]=q,M):x.directives[B]},mount(B,q,J){if(!C){const Y=M._ceVNode||createVNode(_,w);return Y.appContext=x,J===!0?J="svg":J===!1&&(J=void 0),e(Y,B,J),C=!0,M._container=B,B.__vue_app__=M,getComponentPublicInstance(Y.component)}},onUnmount(B){P.push(B)},unmount(){C&&(callWithAsyncErrorHandling(P,M._instance,16),e(null,M._container),delete M._container.__vue_app__)},provide(B,q){return x.provides[B]=q,M},runWithContext(B){const q=currentApp;currentApp=M;try{return B()}finally{currentApp=q}}};return M}}let currentApp=null;const getModelModifiers=(e,a)=>a==="modelValue"||a==="model-value"?e.modelModifiers:e[`${a}Modifiers`]||e[`${camelize(a)}Modifiers`]||e[`${hyphenate(a)}Modifiers`];function emit(e,a,...f){if(e.isUnmounted)return;const _=e.vnode.props||EMPTY_OBJ;let w=f;const x=a.startsWith("update:"),E=x&&getModelModifiers(_,a.slice(7));E&&(E.trim&&(w=f.map(B=>isString(B)?B.trim():B)),E.number&&(w=f.map(looseToNumber)));let P,C=_[P=toHandlerKey(a)]||_[P=toHandlerKey(camelize(a))];!C&&x&&(C=_[P=toHandlerKey(hyphenate(a))]),C&&callWithAsyncErrorHandling(C,e,6,w);const M=_[P+"Once"];if(M){if(!e.emitted)e.emitted={};else if(e.emitted[P])return;e.emitted[P]=!0,callWithAsyncErrorHandling(M,e,6,w)}}const mixinEmitsCache=new WeakMap;function normalizeEmitsOptions(e,a,f=!1){const _=f?mixinEmitsCache:a.emitsCache,w=_.get(e);if(w!==void 0)return w;const x=e.emits;let E={},P=!1;if(!isFunction(e)){const C=M=>{const B=normalizeEmitsOptions(M,a,!0);B&&(P=!0,extend$3(E,B))};!f&&a.mixins.length&&a.mixins.forEach(C),e.extends&&C(e.extends),e.mixins&&e.mixins.forEach(C)}return!x&&!P?(isObject$3(e)&&_.set(e,null),null):(isArray$1(x)?x.forEach(C=>E[C]=null):extend$3(E,x),isObject$3(e)&&_.set(e,E),E)}function isEmitListener(e,a){return!e||!isOn(a)?!1:(a=a.slice(2).replace(/Once$/,""),hasOwn(e,a[0].toLowerCase()+a.slice(1))||hasOwn(e,hyphenate(a))||hasOwn(e,a))}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:a,vnode:f,proxy:_,withProxy:w,propsOptions:[x],slots:E,attrs:P,emit:C,render:M,renderCache:B,props:q,data:J,setupState:Y,ctx:X,inheritAttrs:en}=e,dn=setCurrentRenderingInstance(e);let pn,an;try{if(f.shapeFlag&4){const mn=w||_,fn=mn;pn=normalizeVNode(M.call(fn,mn,B,q,Y,J,X)),an=P}else{const mn=a;pn=normalizeVNode(mn.length>1?mn(q,{attrs:P,slots:E,emit:C}):mn(q,null)),an=a.props?P:getFunctionalFallthrough(P)}}catch(mn){blockStack.length=0,handleError(mn,e,1),pn=createVNode(Comment$1)}let un=pn;if(an&&en!==!1){const mn=Object.keys(an),{shapeFlag:fn}=un;mn.length&&fn&7&&(x&&mn.some(isModelListener)&&(an=filterModelListeners(an,x)),un=cloneVNode(un,an,!1,!0))}return f.dirs&&(un=cloneVNode(un,null,!1,!0),un.dirs=un.dirs?un.dirs.concat(f.dirs):f.dirs),f.transition&&setTransitionHooks(un,f.transition),pn=un,setCurrentRenderingInstance(dn),pn}const getFunctionalFallthrough=e=>{let a;for(const f in e)(f==="class"||f==="style"||isOn(f))&&((a||(a={}))[f]=e[f]);return a},filterModelListeners=(e,a)=>{const f={};for(const _ in e)(!isModelListener(_)||!(_.slice(9)in a))&&(f[_]=e[_]);return f};function shouldUpdateComponent(e,a,f){const{props:_,children:w,component:x}=e,{props:E,children:P,patchFlag:C}=a,M=x.emitsOptions;if(a.dirs||a.transition)return!0;if(f&&C>=0){if(C&1024)return!0;if(C&16)return _?hasPropsChanged(_,E,M):!!E;if(C&8){const B=a.dynamicProps;for(let q=0;q<B.length;q++){const J=B[q];if(E[J]!==_[J]&&!isEmitListener(M,J))return!0}}}else return(w||P)&&(!P||!P.$stable)?!0:_===E?!1:_?E?hasPropsChanged(_,E,M):!0:!!E;return!1}function hasPropsChanged(e,a,f){const _=Object.keys(a);if(_.length!==Object.keys(e).length)return!0;for(let w=0;w<_.length;w++){const x=_[w];if(a[x]!==e[x]&&!isEmitListener(f,x))return!0}return!1}function updateHOCHostEl({vnode:e,parent:a},f){for(;a;){const _=a.subTree;if(_.suspense&&_.suspense.activeBranch===e&&(_.el=e.el),_===e)(e=a.vnode).el=f,a=a.parent;else break}}const internalObjectProto={},createInternalObject=()=>Object.create(internalObjectProto),isInternalObject=e=>Object.getPrototypeOf(e)===internalObjectProto;function initProps(e,a,f,_=!1){const w={},x=createInternalObject();e.propsDefaults=Object.create(null),setFullProps(e,a,w,x);for(const E in e.propsOptions[0])E in w||(w[E]=void 0);f?e.props=_?w:shallowReactive(w):e.type.props?e.props=w:e.props=x,e.attrs=x}function updateProps(e,a,f,_){const{props:w,attrs:x,vnode:{patchFlag:E}}=e,P=toRaw(w),[C]=e.propsOptions;let M=!1;if((_||E>0)&&!(E&16)){if(E&8){const B=e.vnode.dynamicProps;for(let q=0;q<B.length;q++){let J=B[q];if(isEmitListener(e.emitsOptions,J))continue;const Y=a[J];if(C)if(hasOwn(x,J))Y!==x[J]&&(x[J]=Y,M=!0);else{const X=camelize(J);w[X]=resolvePropValue(C,P,X,Y,e,!1)}else Y!==x[J]&&(x[J]=Y,M=!0)}}}else{setFullProps(e,a,w,x)&&(M=!0);let B;for(const q in P)(!a||!hasOwn(a,q)&&((B=hyphenate(q))===q||!hasOwn(a,B)))&&(C?f&&(f[q]!==void 0||f[B]!==void 0)&&(w[q]=resolvePropValue(C,P,q,void 0,e,!0)):delete w[q]);if(x!==P)for(const q in x)(!a||!hasOwn(a,q))&&(delete x[q],M=!0)}M&&trigger(e.attrs,"set","")}function setFullProps(e,a,f,_){const[w,x]=e.propsOptions;let E=!1,P;if(a)for(let C in a){if(isReservedProp(C))continue;const M=a[C];let B;w&&hasOwn(w,B=camelize(C))?!x||!x.includes(B)?f[B]=M:(P||(P={}))[B]=M:isEmitListener(e.emitsOptions,C)||(!(C in _)||M!==_[C])&&(_[C]=M,E=!0)}if(x){const C=toRaw(f),M=P||EMPTY_OBJ;for(let B=0;B<x.length;B++){const q=x[B];f[q]=resolvePropValue(w,C,q,M[q],e,!hasOwn(M,q))}}return E}function resolvePropValue(e,a,f,_,w,x){const E=e[f];if(E!=null){const P=hasOwn(E,"default");if(P&&_===void 0){const C=E.default;if(E.type!==Function&&!E.skipFactory&&isFunction(C)){const{propsDefaults:M}=w;if(f in M)_=M[f];else{const B=setCurrentInstance(w);_=M[f]=C.call(null,a),B()}}else _=C;w.ce&&w.ce._setProp(f,_)}E[0]&&(x&&!P?_=!1:E[1]&&(_===""||_===hyphenate(f))&&(_=!0))}return _}const mixinPropsCache=new WeakMap;function normalizePropsOptions(e,a,f=!1){const _=f?mixinPropsCache:a.propsCache,w=_.get(e);if(w)return w;const x=e.props,E={},P=[];let C=!1;if(!isFunction(e)){const B=q=>{C=!0;const[J,Y]=normalizePropsOptions(q,a,!0);extend$3(E,J),Y&&P.push(...Y)};!f&&a.mixins.length&&a.mixins.forEach(B),e.extends&&B(e.extends),e.mixins&&e.mixins.forEach(B)}if(!x&&!C)return isObject$3(e)&&_.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$1(x))for(let B=0;B<x.length;B++){const q=camelize(x[B]);validatePropName(q)&&(E[q]=EMPTY_OBJ)}else if(x)for(const B in x){const q=camelize(B);if(validatePropName(q)){const J=x[B],Y=E[q]=isArray$1(J)||isFunction(J)?{type:J}:extend$3({},J),X=Y.type;let en=!1,dn=!0;if(isArray$1(X))for(let pn=0;pn<X.length;++pn){const an=X[pn],un=isFunction(an)&&an.name;if(un==="Boolean"){en=!0;break}else un==="String"&&(dn=!1)}else en=isFunction(X)&&X.name==="Boolean";Y[0]=en,Y[1]=dn,(en||hasOwn(Y,"default"))&&P.push(q)}}const M=[E,P];return isObject$3(e)&&_.set(e,M),M}function validatePropName(e){return e[0]!=="$"&&!isReservedProp(e)}const isInternalKey=e=>e==="_"||e==="_ctx"||e==="$stable",normalizeSlotValue=e=>isArray$1(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot$1=(e,a,f)=>{if(a._n)return a;const _=withCtx((...w)=>normalizeSlotValue(a(...w)),f);return _._c=!1,_},normalizeObjectSlots=(e,a,f)=>{const _=e._ctx;for(const w in e){if(isInternalKey(w))continue;const x=e[w];if(isFunction(x))a[w]=normalizeSlot$1(w,x,_);else if(x!=null){const E=normalizeSlotValue(x);a[w]=()=>E}}},normalizeVNodeSlots=(e,a)=>{const f=normalizeSlotValue(a);e.slots.default=()=>f},assignSlots=(e,a,f)=>{for(const _ in a)(f||!isInternalKey(_))&&(e[_]=a[_])},initSlots=(e,a,f)=>{const _=e.slots=createInternalObject();if(e.vnode.shapeFlag&32){const w=a._;w?(assignSlots(_,a,f),f&&def(_,"_",w,!0)):normalizeObjectSlots(a,_)}else a&&normalizeVNodeSlots(e,a)},updateSlots=(e,a,f)=>{const{vnode:_,slots:w}=e;let x=!0,E=EMPTY_OBJ;if(_.shapeFlag&32){const P=a._;P?f&&P===1?x=!1:assignSlots(w,a,f):(x=!a.$stable,normalizeObjectSlots(a,w)),E=a}else a&&(normalizeVNodeSlots(e,a),E={default:1});if(x)for(const P in w)!isInternalKey(P)&&E[P]==null&&delete w[P]},queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,a){const f=getGlobalThis();f.__VUE__=!0;const{insert:_,remove:w,patchProp:x,createElement:E,createText:P,createComment:C,setText:M,setElementText:B,parentNode:q,nextSibling:J,setScopeId:Y=NOOP,insertStaticContent:X}=e,en=(nn,tn,rn,yn=null,kn=null,Sn=null,Nn=void 0,$n=null,Dn=!!tn.dynamicChildren)=>{if(nn===tn)return;nn&&!isSameVNodeType(nn,tn)&&(yn=vn(nn),Yn(nn,kn,Sn,!0),nn=null),tn.patchFlag===-2&&(Dn=!1,tn.dynamicChildren=null);const{type:Cn,ref:Hn,shapeFlag:Bn}=tn;switch(Cn){case Text:dn(nn,tn,rn,yn);break;case Comment$1:pn(nn,tn,rn,yn);break;case Static:nn==null&&an(tn,rn,yn,Nn);break;case Fragment:cn(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn);break;default:Bn&1?fn(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn):Bn&6?On(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn):(Bn&64||Bn&128)&&Cn.process(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn,Fn)}Hn!=null&&kn?setRef(Hn,nn&&nn.ref,Sn,tn||nn,!tn):Hn==null&&nn&&nn.ref!=null&&setRef(nn.ref,null,Sn,nn,!0)},dn=(nn,tn,rn,yn)=>{if(nn==null)_(tn.el=P(tn.children),rn,yn);else{const kn=tn.el=nn.el;tn.children!==nn.children&&M(kn,tn.children)}},pn=(nn,tn,rn,yn)=>{nn==null?_(tn.el=C(tn.children||""),rn,yn):tn.el=nn.el},an=(nn,tn,rn,yn)=>{[nn.el,nn.anchor]=X(nn.children,tn,rn,yn,nn.el,nn.anchor)},un=({el:nn,anchor:tn},rn,yn)=>{let kn;for(;nn&&nn!==tn;)kn=J(nn),_(nn,rn,yn),nn=kn;_(tn,rn,yn)},mn=({el:nn,anchor:tn})=>{let rn;for(;nn&&nn!==tn;)rn=J(nn),w(nn),nn=rn;w(tn)},fn=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn)=>{if(tn.type==="svg"?Nn="svg":tn.type==="math"&&(Nn="mathml"),nn==null)Pn(tn,rn,yn,kn,Sn,Nn,$n,Dn);else{const Cn=nn.el&&nn.el._isVueCE?nn.el:null;try{Cn&&Cn._beginPatch(),xn(nn,tn,kn,Sn,Nn,$n,Dn)}finally{Cn&&Cn._endPatch()}}},Pn=(nn,tn,rn,yn,kn,Sn,Nn,$n)=>{let Dn,Cn;const{props:Hn,shapeFlag:Bn,transition:zn,dirs:I}=nn;if(Dn=nn.el=E(nn.type,Sn,Hn&&Hn.is,Hn),Bn&8?B(Dn,nn.children):Bn&16&&sn(nn.children,Dn,null,yn,kn,resolveChildrenNamespace(nn,Sn),Nn,$n),I&&invokeDirectiveHook(nn,null,yn,"created"),An(Dn,nn,nn.scopeId,Nn,yn),Hn){for(const G in Hn)G!=="value"&&!isReservedProp(G)&&x(Dn,G,null,Hn[G],Sn,yn);"value"in Hn&&x(Dn,"value",null,Hn.value,Sn),(Cn=Hn.onVnodeBeforeMount)&&invokeVNodeHook(Cn,yn,nn)}I&&invokeDirectiveHook(nn,null,yn,"beforeMount");const ln=needTransition(kn,zn);ln&&zn.beforeEnter(Dn),_(Dn,tn,rn),((Cn=Hn&&Hn.onVnodeMounted)||ln||I)&&queuePostRenderEffect(()=>{Cn&&invokeVNodeHook(Cn,yn,nn),ln&&zn.enter(Dn),I&&invokeDirectiveHook(nn,null,yn,"mounted")},kn)},An=(nn,tn,rn,yn,kn)=>{if(rn&&Y(nn,rn),yn)for(let Sn=0;Sn<yn.length;Sn++)Y(nn,yn[Sn]);if(kn){let Sn=kn.subTree;if(tn===Sn||isSuspense(Sn.type)&&(Sn.ssContent===tn||Sn.ssFallback===tn)){const Nn=kn.vnode;An(nn,Nn,Nn.scopeId,Nn.slotScopeIds,kn.parent)}}},sn=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn=0)=>{for(let Cn=Dn;Cn<nn.length;Cn++){const Hn=nn[Cn]=$n?cloneIfMounted(nn[Cn]):normalizeVNode(nn[Cn]);en(null,Hn,tn,rn,yn,kn,Sn,Nn,$n)}},xn=(nn,tn,rn,yn,kn,Sn,Nn)=>{const $n=tn.el=nn.el;let{patchFlag:Dn,dynamicChildren:Cn,dirs:Hn}=tn;Dn|=nn.patchFlag&16;const Bn=nn.props||EMPTY_OBJ,zn=tn.props||EMPTY_OBJ;let I;if(rn&&toggleRecurse(rn,!1),(I=zn.onVnodeBeforeUpdate)&&invokeVNodeHook(I,rn,tn,nn),Hn&&invokeDirectiveHook(tn,nn,rn,"beforeUpdate"),rn&&toggleRecurse(rn,!0),(Bn.innerHTML&&zn.innerHTML==null||Bn.textContent&&zn.textContent==null)&&B($n,""),Cn?Tn(nn.dynamicChildren,Cn,$n,rn,yn,resolveChildrenNamespace(tn,kn),Sn):Nn||_n(nn,tn,$n,null,rn,yn,resolveChildrenNamespace(tn,kn),Sn,!1),Dn>0){if(Dn&16)gn($n,Bn,zn,rn,kn);else if(Dn&2&&Bn.class!==zn.class&&x($n,"class",null,zn.class,kn),Dn&4&&x($n,"style",Bn.style,zn.style,kn),Dn&8){const ln=tn.dynamicProps;for(let G=0;G<ln.length;G++){const D=ln[G],H=Bn[D],z=zn[D];(z!==H||D==="value")&&x($n,D,H,z,kn,rn)}}Dn&1&&nn.children!==tn.children&&B($n,tn.children)}else!Nn&&Cn==null&&gn($n,Bn,zn,rn,kn);((I=zn.onVnodeUpdated)||Hn)&&queuePostRenderEffect(()=>{I&&invokeVNodeHook(I,rn,tn,nn),Hn&&invokeDirectiveHook(tn,nn,rn,"updated")},yn)},Tn=(nn,tn,rn,yn,kn,Sn,Nn)=>{for(let $n=0;$n<tn.length;$n++){const Dn=nn[$n],Cn=tn[$n],Hn=Dn.el&&(Dn.type===Fragment||!isSameVNodeType(Dn,Cn)||Dn.shapeFlag&198)?q(Dn.el):rn;en(Dn,Cn,Hn,null,yn,kn,Sn,Nn,!0)}},gn=(nn,tn,rn,yn,kn)=>{if(tn!==rn){if(tn!==EMPTY_OBJ)for(const Sn in tn)!isReservedProp(Sn)&&!(Sn in rn)&&x(nn,Sn,tn[Sn],null,kn,yn);for(const Sn in rn){if(isReservedProp(Sn))continue;const Nn=rn[Sn],$n=tn[Sn];Nn!==$n&&Sn!=="value"&&x(nn,Sn,$n,Nn,kn,yn)}"value"in rn&&x(nn,"value",tn.value,rn.value,kn)}},cn=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn)=>{const Cn=tn.el=nn?nn.el:P(""),Hn=tn.anchor=nn?nn.anchor:P("");let{patchFlag:Bn,dynamicChildren:zn,slotScopeIds:I}=tn;I&&($n=$n?$n.concat(I):I),nn==null?(_(Cn,rn,yn),_(Hn,rn,yn),sn(tn.children||[],rn,Hn,kn,Sn,Nn,$n,Dn)):Bn>0&&Bn&64&&zn&&nn.dynamicChildren&&nn.dynamicChildren.length===zn.length?(Tn(nn.dynamicChildren,zn,rn,kn,Sn,Nn,$n),(tn.key!=null||kn&&tn===kn.subTree)&&traverseStaticChildren(nn,tn,!0)):_n(nn,tn,rn,Hn,kn,Sn,Nn,$n,Dn)},On=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn)=>{tn.slotScopeIds=$n,nn==null?tn.shapeFlag&512?kn.ctx.activate(tn,rn,yn,Nn,Dn):En(tn,rn,yn,kn,Sn,Nn,Dn):Ln(nn,tn,Dn)},En=(nn,tn,rn,yn,kn,Sn,Nn)=>{const $n=nn.component=createComponentInstance(nn,yn,kn);if(isKeepAlive(nn)&&($n.ctx.renderer=Fn),setupComponent($n,!1,Nn),$n.asyncDep){if(kn&&kn.registerDep($n,qn,Nn),!nn.el){const Dn=$n.subTree=createVNode(Comment$1);pn(null,Dn,tn,rn),nn.placeholder=Dn.el}}else qn($n,nn,tn,rn,kn,Sn,Nn)},Ln=(nn,tn,rn)=>{const yn=tn.component=nn.component;if(shouldUpdateComponent(nn,tn,rn))if(yn.asyncDep&&!yn.asyncResolved){Rn(yn,tn,rn);return}else yn.next=tn,yn.update();else tn.el=nn.el,yn.vnode=tn},qn=(nn,tn,rn,yn,kn,Sn,Nn)=>{const $n=()=>{if(nn.isMounted){let{next:Bn,bu:zn,u:I,parent:ln,vnode:G}=nn;{const Z=locateNonHydratedAsyncRoot(nn);if(Z){Bn&&(Bn.el=G.el,Rn(nn,Bn,Nn)),Z.asyncDep.then(()=>{nn.isUnmounted||$n()});return}}let D=Bn,H;toggleRecurse(nn,!1),Bn?(Bn.el=G.el,Rn(nn,Bn,Nn)):Bn=G,zn&&invokeArrayFns(zn),(H=Bn.props&&Bn.props.onVnodeBeforeUpdate)&&invokeVNodeHook(H,ln,Bn,G),toggleRecurse(nn,!0);const z=renderComponentRoot(nn),K=nn.subTree;nn.subTree=z,en(K,z,q(K.el),vn(K),nn,kn,Sn),Bn.el=z.el,D===null&&updateHOCHostEl(nn,z.el),I&&queuePostRenderEffect(I,kn),(H=Bn.props&&Bn.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(H,ln,Bn,G),kn)}else{let Bn;const{el:zn,props:I}=tn,{bm:ln,m:G,parent:D,root:H,type:z}=nn,K=isAsyncWrapper(tn);toggleRecurse(nn,!1),ln&&invokeArrayFns(ln),!K&&(Bn=I&&I.onVnodeBeforeMount)&&invokeVNodeHook(Bn,D,tn),toggleRecurse(nn,!0);{H.ce&&H.ce._def.shadowRoot!==!1&&H.ce._injectChildStyle(z);const Z=nn.subTree=renderComponentRoot(nn);en(null,Z,rn,yn,nn,kn,Sn),tn.el=Z.el}if(G&&queuePostRenderEffect(G,kn),!K&&(Bn=I&&I.onVnodeMounted)){const Z=tn;queuePostRenderEffect(()=>invokeVNodeHook(Bn,D,Z),kn)}(tn.shapeFlag&256||D&&isAsyncWrapper(D.vnode)&&D.vnode.shapeFlag&256)&&nn.a&&queuePostRenderEffect(nn.a,kn),nn.isMounted=!0,tn=rn=yn=null}};nn.scope.on();const Dn=nn.effect=new ReactiveEffect($n);nn.scope.off();const Cn=nn.update=Dn.run.bind(Dn),Hn=nn.job=Dn.runIfDirty.bind(Dn);Hn.i=nn,Hn.id=nn.uid,Dn.scheduler=()=>queueJob(Hn),toggleRecurse(nn,!0),Cn()},Rn=(nn,tn,rn)=>{tn.component=nn;const yn=nn.vnode.props;nn.vnode=tn,nn.next=null,updateProps(nn,tn.props,yn,rn),updateSlots(nn,tn.children,rn),pauseTracking(),flushPreFlushCbs(nn),resetTracking()},_n=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn=!1)=>{const Cn=nn&&nn.children,Hn=nn?nn.shapeFlag:0,Bn=tn.children,{patchFlag:zn,shapeFlag:I}=tn;if(zn>0){if(zn&128){Xn(Cn,Bn,rn,yn,kn,Sn,Nn,$n,Dn);return}else if(zn&256){Gn(Cn,Bn,rn,yn,kn,Sn,Nn,$n,Dn);return}}I&8?(Hn&16&&ne(Cn,kn,Sn),Bn!==Cn&&B(rn,Bn)):Hn&16?I&16?Xn(Cn,Bn,rn,yn,kn,Sn,Nn,$n,Dn):ne(Cn,kn,Sn,!0):(Hn&8&&B(rn,""),I&16&&sn(Bn,rn,yn,kn,Sn,Nn,$n,Dn))},Gn=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn)=>{nn=nn||EMPTY_ARR,tn=tn||EMPTY_ARR;const Cn=nn.length,Hn=tn.length,Bn=Math.min(Cn,Hn);let zn;for(zn=0;zn<Bn;zn++){const I=tn[zn]=Dn?cloneIfMounted(tn[zn]):normalizeVNode(tn[zn]);en(nn[zn],I,rn,null,kn,Sn,Nn,$n,Dn)}Cn>Hn?ne(nn,kn,Sn,!0,!1,Bn):sn(tn,rn,yn,kn,Sn,Nn,$n,Dn,Bn)},Xn=(nn,tn,rn,yn,kn,Sn,Nn,$n,Dn)=>{let Cn=0;const Hn=tn.length;let Bn=nn.length-1,zn=Hn-1;for(;Cn<=Bn&&Cn<=zn;){const I=nn[Cn],ln=tn[Cn]=Dn?cloneIfMounted(tn[Cn]):normalizeVNode(tn[Cn]);if(isSameVNodeType(I,ln))en(I,ln,rn,null,kn,Sn,Nn,$n,Dn);else break;Cn++}for(;Cn<=Bn&&Cn<=zn;){const I=nn[Bn],ln=tn[zn]=Dn?cloneIfMounted(tn[zn]):normalizeVNode(tn[zn]);if(isSameVNodeType(I,ln))en(I,ln,rn,null,kn,Sn,Nn,$n,Dn);else break;Bn--,zn--}if(Cn>Bn){if(Cn<=zn){const I=zn+1,ln=I<Hn?tn[I].el:yn;for(;Cn<=zn;)en(null,tn[Cn]=Dn?cloneIfMounted(tn[Cn]):normalizeVNode(tn[Cn]),rn,ln,kn,Sn,Nn,$n,Dn),Cn++}}else if(Cn>zn)for(;Cn<=Bn;)Yn(nn[Cn],kn,Sn,!0),Cn++;else{const I=Cn,ln=Cn,G=new Map;for(Cn=ln;Cn<=zn;Cn++){const wn=tn[Cn]=Dn?cloneIfMounted(tn[Cn]):normalizeVNode(tn[Cn]);wn.key!=null&&G.set(wn.key,Cn)}let D,H=0;const z=zn-ln+1;let K=!1,Z=0;const on=new Array(z);for(Cn=0;Cn<z;Cn++)on[Cn]=0;for(Cn=I;Cn<=Bn;Cn++){const wn=nn[Cn];if(H>=z){Yn(wn,kn,Sn,!0);continue}let hn;if(wn.key!=null)hn=G.get(wn.key);else for(D=ln;D<=zn;D++)if(on[D-ln]===0&&isSameVNodeType(wn,tn[D])){hn=D;break}hn===void 0?Yn(wn,kn,Sn,!0):(on[hn-ln]=Cn+1,hn>=Z?Z=hn:K=!0,en(wn,tn[hn],rn,null,kn,Sn,Nn,$n,Dn),H++)}const bn=K?getSequence(on):EMPTY_ARR;for(D=bn.length-1,Cn=z-1;Cn>=0;Cn--){const wn=ln+Cn,hn=tn[wn],Mn=tn[wn+1],jn=wn+1<Hn?Mn.el||resolveAsyncComponentPlaceholder(Mn):yn;on[Cn]===0?en(null,hn,rn,jn,kn,Sn,Nn,$n,Dn):K&&(D<0||Cn!==bn[D]?Un(hn,rn,jn,2):D--)}}},Un=(nn,tn,rn,yn,kn=null)=>{const{el:Sn,type:Nn,transition:$n,children:Dn,shapeFlag:Cn}=nn;if(Cn&6){Un(nn.component.subTree,tn,rn,yn);return}if(Cn&128){nn.suspense.move(tn,rn,yn);return}if(Cn&64){Nn.move(nn,tn,rn,Fn);return}if(Nn===Fragment){_(Sn,tn,rn);for(let Bn=0;Bn<Dn.length;Bn++)Un(Dn[Bn],tn,rn,yn);_(nn.anchor,tn,rn);return}if(Nn===Static){un(nn,tn,rn);return}if(yn!==2&&Cn&1&&$n)if(yn===0)$n.beforeEnter(Sn),_(Sn,tn,rn),queuePostRenderEffect(()=>$n.enter(Sn),kn);else{const{leave:Bn,delayLeave:zn,afterLeave:I}=$n,ln=()=>{nn.ctx.isUnmounted?w(Sn):_(Sn,tn,rn)},G=()=>{Sn._isLeaving&&Sn[leaveCbKey](!0),Bn(Sn,()=>{ln(),I&&I()})};zn?zn(Sn,ln,G):G()}else _(Sn,tn,rn)},Yn=(nn,tn,rn,yn=!1,kn=!1)=>{const{type:Sn,props:Nn,ref:$n,children:Dn,dynamicChildren:Cn,shapeFlag:Hn,patchFlag:Bn,dirs:zn,cacheIndex:I}=nn;if(Bn===-2&&(kn=!1),$n!=null&&(pauseTracking(),setRef($n,null,rn,nn,!0),resetTracking()),I!=null&&(tn.renderCache[I]=void 0),Hn&256){tn.ctx.deactivate(nn);return}const ln=Hn&1&&zn,G=!isAsyncWrapper(nn);let D;if(G&&(D=Nn&&Nn.onVnodeBeforeUnmount)&&invokeVNodeHook(D,tn,nn),Hn&6)Kn(nn.component,rn,yn);else{if(Hn&128){nn.suspense.unmount(rn,yn);return}ln&&invokeDirectiveHook(nn,null,tn,"beforeUnmount"),Hn&64?nn.type.remove(nn,tn,rn,Fn,yn):Cn&&!Cn.hasOnce&&(Sn!==Fragment||Bn>0&&Bn&64)?ne(Cn,tn,rn,!1,!0):(Sn===Fragment&&Bn&384||!kn&&Hn&16)&&ne(Dn,tn,rn),yn&&Zn(nn)}(G&&(D=Nn&&Nn.onVnodeUnmounted)||ln)&&queuePostRenderEffect(()=>{D&&invokeVNodeHook(D,tn,nn),ln&&invokeDirectiveHook(nn,null,tn,"unmounted")},rn)},Zn=nn=>{const{type:tn,el:rn,anchor:yn,transition:kn}=nn;if(tn===Fragment){te(rn,yn);return}if(tn===Static){mn(nn);return}const Sn=()=>{w(rn),kn&&!kn.persisted&&kn.afterLeave&&kn.afterLeave()};if(nn.shapeFlag&1&&kn&&!kn.persisted){const{leave:Nn,delayLeave:$n}=kn,Dn=()=>Nn(rn,Sn);$n?$n(nn.el,Sn,Dn):Dn()}else Sn()},te=(nn,tn)=>{let rn;for(;nn!==tn;)rn=J(nn),w(nn),nn=rn;w(tn)},Kn=(nn,tn,rn)=>{const{bum:yn,scope:kn,job:Sn,subTree:Nn,um:$n,m:Dn,a:Cn}=nn;invalidateMount(Dn),invalidateMount(Cn),yn&&invokeArrayFns(yn),kn.stop(),Sn&&(Sn.flags|=8,Yn(Nn,nn,tn,rn)),$n&&queuePostRenderEffect($n,tn),queuePostRenderEffect(()=>{nn.isUnmounted=!0},tn)},ne=(nn,tn,rn,yn=!1,kn=!1,Sn=0)=>{for(let Nn=Sn;Nn<nn.length;Nn++)Yn(nn[Nn],tn,rn,yn,kn)},vn=nn=>{if(nn.shapeFlag&6)return vn(nn.component.subTree);if(nn.shapeFlag&128)return nn.suspense.next();const tn=J(nn.anchor||nn.el),rn=tn&&tn[TeleportEndKey];return rn?J(rn):tn};let In=!1;const Vn=(nn,tn,rn)=>{let yn;nn==null?tn._vnode&&(Yn(tn._vnode,null,null,!0),yn=tn._vnode.component):en(tn._vnode||null,nn,tn,null,null,null,rn),tn._vnode=nn,In||(In=!0,flushPreFlushCbs(yn),flushPostFlushCbs(),In=!1)},Fn={p:en,um:Yn,m:Un,r:Zn,mt:En,mc:sn,pc:_n,pbc:Tn,n:vn,o:e};return{render:Vn,hydrate:void 0,createApp:createAppAPI(Vn)}}function resolveChildrenNamespace({type:e,props:a},f){return f==="svg"&&e==="foreignObject"||f==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:f}function toggleRecurse({effect:e,job:a},f){f?(e.flags|=32,a.flags|=4):(e.flags&=-33,a.flags&=-5)}function needTransition(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function traverseStaticChildren(e,a,f=!1){const _=e.children,w=a.children;if(isArray$1(_)&&isArray$1(w))for(let x=0;x<_.length;x++){const E=_[x];let P=w[x];P.shapeFlag&1&&!P.dynamicChildren&&((P.patchFlag<=0||P.patchFlag===32)&&(P=w[x]=cloneIfMounted(w[x]),P.el=E.el),!f&&P.patchFlag!==-2&&traverseStaticChildren(E,P)),P.type===Text&&(P.patchFlag!==-1?P.el=E.el:P.__elIndex=x+(e.type===Fragment?1:0)),P.type===Comment$1&&!P.el&&(P.el=E.el)}}function getSequence(e){const a=e.slice(),f=[0];let _,w,x,E,P;const C=e.length;for(_=0;_<C;_++){const M=e[_];if(M!==0){if(w=f[f.length-1],e[w]<M){a[_]=w,f.push(_);continue}for(x=0,E=f.length-1;x<E;)P=x+E>>1,e[f[P]]<M?x=P+1:E=P;M<e[f[x]]&&(x>0&&(a[_]=f[x-1]),f[x]=_)}}for(x=f.length,E=f[x-1];x-- >0;)f[x]=E,E=a[E];return f}function locateNonHydratedAsyncRoot(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:locateNonHydratedAsyncRoot(a)}function invalidateMount(e){if(e)for(let a=0;a<e.length;a++)e[a].flags|=8}function resolveAsyncComponentPlaceholder(e){if(e.placeholder)return e.placeholder;const a=e.component;return a?resolveAsyncComponentPlaceholder(a.subTree):null}const isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,a){a&&a.pendingBranch?isArray$1(e)?a.effects.push(...e):a.effects.push(e):queuePostFlushCb(e)}const Fragment=Symbol.for("v-fgt"),Text=Symbol.for("v-txt"),Comment$1=Symbol.for("v-cmt"),Static=Symbol.for("v-stc"),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e,a=!1){isBlockTreeEnabled+=e,e<0&&currentBlock&&a&&(currentBlock.hasOnce=!0)}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,a,f,_,w,x){return setupBlock(createBaseVNode(e,a,f,_,w,x,!0))}function createBlock(e,a,f,_,w){return setupBlock(createVNode(e,a,f,_,w,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,a){return e.type===a.type&&e.key===a.key}const normalizeKey=({key:e})=>e??null,normalizeRef=({ref:e,ref_key:a,ref_for:f})=>(typeof e=="number"&&(e=""+e),e!=null?isString(e)||isRef(e)||isFunction(e)?{i:currentRenderingInstance,r:e,k:a,f:!!f}:e:null);function createBaseVNode(e,a=null,f=null,_=0,w=null,x=e===Fragment?0:1,E=!1,P=!1){const C={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&normalizeKey(a),ref:a&&normalizeRef(a),scopeId:currentScopeId,slotScopeIds:null,children:f,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:x,patchFlag:_,dynamicProps:w,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return P?(normalizeChildren(C,f),x&128&&e.normalize(C)):f&&(C.shapeFlag|=isString(f)?8:16),isBlockTreeEnabled>0&&!E&&currentBlock&&(C.patchFlag>0||x&6)&&C.patchFlag!==32&&currentBlock.push(C),C}const createVNode=_createVNode;function _createVNode(e,a=null,f=null,_=0,w=null,x=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment$1),isVNode(e)){const P=cloneVNode(e,a,!0);return f&&normalizeChildren(P,f),isBlockTreeEnabled>0&&!x&&currentBlock&&(P.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=P:currentBlock.push(P)),P.patchFlag=-2,P}if(isClassComponent(e)&&(e=e.__vccOpts),a){a=guardReactiveProps(a);let{class:P,style:C}=a;P&&!isString(P)&&(a.class=normalizeClass(P)),isObject$3(C)&&(isProxy(C)&&!isArray$1(C)&&(C=extend$3({},C)),a.style=normalizeStyle(C))}const E=isString(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject$3(e)?4:isFunction(e)?2:0;return createBaseVNode(e,a,f,_,w,E,x,!0)}function guardReactiveProps(e){return e?isProxy(e)||isInternalObject(e)?extend$3({},e):e:null}function cloneVNode(e,a,f=!1,_=!1){const{props:w,ref:x,patchFlag:E,children:P,transition:C}=e,M=a?mergeProps(w||{},a):w,B={__v_isVNode:!0,__v_skip:!0,type:e.type,props:M,key:M&&normalizeKey(M),ref:a&&a.ref?f&&x?isArray$1(x)?x.concat(normalizeRef(a)):[x,normalizeRef(a)]:normalizeRef(a):x,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:P,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Fragment?E===-1?16:E|16:E,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:C,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return C&&_&&setTransitionHooks(B,C.clone(B)),B}function createTextVNode(e=" ",a=0){return createVNode(Text,null,e,a)}function createStaticVNode(e,a){const f=createVNode(Static,null,e);return f.staticCount=a,f}function createCommentVNode(e="",a=!1){return a?(openBlock(),createBlock(Comment$1,null,e)):createVNode(Comment$1,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment$1):isArray$1(e)?createVNode(Fragment,null,e.slice()):isVNode(e)?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cloneVNode(e)}function normalizeChildren(e,a){let f=0;const{shapeFlag:_}=e;if(a==null)a=null;else if(isArray$1(a))f=16;else if(typeof a=="object")if(_&65){const w=a.default;w&&(w._c&&(w._d=!1),normalizeChildren(e,w()),w._c&&(w._d=!0));return}else{f=32;const w=a._;!w&&!isInternalObject(a)?a._ctx=currentRenderingInstance:w===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else isFunction(a)?(a={default:a,_ctx:currentRenderingInstance},f=32):(a=String(a),_&64?(f=16,a=[createTextVNode(a)]):f=8);e.children=a,e.shapeFlag|=f}function mergeProps(...e){const a={};for(let f=0;f<e.length;f++){const _=e[f];for(const w in _)if(w==="class")a.class!==_.class&&(a.class=normalizeClass([a.class,_.class]));else if(w==="style")a.style=normalizeStyle([a.style,_.style]);else if(isOn(w)){const x=a[w],E=_[w];E&&x!==E&&!(isArray$1(x)&&x.includes(E))&&(a[w]=x?[].concat(x,E):E)}else w!==""&&(a[w]=_[w])}return a}function invokeVNodeHook(e,a,f,_=null){callWithAsyncErrorHandling(e,a,7,[f,_])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(e,a,f){const _=e.type,w=(a?a.appContext:e.appContext)||emptyAppContext,x={uid:uid++,vnode:e,type:_,parent:a,appContext:w,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(w.provides),ids:a?a.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(_,w),emitsOptions:normalizeEmitsOptions(_,w),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:_.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:f,suspenseId:f?f.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return x.ctx={_:x},x.root=a?a.root:x,x.emit=emit.bind(null,x),e.ce&&e.ce(x),x}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance;let internalSetCurrentInstance,setInSSRSetupState;{const e=getGlobalThis(),a=(f,_)=>{let w;return(w=e[f])||(w=e[f]=[]),w.push(_),x=>{w.length>1?w.forEach(E=>E(x)):w[0](x)}};internalSetCurrentInstance=a("__VUE_INSTANCE_SETTERS__",f=>currentInstance=f),setInSSRSetupState=a("__VUE_SSR_SETTERS__",f=>isInSSRComponentSetup=f)}const setCurrentInstance=e=>{const a=currentInstance;return internalSetCurrentInstance(e),e.scope.on(),()=>{e.scope.off(),internalSetCurrentInstance(a)}},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),internalSetCurrentInstance(null)};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,a=!1,f=!1){a&&setInSSRSetupState(a);const{props:_,children:w}=e.vnode,x=isStatefulComponent(e);initProps(e,_,x,a),initSlots(e,w,f||a);const E=x?setupStatefulComponent(e,a):void 0;return a&&setInSSRSetupState(!1),E}function setupStatefulComponent(e,a){const f=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,PublicInstanceProxyHandlers);const{setup:_}=f;if(_){pauseTracking();const w=e.setupContext=_.length>1?createSetupContext(e):null,x=setCurrentInstance(e),E=callWithErrorHandling(_,e,0,[e.props,w]),P=isPromise(E);if(resetTracking(),x(),(P||e.sp)&&!isAsyncWrapper(e)&&markAsyncBoundary(e),P){if(E.then(unsetCurrentInstance,unsetCurrentInstance),a)return E.then(C=>{handleSetupResult(e,C)}).catch(C=>{handleError(C,e,0)});e.asyncDep=E}else handleSetupResult(e,E)}else finishComponentSetup(e)}function handleSetupResult(e,a,f){isFunction(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:isObject$3(a)&&(e.setupState=proxyRefs(a)),finishComponentSetup(e)}function finishComponentSetup(e,a,f){const _=e.type;e.render||(e.render=_.render||NOOP);{const w=setCurrentInstance(e);pauseTracking();try{applyOptions(e)}finally{resetTracking(),w()}}}const attrsProxyHandlers={get(e,a){return track(e,"get",""),e[a]}};function createSetupContext(e){const a=f=>{e.exposed=f||{}};return{attrs:new Proxy(e.attrs,attrsProxyHandlers),slots:e.slots,emit:e.emit,expose:a}}function getComponentPublicInstance(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(a,f){if(f in a)return a[f];if(f in publicPropertiesMap)return publicPropertiesMap[f](e)},has(a,f){return f in a||f in publicPropertiesMap}})):e.proxy}const classifyRE=/(?:^|[-_])\w/g,classify=e=>e.replace(classifyRE,a=>a.toUpperCase()).replace(/[-_]/g,"");function getComponentName(e,a=!0){return isFunction(e)?e.displayName||e.name:e.name||a&&e.__name}function formatComponentName(e,a,f=!1){let _=getComponentName(a);if(!_&&a.__file){const w=a.__file.match(/([^/\\]+)\.\w+$/);w&&(_=w[1])}if(!_&&e){const w=x=>{for(const E in x)if(x[E]===a)return E};_=w(e.components)||e.parent&&w(e.parent.type.components)||w(e.appContext.components)}return _?classify(_):f?"App":"Anonymous"}function isClassComponent(e){return isFunction(e)&&"__vccOpts"in e}const computed=(e,a)=>computed$1(e,a,isInSSRComponentSetup);function h(e,a,f){try{setBlockTracking(-1);const _=arguments.length;return _===2?isObject$3(a)&&!isArray$1(a)?isVNode(a)?createVNode(e,null,[a]):createVNode(e,a):createVNode(e,null,a):(_>3?f=Array.prototype.slice.call(arguments,2):_===3&&isVNode(f)&&(f=[f]),createVNode(e,a,f))}finally{setBlockTracking(1)}}const version="3.5.26";let policy;const tt=typeof window<"u"&&window.trustedTypes;if(tt)try{policy=tt.createPolicy("vue",{createHTML:e=>e})}catch{}const unsafeToTrustedHTML=policy?e=>policy.createHTML(e):e=>e,svgNS="http://www.w3.org/2000/svg",mathmlNS="http://www.w3.org/1998/Math/MathML",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,a,f)=>{a.insertBefore(e,f||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,f,_)=>{const w=a==="svg"?doc.createElementNS(svgNS,e):a==="mathml"?doc.createElementNS(mathmlNS,e):f?doc.createElement(e,{is:f}):doc.createElement(e);return e==="select"&&_&&_.multiple!=null&&w.setAttribute("multiple",_.multiple),w},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,f,_,w,x){const E=f?f.previousSibling:a.lastChild;if(w&&(w===x||w.nextSibling))for(;a.insertBefore(w.cloneNode(!0),f),!(w===x||!(w=w.nextSibling)););else{templateContainer.innerHTML=unsafeToTrustedHTML(_==="svg"?`<svg>${e}</svg>`:_==="mathml"?`<math>${e}</math>`:e);const P=templateContainer.content;if(_==="svg"||_==="mathml"){const C=P.firstChild;for(;C.firstChild;)P.appendChild(C.firstChild);P.removeChild(C)}a.insertBefore(P,f)}return[E?E.nextSibling:a.firstChild,f?f.previousSibling:a.lastChild]}},TRANSITION="transition",ANIMATION="animation",vtcKey=Symbol("_vtc"),DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TransitionPropsValidators=extend$3({},BaseTransitionPropsValidators,DOMTransitionPropsValidators),decorate$1=e=>(e.displayName="Transition",e.props=TransitionPropsValidators,e),Transition=decorate$1((e,{slots:a})=>h(BaseTransition,resolveTransitionProps(e),a)),callHook=(e,a=[])=>{isArray$1(e)?e.forEach(f=>f(...a)):e&&e(...a)},hasExplicitCallback=e=>e?isArray$1(e)?e.some(a=>a.length>1):e.length>1:!1;function resolveTransitionProps(e){const a={};for(const cn in e)cn in DOMTransitionPropsValidators||(a[cn]=e[cn]);if(e.css===!1)return a;const{name:f="v",type:_,duration:w,enterFromClass:x=`${f}-enter-from`,enterActiveClass:E=`${f}-enter-active`,enterToClass:P=`${f}-enter-to`,appearFromClass:C=x,appearActiveClass:M=E,appearToClass:B=P,leaveFromClass:q=`${f}-leave-from`,leaveActiveClass:J=`${f}-leave-active`,leaveToClass:Y=`${f}-leave-to`}=e,X=normalizeDuration(w),en=X&&X[0],dn=X&&X[1],{onBeforeEnter:pn,onEnter:an,onEnterCancelled:un,onLeave:mn,onLeaveCancelled:fn,onBeforeAppear:Pn=pn,onAppear:An=an,onAppearCancelled:sn=un}=a,xn=(cn,On,En,Ln)=>{cn._enterCancelled=Ln,removeTransitionClass(cn,On?B:P),removeTransitionClass(cn,On?M:E),En&&En()},Tn=(cn,On)=>{cn._isLeaving=!1,removeTransitionClass(cn,q),removeTransitionClass(cn,Y),removeTransitionClass(cn,J),On&&On()},gn=cn=>(On,En)=>{const Ln=cn?An:an,qn=()=>xn(On,cn,En);callHook(Ln,[On,qn]),nextFrame(()=>{removeTransitionClass(On,cn?C:x),addTransitionClass(On,cn?B:P),hasExplicitCallback(Ln)||whenTransitionEnds(On,_,en,qn)})};return extend$3(a,{onBeforeEnter(cn){callHook(pn,[cn]),addTransitionClass(cn,x),addTransitionClass(cn,E)},onBeforeAppear(cn){callHook(Pn,[cn]),addTransitionClass(cn,C),addTransitionClass(cn,M)},onEnter:gn(!1),onAppear:gn(!0),onLeave(cn,On){cn._isLeaving=!0;const En=()=>Tn(cn,On);addTransitionClass(cn,q),cn._enterCancelled?(addTransitionClass(cn,J),forceReflow(cn)):(forceReflow(cn),addTransitionClass(cn,J)),nextFrame(()=>{cn._isLeaving&&(removeTransitionClass(cn,q),addTransitionClass(cn,Y),hasExplicitCallback(mn)||whenTransitionEnds(cn,_,dn,En))}),callHook(mn,[cn,En])},onEnterCancelled(cn){xn(cn,!1,void 0,!0),callHook(un,[cn])},onAppearCancelled(cn){xn(cn,!0,void 0,!0),callHook(sn,[cn])},onLeaveCancelled(cn){Tn(cn),callHook(fn,[cn])}})}function normalizeDuration(e){if(e==null)return null;if(isObject$3(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const a=NumberOf(e);return[a,a]}}function NumberOf(e){return toNumber(e)}function addTransitionClass(e,a){a.split(/\s+/).forEach(f=>f&&e.classList.add(f)),(e[vtcKey]||(e[vtcKey]=new Set)).add(a)}function removeTransitionClass(e,a){a.split(/\s+/).forEach(_=>_&&e.classList.remove(_));const f=e[vtcKey];f&&(f.delete(a),f.size||(e[vtcKey]=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,a,f,_){const w=e._endId=++endId,x=()=>{w===e._endId&&_()};if(f!=null)return setTimeout(x,f);const{type:E,timeout:P,propCount:C}=getTransitionInfo(e,a);if(!E)return _();const M=E+"end";let B=0;const q=()=>{e.removeEventListener(M,J),x()},J=Y=>{Y.target===e&&++B>=C&&q()};setTimeout(()=>{B<C&&q()},P+1),e.addEventListener(M,J)}function getTransitionInfo(e,a){const f=window.getComputedStyle(e),_=X=>(f[X]||"").split(", "),w=_(`${TRANSITION}Delay`),x=_(`${TRANSITION}Duration`),E=getTimeout(w,x),P=_(`${ANIMATION}Delay`),C=_(`${ANIMATION}Duration`),M=getTimeout(P,C);let B=null,q=0,J=0;a===TRANSITION?E>0&&(B=TRANSITION,q=E,J=x.length):a===ANIMATION?M>0&&(B=ANIMATION,q=M,J=C.length):(q=Math.max(E,M),B=q>0?E>M?TRANSITION:ANIMATION:null,J=B?B===TRANSITION?x.length:C.length:0);const Y=B===TRANSITION&&/\b(?:transform|all)(?:,|$)/.test(_(`${TRANSITION}Property`).toString());return{type:B,timeout:q,propCount:J,hasTransform:Y}}function getTimeout(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((f,_)=>toMs(f)+toMs(e[_])))}function toMs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(e){return(e?e.ownerDocument:document).body.offsetHeight}function patchClass(e,a,f){const _=e[vtcKey];_&&(a=(a?[a,..._]:[..._]).join(" ")),a==null?e.removeAttribute("class"):f?e.setAttribute("class",a):e.className=a}const vShowOriginalDisplay=Symbol("_vod"),vShowHidden=Symbol("_vsh"),CSS_VAR_TEXT=Symbol(""),displayRE=/(?:^|;)\s*display\s*:/;function patchStyle(e,a,f){const _=e.style,w=isString(f);let x=!1;if(f&&!w){if(a)if(isString(a))for(const E of a.split(";")){const P=E.slice(0,E.indexOf(":")).trim();f[P]==null&&setStyle(_,P,"")}else for(const E in a)f[E]==null&&setStyle(_,E,"");for(const E in f)E==="display"&&(x=!0),setStyle(_,E,f[E])}else if(w){if(a!==f){const E=_[CSS_VAR_TEXT];E&&(f+=";"+E),_.cssText=f,x=displayRE.test(f)}}else a&&e.removeAttribute("style");vShowOriginalDisplay in e&&(e[vShowOriginalDisplay]=x?_.display:"",e[vShowHidden]&&(_.display="none"))}const importantRE=/\s*!important$/;function setStyle(e,a,f){if(isArray$1(f))f.forEach(_=>setStyle(e,a,_));else if(f==null&&(f=""),a.startsWith("--"))e.setProperty(a,f);else{const _=autoPrefix(e,a);importantRE.test(f)?e.setProperty(hyphenate(_),f.replace(importantRE,""),"important"):e[_]=f}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,a){const f=prefixCache[a];if(f)return f;let _=camelize(a);if(_!=="filter"&&_ in e)return prefixCache[a]=_;_=capitalize(_);for(let w=0;w<prefixes.length;w++){const x=prefixes[w]+_;if(x in e)return prefixCache[a]=x}return a}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,a,f,_,w,x=isSpecialBooleanAttr(a)){_&&a.startsWith("xlink:")?f==null?e.removeAttributeNS(xlinkNS,a.slice(6,a.length)):e.setAttributeNS(xlinkNS,a,f):f==null||x&&!includeBooleanAttr(f)?e.removeAttribute(a):e.setAttribute(a,x?"":isSymbol(f)?String(f):f)}function patchDOMProp(e,a,f,_,w){if(a==="innerHTML"||a==="textContent"){f!=null&&(e[a]=a==="innerHTML"?unsafeToTrustedHTML(f):f);return}const x=e.tagName;if(a==="value"&&x!=="PROGRESS"&&!x.includes("-")){const P=x==="OPTION"?e.getAttribute("value")||"":e.value,C=f==null?e.type==="checkbox"?"on":"":String(f);(P!==C||!("_value"in e))&&(e.value=C),f==null&&e.removeAttribute(a),e._value=f;return}let E=!1;if(f===""||f==null){const P=typeof e[a];P==="boolean"?f=includeBooleanAttr(f):f==null&&P==="string"?(f="",E=!0):P==="number"&&(f=0,E=!0)}try{e[a]=f}catch{}E&&e.removeAttribute(w||a)}function addEventListener(e,a,f,_){e.addEventListener(a,f,_)}function removeEventListener(e,a,f,_){e.removeEventListener(a,f,_)}const veiKey=Symbol("_vei");function patchEvent(e,a,f,_,w=null){const x=e[veiKey]||(e[veiKey]={}),E=x[a];if(_&&E)E.value=_;else{const[P,C]=parseName(a);if(_){const M=x[a]=createInvoker(_,w);addEventListener(e,P,M,C)}else E&&(removeEventListener(e,P,E,C),x[a]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let a;if(optionsModifierRE.test(e)){a={};let _;for(;_=e.match(optionsModifierRE);)e=e.slice(0,e.length-_[0].length),a[_[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hyphenate(e.slice(2)),a]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(e,a){const f=_=>{if(!_._vts)_._vts=Date.now();else if(_._vts<=f.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(_,f.value),a,5,[_])};return f.value=e,f.attached=getNow(),f}function patchStopImmediatePropagation(e,a){if(isArray$1(a)){const f=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{f.call(e),e._stopped=!0},a.map(_=>w=>!w._stopped&&_&&_(w))}else return a}const isNativeOn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,patchProp=(e,a,f,_,w,x)=>{const E=w==="svg";a==="class"?patchClass(e,_,E):a==="style"?patchStyle(e,f,_):isOn(a)?isModelListener(a)||patchEvent(e,a,f,_,x):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):shouldSetAsProp(e,a,_,E))?(patchDOMProp(e,a,_),!e.tagName.includes("-")&&(a==="value"||a==="checked"||a==="selected")&&patchAttr(e,a,_,E,x,a!=="value")):e._isVueCE&&(/[A-Z]/.test(a)||!isString(_))?patchDOMProp(e,camelize(a),_,x,a):(a==="true-value"?e._trueValue=_:a==="false-value"&&(e._falseValue=_),patchAttr(e,a,_,E))};function shouldSetAsProp(e,a,f,_){if(_)return!!(a==="innerHTML"||a==="textContent"||a in e&&isNativeOn(a)&&isFunction(f));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="autocorrect"||a==="sandbox"&&e.tagName==="IFRAME"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const w=e.tagName;if(w==="IMG"||w==="VIDEO"||w==="CANVAS"||w==="SOURCE")return!1}return isNativeOn(a)&&isString(f)?!1:a in e}const getModelAssigner=e=>{const a=e.props["onUpdate:modelValue"]||!1;return isArray$1(a)?f=>invokeArrayFns(a,f):a};function onCompositionStart(e){e.target.composing=!0}function onCompositionEnd(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const assignKey=Symbol("_assign");function castValue(e,a,f){return a&&(e=e.trim()),f&&(e=looseToNumber(e)),e}const vModelText={created(e,{modifiers:{lazy:a,trim:f,number:_}},w){e[assignKey]=getModelAssigner(w);const x=_||w.props&&w.props.type==="number";addEventListener(e,a?"change":"input",E=>{E.target.composing||e[assignKey](castValue(e.value,f,x))}),(f||x)&&addEventListener(e,"change",()=>{e.value=castValue(e.value,f,x)}),a||(addEventListener(e,"compositionstart",onCompositionStart),addEventListener(e,"compositionend",onCompositionEnd),addEventListener(e,"change",onCompositionEnd))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,oldValue:f,modifiers:{lazy:_,trim:w,number:x}},E){if(e[assignKey]=getModelAssigner(E),e.composing)return;const P=(x||e.type==="number")&&!/^0\d/.test(e.value)?looseToNumber(e.value):e.value,C=a??"";P!==C&&(document.activeElement===e&&e.type!=="range"&&(_&&a===f||w&&e.value.trim()===C)||(e.value=C))}},systemModifiers=["ctrl","shift","alt","meta"],modifierGuards={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>systemModifiers.some(f=>e[`${f}Key`]&&!a.includes(f))},withModifiers=(e,a)=>{const f=e._withMods||(e._withMods={}),_=a.join(".");return f[_]||(f[_]=((w,...x)=>{for(let E=0;E<a.length;E++){const P=modifierGuards[a[E]];if(P&&P(w,a))return}return e(w,...x)}))},rendererOptions=extend$3({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=((...e)=>{const a=ensureRenderer().createApp(...e),{mount:f}=a;return a.mount=_=>{const w=normalizeContainer(_);if(!w)return;const x=a._component;!isFunction(x)&&!x.render&&!x.template&&(x.template=w.innerHTML),w.nodeType===1&&(w.textContent="");const E=f(w,!1,resolveRootNamespace(w));return w instanceof Element&&(w.removeAttribute("v-cloak"),w.setAttribute("data-v-app","")),E},a});function resolveRootNamespace(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function normalizeContainer(e){return isString(e)?document.querySelector(e):e}let activePinia;const setActivePinia=e=>activePinia=e,piniaSymbol=Symbol();function isPlainObject(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var MutationType;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(MutationType||(MutationType={}));function createPinia(){const e=effectScope(!0),a=e.run(()=>ref({}));let f=[],_=[];const w=markRaw({install(x){setActivePinia(w),w._a=x,x.provide(piniaSymbol,w),x.config.globalProperties.$pinia=w,_.forEach(E=>f.push(E)),_=[]},use(x){return this._a?f.push(x):_.push(x),this},_p:f,_a:null,_e:e,_s:new Map,state:a});return w}const noop$1=()=>{};function addSubscription(e,a,f,_=noop$1){e.add(a);const w=()=>{e.delete(a)&&_()};return!f&&getCurrentScope()&&onScopeDispose(w),w}function triggerSubscriptions(e,...a){e.forEach(f=>{f(...a)})}const fallbackRunWithContext=e=>e(),ACTION_MARKER=Symbol(),ACTION_NAME=Symbol();function mergeReactiveObjects(e,a){e instanceof Map&&a instanceof Map?a.forEach((f,_)=>e.set(_,f)):e instanceof Set&&a instanceof Set&&a.forEach(e.add,e);for(const f in a){if(!a.hasOwnProperty(f))continue;const _=a[f],w=e[f];isPlainObject(w)&&isPlainObject(_)&&e.hasOwnProperty(f)&&!isRef(_)&&!isReactive(_)?e[f]=mergeReactiveObjects(w,_):e[f]=_}return e}const skipHydrateSymbol=Symbol();function shouldHydrate(e){return!isPlainObject(e)||!Object.prototype.hasOwnProperty.call(e,skipHydrateSymbol)}const{assign:assign$1}=Object;function isComputed(e){return!!(isRef(e)&&e.effect)}function createOptionsStore(e,a,f,_){const{state:w,actions:x,getters:E}=a,P=f.state.value[e];let C;function M(){P||(f.state.value[e]=w?w():{});const B=toRefs(f.state.value[e]);return assign$1(B,x,Object.keys(E||{}).reduce((q,J)=>(q[J]=markRaw(computed(()=>{setActivePinia(f);const Y=f._s.get(e);return E[J].call(Y,Y)})),q),{}))}return C=createSetupStore(e,M,a,f,_,!0),C}function createSetupStore(e,a,f={},_,w,x){let E;const P=assign$1({actions:{}},f),C={deep:!0};let M,B,q=new Set,J=new Set,Y;const X=_.state.value[e];!x&&!X&&(_.state.value[e]={}),ref({});let en;function dn(sn){let xn;M=B=!1,typeof sn=="function"?(sn(_.state.value[e]),xn={type:MutationType.patchFunction,storeId:e,events:Y}):(mergeReactiveObjects(_.state.value[e],sn),xn={type:MutationType.patchObject,payload:sn,storeId:e,events:Y});const Tn=en=Symbol();nextTick$1().then(()=>{en===Tn&&(M=!0)}),B=!0,triggerSubscriptions(q,xn,_.state.value[e])}const pn=x?function(){const{state:xn}=f,Tn=xn?xn():{};this.$patch(gn=>{assign$1(gn,Tn)})}:noop$1;function an(){E.stop(),q.clear(),J.clear(),_._s.delete(e)}const un=(sn,xn="")=>{if(ACTION_MARKER in sn)return sn[ACTION_NAME]=xn,sn;const Tn=function(){setActivePinia(_);const gn=Array.from(arguments),cn=new Set,On=new Set;function En(Rn){cn.add(Rn)}function Ln(Rn){On.add(Rn)}triggerSubscriptions(J,{args:gn,name:Tn[ACTION_NAME],store:fn,after:En,onError:Ln});let qn;try{qn=sn.apply(this&&this.$id===e?this:fn,gn)}catch(Rn){throw triggerSubscriptions(On,Rn),Rn}return qn instanceof Promise?qn.then(Rn=>(triggerSubscriptions(cn,Rn),Rn)).catch(Rn=>(triggerSubscriptions(On,Rn),Promise.reject(Rn))):(triggerSubscriptions(cn,qn),qn)};return Tn[ACTION_MARKER]=!0,Tn[ACTION_NAME]=xn,Tn},mn={_p:_,$id:e,$onAction:addSubscription.bind(null,J),$patch:dn,$reset:pn,$subscribe(sn,xn={}){const Tn=addSubscription(q,sn,xn.detached,()=>gn()),gn=E.run(()=>watch(()=>_.state.value[e],cn=>{(xn.flush==="sync"?B:M)&&sn({storeId:e,type:MutationType.direct,events:Y},cn)},assign$1({},C,xn)));return Tn},$dispose:an},fn=reactive(mn);_._s.set(e,fn);const An=(_._a&&_._a.runWithContext||fallbackRunWithContext)(()=>_._e.run(()=>(E=effectScope()).run(()=>a({action:un}))));for(const sn in An){const xn=An[sn];if(isRef(xn)&&!isComputed(xn)||isReactive(xn))x||(X&&shouldHydrate(xn)&&(isRef(xn)?xn.value=X[sn]:mergeReactiveObjects(xn,X[sn])),_.state.value[e][sn]=xn);else if(typeof xn=="function"){const Tn=un(xn,sn);An[sn]=Tn,P.actions[sn]=xn}}return assign$1(fn,An),assign$1(toRaw(fn),An),Object.defineProperty(fn,"$state",{get:()=>_.state.value[e],set:sn=>{dn(xn=>{assign$1(xn,sn)})}}),_._p.forEach(sn=>{assign$1(fn,E.run(()=>sn({store:fn,app:_._a,pinia:_,options:P})))}),X&&x&&f.hydrate&&f.hydrate(fn.$state,X),M=!0,B=!0,fn}function defineStore(e,a,f){let _;const w=typeof a=="function";_=w?f:a;function x(E,P){const C=hasInjectionContext();return E=E||(C?inject(piniaSymbol,null):null),E&&setActivePinia(E),E=activePinia,E._s.has(e)||(w?createSetupStore(e,a,_,E):createOptionsStore(e,_,E)),E._s.get(e)}return x.$id=e,x}function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function getAugmentedNamespace(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var a=e.default;if(typeof a=="function"){var f=function _(){var w=!1;try{w=this instanceof _}catch{}return w?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};f.prototype=a.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(e).forEach(function(_){var w=Object.getOwnPropertyDescriptor(e,_);Object.defineProperty(f,_,w.get?w:{enumerable:!0,get:function(){return e[_]}})}),f}var buffer={},base64Js={},hasRequiredBase64Js;function requireBase64Js(){if(hasRequiredBase64Js)return base64Js;hasRequiredBase64Js=1,base64Js.byteLength=P,base64Js.toByteArray=M,base64Js.fromByteArray=J;for(var e=[],a=[],f=typeof Uint8Array<"u"?Uint8Array:Array,_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w=0,x=_.length;w<x;++w)e[w]=_[w],a[_.charCodeAt(w)]=w;a[45]=62,a[95]=63;function E(Y){var X=Y.length;if(X%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var en=Y.indexOf("=");en===-1&&(en=X);var dn=en===X?0:4-en%4;return[en,dn]}function P(Y){var X=E(Y),en=X[0],dn=X[1];return(en+dn)*3/4-dn}function C(Y,X,en){return(X+en)*3/4-en}function M(Y){var X,en=E(Y),dn=en[0],pn=en[1],an=new f(C(Y,dn,pn)),un=0,mn=pn>0?dn-4:dn,fn;for(fn=0;fn<mn;fn+=4)X=a[Y.charCodeAt(fn)]<<18|a[Y.charCodeAt(fn+1)]<<12|a[Y.charCodeAt(fn+2)]<<6|a[Y.charCodeAt(fn+3)],an[un++]=X>>16&255,an[un++]=X>>8&255,an[un++]=X&255;return pn===2&&(X=a[Y.charCodeAt(fn)]<<2|a[Y.charCodeAt(fn+1)]>>4,an[un++]=X&255),pn===1&&(X=a[Y.charCodeAt(fn)]<<10|a[Y.charCodeAt(fn+1)]<<4|a[Y.charCodeAt(fn+2)]>>2,an[un++]=X>>8&255,an[un++]=X&255),an}function B(Y){return e[Y>>18&63]+e[Y>>12&63]+e[Y>>6&63]+e[Y&63]}function q(Y,X,en){for(var dn,pn=[],an=X;an<en;an+=3)dn=(Y[an]<<16&16711680)+(Y[an+1]<<8&65280)+(Y[an+2]&255),pn.push(B(dn));return pn.join("")}function J(Y){for(var X,en=Y.length,dn=en%3,pn=[],an=16383,un=0,mn=en-dn;un<mn;un+=an)pn.push(q(Y,un,un+an>mn?mn:un+an));return dn===1?(X=Y[en-1],pn.push(e[X>>2]+e[X<<4&63]+"==")):dn===2&&(X=(Y[en-2]<<8)+Y[en-1],pn.push(e[X>>10]+e[X>>4&63]+e[X<<2&63]+"=")),pn.join("")}return base64Js}var ieee754={};var hasRequiredIeee754;function requireIeee754(){return hasRequiredIeee754||(hasRequiredIeee754=1,ieee754.read=function(e,a,f,_,w){var x,E,P=w*8-_-1,C=(1<<P)-1,M=C>>1,B=-7,q=f?w-1:0,J=f?-1:1,Y=e[a+q];for(q+=J,x=Y&(1<<-B)-1,Y>>=-B,B+=P;B>0;x=x*256+e[a+q],q+=J,B-=8);for(E=x&(1<<-B)-1,x>>=-B,B+=_;B>0;E=E*256+e[a+q],q+=J,B-=8);if(x===0)x=1-M;else{if(x===C)return E?NaN:(Y?-1:1)*(1/0);E=E+Math.pow(2,_),x=x-M}return(Y?-1:1)*E*Math.pow(2,x-_)},ieee754.write=function(e,a,f,_,w,x){var E,P,C,M=x*8-w-1,B=(1<<M)-1,q=B>>1,J=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,Y=_?0:x-1,X=_?1:-1,en=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(P=isNaN(a)?1:0,E=B):(E=Math.floor(Math.log(a)/Math.LN2),a*(C=Math.pow(2,-E))<1&&(E--,C*=2),E+q>=1?a+=J/C:a+=J*Math.pow(2,1-q),a*C>=2&&(E++,C/=2),E+q>=B?(P=0,E=B):E+q>=1?(P=(a*C-1)*Math.pow(2,w),E=E+q):(P=a*Math.pow(2,q-1)*Math.pow(2,w),E=0));w>=8;e[f+Y]=P&255,Y+=X,P/=256,w-=8);for(E=E<<w|P,M+=w;M>0;e[f+Y]=E&255,Y+=X,E/=256,M-=8);e[f+Y-X]|=en*128}),ieee754}var hasRequiredBuffer;function requireBuffer(){return hasRequiredBuffer||(hasRequiredBuffer=1,(function(e){const a=requireBase64Js(),f=requireIeee754(),_=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=P,e.SlowBuffer=an,e.INSPECT_MAX_BYTES=50;const w=2147483647;e.kMaxLength=w,P.TYPED_ARRAY_SUPPORT=x(),!P.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function x(){try{const G=new Uint8Array(1),D={foo:function(){return 42}};return Object.setPrototypeOf(D,Uint8Array.prototype),Object.setPrototypeOf(G,D),G.foo()===42}catch{return!1}}Object.defineProperty(P.prototype,"parent",{enumerable:!0,get:function(){if(P.isBuffer(this))return this.buffer}}),Object.defineProperty(P.prototype,"offset",{enumerable:!0,get:function(){if(P.isBuffer(this))return this.byteOffset}});function E(G){if(G>w)throw new RangeError('The value "'+G+'" is invalid for option "size"');const D=new Uint8Array(G);return Object.setPrototypeOf(D,P.prototype),D}function P(G,D,H){if(typeof G=="number"){if(typeof D=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return q(G)}return C(G,D,H)}P.poolSize=8192;function C(G,D,H){if(typeof G=="string")return J(G,D);if(ArrayBuffer.isView(G))return X(G);if(G==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof G);if(Hn(G,ArrayBuffer)||G&&Hn(G.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Hn(G,SharedArrayBuffer)||G&&Hn(G.buffer,SharedArrayBuffer)))return en(G,D,H);if(typeof G=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const z=G.valueOf&&G.valueOf();if(z!=null&&z!==G)return P.from(z,D,H);const K=dn(G);if(K)return K;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof G[Symbol.toPrimitive]=="function")return P.from(G[Symbol.toPrimitive]("string"),D,H);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof G)}P.from=function(G,D,H){return C(G,D,H)},Object.setPrototypeOf(P.prototype,Uint8Array.prototype),Object.setPrototypeOf(P,Uint8Array);function M(G){if(typeof G!="number")throw new TypeError('"size" argument must be of type number');if(G<0)throw new RangeError('The value "'+G+'" is invalid for option "size"')}function B(G,D,H){return M(G),G<=0?E(G):D!==void 0?typeof H=="string"?E(G).fill(D,H):E(G).fill(D):E(G)}P.alloc=function(G,D,H){return B(G,D,H)};function q(G){return M(G),E(G<0?0:pn(G)|0)}P.allocUnsafe=function(G){return q(G)},P.allocUnsafeSlow=function(G){return q(G)};function J(G,D){if((typeof D!="string"||D==="")&&(D="utf8"),!P.isEncoding(D))throw new TypeError("Unknown encoding: "+D);const H=un(G,D)|0;let z=E(H);const K=z.write(G,D);return K!==H&&(z=z.slice(0,K)),z}function Y(G){const D=G.length<0?0:pn(G.length)|0,H=E(D);for(let z=0;z<D;z+=1)H[z]=G[z]&255;return H}function X(G){if(Hn(G,Uint8Array)){const D=new Uint8Array(G);return en(D.buffer,D.byteOffset,D.byteLength)}return Y(G)}function en(G,D,H){if(D<0||G.byteLength<D)throw new RangeError('"offset" is outside of buffer bounds');if(G.byteLength<D+(H||0))throw new RangeError('"length" is outside of buffer bounds');let z;return D===void 0&&H===void 0?z=new Uint8Array(G):H===void 0?z=new Uint8Array(G,D):z=new Uint8Array(G,D,H),Object.setPrototypeOf(z,P.prototype),z}function dn(G){if(P.isBuffer(G)){const D=pn(G.length)|0,H=E(D);return H.length===0||G.copy(H,0,0,D),H}if(G.length!==void 0)return typeof G.length!="number"||Bn(G.length)?E(0):Y(G);if(G.type==="Buffer"&&Array.isArray(G.data))return Y(G.data)}function pn(G){if(G>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return G|0}function an(G){return+G!=G&&(G=0),P.alloc(+G)}P.isBuffer=function(D){return D!=null&&D._isBuffer===!0&&D!==P.prototype},P.compare=function(D,H){if(Hn(D,Uint8Array)&&(D=P.from(D,D.offset,D.byteLength)),Hn(H,Uint8Array)&&(H=P.from(H,H.offset,H.byteLength)),!P.isBuffer(D)||!P.isBuffer(H))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(D===H)return 0;let z=D.length,K=H.length;for(let Z=0,on=Math.min(z,K);Z<on;++Z)if(D[Z]!==H[Z]){z=D[Z],K=H[Z];break}return z<K?-1:K<z?1:0},P.isEncoding=function(D){switch(String(D).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},P.concat=function(D,H){if(!Array.isArray(D))throw new TypeError('"list" argument must be an Array of Buffers');if(D.length===0)return P.alloc(0);let z;if(H===void 0)for(H=0,z=0;z<D.length;++z)H+=D[z].length;const K=P.allocUnsafe(H);let Z=0;for(z=0;z<D.length;++z){let on=D[z];if(Hn(on,Uint8Array))Z+on.length>K.length?(P.isBuffer(on)||(on=P.from(on)),on.copy(K,Z)):Uint8Array.prototype.set.call(K,on,Z);else if(P.isBuffer(on))on.copy(K,Z);else throw new TypeError('"list" argument must be an Array of Buffers');Z+=on.length}return K};function un(G,D){if(P.isBuffer(G))return G.length;if(ArrayBuffer.isView(G)||Hn(G,ArrayBuffer))return G.byteLength;if(typeof G!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof G);const H=G.length,z=arguments.length>2&&arguments[2]===!0;if(!z&&H===0)return 0;let K=!1;for(;;)switch(D){case"ascii":case"latin1":case"binary":return H;case"utf8":case"utf-8":return Sn(G).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H*2;case"hex":return H>>>1;case"base64":return Dn(G).length;default:if(K)return z?-1:Sn(G).length;D=(""+D).toLowerCase(),K=!0}}P.byteLength=un;function mn(G,D,H){let z=!1;if((D===void 0||D<0)&&(D=0),D>this.length||((H===void 0||H>this.length)&&(H=this.length),H<=0)||(H>>>=0,D>>>=0,H<=D))return"";for(G||(G="utf8");;)switch(G){case"hex":return Gn(this,D,H);case"utf8":case"utf-8":return En(this,D,H);case"ascii":return Rn(this,D,H);case"latin1":case"binary":return _n(this,D,H);case"base64":return On(this,D,H);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xn(this,D,H);default:if(z)throw new TypeError("Unknown encoding: "+G);G=(G+"").toLowerCase(),z=!0}}P.prototype._isBuffer=!0;function fn(G,D,H){const z=G[D];G[D]=G[H],G[H]=z}P.prototype.swap16=function(){const D=this.length;if(D%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let H=0;H<D;H+=2)fn(this,H,H+1);return this},P.prototype.swap32=function(){const D=this.length;if(D%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let H=0;H<D;H+=4)fn(this,H,H+3),fn(this,H+1,H+2);return this},P.prototype.swap64=function(){const D=this.length;if(D%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let H=0;H<D;H+=8)fn(this,H,H+7),fn(this,H+1,H+6),fn(this,H+2,H+5),fn(this,H+3,H+4);return this},P.prototype.toString=function(){const D=this.length;return D===0?"":arguments.length===0?En(this,0,D):mn.apply(this,arguments)},P.prototype.toLocaleString=P.prototype.toString,P.prototype.equals=function(D){if(!P.isBuffer(D))throw new TypeError("Argument must be a Buffer");return this===D?!0:P.compare(this,D)===0},P.prototype.inspect=function(){let D="";const H=e.INSPECT_MAX_BYTES;return D=this.toString("hex",0,H).replace(/(.{2})/g,"$1 ").trim(),this.length>H&&(D+=" ... "),"<Buffer "+D+">"},_&&(P.prototype[_]=P.prototype.inspect),P.prototype.compare=function(D,H,z,K,Z){if(Hn(D,Uint8Array)&&(D=P.from(D,D.offset,D.byteLength)),!P.isBuffer(D))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof D);if(H===void 0&&(H=0),z===void 0&&(z=D?D.length:0),K===void 0&&(K=0),Z===void 0&&(Z=this.length),H<0||z>D.length||K<0||Z>this.length)throw new RangeError("out of range index");if(K>=Z&&H>=z)return 0;if(K>=Z)return-1;if(H>=z)return 1;if(H>>>=0,z>>>=0,K>>>=0,Z>>>=0,this===D)return 0;let on=Z-K,bn=z-H;const wn=Math.min(on,bn),hn=this.slice(K,Z),Mn=D.slice(H,z);for(let jn=0;jn<wn;++jn)if(hn[jn]!==Mn[jn]){on=hn[jn],bn=Mn[jn];break}return on<bn?-1:bn<on?1:0};function Pn(G,D,H,z,K){if(G.length===0)return-1;if(typeof H=="string"?(z=H,H=0):H>2147483647?H=2147483647:H<-2147483648&&(H=-2147483648),H=+H,Bn(H)&&(H=K?0:G.length-1),H<0&&(H=G.length+H),H>=G.length){if(K)return-1;H=G.length-1}else if(H<0)if(K)H=0;else return-1;if(typeof D=="string"&&(D=P.from(D,z)),P.isBuffer(D))return D.length===0?-1:An(G,D,H,z,K);if(typeof D=="number")return D=D&255,typeof Uint8Array.prototype.indexOf=="function"?K?Uint8Array.prototype.indexOf.call(G,D,H):Uint8Array.prototype.lastIndexOf.call(G,D,H):An(G,[D],H,z,K);throw new TypeError("val must be string, number or Buffer")}function An(G,D,H,z,K){let Z=1,on=G.length,bn=D.length;if(z!==void 0&&(z=String(z).toLowerCase(),z==="ucs2"||z==="ucs-2"||z==="utf16le"||z==="utf-16le")){if(G.length<2||D.length<2)return-1;Z=2,on/=2,bn/=2,H/=2}function wn(Mn,jn){return Z===1?Mn[jn]:Mn.readUInt16BE(jn*Z)}let hn;if(K){let Mn=-1;for(hn=H;hn<on;hn++)if(wn(G,hn)===wn(D,Mn===-1?0:hn-Mn)){if(Mn===-1&&(Mn=hn),hn-Mn+1===bn)return Mn*Z}else Mn!==-1&&(hn-=hn-Mn),Mn=-1}else for(H+bn>on&&(H=on-bn),hn=H;hn>=0;hn--){let Mn=!0;for(let jn=0;jn<bn;jn++)if(wn(G,hn+jn)!==wn(D,jn)){Mn=!1;break}if(Mn)return hn}return-1}P.prototype.includes=function(D,H,z){return this.indexOf(D,H,z)!==-1},P.prototype.indexOf=function(D,H,z){return Pn(this,D,H,z,!0)},P.prototype.lastIndexOf=function(D,H,z){return Pn(this,D,H,z,!1)};function sn(G,D,H,z){H=Number(H)||0;const K=G.length-H;z?(z=Number(z),z>K&&(z=K)):z=K;const Z=D.length;z>Z/2&&(z=Z/2);let on;for(on=0;on<z;++on){const bn=parseInt(D.substr(on*2,2),16);if(Bn(bn))return on;G[H+on]=bn}return on}function xn(G,D,H,z){return Cn(Sn(D,G.length-H),G,H,z)}function Tn(G,D,H,z){return Cn(Nn(D),G,H,z)}function gn(G,D,H,z){return Cn(Dn(D),G,H,z)}function cn(G,D,H,z){return Cn($n(D,G.length-H),G,H,z)}P.prototype.write=function(D,H,z,K){if(H===void 0)K="utf8",z=this.length,H=0;else if(z===void 0&&typeof H=="string")K=H,z=this.length,H=0;else if(isFinite(H))H=H>>>0,isFinite(z)?(z=z>>>0,K===void 0&&(K="utf8")):(K=z,z=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const Z=this.length-H;if((z===void 0||z>Z)&&(z=Z),D.length>0&&(z<0||H<0)||H>this.length)throw new RangeError("Attempt to write outside buffer bounds");K||(K="utf8");let on=!1;for(;;)switch(K){case"hex":return sn(this,D,H,z);case"utf8":case"utf-8":return xn(this,D,H,z);case"ascii":case"latin1":case"binary":return Tn(this,D,H,z);case"base64":return gn(this,D,H,z);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return cn(this,D,H,z);default:if(on)throw new TypeError("Unknown encoding: "+K);K=(""+K).toLowerCase(),on=!0}},P.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function On(G,D,H){return D===0&&H===G.length?a.fromByteArray(G):a.fromByteArray(G.slice(D,H))}function En(G,D,H){H=Math.min(G.length,H);const z=[];let K=D;for(;K<H;){const Z=G[K];let on=null,bn=Z>239?4:Z>223?3:Z>191?2:1;if(K+bn<=H){let wn,hn,Mn,jn;switch(bn){case 1:Z<128&&(on=Z);break;case 2:wn=G[K+1],(wn&192)===128&&(jn=(Z&31)<<6|wn&63,jn>127&&(on=jn));break;case 3:wn=G[K+1],hn=G[K+2],(wn&192)===128&&(hn&192)===128&&(jn=(Z&15)<<12|(wn&63)<<6|hn&63,jn>2047&&(jn<55296||jn>57343)&&(on=jn));break;case 4:wn=G[K+1],hn=G[K+2],Mn=G[K+3],(wn&192)===128&&(hn&192)===128&&(Mn&192)===128&&(jn=(Z&15)<<18|(wn&63)<<12|(hn&63)<<6|Mn&63,jn>65535&&jn<1114112&&(on=jn))}}on===null?(on=65533,bn=1):on>65535&&(on-=65536,z.push(on>>>10&1023|55296),on=56320|on&1023),z.push(on),K+=bn}return qn(z)}const Ln=4096;function qn(G){const D=G.length;if(D<=Ln)return String.fromCharCode.apply(String,G);let H="",z=0;for(;z<D;)H+=String.fromCharCode.apply(String,G.slice(z,z+=Ln));return H}function Rn(G,D,H){let z="";H=Math.min(G.length,H);for(let K=D;K<H;++K)z+=String.fromCharCode(G[K]&127);return z}function _n(G,D,H){let z="";H=Math.min(G.length,H);for(let K=D;K<H;++K)z+=String.fromCharCode(G[K]);return z}function Gn(G,D,H){const z=G.length;(!D||D<0)&&(D=0),(!H||H<0||H>z)&&(H=z);let K="";for(let Z=D;Z<H;++Z)K+=zn[G[Z]];return K}function Xn(G,D,H){const z=G.slice(D,H);let K="";for(let Z=0;Z<z.length-1;Z+=2)K+=String.fromCharCode(z[Z]+z[Z+1]*256);return K}P.prototype.slice=function(D,H){const z=this.length;D=~~D,H=H===void 0?z:~~H,D<0?(D+=z,D<0&&(D=0)):D>z&&(D=z),H<0?(H+=z,H<0&&(H=0)):H>z&&(H=z),H<D&&(H=D);const K=this.subarray(D,H);return Object.setPrototypeOf(K,P.prototype),K};function Un(G,D,H){if(G%1!==0||G<0)throw new RangeError("offset is not uint");if(G+D>H)throw new RangeError("Trying to access beyond buffer length")}P.prototype.readUintLE=P.prototype.readUIntLE=function(D,H,z){D=D>>>0,H=H>>>0,z||Un(D,H,this.length);let K=this[D],Z=1,on=0;for(;++on<H&&(Z*=256);)K+=this[D+on]*Z;return K},P.prototype.readUintBE=P.prototype.readUIntBE=function(D,H,z){D=D>>>0,H=H>>>0,z||Un(D,H,this.length);let K=this[D+--H],Z=1;for(;H>0&&(Z*=256);)K+=this[D+--H]*Z;return K},P.prototype.readUint8=P.prototype.readUInt8=function(D,H){return D=D>>>0,H||Un(D,1,this.length),this[D]},P.prototype.readUint16LE=P.prototype.readUInt16LE=function(D,H){return D=D>>>0,H||Un(D,2,this.length),this[D]|this[D+1]<<8},P.prototype.readUint16BE=P.prototype.readUInt16BE=function(D,H){return D=D>>>0,H||Un(D,2,this.length),this[D]<<8|this[D+1]},P.prototype.readUint32LE=P.prototype.readUInt32LE=function(D,H){return D=D>>>0,H||Un(D,4,this.length),(this[D]|this[D+1]<<8|this[D+2]<<16)+this[D+3]*16777216},P.prototype.readUint32BE=P.prototype.readUInt32BE=function(D,H){return D=D>>>0,H||Un(D,4,this.length),this[D]*16777216+(this[D+1]<<16|this[D+2]<<8|this[D+3])},P.prototype.readBigUInt64LE=I(function(D){D=D>>>0,tn(D,"offset");const H=this[D],z=this[D+7];(H===void 0||z===void 0)&&rn(D,this.length-8);const K=H+this[++D]*2**8+this[++D]*2**16+this[++D]*2**24,Z=this[++D]+this[++D]*2**8+this[++D]*2**16+z*2**24;return BigInt(K)+(BigInt(Z)<<BigInt(32))}),P.prototype.readBigUInt64BE=I(function(D){D=D>>>0,tn(D,"offset");const H=this[D],z=this[D+7];(H===void 0||z===void 0)&&rn(D,this.length-8);const K=H*2**24+this[++D]*2**16+this[++D]*2**8+this[++D],Z=this[++D]*2**24+this[++D]*2**16+this[++D]*2**8+z;return(BigInt(K)<<BigInt(32))+BigInt(Z)}),P.prototype.readIntLE=function(D,H,z){D=D>>>0,H=H>>>0,z||Un(D,H,this.length);let K=this[D],Z=1,on=0;for(;++on<H&&(Z*=256);)K+=this[D+on]*Z;return Z*=128,K>=Z&&(K-=Math.pow(2,8*H)),K},P.prototype.readIntBE=function(D,H,z){D=D>>>0,H=H>>>0,z||Un(D,H,this.length);let K=H,Z=1,on=this[D+--K];for(;K>0&&(Z*=256);)on+=this[D+--K]*Z;return Z*=128,on>=Z&&(on-=Math.pow(2,8*H)),on},P.prototype.readInt8=function(D,H){return D=D>>>0,H||Un(D,1,this.length),this[D]&128?(255-this[D]+1)*-1:this[D]},P.prototype.readInt16LE=function(D,H){D=D>>>0,H||Un(D,2,this.length);const z=this[D]|this[D+1]<<8;return z&32768?z|4294901760:z},P.prototype.readInt16BE=function(D,H){D=D>>>0,H||Un(D,2,this.length);const z=this[D+1]|this[D]<<8;return z&32768?z|4294901760:z},P.prototype.readInt32LE=function(D,H){return D=D>>>0,H||Un(D,4,this.length),this[D]|this[D+1]<<8|this[D+2]<<16|this[D+3]<<24},P.prototype.readInt32BE=function(D,H){return D=D>>>0,H||Un(D,4,this.length),this[D]<<24|this[D+1]<<16|this[D+2]<<8|this[D+3]},P.prototype.readBigInt64LE=I(function(D){D=D>>>0,tn(D,"offset");const H=this[D],z=this[D+7];(H===void 0||z===void 0)&&rn(D,this.length-8);const K=this[D+4]+this[D+5]*2**8+this[D+6]*2**16+(z<<24);return(BigInt(K)<<BigInt(32))+BigInt(H+this[++D]*2**8+this[++D]*2**16+this[++D]*2**24)}),P.prototype.readBigInt64BE=I(function(D){D=D>>>0,tn(D,"offset");const H=this[D],z=this[D+7];(H===void 0||z===void 0)&&rn(D,this.length-8);const K=(H<<24)+this[++D]*2**16+this[++D]*2**8+this[++D];return(BigInt(K)<<BigInt(32))+BigInt(this[++D]*2**24+this[++D]*2**16+this[++D]*2**8+z)}),P.prototype.readFloatLE=function(D,H){return D=D>>>0,H||Un(D,4,this.length),f.read(this,D,!0,23,4)},P.prototype.readFloatBE=function(D,H){return D=D>>>0,H||Un(D,4,this.length),f.read(this,D,!1,23,4)},P.prototype.readDoubleLE=function(D,H){return D=D>>>0,H||Un(D,8,this.length),f.read(this,D,!0,52,8)},P.prototype.readDoubleBE=function(D,H){return D=D>>>0,H||Un(D,8,this.length),f.read(this,D,!1,52,8)};function Yn(G,D,H,z,K,Z){if(!P.isBuffer(G))throw new TypeError('"buffer" argument must be a Buffer instance');if(D>K||D<Z)throw new RangeError('"value" argument is out of bounds');if(H+z>G.length)throw new RangeError("Index out of range")}P.prototype.writeUintLE=P.prototype.writeUIntLE=function(D,H,z,K){if(D=+D,H=H>>>0,z=z>>>0,!K){const bn=Math.pow(2,8*z)-1;Yn(this,D,H,z,bn,0)}let Z=1,on=0;for(this[H]=D&255;++on<z&&(Z*=256);)this[H+on]=D/Z&255;return H+z},P.prototype.writeUintBE=P.prototype.writeUIntBE=function(D,H,z,K){if(D=+D,H=H>>>0,z=z>>>0,!K){const bn=Math.pow(2,8*z)-1;Yn(this,D,H,z,bn,0)}let Z=z-1,on=1;for(this[H+Z]=D&255;--Z>=0&&(on*=256);)this[H+Z]=D/on&255;return H+z},P.prototype.writeUint8=P.prototype.writeUInt8=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,1,255,0),this[H]=D&255,H+1},P.prototype.writeUint16LE=P.prototype.writeUInt16LE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,2,65535,0),this[H]=D&255,this[H+1]=D>>>8,H+2},P.prototype.writeUint16BE=P.prototype.writeUInt16BE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,2,65535,0),this[H]=D>>>8,this[H+1]=D&255,H+2},P.prototype.writeUint32LE=P.prototype.writeUInt32LE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,4,4294967295,0),this[H+3]=D>>>24,this[H+2]=D>>>16,this[H+1]=D>>>8,this[H]=D&255,H+4},P.prototype.writeUint32BE=P.prototype.writeUInt32BE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,4,4294967295,0),this[H]=D>>>24,this[H+1]=D>>>16,this[H+2]=D>>>8,this[H+3]=D&255,H+4};function Zn(G,D,H,z,K){nn(D,z,K,G,H,7);let Z=Number(D&BigInt(4294967295));G[H++]=Z,Z=Z>>8,G[H++]=Z,Z=Z>>8,G[H++]=Z,Z=Z>>8,G[H++]=Z;let on=Number(D>>BigInt(32)&BigInt(4294967295));return G[H++]=on,on=on>>8,G[H++]=on,on=on>>8,G[H++]=on,on=on>>8,G[H++]=on,H}function te(G,D,H,z,K){nn(D,z,K,G,H,7);let Z=Number(D&BigInt(4294967295));G[H+7]=Z,Z=Z>>8,G[H+6]=Z,Z=Z>>8,G[H+5]=Z,Z=Z>>8,G[H+4]=Z;let on=Number(D>>BigInt(32)&BigInt(4294967295));return G[H+3]=on,on=on>>8,G[H+2]=on,on=on>>8,G[H+1]=on,on=on>>8,G[H]=on,H+8}P.prototype.writeBigUInt64LE=I(function(D,H=0){return Zn(this,D,H,BigInt(0),BigInt("0xffffffffffffffff"))}),P.prototype.writeBigUInt64BE=I(function(D,H=0){return te(this,D,H,BigInt(0),BigInt("0xffffffffffffffff"))}),P.prototype.writeIntLE=function(D,H,z,K){if(D=+D,H=H>>>0,!K){const wn=Math.pow(2,8*z-1);Yn(this,D,H,z,wn-1,-wn)}let Z=0,on=1,bn=0;for(this[H]=D&255;++Z<z&&(on*=256);)D<0&&bn===0&&this[H+Z-1]!==0&&(bn=1),this[H+Z]=(D/on>>0)-bn&255;return H+z},P.prototype.writeIntBE=function(D,H,z,K){if(D=+D,H=H>>>0,!K){const wn=Math.pow(2,8*z-1);Yn(this,D,H,z,wn-1,-wn)}let Z=z-1,on=1,bn=0;for(this[H+Z]=D&255;--Z>=0&&(on*=256);)D<0&&bn===0&&this[H+Z+1]!==0&&(bn=1),this[H+Z]=(D/on>>0)-bn&255;return H+z},P.prototype.writeInt8=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,1,127,-128),D<0&&(D=255+D+1),this[H]=D&255,H+1},P.prototype.writeInt16LE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,2,32767,-32768),this[H]=D&255,this[H+1]=D>>>8,H+2},P.prototype.writeInt16BE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,2,32767,-32768),this[H]=D>>>8,this[H+1]=D&255,H+2},P.prototype.writeInt32LE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,4,2147483647,-2147483648),this[H]=D&255,this[H+1]=D>>>8,this[H+2]=D>>>16,this[H+3]=D>>>24,H+4},P.prototype.writeInt32BE=function(D,H,z){return D=+D,H=H>>>0,z||Yn(this,D,H,4,2147483647,-2147483648),D<0&&(D=4294967295+D+1),this[H]=D>>>24,this[H+1]=D>>>16,this[H+2]=D>>>8,this[H+3]=D&255,H+4},P.prototype.writeBigInt64LE=I(function(D,H=0){return Zn(this,D,H,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),P.prototype.writeBigInt64BE=I(function(D,H=0){return te(this,D,H,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Kn(G,D,H,z,K,Z){if(H+z>G.length)throw new RangeError("Index out of range");if(H<0)throw new RangeError("Index out of range")}function ne(G,D,H,z,K){return D=+D,H=H>>>0,K||Kn(G,D,H,4),f.write(G,D,H,z,23,4),H+4}P.prototype.writeFloatLE=function(D,H,z){return ne(this,D,H,!0,z)},P.prototype.writeFloatBE=function(D,H,z){return ne(this,D,H,!1,z)};function vn(G,D,H,z,K){return D=+D,H=H>>>0,K||Kn(G,D,H,8),f.write(G,D,H,z,52,8),H+8}P.prototype.writeDoubleLE=function(D,H,z){return vn(this,D,H,!0,z)},P.prototype.writeDoubleBE=function(D,H,z){return vn(this,D,H,!1,z)},P.prototype.copy=function(D,H,z,K){if(!P.isBuffer(D))throw new TypeError("argument should be a Buffer");if(z||(z=0),!K&&K!==0&&(K=this.length),H>=D.length&&(H=D.length),H||(H=0),K>0&&K<z&&(K=z),K===z||D.length===0||this.length===0)return 0;if(H<0)throw new RangeError("targetStart out of bounds");if(z<0||z>=this.length)throw new RangeError("Index out of range");if(K<0)throw new RangeError("sourceEnd out of bounds");K>this.length&&(K=this.length),D.length-H<K-z&&(K=D.length-H+z);const Z=K-z;return this===D&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(H,z,K):Uint8Array.prototype.set.call(D,this.subarray(z,K),H),Z},P.prototype.fill=function(D,H,z,K){if(typeof D=="string"){if(typeof H=="string"?(K=H,H=0,z=this.length):typeof z=="string"&&(K=z,z=this.length),K!==void 0&&typeof K!="string")throw new TypeError("encoding must be a string");if(typeof K=="string"&&!P.isEncoding(K))throw new TypeError("Unknown encoding: "+K);if(D.length===1){const on=D.charCodeAt(0);(K==="utf8"&&on<128||K==="latin1")&&(D=on)}}else typeof D=="number"?D=D&255:typeof D=="boolean"&&(D=Number(D));if(H<0||this.length<H||this.length<z)throw new RangeError("Out of range index");if(z<=H)return this;H=H>>>0,z=z===void 0?this.length:z>>>0,D||(D=0);let Z;if(typeof D=="number")for(Z=H;Z<z;++Z)this[Z]=D;else{const on=P.isBuffer(D)?D:P.from(D,K),bn=on.length;if(bn===0)throw new TypeError('The value "'+D+'" is invalid for argument "value"');for(Z=0;Z<z-H;++Z)this[Z+H]=on[Z%bn]}return this};const In={};function Vn(G,D,H){In[G]=class extends H{constructor(){super(),Object.defineProperty(this,"message",{value:D.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${G}]`,this.stack,delete this.name}get code(){return G}set code(K){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:K,writable:!0})}toString(){return`${this.name} [${G}]: ${this.message}`}}}Vn("ERR_BUFFER_OUT_OF_BOUNDS",function(G){return G?`${G} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Vn("ERR_INVALID_ARG_TYPE",function(G,D){return`The "${G}" argument must be of type number. Received type ${typeof D}`},TypeError),Vn("ERR_OUT_OF_RANGE",function(G,D,H){let z=`The value of "${G}" is out of range.`,K=H;return Number.isInteger(H)&&Math.abs(H)>2**32?K=Fn(String(H)):typeof H=="bigint"&&(K=String(H),(H>BigInt(2)**BigInt(32)||H<-(BigInt(2)**BigInt(32)))&&(K=Fn(K)),K+="n"),z+=` It must be ${D}. Received ${K}`,z},RangeError);function Fn(G){let D="",H=G.length;const z=G[0]==="-"?1:0;for(;H>=z+4;H-=3)D=`_${G.slice(H-3,H)}${D}`;return`${G.slice(0,H)}${D}`}function Wn(G,D,H){tn(D,"offset"),(G[D]===void 0||G[D+H]===void 0)&&rn(D,G.length-(H+1))}function nn(G,D,H,z,K,Z){if(G>H||G<D){const on=typeof D=="bigint"?"n":"";let bn;throw D===0||D===BigInt(0)?bn=`>= 0${on} and < 2${on} ** ${(Z+1)*8}${on}`:bn=`>= -(2${on} ** ${(Z+1)*8-1}${on}) and < 2 ** ${(Z+1)*8-1}${on}`,new In.ERR_OUT_OF_RANGE("value",bn,G)}Wn(z,K,Z)}function tn(G,D){if(typeof G!="number")throw new In.ERR_INVALID_ARG_TYPE(D,"number",G)}function rn(G,D,H){throw Math.floor(G)!==G?(tn(G,H),new In.ERR_OUT_OF_RANGE("offset","an integer",G)):D<0?new In.ERR_BUFFER_OUT_OF_BOUNDS:new In.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${D}`,G)}const yn=/[^+/0-9A-Za-z-_]/g;function kn(G){if(G=G.split("=")[0],G=G.trim().replace(yn,""),G.length<2)return"";for(;G.length%4!==0;)G=G+"=";return G}function Sn(G,D){D=D||1/0;let H;const z=G.length;let K=null;const Z=[];for(let on=0;on<z;++on){if(H=G.charCodeAt(on),H>55295&&H<57344){if(!K){if(H>56319){(D-=3)>-1&&Z.push(239,191,189);continue}else if(on+1===z){(D-=3)>-1&&Z.push(239,191,189);continue}K=H;continue}if(H<56320){(D-=3)>-1&&Z.push(239,191,189),K=H;continue}H=(K-55296<<10|H-56320)+65536}else K&&(D-=3)>-1&&Z.push(239,191,189);if(K=null,H<128){if((D-=1)<0)break;Z.push(H)}else if(H<2048){if((D-=2)<0)break;Z.push(H>>6|192,H&63|128)}else if(H<65536){if((D-=3)<0)break;Z.push(H>>12|224,H>>6&63|128,H&63|128)}else if(H<1114112){if((D-=4)<0)break;Z.push(H>>18|240,H>>12&63|128,H>>6&63|128,H&63|128)}else throw new Error("Invalid code point")}return Z}function Nn(G){const D=[];for(let H=0;H<G.length;++H)D.push(G.charCodeAt(H)&255);return D}function $n(G,D){let H,z,K;const Z=[];for(let on=0;on<G.length&&!((D-=2)<0);++on)H=G.charCodeAt(on),z=H>>8,K=H%256,Z.push(K),Z.push(z);return Z}function Dn(G){return a.toByteArray(kn(G))}function Cn(G,D,H,z){let K;for(K=0;K<z&&!(K+H>=D.length||K>=G.length);++K)D[K+H]=G[K];return K}function Hn(G,D){return G instanceof D||G!=null&&G.constructor!=null&&G.constructor.name!=null&&G.constructor.name===D.name}function Bn(G){return G!==G}const zn=(function(){const G="0123456789abcdef",D=new Array(256);for(let H=0;H<16;++H){const z=H*16;for(let K=0;K<16;++K)D[z+K]=G[H]+G[K]}return D})();function I(G){return typeof BigInt>"u"?ln:G}function ln(){throw new Error("BigInt not supported")}})(buffer)),buffer}var bufferExports=requireBuffer();function render$1(e,a){return openBlock(),createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[createBaseVNode("path",{"fill-rule":"evenodd",d:"M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z","clip-rule":"evenodd"})])}function render(e,a){return openBlock(),createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[createBaseVNode("path",{"fill-rule":"evenodd",d:"M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z","clip-rule":"evenodd"})])}const isBrowser=typeof document<"u";function isRouteComponent(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function isESModule(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&isRouteComponent(e.default)}const assign=Object.assign;function applyToParams(e,a){const f={};for(const _ in a){const w=a[_];f[_]=isArray(w)?w.map(e):e(w)}return f}const noop=()=>{},isArray=Array.isArray;function mergeOptions(e,a){const f={};for(const _ in e)f[_]=_ in a?a[_]:e[_];return f}const HASH_RE=/#/g,AMPERSAND_RE=/&/g,SLASH_RE=/\//g,EQUAL_RE=/=/g,IM_RE=/\?/g,PLUS_RE=/\+/g,ENC_BRACKET_OPEN_RE=/%5B/g,ENC_BRACKET_CLOSE_RE=/%5D/g,ENC_CARET_RE=/%5E/g,ENC_BACKTICK_RE=/%60/g,ENC_CURLY_OPEN_RE=/%7B/g,ENC_PIPE_RE=/%7C/g,ENC_CURLY_CLOSE_RE=/%7D/g,ENC_SPACE_RE=/%20/g;function commonEncode(e){return e==null?"":encodeURI(""+e).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]")}function encodeHash(e){return commonEncode(e).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryValue(e){return commonEncode(e).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryKey(e){return encodeQueryValue(e).replace(EQUAL_RE,"%3D")}function encodePath(e){return commonEncode(e).replace(HASH_RE,"%23").replace(IM_RE,"%3F")}function encodeParam(e){return encodePath(e).replace(SLASH_RE,"%2F")}function decode(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const TRAILING_SLASH_RE=/\/$/,removeTrailingSlash=e=>e.replace(TRAILING_SLASH_RE,"");function parseURL(e,a,f="/"){let _,w={},x="",E="";const P=a.indexOf("#");let C=a.indexOf("?");return C=P>=0&&C>P?-1:C,C>=0&&(_=a.slice(0,C),x=a.slice(C,P>0?P:a.length),w=e(x.slice(1))),P>=0&&(_=_||a.slice(0,P),E=a.slice(P,a.length)),_=resolveRelativePath(_??a,f),{fullPath:_+x+E,path:_,query:w,hash:decode(E)}}function stringifyURL(e,a){const f=a.query?e(a.query):"";return a.path+(f&&"?")+f+(a.hash||"")}function stripBase(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function isSameRouteLocation(e,a,f){const _=a.matched.length-1,w=f.matched.length-1;return _>-1&&_===w&&isSameRouteRecord(a.matched[_],f.matched[w])&&isSameRouteLocationParams(a.params,f.params)&&e(a.query)===e(f.query)&&a.hash===f.hash}function isSameRouteRecord(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function isSameRouteLocationParams(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(var f in e)if(!isSameRouteLocationParamsValue(e[f],a[f]))return!1;return!0}function isSameRouteLocationParamsValue(e,a){return isArray(e)?isEquivalentArray(e,a):isArray(a)?isEquivalentArray(a,e):e?.valueOf()===a?.valueOf()}function isEquivalentArray(e,a){return isArray(a)?e.length===a.length&&e.every((f,_)=>f===a[_]):e.length===1&&e[0]===a}function resolveRelativePath(e,a){if(e.startsWith("/"))return e;if(!e)return a;const f=a.split("/"),_=e.split("/"),w=_[_.length-1];(w===".."||w===".")&&_.push("");let x=f.length-1,E,P;for(E=0;E<_.length;E++)if(P=_[E],P!==".")if(P==="..")x>1&&x--;else break;return f.slice(0,x).join("/")+"/"+_.slice(E).join("/")}const START_LOCATION_NORMALIZED={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let NavigationType=(function(e){return e.pop="pop",e.push="push",e})({}),NavigationDirection=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function normalizeBase(e){if(!e)if(isBrowser){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),removeTrailingSlash(e)}const BEFORE_HASH_RE=/^[^#]+#/;function createHref(e,a){return e.replace(BEFORE_HASH_RE,"#")+a}function getElementPosition(e,a){const f=document.documentElement.getBoundingClientRect(),_=e.getBoundingClientRect();return{behavior:a.behavior,left:_.left-f.left-(a.left||0),top:_.top-f.top-(a.top||0)}}const computeScrollPosition=()=>({left:window.scrollX,top:window.scrollY});function scrollToPosition(e){let a;if("el"in e){const f=e.el,_=typeof f=="string"&&f.startsWith("#"),w=typeof f=="string"?_?document.getElementById(f.slice(1)):document.querySelector(f):f;if(!w)return;a=getElementPosition(w,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function getScrollKey(e,a){return(history.state?history.state.position-a:-1)+e}const scrollPositions=new Map;function saveScrollPosition(e,a){scrollPositions.set(e,a)}function getSavedScrollPosition(e){const a=scrollPositions.get(e);return scrollPositions.delete(e),a}function isRouteLocation(e){return typeof e=="string"||e&&typeof e=="object"}function isRouteName(e){return typeof e=="string"||typeof e=="symbol"}let ErrorTypes=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const NavigationFailureSymbol=Symbol("");ErrorTypes.MATCHER_NOT_FOUND+"",ErrorTypes.NAVIGATION_GUARD_REDIRECT+"",ErrorTypes.NAVIGATION_ABORTED+"",ErrorTypes.NAVIGATION_CANCELLED+"",ErrorTypes.NAVIGATION_DUPLICATED+"";function createRouterError(e,a){return assign(new Error,{type:e,[NavigationFailureSymbol]:!0},a)}function isNavigationFailure(e,a){return e instanceof Error&&NavigationFailureSymbol in e&&(a==null||!!(e.type&a))}const propertiesToLog=["params","query","hash"];function stringifyRoute(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const a={};for(const f of propertiesToLog)f in e&&(a[f]=e[f]);return JSON.stringify(a,null,2)}function parseQuery(e){const a={};if(e===""||e==="?")return a;const f=(e[0]==="?"?e.slice(1):e).split("&");for(let _=0;_<f.length;++_){const w=f[_].replace(PLUS_RE," "),x=w.indexOf("="),E=decode(x<0?w:w.slice(0,x)),P=x<0?null:decode(w.slice(x+1));if(E in a){let C=a[E];isArray(C)||(C=a[E]=[C]),C.push(P)}else a[E]=P}return a}function stringifyQuery(e){let a="";for(let f in e){const _=e[f];if(f=encodeQueryKey(f),_==null){_!==void 0&&(a+=(a.length?"&":"")+f);continue}(isArray(_)?_.map(w=>w&&encodeQueryValue(w)):[_&&encodeQueryValue(_)]).forEach(w=>{w!==void 0&&(a+=(a.length?"&":"")+f,w!=null&&(a+="="+w))})}return a}function normalizeQuery(e){const a={};for(const f in e){const _=e[f];_!==void 0&&(a[f]=isArray(_)?_.map(w=>w==null?null:""+w):_==null?_:""+_)}return a}const matchedRouteKey=Symbol(""),viewDepthKey=Symbol(""),routerKey=Symbol(""),routeLocationKey=Symbol(""),routerViewLocationKey=Symbol("");function useCallbacks(){let e=[];function a(_){return e.push(_),()=>{const w=e.indexOf(_);w>-1&&e.splice(w,1)}}function f(){e=[]}return{add:a,list:()=>e.slice(),reset:f}}function guardToPromiseFn(e,a,f,_,w,x=E=>E()){const E=_&&(_.enterCallbacks[w]=_.enterCallbacks[w]||[]);return()=>new Promise((P,C)=>{const M=J=>{J===!1?C(createRouterError(ErrorTypes.NAVIGATION_ABORTED,{from:f,to:a})):J instanceof Error?C(J):isRouteLocation(J)?C(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT,{from:a,to:J})):(E&&_.enterCallbacks[w]===E&&typeof J=="function"&&E.push(J),P())},B=x(()=>e.call(_&&_.instances[w],a,f,M));let q=Promise.resolve(B);e.length<3&&(q=q.then(M)),q.catch(J=>C(J))})}function extractComponentsGuards(e,a,f,_,w=x=>x()){const x=[];for(const E of e)for(const P in E.components){let C=E.components[P];if(!(a!=="beforeRouteEnter"&&!E.instances[P]))if(isRouteComponent(C)){const M=(C.__vccOpts||C)[a];M&&x.push(guardToPromiseFn(M,f,_,E,P,w))}else{let M=C();x.push(()=>M.then(B=>{if(!B)throw new Error(`Couldn't resolve component "${P}" at "${E.path}"`);const q=isESModule(B)?B.default:B;E.mods[P]=B,E.components[P]=q;const J=(q.__vccOpts||q)[a];return J&&guardToPromiseFn(J,f,_,E,P,w)()}))}}return x}function extractChangingRecords(e,a){const f=[],_=[],w=[],x=Math.max(a.matched.length,e.matched.length);for(let E=0;E<x;E++){const P=a.matched[E];P&&(e.matched.find(M=>isSameRouteRecord(M,P))?_.push(P):f.push(P));const C=e.matched[E];C&&(a.matched.find(M=>isSameRouteRecord(M,C))||w.push(C))}return[f,_,w]}let createBaseLocation=()=>location.protocol+"//"+location.host;function createCurrentLocation(e,a){const{pathname:f,search:_,hash:w}=a,x=e.indexOf("#");if(x>-1){let E=w.includes(e.slice(x))?e.slice(x).length:1,P=w.slice(E);return P[0]!=="/"&&(P="/"+P),stripBase(P,"")}return stripBase(f,e)+_+w}function useHistoryListeners(e,a,f,_){let w=[],x=[],E=null;const P=({state:J})=>{const Y=createCurrentLocation(e,location),X=f.value,en=a.value;let dn=0;if(J){if(f.value=Y,a.value=J,E&&E===X){E=null;return}dn=en?J.position-en.position:0}else _(Y);w.forEach(pn=>{pn(f.value,X,{delta:dn,type:NavigationType.pop,direction:dn?dn>0?NavigationDirection.forward:NavigationDirection.back:NavigationDirection.unknown})})};function C(){E=f.value}function M(J){w.push(J);const Y=()=>{const X=w.indexOf(J);X>-1&&w.splice(X,1)};return x.push(Y),Y}function B(){if(document.visibilityState==="hidden"){const{history:J}=window;if(!J.state)return;J.replaceState(assign({},J.state,{scroll:computeScrollPosition()}),"")}}function q(){for(const J of x)J();x=[],window.removeEventListener("popstate",P),window.removeEventListener("pagehide",B),document.removeEventListener("visibilitychange",B)}return window.addEventListener("popstate",P),window.addEventListener("pagehide",B),document.addEventListener("visibilitychange",B),{pauseListeners:C,listen:M,destroy:q}}function buildState(e,a,f,_=!1,w=!1){return{back:e,current:a,forward:f,replaced:_,position:window.history.length,scroll:w?computeScrollPosition():null}}function useHistoryStateNavigation(e){const{history:a,location:f}=window,_={value:createCurrentLocation(e,f)},w={value:a.state};w.value||x(_.value,{back:null,current:_.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function x(C,M,B){const q=e.indexOf("#"),J=q>-1?(f.host&&document.querySelector("base")?e:e.slice(q))+C:createBaseLocation()+e+C;try{a[B?"replaceState":"pushState"](M,"",J),w.value=M}catch(Y){console.error(Y),f[B?"replace":"assign"](J)}}function E(C,M){x(C,assign({},a.state,buildState(w.value.back,C,w.value.forward,!0),M,{position:w.value.position}),!0),_.value=C}function P(C,M){const B=assign({},w.value,a.state,{forward:C,scroll:computeScrollPosition()});x(B.current,B,!0),x(C,assign({},buildState(_.value,C,null),{position:B.position+1},M),!1),_.value=C}return{location:_,state:w,push:P,replace:E}}function createWebHistory(e){e=normalizeBase(e);const a=useHistoryStateNavigation(e),f=useHistoryListeners(e,a.state,a.location,a.replace);function _(x,E=!0){E||f.pauseListeners(),history.go(x)}const w=assign({location:"",base:e,go:_,createHref:createHref.bind(null,e)},a,f);return Object.defineProperty(w,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(w,"state",{enumerable:!0,get:()=>a.state.value}),w}function createWebHashHistory(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),createWebHistory(e)}let TokenType=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var TokenizerState=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(TokenizerState||{});const ROOT_TOKEN={type:TokenType.Static,value:""},VALID_PARAM_RE=/[a-zA-Z0-9_]/;function tokenizePath(e){if(!e)return[[]];if(e==="/")return[[ROOT_TOKEN]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(Y){throw new Error(`ERR (${f})/"${M}": ${Y}`)}let f=TokenizerState.Static,_=f;const w=[];let x;function E(){x&&w.push(x),x=[]}let P=0,C,M="",B="";function q(){M&&(f===TokenizerState.Static?x.push({type:TokenType.Static,value:M}):f===TokenizerState.Param||f===TokenizerState.ParamRegExp||f===TokenizerState.ParamRegExpEnd?(x.length>1&&(C==="*"||C==="+")&&a(`A repeatable param (${M}) must be alone in its segment. eg: '/:ids+.`),x.push({type:TokenType.Param,value:M,regexp:B,repeatable:C==="*"||C==="+",optional:C==="*"||C==="?"})):a("Invalid state to consume buffer"),M="")}function J(){M+=C}for(;P<e.length;){if(C=e[P++],C==="\\"&&f!==TokenizerState.ParamRegExp){_=f,f=TokenizerState.EscapeNext;continue}switch(f){case TokenizerState.Static:C==="/"?(M&&q(),E()):C===":"?(q(),f=TokenizerState.Param):J();break;case TokenizerState.EscapeNext:J(),f=_;break;case TokenizerState.Param:C==="("?f=TokenizerState.ParamRegExp:VALID_PARAM_RE.test(C)?J():(q(),f=TokenizerState.Static,C!=="*"&&C!=="?"&&C!=="+"&&P--);break;case TokenizerState.ParamRegExp:C===")"?B[B.length-1]=="\\"?B=B.slice(0,-1)+C:f=TokenizerState.ParamRegExpEnd:B+=C;break;case TokenizerState.ParamRegExpEnd:q(),f=TokenizerState.Static,C!=="*"&&C!=="?"&&C!=="+"&&P--,B="";break;default:a("Unknown state");break}}return f===TokenizerState.ParamRegExp&&a(`Unfinished custom RegExp for param "${M}"`),q(),E(),w}const BASE_PARAM_PATTERN="[^/]+?",BASE_PATH_PARSER_OPTIONS={sensitive:!1,strict:!1,start:!0,end:!0};var PathScore=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(PathScore||{});const REGEX_CHARS_RE=/[.+*?^${}()[\]/\\]/g;function tokensToParser(e,a){const f=assign({},BASE_PATH_PARSER_OPTIONS,a),_=[];let w=f.start?"^":"";const x=[];for(const M of e){const B=M.length?[]:[PathScore.Root];f.strict&&!M.length&&(w+="/");for(let q=0;q<M.length;q++){const J=M[q];let Y=PathScore.Segment+(f.sensitive?PathScore.BonusCaseSensitive:0);if(J.type===TokenType.Static)q||(w+="/"),w+=J.value.replace(REGEX_CHARS_RE,"\\$&"),Y+=PathScore.Static;else if(J.type===TokenType.Param){const{value:X,repeatable:en,optional:dn,regexp:pn}=J;x.push({name:X,repeatable:en,optional:dn});const an=pn||BASE_PARAM_PATTERN;if(an!==BASE_PARAM_PATTERN){Y+=PathScore.BonusCustomRegExp;try{`${an}`}catch(mn){throw new Error(`Invalid custom RegExp for param "${X}" (${an}): `+mn.message)}}let un=en?`((?:${an})(?:/(?:${an}))*)`:`(${an})`;q||(un=dn&&M.length<2?`(?:/${un})`:"/"+un),dn&&(un+="?"),w+=un,Y+=PathScore.Dynamic,dn&&(Y+=PathScore.BonusOptional),en&&(Y+=PathScore.BonusRepeatable),an===".*"&&(Y+=PathScore.BonusWildcard)}B.push(Y)}_.push(B)}if(f.strict&&f.end){const M=_.length-1;_[M][_[M].length-1]+=PathScore.BonusStrict}f.strict||(w+="/?"),f.end?w+="$":f.strict&&!w.endsWith("/")&&(w+="(?:/|$)");const E=new RegExp(w,f.sensitive?"":"i");function P(M){const B=M.match(E),q={};if(!B)return null;for(let J=1;J<B.length;J++){const Y=B[J]||"",X=x[J-1];q[X.name]=Y&&X.repeatable?Y.split("/"):Y}return q}function C(M){let B="",q=!1;for(const J of e){(!q||!B.endsWith("/"))&&(B+="/"),q=!1;for(const Y of J)if(Y.type===TokenType.Static)B+=Y.value;else if(Y.type===TokenType.Param){const{value:X,repeatable:en,optional:dn}=Y,pn=X in M?M[X]:"";if(isArray(pn)&&!en)throw new Error(`Provided param "${X}" is an array but it is not repeatable (* or + modifiers)`);const an=isArray(pn)?pn.join("/"):pn;if(!an)if(dn)J.length<2&&(B.endsWith("/")?B=B.slice(0,-1):q=!0);else throw new Error(`Missing required param "${X}"`);B+=an}}return B||"/"}return{re:E,score:_,keys:x,parse:P,stringify:C}}function compareScoreArray(e,a){let f=0;for(;f<e.length&&f<a.length;){const _=a[f]-e[f];if(_)return _;f++}return e.length<a.length?e.length===1&&e[0]===PathScore.Static+PathScore.Segment?-1:1:e.length>a.length?a.length===1&&a[0]===PathScore.Static+PathScore.Segment?1:-1:0}function comparePathParserScore(e,a){let f=0;const _=e.score,w=a.score;for(;f<_.length&&f<w.length;){const x=compareScoreArray(_[f],w[f]);if(x)return x;f++}if(Math.abs(w.length-_.length)===1){if(isLastScoreNegative(_))return 1;if(isLastScoreNegative(w))return-1}return w.length-_.length}function isLastScoreNegative(e){const a=e[e.length-1];return e.length>0&&a[a.length-1]<0}const PATH_PARSER_OPTIONS_DEFAULTS={strict:!1,end:!0,sensitive:!1};function createRouteRecordMatcher(e,a,f){const _=tokensToParser(tokenizePath(e.path),f),w=assign(_,{record:e,parent:a,children:[],alias:[]});return a&&!w.record.aliasOf==!a.record.aliasOf&&a.children.push(w),w}function createRouterMatcher(e,a){const f=[],_=new Map;a=mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS,a);function w(q){return _.get(q)}function x(q,J,Y){const X=!Y,en=normalizeRouteRecord(q);en.aliasOf=Y&&Y.record;const dn=mergeOptions(a,q),pn=[en];if("alias"in q){const mn=typeof q.alias=="string"?[q.alias]:q.alias;for(const fn of mn)pn.push(normalizeRouteRecord(assign({},en,{components:Y?Y.record.components:en.components,path:fn,aliasOf:Y?Y.record:en})))}let an,un;for(const mn of pn){const{path:fn}=mn;if(J&&fn[0]!=="/"){const Pn=J.record.path,An=Pn[Pn.length-1]==="/"?"":"/";mn.path=J.record.path+(fn&&An+fn)}if(an=createRouteRecordMatcher(mn,J,dn),Y?Y.alias.push(an):(un=un||an,un!==an&&un.alias.push(an),X&&q.name&&!isAliasRecord(an)&&E(q.name)),isMatchable(an)&&C(an),en.children){const Pn=en.children;for(let An=0;An<Pn.length;An++)x(Pn[An],an,Y&&Y.children[An])}Y=Y||an}return un?()=>{E(un)}:noop}function E(q){if(isRouteName(q)){const J=_.get(q);J&&(_.delete(q),f.splice(f.indexOf(J),1),J.children.forEach(E),J.alias.forEach(E))}else{const J=f.indexOf(q);J>-1&&(f.splice(J,1),q.record.name&&_.delete(q.record.name),q.children.forEach(E),q.alias.forEach(E))}}function P(){return f}function C(q){const J=findInsertionIndex(q,f);f.splice(J,0,q),q.record.name&&!isAliasRecord(q)&&_.set(q.record.name,q)}function M(q,J){let Y,X={},en,dn;if("name"in q&&q.name){if(Y=_.get(q.name),!Y)throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND,{location:q});dn=Y.record.name,X=assign(pickParams(J.params,Y.keys.filter(un=>!un.optional).concat(Y.parent?Y.parent.keys.filter(un=>un.optional):[]).map(un=>un.name)),q.params&&pickParams(q.params,Y.keys.map(un=>un.name))),en=Y.stringify(X)}else if(q.path!=null)en=q.path,Y=f.find(un=>un.re.test(en)),Y&&(X=Y.parse(en),dn=Y.record.name);else{if(Y=J.name?_.get(J.name):f.find(un=>un.re.test(J.path)),!Y)throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND,{location:q,currentLocation:J});dn=Y.record.name,X=assign({},J.params,q.params),en=Y.stringify(X)}const pn=[];let an=Y;for(;an;)pn.unshift(an.record),an=an.parent;return{name:dn,path:en,params:X,matched:pn,meta:mergeMetaFields(pn)}}e.forEach(q=>x(q));function B(){f.length=0,_.clear()}return{addRoute:x,resolve:M,removeRoute:E,clearRoutes:B,getRoutes:P,getRecordMatcher:w}}function pickParams(e,a){const f={};for(const _ of a)_ in e&&(f[_]=e[_]);return f}function normalizeRouteRecord(e){const a={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:normalizeRecordProps(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(a,"mods",{value:{}}),a}function normalizeRecordProps(e){const a={},f=e.props||!1;if("component"in e)a.default=f;else for(const _ in e.components)a[_]=typeof f=="object"?f[_]:f;return a}function isAliasRecord(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mergeMetaFields(e){return e.reduce((a,f)=>assign(a,f.meta),{})}function findInsertionIndex(e,a){let f=0,_=a.length;for(;f!==_;){const x=f+_>>1;comparePathParserScore(e,a[x])<0?_=x:f=x+1}const w=getInsertionAncestor(e);return w&&(_=a.lastIndexOf(w,_-1)),_}function getInsertionAncestor(e){let a=e;for(;a=a.parent;)if(isMatchable(a)&&comparePathParserScore(e,a)===0)return a}function isMatchable({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function useLink(e){const a=inject(routerKey),f=inject(routeLocationKey),_=computed(()=>{const C=unref(e.to);return a.resolve(C)}),w=computed(()=>{const{matched:C}=_.value,{length:M}=C,B=C[M-1],q=f.matched;if(!B||!q.length)return-1;const J=q.findIndex(isSameRouteRecord.bind(null,B));if(J>-1)return J;const Y=getOriginalPath(C[M-2]);return M>1&&getOriginalPath(B)===Y&&q[q.length-1].path!==Y?q.findIndex(isSameRouteRecord.bind(null,C[M-2])):J}),x=computed(()=>w.value>-1&&includesParams(f.params,_.value.params)),E=computed(()=>w.value>-1&&w.value===f.matched.length-1&&isSameRouteLocationParams(f.params,_.value.params));function P(C={}){if(guardEvent(C)){const M=a[unref(e.replace)?"replace":"push"](unref(e.to)).catch(noop);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>M),M}return Promise.resolve()}return{route:_,href:computed(()=>_.value.href),isActive:x,isExactActive:E,navigate:P}}function preferSingleVNode(e){return e.length===1?e[0]:e}const RouterLinkImpl=defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink,setup(e,{slots:a}){const f=reactive(useLink(e)),{options:_}=inject(routerKey),w=computed(()=>({[getLinkClass(e.activeClass,_.linkActiveClass,"router-link-active")]:f.isActive,[getLinkClass(e.exactActiveClass,_.linkExactActiveClass,"router-link-exact-active")]:f.isExactActive}));return()=>{const x=a.default&&preferSingleVNode(a.default(f));return e.custom?x:h("a",{"aria-current":f.isExactActive?e.ariaCurrentValue:null,href:f.href,onClick:f.navigate,class:w.value},x)}}}),RouterLink=RouterLinkImpl;function guardEvent(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function includesParams(e,a){for(const f in a){const _=a[f],w=e[f];if(typeof _=="string"){if(_!==w)return!1}else if(!isArray(w)||w.length!==_.length||_.some((x,E)=>x.valueOf()!==w[E].valueOf()))return!1}return!0}function getOriginalPath(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const getLinkClass=(e,a,f)=>e??a??f,RouterViewImpl=defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:a,slots:f}){const _=inject(routerViewLocationKey),w=computed(()=>e.route||_.value),x=inject(viewDepthKey,0),E=computed(()=>{let M=unref(x);const{matched:B}=w.value;let q;for(;(q=B[M])&&!q.components;)M++;return M}),P=computed(()=>w.value.matched[E.value]);provide(viewDepthKey,computed(()=>E.value+1)),provide(matchedRouteKey,P),provide(routerViewLocationKey,w);const C=ref();return watch(()=>[C.value,P.value,e.name],([M,B,q],[J,Y,X])=>{B&&(B.instances[q]=M,Y&&Y!==B&&M&&M===J&&(B.leaveGuards.size||(B.leaveGuards=Y.leaveGuards),B.updateGuards.size||(B.updateGuards=Y.updateGuards))),M&&B&&(!Y||!isSameRouteRecord(B,Y)||!J)&&(B.enterCallbacks[q]||[]).forEach(en=>en(M))},{flush:"post"}),()=>{const M=w.value,B=e.name,q=P.value,J=q&&q.components[B];if(!J)return normalizeSlot(f.default,{Component:J,route:M});const Y=q.props[B],X=Y?Y===!0?M.params:typeof Y=="function"?Y(M):Y:null,dn=h(J,assign({},X,a,{onVnodeUnmounted:pn=>{pn.component.isUnmounted&&(q.instances[B]=null)},ref:C}));return normalizeSlot(f.default,{Component:dn,route:M})||dn}}});function normalizeSlot(e,a){if(!e)return null;const f=e(a);return f.length===1?f[0]:f}const RouterView=RouterViewImpl;function createRouter(e){const a=createRouterMatcher(e.routes,e),f=e.parseQuery||parseQuery,_=e.stringifyQuery||stringifyQuery,w=e.history,x=useCallbacks(),E=useCallbacks(),P=useCallbacks(),C=shallowRef(START_LOCATION_NORMALIZED);let M=START_LOCATION_NORMALIZED;isBrowser&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const B=applyToParams.bind(null,vn=>""+vn),q=applyToParams.bind(null,encodeParam),J=applyToParams.bind(null,decode);function Y(vn,In){let Vn,Fn;return isRouteName(vn)?(Vn=a.getRecordMatcher(vn),Fn=In):Fn=vn,a.addRoute(Fn,Vn)}function X(vn){const In=a.getRecordMatcher(vn);In&&a.removeRoute(In)}function en(){return a.getRoutes().map(vn=>vn.record)}function dn(vn){return!!a.getRecordMatcher(vn)}function pn(vn,In){if(In=assign({},In||C.value),typeof vn=="string"){const rn=parseURL(f,vn,In.path),yn=a.resolve({path:rn.path},In),kn=w.createHref(rn.fullPath);return assign(rn,yn,{params:J(yn.params),hash:decode(rn.hash),redirectedFrom:void 0,href:kn})}let Vn;if(vn.path!=null)Vn=assign({},vn,{path:parseURL(f,vn.path,In.path).path});else{const rn=assign({},vn.params);for(const yn in rn)rn[yn]==null&&delete rn[yn];Vn=assign({},vn,{params:q(rn)}),In.params=q(In.params)}const Fn=a.resolve(Vn,In),Wn=vn.hash||"";Fn.params=B(J(Fn.params));const nn=stringifyURL(_,assign({},vn,{hash:encodeHash(Wn),path:Fn.path})),tn=w.createHref(nn);return assign({fullPath:nn,hash:Wn,query:_===stringifyQuery?normalizeQuery(vn.query):vn.query||{}},Fn,{redirectedFrom:void 0,href:tn})}function an(vn){return typeof vn=="string"?parseURL(f,vn,C.value.path):assign({},vn)}function un(vn,In){if(M!==vn)return createRouterError(ErrorTypes.NAVIGATION_CANCELLED,{from:In,to:vn})}function mn(vn){return An(vn)}function fn(vn){return mn(assign(an(vn),{replace:!0}))}function Pn(vn,In){const Vn=vn.matched[vn.matched.length-1];if(Vn&&Vn.redirect){const{redirect:Fn}=Vn;let Wn=typeof Fn=="function"?Fn(vn,In):Fn;return typeof Wn=="string"&&(Wn=Wn.includes("?")||Wn.includes("#")?Wn=an(Wn):{path:Wn},Wn.params={}),assign({query:vn.query,hash:vn.hash,params:Wn.path!=null?{}:vn.params},Wn)}}function An(vn,In){const Vn=M=pn(vn),Fn=C.value,Wn=vn.state,nn=vn.force,tn=vn.replace===!0,rn=Pn(Vn,Fn);if(rn)return An(assign(an(rn),{state:typeof rn=="object"?assign({},Wn,rn.state):Wn,force:nn,replace:tn}),In||Vn);const yn=Vn;yn.redirectedFrom=In;let kn;return!nn&&isSameRouteLocation(_,Fn,Vn)&&(kn=createRouterError(ErrorTypes.NAVIGATION_DUPLICATED,{to:yn,from:Fn}),Un(Fn,Fn,!0,!1)),(kn?Promise.resolve(kn):Tn(yn,Fn)).catch(Sn=>isNavigationFailure(Sn)?isNavigationFailure(Sn,ErrorTypes.NAVIGATION_GUARD_REDIRECT)?Sn:Xn(Sn):_n(Sn,yn,Fn)).then(Sn=>{if(Sn){if(isNavigationFailure(Sn,ErrorTypes.NAVIGATION_GUARD_REDIRECT))return An(assign({replace:tn},an(Sn.to),{state:typeof Sn.to=="object"?assign({},Wn,Sn.to.state):Wn,force:nn}),In||yn)}else Sn=cn(yn,Fn,!0,tn,Wn);return gn(yn,Fn,Sn),Sn})}function sn(vn,In){const Vn=un(vn,In);return Vn?Promise.reject(Vn):Promise.resolve()}function xn(vn){const In=te.values().next().value;return In&&typeof In.runWithContext=="function"?In.runWithContext(vn):vn()}function Tn(vn,In){let Vn;const[Fn,Wn,nn]=extractChangingRecords(vn,In);Vn=extractComponentsGuards(Fn.reverse(),"beforeRouteLeave",vn,In);for(const rn of Fn)rn.leaveGuards.forEach(yn=>{Vn.push(guardToPromiseFn(yn,vn,In))});const tn=sn.bind(null,vn,In);return Vn.push(tn),ne(Vn).then(()=>{Vn=[];for(const rn of x.list())Vn.push(guardToPromiseFn(rn,vn,In));return Vn.push(tn),ne(Vn)}).then(()=>{Vn=extractComponentsGuards(Wn,"beforeRouteUpdate",vn,In);for(const rn of Wn)rn.updateGuards.forEach(yn=>{Vn.push(guardToPromiseFn(yn,vn,In))});return Vn.push(tn),ne(Vn)}).then(()=>{Vn=[];for(const rn of nn)if(rn.beforeEnter)if(isArray(rn.beforeEnter))for(const yn of rn.beforeEnter)Vn.push(guardToPromiseFn(yn,vn,In));else Vn.push(guardToPromiseFn(rn.beforeEnter,vn,In));return Vn.push(tn),ne(Vn)}).then(()=>(vn.matched.forEach(rn=>rn.enterCallbacks={}),Vn=extractComponentsGuards(nn,"beforeRouteEnter",vn,In,xn),Vn.push(tn),ne(Vn))).then(()=>{Vn=[];for(const rn of E.list())Vn.push(guardToPromiseFn(rn,vn,In));return Vn.push(tn),ne(Vn)}).catch(rn=>isNavigationFailure(rn,ErrorTypes.NAVIGATION_CANCELLED)?rn:Promise.reject(rn))}function gn(vn,In,Vn){P.list().forEach(Fn=>xn(()=>Fn(vn,In,Vn)))}function cn(vn,In,Vn,Fn,Wn){const nn=un(vn,In);if(nn)return nn;const tn=In===START_LOCATION_NORMALIZED,rn=isBrowser?history.state:{};Vn&&(Fn||tn?w.replace(vn.fullPath,assign({scroll:tn&&rn&&rn.scroll},Wn)):w.push(vn.fullPath,Wn)),C.value=vn,Un(vn,In,Vn,tn),Xn()}let On;function En(){On||(On=w.listen((vn,In,Vn)=>{if(!Kn.listening)return;const Fn=pn(vn),Wn=Pn(Fn,Kn.currentRoute.value);if(Wn){An(assign(Wn,{replace:!0,force:!0}),Fn).catch(noop);return}M=Fn;const nn=C.value;isBrowser&&saveScrollPosition(getScrollKey(nn.fullPath,Vn.delta),computeScrollPosition()),Tn(Fn,nn).catch(tn=>isNavigationFailure(tn,ErrorTypes.NAVIGATION_ABORTED|ErrorTypes.NAVIGATION_CANCELLED)?tn:isNavigationFailure(tn,ErrorTypes.NAVIGATION_GUARD_REDIRECT)?(An(assign(an(tn.to),{force:!0}),Fn).then(rn=>{isNavigationFailure(rn,ErrorTypes.NAVIGATION_ABORTED|ErrorTypes.NAVIGATION_DUPLICATED)&&!Vn.delta&&Vn.type===NavigationType.pop&&w.go(-1,!1)}).catch(noop),Promise.reject()):(Vn.delta&&w.go(-Vn.delta,!1),_n(tn,Fn,nn))).then(tn=>{tn=tn||cn(Fn,nn,!1),tn&&(Vn.delta&&!isNavigationFailure(tn,ErrorTypes.NAVIGATION_CANCELLED)?w.go(-Vn.delta,!1):Vn.type===NavigationType.pop&&isNavigationFailure(tn,ErrorTypes.NAVIGATION_ABORTED|ErrorTypes.NAVIGATION_DUPLICATED)&&w.go(-1,!1)),gn(Fn,nn,tn)}).catch(noop)}))}let Ln=useCallbacks(),qn=useCallbacks(),Rn;function _n(vn,In,Vn){Xn(vn);const Fn=qn.list();return Fn.length?Fn.forEach(Wn=>Wn(vn,In,Vn)):console.error(vn),Promise.reject(vn)}function Gn(){return Rn&&C.value!==START_LOCATION_NORMALIZED?Promise.resolve():new Promise((vn,In)=>{Ln.add([vn,In])})}function Xn(vn){return Rn||(Rn=!vn,En(),Ln.list().forEach(([In,Vn])=>vn?Vn(vn):In()),Ln.reset()),vn}function Un(vn,In,Vn,Fn){const{scrollBehavior:Wn}=e;if(!isBrowser||!Wn)return Promise.resolve();const nn=!Vn&&getSavedScrollPosition(getScrollKey(vn.fullPath,0))||(Fn||!Vn)&&history.state&&history.state.scroll||null;return nextTick$1().then(()=>Wn(vn,In,nn)).then(tn=>tn&&scrollToPosition(tn)).catch(tn=>_n(tn,vn,In))}const Yn=vn=>w.go(vn);let Zn;const te=new Set,Kn={currentRoute:C,listening:!0,addRoute:Y,removeRoute:X,clearRoutes:a.clearRoutes,hasRoute:dn,getRoutes:en,resolve:pn,options:e,push:mn,replace:fn,go:Yn,back:()=>Yn(-1),forward:()=>Yn(1),beforeEach:x.add,beforeResolve:E.add,afterEach:P.add,onError:qn.add,isReady:Gn,install(vn){vn.component("RouterLink",RouterLink),vn.component("RouterView",RouterView),vn.config.globalProperties.$router=Kn,Object.defineProperty(vn.config.globalProperties,"$route",{enumerable:!0,get:()=>unref(C)}),isBrowser&&!Zn&&C.value===START_LOCATION_NORMALIZED&&(Zn=!0,mn(w.location).catch(Fn=>{}));const In={};for(const Fn in START_LOCATION_NORMALIZED)Object.defineProperty(In,Fn,{get:()=>C.value[Fn],enumerable:!0});vn.provide(routerKey,Kn),vn.provide(routeLocationKey,shallowReactive(In)),vn.provide(routerViewLocationKey,C);const Vn=vn.unmount;te.add(vn),vn.unmount=function(){te.delete(vn),te.size<1&&(M=START_LOCATION_NORMALIZED,On&&On(),On=null,C.value=START_LOCATION_NORMALIZED,Zn=!1,Rn=!1),Vn()}}};function ne(vn){return vn.reduce((In,Vn)=>In.then(()=>xn(Vn)),Promise.resolve())}return Kn}function useRouter(){return inject(routerKey)}function useRoute(e){return inject(routeLocationKey)}const _imports_0="/images/img-headshot.jpg",_imports_1="/images/icon-line.svg",_imports_2="/images/icon-github.svg",_imports_3="/images/icon-codepen.svg",_imports_4="/images/icon-instagram.svg";function t$1(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(a=>setTimeout(()=>{throw a}))}function o$3(){let e=[],a={addEventListener(f,_,w,x){return f.addEventListener(_,w,x),a.add(()=>f.removeEventListener(_,w,x))},requestAnimationFrame(...f){let _=requestAnimationFrame(...f);a.add(()=>cancelAnimationFrame(_))},nextFrame(...f){a.requestAnimationFrame(()=>{a.requestAnimationFrame(...f)})},setTimeout(...f){let _=setTimeout(...f);a.add(()=>clearTimeout(_))},microTask(...f){let _={current:!0};return t$1(()=>{_.current&&f[0]()}),a.add(()=>{_.current=!1})},style(f,_,w){let x=f.style.getPropertyValue(_);return Object.assign(f.style,{[_]:w}),this.add(()=>{Object.assign(f.style,{[_]:x})})},group(f){let _=o$3();return f(_),this.add(()=>_.dispose())},add(f){return e.push(f),()=>{let _=e.indexOf(f);if(_>=0)for(let w of e.splice(_,1))w()}},dispose(){for(let f of e.splice(0))f()}};return a}var r$1;let n$2=Symbol("headlessui.useid"),o$2=0;const i$2=(r$1=useId)!=null?r$1:function(){return inject(n$2,()=>`${++o$2}`)()};function o$1(e){var a;if(e==null||e.value==null)return null;let f=(a=e.value.$el)!=null?a:e.value;return f instanceof Node?f:null}function u(e,a,...f){if(e in a){let w=a[e];return typeof w=="function"?w(...f):w}let _=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(w=>`"${w}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(_,u),_}var i$1=Object.defineProperty,d$1=(e,a,f)=>a in e?i$1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[a]=f,n$1=(e,a,f)=>(d$1(e,typeof a!="symbol"?a+"":a,f),f);let s$2=class{constructor(){n$1(this,"current",this.detect()),n$1(this,"currentId",0)}set(a){this.current!==a&&(this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},c=new s$2;function r(e,a){if(e)return e;let f=a??"button";if(typeof f=="string"&&f.toLowerCase()==="button")return"button"}function s$1(e,a){let f=ref(r(e.value.type,e.value.as));return onMounted(()=>{f.value=r(e.value.type,e.value.as)}),watchEffect(()=>{var _;f.value||o$1(a)&&o$1(a)instanceof HTMLButtonElement&&!((_=o$1(a))!=null&&_.hasAttribute("type"))&&(f.value="button")}),f}var N$2=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(N$2||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function A({visible:e=!0,features:a=0,ourProps:f,theirProps:_,...w}){var x;let E=j(_,f),P=Object.assign(w,{props:E});if(e||a&2&&E.static)return y(P);if(a&1){let C=(x=E.unmount)==null||x?0:1;return u(C,{0(){return null},1(){return y({...w,props:{...E,hidden:!0,style:{display:"none"}}})}})}return y(P)}function y({props:e,attrs:a,slots:f,slot:_,name:w}){var x,E;let{as:P,...C}=T$1(e,["unmount","static"]),M=(x=f.default)==null?void 0:x.call(f,_),B={};if(_){let q=!1,J=[];for(let[Y,X]of Object.entries(_))typeof X=="boolean"&&(q=!0),X===!0&&J.push(Y);q&&(B["data-headlessui-state"]=J.join(" "))}if(P==="template"){if(M=b(M??[]),Object.keys(C).length>0||Object.keys(a).length>0){let[q,...J]=M??[];if(!v(q)||J.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${w} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(C).concat(Object.keys(a)).map(en=>en.trim()).filter((en,dn,pn)=>pn.indexOf(en)===dn).sort((en,dn)=>en.localeCompare(dn)).map(en=>`  - ${en}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(en=>`  - ${en}`).join(`
`)].join(`
`));let Y=j((E=q.props)!=null?E:{},C,B),X=cloneVNode(q,Y,!0);for(let en in Y)en.startsWith("on")&&(X.props||(X.props={}),X.props[en]=Y[en]);return X}return Array.isArray(M)&&M.length===1?M[0]:M}return h(P,Object.assign({},C,B),{default:()=>M})}function b(e){return e.flatMap(a=>a.type===Fragment?b(a.children):[a])}function j(...e){if(e.length===0)return{};if(e.length===1)return e[0];let a={},f={};for(let _ of e)for(let w in _)w.startsWith("on")&&typeof _[w]=="function"?(f[w]!=null||(f[w]=[]),f[w].push(_[w])):a[w]=_[w];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(f).map(_=>[_,void 0])));for(let _ in f)Object.assign(a,{[_](w,...x){let E=f[_];for(let P of E){if(w instanceof Event&&w.defaultPrevented)return;P(w,...x)}}});return a}function T$1(e,a=[]){let f=Object.assign({},e);for(let _ of a)_ in f&&delete f[_];return f}function v(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let n=Symbol("Context");var i=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(i||{});function s(){return l$1()!==null}function l$1(){return inject(n,null)}function t(e){provide(n,e)}var o=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(o||{}),$=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))($||{});let T=Symbol("DisclosureContext");function O(e){let a=inject(T,null);if(a===null){let f=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,O),f}return a}let k=Symbol("DisclosurePanelContext");function U(){return inject(k,null)}let N$1=defineComponent({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:a,attrs:f}){let _=ref(e.defaultOpen?0:1),w=ref(null),x=ref(null),E={buttonId:ref(`headlessui-disclosure-button-${i$2()}`),panelId:ref(`headlessui-disclosure-panel-${i$2()}`),disclosureState:_,panel:w,button:x,toggleDisclosure(){_.value=u(_.value,{0:1,1:0})},closeDisclosure(){_.value!==1&&(_.value=1)},close(P){E.closeDisclosure();let C=P?P instanceof HTMLElement?P:P.value instanceof HTMLElement?o$1(P):o$1(E.button):o$1(E.button);C?.focus()}};return provide(T,E),t(computed(()=>u(_.value,{0:i.Open,1:i.Closed}))),()=>{let{defaultOpen:P,...C}=e,M={open:_.value===0,close:E.close};return A({theirProps:C,ourProps:{},slot:M,slots:a,attrs:f,name:"Disclosure"})}}}),Q$1=defineComponent({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:a,slots:f,expose:_}){let w=O("DisclosureButton"),x=U(),E=computed(()=>x===null?!1:x.value===w.panelId.value);onMounted(()=>{E.value||e.id!==null&&(w.buttonId.value=e.id)}),onUnmounted(()=>{E.value||(w.buttonId.value=null)});let P=ref(null);_({el:P,$el:P}),E.value||watchEffect(()=>{w.button.value=P.value});let C=s$1(computed(()=>({as:e.as,type:a.type})),P);function M(){var J;e.disabled||(E.value?(w.toggleDisclosure(),(J=o$1(w.button))==null||J.focus()):w.toggleDisclosure())}function B(J){var Y;if(!e.disabled)if(E.value)switch(J.key){case o.Space:case o.Enter:J.preventDefault(),J.stopPropagation(),w.toggleDisclosure(),(Y=o$1(w.button))==null||Y.focus();break}else switch(J.key){case o.Space:case o.Enter:J.preventDefault(),J.stopPropagation(),w.toggleDisclosure();break}}function q(J){J.key===o.Space&&J.preventDefault()}return()=>{var J;let Y={open:w.disclosureState.value===0},{id:X,...en}=e,dn=E.value?{ref:P,type:C.value,onClick:M,onKeydown:B}:{id:(J=w.buttonId.value)!=null?J:X,ref:P,type:C.value,"aria-expanded":w.disclosureState.value===0,"aria-controls":w.disclosureState.value===0||o$1(w.panel)?w.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:M,onKeydown:B,onKeyup:q};return A({ourProps:dn,theirProps:en,slot:Y,attrs:a,slots:f,name:"DisclosureButton"})}}}),V=defineComponent({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:a,slots:f,expose:_}){let w=O("DisclosurePanel");onMounted(()=>{e.id!==null&&(w.panelId.value=e.id)}),onUnmounted(()=>{w.panelId.value=null}),_({el:w.panel,$el:w.panel}),provide(k,w.panelId);let x=l$1(),E=computed(()=>x!==null?(x.value&i.Open)===i.Open:w.disclosureState.value===0);return()=>{var P;let C={open:w.disclosureState.value===0,close:w.close},{id:M,...B}=e,q={id:(P=w.panelId.value)!=null?P:M,ref:w.panel};return A({ourProps:q,theirProps:B,slot:C,attrs:a,slots:f,features:N$2.RenderStrategy|N$2.Static,visible:E.value,name:"DisclosurePanel"})}}});function l(e){let a={called:!1};return(...f)=>{if(!a.called)return a.called=!0,e(...f)}}function m(e,...a){e&&a.length>0&&e.classList.add(...a)}function d(e,...a){e&&a.length>0&&e.classList.remove(...a)}var g$1=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(g$1||{});function F(e,a){let f=o$3();if(!e)return f.dispose;let{transitionDuration:_,transitionDelay:w}=getComputedStyle(e),[x,E]=[_,w].map(P=>{let[C=0]=P.split(",").filter(Boolean).map(M=>M.includes("ms")?parseFloat(M):parseFloat(M)*1e3).sort((M,B)=>B-M);return C});return x!==0?f.setTimeout(()=>a("finished"),x+E):a("finished"),f.add(()=>a("cancelled")),f.dispose}function L$1(e,a,f,_,w,x){let E=o$3(),P=x!==void 0?l(x):()=>{};return d(e,...w),m(e,...a,...f),E.nextFrame(()=>{d(e,...f),m(e,..._),E.add(F(e,C=>(d(e,..._,...a),m(e,...w),P(C))))}),E.add(()=>d(e,...a,...f,..._,...w)),E.add(()=>P("cancelled")),E.dispose}function g(e=""){return e.split(/\s+/).filter(a=>a.length>1)}let R=Symbol("TransitionContext");var pe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(pe||{});function me(){return inject(R,null)!==null}function Te(){let e=inject(R,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function ge(){let e=inject(N,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let N=Symbol("NestingContext");function L(e){return"children"in e?L(e.children):e.value.filter(({state:a})=>a==="visible").length>0}function Q(e){let a=ref([]),f=ref(!1);onMounted(()=>f.value=!0),onUnmounted(()=>f.value=!1);function _(x,E=S.Hidden){let P=a.value.findIndex(({id:C})=>C===x);P!==-1&&(u(E,{[S.Unmount](){a.value.splice(P,1)},[S.Hidden](){a.value[P].state="hidden"}}),!L(a)&&f.value&&e?.())}function w(x){let E=a.value.find(({id:P})=>P===x);return E?E.state!=="visible"&&(E.state="visible"):a.value.push({id:x,state:"visible"}),()=>_(x,S.Unmount)}return{children:a,register:w,unregister:_}}let W=N$2.RenderStrategy,he=defineComponent({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:a,attrs:f,slots:_,expose:w}){let x=ref(0);function E(){x.value|=i.Opening,a("beforeEnter")}function P(){x.value&=~i.Opening,a("afterEnter")}function C(){x.value|=i.Closing,a("beforeLeave")}function M(){x.value&=~i.Closing,a("afterLeave")}if(!me()&&s())return()=>h(Se,{...e,onBeforeEnter:E,onAfterEnter:P,onBeforeLeave:C,onAfterLeave:M},_);let B=ref(null),q=computed(()=>e.unmount?S.Unmount:S.Hidden);w({el:B,$el:B});let{show:J,appear:Y}=Te(),{register:X,unregister:en}=ge(),dn=ref(J.value?"visible":"hidden"),pn={value:!0},an=i$2(),un={value:!1},mn=Q(()=>{!un.value&&dn.value!=="hidden"&&(dn.value="hidden",en(an),M())});onMounted(()=>{let On=X(an);onUnmounted(On)}),watchEffect(()=>{if(q.value===S.Hidden&&an){if(J.value&&dn.value!=="visible"){dn.value="visible";return}u(dn.value,{hidden:()=>en(an),visible:()=>X(an)})}});let fn=g(e.enter),Pn=g(e.enterFrom),An=g(e.enterTo),sn=g(e.entered),xn=g(e.leave),Tn=g(e.leaveFrom),gn=g(e.leaveTo);onMounted(()=>{watchEffect(()=>{if(dn.value==="visible"){let On=o$1(B);if(On instanceof Comment&&On.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function cn(On){let En=pn.value&&!Y.value,Ln=o$1(B);!Ln||!(Ln instanceof HTMLElement)||En||(un.value=!0,J.value&&E(),J.value||C(),On(J.value?L$1(Ln,fn,Pn,An,sn,qn=>{un.value=!1,qn===g$1.Finished&&P()}):L$1(Ln,xn,Tn,gn,sn,qn=>{un.value=!1,qn===g$1.Finished&&(L(mn)||(dn.value="hidden",en(an),M()))})))}return onMounted(()=>{watch([J],(On,En,Ln)=>{cn(Ln),pn.value=!1},{immediate:!0})}),provide(N,mn),t(computed(()=>u(dn.value,{visible:i.Open,hidden:i.Closed})|x.value)),()=>{let{appear:On,show:En,enter:Ln,enterFrom:qn,enterTo:Rn,entered:_n,leave:Gn,leaveFrom:Xn,leaveTo:Un,...Yn}=e,Zn={ref:B},te={...Yn,...Y.value&&J.value&&c.isServer?{class:normalizeClass([f.class,Yn.class,...fn,...Pn])}:{}};return A({theirProps:te,ourProps:Zn,slot:{},slots:_,attrs:f,features:W,visible:dn.value==="visible",name:"TransitionChild"})}}}),ce=he,Se=defineComponent({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:a,attrs:f,slots:_}){let w=l$1(),x=computed(()=>e.show===null&&w!==null?(w.value&i.Open)===i.Open:e.show);watchEffect(()=>{if(![!0,!1].includes(x.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let E=ref(x.value?"visible":"hidden"),P=Q(()=>{E.value="hidden"}),C=ref(!0),M={show:x,appear:computed(()=>e.appear||!C.value)};return onMounted(()=>{watchEffect(()=>{C.value=!1,x.value?E.value="visible":L(P)||(E.value="hidden")})}),provide(N,P),provide(R,M),()=>{let B=T$1(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),q={unmount:e.unmount};return A({ourProps:{...q,as:"template"},theirProps:{},slot:{},slots:{..._,default:()=>[h(ce,{onBeforeEnter:()=>a("beforeEnter"),onAfterEnter:()=>a("afterEnter"),onBeforeLeave:()=>a("beforeLeave"),onAfterLeave:()=>a("afterLeave"),...f,...q,...B},_.default)]},attrs:{},features:W,visible:E.value==="visible",name:"Transition"})}}});const useUIStore=defineStore("ui",()=>{const e=ref(!1);return{menuShow:e,openMenu:()=>{e.value||(e.value=!0)},closeMenu:()=>{e.value&&(e.value=!1)},toggleMenu:()=>{e.value=!e.value}}}),_hoisted_1$3={class:"fixed left-0 right-0 z-3"},_hoisted_2$2={class:"@container flex justify-end"},_hoisted_3$2={class:"border-b pb-4 mb-4"},_sfc_main$3={__name:"BlogNavbar",setup(e){const a=useUIStore(),f=useRoute(),_=ref(!1),w=()=>{_.value=window.scrollY>100};watch(()=>f.fullPath,()=>{a.closeMenu()});const x=ref(null),E=ref(null),P=C=>{a.menuShow&&(x.value&&x.value.contains(C.target)||E.value&&E.value.contains(C.target)||a.closeMenu())};return onMounted(()=>{document.addEventListener("click",P),window.addEventListener("scroll",w,{passive:!0})}),onUnmounted(()=>{document.removeEventListener("click",P),window.removeEventListener("scroll",w)}),(C,M)=>{const B=resolveComponent("router-link");return openBlock(),createElementBlock("div",_hoisted_1$3,[createBaseVNode("div",_hoisted_2$2,[createBaseVNode("button",{type:"button",class:normalizeClass(["group navbar-toggler p-3 m-2",[_.value?"scrolled":"",unref(a).menuShow?"active ":""]]),onClick:M[0]||(M[0]=q=>unref(a).toggleMenu()),ref_key:"toggleButtonRef",ref:E},[...M[1]||(M[1]=[createBaseVNode("span",{class:"navbar-toggler-line"},null,-1),createBaseVNode("span",{class:"navbar-toggler-line group-hover:w-5 group-hover:bg-emerald-700"},null,-1),createBaseVNode("span",{class:"navbar-toggler-line group-hover:w-6"},null,-1)])],2),createVNode(unref(Se),{show:unref(a).menuShow,enter:"transition-transform duration-500",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition-transform duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",class:"fixed top-0 bottom-0 right-0 w-full md:w-64 transition-all"},{default:withCtx(()=>[createBaseVNode("nav",{class:"h-full bg-neutral-800/95 py-30 flex items-center flex-col",ref_key:"menuRef",ref:x},[M[5]||(M[5]=createBaseVNode("div",{class:"lg:hidden flex flex-col items-center border-b pb-4 mb-4"},[createBaseVNode("div",{class:"relative block w-20 h-20 rounded-full overflow-hidden border-3 border-white mb-3"},[createBaseVNode("img",{class:"scale-800 -translate-y-8",src:_imports_0,alt:"黃俊傑的個人大頭照"})]),createBaseVNode("h3",{class:"text-white text-xl text-shadow-lg text-nowrap"},[createTextVNode(" 黃俊傑 "),createBaseVNode("span",{class:"text-white text-xs text-shadow-lg text-nowrap"},"Jack Huang")])],-1)),createBaseVNode("ul",_hoisted_3$2,[createBaseVNode("li",null,[createVNode(B,{to:"/",class:"block text-neutral-200 group hover:text-emerald-700 py-4 px-4"},{default:withCtx(()=>[...M[2]||(M[2]=[createTextVNode(" 部落格 / ",-1),createBaseVNode("span",{class:"text-neutral-300 text-xs group-hover:text-emerald-700"},"Articles",-1)])]),_:1})]),createBaseVNode("li",null,[createVNode(B,{to:"/project",class:"block text-neutral-200 group hover:text-emerald-700 py-4 px-4"},{default:withCtx(()=>[...M[3]||(M[3]=[createTextVNode(" 作品集 / ",-1),createBaseVNode("span",{class:"text-neutral-300 text-xs group-hover:text-emerald-700"},"Portfolio",-1)])]),_:1})]),createBaseVNode("li",null,[createVNode(B,{to:"/about",class:"block text-neutral-200 group hover:text-emerald-700 py-4 px-4"},{default:withCtx(()=>[...M[4]||(M[4]=[createTextVNode(" 關於我 / ",-1),createBaseVNode("span",{class:"text-neutral-300 text-xs group-hover:text-emerald-700"},"About",-1)])]),_:1})])]),M[6]||(M[6]=createBaseVNode("ul",{class:"lg:hidden mt-auto w-40 flex justify-between"},[createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden block text-sm text-center w-7 hover:bg-emerald-700 rounded-full z-10",href:"https://line.me/ti/p/yTrfJgiVIC",target:"_blank"},[createBaseVNode("img",{class:"invert",src:_imports_1,alt:"黃俊傑的個人Line頁面"})])]),createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden block text-sm text-center w-7 hover:bg-emerald-700 rounded-full z-10",href:"https://github.com/jack842248?tab=repositories",target:"_blank"},[createBaseVNode("img",{class:"invert",src:_imports_2,alt:"黃俊傑的個人Github頁面"})])]),createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden block text-sm text-center w-7 hover:bg-emerald-700 rounded-full z-10",href:"https://codepen.io/jack842248/pens/popular",target:"_blank"},[createBaseVNode("img",{class:"invert",src:_imports_3,alt:"黃俊傑的個人Codepen頁面"})])]),createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden block text-sm text-center w-7 hover:bg-emerald-700 rounded-full z-10",href:"https://www.instagram.com/jack842248/",target:"_blank"},[createBaseVNode("img",{class:"invert",src:_imports_4,alt:"黃俊傑的個人Instagram頁面"})])])],-1))],512)]),_:1},8,["show"])])])}}},Axios_API_Token_cookie__=`---
title: Axios打API後Token存cookie範例
date: 2026-03-29
tags: ["Vue3"]
---
## 註冊
\`\`\`vue
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const signupField = ref({
    email: '',
    password: '',
    nickname: '',
})

//顯示打api的結果訊息
const signRes = ref('')

const signup = async () => {
    try {
        const res = await axios.post(\`\${網址}/users/sign_up\`, signupField.value)
    } catch (error) {
        signRes.value = error.response?.data?.message
    }
}
<\/script>
\`\`\`

-----------------------------------------------
## 登入

此範例情境為：登入帳號成功時會取得Token，為了下一次不用再輸入帳號密碼，將此通行證(Token)存在瀏覽器上，這樣一來下一次進入到此頁面，就可以先去驗證是否存有Token，若驗證成功了，就直接省略登入流程。
* expDate：Token過期時間，若拿到"秒數值"，例如：1774771424，必須先轉為毫秒，在使用\`toUTCString\`轉成cookie可讀的格式，例如：Tue, 26 Mar 2026 08:30:00 GMT

\`\`\`vue
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const signinField = ref({
    email: '',
    password: '',
})

const signRes = ref('')

const signin = async () => {
    try {
        const res = await axios.post(\`\${網址}/users/sign_in\`, signinField.value)
        signRes.value = res.data.token
        const expDate = new Date(res.data.exp * 1000)
        document.cookie = 
        \` 
          exampleToken=\${res.data.token};
          expires=\${expDate.toUTCString()};
          path=/
        \`
    } catch (error) {
        signRes.value = error.response?.data?.message
    }
}
<\/script>
\`\`\`

-----------------------------------------------
## 驗證

在一進入頁面時把cookie拿去打api，看是否該Token是否還可通行

\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted( async()=> {
    //取得cookie的正規式
    const token = document.cookie.replace(/(?:(?:^|.*;\\s*)test2\\s*\\=\\s*([^;]*).*$)|^.*$/, '$1')
    try {
        const res = await axios.get(\`\${網址}/users/checkout\`, {
            headers: {
                Authorization: token,
            },
        })
        signRes.value = res.data.token
    } catch (error) {
        signRes.value = error.response?.data?.message
    }
})
<\/script>
\`\`\`

`,__vite_glob_0_0=Object.freeze(Object.defineProperty({__proto__:null,default:Axios_API_Token_cookie__},Symbol.toStringTag,{value:"Module"})),BOM_____=`---
title: 操作BOM瀏覽器物件
date: 2021-02-08
tags: ["JavaScript"]
---
## BOM(Browser Object Model)
* 瀏覽器(window)提供的物件原型。

|名稱|中文|
|---|---|
|history|瀏覽歷史紀錄|
|frames|框架|
|location|路徑位置|
|document|DOM元素|
|screen|使用裝置資訊|
|navigator|版本資訊|

-----------------------------------------------
## 回到上一頁、下一頁
\`\`\`html
<button class="back" type="button">回上一頁</button>
<button class="next" type="button">往下一頁</button>
\`\`\`
\`\`\`js
let back = document.querySelector(".back");
let next = document.querySelector(".next");

//點擊"回上一頁"按鈕時
back.addEventListener("click",function(){
  window.history.back();
})

//點擊"往下一頁"按鈕時
next.addEventListener("click",function(){
  window.history.forward();
})
\`\`\`

-----------------------------------------------
## 列印
\`\`\`html
<button class="print" type="button">列印</button>
\`\`\`
\`\`\`js
let print = document.querySelector(".print");

print.addEventListener("click",function(){
  window.print();
})
\`\`\`
\`跟對網頁按右鍵"列印"一樣\`

-----------------------------------------------
## 前往網址
\`\`\`html
<button class="toLink" type="button">網址</button>
\`\`\`
\`\`\`js
//範例一
let toLink1 = document.querySelector(".toLink");
toLink1.addEventListener("click",function(){
  window.open("https://www.google.com.tw/");
})

//範例二
let toLink2 = document.querySelector(".toLink");
toLink2.addEventListener("click",function(){
  location.href = "https://www.google.com.tw/";
})
\`\`\`

-----------------------------------------------
## 讓banner佔滿整個視窗高度
|方法|說明|
|---|---|
|window.innerHeight|可以取得瀏覽器可視高度|
|window.outerHeight|可以取得整個瀏覽器高度|
|window.onresize|當拖動瀏覽器時觸發|

\`\`\`html
<div class="banner"></div>
\`\`\`
\`\`\`css
.banner{
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1731466450638-959a6f0d1514?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
\`\`\`
\`\`\`js
let banner = document.querySelector(".banner");

banner.style.height = window.innerHeight+"px";

window.onresize = function(){
  banner.style.height = window.innerHeight+"px";
}
\`\`\``,__vite_glob_0_1=Object.freeze(Object.defineProperty({__proto__:null,default:BOM_____},Symbol.toStringTag,{value:"Module"})),Bootstrap4____=`---
title: Bootstrap4實作元件
date: 2022-04-07
tags: ["CSS"]
---
## 提示訊息(Alert)
\`\`\`html
<div class="alert alert-{color} alert-dismissible show">
   提示訊息
  <button type="button" class="close" data-dismiss="alert">
    <span>&times;</span>
  </button>
</div>
\`\`\`
\`點擊Ｘ關閉效果，需載入bootstrap的js\`

-----------------------------------------------
## 小徽章(Badge)
\`\`\`html
<a href="#" class="badge badge-{color}">文字內容</a>
\`\`\`
\`\`\`html
<span class="badge badge-{color}">文字內容</span>
\`\`\`
\`加.badge-pill可以讓徽章更圓潤\`

-----------------------------------------------
## 麵包屑(Breakcrumb)
\`\`\`html
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">首頁</a></li>
  <li class="breadcrumb-item"><a href="#">圖書館</a></li>
  <li class="breadcrumb-item active">資料</li>
</ol>
\`\`\`
\`\`\`html
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">首頁</a>
  <a class="breadcrumb-item" href="#">圖書館</a>
  <a class="breadcrumb-item active" href="#">資料</a>
</nav>
\`\`\`
\`修改分隔符號.breadcrumb-item::before{content:"/"}\`

-----------------------------------------------
## 按鈕(Button)
\`\`\`html
<button type="button" class="btn btn-{color} btn-{size}">按鈕</button>
\`\`\`
\`\`\`html
<a class="btn btn-{color} btn-{size}" href="#">連結按鈕</a>
\`\`\`
\`\`\`html
<input class="btn btn-{color} btn-{size}" type="button" value="按鈕">
\`\`\`
\`{size}可填sm、lg、block(撐滿容器)，.disabled不能點擊狀態\`

-----------------------------------------------
## 按鈕群組(Button Group)
\`\`\`html
<div class="btn-group btn-group-{size}">
  <button type="button" class="btn btn-{color}">按鈕1</button>
  <button type="button" class="btn btn-{color}">按鈕2</button>
  <button type="button" class="btn btn-{color}">按鈕3</button>
</div>
\`\`\`

-----------------------------------------------
## 卡片(Card)
### 一般卡片結構
\`\`\`html
<div class="card" style="width:{size}">
  <img src="..." class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">標題</h5>
    <p class="card-text">內容文字</p>
    <a href="#" class="btn btn-{color}">按鈕</a>
  </div>
</div>
\`\`\`
\`.card有border可用來包裹物件可加入h-100撐開高度，.card-body有padding\`
### 頁籤卡片結構
\`\`\`html
<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">頁籤一</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">頁籤二</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">頁籤三</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">標題</h5>
    <p class="card-text">內容文字</p>
    <a href="#" class="btn btn-{color}">按鈕</a>
  </div>
</div>
\`\`\`
\`增加.active樣式表示正在哪個頁籤上\`
### 卡片群組
\`\`\`html
<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
</div>
\`\`\`
\`.card-group可更換成.card-deck或.card-column(瀑布流)\`

-----------------------------------------------
## 輪播(Carousel)
\`\`\`html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item carousel-height bg-cover active" style="background-image:url(...)"></div>
    <div class="carousel-item carousel-height bg-cover" style="background-image:url(...)"></div>
    <div class="carousel-item carousel-height bg-cover" style="background-image:url(...)"></div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
\`\`\`
\`\`\`css
.bg-cover{
  background-size: cover;
  background-position: center center;
}
.carousel-height{
  height: 450px;
}
\`\`\`
\`.active預設輪播項目\`
\`在.carousel加入.data-interval="1000"每1秒跳下一張\`
\`在.carousel加入.data-wrap="false"跳到最後一張時不會再跳回第一張\`
\`\`\`js
$(".carousel").carousel({
  interval: 1000,
  wrap: false
});
\`\`\`

-----------------------------------------------
## 折疊(Collapse)
\`\`\`html
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#one">折疊ㄧ</button>
    </div>
    <div id="one" class="collapse show" data-parent="#accordionExample">
      <div class="card-body">內容文字1</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#two">折疊二</button>
    </div>
    <div id="two" class="collapse" data-parent="#accordionExample">
      <div class="card-body">內容文字2</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#three">折疊三</button>
    </div>
    <div id="three" class="collapse" data-parent="#accordionExample">
      <div class="card-body">內容文字3</div>
    </div>
  </div>
</div>
\`\`\`
\`.show預設展開內容\`

-----------------------------------------------
## 下拉選單(Dropdown)
\`\`\`html
<div class="dropdown">
  <button class="btn btn-{color} dropdown-toggle" type="button" data-toggle="dropdown">下拉標題</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">項目一</a>
    <a class="dropdown-item" href="#">項目二</a>
    <a class="dropdown-item" href="#">項目三</a>
  </div>
</div>
\`\`\`

-----------------------------------------------
## 表單(Forms)
\`\`\`html
<form>
  <div class="form-row">
    <div class="col">
      <label for="firstname">姓</label>
      <input type="text" class="form-control" id="firstname" placeholder="請輸入姓氏">
    </div>
    <div class="col">
      <label for="lastname">名</label>
      <input type="text" class="form-control" id="lastname" placeholder="請輸入名字">
    </div>
  </div>
  <div class="form-group">
    <label for="email">聯絡信箱</label>
    <input type="email" class="form-control" id="email" placeholder="請輸入電子信箱">
  </div>
  <div class="form-group">
    <label for="phone">聯絡電話</label>
    <input type="tel" class="form-control" id="phone" placeholder="請輸入手機號碼">
  </div>
  <div class="form-group">
    <label for="question">問題類型</label>
    <select class="form-control" id="question">
      <option>選項一</option>
      <option>選項二</option>
      <option>選項三</option>
    </select>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">核選方塊</label>
  </div>
  <div class="form-group">
    <label for="content">內容訊息</label>
    <textarea class="form-control" id="content" rows="3"></textarea>
  </div>
</form>
\`\`\`

-----------------------------------------------
## 聯絡表單(Forms)
\`\`\`html
<form>
  <div class="form-row">
    <div class="col">
      <label for="firstname">姓</label>
      <input type="text" class="form-control form-control-{size}" id="firstname" placeholder="請輸入姓氏">
    </div>
    <div class="col">
      <label for="lastname">名</label>
      <input type="text" class="form-control form-control-{size}" id="lastname" placeholder="請輸入名字">
    </div>
  </div>
  <div class="form-group">
    <label for="email">聯絡信箱</label>
    <input type="email" class="form-control form-control-{size}" id="email" placeholder="請輸入電子信箱">
  </div>
  <div class="form-group">
    <label for="phone">聯絡電話</label>
    <input type="tel" class="form-control form-control-{size}" id="phone" placeholder="請輸入手機號碼">
  </div>
  <div class="form-group">
    <label for="question">問題類型</label>
    <select class="form-control form-control-{size}" id="question">
      <option>選項一</option>
      <option>選項二</option>
      <option>選項三</option>
    </select>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">核選方塊</label>
  </div>
  <div class="form-group">
    <label for="content">內容訊息</label>
    <textarea class="form-control" id="content" rows="3"></textarea>
  </div>
  <button class="btn btn-{color}" type="submit">送出</button>
</form>
\`\`\`
### 驗證表單
\`\`\`html

<form action="..." class="needs-validation" novalidate>
  <div class="form-group">
      <label for="username">姓名*</label>
      <input type="text" class="form-control" id="username" placeholder="請輸入姓名" required>
      <div class="invalid-feedback">請填寫此欄位</div>
  </div>
  <div class="form-group">
      <label for="phonenumber">請輸入電話號碼*</label>
      <input type="tel" class="form-control" id="phonenumber" placeholder="請輸入電話號碼" required>
      <div class="invalid-feedback">請填寫此欄位</div>
  </div>
  <div class="form-group">
      <label for="email">請輸入Email*</label>
      <input type="email" class="form-control" id="email" placeholder="name@examlpe.com" required>
  </div>
  <div class="custom-control custom-radio">
      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" required>
      <label class="custom-control-label" for="customRadio1">需要素食</label>
  </div>
  <div class="custom-control custom-radio">
      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" required>
      <label class="custom-control-label" for="customRadio2">不需要素食</label>
      <div class="invalid-feedback">請選擇是否素食</div>
  </div>
  <div class="text-right">
      <button type="button" class="btn btn-secondary">取消</button>
      <button type="submit" class="btn btn-primary">送出</button>
  </div>
</form>
\`\`\`
\`\`\`js
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
\`\`\`
\`在<form>加入.needs-validation和novalidate可增加驗證表單功能\`

-----------------------------------------------
## 輸入群組(Input group)
\`\`\`html
<div class="input-group input-group-{size}">
  <div class="input-group-prepend">
    <span class="input-group-text">請輸入金額</span>
  </div>
  <input type="text" class="form-control">
  <div class="input-group-append">
    <span class="input-group-text">美元(USD)</span>
  </div>
</div>
\`\`\`
\`.input-group會滿版，可在外層加入.form-inline\`

-----------------------------------------------
## 超大看板(Jumbotron)
\`\`\`html
<div class="jumbotron">
  <h1 class="display-{num}">標題</h1>
  <p class="lead">內容文字</p>
  <a class="btn btn-{color}" href="#">按鈕</a>
</div>
\`\`\`
\`增加.jumbotron-fluid可以取消圓角\`

-----------------------------------------------
## 清單群組(List Group)
\`\`\`html
<div class="row">
  <div class="col-4">
    <div class="list-group">
      <a class="list-group-item list-group-item-action active" data-toggle="list" href="#one">選項一</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#two">選項二</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#three">選項三</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#four">選項四</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content">
      <div class="tab-pane show active" id="one">內容文字1</div>
      <div class="tab-pane" id="two">內容文字2</div>
      <div class="tab-pane" id="three">內容文字3</div>
      <div class="tab-pane" id="four">內容文字4</div>
    </div>
  </div>
</div>
\`\`\`
\`.active表示目前點擊，.show預設展開\`

-----------------------------------------------
## 媒體對象(Media Object)
\`\`\`html
<div class="media">
  <img src="...">
  <div class="media-body">
    <h5>標題</h5>
    內容文字
  </div>
</div>
\`\`\`

-----------------------------------------------
## 進入頁面彈出視窗(Modal)
\`\`\`html
<!-- 增加data-backdrop="static"點擊modal以外不會關閉 -->
<div class="modal fade" data-backdrop="static" id="myModal">
  <!-- modal-lg 調整modal大小 -->
  <div class="modal-dialog">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title">標題</h5>
        <!-- data-dismiss="modal" 關閉modal -->
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">內容文字</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-{color}" data-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-{color}">確定</button>
      </div>
    </div>
  </div>
</div>
\`\`\`
\`\`\`js
setTimeout(function(){
  $("myModal").modal("show");
},5000);
\`\`\`

-----------------------------------------------
## 按鈕註冊視窗
\`\`\`html
<!-- 按鈕 -->
<a href="#" class="btn btn-outline-primary mr-2" data-toggle="modal" data-target="#loginmodal">登入</a>
<a href="#" class="btn btn-primary px-4" data-toggle="modal" data-target="#signinmodal">註冊</a>
<!-- 登入視窗 -->
<div class="modal fade" id="loginmodal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="staticBackdropLabel">登入服務</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form>
                    <div class="form-group">
                        <label for="loginemail">Email</label>
                        <input type="email" class="form-control" id="loginemail"
                            aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">我們絕不會隨意將你的 email 給予第三者</small>
                    </div>
                    <div class="form-group">
                        <label for="loginpassword">密碼</label>
                        <input type="password" class="form-control" id="loginpassword" placeholder="Password">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="remember">
                        <label class="form-check-label" for="remember">記住帳號</label>
                    </div>
                    <div class="modal-footer pt-3 p-0">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#signinmodal">還沒有帳號了？</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">登入</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- 註冊視窗 -->
<div class="modal fade" id="signinmodal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <h5 class="modal-title" id="staticBackdropLabel">註冊服務</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="font-weight-bold text-secondary">註冊六角西餐廳</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem omnis, voluptatibus harum asperiores exercitationem, vel maxime sequi eum suscipit quisquam laborum laudantium dolore? Quis rem est illo quam assumenda.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem omnis, voluptatibus harum asperiores exercitationem, vel maxime sequi eum suscipit quisquam laborum laudantium dolore? Quis rem est illo quam assumenda.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="signinemail">Email</label>
                                <input type="email" class="form-control" id="signinemail"
                                    aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">我們絕不會隨意將你的 email 給予第三者</small>
                            </div>
                            <div class="form-group">
                                <label for="signinpassword">密碼</label>
                                <input type="password" class="form-control" id="signinpassword" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="signinpassword2">確認密碼</label>
                                <input type="password" class="form-control" id="signinpassword2" placeholder="Password">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="agree">
                                <label class="form-check-label" for="agree">同意條款</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer pt-3 p-0">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#loginmodal">已經有帳號了？</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">註冊</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
\`\`\`
\`\`\`js
$(document).ready(function(){
            $("a[data-dismiss='modal'][data-toggle='modal']").on("click",function(){
                let target = $(this).data("target");
                $(target).on("shown.bs.modal",function(){
                    $("body").addClass("modal-open");
                });  
            });
        });
\`\`\`
\`model切換時<body>要加上.modal-open手機版才能捲軸滑動\`

-----------------------------------------------
## 導覽(Nav)
\`\`\`html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <button class="nav-link active" data-toggle="tab" data-target="#one" type="button">選項一</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-toggle="tab" data-target="#two" type="button">選項二</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-toggle="tab" data-target="#three" type="button">選項三</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="one">內容文字1</div>
  <div class="tab-pane fade" id="two">內容文字2</div>
  <div class="tab-pane fade" id="three">內容文字3</div>
</div>
\`\`\`

-----------------------------------------------
## 導覽列(Navbar)
\`\`\`html
<!-- .navbar-expand-lg 超過lg寬度就展開 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#one">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="one">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">連結一</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">連結二</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">連結三</a>
      </li>
    </ul>
    <!-- .form-inline 並排不伸展 -->
    <form class="form-inline">
      <input class="form-control" type="search" placeholder="搜尋">
      <button class="btn btn-primary" type="submit">搜尋</button>
    </form>
  </div>
</nav>
\`\`\`
\`若要將選單連結向右推，在<ul>上加上.ml-auto\`

-----------------------------------------------
## 分頁(Pagination)
\`\`\`html
<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <span>&laquo;</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
\`\`\`

-----------------------------------------------
## 時間軸(Timeline)
\`\`\`html
<div class="container">
  <div class="timeline">
    <div class="timepoint"></div>
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-sm-right">標題</h2>
        <p class="text-sm-right">內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
  <div class="timeline">
    <div class="timepoint"> </div>
    <div class="row flex-sm-row-reverse">
      <div class="col-sm-6">
        <h2 class="title">標題</h2>
        <p>內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
  <div class="timeline">
    <div class="timepoint"> </div>
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-sm-right">標題</h2>
        <p class="text-sm-right">內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
</div>
\`\`\`
\`\`\`css
.timeline{
  position: relative;
}

.timeline:after{
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 3px);
  width: 3px;
  background-color: #dddddd;
}

.timepoint{
  position: relative;
}

.timepoint:after{
  content: " ";
  position: absolute;
  left: calc(50% - 6.5px);
  width: 10px;
  height: 10px;
  border: solid 3px #dddddd;
  border-radius: 100%;
  background-color: #fff;
  z-index: 1;
}
\`\`\`

-----------------------------------------------
## 表格(table)
\`\`\`html
<table class="table table-responsive-sm">
    <thead>
        <tr>
            <th width="50">日期</th>
            <th width="80">訂單數</th>
            <th>營業額</th>
            <th>淨利潤</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9/1</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
        <tr>
            <td>9/2</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
        <tr>
            <td>9/3</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th class="text-right" colspan="6">月總營收</td>
            <td class="text-right">3,750,500</td>
        </tr>
        <tr>
            <th class="text-right" colspan="6">月總淨利潤</td>
            <td class="text-right">2,140,500</td>
        </tr>
    </tfoot>
</table>
\`\`\`
\`在<table>加入.table-responsive-{size}可出現x軸，.table-hover有:hover效果\``,__vite_glob_0_2=Object.freeze(Object.defineProperty({__proto__:null,default:Bootstrap4____},Symbol.toStringTag,{value:"Module"})),CSS_Media_Screen=`---
title: CSS Media Screen
date: 2022-04-08
tags: ["CSS"]
---
## 好的響應式體驗
* 從PC版轉到手機版時，標題長度以及部份不必要內容可以適度隱藏
* PC版圖片高度可固定px，手機版height:auto
* jpg、png放大會模糊，svg向量圖放大不會失真
* 在safari瀏覽器上\`height:100%\`會跑版
* logo通上在左上角、中間
* 留意文章閱讀換行的頻率，中文單行30～40個字，英文單行32～80個字元
* 手機沒有hover效果
* 禁止X軸產生(除非特定區域或效果)
* 重要訊息要出現在一開始的畫面
* 一個網站不超過兩種字型
* 降低干擾，建立清楚的層次感
* 元素間距、留白、對齊、對比、色調一致性
* 明顯標示可點擊區域
* 內容行距1.4%~1.6%，標題行距1.25$%
* 無障礙網頁
    * 不能自動輪播
    * 字體大中小切換
    * 圖片alt要描述
    * 文字和背景對比度要高
    * aria-label=""

|裝置|最小可觸碰元件|最小非觸碰元件|最小字體|狀態欄|導航欄|
|---|---|---|---|---|---|
|ios|48*48px|40*40px|11px|24px|56px|
|android|44*44px|30*30px|13px|20px|44px|
\`好的網頁設計?別低估習慣用法的價值，要為了掃描閱讀而設計\`

-----------------------------------------------
## CSS Reset徹底清除標籤樣式
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)清除標籤樣式
* [CSS Normalize](https://necolas.github.io/normalize.css/)是另一種保留部分樣式
* [Pure.css](https://purecss.io/)是Yahoo開發的兼容性樣式
\`\`\`css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*,*:before,*:after{
    box-sizing: border-box;
}
img{
    max-width: 100%;
    height: auto;
}
\`\`\`

-----------------------------------------------
## @media斷點設置
\`\`\`css
/*設定當螢幕寬度在400px以上時*/
@media screen and(min-width:400px){
    body{
        background-color: red;
    }
}
/*設定當螢幕寬度在0px~600px時*/
@media screen and(max-width:600px){
    body{
        background-color: red;
    }
}
/*設定當螢幕寬度在600px以上，1000px以下時*/
@media screen and (min-width:600px) and (max-width:1000px){
    body{
        background-color: green;
    }
}
/*設定當螢幕寬度在1000px以上，1920px以下時*/
@media screen and (min-width:1000px) and (max-width:1920px){
    body{
        background-color: blue;
    }
}
\`\`\`
\`and前後一定要空格\`

-----------------------------------------------
## 計算寬度
\`\`\`css
.box{
    width: calc(100% - 40px); /*佔100%再減少40px*/
    width: calc(50%); /*佔50%*/
    width: calc(20% + 30%); /*佔50%*/
    width: calc(100% / 2); /*佔50%*/
}
\`\`\`
### 固定左右邊距不受視窗拉動影響
\`\`\`css
.box{
    position: relative/absolute;
    left: 50px;
    width: calc(100% - 100px) /*left50px，right50px*/
}
\`\`\`

-----------------------------------------------
## 流體式佈局
1. 一欄100%
2. 二欄50%
3. 三欄33.33333%
\`\`\`html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
\`\`\`
\`\`\`css
.box {
  float: left;
  width: 30.33333%; /*佔3分之1*/
  height: 50px;
  margin: 1.5%; /*左右共佔3%*/
  background-color: red;
}
\`\`\``,__vite_glob_0_3=Object.freeze(Object.defineProperty({__proto__:null,default:CSS_Media_Screen},Symbol.toStringTag,{value:"Module"})),CSS____$1=`---
title: CSS元件樣式
date: 2022-04-04
tags: ["CSS"]
---
## 連結(a)
\`\`\`css
a:link{
    /*設定尚未點擊的連結*/
}
a:visited{
    /*設定已經點擊過後的連結*/
}
a:hover{
    /*設定游標移入時的連結*/
}
a:active{
    /*設定游標點擊時的連結*/
}
\`\`\`
### logo連結(隱藏h1)
\`\`\`html
<h1>
    <a href="#">公司名稱</a>
</h1>
\`\`\`
\`\`\`css
h1{
    float: left;
}
h1 a{
    display: block; /*a預設是inline*/
    width: 圖片寬度;
    height: 圖片高度;
    background-image: url("連結網址"); 
    text-indent: 101%; /*讓文字超出範圍*/
    overflow: hidden; /*超出範圍隱藏*/
    white-space: nowrap; /*強制讓文字不換行*/
    background: contain; /*若是svg圖則加*/
}
\`\`\`

-----------------------------------------------
## 圖片(img)
1. 在\`<img>\`上設定\`float\`，文字會圍繞在旁邊
2. 浮動的\`<img>\`可用\`padding/margin\`調整
3. 若要取消浮動\`clear:both\`
\`\`\`css
img{
    width: auto; /*(預設值)*/
    width: 50px; /*設定寬度*/
    width: 100%; /*占滿父層元素*/

    height: auto; /*(預設值)*/
    height: 30px; /*設定高度*/
    height: 100vh; /*裝置螢幕高度滿版*/

    max-width: 200px; /*設定最大寬度*/
    max-height: 100px; /*設定最大高度*/

    min-width: 50px; /*設定最小寬度*/
    min-height: 30px; /*設定最小高度*/

    float: none; /*不浮動(預設值)*/
    float: left; /*向左上浮動位置*/
    float: right; /*向右上浮動位置*/

    clear: none; /*不清除浮動(預設值)*/
    clear: left; /*左浮動取消*/
    clear: right; /*右浮動取消*/
    clear: both; /*左右都取消*/

    object-fit: contain; /*保持原本寬高比在容器內*/
    object-fit: cover; /*保持寬高比填滿容器*/
    object-fit: fill; /*變形填滿容器*/
    object-fit: none; /*保持原本寬高不被縮放*/
}
\`\`\`
### 自適應圖片
\`\`\`css
img{
    max-width: 100%;
    height: auto;
}
\`\`\`
### <img>填滿上層容器
\`\`\`css
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
\`\`\`
### background-image填滿上層容器
\`\`\`css
.box{
  height: 100vh;
  overflow: hidden;
  background-image: url("https://i.imgur.com/1ZEML4s.png");
  background-size: cover;
  background-position: center center;
}
\`\`\`
### 固定比例<img>
\`\`\`css
.img-rwd{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    img{
        max-width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
\`\`\`

-----------------------------------------------
## 清單(list)
\`\`\`css
li{
    list-style-type: disc; /*黑圓點(預設值)*/
    list-style-type: circle; /*黑圓圈*/
    list-style-type: square; /*黑方塊*/
    list-style-type: decimal; /*數列+點*/
    list-style-type: decimal-leading-zero; /*0+數列+點*/
    list-style-type: lower-roman; /*小寫羅馬文*/
    list-style-type: upper-roman; /*大寫羅馬文*/
    list-style-type: lower-greek; /*大寫希臘文*/
    list-style-type: lower-latin; /*小寫拉丁文*/
    list-style-type: upper-latin; /*大寫拉丁文*/
    list-style-type: armenian; /*亞美尼亞語*/
    list-style-type: "\\1F44D"; /*符號*/
    list-style-type: none; /*不顯示*/

    list-style-image: none; /*(預設值)*/
    list-style-image: url("連結網址"); /*崁入清單樣式*/

    list-style-position: outside; /*圖樣在border外(預設值)*/
    list-style-position: inside; /*圖樣在border內*/

    list-style: list-style-type|list-style-image|list-style-position|;
}
\`\`\`
### 使用UTF-8字符取代清單樣式
\`\`\`scss
li{
    list-style: none;
    &::before{
        display: inline-block;
        content: "⇦";
    }
}
\`\`\`
\`::before在元素之前、::after在元素之後\`

-----------------------------------------------
## 表格(table)
\`\`\`css
table{
    border-collapse: separate; /*分開(雙線條)(預設值)*/
    border-collapse: collapse; /*合併(單線條)*/

    border-spacing: 20px; /*調整separate雙線條的間距*/

    empty-cells: show; /*表格空欄位顯示(預設值)*/
    empty-cells: hide; /*表格空欄位隱藏*/

    table-layout: auto; /*表格固定隨內容改變(預設值)*/
    table-layout: fixed; /*表格寬度固定，隨width而改變*/
}
caption{
    caption-side: top; /*表格描述位置在表格上(預設值)*/
    caption-side: bottom; /*表格描述位置在表格下*/
}
td{
    visibility: collapse;
}
\`\`\`

-----------------------------------------------
## 按鈕(button)
\`\`\`css
button{
    cursor: default; /*預設游標(預設值)*/
    cursor: crosshair; /*十字*/
    cursor: context-menu; /*預設游標+menu*/
    cursor: text; /*文字輸入*/
    cursor: vertical-text; /*(垂直)文字輸入*/
    cursor: wait; /*等待*/
    cursor: pointer; /*點擊手指*/
    cursor: progress; /*預設游標+等待*/
    cursor: cell; /*新增(+)*/
    cursor: help; /*幫助(?)*/
    cursor: move; /*方向*/
    cursor: grab; /*手掌*/
    cursor: grabbing; /*抓住手掌*/
    cursor: no-drop; /*禁止手指*/
    cursor: not-allowed; /*禁止點擊*/
    cursor: all-scroll; /*全部滾動*/
    cursor: col-resize; /*左右拖拉縮放*/
    cursor: all-scroll; /*上下拖拉縮放*/
    cursor: zoom-in; /*放大鏡(+)*/
    cursor: zoom-out; /*放大鏡(-)*/
    cursor: n-resize; /*指北箭頭*/
    cursor: nw-resize; /*指西北箭頭*/
    cursor: w-resize; /*指西箭頭*/
    cursor: sw-resize; /*指西南箭頭*/
    cursor: s-resize; /*指南箭頭*/
    cursor: se-resize; /*指東南箭頭*/
    cursor: e-resize; /*指東箭頭*/
    cursor: ne-resize; /*指東北箭頭*/
    cursor: ew-resize; /*指東西箭頭*/
    cursor: ns-resize; /*指南北箭頭*/
    cursor: nesw-resize; /*指東北和西南箭頭*/
    cursor: nwse-resize; /*指西北和東南箭頭*/
    cursor: none; /*不顯示*/

    pointer-events: none; /*避免空選*/
}
\`\`\`
\`搭配::hover來增加效果\`

-----------------------------------------------
## 輸入框(input)
\`\`\`css
input{
    outline-style: solid; /*實線*/
    outline-style: dashed; /*長虛線*/
    outline-style: dotted; /*短虛線*/
    outline-style: double; /*雙實線*/
    outline-style: inset; /*3D凹*/
    outline-style: outset; /*3D凸*/

    outline-width: 5px; /*線條寬度*/
    outline-width: thin; /*薄*/
    outline-width: medium; /*中*/
    outline-width: thick; /*厚*/

    outline-color: red; /*顏色名稱*/
    outline-color: #333333; /*色票*/
    outline-color: rgba(3,3,3,0); /*最後的值調整透明度*/

    outline: solid 1px red; /*四邊框線樣式/框線寬度/框線顏色*/

    outline-offset: 5px; /*偏移border距離*/
}
\`\`\`
\`搭配::focus來增加效果\`

-----------------------------------------------
## 複選框(checkbox)
\`\`\`css
    accent-color: red;
\`\`\`

-----------------------------------------------
## 區塊(block)
\`\`\`css
.box{

    user-select: auto; /*可以框選*/
    user-select: none; /*不可框選*/

    overflow: visible; /*讓內容超出範圍(預設值)*/
    overflow: hidden; /*讓內容超出範圍就隱藏*/
    overflow: scroll; /*在超出的內容加上捲軸*/
    overflow: auto; /*在超出的內容的軸向加上捲軸*/
    
    overflow-x: hidden; /*X軸向捲軸隱藏*/
    overflow-x: scroll; /*X軸向出現捲軸*/

    overflow-y: hidden; /*Y軸向捲軸隱藏*/
    overflow-y: scroll; /*Y軸向出現捲軸*/

    resize: none; /*不增加窗角*/
    resize: both; /*可任意拉動*/
    resize: horizontal; /*可水平拉動*/
    resize: vertical; /*水垂直拉動*/

    visibility: visible; /*正常顯示*/
    visibility: hidden; /*隱藏(區塊保留)*/
    visibility: collapse; /*不顯示*/
}
\`\`\`

-----------------------------------------------
## 對齊(align)
1. 限用同行的\`display:inline/inline-block\`元素\`<div><span><img>\`
2. 同行的元素都要加上\`vertical-align\`才會對齊
3. 不適用\`position:relative/absolute\`元素
\`\`\`css
.box{
    vertical-align: baseline; /*預設值*/
    vertical-align: top; /*切齊上方*/
    vertical-align: middle; /*切齊中線*/
    vertical-align: bottom; /*切齊下方*/
    vertical-align: text-top; /*偏移中線上方*/
    vertical-align: text-bottom; /*偏移中線下方*/
    vertical-align: 30px; /*偏移中線30px*/
    vertical-align: sub; /*偏移向下*/
    vertical-align: super; /*偏移向上*/
}
\`\`\`
### div內的文字置中
\`\`\`css
.box{
    text-align: center;
    line-height: 設跟height值一樣;
}
\`\`\`
### 元素水平置中
\`\`\`css
.box{
    margin: 0 auto;
}
\`\`\`
### 元素垂直水平置中
\`\`\`css
ul{
    position: relative;
}
ul li{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ranslate(-50%,-50%);
}
\`\`\`
### 文字或元素垂直水平置中
\`\`\`css
ul{
    display: flex;
}
ul li{
    justify-content: center;
    align-items: center;
}
\`\`\`

-----------------------------------------------
## 濾鏡(filter)
\`\`\`css
.box{
    filter: grayscale(0~100%); /*灰階*/
    filter: sepia(0~100%); /*棕褐色*/
    filter: saturate(0~100%); /*飽和*/
    filter: hue-rotate(0deg~360deg); /*色相環*/
    filter: invert(0/1); /*負片效果*/
    filter: opacity(0.0/1.0); /*透明度*/
    filter: brightness(100%); /*亮度，小於100%減少亮度，大於100%曝光*/
    filter: contrast(0%); /*對比，小於100%明暗越小，大於100%明暗越大*/
    filter: blur(0px); /*模糊，值越大模糊越大*/
    filter: drop-shadow(0px 0px 0px #333333); /*下拉陰影*/
}
\`\`\`

-----------------------------------------------
## 背景濾鏡(backdrop-filter)
\`\`\`css
.box{
    backdrop-filter: grayscale(0~100%); /*灰階*/
    backdrop-filter: sepia(0~100%); /*棕褐色*/
    backdrop-filter: saturate(0~100%); /*飽和*/
    backdrop-filter: hue-rotate(0deg~360deg); /*色相環*/
    backdrop-filter: invert(0/1); /*負片效果*/
    backdrop-filter: opacity(0.0/1.0); /*透明度*/
    backdrop-filter: brightness(100%); /*亮度，小於100%減少亮度，大於100%曝光*/
    backdrop-filter: contrast(0%); /*對比，小於100%明暗越小，大於100%明暗越大*/
    backdrop-filter: blur(0px); /*模糊，值越大模糊越大*/
    backdrop-filter: drop-shadow(0px 0px 0px #333333); /*下拉陰影*/
}
\`\`\`

-----------------------------------------------
## 圖層混合(mix-blend-mode)
\`\`\`css
.box{
    mix-blend-mode: normal; /*預設值*/
    mix-blend-mode: hue; /*色相*/
    mix-blend-mode: saturation; /*飽和度*/
    mix-blend-mode: color; /*顏色*/
    mix-blend-mode: luminosity; /*明度*/
    mix-blend-mode: multiply; /*色彩增值*/
    mix-blend-mode: screen; /*濾色*/
    mix-blend-mode: overlay; /*覆蓋*/
    mix-blend-mode: darken; /*變暗*/
    mix-blend-mode: lighten; /*變亮*/
    mix-blend-mode: color-dodge; /*加亮顏色*/
    mix-blend-mode: color-burn; /*加深顏色*/
    mix-blend-mode: hard-light; /*實光*/
    mix-blend-mode: soft-light; /*柔光*/
    mix-blend-mode: difference; /*差異化*/
    mix-blend-mode: exclusion; /*排除*/
}
\`\`\`

-----------------------------------------------
## 捲軸(scrollbar)
\`\`\`html
<div class="box">lorem ipsum, dolor sit amet consectetur adipisicing elit. Est soluta ipsam quaerat consectetur, aut autem architecto dignissimos nesciunt eius minus odit et tenetur dolorum magnam pariatur atque voluptatem, vel vitae?</div>
\`\`\`
\`\`\`css
.box{
    width: 300px;
    height: 300px;
    border: solid 1px #cccccc;
    overflow-x: hidden;
    overflow-y: auto;
    /*整體的樣式*/
    &::-webkit-scrollbar{
        width: 10px;
        background-color: red;
    }
    /*拉桿的樣式*/
    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 30px;
        width: 40px;
    }
    /*軌道的樣式*/
    &::-webkit-scrollbar-track{
        background-color: gray;
    }
}
\`\`\``,__vite_glob_0_4=Object.freeze(Object.defineProperty({__proto__:null,default:CSS____$1},Symbol.toStringTag,{value:"Module"})),CSS____=`---
title: CSS基本樣式
date: 2022-04-03
tags: ["CSS"]
---
## 樣式選擇器及權重
|名稱|HTML標籤|class選擇器.|id選擇器#|style=""|!important|
|---|---|---|---|---|---|
|權重|1分|10分|100分|1000分|10000分|
\`\`\`css
p{
    /*選擇<p>標籤屬性*/
}

*{
    /*對所有標籤進行樣式設定*/
}

.box{
    /*選擇<div class="box">標籤屬性*/
}

.box a{
    /*選擇<div class="box">標籤屬性裡面的<a>*/
}

.box1, .box2{
    /*選擇<div class="box1">標籤和<div class="box2">標籤*/
}

#box{
    /*選擇<div id="box">標籤屬性*/
}
/*
1.後面的樣式會覆蓋前面的樣式
2.加入『!important』樣式優先
*/
\`\`\`
### 標籤選取器
\`\`\`html
<ul>
    <li>1</li>
    <p>2</p>
    <li>3</li>
    <p>4</p>
    <li>5</li>
    <p>6</p>
    <li>7</li>
    <p>8</p>
    <li>9</li>
    <p>10</p>
</ul>
\`\`\`
\`\`\`css
li:nth-child(4){
    /*選取第4個(null)*/
}
li:nth-child(odd){
    /*選取單數(1、3、5、7、9)*/
}
li:nth-child(even){
    /*選取偶數(null)*/
}
li:nth-child(2n+3){
    /*從第3個開始，每次間隔2(3、5、7、9)*/
}
li:nth-child(3n+1){
    /*從第1個開始，每次間隔3(1、7)*/
}
li:not(:first-child){
    /*選取li第一個以外的(3、5、7、9)*/
}
li:nth-of-type(3){
    /*選取li的第三個(5)*/
}
\`\`\`

-----------------------------------------------
## 單位
|單位|說明|
|---|---|
|px|絕對的文字大小|
|em|以目前文字大小為基準，會因外層的\`font-size\`大小影響|
|rem|以外層\`html\`為基準：會因\`html\`的\`font-size\`大小影響|

-----------------------------------------------
## 文字(text、font)
\`\`\`css
.text{
    font-family: verdana;
    font-family: "微軟正黑體","import"; /*優先使用前者字體，後者順位*/
    font-family: "Microsoft JhengHei"; /*window中文字體*/
    font-family: "Segoe UI";  /*window英文字體*/
    font-family: "Droidsanfallback";  /*andriod中文字體*/
    font-family: "Roboto";  /*andriod英文字體*/
    font-family: "Ping Fang HeitiTC";  /*ios中文字體*/
    font-family: "Helvetica Neue";  /*ios英文字體*/

    font-weight: 100~900; /*字體粗度*/
    font-weight: lighter; /*字體粗度100*/
    font-weight: light; /*字體粗度400*/
    font-weight: normal; /*字體粗度400(預設值)*/
    font-weight: bold; /*字體粗度700*/
    font-weight: bolder; /*字體粗度700*/

    font-style: normal; /*正常(預設值)*/
    font-style: italic; /*斜體*/
    font-style: oblique; /*斜體*/

    font-size: xx-small; /*超級小(12px)*/
    font-size: x-small; /*超小(12px)*/
    font-size: small; /*小(13px)*/ 
    font-size: medium; /*中(16px)(預設值)*/
    font-size: large; /*大(18px)*/
    font-size: x-large; /*超大(24px)*/
    font-size: xx-large; /*超級大(32px)*/
    font-size: smaller; /*超級大(13.3333px)*/
    font-size: larger; /*超級大(19.2px)*/
    font-size: 16px; /*文字16px(1rem)*/
    font-size: 1rem; /*文字1em(16px)*/
    font-size: 1em; /*文字1em*/
    
    font-variant: normal; /*正常(預設值)*/
    font-variant: no-common-ligatures; /*不連字*/
    font-variant: common-ligatures; /*普通連字*/
    font-variant: small-caps; /*小型的大寫字體*/

    /*須看字型本身有無支援*/
    font-stretch: normal; /*正常(預設值)*/
    font-stretch: ultra-condensed; /*將字體壓縮(50%)*/
    font-stretch: extra-condensed; /*將字體壓縮(62.5%)*/
    font-stretch: condensed; /*將字體壓縮(75%)*/
    font-stretch: semi-condensed; /*將字體壓縮(75%)*/
    font-stretch: expanded; /*將字體擴張(112.5%)*/
    font-stretch: semi-expanded; /*將字體擴張(125%)*/
    font-stretch: extra-expanded; /*將字體擴張(150%)*/
    font-stretch: ultra-expanded; /*將字體擴張(200%)*/

    font: font-style|font-weight|font-variant|font-size/line-height|font-family; 

    color: red; /*顏色名稱*/
    color: #333333; /*色票*/
    color: rgba(3,3,3,0); /*R,G,B,透明度*/

    text-decoration: none; /*無裝飾(預設值)*/
    text-decoration: underline; /*上線條*/
    text-decoration: underline dotted; /*上線條 點線*/
    text-decoration: underline dotted red; /*上線條 點線 紅色*/
    text-decoration: overline; /*下線條*/
    text-decoration: line-through; /*刪除線*/

    text-indent: 0em; /*(預設值)*/
    text-indent: 2em; /*縮排2個字*/
    text-indent: 10%; /*縮排10%*/
    text-indent: -5em; /*突出5個字*/

    letter-spacing: normal; /*(預設值)*/
    letter-spacing: 8px; /*文字間距*/

    word-spacing: normal; /*(預設值)*/
    word-spacing: 5px; /*每個單字間的距離*/
    word-spacing: 120%; /*每個單字間的距離120%*/
    word-spacing: 1rem; /*每個單字間的多一個字的距離*/

    line-height: normal; /*(預設值)*/
    line-height: 40px; /*段落行距40px*/
    line-height: 120%; /*段落行距1.2倍*/
    line-height: 1.5; /*段落行距1.5倍*/

    text-align: left; /*靠左(預設值)*/
    text-align: right; /*靠右*/
    text-align: center; /*置中*/
    text-align: justify; /*左右對齊*/

    text-transform: none; /*(預設值)*/
    text-transform: capitalize; /*每個單字開頭大寫*/
    text-transform: uppercase; /*所有字母大寫*/
    text-transform: lowercase; /*所有字母小寫*/

    -webkit-text-stroke: 5px #333333; /*文字外框*/

    text-justify: auto; /*齊行均分方式(預設值)*/
    text-justify: inter-word;
    text-justify: inter-ideograph;
    text-justify: inter-cluster;
    text-justify: distribute;
    text-justify: kashida;
    text-justify: trim;

    text-overflow: clip; /*裁剪文字(預設值)*/
    text-overflow: ellipsis; /*省略號*/
    
    text-shadow: none; /*(預設值)*/
    text-shadow: 30px 40px; /*X軸 Y軸*/
    text-shadow: 30px 40px red; /*X軸 Y軸 陰影顏色*/
    text-shadow: 30px 40px 20px red; /*X軸 Y軸 模糊 陰影顏色*/
    text-shadow: 30px 40px red,10px 50px blue; /*前者在上層，後者在下層*/

    word-break: normal; /*只有英文，換行時單詞不會被切(預設值)*/
    word-break: keep-all; /*中英日韓，換行時單詞不會被切*/
    word-break: break-all; /*中英日韓，換行時單詞會被切*/

    word-wrap: normal; /*(預設值)*/
    word-wrap: break-word; /*允許文字在任意位置斷行*/

    white-space: nowrap; /*不換行*/
    white-space: normal; /*自動換行*/

    unicode-bidi: bidi-override; /*文字相反顯示*/

    writing-mode: horizontal-tb; /*文字水平*/
    writing-mode: vertical-rl; /*文字垂直*/
}
\`\`\`
### 單行限制內容
\`\`\`css
.box {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
\`\`\`
### 多行限制內容
\`\`\`css
.box {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /*限制幾行*/
    -webkit-box-orient: vertical;
}
\`\`\`
### 自定義字型
\`\`\`css
@font-face{
    font-family: verdana;
    src: url(http://example.com/fonts/Gentium.woff),
         url(/fonts/simple.woff);
}
\`\`\`

-----------------------------------------------
## 背景(background)
\`\`\`css
.box{
    background-color: transparent; /*透明(預設值)*/
    background-color: red; /*顏色名稱*/
    background-color: #333333; /*色票*/
    background-color: rgba(3,3,3,0); /*R,G,B,透明度*/
    
    background-position: 0% 0%; /*在左上方(預設值)*/
    background-position: right top; /*在右上方*/
    background-position: center bottom; /*在中間下方*/
    background-position: 20px 30px; /*X軸 Y軸*/

    background-size: auto; /*(預設值)*/
    background-size: 200px 300px; /*寬200px，高300px*/
    background-size: 50%; /*縮小50%*/
    background-size: cover; /*填滿元素*/
    background-size: contain; /*圖片大於元素時能完整呈現*/

    background-repeat: repeat; /*重複(預設值)*/
    background-repeat: no-repeat; /*不重複*/
    background-repeat: repeat-x; /*X軸重複*/
    background-repeat: repeat-y; /*Y軸重複*/

    background-origin: padding-box; /*圖片空間從border內開始(預設值)*/
    background-origin: border-box; /*圖片空間從border外框開始*/
    background-origin: content-box; /*圖片空間從padding內開始*/

    background-clip: border-box; /*border線在圖片內(預設值)*/
    background-clip: padding-box; /*border線在圖片外*/
    background-clip: content-box; /*border線會被padding在圖片外*/

    background-attachment: scroll; /*背景捲動時跟著移動(預設值)*/
    background-attachment: fixed; /*背景固定不動(滾動視差效果)*/

    background-image: none; /*(預設值)*/
    background-image: url("連結網址"); /*崁入圖片*/
    background-image: url(/images); /*根目錄*/
    background-image: url(./images); /*所在目錄*/
    background-image: url(../images); /*上層目錄*/

    background: color|position|size|repeat|origin|clip|attachment|image;

    box-shadow: 30px 40px; /*X軸 Y軸*/
    box-shadow: 30px 40px red; /*X軸 Y軸 陰影顏色*/
    box-shadow: 30px 40px 20px red; /*X軸 Y軸 模糊 陰影顏色*/
    box-shadow: 30px 40px 20px 10px red; /*X軸 Y軸 模糊 擴散 陰影顏色*/
    box-shadow: 30px 40px 20px 10px red inset; /*X軸 Y軸 模糊 擴散 陰影顏色 內部*/
    box-shadow: 30px 40px red,10px 50px blue; /*前者在上層，後者在下層*/

    opacity: 0; /*完全透明*/
    opacity: 0.5; /*半透明*/
    opacity: 1; /*完全不透明*/
}
\`\`\`
### 背景漸層
\`\`\`css
.box{
    background: linear-gradient(red, orange); /*從上到下(預設)，紅到橘*/
    background: linear-gradient(red,yellow); /*上到下，紅到黃*/
    background: linear-gradient(45deg,red,yellow); /*右上到左下，紅到黃*/
    background: linear-gradient(90deg,red,transparent); /*右到左，紅到透明*/
    background: radial-gradient(red,blue); /*由內到外，紅到藍*/
    background: radial-gradient(red 5%,blue 10%); /*由內到外，紅5%到藍10%*/
    background: radial-gradient(circle,red,blue); /*由內到外(正圓)，紅到藍*/
    background: repeating-radial-gradient(circle,red,blue); /*重複，由內到外(正圓)，紅到藍*/
}
\`\`\`
### 滾動視差
\`\`\`css
.box{
    background-image: url("...");
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}
\`\`\`

-----------------------------------------------
## 內距(padding)
\`\`\`css
.box{
    padding: 0; /*(預設值)*/
    padding: 20px; /*四邊同時調整*/
    padding: 20px 30px; /*上下 左右調整*/
    padding: 20px 30px 50px; /*上 左右 下調整*/
    padding: 20px 30px 50px 100px; /*上 右 下 左調整*/

    padding-top: 20px; /*上調整*/
    padding-right: 30px; /*右調整*/
    padding-bottom: 50px; /*下調整*/
    padding-left: 100px; /*左調整*/

    box-sizing: content-box; /*padding向外擴(預設)*/
    box-sizing: border-box; /*padding向內壓縮*/
}
\`\`\`

-----------------------------------------------
## 外距(margin)
\`\`\`css
.box{
    margin: 0; /*(預設值)*/
    margin: 20px; /*四邊同時調整*/
    margin: 20px 30px; /*上下 左右調整*/
    margin: 20px 30px 50px; /*上 左右 下調整*/
    margin: 20px 30px 50px 100px; /*上 右 下 左調整*/

    margin-top: 20px; /*上調整*/
    margin-right: 30px; /*右調整*/
    margin-bottom: 50px; /*下調整*/
    margin-left: 100px; /*左調整*/
}
\`\`\`

-----------------------------------------------
## 邊框(border)
\`\`\`css
.box{
    border-width: 5px; /*邊框線條寬度5px*/
    border-width: thin; /*薄(1px)*/
    border-width: medium; /*中(3px)*/
    border-width: thick; /*厚(5px)*/

    border-style: none; /*沒有線條*/
    border-style: dotted; /*短虛線*/
    border-style: dashed; /*長虛線*/
    border-style: solid; /*實線(預設值)*/
    border-style: double; /*雙實線*/
    border-style: groove; /*雙實線*/
    border-style: ridge; 
    border-style: inset; /*3D凹*/
    border-style: outset; /*3D凸*/

    border-color: none; /*(預設值)*/
    border-color: red; /*顏色名稱*/
    border-color: #333333; /*色票*/
    border-color: rgba(3,3,3,0); /*最後的值調整透明度*/

    border: solid 1px red; /*四邊框線樣式 框線寬度 框線顏色*/

    border-top: solid 1px red; /*上邊框線樣式/框線寬度/框線顏色*/
    border-right: solid 1px red; /*右邊框線樣式/框線寬度/框線顏色*/
    border-bottom: solid 1px red; /*下邊框線樣式/框線寬度/框線顏色*/
    border-left: solid 1px red; /*左邊框線樣式/框線寬度/框線顏色*/

    border-radius: 30px; /*邊框圓角*/
    border-radius: 100%; /*圓型*/

    border-image-source: url(); /*崁入圖片*/
    border-image-source: url(/images); /*根目錄*/
    border-image-source: url(./images); /*所在目錄*/
    border-image-source: url(../images); /*上層目錄*/
}
\`\`\`
### 拉長邊框圖案
\`\`\`css
.box{
    width: 400px;
    height: 200px;
    border-image: url(https://photo.minwt.com/file/sampleView/css/border-image/bdic.png);
    border-image-slice: 20;
    border-image-width: 1em;
    border-image-repeat: round;
}
\`\`\`
### 邊框圖案完整延伸
\`\`\`css
.box{
    width: 400px;
    height: 200px;
    border-image: url(https://photo.minwt.com/file/sampleView/css/border-image/bdic.png);
    border-image-slice: 20;
    border-image-width: 1em;
    border-image-repeat: stretch;
}
\`\`\`

-----------------------------------------------
### 定位(position)
\`\`\`css
.box{
    position: static; /*靜態：自動排列下來，不能偏移位置(預設值)*/
    position: relative; /*相對定位：自動排列下來，可以偏移位置*/
    position: absolute; /*絕對定位：對上層物件作做偏移定位(但上層一定要是relative)*/
    position: fixed; /*固定：固定在某個位置，不會隨著視窗滾動*/
    position: sticky; /*凍結在上方：視窗向下滾動，仍停留在上方*/
    position: inherit; /*跟隨父元素的position*/
    position: initial; /*將position設為其初始值(static)*/
}
\`\`\`

-----------------------------------------------
### 顯示(display)
\`\`\`css
.box{
    display: block; /*區塊元素：div、p、form、hr、dl、dt、dd、ol、ul、h1~h6*/

    /*沒有width和height，只要沒有br會一直同行直到空間不足才會換行*/
    display: inline; /*行內元素：span、a、small、label*/

    /*有width和height，只要沒有br會一直同行直到空間不足才會換行*/
    display: inline-block; /*行內元素並包覆：img、input、select、button*/

    display: list-item; /*以清單方式顯示*/
    display: flex; /*彈性自由排列*/
    display: none; /*不顯示*/

    display: table; /*等於<table>*/
    display: table-row; /*等於<tr>*/
    display: table-cell; /*等於<td>、<th>*/
    display: table-header-group; /*等於<thead>*/
    display: table-row-group; /*等於<tbody>*/
    display: table-footer-group; /*等於<tfoot>*/
    display: table-column-group; /*等於<colgroup>*/
    display: table-column; /*等於<col>*/
    display: table-caption; /*等於<caption>*/
}
\`\`\`
### table垂直置中法
\`\`\`html
<div class="table-wrap">
    <div class="table-cell">垂直置中</div>
</div>
\`\`\`
\`\`\`css
.table-wrap{
    display: table;
    width: 300px;
    height: 300px;
}
.table-cell{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
\`\`\`

-----------------------------------------------
## 物件變形(transform)
\`\`\`css
.box{
    transform: none; /*(預設值)*/
    transform: translate(30px,20px); /*偏移X軸30px Y軸20px*/
    transform: translateX(30px); /*偏移X軸30px*/
    transform: translateY(20px); /*偏移Y軸20px*/

    transform-style: flat; /*2D(預設值)*/
    transform-style: preserve-3d; /*3D*/

    perspective: none; /*無3D透視距離(預設值)*/
    perspective: 30px; /*3D透視距離30px*/

    perspective-origin: 30px top; /*3D透視原點位置X軸30px，Y軸最上方*/

    backface-visibility: visible; /*3D透視可看到後面的物件(預設值)*/
    backface-visibility: hidden; /*3D透視不能看到後面的物件*/

    appearance: auto; /*原本的樣式(預設值)*/
    appearance: none; /*去除原本的樣式*/

    transform: scale(1.5,2); /*縮放X軸1.5 Y軸2*/
    transform: scaleX(1.5); /*縮放X軸1.5*/
    transform: scaleY(2); /*縮放Y軸2*/

    transform: skew(30deg,20deg); /*傾斜X軸30deg*/
    transform: skewX(30deg); /*傾斜X軸30deg*/
    transform: skewY(20deg); /*傾斜Y軸20deg*/

    transform: rotate(30deg); /*旋轉30度，正值為順時針，負值為逆時針*/

    transform-origin: center; /*原點在中心*/
    transform-origin: 50px 20px; /*從原點離上方50px 離左方20px*/
}
\`\`\`
### 3D透視物件
\`\`\`css
ul{
    display: flex;
}
ul li{
    justify-content: center;
    align-items: center;
}
\`\`\`

-----------------------------------------------
## 分欄(column)
\`\`\`css
.box{
    column-count: auto; /*(預設值)*/
    column-count: 3; /*分3欄*/

    column-width: auto; /*(預設值)*/
    column-width: 200px; /*用200px去分欄*/

    /*column-count及column-width只能二擇一*/

    column-gap: auto; /*(預設值)*/
    column-gap: 20px; /*欄與欄間距20px*/

    column-rule-width: auto; /*分隔線寬度(1.5px)(預設值)*/
    column-rule-width: 2px; /*分隔線寬度*/
    column-rule-width: thin; /*分隔線寬度(1px)*/
    column-rule-width: medium; /*分隔線寬度(3px)*/
    column-rule-width: thick; /*分隔線寬度(5px)*/

    column-rule-style: none; /*(預設值)*/
    column-rule-style: hidden; /*隱藏*/
    column-rule-style: dotted; /*點點線*/
    column-rule-style: dashed; /*虛線*/
    column-rule-style: solid; /*實線*/
    column-rule-style: double; /*雙實線*/
    column-rule-style: groove; /*凸起實線*/
    column-rule-style: ridge; /*更加凸起實線*/
    column-rule-style: inset; /*3D凹*/
    column-rule-style: outset; /*3D凸*/

    column-rule-color: black; /*分隔線黑色(預設值)*/
    column-rule-color: #333333; /*分隔線顏色*/

    column-span: none; /*在重要的字上使用時，會被分欄(預設值)*/
    column-span: all; /*在重要的字上使用時，不會被分欄*/

    column-rule: style | width | color;
}
\`\`\`

-----------------------------------------------
## 重疊順序(z-index)
\`\`\`css
.box{
    position: relative | absolute;
    z-index: auto; /*自動(預設值)*/
    z-index: 999; /*順序排列在上層999*/
    z-index: -30; /*順序排列在下層30*/
}
\`\`\`
\`該元素必須是position:relative/absolute\``,__vite_glob_0_5=Object.freeze(Object.defineProperty({__proto__:null,default:CSS____},Symbol.toStringTag,{value:"Module"})),Chrome__________=`---
title: Chrome瀏覽器的內建截圖方法
date: 2024-01-04
tags: ["Web"]
---
## Chrome 網頁長截圖方法
1. 打開 Chrome 到欲長截圖頁面，右鍵“檢查”，快捷鍵(option ＋ command ＋ I)
![圖片](./images/Chrome的截圖方法/Chrome的截圖方法-1.png)

-----------------------------------------------
2. 執行，快捷鍵(command ＋ shift ＋ P)
![圖片](./images/Chrome的截圖方法/Chrome的截圖方法-2.png)

-----------------------------------------------
3. 中文輸入“截圖”，英文輸入“capture full size screenshot”
![圖片](./images/Chrome的截圖方法/Chrome的截圖方法-3.png)`,__vite_glob_0_6=Object.freeze(Object.defineProperty({__proto__:null,default:Chrome__________},Symbol.toStringTag,{value:"Module"})),Component__=`---
title: Component元件
date: 2024-12-24
tags: ["Vue3"]
---
## 全域註冊元件(第一種寫法)
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  }
}).component('alert',{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
})

app.mount("#app");
\`\`\`
\`接在createApp方法後面的component是全域註冊\`

-----------------------------------------------
## 全域註冊元件(第二種寫法)
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  }
})

app.component('alert',{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
})

app.mount("#app");
\`\`\`

-----------------------------------------------
## 區域註冊元件(第一種寫法)
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const alert = {
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
}

const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  },
  components:{
    alert
  }
})
app.mount("#app");
\`\`\`
\`若區域元件註冊在某個元件下，那就只能在該元件的template下呼叫\`

-----------------------------------------------
## 區域註冊元件(第二種寫法，模組化)
\`\`\`js
//component-alert.js
export default{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
}
\`\`\`
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
import alert from './component-alert.js';

const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  },
  components:{
    alert
  }
})
app.mount("#app");
\`\`\``,__vite_glob_0_7=Object.freeze(Object.defineProperty({__proto__:null,default:Component__},Symbol.toStringTag,{value:"Module"})),Figma____=`---
title: Figma使用教學
date: 2023-04-25
tags: ["Design"]
---
## 免費版figma
* 團隊(不限)-專案(最多3個)-檔案(不限)
* 免費版本控制只保留30天
    * 方法一：匯出檔案再匯入
        * 點選左上角-檔案-儲存並下載-儲存.fig檔在本地端
        * 回到控制台的專案，選擇匯入
    * 方法二：儲存歷史並回朔紀錄(30天)
        * 點選左上角-檔案-儲存版控
        * 點選左上角-檔案-顯示版控

-----------------------------------------------
## 工具
* 元件
    * 群組(group)縮放內容變形
    * 框架(frame)縮放會被constraints固定
        * 重疊時會自動包覆
        * 按著滑鼠移動frame+空白鍵不會被包覆
* 文字
    * 行高建議1.4~1.6倍(140%~160%)
    * 點選文字控制區右上角(四個點)可建立文字樣版(命名：種類/樣式名稱)
    * 載入本地端字型：點擊頭像-setting-font
    * 文字底線可用陰影代替
* 圖片
    * 進行遮罩時，形狀需放在圖片下層，先群組再遮罩
* 顏色
    * 在滴管吸取時，滑鼠按著不放可瀏覽變色
    * 全選物件後，可在右邊顏色選擇器針對特定顏色選取

-----------------------------------------------
## 常用快捷鍵
|功能|快捷鍵|
|---|---|
|游標|\`V\`|
|文字|\`T\`|
|滴管|\`I\`|
|打開格線系統|\`control\`+\`G\`|
|框架|\`command\`+\`G\`|
|群組|\`command\`+\`option\`+\`G\`|
|解散框架/群組|\`command\`+\`shift\`+\`G\`|
|合併形狀|\`command\`+\`E\`|
|命名多個圖層|左側選取圖層\`command\`+\`R\`|
|文字新增連結|\`command\`+\`K\`|
|簡報模式|\`command\`+\`\\\`|
|插入圖片|\`command\`+\`shift\`+\`K\`|
|圖片遮罩|\`command\`+\`control\`+\`M\`|
|複製樣式|\`command\`+\`option\`+\`C\`|
|貼上樣式|\`command\`+\`option\`+\`V\`|
|製作元件|\`command\`+\`option\`+\`K\`|
|查看邊距|\`option\`+游標移動|
|剪裁圖片|\`option\`+點兩下圖片|
|完整顯示|\`shift\`+\`1\`|
|顯示尺標|\`shift\`+\`R\`|
|Auto Layout|\`shift\`+\`A\`|
|筆畫/填色反轉|\`shift\`+\`X\`|
|垂直/水平反轉|\`shift\`+\`H\`/\`V\`|
|調整透明度|點一下圖形+\`數字鍵\`|
|調整尺寸|點一下圖形+\`方向鍵\`|

-----------------------------------------------
## 元件(Component)
* 元件本體(main component)
* 元件分身(instance)
* 元件建立
    1. 繪製樣式
    2. \`shift\`+\`A\` 建立Auto layout
    3. \`command\`+\`option\`+\`K\` 製作元件
    4. 給元件命名或賦予關鍵字
    5. 在資源可用文字搜尋
    6. 修改樣式時統一使用元件本體
\`若在instance上修改樣式，main component修改就不再同步\`

-----------------------------------------------
## 變體(Variants)
* 將元件集合(component set)
* 每個元件可以有多個屬性，每個屬性對應到一個值
* 建立變體
    1. 繪製樣式
    2. \`command\`+\`option\`+\`K\` 製作元件
    3. 製作不同樣式(樣式名稱)
    4. 進行群組命名(property)
    5. 群組複製再次進行修改
    6. 檢查元件是否可以用分類選擇到
\`只有元件才能進行變體\`

-----------------------------------------------
## 格線系統(grid system)
1. 建立frame
2. 啟用layout grid
3. 選擇columns，count：12
4. 決定主要內容寬度(自訂)
5. margin：將裝置寬度-內容寬度/2
6. gutter：16(自訂)
* 8網格間距(8 point grids)能夠更有效率、達成一致性
    * 4、8、12、16、20、24、28、32、40、48、56、64...
    * 
\`斷點(break point)建議參考主流框架\`

-----------------------------------------------
## 建立核心樣式
1. 顏色(預設/深色/淺色)
    * 主要色(Primary)品牌色、重要文字、按鈕
    * 次要色(Secondary)提示訊息、次要文字按鈕
    * 警告色(Alert)錯誤訊息、警告
    * 輔助色(Complementary)其他更多輔助介面
    * 強調色(Accent)強調特定資訊
    * 灰階(Gray scale)分隔線、外框線、內容文字
2. 文字
    * 選定字型(1~2種)
    * 定義H1~H6、主標、副標、內容文字、輔助文字
        * H1(40px)(125%)
        * H2(32px)(125%)
        * H3(24px)(125%)
        * H4(20px)(140%)
        * H5(18px)(140%)
        * Title(16px)(140%)
        * P(12px)(140%)
        * small(11px)(140%)
    * 粗細度(2~3種)
    * 階層不同、深淺度可調整
    * 行高1.4%~1.6%，大於24px建議1.25%
3. 間距(8 point grids)
* input 文字跟輸入框上下12px 左右16px `,__vite_glob_0_8=Object.freeze(Object.defineProperty({__proto__:null,default:Figma____},Symbol.toStringTag,{value:"Module"})),Flexbox____=`---
title: Flexbox彈性盒子
date: 2022-04-06
tags: ["CSS"]
---
## flexbox排版
* 外層flex，item寬度超出container也不會超出
* item內有文字或div時撐開高度時，其他item會以(最高)來延伸成等高
### 外容器(Container)
\`\`\`css
ul{
    display: flex;

    /*主軸方向*/
    flex-direction: row; /*從左到右(預設)*/
    flex-direction: row-reverse; /*從右到左*/
    flex-direction: column; /*從上到下*/
    flex-direction: column-reverse; /*從下到上*/

    /*主軸線排列*/
    justify-content: flex-start; /*從頭開始(預設)*/
    justify-content: flex-end; /*從尾開始*/
    justify-content: center; /*置中排列*/
    justify-content: space-between; /*貼齊頭和尾*/
    justify-content: space-around; /*平均分散*/

    /*交錯線排列*/
    align-items: flex-start; /*從交錯線頭開始對齊(預設值)*/
    align-items: flex-end; /*從交錯線尾開始對齊*/
    align-items: center; /*從交錯線置中對齊*/
    align-items: stretch; /*從交錯線延伸到底*/
    align-items: baseline; /*從交錯線對齊(文字)基線*/

    flex-wrap: nowrap; /*內容超出範圍不換行(預設值)*/
    flex-wrap: wrap; /*內容超出範圍自動換行*/
    flex-wrap: wrap-reverse; /*內容超出範圍反向換行*/

    flex-flow: row nowrap; /*(預設值)*/
    flex-flow: column wrap; /*從上到下，自動換行*/

    /*使用前提flex-wrap: wrap*/
    align-content: stretch; /*第一行與最後一行都延伸至滿版(預設值)*/
    align-content: flex-start; /*第一行與最後一行都從交錯線頭開始排列*/
    align-content: flex-end; /*第一行與最後一行都從交錯線尾開始排列*/
    align-content: center; /*第一行與最後一行都對齊交錯線中間位置*/
    align-content: space-between; /*第一行從交錯線頭，最後一行從交錯線尾*/
    align-content: space-around; /*第一行與最後一行平均分散在交錯軸上*/
}
\`\`\`
### 內元件(Items)
\`\`\`css
ul > li{
    align-self: flex-start; /*元件本身從頭對齊*/
    align-self: flex-end; /*元件本身從尾對齊*/
    align-self: center; /*元件本身對齊中線*/
    align-self: stretch; /**元件本身延伸到底*/
    align-items: baseline; /**元件本身對齊(文字)基線*/
    
    flex-grow: 0; /*伸展比(預設值)*/
    flex-grow: 1; /*將容器剩餘空間，進行比例分配*/

    flex-shrink: 1; /*被壓縮比(預設值)*/
    flex-shrink: 0; /*不要被壓縮*/

    flex-basis: auto; /*預先被分配比(預設值)*/
    flex-basis: 200px; /*絕對被分配值*/

    flex: 0 1 auto; /*(預設值)*/
    flex: flex-grow | flex-shrink | flex-basis;
    flex: 3; /*永遠佔30%*/
    flex: none; /*取消彈性，保持原尺寸*/
    
    order: 0; /*(預設值)*/
    order: 1~100; /*設定排序，數字小的先*/
}
\`\`\`

-----------------------------------------------
## Bootstrap4樣板
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Bootstrap 4</title>
    <style>
      body{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", Roboto, "Helvetica Neue", Arial, sans-serif
      }
    </style>
</head>
<body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"><\/script>
</body>
</html>
\`\`\`

-----------------------------------------------
## Bootstrap4排版方式與斷點
* 單位是rem
* 預設字體大小16px
* 以12欄方式排版
* \`.container\` > \`.row\` > \`.col-*\` > 內容
* 以下為Bootstrap4的斷點：
|0~576|576~768|768~992|992~1200|1200~|
|---|---|---|---|---|
|.col-*|.col-sm-*|.col-md-*|.col-lg-*|.col-xl-*|
|Extra Small|Small|Medium|Large|Extra Large|
|auto|540px|720px|960px|1140px|

\`Bootstrap是從手機版開始製作網頁版型，要超過斷點才會套用樣式\`

-----------------------------------------------
## 容器(Container)
\`\`\`css
.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px){
  .container {
    max-width: 540px;
    background-color: yellow;
  }
}
@media (min-width: 768px){
  .container {
    max-width: 720px;
    background-color: green;
  }
}
@media (min-width: 992px){
  .container {
    max-width: 960px;
    background-color: blue;
  }
}
@media (min-width: 1200px){
  .container {
    max-width: 1140px;
    background-color: purple;
  }
}
\`\`\`
\`滿版容器可用.container-fluid\`

-----------------------------------------------
## 列(Row)
\`\`\`css
.row{
  display: flex; 
  flex-wrap: wrap; /*預設裡面容器會自動換行*/
  margin-right: -15px;
  margin-left: -15px;
}
\`\`\`
### 可添加的樣式
\`\`\`css
.row .flex-row
.row .flex-row-reverse
.row .flex-column
.row .flex-column-reverse

.row .justify-content-start
.row .justify-content-end
.row .justify-content-center
.row .justify-content-between
.row .justify-content-around

.row .align-items-start
.row .align-items-end
.row .align-items-center
.row .align-items-baseline
.row .align-items-stretch

.row .flex-nowrap
.row .flex-wrap
.row .flex-wrap-reverse

.row .flex-wrap .align-content-start 
.row .flex-wrap .align-content-end 
.row .flex-wrap .align-content-center
.row .flex-wrap .align-content-around
.row .flex-wrap .align-content-stretch
\`\`\`

-----------------------------------------------
## 欄(Col)
\`\`\`html
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
</div>
\`\`\`
\`\`\`css
.col{
    /*螢幕低於576px時width: 100%*/
    max-width: 100%;
    flex-grow: 1; /*佔總欄(3)比是1*/
    flex-basis: 0; 
}
.col-sm-6{
    /*螢幕超過576px時width: 50%*/
}
.col-md-6{
    /*螢幕超過768px時width: 50%*/
}
.col-lg-4{
    /*螢幕超過在992px時width: 33.3%*/
}
.col-xl-3{
    /*螢幕超過在992px時width: 25%*/
}
\`\`\`
### 可添加的樣式
\`\`\`css
.col .offset-4 /*推移col四格*/ 
.col-md-4 .offset-md-4 /*往右4col*/
.col-md-4 .ml-auto /*將右邊col推到最右*/
.col-md-4 .order-md-3 /*在中螢幕時順序3*/

.col .align-self-start
.col .align-self-end
.col .align-self-center
.col .align-self-baseline
.col .align-self-stretch

.col .order-first /*order:-1*/
.col .order-1 /*order:1*/
.col .order-2 /*order:2*/
.col .order-3 /*order:3*/ 
.col .order-last /*order:13*/
\`\`\`
### order排序應用
\`\`\`html
<div class="row">
    <div class="col-3 order-3">1</div>
    <div class="col-3 order-4">2</div>
    <div class="col-3 order-1">3</div>
    <div class="col-3 order-2">4</div>
</div>
\`\`\`
\`原本排序：1>2>3>4，加order後排序變：3>4>1>2\`
\`\`\`html
<div class="row">
    <div class="col-3 order-sm-3">1</div>
    <div class="col-3 order-sm-4">2</div>
    <div class="col-3 order-sm-1">3</div>
    <div class="col-3 order-sm-2">4</div>
</div>
\`\`\`
\`再加上sm表示在行動版以上排序才會是：3>4>1>2\`

-----------------------------------------------
## Bootstrap預設樣式
### 字體
\`\`\`css
.display1 /*font-size: 96px*/
.display2 /*font-size: 88px*/
.display3 /*font-size: 72px*/
.display4 /*font-size: 56px*/

.h1 /*font-size: 40px*/
.h2 /*font-size: 32px*/
.h3 /*font-size: 28px*/
.h4 /*font-size: 24px*/
.h5 /*font-size: 20px*/
.h6 /*font-size: 16px*/
\`\`\`
### 顏色
\`\`\`css
.primary /*藍色(主要的)*/
.secondary /*灰色(次要的)*/
.success /*綠色(成功的)*/
.danger /*紅色(危險的)*/
.warning /*黃色(警告的)*/
.info /*青色(通知/信息)*/
.light /*灰色*/
.dark /*黑色*/
.white /*白色*/
.transparent /*透明*/
.text-{color} /*文字顏色{替換}*/
.bg-{color} /*背景顏色{替換}*/
.border-{color} /*線框顏色*/
\`\`\`
### 排版
\`\`\`css
/*1rem=16px*/
.mt-1 /*margin-top: 4px*/
.mr-2 /*marign-right: 8px*/
.mb-3 /*margin-bottom: 16px*/
.ml-4 /*margin-left: 24px*/
.mx-auto /*margin: 0 auto*/

.pt-5 /*padding-top: 48px*/
.px-3 /*padding-x: 16px*/
.py-4 /*padding-y: 24px*/
.pl-5 /*padding-left: 48px*/

.w-25 /*width: 25%*/
.w-100 /*佔滿100%等於後面元素自動換行*/
.mw-50 /*max-width: 50%*/
.h-75 /*height: 75%*/
.mh-100 /*max-height: 100%*/

.flex-sm-row-reverse /*在768px時反轉*/
.d-flex /*display:flex*/
.d-inline /*display:inline*/
.d-block /*display:block*/
.d-inline-block /*display:inline-block*/
.d-sm-none /*在超過小尺寸螢幕時消失*/
\`\`\`
\`\`\`html
<!--一列四欄-->
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>  
</div>

<!--二列二欄-->
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="w-100"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>  
</div>

<!--二列二欄-->
<div class="container">
  <div class="row">
    <div class="col-6"></div>
    <div class="col-6"></div>
    <div class="col-6"></div>
    <div class="col-6"></div>
  </div>  
</div>
\`\`\`
### 圖片、文字
\`\`\`css
.img-fluid /*max-width:100%，height:auto*/
.img-thumbnail /*在圖片加上外框線*/
.rounded /*增加圓角*/
.text-center /*置中，在圖片外層容器添加可置中*/
.mx-auto .d-block /*圖片置中*/
.clearfix /*清除浮動display:block，clear:both，content:""*/
.sr-only /*畫面隱藏，給瀏覽器了解該元素*/
\`\`\`
\`\`\`html
<!--圖片置中-->
<img class="img-fluid mx-auto d-block" width="600" src="...">

<!--圖片和文字置中-->
<div class="text-align">
  <img class="img-fluid" width="600" src="...">
</div>

<!--圖片和下方描述-->
<figure class="figure">
  <img src="..." class="figure-img img-fluid">
  <figcaption class="figure-caption">圖片描述</figcaption>
</figure>
\`\`\`
### 影音嵌入
\`\`\`html
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="影片網址"></iframe>
</div>
\`\`\`
\`影片網址內需要有/embed/字樣\`
\`\`\`css
.embed-responsive .embed-responsive-21by9 /*影片尺寸21:9*/
.embed-responsive .embed-responsive-16by9 /*影片尺寸16:9*/
.embed-responsive .embed-responsive-4by3 /*影片尺寸4:3*/
.embed-responsive .embed-responsive-1by1 /*影片尺寸1:1*/
\`\`\`
### 固定選單
\`\`\`html
<div class="navbar navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#"></a>
</div>
\`\`\`
\`\`\`css
.fixed-top /*將選單固定在上方*/
.fixed-bottom /*將選單固定在下方*/
.sticky-top /*將選單在滾動時固定position:sticky，top:0，z-index: 1020
\`\`\``,__vite_glob_0_9=Object.freeze(Object.defineProperty({__proto__:null,default:Flexbox____},Symbol.toStringTag,{value:"Module"})),Fontawesome=`---
title: Fontawesome
date: 2022-04-09
tags: ["CSS"]
---
## Font Awesome 5
1. 將\`<head>\`加入\`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">\`
2. 使用[font awesome 5](https://fontawesome.com/v5/icons/)搜尋icon
\`\`\`html
<i class="fas fa-camera"></i>
<i class="fas fa-camera fa-xs"></i><!--小型-->
<i class="fas fa-camera fa-sm"></i><!--中型-->
<i class="fas fa-camera fa-lg"></i><!--大型-->
\`\`\`

-----------------------------------------------
## Font Awesome 6
1. 將\`<head>\`加入\`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\`
2. 使用[font awesome 6](https://fontawesome.com/icons)搜尋icon
\`\`\`html
<i class="fa-solid fa-camera"></i>
<i class="fa-solid fa-camera fa-2xs"></i><!--超小型-->
<i class="fa-solid fa-camera fa-sm"></i><!--小型-->
<i class="fa-solid fa-camera fa-lg"></i><!--中型-->
<i class="fa-solid fa-camera fa-xl"></i><!--大型-->
<i class="fa-solid fa-camera fa-2xl"></i><!--超大型-->
\`\`\`

-----------------------------------------------
## 加入在偽元素中
\`\`\`css
.box::before{
    content: "\\f0e0"; /*圖樣編號*/
    font-family: "Font Awesome 5 Free";
    font-size: 24px; /*調整大小*/
    font-weight: 900; /*調整實心或空心*/
}
\`\`\`
* 調整為元素位置
\`\`\`css
 .box{
    position: relative;
}
.box::before{
    position: absolute;
}
\`\`\`
* 讓content內的文字換行
\`\`\`css
.box::before{
    display: inline/inline-block;
    content: "第一行文字\\A第二行文字";
    white-space: pre-wrap;
}
\`\`\`

-----------------------------------------------
## 動態加入fontawesome
\`\`\`html
<a href="image/pic.jpg">圖片檔</a>
<a href="image/file.doc">文件檔</a>
\`\`\`
\`\`\`js
$("a[href$='.jpg']").addClass("fa fa-file-photo-o");//在a標籤的href裡如果找到.jpg關鍵字就執行
$("a[href$='.doc']").addClass("fa fa-file-word-o");//在a標籤的href裡如果找到.doc關鍵字就執行
\`\`\`
\`先到html引入fontawesome cdn\``,__vite_glob_0_10=Object.freeze(Object.defineProperty({__proto__:null,default:Fontawesome},Symbol.toStringTag,{value:"Module"})),Google_Maps_API=`---
title: Google Maps API
date: 2021-02-21
tags: ["JavaScript"]
---
## 應用程式介面(Application Programming Interface)
* 簡稱API。
* 應用程式提供的服務，用來接收或傳送資料給應用程式。例如 :
  * [Heroku](https://www.heroku.com/)，主機服務。
  * [GoogleMap](https://cloud.google.com/)，地圖導覽服務。
  * [Firebase](https://firebase.google.com/)，資料庫服務

-----------------------------------------------
## Google Map API
1. 在Google雲端平台創建一個帳戶(需綁定一張信用卡)。(不會自動收取費用，除非手動升級)
2. 在雲端平台上建立一個專案。
3. 點擊"地圖管理"→"CREATE NEW MAP ID"，新建一個ID。
4. 點擊"地圖樣式"→"CREATE NEW MAP STYLE"，新建一個地圖樣式。
5. 點擊"解決方案建構工具"→"將程式碼複製到剪貼簿"。
6. 貼到編輯器上，開始建置地圖。

-----------------------------------------------
## 初始化地圖
* 以夢時代為顯示中心。
\`\`\`js
// <-----html----->
div#map
  script(src="https://maps.googleapis.com/maps/api/js?key={{{API金鑰}}}&callback=initMap&libraries=&v=weekly" defer)

// <-----css----->
#map
  height: 100%

html,body
  height: 100%
  margin: 0
  padding: 0

// <-----js----->
function initMap(){
//初始化
   const map = new google.maps.Map(document.getElementById("map"), {
  //新增一張地圖
    zoom: 15,
    //縮放距離1~22
    center:{lat: 22.5948959,lng: 120.3048485},
    //起始中心點位置
  });
}
\`\`\`

-----------------------------------------------
## 建立一個Marker
* 建立夢時代marker。
\`\`\`js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
  });
  const marker = new google.maps.Marker({
  //新增一個marker
    position: {lat: 22.5948959,lng: 120.3048485},
    //marker的座標位置
    map: map,
    //顯示在哪張地圖上
    title: "Dream Mall"
    //marker的位置名稱
  });
};
\`\`\`

-----------------------------------------------
## 利用for迴圈建立多個Marker
* 建立台鋁MLD以及夢時代marker。
\`\`\`js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
  });
  let markers = [
    {
      position:{lat: 22.5948959,lng: 120.3048485},
      map: map,
      title: "Dream Mall"
    },
    {
      position:{lat: 22.6029083,lng: 120.301739},
      map: map,
      title: "MLD"
    },
  ]
  for(let i=0;i<markers.length;i++){
    let marker = new google.maps.Marker(markers[i]);
  }
};
\`\`\`

-----------------------------------------------
## 利用for迴圈建立多個Marker + ajax
* 建立高雄所有輕軌站marker。
\`\`\`js
// <-----js----->
function initMap(){
  const map = new google.maps.Map(
    document.getElementById("map"), 
    {
    zoom: 13,
    center: {lat: 22.5985275,lng: 120.3237249}
    }
  );
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://data.kcg.gov.tw/dataset/f4375239-af26-40f6-8394-d942f3ecf753/resource/ad36b1f2-8a2c-4491-a516-da607bd96c39/download/light-rail-station.json");
  xhr.send(null);
  xhr.onload = function(){
    let data = JSON.parse(xhr.responseText);
    for(let i=0 ; i<data.length ; i++){
      let lng = data[i].Longitude;
      let lat = data[i].Latitude;
      let title = data[i]["車站中文名稱"];
      let markers = new google.maps.Marker(
        {
          position: {lng: lng,lat: lat},
          map: map,
          title: title
        }
      )
    }
  }
};
\`\`\`

-----------------------------------------------
## 自訂marker樣式
\`\`\`js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {lat: 22.5985275,lng: 120.3237249},
  });
  const marker = new google.maps.Marker({
    position: {lat: 22.5985275,lng: 120.3237249},
    map: map,
    title: "住家",
    //marker樣式
    icon: "https://i.imgur.com/7ZAeTg4.png"
  })
};
\`\`\`

-----------------------------------------------
## 套用styles樣式
* [SNAZZY MAPS](https://snazzymaps.com/)網站，有提供許多Google Maps的樣式，可以拿來套用。
\`\`\`js
// <-----js----->
function initMap(){
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
    //設定樣式
    styles:[
      {
        "elementType": "labels",
        "stylers": [{"visibility": "off"},{"color": "#f49f53"}]
      },
      {
        "featureType": "landscape",
        "stylers": [{"color": "#f9ddc5"},{"lightness": -7}]
      },
      {
        "featureType": "road",
        "stylers": [{"color": "#813033"},{"lightness": 43}]
      },
      {
        "featureType": "poi.business",
        "stylers": [{"color": "#645c20"},{"lightness": 38}]
      },
      {
        "featureType": "water",
        "stylers": [{"color": "#1994bf"},{"saturation": -69},{"gamma": 0.99},{"lightness": 43}]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#f19f53"},{"weight": 1.3},{"visibility": "on"},{"lightness": 16}]
      },
      {
        "featureType": "poi.business"
      },
      {
        "featureType": "poi.park",
        "stylers": [{"color": "#645c20"},{"lightness": 39}]
      },
      {
        "featureType": "poi.school",
        "stylers": [{"color": "#a95521"},{"lightness": 35}]
      },
      {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#813033"},{"lightness": 38},{"visibility": "off"}]
      },
      {
        "elementType": "labels"
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [{"color": "#9e5916"},{"lightness": 32}]
      },
      {
        "featureType": "poi.government",
        "stylers": [{"color": "#9e5916"},{"lightness": 46}]
      },
      {
        "featureType": "transit.station",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit.line",
        "stylers": [{"color": "#813033"},{"lightness": 22}]
      },
      {
        "featureType": "transit",
        "stylers": [{"lightness": 38}]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#f19f53"},{"lightness": -10}]
      },
    ]
  });
};
\`\`\``,__vite_glob_0_11=Object.freeze(Object.defineProperty({__proto__:null,default:Google_Maps_API},Symbol.toStringTag,{value:"Module"})),Gulp_______=`---
title: Gulp壓縮圖片並優化
date: 2023-08-19
tags: ["Gulp"]
---
## gulp-imagemin
1. 在專案中打開終端機安裝\`gulp-imagemin\`套件(版本@7.1.0)
\`\`\`bash
$ npm install gulp-imagemin@7.1.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  return gulp
    .src('src/images/**/*.*', { encoding: false })
    .pipe(imagemin()) //執行優化(壓縮)
    .pipe(gulp.dest('dist/img'));
});
\`\`\`
\`{ encoding: false }多增加這行，可以確保圖片不會被以編碼方式處理\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp imagemin
\`\`\`

-----------------------------------------------
4. 執行後會自動壓縮img裡的圖片，到dist裡的img資料夾裡
\`\`\`html
you project
├─── node_modules/    
├─── dist/
│     └─── img/
│           │
│           └─── logo.svg     # 壓縮過的
│ 
├─── src/
│     └─── img/
│           │
│           └─── logo.svg     # 未壓縮過的
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
* \`imagemin-mozjpeg\`設定JPEG圖片
    * \`quality\`: 壓縮品質
        * \`0\`: 壓縮最大，品質最差
        * \`75\`: 預設值
        * \`100\`: 無壓縮，品質最好
    * \`progressive\`: 布林值，圖像在加載時會先顯示模糊的預覽，然後逐漸增加清晰度(預設值true)
* \`imagemin-optipng\`: 設定PNG圖片的
    * \`optimizationLevel\`: 優化級別
        * \`0\`: 沒有優化
        * \`1\`: 基本的優化，移除不必要的元數據
        * \`2\`: 輕微的優化，更進一步優化掃描線過濾和設置標誌(預設值)
        * \`3\`: 預設級別，包括輕微的壓縮，但不會影響圖片品質
        * \`4\`: 更進一步的壓縮和剝離
        * \`5\`: 更強的壓縮和剝離
        * \`6\`: 最強的壓縮，可能會稍微影響圖片品質
        * \`7\`: 最強的壓縮，可能會明顯影響圖片品質
* \`imagemin-gifsicle\`: 設定GIF圖片
    * \`interlaced\`: 布林值，先顯示大致輪廓，然後逐漸填充細節(預設值false)
* \`imagemin-svgo\`: 設定SVG圖片
    * \`plugins\`: 陣列，自訂應用的優化插件:
        * \`cleanupIDs\`: 布林值，用於控制是否清理SVG中的無用的ID(預設值true)
        * \`removeViewBox\`: 布林值，用於控制是否刪除SVG中的viewBox屬性(預設值true)
        * \`removeUselessStrokeAndFill\`: 布林值，用於刪除無用的stroke和fill屬性(預設值true)
        * \`removeDimensions\`: 布林值，用於刪除SVG中的width和height屬性(預設值false)
        * \`removeUselessDefs\`: 布林值，用於刪除SVG中無用的<defs>元素(預設值true)
        * \`convertColors\`: 布林值，用於嘗試將顏色值轉換為合適的CSS顏色名稱如果適用(預設值true)
\`\`\`js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  return gulp
    .src('src/images/**/*.*', { encoding: false })
    .pipe(
      imagemin([
        imagemin.mozjpeg({
          quality: 80, //壓縮品質
        }),
        imagemin.optipng({
          optimizationLevel: 1 //優化級別
        }),
        imagemin.gifsicle({
          interlaced : true //漸進式渲染
        }),
        imagemin.gifsicle()
      ])
    )
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('imagemin'));
\`\`\`

-----------------------------------------------
7. 【補充】安裝\`gulp-newer\`套件：只針對新加入的檔案做動作
\`\`\`
$ npm install gulp-newer
\`\`\`
\`\`\`js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

gulp.task('imagemin', function(){
  return gulp
    .src('src/images/**/*.*', { encoding: false })
    .pipe(newer('dist/img')) //監控有新圖片時才會做處理
    .pipe(
      imagemin([
        imagemin.mozjpeg({
          quality: 80, 
        }),
        imagemin.optipng({
          optimizationLevel: 1 
        }),
        imagemin.gifsicle({
          interlaced : true
        }),
        imagemin.gifsicle()
      ])
    )
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('imagemin'));
\`\`\`

-----------------------------------------------
8. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_12=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp_______},Symbol.toStringTag,{value:"Module"})),Gulp_____bootstrap____=`---
title: Gulp安裝並建立bootstrap開發環境
date: 2023-08-11
tags: ["Gulp"]
---
## gulp基本指令
|指令|一般|縮寫|
|---|---|---|
|安裝|npm install gulp-sass|npm i gulp-sass|
|移除|npm uninstall gulp-sass|npm uni gulp-sass|
|搜尋|npm search gulp-sass|npm s gulp-sass|
|清單|npm list|npm ls|
|查詢版本|npm --version|npm -v|
|初始化|npm init|---|
|初始化(預設)|npm init -y|---|
|顯示清單|npm list|---|
|更新套件|npm update gulp-sass|---|
|部署到github上|gulp deploy|---|

-----------------------------------------------
## 建立gulp環境
1.下載node.js
* [node.js下載網址](https://nodejs.org/en)
    * LTS：長期維護版(較穩定)
    * Current：目前最新版(較為不穩定)
* 檢查node版本:
\`\`\`bash
$ node -v
\`\`\`

-----------------------------------------------
2.安裝npm套件管理工具
* 安裝npm:
\`\`\`bash
$ npm insatll
\`\`\`    
* 檢查npm版本:
\`\`\`bash
$ npm -v
\`\`\`    

-----------------------------------------------
3.安裝gulp全域環境(每台電腦僅需執行一次)   
* 安裝Gulp4:
\`\`\`bash
$ npm install gulp-cli -g
\`\`\`    
* mac安裝Gulp4:
\`\`\`bash
$ sudo npm install gulp-cli -g
\`\`\`  

-----------------------------------------------
4.生成package.json
* 生成自訂package.json:
\`\`\`bash
$ npm init
\`\`\`
* 生成預設package.json:
\`\`\`bash
$ npm init -y
\`\`\`
\`專案資料夾會自動生成package.json檔\`
\`\`\`markdown
you project
└─── package.json  #記錄各種套件的版本，可以自行指定專案的名稱、版本等資訊
\`\`\`

-----------------------------------------------
5.在專案安裝gulp套件
* 安裝gulp套件:
\`\`\`bash
$ npm install gulp
\`\`\`
* 檢查gulp套件版本:
\`\`\`bash
$ gulp -v
\`\`\`
\`專案資料夾會自動生成node_modules/、package-lock.json\`
\`\`\`markdown
you project
├─── node_modules/  #gulp零件包
├─── package-lock.json  #詳細記錄了每個依賴套件的版本，防止不同開發者發生版本變更的意外
└─── package.json         
\`\`\`

-----------------------------------------------
6.將index.html檔新增在src資料夾裡
\`\`\`markdown
you project
├─── node_modules/        
├─── src/
│     │
│     └─── index.html    
│ 
├─── package-lock.json    
└─── package.json        
\`\`\`

-----------------------------------------------
7.在根目錄新增gulpfile.js檔
* gulp.task(): 定義任務名稱
* gulp.src(): 指定來源文件的路徑
* .pipe(): 將導入的檔案做處理
* gulp.dest(): 指定文件輸出目錄
* gulp.watch(): 監聽指定文件的變動
* gulp.serise(): 將任務串連
\`\`\`js
const gulp = require('gulp'); //載入gulp套件

gulp.task('copyHTML', function(){ //創建'copyHTML'任務
  return gulp
    .src('src/**/*.html') //導入html原始路徑
    .pipe(gulp.dest('dist')) //編譯到'dist'資料夾
});
\`\`\`
\`\`\`markdown
you project
├─── node_modules/        
├─── src/
│     │
│     └─── index.html     
│
├─── gulpfile.js          # gulp配置檔案
├─── package-lock.json    
└─── package.json         
\`\`\`

-----------------------------------------------
8.在終端機執行指令
\`\`\`bash
$ gulp copyHTML
\`\`\`
\`執行後dist資料夾內會自動複製出一個index.html\`
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── index.html    # HTML檔案(複製出來的)
│ 
├─── src/
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json       
\`\`\`

-----------------------------------------------
9.安裝gulp-sass編譯套件和sass(版本1.62.0)
* 安裝gulp-sass套件:
\`\`\`bash
$ npm install gulp-sass
\`\`\`
* 安裝sass套件:
\`\`\`bash
$ npm install sass@1.62.0
\`\`\`
\`\`\`js
const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); //載入gulp-sass套件

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist')) 
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*') //所有在scss子資料夾中的所有檔
    .pipe(
      sass().on('error',sass.logError) //編譯錯誤時，顯示提示訊息
    ) 
    .pipe(gulp.dest('dist/css')) ////編譯到'dist'底下的'css'資料夾
});
\`\`\`

-----------------------------------------------
10.安裝bootstrap套件(版本4.6.2)
\`\`\`bash
$ npm install bootstrap@4.6.2
\`\`\`

-----------------------------------------------
11.建立all.scss
* 在src資料夾裡新增css資料夾，然後建立all.scss
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json         
\`\`\`

-----------------------------------------------
12.將bootstrap的變數檔複製到本地
* 將node_modules/bootstrap/scss/_variables.scss複製到src/scss/helpers
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     ├─── helpers
│     │     │     │
│     │     │     └───_variable.scss  #從node_modules複製過來的
│     │     │
│     │     ├─── _custom.scss  #自定義樣式
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json         
\`\`\`
\`_variable.scss有底線的檔案不會被編譯，但可以被合併\`

-----------------------------------------------
13.打開all.scss檔引用boostrap
\`\`\`scss
@import "../../node_modules/bootstrap/scss/functions"; //bootstrap，設置文字顏色、背景顏色、邊框等樣式

@import "./helpers/variables"; //本地檔案，可修改bootstrap常用變數

@import "../../node_modules/bootstrap/scss/mixins"; //bootstrap，處理顏色、尺寸、間距可重複使用函數

@import '../../node_modules/bootstrap/scss/bootstrap.scss'; //bootstrap，元件檔案

@import 'custom'; //本地檔案，編寫用
\`\`\`

-----------------------------------------------
14.回到index.html裡引用css
\`\`\`html
<head>
  <link rel="stylesheet" href="css/all.css">
</head>
\`\`\`

-----------------------------------------------
15.回到gulpfile.js添加任務清單
\`\`\`js
gulp.task('default', gulp.series('copyHTML','sass'));
\`\`\`
\`\`\`bash
$ gulp
\`\`\`
\`只要執行'gulp'會接續執行'copyHTML'、'sass'任務\`

-----------------------------------------------
## 若遇到cannot find module "nan"
1. 清除npm緩存
\`\`\`bash
$ npm cache clean --force
\`\`\`
2. 在根目錄下運行安裝nan模組
\`\`\`bash
$ npm install nan --save
\`\`\``,__vite_glob_0_13=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp_____bootstrap____},Symbol.toStringTag,{value:"Module"})),Gulp_css______________=`---
title: Gulp將css樣式加上前綴增加瀏覽器兼容性
date: 2023-08-14
tags: ["Gulp"]
---
## gulp-postcss
1. 在專案中打開終端機安裝\`gulp-postcss\`、\`autoprefixer\`、\`cssnano\`、\`gulp-sass\`、\`sass\`套件(版本@1.62.0)
\`\`\`bash
$ npm install gulp-postcss autoprefixer cssnano gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(
      postcss([ 
        autoprefixer(), //使用autoprefixer套件，將編譯完成的CSS做PostCSS處理，確保你的CSS在不同瀏覽器中正確顯示
        cssnano() //使用cssnano套件，去除不必要的空格、注釋從而壓縮和最小化CSS
      ])
    )
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp sass
\`\`\`

-----------------------------------------------
4. 執行結果會將css樣式加上前綴詞\`-webkit-\`讓瀏覽器兼容性更好
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── css/
│           │
│           └─── all.css    #加上前綴詞的css檔
│   
├─── src/
│     └─── scss/
│           │
│           └─── all.scss   #未加上前綴詞的檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到index.html引入css
\`\`\`html
<head>
    <link rel="stylesheet" href="css/all.css">
</head>
\`\`\`

-----------------------------------------------
6. 回到gulpfile.js啟用\`cssnano\`高級轉換組件
\`\`\`bash
$ npm install cssnano-preset-advanced
\`\`\`
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(
      postcss([ 
        autoprefixer(),
        cssnano({
          preset: "advanced" //更改cssnano變成進階模式
        })
      ])
    )
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
7. 啟用\`postcss-preset-env\`套件
\`\`\`bash
npm install postcss-preset-env
\`\`\`
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(
      postcss(
        [ 
          postcssPresetEnv(), //兼容性自動選擇插件
          autoprefixer(),
          cssnano({
            preset: "advanced"
          })
        ]
      )
    )
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
8. 啟用\`postcss-flexbugs-fixes\`套件
\`\`\`bash
$ npm install postcss-flexbugs-fixes
\`\`\`
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(
      postcss([ 
        postcssFlexbugsFixes(), //修復Flexbox在不同瀏覽器中的一些兼容性問題
        postcssPresetEnv(), 
        autoprefixer(),
        cssnano({
          preset: "advanced" 
        })
      ])
    )
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('sass'));
\`\`\`

-----------------------------------------------
9. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_14=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp_css______________},Symbol.toStringTag,{value:"Module"})),Gulp_javascript_______=`---
title: Gulp將javascript整合成穩定版本
date: 2023-08-13
tags: ["Gulp"]
---
## gulp-babel
1. 在專案中打開終端機安裝\`gulp-babel\`、\`@babel/core\`、\`@babel/preset-env\`套件
\`\`\`bash
$ npm install gulp-babel @babel/core @babel/preset-env
\`\`\`
\`@開頭的套件，表示這是一個由特定組織或作者維護的套件\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') //引用js檔案來源
    .pipe(
      babel({  //使用babel套件
        presets:['@babel/env'] //設定使用'@babel/env'套件進行編譯
      })
    )  
    .pipe(gulp.dest('dist/js')) //js編譯完成路徑
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp babel
\`\`\`

-----------------------------------------------
4. 執行結果會將src裡的所有js檔(ES5、ES6、ES7)編譯，生成到dist裡變成穩定的all.js
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── js/
│           │
│           └─── all.js   #編譯完成的js檔
│   
├─── src/
│     └─── js/
│           │
│           └─── all.js   #開發時編輯用的js檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到index.html引入js
\`\`\`html
<body>
    <script src="js/all.js"><\/script>
</body>
\`\`\`

-----------------------------------------------
6. 回到gulpfile.js設置屬性
    * \`minified\`: 布林值，是否要壓縮代碼
\`\`\`js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') 
    .pipe(
      babel({
        presets:['@babel/env'],
        minified: true //壓縮代碼
      })
    )  
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('default', gulp.series('babel'));
\`\`\`

-----------------------------------------------
7. 【補充】安裝\`gulp-plumber\`編譯發生錯誤時，將訊息傳到控制台
\`\`\`html
$ npm install gulp-plumber
\`\`\`
\`\`\`js
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') 
    .pipe(plumber())
    .pipe(
      babel({
        presets:['@babel/env'],
        minified: true //壓縮代碼
      })
    )  
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('default', gulp.series('babel'));
\`\`\`
-----------------------------------------------
8. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_15=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp_javascript_______},Symbol.toStringTag,{value:"Module"})),Gulp_scss_____css=`---
title: Gulp將scss自動編譯成css
date: 2023-08-12
tags: ["Gulp"]
---
## gulp-sass
1. 在專案中打開終端機安裝\`gulp-sass\`和\`sass\`套件(版本@1.62.0)
\`\`\`bash
$ npm install gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.scss') //引用scss檔案路徑
    .pipe(
        sass().on('error',sass.logError) //sass編譯過程中捕捉錯誤並輸出錯誤訊息，以避免因編譯錯誤而中斷gulp
    )
    .pipe(gulp.dest('dist/css')) //css編譯完成路徑
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp sass
\`\`\`

-----------------------------------------------
4. 執行結果會將src裡的scss編譯，生成到dist裡變成css
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── css/
│           │
│           └─── all.css    #編譯完成的css檔
│   
├─── src/
│     └─── scss/
│           │
│           └─── all.scss   #開發時編輯用的scss檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到index.html引入css
\`\`\`html
<head>
    <link rel="stylesheet" href="css/all.css">
</head>
\`\`\`

-----------------------------------------------
6. 回到gulpfile.js設置屬性
    * \`outputStyle\`: 字串，編譯出的檔案形式
        * \`'nested'\`: 保留原始的巢狀層次結構(預設值)
        * \`'expanded'\`: 保留巢狀的層次結構，每個選擇器和屬性都有自己的行
        * \`'compact'\`: 將每個規則放在單獨的一行
        * \`'compressed'\`: 刪除所有的空白字符和換行，減少加載時間
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(sass({
        outputStyle: 'compressed' //編譯出的檔案形式為'壓縮'
    })
    .on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('sass'));
\`\`\`

-----------------------------------------------
7. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_16=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp_scss_____css},Symbol.toStringTag,{value:"Module"})),Gulp____js_________=`---
title: Gulp將引入的js套件合併成一個檔案
date: 2023-08-16
tags: ["Gulp"]
---
## gulp-concat
1. 在專案中打開終端機安裝\`gulp-concat\`、\`jquery\`、\`bootstrap\`套件(版本@4.6.2)
\`\`\`bash
$ npm install gulp-concat jquery bootstrap@4.6.2
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function(){
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.slim.min.js', //引入jQuery
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', //引入bootstrap
      'src/js/*.js' //引入自定義js
    ])
    .pipe(concat('all.js')) // 合併檔案，名稱為：all.js
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp concat
\`\`\`

-----------------------------------------------
4. 執行結果會在src裡新增一個\`all.js\`檔
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── js/
│           │
│           └─── all.js  #合併的js檔
│  
├─── src/
│     └─── js/
│           │
│           └─── all.js     
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js添加任務清單
\`\`\`js
gulp.task('default', gulp.series('concat'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_17=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp____js_________},Symbol.toStringTag,{value:"Module"})),Gulp_____map______=`---
title: Gulp生成程式碼map以利除錯編譯
date: 2023-08-15
tags: ["Gulp"]
---
## gulp-sourcemaps
1. 在專案中打開終端機安裝\`gulp-sourcemaps\`、\`gulp-sass\`、\`sass\`套件(版本@1.62.0)
\`\`\`bash
$ npm install gulp-sourcemaps gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(sourcemaps.init()) //sourcemaps初始化
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(sourcemaps.write("./")) //在當前的目錄下，生成sourcemaps文件
    .pipe(gulp.dest('dist/css'))
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp sass
\`\`\`

-----------------------------------------------
4. 執行結果會在all.css旁自動新加入一個.map檔
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── css/
│           │
│           ├─── all.css  
│           │   
│           └─── all.css.map  #自動生成的map檔
│  
├─── src/
│     └─── scss/
│           │
│           ├─── all.scss   
│           │
│           └─── helpers
│                 │
│                 └─── _variables.scss
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js添加任務清單
\`\`\`js
gulp.task('default', gulp.series('sass'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_18=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp_____map______},Symbol.toStringTag,{value:"Module"})),Gulp____Nunjucks=`---
title: Gulp網頁模版Nunjucks
date: 2023-08-20
tags: ["Gulp"]
---
## gulp-nunjucks-render
1. 在專案中打開終端機安裝\`gulp-nunjucks-render\`套件
\`\`\`bash
$ npm install gulp-nunjucks-render
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('layout',function(){
  return gulp
    .src('src/**/*.html')
    .pipe(nunjucksRender({
      path: ['src/templates']
    })) 
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp layout
\`\`\`

-----------------------------------------------
4. 執行後會自動壓縮img裡的圖片，到dist裡的img資料夾裡
\`\`\`html
you project
├─── node_modules/    
├─── dist/
│     └─── index.html        # 模板＋內容
│ 
├─── src/
│     ├─── templates/
│     │     │
│     │     └─── layout.njk  # 模板<head>、<body>
│     │
│     └─── index.html        # 內容<main>、<main>
│
├─── gulpfile.js
├─── package-lock.json
└─── package.json
\`\`\`

-----------------------------------------------
### nunjucks模板基礎用法1
#### 將重複標籤寫成模板
* layout.njk(父層)：
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網頁標題名稱</title>
  <link rel="stylesheet" href="css/all.css">
</head>
<body cz-shortcut-listen="true">
  <main>
    {% block content %}{% endblock %}
  </main>
  <script src="js/all.js"><\/script>
</body>
</html>
\`\`\`
* index.html(子層)：
\`\`\`html
{% extends "layout.njk" %}

{% block content %}
<div class="container">
  <p>每一頁不同的內容寫在這</p>
</div>
{% endblock %}
\`\`\`
* 渲染出的結果：
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網頁標題名稱</title>
  <link rel="stylesheet" href="css/all.css">
</head>
<body cz-shortcut-listen="true">
  <main>
    <div class="container">
      <p>每一頁不同的內容寫在這</p>
    </div>
  </main>
  <script src="js/all.js"><\/script>
</body>
</html>
\`\`\`

-----------------------------------------------
### 從模板寫回父層
* index.html(子層)
\`\`\`html
{% extends "layout.njk" %}

{% block content %}
<div class="container">
  每一頁不同的內容寫在這
</div>

{{ super() }}
寫回layout.njk(父層)的內容

{% endblock %}
\`\`\`

-----------------------------------------------
### 判斷式顯示
* layout.njk(父層)：
\`\`\`html
  {% if variable %}
  <p>如果是true就換出現這段</p>
  {% endif %}
\`\`\`
* index.html(子層)：
\`\`\`html
  {% set variable = true %}
\`\`\`
* 渲染出的結果：
\`\`\`html
  <p>如果是true就換出現這段</p>
\`\`\`

-----------------------------------------------
* extends用於模板繼承
\`\`\`html
<!-- layout.njk -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Default Title{% endblock %}</title>
</head>
<body>
    <div id="content">
        {% block content %}{% endblock %}
    </div>
</body>
</html>
\`\`\`
\`\`\`html
<!-- index.html -->
{% extends "layout.njk" %}

{% block content %}
撰寫的內容
{% endblock %}
\`\`\``,__vite_glob_0_19=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp____Nunjucks},Symbol.toStringTag,{value:"Module"})),Gulp____________$1=`---
title: Gulp自動刪除上一次的編譯結果
date: 2023-08-18
tags: ["Gulp"]
---
## del
1. 在專案中打開終端機安裝\`del\`套件(版本6.1.1)
\`\`\`bash
$ npm install del@6.1.1
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(){ 
  return del(['dist/**/*','!dist/img']) //刪除dist裡的所有檔案，圖片除外
});

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/*.html') 
    .pipe(gulp.dest('dist'))
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp clean
\`\`\`

-----------------------------------------------
4. 執行後會先執行刪除動作後，再重新生成新的index.html
\`\`\`markdown
you project
├─── node_modules/         
├─── dist/
│     │
│     └─── index.html   #刪除後再重新成的index.html
│ 
├─── src/
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
    * \`gitignore\`: 布林值，刪除時是否要保留版本控制的檔案
    * \`force\`: 布林值，檔案被其他程式佔用或是唯讀檔案是否強制刪除
\`\`\`js
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(){ 
  return del(['dist/**/*','!dist/img'],{
    gitignore: true, //保留git版控檔案
    force: true //強制刪除唯獨檔
  })
    .src('src/*.html') 
    .pipe(gulp.dest('dist')) 
});

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series('copyHTML','clean'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_20=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp____________$1},Symbol.toStringTag,{value:"Module"})),Gulp____________=`---
title: Gulp開啟本地端伺服器瀏覽網站
date: 2023-08-17
tags: ["Gulp"]
---
## browser-sync
1. 在專案中打開終端機安裝\`browser-sync\`、\`gulp-sass\`、\`sass\`套件(版本@1.62.0)
#
\`\`\`bash
$ npm install browser-sync gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist')) 
    .pipe(browserSync.stream()); //更新到瀏覽器
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
    .pipe(browserSync.stream()); //更新到瀏覽器
});

gulp.task('watch', function(){
  browserSync.init({
    server: { 
      baseDir: 'dist', //指定伺服器的基本目錄
    },
  });
  gulp.watch('src/**/*.html', gulp.series('copyHTML'));
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`bash
$ gulp watch
\`\`\`

-----------------------------------------------
4. 執行結果會在dist複製出一個\`index.html\`，dist/css會生成\`all.css\`檔
\`\`\`markdown
you project
├─── node_modules/        
├─── dist/
│     ├─── css/
│     │     │
│     │     └─── all.css
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
    * \`port\`: 數字，指定代理伺服器的埠號
    * \`reloadDelay\`: 數字，重新加載延遲時間
    * \`browser\`: 字串，指定在哪個瀏覽器中打開網站
    * \`open\`: 布林值，指定是否自動打開瀏覽器
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/*.html') 
    .pipe(gulp.dest('dist')) 
    .pipe(browserSync.stream()); 
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(gulp.dest('dist/css'));
    .pipe(browserSync.stream()); 
});

gulp.task('watch', function(){
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    port: 3000,
    reloadDelay: 0,
    browser: 'google chrome',
    open: true
  });
  gulp.watch('src/*.html', gulp.series('copyHTML'));
  gulp.watch('src/scss/**/*.*', gulp.series('sass'));
});

gulp.task('default', gulp.series('copyHTML','sass','watch'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`bash
$ gulp
\`\`\``,__vite_glob_0_21=Object.freeze(Object.defineProperty({__proto__:null,default:Gulp____________},Symbol.toStringTag,{value:"Module"})),HTML____=`---
title: HTML標籤大全
date: 2022-04-02
tags: ["HTML"]
---
## 標籤預設值
|元素|display|
|---|---|
|address、article、aside、blockquote、body、dd、details、div、dl、dt、fieldset、figcaption、figure、footer、form、frame、frameset、h1、h2、h3、h4、h5、h6、header、hr、html、iframe、noframes、legend、p、ul、center、dir、menu、nav、ol、pre、summary、section|block|
|map、output、q、span|inline|
|input、select、img|inline-block|
|area、datalist、head、link、param、title、style、script|none|
|table|table|
|tr|table-row|
|thead|table-header-group|
|tbody|table-row-group|
|tfoot|table-footer-group|
|caption|table-caption|
|col|table-column|
|colgroup|table-column-group|
|td、th|table-cell|
|li|list-item|

-----------------------------------------------
## 網頁初步結構
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw"> <!--整份網頁文件，用來包<head>、<body>標籤-->  
    <head>
        <title>網頁標題</title>
        
        <meta charset="UTF-8"> <!--網頁編碼-->
        
        <!--favicon生產網址：https://realfavicongenerator.net/-->
        <link rel="shortuct icon" href="favicon.icon">
        <link rel="bookmark" href="favicon-32x32.png">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
        <link rel="manifest" href="site.webmanifest"> <!--應用程式相關的資訊(json格式)-->
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#ffffff">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="theme-color" content="#ffffff">

        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--自動將IE瀏覽器升級-->
        
        <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
        <!--響應手機版，首次載入頁面的縮放比emmet快速語法meta:vp-->
        <!--device-width畫面寬度-->
        <!--device-height畫面高度-->
        <!--initial-scale初始縮放比-->
        <!--minimum-scale最小可縮放比-->
        <!--maximum-scale最大可縮放比-->
        <!--user-scalable使用者是否可縮放-->

        <meta http-equiv="refresh"  content="5" url="...">
        <!--進入該網站後5秒後，自動轉跳至其他網頁-->

        <meta name="description" content="網頁說明"> <!--內容建議以，分隔-->
        <meta name="keywords" content="網頁關鍵字"> <!--Google已不看，可改放在說明-->
        <meta name="author" content="網頁作者">
        <meta name="robots" content="noindex"> <!--讓搜尋引擎不要索引這個網頁-->

        <meta property="og:title" content="顯示的FB標題">
        <meta property="og:description" content="FB描述的內容">
        <meta property="og:type" content="website"> <!--網站類型-->
        <meta property="og:url" content="FB上的網址">
        <meta property="og:site_name" content="網站名稱">
        <meta property="og:image" content="顯示的圖片網址">

        <link rel="stylesheet" href="all.css"> <!--引入檔案連結--> 
        <base target="_blank"> <!--定義該網頁的連結方式-->
    </head>
    <body>
        <header>頁首</header>
        <nav>選單列/導覽列</nav>
        <main>主要內容，用來包article、aside標籤</main>
        <article>用來包section標籤</article>
        <section>用來包一段文章h*、p標籤</section>
        <aside>側邊欄</aside>
        <footer>頁腳</footer>
        <details>用來包summary標籤</details>
        <summary>顯示詳細信息</summary>
        <mark>強調的內容(黃底)</mark>
        <time>顯示日期時間</time>
        <script src="引入js檔案連結"><\/script>
    </body>
</html>
\`\`\`
### webmanifest
\`\`\`js
{
    “name”: “simpleWeb”,
    “short_name”: “simpleWeb”,
    “start_url”: “https://simpleWeb.com”,
    “description”: “A simply readable Hacker News app.”,
    “theme_color”: “#ffffff”,
    “background_color”: “#ffffff”,
    “display”: “standalone”,
    “icons”: [
        {
            “src”: “/android-chrome-192x192.png”,
            “sizes”: “192x192”,
            “type”: “image/png”
        },
        {
            “src”: “/android-chrome-512x512.png”,
            “sizes”: “512x512”,
            “type”: “image/png”
        }
    ]
}
\`\`\`

-----------------------------------------------
### 文字類標籤
\`\`\`html
<h1>一級標題</h1>
<h2>二級標題</h2>
<h3>三級標題</h3>
<h4>四級標題</h4>
<h5>五級標題</h5>
<h6>六級標題</h6>

<p>內文</p>

<mark>highlight文字</mark>

<del>被刪除的內容文字</del>

<s>不準確的內容刪除線</s>

<b>純粗體文字</b>

<strong>強調語意的粗體</strong> 

<i>語音或技術用語的斜體</i>

<em>純斜體文字</em> 

<u>文字下底線</u>

<ins>補充的內容</ins> <!--插入被編輯過的新文字-->
cite="連結網址" <!--解釋該段文字被插入或修改的原因-->
datatime="2018-05" <!--插入或被修改的時間-->

<small>較小的文字</small>

<sub>較小的文字(下方)</sub>

<sup>較小的文字(上方)</sup>

<q>" "(符號)</q>

<span>不換行(行內元素)</span>

<abbr title="javascript">JS</abbr> <!--語意(滑鼠比著會顯示)-->

<blockquote>引用的文字(縮排)</blockquote> <!--文章章節內容引用-->
\`\`\`

-----------------------------------------------
## 全域屬性(Global Attributes)
\`\`\`html
<div class="..."></div>
id="..." <!--設定元素唯一值--> 
class="..." <!--設定元素的樣式類別-->  
style="background-color:red" <!--設定元素css樣式-->  
title="..." <!--設定元素的標題--> 
data-*="..." <!--自定義屬性值-->  
lang="en" <!--設定元素內容語言--> 
dir="auto" <!--(預設值)--> 
dir="ltr" <!--文字顯示方向(左到右)--> 
dir="rtl" <!--文字顯示方向(右到左)--> 
accesskey="K" <!--設定元素的快捷鍵--> 
tabindex="3" <!--設定元素按下tab時的跳格順序--> 
contenteditable="true" <!--內容可編輯-->  
contenteditable="false" <!--內容不可編輯-->  
draggable="true" <!--元素可被點擊拖動--> 
draggable="false" <!--元素不可被點擊拖動--> 
translate="true" <!--設定元素內容能被自動翻譯--> 
translate="false" <!--設定元素內容不能被自動翻譯--> 
spellcheck="true" <!--啟動firefox瀏覽器拼字檢查--> 
spellcheck="false" <!--關閉firefox瀏覽器拼字檢查--> 
hidden <!--隱藏--> 
\`\`\`

-----------------------------------------------
## 無序清單(ul)
\`\`\`html
<ul>
    <li>項目一</li>
    <li>項目二</li>
    <li>項目三</li>
</ul>
\`\`\`

-----------------------------------------------
## 有序清單(ol)
\`\`\`html
<ol>
    <li>項目一</li>
    <li>項目二</li>
    <li>項目三</li>
</ol>
start="數字" <!--設定數列起頭編號--> 
reversed <!--讓數列反向呈現--> 
\`\`\`

-----------------------------------------------
## 描述清單(dl)
\`\`\`html
<dl>
    <dt>項目標題</dt>
    <dd>項目敘述</dd>
</dl>
\`\`\`

-----------------------------------------------
## 連結(a)
\`\`\`html
<a href="超連結網址">字字字</a>
title="滑鼠停留顯示的文字" 
target="_blank" <!--另開新視窗--> 
target="_self" <!--以現在視窗開啟--> 
target="_parent" <!--開啟於父層框架--> 
style="text-decoration:none" <!--隱藏文字底線--> 
download="xxx.jpg" <!--直接下載圖片--> 
\`\`\`
\`用來包所有可點擊的元件\`

-----------------------------------------------
## 圖片(img)
\`\`\`html
<img src="圖片網址" alt="視障人士閱讀或圖片無法顯示時的名稱">
ismap <!--設定圖片是影像地圖的一部分-->
srcset <!--搭配media可在不同瀏覽裝置裡載入不同內容(網址)-->
\`\`\`
### 圖片注意事項
\`<img>預設值是display:inline-block會有白色空隙\`
\`\`\`css
img{
    display: block;
    max-width: 100%;
    object-fit: cover;
    object-fit: center center;
}
\`\`\`
### 讓圖片保持1:1
\`\`\`html
<div class="container">
    <div class="item">content</div>
</div>
\`\`\`
\`\`\`css
.container{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-color: red;
}
.item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
\`\`\`
### 讓圖片保持16:9
\`\`\`html
<div class="container">
    <div class="item">content</div>
</div>
\`\`\`
\`\`\`css
.container{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%; //9 ÷ 16 × 100% = 56.25%
    background-color: red;
}
.item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
\`\`\`
### 進階圖片
\`\`\`html
<figure>包覆圖片描述用
    <img src="圖片網址" alt="視障人士閱讀或圖片無法顯示時的名稱">
    title="滑鼠停留顯示的文字"
    width="圖片寬度"
    height="圖片高度" 
    loading="lazy" <!--延遲載入圖片，可提提升效能--> 
    <figcaption>圖片敘述</figcaption>
</figure>
\`\`\`

-----------------------------------------------
## 表格(table)
\`\`\`html
<table>
    <tr> 
        <th>Month</th> 
        <th>Savings</th>
    </tr>
    <tr>
        <td>Sum</td>
        <td>$180</td>
    </tr>
    <tr>
    <td>January</td>
    <td>$100</td>
    </tr>
    <tr>
        <td>February</td>
        <td>$80</td>
    </tr>
</table>
\`\`\`
### 進階表格
\`\`\`html
<table>
width="表格寬度" 
border="框線粗度" 
border="0" <!--無框線-->
colspan="水平合併幾格" 
rowspan="垂直合併幾格" 
rowspan="0" <!--垂直合併到底-->
cellspacing="表格欄位間距"
cellpadding="表格欄位的留白距"
    <caption>用來描述表格</caption>
    <colgroup> <!--欄群組-->
        <col span="1" style="background-color: red"/> <!--第一欄-->
        <col span="1" style="background-color: yellow"/> <!--第二欄-->
    </colgroup>
    <thead>
        <tr> <!--tr列-->
            <th>Month</th> <!--th表頭-->
            <th>Savings</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Sum</td>
            <td>$180</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
</table>
\`\`\`

-----------------------------------------------
## 音訊(audio)
\`\`\`html
<audio controls>
    <source src="檔案連結.wav" type="audio/wav">
</audio>
autoplay <!--自動播放-->
controls <!--出現撥放控制按鈕-->
loop <!--自動循環播放-->
preload <!--進入網頁時優先載入-->
muted <!--靜音->
\`\`\`

-----------------------------------------------
## 影片(video)
\`\`\`html
<video src="影片連結" controls></video>
width="影片寬度"
height="影片高度"
type="video/mp4" <!--影片類型-->
type="video/ogg" <!--影片類型-->
poster <!--未按下播放前顯示圖片-->
autoplay <!--自動播放-->
controls <!--出現撥放控制按鈕-->
loop <!--自動循環播放-->
preload <!--進入網頁時優先載入-->
muted <!--靜音->
\`\`\`

-----------------------------------------------
## 按鈕(button)
\`\`\`html
<button>按鈕</button>
disabled <!--禁止點擊-->
type="button" <!--單純按鈕-->
type="reset" <!--清空按鈕-->
type="submit" <!--送出按鈕-->
name="按鈕名稱"
value="按鈕的值"
onclick="location.href='要前往的網址'"
\`\`\`

-----------------------------------------------
## 下拉選單(select)
\`\`\`html
<select>
    <option>選項一</option>
    <option>選項二</option>
    <option>選項三</option>
</select>
\`\`\`
### 群組選單
\`\`\`html
<select>
name="選單名稱"
disabled <!--禁用選單-->
required <!--必填選單-->
multiple <!--多選選單(按住ctrl鍵)-->
multiple size="一次顯示幾格選單"
    <optgroup label="群組一標題"> <!--區分項目名稱(不可選)-->
        <option>選項一</option>
        selected <!--預選項目-->
        disabled <!--禁用項目-->
        value="選單的值"
        <option>選項二</option>
        <option>選項三</option>
    </optgroup>
    <optgroup label="群組二標題">
        <option>選項一</option>
        <option>選項二</option>
    </optgroup>
</select>
\`\`\`

-----------------------------------------------
## 文字輸入欄(textarea)
\`\`\`html
<textarea>文字欄位預設文字</textarea>
name="欄位名稱"
cols="可以打幾個字元"
rows="可以打幾行"
maxlength="最多字數"
minlength="最少字數" 
placeholder <!--輸入欄提示訊息-->
disabled <!--禁用狀態-->
readonly <!--不可編輯-->
required <!--必填欄位-->
\`\`\`

-----------------------------------------------
## 內崁框架(iframe)
\`\`\`html
<iframe src="崁入網址"></iframe>
width="框架寬度" 
height="框架高度" 
frameborder="框架線框粗度" 
frameborder="0" <!--無線框-->
scrolling="no" <!--不要捲軸-->
<object data="崁入網址" type="檔案類型">
    <param name="參數名稱" value="參數值">
</object>

<embed src="崁入網址" type="檔案類型">
\`\`\`

-----------------------------------------------
## 表單(form)
\`\`\`html
<form action="..."> <!--將資料送去哪-->
method="get" <!--將資料直接放在網址上-->
method="post" <!--將資料放在http傳輸包中送出-->
name="對應資料庫" <!--label和input要一樣-->
    <label for="mail">e-mail：</label>
    <input id="mail" type="text" name="e-mail" placeholder="請輸入電子信箱">
    <input type="submit" value="送出">
</form>
\`\`\`
\`按送出後name的值會顯示在http上，email="輸入框裡的值"\`
### 單選按鈕(radio)
\`\`\`html
<form action="..."> 
    <label for="mail">性別：</label>
    <input id="mail" type="radio" name="sex" value="man"> 男生
    <input id="mail" type="radio" name="sex" value="woman"> 女生
    <input type="submit" value="送出">
</form>
\`\`\`
### 核取方塊(checkbox)
\`\`\`html
<form action="..."> 
    <label for="hobby">興趣：</label>
    <input id="hobby" type="checkbox" name="hobby" value="movie"> 看電影
    <input id="hobby" type="checkbox" name="hobby" value="music"> 聽音樂
    <input id="hobby" type="checkbox" name="hobby" value="comic"> 看漫畫
    <input type="submit" value="送出">
</form>
\`\`\`
### 自訂核取方塊(checkbox)
\`\`\`html
<label class="checkbox-label">記住此帳號
    <input class="checkbox-input" type="checkbox">
    <span class="checkbox-span"></span>
</label>
\`\`\`
\`\`\`css
.checkbox-label{
    position: relative;
    color: #ffffff;
    padding-left: 1.5rem;
    line-height: 1rem;
    cursor: pointer;

    &:hover{
        .checkbox-span{
            background-color: rgba(#ffffff, 0.8);
        }
    }

    .checkbox-input{
        width: 0;
        height: 0;
        opacity: 0;
    }

    .checkbox-span{
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1rem;
        background-color: #ffffff;
        transition: 0.3s;

        &:before{
            content: "";
            width: 13px;
            height: 3px;
            background-color: #000000;
            transform: translate(4px, 7px) rotate(-45deg);
        }

        &:after{
            content: "";
            width: 8px;
            height: 3px;
            background-color: #000000;
            transform: translate(0px, 7px) rotate(45deg);
        }

    }

    .checkbox-input:checked ~ .checkbox-span{
        background-color: green;
    }

    .checkbox-input:checked ~ .checkbox-span::before{
        display: block;
    }

    .checkbox-input:checked ~ .checkbox-span::after{
        display: block;
    }

}
\`\`\`

-----------------------------------------------
## 輸入(input)
\`\`\`html
<input>按鈕/輸入欄
required <!--必填欄位-->
readonly <!--只能閱讀、不能編輯欄位-->
disabled <!--不可用欄位-->
autofocus <!--載入頁面時自動focus-->
pattern="\\d{10}" <!--必須連續出現10個數字(手機號碼格式)-->
pattern="\\d{4}/\\d{2}/\\d{2}" <!--YYYY/MM/DD(日期格式)-->
pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}" <!--信箱格式-->
value="值(預設內容)"
placeholder="輸入提示訊息"
name="值的名稱"
autocomplete="off" <!--點擊欄位時不出現常用值-->
type="text" <!--輸入文字欄位-->
type="search" <!--搜尋欄-->
type="tel" <!--電話輸入欄位-->
type="url" <!--網址輸入欄位-->
type="email" <!--信箱輸入欄位-->
type="date" value="預設值" min="最小值" max="最大值" <!--日期輸入欄位-->
type="time" value="預設值" min="最小值" max="最大值" <!--時間輸入欄位-->
type="number" value="預設值" min="最小值" max="最大值" step="節數" <!--數字輸入欄位-->
type="range" value="預設值" min="最小值" max="最大值" step="節數" <!--數字滑動範圍-->
type="color" <!--顏色選擇器-->
type="password" <!--輸入密碼欄位-->
type="submit" <!--送出按鈕-->
type="reset" <!--重設表單-->
type="hidden" <!--隱藏資料-->
type="image" <!--圖片送出按鈕-->
type="file" accept="image/jpeg" multiple <!--檔案上傳按鈕(多選)-->
type="button" <!--按鈕-->
type="textarea" <!--多行文字輸入欄-->
inputmode="none" <!--沒有鍵盤-->
inputmode="numeric" <!--只有數字沒有符號-->
inputmode="tel" <!--數字＃＊＋-->
inputmode="decimal" <!--數字＋.-->
inputmode="email" <!--英文＠-->
inputmode="url" <!--英文.com-->
inputmode="search" <!--換行鍵＝前往-->
\`\`\`

-----------------------------------------------
## 其他
\`\`\`html
<br>換行

<hr>水平線

<address>文章、作者、地址資訊標籤(斜體)</address>

<pre>文字編排不受改變的呈現</pre>

<code>程式碼</code>
\`\`\`

-----------------------------------------------
## 腳本(script)
\`\`\`html
<script src="..."><\/script>
language="en" <!--腳本語言種類-->
async <!--以非同步的方式加載資源，加載成功後會中斷頁面解析，立即執行資源內容-->
feter <!--以非同步的方式加載資源，加載成功後會在ready前執行資源內容-->
\`\`\``,__vite_glob_0_22=Object.freeze(Object.defineProperty({__proto__:null,default:HTML____},Symbol.toStringTag,{value:"Module"})),Hugo_Blog____=`---
title: Hugo Blog建立成功
date: 2021-01-22
tags: ["Hugo"]
---
## 前言
我所使用的Hugo主題是[beautiful hugo](https://themes.gohugo.io/beautifulhugo/)

當初在建立時，是觀看hahow好學校的[Github免費架站術!輕鬆打造個人品牌](https://hahow.in/courses/5de8fec16117240026540b9c/main)這堂課程來完成的，非常適合像我這樣的初心者，裏頭也包含了創建\`Github\`、\`Hugo\`主題設定、\`Markdown\`語法撰寫的介紹與使用，有興趣的人也可以點擊連結參考看看。

一開始在創建部落格時，我完全不知道該怎麼去調整\`config.toml\`設定檔，搜尋網路上有相關的文章也不多，所以我最後只好一項一項的去測試摸索。雖然每個Hugo主題的設定檔，都可能會有些微不同，但是其中還是會有些相同的設定值可做參考，所以我這邊就來分享關於我的主題設定檔，希望能給也想建立Hugo網站的人一點幫助，省下再去一項一項慢慢測試的時間。

以下是我的設定檔內容，若註解上有上有錯誤的地方，也可以告訴我來做修正。

-----------------------------------------------
## 分享設定
\`\`\`toml
#此網站的連結網址
baseurl = "https://jack842248.github.io"

#語言設定
DefaultContentLanguage = "zh-tw"

#頁籤標題
title = "Jack Huang Blog"

#Hugo主題名稱
theme = "beautifulhugo"

#Disqus評論功能的WebsiteName
disqusShortname = "XXXXXXXXXX"

#Google Analytics的追蹤ID
googleAnalytics = "UA-XXXXXXXXX-X"

#Chroma(新)語法突出顯示，不使用直接註解掉
pygmentsCodeFences = true
pygmentsUseClasses = true

#Pygments(舊)語法突出顯示，不使用直接註解掉
pygmentsStyle = "trac"
pygmentsUseClassic = true

#Syntax Highlighting語法突出顯示，不使用直接註解掉
pygmentOptions = "linenos=inline"
pygmentsCodefencesGuessSyntax = true

#這是我自己額外加的code碼顯示功能，使用樣式是monokai(底下[補充說明]有其他格式可選)
[markup]
  [markup.highlight]
    #讓code碼有編號
    lineNos = true
    #code碼的樣式名稱
    style = "monokai"

#(舊設定)讓code編碼有顏色
useHLJS = false

#設置Banner主標題
homeTitle = "JJ的秒懂筆記" 

#設置Banner副標題
subtitle = "複製貼上就能執行的code"

#網頁中間主要的圖片
logo = "img/avatar-icon.png"

#頁籤旁的小圖示
favicon = "img/favicon.ico"

#設定時間格式(底下[補充說明]有其他格式可選)
dateFormat = "2006-01-02"

#是否顯示閱讀時間
readingTime = true

#是否顯示文章字數
wordCount = true

#是否顯示文章底下分享icon
socialShare = true

#是否延遲顯示評論(要再點擊才會顯示評論)
delayDisqus = true

#是否顯示相關文章
showRelatedPosts = true

#是否隱藏文章作者
hideAuthor = true

#是否產生RSS(別人用 Feedly、Inoreader 之類的工具訂閱你部落格更新)
rss = false

#文章FrontMatter的格式(其他兩種："toml"、"json")
metaDataFormat = "yaml"

#定義哪些section是主要內容
mainSections = ["post","posts"]
\`\`\`

-----------------------------------------------
## 補充說明:
[dateFormat](https://gohugo.io/functions/format#readout)日期格式，可替換成以下幾種:
|輸入語法|輸出樣式|
|---|---|
|.Date|2017-03-03 14:15:59 -0600 CST|
|Monday, January 2, 2006|Friday, March 3, 2017|
|Mon Jan 2 2006|Fri Mar 3 2017|
|January 2006|March 2017|
|2006-01-02|2017-03-03|
|Monday|Friday|
|02 Jan 06 15:04 MST|03 Mar 17 14:15 CST|
|Mon, 02 Jan 2006 15:04:05 MST|Fri, 03 Mar 2017 14:15:59 CST|
|Mon, 02 Jan 2006 15:04:05 -0700|Fri, 03 Mar 2017 14:15:59 -0600|

[markup.highlight](https://gohugo.io/getting-started/configuration-markup#readout)程式碼樣式，可替換成以下幾種:
|樣式名稱|
|---|
|abap、abap、algol、algol_nu、api、arduino、autumn、borland、bw、colorful、dracula、emacs、friendly、fruity、github、igor、lovelace、manni、monokai、monokailight、murphy、native、paraiso-dark、paraiso-light、pastie、perldoc、pygments、rainbow_dash、rrt、solarized-dark、solarized-dark256、solarized-light、swapoff、tango、trac、vim、vs、xcode|

* Google追蹤分析網址[https://analytics.google.com/](https://analytics.google.com/)
* DISQUS評論功能網址[https://blog.disqus.com/](https://blog.disqus.com/)`,__vite_glob_0_23=Object.freeze(Object.defineProperty({__proto__:null,default:Hugo_Blog____},Symbol.toStringTag,{value:"Module"})),JSON_Server____API=`---
title: JSON Server模擬串接API
date: 2026-02-05
tags: ["Web"]
---

#### 1.創建資料夾

#### 2.在資料夾啟動終端機安裝：
\`\`\`bash
npm install -g json-server
\`\`\`
\`npm版本必須要=>20\`

#### 3.在資料夾內創建db.json檔
\`\`\`json
{
  "todo2_16": [
    {
      "id": "b6c2e3f0-d7d0-4823-8e8f-52e1ad21cd52",
      "Editing": false,
      "Thing": "玩遊戲",
      "Status": false,
      "CreateTime": "2024-12-19T02:09:37.123"
    },
    {
      "Editing": false,
      "id": "cf9fb6a5-e869-4e07-9c12-04ae64031fa8",
      "Thing": "寫作業",
      "Status": false,
      "CreateTime": "2024-12-19T02:14:19.049"
    }
  ]
}
\`\`\`

#### 4.執行指令啟動伺服器
\`\`\`bash
json-server --watch db.json
\`\`\`

#### 5.開啟網址
\`\`\`bash
http://localhost:3000/todo2_16
\`\`\`

#### 6.取得特定資料
網址/+id
\`\`\`bash
http://localhost:3000/todo2_16/cf9fb6a5-e869-4e07-9c12-04ae64031fa8
\`\`\`

#### 7.篩選特定資料
網址/?篩選的屬性=值是多少
\`\`\`bash
http://localhost:3000/todo2_16?Status=true
\`\`\`

#### 8.進階篩選特定資料
網址/?篩選的屬性=值是多少&篩選的屬性=值是多少
\`\`\`bash
http://localhost:3000/todo2_16?Status=true
\`\`\``,__vite_glob_0_24=Object.freeze(Object.defineProperty({__proto__:null,default:JSON_Server____API},Symbol.toStringTag,{value:"Module"})),JS____1____JavaScript=`---
title: JS核心篇(1)：認識JavaScript
date: 2021-03-01
tags: ['JavaScript']
---
## 直譯式語言(Interpreted Language)
|例如|JavaScript、Python、PHP、Ruby、BASIC、LISP、Perl、R|
|---|---|
|流程|原始碼 → 直譯器 → 代碼生成 → 執行|
|特性|程式碼由上到下執行，效能比較差、除錯比較慢、需要依賴執行環境。|

-----------------------------------------------
## 編譯式語言(Compiled Language)
|例如|Java、C、C#、C++、Pascal|
|---|---|
|流程|原始碼 → 預處理器 → 代碼生成 → 執行|
|特性|效能比較好、除錯比較快、程式碼可獨立執行。|

-----------------------------------------------
## 語法作用域(Lexical Scope)
* 語法在解析時就決定作用域，且不再改變。
* 因為 **console.log(apple)** 不在function內，所以取不到 **區域變數**。
\`\`\`js
function sayApple(){
  const apple = '蘋果';
  console.log(apple)
}

sayApple();

console.log(apple) //Ming is not defined
\`\`\`

-----------------------------------------------
* 因為在function內宣告的變數，結束後也會跟著消失。
* **sayHi()** 函式並未宣告apple變數，因此會向外尋找 **全域變數**。
\`\`\`js
const apple = '蘋果';

function sayHi(){
  return 'hi' + apple;
}

function sayApple(){
  const apple = '青森蘋果';
  console.log(sayHi()); //hi蘋果
}

sayApple();
\`\`\`

-----------------------------------------------
## 執行環境(Execution Context)
* 全域環境
  * 瀏覽器開啟時產生的 **window** 。
  * **window**  ===  **this** 。
* 區域環境
  * 在函式 **(function)** 內，會產生自己的 **this** 。
  * 可以重複被執行產生環境。

-----------------------------------------------
## 執行堆疊(Execution stack)
1. **全域環境** 最先堆疊，再來依序堆疊 **區域環境**。
2. **區域環境** 依序結束，最後留下 **全域環境**。
* 可以使用開發者工具\`Source\`--> 暫停 --> 重新整理頁面 --> 點下一步
\`\`\`js
function sayHi(name) {
    return 'hi' + name;
}

function sayApple() {
    const apple = '蘋果';
    console.log(sayHi(apple))
}

sayApple(); // hi蘋果

//當瀏覽器開啟時...
//產生window全域環境 → 
//sayApple() → 
//產生sayApple()的區域環境 → 
//sayHi() → 
//產生sayHi()的區域環境 → 
//sayHi()的區域環境消失 → 
//doSomething()的區域環境消失 → 
//留下window全域環境
\`\`\`

-----------------------------------------------
## 範圍鍊(Scope Chain)
* 當函式本身沒有變數時，會向外層找到 **全域變數** 。
\`\`\`js
const apple = '蘋果';

function sayApple1(){
  const apple = '青森蘋果';
  sayApple2();
}

function sayApple2(){
  console.log(apple);
}

sayApple1(); //蘋果
//因為sayApple2()本身沒有變數，所以會向外找到全域的變數;
\`\`\`

-----------------------------------------------
* 當函式裡的函式本身沒有變數時，會向外層找到函式裡的變數。
\`\`\`js
const apple = '蘋果';

function sayApple1(){

  const apple = '青森蘋果';

  function sayApple2(){
    console.log(apple);  //青森蘋果
  }

  sayApple2();
}

sayApple1();
//因為sayApple2()本身沒有變數，所以會找向外層找到sayApple1()的變數;
\`\`\`

-----------------------------------------------
## 提升(Hoisting)
* 執行順序：
  1. function
  2. var、let、const變數宣告
  3. = 賦予值
  4. 執行函式
* 在創造階段時，宣告變數、函式表達式會先存放在 **記憶體** 裡，還取不到值 **undefined** 。
\`\`\`js
var apple = '蘋果';
console.log(apple);

//------拆解過程如下-----

//創造階段
var apple; 

//執行階段
apple = '蘋果'; 
console.log(apple); //蘋果
\`\`\`

-----------------------------------------------
* 函式會優先於變數宣告。
\`\`\`js
var sayApple = function(){
    console.log('蘋果')
}

function sayApple(){ 
    console.log('青森蘋果')
}

sayApple();

//------拆解過程如下-----

//創造階段
function sayApple(){ 
  console.log('青森蘋果')
}
var sayApple; 
sayApple = function(){
  console.log('蘋果')
}

//執行階段
sayApple(); //蘋果
\`\`\`

-----------------------------------------------
* 範例一：執行順序 : function > 宣告 > fn()。
* console.log只找到宣告的apple 但並未賦予值，因此會出現ReferenceError(暫時性死區)錯誤
\`\`\`js
sayApple();

function sayApple(){
  console.log(apple);
}

var apple = '蘋果'; //undefined

//------拆解過程如下-----

//創造階段
function sayApple(){
  console.log(apple);
}
var apple;

//執行階段
sayApple();
apple = '蘋果';
\`\`\`

-----------------------------------------------
* 範例二：執行順序 : function > 宣告 > fn()。
\`\`\`js
function sayApple(){
  console.log('蘋果');
}

sayApple();

function sayApple(){
  console.log('青森蘋果');
}

sayApple();

//------拆解過程如下-----

//創造階段
function sayApple(){
  console.log('蘋果');
}
function sayApple(){
  console.log('青森蘋果');
}

//執行階段
sayApple(); //青森蘋果
sayApple(); //青森蘋果
\`\`\`

-----------------------------------------------
* 範例三：執行順序 : function > 宣告 > fn()。
\`\`\`js
sayApple(); 

function sayApple(){
  if(name){
    name = '蘋果'
  }
} 

var name = '青森蘋果';

console.log(name);

//------拆解過程如下-----

//創造階段
function sayApple(){
  if(name){
    name = '蘋果'
  }
} 
var name;

//執行階段
sayApple(); //undefined
name = '青森蘋果'
console.log(name); //青森蘋果
\`\`\`

-----------------------------------------------
## 單執行緒(Single Thread)
* 同步事件會依序執行，而非同步事件會先移到 **事件佇列(Event Queue)** ，等待其他事件執行完才會執行。
* 範例一：setTimeout
\`\`\`js
function sayApple(){
  setTimeout(function(){
    console.log('蘋果');
  },3000);
}

function sayBanana(){
  console.log('香蕉');
}

function sayPineapple(){
  console.log('鳳梨');
}

sayApple();
sayBanana();
sayPineapple();
//console.log出現順序:'香蕉'、'鳳梨'、'蘋果'
//但因為sayApple()裡的setTimeout屬於非同步事件
//會在事件佇列，等到sayBanana()、sayPineapple()執行完才執行
\`\`\`

-----------------------------------------------
* 範例二：addEventListener
\`\`\`html
<button type="button" id="box">按鈕</button>
\`\`\`
\`\`\`js
function clickbox(){
  console.log('你點擊了箱子');
} 

let buttonElement = document.getElementById('box');
buttonElement.addEventListener('click',clickbox,false);
\`\`\`
-----------------------------------------------
* 範例三：for迴圈＋setTimeout，會先跑完所有迴圈，最後setTimeout()才會執行最後一次的結果。
\`\`\`js
for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
\`\`\`

-----------------------------------------------
## 回收機制(Garbage Collection)
* 當沒有任何物件參考時，物件的 **記憶體** 就會釋放掉。
\`\`\`js
function sayApple1(){
  sayApple2();
}
function sayApple2(){
  console.log('蘋果');
}
sayApple1();
//在console.log('蘋果');前...
//因沒有任何物件參考sayApple1()，所以記憶體它的也釋放掉了。
\`\`\``,__vite_glob_0_25=Object.freeze(Object.defineProperty({__proto__:null,default:JS____1____JavaScript},Symbol.toStringTag,{value:"Module"})),JS____10____=`---
title: JS核心篇(10)：物件
date: 2021-03-10
tags: ["JavaScript"]
---
## 物件實字(Object Literals)
* { 屬性: 值 }，值可以是數字、物件、函式。
\`\`\`js
const apple = {
  name: '蘋果',
  price: 20,
  origin: ['美國','日本','澳洲'],
  sayApple: function(){
    console.log(apple.name)
  }
}
\`\`\`

-----------------------------------------------
## 建構物件(Constructor Object)
* 使用 **new Object()** 包裹方式建立，又稱 **包裹物件**。
\`\`\`js
const apple = {
  name: '蘋果',
  price: 20,
}

const newApple = new Object(apple);
\`\`\`

-----------------------------------------------
* 物件取值
\`\`\`js
const apple = {
  name: '蘋果'
}

console.log(apple.name); //蘋果
console.log(apple['name']); //蘋果
\`\`\`

-----------------------------------------------
* 執行物件函式
\`\`\`js
const apple = {
  name: '蘋果',
  sayApple: function(){
    console.log(apple.name)
  },
  '哈囉': function(){
    console.log('Hello')
  }
}

apple.sayApple(); //蘋果
apple['哈囉'](); //Hello
\`\`\`

-----------------------------------------------
* 新增物件屬性
\`\`\`js
const apple = {}

apple.name = '蘋果';
\`\`\`

-----------------------------------------------
* 刪除物件屬性
\`\`\`js
const apple = {
  name: '蘋果'
}

delete apple.name;
\`\`\`

-----------------------------------------------
## 變數無法被刪除，屬性才可以
* 全域環境下賦予的值是window的屬性
\`\`\`js
var a = 1;
delete a;
console.log(window.a);  //1

window.b = 2;
delete b;
console.log(window.b);  //undefined
\`\`\`

-----------------------------------------------
## 純值不能新增屬性，物件才可以
\`\`\`js
const a = {};
a.name = "蘋果";
console.log(a);  //{name: "蘋果"}

const b = 1;
b.name = "香蕉";
console.log(b);  //1
\`\`\`

-----------------------------------------------
## 函式是也是物件
\`\`\`js
function sayApple(){
    console.log("蘋果");
}

sayApple.price = 20;

console.dir(sayApple.price); //20
\`\`\``,__vite_glob_0_26=Object.freeze(Object.defineProperty({__proto__:null,default:JS____10____},Symbol.toStringTag,{value:"Module"})),JS____11___________=`---
title: JS核心篇(11)：傳純值與傳參考特性
date: 2021-03-11
tags: ["JavaScript"]
---
## 傳值(Call by Value)
* 純值的傳值方式是複製，傳完後無任何關聯。
\`\`\`js
let apple = '蘋果';
let banana = apple;  //banana複製apple的值，兩者無關聯
banana = '香蕉';
console.log(apple);  //蘋果
console.log(banana);  //香蕉
\`\`\`

-----------------------------------------------
## 傳參考(Call by Reference)
* 物件是以傳參考方式指向它，若修改會一起變更。
\`\`\`js
const apple = {
  name: '蘋果'
};
const banana = apple;  //banana指向apple物件，兩者指向同一物件
banana.name = '香蕉';
console.log(apple.name);  //香蕉
console.log(banana.name);  //香蕉
\`\`\`

-----------------------------------------------
## 重新賦予值給物件
* 只要出現{物件實字}就是新增的物件。
\`\`\`js
let apple = {
  name: '蘋果'
};
let banana = apple;
banana = {
  name: '香蕉' 
}
console.log(apple.name); //蘋果
console.log(banana.name); //香蕉
\`\`\`

-----------------------------------------------
## 循環引用(Circular Reference)
\`\`\`js
let apple = {
  name: '蘋果'
};
apple.realName = apple;
console.log(apple);
//Object{
//  apple: '蘋果',
//  realName :[circular object]  //循環物件
//};
\`\`\`

-----------------------------------------------
## 進階範例
\`\`\`js
let apple = {
  name: '蘋果'
};
let banana = apple;
apple.realName = apple = { name: '香蕉'};
//上述這段是"同時"進行
//左邊:a.y找不到a物件裡有y屬性，所以undefined
//右邊:a = { name: '蘋果' }是a指向新的物件實字，所以無關原本a物件
console.log(apple.realName);  //undefined
console.log(banana.realName);  //{ name: '香蕉' }
\`\`\``,__vite_glob_0_27=Object.freeze(Object.defineProperty({__proto__:null,default:JS____11___________},Symbol.toStringTag,{value:"Module"})),JS____12___________=`---
title: JS核心篇(12)：淺層拷貝與深層拷貝
date: 2021-03-12
tags: ["JavaScript"]
---
## 淺層複製(Shallow Copy)
* 只能複製 **第一層** 屬性。
* 範例一：使用 **for迴圈** 。
\`\`\`js
let family = {
  name: '小明家',
  members:{
    father: '老爸',
    mother: '老媽',
    ming: ' 小明'
  }
};

let newFamily = {};

for(var key in family){
  console.log(key) // name, members
  newFamily[key] = family[key]
}
//淺層複製只能複製第一層，若更改第二層的資料，還是會影響到原本的物件
newFamily.members.father = '爹地'; 

console.log(family.members.father) // 爹地
console.log(newFamily.members.father) // 爹地
\`\`\`

-----------------------------------------------
* 範例二：使用 **jQuery.extend()** 。
* 先引入jQuery CDN : \`<script src="https://code.jquery.com/jquery-3.7.1.min.js" ><\/script>\`。
\`\`\`js
let family = {
  name: '小明家',
  members:{
    father: '老爸',
    mother: '老媽',
    ming: ' 小明'
  }
};

let newFamily = {};
newFamily = jQuery.extend({},family);

//淺層複製只能複製第一層，若更改第二層的資料，還是會影響到原本的物件
newFamily.members.father = '爹地'; 

console.log(family.members.father) // 爹地
console.log(newFamily.members.father) // 爹地
\`\`\`

-----------------------------------------------
* 範例三：使用 **Object.assign()** 。
\`\`\`js
let family = {
  name: '小明家',
  members:{
    father: '老爸',
    mother: '老媽',
    ming: ' 小明'
  }
};
let newFamily = {};
newFamily = Object.assign({},family);

//淺層複製只能複製第一層，若更改第二層的資料，還是會影響到原本的物件
newFamily.members.father = '爹地'; 

console.log(family.members.father) // 爹地
console.log(newFamily.members.father) // 爹地
\`\`\`

-----------------------------------------------
## 深層複製(Deep Copy)
* 可以複製整個物件。
1. 使用 **JSON.stringify()** 將物件轉為字串 *(JSON)* 。
2. 使用 **JSON.parse()** 將字串 *(JSON)* 轉為物件 *(JSON)* 。
\`\`\`js
let family = {
  name: '小明家',
  members:{
    father: '老爸',
    mother: '老媽',
    ming: ' 小明'
  }
};
let newFamily = {};

let familyStr = JSON.stringify(family);  //將物件轉為JSON字串
console.log(familyStr); //{"name":"小明家","members":{"father":"老爸","mother":"老媽","ming":" 小明"}}

//透過轉為字串在解析的物件，兩者的指向就會不同
newFamily = JSON.parse(familyStr); //將字串，解析成JSON物件

newFamily.members.father = '爹地'; 

console.log(family.members.father) // 老爸
console.log(newFamily.members.father) // 爹地
\`\`\``,__vite_glob_0_28=Object.freeze(Object.defineProperty({__proto__:null,default:JS____12___________},Symbol.toStringTag,{value:"Module"})),JS____13____=`---
title: JS核心篇(13)：陣列
date: 2021-03-13
tags: ["JavaScript"]
---
## 陣列(Array)
* 是以數列 **0** 開始排列的物件。

-----------------------------------------------
* 使用 **[]** 方式取值。
\`\`\`js
const fruits = ['蘋果','香蕉','鳳梨'];

console.log(fruits[0]);  //蘋果
console.log(fruits[1]);  //香蕉
console.log(fruits[2]);  //鳳梨
console.log(fruits[3]);  //undefined
\`\`\`

-----------------------------------------------
* 使用 **push()** 新增純值、物件、函式。
\`\`\`js
const fruits = ['蘋果'];

fruits.push('芭樂');  
console.log(fruits);  //['蘋果','芭樂']
\`\`\`

-----------------------------------------------
* 使用 **delete** 刪除值，若陣列為空，會自動補上 **undefined**。
\`\`\`js
const fruits = ['蘋果','香蕉','鳳梨'];

delete fruits[1];
console.log(fruits);  ['蘋果',undefined,'鳳梨']
\`\`\`

-----------------------------------------------
* 使用 **for迴圈** 複製陣列，與原陣列無任何關聯。
\`\`\`js
const fruits = ['蘋果','香蕉','鳳梨'];

const newFruits = [];
for (let i = 0; i < fruits.length; i++) {
    newFruits.push(fruits[i]);
}
newFruits.push('芭樂');

console.log(fruits); //['蘋果','香蕉','鳳梨']
console.log(newFruits); //['蘋果','香蕉','鳳梨','芭樂']
\`\`\``,__vite_glob_0_29=Object.freeze(Object.defineProperty({__proto__:null,default:JS____13____},Symbol.toStringTag,{value:"Module"})),JS____14__JSON=`---
title: JS核心篇(14)：JSON
date: 2021-03-14
tags: ["JavaScript"]
---
## JSON(JavaScript Object Notation)
* JSON是一種輕量級的資料格式，只有屬性，不支援函式或 **undefined** 。
* 所有屬性都是 **字串** 型別，且一律都只用 **雙引號** 。
* 打開Chrome→Network→Response，可查看回傳的資料。
\`\`\`json
{
    "name": "小明家",
    "members":{
        "father": "老爸",
        "mother": "老媽",
        "ming": "小明"
    }
}
\`\`\`

-----------------------------------------------
* 使用 **new XMLHttpRequest()** 。
\`\`\`markdown
you project
│ 
├─── family.json
│     
└─── index.html
\`\`\`
\`\`\`js
let xhr = new XMLHttpRequest();
xhr.open("GET", "family.json");
xhr.onload = function() {
    if (xhr.status === 200) {
        //這裡取到的會是JSON原始格式
        console.log(xhr.responseText);
        //通常會使用parse()轉為javascript可運用的格式
        const family = JSON.parse(xhr.responseText);
    }
};
xhr.send();
\`\`\`

-----------------------------------------------
* 使用 **AJAX** 套件，會直接將JSON直接轉為物件資料，省略parse()這段處理。
\`\`\`js
$.ajax({
  url: "網址.json",
}).done(function(data){
  console.log(data);
};)
\`\`\``,__vite_glob_0_30=Object.freeze(Object.defineProperty({__proto__:null,default:JS____14__JSON},Symbol.toStringTag,{value:"Module"})),JS____15____=`---
title: JS核心篇(15)：函式
date: 2021-03-15
tags: ["JavaScript"]
---
## 函式(Function)
* 是包含 **程式碼片段** 的物件，擁有被呼叫、回傳的功能。
\`\`\`js
//宣告函式 函式名稱 (){
//  執行動作
//};
function sayApple(){
    console.log('蘋果');
}

//執行函式
sayApple();
\`\`\`

-----------------------------------------------
## 具名函式
\`\`\`js
function sayApple(){
  console.log('蘋果'); //蘋果
}
sayApple();
\`\`\`

-----------------------------------------------
* 具名的函式只能夠在函式中被呼叫使用
\`\`\`js
const sayApple1 = function sayApple2(){
  console.log('蘋果');
}
sayApple2(); //sayApple2 is not defined
\`\`\`

-----------------------------------------------
## 匿名函式
\`\`\`js
const sayApple = function(){
  console.log('蘋果'); //蘋果
}
sayApple();
\`\`\`

-----------------------------------------------
* 把函式當參數傳遞
\`\`\`js
function sayApple(fn){
  fn();
}
sayApple(function(){
  console.log('蘋果'); //蘋果
});
\`\`\`

-----------------------------------------------
## 立即函式(IIFE)
* 此函式會被立刻執行。
\`\`\`js
(function(){
  console.log("蘋果");  //蘋果
})();
\`\`\`

-----------------------------------------------
* 無法再函式外再次執行。
\`\`\`js
(function sayApple(){
  console.log("蘋果");  //蘋果
})();
sayApple(); //sayApple is not defined
\`\`\`

-----------------------------------------------
* 傳參數。
\`\`\`js
(function(apple){
  console.log(apple);  //蘋果
})('蘋果');
\`\`\`

-----------------------------------------------
* 傳參數，並用變數接收。
\`\`\`js
const apple = (function(apple){
  return apple
})('蘋果');
console.log(apple);
\`\`\`

-----------------------------------------------
* 透過 **全域環境(window)** 傳參考，是早期前端框架「控制全域環境」的核心技巧之一。
\`\`\`js
(function(global){
  global.apple = '蘋果';
})(window);
(function(){
  console.log(apple); //蘋果
})();
\`\`\``,__vite_glob_0_31=Object.freeze(Object.defineProperty({__proto__:null,default:JS____15____},Symbol.toStringTag,{value:"Module"})),JS____16____=`---
title: JS核心篇(16)：參數
date: 2021-03-16
tags: ["JavaScript"]
---
## 參數(Parameter)
* 是用來接收函式執行帶入的值，在函式內本質是「區域變數」，可以重新賦值。。
\`\`\`js
function sayApple(apple){
  apple = "香蕉";
  console.log(apple);  //香蕉
}
sayApple('蘋果');
\`\`\`

-----------------------------------------------
* 當傳入的值不足時，參數會呈現 **undefined** 。
\`\`\`js
function sayApple(a,b,c){
  console.log(a,b,c);  //蘋果,香蕉,undefined
}
sayApple('蘋果','香蕉'); 
\`\`\`

-----------------------------------------------
* 若傳入的值是物件，則是 **傳參考** 。
\`\`\`js
const apple = {
  name: '蘋果'
}
function sayApple(apple) {
  apple.name = '香蕉';
  console.log(apple.name); //香蕉
}
sayApple(apple);
\`\`\`

-----------------------------------------------
* callback function：傳一個函式進去，在裡面執行它。
\`\`\`js
function sayHi(){
  console.log('嗨');
}

function doSomething(callback){
  callback();
}

doSomething(sayHi);
\`\`\`

-----------------------------------------------
* 使用 **arguments**專有名詞 ，可以一次取得所有傳入的值。
\`\`\`js
function sayApple(a,b,c){
  console.log(arguments);  //['蘋果','香蕉','鳳梨']
}
sayApple('蘋果','香蕉','鳳梨'); 
\`\`\`

-----------------------------------------------
* **arguments** 屬於類陣列，可以被 **for迴圈** 。
\`\`\`js
function sayApple(){
  for(var i=0 ; i<arguments.length ; i++){
    console.log(arguments[i]);  //蘋果  //香蕉  //鳳梨
  }
}
sayApple("蘋果","香蕉","鳳梨");
\`\`\`

-----------------------------------------------
* **arguments** 屬於類陣列，沒有辦法用其他陣列方法處理。
\`\`\`js
function sayApple() {
  arguments.forEach(function(item) {
    console.log(item); //arguments.forEach is not a function
  });
}

sayApple("蘋果", "香蕉", "鳳梨");
\`\`\``,__vite_glob_0_32=Object.freeze(Object.defineProperty({__proto__:null,default:JS____16____},Symbol.toStringTag,{value:"Module"})),JS____17____=`---
title: JS核心篇(17)：閉包
date: 2021-03-17
tags: ["JavaScript"]
---
## 閉包(Closure)
* 在函式裡執行 **重複** 動作，又稱 **函式工廠** 。
* 函式可以記住它建立當下的變數環境。
* storeMoney()執行完了，但money變數沒有消失，可以用多個變數去接收storeMoney()，並擁有獨立的結果。
\`\`\`js
function storeMoney(){
  let money = 1000;
  return function(price){
    money = money + price;
    return money;
  }
}

let mingMoney = storeMoney(); //讓mingMoney賦予function(price){...}這段函式
console.log(mingMoney(100)); //1100

let jayMoney = storeMoney(); //讓jayMoney賦予function(price){...}這段函式
console.log(jayMoney(400)); //1400
\`\`\`

-----------------------------------------------
## 私有方法
* 在函式裡執行 **多種** 動作，又稱 **私有方法** 。
\`\`\`js
function storeMoney(){
  let money = 1000;
  return {
    save: function(price){
      money = money + price;
    },
    spend: function(price){
      money = money - price;
    },
    check: function(){
      return money;
    }
  }
}

let mingMoney = storeMoney(); //讓mingMoney賦予function(price){...}這段函式
mingMoney.save(500);
mingMoney.spend(200);
console.log(mingMoney.check()); //1300
\`\`\``,__vite_glob_0_33=Object.freeze(Object.defineProperty({__proto__:null,default:JS____17____},Symbol.toStringTag,{value:"Module"})),JS____18__this_____=`---
title: JS核心篇(18)：this的呼叫方式
date: 2021-03-18
tags: ["JavaScript"]
---
## this
* 是一個關鍵字，當執行函式時自動產生，不需要宣告。
* this不是看 **在哪裡定義**，而是看 **怎麼被呼叫**。
* 若使用箭頭函式，就沒有自己的this。

|呼叫方法|例如|this指向|
|---|---|---|
|簡易呼叫|fn();|this = window / undefined|
|方法呼叫|obj.fn();|this = obj|
|建構式呼叫|new Fn();|this = obj|
|強制綁定|fn.call(obj)|this = obj|

-----------------------------------------------
* 用var宣告的變數 = window下的變數 = this的變數
\`\`\`js
var apple = '蘋果';
  function sayApple(){
    console.log(this.apple);
  }
sayApple();
\`\`\`

-----------------------------------------------
* 函式在物件下執行，this等於該物件。
\`\`\`js
const apple = '蘋果';
function sayApple(){
  console.log(this.apple);
}
const fruits = {
  apple: '青森蘋果',
  sayApple: sayApple
}
fruits.sayApple(); //青森蘋果
\`\`\`

-----------------------------------------------
## 簡易呼叫(Simple Call)
* 直接執行的函式，稱為 **簡易呼叫** 。
\`\`\`js
const name = '蘋果';
function sayApple(){
  console.log(this.name);
}
sayApple(); //蘋果
\`\`\`

-----------------------------------------------
## 方法呼叫(Method Call)
\`\`\`js
const name = '蘋果';
const apple = {
  name: '青森蘋果',
  sayApple: function(){
    console.log(this.name);
  }
};
apple.sayApple(); //青森蘋果
\`\`\`

-----------------------------------------------
## 回呼函式呼叫(Callback Call)
\`\`\`js
const name = '蘋果'
const apple = {
  name: '青森蘋果',
  sayApple: function() {
    const self = this;
    setTimeout(function(){
      console.log(self.name);
    })
  }
}
apple.sayApple(); //青森蘋果
\`\`\`

-----------------------------------------------
## 強制綁定(call、apply、bind)
* 傳入的第一個值：會以 **建構式** 帶入 **this** 。
* 傳入的第二個值：會帶入參數。
* 在 **非嚴格模式** 下，如果傳入的值是 **null** 或 **undefined** 將會被置換成全域變數。
* 簡易呼叫的 **this** 盡可能不要調用，他的本質其實是 **undefined** 。

|傳入的值|物件|數字|字串|布林值|undefined、null、null|
|---|---|---|---|---|---|
|帶入方式|new Object()|new Number()|new String()|new Boolean()|window|
\`\`\`js
function sayApple(a,b){
  console.log(this,a,b); //window,蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple('蘋果','香蕉'); 
\`\`\`

-----------------------------------------------
* call()可以將要傳入的值以參數帶入，直接執行。
\`\`\`js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple.call(fruits,'蘋果','香蕉'); 
\`\`\`

-----------------------------------------------
* apply()可以將要傳入的值以陣列帶入，直接執行。
\`\`\`js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple.apply(fruits,['蘋果','香蕉']); 
\`\`\`

-----------------------------------------------
* bind()可以將要傳入的值以參數帶入，但還 **不會執行** ，要再加()才會執行，若再帶入值，則會依需填補空缺，不會覆蓋。
\`\`\`js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

const bindSayApple = sayApple.bind(fruits,'蘋果','香蕉');
bindSayApple();
\`\`\`

-----------------------------------------------
## DOM元素的this
* 取得按鈕的this：點擊按鈕時，會得到"button"。
\`\`\`html
<button type="button" onclick="console.dir(this)">按鈕</button>
\`\`\`

-----------------------------------------------
* 取得項目清單的this：點擊li時，會得到該元素的文字內容。
\`\`\`html
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`\`\`js
const list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    console.log(this.textContent);
  });
}
\`\`\``,__vite_glob_0_34=Object.freeze(Object.defineProperty({__proto__:null,default:JS____18__this_____},Symbol.toStringTag,{value:"Module"})),JS____19______=`---
title: JS核心篇(19)：嚴格模式
date: 2021-03-19
tags: ["JavaScript"]
---
## 嚴格模式(Strict Mode)
* 使用"use strict"來執行環境。
\`\`\`js
function sayApple(a,b){
  'use strict';
  console.log(this,a,b); //undefined,蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple('蘋果','香蕉'); 
\`\`\`

-----------------------------------------------
* 不能使用未宣告的變數。
\`\`\`js
(function(){
  'use strict';
  apple = '蘋果'; //apple is not defined
})();
\`\`\`

-----------------------------------------------
* this 不會自動指向全域。
\`\`\`js
(function(){
  'use strict';
  console.log(this); //undefined
})();
\`\`\`

-----------------------------------------------
* 參數不能重複名稱。
\`\`\`js
(function(a,a){ //Duplicate parameter name not allowed in this context
  'use strict';
})();
\`\`\`

-----------------------------------------------
* 不能刪除變數。
\`\`\`js
(function(){
  'use strict';
  let apple = '蘋果';
  delete apple //Delete of an unqualified identifier in strict mode.
})();
\`\`\`

-----------------------------------------------
* 不能修改唯讀屬性。
\`\`\`js
(function(){
  'use strict';
  const fruits = {};
  Object.defineProperty(fruits, 'apple', {
    value: '蘋果',
    writable: false, //可改嗎
  });
  fruits.apple = '香蕉'; //Cannot assign to read only property 'apple' of object
})();
\`\`\`

-----------------------------------------------
* 禁止八進位。
\`\`\`js
(function(){
  'use strict';
  const num = 010; //八進位，正確寫法：0o10;
})();
\`\`\`

-----------------------------------------------
* with()被禁用。
\`\`\`js
(function(){
  'use strict';
  with(){
    console.log('蘋果');
  }
})();
\`\`\`

-----------------------------------------------
* eval 變數不會污染外部。
\`\`\`js
(function(){
  'use strict';
  eval("var apple = '蘋果'")
  console.log(apple);
})();
\`\`\`

-----------------------------------------------
* arguments 不再同步參數。
\`\`\`js
(function(){
  'use strict';
  function sayApple(apple){
    apple = '香蕉';
    console.log(arguments[0]);
  }
  sayApple('蘋果');
})();
\`\`\`






`,__vite_glob_0_35=Object.freeze(Object.defineProperty({__proto__:null,default:JS____19______},Symbol.toStringTag,{value:"Module"})),JS____2_________=`---
title: JS核心篇(2)：陳述式與表達式
date: 2021-03-02
tags: ["JavaScript"]
---
## 陳述式(Statement)
用於命令執行，**不會回傳結果**，不能賦值(=)到變數上。
|陳述式|例如|
|---|---|
|判斷式|if、else if、else、switch、try..catch、break|
|宣告變數|var、let、const|
|函式陳述式|function fn1(){...}、for|
|Block區塊|{}|

-----------------------------------------------
* 判斷式
\`\`\`js
if(...){
  ...
}else{
  ...
}
\`\`\`

-----------------------------------------------
* 宣告變數
\`\`\`js
const apple;
\`\`\`

-----------------------------------------------
* 函式陳述式
\`\`\`js
function sayApple(){...}
\`\`\`

-----------------------------------------------
* Block區塊
\`\`\`js
{
  const apple = '蘋果';
}
\`\`\`

-----------------------------------------------
## 表達式(Expression)
表達式又稱 **表示式** 、 **運算式**，結合符號運算及 **回傳結果**。
|表達式|例如|
|---|---|
|函式表達式|var fn1 = function(){...}|
|物件實字|var obj1 = { a:1 }|
|一元運算式|只需要一個運算元|
|二元運算式|兩個運算元，一個運算子|
|三元運算式|三個運算元，兩個運算子|

-----------------------------------------------
* 函式陳述式(具名函式)
\`\`\`js
function sayApple(){...}
\`\`\`

-----------------------------------------------
* 函式表達式(匿名函式)
\`\`\`js
const sayApple = function(){...}
\`\`\`

-----------------------------------------------
* 物件實字
\`\`\`js
const apple = { 
  name: '蘋果'
}
\`\`\`
`,__vite_glob_0_36=Object.freeze(Object.defineProperty({__proto__:null,default:JS____2_________},Symbol.toStringTag,{value:"Module"})),JS____20____=`---
title: JS核心篇(20)：原型
date: 2021-03-20
tags: ["JavaScript"]
---
## 原型(Prototype)
* 純值可用**建構式**繼承在原型下。
* 原型可利用**建構函式**新增屬性。
* 原型有向上查找屬性的功能，而且屬性是**共用**的。
* 原型鍊:

|建構式|原型(上層)|原型(上上層)|
|---|---|---|
|new Object()|---|Object|
|new Array()|Array|Object|
|new Number()|Number|Object|
|new String()|String|Object|
|new Boolean()|Boolean|Object|


-----------------------------------------------
* 陣列也是 **物件** 的一種。
* **forEach()**、**find()**、**map()** 等都是處理陣列的方法。
\`\`\`js
const fruits = ['蘋果', '香蕉', '鳳梨'];
console.log(fruits);
//{
//  0: '蘋果',
//  1: '香蕉',
//  2: '鳳梨',
//  length: 3,
//  __proto__: { ... }
//}
console.log(fruits.length); //3
console.log(fruits.__proto__); // 陣列方法
\`\`\`

-----------------------------------------------
* 在原型上新增 **共用方法**。
* 在a陣列原型上新增 **getLast()** 方法，b陣列使用。
\`\`\`js
const a = [1 , 2 , 3];
const b = [4 , 5 , 6];
a.__proto__.getLast = function() {
    return this[this.length - 1];
}
console.log(b.getLast()); //6
\`\`\``,__vite_glob_0_37=Object.freeze(Object.defineProperty({__proto__:null,default:JS____20____},Symbol.toStringTag,{value:"Module"})),JS____21_______=`---
title: JS核心篇(21)：自定義原型
date: 2021-03-21
tags: ["JavaScript"]
---
## 自訂義原型物件 : 
* \\_\\_proto\\_\\_ : 是原型的上層。
* prototype : 是原型裡的函式。

-----------------------------------------------
* 建構 **狗** 原型：
\`\`\`js
function Dog(name, color, size){
  this.name = name;
  this.color = color;
  this.size = size;
}
const Bibi = new Dog('Bibi', 'white', 'small'); 

//新增“吠叫”的方法
Dog.prototype.bark = function(){
  return this.name + "吠叫";
}

console.log(Bibi.bark()); //Bibi吠叫
\`\`\`

-----------------------------------------------
* 在String函式下，建立新方法：
\`\`\`js
String.prototype.getLastWord = function(){
  return this[this.length - 1];
}

//String本身就是一個函式
const apple = new String('青森蘋果');

console.log(apple.getLastWord()); // '果'
\`\`\`

-----------------------------------------------
* 自定義日期：
\`\`\`js
//新增“取得今天日期”的方法
Date.prototype.getToday = function(){
  const dd = this.getDate();
  const mm = this.getMonth()+1;
  const yyyy = this.getFullYear();
  return yyyy+"/"+mm+"/"+dd;
}

const date = new Date();
console.log(date.getToday());  //今天日期(年/月/日)
\`\`\`

-----------------------------------------------
* 物件在存取屬性時，如果自己沒有，會沿著 **原型鏈** 往上找。
\`\`\`js
const apple = {
  firstName: '蘋',
  lastName: '果',
}

const banana = {
  lastName: '蕉'
}

banana.__proto__ = apple;

console.log(banana.firstName); //蘋
\`\`\`

-----------------------------------------------
## 自訂義原型層
* 使用 **Object.create()** 將 **狗** 原型，繼承於 **動物** 原型底下：
\`\`\`js
//創建"動物"原型
function Animal(){
  this.kingdom = '動物界';
}

//在"動物"原型，新增"移動"方法
Animal.prototype.move = function(){
  console.log(this.name + '移動');
}

//創建"狗"原型
function Dog(name, color, size){
  //呼叫父類別的建構函數
  Animal.call(this);
  this.name = name;
  this.color = color;
  this.size = size;
}

//在"狗"原型，新增"吠叫"方法
Dog.prototype.bark = function(){
  console.log(this.name +'吠叫')
}

//讓"狗"繼承於"動物"原型
Dog.prototype = Object.create(Animal.prototype);

//修正建構函數的指向，原因是因為Object.create()會覆蓋原本的建構函數
Dog.prototype.constructor = Dog;

//創建"比比"原型
const Bibi = new Dog('Bibi', 'white', 'small');

Bibi.bark(); //Bibi吠叫
Bibi.move(); //Bibi移動
console.log(Bibi.kingdom); //動物界
\`\`\`

-----------------------------------------------
## 統整建構原型鍊 : 

|Bibi|Dog原型|Animal原型|Object原型|null|
|---|---|---|---|---|
|name:'Bibi'|---|---|---|---|
|color:'white'|---|---|---|---|
|size:'small'|---|---|---|---|
|kingdom:'動物界'|---|---|---|---|
|---|bark:function() {}|---|---|---|
|---|constructor → Dog|---|---|---|
|---|\\_\\_proto\\_\\_ → Animal.prototype|---|---|---|
|---|---|move: function() {}|---|---|
|---|---|constructor → Animal|---|---|
|---|---|\\_\\_proto\\_\\_ → Object.prototype|---|---|
|---|---|---|constructor → Object|---|
|---|---|---|\\_\\_proto\\_\\_ → null|---|

-----------------------------------------------
* 物件在存取屬性時，如果自己沒有，會沿著 **原型鏈** 往上找。`,__vite_glob_0_38=Object.freeze(Object.defineProperty({__proto__:null,default:JS____21_______},Symbol.toStringTag,{value:"Module"})),JS____22______=`---
title: JS核心篇(22)：物件屬性
date: 2021-03-22
tags: ["JavaScript"]
---
## 針對物件裡的某一個屬性進行調整
* Object.defineProperty()可以調整物件裡的屬性特徵。
* hasOwnProperty('name')
* 錯誤訊息必須在嚴謹模式下才會顯示，否則會靜默錯誤。
* 若針對的是一個物件，則只能對該物件層有所限制(淺層保護)

-----------------------------------------------
* 對物件**新增**屬性
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

Object.defineProperty(apple,'size',{
  value: 'small'
})

console.log(apple.size); //small
\`\`\`

-----------------------------------------------
* 將物件其中屬性，進行不可**寫入**
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

Object.defineProperty(apple,'name',{
  value: '青森蘋果',
  writable: false //不可被寫入
})

apple.name = '美國蘋果'; //Cannot assign to read only property 'name' of object
\`\`\`

-----------------------------------------------
* 將物件其中屬性，進行不可**刪除** 
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

Object.defineProperty(apple,'name',{
  value: '青森蘋果',
  configurable: false //不可被刪除
})

delete apple.name; //Cannot delete property 'name' of #<Object>
\`\`\`

-----------------------------------------------
* 將物件其中屬性，進行不可**列舉**
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

Object.defineProperty(apple,'price',{
  enumerable: false //不可列舉
})

for(let key in apple){
  console.log(key); //name,color
}
\`\`\`

-----------------------------------------------
## 針對物件裡的多個屬性進行調整
* Object.defineProperties()一次對多個屬性進行修改。
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

Object.defineProperties(apple, {
  name: {
    value: '青森蘋果'
  },
  color: {
    value: '綠色'
  },
  price: {
    value: 30
  }
});

console.log(apple.name); //青森蘋果
console.log(apple.color); //綠色
console.log(apple.price); //30
\`\`\`

-----------------------------------------------
## 查看物件是否有該屬性
\`\`\`js
const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

console.log(apple.hasOwnProperty('name')); //true
console.log(apple.hasOwnProperty('size')); //false
\`\`\`

-----------------------------------------------
## 查看物件屬性特徵
\`\`\`js
const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20
}

console.log(Object.getOwnPropertyDescriptor(apple, 'name'));
//{
//value: '蘋果'
//writable: true
//configurable: true
//enumerable: true
//}
\`\`\``,__vite_glob_0_39=Object.freeze(Object.defineProperty({__proto__:null,default:JS____22______},Symbol.toStringTag,{value:"Module"})),JS____23________=`---
title: JS核心篇(23)：物件鎖定機制
date: 2021-03-23
tags: ["JavaScript"]
---
## 調整物件本身特性
* 使用 **Object.isExtensible()** 會回傳【是否可被擴充】。
* 使用 **Object.isSealed()** 會回傳【是否被封裝】。
* 使用 **Object.isFrozen()** 會回傳【是否被凍結】。

|方法|Object.preventExtensions()|Object.seal()|Object.freeze()|
|---|---|---|---|
|新增屬性|不行|不行|不行|
|刪除屬性|可以|不行|不行|
|修改屬性|可以|可以|不行|
|新增物件裡的屬性|可以|可以|可以|
|調整屬性的特徵|可以|不行|不行|
|以下檢查回傳|
|是否可被擴充|false|false|false|
|是否被封裝|false|true|true|
|是否被凍結|false|false|true|
|以下屬性特徵|
|可否寫入|true|true|false|
|可否被刪除|true|false|false|
|可否被列舉|true|true|true|

-----------------------------------------------
## 使物件不可被擴充
* Object.preventExtensions()可使物件不可被擴充。
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20,
  size: {}
}

//讓apple不可被擴充
Object.preventExtensions(apple); 

apple.size = 'small'; //Cannot add property size, object is not extensible

console.log(Object.isExtensible(apple)); //是否可被擴充，false
console.log(Object.isSealed(apple)); //有沒有被封裝，false
console.log(Object.isFrozen(apple)); //有沒有被凍結，false

//但是還是可以對子層進行新增
apple.size.value = 'small'; 
console.log(apple.size); //{value: 'small'}
\`\`\`

-----------------------------------------------
## 使物件不可被擴充，也無法調整特徵
* Object.seal()可讓物件被封裝，若再對該物件進行屬調整時會跳錯。
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20,
  size: {}
}

//讓apple被封裝
Object.seal(apple);  

console.log(Object.isExtensible(apple)); //是否可被擴充，false
console.log(Object.isSealed(apple)); //有沒有被封裝，true
console.log(Object.isFrozen(apple)); //有沒有被凍結，false

Object.defineProperty(apple,'name',{
  configurable: true //Cannot redefine property
})
\`\`\`

-----------------------------------------------
## 使物件不可被擴充，無法調整特徵，也無法調整值
* Object.freeze()可讓物件被凍結，若對屬性進行修改會跳錯。
\`\`\`js
'use strict';

const apple = {
  name: '蘋果',
  color: '紅色',
  price: 20,
  size: {}
}

//讓apple被封裝
Object.seal(apple);  

console.log(Object.isExtensible(apple)); //是否可被擴充，false
console.log(Object.isSealed(apple)); //有沒有被封裝，true
console.log(Object.isFrozen(apple)); //有沒有被凍結，true

apple.name = '青森蘋果'; //Cannot assign to read only property 'name' of object '#<Object>'
\`\`\``,__vite_glob_0_40=Object.freeze(Object.defineProperty({__proto__:null,default:JS____23________},Symbol.toStringTag,{value:"Module"})),JS____24_____=`---
title: JS核心篇(24)：存取器
date: 2021-03-24
tags: ["JavaScript"]
---
## 存取器
* freeze會讓資料屬性不可修改，但setter仍會被觸發，只是通常無法改變內部狀態。

-----------------------------------------------
## Setter
* setter是存值的方法。
\`\`\`js
const apple = {
  total: 20,
  set save(price) {
    this.total = this.total + price;
  }
}

apple.save = 10; //10，會以參數帶入
console.log(apple.total); //30
\`\`\`
改用建構函式新增方法：
\`\`\`js
const apple = {
  total: 20,
}

Object.defineProperty(apple,'save',{
  set: function(price) {
    return this.total = this.total + price;
  },
})
console.log(apple.save = 10); //30
\`\`\`

-----------------------------------------------
## Getter
* getter是取值的方法，不會傳入參數。
\`\`\`js
const apple = {
  total: 20,
  get getTotal() {
    return this.total / 2;
  }
}

console.log(apple.getTotal); //10
\`\`\`
改用建構函式新增方法：
\`\`\`js
const apple = {
  total: 20,
}

Object.defineProperty(apple,'getTotal',{
  get: function() {
    return this.total / 2
  },
})
console.log(apple.getTotal); //10
\`\`\``,__vite_glob_0_41=Object.freeze(Object.defineProperty({__proto__:null,default:JS____24_____},Symbol.toStringTag,{value:"Module"})),JS____25_________=`---
title: JS核心篇(25)：宣告變數三劍客
date: 2021-03-25
tags: ["JavaScript"]
---
## var、let、const
|名稱|var|let|const|
|---|---|---|---|
|作用域|會影響全域變數(window)|在{}裡|在{}裡|
|宣告的變數|可以被修改|可以被修改|不能被修改|
|重複宣告變數時|不會出錯|會出錯|會出錯|
|從創造到執行階段會|提升(Hoisting)|暫時性死區(TDZ)|會出現錯誤|

-----------------------------------------------
* 重複宣告變數，var會覆蓋先前定義的變數。
\`\`\`js
var apple = '蘋果';
var apple = '青森蘋果';

console.log(apple); //青森蘋果
\`\`\`
\`\`\`js
let apple = '蘋果';
let apple = '青森蘋果';

console.log(apple); //Identifier 'apple' has already been declared
\`\`\`
\`\`\`js
const apple = '蘋果';
const apple = '青森蘋果';

console.log(apple); //Identifier 'apple' has already been declared
\`\`\`

-----------------------------------------------
* 當變數賦予新的值，let可以被修改，const不行。
\`\`\`js
var apple = '蘋果';
apple = '青森蘋果';

console.log(apple); //青森蘋果
\`\`\`
\`\`\`js
let apple = '蘋果';
apple = '青森蘋果';

console.log(apple); //青森蘋果
\`\`\`
\`\`\`js
const apple = '蘋果';
apple = '青森蘋果';

console.log(apple); //Assignment to constant variable.
\`\`\`

-----------------------------------------------
* 創造到執行階段：let、const會提升，但在初始化前處於**暫時性死區**，const宣告時必須同時初始化。
\`\`\`js
console.log(apple);  //undefined
var apple;
\`\`\`
\`\`\`js
console.log(apple);  //Cannot access 'apple' before initialization
let apple;
\`\`\`
\`\`\`js
console.log(apple);  //Missing initializer in const declaration
const apple;
\`\`\`

-----------------------------------------------
* for迴圈的var也會污染全域。
\`\`\`js
for(var i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //3,3,3
  },1000);
}
console.log(i);  //3

//解法：
// for (var i=0; i<3; i++) {
//   console.log(i);
//   (function(num){
//     setTimeout(function setTimes() {
//       console.log(num);
//     }, 10);
//   })(i)
// }
\`\`\`
\`\`\`js
for(let i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //0,1,2
  },1000);
}
console.log(i);  //i is not defined
\`\`\`
\`\`\`js
for(const i=0 ; i<3 ; i++){  //const不能被重新賦予值
  setTimeout(function(){
    console.log(i);  //0,1,2
  },1000);
}
console.log(i);
\`\`\`

-----------------------------------------------
* 判斷式的var也會污染全域。
\`\`\`js
if(true){
    var name = '蘋果'
}else{
    var name = '香蕉'
}
console.log(name); //蘋果
\`\`\`

-----------------------------------------------
* var定義的物件無法被真正凍結。
\`\`\`js
var apple = {
    name: '蘋果'
}

Object.freeze(apple);

apple = {}

console.log(apple); //{}
\`\`\`

-----------------------------------------------
* let的作用域是在block，外層無法存取。
\`\`\`js
let apple = '蘋果';
{
    let apple = '青森蘋果';
}
console.log(apple); //蘋果
\`\`\`

-----------------------------------------------
* for迴圈的let變數可以正確被執行。
\`\`\`js
for(let i = 0 ; i < 5; i++){
    setTimeout(function(){
        console.log('執行第'+ i +'次');
    }, 1000)
}
\`\`\`

-----------------------------------------------
## 宣告變數命名的規則
* 宣告變數或函式時若使用 **保留字** 會出錯：

|關鍵字|關鍵字|關鍵字|關鍵字|
|---|---|---|---|
|arguments|await*|break|case|
|catch|class*|const*|continue|
|debugger|default|delete|do|
|else|enum*|eval|export*|
|extends*|false|finally|for|
|function|if|implements|import*|
|in|instanceof|interface|let*|
|new|null|package|private|
|protected|public|return|static|
|super*|switch|this|throw|
|try|typeof|var|void|
|while|with|yield||

\`\`\`js
const catch = '蘋果';
console.log(catch); //Unexpected token 'catch'
\`\`\`

-----------------------------------------------
* 大小寫有區分
\`\`\`js
const APPLE = '蘋果';
console.log(apple); //apple 
\`\`\`

-----------------------------------------------
* 變數不能使用'-'符號(建議使用小駝峰方式命名)

\`\`\`js
const apple-name = '蘋果';
console.log(apple-name); //Missing initializer in const declaration
\`\`\``,__vite_glob_0_42=Object.freeze(Object.defineProperty({__proto__:null,default:JS____25_________},Symbol.toStringTag,{value:"Module"})),JS____26______=`---
title: JS核心篇(26)：箭頭函式
date: 2021-03-26
tags: ["JavaScript"]
---
## 箭頭函式
* 是ES6的語法糖，讓原本javascript程式碼更精簡。
\`\`\`js
const apple = '蘋果';
const sayApple = function(name){
  return name;
} 
console.log(sayApple(apple));
\`\`\`

-----------------------------------------------
* 第一步：使用箭頭函式
\`\`\`js
const apple = '蘋果';
const sayApple = (name) => {
  return name;
} 
console.log(sayApple(apple));
\`\`\`

-----------------------------------------------
* 第二步：如果要return時，可省略{}
\`\`\`js
const apple = '蘋果';
const sayApple = (name) => name;
console.log(sayApple(apple));
\`\`\`

-----------------------------------------------
* 第三步：如果參數只有一個，可省略()，但無參數時不能省略()。
\`\`\`js
const apple = '蘋果';
const sayApple = name => name;
console.log(sayApple(apple));
\`\`\`

-----------------------------------------------
## 其餘參數
* 在使用箭頭函式時，**arguments** 須改用 **其餘參數**
\`\`\`js
const sayApple = function(a,b,c) {
  console.log(arguments); // Arguments['蘋果', '香蕉', '鳳梨']
} 
console.log(sayApple('蘋果','香蕉','鳳梨'));
\`\`\`
使用箭頭函式後：
\`\`\`js
const sayApple = (...arg) => {
  console.log(arg); //['蘋果', '香蕉', '鳳梨']，不是類陣列
} 
console.log(sayApple('蘋果','香蕉','鳳梨'));
\`\`\`

-----------------------------------------------
## 箭頭函式與傳統函式的區別
* 箭頭函式沒有自己的this。
\`\`\`js
const name = '蘋果';
const apple ={
  name: '青森蘋果',
  sayApple: () => {
    console.log(this.name); //蘋果
    setTimeout(() => {
        console.log(this.name); //蘋果
    },0)
  }
}
apple.sayApple();
\`\`\`

-----------------------------------------------
* dom元素也無法找到this。
\`\`\`html
<button type="button" id="box">按鈕</button>
\`\`\`
\`\`\`js
const box = document.getElementById('box');
box.addEventListener('click',function(){
  console.log(this); //<button type="button" id="box">按鈕</button>
})
\`\`\`
\`\`\`js
const box = document.getElementById('box');
box.addEventListener('click',()=>{
  console.log(this); //window
})
\`\`\`

-----------------------------------------------
* 無法透過**call()**、**apply()**、**bind()**，重新給予this
\`\`\`js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple.call(fruits,'蘋果','香蕉'); 
\`\`\`
\`\`\`js
const sayApple = (a,b) => {
  console.log(this,a,b);
}

const fruits = {
  name: '蘋果'
}

sayApple.call(fruits,'蘋果','香蕉'); //window,蘋果,香蕉
\`\`\`

-----------------------------------------------
* 不能拿來 **建構函式** 。
\`\`\`js
const Dog = function(name, color, size){
    this.name = name;
    this.color = color;
    this.size = size;
}

const Bibi = new Dog('bibi','red','small');
console.log(Bibi); //Dog {name: 'bibi', color: 'red', size: 'small'}
\`\`\`
\`\`\`js
const Dog = (name, color, size) => {
    this.name = name;
    this.color = color;
    this.size = size;
}

const Bibi = new Dog('bibi','red','small');
console.log(Bibi); //Dog is not a constructor
\`\`\`

-----------------------------------------------
* 回傳 **物件實字** 需要再加上 **()**
\`\`\`js
const sayApple = function(){
    return {apple: '蘋果'} 
}
console.log(sayApple()); //{apple: '蘋果'}
\`\`\`
\`\`\`js
const sayApple = () => ({
  apple: '蘋果' 
})
console.log(sayApple()); //{apple: '蘋果'}
\`\`\`

-----------------------------------------------
* 若使用再 **or判斷式** 時，需要將整個箭頭函式加上 **()**
\`\`\`js
const apple = '蘋果';
const banana = 0 || function(){ return 1 };
console.log(banana()); //1
\`\`\`
\`\`\`js
const apple = '蘋果';
const banana = 0 || (() => { return 1 });
console.log(banana()); //1
\`\`\``,__vite_glob_0_43=Object.freeze(Object.defineProperty({__proto__:null,default:JS____26______},Symbol.toStringTag,{value:"Module"})),JS____27___________=`---
title: JS核心篇(27)：箭頭函式的實戰運用
date: 2021-03-27
tags: ["JavaScript"]
---
## 將陣列數值乘2倍
* map()可以將所有數值都一一取出來。
\`\`\`js
const arr = [1,3,5,6,8,10];
const doubleArr = arr.map(function(item){
  return item * 2
})
console.log(newArr); //[2, 6, 10, 12, 16, 20]
\`\`\`
\`\`\`js
const arr = [1,3,5,6,8,10];
const newArr = arr.map(item => item * 2);
console.log(newArr); //[2, 6, 10, 12, 16, 20]
\`\`\`

-----------------------------------------------
## 取得陣列的平均值
* reduce()可以將數值加總起來。
* acc:當前的值(初始值是0)，val: 帶入的值
\`\`\`js
const arr = [1,3,5,6,8,10];
const total = arr.reduce(function(acc,val){
  return acc + val
},0)
//將總和除以總數得到平均數
const average = total/arr.length;
console.log(average); //5.5
//執行過程：
//acc,val
//0 + 1 = 1
//1 + 3 = 4
//4 + 5 = 9
//9 + 6 = 15
//15 + 8 = 23
//23 + 10 = 33
\`\`\`
\`\`\`js
const average = (...arg) => arg.reduce((acc,val) => acc + val ,0) / arg.length;
console.log(average(1,3,5,6,8,10)); //5.5
\`\`\`

-----------------------------------------------
## 取得ajax資料
* 由於箭頭函式沒有自己的this，因此可利用此特性指向外層的this。
\`\`\`js
const person = {
  data:{},
  getData: function(){
    $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: (data) => {
      this.data = data.results[0];
      console.log(person.data);
    }
    });
  }
}
person.getData();
\`\`\``,__vite_glob_0_44=Object.freeze(Object.defineProperty({__proto__:null,default:JS____27___________},Symbol.toStringTag,{value:"Module"})),JS____28_______=`---
title: JS核心篇(28)：樣板字面值
date: 2021-03-28
tags: ["JavaScript"]
---
## 樣板字面值(Template Literals)
* 字串和數字或變數串接的語法糖。
\`\`\`js
const apple = '蘋果';
const price = 20;
console.log('這顆'+ apple + '要' + price + '元'); //這顆蘋果要20元
\`\`\`
\`\`\`js
const apple = '蘋果';
const price = 20;
console.log(\`這顆\${apple}要\${price}元\`); //這顆蘋果要20元
\`\`\`

-----------------------------------------------
* 傳統組字串來完成html結構，與樣板字面值的差異。
\`\`\`html
<div id="list">
  <ul>
    <li>蘋果要20元</li>
    <li>香蕉要15元</li>
    <li>鳳梨要35元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 35
  },
]
const list = document.getElementById("list");

list.innerHTML = '<ul><li>'+fruits[0].name+'要'+fruits[0].price+'元</li>\\
<li>'+fruits[1].name+'要'+fruits[1].price+'元</li>\\
<li>'+fruits[2].name+'要'+fruits[2].price+'元</li></ul>'
\`\`\`
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 35
  },
]
const list = document.getElementById("list");

list.innerHTML = \`
  <ul>
    <li>\${fruits[0].name}要\${fruits[0].price}元</li>
    <li>\${fruits[1].name}要\${fruits[1].price}元</li>
    <li>\${fruits[2].name}要\${fruits[2].price}元</li>
  </ul>
\`
\`\`\`

-----------------------------------------------
## 巢狀結構
* 在樣板字面值內在插入樣板字面值。
* for迴圈＋map()列印資料。
\`\`\`html
<div id="list">
  <ul>
    <li>蘋果要20元</li>
    <li>香蕉要15元</li>
    <li>鳳梨要35元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 35
  },
]
const list = document.getElementById("list");

list.innerHTML = \`
<ul>
    \${ fruits.map(item => \`<li>\${item.name}要\${item.price}元</li>\`).join('')}
</ul>
\`\`\`

-----------------------------------------------
## 樣板字面值
* 當使用樣板字面值做為參數傳遞時，會拆解成字串陣列。
\`\`\`js
const apple = '蘋果';
const price = 20;
function sayApple(string,apple,price){
  console.log(string,apple,price); //['', '要', '元'],蘋果,20
}
sayApple\`\${apple}要\${price}元\`;
\`\`\`

-----------------------------------------------
* 若有多個以上的參數要傳入，可以使用 **其餘參數** 來接收。
\`\`\`js
const apple = '蘋果';
const price = 20;
function sayApple(string,...arg){
  console.log(string,arg); //['', '要', '元'],['蘋果', 20]
}
sayApple\`\${apple}要\${price}元\`;
\`\`\`

-----------------------------------------------
* 期望把傳入的參數用<span>標籤包裹
\`\`\`js
const apple = '蘋果';
const price = 20;

//用三元運算子去排除最後undefined
const highlight = (string,...arg) => string.map((item,index)=>\`\${item}\${arg[index]?\`<span>\${arg[index]}</span>\`:''}\`).join('')
const sayApple =  highlight\`\${apple}要\${price}元\`;

console.log(sayApple); //<span>蘋果</span>要<span>20</span>元
\`\`\`

-----------------------------------------------
* 防止程式碼片段直接寫進innerHTML
\`\`\`js
const box = document.getElementById('box');

//在此userName如果傳來的是<script>...就會被轉為純文字
const userName = '小明';

box.innerHTML = convertHTML\`\${userName}傳來了一則訊息\`;

function convertHTML(strings, ...keys) {
  return strings.map((str, i) =>
    \`\${str}\${keys[i] ? \`\${keys[i]
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')}\` : ''}\`
  ).join('');
}
\`\`\`
`,__vite_glob_0_45=Object.freeze(Object.defineProperty({__proto__:null,default:JS____28_______},Symbol.toStringTag,{value:"Module"})),JS____29__Promise=`---
title: JS核心篇(29)：Promise
date: 2021-03-29
tags: ["JavaScript"]
---
## Promise
* 本身是一個物件，有自己的方法。

|未確認|已確認|已實現|已否決|
|---|---|---|---|
|pending|settled|fulfilled|rejected|

-----------------------------------------------
## 建立Promise
* resolve: 回傳成功的結果。
* reject: 回傳失敗的結果。
* then: 接收成功的結果。
* catch: 接收失敗的結果。
\`\`\`js
function getData(){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(false){
        res('成功');
      }else{
        rej('失敗');
      }
    },1000)
  })
}
getData()
  .then(res => {
    console.log(res);
  })
  .catch(rej => {
    console.log(rej); //失敗
  })
\`\`\`

-----------------------------------------------
## Promise串接技巧(Promise chain)
* 前一個then回傳可讓下一個then繼續執行，若有其中then不成立，則直接跳至catch。
\`\`\`js
function getData(){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(false){
        res('成功');
      }else{
        rej('失敗');
      }
    },1000)
  })
}
getData()
  .then(res => {
    console.log(res);
    return getData(3); //成功2
  })
  .then(res => {
    console.log(res); //成功3
    return getData(0); //這裡失敗所以，跳至catch
  })
  .catch(rej => {
    console.log(rej); //失敗
  })
\`\`\`

-----------------------------------------------
* 若用一個then去接收兩個結果的話，第一個會是成功的結果，第二個會是失敗的結果。
\`\`\`js
function getData(value){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(value){
        res(\`成功\${value}\`);
      }else{
        rej('失敗');
      }
    },1000)
  })
}
getData(0)
  .then((res)=>{
    console.log(res); 
    return getData(1)
  },(rej)=>{
    console.log(rej); //失敗
    return getData(2)
  })
  .then((res)=>{
    console.log(res); 
    return getData(3)
  },(rej)=>{
    console.log(rej); //成功2
    return getData(4)
  })
\`\`\`

-----------------------------------------------
## 一次取得所有Promise結果
* 將全部使用陣列方式帶入參數，如果全部都成功執行後，才會執行接下來要執行的的結果，
* 若有其中一個失敗，也會直接回傳失敗結果。
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.all([
  getData(1),
  getData(2),
  getData(3)
])
.then(res => {
  console.log(res); //['成功1', '成功2', '成功3']
})
.catch(rej => {
  console.log(rej);
})
\`\`\`

-----------------------------------------------
## 取得最快回傳的Promise結果
* 只取得最快回傳的那一個結果。
* 最快的失敗才會回傳失敗的結果。
\`\`\`js
function getData(value,time){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(value){
        res(\`成功\${value}\`);
      }else{
        rej('失敗');
      }
    },time)
  })
}
Promise.race([
  getData(1,3000),
  getData(2,2000),
  getData(3,1000) //這個秒數最短，最快回傳
])
.then(res => {
  console.log(res); //成功3
})
.catch(rej => {
  console.log(rej);
})
\`\`\`

-----------------------------------------------
## 用Promise打api
\`\`\`js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

function getData(url){
  return new Promise((res,rej)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.onload = function(){
      if(xhr.status == 200){
        console.log('成功');
      }else{
        console.log('失敗');
      }
    }
    xhr.send();
  })
}
getData(apiUrl)
  .then(res=>{
    console.log(res); //成功
  })
  .catch(rej=>{
    console.log(rej);
  })
\`\`\`
`,__vite_glob_0_46=Object.freeze(Object.defineProperty({__proto__:null,default:JS____29__Promise},Symbol.toStringTag,{value:"Module"})),JS____3__ASI______=`---
title: JS核心篇(3)：ASI自動插入分號
date: 2021-03-03
tags: ["JavaScript"]
---
## ASI（Automatic Semicolon Insertion）
* 當語法需要分號但程式碼沒有寫時，JavaScript 會「在特定情況下」自動補上分號，讓程式可以正常執行。
\`\`\`js
const a = 1
const b = 2

//------js會自動幫你變成-----

const a = 1;
const b = 2;
\`\`\`

-----------------------------------------------
* 新的一行是 \`(\`、\`[\`、\`/\` 開始 (容易出錯的地方)
\`\`\`js
const b = a
(a + b).toString()

const a = 1
[1,2,3].forEach(...)

const b = a
/test/.test(b)

//------js會自動幫你變成-----

const b = a(a + b).toString()

const a = 1[1,2,3].forEach(...)

const b = a / test / .test(b)
\`\`\`
正確解法：
\`\`\`js
const b = a;
(a + b).toString()

const a = 1;
[1,2,3].forEach(...)

const b = a;
/test/.test(b)
\`\`\`

-----------------------------------------------
* 兩個立即函式：
\`\`\`js
(function() {})()
(function() {})()

//------js會自動幫你變成-----

(function() {})()(function() {})()
\`\`\`
正確解法：
\`\`\`js
(function() {})();
(function() {})();
\`\`\`

-----------------------------------------------
*  新的一行以 \`,\`、\`.\` 作開始 (需注意執行結果)
\`\`\`js
const b = a
.toString()

const a = 1
,b = 2

//------js會自動幫你變成-----

const b = a.toString()

const a = 1, b = 2
\`\`\`
正確解法：
\`\`\`js
const b = a;
.toString()

const a = 1;
,b = 2
\`\`\`
`,__vite_glob_0_47=Object.freeze(Object.defineProperty({__proto__:null,default:JS____3__ASI______},Symbol.toStringTag,{value:"Module"})),JS____30__Async=`---
title: JS核心篇(30)：Async
date: 2021-03-30
tags: ["JavaScript"]
---
## fetch
\`\`\`js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = async() => {
    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        console.log('成功', data);
    } catch (error) {
        console.log('沒有成功', error);
    }
}
getData();
\`\`\`

-----------------------------------------------
## axios
\`\`\`js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = async() => {
    try {
        const res = await axios.get(apiUrl);
        console.log('成功',res);
    } catch (error) {
        console.log('沒有成功',error);
    }
}
getData();
\`\`\`

-----------------------------------------------
## 進階範例：axios + 閉包
* 可支援打多種api
\`\`\`js
const createRequest = (url) => {    
    return async (id) => {
        try {
            //判斷是否有帶入參數，若沒有就打url就好
            const res = await axios.get( id?\`\${url}/\${id}\`:url);
            console.log('成功:', res);
        } catch (error) {
            console.log('沒有成功:', error);
        }
    };
};
const getData1 = createRequest('https://jsonplaceholder.typicode.com/todos');
const getData2 = createRequest('https://jsonplaceholder.typicode.com/todos');
const getData3 = createRequest('https://randomuser.me/api/');
getData1(1);
getData2(2);
getData3();
\`\`\`


-----------------------------------------------
## 將try跟catch拆開
\`\`\`js
const getData = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res);
}

const catchError = (promise) => {
    return promise.catch((error)=>{
        console.log('沒有成功',error);
    })
}

catchError(getData());
\`\`\`

-----------------------------------------------
## 最終結合：執行多個api + 錯誤統一處理
\`\`\`js
const catchError = (fn) => {
    //用...arg來接收所有參數
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            console.log('沒有成功:', error);
        }
    };
};

const createRequest = (url) => {
    return async (id) => {
        const finalUrl = id ? \`\${url}/\${id}\` : url;
        const res = await axios.get(finalUrl);
        console.log('成功:', res);
        return res;
    };
};

const getTodo = catchError(
    createRequest('https://jsonplaceholder.typicode.com/todos')
);

const getUser = catchError(
    createRequest('https://randomuser.me/api/')
);

getTodo(1);
getTodo(2);
getUser();
\`\`\`
`,__vite_glob_0_48=Object.freeze(Object.defineProperty({__proto__:null,default:JS____30__Async},Symbol.toStringTag,{value:"Module"})),JS____31__Class=`---
title: JS核心篇(31)：Class
date: 2021-03-31
tags: ["JavaScript"]
---
## ES6 class與傳統建立原型比較
\`\`\`js
class Animal {
    constructor(f) {
        this.kingdom = '動物界';
    }
    move() {
        console.log(this.name + '移動')
    }

}
class Dog extends Animal {
    constructor(name, color, size){
        super(this);
        this.name = name;
        this.color = color;
        this.size = size;
    }
    bark(){
        console.log(this.name +'吠叫')
    }
}

const Bibi = new Dog('Bibi', 'white', 'small');
Bibi.bark(); //Bibi吠叫
Bibi.move(); //Bibi移動
console.log(Bibi.kingdom); //動物界
\`\`\`
\`\`\`js
//創建"動物"原型
function Animal(){
  this.kingdom = '動物界';
}

//在"動物"原型，新增"移動"方法
Animal.prototype.move = function(){
  console.log(this.name + '移動');
}

//創建"狗"原型
function Dog(name, color, size){
  //呼叫父類別的建構函數
  Animal.call(this);
  this.name = name;
  this.color = color;
  this.size = size;
}

//在"狗"原型，新增"吠叫"方法
Dog.prototype.bark = function(){
  console.log(this.name +'吠叫')
}

//讓"狗"繼承於"動物"原型
Dog.prototype = Object.create(Animal.prototype);

//修正建構函數的指向，原因是因為Object.create()會覆蓋原本的建構函數
Dog.prototype.constructor = Dog;

//創建"比比"原型
const Bibi = new Dog('Bibi', 'white', 'small');

Bibi.bark(); //Bibi吠叫
Bibi.move(); //Bibi移動
console.log(Bibi.kingdom); //動物界
\`\`\`

-----------------------------------------------
## 建立資料處理方法
\`\`\`js
const data = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 20,
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24,
  },
  {
    name: 'Ray',
    like: '泡菜',
    age: 28,
  },
  {
    name: '滷蛋',
    like: '狗糧',
    age: 10,
  },
  {
    name: '漂亮阿姨',
    like: '美妝',
    age: 19,
  },
];


class FilterData {
  constructor(item){
    this.item = item;
  }
  //篩選[屬性]不超過[多少值]
  filterItems(key,value){
    this.data = this.data.filter((item) => {
      return item[key] >= value
    });
    return this;
  }
  //將[屬性]由小排到大
  sortItems(key){
    this.data.sort((a,b)=>{
      return a[key] - b[key];
    });
    return this;
  }
  //只要查看[哪些屬性]
  excludeFields(...fields){
    this.data = this.data.map((item)=>{
      Object.keys(item).forEach((key)=>{
        if(!fields.includes(key)){ delete item[key] }
      })
      return item;
    });
    return this;
  }
}

const newData = new FilterData(item);

//方法結束都有return this因此可以連接方法
newData.filterItems('age',20).sortItems('age').excludeFields('name','age');

console.log(newData); 
//[
//  {name: 'Casper', age: 20},
//  {name: 'Wang', age: 24},
//  {name: 'Ray', age: 28}
//]
\`\`\``,__vite_glob_0_49=Object.freeze(Object.defineProperty({__proto__:null,default:JS____31__Class},Symbol.toStringTag,{value:"Module"})),JS____4___________=`---
title: JS核心篇(4)：原始型別與物件型別
date: 2021-03-04
tags: ["JavaScript"]
---
## 原始型別(Primitive Data Type)
|typeof|中文|說明|
|---|---|---|
|Boolean|布林值|true、false|
|Number|數字|1234567890、NaN、Infinity|
|String|字串|''或""內的文字|
|Null|空值|曾經被賦予值，但是沒有值|
|Undefined|未定義|尚未被賦予值|
|Biglnt|符號/唯一值|表示超大整數，如 123456789n|
|Symbol|唯一符號|表示唯一識別符，可作物件 key，無法被重複|

\`Biglnt是處理金融、加密、天文，例如:const big = 1234567890123456789012345678901234567890n;\`

-----------------------------------------------
* 字串
\`\`\`js
const a = "蘋果";
console.log(typeof a);  //string
\`\`\`

-----------------------------------------------
* 數字
\`\`\`js
const a = 3.1415;
console.log(typeof a);  //number
\`\`\`
-----------------------------------------------
* 布林值
\`\`\`js
const a = true;
console.log(typeof a);  //boolean
\`\`\`

-----------------------------------------------
* 未定義
\`\`\`js
const a;
console.log(typeof a);  //undefined
\`\`\`

-----------------------------------------------
* 空值
* null\`型別為object，歷史錯誤\`
\`\`\`js
const a = null;
console.log(typeof a);  //object
\`\`\`

-----------------------------------------------
## 物件型別(Object Type)
|typeof|中文|說明|
|---|---|---|
|Object|物件|{}內的值|
|Object|陣列|[]內的值|
|function|函式|物件裡的子型別|
|Object|new String()|包裹方式建立的型別|
|Object|new Number()|包裹方式建立的型別|
|Object|new Boolean()|包裹方式建立的型別|

-----------------------------------------------
* 物件
\`\`\`js
const apple = {
  name: '蘋果'
};
console.log(typeof apple);  //object
\`\`\`

-----------------------------------------------
* 陣列
\`\`\`js
const apple = ["蘋果"];
console.log(typeof apple);  //object
\`\`\`

-----------------------------------------------
* 函式
\`\`\`js
const apple = function(){};
console.log(typeof apple);  //function
\`\`\`

-----------------------------------------------
## 動態型別
* 當變數在執行階段被賦予值時，可能會轉換型別。而轉換分為以下兩種:
* 顯性轉換：直接賦予新的值
\`\`\`js
let apple = '蘋果';
apple = 1;
console.log(typeof apple);  //number
\`\`\`

-----------------------------------------------
* 隱性轉換：數字跟字串**相加**，結果會是**字串**。
\`\`\`js
const a = 1;
const b = '2';
console.log(a + b ,typeof (a + b)); //12,string
\`\`\`

-----------------------------------------------
* 隱性轉換：數字跟字串**相乘**，結果會是**數字**。
\`\`\`js
const a = 1;
const b = '2';
console.log(a * b ,typeof (a * b)); //2,number
\`\`\`

-----------------------------------------------
## 型別轉換方法
* 使用 **parseInt()** 可將字串轉數字。
\`\`\`js
const a = '100';
parseInt(a);
console.log(a, typeof a);  //100,number
\`\`\`

-----------------------------------------------
* 使用 **.toString** 可轉數字轉字串。
\`\`\`js
const a = 100;
a.toString();
console.log(a, typeof a);  //100,string
\`\`\`

-----------------------------------------------
## 字串型別的應用
* 使用 **.length** 可取得字數(空白也算)。
\`\`\`js
const apple = '青森蘋果'
console.log(apple.length);  //4
\`\`\`

-----------------------------------------------
* 使用 **.trim()** 可以濾掉 **前後** 空白。
\`\`\`js
const apple = "  青森 蘋果    ";
apple.trim();
console.log(apple);  //青森 蘋果
\`\`\``,__vite_glob_0_50=Object.freeze(Object.defineProperty({__proto__:null,default:JS____4___________},Symbol.toStringTag,{value:"Module"})),JS____5_____=`---
title: JS核心篇(5)：運算子
date: 2021-03-05
tags: ["JavaScript"]
---
## 一元運算子
\`\`\`js
delete a;
typeof a;
\`\`\`

-----------------------------------------------
## 二元運算子
\`\`\`js
let a;
a = 1 + 1;
console.log(a);  //2
//先執行 1 + 1;
//再執行 a = 2;
\`\`\`

-----------------------------------------------
## 三元運算子
* 問號前面是判斷的值，若**成立**就會回傳分號前面的值，若**不成立**就會回傳分號後面的值。
\`\`\`js
const isApple = true;

function sayFruit() {
  console.log(isApple ? '蘋果' : '香蕉');
}

sayFruit(); //蘋果
//判斷式 ? 表達式1 : 表達式2 ;
//(判斷式)成立/不成立，執行{表達式1}/{表達式2}。
\`\`\``,__vite_glob_0_51=Object.freeze(Object.defineProperty({__proto__:null,default:JS____5_____},Symbol.toStringTag,{value:"Module"})),JS____6_________=`---
title: JS核心篇(6)：運算子的優先序
date: 2021-03-06
tags: ["JavaScript"]
---
## 運算子的對照表
* [優先序查詢](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
* **優先序** 數值越高的，會優先執行。

|優先序|執行方向|運算子|
|---|---|---|
|20|無|( )|
|16|從右至左←|! 、 ++ 、 -- 、 typeof 、 delete|
|14|從左至右→|* 、 / 、 %|
|13|從左至右→|+ 、 -|
|11|從左至右→|< 、 <= 、 > 、 =>|
|10|從左至右→|== 、 != 、 === 、 !==|
|6|從左至右→|&&|
|5|從左至右→|ll|
|4|從右至左←|… ? … : …|
|3|從右至左←|= 、 += 、 -=|
|1|從左至右→|,|

-----------------------------------------------
## 相依性(Associativity)
* 當運算子相同時，依照 **相依性** 來決定執行方向，由左至右還是由右至左。
\`\`\`js
const a = 2 + 2 + 2 + 3;
console.log(a);  //9
\`\`\`

-----------------------------------------------
## 優先性(Precedence)
* 運算子會依照 **優先序** 大小來決定先後順序，大的先，小的後，例如：乘號優先於加號。
* 範例一：**乘號** 執行完再執行 **加號**。
\`\`\`js
const a = 2 * 2 + 2 * 3;
console.log(a);  //10
//2 * 2;  4
//2 * 3;  6
//4 + 6;  10
\`\`\`
-----------------------------------------------
* 範例二：
\`\`\`js
const a = 1 < 2 < 3;
console.log(a);  //true
//1 < 2;  true
//true < 3;  true; 
\`\`\`
-----------------------------------------------
* 範例三：
\`\`\`js
const a = 3 > 2 > 1;
console.log(a);  //false
//3 > 2;  true
//true > 1;  false
//因為在比對時true會變成1，所以1不會大於1
\`\`\`
-----------------------------------------------
* 範例四：
\`\`\`js
let a = 1;
let b = 2; 
a = b = 3;
console.log(a,b); // 3,3
//3賦予到b的“回傳結果”; 
//b = 3; 
//a = b;
\`\`\``,__vite_glob_0_52=Object.freeze(Object.defineProperty({__proto__:null,default:JS____6_________},Symbol.toStringTag,{value:"Module"})),JS____7_________=`---
title: JS核心篇(7)：運算子的相等性
date: 2021-03-07
tags: ["JavaScript"]
---
## 嚴格相等(Strict Equals)
* 連續三個等號，**值** 和 **型別** 都要相同，才會成立。
\`\`\`js
console.log(1 === 1);  //true
console.log(1 === "1");  //false
console.log(1 === true);  //false

/** 例外案 **/
console.log(NaN === NaN);  //false
console.log(+0 === -0);  //true
console.log(null === undefined);  //false

const a = 1;
const b = new Number(1);
console.log(a === b); //false

/** 進階範例 **/
console.log(a = 1 + 1 === 1);  //false
//1 + 1 = 2;
//2 === 1 = false;
//a = false;
\`\`\`

-----------------------------------------------
## 寬鬆相等(Loose Equals)
* 連續二個等號，只要 **值** 相同就會成立。
\`\`\`js
console.log(1 == 1);  //true
console.log(17 == "0x11");  //true，16+1 

/** true會變成1，false會變成0 **/
console.log(true == 1);  //true
console.log(false == 0); //true

/** 字串與數字相比時會以包裹方式Number() **/
console.log("1" == true);  //true
console.log("0" == false);  //true
console.log(1 == "1");  //true
console.log(1 == true);  //true
console.log('1' == !0);  //true，0是false，但前面加上!會變true

/**  null跟undefined不會被轉為數字型別 **/
console.log(Number(null));  //0
console.log(Number(undefined));  //NaN
console.log(null == 0);  //false
console.log(undefined == 0)  //false
console.log(null == undefined);  //true
\`\`\`

-----------------------------------------------
## 物件與非物件的比對
* 物件與非物件做比對時，是使用 **包裹物件** 做轉換。
* 陣列與數字相比時會自動去掉 **[]** 。
\`\`\`js
console.log(1 == ["1"]);  //true
console.log("1" == [1]);  //true
console.log("A" == ['A']);  //true
console.log([1] == true);  //true

const a = 1;
const b = new Number(1);
console.log(a == b); //true
\`\`\`

-----------------------------------------------
## 物件與物件的比對
* 物件與物件相比時，會是false。
\`\`\`js
console.log([] == []); //false
console.log({} == {});  //false
\`\`\`

-----------------------------------------------
## 物件傳參考性質
\`\`\`js
const a = {};
const b = a;
console.log(a === b); //true
\`\`\``,__vite_glob_0_53=Object.freeze(Object.defineProperty({__proto__:null,default:JS____7_________},Symbol.toStringTag,{value:"Module"})),JS____8_______=`---
title: JS核心篇(8)：邏輯運算子
date: 2021-03-08
tags: ["JavaScript"]
---
## 邏輯運算子(&&、||、!) 

|邏輯運算子|英文|口語中文|說明|
|---|---|---|---|
|&&|AND|而且|左邊是\`false\`回傳結果，是\`true\`回傳右邊|
|\\|\\||OR|或者|左邊是\`true\`回傳結果，是\`false\`回傳右邊|
|!|NOT|不|\`true\`變\`false\`，\`false\`變\`true\`|

-----------------------------------------------
## &&
* 判斷左邊的值，是false就直接回傳，是true就回傳右邊。
\`\`\`js
console.log(0 && 1);  //0
console.log(2 && 3);  //3

console.log(1 && 2 && 0); //0
//執行順序：由左至右
//1 && 2 --> 2
//2 && 0 --> 0

console.log(1 || 0 && 2 || 1); //1
//執行順序：先&&，再||
//0 && 2 --> 2
//1 || 2 --> 1
//1 || 1 --> 1
\`\`\`

-----------------------------------------------
## ||
* 判斷左邊的值，是true就直接回傳，是false就回傳右邊。
\`\`\`js
console.log(0 || 1);  //1
console.log(2 || 3);  //2

/** 進階範例三 **/
console.log(0 || 1 && 2 || 3);  //2
//1 && 2 = 2;
//0 || 2 = 2;
//2 || 3 = 2;
\`\`\`

-----------------------------------------------
## ！(否定)
\`\`\`js
console.log(!0);  //true
console.log(!1);  //false
console.log(![]);  //false
console.log(!true);  //false
console.log(3 != "3");  //false
console.log(3 !== "3");  //true
\`\`\`

-----------------------------------------------
## 衍伸練習題
\`\`\`js
let a = 1 + 1 === 1;
//執行順序：先+，再判斷===
console.log(a); //false

console.log(1000 < 10000 < 10); //true
//執行順序：由左至右
//1000 < 10000 --> true
//true < 10 --> true，因為true = 1
\`\`\`

-----------------------------------------------
### 三元運算式範例：
\`\`\`js
let myMoney = 500;
function addValue(cash){
  cash = parseInt(cash);
  console.log(cash);
  // 當 cash 是數值或為 0 時，使用 cash 的數值
  // 如果 cash 是 NaN 時，則直接套用 500
  cash = (cash || cash === 0)? cash: 500;
  let total = cash + myMoney;
  console.log('我有'+total+'元')
}
addValue(); // "我有1000元"
addValue(0); // "我有500元"
\`\`\`

-----------------------------------------------
## 簡化賦值運算子
\`\`\`js
let a = 1;
a = a + 1;
console.log(a);  //2

/** 簡化 **/
let a = 1;
a += 1;
console.log(a);  //2

/** 再簡化 **/
let a = 1;
a++;
console.log(a);  //2

/** 進階題 **/
let a = 10;
console.log(++a);// 11
console.log(--a);// 9
console.log(++a * a);// 121
console.log(--a * a);// 81
\`\`\``,__vite_glob_0_54=Object.freeze(Object.defineProperty({__proto__:null,default:JS____8_______},Symbol.toStringTag,{value:"Module"})),JS____9_______=`---
title: JS核心篇(9)：真值與假值
date: 2021-03-09
tags: ["JavaScript"]
---
## 真值與假值對照表
[對照表查詢](https://dorey.github.io/JavaScript-Equality-Table/)
|判斷值|例如|
|---|---|
|真值|true 、 1 、 '1' 、 [] 、 {}|
|假值|false 、 0 、 '' 、 NaN 、 null 、 undefined|

-----------------------------------------------
## 真值(Truthy)
* 判斷式裡如果是**真值**，就會成立。
\`\`\`js
if([]){
  console.log('蘋果');  //蘋果，因為[]是真值
}else{
  console.log('香蕉');
}

/** 特別案 **/
if(new Boolean(false)){
  console.log('蘋果'); //蘋果，因為{}是真值
}else{
  console.log('香蕉');  
}
\`\`\`

-----------------------------------------------
## 假值(Falsy)
* 判斷式裡如果是**假值**，就會不成立。
\`\`\`js
if(''){
  console.log('蘋果');
}else{
  console.log('香蕉');  //香蕉，因為''是假值
}
\`\`\``,__vite_glob_0_55=Object.freeze(Object.defineProperty({__proto__:null,default:JS____9_______},Symbol.toStringTag,{value:"Module"})),JavaScript__=`---
title: JavaScript縮寫
date: 2024-12-01
tags: ["JavaScript"]
---
## 物件字面值(Object literals)
\`\`\`js
const obj = {
  name: '蘋果',
  fn: function() { 
    return this.name;
  }
}

console.log(obj.fn()); //蘋果
\`\`\`
### 縮寫後：
\`\`\`js
const obj = {
  name: '蘋果',
  fn() { 
    return this.name;
  }
}

console.log(obj.fn()); //蘋果
\`\`\`

-----------------------------------------------
## 物件內的變數
\`\`\`js
const person = {
  name: '小明'
};

const people = {
    person: person;
}

console.log(people); //person:{ name: '小明' }
\`\`\`
### 縮寫後：
\`\`\`js
const person = {
  name: '小明'
};

const people = {
    person
}

console.log(people); //person:{ name: '小明' }
\`\`\`

-----------------------------------------------
## 合併兩個陣列
\`\`\`js
const groupA = ['蘋果', '香蕉', '鳳梨'];
const groupB = ['蓮霧', '芭樂'];
const groupAll = groupA.concat(groupB);

console.log(groupAll); //['蘋果', '香蕉', '鳳梨' , '蓮霧', '芭樂']
\`\`\`
### 縮寫後：
\`\`\`js
const groupA = ['蘋果', '香蕉', '鳳梨'];
const groupB = ['蓮霧', '芭樂'];
const groupAll = [...groupA , ...groupB];

console.log(groupAll); //['蘋果', '香蕉', '鳳梨' , '蓮霧', '芭樂']
\`\`\`

-----------------------------------------------
## 合併兩個物件
\`\`\`js
const methods = {
  fn1() {
    console.log(1);
  },
  fn2() {
    console.log(1);
  }
}

const newMethods = {
  fn() {
    console.log(1);
  },
  ...methods
}

console.log(newMethods); //{fn: ƒ, fn1: ƒ, fn2: ƒ}
\`\`\`

-----------------------------------------------
## 將dom元素陣列轉為純陣列
\`\`\`html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
\`\`\`
\`\`\`js
const doms = document.querySelectorAll('li');
console.log(doms); //NodeList(3) [li, li, li]

const newDoms = [...doms];
console.log(newDoms); // [li, li, li]
\`\`\`
\`純陣列比NodeList可使用的方法還多，例如：filter、map等\`

-----------------------------------------------
## 參數預設值
\`\`\`js
function sum(a, b) { 
    if(!b){
        b = 3
    }
    return a + b;
}
console.log(sum(1)); //4
\`\`\`
### 縮寫後：
\`\`\`js
//設定b預設3，所以如果沒帶參數的話b自動會是3
function sum(a, b = 3) { 
    return a + b;
}
console.log(sum(1)); //4

//設定b預設3，但如果有真正的參數會以參數為主
function sum(a, b = 3) { 
    return a + b;
}
console.log(sum(1,5)); //6
\`\`\``,__vite_glob_0_56=Object.freeze(Object.defineProperty({__proto__:null,default:JavaScript__},Symbol.toStringTag,{value:"Module"})),Javascript_______=`---
title: Javascript監聽事件總整理
date: 2021-02-06
tags: ["JavaScript"]
---
## 監聽點擊事件(事件氣泡)
\`addEventListener(事件,一組動作,false)\` 若同時有多個監聽事件，先執行點擊目標在執行外層
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(){
    console.log("你點到按鈕");
},false);

body.addEventListener("click",function(){
    console.log("你點到body");
},false);
\`\`\`
\`結果："你點到按鈕"，"你點到body"\`

-----------------------------------------------
## 監聽點擊事件(事件捕捉)
\`addEventListener(事件,一組動作,true)\` 若同時有多個監聽事件，先執行外層在執行點擊目標
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(){
    console.log("你點到按鈕");
},true);

body.addEventListener("click",function(){
    console.log("你點到body");
},true);
\`\`\`
\`結果："你點到body"，"你點到按鈕"\`

-----------------------------------------------
## 監聽點擊事件＋阻止事件冒泡
1. \`addEventListener\`第三個參數預設是\`false\`，表示“事件從元素內開始往外發生”
2. 當我點擊「按鈕」時會出現“蘋果”，後面body也會執行並出現“香蕉”
3. 但如果加上\`stopPropagation\`之後，可以成功阻止事件冒泡，\`body\`不會執行
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(event){
    console.log("你點到按鈕");
    //成功阻止事件往外發生，如果刪除這行，會console.log("香蕉");
    event.stopPropagation();
});

body.addEventListener("click",function(){
    console.log("你點到body");
});
\`\`\`

-----------------------------------------------
## 監聽點擊事件＋取消a連結跳至錨點
\`\`\`html
<a class="link" href="#">連結</a>
\`\`\`
\`\`\`js
let link = document.querySelector(".link");

link.addEventListener("click",function(event){
    //取消a連結尋找#錨點
    event.preventDefault();
    console.log("蘋果");
});
\`\`\`

-----------------------------------------------
## 監聽點擊事件＋取消button預設寄送，先進行驗證
\`\`\`html
<form class="form">
    <!-- required為必填，不能送出空值 -->
    <input type="text" id="name" required>
    <button class="btn" type="submit">提交</button>
</form>
\`\`\`
\`\`\`js
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");

btn.addEventListener("click",function(event){

    // 阻止表單的默認提交行為
    event.preventDefault();

    // 這裡可以進行表單驗證
    if(form.checkValidity()){
        console.log("表單通過驗證");
        form.submit(); //提交表單
    }else{
        console.log("表單驗證失敗");
    }
});
\`\`\`

-----------------------------------------------
## 監聽點擊事件(取得滑鼠點擊的目標)
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
\`\`\`js
//滑鼠點擊<button>
document.addEventListener("click",function(event){
    console.log(event.target); //<button class="btn" type="button">按鈕</button>
    console.log(event.target.id); //"test"
    console.log(event.target.value); //""
    console.log(event.target.nodeName); //"BUTTON"
    console.log(event.target.tagName); //"BUTTON"
    console.log(event.target.localName); //"button"
    console.log(event.target.dataset.num); //"23"
    console.log(event.target.className); //"btn"
    console.log(event.target.type); //"button"
});
\`\`\`

-----------------------------------------------
## 監聽鍵盤事件(取得按下的鍵盤值)
\`\`\`js
//按鍵盤"A"鍵
document.addEventListener("keydown",function(event){
    console.log(event.keyCode); //65
});
\`\`\`

-----------------------------------------------
## 監聽滑鼠事件
\`\`\`html
<button id="btn" type="button">按鈕</button>
\`\`\`
\`\`\`js
let btn = document.getElementById("btn");

//當滑鼠移入按鈕時
btn.addEventListener("mouseenter",function(event){
    console.log("滑鼠觸碰到按鈕了");
});

//當滑鼠移出按鈕時
btn.addEventListener("mouseleave",function(event){
    console.log("滑鼠離開到按鈕了");
});
\`\`\`

-----------------------------------------------
## 監聽切換事件＋比對資料顯示值
\`\`\`html
<select class="select">
  <option value="蘋果">蘋果</option>
  <option value="香蕉">香蕉</option>
  <option value="鳳梨">鳳梨</option>
</select>
<p class="text"></p>
\`\`\`
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let select = document.querySelector(".select");
let text = document.querySelector(".text");

function showDataName(event){

  for(let i=0 ; i<fruitsData.length ; i++){
    //比對下拉選單的"名稱"，如果跟資料的"名稱"一樣
    if(event.target.value == fruitsData[i].name){
        //就讓text就顯示該值的"價錢"
        text.textContent = fruitsData[i].price;
    }
  }
}
select.addEventListener("change",showDataName);
\`\`\``,__vite_glob_0_57=Object.freeze(Object.defineProperty({__proto__:null,default:Javascript_______},Symbol.toStringTag,{value:"Module"})),Lightbox2____=`---
title: Lightbox2燈箱效果
date: 2023-04-22
tags: ["JavaScript"]
---
## Lightbox2使用前準備
1. 下載[lightbox2](https://github.com/lokesh/lightbox2)
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-1.png)

-----------------------------------------------
2. 解壓縮後，將\`/examples\`內的檔案拉到自己的資料夾內
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-2.png)
\`.js檔、.css檔、圖片檔都要拉\`

-----------------------------------------------
3. 將.css和.js引入
    * 在\`<head>\`加入\`<link href="css/lightbox.min.css" rel="stylesheet"/>\`
    * 在\`<body>\`加入\`<script src="js/lightbox-plus-jquery.min.js"><\/script>\`
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-3.png)

-----------------------------------------------
4. 接著將圖片放入images資料夾
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-4.png)

-----------------------------------------------
5. 到index.html開始撰寫
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-5.png)

-----------------------------------------------
6. \`data-title\`圖片左下角標題
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-6.png)

-----------------------------------------------
7. 進階修改樣式到.js檔裡的最下方開始撰寫
![圖片](./images/lightbox2燈箱效果/lightbox2燈箱效果-7.png)

-----------------------------------------------
## 將圖片群組化
將\`data-lightbox\`名稱命名相同
\`\`\`html
<a href="images/image-1.jpg" data-lightbox="group1">Image1</a>
<a href="images/image-2.jpg" data-lightbox="group1">Image2</a>
<a href="images/image-3.jpg" data-lightbox="group1">Image3</a>
\`\`\`

-----------------------------------------------
## 其他參數設定
\`\`\`js
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,//在手機裝置上出現箭頭
    'disableScrolling': true,//圖片超出視窗不會出現滾輪
    'fitImagesInViewport': true,//圖片完整顯示在視窗
    'maxWidth': 300,//圖片最大寬度px
    'maxHeight': 300,//圖片最大高度px
    'positionFromTop': 50,//圖片距離頂部px
    'resizeDuration': 700,//圖片出現速度
    'wrapAround': true//圖片到最後一張時會在從第一張開始
});
\`\`\``,__vite_glob_0_58=Object.freeze(Object.defineProperty({__proto__:null,default:Lightbox2____},Symbol.toStringTag,{value:"Module"})),Mac______=`---
title: Mac檔案加密方法
date: 2024-01-03
tags: ["Mac"]
---
## 將檔案加密方法
1. 打開終端機：command ＋空白，輸入 terminal，enter 開啟 app
2. 先輸入 cd，再把欲加密檔案直接拉進終端機，然後把資料名稱刪除(**要先在資料夾外層**)
3. 接著輸入:
\`\`\`bash
$ zip -er 資料夾名稱.zip 資料夾名稱
\`\`\`
範例：
\`\`\`bash
$ zip -er dist.zip dist
\`\`\`
4. 接著會出現”Enter password:“，設定密碼
5. enter 後出現“Verify password:”，再次輸入密碼
6. 完成後，該資料夾就會出現加密 zip 檔`,__vite_glob_0_59=Object.freeze(Object.defineProperty({__proto__:null,default:Mac______},Symbol.toStringTag,{value:"Module"})),Mac________=`---
title: Mac網頁動態效果消失
date: 2023-08-10
tags: ["Mac"]
---
## 測試
1. 到[animate.css](https://animate.style/)網站點擊右側選項，看看中間animate.css字樣是否有效果
![圖片](./images/Mac網頁動態效果消失/Mac網頁動態效果消失-1.png)

-----------------------------------------------
2. 若無效果，更換瀏覽器也無效，就直接到系統設定
![圖片](./images/Mac網頁動態效果消失/Mac網頁動態效果消失-2.png)

-----------------------------------------------
3. 點“輔助使用”
![圖片](./images/Mac網頁動態效果消失/Mac網頁動態效果消失-3.png)

-----------------------------------------------
4. 將“減少動態效果”取消勾選，即完成
![圖片](./images/Mac網頁動態效果消失/Mac網頁動態效果消失-4.png)`,__vite_glob_0_60=Object.freeze(Object.defineProperty({__proto__:null,default:Mac________},Symbol.toStringTag,{value:"Module"})),Markdown___HTML___='---\ntitle: Markdown語法與HTML的對照\ndate: 2021-01-23\ntags: ["Markdown","HTML"]\n---\n## 標題\n開頭用`#`撰寫，分別對應的是`<h1>`到`<h6>`標題\n|名稱|md寫法|對應html|\n|---|---|---|\n|一級標題|`# 文字內容`|`<h1>文字內容</h1>`|\n|二級標題|`## 文字內容`|`<h2>文字內容</h2>`|\n|三級標題|`### 文字內容`|`<h3>文字內容</h3>`|\n|四級標題|`#### 文字內容`|`<h4>文字內容</h4>`|\n|五級標題|`##### 文字內容`|`<h5>文字內容</h5>`|\n|最小標題|`###### 文字內容`|`<h6>文字內容</h6>`|\n\n-----------------------------------------------\n## 文字\n用`*`來包覆，分別是斜體、粗體、斜粗體\n|名稱|md寫法|對應html|\n|---|---|---|\n|斜體|`*文字內容*`|`<em>文字內容</em>`|\n|粗體|`**文字內容**`|`<strong>文字內容</strong>`|\n|斜粗體|`***文字內容***`|`<strong><em>文字內容</em></strong>`|\n\n-----------------------------------------------\n## 文字連結\n`[]`內是顯示文字，`()`是`href`，但是`md`無法另開新視窗\n```markdown\n[Google連結](https://www.google.com.tw/)\n```\n對應html:\n```markdown\n<a href="https://google.com">https://google.com</a>\n```\n\n-----------------------------------------------\n## 圖片\n`[]`對應的是`alt`，`()`對應的是`src`\n```markdown\n![圖片](/img/path.jpg)\n```\n對應html:\n```markdown\n<img src="/img/path.jpg" alt="圖片">\n```\n\n-----------------------------------------------\n## 刪除文字\n文字用2個`~`來包覆是刪除線(但不是所有`Markdown`引擎都支援)\n|名稱|md寫法|對應html|\n|---|---|---|\n|刪除線|`~~文字內容~~`|`<del>文字內容</del>`|\n-----------------------------------------------\n## 有序序列\n`數字`＋`.` 排序下來是有序序列，對應的是`<ol>`\n```markdown\n1. 有序序列\n2. 有序序列\n3. 有序序列\n```\n對應html:\n```markdown\n<ol>\n    <li>有序序列</li>\n    <li>有序序列</li>\n    <li>有序序列</li>\n</ol>\n```\n\n-----------------------------------------------\n## 無序序列\n用`*`排序下來是無序序列，可以往內縮排寫到第二層、第三層\n```markdown\n* 無序序列\n* 無序序列\n* 無序序列\n```\n對應html:\n```markdown\n<ul>\n    <li>無序序列</li>\n    <li>無序序列</li>\n    <li>無序序列</li>\n</ul>\n```\n\n-----------------------------------------------\n## 引言\n用`>`排序下來是引言，對應的是`<blockquote>`\n```markdown\n> 第一層引言\n>> 第二層引言\n>>> 第三層引言\n```\n對應html:\n```markdown\n<blockquote>第一層引言\n    <blockquote>第二層引言\n        <blockquote>第三層引言\n        </blockquote>\n    </blockquote>\n</blockquote>\n```\n\n-----------------------------------------------\n## 勾選清單\n```markdown\n- [ ] 未勾選清單\n- [x] 已勾選清單\n```\n對應html:\n```markdown\n<ul>\n  <li>\n    <input type="checkbox" disabled>\n    未勾選清單\n  </li>\n  <li>\n    <input type="checkbox" checked disabled>\n    已勾選清單\n  </li>\n</ul>\n```\n\n-----------------------------------------------\n## 定義型清單\n```markdown\n名詞\n: 說明\n```\n對應html:\n```markdown\n<dl>\n  <dt>名詞</dt>\n  <dd>說明</dd>\n</dl>\n```\n\n-----------------------------------------------\n## 表格\n```markdown\n|表頭一|表頭二|表頭三| \n|---|---|---| \n|內容一|內容二|內容三|\n|內容四|內容五|內容六|\n```\n對應html:\n```markdown\n<table>\n  <thead>\n    <tr>\n      <th>表頭一</th>\n      <th>表頭二</th>\n      <th>表頭三</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>內容一</td>\n      <td>內容二</td>\n      <td>內容三</td>\n    </tr>\n    <tr>\n      <td>內容四</td>\n      <td>內容五</td>\n      <td>內容六</td>\n    </tr>\n  </tbody>\n</table>\n```\n若要讓整列置左：`:---`\n若要讓整列置中：`:---:`\n若要讓整列置右：`---:`\n\n-----------------------------------------------\n## 程式碼片段\n|名稱|md寫法|對應html|\n|---|---|---|\n|單行程式碼|(反引號)程式碼(反引號)|`<code></code>`|\n|多行程式碼|(三個反引號)文字內容(三個反引號)|`<pre><code></code></pre>`|\n\n-----------------------------------------------\n## 分隔線\n以下三種寫法都會產生分隔線\n|md寫法|對應html|\n|---|---|\n|`---`|`<hr>`|\n|`***`|`<hr>`|\n|`___`|`<hr>`|\n-----------------------------------------------\n## 數學公式\n```markdown\n$$\n數學公式\n\\phi = \\frac{(1+\\sqrt{5})}{2} = 1.6180339887\\cdots\n$$\n```\n\n-----------------------------------------------\n## 跳脫字元\n若在最前方加上`\\`，就不會是該對應標籤\n```markdown\n\\* 不是斜體\n\\# 不是標題\n```',__vite_glob_0_61=Object.freeze(Object.defineProperty({__proto__:null,default:Markdown___HTML___},Symbol.toStringTag,{value:"Module"})),Object____=`---
title: Object處理方法
date: 2026-01-23
tags: ["JavaScript"]
---
假設拿到的資料格式：
\`\`\`js
const tagCounts = {
  css: 3,
  js: 4,
  vue: 4,
  git: 2
};
\`\`\`
## Object.keys(obj)
只拿物件裡的每一個\`名稱\`
\`\`\`js
const tagData = Object.keys(tagCounts);
console.log(tagData)

//結果
['css', 'js', 'vue', 'git']
\`\`\`
-----------------------------------------------

## Object.values(obj)
只拿物件裡的每一個\`值\`
\`\`\`js
const tagData = Object.values(tagCounts);
console.log(tagData)

//結果
[3, 4, 4, 2]
\`\`\`

-----------------------------------------------
## Object.entries(obj)
\`名稱\`跟\`值\`都一起拿
\`\`\`js
const tagData = Object.entries(tagCounts);
console.log(tagData)

//結果
[
  ['css', 3],
  ['js', 4],
  ['vue', 4],
  ['git', 2]
]
\`\`\`

-----------------------------------------------
## Object.entries(obj)+map(item...)
先搭配map看看結果會拿到什麼
\`\`\`js
const tagData = Object.entries(tagCounts).map(item=>{
    console.log(item)
})

//結果
--> ['css', 3]
--> ['js', 4]
--> ['vue', 4]
--> ['git', 2]
\`\`\`

-----------------------------------------------
## Object.entries(obj)+map(([key,value])...)
用\`([key,value])\`分別對\`名稱\`和\`值\`進行拆解：
const key = item[0];
const value = item[1];
\`key\`是拿陣列中的第一項資料
\`value\`是拿陣列中的第二項資料
\`\`\`js
const tagData = Object.entries(tagCounts).map(([key,value]))=>{
    return{
        name: key,
        count: value
    }
})
console.log(tagData)

//結果
[
    { name: 'css', count: 3 },
    { name: 'js', count: 4 },
    { name: 'vue', count: 4 },
    { name: 'git', count: 2 },
]
\`\`\``,__vite_glob_0_62=Object.freeze(Object.defineProperty({__proto__:null,default:Object____},Symbol.toStringTag,{value:"Module"})),PhotoShop_____='---\ntitle: 常用快捷鍵\ndate: 2021-05-01\ntags: ["Photoshop"]\n---\n## 常用快捷鍵\n### `Ctrl` + `W` 關閉視窗\n### `Ctrl` + `Z` 還原\n### `Ctrl` + `X` 剪下圖層\n### `Ctrl` + `C` 複製\n### `Ctrl` + `V` 貼上\n### `Ctrl` + `S` 存檔\n### `Ctrl` + `J` 拷貝圖層\n### `Ctrl` + `shift` + `S` 另存新檔\n### `Ctrl` + `shift` + `I` 反轉選取\n### `Z` 放大鏡\n### `X` 前景色/背景色\n### `C` 裁切工具\n### `V` 移動工具\n### `B` 筆刷工具\n### `A` 路徑選取工具\n### `S` 仿製印章\n### `D` 滴管工具\n### `F` 快速選取工具\n### `Q` 鋼筆工具\n\n-----------------------------------------------\n## 注意小細節\n1. 使用濾鏡效果時，要將圖層先轉為智慧型物件。\n2. 裁切工具→刪除裁切的像素(若沒勾選)→拖拉出新範圍，底層是透明格。\n3. 使用橡皮擦工具，等於使用背景色上色。\n4. 使用仿製印章，可以新增圖層，樣本選取"目前及底下的圖層"。\n5. 選擇圖層，點選底下[fx]可以套用陰影、內外框等樣式。\n6. 編輯→透視彎曲，可以設圖釘點彎曲物件，按住Alt點擊刪除圖釘。\n7. 調整面板→色相/飽和度→點選手指再對圖片Ctrl+左鍵拖拉調整色相，左鍵拖拉調整飽和度。\n\n-----------------------------------------------\n## 刪除照片中不要的內容\n1. 汙點修復工具(快速處理細小部分)\n2. 填滿內容感知(快速處理大範圍)\n3. 仿製印章(處理較複雜的部份)\n\n-----------------------------------------------\n## 其他選取方法\n1. 使用顏色選去使用顏色選去',__vite_glob_0_63=Object.freeze(Object.defineProperty({__proto__:null,default:PhotoShop_____},Symbol.toStringTag,{value:"Module"})),Pinia______=`---
title: Pinia狀態管理工具
date: 2026-03-31
tags: ["Vue3"]
---
## 環境起手式

pinia是狀態管理工具，需要統一資料的時候就可以使用
但如果是「分頁」元件就不適合，「購物車」就適合

\`\`\`bash
$ npm i pinia
\`\`\`
\`\`\`js
//main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = create(App)

app.use.(pinia)
app.mount('#app')
\`\`\`

-----------------------------------------------
## 引入store

在src底下建立store/exampleStore.js

\`\`\`js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

//匯出
export const useExampleStore = defineStore('exampleStore',() => {
  //State
  const count = ref(1);

  //Getter
  const doubleCount = computed(() => {
     count.value * 2
  })

  //Action
  function increment() {
    count.value++
  }

  return{
    count,
    doubleCount,
    increment
  }
})
\`\`\`
-----------------------------------------------
## 在元件使用

\`\`\`vue
<template>
  {{ countStore.count }}
  <button type="button" @click="countStore.increment">累加</button>
</template>

<script setup>  

import { useCountStore } from './store/exampleStore.js'

const countStore = useCountStore();

<\/script >
\`\`\`

-----------------------------------------------
## 在元件使用解構

\`\`\`vue
<template>
  {{ count }},{{ doubleCount }}
  <button type="button" @click="countStore.increment">累加</button>
</template>

<script setup>  
import { useCountStore } from '@/store/exampleStore.js'
import { storeToRefs } from 'pinia'

const countStore = useCountStore();

//會失去響應式(不能連動)
const { count, doubleCount } = countStore

//正確解法
const { count, doubleCount } = storeToRefs(countStore)

//方法
const { increment } = countStore
<\/script >
\`\`\``,__vite_glob_0_64=Object.freeze(Object.defineProperty({__proto__:null,default:Pinia______},Symbol.toStringTag,{value:"Module"})),Sass___________=`---
title: Sass快速編譯+變數使用
date: 2023-04-26
tags: ["CSS"]
---
## SASS與SCSS與CSS差別

### css樣式寫法
\`\`\`css
.menu{
    display: flex;
    flex-direction: column;
}
.menu li{
    padding: 4px 8px;
}
.menu li a{
    color: #333333;
}
\`\`\`
### scss樣式寫法
\`\`\`scss
.menu{
  display: flex;
  flex-direction: column;
  li{
    padding: 4px 8px;
    a{
      color: #333333;
    }
  }
}
\`\`\`
\`以縮排方式編譯\`
### sass樣式寫法
\`\`\`sass
.menu
  display: flex
  flex-direction: column
    li
      padding: 4px 8px
      a
        color: #333333
\`\`\`
\`少了{}以及;，以縮排方式編譯\`

-----------------------------------------------
## @mixin自訂樣式組
### sass樣式寫法
\`\`\`sass
/*變數設定*/
@mixin greenCube
  width: 50px
  height: 50px
  background-color: #28DF99

/*變數使用*/
.box
    +greenCube
\`\`\`
### scss樣式寫法
\`\`\`scss
/*變數設定*/
@mixin greenCube{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}

/*變數使用*/
.box{
  @include greenCube;
}
\`\`\`
### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}
\`\`\`

-----------------------------------------------
## $自訂常用變數
### sass樣式寫法
\`\`\`sass
/*變數設定*/
$cube_width: 50px
$cube_height: 50px
$color_green: #28DF99

/*變數使用*/
.box
  width: $cube_width
  height: $cube_height
  background-color: $color_green
\`\`\`
### scss樣式寫法
\`\`\`scss
/*變數設定*/
$cube_width: 50px;
$cube_height: 50px;
$color_green: #28DF99;

/*變數使用*/
.box{
  width: $cube_width
  height: $cube_height
  background-color: $color_green
}
\`\`\`
### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}
\`\`\`

-----------------------------------------------
## @mixin+$混合用法
### sass樣式寫法
\`\`\`sass
/*變數設定*/
@mixin greenCube($width, $height, $color_green)
  width: $width
  height: $height
  background-color: $color_green

/*變數使用*/
.box
  +greenCube(50px,50px,#28DF99)
\`\`\`
### scss樣式寫法
\`\`\`scss
/*變數設定*/
@mixin greenCube($width, $height, $color_green){
  width: $width;
  height: $height;
  background-color: $color_green;
}

/*變數使用*/
.box{
  @include greenCube(50px, 50px, #28DF99);
}
\`\`\`
### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}
\`\`\`

-----------------------------------------------
## @mixin+@media斷點用法
### sass樣式寫法
\`\`\`sass
/*變數設定*/
@mixin X-Small
  @media (max-width: 576px)
    @content

/*變數使用*/
.box
  width: 50px
  height: 50px
  background-color: green
  +X-Small
    background-color: red
\`\`\`
### scss樣式寫法
\`\`\`scss
/*變數設定*/
@mixin X-Small{
  @media (max-width: 576px){
    @content;
  }
}

/*變數使用*/
.box{
  width: 50px;
  height: 50px;
  background-color: green;

  @include X-Small{
    background-color: red;
  }
}
\`\`\`
### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: green;
}
@media (max-width: 576px) {
  .box{
    background-color: red;
  }
}
\`\`\`

-----------------------------------------------
## 匯入@import
### 在all.scss使用@import再彙整出all.css
\`\`\`scss
@import "variable"; /*常用變數*/
@import "reset"; /*css reset*/
@import "layout"; /*共同框架，第一層基本架構*/
@import "button"; /*按鈕元件*/
@import "資料夾名稱/檔案名稱";
\`\`\`
### 檔名前面加上底線\`_\`可以被編譯，但不會被輸出
\`\`\`markdown
src/
├─── scss/
│     │ 
│     ├─── _custom.scss  #sass編譯時不會被輸出
│     │     
│     └─── all.scss
│
└─── index.html          
\`\`\`
### @import的scss在編譯時會將變數連同帶走
\`\`\`scss
/*custom.scss*/
$primary-color: blue;

/*all.scss*/
@import 'custom'

.button {
  background-color: $primary-color;
}

/*編譯後all.css結果*/
.button {
  background-color: blue;
}
\`\`\``,__vite_glob_0_65=Object.freeze(Object.defineProperty({__proto__:null,default:Sass___________},Symbol.toStringTag,{value:"Module"})),Skrollr______=`---
title: Skrollr頁面滾動效果
date: 2024-01-10
tags: ["JavaScript"]
---
## 使用方式直接引入cdn
1. 直接將套件以\`cdn\`方式引入
\`\`\`js
<script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"><\/script>
\`\`\`

-----------------------------------------------
2. 在\`js\`開始撰寫地方，初始化套件：
\`\`\`js
let s = skrollr.init();
\`\`\`
-----------------------------------------------
3. 在\`html\`的標籤上撰寫\`data\`範例：
![圖片](./images/Skrollr頁面滾動效果/Skrollr頁面滾動效果-1.png)

-----------------------------------------------
4. 撰寫方式：
![圖片](./images/Skrollr頁面滾動效果/Skrollr頁面滾動效果-2.png)

-----------------------------------------------
5. [更多用法可參考API](https://github.com/Prinzhorn/skrollr?tab=readme-ov-file)`,__vite_glob_0_66=Object.freeze(Object.defineProperty({__proto__:null,default:Skrollr______},Symbol.toStringTag,{value:"Module"})),Swiper____=`---
title: Swiper輪播效果
date: 2023-04-23
tags: ["JavaScript"]
---
## swiper使用前準備
1. 先到[swiper](https://swiperjs.com/swiper-api)找到CDN
![圖片](./images/Swiper輪播效果/Swiper輪播效果-1.png)

-----------------------------------------------
2. 將.css和.js引入
  * 在\`<head>\`加入\`<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>\`
  * 在\`<body>\`加入\`<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"><\/script>\`
![圖片](./images/Swiper輪播效果/Swiper輪播效果-2.png)

-----------------------------------------------
3. 在\`<body>\`放入主容器
![圖片](./images/Swiper輪播效果/Swiper輪播效果-3.png)

-----------------------------------------------
4. 先到在\`<style>\`寫主容器的寬度和高度
![圖片](./images/Swiper輪播效果/Swiper輪播效果-4.png)

-----------------------------------------------
5. 到\`<script>\`後面寫上程式碼
![圖片](./images/Swiper輪播效果/Swiper輪播效果-5.png)

-----------------------------------------------
6. 在\`swiper-slide\`裡面放圖片
![圖片](./images/Swiper輪播效果/Swiper輪播效果-6.png)

-----------------------------------------------
## 輪播容器
\`\`\`html
<div class="swiper"><!--主容器-->  
  <div class="swiper-wrapper">
    <div class="swiper-slide"></div><!--輪播圖1-->
    <div class="swiper-slide"></div><!--輪播圖2-->
    <div class="swiper-slide"></div><!--輪播圖3-->
  </div>
  <div class="swiper-pagination"></div><!--分頁-->
  <div class="swiper-button-prev"></div><!--左箭頭-->
  <div class="swiper-button-next"></div><!--右箭頭-->
  <div class="swiper-scrollbar"></div><!--滾動條-->
</div>
\`\`\`

-----------------------------------------------
## 輪播容器樣式
\`\`\`css
.swiper {
  width: 600px; 
  height: 300px;
}
\`\`\`

-----------------------------------------------
## 輪播方式設定
\`\`\`js
const swiper = new Swiper('.swiper', {
  direction: 'vertical',//垂直方向播放
  direction: 'horizontal',//水平方向播放
  loop: true,//循環播放
  loop: false,//不循環播放
  autoplay: {//自動輪播
    delay: 3000,//幻燈片停留時間(毫秒)
  },
  speed: "500",//幻燈片速度
  effect: "cards",//卡片式效果
  effect: "fade",//淡出效果
  effect: "coverflow",//幻燈片效果
  effect: "cube",//立體方塊效果
  effect: "coverflow",//立體相片效果
  effect: "flip",//翻轉效果

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
\`\`\``,__vite_glob_0_67=Object.freeze(Object.defineProperty({__proto__:null,default:Swiper____},Symbol.toStringTag,{value:"Module"})),UIUX____=`---
title: UIUX核心觀念
date: 2023-04-24
tags: ["Design"]
---
## 螢幕單位與解析度

### px(device pixel)
* 實際硬體像素
* 不同裝置大小不同

### ppi（Pixels Per Inch）
* 每英吋像素數
* ppi值越高=畫面的細節越豐富

### dpi
* 印刷用單位
* 常見150dpi、300dpi

-----------------------------------------------
## iOS 設計單位

### pt（point）
* 1x = 1pt = 1px
* 2x = 1pt = 2px
* 3x = 1pt = 3px

### 觸控標準
* 可觸控元件：44x44pt

### 字體
* 系統字體：SF Pro

-----------------------------------------------
## Android 設計單位

### dp
* 圖片、間距單位

### sp
* 字體單位

### 觸控標準
* 最小可點擊區域：48x48dp

### 字體
* 中文字體：Noto Sans（思源黑體）
* 英文字體：Roboto

-----------------------------------------------
## 什麼是 UI、UX？
* UX=User(使用者)+Experience(體驗)
  * 是使用體驗所有總和，包括 UI、情緒、認知、生理反應
  * 產品形象(設計師)
  * 問題回覆時間(客服人員)
  * 頁面讀取速度(工程師)
  * 產品經理(新功能規劃)
* UI=User(使用者)+Interface(介面)
  * UI 是和特定『使用者』互動，平面設計面向『大眾』
  * 透過視覺手段，讓使用者感受產品
  * 使用者-介面-產品
    * 螢幕觸控：手機、車機、平板
    * 語音系統：Google Home
    * 實體按鈕：遙控器、洗衣機、販賣機、電鍋

-----------------------------------------------
## UCD 設計思維流程
1. 了解使用情境
2. 定義使用者需求
3. 設計解決方案
4. 評估設計成果

-----------------------------------------------
## 判斷產品體驗的七大指標
1. 可用的(有幫助的)
2. 有用的(減少錯誤)
3. 令人嚮往的(配色、文案、視覺勾引力)
4. 易到達的(顧及到不同(弱勢)族群、使用更直覺)
5. 有信用的(安全感)
6. 可發現的
7. 有價值的(綜合以上 6 點)

-----------------------------------------------
## UX 需要具備的五大元素
1. 使用者需求與產品目標(了解用戶需求，提供什麼樣的服務)
2. 功能規格與需求定義(提供什麼功能、願景)
3. 資訊架構與互動設計(定義產品使用流程、架構)
4. UI 設計與內容設計(互動設計、資訊層級)
5. 視覺設計與美感(配色、視覺感受)

-----------------------------------------------
## 設計思考流程
1. 同理用戶(探索問題、找出使用者的痛點、做問卷訪談)
2. 定義問題(假設問題)
3. 發想創意(團隊討論、頭腦風暴、工作坊)
4. 製作原型(製作範本使用來得到反饋)
5. 測試(重新修改討問、解決問題)

-----------------------------------------------
## 通用設計原則
* 減少裝飾性元素、複雜度
* 資訊重點讓文案明確易懂
* 多留一點呼吸空間、留白拿捏
* 視覺一致性、使用有限的顏色和字型
* 遵循通用設計規範內容一致性、標準化
* 增加文字和背景按鈕顏色對比度
* 了解設計是給誰
* 注意手指觸控範圍、按鈕大小
* 簡化表單
* 使用熟悉佈局、介面，減少熟悉時間
* 按鈕要是可以點擊狀態
* 使用者控制權、操控自由度

-----------------------------------------------
## 前期設計工具
* 線框稿(wireframe)
  * 用最少的視覺元素呈現
  * 讓團隊了解排列位置、功能結構
  * 不必添加內容
* 介面流程圖(UI flow)
  * 文字任務流程或視覺頁面流程
  * 誰是使用者
  * 他們的目標是什麼
  * 怎樣到達目標
* 使用者旅程地圖`,__vite_glob_0_68=Object.freeze(Object.defineProperty({__proto__:null,default:UIUX____},Symbol.toStringTag,{value:"Module"})),VSCode_________=`---
title: VSCode技巧+實用套件
date: 2024-01-02
tags: ["CSS"]
---
## 快捷鍵用法

### 快速移動程式碼
* 在程式碼上按住\`option\`鍵＋上下鍵

### 快速跳躍字詞
* 按住\`option\`鍵＋左右鍵

### 快速選取整行程式碼
* 在該程式碼行按住\`command\` ＋ \`L\`

### 開啟設定
* command+“逗點”，若要進入\`setting.json\`檔點右上角 file 圖示

### 快速進入setting
* 在 JS 片段中使用 Emmet 輸入，進入\`setting.json\`加入以下程式碼:
\`\`\`json
{
   "emmet.includeLanguages": {
   "nunjucks": "html",
    "javascript": "javascriptreact",
    "vue-html": "html",
    "plaintext": "jade"
  },
  "emmet.triggerExpansionOnTab": true,
  "prettier.singleQuote": true,
  "editor.minimap.enabled": false
}
\`\`\`
### 複製程式碼
* 只要游標在程式碼尾端\`command\`＋\`C\`即可複製

### 設定縮排為“2 空格”，點擊 vscode 最底下的按鈕調整
1. 先將縮排轉換為定位點
2. 使用空格進行縮排，調整為 2

### 快速選取程式碼
1. 進入設定搜尋"展開選取項目"
2. 設定快捷鍵\`control\`＋\`shift\`＋\`→\`

### 快速重新命名標籤頭尾名
1. 進入設定搜尋"重新命名符號"
2. 第二步：設定快捷鍵\`control\`＋\`F\`

### 資料夾路徑重疊修改
1. 進入“設定”
2. 搜尋“Compact Folders”，取消勾選

-----------------------------------------------
## 實用的套件

### Chinese Language Pack for Visua
* 說明：讓 vscode 介面變成繁體中文

### Live Server
* 說明：能建立伺服器，在瀏覽器查看網頁
* 用法：
   1. 對 html 檔右鍵“Open with Live Server”
   2. 點擊 vscode 最下方"Go Live"就可以每次編輯後存檔並自動刷新頁面

### Atom Keymap
* 說明：可快速編寫 JS、切換視窗
* 用法：
   1. command ＋ 1,2,3 可快速切換視窗
   2. 在編寫 JS 片段時，輸入“log”＋\`tab\`鍵，可快速展開成"console.log"

### Prettier - Code formatter
* 說明：快速整理程式碼
* 用法：
   1. \`option\`＋\`shift\`＋\`F\`可快速整理程式碼
   2. 若要將雙引號改為單引號，進入 setting.json 輸入：
\`\`\`json
"prettier.singleQuote": true,
\`\`\`

### Code Spell Checker
* 說明：自動檢查英文拼字有無錯誤
* 用法：安裝後，在編寫錯誤的英文單字底下，會自動顯示藍色波浪

### indent-rainbow
* 說明：讓code縮排呈現彩虹`,__vite_glob_0_69=Object.freeze(Object.defineProperty({__proto__:null,default:VSCode_________},Symbol.toStringTag,{value:"Module"})),Vite___Vue3___Tailwind4_1__=`---
title: Vite + Vue3 + Tailwind4.1環境
date: 2026-03-25
tags: ["Vue3"]
---
## 建立vite專案
1. 建立專案資料夾
### (補充步驟)確認npm版本：
\`\`\`bash
$ npm -v
\`\`\`
\`查看npm目前使用版本\`
\`\`\`bash
$ nvm ls
\`\`\`
\`查看已安裝的npm版本清單\`
\`\`\`bash
$ nvm use 22
\`\`\`
\`使用npm版本22\`
\`\`\`bash
$ nvm alias default 22
\`\`\`
\`將npm版本22作為預設\`

3. 安裝vite專案(最新版)
\`\`\`bash
$ npm create vite@latest
\`\`\`
4. 安裝node_modules
\`\`\`bash
$ npm i
\`\`\`
-----------------------------------------------
## 安裝tailwindcss
1. 在vite安裝\`tailwindcss\`
\`\`\`bash
$ npm i tailwindcss @tailwindcss/vite
\`\`\`
2. 引入tailwindcss到vite，在專案根目錄建立\`vite.config.js\`
\`\`\`js
//vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
})
\`\`\`
3. 在\`style.css\`寫上tailwindcss語法
\`\`\`css
/* style.css */

@import "tailwindcss";
\`\`\`
4. 在\`main.js\`進入點引入css檔
\`\`\`js
// main.js

import './style.css'

import App from './App.vue'
const app = createApp(App)
app.mount('#app')
\`\`\`
-----------------------------------------------
## 執行專案
要運行專案的指令，存放在\`package.json\`
\`\`\`json
// package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
\`\`\`
### 執行專案：
\`\`\`bash
$ npm run dev
\`\`\`
### 建立編譯檔：
\`\`\`bash
$ npm run build
\`\`\`
### 觀看專案：
\`\`\`bash
$ npm run preview
\`\`\``,__vite_glob_0_70=Object.freeze(Object.defineProperty({__proto__:null,default:Vite___Vue3___Tailwind4_1__},Symbol.toStringTag,{value:"Module"})),Vue2___1____Vue=`---
title: Vue2課程(1)：認識Vue
date: 2021-06-01
tags: ["Vue2"]
---
## 認識Vue
* Vue.js是以資料狀態操作畫面，偏向MVVM軟體設計模式。

-----------------------------------------------
* MVVM(Model View ViewModel)
* [視圖]→發送請求→[控制器]→[模型]→[資料庫]→回傳資料→[模型]→[控制器]→渲染→[視圖]

|英文|Model|View|Controller|Database|
|---|---|---|---|---|
|中文|模型|視圖|控制器|資料庫|

-----------------------------------------------
* MVC(Model View Controller)
* [視圖]←綁定→[資料聯繫器]→←[模型]

|英文|Model|View|ViewModel|
|---|---|---|---|
|中文|模型|視圖|資料聯繫器|

-----------------------------------------------
## 生命週期
|英文|中文|說明|
|---|---|---|
||開始創建|
|beforeCreate|準備載入資料|
||數據觀測建立|
|created|載入資料|要載入AJAX要在這階段之後|
||編譯模板|
|beforeMount|準備繪製元件|
||模板建立完成|
|mounted|繪製元件|要操作DOM元素要在這階段之後|
||資料變動|
|updated|更新資料時觸發|
|activated||有\\<keep-alive>時才會觸發|
|deactivated||有\\<keep-alive>時才會觸發|
|beforeDestroy|準備移除資料|
||移除觀測、子元件、監聽事件|
|destroyed|移除資料|`,__vite_glob_0_71=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___1____Vue},Symbol.toStringTag,{value:"Module"})),Vue2___10_____=`---
title: Vue2課程(10)：元件化
date: 2021-06-10
tags: ["Vue2"]
---
## 元件(Component)
* 元件資料是獨立運作，也可以重複使用。
* 元件裡面可以再包元件。
* 建立元件有兩種方式:
    * 全域註冊 : 使用Vue.component()建立，其他app也可以使用。
    * 局部註冊 : 在app裡使用components建立，只有app自己可以使用。
-----------------------------------------------
1. 定義模板
\`\`\`js
<script type="text/x-template" id="fruits-template">
  <tr>
    <td>{{ fruitData.name }}</td>
    <td>{{ fruitData.price }}</td>
  </tr>
<\/script>
\`\`\`
2. 註冊元件
\`\`\`js
//子元件
Vue.component('fruits-component', {
  //也可以直接寫樣板字面值
  template: "#fruits-template"
});
\`\`\`
3. 使用元件
\`\`\`html
<div id="app">
  <table border>
    <thead>
      <tr>
        <th>品項</th>
        <th>價錢</th>
      </tr>
    </thead>
    <tbody>
      <fruits-component></fruits-component>
    </tbody>
  </table>
</div>
\`\`\`
4. 將父層的資料用props傳入給子元件使用:子層宣告props→父層資料被v-for拆成item→以fruits-data名稱傳入(item)→子層用(fruits-data)名稱取用
\`\`\`html
<div id="app">
  <table border>
    <thead>
      <tr>
        <th>品項</th>
        <th>價錢</th>
      </tr>
    </thead>
    <tbody>
      <tr is="fruits-component" v-for="item in fruits" :key="item.name" :fruits-data="item"></tr>
    </tbody>
  </table>
</div>
\`\`\`
\`\`\`js
//全域註冊元件
Vue.component('fruits-component', {
  props: ['fruitsData'],
  template: "#fruits-template"
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    //父層資料
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  },
  //局部註冊元件
  // components:{

  // }
});
\`\`\`
5. 最後因為table的thead裡一定只能放tr標籤，所以可以用is屬性來改變
\`\`\`html
<div id="app">
  <table border>
    <thead>
      <tr>
        <th>品項</th>
        <th>價錢</th>
      </tr>
    </thead>
    <tbody>
      <tr is="fruits-component" v-for="item in fruits" :key="item.name" :fruits-data="item"></tr>
    </tbody>
  </table>
</div>
\`\`\`




-----------------------------------------------
## 局部註冊元件
1. 在app裡使用[components]建立元件。
2. 先自訂[標籤名稱]。
3. 使用物件方式，帶入[template]，並建立元件結構。
4. 在HTML上使用自訂[標籤名稱]。
\`\`\`js
// <-----html----->
#app
  list-com

// <-----js----->
let app = new Vue({
  el: "#app",
  components:{
    "list-com":{
      template:
      \`
      <ul>
        <li>蘋果</li>
        <li>香蕉</li>
        <li>鳳梨</li>
      </ul>
      \`
    }
  }
});
\`\`\`

-----------------------------------------------
## 元件的data資料
\`元件的data需使用function(){return{...}}\`
\`\`\`js
// <-----html----->
#app
  num-btn

script(type="text/x-template" id="num-btn") 
  button(@click="num += 1") {{num}} 

// <-----js----->
Vue.component("num-btn",{  
  template: "#num-btn",
  data: function(){
    return {
      num: 50
    }
  }
});

let app = new Vue({
  el: "#app"
});
\`\`\`
### 元件的陣列資料
\`\`\`js
// <-----html----->
#app
  fruit-list

script(type="text/x-template" id="fruit-list")
  ul
    li(v-for="fruit in fruits") {{fruit.name}}

// <-----js----->
Vue.component("fruit-list",{  
  template: "#fruit-list",
  data: function(){
    return{
      fruits:[
        {name:"蘋果",amount:100},
        {name:"香蕉",amount:300},
        {name:"鳳梨",amount:500}
      ]
    }
  }
});

let app = new Vue({
  el: "#app"
});
\`\`\`
### 元件的ajax資料
\`因ajax載入與顯示有時間差，要在該元件上使用v-if來確保資料載入\`
\`\`\`js
// <-----html----->
#app
  .row
    .col-4
      user-card
  
script(type="text/x-template" id="user-card")
  .card(v-if="user.cell")
    img.card-img-top(:src="user.picture.large")
    .card-body
      .card-title {{user.name.title}}{{user.name.first}}{{user.name.last}}
      .card-text {{user.email}}

// <-----js----->
Vue.component("user-card",{
  template: "#user-card",
  data: function(){
    return {
      user: {}
    }
  },
  created: function(){
    let vm = this;
    $.ajax({
      url: "https://randomuser.me/api/"
    }).done(function(data){
      vm.user = data.results[0];
    });
  }
})

let app = new Vue({
  el: "#app"
});
\`\`\`
\`使用keep-alive 標籤可以讓元件被消失後再顯示時，不重新載入ajax\`

-----------------------------------------------
## 使用props將資料傳入元件
1. 使用props以陣列方式傳入屬性名稱。
2. 在標籤上動態綁定屬性，並賦予值。\`此時更動傳入的屬性會出現單向數據流的錯誤\`
3. 使用一個新的data來接收props傳入的資料。
4. 在元件建構上套用新的data資料。
\`\`\`js
// <-----html----->
#app
  num-btn(:num="num")  //2.

script(type="text/x-template" id="num-btn") 
  button(@click="newnum += 1") {{newnum}}  //4.

// <-----js----->
Vue.component("num-btn",{  
  template: "#num-btn",
  props: ["num"],  //1.
  data: function(){
    return{
      newnum: this.num  //3.
    }
  }
});

let app = new Vue({
  el: "#app",
  data:{
    num: 50
  }
});
\`\`\`
### 使用props將陣列傳入元件
\`\`\`js
// <-----html----->
#app
  fruit-list(:fruits="fruits")

script(type="text/x-template" id="fruit-list")
  ul
    li(v-for="fruit in newfruits") {{fruit.name}}

// <-----js----->
Vue.component("fruit-list",{  
  template: "#fruit-list",
  props: ["fruits"],
  data: function(){
    return{
      newfruits: this.fruits
    }
  }
});

let app = new Vue({
  el: "#app",
  data:{
    fruits:[
      {name:"蘋果",amount:100},
      {name:"香蕉",amount:300},
      {name:"鳳梨",amount:500}
    ]
  }
});
\`\`\`
### 使用props將ajax傳入元件
\`因ajax載入與顯示有時間差，要在該標籤上使用v-if來確保資料載入\`
\`\`\`js
// <-----html----->
#app
  .row
    .col-4
      user-card(:user="user" v-if="user.cell")
  
script(type="text/x-template" id="user-card")
  .card
    img.card-img-top(:src="newuser.picture.large")
    .card-body
      .card-title {{newuser.name.title}}{{newuser.name.first}}{{newuser.name.last}}
      .card-text {{newuser.email}}

// <-----js----->
Vue.component("user-card",{
  props:["user"],
  template: "#user-card",
  data: function(){
    return {
      newuser: this.user
    }
  }
})

let app = new Vue({
  el: "#app",
  data:{
    user: {},
  },
  created: function(){
    $.ajax({
      url: "https://randomuser.me/api/"
    }).done(function(data){
      app.user = data.results[0];
    });
  }
});
\`\`\`

-----------------------------------------------
## props傳入的型別和預設值
\`\`\`js
// <-----html----->
#app
  num-input(:num="num")  //50
  num-input  //300

script(type="text/x-template" id="num-input")
  div
    input(type="text" v-model="newnum")
    p {{newnum}}

// <-----js----->
Vue.component("num-input",{
  template: "#num-input",
  props:{
    num:{
      type: Number,
      default: 300
    }
  },
  data: function(){
    return {
      newnum: this.num
    }
  }
});

let app = new Vue({
  el: "#app",
  data:{
    num: 50
  }
});
\`\`\`

-----------------------------------------------
## 使用$emit()讓元件方法影響到外層data
1. 先建立好元件的template。
2. 在元件的methods上新增[addCash1]方法，並將使用$emit()，傳出一個[item]。
3. 在HTML上使用自訂標籤，並在該標籤上使用v-on:[item]，然後呼叫[addCash2]方法。
4. 在methods方法中新增[addCash2]方法。
\`\`\`js
// <-----html----->
#app
  p {{num}}
  button(@click="num += 1") 按鈕B
  num-btn(v-on:event="addNum2")
  
script(type="text/x-template" id="num-btn")
  button(@click="addNum1") 按鈕A

// <-----js----->
Vue.component("num-btn",{
  template: "#num-btn",
  methods:{
    addNum1: function(){
      this.$emit("event")
    }
  }
});

let app =new Vue({
  el: "#app",
  data:{
    num: 50
  },
  methods:{
    addNum2: function(){
      this.num += 1;
    }
  }
});
\`\`\`


## 元件化
* 若沒有元件化時，點擊按鈕改變同一個資料。
\`\`\`html
<div id="app">
  <button type="button" @click="counter++">{{ counter }}按鈕</button>
  <button type="button" @click="counter++">{{ counter }}按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    counter: 0
  }
});
\`\`\`

-----------------------------------------------
* 元件化可以讓資料都個別獨立。
\`\`\`html
<div id="app">
  <counter-button></counter-button>
  <counter-button></counter-button>
</div>
\`\`\`
\`\`\`js
Vue.component('counterButton',{
  data: function(){
    return{
      counter: 0
    }
  },
  template:\`<button type="button" @click="counter++">{{ counter }}按鈕</button>\`
})

const app = new Vue({
  el: '#app'
});
\`\`\`










-----------------------------------------------
## vue + ajax 載入api資料(一串純文字)
\`\`\`html
<div id="app">
  <p>{{text}}</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    text: "這是預載入之前的文字"
  },
  ready: function(){
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=notifydata",
      success: function(item){
        app.text = item;
      }
    })
  }
});
\`\`\`
### 輸出結果：
\`\`\`html
<div id="app">
  <p>哈囉!! 這邊是你用AJAX載入的純文字公告!!</p>
</div>
\`\`\`

-----------------------------------------------
## vue + ajax 載入api資料(JSON)
\`\`\`html
<div id="app">
  <h5 v-if="items.length==0">資料載入中...</h5>
  <ul>
    <li v-for="item in items">{{item.name}}\${{item.price}}</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    items: []
  },
  ready: function(){
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata",
      success: function(item){
        app.items = JSON.parse(item);
      }
    })
  }
});
\`\`\`
\`JSON.parse()是將JSON格式的字串解析為JavaScript物件或陣列\`

-----------------------------------------------
## vue + ajax + new Date()日期格式計算
* 若要計算出「倒數剩餘天數」，利用開始時間-結束時間
\`\`\`html
<div id="app">
  <div v-for="item in classDate">
    <div>剩{{ remainingDays }}天</div>
  </div>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
    el: '#app',
    data:{
        classDate: [],
    },
    ready: function(){
        $.ajax({
            url: "https://awiclass.monoame.com/api/command.php?type=get&name=hahowdata",
            success: function(item){
                app.classDate = JSON.parse(item);
            }
        })
    },
    computed: {
        remainingDays: function(){
            for (let i=0;i<this.classDate.length;i++){
                return parseInt((new Date(this.classDate[i].proposalDueTime) - new Date(this.classDate[i].incubateTime)) / (1000 * 60 * 60 * 24));
            }
        }
    }
});
\`\`\`
\`將物件的日期格式使用new Date()即可相減做計算，將得到的值/毫秒(1000)/分鐘(60)/小時(60)/天(24)，最後再用parseInt()取得正整數\``,__vite_glob_0_72=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___10_____},Symbol.toStringTag,{value:"Module"})),Vue2___11__props_____=`---
title: Vue2課程(11)：props資料外傳內
date: 2021-06-11
tags: ["Vue2"]
---
## 資料外傳內(純顯示)
* 若資料純顯示，可直接使用傳入的變數。
* v-bind屬性名稱遇到大寫時要轉成「-小寫」。
\`\`\`html
<div id="app">
  <alert-component :item="message"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
  props: ['item'],
  template:
  \`
  <div class="alert alert-info" role="alert">{{ item }}</div>
  \`
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    message: '這是一個訊息'
  }
});
\`\`\`

-----------------------------------------------
## 定義props傳入的型別與預設值
* props的型別只能檢查「第一層」，無法檢查物件內的屬性值。
* 預設值只有在「prop沒傳入」時才會生效。
\`\`\`html
<div id="app">
  <alert-component :item="price"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
  props: {
    item:{
      type: Number, //定義型別
      default: 100 //給預設值
    }
  },
  template:
  \`
  <div class="alert alert-info" role="alert">{{ item }}元</div>
  \`
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    apple:{
      name: '蘋果',
      price: 20
    }
  }
});
\`\`\`

-----------------------------------------------
## 單向數據流
* 若子元件需要修改props傳來的資料，就必須宣告變數來接。
* 子元件的data必須使用function return。
\`\`\`html
<div id="app">
  <alert-component :item="message"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
  props: ['item'],
  template:
  \`
  <input type="text" v-model="item" class="form-control"/>
  \`
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    message: '這是一個訊息'
  }
});
\`\`\`
調整過後：
\`\`\`html
<div id="app">
  <alert-component :item="message"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
  props: ['item'],
  template:
  \`
  <input type="text" v-model="newItem" class="form-control"/>
  \`,
  data: function(){
    return{
      newItem: this.item
    }
  }
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    message: '這是一個訊息'
  }
});
\`\`\`

-----------------------------------------------
## 元件的資料尚未取得
* 當父層ajax得資料傳給子元件時，會有時間差，在元件標籤需要使用v-if來確保已有該資料。
\`\`\`html
<div id="app">
  <alert-component :item="userData"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
  props: ['item'],
  template:
  \`
  <p>{{ item.phone }}</p>
  \`,
  data: function(){
    return{
      newItem: this.item
    }
  }
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    userData: null
  },
  created: async function (){
    try{
      const res = await axios.get('https://randomuser.me/api/');
      this.userData = res.data.results[0]; //電話號碼
    }catch(error){
      console.error(error);
    }
  }
});
\`\`\`
調整過後：
\`\`\`html
<div id="app">
  <alert-component v-if="userData" :item="userData"></alert-component>
</div>
\`\`\`


-----------------------------------------------
## 讓元件不重複ajax
* 子元件每一次重新生成都會重跑一次ajax，若要避免該情況可使用keep-alive標籤包裹。
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="showAlert">
  <alert-component v-if="showAlert"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
  template:
  \`
    <p>{{ userData.phone }}</p>
  \`,
  data: function(){
    return{
      userData: '',
    }
  },
  created: async function (){
    try{
      const res = await axios.get('https://randomuser.me/api/');
      this.userData = res.data.results[0];
    }catch(error){
      console.error(error);
    }
  }
});

//父層
const app = new Vue({
  el:'#app',
  data:{
    showAlert: true
  },
});
\`\`\`
調整過後：
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="showAlert">
  <keep-alive>
    <alert-component v-if="showAlert"></alert-component>
  </keep-alive>
</div>
\`\`\``,__vite_glob_0_73=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___11__props_____},Symbol.toStringTag,{value:"Module"})),Vue2___12__emit_____=`---
title: Vue2課程(12)：emit資料內傳外
date: 2021-06-12
tags: ["Vue2"]
---
## 點擊子元件，改變父層資料
* add對應子元件的$emit(可帶參數)。
* addCount對應父層的methods。
\`\`\`html
<div id="app">
  <add-btn @add="addCount"></add-btn>
  {{ count }}
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('addBtn', {
  methods:{
    handleClick(){
      this.$emit('add',10)     
    }
  },
  template:
  \`<button type="button" @click="handleClick">增加</button>\`
});

//父層
const app = new Vue({
  el: '#app',
  data:{
    count: 0
  },
  methods:{
    addCount(num){
      this.count = this.count + num;
    }
  }
})
\`\`\`

-----------------------------------------------
## 點擊子元件的關閉
\`\`\`html
<div id="app">
  <button type="button" @click="showAlert = true">顯示跳窗</button>
  <alert-component v-if="showAlert" @close="showAlert = false"></alert-component>
</div>
\`\`\`
\`\`\`js
//子元件
Vue.component('alert-component', {
    methods:{
      close(){
        this.$emit('close');
      }
    },
  template:
  \`
  <div class="alert alert-primary">這是子元件的跳窗
    <button type="button" class="close" @click="close">&times;</button>
  </div>
  \`
});

//父層
const app = new Vue({
  el: '#app',
  data:{
    showAlert: false
  }
})
\`\`\``,__vite_glob_0_74=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___12__emit_____},Symbol.toStringTag,{value:"Module"})),Vue2___13__slot____=`---
title: Vue2課程(13)：slot元件插槽
date: 2021-06-13
tags: ["Vue2"]
---
## 卡片元件＋不具名slot
* 若外層有template想直接傳給子元件，就可以把template直接寫在元件內，子元件使用slot標籤接收。
* 若slot標籤內已有內容，則是預設內容。
\`\`\`html
<div id="app">
  <card-component>
    <p>這是父層傳給子元件的卡片內容</p>
  </card-component>
</div>
\`\`\`
\`\`\`js
Vue.component('card-component', {
  template:\`
  <div class="card">
    <div class="card-header">卡片標題</div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer text-muted">卡片底部</div>
  </div>
  \`
});

const app = new Vue({
  el: '#app',
})
\`\`\`

-----------------------------------------------
## 卡片元件＋具名slot
* 在slot增加name屬性，傳入的template用slot屬性取對應。
\`\`\`html
<div id="app">
  <card-component>
    <template slot="card-header">這是父層傳給子元件的卡片標題</template>
    <p>這是父層傳給子元件的卡片內容</p>
    <template slot="card-footer">這是父層傳給子元件的卡片底部</template>
  </card-component>
</div>
\`\`\`
\`\`\`js
Vue.component('card-component', {
  template:\`
  <div class="card">
    <div class="card-header">
      <slot name="card-header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer text-muted">
      <slot name="card-footer"></slot>
    </div>
  </div>
  \`
});

const app = new Vue({
  el: '#app',
})
\`\`\``,__vite_glob_0_75=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___13__slot____},Symbol.toStringTag,{value:"Module"})),Vue2___14___is______=`---
title: Vue2課程(14)：用is動態切換元件
date: 2021-06-14
tags: ["Vue2"]
---
## 點擊按鈕切換元件，並且可關閉
* 用:is動態屬性去綁定元件名稱。
* 使用component標籤可不被輸出。
* 子元件關閉可利用:is回傳null讓元件名稱消失。
\`\`\`html
<div id="app">
  <button type="button" @click="currentComponent = 'alert-success'">成功彈窗</button>
  <button type="button" @click="currentComponent = 'alert-danger'">失敗彈窗</button>
  <component :is="currentComponent" @close="currentComponent = null"></component>
</div>
\`\`\`
\`\`\`js
//成功彈窗
Vue.component('alert-success', {
  methods:{
    close(){
      this.$emit('close');
    }
  },
  template:
  \`
  <div class="alert alert-success">這是成功彈窗
    <button type="button" class="close" @click="close">&times;</button>
  </div>
  \`
});

//失敗彈窗
Vue.component('alert-danger', {
  methods:{
    close(){
      this.$emit('close');
    }
  },
  template:
  \`
  <div class="alert alert-danger">這是錯誤彈窗
    <button type="button" class="close" @click="close">&times;</button>
  </div>
  \`
});

//父層
const app = new Vue({
  el: '#app',
  data:{
    currentComponent: 'alert-success',
  }
})
\`\`\``,__vite_glob_0_76=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___14___is______},Symbol.toStringTag,{value:"Module"})),Vue2___15_________=`---
title: Vue2課程(15)：展開與其餘參數
date: 2021-06-15
tags: ["Vue2"]
---
## 陣列淺層複製
* 利用...可以複製陣列，改變原本物件傳參考特性。
\`\`\`js
const fruits1 = ["蘋果", "香蕉", "鳳梨"];
const fruits2 = [...fruits1]

console.log(fruits2); //['蘋果', '香蕉', '鳳梨']
console.log(fruits2 == fruits1); //false
\`\`\`

-----------------------------------------------
## 物件淺層複製
* 利用...可以淺層複製物件第一層，但是如果修改第二層還是會同步。
\`\`\`js
const apple = {
  name: '蘋果',
  price: 20
}

const newApple = {
  ...apple
}

console.log(newApple); //{name: '蘋果', price: 20}
console.log(apple == newApple); //false
\`\`\`

-----------------------------------------------
## 將類陣列轉為真正陣列
* querySelectorAll回傳的是NodeList(類陣列)，用...可以轉換成真正的陣列。
\`\`\`html
<div id="app">
  <ul>
    <li>蘋果</li>
    <li>香蕉</li>
    <li>鳳梨</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const doms = document.querySelectorAll("li");
const newDoms = [...doms];
\`\`\`

-----------------------------------------------
## 其餘參數
* 如果傳入的參數數量不一定，就可以用...全部接收成類陣列
\`\`\`js
function sayApple(...arg) {
    console.log(arg);
}
sayApple("蘋果", "香蕉", "鳳梨");
\`\`\``,__vite_glob_0_77=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___15_________},Symbol.toStringTag,{value:"Module"})),Vue2___16_______=`---
title: Vue2課程(16)：解構與賦值
date: 2021-06-16
tags: ["Vue2"]
---
## 陣列物件解構賦值
* 正常情況。
\`\`\`js
const fruits = ["蘋果", "香蕉", "鳳梨"];
const [ apple, banana, pineapple ] = fruits;
console.log(apple, banana, pineapple); //蘋果,香蕉,鳳梨
\`\`\`

-----------------------------------------------
* 數量不一致時。
\`\`\`js
const fruits = ["蘋果", "香蕉", "鳳梨"];
const [ apple, banana ] = fruits;
console.log(apple, banana); //蘋果,香蕉
\`\`\`

-----------------------------------------------
* 跳過賦值。
\`\`\`js
const fruits = ["蘋果", "香蕉", "鳳梨"];
const [ apple, , pineapple ] = fruits;
console.log(apple, pineapple); //蘋果,鳳梨
\`\`\`

-----------------------------------------------
* 將值互換。
\`\`\`js
let apple = '蘋果';
let banana = '香蕉';
[apple,banana] = [banana,apple];

console.log(apple,banana); //香蕉,蘋果
\`\`\`

-----------------------------------------------
* 解構字串。
\`\`\`js
const apple = '青森蘋果';
const [a,b,c,d] = apple;

console.log(a,b,c,d); //青,森,蘋,果
\`\`\`

-----------------------------------------------
* 預設值。
\`\`\`js
const [apple = '蘋果',banana = '香蕉'] = ['鳳梨']
console.log(apple, banana); //鳳梨,香蕉
\`\`\`

-----------------------------------------------
## 物件解構賦值
\`\`\`js
const apple = {
  name: '蘋果',
  price: 20
}

const { name } = apple;
console.log(name); //蘋果
\`\`\`

-----------------------------------------------
* 改變變數名稱。
\`\`\`js
const apple = {
  name: '蘋果',
  price: 20
}

const { name: newApple } = apple;
console.log(newApple); //蘋果
\`\`\`

-----------------------------------------------
* 取代。
\`\`\`js
const { apple: name = '蘋果' } = { apple: '香蕉'};
console.log(name); //香蕉
\`\`\`

-----------------------------------------------
* 預設值。
\`\`\`js
const { apple: name = '蘋果' } = {};
console.log(name); //蘋果
\`\`\``,__vite_glob_0_78=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___16_______},Symbol.toStringTag,{value:"Module"})),Vue2___17________=`---
title: Vue2課程(17)：常用陣列方法
date: 2021-06-17
tags: ["Vue2"]
---
## forEach單純只跑迴圈
* 對每一筆資料都增加size屬性。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

fruits.forEach((item)=>{
  item.size = '小'
})

console.log(fruits); 
// const fruits = [
//   {
//     name: '蘋果',
//     price: 20,
//     size: '小'
//   },
//   {
//     name: '香蕉',
//     price: 15,
//     size: '小'
//   },
//   {
//     name: '鳳梨',
//     price: 25,
//     size: '小'
//   },
// ]
\`\`\`

-----------------------------------------------
## map取得新陣列
* 將資料中的名稱回傳成一個陣列。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

const fruitsName = fruits.map((item)=>{
  return item.name
})

console.log(fruitsName); //['蘋果', '香蕉', '鳳梨']
\`\`\`

-----------------------------------------------
## filter過濾資料
* 只回傳價錢大於20的資料。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

const filterFruits = fruits.filter((item)=>{
  return item.price >= 20
})

console.log(filterFruits);
// [
//   {
//     name: '蘋果',
//     price: 20
//   },
//   {
//     name: '鳳梨',
//     price: 25
//   },
// ]
\`\`\`

-----------------------------------------------
## find回傳第一個符合的值
* 找出第一個價錢大於20的資料。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

const findFruits = fruits.find((item)=>{
  return item.price >= 20
})
console.log(findFruits);
// [
//   {
//     name: '蘋果',
//     price: 20
//   }
// ]
\`\`\`

-----------------------------------------------
## every查看每一個值
* 查看陣列每一個價錢是否都大於10，回傳true或false。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

const ans = fruits.every((item)=>{
  return item.price > 10
})
console.log(ans); //true
\`\`\`

-----------------------------------------------
## some查看是否有符合的值
* 查看陣列中是否有價錢大於或等於25的，回傳true或false。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

const ans = fruits.some((item)=>{
  return item.price >= 25
})
console.log(ans); //true
\`\`\`

-----------------------------------------------
## reduce進行加總
* 將資料中的價錢進行加總。
\`\`\`js
const fruits = [
  {
    name: '蘋果',
    price: 20
  },
  {
    name: '香蕉',
    price: 15
  },
  {
    name: '鳳梨',
    price: 25
  },
]

const totalPrice = fruits.reduce((acc,val)=>{
  return acc + val.price
},0)
console.log(totalPrice); //60
\`\`\``,__vite_glob_0_79=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___17________},Symbol.toStringTag,{value:"Module"})),Vue2___18__Extend_____=`---
title: Vue2課程(18)：Extend元件建構器
date: 2021-06-18
tags: ["Vue2"]
---
## 將相似的元件建立共用
1. 若建立元件時，發現兩個彈跳視窗都長得非常相似。
\`\`\`html
<div id="app">
  <alert-success></alert-success>
  <alert-danger></alert-danger>
</div>
\`\`\`
\`\`\`js
//元件1
Vue.component('alert-success',{
  data: function(){
    return{
      message: '彈跳訊息'
    }
  },
  template:\`
    <div class="alert alert-success">成功{{ message }}</div>            
  \`
})

//元件2
Vue.component('alert-danger',{
  data: function(){
    return{
      message: '彈跳訊息'
    }
  },
  template: \`
    <div class="alert alert-danger">失敗{{ message }}</div>      
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
2. 利用extend將元件的資料合併。
\`\`\`html
<div id="app">
  <alert-success></alert-success>
  <alert-danger></alert-danger>
</div>
\`\`\`
\`\`\`js
//元件建構
const baseAlert = Vue.extend({
  data: function(){
    return{
      message: '彈跳訊息'
    }
  },
})

Vue.component('alert-success',{
  //繼承元件
  extends: baseAlert,
  template:\`
    <div class="alert alert-success">成功{{ message }}</div>            
  \`
})

Vue.component('alert-danger',{
  //繼承元件
  extends: baseAlert,
  template: \`
    <div class="alert alert-danger">失敗{{ message }}</div>      
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
3. 若元件本身另有其他data或方法，也不會取代。
\`\`\`html
<div id="app">
  <alert-success></alert-success>
  <alert-danger></alert-danger>
</div>
\`\`\`
\`\`\`js
const baseAlert = Vue.extend({
  data: function(){
    return{
      message: '彈跳訊息'
    }
  },
})

Vue.component('alert-success',{
  extends: baseAlert,
  template:\`
    <div class="alert alert-success">成功{{ message }}</div>            
  \`
})

Vue.component('alert-danger',{
  extends: baseAlert,
  //元件自身的data
  data: function(){
    return{
      seconds: 3
    }
  },
  template: \`
    <div class="alert alert-danger">失敗{{ message }}，{{ seconds }}後轉跳頁面</div>      
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\``,__vite_glob_0_80=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___18__Extend_____},Symbol.toStringTag,{value:"Module"})),Vue2___19__Filter___=`---
title: Vue2課程(19)：Filters過濾器
date: 2021-06-19
tags: ["Vue2"]
---
## 相似的元件
1. 表格中有時資料需要進行格式化處理再顯示出來，例如：數字加上千分位，數字開頭使用$字號。
\`\`\`html
<div id="app">
  <table-component></table-component>
</div>
\`\`\`
\`\`\`js
Vue.component('table-component',{
data: function(){
  return{
    applePrice: 2000
  }
},

template:\`
  <table>
    <thead>
      <tr>
        <th>名稱</th>
        <th>價錢</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>蘋果</td>
        <td>{{ applePrice }}</td>
      </tr>
    </tbody>
  </table>
\`
})

const app = new Vue({
el: '#app'
})
\`\`\`

-----------------------------------------------
2. 讓數字自動加上千分位逗點。
\`\`\`html
<div id="app">
  <table-component></table-component>
</div>
\`\`\`
\`\`\`js
Vue.component('table-component',{
data: function(){
  return{
    applePrice: 2000
  }
},
filters:{
  //price可以得到前項回傳的結果：2000
  formatNumber: function(price){
    return price.toFixed().replace(/./g,function(c, i ,a ){
      return i && c !== "." && ((a.length - i) % 3 === 0)? ',' + c : c;
    })
  }
},

template:\`
  <table>
    <thead>
      <tr>
        <th>名稱</th>
        <th>價錢</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>蘋果</td>
        <td>{{ applePrice | formatNumber }}</td>
      </tr>
    </tbody>
  </table>
\`
})

const app = new Vue({
el: '#app'
})
\`\`\`

-----------------------------------------------
3. 讓數字自動加上$字符號。
\`\`\`html
<div id="app">
  <table-component></table-component>
</div>
\`\`\`
\`\`\`js
Vue.component('table-component',{
  data: function(){
    return{
      applePrice: 2000
    }
  },
  filters:{
    formatNumber: function(price){
      return price.toFixed().replace(/./g,function(c, i ,a ){
        return i && c !== "." && ((a.length - i) % 3 === 0)? ',' + c : c;
      })
    },
    moneySign: function(price){
      return \`$ \${price}\`
    }
  },
  
  template:\`
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>價錢</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>蘋果</td>
          <td>{{ applePrice | formatNumber | moneySign}}</td>
        </tr>
      </tbody>
    </table>
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
4. 讓filter方法註冊在全域。
\`\`\`html
<div id="app">
  <table-component></table-component>
</div>
\`\`\`
\`\`\`js
Vue.filter('formatNumber',
  function(price){
    return price.toFixed().replace(/./g,function(c, i ,a ){
      return i && c !== "." && ((a.length - i) % 3 === 0)? ',' + c : c;
    })
  },
)
Vue.filter('moneySign',
  function(price){
    return \`$ \${price}\`
  }
)

Vue.component('table-component',{
  data: function(){
    return{
      applePrice: 2000
    }
  },
  template:\`
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>價錢</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>蘋果</td>
          <td>{{ applePrice | formatNumber | moneySign}}</td>
        </tr>
      </tbody>
    </table>
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\``,__vite_glob_0_81=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___19__Filter___},Symbol.toStringTag,{value:"Module"})),Vue2___2__Vue____=`---
title: Vue2課程(2)：vue模板語法
date: 2021-06-02
tags: ["Vue2"]
---
## v-text
* 使用\`v-text\`可將資料裡的"文字"帶入<標籤>，簡化寫法 **{{}}**。
\`\`\`html
<div id="app">
  <p v-text="apple"></p>
  <p>{{banana[0]}}</p>
  <p>{{pineapple.name}}</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果',
    banana: ['香蕉'],
    pineapple:{
      name:'鳳梨'
    }
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <p>蘋果</p>
  <p>香蕉</p>
  <p>鳳梨</p>
</div>
\`\`\`

-----------------------------------------------
* v-text + substring()截取過長自串
\`\`\`html
<div id="app">
  <!-- 從第幾個開始擷取自串,截取到從前面數過來第幾個 -->
  {{apple.substring(1,3)}}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple: '青森蘋果',
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <p>森蘋</p>
</div>
\`\`\`

-----------------------------------------------
* 可以直接在{{}}內進行計算。
\`\`\`html
<div id="app">
  <p>優惠價：<span>{{discount*100}}折</span>{{parseInt(price*discount)}}元</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    price: 360,
    discount: 0.79,
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <p>優惠價：<span>79折</span>284元</p>
</div>
\`\`\`

-----------------------------------------------
## v-html
* 使用\`v-html\`可將資料裡的HTML帶入<標籤>。
* 注意：不建議在網頁上任意使用v-html，因為會容易遭受XSS攻擊，例如:輸入框。
\`\`\`html
<p v-html="apple"></p>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple:'<span class='apple'>蘋果</span>'
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <p><span class="apple">蘋果</span></p>
</div>
\`\`\`

-----------------------------------------------
## v-if和v-show差異
* v-show是用display:none去做切換，而v-if是直接讓DOM元素消失只留下註解。
\`\`\`html
<div id="app">
  <p v-if="false">這段字要出現還是不出現？</p>
  <p v-show="false">這段字要出現還是不出現？</p>
</div>
\`\`\`

-----------------------------------------------
* v-if、v-else適合用在只有兩種結果時
\`\`\`html
<div id="app">
  <p v-if="showApple">蘋果</p>
  <p v-else>香蕉</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    showApple: true
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <p>蘋果</p>
</div>
\`\`\`

-----------------------------------------------
* v-if、v-else-if適合用在三種結果時
\`\`\`html
<div id="app">
  <p v-if="showName == 'apple'">蘋果</p>
  <p v-else-if="showName == 'banana'">香蕉</p>
  <p v-else-if="showName == 'pineapple'">鳳梨</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    showName: 'pineapple'
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <p>鳳梨</p>
</div>
\`\`\`

`,__vite_glob_0_82=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___2__Vue____},Symbol.toStringTag,{value:"Module"})),Vue2___20__Mixin______=`---
title: Vue2課程(20)：Mixin混合共用邏輯
date: 2021-06-20
tags: ["Vue2"]
---
## 將元件的相同的邏輯取出再混入
1. 將兩個元件的data和mounted都取出。
\`\`\`html
<div id="app">
  <alert-success></alert-success>
  <alert-danger></alert-danger>
</div>
\`\`\`
\`\`\`js
//元件1
Vue.component('alert-success',{
  data: function(){
    return{
      isShow: true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isShow = false;
    },3000)
  },
  template:\`
    <div v-if="isShow" class="alert alert-success">成功彈跳訊息</div>            
  \`
})

//元件2
Vue.component('alert-danger',{
  data: function(){
    return{
      isShow: true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isShow = false;
    },3000)
  },
  data: function(){
    return{
      isShow: true
    }
  },
  template: \`
    <div v-if="isShow" class="alert alert-danger">失敗彈跳訊息</div>      
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
2. 用mixin建立共同邏輯。
\`\`\`html
<div id="app">
  <alert-success></alert-success>
  <alert-danger></alert-danger>
</div>
\`\`\`
\`\`\`js
//建立顯示邏輯
const alertState = {
  data: function(){
    return{
      isShow: true
    }
  },
}

//建立關閉邏輯
const autoClose = {
  mounted(){
    setTimeout(()=>{
      this.isShow = false;
    },3000)
  }
}

Vue.component('alert-success',{
  //混入邏輯
  mixins: [alertState, autoClose],
  template:\`
    <div v-if="isShow" class="alert alert-success">成功彈跳訊息</div>            
  \`
})

Vue.component('alert-danger',{
  //混入邏輯
  mixins: [alertState, autoClose],
  data: function(){
    return{
      isShow: true
    }
  },
  template: \`
    <div v-if="isShow" class="alert alert-danger">失敗彈跳訊息</div>      
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
3. 若component本身就有data則會覆蓋mixin傳來的data。
\`\`\`html
<div id="app">
  <alert-success></alert-success>
  <alert-danger></alert-danger>
</div>
\`\`\`
\`\`\`js
const alertState = {
  data: function(){
    return{
      isShow: true
    }
  },
}

const autoClose = {
  mounted(){
    setTimeout(()=>{
      this.isShow = false;
    },3000)
  },
}

Vue.component('alert-success',{
  mixins: [alertState, autoClose],
  template:\`
    <div v-if="isShow" class="alert alert-success">成功彈跳訊息</div>            
  \`
})

Vue.component('alert-danger',{
  mixins: [alertState, autoClose],
  data: function(){
    return{
      //元件的data會蓋過mixin傳來的data
      isShow: false,
    }
  },
  template: \`
    <div v-if="isShow" class="alert alert-danger">失敗彈跳訊息</div>      
  \`
})

const app = new Vue({
  el: '#app'
})
\`\`\`
`,__vite_glob_0_83=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___20__Mixin______},Symbol.toStringTag,{value:"Module"})),Vue2___21__Directive__DOM=`---
title: Vue2課程(21)：Directive操作DOM
date: 2021-06-21
tags: ["Vue2"]
---
## Directive自訂指令生命週期
|英文|中文|觸發時機|el狀態|
|---|---|---|---|
|bind|初始化|第一次綁定到元素時調用|DOM 還沒插入畫面|
|inserted|DOM可用|元素已插入 DOM|DOM 已存在|
|update|資料變動|元素更新前（VNode 更新時）|
|componentUpdated|DOM更新完成|元素與子節點更新完成|DOM 完整更新|
|unbind|清理timer|指令解除綁定（元件銷毀）|DOM 即將移除|

\`\`\`html
<div id="app">
  <input type="text" v-demo>
</div>
\`\`\`
\`\`\`js
Vue.directive('demo', {
  //初始化
  bind: function(el, binding, vnode){
    console.log('bind：指令綁定到元素')
    console.log(el)
  },

  //元素插入DOM
  inserted: function(el, binding, vnode){
    console.log('inserted：已插入 DOM')
  },

  //資料變動觸發
  update: function(el, binding, vnode, oldVnode){
    console.log('update：資料更新中')
    console.log('新值:', binding.value)
    console.log('舊值:', binding.oldValue)
  },

  //DOM更新完成（最終狀態）
  componentUpdated: function(el, binding, vnode, oldVnode){
    console.log('componentUpdated：DOM 更新完成')
  },

  //指令解除綁定（元件銷毀）
  unbind: function(el, binding, vnode){
    console.log('unbind：指令解除綁定，準備清理')
  }
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
## 讓重整頁面就focus輸入框
* el是有用v-bind綁定的元素。
\`\`\`html
<div id="app">
  <input type="text" v-focus>
</div>
\`\`\`
\`\`\`js
Vue.directive('focus',{
  inserted: function(el){
    console.log(el); //<input type="text">
    el.focus()
  }
})

const app = new Vue({
  el: '#app'
})
\`\`\`

-----------------------------------------------
## email驗證輸入框
* update是去偵測data的資料有無變動。
\`\`\`html
<div id="app">
  <input type="text" v-model="email" v-validation="email">
</div>
\`\`\`
\`\`\`js
Vue.directive('validation',{
//初始化先將樣式綁定bootstrap
bind: function(el){
  el.className = 'form-control';
},
update: function(el){
  const inputValue = el.value;
  //驗證信箱的正規式
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if(!emailRegex.test(inputValue)){
    el.className = 'form-control is-invalid';
  }else{
    el.className = 'form-control is-valid';
  }
},
})

const app = new Vue({
  el: '#app',
  data:{
    email: ''
  }
})
\`\`\`

-----------------------------------------------
## 利用節點找出v-model的值
* update是去偵測data的資料有無變動。
\`\`\`html
<div id="app">
  <input type="text" v-model="email" v-validation="email">
</div>
\`\`\`
\`\`\`js
Vue.directive('validation',{
  bind: function(el, binding, vnode){
    const modelKey = vnode.data.directives.find((item)=>{
      return item.name == 'model'
    }).expression;

    console.log(modelKey); //email

    const modelValue = vnode.context[modelKey];

    console.log(modelValue); //''
  },
})

const app = new Vue({
  el: '#app',
  data:{
    email: ''
  }
})
\`\`\`

`,__vite_glob_0_84=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___21__Directive__DOM},Symbol.toStringTag,{value:"Module"})),Vue2___22____Vue_Cli__=`---
title: Vue2課程(22)：建立Vue Cli專案
date: 2021-06-22
tags: ["Vue2"]
---
## 安裝 Vue Cli 指令

|指令|說明|
|---|---|
|$ npm i -g vue-cli|全域安裝VueCLI|
|$ vue list|檢視VueCli可用版型|
|$ vue init{{模板名稱}}{{資料夾名稱}}|建立Vue專案|
|$ npm install|安裝專案依賴|
|$ npm run dev|運行Vue+Webpack開發環境|
|$ npm run build|編譯Production版本|

-----------------------------------------------
## Vue Cli 專案結構總整理

|位置|說明|
|---|---|
|static/|完全不會被webpack處理（不經loader、不壓縮、不加hash）|
|src/|主要程式碼|
|src/components|可重用元件|
|src/views|頁面級元件(搭配router使用)|
|src/router|VueRouter設定(路由管理)|
|src/store|Vuex(狀態管理中心)|
|src/assets|會被webpack處理的靜態資源(圖片、scss、字體)|
|src/api|API請求集中管理|
|src/utils|工具函式(例如debounce、format)|
|src/directives|自訂指令|
|main.js|進入點(entry)|
|App.vue|最外層root component|
|index.html|HTML模板(webpack會注入bundle)|

-----------------------------------------------
## Webpack 設定（build / config）
* build/webpack.base.conf.js

|位置|說明|
|---|---|
|build/webpack.base.conf.js|webpack基本設定|
|entry|進入點(通常是main.js)|
|output|打包輸出位置(dist)|
|resolve.extensions|可省略副檔名(.js、.vue)|
|resolve.alias|路徑縮寫(例如@→src)|
|module.rules|loader規則(vue-loader、babel-loader)|

-----------------------------------------------
## 環境設定（config）
* config/

|位置|說明|
|---|---|
|config/dev.env.js|開發環境變數|
|config/prod.env.js|正式環境變數|
|config/index.js|專案設定中心(port、proxy、build 設定)|

-----------------------------------------------
## 安裝Bootstrap
* 因為vue cli版本過舊：

|項目|版本限制|
|---|---|
|VueCLI|2.x|
|webpack|**3.x**|
|webpack-dev-server|**2.x**|
|node-sass|**4.x**|
|sass-loader|**7.x**|
|Node.js|⚠️**10~14（建議12/14）**|

-----------------------------------------------
* 安裝指令和相關套件
\`\`\`bash
$ npm i bootstrap node-sass@4 sass-loader@7
\`\`\`

-----------------------------------------------
* 在app.vue引入
\`\`\`vue
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
\`\`\`

-----------------------------------------------
## 安裝vue-axios
* 安裝指令
\`\`\`bash
$ npm i --save axios vue-axios
\`\`\`

-----------------------------------------------
* 在main.sj引入
\`\`\`js
import Vue from 'vue'
import App from './App'
import axios from 'axios' //主要 AJAX 套件
import VueAxios from 'vue-axios' // 將它轉為 Vue 的套件

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
\`\`\`

-----------------------------------------------
* 在app.vue上測試：
\`\`\`js
export default {
  name: 'App',
  created(){
    this.$http.get('https://randomuser.me/api/')
    .then((res)=>{
      console.log(res)
    })
  }
}
\`\`\``,__vite_glob_0_85=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___22____Vue_Cli__},Symbol.toStringTag,{value:"Module"})),Vue2___23____Vue_Router=`---
title: Vue2課程(23)：配置Vue Router
date: 2021-06-23
tags: ["Vue2"]
---
## 配置Vue Router
* 需要安裝舊版的vue-router
\`\`\`bash
$ npm i vue-router@3
\`\`\`
-----------------------------------------------
## 製作切換頁面
* 手動在src底下建立router資料夾，並在裡面建立index.js檔案。
\`\`\`js
//index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
      {
          name: '首頁', 
          path: '/index',
          component: Home,
      },
  ]
});
\`\`\`
\`\`\`js
//main.js
import Vue from 'vue'
import App from './App'

import axios from 'axios' //主要 AJAX 套件
import VueAxios from 'vue-axios' // 將它轉為 Vue 的套件
import router from './router';

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
\`\`\`
\`\`\`html
<div id="app">
    <router-link to="/index">首頁</router-link>
    <!-- 另一種寫法：使用name切換 -->
    <!-- <router-link :to="{ name: '首頁' }">首頁</router-link> -->

    <router-link to="/page">分頁</router-link>

    <router-view></router-view>
</div>
\`\`\`

-----------------------------------------------
## 製作巢狀路由
* 在page頁下，在新增子頁面。
\`\`\`html
<!-- page.vue -->
<div>
    <router-link to="/page/">卡片1</router-link>
    <router-link to="/page/child2">卡片2</router-link>
    <router-link to="/page/child3">卡片3</router-link>
    <div class="card" style="width: 18rem;">
        <router-view></router-view>
    </div>
</div>
\`\`\`
\`\`\`js
//router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld.vue';
import Page from '@/components/pages/page.vue';
import Child from '@/components/pages/Child.vue';
import Child2 from '@/components/pages/Child2.vue';
import Child3 from '@/components/pages/Child3.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: '首頁', 
            path: '/index',
            component: Home,
        },
        {
            name: '分頁',
            path: '/page',
            component: Page,
            children:[
                {
                    name: '卡片1', 
                    path: '',
                    component: Child,
                },
                {
                    name: '卡片2', 
                    path: 'child2',
                    component: Child2,
                },
                {
                    name: '卡片3', 
                    path: 'child3',
                    component: Child3,
                },
            ]
        },
    ]
});
\`\`\`

-----------------------------------------------
## 製作動態路由
* path: 'child3/:id'，這樣就屬於動態路由，child3後面必須要有id才能顯示。
\`\`\`js
//router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld.vue';
import Page from '@/components/pages/page.vue';
import Child from '@/components/pages/Child.vue';
import Child2 from '@/components/pages/Child2.vue';
import Child3 from '@/components/pages/Child3.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: '首頁', 
            path: '/index',
            component: Home,
        },
        {
            name: '分頁',
            path: '/page',
            component: Page,
            children:[
                {
                    name: '卡片1', 
                    path: '',
                    component: Child,
                },
                {
                    name: '卡片2', 
                    path: 'child2',
                    component: Child2,
                },
                {
                    name: '卡片3', 
                    path: 'child3/:id',
                    component: Child3,
                },
            ]
        },
    ]
});
\`\`\`
\`\`\`js
//page.vue
export default{
    data(){
        return{};
    },
    created(){
        //取得路由現在的id是多少
        console.log(this.$route.params.id);
    }
    
}
\`\`\`

-----------------------------------------------
## 在同一個頁面使用兩個router-view
* 在page頁底下，又有另一個選單。
\`\`\`html
<div id="app">
  <router-link to="/index">首頁</router-link>
  <router-link to="/page">分頁</router-link>
  <router-view name="menu"></router-view>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
\`\`\`
\`\`\`html
<!-- menu.vue -->
<ul class="nav">
    <li class="nav-item">
        <router-link class="nav-link" to="/page/">卡片1</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/page/child2">卡片2</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/page/child3">卡片3</router-link>
    </li>
</ul>
\`\`\`
\`\`\`html
<!-- page.vue -->
<div>
    <div class="card" style="width: 18rem;">
        <router-view></router-view>
    </div>
</div>
\`\`\`
\`\`\`js
//router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld.vue';
import Page from '@/components/pages/page.vue';
import Child from '@/components/pages/Child.vue';
import Child2 from '@/components/pages/Child2.vue';
import Child3 from '@/components/pages/Child3.vue';
import Menu from '@/components/pages/menu.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: '首頁', 
            path: '/index',
            component: Home,
        },
        {
            path: '/page',
            components: {
                default: Page,
                menu: Menu
            },
            children:[
                {
                    name: '卡片1', 
                    path: '',
                    component: Child,
                },
                {
                    name: '卡片2', 
                    path: 'child2',
                    component: Child2,
                },
                {
                    name: '卡片3', 
                    path: 'child3',
                    component: Child3,
                },
            ]
        },
    ]
});
\`\`\`

-----------------------------------------------
## 其他參數設定
\`\`\`js
//router/index.js
export default new VueRouter({
    //取消路由上的#字號，但取消後必須搭配伺服器名稱才能佈版
    mode: 'history',
    //修改被點擊當前link的class名稱，預設是“router-link-active”
    linkActiveClass: 'active',
    routes: [
      ...
    ]
});
\`\`\`

-----------------------------------------------
## 切換路由方法
\`\`\`html
<ul class="nav">
    <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="pushPage">前往某一頁</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="goToPage">去某一頁</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="backPage">回上一頁</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="nextPage">前往下一頁</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="replacePage">取代歷史紀錄不能回上一頁</a>
    </li>
</ul>
\`\`\`
\`\`\`js
export default{
    data(){
        return{};
    },
    methods:{
        pushPage: function(){
            this.$router.push('/index')
        },
        goToPage: function(){
            this.$router.go(-1);
        },
        backPage: function(){
            this.$router.back();
        },
        nextPage: function(){
            this.$router.forward();
        },
        replacePage: function(){
            this.$router.replace('/index');
        }

    }
}
\`\`\`

`,__vite_glob_0_86=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___23____Vue_Router},Symbol.toStringTag,{value:"Module"})),Vue2___3__vFor____=`---
title: Vue2課程(3)：v-for列印資料
date: 2021-06-03
tags: ["Vue2"]
---
## v-for
* 使用 **v-for** 可用來迴圈渲染陣列或物件。
* 常搭配 **index** 與 **:key** 使用，確保DOM更新效率。

-----------------------------------------------
* v-for陣列，第一個參數是item **每一筆資料**，第二個參數是index **索引位置** 。
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(item, index) in fruits">{{ index }}{{ item.name }}</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <ul>
    <li>0蘋果</li>
    <li>1香蕉</li>
    <li>2鳳梨</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
* v-for列印陣列，並加上v-if條件判斷。
\`\`\`html
<div id="app">
  <ul>
    <li
      v-for="(item, index) in fruits"
      v-if="item.price <= 20">{{ item.name }}
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <ul>
    <li>蘋果</li>
    <li>香蕉</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
* v-for列印陣列，在input輸入資料進行查詢。
\`\`\`html
<div id="app">
  <input type="text" v-model="filterText" @keyup.enter="filterData">
  <p v-for="(item, index) in filterArray">{{ item.price }}元</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    filterText: '',
    filterArray: [],
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  },
  methods:{
    filterData: function(){
      this.filterArray = this.fruits.filter((item)=>{
        return item.name == this.filterText
      })
    }
  }
});
\`\`\`

-----------------------------------------------
* 使用Vue.set(target,key,value)強制修改v-for資料。
\`\`\`html
<div id="app">
  <button type="button" @click="changeData">按鈕</button>
  <ul>
    <li v-for="(item, index) in fruits">{{ item.name }}{{ item.price }}元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    fruits:[
    {
      name: '蘋果',
      price: 20
    },
    {
      name: '香蕉',
      price: 15
    },
    {
      name: '鳳梨',
      price: 35
    },
    ]
  },
  methods:{
    changeData: function(){
      //這段方法會無效
      // this.fruits[0] = {
      //   name: '青森蘋果',
      //   price: 40
      // }

      //Vue.set( 傳入的目標 , key , 傳入的東西 )
      Vue.set(this.fruits,0,{
        name: '青森蘋果',
        price: 40
      })
    }
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <ul>
    <li>青森蘋果40元</li>
    <li>香蕉15元</li>
    <li>鳳梨35元</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
* v-for物件，第一個參數是value值， 第二個參數是key屬性名稱，第三個參數是index索引位置。
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(value, key, index) in apple">{{value}}{{key}}{{index}}</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    apple:{
      name:'蘋果',
      color: '紅色',
      price: 20
    }
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <ul>
    <li>蘋果name0</li>
    <li>紅色color1</li>
    <li>20price2</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
* v-for純數字
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in 6">{{ item }}</li>
  </ul>
</div>
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ul>
</div>
\`\`\``,__vite_glob_0_87=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___3__vFor____},Symbol.toStringTag,{value:"Module"})),Vue2___4__vOn____=`---
title: Vue2課程(4)：v-on綁定事件
date: 2021-06-04
tags: ["Vue2"]
---
## v-on
* 使用\`v-on\`可增加使用者事件，例如滑鼠點擊、按下鍵盤等，簡化寫法\`@\`。
\`\`\`html
<div id="app">
  <button type="button" @click="addCount">增加</button>
  <span>{{ count }}</span>
  <button type="button" @click="reduceCount">減少</button>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    count: 25
  },
  methods:{
    addCount: function(){
        this.count += 5;
    },
    reduceCount: function(){
        this.count -= 5;
    }
  }
});
\`\`\`

-----------------------------------------------
* 點擊按鈕並反轉文字。
\`\`\`html
<div id="app">
  <button type="button" @click="reverseText">按鈕</button>
  {{ apple }}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data: {
    apple: '青森蘋果',
  },
  methods:{
    reverseText: function(){
      //split讓'青森蘋果' ->> ['青', '森', '蘋', '果']
      //reverse讓['青', '森', '蘋', '果'] ->> ['果', '蘋', '森', '青']
      //join讓['果', '蘋', '森', '青'] ->> '果蘋森青'
      this.apple = this.apple.split('').reverse().join('')
    }
  }
});
\`\`\`

-----------------------------------------------
* 使用事件修飾符，阻止a連結預設轉跳。
\`\`\`html
<div id="app">
  <a href="http://yahoo.com/" @click.prevent="">前往Yahoo雅虎</a>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
});
\`\`\`

-----------------------------------------------
* 對v-for資料，進行點擊刪除該筆資料
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(item,index) in fruits">{{item}}
      <button type="button" @click="removeData(index)">X</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    fruits:["蘋果","香蕉","鳳梨","蓮霧"]
  },
  methods:{
      removeData: function (index){
        this.fruits.splice(index,1); //從第幾個開始刪除,刪除幾項
      }
  }
});
\`\`\`

-----------------------------------------------
* 對v-for資料進行操作。
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in fruits">
      <button type="button" @click="addPrice(item)">增加</button>
      <span>{{ item.name }}{{ item.price }}元</span>
      <button type="button" @click="reducePrice(item)">減少</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
    data:{
      fruits:[
        {
          name: '蘋果',
          price: 20
        },
        {
          name: '香蕉',
          price: 15
        },
        {
          name: '鳳梨',
          price: 35
        },
      ]
    },
  methods:{
    addPrice: function(item){
        item.price += 5;
    },
    reducePrice: function(item){
        item.price -= 5;
    }
  }
});
\`\`\``,__vite_glob_0_88=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___4__vOn____},Symbol.toStringTag,{value:"Module"})),Vue2___5__vModel____=`---
title: Vue2課程(5)：v-model綁定表單
date: 2021-06-05
tags: ["Vue2"]
---
## v-model
* 使用 **v-model** 可將表單與資料進行雙向綁定。

-----------------------------------------------
* input輸入框
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  {{apple}}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果'
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  "蘋果"
</div>
\`\`\`

-----------------------------------------------
* 如果在輸出標籤上加上 **v-onec** 只能初次綁定v-model的值，之後無法更改。
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  <div v-once>{{ apple }}</div>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果'
  }
});
\`\`\`

-----------------------------------------------
* 綁定textarea多行文字
\`\`\`html
<div id="app">
  <textarea v-model="textAreaValue"></textarea>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    textAreaValue: '蘋果'
  }
});
\`\`\`

-----------------------------------------------
* 綁定checkbox單選
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="isSubscription">是否訂閱電子報
  {{ isSubscription }}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    isSubscription: false
  }
});
\`\`\`

-----------------------------------------------
* 綁定checkbox單選，並改變原有true和false結果。
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="isSubscription" true-value="同意" false-value="取消">
  {{ isSubscription }}訂閱電子報
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    isSubscription: "同意"
  }
});
\`\`\`

-----------------------------------------------
* 綁定checkbox多選
* 一定要預先給在data定義好，並且給陣列，勾選的會加入到陣列裡。
\`\`\`html
<div id="app">
  <input type="checkbox" name="favoriteFruit" v-model="checkboxValue" value="蘋果">蘋果
  <input type="checkbox" name="favoriteFruit" v-model="checkboxValue" value="香蕉">香蕉
  <input type="checkbox" name="favoriteFruit" v-model="checkboxValue" value="鳳梨">鳳梨
  <br>
  你選擇的是：{{ checkboxValue }}
</div>  
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data: {
    checkboxValue: []
  }
})
\`\`\`

-----------------------------------------------
* 綁定radio單選
\`\`\`html
<div id="app">
  <input type="radio" name="favoriteFruit" v-model="radioValue" value="蘋果">蘋果
  <input type="radio" name="favoriteFruit" v-model="radioValue" value="香蕉">香蕉
  <input type="radio" name="favoriteFruit" v-model="radioValue" value="鳳梨">鳳梨
  <br>
  你選擇的是：{{ radioValue }}
</div>  
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data: {
    radioValue: ''
  }
})
\`\`\`

-----------------------------------------------
* 綁定select下拉選單
\`\`\`html
<div id="app">
  <select v-model="selectValue">
    <option value="" disabled >-- 請選擇 --</option>
    <option value="蘋果">蘋果</option>
    <option value="香蕉">香蕉</option>
    <option value="鳳梨">鳳梨</option>
  </select>
  <br>
  你選擇的是：{{ selectValue }}
</div>  
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data: {
    selectValue: ''
  }
})
\`\`\``,__vite_glob_0_89=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___5__vModel____},Symbol.toStringTag,{value:"Module"})),Vue2___6__vBind______=`---
title: Vue2課程(6)：v-bind動態切換屬性
date: 2021-06-06
tags: ["Vue2"]
---
## v-bind
* 使用\`v-bind\`可以動態載入屬性資料，縮寫：\`:\`。
\`\`\`html
<div id="app">
  <div class="box" :style="[{backgroundColor: 'red'},{transform: 'rotate(45deg)'}]"></div>
</div>
\`\`\`

-----------------------------------------------
* 將圖片路徑綁定動態資料
\`\`\`html
<div id="app">
  <img :src="imgSrc" :style="imgFluid" alt="">
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    imgUrl: 'https://images.unsplash.com/photo-1479568933336-ea01829af8de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9926ef56492b20aea8508ed32ec6030&auto=format&fit=crop&w=2250&q=80',
    imgFluid: 'max-width:100%;height:auto'
  }
});
\`\`\`
輸出結果：
\`\`\`html
<div id="app">
  <img src="https://images.unsplash.com/photo-1479568933336-ea01829af8de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9926ef56492b20aea8508ed32ec6030&auto=format&fit=crop&w=2250&q=80" alt="" style="max-width: 100%; height: auto;">
</div>
\`\`\`
-----------------------------------------------
* 動態綁定樣式，並用三元判斷式切換。
\`\`\`html
<div id="app">
  <button
    type="button"
    :class="{ 'active': isClick }"
    @click="isClick=!isClick">按鈕
  </button>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    isClick: false
  }
});
\`\`\`
\`\`\`css
.active{
  background-color: red;
}
\`\`\`

-----------------------------------------------
* 選擇radio，切換style樣式(必須用小駝峯方式撰寫)。
\`\`\`html
<div id="app">
  <input type="radio" v-model="color" value="red">紅色
  <input type="radio" v-model="color" value="blue">藍色
  <p :style="{'backgroundColor':color}">控制我的背景顏色</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    color: 'blue'
  }
});
\`\`\`

-----------------------------------------------
* 勾選checkbox，切換style樣式。
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="isActive">
  <p :style="{ backgroundColor:isActive? 'red':'' }">勾選後文字背景變紅色</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    isActive: false
  }
});
\`\`\``,__vite_glob_0_90=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___6__vBind______},Symbol.toStringTag,{value:"Module"})),Vue2___7__Computed____=`---
title: Vue2課程(7)：Computed自動計算
date: 2021-06-07
tags: ["Vue2"]
---
## computed
* 使用 **computed** 可建立計算後的資料，有快取機制。
* **computed** 是在監控資料更動後，重新運算結果呈現於畫面上。

-----------------------------------------------
* 直接計算出總價
\`\`\`html
<div id="app">
  總計：{{ totalPrice }} <!-- 70 -->
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  },
  computed: {
    totalPrice: function(){
      return this.fruits.reduce((acc,val)=>{
        return acc + val.price
      },0)
    }
  }
});
\`\`\`

-----------------------------------------------
* 自動篩選輸入框裡的值，並顯示對應價錢。
\`\`\`html
<div id="app">
  <input type="text" v-model="filterText">
  <p v-for="item in filterArray">{{ item.price }}元</p>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    filterText: '',
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  },
  computed:{
    filterArray: function(){
      return this.fruits.filter((item)=>{
        return item.name == this.filterText
      })
    }
  }
});
\`\`\`

-----------------------------------------------
* 時間格式化。
\`\`\`html
<div id="app">
  {{ formatDate }}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  computed:{
    formatDate: function(){
      let nowDate = new Date();
      let yyyy = nowDate.getFullYear();
      let mm = String(nowDate.getMonth() + 1).padStart(2, '0');
      let dd = String(nowDate.getDate()).padStart(2, '0');
      return \`今天是，\${yyyy}年\${mm}月\${dd}日\`
    }
  }
});
\`\`\``,__vite_glob_0_91=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___7__Computed____},Symbol.toStringTag,{value:"Module"})),Vue2___8__Watch____=`---
title: Vue2課程(8)：Watch監控資料
date: 2021-06-08
tags: ["Vue2"]
---
## watch
* 使用 **watch** 可監聽資料變化並執行動作。
* 適合用在非同步操作或副作用處理（例如 API 呼叫）。

-----------------------------------------------
* 監控資料變化，並在三秒後進行修改。
\`\`\`html
<div id="app">
  <button type="button" @click="apple = '香蕉'">按鈕</button>
  {{ apple }}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    apple: '蘋果'
  },
  watch:{
    apple: function(){
      setTimeout(()=>{
        this.apple = '蘋果'
      },3000)
    }
  }
});
\`\`\`

-----------------------------------------------
* 發送驗證碼，並3秒後才能重新發送。
\`\`\`html
<div id="app">
  <button
    type="button"
    @click="sendOtp = false"
    :disabled="!sendOtp">
    <span v-if="sendOtp">發送驗證碼</span>
    <span v-else>重新發送({{ resendOtp }}秒)</span>
  </button>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el:'#app',
  data:{
    //是否可以發送
    sendOtp: true,
    //幾秒後可重新發送
    resendOtp: 3,
    //時間倒數
    timer: null
  },
  watch:{
    sendOtp: function(){
      //只有在"重新發送"時，才進行倒數
      if(!this.sendOtp){
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
          //每秒都扣1
          this.resendOtp -= 1;
          //如果倒數完就...
          if(this.resendOtp === 0){
            clearInterval(this.timer);
            this.resendOtp = 3;
            this.sendOtp = true;
          }
        },1000)
      }
    }
  }
});
\`\`\``,__vite_glob_0_92=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___8__Watch____},Symbol.toStringTag,{value:"Module"})),Vue2___9________=`---
title: Vue2課程(9)：修飾符總整理
date: 2021-06-09
tags: ["Vue2"]
---
## 表單修飾符
|修飾符|說明|
|---|---|
|.lazy|離開輸入框時，才會顯示綁定的文字|
|.number|能讓輸入框的數字轉換成Number型別|
|.trim|能讓輸入的文字與預設文字中間無空白|

-----------------------------------------------
* 使用事件修飾符lazy，在輸入當下不會即時顯示變化，除非離開焦點時。
\`\`\`html
<div id="app">
  <input type="text" v-model.lazy="apple">
  {{apple}}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果'
  }
});
\`\`\`

-----------------------------------------------
* 使用事件修飾符number，可以讓原本輸入框的值變成number型別。
\`\`\`html
<div id="app">
  <input type="text" v-model.number="price">
  {{ typeof(price) }}{{ price }}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    price: 20
  }
});
\`\`\`

-----------------------------------------------
* 使用事件修飾符trim，可以自動去除頭尾空白字元
\`\`\`html
<div id="app">
  <input type="text" v-model.trim="price">
  {{ apple }}
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  data:{
    apple: ' 青森蘋果  '
  }
});
\`\`\`

-----------------------------------------------
## 事件修飾符

|修飾符|說明|如同|
|---|---|---|
|無使用|先觸發自己，再觸發外層|
|.capture|先觸發外層，再觸發自己|
|.stop|只觸發自己|event.stopPropagation()|
|.self|只觸發自己|
|.once|只觸發一次|
|.prevent|取消預設事件|event.preventDefault()|

-----------------------------------------------
* 正常情況：點擊蘋果時先觸發自己在觸發外層。
\`\`\`html
<div id="app">
  <ul @click="showAlert('外層')">
    <li @click="showAlert('蘋果')">蘋果</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(name){
      alert("你成功觸發了"+name);
    }
  }
});
\`\`\`

-----------------------------------------------
* 當外層使用capture時：點擊蘋果時先觸發外層在觸發自己。
\`\`\`html
<div id="app">
  <ul @click.capture="showAlert('外層')">
    <li @click.capture="showAlert('蘋果')">蘋果</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(name){
      alert("你成功觸發了"+name);
    }
  }
});
\`\`\`

-----------------------------------------------
* 當使用stop時：點擊蘋果可以阻止事件冒泡。
\`\`\`html
<div id="app">
  <ul @click.stop="showAlert('外層')">
    <li @click.stop="showAlert('蘋果')">蘋果</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(name){
      alert("你成功觸發了"+name);
    }
  }
});
\`\`\`

-----------------------------------------------
* 當使用self時：可個別獨立事件。
\`\`\`html
<div id="app">
  <ul @click.self="showAlert('外層')">
    <li @click.self="showAlert('蘋果')">蘋果</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(name){
      alert("你成功觸發了"+name);
    }
  }
});
\`\`\`

-----------------------------------------------
* 當使用once時：事件只能觸發一次。
\`\`\`html
<div id="app">
  <ul @click.once="showAlert('外層')">
    <li @click.once="showAlert('蘋果')">蘋果</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(name){
      alert("你成功觸發了"+name);
    }
  }
});
\`\`\`

-----------------------------------------------
## 按鍵修飾符

|keycode|.13|.9|.8/.46|.27|.32|.38|.40|.37|.39|
|---|---|---|---|---|---|---|---|---|---|
|按鍵碼|.enter|.tab|.delete|.esc|.space|.up|.down|.left|.right|

|keycode|||||
|---|---|---|---|---|
|系統鍵|.ctrl|.alt|.shift|.meta(window是:Win鍵(⊞)、Mac是command鍵(⌘))|

\`\`\`html
<div id="app">
  <input type="text" placeholder="按下enter觸發" @keyup.13="showAlert">
  <input type="text" placeholder="按下空白鍵觸發" @keyup.space="showAlert">
  <input type="text" placeholder="按下shift+enter觸發" @keyup.shift.enter="showAlert">
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(){
      alert("你成功觸發了");
    }
  }
});
\`\`\`

-----------------------------------------------
## 滑鼠修飾符
|修飾符|說明|
|---|---|
|.left|點擊滑鼠左鍵觸發|
|.right|點擊滑鼠右鍵觸發|
|.middle|點擊滑鼠中鍵(滾輪)觸發|

\`\`\`html
<div id="app">
  <a href="#" @click.left="showAlert">用滑鼠左鍵點我</a>
  <a href="#" @click.right="showAlert">用滑鼠右鍵點我</a>
  <a href="#" @click.middle="showAlert">用滑鼠中鍵點我</a>
</div>
\`\`\`
\`\`\`js
const app = new Vue({
  el: '#app',
  methods: {
    showAlert: function(){
      alert("你成功觸發了");
    }
  }
});
\`\`\``,__vite_glob_0_93=Object.freeze(Object.defineProperty({__proto__:null,default:Vue2___9________},Symbol.toStringTag,{value:"Module"})),Vue3___Font_Awesome_7____=`---
title: Vue3 + Font Awesome 7 使用方法
date: 2026-02-05
tags: ["Web"]
---

#### 1.新增Vue組件
\`\`\`bash
npm install @fortawesome/vue-fontawesome@latest-3
\`\`\`

#### 2.加入SVG核心
\`\`\`bash
npm install @fortawesome/fontawesome-svg-core
\`\`\`

#### 3.使用SVG圖示包(免費)
\`\`\`bash
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
\`\`\`

#### 4.在main.js使用SVG圖標包新增圖標
\`\`\`js
import { createApp } from 'vue'
import App from './App.vue'

/* 全域引用Font Awesome核心 */
import { library } from '@fortawesome/fontawesome-svg-core'

/* 全域引用Font Awesome元件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 自訂需要引入的icon(編輯) */
/* 範例：fa-pencil，要寫成faPencil後面要引入的是solid還是... */
import { faPencil } from '@fortawesome/free-solid-svg-icons';

/* 加入到資料庫裡(不建議...all會很大) */
library.add(faPencil);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
\`\`\`

#### 5.開始使用元件
\`\`\`vue
<template>
  <font-awesome-icon icon="fa-solid fa-pencil" />
</template>
\`\`\`

#### 6.調整大小
\`\`\`vue
<template>
  <font-awesome-icon icon="fa-solid fa-pencil" size="xs" />

  /* 尺寸2xs~2xl */
  /* 尺寸1x~10x */
  /* 自動寬度widthAuto */
</template>
\`\`\`

#### 7.旋轉或翻轉
\`\`\`vue
<template>
  <font-awesome-icon icon="fa-solid fa-coffee" rotation="90" />
  <font-awesome-icon icon="fa-solid fa-coffee" flip="horizontal" />
  <font-awesome-icon icon="fa-solid fa-coffee" flip="vertical" />
  <font-awesome-icon icon="fa-solid fa-coffee" flip="both" />
</template>
\`\`\`

#### 8.自訂旋轉
\`\`\`vue
<template>
  <font-awesome-icon
    icon="fa-solid fa-coffee"
    rotateBy
    style="--fa-rotate-angle: 329deg"
  />
</template>
\`\`\`

#### 9.動畫
\`\`\`vue
<template>
  <font-awesome-icon icon="fa-solid fa-heart" beat />
  <font-awesome-icon icon="fa-solid fa-circle-info" beat-fade />
  <font-awesome-icon icon="fa-solid fa-basketball" bounce />
  <font-awesome-icon icon="fa-solid fa-exclamation-triangle" fade />
  <font-awesome-icon icon="fa-solid fa-compact-disc" flip />
  <font-awesome-icon icon="fa-solid fa-bell" shake />
  <font-awesome-icon icon="fa-solid fa-cog" spin />
  <font-awesome-icon icon="fa-solid fa-compass" spin spin-reverse />
  <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse />
</template>
\`\`\`

資料來源：https://docs.fontawesome.com/web/use-with/vue/style`,__vite_glob_0_94=Object.freeze(Object.defineProperty({__proto__:null,default:Vue3___Font_Awesome_7____},Symbol.toStringTag,{value:"Module"})),Vue3_________GitHub_Pages='---\ntitle: Vue3 + 將網站部署到GitHub Pages\ndate: 2026-01-19\ntags: ["Vue3","GitHub"]\n---\n## 在Github建立新的Repository\n1. 建立`repository`時，網址為`帳號`/`專案名稱`\n2. 若已經在`VSCode`，建立了`git`檔，可以選擇推送儲存庫\n### 推送儲存庫指令：\n```\ngit remote add origin https://github.com/帳號/vuetest.git\ngit branch -M main\ngit push -u origin main\n```\n3. 在專案中的終端機輸入以上指令，並且授權github允許存取vscode\n4. 回到github重整頁面，可以看到資料已上傳\n\n-----------------------------------------------\n## 將dist部署到GitHub Pages上\n1. 安裝`gh-pages`套件\n```\n$ npm i gh-pages\n```\n2. 新增`部署`指令，到`package.json`\n```js\n"scripts": {\n  "dev": "vite",\n  "build": "vite build",\n  "preview": "vite preview",\n  "deploy": "vite build && gh-pages -d dist"\n},\n```\n`gh-pages -d dist`指令表示將dist部署\n\n3. 此時若直接部署到`github`上，會因為網址不對而無法正常顯示，所以我們必須要再設定基本路徑：\n新增`base`讓名稱跟`帳號`/`vuetest`相同\n```js\n//vite.config.js\n\nexport default defineConfig({\n    base: \'/vuetest/\',\n});\n```',__vite_glob_0_95=Object.freeze(Object.defineProperty({__proto__:null,default:Vue3_________GitHub_Pages},Symbol.toStringTag,{value:"Module"})),Vue3_emit______=`---
title: Vue3 emit資料由內傳外
date: 2026-03-30
tags: ["Vue3"]
---
## 內層按鈕改變外層標題

* 口訣：前內後外

\`\`\`vue
//Button.vue

<template>
  <button type="button" @click="emitTitle()">按鈕</button>
</template>


<script setup>
import { ref } from 'vue';

const emit = defineEmits(['editTitle']) // 定義事件名稱

const title = ref("這是要傳的標題");

const emitTitle = ()=> {
  emit('emitTitle',title.value); // 傳遞事件名稱, 參數
}
<\/script>
\`\`\`
外層接收：
\`\`\`vue
//ProductsView.vue

<template>
  <h2>{{ pageTitle }}</h2>
  <Button @emitTitle="editTitle()"></Button>
</template>


<script setup>
import { ref } from 'vue';
import Button from '@/component/Button.vue'

const pageTitle = ref("關於我們");

const editTitle = (newTitle)=> {
  pageTitle.value = newTitle
}
<\/script>
\`\`\``,__vite_glob_0_96=Object.freeze(Object.defineProperty({__proto__:null,default:Vue3_emit______},Symbol.toStringTag,{value:"Module"})),Vue3_props______=`---
title: Vue3 props資料由外傳內
date: 2026-03-30
tags: ["Vue3"]
---
## 把卡片資料由外傳入內

* 口訣：前內後外
  * content 是內層接收名稱
  * cardData 是外層傳遞名稱
* html屬性命名都是小駝峰
\`\`\`vue
//ProductsView.vue

<template>
  <Card :content="cardData"></Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/component/Card.vue';

const cardData = ref({
  imgUrl: 'https://plus.unsplash.com/premium_photo-1668367779826-afc94d000060?q=80&w=2634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: '卡片標題',
  content: '卡片內容',
  link: 'https://www.youtube.com/' 
})
<\/script>
\`\`\`
內層接收：
\`\`\`vue
//Card.vue

<template>
  <div class="card" style="width: 18rem;">
    <img :src="content.imgUrl" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ content.title }}</h5>
      <p class="card-text">{{ content.content }}</p>
      <a :href="content.link" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script setup>
defineProps(['content'])

//也可寫成
// const props = defineProps(['content']);
<\/script>
\`\`\``,__vite_glob_0_97=Object.freeze(Object.defineProperty({__proto__:null,default:Vue3_props______},Symbol.toStringTag,{value:"Module"})),Vue3_Swiper__=`---
title: Vue3+Swiper輪播
date: 2026-02-03
tags: ["Vue3"]
---

1.安裝swiper
\`\`\`bash
npm i swiper
\`\`\`

2.建立元件
\`\`\`vue
<template>
    <Swiper
        :modules="modules"
        :autoplay="{ delay: 1000, disableOnInteraction: false }">
        <SwiperSlide>
            <img src="/images/hexagon.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/sphere.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/triangle.jpg" alt="" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const modules = [ Autoplay ]
<\/script>
\`\`\``,__vite_glob_0_98=Object.freeze(Object.defineProperty({__proto__:null,default:Vue3_Swiper__},Symbol.toStringTag,{value:"Module"})),Vue________=`---
title: 元件的切換與插槽
date: 2021-06-09
tags: ["Vue"]
---
## 動態切換元件
* 使用 **v-if** 判斷。
\`\`\`js
// <-----html----->
#app
  button(@click="a = 'apple'" :key="a") 按鈕A
  button(@click="a = 'banana'" :key="a") 按鈕B
  hr
  div(is="apple" v-if="a === 'apple'")
  div(is="banana" v-if="a === 'banana'")

script(type="text/x-template" id="apple")
  p 蘋果
  
script(type="text/x-template" id="banana")
  p 香蕉

// <-----js----->
Vue.component("apple",{
  template: "#apple",
});

Vue.component("banana",{
  template: "#banana"
});

let app = new Vue({
  el: "#app",
  data:{
    a: "apple"
  }
});
\`\`\`
* 使用 **:is** 判斷。
\`\`\`js
// <-----html----->
#app
  button(@click="a = 'apple'" :key="a") 按鈕A
  button(@click="a = 'banana'" :key="a") 按鈕B
  hr
  div(:is="a")

script(type="text/x-template" id="apple")
  p 蘋果
  
script(type="text/x-template" id="banana")
  p 香蕉

// <-----js----->
Vue.component("apple",{
  template: "#apple",
});

Vue.component("banana",{
  template: "#banana"
});

let app = new Vue({
  el: "#app",
  data:{
    a: "apple"
  }
});
\`\`\`

-----------------------------------------------
## 匿名插槽
* 使用\\<slot>讓標籤內容能被替換。
\`\`\`js
// <-----html----->
#app
  list-com 
    li 芭樂
  
script(type="text/x-template" id="list-com")
  ul
    li 蘋果
    slot 香蕉
    li 鳳梨

// <-----js----->
Vue.component("list-com",{
  template: "#list-com",
});

let app =new Vue({
  el: "#app"
});

// <-----結果----->
//．蘋果
//．芭樂
//．鳳梨
\`\`\`
* 如果都使用\\<slot>標籤內容都會被替換。
\`\`\`js
// <-----html----->
#app
  list-com 
    li 芭樂
  
script(type="text/x-template" id="list-com")
  ul
    slot 蘋果
    slot 香蕉
    slot 鳳梨

// <-----js----->
Vue.component("list-com",{
  template: "#list-com",
});

let app =new Vue({
  el: "#app"
});

// <-----結果----->
//．芭樂
//．芭樂
//．芭樂
\`\`\`

-----------------------------------------------
## 具名插槽
* 新增[name]屬性[自訂值]，對應[slot]屬性[自訂值]。
\`\`\`js
// <-----html----->
#app
  list-com 
    li(slot="a") 芭樂
  
script(type="text/x-template" id="list-com")
  ul
    slot 蘋果
    slot(name="a") 香蕉
    slot 鳳梨

// <-----js----->
Vue.component("list-com",{
  template: "#list-com",
});

let app =new Vue({
  el: "#app"
});

// <-----結果----->
//．蘋果
//．芭樂
//．鳳梨
\`\`\`
\`若不想讓元件的標籤被取代，可以使用\\<template>\``,__vite_glob_0_99=Object.freeze(Object.defineProperty({__proto__:null,default:Vue________},Symbol.toStringTag,{value:"Module"})),Vue______=`---
title: Vue切換應用方法
date: 2021-06-05
tags: ["Vue"]
---
## radio(三項切換)
*  **v-on** + **v-if** 方法。
\`\`\`js
// <-----html----->
#app
  input(type="radio" name="a" @click="a='A'")
  input(type="radio" name="a" @click="a='B'")
  input(type="radio" name="a" @click="a='C'")
  p(v-if=" a=='A' ") 蘋果
  p(v-else-if=" a=='B' ") 香蕉
  p(v-else-if=" a=='C' ") 鳳梨

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "A"
  }
});
\`\`\`
* **v-on** + **{{}}** 方法。
\`\`\`js
// <-----html----->
#app
  input(type="radio" name="a" @click="a='蘋果'")
  input(type="radio" name="a" @click="a='香蕉'")
  input(type="radio" name="a" @click="a='鳳梨'")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "蘋果"
  }
});
\`\`\`
* **v-for** + **v-on** + **{{}}** 方法。
\`\`\`js
// <-----html----->
#app
  input(v-for="item in b" type="radio" name="a" @click="change(item)")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
    b:[
      {name: "蘋果", amount: 100},
      {name: "香蕉", amount: 300},
      {name: "鳳梨", amount: 500}
    ],
  },
  methods:{
    change: function(item){
      switch(item.name){
        case "蘋果":
          this.a = 100;
          break;
        case "香蕉":
          this.a = 300;
          break;
        case "鳳梨":
          this.a = 500;
          break;
      }
    }
  }
});
\`\`\`

-----------------------------------------------
## checkbox(兩項切換)
* **v-model** + **v-if** 方法。
\`\`\`js
// <-----html----->
#app
  input(type="checkbox" v-model="a")

  //** 範例一 **//
  p(v-if="a==true") 蘋果
  p(v-if="a==false") 香蕉

  //** 範例二 **//
  p(v-if="a") 蘋果
  p(v-if="!a") 香蕉

  //** 範例三 **//
  p(v-if="a") 蘋果
  p(v-else) 香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  }
});
\`\`\`
* **v-on** + **v-if** 方法。
\`\`\`js
// <-----html----->
#app
  input(type="checkbox" @click="change")
  p(v-if="a") 蘋果
  p(v-if="!a") 香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  },
  methods:{
    change: function(){
      this.a = !this.a;
    }
  }
});
\`\`\`
* 複選框(會先呈現預設值)。
\`\`\`js
// <-----html----->
#app
  input(type="checkbox" v-model="a" true-value="蘋果" false-value="香蕉")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "蘋果"
  }
});
\`\`\`
* 切換輸入框，需加入 **:key** 才能同時把值也切換。
\`\`\`js
// <-----html----->
#app
  input(v-if="a" type="text" placeholder="蘋果" :key="a")
  input(v-if="!a" type="text" placeholder="香蕉" :key="b")
  input(type="checkbox" v-model="a")

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  }
});
\`\`\`
-----------------------------------------------
## select(多選)
* **v-model** + **{{}}** 方法。
\`\`\`js
// <-----html----->
#app
  select(v-model="a")
    option(value="" hidden) 請選擇
    option(value="100") 蘋果
    option(value="300") 香蕉
    option(value="500") 鳳梨
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
  }
});
\`\`\`
* **v-model** + **v-for** + **{{}}** 方法。
\`\`\`js
// <-----html----->
#app
  select(v-model="a")
    option(value="" hidden) 請選擇
    option(v-for="item in b" :value="item.amount") {{item.name}}
  p {{a}}個
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:"",
    b:[
      {name:"蘋果" , amount: 100},
      {name:"香蕉" , amount: 300},
      {name:"鳳梨" , amount: 500}
    ]
  }
});
\`\`\`
* 複選選單
\`\`\`js
// <-----html----->
#app
  select(v-model="a" multiple)
    option(v-for="item in b") {{item.name}}
  p {{a.toString()}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:"",
    b:[
      {name:"蘋果" , amount: 100},
      {name:"香蕉" , amount: 300},
      {name:"鳳梨" , amount: 500}
    ]
  }
});
\`\`\``,__vite_glob_0_100=Object.freeze(Object.defineProperty({__proto__:null,default:Vue______},Symbol.toStringTag,{value:"Module"})),Vue_Devtools__=`---
title: Vue的Devtools安裝
date: 2021-06-10
tags: ["Vue"]
---
## 安裝Vue.js devtools開發者工具
1. Vue.js devtools是一個Chrome擴充工具，[點擊前往網址](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)。
![圖片](./images/VueDevtools安裝/VueDevtools安裝-1.png)

-----------------------------------------------
2. 要使用Vue.js devtools的前提是...，該網站引入的Vue.js版本必須"不是min版"。
![圖片](./images/VueDevtools安裝/VueDevtools安裝-2.png)

-----------------------------------------------
3. 點選Chrome右上角"設定"(頭像右邊)→更多工具→擴充功能→找到"Vue.js devtools"，將"允許存許網址"開啟。
![圖片](./images/VueDevtools安裝/VueDevtools安裝-3.png)

-----------------------------------------------
4. 打開檔案總管，進入C槽→\\Users(使用者)\\jack8(電腦名稱)\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\nhdogjmejiglipccpnnnanhbledajbpd\\5.3.4_0(版本可能不同)，將裡面的"manifest.json"開啟，然後把"persistent":false改成true。
![圖片](./images/VueDevtools安裝/VueDevtools安裝-4.png)

-----------------------------------------------
5. 在Chrome右上角Vue小圖示有亮起顏色的時候，右鍵→檢查，就可以看到開發者工具最後面出現"Vue"。
![圖片](./images/VueDevtools安裝/VueDevtools安裝-5.png)`,__vite_glob_0_101=Object.freeze(Object.defineProperty({__proto__:null,default:Vue_Devtools__},Symbol.toStringTag,{value:"Module"})),Webpack____________=`---
title: Webpack基本環境建置並渲染出畫面
date: 2024-05-01
tags: ["Webpack"]
---
## Webpack5 初步環境建置
### 1.安裝node.js
1. \`node.js\`版本建議要18以上(可以使用nvm版本控制)
* 查看已安裝的\`node.js\`版本
\`\`\`bash
$ nvm ls
\`\`\`

* 查看\`node.js\`有哪些LTS版本(較穩定)
\`\`\`bash
$ nvm ls-remote --lts
\`\`\`

* 安裝\`node.js\`版本18.20.4
\`\`\`bash
$ nvm i 18.20.4
\`\`\`

* 使用\`node.js\`版本18.20.4
\`\`\`bash
$ nvm use 18.20.4
\`\`\`

-----------------------------------------------
### 2.手動建立資料夾
1. 快速建立\`package.json\`，輸入：
\`\`\`bash
$ npm init -y
\`\`\`

2. 安裝\`webpack\`基本套件：
    * \`webpack\`是主要核心
    * \`webpack-cli\`是webpack工具包
    * \`webpack-dev-server\`是執行環境工具
\`\`\`bash
$ npm i webpack webpack-cli webpack-dev-server -D
\`\`\`

3. 補充說明：\`-D\` 是 \`--save-dev\`的縮寫
    * 沒有加-D的套件會安裝在package.json的"dependencies"底下，表示生產環境和開發環境都會使用到，例：bootstrap。
    * 有加-D的套件會安裝在package.json的放在"devDependencies"底下，表示開發期間的工具和插件，在生產環境下不需要運行，例：webpack-cli。
\`\`\`bash
you project
├─── node_modules/        
└─── package.json   
\`\`\`

-----------------------------------------------
### 3.在package.json設置：
\`\`\`json
{
  "scripts":{
      "start": "webpack --mode development", //開發模式
      "build": "webpack --mode production", //生產模式
      "dev": "webpack serve --mode development --open" //渲染模式＋自動打開瀏覽器
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
\`\`\`
\`--mode development 是開發模式：編譯完成的程式碼不會壓縮檔案較大\`

\`--mode production 是生產模式：編譯完成的程式碼會自動壓縮檔案較小\`

\`webpack serve 利用暫存空間渲染畫面在伺服器\`

-----------------------------------------------
### 4.手動建立檔案：
1. 建立\`webpack.config.js\`檔：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js', //進入點
    output: {
        path: path.resolve(__dirname,'dist'), //設置輸出檔案位置(絕對路徑)
        filename: './js/main.js', //輸出檔案名稱
        clean: true, //是否自動刪除舊檔案
    }
}
\`\`\`
\`entry可用物件方式傳多一次設置多個進入點\`

2. 在進入點位置手動新增\`main.js\`檔，然後在裡面寫：
\`\`\`js
console.log('Hello World!!')
\`\`\`

\`\`\`markdown
you project
├─── node_modules/        
├─── src/
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
### 5.執行專案：
1. 在終端機執行，就可以自動生成\`dist\`以及\`js/main.js\`檔：
\`\`\`bash
$ npm run start
\`\`\`
\`\`\`markdown
you project
├─── dist/
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
### 6.建立index.html：
1. 安裝\`html-webpack-plugin\`：
\`\`\`bash
$ npm i html-webpack-plugin -D
\`\`\`
2. 在\`src\`資料夾底下新增\`index.html\`，並簡單就夠基本html樣板：
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
\`\`\`
3. 在\`webpack.config.js\`檔案新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', //定義index.html路徑
        })
    ]
}
\`\`\`
\`\`\`markdown
you project
├─── dist/
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
### 7.再次編譯最終成果：

1. 在終端機輸入：
\`\`\`bash
$ npm run start
\`\`\`

2. 接著再輸入：
\`\`\`bash
$npm run dev
\`\`\`

3. 最後就能看到資料夾結構如下：
\`\`\`markdown
you project
├─── dist/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\``,__vite_glob_0_102=Object.freeze(Object.defineProperty({__proto__:null,default:Webpack____________},Symbol.toStringTag,{value:"Module"})),Webpack__SCSS________Bootstrap=`---
title: Webpack編譯SCSS並優化+導入Bootstrap
date: 2024-05-02
tags: ["Webpack","Bootstrap"]
---
## 編譯css

1. 安裝套件\`style-loader\`和\`css-loader\`套件
\`\`\`bash
$ npm i style-loader css-loader -D
\`\`\`

2. 在\`src\`資料夾底下手動建立\`css/style.css\`檔案，並在裡面寫一些樣式：
\`\`\`css
body{
    background-color: red;
}

::placeholder{
    display: flex;
    flex: 1 1 auto;
    transform: translateX(-30px);
}
\`\`\`
\`\`\`markdown
you project
├─── dist/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

3. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js', //進入點
    output: {
        path: path.resolve(__dirname,'dist'), //設置輸出檔案位置(絕對路徑)
        filename: './js/main.js', //輸出檔案名稱
        clean: true, //是否自動刪除舊檔案
    },
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [
                    'style-loader', //後執行，將css以<style>方式直接引入html
                    'css-loader' //先執行，解析並壓縮代碼
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ]
}
\`\`\`
\`在loader裡的執行序是由下往上\`

4. 在\`main.js\`裡新增：
\`\`\`js
import '../css/style.css'
\`\`\`
5. 在終端機執行： 
\`\`\`bash
$ npm run start
\`\`\`
\`\`\`markdown
you project
├─── dist/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
## 將css以獨立方式帶入html

1. 安裝\`mini-css-extract-plugin\`套件
\`\`\`bash
$ npm i mini-css-extract-plugin -D
\`\`\`

2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //引入套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //將原本style-loader替換掉，改用<link>方式引入html
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css' //定義要輸出的名稱
        })
    ]
}
\`\`\`

3. 在終端機執行： 
\`\`\`bash
$ npm run start
\`\`\`

-----------------------------------------------
## 編譯scss檔案並將樣式帶入html

1. 安裝\`sass\`、\`sass-loader\`、\`postcss\`、\`postcss-loader\`、\`postcss-preset-env\`、
\`\`\`bash
$ npm i sass sass-loader postcss postcss-loader postcss-preset-env -D
\`\`\`

2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.scss$/, //將原本css替換掉，改成scss檔
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', //使用postcss套件
                        options: {
                            postcssOptions:{
                                plugins:[
                                    ['postcss-preset-env'] //包含autoprefixer
                                ]
                            }
                        }
                    },
                    'sass-loader' //先編譯scss
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css' //定義要輸出的名稱
        })
    ]
}
\`\`\`

3. 建立\`scss\`資料夾結構，並在裡面新增\`style.scss\`檔，簡單寫一些樣式：
\`\`\`scss
body{
    background-color: red;
}

::placeholder{
    display: flex;
    flex: 1 1 auto;
    transform: translateX(-30px);
}
\`\`\`

4. 修改\`main.js\`裡的樣式路徑：
\`\`\`js
import '../scss/style.scss'
\`\`\`

5. 在終端機執行：
\`\`\`bash
$ npm run start
\`\`\`
\`\`\`markdown
you project
├─── dist/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── scss/ 
│           │
│           └── style.scss
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

6. 可以看到在\`dist\`裡的\`style.css樣式自動增加前綴
\`\`\`css
body {
  background-color: red;
}

/* 這段是自動增加的 */
::-moz-placeholder { 
  display: flex;
  flex: 1 1 auto;
  transform: translateX(-30px);
}

::placeholder {
  display: flex;
  flex: 1 1 auto;
  transform: translateX(-30px);
}
\`\`\`

-----------------------------------------------
## 若要使用bootstrap(5.3.3)

1. 安裝\`bootstrap\`套件:
    * \`bootstrap\`是css樣板套件
    * \`@popperjs/core\`是bootstrap定位套件
\`\`\`bash
$ npm i bootstrap @popperjs/core
\`\`\`

2. 快速取用\`bootstrap\`方法，是直接在\`main.js\`引入：
\`\`\`js
import '../../node_modules/bootstrap/scss/bootstrap.scss'; //bootstrap核心
import '../scss/style.scss'; //自定義樣式
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; //bootstrap定位套件
\`\`\`

3. 自訂\`bootstrap\`方法，在scss裡的\`style.scss\`引入：
\`\`\`scss
//bootstrap
@import "../../node_modules/bootstrap/scss/functions";

//自訂義變數
@import "custom-variables"; //從bootstrap/scss/variables複製過來到本地端修改(切記要刪掉最後的import以免出跳錯)

//bootstrap
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/variables-dark";
@import "../../node_modules/bootstrap/scss/maps";
@import "../../node_modules/bootstrap/scss/mixins";
@import "../../node_modules/bootstrap/scss/utilities";
@import "../../node_modules/bootstrap/scss/root";
@import "../../node_modules/bootstrap/scss/reboot";
@import "../../node_modules/bootstrap/scss/type";
@import "../../node_modules/bootstrap/scss/images";
@import "../../node_modules/bootstrap/scss/containers";
@import "../../node_modules/bootstrap/scss/grid";
@import "../../node_modules/bootstrap/scss/tables";
@import "../../node_modules/bootstrap/scss/forms";
@import "../../node_modules/bootstrap/scss/buttons";
@import "../../node_modules/bootstrap/scss/transitions";
@import "../../node_modules/bootstrap/scss/dropdown";
@import "../../node_modules/bootstrap/scss/button-group";
@import "../../node_modules/bootstrap/scss/nav";
@import "../../node_modules/bootstrap/scss/navbar";
@import "../../node_modules/bootstrap/scss/card";
@import "../../node_modules/bootstrap/scss/accordion";
@import "../../node_modules/bootstrap/scss/breadcrumb";
@import "../../node_modules/bootstrap/scss/pagination";
@import "../../node_modules/bootstrap/scss/badge";
@import "../../node_modules/bootstrap/scss/alert";
@import "../../node_modules/bootstrap/scss/progress";
@import "../../node_modules/bootstrap/scss/list-group";
@import "../../node_modules/bootstrap/scss/close";
@import "../../node_modules/bootstrap/scss/toasts";
@import "../../node_modules/bootstrap/scss/modal";
@import "../../node_modules/bootstrap/scss/tooltip";
@import "../../node_modules/bootstrap/scss/popover";
@import "../../node_modules/bootstrap/scss/carousel";
@import "../../node_modules/bootstrap/scss/spinners";
@import "../../node_modules/bootstrap/scss/offcanvas";
@import "../../node_modules/bootstrap/scss/placeholders";
@import "../../node_modules/bootstrap/scss/helpers";
@import "../../node_modules/bootstrap/scss/utilities/api";

//自訂樣式
@import "custom"
\`\`\`

4. 重要補充：如果\`sass\`出現，關於變數等等的警告錯誤，請將\`sass\`版本降低到\`@1.77.6\`：

\`More info: https://sass-lang.com/d/color-functions\`

\`More info: https://sass-lang.com/d/mixed-decls\`
\`\`\`bash
$ npm i sass@1.77.6
\`\`\``,__vite_glob_0_103=Object.freeze(Object.defineProperty({__proto__:null,default:Webpack__SCSS________Bootstrap},Symbol.toStringTag,{value:"Module"})),Webpack_____________=`---
title: Webpack複製檔案+自動壓縮圖片
date: 2024-05-04
tags: ["Webpack"]
---
## 單純複製檔案

1. 安裝\`copy-webpack-plugin\`套件
\`\`\`bash
$ npm i copy-webpack-plugin -D
\`\`\`

2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); //引用套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns:[
                //from是來源路徑，to是輸出路徑
                { from: path.resolve(__dirname,'src/images/favicon') ,to: 'images/favicon' }, 
                { from: path.resolve(__dirname,'src/fonts') ,to: 'fonts' }
            ],
        }),
    ],
}
\`\`\`
\`from是來源路徑，to是輸出路徑，統一使用物件方式包裹\`

3. 在\`src\`底下新增\`images/favicon\`和\`fonts\`：
\`\`\`markdown
you project
├─── node_modules/        
├─── src/
│     │
│     ├──── fonts/ 
│     │
│     └──── images/ 
│            │
│            └── favicon/
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

4. 在終端機執行：
\`\`\`bash
$ npm run start
\`\`\`

5. 可以發現資料夾被複製到\`dist\`底下：
\`\`\`markdown
you project
├─── dist/
│     │
│     ├──── fonts/ 
│     │
│     └──── images/ 
│            │
│            └── favicon/
│
├─── node_modules/        
├─── src/
│     │
│     ├──── fonts/ 
│     │
│     └──── images/ 
│            │
│            └── favicon/
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
\`此時images裡的檔案(除了favicon)並不會被複製，因為沒有為該路徑進行複製\`

-----------------------------------------------
## 自動壓縮圖片處理

1. 安裝\`image-webpack-loader\`套件：
\`\`\`bash
$ npm i image-webpack-loader -D
\`\`\`

2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module:{
        rules: [
            {
                test: /\\.(gif|png|jpe?g|svg|webp)$/i, //找尋gif、png、jpeg、jpg、svg、webp副檔名的檔案(正規表達式)
                type: 'asset/resource', //此webpack複製檔案方法
                generator:{
                    filename: 'images/[name][ext]', //輸出的檔名跟輸入時一樣，若不設定則會自動亂數
                },
                use: [
                    {
                        loader: 'images-webpack-loader',
                        options:{
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65,0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp:{
                                quality: 75,
                            }
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns:[
                { from: path.resolve(__dirname,'src/images/favicon') ,to: 'images/favicon' },
                { from: path.resolve(__dirname,'src/fonts') ,to: 'fonts' }
            ],
        }),
    ],
}
\`\`\`

3. 到main.js將圖片全部引入：
\`\`\`js
function importAll(r){
    r.keys().forEach(r);
}
importAll(require.context('../images',false,/\\.(gif|png|jpe?g|svg|webp)$/i));
\`\`\`
\`此時images裡的檔案會成功的複製，並且經過壓縮處理\``,__vite_glob_0_104=Object.freeze(Object.defineProperty({__proto__:null,default:Webpack_____________},Symbol.toStringTag,{value:"Module"})),Webpack__JS_______jQuery=`---
title: Webpack自動轉譯JS版本+全域引用jQuery
date: 2024-05-03
tags: ["Webpack","jQuery"]
---
## 轉譯js

1. 安裝套件\`babel-loader\`和\`@babel/core\`和\`@babel/preset-env\`套件
    * \`babel-loader\`是webpack的loader套件
    * \`@babel/core\`調用babel的api編譯
    * \`@babel/preset-env\`可以使用最新版本的javascript去編譯
\`\`\`bash
$ npm i babel-loader @babel/core @babel/preset-env -D
\`\`\`

2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.js$/, //找尋js副檔名的檔案(正規表達式)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                }
            }
        ]
    }
}
\`\`\`

3. 在\`src\`底下新增\`all.js\`檔，並在檔案裡隨便寫一些程式：
\`\`\`js
const greet = (name = 'Jack') => {
    return \`Hello, \${name}!\`;
};
\`\`\`
\`\`\`markdown
you project
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └──── js/ 
│           │
│           ├── main.js
│           │
│           └── all.js //新增一支js檔
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

4. 在\`main.js\`引入這支\`all.js\`檔：
\`\`\`js
import './all.js';
\`\`\`

5. 在終端機執行：
\`\`\`bash
$ npm run start
\`\`\`
\`\`\`markdown
you project
├─── dist/
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └──── js/ 
│           │
│           ├── main.js
│           │
│           └── all.js //新增一支js檔
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

6. 可以在編譯出來的\`dist\`檔底下的\`main.js\`看到轉譯的結果：
\`\`\`js
eval("var greet = function greet() {\\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Jack';\\n  return \\"Hello, \\".concat(name, \\"!\\");\\n};\\n\\n//# sourceURL=webpack:///./src/js/all.js?");
\`\`\`

-----------------------------------------------
## 若要使用jquery

1. 安裝套件\`jquery\`：
\`\`\`bash
$ npm i jquery
\`\`\`

2. 在\`main.js\`引用：
\`\`\`js
import '../../node_modules/jquery.min.js'
\`\`\`

3. 在\`webpack.config.js\`新增：
\`\`\`js
const webpack = require('webpack'); //引用webpack-cli內的工具
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.js$/, //找尋js副檔名的檔案(正規表達式)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //全域設置$變數
            $: 'jquery',
            jquery: 'jquery',
            'window.jquery': 'jquery'
        })
    ]
}
\`\`\`

4. 測試\`jquery\`有沒有載入成功，可以在先前的\`all.js\`：
\`\`\`js
$(document).ready(function(){
    $("body").css('backgroundColor','red')
})
\`\`\`

5. 再次終端機執行：
\`\`\`bash
$ npm run start
\`\`\`

6. 如果頁面整個有成功變成\`紅色\`，表示成功。
`,__vite_glob_0_105=Object.freeze(Object.defineProperty({__proto__:null,default:Webpack__JS_______jQuery},Symbol.toStringTag,{value:"Module"})),Webpack_________SourceMap__=`---
title: Webpack開發環境設置+SourceMap生成
date: 2024-05-05
tags: ["Webpack"]
---
## 開發環境設置

1. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        compress: true, //啟用gzip壓縮方式(加速)
        hot: true, //只重新加載修改的部分
        watchFiles: ['src/**/*'] //監控檔案
    }
}
\`\`\`

-----------------------------------------------
## 自動生成map檔

1. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        compress: true,
        hot: true,
        watchFiles: ['src/**/*']
    },
    devtool: 'source-map' //自動生成sourceMap檔
}
\`\`\``,__vite_glob_0_106=Object.freeze(Object.defineProperty({__proto__:null,default:Webpack_________SourceMap__},Symbol.toStringTag,{value:"Module"})),html____=`---
title: html樣式綁定
date: 2024-12-14
tags: ["Vue3"]
---
## 將樣式寫在style (行內寫法)
\`\`\`html
<div id="app">
  <p :style="{backgroundColor:'red'}">蘋果</p>
</div>
\`\`\`
### 多值寫法：
\`\`\`html
<div id="app">
  <p :style="{backgroundColor:'red',color:'white'}">蘋果</p>
</div>
\`\`\`

-----------------------------------------------
## 將樣式寫在style (物件寫法)
\`\`\`html
<div id="app">
  <p :style="bgRed">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red'
        }
    }
  }
}).mount("#app");
\`\`\`
### 多值寫法：
\`\`\`html
<div id="app">
  <p :style="bgRed">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red',
          color: 'white'
        }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 將樣式寫在style (陣列寫法)
\`\`\`html
<div id="app">
  <p :style="[bgRed,textWhite]">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red',
        },
        textWhite :{
          color: 'white'
        }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 將樣式寫在class (行內寫法)
\`\`\`html
<div id="app">
  <p :class="{'bgRed': true}">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
\`\`\`
### 多值寫法：
\`\`\`html
<div id="app">
  <p :class="{'bgRed': true,'textWhite': true}">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`

-----------------------------------------------
## 將樣式寫在class (判斷值)
\`\`\`html
<div id="app">
  <p :class="{'bgRed': bgRedClass,'textWhite': textWhiteClass}">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRedClass: true,
        textWhiteClass: false
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 將樣式寫在class (物件寫法)
\`\`\`html
<div id="app">
  <p :class="objClass">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      objClass:{
        bgRed: true,
        textWhite: false
      }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 將樣式寫在class (陣列寫法)
\`\`\`html
<div id="app">
  <p :class="ArrClass">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      ArrClass:[
        'bgRed','textWhite'
      ]
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_107=Object.freeze(Object.defineProperty({__proto__:null,default:html____},Symbol.toStringTag,{value:"Module"})),input_______=`---
title: input表單常用修飾符
date: 2026-01-22
tags: ["Vue3"]
---
## 事件修飾符
1. 當按鈕包覆在form底下又沒有定義\`type\`型別的時候預設會是\`submit\`
2. 按下\`submit\`之後頁面會跳轉，如果要取消就可以加上\`事件修飾符\`如下：

\`\`\`vue
<template>
  <form action="" @submit.prevent="submitForm">
      <input type="text" placeholder="測試輸入框">
      <button >送出表單</button>
  </form>
</template>

<script setup>
const submitForm = () => {
    console.log('表單已送出');
};
<\/script>
\`\`\`
### 延伸：
如果想要在\`form\`表單內使用\`enter\`鍵當作送出，不用再加上\`@keydown.enter\`，因為\`form\`裡的\`input\`預設就是\`enter\`按鈕送出
\`\`\`vue
<template>
  <form action="" @submit.prevent="submitForm">
      <input type="text"/>
  </form>
</template>

<script setup>
const submitForm = () => {
    console.log('表單已送出');
};
<\/script>
\`\`\`

-----------------------------------------------
## 按鍵修飾符
可以針對鍵盤上的某一個按件鍵進行綁定

\`\`\`vue
<template>
  <input type="text" placeholder="測試輸入框" @keydown.enter="handleEnter"/>
</template>

<script setup>
const handleEnter = () => {
  console.log('你按下了Enter鍵');
};
<\/script>
\`\`\`

-----------------------------------------------
## 延遲
當輸入框在做驗證綁定時，有時不希望每輸入一個值就馬上被驗證
此時可以在\`v-model\`後方加上\`.lazy\`，這樣就可以在離開該\`input\`時才同步

\`\`\`vue
<template>
  <input type="text" v-model.lazy="messageText">
  {{ messageText }}
</template>

<script setup>
import { ref } from 'vue';
const messageText = ref("");
<\/script>
\`\`\`

-----------------------------------------------
## 去掉首尾多餘空白
為避免使用者前後多加上\`空白\`而被當作字元，可以使用\`.trim\`來做處理

\`\`\`vue
<template>
  <input type="text" v-model.trim="messageText">
  {{ messageText }}
</template>

<script setup>
import { ref } from 'vue';
const messageText = ref("");
<\/script>
\`\`\`

-----------------------------------------------
## 強制number型別
在\`input\`裡輸入的任何值預設都是\`字串\`，\`.number\`可以直接將\`數字\`轉型成\`number\`

\`\`\`vue
<template>
  <input type="text" v-model.number="messageText">
  {{ messageText }}
  {{ typeof messageText }}
</template>

<script setup>
import { ref } from 'vue';
const messageText = ref("");
<\/script>
\`\`\``,__vite_glob_0_108=Object.freeze(Object.defineProperty({__proto__:null,default:input_______},Symbol.toStringTag,{value:"Module"})),jQuery___=`---
title: jQuery判斷式
date: 2024-02-05
tags: ["jQuery"]
---
## 多種判斷式
\`\`\`html
<ul class="menu">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
  <li>芭樂</li>
</ul>
<p>價錢：<span class="item-price"></span></p>
\`\`\`
\`\`\`js
$("li").click(function(){

  //抓取元素的文字
  let targetName = $(this).text();

  //判斷文字是否為“蘋果”
  if( targetName == "蘋果" ){

    $(".item-price").text("$20");

  //判斷文字是否為“香蕉”
  }else if( targetName == "香蕉" ){

    $(".item-price").text("$18");

  //判斷文字是否為“鳳梨”
  }else if( targetName == "鳳梨" ){

    $(".item-price").text("$23");

  //若以上都不是就...
  }else{

    $(".item-price").text("賣完囉");

  }
});
\`\`\``,__vite_glob_0_109=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery___},Symbol.toStringTag,{value:"Module"})),jQuery______$2=`---
title: jQuery加入聲音效果
date: 2024-03-01
tags: ["jQuery"]
---
## 音樂播放按鈕
\`\`\`html
<button type="button" id="btn-play">點擊播放音樂</button>
\`\`\`
\`\`\`js
var button_audio = new Audio("網址");

$("#btn-play").click(function(){
  button_audio.play();
});
\`\`\``,__vite_glob_0_110=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery______$2},Symbol.toStringTag,{value:"Module"})),jQuery_______$1=`---
title: jQuery實作數量選擇器
date: 2024-02-06
tags: ["jQuery"]
---
## 數量選擇器
\`\`\`html
<button type="button" class="reduce">－</button>
<span>0</span>
<button type="button" class="add">＋</button>
\`\`\`
\`\`\`js
//數量初始值
let num = 0;

$(".reduce").click(function(){
  //每次點擊數量-1，num = num - 1;
  num-=1;
  $("span").text(num);
});

$(".add").click(function(){
  //每次點擊數量+1，num = num + 1;
  num+=1;
  $("span").text(num);
});
\`\`\``,__vite_glob_0_111=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery_______$1},Symbol.toStringTag,{value:"Module"})),jQuery__________=`---
title: jQuery實作滾動頁面頁籤變換
date: 2024-02-08
tags: ["jQuery"]
---
## 實作滾動頁面頁籤變換
\`\`\`html
<ul class="nav">
  <li class="nav-item">
    <!--用a連結href-->
    <a class="nav-link" href="#about">關於我們</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#works">作品介紹</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contact">聯絡我們</a>
  </li>
</ul>

<!--在區段設id-->
<section id="about">
...
</section>
<section id="works">
...
</section>
<section id="contact">
...
</section>
\`\`\`
\`\`\`js
$(".nav-link").click(function(event){

  //阻止默認的錨點跳轉行為
  event.preventDefault();

  //抓取點擊連結的href
  let target = $(this).attr("href");

  $("html,body").animate({
    scrollTop: $(target).offset().top
  },600);

});
\`\`\``,__vite_glob_0_112=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery__________},Symbol.toStringTag,{value:"Module"})),jQuery____________$1=`---
title: jQuery實作點擊錨點滑動至該區塊
date: 2024-02-07
tags: ["jQuery"]
---
## 點擊錨點滑動至該區塊
\`\`\`html
<ul class="nav">
  <li class="nav-item">
    <!--用a連結href-->
    <a class="nav-link" href="#about">關於我們</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#works">作品介紹</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contact">聯絡我們</a>
  </li>
</ul>

<!--在區段設id-->
<section id="about">
...
</section>
<section id="works">
...
</section>
<section id="contact">
...
</section>
\`\`\`
\`\`\`js
$(".nav-link").click(function(event){

  //阻止默認的錨點跳轉行為
  event.preventDefault();

  //抓取點擊連結的href
  let target = $(this).attr("href");

  $("html,body").animate({
    scrollTop: $(target).offset().top
  },600);

});
\`\`\``,__vite_glob_0_113=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery____________$1},Symbol.toStringTag,{value:"Module"})),jQuery______$1=`---
title: jQuery抓取滑鼠事件
date: 2024-02-02
tags: ["jQuery"]
---
## 滑鼠點擊事件
\`\`\`html
<button type="button">按鈕</button>
\`\`\`
\`\`\`js
//當滑鼠點擊一次時
$("button").click(function(){
  $(this).css("background-color","red");
});

//當滑鼠連續點擊兩時
$("button").dblclick(function(){
  $(this).css("background-color","red");
});

//當滑鼠點下去時
$("button").mousedown(function(){
  $(this).css("background-color","red");
});

//當滑鼠下去後又放開時
$("button").mouseup(function(){
  $(this).css("background-color","");
});
\`\`\`

-----------------------------------------------
## 滑鼠移入、移出事件
\`\`\`html
<button type="button">按鈕</button>
\`\`\`
\`\`\`js
//當滑鼠移入時
$("button").mouseenter(function(){
  $(this).css("background-color","red");
});

//當滑鼠離開時
$("button").mouseleave(function(){
  $(this).css("background-color","");
});

//當滑鼠移入和離開時
$("button").hover(
  function() {
    $(this).css("background-color", "red"); 
  },
  function() {
    $(this).css("background-color", ""); 
  }
);
\`\`\`

-----------------------------------------------
## 切換選單
\`\`\`html
<select>
  <option value="蘋果">蘋果</option>
  <option value="香蕉">香蕉</option>
  <option value="鳳梨">鳳梨</option>
</select>
<p></p>
\`\`\`
\`\`\`js
$("select").change(function(e){
  //<p>顯示選單的值
  $("p").text(e.target.value);
});
\`\`\`

-----------------------------------------------
## 輸入框事件
\`\`\`js
//焦點所在時
$("input").focus(function(){
  $(this).css("outline","solid 5px green");
});

//離開焦點
$("input").blur(function(){
  $(this).css("outline","solid 5px red");
});
\`\`\`

-----------------------------------------------
## 取得游標位置
\`\`\`js
$(document).mousemove(function(e){
  console.log(e.screenX); //距離 整個瀏覽器視窗 X軸
  console.log(e.screenY); //距離 整個瀏覽器視窗 Y軸
  console.log(e.pageX); //距離 整個html,body X軸
  console.log(e.pageY); //距離 整個html,body Y軸
  console.log(e.clientX); //距離 整個螢幕裝置 X軸
  console.log(e.clientY); //距離 整個螢幕裝置 Y軸
});
\`\`\`

-----------------------------------------------
## 用圖片替代游標樣式
\`\`\`html
<div class="cursor">
  <img src="images/mouseImg.png">
</div>
\`\`\`
\`\`\`css
html,body{
  cursor: none;
}
.cursor{
  position: fixed;
}
\`\`\`
\`\`\`js
$(document).mousemove(function(event){
  let x = event.clientX;
  let y = event.clientY;
  $(".cursor").css({
    left: x + "px",
    top: y +"px"
  })
});
\`\`\`

-----------------------------------------------
## 經過特定時間後執行
\`\`\`html
<p>五秒後可關閉廣告<button class="cross" style="display: none">Ｘ</button></p>
\`\`\`
\`\`\`js
setTimeout(function(){
  $(".cross").show();
},5000);
\`\`\`
\`setTimeout(動作,幾毫秒);\`

-----------------------------------------------
## 每經過特定時間後執行一次
\`\`\`html
<p>自動登出計時<span class="time">300</span></p>
\`\`\`
\`\`\`js
let nowTime = 300;
setInterval(function(){
  nowTime = nowTime - 1; 
  $(".time").text(nowTime);
},1000);
\`\`\`
\`setInterval(動作,幾毫秒);\`

-----------------------------------------------
## 倒數計時
\`\`\`html
<p>自動登出計時<span class="time">300</span></p>
\`\`\`
\`\`\`js
let nowTime = 300;
setInterval(function(){
  nowTime = nowTime - 1; 
  $(".time").text(nowTime);
},1000);
\`\`\`
\`setInterval(動作,幾毫秒);\`

-----------------------------------------------
## 暫停作用中效果
\`\`\`js
$("button").click(function(){
  $(".box").stop().sligeToggle(5000);
});
\`\`\`
\`若toggle在展開時點擊，會直接收合\`

-----------------------------------------------
## 取消預設行為事件
\`\`\`html
<a class="link" href="www.google.com">連結</a>
\`\`\`
\`\`\`js
$(".link").click(function(){
  event.preventDefault();//取消原本會連到google事件
});
\`\`\``,__vite_glob_0_114=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery______$1},Symbol.toStringTag,{value:"Module"})),jQuery______=`---
title: jQuery抓取鍵盤事件
date: 2024-02-01
tags: ["jQuery"]
---
## 使用鍵盤事件來改變狀態
當我按鍵盤\`z\`鍵時，對應的\`ascii\`碼是\`90\`
\`\`\`html
<div class="box"></div>
\`\`\`
\`\`\`css
.box{
  width: 30px;
  height: 30px;
  background-color: #ccc;
}
\`\`\`
\`\`\`js
//按下鍵盤的那個剎那
$(window).keydown(function(event){
  if(event.which == 90){
    $('.box').css('background-color', 'red');
  }
});

//只會針對可以輸出文字符號的按鍵有效
$(window).keypress(function(event){
  if(event.which == 90){
    $('.box').css('background-color', 'green');
  }
});

//指放開鍵盤的那個剎那
$(window).keyup(function(event){
  if(event.which == 90){
    $('.box').css('background-color', 'blue');
  }
});
\`\`\`
\`event.which跟event.keyCode是一樣的，但是event.keyCode寫法較舊，event.which比較標準化\`

-----------------------------------------------
## ascii碼鍵盤對應表
|字母|鍵碼值|字母|鍵碼值|字母|鍵碼值|字母|鍵碼值|
|---|---|---|---|---|---|---|---|
| a | 97  | A | 65  | 1  | 49  | Enter | 13 |
| b | 98  | B | 66  | 2  | 50  | 倒退鍵 | 8 |
| c | 99  | C | 67  | 3  | 51  | Ctrl | 17 |
| d | 100 | D | 68  | 4  | 52  | Esc  | 27 |
| e | 101 | E | 69  | 5  | 53  | Delete | 46 |
| f | 102 | F | 70  | 6  | 54  | Alt | 18 |
| g | 103 | G | 71  | 7  | 55  | Tab | 9 |
| h | 104 | H | 72  | 8  | 56  | Shift | 16 |
| i | 105 | I | 73  | 9  | 57  | 空白鍵 | 32 |
| j | 106 | J | 74  | 0  | 48  | / | 191 |
| k | 107 | K | 75  | F1 | 112 | > | 190 |
| l | 108 | L | 76  | F2 | 113 | < | 189 |
| m | 109 | M | 77  | F3 | 114 | ' | 222 |
| n | 110 | N | 78  | F4 | 115 | ; | 186 |
| o | 111 | O | 79  | F5 | 116 | ] | 221 |
| p | 112 | P | 80  | F6 | 117 | [ | 219 |
| q | 113 | Q | 81  | F7 | 118 | = | 187 |
| r | 114 | R | 82  | F8 | 119 | - | 189 |
| s | 115 | S | 83  | F9 | 120 | \` | 192 |
| t | 116 | T | 84  | F10| 121 |  |  |
| u | 117 | U | 85  | F11| 122 |  |  |
| v | 118 | V | 86  | F12| 123 |  |  |
| w | 119 | W | 87  | 左鍵| 37 |  |  |
| x | 120 | X | 88  | 上鍵| 38 |  |  |
| y | 121 | Y | 89  | 右鍵| 39 |  |  |
| z | 122 | Z | 90  | 下鍵| 40 |  |  |

-----------------------------------------------
## 讓ascii碼轉回字母
\`\`\`html
<p>90</p>
\`\`\`
\`\`\`js
$("p").text(String.fromCharCode(90));
\`\`\`
### 輸出結果：
\`\`\`html
<p>Z</p>
\`\`\``,__vite_glob_0_115=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery______},Symbol.toStringTag,{value:"Module"})),jQuery_JS___CSS______=`---
title: jQuery用JS+CSS實作常用元件
date: 2024-02-09
tags: ["jQuery"]
---
## 漢堡選單
\`\`\`html
<div class="header">
  <ul class="menu">
      <li><a href="#">選單一</a></li>
      <li><a href="#">選單二</a></li>
      <li><a href="#">選單三</a></li>
      <li><a href="#">選單四</a></li>
  </ul>
  <a class="menuicon" href="#">選單按鈕</a>
</div>
\`\`\`
\`\`\`css
.header{
  height: 80px;
}
.menu{
  float: right;
}
.menu li{
  float: left;
}
.menuicon{
  display: none;
}
.show{
    max-height: 600px; /*選單展開高度*/
}
@media (max-width:768px){
  .menu{
    max-height: 0px; /*選單關閉高度*/
    overflow: hidden; /*讓文字也隱藏*/
    position: absolute;
    top: 80px; /*從header下面開始出現*/
    left: 0; /*左右兩邊滿版*/
    right: 0; /*左右兩邊滿版*/
    z-index: 100;
    transition: max-height 2s; /*動態效果*/
  }
  .menu li{
    float: none;
  }
  .menuicon{
    display: block;
  }
  .show{
    max-height: 800px;
  }
}
\`\`\`
\`\`\`js
$(".menuicon").click(function(){
  e.preventDefault();
  $(".menu").toggleClass("show");
});
\`\`\`

-----------------------------------------------
## 側邊選單(Offcanvas)
1. 最外層容器max-width
2. 右側內容width給%寬度
3. 右側內容用margin-left向左推選單寬度
\`\`\`html
<a class="menuicon" href="#">選單按鈕</a>
<aside>
  <a class="close" href="#">X</a>
  <ul class="menu">
    <li><a href="#">選單一</a></li>
    <li><a href="#">選單二</a></li>
    <li><a href="#">選單三</a></li>
    <li><a href="#">選單四</a></li>
  </ul>
</aside>
\`\`\`
\`\`\`css
aside{
  position: absolute;
  width: 300px; /*固定寬，避免內容被壓縮*/
  top: 0;
  bottom: 0;
  transform: translate(-300px);
  transition: 1s;
}
.show{
  transform: translate(0px);
}
\`\`\`
\`\`\`js
$(".menuicon").click(function(){
  event.preventDefault();
  $("aside").addClass("show");
});
$(".close").click(function(){
  event.preventDefault();
  $("aside").removeClass("show");
});
\`\`\`

-----------------------------------------------
## 簡易QA選單效果
\`\`\`html
<ul class="menu">
  <li>項目一
      <a>連結一</a>
  </li>
  <li>項目二
      <a>連結二</a>
  </li>
  <li>項目三
      <a>連結三</a>
  </li>
</ul>
\`\`\`
\`\`\`css
a{
  display: none;
}
\`\`\`
\`\`\`js
$(".menu li").click(function(){
  $(this).find("a").slideToggle();
  $(this).siblings().find("a").slideUp();
});
\`\`\`
\`只有點擊的a連結展開，再次點擊收闔，其他連結也收闔\`

-----------------------------------------------
## 彈跳視窗(監聽事件)
\`\`\`html
<a>連結一</a>
<div class="box"></div>
\`\`\`
\`\`\`js
$("body").on("click","a",function(){//.on("觸發事件","選擇器")
  alert();
});
$(".box").html("<a>連結二</a>");
\`\`\`
\`.on()不論程式碼先後順序全部都可以監聽\`

-----------------------------------------------
## 刪除選單
\`\`\`html
<ul class="menu">
  <li>項目一<span>X</span></li>
  <li>項目二<span>X</span></li>
  <li>項目三<span>X</span></li>
</ul>
\`\`\`
\`\`\`js
$(".menu li span").click(function(){
  $(this).parent().remove();
});
\`\`\`
\`點擊X，刪除該項目\`

-----------------------------------------------
## 回到頂端
\`\`\`html
<a href="#">UP</a>
\`\`\`
\`\`\`css
a{
  position: fixed;
  right: 0;
  bottom: 0;
}
\`\`\`
\`\`\`js
$("a").click(function(){
  event.preventDefault();
  $("html,body").animate({//對整個頁面
    scrollTop:0 
  },800);//花0.8秒
});
\`\`\`

-----------------------------------------------
## 滾動至錨點
\`\`\`html
<ul class="menu">
  <li><a href="#one">連結一</a></li>
  <li><a href="#two">連結二</a></li>
  <li><a href="#three">連結三</a></li>
</ul>
<section id="one">第一部分</section>
<section id="two">第二部分</section>
<section id="three">第三部分</section>
\`\`\`
\`\`\`js
$("a").click(function(e){
    e.preventDefault();
    var target = $(this).attr("href"); //找出a連結對應到的id
    var targetPos = $(target).offset().top; //該id當前視窗的相對頂部
    $("html,body").animate({scrollTop:targetPos},3000);
});
\`\`\`
\`<a href="先對應到">，<section id="這裡">\`

-----------------------------------------------
## 滾動視窗到章節處出現效果
\`\`\`html
<section id="one" data-color="yellow">第一部分</section>
<section id="two" data-color="green">第二部分</section>
<section id="three" data-color="blue">第三部分</section>
\`\`\`
\`\`\`css
section{
  height: 1000px;
  transition: 1s;
  background-color: red;
}
\`\`\`
\`\`\`js
$(window).scroll(function(){
  var twoPos = $("#two").position().top; //抓取第二部分的高度
  var scrollTop = $(window).scrollTop(); //抓取視窗滾動的距離
  var windowHeight = $(window).height(); //抓取視窗的高度
  if (twoPos <= (scrollTop + windowHeight / 2 )){
    $("section").each(function(){ //同時抓取每個section
      var dataColor = $(this).data("color"); //讀出每個裡面的data值
      $(this).css("background-color",dataColor); //將data值顯示在樣式上
    })
  }
});
\`\`\`

-----------------------------------------------
## 滾動視窗到章節處出現淡入效果
\`\`\`html
<section id="one">第一部分</section>
<section id="two">第二部分
  <div class="box animated"></div>
</section>
<section id="three">第三部分</section>
\`\`\`
\`\`\`css
section{
  height: 1000px;
}
.box{
  width: 30px;
  height: 30px;
  background-color: red;
}
.animated{
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s;
}
.fadeIn{
  opacity: 1;
  transform: translateY(0px);
}
\`\`\`
\`\`\`js
$(window).scroll(function(){
  $(".animated").each(function(){
    var thisPos = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(thisPos)
    if((windowHeight + scrollTop) >= thisPos){
      $(this).addClass("fadeIn");
    }
  })
});
\`\`\`

-----------------------------------------------
## 滾動背景錯動
\`\`\`html
<section id="one">第一部分</section>
<section id="two">第二部分</section>
<section id="three">第三部分</section>
\`\`\`
\`\`\`css
#two{
  height: 1000px;
  background-image: url("https://picsum.photos/1000/1000.jpg")
}
#three{
  height: 1000px;
  background-image: url("https://picsum.photos/1000/1000.jpg")
}
\`\`\`
\`\`\`js
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  $("#two").css('background-position-y', (scrollTop / 2) + 'px');
  $("#three").css('transform','translateY(' + (scrollTop / 2) + 'px)');
});
\`\`\``,__vite_glob_0_116=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery_JS___CSS______},Symbol.toStringTag,{value:"Module"})),jQuery_______=`---
title: jQuery處理物件與陣列
date: 2024-02-04
tags: ["jQuery"]
---
## 陣列資料格式
\`\`\`js
//陣列型式1
var menu = [];
menu[0] = "蘋果";
menu[1] = "香蕉";
menu[2] = "鳳梨";

//陣列型式2
var menu = ["蘋果","香蕉","鳳梨"];
\`\`\`

-----------------------------------------------
## 將陣列資料塞進html
\`\`\`html
<ul id="menu"></ul>
\`\`\`
\`\`\`js
var menu = ["蘋果","香蕉","鳳梨"];

//基礎寫法
$("#menu").append("<li>"+menu[0]+"</li>");
$("#menu").append("<li>"+menu[1]+"</li>");
$("#menu").append("<li>"+menu[2]+"</li>");

//for迴圈寫法
for(var i=0;i<3;i++){
  $("#menu").append("<li>"+menu[i]+"</li>");
}
\`\`\`
### 編譯結果：
\`\`\`html
<ul id="menu">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`for(從第幾個開始,到第幾個結束,每一次要間隔多少)\`

-----------------------------------------------
## 物件資料格式
\`\`\`js
//物件型式1
var shop = {};
shop.name = "瑞春水果店";
shop.addr = "高雄市五甲路";
shop.phone = "07 1234567";

//物件型式2
var shop = {
  name: "瑞春水果店",
  addr: "高雄市五甲路",
  phone: "07 1234567"
}
\`\`\`

-----------------------------------------------
## 列印物件所有資料
\`\`\`html
<ul id="shop"></ul>
\`\`\`
\`\`\`js
var shop = {
  name: "瑞春水果店";
  addr: "高雄市五甲路";
  phone: "07 1234567";
  menu: ["蘋果","香蕉","鳳梨"];
}

$("#shop").append("<li>"+shop.name+"</li>");
$("#shop").append("<li>"+shop.addr+"</li>");
$("#shop").append("<li>"+shop.phone+"</li>");

//傳統寫法
var html_menu = "";
html_menu+= "<ul>";
for(var i=0 ; i<shop.menu.length ; i++){
  html_menu+= "<li>"+shop.menu[i]+"</li>";
}
html_menu+= "</ul>";
$("#shop").append("<li>商品菜單："+html_menu+"</li>");

//樣板字面值+map寫法
$("#shop").append(
  \`<li>商品菜單：<ul>\${shop.menu.map(item => \`<li>\${item}</li>\`).join('')}</ul></li>\`);
\`\`\``,__vite_glob_0_117=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery_______},Symbol.toStringTag,{value:"Module"})),jQuery____=`---
title: jQuery處理陣列
date: 2024-02-03
tags: ["jQuery"]
---
## 陣列資料格式
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];
console.log(fruits[0]); //蘋果
console.log(fruits[1]); //香蕉
console.log(fruits[2]); //鳳梨
console.log(fruits[3]); //蓮霧
\`\`\`

-----------------------------------------------
## 將陣列資料塞進html
\`\`\`html
<ul></ul>
\`\`\`
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];

//單行式寫法
$("ul").append("<li>蘋果</li>");
$("ul").append("<li>香蕉</li>");
$("ul").append("<li>鳳梨</li>");
$("ul").append("<li>蓮霧</li>");

//for迴圈寫法
for(let i=0 ; i<fruits.length ; i++){
  $("ul").append("<li>"+ fruits[i] +"</li>");
}

//forEach寫法
fruits.forEach(function(fruit){
  $("ul").append("<li>" + fruit + "</li>")
});
\`\`\`
### 編譯結果：
\`\`\`html
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
  <li>蓮霧</li>
</ul>
\`\`\`
\`for(從第幾個開始,到第幾個結束,每一次要間隔多少)\`

-----------------------------------------------
## 新增資料(push)
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];

fruits.push("榴槤");

console.log(fruits); //["蘋果","香蕉","鳳梨","蓮霧","榴槤"]
\`\`\`

-----------------------------------------------
## 新增資料2(push)
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];

fruits.push("榴槤","酪梨");

console.log(fruits); //["蘋果","香蕉","鳳梨","蓮霧","榴槤","酪梨"]
\`\`\``,__vite_glob_0_118=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery____},Symbol.toStringTag,{value:"Module"})),jQuery______________$1=`---
title: jQuery點擊事件+依層級抓取元素
date: 2024-01-26
tags: ["jQuery"]
---
## 找父層元素(parent、parents)
|語法|說明|
|---|---|
|.parent()|抓取父層|
|.parents()|抓取父層以外的全部|
|.parentUntil()|抓取父層以外的元素(但不包含括弧內的)|
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
//點擊<a>連結，對外層<li>作用
$(".nav-link").click(function(){
  $(this).parent().css("background-color","red");
});

//點擊<a>連結，對外層<li>、<ul>、<nav>、<body>、<html>作用
$(".nav-link").click(function(){
  $(this).parents().css("background-color","red");
});

//點擊<a>連結，對外層<li><ul>都作用
$(".nav-link").click(function(){
  $(this).parentsUntil("nav").css("background-color","red");
});
\`\`\`
\`.parents()會包括body、html\`

-----------------------------------------------
## 找子層元素(children、find)
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
//點擊<a>對<ul>底下的所有<li>作用
$(".nav-link").click(function(){
  $("ul").children().css("background-color","red");
});

//點擊<a>對<ul>底下的所有<a>作用
$(".nav-link").click(function(){
  $("ul").find(".nav-link").css("background-color","red");
});
\`\`\`
\`.find()可以找到孫層，但.children()只能找到子層\`

-----------------------------------------------
## 找同層元素(siblings)
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
//抓取<li>同層的其他<li>
$(".nav-link").click(function(){
  $(".nav-item").siblings().css("background-color","red");
});
\`\`\`

-----------------------------------------------
## 只有被點擊的那一項有效果，再點其他的效果取消
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
$(".nav-link").click(function(){
  $(this).css("background-color","red")
        .parent() //找到<li>
        .siblings() //找到自己以外的<li>
        .children() //底下的<a>
        .css("background-color","transparent");
});
\`\`\``,__vite_glob_0_119=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery______________$1},Symbol.toStringTag,{value:"Module"})),jQuery______________=`---
title: jQuery點擊事件+依順序抓取元素
date: 2024-01-25
tags: ["jQuery"]
---
## 直接點擊並作用自己
\`\`\`html
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`\`\`js
$("li").click(function(){
  $(this).css("background-color","red");
}); 
\`\`\`
\`只會對點擊的li進行作用，其他li則不影響\`

-----------------------------------------------
## 抓取「第一個」和「最後一個」元素
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`\`\`js
//抓取「第一個」蘋果
$("button").click(function(){
  $("li").first().css("background-color","red");
}); 

//抓取「最後一個」鳳梨
$("ul").click(function(){
  $("li").last().css("background-color","red");
});
\`\`\`
\`適合用在標籤都一樣的時候\`

-----------------------------------------------
## 抓取「下一個」和「上一個」元素
|語法|說明|
|---|---|
|.next()|指定下一個|
|.nextAll()|指定接下來的全部|
|.nextUntil()|指定到哪個元素為止(不包含括弧內的)|
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li class="apple">蘋果</li>
  <li class="banana">香蕉</li>
  <li class="pineapple">鳳梨</li>
  <li class="waxapple">蓮霧</li>
</ul>
\`\`\`
\`\`\`js
//抓取香蕉的「下一個」鳳梨
$("button").click(function(){
  $(".banana").next().css("background-color","red");
}); 

//抓取香蕉的「前一個」蘋果
$("button").click(function(){
  $(".banana").prev().css("background-color","red");
}); 

//抓取蘋果「之後的」全部
$("button").click(function(){
  $(".apple").nextAll().css("background-color","red");
}); 

//抓取鳳梨「之前的」全部
$("button").click(function(){
  $(".pineapple").prevAll().css("background-color","red");
}); 

//抓取從蓮霧到蘋果「之間的」全部
$("button").click(function(){
  $(".waxapple").prevUntil(".apple").css("background-color","red");
}); 

//抓取從香蕉到蓮霧「之間的」全部
$("button").click(function(){
  $(".banana").nextUntil(".waxapple").css("background-color","red");
}); 
\`\`\`

-----------------------------------------------
## 進階抓取不同順序元素
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
<ul>
  <li>蓮霧</li>
  <li>榴槤</li>
  <li>酪梨</li>
</ul>
\`\`\`
\`\`\`js
//抓取蘋果
$("button").click(function(){
  let apple = $("ul li").first().text();
  console.log(firstLi); //蘋果
});

//抓取香蕉
$("button").click(function(){
  let banana = $("ul").eq(0).find("li").eq(1).text();
  console.log(banana); // 香蕉
});

//抓取蓮霧
$("button").click(function(){
  let waxApple = $("ul").eq(1).find("li").first().text(); 
  console.log(waxApple); //蓮霧
});

//抓取酪梨
$("button").click(function(){
  let avocado = $("ul").eq(1).find("li").last().text(); 
  console.log(avocado); //酪梨
});
\`\`\`
\`.eq(0)會抓取第一個\``,__vite_glob_0_120=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery______________},Symbol.toStringTag,{value:"Module"})),jQuery___________$1=`---
title: jQuery點擊事件+動態效果
date: 2024-01-22
tags: ["jQuery"]
---
## animate用法介紹
* $(selector).animate(properties, duration, easing, callback);
  * properties(必填): {css樣式組}
  * duration(可選): 持續時間
  * easing(可選): 動畫加速方式
  * callback(可選): function(){}

-----------------------------------------------
## 動態樣式支援類型
|類型|css|
|---|---|
|支援的屬性|height、width、opacity、margin、padding、left、top、right、bottom、fontSize、borderWidth、scrollTop、scrollLeft|
|不支援的屬性|backgroundColor、color、borderColor、boxShadow、textShadow|

\`原本background-color要改用駝峰式寫法backgroundColor\`

-----------------------------------------------
## 動態改變樣式
\`\`\`js
//改變字體大小
$("button").click(function(){
  $("p").animate({fontSize:"3rem"},2000);
});

//推移距離與寬度
$("button").click(function(){
  $("p").animate({marginTop:"100px",width:"10px"},3000);
});

//接續其他動作用法
$("button").click(function(){
  $("p").animate({paddingLeft: "300px" }, 400, function() {
    console.log("動畫完成後執行此操作")
  });
});
\`\`\`

-----------------------------------------------
## 動態改變樣式(進階用法)
\`\`\`js
//一次執行多組動畫
$("button").click(function(){
  $("p").animate({fontSize:"3rem"},2000)
        .animate({paddingLeft: "50px" }, 600);
});

//一次執行多組動畫，中間延遲2秒
$("button").click(function(){
  $("p").animate({fontSize:"3rem"},2000)
        .delay(2000)
        .animate({paddingLeft: "50px" }, 600);
});
\`\`\`

-----------------------------------------------
## 動態改變背景顏色
### 需要再額外引入jQuery.ui
\`\`\`js
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"><\/script>
\`\`\`
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
\`\`\`
\`\`\`js
$("button").click(function(){
  $("p").animate({backgroundColor:"red"},3000);
});
\`\`\`

-----------------------------------------------
## 延遲效果
\`\`\`js
$(".box").delay(0).slideDown();
$(".box").delay(1000).slideDown();
$(".box").delay(2000).show(0);
\`\`\`
\`show()若不給時間，會直接出現\`

-----------------------------------------------
## 停止動畫效果
* $(selector).stop(stopAll,goToEnd)
  * stopAll(布林值)
    * true: 停止下一個動作
    * false: 接續下一個動作
  * goToEnd(布林值)
    * true: 停止在一開始
    * false: 停止在最後狀態
\`\`\`js
$(".box").stop(false,true);
\`\`\``,__vite_glob_0_121=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery___________$1},Symbol.toStringTag,{value:"Module"})),jQuery_____________$1=`---
title: jQuery點擊事件+抓取元素位置
date: 2024-01-24
tags: ["jQuery"]
---
## 抓取元素位置(position)
\`\`\`html
<div class="wrap">
  <div class="content"></div>
</div>
<button type="button">按鈕</button>
\`\`\`
\`\`\`css
.wrap{
  width: 150px;
  height: 180px;
  padding: 30px;
  background-color: blue;
  .content{
    margin-top: 20px;
    width: 20px;
    height: 20px;
    background-color: red;
  }
}
\`\`\`
\`\`\`js
//抓取外層容器位置
$("button").click(function(){
  let wrapPos = $(".wrap").position();
  console.log(wrapPos); //{top:0 ,left:0}
});

//只抓取外層容器的上
$("button").click(function(){
  let wrapPos = $(".wrap").position().top;
  console.log(wrapPos); //0
});

//抓取內層容器位置
$("button").click(function(){
  let contentPos = $(".content").position();
  console.log(contentPos); //{top:30 ,left:30}
});
\`\`\`
\`內容被外層容器向內推移30px\`

-----------------------------------------------
## 抓取元素位置(offset)
\`\`\`html
<div class="wrap">
  <div class="content"></div>
</div>
<button type="button">按鈕</button>
\`\`\`
\`\`\`css
.wrap{
  width: 150px;
  height: 180px;
  padding: 30px;
  background-color: blue;
  .content{
    margin-top: 20px;
    width: 20px;
    height: 20px;
    background-color: red;
  }
}
\`\`\`
\`\`\`js
//抓取內層相對距離
$("button").click(function(){
  let wrapPos = $(".wrap").offset();
  console.log(wrapPos); //{top:0 ,left:0}
});

//抓取內層相對距離
$("button").click(function(){
  let contentPos = $(".content").offset();
  console.log(contentPos); //{top:50 ,left:30}
});
\`\`\`
\`內容被被外容器padding+本身margin的距離\`

-----------------------------------------------
## 抓取滾動時，視窗對上方距離多少
\`\`\`js
$(window).scroll(function() {
  let windowTop = $(window).scrollTop();
  console.log(windowTop);
});
\`\`\``,__vite_glob_0_122=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery_____________$1},Symbol.toStringTag,{value:"Module"})),jQuery_____________=`---
title: jQuery點擊事件+抓取元素尺寸
date: 2024-01-23
tags: ["jQuery"]
---
## 抓取元素高度(content-box)
|語法|說明|
|---|---|
|.height()|height|
|.innerHeight()|height + padding|
|.outerHeight()|height + padding+border|
|.outerHeight(true)|height + padding + border + margin|

\`先決條件是：box-sizing: content-box\`
\`\`\`html
<button type="button">按鈕</button>
<div class="box"></div>
\`\`\`
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  border: solid 5px black;
  padding: 10px;
  margin: 25px;
  background-color: red;

  box-sizing: content-box; /* 引響關鍵 */
}
\`\`\`
\`\`\`js
//抓取元素高度
$("button").click(function(){
  let boxHeight = $(".box").height()
  console.log(boxHeight); //50
});

//抓取內部高度
$("button").click(function(){
  let boxHeight = $(".box").innerHeight()
  console.log(boxHeight); //50 + (上下padding:20px)  = 70
});


//抓取整體高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight()
  console.log(boxHeight); //50 + (上下padding:20px) + (上下border:10px) = 80
});

//抓取外部高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight(true)
  console.log(boxHeight); //50 + (上下padding:20px) + (上下border:10px) + (上下margin:50px) = 130
});
\`\`\`

-----------------------------------------------
## 抓取元素高度(border-box)
|語法|說明|
|---|---|
|.height()|height - border - padding|
|.innerHeight()|height - border|
|.outerHeight()|height|
|.outerHeight(true)|height + margin|

\`先決條件是：box-sizing: border-box\`
\`\`\`html
<button type="button">按鈕</button>
<div class="box"></div>
\`\`\`
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  border: solid 5px black;
  padding: 10px;
  margin: 25px;
  background-color: red;

  box-sizing: border-box; /* 引響關鍵 */
}
\`\`\`
\`\`\`js
//抓取元素高度
$("button").click(function(){
  let boxHeight = $(".box").height()
  console.log(boxHeight); //50 - (上下border:10px) - (上下padding:20px) = 20
});

//抓取內部高度
$("button").click(function(){
  let boxHeight = $(".box").innerHeight()
  console.log(boxHeight); //50 - (上下border:10px)  = 40
});

//抓取整體高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight()
  console.log(boxHeight); //50
});

//抓取外部高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight(true)
  console.log(boxHeight); //50 + (上下margin) = 100
});
\`\`\``,__vite_glob_0_123=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery_____________},Symbol.toStringTag,{value:"Module"})),jQuery___________=`---
title: jQuery點擊事件+改變標籤
date: 2024-01-20
tags: ["jQuery"]
---
## jQuery起手式
\`\`\`js
$(document).ready(function(){
    //在此處編寫執行的code
});
\`\`\`
\`function(參數){執行的動作}\`

-----------------------------------------------
## 改變標籤結構
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
</ul>
\`\`\`
\`\`\`js
//替換蘋果
$("button").click(function(){
  $("ul").html('<li>香蕉</li>')
});

//加在<標籤>前面
$("button").click(function(){
  $("ul").prepend('<li>香蕉</li>')
});

//加在<標籤>後面
$("button").click(function(){
  $("ul").append('<li>香蕉</li>')
});
\`\`\`

-----------------------------------------------
## 改變標籤文字
\`\`\`html
<button type="button">按鈕</button>
<p>蘋果</p>
\`\`\`
\`\`\`js
//取代<標籤>裡的文字
$("button").click(function(){
  $("p").text('香蕉')
});

//直接在<標籤>前面加上文字
$("button").click(function(){
  $("p").before('香蕉')
});

//直接在<標籤>後面加上文字
$("button").click(function(){
  $("p").after('香蕉')
});
\`\`\`

-----------------------------------------------
## 改變標籤樣式
\`\`\`html
<button type="button">按鈕</button>
<p>蘋果</p>
\`\`\`
\`\`\`js
//一個樣式寫法
$("button").click(function(){
  $("p").css("backgroundColor","red")
});

//多個樣式寫法
$("button").click(function(){
  $("p").css({"backgroundColor":"red","fontSize":"24px"})
});

//使用.attr()方法
$("button").click(function(){
  $("p").attr("style","background-color:red");
});
\`\`\`

-----------------------------------------------
## 改變標籤屬性
* $(selector).attr(attribute,value)
  * attribute(必填):要抓取的屬性
  * attribute(選填):要給予的值，若不給值則為抓取
\`\`\`html
<button type="button">按鈕</button>
<p style="background-color:red">蘋果</p>
\`\`\`
\`\`\`js
$("button").click(function(){
  $("p").attr("style","background-color:blue");
});
\`\`\`

-----------------------------------------------
## 抓取a連結的網址
\`\`\`html
<button type="button">按鈕</button>
<a href="https://www.google.com.tw/">連結</a>
\`\`\`
\`\`\`js
$("button").click(function(){
  let link = $("a").attr("href");
  console.log(link); //https://www.google.com.tw/
});
\`\`\`

-----------------------------------------------
## 抓取input裡的值
\`\`\`html
<button type="button">按鈕</button>
<input type="text" value="蘋果">
\`\`\`
\`\`\`js
//使用.attr()方法
$("button").click(function(){
  let inputValue =  $("input").attr("value");
  console.log(inputValue); //蘋果
});

//使用.val()方法
$("button").click(function(){
  let inputValue =  $("input").val();
  console.log(inputValue); //蘋果
});
\`\`\`

-----------------------------------------------
## 抓取標籤data值
\`\`\`html
<button type="button">按鈕</button>
<p data-num="3">蘋果</p>
\`\`\`
\`\`\`js
//使用.data()方法
$("button").click(function(){
  let dataNum = $("p").data("num");
  console.log(dataNum); //3
});

//使用.attr()方法
$("button").click(function(){
  let dataNum = $("p").attr("data-num");
  console.log(dataNum); //3
});
\`\`\`

-----------------------------------------------
## 移除標籤
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
</ul>
\`\`\`
\`\`\`js
//刪除整個<ul>
$("button").click(function(){
  $("ul").remove();
});

//刪除<ul>裡面的全部
$("button").click(function(){
  $("ul").empty();
});

//使用.html()方法，刪除<ul>裡面的全部
$("button").click(function(){
  $("ul").html();
});
\`\`\``,__vite_glob_0_124=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery___________},Symbol.toStringTag,{value:"Module"})),jQuery____________=`---
title: jQuery點擊事件+顯示或隱藏
date: 2024-01-21
tags: ["jQuery"]
---
## 動態切換樣式語法表
|動畫方式|顯示|隱藏|自動切換|
|---|---|---|---|
|一般|.show()|.hide()|.toggle()|
|淡入淡出|.fadeIn()|.fadeOut|.fadeToggle()|
|滑入滑出|.slideUp()|.slideDown()|.slideToggle()|
|自訂樣式|.addClass()|.removeClass()|.toggleClass()|

\`.show(3000)，裡面可加入秒數(毫秒)\`

-----------------------------------------------
## 切換顯示或隱藏
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
\`\`\`
\`\`\`js
//隱藏元素
$("button").click(function(){
  $("p").hide();
});

//顯示元素
$("button").click(function(){
  $("p").show(3000); //作用3秒
});

//自動顯示隱藏元素
$("button").click(function(){
  $("p").toggle();
});
\`\`\`
\`原理：判斷元素上是否有style="display:block"\`

-----------------------------------------------
## 滑入滑出效果(slide)
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會切換顯示或隱藏</p>
\`\`\`
\`\`\`js
//滑出元素
$("button").click(function(){
  $("p").slideUp();
});

//滑入元素
$("button").click(function(){
  $("p").slideDown(3000); //作用3秒
});

//自動滑入滑出元素
$("button").click(function(){
  $("p").slideToggle();
});
\`\`\`

-----------------------------------------------
## 切換淡入淡出效果(fade)
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會切換顯示或隱藏</p>
\`\`\`
\`\`\`js
//淡出元素
$("button").click(function(){
  $("p").fadeOut();
});

//淡入元素
$("button").click(function(){
  $("p").fadeIn(3000,0.5); //作用3秒，透明度0.5
});

//自動淡出淡入元素
$("button").click(function(){
  $("p").fadeToggle();
});
\`\`\`

-----------------------------------------------
## 漸變淡出效果(fadeTo)
### $(selector).fadeTo(speed, opacity, [easing], [callback]);
* speed(必選) 速度
* opacity(必選) 透明度
* easing(可選) 動畫加速方式
* callback(可選) function(){}
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
\`\`\`
\`\`\`js
//基本用法
$("button").click(function(){
  $("p").fadeTo(3000,0.5); //三秒之內，透明度將至0.5
});

//hover用法
$("p").hover(
  function() {
    $(this).fadeTo(200, 1);  // 滑入時淡入
  },
  function() {
    $(this).fadeTo(200, 0.5);  // 滑出時淡出
  }
);

//接續其他動作用法
$("button").click(function(){
  $("p").fadeTo(3000,0.5,function(){
    console.log("動畫完成後執行此操作")
  });
});
\`\`\`

-----------------------------------------------
## 切換顯示或隱藏(class)
### html:
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會切換紅底背景</p>
\`\`\`
\`\`\`css
.bg-red{
  background-color: red;
}
\`\`\`
\`\`\`js
//新增class樣式
$("button").click(function(){
  $("p").addClass("bg-red");
});

//移除class樣式
$("button").click(function(){
  $("p").removeClass("bg-red");
});

//切換class樣式
$("button").click(function(){
  $("p").toggleClass("bg-red");
});
\`\`\``,__vite_glob_0_125=Object.freeze(Object.defineProperty({__proto__:null,default:jQuery____________},Symbol.toStringTag,{value:"Module"})),keyframes____=`---
title: keyframes關鍵影格
date: 2022-04-05
tags: ["CSS"]
---
## 影格動畫(animation)
### 第一種寫法
\`\`\`css
@keyframes changeColor{
    from{
        background-color: red;
    }
    to{
        background-color: blue;
    }
}
\`\`\`
### 第二種寫法
\`\`\`css
@keyframes changeColor{
    0%{
        background-color: red;
    }
    25%{
        background-color: yellow;
    }
    50%{
        background-color: green;
    }
    100%{
        background-color: blue;
    }
}
\`\`\`
### 參數設定
\`\`\`css
.box{
    animation-name: changeColor; /*動畫名稱*/

    animation-duration: 5s; /*持續5秒*/

    animation-timing-function: ease; /*慢快慢*/
    animation-timing-function: linear; /*速度保持一致*/
    animation-timing-function: ease-in; /*起始慢*/
    animation-timing-function: ease-out; /*結束慢*/
    animation-timing-function: ease-in-out; /*起始和結束慢*/
    animation-timing-function: steps(3); /*逐格(預設值)動畫(3格)*/

    animation-delay: 0; /*無延遲(預設值)*/
    animation-delay: 2s; /*延遲2秒運行*/
    animation-delay: -3s; /*載入頁面時已經運行3秒*/

    animation-iteration-count: 1; /*播放1次(預設值)*/
    animation-iteration-count: 7; /*播放7次*/
    animation-iteration-count: infinite; /*無限重複*/

    animation-direction: normal; /*0％到100%(預設值)*/
    animation-direction: reverse; /*100%到0%*/
    animation-direction: alternate; /*0％到100%到0％到100%*/
    animation-direction: alternate-reverse; /*100%到0%到100%到0%*/

    animation-play-state: running; /*讓動畫播放持續(預設值)*/
    animation-play-state: paused; /*讓動畫播放暫停，使用在:hover或:active*/

    animation-fill-mode: none; /*結束時停留在0%*/
    animation-fill-mode: both; /*結束時停留在100%*/

    animation: changeColor 5s linear 2s 2s reverse; /*動畫名稱 持續時間 播放速度 延遲時間 播放次數 播放方向*/
}
\`\`\`

-----------------------------------------------
## 動畫轉換(transition)
\`\`\`css
.box{
    transition-property: all; /*無指定(預設值)*/
    transition-property: width; /*指定寬度作用效果*/
    transition-property: height; /*指定高度作用效果*/
    transition-property: font-size; /*指定字體大小作用效果*/
    transition-property: left; /*指定左方作用效果*/

    transition-duration: 2s; /*持續2秒*/
    transition-duration: infinite; /*無限重複*/

    transition-timing-function: ease; /*慢快慢(預設值)*/
    transition-timing-function: linear; /*保持一致*/
    transition-timing-function: ease-in; /*起始慢*/
    transition-timing-function: ease-out; /*結束慢*/
    transition-timing-function: ease-in-out; /*起始和結束慢*/
    transition-timing-function: steps(3); /*逐格動畫(3格)*/

    transition-delay: 0; /*無延遲(預設值)*/
    transition-delay: 1s; /*延遲1秒*/

    transition: width 2s linear 1s; /*指定屬性/持續時間/進行速度/延遲時間*/
}
\`\`\``,__vite_glob_0_126=Object.freeze(Object.defineProperty({__proto__:null,default:keyframes____},Symbol.toStringTag,{value:"Module"})),mitt______=`---
title: mitt跨元件傳資料
date: 2024-12-30
tags: ["Vue3"]
---
## 使用mitt套件
1. 引入[mitt的CDN](https://unpkg.com/mitt/dist/mitt.umd.js)
2. 定義mitt套件
3. 在發送資料元件的方法上使用emit(自訂事件名稱,要傳的資料)
4. 在接收資料元件的created方法上使用emit(自訂事件名稱,函式)
\`\`\`html
<div id="app">
  <show-component></show-component>
  <send-component></send-component>
</div>
\`\`\`
\`\`\`js
const emitter = mitt();

const app = Vue.createApp({})

app.component('show-component',{
  data(){
    return{
      item:{}
    }
  },
  created(){
    emitter.on("fruitsData",(item)=>{
      this.item = item;
    })
  },
  template:\`
    <div class="card">
      <div class="card-body">
        {{ item }}
      </div>
    </div>
  \`
})

app.component('send-component',{
  data(){
    return{
      data:{
        name: "蘋果"
      }
    }
  },
  methods:{
    sendData(){
      emitter.emit("fruitsData",this.data)
    }
  },
  template:\`
    <button type="button" @click="sendData">按鈕</button>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_127=Object.freeze(Object.defineProperty({__proto__:null,default:mitt______},Symbol.toStringTag,{value:"Module"})),promise_____=`---
title: promise非同步觀念
date: 2024-12-05
tags: ["Vue3"]
---
## 非同步觀念
\`\`\`js
const component = {
  init(){
    console.log(1);
    getData();
    console.log(2);
  }
}

function getData(){
  setTimeout(()=>{
    console.log("已取得遠端資料");
  })
}

component.init();
//1
//2
//"已取得遠端資料"
\`\`\`
\`重點結論：非同步事件一定是在事件都執行完之後才執行\`

-----------------------------------------------
## promise基本用法
* 成功：透過resolve回傳結果，使用.then做接收
* 失敗：透過resolve回傳結果，使用.then和.catch接收
\`\`\`js
const promiseSetTimeout = (status) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(status){
        resolve("promiseSetTimeout 成功");
      }else{
        reject("promiseSetTimeout 失敗");
      }
    },0)
  })
}
\`\`\`
### 基礎應用
\`\`\`js
promiseSetTimeout(true)
  .then(res => {
    console.log(res); //promiseSetTimeout 成功
  })
\`\`\`
### 串接
\`\`\`js
promiseSetTimeout(true)
  .then(res => {
    console.log(1,res); //1,,promiseSetTimeout 成功
    return promiseSetTimeout(true)
  })
  .then(res => {
    console.log(2,res); //2,promiseSetTimeout 成功
  })
\`\`\`
\`連續接收第二、第三個資料時，可以使用return一個非同步事件，就可以繼續接.then\`
### 失敗捕捉
\`\`\`js
promiseSetTimeout(false)
  .then(res => {
    console.log(res); 
  })
  .catch(err => {
    console.log(err); //promiseSetTimeout 失敗
  })
\`\`\`
\`捕捉失敗.then會直接被忽略\`
\`\`
### 元件運用
\`\`\`js
const component = {
  data:{

  },
  init(){
    promiseSetTimeout(true){
      .then(res => {
        this.data.res = res;
        console.log(this.res); // {res:"promiseSetTimeout 成功"}
      })
    }
  }
}
component.init();
\`\`\`
\`使用元件的初始化事件，將api資料載入到data\``,__vite_glob_0_128=Object.freeze(Object.defineProperty({__proto__:null,default:promise_____},Symbol.toStringTag,{value:"Module"})),ref__DOM__=`---
title: ref操作DOM元素
date: 2025-01-01
tags: ["Vue3"]
---
## 抓取DOM元素
\`\`\`html
<div id="app">
  <input type="text" ref="textInput">
  <button type="button" @click="getInputValue">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  methods:{
    getInputValue(){
      console.log(this.$refs.textInput);
    }
  }
})

app.mount("#app");
\`\`\`
-----------------------------------------------
## 抓取DOM＋父元件操控資料
\`\`\`html
<div id="app">
  <card-component ref="card"></card-component>
  <button type="button" @click="changeCardValue">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  methods:{
    changeCardValue(){
      this.$refs.card.title = "新的卡片標題";
      this.$refs.card.content = "新的卡片內容文字";
      this.$refs.card.footer = "新的卡片底部文字"
    }
  }
})

app.component('card-component',{
  data(){
    return{
      title: "卡片標題",
      content: "卡片內容",
      footer: "卡片底部"
    }
  },
  template:\`
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        {{ content }}
      </div>
      <div class="card-header">
        {{ footer }}
      </div>
    </div>
  \`
})
app.mount("#app");
\`\`\`
-----------------------------------------------
## 實作用ref抓取Bootstrap5的Modal元件
\`\`\`html
<div id="app">
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" @click="openModal">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      bsModal: ""
    }
  },
  methods:{
    openModal(){
      this.bsModal.show()
    }
  },
  mounted(){
    this.bsModal = new bootstrap.Modal(this.$refs.modal);
  }
})

app.mount("#app");
\`\`\`
-----------------------------------------------
## 實作用ref抓取Bootstrap5的Modal元件(進階版)
\`\`\`html
<div id="app">
  <modal-component ref="modalDom"></modal-component>
  <button type="button" @click="openModal">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({ 
  methods:{
    openModal(){
      this.$refs.modalDom.bsModal.show()
    }
  }
})

app.component('modal-component',{
  data(){
    return{
      bsModal: ""
    }
  },
  mounted(){
    this.bsModal = new bootstrap.Modal(this.$refs.modalDom);
  },
  template:\`
  <div class="modal" tabindex="-1" ref="modalDom">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_129=Object.freeze(Object.defineProperty({__proto__:null,default:ref__DOM__},Symbol.toStringTag,{value:"Module"})),ref_reactive__=`---
title: ref與reactive差別
date: 2026-03-26
tags: ["Vue3"]
---
## Ref

取值、賦予值的方式

* 優點：適用全部情境
* 缺點：要打上 .value

\`\`\`vue
<script setup>  

import { ref } from 'vue'

const num = ref(0);

setInterval(()=>{
  num.value = num.value++
},3000)

<\/script>
\`\`\`

-----------------------------------------------
## Reactive

* 優點：不用加上 .value
* 缺點：不能使用純值

\`\`\`vue
<script setup>  

import { relative } from 'vue'

const apple = reactive('蘋果')

<\/script>
\`\`\`

* 缺點：不能被賦予
\`\`\`vue
<script setup>  

import { relative } from 'vue'

let data = relative({
  name: '蘋果'
})

data = {
  name: '香蕉'
}

<\/script>
\`\`\`


`,__vite_glob_0_130=Object.freeze(Object.defineProperty({__proto__:null,default:ref_reactive__},Symbol.toStringTag,{value:"Module"})),template__=`---
title: Template模板
date: 2024-12-25
tags: ["Vue3"]
---
## 元件模板建立
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert',{
  template:\`<div class="alert alert-primary">元件模板</div>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
## 元件模板＋v-for
\`\`\`html
<div id="app">
  <alert v-for="item in ArrayData"></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      ArrayData:[1,2,3]
    }
  }
})

app.component('alert',{
  template:\`<div class="alert alert-primary">元件模板</div>\`
})

app.mount("#app");
\`\`\`
\`因為沒有任何傳值動作，此v-for僅會複製三次\`

-----------------------------------------------
## x-template 以腳本方式引入模板
\`\`\`html
<script type="text/x-template" id="alert-template">
  <div class="alert alert-primary">x-template所建立的模板</div>
<\/script>

<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert',{
  template: "#alert-template"
})

app.mount("#app");
\`\`\`
-----------------------------------------------
## v-is載入模板
\`\`\`html
<div id="app">
  <div v-is="'alert1'"></div>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert1',{
  template:\`<div class="alert alert-primary">元件模板1</div>\`
})

app.component('alert2',{
  template:\`<div class="alert alert-warning">元件模板2</div>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
## v-is載入模板＋動態切換
\`\`\`html
<div id="app">
  <input type="text" v-model="componentName">
  <div v-is="componentName"></div>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      componentName: "alert1"
    }
  }
})

app.component('alert1',{
  template:\`<div class="alert alert-primary">元件模板1</div>\`
})

app.component('alert2',{
  template:\`<div class="alert alert-warning">元件模板2</div>\`
})

app.mount("#app");
\`\`\`
\`v-is裡面讀的是字串\`

-----------------------------------------------
## v-is＋table
### 使用情境：在html結構下<tbody>裡只接受<tr>，因此<table-row>會跑版
\`\`\`html
<div id="app">
  <table>
    <thead>
      <tr>
        <td>標題</td>
        <td>內容</td>
      </tr>
    </thead>
    <tbody>
      <table-row></table-row>
    </tbody>
  </table>
</div>
\`\`\`
### 解決辦法：
\`\`\`html
<div id="app">
  <table>
    <thead>
      <tr>
        <td>標題</td>
        <td>內容</td>
      </tr>
    </thead>
    <tbody>
      <tr v-is="'table-row'"></tr>
    </tbody>
  </table>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('table-row',{
  template: \`
    <tr>
      <td>$</td>
      <td>這是一段文字</td>
    </tr>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_131=Object.freeze(Object.defineProperty({__proto__:null,default:template__},Symbol.toStringTag,{value:"Module"})),this___=`---
title: this的指向
date: 2024-12-02
tags: ["Vue3"]
---
## 傳統函式this
\`\`\`js
let name = "全域蘋果";
function sayApple(){
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  sayApple
}
obj.sayApple(); //蘋果
\`\`\`
\`看函式前面是在哪邊調用，而決定this的指向\`

-----------------------------------------------
## 傳統函式this 2
\`\`\`js
let name = "全域蘋果";
const obj = {
  name: "蘋果",
  sayApple(){
    console.log(this.name);
  }
}
obj.sayApple(); //蘋果
\`\`\`

-----------------------------------------------
## 物件內的物件函式
\`\`\`js
let name = "全域蘋果";
function sayApple(){
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  sayApple,
  obj2: {
    name: "內層蘋果",
    sayApple
  }
}
obj.obj2.sayApple(); //內層蘋果
\`\`\`

-----------------------------------------------
## 物件內的函式裡的函式
\`\`\`js
let name = "全域蘋果";
function sayApple() {
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  fn() {
    sayApple();
  }
}
obj.fn(); //全域蘋果
\`\`\`

-----------------------------------------------
## 非同步函式
\`\`\`js
let name = "全域蘋果";
function sayApple() {
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  fn(){
    setTimeout(function(){
      conosole.log(this.name);
    })
  }
}
obj.fn(); //全域蘋果
\`\`\`

-----------------------------------------------
## 箭頭函式的this指向
\`\`\`js
let name = "全域蘋果";
const obj = {
  name: '蘋果',
  sayApple: () => { 
    console.log(this.name); 
  },
}
obj.sayApple(); //'全域蘋果'
\`\`\`
\`箭頭函式沒有自己的this，會優先指向外層的this\`

-----------------------------------------------
## 箭頭函式的this指向
\`\`\`js
let name = '全域蘋果'
const obj = {
  name: '蘋果',
  sayApple() {
    const sayApple2 = () => { 
      console.log(this.name);
    };
    sayApple2();
  }
}
obj.sayApple(); //蘋果
\`\`\``,__vite_glob_0_132=Object.freeze(Object.defineProperty({__proto__:null,default:this___},Symbol.toStringTag,{value:"Module"})),vBind____=`---
title: v-bind屬性綁定
date: 2024-12-13
tags: ["Vue3"]
---
## v-bind 圖片綁定
\`\`\`html
<div id="app">
  <img :src="apple.imgUrl" :title="apple.name" :alt="apple.name">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: {
          name: "蘋果",
          imgUrl: "https://waapple.org/wp-content/uploads/2021/06/Variety_Cosmic-Crisp-transparent-658x677.png"
        }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## v-bind + input + readonly
\`\`\`html
<div id="app">
  {{ isReadonly }}
  <input type="text" :readonly="isReadonly">
  <button type="button" @click="changeReadonly">切換狀態</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        isReadonly: true
    }
  },
  methods:{
    changeReadonly(){
        this.isReadonly = !this.isReadonly;
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## v-bind + input + dynamic
\`\`\`html
<div id="app">
  {{ dynamic }}
  <input type="text" :[dynamic]>
  <button type="button" @click="changeStatus">切換狀態</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        dynamic: 'disabled'
    }
  },
  methods:{
    changeStatus(){
      //this.dynamic現在等於disabled嗎？是的話就變成readonly，不是的話就變成disabled
      this.dynamic = this.dynamic === 'disabled' ? 'readonly' : 'disabled';
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_133=Object.freeze(Object.defineProperty({__proto__:null,default:vBind____},Symbol.toStringTag,{value:"Module"})),vFor______=`---
title: v-for呈現多筆資料
date: 2024-12-11
tags: ["Vue3"]
---
## v-for + 陣列資料
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(item,key) in fruits">{{ key + 1 }} - {{item.name}}/{{ item.price }}元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    amount: 50
  },
  {
    name: "香蕉",
    price: 20,
    amount: 30
  },
  {
    name: "鳳梨",
    price: 35,
    amount: 100
  }
]

Vue.createApp({
  data(){
    return{
      fruits: fruits,
    }
  }
}).mount("#app");
\`\`\`
### 顯示結果：
\`\`\`html
<div id="app">
  <ul>
    <li>1 - 蘋果/15元</li>
    <li>2 - 香蕉/20元</li>
    <li>3 - 鳳梨/35元</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
## v-for + 物件資料
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(item,key) in fruits">{{ key }} - {{item.name}}/{{ item.price }}元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = {
  apple:{
    name: "蘋果",
    price: 15,
    amount: 50
  },
  banana:{
    name: "香蕉",
    price: 20,
    amount: 30
  },
  pineapple:{
    name: "鳳梨",
    price: 35,
    amount: 100
  }
}

Vue.createApp({
  data(){
    return{
      fruits: fruits,
    }
  }
}).mount("#app");
\`\`\`
### 顯示結果：
\`\`\`html
<div id="app">
  <ul>
    <li>apple - 蘋果/15元</li>
    <li>banana - 香蕉/20元</li>
    <li>pineapple - 鳳梨/35元</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
## v-for 純數字
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in 4">{{ apple }}</li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: "蘋果"
    }
  }

}).mount("#app");
\`\`\`

-----------------------------------------------
## v-for + key 
### 當有相同父元素的子元素必須有獨特的key，重複的key會造成錯誤
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in fruits" v-bind:key="item.name">{{ item.name }}
      <input type="text">
    </li>
  </ul>
  <button type="button" @click="reverseArray">反轉按鈕</button>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    amount: 50
  },
  {
    name: "香蕉",
    price: 20,
    amount: 30
  },
  {
    name: "鳳梨",
    price: 35,
    amount: 100
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  },
  methods:{
    reverseArray(){
      this.fruits.reverse();
    }
  }
}).mount("#app");
\`\`\`
\`如果沒有加上v-bind:key="item.name"，在input裡輸入值後，點擊按鈕會出錯\`

-----------------------------------------------
## v-for + table + template
\`\`\`html
<div id="app">
  <table>
    <template v-for="item in fruits">
      <tr>
        <td>{{ item.name }}</td>
      </tr>
      <tr>
        <td>{{ item.price }}元</td>
      </tr>
      <tr>
        <td>{{ item.import ? '進口':'本土' }}</td>
      </tr>
    </template>
  </table>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    import: true
  },
  {
    name: "香蕉",
    price: 20,
    import: true
  },
  {
    name: "鳳梨",
    price: 35,
    import: false
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  }
}).mount("#app");
\`\`\`
\`<template>可用來包覆需要重複的標籤\``,__vite_glob_0_134=Object.freeze(Object.defineProperty({__proto__:null,default:vFor______},Symbol.toStringTag,{value:"Module"})),vIf_____=`---
title: v-if選擇性顯示
date: 2024-12-12
tags: ["Vue3"]
---
## v-if
\`\`\`html
<div id="app">
  <p v-if="apple">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: false //true顯示，false不顯示
    }
  }
}).mount("#app");
\`\`\`
\`v-if不顯示時，是連同整個DOM的節點都看不見\`

-----------------------------------------------
## v-show
\`\`\`html
<div id="app">
  <p v-show="apple">蘋果</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
\`\`\`
\`v-show是使用display:block和display:none來切換\`

-----------------------------------------------
## v-if + 按鈕切換
\`\`\`html
<div id="app">
  <p v-if="apple">蘋果</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## v-if + v-else + 按鈕切換
\`\`\`html
<div id="app">
  <p v-if="apple">蘋果</p>
  <p v-else>香蕉</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## v-if + v-else-if + 按鈕切換
\`\`\`html
<div id="app">
  <p>{{ fruits }}</p>
  <p v-if="fruits == '蘋果'">一個15元</p>
  <p v-else-if="fruits == '香蕉'">一個20元</p>
  <p v-else-if="fruits == '鳳梨'">一個35元</p>
  <button type="button" @click="changeFruits('蘋果')">蘋果</button>
  <button type="button" @click="changeFruits('香蕉')">香蕉</button>
  <button type="button" @click="changeFruits('鳳梨')">鳳梨</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        fruits: "蘋果"
    }
  },
  methods:{
    changeFruits(item){
      this.fruits = item;
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## v-if + v-for
\`\`\`html
<div id="app">
  <ul>
    <template v-for="item in fruits">
      <li v-if="item.price < 30">{{ item.name }}</li>
    </template>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    import: true
  },
  {
    name: "香蕉",
    price: 20,
    import: true
  },
  {
    name: "鳳梨",
    price: 35,
    import: false
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  }
}).mount("#app");
\`\`\`
\`v-for和v-if官方不建議使用在同一個標籤上，因此可以使用template來拆開\``,__vite_glob_0_135=Object.freeze(Object.defineProperty({__proto__:null,default:vIf_____},Symbol.toStringTag,{value:"Module"})),vModel___=`---
title: v-model修飾符
date: 2024-12-16
tags: ["Vue3"]
---
## lazy延遲
\`\`\`html
<div id="app">
  <p>{{ inputValue }}</p>
  <input type="text" v-model.lazy="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: ""
    }
  }
}).mount("#app");
\`\`\`
\`當加上.lazy後在focus輸入資料時，資料都不會同步，直到離開焦點時，才會把值同步到data\`

-----------------------------------------------
## number純數字
\`\`\`html
<div id="app">
  <p>{{ inputValue }}</p>
  <p>型別是：{{ typeof(inputValue) }}</p>
  <input type="number" v-model.number="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: ""
    }
  }
}).mount("#app");
\`\`\`
\`input的值都是string，加上.number可以直接轉換成number，但前提是input的type也要是number\`

-----------------------------------------------
## trim去掉前後空白
\`\`\`html
<div id="app">
  <p>{{ inputValue }}</p>
  <input type="text" v-model.trim="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: ""
    }
  }
}).mount("#app");
\`\`\`
\`適合使用在text或email格式\``,__vite_glob_0_136=Object.freeze(Object.defineProperty({__proto__:null,default:vModel___},Symbol.toStringTag,{value:"Module"})),vModel____=`---
title: v-model雙向綁定
date: 2024-12-15
tags: ["Vue3"]
---
## 輸入框綁定
\`\`\`html
<div id="app">
  <input type="text" v-model="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: '蘋果'
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## checkbox綁定
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="checkAnswer">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkAnswer: true
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
## checkbox綁定
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="checkAnswer">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkAnswer: true
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
## checkbox單選 + 三元判斷式
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="checkAnswer">
  {{ checkAnswer ? '蘋果':'香蕉' }}
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkAnswer: true
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## checkbox單選 + true-value、false-value
\`\`\`html
<div id="app">
  <p>{{ checkboxAnswer }}</p>
  <input id="isCheck"
  type="checkbox"
  v-model="checkboxAnswer"
  true-value="你勾選了"
  false-value="你沒有勾選">
  <label for="isCheck">是否要勾選</label>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkboxAnswer: "你沒有勾選"
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
## checkbox多選(回傳陣列)
如果要讓checkbox勾選就回傳陣列的話：
\`\`\`html
<div id="app">
  <p>您選擇的是：{{ checkboxAnswer.join() }}</p>
  <input id="apple" type="checkbox" v-model="checkboxAnswer" value="蘋果">
  <label for="apple">蘋果</label>
  <br>
  <input id="banana" type="checkbox" v-model="checkboxAnswer" value="香蕉">
  <label for="banana">香蕉</label>
  <br>
  <input id="pineapple" type="checkbox" v-model="checkboxAnswer" value="鳳梨">
  <label for="pineapple">鳳梨</label>
  <br>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkboxAnswer: []
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
## radio單選
\`\`\`html
<div id="app">
  <p>您選擇的是：{{ radioAnswer }}</p>
  <input id="apple" type="radio" v-model="radioAnswer" value="蘋果">
  <label for="apple">蘋果</label>
  <br>
  <input id="banana" type="radio" v-model="radioAnswer" value="香蕉">
  <label for="banana">香蕉</label>
  <br>
  <input id="pineapple" type="radio" v-model="radioAnswer" value="鳳梨">
  <label for="pineapple">鳳梨</label>
  <br>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      radioAnswer: "蘋果"
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## select單選
\`\`\`html
<div id="app">
  <p>您選擇的水果：{{ selectAnswer }}</p>
  <select v-model="selectAnswer">
    <option value="">請選擇水果</option>
    <option value="蘋果">蘋果apple</option>
    <option value="香蕉">香蕉banana</option>
    <option value="鳳梨">鳳梨pineapple</option>
  </select>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      selectAnswer: ""
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## select多選
\`\`\`html
<div id="app">
  <p>您選擇的水果：{{ selectAnswer.join() }}</p>
  <select v-model="selectAnswer" multiple>
    <option value="" disabled>請選擇水果</option>
    <option value="蘋果">蘋果apple</option>
    <option value="香蕉">香蕉banana</option>
    <option value="鳳梨">鳳梨pineapple</option>
  </select>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      selectAnswer: []
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_137=Object.freeze(Object.defineProperty({__proto__:null,default:vModel____},Symbol.toStringTag,{value:"Module"})),vOn_____=`---
title: v-on使用者事件
date: 2024-12-17
tags: ["Vue3"]
---
## 效果切換按鈕
\`\`\`html
<div id="app">
  <div class="box" :class="{ rotate : isTransform }"></div>
  <button type="button" @click="changeClass">按鈕</button>
</div>
\`\`\`
\`\`\`css
.box{
  width: 40px;
  height: 40px;
  border: solid 1px #cccccc;
}
.rotate{
  transform: rotate(45deg);
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      isTransform: true
    }
  },
  methods:{
    changeClass(){
      this.isTransform = !this.isTransform;
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 效果切換按鈕(帶參數)
\`\`\`html
<div id="app">
  <div class="box" :class="{ rotate : isTransform }"></div>
  <button type="button" @click="changeClass('isTransform')">按鈕</button>
</div>
\`\`\`
\`\`\`css
.box{
  width: 40px;
  height: 40px;
  border: solid 1px #cccccc;
}
.rotate{
  transform: rotate(45deg);
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      isTransform: true
    }
  },
  methods:{
    changeClass(item){
      this[item] = !this[item];
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 驗證表單＋事件綁定在表單本身上
\`\`\`html
<div id="app">
  <form @submit.prevent="submitForm">
    <input type="text">
    <button>按鈕</button>
  </form>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    submitForm(){
      console.log("表單已送出")
    }
  }
}).mount("#app");
\`\`\`
\`只有綁定@submit會有表單原生的轉跳事件，需要使用.prevent\`

-----------------------------------------------
## 動態事件
\`\`\`html
<div id="app">
  <button type="button" @[event]="dynamicEvent">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      event: "click"
    }
  },
  methods:{
    dynamicEvent(){
      console.log("這是一個動態事件")
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 動態物件方法
\`\`\`html
<div id="app">
  <button type="button" @="{
    mousedown: down,
    mouseup: up
  }">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    down(){
      console.log("按下");
    },
    up(){
      console.log("放開")
    }
  }
}).mount("#app");
\`\`\`
\`當按下按鈕時不放，出現"按下";鬆開滑鼠左鍵後，出現"放開"\``,__vite_glob_0_138=Object.freeze(Object.defineProperty({__proto__:null,default:vOn_____},Symbol.toStringTag,{value:"Module"})),vOn___=`---
title: v-on修飾符
date: 2024-12-18
tags: ["Vue3"]
---
## 指定鍵盤按鍵觸發事件
\`\`\`html
<div id="app">
  <label>按enter鍵觸發事件</label>
  <input type="text" @keyup.enter="keyDown">
  <br>
  <label>按shift+enter鍵觸發事件</label>
  <input type="text" @keyup.shift.enter="keyDown">
  <br>
  <label>按p鍵觸發事件</label>
  <input type="text" @keyup.p="keyDown">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    keyDown(){
      console.log("您已成功觸發事件");
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 按下指定滑鼠鍵觸發事件
\`\`\`html
<div id="app">
  <button type="button" @click.left="clickMouse">用左鍵按觸發</button>
  <button type="button" @click.right="clickMouse">用右鍵按觸發</button>
  <button type="button" @click.middle="clickMouse">用中鍵按觸發</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickMouse(){
      console.log("您已成功觸發事件");
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 阻止事件冒泡(一般情況)
\`\`\`html
<div id="app">
  <ul @click="clickElement('ul')">
    <li @click="clickElement('li')">
      <button type="button" @click="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## stopPropagation(防止向外尋找)
\`\`\`html
<div id="app">
  <ul @click="clickElement('ul')">
    <li @click.stop="clickElement('li')">
      <button type="button" @click="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 事件偵聽器使用capture(事件由外而內)
\`\`\`html
<div id="app">
  <ul @click.capture="clickElement('ul')">
    <li @click.capture="clickElement('li')">
      <button type="button" @click.capture="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 事件偵聽器使用self(只觸發自己)
\`\`\`html
<div id="app">
  <ul @click.self="clickElement('ul')">
    <li @click.self="clickElement('li')">
      <button type="button" @click.self="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## 事件偵聽器使用once(只觸發一次)
\`\`\`html
<div id="app">
  <ul @click.once="clickElement('ul')">
    <li @click.once="clickElement('li')">
      <button type="button" @click.once="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_139=Object.freeze(Object.defineProperty({__proto__:null,default:vOn___},Symbol.toStringTag,{value:"Module"})),vText____=`---
title: v-text顯示資料
date: 2024-12-10
tags: ["Vue3"]
---
## v-text
\`\`\`html
<div id="app">
  <p v-text="apple"></p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## {{}}(Mustache)
\`\`\`html
<div id="app">
  <p>{{ apple }}</p>
  <p>{{ 1 + 1 }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\`
### 顯示結果：
\`\`\`html
<div id="app">
  <p>蘋果</p>
  <p>2</p>
</div>
\`\`\`

-----------------------------------------------
## {{}} 進階用法
\`\`\`html
<div id="app">
  <p>{{ \`\${apple}比\${banana}還好吃\` }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
      banana: "香蕉"
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## {{}} + methods方法
\`\`\`html
<div id="app">
  <p>{{ sayName("香蕉") }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  },
  methods:{
    sayName(name){
      return \`\${this.apple}比\${name}還好吃\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## v-html
\`\`\`html
<div id="app">
  <div v-html="apple"></div>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "<p>蘋果</p>",
    }
  }
}).mount("#app");
\`\`\`
\`跟v-text和{{}}結果相同，但會多帶一個div標籤\`

-----------------------------------------------
## v-once + v-model 資料只渲染一次，但後續不被更動
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  <p v-once>{{ apple }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\`
\`會呈現"蘋果"，但是不會被v-model改動\`

-----------------------------------------------
## v-pre + {{}} 括弧內的文字不會被編譯，直接呈現
\`\`\`html
<div id="app">
  <p v-pre>{{ apple }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_140=Object.freeze(Object.defineProperty({__proto__:null,default:vText____},Symbol.toStringTag,{value:"Module"})),__Devtools__api__=`---
title: 使用Devtools找出api資料
date: 2024-01-05
tags: ["Web"]
---
## 使用Devtools找出api資料
1. 打開 Chrome 到欲找資料頁面，右鍵“檢查”，快捷鍵(option ＋ command ＋ I)
![圖片](./images/使用Devtools找出api資料/使用Devtools找出api資料-1.png)

-----------------------------------------------
2. 點擊網路“network”，並重新整理頁面
![圖片](./images/使用Devtools找出api資料/使用Devtools找出api資料-2.png)

-----------------------------------------------
3. 點擊“Fetch/XHR”(JSON、XML、HTML)，並查找看是哪一隻檔案，並預覽查看資料內容
![圖片](./images/使用Devtools找出api資料/使用Devtools找出api資料-3.png)`,__vite_glob_0_141=Object.freeze(Object.defineProperty({__proto__:null,default:__Devtools__api__},Symbol.toStringTag,{value:"Module"})),__axios__api=`---
title: 使用axios串接api
date: 2024-12-06
tags: ["Vue3"]
---
## axios
* axios是promise的封裝套件
### 使用前先在head引入
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
\`\`\`
\`\`\`js
//官方寫法
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

//用axios改寫
axios.get("https://randomuser.me/api/")
  .then(res => {
    console.log(res.data.results)
  })
  .catch(err => {
    console.log(err.response)
  })
\`\`\`
\`.response是固定寫法\`

`,__vite_glob_0_142=Object.freeze(Object.defineProperty({__proto__:null,default:__axios__api},Symbol.toStringTag,{value:"Module"})),__lozad_js________=`---
title: 使用lozad.js實作圖片延遲載入
date: 2024-01-09
tags: ["JavaScript"]
---
## 使用lozad.js套件
1. 在\`<head>\`引入cdn
\`\`\`html
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"><\/script>
</head>
\`\`\`
2. 在標籤樣式\`class\`加上\`lozad\`，將\`src\`改成\`data-src\`
\`\`\`html
<img class="lozad" data-src="image.png" />
\`\`\`
3. 在js檔中：
\`\`\`js
const observer = lozad();
observer.observe();
\`\`\`

-----------------------------------------------
## script腳本載入async、defer
### async
* 當瀏覽器遇到帶有async的\`<script>\`腳本會立即下載，並且在完成後立刻執行，同時不會中斷html渲染
* 若有多個async的\`<script>\`腳本，順序不會由上往下依序執行，是依檔案大小、下載速度決定
* 適合需要盡快執行，但不會影響渲染的腳本，同時下載可提高效能
* 例如：Google Analytics、Twitter、Facebook(分析、廣告、第三方追蹤)
\`\`\`html
<!--Google Analytics-->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"><\/script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_TRACKING_ID');
<\/script>

<!--Twitter、Facebook-->
<script async defer src="https://platform.twitter.com/widgets.js"><\/script>

<!--廣告-->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>
\`\`\`
### defer
* 當瀏覽器遇到帶有defer的\`<script>\`會優先進行html渲染，同時異步下載，等待html渲染完成後才執行
* 若有多個defer的\`<script>\`腳本，會由上往下依序執行
* 適合需要解析後、不用立即執行的腳本
* 例如：初始化腳本、監聽事件、修改頁面上的內容、Bootstrap.js
\`\`\`html
<!--頁面初始化腳本-->
<script defer src="js/init.js"><\/script>

<!--事件綁定腳本-->
<script defer src="js/dom.js"><\/script>

<!--Bootstrap.js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous" defer><\/script>
\`\`\``,__vite_glob_0_143=Object.freeze(Object.defineProperty({__proto__:null,default:__lozad_js________},Symbol.toStringTag,{value:"Module"})),__setup_defineProps__=`---
title: 使用setup與defineProps傳值
date: 2026-01-18
tags: ["Vue3"]
---
## 關於setup
### vue2：
元件建立得時候在\`setup()\`宣告的資料，必須要\`return\`，才能讓\`template\`使用
\`\`\`vue
<script>
const { ref } = Vue;

Vue.createApp({
  setup(){
    const count = ref(1);
    function addCount(){
      count.value++
    }
    return{
      count,
      addCount
    }
  }
}).mount('#app');
<\/script>
\`\`\`
### vue3：
\`<script setup>\`是簡化寫法，他會自動把\`setup()\`內的資料，return出來
\`\`\`vue
<script setup>
import { ref } from 'vue';

const count = ref(1);
const addCount = () => {
  count.value++;
};
<\/script>
\`\`\`
-----------------------------------------------
## defineProps傳接資料
1. \`defineProps()\`只在\`<script setup>\`能用
2. \`props\`是唯讀的(read-only)只能用，不能改
### 在父層：
\`\`\`vue
<script setup>
import AddTodo from 'components/AddTodo.vue';
import { ref } from 'vue';
const count = ref(0);
const addCount = () => {
    count.value += 1;
}
<\/script>

<template>
    <button type="button" @click="addCount()">按鈕</button>
    <addTodo :count="count"></addTodo>
</template>
\`\`\`
\`:count\`表示動態綁定
### 在子層(AddTodo)：
\`defineProps()\`會自動宣告props的型別，\`template\`實際上是使用props.count
但\`<script setup>\`會自動省略\`props.\`
\`\`\`vue
<template>
  {{ count }} 
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  count:{
    type: Number
  }
})
<\/script>
\`\`\``,__vite_glob_0_144=Object.freeze(Object.defineProperty({__proto__:null,default:__setup_defineProps__},Symbol.toStringTag,{value:"Module"})),___if_else_switch=`---
title: 判斷式if、else、switch
date: 2021-02-02
tags: ["JavaScript"]
---
## 運算子
|運算子|口語化說明|
|---|---|
|=|賦予|
|==|等於|
|===|等於(嚴謹模式)|
|!=|不等於|
|!==|不等於(嚴謹模式)|
|true|是;成立|
|false|不是;不成立|
|>|大於|
|<|小於|
|>=|大於等於|
|<=|小於等於|
|&&|以及(and)|
|｜｜|或是(or)|
|!|反轉true或false(not)|
\`\`\`js
console.log(1 === "1"); //false
console.log(1 === 1); //true
console.log(1 != "1"); //false
console.log(1 !== 1); //true
console.log(true == "1"); //true
console.log(true === "1"); //false
\`\`\`
\`在javascript裡：1是true、0是false\`

-----------------------------------------------
## if、else、else if
* 適合判斷式數值，限制範圍。
* 一律使用 **if** 開頭，若不成立，則往下執行。
* 可以使用多個 **else if** ，若不成立，則往下執行。
* 若以上都不成立則執行 **else** 。
\`\`\`js
//飢餓程度：1~10
let hungry = 8;

function eat(item){
    console.log("我要吃"+item);
}
//7以上
if(hungry >= 7){
    eat("披薩");
//3~6
}else if(hungry <= 6 && hungry > 2){
    eat("沙拉");
//0~2
}else{
    console.log("我不想吃");
}
\`\`\`
\`當以上都不成立時就執行else\`

-----------------------------------------------
## switch
* 效能比 **if...else** 好，適合判斷已知的結果。
*  **switch** 一定要帶參數才能判斷。
*  **break** 可阻止往下執行。
* 若都不成立則執行 **default** 。
\`\`\`js
//飢餓程度：好餓、還好、不餓
let hungry = "好餓";

function eat(item){
    console.log("我要吃"+item);
}

switch (hungry){
    case "好餓":
        eat("披薩")
        break;
    case "還好":
        eat("沙拉")
        break;
    case "不餓":
        console.log("我不想吃");
        break;
    default:
        console.log("隨便");
        break;
}
\`\`\`
\`當以上值都沒有就跑default\``,__vite_glob_0_145=Object.freeze(Object.defineProperty({__proto__:null,default:___if_else_switch},Symbol.toStringTag,{value:"Module"})),__nvm___node__=`---
title: 利用nvm來控制node版本
date: 2024-04-30
tags: ["node","Web"]
---
## 安裝nvm
\`\`\`bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
\`\`\`
|指令|一般|縮寫|
|---|---|---|
|安裝最新穩定版node|nvm install node|nvm i node|
|安裝指定版本node|nvm install 18.20.4|nvm i 18.20.4|
|使令指定node版本|nvm use 18.20.4||
|查看已安裝的node清單|nvm list|nvm ls|
|列出可安裝的nodeLTS版本|nvm ls-remote --lts||
|設定node預設使用版本|nvm alias default 18.20.4||
|移除已安裝版本|nvm uninstall 18.20.4|nvm uni 18.20.4|`,__vite_glob_0_146=Object.freeze(Object.defineProperty({__proto__:null,default:__nvm___node__},Symbol.toStringTag,{value:"Module"})),____Array__=`---
title: 各種操作Array方法
date: 2021-02-23
tags: ["JavaScript"]
---
## 新增陣列
*  **.push** (要新增的東西)，新增到陣列最後方。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.push("芭樂");
console.log(a);  //["蘋果","香蕉","鳳梨","芭樂"]
\`\`\`
*  **.unshift** (要新增的東西)，新增到陣列最前方。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.unshift("芭樂");
console.log(a);  //["芭樂","蘋果","香蕉","鳳梨"]
\`\`\`
*  **.concat** (要新增的東西)，新增到陣列最後方。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.concat("芭樂");
console.log(b);  //["蘋果","香蕉","鳳梨","芭樂"]
\`\`\`

-----------------------------------------------
## 刪除陣列
*  **.pop()** ，刪除陣列最後一項。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.pop();
console.log(a);  //["蘋果","香蕉"]
\`\`\`
*  **.shift()** ，刪除陣列第一項。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.shift();
console.log(a);  //["香蕉","鳳梨"]
\`\`\`
*  **.splice** (從第幾項開始刪除,刪到第幾項)。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.splice(1,2);
console.log(a);  //["蘋果"]
\`\`\`

-----------------------------------------------
## 抓出陣列
*  **.pop()** ，抓出陣列最後一項。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.pop();
console.log(a);  //鳳梨
\`\`\`
*  **.shift()** ，抓出陣列第一項。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.shift();
console.log(a);  //蘋果
\`\`\`
*  **.slice** (從第幾項開始抓,抓到第幾項)。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.slice(1,2);
console.log(b);  //香蕉
\`\`\`

-----------------------------------------------
## 複製陣列
*  **.copyWithin** (從第幾項後開始重複)。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.copyWithin(1);
console.log(a);  //["蘋果", "蘋果", "香蕉"]
\`\`\`
*  **.copyWithin** (複製貼上在第幾項,從第幾項開始複製,複製到第幾項結束)。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.copyWithin(0,2,3);
console.log(a);  //["鳳梨","香蕉","鳳梨"]
\`\`\`

-----------------------------------------------
## 替換陣列
*  **.fill** (要替換陣列的東西)。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.fill("芭樂");
console.log(a);  //["鳳梨","香蕉","鳳梨"]
\`\`\`
*  **.fill** (要替換陣列的東西,從第幾項開始替換,替換到第幾項結束)。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.fill("芭樂",2,3);
console.log(a);  //["蘋果","香蕉","芭樂"]
\`\`\`

-----------------------------------------------
## 合併陣列
*  **.concat()** ，將兩個陣列合併。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = ["芭樂","蓮霧"];
let c = a.concat(b);
console.log(c);  //["蘋果","香蕉","鳳梨","芭樂","蓮霧"]
\`\`\`

-----------------------------------------------
## 將陣列轉為字串
*  **.join()** ，將陣列轉為字串。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.join();
console.log(b);  //"蘋果,香蕉,鳳梨"
\`\`\`
*  **.join** (放入要插入的值)，可插入空白。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.join("&");
console.log(b);  //"蘋果&香蕉&鳳梨"
\`\`\`
*  **.toString()** ，將陣列轉為字串。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.toString();
console.log(b);  //"蘋果,香蕉,鳳梨"
\`\`\`

-----------------------------------------------
## 將字串轉為陣列
*  **Array.of** (要轉成陣列的東西)。
\`\`\`js
let a = "蘋果";
let b = Array.of(a);
console.log(b);  //["蘋果"]
\`\`\`
*  **Array.from** (要轉成陣列的東西)。
\`\`\`js
let a = "蘋果";
let b = Array.from(a);
console.log(b);  //["蘋","果"]
\`\`\`

-----------------------------------------------
## 尋找陣列裡的值
*  **.indexOf** (要尋找的東西)，若找到會回傳[位置]。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.indexOf("香蕉");
console.log(b);  //1
\`\`\`
*  **.indexOf()** ，若找不到，會回傳[-1]。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.indexOf("芭樂");
console.log(b);  //-1
\`\`\`
*  **.includes** (要尋找的東西)，若找到會回傳[true]。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.includes("蘋果");
console.log(b);  //true
\`\`\`
*  **.includes()** ，若找不到，會回傳[false]。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.includes("芭樂");
console.log(b);  //false
\`\`\`
*  **.lastIndexOf** (要尋找的東西)，若找到會回傳[位置]。
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.lastIndexOf("鳳梨");
console.log(b);  //2
\`\`\`

-----------------------------------------------
## 判斷是否為陣列
*  **Array.isArray()** ，可以判斷是否為陣列，如果不是就回傳[false]。
\`\`\`js
let a = "蘋果";
let b = Array.isArray(a);
console.log(b);  //false
\`\`\`
*  **Array.isArray()** ，可以判斷是否為陣列，如果是就回傳[true]。
\`\`\`js
let a = [2,8,6,0,4];
let b = Array.isArray(a);
console.log(b);
\`\`\`

-----------------------------------------------
## 改變陣列的排序
*  **.reverse()** ，反轉整個陣列。
\`\`\`js
let a = [2,8,6,0,4];
a.reverse();
console.log(a);  //[4,0,6,8,2]
\`\`\`
*  **.sort()** ，將陣列數值由小排到大。
\`\`\`js
let a = [2,8,6,0,4];
a.sort((x,y) => x - y);
console.log(a);  //[0,2,4,6,8]
\`\`\`
*  **.sort()** ，將陣列數值由大排到小。
\`\`\`js
let a = [2,8,6,0,4];
a.sort((x,y) => y - x);
console.log(a);  //[8,6,4,2,0]
\`\`\`

-----------------------------------------------
## 找出陣列裡符合條件的值
*  **.find()** ，找出陣列裡第一個符合條件的值，若找到會回傳[值]。
\`\`\`js 
let a = [2,8,6,0,4];
let b = a.find(item => item > 5);
console.log(b);  //8
\`\`\`
*  **.find()** ，若找不到符合的值，會回傳[undefined]。
\`\`\`js 
let a = [2,8,6,0,4];
let b = a.find(item => item > 10);
console.log(b);  //undefined
\`\`\`
*  **.findIndex()** ，找出陣列裡第一個符合條件的值，若找到會回傳[位置]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.findIndex(item => item > 5);
console.log(b);  //1
\`\`\`
*  **.findIndex()** ，若找不到符合的值，會回傳[-1]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.findIndex(item => item > 10);
console.log(b);  //-1
\`\`\`
*  **.every()** ，判斷陣列裡每一個值，如果全部符合條件就回傳[true]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.every(item => item < 10);
console.log(b);  //true
\`\`\`
*  **.every()** ，判斷陣列裡每一個值，如果有一項不符合條件就回傳[false]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.every(item => item > 2);
console.log(b);  //false
\`\`\`
*  **.some()** ，判斷陣列裡每一個值，只要有其中一項符合條件就回傳[true]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.some(item => item > 7);
console.log(b);  //true
\`\`\`
*  **.some()** ，判斷陣列裡每一個值，全都不符合條件才會回傳[false]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.some(item => item > 10);
console.log(b);  //false
\`\`\`

-----------------------------------------------
## 過濾陣列裡不符合條件的值
*  **.filter()** ，過濾掉陣列裡不符合條件的數值，回傳[陣列]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.filter((item) => item > 5);
console.log(b);  //[8,6]
\`\`\`
*  **.filter()** ，過濾掉陣列裡不符合條件的字串，回傳[陣列]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.filter((item) => item < 6);
console.log(b);  //[2,0,4]
\`\`\`

-----------------------------------------------
## 對陣列裡的每一項進行運算
*  **.map()** ，判斷陣列裡的每一個值，回傳[陣列]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.map(item => item > 5);
console.log(b);  //[false,true,true,false,false]
\`\`\`
*  **.map()** ，運算陣列裡每一個值，回傳[陣列]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.map(item => item + 1);
console.log(b);  //[3,9,7,1,5]
\`\`\`

-----------------------------------------------
## 加總陣列
*  **.reduce()** ，將陣列裡的值全部加總，回傳[值]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.reduce((x,y) => x+y);
console.log(b);  //20
\`\`\`
*  **.reduce()** ，將陣列裡的值全部相減，回傳[值]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.reduce((x,y) => x-y);
console.log(b);  //-16
\`\`\`
*  **.reduceRight()** ，將陣列裡的值全部相減(反向)，回傳[值]。
\`\`\`js
let a = [2,8,6,0,4];
let b = a.reduceRight((x,y) => x-y);
console.log(b);  //-12
\`\`\`

-----------------------------------------------
## 展開陣列
*  **.flat** (要展開幾層陣列)。
\`\`\`js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flat();
console.log(b);  //[2,8,6,0,4,1,[3],5]
\`\`\`
*  **.flat(Infinity)** ，可以展開多層陣列。
\`\`\`js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flat(Infinity);
console.log(b);  //[2,8,6,0,4,1,3,5]
\`\`\`
*  **.flatMap()** ，.flat()+.map()，將展開的陣列進行操作。
\`\`\`js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flatMap(item => item + 3);
console.log(b);  //[5,11,9,3,7,"1,3,53"]
\`\`\`

-----------------------------------------------
## 取得列印陣列每一項
*  **key...of** ，列印陣列每一項位置為[數值]。
\`\`\`js
let a = [2,8,6,0,4];
for(let key of a.keys()){
  console.log(key);  //0  //1  //2  //3  //4
}
\`\`\`
*  **key...in** ，列印陣列每一項位置為[字串]。
\`\`\`js
let a = [2,8,6,0,4];
for(let key in a){
  console.log(key);  //"0"  //"1"  //"2"  //"3"  //"4"
}
\`\`\`
* .forEach()，列印出陣列每一項以及每一項位置。
\`\`\`js
let a = [2,8,6,0,4];
a.forEach(function(item,i){
  console.log(i);  //0  //1  //2  //3  //4
})
\`\`\`
* for迴圈。
\`\`\`js
let a = [2,8,6,0,4];
for(let i=0 ; i<a.length ; i++){
  console.log(a[i]);  //0  //1  //2  //3  //4
}
\`\`\``,__vite_glob_0_147=Object.freeze(Object.defineProperty({__proto__:null,default:____Array__},Symbol.toStringTag,{value:"Module"})),________$1=`---
title: 合成兩張不同的臉
date: 2022-04-18
tags: ["Photoshop"]
---
## 合成兩張不同的臉
1. 將兩張臉合成。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-1.jpg)

-----------------------------------------------
2. 使用\`套索工具\`將五官框選起來並剪下。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-2.jpg)

-----------------------------------------------
3. 貼到另一張臉的圖層上。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-3.jpg)

-----------------------------------------------
4. 複製一張底下圖層。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-4.jpg)

-----------------------------------------------
5. 框選上方的五官圖層，並使用\`選取\`-\`修改\`-\`縮減\`。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-5.jpg)

-----------------------------------------------
6. 縮減值調整約\`10px\`。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-6.jpg)

-----------------------------------------------
7. 點選下層複製出來的臉圖層，並剪去範圍。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-7.jpg)

-----------------------------------------------
8. 選取兩個圖層，使用\`編輯\`-\`自動混合塗層\`。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-8.jpg)

-----------------------------------------------
9. 勾選全景。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-9.jpg)

-----------------------------------------------
10. 完成。
![圖片](./images/合成兩張不同的臉/合成兩張不同的臉-10.jpg)`,__vite_glob_0_148=Object.freeze(Object.defineProperty({__proto__:null,default:________$1},Symbol.toStringTag,{value:"Module"})),_VSCode____________GitHub_Pages_='---\ntitle: 在VSCode輸入指令直接將網站部署到GitHub Pages上\ndate: 2026-01-19\ntags: ["Vue3","GitHub"]\n---\n## 在Github建立新的Repository\n1. 建立`repository`時，網址為`帳號`/`專案名稱`\n2. 若已在`vscode`已經，建立了`git`檔，可以選擇推送儲存庫\n\n### 推送儲存庫指令：\n```markdown\ngit remote add origin https://github.com/帳號/vuetest.git\ngit branch -M main\ngit push -u origin main\n```\n3. 在專案中的終端機輸入以上指令，並且授權github允許存取vscode\n4. 回到github重整頁面，可以看到資料已上傳\n\n-----------------------------------------------\n## 將dist部署到GitHub Pages上\n\n1. 安裝`gh-pages`套件\n```bash\n$ npm i gh-pages\n```\n\n2. 新增`部署`指令，到`package.json`\n```js\n"scripts": {\n  "dev": "vite",\n  "build": "vite build",\n  "preview": "vite preview",\n  "deploy": "vite build && gh-pages -d dist"\n},\n```\n`gh-pages -d dist`指令表示將dist部署\n\n3. 此時若直接部署到`github`上，會因為網址不對而無法正常顯示，所以我們必須要再設定基本路徑：\n新增`base`讓名稱跟`帳號`/`vuetest`相同\n```js\n//vite.config.js\n\nexport default defineConfig({\n    base: \'/vuetest/\',\n});\n```',__vite_glob_0_149=Object.freeze(Object.defineProperty({__proto__:null,default:_VSCode____________GitHub_Pages_},Symbol.toStringTag,{value:"Module"})),__php__=`---
title: 將PHP專案運行起來
date: 2024-07-01
tags: ["PHP"]
---
## 執行php專案
1. 打開git中laravel專案
2. control＋\`開啟終端機
3. 複製.env.example輸入：cp .env.example .env
4. 在.env裡的
    * DB_DATABASE=(對照DB裡的SQL名稱)
    * DB_USERNAME=root
    * DB_PASSWORD=a1234567
    * APP_URL=localhost
5. 登入php(安裝在本機)
    * http://127.0.0.1/public/phpMyAdmin/
    * 帳號：root
    * 密碼：a1234567
6. 點“新增”
    1. 資料表名稱：(對照DB裡的SQL名稱)
    2. 選擇：utf8mb4_general_ci
    3. 點“匯入”將DB裡的.sql匯入
7. 回到終端機
    1. 更新依賴套件：composer update
    2. 產生應用程序金鑰：php artisan key:generate --ansi 
    3. 建立公開連結：php artisan storage:link
    4. 啟動伺服器：php artisan serve

-----------------------------------------------
## php專案結構

\`\`\`markdown
LaravelProject/
├── app/                        # 核心應用程式程式碼
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Kernel.php
│   ├── Models/
│   └── Providers/
│
├── bootstrap/                  # 啟動與自動載入設定
│   ├── cache/
│   └── app.php
│
├── config/                     # 所有功能設定檔
│   ├── app.php
│   ├── database.php
│   ├── mail.php
│   └── services.php
│
├── database/                   # 資料庫相關
│   ├── factories/
│   ├── migrations/
│   └── seeders/
│
├── public/                     # 唯一公開目錄（網站入口）
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.php
│
├── resources/                  # 未編譯資源
│   ├── views/                  # Blade 模板
│   ├── lang/                   # 多語系
│   ├── js/
│   └── sass/
│
├── routes/                     # 路由定義
│   ├── web.php
│   ├── api.php
│   └── console.php
│
├── storage/                    # 儲存編譯後檔案、log、session
│   ├── app/
│   ├── framework/
│   └── logs/
│
├── tests/                      # PHPUnit 測試
│   ├── Feature/
│   └── Unit/
│
├── vendor/                     # Composer 套件
│
├── .env
├── .env.example
├── .gitignore
├── artisan                     # Laravel 指令工具
├── composer.json               # PHP 套件設定
├── composer.lock
├── package.json                # 前端套件
├── phpunit.xml
├── server.php
└── webpack.mix.js              # (舊版) 前端打包設定
\`\`\`

### 各資料夾說明
* app：含此 App 的核心程式碼
* bootstrap：含此框架啟動與自動載入設定的檔案
* config：含此 App 所有功能的設定檔
* database：含資料庫遷移與資料填充檔案
* public：唯一公開目錄，使用者連到此 App 的進入點 (index.php)，含 JS、CSS 等資源檔
* resources：含 Blade 模板 HTML、未編譯的資源檔（LESS、Vue 等）及多國語言資料檔案
* routes：含此 App 的所有路由定義檔
* storage：Laravel 用來儲存檔案的目錄，含編譯後的 Blade 模板、session、log 等檔案
* tests：自動化測試目錄，含 PHPUnit 測試相關文件
* vendor：含 Laravel 主程式框架與相依套件（composer 安裝的套件存放在此目錄底下）

### 根目錄下一些重要文件說明
* artisan：Laravel 輸入指令的工具，artisan 的配置文件
* composer.json：每個 package 都需要，寫入 PHP 的相依套件與 namespace
* package.json：與 composer.json 類似，寫入 node 的相依套件（因為打包靜態資源需要）
* phpunit.xml：PHPUnit 的預設設定檔
* server.php：啟動 server 後會執行的文件檔
* webpack.mix.js：webpack 設定文件，因為 Laravel 版本 5.4 後，全部使用 webpack 打包靜態資源`,__vite_glob_0_150=Object.freeze(Object.defineProperty({__proto__:null,default:__php__},Symbol.toStringTag,{value:"Module"})),___alert____=`---
title: 實作：alert彈跳視窗
date: 2024-12-28
tags: ["Vue3"]
---
## 彈跳視窗
\`\`\`html
<div id="app">
  <button type="button" @click="openAlert">顯示跳窗</button>
  <alert-component v-if="showAlert" @emit-alert="closeAlert" :title="alertText"></alert-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      showAlert: false,
      alertText: "父元件的標題名稱"
    }
  },
  methods:{
    openAlert(){
      this.showAlert = true;
    },
    closeAlert(){
      this.showAlert = false;
    }
  }
})

app.component('alert-component',{
  props:["title"],
  methods:{
    emitAlert(){
      this.$emit("emit-alert")
    }
  },
  template:\`
  <div class="alert alert-primary">{{ title }}
    <button type="button" class="close" @click="emitAlert">&times;</button>
  </div>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_151=Object.freeze(Object.defineProperty({__proto__:null,default:___alert____},Symbol.toStringTag,{value:"Module"})),__________$2=`---
title: 實作：新增或編輯資料
date: 2024-12-09
tags: ["Vue3"]
---
## 實作新增或編輯資料
1. 點擊更新，會把輸入框裡的值新增到table
2. 點擊修改，會將資料放到輸入框裡，編輯後，再點擊更新，table資料會被更新
\`\`\`html
<div id="app">
  <form>
    <label>產品名稱</label>
    <input type="text" v-model="temp.name">
    <br>
    <label>產品圖片</label>
    <input type="text" v-model="temp.imgUrl">
    <br>
    <button type="button" @click="updateFile">更新</button>
  </form>
  <table border>
    <tr>
      <th>標題</th>
      <th>圖片</th>
      <th>銷售狀態</th>
      <th>編輯</th>
    </tr>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.name }}</td>
      <td>
        <img :src="item.imgUrl" width=100 alt="">
      </td>
      <td>
        <input type="checkbox" v-model="item.onStock">  
      </td>
      <td>
        <button type="button" @click="editItem(item)">修改</button>
      </td>
    </tr>
  </table>
</div>
\`\`\`
\`\`\`js
const products = [{
  id: '1',
  imgUrl: 'https://images.unsplash.com/photo-1516906571665-49af58989c4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80',
  name: 'MacBook Pro',
  onStock: false,
},{
  id: '2',
  imgUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  name: 'iPhone',
  onStock: false,
}];

const app = {
  data(){
    return{
      //顯示在table上的資料
      products: [],
      //在輸入框，要被編修的資料
      temp: {
        name: "",
        imgUrl: ""
      }
    }
  },
  methods:{
    //點擊修改時，將資料放入輸入框，但如果是this.temp = item，編修時會因為物件傳參考特性，table資料也會被更改
    editItem(item){
      //淺層拷貝
      this.temp = { ...item };
    },
    //點擊更新：需要判斷是在“修改”，還是在“新增”，判斷方式為“是否已存在id”，已存在products裡的資料，都是附有id值
    updateFile(){
      //如果沒有id，表示要新增資料
      if(!this.temp.id){
        //快速產生id的方法
        this.temp.id = new Date().getTime();
        this.temp.onStock = false;
        //將輸入框裡的值，新增到products裡
        this.products.push(this.temp);
      //如果有id，表示要修改資料
      }else{
        //先比對要修改products裡的哪一筆資料
        this.products.forEach((item,i)=>{
          //如果id完全相符
          if(item.id === this.temp.id){
            //就將那筆資料賦予新的值
            this.products[i] = this.temp;
          }
        })
      }
      this.temp = "";
    }
  },
  //此段表示成功介接api資料到data
  created(){
    this.products = products;
  }
}

Vue.createApp(app).mount("#app");
\`\`\`
\`:key="唯一值"\`
`,__vite_glob_0_152=Object.freeze(Object.defineProperty({__proto__:null,default:__________$2},Symbol.toStringTag,{value:"Module"})),____________=`---
title: 實作：點擊商品加入購物車
date: 2024-12-20
tags: ["Vue3"]
---
## methods方法
\`\`\`html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>我的購物車：</h6>
    <ul>
      <li v-for="cart in carts">
        {{ cart.name }}
      </li> 
    </ul>
    <p>總計：{{ conversionPrice(sum) }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: 0
    }
  },
  methods:{
    //商品加入購物車
    addToCart(product){
      this.carts.push(product)
      this.calculatePrice();
    },
    //計算購物車內的總金額
    calculatePrice(){
      let total = 0;
      this.carts.forEach((item)=>{
        total += item.price;
      })
      this.sum = total;
    },
    //轉換金額顯示格式
    conversionPrice(price){
      return \`NT$ \${price}\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## computed方法
\`\`\`html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>我的購物車：</h6>
    <ul>
      <li v-for="cart in carts">
        {{ cart.name }}
      </li> 
    </ul>
    <p>總計：{{ calculateTotal }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: 0
    }
  },
  methods:{
    addToCart(product){
      this.carts.push(product)
    }
  },
  computed:{
    calculateTotal(){
      let total = 0;
      this.carts.forEach((item)=>{
        total += item.price;
      })
      this.sum = total;
      return \`NT$ \${total}\`
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_153=Object.freeze(Object.defineProperty({__proto__:null,default:____________},Symbol.toStringTag,{value:"Module"})),_A_____B___=`---
title: 將A物件融入到B背景裡
date: 2022-04-19
tags: ["Photoshop"]
---
## 符合顏色
1. 將人物符合背景顏色。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-1.jpg)

-----------------------------------------------
2. 將人物丟入背景圖層(點陣圖)。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-2.jpg)

-----------------------------------------------
3. 點選人物圖層使用\`影像\`-\`調整\`-\`符合顏色\`。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-3.jpg)

-----------------------------------------------
4. 來源選擇此檔案。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-4.jpg)

-----------------------------------------------
5. 圖層選擇背景。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-5.jpg)

-----------------------------------------------
6. 調整\`明度\`、\`色彩強度\`、\`淡化\`。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-6.jpg)

-----------------------------------------------
7. 完成。
![圖片](./images/將A物件融入到B背景裡/將A物件融入到B背景裡-7.jpg)`,__vite_glob_0_154=Object.freeze(Object.defineProperty({__proto__:null,default:_A_____B___},Symbol.toStringTag,{value:"Module"})),_Hugo___GitHub=`---
title: 將Hugo上傳到GitHub
date: 2023-04-03
tags: ["Hugo"]
---
## 首先需要先安裝VScode
1. 先到[VScode](https://code.visualstudio.com/)頁面下載應用程式，安裝並開啟
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-1.png)

-----------------------------------------------
2. 安裝Chinese Language插件，讓介面變繁體中文
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-2.png)

-----------------------------------------------
3. 安裝Better TOML插件，讓code有顏色區別
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-3.png)

-----------------------------------------------
4. 若想修改VScode介面顏色，進入色彩佈景主題
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-4.png)

-----------------------------------------------
5. 出現選單視窗，並挑選適合主題
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-5.png)

-----------------------------------------------
6. 若想修改文字顯示大小，進入設定
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-6.png)

-----------------------------------------------
7. 在Font Size輸入文字大小
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-7.png)

-----------------------------------------------
## 設置基本Hugo參數
1. 開啟資料夾，點選config.toml檔，編輯參數值
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-8.png)

-----------------------------------------------
2. 更改頁籤圖示，製作圖檔命名favicon.png，放置到img資料夾裡面
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-9.png)

-----------------------------------------------
3. 關閉chrome重新開啟，即可看到設置成功
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-10.png)

-----------------------------------------------
## 上傳到Github Pages
1. 對資料夾按右鍵，打開終端機
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-11.png)

-----------------------------------------------
2. 輸入\`hugo\`，按enter執行
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-12.png)

-----------------------------------------------
3. 會看到資料夾多出\`public\`以及內容資料
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-13.png)

-----------------------------------------------
4. 將public的內容資料拉到Github複製的本地端資料夾內
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-14.png)

-----------------------------------------------
5. 打開Github Desktop建立commit
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-15.png)

-----------------------------------------------
6. 將程式碼Push到Github
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-16.png)

-----------------------------------------------
7. 到Github頁面的repository點選該專案，點選Add a README
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-17.png)

-----------------------------------------------
8. 再點Commit new file，之後過3~5分鐘後網站即可預覽
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-18.png)`,__vite_glob_0_155=Object.freeze(Object.defineProperty({__proto__:null,default:_Hugo___GitHub},Symbol.toStringTag,{value:"Module"})),_Hugo__Disqus____=`---
title: 將Hugo添加Disqus評論功能
date: 2023-04-04
tags: ["Hugo"]
---
## 將Hugo添加Disqus評論功能
1. 進入[Disqus](https://blog.disqus.com/)頁面，點擊GET STARTD，登入或註冊
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-1.png)

-----------------------------------------------
2. 點擊I want to install Disqus on my site
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-2.png)

-----------------------------------------------
3. 輸入專案名稱，選擇類別，按Create Site
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-3.png)

-----------------------------------------------
4. 選擇免費版Subscribe Now
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-4.png)

-----------------------------------------------
5. 選擇平台類型，若無則選擇I don't see my platform listed...
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-5.png)

-----------------------------------------------
6. Configure
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-6.png)

-----------------------------------------------
7. 輸入網站網址，下面可選擇顏色、字體樣式，按Next繼續
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-7.png)

-----------------------------------------------
8. 點擊Complete Setup
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-8.png)

-----------------------------------------------
9. 點擊Dismiss Setup
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-9.png)

-----------------------------------------------
10. 點擊右上角Edit Setting
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-10.png)

-----------------------------------------------
11. 接著會看到shortname，將他複製起來
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-11.png)

-----------------------------------------------
12. 貼到config.toml(設定檔)裡的disqusShortname(有些Hugo主題不支援)
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-12.png)

-----------------------------------------------
13. 填好之後更新網站，在點選任一篇文章，滑到底下就會出現評論
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-13.png)

-----------------------------------------------
14. 點開評論即可開始留言
![圖片](./images/將Hugo添加Disqus評論功能/將Hugo添加Disqus評論功能-14.png)`,__vite_glob_0_156=Object.freeze(Object.defineProperty({__proto__:null,default:_Hugo__Disqus____},Symbol.toStringTag,{value:"Module"})),__________localStorage_=`---
title: 將資料暫存在瀏覽器的localStorage裡
date: 2021-02-07
tags: ["JavaScript"]
---
## 將input值存入localStorage，再取出
|Key|Value|
|---|---|
|myName|text.value(輸入框裡的值)|
\`\`\`html
<input class="text" type="text">
<button class="save" type="button">儲存資料</button>
<button class="call" type="button">呼叫資料</button>
\`\`\`
\`\`\`js
let text = document.querySelector(".text");
let save = document.querySelector(".save");
let call = document.querySelector(".call");

//點擊「儲存資料」按鈕
save.addEventListener("click",function(){

    //儲存資料，(要存入的值是什麼標題，存入什麼值)
    localStorage.setItem("myName",text.value);
})

//點擊「呼叫資料」按鈕
call.addEventListener("click",function(){

    //設定變數=localStorage的myName的值
    let str = localStorage.getItem("myName");

    //彈跳出資料
    alert(str);
})
\`\`\`

-----------------------------------------------
## 將JSON資料存入localStorage，再取出
|Key|Value|
|---|---|
|fruitName|{name: "蘋果",price: 15}|
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    }
]

//存入"字串"資料
let fruitStr = JSON.stringify(fruitsData);
console.log(fruitStr); //"[{'name':'蘋果','price':15}]"
localStorage.setItem("fruitName",fruitStr);

//取出"字串"資料，並轉成JSON格式
let getData = localStorage.getItem("fruitName");
let fruitArr = JSON.parse(getData);
console.log(fruitArr[0].name); //"蘋果"
\`\`\`
\`從localStorage取出來的資料壹定都是字串\`

-----------------------------------------------
## 實作todolist
|Key|Value|
|---|---|
|todoItem|text.value(輸入框裡的值)|
\`\`\`html
<input class="text" type="text">
<button class="btn">按鈕</button>
<ul class="list"></ul>
\`\`\`
\`\`\`js
let todoData = [];
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

//初始化資料
function initData(){
    //取得localStorage上的"todoItem"資料
    let getData = localStorage.getItem("todoItem");
    //如果有取得資料，就將"字串"資料轉為JSON格式
    if(getData){
      todoData = JSON.parse(getData);
    }else{
      todoData = [];
    }
}
initData();

//更新資料
function updateList(){
    //建立空字串
    let str = "";
    //將所有資料跑一遍
    for(let i=0 ; i<todoData.length ; i++){
        //並組成<li>並且在<a>連結裡面帶入data-num編號
        str += "<li><a href='#' data-num='"+i+"'>刪除</a>"+todoData[i]+"</li>";
    }
    //組裝完成後，渲染到頁面上
    list.innerHTML = str;
}
updateList();

//點擊"按鈕"時新增資料
btn.addEventListener("click",function(){
    //如果input裡有值才執行
    if(text.value.trim() !== ""){
        //將input裡的值新增到資料
        todoData.push(text.value);
        //將整個資料轉成"字串"
        let setData = JSON.stringify(todoData);
        //儲存到localStorage上
        localStorage.setItem("todoItem",setData);
        //重新渲染頁面的資料
        updateList();
        //清空input裡的值
        text.value = "";
    }
},false)

//點擊"刪除"時刪除資料
list.addEventListener("click",function(event){
    //當我點擊的是ul裡的a才執行
    if(event.target.nodeName == "A"){
        //取得我點擊目標的data-num編號
        let targetNum = e.target.dataset.num;
        //並從資料中刪除該項
        todoData.splice(targetNum,1);
        //將整個資料轉成"字串"
        let setData = JSON.stringify(todoData);
        //儲存到localStorage上
        localStorage.setItem("todoItem",setData);
        //重新渲染頁面的資料
        updateList();
    }
})
\`\`\``,__vite_glob_0_157=Object.freeze(Object.defineProperty({__proto__:null,default:__________localStorage_},Symbol.toStringTag,{value:"Module"})),_______$5=`---
title: 將透明玻璃去背
date: 2022-04-20
tags: ["Photoshop"]
---
## 去背玻璃物體
1. 將圖檔丟入PS，並複製一個圖層
![圖片](./images/將透明玻璃去背/將透明玻璃去背-1.png)

-----------------------------------------------
2. 分別將不透明物體、透明物體去背
![圖片](./images/將透明玻璃去背/將透明玻璃去背-2.png)

-----------------------------------------------
3. 進入到色版，選擇紅、綠、藍色版中白色最亮的圖層進行複製
![圖片](./images/將透明玻璃去背/將透明玻璃去背-3.png)

-----------------------------------------------
4. 在新增的藍拷貝圖層使用\`影像\`-\`調整\`-\`色階\`
![圖片](./images/將透明玻璃去背/將透明玻璃去背-4.png)

-----------------------------------------------
5. 使用黑色滴管去吸取圖上的灰色(讓白色區域更明顯)
![圖片](./images/將透明玻璃去背/將透明玻璃去背-5.png)

-----------------------------------------------
6. 也可拖拉數值進行微調，完成後按確定
![圖片](./images/將透明玻璃去背/將透明玻璃去背-6.png)

-----------------------------------------------
7. 選取範圍(對圖示command+左鍵)
![圖片](./images/將透明玻璃去背/將透明玻璃去背-7.png)

-----------------------------------------------
8. 回到圖層，另新增空白圖層，並填入白色
![圖片](./images/將透明玻璃去背/將透明玻璃去背-8.png)

-----------------------------------------------
9. 在回到色版，同樣將藍圖層進行複製
![圖片](./images/將透明玻璃去背/將透明玻璃去背-9.png)

-----------------------------------------------
10. 同樣使用色階，這次用白色滴管去吸取灰色(讓黑色區域更明顯)
![圖片](./images/將透明玻璃去背/將透明玻璃去背-10.png)

-----------------------------------------------
11. 選取範圍(對圖示command+左鍵)，再反轉選取範圍(因為選取的範圍是白色)
![圖片](./images/將透明玻璃去背/將透明玻璃去背-11.png)

-----------------------------------------------
12. 回到圖層，另新增空白圖層，並填入黑色
![圖片](./images/將透明玻璃去背/將透明玻璃去背-12.png)

-----------------------------------------------
13. 若黑色太深可調整不透明度
![圖片](./images/將透明玻璃去背/將透明玻璃去背-13.png)

-----------------------------------------------
14. 在白色圖層適度還原玻璃的反射效果
![圖片](./images/將透明玻璃去背/將透明玻璃去背-14.png)`,__vite_glob_0_158=Object.freeze(Object.defineProperty({__proto__:null,default:_______$5},Symbol.toStringTag,{value:"Module"})),__Google__=`---
title: 嵌入Google地圖
date: 2024-01-06
tags: ["HTML"]
---
## Google map iframe設定
|屬性|說明|
|---|---|
|width|寬度|
|height|高度|
|src|來源網址|
|title|影片標題|
|frameborder|iframe邊框|
|allow|開啟youtube預設允許功能|
|allowfullscreen|允許全螢幕播放(有添加就有這項功能，移除就無這項功能)|`,__vite_glob_0_159=Object.freeze(Object.defineProperty({__proto__:null,default:__Google__},Symbol.toStringTag,{value:"Module"})),__Youtube__=`---
title: 嵌入Youtube影片
date: 2024-01-07
tags: ["HTML"]
---
## 直接設定的屬性
|屬性|說明|
|---|---|
|width|寬度|
|height|高度|
|src|來源網址|
|title|影片標題|
|frameborder|iframe邊框|
|allow|開啟youtube預設允許功能|
|allowfullscreen|允許全螢幕播放(有添加就有這項功能，移除就無這項功能)|
### 加在src後面的屬性，多個屬性以&符號隔開
|屬性|說明|
|---|---|
|start|從第幾秒開始，例：設300=從第5分鐘開始|
|autoplay|0=不自動播放(預設)；1=自動播放|
|control|0=顯示播放控制器；1=不顯示播放控制器(預設)|
|disablekb|0=停用鍵盤控制；1=啟用鍵盤控制(預設)|
|end|從第幾秒後停止|
|loop|0=不重複播放(預設)；1=重複播放|
|id|影片清單id|
|cc_load_policy|0=關閉字幕(預設)；1=開啟字幕|
|cc_lang_pref|字幕語系，zh=中文；en=英文|
|color|進度條顏色，red=紅色(預設)；white=白色|
|fs|0=隱藏全螢幕按鈕；1=顯示全螢幕按鈕(預設)|
|mute|0=有聲音(預設)；1=靜音|

\`若要設定自動播放，必須要設置成靜音mute=1\`
\`\`\`html
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/7KBicsXd9h8?start=10&autoplay=1&mute=0&fs=0" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin">
</iframe>
\`\`\``,__vite_glob_0_160=Object.freeze(Object.defineProperty({__proto__:null,default:__Youtube__},Symbol.toStringTag,{value:"Module"})),______=`---
title: 嵌入字體方法
date: 2024-01-08
tags: ["CSS"]
---
## 載入下載的字體
1. 下載字體檔(.ttf)，放在專案中的資料夾(fonts)
2. 在css樣式檔中寫以下程式碼：
\`\`\`css
/*Regular*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/*Bold*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

/*Italic*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

/*Bold Italic*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

p{
    font-family: 'MantouSans', Arial, sans-serif;
}
\`\`\`
\`檔案名稱：MantouSans-Regular，但只要寫MantouSans\`

-----------------------------------------------
## font-family說明
\`\`\`css
body{
    font-family: sans-serif; /*無襯線體*/
    font-family: serif; /*襯線體*/
    font-family: monospace; /*等寬體*/
    font-family: cursive; /*手寫體*/
    font-family: fantasy; /*幻想體*/

    font-family: 'MantouSans', Arial, sans-serif;
    /*font-family: 第一種字體, 第二種字體, "第三種字體", "通用字";}*/
    /*通用字一定會有，通常放在最末端*/
}
\`\`\`

-----------------------------------------------
## src說明
\`\`\`css
@font-face {
    font-family: 'Helvetica';
    src: url('../fonts/Helvetica.woff') format("woff") /*附檔名.woff*/
         url('../fonts/Helvetica.ttf') format("truetype") /*附檔名.ttf*/
         url('../fonts/Helvetica.eot') format("embedded-opentype") /*附檔名.eot*/
         local("Helvetica") /*抓取使用者電腦的字體，但必須要精確的對應字體名稱，通常不建議使用*/
}
\`\`\`

-----------------------------------------------
## 使google font引入方法
1. 到[Google Fonts](https://fonts.google.com/)網站
2. 找到想要的字體後，點擊“Get font”，再點擊“Get embed code”
3. link方法：直接寫在主要樣板中的head裡
\`\`\`html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
\`\`\`
4. import方法：在custom.scss檔中引入
\`\`\`scss
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
\`\`\``,__vite_glob_0_161=Object.freeze(Object.defineProperty({__proto__:null,default:______},Symbol.toStringTag,{value:"Module"})),__Hugo___=`---
title: 建立Hugo部落格
date: 2023-04-02
tags: ["Hugo"]
---
## 首先需要先安裝Homebrew
1. 按command+空白鍵打開搜尋，輸入terminal打開終端機
![圖片](./images/建立Hugo部落格/建立Hugo部落格-1.png)

-----------------------------------------------
2. 到[Homebrew](https://brew.sh/index_zh-tw)頁面複製指令
\`\`\`bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`
![圖片](./images/建立Hugo部落格/建立Hugo部落格-2.png)

-----------------------------------------------
3. 將指令貼到終端機上，按enter
![圖片](./images/建立Hugo部落格/建立Hugo部落格-3.png)

-----------------------------------------------
4. 接著\`盲打\`mac密碼，按enter
![圖片](./images/建立Hugo部落格/建立Hugo部落格-4.png)

-----------------------------------------------
5. 按enter繼續執行
![圖片](./images/建立Hugo部落格/建立Hugo部落格-5.png)

-----------------------------------------------
6. 出現Installation successful!表示安裝成功
![圖片](./images/建立Hugo部落格/建立Hugo部落格-6.png)
\`若要刪除套件在安裝指令後方將install加上un即可\`
\`\`\`bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
\`\`\`

-----------------------------------------------
## 安裝Hugo
1. 到[Hugo](https://gohugo.io/)頁面複製指令($符號不用)
\`\`\`bash
brew install hugo
\`\`\`
![圖片](./images/建立Hugo部落格/建立Hugo部落格-7.png)

-----------------------------------------------
2. 將指令貼到終端機上，按enter
![圖片](./images/建立Hugo部落格/建立Hugo部落格-8.png)

-----------------------------------------------
3. 安裝成功
![圖片](./images/建立Hugo部落格/建立Hugo部落格-9.png)

-----------------------------------------------
## 下載主題並運行Hugo
1. 到[Hugo Themes](https://themes.gohugo.io/)挑選自己喜歡的主題(示範Stack)
![圖片](./images/建立Hugo部落格/建立Hugo部落格-10.png)

-----------------------------------------------
2. 點選Download進入下載頁面
![圖片](./images/建立Hugo部落格/建立Hugo部落格-11.png)

-----------------------------------------------
3. 按Code再選Download ZIP下載主題
![圖片](./images/建立Hugo部落格/建立Hugo部落格-12.png)

-----------------------------------------------
4. 下載後將主題壓縮打開
![圖片](./images/建立Hugo部落格/建立Hugo部落格-13.png)

-----------------------------------------------
5. exampleSite資料夾拉出
![圖片](./images/建立Hugo部落格/建立Hugo部落格-14.png)

-----------------------------------------------
6. 並在裡面建立\`themes\`資料夾
![圖片](./images/建立Hugo部落格/建立Hugo部落格-15.png)

-----------------------------------------------
7. 再把hugo-theme-stack-master放進themes
![圖片](./images/建立Hugo部落格/建立Hugo部落格-16.png)

-----------------------------------------------
8. 把hugo-theme-stack-master的master刪除
![圖片](./images/建立Hugo部落格/建立Hugo部落格-17.png)

-----------------------------------------------
9. 對exampleSite資料夾右鍵選擇終端機
![圖片](./images/建立Hugo部落格/建立Hugo部落格-18.png)

-----------------------------------------------
10. 輸入\`hugo server\`後按enter執行
![圖片](./images/建立Hugo部落格/建立Hugo部落格-19.png)

-----------------------------------------------
11. 複製http://localhost:52622/貼到瀏覽器上
![圖片](./images/建立Hugo部落格/建立Hugo部落格-20.png)

-----------------------------------------------
12. 按enter後即可看到網站成功運行
![圖片](./images/建立Hugo部落格/建立Hugo部落格-21.png)

-----------------------------------------------
13. 若要關閉可按ctrl+C或直接關閉終端機
![圖片](./images/建立Hugo部落格/建立Hugo部落格-22.png)

-----------------------------------------------
## window運行Hugo方式
1. 先到[gohugoio](https://github.com/gohugoio/hugo/releases)下載最新版本應用程式
2. 下載後解壓縮並開啟，將\`hugo.exe\`放進exampleSite資料夾裡
3. 接著將該資料夾路徑刪除，並輸入cmd開啟終端機
4. 接著輸入\`hugo server\`後按enter執行
5. 將運行成功網址，貼到瀏覽器即可看到網站成功運行`,__vite_glob_0_162=Object.freeze(Object.defineProperty({__proto__:null,default:__Hugo___},Symbol.toStringTag,{value:"Module"})),__GA4____GA4=`---
title: 從舊GA4升級為新GA4
date: 2023-04-05
tags: ["Web"]
---
## 將Google Analytics升級成GA4
1. 登入[Google Analytics](https://analytics.google.com/analytics/web)進入首頁畫面，點擊下方管理
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-1.png)

-----------------------------------------------
2. 接著點擊中間\`建立資源\`
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-2.png)

-----------------------------------------------
3. 進入建立資源頁面，按照指示填入資源名稱(該專案顯示名稱)，按下一步繼續
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-3.png)

-----------------------------------------------
4. 填寫產業類別，商家規模，按下一步繼續
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-4.png)

-----------------------------------------------
5. 選擇業務目標，按建立
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-5.png)

-----------------------------------------------
6. 依照平台選擇
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-6.png)

-----------------------------------------------
7. 輸入網站網址，串流名稱，按建立串流(等待約5秒不動讓頁面自動彈出)
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-7.png)

-----------------------------------------------
8. 接著會出現安裝操作說明頁面，點選手動安裝
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-8.png)

-----------------------------------------------
9. 複製代碼
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-9.png)

-----------------------------------------------
10. 貼到網站的<head></head>裡面，並且將舊GA代碼刪除
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-10.png)

-----------------------------------------------
11. 重新更新網站後，回到[Google Analytics](https://analytics.google.com/analytics/web)首頁顯示該畫面，表示升級成功
![圖片](./images/從舊GA4升級為新GA4/從舊GA4升級為新GA4-11.png)`,__vite_glob_0_163=Object.freeze(Object.defineProperty({__proto__:null,default:__GA4____GA4},Symbol.toStringTag,{value:"Module"})),_______$4=`---
title: 把色版調整回來
date: 2022-04-21
tags: ["Photoshop"]
---
## 調整PS色版
1. 打開PS色版，卻發現變成紅綠藍三種顏色。
![圖片](./images/把色版調整回來/把色版調整回來-1.png)

-----------------------------------------------
2. 對色版右鍵，選擇介面選項。
![圖片](./images/把色版調整回來/把色版調整回來-2.png)

-----------------------------------------------
3. 跳出偏好設定介面，將底下選項中的\`用色彩顯示色版\`取消勾選
![圖片](./images/把色版調整回來/把色版調整回來-3.png)

-----------------------------------------------
4. 取消勾選後，色版恢復原本設定。
![圖片](./images/把色版調整回來/把色版調整回來-4.png)`,__vite_glob_0_164=Object.freeze(Object.defineProperty({__proto__:null,default:_______$4},Symbol.toStringTag,{value:"Module"})),___Route_Router______=`---
title: 搞清楚Route與Router分別在做什麼
date: 2026-02-01
tags: ["Vue"]
---

我們在vue要控制、變更或讀取路由的時候，就會需要安裝\`vue-router\`而其中又有兩種很類似的方法可操控
\`\`\`js
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
\`\`\`

### useRoute():我現在在哪？
\`route\`專門用來判斷現在的路由位置
\`\`\`js
const route = useRoute()

route.params.page
route.query.keyword
route.path
\`\`\`

2. useRouter():我要去哪？
\`router\`專門用來改變route
\`\`\`js
const router = useRouter()

router.push('/list/2')
router.push({ name: 'list', params: { page: 2 } })
router.replace(...)
router.back()
\`\`\`

補充：以下兩種寫法是相同意思
\`\`\`vue
<router-link :to="{ name: 'list', params: { page: 2 } }" />
\`\`\`
\`\`\`js
router.push(
    {   
        name: 'list',
        params: { page: 2 } 
    }
)
\`\`\`

:to={}通常可以傳哪些參數
\`\`\`html
<router-link
  :to="{
    name: 'list', // 或 path
    params: { page }, // 動態路徑
    query: { sort: 'new' }, // ?a=1&b=2
    hash: '#section2' // #錨點
    replace: true // 取代歷史紀錄
  }"
/>
\`\`\``,__vite_glob_0_165=Object.freeze(Object.defineProperty({__proto__:null,default:___Route_Router______},Symbol.toStringTag,{value:"Module"})),______________ISO=`---
title: 攝影必學三要素：光圈、快門、ISO
date: 2023-04-09
tags: ["Design"]
---
## 光圈(Aperture)
* 調整光圈葉片大小，控制從鏡頭進入的光量，如人的瞳孔
* F值=鏡頭的焦距/鏡頭光孔直徑
* 一般手機沒有光圈設定
* 光圈越大數字越小，光圈越小數字越大
* 大光圈容易聚焦，小光圈可全部對焦
* 最佳畫質光圈值：F/2~F/8

|f/|表示|進光量|影響|適用|
|---|---|---|---|---|
|數字小|光圈越大|進光量越多|背景虛化大(景深)|人像、靜態主體|
|數字大|光圈越小|進光量越少|背景虛化小|風景、大合照|

-----------------------------------------------
## 快門(Shutter)
* 快門打開時間長短，控制光進入感光元件的時間長短，如眼睛眨眼速度
* 用慢速快門時容易手震，建議使用腳架避免模糊
* 1"表示1秒，8表示1/8秒，1000表示1/1000秒
* 光源頻率不相同時，會產生閃爍，最低可調成1/30秒
* 拍照安全快門：鏡頭焦段=快門速度
* 拍攝安全快門：幀率X2=快門速度
* 正常值：1/160秒、1/250秒

|調整|表示|進光量|影響|適用|
|---|---|---|---|---|
|慢速快門|快門時間長|進光量越多|容易模糊、有殘影|飄移、流川、車軌|
|高速快門|快門時間短|進光量越少|比較清晰、被凍結|拍攝動物、跑步瞬間|

-----------------------------------------------
## ISO(感光度)
* 調整感光元件的對光的靈敏度，控制亮度與噪點的平衡
* 在光線充足的情況下，建議將數值調低、畫質越好
* 正常值：100~200

|調整|表示|曝光|影響|適用|
|---|---|---|---|---|
|ISO數值高|對光敏感度越高|容易曝光(越亮)|畫面雜訊多|星空|
|ISO數值低|對光敏感度越低|不易曝光(越暗)|畫面雜訊少|-|

-----------------------------------------------
## 白平衡(White Balance)
* 決定相機成像偏冷或偏暖的濾鏡效果
* K(Kelvin)是計算白平衡單位
* 可利用白紙設定相機，取得當前環境的白平衡
* 數值越大越暖，數值越小越冷

-----------------------------------------------
## 對焦模式(Fucus Mode)
* 峰值是相機對焦的輔助設定 
* 每個鏡頭都有最短對焦距離
|模式|效果|適用|
|---|---|---|
|AF自動對焦|隨著拍攝移動，相機自動捕捉|難著摸的動態物體|
|MF手動對焦|對焦深度固定|景深聚焦切換效果|

-----------------------------------------------
## 拍攝模式(PASM)
|模式|光圈|快門|ISO|適用|
|---|---|---|---|---|
|AUTO全自動模式|\`自動\`|\`自動\`|\`自動\`|成功率達99%|
|P程式自動模式|\`自動\`|\`自動\`|手動|聚焦物體亦離開容易模糊|
|A光圈先決模式|手動|\`自動\`|手動|靜物模式，留意畫面是否模糊|
|S快門先決模式|\`自動\`|手動|手動|留意畫面是否過曝或太暗|
|M純手動模式|手動|手動|手動|所有數值自己掌控|`,__vite_glob_0_166=Object.freeze(Object.defineProperty({__proto__:null,default:______________ISO},Symbol.toStringTag,{value:"Module"})),__Gulp__final_=`---
title: Gulp完整final版
date: 2023-08-21
tags: ["Gulp"]
---
## gulp-nunjucks-render
\`\`\`js
const gulp                 = require('gulp');
const sass                 = require('gulp-sass')(require('sass'));
const babel                = require('gulp-babel');
const plumber              = require('gulp-plumber');
const postcss              = require('gulp-postcss');
const autoprefixer         = require('autoprefixer');
const cssnano              = require('cssnano');
const postcssPresetEnv     = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const sourcemaps           = require('gulp-sourcemaps');
const concat               = require('gulp-concat');
const browserSync          = require('browser-sync').create();
const del                  = require('del');
const imagemin             = require('gulp-imagemin');
const newer                = require('gulp-newer');
const nunjucksRender       = require('gulp-nunjucks-render');

function clean(){
    return del(['dist/**/*','!dist/img'],{
        gitignore: true,
        force: true
    })
        .src('src/*.html') 
        .pipe(gulp.dest('dist')) 
}

function layout(){
    return gulp
        .src('src/**/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates']
        })) 
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
}

function sass(){
    return gulp
        .src('src/scss/*.*')
        .pipe(
            sass(
                outputStyle: 'compressed' //nested | expanded | compact | compressed
            ).on('error',sass.logError)
        )
        .pipe(
            postcss([
                postcssFlexbugsFixes(),
                postcssPresetEnv(),
                autoprefixer(),
                cssnano({
                    preset: "advanced"
                })
            ])
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(dist/css))
        .pipe(browserSync.stream())
}

function concat(){
    return gulp
        .src([
            'node_modules/jquery/dist/jquery.slim.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'src/js/*.js'
        ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/css'))
}

function babel(){
    return gulp
        .src('src/js/*.js')
        .pipe(plumber())
        .pipe(
            babel({
                presets: ['@babel/env'],
                minified: true
            })
        )
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
}

function imagemin(){
    return gulp
        .src('src/img/*')
        .src(newer('dist/img'))
        .pipe(
          imagemin([
            imagemin.mozjpeg({
              quality: 80,
            }),
            imagemin.optipng({
              optimizationLevel: 1
            }),
            imagemin.gifsicle({
              interlaced : true
            }),
            imagemin.gifsicle()
          ])
        )
        .pipe(gulp.dest('dist/img'))
}

function watch(){
    browserSync.init({
        server: { 
          baseDir: 'dist',
        },
        port: 3000,
        reloadDelay: 0,
        browser: 'google chrome',
        open: true
    });
    gulp.watch('src/**/*.html', gulp.series('copyHTML'));
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
}


exports.default = series('clean', 'copyHTML', 'sass', 'babel', 'imagemin', 'watch');
\`\`\``,__vite_glob_0_167=Object.freeze(Object.defineProperty({__proto__:null,default:__Gulp__final_},Symbol.toStringTag,{value:"Module"})),_______$3=`---
title: 混合圖層的應用
date: 2022-04-22
tags: ["Photoshop"]
---
## PS混合圖層效果
|模式|分類|應用|其他|
|---|---|---|---|
|變暗|去白留黑|-|-|
|色彩增值|去白留黑|疊加暗部|白底黑字簽名檔|
|加深顏色|去白留黑|增加對比|-|
|線性加深|去白留黑|減少對比|-|
|顏色變暗|去白留黑|-|-|
|變亮|去黑留白|-|-|
|濾色|去黑留白|疊加亮部|黑底雪花、燈光|
|加亮顏色|去黑留白|減少對比|-|
|線性加亮(增加)|去黑留白|增加對比|-|
|顏色變亮|去黑留白|-|-|
|覆蓋|去灰留黑白|疊加增加對比|聚光燈|
|柔光|去灰留黑白|微弱增加對比|柔和聚光燈|
|實光|去灰留黑白|強烈增加飽和|刺眼聚光燈|
|強烈光源|去灰留黑白|深灰減少對比，淺灰增加對比|-|
|線性光源|去灰留黑白|深灰減少暗度，淺灰增加亮度|-|
|小光源|去灰留黑白|-|-|
|實色疊印混合|去灰留黑白|數值不是0就是255|-|
|差異化|負片效果|RGB數值相減|-|
|排除|負片效果|-|-|
|減去|負片效果|-|-|
|分割|負片效果|-|-|

-----------------------------------------------
1. 變暗
![圖片](./images/混合圖層的應用/混合圖層的應用-1.png)

-----------------------------------------------
2. 色彩增值：去白留黑(黑色疊加)
![圖片](./images/混合圖層的應用/混合圖層的應用-2.png)

-----------------------------------------------
3. 加深顏色
![圖片](./images/混合圖層的應用/混合圖層的應用-3.png)

-----------------------------------------------
4. 線性加深
![圖片](./images/混合圖層的應用/混合圖層的應用-4.png)

-----------------------------------------------
5. 顏色變暗
![圖片](./images/混合圖層的應用/混合圖層的應用-5.png)

-----------------------------------------------
6. 變亮
![圖片](./images/混合圖層的應用/混合圖層的應用-6.png)

-----------------------------------------------
7. 濾色：去黑留白
![圖片](./images/混合圖層的應用/混合圖層的應用-7.png)

-----------------------------------------------
8. 加亮顏色
![圖片](./images/混合圖層的應用/混合圖層的應用-8.png)

-----------------------------------------------
9. 線性加亮(增亮)
![圖片](./images/混合圖層的應用/混合圖層的應用-9.png)

-----------------------------------------------
10. 顏色變亮
![圖片](./images/混合圖層的應用/混合圖層的應用-10.png)

-----------------------------------------------
11. 覆蓋
![圖片](./images/混合圖層的應用/混合圖層的應用-11.png)

-----------------------------------------------
12. 柔光
![圖片](./images/混合圖層的應用/混合圖層的應用-12.png)

-----------------------------------------------
13. 實光：去中間灰，留黑留白
![圖片](./images/混合圖層的應用/混合圖層的應用-13.png)

-----------------------------------------------
14. 強烈光源
![圖片](./images/混合圖層的應用/混合圖層的應用-14.png)

-----------------------------------------------
15. 線性光源
![圖片](./images/混合圖層的應用/混合圖層的應用-15.png)

-----------------------------------------------
16. 小光源
![圖片](./images/混合圖層的應用/混合圖層的應用-16.png)

-----------------------------------------------
17. 實色疊印混合
![圖片](./images/混合圖層的應用/混合圖層的應用-17.png)

-----------------------------------------------
18. 差異化
![圖片](./images/混合圖層的應用/混合圖層的應用-18.png)

-----------------------------------------------
19. 排除
![圖片](./images/混合圖層的應用/混合圖層的應用-19.png)

-----------------------------------------------
20. 減去
![圖片](./images/混合圖層的應用/混合圖層的應用-20.png)

-----------------------------------------------
21. 分割
![圖片](./images/混合圖層的應用/混合圖層的應用-21.png)`,__vite_glob_0_168=Object.freeze(Object.defineProperty({__proto__:null,default:_______$3},Symbol.toStringTag,{value:"Module"})),__________$1=`---
title: 瀏覽器搜尋與快取技巧
date: 2023-04-07
tags: ["Web"]
---
## 搜尋技巧
1. 打開瀏覽器在搜尋引擎
    * 用引號包覆搜尋字，可搜尋完整字詞
    * \`filetype:pdf\`輸入檔案類型，可以找到特定檔案

-----------------------------------------------
## 尋找網頁的IP位置
1. 右鍵\`檢查\`
2. \`Network\`再點選旁邊\`Name\`下的檔案，再點選旁邊\`Headers\`
3. Request URL：網址(DNS)
4. Remote Address：IP位置

-----------------------------------------------
## Clear Cache清除快取
chrome為了加速瀏覽速度，會自動抓取一些資料，但容易導致更新頁面後看到的還是舊的畫面，使用Clear Cache插件可以清除快取，讓chrome重新抓取最新資料
![圖片](./images/Chrome的小技巧/Chrome的小技巧-1.png)`,__vite_glob_0_169=Object.freeze(Object.defineProperty({__proto__:null,default:__________$1},Symbol.toStringTag,{value:"Module"})),_______$2=`---
title: 物件傳參考特性
date: 2024-12-04
tags: ["Vue3"]
---
## 兩個物件互相影響
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = fruits;
fruits2.name = "香蕉";
console.log(fruits.name); //香蕉
console.log(fruits2.name); //香蕉
\`\`\`
\`當物件賦予到另一個物件時，就等於指向同一個物件\`

-----------------------------------------------
## 兩個物件互相影響2
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fn = (item) => {
  item.name = "香蕉";
}

fn(fruits);
console.log(fruits.name); //香蕉
\`\`\`
\`當物件賦予到另一個物件時，就等於指向同一個物件\`

-----------------------------------------------
## 淺層拷貝(兩物件不影響)
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = Object.assign({},fruits);

fruits2.name = "香蕉";
console.log(fruits.name); //蘋果
console.log(fruits2.name); //香蕉

fruits2.obj.price = 80;
console.log(fruits.obj.price); //80
console.log(fruits2.obj.price); //80
\`\`\`
\`淺層拷貝的意思是，物件第一層指向不同，但下一層指向卻還是相同\`

-----------------------------------------------
## 淺層拷貝(兩物件不影響)2
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = {
  ...fruits
}

fruits2.name = "香蕉";
console.log(fruits.name); //蘋果
console.log(fruits2.name); //香蕉

fruits2.obj.price = 80;
console.log(fruits.obj.price); //80
console.log(fruits2.obj.price); //80
\`\`\`
\`淺層拷貝的意思是，物件第一層指向不同，但下一層指向卻還是相同\`

-----------------------------------------------
## 深層拷貝(兩物件不影響)
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = JSON.parse(JSON.stringify(fruits));
fruits2.name = "香蕉";
console.log(fruits.name); //蘋果
console.log(fruits2.name); //香蕉
\`\`\`
\`當物件賦予到另一個物件時，就等於指向同一個物件\``,__vite_glob_0_170=Object.freeze(Object.defineProperty({__proto__:null,default:_______$2},Symbol.toStringTag,{value:"Module"})),_computed______$1=`---
title: 用computed進行搜尋過濾
date: 2024-12-21
tags: ["Vue3"]
---
## methods方法
\`\`\`html
<div id="app">
  <input type="search" v-model="search">
  <h6>搜尋結果：</h6>
  <ul>
    <li v-for="product in filterProducts">
      {{ product.name }} / {{ product.price }}
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      search: ""
    }
  },
  computed:{
    filterProducts(){
      return this.products.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_171=Object.freeze(Object.defineProperty({__proto__:null,default:_computed______$1},Symbol.toStringTag,{value:"Module"})),_computed______=`---
title: 用computed進行計算處理
date: 2024-12-22
tags: ["Vue3"]
---
## getter、setter
\`\`\`html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>購買清單：</h6>
  <ul>
    <li v-for="cart in carts">
      {{cart.name}}
    </li>
  </ul>
  <p>老闆直接給優惠價：</p>
  <input type="text" v-model="num">
  <button type="button" @click="total = num">更新</button>
  <p>總計：{{ \`NT$ \${total}\` }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      num: "",
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: ""
    }
  },
  methods:{
    addToCart(product){
      this.carts.push(product);
    }
  },
  computed:{
    total:{
      get(){
        let total = 0;
        this.carts.forEach((item)=>{
          total += item.price;
        })
        return this.sum || total
      },
      set(val){
        this.sum = val;
      }
    }
  }
}).mount("#app");
\`\`\`
\`get會自動接收傳入的值進行計算，set會將值更新到data\``,__vite_glob_0_172=Object.freeze(Object.defineProperty({__proto__:null,default:_computed______},Symbol.toStringTag,{value:"Module"})),_watch__data__=`---
title: 用watch監聽data資料
date: 2024-12-23
tags: ["Vue3"]
---
## watch新舊值介紹
\`\`\`html
<div id="app">
  <input type="text" v-model="tempName">
  <p>{{ tempName }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      tempName: "",
    }
  },
  watch:{
    //new = 新輸入的值
    //old = 上一次輸入的值
    tempName(new,old){
      console.log(new,old)
    }
  }
}).mount("#app");
\`\`\`
\`當輸入第一次值的時候，watch\`

-----------------------------------------------
## watch監看，textarea字數
\`\`\`html
<div id="app">
  <textarea v-model="tempName" cols="30" rows="5"></textarea>
  <p>您已經輸入了{{ textLength }}個字元</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      tempName: "",
      textLength: 0,
    }
  },
  watch:{
    tempName(new,old){
      this.textLength = \`\${new.length}\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## computed監看data值有無更動
\`\`\`html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="productName">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="productStock">
  <p>{{ resultText }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      productName: "",
      productStock: false
    }
  },
  computed:{
    resultText(){
      return \`\${this.productName}目前\${this.productStock?"沒":""}有庫存\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## watch監看data值有無更動
\`\`\`html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="productName">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="productStock">
  <p>{{ resultText }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      productName: "",
      productStock: false,
      resultText: ""
    }
  },
  watch:{
    productName(){
      this.resultText = \`\${this.productName}目前\${this.productStock?"沒":""}有庫存\`
    },
    productStock(){
      this.resultText = \`\${this.productName}目前\${this.productStock?"沒":""}有庫存\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
## watch監看data物件有無更動(深層監聽)
\`\`\`html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="product.name">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="product.stock">
  <p>{{ resultText }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      product:{
        name: "",
        stock: false
      },
      resultText: ""
    }
  },
  watch:{
    product:{
      handler(new,old){
        this.resultText = \`\${this.product.name}目前\${this.product.stock?"沒":""}有庫存\`
      },
      deep: true
    }
  }
}).mount("#app");
\`\`\`
\`handler(n,o){},deep: true是固定寫法\``,__vite_glob_0_173=Object.freeze(Object.defineProperty({__proto__:null,default:_watch__data__},Symbol.toStringTag,{value:"Module"})),___for______=`---
title: 用傳統for迴圈列印資料
date: 2021-02-05
tags: ["JavaScript"]
---
## for基本用法介紹
\`\`\`js
//初始狀態;條件;每次執行
for(let i=0 ; i<3 ; i++){
    console.log("我會被執行"+i+"次");
    //"我會被執行0次"
    //"我會被執行1次"
    //"我會被執行2次"
}
\`\`\`
### 列印99乘法表：
\`\`\`js
for(let i=2 ; i<10 ; i++){
    console.log(i+'*'+i+'='+i*i);
}
//"2*2=4"
//"3*3=9"
//"4*4=16"
//"5*5=25"
//"6*6=36"
//"7*7=49"
//"8*8=64"
//"9*9=81"
\`\`\`
\`i=i+1等於i+=1等於i++\`

-----------------------------------------------
## 用for迴圈列印出json資料 
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

//列印出每一項水果
for(let i=0 ; i<fruitsData.length ; i++){
  console.log(fruitsData[i].name);
}
//蘋果
//香蕉
//鳳梨
\`\`\`
### 用if過濾結果：
\`\`\`js
//判斷價錢超過20的水果
for(let i=0 ; i<fruitsData.length ; i++){
    if(fruitsData[i].price > 20){
        console.log(fruitsData[i].name);
    }
}
//香蕉
//鳳梨

//判斷價錢超過20的水果，滿足條件就不繼續
for(let i=0 ; i<fruitsData.length ; i++){
    if(fruitsData[i].price > 20){
        console.log(fruitsData[i].name);
        break;
    }
}
//香蕉
\`\`\`
\`若使用break，if只要買足一次條件就不在執行後續\`
### 將數字加總：
\`\`\`js
let priceTotal = 0;

for(let i=0 ; i<fruitsData.length ; i++){
    priceTotal += fruitsData[i].price;
}

console.log(priceTotal); //75
\`\`\`

-----------------------------------------------
## 將資料列印在列表上(innerHTML)
\`\`\`html
<ul class="list"></ul>
\`\`\`
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

//宣告一個空字串
let str = "";
let list = document.querySelector(".list");

for(let i=0 ; i<fruitsData.length ; i++){
    //累加<li>
    str+="<li>"+fruitsData[i].name+"</li>";
}

//用innerHTML將組好的<li>一次塞入<ul>裡
list.innerHTML = str;
\`\`\`
### 輸出結果：
\`\`\`html
<ul class="list">
    <li>蘋果</li>
    <li>香蕉</li>
    <li>鳳梨</li>
</ul>
\`\`\`
\`innerHTML特性是會先清空元素再塞值\`

-----------------------------------------------
## 將資料列印在列表上(createElement+appendChild)
\`\`\`html
<ul class="list"></ul>
\`\`\`
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let list = document.querySelector(".list");

for(let i=0 ; i<fruitsData.length ; i++){

    //創建li元素
    let liElement = document.createElement("li");

    //將li的內容文字都分別塞名稱
    liElement.textContent = fruitsData[i].name;

    list.appendChild(liElement);
}
\`\`\`
### 輸出結果：
\`\`\`html
<ul class="list">
    <li>蘋果</li>
    <li>香蕉</li>
    <li>鳳梨</li>
</ul>
\`\`\`
\`appendChild不會清空內容\`

-----------------------------------------------
## 進階：在資料上加入編號
\`\`\`html
<ul class="list"></ul>
\`\`\`
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let list = document.querySelector(".list");
let str = "";

for(let i=0 ; i<fruitsData.length ; i++){
    //將資料組字串，並帶入data-num
    str += "<li data-num='"+ i +"'>"+ fruitsData[i].name +"</li>";
    list.innerHTML = str;
}

//監聽ul裡面的元素
list.addEventListener("click",function(e){
  if(e.target.nodeName !== "LI"){
    return
  }

  //點擊li時取得該元素的編號
  let targetNum = e.target.dataset.num;
  console.log("你點擊的是第"+targetNum+"資料");
})
\`\`\``,__vite_glob_0_174=Object.freeze(Object.defineProperty({__proto__:null,default:___for______},Symbol.toStringTag,{value:"Module"})),___Javascript__DOM____=`---
title: 用原生Javascript抓取DOM元素方法
date: 2021-02-03
tags: ["JavaScript"]
---
## 取得DOM元素方法
|方法|取得目標|回傳結果|
|---|---|---|
|.getElementById()|id|第一個符合的標籤|
|.getElementsByName()|name|物件|
|.getElementsByTagName()|<標籤>|物件|
|.querySelector()|id、class、<標籤>|第一個符合的標籤|
|.querySelectorAll()|id、class|物件|

-----------------------------------------------
## 抓取id元素
\`\`\`html
<div id="apple">蘋果</div>
\`\`\`
\`\`\`js
//範例一
let apple1 = document.getElementById("apple");
console.log(apple1); //<div id="apple">蘋果</div>

//範例二
let apple2 = document.querySelector('#apple');
console.log(apple2); //<div id="apple">蘋果</div>
\`\`\`

-----------------------------------------------
## 抓取name元素
\`\`\`html
<div name="apple">蘋果</div>
\`\`\`
\`\`\`js
//範例一
let apple1 = document.getElementsByName("apple");
console.log(typeof(apple1)); //NodeList(類陣列物件)

//範例二
let apple2 = document.querySelector('[name="apple"]');
console.log(apple2[0]); //<div id="apple">蘋果</div>
\`\`\`

-----------------------------------------------
## 抓取tag標籤
\`\`\`html
<button type="button">按鈕</button>
\`\`\`
\`\`\`js
//範例一
let btn1 = document.getElementsByTagName("button");
console.log(typeof(btn1)); //HTMLCollection(即時更新的類陣列)

//範例二
let btn2 = document.querySelectorAll('button');
btn2[0].textContent = "蘋果"; //<button type="button">蘋果</button>
\`\`\`

-----------------------------------------------
## 抓取class元素
\`\`\`html
<ul class="list">
  <li><a href="#" class="nav-link">蘋果</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
\`\`\`
\`\`\`js
//範例一
document.querySelector(".nav-link").textContent = "蓮霧";

//範例二
let list = document.querySelector(".list");
list.querySelectorAll(".nav-link")[0].textContent = "蓮霧";
\`\`\`
### 輸出結果：
\`\`\`html
<ul>
  <li><a href="#" class="nav-link">蓮霧</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
\`\`\`
\`querySelector若有多個，只會抓取第一個符合的元素\`

-----------------------------------------------
## 抓取input值
\`\`\`html
<input class="apple" type="text" value="蘋果">
\`\`\`
\`\`\`js
//範例一
let apple1 = document.querySelector(".apple");
apple1.value = "香蕉";

//範例二
let apple2 = document.querySelector(".apple");
apple2.setAttribute("value","香蕉");
console.log(typeof(apple.value)); //string
\`\`\`
### 輸出結果：
\`\`\`html
<input class="apple" type="text" value="香蕉">
\`\`\``,__vite_glob_0_175=Object.freeze(Object.defineProperty({__proto__:null,default:___Javascript__DOM____},Symbol.toStringTag,{value:"Module"})),___Javascript__DOM_____=`---
title: 用原生Javascript改變DOM樣式和內容
date: 2021-02-04
tags: ["JavaScript"]
---
## 替換標籤樣板
\`\`\`html
<button class="btn" type="button">按鈕</button>
<ul class="list">
  <li>蘋果</li>
</ul>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.onclick = function(){
  list.innerHTML = "<li>香蕉</li>";
}
\`\`\`
-----------------------------------------------
## 加入標籤樣板
\`\`\`html
<button class="btn" type="button">按鈕</button>
<ul class="list">
  <li>蘋果</li>
</ul>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

//加在"<li>蘋果</li>"前面
btn.onclick = function(){
  let bananaList = document.createElement("li");
  bananaList.textContent = "香蕉";
  list.prepend(bananaList);
}

//加在"<li>蘋果</li>"後面
btn.onclick = function(){
  let bananaList = document.createElement("li");
  bananaList.textContent = "香蕉";
  list.append(bananaList);
}
\`\`\`

-----------------------------------------------
## 改變文字內容
\`\`\`html
<button class="btn" type="button">按鈕</button>
<p class="apple">蘋果</p>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let apple = document.querySelector(".apple");

btn.onclick = function(){
  apple.textContent = "香蕉";
}
\`\`\`

-----------------------------------------------
## 改變標籤屬性
\`\`\`html
<button class="btn" type="button">按鈕</button>
<a class="link" href="#">連結</a>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

btn.onclick = function(){
  link.setAttribute("href","https://www.google.com.tw/");
  let href = link.getAttribute("href");
  console.log(href); //"https://www.google.com.tw/"
}
\`\`\`

-----------------------------------------------
## 改變元素樣式
\`\`\`html
<button class="btn" type="button">按鈕</button>
<a class="link" href="#">連結</a>
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

//將連結背景變紅色
btn.onclick = function(){
  
  //第一種寫法
  link.style.backgroundColor = "red";

  //第二種寫法，多樣式寫法["",""]
  link.style["background-color"] = "red";

  //第三種寫法，多樣式寫法"";""
  link.style.cssText = "background-color: red";
}
\`\`\`

-----------------------------------------------
## 取得input裡的值
\`\`\`html
<button class="btn" type="button">按鈕</button>
<input class="text" type="text">
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.onclick = function(){
  console.log(text.value); //[顯示輸入框裡的文字]
}
\`\`\`

-----------------------------------------------
## 取得input的類型
\`\`\`html
<button class="btn" type="button">按鈕</button>
<input class="password" type="password">
\`\`\`
\`\`\`js
let btn = document.querySelector(".btn");
let password = document.querySelector(".password");

btn.onclick = function(){
  console.log(password.type); //password
}
\`\`\`

-----------------------------------------------
## XSS(Cross Site Scripting)
* 跨網站指令碼攻擊。
* 在 **input** 裡直接撰寫 **\\<script>** 腳本來進行攻擊。
* 盡量避免使用 **.onclick** + **.innerHTML** 方法。

|名稱|innerHTML|createElement|
|---|---|---|
|使用方法|組完字串再帶入|以DOM節點來處理|
|效能|比較好|比較差|
|安全性|比較差|比較好|`,__vite_glob_0_176=Object.freeze(Object.defineProperty({__proto__:null,default:___Javascript__DOM_____},Symbol.toStringTag,{value:"Module"})),__AJAX__=`---
title: 發送AJAX請求
date: 2021-02-09
tags: ["JavaScript"]
---
## 動態載入資料(AJAX)
* 使用\`new XMLHttpRequest\`原型，來向伺服器發送請求。
* 不用重新整理網頁就能取得資料庫回傳的資料，例如 : 
    * 加入購物車，顯示商品數量。
    * 註冊帳號時，顯示該帳號是否已使用。
    * 搜尋時，顯示的關鍵提示字。
* 載入的資料必須支援跨網域(CORS)。
    * 若發送請求時出現\`Access-Control-Allow-Origin\`錯誤，代表不支援
\`\`\`js
let xhr = new XMLHttpRequest();
\`\`\`

-----------------------------------------------
## .open("方法" , "網址" , true/false)。
* 向伺服器發送請求.open(method, url, async, user, password)。
    * method：請求方法（如 "GET"、"POST"、"PUT"、"DELETE" 等）
    * url：請求的 URL 地址，可以是相對路徑或絕對路徑。
    * async(可選)：是否異步執行請求，預設為 true。如果設定為 false，請求會同步執行，頁面會被阻塞，直到請求完成。一般建議使用異步請求。
    * user(可選)：HTTP 請求的使用者名稱，用於需要身份驗證的請求。
    * password(可選)：HTTP 請求的密碼，用於需要身份驗證的請求。
|請求方法|說明|
|---|---|
|"GET"|用於請求數據。通常用於獲取資源。|
|"POST"|用於將數據發送到伺服器。例如，提交表單或上傳數據。|
|"PUT"|用於更新伺服器上的資源。|
|"DELETE"|用於刪除伺服器上的資源。|
|"PATCH"|用於更新部分資源，類似於 PUT，但只更新部分內容。|
|"HEAD"|與 GET 類似，但不返回回應體，僅返回回應頭部信息。|
|"OPTIONS"|用於查詢伺服器支持哪些請求方法和其他配置。|
|"TRACE"|用於追蹤請求和回應的路徑，通常很少使用。|
|"CONNECT"|用於建立到目標伺服器的隧道連接，常用於代理伺服器。|
\`\`\`js
let xhr = new XMLHttpRequest();

//true(預設)，不等資料載入完就會往下執行(非同步載入)
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);

//false，等待資料載入完後才往下執行(同步載入)
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",false);
\`\`\`

-----------------------------------------------
## .readyState
取得當前請求的處理狀態。
|處理狀態|說明|
|---|---|
|0|已成功建立new XMLHttpRequest()|
|1|使用了open()，但還沒有send()|
|2|偵測到使用send()|
|3|loading中|
|4|已成功撈到資料|
\`\`\`js
let xhr = new XMLHttpRequest();

console.log(xhr.readyState); //0
\`\`\`

-----------------------------------------------
## .setRequestHeader
決定傳送給伺服器的資料格式。
\`\`\`js
let xhr = new XMLHttpRequest();

xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",false);

//傳送表單格式
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

//傳送JSON格式
xhr.setRequestHeader("content-type","application/json");
\`\`\`

-----------------------------------------------
## .send
傳送給伺服器資料。
\`\`\`js
let xhr = new XMLHttpRequest();

xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);

//回傳"空"值
xhr.send(null);
\`\`\`

-----------------------------------------------
## .onload
* .responseText
    * 取得伺服器回傳的"字串"資料。
    * 使用\`JSON.parse()\`，來解析回傳的資料。
* .status
    * 可以取得HTTP狀態碼。
|HTTP狀態碼|說明|
|---|---|
|200|請求成功並返回了所需的結果。|
|201|請求已成功並且創建了一個新的資源。|
|204|請求成功，但沒有返回任何內容（例如刪除資源時常見）。|
|301|請求的資源已被永久移動到新的 URL，未來的請求應該使用新的 URL。|
|302|請求的資源臨時移動，將來可能會還原，通常是瀏覽器自動跳轉。|
|304|請求的資源未被修改過，瀏覽器可以使用快取中的版本。|
|400|請求格式錯誤，服務器無法理解。|
|401|請求缺少身份驗證或身份驗證無效，通常表示需要登入。|
|403|服務器理解請求，但拒絕執行它，通常是權限不足。|
|404|找不到請求的資源，這是最常見的錯誤之一。|
|405|請求使用的 HTTP 方法（例如 GET、POST）不被目標資源支持。|
|500|服務器遇到未預期的情況，無法處理請求。|
|502|服務器作為網關或代理時，從上游伺服器獲得無效響應。|
|503|服務器目前無法處理請求，通常是因為過載或正在維護。|
|504|服務器作為網關或代理時，未能從上游伺服器獲得及時響應。|
\`\`\`js
xhr.onload = function(){
    if(xhr.status == 200){
        //將得到的轉為JSON格式
        let str = JSON.parse(xhr.responseText);
        console.log(str);
    }else{
        console.log("取得失敗")
    }
}
\`\`\`

-----------------------------------------------
## XMLHttpRequest 取得訊息
\`\`\`html
<div class="message"></div>
\`\`\`
\`\`\`js
let message = document.querySelector(".message");

let xhr = new XMLHttpRequest();

console.log(xhr.readyState); //0：成功建立new XMLHttpRequest()

xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);

console.log(xhr.readyState); //1：使用了open()，但還沒有send()

xhr.send(null);

console.log(xhr.readyState); 

//2：偵測到使用send()
//3：loading中
//4：已成功撈到資料

xhr.onload = function(){
    if(xhr.status == 200){
        let str = JSON.parse(xhr.responseText);
        //在頁面上顯示值
        message.textContent = str.[0].name;
    }else{
        console.log("資料錯誤！！")
    }
}
\`\`\`
### 輸出結果：
\`\`\`html
<div class="message">王小名</div>
\`\`\`
\`正常情況下都會使用true非同步載入資料，因為資料龐大頁面會載入很久\``,__vite_glob_0_177=Object.freeze(Object.defineProperty({__proto__:null,default:__AJAX__},Symbol.toStringTag,{value:"Module"})),__________=`---
title: 給設計師的印刷懶人包
date: 2023-02-18
tags: ["Design"]
---
## 關於印刷注意事項
### 輸出
1. 開版印刷(印刷廠)
    * 獨立版印刷、凸版印刷(色差小、價格貴)
        * 品牌主視覺
        * 大量印製
    * 合版印刷(色差大、價格便宜) 
        * 適合名片、DM、少量宣傳品
        * ex.健豪、藍格
2. 數位印刷(超商、印表機)
### 校稿
* 交稿時需注意一般印刷廠軟體版本較舊，需要降轉至CS5、CS6版本
* 完稿後將文字和線條轉外框，大型圖檔另外附件
### 對色
* AI對稿色票【視窗】→【色票資料庫】→【色表】
    * →【PANTONE+Solid Coated】(亮面紙張)
    * →【PANTONE+Solid Uncoated】(霧面紙張)
### 解析度
* 大圖輸出解析度300dpi
* 小張名片、A4解析度150dpi
### 其他
* 紙張放數 = 紙張印刷造成的損耗抓約抓總量的5%

-----------------------------------------------
## 一般印刷紙材
|紙張|材質|防水|外觀|特性|應用|
|---|---|:---:|---|---|---|
|珠光紙|塑膠|Ｏ|珍珠光澤質感|不易吸墨、飽和度佳|標籤貼|
|合成紙|塑膠|Ｏ|霧面質感|成本較低、耐高低溫、飽和度佳|生鮮食品、美妝貼紙|
|炫光紙|紙張|Ｘ|金屬光澤質感|有分平滑、肌理紋路|高級印刷、特殊作品|
|安格紙|紙張|Ｘ|方格壓紋|易吸墨|雅痞風格印刷|
|象牙卡|紙張|Ｘ|平滑、紙張纖維質感|易吸墨、不反光、色澤沉穩|柔和細緻印刷、插畫作品、吊卡|
|萊妮紙|紙張|Ｘ|十字壓紋|易吸墨、噴印較深|典雅風格印刷、插畫作品|
|一級卡|紙張|Ｘ|米黃色、平滑有光澤|不易吸墨、成本較低|包裝盒、明信片|
|銅版紙|紙張|Ｘ|平滑、紙張纖維質感|會反光、成本較低、飽和度佳|標籤貼紙、小張輸出|
|模造紙|紙張|Ｘ|表面粗糙、像圖畫紙|易吸墨、不易暈開、飽和度差|環保產品包裝、復古質感|
|牛皮紙|紙張|Ｘ|黃褐色|易吸墨|書寫或蓋章、復古質感印刷|
|條紋紙|紙張|Ｘ|褐色|易吸墨|書寫或蓋章、復古質感印刷|
|透明貼紙|塑膠|Ｏ|完全透明|耐磨抗刮、不易破|產品LOGO、透明瓶器|

* 頂級象牙卡適合打凸或打凹
    * 頂級和一般差別在於厚度
    * 噴印黑色會呈黑灰色
* 一級卡有分一級卡(薄)、頂級卡(中)、瑞典一級卡(厚)
    * 瑞典一級卡可來製作包裝
* 銅版紙又分特銅、雪銅、銅西
    * 特銅：光澤度較高、更平滑(傳單、書籍、海報、月曆)
    * 雪銅：霧光效果、不反光、不易穿透(明信片、喜帖、邀請卡)
    * 銅西：西卡紙上塗料，紙張粗、硬度高(書籍封面、卡片、書籤、型錄)
    * 單銅、雙銅則是在單面或雙面上塗料
    * 成本最低，適用於

-----------------------------------------------
## 後加工處理
|加工|處理|
|---|---|
|上亮膜|表面光滑，會反光|
|上霧膜|提升質感，不會反光|
|局部上光|讓重點部分微微凸起、更鮮艷、更光亮\`建議字體大於9pt、線條大於0.75pt\`|
|絲絨加工|頂級卡＋後加工處理，表面絲絨質感、更滑順|
|燙金|需開版，字級、線條不可太細小|
|軋型|對紙張進行裁型，刀模線離邊距至少5mm，刀版：裁切線／線版：折線|

-----------------------------------------------
## 大圖輸出紙材
|紙張|外觀|特性|應用|
|---|---|---|---|
|海報紙|多種|不易破、吸墨性佳、飽和度差|印刷打樣、短期室內海報|
|PP相紙|米黃|又稱合成紙、飽和度佳|長期海報、年曆、裱框畫、店面橫幅布條|
|PVC|白色|具延展性不易殘膠、防水、耐候性質|玻璃貼、人形立牌、電梯門、廣告看板、壁面輸出|

* 大圖輸出機不適合噴印紋路材質紙張
* 通常輸出寬度介於120~150公分
* 建議圖檔至少要300dpi以上
* 水性墨適合室內；油性墨適合室外
* 上亮膜或霧膜後可增加防水性，但顏色會變深
* PP相紙和PVC有分背膠或無背膠
    * PVC又細分高遮蔽、灰膠、半透、全透

-----------------------------------------------
## 大圖輸出板材
|紙張|材質|防水|特性|應用|
|---|---|:---:|---|---|
|合成板|珍珠板兩面貼合PVC|Ｏ|內芯較軟易變形、美工刀可裁切|人形立牌、POP、吊掛圖|
|豪卡板|珍珠板兩面貼合銅西卡|Ｘ|不易起泡、質量輕、內芯厚實|立牌與展場背板|
|發泡板|聚苯乙烯製成|Ｏ|表面光滑不退色、硬度較高、不易變形|室外大圖輸出看板、陳列架|
|PP瓦楞板|碳氫化合物熱熔壓製成|Ｏ|質量輕、抗壓力耐撞擊、耐高低溫|廣告看板、交通標示牌|

-----------------------------------------------
## 才數計算
### 【長cm】×【寬cm】÷ \`900\` = 才數
\`\`\`markdown
範例：150 x 420 ÷ 900 = 70
\`\`\`
### 1才多少錢？ 價錢 ÷ 才數 = 1才價錢
\`\`\`markdown
範例：1400 ÷ 70 = 20
\`\`\`
\`30cm × 30cm = 1才\`

-----------------------------------------------
## 才數價格參考
各家印刷廠品質不同，以下價格僅供參考(2018~2020)

|材質|1才價錢(30x30cm)|
|---|---|
|油性帆布|11.9~13.3元|
|PP相紙(合成紙)|25元|
|PVC貼紙|20~25元|
|PVC貼紙(割型)|30元|
|全透-PVC貼紙|60~70元|
|5mm合成板|35元|
|5mm合成板(割型)|40元|
|5mm豪卡板(單面)|35元|
|5mm豪卡板(割型)|40元|
|5mm豪卡板(雙面)|40元|
|1cm豪卡板(割型)|50元|
|1cm珍珠板雙面(割型)|60元|
|2cm珍珠板雙面(割型)|80元|
|卡點割字|30~35元|
|珍珠畫布|40元|
|1MM發泡板|45元|
|帆布施工費|5元|
|貼圖施工費|15元|
|17公分紙腳架|20元/個|`,__vite_glob_0_178=Object.freeze(Object.defineProperty({__proto__:null,default:__________},Symbol.toStringTag,{value:"Module"})),________=`---
title: 網站架設基本概念
date: 2023-03-10
tags: ["Web"]
---
## 架設網站的基本概念
|名稱|比喻|說明|
|---|---|---|
|網址（Domain）|地址|讓使用者找到你|
|主機（Hosting）|土地|放置網站資料的地方|
|網站（Website）|房子|真正呈現內容的東西|
|DNS|導航系統|把網址轉成主機IP|

### 網址（Domain）
網址的作用只是方便記憶，實際上網站是透過IP位址運作。
\`\`\`markdown
www.example.com
\`\`\`
### DNS (Domain Name System)
* 將網域與主機IP位置串連起來
* 把「人類看得懂的網址」轉換成「電腦看得懂的 IP 位址」

### 主機（Hosting）
存放網站檔案的伺服器，當有人輸入你的網址：
1. DNS 解析 IP
2. 瀏覽器透過 HTTP 發送請求
3. 主機回傳網站內容

-----------------------------------------------
## 主機種類解析

### 實體主機
比喻：「獨棟別墅」，一整台伺服器只給你使用，效能強、適合大型企業，但昂貴

### 虛擬主機
比喻：大樓裡的房間

|項目|共享主機|虛擬私人伺服器主機|雲端代管主機|
|---|---|---|---|
|比喻|分租雅房|獨立公寓|有管理員的高級公寓|
|價格|便宜|中等|中高|
|資源|多個網站共用|獨立CPU/RAM|依底層VPS配置|
|效能|容易受他人影響|穩定|穩定|
|管理方式|通常有cPanel|需自行管理伺服器|平台代為管理|
|系統環境|受限制|可安裝Linux/Windows Server|已預設優化環境|
|可部署技術|限制較多|可安裝Node.js、Laravel等|支援主流框架|
|IP|通常共用IP|獨立IP|通常提供獨立IP|
|計費方式|固定年費/月費|固定規格計費|流量與資源彈性計費|
|例如|Godaddy、Bluehost、A2 Hosting|Linode、DigitalOcean、Google Cloud Platform|Cloudways、AWS、Google Cloud Platform|

-----------------------------------------------
## 網站通訊協定

### HTTP
* 瀏覽器與伺服器之間的傳輸方式
* 用來傳輸 HTML、CSS、JS
* HTTPS = HTTP + SSL安全憑證

### WebSocket
* 長連線協定(WS)
* 用於即時資料傳輸
* WSS是加密版本
* 例如：聊天室、即時報價系統

### FTP
* 客戶端與遠端主機傳輸文件方式
* 用來控制文件的雙向傳輸
* SFTP = FTP + SSH加密
* 例如：Filezilla、WinSCP

-----------------------------------------------
## 郵件協定

### 收信
* POP3單向郵局協定第三版：下載到本機
* IMAP互動郵件存取協定：同步雲端郵件

### 發信
* SMTP簡單郵件傳輸協定：負責寄信

-----------------------------------------------
## 安全與伺服器管理協定

### SSL/TLS
* 把資料「加密」再傳輸
* TLS是SSL的升級版本
* 當使用者瀏覽網站時：
    1. 瀏覽器發送請求
    2. 透過 TLS 建立加密通道
    3. 傳輸資料會被加密
    4. 就算被攔截也看不懂內容

### SSH
* SSH是加密的連接通訊協定伺服器金鑰
* 用來安全遠端登入伺服器
* SSH 就是讓你透過終端機：
    1. 登入 Linux
    2. 安裝 Node.js
    3. 部署網站
    4. 重啟服務
    5. 設定防火牆`,__vite_glob_0_179=Object.freeze(Object.defineProperty({__proto__:null,default:________},Symbol.toStringTag,{value:"Module"})),_______footer____=`---
title: 網頁排版技巧：footer置底方法
date: 2024-01-01
tags: ["CSS"]
---
## 如何讓footer置底
\`\`\`css
html{
  height: 100%;
  overflow-x: hidden;
}

body{
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

footer{
  margin-top: auto;
}
\`\`\``,__vite_glob_0_180=Object.freeze(Object.defineProperty({__proto__:null,default:_______footer____},Symbol.toStringTag,{value:"Module"})),_______$1=`---
title: 網頁相關大小事
date: 2022-04-17
tags: ["Web"]
---
## 檔案路徑
\`\`\`markdown
project/
└── src/
    └── css/
        ├── all.scss
        ├── helpers/
        │   └── _variable.scss
        └── component/
            └── _sidebar.scss
\`\`\`
1. .src('src/css/**/*.scss') 獲取\`all.scss\`、\`_variable.scss\`、\`_sidebar.scss\`
2. .src('src/css/*/*.scss') 獲取\`_variable.scss\`、\`_sidebar.scss\`
3. .src('src/css/*.scss') 獲取\`all.scss\`

-----------------------------------------------
## 查詢ajax是否跨網域
1. 複製ajax網址
2. 使用[test-cors.org](https://test-cors.org/)
3. 貼上ajax網址
4. XHR start：0 (不支援跨網域)
5. XHR start：200 (支援跨網域)

-----------------------------------------------
## API(Application Programming Interface)
* 已經寫好程式語言的應用程式介面 
|名稱|說明|
|:---|:---|
|Google Maps|地圖導覽|
|Heroku|主機服務|
|Firebase|資料庫儲存|

-----------------------------------------------
## XSS(Cross-Site Scripting)
* 跨站指令攻擊
1. 若有輸入框或動態新增的部分
2. 少用\`innerHTML\`語法
3. 改用\`createElement\`、\`appendChild\`

-----------------------------------------------
## Google Analytics追蹤
1. 登入[Google Analytics](https://analytics.google.com/analytics)
2. 設定完成到\`追蹤資訊\`再到\`追蹤程式碼\`複製代碼，貼到\`<head>\`
3. 在根目錄建立\`config.yml\`
\`\`\`markdown
#Google Analytics
google_analytics:
    tracking_id:\`追蹤程式碼\`
\`\`\`

-----------------------------------------------
## 假圖生產器
* 使用[Lorem Picsum](https://picsum.photos/)
* https://picsum.photos/200/300
* https://picsum.photos/seed/picsum/200/300
* https://picsum.photos/id/237/200/300

-----------------------------------------------
## 滾動效果
1. 使用[aos](https://michalsnik.github.io/aos/)
2. 下載aos並解壓
3. 將\`<head>\`加入\`<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>\`
4. 將\`<body>\`加入\`<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><script>\`
5. 將\`<body>\`加入\`<script>AOS.init()<script>\`
\`\`\`html
<div class="box" data-aos="fade-up"></div> <!--效果名稱-->
data-aos="flip-left" 
data-aos-easing="linear" <!--進行曲線-->
data-aos-duration="3000" <!--持續時間1000=1秒-->
data-aos-offset="300" <!--預設120px-->
data-aos-delay="300" <!--延遲時間-->
data-aos-anchor="#example-anchor" <!--預設null-->
data-aos-anchor-placement="center-bottom" <!--當window到元素頂部時-->
data-aos-once="false" <!--動畫不重複-->
\`\`\`

-----------------------------------------------
## 動態效果
1. 使用[animate](https://animate.style/)
2. 將\`<head>\`加入\`<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>\`
\`\`\`html
<div class="box animated shake"><div>
\`\`\`
\`\`\`js
$("button").click(funtion(){
    $(".box").addClass("shank");
})
\`\`\``,__vite_glob_0_181=Object.freeze(Object.defineProperty({__proto__:null,default:_______$1},Symbol.toStringTag,{value:"Module"})),__Vue3______=`---
title: 製作Vue3音樂播放按鈕
date: 2026-02-02
tags: ["Vue"]
---

只做一個最簡單的播放：
\`\`\`vue
<template>
    <button
        type="button"
        @click="playMusic">
        音樂播放
    </button>
</template>

<script setup>
const myAudio = new Audio('../LASER.mp3')
const playMusic = () => {
    myAudio.play();
}
<\/script>
\`\`\`

-----------------------------------------------
當使用\`new Audio()\`時，會將音檔封裝成(HTMLAudioElement)的一個物件，因此我們可以去使用物件裡個各種方法來操控音樂播放
\`\`\`vue
<template>
  <audio src="LASER.mp3" preload="auto"></audio>
</template>
\`\`\`

-----------------------------------------------
一進入頁面就自動播放：
\`\`\`vue
<script setup>
import { onMounted } from 'vue'
onMounted(()=>{
    myAudio.play()
})
<\/script>
\`\`\`

-----------------------------------------------
點擊按鈕播放音樂，再按一次則暫停：
\`\`\`vue
<script setup>
const myAudio = new Audio('../LASER.mp3')
const playMusic = () => {
    if(myAudio.paused){
        //判斷暫停是否為true
        myAudio.play();
    } else {
        myAudio.pause();
    }
}
<\/script>
\`\`\`

-----------------------------------------------
其他參數：
|名稱|寫法||
|---|---|---|
|播放|play()|---|
|暫停|pause()|---|
|播放位置|currentTime=10|從第10秒開始播放|
|音量大小|volume=0.5|最小0，最大1|
|靜音|muted=true|---|
|循環播放|loop=true|---|
|播放速度|playbackRate=1.5;|1.5倍速|
|播放速度|playbackRate=1.5;|1.5倍速|`,__vite_glob_0_182=Object.freeze(Object.defineProperty({__proto__:null,default:__Vue3______},Symbol.toStringTag,{value:"Module"})),__Mac_______=`---
title: 解決Mac無法存取隨身碟
date: 2022-06-08
tags: ["Mac"]
---
## 解決Mac無法存取隨身碟
1. 插入隨身碟，電腦讀取得到，卻無法將檔案拉進去？
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-1.jpg)

-----------------------------------------------
2. 打開\`啟動台\`。
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-2.jpg)

-----------------------------------------------
3. 選擇\`磁碟工具程式\`。
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-3.jpg)

-----------------------------------------------
4. 此時外接硬碟的格式可能會是(NTFS)。
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-4.jpg)

-----------------------------------------------
5. 點選右上角\`清除\`。
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-5.jpg)

-----------------------------------------------
6. 輸入磁碟名稱(自訂)，並選擇格式。
* 32G以上請選擇\`ExFAT\`。
* 32G以下請選擇\`MS-DOS(FAT)\`。
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-6.jpg)

-----------------------------------------------
7. 按\`清除\`。\`【注意：格式化前請先將檔案進行備份】\`
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-7.jpg)

-----------------------------------------------
8. 完成後，會看到磁碟格式變成(FAT32)即完成。
![圖片](./images/解決Mac無法存取隨身碟/解決Mac無法存取隨身碟-8.jpg)`,__vite_glob_0_183=Object.freeze(Object.defineProperty({__proto__:null,default:__Mac_______},Symbol.toStringTag,{value:"Module"})),__Router_______=`---
title: 設定Router轉址到指定頁面
date: 2026-03-24
tags: ["Vue"]
---
## 404找不到頁面

* 一定要放在最後一筆路由

\`\`\`js
// router.js
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=>import('../views/NotFoundView.vue') 
}
\`\`\`
NotFoundView.vue：
\`\`\`vue
<template>
    <h1>404 - 此頁面不存在</h1>
    <router-link to="/">回首頁</router-link>
</template>
\`\`\`

-----------------------------------------------
## 轉址到指定頁面

若想讓使用者在輸入網址時，指定跳到"關於"頁面，可以照此做法：
* 用replace可避免讓使用者再回到404頁面

NotFoundView.vue：
\`\`\`vue
<template>
    <h1>此頁面不存在</h1>    
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    router.replace('/about');
})
<\/script>
\`\`\`

-----------------------------------------------
## 全部找不到直接轉址到指定頁：
\`\`\`js
// router.js
{
  path: '/:pathMatch(.*)*',
  redirect: '/about'
}
\`\`\``,__vite_glob_0_184=Object.freeze(Object.defineProperty({__proto__:null,default:__Router_______},Symbol.toStringTag,{value:"Module"})),__Chrome_____=`---
title: 認識Chrome開發者工具
date: 2021-01-24
tags: ["Web"]
---
對著圖片→"右鍵"→"複製圖片位置"。可複製該圖片的路徑，貼到src上。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-1.png)

-----------------------------------------------
對著連結→"右鍵"→"複製連結網址"。可複製該連結的路徑，貼到href上。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-2.png)

-----------------------------------------------
開啟Chrome開發者工具:打開Chrome瀏覽器→"右鍵"→"檢查"。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-3.png)

-----------------------------------------------
Dock side : 可以設定開發者人員工具的方向、或獨立式窗。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-4.png)

-----------------------------------------------
Toggle Device Toolbar : 切換手機或平板螢幕大小來瀏覽網頁。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-5.png)

-----------------------------------------------
Select an element in the page to inspect it : 可以尋找網頁上的元素。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-6.png)

-----------------------------------------------
在[Elements]使用ctrl+F可搜尋HTML標籤、class名稱，找到的會被highlight。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-7.png)

-----------------------------------------------
在[Elements]使用styles的Fliter，可搜尋css屬性名稱。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-8.png)

-----------------------------------------------
在[Elements]使用styles的:hov，可查看元素在:hover時的狀態。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-9.png)

-----------------------------------------------
在[Elements]使用styles的視窗中，transform、animation可查看貝茲控制點的曲線。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-10.png)
\`\`\`js
// <-----css----->
transition: 1s cubic-bezier(.17,.67,.83,.67)
\`\`\`

-----------------------------------------------
點擊"..."→"Show console drawer"→點擊裡面的"..."→"Animations"→點擊圖片:可以查看animation的時間軸，選擇10%可以觀看慢速。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-11.png)

-----------------------------------------------
在[network]，重新整理頁面後，可在最底下查看狀態:
* requests(請求): 請求回傳的檔案數量。
* transferred(轉移): 壓縮過後的流量。
* resources(資源): 未壓縮過的總資源。
* Finish(結束): 整體包含ajax動態載入的時間。
* Load(加載): 靜態檔案載入的時間。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-12.png)

-----------------------------------------------
在[network]，可按"Throttling小箭頭"按鈕 : 可以模擬其他頻寬的速度。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-13.png)

-----------------------------------------------
在[Console]，直接撰寫console.log() : 可以顯示結果。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-14.png)

-----------------------------------------------
在[Console]，直接撰寫console.table() : 放入物件或陣列，可以表格方式查看。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-15.png)

-----------------------------------------------
在[Console]，直接撰寫console.time()、console.timeEnd() : 可以計算時間。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-16.png)
\`\`\`js
// <-----js----->
console.time();
setTimeout(function(){
    console.timeEnd("a");
},5000);

// <-----結果----->
//經過5秒後顯示:"a"
\`\`\`

-----------------------------------------------
在[Elements]對要查看的元素"右鍵"→"Break on"，可查看DOM元素的斷點。
* [subtree moditications]:子節點有變更的時候。
* [attribute moditications]:屬性有變更的時候。
* [node removal]:節點被移除的時候。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-17.png)

-----------------------------------------------
在[Sources]中間部分先在程式碼編號上點擊新增斷點。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-18.png)

-----------------------------------------------
在[Sources]右邊部分[Watch]可以手動新增要查看的變數。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-19.png)

-----------------------------------------------
在[Sources]右邊部分按鈕，可執行斷點，從左到右分別是:
* 執行查看斷點。
* 查看下一個斷點。
* 進入斷點的function。
* 離開斷點的function。
* 將斷點都隱藏。
* 若有錯誤則停止。
![圖片](./images/認識ChromeDevtools開發者工具/認識ChromeDevtools開發者工具-20.png)`,__vite_glob_0_185=Object.freeze(Object.defineProperty({__proto__:null,default:__Chrome_____},Symbol.toStringTag,{value:"Module"})),__GitHub____=`---
title: 認識GitHub版本控制
date: 2023-04-01
tags: ["Hugo","GitHub"]
---
## 什麼是GitHub
* GitHub是管理Git版本控制系統的平台

### Commit
* Commit是版本紀錄節點，每次提交都會產生：
    1. 修改內容
    2. 作者資訊
    3. 時間戳記
    4. SHA-1 雜湊值

### Github Pages
* 將 Repository 中的靜態網站檔案（HTML/CSS/JS）部署成可公開存取的網站

### Github Desktop
* Github Desktop將程式碼上傳到Github的應用程式

### 版本控制種類
* 分散式版本控制(同時多位開發者)
    * 每個開發者都有完整版本庫
    * 可以離線 commit
    * 最後再同步到遠端
    * 例如：Git、BitKeeper、Mercurial
* 中央式版本控制(一次一個開發者)
    * 有一個中央伺服器
    * 所有人都連到同一個中央儲存庫
    * 本地沒有完整版本歷史
    * 例如：Subversion、CVS

-----------------------------------------------
## 創建GitHub
1. 先到[GitHub](https://github.com/)官網創建帳號
    * Username等於帳號名稱(https://帳號名稱.github.io/)
2. 下載[Github Desktop](https://desktop.github.com/)並登入帳號
3. 在Github上創建Repository(資料夾)並Clone(複製)到本地端
    * 使用Push指令(上傳Github)
    * 使用Pull指令(將Github更新本地端)

-----------------------------------------------
4. 登入GitHub按左上角＋符號，點擊New repository
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-1.png)

-----------------------------------------------
5. 輸入資料夾名稱(Repository name)、描述(Description)
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-2.png)

-----------------------------------------------
6. 點選Set up in Desktop自動開啟Github Desktop
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-3.png)

-----------------------------------------------
7. 確認路徑位置，點擊Clone複製到本地端上
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-4.png)

-----------------------------------------------
8. 接著本地端資料夾就會與Github Desktop上的資料同步
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-5.png)

-----------------------------------------------
9. 試著在本地端上建立一個文字檔
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-6.png)

-----------------------------------------------
10. 輸入存檔點名稱(Summary)、描述(Description)，點擊Commit to main
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-7.png)

-----------------------------------------------
11. 點右上角Publish branch進行上傳
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-8.png)

-----------------------------------------------
12. Fetch origin表示上傳完成
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-9.png)

-----------------------------------------------
13. 接著回到Github上即可看到上傳的文字檔
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-10.png)`,__vite_glob_0_186=Object.freeze(Object.defineProperty({__proto__:null,default:__GitHub____},Symbol.toStringTag,{value:"Module"})),_Google___________=`---
title: 讓Google搜尋引擎找到自己的網站
date: 2023-04-06
tags: ["Web"]
---
## 檢測自己網站是否可被搜尋
1. 手先到google搜尋引擎輸入\`site:自己的網站\`
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-1.png)

-----------------------------------------------
2. 按下搜尋後，如果只有顯示請使用Google Search Console，表示自己的網站還未提交給google
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-2.png)

-----------------------------------------------
## 提交網站地圖給google
1. 搜尋[Google Search Console](https://search.google.com/search-console/about)進入頁面，點擊立即開始
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-3.png)

-----------------------------------------------
2. 選擇右邊網址前置字元，輸入自己的網站，按繼續
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-4.png)

-----------------------------------------------
3. 使用hugo會自動產生sitemap.xml將它更新到網站上
    * 或使用[xml-sitemaps](https://www.xml-sitemaps.com/)生產出sitemaps
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-5.png)

-----------------------------------------------
4. 回到Google Search Console點選左側sitemap並將後面sitemap.xml打上後，點擊提交
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-6.png)

-----------------------------------------------
5. 等待2~3天狀態變為成功，再重新搜索即可找到自己的網頁
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-7.png)

-----------------------------------------------
## 重新提交新頁面給google
1. 在Google Search Console上方搜尋欄，輸入想提交的網址
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-8.png)

-----------------------------------------------
2. 點選右邊要求建立索引
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-9.png)

-----------------------------------------------
3. 等待處理
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-10.png)

-----------------------------------------------
4. 出現已要求建立索引，即代表google將安排建立索引
![圖片](./images/讓Google搜尋引擎找到自己的網站/讓Google搜尋引擎找到自己的網站-11.png)`,__vite_glob_0_187=Object.freeze(Object.defineProperty({__proto__:null,default:_Google___________},Symbol.toStringTag,{value:"Module"})),__Bluehost___=`---
title: 進入Bluehost的主機
date: 2023-04-08
tags: ["Web"]
---
## 購買Bluehost主機並登入伺服器
1. 到[FileZilla](https://filezilla-project.org/)官網下載軟體，選擇左邊(傳遞文件用)
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-1.png)

-----------------------------------------------
2. 下載適合的版本
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-2.png)

-----------------------------------------------
3. 點選最左上角圖示
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-3.png)

-----------------------------------------------
4. 點選新增站台，可以給他一個新命名
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-4.png)

-----------------------------------------------
5. 接著進到[Bluehost後台](https://my.bluehost.com/hosting/app#/)，右邊有主機的IP位置
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-5.png)

-----------------------------------------------
6. 點選Advancedy，再點FTP，新增一個登入帳戶，輸入帳號密碼後，點擊建立FTP帳戶
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-6.png)

-----------------------------------------------
7. 之後下方就會出現此帳戶，點擊設定FTP用戶端，可查看登入資訊
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-7.png)

-----------------------------------------------
8. 回到FileZilla將得到的參數對應填入並連線(主機也可填IP位置)
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-8.png)

-----------------------------------------------
9. 上方資訊顯示\`狀態：成功取得\`即代表登入成功
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-9.png)

-----------------------------------------------
10. 之後可以將檔案放到public_html裡，或再建立資料夾
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-10.png)

-----------------------------------------------
11. 到瀏覽器上輸入對應網址可以查看相對應的檔案
![圖片](./images/進入Bluehost的主機/進入Bluehost的主機-11.png)
`,__vite_glob_0_188=Object.freeze(Object.defineProperty({__proto__:null,default:__Bluehost___},Symbol.toStringTag,{value:"Module"})),__ES__=`---
title: 運行ES模組
date: 2024-12-07
tags: ["Vue3"]
---
## 匯入與匯出
### 預設匯入和匯出：
\`\`\`js
import 自訂名稱 from ...

export default = 
\`\`\`
### 具名匯入和匯出：
\`\`\`js
import { 具名名稱 } from ...

export const xxx = ...
\`\`\`

-----------------------------------------------
## 匯入元件
常見的匯出方式，通常用於匯出物件，在 Vue 開發中可用來匯出元件
1. 先建立一個export1.js檔(component)
\`\`\`js
export default {
  data:[ "蘋果","香蕉","鳳梨" ],
  showData(){
    let list = document.querySelector(".list");
    let str = "";
    this.data.forEach((item,id) => {
      str += \`<li>\${item}
        <button type="button" class="btn" data-num="\${id}">刪除</button>
      </li>\`
    })
    list.innerHTML = str;
    let btns = document.querySelectorAll(".btn");
    btns.forEach((item)=>{
      //使用箭頭函數可以，讓this指向外層
      item.addEventListener("click",(event)=>{
        this.removeData(event.target.dataset.num);
      })
    })
  },
  removeData(id){
    this.data.splice(id, 1);
    this.showData();
  },
  initData(){
    this.showData();
  }
}
\`\`\`
2. 在html或js檔進行匯入
\`\`\`html
<script type="module">

//newComponent是自訂的名稱
import newComponent from "./export1.js";

//使用裡面的方法
newComponent.initData();

<\/script>  
\`\`\`
\`注意：一定要在<script>上加上type="module"才能使用\`
\`\`\`html
<script type="module">
  var apple = "蘋果";
<\/script>

<script type="module">
  console.log(apple); // not defined
<\/script>
\`\`\`
\`每個type="module"作用域都是獨立的\`

-----------------------------------------------
## 匯入方法
可用於匯出已定義的變數、物件、函式，專案開發中通常用於 “方法匯出”，第三方的框架、函式、套件很常使用具名定義 “方法”
1. 先建立一個export2.js檔
\`\`\`js
export const a = 1;

export function b(){
  console.log(1);
}

export function c(a,b){
  return a + b;
}
\`\`\`
2. 在html或js檔進行匯入
\`\`\`html
<script type="module">
//單一匯入（建議寫法）
import { a , b } from "./export2.js";

console.log(a); //1

b(); //1
<\/script>

<script type="module">
//全部匯入（不建議，錯誤較難發現）
import * as all from "./export2.js";

all.b(); //1

console.log(all.c(a,b)); //3
<\/script>
\`\`\`

-----------------------------------------------
## sideEffect
1. 先建立一個sideEffect.js檔
\`\`\`js
//立即函式
(function (global) {
  global.$ = '我是 jQuery';
})(window);
\`\`\`
2. 匯入檔案
\`\`\`html
<script type="module">
import "./sideEffect.js";
console.log($); //我是 jQuery
<\/script>
\`\`\`

-----------------------------------------------
## 使用ESM方式匯入vue
\`\`\`html
<div id="app">{{ apple }}</div>
\`\`\`
\`\`\`html
<script type="module">
import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.min.js";

const apple = {
  data(){
    return {
      apple: "蘋果"
    }
  }
}

createApp(apple).mount('#app');
<\/script>
\`\`\``,__vite_glob_0_189=Object.freeze(Object.defineProperty({__proto__:null,default:__ES__},Symbol.toStringTag,{value:"Module"})),____Vue3=`---
title: 開始使用Vue3
date: 2024-12-08
tags: ["Vue3"]
---
## 創建vue
\`\`\`html
<div id="app">{{ count }}{{ text }}</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      count: 0,
      text: "這是一段文字"  
    }
  }
}).mount("#app");
\`\`\`
\`mount是綁定html顯示位置\`
### 顯示結果：
\`\`\`html
<div id="app">0這是一段文字</div>
\`\`\`

-----------------------------------------------
## 資料數字，每次點擊按鈕資料數字+1
\`\`\`html
<div id="app">
  <p>{{ count }}</p>
  <button type="button" @click="addCount">按我</button>
</div>
\`\`\`
\`\`\`js
const app = {
  //資料（函式）
  data(){
    return{
      count: 0
    }
  },
  //生命週期（函式）
  created(){
    this.count = 10
  },
  //方法（物件）
  methods:{
    addCount(){
      this.count = this.count + 1;
    }
  }
}

Vue.createApp(app).mount("#app");
\`\`\`
\`不論在data或created或methods裡新增的東西，都會被攤在Proxy層，所以this都可以直接取用\`

-----------------------------------------------
## 更新名稱和圖片
\`\`\`html
<div id="app">
  <form>
    <div class="row mb-3">
      <label for="productName" class="col-sm-2 col-form-label">產品名稱</label>
      <div class="col-sm-10">
        <!-- 輸入框綁定data的temp -->
        <input type="text" id="productName" class="form-control" v-model="temp.name">
      </div>
    </div>
    <div class="row mb-3">
      <!-- src綁定data的temp -->
      <img v-bind:src="temp.imageUrl" class="img-fluid" alt="">
    </div>
    <div class="row mb-3">
      <label for="productImage" class="col-sm-2 col-form-label">產品圖片</label>
      <div class="col-sm-10">
        <!-- 輸入框綁定data的temp -->
        <input type="text" id="productImage" class="form-control" v-model="temp.imageUrl">
      </div>
    </div>
    <button type="button" @click="updateFile">更新</button>
  </form>
</div>
\`\`\`
\`\`\`js
const app = {
  data(){
    return{
      temp:{
        name: "",
        imageUrl: "https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    }
  },
  methods:{
    updateFile(){
      console.log(this.temp);
    }
  }
}

Vue.createApp(app).mount("#app");
\`\`\``,__vite_glob_0_190=Object.freeze(Object.defineProperty({__proto__:null,default:____Vue3},Symbol.toStringTag,{value:"Module"})),_______=`---
title: 關注點分離實作
date: 2024-12-03
tags: ["Vue3"]
---
## 傳統javascript
使用傳統JavaScript實作Vue元件生成按綁定刪除事件
\`\`\`html
<ul class="list">
</ul>
<input type="text">
<button>新增</button>
\`\`\`
\`\`\`js
const component = {
  data:[ "蘋果","香蕉","鳳梨" ],
  showData(){
    let list = document.querySelector(".list");
    let str = "";
    this.data.forEach((item,id) => {
      str += \`<li>\${item}
        <button type="button" class="btn" data-num="\${id}">刪除</button>
      </li>\`
    })
    list.innerHTML = str;
    let btns = document.querySelectorAll(".btn");
    btns.forEach((item)=>{
      //使用箭頭函數可以，讓this指向外層
      item.addEventListener("click",(event)=>{
        this.removeData(event.target.dataset.num);
      })
    })
  },
  removeData(id){
    this.data.splice(id, 1);
    this.showData();
  },
  initData(){
    this.showData();
  }
}
component.initData();
\`\`\``,__vite_glob_0_191=Object.freeze(Object.defineProperty({__proto__:null,default:_______},Symbol.toStringTag,{value:"Module"})),___reduce__=`---
title: reduce加總
date: 2026-03-27
tags: ["JavaScript"]
---
## 基本語法

* 累加器（accumulator）：上一次計算的結果
* 當前元素（current）：現在正在處理的那一筆資料
* 初始值：一開始的「起點」

\`\`\`js
array.reduce((累加器, 當前元素) => {
  return 新的累加器
}, 初始值)
\`\`\`

-----------------------------------------------
## 純數字加總

\`\`\`js
const arr = [1, 2, 3, 4]

const sum = arr.reduce((acc, cur) => {
  return acc + cur
}, 0)

console.log(sum)
\`\`\`
-----------------------------------------------
## 簡寫版

\`\`\`js
const total = data.reduce((acc, item) => acc + item.price, 0)
\`\`\`

-----------------------------------------------
## 價格加總並且價格大於50

\`\`\`js
const data = ref([
  { id: 1, name: "珍珠奶茶", price: 50 },
  { id: 2, name: "冬瓜檸檬", price: 45 },
  { id: 3, name: "翡翠檸檬", price: 55 },
  { id: 4, name: "四季春茶", price: 45 },
  { id: 5, name: "阿薩姆奶茶", price: 50 },
  { id: 6, name: "檸檬冰茶", price: 45 },
  { id: 7, name: "芒果綠茶", price: 55 },
  { id: 8, name: "抹茶拿鐵", price: 60 }
]);

const total = data.reduce((acc, item) => {
  if (item.price > 50) {
    return acc + item.price
  }
  return acc
}, 0)
\`\`\``,__vite_glob_0_192=Object.freeze(Object.defineProperty({__proto__:null,default:___reduce__},Symbol.toStringTag,{value:"Module"})),____Mac___='---\ntitle: 靈活運用MAC快捷鍵\ndate: 2023-02-17\ntags: ["Mac"]\n---\n## 關於mac輸入法\n1. 在英文輸入法只能打出`半形`\n    * 按`fn` 切換中文\n    * 短按`中/英` 切換中文\n    * 長按`中/英` 切換大寫\n2. 中文模式只能打出`全形`(英文、數字、標點符號)\n    * `shift`＋`英文` 全形數字\n    * `option`＋`數字` 全形數字\n    * `control`＋`符號鍵` 全形符號\n\n-----------------------------------------------\n## 電腦一般操作\n|指令|作用|\n|---|---|\n|`control`＋`左鍵`|滑鼠右鍵|\n|`option`＋`shift`＋`F1`|微減少亮度|\n|`option`＋`shift`＋`F2`|微增大亮度|\n|`option`＋`shift`＋`F11`|微減少音量|\n|`option`＋`shift`＋`F12`|微增大音量|\n|`command`＋`空白鍵`|搜尋(spotlight)|\n|`option`＋`點擊視窗放大` |視窗放大(保留Dock)|\n|`游標選取文字`＋`control`＋`command`＋`D`|翻譯辭典|\n|`control`＋`command`＋`Q`|使用者登出|\n|`command`＋`shift`＋`3`|擷取當前螢幕畫面|\n|`command`＋`shift`＋`4`|框選擷取畫面|\n|`command`＋`shift`＋`5`|框選錄製畫面|\n|`control`＋`上`|打開指揮中心(三指上滑觸控)|\n\n-----------------------------------------------\n## 使用瀏覽器時\n|指令|作用|\n|---|---|\n|`command`＋`T`|新增分頁|\n|`command`＋`N`|另開新分頁|\n|`command`＋`shift`＋`N`|另開無痕分頁|\n|`command`＋`W`|關閉分頁|\n|`control`＋`tab`|切換分頁(往右)|\n|`command`＋`shift`＋`]`|切換分頁(往右)|\n|`command`＋`shift`＋`[`|切換分頁(往左)|\n|`command`＋`數字鍵`|切換分頁(第幾個)|\n|`command`＋`9`|切換分頁(最後一個)|\n|`command`＋`tab`|切換視窗|\n|`command`＋`+`|放大文字|\n|`command`＋`-`|縮小文字|\n|`command`＋`0`|回到100%|\n|`command`＋`F`|快速尋找|\n\n-----------------------------------------------\n## 使用finder時\n|指令|作用|\n|---|---|\n|`點檔案`＋`command`＋`C`再到空白處`command`＋`V`|複製檔案|\n|`點檔案`＋`command`＋`C`再到空白處`command`＋`option`＋`V`|移動檔案|\n|`點檔案`＋`command`＋`倒退鍵`|刪除檔案|\n|`點檔案`＋`command`＋`Ｉ`|查看檔案資訊|\n|`點檔案`＋`command`＋`option`＋`Ｉ`|開啟固定查看檔案資訊窗口|\n|`點檔案`＋`右鍵`＋`option`＋`每次都使用此應用程式來打開`|更改預設開啟應用程式|\n|`按住option`＋`點資料夾前方小箭頭`|展開所有內容資料夾|\n|`command`＋`shift`＋`倒退鍵`|清空垃圾桶|\n\n-----------------------------------------------\n## 使用應用程式時\n|指令|作用|\n|---|---|\n|`command`＋`Q`|關閉程式|\n|`command`＋`W`|關閉目前程式|\n|`command`＋`M`|縮小程式|\n|`command`＋`N`|新建視窗|\n|`command`＋`O`|開啟舊檔|\n|`command`＋`~`|切換視窗|\n|`command`＋`tab`|切換程式(往右)|\n|`command`＋`shift`＋`tab`|切換程式(往左)|\n|`command`+`option`+`esc`|跳出強制結束應用程式視窗|\n\n-----------------------------------------------\n## 在編輯文件時\n|指令|作用|\n|---|---|\n|`command`＋`A`|全選|\n|`command`＋`C`|複製|\n|`command`＋`X`|剪下|\n|`command`＋`V`|貼上|\n|`command`＋`S`|儲存|\n|`command`＋`Z`|復原|\n|`command`＋`shift`＋`Z`|返回|\n|`option`＋`shift`＋`B`|插入符號|\n|`control`＋`command`＋`空白鍵`|插入表情符號|\n|`Fn`＋`倒退鍵`|刪除游標右側文字|\n|`游標點選位置`＋`按著shift`＋`方向鍵`|選取文字範圍|',__vite_glob_0_193=Object.freeze(Object.defineProperty({__proto__:null,default:____Mac___},Symbol.toStringTag,{value:"Module"})),____=`---
title: 驗證表單
date: 2021-02-10
tags: ["JavaScript"]
---
## POST註冊表單(application/x-www-form-urlencoded)
\`\`\`html
<label for="email">帳號：</label>
<input class="email" id="email" type="email" name="email">
<br>
<label for="password">密碼：</label>
<input class="password" id="password" type="password" name="password">
<br>
<button class="send" type="submit">送出</button>
<!-- 1.帳號輸入：jack@gmail.com -->
<!-- 2.密碼輸入：abc123456 -->
<!-- 3.點擊送出按鈕 -->
<!-- 4.瀏覽器網址列會出現：https://cdpn.io/pen/debug/index.html?account=jack&password=abc123456-->
\`\`\`
\`\`\`js
let send = document.querySelector(".send");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

send.addEventListener("click",function(){

  let xhr = new XMLHttpRequest();
  xhr.open("POST","https://escape-room.hexschool.io/api/user/signup",true);

  //設置提交表單格式
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

  let emailValue = email.value;
  let passwordValue = password.value;

  //組字串"email=jack@gmail.com&password=abc123456"
  let totalValue = "email="+emailValue+"&"+"password="+passwordValue;

  xhr.send(totalValue);
  xhr.onload = function(){
    let callBackData = JSON.parse(xhr.responseText);
    alert(callBackData.message);
  }
});
\`\`\`

-----------------------------------------------
## POST註冊表單(application/json)
\`\`\`html
<label for="email">帳號：</label>
<input class="email" id="email" type="email" name="email">
<br>
<label for="password">密碼：</label>
<input class="password" id="password" type="password" name="password">
<br>
<button class="send" type="submit">送出</button>
\`\`\`
\`\`\`js
let send = document.querySelector(".send");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

send.addEventListener("click",function(){
  
  let emailVal = email.value;
  let passwordVal = password.value;

  //組成JSON格式，建議：去比對後端的資料格式
  let account = {};
  account.email = emailVal;
  account.password = passwordVal;
  
  let xhr = new XMLHttpRequest();
  xhr.open("POST","https://escape-room.hexschool.io/api/user/signup",true);

  //設置提交JSON字串符
  xhr.setRequestHeader("Content-type","application/json");

  //將JSON轉成字串
  let data = JSON.stringify(account);
  xhr.send(data);

  xhr.onload = function(){

    //將取得的字串轉成JSON
    let callBackData = JSON.parse(xhr.responseText);
    alert(callBackData.message);
  }
});
\`\`\`
\`登入api：https://escape-room.hexschool.io/api/user/signup\`

-----------------------------------------------
## Chrome開發人員工具檢視POST資料
Chrome→"右鍵"→"檢查"→"Network"→"Header"
![圖片](./images/驗證表單/驗證表單-1.png)

-----------------------------------------------
Chrome→"右鍵"→"檢查"→"Network"→"Payload"
![圖片](./images/驗證表單/驗證表單-2.png)

-----------------------------------------------
Chrome→"右鍵"→"檢查"→"Network"→"Preview"
![圖片](./images/驗證表單/驗證表單-3.png)

-----------------------------------------------
Chrome→"右鍵"→"檢查"→"Network"→"Response"
![圖片](./images/驗證表單/驗證表單-4.png)`,__vite_glob_0_194=Object.freeze(Object.defineProperty({__proto__:null,default:____},Symbol.toStringTag,{value:"Module"})),__viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var kindOf,hasRequiredKindOf;function requireKindOf(){if(hasRequiredKindOf)return kindOf;hasRequiredKindOf=1;var e=Object.prototype.toString;kindOf=function(q){if(q===void 0)return"undefined";if(q===null)return"null";var J=typeof q;if(J==="boolean")return"boolean";if(J==="string")return"string";if(J==="number")return"number";if(J==="symbol")return"symbol";if(J==="function")return E(q)?"generatorfunction":"function";if(f(q))return"array";if(M(q))return"buffer";if(C(q))return"arguments";if(w(q))return"date";if(_(q))return"error";if(x(q))return"regexp";switch(a(q)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(P(q))return"generator";switch(J=e.call(q),J){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return J.slice(8,-1).toLowerCase().replace(/\s/g,"")};function a(B){return typeof B.constructor=="function"?B.constructor.name:null}function f(B){return Array.isArray?Array.isArray(B):B instanceof Array}function _(B){return B instanceof Error||typeof B.message=="string"&&B.constructor&&typeof B.constructor.stackTraceLimit=="number"}function w(B){return B instanceof Date?!0:typeof B.toDateString=="function"&&typeof B.getDate=="function"&&typeof B.setDate=="function"}function x(B){return B instanceof RegExp?!0:typeof B.flags=="string"&&typeof B.ignoreCase=="boolean"&&typeof B.multiline=="boolean"&&typeof B.global=="boolean"}function E(B,q){return a(B)==="GeneratorFunction"}function P(B){return typeof B.throw=="function"&&typeof B.return=="function"&&typeof B.next=="function"}function C(B){try{if(typeof B.length=="number"&&typeof B.callee=="function")return!0}catch(q){if(q.message.indexOf("callee")!==-1)return!0}return!1}function M(B){return B.constructor&&typeof B.constructor.isBuffer=="function"?B.constructor.isBuffer(B):!1}return kindOf}var isExtendable,hasRequiredIsExtendable;function requireIsExtendable(){return hasRequiredIsExtendable||(hasRequiredIsExtendable=1,isExtendable=function(a){return typeof a<"u"&&a!==null&&(typeof a=="object"||typeof a=="function")}),isExtendable}var extendShallow,hasRequiredExtendShallow;function requireExtendShallow(){if(hasRequiredExtendShallow)return extendShallow;hasRequiredExtendShallow=1;var e=requireIsExtendable();extendShallow=function(w){e(w)||(w={});for(var x=arguments.length,E=1;E<x;E++){var P=arguments[E];e(P)&&a(w,P)}return w};function a(_,w){for(var x in w)f(w,x)&&(_[x]=w[x])}function f(_,w){return Object.prototype.hasOwnProperty.call(_,w)}return extendShallow}var sectionMatter,hasRequiredSectionMatter;function requireSectionMatter(){if(hasRequiredSectionMatter)return sectionMatter;hasRequiredSectionMatter=1;var e=requireKindOf(),a=requireExtendShallow();sectionMatter=function(C,M){typeof M=="function"&&(M={parse:M});var B=_(C),q={section_delimiter:"---",parse:E},J=a({},q,M),Y=J.section_delimiter,X=B.content.split(/\r?\n/),en=null,dn=x(),pn=[],an=[];function un(xn){B.content=xn,en=[],pn=[]}function mn(xn){an.length&&(dn.key=w(an[0],Y),dn.content=xn,J.parse(dn,en),en.push(dn),dn=x(),pn=[],an=[])}for(var fn=0;fn<X.length;fn++){var Pn=X[fn],An=an.length,sn=Pn.trim();if(f(sn,Y)){if(sn.length===3&&fn!==0){if(An===0||An===2){pn.push(Pn);continue}an.push(sn),dn.data=pn.join(`
`),pn=[];continue}en===null&&un(pn.join(`
`)),An===2&&mn(pn.join(`
`)),an.push(sn);continue}pn.push(Pn)}return en===null?un(pn.join(`
`)):mn(pn.join(`
`)),B.sections=en,B};function f(C,M){return!(C.slice(0,M.length)!==M||C.charAt(M.length+1)===M.slice(-1))}function _(C){if(e(C)!=="object"&&(C={content:C}),typeof C.content!="string"&&!P(C.content))throw new TypeError("expected a buffer or string");return C.content=C.content.toString(),C.sections=[],C}function w(C,M){return C?C.slice(M.length).trim():""}function x(){return{key:"",data:"",content:""}}function E(C){return C}function P(C){return C&&C.constructor&&typeof C.constructor.isBuffer=="function"?C.constructor.isBuffer(C):!1}return sectionMatter}var engines={exports:{}},jsYaml$1={},loader={},common={},hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common;hasRequiredCommon=1;function e(E){return typeof E>"u"||E===null}function a(E){return typeof E=="object"&&E!==null}function f(E){return Array.isArray(E)?E:e(E)?[]:[E]}function _(E,P){var C,M,B,q;if(P)for(q=Object.keys(P),C=0,M=q.length;C<M;C+=1)B=q[C],E[B]=P[B];return E}function w(E,P){var C="",M;for(M=0;M<P;M+=1)C+=E;return C}function x(E){return E===0&&Number.NEGATIVE_INFINITY===1/E}return common.isNothing=e,common.isObject=a,common.toArray=f,common.repeat=w,common.isNegativeZero=x,common.extend=_,common}var exception,hasRequiredException;function requireException(){if(hasRequiredException)return exception;hasRequiredException=1;function e(a,f){Error.call(this),this.name="YAMLException",this.reason=a,this.mark=f,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e.prototype.toString=function(f){var _=this.name+": ";return _+=this.reason||"(unknown reason)",!f&&this.mark&&(_+=" "+this.mark.toString()),_},exception=e,exception}var mark,hasRequiredMark;function requireMark(){if(hasRequiredMark)return mark;hasRequiredMark=1;var e=requireCommon();function a(f,_,w,x,E){this.name=f,this.buffer=_,this.position=w,this.line=x,this.column=E}return a.prototype.getSnippet=function(_,w){var x,E,P,C,M;if(!this.buffer)return null;for(_=_||4,w=w||75,x="",E=this.position;E>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(E-1))===-1;)if(E-=1,this.position-E>w/2-1){x=" ... ",E+=5;break}for(P="",C=this.position;C<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(C))===-1;)if(C+=1,C-this.position>w/2-1){P=" ... ",C-=5;break}return M=this.buffer.slice(E,C),e.repeat(" ",_)+x+M+P+`
`+e.repeat(" ",_+this.position-E+x.length)+"^"},a.prototype.toString=function(_){var w,x="";return this.name&&(x+='in "'+this.name+'" '),x+="at line "+(this.line+1)+", column "+(this.column+1),_||(w=this.getSnippet(),w&&(x+=`:
`+w)),x},mark=a,mark}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1;var e=requireException(),a=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],f=["scalar","sequence","mapping"];function _(x){var E={};return x!==null&&Object.keys(x).forEach(function(P){x[P].forEach(function(C){E[String(C)]=P})}),E}function w(x,E){if(E=E||{},Object.keys(E).forEach(function(P){if(a.indexOf(P)===-1)throw new e('Unknown option "'+P+'" is met in definition of "'+x+'" YAML type.')}),this.tag=x,this.kind=E.kind||null,this.resolve=E.resolve||function(){return!0},this.construct=E.construct||function(P){return P},this.instanceOf=E.instanceOf||null,this.predicate=E.predicate||null,this.represent=E.represent||null,this.defaultStyle=E.defaultStyle||null,this.styleAliases=_(E.styleAliases||null),f.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+x+'" YAML type.')}return type=w,type}var schema,hasRequiredSchema;function requireSchema(){if(hasRequiredSchema)return schema;hasRequiredSchema=1;var e=requireCommon(),a=requireException(),f=requireType();function _(E,P,C){var M=[];return E.include.forEach(function(B){C=_(B,P,C)}),E[P].forEach(function(B){C.forEach(function(q,J){q.tag===B.tag&&q.kind===B.kind&&M.push(J)}),C.push(B)}),C.filter(function(B,q){return M.indexOf(q)===-1})}function w(){var E={scalar:{},sequence:{},mapping:{},fallback:{}},P,C;function M(B){E[B.kind][B.tag]=E.fallback[B.tag]=B}for(P=0,C=arguments.length;P<C;P+=1)arguments[P].forEach(M);return E}function x(E){this.include=E.include||[],this.implicit=E.implicit||[],this.explicit=E.explicit||[],this.implicit.forEach(function(P){if(P.loadKind&&P.loadKind!=="scalar")throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=_(this,"implicit",[]),this.compiledExplicit=_(this,"explicit",[]),this.compiledTypeMap=w(this.compiledImplicit,this.compiledExplicit)}return x.DEFAULT=null,x.create=function(){var P,C;switch(arguments.length){case 1:P=x.DEFAULT,C=arguments[0];break;case 2:P=arguments[0],C=arguments[1];break;default:throw new a("Wrong number of arguments for Schema.create function")}if(P=e.toArray(P),C=e.toArray(C),!P.every(function(M){return M instanceof x}))throw new a("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!C.every(function(M){return M instanceof f}))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new x({include:P,explicit:C})},schema=x,schema}var str,hasRequiredStr;function requireStr(){if(hasRequiredStr)return str;hasRequiredStr=1;var e=requireType();return str=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(a){return a!==null?a:""}}),str}var seq,hasRequiredSeq;function requireSeq(){if(hasRequiredSeq)return seq;hasRequiredSeq=1;var e=requireType();return seq=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(a){return a!==null?a:[]}}),seq}var map,hasRequiredMap;function requireMap(){if(hasRequiredMap)return map;hasRequiredMap=1;var e=requireType();return map=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(a){return a!==null?a:{}}}),map}var failsafe,hasRequiredFailsafe;function requireFailsafe(){if(hasRequiredFailsafe)return failsafe;hasRequiredFailsafe=1;var e=requireSchema();return failsafe=new e({explicit:[requireStr(),requireSeq(),requireMap()]}),failsafe}var _null,hasRequired_null;function require_null(){if(hasRequired_null)return _null;hasRequired_null=1;var e=requireType();function a(w){if(w===null)return!0;var x=w.length;return x===1&&w==="~"||x===4&&(w==="null"||w==="Null"||w==="NULL")}function f(){return null}function _(w){return w===null}return _null=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:a,construct:f,predicate:_,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_null}var bool,hasRequiredBool;function requireBool(){if(hasRequiredBool)return bool;hasRequiredBool=1;var e=requireType();function a(w){if(w===null)return!1;var x=w.length;return x===4&&(w==="true"||w==="True"||w==="TRUE")||x===5&&(w==="false"||w==="False"||w==="FALSE")}function f(w){return w==="true"||w==="True"||w==="TRUE"}function _(w){return Object.prototype.toString.call(w)==="[object Boolean]"}return bool=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:a,construct:f,predicate:_,represent:{lowercase:function(w){return w?"true":"false"},uppercase:function(w){return w?"TRUE":"FALSE"},camelcase:function(w){return w?"True":"False"}},defaultStyle:"lowercase"}),bool}var int,hasRequiredInt;function requireInt(){if(hasRequiredInt)return int;hasRequiredInt=1;var e=requireCommon(),a=requireType();function f(C){return 48<=C&&C<=57||65<=C&&C<=70||97<=C&&C<=102}function _(C){return 48<=C&&C<=55}function w(C){return 48<=C&&C<=57}function x(C){if(C===null)return!1;var M=C.length,B=0,q=!1,J;if(!M)return!1;if(J=C[B],(J==="-"||J==="+")&&(J=C[++B]),J==="0"){if(B+1===M)return!0;if(J=C[++B],J==="b"){for(B++;B<M;B++)if(J=C[B],J!=="_"){if(J!=="0"&&J!=="1")return!1;q=!0}return q&&J!=="_"}if(J==="x"){for(B++;B<M;B++)if(J=C[B],J!=="_"){if(!f(C.charCodeAt(B)))return!1;q=!0}return q&&J!=="_"}for(;B<M;B++)if(J=C[B],J!=="_"){if(!_(C.charCodeAt(B)))return!1;q=!0}return q&&J!=="_"}if(J==="_")return!1;for(;B<M;B++)if(J=C[B],J!=="_"){if(J===":")break;if(!w(C.charCodeAt(B)))return!1;q=!0}return!q||J==="_"?!1:J!==":"?!0:/^(:[0-5]?[0-9])+$/.test(C.slice(B))}function E(C){var M=C,B=1,q,J,Y=[];return M.indexOf("_")!==-1&&(M=M.replace(/_/g,"")),q=M[0],(q==="-"||q==="+")&&(q==="-"&&(B=-1),M=M.slice(1),q=M[0]),M==="0"?0:q==="0"?M[1]==="b"?B*parseInt(M.slice(2),2):M[1]==="x"?B*parseInt(M,16):B*parseInt(M,8):M.indexOf(":")!==-1?(M.split(":").forEach(function(X){Y.unshift(parseInt(X,10))}),M=0,J=1,Y.forEach(function(X){M+=X*J,J*=60}),B*M):B*parseInt(M,10)}function P(C){return Object.prototype.toString.call(C)==="[object Number]"&&C%1===0&&!e.isNegativeZero(C)}return int=new a("tag:yaml.org,2002:int",{kind:"scalar",resolve:x,construct:E,predicate:P,represent:{binary:function(C){return C>=0?"0b"+C.toString(2):"-0b"+C.toString(2).slice(1)},octal:function(C){return C>=0?"0"+C.toString(8):"-0"+C.toString(8).slice(1)},decimal:function(C){return C.toString(10)},hexadecimal:function(C){return C>=0?"0x"+C.toString(16).toUpperCase():"-0x"+C.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),int}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1;var e=requireCommon(),a=requireType(),f=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function _(C){return!(C===null||!f.test(C)||C[C.length-1]==="_")}function w(C){var M,B,q,J;return M=C.replace(/_/g,"").toLowerCase(),B=M[0]==="-"?-1:1,J=[],"+-".indexOf(M[0])>=0&&(M=M.slice(1)),M===".inf"?B===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:M===".nan"?NaN:M.indexOf(":")>=0?(M.split(":").forEach(function(Y){J.unshift(parseFloat(Y,10))}),M=0,q=1,J.forEach(function(Y){M+=Y*q,q*=60}),B*M):B*parseFloat(M,10)}var x=/^[-+]?[0-9]+e/;function E(C,M){var B;if(isNaN(C))switch(M){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===C)switch(M){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===C)switch(M){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(C))return"-0.0";return B=C.toString(10),x.test(B)?B.replace("e",".e"):B}function P(C){return Object.prototype.toString.call(C)==="[object Number]"&&(C%1!==0||e.isNegativeZero(C))}return float=new a("tag:yaml.org,2002:float",{kind:"scalar",resolve:_,construct:w,predicate:P,represent:E,defaultStyle:"lowercase"}),float}var json,hasRequiredJson;function requireJson(){if(hasRequiredJson)return json;hasRequiredJson=1;var e=requireSchema();return json=new e({include:[requireFailsafe()],implicit:[require_null(),requireBool(),requireInt(),requireFloat()]}),json}var core,hasRequiredCore;function requireCore(){if(hasRequiredCore)return core;hasRequiredCore=1;var e=requireSchema();return core=new e({include:[requireJson()]}),core}var timestamp,hasRequiredTimestamp;function requireTimestamp(){if(hasRequiredTimestamp)return timestamp;hasRequiredTimestamp=1;var e=requireType(),a=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),f=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function _(E){return E===null?!1:a.exec(E)!==null||f.exec(E)!==null}function w(E){var P,C,M,B,q,J,Y,X=0,en=null,dn,pn,an;if(P=a.exec(E),P===null&&(P=f.exec(E)),P===null)throw new Error("Date resolve error");if(C=+P[1],M=+P[2]-1,B=+P[3],!P[4])return new Date(Date.UTC(C,M,B));if(q=+P[4],J=+P[5],Y=+P[6],P[7]){for(X=P[7].slice(0,3);X.length<3;)X+="0";X=+X}return P[9]&&(dn=+P[10],pn=+(P[11]||0),en=(dn*60+pn)*6e4,P[9]==="-"&&(en=-en)),an=new Date(Date.UTC(C,M,B,q,J,Y,X)),en&&an.setTime(an.getTime()-en),an}function x(E){return E.toISOString()}return timestamp=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:_,construct:w,instanceOf:Date,represent:x}),timestamp}var merge,hasRequiredMerge;function requireMerge(){if(hasRequiredMerge)return merge;hasRequiredMerge=1;var e=requireType();function a(f){return f==="<<"||f===null}return merge=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:a}),merge}function commonjsRequire(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var binary,hasRequiredBinary;function requireBinary(){if(hasRequiredBinary)return binary;hasRequiredBinary=1;var e;try{var a=commonjsRequire;e=a("buffer").Buffer}catch{}var f=requireType(),_=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function w(C){if(C===null)return!1;var M,B,q=0,J=C.length,Y=_;for(B=0;B<J;B++)if(M=Y.indexOf(C.charAt(B)),!(M>64)){if(M<0)return!1;q+=6}return q%8===0}function x(C){var M,B,q=C.replace(/[\r\n=]/g,""),J=q.length,Y=_,X=0,en=[];for(M=0;M<J;M++)M%4===0&&M&&(en.push(X>>16&255),en.push(X>>8&255),en.push(X&255)),X=X<<6|Y.indexOf(q.charAt(M));return B=J%4*6,B===0?(en.push(X>>16&255),en.push(X>>8&255),en.push(X&255)):B===18?(en.push(X>>10&255),en.push(X>>2&255)):B===12&&en.push(X>>4&255),e?e.from?e.from(en):new e(en):en}function E(C){var M="",B=0,q,J,Y=C.length,X=_;for(q=0;q<Y;q++)q%3===0&&q&&(M+=X[B>>18&63],M+=X[B>>12&63],M+=X[B>>6&63],M+=X[B&63]),B=(B<<8)+C[q];return J=Y%3,J===0?(M+=X[B>>18&63],M+=X[B>>12&63],M+=X[B>>6&63],M+=X[B&63]):J===2?(M+=X[B>>10&63],M+=X[B>>4&63],M+=X[B<<2&63],M+=X[64]):J===1&&(M+=X[B>>2&63],M+=X[B<<4&63],M+=X[64],M+=X[64]),M}function P(C){return e&&e.isBuffer(C)}return binary=new f("tag:yaml.org,2002:binary",{kind:"scalar",resolve:w,construct:x,predicate:P,represent:E}),binary}var omap,hasRequiredOmap;function requireOmap(){if(hasRequiredOmap)return omap;hasRequiredOmap=1;var e=requireType(),a=Object.prototype.hasOwnProperty,f=Object.prototype.toString;function _(x){if(x===null)return!0;var E=[],P,C,M,B,q,J=x;for(P=0,C=J.length;P<C;P+=1){if(M=J[P],q=!1,f.call(M)!=="[object Object]")return!1;for(B in M)if(a.call(M,B))if(!q)q=!0;else return!1;if(!q)return!1;if(E.indexOf(B)===-1)E.push(B);else return!1}return!0}function w(x){return x!==null?x:[]}return omap=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:_,construct:w}),omap}var pairs,hasRequiredPairs;function requirePairs(){if(hasRequiredPairs)return pairs;hasRequiredPairs=1;var e=requireType(),a=Object.prototype.toString;function f(w){if(w===null)return!0;var x,E,P,C,M,B=w;for(M=new Array(B.length),x=0,E=B.length;x<E;x+=1){if(P=B[x],a.call(P)!=="[object Object]"||(C=Object.keys(P),C.length!==1))return!1;M[x]=[C[0],P[C[0]]]}return!0}function _(w){if(w===null)return[];var x,E,P,C,M,B=w;for(M=new Array(B.length),x=0,E=B.length;x<E;x+=1)P=B[x],C=Object.keys(P),M[x]=[C[0],P[C[0]]];return M}return pairs=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:f,construct:_}),pairs}var set,hasRequiredSet;function requireSet(){if(hasRequiredSet)return set;hasRequiredSet=1;var e=requireType(),a=Object.prototype.hasOwnProperty;function f(w){if(w===null)return!0;var x,E=w;for(x in E)if(a.call(E,x)&&E[x]!==null)return!1;return!0}function _(w){return w!==null?w:{}}return set=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:f,construct:_}),set}var default_safe,hasRequiredDefault_safe;function requireDefault_safe(){if(hasRequiredDefault_safe)return default_safe;hasRequiredDefault_safe=1;var e=requireSchema();return default_safe=new e({include:[requireCore()],implicit:[requireTimestamp(),requireMerge()],explicit:[requireBinary(),requireOmap(),requirePairs(),requireSet()]}),default_safe}var _undefined,hasRequired_undefined;function require_undefined(){if(hasRequired_undefined)return _undefined;hasRequired_undefined=1;var e=requireType();function a(){return!0}function f(){}function _(){return""}function w(x){return typeof x>"u"}return _undefined=new e("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:a,construct:f,predicate:w,represent:_}),_undefined}var regexp,hasRequiredRegexp;function requireRegexp(){if(hasRequiredRegexp)return regexp;hasRequiredRegexp=1;var e=requireType();function a(x){if(x===null||x.length===0)return!1;var E=x,P=/\/([gim]*)$/.exec(x),C="";return!(E[0]==="/"&&(P&&(C=P[1]),C.length>3||E[E.length-C.length-1]!=="/"))}function f(x){var E=x,P=/\/([gim]*)$/.exec(x),C="";return E[0]==="/"&&(P&&(C=P[1]),E=E.slice(1,E.length-C.length-1)),new RegExp(E,C)}function _(x){var E="/"+x.source+"/";return x.global&&(E+="g"),x.multiline&&(E+="m"),x.ignoreCase&&(E+="i"),E}function w(x){return Object.prototype.toString.call(x)==="[object RegExp]"}return regexp=new e("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:a,construct:f,predicate:w,represent:_}),regexp}var _function,hasRequired_function;function require_function(){if(hasRequired_function)return _function;hasRequired_function=1;var e;try{var a=commonjsRequire;e=a("esprima")}catch{typeof window<"u"&&(e=window.esprima)}var f=requireType();function _(P){if(P===null)return!1;try{var C="("+P+")",M=e.parse(C,{range:!0});return!(M.type!=="Program"||M.body.length!==1||M.body[0].type!=="ExpressionStatement"||M.body[0].expression.type!=="ArrowFunctionExpression"&&M.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function w(P){var C="("+P+")",M=e.parse(C,{range:!0}),B=[],q;if(M.type!=="Program"||M.body.length!==1||M.body[0].type!=="ExpressionStatement"||M.body[0].expression.type!=="ArrowFunctionExpression"&&M.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return M.body[0].expression.params.forEach(function(J){B.push(J.name)}),q=M.body[0].expression.body.range,M.body[0].expression.body.type==="BlockStatement"?new Function(B,C.slice(q[0]+1,q[1]-1)):new Function(B,"return "+C.slice(q[0],q[1]))}function x(P){return P.toString()}function E(P){return Object.prototype.toString.call(P)==="[object Function]"}return _function=new f("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:_,construct:w,predicate:E,represent:x}),_function}var default_full,hasRequiredDefault_full;function requireDefault_full(){if(hasRequiredDefault_full)return default_full;hasRequiredDefault_full=1;var e=requireSchema();return default_full=e.DEFAULT=new e({include:[requireDefault_safe()],explicit:[require_undefined(),requireRegexp(),require_function()]}),default_full}var hasRequiredLoader;function requireLoader(){if(hasRequiredLoader)return loader;hasRequiredLoader=1;var e=requireCommon(),a=requireException(),f=requireMark(),_=requireDefault_safe(),w=requireDefault_full(),x=Object.prototype.hasOwnProperty,E=1,P=2,C=3,M=4,B=1,q=2,J=3,Y=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,X=/[\x85\u2028\u2029]/,en=/[,\[\]\{\}]/,dn=/^(?:!|!!|![a-z\-]+!)$/i,pn=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function an(I){return Object.prototype.toString.call(I)}function un(I){return I===10||I===13}function mn(I){return I===9||I===32}function fn(I){return I===9||I===32||I===10||I===13}function Pn(I){return I===44||I===91||I===93||I===123||I===125}function An(I){var ln;return 48<=I&&I<=57?I-48:(ln=I|32,97<=ln&&ln<=102?ln-97+10:-1)}function sn(I){return I===120?2:I===117?4:I===85?8:0}function xn(I){return 48<=I&&I<=57?I-48:-1}function Tn(I){return I===48?"\0":I===97?"\x07":I===98?"\b":I===116||I===9?"	":I===110?`
`:I===118?"\v":I===102?"\f":I===114?"\r":I===101?"\x1B":I===32?" ":I===34?'"':I===47?"/":I===92?"\\":I===78?"":I===95?" ":I===76?"\u2028":I===80?"\u2029":""}function gn(I){return I<=65535?String.fromCharCode(I):String.fromCharCode((I-65536>>10)+55296,(I-65536&1023)+56320)}function cn(I,ln,G){ln==="__proto__"?Object.defineProperty(I,ln,{configurable:!0,enumerable:!0,writable:!0,value:G}):I[ln]=G}for(var On=new Array(256),En=new Array(256),Ln=0;Ln<256;Ln++)On[Ln]=Tn(Ln)?1:0,En[Ln]=Tn(Ln);function qn(I,ln){this.input=I,this.filename=ln.filename||null,this.schema=ln.schema||w,this.onWarning=ln.onWarning||null,this.legacy=ln.legacy||!1,this.json=ln.json||!1,this.listener=ln.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=I.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function Rn(I,ln){return new a(ln,new f(I.filename,I.input,I.position,I.line,I.position-I.lineStart))}function _n(I,ln){throw Rn(I,ln)}function Gn(I,ln){I.onWarning&&I.onWarning.call(null,Rn(I,ln))}var Xn={YAML:function(ln,G,D){var H,z,K;ln.version!==null&&_n(ln,"duplication of %YAML directive"),D.length!==1&&_n(ln,"YAML directive accepts exactly one argument"),H=/^([0-9]+)\.([0-9]+)$/.exec(D[0]),H===null&&_n(ln,"ill-formed argument of the YAML directive"),z=parseInt(H[1],10),K=parseInt(H[2],10),z!==1&&_n(ln,"unacceptable YAML version of the document"),ln.version=D[0],ln.checkLineBreaks=K<2,K!==1&&K!==2&&Gn(ln,"unsupported YAML version of the document")},TAG:function(ln,G,D){var H,z;D.length!==2&&_n(ln,"TAG directive accepts exactly two arguments"),H=D[0],z=D[1],dn.test(H)||_n(ln,"ill-formed tag handle (first argument) of the TAG directive"),x.call(ln.tagMap,H)&&_n(ln,'there is a previously declared suffix for "'+H+'" tag handle'),pn.test(z)||_n(ln,"ill-formed tag prefix (second argument) of the TAG directive"),ln.tagMap[H]=z}};function Un(I,ln,G,D){var H,z,K,Z;if(ln<G){if(Z=I.input.slice(ln,G),D)for(H=0,z=Z.length;H<z;H+=1)K=Z.charCodeAt(H),K===9||32<=K&&K<=1114111||_n(I,"expected valid JSON character");else Y.test(Z)&&_n(I,"the stream contains non-printable characters");I.result+=Z}}function Yn(I,ln,G,D){var H,z,K,Z;for(e.isObject(G)||_n(I,"cannot merge mappings; the provided source object is unacceptable"),H=Object.keys(G),K=0,Z=H.length;K<Z;K+=1)z=H[K],x.call(ln,z)||(cn(ln,z,G[z]),D[z]=!0)}function Zn(I,ln,G,D,H,z,K,Z){var on,bn;if(Array.isArray(H))for(H=Array.prototype.slice.call(H),on=0,bn=H.length;on<bn;on+=1)Array.isArray(H[on])&&_n(I,"nested arrays are not supported inside keys"),typeof H=="object"&&an(H[on])==="[object Object]"&&(H[on]="[object Object]");if(typeof H=="object"&&an(H)==="[object Object]"&&(H="[object Object]"),H=String(H),ln===null&&(ln={}),D==="tag:yaml.org,2002:merge")if(Array.isArray(z))for(on=0,bn=z.length;on<bn;on+=1)Yn(I,ln,z[on],G);else Yn(I,ln,z,G);else!I.json&&!x.call(G,H)&&x.call(ln,H)&&(I.line=K||I.line,I.position=Z||I.position,_n(I,"duplicated mapping key")),cn(ln,H,z),delete G[H];return ln}function te(I){var ln;ln=I.input.charCodeAt(I.position),ln===10?I.position++:ln===13?(I.position++,I.input.charCodeAt(I.position)===10&&I.position++):_n(I,"a line break is expected"),I.line+=1,I.lineStart=I.position}function Kn(I,ln,G){for(var D=0,H=I.input.charCodeAt(I.position);H!==0;){for(;mn(H);)H=I.input.charCodeAt(++I.position);if(ln&&H===35)do H=I.input.charCodeAt(++I.position);while(H!==10&&H!==13&&H!==0);if(un(H))for(te(I),H=I.input.charCodeAt(I.position),D++,I.lineIndent=0;H===32;)I.lineIndent++,H=I.input.charCodeAt(++I.position);else break}return G!==-1&&D!==0&&I.lineIndent<G&&Gn(I,"deficient indentation"),D}function ne(I){var ln=I.position,G;return G=I.input.charCodeAt(ln),!!((G===45||G===46)&&G===I.input.charCodeAt(ln+1)&&G===I.input.charCodeAt(ln+2)&&(ln+=3,G=I.input.charCodeAt(ln),G===0||fn(G)))}function vn(I,ln){ln===1?I.result+=" ":ln>1&&(I.result+=e.repeat(`
`,ln-1))}function In(I,ln,G){var D,H,z,K,Z,on,bn,wn,hn=I.kind,Mn=I.result,jn;if(jn=I.input.charCodeAt(I.position),fn(jn)||Pn(jn)||jn===35||jn===38||jn===42||jn===33||jn===124||jn===62||jn===39||jn===34||jn===37||jn===64||jn===96||(jn===63||jn===45)&&(H=I.input.charCodeAt(I.position+1),fn(H)||G&&Pn(H)))return!1;for(I.kind="scalar",I.result="",z=K=I.position,Z=!1;jn!==0;){if(jn===58){if(H=I.input.charCodeAt(I.position+1),fn(H)||G&&Pn(H))break}else if(jn===35){if(D=I.input.charCodeAt(I.position-1),fn(D))break}else{if(I.position===I.lineStart&&ne(I)||G&&Pn(jn))break;if(un(jn))if(on=I.line,bn=I.lineStart,wn=I.lineIndent,Kn(I,!1,-1),I.lineIndent>=ln){Z=!0,jn=I.input.charCodeAt(I.position);continue}else{I.position=K,I.line=on,I.lineStart=bn,I.lineIndent=wn;break}}Z&&(Un(I,z,K,!1),vn(I,I.line-on),z=K=I.position,Z=!1),mn(jn)||(K=I.position+1),jn=I.input.charCodeAt(++I.position)}return Un(I,z,K,!1),I.result?!0:(I.kind=hn,I.result=Mn,!1)}function Vn(I,ln){var G,D,H;if(G=I.input.charCodeAt(I.position),G!==39)return!1;for(I.kind="scalar",I.result="",I.position++,D=H=I.position;(G=I.input.charCodeAt(I.position))!==0;)if(G===39)if(Un(I,D,I.position,!0),G=I.input.charCodeAt(++I.position),G===39)D=I.position,I.position++,H=I.position;else return!0;else un(G)?(Un(I,D,H,!0),vn(I,Kn(I,!1,ln)),D=H=I.position):I.position===I.lineStart&&ne(I)?_n(I,"unexpected end of the document within a single quoted scalar"):(I.position++,H=I.position);_n(I,"unexpected end of the stream within a single quoted scalar")}function Fn(I,ln){var G,D,H,z,K,Z;if(Z=I.input.charCodeAt(I.position),Z!==34)return!1;for(I.kind="scalar",I.result="",I.position++,G=D=I.position;(Z=I.input.charCodeAt(I.position))!==0;){if(Z===34)return Un(I,G,I.position,!0),I.position++,!0;if(Z===92){if(Un(I,G,I.position,!0),Z=I.input.charCodeAt(++I.position),un(Z))Kn(I,!1,ln);else if(Z<256&&On[Z])I.result+=En[Z],I.position++;else if((K=sn(Z))>0){for(H=K,z=0;H>0;H--)Z=I.input.charCodeAt(++I.position),(K=An(Z))>=0?z=(z<<4)+K:_n(I,"expected hexadecimal character");I.result+=gn(z),I.position++}else _n(I,"unknown escape sequence");G=D=I.position}else un(Z)?(Un(I,G,D,!0),vn(I,Kn(I,!1,ln)),G=D=I.position):I.position===I.lineStart&&ne(I)?_n(I,"unexpected end of the document within a double quoted scalar"):(I.position++,D=I.position)}_n(I,"unexpected end of the stream within a double quoted scalar")}function Wn(I,ln){var G=!0,D,H=I.tag,z,K=I.anchor,Z,on,bn,wn,hn,Mn={},jn,Jn,ee,Qn;if(Qn=I.input.charCodeAt(I.position),Qn===91)on=93,hn=!1,z=[];else if(Qn===123)on=125,hn=!0,z={};else return!1;for(I.anchor!==null&&(I.anchorMap[I.anchor]=z),Qn=I.input.charCodeAt(++I.position);Qn!==0;){if(Kn(I,!0,ln),Qn=I.input.charCodeAt(I.position),Qn===on)return I.position++,I.tag=H,I.anchor=K,I.kind=hn?"mapping":"sequence",I.result=z,!0;G||_n(I,"missed comma between flow collection entries"),Jn=jn=ee=null,bn=wn=!1,Qn===63&&(Z=I.input.charCodeAt(I.position+1),fn(Z)&&(bn=wn=!0,I.position++,Kn(I,!0,ln))),D=I.line,Nn(I,ln,E,!1,!0),Jn=I.tag,jn=I.result,Kn(I,!0,ln),Qn=I.input.charCodeAt(I.position),(wn||I.line===D)&&Qn===58&&(bn=!0,Qn=I.input.charCodeAt(++I.position),Kn(I,!0,ln),Nn(I,ln,E,!1,!0),ee=I.result),hn?Zn(I,z,Mn,Jn,jn,ee):bn?z.push(Zn(I,null,Mn,Jn,jn,ee)):z.push(jn),Kn(I,!0,ln),Qn=I.input.charCodeAt(I.position),Qn===44?(G=!0,Qn=I.input.charCodeAt(++I.position)):G=!1}_n(I,"unexpected end of the stream within a flow collection")}function nn(I,ln){var G,D,H=B,z=!1,K=!1,Z=ln,on=0,bn=!1,wn,hn;if(hn=I.input.charCodeAt(I.position),hn===124)D=!1;else if(hn===62)D=!0;else return!1;for(I.kind="scalar",I.result="";hn!==0;)if(hn=I.input.charCodeAt(++I.position),hn===43||hn===45)B===H?H=hn===43?J:q:_n(I,"repeat of a chomping mode identifier");else if((wn=xn(hn))>=0)wn===0?_n(I,"bad explicit indentation width of a block scalar; it cannot be less than one"):K?_n(I,"repeat of an indentation width identifier"):(Z=ln+wn-1,K=!0);else break;if(mn(hn)){do hn=I.input.charCodeAt(++I.position);while(mn(hn));if(hn===35)do hn=I.input.charCodeAt(++I.position);while(!un(hn)&&hn!==0)}for(;hn!==0;){for(te(I),I.lineIndent=0,hn=I.input.charCodeAt(I.position);(!K||I.lineIndent<Z)&&hn===32;)I.lineIndent++,hn=I.input.charCodeAt(++I.position);if(!K&&I.lineIndent>Z&&(Z=I.lineIndent),un(hn)){on++;continue}if(I.lineIndent<Z){H===J?I.result+=e.repeat(`
`,z?1+on:on):H===B&&z&&(I.result+=`
`);break}for(D?mn(hn)?(bn=!0,I.result+=e.repeat(`
`,z?1+on:on)):bn?(bn=!1,I.result+=e.repeat(`
`,on+1)):on===0?z&&(I.result+=" "):I.result+=e.repeat(`
`,on):I.result+=e.repeat(`
`,z?1+on:on),z=!0,K=!0,on=0,G=I.position;!un(hn)&&hn!==0;)hn=I.input.charCodeAt(++I.position);Un(I,G,I.position,!1)}return!0}function tn(I,ln){var G,D=I.tag,H=I.anchor,z=[],K,Z=!1,on;for(I.anchor!==null&&(I.anchorMap[I.anchor]=z),on=I.input.charCodeAt(I.position);on!==0&&!(on!==45||(K=I.input.charCodeAt(I.position+1),!fn(K)));){if(Z=!0,I.position++,Kn(I,!0,-1)&&I.lineIndent<=ln){z.push(null),on=I.input.charCodeAt(I.position);continue}if(G=I.line,Nn(I,ln,C,!1,!0),z.push(I.result),Kn(I,!0,-1),on=I.input.charCodeAt(I.position),(I.line===G||I.lineIndent>ln)&&on!==0)_n(I,"bad indentation of a sequence entry");else if(I.lineIndent<ln)break}return Z?(I.tag=D,I.anchor=H,I.kind="sequence",I.result=z,!0):!1}function rn(I,ln,G){var D,H,z,K,Z=I.tag,on=I.anchor,bn={},wn={},hn=null,Mn=null,jn=null,Jn=!1,ee=!1,Qn;for(I.anchor!==null&&(I.anchorMap[I.anchor]=bn),Qn=I.input.charCodeAt(I.position);Qn!==0;){if(D=I.input.charCodeAt(I.position+1),z=I.line,K=I.position,(Qn===63||Qn===58)&&fn(D))Qn===63?(Jn&&(Zn(I,bn,wn,hn,Mn,null),hn=Mn=jn=null),ee=!0,Jn=!0,H=!0):Jn?(Jn=!1,H=!0):_n(I,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),I.position+=1,Qn=D;else if(Nn(I,G,P,!1,!0))if(I.line===z){for(Qn=I.input.charCodeAt(I.position);mn(Qn);)Qn=I.input.charCodeAt(++I.position);if(Qn===58)Qn=I.input.charCodeAt(++I.position),fn(Qn)||_n(I,"a whitespace character is expected after the key-value separator within a block mapping"),Jn&&(Zn(I,bn,wn,hn,Mn,null),hn=Mn=jn=null),ee=!0,Jn=!1,H=!1,hn=I.tag,Mn=I.result;else if(ee)_n(I,"can not read an implicit mapping pair; a colon is missed");else return I.tag=Z,I.anchor=on,!0}else if(ee)_n(I,"can not read a block mapping entry; a multiline key may not be an implicit key");else return I.tag=Z,I.anchor=on,!0;else break;if((I.line===z||I.lineIndent>ln)&&(Nn(I,ln,M,!0,H)&&(Jn?Mn=I.result:jn=I.result),Jn||(Zn(I,bn,wn,hn,Mn,jn,z,K),hn=Mn=jn=null),Kn(I,!0,-1),Qn=I.input.charCodeAt(I.position)),I.lineIndent>ln&&Qn!==0)_n(I,"bad indentation of a mapping entry");else if(I.lineIndent<ln)break}return Jn&&Zn(I,bn,wn,hn,Mn,null),ee&&(I.tag=Z,I.anchor=on,I.kind="mapping",I.result=bn),ee}function yn(I){var ln,G=!1,D=!1,H,z,K;if(K=I.input.charCodeAt(I.position),K!==33)return!1;if(I.tag!==null&&_n(I,"duplication of a tag property"),K=I.input.charCodeAt(++I.position),K===60?(G=!0,K=I.input.charCodeAt(++I.position)):K===33?(D=!0,H="!!",K=I.input.charCodeAt(++I.position)):H="!",ln=I.position,G){do K=I.input.charCodeAt(++I.position);while(K!==0&&K!==62);I.position<I.length?(z=I.input.slice(ln,I.position),K=I.input.charCodeAt(++I.position)):_n(I,"unexpected end of the stream within a verbatim tag")}else{for(;K!==0&&!fn(K);)K===33&&(D?_n(I,"tag suffix cannot contain exclamation marks"):(H=I.input.slice(ln-1,I.position+1),dn.test(H)||_n(I,"named tag handle cannot contain such characters"),D=!0,ln=I.position+1)),K=I.input.charCodeAt(++I.position);z=I.input.slice(ln,I.position),en.test(z)&&_n(I,"tag suffix cannot contain flow indicator characters")}return z&&!pn.test(z)&&_n(I,"tag name cannot contain such characters: "+z),G?I.tag=z:x.call(I.tagMap,H)?I.tag=I.tagMap[H]+z:H==="!"?I.tag="!"+z:H==="!!"?I.tag="tag:yaml.org,2002:"+z:_n(I,'undeclared tag handle "'+H+'"'),!0}function kn(I){var ln,G;if(G=I.input.charCodeAt(I.position),G!==38)return!1;for(I.anchor!==null&&_n(I,"duplication of an anchor property"),G=I.input.charCodeAt(++I.position),ln=I.position;G!==0&&!fn(G)&&!Pn(G);)G=I.input.charCodeAt(++I.position);return I.position===ln&&_n(I,"name of an anchor node must contain at least one character"),I.anchor=I.input.slice(ln,I.position),!0}function Sn(I){var ln,G,D;if(D=I.input.charCodeAt(I.position),D!==42)return!1;for(D=I.input.charCodeAt(++I.position),ln=I.position;D!==0&&!fn(D)&&!Pn(D);)D=I.input.charCodeAt(++I.position);return I.position===ln&&_n(I,"name of an alias node must contain at least one character"),G=I.input.slice(ln,I.position),x.call(I.anchorMap,G)||_n(I,'unidentified alias "'+G+'"'),I.result=I.anchorMap[G],Kn(I,!0,-1),!0}function Nn(I,ln,G,D,H){var z,K,Z,on=1,bn=!1,wn=!1,hn,Mn,jn,Jn,ee;if(I.listener!==null&&I.listener("open",I),I.tag=null,I.anchor=null,I.kind=null,I.result=null,z=K=Z=M===G||C===G,D&&Kn(I,!0,-1)&&(bn=!0,I.lineIndent>ln?on=1:I.lineIndent===ln?on=0:I.lineIndent<ln&&(on=-1)),on===1)for(;yn(I)||kn(I);)Kn(I,!0,-1)?(bn=!0,Z=z,I.lineIndent>ln?on=1:I.lineIndent===ln?on=0:I.lineIndent<ln&&(on=-1)):Z=!1;if(Z&&(Z=bn||H),(on===1||M===G)&&(E===G||P===G?Jn=ln:Jn=ln+1,ee=I.position-I.lineStart,on===1?Z&&(tn(I,ee)||rn(I,ee,Jn))||Wn(I,Jn)?wn=!0:(K&&nn(I,Jn)||Vn(I,Jn)||Fn(I,Jn)?wn=!0:Sn(I)?(wn=!0,(I.tag!==null||I.anchor!==null)&&_n(I,"alias node should not have any properties")):In(I,Jn,E===G)&&(wn=!0,I.tag===null&&(I.tag="?")),I.anchor!==null&&(I.anchorMap[I.anchor]=I.result)):on===0&&(wn=Z&&tn(I,ee))),I.tag!==null&&I.tag!=="!")if(I.tag==="?"){for(I.result!==null&&I.kind!=="scalar"&&_n(I,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+I.kind+'"'),hn=0,Mn=I.implicitTypes.length;hn<Mn;hn+=1)if(jn=I.implicitTypes[hn],jn.resolve(I.result)){I.result=jn.construct(I.result),I.tag=jn.tag,I.anchor!==null&&(I.anchorMap[I.anchor]=I.result);break}}else x.call(I.typeMap[I.kind||"fallback"],I.tag)?(jn=I.typeMap[I.kind||"fallback"][I.tag],I.result!==null&&jn.kind!==I.kind&&_n(I,"unacceptable node kind for !<"+I.tag+'> tag; it should be "'+jn.kind+'", not "'+I.kind+'"'),jn.resolve(I.result)?(I.result=jn.construct(I.result),I.anchor!==null&&(I.anchorMap[I.anchor]=I.result)):_n(I,"cannot resolve a node with !<"+I.tag+"> explicit tag")):_n(I,"unknown tag !<"+I.tag+">");return I.listener!==null&&I.listener("close",I),I.tag!==null||I.anchor!==null||wn}function $n(I){var ln=I.position,G,D,H,z=!1,K;for(I.version=null,I.checkLineBreaks=I.legacy,I.tagMap={},I.anchorMap={};(K=I.input.charCodeAt(I.position))!==0&&(Kn(I,!0,-1),K=I.input.charCodeAt(I.position),!(I.lineIndent>0||K!==37));){for(z=!0,K=I.input.charCodeAt(++I.position),G=I.position;K!==0&&!fn(K);)K=I.input.charCodeAt(++I.position);for(D=I.input.slice(G,I.position),H=[],D.length<1&&_n(I,"directive name must not be less than one character in length");K!==0;){for(;mn(K);)K=I.input.charCodeAt(++I.position);if(K===35){do K=I.input.charCodeAt(++I.position);while(K!==0&&!un(K));break}if(un(K))break;for(G=I.position;K!==0&&!fn(K);)K=I.input.charCodeAt(++I.position);H.push(I.input.slice(G,I.position))}K!==0&&te(I),x.call(Xn,D)?Xn[D](I,D,H):Gn(I,'unknown document directive "'+D+'"')}if(Kn(I,!0,-1),I.lineIndent===0&&I.input.charCodeAt(I.position)===45&&I.input.charCodeAt(I.position+1)===45&&I.input.charCodeAt(I.position+2)===45?(I.position+=3,Kn(I,!0,-1)):z&&_n(I,"directives end mark is expected"),Nn(I,I.lineIndent-1,M,!1,!0),Kn(I,!0,-1),I.checkLineBreaks&&X.test(I.input.slice(ln,I.position))&&Gn(I,"non-ASCII line breaks are interpreted as content"),I.documents.push(I.result),I.position===I.lineStart&&ne(I)){I.input.charCodeAt(I.position)===46&&(I.position+=3,Kn(I,!0,-1));return}if(I.position<I.length-1)_n(I,"end of the stream or a document separator is expected");else return}function Dn(I,ln){I=String(I),ln=ln||{},I.length!==0&&(I.charCodeAt(I.length-1)!==10&&I.charCodeAt(I.length-1)!==13&&(I+=`
`),I.charCodeAt(0)===65279&&(I=I.slice(1)));var G=new qn(I,ln),D=I.indexOf("\0");for(D!==-1&&(G.position=D,_n(G,"null byte is not allowed in input")),G.input+="\0";G.input.charCodeAt(G.position)===32;)G.lineIndent+=1,G.position+=1;for(;G.position<G.length-1;)$n(G);return G.documents}function Cn(I,ln,G){ln!==null&&typeof ln=="object"&&typeof G>"u"&&(G=ln,ln=null);var D=Dn(I,G);if(typeof ln!="function")return D;for(var H=0,z=D.length;H<z;H+=1)ln(D[H])}function Hn(I,ln){var G=Dn(I,ln);if(G.length!==0){if(G.length===1)return G[0];throw new a("expected a single document in the stream, but found more")}}function Bn(I,ln,G){return typeof ln=="object"&&ln!==null&&typeof G>"u"&&(G=ln,ln=null),Cn(I,ln,e.extend({schema:_},G))}function zn(I,ln){return Hn(I,e.extend({schema:_},ln))}return loader.loadAll=Cn,loader.load=Hn,loader.safeLoadAll=Bn,loader.safeLoad=zn,loader}var dumper={},hasRequiredDumper;function requireDumper(){if(hasRequiredDumper)return dumper;hasRequiredDumper=1;var e=requireCommon(),a=requireException(),f=requireDefault_full(),_=requireDefault_safe(),w=Object.prototype.toString,x=Object.prototype.hasOwnProperty,E=9,P=10,C=13,M=32,B=33,q=34,J=35,Y=37,X=38,en=39,dn=42,pn=44,an=45,un=58,mn=61,fn=62,Pn=63,An=64,sn=91,xn=93,Tn=96,gn=123,cn=124,On=125,En={};En[0]="\\0",En[7]="\\a",En[8]="\\b",En[9]="\\t",En[10]="\\n",En[11]="\\v",En[12]="\\f",En[13]="\\r",En[27]="\\e",En[34]='\\"',En[92]="\\\\",En[133]="\\N",En[160]="\\_",En[8232]="\\L",En[8233]="\\P";var Ln=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function qn(z,K){var Z,on,bn,wn,hn,Mn,jn;if(K===null)return{};for(Z={},on=Object.keys(K),bn=0,wn=on.length;bn<wn;bn+=1)hn=on[bn],Mn=String(K[hn]),hn.slice(0,2)==="!!"&&(hn="tag:yaml.org,2002:"+hn.slice(2)),jn=z.compiledTypeMap.fallback[hn],jn&&x.call(jn.styleAliases,Mn)&&(Mn=jn.styleAliases[Mn]),Z[hn]=Mn;return Z}function Rn(z){var K,Z,on;if(K=z.toString(16).toUpperCase(),z<=255)Z="x",on=2;else if(z<=65535)Z="u",on=4;else if(z<=4294967295)Z="U",on=8;else throw new a("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+Z+e.repeat("0",on-K.length)+K}function _n(z){this.schema=z.schema||f,this.indent=Math.max(1,z.indent||2),this.noArrayIndent=z.noArrayIndent||!1,this.skipInvalid=z.skipInvalid||!1,this.flowLevel=e.isNothing(z.flowLevel)?-1:z.flowLevel,this.styleMap=qn(this.schema,z.styles||null),this.sortKeys=z.sortKeys||!1,this.lineWidth=z.lineWidth||80,this.noRefs=z.noRefs||!1,this.noCompatMode=z.noCompatMode||!1,this.condenseFlow=z.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Gn(z,K){for(var Z=e.repeat(" ",K),on=0,bn=-1,wn="",hn,Mn=z.length;on<Mn;)bn=z.indexOf(`
`,on),bn===-1?(hn=z.slice(on),on=Mn):(hn=z.slice(on,bn+1),on=bn+1),hn.length&&hn!==`
`&&(wn+=Z),wn+=hn;return wn}function Xn(z,K){return`
`+e.repeat(" ",z.indent*K)}function Un(z,K){var Z,on,bn;for(Z=0,on=z.implicitTypes.length;Z<on;Z+=1)if(bn=z.implicitTypes[Z],bn.resolve(K))return!0;return!1}function Yn(z){return z===M||z===E}function Zn(z){return 32<=z&&z<=126||161<=z&&z<=55295&&z!==8232&&z!==8233||57344<=z&&z<=65533&&z!==65279||65536<=z&&z<=1114111}function te(z){return Zn(z)&&!Yn(z)&&z!==65279&&z!==C&&z!==P}function Kn(z,K){return Zn(z)&&z!==65279&&z!==pn&&z!==sn&&z!==xn&&z!==gn&&z!==On&&z!==un&&(z!==J||K&&te(K))}function ne(z){return Zn(z)&&z!==65279&&!Yn(z)&&z!==an&&z!==Pn&&z!==un&&z!==pn&&z!==sn&&z!==xn&&z!==gn&&z!==On&&z!==J&&z!==X&&z!==dn&&z!==B&&z!==cn&&z!==mn&&z!==fn&&z!==en&&z!==q&&z!==Y&&z!==An&&z!==Tn}function vn(z){var K=/^\n* /;return K.test(z)}var In=1,Vn=2,Fn=3,Wn=4,nn=5;function tn(z,K,Z,on,bn){var wn,hn,Mn,jn=!1,Jn=!1,ee=on!==-1,Qn=-1,oe=ne(z.charCodeAt(0))&&!Yn(z.charCodeAt(z.length-1));if(K)for(wn=0;wn<z.length;wn++){if(hn=z.charCodeAt(wn),!Zn(hn))return nn;Mn=wn>0?z.charCodeAt(wn-1):null,oe=oe&&Kn(hn,Mn)}else{for(wn=0;wn<z.length;wn++){if(hn=z.charCodeAt(wn),hn===P)jn=!0,ee&&(Jn=Jn||wn-Qn-1>on&&z[Qn+1]!==" ",Qn=wn);else if(!Zn(hn))return nn;Mn=wn>0?z.charCodeAt(wn-1):null,oe=oe&&Kn(hn,Mn)}Jn=Jn||ee&&wn-Qn-1>on&&z[Qn+1]!==" "}return!jn&&!Jn?oe&&!bn(z)?In:Vn:Z>9&&vn(z)?nn:Jn?Wn:Fn}function rn(z,K,Z,on){z.dump=(function(){if(K.length===0)return"''";if(!z.noCompatMode&&Ln.indexOf(K)!==-1)return"'"+K+"'";var bn=z.indent*Math.max(1,Z),wn=z.lineWidth===-1?-1:Math.max(Math.min(z.lineWidth,40),z.lineWidth-bn),hn=on||z.flowLevel>-1&&Z>=z.flowLevel;function Mn(jn){return Un(z,jn)}switch(tn(K,hn,z.indent,wn,Mn)){case In:return K;case Vn:return"'"+K.replace(/'/g,"''")+"'";case Fn:return"|"+yn(K,z.indent)+kn(Gn(K,bn));case Wn:return">"+yn(K,z.indent)+kn(Gn(Sn(K,wn),bn));case nn:return'"'+$n(K)+'"';default:throw new a("impossible error: invalid scalar style")}})()}function yn(z,K){var Z=vn(z)?String(K):"",on=z[z.length-1]===`
`,bn=on&&(z[z.length-2]===`
`||z===`
`),wn=bn?"+":on?"":"-";return Z+wn+`
`}function kn(z){return z[z.length-1]===`
`?z.slice(0,-1):z}function Sn(z,K){for(var Z=/(\n+)([^\n]*)/g,on=(function(){var Jn=z.indexOf(`
`);return Jn=Jn!==-1?Jn:z.length,Z.lastIndex=Jn,Nn(z.slice(0,Jn),K)})(),bn=z[0]===`
`||z[0]===" ",wn,hn;hn=Z.exec(z);){var Mn=hn[1],jn=hn[2];wn=jn[0]===" ",on+=Mn+(!bn&&!wn&&jn!==""?`
`:"")+Nn(jn,K),bn=wn}return on}function Nn(z,K){if(z===""||z[0]===" ")return z;for(var Z=/ [^ ]/g,on,bn=0,wn,hn=0,Mn=0,jn="";on=Z.exec(z);)Mn=on.index,Mn-bn>K&&(wn=hn>bn?hn:Mn,jn+=`
`+z.slice(bn,wn),bn=wn+1),hn=Mn;return jn+=`
`,z.length-bn>K&&hn>bn?jn+=z.slice(bn,hn)+`
`+z.slice(hn+1):jn+=z.slice(bn),jn.slice(1)}function $n(z){for(var K="",Z,on,bn,wn=0;wn<z.length;wn++){if(Z=z.charCodeAt(wn),Z>=55296&&Z<=56319&&(on=z.charCodeAt(wn+1),on>=56320&&on<=57343)){K+=Rn((Z-55296)*1024+on-56320+65536),wn++;continue}bn=En[Z],K+=!bn&&Zn(Z)?z[wn]:bn||Rn(Z)}return K}function Dn(z,K,Z){var on="",bn=z.tag,wn,hn;for(wn=0,hn=Z.length;wn<hn;wn+=1)I(z,K,Z[wn],!1,!1)&&(wn!==0&&(on+=","+(z.condenseFlow?"":" ")),on+=z.dump);z.tag=bn,z.dump="["+on+"]"}function Cn(z,K,Z,on){var bn="",wn=z.tag,hn,Mn;for(hn=0,Mn=Z.length;hn<Mn;hn+=1)I(z,K+1,Z[hn],!0,!0)&&((!on||hn!==0)&&(bn+=Xn(z,K)),z.dump&&P===z.dump.charCodeAt(0)?bn+="-":bn+="- ",bn+=z.dump);z.tag=wn,z.dump=bn||"[]"}function Hn(z,K,Z){var on="",bn=z.tag,wn=Object.keys(Z),hn,Mn,jn,Jn,ee;for(hn=0,Mn=wn.length;hn<Mn;hn+=1)ee="",hn!==0&&(ee+=", "),z.condenseFlow&&(ee+='"'),jn=wn[hn],Jn=Z[jn],I(z,K,jn,!1,!1)&&(z.dump.length>1024&&(ee+="? "),ee+=z.dump+(z.condenseFlow?'"':"")+":"+(z.condenseFlow?"":" "),I(z,K,Jn,!1,!1)&&(ee+=z.dump,on+=ee));z.tag=bn,z.dump="{"+on+"}"}function Bn(z,K,Z,on){var bn="",wn=z.tag,hn=Object.keys(Z),Mn,jn,Jn,ee,Qn,oe;if(z.sortKeys===!0)hn.sort();else if(typeof z.sortKeys=="function")hn.sort(z.sortKeys);else if(z.sortKeys)throw new a("sortKeys must be a boolean or a function");for(Mn=0,jn=hn.length;Mn<jn;Mn+=1)oe="",(!on||Mn!==0)&&(oe+=Xn(z,K)),Jn=hn[Mn],ee=Z[Jn],I(z,K+1,Jn,!0,!0,!0)&&(Qn=z.tag!==null&&z.tag!=="?"||z.dump&&z.dump.length>1024,Qn&&(z.dump&&P===z.dump.charCodeAt(0)?oe+="?":oe+="? "),oe+=z.dump,Qn&&(oe+=Xn(z,K)),I(z,K+1,ee,!0,Qn)&&(z.dump&&P===z.dump.charCodeAt(0)?oe+=":":oe+=": ",oe+=z.dump,bn+=oe));z.tag=wn,z.dump=bn||"{}"}function zn(z,K,Z){var on,bn,wn,hn,Mn,jn;for(bn=Z?z.explicitTypes:z.implicitTypes,wn=0,hn=bn.length;wn<hn;wn+=1)if(Mn=bn[wn],(Mn.instanceOf||Mn.predicate)&&(!Mn.instanceOf||typeof K=="object"&&K instanceof Mn.instanceOf)&&(!Mn.predicate||Mn.predicate(K))){if(z.tag=Z?Mn.tag:"?",Mn.represent){if(jn=z.styleMap[Mn.tag]||Mn.defaultStyle,w.call(Mn.represent)==="[object Function]")on=Mn.represent(K,jn);else if(x.call(Mn.represent,jn))on=Mn.represent[jn](K,jn);else throw new a("!<"+Mn.tag+'> tag resolver accepts not "'+jn+'" style');z.dump=on}return!0}return!1}function I(z,K,Z,on,bn,wn){z.tag=null,z.dump=Z,zn(z,Z,!1)||zn(z,Z,!0);var hn=w.call(z.dump);on&&(on=z.flowLevel<0||z.flowLevel>K);var Mn=hn==="[object Object]"||hn==="[object Array]",jn,Jn;if(Mn&&(jn=z.duplicates.indexOf(Z),Jn=jn!==-1),(z.tag!==null&&z.tag!=="?"||Jn||z.indent!==2&&K>0)&&(bn=!1),Jn&&z.usedDuplicates[jn])z.dump="*ref_"+jn;else{if(Mn&&Jn&&!z.usedDuplicates[jn]&&(z.usedDuplicates[jn]=!0),hn==="[object Object]")on&&Object.keys(z.dump).length!==0?(Bn(z,K,z.dump,bn),Jn&&(z.dump="&ref_"+jn+z.dump)):(Hn(z,K,z.dump),Jn&&(z.dump="&ref_"+jn+" "+z.dump));else if(hn==="[object Array]"){var ee=z.noArrayIndent&&K>0?K-1:K;on&&z.dump.length!==0?(Cn(z,ee,z.dump,bn),Jn&&(z.dump="&ref_"+jn+z.dump)):(Dn(z,ee,z.dump),Jn&&(z.dump="&ref_"+jn+" "+z.dump))}else if(hn==="[object String]")z.tag!=="?"&&rn(z,z.dump,K,wn);else{if(z.skipInvalid)return!1;throw new a("unacceptable kind of an object to dump "+hn)}z.tag!==null&&z.tag!=="?"&&(z.dump="!<"+z.tag+"> "+z.dump)}return!0}function ln(z,K){var Z=[],on=[],bn,wn;for(G(z,Z,on),bn=0,wn=on.length;bn<wn;bn+=1)K.duplicates.push(Z[on[bn]]);K.usedDuplicates=new Array(wn)}function G(z,K,Z){var on,bn,wn;if(z!==null&&typeof z=="object")if(bn=K.indexOf(z),bn!==-1)Z.indexOf(bn)===-1&&Z.push(bn);else if(K.push(z),Array.isArray(z))for(bn=0,wn=z.length;bn<wn;bn+=1)G(z[bn],K,Z);else for(on=Object.keys(z),bn=0,wn=on.length;bn<wn;bn+=1)G(z[on[bn]],K,Z)}function D(z,K){K=K||{};var Z=new _n(K);return Z.noRefs||ln(z,Z),I(Z,0,z,!0,!0)?Z.dump+`
`:""}function H(z,K){return D(z,e.extend({schema:_},K))}return dumper.dump=D,dumper.safeDump=H,dumper}var hasRequiredJsYaml$1;function requireJsYaml$1(){if(hasRequiredJsYaml$1)return jsYaml$1;hasRequiredJsYaml$1=1;var e=requireLoader(),a=requireDumper();function f(_){return function(){throw new Error("Function "+_+" is deprecated and cannot be used.")}}return jsYaml$1.Type=requireType(),jsYaml$1.Schema=requireSchema(),jsYaml$1.FAILSAFE_SCHEMA=requireFailsafe(),jsYaml$1.JSON_SCHEMA=requireJson(),jsYaml$1.CORE_SCHEMA=requireCore(),jsYaml$1.DEFAULT_SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_FULL_SCHEMA=requireDefault_full(),jsYaml$1.load=e.load,jsYaml$1.loadAll=e.loadAll,jsYaml$1.safeLoad=e.safeLoad,jsYaml$1.safeLoadAll=e.safeLoadAll,jsYaml$1.dump=a.dump,jsYaml$1.safeDump=a.safeDump,jsYaml$1.YAMLException=requireException(),jsYaml$1.MINIMAL_SCHEMA=requireFailsafe(),jsYaml$1.SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_SCHEMA=requireDefault_full(),jsYaml$1.scan=f("scan"),jsYaml$1.parse=f("parse"),jsYaml$1.compose=f("compose"),jsYaml$1.addConstructor=f("addConstructor"),jsYaml$1}var jsYaml,hasRequiredJsYaml;function requireJsYaml(){if(hasRequiredJsYaml)return jsYaml;hasRequiredJsYaml=1;var e=requireJsYaml$1();return jsYaml=e,jsYaml}var hasRequiredEngines;function requireEngines(){return hasRequiredEngines||(hasRequiredEngines=1,(function(module,exports$1){const yaml=requireJsYaml(),engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(e,a){const f=Object.assign({replacer:null,space:2},a);return JSON.stringify(e,f.replacer,f.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(e){if(wrap!==!1&&/(unexpected|identifier)/i.test(e.message))return parse(str,options,!1);throw new SyntaxError(e)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines)),engines.exports}var utils={};var stripBomString,hasRequiredStripBomString;function requireStripBomString(){return hasRequiredStripBomString||(hasRequiredStripBomString=1,stripBomString=function(e){return typeof e=="string"&&e.charAt(0)==="\uFEFF"?e.slice(1):e}),stripBomString}var hasRequiredUtils;function requireUtils(){return hasRequiredUtils||(hasRequiredUtils=1,(function(e){const a=requireStripBomString(),f=requireKindOf();e.define=function(_,w,x){Reflect.defineProperty(_,w,{enumerable:!1,configurable:!0,writable:!0,value:x})},e.isBuffer=function(_){return f(_)==="buffer"},e.isObject=function(_){return f(_)==="object"},e.toBuffer=function(_){return typeof _=="string"?Buffer.from(_):_},e.toString=function(_){if(e.isBuffer(_))return a(String(_));if(typeof _!="string")throw new TypeError("expected input to be a string or buffer");return a(_)},e.arrayify=function(_){return _?Array.isArray(_)?_:[_]:[]},e.startsWith=function(_,w,x){return typeof x!="number"&&(x=w.length),_.slice(0,x)===w}})(utils)),utils}var defaults$1,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults$1;hasRequiredDefaults=1;const e=requireEngines(),a=requireUtils();return defaults$1=function(f){const _=Object.assign({},f);return _.delimiters=a.arrayify(_.delims||_.delimiters||"---"),_.delimiters.length===1&&_.delimiters.push(_.delimiters[0]),_.language=(_.language||_.lang||"yaml").toLowerCase(),_.engines=Object.assign({},e,_.parsers,_.engines),_},defaults$1}var engine,hasRequiredEngine;function requireEngine(){if(hasRequiredEngine)return engine;hasRequiredEngine=1,engine=function(a,f){let _=f.engines[a]||f.engines[e(a)];if(typeof _>"u")throw new Error('gray-matter engine "'+a+'" is not registered');return typeof _=="function"&&(_={parse:_}),_};function e(a){switch(a.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return a}}return engine}var stringify,hasRequiredStringify;function requireStringify(){if(hasRequiredStringify)return stringify;hasRequiredStringify=1;const e=requireKindOf(),a=requireEngine(),f=requireDefaults();stringify=function(w,x,E){if(x==null&&E==null)switch(e(w)){case"object":x=w.data,E={};break;case"string":return w;default:throw new TypeError("expected file to be a string or object")}const P=w.content,C=f(E);if(x==null){if(!C.data)return w;x=C.data}const M=w.language||C.language,B=a(M,C);if(typeof B.stringify!="function")throw new TypeError('expected "'+M+'.stringify" to be a function');x=Object.assign({},w.data,x);const q=C.delimiters[0],J=C.delimiters[1],Y=B.stringify(x,E).trim();let X="";return Y!=="{}"&&(X=_(q)+_(Y)+_(J)),typeof w.excerpt=="string"&&w.excerpt!==""&&P.indexOf(w.excerpt.trim())===-1&&(X+=_(w.excerpt)+_(J)),X+_(P)};function _(w){return w.slice(-1)!==`
`?w+`
`:w}return stringify}var excerpt,hasRequiredExcerpt;function requireExcerpt(){if(hasRequiredExcerpt)return excerpt;hasRequiredExcerpt=1;const e=requireDefaults();return excerpt=function(a,f){const _=e(f);if(a.data==null&&(a.data={}),typeof _.excerpt=="function")return _.excerpt(a,_);const w=a.data.excerpt_separator||_.excerpt_separator;if(w==null&&(_.excerpt===!1||_.excerpt==null))return a;const x=typeof _.excerpt=="string"?_.excerpt:w||_.delimiters[0],E=a.content.indexOf(x);return E!==-1&&(a.excerpt=a.content.slice(0,E)),a},excerpt}var toFile,hasRequiredToFile;function requireToFile(){if(hasRequiredToFile)return toFile;hasRequiredToFile=1;const e=requireKindOf(),a=requireStringify(),f=requireUtils();return toFile=function(_){return e(_)!=="object"&&(_={content:_}),e(_.data)!=="object"&&(_.data={}),_.contents&&_.content==null&&(_.content=_.contents),f.define(_,"orig",f.toBuffer(_.content)),f.define(_,"language",_.language||""),f.define(_,"matter",_.matter||""),f.define(_,"stringify",function(w,x){return x&&x.language&&(_.language=x.language),a(_,w,x)}),_.content=f.toString(_.content),_.isEmpty=!1,_.excerpt="",_},toFile}var parse,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse;hasRequiredParse=1;const e=requireEngine(),a=requireDefaults();return parse=function(f,_,w){const x=a(w),E=e(f,x);if(typeof E.parse!="function")throw new TypeError('expected "'+f+'.parse" to be a function');return E.parse(_,x)},parse}var grayMatter,hasRequiredGrayMatter;function requireGrayMatter(){if(hasRequiredGrayMatter)return grayMatter;hasRequiredGrayMatter=1;const e=require$$0,a=requireSectionMatter(),f=requireDefaults(),_=requireStringify(),w=requireExcerpt(),x=requireEngines(),E=requireToFile(),P=requireParse(),C=requireUtils();function M(q,J){if(q==="")return{data:{},content:q,excerpt:"",orig:q};let Y=E(q);const X=M.cache[Y.content];if(!J){if(X)return Y=Object.assign({},X),Y.orig=X.orig,Y;M.cache[Y.content]=Y}return B(Y,J)}function B(q,J){const Y=f(J),X=Y.delimiters[0],en=`
`+Y.delimiters[1];let dn=q.content;Y.language&&(q.language=Y.language);const pn=X.length;if(!C.startsWith(dn,X,pn))return w(q,Y),q;if(dn.charAt(pn)===X.slice(-1))return q;dn=dn.slice(pn);const an=dn.length,un=M.language(dn,Y);un.name&&(q.language=un.name,dn=dn.slice(un.raw.length));let mn=dn.indexOf(en);return mn===-1&&(mn=an),q.matter=dn.slice(0,mn),q.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(q.isEmpty=!0,q.empty=q.content,q.data={}):q.data=P(q.language,q.matter,Y),mn===an?q.content="":(q.content=dn.slice(mn+en.length),q.content[0]==="\r"&&(q.content=q.content.slice(1)),q.content[0]===`
`&&(q.content=q.content.slice(1))),w(q,Y),(Y.sections===!0||typeof Y.section=="function")&&a(q,Y.section),q}return M.engines=x,M.stringify=function(q,J,Y){return typeof q=="string"&&(q=M(q,Y)),_(q,J,Y)},M.read=function(q,J){const Y=e.readFileSync(q,"utf8"),X=M(Y,J);return X.path=q,X},M.test=function(q,J){return C.startsWith(q,f(J).delimiters[0])},M.language=function(q,J){const X=f(J).delimiters[0];M.test(q)&&(q=q.slice(X.length));const en=q.slice(0,q.search(/\r?\n/));return{raw:en,name:en?en.trim():""}},M.cache={},M.clearCache=function(){M.cache={}},grayMatter=M,grayMatter}var grayMatterExports=requireGrayMatter();const matter=getDefaultExportFromCjs(grayMatterExports),_hoisted_1$2={class:"flex px-3 py-5 mb-3"},_hoisted_2$1={class:"grow"},_hoisted_3$1={class:"flex flex-col gap-1 min-w-0"},_hoisted_4$1={class:"group-hover:pl-2 transition-all"},_hoisted_5$1={class:"group-hover:bg-emerald-700 group-hover:text-white flex justify-center items-center text-sm text-neutral-500 bg-neutral-100 rounded px-2 transition-all"},_hoisted_6={key:0,class:"grid overflow-hidden"},_hoisted_7={class:"min-h-0"},_hoisted_8={class:"flex flex-col gap-1"},_sfc_main$2={__name:"BlogSidebar",setup(e){const a=ref([]),f=useRoute(),_=computed(()=>Number(f.params.id)),w=ref(null),x=E=>{w.value===E?w.value=null:w.value=E};return onMounted(()=>{const E=Object.assign({"../posts/Axios打API後Token存cookie範例.md":__vite_glob_0_0,"../posts/BOM瀏覽器物件.md":__vite_glob_0_1,"../posts/Bootstrap4實作元件.md":__vite_glob_0_2,"../posts/CSS Media Screen.md":__vite_glob_0_3,"../posts/CSS元件樣式.md":__vite_glob_0_4,"../posts/CSS基本樣式.md":__vite_glob_0_5,"../posts/Chrome瀏覽器的內建截圖方法.md":__vite_glob_0_6,"../posts/Component元件.md":__vite_glob_0_7,"../posts/Figma使用教學.md":__vite_glob_0_8,"../posts/Flexbox彈性盒子.md":__vite_glob_0_9,"../posts/Fontawesome.md":__vite_glob_0_10,"../posts/Google Maps API.md":__vite_glob_0_11,"../posts/Gulp壓縮圖片並優化.md":__vite_glob_0_12,"../posts/Gulp安裝並建立bootstrap開發環境.md":__vite_glob_0_13,"../posts/Gulp將css樣式加上前綴增加瀏覽器兼容性.md":__vite_glob_0_14,"../posts/Gulp將javascript整合成穩定版本.md":__vite_glob_0_15,"../posts/Gulp將scss自動編譯成css.md":__vite_glob_0_16,"../posts/Gulp將引入的js套件合併成一個檔案.md":__vite_glob_0_17,"../posts/Gulp生成程式碼map以利除錯編譯.md":__vite_glob_0_18,"../posts/Gulp網頁模版Nunjucks.md":__vite_glob_0_19,"../posts/Gulp自動刪除上一次的編譯結果.md":__vite_glob_0_20,"../posts/Gulp開啟本地端伺服器瀏覽網站.md":__vite_glob_0_21,"../posts/HTML標籤大全.md":__vite_glob_0_22,"../posts/Hugo Blog建立成功.md":__vite_glob_0_23,"../posts/JSON Server模擬串接API.md":__vite_glob_0_24,"../posts/JS核心篇(1)：認識JavaScript.md":__vite_glob_0_25,"../posts/JS核心篇(10)：物件.md":__vite_glob_0_26,"../posts/JS核心篇(11)：傳純值與傳參考特性.md":__vite_glob_0_27,"../posts/JS核心篇(12)：淺層拷貝與深層拷貝.md":__vite_glob_0_28,"../posts/JS核心篇(13)：陣列.md":__vite_glob_0_29,"../posts/JS核心篇(14)：JSON.md":__vite_glob_0_30,"../posts/JS核心篇(15)：函式.md":__vite_glob_0_31,"../posts/JS核心篇(16)：參數.md":__vite_glob_0_32,"../posts/JS核心篇(17)：閉包.md":__vite_glob_0_33,"../posts/JS核心篇(18)：this的呼叫方式.md":__vite_glob_0_34,"../posts/JS核心篇(19)：嚴格模式.md":__vite_glob_0_35,"../posts/JS核心篇(2)：陳述式與表達式.md":__vite_glob_0_36,"../posts/JS核心篇(20)：原型.md":__vite_glob_0_37,"../posts/JS核心篇(21)：自定義原型.md":__vite_glob_0_38,"../posts/JS核心篇(22)：物件屬性.md":__vite_glob_0_39,"../posts/JS核心篇(23)：物件鎖定機制.md":__vite_glob_0_40,"../posts/JS核心篇(24)：存取器.md":__vite_glob_0_41,"../posts/JS核心篇(25)：宣告變數三劍客.md":__vite_glob_0_42,"../posts/JS核心篇(26)：箭頭函式.md":__vite_glob_0_43,"../posts/JS核心篇(27)：箭頭函式的實戰運用.md":__vite_glob_0_44,"../posts/JS核心篇(28)：樣板字面值.md":__vite_glob_0_45,"../posts/JS核心篇(29)：Promise.md":__vite_glob_0_46,"../posts/JS核心篇(3)：ASI自動插入分號.md":__vite_glob_0_47,"../posts/JS核心篇(30)：Async.md":__vite_glob_0_48,"../posts/JS核心篇(31)：Class.md":__vite_glob_0_49,"../posts/JS核心篇(4)：原始型別與物件型別.md":__vite_glob_0_50,"../posts/JS核心篇(5)：運算子.md":__vite_glob_0_51,"../posts/JS核心篇(6)：運算子的優先序.md":__vite_glob_0_52,"../posts/JS核心篇(7)：運算子的相等性.md":__vite_glob_0_53,"../posts/JS核心篇(8)：邏輯運算子.md":__vite_glob_0_54,"../posts/JS核心篇(9)：真值與假值.md":__vite_glob_0_55,"../posts/JavaScript縮寫.md":__vite_glob_0_56,"../posts/Javascript監聽事件總整理.md":__vite_glob_0_57,"../posts/Lightbox2燈箱效果.md":__vite_glob_0_58,"../posts/Mac檔案加密方法.md":__vite_glob_0_59,"../posts/Mac網頁動態效果消失.md":__vite_glob_0_60,"../posts/Markdown語法與HTML的對照.md":__vite_glob_0_61,"../posts/Object處理方法.md":__vite_glob_0_62,"../posts/PhotoShop常用快捷鍵.md":__vite_glob_0_63,"../posts/Pinia狀態管理工具.md":__vite_glob_0_64,"../posts/Sass快速編譯 + 變數使用.md":__vite_glob_0_65,"../posts/Skrollr頁面滾動效果.md":__vite_glob_0_66,"../posts/Swiper輪播效果.md":__vite_glob_0_67,"../posts/UIUX核心觀念.md":__vite_glob_0_68,"../posts/VSCode技巧 + 實用套件.md":__vite_glob_0_69,"../posts/Vite + Vue3 + Tailwind4.1環境.md":__vite_glob_0_70,"../posts/Vue2課程(1)：認識Vue.md":__vite_glob_0_71,"../posts/Vue2課程(10)：元件化.md":__vite_glob_0_72,"../posts/Vue2課程(11)：props資料外傳內.md":__vite_glob_0_73,"../posts/Vue2課程(12)：emit資料內傳外.md":__vite_glob_0_74,"../posts/Vue2課程(13)：slot元件插槽.md":__vite_glob_0_75,"../posts/Vue2課程(14)：用is動態切換元件.md":__vite_glob_0_76,"../posts/Vue2課程(15)：展開與其餘參數.md":__vite_glob_0_77,"../posts/Vue2課程(16)：解構與賦值.md":__vite_glob_0_78,"../posts/Vue2課程(17)：常用陣列方法.md":__vite_glob_0_79,"../posts/Vue2課程(18)：Extend元件建構器.md":__vite_glob_0_80,"../posts/Vue2課程(19)：Filter過濾器.md":__vite_glob_0_81,"../posts/Vue2課程(2)：Vue模板語法.md":__vite_glob_0_82,"../posts/Vue2課程(20)：Mixin混合共用邏輯.md":__vite_glob_0_83,"../posts/Vue2課程(21)：Directive操作DOM.md":__vite_glob_0_84,"../posts/Vue2課程(22)：建立Vue Cli專案.md":__vite_glob_0_85,"../posts/Vue2課程(23)：配置Vue Router.md":__vite_glob_0_86,"../posts/Vue2課程(3)：v-for列印資料.md":__vite_glob_0_87,"../posts/Vue2課程(4)：v-on綁定事件.md":__vite_glob_0_88,"../posts/Vue2課程(5)：v-model綁定表單.md":__vite_glob_0_89,"../posts/Vue2課程(6)：v-bind動態切換屬性.md":__vite_glob_0_90,"../posts/Vue2課程(7)：Computed自動計算.md":__vite_glob_0_91,"../posts/Vue2課程(8)：Watch監控資料.md":__vite_glob_0_92,"../posts/Vue2課程(9)：修飾符總整理.md":__vite_glob_0_93,"../posts/Vue3 + Font Awesome 7使用方法.md":__vite_glob_0_94,"../posts/Vue3 + 將網站部署到GitHub Pages.md":__vite_glob_0_95,"../posts/Vue3 emit資料由內傳外.md":__vite_glob_0_96,"../posts/Vue3 props資料由外傳內.md":__vite_glob_0_97,"../posts/Vue3+Swiper輪播.md":__vite_glob_0_98,"../posts/Vue元件的切換與插槽.md":__vite_glob_0_99,"../posts/Vue切換應用方法.md":__vite_glob_0_100,"../posts/Vue的Devtools安裝.md":__vite_glob_0_101,"../posts/Webpack基本環境建置並渲染出畫面.md":__vite_glob_0_102,"../posts/Webpack編譯SCSS並優化 + 導入Bootstrap.md":__vite_glob_0_103,"../posts/Webpack複製檔案 + 自動壓縮圖片.md":__vite_glob_0_104,"../posts/Webpack轉譯JS版本 + 引用jQuery.md":__vite_glob_0_105,"../posts/Webpack開發環境設置 + SourceMap生成.md":__vite_glob_0_106,"../posts/html樣式綁定.md":__vite_glob_0_107,"../posts/input表單常用修飾符.md":__vite_glob_0_108,"../posts/jQuery判斷式.md":__vite_glob_0_109,"../posts/jQuery加入聲音效果.md":__vite_glob_0_110,"../posts/jQuery實作數量選擇器.md":__vite_glob_0_111,"../posts/jQuery實作滾動頁面頁籤變換.md":__vite_glob_0_112,"../posts/jQuery實作點擊錨點滑動至該區塊.md":__vite_glob_0_113,"../posts/jQuery抓取滑鼠事件.md":__vite_glob_0_114,"../posts/jQuery抓取鍵盤事件.md":__vite_glob_0_115,"../posts/jQuery用JS + CSS實作常用元件.md":__vite_glob_0_116,"../posts/jQuery處理物件與陣列.md":__vite_glob_0_117,"../posts/jQuery處理陣列.md":__vite_glob_0_118,"../posts/jQuery點擊事件 + 依層級抓取元素.md":__vite_glob_0_119,"../posts/jQuery點擊事件 + 依順序抓取元素.md":__vite_glob_0_120,"../posts/jQuery點擊事件 + 動態效果.md":__vite_glob_0_121,"../posts/jQuery點擊事件 + 抓取元素位置.md":__vite_glob_0_122,"../posts/jQuery點擊事件 + 抓取元素尺寸.md":__vite_glob_0_123,"../posts/jQuery點擊事件 + 改變標籤.md":__vite_glob_0_124,"../posts/jQuery點擊事件 + 顯示或隱藏.md":__vite_glob_0_125,"../posts/keyframes關鍵影格.md":__vite_glob_0_126,"../posts/mitt跨元件傳資料.md":__vite_glob_0_127,"../posts/promise非同步觀念.md":__vite_glob_0_128,"../posts/ref操作DOM元素.md":__vite_glob_0_129,"../posts/ref與reactive差別.md":__vite_glob_0_130,"../posts/template模板.md":__vite_glob_0_131,"../posts/this的指向.md":__vite_glob_0_132,"../posts/v-bind屬性綁定.md":__vite_glob_0_133,"../posts/v-for呈現多筆資料.md":__vite_glob_0_134,"../posts/v-if選擇性顯示.md":__vite_glob_0_135,"../posts/v-model修飾符.md":__vite_glob_0_136,"../posts/v-model雙向綁定.md":__vite_glob_0_137,"../posts/v-on使用者事件.md":__vite_glob_0_138,"../posts/v-on修飾符.md":__vite_glob_0_139,"../posts/v-text顯示資料.md":__vite_glob_0_140,"../posts/使用Devtools找出api資料.md":__vite_glob_0_141,"../posts/使用axios串接api.md":__vite_glob_0_142,"../posts/使用lozad.js實作圖片延遲載入.md":__vite_glob_0_143,"../posts/使用setup與defineProps傳值.md":__vite_glob_0_144,"../posts/判斷式if、else、switch.md":__vite_glob_0_145,"../posts/利用nvm來控制node版本.md":__vite_glob_0_146,"../posts/各種操作Array方法.md":__vite_glob_0_147,"../posts/合成兩張不同的臉.md":__vite_glob_0_148,"../posts/在VSCode輸入指令直接將網站部署到GitHub Pages上.md":__vite_glob_0_149,"../posts/執行php專案.md":__vite_glob_0_150,"../posts/實作：alert彈跳視窗.md":__vite_glob_0_151,"../posts/實作：新增或編輯資料.md":__vite_glob_0_152,"../posts/實作：點擊商品加入購物車.md":__vite_glob_0_153,"../posts/將A物件融入到B背景裡.md":__vite_glob_0_154,"../posts/將Hugo上傳到GitHub.md":__vite_glob_0_155,"../posts/將Hugo添加Disqus評論功能.md":__vite_glob_0_156,"../posts/將資料暫存在瀏覽器的localStorage裡.md":__vite_glob_0_157,"../posts/將透明玻璃去背.md":__vite_glob_0_158,"../posts/嵌入Google地圖.md":__vite_glob_0_159,"../posts/嵌入Youtube影片.md":__vite_glob_0_160,"../posts/嵌入字體方法.md":__vite_glob_0_161,"../posts/建立Hugo部落格.md":__vite_glob_0_162,"../posts/從舊GA4升級為新GA4.md":__vite_glob_0_163,"../posts/把色版調整回來.md":__vite_glob_0_164,"../posts/搞清楚Route與Router分別在做什麼.md":__vite_glob_0_165,"../posts/攝影必學三要素：光圈、快門、ISO.md":__vite_glob_0_166,"../posts/最終Gulp完整final版.md":__vite_glob_0_167,"../posts/混合圖層的應用.md":__vite_glob_0_168,"../posts/瀏覽器搜尋與快取技巧.md":__vite_glob_0_169,"../posts/物件傳參考特性.md":__vite_glob_0_170,"../posts/用computed進行搜尋過濾.md":__vite_glob_0_171,"../posts/用computed進行計算處理.md":__vite_glob_0_172,"../posts/用watch監聽data資料.md":__vite_glob_0_173,"../posts/用傳統for迴圈列印資料.md":__vite_glob_0_174,"../posts/用原生Javascript抓取DOM元素方法.md":__vite_glob_0_175,"../posts/用原生Javascript改變DOM樣式和內容.md":__vite_glob_0_176,"../posts/發送AJAX請求.md":__vite_glob_0_177,"../posts/給設計師的印刷懶人包.md":__vite_glob_0_178,"../posts/網站架設基本概念.md":__vite_glob_0_179,"../posts/網頁排版技巧：footer置底方法.md":__vite_glob_0_180,"../posts/網頁相關大小事.md":__vite_glob_0_181,"../posts/製作Vue3音樂播放按鈕.md":__vite_glob_0_182,"../posts/解決Mac無法存取隨身碟.md":__vite_glob_0_183,"../posts/設定Router轉址到指定頁面.md":__vite_glob_0_184,"../posts/認識Chrome開發者工具.md":__vite_glob_0_185,"../posts/認識GitHub版本控制.md":__vite_glob_0_186,"../posts/讓Google搜尋引擎找到自己的網站.md":__vite_glob_0_187,"../posts/進入Bluehost的主機.md":__vite_glob_0_188,"../posts/運行ES模組.md":__vite_glob_0_189,"../posts/開始使用Vue3.md":__vite_glob_0_190,"../posts/關注點分離實作.md":__vite_glob_0_191,"../posts/陣列：reduce加總.md":__vite_glob_0_192,"../posts/靈活運用Mac快捷鍵.md":__vite_glob_0_193,"../posts/驗證表單.md":__vite_glob_0_194}),P=Object.keys(E).map(q=>{const J=E[q].default,{data:Y,content:X}=matter(J),en=Y.date instanceof Date?Y.date.toISOString().split("T")[0]:Y.date,pn=X.replace(/```[\s\S]*?```/g,"").replace(/<[^>]*>/g,"").replace(/[#*`-]/g,"").replace(/\n/g," ").trim().slice(0,150)+"...";return{id:q.split("/").pop().replace(".md",""),title:Y.title,date:en,content:pn,tags:Y.tags}}),C={};P.forEach(q=>{q.tags.forEach(J=>{C[J]===void 0?C[J]=1:C[J]=C[J]+1})});const M=Object.entries(C).map(([q,J])=>({name:q,count:J})).sort((q,J)=>q.name.localeCompare(J.name)),B=new Map(M.map(q=>[q.name,{...q,posts:[]}]));P.forEach(q=>{q.tags.forEach(J=>{const Y=B.get(J);Y&&(Y.posts.push(q.id),Y.posts.sort((X,en)=>new Date(en.date)-new Date(X.date)))})}),a.value=[...B.values()]}),(E,P)=>{const C=resolveComponent("Router-link");return openBlock(),createElementBlock("div",_hoisted_1$2,[P[1]||(P[1]=createBaseVNode("div",{class:"w-1 h-4 rounded bg-emerald-700 shrink-0 m-1 mr-2"},null,-1)),createBaseVNode("div",_hoisted_2$1,[P[0]||(P[0]=createBaseVNode("div",{class:"text-neutral-900 font-medium mb-5"},"Categories",-1)),createBaseVNode("nav",null,[createBaseVNode("ul",_hoisted_3$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.value,M=>(openBlock(),createElementBlock("li",{key:M.name,class:"mb-1"},[createVNode(unref(N$1),{as:"div"},{default:withCtx(()=>[createVNode(unref(Q$1),{class:"group flex justify-between w-full text-neutral-800 hover:text-emerald-700 py-1",onClick:B=>x(M.name)},{default:withCtx(()=>[createBaseVNode("span",_hoisted_4$1,toDisplayString(M.name),1),createBaseVNode("span",_hoisted_5$1,toDisplayString(M.count),1)]),_:2},1032,["onClick"]),createVNode(Transition,{"enter-active-class":"transition-[grid-template-rows] duration-300 ease-out","enter-from-class":"grid-rows-[0fr]","enter-to-class":"grid-rows-[1fr]","leave-active-class":"transition-[grid-template-rows] duration-200 ease-in","leave-from-class":"grid-rows-[1fr]","leave-to-class":"grid-rows-[0fr]"},{default:withCtx(()=>[w.value===M.name?(openBlock(),createElementBlock("div",_hoisted_6,[createBaseVNode("div",_hoisted_7,[createVNode(unref(V),{static:"",class:"text-sm text-neutral-500"},{default:withCtx(()=>[createBaseVNode("ul",_hoisted_8,[(openBlock(!0),createElementBlock(Fragment,null,renderList(M.posts,B=>(openBlock(),createElementBlock("li",{key:B,class:"border-b border-b-neutral-300"},[createVNode(C,{to:{name:"post",params:{id:B}},class:normalizeClass(["block py-2",_.value===B?"text-emerald-700":"hover:text-emerald-700"])},{default:withCtx(()=>[createTextVNode(toDisplayString(B),1)]),_:2},1032,["to","class"])]))),128))])]),_:2},1024)])])):createCommentVNode("",!0)]),_:2},1024)]),_:2},1024)]))),128))])])])])}}},_imports_5="/images/banner1.jpg",_imports_6="/images/banner2.jpg",_imports_7="/images/banner4.jpg";function isObject$2(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function extend$2(e={},a={}){const f=["__proto__","constructor","prototype"];Object.keys(a).filter(_=>f.indexOf(_)<0).forEach(_=>{typeof e[_]>"u"?e[_]=a[_]:isObject$2(a[_])&&isObject$2(e[_])&&Object.keys(a[_]).length>0&&extend$2(e[_],a[_])})}const ssrDocument={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function getDocument(){const e=typeof document<"u"?document:{};return extend$2(e,ssrDocument),e}const ssrWindow={document:ssrDocument,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function e(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function getWindow(){const e=typeof window<"u"?window:{};return extend$2(e,ssrWindow),e}function classesToTokens(e=""){return e.trim().split(" ").filter(a=>!!a.trim())}function deleteProps(e){const a=e;Object.keys(a).forEach(f=>{try{a[f]=null}catch{}try{delete a[f]}catch{}})}function nextTick(e,a=0){return setTimeout(e,a)}function now(){return Date.now()}function getComputedStyle$1(e){const a=getWindow();let f;return a.getComputedStyle&&(f=a.getComputedStyle(e,null)),!f&&e.currentStyle&&(f=e.currentStyle),f||(f=e.style),f}function getTranslate(e,a="x"){const f=getWindow();let _,w,x;const E=getComputedStyle$1(e);return f.WebKitCSSMatrix?(w=E.transform||E.webkitTransform,w.split(",").length>6&&(w=w.split(", ").map(P=>P.replace(",",".")).join(", ")),x=new f.WebKitCSSMatrix(w==="none"?"":w)):(x=E.MozTransform||E.OTransform||E.MsTransform||E.msTransform||E.transform||E.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),_=x.toString().split(",")),a==="x"&&(f.WebKitCSSMatrix?w=x.m41:_.length===16?w=parseFloat(_[12]):w=parseFloat(_[4])),a==="y"&&(f.WebKitCSSMatrix?w=x.m42:_.length===16?w=parseFloat(_[13]):w=parseFloat(_[5])),w||0}function isObject$1(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function isNode(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function extend$1(...e){const a=Object(e[0]);for(let f=1;f<e.length;f+=1){const _=e[f];if(_!=null&&!isNode(_)){const w=Object.keys(Object(_)).filter(x=>x!=="__proto__"&&x!=="constructor"&&x!=="prototype");for(let x=0,E=w.length;x<E;x+=1){const P=w[x],C=Object.getOwnPropertyDescriptor(_,P);C!==void 0&&C.enumerable&&(isObject$1(a[P])&&isObject$1(_[P])?_[P].__swiper__?a[P]=_[P]:extend$1(a[P],_[P]):!isObject$1(a[P])&&isObject$1(_[P])?(a[P]={},_[P].__swiper__?a[P]=_[P]:extend$1(a[P],_[P])):a[P]=_[P])}}}return a}function setCSSProperty(e,a,f){e.style.setProperty(a,f)}function animateCSSModeScroll({swiper:e,targetPosition:a,side:f}){const _=getWindow(),w=-e.translate;let x=null,E;const P=e.params.speed;e.wrapperEl.style.scrollSnapType="none",_.cancelAnimationFrame(e.cssModeFrameID);const C=a>w?"next":"prev",M=(q,J)=>C==="next"&&q>=J||C==="prev"&&q<=J,B=()=>{E=new Date().getTime(),x===null&&(x=E);const q=Math.max(Math.min((E-x)/P,1),0),J=.5-Math.cos(q*Math.PI)/2;let Y=w+J*(a-w);if(M(Y,a)&&(Y=a),e.wrapperEl.scrollTo({[f]:Y}),M(Y,a)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[f]:Y})}),_.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=_.requestAnimationFrame(B)};B()}function getSlideTransformEl(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function elementChildren(e,a=""){const f=getWindow(),_=[...e.children];return f.HTMLSlotElement&&e instanceof HTMLSlotElement&&_.push(...e.assignedElements()),a?_.filter(w=>w.matches(a)):_}function elementIsChildOfSlot(e,a){const f=[a];for(;f.length>0;){const _=f.shift();if(e===_)return!0;f.push(..._.children,..._.shadowRoot?_.shadowRoot.children:[],..._.assignedElements?_.assignedElements():[])}}function elementIsChildOf(e,a){const f=getWindow();let _=a.contains(e);return!_&&f.HTMLSlotElement&&a instanceof HTMLSlotElement&&(_=[...a.assignedElements()].includes(e),_||(_=elementIsChildOfSlot(e,a))),_}function showWarning(e){try{console.warn(e);return}catch{}}function createElement(e,a=[]){const f=document.createElement(e);return f.classList.add(...Array.isArray(a)?a:classesToTokens(a)),f}function elementPrevAll(e,a){const f=[];for(;e.previousElementSibling;){const _=e.previousElementSibling;a?_.matches(a)&&f.push(_):f.push(_),e=_}return f}function elementNextAll(e,a){const f=[];for(;e.nextElementSibling;){const _=e.nextElementSibling;a?_.matches(a)&&f.push(_):f.push(_),e=_}return f}function elementStyle(e,a){return getWindow().getComputedStyle(e,null).getPropertyValue(a)}function elementIndex(e){let a=e,f;if(a){for(f=0;(a=a.previousSibling)!==null;)a.nodeType===1&&(f+=1);return f}}function elementParents(e,a){const f=[];let _=e.parentElement;for(;_;)a?_.matches(a)&&f.push(_):f.push(_),_=_.parentElement;return f}function elementTransitionEnd(e,a){function f(_){_.target===e&&(a.call(e,_),e.removeEventListener("transitionend",f))}a&&e.addEventListener("transitionend",f)}function elementOuterSize(e,a,f){const _=getWindow();return e[a==="width"?"offsetWidth":"offsetHeight"]+parseFloat(_.getComputedStyle(e,null).getPropertyValue(a==="width"?"margin-right":"margin-top"))+parseFloat(_.getComputedStyle(e,null).getPropertyValue(a==="width"?"margin-left":"margin-bottom"))}function makeElementsArray(e){return(Array.isArray(e)?e:[e]).filter(a=>!!a)}function getRotateFix(e){return a=>Math.abs(a)>0&&e.browser&&e.browser.need3dFix&&Math.abs(a)%90===0?a+.001:a}function setInnerHTML(e,a=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:f=>f}).createHTML(a):e.innerHTML=a}let support;function calcSupport(){const e=getWindow(),a=getDocument();return{smoothScroll:a.documentElement&&a.documentElement.style&&"scrollBehavior"in a.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&a instanceof e.DocumentTouch)}}function getSupport(){return support||(support=calcSupport()),support}let deviceCached;function calcDevice({userAgent:e}={}){const a=getSupport(),f=getWindow(),_=f.navigator.platform,w=e||f.navigator.userAgent,x={ios:!1,android:!1},E=f.screen.width,P=f.screen.height,C=w.match(/(Android);?[\s\/]+([\d.]+)?/);let M=w.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const B=w.match(/(iPod)(.*OS\s([\d_]+))?/),q=!M&&w.match(/(iPhone\sOS|iOS)\s([\d_]+)/),J=_==="Win32";let Y=_==="MacIntel";const X=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!M&&Y&&a.touch&&X.indexOf(`${E}x${P}`)>=0&&(M=w.match(/(Version)\/([\d.]+)/),M||(M=[0,1,"13_0_0"]),Y=!1),C&&!J&&(x.os="android",x.android=!0),(M||q||B)&&(x.os="ios",x.ios=!0),x}function getDevice(e={}){return deviceCached||(deviceCached=calcDevice(e)),deviceCached}let browser;function calcBrowser(){const e=getWindow(),a=getDevice();let f=!1;function _(){const P=e.navigator.userAgent.toLowerCase();return P.indexOf("safari")>=0&&P.indexOf("chrome")<0&&P.indexOf("android")<0}if(_()){const P=String(e.navigator.userAgent);if(P.includes("Version/")){const[C,M]=P.split("Version/")[1].split(" ")[0].split(".").map(B=>Number(B));f=C<16||C===16&&M<2}}const w=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),x=_(),E=x||w&&a.ios;return{isSafari:f||x,needPerspectiveFix:f,need3dFix:E,isWebView:w}}function getBrowser(){return browser||(browser=calcBrowser()),browser}function Resize({swiper:e,on:a,emit:f}){const _=getWindow();let w=null,x=null;const E=()=>{!e||e.destroyed||!e.initialized||(f("beforeResize"),f("resize"))},P=()=>{!e||e.destroyed||!e.initialized||(w=new ResizeObserver(B=>{x=_.requestAnimationFrame(()=>{const{width:q,height:J}=e;let Y=q,X=J;B.forEach(({contentBoxSize:en,contentRect:dn,target:pn})=>{pn&&pn!==e.el||(Y=dn?dn.width:(en[0]||en).inlineSize,X=dn?dn.height:(en[0]||en).blockSize)}),(Y!==q||X!==J)&&E()})}),w.observe(e.el))},C=()=>{x&&_.cancelAnimationFrame(x),w&&w.unobserve&&e.el&&(w.unobserve(e.el),w=null)},M=()=>{!e||e.destroyed||!e.initialized||f("orientationchange")};a("init",()=>{if(e.params.resizeObserver&&typeof _.ResizeObserver<"u"){P();return}_.addEventListener("resize",E),_.addEventListener("orientationchange",M)}),a("destroy",()=>{C(),_.removeEventListener("resize",E),_.removeEventListener("orientationchange",M)})}function Observer({swiper:e,extendParams:a,on:f,emit:_}){const w=[],x=getWindow(),E=(M,B={})=>{const q=x.MutationObserver||x.WebkitMutationObserver,J=new q(Y=>{if(e.__preventObserver__)return;if(Y.length===1){_("observerUpdate",Y[0]);return}const X=function(){_("observerUpdate",Y[0])};x.requestAnimationFrame?x.requestAnimationFrame(X):x.setTimeout(X,0)});J.observe(M,{attributes:typeof B.attributes>"u"?!0:B.attributes,childList:e.isElement||(typeof B.childList>"u"?!0:B).childList,characterData:typeof B.characterData>"u"?!0:B.characterData}),w.push(J)},P=()=>{if(e.params.observer){if(e.params.observeParents){const M=elementParents(e.hostEl);for(let B=0;B<M.length;B+=1)E(M[B])}E(e.hostEl,{childList:e.params.observeSlideChildren}),E(e.wrapperEl,{attributes:!1})}},C=()=>{w.forEach(M=>{M.disconnect()}),w.splice(0,w.length)};a({observer:!1,observeParents:!1,observeSlideChildren:!1}),f("init",P),f("destroy",C)}var eventsEmitter={on(e,a,f){const _=this;if(!_.eventsListeners||_.destroyed||typeof a!="function")return _;const w=f?"unshift":"push";return e.split(" ").forEach(x=>{_.eventsListeners[x]||(_.eventsListeners[x]=[]),_.eventsListeners[x][w](a)}),_},once(e,a,f){const _=this;if(!_.eventsListeners||_.destroyed||typeof a!="function")return _;function w(...x){_.off(e,w),w.__emitterProxy&&delete w.__emitterProxy,a.apply(_,x)}return w.__emitterProxy=a,_.on(e,w,f)},onAny(e,a){const f=this;if(!f.eventsListeners||f.destroyed||typeof e!="function")return f;const _=a?"unshift":"push";return f.eventsAnyListeners.indexOf(e)<0&&f.eventsAnyListeners[_](e),f},offAny(e){const a=this;if(!a.eventsListeners||a.destroyed||!a.eventsAnyListeners)return a;const f=a.eventsAnyListeners.indexOf(e);return f>=0&&a.eventsAnyListeners.splice(f,1),a},off(e,a){const f=this;return!f.eventsListeners||f.destroyed||!f.eventsListeners||e.split(" ").forEach(_=>{typeof a>"u"?f.eventsListeners[_]=[]:f.eventsListeners[_]&&f.eventsListeners[_].forEach((w,x)=>{(w===a||w.__emitterProxy&&w.__emitterProxy===a)&&f.eventsListeners[_].splice(x,1)})}),f},emit(...e){const a=this;if(!a.eventsListeners||a.destroyed||!a.eventsListeners)return a;let f,_,w;return typeof e[0]=="string"||Array.isArray(e[0])?(f=e[0],_=e.slice(1,e.length),w=a):(f=e[0].events,_=e[0].data,w=e[0].context||a),_.unshift(w),(Array.isArray(f)?f:f.split(" ")).forEach(E=>{a.eventsAnyListeners&&a.eventsAnyListeners.length&&a.eventsAnyListeners.forEach(P=>{P.apply(w,[E,..._])}),a.eventsListeners&&a.eventsListeners[E]&&a.eventsListeners[E].forEach(P=>{P.apply(w,_)})}),a}};function updateSize(){const e=this;let a,f;const _=e.el;typeof e.params.width<"u"&&e.params.width!==null?a=e.params.width:a=_.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?f=e.params.height:f=_.clientHeight,!(a===0&&e.isHorizontal()||f===0&&e.isVertical())&&(a=a-parseInt(elementStyle(_,"padding-left")||0,10)-parseInt(elementStyle(_,"padding-right")||0,10),f=f-parseInt(elementStyle(_,"padding-top")||0,10)-parseInt(elementStyle(_,"padding-bottom")||0,10),Number.isNaN(a)&&(a=0),Number.isNaN(f)&&(f=0),Object.assign(e,{width:a,height:f,size:e.isHorizontal()?a:f}))}function updateSlides(){const e=this;function a(Tn,gn){return parseFloat(Tn.getPropertyValue(e.getDirectionLabel(gn))||0)}const f=e.params,{wrapperEl:_,slidesEl:w,rtlTranslate:x,wrongRTL:E}=e,P=e.virtual&&f.virtual.enabled,C=P?e.virtual.slides.length:e.slides.length,M=elementChildren(w,`.${e.params.slideClass}, swiper-slide`),B=P?e.virtual.slides.length:M.length;let q=[];const J=[],Y=[];let X=f.slidesOffsetBefore;typeof X=="function"&&(X=f.slidesOffsetBefore.call(e));let en=f.slidesOffsetAfter;typeof en=="function"&&(en=f.slidesOffsetAfter.call(e));const dn=e.snapGrid.length,pn=e.slidesGrid.length,an=e.size-X-en;let un=f.spaceBetween,mn=-X,fn=0,Pn=0;if(typeof an>"u")return;typeof un=="string"&&un.indexOf("%")>=0?un=parseFloat(un.replace("%",""))/100*an:typeof un=="string"&&(un=parseFloat(un)),e.virtualSize=-un-X-en,M.forEach(Tn=>{x?Tn.style.marginLeft="":Tn.style.marginRight="",Tn.style.marginBottom="",Tn.style.marginTop=""}),f.centeredSlides&&f.cssMode&&(setCSSProperty(_,"--swiper-centered-offset-before",""),setCSSProperty(_,"--swiper-centered-offset-after","")),f.cssMode&&(setCSSProperty(_,"--swiper-slides-offset-before",`${X}px`),setCSSProperty(_,"--swiper-slides-offset-after",`${en}px`));const An=f.grid&&f.grid.rows>1&&e.grid;An?e.grid.initSlides(M):e.grid&&e.grid.unsetSlides();let sn;const xn=f.slidesPerView==="auto"&&f.breakpoints&&Object.keys(f.breakpoints).filter(Tn=>typeof f.breakpoints[Tn].slidesPerView<"u").length>0;for(let Tn=0;Tn<B;Tn+=1){sn=0;const gn=M[Tn];if(!(gn&&(An&&e.grid.updateSlide(Tn,gn,M),elementStyle(gn,"display")==="none"))){if(P&&f.slidesPerView==="auto")f.virtual.slidesPerViewAutoSlideSize&&(sn=f.virtual.slidesPerViewAutoSlideSize),sn&&gn&&(f.roundLengths&&(sn=Math.floor(sn)),gn.style[e.getDirectionLabel("width")]=`${sn}px`);else if(f.slidesPerView==="auto"){xn&&(gn.style[e.getDirectionLabel("width")]="");const cn=getComputedStyle(gn),On=gn.style.transform,En=gn.style.webkitTransform;if(On&&(gn.style.transform="none"),En&&(gn.style.webkitTransform="none"),f.roundLengths)sn=e.isHorizontal()?elementOuterSize(gn,"width"):elementOuterSize(gn,"height");else{const Ln=a(cn,"width"),qn=a(cn,"padding-left"),Rn=a(cn,"padding-right"),_n=a(cn,"margin-left"),Gn=a(cn,"margin-right"),Xn=cn.getPropertyValue("box-sizing");if(Xn&&Xn==="border-box")sn=Ln+_n+Gn;else{const{clientWidth:Un,offsetWidth:Yn}=gn;sn=Ln+qn+Rn+_n+Gn+(Yn-Un)}}On&&(gn.style.transform=On),En&&(gn.style.webkitTransform=En),f.roundLengths&&(sn=Math.floor(sn))}else sn=(an-(f.slidesPerView-1)*un)/f.slidesPerView,f.roundLengths&&(sn=Math.floor(sn)),gn&&(gn.style[e.getDirectionLabel("width")]=`${sn}px`);gn&&(gn.swiperSlideSize=sn),Y.push(sn),f.centeredSlides?(mn=mn+sn/2+fn/2+un,fn===0&&Tn!==0&&(mn=mn-an/2-un),Tn===0&&(mn=mn-an/2-un),Math.abs(mn)<1/1e3&&(mn=0),f.roundLengths&&(mn=Math.floor(mn)),Pn%f.slidesPerGroup===0&&q.push(mn),J.push(mn)):(f.roundLengths&&(mn=Math.floor(mn)),(Pn-Math.min(e.params.slidesPerGroupSkip,Pn))%e.params.slidesPerGroup===0&&q.push(mn),J.push(mn),mn=mn+sn+un),e.virtualSize+=sn+un,fn=sn,Pn+=1}}if(e.virtualSize=Math.max(e.virtualSize,an)+en,x&&E&&(f.effect==="slide"||f.effect==="coverflow")&&(_.style.width=`${e.virtualSize+un}px`),f.setWrapperSize&&(_.style[e.getDirectionLabel("width")]=`${e.virtualSize+un}px`),An&&e.grid.updateWrapperSize(sn,q),!f.centeredSlides){const Tn=f.slidesPerView!=="auto"&&f.slidesPerView%1!==0,gn=f.snapToSlideEdge&&!f.loop&&(f.slidesPerView==="auto"||Tn);let cn=q.length;if(gn){let En;if(f.slidesPerView==="auto"){En=1;let Ln=0;for(let qn=Y.length-1;qn>=0&&(Ln+=Y[qn]+(qn<Y.length-1?un:0),Ln<=an);qn-=1)En=Y.length-qn}else En=Math.floor(f.slidesPerView);cn=Math.max(B-En,0)}const On=[];for(let En=0;En<q.length;En+=1){let Ln=q[En];f.roundLengths&&(Ln=Math.floor(Ln)),gn?En<=cn&&On.push(Ln):q[En]<=e.virtualSize-an&&On.push(Ln)}q=On,Math.floor(e.virtualSize-an)-Math.floor(q[q.length-1])>1&&(gn||q.push(e.virtualSize-an))}if(P&&f.loop){const Tn=Y[0]+un;if(f.slidesPerGroup>1){const gn=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/f.slidesPerGroup),cn=Tn*f.slidesPerGroup;for(let On=0;On<gn;On+=1)q.push(q[q.length-1]+cn)}for(let gn=0;gn<e.virtual.slidesBefore+e.virtual.slidesAfter;gn+=1)f.slidesPerGroup===1&&q.push(q[q.length-1]+Tn),J.push(J[J.length-1]+Tn),e.virtualSize+=Tn}if(q.length===0&&(q=[0]),un!==0){const Tn=e.isHorizontal()&&x?"marginLeft":e.getDirectionLabel("marginRight");M.filter((gn,cn)=>!f.cssMode||f.loop?!0:cn!==M.length-1).forEach(gn=>{gn.style[Tn]=`${un}px`})}if(f.centeredSlides&&f.centeredSlidesBounds){let Tn=0;Y.forEach(cn=>{Tn+=cn+(un||0)}),Tn-=un;const gn=Tn>an?Tn-an:0;q=q.map(cn=>cn<=0?-X:cn>gn?gn+en:cn)}if(f.centerInsufficientSlides){let Tn=0;if(Y.forEach(gn=>{Tn+=gn+(un||0)}),Tn-=un,Tn<an){const gn=(an-Tn)/2;q.forEach((cn,On)=>{q[On]=cn-gn}),J.forEach((cn,On)=>{J[On]=cn+gn})}}if(Object.assign(e,{slides:M,snapGrid:q,slidesGrid:J,slidesSizesGrid:Y}),f.centeredSlides&&f.cssMode&&!f.centeredSlidesBounds){setCSSProperty(_,"--swiper-centered-offset-before",`${-q[0]}px`),setCSSProperty(_,"--swiper-centered-offset-after",`${e.size/2-Y[Y.length-1]/2}px`);const Tn=-e.snapGrid[0],gn=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(cn=>cn+Tn),e.slidesGrid=e.slidesGrid.map(cn=>cn+gn)}if(B!==C&&e.emit("slidesLengthChange"),q.length!==dn&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),J.length!==pn&&e.emit("slidesGridLengthChange"),f.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!P&&!f.cssMode&&(f.effect==="slide"||f.effect==="fade")){const Tn=`${f.containerModifierClass}backface-hidden`,gn=e.el.classList.contains(Tn);B<=f.maxBackfaceHiddenSlides?gn||e.el.classList.add(Tn):gn&&e.el.classList.remove(Tn)}}function updateAutoHeight(e){const a=this,f=[],_=a.virtual&&a.params.virtual.enabled;let w=0,x;typeof e=="number"?a.setTransition(e):e===!0&&a.setTransition(a.params.speed);const E=P=>_?a.slides[a.getSlideIndexByData(P)]:a.slides[P];if(a.params.slidesPerView!=="auto"&&a.params.slidesPerView>1)if(a.params.centeredSlides)(a.visibleSlides||[]).forEach(P=>{f.push(P)});else for(x=0;x<Math.ceil(a.params.slidesPerView);x+=1){const P=a.activeIndex+x;if(P>a.slides.length&&!_)break;f.push(E(P))}else f.push(E(a.activeIndex));for(x=0;x<f.length;x+=1)if(typeof f[x]<"u"){const P=f[x].offsetHeight;w=P>w?P:w}(w||w===0)&&(a.wrapperEl.style.height=`${w}px`)}function updateSlidesOffset(){const e=this,a=e.slides,f=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let _=0;_<a.length;_+=1)a[_].swiperSlideOffset=(e.isHorizontal()?a[_].offsetLeft:a[_].offsetTop)-f-e.cssOverflowAdjustment()}const toggleSlideClasses$1=(e,a,f)=>{a&&!e.classList.contains(f)?e.classList.add(f):!a&&e.classList.contains(f)&&e.classList.remove(f)};function updateSlidesProgress(e=this&&this.translate||0){const a=this,f=a.params,{slides:_,rtlTranslate:w,snapGrid:x}=a;if(_.length===0)return;typeof _[0].swiperSlideOffset>"u"&&a.updateSlidesOffset();let E=-e;w&&(E=e),a.visibleSlidesIndexes=[],a.visibleSlides=[];let P=f.spaceBetween;typeof P=="string"&&P.indexOf("%")>=0?P=parseFloat(P.replace("%",""))/100*a.size:typeof P=="string"&&(P=parseFloat(P));for(let C=0;C<_.length;C+=1){const M=_[C];let B=M.swiperSlideOffset;f.cssMode&&f.centeredSlides&&(B-=_[0].swiperSlideOffset);const q=(E+(f.centeredSlides?a.minTranslate():0)-B)/(M.swiperSlideSize+P),J=(E-x[0]+(f.centeredSlides?a.minTranslate():0)-B)/(M.swiperSlideSize+P),Y=-(E-B),X=Y+a.slidesSizesGrid[C],en=Y>=0&&Y<=a.size-a.slidesSizesGrid[C],dn=Y>=0&&Y<a.size-1||X>1&&X<=a.size||Y<=0&&X>=a.size;dn&&(a.visibleSlides.push(M),a.visibleSlidesIndexes.push(C)),toggleSlideClasses$1(M,dn,f.slideVisibleClass),toggleSlideClasses$1(M,en,f.slideFullyVisibleClass),M.progress=w?-q:q,M.originalProgress=w?-J:J}}function updateProgress(e){const a=this;if(typeof e>"u"){const B=a.rtlTranslate?-1:1;e=a&&a.translate&&a.translate*B||0}const f=a.params,_=a.maxTranslate()-a.minTranslate();let{progress:w,isBeginning:x,isEnd:E,progressLoop:P}=a;const C=x,M=E;if(_===0)w=0,x=!0,E=!0;else{w=(e-a.minTranslate())/_;const B=Math.abs(e-a.minTranslate())<1,q=Math.abs(e-a.maxTranslate())<1;x=B||w<=0,E=q||w>=1,B&&(w=0),q&&(w=1)}if(f.loop){const B=a.getSlideIndexByData(0),q=a.getSlideIndexByData(a.slides.length-1),J=a.slidesGrid[B],Y=a.slidesGrid[q],X=a.slidesGrid[a.slidesGrid.length-1],en=Math.abs(e);en>=J?P=(en-J)/X:P=(en+X-Y)/X,P>1&&(P-=1)}Object.assign(a,{progress:w,progressLoop:P,isBeginning:x,isEnd:E}),(f.watchSlidesProgress||f.centeredSlides&&f.autoHeight)&&a.updateSlidesProgress(e),x&&!C&&a.emit("reachBeginning toEdge"),E&&!M&&a.emit("reachEnd toEdge"),(C&&!x||M&&!E)&&a.emit("fromEdge"),a.emit("progress",w)}const toggleSlideClasses=(e,a,f)=>{a&&!e.classList.contains(f)?e.classList.add(f):!a&&e.classList.contains(f)&&e.classList.remove(f)};function updateSlidesClasses(){const e=this,{slides:a,params:f,slidesEl:_,activeIndex:w}=e,x=e.virtual&&f.virtual.enabled,E=e.grid&&f.grid&&f.grid.rows>1,P=q=>elementChildren(_,`.${f.slideClass}${q}, swiper-slide${q}`)[0];let C,M,B;if(x)if(f.loop){let q=w-e.virtual.slidesBefore;q<0&&(q=e.virtual.slides.length+q),q>=e.virtual.slides.length&&(q-=e.virtual.slides.length),C=P(`[data-swiper-slide-index="${q}"]`)}else C=P(`[data-swiper-slide-index="${w}"]`);else E?(C=a.find(q=>q.column===w),B=a.find(q=>q.column===w+1),M=a.find(q=>q.column===w-1)):C=a[w];C&&(E||(B=elementNextAll(C,`.${f.slideClass}, swiper-slide`)[0],f.loop&&!B&&(B=a[0]),M=elementPrevAll(C,`.${f.slideClass}, swiper-slide`)[0],f.loop&&!M===0&&(M=a[a.length-1]))),a.forEach(q=>{toggleSlideClasses(q,q===C,f.slideActiveClass),toggleSlideClasses(q,q===B,f.slideNextClass),toggleSlideClasses(q,q===M,f.slidePrevClass)}),e.emitSlidesClasses()}const processLazyPreloader=(e,a)=>{if(!e||e.destroyed||!e.params)return;const f=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,_=a.closest(f());if(_){let w=_.querySelector(`.${e.params.lazyPreloaderClass}`);!w&&e.isElement&&(_.shadowRoot?w=_.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{_.shadowRoot&&(w=_.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),w&&!w.lazyPreloaderManaged&&w.remove())})),w&&!w.lazyPreloaderManaged&&w.remove()}},unlazy=(e,a)=>{if(!e.slides[a])return;const f=e.slides[a].querySelector('[loading="lazy"]');f&&f.removeAttribute("loading")},preload=e=>{if(!e||e.destroyed||!e.params)return;let a=e.params.lazyPreloadPrevNext;const f=e.slides.length;if(!f||!a||a<0)return;a=Math.min(a,f);const _=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),w=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const E=w,P=[E-a];P.push(...Array.from({length:a}).map((C,M)=>E+_+M)),e.slides.forEach((C,M)=>{P.includes(C.column)&&unlazy(e,M)});return}const x=w+_-1;if(e.params.rewind||e.params.loop)for(let E=w-a;E<=x+a;E+=1){const P=(E%f+f)%f;(P<w||P>x)&&unlazy(e,P)}else for(let E=Math.max(w-a,0);E<=Math.min(x+a,f-1);E+=1)E!==w&&(E>x||E<w)&&unlazy(e,E)};function getActiveIndexByTranslate(e){const{slidesGrid:a,params:f}=e,_=e.rtlTranslate?e.translate:-e.translate;let w;for(let x=0;x<a.length;x+=1)typeof a[x+1]<"u"?_>=a[x]&&_<a[x+1]-(a[x+1]-a[x])/2?w=x:_>=a[x]&&_<a[x+1]&&(w=x+1):_>=a[x]&&(w=x);return f.normalizeSlideIndex&&(w<0||typeof w>"u")&&(w=0),w}function updateActiveIndex(e){const a=this,f=a.rtlTranslate?a.translate:-a.translate,{snapGrid:_,params:w,activeIndex:x,realIndex:E,snapIndex:P}=a;let C=e,M;const B=Y=>{let X=Y-a.virtual.slidesBefore;return X<0&&(X=a.virtual.slides.length+X),X>=a.virtual.slides.length&&(X-=a.virtual.slides.length),X};if(typeof C>"u"&&(C=getActiveIndexByTranslate(a)),_.indexOf(f)>=0)M=_.indexOf(f);else{const Y=Math.min(w.slidesPerGroupSkip,C);M=Y+Math.floor((C-Y)/w.slidesPerGroup)}if(M>=_.length&&(M=_.length-1),C===x&&!a.params.loop){M!==P&&(a.snapIndex=M,a.emit("snapIndexChange"));return}if(C===x&&a.params.loop&&a.virtual&&a.params.virtual.enabled){a.realIndex=B(C);return}const q=a.grid&&w.grid&&w.grid.rows>1;let J;if(a.virtual&&w.virtual.enabled)w.loop?J=B(C):J=C;else if(q){const Y=a.slides.find(en=>en.column===C);let X=parseInt(Y.getAttribute("data-swiper-slide-index"),10);Number.isNaN(X)&&(X=Math.max(a.slides.indexOf(Y),0)),J=Math.floor(X/w.grid.rows)}else if(a.slides[C]){const Y=a.slides[C].getAttribute("data-swiper-slide-index");Y?J=parseInt(Y,10):J=C}else J=C;Object.assign(a,{previousSnapIndex:P,snapIndex:M,previousRealIndex:E,realIndex:J,previousIndex:x,activeIndex:C}),a.initialized&&preload(a),a.emit("activeIndexChange"),a.emit("snapIndexChange"),(a.initialized||a.params.runCallbacksOnInit)&&(E!==J&&a.emit("realIndexChange"),a.emit("slideChange"))}function updateClickedSlide(e,a){const f=this,_=f.params;let w=e.closest(`.${_.slideClass}, swiper-slide`);!w&&f.isElement&&a&&a.length>1&&a.includes(e)&&[...a.slice(a.indexOf(e)+1,a.length)].forEach(P=>{!w&&P.matches&&P.matches(`.${_.slideClass}, swiper-slide`)&&(w=P)});let x=!1,E;if(w){for(let P=0;P<f.slides.length;P+=1)if(f.slides[P]===w){x=!0,E=P;break}}if(w&&x)f.clickedSlide=w,f.virtual&&f.params.virtual.enabled?f.clickedIndex=parseInt(w.getAttribute("data-swiper-slide-index"),10):f.clickedIndex=E;else{f.clickedSlide=void 0,f.clickedIndex=void 0;return}_.slideToClickedSlide&&f.clickedIndex!==void 0&&f.clickedIndex!==f.activeIndex&&f.slideToClickedSlide()}var update={updateSize,updateSlides,updateAutoHeight,updateSlidesOffset,updateSlidesProgress,updateProgress,updateSlidesClasses,updateActiveIndex,updateClickedSlide};function getSwiperTranslate(e=this.isHorizontal()?"x":"y"){const a=this,{params:f,rtlTranslate:_,translate:w,wrapperEl:x}=a;if(f.virtualTranslate)return _?-w:w;if(f.cssMode)return w;let E=getTranslate(x,e);return E+=a.cssOverflowAdjustment(),_&&(E=-E),E||0}function setTranslate(e,a){const f=this,{rtlTranslate:_,params:w,wrapperEl:x,progress:E}=f;let P=0,C=0;const M=0;f.isHorizontal()?P=_?-e:e:C=e,w.roundLengths&&(P=Math.floor(P),C=Math.floor(C)),f.previousTranslate=f.translate,f.translate=f.isHorizontal()?P:C,w.cssMode?x[f.isHorizontal()?"scrollLeft":"scrollTop"]=f.isHorizontal()?-P:-C:w.virtualTranslate||(f.isHorizontal()?P-=f.cssOverflowAdjustment():C-=f.cssOverflowAdjustment(),x.style.transform=`translate3d(${P}px, ${C}px, ${M}px)`);let B;const q=f.maxTranslate()-f.minTranslate();q===0?B=0:B=(e-f.minTranslate())/q,B!==E&&f.updateProgress(e),f.emit("setTranslate",f.translate,a)}function minTranslate(){return-this.snapGrid[0]}function maxTranslate(){return-this.snapGrid[this.snapGrid.length-1]}function translateTo(e=0,a=this.params.speed,f=!0,_=!0,w){const x=this,{params:E,wrapperEl:P}=x;if(x.animating&&E.preventInteractionOnTransition)return!1;const C=x.minTranslate(),M=x.maxTranslate();let B;if(_&&e>C?B=C:_&&e<M?B=M:B=e,x.updateProgress(B),E.cssMode){const q=x.isHorizontal();if(a===0)P[q?"scrollLeft":"scrollTop"]=-B;else{if(!x.support.smoothScroll)return animateCSSModeScroll({swiper:x,targetPosition:-B,side:q?"left":"top"}),!0;P.scrollTo({[q?"left":"top"]:-B,behavior:"smooth"})}return!0}return a===0?(x.setTransition(0),x.setTranslate(B),f&&(x.emit("beforeTransitionStart",a,w),x.emit("transitionEnd"))):(x.setTransition(a),x.setTranslate(B),f&&(x.emit("beforeTransitionStart",a,w),x.emit("transitionStart")),x.animating||(x.animating=!0,x.onTranslateToWrapperTransitionEnd||(x.onTranslateToWrapperTransitionEnd=function(J){!x||x.destroyed||J.target===this&&(x.wrapperEl.removeEventListener("transitionend",x.onTranslateToWrapperTransitionEnd),x.onTranslateToWrapperTransitionEnd=null,delete x.onTranslateToWrapperTransitionEnd,x.animating=!1,f&&x.emit("transitionEnd"))}),x.wrapperEl.addEventListener("transitionend",x.onTranslateToWrapperTransitionEnd))),!0}var translate={getTranslate:getSwiperTranslate,setTranslate,minTranslate,maxTranslate,translateTo};function setTransition(e,a){const f=this;f.params.cssMode||(f.wrapperEl.style.transitionDuration=`${e}ms`,f.wrapperEl.style.transitionDelay=e===0?"0ms":""),f.emit("setTransition",e,a)}function transitionEmit({swiper:e,runCallbacks:a,direction:f,step:_}){const{activeIndex:w,previousIndex:x}=e;let E=f;E||(w>x?E="next":w<x?E="prev":E="reset"),e.emit(`transition${_}`),a&&E==="reset"?e.emit(`slideResetTransition${_}`):a&&w!==x&&(e.emit(`slideChangeTransition${_}`),E==="next"?e.emit(`slideNextTransition${_}`):e.emit(`slidePrevTransition${_}`))}function transitionStart(e=!0,a){const f=this,{params:_}=f;_.cssMode||(_.autoHeight&&f.updateAutoHeight(),transitionEmit({swiper:f,runCallbacks:e,direction:a,step:"Start"}))}function transitionEnd(e=!0,a){const f=this,{params:_}=f;f.animating=!1,!_.cssMode&&(f.setTransition(0),transitionEmit({swiper:f,runCallbacks:e,direction:a,step:"End"}))}var transition={setTransition,transitionStart,transitionEnd};function slideTo(e=0,a,f=!0,_,w){typeof e=="string"&&(e=parseInt(e,10));const x=this;let E=e;E<0&&(E=0);const{params:P,snapGrid:C,slidesGrid:M,previousIndex:B,activeIndex:q,rtlTranslate:J,wrapperEl:Y,enabled:X}=x;if(!X&&!_&&!w||x.destroyed||x.animating&&P.preventInteractionOnTransition)return!1;typeof a>"u"&&(a=x.params.speed);const en=Math.min(x.params.slidesPerGroupSkip,E);let dn=en+Math.floor((E-en)/x.params.slidesPerGroup);dn>=C.length&&(dn=C.length-1);const pn=-C[dn];if(P.normalizeSlideIndex)for(let An=0;An<M.length;An+=1){const sn=-Math.floor(pn*100),xn=Math.floor(M[An]*100),Tn=Math.floor(M[An+1]*100);typeof M[An+1]<"u"?sn>=xn&&sn<Tn-(Tn-xn)/2?E=An:sn>=xn&&sn<Tn&&(E=An+1):sn>=xn&&(E=An)}if(x.initialized&&E!==q&&(!x.allowSlideNext&&(J?pn>x.translate&&pn>x.minTranslate():pn<x.translate&&pn<x.minTranslate())||!x.allowSlidePrev&&pn>x.translate&&pn>x.maxTranslate()&&(q||0)!==E))return!1;E!==(B||0)&&f&&x.emit("beforeSlideChangeStart"),x.updateProgress(pn);let an;E>q?an="next":E<q?an="prev":an="reset";const un=x.virtual&&x.params.virtual.enabled;if(!(un&&w)&&(J&&-pn===x.translate||!J&&pn===x.translate))return x.updateActiveIndex(E),P.autoHeight&&x.updateAutoHeight(),x.updateSlidesClasses(),P.effect!=="slide"&&x.setTranslate(pn),an!=="reset"&&(x.transitionStart(f,an),x.transitionEnd(f,an)),!1;if(P.cssMode){const An=x.isHorizontal(),sn=J?pn:-pn;if(a===0)un&&(x.wrapperEl.style.scrollSnapType="none",x._immediateVirtual=!0),un&&!x._cssModeVirtualInitialSet&&x.params.initialSlide>0?(x._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{Y[An?"scrollLeft":"scrollTop"]=sn})):Y[An?"scrollLeft":"scrollTop"]=sn,un&&requestAnimationFrame(()=>{x.wrapperEl.style.scrollSnapType="",x._immediateVirtual=!1});else{if(!x.support.smoothScroll)return animateCSSModeScroll({swiper:x,targetPosition:sn,side:An?"left":"top"}),!0;Y.scrollTo({[An?"left":"top"]:sn,behavior:"smooth"})}return!0}const Pn=getBrowser().isSafari;return un&&!w&&Pn&&x.isElement&&x.virtual.update(!1,!1,E),x.setTransition(a),x.setTranslate(pn),x.updateActiveIndex(E),x.updateSlidesClasses(),x.emit("beforeTransitionStart",a,_),x.transitionStart(f,an),a===0?x.transitionEnd(f,an):x.animating||(x.animating=!0,x.onSlideToWrapperTransitionEnd||(x.onSlideToWrapperTransitionEnd=function(sn){!x||x.destroyed||sn.target===this&&(x.wrapperEl.removeEventListener("transitionend",x.onSlideToWrapperTransitionEnd),x.onSlideToWrapperTransitionEnd=null,delete x.onSlideToWrapperTransitionEnd,x.transitionEnd(f,an))}),x.wrapperEl.addEventListener("transitionend",x.onSlideToWrapperTransitionEnd)),!0}function slideToLoop(e=0,a,f=!0,_){typeof e=="string"&&(e=parseInt(e,10));const w=this;if(w.destroyed)return;typeof a>"u"&&(a=w.params.speed);const x=w.grid&&w.params.grid&&w.params.grid.rows>1;let E=e;if(w.params.loop)if(w.virtual&&w.params.virtual.enabled)E=E+w.virtual.slidesBefore;else{let P;if(x){const en=E*w.params.grid.rows;P=w.slides.find(dn=>dn.getAttribute("data-swiper-slide-index")*1===en).column}else P=w.getSlideIndexByData(E);const C=x?Math.ceil(w.slides.length/w.params.grid.rows):w.slides.length,{centeredSlides:M,slidesOffsetBefore:B,slidesOffsetAfter:q}=w.params,J=M||!!B||!!q;let Y=w.params.slidesPerView;Y==="auto"?Y=w.slidesPerViewDynamic():(Y=Math.ceil(parseFloat(w.params.slidesPerView,10)),J&&Y%2===0&&(Y=Y+1));let X=C-P<Y;if(J&&(X=X||P<Math.ceil(Y/2)),_&&J&&w.params.slidesPerView!=="auto"&&!x&&(X=!1),X){const en=J?P<w.activeIndex?"prev":"next":P-w.activeIndex-1<w.params.slidesPerView?"next":"prev";w.loopFix({direction:en,slideTo:!0,activeSlideIndex:en==="next"?P+1:P-C+1,slideRealIndex:en==="next"?w.realIndex:void 0})}if(x){const en=E*w.params.grid.rows;E=w.slides.find(dn=>dn.getAttribute("data-swiper-slide-index")*1===en).column}else E=w.getSlideIndexByData(E)}return requestAnimationFrame(()=>{w.slideTo(E,a,f,_)}),w}function slideNext(e,a=!0,f){const _=this,{enabled:w,params:x,animating:E}=_;if(!w||_.destroyed)return _;typeof e>"u"&&(e=_.params.speed);let P=x.slidesPerGroup;x.slidesPerView==="auto"&&x.slidesPerGroup===1&&x.slidesPerGroupAuto&&(P=Math.max(_.slidesPerViewDynamic("current",!0),1));const C=_.activeIndex<x.slidesPerGroupSkip?1:P,M=_.virtual&&x.virtual.enabled;if(x.loop){if(E&&!M&&x.loopPreventsSliding)return!1;if(_.loopFix({direction:"next"}),_._clientLeft=_.wrapperEl.clientLeft,_.activeIndex===_.slides.length-1&&x.cssMode)return requestAnimationFrame(()=>{_.slideTo(_.activeIndex+C,e,a,f)}),!0}return x.rewind&&_.isEnd?_.slideTo(0,e,a,f):_.slideTo(_.activeIndex+C,e,a,f)}function slidePrev(e,a=!0,f){const _=this,{params:w,snapGrid:x,slidesGrid:E,rtlTranslate:P,enabled:C,animating:M}=_;if(!C||_.destroyed)return _;typeof e>"u"&&(e=_.params.speed);const B=_.virtual&&w.virtual.enabled;if(w.loop){if(M&&!B&&w.loopPreventsSliding)return!1;_.loopFix({direction:"prev"}),_._clientLeft=_.wrapperEl.clientLeft}const q=P?_.translate:-_.translate;function J(an){return an<0?-Math.floor(Math.abs(an)):Math.floor(an)}const Y=J(q),X=x.map(an=>J(an)),en=w.freeMode&&w.freeMode.enabled;let dn=x[X.indexOf(Y)-1];if(typeof dn>"u"&&(w.cssMode||en)){let an;x.forEach((un,mn)=>{Y>=un&&(an=mn)}),typeof an<"u"&&(dn=en?x[an]:x[an>0?an-1:an])}let pn=0;if(typeof dn<"u"&&(pn=E.indexOf(dn),pn<0&&(pn=_.activeIndex-1),w.slidesPerView==="auto"&&w.slidesPerGroup===1&&w.slidesPerGroupAuto&&(pn=pn-_.slidesPerViewDynamic("previous",!0)+1,pn=Math.max(pn,0))),w.rewind&&_.isBeginning){const an=_.params.virtual&&_.params.virtual.enabled&&_.virtual?_.virtual.slides.length-1:_.slides.length-1;return _.slideTo(an,e,a,f)}else if(w.loop&&_.activeIndex===0&&w.cssMode)return requestAnimationFrame(()=>{_.slideTo(pn,e,a,f)}),!0;return _.slideTo(pn,e,a,f)}function slideReset(e,a=!0,f){const _=this;if(!_.destroyed)return typeof e>"u"&&(e=_.params.speed),_.slideTo(_.activeIndex,e,a,f)}function slideToClosest(e,a=!0,f,_=.5){const w=this;if(w.destroyed)return;typeof e>"u"&&(e=w.params.speed);let x=w.activeIndex;const E=Math.min(w.params.slidesPerGroupSkip,x),P=E+Math.floor((x-E)/w.params.slidesPerGroup),C=w.rtlTranslate?w.translate:-w.translate;if(C>=w.snapGrid[P]){const M=w.snapGrid[P],B=w.snapGrid[P+1];C-M>(B-M)*_&&(x+=w.params.slidesPerGroup)}else{const M=w.snapGrid[P-1],B=w.snapGrid[P];C-M<=(B-M)*_&&(x-=w.params.slidesPerGroup)}return x=Math.max(x,0),x=Math.min(x,w.slidesGrid.length-1),w.slideTo(x,e,a,f)}function slideToClickedSlide(){const e=this;if(e.destroyed)return;const{params:a,slidesEl:f}=e,_=a.slidesPerView==="auto"?e.slidesPerViewDynamic():a.slidesPerView;let w=e.getSlideIndexWhenGrid(e.clickedIndex),x;const E=e.isElement?"swiper-slide":`.${a.slideClass}`,P=e.grid&&e.params.grid&&e.params.grid.rows>1;if(a.loop){if(e.animating)return;x=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),a.centeredSlides?e.slideToLoop(x):w>(P?(e.slides.length-_)/2-(e.params.grid.rows-1):e.slides.length-_)?(e.loopFix(),w=e.getSlideIndex(elementChildren(f,`${E}[data-swiper-slide-index="${x}"]`)[0]),nextTick(()=>{e.slideTo(w)})):e.slideTo(w)}else e.slideTo(w)}var slide={slideTo,slideToLoop,slideNext,slidePrev,slideReset,slideToClosest,slideToClickedSlide};function loopCreate(e,a){const f=this,{params:_,slidesEl:w}=f;if(!_.loop||f.virtual&&f.params.virtual.enabled)return;const x=()=>{elementChildren(w,`.${_.slideClass}, swiper-slide`).forEach((X,en)=>{X.setAttribute("data-swiper-slide-index",en)})},E=()=>{const Y=elementChildren(w,`.${_.slideBlankClass}`);Y.forEach(X=>{X.remove()}),Y.length>0&&(f.recalcSlides(),f.updateSlides())},P=f.grid&&_.grid&&_.grid.rows>1;_.loopAddBlankSlides&&(_.slidesPerGroup>1||P)&&E();const C=_.slidesPerGroup*(P?_.grid.rows:1),M=f.slides.length%C!==0,B=P&&f.slides.length%_.grid.rows!==0,q=Y=>{for(let X=0;X<Y;X+=1){const en=f.isElement?createElement("swiper-slide",[_.slideBlankClass]):createElement("div",[_.slideClass,_.slideBlankClass]);f.slidesEl.append(en)}};if(M){if(_.loopAddBlankSlides){const Y=C-f.slides.length%C;q(Y),f.recalcSlides(),f.updateSlides()}else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");x()}else if(B){if(_.loopAddBlankSlides){const Y=_.grid.rows-f.slides.length%_.grid.rows;q(Y),f.recalcSlides(),f.updateSlides()}else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");x()}else x();const J=_.centeredSlides||!!_.slidesOffsetBefore||!!_.slidesOffsetAfter;f.loopFix({slideRealIndex:e,direction:J?void 0:"next",initial:a})}function loopFix({slideRealIndex:e,slideTo:a=!0,direction:f,setTranslate:_,activeSlideIndex:w,initial:x,byController:E,byMousewheel:P}={}){const C=this;if(!C.params.loop)return;C.emit("beforeLoopFix");const{slides:M,allowSlidePrev:B,allowSlideNext:q,slidesEl:J,params:Y}=C,{centeredSlides:X,slidesOffsetBefore:en,slidesOffsetAfter:dn,initialSlide:pn}=Y,an=X||!!en||!!dn;if(C.allowSlidePrev=!0,C.allowSlideNext=!0,C.virtual&&Y.virtual.enabled){a&&(!an&&C.snapIndex===0?C.slideTo(C.virtual.slides.length,0,!1,!0):an&&C.snapIndex<Y.slidesPerView?C.slideTo(C.virtual.slides.length+C.snapIndex,0,!1,!0):C.snapIndex===C.snapGrid.length-1&&C.slideTo(C.virtual.slidesBefore,0,!1,!0)),C.allowSlidePrev=B,C.allowSlideNext=q,C.emit("loopFix");return}let un=Y.slidesPerView;un==="auto"?un=C.slidesPerViewDynamic():(un=Math.ceil(parseFloat(Y.slidesPerView,10)),an&&un%2===0&&(un=un+1));const mn=Y.slidesPerGroupAuto?un:Y.slidesPerGroup;let fn=an?Math.max(mn,Math.ceil(un/2)):mn;fn%mn!==0&&(fn+=mn-fn%mn),fn+=Y.loopAdditionalSlides,C.loopedSlides=fn;const Pn=C.grid&&Y.grid&&Y.grid.rows>1;M.length<un+fn||C.params.effect==="cards"&&M.length<un+fn*2?showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):Pn&&Y.grid.fill==="row"&&showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const An=[],sn=[],xn=Pn?Math.ceil(M.length/Y.grid.rows):M.length,Tn=x&&xn-pn<un&&!an;let gn=Tn?pn:C.activeIndex;typeof w>"u"?w=C.getSlideIndex(M.find(_n=>_n.classList.contains(Y.slideActiveClass))):gn=w;const cn=f==="next"||!f,On=f==="prev"||!f;let En=0,Ln=0;const Rn=(Pn?M[w].column:w)+(an&&typeof _>"u"?-un/2+.5:0);if(Rn<fn){En=Math.max(fn-Rn,mn);for(let _n=0;_n<fn-Rn;_n+=1){const Gn=_n-Math.floor(_n/xn)*xn;if(Pn){const Xn=xn-Gn-1;for(let Un=M.length-1;Un>=0;Un-=1)M[Un].column===Xn&&An.push(Un)}else An.push(xn-Gn-1)}}else if(Rn+un>xn-fn){Ln=Math.max(Rn-(xn-fn*2),mn),Tn&&(Ln=Math.max(Ln,un-xn+pn+1));for(let _n=0;_n<Ln;_n+=1){const Gn=_n-Math.floor(_n/xn)*xn;Pn?M.forEach((Xn,Un)=>{Xn.column===Gn&&sn.push(Un)}):sn.push(Gn)}}if(C.__preventObserver__=!0,requestAnimationFrame(()=>{C.__preventObserver__=!1}),C.params.effect==="cards"&&M.length<un+fn*2&&(sn.includes(w)&&sn.splice(sn.indexOf(w),1),An.includes(w)&&An.splice(An.indexOf(w),1)),On&&An.forEach(_n=>{M[_n].swiperLoopMoveDOM=!0,J.prepend(M[_n]),M[_n].swiperLoopMoveDOM=!1}),cn&&sn.forEach(_n=>{M[_n].swiperLoopMoveDOM=!0,J.append(M[_n]),M[_n].swiperLoopMoveDOM=!1}),C.recalcSlides(),Y.slidesPerView==="auto"?C.updateSlides():Pn&&(An.length>0&&On||sn.length>0&&cn)&&C.slides.forEach((_n,Gn)=>{C.grid.updateSlide(Gn,_n,C.slides)}),Y.watchSlidesProgress&&C.updateSlidesOffset(),a){if(An.length>0&&On){if(typeof e>"u"){const _n=C.slidesGrid[gn],Xn=C.slidesGrid[gn+En]-_n;P?C.setTranslate(C.translate-Xn):(C.slideTo(gn+Math.ceil(En),0,!1,!0),_&&(C.touchEventsData.startTranslate=C.touchEventsData.startTranslate-Xn,C.touchEventsData.currentTranslate=C.touchEventsData.currentTranslate-Xn))}else if(_){const _n=Pn?An.length/Y.grid.rows:An.length;C.slideTo(C.activeIndex+_n,0,!1,!0),C.touchEventsData.currentTranslate=C.translate}}else if(sn.length>0&&cn)if(typeof e>"u"){const _n=C.slidesGrid[gn],Xn=C.slidesGrid[gn-Ln]-_n;P?C.setTranslate(C.translate-Xn):(C.slideTo(gn-Ln,0,!1,!0),_&&(C.touchEventsData.startTranslate=C.touchEventsData.startTranslate-Xn,C.touchEventsData.currentTranslate=C.touchEventsData.currentTranslate-Xn))}else{const _n=Pn?sn.length/Y.grid.rows:sn.length;C.slideTo(C.activeIndex-_n,0,!1,!0)}}if(C.allowSlidePrev=B,C.allowSlideNext=q,C.controller&&C.controller.control&&!E){const _n={slideRealIndex:e,direction:f,setTranslate:_,activeSlideIndex:w,byController:!0};Array.isArray(C.controller.control)?C.controller.control.forEach(Gn=>{!Gn.destroyed&&Gn.params.loop&&Gn.loopFix({..._n,slideTo:Gn.params.slidesPerView===Y.slidesPerView?a:!1})}):C.controller.control instanceof C.constructor&&C.controller.control.params.loop&&C.controller.control.loopFix({..._n,slideTo:C.controller.control.params.slidesPerView===Y.slidesPerView?a:!1})}C.emit("loopFix")}function loopDestroy(){const e=this,{params:a,slidesEl:f}=e;if(!a.loop||!f||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const _=[];e.slides.forEach(w=>{const x=typeof w.swiperSlideIndex>"u"?w.getAttribute("data-swiper-slide-index")*1:w.swiperSlideIndex;_[x]=w}),e.slides.forEach(w=>{w.removeAttribute("data-swiper-slide-index")}),_.forEach(w=>{f.append(w)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var loop={loopCreate,loopFix,loopDestroy};function setGrabCursor(e){const a=this;if(!a.params.simulateTouch||a.params.watchOverflow&&a.isLocked||a.params.cssMode)return;const f=a.params.touchEventsTarget==="container"?a.el:a.wrapperEl;a.isElement&&(a.__preventObserver__=!0),f.style.cursor="move",f.style.cursor=e?"grabbing":"grab",a.isElement&&requestAnimationFrame(()=>{a.__preventObserver__=!1})}function unsetGrabCursor(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var grabCursor={setGrabCursor,unsetGrabCursor};function closestElement(e,a=this){function f(_){if(!_||_===getDocument()||_===getWindow())return null;_.assignedSlot&&(_=_.assignedSlot);const w=_.closest(e);return!w&&!_.getRootNode?null:w||f(_.getRootNode().host)}return f(a)}function preventEdgeSwipe(e,a,f){const _=getWindow(),{params:w}=e,x=w.edgeSwipeDetection,E=w.edgeSwipeThreshold;return x&&(f<=E||f>=_.innerWidth-E)?x==="prevent"?(a.preventDefault(),!0):!1:!0}function onTouchStart(e){const a=this,f=getDocument();let _=e;_.originalEvent&&(_=_.originalEvent);const w=a.touchEventsData;if(_.type==="pointerdown"){if(w.pointerId!==null&&w.pointerId!==_.pointerId)return;w.pointerId=_.pointerId}else _.type==="touchstart"&&_.targetTouches.length===1&&(w.touchId=_.targetTouches[0].identifier);if(_.type==="touchstart"){preventEdgeSwipe(a,_,_.targetTouches[0].pageX);return}const{params:x,touches:E,enabled:P}=a;if(!P||!x.simulateTouch&&_.pointerType==="mouse"||a.animating&&x.preventInteractionOnTransition)return;!a.animating&&x.cssMode&&x.loop&&a.loopFix();let C=_.target;if(x.touchEventsTarget==="wrapper"&&!elementIsChildOf(C,a.wrapperEl)||"which"in _&&_.which===3||"button"in _&&_.button>0||w.isTouched&&w.isMoved)return;const M=!!x.noSwipingClass&&x.noSwipingClass!=="",B=_.composedPath?_.composedPath():_.path;M&&_.target&&_.target.shadowRoot&&B&&(C=B[0]);const q=x.noSwipingSelector?x.noSwipingSelector:`.${x.noSwipingClass}`,J=!!(_.target&&_.target.shadowRoot);if(x.noSwiping&&(J?closestElement(q,C):C.closest(q))){a.allowClick=!0;return}if(x.swipeHandler&&!C.closest(x.swipeHandler))return;E.currentX=_.pageX,E.currentY=_.pageY;const Y=E.currentX,X=E.currentY;if(!preventEdgeSwipe(a,_,Y))return;Object.assign(w,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),E.startX=Y,E.startY=X,w.touchStartTime=now(),a.allowClick=!0,a.updateSize(),a.swipeDirection=void 0,x.threshold>0&&(w.allowThresholdMove=!1);let en=!0;C.matches(w.focusableElements)&&(en=!1,C.nodeName==="SELECT"&&(w.isTouched=!1)),f.activeElement&&f.activeElement.matches(w.focusableElements)&&f.activeElement!==C&&(_.pointerType==="mouse"||_.pointerType!=="mouse"&&!C.matches(w.focusableElements))&&f.activeElement.blur();const dn=en&&a.allowTouchMove&&x.touchStartPreventDefault;(x.touchStartForcePreventDefault||dn)&&!C.isContentEditable&&_.preventDefault(),x.freeMode&&x.freeMode.enabled&&a.freeMode&&a.animating&&!x.cssMode&&a.freeMode.onTouchStart(),a.emit("touchStart",_)}function onTouchMove(e){const a=getDocument(),f=this,_=f.touchEventsData,{params:w,touches:x,rtlTranslate:E,enabled:P}=f;if(!P||!w.simulateTouch&&e.pointerType==="mouse")return;let C=e;if(C.originalEvent&&(C=C.originalEvent),C.type==="pointermove"&&(_.touchId!==null||C.pointerId!==_.pointerId))return;let M;if(C.type==="touchmove"){if(M=[...C.changedTouches].find(fn=>fn.identifier===_.touchId),!M||M.identifier!==_.touchId)return}else M=C;if(!_.isTouched){_.startMoving&&_.isScrolling&&f.emit("touchMoveOpposite",C);return}const B=M.pageX,q=M.pageY;if(C.preventedByNestedSwiper){x.startX=B,x.startY=q;return}if(!f.allowTouchMove){C.target.matches(_.focusableElements)||(f.allowClick=!1),_.isTouched&&(Object.assign(x,{startX:B,startY:q,currentX:B,currentY:q}),_.touchStartTime=now());return}if(w.touchReleaseOnEdges&&!w.loop)if(f.isVertical()){if(q<x.startY&&f.translate<=f.maxTranslate()||q>x.startY&&f.translate>=f.minTranslate()){_.isTouched=!1,_.isMoved=!1;return}}else{if(E&&(B>x.startX&&-f.translate<=f.maxTranslate()||B<x.startX&&-f.translate>=f.minTranslate()))return;if(!E&&(B<x.startX&&f.translate<=f.maxTranslate()||B>x.startX&&f.translate>=f.minTranslate()))return}if(a.activeElement&&a.activeElement.matches(_.focusableElements)&&a.activeElement!==C.target&&C.pointerType!=="mouse"&&a.activeElement.blur(),a.activeElement&&C.target===a.activeElement&&C.target.matches(_.focusableElements)){_.isMoved=!0,f.allowClick=!1;return}_.allowTouchCallbacks&&f.emit("touchMove",C),x.previousX=x.currentX,x.previousY=x.currentY,x.currentX=B,x.currentY=q;const J=x.currentX-x.startX,Y=x.currentY-x.startY;if(f.params.threshold&&Math.sqrt(J**2+Y**2)<f.params.threshold)return;if(typeof _.isScrolling>"u"){let fn;f.isHorizontal()&&x.currentY===x.startY||f.isVertical()&&x.currentX===x.startX?_.isScrolling=!1:J*J+Y*Y>=25&&(fn=Math.atan2(Math.abs(Y),Math.abs(J))*180/Math.PI,_.isScrolling=f.isHorizontal()?fn>w.touchAngle:90-fn>w.touchAngle)}if(_.isScrolling&&f.emit("touchMoveOpposite",C),typeof _.startMoving>"u"&&(x.currentX!==x.startX||x.currentY!==x.startY)&&(_.startMoving=!0),_.isScrolling||C.type==="touchmove"&&_.preventTouchMoveFromPointerMove){_.isTouched=!1;return}if(!_.startMoving)return;f.allowClick=!1,!w.cssMode&&C.cancelable&&C.preventDefault(),w.touchMoveStopPropagation&&!w.nested&&C.stopPropagation();let X=f.isHorizontal()?J:Y,en=f.isHorizontal()?x.currentX-x.previousX:x.currentY-x.previousY;w.oneWayMovement&&(X=Math.abs(X)*(E?1:-1),en=Math.abs(en)*(E?1:-1)),x.diff=X,X*=w.touchRatio,E&&(X=-X,en=-en);const dn=f.touchesDirection;f.swipeDirection=X>0?"prev":"next",f.touchesDirection=en>0?"prev":"next";const pn=f.params.loop&&!w.cssMode,an=f.touchesDirection==="next"&&f.allowSlideNext||f.touchesDirection==="prev"&&f.allowSlidePrev;if(!_.isMoved){if(pn&&an&&f.loopFix({direction:f.swipeDirection}),_.startTranslate=f.getTranslate(),f.setTransition(0),f.animating){const fn=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});f.wrapperEl.dispatchEvent(fn)}_.allowMomentumBounce=!1,w.grabCursor&&(f.allowSlideNext===!0||f.allowSlidePrev===!0)&&f.setGrabCursor(!0),f.emit("sliderFirstMove",C)}if(new Date().getTime(),w._loopSwapReset!==!1&&_.isMoved&&_.allowThresholdMove&&dn!==f.touchesDirection&&pn&&an&&Math.abs(X)>=1){Object.assign(x,{startX:B,startY:q,currentX:B,currentY:q,startTranslate:_.currentTranslate}),_.loopSwapReset=!0,_.startTranslate=_.currentTranslate;return}f.emit("sliderMove",C),_.isMoved=!0,_.currentTranslate=X+_.startTranslate;let un=!0,mn=w.resistanceRatio;if(w.touchReleaseOnEdges&&(mn=0),X>0?(pn&&an&&_.allowThresholdMove&&_.currentTranslate>(w.centeredSlides?f.minTranslate()-f.slidesSizesGrid[f.activeIndex+1]-(w.slidesPerView!=="auto"&&f.slides.length-w.slidesPerView>=2?f.slidesSizesGrid[f.activeIndex+1]+f.params.spaceBetween:0)-f.params.spaceBetween:f.minTranslate())&&f.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),_.currentTranslate>f.minTranslate()&&(un=!1,w.resistance&&(_.currentTranslate=f.minTranslate()-1+(-f.minTranslate()+_.startTranslate+X)**mn))):X<0&&(pn&&an&&_.allowThresholdMove&&_.currentTranslate<(w.centeredSlides?f.maxTranslate()+f.slidesSizesGrid[f.slidesSizesGrid.length-1]+f.params.spaceBetween+(w.slidesPerView!=="auto"&&f.slides.length-w.slidesPerView>=2?f.slidesSizesGrid[f.slidesSizesGrid.length-1]+f.params.spaceBetween:0):f.maxTranslate())&&f.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:f.slides.length-(w.slidesPerView==="auto"?f.slidesPerViewDynamic():Math.ceil(parseFloat(w.slidesPerView,10)))}),_.currentTranslate<f.maxTranslate()&&(un=!1,w.resistance&&(_.currentTranslate=f.maxTranslate()+1-(f.maxTranslate()-_.startTranslate-X)**mn))),un&&(C.preventedByNestedSwiper=!0),!f.allowSlideNext&&f.swipeDirection==="next"&&_.currentTranslate<_.startTranslate&&(_.currentTranslate=_.startTranslate),!f.allowSlidePrev&&f.swipeDirection==="prev"&&_.currentTranslate>_.startTranslate&&(_.currentTranslate=_.startTranslate),!f.allowSlidePrev&&!f.allowSlideNext&&(_.currentTranslate=_.startTranslate),w.threshold>0)if(Math.abs(X)>w.threshold||_.allowThresholdMove){if(!_.allowThresholdMove){_.allowThresholdMove=!0,x.startX=x.currentX,x.startY=x.currentY,_.currentTranslate=_.startTranslate,x.diff=f.isHorizontal()?x.currentX-x.startX:x.currentY-x.startY;return}}else{_.currentTranslate=_.startTranslate;return}!w.followFinger||w.cssMode||((w.freeMode&&w.freeMode.enabled&&f.freeMode||w.watchSlidesProgress)&&(f.updateActiveIndex(),f.updateSlidesClasses()),w.freeMode&&w.freeMode.enabled&&f.freeMode&&f.freeMode.onTouchMove(),f.updateProgress(_.currentTranslate),f.setTranslate(_.currentTranslate))}function onTouchEnd(e){const a=this,f=a.touchEventsData;let _=e;_.originalEvent&&(_=_.originalEvent);let w;if(_.type==="touchend"||_.type==="touchcancel"){if(w=[..._.changedTouches].find(fn=>fn.identifier===f.touchId),!w||w.identifier!==f.touchId)return}else{if(f.touchId!==null||_.pointerId!==f.pointerId)return;w=_}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(_.type)&&!(["pointercancel","contextmenu"].includes(_.type)&&(a.browser.isSafari||a.browser.isWebView)))return;f.pointerId=null,f.touchId=null;const{params:E,touches:P,rtlTranslate:C,slidesGrid:M,enabled:B}=a;if(!B||!E.simulateTouch&&_.pointerType==="mouse")return;if(f.allowTouchCallbacks&&a.emit("touchEnd",_),f.allowTouchCallbacks=!1,!f.isTouched){f.isMoved&&E.grabCursor&&a.setGrabCursor(!1),f.isMoved=!1,f.startMoving=!1;return}E.grabCursor&&f.isMoved&&f.isTouched&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!1);const q=now(),J=q-f.touchStartTime;if(a.allowClick){const fn=_.path||_.composedPath&&_.composedPath();a.updateClickedSlide(fn&&fn[0]||_.target,fn),a.emit("tap click",_),J<300&&q-f.lastClickTime<300&&a.emit("doubleTap doubleClick",_)}if(f.lastClickTime=now(),nextTick(()=>{a.destroyed||(a.allowClick=!0)}),!f.isTouched||!f.isMoved||!a.swipeDirection||P.diff===0&&!f.loopSwapReset||f.currentTranslate===f.startTranslate&&!f.loopSwapReset){f.isTouched=!1,f.isMoved=!1,f.startMoving=!1;return}f.isTouched=!1,f.isMoved=!1,f.startMoving=!1;let Y;if(E.followFinger?Y=C?a.translate:-a.translate:Y=-f.currentTranslate,E.cssMode)return;if(E.freeMode&&E.freeMode.enabled){a.freeMode.onTouchEnd({currentPos:Y});return}const X=Y>=-a.maxTranslate()&&!a.params.loop;let en=0,dn=a.slidesSizesGrid[0];for(let fn=0;fn<M.length;fn+=fn<E.slidesPerGroupSkip?1:E.slidesPerGroup){const Pn=fn<E.slidesPerGroupSkip-1?1:E.slidesPerGroup;typeof M[fn+Pn]<"u"?(X||Y>=M[fn]&&Y<M[fn+Pn])&&(en=fn,dn=M[fn+Pn]-M[fn]):(X||Y>=M[fn])&&(en=fn,dn=M[M.length-1]-M[M.length-2])}let pn=null,an=null;E.rewind&&(a.isBeginning?an=E.virtual&&E.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1:a.isEnd&&(pn=0));const un=(Y-M[en])/dn,mn=en<E.slidesPerGroupSkip-1?1:E.slidesPerGroup;if(J>E.longSwipesMs){if(!E.longSwipes){a.slideTo(a.activeIndex);return}a.swipeDirection==="next"&&(un>=E.longSwipesRatio?a.slideTo(E.rewind&&a.isEnd?pn:en+mn):a.slideTo(en)),a.swipeDirection==="prev"&&(un>1-E.longSwipesRatio?a.slideTo(en+mn):an!==null&&un<0&&Math.abs(un)>E.longSwipesRatio?a.slideTo(an):a.slideTo(en))}else{if(!E.shortSwipes){a.slideTo(a.activeIndex);return}a.navigation&&(_.target===a.navigation.nextEl||_.target===a.navigation.prevEl)?_.target===a.navigation.nextEl?a.slideTo(en+mn):a.slideTo(en):(a.swipeDirection==="next"&&a.slideTo(pn!==null?pn:en+mn),a.swipeDirection==="prev"&&a.slideTo(an!==null?an:en))}}function onResize(){const e=this,{params:a,el:f}=e;if(f&&f.offsetWidth===0)return;a.breakpoints&&e.setBreakpoint();const{allowSlideNext:_,allowSlidePrev:w,snapGrid:x}=e,E=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const P=E&&a.loop;(a.slidesPerView==="auto"||a.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!P?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!E?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=w,e.allowSlideNext=_,e.params.watchOverflow&&x!==e.snapGrid&&e.checkOverflow()}function onClick(e){const a=this;a.enabled&&(a.allowClick||(a.params.preventClicks&&e.preventDefault(),a.params.preventClicksPropagation&&a.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function onScroll(){const e=this,{wrapperEl:a,rtlTranslate:f,enabled:_}=e;if(!_)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-a.scrollLeft:e.translate=-a.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let w;const x=e.maxTranslate()-e.minTranslate();x===0?w=0:w=(e.translate-e.minTranslate())/x,w!==e.progress&&e.updateProgress(f?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function onLoad(e){const a=this;processLazyPreloader(a,e.target),!(a.params.cssMode||a.params.slidesPerView!=="auto"&&!a.params.autoHeight)&&a.update()}function onDocumentTouchStart(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const events=(e,a)=>{const f=getDocument(),{params:_,el:w,wrapperEl:x,device:E}=e,P=!!_.nested,C=a==="on"?"addEventListener":"removeEventListener",M=a;!w||typeof w=="string"||(f[C]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:P}),w[C]("touchstart",e.onTouchStart,{passive:!1}),w[C]("pointerdown",e.onTouchStart,{passive:!1}),f[C]("touchmove",e.onTouchMove,{passive:!1,capture:P}),f[C]("pointermove",e.onTouchMove,{passive:!1,capture:P}),f[C]("touchend",e.onTouchEnd,{passive:!0}),f[C]("pointerup",e.onTouchEnd,{passive:!0}),f[C]("pointercancel",e.onTouchEnd,{passive:!0}),f[C]("touchcancel",e.onTouchEnd,{passive:!0}),f[C]("pointerout",e.onTouchEnd,{passive:!0}),f[C]("pointerleave",e.onTouchEnd,{passive:!0}),f[C]("contextmenu",e.onTouchEnd,{passive:!0}),(_.preventClicks||_.preventClicksPropagation)&&w[C]("click",e.onClick,!0),_.cssMode&&x[C]("scroll",e.onScroll),_.updateOnWindowResize?e[M](E.ios||E.android?"resize orientationchange observerUpdate":"resize observerUpdate",onResize,!0):e[M]("observerUpdate",onResize,!0),w[C]("load",e.onLoad,{capture:!0}))};function attachEvents(){const e=this,{params:a}=e;e.onTouchStart=onTouchStart.bind(e),e.onTouchMove=onTouchMove.bind(e),e.onTouchEnd=onTouchEnd.bind(e),e.onDocumentTouchStart=onDocumentTouchStart.bind(e),a.cssMode&&(e.onScroll=onScroll.bind(e)),e.onClick=onClick.bind(e),e.onLoad=onLoad.bind(e),events(e,"on")}function detachEvents(){events(this,"off")}var events$1={attachEvents,detachEvents};const isGridEnabled=(e,a)=>e.grid&&a.grid&&a.grid.rows>1;function setBreakpoint(){const e=this,{realIndex:a,initialized:f,params:_,el:w}=e,x=_.breakpoints;if(!x||x&&Object.keys(x).length===0)return;const E=getDocument(),P=_.breakpointsBase==="window"||!_.breakpointsBase?_.breakpointsBase:"container",C=["window","container"].includes(_.breakpointsBase)||!_.breakpointsBase?e.el:E.querySelector(_.breakpointsBase),M=e.getBreakpoint(x,P,C);if(!M||e.currentBreakpoint===M)return;const q=(M in x?x[M]:void 0)||e.originalParams,J=isGridEnabled(e,_),Y=isGridEnabled(e,q),X=e.params.grabCursor,en=q.grabCursor,dn=_.enabled;J&&!Y?(w.classList.remove(`${_.containerModifierClass}grid`,`${_.containerModifierClass}grid-column`),e.emitContainerClasses()):!J&&Y&&(w.classList.add(`${_.containerModifierClass}grid`),(q.grid.fill&&q.grid.fill==="column"||!q.grid.fill&&_.grid.fill==="column")&&w.classList.add(`${_.containerModifierClass}grid-column`),e.emitContainerClasses()),X&&!en?e.unsetGrabCursor():!X&&en&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(Pn=>{if(typeof q[Pn]>"u")return;const An=_[Pn]&&_[Pn].enabled,sn=q[Pn]&&q[Pn].enabled;An&&!sn&&e[Pn].disable(),!An&&sn&&e[Pn].enable()});const pn=q.direction&&q.direction!==_.direction,an=_.loop&&(q.slidesPerView!==_.slidesPerView||pn),un=_.loop;pn&&f&&e.changeDirection(),extend$1(e.params,q);const mn=e.params.enabled,fn=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),dn&&!mn?e.disable():!dn&&mn&&e.enable(),e.currentBreakpoint=M,e.emit("_beforeBreakpoint",q),f&&(an?(e.loopDestroy(),e.loopCreate(a),e.updateSlides()):!un&&fn?(e.loopCreate(a),e.updateSlides()):un&&!fn&&e.loopDestroy()),e.emit("breakpoint",q)}function getBreakpoint(e,a="window",f){if(!e||a==="container"&&!f)return;let _=!1;const w=getWindow(),x=a==="window"?w.innerHeight:f.clientHeight,E=Object.keys(e).map(P=>{if(typeof P=="string"&&P.indexOf("@")===0){const C=parseFloat(P.substr(1));return{value:x*C,point:P}}return{value:P,point:P}});E.sort((P,C)=>parseInt(P.value,10)-parseInt(C.value,10));for(let P=0;P<E.length;P+=1){const{point:C,value:M}=E[P];a==="window"?w.matchMedia(`(min-width: ${M}px)`).matches&&(_=C):M<=f.clientWidth&&(_=C)}return _||"max"}var breakpoints={setBreakpoint,getBreakpoint};function prepareClasses(e,a){const f=[];return e.forEach(_=>{typeof _=="object"?Object.keys(_).forEach(w=>{_[w]&&f.push(a+w)}):typeof _=="string"&&f.push(a+_)}),f}function addClasses(){const e=this,{classNames:a,params:f,rtl:_,el:w,device:x}=e,E=prepareClasses(["initialized",f.direction,{"free-mode":e.params.freeMode&&f.freeMode.enabled},{autoheight:f.autoHeight},{rtl:_},{grid:f.grid&&f.grid.rows>1},{"grid-column":f.grid&&f.grid.rows>1&&f.grid.fill==="column"},{android:x.android},{ios:x.ios},{"css-mode":f.cssMode},{centered:f.cssMode&&f.centeredSlides},{"watch-progress":f.watchSlidesProgress}],f.containerModifierClass);a.push(...E),w.classList.add(...a),e.emitContainerClasses()}function removeClasses(){const e=this,{el:a,classNames:f}=e;!a||typeof a=="string"||(a.classList.remove(...f),e.emitContainerClasses())}var classes={addClasses,removeClasses};function checkOverflow(){const e=this,{isLocked:a,params:f}=e,{slidesOffsetBefore:_}=f;if(_){const w=e.slides.length-1,x=e.slidesGrid[w]+e.slidesSizesGrid[w]+_*2;e.isLocked=e.size>x}else e.isLocked=e.snapGrid.length===1;f.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),f.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),a&&a!==e.isLocked&&(e.isEnd=!1),a!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var checkOverflow$1={checkOverflow},defaults={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function moduleExtendParams(e,a){return function(_={}){const w=Object.keys(_)[0],x=_[w];if(typeof x!="object"||x===null){extend$1(a,_);return}if(e[w]===!0&&(e[w]={enabled:!0}),w==="navigation"&&e[w]&&e[w].enabled&&!e[w].prevEl&&!e[w].nextEl&&(e[w].auto=!0),["pagination","scrollbar"].indexOf(w)>=0&&e[w]&&e[w].enabled&&!e[w].el&&(e[w].auto=!0),!(w in e&&"enabled"in x)){extend$1(a,_);return}typeof e[w]=="object"&&!("enabled"in e[w])&&(e[w].enabled=!0),e[w]||(e[w]={enabled:!1}),extend$1(a,_)}}const prototypes={eventsEmitter,update,translate,transition,slide,loop,grabCursor,events:events$1,breakpoints,checkOverflow:checkOverflow$1,classes},extendedDefaults={};let Swiper$1=class ie{constructor(...a){let f,_;a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?_=a[0]:[f,_]=a,_||(_={}),_=extend$1({},_),f&&!_.el&&(_.el=f);const w=getDocument();if(_.el&&typeof _.el=="string"&&w.querySelectorAll(_.el).length>1){const C=[];return w.querySelectorAll(_.el).forEach(M=>{const B=extend$1({},_,{el:M});C.push(new ie(B))}),C}const x=this;x.__swiper__=!0,x.support=getSupport(),x.device=getDevice({userAgent:_.userAgent}),x.browser=getBrowser(),x.eventsListeners={},x.eventsAnyListeners=[],x.modules=[...x.__modules__],_.modules&&Array.isArray(_.modules)&&_.modules.forEach(C=>{typeof C=="function"&&x.modules.indexOf(C)<0&&x.modules.push(C)});const E={};x.modules.forEach(C=>{C({params:_,swiper:x,extendParams:moduleExtendParams(_,E),on:x.on.bind(x),once:x.once.bind(x),off:x.off.bind(x),emit:x.emit.bind(x)})});const P=extend$1({},defaults,E);return x.params=extend$1({},P,extendedDefaults,_),x.originalParams=extend$1({},x.params),x.passedParams=extend$1({},_),x.params&&x.params.on&&Object.keys(x.params.on).forEach(C=>{x.on(C,x.params.on[C])}),x.params&&x.params.onAny&&x.onAny(x.params.onAny),Object.assign(x,{enabled:x.params.enabled,el:f,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return x.params.direction==="horizontal"},isVertical(){return x.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:x.params.allowSlideNext,allowSlidePrev:x.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:x.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:x.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),x.emit("_swiper"),x.params.init&&x.init(),x}getDirectionLabel(a){return this.isHorizontal()?a:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[a]}getSlideIndex(a){const{slidesEl:f,params:_}=this,w=elementChildren(f,`.${_.slideClass}, swiper-slide`),x=elementIndex(w[0]);return elementIndex(a)-x}getSlideIndexByData(a){return this.getSlideIndex(this.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===a))}getSlideIndexWhenGrid(a){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?a=Math.floor(a/this.params.grid.rows):this.params.grid.fill==="row"&&(a=a%Math.ceil(this.slides.length/this.params.grid.rows))),a}recalcSlides(){const a=this,{slidesEl:f,params:_}=a;a.slides=elementChildren(f,`.${_.slideClass}, swiper-slide`)}enable(){const a=this;a.enabled||(a.enabled=!0,a.params.grabCursor&&a.setGrabCursor(),a.emit("enable"))}disable(){const a=this;a.enabled&&(a.enabled=!1,a.params.grabCursor&&a.unsetGrabCursor(),a.emit("disable"))}setProgress(a,f){const _=this;a=Math.min(Math.max(a,0),1);const w=_.minTranslate(),E=(_.maxTranslate()-w)*a+w;_.translateTo(E,typeof f>"u"?0:f),_.updateActiveIndex(),_.updateSlidesClasses()}emitContainerClasses(){const a=this;if(!a.params._emitClasses||!a.el)return;const f=a.el.className.split(" ").filter(_=>_.indexOf("swiper")===0||_.indexOf(a.params.containerModifierClass)===0);a.emit("_containerClasses",f.join(" "))}getSlideClasses(a){const f=this;return f.destroyed?"":a.className.split(" ").filter(_=>_.indexOf("swiper-slide")===0||_.indexOf(f.params.slideClass)===0).join(" ")}emitSlidesClasses(){const a=this;if(!a.params._emitClasses||!a.el)return;const f=[];a.slides.forEach(_=>{const w=a.getSlideClasses(_);f.push({slideEl:_,classNames:w}),a.emit("_slideClass",_,w)}),a.emit("_slideClasses",f)}slidesPerViewDynamic(a="current",f=!1){const _=this,{params:w,slides:x,slidesGrid:E,slidesSizesGrid:P,size:C,activeIndex:M}=_;let B=1;if(typeof w.slidesPerView=="number")return w.slidesPerView;if(w.centeredSlides){let q=x[M]?Math.ceil(x[M].swiperSlideSize):0,J;for(let Y=M+1;Y<x.length;Y+=1)x[Y]&&!J&&(q+=Math.ceil(x[Y].swiperSlideSize),B+=1,q>C&&(J=!0));for(let Y=M-1;Y>=0;Y-=1)x[Y]&&!J&&(q+=x[Y].swiperSlideSize,B+=1,q>C&&(J=!0))}else if(a==="current")for(let q=M+1;q<x.length;q+=1)(f?E[q]+P[q]-E[M]<C:E[q]-E[M]<C)&&(B+=1);else for(let q=M-1;q>=0;q-=1)E[M]-E[q]<C&&(B+=1);return B}update(){const a=this;if(!a||a.destroyed)return;const{snapGrid:f,params:_}=a;_.breakpoints&&a.setBreakpoint(),[...a.el.querySelectorAll('[loading="lazy"]')].forEach(E=>{E.complete&&processLazyPreloader(a,E)}),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses();function w(){const E=a.rtlTranslate?a.translate*-1:a.translate,P=Math.min(Math.max(E,a.maxTranslate()),a.minTranslate());a.setTranslate(P),a.updateActiveIndex(),a.updateSlidesClasses()}let x;if(_.freeMode&&_.freeMode.enabled&&!_.cssMode)w(),_.autoHeight&&a.updateAutoHeight();else{if((_.slidesPerView==="auto"||_.slidesPerView>1)&&a.isEnd&&!_.centeredSlides){const E=a.virtual&&_.virtual.enabled?a.virtual.slides:a.slides;x=a.slideTo(E.length-1,0,!1,!0)}else x=a.slideTo(a.activeIndex,0,!1,!0);x||w()}_.watchOverflow&&f!==a.snapGrid&&a.checkOverflow(),a.emit("update")}changeDirection(a,f=!0){const _=this,w=_.params.direction;return a||(a=w==="horizontal"?"vertical":"horizontal"),a===w||a!=="horizontal"&&a!=="vertical"||(_.el.classList.remove(`${_.params.containerModifierClass}${w}`),_.el.classList.add(`${_.params.containerModifierClass}${a}`),_.emitContainerClasses(),_.params.direction=a,_.slides.forEach(x=>{a==="vertical"?x.style.width="":x.style.height=""}),_.emit("changeDirection"),f&&_.update()),_}changeLanguageDirection(a){const f=this;f.rtl&&a==="rtl"||!f.rtl&&a==="ltr"||(f.rtl=a==="rtl",f.rtlTranslate=f.params.direction==="horizontal"&&f.rtl,f.rtl?(f.el.classList.add(`${f.params.containerModifierClass}rtl`),f.el.dir="rtl"):(f.el.classList.remove(`${f.params.containerModifierClass}rtl`),f.el.dir="ltr"),f.update())}mount(a){const f=this;if(f.mounted)return!0;let _=a||f.params.el;if(typeof _=="string"&&(_=document.querySelector(_)),!_)return!1;_.swiper=f,_.parentNode&&_.parentNode.host&&_.parentNode.host.nodeName===f.params.swiperElementNodeName.toUpperCase()&&(f.isElement=!0);const w=()=>`.${(f.params.wrapperClass||"").trim().split(" ").join(".")}`;let E=_&&_.shadowRoot&&_.shadowRoot.querySelector?_.shadowRoot.querySelector(w()):elementChildren(_,w())[0];return!E&&f.params.createElements&&(E=createElement("div",f.params.wrapperClass),_.append(E),elementChildren(_,`.${f.params.slideClass}`).forEach(P=>{E.append(P)})),Object.assign(f,{el:_,wrapperEl:E,slidesEl:f.isElement&&!_.parentNode.host.slideSlots?_.parentNode.host:E,hostEl:f.isElement?_.parentNode.host:_,mounted:!0,rtl:_.dir.toLowerCase()==="rtl"||elementStyle(_,"direction")==="rtl",rtlTranslate:f.params.direction==="horizontal"&&(_.dir.toLowerCase()==="rtl"||elementStyle(_,"direction")==="rtl"),wrongRTL:elementStyle(E,"display")==="-webkit-box"}),!0}init(a){const f=this;if(f.initialized||f.mount(a)===!1)return f;f.emit("beforeInit"),f.params.breakpoints&&f.setBreakpoint(),f.addClasses(),f.updateSize(),f.updateSlides(),f.params.watchOverflow&&f.checkOverflow(),f.params.grabCursor&&f.enabled&&f.setGrabCursor(),f.params.loop&&f.virtual&&f.params.virtual.enabled?f.slideTo(f.params.initialSlide+f.virtual.slidesBefore,0,f.params.runCallbacksOnInit,!1,!0):f.slideTo(f.params.initialSlide,0,f.params.runCallbacksOnInit,!1,!0),f.params.loop&&f.loopCreate(void 0,!0),f.attachEvents();const w=[...f.el.querySelectorAll('[loading="lazy"]')];return f.isElement&&w.push(...f.hostEl.querySelectorAll('[loading="lazy"]')),w.forEach(x=>{x.complete?processLazyPreloader(f,x):x.addEventListener("load",E=>{processLazyPreloader(f,E.target)})}),preload(f),f.initialized=!0,preload(f),f.emit("init"),f.emit("afterInit"),f}destroy(a=!0,f=!0){const _=this,{params:w,el:x,wrapperEl:E,slides:P}=_;return typeof _.params>"u"||_.destroyed||(_.emit("beforeDestroy"),_.initialized=!1,_.detachEvents(),w.loop&&_.loopDestroy(),f&&(_.removeClasses(),x&&typeof x!="string"&&x.removeAttribute("style"),E&&E.removeAttribute("style"),P&&P.length&&P.forEach(C=>{C.classList.remove(w.slideVisibleClass,w.slideFullyVisibleClass,w.slideActiveClass,w.slideNextClass,w.slidePrevClass),C.removeAttribute("style"),C.removeAttribute("data-swiper-slide-index")})),_.emit("destroy"),Object.keys(_.eventsListeners).forEach(C=>{_.off(C)}),a!==!1&&(_.el&&typeof _.el!="string"&&(_.el.swiper=null),deleteProps(_)),_.destroyed=!0),null}static extendDefaults(a){extend$1(extendedDefaults,a)}static get extendedDefaults(){return extendedDefaults}static get defaults(){return defaults}static installModule(a){ie.prototype.__modules__||(ie.prototype.__modules__=[]);const f=ie.prototype.__modules__;typeof a=="function"&&f.indexOf(a)<0&&f.push(a)}static use(a){return Array.isArray(a)?(a.forEach(f=>ie.installModule(f)),ie):(ie.installModule(a),ie)}};Object.keys(prototypes).forEach(e=>{Object.keys(prototypes[e]).forEach(a=>{Swiper$1.prototype[a]=prototypes[e][a]})});Swiper$1.use([Resize,Observer]);const paramsList=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function isObject(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function extend(e,a){const f=["__proto__","constructor","prototype"];Object.keys(a).filter(_=>f.indexOf(_)<0).forEach(_=>{typeof e[_]>"u"?e[_]=a[_]:isObject(a[_])&&isObject(e[_])&&Object.keys(a[_]).length>0?a[_].__swiper__?e[_]=a[_]:extend(e[_],a[_]):e[_]=a[_]})}function needsNavigation(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function needsPagination(e={}){return e.pagination&&typeof e.pagination.el>"u"}function needsScrollbar(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function uniqueClasses(e=""){const a=e.split(" ").map(_=>_.trim()).filter(_=>!!_),f=[];return a.forEach(_=>{f.indexOf(_)<0&&f.push(_)}),f.join(" ")}function wrapperClass(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function updateSwiper({swiper:e,slides:a,passedParams:f,changedParams:_,nextEl:w,prevEl:x,scrollbarEl:E,paginationEl:P}){const C=_.filter(sn=>sn!=="children"&&sn!=="direction"&&sn!=="wrapperClass"),{params:M,pagination:B,navigation:q,scrollbar:J,virtual:Y,thumbs:X}=e;let en,dn,pn,an,un,mn,fn,Pn;_.includes("thumbs")&&f.thumbs&&f.thumbs.swiper&&!f.thumbs.swiper.destroyed&&M.thumbs&&(!M.thumbs.swiper||M.thumbs.swiper.destroyed)&&(en=!0),_.includes("controller")&&f.controller&&f.controller.control&&M.controller&&!M.controller.control&&(dn=!0),_.includes("pagination")&&f.pagination&&(f.pagination.el||P)&&(M.pagination||M.pagination===!1)&&B&&!B.el&&(pn=!0),_.includes("scrollbar")&&f.scrollbar&&(f.scrollbar.el||E)&&(M.scrollbar||M.scrollbar===!1)&&J&&!J.el&&(an=!0),_.includes("navigation")&&f.navigation&&(f.navigation.prevEl||x)&&(f.navigation.nextEl||w)&&(M.navigation||M.navigation===!1)&&q&&!q.prevEl&&!q.nextEl&&(un=!0);const An=sn=>{e[sn]&&(e[sn].destroy(),sn==="navigation"?(e.isElement&&(e[sn].prevEl.remove(),e[sn].nextEl.remove()),M[sn].prevEl=void 0,M[sn].nextEl=void 0,e[sn].prevEl=void 0,e[sn].nextEl=void 0):(e.isElement&&e[sn].el.remove(),M[sn].el=void 0,e[sn].el=void 0))};_.includes("loop")&&e.isElement&&(M.loop&&!f.loop?mn=!0:!M.loop&&f.loop?fn=!0:Pn=!0),C.forEach(sn=>{if(isObject(M[sn])&&isObject(f[sn]))Object.assign(M[sn],f[sn]),(sn==="navigation"||sn==="pagination"||sn==="scrollbar")&&"enabled"in f[sn]&&!f[sn].enabled&&An(sn);else{const xn=f[sn];(xn===!0||xn===!1)&&(sn==="navigation"||sn==="pagination"||sn==="scrollbar")?xn===!1&&An(sn):M[sn]=f[sn]}}),C.includes("controller")&&!dn&&e.controller&&e.controller.control&&M.controller&&M.controller.control&&(e.controller.control=M.controller.control),_.includes("children")&&a&&Y&&M.virtual.enabled?(Y.slides=a,Y.update(!0)):_.includes("virtual")&&Y&&M.virtual.enabled&&(a&&(Y.slides=a),Y.update(!0)),_.includes("children")&&a&&M.loop&&(Pn=!0),en&&X.init()&&X.update(!0),dn&&(e.controller.control=M.controller.control),pn&&(e.isElement&&(!P||typeof P=="string")&&(P=document.createElement("div"),P.classList.add("swiper-pagination"),P.part.add("pagination"),e.el.appendChild(P)),P&&(M.pagination.el=P),B.init(),B.render(),B.update()),an&&(e.isElement&&(!E||typeof E=="string")&&(E=document.createElement("div"),E.classList.add("swiper-scrollbar"),E.part.add("scrollbar"),e.el.appendChild(E)),E&&(M.scrollbar.el=E),J.init(),J.updateSize(),J.setTranslate()),un&&(e.isElement&&((!w||typeof w=="string")&&(w=document.createElement("div"),w.classList.add("swiper-button-next"),setInnerHTML(w,e.navigation.arrowSvg),w.part.add("button-next"),e.el.appendChild(w)),(!x||typeof x=="string")&&(x=document.createElement("div"),x.classList.add("swiper-button-prev"),setInnerHTML(x,e.navigation.arrowSvg),x.part.add("button-prev"),e.el.appendChild(x))),w&&(M.navigation.nextEl=w),x&&(M.navigation.prevEl=x),q.init(),q.update()),_.includes("allowSlideNext")&&(e.allowSlideNext=f.allowSlideNext),_.includes("allowSlidePrev")&&(e.allowSlidePrev=f.allowSlidePrev),_.includes("direction")&&e.changeDirection(f.direction,!1),(mn||Pn)&&e.loopDestroy(),(fn||Pn)&&e.loopCreate(),e.update()}function getParams(e={},a=!0){const f={on:{}},_={},w={};extend(f,defaults),f._emitClasses=!0,f.init=!1;const x={},E=paramsList.map(C=>C.replace(/_/,"")),P=Object.assign({},e);return Object.keys(P).forEach(C=>{typeof e[C]>"u"||(E.indexOf(C)>=0?isObject(e[C])?(f[C]={},w[C]={},extend(f[C],e[C]),extend(w[C],e[C])):(f[C]=e[C],w[C]=e[C]):C.search(/on[A-Z]/)===0&&typeof e[C]=="function"?a?_[`${C[2].toLowerCase()}${C.substr(3)}`]=e[C]:f.on[`${C[2].toLowerCase()}${C.substr(3)}`]=e[C]:x[C]=e[C])}),["navigation","pagination","scrollbar"].forEach(C=>{f[C]===!0&&(f[C]={}),f[C]===!1&&delete f[C]}),{params:f,passedParams:w,rest:x,events:_}}function mountSwiper({el:e,nextEl:a,prevEl:f,paginationEl:_,scrollbarEl:w,swiper:x},E){needsNavigation(E)&&a&&f&&(x.params.navigation.nextEl=a,x.originalParams.navigation.nextEl=a,x.params.navigation.prevEl=f,x.originalParams.navigation.prevEl=f),needsPagination(E)&&_&&(x.params.pagination.el=_,x.originalParams.pagination.el=_),needsScrollbar(E)&&w&&(x.params.scrollbar.el=w,x.originalParams.scrollbar.el=w),x.init(e)}function getChangedParams(e,a,f,_,w){const x=[];if(!a)return x;const E=C=>{x.indexOf(C)<0&&x.push(C)};if(f&&_){const C=_.map(w),M=f.map(w);C.join("")!==M.join("")&&E("children"),_.length!==f.length&&E("children")}return paramsList.filter(C=>C[0]==="_").map(C=>C.replace(/_/,"")).forEach(C=>{if(C in e&&C in a)if(isObject(e[C])&&isObject(a[C])){const M=Object.keys(e[C]),B=Object.keys(a[C]);M.length!==B.length?E(C):(M.forEach(q=>{e[C][q]!==a[C][q]&&E(C)}),B.forEach(q=>{e[C][q]!==a[C][q]&&E(C)}))}else e[C]!==a[C]&&E(C)}),x}const updateOnVirtualData=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function getChildren(e={},a,f){const _=[],w={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},x=(E,P)=>{Array.isArray(E)&&E.forEach(C=>{const M=typeof C.type=="symbol";P==="default"&&(P="container-end"),M&&C.children?x(C.children,P):C.type&&(C.type.name==="SwiperSlide"||C.type.name==="AsyncComponentWrapper")||C.componentOptions&&C.componentOptions.tag==="SwiperSlide"?_.push(C):w[P]&&w[P].push(C)})};return Object.keys(e).forEach(E=>{if(typeof e[E]!="function")return;const P=e[E]();x(P,E)}),f.value=a.value,a.value=_,{slides:_,slots:w}}function renderVirtual(e,a,f){if(!f)return null;const _=B=>{let q=B;return B<0?q=a.length+B:q>=a.length&&(q=q-a.length),q},w=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${f.offset}px`}:{top:`${f.offset}px`},{from:x,to:E}=f,P=e.value.params.loop?-a.length:0,C=e.value.params.loop?a.length*2:a.length,M=[];for(let B=P;B<C;B+=1)B>=x&&B<=E&&M.length<a.length&&M.push(a[_(B)]);return M.map(B=>{if(B.props||(B.props={}),B.props.style||(B.props.style={}),B.props.swiperRef=e,B.props.style=w,B.type)return h(B.type,{...B.props},B.children);if(B.componentOptions)return h(B.componentOptions.Ctor,{...B.props},B.componentOptions.children)})}const Swiper={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopAddBlankSlides:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","_virtualUpdated","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,{slots:a,emit:f}){const{tag:_,wrapperTag:w}=e,x=ref("swiper"),E=ref(null),P=ref(!1),C=ref(!1),M=ref(null),B=ref(null),q=ref(null),J={value:[]},Y={value:[]},X=ref(null),en=ref(null),dn=ref(null),pn=ref(null),{params:an,passedParams:un}=getParams(e,!1);getChildren(a,J,Y),q.value=un,Y.value=J.value;const mn=()=>{getChildren(a,J,Y),P.value=!0};an.onAny=(An,...sn)=>{f(An,...sn)},Object.assign(an.on,{_beforeBreakpoint:mn,_containerClasses(An,sn){x.value=sn}});const fn={...an};if(delete fn.wrapperClass,B.value=new Swiper$1(fn),B.value.virtual&&B.value.params.virtual.enabled){B.value.virtual.slides=J.value;const An={cache:!1,slides:J.value,renderExternal:sn=>{E.value=sn},renderExternalUpdate:!1};extend(B.value.params.virtual,An),extend(B.value.originalParams.virtual,An)}onUpdated(()=>{!C.value&&B.value&&(B.value.emitSlidesClasses(),C.value=!0);const{passedParams:An}=getParams(e,!1),sn=getChangedParams(An,q.value,J.value,Y.value,xn=>xn.props&&xn.props.key);q.value=An,(sn.length||P.value)&&B.value&&!B.value.destroyed&&updateSwiper({swiper:B.value,slides:J.value,passedParams:An,changedParams:sn,nextEl:X.value,prevEl:en.value,scrollbarEl:pn.value,paginationEl:dn.value}),P.value=!1}),provide("swiper",B),watch(E,()=>{nextTick$1(()=>{updateOnVirtualData(B.value)})}),onMounted(()=>{M.value&&(mountSwiper({el:M.value,nextEl:X.value,prevEl:en.value,paginationEl:dn.value,scrollbarEl:pn.value,swiper:B.value},an),f("swiper",B.value))}),onBeforeUnmount(()=>{B.value&&!B.value.destroyed&&B.value.destroy(!0,!1)});function Pn(An){return an.virtual?renderVirtual(B,An,E.value):(An.forEach((sn,xn)=>{sn.props||(sn.props={}),sn.props.swiperRef=B,sn.props.swiperSlideIndex=xn}),An)}return()=>{const{slides:An,slots:sn}=getChildren(a,J,Y);return h(_,{ref:M,class:uniqueClasses(x.value)},[sn["container-start"],h(w,{class:wrapperClass(an.wrapperClass)},[sn["wrapper-start"],Pn(An),sn["wrapper-end"]]),needsNavigation(e)&&[h("div",{ref:en,class:"swiper-button-prev"}),h("div",{ref:X,class:"swiper-button-next"})],needsScrollbar(e)&&h("div",{ref:pn,class:"swiper-scrollbar"}),needsPagination(e)&&h("div",{ref:dn,class:"swiper-pagination"}),sn["container-end"]])}}},SwiperSlide={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(e,{slots:a}){let f=!1;const{swiperRef:_}=e,w=ref(null),x=ref("swiper-slide"),E=ref(!1);function P(B,q,J){q===w.value&&(x.value=J)}onMounted(()=>{!_||!_.value||(_.value.on("_slideClass",P),f=!0)}),onBeforeUpdate(()=>{f||!_||!_.value||(_.value.on("_slideClass",P),f=!0)}),onUpdated(()=>{!w.value||!_||!_.value||(typeof e.swiperSlideIndex<"u"&&(w.value.swiperSlideIndex=e.swiperSlideIndex),_.value.destroyed&&x.value!=="swiper-slide"&&(x.value="swiper-slide"))}),onBeforeUnmount(()=>{!_||!_.value||_.value.off("_slideClass",P)});const C=computed(()=>({isActive:x.value.indexOf("swiper-slide-active")>=0,isVisible:x.value.indexOf("swiper-slide-visible")>=0,isPrev:x.value.indexOf("swiper-slide-prev")>=0,isNext:x.value.indexOf("swiper-slide-next")>=0}));provide("swiperSlide",C);const M=()=>{E.value=!0};return()=>h(e.tag,{class:uniqueClasses(`${x.value}`),ref:w,"data-swiper-slide-index":typeof e.virtualIndex>"u"&&_&&_.value&&_.value.params.loop?e.swiperSlideIndex:e.virtualIndex,onLoadCapture:M},e.zoom?h("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof e.zoom=="number"?e.zoom:void 0},[a.default&&a.default(C.value),e.lazy&&!E.value&&h("div",{class:"swiper-lazy-preloader",onVnodeMounted:B=>{B.el&&(B.el.lazyPreloaderManaged=!0)}})]):[a.default&&a.default(C.value),e.lazy&&!E.value&&h("div",{class:"swiper-lazy-preloader",onVnodeMounted:B=>{B.el&&(B.el.lazyPreloaderManaged=!0)}})])}};function Autoplay({swiper:e,extendParams:a,on:f,emit:_,params:w}){e.autoplay={running:!1,paused:!1,timeLeft:0},a({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let x,E,P=w&&w.autoplay?w.autoplay.delay:3e3,C=w&&w.autoplay?w.autoplay.delay:3e3,M,B=new Date().getTime(),q,J,Y,X,en,dn;function pn(Rn){!e||e.destroyed||!e.wrapperEl||Rn.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",pn),!(dn||Rn.detail&&Rn.detail.bySwiperTouchMove)&&xn())}const an=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?q=!0:q&&(C=M,q=!1);const Rn=e.autoplay.paused?M:B+C-new Date().getTime();e.autoplay.timeLeft=Rn,_("autoplayTimeLeft",Rn,Rn/P),E=requestAnimationFrame(()=>{an()})},un=()=>{let Rn;return e.virtual&&e.params.virtual.enabled?Rn=e.slides.find(Gn=>Gn.classList.contains("swiper-slide-active")):Rn=e.slides[e.activeIndex],Rn?parseInt(Rn.getAttribute("data-swiper-autoplay"),10):void 0},mn=()=>{let Rn=e.params.autoplay.delay;const _n=un();return!Number.isNaN(_n)&&_n>0&&(Rn=_n),Rn},fn=Rn=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(E),an();let _n=Rn;typeof _n>"u"&&(_n=mn(),P=_n,C=_n),M=_n;const Gn=e.params.speed,Xn=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Gn,!0,!0),_("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Gn,!0,!0),_("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Gn,!0,!0),_("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Gn,!0,!0),_("autoplay")),e.params.cssMode&&(B=new Date().getTime(),requestAnimationFrame(()=>{fn()})))};return _n>0?(clearTimeout(x),x=setTimeout(()=>{Xn()},_n)):requestAnimationFrame(()=>{Xn()}),_n},Pn=()=>{B=new Date().getTime(),e.autoplay.running=!0,fn(),_("autoplayStart")},An=()=>{e.autoplay.running=!1,clearTimeout(x),cancelAnimationFrame(E),_("autoplayStop")},sn=(Rn,_n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(x),Rn||(en=!0);const Gn=()=>{_("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",pn):xn()};if(e.autoplay.paused=!0,_n){Gn();return}M=(M||e.params.autoplay.delay)-(new Date().getTime()-B),!(e.isEnd&&M<0&&!e.params.loop)&&(M<0&&(M=0),Gn())},xn=()=>{e.isEnd&&M<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(B=new Date().getTime(),en?(en=!1,fn(M)):fn(),e.autoplay.paused=!1,_("autoplayResume"))},Tn=()=>{if(e.destroyed||!e.autoplay.running)return;const Rn=getDocument();Rn.visibilityState==="hidden"&&(en=!0,sn(!0)),Rn.visibilityState==="visible"&&xn()},gn=Rn=>{Rn.pointerType==="mouse"&&(en=!0,dn=!0,!(e.animating||e.autoplay.paused)&&sn(!0))},cn=Rn=>{Rn.pointerType==="mouse"&&(dn=!1,e.autoplay.paused&&xn())},On=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",gn),e.el.addEventListener("pointerleave",cn))},En=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",gn),e.el.removeEventListener("pointerleave",cn))},Ln=()=>{getDocument().addEventListener("visibilitychange",Tn)},qn=()=>{getDocument().removeEventListener("visibilitychange",Tn)};f("init",()=>{e.params.autoplay.enabled&&(On(),Ln(),Pn())}),f("destroy",()=>{En(),qn(),e.autoplay.running&&An()}),f("_freeModeStaticRelease",()=>{(Y||en)&&xn()}),f("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?An():sn(!0,!0)}),f("beforeTransitionStart",(Rn,_n,Gn)=>{e.destroyed||!e.autoplay.running||(Gn||!e.params.autoplay.disableOnInteraction?sn(!0,!0):An())}),f("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){An();return}J=!0,Y=!1,en=!1,X=setTimeout(()=>{en=!0,Y=!0,sn(!0)},200)}}),f("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!J)){if(clearTimeout(X),clearTimeout(x),e.params.autoplay.disableOnInteraction){Y=!1,J=!1;return}Y&&e.params.cssMode&&xn(),Y=!1,J=!1}}),f("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(M=mn(),P=mn())}),Object.assign(e.autoplay,{start:Pn,stop:An,pause:sn,resume:xn})}function effectInit(e){const{effect:a,swiper:f,on:_,setTranslate:w,setTransition:x,overwriteParams:E,perspective:P,recreateShadows:C,getEffectParams:M}=e;_("beforeInit",()=>{if(f.params.effect!==a)return;f.classNames.push(`${f.params.containerModifierClass}${a}`),P&&P()&&f.classNames.push(`${f.params.containerModifierClass}3d`);const q=E?E():{};Object.assign(f.params,q),Object.assign(f.originalParams,q)}),_("setTranslate _virtualUpdated",()=>{f.params.effect===a&&w()}),_("setTransition",(q,J)=>{f.params.effect===a&&x(J)}),_("transitionEnd",()=>{if(f.params.effect===a&&C){if(!M||!M().slideShadows)return;f.slides.forEach(q=>{q.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(J=>J.remove())}),C()}});let B;_("virtualUpdate",()=>{f.params.effect===a&&(f.slides.length||(B=!0),requestAnimationFrame(()=>{B&&f.slides&&f.slides.length&&(w(),B=!1)}))})}function effectTarget(e,a){const f=getSlideTransformEl(a);return f!==a&&(f.style.backfaceVisibility="hidden",f.style["-webkit-backface-visibility"]="hidden"),f}function effectVirtualTransitionEnd({swiper:e,duration:a,transformElements:f,allSlides:_}){const{activeIndex:w}=e;if(e.params.virtualTranslate&&a!==0){let x=!1,E;E=f,E.forEach(P=>{elementTransitionEnd(P,()=>{if(x||!e||e.destroyed)return;x=!0,e.animating=!1;const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(C)})})}}function EffectFade({swiper:e,extendParams:a,on:f}){a({fadeEffect:{crossFade:!1}}),effectInit({effect:"fade",swiper:e,on:f,setTranslate:()=>{const{slides:x}=e,E=e.params.fadeEffect;for(let P=0;P<x.length;P+=1){const C=e.slides[P];let B=-C.swiperSlideOffset;e.params.virtualTranslate||(B-=e.translate);let q=0;e.isHorizontal()||(q=B,B=0);const J=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(C.progress),0):1+Math.min(Math.max(C.progress,-1),0),Y=effectTarget(E,C);Y.style.opacity=J,Y.style.transform=`translate3d(${B}px, ${q}px, 0px)`}},setTransition:x=>{const E=e.slides.map(P=>getSlideTransformEl(P));E.forEach(P=>{P.style.transitionDuration=`${x}ms`}),effectVirtualTransitionEnd({swiper:e,duration:x,transformElements:E,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const _hoisted_1$1={class:"hidden lg:block absolute bottom-0 z-10"},_hoisted_2={class:"flex items-center m-5"},_hoisted_3={class:"pl-4"},_hoisted_4={class:"w-32 mt-1"},_hoisted_5={class:"mt-1"},_sfc_main$1={__name:"BlogCarousel",setup(e){const a=useRoute(),f=[Autoplay,EffectFade],_=ref(!1);return watch(()=>a.name,w=>{w==="about"?_.value=!0:_.value=!1},{immediate:!0}),(w,x)=>{const E=resolveComponent("router-link");return openBlock(),createBlock(unref(Swiper),{effect:"fade",modules:f,speed:2500,autoplay:{delay:5e3},class:"relative h-75 overflow-hidden"},{default:withCtx(()=>[x[8]||(x[8]=createBaseVNode("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-full"},[createBaseVNode("div",{class:"text-center"},[createBaseVNode("p",{class:"font-bold text-xl md:text-3xl text-white text-shadow-md"},"Code, Learn, Grow"),createBaseVNode("div",{class:"mx-auto w-20 h-1 bg-emerald-700 rounded shadow-md my-1"}),createBaseVNode("p",{class:"text-sm sm:text-lg text-white text-shadow-md"},"Every line of code is a step forward")])],-1)),createBaseVNode("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2,[_.value?(openBlock(),createBlock(E,{key:0,to:"/",class:"overlay-list group relative block w-26 h-26 rounded-full overflow-hidden border-3 border-white"},{default:withCtx(()=>[...x[0]||(x[0]=[createBaseVNode("img",{class:"scale-600 -translate-y-10",src:_imports_0,alt:"黃俊傑的個人大頭照"},null,-1)])]),_:1})):(openBlock(),createBlock(E,{key:1,to:"/about",class:"overlay-about group relative block w-26 h-26 rounded-full overflow-hidden border-3 border-white"},{default:withCtx(()=>[...x[1]||(x[1]=[createBaseVNode("img",{class:"scale-600 -translate-y-10",src:_imports_0,alt:"黃俊傑的個人大頭照"},null,-1)])]),_:1})),createBaseVNode("div",_hoisted_3,[x[4]||(x[4]=createBaseVNode("h3",{class:"text-white text-2xl text-shadow-lg text-nowrap"},[createTextVNode("黃俊傑 "),createBaseVNode("span",{class:"text-white text-xs text-shadow-lg text-nowrap"},"(Jack Huang)")],-1)),createBaseVNode("ul",_hoisted_4,[createBaseVNode("li",_hoisted_5,[createVNode(E,{to:"/project",class:"group relative overflow-hidden btn-fill-slide block text-sm bg-white/80 text-center py-1 px-8 rounded hover:text-white z-10"},{default:withCtx(()=>[...x[2]||(x[2]=[createTextVNode("作品集 ",-1)])]),_:1})]),x[3]||(x[3]=createBaseVNode("ul",{class:"flex justify-between mt-1"},[createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden btn-fill-slide block text-sm bg-white/80 text-center w-7 rounded hover:text-white z-10",href:"https://line.me/ti/p/yTrfJgiVIC",target:"_blank"},[createBaseVNode("img",{src:_imports_1,alt:"黃俊傑的個人Line頁面"})])]),createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden btn-fill-slide block text-sm bg-white/80 text-center w-7 rounded hover:text-white z-10",href:"https://github.com/jack842248?tab=repositories",target:"_blank"},[createBaseVNode("img",{src:_imports_2,alt:"黃俊傑的個人Github頁面"})])]),createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden btn-fill-slide block text-sm bg-white/80 text-center w-7 rounded hover:text-white z-10",href:"https://codepen.io/jack842248/pens/popular",target:"_blank"},[createBaseVNode("img",{src:_imports_3,alt:"黃俊傑的個人Codepen頁面"})])]),createBaseVNode("li",{class:"mt-1"},[createBaseVNode("a",{class:"group relative overflow-hidden btn-fill-slide block text-sm bg-white/80 text-center w-7 rounded hover:text-white z-10",href:"https://www.instagram.com/jack842248/",target:"_blank"},[createBaseVNode("img",{src:_imports_4,alt:"黃俊傑的個人Instagram頁面"})])])],-1))])])])]),createVNode(unref(SwiperSlide),null,{default:withCtx(()=>[...x[5]||(x[5]=[createBaseVNode("img",{src:_imports_5,alt:"星空照"},null,-1)])]),_:1}),createVNode(unref(SwiperSlide),null,{default:withCtx(()=>[...x[6]||(x[6]=[createBaseVNode("img",{src:_imports_6,alt:"特寫葉子水滴照"},null,-1)])]),_:1}),createVNode(unref(SwiperSlide),null,{default:withCtx(()=>[...x[7]||(x[7]=[createBaseVNode("img",{src:_imports_7,alt:"絢藍星空照"},null,-1)])]),_:1})]),_:1})}}},_hoisted_1={class:"relative"},_sfc_main={__name:"App",setup(e){const a=useRoute(),f=ref(!1),_=()=>{f.value=!f.value};watch(()=>a.fullPath,()=>{f.value=!1});const w=window.matchMedia("(min-width: 1024px)"),x=E=>{E.matches&&(f.value=!1)};return onMounted(()=>{w.addEventListener("change",x)}),onBeforeUnmount(()=>{w.removeEventListener("change",x)}),(E,P)=>{const C=resolveComponent("router-view");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("header",null,[createVNode(_sfc_main$3),unref(a).meta.showCarousel?(openBlock(),createBlock(_sfc_main$1,{key:0})):createCommentVNode("",!0)]),createBaseVNode("main",_hoisted_1,[unref(a).meta.showSidebar?(openBlock(),createElementBlock("button",{key:0,onClick:P[0]||(P[0]=M=>_()),type:"button",class:"lg:hidden absolute bg-emerald-700 text-neutral-100 text-nen -top-8 p-1 px-2 z-1"},[f.value?(openBlock(),createBlock(unref(render$1),{key:1,class:"size-6"})):(openBlock(),createBlock(unref(render),{key:0,class:"size-6"}))])):createCommentVNode("",!0),unref(a).meta.showSidebar?(openBlock(),createElementBlock("aside",{key:1,class:normalizeClass(f.value?"show":"")},[createVNode(_sfc_main$2,{class:"sticky top-0 h-screen overflow-y-auto"})],2)):createCommentVNode("",!0),createVNode(C,{class:normalizeClass(f.value?"hidden":"")},{default:withCtx(({Component:M})=>[createVNode(Transition,{name:"fade",mode:"out-in"},{default:withCtx(()=>[(openBlock(),createBlock(resolveDynamicComponent(M),{key:unref(a).fullPath}))]),_:2},1024)]),_:1},8,["class"])])],64)}}};var aos$1={exports:{}},aos=aos$1.exports,hasRequiredAos;function requireAos(){return hasRequiredAos||(hasRequiredAos=1,(function(e,a){(function(f,_){e.exports=_()})(aos,function(){return(function(f){function _(x){if(w[x])return w[x].exports;var E=w[x]={exports:{},id:x,loaded:!1};return f[x].call(E.exports,E,E.exports,_),E.loaded=!0,E.exports}var w={};return _.m=f,_.c=w,_.p="dist/",_(0)})([function(f,_,w){function x(En){return En&&En.__esModule?En:{default:En}}var E=Object.assign||function(En){for(var Ln=1;Ln<arguments.length;Ln++){var qn=arguments[Ln];for(var Rn in qn)Object.prototype.hasOwnProperty.call(qn,Rn)&&(En[Rn]=qn[Rn])}return En},P=w(1),C=(x(P),w(6)),M=x(C),B=w(7),q=x(B),J=w(8),Y=x(J),X=w(9),en=x(X),dn=w(10),pn=x(dn),an=w(11),un=x(an),mn=w(14),fn=x(mn),Pn=[],An=!1,sn={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},xn=function(){var En=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(En&&(An=!0),An)return Pn=(0,un.default)(Pn,sn),(0,pn.default)(Pn,sn.once),Pn},Tn=function(){Pn=(0,fn.default)(),xn()},gn=function(){Pn.forEach(function(En,Ln){En.node.removeAttribute("data-aos"),En.node.removeAttribute("data-aos-easing"),En.node.removeAttribute("data-aos-duration"),En.node.removeAttribute("data-aos-delay")})},cn=function(En){return En===!0||En==="mobile"&&en.default.mobile()||En==="phone"&&en.default.phone()||En==="tablet"&&en.default.tablet()||typeof En=="function"&&En()===!0},On=function(En){sn=E(sn,En),Pn=(0,fn.default)();var Ln=document.all&&!window.atob;return cn(sn.disable)||Ln?gn():(sn.disableMutationObserver||Y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),sn.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",sn.easing),document.querySelector("body").setAttribute("data-aos-duration",sn.duration),document.querySelector("body").setAttribute("data-aos-delay",sn.delay),sn.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?xn(!0):sn.startEvent==="load"?window.addEventListener(sn.startEvent,function(){xn(!0)}):document.addEventListener(sn.startEvent,function(){xn(!0)}),window.addEventListener("resize",(0,q.default)(xn,sn.debounceDelay,!0)),window.addEventListener("orientationchange",(0,q.default)(xn,sn.debounceDelay,!0)),window.addEventListener("scroll",(0,M.default)(function(){(0,pn.default)(Pn,sn.once)},sn.throttleDelay)),sn.disableMutationObserver||Y.default.ready("[data-aos]",Tn),Pn)};f.exports={init:On,refresh:xn,refreshHard:Tn}},function(f,_){},,,,,function(f,_){(function(w){function x(cn,On,En){function Ln(rn){var yn=te,kn=Kn;return te=Kn=void 0,Fn=rn,vn=cn.apply(kn,yn)}function qn(rn){return Fn=rn,In=setTimeout(Gn,On),Wn?Ln(rn):vn}function Rn(rn){var yn=rn-Vn,kn=rn-Fn,Sn=On-yn;return nn?Tn(Sn,ne-kn):Sn}function _n(rn){var yn=rn-Vn,kn=rn-Fn;return Vn===void 0||yn>=On||yn<0||nn&&kn>=ne}function Gn(){var rn=gn();return _n(rn)?Xn(rn):void(In=setTimeout(Gn,Rn(rn)))}function Xn(rn){return In=void 0,tn&&te?Ln(rn):(te=Kn=void 0,vn)}function Un(){In!==void 0&&clearTimeout(In),Fn=0,te=Vn=Kn=In=void 0}function Yn(){return In===void 0?vn:Xn(gn())}function Zn(){var rn=gn(),yn=_n(rn);if(te=arguments,Kn=this,Vn=rn,yn){if(In===void 0)return qn(Vn);if(nn)return In=setTimeout(Gn,On),Ln(Vn)}return In===void 0&&(In=setTimeout(Gn,On)),vn}var te,Kn,ne,vn,In,Vn,Fn=0,Wn=!1,nn=!1,tn=!0;if(typeof cn!="function")throw new TypeError(J);return On=B(On)||0,P(En)&&(Wn=!!En.leading,nn="maxWait"in En,ne=nn?xn(B(En.maxWait)||0,On):ne,tn="trailing"in En?!!En.trailing:tn),Zn.cancel=Un,Zn.flush=Yn,Zn}function E(cn,On,En){var Ln=!0,qn=!0;if(typeof cn!="function")throw new TypeError(J);return P(En)&&(Ln="leading"in En?!!En.leading:Ln,qn="trailing"in En?!!En.trailing:qn),x(cn,On,{leading:Ln,maxWait:On,trailing:qn})}function P(cn){var On=typeof cn>"u"?"undefined":q(cn);return!!cn&&(On=="object"||On=="function")}function C(cn){return!!cn&&(typeof cn>"u"?"undefined":q(cn))=="object"}function M(cn){return(typeof cn>"u"?"undefined":q(cn))=="symbol"||C(cn)&&sn.call(cn)==X}function B(cn){if(typeof cn=="number")return cn;if(M(cn))return Y;if(P(cn)){var On=typeof cn.valueOf=="function"?cn.valueOf():cn;cn=P(On)?On+"":On}if(typeof cn!="string")return cn===0?cn:+cn;cn=cn.replace(en,"");var En=pn.test(cn);return En||an.test(cn)?un(cn.slice(2),En?2:8):dn.test(cn)?Y:+cn}var q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(cn){return typeof cn}:function(cn){return cn&&typeof Symbol=="function"&&cn.constructor===Symbol&&cn!==Symbol.prototype?"symbol":typeof cn},J="Expected a function",Y=NaN,X="[object Symbol]",en=/^\s+|\s+$/g,dn=/^[-+]0x[0-9a-f]+$/i,pn=/^0b[01]+$/i,an=/^0o[0-7]+$/i,un=parseInt,mn=(typeof w>"u"?"undefined":q(w))=="object"&&w&&w.Object===Object&&w,fn=(typeof self>"u"?"undefined":q(self))=="object"&&self&&self.Object===Object&&self,Pn=mn||fn||Function("return this")(),An=Object.prototype,sn=An.toString,xn=Math.max,Tn=Math.min,gn=function(){return Pn.Date.now()};f.exports=E}).call(_,(function(){return this})())},function(f,_){(function(w){function x(gn,cn,On){function En(tn){var rn=Zn,yn=te;return Zn=te=void 0,Vn=tn,ne=gn.apply(yn,rn)}function Ln(tn){return Vn=tn,vn=setTimeout(_n,cn),Fn?En(tn):ne}function qn(tn){var rn=tn-In,yn=tn-Vn,kn=cn-rn;return Wn?xn(kn,Kn-yn):kn}function Rn(tn){var rn=tn-In,yn=tn-Vn;return In===void 0||rn>=cn||rn<0||Wn&&yn>=Kn}function _n(){var tn=Tn();return Rn(tn)?Gn(tn):void(vn=setTimeout(_n,qn(tn)))}function Gn(tn){return vn=void 0,nn&&Zn?En(tn):(Zn=te=void 0,ne)}function Xn(){vn!==void 0&&clearTimeout(vn),Vn=0,Zn=In=te=vn=void 0}function Un(){return vn===void 0?ne:Gn(Tn())}function Yn(){var tn=Tn(),rn=Rn(tn);if(Zn=arguments,te=this,In=tn,rn){if(vn===void 0)return Ln(In);if(Wn)return vn=setTimeout(_n,cn),En(In)}return vn===void 0&&(vn=setTimeout(_n,cn)),ne}var Zn,te,Kn,ne,vn,In,Vn=0,Fn=!1,Wn=!1,nn=!0;if(typeof gn!="function")throw new TypeError(q);return cn=M(cn)||0,E(On)&&(Fn=!!On.leading,Wn="maxWait"in On,Kn=Wn?sn(M(On.maxWait)||0,cn):Kn,nn="trailing"in On?!!On.trailing:nn),Yn.cancel=Xn,Yn.flush=Un,Yn}function E(gn){var cn=typeof gn>"u"?"undefined":B(gn);return!!gn&&(cn=="object"||cn=="function")}function P(gn){return!!gn&&(typeof gn>"u"?"undefined":B(gn))=="object"}function C(gn){return(typeof gn>"u"?"undefined":B(gn))=="symbol"||P(gn)&&An.call(gn)==Y}function M(gn){if(typeof gn=="number")return gn;if(C(gn))return J;if(E(gn)){var cn=typeof gn.valueOf=="function"?gn.valueOf():gn;gn=E(cn)?cn+"":cn}if(typeof gn!="string")return gn===0?gn:+gn;gn=gn.replace(X,"");var On=dn.test(gn);return On||pn.test(gn)?an(gn.slice(2),On?2:8):en.test(gn)?J:+gn}var B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(gn){return typeof gn}:function(gn){return gn&&typeof Symbol=="function"&&gn.constructor===Symbol&&gn!==Symbol.prototype?"symbol":typeof gn},q="Expected a function",J=NaN,Y="[object Symbol]",X=/^\s+|\s+$/g,en=/^[-+]0x[0-9a-f]+$/i,dn=/^0b[01]+$/i,pn=/^0o[0-7]+$/i,an=parseInt,un=(typeof w>"u"?"undefined":B(w))=="object"&&w&&w.Object===Object&&w,mn=(typeof self>"u"?"undefined":B(self))=="object"&&self&&self.Object===Object&&self,fn=un||mn||Function("return this")(),Pn=Object.prototype,An=Pn.toString,sn=Math.max,xn=Math.min,Tn=function(){return fn.Date.now()};f.exports=x}).call(_,(function(){return this})())},function(f,_){function w(B){var q=void 0,J=void 0;for(q=0;q<B.length;q+=1)if(J=B[q],J.dataset&&J.dataset.aos||J.children&&w(J.children))return!0;return!1}function x(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function E(){return!!x()}function P(B,q){var J=window.document,Y=x(),X=new Y(C);M=q,X.observe(J.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function C(B){B&&B.forEach(function(q){var J=Array.prototype.slice.call(q.addedNodes),Y=Array.prototype.slice.call(q.removedNodes),X=J.concat(Y);if(w(X))return M()})}Object.defineProperty(_,"__esModule",{value:!0});var M=function(){};_.default={isSupported:E,ready:P}},function(f,_){function w(J,Y){if(!(J instanceof Y))throw new TypeError("Cannot call a class as a function")}function x(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(_,"__esModule",{value:!0});var E=(function(){function J(Y,X){for(var en=0;en<X.length;en++){var dn=X[en];dn.enumerable=dn.enumerable||!1,dn.configurable=!0,"value"in dn&&(dn.writable=!0),Object.defineProperty(Y,dn.key,dn)}}return function(Y,X,en){return X&&J(Y.prototype,X),en&&J(Y,en),Y}})(),P=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,C=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,M=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,B=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,q=(function(){function J(){w(this,J)}return E(J,[{key:"phone",value:function(){var Y=x();return!(!P.test(Y)&&!C.test(Y.substr(0,4)))}},{key:"mobile",value:function(){var Y=x();return!(!M.test(Y)&&!B.test(Y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),J})();_.default=new q},function(f,_){Object.defineProperty(_,"__esModule",{value:!0});var w=function(E,P,C){var M=E.node.getAttribute("data-aos-once");P>E.position?E.node.classList.add("aos-animate"):typeof M<"u"&&(M==="false"||!C&&M!=="true")&&E.node.classList.remove("aos-animate")},x=function(E,P){var C=window.pageYOffset,M=window.innerHeight;E.forEach(function(B,q){w(B,M+C,P)})};_.default=x},function(f,_,w){function x(M){return M&&M.__esModule?M:{default:M}}Object.defineProperty(_,"__esModule",{value:!0});var E=w(12),P=x(E),C=function(M,B){return M.forEach(function(q,J){q.node.classList.add("aos-init"),q.position=(0,P.default)(q.node,B.offset)}),M};_.default=C},function(f,_,w){function x(M){return M&&M.__esModule?M:{default:M}}Object.defineProperty(_,"__esModule",{value:!0});var E=w(13),P=x(E),C=function(M,B){var q=0,J=0,Y=window.innerHeight,X={offset:M.getAttribute("data-aos-offset"),anchor:M.getAttribute("data-aos-anchor"),anchorPlacement:M.getAttribute("data-aos-anchor-placement")};switch(X.offset&&!isNaN(X.offset)&&(J=parseInt(X.offset)),X.anchor&&document.querySelectorAll(X.anchor)&&(M=document.querySelectorAll(X.anchor)[0]),q=(0,P.default)(M).top,X.anchorPlacement){case"top-bottom":break;case"center-bottom":q+=M.offsetHeight/2;break;case"bottom-bottom":q+=M.offsetHeight;break;case"top-center":q+=Y/2;break;case"bottom-center":q+=Y/2+M.offsetHeight;break;case"center-center":q+=Y/2+M.offsetHeight/2;break;case"top-top":q+=Y;break;case"bottom-top":q+=M.offsetHeight+Y;break;case"center-top":q+=M.offsetHeight/2+Y}return X.anchorPlacement||X.offset||isNaN(B)||(J=B),q+J};_.default=C},function(f,_){Object.defineProperty(_,"__esModule",{value:!0});var w=function(x){for(var E=0,P=0;x&&!isNaN(x.offsetLeft)&&!isNaN(x.offsetTop);)E+=x.offsetLeft-(x.tagName!="BODY"?x.scrollLeft:0),P+=x.offsetTop-(x.tagName!="BODY"?x.scrollTop:0),x=x.offsetParent;return{top:P,left:E}};_.default=w},function(f,_){Object.defineProperty(_,"__esModule",{value:!0});var w=function(x){return x=x||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(x,function(E){return{node:E}})};_.default=w}])})})(aos$1)),aos$1.exports}var aosExports=requireAos();const AOS=getDefaultExportFromCjs(aosExports),scriptRel="modulepreload",assetsURL=function(e){return"/"+e},seen={},__vitePreload=function e(a,f,_){let w=Promise.resolve();if(f&&f.length>0){let C=function(M){return Promise.all(M.map(B=>Promise.resolve(B).then(q=>({status:"fulfilled",value:q}),q=>({status:"rejected",reason:q}))))};document.getElementsByTagName("link");const E=document.querySelector("meta[property=csp-nonce]"),P=E?.nonce||E?.getAttribute("nonce");w=C(f.map(M=>{if(M=assetsURL(M),M in seen)return;seen[M]=!0;const B=M.endsWith(".css"),q=B?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${M}"]${q}`))return;const J=document.createElement("link");if(J.rel=B?"stylesheet":scriptRel,B||(J.as="script"),J.crossOrigin="",J.href=M,P&&J.setAttribute("nonce",P),document.head.appendChild(J),B)return new Promise((Y,X)=>{J.addEventListener("load",Y),J.addEventListener("error",()=>X(new Error(`Unable to preload CSS for ${M}`)))})}))}function x(E){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=E,window.dispatchEvent(P),!P.defaultPrevented)throw E}return w.then(E=>{for(const P of E||[])P.status==="rejected"&&x(P.reason);return a().catch(x)})},router=createRouter({history:createWebHashHistory("/"),routes:[{path:"/",redirect:"/list/1"},{path:"/list/:id",name:"list",component:()=>__vitePreload(()=>import("./BlogList-DsPtS9KY.js"),[]),meta:{showSidebar:!0,showCarousel:!0}},{path:"/post/:id",name:"post",component:()=>__vitePreload(()=>import("./BlogPost-w-HseySR.js"),__vite__mapDeps([0,1,2])),meta:{showSidebar:!0,showCarousel:!0}},{path:"/tags/:tag?",name:"tags",component:()=>__vitePreload(()=>import("./BlogTags-Dcg-v6r2.js"),[]),meta:{showSidebar:!1,showCarousel:!0}},{path:"/about",name:"about",component:()=>__vitePreload(()=>import("./AboutView-BEESSP0D.js"),__vite__mapDeps([3,4])),meta:{showSidebar:!1,showCarousel:!0}},{path:"/login",name:"login",component:()=>__vitePreload(()=>import("./LoginView-SfiBT4YB.js"),[])},{path:"/project",name:"project",component:()=>__vitePreload(()=>import("./ProjectList-DKVA81Mf.js"),__vite__mapDeps([5,1])),meta:{requiresAuth:!0,showSidebar:!1,showCarousel:!1},children:[{path:"",name:"project-overview",component:()=>__vitePreload(()=>import("./ProjectOverview-rpGFKmnT.js"),__vite__mapDeps([6,4]))},{path:"yocue",name:"project-yocue",component:()=>__vitePreload(()=>import("./YocueProject-CMMHS0ia.js"),__vite__mapDeps([7,8,9,10]))},{path:"dprc",name:"project-dprc",component:()=>__vitePreload(()=>import("./DprcProject-HW3dZrBT.js"),__vite__mapDeps([11,8,9,10]))},{path:"tjcos",name:"project-tjcos",component:()=>__vitePreload(()=>import("./TjcosProject-DmBXc4v-.js"),__vite__mapDeps([12,8,9,10]))},{path:"king-shield",name:"project-king-shield",component:()=>__vitePreload(()=>import("./KingShieldProject-DVBVEUlk.js"),__vite__mapDeps([13,9,10]))},{path:"house579",name:"project-house579",component:()=>__vitePreload(()=>import("./House579Project-Dp3gOq9w.js"),__vite__mapDeps([14,8,9,10]))},{path:"home-service",name:"project-home-service",component:()=>__vitePreload(()=>import("./HomeServiceProject-DspJ9ib4.js"),__vite__mapDeps([15,9,10]))},{path:"ciazhan",name:"project-ciazhan",component:()=>__vitePreload(()=>import("./CiazhanProject-C1-1i1Fe.js"),__vite__mapDeps([16,8,10]))},{path:"kumon",name:"project-kumon",component:()=>__vitePreload(()=>import("./KumonProject-ClRGqP9m.js"),__vite__mapDeps([17,8,9,10]))},{path:"magic-abc",name:"project-magic-abc",component:()=>__vitePreload(()=>import("./MagicAbcProject-Bmb1566V.js"),__vite__mapDeps([18,10]))},{path:"cycac",name:"project-cycac",component:()=>__vitePreload(()=>import("./CycacProject-yoxdy_vC.js"),__vite__mapDeps([19,8,10]))},{path:"digital-travel",name:"project-digital-travel",component:()=>__vitePreload(()=>import("./DigitalTravelProject-gUOxGTo6.js"),__vite__mapDeps([20,8,10]))},{path:"ikea",name:"project-ikea",component:()=>__vitePreload(()=>import("./IkeaProject-DZ8Fghn8.js"),__vite__mapDeps([21,10]))}]}]});router.beforeEach((e,a,f)=>{e.meta.requiresAuth?localStorage.getItem("loggedIn")==="true"?f():f({name:"login"}):f()});window.Buffer=bufferExports.Buffer;const app=createApp(_sfc_main);app.use(createPinia());app.use(router);app.mount("#app");AOS.init({once:!0,duration:800});export{__vite_glob_0_154 as $,__vite_glob_0_179 as A,__vite_glob_0_178 as B,__vite_glob_0_177 as C,__vite_glob_0_176 as D,__vite_glob_0_175 as E,Fragment as F,__vite_glob_0_174 as G,__vite_glob_0_173 as H,__vite_glob_0_172 as I,__vite_glob_0_171 as J,__vite_glob_0_170 as K,__vite_glob_0_169 as L,__vite_glob_0_168 as M,__vite_glob_0_167 as N,__vite_glob_0_166 as O,__vite_glob_0_165 as P,__vite_glob_0_164 as Q,__vite_glob_0_163 as R,__vite_glob_0_162 as S,__vite_glob_0_161 as T,__vite_glob_0_160 as U,__vite_glob_0_159 as V,__vite_glob_0_158 as W,__vite_glob_0_157 as X,__vite_glob_0_156 as Y,__vite_glob_0_155 as Z,__vite_glob_0_194 as _,createBaseVNode as a,__vite_glob_0_90 as a$,__vite_glob_0_153 as a0,__vite_glob_0_152 as a1,__vite_glob_0_151 as a2,__vite_glob_0_150 as a3,__vite_glob_0_149 as a4,__vite_glob_0_148 as a5,__vite_glob_0_147 as a6,__vite_glob_0_146 as a7,__vite_glob_0_145 as a8,__vite_glob_0_144 as a9,__vite_glob_0_117 as aA,__vite_glob_0_116 as aB,__vite_glob_0_115 as aC,__vite_glob_0_114 as aD,__vite_glob_0_113 as aE,__vite_glob_0_112 as aF,__vite_glob_0_111 as aG,__vite_glob_0_110 as aH,__vite_glob_0_109 as aI,__vite_glob_0_108 as aJ,__vite_glob_0_107 as aK,__vite_glob_0_106 as aL,__vite_glob_0_105 as aM,__vite_glob_0_104 as aN,__vite_glob_0_103 as aO,__vite_glob_0_102 as aP,__vite_glob_0_101 as aQ,__vite_glob_0_100 as aR,__vite_glob_0_99 as aS,__vite_glob_0_98 as aT,__vite_glob_0_97 as aU,__vite_glob_0_96 as aV,__vite_glob_0_95 as aW,__vite_glob_0_94 as aX,__vite_glob_0_93 as aY,__vite_glob_0_92 as aZ,__vite_glob_0_91 as a_,__vite_glob_0_143 as aa,__vite_glob_0_142 as ab,__vite_glob_0_141 as ac,__vite_glob_0_140 as ad,__vite_glob_0_139 as ae,__vite_glob_0_138 as af,__vite_glob_0_137 as ag,__vite_glob_0_136 as ah,__vite_glob_0_135 as ai,__vite_glob_0_134 as aj,__vite_glob_0_133 as ak,__vite_glob_0_132 as al,__vite_glob_0_131 as am,__vite_glob_0_130 as an,__vite_glob_0_129 as ao,__vite_glob_0_128 as ap,__vite_glob_0_127 as aq,__vite_glob_0_126 as ar,__vite_glob_0_125 as as,__vite_glob_0_124 as at,__vite_glob_0_123 as au,__vite_glob_0_122 as av,__vite_glob_0_121 as aw,__vite_glob_0_120 as ax,__vite_glob_0_119 as ay,__vite_glob_0_118 as az,computed as b,__vite_glob_0_26 as b$,__vite_glob_0_89 as b0,__vite_glob_0_88 as b1,__vite_glob_0_87 as b2,__vite_glob_0_86 as b3,__vite_glob_0_85 as b4,__vite_glob_0_84 as b5,__vite_glob_0_83 as b6,__vite_glob_0_82 as b7,__vite_glob_0_81 as b8,__vite_glob_0_80 as b9,__vite_glob_0_53 as bA,__vite_glob_0_52 as bB,__vite_glob_0_51 as bC,__vite_glob_0_50 as bD,__vite_glob_0_49 as bE,__vite_glob_0_48 as bF,__vite_glob_0_47 as bG,__vite_glob_0_46 as bH,__vite_glob_0_45 as bI,__vite_glob_0_44 as bJ,__vite_glob_0_43 as bK,__vite_glob_0_42 as bL,__vite_glob_0_41 as bM,__vite_glob_0_40 as bN,__vite_glob_0_39 as bO,__vite_glob_0_38 as bP,__vite_glob_0_37 as bQ,__vite_glob_0_36 as bR,__vite_glob_0_35 as bS,__vite_glob_0_34 as bT,__vite_glob_0_33 as bU,__vite_glob_0_32 as bV,__vite_glob_0_31 as bW,__vite_glob_0_30 as bX,__vite_glob_0_29 as bY,__vite_glob_0_28 as bZ,__vite_glob_0_27 as b_,__vite_glob_0_79 as ba,__vite_glob_0_78 as bb,__vite_glob_0_77 as bc,__vite_glob_0_76 as bd,__vite_glob_0_75 as be,__vite_glob_0_74 as bf,__vite_glob_0_73 as bg,__vite_glob_0_72 as bh,__vite_glob_0_71 as bi,__vite_glob_0_70 as bj,__vite_glob_0_69 as bk,__vite_glob_0_68 as bl,__vite_glob_0_67 as bm,__vite_glob_0_66 as bn,__vite_glob_0_65 as bo,__vite_glob_0_64 as bp,__vite_glob_0_63 as bq,__vite_glob_0_62 as br,__vite_glob_0_61 as bs,__vite_glob_0_60 as bt,__vite_glob_0_59 as bu,__vite_glob_0_58 as bv,__vite_glob_0_57 as bw,__vite_glob_0_56 as bx,__vite_glob_0_55 as by,__vite_glob_0_54 as bz,createElementBlock as c,effectInit as c$,__vite_glob_0_25 as c0,__vite_glob_0_24 as c1,__vite_glob_0_23 as c2,__vite_glob_0_22 as c3,__vite_glob_0_21 as c4,__vite_glob_0_20 as c5,__vite_glob_0_19 as c6,__vite_glob_0_18 as c7,__vite_glob_0_17 as c8,__vite_glob_0_16 as c9,render$1 as cA,useRouter as cB,Q$1 as cC,normalizeClass as cD,Transition as cE,V as cF,N$1 as cG,createStaticVNode as cH,withModifiers as cI,withDirectives as cJ,vModelText as cK,Swiper as cL,SwiperSlide as cM,Autoplay as cN,onUnmounted as cO,elementChildren as cP,createElement as cQ,makeElementsArray as cR,setInnerHTML as cS,elementParents as cT,elementOuterSize as cU,elementIndex as cV,getDocument as cW,isObject$1 as cX,now as cY,elementTransitionEnd as cZ,getSlideTransformEl as c_,__vite_glob_0_15 as ca,__vite_glob_0_14 as cb,__vite_glob_0_13 as cc,__vite_glob_0_12 as cd,__vite_glob_0_11 as ce,__vite_glob_0_10 as cf,__vite_glob_0_9 as cg,__vite_glob_0_8 as ch,__vite_glob_0_7 as ci,__vite_glob_0_6 as cj,__vite_glob_0_5 as ck,__vite_glob_0_4 as cl,__vite_glob_0_3 as cm,__vite_glob_0_2 as cn,__vite_glob_0_1 as co,__vite_glob_0_0 as cp,resolveComponent as cq,createVNode as cr,toDisplayString as cs,createTextVNode as ct,unref as cu,__vitePreload as cv,defineComponent as cw,shallowRef as cx,h as cy,watch as cz,onMounted as d,getRotateFix as d0,effectTarget as d1,renderList as e,createBlock as f,createCommentVNode as g,__vite_glob_0_193 as h,__vite_glob_0_192 as i,__vite_glob_0_191 as j,__vite_glob_0_190 as k,__vite_glob_0_189 as l,matter as m,__vite_glob_0_188 as n,openBlock as o,__vite_glob_0_187 as p,__vite_glob_0_186 as q,ref as r,__vite_glob_0_185 as s,__vite_glob_0_184 as t,useRoute as u,__vite_glob_0_183 as v,withCtx as w,__vite_glob_0_182 as x,__vite_glob_0_181 as y,__vite_glob_0_180 as z};
