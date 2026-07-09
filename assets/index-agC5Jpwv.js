var jp=Object.defineProperty;var Qp=(n,t,e)=>t in n?jp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var k=(n,t,e)=>Qp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const $e=16,ho=360/$e,tm=600,em=22.5,Us=2,nm=2,$c=2.5,Jc=2.75,im=3;function fo(n){return n*Us}function su(n){return n/Us}const sm=fo(nm),vd=fo($c),rm=fo(Jc),om=fo(im),ti={turnRateDegPerTick:em,speedPaddle:sm,speedRide:vd},Sd=280,Md=224,We=Sd/2,Xe=Md/2,yd=20,am=26,cm=30,jc=33,lm=36,Ed=jc+lm,um=8,hm=8.25,dm=8.5,fm=8.75,pm=7,mm=-.9,gm=.55,_m=8,xm=2.3,vm=.45,Sm=4,Mm=7;function ru(n,t,e){let i=n-t;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return Math.exp(-(i*i)/(2*e*e))}function ym(n,t){const e=.26*Math.sin(n+.7)+.5*Math.sin(n*2+.55)+.34*Math.sin(n*3+1.85)+.18*Math.sin(n*5+.95)+.08*Math.sin(n*8+2.6),i=t*e-_m*ru(n,mm,gm)+Sm*ru(n,xm,vm);return Math.max(i,Mm-yd)}function po(n,t,e){return t+ym(n,e)}function Em(n,t,e){return t+e*(.38*Math.sin(n+2.35)+.27*Math.sin(n*3+.15)+.2*Math.sin(n*6+3.05)+.15*Math.sin(n*9+1.2))}function Fs(n){return po(n,yd,um)}function Yr(n){return po(n,am,hm)}function Tm(n){return po(n,cm,dm)}function qr(n){return po(n,jc,fm)}function Vs(n){return Em(n,Ed,pm)}function bm(n,t){return Math.atan2(t-Xe+.5,n-We+.5)}function Am(n,t){return Math.hypot(n-We+.5,t-Xe+.5)}const Td=.1,Ps=.25,bd=1.8;function Rm(){return`${Td}|${Ps}|${bd}`}function yn(n,t,e){const i=Math.atan2(t-Xe,n-We),s=Math.hypot(n-We,t-Xe),r=Fs(i),o=Yr(i);if(e==="grass"){const c=r>0?Math.min(1,s/r):1,u=(1-c)*(1-c);return Ps+u*(bd-Ps)}const a=o-r,l=a>0?Math.min(1,Math.max(0,(s-r)/a)):1;return Ps+l*(Td-Ps)}const Ad=jc,Rd=Ed,Qc=1,mo=5,wm=1.5,Cm=14,Pm=Math.PI*2,Im=(Ad+Rd)/2,Lm=1.35,Dm=Im*(Pm/Cm),Nm=Dm/$c,wd=Math.ceil(Nm*Lm),Um=["Grind","Tuck","Air"];function Cd(n){return Um[n]}function tl(n){const t=n%360;return t<0?t+360:t}function je(n){return tl(n*ho)}function Fm(n){const t=tl(n);return Math.round(t/ho)%$e}function an(n){const t=tl(n*180/Math.PI);return Fm(t)}function el(n){const t=je(n)*Math.PI/180;return{x:Math.cos(t),y:Math.sin(t)}}function Om(n,t){let e=(t-n)%$e;return e>$e/2&&(e-=$e),e<-$e/2&&(e+=$e),e}function km(n,t,e){const i=Om(n,t);if(i===0)return n;const s=Math.max(1,Math.round(e/ho)),r=Math.sign(i)*Math.min(Math.abs(i),s);return(n+r+$e)%$e}function Fa(n,t,e){const i=Math.min(1,Math.max(0,e)),s=je(n);let o=je(t)-s;return o>180&&(o-=360),o<-180&&(o+=360),(s+o*i)/ho}function Pd(n){return n==="grass"||n==="sand"}function Bm(n){return n==="deep_water"||n==="shallow"||n==="tide_zone"}function Id(n){return n==="sand"||n==="deep_water"||n==="shallow"||n==="coral_rideable"||n==="tide_zone"}function Ld(n,t,e){const i=Array.from({length:t},()=>Array.from({length:n},()=>e));return{widthTiles:n,heightTiles:t,tiles:i,blockedQuarters:new Set}}function Is(n,t,e,i){e<0||e>=n.heightTiles||t<0||t>=n.widthTiles||(n.tiles[e][t]=i)}function Qe(n,t,e){return e<0||e>=n.heightTiles||t<0||t>=n.widthTiles?null:n.tiles[e][t]}function Hm(n,t,e){const i=Math.floor(t),s=Math.floor(e),r=Qe(n,i,s);return r===null?!1:Bm(r)}function sr(n,t,e){const i=Qe(n,Math.floor(t),Math.floor(e));return i===null?!1:Id(i)&&i!=="grass"}const zm=[{tx:1,ty:0},{tx:-1,ty:0},{tx:0,ty:1},{tx:0,ty:-1}],Gm=[{tx:1,ty:1},{tx:1,ty:-1},{tx:-1,ty:1},{tx:-1,ty:-1}];function Br(n,t,e){const i=Qe(n,t,e);return i===null?!1:Pd(i)}function Vm(n,t,e,i,s){if(!Br(n,i,s))return!1;const r=i-t,o=s-e;return r===0||o===0?!0:Br(n,t+r,e)&&Br(n,t,e+o)}function Do(n,t){return`${n},${t}`}function Wm(n,t,e,i,s){if(!Br(n,i,s))return null;if(t===i&&e===s)return[{tx:t,ty:e}];const r=[{tx:t,ty:e}],o=new Map;for(o.set(Do(t,e),null);r.length>0;){const a=r.shift();if(a.tx===i&&a.ty===s){const c=[];let u=a;for(;u;)c.push(u),u=o.get(Do(u.tx,u.ty))??null;return c.reverse(),c}const l=[...zm,...Gm];for(const c of l){const u=a.tx+c.tx,d=a.ty+c.ty,h=Do(u,d);o.has(h)||Vm(n,a.tx,a.ty,u,d)&&(o.set(h,a),r.push({tx:u,ty:d}))}}return null}function Xm(n,t){return{x:n+.5,y:t+.5}}const Ym=2;function qm(n,t,e,i=!0){return{path:n,pathIndex:n.length>1?1:0,running:i,walkTickCounter:0,targetTx:t,targetTy:e}}function Km(n,t,e){const i=Qe(n,Math.floor(t),Math.floor(e));return i===null?!1:Pd(i)}function Zm(n,t,e,i){const s=Math.floor(e),r=Math.floor(i);if(!Km(n,e,i))return null;const o=Math.floor(t.x),a=Math.floor(t.y),l=Wm(n,o,a,s,r);return l?qm(l,s,r):null}function $m(n,t,e){if(e.pathIndex>=e.path.length)return{position:n,heading:t,walk:null,moved:!1};if(!e.running&&(e.walkTickCounter+=1,e.walkTickCounter%Ym!==0))return{position:n,heading:t,walk:e,moved:!1};const i=e.path[e.pathIndex],s=Xm(i.tx,i.ty),r=an(Math.atan2(s.y-n.y,s.x-n.x)),o={...e,pathIndex:e.pathIndex+1},a=o.pathIndex>=o.path.length;return{position:s,heading:r,walk:a?null:o,moved:!0}}function Dd(n,t,e=0){return{position:{x:n,y:t},currentHeading:e,intendedHeading:e,speedState:"seated",isRotating:!1}}function Jm(n,t,e,i){const s=Math.atan2(i-t,e-n);return an(s)}function jm(n,t){return n.speedState==="paddling"?t.speedPaddle/Us:n.speedState==="riding"?t.speedRide/Us:n.speedState==="reversing"?-t.speedPaddle/Us:0}function Qm(n,t){const e={...n};return t.setIntendedHeading!==void 0&&(e.intendedHeading=t.setIntendedHeading,e.isRotating=e.intendedHeading!==e.currentHeading),t.startPaddle&&(e.speedState="paddling"),t.standUp&&e.speedState!=="seated"&&(e.speedState="riding"),t.lieDown&&e.speedState==="riding"&&(e.speedState="paddling"),t.reverse&&e.speedState==="seated"&&(e.speedState="reversing"),t.stop&&(e.speedState="seated"),e}function tg(n,t,e){const i=Qe(n,Math.floor(t),Math.floor(e));return i===null?!0:!Id(i)}function nl(n,t,e={},i=ti){const s=Qm(n,e);let r=!1,o=!1,a=!1;const l=s.currentHeading;s.isRotating&&(s.currentHeading=km(s.currentHeading,s.intendedHeading,i.turnRateDegPerTick),s.isRotating=s.currentHeading!==s.intendedHeading,a=s.currentHeading!==l);const c=jm(s,i);if(c!==0){const u=el(s.currentHeading),d=s.position.x+u.x*c,h=s.position.y+u.y*c;tg(t,d,h)?o=!0:(s.position={x:d,y:h},r=!0)}return{state:s,moved:r,collided:o,headingChanged:a}}function eg(){return{ticksRemaining:wd}}function Nd(){return eg()}function Ud(n,t){return!t||t.ticksRemaining<=0?n:{...n,speedRide:n.speedRide*wm}}function Fd(n,t){const e=n.ticksRemaining-1;return e>0?{ticksRemaining:e}:null}const ng=1,Kr=.55,ig=.12,sg=2.2,rg=.08,Od=.08;function kd(){return ng*Kr/(Kr+ig)}const og=.68;function ag(){return kd()+rg}const il=.6,go=.14,Oa=3.25,Bd=go,cg=.06,lg=.04,ou=.5,ug={rail:1.15,jump:ag(),brain_coral:.8,wall_ride:.675},hg={rail:.45,jump:sg/2,brain_coral:.8,wall_ride:.17},au={rail:.54,jump:Kr+Od,brain_coral:.8,wall_ride:1.09},cu={rail:.27,jump:(Kr+Od)/2,brain_coral:.4,wall_ride:.55};function dg(){const n=il,t=go,e=Oa,i=Bd,s=lg,r=i+n+t;return{halfAlongRide:t*e+s,halfLateral:n+t+s,height:r+s,centerY:r/2}}function sl(n,t){if(n==="tunnel"){const s=dg();return{halfAlongRide:t*s.halfAlongRide,halfLateral:t*s.halfLateral,height:t*s.height,centerY:t*s.centerY}}const e=t*ug[n],i=t*hg[n];return n==="wall_ride"?{halfAlongRide:e+ou,halfLateral:i+ou,height:t*au[n],centerY:t*cu[n]}:{halfAlongRide:e,halfLateral:i,height:t*au[n],centerY:t*cu[n]}}function Hd(n){const t=sl(n.type,n.radius);return Math.max(t.halfAlongRide,t.halfLateral)}function ka(n,t){const e=t.x-n.center.x,i=t.y-n.center.y,s=Math.cos(n.rotationRadians),r=Math.sin(n.rotationRadians);return{alongRide:e*s+i*r,lateral:-e*r+i*s}}function Ba(n,t){const{halfAlongRide:e,halfLateral:i}=sl(n.type,n.radius),s=ka(n,t);return Math.abs(s.alongRide)<=e&&Math.abs(s.lateral)<=i}function fg(n,t,e,i){const s=t.alongRide-n.alongRide,r=t.lateral-n.lateral;let o=0,a=1;const l=(c,u)=>{if(c===0)return u>=0;const d=u/c;if(c<0){if(d>a)return!1;d>o&&(o=d)}else{if(d<o)return!1;d<a&&(a=d)}return!0};return!l(-s,n.alongRide+e)||!l(s,e-n.alongRide)||!l(-r,n.lateral+i)||!l(r,i-n.lateral)?!1:o<=a}function pg(n,t,e){if(Ba(n,t)||Ba(n,e))return!0;if(t.x===e.x&&t.y===e.y)return!1;const{halfAlongRide:i,halfLateral:s}=sl(n.type,n.radius);return fg(ka(n,t),ka(n,e),i,s)}const mg=.92,Ws=2;function gg(n,t){const e=_e(n),i=_e(t);return e<=i?i-e:Zr-e+i}function zd(n,t){const e=Wd(n);return gg(t.phaseRadians,e)<=t.advancePerTick*Ws+1e-9}function Gd(n,t,e=0){if(!t||!ii(n,t))return 1;const i=Math.atan2(n.center.y-t.centerY,n.center.x-t.centerX);if(n.spawnedAtHighTide){if(!zd(i,t))return 0;const r=(n.emergedRenderTicks??0)+e;return Math.min(1,r/Ws)}const s=(n.submergedRenderTicks??0)+e;return Math.max(0,1-Math.min(1,s/Ws))}function _g(n,t,e=0){return!t||!ii(n,t)?0:1-Gd(n,t,e)}function xg(n,t){return n.map(e=>{if(!ii(e,t))return e.submergedRenderTicks===void 0&&e.emergedRenderTicks===void 0?e:{...e,submergedRenderTicks:void 0,emergedRenderTicks:void 0};const i=Math.atan2(e.center.y-t.centerY,e.center.x-t.centerX);if(e.spawnedAtHighTide){if(!zd(i,t))return e.emergedRenderTicks===void 0?e:{...e,emergedRenderTicks:void 0};const r=e.emergedRenderTicks;return r===void 0?{...e,emergedRenderTicks:0,submergedRenderTicks:void 0}:r>=Ws?e:{...e,emergedRenderTicks:r+1}}const s=e.submergedRenderTicks;return s===void 0?{...e,submergedRenderTicks:0,emergedRenderTicks:void 0}:s>=Ws?e:{...e,submergedRenderTicks:s+1,emergedRenderTicks:void 0}})}const Zr=Math.PI*2,vg=.05;function Sg(n){return{centerX:n.centerX,centerY:n.centerY,innerRadius:n.innerRadius,outerRadius:n.outerRadius,sweepRadians:n.sweepRadians,phaseRadians:0,advancePerTick:n.advancePerTick??vg,innerRadiusAtAngle:n.innerRadiusAtAngle,outerRadiusAtAngle:n.outerRadiusAtAngle}}function Mg(n){return{...n,phaseRadians:_e(n.phaseRadians+n.advancePerTick)}}function _e(n){const t=n%Zr;return t<0?t+Zr:t}function Vd(n,t,e){const i=_e(t),s=_e(t+e),r=_e(n);return i<=s?r>=i&&r<=s:r>=i||r<=s}function os(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.3||r>l+.4?!1:Vd(o,e.phaseRadians,e.sweepRadians)}function ii(n,t){return os(n.center.x,n.center.y,t)}function yg(n){return _e(n.phaseRadians+n.sweepRadians)}function Eg(n,t){return _e(n-t.sweepRadians/2)}function Tg(n,t){return _e(n-t.sweepRadians)}function Wd(n){return _e(n)}function bg(n,t){return Ag(Tg(n,t),Eg(n,t),mg)}function lu(n,t){const e=bg(n,t),i=Wd(n);return Rg(t.phaseRadians,e,i)}function Ag(n,t,e){const i=_e(n),s=_e(t);if(i<=s)return _e(i+(s-i)*e);const r=Zr-i+s;return _e(i+r*e)}function Rg(n,t,e){const i=_e(n),s=_e(t),r=_e(e);return s<=r?i>=s&&i<=r:i>=s||i<=r}function $r(n,t){return _e(t-n)}function Xd(n,t,e,i){let s=null,r=1/0;for(const o of n){if(o.tricked||e&&ii(o,e))continue;const a=t.x-o.center.x,l=t.y-o.center.y,c=Math.sqrt(a*a+l*l);(i!==void 0?pg(o,i,t):Ba(o,t))&&c<r&&(s=o,r=c)}return s}function wg(n){return n.ticksSincePrepare>=Qc&&n.ticksSincePrepare<=mo}function Jr(n){if(!n)return null;const t=n.ticksSincePrepare+1;return t>mo?null:{...n,ticksSincePrepare:t}}function Cg(n,t){return n.map(e=>e.id===t?{...e,tricked:!0}:e)}const Pg=Math.PI*2,Os=.12,Yd=2.6,Ha=4.4,rr=Ha*1.12,uu=.3,hu=.1;function Ig(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function qd(n){const t=rr;if(n<=uu)return t*Ig(n/uu);const e=1-hu;if(n<=e)return t;const i=(n-e)/hu;return t*(1-i)}function Kd(n,t){const e=Zd(n,t);return e===null?0:qd(e)}function di(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.5||r>l+.5?0:Kd(o,e)}function Zd(n,t){if(!Vd(n,t.phaseRadians,t.sweepRadians))return null;const e=_e(t.phaseRadians),i=_e(n),s=_e(e+t.sweepRadians);return e<=s||i>=e?(i-e)/t.sweepRadians:(Pg-e+i)/t.sweepRadians}function $d(n,t){const e=Zd(n,t);return e===null?0:Math.sin(Math.PI*e)}function Jd(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.5||r>l+.5?0:$d(o,e)}function Lg(n,t,e){return e?-Jd(n,t,e)*Yd:0}function rl(n,t,e){if(!e)return Os;const i=di(n,t,e);if(i<=0)return Os;const s=Jd(n,t,e),r=Os-s*Yd,o=Math.min(1,s+i/rr);return r+o*(i-r)}const Dg=2,Le=.28,Ng={rail:1.85,jump:2.25,tunnel:1.75,wall_ride:1.55,brain_coral:1.2},Ug=.46;function Fg(n){const t=n.rotationRadians,e=Math.cos(t),i=Math.sin(t);return{x:e,y:i}}function Xs(n,t,e,i){return n*e+t*i}const Og=.05;function kg(n,t,e){const i=Fg(n),s=el(e),r=Xs(s.x,s.y,i.x,i.y);if(Math.abs(r)>=Og)return r>=0?i:{x:-i.x,y:-i.y};const o={x:t.x-n.center.x,y:t.y-n.center.y};return Xs(o.x,o.y,i.x,i.y)<=0?i:{x:-i.x,y:-i.y}}function Bg(n,t,e){const i={x:t.x-n.center.x,y:t.y-n.center.y},s=Xs(i.x,i.y,e.x,e.y);return{x:n.center.x+e.x*s,y:n.center.y+e.y*s}}function Hg(n){return an(Math.atan2(n.y,n.x))}function zg(n){return{x:-n.y,y:n.x}}function Gg(n,t,e){const i=zg(e),s={x:t.x-n.center.x,y:t.y-n.center.y},r=Xs(s.x,s.y,i.x,i.y);return Math.abs(r)<.01||r>=0?1:-1}function du(n,t,e){return{x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e}}function jd(n){return n?{type:n.type,zoneRadius:n.zoneRadius,zoneCenter:{...n.zoneCenter},rotationRadians:n.rotationRadians,rideSide:n.rideSide,entry:{...n.entry},start:{...n.start},end:{...n.end},ticksElapsed:n.ticksElapsed,ticksTotal:n.ticksTotal}:null}function _o(n,t){const e=Math.min(1,Math.max(0,t));if(e<=Le){const s=e/Le;return du(n.entry,n.start,s)}const i=(e-Le)/(1-Le);return du(n.start,n.end,i)}function Vg(n,t,e,i){const s=t.type==="jump"?t.radius*kd()+og:t.radius*Ng[t.type]*Ug,r=-s,o=s,a=Bg(t,e,i),l=Xs(a.x-t.center.x,a.y-t.center.y,i.x,i.y),c=Math.max(r,Math.min(l,o)),u={x:t.center.x+i.x*c,y:t.center.y+i.y*c};for(let d=4;d>=1;d-=1){const h=d/4,f=c+(o-c)*h,g=t.center.x+i.x*f,S=t.center.y+i.y*f;if(sr(n,g,S))return{start:u,end:{x:g,y:S}}}return{start:u,end:{...u}}}function za(n,t,e,i){const s=kg(t,e,i),r=Hg(s),{start:o,end:a}=Vg(n,t,e,s),l=t.type==="jump"?{...o}:{...e};return{zoneId:t.id,type:t.type,zoneRadius:t.radius,zoneCenter:{...t.center},rotationRadians:t.rotationRadians,rideSide:Gg(t,e,s),entry:l,entryHeading:i,start:o,end:a,endHeading:r,ticksElapsed:0,ticksTotal:Dg}}function Wg(n,t){const e=Math.min(1,Math.max(0,t));if(e<=Le){const i=e/Le;return Fa(n.entryHeading,n.endHeading,i)}return n.endHeading}function Qd(n){const t=n.ticksElapsed+1,e=Math.min(1,t/n.ticksTotal),i=_o(n,e),s=Wg(n,e);return t>=n.ticksTotal?{state:null,position:{...n.end},heading:n.endHeading}:{state:{...n,ticksElapsed:t},position:i,heading:s}}const ks=Math.PI*2,zn=.55,Xg=.28,Yg=.5,qg=.22,fu=.22,Kg=.12,xo=.4,tf=.22,Ga=8,Zg=2,$g=45,Jg=4,jg=2,ef=12,ol=.18,Qg=16,t0=7,e0=.85,n0=48,No=18,i0=5,s0=2,r0=16,o0=4,a0=9,c0=.3,l0=25,u0=30,h0=.5,d0=70,f0=8,p0=4,nf=10,sf={kind:"loop",ringDepth:zn,doesTricks:!0};function rf(n){return{direction:1,wanderTarget:null,loungeTicksRemaining:0,lastPosition:null,stuckTicks:0,rngState:n>>>0||1,completedZoneIds:[]}}function Ys(n){let t=n.rngState;return t^=t<<13>>>0,t^=t>>>17,t^=t<<5>>>0,n.rngState=t>>>0,n.rngState/4294967296}function vo(n,t){let e=(t-n)%ks;return e>Math.PI&&(e-=ks),e<-Math.PI&&(e+=ks),e}function tn(n,t){const e=n-We,i=t-Xe;return{angle:Math.atan2(i,e),radius:Math.hypot(e,i)}}function al(n){return n+Math.PI/2}function of(n){return ks-n.sweepRadians}function m0(n,t){const{fromTrailing:e}=So(n,t);return e>of(t)*Yg}function g0(n,t){const{fromTrailing:e,toLeading:i}=So(n,t),s=t.sweepRadians*qg,r=t.sweepRadians*xo+Si(t);return e<s||i<r}function _0(n,t){const{fromTrailing:e,toLeading:i}=So(n,t),s=t.sweepRadians*fu,r=t.sweepRadians*fu+Si(t);return e<s||i<r}function x0(n,t,e=zn){const i=qs(n,t),s=t.sweepRadians*xo+Si(t),r=t.sweepRadians*tf+Si(t);if(i>=s)return e;const o=Math.min(e,Xg),a=1-(i-r)/Math.max(s-r,.01),l=Math.min(1,Math.max(0,a));return e+(o-e)*l}function v0(n,t){const e=qr(n),i=Vs(n),s=e+(i-e)*t;return{x:We+Math.cos(n)*s,y:Xe+Math.sin(n)*s}}function si(n,t=null,e=zn){const i=t?x0(n,t,e):e;return v0(n,i)}function af(n,t,e,i,s=zn,r=1){const{angle:o,radius:a}=tn(n.x,n.y),l=si(o,i,s),c=Math.hypot(l.x-We,l.y-Xe),u=al(o)+(r===1?0:Math.PI),h=i!==null&&qs(o,i)<i.sweepRadians*xo+Si(i)?.2:.08,f=a-c,g=Math.max(-.45,Math.min(.45,f*h)),S=Math.cos(u)*.82+Math.cos(o)*g+(t-n.x)*.06,m=Math.sin(u)*.82+Math.sin(o)*g+(e-n.y)*.06;return an(Math.atan2(m,S))}function So(n,t){const e=yg(t),i=t.phaseRadians;return{fromTrailing:$r(e,n),toLeading:$r(n,i)}}function Si(n){return n.advancePerTick*Jg}function qs(n,t){return So(n,t).toLeading}function S0(n,t,e,i=zn){if(os(n.x,n.y,e))return!1;const{angle:s}=tn(n.x,n.y),r=qs(s,e),o=e.sweepRadians*tf+Si(e),a=y0(n,e,t.speedState,i);return r<o||a}function M0(n){return(n+Zg+$e)%$e}function y0(n,t,e,i=zn){if(e!=="riding")return!1;const{angle:s,radius:r}=tn(n.x,n.y),o=t.sweepRadians*xo+Si(t);if(qs(s,t)>o*1.15)return!1;const l=2.5/Math.max(r,1);for(let c=1;c<=jg;c+=1){const u=s+l*c,d=si(u,null,i);if(os(d.x,d.y,t)||qs(u,t)<o)return!0}return!1}function E0(n,t,e){if(!t)return{standUp:!0};const{angle:i}=tn(n.x,n.y);return os(n.x,n.y,t)?{lieDown:!0}:e?{standUp:!0}:g0(i,t)?{lieDown:!0}:{standUp:!0}}function T0(n,t,e,i=null,s=new Set){if(!e)return null;const r=tn(n.x,n.y).angle,o=_0(r,e),a=of(e);let l=null,c=1/0;for(const u of t){if(u.tricked||s.has(u.id)||ii(u,e))continue;const d=Math.atan2(u.center.y-e.centerY,u.center.x-e.centerX);if(i&&Math.abs(vo(i.centerRadians,d))>i.halfWidthRadians)continue;const h=$r(r,d);if(!($r(d,r)<=Kg)&&h>a)continue;const g=Math.hypot(n.x-u.center.x,n.y-u.center.y);g<c&&(c=g,l=u)}return o&&l!==null&&c>ef+4?null:l}function cf(n,t){const e=Math.hypot(n.x-t.center.x,n.y-t.center.y);if(e>20)return{steerX:t.center.x,steerY:t.center.y};if(e>Hd(t)+2.5)return{steerX:t.center.x,steerY:t.center.y};const i=n.x+Math.cos(t.rotationRadians)*5,s=n.y+Math.sin(t.rotationRadians)*5;return{steerX:i,steerY:s}}function lf(n,t,e,i,s=ef){if(e)return;const r=Math.hypot(n.x-t.center.x,n.y-t.center.y),o=i?s+4:s,a=Hd(t)*(i?.35:.45);if(r<o&&r>a)return t.prepareSlot}function uf(n,t,e){const i=Math.hypot(e.x-t.x,e.y-t.y),s=Math.max(1,Math.ceil(i/p0));for(let r=1;r<=s;r+=1){const o=r/s,a=t.x+(e.x-t.x)*o,l=t.y+(e.y-t.y)*o;if(!sr(n,a,l))return!1}return!0}function b0(n,t,e){for(let i=0;i<f0;i+=1){const s=Ys(e)*ks-Math.PI,r=Yr(s)+2,o=Vs(s)+10,a=r+Ys(e)*(o-r),l=We+Math.cos(s)*a,c=Xe+Math.sin(s)*a;if(sr(n,l,c)&&uf(n,t,{x:l,y:c}))return{x:l,y:c}}return si(tn(t.x,t.y).angle+.6)}function A0(n){const t={...n};return Ys(t)<h0?(t.loungeTicksRemaining=d0,t.wanderTarget=null,{aiState:t,lounge:!0}):{aiState:t,lounge:!1}}function R0(n,t){const{surfboard:e,map:i}=n,s=e.position;if(t.loungeTicksRemaining>0)return t.loungeTicksRemaining-=1,{stop:!0,setIntendedHeading:e.currentHeading};const r=t.lastPosition,o=!r||Math.hypot(s.x-r.x,s.y-r.y)>.01;t.lastPosition={...s},t.stuckTicks=o?0:t.stuckTicks+1,t.stuckTicks>nf&&(t.wanderTarget=null,t.stuckTicks=0);const a=t.wanderTarget,l=a?Math.hypot(a.x-s.x,a.y-s.y):1/0;if(!a||l<o0){if(Ys(t)<c0)return t.loungeTicksRemaining=l0+Math.floor(Ys(t)*u0),t.wanderTarget=null,{stop:!0,setIntendedHeading:e.currentHeading};t.wanderTarget=b0(i,s,t)}const c=t.wanderTarget,u=an(Math.atan2(c.y-s.y,c.x-s.x));return{...l>a0?{standUp:!0}:{lieDown:!0},setIntendedHeading:u}}function w0(n,t,e){const{surfboard:i,trickPrepare:s,trickZones:r,tide:o}=n,a=i.position,l=tn(a.x,a.y).angle;if(t.kind==="sector"){const M=vo(t.centerRadians,l);M>t.halfWidthRadians?e.direction=-1:M<-t.halfWidthRadians&&(e.direction=1)}const c=t.kind==="sector"?e.direction:1,u=o!==null&&m0(l,o),d=t.kind==="sector"?{centerRadians:t.centerRadians,halfWidthRadians:t.halfWidthRadians}:null,h=new Set(e.completedZoneIds),f=t.doesTricks&&c===1?T0(a,r,o,d,h):null;let g=a.x,S=a.y;if(f){const M=cf(a,f);g=M.steerX,S=M.steerY}else{const M=l+c*ol,y=si(M,o,t.ringDepth);g=y.x,S=y.y}const _={...E0(a,o,f!==null),setIntendedHeading:af(a,g,S,o,t.ringDepth,c)};if(f){const M=lf(a,f,s,u);M!==void 0&&(_.prepareSlot=M)}return _}function C0(n,t,e){for(const i of[0,.5,-.5,1,-1]){const s=t.facingRadians+i;for(const r of[1,1.4,2,2.8]){const o=t.x+Math.cos(s)*e*r,a=t.y+Math.sin(s)*e*r;if(sr(n,o,a))return{x:o,y:a}}}return si(tn(t.x,t.y).angle)}function P0(n,t,e,i,s){let r=null,o=1/0;for(const a of e){if(a.tricked||s.has(a.id)||i&&ii(a,i))continue;const l=Math.hypot(a.center.x-n.x,a.center.y-n.y);if(Math.hypot(a.center.x-t.x,a.center.y-t.y)>n0&&l>No)continue;const u=Math.atan2(a.center.y-t.y,a.center.x-t.x),d=Math.abs(vo(t.facingRadians,u))<=e0;if(!d&&l>No)continue;const h=l-(l<=No?12:0)-(d?4:0);h<o&&(o=h,r=a)}return r}function pu(n,t,e,i){if(uf(n,e,i))return an(Math.atan2(i.y-e.y,i.x-e.x));const s=tn(e.x,e.y).angle,r=tn(i.x,i.y).angle,o=vo(s,r)>=0?1:-1,a=si(s+o*ol*1.5,t);return an(Math.atan2(a.y-e.y,a.x-e.x))}function I0(n,t,e){const{surfboard:i,trickPrepare:s,trickZones:r,tide:o,map:a,audience:l}=n,c=i.position;if(!l){const m=tn(c.x,c.y).angle,p=si(m+ol,o);return{standUp:!0,setIntendedHeading:af(c,p.x,p.y,o)}}if(o&&os(c.x,c.y,o)){const m=al(tn(c.x,c.y).angle)+Math.PI;return{standUp:!0,setIntendedHeading:an(m)}}if(Math.hypot(c.x-l.x,c.y-l.y)<t0)return{standUp:!0,setIntendedHeading:an(Math.atan2(c.y-l.y,c.x-l.x))};const d=e.lastPosition,h=!d||Math.hypot(c.x-d.x,c.y-d.y)>.01;if(e.lastPosition={...c},e.stuckTicks=h?0:e.stuckTicks+1,e.stuckTicks>nf)return e.stuckTicks=0,{standUp:!0,setIntendedHeading:an(tn(c.x,c.y).angle)};const f=P0(c,l,r,o,new Set(e.completedZoneIds));if(f){const m=cf(c,f),p={standUp:!0,setIntendedHeading:pu(a,o,c,{x:m.steerX,y:m.steerY})},_=lf(c,f,s,!0,r0);return _!==void 0&&(p.prepareSlot=_),p}const g=C0(a,l,t.followDistance);return Math.hypot(g.x-c.x,g.y-c.y)<i0?{standUp:!0,setIntendedHeading:(i.currentHeading+s0+$e)%$e}:{standUp:!0,setIntendedHeading:pu(a,o,c,g)}}function L0(n){const t=n.behavior??sf,e={...n.aiState??rf(1)},{surfboard:i}=n,s=t.kind==="explorer"&&e.loungeTicksRemaining>0;return i.speedState==="seated"&&!s?{input:{startPaddle:!0,standUp:!0,setIntendedHeading:i.currentHeading},aiState:e}:{input:t.kind==="explorer"?R0(n,e):t.kind==="showoff"?I0(n,t,e):w0(n,t,e),aiState:e}}function D0(n,t=zn){const e=si(n,null,t);return{x:e.x,y:e.y,heading:an(al(n))}}const Mo=4,N0=12,Bs=["rail","tunnel","jump","brain_coral","wall_ride"],cl={rail:0,brain_coral:0,tunnel:1,wall_ride:1,jump:2},hf=.22,mu=.22,U0=.92,df=5,F0=.2,ji=Math.PI*2,gu=-5,O0=5;function ff(n=Math.random){const t=O0-gu;return(gu+n()*t)*Math.PI/180}function k0(n){return n-Math.PI/2}function pf(n,t){const e=k0(n),i=n+Math.PI/2;return t?i:e}function B0(){return{nextZoneId:1e3}}function ll(n,t){return ul(hf+n*(ji/t))}function mf(n=Math.random){return mu+n()*(U0-mu)}function gf(n,t){return Math.atan2(n.center.y-t.centerY,n.center.x-t.centerX)}function _f(n,t,e){const i=qr(t),s=Vs(t);for(let r=e;r>=.18;r-=.04){const o=i+(s-i)*r,a=We+Math.cos(t)*o,l=Xe+Math.sin(t)*o;if(Qe(n,Math.floor(a),Math.floor(l))==="coral_rideable")return{x:a,y:l}}return null}function xf(n,t){for(const e of t)if(Math.hypot(n.x-e.center.x,n.y-e.center.y)-Mo*2<N0)return!1;return!0}function H0(n=Math.random,t=[]){const e=t.length===0?Bs:Bs.filter(s=>!t.includes(s)),i=e.length>0?e:Bs;return i[Math.floor(n()*i.length)]}function z0(n,t,e,i,s,r,o=Math.random,a=!0,l=!1,c=[]){const u=_f(n,t,r);if(!u||a&&!xf(u,s)||!l&&os(u.x,u.y,e))return null;const d=H0(o,c),h=o()<F0,f=pf(t,h);return{id:i,type:d,prepareSlot:cl[d],center:u,radius:Mo,rotationRadians:f,rotationJitterRadians:ff(o),tricked:!1}}function G0(n,t,e,i,s,r,o,a=[]){for(let l=0;l<df;l+=1){const c=z0(n,t,e,i,s,mf(r),r,!0,o,a);if(c)return c}return null}function V0(n,t,e,i,s,r=Math.random){const o=ji/s*.35,a=[],l=new Map;for(const c of n){const u=gf(c,t);if(!ii(c,t)){a.push(c.spawnedAtHighTide?{...c,spawnedAtHighTide:void 0}:c);continue}if(lu(u,t)&&!c.spawnedAtHighTide){l.set(X0(u,s),c.type);continue}a.push(c)}for(let c=0;c<s&&!(a.length>=s);c+=1){if(W0(a,t,c,s,o))continue;const u=ll(c,s);if(!lu(u,t))continue;const d=[],h=l.get(c);h&&d.push(h);const f=vf(a,t,c,s,o,-1);f&&d.push(f);const g=G0(e,u,t,`feature-${i.nextZoneId}`,a,r,!0,d);g&&(i.nextZoneId+=1,a.push({...g,spawnedAtHighTide:!0}))}return a}function W0(n,t,e,i,s){return vf(n,t,e,i,s,0)!==void 0}function vf(n,t,e,i,s,r){const o=ll((e+r+i)%i,i),a=n.find(l=>{const c=gf(l,t);return Y0(c,o,s)});return a==null?void 0:a.type}function X0(n,t){const e=ji/t;return(Math.round(ul(n-hf)/e)%t+t)%t}function Y0(n,t,e){let i=Math.abs(ul(n-t));return i>Math.PI&&(i=ji-i),i<=e}function ul(n){const t=n%ji;return t<0?t+ji:t}const Va=14;function q0(n){const t=[];for(let e=0;e<Va;e+=1){const i=ll(e,Va);let s=null;for(let l=0;l<df;l+=1){const c=_f(n,i,mf());if(c&&xf(c,t)){s=c;break}}if(!s)continue;const r=Bs[e%Bs.length],o=e%5===0,a=pf(i,o);t.push({id:`${r}-${e}`,type:r,prepareSlot:cl[r],center:s,radius:Mo,rotationRadians:a,rotationJitterRadians:ff(),tricked:!1})}return t}const _u=2.3,K0=.9,Z0=.45,$0=.82,J0=Jc,j0=Jc,Q0=2.2,t_=2.35,e_=3.2;function fs(n){return n/$c}const n_=1.1,i_=1.25,s_=.85,r_=.9,o_=1.35;function a_(){return[{id:"nalu",name:"Nalu",spawnAngle:-Math.PI/4,behavior:{kind:"loop",ringDepth:zn,doesTricks:!0},speedMultiplier:fs(J0),turnRateMultiplier:n_},{id:"kai",name:"Kai",spawnAngle:_u,behavior:{kind:"sector",centerRadians:_u,halfWidthRadians:K0,ringDepth:Z0,doesTricks:!0},speedMultiplier:fs(j0),turnRateMultiplier:i_},{id:"hina",name:"Hina",spawnAngle:-Math.PI*3/4,behavior:{kind:"loop",ringDepth:$0,doesTricks:!1},speedMultiplier:fs(Q0),turnRateMultiplier:s_},{id:"tama",name:"Tama",spawnAngle:Math.PI,behavior:{kind:"explorer"},speedMultiplier:fs(t_),turnRateMultiplier:r_},{id:"koa",name:"Koa",spawnAngle:Math.PI/2+.4,behavior:{kind:"showoff",followDistance:Qg},speedMultiplier:fs(e_),turnRateMultiplier:o_}].map(t=>{const e=t.behavior.kind==="loop"||t.behavior.kind==="sector"?t.behavior.ringDepth:void 0,i=D0(t.spawnAngle,e);return{id:t.id,name:t.name,startX:i.x,startY:i.y,startHeading:i.heading,behavior:t.behavior,speedMultiplier:t.speedMultiplier,turnRateMultiplier:t.turnRateMultiplier}})}function c_(){const n=Sd,t=Md,e=Ld(n,t,"deep_water");for(let h=0;h<t;h+=1)for(let f=0;f<n;f+=1){const g=bm(f,h),S=Am(f,h),m=Fs(g),p=Yr(g),_=Tm(g),M=qr(g),y=Vs(g);S<=m?Is(e,f,h,"grass"):S<=p?Is(e,f,h,"sand"):S<=_?Is(e,f,h,"shallow"):S>=M&&S<=y&&Is(e,f,h,"coral_rideable")}const i=Math.PI/2,s=Yr(i),r=We,o=Xe+s-1.5,a=4,l=r,c=o-a,u=r+1.2,d=o-1.5;return{map:e,spawnX:l,spawnY:c,spawnHeading:4,boardDockX:r,boardDockY:o,requiresBoardMount:!0,tide:{centerX:We,centerY:Xe,innerRadius:Ad,outerRadius:Rd,innerRadiusAtAngle:qr,outerRadiusAtAngle:Vs,sweepRadians:Math.PI/1.35,advancePerTick:.0565},npcs:[{id:"guru",name:"Kaulu the Surf Guru",x:u,y:d,interactRadius:.9,dialogue:["Welcome to Coral Park, surfer!","Your board sits on the sand ring — click it when you are ready.","Ride the wide reef loop around the island.","Yellow chevrons show which way to ride through each feature.","Grind the rails and brain coral, Tuck through tunnels and wall rides, catch Air off jumps.","Prime the matching stance 1–5 ticks before you hit the feature.","Tai'ura's tide submerges features — they fade underwater, then fresh coral rises as the swell passes.","Watch Nalu and her friends ride the reef — they time the swell to hit features in the dry zone."]}],demoSurfers:a_(),trickZones:q0(e)}}const l_=200,u_=64,h_=26,d_=44,f_=36,p_=28,m_=["rail","brain_coral","tunnel","wall_ride","jump"],ps={minX:2,maxX:9,minY:31,maxY:39};function g_(n,t){return{x:p_+n*f_,y:t}}function xu(n,t,e){return m_.map((i,s)=>({id:`anim-${i}${e}`,type:i,prepareSlot:cl[i],center:g_(s,n),radius:Mo,rotationRadians:t,tricked:!1}))}function __(){const n=Ld(l_,u_,"deep_water");for(let t=ps.minY;t<=ps.maxY;t+=1)for(let e=ps.minX;e<=ps.maxX;e+=1)Is(n,e,t,"sand");return{map:n,spawnX:5.5,spawnY:35.5,spawnHeading:0,boardDockX:ps.maxX+.5,boardDockY:35.5,requiresBoardMount:!0,trickZones:[...xu(h_,0,""),...xu(d_,Math.PI,"-counter")],tide:null,npcs:[],demoSurfers:[]}}function x_(n,t,e){for(const i of n){const s=t-i.x,r=e-i.y;if(Math.hypot(s,r)<=i.interactRadius)return i}return null}function v_(n,t,e){for(const i of n)if(Math.floor(i.x)===t&&Math.floor(i.y)===e)return i;return null}function S_(n,t,e,i=0){for(const s of n){const r=t-s.x,o=e-s.y;if(Math.hypot(r,o)<=s.interactRadius+i)return s}return null}function vu(n,t,e,i=.3){const s=t-n.x,r=e-n.y;return Math.hypot(s,r)<=n.interactRadius+i}function M_(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function y_(n,t){return n.completedZoneIds.includes(t)?n:{...n,completedZoneIds:[...n.completedZoneIds,t]}}function E_(n,t){if(n.completedZoneIds.length===0)return n;const e=new Set(t.map(s=>s.id)),i=n.completedZoneIds.filter(s=>e.has(s));return i.length===n.completedZoneIds.length?n:{...n,completedZoneIds:i}}function T_(n,t){const e=Dd(n.startX,n.startY,n.startHeading),i=t??{...ti},s=n.speedMultiplier??1,r=(n.turnRateMultiplier??1)*s,o=s===1&&(n.turnRateMultiplier??1)===1?i:{turnRateDegPerTick:i.turnRateDegPerTick*r,speedPaddle:i.speedPaddle*s,speedRide:i.speedRide*s};return{config:n,behavior:n.behavior??sf,aiState:rf(M_(n.id)),surfboard:{...e,speedState:"riding"},trickPrepare:null,trickAnimation:null,activeTrickZoneId:null,tideSpinTicksRemaining:0,trickSpeedBoost:null,stats:o}}function b_(n){return n.tideSpinTicksRemaining<=0?null:1-n.tideSpinTicksRemaining/Ga}function A_(n){var t;return{id:n.config.id,name:n.config.name,surfboard:{...n.surfboard,position:{...n.surfboard.position}},trickPrepare:n.trickPrepare?{...n.trickPrepare}:null,trickAnimation:jd(n.trickAnimation),trickSpeedBoostTicksRemaining:((t=n.trickSpeedBoost)==null?void 0:t.ticksRemaining)??0,tideSpinProgress:b_(n)}}function R_(n,t,e){const i=za(e,t,n.surfboard.position,n.surfboard.currentHeading);return{...n,trickPrepare:null,trickAnimation:i,trickSpeedBoost:Nd(),activeTrickZoneId:t.id,tideSpinTicksRemaining:0,surfboard:{...n.surfboard,speedState:"riding",intendedHeading:i.endHeading,isRotating:!1}}}function Uo(n,t){const e={...n.stats,turnRateDegPerTick:$g},i=nl(n.surfboard,t,{lieDown:!0,setIntendedHeading:M0(n.surfboard.currentHeading)},e);return{...n,surfboard:i.state,tideSpinTicksRemaining:Math.max(0,n.tideSpinTicksRemaining-1),trickPrepare:Jr(n.trickPrepare),activeTrickZoneId:null}}function w_(n,t,e,i,s=null){if(n={...n,aiState:E_(n.aiState,e)},n.trickAnimation){const g=Qd(n.trickAnimation),S=g.state===null?n.trickAnimation.zoneId:null;return{runtime:{...n,aiState:S?y_(n.aiState,S):n.aiState,trickAnimation:g.state,activeTrickZoneId:g.state===null?null:n.activeTrickZoneId,surfboard:{...n.surfboard,position:g.position,currentHeading:g.heading,intendedHeading:g.heading,isRotating:!1},trickPrepare:Jr(n.trickPrepare)}}}if(n.tideSpinTicksRemaining>0)return{runtime:Uo(n,t)};const r=n.behavior.kind==="loop"||n.behavior.kind==="sector"?n.behavior.ringDepth:zn;if(n.behavior.kind!=="showoff"&&i&&S0(n.surfboard.position,n.surfboard,i,r)){if(n.behavior.kind!=="explorer")return{runtime:Uo({...n,tideSpinTicksRemaining:Ga},t)};if(n.aiState.loungeTicksRemaining<=0){const g=A0(n.aiState);if(n={...n,aiState:g.aiState},!g.lounge)return{runtime:Uo({...n,tideSpinTicksRemaining:Ga},t)}}}const o=L0({surfboard:n.surfboard,trickPrepare:n.trickPrepare,trickZones:e,tide:i,map:t,behavior:n.behavior,aiState:n.aiState,audience:s}),{prepareSlot:a,...l}=o.input;let c={...n,aiState:o.aiState};a!==void 0&&(c={...c,trickPrepare:{slot:a,ticksSincePrepare:0}});const u=c.trickSpeedBoost!==null&&c.surfboard.speedState==="riding"&&!c.trickAnimation,d=Ud(c.stats,u?c.trickSpeedBoost:null),h={...c.surfboard.position},f=nl(c.surfboard,t,l,d);if(c={...c,surfboard:f.state,trickPrepare:Jr(c.trickPrepare)},c.surfboard.speedState!=="riding"?c={...c,trickSpeedBoost:null}:u&&c.trickSpeedBoost&&(c={...c,trickSpeedBoost:Fd(c.trickSpeedBoost)}),c.surfboard.speedState!=="seated"){const g=Xd(e,c.surfboard.position,i,h),S=g!==null&&c.aiState.completedZoneIds.includes(g.id);return g&&!S&&c.activeTrickZoneId!==g.id?{runtime:R_({...c,activeTrickZoneId:g.id},g,t)}:g?{runtime:c}:{runtime:{...c,activeTrickZoneId:null}}}return{runtime:{...c,activeTrickZoneId:null}}}const yo=[{id:"teeny_tai",name:"Teeny Tai",description:"Cute jellyfish spirit in a shimmering water bubble — earned from tricks.",tokenCost:null,earnOnly:!0},{id:"taiura_blessing",name:"Tai'ura's Blessing",description:"Coral blessing for ship combat ammo recovery.",tokenCost:500,minSailingLevel:40,demoDisabled:!0},{id:"ebb_and_flow",name:"Ebb and Flow",description:"Lunar spell — weapon swap grants a boosted attack.",tokenCost:750,minSailingLevel:60,demoDisabled:!0},{id:"living_coral",name:"Living Coral",description:"20% chance to double grinding output.",tokenCost:400,minAgilityLevel:50,demoDisabled:!0},{id:"coral_rail_cosmetic",name:"Coral Rail Trim",description:"Cosmetic surfboard rail glow.",tokenCost:150},{id:"surf_guru_board",name:"Ironwood Board",description:"Ironwood hull — faster ride speed and darker deck.",tokenCost:250,minAgilityLevel:30},{id:"rosewood_board",name:"Rosewood Board",description:"Rosewood hull — fastest ride speed and rich deck finish.",tokenCost:250,requiresUnlock:"surf_guru_board"}],hl=["Bronze","Iron","Steel","Mithril","Adamant","Rune","Dragon"],Ks=10;function C_(n){return n<=0?1:Math.min(hl.length,Math.floor(n/Ks)+1)}function Sf(n){return n<=0?0:Math.min(hl.length-1,Math.floor(n/Ks))}function Fo(n){return hl[Sf(n)]}function P_(n){if(n<=0)return 0;const t=n%Ks;return t===0?Ks:t}function I_(n){if(n<=0)return 0;const t=Sf(n);return Math.max(0,(t-1)*Ks)}const L_=2e8,Wa=99;function Xa(n){if(n<=1)return 0;let t=0;for(let e=1;e<n;e+=1)t+=Math.floor(e+300*2**(e/7));return Math.floor(t/4)}function dl(n){const t=Math.max(0,Math.min(L_,n));for(let e=Wa;e>=1;e-=1)if(t>=Xa(e))return e;return 1}function jr(n){const t=dl(n),e=Xa(t),i=t>=Wa?e:Xa(t+1),s=n-e,r=Math.max(1,i-e),o=t>=Wa?100:Math.min(100,s/r*100);return{level:t,xpIntoLevel:s,xpToNextLevel:r,percent:o}}const D_=16,N_=12,U_=1/4,Su=6,F_=10,O_=1/500,k_=new Set(yo.map(n=>n.id));function B_(){return{xp:{agility:0,sailing:0},coralTokens:0,unlocked:new Set,session:{tricksLanded:0,combo:0,maxCombo:0}}}function H_(n){return{xp:{...n.xp},coralTokens:n.coralTokens,unlocked:new Set(n.unlocked),session:{...n.session}}}function z_(n){return{xp:{...n.xp},coralTokens:n.coralTokens,unlocked:[...n.unlocked],session:{...n.session}}}function wi(n){return typeof n=="number"&&Number.isFinite(n)&&n>=0}function G_(n){if(!n||typeof n!="object")return null;const t=n;if(!t.xp||typeof t.xp!="object"||!wi(t.xp.agility)||!wi(t.xp.sailing)||!wi(t.coralTokens)||!t.session||typeof t.session!="object"||!wi(t.session.tricksLanded)||!wi(t.session.combo)||!wi(t.session.maxCombo)||!Array.isArray(t.unlocked))return null;const e=[];for(const i of t.unlocked){if(typeof i!="string"||!k_.has(i))return null;e.push(i)}return{xp:{agility:t.xp.agility,sailing:t.xp.sailing},coralTokens:t.coralTokens,unlocked:new Set(e),session:{tricksLanded:t.session.tricksLanded,combo:t.session.combo,maxCombo:t.session.maxCombo}}}function Ya(n){return dl(n)}function qa(n){return dl(n)}function Mf(n,t){if(t.demoDisabled)return{ok:!1,reason:"Disabled for this demo"};if(t.earnOnly)return{ok:!1,reason:"Earned through gameplay only (1/500 from successful tricks)"};if(n.unlocked.has(t.id))return{ok:!1,reason:"Already unlocked"};if(t.requiresUnlock&&!n.unlocked.has(t.requiresUnlock)){const e=yo.find(i=>i.id===t.requiresUnlock);return{ok:!1,reason:`Requires ${(e==null?void 0:e.name)??t.requiresUnlock}`}}return t.tokenCost!==null&&n.coralTokens<t.tokenCost?{ok:!1,reason:"Not enough Coral Tokens"}:t.minAgilityLevel&&Ya(n.xp.agility)<t.minAgilityLevel?{ok:!1,reason:`Requires Agility ${t.minAgilityLevel}`}:t.minSailingLevel&&qa(n.xp.sailing)<t.minSailingLevel?{ok:!1,reason:`Requires Sailing ${t.minSailingLevel}`}:{ok:!0}}function V_(n,t){const e=yo.find(r=>r.id===t);if(!e)return{state:n,success:!1,reason:"Unknown unlock"};const i=Mf(n,e);return i.ok?{state:{...n,coralTokens:e.tokenCost!==null?n.coralTokens-e.tokenCost:n.coralTokens,unlocked:new Set([...n.unlocked,t])},success:!0}:{state:n,success:!1,reason:i.reason}}function W_(n=Math.random){if(n()>=U_)return 0;const t=F_-Su+1,e=Math.floor(n()*t);return Su+e}function X_(n,t=Math.random){const e=n.session.combo+1,i=C_(e),s={agility:D_*i,sailing:N_*i},r=W_(t);let o=null;const a=new Set(n.unlocked);return!a.has("teeny_tai")&&t()<O_&&(a.add("teeny_tai"),o="teeny_tai"),{state:{...n,xp:{agility:n.xp.agility+s.agility,sailing:n.xp.sailing+s.sailing},coralTokens:n.coralTokens+r,unlocked:a,session:{tricksLanded:n.session.tricksLanded+1,combo:e,maxCombo:Math.max(n.session.maxCombo,e)}},xpGained:s,tokensGained:r,unlockGained:o}}function Y_(n){const t=I_(n.session.combo);return t===n.session.combo?n:{...n,session:{...n.session,combo:t}}}function Mu(n){let t=vd;return n.has("rosewood_board")?t=om:n.has("surf_guru_board")&&(t=rm),{turnRateDegPerTick:ti.turnRateDegPerTick,speedPaddle:ti.speedPaddle,speedRide:t}}function q_(n){return n.has("rosewood_board")?"Rosewood Board":n.has("surf_guru_board")?"Ironwood Board":"Camphor Board"}class K_{constructor(t){k(this,"surfboard");k(this,"progression");k(this,"trickZones");k(this,"tide");k(this,"pendingInput",{});k(this,"stats");k(this,"arena");k(this,"tickMs");k(this,"cursorWorldX",null);k(this,"cursorWorldY",null);k(this,"hoverHeading",null);k(this,"clickValid",!0);k(this,"tickCount",0);k(this,"xpDrops",[]);k(this,"npcDialogueIndex",new Map);k(this,"proximityGreeted",new Set);k(this,"pendingDialogue",[]);k(this,"boardMounted");k(this,"boardDockX");k(this,"boardDockY");k(this,"walk",null);k(this,"walkClickMarker",null);k(this,"pendingNpcTalk",null);k(this,"pendingBoardMount",!1);k(this,"pendingIntroSurf",!1);k(this,"trickZoneTideSync");k(this,"trickPrepare",null);k(this,"activeTrickZoneId",null);k(this,"trickAnimation",null);k(this,"trickSpeedBoost",null);k(this,"tideFrozen",!1);k(this,"cameraFacingRadians",null);k(this,"movementFrozen",!1);k(this,"boardInteractRadius",1.3);k(this,"demoSurfers",[]);this.arena=t.arena,this.boardMounted=!t.arena.requiresBoardMount,this.boardDockX=t.arena.boardDockX,this.boardDockY=t.arena.boardDockY,this.stats=t.stats??{...ti},this.tickMs=t.tickMs??tm,this.surfboard=Dd(t.arena.spawnX,t.arena.spawnY,t.arena.spawnHeading),this.progression=t.initialProgression?H_(t.initialProgression):B_(),t.stats||(this.stats=Mu(this.progression.unlocked)),this.trickZones=t.arena.trickZones.map(e=>({...e})),this.tide=t.arena.tide?Sg(t.arena.tide):null,this.trickZoneTideSync=B0(),this.demoSurfers=t.arena.demoSurfers.map(e=>T_(e,this.stats))}getSnapshot(){var t,e,i,s;return{surfboard:{...this.surfboard,position:{...this.surfboard.position}},progression:{...this.progression,unlocked:new Set(this.progression.unlocked),session:{...this.progression.session},xp:{...this.progression.xp}},trickZones:this.trickZones.map(r=>({...r,center:{...r.center}})),npcs:this.arena.npcs.map(r=>({...r,dialogue:[...r.dialogue]})),boardDockX:this.boardDockX,boardDockY:this.boardDockY,boardMounted:this.boardMounted,canDismountBoard:this.canDismountBoard(),tide:this.tide?{...this.tide}:null,cursorWorldX:this.cursorWorldX,cursorWorldY:this.cursorWorldY,hoverHeading:this.hoverHeading,clickValid:this.clickValid,tickCount:this.tickCount,walkTargetTx:((t=this.walkClickMarker)==null?void 0:t.tx)??null,walkTargetTy:((e=this.walkClickMarker)==null?void 0:e.ty)??null,walkClickValid:((i=this.walkClickMarker)==null?void 0:i.valid)??!0,onFootMoving:this.walk!==null,trickPrepare:this.trickPrepare?{...this.trickPrepare}:null,trickAnimation:jd(this.trickAnimation),trickSpeedBoostTicksRemaining:((s=this.trickSpeedBoost)==null?void 0:s.ticksRemaining)??0,demoSurfers:this.demoSurfers.map(r=>A_(r))}}consumeXpDrops(){const t=this.xpDrops;return this.xpDrops=[],t}setCursor(t,e){if(this.cursorWorldX=t,this.cursorWorldY=e,!this.boardMounted){this.clickValid=!0,this.hoverHeading=null;return}const i=this.boardMounted?sr(this.arena.map,t,e):Hm(this.arena.map,t,e);this.clickValid=i,this.clickValid?this.hoverHeading=Jm(this.surfboard.position.x,this.surfboard.position.y,t,e):this.hoverHeading=null}clearCursor(){this.cursorWorldX=null,this.cursorWorldY=null,this.hoverHeading=null,this.clickValid=!0}consumeDialogue(){const t=this.pendingDialogue;return this.pendingDialogue=[],t}queueIntroSurf(){this.boardMounted||!this.arena.requiresBoardMount||(this.pendingIntroSurf=!0,this.handleBoardClick())}clickWorld(t,e){const i=Math.floor(t),s=Math.floor(e),r=x_(this.arena.npcs,t,e)??v_(this.arena.npcs,i,s);if(r){this.handleNpcClick(r);return}if(!this.boardMounted&&this.isBoardClick(i,s,t,e)){this.handleBoardClick();return}if(!this.boardMounted){this.pendingNpcTalk=null,this.pendingBoardMount=!1,this.pendingIntroSurf=!1,this.clickToWalk(t,e);return}this.clickOcean(t,e)}handleNpcClick(t){if(vu(t,this.surfboard.position.x,this.surfboard.position.y)){this.queueNpcDialogue(t);return}this.pendingNpcTalk=t,this.pendingBoardMount=!1,this.pendingIntroSurf=!1,this.clickToWalk(t.x,t.y)}handleBoardClick(){if(this.isNearBoard()){this.tryMountBoard();return}this.pendingBoardMount=!0,this.pendingNpcTalk=null,this.clickToWalk(this.boardDockX,this.boardDockY)}isBoardClick(t,e,i,s){const r=Math.floor(this.boardDockX),o=Math.floor(this.boardDockY);if(t===r&&e===o)return!0;const a=i-this.boardDockX,l=s-this.boardDockY;return Math.hypot(a,l)<=this.boardInteractRadius}isNearBoard(){const t=this.surfboard.position.x-this.boardDockX,e=this.surfboard.position.y-this.boardDockY;return Math.hypot(t,e)<=this.boardInteractRadius}isRiderOnSand(){return Qe(this.arena.map,Math.floor(this.surfboard.position.x),Math.floor(this.surfboard.position.y))==="sand"}canDismountBoard(){return this.boardMounted&&this.surfboard.speedState==="seated"&&this.trickAnimation===null&&this.isRiderOnSand()}clickToWalk(t,e){const i=Math.floor(t),s=Math.floor(e),r=Zm(this.arena.map,this.surfboard.position,t,e);if(!r){this.walk=null,this.walkClickMarker={tx:i,ty:s,valid:!1};return}this.walk=r,this.walkClickMarker={tx:i,ty:s,valid:!0}}tryMountBoard(){return this.boardMounted||this.surfboard.speedState!=="seated"||!this.isNearBoard()?!1:(this.boardMounted=!0,this.walk=null,this.walkClickMarker=null,this.pendingBoardMount=!1,this.surfboard={...this.surfboard,position:{x:this.boardDockX,y:this.boardDockY},currentHeading:this.arena.spawnHeading,intendedHeading:this.arena.spawnHeading,isRotating:!1},this.pendingDialogue.push("You climb onto your surfboard."),this.pendingIntroSurf&&this.beginIntroRide(),!0)}beginIntroRide(){if(this.pendingIntroSurf=!1,!this.boardMounted)return;const t=this.boardDockY+10;this.clickOcean(this.boardDockX,t),this.setSpeedState("riding")}tryDismountBoard(){if(!this.boardMounted)return"You are not on your surfboard.";if(this.surfboard.speedState!=="seated")return"Stop moving before leaving your board.";if(this.trickAnimation)return"Finish your trick before leaving your board.";if(!this.isRiderOnSand())return"You can only leave your board on the sand.";const t=this.surfboard.position.x,e=this.surfboard.position.y,i=Number.isFinite(this.surfboard.currentHeading)?this.surfboard.currentHeading:this.arena.spawnHeading;this.boardDockX=t,this.boardDockY=e,this.boardMounted=!1,this.trickPrepare=null,this.trickSpeedBoost=null,this.pendingInput={};const{x:s,y:r}=el(i),o=t-s*.9,a=e-r*.9;let l={x:t,y:e};if(Number.isFinite(o)&&Number.isFinite(a)){const c=Qe(this.arena.map,Math.floor(o),Math.floor(a));(c==="sand"||c==="grass")&&(l={x:o,y:a})}return this.surfboard={...this.surfboard,position:l,speedState:"seated",isRotating:!1},this.pendingDialogue.push("You leave your surfboard on the sand."),null}clickOcean(t,e){this.setCursor(t,e),!(!this.clickValid||this.hoverHeading===null)&&(this.pendingInput.setIntendedHeading=this.hoverHeading)}queueNpcDialogue(t){const e=this.npcDialogueIndex.get(t.id)??0,i=t.dialogue[e];i!==void 0&&(this.pendingDialogue.push(`${t.name}: ${i}`),this.npcDialogueIndex.set(t.id,e+1))}checkProximityDialogue(){if(this.boardMounted&&this.surfboard.speedState!=="seated")return;const t=S_(this.arena.npcs,this.surfboard.position.x,this.surfboard.position.y,.6);!t||this.proximityGreeted.has(t.id)||(this.proximityGreeted.add(t.id),this.queueNpcDialogue(t))}resolvePendingInteractions(){this.pendingNpcTalk&&vu(this.pendingNpcTalk,this.surfboard.position.x,this.surfboard.position.y)&&(this.queueNpcDialogue(this.pendingNpcTalk),this.pendingNpcTalk=null),this.pendingBoardMount&&this.isNearBoard()&&this.tryMountBoard()}setSpeedState(t){if(t==="seated")this.pendingInput.stop=!0;else if(t==="paddling"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.startPaddle=!0)}else if(t==="riding"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}if(!this.boardMounted)return;this.surfboard.speedState==="seated"&&(this.pendingInput.startPaddle=!0),this.pendingInput.standUp=!0}else if(t==="reversing"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.reverse=!0)}}prepareTrick(t){!this.boardMounted||this.surfboard.speedState!=="riding"||this.trickAnimation||(this.trickPrepare={slot:t,ticksSincePrepare:0})}clearTrickPrepare(){this.trickPrepare=null}forceStartTrickAnimation(t,e,i=0){const s=this.trickZones.find(o=>o.id===t);if(!s)return!1;this.trickAnimation=null,this.boardMounted||this.tryMountBoard();const r=e??{x:s.center.x-s.radius*.9,y:s.center.y};return this.surfboard={...this.surfboard,position:{...r},currentHeading:i,intendedHeading:i,speedState:"riding",isRotating:!1},this.trickPrepare=null,this.trickAnimation=za(this.arena.map,s,r,i),this.surfboard={...this.surfboard,intendedHeading:this.trickAnimation.endHeading,isRotating:!1},this.activeTrickZoneId=null,!0}resolveTrickZoneEntry(t){const e=this.trickPrepare,i=e!==null&&e.slot===t.prepareSlot&&wg(e);if(this.trickPrepare=null,!i){this.bailTrick(t);return}const s=X_(this.progression);this.progression=s.state,s.unlockGained==="teeny_tai"&&this.pendingDialogue.push("You have a funny feeling like you're being followed."),this.trickZones=Cg(this.trickZones,t.id),this.trickSpeedBoost=Nd(),this.trickAnimation=za(this.arena.map,t,this.surfboard.position,this.surfboard.currentHeading),this.surfboard={...this.surfboard,intendedHeading:this.trickAnimation.endHeading,isRotating:!1},this.activeTrickZoneId=null,this.xpDrops.push({agility:s.xpGained.agility,sailing:s.xpGained.sailing,tokens:s.tokensGained,x:this.surfboard.position.x,y:this.surfboard.position.y})}bailTrick(t,e){this.trickPrepare=null,this.trickAnimation=null,this.trickSpeedBoost=null,this.progression=Y_(this.progression),this.activeTrickZoneId=null,this.surfboard={...this.surfboard,speedState:"seated",isRotating:!1},this.pendingDialogue.push(e??`Bailed on the ${t.type}! Prime ${Cd(t.prepareSlot)} ${Qc}–${mo} ticks before you hit it.`)}checkTrickZoneResolution(t){if(this.trickAnimation)return;if(!this.boardMounted||this.surfboard.speedState!=="riding"){this.activeTrickZoneId=null;return}const e=Xd(this.trickZones,this.surfboard.position,this.tide,t);if(!e){this.activeTrickZoneId=null;return}this.activeTrickZoneId!==e.id&&(this.activeTrickZoneId=e.id,this.resolveTrickZoneEntry(e))}tryPurchaseUnlock(t){const e=V_(this.progression,t);return e.success?(this.progression=e.state,this.stats=Mu(this.progression.unlocked),null):e.reason??"Purchase failed"}setStats(t){this.stats={...this.stats,...t}}setCameraFacing(t){this.cameraFacingRadians=t}setTideFrozen(t){this.tideFrozen=t}setMovementFrozen(t){this.movementFrozen=t}getArena(){return this.arena}tickTrickAnimationMovement(){if(!this.trickAnimation)return;const t=Qd(this.trickAnimation);this.trickAnimation=t.state,this.surfboard={...this.surfboard,position:t.position,currentHeading:t.heading,intendedHeading:t.heading,isRotating:!1}}tick(){const t={...this.surfboard.position};if(this.boardMounted&&!this.movementFrozen)if(this.trickAnimation)this.tickTrickAnimationMovement();else{const i=this.trickSpeedBoost!==null&&this.surfboard.speedState==="riding"&&!this.trickAnimation,s=Ud(this.stats,i?this.trickSpeedBoost:null),r=nl(this.surfboard,this.arena.map,this.pendingInput,s);this.surfboard=r.state,this.surfboard.speedState!=="riding"?(this.trickSpeedBoost=null,this.trickPrepare&&this.clearTrickPrepare()):i&&this.trickSpeedBoost&&(this.trickSpeedBoost=Fd(this.trickSpeedBoost))}else if(this.walk){const i=$m(this.surfboard.position,this.surfboard.currentHeading,this.walk);this.walk=i.walk,this.surfboard={...this.surfboard,position:i.position,currentHeading:i.heading,intendedHeading:i.heading},i.walk||(this.walkClickMarker=null,this.resolvePendingInteractions())}this.pendingInput={},this.trickPrepare=Jr(this.trickPrepare),this.checkTrickZoneResolution(t),this.tide&&!this.tideFrozen&&(this.tide=Mg(this.tide),this.trickZones=V0(this.trickZones,this.tide,this.arena.map,this.trickZoneTideSync,Va),this.trickZones=xg(this.trickZones,this.tide)),this.checkProximityDialogue();const e={x:this.surfboard.position.x,y:this.surfboard.position.y,facingRadians:this.cameraFacingRadians??je(this.surfboard.currentHeading)*Math.PI/180};this.demoSurfers=this.demoSurfers.map(i=>w_(i,this.arena.map,this.trickZones,this.tide,e).runtime),this.tickCount+=1}}const yf="osrs-surfing-progression";function Z_(){try{const n=localStorage.getItem(yf);return n?G_(JSON.parse(n)):null}catch{return null}}function yu(n){try{localStorage.setItem(yf,JSON.stringify(z_(n)))}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="184",$_=0,Eu=1,J_=2,Hr=1,j_=2,Ls=3,ei=0,Ye=1,Mn=2,Fn=0,$i=1,Tu=2,bu=3,Au=4,Q_=5,pi=100,tx=101,ex=102,nx=103,ix=104,sx=200,rx=201,ox=202,ax=203,Ka=204,Za=205,cx=206,lx=207,ux=208,hx=209,dx=210,fx=211,px=212,mx=213,gx=214,$a=0,Ja=1,ja=2,Qi=3,Qa=4,tc=5,ec=6,nc=7,Ef=0,_x=1,xx=2,Tn=0,Tf=1,bf=2,Af=3,Rf=4,wf=5,Cf=6,Pf=7,If=300,Mi=301,ts=302,Oo=303,ko=304,Eo=306,ic=1e3,Un=1001,sc=1002,De=1003,vx=1004,ur=1005,ke=1006,Bo=1007,gi=1008,Je=1009,Lf=1010,Df=1011,Zs=1012,pl=1013,An=1014,pn=1015,kn=1016,ml=1017,gl=1018,$s=1020,Nf=35902,Uf=35899,Ff=1021,Of=1022,mn=1023,Bn=1026,_i=1027,_l=1028,xl=1029,yi=1030,vl=1031,Sl=1033,zr=33776,Gr=33777,Vr=33778,Wr=33779,rc=35840,oc=35841,ac=35842,cc=35843,lc=36196,uc=37492,hc=37496,dc=37488,fc=37489,Qr=37490,pc=37491,mc=37808,gc=37809,_c=37810,xc=37811,vc=37812,Sc=37813,Mc=37814,yc=37815,Ec=37816,Tc=37817,bc=37818,Ac=37819,Rc=37820,wc=37821,Cc=36492,Pc=36494,Ic=36495,Lc=36283,Dc=36284,to=36285,Nc=36286,Sx=3200,Uc=0,Mx=1,Jn="",rn="srgb",eo="srgb-linear",no="linear",le="srgb",Ci=7680,Ru=519,yx=512,Ex=513,Tx=514,Ml=515,bx=516,Ax=517,yl=518,Rx=519,wu=35044,Cu="300 es",En=2e3,Js=2001;function wx(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cx(){const n=io("canvas");return n.style.display="block",n}const Pu={};function Iu(...n){const t="THREE."+n.shift();console.log(t,...n)}function kf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=kf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function te(...n){n=kf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fc(...n){const t=n.join(" ");t in Pu||(Pu[t]=!0,Ut(...n))}function Px(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Ix={[$a]:Ja,[ja]:ec,[Qa]:nc,[Qi]:tc,[Ja]:$a,[ec]:ja,[nc]:Qa,[tc]:Qi};class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ho=Math.PI/180,Oc=180/Math.PI;function as(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Lx(n,t){return(n%t+t)%t}function zo(n,t,e){return(1-e)*n+e*t}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xl=class Xl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xl.prototype.isVector2=!0;let pt=Xl;class cs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*S;m<0&&(h=-h,f=-f,g=-g,S=-S,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,a=Math.sin(a*_)/M,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+S*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+S*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yl=class Yl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yl.prototype.isVector3=!0;let L=Yl;const Go=new L,Lu=new cs,ql=class ql{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],S=s[0],m=s[3],p=s[6],_=s[1],M=s[4],y=s[7],R=s[2],b=s[5],C=s[8];return r[0]=o*S+a*_+l*R,r[3]=o*m+a*M+l*b,r[6]=o*p+a*y+l*C,r[1]=c*S+u*_+d*R,r[4]=c*m+u*M+d*b,r[7]=c*p+u*y+d*C,r[2]=h*S+f*_+g*R,r[5]=h*m+f*M+g*b,r[8]=h*p+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=d*S,t[1]=(s*c-u*i)*S,t[2]=(a*i-s*o)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=f*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;let Vt=ql;const Vo=new Vt,Du=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){const n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:t,whitePoint:i,transfer:no,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Du,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const ee=Dx();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Nx{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pi===void 0&&(Pi=io("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Pi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=io("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(On(e[i]/255)*255):e[i]=On(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ux=0;class El{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Fx=0;const Xo=new L;class ze extends Ti{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=Un,s=Un,r=ke,o=gi,a=mn,l=Je,c=ze.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=as(),this.name="",this.source=new El(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ic:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ic:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=If;ze.DEFAULT_ANISOTROPY=1;const Kl=class Kl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(f+1)/2,R=(p+1)/2,b=(u+h)/4,C=(d+S)/4,v=(g+m)/4;return M>y&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=b/i,r=C/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=v/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=v/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-S)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kl.prototype.isVector4=!0;let Me=Kl;class Ox extends Ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new ze(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new El(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends Ox{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bf extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kx extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uo=class uo{constructor(t,e,i,s,r,o,a,l,c,u,d,h,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,S,m)}set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uo().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,S=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-S*c,e[9]=-a*l,e[2]=S-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,S=c*d;e[0]=h+S*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=S+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,S=c*d;e[0]=h-S*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=S-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,S=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,S=a*c;e[0]=l*u,e[4]=S-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-S*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,S=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bx,t,Hx)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Xn.crossVectors(i,Ke),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Xn.crossVectors(i,Ke)),Xn.normalize(),hr.crossVectors(Ke,Xn),s[0]=Xn.x,s[4]=hr.x,s[8]=Ke.x,s[1]=Xn.y,s[5]=hr.y,s[9]=Ke.y,s[2]=Xn.z,s[6]=hr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],S=i[6],m=i[10],p=i[14],_=i[3],M=i[7],y=i[11],R=i[15],b=s[0],C=s[4],v=s[8],A=s[12],I=s[1],w=s[5],O=s[9],W=s[13],X=s[2],N=s[6],G=s[10],U=s[14],j=s[3],nt=s[7],dt=s[11],xt=s[15];return r[0]=o*b+a*I+l*X+c*j,r[4]=o*C+a*w+l*N+c*nt,r[8]=o*v+a*O+l*G+c*dt,r[12]=o*A+a*W+l*U+c*xt,r[1]=u*b+d*I+h*X+f*j,r[5]=u*C+d*w+h*N+f*nt,r[9]=u*v+d*O+h*G+f*dt,r[13]=u*A+d*W+h*U+f*xt,r[2]=g*b+S*I+m*X+p*j,r[6]=g*C+S*w+m*N+p*nt,r[10]=g*v+S*O+m*G+p*dt,r[14]=g*A+S*W+m*U+p*xt,r[3]=_*b+M*I+y*X+R*j,r[7]=_*C+M*w+y*N+R*nt,r[11]=_*v+M*O+y*G+R*dt,r[15]=_*A+M*W+y*U+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],S=t[7],m=t[11],p=t[15],_=l*f-c*h,M=a*f-c*d,y=a*h-l*d,R=o*f-c*u,b=o*h-l*u,C=o*d-a*u;return e*(S*_-m*M+p*y)-i*(g*_-m*R+p*b)+s*(g*M-S*R+p*C)-r*(g*y-S*b+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],S=t[13],m=t[14],p=t[15],_=e*a-i*o,M=e*l-s*o,y=e*c-r*o,R=i*l-s*a,b=i*c-r*a,C=s*c-r*l,v=u*S-d*g,A=u*m-h*g,I=u*p-f*g,w=d*m-h*S,O=d*p-f*S,W=h*p-f*m,X=_*W-M*O+y*w+R*I-b*A+C*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/X;return t[0]=(a*W-l*O+c*w)*N,t[1]=(s*O-i*W-r*w)*N,t[2]=(S*C-m*b+p*R)*N,t[3]=(h*b-d*C-f*R)*N,t[4]=(l*I-o*W-c*A)*N,t[5]=(e*W-s*I+r*A)*N,t[6]=(m*y-g*C-p*M)*N,t[7]=(u*C-h*y+f*M)*N,t[8]=(o*O-a*I+c*v)*N,t[9]=(i*I-e*O-r*v)*N,t[10]=(g*b-S*y+p*_)*N,t[11]=(d*y-u*b-f*_)*N,t[12]=(a*A-o*w-l*v)*N,t[13]=(e*w-i*A+s*v)*N,t[14]=(S*M-g*R-m*_)*N,t[15]=(u*R-d*M+h*_)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,S=o*u,m=o*d,p=a*d,_=l*c,M=l*u,y=l*d,R=i.x,b=i.y,C=i.z;return s[0]=(1-(S+p))*R,s[1]=(f+y)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+p))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+M)*C,s[9]=(m-_)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ii.set(s[0],s[1],s[2]).length();const a=Ii.set(s[4],s[5],s[6]).length(),l=Ii.set(s[8],s[9],s[10]).length();r<0&&(o=-o),cn.copy(this);const c=1/o,u=1/a,d=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=En,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===En)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Js)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=En,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===En)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===Js)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};uo.prototype.isMatrix4=!0;let de=uo;const Ii=new L,cn=new de,Bx=new L(0,0,0),Hx=new L(1,1,1),Xn=new L,hr=new L,Ke=new L,Uu=new de,Fu=new cs;class ni{constructor(t=0,e=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zx=0;const Ou=new L,Li=new cs,Pn=new de,dr=new L,gs=new L,Gx=new L,Vx=new cs,ku=new L(1,0,0),Bu=new L(0,1,0),Hu=new L(0,0,1),zu={type:"added"},Wx={type:"removed"},Di={type:"childadded",child:null},Yo={type:"childremoved",child:null};class Ne extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new L,e=new ni,i=new cs,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Vt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?dr.copy(t):dr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(gs,dr,this.up):Pn.lookAt(dr,gs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zu),Di.child=t,this.dispatchEvent(Di),Di.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wx),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zu),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Gx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Vx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xx={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ko(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=Lx(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ko(o,r,t+1/3),this.g=Ko(o,r,t),this.b=Ko(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=Hf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ee.workingToColorSpace(Oe.copy(this),t),Math.round(Jt(Oe.r*255,0,255))*65536+Math.round(Jt(Oe.g*255,0,255))*256+Math.round(Jt(Oe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=rn){ee.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(fr);const i=zo(Yn.h,fr.h,e),s=zo(Yn.s,fr.s,e),r=zo(Yn.l,fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new ne;ne.NAMES=Hf;class Yx extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new L,In=new L,Zo=new L,Ln=new L,Ni=new L,Ui=new L,Gu=new L,$o=new L,Jo=new L,jo=new L,Qo=new Me,ta=new Me,ea=new Me;class fn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ln.subVectors(s,e),In.subVectors(i,e),Zo.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(In),l=ln.dot(Zo),c=In.dot(In),u=In.dot(Zo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Qo.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qo.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,i),ea.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qo,r.x),o.addScaledVector(ta,r.y),o.addScaledVector(ea,r.z),o}static isFrontFacing(t,e,i,s){return ln.subVectors(i,e),In.subVectors(t,e),ln.cross(In).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,i),Ui.subVectors(r,i),$o.subVectors(t,i);const l=Ni.dot($o),c=Ui.dot($o);if(l<=0&&c<=0)return e.copy(i);Jo.subVectors(t,s);const u=Ni.dot(Jo),d=Ui.dot(Jo);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ni,o);jo.subVectors(t,r);const f=Ni.dot(jo),g=Ui.dot(jo);if(g>=0&&f<=g)return e.copy(r);const S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ui,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Gu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Gu,a);const p=1/(m+S+h);return o=S*p,a=h*p,e.copy(i).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),mr.subVectors(this.max,_s),Fi.subVectors(t.a,_s),Oi.subVectors(t.b,_s),ki.subVectors(t.c,_s),qn.subVectors(Oi,Fi),Kn.subVectors(ki,Oi),oi.subVectors(Fi,ki);let e=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-oi.y,oi.x,0];return!na(e,Fi,Oi,ki,mr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Fi,Oi,ki,mr))?!1:(gr.crossVectors(qn,Kn),e=[gr.x,gr.y,gr.z],na(e,Fi,Oi,ki,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new L,new L,new L,new L,new L,new L,new L,new L],un=new L,pr=new bi,Fi=new L,Oi=new L,ki=new L,qn=new L,Kn=new L,oi=new L,_s=new L,mr=new L,gr=new L,ai=new L;function na(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ai.fromArray(n,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ae=new L,_r=new pt;let qx=0;class en extends Ti{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wu&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class zf extends en{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gf extends en{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends en{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Kx=new bi,xs=new L,ia=new L;class ls{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Kx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(ia)),this.expandByPoint(xs.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Zx=0;const sn=new de,sa=new Ne,Bi=new L,Ze=new bi,vs=new bi,Ce=new L;class Pe extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wx(t)?Gf:zf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ze.min,vs.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,vs.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(vs.min),Ze.expandByPoint(vs.max))}Ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ce.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Ce.add(Bi)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new L,l[v]=new L;const c=new L,u=new L,d=new L,h=new pt,f=new pt,g=new pt,S=new L,m=new L;function p(v,A,I){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(w),a[v].add(S),a[A].add(S),a[I].add(S),l[v].add(m),l[A].add(m),l[I].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,A=_.length;v<A;++v){const I=_[v],w=I.start,O=I.count;for(let W=w,X=w+O;W<X;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const M=new L,y=new L,R=new L,b=new L;function C(v){R.fromBufferAttribute(s,v),b.copy(R);const A=a[v];M.copy(A),M.sub(R.multiplyScalar(R.dot(A))).normalize(),y.crossVectors(b,A);const w=y.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,w)}for(let v=0,A=_.length;v<A;++v){const I=_[v],w=I.start,O=I.count;for(let W=w,X=w+O;W<X;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new en(h,u,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $x=0;class us extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=as(),this.name="",this.type="Material",this.blending=$i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Nn=new L,ra=new L,xr=new L,Zn=new L,oa=new L,vr=new L,aa=new L;class bl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ra.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(ra);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=Zn.dot(this.direction),l=-Zn.dot(xr),c=Zn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const S=1/u;d*=S,h*=S,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ra).addScaledVector(xr,h),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){oa.subVectors(e,t),vr.subVectors(i,t),aa.crossVectors(oa,vr);let o=this.direction.dot(aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(vr.crossVectors(Zn,vr));if(l<0)return null;const c=a*this.direction.dot(oa.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(aa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class To extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vu=new de,ci=new bl,Sr=new ls,Wu=new L,Mr=new L,yr=new L,Er=new L,ca=new L,Tr=new L,Xu=new L,br=new L;class yt extends Ne{constructor(t=new Pe,e=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(ca.fromBufferAttribute(d,t),o?Tr.addScaledVector(ca,u):Tr.addScaledVector(ca.sub(e),u))}e.add(Tr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Sr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Sr,Wu)===null||ci.origin.distanceToSquared(Wu)>(t.far-t.near)**2))&&(Vu.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=M;y<R;y+=3){const b=a.getX(y),C=a.getX(y+1),v=a.getX(y+2);s=Ar(this,p,t,i,c,u,d,b,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Ar(this,o,t,i,c,u,d,_,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=M;y<R;y+=3){const b=y,C=y+1,v=y+2;s=Ar(this,p,t,i,c,u,d,b,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const _=m,M=m+1,y=m+2;s=Ar(this,o,t,i,c,u,d,_,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jx(n,t,e,i,s,r,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:n}}function Ar(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Mr),n.getVertexPosition(l,yr),n.getVertexPosition(c,Er);const u=Jx(n,t,e,i,Mr,yr,Er,Xu);if(u){const d=new L;fn.getBarycoord(Xu,Mr,yr,Er,d),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new pt)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,d,new pt)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};fn.getNormal(Mr,yr,Er,h.normal),u.face=h,u.barycoord=d}return u}class Vf extends ze{constructor(t=null,e=1,i=1,s,r,o,a,l,c=De,u=De,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yu extends en{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new de,qu=new de,Rr=[],Ku=new bi,jx=new de,Ss=new yt,Ms=new ls;class la extends yt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yu(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hi),Ku.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Ku)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hi),Ms.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),qu.multiplyMatrices(i,Hi),Ss.matrixWorld=qu,Ss.raycast(t,Rr);for(let o=0,a=Rr.length;o<a;o++){const l=Rr[o];l.instanceId=r,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vf(new Float32Array(s*this.count),s,this.count,_l,pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ua=new L,Qx=new L,tv=new Vt;class fi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ua.subVectors(i,e).cross(Qx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(ua),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tv.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new ls,ev=new pt(.5,.5),wr=new L;class Al{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=En,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],_=r[12],M=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-u,p-g,R-_).normalize(),s[1].setComponents(c+o,f+u,p+g,R+_).normalize(),s[2].setComponents(c+a,f+d,p+S,R+M).normalize(),s[3].setComponents(c-a,f-d,p-S,R-M).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-y).normalize(),e===En)s[5].setComponents(c+l,f+h,p+m,R+y).normalize();else if(e===Js)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=ev.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rl extends us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const so=new L,ro=new L,Zu=new de,ys=new bl,Cr=new ls,ha=new L,$u=new L;class wl extends Ne{constructor(t=new Pe,e=new Rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)so.fromBufferAttribute(e,s-1),ro.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=so.distanceTo(ro);t.setAttribute("lineDistance",new xe(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;Zu.copy(s).invert(),ys.copy(t.ray).applyMatrix4(Zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=f,m=g-1;S<m;S+=c){const p=u.getX(S),_=u.getX(S+1),M=Pr(this,t,ys,l,p,_,S);M&&e.push(M)}if(this.isLineLoop){const S=u.getX(g-1),m=u.getX(f),p=Pr(this,t,ys,l,S,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=f,m=g-1;S<m;S+=c){const p=Pr(this,t,ys,l,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){const S=Pr(this,t,ys,l,g-1,f,g-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(so.fromBufferAttribute(a,s),ro.fromBufferAttribute(a,r),e.distanceSqToSegment(so,ro,ha,$u)>i)return;ha.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ha);if(!(c<t.near||c>t.far))return{distance:c,point:$u.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class nv extends wl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Wf extends ze{constructor(t=[],e=Mi,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class es extends ze{constructor(t,e,i=An,s,r,o,a=De,l=De,c,u=Bn,d=1){if(u!==Bn&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new El(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class iv extends es{constructor(t,e=An,i=Mi,s,r,o=De,a=De,l,c=Bn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xf extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $t extends Pe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function g(S,m,p,_,M,y,R,b,C,v,A){const I=y/C,w=R/v,O=y/2,W=R/2,X=b/2,N=C+1,G=v+1;let U=0,j=0;const nt=new L;for(let dt=0;dt<G;dt++){const xt=dt*w-W;for(let Rt=0;Rt<N;Rt++){const Yt=Rt*I-O;nt[S]=Yt*_,nt[m]=xt*M,nt[p]=X,c.push(nt.x,nt.y,nt.z),nt[S]=0,nt[m]=0,nt[p]=b>0?1:-1,u.push(nt.x,nt.y,nt.z),d.push(Rt/C),d.push(1-dt/v),U+=1}}for(let dt=0;dt<v;dt++)for(let xt=0;xt<C;xt++){const Rt=h+xt+N*dt,Yt=h+xt+N*(dt+1),ie=h+(xt+1)+N*(dt+1),Ht=h+(xt+1)+N*dt;l.push(Rt,Yt,Ht),l.push(Yt,ie,Ht),j+=6}a.addGroup(f,j,A),f+=j,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hn extends Pe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const S=[],m=i/2;let p=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function _(){const y=new L,R=new L;let b=0;const C=(e-t)/i;for(let v=0;v<=r;v++){const A=[],I=v/r,w=I*(e-t)+t;for(let O=0;O<=s;O++){const W=O/s,X=W*l+a,N=Math.sin(X),G=Math.cos(X);R.x=w*N,R.y=-I*i+m,R.z=w*G,d.push(R.x,R.y,R.z),y.set(N,C,G).normalize(),h.push(y.x,y.y,y.z),f.push(W,1-I),A.push(g++)}S.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){const I=S[A][v],w=S[A+1][v],O=S[A+1][v+1],W=S[A][v+1];(t>0||A!==0)&&(u.push(I,w,W),b+=3),(e>0||A!==r-1)&&(u.push(w,O,W),b+=3)}c.addGroup(p,b,0),p+=b}function M(y){const R=g,b=new pt,C=new L;let v=0;const A=y===!0?t:e,I=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*I,0),h.push(0,I,0),f.push(.5,.5),g++;const w=g;for(let O=0;O<=s;O++){const X=O/s*l+a,N=Math.cos(X),G=Math.sin(X);C.x=A*G,C.y=m*I,C.z=A*N,d.push(C.x,C.y,C.z),h.push(0,I,0),b.x=N*.5+.5,b.y=G*.5*I+.5,f.push(b.x,b.y),g++}for(let O=0;O<s;O++){const W=R+O,X=w+O;y===!0?u.push(X,X+1,W):u.push(X+1,X,W),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends Hn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ns(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cl extends Pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const M=new L,y=new L,R=new L;for(let b=0;b<e.length;b+=3)f(e[b+0],M),f(e[b+1],y),f(e[b+2],R),l(M,y,R,_)}function l(_,M,y,R){const b=R+1,C=[];for(let v=0;v<=b;v++){C[v]=[];const A=_.clone().lerp(y,v/b),I=M.clone().lerp(y,v/b),w=b-v;for(let O=0;O<=w;O++)O===0&&v===b?C[v][O]=A:C[v][O]=A.clone().lerp(I,O/w)}for(let v=0;v<b;v++)for(let A=0;A<2*(b-v)-1;A++){const I=Math.floor(A/2);A%2===0?(h(C[v][I+1]),h(C[v+1][I]),h(C[v][I])):(h(C[v][I+1]),h(C[v+1][I+1]),h(C[v+1][I]))}}function c(_){const M=new L;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){const _=new L;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const y=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;o.push(y,1-R)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const M=o[_+0],y=o[_+2],R=o[_+4],b=Math.max(M,y,R),C=Math.min(M,y,R);b>.9&&C<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function f(_,M){const y=_*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const _=new L,M=new L,y=new L,R=new L,b=new pt,C=new pt,v=new pt;for(let A=0,I=0;A<r.length;A+=9,I+=6){_.set(r[A+0],r[A+1],r[A+2]),M.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),b.set(o[I+0],o[I+1]),C.set(o[I+2],o[I+3]),v.set(o[I+4],o[I+5]),R.copy(_).add(M).add(y).divideScalar(3);const w=m(R);S(b,I+0,_,w),S(C,I+2,M,w),S(v,I+4,y,w)}}function S(_,M,y,R){R<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.vertices,t.indices,t.radius,t.detail)}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,s=[],r=[],o=[],a=new L,l=new de;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends wn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sv extends Pl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ju=new L,ju=new L,da=new Il,fa=new Il,pa=new Il;class rv extends wn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ju.subVectors(s[0],s[1]).add(s[0]),c=ju);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),da.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,S,m),fa.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,S,m),pa.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),fa.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),pa.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(da.calc(l),fa.calc(l),pa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ov(n,t){const e=1-n;return e*e*t}function av(n,t){return 2*(1-n)*n*t}function cv(n,t){return n*n*t}function Hs(n,t,e,i){return ov(n,t)+av(n,e)+cv(n,i)}function lv(n,t){const e=1-n;return e*e*e*t}function uv(n,t){const e=1-n;return 3*e*e*n*t}function hv(n,t){return 3*(1-n)*n*n*t}function dv(n,t){return n*n*n*t}function zs(n,t,e,i,s){return lv(n,t)+uv(n,e)+hv(n,i)+dv(n,s)}class Yf extends wn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fv extends wn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qf extends wn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pv extends wn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kf extends wn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mv extends wn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y),Hs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zf extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Qu(a,l.x,c.x,u.x,d.x),Qu(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var kc=Object.freeze({__proto__:null,ArcCurve:sv,CatmullRomCurve3:rv,CubicBezierCurve:Yf,CubicBezierCurve3:fv,EllipseCurve:Pl,LineCurve:qf,LineCurve3:pv,QuadraticBezierCurve:Kf,QuadraticBezierCurve3:mv,SplineCurve:Zf});class gv extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new kc[s.type]().fromJSON(s))}return this}}class th extends gv{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qf(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Kf(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Yf(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Zf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Pl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $f extends th{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new th().fromJSON(s))}return this}}function _v(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Jf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=yv(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let u=a,d=l;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return js(r,o,e,a,l,c,0),o}function Jf(n,t,e,i,s){let r;if(s===Dv(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=eh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=eh(o/i|0,n[o],n[o+1],r);return r&&is(r,r.next)&&(tr(r),r=r.next),r}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(is(e,e.next)||ve(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function js(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Rv(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?vv(n,i,s,r):xv(n)){t.push(l.i,n.i,c.i),tr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sv(Ei(n),t),js(n,t,e,i,s,r,2)):o===2&&Mv(n,t,e,i,s,r):js(Ei(n),t,e,i,s,r,1);break}}}function xv(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Ds(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),S=Math.max(a,l,c),m=Math.max(u,d,h),p=Bc(f,g,t,e,i),_=Bc(S,m,t,e,i);let M=n.prevZ,y=n.nextZ;for(;M&&M.z>=p&&y&&y.z<=_;){if(M.x>=f&&M.x<=S&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ds(a,u,l,d,c,h,M.x,M.y)&&ve(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ds(a,u,l,d,c,h,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=S&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ds(a,u,l,d,c,h,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ds(a,u,l,d,c,h,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Sv(n,t){let e=n;do{const i=e.prev,s=e.next.next;!is(i,s)&&Qf(i,e,e.next,s)&&Qs(i,s)&&Qs(s,i)&&(t.push(i.i,e.i,s.i),tr(e),tr(e.next),e=n=s),e=e.next}while(e!==n);return Ei(e)}function Mv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pv(o,a)){let l=tp(o,a);o=Ei(o,o.next),l=Ei(l,l.next),js(o,t,e,i,s,r,0),js(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function yv(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Jf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Cv(c))}s.sort(Ev);for(let r=0;r<s.length;r++)e=Tv(s[r],e);return e}function Ev(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Tv(n,t){const e=bv(n,t);if(!e)return t;const i=tp(e,n);return Ei(i,i.next),Ei(e,e.next)}function bv(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(is(n,e))return e;do{if(is(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&jf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Qs(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Av(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Av(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function Rv(n,t,e,i){let s=n;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wv(s)}function wv(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Bc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Cv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function jf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ds(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&jf(n,t,e,i,s,r,o,a)}function Pv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Iv(n,t)&&(Qs(n,t)&&Qs(t,n)&&Lv(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||is(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function is(n,t){return n.x===t.x&&n.y===t.y}function Qf(n,t,e,i){const s=Lr(ve(n,t,e)),r=Lr(ve(n,t,i)),o=Lr(ve(e,i,n)),a=Lr(ve(e,i,t));return!!(s!==r&&o!==a||s===0&&Ir(n,e,t)||r===0&&Ir(n,i,t)||o===0&&Ir(e,n,i)||a===0&&Ir(e,t,i))}function Ir(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Lr(n){return n>0?1:n<0?-1:0}function Iv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Qf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qs(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function Lv(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function tp(n,t){const e=Hc(n.i,n.x,n.y),i=Hc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function eh(n,t,e,i){const s=Hc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Hc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Nv{static triangulate(t,e,i=2){return _v(t,e,i)}}class Ki{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];nh(t),ih(i,t);let o=t.length;e.forEach(nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ih(i,e[l]);const a=Nv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function nh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ih(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ll extends Pe{constructor(t=new $f([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Uv;let M,y=!1,R,b,C,v;if(p){M=p.getSpacedPoints(u),y=!0,h=!1;const J=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(u,J),b=new L,C=new L,v=new L}h||(m=0,f=0,g=0,S=0);const A=a.extractPoints(c);let I=A.shape;const w=A.holes;if(!Ki.isClockWise(I)){I=I.reverse();for(let J=0,it=w.length;J<it;J++){const Q=w[J];Ki.isClockWise(Q)&&(w[J]=Q.reverse())}}function W(J){const Q=10000000000000001e-36;let vt=J[0];for(let ft=1;ft<=J.length;ft++){const kt=ft%J.length,P=J[kt],zt=P.x-vt.x,wt=P.y-vt.y,Bt=zt*zt+wt*wt,st=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(vt.x),Math.abs(vt.y)),ae=Q*st*st;if(Bt<=ae){J.splice(kt,1),ft--;continue}vt=P}}W(I),w.forEach(W);const X=w.length,N=I;for(let J=0;J<X;J++){const it=w[J];I=I.concat(it)}function G(J,it,Q){return it||te("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,Q)}const U=I.length;function j(J,it,Q){let vt,ft,kt;const P=J.x-it.x,zt=J.y-it.y,wt=Q.x-J.x,Bt=Q.y-J.y,st=P*P+zt*zt,ae=P*Bt-zt*wt;if(Math.abs(ae)>Number.EPSILON){const T=Math.sqrt(st),x=Math.sqrt(wt*wt+Bt*Bt),B=it.x-zt/T,K=it.y+P/T,tt=Q.x-Bt/x,rt=Q.y+wt/x,lt=((tt-B)*Bt-(rt-K)*wt)/(P*Bt-zt*wt);vt=B+P*lt-J.x,ft=K+zt*lt-J.y;const Y=vt*vt+ft*ft;if(Y<=2)return new pt(vt,ft);kt=Math.sqrt(Y/2)}else{let T=!1;P>Number.EPSILON?wt>Number.EPSILON&&(T=!0):P<-Number.EPSILON?wt<-Number.EPSILON&&(T=!0):Math.sign(zt)===Math.sign(Bt)&&(T=!0),T?(vt=-zt,ft=P,kt=Math.sqrt(st)):(vt=P,ft=zt,kt=Math.sqrt(st/2))}return new pt(vt/kt,ft/kt)}const nt=[];for(let J=0,it=N.length,Q=it-1,vt=J+1;J<it;J++,Q++,vt++)Q===it&&(Q=0),vt===it&&(vt=0),nt[J]=j(N[J],N[Q],N[vt]);const dt=[];let xt,Rt=nt.concat();for(let J=0,it=X;J<it;J++){const Q=w[J];xt=[];for(let vt=0,ft=Q.length,kt=ft-1,P=vt+1;vt<ft;vt++,kt++,P++)kt===ft&&(kt=0),P===ft&&(P=0),xt[vt]=j(Q[vt],Q[kt],Q[P]);dt.push(xt),Rt=Rt.concat(xt)}let Yt;if(m===0)Yt=Ki.triangulateShape(N,w);else{const J=[],it=[];for(let Q=0;Q<m;Q++){const vt=Q/m,ft=f*Math.cos(vt*Math.PI/2),kt=g*Math.sin(vt*Math.PI/2)+S;for(let P=0,zt=N.length;P<zt;P++){const wt=G(N[P],nt[P],kt);Pt(wt.x,wt.y,-ft),vt===0&&J.push(wt)}for(let P=0,zt=X;P<zt;P++){const wt=w[P];xt=dt[P];const Bt=[];for(let st=0,ae=wt.length;st<ae;st++){const T=G(wt[st],xt[st],kt);Pt(T.x,T.y,-ft),vt===0&&Bt.push(T)}vt===0&&it.push(Bt)}}Yt=Ki.triangulateShape(J,it)}const ie=Yt.length,Ht=g+S;for(let J=0;J<U;J++){const it=h?G(I[J],Rt[J],Ht):I[J];y?(C.copy(R.normals[0]).multiplyScalar(it.x),b.copy(R.binormals[0]).multiplyScalar(it.y),v.copy(M[0]).add(C).add(b),Pt(v.x,v.y,v.z)):Pt(it.x,it.y,0)}for(let J=1;J<=u;J++)for(let it=0;it<U;it++){const Q=h?G(I[it],Rt[it],Ht):I[it];y?(C.copy(R.normals[J]).multiplyScalar(Q.x),b.copy(R.binormals[J]).multiplyScalar(Q.y),v.copy(M[J]).add(C).add(b),Pt(v.x,v.y,v.z)):Pt(Q.x,Q.y,d/u*J)}for(let J=m-1;J>=0;J--){const it=J/m,Q=f*Math.cos(it*Math.PI/2),vt=g*Math.sin(it*Math.PI/2)+S;for(let ft=0,kt=N.length;ft<kt;ft++){const P=G(N[ft],nt[ft],vt);Pt(P.x,P.y,d+Q)}for(let ft=0,kt=w.length;ft<kt;ft++){const P=w[ft];xt=dt[ft];for(let zt=0,wt=P.length;zt<wt;zt++){const Bt=G(P[zt],xt[zt],vt);y?Pt(Bt.x,Bt.y+M[u-1].y,M[u-1].x+Q):Pt(Bt.x,Bt.y,d+Q)}}}$(),gt();function $(){const J=s.length/3;if(h){let it=0,Q=U*it;for(let vt=0;vt<ie;vt++){const ft=Yt[vt];Ft(ft[2]+Q,ft[1]+Q,ft[0]+Q)}it=u+m*2,Q=U*it;for(let vt=0;vt<ie;vt++){const ft=Yt[vt];Ft(ft[0]+Q,ft[1]+Q,ft[2]+Q)}}else{for(let it=0;it<ie;it++){const Q=Yt[it];Ft(Q[2],Q[1],Q[0])}for(let it=0;it<ie;it++){const Q=Yt[it];Ft(Q[0]+U*u,Q[1]+U*u,Q[2]+U*u)}}i.addGroup(J,s.length/3-J,0)}function gt(){const J=s.length/3;let it=0;ot(N,it),it+=N.length;for(let Q=0,vt=w.length;Q<vt;Q++){const ft=w[Q];ot(ft,it),it+=ft.length}i.addGroup(J,s.length/3-J,1)}function ot(J,it){let Q=J.length;for(;--Q>=0;){const vt=Q;let ft=Q-1;ft<0&&(ft=J.length-1);for(let kt=0,P=u+m*2;kt<P;kt++){const zt=U*kt,wt=U*(kt+1),Bt=it+vt+zt,st=it+ft+zt,ae=it+ft+wt,T=it+vt+wt;Nt(Bt,st,ae,T)}}}function Pt(J,it,Q){l.push(J),l.push(it),l.push(Q)}function Ft(J,it,Q){se(J),se(it),se(Q);const vt=s.length/3,ft=_.generateTopUV(i,s,vt-3,vt-2,vt-1);Ot(ft[0]),Ot(ft[1]),Ot(ft[2])}function Nt(J,it,Q,vt){se(J),se(it),se(vt),se(it),se(Q),se(vt);const ft=s.length/3,kt=_.generateSideWallUV(i,s,ft-6,ft-3,ft-2,ft-1);Ot(kt[0]),Ot(kt[1]),Ot(kt[3]),Ot(kt[1]),Ot(kt[2]),Ot(kt[3])}function se(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Ot(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Fv(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kc[s.type]().fromJSON(s)),new Ll(i,t.options)}}const Uv={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-d),new pt(h,1-g),new pt(S,1-p)]:[new pt(a,1-l),new pt(u,1-d),new pt(f,1-g),new pt(m,1-p)]}};function Fv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class oo extends Cl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oo(t.radius,t.detail)}}class hs extends Pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],S=[],m=[];for(let p=0;p<u;p++){const _=p*h-o;for(let M=0;M<c;M++){const y=M*d-r;g.push(y,-_,0),S.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const M=_+c*p,y=_+c*(p+1),R=_+1+c*(p+1),b=_+1+c*p;f.push(M,y,b),f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(S,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dl extends Pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new L,h=new L,f=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){const _=[],M=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const b=R/e;d.x=-t*Math.cos(s+b*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+b*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(b+y,1-M),_.push(c++)}u.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const M=u[p][_+1],y=u[p][_],R=u[p+1][_],b=u[p+1][_+1];(p!==0||o>0)&&f.push(M,y,b),(p!==i-1||l<Math.PI)&&f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(S,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class er extends Pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new L,f=new L,g=new L;for(let S=0;S<=i;S++){const m=o+S/i*a;for(let p=0;p<=s;p++){const _=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,_=(s+1)*(S-1)+m-1,M=(s+1)*(S-1)+m,y=(s+1)*S+m;l.push(p,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(sh(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(sh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=ss(n[e]);for(const s in i)t[s]=i[s]}return t}function sh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ov(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ep(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const kv={clone:ss,merge:He};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=Hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Ov(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zv extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ge extends us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gv extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vv extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class np extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const ma=new de,rh=new L,oh=new L;class Wv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Js||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dr=new L,Nr=new cs,xn=new L;class ip extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,Nr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Nr,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Dr,Nr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Nr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,ah=new pt,ch=new pt;class on extends ip{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,ah,ch),e.subVectors(ch,ah)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Nl extends ip{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xv extends Wv{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yv extends np{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Xv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class qv extends np{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const zi=-90,Gi=1;class Kv extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(zi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new on(zi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new on(zi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new on(zi,Gi,t,e);a.layers=this.layers,this.add(a);const l=new on(zi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new on(zi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zv extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const lh=new de;class $v{constructor(t,e,i=0,s=1/0){this.ray=new bl(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lh),this}intersectObject(t,e=!0,i=[]){return zc(t,this,i,e),i.sort(uh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zc(t[s],this,i,e);return i.sort(uh),i}}function uh(n,t){return n.distance-t.distance}function zc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zc(r[o],t,e,!0)}}const Zl=class Zl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Zl.prototype.isMatrix2=!0;let hh=Zl;function dh(n,t,e,i){const s=Jv(i);switch(e){case Ff:return n*t;case _l:return n*t/s.components*s.byteLength;case xl:return n*t/s.components*s.byteLength;case yi:return n*t*2/s.components*s.byteLength;case vl:return n*t*2/s.components*s.byteLength;case Of:return n*t*3/s.components*s.byteLength;case mn:return n*t*4/s.components*s.byteLength;case Sl:return n*t*4/s.components*s.byteLength;case zr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:case cc:return Math.max(n,16)*Math.max(t,8)/4;case rc:case ac:return Math.max(n,8)*Math.max(t,8)/2;case lc:case uc:case dc:case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hc:case Qr:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cc:case Pc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Lc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case to:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jv(n){switch(n){case Je:case Lf:return{byteLength:1,components:1};case Zs:case Df:case kn:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case An:case pl:case pn:return{byteLength:4,components:1};case Nf:case Uf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const S=d[f];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,My=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Qv,alphahash_pars_fragment:tS,alphamap_fragment:eS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:sS,aomap_fragment:rS,aomap_pars_fragment:oS,batching_pars_vertex:aS,batching_vertex:cS,begin_vertex:lS,beginnormal_vertex:uS,bsdfs:hS,iridescence_fragment:dS,bumpmap_pars_fragment:fS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:_S,color_fragment:xS,color_pars_fragment:vS,color_pars_vertex:SS,color_vertex:MS,common:yS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:TS,displacementmap_pars_vertex:bS,displacementmap_vertex:AS,emissivemap_fragment:RS,emissivemap_pars_fragment:wS,colorspace_fragment:CS,colorspace_pars_fragment:PS,envmap_fragment:IS,envmap_common_pars_fragment:LS,envmap_pars_fragment:DS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:XS,envmap_vertex:US,fog_vertex:FS,fog_pars_vertex:OS,fog_fragment:kS,fog_pars_fragment:BS,gradientmap_pars_fragment:HS,lightmap_pars_fragment:zS,lights_lambert_fragment:GS,lights_lambert_pars_fragment:VS,lights_pars_begin:WS,lights_toon_fragment:YS,lights_toon_pars_fragment:qS,lights_phong_fragment:KS,lights_phong_pars_fragment:ZS,lights_physical_fragment:$S,lights_physical_pars_fragment:JS,lights_fragment_begin:jS,lights_fragment_maps:QS,lights_fragment_end:tM,lightprobes_pars_fragment:eM,logdepthbuf_fragment:nM,logdepthbuf_pars_fragment:iM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:rM,map_fragment:oM,map_pars_fragment:aM,map_particle_fragment:cM,map_particle_pars_fragment:lM,metalnessmap_fragment:uM,metalnessmap_pars_fragment:hM,morphinstance_vertex:dM,morphcolor_vertex:fM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:_M,normal_fragment_maps:xM,normal_pars_fragment:vM,normal_pars_vertex:SM,normal_vertex:MM,normalmap_pars_fragment:yM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:TM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:AM,opaque_fragment:RM,packing:wM,premultiplied_alpha_fragment:CM,project_vertex:PM,dithering_fragment:IM,dithering_pars_fragment:LM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:FM,shadowmap_vertex:OM,shadowmask_pars_fragment:kM,skinbase_vertex:BM,skinning_pars_vertex:HM,skinning_vertex:zM,skinnormal_vertex:GM,specularmap_fragment:VM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:YM,transmission_fragment:qM,transmission_pars_fragment:KM,uv_pars_fragment:ZM,uv_pars_vertex:$M,uv_vertex:JM,worldpos_vertex:jM,background_vert:QM,background_frag:ty,backgroundCube_vert:ey,backgroundCube_frag:ny,cube_vert:iy,cube_frag:sy,depth_vert:ry,depth_frag:oy,distance_vert:ay,distance_frag:cy,equirect_vert:ly,equirect_frag:uy,linedashed_vert:hy,linedashed_frag:dy,meshbasic_vert:fy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:_y,meshmatcap_frag:xy,meshnormal_vert:vy,meshnormal_frag:Sy,meshphong_vert:My,meshphong_frag:yy,meshphysical_vert:Ey,meshphysical_frag:Ty,meshtoon_vert:by,meshtoon_frag:Ay,points_vert:Ry,points_frag:wy,shadow_vert:Cy,shadow_frag:Py,sprite_vert:Iy,sprite_frag:Ly},mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Sn={basic:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:He([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:He([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:He([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:He([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:He([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:He([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:He([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:He([mt.lights,mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Sn.physical={uniforms:He([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ur={r:0,b:0,g:0},Dy=new de,rp=new Vt;rp.set(-1,0,0,0,1,0,0,0,1);function Ny(n,t,e,i,s,r){const o=new ne(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const y=_.backgroundBlurriness>0;M=t.get(M,y)}return M}function g(_){let M=!1;const y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(_,M){const y=f(M);y&&(y.isCubeTexture||y.mapping===Eo)?(c===void 0&&(c=new yt(new $t(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ss(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rp),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==le,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yt(new hs(2,2),new Rn({name:"BackgroundMaterial",uniforms:ss(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Ur,ep(n)),e.buffers.color.setClear(Ur.r,Ur.g,Ur.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:S,dispose:p}}function Uy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(w,O,W,X,N){let G=!1;const U=d(w,X,W,O);r!==U&&(r=U,c(r.object)),G=f(w,X,W,N),G&&g(w,X,W,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(w,O,W,X),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,O,W,X){const N=X.wireframe===!0;let G=i[O.id];G===void 0&&(G={},i[O.id]=G);const U=w.isInstancedMesh===!0?w.id:0;let j=G[U];j===void 0&&(j={},G[U]=j);let nt=j[W.id];nt===void 0&&(nt={},j[W.id]=nt);let dt=nt[N];return dt===void 0&&(dt=h(l()),nt[N]=dt),dt}function h(w){const O=[],W=[],X=[];for(let N=0;N<e;N++)O[N]=0,W[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:X,object:w,attributes:{},index:null}}function f(w,O,W,X){const N=r.attributes,G=O.attributes;let U=0;const j=W.getAttributes();for(const nt in j)if(j[nt].location>=0){const xt=N[nt];let Rt=G[nt];if(Rt===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(Rt=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(Rt=w.instanceColor)),xt===void 0||xt.attribute!==Rt||Rt&&xt.data!==Rt.data)return!0;U++}return r.attributesNum!==U||r.index!==X}function g(w,O,W,X){const N={},G=O.attributes;let U=0;const j=W.getAttributes();for(const nt in j)if(j[nt].location>=0){let xt=G[nt];xt===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const Rt={};Rt.attribute=xt,xt&&xt.data&&(Rt.data=xt.data),N[nt]=Rt,U++}r.attributes=N,r.attributesNum=U,r.index=X}function S(){const w=r.newAttributes;for(let O=0,W=w.length;O<W;O++)w[O]=0}function m(w){p(w,0)}function p(w,O){const W=r.newAttributes,X=r.enabledAttributes,N=r.attributeDivisors;W[w]=1,X[w]===0&&(n.enableVertexAttribArray(w),X[w]=1),N[w]!==O&&(n.vertexAttribDivisor(w,O),N[w]=O)}function _(){const w=r.newAttributes,O=r.enabledAttributes;for(let W=0,X=O.length;W<X;W++)O[W]!==w[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function M(w,O,W,X,N,G,U){U===!0?n.vertexAttribIPointer(w,O,W,N,G):n.vertexAttribPointer(w,O,W,X,N,G)}function y(w,O,W,X){S();const N=X.attributes,G=W.getAttributes(),U=O.defaultAttributeValues;for(const j in G){const nt=G[j];if(nt.location>=0){let dt=N[j];if(dt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),dt!==void 0){const xt=dt.normalized,Rt=dt.itemSize,Yt=t.get(dt);if(Yt===void 0)continue;const ie=Yt.buffer,Ht=Yt.type,$=Yt.bytesPerElement,gt=Ht===n.INT||Ht===n.UNSIGNED_INT||dt.gpuType===pl;if(dt.isInterleavedBufferAttribute){const ot=dt.data,Pt=ot.stride,Ft=dt.offset;if(ot.isInstancedInterleavedBuffer){for(let Nt=0;Nt<nt.locationSize;Nt++)p(nt.location+Nt,ot.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Nt=0;Nt<nt.locationSize;Nt++)m(nt.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let Nt=0;Nt<nt.locationSize;Nt++)M(nt.location+Nt,Rt/nt.locationSize,Ht,xt,Pt*$,(Ft+Rt/nt.locationSize*Nt)*$,gt)}else{if(dt.isInstancedBufferAttribute){for(let ot=0;ot<nt.locationSize;ot++)p(nt.location+ot,dt.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ot=0;ot<nt.locationSize;ot++)m(nt.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ot=0;ot<nt.locationSize;ot++)M(nt.location+ot,Rt/nt.locationSize,Ht,xt,Rt*$,Rt/nt.locationSize*ot*$,gt)}}else if(U!==void 0){const xt=U[j];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(nt.location,xt);break;case 3:n.vertexAttrib3fv(nt.location,xt);break;case 4:n.vertexAttrib4fv(nt.location,xt);break;default:n.vertexAttrib1fv(nt.location,xt)}}}}_()}function R(){A();for(const w in i){const O=i[w];for(const W in O){const X=O[W];for(const N in X){const G=X[N];for(const U in G)u(G[U].object),delete G[U];delete X[N]}}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const O=i[w.id];for(const W in O){const X=O[W];for(const N in X){const G=X[N];for(const U in G)u(G[U].object),delete G[U];delete X[N]}}delete i[w.id]}function C(w){for(const O in i){const W=i[O];for(const X in W){const N=W[X];if(N[w.id]===void 0)continue;const G=N[w.id];for(const U in G)u(G[U].object),delete G[U];delete N[w.id]}}}function v(w){for(const O in i){const W=i[O],X=w.isInstancedMesh===!0?w.id:0,N=W[X];if(N!==void 0){for(const G in N){const U=N[G];for(const j in U)u(U[j].object),delete U[j];delete N[G]}delete W[X],Object.keys(W).length===0&&delete i[O]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function Fy(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Oy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Je&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!v)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ut("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:R,samples:b}}function ky(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new fi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:i,M=_*4;let y=p.clippingState||null;l.value=y,y=u(g,h,M,f);for(let R=0;R!==M;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const p=f+S*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==S;++M,y+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Qn=4,fh=[.125,.215,.35,.446,.526,.582],mi=20,By=256,Es=new Nl,ph=new ne;let ga=null,_a=0,xa=0,va=!1;const Hy=new L;class mh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=Hy}=r;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:kn,format:mn,colorSpace:eo,depthBuffer:!1},s=gh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zy(r)),this._blurMaterial=Vy(r,t,e),this._ggxMaterial=Gy(r,t,e)}return s}_compileMaterial(t){const e=new yt(new Pe,t);this._renderer.compile(e,Es)}_sceneToCubeUV(t,e,i,s,r){const l=new on(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ph),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new $t,new To({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(ph),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const R=this._cubeSize;Vi(s,y*R,M>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(S,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Mi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vi(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Es)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Qn?i-g+Qn:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Vi(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(a,Es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Vi(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(a,Es)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),S=r/g,m=isFinite(r)?1+Math.floor(u*S):mi;m>mi&&Ut(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let _=0;for(let C=0;C<mi;++C){const v=C/S,A=Math.exp(-v*v/2);p.push(A),C===0?_+=A:C<m&&(_+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const y=this._sizeLods[s],R=3*y*(s>M-Qn?s-M+Qn:0),b=4*(this._cubeSize-y);Vi(e,R,b,3*y,2*y),l.setRenderTarget(e),l.render(d,Es)}}function zy(n){const t=[],e=[],i=[];let s=n;const r=n-Qn+1+fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Qn?l=fh[o-n+Qn-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,S=3,m=2,p=1,_=new Float32Array(S*g*f),M=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,v=b>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];_.set(A,S*g*b),M.set(h,m*g*b);const I=[b,b,b,b,b,b];y.set(I,p*g*b)}const R=new Pe;R.setAttribute("position",new en(_,S)),R.setAttribute("uv",new en(M,m)),R.setAttribute("faceIndex",new en(y,p)),i.push(new yt(R,null)),s>Qn&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function gh(n,t,e){const i=new bn(n,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vi(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gy(n,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Vy(n,t,e){const i=new Float32Array(mi),s=new L(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function _h(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function xh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class op extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:Fn});r.uniforms.tEquirect.value=e;const o=new yt(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=ke),new Kv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function Wy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Oo||f===ko)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new op(g.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Oo||f===ko,S=f===Mi||f===ts;if(g||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new mh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return g&&_&&_.height>0||S&&_&&l(_)?(i===null&&(i=new mh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Oo?h.mapping=Mi:f===ko&&(h.mapping=ts),h}function l(h){let f=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Xy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Fc("WebGLRenderer: "+i+" extension not supported."),s}}}function Yy(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(f!==null){const _=f.array;S=f.version;for(let M=0,y=_.length;M<y;M+=3){const R=_[M+0],b=_[M+1],C=_[M+2];h.push(R,b,b,C,C,R)}}else{const _=g.array;S=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){const R=M+0,b=M+1,C=M+2;h.push(R,b,b,C,C,R)}}const m=new(g.count>=65535?Gf:zf)(h,1);m.version=S;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function qy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ky(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zy(n,t,e){const i=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let I=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var f=I;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,b=1;R>t.maxTextureSize&&(b=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*b*4*d),v=new Bf(C,R,b,d);v.type=pn,v.needsUpdate=!0;const A=y*4;for(let w=0;w<d;w++){const O=p[w],W=_[w],X=M[w],N=R*b*4*w;for(let G=0;G<O.count;G++){const U=G*A;g===!0&&(s.fromBufferAttribute(O,G),C[N+U+0]=s.x,C[N+U+1]=s.y,C[N+U+2]=s.z,C[N+U+3]=0),S===!0&&(s.fromBufferAttribute(W,G),C[N+U+4]=s.x,C[N+U+5]=s.y,C[N+U+6]=s.z,C[N+U+7]=0),m===!0&&(s.fromBufferAttribute(X,G),C[N+U+8]=s.x,C[N+U+9]=s.y,C[N+U+10]=s.z,C[N+U+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new pt(R,b)},i.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function $y(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Jy={[Tf]:"LINEAR_TONE_MAPPING",[bf]:"REINHARD_TONE_MAPPING",[Af]:"CINEON_TONE_MAPPING",[Rf]:"ACES_FILMIC_TONE_MAPPING",[Cf]:"AGX_TONE_MAPPING",[Pf]:"NEUTRAL_TONE_MAPPING",[wf]:"CUSTOM_TONE_MAPPING"};function jy(n,t,e,i,s){const r=new bn(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new es(t,e):void 0}),o=new bn(t,e,{type:kn,depthBuffer:!1,stencilBuffer:!1}),a=new Pe;a.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xe([0,2,0,0,2,0],2));const l=new zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new yt(a,l),u=new Nl(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,S=null,m=[],p=!1;this.setSize=function(_,M){r.setSize(_,M),o.setSize(_,M);for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){m=_,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,y=r.height;for(let R=0;R<m.length;R++){const b=m[R];b.setSize&&b.setSize(M,y)}},this.begin=function(_,M){if(f||_.toneMapping===Tn&&m.length===0)return!1;if(S=M,M!==null){const y=M.width,R=M.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return p===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=Tn,!0},this.hasRenderPass=function(){return p},this.end=function(_,M){_.toneMapping=g,f=!0;let y=r,R=o;for(let b=0;b<m.length;b++){const C=m[b];if(C.enabled!==!1&&(C.render(_,R,y,M),C.needsSwap!==!1)){const v=y;y=R,R=v}}if(d!==_.outputColorSpace||h!==_.toneMapping){d=_.outputColorSpace,h=_.toneMapping,l.defines={},ee.getTransfer(d)===le&&(l.defines.SRGB_TRANSFER="");const b=Jy[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(S),_.render(c,u),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const ap=new ze,Gc=new es(1,1),cp=new Bf,lp=new kx,up=new Wf,vh=[],Sh=[],Mh=new Float32Array(16),yh=new Float32Array(9),Eh=new Float32Array(4);function ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ao(n,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function tE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function eE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function nE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function iE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Re(e,i))return;Eh.set(i),n.uniformMatrix2fv(this.addr,!1,Eh),we(e,i)}}function sE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Re(e,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),we(e,i)}}function rE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Re(e,i))return;Mh.set(i),n.uniformMatrix4fv(this.addr,!1,Mh),we(e,i)}}function oE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function aE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function cE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function lE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function uE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function dE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function fE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function pE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gc.compareFunction=e.isReversedDepthBuffer()?yl:Ml,r=Gc):r=ap,e.setTexture2D(t||r,s)}function mE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||lp,s)}function gE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||up,s)}function _E(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cp,s)}function xE(n){switch(n){case 5126:return Qy;case 35664:return tE;case 35665:return eE;case 35666:return nE;case 35674:return iE;case 35675:return sE;case 35676:return rE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return cE;case 35669:case 35673:return lE;case 5125:return uE;case 36294:return hE;case 36295:return dE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return _E}}function vE(n,t){n.uniform1fv(this.addr,t)}function SE(n,t){const e=ds(t,this.size,2);n.uniform2fv(this.addr,e)}function ME(n,t){const e=ds(t,this.size,3);n.uniform3fv(this.addr,e)}function yE(n,t){const e=ds(t,this.size,4);n.uniform4fv(this.addr,e)}function EE(n,t){const e=ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TE(n,t){const e=ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bE(n,t){const e=ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function AE(n,t){n.uniform1iv(this.addr,t)}function RE(n,t){n.uniform2iv(this.addr,t)}function wE(n,t){n.uniform3iv(this.addr,t)}function CE(n,t){n.uniform4iv(this.addr,t)}function PE(n,t){n.uniform1uiv(this.addr,t)}function IE(n,t){n.uniform2uiv(this.addr,t)}function LE(n,t){n.uniform3uiv(this.addr,t)}function DE(n,t){n.uniform4uiv(this.addr,t)}function NE(n,t,e){const i=this.cache,s=t.length,r=Ao(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),we(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gc:o=ap;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function UE(n,t,e){const i=this.cache,s=t.length,r=Ao(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lp,r[o])}function FE(n,t,e){const i=this.cache,s=t.length,r=Ao(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||up,r[o])}function OE(n,t,e){const i=this.cache,s=t.length,r=Ao(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cp,r[o])}function kE(n){switch(n){case 5126:return vE;case 35664:return SE;case 35665:return ME;case 35666:return yE;case 35674:return EE;case 35675:return TE;case 35676:return bE;case 5124:case 35670:return AE;case 35667:case 35671:return RE;case 35668:case 35672:return wE;case 35669:case 35673:return CE;case 5125:return PE;case 36294:return IE;case 36295:return LE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return NE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return OE}}class BE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xE(e.type)}}class HE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kE(e.type)}}class zE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Th(n,t){n.seq.push(t),n.map[t.id]=t}function GE(n,t,e){const i=n.name,s=i.length;for(Sa.lastIndex=0;;){const r=Sa.exec(i),o=Sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Th(e,c===void 0?new BE(a,n,t):new HE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new zE(a),Th(e,d)),e=d}}}class Xr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);GE(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function bh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const VE=37297;let WE=0;function XE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ah=new Vt;function YE(n){ee._getMatrix(Ah,ee.workingColorSpace,n);const t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case no:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+XE(n.getShaderSource(t),a)}else return r}function qE(n,t){const e=YE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const KE={[Tf]:"Linear",[bf]:"Reinhard",[Af]:"Cineon",[Rf]:"ACESFilmic",[Cf]:"AgX",[Pf]:"Neutral",[wf]:"Custom"};function ZE(n,t){const e=KE[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new L;function $E(){ee.getLuminanceCoefficients(Fr);const n=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function jE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function QE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ns(n){return n!==""}function wh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ch(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(n){return n.replace(tT,nT)}const eT=new Map;function nT(n,t){let e=Kt[t];if(e===void 0){const i=eT.get(t);if(i!==void 0)e=Kt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(n){return n.replace(iT,sT)}function sT(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rT={[Hr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function oT(n){return rT[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aT={[Mi]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function cT(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aT[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lT={[ts]:"ENVMAP_MODE_REFRACTION"};function uT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hT={[Ef]:"ENVMAP_BLENDING_MULTIPLY",[_x]:"ENVMAP_BLENDING_MIX",[xx]:"ENVMAP_BLENDING_ADD"};function dT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hT[n.combine]||"ENVMAP_BLENDING_NONE"}function fT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pT(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=oT(e),c=cT(e),u=uT(e),d=dT(e),h=fT(e),f=JE(e),g=jE(r),S=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?ZE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,qE("linearToOutputTexel",e.outputColorSpace),$E(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Vc(o),o=wh(o,e),o=Ch(o,e),a=Vc(a),a=wh(a,e),a=Ch(a,e),o=Ph(o),a=Ph(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+m+o,y=_+p+a,R=bh(s,s.VERTEX_SHADER,M),b=bh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,R),s.attachShader(S,b),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(w){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(S)||"",W=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(b)||"",N=O.trim(),G=W.trim(),U=X.trim();let j=!0,nt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,R,b);else{const dt=Rh(s,R,"vertex"),xt=Rh(s,b,"fragment");te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+dt+`
`+xt)}else N!==""?Ut("WebGLProgram: Program Info Log:",N):(G===""||U==="")&&(nt=!1);nt&&(w.diagnostics={runnable:j,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(R),s.deleteShader(b),v=new Xr(s,S),A=QE(s,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(S,VE)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=WE++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=b,this}let mT=0;class gT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _T(t),e.set(t,i)),i}}class _T{constructor(t){this.id=mT++,this.code=t,this.usedTimes=0}}function xT(n){return n===yi||n===Qr||n===to}function vT(n,t,e,i,s,r){const o=new Tl,a=new gT,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,I,w,O,W){const X=w.fog,N=O.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||G,U),nt=j&&j.mapping===Eo?j.image.height:null,dt=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const xt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Rt=xt!==void 0?xt.length:0;let Yt=0;N.morphAttributes.position!==void 0&&(Yt=1),N.morphAttributes.normal!==void 0&&(Yt=2),N.morphAttributes.color!==void 0&&(Yt=3);let ie,Ht,$,gt;if(dt){const Wt=Sn[dt];ie=Wt.vertexShader,Ht=Wt.fragmentShader}else ie=v.vertexShader,Ht=v.fragmentShader,a.update(v),$=a.getVertexShaderID(v),gt=a.getFragmentShaderID(v);const ot=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,Nt=O.isBatchedMesh===!0,se=!!v.map,Ot=!!v.matcap,J=!!j,it=!!v.aoMap,Q=!!v.lightMap,vt=!!v.bumpMap,ft=!!v.normalMap,kt=!!v.displacementMap,P=!!v.emissiveMap,zt=!!v.metalnessMap,wt=!!v.roughnessMap,Bt=v.anisotropy>0,st=v.clearcoat>0,ae=v.dispersion>0,T=v.iridescence>0,x=v.sheen>0,B=v.transmission>0,K=Bt&&!!v.anisotropyMap,tt=st&&!!v.clearcoatMap,rt=st&&!!v.clearcoatNormalMap,lt=st&&!!v.clearcoatRoughnessMap,Y=T&&!!v.iridescenceMap,Z=T&&!!v.iridescenceThicknessMap,Mt=x&&!!v.sheenColorMap,bt=x&&!!v.sheenRoughnessMap,ut=!!v.specularMap,at=!!v.specularColorMap,Gt=!!v.specularIntensityMap,qt=B&&!!v.transmissionMap,oe=B&&!!v.thicknessMap,D=!!v.gradientMap,ct=!!v.alphaMap,q=v.alphaTest>0,Et=!!v.alphaHash,ht=!!v.extensions;let et=Tn;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(et=n.toneMapping);const It={shaderID:dt,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:Ht,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Nt,batchingColor:Nt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:se,matcap:Ot,envMap:J,envMapMode:J&&j.mapping,envMapCubeUVHeight:nt,aoMap:it,lightMap:Q,bumpMap:vt,normalMap:ft,displacementMap:kt,emissiveMap:P,normalMapObjectSpace:ft&&v.normalMapType===Mx,normalMapTangentSpace:ft&&v.normalMapType===Uc,packedNormalMap:ft&&v.normalMapType===Uc&&xT(v.normalMap.format),metalnessMap:zt,roughnessMap:wt,anisotropy:Bt,anisotropyMap:K,clearcoat:st,clearcoatMap:tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:lt,dispersion:ae,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:Mt,sheenRoughnessMap:bt,specularMap:ut,specularColorMap:at,specularIntensityMap:Gt,transmission:B,transmissionMap:qt,thicknessMap:oe,gradientMap:D,opaque:v.transparent===!1&&v.blending===$i&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:q,alphaHash:Et,combine:v.combine,mapUv:se&&g(v.map.channel),aoMapUv:it&&g(v.aoMap.channel),lightMapUv:Q&&g(v.lightMap.channel),bumpMapUv:vt&&g(v.bumpMap.channel),normalMapUv:ft&&g(v.normalMap.channel),displacementMapUv:kt&&g(v.displacementMap.channel),emissiveMapUv:P&&g(v.emissiveMap.channel),metalnessMapUv:zt&&g(v.metalnessMap.channel),roughnessMapUv:wt&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:tt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(v.sheenRoughnessMap.channel),specularMapUv:ut&&g(v.specularMap.channel),specularColorMapUv:at&&g(v.specularColorMap.channel),specularIntensityMapUv:Gt&&g(v.specularIntensityMap.channel),transmissionMapUv:qt&&g(v.transmissionMap.channel),thicknessMapUv:oe&&g(v.thicknessMap.channel),alphaMapUv:ct&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||Bt),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(se||ct),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Yt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:se&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:P&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ht&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&v.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)A.push(I),A.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(A,v),_(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function M(v){const A=f[v.type];let I;if(A){const w=Sn[A];I=kv.clone(w.uniforms)}else I=v.uniforms;return I}function y(v,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new pT(n,A,v,s),c.push(I),u.set(A,I)),I}function R(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function C(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:C}}function ST(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function MT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Lh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,S,m,p){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=g,_.materialVariant=o(h),_.groupOrder=S,_.renderOrder=h.renderOrder,_.z=m,_.group=p),t++,_}function l(h,f,g,S,m,p){const _=a(h,f,g,S,m,p);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):e.push(_)}function c(h,f,g,S,m,p){const _=a(h,f,g,S,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function u(h,f){e.length>1&&e.sort(h||MT),i.length>1&&i.sort(f||Lh),s.length>1&&s.sort(f||Lh)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function yT(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Dh,n.set(i,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ET(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ne};break;case"SpotLight":e={position:new L,direction:new L,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function TT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let bT=0;function AT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function RT(n){const t=new ET,e=TT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new de,o=new de;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,_=0,M=0,y=0,R=0,b=0,C=0;c.sort(AT);for(let A=0,I=c.length;A<I;A++){const w=c[A],O=w.color,W=w.intensity,X=w.distance;let N=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===yi?N=w.shadow.map.texture:N=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=O.r*W,d+=O.g*W,h+=O.b*W;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],W);C++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const U=w.shadow,j=e.get(w);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=w.shadow.matrix,_++}i.directional[f]=G,f++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(O).multiplyScalar(W),G.distance=X,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[S]=G;const U=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,U.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[S]=U.matrix,w.castShadow){const j=e.get(w);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=N,y++}S++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(O).multiplyScalar(W),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=G,m++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const U=w.shadow,j=e.get(w);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=w.shadow.matrix,M++}i.point[g]=G,g++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(W),G.groundColor.copy(w.groundColor).multiplyScalar(W),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==S||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==R||v.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,v.directionalLength=f,v.pointLength=g,v.spotLength=S,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=R,v.numLightProbes=C,i.version=bT++)}function l(c,u){let d=0,h=0,f=0,g=0,S=0;const m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Nh(n){const t=new RT(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function wT(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Nh(n),t.set(s,[a])):r>=o.length?(a=new Nh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const CT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IT=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],LT=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Uh=new de,Ts=new L,Ma=new L;function DT(n,t,e){let i=new Al;const s=new pt,r=new pt,o=new Me,a=new Gv,l=new Vv,c={},u=e.maxTextureSize,d={[ei]:Ye,[Ye]:ei,[Mn]:Mn},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:CT,fragmentShader:PT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new yt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(b,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===j_&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hr);const A=n.getRenderTarget(),I=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=p!==this.type;W&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=b.length;X<N;X++){const G=b[X],U=G.shadow;if(U===void 0){Ut("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const j=U.getFrameExtents();s.multiply(j),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,U.mapSize.y=r.y));const nt=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=nt,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ls){if(G.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new bn(s.x,s.y,{format:yi,type:kn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),U.map.texture.name=G.name+".shadowMap",U.map.depthTexture=new es(s.x,s.y,pn),U.map.depthTexture.name=G.name+".shadowMapDepth",U.map.depthTexture.format=Bn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=De,U.map.depthTexture.magFilter=De}else G.isPointLight?(U.map=new op(s.x),U.map.depthTexture=new iv(s.x,An)):(U.map=new bn(s.x,s.y),U.map.depthTexture=new es(s.x,s.y,An)),U.map.depthTexture.name=G.name+".shadowMap",U.map.depthTexture.format=Bn,this.type===Hr?(U.map.depthTexture.compareFunction=nt?yl:Ml,U.map.depthTexture.minFilter=ke,U.map.depthTexture.magFilter=ke):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=De,U.map.depthTexture.magFilter=De);U.camera.updateProjectionMatrix()}const dt=U.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<dt;xt++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,xt),n.clear();else{xt===0&&(n.setRenderTarget(U.map),n.clear());const Rt=U.getViewport(xt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),O.viewport(o)}if(G.isPointLight){const Rt=U.camera,Yt=U.matrix,ie=G.distance||Rt.far;ie!==Rt.far&&(Rt.far=ie,Rt.updateProjectionMatrix()),Ts.setFromMatrixPosition(G.matrixWorld),Rt.position.copy(Ts),Ma.copy(Rt.position),Ma.add(IT[xt]),Rt.up.copy(LT[xt]),Rt.lookAt(Ma),Rt.updateMatrixWorld(),Yt.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Uh.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Uh,Rt.coordinateSystem,Rt.reversedDepth)}else U.updateMatrices(G);i=U.getFrustum(),y(C,v,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===Ls&&_(U,v),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,I,w)};function _(b,C){const v=t.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bn(s.x,s.y,{format:yi,type:kn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,v,h,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,v,f,S,null)}function M(b,C,v,A){let I=null;const w=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)I=w;else if(I=v.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=I.uuid,W=C.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let N=X[W];N===void 0&&(N=I.clone(),X[W]=N,C.addEventListener("dispose",R)),I=N}if(I.visible=C.visible,I.wireframe=C.wireframe,A===Ls?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const O=n.properties.get(I);O.light=v}return I}function y(b,C,v,A,I){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Ls)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const W=t.update(b),X=b.material;if(Array.isArray(X)){const N=W.groups;for(let G=0,U=N.length;G<U;G++){const j=N[G],nt=X[j.materialIndex];if(nt&&nt.visible){const dt=M(b,nt,A,I);b.onBeforeShadow(n,b,C,v,W,dt,j),n.renderBufferDirect(v,null,W,dt,b,j),b.onAfterShadow(n,b,C,v,W,dt,j)}}}else if(X.visible){const N=M(b,X,A,I);b.onBeforeShadow(n,b,C,v,W,N,null),n.renderBufferDirect(v,null,W,N,b,null),b.onAfterShadow(n,b,C,v,W,N,null)}}const O=b.children;for(let W=0,X=O.length;W<X;W++)y(O[W],C,v,A,I)}function R(b){b.target.removeEventListener("dispose",R);for(const v in c){const A=c[v],I=b.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function NT(n,t){function e(){let D=!1;const ct=new Me;let q=null;const Et=new Me(0,0,0,0);return{setMask:function(ht){q!==ht&&!D&&(n.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){D=ht},setClear:function(ht,et,It,Wt,ye){ye===!0&&(ht*=Wt,et*=Wt,It*=Wt),ct.set(ht,et,It,Wt),Et.equals(ct)===!1&&(n.clearColor(ht,et,It,Wt),Et.copy(ct))},reset:function(){D=!1,q=null,Et.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,q=null,Et=null,ht=null;return{setReversed:function(et){if(ct!==et){const It=t.get("EXT_clip_control");et?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const Wt=ht;ht=null,this.setClear(Wt)}},getReversed:function(){return ct},setTest:function(et){et?ot(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(et){q!==et&&!D&&(n.depthMask(et),q=et)},setFunc:function(et){if(ct&&(et=Ix[et]),Et!==et){switch(et){case $a:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case tc:n.depthFunc(n.GEQUAL);break;case ec:n.depthFunc(n.GREATER);break;case nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=et}},setLocked:function(et){D=et},setClear:function(et){ht!==et&&(ht=et,ct&&(et=1-et),n.clearDepth(et))},reset:function(){D=!1,q=null,Et=null,ht=null,ct=!1}}}function s(){let D=!1,ct=null,q=null,Et=null,ht=null,et=null,It=null,Wt=null,ye=null;return{setTest:function(ue){D||(ue?ot(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(ue){ct!==ue&&!D&&(n.stencilMask(ue),ct=ue)},setFunc:function(ue,Cn,gn){(q!==ue||Et!==Cn||ht!==gn)&&(n.stencilFunc(ue,Cn,gn),q=ue,Et=Cn,ht=gn)},setOp:function(ue,Cn,gn){(et!==ue||It!==Cn||Wt!==gn)&&(n.stencilOp(ue,Cn,gn),et=ue,It=Cn,Wt=gn)},setLocked:function(ue){D=ue},setClear:function(ue){ye!==ue&&(n.clearStencil(ue),ye=ue)},reset:function(){D=!1,ct=null,q=null,Et=null,ht=null,et=null,It=null,Wt=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,_=null,M=null,y=null,R=null,b=null,C=null,v=new ne(0,0,0),A=0,I=!1,w=null,O=null,W=null,X=null,N=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,j=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),U=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),U=j>=2);let dt=null,xt={};const Rt=n.getParameter(n.SCISSOR_BOX),Yt=n.getParameter(n.VIEWPORT),ie=new Me().fromArray(Rt),Ht=new Me().fromArray(Yt);function $(D,ct,q,Et){const ht=new Uint8Array(4),et=n.createTexture();n.bindTexture(D,et),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<q;It++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(ct+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return et}const gt={};gt[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(Qi),vt(!1),ft(Eu),ot(n.CULL_FACE),it(Fn);function ot(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Pt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ft(D,ct){return h[D]!==ct?(n.bindFramebuffer(D,ct),h[D]=ct,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ct),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Nt(D,ct){let q=g,Et=!1;if(D){q=f.get(ct),q===void 0&&(q=[],f.set(ct,q));const ht=D.textures;if(q.length!==ht.length||q[0]!==n.COLOR_ATTACHMENT0){for(let et=0,It=ht.length;et<It;et++)q[et]=n.COLOR_ATTACHMENT0+et;q.length=ht.length,Et=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Et=!0);Et&&n.drawBuffers(q)}function se(D){return S!==D?(n.useProgram(D),S=D,!0):!1}const Ot={[pi]:n.FUNC_ADD,[tx]:n.FUNC_SUBTRACT,[ex]:n.FUNC_REVERSE_SUBTRACT};Ot[nx]=n.MIN,Ot[ix]=n.MAX;const J={[sx]:n.ZERO,[rx]:n.ONE,[ox]:n.SRC_COLOR,[Ka]:n.SRC_ALPHA,[dx]:n.SRC_ALPHA_SATURATE,[ux]:n.DST_COLOR,[cx]:n.DST_ALPHA,[ax]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[hx]:n.ONE_MINUS_DST_COLOR,[lx]:n.ONE_MINUS_DST_ALPHA,[fx]:n.CONSTANT_COLOR,[px]:n.ONE_MINUS_CONSTANT_COLOR,[mx]:n.CONSTANT_ALPHA,[gx]:n.ONE_MINUS_CONSTANT_ALPHA};function it(D,ct,q,Et,ht,et,It,Wt,ye,ue){if(D===Fn){m===!0&&(Pt(n.BLEND),m=!1);return}if(m===!1&&(ot(n.BLEND),m=!0),D!==Q_){if(D!==p||ue!==I){if((_!==pi||R!==pi)&&(n.blendEquation(n.FUNC_ADD),_=pi,R=pi),ue)switch(D){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:te("WebGLState: Invalid blending: ",D);break}else switch(D){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bu:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",D);break}M=null,y=null,b=null,C=null,v.set(0,0,0),A=0,p=D,I=ue}return}ht=ht||ct,et=et||q,It=It||Et,(ct!==_||ht!==R)&&(n.blendEquationSeparate(Ot[ct],Ot[ht]),_=ct,R=ht),(q!==M||Et!==y||et!==b||It!==C)&&(n.blendFuncSeparate(J[q],J[Et],J[et],J[It]),M=q,y=Et,b=et,C=It),(Wt.equals(v)===!1||ye!==A)&&(n.blendColor(Wt.r,Wt.g,Wt.b,ye),v.copy(Wt),A=ye),p=D,I=!1}function Q(D,ct){D.side===Mn?Pt(n.CULL_FACE):ot(n.CULL_FACE);let q=D.side===Ye;ct&&(q=!q),vt(q),D.blending===$i&&D.transparent===!1?it(Fn):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Et=D.stencilWrite;a.setTest(Et),Et&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),P(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function ft(D){D!==$_?(ot(n.CULL_FACE),D!==O&&(D===Eu?n.cullFace(n.BACK):D===J_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),O=D}function kt(D){D!==W&&(U&&n.lineWidth(D),W=D)}function P(D,ct,q){D?(ot(n.POLYGON_OFFSET_FILL),(X!==ct||N!==q)&&(X=ct,N=q,o.getReversed()&&(ct=-ct),n.polygonOffset(ct,q))):Pt(n.POLYGON_OFFSET_FILL)}function zt(D){D?ot(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function wt(D){D===void 0&&(D=n.TEXTURE0+G-1),dt!==D&&(n.activeTexture(D),dt=D)}function Bt(D,ct,q){q===void 0&&(dt===null?q=n.TEXTURE0+G-1:q=dt);let Et=xt[q];Et===void 0&&(Et={type:void 0,texture:void 0},xt[q]=Et),(Et.type!==D||Et.texture!==ct)&&(dt!==q&&(n.activeTexture(q),dt=q),n.bindTexture(D,ct||gt[D]),Et.type=D,Et.texture=ct)}function st(){const D=xt[dt];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ae(){try{n.compressedTexImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function x(){try{n.texSubImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function B(){try{n.texSubImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function rt(){try{n.texStorage2D(...arguments)}catch(D){te("WebGLState:",D)}}function lt(){try{n.texStorage3D(...arguments)}catch(D){te("WebGLState:",D)}}function Y(){try{n.texImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Z(){try{n.texImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function Mt(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function bt(D,ct){d[D]!==ct&&(n.pixelStorei(D,ct),d[D]=ct)}function ut(D){ie.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function at(D){Ht.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ht.copy(D))}function Gt(D,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Et=q.get(D);Et===void 0&&(Et=n.getUniformBlockIndex(ct,D.name),q.set(D,Et))}function qt(D,ct){const Et=c.get(ct).get(D);l.get(ct)!==Et&&(n.uniformBlockBinding(ct,Et,D.__bindingPointIndex),l.set(ct,Et))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},dt=null,xt={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,_=null,M=null,y=null,R=null,b=null,C=null,v=new ne(0,0,0),A=0,I=!1,w=null,O=null,W=null,X=null,N=null,ie.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Pt,bindFramebuffer:Ft,drawBuffers:Nt,useProgram:se,setBlending:it,setMaterial:Q,setFlipSided:vt,setCullFace:ft,setLineWidth:kt,setPolygonOffset:P,setScissorTest:zt,activeTexture:wt,bindTexture:Bt,unbindTexture:st,compressedTexImage2D:ae,compressedTexImage3D:T,texImage2D:Y,texImage3D:Z,pixelStorei:bt,getParameter:Mt,updateUBOMapping:Gt,uniformBlockBinding:qt,texStorage2D:rt,texStorage3D:lt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:ut,viewport:at,reset:oe}}function UT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,x){return g?new OffscreenCanvas(T,x):io("canvas")}function m(T,x,B){let K=1;const tt=ae(T);if((tt.width>B||tt.height>B)&&(K=B/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const rt=Math.floor(K*tt.width),lt=Math.floor(K*tt.height);h===void 0&&(h=S(rt,lt));const Y=x?S(rt,lt):h;return Y.width=rt,Y.height=lt,Y.getContext("2d").drawImage(T,0,0,rt,lt),Ut("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+rt+"x"+lt+")."),Y}else return"data"in T&&Ut("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function p(T){return T.generateMipmaps}function _(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,x,B,K,tt,rt=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let lt;K&&(lt=t.get("EXT_texture_norm16"),lt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8),B===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),B===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8),B===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),B===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),B===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Z=rt?no:ee.getTransfer(tt);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Z===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),B===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function R(T,x){let B;return T?x===null||x===An||x===$s?B=n.DEPTH24_STENCIL8:x===pn?B=n.DEPTH32F_STENCIL8:x===Zs&&(B=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===An||x===$s?B=n.DEPTH_COMPONENT24:x===pn?B=n.DEPTH_COMPONENT32F:x===Zs&&(B=n.DEPTH_COMPONENT16),B}function b(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==ke?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function v(T){const x=T.target;x.removeEventListener("dispose",v),w(x)}function A(T){const x=i.get(T);if(x.__webglInit===void 0)return;const B=T.source,K=f.get(B);if(K){const tt=K[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(T),Object.keys(K).length===0&&f.delete(B)}i.remove(T)}function I(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const B=T.source,K=f.get(B);delete K[x.__cacheKey],o.memory.textures--}function w(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let tt=0;tt<x.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let K=0,tt=B.length;K<tt;K++){const rt=i.get(B[K]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(T)}let O=0;function W(){O=0}function X(){return O}function N(T){O=T}function G(){const T=O;return T>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function U(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function j(T,x){const B=i.get(T);if(T.isVideoTexture&&Bt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const K=T.image;if(K===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function nt(T,x){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Pt(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function dt(T,x){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Pt(B,T,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function xt(T,x){const B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Ft(B,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const Rt={[ic]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[sc]:n.MIRRORED_REPEAT},Yt={[De]:n.NEAREST,[vx]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[ke]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},ie={[yx]:n.NEVER,[Rx]:n.ALWAYS,[Ex]:n.LESS,[Ml]:n.LEQUAL,[Tx]:n.EQUAL,[yl]:n.GEQUAL,[bx]:n.GREATER,[Ax]:n.NOTEQUAL};function Ht(T,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ke||x.magFilter===Bo||x.magFilter===ur||x.magFilter===gi||x.minFilter===ke||x.minFilter===Bo||x.minFilter===ur||x.minFilter===gi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Rt[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Rt[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Rt[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Yt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Yt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==ur&&x.minFilter!==gi||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function $(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const rt=U(x);if(rt!==T.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[rt].usedTimes++;const lt=tt[T.__cacheKey];lt!==void 0&&(tt[T.__cacheKey].usedTimes--,lt.usedTimes===0&&I(x)),T.__cacheKey=rt,T.__webglTexture=tt[rt].texture}return B}function gt(T,x,B){return Math.floor(Math.floor(T/B)/x)}function ot(T,x,B,K){const rt=T.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,K,x.data);else{rt.sort((bt,ut)=>bt.start-ut.start);let lt=0;for(let bt=1;bt<rt.length;bt++){const ut=rt[lt],at=rt[bt],Gt=ut.start+ut.count,qt=gt(at.start,x.width,4),oe=gt(ut.start,x.width,4);at.start<=Gt+1&&qt===oe&&gt(at.start+at.count-1,x.width,4)===qt?ut.count=Math.max(ut.count,at.start+at.count-ut.start):(++lt,rt[lt]=at)}rt.length=lt+1;const Y=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let bt=0,ut=rt.length;bt<ut;bt++){const at=rt[bt],Gt=Math.floor(at.start/4),qt=Math.ceil(at.count/4),oe=Gt%x.width,D=Math.floor(Gt/x.width),ct=qt,q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,oe,D,ct,q,B,K,x.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function Pt(T,x,B){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const tt=$(T,x),rt=x.source;e.bindTexture(K,T.__webglTexture,n.TEXTURE0+B);const lt=i.get(rt);if(rt.version!==lt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const q=ee.getPrimaries(ee.workingColorSpace),Et=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),ht=x.colorSpace===Jn||q===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=m(x.image,!1,s.maxTextureSize);Z=st(x,Z);const Mt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type);let ut=y(x.internalFormat,Mt,bt,x.normalized,x.colorSpace,x.isVideoTexture);Ht(K,x);let at;const Gt=x.mipmaps,qt=x.isVideoTexture!==!0,oe=lt.__version===void 0||tt===!0,D=rt.dataReady,ct=b(x,Z);if(x.isDepthTexture)ut=R(x.format===_i,x.type),oe&&(qt?e.texStorage2D(n.TEXTURE_2D,1,ut,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,ut,Z.width,Z.height,0,Mt,bt,null));else if(x.isDataTexture)if(Gt.length>0){qt&&oe&&e.texStorage2D(n.TEXTURE_2D,ct,ut,Gt[0].width,Gt[0].height);for(let q=0,Et=Gt.length;q<Et;q++)at=Gt[q],qt?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,bt,at.data):e.texImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,Mt,bt,at.data);x.generateMipmaps=!1}else qt?(oe&&e.texStorage2D(n.TEXTURE_2D,ct,ut,Z.width,Z.height),D&&ot(x,Z,Mt,bt)):e.texImage2D(n.TEXTURE_2D,0,ut,Z.width,Z.height,0,Mt,bt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ut,Gt[0].width,Gt[0].height,Z.depth);for(let q=0,Et=Gt.length;q<Et;q++)if(at=Gt[q],x.format!==mn)if(Mt!==null)if(qt){if(D)if(x.layerUpdates.size>0){const ht=dh(at.width,at.height,x.format,x.type);for(const et of x.layerUpdates){const It=at.data.subarray(et*ht/at.data.BYTES_PER_ELEMENT,(et+1)*ht/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,et,at.width,at.height,1,Mt,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Z.depth,Mt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ut,at.width,at.height,Z.depth,0,at.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Z.depth,Mt,bt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,ut,at.width,at.height,Z.depth,0,Mt,bt,at.data)}else{qt&&oe&&e.texStorage2D(n.TEXTURE_2D,ct,ut,Gt[0].width,Gt[0].height);for(let q=0,Et=Gt.length;q<Et;q++)at=Gt[q],x.format!==mn?Mt!==null?qt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,at.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,bt,at.data):e.texImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,Mt,bt,at.data)}else if(x.isDataArrayTexture)if(qt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ut,Z.width,Z.height,Z.depth),D)if(x.layerUpdates.size>0){const q=dh(Z.width,Z.height,x.format,x.type);for(const Et of x.layerUpdates){const ht=Z.data.subarray(Et*q/Z.data.BYTES_PER_ELEMENT,(Et+1)*q/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,Z.width,Z.height,1,Mt,bt,ht)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Mt,bt,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,Z.width,Z.height,Z.depth,0,Mt,bt,Z.data);else if(x.isData3DTexture)qt?(oe&&e.texStorage3D(n.TEXTURE_3D,ct,ut,Z.width,Z.height,Z.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Mt,bt,Z.data)):e.texImage3D(n.TEXTURE_3D,0,ut,Z.width,Z.height,Z.depth,0,Mt,bt,Z.data);else if(x.isFramebufferTexture){if(oe)if(qt)e.texStorage2D(n.TEXTURE_2D,ct,ut,Z.width,Z.height);else{let q=Z.width,Et=Z.height;for(let ht=0;ht<ct;ht++)e.texImage2D(n.TEXTURE_2D,ht,ut,q,Et,0,Mt,bt,null),q>>=1,Et>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Z.parentNode!==q){q.appendChild(Z),d.add(x),q.onpaint=Wt=>{const ye=Wt.changedElements;for(const ue of d)ye.includes(ue.image)&&(ue.needsUpdate=!0)},q.requestPaint();return}const Et=0,ht=n.RGBA,et=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Et,ht,et,It,Z),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(qt&&oe){const q=ae(Gt[0]);e.texStorage2D(n.TEXTURE_2D,ct,ut,q.width,q.height)}for(let q=0,Et=Gt.length;q<Et;q++)at=Gt[q],qt?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Mt,bt,at):e.texImage2D(n.TEXTURE_2D,q,ut,Mt,bt,at);x.generateMipmaps=!1}else if(qt){if(oe){const q=ae(Z);e.texStorage2D(n.TEXTURE_2D,ct,ut,q.width,q.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,bt,Z)}else e.texImage2D(n.TEXTURE_2D,0,ut,Mt,bt,Z);p(x)&&_(K),lt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ft(T,x,B){if(x.image.length!==6)return;const K=$(T,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const rt=i.get(tt);if(tt.version!==rt.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const lt=ee.getPrimaries(ee.workingColorSpace),Y=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),Z=x.colorSpace===Jn||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,bt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!Mt&&!bt?ut[et]=m(x.image[et],!0,s.maxCubemapSize):ut[et]=bt?x.image[et].image:x.image[et],ut[et]=st(x,ut[et]);const at=ut[0],Gt=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),oe=y(x.internalFormat,Gt,qt,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,ct=rt.__version===void 0||K===!0,q=tt.dataReady;let Et=b(x,at);Ht(n.TEXTURE_CUBE_MAP,x);let ht;if(Mt){D&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,oe,at.width,at.height);for(let et=0;et<6;et++){ht=ut[et].mipmaps;for(let It=0;It<ht.length;It++){const Wt=ht[It];x.format!==mn?Gt!==null?D?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,0,0,Wt.width,Wt.height,Gt,Wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,oe,Wt.width,Wt.height,0,Wt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,0,0,Wt.width,Wt.height,Gt,qt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It,oe,Wt.width,Wt.height,0,Gt,qt,Wt.data)}}}else{if(ht=x.mipmaps,D&&ct){ht.length>0&&Et++;const et=ae(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,oe,et.width,et.height)}for(let et=0;et<6;et++)if(bt){D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,Gt,qt,ut[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,oe,ut[et].width,ut[et].height,0,Gt,qt,ut[et].data);for(let It=0;It<ht.length;It++){const ye=ht[It].image[et].image;D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,0,0,ye.width,ye.height,Gt,qt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,oe,ye.width,ye.height,0,Gt,qt,ye.data)}}else{D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,qt,ut[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,oe,Gt,qt,ut[et]);for(let It=0;It<ht.length;It++){const Wt=ht[It];D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,0,0,Gt,qt,Wt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,It+1,oe,Gt,qt,Wt.image[et])}}}p(x)&&_(n.TEXTURE_CUBE_MAP),rt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Nt(T,x,B,K,tt,rt){const lt=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),Z=y(B.internalFormat,lt,Y,B.normalized,B.colorSpace),Mt=i.get(x),bt=i.get(B);if(bt.__renderTarget=x,!Mt.__hasExternalTextures){const ut=Math.max(1,x.width>>rt),at=Math.max(1,x.height>>rt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,Z,ut,at,x.depth,0,lt,Y,null):e.texImage2D(tt,rt,Z,ut,at,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),wt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,tt,bt.__webglTexture,0,zt(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,tt,bt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function se(T,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const K=x.depthTexture,tt=K&&K.isDepthTexture?K.type:null,rt=R(x.stencilBuffer,tt),lt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;wt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(x),rt,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(x),rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,T)}else{const K=x.textures;for(let tt=0;tt<K.length;tt++){const rt=K[tt],lt=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),Z=y(rt.internalFormat,lt,Y,rt.normalized,rt.colorSpace);wt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(x),Z,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(x),Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(T,x,B){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,x.depthTexture);const Mt=r.convert(x.depthTexture.format),bt=r.convert(x.depthTexture.type);let ut;x.depthTexture.format===Bn?ut=n.DEPTH_COMPONENT24:x.depthTexture.format===_i&&(ut=n.DEPTH24_STENCIL8);for(let at=0;at<6;at++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ut,x.width,x.height,0,Mt,bt,null)}}else j(x.depthTexture,0);const rt=tt.__webglTexture,lt=zt(x),Y=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Z=x.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bn)wt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,rt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,rt,0);else if(x.depthTexture.format===_i)wt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,rt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,rt,0);else throw new Error("Unknown depthTexture format")}function J(T){const x=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)Ot(x.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?Ot(x.__webglFramebuffer[0],T,0):Ot(x.__webglFramebuffer,T,0)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),se(x.__webglDepthbuffer[K],T,!1);else{const tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),se(x.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(T,x,B){const K=i.get(T);x!==void 0&&Nt(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&J(T)}function Q(T){const x=T.texture,B=i.get(T),K=i.get(x);T.addEventListener("dispose",v);const tt=T.textures,rt=T.isWebGLCubeRenderTarget===!0,lt=tt.length>1;if(lt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),rt){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else B.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,Z=tt.length;Y<Z;Y++){const Mt=i.get(tt[Y]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&wt(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<tt.length;Y++){const Z=tt[Y];B.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const Mt=r.convert(Z.format,Z.colorSpace),bt=r.convert(Z.type),ut=y(Z.internalFormat,Mt,bt,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),at=zt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,ut,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),se(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Nt(B.__webglFramebuffer[Y][Z],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Nt(B.__webglFramebuffer[Y],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Y=0,Z=tt.length;Y<Z;Y++){const Mt=tt[Y],bt=i.get(Mt);let ut=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,bt.__webglTexture),Ht(ut,Mt),Nt(B.__webglFramebuffer,T,Mt,n.COLOR_ATTACHMENT0+Y,ut,0),p(Mt)&&_(ut)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,K.__webglTexture),Ht(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Nt(B.__webglFramebuffer[Z],T,x,n.COLOR_ATTACHMENT0,Y,Z);else Nt(B.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,Y,0);p(x)&&_(Y),e.unbindTexture()}T.depthBuffer&&J(T)}function vt(T){const x=T.textures;for(let B=0,K=x.length;B<K;B++){const tt=x[B];if(p(tt)){const rt=M(T),lt=i.get(tt).__webglTexture;e.bindTexture(rt,lt),_(rt),e.unbindTexture()}}}const ft=[],kt=[];function P(T){if(T.samples>0){if(wt(T)===!1){const x=T.textures,B=T.width,K=T.height;let tt=n.COLOR_BUFFER_BIT;const rt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(T),Y=x.length>1;if(Y)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Z=T.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Mt]);const bt=i.get(x[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,tt,n.NEAREST),l===!0&&(ft.length=0,kt.length=0,ft.push(n.COLOR_ATTACHMENT0+Mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ft.push(rt),kt.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Mt]);const bt=i.get(x[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function zt(T){return Math.min(s.maxSamples,T.samples)}function wt(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Bt(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function st(T,x){const B=T.colorSpace,K=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==eo&&B!==Jn&&(ee.getTransfer(B)===le?(K!==mn||tt!==Je)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",B)),x}function ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=xt,this.rebindTextures=it,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function FT(n,t){function e(i,s=Jn){let r;const o=ee.getTransfer(s);if(i===Je)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lf)return n.BYTE;if(i===Df)return n.SHORT;if(i===Zs)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===Ff)return n.ALPHA;if(i===Of)return n.RGB;if(i===mn)return n.RGBA;if(i===Bn)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===_l)return n.RED;if(i===xl)return n.RED_INTEGER;if(i===yi)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===Sl)return n.RGBA_INTEGER;if(i===zr||i===Gr||i===Vr||i===Wr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===oc||i===ac||i===cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===uc||i===hc||i===dc||i===fc||i===Qr||i===pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lc||i===uc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dc)return r.COMPRESSED_R11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qr)return r.COMPRESSED_RG11_EAC;if(i===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mc||i===gc||i===_c||i===xc||i===vc||i===Sc||i===Mc||i===yc||i===Ec||i===Tc||i===bc||i===Ac||i===Rc||i===wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Pc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Cc)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lc||i===Dc||i===to||i===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const OT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Xf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Rn({vertexShader:OT,fragmentShader:kT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HT extends Ti{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const S=typeof XRWebGLBinding<"u",m=new BT,p={},_=e.getContextAttributes();let M=null,y=null;const R=[],b=[],C=new pt;let v=null;const A=new on;A.viewport=new Me;const I=new on;I.viewport=new Me;const w=[A,I],O=new Zv;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=R[$];return gt===void 0&&(gt=new qo,R[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=R[$];return gt===void 0&&(gt=new qo,R[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=R[$];return gt===void 0&&(gt=new qo,R[$]=gt),gt.getHandSpace()};function N($){const gt=b.indexOf($.inputSource);if(gt===-1)return;const ot=R[gt];ot!==void 0&&(ot.update($.inputSource,$.frame,c||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",U);for(let $=0;$<R.length;$++){const gt=b[$];gt!==null&&(b[$]=null,R[$].disconnect(gt))}W=null,X=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(M),f=null,h=null,d=null,s=null,y=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Pt=null,Ft=null;_.depth&&(Ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=_.stencil?_i:Bn,Pt=_.stencil?$s:An);const Nt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Nt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new bn(h.textureWidth,h.textureHeight,{format:mn,type:Je,depthTexture:new es(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U($){for(let gt=0;gt<$.removed.length;gt++){const ot=$.removed[gt],Pt=b.indexOf(ot);Pt>=0&&(b[Pt]=null,R[Pt].disconnect(ot))}for(let gt=0;gt<$.added.length;gt++){const ot=$.added[gt];let Pt=b.indexOf(ot);if(Pt===-1){for(let Nt=0;Nt<R.length;Nt++)if(Nt>=b.length){b.push(ot),Pt=Nt;break}else if(b[Nt]===null){b[Nt]=ot,Pt=Nt;break}if(Pt===-1)break}const Ft=R[Pt];Ft&&Ft.connect(ot)}}const j=new L,nt=new L;function dt($,gt,ot){j.setFromMatrixPosition(gt.matrixWorld),nt.setFromMatrixPosition(ot.matrixWorld);const Pt=j.distanceTo(nt),Ft=gt.projectionMatrix.elements,Nt=ot.projectionMatrix.elements,se=Ft[14]/(Ft[10]-1),Ot=Ft[14]/(Ft[10]+1),J=(Ft[9]+1)/Ft[5],it=(Ft[9]-1)/Ft[5],Q=(Ft[8]-1)/Ft[0],vt=(Nt[8]+1)/Nt[0],ft=se*Q,kt=se*vt,P=Pt/(-Q+vt),zt=P*-Q;if(gt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(zt),$.translateZ(P),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const wt=se+P,Bt=Ot+P,st=ft-zt,ae=kt+(Pt-zt),T=J*Ot/Bt*wt,x=it*Ot/Bt*wt;$.projectionMatrix.makePerspective(st,ae,T,x,wt,Bt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xt($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let gt=$.near,ot=$.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),O.near=I.near=A.near=gt,O.far=I.far=A.far=ot,(W!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,X=O.far),O.layers.mask=$.layers.mask|6,A.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const Pt=$.parent,Ft=O.cameras;xt(O,Pt);for(let Nt=0;Nt<Ft.length;Nt++)xt(Ft[Nt],Pt);Ft.length===2?dt(O,A,I):O.projectionMatrix.copy(A.projectionMatrix),Rt($,O,Pt)};function Rt($,gt,ot){ot===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return p[$]};let Yt=null;function ie($,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Pt=!1;ot.length!==O.cameras.length&&(O.cameras.length=0,Pt=!0);for(let Ot=0;Ot<ot.length;Ot++){const J=ot[Ot];let it=null;if(f!==null)it=f.getViewport(J);else{const vt=d.getViewSubImage(h,J);it=vt.viewport,Ot===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let Q=w[Ot];Q===void 0&&(Q=new on,Q.layers.enable(Ot),Q.viewport=new Me,w[Ot]=Q),Q.matrix.fromArray(J.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(J.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(it.x,it.y,it.width,it.height),Ot===0&&(O.matrix.copy(Q.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pt===!0&&O.cameras.push(Q)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Ot=d.getDepthInformation(ot[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(Ft&&Ft.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Ot=0;Ot<ot.length;Ot++){const J=ot[Ot].camera;if(J){let it=p[J];it||(it=new Xf,p[J]=it);const Q=d.getCameraImage(J);it.sourceTexture=Q}}}}for(let ot=0;ot<R.length;ot++){const Pt=b[ot],Ft=R[ot];Pt!==null&&Ft!==void 0&&Ft.update(Pt,gt,c||o)}Yt&&Yt($,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Ht=new sp;Ht.setAnimationLoop(ie),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}}const zT=new de,hp=new Vt;hp.set(-1,0,0,0,1,0,0,0,1);function GT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ep(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(zT.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const y=M.program;i.uniformBlockBinding(_,y)}function c(_,M){let y=s[_.id];y===void 0&&(g(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(_,R);const b=t.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function u(_){const M=d();_.__bindingPointIndex=M;const y=n.createBuffer(),R=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const M=s[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,C=y.length;b<C;b++){const v=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,I=v.length;A<I;A++){const w=v[A];if(f(w,b,A,R)===!0){const O=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let N=0;N<W.length;N++){const G=W[N],U=S(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,O+X,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):ArrayBuffer.isView(G)?w.__data.set(new G.constructor(G.buffer,G.byteOffset,w.__data.length)):(G.toArray(w.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,M,y,R){const b=_.value,C=M+"_"+y;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:ArrayBuffer.isView(b)?R[C]=b.slice():R[C]=b.clone(),!0;{const v=R[C];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return R[C]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(v.equals(b)===!1)return v.copy(b),!0}}return!1}function g(_){const M=_.uniforms;let y=0;const R=16;for(let C=0,v=M.length;C<v;C++){const A=Array.isArray(M[C])?M[C]:[M[C]];for(let I=0,w=A.length;I<w;I++){const O=A[I],W=Array.isArray(O.value)?O.value:[O.value];for(let X=0,N=W.length;X<N;X++){const G=W[X],U=S(G),j=y%R,nt=j%U.boundary,dt=j+nt;y+=nt,dt!==0&&R-dt<U.storage&&(y+=R-dt),O.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=U.storage}}}const b=y%R;return b>0&&(y+=R-b),_.__size=y,_.__cache={},this}function S(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const WT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function XT(){return vn===null&&(vn=new Vf(WT,16,16,yi,kn),vn.name="DFG_LUT",vn.minFilter=ke,vn.magFilter=ke,vn.wrapS=Un,vn.wrapT=Un,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class YT{constructor(t={}){const{canvas:e=Cx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Je}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=f,m=new Set([Sl,vl,xl]),p=new Set([Je,An,Zs,$s,ml,gl]),_=new Uint32Array(4),M=new Int32Array(4),y=new L;let R=null,b=null;const C=[],v=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let w=!1,O=null;this._outputColorSpace=rn;let W=0,X=0,N=null,G=-1,U=null;const j=new Me,nt=new Me;let dt=null;const xt=new ne(0);let Rt=0,Yt=e.width,ie=e.height,Ht=1,$=null,gt=null;const ot=new Me(0,0,Yt,ie),Pt=new Me(0,0,Yt,ie);let Ft=!1;const Nt=new Al;let se=!1,Ot=!1;const J=new de,it=new L,Q=new Me,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function kt(){return N===null?Ht:1}let P=i;function zt(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),P===null){const F="webgl2";if(P=zt(F,E),P===null)throw zt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw te("WebGLRenderer: "+E.message),E}let wt,Bt,st,ae,T,x,B,K,tt,rt,lt,Y,Z,Mt,bt,ut,at,Gt,qt,oe,D,ct,q;function Et(){wt=new Xy(P),wt.init(),D=new FT(P,wt),Bt=new Oy(P,wt,t,D),st=new NT(P,wt),Bt.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),ae=new Ky(P),T=new ST,x=new UT(P,wt,st,T,Bt,D,ae),B=new Wy(I),K=new jv(P),ct=new Uy(P,K),tt=new Yy(P,K,ae,ct),rt=new $y(P,tt,K,ct,ae),Gt=new Zy(P,Bt,x),bt=new ky(T),lt=new vT(I,B,wt,Bt,ct,bt),Y=new GT(I,T),Z=new yT,Mt=new wT(wt),at=new Ny(I,B,st,rt,g,l),ut=new DT(I,rt,Bt),q=new VT(P,ae,Bt,st),qt=new Fy(P,wt,ae),oe=new qy(P,wt,ae),ae.programs=lt.programs,I.capabilities=Bt,I.extensions=wt,I.properties=T,I.renderLists=Z,I.shadowMap=ut,I.state=st,I.info=ae}Et(),S!==Je&&(A=new jy(S,e.width,e.height,s,r));const ht=new HT(I,P);this.xr=ht,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(E){E!==void 0&&(Ht=E,this.setSize(Yt,ie,!1))},this.getSize=function(E){return E.set(Yt,ie)},this.setSize=function(E,F,V=!0){if(ht.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=E,ie=F,e.width=Math.floor(E*Ht),e.height=Math.floor(F*Ht),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Yt*Ht,ie*Ht).floor()},this.setDrawingBufferSize=function(E,F,V){Yt=E,ie=F,Ht=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(S===Je){te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ut("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ot)},this.setViewport=function(E,F,V,H){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,F,V,H),st.viewport(j.copy(ot).multiplyScalar(Ht).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,F,V,H){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,F,V,H),st.scissor(nt.copy(Pt).multiplyScalar(Ht).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){st.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,V=!0){let H=0;if(E){let z=!1;if(N!==null){const St=N.texture.format;z=m.has(St)}if(z){const St=N.texture.type,At=p.has(St),_t=at.getClearColor(),Ct=at.getClearAlpha(),Lt=_t.r,Xt=_t.g,Zt=_t.b;At?(_[0]=Lt,_[1]=Xt,_[2]=Zt,_[3]=Ct,P.clearBufferuiv(P.COLOR,0,_)):(M[0]=Lt,M[1]=Xt,M[2]=Zt,M[3]=Ct,P.clearBufferiv(P.COLOR,0,M))}else H|=P.COLOR_BUFFER_BIT}F&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),at.dispose(),Z.dispose(),Mt.dispose(),T.dispose(),B.dispose(),rt.dispose(),ct.dispose(),q.dispose(),lt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",$l),ht.removeEventListener("sessionend",Jl),ri.stop()};function et(E){E.preventDefault(),Iu("WebGLRenderer: Context Lost."),w=!0}function It(){Iu("WebGLRenderer: Context Restored."),w=!1;const E=ae.autoReset,F=ut.enabled,V=ut.autoUpdate,H=ut.needsUpdate,z=ut.type;Et(),ae.autoReset=E,ut.enabled=F,ut.autoUpdate=V,ut.needsUpdate=H,ut.type=z}function Wt(E){te("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ye(E){const F=E.target;F.removeEventListener("dispose",ye),ue(F)}function ue(E){Cn(E),T.remove(E)}function Cn(E){const F=T.get(E).programs;F!==void 0&&(F.forEach(function(V){lt.releaseProgram(V)}),E.isShaderMaterial&&lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,H,z,St){F===null&&(F=vt);const At=z.isMesh&&z.matrixWorld.determinant()<0,_t=Yp(E,F,V,H,z);st.setMaterial(H,At);let Ct=V.index,Lt=1;if(H.wireframe===!0){if(Ct=tt.getWireframeAttribute(V),Ct===void 0)return;Lt=2}const Xt=V.drawRange,Zt=V.attributes.position;let Dt=Xt.start*Lt,he=(Xt.start+Xt.count)*Lt;St!==null&&(Dt=Math.max(Dt,St.start*Lt),he=Math.min(he,(St.start+St.count)*Lt)),Ct!==null?(Dt=Math.max(Dt,0),he=Math.min(he,Ct.count)):Zt!=null&&(Dt=Math.max(Dt,0),he=Math.min(he,Zt.count));const Ee=he-Dt;if(Ee<0||Ee===1/0)return;ct.setup(z,H,_t,V,Ct);let Se,fe=qt;if(Ct!==null&&(Se=K.get(Ct),fe=oe,fe.setIndex(Se)),z.isMesh)H.wireframe===!0?(st.setLineWidth(H.wireframeLinewidth*kt()),fe.setMode(P.LINES)):fe.setMode(P.TRIANGLES);else if(z.isLine){let Ue=H.linewidth;Ue===void 0&&(Ue=1),st.setLineWidth(Ue*kt()),z.isLineSegments?fe.setMode(P.LINES):z.isLineLoop?fe.setMode(P.LINE_LOOP):fe.setMode(P.LINE_STRIP)}else z.isPoints?fe.setMode(P.POINTS):z.isSprite&&fe.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,Tt=z._multiDrawCounts,qe=z._multiDrawCount,re=Ct?K.get(Ct).bytesPerElement:1,nn=T.get(H).currentProgram.getUniforms();for(let _n=0;_n<qe;_n++)nn.setValue(P,"_gl_DrawID",_n),fe.render(Ue[_n]/re,Tt[_n])}else if(z.isInstancedMesh)fe.renderInstances(Dt,Ee,z.count);else if(V.isInstancedBufferGeometry){const Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tt=Math.min(V.instanceCount,Ue);fe.renderInstances(Dt,Ee,Tt)}else fe.render(Dt,Ee)};function gn(E,F,V){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=Ye,E.needsUpdate=!0,lr(E,F,V),E.side=ei,E.needsUpdate=!0,lr(E,F,V),E.side=Mn):lr(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),b=Mt.get(V),b.init(F),v.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const H=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const St=z.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){const _t=St[At];gn(_t,V,z),H.add(_t)}else gn(St,V,z),H.add(St)}),b=v.pop(),H},this.compileAsync=function(E,F,V=null){const H=this.compile(E,F,V);return new Promise(z=>{function St(){if(H.forEach(function(At){T.get(At).currentProgram.isReady()&&H.delete(At)}),H.size===0){z(E);return}setTimeout(St,10)}wt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Io=null;function Wp(E){Io&&Io(E)}function $l(){ri.stop()}function Jl(){ri.start()}const ri=new sp;ri.setAnimationLoop(Wp),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){Io=E,ht.setAnimationLoop(E),E===null?ri.stop():ri.start()},ht.addEventListener("sessionstart",$l),ht.addEventListener("sessionend",Jl),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;O!==null&&O.renderStart(E,F);const V=ht.enabled===!0&&ht.isPresenting===!0,H=A!==null&&(N===null||V)&&A.begin(I,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,F,N),b=Mt.get(E,v.length),b.init(F),b.state.textureUnits=x.getTextureUnits(),v.push(b),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Nt.setFromProjectionMatrix(J,En,F.reversedDepth),Ot=this.localClippingEnabled,se=bt.init(this.clippingPlanes,Ot),R=Z.get(E,C.length),R.init(),C.push(R),ht.enabled===!0&&ht.isPresenting===!0){const At=I.xr.getDepthSensingMesh();At!==null&&Lo(At,F,-1/0,I.sortObjects)}Lo(E,F,0,I.sortObjects),R.finish(),I.sortObjects===!0&&R.sort($,gt),ft=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ft&&at.addToRenderList(R,E),this.info.render.frame++,se===!0&&bt.beginShadows();const z=b.state.shadowsArray;if(ut.render(z,E,F),se===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const At=R.opaque,_t=R.transmissive;if(b.setupLights(),F.isArrayCamera){const Ct=F.cameras;if(_t.length>0)for(let Lt=0,Xt=Ct.length;Lt<Xt;Lt++){const Zt=Ct[Lt];Ql(At,_t,E,Zt)}ft&&at.render(E);for(let Lt=0,Xt=Ct.length;Lt<Xt;Lt++){const Zt=Ct[Lt];jl(R,E,Zt,Zt.viewport)}}else _t.length>0&&Ql(At,_t,E,F),ft&&at.render(E),jl(R,E,F)}N!==null&&X===0&&(x.updateMultisampleRenderTarget(N),x.updateRenderTargetMipmap(N)),H&&A.end(I),E.isScene===!0&&E.onAfterRender(I,E,F),ct.resetDefaultState(),G=-1,U=null,v.pop(),v.length>0?(b=v[v.length-1],x.setTextureUnits(b.state.textureUnits),se===!0&&bt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,O!==null&&O.renderEnd()};function Lo(E,F,V,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Nt.intersectsSprite(E)){H&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const At=rt.update(E),_t=E.material;_t.visible&&R.push(E,At,_t,V,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Nt.intersectsObject(E))){const At=rt.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Q.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Q.copy(At.boundingSphere.center)),Q.applyMatrix4(E.matrixWorld).applyMatrix4(J)),Array.isArray(_t)){const Ct=At.groups;for(let Lt=0,Xt=Ct.length;Lt<Xt;Lt++){const Zt=Ct[Lt],Dt=_t[Zt.materialIndex];Dt&&Dt.visible&&R.push(E,At,Dt,V,Q.z,Zt)}}else _t.visible&&R.push(E,At,_t,V,Q.z,null)}}const St=E.children;for(let At=0,_t=St.length;At<_t;At++)Lo(St[At],F,V,H)}function jl(E,F,V,H){const{opaque:z,transmissive:St,transparent:At}=E;b.setupLightsView(V),se===!0&&bt.setGlobalState(I.clippingPlanes,V),H&&st.viewport(j.copy(H)),z.length>0&&cr(z,F,V),St.length>0&&cr(St,F,V),At.length>0&&cr(At,F,V),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ql(E,F,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Dt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:Dt?kn:Je,minFilter:gi,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const St=b.state.transmissionRenderTarget[H.id],At=H.viewport||j;St.setSize(At.z*I.transmissionResolutionScale,At.w*I.transmissionResolutionScale);const _t=I.getRenderTarget(),Ct=I.getActiveCubeFace(),Lt=I.getActiveMipmapLevel();I.setRenderTarget(St),I.getClearColor(xt),Rt=I.getClearAlpha(),Rt<1&&I.setClearColor(16777215,.5),I.clear(),ft&&at.render(V);const Xt=I.toneMapping;I.toneMapping=Tn;const Zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),se===!0&&bt.setGlobalState(I.clippingPlanes,H),cr(E,V,H),x.updateMultisampleRenderTarget(St),x.updateRenderTargetMipmap(St),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let he=0,Ee=F.length;he<Ee;he++){const Se=F[he],{object:fe,geometry:Ue,material:Tt,group:qe}=Se;if(Tt.side===Mn&&fe.layers.test(H.layers)){const re=Tt.side;Tt.side=Ye,Tt.needsUpdate=!0,tu(fe,V,H,Ue,Tt,qe),Tt.side=re,Tt.needsUpdate=!0,Dt=!0}}Dt===!0&&(x.updateMultisampleRenderTarget(St),x.updateRenderTargetMipmap(St))}I.setRenderTarget(_t,Ct,Lt),I.setClearColor(xt,Rt),Zt!==void 0&&(H.viewport=Zt),I.toneMapping=Xt}function cr(E,F,V){const H=F.isScene===!0?F.overrideMaterial:null;for(let z=0,St=E.length;z<St;z++){const At=E[z],{object:_t,geometry:Ct,group:Lt}=At;let Xt=At.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),_t.layers.test(V.layers)&&tu(_t,F,V,Ct,Xt,Lt)}}function tu(E,F,V,H,z,St){E.onBeforeRender(I,F,V,H,z,St),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(I,F,V,H,E,St),z.transparent===!0&&z.side===Mn&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,I.renderBufferDirect(V,F,H,z,E,St),z.side=ei,z.needsUpdate=!0,I.renderBufferDirect(V,F,H,z,E,St),z.side=Mn):I.renderBufferDirect(V,F,H,z,E,St),E.onAfterRender(I,F,V,H,z,St)}function lr(E,F,V){F.isScene!==!0&&(F=vt);const H=T.get(E),z=b.state.lights,St=b.state.shadowsArray,At=z.state.version,_t=lt.getParameters(E,z.state,St,F,V,b.state.lightProbeGridArray),Ct=lt.getProgramCacheKey(_t);let Lt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Xt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=B.get(E.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",ye),Lt=new Map,H.programs=Lt);let Zt=Lt.get(Ct);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===At)return nu(E,_t),Zt}else _t.uniforms=lt.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,V,_t),E.onBeforeCompile(_t,I),Zt=lt.acquireProgram(_t,Ct),Lt.set(Ct,Zt),H.uniforms=_t.uniforms;const Dt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=bt.uniform),nu(E,_t),H.needsLights=Kp(E),H.lightsStateVersion=At,H.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=Zt,H.uniformsList=null,Zt}function eu(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Xr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function nu(E,F){const V=T.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Xp(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let V=0,H=E.length;V<H;V++){const z=E[V];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Yp(E,F,V,H,z){F.isScene!==!0&&(F=vt),x.resetTextureUnits();const St=F.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,_t=N===null?I.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ee.workingColorSpace,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Lt=B.get(H.envMap||At,Ct),Xt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color;let Se=Tn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Se=I.toneMapping);const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ue=fe!==void 0?fe.length:0,Tt=T.get(H),qe=b.state.lights;if(se===!0&&(Ot===!0||E!==U)){const ge=E===U&&H.id===G;bt.setState(H,E,ge)}let re=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==qe.state.version||Tt.outputColorSpace!==_t||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==Lt||H.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==bt.numPlanes||Tt.numIntersection!==bt.numIntersection)||Tt.vertexAlphas!==Xt||Tt.vertexTangents!==Zt||Tt.morphTargets!==Dt||Tt.morphNormals!==he||Tt.morphColors!==Ee||Tt.toneMapping!==Se||Tt.morphTargetsCount!==Ue||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Tt.__version=H.version);let nn=Tt.currentProgram;re===!0&&(nn=lr(H,F,z),O&&H.isNodeMaterial&&O.onUpdateProgram(H,nn,Tt));let _n=!1,Gn=!1,Ai=!1;const pe=nn.getUniforms(),Te=Tt.uniforms;if(st.useProgram(nn.program)&&(_n=!0,Gn=!0,Ai=!0),H.id!==G&&(G=H.id,Gn=!0),Tt.needsLights){const ge=Xp(b.state.lightProbeGridArray,z);Tt.lightProbeGrid!==ge&&(Tt.lightProbeGrid=ge,Gn=!0)}if(_n||U!==E){st.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pe.setValue(P,"projectionMatrix",E.projectionMatrix),pe.setValue(P,"viewMatrix",E.matrixWorldInverse);const Wn=pe.map.cameraPosition;Wn!==void 0&&Wn.setValue(P,it.setFromMatrixPosition(E.matrixWorld)),Bt.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,Gn=!0,Ai=!0)}if(Tt.needsLights&&(qe.state.directionalShadowMap.length>0&&pe.setValue(P,"directionalShadowMap",qe.state.directionalShadowMap,x),qe.state.spotShadowMap.length>0&&pe.setValue(P,"spotShadowMap",qe.state.spotShadowMap,x),qe.state.pointShadowMap.length>0&&pe.setValue(P,"pointShadowMap",qe.state.pointShadowMap,x)),z.isSkinnedMesh){pe.setOptional(P,z,"bindMatrix"),pe.setOptional(P,z,"bindMatrixInverse");const ge=z.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),pe.setValue(P,"boneTexture",ge.boneTexture,x))}z.isBatchedMesh&&(pe.setOptional(P,z,"batchingTexture"),pe.setValue(P,"batchingTexture",z._matricesTexture,x),pe.setOptional(P,z,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",z._indirectTexture,x),pe.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",z._colorsTexture,x));const Vn=V.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Gt.update(z,V,nn),(Gn||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,pe.setValue(P,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Te.envMapIntensity.value=F.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=XT()),Gn){if(pe.setValue(P,"toneMappingExposure",I.toneMappingExposure),Tt.needsLights&&qp(Te,Ai),St&&H.fog===!0&&Y.refreshFogUniforms(Te,St),Y.refreshMaterialUniforms(Te,H,Ht,ie,b.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.lightProbeGrid){const ge=Tt.lightProbeGrid;Te.probesSH.value=ge.texture,Te.probesMin.value.copy(ge.boundingBox.min),Te.probesMax.value.copy(ge.boundingBox.max),Te.probesResolution.value.copy(ge.resolution)}Xr.upload(P,eu(Tt),Te,x)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xr.upload(P,eu(Tt),Te,x),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(P,"center",z.center),pe.setValue(P,"modelViewMatrix",z.modelViewMatrix),pe.setValue(P,"normalMatrix",z.normalMatrix),pe.setValue(P,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){const ge=H.uniformsGroups;for(let Wn=0,Ri=ge.length;Wn<Ri;Wn++){const iu=ge[Wn];q.update(iu,nn),q.bind(iu,nn)}}return nn}function qp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Kp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,F,V){const H=T.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=F,T.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const V=T.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Zp=P.createFramebuffer();this.setRenderTarget=function(E,F=0,V=0){N=E,W=F,X=V;let H=null,z=!1,St=!1;if(E){const _t=T.get(E);if(_t.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(P.FRAMEBUFFER,_t.__webglFramebuffer),j.copy(E.viewport),nt.copy(E.scissor),dt=E.scissorTest,st.viewport(j),st.scissor(nt),st.setScissorTest(dt),G=-1;return}else if(_t.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(_t.__hasExternalTextures)x.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xt=E.depthTexture;if(_t.__boundDepthTexture!==Xt){if(Xt!==null&&T.has(Xt)&&(E.width!==Xt.image.width||E.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);const Lt=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[F])?H=Lt[F][V]:H=Lt[F],z=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?H=T.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?H=Lt[V]:H=Lt,j.copy(E.viewport),nt.copy(E.scissor),dt=E.scissorTest}else j.copy(ot).multiplyScalar(Ht).floor(),nt.copy(Pt).multiplyScalar(Ht).floor(),dt=Ft;if(V!==0&&(H=Zp),st.bindFramebuffer(P.FRAMEBUFFER,H)&&st.drawBuffers(E,H),st.viewport(j),st.scissor(nt),st.setScissorTest(dt),z){const _t=T.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,V)}else if(St){const _t=F;for(let Ct=0;Ct<E.textures.length;Ct++){const Lt=T.get(E.textures[Ct]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,V,_t)}}else if(E!==null&&V!==0){const _t=T.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_t.__webglTexture,V)}G=-1},this.readRenderTargetPixels=function(E,F,V,H,z,St,At,_t=0){if(!(E&&E.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){st.bindFramebuffer(P.FRAMEBUFFER,Ct);try{const Lt=E.textures[_t],Xt=Lt.format,Zt=Lt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Xt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Zt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&V>=0&&V<=E.height-z&&P.readPixels(F,V,H,z,D.convert(Xt),D.convert(Zt),St)}finally{const Lt=N!==null?T.get(N).__webglFramebuffer:null;st.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,H,z,St,At,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(F>=0&&F<=E.width-H&&V>=0&&V<=E.height-z){st.bindFramebuffer(P.FRAMEBUFFER,Ct);const Lt=E.textures[_t],Xt=Lt.format,Zt=Lt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.bufferData(P.PIXEL_PACK_BUFFER,St.byteLength,P.STREAM_READ),P.readPixels(F,V,H,z,D.convert(Xt),D.convert(Zt),0);const he=N!==null?T.get(N).__webglFramebuffer:null;st.bindFramebuffer(P.FRAMEBUFFER,he);const Ee=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Px(P,Ee,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,St),P.deleteBuffer(Dt),P.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,V=0){const H=Math.pow(2,-V),z=Math.floor(E.image.width*H),St=Math.floor(E.image.height*H),At=F!==null?F.x:0,_t=F!==null?F.y:0;x.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,At,_t,z,St),st.unbindTexture()};const $p=P.createFramebuffer(),Jp=P.createFramebuffer();this.copyTextureToTexture=function(E,F,V=null,H=null,z=0,St=0){let At,_t,Ct,Lt,Xt,Zt,Dt,he,Ee;const Se=E.isCompressedTexture?E.mipmaps[St]:E.image;if(V!==null)At=V.max.x-V.min.x,_t=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Xt=V.min.y,Zt=V.isBox3?V.min.z:0;else{const Te=Math.pow(2,-z);At=Math.floor(Se.width*Te),_t=Math.floor(Se.height*Te),E.isDataArrayTexture?Ct=Se.depth:E.isData3DTexture?Ct=Math.floor(Se.depth*Te):Ct=1,Lt=0,Xt=0,Zt=0}H!==null?(Dt=H.x,he=H.y,Ee=H.z):(Dt=0,he=0,Ee=0);const fe=D.convert(F.format),Ue=D.convert(F.type);let Tt;F.isData3DTexture?(x.setTexture3D(F,0),Tt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),Tt=P.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),Tt=P.TEXTURE_2D),st.activeTexture(P.TEXTURE0),st.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),st.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),st.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=st.getParameter(P.UNPACK_ROW_LENGTH),re=st.getParameter(P.UNPACK_IMAGE_HEIGHT),nn=st.getParameter(P.UNPACK_SKIP_PIXELS),_n=st.getParameter(P.UNPACK_SKIP_ROWS),Gn=st.getParameter(P.UNPACK_SKIP_IMAGES);st.pixelStorei(P.UNPACK_ROW_LENGTH,Se.width),st.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Se.height),st.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),st.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),st.pixelStorei(P.UNPACK_SKIP_IMAGES,Zt);const Ai=E.isDataArrayTexture||E.isData3DTexture,pe=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Te=T.get(E),Vn=T.get(F),ge=T.get(Te.__renderTarget),Wn=T.get(Vn.__renderTarget);st.bindFramebuffer(P.READ_FRAMEBUFFER,ge.__webglFramebuffer),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ri=0;Ri<Ct;Ri++)Ai&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(E).__webglTexture,z,Zt+Ri),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(F).__webglTexture,St,Ee+Ri)),P.blitFramebuffer(Lt,Xt,At,_t,Dt,he,At,_t,P.DEPTH_BUFFER_BIT,P.NEAREST);st.bindFramebuffer(P.READ_FRAMEBUFFER,null),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||T.has(E)){const Te=T.get(E),Vn=T.get(F);st.bindFramebuffer(P.READ_FRAMEBUFFER,$p),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,Jp);for(let ge=0;ge<Ct;ge++)Ai?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.__webglTexture,z,Zt+ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Te.__webglTexture,z),pe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vn.__webglTexture,St,Ee+ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Vn.__webglTexture,St),z!==0?P.blitFramebuffer(Lt,Xt,At,_t,Dt,he,At,_t,P.COLOR_BUFFER_BIT,P.NEAREST):pe?P.copyTexSubImage3D(Tt,St,Dt,he,Ee+ge,Lt,Xt,At,_t):P.copyTexSubImage2D(Tt,St,Dt,he,Lt,Xt,At,_t);st.bindFramebuffer(P.READ_FRAMEBUFFER,null),st.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Tt,St,Dt,he,Ee,At,_t,Ct,fe,Ue,Se.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,St,Dt,he,Ee,At,_t,Ct,fe,Se.data):P.texSubImage3D(Tt,St,Dt,he,Ee,At,_t,Ct,fe,Ue,Se):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,St,Dt,he,At,_t,fe,Ue,Se.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,St,Dt,he,Se.width,Se.height,fe,Se.data):P.texSubImage2D(P.TEXTURE_2D,St,Dt,he,At,_t,fe,Ue,Se);st.pixelStorei(P.UNPACK_ROW_LENGTH,qe),st.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),st.pixelStorei(P.UNPACK_SKIP_PIXELS,nn),st.pixelStorei(P.UNPACK_SKIP_ROWS,_n),st.pixelStorei(P.UNPACK_SKIP_IMAGES,Gn),St===0&&F.generateMipmaps&&P.generateMipmap(Tt),st.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),st.unbindTexture()},this.resetState=function(){W=0,X=0,N=null,st.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Ul=765,Fl=503,qT=4,Zi=512,xi=334,dp=253,fp=142,pp=23,mp=fp+pp,gp=xi+mp,Ro=249,or=(dp-Ro)/2,_p=164,xp=29,KT=48,ZT=172,$T=156,JT=8,Ol=or+xp,Yi=146,jT=24,QT=8,tb=Ol+jT,eb=Ol+2,nb=2,ib=32,sb=Ro,rb=or,ob=Ro,ab=or,vp=37,cb=2,lb=7,Sp=gp-_p,Mp=Sp-vp*cb,yp=26,Ep=190,ub=Mp,Tp=yp*2+Ep,hb=or+Math.round((Ro-Tp)/2),Fh=Math.PI/2;function db(n,t,e,i){const s=l=>{const c=n.getBoundingClientRect();return{x:(l.clientX-c.left)/c.width*Zi,y:(l.clientY-c.top)/c.height*xi}},r=l=>{const{x:c,y:u}=s(l),d=i(c,u);t(d.x,d.y)},o=l=>{if(l.button!==0)return;l.preventDefault();const{x:c,y:u}=s(l),d=i(c,u);e(d.x,d.y)},a=()=>{t(NaN,NaN)};return n.addEventListener("pointermove",r),n.addEventListener("pointerdown",o),n.addEventListener("pointerleave",a),()=>{n.removeEventListener("pointermove",r),n.removeEventListener("pointerdown",o),n.removeEventListener("pointerleave",a)}}const Ie={deepWater:2648208,shallow:3836072,reefExposed:4884640,reefSubmerged:3174544,sand:13217914,grass:5081660,coralSolid:6965848,tideZone:3442856},ya=.12,fb=.06,pb=.003,mb=.35,Oh=16033736,gb=15235240,_b=8964336;function Ea(n,t=.9){return new Ge({color:n,roughness:t,flatShading:!0})}function xb(){const n=new Qt,t=new yt(new Hn(.12,.16,.1,8),Ea(Oh,.7));t.position.y=.05;const e=new yt(new Hn(.08,.12,.06,8),Ea(Oh,.7));e.position.y=.12,n.add(t,e);const i=[{x:-.08,z:0},{x:-.04,z:.04},{x:0,z:0},{x:.04,z:-.04},{x:.08,z:0}];for(const s of i){const r=new yt(new $t(.03,.16,.03),Ea(gb,.85));r.position.set(s.x,-.09,s.z),n.add(r)}return n}class vb{constructor(){k(this,"root",new Qt);k(this,"bubble");k(this,"currentX",0);k(this,"currentY",0);k(this,"currentZ",0);k(this,"initialized",!1);const t=xb();this.bubble=new yt(new Dl(mb,12,10),new Ge({color:_b,transparent:!0,opacity:.28,roughness:.15,metalness:.05,flatShading:!0})),this.root.add(this.bubble,t),this.root.visible=!1}sync(t,e,i,s,r){if(this.root.visible=t,!t)return;this.initialized||(this.currentX=e,this.currentY=i,this.currentZ=s,this.initialized=!0),this.currentX+=(e-this.currentX)*ya,this.currentY+=(i-this.currentY)*ya,this.currentZ+=(s-this.currentZ)*ya;const o=Math.sin(r*pb)*fb;this.root.position.set(this.currentX,this.currentY+o,this.currentZ),this.root.rotation.y=r*4e-4}dispose(){this.root.traverse(t=>{t instanceof yt&&(t.geometry.dispose(),t.material.dispose())})}}const kh=.22,Ta=.85,Sb=.035,bp=.1,Mb=.24,yb=.08,Eb=.045,Tb=.55,bb=.32,Ab=.8,Rb=[{along:.25,y:.48,radius:.3},{along:-.28,y:.42,radius:.2}],rs=.68,wb=[-1,-.5,0,.5,1],Bh=.48,Cb=.34,Pb=.22,Ib=.16,Hh=.18,Lb=.52,ba=.82,Gs=.55,Ap=1,kl=.12,Db=.38,Nb=Math.atan2(Gs+kl,Ap);function ar(n){return Math.min(1,Math.max(0,n))}function vi(n){const t=ar(n);return .5-.5*Math.cos(Math.PI*t)}function Wc(n,t){return Math.hypot(n,t)<1e-6?null:Math.atan2(t,n)}function zh(n,t,e){const i=Math.PI*2;let s=(t-n)%i;return s>Math.PI&&(s-=i),s<-Math.PI&&(s+=i),n+s*ar(e)}function Rp(n){return Wc(n.end.x-n.start.x,n.end.y-n.start.y)??Wc(n.start.x-n.entry.x,n.start.y-n.entry.y)}function Ub(n,t){const e=Rp(n);if(e===null)return null;const i=Wc(n.start.x-n.entry.x,n.start.y-n.entry.y)??e;if(t<=Le)return zh(i,e,vi(t/Le));if(t>=Ta){const s=je(an(e))*Math.PI/180;return zh(e,s,(t-Ta)/(1-Ta))}return e}function nr(n,t){const e=n.end.x-n.start.x,i=n.end.y-n.start.y,s=Math.hypot(e,i);if(s<1e-6)return 0;const r=e/s,o=i/s,a=_o(n,t);return(a.x-n.zoneCenter.x)*r+(a.y-n.zoneCenter.y)*o}function ir(n,t=bp){return Math.max(0,n-Os+Sb+t)}function Xc(n,t){let e=0;for(const i of wb)e=Math.max(e,n(t+i*rs));return e}function Fb(n,t){const e=n.zoneRadius,i=e*(Mb+yb*.5),s=Math.sin(t*Math.PI),r=vi(t/kh)*vi((1-t)/kh);return{liftY:ir(i,bp)+s*e*Eb,pitch:0,roll:n.rideSide*r*.1,yawOffset:n.rideSide*r*(Math.PI/2),offsetX:0,offsetY:0,riderLean:-r*.1,riderCrouch:r*.18}}function Ob(n,t){const e=n*Tb,i=n*bb,s=e*Ab;let r=0;const o=t/e;Math.abs(o)<=1&&(r=Math.max(r,i+s*Math.sqrt(1-o*o)));for(const a of Rb){const l=t-n*a.along,c=n*a.radius;Math.abs(l)<c&&(r=Math.max(r,n*a.y+Math.sqrt(c*c-l*l)))}return r}function kb(n,t){const e=n.zoneRadius,i=nr(n,t),s=e*.08,r=d=>Ob(e,d),o=(r(i+s)-r(i-s))/(2*s),a=Math.atan(o),l=Math.max(-Bh,Math.min(Bh,a)),c=Xc(r,i);let u=ir(c)+Math.abs(Math.sin(l))*rs*.35;if(t<Le){const d=nr(n,Le),h=ir(Xc(r,d))+Math.abs(Math.sin(l))*rs*.35;u=vi(t/Le)*h}return{liftY:u,pitch:l,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:l*.18,riderCrouch:Math.abs(l)*.1}}function Bb(n,t){const e=Math.sin(t*Math.PI);return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:-e*.32,riderCrouch:e*.4}}function Hb(n,t){const e=n.zoneRadius,i=Math.sin(t*Math.PI),s=Rp(n)??n.rotationRadians,r={x:-Math.sin(s),y:Math.cos(s)},o=n.rideSide,a=e*Cb*.5+Pb+Ib,l=t<ba?a:a*(1-(t-ba)/(1-ba)),c=_o(n,t),u=(c.x-n.zoneCenter.x)*r.x+(c.y-n.zoneCenter.y)*r.y,d=o*l-u;return{liftY:e*Hh+i*e*(Lb-Hh),pitch:0,roll:o*(.42+i*.1),yawOffset:0,offsetX:r.x*d,offsetY:r.y*d,riderLean:-i*.14,riderCrouch:i*.16}}function zb(n,t){const e=n*Ap,i=n*Gs,s=n*kl,r=i+s;let o=0;return t>=-e&&t<=0?o=-s+(t+e)/e*r:t>0&&t<=e&&(o=i-t/e*r),Math.max(0,o)}function Gb(n){const t=nr(n,Le),e=nr(n,1);if(Math.abs(e-t)<1e-6)return .5*(Le+1);const i=(0-t)/(e-t);return i<=0||i>=1?Le+.5*(1-Le):Le+i*(1-Le)}function Vb(n,t,e){const i=Xc(s=>zb(n,s),t);return ir(i)+Math.abs(Math.sin(e))*rs*.25}function Wb(n,t){const e=n.zoneRadius,i=Gb(n),s=nr(n,t),r=Nb,o=e*Gs/(Gs+kl);let a,l,c=0;if(t<i){const u=ar((s+o+rs)/rs);l=r*vi(u),a=Vb(e,s,l)}else{const u=(t-i)/(1-i);a=ir(e*Gs)*(1-vi(u))+e*Db*Math.sin(Math.PI*u);const h=vi(Math.min(1,u/.94));l=r-h*(Math.PI*2+r),c=Math.sin(Math.PI*u)*.48}return{liftY:a,pitch:l,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0,riderCrouch:c}}function Xb(n){const t=ar(n)*Math.PI*2;return{liftY:.06+Math.sin(n*Math.PI)*.1,pitch:Math.sin(t)*.06,roll:Math.sin(t)*.35,yawOffset:t*.12,travelYawRadians:null,offsetX:0,offsetY:0,riderLean:Math.cos(t)*.12,riderCrouch:.2}}function Yb(n){const t=ar(n.progress);return{...(()=>{switch(n.type){case"rail":return Fb(n,t);case"brain_coral":return kb(n,t);case"tunnel":return Bb(n,t);case"wall_ride":return Hb(n,t);case"jump":return Wb(n,t);default:return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0,riderCrouch:0}}})(),travelYawRadians:Ub(n,t)}}function Be(n,t,e=0){return{x:n,y:e,z:t}}function qb(n){return{x:n.x,y:n.z}}function Yc(n){return-je(n)*Math.PI/180}function Bl(n){return-n}const Aa=13145182,Kb=3829413,Zb=4860946,wo=5917238,Co=13213798,Hl=16041282,ao=9067050,wp=13213776,Cp=7027242,Pp=13936690,Gh=16746666,Or=1.2,Ip=11027500,Lp=6044190,$b=16033721,Jb=16777215,jb=1.2,Qb=1.25,Vh=.4,Wh=.35,Dp=.32,Np=.28,Xh=[{shirt:2984558,hair:2758672,boardWood:ao,boardStripe:15258698},{shirt:9055566,hair:1839628,boardWood:ao,boardStripe:6734568},{shirt:6971317,hair:3811864,boardWood:13808780,boardStripe:16033721},{shirt:12755516,hair:2365968,boardWood:Co,boardStripe:9429114},{shirt:14700600,hair:1314828,boardWood:Cp,boardStripe:Pp}],tA=.05,eA=.35;function Yh(n,t,e,i,s,r=null){const o=i?Yb(i):r!==null?Xb(r):null,a=Be(n+((o==null?void 0:o.offsetX)??0),t+((o==null?void 0:o.offsetY)??0)),l=rl(n,t,s),c=o!==null&&o.travelYawRadians!==null?Bl(o.travelYawRadians):Yc(e);return{worldX:a.x,worldZ:a.z,boardY:l+((o==null?void 0:o.liftY)??0),rotationY:c+((o==null?void 0:o.yawOffset)??0),pitch:(o==null?void 0:o.pitch)??0,roll:(o==null?void 0:o.roll)??0,riderLean:(o==null?void 0:o.riderLean)??0,riderCrouch:(o==null?void 0:o.riderCrouch)??0}}function Up(n,t,e){const i=new Qt,s=new Qt;s.rotation.order="YXZ";const r=new Qt;r.position.y=tA;const{group:o,cosmetics:a}=zl(n,t);return s.add(o,r),i.add(s),{rig:i,tilt:s,riderAnchor:r,wake:e,cosmetics:a}}function qh(n,t,e){n.rig.position.set(e.worldX,e.boardY,e.worldZ),n.rig.rotation.y=e.rotationY,n.tilt.rotation.set(e.roll,0,e.pitch),t.position.set(0,0,0),t.rotation.set(0,0,e.riderLean),t.scale.y=1-e.riderCrouch*eA}function qi(n,t=.9){return new Ge({color:n,roughness:t,flatShading:!0})}function hn(n,t,e,i,s,r,o){const a=new yt(new $t(n,t,e),qi(i));return a.position.set(s,r,o),a}function Po(n,t=1){const e=new Qt;return e.add(hn(.09,.18,.08,n.pants,0,.09,-.055),hn(.09,.18,.08,n.pants,0,.09,.055),hn(.13,.24,.22,n.shirt,0,.3,0),hn(.14,.04,.23,n.shirt,0,.4,0),hn(.08,.2,.07,n.shirt,0,.32,-.145),hn(.08,.2,.07,n.shirt,0,.32,.145),hn(.06,.05,.06,Aa,0,.195,-.145),hn(.06,.05,.06,Aa,0,.195,.145),hn(.12,.13,.12,Aa,0,.485,0)),n.hair!==null&&e.add(hn(.13,.05,.13,n.hair,-.005,.565,0),hn(.08,.06,.12,n.hair,-.04,.55,0)),e.scale.setScalar(t),e}function nA(){const n=new $f;n.moveTo(-.62,-.13),n.lineTo(-.3,-.22),n.lineTo(.22,-.2),n.lineTo(.58,-.08),n.lineTo(.68,0),n.lineTo(.58,.08),n.lineTo(.22,.2),n.lineTo(-.3,.22),n.lineTo(-.62,.13),n.closePath();const t=new Ll(n,{depth:.07,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t.translate(0,-.035,0),t}function zl(n=Co,t=Hl){const e=new Qt,i=qi(n,.8),s=new yt(nA(),i),r=qi(t),o=new yt(new $t(.95,.02,.09),r);o.position.set(0,.04,0);const a=new yt(new $t(.12,.015,.05),r);a.position.set(.52,.045,0);const l=new yt(new $t(.08,.04,.06),qi(n,.8));l.position.set(.66,.01,0);const c=new yt(new $t(.1,.05,.22),qi(n,.8));c.position.set(-.58,.01,0);const u=qi(n,.8),d=new yt(new $t(.1,.12,.03),u);d.position.set(-.48,-.08,0);const h=new Ge({color:Gh,emissive:Gh,emissiveIntensity:.85,flatShading:!0}),f=new yt(new $t(.92,.025,.02),h);f.position.set(0,.055,-.21),f.visible=!1;const g=new yt(new $t(.92,.025,.02),h);return g.position.set(0,.055,.21),g.visible=!1,e.add(s,o,a,l,c,d,f,g),{group:e,cosmetics:{deckMat:i,stripeMat:r,finMat:u,railLeft:f,railRight:g}}}function Kh(n,t){let e=Co,i=Hl;t.has("rosewood_board")?(e=Cp,i=Pp):t.has("surf_guru_board")&&(e=ao,i=wp),n.deckMat.color.setHex(e),n.finMat.color.setHex(e),n.stripeMat.color.setHex(i);const s=t.has("coral_rail_cosmetic");n.railLeft.visible=s,n.railRight.visible=s}function iA(){return Po({shirt:Kb,pants:wo,hair:Zb})}function Fp(n,t){const e=new Qt,i=new yt(new Hn(.5,.5,.02,16),new Ge({color:$b,transparent:!0,opacity:n}));i.scale.set(1.9,1,.8);const s=new yt(new Hn(.42,.42,.02,16),new Ge({color:Jb,transparent:!0,opacity:t}));return s.scale.set(1.6,1,.65),e.add(i,s),e.visible=!1,e}function Zh(n,t,e,i){const s=t?jb:1;n.scale.set(s,1,s);const r=n.children[0],o=n.children[1];if(!(r instanceof yt)||!(o instanceof yt))return;const a=r.material,l=o.material;if(!(a instanceof Ge)||!(l instanceof Ge))return;const c=t?Qb:1;a.opacity=e*c,l.opacity=i*c}function sA(n){const t=Up(n.boardWood,n.boardStripe,Fp(Dp,Np)),e=Po({shirt:n.shirt,pants:wo,hair:n.hair});return t.riderAnchor.add(e),t.rig.visible=!1,{parts:t,rider:e}}function rA(){return Po({shirt:Ip,pants:wo,hair:Lp},1.1)}function oA(){const n=new Qt,t=Po({shirt:Ip,pants:wo,hair:Lp},1.1),{group:e}=zl(ao,wp);return e.rotation.set(.15,0,-Math.PI/2.15),e.position.set(.1,.45,-.4),n.add(t,e),n}class aA{constructor(){k(this,"root",new Qt);k(this,"playerParts",Up(Co,Hl,Fp(Vh,Wh)));k(this,"dockBoardMesh",zl());k(this,"player",iA());k(this,"pet",new vb);k(this,"demoSurferPool",[]);k(this,"npcPool",[]);this.root.add(this.playerParts.rig,this.playerParts.wake,this.dockBoardMesh.group,this.player,this.pet.root)}sync(t,e,i=0){const s=t.progression.unlocked;Kh(this.playerParts.cosmetics,s),Kh(this.dockBoardMesh.cosmetics,s);const r=s.has("teeny_tai"),o=Qe(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y)),a=t.surfboard.speedState==="seated"&&o==="sand",l=a?0:je(t.surfboard.currentHeading)*Math.PI/180,c=Yh(t.surfboard.position.x,t.surfboard.position.y,t.surfboard.currentHeading,t.trickAnimation,t.tide),u=a?0:Yc(t.surfboard.currentHeading),d=c.boardY;this.playerParts.rig.visible=t.boardMounted,this.dockBoardMesh.group.visible=!t.boardMounted,this.player.visible=!0,this.syncNpcs(t,e),this.syncDemoSurfers(t);const h=je(t.surfboard.currentHeading)*Math.PI/180;if(!t.boardMounted){const m=Be(t.boardDockX,t.boardDockY),p=Be(t.surfboard.position.x,t.surfboard.position.y),_=yn(t.boardDockX,t.boardDockY,"sand"),M=Qe(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y)),y=M==="grass"||M==="sand"?yn(t.surfboard.position.x,t.surfboard.position.y,M):_;this.dockBoardMesh.group.position.set(m.x,_,m.z),this.dockBoardMesh.group.rotation.set(0,0,0),this.player.parent!==this.root&&this.root.add(this.player),this.player.position.set(p.x,y,p.z),this.player.rotation.set(0,Yc(t.surfboard.currentHeading),0),this.player.scale.y=1,this.playerParts.wake.visible=!1;const R=h+Math.PI;this.pet.sync(r,p.x+Math.cos(R)*Or,y+.5,p.z+Math.sin(R)*Or,i);return}this.player.parent!==this.playerParts.riderAnchor&&(this.playerParts.riderAnchor.add(this.player),this.player.rotation.set(0,0,0)),qh(this.playerParts,this.player,c);const f=t.surfboard.speedState==="riding"&&t.trickAnimation===null,g=t.trickSpeedBoostTicksRemaining>0;if(this.playerParts.wake.visible=f,f){const m=l+Math.PI;this.playerParts.wake.position.set(c.worldX+Math.cos(m)*.85,d+.02,c.worldZ+Math.sin(m)*.85),this.playerParts.wake.rotation.set(0,u,0),Zh(this.playerParts.wake,g,Vh,Wh)}const S=l+Math.PI;this.pet.sync(r,c.worldX+Math.cos(S)*Or,d+.25,c.worldZ+Math.sin(S)*Or,i)}syncDemoSurfers(t){for(;this.demoSurferPool.length<t.demoSurfers.length;){const e=Xh[this.demoSurferPool.length%Xh.length],i=sA(e);this.demoSurferPool.push(i),this.root.add(i.parts.rig,i.parts.wake)}for(let e=0;e<this.demoSurferPool.length;e+=1){const i=this.demoSurferPool[e],s=t.demoSurfers[e];if(!s){i.parts.rig.visible=!1,i.parts.wake.visible=!1;continue}const r=Yh(s.surfboard.position.x,s.surfboard.position.y,s.surfboard.currentHeading,s.trickAnimation,t.tide,s.tideSpinProgress),o=je(s.surfboard.currentHeading)*Math.PI/180;i.parts.rig.visible=!0,qh(i.parts,i.rider,r);const a=s.trickAnimation===null&&(s.surfboard.speedState==="riding"||s.tideSpinProgress!==null),l=s.trickSpeedBoostTicksRemaining>0;if(i.parts.wake.visible=a,a){const c=o+Math.PI;i.parts.wake.position.set(r.worldX+Math.cos(c)*.85,r.boardY+.02,r.worldZ+Math.sin(c)*.85),i.parts.wake.rotation.set(0,r.rotationY,0),Zh(i.parts.wake,l,Dp,Np)}}}syncNpcs(t,e){for(;this.npcPool.length<t.npcs.length;){const s=t.npcs[this.npcPool.length].id==="guru"?oA():rA();this.npcPool.push(s),this.root.add(s)}for(let i=0;i<this.npcPool.length;i+=1){const s=this.npcPool[i];if(i>=t.npcs.length){s.visible=!1;continue}const r=t.npcs[i];s.visible=!0;const o=Be(r.x,r.y),a=Qe(e,Math.floor(r.x),Math.floor(r.y)),l=a==="grass"||a==="sand"?yn(r.x,r.y,a):yn(r.x,r.y,"sand");s.position.set(o.x,l,o.z),s.rotation.y=Bl(Math.atan2(t.boardDockY-r.y,t.boardDockX-r.x))}}dispose(){this.pet.dispose(),this.root.traverse(t=>{t instanceof yt&&(t.geometry.dispose(),t.material.dispose())})}}function cA(n,t,e,i){return n}function qc(n){switch(n){case"deep_water":return Ie.deepWater;case"shallow":return Ie.shallow;case"reef_exposed":return Ie.reefExposed;case"reef_submerged":return Ie.reefSubmerged;case"sand":return Ie.sand;case"grass":return Ie.grass;case"coral_solid":return Ie.coralSolid;case"tide_zone":return Ie.tideZone;default:return Ie.deepWater}}const ui=new de,Ra=28,$h=.08,kr=36,lA=.22,wa=3;function Kc(n,t,e){var i,s;return e?((i=n.outerRadiusAtAngle)==null?void 0:i.call(n,t))??n.outerRadius:((s=n.innerRadiusAtAngle)==null?void 0:s.call(n,t))??n.innerRadius}function uA(n,t,e){const i=Kc(n,t,!1),s=Kc(n,t,!0);return i+(s-i)*e}function hA(n,t,e){const i=_e(e?t+.04:t-.04);return $d(i,n)}class dA{constructor(){k(this,"root",new Qt);k(this,"leading",null);k(this,"trailing",null);k(this,"washCrest",null);k(this,"capacity",0);k(this,"crestCapacity",0);const t=new Ge({color:15268095,transparent:!0,opacity:.75,roughness:.3,metalness:.05}),e=new Ge({color:9357536,transparent:!0,opacity:.45,roughness:.5,metalness:.05}),i=new Ge({color:16777215,transparent:!0,opacity:.82,roughness:.1,metalness:.04,emissive:16777215,emissiveIntensity:.14});this.capacity=Ra*4;const s=Math.max(.35,Ha*.08);this.leading=new la(new $t(1,s,.08),t,this.capacity),this.trailing=new la(new $t(1,s,.08),e,this.capacity),this.crestCapacity=kr*wa,this.washCrest=new la(new $t(1,1,1),i,this.crestCapacity);for(const r of[this.leading,this.trailing,this.washCrest])r.visible=!1,r.frustumCulled=!1;this.root.add(this.leading,this.trailing,this.washCrest)}sync(t){if(!t||!this.leading||!this.trailing||!this.washCrest){for(const a of[this.leading,this.trailing,this.washCrest])a&&(a.visible=!1);return}const e=Be(t.centerX,t.centerY),i=Math.max(.35,Ha*.08),s=[{angle:t.phaseRadians,leading:!0},{angle:_e(t.phaseRadians+t.sweepRadians),leading:!1}];let r=0,o=0;for(const a of s){const l=hA(t,a.angle,a.leading),c=a.leading?.18:.14,u=a.leading?this.leading:this.trailing;let d=a.leading?r:o;for(const h of[!1,!0]){const f=Kc(t,a.angle,h);for(let g=0;g<=Ra&&!(d>=this.capacity);g+=1){const S=a.angle+c*(g/Ra-.5),m=f+(h?$h:-$h),p=e.x+Math.cos(S)*m,_=e.z+Math.sin(S)*m,M=qd(a.leading?.04:.96),y=a.leading?.75+l*.9:.45+l*.55;y<.05?ui.makeScale(0,0,0):ui.makeScale(y,i*(.8+l*1.1),y*.65),ui.setPosition(p,M+i*.45,_),u.setMatrixAt(d,ui),d+=1}}a.leading?r=d:o=d}this.leading.count=r,this.leading.instanceMatrix.needsUpdate=!0,this.leading.visible=r>0,this.trailing.count=o,this.trailing.instanceMatrix.needsUpdate=!0,this.trailing.visible=o>0,this.syncCrestAccent(t,e)}syncCrestAccent(t,e){if(!this.washCrest)return;const i=_e(t.phaseRadians+t.sweepRadians),s=rr;let r=0;for(let o=0;o<=kr;o+=1){const a=i+lA*(o/kr-.5),l=1-Math.abs(o/kr-.5)*1.4;for(let c=0;c<wa&&!(r>=this.crestCapacity);c+=1){const u=(c+.5)/wa,d=uA(t,a,u),h=s*.12*l,f=s*.92,g=e.x+Math.cos(a)*d,S=e.z+Math.sin(a)*d,m=1.2+u*.6,p=.45+u*.2;ui.makeScale(m,h,p),ui.setPosition(g,f+h*.4,S),this.washCrest.setMatrixAt(r,ui),r+=1}}this.washCrest.count=r,this.washCrest.instanceMatrix.needsUpdate=!0,this.washCrest.visible=r>0}dispose(){for(const t of[this.leading,this.trailing,this.washCrest])t&&(t.geometry.dispose(),t.material.dispose(),t.removeFromParent());this.leading=null,this.trailing=null,this.washCrest=null}}function bs(n,t){return`${n},${t}`}function As(n,t){return`${n},${t}`}function fA(n){const t=n.indexOf(",");return{cx:Number(n.slice(0,t)),cy:Number(n.slice(t+1))}}class pA{constructor(t,e,i={}){k(this,"mesh");k(this,"positions");k(this,"positionAttr");k(this,"colorAttr");k(this,"cornerTopVerts",new Map);k(this,"tiles");this.tiles=t;const s=i.skirts??!1,r=i.skirtBottom??0,o=i.vertexColors===!0,a=new Set(t.map(m=>As(m.tx,m.ty))),l=[],c=[],u=[],d=new Map,h=(m,p,_)=>{const M=bs(m,p),y=d.get(M);if(y!==void 0)return y;const R=l.length/3;l.push(m,e(m,p),p),o&&_&&c.push(_.r,_.g,_.b),d.set(M,R);const b=this.cornerTopVerts.get(M)??[];return b.push(R),this.cornerTopVerts.set(M,b),R},f=(m,p,_,M,y)=>{const R=h(m,p,y),b=h(_,M,y),C=l.length/3;l.push(m,r,p);const v=l.length/3;l.push(_,r,M),o&&y&&c.push(y.r,y.g,y.b,y.r,y.g,y.b),u.push(R,C,b,b,C,v)};for(const m of t){const{tx:p,ty:_}=m,M=m.color??null,y=h(p,_,M),R=h(p+1,_,M),b=h(p,_+1,M),C=h(p+1,_+1,M);u.push(y,b,R,R,b,C),s&&(a.has(As(p,_-1))||f(p,_,p+1,_,M),a.has(As(p+1,_))||f(p+1,_,p+1,_+1,M),a.has(As(p,_+1))||f(p+1,_+1,p,_+1,M),a.has(As(p-1,_))||f(p,_+1,p,_,M))}const g=new Pe;this.positions=new Float32Array(l),this.positionAttr=new en(this.positions,3),g.setAttribute("position",this.positionAttr),g.setIndex(u),o?(this.colorAttr=new en(new Float32Array(c),3),g.setAttribute("color",this.colorAttr)):this.colorAttr=null;const S=new Ge({color:o?16777215:i.color??16777215,vertexColors:o,roughness:i.roughness??.9,metalness:i.metalness??0,transparent:i.transparent??!1,opacity:i.opacity??1,flatShading:i.flatShading??!0});this.mesh=new yt(g,S),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1}setCornerHeights(t){for(const[e,i]of this.cornerTopVerts){const{cx:s,cy:r}=fA(e),o=t(s,r);for(const a of i)this.positions[a*3+1]=o}this.positionAttr.needsUpdate=!0}setTileColors(t){if(!this.colorAttr)return;const e=this.colorAttr.array;for(const i of this.tiles){const s=t(i.tx,i.ty),r=[bs(i.tx,i.ty),bs(i.tx+1,i.ty),bs(i.tx,i.ty+1),bs(i.tx+1,i.ty+1)];for(const o of r){const a=this.cornerTopVerts.get(o);if(a)for(const l of a)e[l*3]=s.r,e[l*3+1]=s.g,e[l*3+2]=s.b}}this.colorAttr.needsUpdate=!0}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function Wi(n,t,e){return new pA(n,t,e)}const Rs=.06,mA=.04,gA=.35,_A=.01,Jh=new ne(Ie.reefExposed),xA=new ne(Ie.reefSubmerged);function ws(n,t){const e=[];for(let i=0;i<n.heightTiles;i+=1)for(let s=0;s<n.widthTiles;s+=1)t(n.tiles[i][s])&&e.push({tx:s,ty:i});return e}function vA(n,t,e){let i=!1,s=!1;for(const[r,o]of[[0,0],[-1,0],[0,-1],[-1,-1]]){const a=t+r,l=e+o;if(a<0||l<0||a>=n.widthTiles||l>=n.heightTiles)continue;const c=n.tiles[l][a];c==="grass"?i=!0:c==="sand"&&(s=!0)}return i?yn(t,e,"grass"):s?yn(t,e,"sand"):0}function SA(n){for(const t of n)t.dispose()}class MA{constructor(){k(this,"root",new Qt);k(this,"tideEdges",new dA);k(this,"water",null);k(this,"landFields",[]);k(this,"shallowField",null);k(this,"coralField",null);k(this,"solidField",null);k(this,"tideZoneField",null);k(this,"waterField",null);k(this,"coralTiles",[]);k(this,"coralSubmerged",new Uint8Array(0));k(this,"reefTiles",[]);k(this,"lastTidePhase",Number.NaN);k(this,"mapKey",null);this.root.add(this.tideEdges.root)}build(t,e){const i=`${t.widthTiles}x${t.heightTiles}:${Rm()}`;if(this.mapKey===i)return;this.destroy();const s=new Ge({color:Ie.deepWater,roughness:.85,metalness:.05});this.water=new yt(new hs(t.widthTiles,t.heightTiles),s),this.water.rotation.x=-Math.PI/2,this.water.position.set(t.widthTiles/2,0,t.heightTiles/2),this.water.receiveShadow=!0,this.root.add(this.water),this.buildLand(t),this.rebuildOverlay(t,e),this.mapKey=i}buildLand(t){for(const e of["grass","sand"]){const i=ws(t,r=>r===e).map(r=>r);if(i.length===0)continue;const s=Wi(i,(r,o)=>vA(t,r,o),{color:qc(e),skirts:!0,skirtBottom:0,roughness:.92,flatShading:!0});this.landFields.push(s),this.root.add(s.mesh)}}rebuildOverlay(t,e){this.clearOverlay();const i=ws(t,o=>o==="shallow");i.length>0&&(this.shallowField=Wi(i,()=>Rs,{color:Ie.shallow,skirts:!0,skirtBottom:0,roughness:.85,flatShading:!0}),this.root.add(this.shallowField.mesh));const s=ws(t,o=>o==="coral_solid");s.length>0&&(this.solidField=Wi(s,()=>Rs,{color:Ie.coralSolid,skirts:!0,skirtBottom:0,roughness:.9,flatShading:!0}),this.root.add(this.solidField.mesh));const r=ws(t,o=>o==="tide_zone");r.length>0&&(this.tideZoneField=Wi(r,()=>Rs,{color:Ie.tideZone,skirts:!0,skirtBottom:0,roughness:.85,flatShading:!0}),this.root.add(this.tideZoneField.mesh)),this.coralTiles=ws(t,o=>o==="coral_rideable"),this.coralSubmerged=new Uint8Array(this.coralTiles.length).fill(255),this.coralTiles.length>0&&(this.coralField=Wi(this.coralTiles.map(o=>({...o,color:Jh.clone()})),()=>Rs,{vertexColors:!0,skirts:!0,skirtBottom:0,roughness:.85,flatShading:!0}),this.root.add(this.coralField.mesh)),this.reefTiles=[...i,...this.coralTiles],this.lastTidePhase=Number.NaN,this.updateTideVisuals(t,e)}clearWaterField(){this.waterField&&(this.root.remove(this.waterField.mesh),this.waterField.dispose(),this.waterField=null)}clearOverlay(){this.shallowField&&(this.root.remove(this.shallowField.mesh),this.shallowField.dispose(),this.shallowField=null),this.coralField&&(this.root.remove(this.coralField.mesh),this.coralField.dispose(),this.coralField=null),this.solidField&&(this.root.remove(this.solidField.mesh),this.solidField.dispose(),this.solidField=null),this.tideZoneField&&(this.root.remove(this.tideZoneField.mesh),this.tideZoneField.dispose(),this.tideZoneField=null),this.clearWaterField(),this.coralTiles=[],this.coralSubmerged=new Uint8Array(0),this.reefTiles=[],this.lastTidePhase=Number.NaN}collectWetTiles(t){const e=[];for(const i of this.reefTiles){const{tx:s,ty:r}=i;[di(s,r,t),di(s+1,r,t),di(s,r+1,t),di(s+1,r+1,t)].some(a=>a>mA)&&e.push(i)}return e}syncWaterField(t){if(this.clearWaterField(),!t)return;const e=this.collectWetTiles(t);e.length!==0&&(this.waterField=Wi(e,(i,s)=>di(i,s,t),{color:Ie.shallow,transparent:!0,opacity:.62,roughness:.35,metalness:.1,flatShading:!0,skirts:!1}),this.root.add(this.waterField.mesh))}updateTideVisuals(t,e){var r,o;const i=(e==null?void 0:e.phaseRadians)??-1;if(Number.isNaN(this.lastTidePhase)||Math.abs(i-this.lastTidePhase)>=_A){this.lastTidePhase=i;const a=(l,c)=>Rs+(e?Lg(l,c,e):0);(r=this.shallowField)==null||r.setCornerHeights(a),(o=this.coralField)==null||o.setCornerHeights(a),this.syncWaterField(e)}if(this.coralField&&this.coralTiles.length>0){let a=!1;for(let l=0;l<this.coralTiles.length;l+=1){const{tx:c,ty:u}=this.coralTiles[l],f=(e?di(c+.5,u+.5,e):0)/rr>gA?1:0;this.coralSubmerged[l]!==f&&(this.coralSubmerged[l]=f,a=!0)}if(a){const l=new Map;for(let c=0;c<this.coralTiles.length;c+=1){const{tx:u,ty:d}=this.coralTiles[c];l.set(`${u},${d}`,this.coralSubmerged[c]===1)}this.coralField.setTileColors((c,u)=>l.get(`${c},${u}`)?xA:Jh)}}this.tideEdges.sync(e)}setWaterScroll(t,e){if(!this.water)return;const i=this.water.material;i.map=null}destroy(){this.water&&(this.water.geometry.dispose(),this.water.material.dispose(),this.root.remove(this.water),this.water=null);for(const t of this.landFields)this.root.remove(t.mesh);SA(this.landFields),this.landFields=[],this.clearOverlay(),this.tideEdges.sync(null),this.mapKey=null}}const yA=Math.PI*.75,EA=.55,TA=28,Ca=.15,Pa=1.45,jh=8,Qh=160,td=1.8,ed=1.2,nd=.004,bA=.08,id=.6;class AA{constructor(t){k(this,"camera");k(this,"yaw",yA);k(this,"pitch",EA);k(this,"distance",TA);k(this,"focusTarget",new L);k(this,"focusCurrent",new L);k(this,"focusInitialized",!1);k(this,"scratch",new L);k(this,"middleMouseDragging",!1);k(this,"lastPointerX",0);k(this,"lastPointerY",0);k(this,"arrowLeft",!1);k(this,"arrowRight",!1);k(this,"arrowUp",!1);k(this,"arrowDown",!1);this.camera=new on(50,t,.1,500)}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setFocus(t,e){const i=Be(t,e,id);this.focusTarget.set(i.x,i.y,i.z),this.focusInitialized||(this.focusCurrent.copy(this.focusTarget),this.focusInitialized=!0)}snapFocus(t,e){const i=Be(t,e,id);this.focusTarget.set(i.x,i.y,i.z),this.focusCurrent.copy(this.focusTarget),this.focusInitialized=!0}update(t){const e=1-Math.exp(-10*t);this.focusCurrent.lerp(this.focusTarget,e),this.arrowLeft&&(this.yaw+=td*t),this.arrowRight&&(this.yaw-=td*t),this.arrowUp&&(this.pitch=Math.min(Pa,this.pitch+ed*t)),this.arrowDown&&(this.pitch=Math.max(Ca,this.pitch-ed*t));const i=Math.cos(this.pitch),s=Math.sin(this.pitch),r=Math.cos(this.yaw),o=Math.sin(this.yaw);this.scratch.set(this.distance*i*r,this.distance*s,this.distance*i*o),this.camera.position.copy(this.focusCurrent).add(this.scratch),this.camera.lookAt(this.focusCurrent)}handleKeyDown(t){switch(t){case"ArrowLeft":return this.arrowLeft=!0,!0;case"ArrowRight":return this.arrowRight=!0,!0;case"ArrowUp":return this.arrowUp=!0,!0;case"ArrowDown":return this.arrowDown=!0,!0;default:return!1}}handleKeyUp(t){switch(t){case"ArrowLeft":return this.arrowLeft=!1,!0;case"ArrowRight":return this.arrowRight=!1,!0;case"ArrowUp":return this.arrowUp=!1,!0;case"ArrowDown":return this.arrowDown=!1,!0;default:return!1}}onPointerDown(t){t.button===1&&(t.preventDefault(),this.middleMouseDragging=!0,this.lastPointerX=t.clientX,this.lastPointerY=t.clientY)}onPointerMove(t){if(!this.middleMouseDragging)return;const e=t.clientX-this.lastPointerX,i=t.clientY-this.lastPointerY;this.lastPointerX=t.clientX,this.lastPointerY=t.clientY,this.yaw+=e*nd,this.pitch=Math.max(Ca,Math.min(Pa,this.pitch+i*nd))}onPointerUp(t){t.button===1&&this.endMiddleMouseDrag()}onPointerCancel(){this.endMiddleMouseDrag()}endMiddleMouseDrag(){this.middleMouseDragging=!1}onWheel(t){const e=1+t*bA*.001;this.distance=Math.max(jh,Math.min(Qh,this.distance*e))}getCompassRotationRadians(){return Fh-this.yaw}getViewFacingRadians(){return this.yaw+Math.PI}snapNorth(){this.yaw=Fh}setOrbit(t,e,i=this.distance){this.yaw=t,this.pitch=Math.max(Ca,Math.min(Pa,e)),this.distance=Math.max(jh,Math.min(Qh,i))}}const Cs=.2,RA=1.4,sd=.9,rd=51380,wA=.3,CA=.9,PA=.07;function IA(){const n=new Qt,t=new yt(new hs(1,1),new To({color:rd,transparent:!0,opacity:wA,side:Mn,depthWrite:!1}));t.rotation.x=-Math.PI/2;const e=.5,i=new Pe;i.setAttribute("position",new xe([-e,0,-e,e,0,-e,e,0,e,-e,0,e],3));const s=new nv(i,new Rl({color:rd,transparent:!0,opacity:CA}));return n.add(t,s),n.visible=!1,n}function LA(n,t,e=1){const i=new Pe;return i.setAttribute("position",new xe(n,3)),new wl(i,new Rl({color:t,transparent:e<1,opacity:e}))}class DA{constructor(){k(this,"root",new Qt);k(this,"walkClick",new Qt);k(this,"tide",new Qt);k(this,"facing",new Qt);k(this,"headingArrow",new Qt);k(this,"intendedGhost",new Qt);k(this,"trueTile",IA());k(this,"trueTileEnabled",!1);k(this,"lines",[]);this.root.add(this.walkClick,this.tide,this.facing,this.headingArrow,this.intendedGhost,this.trueTile)}sync(t,e){this.clearDynamic(),this.drawWalkClick(t),this.drawTide(t),this.drawFacing(t,e),this.drawHeadingArrow(t),this.drawIntendedGhost(t),this.updateTrueTile(t,e)}setTrueTileVisible(t){this.trueTileEnabled=t,this.trueTile.visible=t}updateTrueTile(t,e){if(!this.trueTileEnabled)return;const i=Math.floor(t.simulationPosition.x),s=Math.floor(t.simulationPosition.y),r=Qe(e,i,s),o=r==="grass"||r==="sand"?yn(i+.5,s+.5,r):rl(i+.5,s+.5,t.tide);this.trueTile.position.set(i+.5,o+PA,s+.5)}clearDynamic(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),t.removeFromParent();this.lines=[],this.walkClick.clear(),this.tide.clear(),this.facing.clear(),this.headingArrow.clear(),this.intendedGhost.clear()}addLine(t,e,i,s=1){const r=LA(e,i,s);t.add(r),this.lines.push(r)}drawWalkClick(t){if(t.boardMounted||t.walkTargetTx===null||t.walkTargetTy===null)return;const e=t.walkTargetTx,i=t.walkTargetTy,s=t.walkClickValid?16776960:16729156,r=.15;this.addLine(this.walkClick,[e+r,Cs,i+r,e+1-r,Cs,i+1-r],s),this.addLine(this.walkClick,[e+1-r,Cs,i+r,e+r,Cs,i+1-r],s)}drawTide(t){const e=t.tide;if(!e)return;const i=Be(e.centerX,e.centerY),s=[e.phaseRadians,_e(e.phaseRadians+e.sweepRadians)],r=.12,o=36;for(const a of s)for(const l of[e.innerRadius,e.outerRadius]){const c=[];for(let u=0;u<=o;u+=1){const d=a+r*(u/o-.5);c.push(i.x+Math.cos(d)*l,Cs*.5,i.z+Math.sin(d)*l)}this.addLine(this.tide,c,12118271,.55)}}drawFacing(t,e){const i=Be(t.surfboard.position.x,t.surfboard.position.y);let s;if(!t.boardMounted){s=je(t.surfboard.currentHeading)*Math.PI/180;const d=.35,h=i.y+.35;this.addLine(this.facing,[i.x,h,i.z,i.x+Math.cos(s)*d,h,i.z+Math.sin(s)*d],16777215);return}const r=Qe(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y));s=t.surfboard.speedState==="seated"&&r==="sand"?0:je(t.surfboard.currentHeading)*Math.PI/180;const a=.55,l=i.x+Math.cos(s)*a,c=i.z+Math.sin(s)*a;this.addLine(this.facing,[i.x,i.y+.15,i.z,l,i.y+.15,c],16777215);const u=new yt(new er(.01,.08,4,12),new To({color:16777215}));u.position.set(l,i.y+.15,c),u.rotation.x=Math.PI/2,this.facing.add(u)}drawHeadingArrow(t){if(!t.boardMounted||t.hoverHeading===null||t.cursorWorldX===null||t.cursorWorldY===null)return;const e=Be(t.surfboard.position.x,t.surfboard.position.y),i=je(t.hoverHeading)*Math.PI/180,s=e.x+Math.cos(i)*sd,r=e.z+Math.sin(i)*sd,o=t.clickValid?16777215:16729156;this.addLine(this.headingArrow,[e.x,e.y+.18,e.z,s,e.y+.18,r],o,.5);const a=RA*.5,l=s+Math.cos(i)*a,c=r+Math.sin(i)*a;this.addLine(this.headingArrow,[s,e.y+.18,r,l,e.y+.18,c],o)}drawIntendedGhost(t){if(!t.boardMounted||t.surfboard.currentHeading===t.surfboard.intendedHeading)return;const e=Be(t.surfboard.position.x,t.surfboard.position.y),i=je(t.surfboard.intendedHeading)*Math.PI/180,s=.45;this.addLine(this.intendedGhost,[e.x,e.y+.16,e.z,e.x+Math.cos(i)*s,e.y+.16,e.z+Math.sin(i)*s],11193599,.6)}dispose(){this.clearDynamic();for(const t of this.trueTile.children)(t instanceof yt||t instanceof wl)&&(t.geometry.dispose(),t.material.dispose());this.trueTile.clear()}}const NA=.06,UA=.2,Gl="trick-hitbox",Op=1,Vl=.55,kp=.12,Bp=.14,Hp=2.2,FA=.5;function OA(n,t){switch(n){case"tunnel":return t*(il+go+cg);case"wall_ride":return t*1.125;case"brain_coral":return t*.8;case"jump":return t*(Vl+Bp*.5);case"rail":default:return t*.57}}function kA(n,t){return OA(n,t)+NA+UA}function zp(n,t){return t?rl(n.center.x,n.center.y,t)-Os:0}function BA(n,t,e,i){const s=zp(n,t);if(!i)return s;const r=_g(n,t,e);return s-r*kA(n.type,n.radius)}function HA(n){switch(n){case"rail":return{base:16033721,accent:16041282};case"tunnel":return{base:10185727,accent:13219071};case"jump":return{base:16747586,accent:16769126};case"brain_coral":return{base:16740020,accent:16752338};case"wall_ride":return{base:7260415,accent:12117759};default:return{base:16033721,accent:16041282}}}function be(n,t){return new Ge({color:n,transparent:t<1,opacity:t,roughness:.7,metalness:.1,flatShading:!0})}function zA(n,t,e,i){const s=n.getObjectByName(Gl);{s&&(s.visible=!1);return}}function od(n,t,e){const i=new Qt,s=n*.24,r=n*.08,o=n*.12,a=n*.38,l=n*.04;for(const u of[-1,0,1]){const d=new yt(new $t(a*2-l,r,o),be(t.accent,e));d.position.set(u*(a+l*.5),s,0),i.add(d)}const c=new yt(new $t(n*.12,s*.85,n*.12),be(t.base,e));c.position.set(0,s*.85/2,0),i.add(c);for(const u of[-1,1]){const d=u*n*.85,h=new yt(new $t(n*.14,s,n*.14),be(t.base,e));h.position.set(d,s/2,0);const f=new yt(new $t(n*.3,n*.06,n*.3),be(t.base,e));f.position.set(d,n*.03,0);const g=new yt(new $t(n*.1,n*.1,n*.1),be(t.accent,e));g.position.set(d,s*.55,n*.1);const S=new yt(new $t(n*.08,n*.08,n*.08),be(t.base,e));S.position.set(d+u*n*.08,s*.28,-n*.09),i.add(h,f,g,S)}return i}function GA(n,t,e){const i=new Qt,s=n*il,r=n*go,o=n*Bd,a=new yt(new er(s,r,6,12,Math.PI),be(t.accent,e));a.scale.set(1,1,Oa),a.position.y=o,i.add(a);const l=s*Oa*.22;for(const c of[-1,1]){const u=new yt(new er(s*.98,r*.55,5,10,Math.PI),be(t.base,e));u.position.set(0,o,c*l),i.add(u)}for(const c of[.35,.9,Math.PI-.35,Math.PI-.9]){const u=new yt(new $t(n*.1,n*.1,n*.1),be(t.base,e));u.position.set(Math.cos(c)*s,o+Math.sin(c)*s,0),i.add(u)}return i.rotation.y=Math.PI/2,i}function ad(n,t,e,i){const s=n*Op,r=n*Vl,o=n*kp,a=n*Bp,l=n*Hp,c=r+o,u=Math.atan2(c,s),d=s*FA,h=s+d,f=a/2*Math.cos(u)+h/2*Math.sin(u),g=r-f,S=-t*(a/2*Math.sin(u)-h/2*Math.cos(u)),m=new yt(new $t(l,a,h),be(e.base,i));return m.position.set(0,g,S),m.rotation.x=t*u,m}function VA(n,t,e){const i=new Qt;i.add(ad(n,-1,t,e),ad(n,1,t,e));const s=n*Op,r=n*Vl,o=n*kp,a=n*Hp,l=r+o,c=Math.atan2(l,s),u=n*.04,d=n*.06;for(const f of[-1,1])for(const g of[-1,1]){const S=new yt(new $t(d,u,s*.85),be(t.accent,e)),m=s*.42;S.position.set(g*(a*.5-d),r-m*Math.sin(c)-o*.15,-f*m*Math.cos(c)),S.rotation.x=f*c,i.add(S)}const h=new yt(new $t(a*.55,n*.05,n*.08),be(t.accent,e));return h.position.y=r+n*.02,i.add(h),i.rotation.y=Math.PI/2,i}function WA(n,t,e){const i=new Qt,s=new yt(new oo(n*.55,1),be(t.base,e));s.position.y=n*.32,s.scale.y=.8,i.add(s);const r=[{x:.25,y:.48,z:.15,s:.3,accent:!0},{x:-.28,y:.42,z:-.18,s:.2,accent:!0},{x:.05,y:.55,z:-.22,s:.22,accent:!1},{x:-.18,y:.5,z:.22,s:.18,accent:!0},{x:.32,y:.36,z:-.08,s:.16,accent:!1},{x:-.08,y:.28,z:.3,s:.14,accent:!0}];for(const o of r){const a=new yt(new oo(n*o.s,0),be(o.accent?t.accent:t.base,e));a.position.set(n*o.x,n*o.y,n*o.z),i.add(a)}return i}function XA(n,t,e){const i=new Qt,s=new yt(new $t(n*.2,n*1.15,n*1.35),be(t.base,e));s.position.set(0,n*.48,0);const r=new yt(new $t(n*.06,n*.95,n*1.2),be(t.accent,e));r.position.set(n*.12,n*.5,0);const o=new yt(new $t(n*.32,n*.1,n*1.4),be(t.base,e));o.position.set(0,n*.05,0);const a=new yt(new $t(n*.34,n*.14,n*1.45),be(t.accent,e));a.position.y=n*1.02;for(const l of[-.5,-.17,.17,.5]){const c=new yt(new $t(n*.08,n*.12,n*.1),be(t.base,e));c.position.set(0,n*1.12,n*l),i.add(c)}return i.add(s,r,o,a),i.rotation.y=Math.PI/2,i}function YA(n,t,e,i){switch(n){case"rail":return od(t,e,i);case"tunnel":return GA(t,e,i);case"jump":return VA(t,e,i);case"brain_coral":return WA(t,e,i);case"wall_ride":return XA(t,e,i);default:return od(t,e,i)}}function qA(n,t,e,i){const s=be(16774502,i*.9),r=be(15255600,i*.85),o=t==="jump"?[-1,1]:[1];for(const a of o){const l=new Qt;l.rotation.y=Math.PI/2;for(const c of[-.72,-.52,-.32]){const u=new Qt,d=new yt(new ns(e*.16,e*.22,3),s);d.rotation.x=Math.PI,d.rotation.z=Math.PI;const h=new yt(new $t(e*.06,e*.04,e*.12),r);h.position.z=e*.1,u.add(d,h),u.position.set(0,e*.08,a*(e*c+e*.22)),l.add(u)}n.add(l)}}function KA(n){const t=n.children.filter(e=>e.name!==Gl);for(const e of t)n.remove(e),e.traverse(i=>{if(i instanceof yt){i.geometry.dispose();const s=i.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}})}function ZA(n,t,e){const i=!n.tricked&&!e&&t.trickPrepare!==null&&t.trickPrepare.slot===n.prepareSlot;return`${n.id}:${n.type}:${n.radius}:${i}`}function $A(n,t){n.traverse(e=>{if(e instanceof yt&&e.name!==Gl){const i=e.material;i.opacity=t,i.transparent=t<1}})}class JA{constructor(){k(this,"root",new Qt);k(this,"pool",[]);k(this,"meshKeys",[])}sync(t,e=0){const i=t.tide,s=t.trickZones;for(;this.pool.length<s.length;){const r=new Qt;this.pool.push(r),this.meshKeys.push(""),this.root.add(r)}for(let r=0;r<this.pool.length;r+=1){const o=this.pool[r];if(r>=s.length){o.visible=!1;continue}const a=s[r];o.visible=!0;const l=i?ii(a,i):!1,u=Gd(a,i,e),d=ZA(a,t,l);if(this.meshKeys[r]!==d){KA(o);const g=HA(a.type),S=YA(a.type,a.radius,g,u);o.add(S),!a.tricked&&!l&&t.trickPrepare!==null&&t.trickPrepare.slot===a.prepareSlot&&qA(o,a.type,a.radius,u),this.meshKeys[r]=d}else $A(o,u);const h=Be(a.center.x,a.center.y),f=BA(a,i,e,l);zp(a,i),zA(o,a.type,a.radius),o.position.set(h.x,f,h.z),o.rotation.y=Bl(a.rotationRadians+(a.rotationJitterRadians??0))}}dispose(){for(const t of this.pool)t.traverse(e=>{e instanceof yt&&(e.geometry.dispose(),e.material.dispose())});this.pool=[],this.root.clear()}}const jA=10189884,cd=8018984,Zc=7031338,QA=12096616,ld=9069112,tR=7031338,eR=4028986,nR=[{angle:Math.PI/2-.35,distanceShare:.55,footprint:5,facing:Math.PI/2},{angle:Math.PI/2+.55,distanceShare:.6,footprint:3.6,facing:Math.PI/2+.6},{angle:-2.7,distanceShare:.58,footprint:4.2,facing:-2.7},{angle:-.2,distanceShare:.5,footprint:3.2,facing:-.2}];function dn(n){return new Ge({color:n,roughness:.9,flatShading:!0})}function iR(n){const t=new Qt,e=n*.05,i=n*.24,s=n*.38,r=n*.5,o=n*.36,a=new yt(new $t(r*2.2,e,o*2.3),dn(QA));a.position.y=e/2,t.add(a);for(const h of[-1,1])for(const f of[-1,1]){const g=new yt(new Hn(n*.035,n*.045,i,5),dn(Zc));g.position.set(h*r*.85,e+i/2,f*o*.85);const S=new yt(new $t(n*.08,n*.04,n*.08),dn(Zc));S.position.set(h*r*.85,e+i*.92,f*o*.85),t.add(g,S)}const l=e+i,c=new yt(new ns(n*.78,s,4),dn(jA));c.scale.set(1.25,1,.95),c.rotation.y=Math.PI/4,c.position.y=l+s/2,t.add(c);const u=new yt(new ns(n*.16,s*.28,4),dn(cd));u.rotation.y=Math.PI/4,u.position.y=l+s+s*.1,t.add(u);const d=new yt(new $t(n*.9,n*.04,n*.06),dn(cd));return d.position.y=l+s*.85,t.add(d),t}function sR(){const n=new Qt,t=new yt(new $t(2.4,.22,.55),dn(ld));t.position.y=.12;const e=new yt(new $t(.35,.18,.28),dn(ld));e.position.set(1.25,.18,0);const i=new yt(new $t(.08,.06,.5),dn(Zc));return i.position.set(0,.26,0),n.add(t,e,i),n}function rR(){const n=new Qt,t=new yt(new Hn(.08,.12,2.2,5),dn(tR));t.position.y=1.1,n.add(t);for(const e of[0,Math.PI/2,Math.PI,3*Math.PI/2]){const i=new yt(new ns(.55,.9,4),dn(eR));i.position.set(Math.cos(e)*.35,2.15,Math.sin(e)*.35),i.rotation.z=Math.cos(e)*.9,i.rotation.x=Math.sin(e)*.9,n.add(i)}return n}function oR(){const n=new Qt;for(const f of nR){const g=Fs(f.angle)*f.distanceShare,S=We+Math.cos(f.angle)*g,m=Xe+Math.sin(f.angle)*g,p=yn(S,m,"grass"),_=iR(f.footprint),M=Be(S,m);_.position.set(M.x,p,M.z),_.rotation.y=-f.facing+Math.PI/2,n.add(_)}const t=Math.PI/2+.1,e=Fs(t)*.72,i=We+Math.cos(t)*e,s=Xe+Math.sin(t)*e,r=Be(i,s),o=sR();o.position.set(r.x,yn(i,s,"grass"),r.z),o.rotation.y=-t,n.add(o);const a=-2.4,l=Fs(a)*.48,c=We+Math.cos(a)*l,u=Xe+Math.sin(a)*l,d=Be(c,u),h=rR();return h.position.set(d.x,yn(c,u,"grass"),d.z),n.add(h),n}function aR(n){n.traverse(t=>{t instanceof yt&&(t.geometry.dispose(),t.material.dispose())})}const Ia=new L,La=new L,Da=new pt,Xi=new L;class cR{constructor(){k(this,"renderer",null);k(this,"scene",null);k(this,"orbitCamera",null);k(this,"raycaster",new $v);k(this,"mapMeshes",null);k(this,"entities",null);k(this,"tricks",null);k(this,"overlays",null);k(this,"village",null);k(this,"container",null);k(this,"lastFrameMs",0);k(this,"unbindPointer",null);k(this,"unbindCamera",null);k(this,"xpContainer",null)}async init(t,e){this.container=t,this.renderer=new YT({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setSize(Zi,xi,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(Ie.deepWater),t.appendChild(this.renderer.domElement),this.scene=new Yx;const i=new qv(16777215,.55),s=new Yv(16774368,.85);s.position.set(40,80,30),this.scene.add(i,s),this.orbitCamera=new AA(Zi/xi),this.mapMeshes=new MA,this.entities=new aA,this.tricks=new JA,this.overlays=new DA,this.village=oR(),this.scene.add(this.mapMeshes.root,this.tricks.root,this.entities.root,this.overlays.root,this.village),this.xpContainer=document.createElement("div"),this.xpContainer.className="xp-drop-layer",this.xpContainer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",t.style.position="relative",t.appendChild(this.xpContainer),this.bindCameraEvents(this.renderer.domElement)}getCanvas(){if(!this.renderer)throw new Error("Renderer not initialized");return this.renderer.domElement}bindPointerInput(t,e){var i;return(i=this.unbindPointer)==null||i.call(this),this.unbindPointer=db(this.getCanvas(),t,e,(s,r)=>this.screenToWorld(s,r)),this.unbindPointer}handleKeyDown(t){var e;return((e=this.orbitCamera)==null?void 0:e.handleKeyDown(t.code))??!1}handleKeyUp(t){var e;return((e=this.orbitCamera)==null?void 0:e.handleKeyUp(t.code))??!1}resize(t){!this.renderer||!this.orbitCamera||(this.renderer.setSize(t.width,t.height,!1),this.orbitCamera.setAspect(t.width/t.height))}worldToScreen(t,e){if(!this.orbitCamera)return{x:0,y:0};const i=Be(t,e,.5);return Xi.set(i.x,i.y,i.z),Xi.project(this.orbitCamera.camera),{x:(Xi.x+1)/2*Zi,y:(-Xi.y+1)/2*xi}}screenToWorld(t,e){if(!this.orbitCamera)return{x:0,y:0};Da.x=t/Zi*2-1,Da.y=-(e/xi)*2+1,this.raycaster.setFromCamera(Da,this.orbitCamera.camera);const i=this.raycaster.ray;Ia.copy(i.origin),La.copy(i.direction);const s=La.y;if(Math.abs(s)<1e-6)return{x:NaN,y:NaN};const r=-Ia.y/s;return r<0?{x:NaN,y:NaN}:(Xi.copy(Ia).addScaledVector(La,r),qb(Xi))}render(t,e,i=performance.now(),s=0){if(!this.renderer||!this.scene||!this.orbitCamera||!this.mapMeshes||!this.entities||!this.tricks||!this.overlays)return;const r=this.lastFrameMs>0?i-this.lastFrameMs:16;this.lastFrameMs=i;const o=Math.min(.1,r/1e3);this.mapMeshes.build(e,t.tide),this.mapMeshes.updateTideVisuals(e,t.tide),this.orbitCamera.setFocus(t.surfboard.position.x,t.surfboard.position.y),this.orbitCamera.update(o),this.tricks.sync(t,s),this.entities.sync(t,e,i),this.overlays.sync(t,e),this.renderer.render(this.scene,this.orbitCamera.camera)}getCompassRotationRadians(){var t;return((t=this.orbitCamera)==null?void 0:t.getCompassRotationRadians())??0}getViewFacingRadians(){var t;return((t=this.orbitCamera)==null?void 0:t.getViewFacingRadians())??0}snapCameraNorth(){var t;(t=this.orbitCamera)==null||t.snapNorth()}setOrbit(t,e,i){var s;(s=this.orbitCamera)==null||s.setOrbit(t,e,i)}snapFocus(t,e){var i;(i=this.orbitCamera)==null||i.snapFocus(t,e)}setTrueTileVisible(t){var e;(e=this.overlays)==null||e.setTrueTileVisible(t)}setVillageVisible(t){this.village&&(this.village.visible=t)}showXpDrop(t,e,i){if(!this.xpContainer)return;const s=this.worldToScreen(e,i),r=document.createElement("div");r.textContent=t,r.style.cssText="position:absolute;color:#7ecf8f;font:12px monospace;white-space:nowrap;",r.style.left=`${s.x}px`,r.style.top=`${s.y-10}px`,this.xpContainer.appendChild(r);const o=()=>{const a=parseFloat(r.style.top);if(r.style.top=`${a-.5}px`,r.style.opacity=`${parseFloat(r.style.opacity||"1")-.02}`,parseFloat(r.style.opacity||"1")<=0){r.remove();return}requestAnimationFrame(o)};requestAnimationFrame(o)}syncMapAfterTick(t,e){var i;(i=this.mapMeshes)==null||i.updateTideVisuals(e,t.tide)}destroy(){var t,e,i,s,r,o,a,l,c;(t=this.unbindPointer)==null||t.call(this),(e=this.unbindCamera)==null||e.call(this),(i=this.entities)==null||i.dispose(),(s=this.tricks)==null||s.dispose(),(r=this.overlays)==null||r.dispose(),this.village&&(aR(this.village),this.village=null),(o=this.mapMeshes)==null||o.destroy(),(a=this.renderer)==null||a.dispose(),(l=this.renderer)==null||l.domElement.remove(),(c=this.xpContainer)==null||c.remove(),this.renderer=null,this.scene=null,this.container}bindCameraEvents(t){const e=this.orbitCamera;if(!e)return;const i=c=>{e.onPointerDown(c),c.button===1&&t.setPointerCapture(c.pointerId)},s=c=>e.onPointerMove(c),r=c=>{c.button===1&&t.hasPointerCapture(c.pointerId)&&t.releasePointerCapture(c.pointerId),e.onPointerUp(c)},o=c=>{t.hasPointerCapture(c.pointerId)&&t.releasePointerCapture(c.pointerId),e.onPointerCancel()},a=c=>{c.preventDefault(),e.onWheel(c.deltaY)},l=c=>c.preventDefault();t.addEventListener("pointerdown",i),t.addEventListener("pointermove",s),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",o),t.addEventListener("wheel",a,{passive:!1}),t.addEventListener("contextmenu",l),this.unbindCamera=()=>{t.removeEventListener("pointerdown",i),t.removeEventListener("pointermove",s),t.removeEventListener("pointerup",r),t.removeEventListener("pointercancel",o),t.removeEventListener("wheel",a),t.removeEventListener("contextmenu",l)}}}function lR(n,t,e){return{x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e}}function ud(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function Gp(n){return Math.min(1,Math.max(0,n))}function co(n){return n?n.ticksElapsed/n.ticksTotal:0}function Na(n,t){const e={...n.position},i=co(t);return{segmentStart:e,segmentEnd:e,headingStart:n.currentHeading,headingEnd:n.currentHeading,intendedHeadingStart:n.intendedHeading,intendedHeadingEnd:n.intendedHeading,trickProgressStart:i,trickProgressEnd:i,displayTrick:t}}function Ua(n,t,e,i,s){n.segmentStart={...t.position},n.segmentEnd={...e.position},n.headingStart=t.currentHeading,n.headingEnd=e.currentHeading,n.intendedHeadingStart=t.intendedHeading,n.intendedHeadingEnd=e.intendedHeading,n.trickProgressStart=co(i),i&&!s?(n.trickProgressEnd=1,n.displayTrick=i):(n.trickProgressEnd=co(s),n.displayTrick=s??i)}function hd(n,t,e){if(e||n.displayTrick)return;const i=t.position,s=ud(n.segmentStart,n.segmentEnd);if(ud(i,n.segmentEnd)>Math.max(.2,s*.5+.05)){const o={...i};n.segmentStart=o,n.segmentEnd=o,n.headingStart=t.currentHeading,n.headingEnd=t.currentHeading,n.intendedHeadingStart=t.intendedHeading,n.intendedHeadingEnd=t.intendedHeading,n.trickProgressStart=0,n.trickProgressEnd=0,n.displayTrick=null}}function dd(n,t,e,i){const s=Gp(i),r=n.displayTrick,o=r?n.trickProgressStart+(n.trickProgressEnd-n.trickProgressStart)*s:0,a=r?_o(r,o):lR(n.segmentStart,n.segmentEnd,s),l=r?{...r,progress:o}:null;return{surfboard:{...t,position:a,currentHeading:Fa(n.headingStart,n.headingEnd,s),intendedHeading:Fa(n.intendedHeadingStart,n.intendedHeadingEnd,s)},trickAnimation:l}}class uR{constructor(){k(this,"player",Na({position:{x:0,y:0},currentHeading:0,intendedHeading:0},null));k(this,"demoSurfers",new Map)}reset(t){Ua(this.player,t.surfboard,t.surfboard,t.trickAnimation,t.trickAnimation),this.demoSurfers.clear();for(const e of t.demoSurfers)this.demoSurfers.set(e.id,Na(e.surfboard,e.trickAnimation))}onSimulationTick(t,e){Ua(this.player,t.surfboard,e.surfboard,t.trickAnimation,e.trickAnimation);const i=new Set;for(const s of e.demoSurfers){i.add(s.id);let r=this.demoSurfers.get(s.id);r||(r=Na(s.surfboard,s.trickAnimation),this.demoSurfers.set(s.id,r));const o=t.demoSurfers.find(a=>a.id===s.id);Ua(r,(o==null?void 0:o.surfboard)??s.surfboard,s.surfboard,(o==null?void 0:o.trickAnimation)??null,s.trickAnimation)}for(const s of this.demoSurfers.keys())i.has(s)||this.demoSurfers.delete(s)}ensureSynced(t){hd(this.player,t.surfboard,t.trickAnimation);for(const e of t.demoSurfers){const i=this.demoSurfers.get(e.id);i&&hd(i,e.surfboard,e.trickAnimation)}}buildDisplaySnapshot(t,e,i){const s=dd(this.player,t.surfboard,t.trickAnimation,i);let r=t.tide;if(t.tide&&e!==null){const a=Gp(i),l=e+t.tide.advancePerTick*a;r={...t.tide,phaseRadians:l}}const o=t.demoSurfers.map(a=>{const l=this.demoSurfers.get(a.id);if(!l)return{...a,trickAnimation:hR(a.trickAnimation)};const c=dd(l,a.surfboard,a.trickAnimation,i);return{...a,surfboard:c.surfboard,trickAnimation:c.trickAnimation}});return{...t,surfboard:s.surfboard,trickAnimation:s.trickAnimation,tide:r,demoSurfers:o,simulationPosition:{...t.surfboard.position}}}}function hR(n){return n?{...n,progress:co(n)}:null}class dR{constructor(t,e,i){k(this,"root");k(this,"tuning");this.root=t,this.tuning={...e},this.root.classList.add("hidden"),this.root.innerHTML=`
      <div><strong>Debug</strong> [F3] hide, [1/2/3] tune turn/paddle/ride</div>
      <div id="debug-lines"></div>
    `,window.addEventListener("keydown",s=>{if(s.key==="F3"){s.preventDefault(),this.root.classList.toggle("hidden");return}this.root.classList.contains("hidden")||(s.key==="1"&&(this.tuning.turnRate=Math.max(5,this.tuning.turnRate-2.5),i(this.tuning)),s.key==="2"&&(this.tuning.speedPaddle=Math.max(1,this.tuning.speedPaddle-1),i(this.tuning)),s.key==="3"&&(this.tuning.speedRide=Math.max(1,this.tuning.speedRide-1),i(this.tuning)),s.key==="!"&&(this.tuning.turnRate+=2.5,i(this.tuning)),s.key==="@"&&(this.tuning.speedPaddle+=1,i(this.tuning)),s.key==="#"&&(this.tuning.speedRide+=1,i(this.tuning)))})}update(t){if(this.root.classList.contains("hidden"))return;const e=this.root.querySelector("#debug-lines");if(!e)return;const{surfboard:i}=t;e.innerHTML=`
      pos: ${i.position.x.toFixed(2)}, ${i.position.y.toFixed(2)}<br/>
      heading: ${i.currentHeading} → ${i.intendedHeading}<br/>
      speed: ${i.speedState} | rotating: ${i.isRotating}<br/>
      turn: ${this.tuning.turnRate}° paddle: ${su(this.tuning.speedPaddle)} ride: ${su(this.tuning.speedRide)} tiles/tick<br/>
      tide: ${t.tide?`${(t.tide.phaseRadians*180/Math.PI).toFixed(0)}° sweep`:"off"}<br/>
      tick: ${t.tickCount}
    `}}const fR="/osrs-surfing-sim/assets/osrs",pR="/osrs-surfing-sim/assets/surf";function ce(n){return`${fR}/${n}`}function hi(n){return`${pR}/${n}`}const me={fixed:{minimapFrame:ce("fixed_mode/minimap_and_compass_frame.png"),compassDial:ce("other/compass.png")},chatbox:{stones:ce("chatbox/buttons_background_stones.png")},tabs:{combat:ce("tab/combat.png"),stats:ce("tab/stats.png"),quests:ce("tab/quests.png"),inventory:ce("tab/inventory.png"),equipment:ce("tab/equipment.png"),prayer:ce("tab/prayer.png"),magic:ce("tab/magic.png"),friends:ce("tab/friends.png"),ignores:ce("tab/ignores.png"),clanChannel:ce("tab/clan_channel.png"),accountManagement:ce("tab/account_management.png"),logout:ce("tab/logout.png"),options:ce("tab/options.png"),emotes:ce("tab/emotes.png")},surf:{boardUpright:hi("board_upright.svg"),boardPlanted:hi("board_planted.svg"),ride:hi("board_ride.svg"),reverse:hi("board_reverse.svg"),stanceGrind:hi("stance_grind.svg"),stanceTuck:hi("stance_tuck.svg"),stanceAir:hi("stance_air.svg")},sailing:{steering:ce("sailing/steering.png"),notSteering:ce("sailing/not_steering.png"),tabStats:ce("sailing/tab_stats.png"),tabFacilities:ce("sailing/tab_facilities.png"),tabCrew:ce("sailing/tab_crew.png")},skill:{agility:ce("skill/agility.png"),sailing:ce("skill/sailing.png")},chevron:{up:ce("chevron/yellow_up_single.png"),upDouble:ce("chevron/yellow_up_double.png"),down:ce("chevron/yellow_down_single.png"),downStop:ce("chevron/yellow_down_stop.png")}},mR=50;class gR{constructor(t){k(this,"root");k(this,"messagesEl");k(this,"lines",[]);this.root=t,this.root.className="osrs-chatbox";const e=me;this.root.innerHTML=`
      <div class="osrs-chatbox-messages" id="chat-messages"></div>
      <div class="osrs-chatbox-stones">
        <img src="${e.chatbox.stones}" alt="" class="osrs-chatbox-stones-bg" />
      </div>
    `,this.messagesEl=this.root.querySelector("#chat-messages"),this.push("Welcome to Ura Ura Swell.","game")}push(t,e="game"){const i=e==="xp"?'<span class="chat-xp">':e==="system"?'<span class="chat-sys">':"<span>";this.lines.push(`${i}${t}</span>`),this.lines.length>mR&&this.lines.shift(),this.messagesEl.innerHTML=this.lines.join("<br/>"),this.messagesEl.scrollTop=this.messagesEl.scrollHeight}}function lo(n){return n instanceof HTMLButtonElement&&n.disabled}function Vp(n,t){const e=n.getBoundingClientRect();return t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom}function jn(n,t){let e=null;const i=()=>{e=null},s=a=>{a.button!==0||lo(n)||(e=a.pointerId,n.setPointerCapture(a.pointerId))},r=a=>{a.button!==0||e!==a.pointerId||(n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),i(),!(lo(n)||!Vp(n,a))&&(a.preventDefault(),t()))},o=a=>{e===a.pointerId&&(n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),i())};return n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",o),()=>{n.removeEventListener("pointerdown",s),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",o)}}function _R(n,t,e){let i=null,s=null;const r=()=>{i=null,s=null},o=c=>{if(c.button!==0)return;const u=c.target.closest(t);if(!(u instanceof HTMLElement)||lo(u))return;const d=u.getAttribute("data-unlock");d&&(i=c.pointerId,s=d,n.setPointerCapture(c.pointerId))},a=c=>{if(c.button!==0||i!==c.pointerId||s===null)return;n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId);const u=s;r();const d=n.querySelector(`[data-unlock="${u}"]`);d instanceof HTMLElement&&(lo(d)||!Vp(d,c)||(c.preventDefault(),e(d)))},l=c=>{i===c.pointerId&&(n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId),r())};return n.addEventListener("pointerdown",o),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",l),()=>{n.removeEventListener("pointerdown",o),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",l)}}const xR=.35,vR=.04;class SR{constructor(t,e,i,s){k(this,"canvas");k(this,"ctx");k(this,"compassNeedle");k(this,"baseCanvas",null);k(this,"tideCanvas",null);k(this,"tideCtx",null);k(this,"lastTidePhase",Number.NaN);k(this,"baseMap",null);k(this,"coralTiles",[]);i.src=me.fixed.minimapFrame,i.alt="",i.decoding="async",this.canvas=document.createElement("canvas"),this.canvas.width=Yi,this.canvas.height=Yi,this.canvas.className="osrs-minimap-canvas",t.appendChild(this.canvas);const r=this.canvas.getContext("2d");if(!r)throw new Error("Minimap canvas unsupported");this.ctx=r;const o=e.querySelector("img");if(!o)throw new Error("Minimap compass needle missing");this.compassNeedle=o,this.compassNeedle.src=me.fixed.compassDial,this.compassNeedle.alt="Compass",jn(e,s)}setCompassRotation(t){const e=t*180/Math.PI;this.compassNeedle.style.transform=`rotate(${e}deg)`}ensureBaseCanvas(t){if(this.baseMap===t&&this.baseCanvas)return;const e=Yi,i=document.createElement("canvas");i.width=e,i.height=e;const s=i.getContext("2d");if(!s)throw new Error("Minimap base canvas unsupported");const r=e/t.widthTiles,o=e/t.heightTiles;this.coralTiles=[];for(let l=0;l<t.heightTiles;l+=1)for(let c=0;c<t.widthTiles;c+=1){const u=t.tiles[l][c];let d=cA(u);u==="coral_rideable"&&(this.coralTiles.push({tx:c,ty:l,angle:Number.NaN}),d="reef_exposed");const h=qc(d);s.fillStyle=`#${h.toString(16).padStart(6,"0")}`,s.fillRect(c*r,l*o,Math.ceil(r),Math.ceil(o))}this.baseCanvas=i;const a=document.createElement("canvas");a.width=e,a.height=e,this.tideCanvas=a,this.tideCtx=a.getContext("2d"),this.lastTidePhase=Number.NaN,this.baseMap=t}repaintTideOverlay(t,e){const i=this.tideCtx;if(!i||Math.abs(t.phaseRadians-this.lastTidePhase)<vR)return;this.lastTidePhase=t.phaseRadians;const r=Yi,o=r/e.widthTiles,a=r/e.heightTiles;i.clearRect(0,0,r,r);const l=qc("reef_submerged");i.fillStyle=`#${l.toString(16).padStart(6,"0")}`;for(const c of this.coralTiles)Number.isNaN(c.angle)&&(c.angle=Math.atan2(c.ty+.5-t.centerY,c.tx+.5-t.centerX)),Kd(c.angle,t)/rr>xR&&i.fillRect(c.tx*o,c.ty*a,Math.ceil(o),Math.ceil(a))}update(t,e){this.ensureBaseCanvas(e),t.tide&&this.repaintTideOverlay(t.tide,e);const i=this.ctx,s=Yi,r=s/2,o=s/e.widthTiles,a=s/e.heightTiles;i.clearRect(0,0,s,s),i.save(),i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.clip(),this.baseCanvas&&i.drawImage(this.baseCanvas,0,0),this.tideCanvas&&i.drawImage(this.tideCanvas,0,0);const l=t.surfboard.position.x*o,c=t.surfboard.position.y*a;i.fillStyle="#ffff00",i.beginPath(),i.arc(l,c,3,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1,i.stroke(),i.restore()}}const MR={Bronze:"linear-gradient(180deg, #e8a55c 0%, #8b5a2b 100%)",Iron:"linear-gradient(180deg, #d8d8d8 0%, #6a6a6a 100%)",Steel:"linear-gradient(180deg, #c8d4e0 0%, #6a7a8a 100%)",Mithril:"linear-gradient(180deg, #7eb8e8 0%, #2a5080 100%)",Adamant:"linear-gradient(180deg, #5ecf8a 0%, #1a5c38 100%)",Rune:"linear-gradient(180deg, #7ec8f0 0%, #2868a8 100%)",Dragon:"linear-gradient(180deg, #f0a050 0%, #8b2020 100%)"},fd="linear-gradient(180deg, #06c206 0%, #048004 100%)",pd="linear-gradient(180deg, #7ee8f0 0%, #1a7a8a 100%)",yR=[{slot:0,icon:me.surf.stanceGrind,features:"Rail · Coral",title:"Grind stance (1) — slide rails and brain coral"},{slot:1,icon:me.surf.stanceTuck,features:"Tunnel · Wall",title:"Tuck stance (2) — duck tunnels and wall rides"},{slot:2,icon:me.surf.stanceAir,features:"Jump",title:"Air stance (3) — launch off jumps"}];function md(n,t){const e=me;switch(t){case"toggle-full":{const i=n!=="seated";return{icon:i?e.surf.boardPlanted:e.surf.ride,title:i?"Stop":"Full speed ahead",disabled:!1,targetState:i?"seated":"riding"}}case"speed-down":return n==="riding"?{icon:e.chevron.down,title:"Slow down",disabled:!1,targetState:"paddling"}:n==="paddling"?{icon:e.chevron.downStop,title:"Stop",disabled:!1,targetState:"seated"}:n==="seated"?{icon:e.surf.reverse,title:"Reverse",disabled:!1,targetState:"reversing"}:{icon:e.surf.reverse,title:"Reverse",disabled:!0,targetState:null};case"speed-up":return n==="reversing"?{icon:e.surf.boardPlanted,title:"Stop",disabled:!1,targetState:"seated"}:n==="seated"?{icon:e.chevron.up,title:"Increase speed",disabled:!1,targetState:"paddling"}:n==="paddling"?{icon:e.chevron.upDouble,title:"Full speed",disabled:!1,targetState:"riding"}:{icon:e.chevron.up,title:"Full speed",disabled:!0,targetState:null}}}class ER{constructor(t,e){k(this,"root");k(this,"callbacks");k(this,"activeTab","board");k(this,"speedState","seated");this.root=t,this.callbacks=e,this.root.className="osrs-control-panel osrs-sailing-panel",this.root.innerHTML=this.renderShell(),this.bindEvents()}update(t){this.speedState=t.surfboard.speedState;const e=this.root.querySelector("#steering-icon"),i=this.root.querySelector("#steering-label"),s=t.surfboard.speedState!=="seated";e&&(e.src=s?me.sailing.steering:me.sailing.notSteering),i&&(i.textContent=s?"Steering":"Drifting"),this.updateNavButtons(t.surfboard.speedState);const r=this.root.querySelector("#board-tier-title");r&&(r.textContent=q_(t.progression.unlocked));const o=this.root.querySelector("#combo-bar-fill"),a=this.root.querySelector("#combo-label");if(o&&a){const _=t.progression.session.combo,M=P_(_);o.style.width=_>0?`${M/10*100}%`:"100%",o.style.background=_>0?MR[Fo(_)]:fd,a.textContent=_>0?`${_}x · ${Fo(_)} combo`:"Ready"}const l=this.root.querySelector("#surf-boost-bar"),c=this.root.querySelector("#surf-boost-bar-fill"),u=this.root.querySelector("#surf-boost-label"),d=t.trickSpeedBoostTicksRemaining;if(l&&c&&u){const _=d>0;l.classList.toggle("hidden",!_),_&&(c.style.width=`${d/wd*100}%`,c.style.background=pd,u.textContent=`Surf boost · ${d}`)}const h=t.progression.session;this.setText("#stats-combo",h.combo>0?`${h.combo} (${Fo(h.combo)})`:"0"),this.setText("#stats-max-combo",String(h.maxCombo)),this.setText("#stats-tricks",String(h.tricksLanded)),this.setText("#stats-tokens",String(t.progression.coralTokens)),this.syncTokenDisplay(t.progression.coralTokens);const f=t.boardMounted&&t.surfboard.speedState==="riding"&&t.trickAnimation===null;this.root.querySelectorAll("[data-prepare-slot]").forEach(_=>{var b;const M=Number(_.dataset.prepareSlot),y=t.trickPrepare!==null&&t.trickPrepare.slot===M&&t.trickPrepare.ticksSincePrepare>0;_.disabled=!f,_.classList.toggle("primed",y);const R=_.querySelector(".osrs-stance-ticks");R&&(R.textContent=((b=t.trickPrepare)==null?void 0:b.slot)===M?String(t.trickPrepare.ticksSincePrepare):"")});const g=this.root.querySelector("#stance-footnote");g&&(g.textContent=f?`Prime ${Qc}–${mo} ticks before the feature`:"Reach full speed to prime stances");const S=this.root.querySelector("#board-guidance");S&&S.classList.toggle("hidden",t.boardMounted);const m=this.root.querySelector("#board-mounted-controls");m&&m.classList.toggle("hidden",!t.boardMounted);const p=this.root.querySelector("#dismount-btn");p&&(p.disabled=!t.canDismountBoard)}setVisible(t){this.root.classList.toggle("hidden",!t)}renderShell(){const t=me;return`
      <div class="osrs-panel-chrome">
        <div class="osrs-panel-header">
          <img src="${t.surf.boardUpright}" alt="" class="osrs-panel-icon" width="18" height="18" />
          <span class="osrs-panel-title" id="board-tier-title">Camphor Board</span>
        </div>
        <div class="osrs-status-bar">
          <div class="osrs-status-bar-fill" id="combo-bar-fill" style="width: 100%; background: ${fd}"></div>
          <span class="osrs-status-bar-label" id="combo-label">Ready</span>
        </div>
        <div class="osrs-status-bar osrs-surf-boost-bar hidden" id="surf-boost-bar">
          <div class="osrs-status-bar-fill osrs-surf-boost-bar-fill" id="surf-boost-bar-fill" style="width: 100%; background: ${pd}"></div>
          <span class="osrs-status-bar-label" id="surf-boost-label">Surf boost</span>
        </div>
        <div class="osrs-tab-row">
          <button type="button" class="osrs-stone-tab active" data-tab="board" title="Surfboard">
            <img src="${t.sailing.tabFacilities}" alt="Surfboard" width="20" height="20" />
          </button>
          <button type="button" class="osrs-stone-tab" data-tab="stats" title="Session stats">
            <img src="${t.sailing.tabStats}" alt="Session stats" width="20" height="20" />
          </button>
          <button type="button" class="osrs-stone-tab" data-tab="rewards" title="Coral rewards">
            <img src="${t.sailing.tabCrew}" alt="Coral rewards" width="20" height="20" />
          </button>
        </div>
        <div class="osrs-tab-body active" data-panel="board">
          <p class="osrs-panel-footnote" id="board-guidance">Board your surfboard on the beach shore to begin.</p>
          <div id="board-mounted-controls">
            <p class="osrs-panel-section-title">Surfboard</p>
            <div class="osrs-nav-row">
              <button type="button" class="osrs-stone-sprite-btn" data-nav-btn="toggle-full" title="Full speed ahead">
                <img src="${t.surf.ride}" alt="" width="26" height="26" />
              </button>
              <button type="button" class="osrs-stone-sprite-btn" data-nav-btn="speed-down" title="Slow down">
                <img src="${t.chevron.down}" alt="" width="20" height="20" />
              </button>
              <button type="button" class="osrs-stone-sprite-btn" data-nav-btn="speed-up" title="Increase speed">
                <img src="${t.chevron.up}" alt="" width="20" height="20" />
              </button>
            </div>
            <div class="osrs-steering-row">
              <img src="${t.sailing.notSteering}" alt="" id="steering-icon" width="20" height="20" />
              <span id="steering-label">Drifting</span>
            </div>
            <p class="osrs-panel-section-title">Stance</p>
            <div class="osrs-stance-row">
              ${yR.map(e=>this.renderStanceButton(e)).join("")}
            </div>
            <p class="osrs-panel-footnote" id="stance-footnote">Reach full speed to prime stances</p>
            <button type="button" class="osrs-stone-btn" id="dismount-btn" disabled>Leave board on sand</button>
            <label class="osrs-check-row" title="Highlight the tile your character is actually on">
              <input type="checkbox" id="true-tile-toggle" />
              <span>True tile marker</span>
            </label>
          </div>
        </div>
        <div class="osrs-tab-body" data-panel="stats">
          <p class="osrs-panel-section-title">Session</p>
          <div class="osrs-stat-line">Combo: <span id="stats-combo">0</span></div>
          <div class="osrs-stat-line">Best combo: <span id="stats-max-combo">0</span></div>
          <div class="osrs-stat-line">Tricks landed: <span id="stats-tricks">0</span></div>
          <div class="osrs-stat-line">Coral Tokens: <span id="stats-tokens">0</span></div>
        </div>
        <div class="osrs-tab-body" data-panel="rewards">
          <p class="osrs-panel-section-title">Coral Token Shop</p>
          <div class="osrs-stat-line">Balance: <span id="coral-tokens-rewards">0</span></div>
          <button type="button" class="osrs-stone-btn" id="shop-btn">Open Reward Shop</button>
        </div>
      </div>
    `}renderStanceButton(t){return`
      <button type="button" class="osrs-stone-sprite-btn osrs-stance-btn" data-prepare-slot="${t.slot}" title="${t.title}">
        <span class="osrs-stance-ticks"></span>
        <img src="${t.icon}" alt="" width="24" height="24" />
        <span class="osrs-stance-name">${Cd(t.slot)}</span>
        <span class="osrs-stance-features">${t.features}</span>
      </button>
    `}bindEvents(){var i;for(const s of this.root.querySelectorAll(".osrs-stone-tab"))jn(s,()=>{const r=s.dataset.tab;this.activeTab=r,this.root.querySelectorAll(".osrs-stone-tab").forEach(o=>o.classList.remove("active")),s.classList.add("active"),this.root.querySelectorAll(".osrs-tab-body").forEach(o=>{o.classList.toggle("active",o.dataset.panel===r)})});this.root.querySelectorAll("[data-nav-btn]").forEach(s=>{jn(s,()=>{if(s.disabled)return;const r=s.dataset.navBtn,o=md(this.speedState,r);o.targetState&&this.callbacks.onSpeedState(o.targetState)})}),this.root.querySelectorAll("[data-prepare-slot]").forEach(s=>{jn(s,()=>{if(s.disabled)return;const r=Number(s.dataset.prepareSlot);this.callbacks.onPrepareTrick(r)})});const t=this.root.querySelector("#shop-btn");t instanceof HTMLElement&&jn(t,()=>{this.callbacks.onOpenShop()});const e=this.root.querySelector("#dismount-btn");e instanceof HTMLElement&&jn(e,()=>{e instanceof HTMLButtonElement&&e.disabled||this.callbacks.onDismountBoard()}),(i=this.root.querySelector("#true-tile-toggle"))==null||i.addEventListener("change",s=>{this.callbacks.onToggleTrueTile(s.target.checked)})}updateNavButtons(t){this.root.querySelectorAll("[data-nav-btn]").forEach(e=>{const i=e.dataset.navBtn,s=md(t,i);e.disabled=s.disabled,e.title=s.title;const r=e.querySelector("img");r&&(r.src=s.icon,r.alt=s.title),e.classList.toggle("active",i==="toggle-full"&&t==="riding")})}setText(t,e){const i=this.root.querySelector(t);i&&(i.textContent=e)}syncTokenDisplay(t){const e=this.root.querySelector("#coral-tokens-rewards");e&&(e.textContent=String(t))}}class TR{constructor(t,e){k(this,"root");k(this,"body");k(this,"onPurchase");k(this,"visible",!1);this.root=t,this.onPurchase=e,this.root.className="osrs-shop-panel hidden",this.root.innerHTML=`
      <div class="osrs-shop-header osrs-panel-header">
        <img src="${me.sailing.tabCrew}" alt="" width="20" height="20" />
        <span class="osrs-panel-title">Coral Rewards</span>
        <button type="button" class="osrs-shop-close" aria-label="Close reward shop">×</button>
      </div>
      <div class="osrs-shop-body"></div>
    `;const i=this.root.querySelector(".osrs-shop-body");if(!(i instanceof HTMLElement))throw new Error("Shop panel body element missing");this.body=i;const s=this.root.querySelector(".osrs-shop-close");s instanceof HTMLElement&&jn(s,()=>this.hide()),_R(this.body,"[data-unlock]",r=>{const o=r.getAttribute("data-unlock");o&&this.onPurchase(o)})}isVisible(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("hidden",!this.visible)}hide(){this.visible=!1,this.root.classList.add("hidden")}update(t){this.body.innerHTML=`
      <p class="osrs-stat-line">Coral Tokens: <strong>${t.coralTokens}</strong></p>
      <div class="osrs-shop-list">
        ${yo.map(e=>this.renderUnlock(e,t)).join("")}
      </div>
    `}renderUnlock(t,e){const i=e.unlocked.has(t.id),s=Mf(e,t),r=t.tokenCost===null?"Earn only":`${t.tokenCost} Coral Tokens`;let o;i?o="Unlocked":t.demoDisabled?o="Disabled for this demo":t.earnOnly?o="Earn only 1/500 from successful tricks":s.ok?o="Purchase":o=s.reason??"Locked";const a=i||!s.ok;return`
      <div class="osrs-shop-item">
        <div class="osrs-shop-item-title">${t.name}</div>
        <div class="osrs-shop-item-desc">${t.description}</div>
        <div class="osrs-shop-item-cost">${r}</div>
        <button type="button" class="osrs-stone-btn" data-unlock="${t.id}" ${a?"disabled":""}>
          ${o}
        </button>
      </div>
    `}}class bR{constructor(t){k(this,"root");this.root=t,this.root.className="osrs-control-panel osrs-skills-panel hidden",this.root.innerHTML=this.renderShell()}update(t){const e=t.progression.xp.agility,i=t.progression.xp.sailing;this.updateSkillRow("agility",Ya(e),jr(e).percent),this.updateSkillRow("sailing",qa(i),jr(i).percent);const s=this.root.querySelector("#tricks-landed");s&&(s.textContent=String(t.progression.session.tricksLanded));const r=this.root.querySelector("#coral-tokens");r&&(r.textContent=String(t.progression.coralTokens));const o=Ya(e)+qa(i),a=this.root.querySelector("#total-level");a&&(a.textContent=String(o))}setVisible(t){this.root.classList.toggle("hidden",!t)}renderShell(){const t=me;return`
      <div class="osrs-panel-chrome">
        <p class="osrs-section-label">Skills</p>
        <div class="osrs-stat-row">
          <img src="${t.skill.agility}" alt="" width="18" height="18" />
          <span id="agility-label">Agility 1</span>
          <div class="osrs-xp-track"><div class="osrs-xp-fill agility" id="agility-fill"></div></div>
        </div>
        <div class="osrs-stat-row">
          <img src="${t.skill.sailing}" alt="" width="18" height="18" />
          <span id="sailing-label">Sailing 1</span>
          <div class="osrs-xp-track"><div class="osrs-xp-fill sailing" id="sailing-fill"></div></div>
        </div>
        <div class="osrs-stat-line">Total level: <span id="total-level">2</span></div>
        <p class="osrs-section-label">Session</p>
        <div class="osrs-stat-line">Tricks: <span id="tricks-landed">0</span></div>
        <div class="osrs-stat-line">Coral Tokens: <span id="coral-tokens">0</span></div>
      </div>
    `}updateSkillRow(t,e,i){const s=this.root.querySelector(`#${t}-label`),r=this.root.querySelector(`#${t}-fill`);s&&(s.textContent=`${t==="agility"?"Agility":"Sailing"} ${e}`),r&&(r.style.width=`${i}%`)}}const AR=[{id:"combat",icon:me.tabs.combat,label:"Sailing Options"},{id:"stats",icon:me.tabs.stats,label:"Skills"},{icon:me.tabs.quests,label:"Quest List"},{icon:me.tabs.inventory,label:"Inventory"},{icon:me.tabs.equipment,label:"Worn Equipment"},{icon:me.tabs.prayer,label:"Prayer"},{icon:me.tabs.magic,label:"Magic"}],RR=[{icon:me.tabs.friends,label:"Friends List"},{icon:me.tabs.ignores,label:"Ignore List"},{icon:me.tabs.clanChannel,label:"Chat-channel"},{icon:me.tabs.accountManagement,label:"Account Management"},{icon:me.tabs.logout,label:"Logout"},{icon:me.tabs.options,label:"Settings"},{icon:me.tabs.emotes,label:"Emotes"}];class wR{constructor(t,e,i){k(this,"topRoot");k(this,"bottomRoot");k(this,"activeTab","combat");k(this,"onTabChange");this.topRoot=t,this.bottomRoot=e,this.onTabChange=i,this.render()}setActiveTab(t){this.activeTab=t,this.syncActiveState()}render(){this.topRoot.className="osrs-tab-strip osrs-tab-strip-top",this.bottomRoot.className="osrs-tab-strip osrs-tab-strip-bottom",this.topRoot.innerHTML='<div class="osrs-tab-strip-inner"></div>',this.bottomRoot.innerHTML='<div class="osrs-tab-strip-inner"></div>';const t=this.topRoot.querySelector(".osrs-tab-strip-inner"),e=this.bottomRoot.querySelector(".osrs-tab-strip-inner");if(!(!t||!e)){t.innerHTML=AR.map(i=>this.tabButtonHtml(i)).join(""),e.innerHTML=RR.map(i=>this.tabButtonHtml(i,!1)).join("");for(const i of t.querySelectorAll("[data-tab]")){const s=i.dataset.tab;s!=="combat"&&s!=="stats"||jn(i,()=>{this.activeTab=s,this.syncActiveState(),this.onTabChange(s)})}}}tabButtonHtml(t,e=!0){const i=e&&(t.id==="combat"||t.id==="stats");return`
      <button
        type="button"
        class="osrs-game-tab ${t.id===this.activeTab?"active":""}"
        title="${t.label}"
        ${t.id?`data-tab="${t.id}"`:""}
        ${i?"":"disabled"}
      >
        <img src="${t.icon}" alt="${t.label}" />
      </button>
    `}syncActiveState(){this.topRoot.querySelectorAll("[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===this.activeTab)})}}function gd(n){return n<=0?"0/h":n>=1e6?`${(n/1e6).toFixed(1)}M/h`:n>=1e4?`${Math.round(n/1e3)}k/h`:`${n.toLocaleString()}/h`}class CR{constructor(t){k(this,"root");this.root=t,this.root.className="osrs-viewport-xp-hud",this.root.innerHTML=this.renderShell()}update(t,e){const i=t.progression.xp.agility,s=t.progression.xp.sailing,r=jr(i),o=jr(s),a=e.rates();this.updateSkillRow("agility",r.level,r.percent,a.agility),this.updateSkillRow("sailing",o.level,o.percent,a.sailing);const l=this.root.querySelector("#viewport-total-xp-rate");l&&(l.textContent=gd(a.total))}renderShell(){const t=me;return`
      <div class="osrs-viewport-xp-hud-panel">
        <div class="osrs-viewport-xp-row">
          <img src="${t.skill.agility}" alt="" width="16" height="16" />
          <span class="osrs-viewport-xp-label" id="viewport-agility-label">Agility 1</span>
          <div class="osrs-viewport-xp-track">
            <div class="osrs-viewport-xp-fill agility" id="viewport-agility-fill"></div>
          </div>
          <span class="osrs-viewport-xp-rate" id="viewport-agility-rate">0/h</span>
        </div>
        <div class="osrs-viewport-xp-row">
          <img src="${t.skill.sailing}" alt="" width="16" height="16" />
          <span class="osrs-viewport-xp-label" id="viewport-sailing-label">Sailing 1</span>
          <div class="osrs-viewport-xp-track">
            <div class="osrs-viewport-xp-fill sailing" id="viewport-sailing-fill"></div>
          </div>
          <span class="osrs-viewport-xp-rate" id="viewport-sailing-rate">0/h</span>
        </div>
        <div class="osrs-viewport-xp-total">
          Total <span id="viewport-total-xp-rate">0/h</span>
        </div>
      </div>
    `}updateSkillRow(t,e,i,s){const r=this.root.querySelector(`#viewport-${t}-label`),o=this.root.querySelector(`#viewport-${t}-fill`),a=this.root.querySelector(`#viewport-${t}-rate`);r&&(r.textContent=`${t==="agility"?"Agility":"Sailing"} ${e}`),o&&(o.style.width=`${i}%`),a&&(a.textContent=gd(s))}}const PR=5*6e4,IR=1e3;class LR{constructor(){k(this,"samples",[])}record(t,e,i=performance.now()){t<=0&&e<=0||(this.samples.push({at:i,agility:t,sailing:e}),this.prune(i))}rates(t=performance.now()){if(this.prune(t),this.samples.length===0)return{agility:0,sailing:0,total:0};let e=0,i=0;for(const a of this.samples)e+=a.agility,i+=a.sailing;const s=this.samples[0].at,o=Math.max(t-s,IR)/36e5;return{agility:Math.round(e/o),sailing:Math.round(i/o),total:Math.round((e+i)/o)}}prune(t){const e=t-PR;for(;this.samples.length>0&&this.samples[0].at<e;)this.samples.shift()}}const _d=32,DR=.5;function NR(){const n=window.innerWidth-_d,t=window.innerHeight-_d;return Math.max(DR,Math.min(n/Ul,t/Fl))}function xd(n,t){const e=NR();return n.style.width=`${Ul*e}px`,n.style.height=`${Fl*e}px`,t.style.transform=`scale(${e})`,t.style.transformOrigin="top left",e}const UR={Digit1:0,Digit2:1,Digit3:2},FR=["Click the ground to walk. Click Kaulu to talk.","Click your surfboard on the sand ring to paddle out.","Prime Grind, Tuck, or Air stance 1–5 ticks before you hit the matching coral feature."];class Wl{constructor(t,e,i,s,r,o,a,l,c,u){k(this,"simulation");k(this,"renderer");k(this,"chatbox");k(this,"sailingPanel");k(this,"skillsPanel");k(this,"viewportXpHud");k(this,"xpRateTracker",new LR);k(this,"tabStrip");k(this,"shopPanel");k(this,"debugPanel");k(this,"minimap");k(this,"unbindPointer",null);k(this,"visualFrameId",null);k(this,"lastVisualFrameMs",0);k(this,"lastSimTickTimeMs",0);k(this,"motion",new uR);k(this,"tidePhaseFrom",null);k(this,"paused",!1);k(this,"lastDisplayPosition",{x:0,y:0});k(this,"lastTickBlend",0);k(this,"lastSavedProgressionFingerprint","");k(this,"onKeyDown",t=>{if(this.renderer.handleKeyDown(t)){t.preventDefault();return}const e=UR[t.code];e!==void 0&&(t.preventDefault(),this.simulation.prepareTrick(e))});k(this,"onKeyUp",t=>{this.renderer.handleKeyUp(t)&&t.preventDefault()});this.simulation=t,this.renderer=e,this.chatbox=i,this.sailingPanel=s,this.skillsPanel=r,this.viewportXpHud=o,this.tabStrip=a,this.shopPanel=l,this.debugPanel=c,this.minimap=u}static async mount(){var G;const t=document.getElementById("osrs-scale-shell"),e=document.getElementById("osrs-scale-wrap");t&&e&&(xd(t,e),window.addEventListener("resize",()=>xd(t,e)));const i=new URLSearchParams(window.location.search).get("arena")==="animtest",s=i?null:Z_(),r=new K_({arena:i?__():c_(),initialProgression:s??void 0}),o=document.getElementById("game-root"),a=document.getElementById("viewport-xp-hud"),l=document.getElementById("sailing-panel"),c=document.getElementById("skills-panel"),u=document.getElementById("shop-panel"),d=document.getElementById("debug-panel"),h=document.getElementById("chatbox-root"),f=document.getElementById("tab-strip-top"),g=document.getElementById("tab-strip-bottom"),S=document.getElementById("minimap-map"),m=document.getElementById("minimap-compass"),p=document.getElementById("minimap-frame");if(!o||!a||!l||!c||!u||!d||!h||!f||!g||!S||!m||!p)throw new Error("Missing required DOM elements");const _=new cR;await _.init(o,1),_.setVillageVisible(!i);const M=new SR(S,m,p,()=>_.snapCameraNorth()),y=new gR(h);for(const U of FR)y.push(U,"game");const R={turnRate:ti.turnRateDegPerTick,speedPaddle:ti.speedPaddle,speedRide:ti.speedRide};r.setStats({turnRateDegPerTick:R.turnRate,speedPaddle:R.speedPaddle,speedRide:R.speedRide});const b=new dR(d,R,U=>{r.setStats({turnRateDegPerTick:U.turnRate,speedPaddle:U.speedPaddle,speedRide:U.speedRide})}),C={sailing:null,skills:null},v=new TR(u,U=>{var dt,xt;const j=r.tryPurchaseUnlock(U);j&&y.push(j,"system");const nt=r.getSnapshot();yu(nt.progression),v.update(nt.progression),(dt=C.sailing)==null||dt.update(nt),(xt=C.skills)==null||xt.update(nt)}),A=new bR(c),I=new CR(a);C.skills=A;const w=new ER(l,{onSpeedState:U=>r.setSpeedState(U),onOpenShop:()=>{v.toggle(),v.update(r.getSnapshot().progression)},onPrepareTrick:U=>r.prepareTrick(U),onToggleTrueTile:U=>_.setTrueTileVisible(U),onDismountBoard:()=>{const U=r.tryDismountBoard();U&&y.push(U,"system")}});C.sailing=w;const O=(U,j)=>{w.setVisible(U==="combat"),A.setVisible(U==="stats"),j.setActiveTab(U)},W=new wR(f,g,U=>O(U,W)),X=new Wl(r,_,y,w,A,I,W,v,b,M);O("combat",W);const N=r.getSnapshot();return s&&X.seedProgressionFingerprint(N.progression),X.motion.reset(N),X.tidePhaseFrom=((G=N.tide)==null?void 0:G.phaseRadians)??null,X.wireViewport(),X.startTickLoop(),i||r.queueIntroSurf(),window.addEventListener("keydown",X.onKeyDown),window.addEventListener("keyup",X.onKeyUp),window.addEventListener("beforeunload",()=>X.destroy()),X}wireViewport(){this.unbindPointer=this.renderer.bindPointerInput((t,e)=>{if(Number.isNaN(t)){this.simulation.clearCursor();return}this.simulation.setCursor(t,e)},(t,e)=>{this.simulation.clickWorld(t,e)})}setPaused(t){if(this.paused=t,!t){const e=performance.now();this.lastVisualFrameMs=e,this.lastSimTickTimeMs=e}}resetTickBlendTimer(){this.lastSimTickTimeMs=performance.now(),this.lastTickBlend=0}startTickLoop(){const t=performance.now();this.lastVisualFrameMs=t,this.lastSimTickTimeMs=t,this.visualFrameId=requestAnimationFrame(e=>this.onVisualFrame(e))}onGameTick(){var s;const t=this.simulation.getSnapshot();this.tidePhaseFrom=((s=t.tide)==null?void 0:s.phaseRadians)??null,this.simulation.setCameraFacing(this.renderer.getViewFacingRadians()),this.simulation.tick();const e=this.simulation.getSnapshot();this.motion.onSimulationTick(t,e);const i=this.simulation.getArena().map;this.renderer.syncMapAfterTick(e,i),this.sailingPanel.update(e),this.skillsPanel.update(e),this.viewportXpHud.update(e,this.xpRateTracker),this.shopPanel.isVisible()&&this.shopPanel.update(e.progression),this.persistProgressionIfChanged(e.progression),this.debugPanel.update(e);for(const r of this.simulation.consumeDialogue())this.chatbox.push(r,"game");for(const r of this.simulation.consumeXpDrops()){this.xpRateTracker.record(r.agility,r.sailing);const o=r.tokens>0?` +${r.tokens} Tokens`:"";this.renderer.showXpDrop(`+${r.agility} Agil +${r.sailing} Sail${o}`,r.x,r.y);const a=r.tokens>0?`, +${r.tokens} Coral Tokens`:"";this.chatbox.push(`+${r.agility} Agility XP, +${r.sailing} Sailing XP${a}`,"xp")}}onVisualFrame(t){if(!this.paused){const e=this.simulation.tickMs;t-this.lastSimTickTimeMs>=e&&(this.onGameTick(),this.lastSimTickTimeMs+=e,t-this.lastSimTickTimeMs>=e&&(this.lastSimTickTimeMs=t));const i=Math.min(1,Math.max(0,(t-this.lastSimTickTimeMs)/e));this.renderVisuals(t,i)}this.lastVisualFrameMs=t,this.visualFrameId=requestAnimationFrame(e=>this.onVisualFrame(e))}renderVisuals(t=performance.now(),e=0){const i=this.simulation.getSnapshot(),s=this.simulation.getArena().map;this.motion.ensureSynced(i);const r=this.motion.buildDisplaySnapshot(i,this.tidePhaseFrom,e);this.lastDisplayPosition={...r.surfboard.position},this.lastTickBlend=e,this.renderer.render(r,s,t,e),this.viewportXpHud.update(i,this.xpRateTracker),this.minimap.update(r,s),this.minimap.setCompassRotation(this.renderer.getCompassRotationRadians())}renderFrame(){this.renderVisuals(performance.now(),this.lastTickBlend)}getDisplayPosition(){return{...this.lastDisplayPosition}}getTickBlend(){return this.lastTickBlend}setTickBlend(t){this.lastTickBlend=Math.min(1,Math.max(0,t))}seedProgressionFingerprint(t){this.lastSavedProgressionFingerprint=this.progressionFingerprint(t)}progressionFingerprint(t){return JSON.stringify({xp:t.xp,coralTokens:t.coralTokens,unlocked:[...t.unlocked].sort(),combo:t.session.combo,maxCombo:t.session.maxCombo,tricksLanded:t.session.tricksLanded})}persistProgressionIfChanged(t){const e=this.progressionFingerprint(t);e!==this.lastSavedProgressionFingerprint&&(this.lastSavedProgressionFingerprint=e,yu(t))}destroy(){var t;this.persistProgressionIfChanged(this.simulation.getSnapshot().progression),this.visualFrameId!==null&&cancelAnimationFrame(this.visualFrameId),(t=this.unbindPointer)==null||t.call(this),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.destroy()}}const jt=n=>`${n}px`;function OR(){const n=document.documentElement,t={"--osrs-frame-width":jt(Ul),"--osrs-frame-height":jt(Fl),"--osrs-window-top-height":jt(qT),"--osrs-grid-height":jt(gp),"--osrs-viewport-width":jt(Zi),"--osrs-viewport-height":jt(xi),"--osrs-chat-height":jt(mp),"--osrs-chat-messages-height":jt(fp),"--osrs-chat-stones-height":jt(pp),"--osrs-sidebar-width":jt(dp),"--osrs-sidebar-content-left":jt(or),"--osrs-minimap-height":jt(_p),"--osrs-minimap-left-edge":jt(xp),"--osrs-minimap-right-edge":jt(KT),"--osrs-minimap-frame-left":jt(Ol),"--osrs-minimap-frame-width":jt(ZT),"--osrs-minimap-frame-height":jt($T),"--osrs-minimap-map-left":jt(tb),"--osrs-minimap-map-top":jt(QT),"--osrs-minimap-map-size":jt(Yi),"--osrs-minimap-compass-left":jt(eb),"--osrs-minimap-compass-top":jt(nb),"--osrs-minimap-compass-size":jt(ib),"--osrs-minimap-bottom-left":jt(rb),"--osrs-minimap-bottom-width":jt(sb),"--osrs-minimap-bottom-height":jt(JT),"--osrs-tab-strip-width":jt(ob),"--osrs-tab-strip-left":jt(ab),"--osrs-tab-slot-count":String(lb),"--osrs-tab-bar-height":jt(vp),"--osrs-sidebar-body-height":jt(Sp),"--osrs-interface-panel-height":jt(Mp),"--osrs-interface-row-width":jt(Tp),"--osrs-interface-row-left":jt(hb),"--osrs-side-panel-edge-width":jt(yp),"--osrs-side-panel-width":jt(Ep),"--osrs-side-panel-height":jt(ub)};for(const[e,i]of Object.entries(t))n.style.setProperty(e,i)}const kR={"--osrs-url-window-top":"fixed_mode/window_frame_edge_top.png","--osrs-url-top-right-corner":"fixed_mode/top_right_corner.png","--osrs-url-chatbox-bg":"chatbox/background.png","--osrs-url-minimap-left":"fixed_mode/minimap_left_edge.png","--osrs-url-minimap-right":"fixed_mode/minimap_right_edge.png","--osrs-url-minimap-frame":"fixed_mode/minimap_and_compass_frame.png","--osrs-url-minimap-bottom":"fixed_mode/minimap_frame_bottom.png","--osrs-url-tabs-top":"fixed_mode/tabs_top_row.png","--osrs-url-tabs-bottom":"fixed_mode/tabs_row_bottom.png","--osrs-url-tab-selected":"tab_stone_middle_selected.png","--osrs-url-side-panel":"fixed_mode/side_panel_background.png","--osrs-url-side-panel-edge-left":"side_panel_edge_left.png","--osrs-url-side-panel-edge-right":"side_panel_edge_right.png","--osrs-url-stone-btn":"button/stone_button_9slice.png","--osrs-url-stone-btn-hovered":"button/stone_button_9slice_hovered.png","--osrs-url-stone-btn-disabled":"button/stone_button_9slice_disabled.png","--osrs-url-stone-tab":"chatbox/button.png","--osrs-url-stone-tab-hovered":"chatbox/button_hovered.png","--osrs-url-stone-tab-selected":"chatbox/button_selected.png"};function BR(){const n=document.documentElement;for(const[t,e]of Object.entries(kR))n.style.setProperty(t,`url("${ce(e)}")`)}BR();OR();HR();Wl.mount().catch(n=>{console.error(n)});function HR(){const n=document.getElementById("demo-notice-main"),t=document.getElementById("demo-notice-close");!n||!t||t.addEventListener("click",()=>{n.classList.add("hidden")})}
