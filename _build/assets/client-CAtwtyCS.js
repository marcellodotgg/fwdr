const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_...404_-C03DrnEs.js","assets/web-DHqATzos.js","assets/routing-hKi5ogrg.js","assets/index-C3GZODeh.js","assets/index-BiEsyGb4.css"])))=>i.map(i=>d[i]);
import{c as G,a as P,b as h,g as J,u as X,S as z,o as Y,d as Q,e as ee,f as H,s as _,h as te,i as R,t as $,j as v,m as C,r as S,k as q,l as ne,n as re,E as ae,p as oe}from"./web-DHqATzos.js";import{c as se,a as ie,R as le,s as O,g as ce,b as ue,d as de,m as fe,e as he,k as me,f as pe,n as ge}from"./routing-hKi5ogrg.js";const k="Invariant Violation",{setPrototypeOf:we=function(e,n){return e.__proto__=n,e}}=Object;class T extends Error{framesToPop=1;name=k;constructor(n=k){super(typeof n=="number"?`${k}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),we(this,T.prototype)}}function L(e,n){if(!e)throw new T(n)}const Ee=/^[A-Za-z]:\//;function be(e=""){return e&&e.replace(/\\/g,"/").replace(Ee,n=>n.toUpperCase())}const ye=/^[/\\]{2}/,Re=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,$e=/^[A-Za-z]:$/,Ae=function(e){if(e.length===0)return".";e=be(e);const n=e.match(ye),t=N(e),r=e[e.length-1]==="/";return e=ve(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),$e.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!N(e)?`/${e}`:e)},V=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":Ae(n.replace(/\/\/+/g,"/"))};function ve(e,n){let t="",r=0,a=-1,s=0,l=null;for(let o=0;o<=e.length;++o){if(o<e.length)l=e[o];else{if(l==="/")break;l="/"}if(l==="/"){if(!(a===o-1||s===1))if(s===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),a=o,s=0;continue}else if(t.length>0){t="",r=0,a=o,s=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(a+1,o)}`:t=e.slice(a+1,o),r=o-a-1;a=o,s=0}else l==="."&&s!==-1?++s:s=-1}return t}const N=function(e){return Re.test(e)};function Ce(e){return`virtual:${e}`}function Se(e){return e.handler?.endsWith(".html")?N(e.handler)?e.handler:V(e.root,e.handler):`$vinxi/handler/${e.name}`}const Pe=new Proxy({},{get(e,n){return L(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:Ce(Se({name:n})),baseURL:"/fwdr/_build",chunks:new Proxy({},{get(t,r){L(typeof r=="string","Chunk expected");let a=V("/fwdr/_build",r+".mjs");return{import(){return import(a)},output:{path:a}}}}),inputs:new Proxy({},{get(t,r){L(typeof r=="string","Input must be string");let a=window.manifest[r].output;return{async import(){return import(a)},async assets(){return window.manifest[r].assets},output:{path:a}}}})}}});globalThis.MANIFEST=Pe;const _e=e=>n=>{const{base:t}=n,r=G(()=>n.children),a=P(()=>se(r(),n.base||""));let s;const l=ie(e,a,()=>s,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(l),h(le.Provider,{value:l,get children(){return h(ke,{routerState:l,get root(){return n.root},get preload(){return n.rootPreload||n.rootLoad},get children(){return[P(()=>(s=J())&&null),h(Le,{routerState:l,get branches(){return a()}})]}})}})};function ke(e){const n=e.routerState.location,t=e.routerState.params,r=P(()=>e.preload&&X(()=>{O(!0),e.preload({params:t,location:n,intent:ce()||"initial"}),O(!1)}));return h(z,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:a=>h(a,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function Le(e){const n=[];let t;const r=P(Y(e.routerState.matches,(a,s,l)=>{let o=s&&a.length===s.length;const c=[];for(let i=0,p=a.length;i<p;i++){const m=s&&s[i],w=a[i];l&&m&&w.route.key===m.route.key?c[i]=l[i]:(o=!1,n[i]&&n[i](),Q(E=>{n[i]=E,c[i]=de(e.routerState,c[i-1]||e.routerState.base,U(()=>r()[i+1]),()=>e.routerState.matches()[i])}))}return n.splice(a.length).forEach(i=>i()),l&&o?l:(t=c[0],c)}));return U(()=>r()&&t)()}const U=e=>()=>h(z,{get when(){return e()},keyed:!0,children:n=>h(ue.Provider,{value:n,get children(){return n.outlet()}})});function Ne([e,n],t,r){return[e,r?a=>n(r(a)):n]}function Te(e){let n=!1;const t=a=>typeof a=="string"?{value:a}:a,r=Ne(ee(t(e.get()),{equals:(a,s)=>a.value===s.value&&a.state===s.state}),void 0,a=>(!n&&e.set(a),_.registry&&!_.done&&(_.done=!0),a));return e.init&&H(e.init((a=e.get())=>{n=!0,r[1](t(a)),n=!1})),_e({signal:r,create:e.create,utils:e.utils})}function xe(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function Ie(e,n){const t=e&&document.getElementById(e);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const De=new Map;function Oe(e=!0,n=!1,t="/_server",r){return a=>{const s=a.base.path(),l=a.navigatorFactory(a.base);let o,c;function i(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function p(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const d=u.composedPath().find(D=>D instanceof Node&&D.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const g=i(d),f=g?d.href.baseVal:d.href;if((g?d.target.baseVal:d.target)||!f&&!d.hasAttribute("state"))return;const y=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||y&&y.includes("external"))return;const A=g?new URL(f,document.baseURI):new URL(f);if(!(A.origin!==window.location.origin||s&&A.pathname&&!A.pathname.toLowerCase().startsWith(s.toLowerCase())))return[d,A]}function m(u){const d=p(u);if(!d)return;const[g,f]=d,I=a.parsePath(f.pathname+f.search+f.hash),y=g.getAttribute("state");u.preventDefault(),l(I,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:y?JSON.parse(y):void 0})}function w(u){const d=p(u);if(!d)return;const[g,f]=d;r&&(f.pathname=r(f.pathname)),a.preloadRoute(f,g.getAttribute("preload")!=="false")}function E(u){clearTimeout(o);const d=p(u);if(!d)return c=null;const[g,f]=d;c!==g&&(r&&(f.pathname=r(f.pathname)),o=setTimeout(()=>{a.preloadRoute(f,g.getAttribute("preload")!=="false"),c=g},20))}function x(u){if(u.defaultPrevented)return;let d=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const f=new URL(d,fe);if(d=a.parsePath(f.pathname+f.search),!d.startsWith(t))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=De.get(d);if(g){u.preventDefault();const f=new FormData(u.target,u.submitter);g.call({r:a,f:u.target},u.target.enctype==="multipart/form-data"?f:new URLSearchParams(f))}}te(["click","submit"]),document.addEventListener("click",m),e&&(document.addEventListener("mousemove",E,{passive:!0}),document.addEventListener("focusin",w,{passive:!0}),document.addEventListener("touchstart",w,{passive:!0})),document.addEventListener("submit",x),H(()=>{document.removeEventListener("click",m),e&&(document.removeEventListener("mousemove",E),document.removeEventListener("focusin",w),document.removeEventListener("touchstart",w)),document.removeEventListener("submit",x)})}}function Ue(e){const n=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,a=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:a}},t=he();return Te({get:n,set({value:r,replace:a,scroll:s,state:l}){a?window.history.replaceState(me(l),"",r):window.history.pushState(l,"",r),Ie(decodeURIComponent(window.location.hash.slice(1)),s),pe()},init:r=>xe(window,"popstate",ge(r,a=>{if(a&&a<0)return!t.confirm(a);{const s=n();return!t.confirm(s.value,{state:s.state})}})),create:Oe(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function Me(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var Fe=$("<style>"),We=$("<link>"),je=$("<script> "),Be=$("<noscript>");const ze={style:e=>(()=>{var n=R(Fe);return v(n,C(()=>e.attrs),!1,!0),q(n,()=>e.children),S(),n})(),link:e=>(()=>{var n=R(We);return v(n,C(()=>e.attrs),!1,!1),S(),n})(),script:e=>e.attrs.src?(()=>{var n=R(je);return v(n,C(()=>e.attrs,{get id(){return e.key}}),!1,!0),S(),n})():null,noscript:e=>(()=>{var n=R(Be);return v(n,C(()=>e.attrs),!1,!0),S(),n})()};function He(e,n){let{tag:t,attrs:{key:r,...a}={key:void 0},children:s}=e;return ze[t]({attrs:{...a,nonce:n},key:r,children:s})}function qe(e,n,t,r="default"){return ne(async()=>{{const s=(await e.import())[r],o=(await n.inputs?.[e.src].assets()).filter(i=>i.tag==="style"||i.attrs.rel==="stylesheet");return typeof window<"u"&&Me(o),{default:i=>[...o.map(p=>He(p)),h(s,i)]}}})}const b={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ve(e={}){const n={options:e,rootNode:K(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)M(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>Ke(n,t(r)),insert:(r,a)=>M(n,t(r),a),remove:r=>Ze(n,t(r))}}function Ke(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),a={};let s=!1,l=null,o=e.rootNode,c=null;for(let i=0;i<r.length;i++){const p=r[i];o.wildcardChildNode!==null&&(l=o.wildcardChildNode,c=r.slice(i).join("/"));const m=o.children.get(p);if(m===void 0){if(o&&o.placeholderChildren.length>1){const w=r.length-i;o=o.placeholderChildren.find(E=>E.maxDepth===w)||null}else o=o.placeholderChildren[0]||null;if(!o)break;o.paramName&&(a[o.paramName]=p),s=!0}else o=m}return(o===null||o.data===null)&&l!==null&&(o=l,a[o.paramName||"_"]=c,s=!0),o?s?{...o.data,params:s?a:void 0}:o.data:null}function M(e,n,t){let r=!0;const a=n.split("/");let s=e.rootNode,l=0;const o=[s];for(const c of a){let i;if(i=s.children.get(c))s=i;else{const p=Ge(c);i=K({type:p,parent:s}),s.children.set(c,i),p===b.PLACEHOLDER?(i.paramName=c==="*"?`_${l++}`:c.slice(1),s.placeholderChildren.push(i),r=!1):p===b.WILDCARD&&(s.wildcardChildNode=i,i.paramName=c.slice(3)||"_",r=!1),o.push(i),s=i}}for(const[c,i]of o.entries())i.maxDepth=Math.max(o.length-c,i.maxDepth||0);return s.data=t,r===!0&&(e.staticRoutesMap[n]=s),s}function Ze(e,n){let t=!1;const r=n.split("/");let a=e.rootNode;for(const s of r)if(a=a.children.get(s),!a)return t;if(a.data){const s=r.at(-1)||"";a.data=null,Object.keys(a.children).length===0&&a.parent&&(a.parent.children.delete(s),a.parent.wildcardChildNode=null,a.parent.placeholderChildren=[]),t=!0}return t}function K(e={}){return{type:e.type||b.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Ge(e){return e.startsWith("**")?b.WILDCARD:e[0]===":"||e==="*"?b.PLACEHOLDER:b.NORMAL}const Je="modulepreload",Xe=function(e){return"/fwdr/_build/"+e},F={},W=function(n,t,r){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=Xe(c),c in F)return;F[c]=!0;const i=c.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":Je,i||(m.as="script"),m.crossOrigin="",m.href=c,o&&m.setAttribute("nonce",o),document.head.appendChild(m),i)return new Promise((w,E)=>{m.addEventListener("load",w),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return a.then(l=>{for(const o of l||[])o.status==="rejected"&&s(o.reason);return n().catch(s)})},Z=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>W(()=>import("./_...404_-C03DrnEs.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/fwdr/fwdr/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>W(()=>import("./index-C3GZODeh.js"),__vite__mapDeps([3,1,4])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/fwdr/fwdr/src/routes/index.tsx"}],Ye=Qe(Z.filter(e=>e.page));function Qe(e){function n(t,r,a,s){const l=Object.values(t).find(o=>a.startsWith(o.id+"/"));return l?(n(l.children||(l.children=[]),r,a.slice(l.id.length)),t):(t.push({...r,id:a,path:a.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function et(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ve({routes:Z.reduce((e,n)=>{if(!et(n))return e;let t=n.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,a)=>`**:${a}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function tt(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&qe(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Ye.map(e)}let j;const nt=()=>j||(j=tt());function rt(){return h(Ue,{get base(){return"/fwdr/"},root:e=>h(re,{get children(){return e.children}}),get children(){return h(nt,{})}})}const at=e=>null;var ot=$("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const st=e=>{const n="Error | Uncaught Client Exception";return h(ae,{fallback:t=>(console.error(t),[(()=>{var r=R(ot);return q(r,n),r})(),h(at,{code:500})]),get children(){return e.children}})};function it(e,n){return oe(e,n)}function B(e){return e.children}function lt(){return h(B,{get children(){return h(B,{get children(){return h(st,{get children(){return h(rt,{})}})}})}})}it(()=>h(lt,{}),document.getElementById("app"));const dt=void 0;export{dt as default};
