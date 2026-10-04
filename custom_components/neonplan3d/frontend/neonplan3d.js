Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var an=new URL(import.meta.url),rn=an.searchParams.get("v"),on=r=>new URL(`./fonts/${r}${rn?`?v=${rn}`:""}`,an).href,sn="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function ln(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${on("figtree.woff2")}) format("woff2");unicode-range:${sn}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${on("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${sn}}`,document.head.append(r)}var Ke=globalThis,Ue=Ke.ShadowRoot&&(Ke.ShadyCSS===void 0||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ht=Symbol(),cn=new WeakMap,$e=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ue&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=cn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&cn.set(t,e))}return e}toString(){return this.cssText}},dn=r=>new $e(typeof r=="string"?r:r+"",void 0,ht),N=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new $e(t,r,ht)},hn=(r,e)=>{if(Ue)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Ke.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},ut=Ue?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return dn(t)})(r):r;var{is:go,defineProperty:bo,getOwnPropertyDescriptor:wo,getOwnPropertyNames:vo,getOwnPropertySymbols:yo,getPrototypeOf:ko}=Object,qe=globalThis,un=qe.trustedTypes,xo=un?un.emptyScript:"",So=qe.reactiveElementPolyfillSupport,Me=(r,e)=>r,pt={toAttribute(r,e){switch(e){case Boolean:r=r?xo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},fn=(r,e)=>!go(r,e),pn={attribute:!0,type:String,converter:pt,reflect:!1,useDefault:!1,hasChanged:fn};Symbol.metadata??=Symbol("metadata"),qe.litPropertyMetadata??=new WeakMap;var X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&bo(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:i}=wo(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pn}static _$Ei(){if(this.hasOwnProperty(Me("elementProperties")))return;let e=ko(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Me("properties"))){let t=this.properties,n=[...vo(t),...yo(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(ut(o))}else e!==void 0&&t.push(ut(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:pt).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:pt;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??fn)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[Me("elementProperties")]=new Map,X[Me("finalized")]=new Map,So?.({ReactiveElement:X}),(qe.reactiveElementVersions??=[]).push("2.1.2");var vt=globalThis,mn=r=>r,Ge=vt.trustedTypes,_n=Ge?Ge.createPolicy("lit-html",{createHTML:r=>r}):void 0,kn="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,xn="?"+Y,$o=`<${xn}>`,se=document,Ee=()=>se.createComment(""),Ae=r=>r===null||typeof r!="object"&&typeof r!="function",yt=Array.isArray,Mo=r=>yt(r)||typeof r?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gn=/-->/g,bn=/>/g,oe=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wn=/'/g,vn=/"/g,Sn=/^(?:script|style|textarea|title)$/i,kt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=kt(1),rs=kt(2),os=kt(3),ae=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),yn=new WeakMap,ie=se.createTreeWalker(se,129);function $n(r,e){if(!yt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return _n!==void 0?_n.createHTML(e):e}var To=(r,e)=>{let t=r.length-1,n=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=Te;for(let a=0;a<t;a++){let l=r[a],c,d,h=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===Te?d[1]==="!--"?s=gn:d[1]!==void 0?s=bn:d[2]!==void 0?(Sn.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=oe):d[3]!==void 0&&(s=oe):s===oe?d[0]===">"?(s=o??Te,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?oe:d[3]==='"'?vn:wn):s===vn||s===wn?s=oe:s===gn||s===bn?s=Te:(s=oe,o=void 0);let f=s===oe&&r[a+1].startsWith("/>")?" ":"";i+=s===Te?l+$o:h>=0?(n.push(c),l.slice(0,h)+kn+l.slice(h)+Y+f):l+Y+(h===-2?a:f)}return[$n(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Re=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=To(e,t);if(this.el=r.createElement(c,n),ie.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ie.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(kn)){let u=d[s++],f=o.getAttribute(h).split(Y),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:i,name:g[2],strings:f,ctor:g[1]==="."?_t:g[1]==="?"?gt:g[1]==="@"?bt:pe}),o.removeAttribute(h)}else h.startsWith(Y)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(Sn.test(o.tagName)){let h=o.textContent.split(Y),u=h.length-1;if(u>0){o.textContent=Ge?Ge.emptyScript:"";for(let f=0;f<u;f++)o.append(h[f],Ee()),ie.nextNode(),l.push({type:2,index:++i});o.append(h[u],Ee())}}}else if(o.nodeType===8)if(o.data===xn)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(Y,h+1))!==-1;)l.push({type:7,index:i}),h+=Y.length-1}i++}}static createElement(e,t){let n=se.createElement("template");return n.innerHTML=e,n}};function ue(r,e,t=r,n){if(e===ae)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,i=Ae(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=ue(r,o._$AS(r,e.values),o,n)),e}var mt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??se).importNode(t,!0);ie.currentNode=o;let i=ie.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ze(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new wt(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=ie.nextNode(),s++)}return ie.currentNode=se,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ze=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ue(this,e,t),Ae(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement($n(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new mt(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=yn.get(e.strings);return t===void 0&&yn.set(e.strings,t=new Re(e)),t}k(e){yt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let i of e)o===t.length?t.push(n=new r(this.O(Ee()),this.O(Ee()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=mn(e).nextSibling;mn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,o){let i=this.strings,s=!1;if(i===void 0)e=ue(this,e,t,0),s=!Ae(e)||e!==this._$AH&&e!==ae,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=ue(this,a[n+l],t,l),c===ae&&(c=this._$AH[l]),s||=!Ae(c)||c!==this._$AH[l],c===w?e=w:e!==w&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_t=class extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},gt=class extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},bt=class extends pe{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=ue(this,e,t,0)??w)===ae)return;let n=this._$AH,o=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==w&&(n===w||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ue(this,e)}};var Eo=vt.litHtmlPolyfillSupport;Eo?.(Re,ze),(vt.litHtmlVersions??=[]).push("3.3.3");var Mn=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let i=t?.renderBefore??null;n._$litPart$=o=new ze(e.insertBefore(Ee(),i),i,void 0,t??{})}return o._$AI(r),o};var xt=globalThis,L=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}};L._$litElement$=!0,L.finalized=!0,xt.litElementHydrateSupport?.({LitElement:L});var Ao=xt.litElementPolyfillSupport;Ao?.({LitElement:L});(xt.litElementVersions??=[]).push("4.2.2");async function Tn(r){return r.callWS({type:"neonplan3d/building/get"})}async function En(r,e){return(await r.callWS({type:"neonplan3d/building/save",building:e})).revision}function An(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function Rn(r,e){return(await r.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function zn(r){return(await r.callWS({type:"neonplan3d/packs/list"})).packs}var Ro="neonplan3d.seenOffers";function Dn(r){let e=[];try{e=JSON.parse(localStorage.getItem(Ro)??"[]")}catch{}return r.filter(t=>!e.includes(t.id))}var zo="neonplan3d.seenUpdates";function Pn(r){let e=[];try{e=JSON.parse(localStorage.getItem(zo)??"[]")}catch{}return r.filter(t=>!e.includes(`${t.id}@${t.release}`))}function In(r){return r.callWS({type:"neonplan3d/license/get"})}var Fn=[],St=new Map,Cn=0;function Hn(r){Fn=r,St=new Map(r.flatMap(e=>e.items.map(t=>[Do(e.id,t.id),t]))),Cn++}function De(){return Fn}function je(){return Cn}function Do(r,e){return`pack:${r}:${e}`}function $t(r){return r.startsWith("pack:")}var Po={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Wn(r){return U(r)?.parts.find(e=>e.screen)}function U(r){if(!$t(r))return;let e=St.get(r);if(e)return e;let[,t,...n]=r.split(":"),o=Po[t];return o?St.get(`pack:${o}:${n.join(":")}`):void 0}function Ln(r,e){let t=e.split("-")[0];return r.name[t]??r.name.en??Object.values(r.name)[0]??r.id}function fe(r,e){let t=U(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Bn;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Xe(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return t?0:Nn(e)}}var Vn=["rain","snow","clouds","lightning","sky"];var Fo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Co(r){return r.elevation>.3?0:-.2}function Kn(r,e,t){let n=(r.outdoor??[]).find(o=>o.type!=="hedge"&&o.type!=="fence"&&o.type!=="pool"&&z([e,t],o.points));return Co(r)+(n?Fo[n.type]:0)}var Ho={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null};var Un={type:"none",pitch:35,overhang:.4},Wo={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Un}};var qn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Bn=1.75;function Gn(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:U(r.type)?.mount!=="ceiling"}function Mt(r){return qn.has(r)||!!U(r)?.light}var Lo=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Nn(r){switch(r.type){case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;default:return 0}}function Xe(r,e,t){let n=0;for(let o of r.furniture)!(Lo.has(o.type)||U(o.type)?.surface)||!z([e,t],Ze(o))||(n=Math.max(n,o.h));return n}var Io=new Set([...qn,"radiator","robot_vacuum","inverter","home_battery","wallbox","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),On={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Tt(r){r.energy={...Ho,...r.energy??{}},r.presence=r.presence??[],r.settings={...Wo,...r.settings,roof:{...Un,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=n[o.mount??"ceiling"],[s,a,l]=On[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function J(r){let e=0;for(let t=0;t<r.length;t++){let[n,o]=r[t],[i,s]=r[(t+1)%r.length];e+=n*s-i*o}return e/2}function le(r){let e=J(r);if(Math.abs(e)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let t=0,n=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Ze(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function z(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}var jn={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Bo=700,At="neonplan3d.unsaved",Xn="1.9.0",Yn="floorplan-3d.unsaved";function No(){try{let r=localStorage.getItem(At)??localStorage.getItem(Yn);return r?JSON.parse(r):null}catch{return null}}function Et(r){try{r?localStorage.setItem(At,JSON.stringify(r)):(localStorage.removeItem(At),localStorage.removeItem(Yn))}catch{}}var me=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Bo),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Xn!=="dev"&&this.backendVersion!==Xn}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Tt(e.building))}discardDraft(){this.draft=null,Et(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await En(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Et(null)}catch(t){this.saveState="error",this.saveError=Zn(t),Et({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await An(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await zn(this.hass)}catch{this.packs=[]}Hn(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Tn(this.hass);this.building=Tt(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=No()),this.revision=e.revision,this.error=null}catch(e){this.error=Zn(e)}this.host.requestUpdate()}}};function Zn(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}var Jn;function Rt(){let r=new URL("./neonplan3d-editor.js?v=4a03f6f14bb0",new URL(import.meta.url)).href;return Jn??=import(r),Jn}var Oo={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",vacuum:"vacuum",scene:"scene",script:"script"},Vo=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ko=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Uo=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Ye=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],nr=new Set(["light","switch","fan"]);function rr(r){return r.slice(0,r.indexOf("."))}function k(r){return Oo[rr(r)]??null}function qo(r){return r!==null&&r!=="scene"&&r!=="script"}function or(r,e){let t=r.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&r.devices?.[t.device_id]?.area_id||null:null}function Go(r,e){let t=k(e);if(!t)return!1;let n=r.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let o=r.states[e];if(!o)return!1;let i=o.attributes.device_class;return t==="sensor"?i?Vo.has(i):Ko.has(String(o.attributes.unit_of_measurement??"")):t==="binary"?!!i&&Uo.has(i):!0}var jo=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Xo(r,e){if(k(e)!=="sensor")return!1;let t=r.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=r.states[e];return!n||!n.attributes.unit_of_measurement||jo.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||F(n)}var zt=null;function Dt(r){let e=zt;if(e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount)))return e;let t=new Map,n=new Map,o=[],i=new Map;for(let s of Object.keys(r.entities??{})){let a=r.entities[s],l=a.device_id;l&&Bt(r,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(i.get(l)??i.set(l,new Set).get(l)).add(rr(s));let c=Go(r,s),d=or(r,s);if(!d){(c||Xo(r,s))&&qo(k(s))&&o.push(s);continue}c&&(t.get(d)??t.set(d,[]).get(d)).push(s)}o.sort((s,a)=>Ye.indexOf(k(s))-Ye.indexOf(k(a))||D(r,s).localeCompare(D(r,a)));for(let[s,a]of t){let l=r.areas?.[s]?.name;a.sort((c,d)=>{let h=Ye.indexOf(k(c)),u=Ye.indexOf(k(d));return h-u||D(r,c,l).localeCompare(D(r,d,l))})}return zt={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:t,power:n,unassigned:o,domains:i},zt}function H(r,e){return!e||!r.entities?[]:Dt(r).areas.get(e)??[]}var Zo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Yo=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Jo=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Qo(r,e){let t=r.entities?.[e]?.device_id,n=t?Dt(r).domains.get(t):void 0;return n&&[...n].some(o=>Yo.has(o))?!1:!Jo.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function Pt(r,e,t,n){let o=t.climate?.[n];if(o==="none")return[];if(o)return r.states[o]?[o]:[];let i=Zo[n],s=(h,u)=>z([h,u],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id));return[...new Set([...H(r,t.area_id).filter(h=>!c.has(h)),...l])].filter(h=>h.startsWith("sensor.")&&r.states[h]?.attributes.device_class===i&&Qo(r,h))}function Z(r){return r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function ei(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}function Ie(r,e){return Z(r)==="\xB0F"?e*9/5+32:e}function Je(r,e,t,n){let o=Pt(r,e,t,n).map(i=>{let s=Number(r.states[i]?.state);return n==="temperature"?ei(s,r.states[i]?.attributes.unit_of_measurement):s}).filter(i=>Number.isFinite(i));return o.length?o.reduce((i,s)=>i+s,0)/o.length:null}function It(r,e){return r.entities?Dt(r).power.get(e)??[]:[]}function D(r,e,t){let o=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(t&&o.length>t.length+1&&o.toLowerCase().startsWith(t.toLowerCase()+" ")){let i=o.slice(t.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return o}function F(r){return!r||r.state==="unavailable"||r.state==="unknown"}var ti=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Ft(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function ce(r){if(!r)return!1;switch(k(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";case"sensor":return Ft(r)&&ti.has(String(r.state).toLowerCase());default:return!1}}function Fe(r){if(!r||r.state!=="on")return null;let e=r.attributes,t=typeof e.brightness=="number"?Math.max(.08,e.brightness/255):1,n=e.rgb_color,o;return n&&e.color_mode!=="color_temp"&&e.color_mode!=="brightness"&&e.color_mode!=="onoff"?o=[n[0]/255,n[1]/255,n[2]/255]:typeof e.color_temp_kelvin=="number"?o=ni(e.color_temp_kelvin):o=[1,.71,.28],{color:o,level:t}}function ni(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function _e(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var ri=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),oi=new Set(["garage","gate"]),ii=new Set(["window","opening"]);function Pe(r,e,t=!1){let n=new Map;return e.length&&r.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(o.id,s)}),n}function Qe(r,e){let t=new Map;for(let n of e)for(let o of n.rooms){let i=n.openings.filter(m=>m.room_id===o.id).sort((m,S)=>m.edge-S.edge||m.offset-S.offset);if(!i.length)continue;let s=H(r,o.area_id),a=m=>r.states[m]?.attributes.device_class,l=s.filter(m=>k(m)==="cover"&&ri.has(a(m))),c=i.filter(m=>m.type==="window"),d=i.filter(m=>m.type==="door"),h=i.filter(m=>m.type==="garage"),u=Pe(c,l,!0),f=Pe(c,s.filter(m=>k(m)==="binary"&&ii.has(a(m)))),g=Pe(d,s.filter(m=>k(m)==="binary"&&a(m)==="door")),_=Pe(h,s.filter(m=>k(m)==="cover"&&oi.has(a(m)??""))),M=Pe(h,s.filter(m=>k(m)==="binary"&&a(m)==="garage_door")),b=(m,S)=>m==="none"?null:m??S??null;for(let m of i){let S=m.type==="window"?u:m.type==="garage"?_:null,v=m.type==="window"?f:m.type==="garage"?M:g;t.set(m.id,{cover:b(m.cover,S?.get(m.id)),contact:m.sensor==="handle"&&m.contact==null?null:b(m.contact,v.get(m.id)),tilt:m.tilt==="none"?null:m.tilt,contact2:m.leaves===2&&m.contact2&&m.contact2!=="none"?m.contact2:null,tilt2:m.leaves===2&&m.tilt2&&m.tilt2!=="none"?m.tilt2:null,position:m.position&&m.position!=="none"?m.position:null,positionInverted:!!m.position_inverted})}}return t}var si=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ai(r){if(!r||F(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:null,r.state]){if(!t)continue;let n=si.find(([o])=>o.test(t.trim()));if(n)return n[1]}return null}var li=.5;function Q(r,e,t="window"){let n=f=>!!f&&r.states[f]?.state==="on",o=f=>!!f&&!!r.states[f]&&!F(r.states[f]),i=f=>f?ai(r.states[f]):null,s=n(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",a=i(e.contact2)==="open"&&!s?1:0;if(t==="door"){let f=i(e.contact);return{open:f===null?li:f==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:f!==null}}let l=n(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",c=i(e.contact)==="open"&&!l?1:0,d=null,h=e.cover?r.states[e.cover]:void 0,u=ci(r,e.position);if(u!==null)d=e.positionInverted?u:1-u;else if(h&&!F(h)){let f=h.attributes.current_position;typeof f=="number"?d=1-Math.min(100,Math.max(0,f))/100:d=h.state==="closed"?1:h.state==="opening"||h.state==="closing"?.5:0}else e.cover&&(d=0);if(t==="garage"){let f=d!==null||o(e.contact);return d===null&&(d=o(e.contact)&&n(e.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:d,sensed:f}}return{open:c,open2:a,tilt:l?1:0,tilt2:s?1:0,cover:d,sensed:o(e.contact)||o(e.tilt)}}function ci(r,e){let t=e?r.states[e]:void 0;if(!t||F(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let o=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,o?n/100:n))}function Ct(r,e){let t=new Map,n=[];for(let s of e){let a=r.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let o=n.map(s=>{let a=t.get(s),l=a.find(c=>!r.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return o.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function Ht(r,e){return Ct(r,e).map(t=>t.primary)}var di={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},hi=new Set(["tv_board","tv_wall"]);function ir(r,e){let t=r.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let o=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||o===i||i.length>=3&&o.includes(i)}function sr(r){return hi.has(r)||!!Wn(r)}function Wt(r){return sr(r)||r==="desk"||r==="fridge_smart"}function ge(r,e){let t=new Set,n=be(r,e),o=e.some(i=>i.openings.some(s=>s.confirm))?Qe(r,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?o?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of i.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function Lt(r,e){let t=o=>{if(!o||o==="none")return!1;let i=r.states[o]?.state;return i==="on"||i==="open"},n=new Map;for(let o of e)for(let i of o.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var Qn={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Bt(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function ui(r,e){if(Bt(r,e))return e;let t=r.entities?.[e]?.device_id;return t?It(r,t).find(n=>n!==e)??null:null}function be(r,e){let t=new Map;for(let n of e){let o=new Set(n.furniture.flatMap(i=>[i.entity,i.power]).filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in Qn,a=s?Qn[i.type]:di[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&z([i.x,i.z],f.points)),c=l?Ht(r,H(r,l.area_id)):[],d=f=>`${f} ${D(r,f)}`,h=i.entity==="none"?null:i.entity??null;if(i.entity==null){let f=c.filter(g=>!o.has(g));if(s){let g=f.filter(_=>k(_)==="light");h=g.find(_=>a.test(d(_)))??g[0]??null}else if(i.type==="robot_vacuum"){let g=l?.area_id??null;h=Object.keys(r.entities??{}).find(_=>_.startsWith("vacuum.")&&!o.has(_)&&or(r,_)===g)??null}else if(i.type==="radiator"){let g=f.filter(_=>k(_)==="climate");h=g.find(_=>a.test(d(_)))??g[0]??null}else if(sr(i.type)){let g=f.filter(_=>k(_)==="media");h=g.find(_=>r.states[_]?.attributes.device_class==="tv")??g.find(_=>a?.test(d(_)))??g[0]??null}else a&&(h=f.find(g=>["switch","media","fan"].includes(k(g)??"")&&a.test(d(g)))??null);h&&o.add(h)}let u=i.power==="none"?null:i.power??null;i.power==null&&(u=h?ui(r,h):null,!u&&a&&l&&!s&&(u=H(r,l.area_id).find(g=>Bt(r,g)&&!o.has(g)&&a.test(d(g)))??null),u&&o.add(u)),(h||u)&&t.set(i.id,{entity:h,power:u})}}return t}function ar(r){if(!r||r.state==="off"||r.state==="standby"||F(r))return null;let e=r.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function lr(r,e,t){let n=(c,d)=>z([c,d],t.points),o=be(r,[e]),i=Qe(r,[e]),s=[...e.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[o.get(c.id)?.entity,o.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let d=i.get(c.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]].filter(c=>!!c&&!!r.states[c]),a=[...new Set(s)],l=new Set(a);return{shown:a,more:H(r,t.area_id).filter(c=>!l.has(c))}}var er=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Nt(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;if(!n||!r.entities)return null;for(let o of Object.values(r.entities))if(!(o.device_id!==n||!o.entity_id.startsWith("sensor."))&&(er.test(o.translation_key??"")||er.test(o.entity_id.split(".")[1])))return o.entity_id;return null}function tr(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function cr(r,e,t,n){let o=n?r.states[n]?.state:t?r.states[t]?.attributes.current_room:void 0;if(typeof o!="string"||!o||o==="unknown"||o==="unavailable")return null;let i=tr(o);if(!i)return null;let s=a=>[a.name,a.area_id??"",a.area_id&&r.areas?.[a.area_id]?.name||""].map(tr).filter(Boolean);return e.find(a=>s(a).includes(i))??e.find(a=>s(a).some(l=>l.length>=3&&(l.includes(i)||i.includes(l))))??null}var dr={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_cleaning:"Putzt",state_returning:"F\xE4hrt zur Ladestation",state_docked:"An der Ladestation",robot_stop:"Stopp",robot_return:"Zur Ladestation",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen und Bewegungsspur",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",d:"3D daneben",d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck; der Rollladen f\xE4hrt von oben \xFCber die Scheibe.",solar_ground:"Garten / Boden (aufgest\xE4ndert)",solar_add_ground:"Im Garten",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (M\xF6bel \u2192 Energie & Solar)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",dims:"Ma\xDFe",dims_hint:"L\xE4nge und Tiefe der R\xE4ume anzeigen oder ausblenden",tool_dist:"Abstand",hint_dist:"Zwei Punkte antippen, um den Abstand zu messen \xB7 Esc meldet den Messwert zur\xFCck",dxf_hint:"Den Grundriss als DXF f\xFCr CAD exportieren (1 Einheit = 1 m)",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},hr={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_cleaning:"Cleaning",state_returning:"Returning to dock",state_docked:"Docked",robot_stop:"Stop",robot_return:"Return to dock",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera and motion trail",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; the blind comes down over the glass from the top.",solar_ground:"Garden / ground (on frames)",solar_add_ground:"In the garden",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (Furniture \u2192 Energy & solar)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",dims:"Dims",dims_hint:"Show or hide the rooms' width and depth",tool_dist:"Distance",hint_dist:"Tap two points to measure the distance \xB7 Esc clears the measurement",dxf_hint:"Export the plan as DXF for CAD (1 unit = 1 m)",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",d:"3D beside",d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan"},pi={add_floor:"Th\xEAm t\u1EA7ng",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_co:"Carbon monoxide: {name}",alert_gas:"Gas: {name}",alert_smoke:"Smoke: {name}",alert_water:"Water: {name}",alert_window_rain:"C\u1EEDa s\u1ED5 open in the rain: {name}",alerts:"Warnings",all_floors:"T\u1EA5t c\u1EA3 t\u1EA7ng",area:"Di\u1EC7n t\xEDch",area_rooms:"Th\xEAm {n} ph\xF2ng t\u1EEB khu v\u1EF1c HA",area_rooms_hint:"Th\xEAm m\u1ED9t ph\xF2ng (4 \xD7 3 m) cho m\u1ED7i khu v\u1EF1c c\u1EE7a t\u1EA7ng n\xE0y \u2013 sau \u0111\xF3 k\xE9o \u0111\u1EC3 \u0111\u1EB7t v\xE0 \u0111i\u1EC1u ch\u1EC9nh g\xF3c",back:"Quay l\u1EA1i",back_to_floor:"Back to the floor",back_to_room:"Back to {room}",background:"M\u1EABu (h\xECnh \u1EA3nh s\u01A1 \u0111\u1ED3)",background_opacity:"\u0110\u1ED9 m\u1EDD",background_remove:"X\xF3a m\u1EABu",background_upload:"Ch\u1ECDn h\xECnh \u1EA3nh \u2026",background_width:"Chi\u1EC1u r\u1ED9ng trong s\u01A1 \u0111\u1ED3 (m)",backup:"Sao l\u01B0u",backup_export:"Xu\u1EA5t",backup_export_share:"Chia s\u1EBB d\u01B0\u1EDBi d\u1EA1ng m\u1EABu",backup_export_share_hint:"Kh\xF4ng c\xF3 khu v\u1EF1c, thi\u1EBFt b\u1ECB, c\u1EA3m bi\u1EBFn v\xE0 h\xECnh \u1EA3nh \u2013 \u0111\u1EC3 chia s\u1EBB cho ng\u01B0\u1EDDi kh\xE1c.",backup_file:"T\u1EC7p",backup_full:"Sao l\u01B0u \u0111\u1EA7y \u0111\u1EE7",backup_full_confirm:"Thay th\u1EBF s\u01A1 \u0111\u1ED3, h\xECnh \u1EA3nh v\xE0 g\xF3i b\u1EB1ng b\u1EA3n sao l\u01B0u? Tr\u1EA1ng th\xE1i hi\u1EC7n t\u1EA1i v\u1EABn \u0111\u01B0\u1EE3c gi\u1EEF.",backup_full_export:"Sao l\u01B0u m\u1ECDi th\u1EE9 (s\u01A1 \u0111\u1ED3, \u1EA3nh, g\xF3i)",backup_full_hint:"M\u1ED9t t\u1EC7p v\u1EDBi s\u01A1 \u0111\u1ED3, m\u1ECDi h\xECnh \u1EA3nh n\u1EC1n v\xE0 m\xE0n h\xECnh, c\xF9ng c\xE1c g\xF3i \u0111\xE3 c\xE0i. Khi kh\xF4i ph\u1EE5c, m\u1ECDi g\xF3i s\u1EBD \u0111\u01B0\u1EE3c ki\u1EC3m tra l\u1EA1i; kh\xF3a b\u1EA3n quy\u1EC1n kh\xF4ng \u0111\u01B0\u1EE3c bao g\u1ED3m.",backup_full_import:"Kh\xF4i ph\u1EE5c b\u1EA3n sao \u0111\u1EA7y \u0111\u1EE7 \u2026",backup_full_not_backup:"\u0110\xE2y kh\xF4ng ph\u1EA3i l\xE0 b\u1EA3n sao \u0111\u1EA7y \u0111\u1EE7 c\u1EE7a NeonPlan 3D.",backup_full_restored:"\u0110\xE3 kh\xF4i ph\u1EE5c b\u1EA3n sao: {packs} g\xF3i, {pictures} h\xECnh \u1EA3nh.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",backup_hint:"H\xECnh \u1EA3nh n\u1EC1n kh\xF4ng ph\u1EA3i l\xE0 m\u1ED9t ph\u1EA7n c\u1EE7a t\u1EC7p.",backup_history:"\u0110i\u1EC3m kh\xF4i ph\u1EE5c",backup_import:"Nh\u1EADp \u2026",backup_import_confirm:"Thay th\u1EBF to\xE0n b\u1ED9 s\u01A1 \u0111\u1ED3 b\u1EB1ng t\u1EC7p? Tr\u1EA1ng th\xE1i hi\u1EC7n t\u1EA1i \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i.",backup_import_error:"T\u1EC7p n\xE0y kh\xF4ng ph\u1EA3i l\xE0 s\u01A1 \u0111\u1ED9 NeonPlan 3D ({error}).",backup_imported:"\u0110\xE3 nh\u1EADp.",backup_none:"Ch\u01B0a c\xF3. Khi \u0111ang ch\u1EC9nh s\u1EEDa, m\u1ED9t \u0111i\u1EC3m kh\xF4i ph\u1EE5c \u0111\u01B0\u1EE3c l\u01B0u m\u1ED7i 10 ph\xFAt.",backup_restore:"Kh\xF4i ph\u1EE5c",backup_restore_confirm:"Kh\xF4i ph\u1EE5c tr\u1EA1ng th\xE1i t\u1EEB {time}? Tr\u1EA1ng th\xE1i hi\u1EC7n t\u1EA1i \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i.",backup_restored:"\u0110\xE3 kh\xF4i ph\u1EE5c.",backup_summary:"{rooms} ph\xF2ng, {furniture} m\xF3n \u0111\u1ED3",brightness:"Brightness",camera_aim_hint:"Trong s\u01A1 \u0111\u1ED3, mi\u1EBFng khuy\xEAn cho bi\u1EBFt camera h\u01B0\u1EDBng \u0111\xE2u. Tay c\u1EA7m \u1EDF \u0111\u1EA7u m\xFAt xoay camera v\xE0 thi\u1EBFt l\u1EADp t\u1EA7m nh\xECn.",camera_fov:"Tr\u01B0\u1EDDng nh\xECn (\xB0)",camera_fov_short:"G\xF3c \xB0",camera_live:"M\u1EDF xem tr\u1EF1c ti\u1EBFp",camera_mount:"G\u1EAFn",camera_mount_ceiling:"Tr\u1EA7n nh\xE0 (dome, to\xE0n chi\u1EC1u)",camera_mount_wall:"T\u01B0\u1EDDng (nh\xECn theo g\xF3c quay)",camera_reach:"T\u1EA7m xa (m)",camera_reach_short:"T\u1EA7m m",camera_tilt:"Nghi\xEAng xu\u1ED1ng (\xB0)",camera_tilt_short:"Nghi\xEAng \xB0",cancel:"H\u1EE7y",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_control_floors:"Floors apart",card_control_humidity:"Humidity",card_control_temperature:"Temperature",card_control_walls:"Tall walls/cut",card_controls:"Switches in the card",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_description:"Your home in 3D (neon).",card_energy:"Show energy values at the top",card_explode:"Pull floors apart in the house view",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_floor:"T\u1EA7ng",card_floor_house:"Whole house (tap a floor to open it)",card_floor_stack:"Floors below",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_flows_off:"Always off",card_flows_on:"Always on",card_flows_switch:"C\xF4ng t\u1EAFc in the card",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",card_height:"Height (pixels)",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_idle_min:"{n} min without a touch",card_idle_off:"Never",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_idle_return:"Back to the start view after",card_motion_trail:"Motion trail",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",card_name:"NeonPlan 3D",card_night:"Night dimming",card_night_off:"Off",card_night_range:"Th\u1EDDi gian range (e.g. 22:00-06:00)",card_night_sun:"By the sun",card_night_time:"Th\u1EDDi gian range",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_quality_hint:"\u201CM\xE1y t\xEDnh b\u1EA3ng\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_room_names:"Show room names",card_room_panel:"Ph\xF2ng details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_scenes:"C\u1EA3nh buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_section_features:"Features",card_section_kiosk:"T\u01B0\u1EDDng tablet (kiosk)",card_section_show:"Show",card_section_view:"View",card_size:"Size",card_size_fill:"Fill the screen",card_size_fixed:"Fixed height",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",card_walls:"Walls",card_weather:"Th\u1EDDi ti\u1EBFt outside",card_weather_hint:"M\u01B0a, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",card_weather_plan:"as set in the plan",climate:"Ph\xF2ng climate",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",climate_humidity:"Humidity",climate_temperature:"Temperature",close:"Close",color:"Colour",color_temp:"Colour temperature",compass_e:"east",compass_n:"north",compass_ne:"north-east",compass_nw:"north-west",compass_s:"south",compass_se:"south-east",compass_sw:"south-west",compass_w:"west",confirm_switch:"Really switch {name}?",contact_entity:"Contact",contact_main:"Contact main leaf",contact_second:"Contact second leaf",cover_close:"Close",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",cover_entity:"Blind",cover_open:"Open",cover_position_entity:"Position sensor (live)",cover_position_invert:"C\u1EA3m bi\u1EBFn counts the other way round (0 = open)",cover_stop:"D\u1EEBng",ctx_rotate:"Turn 90\xB0",current_temp:"Hi\u1EC7n t\u1EA1i",cut_height:"Chi\u1EC1u cao c\u1EAFt (m)",d:"3D beside",d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",default_floor:"T\u1EA7ng 1",delete:"X\xF3a",delete_floor:"X\xF3a t\u1EA7ng",delete_floor_confirm:'X\xF3a t\u1EA7ng "{name}" c\xF9ng t\u1EA5t c\u1EA3 c\xE1c ph\xF2ng?',delete_point:"X\xF3a g\xF3c",depth:"Chi\u1EC1u s\xE2u (m)",details:"Details",device:"Thi\u1EBFt b\u1ECB",device_centre:"To room centre",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",devices:"Thi\u1EBFt b\u1ECB",devices_hint:"C\xE1c thi\u1EBFt b\u1ECB \u0111\xE3 \u0111\u1EB7t s\u1EBD hi\u1EC7n trong 3D. K\xE9o ch\xFAng trong s\u01A1 \u0111\u1ED3 \u0111\u1EC3 di chuy\u1EC3n.",devices_less:"less",devices_more:"+{n} more",devices_narrow:"{n} more \u2013 narrow the search",devices_none:"Khu v\u1EF1c n\xE0y kh\xF4ng c\xF3 thi\u1EBFt b\u1ECB ph\xF9 h\u1EE3p.",devices_none_area:"Li\xEAn k\u1EBFt ph\xF2ng v\u1EDBi m\u1ED9t khu v\u1EF1c v\xE0 thi\u1EBFt b\u1ECB s\u1EBD xu\u1EA5t hi\u1EC7n \u1EDF \u0111\xE2y.",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",devices_place:"\u0110\u1EB7t",devices_place_all_confirm:"\u0110\u1EB7t {n} thi\u1EBFt b\u1ECB v\xE0o ph\xF2ng c\xF9ng l\xFAc? (Ctrl+Z ho\u1EB7c Ho\xE0n t\xE1c s\u1EBD l\u1EA5y l\u1EA1i t\u1EA5t c\u1EA3 trong m\u1ED9t b\u01B0\u1EDBc.)",devices_place_all_n:"\u0110\u1EB7t t\u1EA5t c\u1EA3 {n} \u2026",devices_placed_in:"in {room}",devices_remove:"X\xF3a",devices_search:"T\xECm devices \u2026",devices_src_area:"Khu v\u1EF1c n\xE0y",devices_src_none:"Kh\xF4ng c\xF3 khu v\u1EF1c",devices_src_other:"Khu v\u1EF1c kh\xE1c",dir_down:"Xu\u1ED1ng",dir_left:"Left",dir_right:"Right",dir_up:"L\xEAn",done:"Ho\xE0n t\u1EA5t",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",draft_discard:"H\u1EE7y b\u1ECF",draft_found:"T\xECm th\u1EA5y thay \u0111\u1ED5i ch\u01B0a l\u01B0u t\u1EEB {time}.",draft_restore:"Kh\xF4i ph\u1EE5c v\xE0 l\u01B0u",duplicate:"Sao ch\xE9p",editor:"Bi\xEAn t\u1EADp",elevation:"\u0110\u1ED9 cao (m)",energy:"N\u0103ng l\u01B0\u1EE3ng",energy_battery:"Battery",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_consumption:"Consumption",energy_grid:"Grid (W, + = import)",energy_grid_export:"Xu\u1EA5t",energy_grid_import:"Grid import",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_invert:"Invert sign",energy_meter:"C\xF4ng t\u01A1",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_meter_remove:"X\xF3a meter",energy_meter_set:"\u0110\u1EB7t meter",energy_solar:"Solar",energy_solar_sensor:"Solar production (W)",energy_tariff:"Tariff",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",export_name_backup:"backup",export_name_full:"full",export_name_template:"template",ext_active:"active",ext_get:"See in the shop",ext_intro:"\u0110\u1ED3 n\u1ED9i th\u1EA5t packs and Pro add-ons for NeonPlan 3D. C\xE0i \u0111\u1EB7t what you bought here with your licence key; it updates by itself and works without the connection too.",ext_open:"Open extensions",ext_pro:"Pro add-ons",ext_shop:"Open the shop",ext_tab:"Extensions",ext_teaser_text:'\u0110\u1ED3 n\u1ED9i th\u1EA5t packs, the shop connection and Pro add-ons are under "Extensions" at the top.',ext_teaser_title:"More furniture and Pro features",ext_title:"Extensions",find:"T\xECm",find_none:"Nothing found",find_placeholder:"Where is \u2026? Thi\u1EBFt b\u1ECB or room",fit:"Hi\u1EC7n t\u1EA5t c\u1EA3",fix:"Fix",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_delete_confirm:"This item is fixed. X\xF3a it anyway?",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",flip_hinge:"Swap hinge side",flip_hinge_hint:"Hinges to the other side",flip_main_leaf:"Swap main leaf",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",floor:"T\u1EA7ng",floor_empty:"T\u1EA7ng tr\u1ED1ng",floor_from_ha:"T\u1EA7ng t\u1EEB Home Assistant:",floor_lights:"{n} lights on",floor_name:"T\xEAn",floor_open:"{n} open",floor_persons:"{n} people",floor_rooms:"{n} ph\xF2ng",floor_rooms_one:"1 ph\xF2ng",floor_stack_dim:"Dimmed",floor_stack_short_dim:"Dimmed",floor_stack_short_single:"Hidden (only this floor)",floor_stack_short_stacked:"X\u1EBFp",floor_stack_single:"Hidden (only this floor)",floor_stack_stacked:"X\u1EBFp (the house up to here)",floors:"C\xE1c t\u1EA7ng",floors_apart:"T\xE1ch",floors_stacked:"X\u1EBFp",flow_off:"off",flow_on:"on",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",fps:"FPS",fps_title:"Performance display (frames per second)",free_wall:"T\u01B0\u1EDDng",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a Tivi \u2013 while that door is closed.",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",furn_armchair:"Armchair",furn_bar_stool:"Bar stool",furn_bathtub:"Bathtub",furn_bed:"Gi\u01B0\u1EDDng",furn_bench:"Gh\u1EBF d\xE0i",furn_bunk_bed:"Bunk bed",furn_chair:"Gh\u1EBF",furn_coat_rack:"Coat rack",furn_coffee_table:"Coffee table",furn_corner_bench:"Corner bench",furn_desk:"B\xE0n l\xE0m vi\u1EC7c",furn_dishwasher:"Dishwasher",furn_door_left:"C\u1EEDa sensor left (freezer side)",furn_door_right:"C\u1EEDa sensor right (fridge side)",furn_dresser:"Chest of drawers",furn_dryer:"Dryer",furn_entity:"Thi\u1EBFt b\u1ECB (switch, plug \u2026)",furn_entity_climate:"Heating (thermostat)",furn_entity_light:"\u0110\xE8n or switch",furn_entity_tv:"Tivi (media player or smart plug)",furn_entity_vacuum:"Robot vacuum",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_group_bath:"Bath & laundry",furn_group_dining:"Dining",furn_group_energy:"N\u0103ng l\u01B0\u1EE3ng & solar",furn_group_kitchen:"B\u1EBFp",furn_group_lights:"Lights",furn_group_living:"Living",furn_group_sleeping:"Sleeping",furn_group_vehicles:"Parking",furn_group_work:"Work & other",furn_home_battery:"Home battery",furn_inverter:"Solar inverter",furn_island:"B\u1EBFp island",furn_kitchen:"B\u1EBFp unit",furn_kitchen_tall:"Tall unit with oven",furn_kitchen_wall:"T\u01B0\u1EDDng cabinet",furn_lamp_bollard:"Path light",furn_lamp_ceiling:"Tr\u1EA7n nh\xE0 light",furn_lamp_downlight:"\u0110\xE8n downlight",furn_lamp_floor:"T\u1EA7ng lamp",furn_lamp_garden:"V\u01B0\u1EDDn spot",furn_lamp_panel:"LED panel",furn_lamp_pendant:"\u0110\xE8n k\u1EBFt d\xE1n light",furn_lamp_spot:"Surface spot",furn_lamp_table:"B\xE0n lamp",furn_lamp_uplight:"T\u1EA7ng uplight",furn_lamp_wall:"T\u01B0\u1EDDng light",furn_led_strip:"LED strip",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the Tivi is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",furn_nightstand:"Nightstand",furn_office_chair:"Office chair",furn_parking:"Parking spot",furn_plant:"C\xE2y",furn_power:"Power sensor (W)",furn_radiator:"Radiator",furn_robot_room:"Hi\u1EC7n t\u1EA1i room (sensor)",furn_robot_vacuum:"Robot vacuum",furn_rug:"Th\u1EA3m",furn_shelf:"K\u1EC7",furn_shower:"Shower",furn_sideboard:"Sideboard",furn_sink:"Sink",furn_sofa:"Sofa",furn_stairs:"Stairs",furn_stairwell:"T\u1EA7ng opening",furn_stool:"Ch\u1ED7 ng\u1ED3i cao",furn_stove:"Stove",furn_table:"B\xE0n",furn_table_round:"Round table",furn_tall_cabinet:"Tall cabinet",furn_tv_board:"Tivi board",furn_tv_wall:"Tivi (wall)",furn_wallbox:"Wallbox",furn_wardrobe:"Wardrobe",furn_washbasin:"Washbasin",furn_washer:"Washing machine",furn_wc:"WC",furn_worktop:"Worktop",furnish:"B\u1ED1 tr\xED",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",furniture:"\u0110\u1ED3 n\u1ED9i th\u1EA5t",furniture_add:"Th\xEAm furniture",furniture_into:"M\u1EDBi items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",furniture_search:"T\xECm furniture \u2026",furniture_type:"Item",gaps_close:"Close gaps",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",grid:"L\u01B0\u1EDBi (m)",ha_floor:"T\u1EA7ng trong Home Assistant",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",heat_humidity:"Humidity",heat_none_found:"No matching sensors in the rooms' areas.",heat_off:"Normal",heat_short_humidity:"Humidity",heat_short_temperature:"Temp.",heat_temperature:"Temperature",heatmap:"Heatmap",height:"Chi\u1EC1u cao tr\u1EA7n (m)",height_auto:"Automatic height",height_m:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",hint_door:"Tap a wall to add a door",hint_empty:"Th\xEAm m\u1ED9t t\u1EA7ng tr\u01B0\u1EDBc.",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",hint_garage:"Tap a wall to add a garage door",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",hint_meter:"Tap the spot of the meter",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_polygon:"\u0110\u1EB7t c\xE1c g\xF3c \xB7 ch\u1EA1m v\xE0o g\xF3c \u0111\u1EA7u ti\xEAn ho\u1EB7c nh\u1EA5n Enter \u0111\u1EC3 \u0111\xF3ng \xB7 Esc \u0111\u1EC3 h\u1EE7y",hint_rect:"K\xE9o \u0111\u1EC3 v\u1EBD h\xECnh ch\u1EEF nh\u1EADt",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_select:"Ch\u1EA1m v\xE0o m\u1ED9t ph\xF2ng \u0111\u1EC3 ch\u1ECDn \xB7 k\xE9o c\xE1c g\xF3c \xB7 \u201C+\u201D tr\xEAn c\u1EA1nh \u0111\u1EC3 th\xEAm g\xF3c \xB7 ph\xEDm m\u0169i t\xEAn \u0111\u1EC3 d\u1EDDi \xB7 Del \u0111\u1EC3 x\xF3a \xB7 Ctrl+Z",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",hint_window:"Tap a wall to add a window",hold_hint:"Tap toggles \xB7 long press opens details",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",lamp_ceiling:"Tr\u1EA7n nh\xE0 light",lamp_floor:"T\u1EA7ng lamp",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. B\xE0n lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",lamp_mount:"\u0110\xE8n",lamp_table:"B\xE0n lamp",lamp_wall:"T\u01B0\u1EDDng light",leaf_main:"Main leaf",leaf_second:"Second leaf",level:"T\u1EA7ng {n}",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",lib_badge_light:"\u0110\xE8n: links to a light and switches in 3D",license_activate:"K\xEDch ho\u1EA1t",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_copied:"Id copied",license_copy:"Sao ch\xE9p",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_no_key:"Enter the licence key first.",license_error_not_owned:"This pack is not in this account.",license_error_other:"That did not work: {detail}",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_install:"C\xE0i \u0111\u1EB7t",license_installed:"installed \xB7 v{release}",license_instance:"Installation id",license_none:"No packs in the account yet.",license_not_installed:"not installed yet",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_shop:"More packs in the shop",license_title:"Shop connection",license_update:"C\u1EADp nh\u1EADt",license_update_available:"update to v{release} available",lights_spread:"Spread ceiling lights evenly",load_error:"T\u1EA3i th\u1EA5t b\u1EA1i",loading:"\u0110ang t\u1EA3i \u2026",lock_plan:"\u{1F512} T\u1EA7ng plan",dims:"Th\u01B0\u1EDBc \u0111o",dims_hint:"Hi\u1EC7n ho\u1EB7c \u1EA9n k\xEDch th\u01B0\u1EDBc ngang/d\xE0i c\u1EE7a t\u1EEBng ph\xF2ng",tool_dist:"Kho\u1EA3ng c\xE1ch",hint_dist:"Ch\u1EA1m 2 \u0111i\u1EC3m \u0111\u1EC3 \u0111o kho\u1EA3ng c\xE1ch \xB7 Esc \u0111\u1EC3 h\u1EE7y \u0111\u01B0\u1EDDng \u0111o",dxf_hint:"Xu\u1EA5t m\u1EB7t b\u1EB1ng d\u1EA1ng DXF \u0111\u1EC3 m\u1EDF trong CAD (1 \u0111\u01A1n v\u1ECB = 1 m)",lock_plan_hint:"Kh\xF3a the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. \u0110\u1ED3 n\u1ED9i th\u1EA5t and devices stay free.",main_leaf:"Main leaf (seen from the room)",manual:"Manual",manual_more:"Learn more",marker_height:"Marker height (m)",marker_show:"Marker in 3D",marker_show_always:"Always show",marker_show_auto:"Automatic",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_never:"Hide",marker_show_no_power:"Without watts",markers:"Markers",markers_all:"All",markers_important:"Important",markers_none:"None",mat_carpet:"Th\u1EA3m",mat_concrete:"B\xEA t\xF4ng",mat_oak:"S\u1ED3i",mat_stone:"\u0110\xE1",mat_tiles:"Tiles",mat_wood:"G\u1ED7",material:"S\xE0n nh\xE0",measure:"Ph\xF2ng by measure",measure_close:"Close room",measure_from:"B\u1EAFt \u0111\u1EA7u at {x} / {z} m \u2013 tapping moves the start.",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",measure_length:"Length of the next wall (m)",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_undo:"X\xF3a last wall",mount_height:"Height above the floor (m)",move_down:"Di chuy\u1EC3n xu\u1ED1ng",move_up:"Di chuy\u1EC3n l\xEAn",needs_restart:"M\u1ED9t phi\xEAn b\u1EA3n m\u1EDBi c\u1EE7a NeonPlan 3D \u0111\xE3 \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t nh\u01B0ng Home Assistant v\u1EABn ch\u1EA1y {version}. Vui l\xF2ng kh\u1EDFi \u0111\u1ED9ng l\u1EA1i Home Assistant \u2013 cho \u0111\u1EBFn th\u1EDDi \u0111i\u1EC3m \u0111\xF3, vi\u1EC7c l\u01B0u c\xF3 th\u1EC3 th\u1EA5t b\u1EA1i.",needs_restart_old:"M\u1ED9t phi\xEAn b\u1EA3n m\u1EDBi c\u1EE7a NeonPlan 3D \u0111\xE3 \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t nh\u01B0ng Home Assistant v\u1EABn ch\u1EA1y phi\xEAn b\u1EA3n c\u0169. Vui l\xF2ng kh\u1EDFi \u0111\u1ED9ng l\u1EA1i Home Assistant \u2013 cho \u0111\u1EBFn th\u1EDDi \u0111i\u1EC3m \u0111\xF3, vi\u1EC7c l\u01B0u s\u1EBD th\u1EA5t b\u1EA1i.",new_floor:"T\u1EA7ng {n}",new_room:"Ph\xF2ng {n}",next:"Ti\u1EBFp theo",no_area:"Kh\xF4ng c\xF3 khu v\u1EF1c",no_building:"Ch\u01B0a c\xF3 s\u01A1 \u0111\u1ED3 nh\xE0.",no_building_admin:"Ch\u01B0a c\xF3 s\u01A1 \u0111\u1ED3 nh\xE0. V\u1EBD t\u1EA7ng \u0111\u1EA7u ti\xEAn trong tr\xECnh bi\xEAn t\u1EADp.",no_ha_floor:"\u2013 kh\xF4ng c\xF3 \u2013",north:"B\u1EAFc (\xB0 clockwise from up)",north_hint:"B\u1EAFc is needed for the sun (light through the windows).",offers_dot:"M\u1EDBi in the shop",offers_kind_bundle:"G\xF3i",offers_kind_pack:"\u0110\u1ED3 n\u1ED9i th\u1EA5t pack",offers_kind_pro:"Pro add-on",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_new:"NEW",offers_title:"M\u1EDBi in the shop",open_editor:"M\u1EDF tr\xECnh bi\xEAn t\u1EADp",opening_door:"C\u1EEDa",opening_garage:"Garage door",opening_height:"Height (m)",opening_hint:`C\u1EA3m bi\u1EBFn type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic \\"level\\", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,opening_mark:"Highlight in 3D",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \\u201cWhen closed\\u201d needs a contact; without a sensor nothing is highlighted.",opening_mark_open:"When open",opening_position:"Centre from corner (m)",opening_style:"Style",opening_type:"Type",opening_window:"C\u1EEDa s\u1ED5",out_bed:"Flower bed",out_driveway:"Driveway",out_fence:"Fence",out_hedge:"Hedge",out_lawn:"Lawn",out_path:"Path",out_pool:"Pool",out_terrace:"Terrace",outdoor:"Ngo\xE0i tr\u1EDDi area",outdoor_hint:"Ngo\xE0i tr\u1EDDi lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",outdoor_type:"Type",overlap_warning:"C\xE1c ph\xF2ng ch\u1ED3ng l\xEAn nhau \u2013 t\u01B0\u1EDDng \u1EDF \u0111\xF3 ch\u01B0a ho\xE0n ch\u1EC9nh.",pack_by:"by {publisher} \xB7 {n} items",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_other:"Nh\u1EADp failed: {detail}",pack_error_too_large:"The file is too large.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pack_import:"Nh\u1EADp furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",pack_licensed:"Licensed to {name}",pack_missing_item:"\u0110\u1ED3 n\u1ED9i th\u1EA5t of a removed pack",pack_remove:"X\xF3a",pack_remove_confirm:"X\xF3a the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",packs:"\u0110\u1ED3 n\u1ED9i th\u1EA5t packs",packs_hint:"Only packs signed by the publisher can be imported.",packs_imported_n:"{n} of {total} packs imported",panel_all_off:"All off",panel_cameras:"Cameras",panel_climate:"Heating",panel_covers:"Covers",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",panel_less:"Show less",panel_lights:"Lights",panel_media:"\u0110a ph\u01B0\u01A1ng ti\u1EC7n",panel_more:"More devices of the area ({n})",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_pin:"Show in the room panel",panel_scenes:"Scenes & scripts",panel_sensors:"Sensors",panel_switches:"Switches",panel_unpin:"Don't show in the room panel",parking_add_type:"+ Mapping",parking_entity:'C\u1EA3m bi\u1EBFn \\"car present\\"',parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports \\"on\\", \\"home\\" or \\"present\\". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the \\"Vehicles\\" pack (\u0110\u1ED3 n\u1ED9i th\u1EA5t \u2192 Nh\u1EADp furniture pack).',parking_scale:"Size (%)",parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",parking_type_entity:"Vehicle type sensor (optional)",parking_type_state:"State (e.g. van)",parking_types:"State \u2192 vehicle",parking_vehicle:"Vehicle",parking_vehicle_none:"None",pendant_cone:"N\xF3n",pendant_drum:"Tr\u1ED1ng",pendant_globe:"C\u1EA7u",pendant_shade:"B\u1ED9 ch\u1EAFn",pendant_shape:"H\xECnh d\u1EA1ng",picture_add_entity:"+ Another entity",picture_add_value:"+ Value",picture_attribute:"Compare the state or an attribute",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",picture_change:"Change picture \u2026",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",picture_pick:"Choose picture \u2026",picture_reuse:"Use a stored picture",picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_url:"or picture URL",pkg_bath:"Ph\xF2ng t\u1EAFm",pkg_bath_desc:"B\u1ED3n r\u1EEDa, toilet, b\u1ED3n t\u1EAFm, m\xE1y gi\u1EB7t, \u0111\xE8n downlight",pkg_bedroom:"Ph\xF2ng ng\u1EE7",pkg_bedroom_desc:"Gi\u01B0\u1EDDng \u0111\xF4i v\u1EDBi hai b\xECnh \u0111\xE8n \u0111\u1EA7u gi\u01B0\u1EDDng, t\u1EE7 qu\u1EA7n \xE1o, t\u1EE7 \u0111\u1ED3, \u0111\xE8n ph\xF2ng ng\u1EE7",pkg_dining:"Ph\xF2ng \u0103n",pkg_dining_desc:"B\xE0n \u0103n v\u1EDBi 4 gh\u1EBF, t\u1EE7 gi\u1EA5u \u0111\u1ED3, \u0111\xE8n k\u1EBFt d\xE1n",pkg_done:"{n} m\xF3n \u0111\u1ED3 n\u1ED9i th\u1EA5t \u0111\xE3 \u0111\u1EB7t \u2013 Ctrl+Z s\u1EBD ho\xE0n t\u1EA5t.",pkg_hall:"H\xE0nh lang",pkg_hall_desc:"Gi\u1ECF \u0111\u1ED3, hai \u0111\xE8n downlight",pkg_hint:"\u0110\u1ED3 n\u1ED9i th\u1EA5t \u0111\u1EB7t d\u1EF1a tr\xEAn t\u01B0\u1EDDng ph\xF2ng; \u0111\xE8n k\u1EBFt n\u1ED1i v\u1EDBi \u0111\xE8n c\u1EE7a khu v\u1EF1c. \u0110i\u1EC1u ch\u1EC9nh t\u1EEBng m\xF3n sau n\xE0y \u2013 Ctrl+Z s\u1EBD ho\xE0n t\u1EA5t.",pkg_kids:"Ph\xF2ng tr\u1EBB em",pkg_kids_desc:"Gi\u01B0\u1EDDng \u0111\u01A1n, b\xE0n h\u1ECDc, k\u1EC7, th\u1EA3m",pkg_kitchen_l:"B\u1EBFp L",pkg_kitchen_l_desc:"H\xE0ng d\u1ECDc ph\xEDa sau v\xE0 b\xEAn tr\xE1i, \u0111\u1EA3o b\u1EBFp v\u1EDBi gh\u1EBF bar",pkg_kitchen_row:"D\xE0n b\u1EBFp",pkg_kitchen_row_desc:"H\xE0ng d\u1ECDc t\u01B0\u1EDDng sau v\u1EDBi t\u1EE7 l\u1EA1nh, l\xF2 n\u01B0\u1EDBng, b\u1ED3n r\u1EEDa, m\xE1y r\u1EEDa b\xE1t v\xE0 b\u1EBFp, t\u1EE7 k\u1EC7, b\xE0n \u0103n k\xE8m \u0111\xE8n k\u1EBFt d\xE1n",pkg_living:"Ph\xF2ng kh\xE1ch",pkg_living_desc:"B\xE0n TV, sofa, b\xE0n coffee, th\u1EA3m, gh\u1EBF \u0111\u1ED1i x\u1EE9ng, k\u1EC7, \u0111\xE8n s\xE0n, c\xE2y tr\u1ED3ng",pkg_office:"V\u0103n ph\xF2ng",pkg_office_desc:"B\xE0n l\xE0m vi\u1EC7c v\u1EDBi gh\u1EBF, hai k\u1EC7, \u0111\xE8n ph\xF2ng",pkg_open:"B\u1ED1 tr\xED \u0111\u1ED3 n\u1ED9i th\u1EA5t \u2026",plan_lock:"Kh\xF3a floor plan",plan_locked:"T\u1EA7ng plan locked",plan_unlock:"Unlock floor plan",play_pause:"Ph\xE1t/pause",points:"G\xF3c",position:"Position",presence:"Presence",presence_hint:"Ph\xF2ng sensor per person (e.g. ESPResense, Bermuda): its state names the room or area.",presence_sensor:"Ph\xF2ng sensor",preset_door:"C\u1EEDa",preset_door_double:"Double door",preset_front:"Front door",preset_garage:"Garage door",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_window:"C\u1EEDa s\u1ED5",preset_window_double:"Double window",previous:"Tr\u01B0\u1EDBc",pro_feature_camera_cockpit:"Camera cockpit: look through the camera and motion trail",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_weather:"Th\u1EDDi ti\u1EBFt outside: rain, snow, clouds, sun and moon",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_name_camera_cockpit:"Camera cockpit",pro_name_screens:"Live screens",pro_name_weather:"Th\u1EDDi ti\u1EBFt outside",pro_shop:"To the shop",pro_title:"NeonPlan Pro",qm_off:"Off",quality:"Ch\u1EA5t l\u01B0\u1EE3ng",quality_auto:"T\u1EF1 \u0111\u1ED9ng",quality_high:"Cao",quality_low:"M\xE1y t\xEDnh b\u1EA3ng",rain_warning:"C\u1EA3nh b\xE1o: window open while it rains",read_only:"Ch\u1EC9 qu\u1EA3n tr\u1ECB vi\xEAn m\u1EDBi c\xF3 th\u1EC3 ch\u1EC9nh s\u1EEDa s\u01A1 \u0111\u1ED3 nh\xE0.",rect_add:"Th\xEAm rectangle",rect_by_size:"Rectangle by size",redo:"L\xE0m l\u1EA1i",reset_view:"T\u1ED5ng quan",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",roof:"M\xE1i nh\xE0",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_base:"Top of walls (m)",roof_custom:"M\xE1i nh\xE0 sections (custom)",roof_eave:"Eave (m)",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_height:"Height (m)",roof_none:"No roof",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_open_short:"Canopy",roof_overhang:"M\xE1i nh\xE0 overhang (m)",roof_pitch:"M\xE1i nh\xE0 pitch (\xB0)",roof_pitch_short:"Pitch (\xB0)",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_ridge:"Ridge",roof_ridge_height:"Ridge height",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",roof_section:"M\xE1i nh\xE0 section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_sections:"M\xE1i nh\xE0 sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_off:"Back to one roof",roof_sections_regen:"Create again from the rooms",roof_sections_start:"Create roof sections from the rooms",roof_shape_flat:"Flat",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_side_top:"top",roof_swap:"Swap sides",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_window:"M\xE1i nh\xE0 window",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; the blind comes down over the glass from the top.",roof_window_tilt:"Tilt contact",roof_windows:"M\xE1i nh\xE0 windows",roof_windows_hint:"M\xE1i nh\xE0 windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",room:"Ph\xF2ng",room_name:"T\xEAn",room_names_short:"Ph\xF2ng names",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",rooms:"C\xE1c ph\xF2ng",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",rotation:"Rotation (\xB0)",run:"Run",save_error:"L\u01B0u th\u1EA5t b\u1EA1i",save_failed_detail:"L\u01B0u th\u1EA5t b\u1EA1i: {error}. Thay \u0111\u1ED5i c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i trong tr\xECnh duy\u1EC7t n\xE0y.",saved:"\u0110\xE3 l\u01B0u",saving:"\u0110ang l\u01B0u \u2026",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a Tivi's app_name). A value matches when it is equal or contained in the text (\\"youtube\\" matches \\"com.google.android.youtube.tv\\"); \\"*\\" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,sensor_kind:"C\u1EA3m bi\u1EBFn type",sensor_kind_contact:"C\u1EEDa s\u1ED5 contact (open/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",sensor_kind_handle:"Handle sensor (open/tilted/closed)",settings:"C\xE0i \u0111\u1EB7t",side_close:"Close",side_details:"Details of the selection",side_open:"Open the sidebar",side_pin:"Pin",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",side_pinned:"Pinned",sill:"Sill height (m)",size_d:"Depth (m)",size_h:"Height (m)",size_short_d:"D",size_short_h:"H",size_short_w:"W",size_w:"Width (m)",solar_add:"Solar field",solar_add_ground:"In the garden",solar_align_center:"Centre",solar_align_left:"Left",solar_align_right:"Right",solar_cols:"Modules per row",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_entity:"PV power of this field (e.g. its string)",solar_face:"M\xE1i nh\xE0 face",solar_face_gone:"roof face missing",solar_face_size:"M\xE1i nh\xE0 face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_field:"Solar field",solar_fields:"Solar fields",solar_fit:"Fill face",solar_flat:"flat roof",solar_flip:"Lean the other way",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_ground:"V\u01B0\u1EDDn / ground (on frames)",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_landscape:"Landscape",solar_look_black:"Full black",solar_look_blue:"Blue",solar_main:"Main roof",solar_module_h:"Module height (m)",solar_module_w:"Module width (m)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the M\xE1i nh\xE0 tool.",solar_partial:"only {n} of {total} fit on the face",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_portrait:"Portrait",solar_rotation:"Rotation (\xB0)",solar_rows:"Rows",solar_section:"M\u1EB7t c\u1EAFt {n}",solar_string:"String",solar_string_entity:"PV power of the string",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). C\u1EA3m bi\u1EBFn and inverter count for the whole string.",solar_string_inverter:"Inverter",solar_string_inverter_missing:"No inverter in the plan yet (\u0110\u1ED3 n\u1ED9i th\u1EA5t \\u2192 N\u0103ng l\u01B0\u1EE3ng & solar)",solar_string_inverter_none:"No inverter chosen",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_new:"M\u1EDBi string",solar_string_none:"No string",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_strings:"Strings",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_tilt:"Tilt of the frames (\xB0)",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",split_handle_hint:"Drag: width of the plan and the 3D view",spots_add:"\u0110\u1EB7t {n} \u0111\xE8n",spots_cols:"C\u1ED9t (tr\xE1i\u2013ph\u1EA3i)",spots_hint:"T\u1EA5t c\u1EA3 \u0111\xE8n s\u1EBD theo \u0111\xE8n \u0111\xE3 ch\u1ECDn (v\xED d\u1EE5: \u0111\xE8n tr\u1EA7n tr\xEAn c\xF9ng b\u1ED9 \u0111i\u1EC1u ch\u1EC9nh). Sau \u0111\xF3 m\u1ED7i \u0111\xE8n c\xF3 th\u1EC3 di chuy\u1EC3n v\xE0 k\u1EBFt n\u1ED1i v\u1EDBi \u0111\xE8n kh\xE1c nh\u01B0 b\u1EA5t k\u1EF3 \u0111\u1ED3 n\u1ED9i th\u1EA5t n\xE0o.",spots_place:"\u0110\u1EB7t \u0111\xE8n",spots_placed:"\u0110\xE3 \u0111\u1EB7t {n} \u0111\xE8n.",spots_rows:"H\xE0ng (tr\u01B0\u1EDBc\u2013sau)",spots_type:"\u0110\xE8n",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Di chuy\u1EC3n it fully into one room or make it smaller.",state_auto:"T\u1EF1 \u0111\u1ED9ng",state_clear:"R\xF5 r\xE0ng",state_closed:"\u0110\xF3ng",state_closing:"\u0110ang \u0111\xF3ng",state_cool:"L\xE0m l\u1EA1nh",state_detected:"Ph\xE1t hi\u1EC7n",state_dry:"Kh\xF4",state_fan_only:"Qu\u1EA1t duy nh\u1EA5t",state_heat:"H\xE2m",state_heat_cool:"H\xE2m/L\xE0m l\u1EA1nh",state_idle:"Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng",state_cleaning:"\u0110ang d\u1ECDn",state_returning:"V\u1EC1 tr\u1EA1m s\u1EA1c",state_docked:"\u0110ang \u1EDF tr\u1EA1m s\u1EA1c",robot_stop:"D\u1EEBng",robot_return:"V\u1EC1 tr\u1EA1m s\u1EA1c",state_locked:"\u0110\xE3 kh\xF3a",state_off:"T\u1EAFt",state_on:"B\u1EADt",state_open:"M\u1EDF",state_opening:"\u0110ang m\u1EDF",state_paused:"T\u1EA1m d\u1EEBng",state_playing:"\u0110ang ph\xE1t",state_recording:"\u0110ang ghi",state_streaming:"\u0110ang ph\xE1t tr\u1EF1c tuy\u1EBFn",state_unavailable:"Kh\xF4ng kh\u1EA3 d\u1EE5ng",state_unlocked:"\u0110\xE3 m\u1EDF kh\xF3a",stats:"Th\u1ED1ng k\xEA",stats_busy_camera:"camera",stats_busy_effect:"hi\u1EC7u \u1EE9ng m\xE0u s\u1EAFc",stats_busy_flash:"ho\u1EA1t h\xECnh",stats_busy_floors:"c\xE1c t\u1EA7ng",stats_busy_flow:"l\u01B0u l\u01B0\u1EE3ng n\u0103ng l\u01B0\u1EE3ng",stats_busy_openings:"c\u1EEDa/c\u1EEDa s\u1ED5",stats_busy_orbit:"quay camera",stats_busy_robot:"robot",stats_busy_roof:"m\xE1i nh\xE0",stats_busy_tint:"room tint",stats_fps:"FPS",stats_full:"to\xE0n b\u1ED9, t\u1EC9 l\u1EC7 pixel {r}",stats_idle:"\u0110ang ngh\u1EC9 (0 fps)",stats_low:"m\xE1y t\xEDnh b\u1EA3ng, t\u1EC9 l\u1EC7 pixel {r}",style_auto:"Automatic ({style})",style_bars:"With glazing bars",style_front:"Front door",style_front_glass:"Front door with glass",style_glass:"Glass door",style_interior:"Ph\xF2ng door",style_passage:"K\u1EBD h\u1EDF (no door)",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_sliding:"Sliding door",style_standard:"Standard",swipe_off:"Off",target_temp:"M\u1EE5c ti\xEAu",temp_down:"Cooler",temp_up:"Warmer",theme:"Look",theme_blueprint:"Blueprint",theme_day:"Day",theme_neon:"Neon",through_back:"Quay l\u1EA1i ch\u1EBF \u0111\u1ED9 xem",through_blend:"Pha tr\u1ED9n",through_camera:"Nh\xECn qua camera",tilt_entity:"Tilt sensor",tool_energy:"N\u0103ng l\u01B0\u1EE3ng",tool_furniture:"\u0110\u1ED3 n\u1ED9i th\u1EA5t",tool_hole:"T\u1EA7ng opening",tool_measure:"By measure",tool_meter:"C\xF4ng t\u01A1",tool_opening:"Doors & windows",tool_outdoor:"Ngo\xE0i tr\u1EDDi",tool_polygon:"H\xECnh d\u1EA1ng t\u1EF1 do",tool_rect:"H\xECnh ch\u1EEF nh\u1EADt",tool_roof:"M\xE1i nh\xE0",tool_select:"Ch\u1ECDn",tool_wall:"T\u01B0\u1EDDng",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",trail_short:"Trail",undo:"Ho\xE0n t\xE1c",unfix:"Release",view:"3D",volume:"Volume",wall_exterior:"T\u01B0\u1EDDng ngo\u1EA1i th\u1EA5t (m)",wall_exterior_short:"exterior wall",wall_height:"Height (m)",wall_height_full:"Full room height",wall_heights:"T\u01B0\u1EDDng heights",wall_interior:"T\u01B0\u1EDDng n\u1ED9i th\u1EA5t (m)",wall_length:"Length (m)",wall_n:"T\u01B0\u1EDDng {a}\u2013{b}",wall_thickness:"T\u01B0\u1EDDng thickness (m)",walls_auto:"T\u01B0\u1EDDng cao",walls_cut:"C\u1EAFt",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_fog:"S\u01B0\u01A1ng m\xF9 (greys the scene)",weather_effect_lightning:"L\u1EDDi in storms",weather_effect_rain:"M\u01B0a",weather_effect_sky:"M\u1EB7t tr\u1EDDi and moon in the sky",weather_effect_snow:"Tuy\u1EBFt",weather_effects:"Th\u1EDDi ti\u1EBFt effects in 3D",weather_entity:"Th\u1EDDi ti\u1EBFt entity",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Th\u1EDDi ti\u1EBFt outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",weather_short:"Th\u1EDDi ti\u1EBFt",width:"Chi\u1EC1u r\u1ED9ng (m)",x:"X (m)",z:"Y (m)",area_m2:"Di\u1EC7n t\xEDch {a} m\xB2",card_control_co2:"CO\u2082",climate_co2:"CO\u2082",heat_co2:"CO\u2082",heat_short_co2:"CO\u2082",no_persons:"Kh\xF4ng c\xF3 ng\u01B0\u1EDDi n\xE0o trong Home Assistant.",split_3d:"3D c\u1EA1nh",split_3d_hint:"Live-3D c\u1EA1nh b\xEAn s\u01A1 \u0111\u1ED3: k\xE9o v\xE0 xoay \u0111\u1ED3 n\u1ED9i th\u1EA5t, thi\u1EBFt b\u1ECB \u2013 c\xF3 ch\u1EE9c n\u0103ng ho\xE0n t\xE1c, \u0111\u01B0\u1EE3c l\u01B0u c\xF9ng s\u01A1 \u0111\u1ED3"};function x(r,e,t={}){let n=r?.language??navigator.language,o;n.startsWith("vi")?o=pi:n.startsWith("de")?o=dr:o=hr;let i=o[e]??hr[e]??dr[e]??String(e);for(let[s,a]of Object.entries(t))i=i.replace(`{${s}}`,String(a));return i}function O(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var fi=["camera_cockpit","weather","screens"],mi=["fridge_smart"];var ur=r=>(r??navigator.language).toLowerCase().startsWith("de");function pr(r){return ur(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var _i={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function fr(r,e){let t=ur(r),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",o=e?_i[e]:void 0,i=o?t?o.de:o.en:"",[s,a]=i.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function gi(r=De()){let e=new Set;for(let t of r)for(let n of t.features??[])(fi.includes(n)||mi.includes(n))&&e.add(n);return e}function V(r,e){return gi(e).has(r)}var mr={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4",vacuum:"M7 18h10M6 14h12v4H6zM9 18v2M15 18v2M12 4a8 8 0 0 1 6 13H6a8 8 0 0 1 6-13zM12 8v4M14.5 10h.01"};function et(r){return mr[r]}function Ce(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${mr[r]}"/></svg>`}var ee=(r,e)=>x(r,e);function W(r,e){if(!e||F(e))return ee(r,"state_unavailable");let t=e.attributes;switch(k(e.entity_id)){case"light":return e.state!=="on"?ee(r,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:ee(r,"state_on");case"switch":case"fan":return ee(r,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:we(r,e.state);case"vacuum":{let n=typeof t.battery_level=="number"?`${Math.round(t.battery_level)} %`:null;return n?`${n} \xB7 ${we(r,e.state)}`:we(r,e.state)}case"climate":{let n=typeof t.current_temperature=="number"?`${O(r,t.current_temperature,1)} ${r?Z(r):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${ee(r,"state_off")}`:ee(r,"state_off"):n??we(r,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",o=[t.app_name,t.media_title,t.source].find(i=>typeof i=="string"&&i);return n&&o?o:we(r,e.state)}case"lock":case"camera":return we(r,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?ee(r,e.state==="on"?"state_open":"state_closed"):ee(r,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),o=t.unit_of_measurement??"",i=r?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${O(r,n,i)}${o?` ${o}`:""}`:e.state}default:return""}}function we(r,e){let t=`state_${e}`,n=x(r,t);return n===t?e:n}function _r(r,e){let t=[];for(let n of e.floors)for(let o of n.placements){let i=k(o.entity_id),s=r.states[o.entity_id];if(!i||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&z([o.x,o.z],c.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;t.push({id:o.entity_id,floorId:n.id,roomId:a?.id??null,x:o.x,z:o.z,y:o.y??_e(i,n.height,o.mount??null),lamp:i==="light"?o.mount??"ceiling":null,model:i==="camera"?o.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:i==="camera"?bi(r,o.entity_id):void 0,fov:o.fov??void 0,reach:o.reach??void 0,tilt:o.tilt??void 0,rotation:o.rotation??0,icon:Ce(i),name:D(r,o.entity_id,l),text:W(r,s),active:ce(s),unavailable:F(s),glow:i==="light"?Fe(s):null,show:o.marker??void 0,fixed:!!o.locked})}return t}function bi(r,e){return He(r,e).some(t=>r.states[t]?.state==="on")}function He(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(r.states[n]?.attributes.device_class))):[]}function gr(r){return r.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function te(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function br(r,e){let t=e.slice(0,e.indexOf("."));return r.callService(t,"toggle",{entity_id:e})}var q=N`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,ne=N`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  .fp3d-field select option {
    background: var(--fp3d-chrome-solid);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var wi=4,vi=3e3,yi=8,ki=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ve=r=>p`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${et(r)} />
  </svg>`,tt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Ot=r=>p`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,Vt=class extends L{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},vi)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return x(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return D(this.hass,e,this.areaName)}nameButton(e){return p`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>te(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return p`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${F(e)}
      @click=${o}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return w;let t=H(this.hass,e.area_id),n=this.memo,{shown:o,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?lr(this.hass,this.floor,e):{shown:t,more:[]}},s=Ct(this.hass,i).map(v=>v.primary),a=s.length,l=this._showAll?[...o,...s]:o,c=v=>l.filter($=>v.includes(k($))).map($=>this.hass.states[$]),d=c(["light"]),h=c(["cover"]),u=c(["climate"]),f=c(["media"]),g=c(["switch","fan","lock"]),_=c(["sensor","binary"]),M=c(["camera"]);this.hasCameras=M.length>0;let b=c(["scene","script"]),m=this.facts(u),S=d.filter(v=>v.state==="on");return p`<section class="fp3d-rp" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${m.length?p`<p class="fp3d-rp-facts">${m.join(" \xB7 ")}</p>`:w}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?w:p`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:p`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(v=>this.lightRow(v)),S.length?p`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:S.map(v=>v.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:w):w}
        ${h.length?this.section("panel_covers",h.map(v=>this.coverRow(v))):w}
        ${u.length?this.section("panel_climate",u.map(v=>this.climateRow(v))):w}
        ${f.length?this.section("panel_media",f.map(v=>this.mediaRow(v))):w}
        ${g.length?this.section("panel_switches",g.map(v=>this.switchRow(v))):w}
        ${M.length?this.section("panel_cameras",M.map(v=>this.cameraTile(v))):w}
        ${_.length?this.section("panel_sensors",_.map(v=>this.sensorRow(v))):w}
        ${b.length?this.section("panel_scenes",[p`<div class="fp3d-rp-scenes">
                  ${b.map(v=>p`<button
                      class="fp3d-btn"
                      ?disabled=${F(v)}
                      @click=${()=>this.call(k(v.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:v.entity_id})}
                    >
                      ${this.name(v.entity_id)}
                    </button>`)}
                </div>`]):w}
        ${a?p`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:w}
      </div>
    </section>`}facts(e){let t=[],n=this.room,o=(l,c)=>{let d=Je(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${O(this.hass,Ie(this.hass,d),1)} ${Z(this.hass)}`;let h=Pt(this.hass,this.floor,n,l)[0],u=this.hass.states[h]?.attributes.unit_of_measurement??c;return`${O(this.hass,d,1)} ${u}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?t.push(s):i&&n.climate?.temperature!=="none"&&t.push(`${O(this.hass,i.attributes.current_temperature,1)} ${Z(this.hass)}`);let a=o("humidity","%");return a&&t.push(a),t}section(e,t,n=w){return p`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",o=t.supported_color_modes??[],i=o.some(u=>u!=="onoff"),s=o.includes("color_temp"),a=o.some(u=>["hs","rgb","rgbw","rgbww","xy"].includes(u)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,h=e.entity_id;return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ve("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${W(this.hass,e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:h}))}
      ${n&&i?p`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${u=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(u.target.value)})}
          /></label>`:w}
      ${n&&s?p`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${u=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(u.target.value)})}
          /></label>`:w}
      ${n&&a?p`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${ki.map(u=>p`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${u.join(",")})"
                aria-label="rgb(${u.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:u})}
              ></button>`)}
          </div>`:w}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,o=e.entity_id,i=F(e);return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${ve("cover")}</span>
      ${this.nameButton(o)}
      <span class="fp3d-rp-state">${W(this.hass,e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${n&yi?p`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:w}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${n&wi&&typeof t.current_position=="number"?p`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:w}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${ve("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${W(this.hass,e)}</span>
      ${o!==null?p`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${O(this.hass,o,1)} ${Z(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+i)}>+</button>
          </div>`:w}
      ${l.length>1?p`<div class="fp3d-rp-chips">
            ${l.map(d=>p`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:w}
    </div>`}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,o=F(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${ve("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(e.state)}</span>
      ${i?p`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:w}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Ot(tt.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${F(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${Ot(e.state==="playing"?tt.pause:tt.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Ot(tt.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?p`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:w}
    </div>`}switchRow(e){let t=e.entity_id,n=k(t),o=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${ve(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${W(this.hass,e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!F(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,o=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return p`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>te(this,e.entity_id)}>
        ${n?p`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:p`<span class="fp3d-rp-note">${W(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${o?p`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:w}
    </div>`}sensorRow(e){let t=k(e.entity_id),n=t==="binary"&&e.state==="on";return p`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ve(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${W(this.hass,e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[q,ne,N`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Vt);var xi={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function We(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function wr(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=xi[t.state];if(!n)return null;let o=t.attributes,i=n.cloud??0;typeof o.cloud_coverage=="number"&&(i=Math.min(1,Math.max(0,o.cloud_coverage/100)));let s=n.wind??0;if(typeof o.wind_speed=="number"){let a=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:t.entity_id,condition:t.state,rain:n.rain??0,snow:n.snow??0,fog:n.fog??0,cloud:i,wind:s,lightning:!!n.lightning}}function vr(r,e){let t=new Set(e??Vn);return{...r,rain:t.has("rain")?r.rain:0,snow:t.has("snow")?r.snow:0,fog:t.has("fog")?r.fog:0,cloud:t.has("clouds")?r.cloud:0,lightning:t.has("lightning")&&r.lightning,sky:t.has("sky")}}var Si=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),yr={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function kr(r,e,t){let n=[];for(let s of e.floors)for(let a of s.rooms){let l=H(r,a.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!yr[String(r.states[c]?.attributes.device_class)]);l.length&&n.push({floorId:s.id,roomId:a.id,sensors:l})}let o=Object.keys(r.states),i=e.settings.rain_warning===!1?null:We(r,t??e.settings.weather_entity);return{rooms:n,alarms:o.filter(s=>s.startsWith("alarm_control_panel.")),weather:i}}function xr(r){return[...r.rooms.flatMap(e=>e.sensors),...r.alarms,...r.weather?[r.weather]:[]]}function Sr(r,e,t,n){let o=[];for(let s of t.rooms)for(let a of s.sensors){let l=r.states[a];l?.state==="on"&&o.push({kind:yr[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!t.weather&&Si.has(r.states[t.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let c=Q(r,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||o.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of t.alarms){let a=r.states[s]?.state;a==="triggered"?o.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&o.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return o}function $r(r){switch(r){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function Kt(r,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,o=r?D(r,t.entity):t.entity,i=x(r,`alert_${t.kind}`,{name:o});return n?`${n.name} \xB7 ${i}`:i}var G=(r,e)=>[r[0]-e[0],r[1]-e[1]],Le=(r,e)=>[r[0]+e[0],r[1]+e[1]],de=(r,e)=>[r[0]*e,r[1]*e],Ut=(r,e)=>r[0]*e[0]+r[1]*e[1],Be=(r,e)=>r[0]*e[1]-r[1]*e[0],nt=r=>Math.hypot(r[0],r[1]),Ne=r=>{let e=nt(r)||1;return[r[0]/e,r[1]/e]},Mr=r=>[-r[1],r[0]],Tr=r=>[r[1],-r[0]];function qt(r,e,t=[]){let n=e.eps??.005,o=[],i=t.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),s=[],a=b=>{for(let m=0;m<s.length;m++)if(Math.abs(s[m][0]-b[0])<=n&&Math.abs(s[m][1]-b[1])<=n)return m;return s.push([b[0],b[1]]),s.length-1},l=[];for(let b of r){let m=b.points;if(m.length<3||Math.abs(J(m))<1e-6)continue;let S=J(m)>0,v=m.map(a);for(let $=0;$<m.length;$++){let A=v[$],R=v[($+1)%m.length];A!==R&&l.push(S?{u:A,v:R,room:b.id,edge:$,forward:!0}:{u:R,v:A,room:b.id,edge:$,forward:!1})}}let c=i.map(b=>[a(b.a),a(b.b)]),d=[];for(let b of l){let m=s[b.u],S=s[b.v],v=G(S,m),$=nt(v),A=de(v,1/$),R=[];for(let P=0;P<s.length;P++){if(P===b.u||P===b.v)continue;let y=G(s[P],m),T=Ut(y,A);T<=n||T>=$-n||Math.abs(Be(A,y))<=n&&R.push({t:T,id:P})}R.sort((P,y)=>P.t-y.t);let I=[{t:0,id:b.u},...R,{t:$,id:b.v}];for(let P=0;P+1<I.length;P++){let y=I[P],T=I[P+1],B=b.forward?y.t:$-T.t,j=b.forward?T.t:$-y.t;d.push({u:y.id,v:T.id,room:b.room,edge:b.edge,t0:B,t1:j})}}let h=new Map;for(let b of d){let m=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,S=h.get(m);S||h.set(m,S=[]),S.push(b)}let u=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),f=b=>{let m=b.map(S=>r.find(v=>v.id===S.room)?.wall_heights?.[S.edge]).filter(S=>typeof S=="number"&&S>0);return m.length?Math.min(...m):void 0},g=[];for(let b of h.values()){let m=b[0],S=b.find(v=>v!==m&&v.u===m.v&&v.v===m.u&&v.room!==m.room);for(let v of b)v!==m&&v!==S&&v.room!==m.room&&o.push(`overlap:${m.room}:${v.room}`);S?g.push({a:m.u,b:m.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:m.room,roomRight:S.room,sources:[u(m),u(S)],height:f([m,S])}):g.push({a:m.u,b:m.v,left:0,right:e.exterior,exterior:!0,roomLeft:m.room,roomRight:null,sources:[u(m)],height:f([m])})}i.forEach((b,m)=>{let[S,v]=c[m];if(S===v)return;let $=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],A=r.find(P=>P.points.length>=3&&z($,P.points))?.id??null,R=(b.thickness??e.interior)/2,I=typeof b.height=="number"&&b.height>0?b.height:void 0;g.push({free:b.id,a:S,b:v,left:R,right:R,exterior:!1,roomLeft:A,roomRight:A,sources:[],height:I})}),g=Mi(g,s);let _=Ei(g,s);return{walls:g.map((b,m)=>{let S=s[b.a],v=s[b.b],$=_.get(`${m}:a`),A=_.get(`${m}:b`),R=Ai([$.right,A.left,v,A.right,$.left,S],1e-6);return{id:$i(S,v),a:[S[0],S[1]],b:[v[0],v[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:R,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(o)]}}function $i(r,e){let t=i=>Math.round(i*100),[n,o]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(o[0])}_${t(o[1])}`}function Er(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Mi(r,e){let t=r.slice(),n=!0;for(;n;){n=!1;let o=new Map;t.forEach((i,s)=>{for(let a of[i.a,i.b]){let l=o.get(a);l||o.set(a,l=[]),l.push(s)}});for(let[i,s]of o){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==i&&(a=Er(a)),l.a!==i&&(l=Er(l)),a.a===l.b)continue;let c=Ne(G(e[a.b],e[a.a])),d=Ne(G(e[l.b],e[l.a]));if(Math.abs(Be(c,d))>1e-6||Ut(c,d)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let h={...a,b:l.b,sources:Ti(a.sources,l.sources)},u=t.filter((f,g)=>g!==s[0]&&g!==s[1]);u.push(h),t.length=0,t.push(...u),n=!0;break}}return t}function Ti(r,e){let t=r.map(n=>({...n}));for(let n of e){let o=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):t.push({...n})}return t}function Ei(r,e){let t=new Map;r.forEach((o,i)=>{let s=Ne(G(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:de(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,i]of t){let s=e[o];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:Le(s,de(Mr(c.d),c.left)),right:Le(s,de(Tr(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],h=i[(c+1)%i.length],u=Le(s,de(Mr(d.d),d.left)),f=Le(s,de(Tr(h.d),h.right)),g=Be(d.d,h.d);if(Math.abs(g)<1e-4)continue;let _=Be(G(f,u),h.d)/g,M=Le(u,de(d.d,_));nt(G(M,s))>l||(n.get(d.key).left=M,n.get(h.key).right=M)}}return n}function Ai(r,e){let t=r.filter((o,i)=>nt(G(o,r[(i+1)%r.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let o=0;o<t.length;o++){let i=t[(o+t.length-1)%t.length],s=t[o],a=t[(o+1)%t.length],l=G(s,i),c=G(a,s);if(Math.abs(Be(Ne(l),Ne(c)))<1e-7&&Ut(l,c)>0){t=t.filter((d,h)=>h!==o),n=!0;break}}}return t}var he=.03,Ri=.07;function ye(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function zi(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function Gt(r,e){if(zi(r,e))return e;let t=r.entities?.[e]?.device_id;return t?It(r,t).find(n=>n!==e)??null:null}function zr(r,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),o=[],i=new Set;for(let s of e.floors)for(let a of s.placements){let l=Gt(r,a.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),o.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ye(r.states[l])??0)}))}return o}function Dr(r,e,t){let n=e.energy,o=n.grid?ye(r.states[n.grid],n.grid_invert):null,i=n.solar?ye(r.states[n.solar]):null,s=n.battery?ye(r.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(r.states[n.battery_soc]?.state):NaN,l=n.tariff?r.states[n.tariff]:void 0,c=Number(l?.state),d=null;return o!==null||i!==null||s!==null?d=Math.max(0,(o??0)+Math.max(0,i??0)+(s??0)):t.length&&(d=t.reduce((h,u)=>h+u.power,0)),{grid:o,solar:i===null?null:Math.max(0,i),battery:s,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(c)?{value:c,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:d}}function rt(r,e){return r.pos.push(e),r.adj.push([]),r.pos.length-1}function ke(r,e,t){let n=Math.hypot(r.pos[e][0]-r.pos[t][0],r.pos[e][1]-r.pos[t][1]);r.adj[e].push({to:t,w:n}),r.adj[t].push({to:e,w:n})}function Di(r,e){let t=r.length,n=r.map((o,i)=>{let s=r[(i+1)%t],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,d=-l/c,h=a/c;return{p:[o[0]+d*e[i],o[1]+h*e[i]],d:[a/c,l/c],n:[d,h]}});return r.map((o,i)=>{let s=n[(i-1+t)%t],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[o[0]+a.n[0]*e[i],o[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Pi(r){return J(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Ii(r,e,t){let n={pos:[],adj:[],rings:new Map},{walls:o}=qt(r.rooms,{exterior:e,interior:t},r.walls??[]);for(let i of r.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=Pi(i),l=s.length,c=s.map((u,f)=>{let g=a?(l-2-f+l)%l:f,_=o.some(M=>!M.exterior&&M.sources.some(b=>b.room_id===i.id&&b.edge===g));return Ri+(_?t/2:0)}),d=Di(s,c).map(u=>rt(n,u)),h=d.map((u,f)=>[u,d[(f+1)%l]]);for(let[u,f]of h)ke(n,u,f);n.rings.set(i.id,h)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=ot(n,i.roomLeft,s),l=ot(n,i.roomRight,s);a!==null&&l!==null&&ke(n,a,l)}return n}function ot(r,e,t){let n=r.rings.get(e);if(!n)return null;let o=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],h=c*c+d*d||1,u=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/h)),f=[a[0]+c*u,a[1]+d*u],g=Math.hypot(t[0]-f[0],t[1]-f[1]);(!o||g<o.d)&&(o={seg:s,q:f,d:g})}if(!o)return null;let i=rt(r,o.q);return ke(r,i,o.seg[0]),ke(r,i,o.seg[1]),i}function Ar(r,e){let t=r.rooms.filter(i=>i.points.length>=3),n=t.find(i=>z(e,i.points));if(n)return n;let o=null;for(let i of t)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!o||a<o.d)&&(o={room:i,d:a})}return o?.room??null}function Fi(r,e){let t=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),o=r.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let s=0;s<t.length;s++)!o[s]&&t[s]<1/0&&(i<0||t[s]<t[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:a}of r.adj[i])t[i]+a<t[s]-1e-9&&(t[s]=t[i]+a,n[s]=i)}return{dist:t,prev:n}}var Rr=new WeakMap;function Ci(r,e){let t=r.energy.meter,n=r.floors.find(d=>d.id===t.floor_id),o=[],{wall_exterior:i,wall_interior:s}=r.settings,a=new Map,l=new Map;e.forEach((d,h)=>l.set(d.floorId,[...l.get(d.floorId)??[],h]));let c=r.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let h=d.elevation>n.elevation,u=l.get(d.id),f=u.every(_=>e[_].kind==="battery")?"battery":"consumer";o.push({floorId:n.id,a:[t.x,he,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:u,kind:f});let g=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[t.x,h?-.2:d.height,t.z],b:[t.x,he,t.z],dist:g,members:u,kind:f}),a.set(d.id,g+.25)}for(let d of c){let h=Ii(d,i,s),u=Ar(d,[t.x,t.z]);if(!u)continue;let f=rt(h,[t.x,t.z]),g=ot(h,u.id,[t.x,t.z]);if(g===null)continue;ke(h,f,g);let _=[];for(let v of l.get(d.id)){let $=e[v],A=Ar(d,[$.x,$.z]);if(!A)continue;let R=rt(h,[$.x,$.z]),I=ot(h,A.id,[$.x,$.z]);I!==null&&(ke(h,R,I),_.push({node:R,member:v}))}let{dist:M,prev:b}=Fi(h,f),m=new Map;for(let v of _)if(Number.isFinite(M[v.node]))for(let $=v.node;b[$]>=0;$=b[$]){let A=b[$],R=`${A}>${$}`,I=m.get(R)??{a:A,b:$,members:[]};I.members.push(v.member),m.set(R,I)}let S=a.get(d.id)??0;for(let{a:v,b:$,members:A}of m.values()){let R=h.pos[v],I=h.pos[$],P=A.every(y=>e[y].kind==="battery")?"battery":"consumer";o.push({floorId:d.id,a:[R[0],he,R[1]],b:[I[0],he,I[1]],dist:S+M[v],members:A,kind:P})}}return o}function Pr({building:r,consumers:e,summary:t,battery:n}){let o=r.energy.meter;if(!o)return[];let i=r.floors.find(f=>f.id===o.floor_id);if(!i)return[];let{wall_exterior:s,wall_interior:a}=r.settings,l=e.map(f=>({floorId:f.floorId,x:f.x,z:f.z,kind:"consumer",power:f.power}));n&&t.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(t.battery)});let c=`${o.floor_id}:${o.x},${o.z}|${l.map(f=>`${f.floorId}:${f.x},${f.z}:${f.kind}`).join(";")}`,d=Rr.get(r);d||Rr.set(r,d=new Map);let h=d.get(c);h||(h=Ci(r,l),d.clear(),d.set(c,h));let u=h.map(f=>({floorId:f.floorId,a:f.a,b:f.b,dist:f.dist,power:f.members.reduce((g,_)=>g+l[_].power,0),kind:f.kind}));if(t.grid!==null){let{walls:f}=qt(i.rooms,{exterior:s,interior:a},i.walls??[]),g=null;for(let _ of f){if(!_.exterior)continue;let M=_.b[0]-_.a[0],b=_.b[1]-_.a[1],m=M*M+b*b||1,S=Math.min(1,Math.max(0,((o.x-_.a[0])*M+(o.z-_.a[1])*b)/m)),v=[_.a[0]+M*S,_.a[1]+b*S],$=Math.hypot(o.x-v[0],o.z-v[1]),A=Math.sqrt(m);(!g||$<g.d)&&(g={q:v,out:[b/A,-M/A],d:$})}if(g){let _=[g.q[0]+g.out[0]*(s+1.4),he,g.q[1]+g.out[1]*(s+1.4)],M=[o.x,he,o.z],b=t.grid>=0;u.push({floorId:i.id,a:b?_:M,b:b?M:_,dist:0,power:Math.abs(t.grid),kind:b?"grid":"export"})}}if(t.solar!==null&&u.push({floorId:i.id,a:[o.x+.08,i.height+.6,o.z+.08],b:[o.x+.08,he,o.z+.08],dist:0,power:t.solar,kind:"solar"}),t.battery!==null&&t.battery>0)for(let f of u)f.kind==="battery"&&([f.a,f.b]=[f.b,f.a]);return u}function Ir(r,e){let t=[.22,.88,1],n=[1,.78,.2],o=[.35,1,.55];if(r==="grid")return t;if(r==="export"||r==="solar")return n;if(r==="battery")return o;let i=[[Math.max(0,e.grid??0),t],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),n],[Math.max(0,e.battery??0),o]],[s]=i.reduce((a,l)=>l[0]>a[0]?l:a);return s>0?i.find(a=>a[0]===s)[1]:t}var jt=["neon","blueprint","day"],Oe={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var it={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Fr(r,e){let t=it[r].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[o,i]=t[n],[s,a]=t[n-1];if(e<=o){let l=(e-s)/(o-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return t[t.length-1][1]}function Cr(r,e,t){let n=new Map;for(let o of e.floors)for(let i of o.rooms){let s=Je(r,o,i,t);s!==null&&n.set(i.id,s)}return n}function Hr(r){let e=it[r].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([o,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((o-t)/(n-t)*100)}%`).join(", ")})`}function Ve(r,e){if(!$t(e))return x(r,`furn_${e}`);let t=U(e);return t?Ln(t,r?.language??navigator.language):x(r,"pack_missing_item")}var Hi=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function st(r){return r&&r!=="none"?r:null}function Wi(r,e){if(e.type!=="parking")return null;let t=st(e.entity);if(t){let i=r.states[t];if(!i||!Hi.has(i.state.toLowerCase()))return null}let n=e.vehicle??null,o=st(e.type_entity);if(o&&e.types?.length){let i=(r.states[o]?.state??"").trim().toLowerCase();if(i){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===i)??e.types.find(l=>s(l.state)&&i.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&U(n)?n:null}function Xt(r,e){let t=new Map;for(let n of e.floors)for(let o of n.furniture){let i=Wi(r,o);i&&t.set(o.id,i)}return t}function Wr(r){return r.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[st(t.entity),st(t.type_entity)])).filter(e=>!!e)}var at=1800*1e3,Li=new Set(["motion","occupancy","presence"]);function Lr(r,e){return e.startsWith("binary_sensor.")&&Li.has(String(r.states[e]?.attributes.device_class))}function lt(r,e){let t=[],n=new Set,o=(i,s,a,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:s,x:a,z:l}))};for(let i of e.floors)for(let s of i.placements)if(Lr(r,s.entity_id))o(s.entity_id,i.id,s.x,s.z);else if(k(s.entity_id)==="camera")for(let a of He(r,s.entity_id))o(a,i.id,s.x,s.z);for(let i of e.floors)for(let s of i.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=le(s.points);for(let c of H(r,s.area_id))Lr(r,c)&&o(c,i.id,a,l)}return t}function Br(r,e,t,n=at){let o=t-n,i=[];for(let[s,a]of Object.entries(r)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=o&&d<=t&&i.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=o&&a<=t)||i.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||i.push({entity:s.entity,time:a})}return i.sort((s,a)=>s.time-a.time)}function Nr(r,e,t,n=at){let o=new Map(r.map(s=>[s.entity,s])),i=[];for(let s of e){let a=o.get(s.entity);if(!a)continue;let l=i[i.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||i.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return i.slice(-40)}function Or(r,e){return new Date(e).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var Vr='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var ct=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Kr(r,e){let t=[],n=be(r,e.floors),o=e.floors.length>1;for(let i of e.floors){let s=(d,h)=>i.rooms.find(u=>u.points.length>=3&&z([d,h],u.points))??null,a=(d,h)=>[s(d,h)?.name,o?i.name:null].filter(Boolean).join(" \xB7 ");for(let d of i.rooms){if(d.points.length<3)continue;let[h,u]=le(d.points);t.push({kind:"room",name:d.name,where:o?i.name:"",floorId:i.id,roomId:d.id,entity:null,icon:null,x:h,z:u,y:0})}let l=new Set,c=(d,h,u,f)=>{l.has(d)||!r.states[d]||(l.add(d),t.push({kind:"device",name:D(r,d),where:a(h,u),floorId:i.id,roomId:s(h,u)?.id??null,entity:d,icon:k(d),x:h,z:u,y:f}))};for(let d of i.placements)c(d.entity_id,d.x,d.z,d.y??_e(k(d.entity_id)??"sensor",i.height,d.mount));for(let d of i.furniture){let h=n.get(d.id),u=h?.entity??h?.power;u&&c(u,d.x,d.z,Math.min(i.height-.3,Math.max(.5,d.h)))}}return t}function Ur(r,e,t=8){let n=ct(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let o=r.filter(a=>{let l=ct(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),i=ct(e.trim()),s=a=>(ct(a.name).startsWith(i)?0:2)+(a.kind==="room"?0:1);return o.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Bi=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ni=[2200,2700,3200,4e3,5e3,6500],Oi=["hs","rgb","rgbw","rgbww","xy"],Vi=4;function Yt(r){let e=r.attributes.supported_color_modes??[],t=e.some(n=>Oi.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Jt(r){return((r.attributes.supported_features??0)&Vi)!==0&&typeof r.attributes.current_position=="number"}var Zt=class extends L{static properties={hass:{attribute:!1},entity:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{k(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return p`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?p`<img src=${n} alt=${D(this.hass,this.entity)} />`:p`<span class="qm-note">${W(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return x(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:D(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){te(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,o)=>{let i=o/t*Math.PI*2-Math.PI/2;return p`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=Yt(e),n=e.state==="on",o=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?Bi.map(s=>p`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Ni.map(s=>p`<button class="qm-swatch" style="background:${Ki(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return p`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?p`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:w}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",o=Jt(e),i=(c,d,h,u=!1)=>p`<button class="qm-swatch qm-slot ${u?"qm-slot-on":""}" aria-label=${d} @click=${h}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return p`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:W(this.hass,e)}</b>
        </button>
      </div>
      ${o?p`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:w}`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return p`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${W(this.hass,e)}</b>
      </button>
    </div>`}renderVacuum(e){let t=e.state==="cleaning"||e.state==="returning",n=typeof e.attributes.battery_level=="number"?`${e.attributes.battery_level} %`:null;return p`<div class="qm-ring qm-ring-small">
        ${this.ring([p`<button class="qm-swatch qm-slot" aria-label=${this.t("robot_return")} @click=${()=>this.call("vacuum","return_to_base")}>⌂</button>`,p`<button class="qm-swatch qm-slot ${e.state==="idle"?"qm-slot-on":""}" aria-label=${this.t("robot_stop")} @click=${()=>this.call("vacuum","stop")}>■</button>`])}
        <button
          class="qm-power ${t?"qm-on":""}"
          aria-pressed=${t}
          @click=${()=>this.ask()&&this.call("vacuum","toggle")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${n} \xB7 `:""}${W(this.hass,e)}</b>
        </button>
      </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return w;let t=k(this.entity),n=F(e)?p`<p class="qm-note">${W(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="vacuum"?this.renderVacuum(e):this.renderToggle(e);return p`<div class="qm" role="dialog" aria-label=${D(this.hass,this.entity)}>
      <div class="qm-title">${D(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[q,N`
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function Ki(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=(n,o)=>Math.round(n+(o-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Zt);var Ui=new URL(import.meta.url),qi=new URL("./neonplan3d-3d.js?v=4f76ac82e927",Ui).href,qr;function Gr(){return qr??=import(qi),qr}var jr=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Gi(r,e,t){let n=jr(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let o of e.floors)for(let i of o.rooms)if([i.name,i.area_id??"",i.area_id?r.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(jr).includes(n))return{floorId:o.id,room:i};return null}function ji(r){let e=r.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Xr(r,e){let t=[],n=new Map;for(let o of e.presence){let i=r.states[o.person];if(!i||!o.sensor||i.state!=="home"&&i.state!=="on")continue;let s=r.states[o.sensor];if(!s)continue;let a=Gi(r,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=le(a.room.points),h=-Math.PI/2+.9+l*1.15,u=.75,f=i.attributes.friendly_name??o.person;t.push({id:o.person,name:f,initials:ji(f),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(h)*u,z:d+Math.sin(h)*u})}return t}function Zr(r,e,t,n){let o=new Map,i=s=>!!s&&r.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Ht(r,H(r,c.area_id)))k(d)==="light"&&a.add(d);for(let c of s.placements)k(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(Q(r,d,"garage").cover??1)<.95;if(c.type==="door")return i(d.contact)||i(d.contact2??null);let h=Q(r,d,"window");return h.open>.5||h.tilt>.5||h.open2>.5||h.tilt2>.5}).length;o.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>r.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return o}function Yr(r,e){let t=[e.rooms===1?x(r,"floor_rooms_one"):x(r,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(x(r,"floor_lights",{n:e.lightsOn})),e.open&&t.push(x(r,"floor_open",{n:e.open})),e.persons&&t.push(x(r,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Qt=class extends L{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},furnish:{type:Boolean},trail:{type:Boolean},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_find:{state:!0},_thumbs:{state:!0},floorThumbs:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._through=null,this._blend=.6,this._find=null,this._thumbs=[],this.floorThumbs=!0,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,clearInterval(this.trailTimer),this.trailTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Gr();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,o)=>this.fire("room-tap",{floorId:n,roomId:o}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?x(this.hass,"floor_rooms_one"):x(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,o,i)=>this.onDeviceTap(n,o,i),onDeviceHold:(n,o,i)=>this.onDeviceHold(n,o,i),onRoomDoubleTap:(n,o)=>this.onRoomDoubleTap(n,o),onDeviceSwipe:(n,o,i,s,a)=>this.onDeviceSwipe(n,o,i,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,o,i)=>this.fire("furniture-move",{id:n,x:o,z:i}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,o,i)=>this.fire("device-move",{id:n,x:o,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this._low=this.viewer.low,this.viewer.setPacks([...De()]),this.shownPacks=je(),this.building&&this.viewer.setBuilding(this.building),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==je()&&(this.shownPacks=je(),t.setPacks([...De()]),this.hass&&this.building&&t.setParked(Xt(this.hass,this.building))),e.has("building")&&this.building&&t.setBuilding(this.building),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(o=>e.has(o));(n||e.has("hass"))&&this.syncDevices(n),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("explode")&&t.setExplode(this.explode),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let o=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==o.entities){this.openingLinks=Qe(o,n.floors),this.furnitureLinks=be(o,n.floors),this.linkedRegistry=o.entities,this.findIndex=null;let y=[...this.openingLinks.values()].flatMap(E=>[E.cover,E.contact,E.tilt,E.contact2??null,E.tilt2??null,E.position??null]),T=gr(n),B=T.filter(E=>k(E)==="camera").flatMap(E=>He(o,E)),j=T.map(E=>Gt(o,E)),Se=n.energy,ro=n.presence.flatMap(E=>[E.person,E.sensor]),oo=n.floors.flatMap(E=>E.rooms.flatMap(K=>H(o,K.area_id).filter(re=>k(re)==="light"))),io=[...this.furnitureLinks.values()].flatMap(E=>[E.entity,E.power]),so=n.floors.flatMap(E=>E.furniture.flatMap(K=>[K.door_left??null,K.door_right??null])),ao=(n.settings.roof?.windows??[]).flatMap(E=>[E.cover,E.contact,E.tilt]).filter(E=>!!E&&E!=="none"),lo=n.floors.flatMap(E=>E.furniture.filter(K=>K.type==="robot_vacuum").map(K=>Nt(o,this.furnitureLinks.get(K.id)?.entity??null,K.room_sensor))),co=n.floors.flatMap(E=>E.furniture.flatMap(K=>(K.pictures??[]).flatMap(re=>[re.entity,...re.image.startsWith("camera:")?[re.image.slice(7)]:[]]))),ho=this.heatMode==="none"?[]:n.floors.flatMap(E=>E.rooms.flatMap(K=>H(o,K.area_id).filter(re=>re.startsWith("sensor."))));this.alertSrc=this.alerts?kr(o,n,this.weatherEntityId):null;let uo=this.alertSrc?xr(this.alertSrc):[],po=Wr(n.floors),fo=lt(o,n).map(E=>E.entity),mo=We(o,this.weatherEntityId??n.settings.weather_entity),_o=[...T,...B,...y,...j,...io,...so,...lo,...ao,...co,Se.grid,Se.solar,Se.battery,Se.battery_soc,Se.tariff,...ro,...oo,...ho,...uo,...po,...fo,mo,"sun.sun"];this.watched=[...new Set(_o.filter(E=>!!E))],e=!0}if(!(e||this.watched.some(y=>this.shownStates.get(y)!==o.states[y])))return;this.shownStates=new Map(this.watched.map(y=>[y,o.states[y]]));let s=zr(o,n),a=_r(o,n),l=this.furnitureMarkers(o,n,new Set(a.map(y=>y.id)),new Set(s.map(y=>y.powerEntity)));s.push(...l.consumers);let c=Dr(o,n,s),d=new Map(s.filter(y=>y.id!==y.powerEntity).map(y=>[y.id,y.power]));this.confirmSet=ge(o,n.floors);let h=this.trail?this.trailNow(o,n):[];t.setDevices([...[...a,...l.markers].map(y=>{let T=y.show==="no_power"?null:d.get(y.id)??null,B={...y,power:T,powerText:T===null?void 0:xe(o,T),effect:this.dimmed?!1:y.effect};return{...B,pin:this.showPin(B)}}),...h.map((y,T)=>({id:`trail:${T}`,floorId:y.floorId,roomId:null,x:y.x,z:y.z,y:.3+.4*h.slice(0,T).filter(B=>B.entity===y.entity).length,icon:Vr,name:D(o,y.entity),text:Or(o,y.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),t.setTrail(h),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens),t.setFridgeDoors(Lt(o,n.floors)),t.setRobots(this.robotInfos(o,n));let u=new Map;for(let y of n.settings.roof?.windows??[]){let T=j=>j&&j!=="none"?j:null,B=Q(o,{cover:T(y.cover),contact:T(y.contact),tilt:T(y.tilt)},"window");u.set(y.id,{open:B.open,tilt:B.tilt,cover:B.cover??0})}t.setRoofWindows(u),t.setParked(Xt(o,n));let f=new Map(n.floors.flatMap(y=>y.openings.map(T=>[T.id,T.type]))),g=new Map([...this.openingLinks].map(([y,T])=>[y,Q(o,T,f.get(y))]));t.setOpeningStates(g),this.setAlerts(this.alertSrc?Sr(o,n,this.alertSrc,this.openingLinks):[]);let _=[...a,...l.markers].map(y=>`${y.id}:${y.glow?`${y.glow.level.toFixed(1)}/${y.glow.color.map(T=>T.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...g].map(([y,T])=>`${y}:${T.open}:${T.cover===null?"-":T.cover.toFixed(1)}`).join(";");if(_!==this.thumbSig){let y=this.thumbSig==="";this.thumbSig=_,y||this.scheduleThumbs(1500)}let M=n.energy.battery?n.floors.flatMap(y=>y.placements.filter(T=>T.entity_id===n.energy.battery).map(T=>({floorId:y.id,x:T.x,z:T.z})))[0]:null;t.setFlows(!!1||!(this.flows??this._flows)||this.dimmed?[]:Pr({building:n,consumers:s,summary:c,battery:M??null}).map(y=>({floorId:y.floorId,a:y.a,b:y.b,dist:y.dist,power:y.power,color:Ir(y.kind,c)})));let b=[];t.setPersons(b);let m=Zr(o,n,this.openingLinks,b);t.setFloorInfo(new Map([...m].map(([y,T])=>[y,Yr(o,T)])));let S=o.states["sun.sun"]?.attributes,v=typeof S?.elevation=="number"?S.elevation:null;t.setSun(v!==null&&typeof S?.azimuth=="number"?{elevation:v,azimuth:S.azimuth}:null);let $=this.weather&&!this.dimmed&&V("weather")?wr(o,We(o,this.weatherEntityId??n.settings.weather_entity)):null,A=$?vr($,n.settings.weather_effects):null;this.cloud=A?.cloud??0,this._sky=(v===null?0:Math.min(1,Math.max(0,(v+4)/16)))*(1-.45*this.cloud);let R=A?A.sky:(n.settings.weather_effects??["sky"]).includes("sky");t.setWeather(this.weather&&!this.dimmed&&V("weather")?{...A??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:R}:null),this.watchLightning(!!A?.lightning),this.applyTint();let P=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(P)!==JSON.stringify(this._energy)&&(this._energy=P)}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),n=e.filter((o,i)=>!this.seenAlerts.has(t[i]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,o=this.hass,i=n?.floors.find(d=>d.id===e),s=i?.rooms.find(d=>d.id===t);if(!n||!o||!i||!s)return;let a=new Set(H(o,s.area_id).filter(d=>k(d)==="light"));for(let d of i.placements)k(d.entity_id)==="light"&&z([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of i.furniture){let h=this.furnitureLinks.get(d.id)?.entity;h&&Mt(d.type)&&z([d.x,d.z],s.points)&&a.add(h)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>o.states[d]?.state==="on");o.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let o=null;if(this.heatMode!=="none"){let s=this.heatMode,a=Cr(n,t,s);this.heatValues=a,o=new Map([...a].map(([l,c])=>[l,Fr(s,c)]))}if(this._alerts.length){o??=new Map;let s=.55+.45*Math.sin(performance.now()/160);for(let a of this._alerts){let l=$r(a.kind).map(c=>c*s);if(a.roomId)o.set(a.roomId,l);else for(let c of t.floors)for(let d of c.rooms)o.set(d.id,l)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let i=o?[...o].map(([s,a])=>`${s}:${a.map(l=>l.toFixed(2)).join(",")}`).join(";"):"";i!==this.tintSig&&(this.tintSig=i,e.setRoomTint(o))}furnitureMarkers(e,t,n,o){let i=[],s=[],a=new Map,l=new Map;for(let h of t.floors)for(let u of h.furniture){let f=this.furnitureLinks.get(u.id);if(Mt(u.type)){i.push(this.lampMarker(e,h,u,f?.entity??null));continue}if(!f)continue;l.set(u.id,f.entity??f.power);let g=f.entity??f.power,_=f.entity?e.states[f.entity]:void 0,M=f.power?ye(e.states[f.power]):null;f.power&&M!==null&&!o.has(f.power)&&(o.add(f.power),s.push({id:g,powerEntity:f.power,floorId:h.id,x:u.x,z:u.z,power:Math.max(0,M)}));let b=(M??0)>10||_?.state==="on"||_?.state==="running"||Ft(_)&&ce(_);if(u.type==="radiator"&&_&&k(_.entity_id)==="climate"){let v=_.attributes;if(v.hvac_action==="heating"){let $=typeof v.temperature=="number"&&typeof v.current_temperature=="number"?v.temperature-v.current_temperature:1;a.set(u.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,$))})}}else(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&b&&a.set(u.id,{color:[.3,.85,1],level:.8});if(_&&Wt(u.type)){let v=V("screens"),$=k(_.entity_id)==="light"?Fe(_):null,A=v&&k(_.entity_id)==="media"?ar(_):$?$.color:ce(_)||_.state==="playing"?[.22,.88,1]:null,R=v&&k(_.entity_id)==="media"?_.attributes.entity_picture??null:null;A&&a.set(u.id,{color:A,level:_.state==="playing"?1:.6,picture:R})}if(n.has(g))continue;n.add(g);let m=f.entity?k(f.entity):null,S=h.rooms.find(v=>v.points.length>=3&&z([u.x,u.z],v.points));i.push({id:g,floorId:h.id,roomId:S?.id??null,x:u.x,z:u.z,y:Zi(u)+fe(h,u),icon:Ce(m??"switch"),name:f.entity?D(e,f.entity):Ve(e,u.type),text:_?W(e,_):M!==null?xe(e,Math.max(0,M)):"",active:_?ce(_):(M??0)>5,unavailable:_?F(_):!1,glow:null,furnitureId:u.id,show:u.marker??void 0,fromFurniture:!0})}this.cameraScreens=0;let c=Lt(e,t.floors),d=V("screens");for(let h of t.floors)for(let u of h.furniture){if(!d||!u.pictures?.length||!Wt(u.type)||u.type==="fridge_smart"&&c.get(u.id)?.right)continue;let f=u.pictures.find(M=>ir(e,M));if(!f)continue;let g=this.pictureUrl(f.image),_=u.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];g&&a.set(u.id,{color:_,level:1,picture:g,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through),{markers:i,consumers:s,screens:a,targets:l}}trailNow(e,t){let n=Date.now(),o=lt(e,t),i=o.map(s=>{let a=e.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return Nr(o,Br(this.trailRows,i,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!V("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!V("camera_cockpit")){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let o=lt(t,n).map(i=>i.entity);if(o.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-at).toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),this._through&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||F(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Rn(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(n.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||fe(e,o)>.12)return!1;let i=U(o.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:z([o.x,o.z],t)||Ze(o).some(s=>z(s,t))}).map(o=>Ze(o))}robotInfos(e,t){let n=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,d=i.d*.14,h=[i.x-Math.sin(c)*d,i.z+Math.cos(c)*d],u=o.rooms.filter(M=>M.points.length>=3),g=(l==="cleaning"?cr(e,u,s,Nt(e,s,i.room_sensor)):null)??u.find(M=>z(h,M.points)),_=l==="cleaning"&&g?this.robotObstacles(o,g.points):[];n.push({id:i.id,floorId:o.id,rest:h,restHeading:-c,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:_})}return n}lampMarker(e,t,n,o){let i=o?e.states[o]:void 0,s=U(n.type),a=jn[n.type]??s?.light??"floor",l=n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?fe(t,n):a==="table"?Xe(t,n.x,n.z):a==="bollard"||a==="garden"?Kn(t,n.x,n.z):0,c=t.rooms.find(u=>u.points.length>=3&&z([n.x,n.z],u.points)),d=t.height,h=s?s.mount==="ceiling"?Math.max(.5,l-.15):l+n.h+.2:{ceiling:d-.3,downlight:d-.25,spot:d-.35,panel:d-.25,pendant:Math.max(.6,d-n.h-.25),floor:l+n.h+.25,uplight:l+n.h+.25,table:l+n.h+.2,wall:l+n.h+.2,strip:Math.max(.3,l-.2),bollard:l+n.h+.25,garden:l+n.h+.25}[a];return{id:o??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:h,icon:Ce("light"),name:o?D(e,o):Ve(e,n.type),text:i?W(e,i):"",active:i?ce(i):!1,unavailable:i?F(i):!1,glow:i?Fe(i):null,lamp:a,rotation:n.rotation,size:[n.w,n.d,n.h],base:l,pickable:!!o,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?l:l+n.h*.85:void 0,effect:!!i&&i.state==="on"&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(i.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=k(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let o=n.cover??n.contact??n.tilt;o&&e.set(t,o)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return w;let e=new Map(this.building.floors.map(n=>[n.id,n.name])),t=[...this._thumbs].sort((n,o)=>(this.building.floors.find(i=>i.id===o.floorId)?.elevation??0)-(this.building.floors.find(i=>i.id===n.floorId)?.elevation??0));return p`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""}" aria-label=${x(this.hass,"floors")}>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${x(this.hass,"all_floors")}</span>
      </button>
      ${t.map(n=>p`<button class="fp3d-thumb" aria-pressed=${this.floorId===n.floorId} @click=${()=>this.fire("floor-tap",{floorId:n.floorId})}>
          <img src=${n.url} alt="" />
          <span>${e.get(n.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let o=k(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"||o==="camera"||o==="vacuum"?this._menu={entity:e,x:t,y:n}:te(this,e)}onDeviceSwipe(e,t,n,o,i){let s=this.hass?.states[e];if(t==="start"){if(!s||F(s)||this.confirmSet.has(e))return!1;let l=k(e);if(l==="light"&&Yt(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:o,y:i},!0}if(l==="cover"&&Jt(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:o,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return w;let t=this._alerts.slice(0,3);return p`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>p`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Kt(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Kt(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?p`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:w}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return w;let t=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this.roomId),n=t?H(this.hass,t.area_id).filter(i=>k(i)==="scene"||k(i)==="script").slice(0,6):[];if(!n.length)return w;let o=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return p`<div class="fp3d-scenes">
      ${n.map(i=>p`<button class="fp3d-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${D(this.hass,i,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return w;if(this._find===null)return p`<button class="fp3d-find-btn" title=${x(this.hass,"find")} aria-label=${x(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Ur(this.findIndex??=Kr(this.hass,e),this._find);return p`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${x(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${x(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?p`<div class="fp3d-find-list">
            ${t.length?t.map(n=>p`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?et(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?p`<small>${n.where}</small>`:w}</span>
                  </button>`):p`<p>${x(this.hass,"find_none")}</p>`}
          </div>`:w}
    </div>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return w;let t=e.kind==="light"&&e.value<=0;return p`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${D(this.hass,e.entity)}</span>
      <b>${t?x(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n)return;if(!V("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let o=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!o)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===o?0:300;i&&(this.throughFloor=o,this.fire("floor-tap",{floorId:o})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},i)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back))}renderProHint(){return!this._proHint||!this.hass?w:p`<div class="fp3d-pro" role="dialog">
      <b>${x(this.hass,"pro_title")}</b>
      <span>${x(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${x(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${pr(this.hass.language)} target="_blank" rel="noopener">${x(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${fr(this.hass.language,this._proHint)} target="_blank" rel="noopener">${x(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${x(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${x(this.hass,"close")}</button>
      </div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return w;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,o=n&&!F(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return p`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${o?p`<img class="fp3d-through-img" src=${o} alt="" />`:w}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${D(this.hass,e.entity)}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${x(this.hass,"through_blend")}
          @input=${i=>this._blend=Number(i.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${x(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return w;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,o=t?.clientHeight??600,i=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return p`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${V("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:"))return;let o=k(e);if(o==="cover"||o==="camera"||o==="vacuum"){this._menu={entity:e,x:t,y:n};return}if(o&&nr.has(o)){if(this.confirmSet.has(e)&&!confirm(x(this.hass,"confirm_switch",{name:D(this.hass,e)})))return;br(this.hass,e)}else te(this,e)}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!!1||!e||this.roomId||!this.showEnergy)return w;let t=o=>x(this.hass,o),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:xe(this.hass,e.consumption)}),e.grid!==null){let o=e.grid<0;n.push({cls:o?"export":"grid",label:t(o?"energy_grid_export":"energy_grid_import"),value:xe(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:xe(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?xe(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:o.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${O(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),p`<div class="fp3d-energy" aria-live="off">
      ${n.map(o=>p`<div class="fp3d-energy-item fp3d-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?w:p`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none")return w;let e=it[this.heatMode],t=this.heatMode==="temperature",n=t?Ie(this.hass,e.stops[0][0]):e.stops[0][0],o=t?Ie(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?Z(this.hass):e.unit,s=a=>x(this.hass,a);return p`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Hr(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${O(this.hass,n,0)} ${i}</span><span>${O(this.hass,o,0)} ${i}</span></span>
      ${this.heatValues.size?w:p`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Oe[this.theme]??Oe.neon,t=this._sky;return e.night[0].map((n,o)=>Math.round(n+(e.day[0][o]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Oe[this.theme]??Oe.neon,o=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return p`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""}"
      style=${o}
    >
      ${this._error?p`<p class="fp3d-error">${this._error}</p>`:w} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.renderAlerts()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderProHint()} ${this.renderMenu()}
      ${this.showStats&&this._stats?p`<span class="fp3d-stats"
            ><b>${this._stats.fps?x(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):x(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?p`(${this._stats.busy.map(i=>x(this.hass,`stats_busy_${i}`)).join(", ")})`:w} ·
            ${x(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${x(this.hass,this._stats.low?"stats_low":"stats_full",{r:O(this.hass,this._stats.pixelRatio,2)})}</span
          >`:w}
    </div>`}static styles=[q,ne,N`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 320px;
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        bottom: calc(60px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Qt);function xe(r,e){return Math.abs(e)>=1e3?`${O(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function Zi(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}var Yi=.25,Qr=r=>Math.round(r*1e3)/1e3;function en(r,e,t,n,o){let i=r.rooms.find(s=>s.points.length>=3&&z([e,t],s.points));return!i||z([n,o],i.points)?[n,o]:z([n,t],i.points)?[n,t]:z([e,o],i.points)?[e,o]:[e,t]}function eo(r,e,t,n=Yi){let o=r.rooms.find(c=>c.points.length>=3&&z([e.x,e.z],c.points));if(!o)return null;let i=o.points,s=J(i)>=0?1:-1,a=t/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],h=i[(c+1)%i.length],u=Math.hypot(h[0]-d[0],h[1]-d[1]);if(u<.3)continue;let f=[(h[0]-d[0])/u,(h[1]-d[1])/u],g=[-f[1]*s,f[0]*s],_=(e.x-d[0])*f[0]+(e.z-d[1])*f[1];if(_<0||_>u)continue;let b=r.rooms.some(I=>I.id!==o.id&&I.points.some((P,y)=>{let T=I.points[(y+1)%I.points.length],B=Math.abs((P[0]-d[0])*g[0]+(P[1]-d[1])*g[1]),j=Math.abs((T[0]-d[0])*g[0]+(T[1]-d[1])*g[1]);return B<.02&&j<.02}))?a:0,m=(e.x-d[0])*g[0]+(e.z-d[1])*g[1]-b,S=Math.atan2(-g[0],g[1])*180/Math.PI,v=I=>Math.abs((e.rotation-I+540)%360-180),A=[{rotation:S,extent:e.d/2},{rotation:S+90,extent:e.w/2},{rotation:S-90,extent:e.w/2}].reduce((I,P)=>v(P.rotation)<v(I.rotation)?P:I);if(v(A.rotation)>50)continue;let R=m-A.extent;Math.abs(R)>n||l&&Math.abs(R)>=Math.abs(l.gap)||(l={x:Qr(e.x-g[0]*R),z:Qr(e.z-g[1]*R),rotation:(Math.round(A.rotation)%360+360)%360,gap:R})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var C={get(r){try{return localStorage.getItem(`neonplan3d.${r}`)}catch{return null}},set(r,e){try{localStorage.setItem(`neonplan3d.${r}`,e)}catch{}}},tn=class extends L{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new me(this);constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=C.get("explode")!=="0";let e=C.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=C.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=C.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=C.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let o=C.get("theme");this._theme=o&&jt.includes(o)?o:"neon",this._furnish=!1,this._selFurniture=null,this._selDevice=null;let i=C.get("floor_stack");this._floorStack=i==="stacked"||i==="single"?i:"dim",this._roomNames=C.get("room_names")!=="0",this._trail=C.get("trail")==="1",this._weather=C.get("weather")!=="0"}t(e,t){return x(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass);let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setExplode(e){this._explode=e,C.set("explode",e?"1":"0")}setQuality(e){this._quality=e,C.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let i of o.floors){let s=i.furniture.find(a=>a.id===e);s&&t(s,i)}this.data.edit(o)}editDevice(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let i of o.floors){let s=i.placements.find(a=>a.entity_id===e);s&&t(s,i)}this.data.edit(o)}moveDevice(e){let{id:t,x:n,z:o}=e.detail;this.editDevice(t,(i,s)=>{let[a,l]=en(s,i.x,i.z,n,o);Object.assign(i,{x:a,z:l})})}turnStep(){return k(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.placements=o.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(h=>h.placements.some(u=>u.entity_id===e)),o=n?.placements.find(h=>h.entity_id===e);if(!n||!o)return w;let i=k(e),s=i==="light",a=i==="camera",l=o.mount==="ceiling",c=i?_e(i,n.height,s||a?o.mount??(a?"wall":"ceiling"):null):1,d=(h,u,f,g,_,M)=>p`<label class="fp3d-size" title=${h}
        >${h}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${g}
          max=${_}
          .value=${String(Math.round(u*100)/100)}
          @change=${b=>{let m=parseFloat(b.target.value.replace(",","."));Number.isFinite(m)&&M(Math.min(_,Math.max(g,m)))}}
        />
      </label>`;return p`${s?p`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${h=>this.editDevice(e,u=>Object.assign(u,{mount:h.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(h=>p`<option value=${h} ?selected=${h===(o.mount??"ceiling")}>${this.t(`lamp_${h}`)}</option>`)}
          </select>`:w}
      ${a?p`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${h=>this.editDevice(e,u=>Object.assign(u,{mount:h.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),o.fov??(l?360:90),5,10,360,h=>this.editDevice(e,u=>u.fov=h))}
            ${d(this.t("camera_reach_short"),o.reach??(l?3:4.5),.5,.5,50,h=>this.editDevice(e,u=>u.reach=h))}
            ${d(this.t("camera_tilt_short"),o.tilt??(l?65:20),5,0,90,h=>this.editDevice(e,u=>u.tilt=h))}`:w}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((o.y??c)*100)/100)}
          @change=${h=>{let u=parseFloat(h.target.value.replace(",","."));Number.isFinite(u)&&u>=0&&this.editDevice(e,f=>f.y=Math.round(u*1e3)/1e3)}}
        />
      </label>
      ${o.y!==null?p`<button class="fp3d-chip" @click=${()=>this.editDevice(e,h=>h.y=null)}>${this.t("height_auto")}</button>`:w}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?Ve(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:o}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=en(a,s.x,s.z,n,o);Object.assign(s,{x:l,z:c});let d=eo(a,s,i);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(i=>i.furniture).find(i=>i.id===e);if(!t)return w;let n=(i,s)=>p`<label class="fp3d-size" title=${this.t(`size_${i}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(t[i]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[i]=Math.round(l*1e3)/1e3)}}
    /></label>`,o=this.data.building?.floors.find(i=>i.furniture.some(s=>s.id===e));return p`${n("w",this.t("size_short_w"))}${n("d",this.t("size_short_d"))}${n("h",this.t("size_short_h"))}
    ${o&&Gn(t)?p`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((t.mount_y??fe(o,t))*100)/100)}
              @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?p`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,i=>i.mount_y=null)}>${this.t("height_auto")}</button>`:w}`:w}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.furniture=o.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,In(this.hass).then(e=>this._newOffers=e.active?Dn(e.offers??[]).length+Pn(e.updates??[]).length:0).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){this.checkOffers();let e=this.data.building,t=this.data.saveState;return p`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?p`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?p`<span class="fp3d-dot" aria-label=${this.t("offers_dot")}></span>`:w}
                </button>
              </div>`:w}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?p`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>p`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${jt.map(n=>p`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,C.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>p`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,C.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,C.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:w}
          ${this._mode==="editor"&&t!=="idle"?p`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:w}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!e?p`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:w}
        ${!e&&!this.data.error?p`<p class="fp3d-message">${this.t("loading")}</p>`:w}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):w}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(p`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(p`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(p`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?p`<div class="fp3d-notices">${t}</div>`:w}renderExtensions(){return this._editorReady?p`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></fp3d-extensions>`:(Rt().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),p`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?p`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Rt().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),p`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderView(e){if(!e.floors.length||!e.floors.some(o=>o.rooms.length))return p`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?p`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:w}
      </div>`;let t=e.floors.find(o=>o.id===this._floorId),n=t?[t]:e.floors;return p`
      <nav class="fp3d-nav">
        ${e.floors.length>1?p`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(o=>p`<button
                  class="fp3d-chip"
                  aria-pressed=${o.id===this._floorId}
                  @click=${()=>{this._floorId=o.id,this._roomId=null}}
                >
                  ${o.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:w}
        ${n.flatMap(o=>o.rooms.map(i=>p`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${i.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=o.id),this._roomId=i.id===this._roomId?null:i.id}}
            >
              ${i.name}
            </button>`))}
      </nav>
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${o=>{this._floorId=o.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?p`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${o=>this.view3d()?.lookThrough(o.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              .floor=${e.floors.find(o=>o.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${ge(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:w}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?p`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:w}
          ${e.floors.length>1&&this._floorId?p`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(o=>p`<button
                      aria-pressed=${this._floorStack===o}
                      @click=${()=>{this._floorStack=o,C.set("floor_stack",o)}}
                    >
                      ${this.t(`floor_stack_short_${o}`)}
                    </button>`)}
              </div>`:w}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(o=>p`<button
                  aria-pressed=${this._heat===o}
                  @click=${()=>{this._heat=o,C.set("heat",o)}}
                >
                  ${this.t(o==="none"?"heat_off":`heat_short_${o}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,C.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,C.set("trail",this._trail?"1":"0")}}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,C.set("weather",this._weather?"1":"0")}}
          >
            ${V("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?p`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:w}
        </div>
        ${this._furnish?p`<div class="fp3d-furnish-bar">
              ${this._selFurniture?p`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?p`<span>${D(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:p`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:w}
      </div>
    `}static styles=[q,ne,N`
      .fp3d-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      .fp3d-nav {
        display: flex;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        left: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",tn);function dt(r,e,t=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(r.trim());if(!n)return!1;let o=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return o<=i?s>=o&&s<i:s>=o||s<i}var to;function no(){let r=new URL("./neonplan3d-card-editor.js?v=7981b19892ff",new URL(import.meta.url)).href;return to??=import(r),to}var nn=class extends L{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_night:{state:!0},_orbit:{state:!0}};idleTimer;nightTimer;data=new me(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle()};armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}returnHome(){this._roomId=null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=dt(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await no(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=dt(e.night,this.hass),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass);let t=dt(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){let e=this.data.building,t=this._config?.height??420,n=this._config,o=this._floorId===void 0?n?.floor??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(_=>_.id===o)?o:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&(e?.floors.length??0)>1,a=_=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(_),l=["temperature","humidity","co2"].filter(_=>a(_)),c=this._walls??n?.walls??"auto",d=this._heat??n?.heatmap??"none",h=this._explode??n?.explode??!0,u=this._fullscreen?"100vh":n?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t}px`,f=!!e&&(s||!!n?.controls&&!(this._roomId&&n.room_panel!==!1)),g=_=>x(this.hass,_);return p`<ha-card class=${this._night?"fp3d-night":""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="fp3d-card-body" style="height:${u}">
        ${e&&e.floors.some(_=>_.rooms.length)?p`<fp3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${h}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${d}
              .theme=${this._config?.theme??"neon"}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .alertJump=${!!n?.alert_jump}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              ?weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              style=${f?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${_=>{if(this.canSwitch&&(e?.floors.length??0)>1&&_.detail.floorId&&i!==_.detail.floorId){this._floorId=_.detail.floorId,this._roomId=null;return}_.detail.roomId&&(this._roomId=_.detail.roomId===this._roomId?null:_.detail.roomId)}}
              @floor-tap=${_=>{this._floorId=_.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:p`<p class="fp3d-card-msg">${this.data.error??(e?x(this.hass,"no_building"):x(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?p`<fp3d-room-panel
              @camera-look=${_=>this.view3d()?.lookThrough(_.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(_=>_.rooms).find(_=>_.id===this._roomId)??null}
              .floor=${e.floors.find(_=>_.rooms.some(M=>M.id===this._roomId))??null}
              .confirmEntities=${ge(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:w}
        ${f&&e?p`<div class="fp3d-card-controls">
              ${s?p`<button class="fp3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:w}
              ${a("walls")?p`<div class="fp3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${g("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${g("walls_cut")}</button>
                  </div>`:w}
              ${a("floors")&&e.floors.length>1&&!i?p`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:w}
              ${l.length?p`<div class="fp3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...l].map(_=>p`<button aria-pressed=${d===_} @click=${()=>this._heat=_}>
                          ${g(_==="none"?"heat_off":`heat_short_${_}`)}
                        </button>`)}
                  </div>`:w}
            </div>`:w}
        ${n?.fullscreen_button&&!(this._roomId&&n.room_panel!==!1)?p`<button class="fp3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:w}
      </div>
    </ha-card>`}static styles=[q,ne,N`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",nn);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"neonplan3d-card",name:x(void 0,"card_name"),description:x(void 0,"card_description"),preview:!1})}ln();
