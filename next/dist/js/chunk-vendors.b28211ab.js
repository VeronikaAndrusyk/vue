"use strict";(self["webpackChunknext"]=self["webpackChunknext"]||[]).push([[998],{223:function(t,e,n){n.d(e,{BH:function(){return v},L:function(){return c},LL:function(){return k},P0:function(){return g},Sg:function(){return b},ZR:function(){return S},aH:function(){return y},eu:function(){return w},hl:function(){return _},m9:function(){return C},vZ:function(){return x}});n(3429),n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296===(64512&o)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++r)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},o=function(t){const e=[];let n=0,r=0;while(n<t.length){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=t[n++],s=t[n++],a=t[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const e=t[o],i=o+1<t.length,s=i?t[o+1]:0,a=o+2<t.length,c=a?t[o+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let f=(15&s)<<2|c>>6,h=63&c;a||(h=64,i||(f=64)),r.push(n[u],n[l],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const e=n[t.charAt(o++)],i=o<t.length,a=i?n[t.charAt(o)]:0;++o;const c=o<t.length,u=c?n[t.charAt(o)]:64;++o;const l=o<t.length,f=l?n[t.charAt(o)]:64;if(++o,null==e||null==a||null==u||null==f)throw new s;const h=e<<2|a>>4;if(r.push(h),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==f){const t=u<<6&192|f;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return i.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>l().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return f()||h()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){try{return"object"===typeof indexedDB}catch(t){return!1}}function w(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,o=this.errors[t],i=o?I(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new S(r,s,n);return a}}function I(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const n=t[o],i=e[o];if(A(n)&&A(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){n.d(e,{B:function(){return s},BK:function(){return Vt},Bj:function(){return i},Fl:function(){return qt},IU:function(){return It},Jd:function(){return I},PG:function(){return wt},SU:function(){return Lt},Um:function(){return vt},WL:function(){return Mt},X$:function(){return C},X3:function(){return kt},XI:function(){return Pt},Xl:function(){return Tt},dq:function(){return Rt},iH:function(){return Dt},j:function(){return x},lk:function(){return T},nZ:function(){return c},qj:function(){return yt},qq:function(){return w},yT:function(){return St}});n(560);var r=n(7139);let o;class i{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!t&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=o;try{return o=this,t()}finally{o=e}}else 0}on(){o=this}off(){o=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function s(t){return new i(t)}function a(t,e=o){e&&e.active&&e.effects.push(t)}function c(){return o}const u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},l=t=>(t.w&g)>0,f=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const o=e[r];l(o)&&!f(o)?o.delete(t):e[n++]=o,o.w&=~g,o.n&=~g}e.length=n}},p=new WeakMap;let m=0,g=1;const y=30;let v;const b=Symbol(""),_=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=v,e=S;while(t){if(t===this)return;t=t.parent}try{return this.parent=v,v=this,S=!0,g=1<<++m,m<=y?h(this):E(this),this.fn()}finally{m<=y&&d(this),g=1<<--m,v=this.parent,S=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let S=!0;const k=[];function I(){k.push(S),S=!1}function T(){const t=k.pop();S=void 0===t||t}function x(t,e,n){if(S&&v){let e=p.get(t);e||p.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=u());const o=void 0;A(r,o)}}function A(t,e){let n=!1;m<=y?f(t)||(t.n|=g,n=!l(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function C(t,e,n,o,i,s){const a=p.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(o);a.forEach(((e,n)=>{("length"===n||!(0,r.yk)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(b)),(0,r._N)(t)&&c.push(a.get(_)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(b)),(0,r._N)(t)&&c.push(a.get(_)));break;case"set":(0,r._N)(t)&&c.push(a.get(b));break}if(1===c.length)c[0]&&O(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);O(u(t))}}function O(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&R(r,e);for(const r of n)r.computed||R(r,e)}function R(t,e){(t!==v||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function D(t,e){var n;return null==(n=p.get(t))?void 0:n.get(e)}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),F=L();function L(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=It(this);for(let e=0,o=this.length;e<o;e++)x(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(It)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){I();const n=It(this)[e].apply(this,t);return T(),n}})),t}function j(t){const e=It(this);return x(e,"has",t),e.hasOwnProperty(t)}class M{constructor(t=!1,e=!1){this._isReadonly=t,this._shallow=e}get(t,e,n){const o=this._isReadonly,i=this._shallow;if("__v_isReactive"===e)return!o;if("__v_isReadonly"===e)return o;if("__v_isShallow"===e)return i;if("__v_raw"===e)return n===(o?i?pt:dt:i?ht:ft).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const s=(0,r.kJ)(t);if(!o){if(s&&(0,r.RI)(F,e))return Reflect.get(F,e,n);if("hasOwnProperty"===e)return j}const a=Reflect.get(t,e,n);return((0,r.yk)(e)?N.has(e):P(e))?a:(o||x(t,"get",e),i?a:Rt(a)?s&&(0,r.S0)(e)?a:a.value:(0,r.Kn)(a)?o?bt(a):yt(a):a)}}class V extends M{constructor(t=!1){super(!1,t)}set(t,e,n,o){let i=t[e];if(!this._shallow){const e=Et(i);if(St(n)||Et(n)||(i=It(i),n=It(n)),!(0,r.kJ)(t)&&Rt(i)&&!Rt(n))return!e&&(i.value=n,!0)}const s=(0,r.kJ)(t)&&(0,r.S0)(e)?Number(e)<t.length:(0,r.RI)(t,e),a=Reflect.set(t,e,n,o);return t===It(o)&&(s?(0,r.aU)(n,i)&&C(t,"set",e,n,i):C(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.RI)(t,e),o=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&C(t,"delete",e,void 0,o),i}has(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||x(t,"has",e),n}ownKeys(t){return x(t,"iterate",(0,r.kJ)(t)?"length":b),Reflect.ownKeys(t)}}class $ extends M{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const U=new V,B=new $,q=new V(!0),H=t=>t,z=t=>Reflect.getPrototypeOf(t);function G(t,e,n=!1,o=!1){t=t["__v_raw"];const i=It(t),s=It(e);n||((0,r.aU)(e,s)&&x(i,"get",e),x(i,"get",s));const{has:a}=z(i),c=o?H:n?At:xt;return a.call(i,e)?c(t.get(e)):a.call(i,s)?c(t.get(s)):void(t!==i&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],o=It(n),i=It(t);return e||((0,r.aU)(t,i)&&x(o,"has",t),x(o,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function K(t,e=!1){return t=t["__v_raw"],!e&&x(It(t),"iterate",b),Reflect.get(t,"size",t)}function W(t){t=It(t);const e=It(this),n=z(e),r=n.has.call(e,t);return r||(e.add(t),C(e,"add",t,t)),this}function Y(t,e){e=It(e);const n=It(this),{has:o,get:i}=z(n);let s=o.call(n,t);s||(t=It(t),s=o.call(n,t));const a=i.call(n,t);return n.set(t,e),s?(0,r.aU)(e,a)&&C(n,"set",t,e,a):C(n,"add",t,e),this}function Q(t){const e=It(this),{has:n,get:r}=z(e);let o=n.call(e,t);o||(t=It(t),o=n.call(e,t));const i=r?r.call(e,t):void 0,s=e.delete(t);return o&&C(e,"delete",t,void 0,i),s}function X(){const t=It(this),e=0!==t.size,n=void 0,r=t.clear();return e&&C(t,"clear",void 0,void 0,n),r}function Z(t,e){return function(n,r){const o=this,i=o["__v_raw"],s=It(i),a=e?H:t?At:xt;return!t&&x(s,"iterate",b),i.forEach(((t,e)=>n.call(r,a(t),a(e),o)))}}function tt(t,e,n){return function(...o){const i=this["__v_raw"],s=It(i),a=(0,r._N)(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...o),f=n?H:e?At:xt;return!e&&x(s,"iterate",u?_:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[f(t[0]),f(t[1])]:f(t),done:e}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function nt(){const t={get(t){return G(this,t)},get size(){return K(this)},has:J,add:W,set:Y,delete:Q,clear:X,forEach:Z(!1,!1)},e={get(t){return G(this,t,!1,!0)},get size(){return K(this)},has:J,add:W,set:Y,delete:Q,clear:X,forEach:Z(!1,!0)},n={get(t){return G(this,t,!0)},get size(){return K(this,!0)},has(t){return J.call(this,t,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Z(!0,!1)},r={get(t){return G(this,t,!0,!0)},get size(){return K(this,!0)},has(t){return J.call(this,t,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Z(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{t[o]=tt(o,!1,!1),n[o]=tt(o,!0,!1),e[o]=tt(o,!1,!0),r[o]=tt(o,!0,!0)})),[t,n,e,r]}const[rt,ot,it,st]=nt();function at(t,e){const n=e?t?st:it:t?ot:rt;return(e,o,i)=>"__v_isReactive"===o?!t:"__v_isReadonly"===o?t:"__v_raw"===o?e:Reflect.get((0,r.RI)(n,o)&&o in e?n:e,o,i)}const ct={get:at(!1,!1)},ut={get:at(!1,!0)},lt={get:at(!0,!1)};const ft=new WeakMap,ht=new WeakMap,dt=new WeakMap,pt=new WeakMap;function mt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:mt((0,r.W7)(t))}function yt(t){return Et(t)?t:_t(t,!1,U,ct,ft)}function vt(t){return _t(t,!1,q,ut,ht)}function bt(t){return _t(t,!0,B,lt,dt)}function _t(t,e,n,o,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=i.get(t);if(s)return s;const a=gt(t);if(0===a)return t;const c=new Proxy(t,2===a?o:n);return i.set(t,c),c}function wt(t){return Et(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function St(t){return!(!t||!t["__v_isShallow"])}function kt(t){return wt(t)||Et(t)}function It(t){const e=t&&t["__v_raw"];return e?It(e):t}function Tt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const xt=t=>(0,r.Kn)(t)?yt(t):t,At=t=>(0,r.Kn)(t)?bt(t):t;function Ct(t){S&&v&&(t=It(t),A(t.dep||(t.dep=u())))}function Ot(t,e){t=It(t);const n=t.dep;n&&O(n)}function Rt(t){return!(!t||!0!==t.__v_isRef)}function Dt(t){return Nt(t,!1)}function Pt(t){return Nt(t,!0)}function Nt(t,e){return Rt(t)?t:new Ft(t,e)}class Ft{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:It(t),this._value=e?t:xt(t)}get value(){return Ct(this),this._value}set value(t){const e=this.__v_isShallow||St(t)||Et(t);t=e?t:It(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:xt(t),Ot(this,t))}}function Lt(t){return Rt(t)?t.value:t}const jt={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const o=t[e];return Rt(o)&&!Rt(n)?(o.value=n,!0):Reflect.set(t,e,n,r)}};function Mt(t){return wt(t)?t:new Proxy(t,jt)}function Vt(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=Ut(t,n);return e}class $t{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return D(It(this._object),this._key)}}function Ut(t,e,n){const r=t[e];return Rt(r)?r:new $t(t,e,n)}class Bt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Ot(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=It(this);return Ct(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qt(t,e,n=!1){let o,i;const s=(0,r.mf)(t);s?(o=t,i=r.dG):(o=t.get,i=t.set);const a=new Bt(o,i,s||!i,n);return a}},3396:function(t,e,n){n.d(e,{$d:function(){return s},Cn:function(){return L},FN:function(){return bn},Fl:function(){return Mn},HY:function(){return Ve},JJ:function(){return fe},Ko:function(){return $t},P$:function(){return ft},Q6:function(){return yt},U2:function(){return dt},Uk:function(){return cn},Us:function(){return De},Wm:function(){return rn},Y3:function(){return v},Y8:function(){return at},YP:function(){return X},_:function(){return nn},aZ:function(){return vt},dD:function(){return F},f3:function(){return he},h:function(){return Vn},iD:function(){return Ye},ic:function(){return Pt},nJ:function(){return ut},nK:function(){return gt},uE:function(){return un},up:function(){return z},w5:function(){return j},wg:function(){return ze},wy:function(){return rt}});n(560);var r=n(4870),o=n(7139);function i(t,e,n,r){let o;try{o=r?t(...r):t()}catch(i){a(i,e,n)}return o}function s(t,e,n,r){if((0,o.mf)(t)){const s=i(t,e,n,r);return s&&(0,o.tI)(s)&&s.catch((t=>{a(t,e,n)})),s}const c=[];for(let o=0;o<t.length;o++)c.push(s(t[o],e,n,r));return c}function a(t,e,n,r=!0){const o=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,s))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,o,s])}c(t,n,o,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const f=[];let h=0;const d=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(t){const e=y||g;return t?e.then(this?t.bind(this):t):e}function b(t){let e=h+1,n=f.length;while(e<n){const r=e+n>>>1,o=f[r],i=T(o);i<t||i===t&&o.pre?e=r+1:n=r}return e}function _(t){f.length&&f.includes(t,u&&t.allowRecurse?h+1:h)||(null==t.id?f.push(t):f.splice(b(t.id),0,t),w())}function w(){u||l||(l=!0,y=g.then(A))}function E(t){const e=f.indexOf(t);e>h&&f.splice(e,1)}function S(t){(0,o.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||d.push(t),w()}function k(t,e,n=(u?h+1:0)){for(0;n<f.length;n++){const e=f[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,f.splice(n,1),n--,e()}}}function I(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>T(t)-T(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const T=t=>null==t.id?1/0:t.id,x=(t,e)=>{const n=T(t)-T(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A(t){l=!1,u=!0,f.sort(x);o.dG;try{for(h=0;h<f.length;h++){const t=f[h];t&&!1!==t.active&&i(t,null,14)}}finally{h=0,f.length=0,I(t),u=!1,y=null,(f.length||d.length)&&A(t)}}function C(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||o.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:s}=r[t]||o.kT;s&&(i=n.map((t=>(0,o.HD)(t)?t.trim():t))),e&&(i=n.map(o.h5))}let u;let l=r[u=(0,o.hR)(e)]||r[u=(0,o.hR)((0,o._A)(e))];!l&&a&&(l=r[u=(0,o.hR)((0,o.rs)(e))]),l&&s(l,t,6,i);const f=r[u+"Once"];if(f){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,s(f,t,6,i)}}function O(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const s=t.emits;let a={},c=!1;if(!(0,o.mf)(t)){const r=t=>{const n=O(t,e,!0);n&&(c=!0,(0,o.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,o.kJ)(s)?s.forEach((t=>a[t]=null)):(0,o.l7)(a,s),(0,o.Kn)(t)&&r.set(t,a),a):((0,o.Kn)(t)&&r.set(t,null),null)}function R(t,e){return!(!t||!(0,o.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,o.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,o.RI)(t,(0,o.rs)(e))||(0,o.RI)(t,e))}let D=null,P=null;function N(t){const e=D;return D=t,P=t&&t.type.__scopeId||null,e}function F(t){P=t}function L(){P=null}function j(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ke(-1);const o=N(e);let i;try{i=t(...n)}finally{N(o),r._d&&Ke(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function M(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[c],slots:u,attrs:l,emit:f,render:h,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let v,b;const _=N(t);try{if(4&n.shapeFlag){const t=i||r,e=t;v=ln(h.call(e,t,d,s,m,p,g)),b=l}else{const t=e;0,v=ln(t.length>1?t(s,{attrs:l,slots:u,emit:f}):t(s,null)),b=e.props?l:V(l)}}catch(E){qe.length=0,a(E,t,1),v=rn(Ue)}let w=v;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=w;t.length&&7&e&&(c&&t.some(o.tR)&&(b=$(b,c)),w=an(w,b))}return n.dirs&&(w=an(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,N(_),v}const V=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,o.F7)(n))&&((e||(e={}))[n]=t[n]);return e},$=(t,e)=>{const n={};for(const r in t)(0,o.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function U(t,e,n){const{props:r,children:o,component:i}=t,{props:s,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!R(u,n))return!0}}return!1}function B(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==t[i]&&!R(n,i))return!0}return!1}function q({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const H="components";function z(t,e){return J(H,t,!0,e)||t}const G=Symbol.for("v-ndc");function J(t,e,n=!0,r=!1){const i=D||vn;if(i){const n=i.type;if(t===H){const t=Ln(n,!1);if(t&&(t===e||t===(0,o._A)(e)||t===(0,o.kC)((0,o._A)(e))))return n}const s=K(i[t]||n[t],e)||K(i.appContext[t],e);return!s&&r?n:s}}function K(t,e){return t&&(t[e]||t[(0,o._A)(e)]||t[(0,o.kC)((0,o._A)(e))])}const W=t=>t.__isSuspense;function Y(t,e){e&&e.pendingBranch?(0,o.kJ)(t)?e.effects.push(...t):e.effects.push(t):S(t)}const Q={};function X(t,e,n){return Z(t,e,n)}function Z(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=o.kT){var f;const h=(0,r.nZ)()===(null==(f=vn)?void 0:f.scope)?vn:null;let d,p,m=!1,g=!1;if((0,r.dq)(t)?(d=()=>t.value,m=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,o.kJ)(t)?(g=!0,m=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?nt(t):(0,o.mf)(t)?i(t,h,2):void 0))):d=(0,o.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return p&&p(),s(t,h,3,[v])}:o.dG,e&&a){const t=d;d=()=>nt(t())}let y,v=t=>{p=S.onStop=()=>{i(t,h,4),p=S.onStop=void 0}};if(An){if(v=o.dG,e?n&&s(e,h,3,[d(),g?[]:void 0,v]):d(),"sync"!==c)return o.dG;{const t=Un();y=t.__watcherHandles||(t.__watcherHandles=[])}}let b=g?new Array(t.length).fill(Q):Q;const w=()=>{if(S.active)if(e){const t=S.run();(a||m||(g?t.some(((t,e)=>(0,o.aU)(t,b[e]))):(0,o.aU)(t,b)))&&(p&&p(),s(e,h,3,[t,b===Q?void 0:g&&b[0]===Q?[]:b,v]),b=t)}else S.run()};let E;w.allowRecurse=!!e,"sync"===c?E=w:"post"===c?E=()=>Re(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),E=()=>_(w));const S=new r.qq(d,E);e?n?w():b=S.run():"post"===c?Re(S.run.bind(S),h&&h.suspense):S.run();const k=()=>{S.stop(),h&&h.scope&&(0,o.Od)(h.scope.effects,S)};return y&&y.push(k),k}function tt(t,e,n){const r=this.proxy,i=(0,o.HD)(t)?t.includes(".")?et(r,t):()=>r[t]:t.bind(r,r);let s;(0,o.mf)(e)?s=e:(s=e.handler,n=e);const a=vn;Sn(this);const c=Z(i,s.bind(r),n);return a?Sn(a):kn(),c}function et(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function nt(t,e){if(!(0,o.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))nt(t.value,e);else if((0,o.kJ)(t))for(let n=0;n<t.length;n++)nt(t[n],e);else if((0,o.DM)(t)||(0,o._N)(t))t.forEach((t=>{nt(t,e)}));else if((0,o.PO)(t))for(const n in t)nt(t[n],e);return t}function rt(t,e){const n=D;if(null===n)return t;const r=Fn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=o.kT]=e[s];t&&((0,o.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&nt(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function ot(t,e,n,o){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[o];l&&((0,r.Jd)(),s(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const it=Symbol("_leaveCb"),st=Symbol("_enterCb");function at(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rt((()=>{t.isMounted=!0})),Nt((()=>{t.isUnmounting=!0})),t}const ct=[Function,Array],ut={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},lt={name:"BaseTransition",props:ut,setup(t,{slots:e}){const n=bn(),o=at();let i;return()=>{const s=e.default&&yt(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Ue){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(o.isLeaving)return pt(a);const l=mt(a);if(!l)return pt(a);const f=dt(l,c,o,n);gt(l,f);const h=n.subTree,d=h&&mt(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==Ue&&(!Xe(l,d)||p)){const t=dt(d,c,o,n);if(gt(d,t),"out-in"===u)return o.isLeaving=!0,t.afterLeave=()=>{o.isLeaving=!1,!1!==n.update.active&&n.update()},pt(a);"in-out"===u&&l.type!==Ue&&(t.delayLeave=(t,e,n)=>{const r=ht(o,d);r[String(d.key)]=d,t[it]=()=>{e(),t[it]=void 0,delete f.delayedLeave},f.delayedLeave=n})}return a}}},ft=lt;function ht(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function dt(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:_}=e,w=String(t.key),E=ht(n,t),S=(t,e)=>{t&&s(t,r,9,e)},k=(t,e)=>{const n=e[1];S(t,e),(0,o.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=y||u}e[it]&&e[it](!0);const o=E[w];o&&Xe(t,o)&&o.el[it]&&o.el[it](),S(r,[e])},enter(t){let e=l,r=f,o=h;if(!n.isMounted){if(!i)return;e=v||l,r=b||f,o=_||h}let s=!1;const a=t[st]=e=>{s||(s=!0,S(e?o:r,[t]),I.delayedLeave&&I.delayedLeave(),t[st]=void 0)};e?k(e,[t,a]):a()},leave(e,r){const o=String(t.key);if(e[st]&&e[st](!0),n.isUnmounting)return r();S(d,[e]);let i=!1;const s=e[it]=n=>{i||(i=!0,r(),S(n?g:m,[e]),e[it]=void 0,E[o]===t&&delete E[o])};E[o]=t,p?k(p,[e,s]):s()},clone(t){return dt(t,e,n,r)}};return I}function pt(t){if(_t(t))return t=an(t),t.children=null,t}function mt(t){return _t(t)?t.children?t.children[0]:void 0:t}function gt(t,e){6&t.shapeFlag&&t.component?gt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yt(t,e=!1,n){let r=[],o=0;for(let i=0;i<t.length;i++){let s=t[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===Ve?(128&s.patchFlag&&o++,r=r.concat(yt(s.children,e,a))):(e||s.type!==Ue)&&r.push(null!=a?an(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function vt(t,e){return(0,o.mf)(t)?(()=>(0,o.l7)({name:t.name},e,{setup:t}))():t}const bt=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const _t=t=>t.type.__isKeepAlive;RegExp,RegExp;function wt(t,e){return(0,o.kJ)(t)?t.some((t=>wt(t,e))):(0,o.HD)(t)?t.split(",").includes(e):!!(0,o.Kj)(t)&&t.test(e)}function Et(t,e){kt(t,"a",e)}function St(t,e){kt(t,"da",e)}function kt(t,e,n=vn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(At(e,r,n),n){let t=n.parent;while(t&&t.parent)_t(t.parent.vnode)&&It(r,e,n,t),t=t.parent}}function It(t,e,n,r){const i=At(e,t,r,!0);Ft((()=>{(0,o.Od)(r[e],i)}),n)}function Tt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function xt(t){return 128&t.shapeFlag?t.ssContent:t}function At(t,e,n=vn,o=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.Jd)(),Sn(n);const i=s(e,n,t,o);return kn(),(0,r.lk)(),i});return o?i.unshift(a):i.push(a),a}}const Ct=t=>(e,n=vn)=>(!An||"sp"===t)&&At(t,((...t)=>e(...t)),n),Ot=Ct("bm"),Rt=Ct("m"),Dt=Ct("bu"),Pt=Ct("u"),Nt=Ct("bum"),Ft=Ct("um"),Lt=Ct("sp"),jt=Ct("rtg"),Mt=Ct("rtc");function Vt(t,e=vn){At("ec",t,e)}function $t(t,e,n,r){let i;const s=n&&n[r];if((0,o.kJ)(t)||(0,o.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,s&&s[n])}else if((0,o.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,s&&s[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=e(t[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Ut=t=>t?In(t)?Fn(t)||t.proxy:Ut(t.parent):null,Bt=(0,o.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ut(t.parent),$root:t=>Ut(t.root),$emit:t=>t.emit,$options:t=>Qt(t),$forceUpdate:t=>t.f||(t.f=()=>_(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>tt.bind(t)}),qt=(t,e)=>t!==o.kT&&!t.__isScriptSetup&&(0,o.RI)(t,e),Ht={get({_:t},e){const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let f;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(qt(i,e))return c[e]=1,i[e];if(s!==o.kT&&(0,o.RI)(s,e))return c[e]=2,s[e];if((f=t.propsOptions[0])&&(0,o.RI)(f,e))return c[e]=3,a[e];if(n!==o.kT&&(0,o.RI)(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const h=Bt[e];let d,p;return h?("$attrs"===e&&(0,r.j)(t,"get",e),h(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==o.kT&&(0,o.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,o.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return qt(i,e)?(i[e]=n,!0):r!==o.kT&&(0,o.RI)(r,e)?(r[e]=n,!0):!(0,o.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||t!==o.kT&&(0,o.RI)(t,a)||qt(e,a)||(c=s[0])&&(0,o.RI)(c,a)||(0,o.RI)(r,a)||(0,o.RI)(Bt,a)||(0,o.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,o.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zt(t){return(0,o.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Gt=!0;function Jt(t){const e=Qt(t),n=t.proxy,i=t.ctx;Gt=!1,e.beforeCreate&&Wt(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:f,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:S,renderTracked:k,renderTriggered:I,errorCaptured:T,serverPrefetch:x,expose:A,inheritAttrs:C,components:O,directives:R,filters:D}=e,P=null;if(f&&Kt(f,i,P),c)for(const r in c){const t=c[r];(0,o.mf)(t)&&(i[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,o.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Gt=!0,a)for(const r in a){const t=a[r],e=(0,o.mf)(t)?t.bind(n,n):(0,o.mf)(t.get)?t.get.bind(n,n):o.dG;0;const s=!(0,o.mf)(t)&&(0,o.mf)(t.set)?t.set.bind(n):o.dG,c=Mn({get:e,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Yt(u[r],i,n,r);if(l){const t=(0,o.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{fe(e,t[e])}))}function N(t,e){(0,o.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(h&&Wt(h,t,"c"),N(Ot,d),N(Rt,p),N(Dt,m),N(Pt,g),N(Et,y),N(St,v),N(Vt,T),N(Mt,k),N(jt,I),N(Nt,_),N(Ft,E),N(Lt,x),(0,o.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});S&&t.render===o.dG&&(t.render=S),null!=C&&(t.inheritAttrs=C),O&&(t.components=O),R&&(t.directives=R)}function Kt(t,e,n=o.dG){(0,o.kJ)(t)&&(t=ne(t));for(const i in t){const n=t[i];let s;s=(0,o.Kn)(n)?"default"in n?he(n.from||i,n.default,!0):he(n.from||i):he(n),(0,r.dq)(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[i]=s}}function Wt(t,e,n){s((0,o.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Yt(t,e,n,r){const i=r.includes(".")?et(n,r):()=>n[r];if((0,o.HD)(t)){const n=e[t];(0,o.mf)(n)&&X(i,n)}else if((0,o.mf)(t))X(i,t.bind(n));else if((0,o.Kn)(t))if((0,o.kJ)(t))t.forEach((t=>Yt(t,e,n,r)));else{const r=(0,o.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,o.mf)(r)&&X(i,r,t)}else 0}function Qt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((t=>Xt(u,t,a,!0))),Xt(u,e,a)):u=e,(0,o.Kn)(e)&&s.set(e,u),u}function Xt(t,e,n,r=!1){const{mixins:o,extends:i}=e;i&&Xt(t,i,n,!0),o&&o.forEach((e=>Xt(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=Zt[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const Zt={data:te,props:ie,emits:ie,methods:oe,computed:oe,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:oe,directives:oe,watch:se,provide:te,inject:ee};function te(t,e){return e?t?function(){return(0,o.l7)((0,o.mf)(t)?t.call(this,this):t,(0,o.mf)(e)?e.call(this,this):e)}:e:t}function ee(t,e){return oe(ne(t),ne(e))}function ne(t){if((0,o.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function oe(t,e){return t?(0,o.l7)(Object.create(null),t,e):e}function ie(t,e){return t?(0,o.kJ)(t)&&(0,o.kJ)(e)?[...new Set([...t,...e])]:(0,o.l7)(Object.create(null),zt(t),zt(null!=e?e:{})):e}function se(t,e){if(!t)return e;if(!e)return t;const n=(0,o.l7)(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function ae(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ce=0;function ue(t,e){return function(n,r=null){(0,o.mf)(n)||(n=(0,o.l7)({},n)),null==r||(0,o.Kn)(r)||(r=null);const i=ae();const s=new WeakSet;let a=!1;const c=i.app={_uid:ce++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Bn,get config(){return i.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,o.mf)(t.install)?(s.add(t),t.install(c,...e)):(0,o.mf)(t)&&(s.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(o,s,u){if(!a){0;const l=rn(n,r);return l.appContext=i,s&&e?e(l,o):t(l,o,u),a=!0,c._container=o,o.__vue_app__=c,Fn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c},runWithContext(t){le=c;try{return t()}finally{le=null}}};return c}}let le=null;function fe(t,e){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[t]=e}else 0}function he(t,e,n=!1){const r=vn||D;if(r||le){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:le._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,o.mf)(e)?e.call(r&&r.proxy):e}else 0}function de(t,e,n,i=!1){const s={},a={};(0,o.Nj)(a,Ze,1),t.propsDefaults=Object.create(null),me(t,e,s,a);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Um)(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function pe(t,e,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(s),[l]=t.propsOptions;let f=!1;if(!(i||c>0)||16&c){let r;me(t,e,s,a)&&(f=!0);for(const i in u)e&&((0,o.RI)(e,i)||(r=(0,o.rs)(i))!==i&&(0,o.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=ge(l,u,i,void 0,t,!0)):delete s[i]);if(a!==u)for(const t in a)e&&(0,o.RI)(e,t)||(delete a[t],f=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(R(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,o.RI)(a,i))c!==a[i]&&(a[i]=c,f=!0);else{const e=(0,o._A)(i);s[e]=ge(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,f=!0)}}f&&(0,r.X$)(t,"set","$attrs")}function me(t,e,n,i){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,o.Gg)(r))continue;const l=e[r];let f;s&&(0,o.RI)(s,f=(0,o._A)(r))?a&&a.includes(f)?(c||(c={}))[f]=l:n[f]=l:R(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||o.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ge(s,e,c,i[c],t,!(0,o.RI)(i,c))}}return u}function ge(t,e,n,r,i,s){const a=t[n];if(null!=a){const t=(0,o.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,o.mf)(t)){const{propsDefaults:o}=i;n in o?r=o[n]:(Sn(i),r=o[n]=t.call(null,e),kn())}else r=t}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,o.rs)(n)||(r=!0))}return r}function ye(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,a={},c=[];let u=!1;if(!(0,o.mf)(t)){const r=t=>{u=!0;const[n,r]=ye(t,e,!0);(0,o.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return(0,o.Kn)(t)&&r.set(t,o.Z6),o.Z6;if((0,o.kJ)(s))for(let f=0;f<s.length;f++){0;const t=(0,o._A)(s[f]);ve(t)&&(a[t]=o.kT)}else if(s){0;for(const t in s){const e=(0,o._A)(t);if(ve(e)){const n=s[t],r=a[e]=(0,o.kJ)(n)||(0,o.mf)(n)?{type:n}:(0,o.l7)({},n);if(r){const t=we(Boolean,r.type),n=we(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,o.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,o.Kn)(t)&&r.set(t,l),l}function ve(t){return"$"!==t[0]}function be(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function _e(t,e){return be(t)===be(e)}function we(t,e){return(0,o.kJ)(e)?e.findIndex((e=>_e(e,t))):(0,o.mf)(e)&&_e(e,t)?0:-1}const Ee=t=>"_"===t[0]||"$stable"===t,Se=t=>(0,o.kJ)(t)?t.map(ln):[ln(t)],ke=(t,e,n)=>{if(e._n)return e;const r=j(((...t)=>Se(e(...t))),n);return r._c=!1,r},Ie=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ee(i))continue;const n=t[i];if((0,o.mf)(n))e[i]=ke(i,n,r);else if(null!=n){0;const t=Se(n);e[i]=()=>t}}},Te=(t,e)=>{const n=Se(e);t.slots.default=()=>n},xe=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,o.Nj)(e,"_",n)):Ie(e,t.slots={})}else t.slots={},e&&Te(t,e);(0,o.Nj)(t.slots,Ze,1)},Ae=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,a=o.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:((0,o.l7)(i,e),n||1!==t||delete i._):(s=!e.$stable,Ie(e,i)),a=e}else e&&(Te(t,e),a={default:1});if(s)for(const o in i)Ee(o)||null!=a[o]||delete i[o]};function Ce(t,e,n,s,a=!1){if((0,o.kJ)(t))return void t.forEach(((t,r)=>Ce(t,e&&((0,o.kJ)(e)?e[r]:e),n,s,a)));if(bt(s)&&!a)return;const c=4&s.shapeFlag?Fn(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:f}=t;const h=e&&e.r,d=l.refs===o.kT?l.refs={}:l.refs,p=l.setupState;if(null!=h&&h!==f&&((0,o.HD)(h)?(d[h]=null,(0,o.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,o.mf)(f))i(f,l,12,[u,d]);else{const e=(0,o.HD)(f),i=(0,r.dq)(f);if(e||i){const r=()=>{if(t.f){const n=e?(0,o.RI)(p,f)?p[f]:d[f]:f.value;a?(0,o.kJ)(n)&&(0,o.Od)(n,c):(0,o.kJ)(n)?n.includes(c)||n.push(c):e?(d[f]=[c],(0,o.RI)(p,f)&&(p[f]=d[f])):(f.value=[c],t.k&&(d[t.k]=f.value))}else e?(d[f]=u,(0,o.RI)(p,f)&&(p[f]=u)):i&&(f.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,Re(r,n)):r()}else 0}}function Oe(){}const Re=Y;function De(t){return Pe(t)}function Pe(t,e){Oe();const n=(0,o.E9)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:f,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=o.dG,insertStaticContent:g}=t,y=(t,e,n,r=null,o=null,i=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Xe(t,e)&&(r=X(t),J(t,o,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=e;switch(u){case $e:v(t,e,n,r);break;case Ue:b(t,e,n,r);break;case Be:null==t&&w(e,n,r,s);break;case Ve:N(t,e,n,r,o,i,s,a,c);break;default:1&f?x(t,e,n,r,o,i,s,a,c):6&f?F(t,e,n,r,o,i,s,a,c):(64&f||128&f)&&u.process(t,e,n,r,o,i,s,a,c,tt)}null!=l&&o&&Ce(l,t&&t.ref,i,e||t,!e)},v=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&f(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let o;while(t&&t!==e)o=p(t),i(t,n,r),t=o;i(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},x=(t,e,n,r,o,i,s,a,c)=>{s=s||"svg"===e.type,null==t?A(e,n,r,o,i,s,a,c):R(t,e,o,i,s,a,c)},A=(t,e,n,r,s,u,l,f)=>{let d,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:b}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&y?h(d,t.children):16&y&&O(t.children,d,null,r,s,u&&"foreignObject"!==m,l,f),b&&ot(t,null,r,"created"),C(d,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,o.Gg)(e)||a(d,e,null,g[e],u,t.children,r,s,Q);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&pn(p,r,t)}b&&ot(t,null,r,"beforeMount");const _=Fe(s,v);_&&v.beforeEnter(d),i(d,e,n),((p=g&&g.onVnodeMounted)||_||b)&&Re((()=>{p&&pn(p,r,t),_&&v.enter(d),b&&ot(t,null,r,"mounted")}),s)},C=(t,e,n,r,o)=>{if(n&&m(t,n),r)for(let i=0;i<r.length;i++)m(t,r[i]);if(o){let n=o.subTree;if(e===n){const e=o.vnode;C(t,e,e.scopeId,e.slotScopeIds,o.parent)}}},O=(t,e,n,r,o,i,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?fn(t[u]):ln(t[u]);y(null,c,e,n,r,o,i,s,a)}},R=(t,e,n,r,i,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||o.kT,m=e.props||o.kT;let g;n&&Ne(n,!1),(g=m.onVnodeBeforeUpdate)&&pn(g,n,e,t),d&&ot(e,t,n,"beforeUpdate"),n&&Ne(n,!0);const y=i&&"foreignObject"!==e.type;if(f?D(t.dynamicChildren,f,u,n,r,y,s):c||B(t,e,u,null,n,r,y,s,!1),l>0){if(16&l)P(u,e,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const o=e.dynamicProps;for(let e=0;e<o.length;e++){const s=o[e],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,i,t.children,n,r,Q)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||P(u,e,p,m,n,r,i);((g=m.onVnodeUpdated)||d)&&Re((()=>{g&&pn(g,n,e,t),d&&ot(e,t,n,"updated")}),r)},D=(t,e,n,r,o,i,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Ve||!Xe(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,o,i,s,!0)}},P=(t,e,n,r,i,s,c)=>{if(n!==r){if(n!==o.kT)for(const u in n)(0,o.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,s,Q);for(const u in r){if((0,o.Gg)(u))continue;const l=r[u],f=n[u];l!==f&&"value"!==u&&a(t,u,f,l,c,e.children,i,s,Q)}"value"in r&&a(t,"value",n.value,r.value)}},N=(t,e,n,r,o,s,a,c,l)=>{const f=e.el=t?t.el:u(""),h=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(i(f,n,r),i(h,n,r),O(e.children,n,h,o,s,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,o,s,a,c),(null!=e.key||o&&e===o.subTree)&&Le(t,e,!0)):B(t,e,n,h,o,s,a,c,l)},F=(t,e,n,r,o,i,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?o.ctx.activate(e,n,r,s,c):L(e,n,r,o,i,s,c):j(t,e,c)},L=(t,e,n,r,o,i,s)=>{const a=t.component=yn(t,r,o);if(_t(t)&&(a.ctx.renderer=tt),Cn(a),a.asyncDep){if(o&&o.registerDep(a,V),!t.el){const t=a.subTree=rn(Ue);b(null,t,e,n)}}else V(a,t,e,n,o,i,s)},j=(t,e,n)=>{const r=e.component=t.component;if(U(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,i,s,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,f=n;0,Ne(t,!1),n?(n.el=l.el,$(t,n,c)):n=l,r&&(0,o.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&pn(e,u,n,l),Ne(t,!0);const h=M(t);0;const p=t.subTree;t.subTree=h,y(p,h,d(p.el),X(p),t,s,a),n.el=h.el,null===f&&q(t,h.el),i&&Re(i,s),(e=n.props&&n.props.onVnodeUpdated)&&Re((()=>pn(e,u,n,l)),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:f,parent:h}=t,d=bt(e);if(Ne(t,!1),l&&(0,o.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&pn(r,h,e),Ne(t,!0),c&&nt){const n=()=>{t.subTree=M(t),nt(c,t.subTree,t,s,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=M(t);0,y(null,r,n,i,t,s,a),e.el=r.el}if(f&&Re(f,s),!d&&(r=u&&u.onVnodeMounted)){const t=e;Re((()=>pn(r,h,t)),s)}(256&e.shapeFlag||h&&bt(h.vnode)&&256&h.vnode.shapeFlag)&&t.a&&Re(t.a,s),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>_(f)),t.scope),f=t.update=()=>l.run();f.id=t.uid,Ne(t,!0),f()},$=(t,e,n)=>{e.component=t;const o=t.vnode.props;t.vnode=e,t.next=null,pe(t,e.props,o,n),Ae(t,e.children,n),(0,r.Jd)(),k(t),(0,r.lk)()},B=(t,e,n,r,o,i,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,f,n,r,o,i,s,a,c);if(256&d)return void H(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&Q(u,o,i),f!==u&&h(n,f)):16&l?16&p?z(u,f,n,r,o,i,s,a,c):Q(u,o,i,!0):(8&l&&h(n,""),16&p&&O(f,n,r,o,i,s,a,c))},H=(t,e,n,r,i,s,a,c,u)=>{t=t||o.Z6,e=e||o.Z6;const l=t.length,f=e.length,h=Math.min(l,f);let d;for(d=0;d<h;d++){const r=e[d]=u?fn(e[d]):ln(e[d]);y(t[d],r,n,null,i,s,a,c,u)}l>f?Q(t,i,s,!0,!1,h):O(e,n,r,i,s,a,c,u,h)},z=(t,e,n,r,i,s,a,c,u)=>{let l=0;const f=e.length;let h=t.length-1,d=f-1;while(l<=h&&l<=d){const r=t[l],o=e[l]=u?fn(e[l]):ln(e[l]);if(!Xe(r,o))break;y(r,o,n,null,i,s,a,c,u),l++}while(l<=h&&l<=d){const r=t[h],o=e[d]=u?fn(e[d]):ln(e[d]);if(!Xe(r,o))break;y(r,o,n,null,i,s,a,c,u),h--,d--}if(l>h){if(l<=d){const t=d+1,o=t<f?e[t].el:r;while(l<=d)y(null,e[l]=u?fn(e[l]):ln(e[l]),n,o,i,s,a,c,u),l++}}else if(l>d)while(l<=h)J(t[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?fn(e[l]):ln(e[l]);null!=t.key&&g.set(t.key,l)}let v,b=0;const _=d-m+1;let w=!1,E=0;const S=new Array(_);for(l=0;l<_;l++)S[l]=0;for(l=p;l<=h;l++){const r=t[l];if(b>=_){J(r,i,s,!0);continue}let o;if(null!=r.key)o=g.get(r.key);else for(v=m;v<=d;v++)if(0===S[v-m]&&Xe(r,e[v])){o=v;break}void 0===o?J(r,i,s,!0):(S[o-m]=l+1,o>=E?E=o:w=!0,y(r,e[o],n,null,i,s,a,c,u),b++)}const k=w?je(S):o.Z6;for(v=k.length-1,l=_-1;l>=0;l--){const t=m+l,o=e[t],h=t+1<f?e[t+1].el:r;0===S[l]?y(null,o,n,h,i,s,a,c,u):w&&(v<0||l!==k[v]?G(o,n,h,2):v--)}}},G=(t,e,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void G(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Ve){i(s,e,n);for(let t=0;t<u.length;t++)G(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Be)return void S(t,e,n);const f=2!==r&&1&l&&c;if(f)if(0===r)c.beforeEnter(s),i(s,e,n),Re((()=>c.enter(s)),o);else{const{leave:t,delayLeave:r,afterLeave:o}=c,a=()=>i(s,e,n),u=()=>{t(s,(()=>{a(),o&&o()}))};r?r(s,a,u):u()}else i(s,e,n)},J=(t,e,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:h}=t;if(null!=a&&Ce(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&h,p=!bt(t);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&pn(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&ot(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,o,tt,r):u&&(i!==Ve||f>0&&64&f)?Q(u,e,n,!1,!0):(i===Ve&&384&f||!o&&16&l)&&Q(c,e,n),r&&K(t)}(p&&(m=s&&s.onVnodeUnmounted)||d)&&Re((()=>{m&&pn(m,e,t),d&&ot(t,null,e,"unmounted")}),n)},K=t=>{const{type:e,el:n,anchor:r,transition:o}=t;if(e===Ve)return void W(n,r);if(e===Be)return void T(t);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&t.shapeFlag&&o&&!o.persisted){const{leave:e,delayLeave:r}=o,s=()=>e(n,i);r?r(t.el,i,s):s()}else i()},W=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},Y=(t,e,n)=>{const{bum:r,scope:i,update:s,subTree:a,um:c}=t;r&&(0,o.ir)(r),i.stop(),s&&(s.active=!1,J(a,t,e,n)),c&&Re(c,e),Re((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Q=(t,e,n,r=!1,o=!1,i=0)=>{for(let s=i;s<t.length;s++)J(t[s],e,n,r,o)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&J(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),k(),I(),e._vnode=t},tt={p:y,um:J,m:G,r:K,mt:L,mc:O,pc:B,pbc:D,n:X,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:ue(Z,et)}}function Ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Le(t,e,n=!1){const r=t.children,i=e.children;if((0,o.kJ)(r)&&(0,o.kJ)(i))for(let o=0;o<r.length;o++){const t=r[o];let e=i[o];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[o]=fn(i[o]),e.el=t.el),n||Le(t,e)),e.type===$e&&(e.el=t.el)}}function je(t){const e=t.slice(),n=[0];let r,o,i,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(o=n[n.length-1],t[o]<c){e[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,t[n[a]]<c?i=a+1:s=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=e[s];return n}const Me=t=>t.__isTeleport;const Ve=Symbol.for("v-fgt"),$e=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),Be=Symbol.for("v-stc"),qe=[];let He=null;function ze(t=!1){qe.push(He=t?null:[])}function Ge(){qe.pop(),He=qe[qe.length-1]||null}let Je=1;function Ke(t){Je+=t}function We(t){return t.dynamicChildren=Je>0?He||o.Z6:null,Ge(),Je>0&&He&&He.push(t),t}function Ye(t,e,n,r,o,i){return We(nn(t,e,n,r,o,i,!0))}function Qe(t){return!!t&&!0===t.__v_isVNode}function Xe(t,e){return t.type===e.type&&t.key===e.key}const Ze="__vInternal",tn=({key:t})=>null!=t?t:null,en=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,o.HD)(t)||(0,r.dq)(t)||(0,o.mf)(t)?{i:D,r:t,k:e,f:!!n}:t:null);function nn(t,e=null,n=null,r=0,i=null,s=(t===Ve?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tn(e),ref:e&&en(e),scopeId:P,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:D};return c?(hn(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=(0,o.HD)(n)?8:16),Je>0&&!a&&He&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&He.push(u),u}const rn=on;function on(t,e=null,n=null,i=0,s=null,a=!1){if(t&&t!==G||(t=Ue),Qe(t)){const r=an(t,e,!0);return n&&hn(r,n),Je>0&&!a&&He&&(6&r.shapeFlag?He[He.indexOf(t)]=r:He.push(r)),r.patchFlag|=-2,r}if(jn(t)&&(t=t.__vccOpts),e){e=sn(e);let{class:t,style:n}=e;t&&!(0,o.HD)(t)&&(e.class=(0,o.C_)(t)),(0,o.Kn)(n)&&((0,r.X3)(n)&&!(0,o.kJ)(n)&&(n=(0,o.l7)({},n)),e.style=(0,o.j5)(n))}const c=(0,o.HD)(t)?1:W(t)?128:Me(t)?64:(0,o.Kn)(t)?4:(0,o.mf)(t)?2:0;return nn(t,e,n,i,s,c,a,!0)}function sn(t){return t?(0,r.X3)(t)||Ze in t?(0,o.l7)({},t):t:null}function an(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=t,c=e?dn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&tn(c),ref:e&&e.ref?n&&i?(0,o.kJ)(i)?i.concat(en(e)):[i,en(e)]:en(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function cn(t=" ",e=0){return rn($e,null,t,e)}function un(t,e){const n=rn(Be,null,t);return n.staticCount=e,n}function ln(t){return null==t||"boolean"===typeof t?rn(Ue):(0,o.kJ)(t)?rn(Ve,null,t.slice()):"object"===typeof t?fn(t):rn($e,null,String(t))}function fn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:an(t)}function hn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,o.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),hn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ze in e?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,o.mf)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function dn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,o.C_)([e.class,r.class]));else if("style"===t)e.style=(0,o.j5)([e.style,r.style]);else if((0,o.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,o.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function pn(t,e,n,r=null){s(t,e,7,[n,r])}const mn=ae();let gn=0;function yn(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||mn,a={uid:gn++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ye(i,s),emitsOptions:O(i,s),emit:null,emitted:null,propsDefaults:o.kT,inheritAttrs:i.inheritAttrs,ctx:o.kT,data:o.kT,props:o.kT,attrs:o.kT,slots:o.kT,refs:o.kT,setupState:o.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=C.bind(null,a),t.ce&&t.ce(a),a}let vn=null;const bn=()=>vn||D;let _n,wn,En="__VUE_INSTANCE_SETTERS__";(wn=(0,o.E9)()[En])||(wn=(0,o.E9)()[En]=[]),wn.push((t=>vn=t)),_n=t=>{wn.length>1?wn.forEach((e=>e(t))):wn[0](t)};const Sn=t=>{_n(t),t.scope.on()},kn=()=>{vn&&vn.scope.off(),_n(null)};function In(t){return 4&t.vnode.shapeFlag}let Tn,xn,An=!1;function Cn(t,e=!1){An=e;const{props:n,children:r}=t.vnode,o=In(t);de(t,n,o,e),xe(t,r);const i=o?On(t,e):void 0;return An=!1,i}function On(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Ht));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Nn(t):null;Sn(t),(0,r.Jd)();const c=i(s,t,0,[t.props,n]);if((0,r.lk)(),kn(),(0,o.tI)(c)){if(c.then(kn,kn),e)return c.then((n=>{Rn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Rn(t,c,e)}else Dn(t,e)}function Rn(t,e,n){(0,o.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,o.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Dn(t,n)}function Dn(t,e,n){const i=t.type;if(!t.render){if(!e&&Tn&&!i.render){const e=i.template||Qt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.l7)((0,o.l7)({isCustomElement:n,delimiters:s},r),a);i.render=Tn(e,c)}}t.render=i.render||o.dG,xn&&xn(t)}Sn(t),(0,r.Jd)();try{Jt(t)}finally{(0,r.lk)(),kn()}}function Pn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function Nn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Pn(t)},slots:t.slots,emit:t.emit,expose:e}}function Fn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Bt?Bt[n](t):void 0},has(t,e){return e in t||e in Bt}}))}function Ln(t,e=!0){return(0,o.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function jn(t){return(0,o.mf)(t)&&"__vccOpts"in t}const Mn=(t,e)=>(0,r.Fl)(t,e,An);function Vn(t,e,n){const r=arguments.length;return 2===r?(0,o.Kn)(e)&&!(0,o.kJ)(e)?Qe(e)?rn(t,null,[e]):rn(t,e):rn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Qe(n)&&(n=[n]),rn(t,e,n))}const $n=Symbol.for("v-scx"),Un=()=>{{const t=he($n);return t}};const Bn="3.3.13"},9242:function(t,e,n){n.d(e,{iM:function(){return vt},nr:function(){return mt},ri:function(){return Et}});n(560);var r=n(3396),o=n(7139),i=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const o=e?a.createElementNS(s,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,o,i){const s=n?n.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(e.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const o=c.content;if(r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},l="transition",f="animation",h=Symbol("_vtc"),d=(t,{slots:e})=>(0,r.h)(r.P$,v(t),e);d.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=d.props=(0,o.l7)({},r.nJ,p),g=(t,e=[])=>{(0,o.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},y=t=>!!t&&((0,o.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function v(t){const e={};for(const o in t)o in p||(e[o]=t[o]);if(!1===t.css)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,v=b(i),_=v&&v[0],k=v&&v[1],{onBeforeEnter:T,onEnter:x,onEnterCancelled:A,onLeave:O,onLeaveCancelled:R,onBeforeAppear:D=T,onAppear:P=x,onAppearCancelled:N=A}=e,F=(t,e,n)=>{E(t,e?f:c),E(t,e?l:a),n&&n()},L=(t,e)=>{t._isLeaving=!1,E(t,h),E(t,m),E(t,d),e&&e()},j=t=>(e,n)=>{const o=t?P:x,i=()=>F(e,t,n);g(o,[e,i]),S((()=>{E(e,t?u:s),w(e,t?f:c),y(o)||I(e,r,_,i)}))};return(0,o.l7)(e,{onBeforeEnter(t){g(T,[t]),w(t,s),w(t,a)},onBeforeAppear(t){g(D,[t]),w(t,u),w(t,l)},onEnter:j(!1),onAppear:j(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>L(t,e);w(t,h),C(),w(t,d),S((()=>{t._isLeaving&&(E(t,h),w(t,m),y(O)||I(t,r,k,n))})),g(O,[t,n])},onEnterCancelled(t){F(t,!1),g(A,[t])},onAppearCancelled(t){F(t,!0),g(N,[t])},onLeaveCancelled(t){L(t),g(R,[t])}})}function b(t){if(null==t)return null;if((0,o.Kn)(t))return[_(t.enter),_(t.leave)];{const e=_(t);return[e,e]}}function _(t){const e=(0,o.He)(t);return e}function w(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[h]||(t[h]=new Set)).add(e)}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[h];n&&(n.delete(e),n.size||(t[h]=void 0))}function S(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let k=0;function I(t,e,n,r){const o=t._endId=++k,i=()=>{o===t._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=T(t,e);if(!s)return r();const u=s+"end";let l=0;const f=()=>{t.removeEventListener(u,h),i()},h=e=>{e.target===t&&++l>=c&&f()};setTimeout((()=>{l<c&&f()}),a+1),t.addEventListener(u,h)}function T(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),o=r(`${l}Delay`),i=r(`${l}Duration`),s=x(o,i),a=r(`${f}Delay`),c=r(`${f}Duration`),u=x(a,c);let h=null,d=0,p=0;e===l?s>0&&(h=l,d=s,p=i.length):e===f?u>0&&(h=f,d=u,p=c.length):(d=Math.max(s,u),h=d>0?s>u?l:f:null,p=h?h===l?i.length:c.length:0);const m=h===l&&/\b(transform|all)(,|$)/.test(r(`${l}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:m}}function x(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>A(e)+A(t[n]))))}function A(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function C(){return document.body.offsetHeight}function O(t,e,n){const r=t[h];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const R=Symbol("_vod");const D=Symbol("");function P(t,e,n){const r=t.style,i=(0,o.HD)(n);if(n&&!i){if(e&&!(0,o.HD)(e))for(const t in e)null==n[t]&&F(r,t,"");for(const t in n)F(r,t,n[t])}else{const o=r.display;if(i){if(e!==n){const t=r[D];t&&(n+=";"+t),r.cssText=n}}else e&&t.removeAttribute("style");R in t&&(r.display=o)}}const N=/\s*!important$/;function F(t,e,n){if((0,o.kJ)(n))n.forEach((n=>F(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=M(t,e);N.test(n)?t.setProperty((0,o.rs)(r),n.replace(N,""),"important"):t[r]=n}}const L=["Webkit","Moz","ms"],j={};function M(t,e){const n=j[e];if(n)return n;let r=(0,o._A)(e);if("filter"!==r&&r in t)return j[e]=r;r=(0,o.kC)(r);for(let o=0;o<L.length;o++){const n=L[o]+r;if(n in t)return j[e]=n}return e}const V="http://www.w3.org/1999/xlink";function $(t,e,n,r,i){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(V,e.slice(6,e.length)):t.setAttributeNS(V,e,n);else{const r=(0,o.Pq)(e);null==n||r&&!(0,o.yA)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function U(t,e,n,r,i,s,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,i,s),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,o=null==n?"":n;return r!==o&&(t.value=o),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,o.yA)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function B(t,e,n,r){t.addEventListener(e,n,r)}function q(t,e,n,r){t.removeEventListener(e,n,r)}const H=Symbol("_vei");function z(t,e,n,r,o=null){const i=t[H]||(t[H]={}),s=i[e];if(r&&s)s.value=r;else{const[n,a]=J(e);if(r){const s=i[e]=Q(r,o);B(t,n,s,a)}else s&&(q(t,n,s,a),i[e]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function J(t){let e;if(G.test(t)){let n;e={};while(n=t.match(G))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,o.rs)(t.slice(2));return[n,e]}let K=0;const W=Promise.resolve(),Y=()=>K||(W.then((()=>K=0)),K=Date.now());function Q(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.$d)(X(t,n.value),e,5,[t])};return n.value=t,n.attached=Y(),n}function X(t,e){if((0,o.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const Z=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tt=(t,e,n,r,i=!1,s,a,c,u)=>{"class"===e?O(t,r,i):"style"===e?P(t,n,r):(0,o.F7)(e)?(0,o.tR)(e)||z(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):et(t,e,r,i))?U(t,e,r,s,a,c,u):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),$(t,e,r,i))};function et(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&Z(e)&&(0,o.mf)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!Z(e)||!(0,o.HD)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const nt=new WeakMap,rt=new WeakMap,ot=Symbol("_moveCb"),it=Symbol("_enterCb"),st={name:"TransitionGroup",props:(0,o.l7)({},m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.FN)(),o=(0,r.Y8)();let s,a;return(0,r.ic)((()=>{if(!s.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!lt(s[0].el,n.vnode.el,e))return;s.forEach(at),s.forEach(ct);const r=s.filter(ut);C(),r.forEach((t=>{const n=t.el,r=n.style;w(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const o=n[ot]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",o),n[ot]=null,E(n,e))};n.addEventListener("transitionend",o)}))})),()=>{const c=(0,i.IU)(t),u=v(c);let l=c.tag||r.HY;s=a,a=e.default?(0,r.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.nK)(e,(0,r.U2)(e,u,o,n))}if(s)for(let t=0;t<s.length;t++){const e=s[t];(0,r.nK)(e,(0,r.U2)(e,u,o,n)),nt.set(e,e.el.getBoundingClientRect())}return(0,r.Wm)(l,null,a)}}};st.props;function at(t){const e=t.el;e[ot]&&e[ot](),e[it]&&e[it]()}function ct(t){rt.set(t,t.el.getBoundingClientRect())}function ut(t){const e=nt.get(t),n=rt.get(t),r=e.left-n.left,o=e.top-n.top;if(r||o){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${o}px)`,e.transitionDuration="0s",t}}function lt(t,e,n){const r=t.cloneNode(),o=t[h];o&&o.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=T(r);return i.removeChild(r),s}const ft=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,o.kJ)(e)?t=>(0,o.ir)(e,t):e};function ht(t){t.target.composing=!0}function dt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pt=Symbol("_assign"),mt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[pt]=ft(i);const s=r||i.props&&"number"===i.props.type;B(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),s&&(r=(0,o.h5)(r)),t[pt](r)})),n&&B(t,"change",(()=>{t.value=t.value.trim()})),e||(B(t,"compositionstart",ht),B(t,"compositionend",dt),B(t,"change",dt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[pt]=ft(s),t.composing)return;const a=i||"number"===t.type?(0,o.h5)(t.value):t.value,c=null==e?"":e;if(a!==c){if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===c)return}t.value=c}}};const gt=["ctrl","shift","alt","meta"],yt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>gt.some((n=>t[`${n}Key`]&&!e.includes(n)))},vt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=yt[e[t]];if(r&&r(n,e))return}return t(n,...r)})},bt=(0,o.l7)({patchProp:tt},u);let _t;function wt(){return _t||(_t=(0,r.Us)(bt))}const Et=(...t)=>{const e=wt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=St(t);if(!r)return;const i=e._component;(0,o.mf)(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function St(t){if((0,o.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){n.d(e,{C_:function(){return Q},DM:function(){return g},E9:function(){return q},F7:function(){return c},Gg:function(){return C},HD:function(){return _},He:function(){return U},Kj:function(){return v},Kn:function(){return E},NO:function(){return a},Nj:function(){return V},Od:function(){return f},PO:function(){return x},Pq:function(){return Z},RI:function(){return d},S0:function(){return A},W7:function(){return T},WV:function(){return nt},Z6:function(){return i},_A:function(){return D},_N:function(){return m},aU:function(){return j},dG:function(){return s},fY:function(){return r},h5:function(){return $},hR:function(){return L},hq:function(){return rt},ir:function(){return M},j5:function(){return G},kC:function(){return F},kJ:function(){return p},kT:function(){return o},l7:function(){return l},mf:function(){return b},rs:function(){return N},tI:function(){return S},tR:function(){return u},yA:function(){return tt},yk:function(){return w},yl:function(){return z},zw:function(){return ot}});n(560);function r(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const o={},i=[],s=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},h=Object.prototype.hasOwnProperty,d=(t,e)=>h.call(t,e),p=Array.isArray,m=t=>"[object Map]"===I(t),g=t=>"[object Set]"===I(t),y=t=>"[object Date]"===I(t),v=t=>"[object RegExp]"===I(t),b=t=>"function"===typeof t,_=t=>"string"===typeof t,w=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,S=t=>(E(t)||b(t))&&b(t.then)&&b(t.catch),k=Object.prototype.toString,I=t=>k.call(t),T=t=>I(t).slice(8,-1),x=t=>"[object Object]"===I(t),A=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,C=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},R=/-(\w)/g,D=O((t=>t.replace(R,((t,e)=>e?e.toUpperCase():"")))),P=/\B([A-Z])/g,N=O((t=>t.replace(P,"-$1").toLowerCase())),F=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),L=O((t=>{const e=t?`on${F(t)}`:"";return e})),j=(t,e)=>!Object.is(t,e),M=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},V=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$=t=>{const e=parseFloat(t);return isNaN(e)?t:e},U=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const q=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",z=r(H);function G(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],o=_(r)?Y(r):G(r);if(o)for(const t in o)e[t]=o[t]}return e}if(_(t)||E(t))return t}const J=/;(?![^(]*\))/g,K=/:([^]+)/,W=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(W,"").split(J).forEach((t=>{if(t){const n=t.split(K);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Q(t){let e="";if(_(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Q(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(X);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=w(t),r=w(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const o=Object.keys(t).length,i=Object.keys(e).length;if(o!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),o=e.hasOwnProperty(n);if(r&&!o||!r&&o||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const ot=t=>_(t)?t:null==t?"":p(t)||E(t)&&(t.toString===k||!b(t.toString))?JSON.stringify(t,it,2):String(t),it=(t,e)=>e&&e.__v_isRef?it(t,e.value):m(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[st(e,r)+" =>"]=n,t)),{})}:g(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>st(t)))}:w(e)?st(e):!E(e)||p(e)||x(e)?e:String(e),st=(t,e="")=>{var n;return w(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},89:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n}},65:function(t,e,n){n.d(e,{MT:function(){return tt},nv:function(){return ot},Se:function(){return rt}});n(560);var r=n(3396),o=n(4870);function i(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,f;function h(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,f=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,f=n.g.perf_hooks.performance):l=!1),l}function d(){return h()?f.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const s in t.settings){const e=t.settings[s];n[s]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(o,e)}catch(i){}this.fallbacks={getSettings(){return o},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(i){}o=t},now(){return d()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,r=s(),o=i(),u=a&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,o):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else o.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function v(t){return null!==t&&"object"===typeof t}function b(t){return t&&"function"===typeof t.then}function _(t,e){return function(){return t(e)}}function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;k(t,n,[],t._modules.root,!0),S(t,n,e)}function S(t,e,n){var i=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},l=(0,o.B)(!0);l.run((function(){y(a,(function(e,n){c[n]=_(e,t),u[n]=(0,r.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=(0,o.qj)({data:e}),t._scope=l,t.strict&&O(t),i&&n&&t._withCommit((function(){i.data=null})),s&&s.stop()}function k(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!i&&!o){var a=R(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=I(t,s,n);r.forEachMutation((function(e,n){var r=s+n;x(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,o=e.handler||e;A(t,r,o,u)})),r.forEachGetter((function(e,n){var r=s+n;C(t,r,e,u)})),r.forEachChild((function(r,i){k(t,e,n.concat(i),r,o)}))}function I(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=D(n,r,o),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,o){var i=D(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return T(t,e)}},state:{get:function(){return R(t.state,n)}}}),o}function T(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function x(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push((function(e){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return b(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):o}))}function C(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return v(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var P="vuex bindings",N="vuex:mutations",F="vuex:actions",L="vuex",j=0;function M(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[P]},(function(n){n.addTimelineLayer({id:N,label:"Vuex Mutations",color:V}),n.addTimelineLayer({id:F,label:"Vuex Actions",color:V}),n.addInspector({id:L,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===L)if(n.filter){var r=[];z(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[H(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===L){var r=n.nodeId;T(e,r),n.state=G(K(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===L){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),e._withCommit((function(){n.set(e._state.data,o,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(L),n.sendInspectorState(L),n.addTimelineEvent({layerId:N,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=j++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:F,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},o=Date.now()-t._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:F,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var V=8702998,$=6710886,U=16777215,B={label:"namespaced",textColor:U,backgroundColor:$};function q(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function H(t,e){return{id:e||"root",label:q(e),tags:t.namespaced?[B]:[],children:Object.keys(t._children).map((function(n){return H(t._children[n],e+n+"/")}))}}function z(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[B]:[]}),Object.keys(e._children).forEach((function(o){z(t,e._children[o],n,r+o+"/")}))}function G(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),o={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var i=J(e);o.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?q(t):t,editable:!1,value:W((function(){return i[t]}))}}))}return o}function J(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var o=e,i=r.pop();r.forEach((function(t){o[t]||(o[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),o=o[t]._custom.value})),o[i]=W((function(){return t[n]}))}else e[n]=W((function(){return t[n]}))})),e}function K(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,o){var i=t[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+e+'".');return o===n.length-1?i:i._children}),"root"===e?t:t.root._children)}function W(t){try{return t()}catch(e){return e}}var Y=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},Q={namespaced:{configurable:!0}};Q.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(t,e){this._children[t]=e},Y.prototype.removeChild=function(t){delete this._children[t]},Y.prototype.getChild=function(t){return this._children[t]},Y.prototype.hasChild=function(t){return t in this._children},Y.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Y.prototype.forEachChild=function(t){y(this._children,t)},Y.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},Y.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},Y.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(Y.prototype,Q);var X=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}X.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},X.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},X.prototype.update=function(t){Z([],this.root,t)},X.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new Y(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&y(e.modules,(function(e,o){r.register(t.concat(o),e,n)}))},X.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},X.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;k(this,u,[],this._modules.root),S(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&M(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,o=D(t,e,n),i=o.type,s=o.payload,a=(o.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=D(t,e),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var o=this;return(0,r.YP)((function(){return t(o.state,o.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),k(this,this.state,t,this._modules.get(t),n.preserveState),S(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=R(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);at((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ct(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0})),n})),at((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=ct(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));var rt=at((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||ct(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0})),n})),ot=at((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=ct(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));function it(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||v(t)}function at(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ct(t,e,n){var r=t._modulesNamespaceMap[n];return r}},509:function(t,e,n){var r=n(9985),o=n(3691),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not a function")}},3550:function(t,e,n){var r=n(9985),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw new i("Can't set "+o(t)+" as a prototype")}},767:function(t,e,n){var r=n(3622),o=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new o("Incorrect invocation")}},5027:function(t,e,n){var r=n(8999),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not an object")}},7075:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(t,e,n){var r,o,i,s=n(7075),a=n(7697),c=n(9037),u=n(9985),l=n(8999),f=n(6812),h=n(926),d=n(3691),p=n(5773),m=n(1880),g=n(2148),y=n(3622),v=n(1868),b=n(9385),_=n(4201),w=n(4630),E=n(618),S=E.enforce,k=E.get,I=c.Int8Array,T=I&&I.prototype,x=c.Uint8ClampedArray,A=x&&x.prototype,C=I&&v(I),O=T&&v(T),R=Object.prototype,D=c.TypeError,P=_("toStringTag"),N=w("TYPED_ARRAY_TAG"),F="TypedArrayConstructor",L=s&&!!b&&"Opera"!==h(c.opera),j=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},$=function(t){if(!l(t))return!1;var e=h(t);return"DataView"===e||f(M,e)||f(V,e)},U=function(t){var e=v(t);if(l(e)){var n=k(e);return n&&f(n,F)?n[F]:U(e)}},B=function(t){if(!l(t))return!1;var e=h(t);return f(M,e)||f(V,e)},q=function(t){if(B(t))return t;throw new D("Target is not a typed array")},H=function(t){if(u(t)&&(!b||y(C,t)))return t;throw new D(d(t)+" is not a typed array constructor")},z=function(t,e,n,r){if(a){if(n)for(var o in M){var i=c[o];if(i&&f(i.prototype,t))try{delete i.prototype[t]}catch(s){try{i.prototype[t]=e}catch(u){}}}O[t]&&!n||m(O,t,n?e:L&&T[t]||e,r)}},G=function(t,e,n){var r,o;if(a){if(b){if(n)for(r in M)if(o=c[r],o&&f(o,t))try{delete o[t]}catch(i){}if(C[t]&&!n)return;try{return m(C,t,n?e:L&&C[t]||e)}catch(i){}}for(r in M)o=c[r],!o||o[t]&&!n||m(o,t,e)}};for(r in M)o=c[r],i=o&&o.prototype,i?S(i)[F]=o:L=!1;for(r in V)o=c[r],i=o&&o.prototype,i&&(S(i)[F]=o);if((!L||!u(C)||C===Function.prototype)&&(C=function(){throw new D("Incorrect invocation")},L))for(r in M)c[r]&&b(c[r],C);if((!L||!O||O===R)&&(O=C.prototype,L))for(r in M)c[r]&&b(c[r].prototype,O);if(L&&v(A)!==O&&b(A,O),a&&!f(O,P))for(r in j=!0,g(O,P,{configurable:!0,get:function(){return l(this)?this[N]:void 0}}),M)c[r]&&p(c[r],N,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:j&&N,aTypedArray:q,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:U,isView:$,isTypedArray:B,TypedArray:C,TypedArrayPrototype:O}},9976:function(t,e,n){var r=n(6310);t.exports=function(t,e,n){var o=0,i=arguments.length>2?n:r(e),s=new t(i);while(i>o)s[o]=e[o++];return s}},4328:function(t,e,n){var r=n(5290),o=n(7578),i=n(6310),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c),l=o(s,u);if(t&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},5649:function(t,e,n){var r=n(7697),o=n(2297),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(o(t)&&!s(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},6166:function(t,e,n){var r=n(6310);t.exports=function(t,e){for(var n=r(t),o=new e(n),i=0;i<n;i++)o[i]=t[n-i-1];return o}},6134:function(t,e,n){var r=n(6310),o=n(8700),i=RangeError;t.exports=function(t,e,n,s){var a=r(t),c=o(n),u=c<0?a+c:c;if(u>=a||u<0)throw new i("Incorrect index");for(var l=new e(a),f=0;f<a;f++)l[f]=f===u?s:t[f];return l}},6648:function(t,e,n){var r=n(8844),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},926:function(t,e,n){var r=n(3043),o=n(9985),i=n(6648),s=n(4201),a=s("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?i(e):"Object"===(r=i(e))&&o(e.callee)?"Arguments":r}},8758:function(t,e,n){var r=n(6812),o=n(9152),i=n(2474),s=n(2560);t.exports=function(t,e,n){for(var a=o(e),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(t,f)||n&&r(n,f)||c(t,f,u(e,f))}}},1748:function(t,e,n){var r=n(3689);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},5773:function(t,e,n){var r=n(7697),o=n(2560),i=n(5684);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},5684:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2148:function(t,e,n){var r=n(8702),o=n(2560);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},1880:function(t,e,n){var r=n(9985),o=n(2560),i=n(8702),s=n(5014);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},5014:function(t,e,n){var r=n(9037),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},7697:function(t,e,n){var r=n(3689);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},6420:function(t,e,n){var r=n(9037),o=n(8999),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},5565:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},7136:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,e,n){var r,o,i=n(9037),s=n(71),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(t,e,n){var r=n(8844),o=Error,i=r("".replace),s=function(t){return String(new o(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9989:function(t,e,n){var r=n(9037),o=n(2474).f,i=n(5773),s=n(1880),a=n(5014),c=n(8758),u=n(5266);t.exports=function(t,e){var n,l,f,h,d,p,m=t.target,g=t.global,y=t.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(f in e){if(d=e[f],t.dontCallGetSet?(p=o(l,f),h=p&&p.value):h=l[f],n=u(g?f:m+(y?".":"#")+f,t.forced),!n&&void 0!==h){if(typeof d==typeof h)continue;c(d,h)}(t.sham||h&&h.sham)&&i(d,"sham",!0),s(l,f,d,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},7215:function(t,e,n){var r=n(3689);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,e,n){var r=n(7215),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1236:function(t,e,n){var r=n(7697),o=n(6812),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},2743:function(t,e,n){var r=n(8844),o=n(509);t.exports=function(t,e,n){try{return r(o(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(i){}}},8844:function(t,e,n){var r=n(7215),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);t.exports=r?s:function(t){return function(){return i.apply(t,arguments)}}},6058:function(t,e,n){var r=n(9037),o=n(9985),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},4849:function(t,e,n){var r=n(509),o=n(981);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},9037:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(t,e,n){var r=n(8844),o=n(690),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},7248:function(t){t.exports={}},8506:function(t,e,n){var r=n(7697),o=n(3689),i=n(6420);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,e,n){var r=n(8844),o=n(3689),i=n(6648),s=Object,a=r("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?a(t,""):s(t)}:s},3457:function(t,e,n){var r=n(9985),o=n(8999),i=n(9385);t.exports=function(t,e,n){var s,a;return i&&r(s=e.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(t,a),t}},6738:function(t,e,n){var r=n(8844),o=n(9985),i=n(4091),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},618:function(t,e,n){var r,o,i,s=n(9834),a=n(9037),c=n(8999),u=n(5773),l=n(6812),f=n(4091),h=n(2713),d=n(7248),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(t){return i(t)?o(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw new m("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var b=f.state||(f.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw new m(p);return e.facade=t,b.set(t,e),e},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var _=h("state");d[_]=!0,r=function(t,e){if(l(t,_))throw new m(p);return e.facade=t,u(t,_,e),e},o=function(t){return l(t,_)?t[_]:{}},i=function(t){return l(t,_)}}t.exports={set:r,get:o,has:i,enforce:y,getterFor:v}},2297:function(t,e,n){var r=n(6648);t.exports=Array.isArray||function(t){return"Array"===r(t)}},9401:function(t,e,n){var r=n(926);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},9985:function(t,e,n){var r=n(2659),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},5266:function(t,e,n){var r=n(3689),o=n(9985),i=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===l||n!==u&&(o(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},981:function(t){t.exports=function(t){return null===t||void 0===t}},8999:function(t,e,n){var r=n(9985),o=n(2659),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},3931:function(t){t.exports=!1},734:function(t,e,n){var r=n(6058),o=n(9985),i=n(3622),s=n(9525),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,a(t))}},6310:function(t,e,n){var r=n(3126);t.exports=function(t){return r(t.length)}},8702:function(t,e,n){var r=n(8844),o=n(3689),i=n(9985),s=n(6812),a=n(7697),c=n(1236).CONFIGURABLE,u=n(6738),l=n(618),f=l.enforce,h=l.get,d=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return s(r,"source")||(r.source=y(b,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return i(this)&&h(this).source||u(this)}),"toString")},8828:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3841:function(t,e,n){var r=n(4327);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2560:function(t,e,n){var r=n(7697),o=n(8506),i=n(5648),s=n(5027),a=n(8360),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",d="writable";e.f=r?i?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},2474:function(t,e,n){var r=n(7697),o=n(2615),i=n(9556),s=n(5684),a=n(5290),c=n(8360),u=n(6812),l=n(8506),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e),l)try{return f(t,e)}catch(n){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},2741:function(t,e,n){var r=n(4948),o=n(2739),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},7518:function(t,e){e.f=Object.getOwnPropertySymbols},1868:function(t,e,n){var r=n(6812),o=n(9985),i=n(690),s=n(2713),a=n(1748),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},3622:function(t,e,n){var r=n(8844);t.exports=r({}.isPrototypeOf)},4948:function(t,e,n){var r=n(8844),o=n(6812),i=n(5290),s=n(4328).indexOf,a=n(7248),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(e.length>u)o(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},9556:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},9385:function(t,e,n){var r=n(2743),o=n(5027),i=n(3550);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},5899:function(t,e,n){var r=n(2615),o=n(9985),i=n(8999),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&o(n=t.toString)&&!i(a=r(n,t)))return a;if(o(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&o(n=t.toString)&&!i(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},9152:function(t,e,n){var r=n(6058),o=n(8844),i=n(2741),s=n(7518),a=n(5027),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=s.f;return n?c(e,n(t)):e}},4684:function(t,e,n){var r=n(981),o=TypeError;t.exports=function(t){if(r(t))throw new o("Can't call method on "+t);return t}},2713:function(t,e,n){var r=n(3430),o=n(4630),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:function(t,e,n){var r=n(9037),o=n(5014),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},3430:function(t,e,n){var r=n(3931),o=n(4091);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.34.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(t,e,n){var r=n(3615),o=n(3689),i=n(9037),s=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(t,e,n){var r=n(8700),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},1530:function(t,e,n){var r=n(8732),o=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new o("Can't convert number to bigint");return BigInt(e)}},5290:function(t,e,n){var r=n(4413),o=n(4684);t.exports=function(t){return r(o(t))}},8700:function(t,e,n){var r=n(8828);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},3126:function(t,e,n){var r=n(8700),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},690:function(t,e,n){var r=n(4684),o=Object;t.exports=function(t){return o(r(t))}},8732:function(t,e,n){var r=n(2615),o=n(8999),i=n(734),s=n(4849),a=n(5899),c=n(4201),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},8360:function(t,e,n){var r=n(8732),o=n(734);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},3043:function(t,e,n){var r=n(4201),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},4327:function(t,e,n){var r=n(926),o=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},3691:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},4630:function(t,e,n){var r=n(8844),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},9525:function(t,e,n){var r=n(146);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,e,n){var r=n(7697),o=n(3689);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(t,e,n){var r=n(9037),o=n(9985),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:function(t,e,n){var r=n(9037),o=n(3430),i=n(6812),s=n(4630),a=n(146),c=n(9525),u=r.Symbol,l=o("wks"),f=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return i(l,t)||(l[t]=a&&i(u,t)?u[t]:f("Symbol."+t)),l[t]}},560:function(t,e,n){var r=n(9989),o=n(690),i=n(6310),s=n(5649),a=n(5565),c=n(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=o(this),n=i(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},4224:function(t,e,n){var r=n(6166),o=n(4872),i=o.aTypedArray,s=o.exportTypedArrayMethod,a=o.getTypedArrayConstructor;s("toReversed",(function(){return r(i(this),a(this))}))},1121:function(t,e,n){var r=n(4872),o=n(8844),i=n(509),s=n(9976),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=o(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&i(t);var e=a(this),n=s(c(e),e);return l(n,t)}))},7133:function(t,e,n){var r=n(6134),o=n(4872),i=n(9401),s=n(8700),a=n(1530),c=o.aTypedArray,u=o.getTypedArrayConstructor,l=o.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),o=s(t),l=i(n)?a(e):+e;return r(n,u(n),o,l)}}["with"],!f)},3429:function(t,e,n){var r=n(9989),o=n(9037),i=n(6058),s=n(5684),a=n(2560).f,c=n(6812),u=n(767),l=n(3457),f=n(3841),h=n(7136),d=n(6610),p=n(7697),m=n(3931),g="DOMException",y=i("Error"),v=i(g),b=function(){u(this,_);var t=arguments.length,e=f(t<1?void 0:arguments[0]),n=f(t<2?void 0:arguments[1],"Error"),r=new v(e,n),o=new y(e);return o.name=g,a(r,"stack",s(1,d(o.stack,1))),l(r,this,b),r},_=b.prototype=v.prototype,w="stack"in new y(g),E="stack"in new v(1,2),S=v&&p&&Object.getOwnPropertyDescriptor(o,g),k=!!S&&!(S.writable&&S.configurable),I=w&&!k&&!E;r({global:!0,constructor:!0,forced:m||I},{DOMException:I?b:v});var T=i(g),x=T.prototype;if(x.constructor!==T)for(var A in m||a(x,"constructor",s(1,T)),h)if(c(h,A)){var C=h[A],O=C.s;c(T,O)||a(T,O,s(6,C.c))}},7077:function(t,e,n){n.d(e,{Jn:function(){return mt},qX:function(){return ft},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return gt},KN:function(){return vt}});n(560);var r=n(7142),o=n(5168),i=n(223);n(3429);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&f.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(h.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));h.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return h.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){v=t(v)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(S(this),e),E(f.get(this))}:function(...e){return E(t.apply(S(this),e))}:function(e,...n){const r=t.call(S(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function w(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&y(t),s(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const S=t=>m.get(t);function k(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(t=>o(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],x=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(x.get(e))return x.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!I.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),o&&i.done]))[0]};return x.set(e,i),i}b((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",D="0.9.25",P=new o.Yd("@firebase/app"),N="@firebase/app-compat",F="@firebase/analytics-compat",L="@firebase/analytics",j="@firebase/app-check-compat",M="@firebase/app-check",V="@firebase/auth",$="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",J="@firebase/messaging",K="@firebase/messaging-compat",W="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",ot="10.7.1",it="[DEFAULT]",st={[R]:"fire-core",[N]:"fire-core-compat",[L]:"fire-analytics",[F]:"fire-analytics-compat",[M]:"fire-app-check",[j]:"fire-app-check-compat",[V]:"fire-auth",[$]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[J]:"fire-fcm",[K]:"fire-fcm-compat",[W]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){P.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return P.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ft(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new i.LL("app","Firebase",ht);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=ot;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const o=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=o.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.aH)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(o,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ct.values())c.addComponent(r);const u=new pt(n,o,c);return at.set(s,u),u}function yt(t=it){const e=at.get(t);if(!e&&t===it&&(0,i.aH)())return gt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var o;let i=null!==(o=st[t])&&void 0!==o?o:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void P.warn(t.join(" "))}lt(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",_t=1,wt="firebase-heartbeat-store";let Et=null;function St(){return Et||(Et=k(bt,_t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function kt(t){try{const e=await St(),n=await e.transaction(wt).objectStore(wt).get(Tt(t));return n}catch(e){if(e instanceof i.ZR)P.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});P.warn(t.message)}}}async function It(t,e){try{const n=await St(),r=n.transaction(wt,"readwrite"),o=r.objectStore(wt);await o.put(e,Tt(t)),await r.done}catch(n){if(n instanceof i.ZR)P.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(t.message)}}}function Tt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1024,At=2592e6;class Ct{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),o=Ot();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==o&&!this._heartbeatsCache.heartbeats.some((t=>t.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ot(),{heartbeatsToSend:n,unsentEntries:r}=Rt(this._heartbeatsCache.heartbeats),o=(0,i.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=xt){const n=[];let r=t.slice();for(const o of t){const t=n.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Pt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){lt(new r.wA("platform-logger",(t=>new C(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ct(t)),"PRIVATE")),vt(R,D,t),vt(R,D,"esm2017"),vt("fire-js","")}Nt("")},7142:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return o}});var r=n(223);class o{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(o);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(t),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&t(i,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const o of n)try{o(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){n.d(e,{Yd:function(){return u},in:function(){return o}});n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var o;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),o=a[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}},7795:function(t,e,n){n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),o="firebase",i="10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(o,i,"app")},1066:function(t,e,n){n.d(e,{ET:function(){return Zn},hJ:function(){return cn},oe:function(){return Xn},JU:function(){return un},PL:function(){return Yn},ad:function(){return nn},IO:function(){return Un},r7:function(){return Qn},ar:function(){return qn}});n(560),n(4224),n(1121),n(7133),n(3429);var r=n(7077),o=n(7142),i=n(5168),s=n(223);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new i.Yd("@firebase/firestore");function l(t,...e){if(u.logLevel<=i["in"].DEBUG){const n=e.map(d);u.debug(`Firestore (${c}): ${t}`,...n)}}function f(t,...e){if(u.logLevel<=i["in"].ERROR){const n=e.map(d);u.error(`Firestore (${c}): ${t}`,...n)}}function h(t,...e){if(u.logLevel<=i["in"].WARN){const n=e.map(d);u.warn(`Firestore (${c}): ${t}`,...n)}}function d(t){if("string"==typeof t)return t;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw f(e),new Error(e)}function m(t,e){t||p()}function g(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y="ok",v="cancelled",b="unknown",_="invalid-argument",w="deadline-exceeded",E="not-found",S="permission-denied",k="unauthenticated",I="resource-exhausted",T="failed-precondition",x="aborted",A="out-of-range",C="unimplemented",O="internal",R="unavailable";class D extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(a.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class L{constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(m("string"==typeof t.accessToken),new P(t.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class j{constructor(t,e,n){this.t=t,this.i=e,this.o=n,this.type="FirstParty",this.user=a.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const t=this.l();return t&&this.u.set("Authorization",t),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class M{constructor(t,e,n){this.t=t,this.i=e,this.o=n}getToken(){return Promise.resolve(new j(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable((()=>e(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class V{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ${constructor(t){this.h=t,this.appCheck=null,t.onInit((t=>{this.appCheck=t}))}getToken(){return this.appCheck?this.appCheck.getToken().then((t=>t?(m("string"==typeof t.token),new V(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n,r,o,i,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class B{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new B("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof B&&t.projectId===this.projectId&&t.database===this.database}}class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&p(),void 0===n?n=t.length-e:n>t.length-e&&p(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),o=e.get(r);if(n<o)return-1;if(n>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends q{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(_,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new H(e)}static emptyPath(){return new H([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends q{construct(t,e,n){return new G(t,e,n)}static isValidIdentifier(t){return z.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const o=()=>{if(0===n.length)throw new D(_,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new D(_,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new D(_,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(o(),r++)}if(o(),i)throw new D(_,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.path=t}static fromPath(t){return new J(H.fromString(t))}static fromName(t){return new J(H.fromString(t).popFirst(5))}static empty(){return new J(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===H.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new J(new H(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){if(!n)throw new D(_,`Function ${t}() cannot be called with an empty ${e}.`)}function W(t){if(!J.isDocumentKey(t))throw new D(_,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y(t){if(J.isDocumentKey(t))throw new D(_,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Q(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":p()}function X(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Q(t);throw new D(_,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let tt=null;function et(){return null===tt?tt=function(){return 268435456+Math.round(2147483648*Math.random())}():tt++,"0x"+tt.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function nt(t){return null==t}function rt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,st;function at(t){if(void 0===t)return f("RPC_ERROR","HTTP error has no status"),b;switch(t){case 200:return y;case 400:return T;case 401:return k;case 403:return S;case 404:return E;case 409:return x;case 416:return A;case 429:return I;case 499:return v;case 500:return b;case 501:return C;case 503:return R;case 504:return w;default:return t>=200&&t<300?y:t>=400&&t<500?T:t>=500&&t<600?O:b}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(st=it||(it={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";class ct extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.m=e+"://"+t.host,this.A=`projects/${n}/databases/${r}`,this.T="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get P(){return!1}R(t,e,n,r,o){const i=et(),s=this.I(t,e);l("RestConnection",`Sending RPC '${t}' ${i}:`,s,n);const a={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(a,r,o),this.p(t,s,a,n).then((e=>(l("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw h("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",s,"request:",n),e}))}g(t,e,n,r,o,i){return this.R(t,e,n,r,o)}V(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+c}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}I(t,e){const n=ot[t];return`${this.m}/v1/${e}:${n}`}}{constructor(t,e){super(t),this.F=e}v(t,e){throw new Error("Not supported by FetchConnection")}async p(t,e,n,r){var o;const i=JSON.stringify(r);let s;try{s=await this.F(e,{method:"POST",headers:n,body:i})}catch(t){const e=t;throw new D(at(e.status),"Request failed with error: "+e.statusText)}if(!s.ok){let t=await s.json();Array.isArray(t)&&(t=t[0]);const e=null===(o=null==t?void 0:t.error)||void 0===o?void 0:o.message;throw new D(at(s.status),`Request failed with error: ${null!=e?e:s.statusText}`)}return s.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ut(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<e&&(n+=t.charAt(r[o]%t.length))}return n}}function ft(t,e){return t<e?-1:t>e?1:0}function ht(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new mt("Invalid base64 string: "+t):t}}(t);return new gt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const yt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(t){if(m(!!t),"string"==typeof t){let e=0;const n=yt.exec(t);if(m(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:bt(t.seconds),nanos:bt(t.nanos)}}function bt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function _t(t){return"string"==typeof t?gt.fromBase64String(t):gt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(_,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(_,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(_,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(_,"Timestamp seconds out of range: "+t)}static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new wt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ft(this.nanoseconds,t.nanoseconds):ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function St(t){const e=t.mapValue.fields.__previous_value__;return Et(e)?St(e):e}function kt(t){const e=vt(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={fields:{__type__:{stringValue:"__max__"}}};function Tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Et(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
  * @license
  * Copyright 2022 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(t)?9007199254740991:10:p()}function xt(t,e){if(t===e)return!0;const n=Tt(t);if(n!==Tt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kt(t).isEqual(kt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=vt(t.timestampValue),r=vt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return _t(t.bytesValue).isEqual(_t(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return bt(t.geoPointValue.latitude)===bt(e.geoPointValue.latitude)&&bt(t.geoPointValue.longitude)===bt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return bt(t.integerValue)===bt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=bt(t.doubleValue),r=bt(e.doubleValue);return n===r?rt(n)===rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ht(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(dt(n)!==dt(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!xt(n[o],r[o])))return!1;return!0}(t,e);default:return p()}}function At(t,e){return void 0!==(t.values||[]).find((t=>xt(t,e)))}function Ct(t,e){if(t===e)return 0;const n=Tt(t),r=Tt(e);if(n!==r)return ft(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ft(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=bt(t.integerValue||t.doubleValue),r=bt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ot(t.timestampValue,e.timestampValue);case 4:return Ot(kt(t),kt(e));case 5:return ft(t.stringValue,e.stringValue);case 6:return function(t,e){const n=_t(t),r=_t(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let o=0;o<n.length&&o<r.length;o++){const t=ft(n[o],r[o]);if(0!==t)return t}return ft(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ft(bt(t.latitude),bt(e.latitude));return 0!==n?n:ft(bt(t.longitude),bt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const t=Ct(n[o],r[o]);if(t)return t}return ft(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===It&&e===It)return 0;if(t===It)return 1;if(e===It)return-1;const n=t.fields||{},r=Object.keys(n),o=e.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let s=0;s<r.length&&s<i.length;++s){const t=ft(r[s],i[s]);if(0!==t)return t;const e=Ct(n[r[s]],o[i[s]]);if(0!==e)return e}return ft(r.length,i.length)}(t.mapValue,e.mapValue);default:throw p()}}function Ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ft(t,e);const n=vt(t),r=vt(e),o=ft(n.seconds,r.seconds);return 0!==o?o:ft(n.nanos,r.nanos)}function Rt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dt(t){return!!t&&"arrayValue"in t}function Pt(t){return!!t&&"nullValue"in t}function Nt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ft(t){return!!t&&"mapValue"in t}function Lt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Lt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lt(t.arrayValue.values[n]);return e}return Object.assign({},t)}class jt{constructor(t,e){this.position=t,this.inclusive=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{}class Vt extends Mt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ut(t,e,n):"array-contains"===e?new zt(t,n):"in"===e?new Gt(t,n):"not-in"===e?new Jt(t,n):"array-contains-any"===e?new Kt(t,n):new Vt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Bt(t,n):new qt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ct(e,this.value)):null!==e&&Tt(this.value)===Tt(e)&&this.matchesComparison(Ct(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Mt{constructor(t,e){super(),this.filters=t,this.op=e,this.D=null}static create(t,e){return new $t(t,e)}matches(t){return function(t){return"and"===t.op}(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class Ut extends Vt{constructor(t,e,n){super(t,e,n),this.key=J.fromName(n.referenceValue)}matches(t){const e=J.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bt extends Vt{constructor(t,e){super(t,"in",e),this.keys=Ht("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class qt extends Vt{constructor(t,e){super(t,"not-in",e),this.keys=Ht("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ht(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>J.fromName(t.referenceValue)))}class zt extends Vt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dt(e)&&At(e.arrayValue,this.value)}}class Gt extends Vt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&At(this.value.arrayValue,e)}}class Jt extends Vt{constructor(t,e){super(t,"not-in",e)}matches(t){if(At(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!At(this.value.arrayValue,e)}}class Kt extends Vt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>At(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e="asc"){this.field=t,this.dir=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Yt(t)}static min(){return new Yt(new wt(0,0))}static max(){return new Yt(new wt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){this.comparator=t,this.root=e||Zt.EMPTY}insert(t,e){return new Qt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(t){return new Qt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xt(this.root,t,this.comparator,!0)}}class Xt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&r&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(0===o){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Zt{constructor(t,e,n,r,o){this.key=t,this.value=e,this.color=null!=n?n:Zt.RED,this.left=null!=r?r:Zt.EMPTY,this.right=null!=o?o:Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,o){return new Zt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const o=n(t,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===o?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Zt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const t=this.left.check();if(t!==this.right.check())throw p();return t+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1,Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(t,e,n,r,o){return this}insert(t,e,n){return new Zt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(t){this.comparator=t,this.data=new Qt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ee(this.data.getIterator())}getIteratorFrom(t){return new ee(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof te))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new te(this.comparator);return e.data=t,e}}class ee{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new ne([])}unionWith(t){let e=new te(G.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ht(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.value=t}static empty(){return new re({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ft(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lt(e)}setAll(t){let e=G.emptyPath(),n={},r=[];t.forEach(((t,o)=>{if(!e.isImmediateParentOf(o)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=o.popLast()}t?n[o.lastSegment()]=Lt(t):r.push(o.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,r)}delete(t){const e=this.field(t.popLast());Ft(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ft(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){pt(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new re(Lt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e,n,r,o,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=s}static newInvalidDocument(t){return new oe(t,0,Yt.min(),Yt.min(),Yt.min(),re.empty(),0)}static newFoundDocument(t,e,n,r){return new oe(t,1,e,Yt.min(),n,r,0)}static newNoDocument(t,e){return new oe(t,2,e,Yt.min(),Yt.min(),re.empty(),0)}static newUnknownDocument(t,e){return new oe(t,3,e,Yt.min(),Yt.min(),re.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Yt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=re.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e=null,n=[],r=[],o=null,i=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=s,this.C=null}}function se(t,e=null,n=[],r=[],o=null,i=null,s=null){return new ie(t,e,n,r,o,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e=null,n=[],r=[],o=null,i="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=s,this.endAt=a,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function ce(t){return null!==t.collectionGroup}function ue(t){const e=g(t);if(null===e.S){e.S=[];const t=new Set;for(const o of e.explicitOrderBy)e.S.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new te(G.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.S.push(new Wt(r,n))})),t.has(G.keyField().canonicalString())||e.S.push(new Wt(G.keyField(),n))}return e.S}function le(t){const e=g(t);return e.N||(e.N=fe(e,ue(t))),e.N}function fe(t,e){if("F"===t.limitType)return se(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Wt(t.field,e)}));const n=t.endAt?new jt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jt(t.startAt.position,t.startAt.inclusive):null;return se(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function he(t,e){const n=t.filters.concat([e]);return new ae(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rt(e)?"-0":e}}(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this._=void 0}}class me extends pe{}class ge extends pe{constructor(t){super(),this.elements=t}}class ye extends pe{constructor(t){super(),this.elements=t}}class ve extends pe{constructor(t,e){super(),this.serializer=t,this.q=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new be}static exists(t){return new be(void 0,t)}static updateTime(t){return new be(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class _e{}class we extends _e{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ee extends _e{constructor(t,e,n,r,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}class Se extends _e{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ke extends _e{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Te=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),xe=(()=>{const t={and:"AND",or:"OR"};return t})();class Ae{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ce(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oe(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Re(t,e){return Ce(t,e.toTimestamp())}function De(t){return m(!!t),Yt.fromTimestamp(function(t){const e=vt(t);return new wt(e.seconds,e.nanos)}(t))}function Pe(t,e){return function(t){return new H(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ne(t,e){return Pe(t.databaseId,e.path)}function Fe(t,e){const n=function(t){const e=H.fromString(t);return m(Je(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(function(t){return m(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(n))}function Le(t,e){return Pe(t.databaseId,e)}function je(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Me(t,e,n){return{name:Ne(t,e),fields:n.value.mapValue.fields}}function Ve(t,e){let n;if(e instanceof we)n={update:Me(t,e.key,e.value)};else if(e instanceof Se)n={delete:Ne(t,e.key)};else if(e instanceof Ee)n={update:Me(t,e.key,e.data),updateMask:Ge(e.fieldMask)};else{if(!(e instanceof ke))return p();n={verify:Ne(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof me)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ye)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),increment:n.q};throw p()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Re(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:p()}(t,e.precondition)),n}function $e(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Le(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Le(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(t){if(0!==t.length)return ze($t.create(t,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:He(t.field),direction:Ue(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const s=function(t,e){return t.useProto3Json||nt(e)?e:{value:e}}(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ue(t){return Ie[t]}function Be(t){return Te[t]}function qe(t){return xe[t]}function He(t){return{fieldPath:t.canonicalString()}}function ze(t){return t instanceof Vt?function(t){if("=="===t.op){if(Nt(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NAN"}};if(Pt(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Nt(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NOT_NAN"}};if(Pt(t.value))return{unaryFilter:{field:He(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:He(t.field),op:Be(t.op),value:t.value}}}(t):t instanceof $t?function(t){const e=t.getFilters().map((t=>ze(t)));return 1===e.length?e[0]:{compositeFilter:{op:qe(t.op),filters:e}}}(t):p()}function Ge(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Je(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return new Ae(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.J=!1}Y(){if(this.J)throw new D(T,"The client has already been terminated.")}R(t,e,n){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.R(t,e,n,r,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===k&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new D(b,t.toString())}))}g(t,e,n,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.g(t,e,n,o,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===k&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new D(b,t.toString())}))}terminate(){this.J=!0}}async function Ye(t,e){const n=g(t),r=je(n.serializer)+"/documents",o={writes:e.map((t=>Ve(n.serializer,t)))};await n.R("Commit",r,o)}async function Qe(t,e){const n=g(t),r=$e(n.serializer,le(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((t=>!!t.document)).map((t=>function(t,e,n){const r=Fe(t,e.name),o=De(e.updateTime),i=e.createTime?De(e.createTime):Yt.min(),s=new re({mapValue:{fields:e.fields}}),a=oe.newFoundDocument(r,o,i,s);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(n.serializer,t.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe=new Map;function Ze(t){if(t._terminated)throw new D(T,"The client has already been terminated.");if(!Xe.has(t)){l("ComponentProvider","Initializing Datastore");const e=function(t){return new ct(t,fetch.bind(null))}(function(t,e,n,r){return new U(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Z(r.experimentalLongPollingOptions),r.useFetchStreams)}
/**
      * @license
      * Copyright 2018 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Ke(t._databaseId),r=function(t,e,n,r){return new We(t,e,n,r)}(t._authCredentials,t._appCheckCredentials,e,n);Xe.set(t,r)}return Xe.get(t)}class tn{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new D(_,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new D(_,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}!function(t,e,n,r){if(!0===e&&!0===r)throw new D(_,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new D(_,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new D(_,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new D(_,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class en{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(T,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new D(T,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tn(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new N;switch(t.type){case"firstParty":return new M(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new D(_,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xe.get(t);e&&(l("ComponentProvider","Removing Datastore"),Xe.delete(t),e.terminate())}(this),Promise.resolve()}}function nn(t,e){const n="object"==typeof t?t:(0,r.Mq)(),o="string"==typeof t?t:e||"(default)",i=(0,r.qX)(n,"firestore/lite").getImmediate({identifier:o});if(!i._initialized){const t=(0,s.P0)("firestore");t&&rn(i,...t)}return i}function rn(t,e,n,r={}){var o;const i=(t=X(t,en))._getSettings(),c=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==c&&h("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:c,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=a.MOCK_USER;else{e=(0,s.Sg)(r.mockUserToken,null===(o=t._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new D(_,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(i)}t._authCredentials=new F(new P(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new on(this.firestore,t,this._query)}}class sn{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sn(this.firestore,t,this._key)}}class an extends on{constructor(t,e,n){super(t,e,function(t){return new ae(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sn(this.firestore,null,new J(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function cn(t,e,...n){if(t=(0,s.m9)(t),K("collection","path",e),t instanceof en){const r=H.fromString(e,...n);return Y(r),new an(t,null,r)}{if(!(t instanceof sn||t instanceof an))throw new D(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return Y(r),new an(t.firestore,null,r)}}function un(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=lt.newId()),K("doc","path",e),t instanceof en){const r=H.fromString(e,...n);return W(r),new sn(t,null,new J(r))}{if(!(t instanceof sn||t instanceof an))throw new D(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return W(r),new sn(t.firestore,t instanceof an?t.converter:null,new J(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ln(gt.fromBase64String(t))}catch(t){throw new D(_,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ln(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new D(_,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(_,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(_,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ft(this._lat,t._lat)||ft(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=/^__.*__$/;class mn{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new we(t,this.data,e,this.fieldTransforms)}}class gn{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yn(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class vn{constructor(t,e,n,r,o,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===o&&this.X(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(t){return new vn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.et({path:n,nt:!1});return r.it(t),r}st(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.et({path:n,nt:!1});return r.X(),r}ot(t){return this.et({path:void 0,nt:!0})}ut(t){return Pn(t,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}X(){if(this.path)for(let t=0;t<this.path.length;t++)this.it(this.path.get(t))}it(t){if(0===t.length)throw this.ut("Document fields must not be empty");if(yn(this.tt)&&pn.test(t))throw this.ut('Document fields cannot begin and end with "__"')}}class bn{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ke(t)}lt(t,e,n,r=!1){return new vn({tt:t,methodName:e,ct:n,path:G.emptyPath(),nt:!1,_t:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _n(t){const e=t._freezeSettings(),n=Ke(t._databaseId);return new bn(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wn(t,e,n,r,o,i={}){const s=t.lt(i.merge||i.mergeFields?2:0,e,n,o);Cn("Data must be an object, but it was:",s,r);const a=xn(r,s);let c,u;if(i.merge)c=new ne(s.fieldMask),u=s.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const o=On(e,r,n);if(!s.contains(o))throw new D(_,`Field '${o}' is specified in your field mask but missing from your input data.`);Nn(t,o)||t.push(o)}c=new ne(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new mn(new re(a),c,u)}class En extends hn{_toFieldTransform(t){if(2!==t.tt)throw 1===t.tt?t.ut(`${this._methodName}() can only appear at the top level of your update data`):t.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof En}}function Sn(t,e,n,r){const o=t.lt(1,e,n);Cn("Data must be an object, but it was:",o,r);const i=[],a=re.empty();pt(r,((t,r)=>{const c=Dn(e,t,n);r=(0,s.m9)(r);const u=o.st(c);if(r instanceof En)i.push(c);else{const t=Tn(r,u);null!=t&&(i.push(c),a.set(c,t))}}));const c=new ne(i);return new gn(a,c,o.fieldTransforms)}function kn(t,e,n,r,o,i){const a=t.lt(1,e,n),c=[On(e,r,n)],u=[o];if(i.length%2!=0)throw new D(_,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<i.length;s+=2)c.push(On(e,i[s])),u.push(i[s+1]);const l=[],f=re.empty();for(let d=c.length-1;d>=0;--d)if(!Nn(l,c[d])){const t=c[d];let e=u[d];e=(0,s.m9)(e);const n=a.st(t);if(e instanceof En)l.push(t);else{const r=Tn(e,n);null!=r&&(l.push(t),f.set(t,r))}}const h=new ne(l);return new gn(f,h,a.fieldTransforms)}function In(t,e,n,r=!1){return Tn(n,t.lt(r?4:3,e))}function Tn(t,e){if(An(t=(0,s.m9)(t)))return Cn("Unsupported field value:",e,t),xn(t,e);if(t instanceof hn)return function(t,e){if(!yn(e.tt))throw e.ut(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ut(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.nt&&4!==e.tt)throw e.ut("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const o of t){let t=Tn(o,e.ot(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return de(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wt.fromDate(t);return{timestampValue:Ce(e.serializer,n)}}if(t instanceof wt){const n=new wt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ce(e.serializer,n)}}if(t instanceof dn)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ln)return{bytesValue:Oe(e.serializer,t._byteString)};if(t instanceof sn){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Pe(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ut(`Unsupported field value: ${Q(t)}`)}(t,e)}function xn(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pt(t,((t,r)=>{const o=Tn(r,e.rt(t));null!=o&&(n[t]=o)})),{mapValue:{fields:n}}}function An(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof dn||t instanceof ln||t instanceof sn||t instanceof hn)}function Cn(t,e,n){if(!An(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Q(n);throw"an object"===r?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function On(t,e,n){if((e=(0,s.m9)(e))instanceof fn)return e._internalPath;if("string"==typeof e)return Dn(t,e);throw Pn("Field path arguments must be of type string or ",t,!1,void 0,n)}const Rn=new RegExp("[~\\*/\\[\\]]");function Dn(t,e,n){if(e.search(Rn)>=0)throw Pn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fn(...e.split("."))._internalPath}catch(r){throw Pn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pn(t,e,n,r,o){const i=r&&!r.isEmpty(),s=void 0!==o;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||s)&&(c+=" (found",i&&(c+=` in field ${r}`),s&&(c+=` in document ${o}`),c+=")"),new D(_,a+t+c)}function Nn(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e,n,r,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ln(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mn("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ln extends Fn{data(){return super.data()}}class jn{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}function Mn(t,e){return"string"==typeof e?Dn(t,e):e instanceof fn?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{}class $n extends Vn{}function Un(t,e,...n){let r=[];e instanceof Vn&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Hn)).length,n=t.filter((t=>t instanceof Bn)).length;if(e>1||e>0&&n>0)throw new D(_,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(r);for(const o of r)t=o._apply(t);return t}class Bn extends $n{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Bn(t,e,n)}_apply(t){const e=this._parse(t);return Jn(t._query,e),new on(t.firestore,t.converter,he(t._query,e))}_parse(t){const e=_n(t.firestore),n=function(t,e,n,r,o,i,s){let a;if(o.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new D(_,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Gn(s,i);const e=[];for(const n of s)e.push(zn(r,t,n));a={arrayValue:{values:e}}}else a=zn(r,t,s)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Gn(s,i),a=In(n,e,s,"in"===i||"not-in"===i);return Vt.create(o,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function qn(t,e,n){const r=e,o=Mn("where",t);return Bn._create(o,r,n)}class Hn extends Vn{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Hn(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:$t.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const o of r)Jn(n,o),n=he(n,o)}(t._query,e),new on(t.firestore,t.converter,he(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function zn(t,e,n){if("string"==typeof(n=(0,s.m9)(n))){if(""===n)throw new D(_,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ce(e)&&-1!==n.indexOf("/"))throw new D(_,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(H.fromString(n));if(!J.isDocumentKey(r))throw new D(_,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rt(t,new J(r))}if(n instanceof sn)return Rt(t,n._key);throw new D(_,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Q(n)}.`)}function Gn(t,e){if(!Array.isArray(t)||0===t.length)throw new D(_,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jn(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new D(_,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(_,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kn(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Wn extends class{convertValue(t,e="none"){switch(Tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return bt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw p()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return pt(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new dn(bt(t.latitude),bt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=St(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(kt(t));default:return null}}convertTimestamp(t){const e=vt(t);return new wt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);m(Je(n));const r=new B(n.get(1),n.get(3)),o=new J(n.popFirst(5));return r.isEqual(e)||f(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sn(this.firestore,null,e)}}function Yn(t){(function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new D(C,"limitToLast() queries require specifying at least one orderBy() clause")})((t=X(t,on))._query);const e=Ze(t.firestore),n=new Wn(t.firestore);return Qe(e,t._query).then((e=>{const r=e.map((e=>new Ln(t.firestore,n,e.key,e,t.converter)));return"L"===t._query.limitType&&r.reverse(),new jn(t,r)}))}function Qn(t,e,n,...r){const o=_n((t=X(t,sn)).firestore);let i;return i="string"==typeof(e=(0,s.m9)(e))||e instanceof fn?kn(o,"updateDoc",t._key,e,n,r):Sn(o,"updateDoc",t._key,e),Ye(Ze(t.firestore),[i.toMutation(t._key,be.exists(!0))])}function Xn(t){return Ye(Ze((t=X(t,sn)).firestore),[new Se(t._key,be.none())])}function Zn(t,e){const n=un(t=X(t,an)),r=Kn(t.converter,e),o=wn(_n(t.firestore),"addDoc",n._key,r,null!==n.converter,{});return Ye(Ze(t.firestore),[o.toMutation(n._key,be.exists(!1))]).then((()=>n))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){!function(t){c=t}(`${r.Jn}_lite`),(0,r.Xd)(new o.wA("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),o=new en(new L(t.getProvider("auth-internal")),new $(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new D(_,'"projectId" not provided in firebase.initializeApp.');return new B(t.options.projectId,e)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(r,e),r);return n&&o._setSettings(n),o}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)("firestore-lite","4.4.0",""),(0,r.KN)("firestore-lite","4.4.0","esm2017")}()},2483:function(t,e,n){n.d(e,{PO:function(){return V},p7:function(){return ee}});n(560);var r=n(3396),o=n(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function s(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const o=e[r];n[r]=l(o)?o.map(t):t(o)}return n}const u=()=>{},l=Array.isArray;const f=/\/$/,h=t=>t.replace(f,"");function d(t,e,n="/"){let r,o={},i="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),o=t(i)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=w(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&y(e.matched[r],n.matched[o])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!b(t[n],e[n]))return!1;return!0}function b(t,e){return l(t)?_(t,e):l(e)?_(e,t):t===e}function _(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function w(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let i,s,a=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,S;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(S||(S={}));function k(t){if(!t)if(i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),h(t)}const I=/^[^#]+#/;function T(t,e){return t.replace(I,"#")+e}function x(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function C(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=x(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function D(t,e){R.set(t,e)}function P(t){const e=R.get(t);return R.delete(t),e}let N=()=>location.protocol+"//"+location.host;function F(t,e){const{pathname:n,search:r,hash:o}=e,i=t.indexOf("#");if(i>-1){let e=o.includes(t.slice(i))?t.slice(i).length:1,n=o.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,t);return s+r+o}function L(t,e,n,r){let o=[],i=[],s=null;const c=({state:i})=>{const a=F(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=a,e.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?S.forward:S.back:S.unknown})}))};function u(){s=n.value}function l(t){o.push(t);const e=()=>{const e=o.indexOf(t);e>-1&&o.splice(e,1)};return i.push(e),e}function f(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function h(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:l,destroy:h}}function j(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?A():null}}function M(t){const{history:e,location:n}=window,r={value:F(t,n)},o={value:e.state};function i(r,i,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:N()+t+r;try{e[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=a({},e.state,j(o.value.back,t,o.value.forward,!0),n,{position:o.value.position});i(t,s,!0),r.value=t}function c(t,n){const s=a({},o.value,e.state,{forward:t,scroll:A()});i(s.current,s,!0);const c=a({},j(r.value,t,null),{position:s.position+1},n);i(t,c,!1),r.value=t}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:c,replace:s}}function V(t){t=k(t);const e=M(t),n=L(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const o=a({location:"",base:t,go:r,createHref:T.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function $(t){return"string"===typeof t||t&&"object"===typeof t}function U(t){return"string"===typeof t||"symbol"===typeof t}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function z(t,e){return a(new Error,{type:t,[q]:!0},e)}function G(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const J="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},W=/[.+*?^${}()[\]/\\]/g;function Y(t,e){const n=a({},K,e),r=[];let o=n.start?"^":"";const i=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let e=0;e<a.length;e++){const r=a[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(o+="/"),o+=r.value.replace(W,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;i.push({name:t,repeatable:n,optional:c});const l=u||J;if(l!==J){s+=10;try{new RegExp(`(${l})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+f.message)}}let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(h=c&&a.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),o+=h,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",o=i[r-1];n[o.name]=t&&o.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const o of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of o)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:s,optional:a}=t,c=i in e?e[i]:"";if(l(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:i,parse:c,stringify:u}}function Q(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function X(t,e){let n=0;const r=t.score,o=e.score;while(n<r.length&&n<o.length){const t=Q(r[n],o[n]);if(t)return t;n++}if(1===Math.abs(o.length-r.length)){if(Z(r))return 1;if(Z(o))return-1}return o.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function h(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:et.test(a)?h():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function rt(t,e,n){const r=Y(nt(t.path),n);const o=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf===!e.record.aliasOf&&e.children.push(o),o}function ot(t,e){const n=[],r=new Map;function o(t){return r.get(t)}function i(t,n,r){const o=!r,c=st(t);c.aliasOf=r&&r.record;const f=lt(e,t),h=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)h.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of h){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,f),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),o&&t.name&&!ct(d)&&s(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{s(p)}:u}function s(t){if(U(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function c(){return n}function l(t){let e=0;while(e<n.length&&X(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function f(t,e){let o,i,s,c={};if("name"in t&&t.name){if(o=r.get(t.name),!o)throw z(1,{location:t});0,s=o.record.name,c=a(it(e.params,o.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&it(t.params,o.keys.map((t=>t.name)))),i=o.stringify(c)}else if("path"in t)i=t.path,o=n.find((t=>t.re.test(i))),o&&(c=o.parse(i),s=o.record.name);else{if(o=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!o)throw z(1,{location:t,currentLocation:e});s=o.record.name,c=a({},e.params,t.params),i=o.stringify(c)}const u=[];let l=o;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:i,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:f,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function it(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function st(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some((e=>e===t||ft(t,e)))}const ht=/#/g,dt=/&/g,pt=/\//g,mt=/=/g,gt=/\?/g,yt=/\+/g,vt=/%5B/g,bt=/%5D/g,_t=/%5E/g,wt=/%60/g,Et=/%7B/g,St=/%7C/g,kt=/%7D/g,It=/%20/g;function Tt(t){return encodeURI(""+t).replace(St,"|").replace(vt,"[").replace(bt,"]")}function xt(t){return Tt(t).replace(Et,"{").replace(kt,"}").replace(_t,"^")}function At(t){return Tt(t).replace(yt,"%2B").replace(It,"+").replace(ht,"%23").replace(dt,"%26").replace(wt,"`").replace(Et,"{").replace(kt,"}").replace(_t,"^")}function Ct(t){return At(t).replace(mt,"%3D")}function Ot(t){return Tt(t).replace(ht,"%23").replace(gt,"%3F")}function Rt(t){return null==t?"":Ot(t).replace(pt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Pt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let o=0;o<r.length;++o){const t=r[o].replace(yt," "),n=t.indexOf("="),i=Dt(n<0?t:t.slice(0,n)),s=n<0?null:Dt(t.slice(n+1));if(i in e){let t=e[i];l(t)||(t=e[i]=[t]),t.push(s)}else e[i]=s}return e}function Nt(t){let e="";for(let n in t){const r=t[n];if(n=Ct(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const o=l(r)?r.map((t=>t&&At(t))):[r&&At(r)];o.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Lt=Symbol(""),jt=Symbol(""),Mt=Symbol(""),Vt=Symbol(""),$t=Symbol("");function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bt(t,e,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,a)=>{const c=t=>{!1===t?a(z(4,{from:n,to:e})):t instanceof Error?a(t):$(t)?a(z(2,{from:e,to:t})):(i&&r.enterCallbacks[o]===i&&"function"===typeof t&&i.push(t),s())},u=t.call(r&&r.instances[o],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const o=[];for(const i of t){0;for(const t in i.components){let a=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(Ht(a)){const s=a.__vccOpts||a,c=s[e];c&&o.push(Bt(c,n,r,i,t))}else{let c=a();0,o.push((()=>c.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const a=s(o)?o.default:o;i.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&Bt(u,n,r,i,t)()}))))}}}return o}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function zt(t){const e=(0,r.f3)(Mt),n=(0,r.f3)(Vt),i=(0,r.Fl)((()=>e.resolve((0,o.SU)(t.to)))),s=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(y.bind(null,r));if(s>-1)return s;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&o[o.length-1].path!==a?o.findIndex(y.bind(null,t[e-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Wt(n.params,i.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&v(n.params,i.value.params)));function l(n={}){return Kt(n)?e[(0,o.SU)(t.replace)?"replace":"push"]((0,o.SU)(t.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const Gt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zt,setup(t,{slots:e}){const n=(0,o.qj)(zt(t)),{options:i}=(0,r.f3)(Mt),s=(0,r.Fl)((()=>({[Qt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=e.default&&e.default(n);return t.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Jt=Gt;function Kt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wt(t,e){for(const n in e){const r=e[n],o=t[n];if("string"===typeof r){if(r!==o)return!1}else if(!l(o)||o.length!==r.length||r.some(((t,e)=>t!==o[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)($t),s=(0,r.Fl)((()=>t.route||i.value)),c=(0,r.f3)(jt,0),u=(0,r.Fl)((()=>{let t=(0,o.SU)(c);const{matched:e}=s.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(jt,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Lt,l),(0,r.JJ)($t,s);const f=(0,o.iH)();return(0,r.YP)((()=>[f.value,l.value,t.name]),(([t,e,n],[r,o,i])=>{e&&(e.instances[n]=t,o&&o!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=o.leaveGuards),e.updateGuards.size||(e.updateGuards=o.updateGuards))),!t||!e||o&&y(e,o)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const o=s.value,i=t.name,c=l.value,u=c&&c.components[i];if(!u)return Zt(n.default,{Component:u,route:o});const h=c.props[i],d=h?!0===h?o.params:"function"===typeof h?h(o):h:null,p=t=>{t.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:f}));return Zt(n.default,{Component:m,route:o})||m}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Xt;function ee(t){const e=ot(t.routes,t),n=t.parseQuery||Pt,s=t.stringifyQuery||Nt,f=t.history;const h=Ut(),m=Ut(),y=Ut(),v=(0,o.XI)(B);let b=B;i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(t=>""+t)),w=c.bind(null,Rt),S=c.bind(null,Dt);function k(t,n){let r,o;return U(t)?(r=e.getRecordMatcher(t),o=n):o=t,e.addRoute(o,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function T(){return e.getRoutes().map((t=>t.record))}function x(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||v.value),"string"===typeof t){const o=d(n,t,r.path),i=e.resolve({path:o.path},r),s=f.createHref(o.fullPath);return a(o,i,{params:S(i.params),hash:Dt(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in t)o=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];o=a({},t,{params:w(e)}),r.params=w(r.params)}const i=e.resolve(o,r),c=t.hash||"";i.params=_(S(i.params));const u=p(s,a({},t,{hash:xt(c),path:i.path})),l=f.createHref(u);return a({fullPath:u,hash:c,query:s===Nt?Ft(t.query):t.query||{}},i,{redirectedFrom:void 0,href:l})}function N(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function F(t,e){if(b!==t)return z(8,{from:e,to:t})}function L(t){return V(t)}function j(t){return L(a(N(t),{replace:!0}))}function M(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function V(t,e){const n=b=R(t),r=v.value,o=t.state,i=t.force,c=!0===t.replace,u=M(n);if(u)return V(a(N(u),{state:"object"===typeof u?a({},o,u.state):o,force:i,replace:c}),e||n);const l=n;let f;return l.redirectedFrom=e,!i&&g(s,r,n)&&(f=z(16,{to:l,from:r}),rt(r,r,!0,!1)),(f?Promise.resolve(f):H(l,r)).catch((t=>G(t)?G(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(G(t,2))return V(a({replace:c},N(t.to),{state:"object"===typeof t.to?a({},o,t.to.state):o,force:i}),e||l)}else t=K(l,r,!0,c,o);return J(l,r,t),t}))}function $(t,e){const n=F(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function H(t,e){let n;const[r,o,i]=ne(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Bt(r,t,e))}));const s=$.bind(null,t,e);return n.push(s),ut(n).then((()=>{n=[];for(const r of h.list())n.push(Bt(r,t,e));return n.push(s),ut(n)})).then((()=>{n=qt(o,"beforeRouteUpdate",t,e);for(const r of o)r.updateGuards.forEach((r=>{n.push(Bt(r,t,e))}));return n.push(s),ut(n)})).then((()=>{n=[];for(const r of i)if(r.beforeEnter)if(l(r.beforeEnter))for(const o of r.beforeEnter)n.push(Bt(o,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(s),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(i,"beforeRouteEnter",t,e),n.push(s),ut(n)))).then((()=>{n=[];for(const r of m.list())n.push(Bt(r,t,e));return n.push(s),ut(n)})).catch((t=>G(t,8)?t:Promise.reject(t)))}function J(t,e,n){y.list().forEach((r=>q((()=>r(t,e,n)))))}function K(t,e,n,r,o){const s=F(t,e);if(s)return s;const c=e===B,u=i?history.state:{};n&&(r||c?f.replace(t.fullPath,a({scroll:c&&u&&u.scroll},o)):f.push(t.fullPath,o)),v.value=t,rt(t,e,n,c),nt()}let W;function Y(){W||(W=f.listen(((t,e,n)=>{if(!ct.listening)return;const r=R(t),o=M(r);if(o)return void V(a(o,{replace:!0}),r).catch(u);b=r;const s=v.value;i&&D(O(s.fullPath,n.delta),A()),H(r,s).catch((t=>G(t,12)?t:G(t,2)?(V(t.to,r).then((t=>{G(t,20)&&!n.delta&&n.type===E.pop&&f.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&f.go(-n.delta,!1),tt(t,r,s)))).then((t=>{t=t||K(r,s,!1),t&&(n.delta&&!G(t,8)?f.go(-n.delta,!1):n.type===E.pop&&G(t,20)&&f.go(-1,!1)),J(r,s,t)})).catch(u)})))}let Q,X=Ut(),Z=Ut();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return Q&&v.value!==B?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function nt(t){return Q||(Q=!t,Y(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function rt(e,n,o,s){const{scrollBehavior:a}=t;if(!i||!a)return Promise.resolve();const c=!o&&P(O(e.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&C(t))).catch((t=>tt(t,e,n)))}const it=t=>f.go(t);let st;const at=new Set,ct={currentRoute:v,listening:!0,addRoute:k,removeRoute:I,hasRoute:x,getRoutes:T,resolve:R,options:t,push:L,replace:j,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:h.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Jt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(v)}),i&&!st&&v.value===B&&(st=!0,L(f.location).catch((t=>{0})));const n={};for(const o in B)Object.defineProperty(n,o,{get:()=>v.value[o],enumerable:!0});t.provide(Mt,e),t.provide(Vt,(0,o.Um)(n)),t.provide($t,v);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(b=B,W&&W(),W=null,v.value=B,st=!1,Q=!1),r()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>q(e)))),Promise.resolve())}return ct}function ne(t,e){const n=[],r=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let s=0;s<i;s++){const i=e.matched[s];i&&(t.matched.find((t=>y(t,i)))?r.push(i):n.push(i));const a=t.matched[s];a&&(e.matched.find((t=>y(t,a)))||o.push(a))}return[n,r,o]}}}]);
//# sourceMappingURL=chunk-vendors.b28211ab.js.map