var wp=Object.defineProperty;var Cp=(n,t,e)=>t in n?wp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var B=(n,t,e)=>Cp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xe=16,io=360/Xe,Pp=600,Ip=22.5,Rs=2,Lp=2,td=2.5,Dp=2.75,Np=3;function so(n){return n*Rs}function Gl(n){return n/Rs}const Up=so(Lp),ed=so(td),Op=so(Dp),Fp=so(Np),ti={turnRateDegPerTick:Ip,speedPaddle:Up,speedRide:ed},nd=280,id=224,sn=nd/2,rn=id/2,sd=20,kp=26,Bp=30,Uc=33,Hp=36,rd=Uc+Hp,Gp=8,zp=8.25,Vp=8.5,Wp=8.75,Xp=7,Yp=-.9,qp=.55,Kp=8,Zp=2.3,$p=.45,Jp=4,jp=7;function zl(n,t,e){let i=n-t;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return Math.exp(-(i*i)/(2*e*e))}function Qp(n,t){const e=.26*Math.sin(n+.7)+.5*Math.sin(n*2+.55)+.34*Math.sin(n*3+1.85)+.18*Math.sin(n*5+.95)+.08*Math.sin(n*8+2.6),i=t*e-Kp*zl(n,Yp,qp)+Jp*zl(n,Zp,$p);return Math.max(i,jp-sd)}function ro(n,t,e){return t+Qp(n,e)}function tm(n,t,e){return t+e*(.38*Math.sin(n+2.35)+.27*Math.sin(n*3+.15)+.2*Math.sin(n*6+3.05)+.15*Math.sin(n*9+1.2))}function Oc(n){return ro(n,sd,Gp)}function Br(n){return ro(n,kp,zp)}function em(n){return ro(n,Bp,Vp)}function Hr(n){return ro(n,Uc,Wp)}function Ls(n){return tm(n,rd,Xp)}function nm(n,t){return Math.atan2(t-rn+.5,n-sn+.5)}function im(n,t){return Math.hypot(n-sn+.5,t-rn+.5)}const od=.1,ys=.25,ad=1.8;function sm(){return`${od}|${ys}|${ad}`}function pi(n,t,e){const i=Math.atan2(t-rn,n-sn),s=Math.hypot(n-sn,t-rn),r=Oc(i),o=Br(i);if(e==="grass"){const c=r>0?Math.min(1,s/r):1,u=(1-c)*(1-c);return ys+u*(ad-ys)}const a=o-r,l=a>0?Math.min(1,Math.max(0,(s-r)/a)):1;return ys+l*(od-ys)}const cd=Uc,ld=rd,Fc=1,oo=5,rm=1.5,om=14,am=Math.PI*2,cm=(cd+ld)/2,lm=1.35,um=cm*(am/om),hm=um/td,ud=Math.ceil(hm*lm),dm=["Grind","Tuck","Air"];function hd(n){return dm[n]}function kc(n){const t=n%360;return t<0?t+360:t}function qe(n){return kc(n*io)}function fm(n){const t=kc(n);return Math.round(t/io)%Xe}function nn(n){const t=kc(n*180/Math.PI);return fm(t)}function Bc(n){const t=qe(n)*Math.PI/180;return{x:Math.cos(t),y:Math.sin(t)}}function pm(n,t){let e=(t-n)%Xe;return e>Xe/2&&(e-=Xe),e<-Xe/2&&(e+=Xe),e}function mm(n,t,e){const i=pm(n,t);if(i===0)return n;const s=Math.max(1,Math.round(e/io)),r=Math.sign(i)*Math.min(Math.abs(i),s);return(n+r+Xe)%Xe}function ba(n,t,e){const i=Math.min(1,Math.max(0,e)),s=qe(n);let o=qe(t)-s;return o>180&&(o-=360),o<-180&&(o+=360),(s+o*i)/io}function dd(n){return n==="grass"||n==="sand"}function gm(n){return n==="deep_water"||n==="shallow"||n==="tide_zone"}function fd(n){return n==="sand"||n==="deep_water"||n==="shallow"||n==="coral_rideable"||n==="tide_zone"}function pd(n,t,e){const i=Array.from({length:t},()=>Array.from({length:n},()=>e));return{widthTiles:n,heightTiles:t,tiles:i,blockedQuarters:new Set}}function Es(n,t,e,i){e<0||e>=n.heightTiles||t<0||t>=n.widthTiles||(n.tiles[e][t]=i)}function Ze(n,t,e){return e<0||e>=n.heightTiles||t<0||t>=n.widthTiles?null:n.tiles[e][t]}function _m(n,t,e){const i=Math.floor(t),s=Math.floor(e),r=Ze(n,i,s);return r===null?!1:gm(r)}function qs(n,t,e){const i=Ze(n,Math.floor(t),Math.floor(e));return i===null?!1:fd(i)&&i!=="grass"}const xm=[{tx:1,ty:0},{tx:-1,ty:0},{tx:0,ty:1},{tx:0,ty:-1}],vm=[{tx:1,ty:1},{tx:1,ty:-1},{tx:-1,ty:1},{tx:-1,ty:-1}];function Pr(n,t,e){const i=Ze(n,t,e);return i===null?!1:dd(i)}function Sm(n,t,e,i,s){if(!Pr(n,i,s))return!1;const r=i-t,o=s-e;return r===0||o===0?!0:Pr(n,t+r,e)&&Pr(n,t,e+o)}function To(n,t){return`${n},${t}`}function Mm(n,t,e,i,s){if(!Pr(n,i,s))return null;if(t===i&&e===s)return[{tx:t,ty:e}];const r=[{tx:t,ty:e}],o=new Map;for(o.set(To(t,e),null);r.length>0;){const a=r.shift();if(a.tx===i&&a.ty===s){const c=[];let u=a;for(;u;)c.push(u),u=o.get(To(u.tx,u.ty))??null;return c.reverse(),c}const l=[...xm,...vm];for(const c of l){const u=a.tx+c.tx,d=a.ty+c.ty,h=To(u,d);o.has(h)||Sm(n,a.tx,a.ty,u,d)&&(o.set(h,a),r.push({tx:u,ty:d}))}}return null}function ym(n,t){return{x:n+.5,y:t+.5}}const Em=2;function bm(n,t,e,i=!0){return{path:n,pathIndex:n.length>1?1:0,running:i,walkTickCounter:0,targetTx:t,targetTy:e}}function Tm(n,t,e){const i=Ze(n,Math.floor(t),Math.floor(e));return i===null?!1:dd(i)}function Am(n,t,e,i){const s=Math.floor(e),r=Math.floor(i);if(!Tm(n,e,i))return null;const o=Math.floor(t.x),a=Math.floor(t.y),l=Mm(n,o,a,s,r);return l?bm(l,s,r):null}function Rm(n,t,e){if(e.pathIndex>=e.path.length)return{position:n,heading:t,walk:null,moved:!1};if(!e.running&&(e.walkTickCounter+=1,e.walkTickCounter%Em!==0))return{position:n,heading:t,walk:e,moved:!1};const i=e.path[e.pathIndex],s=ym(i.tx,i.ty),r=nn(Math.atan2(s.y-n.y,s.x-n.x)),o={...e,pathIndex:e.pathIndex+1},a=o.pathIndex>=o.path.length;return{position:s,heading:r,walk:a?null:o,moved:!0}}function md(n,t,e=0){return{position:{x:n,y:t},currentHeading:e,intendedHeading:e,speedState:"seated",isRotating:!1}}function wm(n,t,e,i){const s=Math.atan2(i-t,e-n);return nn(s)}function Cm(n,t){return n.speedState==="paddling"?t.speedPaddle/Rs:n.speedState==="riding"?t.speedRide/Rs:n.speedState==="reversing"?-t.speedPaddle/Rs:0}function Pm(n,t){const e={...n};return t.setIntendedHeading!==void 0&&(e.intendedHeading=t.setIntendedHeading,e.isRotating=e.intendedHeading!==e.currentHeading),t.startPaddle&&(e.speedState="paddling"),t.standUp&&e.speedState!=="seated"&&(e.speedState="riding"),t.lieDown&&e.speedState==="riding"&&(e.speedState="paddling"),t.reverse&&e.speedState==="seated"&&(e.speedState="reversing"),t.stop&&(e.speedState="seated"),e}function Im(n,t,e){const i=Ze(n,Math.floor(t),Math.floor(e));return i===null?!0:!fd(i)}function Hc(n,t,e={},i=ti){const s=Pm(n,e);let r=!1,o=!1,a=!1;const l=s.currentHeading;s.isRotating&&(s.currentHeading=mm(s.currentHeading,s.intendedHeading,i.turnRateDegPerTick),s.isRotating=s.currentHeading!==s.intendedHeading,a=s.currentHeading!==l);const c=Cm(s,i);if(c!==0){const u=Bc(s.currentHeading),d=s.position.x+u.x*c,h=s.position.y+u.y*c;Im(t,d,h)?o=!0:(s.position={x:d,y:h},r=!0)}return{state:s,moved:r,collided:o,headingChanged:a}}function Lm(){return{ticksRemaining:ud}}function gd(){return Lm()}function _d(n,t){return!t||t.ticksRemaining<=0?n:{...n,speedRide:n.speedRide*rm}}function xd(n,t){const e=n.ticksRemaining-1;return e>0?{ticksRemaining:e}:null}const Dm=1,Gr=.55,Nm=.12,Um=2.2,Om=.08,vd=.08;function Fm(){return Dm*Gr/(Gr+Nm)+Om}const Gc=.6,ao=.14,Sd=3.25,Md=ao,km=.06,Bm=.04,Vl=.5,Hm={rail:1.15,jump:Fm(),brain_coral:.8,wall_ride:.675},Gm={rail:.45,jump:Um/2,brain_coral:.8,wall_ride:.17},Wl={rail:.54,jump:Gr+vd,brain_coral:.8,wall_ride:1.09},Xl={rail:.27,jump:(Gr+vd)/2,brain_coral:.4,wall_ride:.55};function zm(){const n=Gc,t=ao,e=Sd,i=Md,s=Bm,r=i+n+t;return{halfAlongRide:t*e+s,halfLateral:n+t+s,height:r+s,centerY:r/2}}function zc(n,t){if(n==="tunnel"){const s=zm();return{halfAlongRide:t*s.halfAlongRide,halfLateral:t*s.halfLateral,height:t*s.height,centerY:t*s.centerY}}const e=t*Hm[n],i=t*Gm[n];return n==="wall_ride"?{halfAlongRide:e+Vl,halfLateral:i+Vl,height:t*Wl[n],centerY:t*Xl[n]}:{halfAlongRide:e,halfLateral:i,height:t*Wl[n],centerY:t*Xl[n]}}function yd(n){const t=zc(n.type,n.radius);return Math.max(t.halfAlongRide,t.halfLateral)}function Ta(n,t){const e=t.x-n.center.x,i=t.y-n.center.y,s=Math.cos(n.rotationRadians),r=Math.sin(n.rotationRadians);return{alongRide:e*s+i*r,lateral:-e*r+i*s}}function Aa(n,t){const{halfAlongRide:e,halfLateral:i}=zc(n.type,n.radius),s=Ta(n,t);return Math.abs(s.alongRide)<=e&&Math.abs(s.lateral)<=i}function Vm(n,t,e,i){const s=t.alongRide-n.alongRide,r=t.lateral-n.lateral;let o=0,a=1;const l=(c,u)=>{if(c===0)return u>=0;const d=u/c;if(c<0){if(d>a)return!1;d>o&&(o=d)}else{if(d<o)return!1;d<a&&(a=d)}return!0};return!l(-s,n.alongRide+e)||!l(s,e-n.alongRide)||!l(-r,n.lateral+i)||!l(r,i-n.lateral)?!1:o<=a}function Wm(n,t,e){if(Aa(n,t)||Aa(n,e))return!0;if(t.x===e.x&&t.y===e.y)return!1;const{halfAlongRide:i,halfLateral:s}=zc(n.type,n.radius);return Vm(Ta(n,t),Ta(n,e),i,s)}const Xm=.92,Ds=2;function Ym(n,t){const e=me(n),i=me(t);return e<=i?i-e:zr-e+i}function Ed(n,t){const e=Ad(n);return Ym(t.phaseRadians,e)<=t.advancePerTick*Ds+1e-9}function bd(n,t,e=0){if(!t||!ii(n,t))return 1;const i=Math.atan2(n.center.y-t.centerY,n.center.x-t.centerX);if(n.spawnedAtHighTide){if(!Ed(i,t))return 0;const r=(n.emergedRenderTicks??0)+e;return Math.min(1,r/Ds)}const s=(n.submergedRenderTicks??0)+e;return Math.max(0,1-Math.min(1,s/Ds))}function qm(n,t,e=0){return!t||!ii(n,t)?0:1-bd(n,t,e)}function Km(n,t){return n.map(e=>{if(!ii(e,t))return e.submergedRenderTicks===void 0&&e.emergedRenderTicks===void 0?e:{...e,submergedRenderTicks:void 0,emergedRenderTicks:void 0};const i=Math.atan2(e.center.y-t.centerY,e.center.x-t.centerX);if(e.spawnedAtHighTide){if(!Ed(i,t))return e.emergedRenderTicks===void 0?e:{...e,emergedRenderTicks:void 0};const r=e.emergedRenderTicks;return r===void 0?{...e,emergedRenderTicks:0,submergedRenderTicks:void 0}:r>=Ds?e:{...e,emergedRenderTicks:r+1}}const s=e.submergedRenderTicks;return s===void 0?{...e,submergedRenderTicks:0,emergedRenderTicks:void 0}:s>=Ds?e:{...e,submergedRenderTicks:s+1,emergedRenderTicks:void 0}})}const zr=Math.PI*2,Zm=.05;function $m(n){return{centerX:n.centerX,centerY:n.centerY,innerRadius:n.innerRadius,outerRadius:n.outerRadius,sweepRadians:n.sweepRadians,phaseRadians:0,advancePerTick:n.advancePerTick??Zm,innerRadiusAtAngle:n.innerRadiusAtAngle,outerRadiusAtAngle:n.outerRadiusAtAngle}}function Jm(n){return{...n,phaseRadians:me(n.phaseRadians+n.advancePerTick)}}function me(n){const t=n%zr;return t<0?t+zr:t}function Td(n,t,e){const i=me(t),s=me(t+e),r=me(n);return i<=s?r>=i&&r<=s:r>=i||r<=s}function ns(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.3||r>l+.4?!1:Td(o,e.phaseRadians,e.sweepRadians)}function ii(n,t){return ns(n.center.x,n.center.y,t)}function jm(n){return me(n.phaseRadians+n.sweepRadians)}function Qm(n,t){return me(n-t.sweepRadians/2)}function tg(n,t){return me(n-t.sweepRadians)}function Ad(n){return me(n)}function eg(n,t){return ng(tg(n,t),Qm(n,t),Xm)}function Yl(n,t){const e=eg(n,t),i=Ad(n);return ig(t.phaseRadians,e,i)}function ng(n,t,e){const i=me(n),s=me(t);if(i<=s)return me(i+(s-i)*e);const r=zr-i+s;return me(i+r*e)}function ig(n,t,e){const i=me(n),s=me(t),r=me(e);return s<=r?i>=s&&i<=r:i>=s||i<=r}function Vr(n,t){return me(t-n)}function Rd(n,t,e,i){let s=null,r=1/0;for(const o of n){if(o.tricked||e&&ii(o,e))continue;const a=t.x-o.center.x,l=t.y-o.center.y,c=Math.sqrt(a*a+l*l);(i!==void 0?Wm(o,i,t):Aa(o,t))&&c<r&&(s=o,r=c)}return s}function sg(n){return n.ticksSincePrepare>=Fc&&n.ticksSincePrepare<=oo}function Wr(n){if(!n)return null;const t=n.ticksSincePrepare+1;return t>oo?null:{...n,ticksSincePrepare:t}}function rg(n,t){return n.map(e=>e.id===t?{...e,tricked:!0}:e)}const og=Math.PI*2,Ir=.12,Ra=2.6,wa=4.4,is=wa*1.12,ql=.3,Kl=.1;function ag(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function wd(n){const t=is;if(n<=ql)return t*ag(n/ql);const e=1-Kl;if(n<=e)return t;const i=(n-e)/Kl;return t*(1-i)}function Vc(n,t){const e=Pd(n,t);return e===null?0:wd(e)}function Cd(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.5||r>l+.5?0:Vc(o,e)}function Pd(n,t){if(!Td(n,t.phaseRadians,t.sweepRadians))return null;const e=me(t.phaseRadians),i=me(n),s=me(e+t.sweepRadians);return e<=s||i>=e?(i-e)/t.sweepRadians:(og-e+i)/t.sweepRadians}function Id(n,t){const e=Pd(n,t);return e===null?0:Math.sin(Math.PI*e)}function cg(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.5||r>l+.5?0:Id(o,e)}function Wc(n,t,e){if(!e)return Ir;const i=Cd(n,t,e);if(i<=0)return Ir;const s=cg(n,t,e),r=Ir-s*Ra,o=Math.min(1,s+i/is);return r+o*(i-r)}const lg=2,Un=.28,ug={rail:1.85,jump:1.65,tunnel:1.75,wall_ride:1.55,brain_coral:1.2},hg=.46;function dg(n){const t=n.rotationRadians,e=Math.cos(t),i=Math.sin(t);return{x:e,y:i}}function Ns(n,t,e,i){return n*e+t*i}const fg=.05;function pg(n,t,e){const i=dg(n),s=Bc(e),r=Ns(s.x,s.y,i.x,i.y);if(Math.abs(r)>=fg)return r>=0?i:{x:-i.x,y:-i.y};const o={x:t.x-n.center.x,y:t.y-n.center.y};return Ns(o.x,o.y,i.x,i.y)<=0?i:{x:-i.x,y:-i.y}}function mg(n,t,e){const i={x:t.x-n.center.x,y:t.y-n.center.y},s=Ns(i.x,i.y,e.x,e.y);return{x:n.center.x+e.x*s,y:n.center.y+e.y*s}}function gg(n){return nn(Math.atan2(n.y,n.x))}function _g(n){return{x:-n.y,y:n.x}}function xg(n,t,e){const i=_g(e),s={x:t.x-n.center.x,y:t.y-n.center.y},r=Ns(s.x,s.y,i.x,i.y);return Math.abs(r)<.01||r>=0?1:-1}function Zl(n,t,e){return{x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e}}function Ld(n){return n?{type:n.type,zoneRadius:n.zoneRadius,zoneCenter:{...n.zoneCenter},rotationRadians:n.rotationRadians,rideSide:n.rideSide,entry:{...n.entry},start:{...n.start},end:{...n.end},ticksElapsed:n.ticksElapsed,ticksTotal:n.ticksTotal}:null}function Dd(n,t){const e=Math.min(1,Math.max(0,t));if(e<=Un){const s=e/Un;return Zl(n.entry,n.start,s)}const i=(e-Un)/(1-Un);return Zl(n.start,n.end,i)}function vg(n,t,e,i){const r=t.radius*ug[t.type]*hg,o=-r,a=r,l=mg(t,e,i),c=Ns(l.x-t.center.x,l.y-t.center.y,i.x,i.y),u=Math.max(o,Math.min(c,a)),d={x:t.center.x+i.x*u,y:t.center.y+i.y*u};for(let h=4;h>=1;h-=1){const f=h/4,g=u+(a-u)*f,M=t.center.x+i.x*g,p=t.center.y+i.y*g;if(qs(n,M,p))return{start:d,end:{x:M,y:p}}}return{start:d,end:{...d}}}function Nd(n,t,e,i){const s=pg(t,e,i),r=gg(s),{start:o,end:a}=vg(n,t,e,s);return{zoneId:t.id,type:t.type,zoneRadius:t.radius,zoneCenter:{...t.center},rotationRadians:t.rotationRadians,rideSide:xg(t,e,s),entry:{...e},entryHeading:i,start:o,end:a,endHeading:r,ticksElapsed:0,ticksTotal:lg}}function Sg(n,t){const e=Math.min(1,Math.max(0,t));if(e<=Un){const i=e/Un;return ba(n.entryHeading,n.endHeading,i)}return n.endHeading}function Ud(n){const t=n.ticksElapsed+1,e=Math.min(1,t/n.ticksTotal),i=Dd(n,e),s=Sg(n,e);return t>=n.ticksTotal?{state:null,position:{...n.end},heading:n.endHeading}:{state:{...n,ticksElapsed:t},position:i,heading:s}}const ws=Math.PI*2,Gn=.55,Mg=.28,yg=.5,Eg=.22,$l=.22,bg=.12,co=.4,Od=.22,Ca=8,Tg=2,Ag=45,Rg=4,wg=2,Pa=12,Xc=.18,Cg=16,Pg=7,Ig=.7,Lg=40,Dg=5,Ng=2,Ug=4,Og=9,Fg=.3,kg=25,Bg=30,Hg=.5,Gg=70,zg=8,Vg=4,Fd=10,kd={kind:"loop",ringDepth:Gn,doesTricks:!0};function Bd(n){return{direction:1,wanderTarget:null,loungeTicksRemaining:0,lastPosition:null,stuckTicks:0,rngState:n>>>0||1}}function Us(n){let t=n.rngState;return t^=t<<13>>>0,t^=t>>>17,t^=t<<5>>>0,n.rngState=t>>>0,n.rngState/4294967296}function lo(n,t){let e=(t-n)%ws;return e>Math.PI&&(e-=ws),e<-Math.PI&&(e+=ws),e}function $e(n,t){const e=n-sn,i=t-rn;return{angle:Math.atan2(i,e),radius:Math.hypot(e,i)}}function Yc(n){return n+Math.PI/2}function Hd(n){return ws-n.sweepRadians}function Wg(n,t){const{fromTrailing:e}=uo(n,t);return e>Hd(t)*yg}function Xg(n,t){const{fromTrailing:e,toLeading:i}=uo(n,t),s=t.sweepRadians*Eg,r=t.sweepRadians*co+vi(t);return e<s||i<r}function Yg(n,t){const{fromTrailing:e,toLeading:i}=uo(n,t),s=t.sweepRadians*$l,r=t.sweepRadians*$l+vi(t);return e<s||i<r}function qg(n,t,e=Gn){const i=Os(n,t),s=t.sweepRadians*co+vi(t),r=t.sweepRadians*Od+vi(t);if(i>=s)return e;const o=Math.min(e,Mg),a=1-(i-r)/Math.max(s-r,.01),l=Math.min(1,Math.max(0,a));return e+(o-e)*l}function Kg(n,t){const e=Hr(n),i=Ls(n),s=e+(i-e)*t;return{x:sn+Math.cos(n)*s,y:rn+Math.sin(n)*s}}function si(n,t=null,e=Gn){const i=t?qg(n,t,e):e;return Kg(n,i)}function Gd(n,t,e,i,s=Gn,r=1){const{angle:o,radius:a}=$e(n.x,n.y),l=si(o,i,s),c=Math.hypot(l.x-sn,l.y-rn),u=Yc(o)+(r===1?0:Math.PI),h=i!==null&&Os(o,i)<i.sweepRadians*co+vi(i)?.2:.08,f=a-c,g=Math.max(-.45,Math.min(.45,f*h)),M=Math.cos(u)*.82+Math.cos(o)*g+(t-n.x)*.06,p=Math.sin(u)*.82+Math.sin(o)*g+(e-n.y)*.06;return nn(Math.atan2(p,M))}function uo(n,t){const e=jm(t),i=t.phaseRadians;return{fromTrailing:Vr(e,n),toLeading:Vr(n,i)}}function vi(n){return n.advancePerTick*Rg}function Os(n,t){return uo(n,t).toLeading}function Zg(n,t,e,i=Gn){if(ns(n.x,n.y,e))return!1;const{angle:s}=$e(n.x,n.y),r=Os(s,e),o=e.sweepRadians*Od+vi(e),a=Jg(n,e,t.speedState,i);return r<o||a}function $g(n){return(n+Tg+Xe)%Xe}function Jg(n,t,e,i=Gn){if(e!=="riding")return!1;const{angle:s,radius:r}=$e(n.x,n.y),o=t.sweepRadians*co+vi(t);if(Os(s,t)>o*1.15)return!1;const l=2.5/Math.max(r,1);for(let c=1;c<=wg;c+=1){const u=s+l*c,d=si(u,null,i);if(ns(d.x,d.y,t)||Os(u,t)<o)return!0}return!1}function jg(n,t,e){if(!t)return{standUp:!0};const{angle:i}=$e(n.x,n.y);return ns(n.x,n.y,t)?{lieDown:!0}:e?{standUp:!0}:Xg(i,t)?{lieDown:!0}:{standUp:!0}}function Qg(n,t,e,i=null){if(!e)return null;const s=$e(n.x,n.y).angle,r=Yg(s,e),o=Hd(e);let a=null,l=1/0;for(const c of t){if(c.tricked||ii(c,e))continue;const u=Math.atan2(c.center.y-e.centerY,c.center.x-e.centerX);if(i&&Math.abs(lo(i.centerRadians,u))>i.halfWidthRadians)continue;const d=Vr(s,u);if(!(Vr(u,s)<=bg)&&d>o)continue;const f=Math.hypot(n.x-c.center.x,n.y-c.center.y);f<l&&(l=f,a=c)}return r&&a!==null&&l>Pa+4?null:a}function zd(n,t){const e=Math.hypot(n.x-t.center.x,n.y-t.center.y);if(e>20)return{steerX:t.center.x,steerY:t.center.y};if(e>yd(t)+2.5)return{steerX:t.center.x,steerY:t.center.y};const i=n.x+Math.cos(t.rotationRadians)*5,s=n.y+Math.sin(t.rotationRadians)*5;return{steerX:i,steerY:s}}function Vd(n,t,e,i){if(e)return;const s=Math.hypot(n.x-t.center.x,n.y-t.center.y),r=i?Pa+4:Pa,o=yd(t)*(i?.35:.45);if(s<r&&s>o)return t.prepareSlot}function Wd(n,t,e){const i=Math.hypot(e.x-t.x,e.y-t.y),s=Math.max(1,Math.ceil(i/Vg));for(let r=1;r<=s;r+=1){const o=r/s,a=t.x+(e.x-t.x)*o,l=t.y+(e.y-t.y)*o;if(!qs(n,a,l))return!1}return!0}function t0(n,t,e){for(let i=0;i<zg;i+=1){const s=Us(e)*ws-Math.PI,r=Br(s)+2,o=Ls(s)+10,a=r+Us(e)*(o-r),l=sn+Math.cos(s)*a,c=rn+Math.sin(s)*a;if(qs(n,l,c)&&Wd(n,t,{x:l,y:c}))return{x:l,y:c}}return si($e(t.x,t.y).angle+.6)}function e0(n){const t={...n};return Us(t)<Hg?(t.loungeTicksRemaining=Gg,t.wanderTarget=null,{aiState:t,lounge:!0}):{aiState:t,lounge:!1}}function n0(n,t){const{surfboard:e,map:i}=n,s=e.position;if(t.loungeTicksRemaining>0)return t.loungeTicksRemaining-=1,{stop:!0,setIntendedHeading:e.currentHeading};const r=t.lastPosition,o=!r||Math.hypot(s.x-r.x,s.y-r.y)>.01;t.lastPosition={...s},t.stuckTicks=o?0:t.stuckTicks+1,t.stuckTicks>Fd&&(t.wanderTarget=null,t.stuckTicks=0);const a=t.wanderTarget,l=a?Math.hypot(a.x-s.x,a.y-s.y):1/0;if(!a||l<Ug){if(Us(t)<Fg)return t.loungeTicksRemaining=kg+Math.floor(Us(t)*Bg),t.wanderTarget=null,{stop:!0,setIntendedHeading:e.currentHeading};t.wanderTarget=t0(i,s,t)}const c=t.wanderTarget,u=nn(Math.atan2(c.y-s.y,c.x-s.x));return{...l>Og?{standUp:!0}:{lieDown:!0},setIntendedHeading:u}}function i0(n,t,e){const{surfboard:i,trickPrepare:s,trickZones:r,tide:o}=n,a=i.position,l=$e(a.x,a.y).angle;if(t.kind==="sector"){const v=lo(t.centerRadians,l);v>t.halfWidthRadians?e.direction=-1:v<-t.halfWidthRadians&&(e.direction=1)}const c=t.kind==="sector"?e.direction:1,u=o!==null&&Wg(l,o),d=t.kind==="sector"?{centerRadians:t.centerRadians,halfWidthRadians:t.halfWidthRadians}:null,h=t.doesTricks&&c===1?Qg(a,r,o,d):null;let f=a.x,g=a.y;if(h){const v=zd(a,h);f=v.steerX,g=v.steerY}else{const v=l+c*Xc,E=si(v,o,t.ringDepth);f=E.x,g=E.y}const m={...jg(a,o,h!==null),setIntendedHeading:Gd(a,f,g,o,t.ringDepth,c)};if(h){const v=Vd(a,h,s,u);v!==void 0&&(m.prepareSlot=v)}return m}function s0(n,t,e){for(const i of[0,.5,-.5,1,-1]){const s=t.facingRadians+i;for(const r of[1,1.4,2,2.8]){const o=t.x+Math.cos(s)*e*r,a=t.y+Math.sin(s)*e*r;if(qs(n,o,a))return{x:o,y:a}}}return si($e(t.x,t.y).angle)}function r0(n,t,e,i){let s=null,r=1/0;for(const o of e){if(o.tricked||i&&ii(o,i))continue;const a=Math.atan2(o.center.y-t.y,o.center.x-t.x);if(Math.abs(lo(t.facingRadians,a))>Ig||Math.hypot(o.center.x-t.x,o.center.y-t.y)>Lg)continue;const c=Math.hypot(o.center.x-n.x,o.center.y-n.y);c<r&&(r=c,s=o)}return s}function Jl(n,t,e,i){if(Wd(n,e,i))return nn(Math.atan2(i.y-e.y,i.x-e.x));const s=$e(e.x,e.y).angle,r=$e(i.x,i.y).angle,o=lo(s,r)>=0?1:-1,a=si(s+o*Xc*1.5,t);return nn(Math.atan2(a.y-e.y,a.x-e.x))}function o0(n,t,e){const{surfboard:i,trickPrepare:s,trickZones:r,tide:o,map:a,audience:l}=n,c=i.position;if(!l){const p=$e(c.x,c.y).angle,m=si(p+Xc,o);return{standUp:!0,setIntendedHeading:Gd(c,m.x,m.y,o)}}if(o&&ns(c.x,c.y,o)){const p=Yc($e(c.x,c.y).angle)+Math.PI;return{standUp:!0,setIntendedHeading:nn(p)}}if(Math.hypot(c.x-l.x,c.y-l.y)<Pg)return{standUp:!0,setIntendedHeading:nn(Math.atan2(c.y-l.y,c.x-l.x))};const d=e.lastPosition,h=!d||Math.hypot(c.x-d.x,c.y-d.y)>.01;if(e.lastPosition={...c},e.stuckTicks=h?0:e.stuckTicks+1,e.stuckTicks>Fd)return e.stuckTicks=0,{standUp:!0,setIntendedHeading:nn($e(c.x,c.y).angle)};const f=r0(c,l,r,o);if(f){const p=zd(c,f),m={standUp:!0,setIntendedHeading:Jl(a,o,c,{x:p.steerX,y:p.steerY})},v=Vd(c,f,s,!0);return v!==void 0&&(m.prepareSlot=v),m}const g=s0(a,l,t.followDistance);return Math.hypot(g.x-c.x,g.y-c.y)<Dg?{standUp:!0,setIntendedHeading:(i.currentHeading+Ng+Xe)%Xe}:{standUp:!0,setIntendedHeading:Jl(a,o,c,g)}}function a0(n){const t=n.behavior??kd,e={...n.aiState??Bd(1)},{surfboard:i}=n,s=t.kind==="explorer"&&e.loungeTicksRemaining>0;return i.speedState==="seated"&&!s?{input:{startPaddle:!0,standUp:!0,setIntendedHeading:i.currentHeading},aiState:e}:{input:t.kind==="explorer"?n0(n,e):t.kind==="showoff"?o0(n,t,e):i0(n,t,e),aiState:e}}function c0(n,t=Gn){const e=si(n,null,t);return{x:e.x,y:e.y,heading:nn(Yc(n))}}const ho=4,l0=12,Xr=["rail","tunnel","jump","brain_coral","wall_ride"],qc={rail:0,brain_coral:0,tunnel:1,wall_ride:1,jump:2},u0=.22,jl=.22,h0=.92,Xd=5,d0=.2,Fs=Math.PI*2,Ql=-5,f0=5;function Yd(n=Math.random){const t=f0-Ql;return(Ql+n()*t)*Math.PI/180}function p0(n){return n-Math.PI/2}function qd(n,t){const e=p0(n),i=n+Math.PI/2;return t?i:e}function m0(){return{nextZoneId:1e3}}function Kc(n,t){return jd(u0+n*(Fs/t))}function Kd(n=Math.random){return jl+n()*(h0-jl)}function Zd(n,t){return Math.atan2(n.center.y-t.centerY,n.center.x-t.centerX)}function $d(n,t,e){const i=Hr(t),s=Ls(t);for(let r=e;r>=.18;r-=.04){const o=i+(s-i)*r,a=sn+Math.cos(t)*o,l=rn+Math.sin(t)*o;if(Ze(n,Math.floor(a),Math.floor(l))==="coral_rideable")return{x:a,y:l}}return null}function Jd(n,t){for(const e of t)if(Math.hypot(n.x-e.center.x,n.y-e.center.y)-ho*2<l0)return!1;return!0}function g0(n=Math.random){return Xr[Math.floor(n()*Xr.length)]}function _0(n,t,e,i,s,r,o=Math.random,a=!0,l=!1){const c=$d(n,t,r);if(!c||a&&!Jd(c,s)||!l&&ns(c.x,c.y,e))return null;const u=g0(o),d=o()<d0,h=qd(t,d);return{id:i,type:u,prepareSlot:qc[u],center:c,radius:ho,rotationRadians:h,rotationJitterRadians:Yd(o),tricked:!1}}function x0(n,t,e,i,s,r,o){for(let a=0;a<Xd;a+=1){const l=_0(n,t,e,i,s,Kd(r),r,!0,o);if(l)return l}return null}function v0(n,t,e,i,s,r=Math.random){const o=Fs/s*.35,a=[];for(const l of n){const c=Zd(l,t);if(!ii(l,t)){a.push(l.spawnedAtHighTide?{...l,spawnedAtHighTide:void 0}:l);continue}Yl(c,t)&&!l.spawnedAtHighTide||a.push(l)}for(let l=0;l<s&&!(a.length>=s);l+=1){if(S0(a,t,l,s,o))continue;const c=Kc(l,s);if(!Yl(c,t))continue;const u=x0(e,c,t,`feature-${i.nextZoneId}`,a,r,!0);u&&(i.nextZoneId+=1,a.push({...u,spawnedAtHighTide:!0}))}return a}function S0(n,t,e,i,s){const r=Kc(e,i);return n.some(o=>{const a=Zd(o,t);return M0(a,r,s)})}function M0(n,t,e){let i=Math.abs(jd(n-t));return i>Math.PI&&(i=Fs-i),i<=e}function jd(n){const t=n%Fs;return t<0?t+Fs:t}const Ia=14;function y0(n){const t=[];for(let e=0;e<Ia;e+=1){const i=Kc(e,Ia);let s=null;for(let l=0;l<Xd;l+=1){const c=$d(n,i,Kd());if(c&&Jd(c,t)){s=c;break}}if(!s)continue;const r=Xr[e%Xr.length],o=e%5===0,a=qd(i,o);t.push({id:`${r}-${e}`,type:r,prepareSlot:qc[r],center:s,radius:ho,rotationRadians:a,rotationJitterRadians:Yd(),tricked:!1})}return t}const tu=2.3,E0=.9,b0=.45,T0=.82,A0=1.25;function R0(){return[{id:"nalu",name:"Nalu",spawnAngle:-Math.PI/4,behavior:{kind:"loop",ringDepth:Gn,doesTricks:!0}},{id:"kai",name:"Kai",spawnAngle:tu,behavior:{kind:"sector",centerRadians:tu,halfWidthRadians:E0,ringDepth:b0,doesTricks:!0}},{id:"hina",name:"Hina",spawnAngle:-Math.PI*3/4,behavior:{kind:"loop",ringDepth:T0,doesTricks:!1}},{id:"tama",name:"Tama",spawnAngle:Math.PI,behavior:{kind:"explorer"}},{id:"koa",name:"Koa",spawnAngle:Math.PI/2+.4,behavior:{kind:"showoff",followDistance:Cg},speedMultiplier:A0}].map(t=>{const e=t.behavior.kind==="loop"||t.behavior.kind==="sector"?t.behavior.ringDepth:void 0,i=c0(t.spawnAngle,e);return{id:t.id,name:t.name,startX:i.x,startY:i.y,startHeading:i.heading,behavior:t.behavior,speedMultiplier:t.speedMultiplier}})}function w0(){const n=nd,t=id,e=pd(n,t,"deep_water");for(let h=0;h<t;h+=1)for(let f=0;f<n;f+=1){const g=nm(f,h),M=im(f,h),p=Oc(g),m=Br(g),v=em(g),E=Hr(g),y=Ls(g);M<=p?Es(e,f,h,"grass"):M<=m?Es(e,f,h,"sand"):M<=v?Es(e,f,h,"shallow"):M>=E&&M<=y&&Es(e,f,h,"coral_rideable")}const i=Math.PI/2,s=Br(i),r=sn,o=rn+s-1.5,a=4,l=r,c=o-a,u=r+1.2,d=o-1.5;return{map:e,spawnX:l,spawnY:c,spawnHeading:4,boardDockX:r,boardDockY:o,requiresBoardMount:!0,tide:{centerX:sn,centerY:rn,innerRadius:cd,outerRadius:ld,innerRadiusAtAngle:Hr,outerRadiusAtAngle:Ls,sweepRadians:Math.PI/1.35,advancePerTick:.0565},npcs:[{id:"guru",name:"Kaulu the Surf Guru",x:u,y:d,interactRadius:.9,dialogue:["Welcome to Coral Park, surfer!","Your board sits on the sand ring — click it when you are ready.","Ride the wide reef loop around the island.","Yellow chevrons show which way to ride through each feature.","Grind the rails and brain coral, Tuck through tunnels and wall rides, catch Air off jumps.","Prime the matching stance 1–5 ticks before you hit the feature.","Tai'ura's tide submerges features — they fade underwater, then fresh coral rises as the swell passes.","Watch Nalu and her friends ride the reef — they time the swell to hit features in the dry zone."]}],demoSurfers:R0(),trickZones:y0(e)}}const C0=200,P0=64,I0=26,L0=44,D0=36,N0=28,U0=["rail","brain_coral","tunnel","wall_ride","jump"],us={minX:2,maxX:9,minY:31,maxY:39};function O0(n,t){return{x:N0+n*D0,y:t}}function eu(n,t,e){return U0.map((i,s)=>({id:`anim-${i}${e}`,type:i,prepareSlot:qc[i],center:O0(s,n),radius:ho,rotationRadians:t,tricked:!1}))}function F0(){const n=pd(C0,P0,"deep_water");for(let t=us.minY;t<=us.maxY;t+=1)for(let e=us.minX;e<=us.maxX;e+=1)Es(n,e,t,"sand");return{map:n,spawnX:5.5,spawnY:35.5,spawnHeading:0,boardDockX:us.maxX+.5,boardDockY:35.5,requiresBoardMount:!0,trickZones:[...eu(I0,0,""),...eu(L0,Math.PI,"-counter")],tide:null,npcs:[],demoSurfers:[]}}function k0(n,t,e){for(const i of n){const s=t-i.x,r=e-i.y;if(Math.hypot(s,r)<=i.interactRadius)return i}return null}function B0(n,t,e){for(const i of n)if(Math.floor(i.x)===t&&Math.floor(i.y)===e)return i;return null}function H0(n,t,e,i=0){for(const s of n){const r=t-s.x,o=e-s.y;if(Math.hypot(r,o)<=s.interactRadius+i)return s}return null}function nu(n,t,e,i=.3){const s=t-n.x,r=e-n.y;return Math.hypot(s,r)<=n.interactRadius+i}function G0(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function z0(n,t){const e=md(n.startX,n.startY,n.startHeading),i=t??{...ti},s=n.speedMultiplier??1,r=s===1?i:{turnRateDegPerTick:i.turnRateDegPerTick*s,speedPaddle:i.speedPaddle*s,speedRide:i.speedRide*s};return{config:n,behavior:n.behavior??kd,aiState:Bd(G0(n.id)),surfboard:{...e,speedState:"riding"},trickPrepare:null,trickAnimation:null,activeTrickZoneId:null,tideSpinTicksRemaining:0,trickSpeedBoost:null,stats:r}}function V0(n){return n.tideSpinTicksRemaining<=0?null:1-n.tideSpinTicksRemaining/Ca}function W0(n){var t;return{id:n.config.id,name:n.config.name,surfboard:{...n.surfboard,position:{...n.surfboard.position}},trickPrepare:n.trickPrepare?{...n.trickPrepare}:null,trickAnimation:Ld(n.trickAnimation),trickSpeedBoostTicksRemaining:((t=n.trickSpeedBoost)==null?void 0:t.ticksRemaining)??0,tideSpinProgress:V0(n)}}function X0(n,t,e){const i=Nd(e,t,n.surfboard.position,n.surfboard.currentHeading);return{...n,trickPrepare:null,trickAnimation:i,trickSpeedBoost:gd(),activeTrickZoneId:null,tideSpinTicksRemaining:0,surfboard:{...n.surfboard,speedState:"riding",intendedHeading:i.endHeading,isRotating:!1}}}function Ao(n,t){const e={...n.stats,turnRateDegPerTick:Ag},i=Hc(n.surfboard,t,{lieDown:!0,setIntendedHeading:$g(n.surfboard.currentHeading)},e);return{...n,surfboard:i.state,tideSpinTicksRemaining:Math.max(0,n.tideSpinTicksRemaining-1),trickPrepare:Wr(n.trickPrepare),activeTrickZoneId:null}}function Y0(n,t,e,i,s=null){if(n.trickAnimation){const g=Ud(n.trickAnimation);return{...n,trickAnimation:g.state,surfboard:{...n.surfboard,position:g.position,currentHeading:g.heading,intendedHeading:g.heading,isRotating:!1},trickPrepare:Wr(n.trickPrepare)}}if(n.tideSpinTicksRemaining>0)return Ao(n,t);const r=n.behavior.kind==="loop"||n.behavior.kind==="sector"?n.behavior.ringDepth:Gn;if(n.behavior.kind!=="showoff"&&i&&Zg(n.surfboard.position,n.surfboard,i,r)){if(n.behavior.kind!=="explorer")return Ao({...n,tideSpinTicksRemaining:Ca},t);if(n.aiState.loungeTicksRemaining<=0){const g=e0(n.aiState);if(n={...n,aiState:g.aiState},!g.lounge)return Ao({...n,tideSpinTicksRemaining:Ca},t)}}const o=a0({surfboard:n.surfboard,trickPrepare:n.trickPrepare,trickZones:e,tide:i,map:t,behavior:n.behavior,aiState:n.aiState,audience:s}),{prepareSlot:a,...l}=o.input;let c={...n,aiState:o.aiState};a!==void 0&&(c={...c,trickPrepare:{slot:a,ticksSincePrepare:0}});const u=c.trickSpeedBoost!==null&&c.surfboard.speedState==="riding"&&!c.trickAnimation,d=_d(c.stats,u?c.trickSpeedBoost:null),h={...c.surfboard.position},f=Hc(c.surfboard,t,l,d);if(c={...c,surfboard:f.state,trickPrepare:Wr(c.trickPrepare)},c.surfboard.speedState!=="riding"?c={...c,trickSpeedBoost:null}:u&&c.trickSpeedBoost&&(c={...c,trickSpeedBoost:xd(c.trickSpeedBoost)}),c.surfboard.speedState!=="seated"){const g=Rd(e,c.surfboard.position,i,h);return g&&c.activeTrickZoneId!==g.id?X0({...c,activeTrickZoneId:g.id},g,t):g?c:{...c,activeTrickZoneId:null}}return{...c,activeTrickZoneId:null}}const fo=[{id:"teeny_tai",name:"Teeny Tai",description:"Cute jellyfish spirit in a shimmering water bubble — earned from tricks.",tokenCost:null,earnOnly:!0},{id:"taiura_blessing",name:"Tai'ura's Blessing",description:"Coral blessing for ship combat ammo recovery.",tokenCost:500,minSailingLevel:40,demoDisabled:!0},{id:"ebb_and_flow",name:"Ebb and Flow",description:"Lunar spell — weapon swap grants a boosted attack.",tokenCost:750,minSailingLevel:60,demoDisabled:!0},{id:"living_coral",name:"Living Coral",description:"20% chance to double grinding output.",tokenCost:400,minAgilityLevel:50,demoDisabled:!0},{id:"coral_rail_cosmetic",name:"Coral Rail Trim",description:"Cosmetic surfboard rail glow.",tokenCost:150},{id:"surf_guru_board",name:"Ironwood Board",description:"Ironwood hull — faster ride speed and darker deck.",tokenCost:250,minAgilityLevel:30},{id:"rosewood_board",name:"Rosewood Board",description:"Rosewood hull — fastest ride speed and rich deck finish.",tokenCost:250,requiresUnlock:"surf_guru_board"}],Zc=["Bronze","Iron","Steel","Mithril","Adamant","Rune","Dragon"],ks=10;function q0(n){return n<=0?1:Math.min(Zc.length,Math.floor(n/ks)+1)}function Qd(n){return n<=0?0:Math.min(Zc.length-1,Math.floor(n/ks))}function Ro(n){return Zc[Qd(n)]}function K0(n){if(n<=0)return 0;const t=n%ks;return t===0?ks:t}function Z0(n){if(n<=0)return 0;const t=Qd(n);return Math.max(0,(t-1)*ks)}const $0=2e8,La=99;function Da(n){if(n<=1)return 0;let t=0;for(let e=1;e<n;e+=1)t+=Math.floor(e+300*2**(e/7));return Math.floor(t/4)}function $c(n){const t=Math.max(0,Math.min($0,n));for(let e=La;e>=1;e-=1)if(t>=Da(e))return e;return 1}function Yr(n){const t=$c(n),e=Da(t),i=t>=La?e:Da(t+1),s=n-e,r=Math.max(1,i-e),o=t>=La?100:Math.min(100,s/r*100);return{level:t,xpIntoLevel:s,xpToNextLevel:r,percent:o}}const J0=16,j0=12,Q0=1/4,iu=6,t_=10,e_=1/500,n_=new Set(fo.map(n=>n.id));function i_(){return{xp:{agility:0,sailing:0},coralTokens:0,unlocked:new Set,session:{tricksLanded:0,combo:0,maxCombo:0}}}function s_(n){return{xp:{...n.xp},coralTokens:n.coralTokens,unlocked:new Set(n.unlocked),session:{...n.session}}}function r_(n){return{xp:{...n.xp},coralTokens:n.coralTokens,unlocked:[...n.unlocked],session:{...n.session}}}function wi(n){return typeof n=="number"&&Number.isFinite(n)&&n>=0}function o_(n){if(!n||typeof n!="object")return null;const t=n;if(!t.xp||typeof t.xp!="object"||!wi(t.xp.agility)||!wi(t.xp.sailing)||!wi(t.coralTokens)||!t.session||typeof t.session!="object"||!wi(t.session.tricksLanded)||!wi(t.session.combo)||!wi(t.session.maxCombo)||!Array.isArray(t.unlocked))return null;const e=[];for(const i of t.unlocked){if(typeof i!="string"||!n_.has(i))return null;e.push(i)}return{xp:{agility:t.xp.agility,sailing:t.xp.sailing},coralTokens:t.coralTokens,unlocked:new Set(e),session:{tricksLanded:t.session.tricksLanded,combo:t.session.combo,maxCombo:t.session.maxCombo}}}function Na(n){return $c(n)}function Ua(n){return $c(n)}function tf(n,t){if(t.demoDisabled)return{ok:!1,reason:"Disabled for this demo"};if(t.earnOnly)return{ok:!1,reason:"Earned through gameplay only (1/500 from successful tricks)"};if(n.unlocked.has(t.id))return{ok:!1,reason:"Already unlocked"};if(t.requiresUnlock&&!n.unlocked.has(t.requiresUnlock)){const e=fo.find(i=>i.id===t.requiresUnlock);return{ok:!1,reason:`Requires ${(e==null?void 0:e.name)??t.requiresUnlock}`}}return t.tokenCost!==null&&n.coralTokens<t.tokenCost?{ok:!1,reason:"Not enough Coral Tokens"}:t.minAgilityLevel&&Na(n.xp.agility)<t.minAgilityLevel?{ok:!1,reason:`Requires Agility ${t.minAgilityLevel}`}:t.minSailingLevel&&Ua(n.xp.sailing)<t.minSailingLevel?{ok:!1,reason:`Requires Sailing ${t.minSailingLevel}`}:{ok:!0}}function a_(n,t){const e=fo.find(r=>r.id===t);if(!e)return{state:n,success:!1,reason:"Unknown unlock"};const i=tf(n,e);return i.ok?{state:{...n,coralTokens:e.tokenCost!==null?n.coralTokens-e.tokenCost:n.coralTokens,unlocked:new Set([...n.unlocked,t])},success:!0}:{state:n,success:!1,reason:i.reason}}function c_(n=Math.random){if(n()>=Q0)return 0;const t=t_-iu+1,e=Math.floor(n()*t);return iu+e}function l_(n,t=Math.random){const e=n.session.combo+1,i=q0(e),s={agility:J0*i,sailing:j0*i},r=c_(t);let o=null;const a=new Set(n.unlocked);return!a.has("teeny_tai")&&t()<e_&&(a.add("teeny_tai"),o="teeny_tai"),{state:{...n,xp:{agility:n.xp.agility+s.agility,sailing:n.xp.sailing+s.sailing},coralTokens:n.coralTokens+r,unlocked:a,session:{tricksLanded:n.session.tricksLanded+1,combo:e,maxCombo:Math.max(n.session.maxCombo,e)}},xpGained:s,tokensGained:r,unlockGained:o}}function u_(n){const t=Z0(n.session.combo);return t===n.session.combo?n:{...n,session:{...n.session,combo:t}}}function su(n){let t=ed;return n.has("rosewood_board")?t=Fp:n.has("surf_guru_board")&&(t=Op),{turnRateDegPerTick:ti.turnRateDegPerTick,speedPaddle:ti.speedPaddle,speedRide:t}}function h_(n){return n.has("rosewood_board")?"Rosewood Board":n.has("surf_guru_board")?"Ironwood Board":"Camphor Board"}class d_{constructor(t){B(this,"surfboard");B(this,"progression");B(this,"trickZones");B(this,"tide");B(this,"pendingInput",{});B(this,"stats");B(this,"arena");B(this,"tickMs");B(this,"cursorWorldX",null);B(this,"cursorWorldY",null);B(this,"hoverHeading",null);B(this,"clickValid",!0);B(this,"tickCount",0);B(this,"xpDrops",[]);B(this,"npcDialogueIndex",new Map);B(this,"proximityGreeted",new Set);B(this,"pendingDialogue",[]);B(this,"boardMounted");B(this,"boardDockX");B(this,"boardDockY");B(this,"walk",null);B(this,"walkClickMarker",null);B(this,"pendingNpcTalk",null);B(this,"pendingBoardMount",!1);B(this,"pendingIntroSurf",!1);B(this,"trickZoneTideSync");B(this,"trickPrepare",null);B(this,"activeTrickZoneId",null);B(this,"trickAnimation",null);B(this,"trickSpeedBoost",null);B(this,"tideFrozen",!1);B(this,"cameraFacingRadians",null);B(this,"movementFrozen",!1);B(this,"boardInteractRadius",1.3);B(this,"demoSurfers",[]);this.arena=t.arena,this.boardMounted=!t.arena.requiresBoardMount,this.boardDockX=t.arena.boardDockX,this.boardDockY=t.arena.boardDockY,this.stats=t.stats??{...ti},this.tickMs=t.tickMs??Pp,this.surfboard=md(t.arena.spawnX,t.arena.spawnY,t.arena.spawnHeading),this.progression=t.initialProgression?s_(t.initialProgression):i_(),t.stats||(this.stats=su(this.progression.unlocked)),this.trickZones=t.arena.trickZones.map(e=>({...e})),this.tide=t.arena.tide?$m(t.arena.tide):null,this.trickZoneTideSync=m0(),this.demoSurfers=t.arena.demoSurfers.map(e=>z0(e,this.stats))}getSnapshot(){var t,e,i,s;return{surfboard:{...this.surfboard,position:{...this.surfboard.position}},progression:{...this.progression,unlocked:new Set(this.progression.unlocked),session:{...this.progression.session},xp:{...this.progression.xp}},trickZones:this.trickZones.map(r=>({...r,center:{...r.center}})),npcs:this.arena.npcs.map(r=>({...r,dialogue:[...r.dialogue]})),boardDockX:this.boardDockX,boardDockY:this.boardDockY,boardMounted:this.boardMounted,canDismountBoard:this.canDismountBoard(),tide:this.tide?{...this.tide}:null,cursorWorldX:this.cursorWorldX,cursorWorldY:this.cursorWorldY,hoverHeading:this.hoverHeading,clickValid:this.clickValid,tickCount:this.tickCount,walkTargetTx:((t=this.walkClickMarker)==null?void 0:t.tx)??null,walkTargetTy:((e=this.walkClickMarker)==null?void 0:e.ty)??null,walkClickValid:((i=this.walkClickMarker)==null?void 0:i.valid)??!0,onFootMoving:this.walk!==null,trickPrepare:this.trickPrepare?{...this.trickPrepare}:null,trickAnimation:Ld(this.trickAnimation),trickSpeedBoostTicksRemaining:((s=this.trickSpeedBoost)==null?void 0:s.ticksRemaining)??0,demoSurfers:this.demoSurfers.map(r=>W0(r))}}consumeXpDrops(){const t=this.xpDrops;return this.xpDrops=[],t}setCursor(t,e){if(this.cursorWorldX=t,this.cursorWorldY=e,!this.boardMounted){this.clickValid=!0,this.hoverHeading=null;return}const i=this.boardMounted?qs(this.arena.map,t,e):_m(this.arena.map,t,e);this.clickValid=i,this.clickValid?this.hoverHeading=wm(this.surfboard.position.x,this.surfboard.position.y,t,e):this.hoverHeading=null}clearCursor(){this.cursorWorldX=null,this.cursorWorldY=null,this.hoverHeading=null,this.clickValid=!0}consumeDialogue(){const t=this.pendingDialogue;return this.pendingDialogue=[],t}queueIntroSurf(){this.boardMounted||!this.arena.requiresBoardMount||(this.pendingIntroSurf=!0,this.handleBoardClick())}clickWorld(t,e){const i=Math.floor(t),s=Math.floor(e),r=k0(this.arena.npcs,t,e)??B0(this.arena.npcs,i,s);if(r){this.handleNpcClick(r);return}if(!this.boardMounted&&this.isBoardClick(i,s,t,e)){this.handleBoardClick();return}if(!this.boardMounted){this.pendingNpcTalk=null,this.pendingBoardMount=!1,this.pendingIntroSurf=!1,this.clickToWalk(t,e);return}this.clickOcean(t,e)}handleNpcClick(t){if(nu(t,this.surfboard.position.x,this.surfboard.position.y)){this.queueNpcDialogue(t);return}this.pendingNpcTalk=t,this.pendingBoardMount=!1,this.pendingIntroSurf=!1,this.clickToWalk(t.x,t.y)}handleBoardClick(){if(this.isNearBoard()){this.tryMountBoard();return}this.pendingBoardMount=!0,this.pendingNpcTalk=null,this.clickToWalk(this.boardDockX,this.boardDockY)}isBoardClick(t,e,i,s){const r=Math.floor(this.boardDockX),o=Math.floor(this.boardDockY);if(t===r&&e===o)return!0;const a=i-this.boardDockX,l=s-this.boardDockY;return Math.hypot(a,l)<=this.boardInteractRadius}isNearBoard(){const t=this.surfboard.position.x-this.boardDockX,e=this.surfboard.position.y-this.boardDockY;return Math.hypot(t,e)<=this.boardInteractRadius}isRiderOnSand(){return Ze(this.arena.map,Math.floor(this.surfboard.position.x),Math.floor(this.surfboard.position.y))==="sand"}canDismountBoard(){return this.boardMounted&&this.surfboard.speedState==="seated"&&this.trickAnimation===null&&this.isRiderOnSand()}clickToWalk(t,e){const i=Math.floor(t),s=Math.floor(e),r=Am(this.arena.map,this.surfboard.position,t,e);if(!r){this.walk=null,this.walkClickMarker={tx:i,ty:s,valid:!1};return}this.walk=r,this.walkClickMarker={tx:i,ty:s,valid:!0}}tryMountBoard(){return this.boardMounted||this.surfboard.speedState!=="seated"||!this.isNearBoard()?!1:(this.boardMounted=!0,this.walk=null,this.walkClickMarker=null,this.pendingBoardMount=!1,this.surfboard={...this.surfboard,position:{x:this.boardDockX,y:this.boardDockY},currentHeading:this.arena.spawnHeading,intendedHeading:this.arena.spawnHeading,isRotating:!1},this.pendingDialogue.push("You climb onto your surfboard."),this.pendingIntroSurf&&this.beginIntroRide(),!0)}beginIntroRide(){if(this.pendingIntroSurf=!1,!this.boardMounted)return;const t=this.boardDockY+10;this.clickOcean(this.boardDockX,t),this.setSpeedState("riding")}tryDismountBoard(){if(!this.boardMounted)return"You are not on your surfboard.";if(this.surfboard.speedState!=="seated")return"Stop moving before leaving your board.";if(this.trickAnimation)return"Finish your trick before leaving your board.";if(!this.isRiderOnSand())return"You can only leave your board on the sand.";const t=this.surfboard.position.x,e=this.surfboard.position.y,i=Number.isFinite(this.surfboard.currentHeading)?this.surfboard.currentHeading:this.arena.spawnHeading;this.boardDockX=t,this.boardDockY=e,this.boardMounted=!1,this.trickPrepare=null,this.trickSpeedBoost=null,this.pendingInput={};const{x:s,y:r}=Bc(i),o=t-s*.9,a=e-r*.9;let l={x:t,y:e};if(Number.isFinite(o)&&Number.isFinite(a)){const c=Ze(this.arena.map,Math.floor(o),Math.floor(a));(c==="sand"||c==="grass")&&(l={x:o,y:a})}return this.surfboard={...this.surfboard,position:l,speedState:"seated",isRotating:!1},this.pendingDialogue.push("You leave your surfboard on the sand."),null}clickOcean(t,e){this.setCursor(t,e),!(!this.clickValid||this.hoverHeading===null)&&(this.pendingInput.setIntendedHeading=this.hoverHeading)}queueNpcDialogue(t){const e=this.npcDialogueIndex.get(t.id)??0,i=t.dialogue[e];i!==void 0&&(this.pendingDialogue.push(`${t.name}: ${i}`),this.npcDialogueIndex.set(t.id,e+1))}checkProximityDialogue(){if(this.boardMounted&&this.surfboard.speedState!=="seated")return;const t=H0(this.arena.npcs,this.surfboard.position.x,this.surfboard.position.y,.6);!t||this.proximityGreeted.has(t.id)||(this.proximityGreeted.add(t.id),this.queueNpcDialogue(t))}resolvePendingInteractions(){this.pendingNpcTalk&&nu(this.pendingNpcTalk,this.surfboard.position.x,this.surfboard.position.y)&&(this.queueNpcDialogue(this.pendingNpcTalk),this.pendingNpcTalk=null),this.pendingBoardMount&&this.isNearBoard()&&this.tryMountBoard()}setSpeedState(t){if(t==="seated")this.pendingInput.stop=!0;else if(t==="paddling"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.startPaddle=!0)}else if(t==="riding"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}if(!this.boardMounted)return;this.surfboard.speedState==="seated"&&(this.pendingInput.startPaddle=!0),this.pendingInput.standUp=!0}else if(t==="reversing"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.reverse=!0)}}prepareTrick(t){!this.boardMounted||this.surfboard.speedState!=="riding"||this.trickAnimation||(this.trickPrepare={slot:t,ticksSincePrepare:0})}clearTrickPrepare(){this.trickPrepare=null}resolveTrickZoneEntry(t){const e=this.trickPrepare,i=e!==null&&e.slot===t.prepareSlot&&sg(e);if(this.trickPrepare=null,!i){this.bailTrick(t);return}const s=l_(this.progression);this.progression=s.state,s.unlockGained==="teeny_tai"&&this.pendingDialogue.push("You have a funny feeling like you're being followed."),this.trickZones=rg(this.trickZones,t.id),this.trickSpeedBoost=gd(),this.trickAnimation=Nd(this.arena.map,t,this.surfboard.position,this.surfboard.currentHeading),this.surfboard={...this.surfboard,intendedHeading:this.trickAnimation.endHeading,isRotating:!1},this.activeTrickZoneId=null,this.xpDrops.push({agility:s.xpGained.agility,sailing:s.xpGained.sailing,tokens:s.tokensGained,x:this.surfboard.position.x,y:this.surfboard.position.y})}bailTrick(t,e){this.trickPrepare=null,this.trickAnimation=null,this.trickSpeedBoost=null,this.progression=u_(this.progression),this.activeTrickZoneId=null,this.surfboard={...this.surfboard,speedState:"seated",isRotating:!1},this.pendingDialogue.push(e??`Bailed on the ${t.type}! Prime ${hd(t.prepareSlot)} ${Fc}–${oo} ticks before you hit it.`)}checkTrickZoneResolution(t){if(this.trickAnimation)return;if(!this.boardMounted||this.surfboard.speedState!=="riding"){this.activeTrickZoneId=null;return}const e=Rd(this.trickZones,this.surfboard.position,this.tide,t);if(!e){this.activeTrickZoneId=null;return}this.activeTrickZoneId!==e.id&&(this.activeTrickZoneId=e.id,this.resolveTrickZoneEntry(e))}tryPurchaseUnlock(t){const e=a_(this.progression,t);return e.success?(this.progression=e.state,this.stats=su(this.progression.unlocked),null):e.reason??"Purchase failed"}setStats(t){this.stats={...this.stats,...t}}setCameraFacing(t){this.cameraFacingRadians=t}setTideFrozen(t){this.tideFrozen=t}setMovementFrozen(t){this.movementFrozen=t}getArena(){return this.arena}tickTrickAnimationMovement(){if(!this.trickAnimation)return;const t=Ud(this.trickAnimation);this.trickAnimation=t.state,this.surfboard={...this.surfboard,position:t.position,currentHeading:t.heading,intendedHeading:t.heading,isRotating:!1}}tick(){const t={...this.surfboard.position};if(this.boardMounted&&!this.movementFrozen)if(this.trickAnimation)this.tickTrickAnimationMovement();else{const i=this.trickSpeedBoost!==null&&this.surfboard.speedState==="riding"&&!this.trickAnimation,s=_d(this.stats,i?this.trickSpeedBoost:null),r=Hc(this.surfboard,this.arena.map,this.pendingInput,s);this.surfboard=r.state,this.surfboard.speedState!=="riding"?(this.trickSpeedBoost=null,this.trickPrepare&&this.clearTrickPrepare()):i&&this.trickSpeedBoost&&(this.trickSpeedBoost=xd(this.trickSpeedBoost))}else if(this.walk){const i=Rm(this.surfboard.position,this.surfboard.currentHeading,this.walk);this.walk=i.walk,this.surfboard={...this.surfboard,position:i.position,currentHeading:i.heading,intendedHeading:i.heading},i.walk||(this.walkClickMarker=null,this.resolvePendingInteractions())}this.pendingInput={},this.trickPrepare=Wr(this.trickPrepare),this.checkTrickZoneResolution(t),this.tide&&!this.tideFrozen&&(this.tide=Jm(this.tide),this.trickZones=v0(this.trickZones,this.tide,this.arena.map,this.trickZoneTideSync,Ia),this.trickZones=Km(this.trickZones,this.tide)),this.checkProximityDialogue();const e={x:this.surfboard.position.x,y:this.surfboard.position.y,facingRadians:this.cameraFacingRadians??qe(this.surfboard.currentHeading)*Math.PI/180};this.demoSurfers=this.demoSurfers.map(i=>Y0(i,this.arena.map,this.trickZones,this.tide,e)),this.tickCount+=1}}const ef="osrs-surfing-progression";function f_(){try{const n=localStorage.getItem(ef);return n?o_(JSON.parse(n)):null}catch{return null}}function ru(n){try{localStorage.setItem(ef,JSON.stringify(r_(n)))}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jc="184",p_=0,ou=1,m_=2,Lr=1,g_=2,bs=3,ei=0,Ge=1,Mn=2,Fn=0,Zi=1,au=2,cu=3,lu=4,__=5,di=100,x_=101,v_=102,S_=103,M_=104,y_=200,E_=201,b_=202,T_=203,Oa=204,Fa=205,A_=206,R_=207,w_=208,C_=209,P_=210,I_=211,L_=212,D_=213,N_=214,ka=0,Ba=1,Ha=2,Ji=3,Ga=4,za=5,Va=6,Wa=7,nf=0,U_=1,O_=2,En=0,sf=1,rf=2,of=3,af=4,cf=5,lf=6,uf=7,hf=300,Si=301,ji=302,wo=303,Co=304,po=306,Xa=1e3,On=1001,Ya=1002,Pe=1003,F_=1004,Js=1005,Oe=1006,Po=1007,mi=1008,Ye=1009,df=1010,ff=1011,Bs=1012,jc=1013,Tn=1014,hn=1015,Bn=1016,Qc=1017,tl=1018,Hs=1020,pf=35902,mf=35899,gf=1021,_f=1022,dn=1023,Hn=1026,gi=1027,el=1028,nl=1029,Mi=1030,il=1031,sl=1033,Dr=33776,Nr=33777,Ur=33778,Or=33779,qa=35840,Ka=35841,Za=35842,$a=35843,Ja=36196,ja=37492,Qa=37496,tc=37488,ec=37489,qr=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,cc=37813,lc=37814,uc=37815,hc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,_c=36492,xc=36494,vc=36495,Sc=36283,Mc=36284,Kr=36285,yc=36286,k_=3200,Ec=0,B_=1,Jn="",tn="srgb",Zr="srgb-linear",$r="linear",le="srgb",Ci=7680,uu=519,H_=512,G_=513,z_=514,rl=515,V_=516,W_=517,ol=518,X_=519,hu=35044,du="300 es",yn=2e3,Gs=2001;function Y_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q_(){const n=Jr("canvas");return n.style.display="block",n}const fu={};function pu(...n){const t="THREE."+n.shift();console.log(t,...n)}function xf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=xf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function jt(...n){n=xf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function bc(...n){const t=n.join(" ");t in fu||(fu[t]=!0,Nt(...n))}function K_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Z_={[ka]:Ba,[Ha]:Va,[Ga]:Wa,[Ji]:za,[Ba]:ka,[Va]:Ha,[Wa]:Ga,[za]:Ji};class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Tc=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function $_(n,t){return(n%t+t)%t}function Lo(n,t,e){return(1-e)*n+e*t}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wl=class wl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wl.prototype.isVector2=!0;let pt=wl;class rs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(d!==M||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*M;p<0&&(h=-h,f=-f,g=-g,M=-M,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,a=Math.sin(a*v)/E,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+M*a}else{l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+M*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cl=class Cl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cl.prototype.isVector3=!0;let L=Cl;const Do=new L,mu=new rs,Pl=class Pl{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],M=s[0],p=s[3],m=s[6],v=s[1],E=s[4],y=s[7],w=s[2],T=s[5],P=s[8];return r[0]=o*M+a*v+l*w,r[3]=o*p+a*E+l*T,r[6]=o*m+a*y+l*P,r[1]=c*M+u*v+d*w,r[4]=c*p+u*E+d*T,r[7]=c*m+u*y+d*P,r[2]=h*M+f*v+g*w,r[5]=h*p+f*E+g*T,r[8]=h*m+f*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=d*M,t[1]=(s*c-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(No.makeScale(t,e)),this}rotate(t){return this.premultiply(No.makeRotation(-t)),this}translate(t,e){return this.premultiply(No.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Pl.prototype.isMatrix3=!0;let Vt=Pl;const No=new Vt,gu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const n={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zr]:{primaries:t,whitePoint:i,transfer:$r,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const Qt=J_();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class j_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pi===void 0&&(Pi=Jr("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Pi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(kn(e[i]/255)*255):e[i]=kn(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Q_=0;class al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?j_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let tx=0;const Oo=new L;class ke extends bi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=On,s=On,r=Oe,o=mi,a=dn,l=Ye,c=ke.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=ss(),this.name="",this.source=new al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=hf;ke.DEFAULT_ANISOTROPY=1;const Il=class Il{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(f+1)/2,w=(m+1)/2,T=(u+h)/4,P=(d+M)/4,x=(g+p)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=P/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=x/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-M)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Il.prototype.isVector4=!0;let Me=Il;class ex extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new ke(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new al(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends ex{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vf extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nx extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const no=class no{constructor(t,e,i,s,r,o,a,l,c,u,d,h,f,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,M,p)}set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,M,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new no().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,M=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-M*c,e[9]=-a*l,e[2]=M-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,M=c*d;e[0]=h+M*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=M+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,M=c*d;e[0]=h-M*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=M-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,M=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+M,e[1]=l*d,e[5]=M*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=M-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-M*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+M,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ix,t,sx)}lookAt(t,e,i){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Xn.crossVectors(i,Ve),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Xn.crossVectors(i,Ve)),Xn.normalize(),js.crossVectors(Ve,Xn),s[0]=Xn.x,s[4]=js.x,s[8]=Ve.x,s[1]=Xn.y,s[5]=js.y,s[9]=Ve.y,s[2]=Xn.z,s[6]=js.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],M=i[6],p=i[10],m=i[14],v=i[3],E=i[7],y=i[11],w=i[15],T=s[0],P=s[4],x=s[8],A=s[12],I=s[1],R=s[5],F=s[9],W=s[13],X=s[2],N=s[6],z=s[10],U=s[14],j=s[3],nt=s[7],dt=s[11],xt=s[15];return r[0]=o*T+a*I+l*X+c*j,r[4]=o*P+a*R+l*N+c*nt,r[8]=o*x+a*F+l*z+c*dt,r[12]=o*A+a*W+l*U+c*xt,r[1]=u*T+d*I+h*X+f*j,r[5]=u*P+d*R+h*N+f*nt,r[9]=u*x+d*F+h*z+f*dt,r[13]=u*A+d*W+h*U+f*xt,r[2]=g*T+M*I+p*X+m*j,r[6]=g*P+M*R+p*N+m*nt,r[10]=g*x+M*F+p*z+m*dt,r[14]=g*A+M*W+p*U+m*xt,r[3]=v*T+E*I+y*X+w*j,r[7]=v*P+E*R+y*N+w*nt,r[11]=v*x+E*F+y*z+w*dt,r[15]=v*A+E*W+y*U+w*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],M=t[7],p=t[11],m=t[15],v=l*f-c*h,E=a*f-c*d,y=a*h-l*d,w=o*f-c*u,T=o*h-l*u,P=o*d-a*u;return e*(M*v-p*E+m*y)-i*(g*v-p*w+m*T)+s*(g*E-M*w+m*P)-r*(g*y-M*T+p*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],M=t[13],p=t[14],m=t[15],v=e*a-i*o,E=e*l-s*o,y=e*c-r*o,w=i*l-s*a,T=i*c-r*a,P=s*c-r*l,x=u*M-d*g,A=u*p-h*g,I=u*m-f*g,R=d*p-h*M,F=d*m-f*M,W=h*m-f*p,X=v*W-E*F+y*R+w*I-T*A+P*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/X;return t[0]=(a*W-l*F+c*R)*N,t[1]=(s*F-i*W-r*R)*N,t[2]=(M*P-p*T+m*w)*N,t[3]=(h*T-d*P-f*w)*N,t[4]=(l*I-o*W-c*A)*N,t[5]=(e*W-s*I+r*A)*N,t[6]=(p*y-g*P-m*E)*N,t[7]=(u*P-h*y+f*E)*N,t[8]=(o*F-a*I+c*x)*N,t[9]=(i*I-e*F-r*x)*N,t[10]=(g*T-M*y+m*v)*N,t[11]=(d*y-u*T-f*v)*N,t[12]=(a*A-o*R-l*x)*N,t[13]=(e*R-i*A+s*x)*N,t[14]=(M*E-g*w-p*v)*N,t[15]=(u*w-d*E+h*v)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,M=o*u,p=o*d,m=a*d,v=l*c,E=l*u,y=l*d,w=i.x,T=i.y,P=i.z;return s[0]=(1-(M+m))*w,s[1]=(f+y)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(h+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+E)*P,s[9]=(p-v)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ii.set(s[0],s[1],s[2]).length();const a=Ii.set(s[4],s[5],s[6]).length(),l=Ii.set(s[8],s[9],s[10]).length();r<0&&(o=-o),on.copy(this);const c=1/o,u=1/a,d=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=yn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Gs)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yn,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===yn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===Gs)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};no.prototype.isMatrix4=!0;let ae=no;const Ii=new L,on=new ae,ix=new L(0,0,0),sx=new L(1,1,1),Xn=new L,js=new L,Ve=new L,xu=new ae,vu=new rs;class ni{constructor(t=0,e=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rx=0;const Su=new L,Li=new rs,Cn=new ae,Qs=new L,ds=new L,ox=new L,ax=new rs,Mu=new L(1,0,0),yu=new L(0,1,0),Eu=new L(0,0,1),bu={type:"added"},cx={type:"removed"},Di={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Ie extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new L,e=new ni,i=new rs,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Vt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qs.copy(t):Qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ds,Qs,this.up):Cn.lookAt(Qs,ds,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Cn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),Di.child=t,this.dispatchEvent(Di),Di.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cx),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,ox),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,ax,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class se extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lx={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,i),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Bo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=$_(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Bo(o,r,t+1/3),this.g=Bo(o,r,t),this.b=Bo(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=Sf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Qt.workingToColorSpace(Ue.copy(this),t),Math.round($t(Ue.r*255,0,255))*65536+Math.round($t(Ue.g*255,0,255))*256+Math.round($t(Ue.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=tn){Qt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,s=Ue.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(tr);const i=Lo(Yn.h,tr.h,e),s=Lo(Yn.s,tr.s,e),r=Lo(Yn.l,tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new te;te.NAMES=Sf;class ux extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const an=new L,Pn=new L,Ho=new L,In=new L,Ni=new L,Ui=new L,Tu=new L,Go=new L,zo=new L,Vo=new L,Wo=new Me,Xo=new Me,Yo=new Me;class ln{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){an.subVectors(s,e),Pn.subVectors(i,e),Ho.subVectors(t,e);const o=an.dot(an),a=an.dot(Pn),l=an.dot(Ho),c=Pn.dot(Pn),u=Pn.dot(Ho),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Wo.setScalar(0),Xo.setScalar(0),Yo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(t,e,i,s){return an.subVectors(i,e),Pn.subVectors(t,e),an.cross(Pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),an.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,i),Ui.subVectors(r,i),Go.subVectors(t,i);const l=Ni.dot(Go),c=Ui.dot(Go);if(l<=0&&c<=0)return e.copy(i);zo.subVectors(t,s);const u=Ni.dot(zo),d=Ui.dot(zo);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ni,o);Vo.subVectors(t,r);const f=Ni.dot(Vo),g=Ui.dot(Vo);if(g>=0&&f<=g)return e.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ui,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Tu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Tu,a);const m=1/(p+M+h);return o=M*m,a=h*m,e.copy(i).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ti{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),nr.subVectors(this.max,fs),Oi.subVectors(t.a,fs),Fi.subVectors(t.b,fs),ki.subVectors(t.c,fs),qn.subVectors(Fi,Oi),Kn.subVectors(ki,Fi),oi.subVectors(Oi,ki);let e=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-oi.y,oi.x,0];return!qo(e,Oi,Fi,ki,nr)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Oi,Fi,ki,nr))?!1:(ir.crossVectors(qn,Kn),e=[ir.x,ir.y,ir.z],qo(e,Oi,Fi,ki,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,er=new Ti,Oi=new L,Fi=new L,ki=new L,qn=new L,Kn=new L,oi=new L,fs=new L,nr=new L,ir=new L,ai=new L;function qo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ai.fromArray(n,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Te=new L,sr=new pt;let hx=0;class fn extends bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hu&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Mf extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yf extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const dx=new Ti,ps=new L,Ko=new L;class os{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):dx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Ko)),this.expandByPoint(ps.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fx=0;const je=new ae,Zo=new Ie,Bi=new L,We=new Ti,ms=new Ti,we=new L;class Le extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y_(t)?yf:Mf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(We.min,ms.min),We.expandByPoint(we),we.addVectors(We.max,ms.max),We.expandByPoint(we)):(We.expandByPoint(ms.min),We.expandByPoint(ms.max))}We.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),we.add(Bi)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new L,l[x]=new L;const c=new L,u=new L,d=new L,h=new pt,f=new pt,g=new pt,M=new L,p=new L;function m(x,A,I){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(M),a[A].add(M),a[I].add(M),l[x].add(p),l[A].add(p),l[I].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,A=v.length;x<A;++x){const I=v[x],R=I.start,F=I.count;for(let W=R,X=R+F;W<X;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const E=new L,y=new L,w=new L,T=new L;function P(x){w.fromBufferAttribute(s,x),T.copy(w);const A=a[x];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(T,A);const R=y.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,A=v.length;x<A;++x){const I=v[x],R=I.start,F=I.count;for(let W=R,X=R+F;W<X;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new fn(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let px=0;class as extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Zi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Fa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Dn=new L,$o=new L,rr=new L,Zn=new L,Jo=new L,or=new L,jo=new L;class ll{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){$o.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub($o);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=Zn.dot(this.direction),l=-Zn.dot(rr),c=Zn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const M=1/u;d*=M,h*=M,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($o).addScaledVector(rr,h),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,s,r){Jo.subVectors(e,t),or.subVectors(i,t),jo.crossVectors(Jo,or);let o=this.direction.dot(jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(or.crossVectors(Zn,or));if(l<0)return null;const c=a*this.direction.dot(Jo.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(jo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mo extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Au=new ae,ci=new ll,ar=new os,Ru=new L,cr=new L,lr=new L,ur=new L,Qo=new L,hr=new L,wu=new L,dr=new L;class Ut extends Ie{constructor(t=new Le,e=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Qo.fromBufferAttribute(d,t),o?hr.addScaledVector(Qo,u):hr.addScaledVector(Qo.sub(e),u))}e.add(hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(ar.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ar,Ru)===null||ci.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Au),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=E;y<w;y+=3){const T=a.getX(y),P=a.getX(y+1),x=a.getX(y+2);s=fr(this,m,t,i,c,u,d,T,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){const v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=fr(this,o,t,i,c,u,d,v,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const p=h[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=E;y<w;y+=3){const T=y,P=y+1,x=y+2;s=fr(this,m,t,i,c,u,d,T,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){const v=p,E=p+1,y=p+2;s=fr(this,o,t,i,c,u,d,v,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function mx(n,t,e,i,s,r,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;dr.copy(a),dr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:n}}function fr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,cr),n.getVertexPosition(l,lr),n.getVertexPosition(c,ur);const u=mx(n,t,e,i,cr,lr,ur,wu);if(u){const d=new L;ln.getBarycoord(wu,cr,lr,ur,d),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,d,new pt)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,d,new pt)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};ln.getNormal(cr,lr,ur,h.normal),u.face=h,u.barycoord=d}return u}class Ef extends ke{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Pe,u=Pe,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cu extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new ae,Pu=new ae,pr=[],Iu=new Ti,gx=new ae,gs=new Ut,_s=new os;class _i extends Ut{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cu(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hi),Iu.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Iu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hi),_s.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(i),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),Pu.multiplyMatrices(i,Hi),gs.matrixWorld=Pu,gs.raycast(t,pr);for(let o=0,a=pr.length;o<a;o++){const l=pr[o];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ef(new Float32Array(s*this.count),s,this.count,el,hn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ta=new L,_x=new L,xx=new Vt;class hi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ta.subVectors(i,e).cross(_x.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(ta),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xx.getNormalMatrix(t),s=this.coplanarPoint(ta).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new os,vx=new pt(.5,.5),mr=new L;class ul{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],M=r[9],p=r[10],m=r[11],v=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,m-g,w-v).normalize(),s[1].setComponents(c+o,f+u,m+g,w+v).normalize(),s[2].setComponents(c+a,f+d,m+M,w+E).normalize(),s[3].setComponents(c-a,f-d,m-M,w-E).normalize(),i)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,f-h,m-p,w-y).normalize();else if(s[4].setComponents(c-l,f-h,m-p,w-y).normalize(),e===yn)s[5].setComponents(c+l,f+h,m+p,w+y).normalize();else if(e===Gs)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=vx.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hl extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jr=new L,Qr=new L,Lu=new ae,xs=new ll,gr=new os,ea=new L,Du=new L;class dl extends Ie{constructor(t=new Le,e=new hl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)jr.fromBufferAttribute(e,s-1),Qr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=jr.distanceTo(Qr);t.setAttribute("lineDistance",new _e(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;Lu.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let M=f,p=g-1;M<p;M+=c){const m=u.getX(M),v=u.getX(M+1),E=_r(this,t,xs,l,m,v,M);E&&e.push(E)}if(this.isLineLoop){const M=u.getX(g-1),p=u.getX(f),m=_r(this,t,xs,l,M,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=f,p=g-1;M<p;M+=c){const m=_r(this,t,xs,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){const M=_r(this,t,xs,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _r(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(jr.fromBufferAttribute(a,s),Qr.fromBufferAttribute(a,r),e.distanceSqToSegment(jr,Qr,ea,Du)>i)return;ea.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ea);if(!(c<t.near||c>t.far))return{distance:c,point:Du.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Sx extends dl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class bf extends ke{constructor(t=[],e=Si,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qi extends ke{constructor(t,e,i=Tn,s,r,o,a=Pe,l=Pe,c,u=Hn,d=1){if(u!==Hn&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new al(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mx extends Qi{constructor(t,e=Tn,i=Si,s,r,o=Pe,a=Pe,l,c=Hn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tf extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xe extends Le{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function g(M,p,m,v,E,y,w,T,P,x,A){const I=y/P,R=w/x,F=y/2,W=w/2,X=T/2,N=P+1,z=x+1;let U=0,j=0;const nt=new L;for(let dt=0;dt<z;dt++){const xt=dt*R-W;for(let At=0;At<N;At++){const Yt=At*I-F;nt[M]=Yt*v,nt[p]=xt*E,nt[m]=X,c.push(nt.x,nt.y,nt.z),nt[M]=0,nt[p]=0,nt[m]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),d.push(At/P),d.push(1-dt/x),U+=1}}for(let dt=0;dt<x;dt++)for(let xt=0;xt<P;xt++){const At=h+xt+N*dt,Yt=h+xt+N*(dt+1),ee=h+(xt+1)+N*(dt+1),Ht=h+(xt+1)+N*dt;l.push(At,Yt,Ht),l.push(Yt,ee,Ht),j+=6}a.addGroup(f,j,A),f+=j,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yi extends Le{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const M=[],p=i/2;let m=0;v(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function v(){const y=new L,w=new L;let T=0;const P=(e-t)/i;for(let x=0;x<=r;x++){const A=[],I=x/r,R=I*(e-t)+t;for(let F=0;F<=s;F++){const W=F/s,X=W*l+a,N=Math.sin(X),z=Math.cos(X);w.x=R*N,w.y=-I*i+p,w.z=R*z,d.push(w.x,w.y,w.z),y.set(N,P,z).normalize(),h.push(y.x,y.y,y.z),f.push(W,1-I),A.push(g++)}M.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){const I=M[A][x],R=M[A+1][x],F=M[A+1][x+1],W=M[A][x+1];(t>0||A!==0)&&(u.push(I,R,W),T+=3),(e>0||A!==r-1)&&(u.push(R,F,W),T+=3)}c.addGroup(m,T,0),m+=T}function E(y){const w=g,T=new pt,P=new L;let x=0;const A=y===!0?t:e,I=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,p*I,0),h.push(0,I,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=s;F++){const X=F/s*l+a,N=Math.cos(X),z=Math.sin(X);P.x=A*z,P.y=p*I,P.z=A*N,d.push(P.x,P.y,P.z),h.push(0,I,0),T.x=N*.5+.5,T.y=z*.5*I+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){const W=w+F,X=R+F;y===!0?u.push(X,X+1,W):u.push(X+1,X,W),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zs extends yi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fl extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const E=new L,y=new L,w=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],y),f(e[T+2],w),l(E,y,w,v)}function l(v,E,y,w){const T=w+1,P=[];for(let x=0;x<=T;x++){P[x]=[];const A=v.clone().lerp(y,x/T),I=E.clone().lerp(y,x/T),R=T-x;for(let F=0;F<=R;F++)F===0&&x===T?P[x][F]=A:P[x][F]=A.clone().lerp(I,F/R)}for(let x=0;x<T;x++)for(let A=0;A<2*(T-x)-1;A++){const I=Math.floor(A/2);A%2===0?(h(P[x][I+1]),h(P[x+1][I]),h(P[x][I])):(h(P[x][I+1]),h(P[x+1][I+1]),h(P[x+1][I]))}}function c(v){const E=new L;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(v),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const v=new L;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const y=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(y,1-w)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const E=o[v+0],y=o[v+2],w=o[v+4],T=Math.max(E,y,w),P=Math.min(E,y,w);T>.9&&P<.1&&(E<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,E){const y=v*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const v=new L,E=new L,y=new L,w=new L,T=new pt,P=new pt,x=new pt;for(let A=0,I=0;A<r.length;A+=9,I+=6){v.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),T.set(o[I+0],o[I+1]),P.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),w.copy(v).add(E).add(y).divideScalar(3);const R=p(w);M(T,I+0,v,R),M(P,I+2,E,R),M(x,I+4,y,R)}}function M(v,E,y,w){w<0&&v.x===1&&(o[E]=v.x-1),y.x===0&&y.z===0&&(o[E]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.vertices,t.indices,t.radius,t.detail)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,s=[],r=[],o=[],a=new L,l=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pl extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yx extends pl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ml(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Nu=new L,Uu=new L,na=new ml,ia=new ml,sa=new ml;class Ex extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Uu.subVectors(s[0],s[1]).add(s[0]),c=Uu);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Nu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),na.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,M,p),ia.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,M,p),sa.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,M,p)}else this.curveType==="catmullrom"&&(na.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ia.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),sa.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(na.calc(l),ia.calc(l),sa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ou(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function bx(n,t){const e=1-n;return e*e*t}function Tx(n,t){return 2*(1-n)*n*t}function Ax(n,t){return n*n*t}function Cs(n,t,e,i){return bx(n,t)+Tx(n,e)+Ax(n,i)}function Rx(n,t){const e=1-n;return e*e*e*t}function wx(n,t){const e=1-n;return 3*e*e*n*t}function Cx(n,t){return 3*(1-n)*n*n*t}function Px(n,t){return n*n*n*t}function Ps(n,t,e,i,s){return Rx(n,t)+wx(n,e)+Cx(n,i)+Px(n,s)}class Af extends Rn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ix extends Rn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends Rn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lx extends Rn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Rn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dx extends Rn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Ou(a,l.x,c.x,u.x,d.x),Ou(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Ac=Object.freeze({__proto__:null,ArcCurve:yx,CatmullRomCurve3:Ex,CubicBezierCurve:Af,CubicBezierCurve3:Ix,EllipseCurve:pl,LineCurve:Rf,LineCurve3:Lx,QuadraticBezierCurve:wf,QuadraticBezierCurve3:Dx,SplineCurve:Cf});class Nx extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ac[s.type]().fromJSON(s))}return this}}class Fu extends Nx{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Rf(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new wf(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Af(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Cf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new pl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pf extends Fu{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Fu().fromJSON(s))}return this}}function Ux(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=If(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Hx(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let u=a,d=l;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Vs(r,o,e,a,l,c,0),o}function If(n,t,e,i,s){let r;if(s===Jx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=ku(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=ku(o/i|0,n[o],n[o+1],r);return r&&ts(r,r.next)&&(Xs(r),r=r.next),r}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ts(e,e.next)||ve(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Xx(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Fx(n,i,s,r):Ox(n)){t.push(l.i,n.i,c.i),Xs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=kx(Ei(n),t),Vs(n,t,e,i,s,r,2)):o===2&&Bx(n,t,e,i,s,r):Vs(Ei(n),t,e,i,s,r,1);break}}}function Ox(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Ts(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fx(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),M=Math.max(a,l,c),p=Math.max(u,d,h),m=Rc(f,g,t,e,i),v=Rc(M,p,t,e,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=m&&y&&y.z<=v;){if(E.x>=f&&E.x<=M&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ts(a,u,l,d,c,h,E.x,E.y)&&ve(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Ts(a,u,l,d,c,h,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=M&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ts(a,u,l,d,c,h,E.x,E.y)&&ve(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Ts(a,u,l,d,c,h,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kx(n,t){let e=n;do{const i=e.prev,s=e.next.next;!ts(i,s)&&Df(i,e,e.next,s)&&Ws(i,s)&&Ws(s,i)&&(t.push(i.i,e.i,s.i),Xs(e),Xs(e.next),e=n=s),e=e.next}while(e!==n);return Ei(e)}function Bx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kx(o,a)){let l=Nf(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Vs(o,t,e,i,s,r,0),Vs(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Hx(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=If(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(qx(c))}s.sort(Gx);for(let r=0;r<s.length;r++)e=zx(s[r],e);return e}function Gx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function zx(n,t){const e=Vx(n,t);if(!e)return t;const i=Nf(e,n);return Ei(i,i.next),Ei(e,e.next)}function Vx(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(ts(n,e))return e;do{if(ts(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Lf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Ws(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Wx(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Wx(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function Xx(n,t,e,i){let s=n;do s.z===0&&(s.z=Rc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Yx(s)}function Yx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Rc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function qx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Lf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ts(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Lf(n,t,e,i,s,r,o,a)}function Kx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Zx(n,t)&&(Ws(n,t)&&Ws(t,n)&&$x(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||ts(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ts(n,t){return n.x===t.x&&n.y===t.y}function Df(n,t,e,i){const s=vr(ve(n,t,e)),r=vr(ve(n,t,i)),o=vr(ve(e,i,n)),a=vr(ve(e,i,t));return!!(s!==r&&o!==a||s===0&&xr(n,e,t)||r===0&&xr(n,i,t)||o===0&&xr(e,n,i)||a===0&&xr(e,t,i))}function xr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function vr(n){return n>0?1:n<0?-1:0}function Zx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ws(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function $x(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Nf(n,t){const e=wc(n.i,n.x,n.y),i=wc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ku(n,t,e,i){const s=wc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class jx{static triangulate(t,e,i=2){return Ux(t,e,i)}}class Yi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Yi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Bu(t),Hu(i,t);let o=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Hu(i,e[l]);const a=jx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class gl extends Le{constructor(t=new Pf([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Qx;let E,y=!1,w,T,P,x;if(m){E=m.getSpacedPoints(u),y=!0,h=!1;const J=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,J),T=new L,P=new L,x=new L}h||(p=0,f=0,g=0,M=0);const A=a.extractPoints(c);let I=A.shape;const R=A.holes;if(!Yi.isClockWise(I)){I=I.reverse();for(let J=0,it=R.length;J<it;J++){const Q=R[J];Yi.isClockWise(Q)&&(R[J]=Q.reverse())}}function W(J){const Q=10000000000000001e-36;let vt=J[0];for(let ft=1;ft<=J.length;ft++){const kt=ft%J.length,C=J[kt],Gt=C.x-vt.x,Rt=C.y-vt.y,Bt=Gt*Gt+Rt*Rt,st=Math.max(Math.abs(C.x),Math.abs(C.y),Math.abs(vt.x),Math.abs(vt.y)),oe=Q*st*st;if(Bt<=oe){J.splice(kt,1),ft--;continue}vt=C}}W(I),R.forEach(W);const X=R.length,N=I;for(let J=0;J<X;J++){const it=R[J];I=I.concat(it)}function z(J,it,Q){return it||jt("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,Q)}const U=I.length;function j(J,it,Q){let vt,ft,kt;const C=J.x-it.x,Gt=J.y-it.y,Rt=Q.x-J.x,Bt=Q.y-J.y,st=C*C+Gt*Gt,oe=C*Bt-Gt*Rt;if(Math.abs(oe)>Number.EPSILON){const b=Math.sqrt(st),_=Math.sqrt(Rt*Rt+Bt*Bt),k=it.x-Gt/b,K=it.y+C/b,tt=Q.x-Bt/_,rt=Q.y+Rt/_,lt=((tt-k)*Bt-(rt-K)*Rt)/(C*Bt-Gt*Rt);vt=k+C*lt-J.x,ft=K+Gt*lt-J.y;const Y=vt*vt+ft*ft;if(Y<=2)return new pt(vt,ft);kt=Math.sqrt(Y/2)}else{let b=!1;C>Number.EPSILON?Rt>Number.EPSILON&&(b=!0):C<-Number.EPSILON?Rt<-Number.EPSILON&&(b=!0):Math.sign(Gt)===Math.sign(Bt)&&(b=!0),b?(vt=-Gt,ft=C,kt=Math.sqrt(st)):(vt=C,ft=Gt,kt=Math.sqrt(st/2))}return new pt(vt/kt,ft/kt)}const nt=[];for(let J=0,it=N.length,Q=it-1,vt=J+1;J<it;J++,Q++,vt++)Q===it&&(Q=0),vt===it&&(vt=0),nt[J]=j(N[J],N[Q],N[vt]);const dt=[];let xt,At=nt.concat();for(let J=0,it=X;J<it;J++){const Q=R[J];xt=[];for(let vt=0,ft=Q.length,kt=ft-1,C=vt+1;vt<ft;vt++,kt++,C++)kt===ft&&(kt=0),C===ft&&(C=0),xt[vt]=j(Q[vt],Q[kt],Q[C]);dt.push(xt),At=At.concat(xt)}let Yt;if(p===0)Yt=Yi.triangulateShape(N,R);else{const J=[],it=[];for(let Q=0;Q<p;Q++){const vt=Q/p,ft=f*Math.cos(vt*Math.PI/2),kt=g*Math.sin(vt*Math.PI/2)+M;for(let C=0,Gt=N.length;C<Gt;C++){const Rt=z(N[C],nt[C],kt);Ct(Rt.x,Rt.y,-ft),vt===0&&J.push(Rt)}for(let C=0,Gt=X;C<Gt;C++){const Rt=R[C];xt=dt[C];const Bt=[];for(let st=0,oe=Rt.length;st<oe;st++){const b=z(Rt[st],xt[st],kt);Ct(b.x,b.y,-ft),vt===0&&Bt.push(b)}vt===0&&it.push(Bt)}}Yt=Yi.triangulateShape(J,it)}const ee=Yt.length,Ht=g+M;for(let J=0;J<U;J++){const it=h?z(I[J],At[J],Ht):I[J];y?(P.copy(w.normals[0]).multiplyScalar(it.x),T.copy(w.binormals[0]).multiplyScalar(it.y),x.copy(E[0]).add(P).add(T),Ct(x.x,x.y,x.z)):Ct(it.x,it.y,0)}for(let J=1;J<=u;J++)for(let it=0;it<U;it++){const Q=h?z(I[it],At[it],Ht):I[it];y?(P.copy(w.normals[J]).multiplyScalar(Q.x),T.copy(w.binormals[J]).multiplyScalar(Q.y),x.copy(E[J]).add(P).add(T),Ct(x.x,x.y,x.z)):Ct(Q.x,Q.y,d/u*J)}for(let J=p-1;J>=0;J--){const it=J/p,Q=f*Math.cos(it*Math.PI/2),vt=g*Math.sin(it*Math.PI/2)+M;for(let ft=0,kt=N.length;ft<kt;ft++){const C=z(N[ft],nt[ft],vt);Ct(C.x,C.y,d+Q)}for(let ft=0,kt=R.length;ft<kt;ft++){const C=R[ft];xt=dt[ft];for(let Gt=0,Rt=C.length;Gt<Rt;Gt++){const Bt=z(C[Gt],xt[Gt],vt);y?Ct(Bt.x,Bt.y+E[u-1].y,E[u-1].x+Q):Ct(Bt.x,Bt.y,d+Q)}}}$(),gt();function $(){const J=s.length/3;if(h){let it=0,Q=U*it;for(let vt=0;vt<ee;vt++){const ft=Yt[vt];Ot(ft[2]+Q,ft[1]+Q,ft[0]+Q)}it=u+p*2,Q=U*it;for(let vt=0;vt<ee;vt++){const ft=Yt[vt];Ot(ft[0]+Q,ft[1]+Q,ft[2]+Q)}}else{for(let it=0;it<ee;it++){const Q=Yt[it];Ot(Q[2],Q[1],Q[0])}for(let it=0;it<ee;it++){const Q=Yt[it];Ot(Q[0]+U*u,Q[1]+U*u,Q[2]+U*u)}}i.addGroup(J,s.length/3-J,0)}function gt(){const J=s.length/3;let it=0;ot(N,it),it+=N.length;for(let Q=0,vt=R.length;Q<vt;Q++){const ft=R[Q];ot(ft,it),it+=ft.length}i.addGroup(J,s.length/3-J,1)}function ot(J,it){let Q=J.length;for(;--Q>=0;){const vt=Q;let ft=Q-1;ft<0&&(ft=J.length-1);for(let kt=0,C=u+p*2;kt<C;kt++){const Gt=U*kt,Rt=U*(kt+1),Bt=it+vt+Gt,st=it+ft+Gt,oe=it+ft+Rt,b=it+vt+Rt;Dt(Bt,st,oe,b)}}}function Ct(J,it,Q){l.push(J),l.push(it),l.push(Q)}function Ot(J,it,Q){ne(J),ne(it),ne(Q);const vt=s.length/3,ft=v.generateTopUV(i,s,vt-3,vt-2,vt-1);Ft(ft[0]),Ft(ft[1]),Ft(ft[2])}function Dt(J,it,Q,vt){ne(J),ne(it),ne(vt),ne(it),ne(Q),ne(vt);const ft=s.length/3,kt=v.generateSideWallUV(i,s,ft-6,ft-3,ft-2,ft-1);Ft(kt[0]),Ft(kt[1]),Ft(kt[3]),Ft(kt[1]),Ft(kt[2]),Ft(kt[3])}function ne(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Ft(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return tv(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ac[s.type]().fromJSON(s)),new gl(i,t.options)}}const Qx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-d),new pt(h,1-g),new pt(M,1-m)]:[new pt(a,1-l),new pt(u,1-d),new pt(f,1-g),new pt(p,1-m)]}};function tv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Is extends fl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Is(t.radius,t.detail)}}class cs extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],M=[],p=[];for(let m=0;m<u;m++){const v=m*h-o;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-v,0),M.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const E=v+c*m,y=v+c*(m+1),w=v+1+c*(m+1),T=v+1+c*m;f.push(E,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class _l extends Le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new L,h=new L,f=[],g=[],M=[],p=[];for(let m=0;m<=i;m++){const v=[],E=m/i;let y=0;m===0&&o===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const T=w/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),p.push(T+y,1-E),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const E=u[m][v+1],y=u[m][v],w=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&f.push(E,y,T),(m!==i-1||l<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class go extends Le{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new L,f=new L,g=new L;for(let M=0;M<=i;M++){const p=o+M/i*a;for(let m=0;m<=s;m++){const v=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let p=1;p<=s;p++){const m=(s+1)*M+p-1,v=(s+1)*(M-1)+p-1,E=(s+1)*(M-1)+p,y=(s+1)*M+p;l.push(m,v,y),l.push(v,E,y)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function es(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Gu(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Gu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=es(n[e]);for(const s in i)t[s]=i[s]}return t}function Gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ev(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const nv={clone:es,merge:Fe};var iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rv extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ce extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ov extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class av extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Of extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const ra=new ae,zu=new L,Vu=new L;class cv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Gs||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sr=new L,Mr=new rs,_n=new L;class Ff extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sr,Mr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,Mr,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Sr,Mr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,Mr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,Wu=new pt,Xu=new pt;class en extends Ff{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Io*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class xl extends Ff{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lv extends cv{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uv extends Of{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new lv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class hv extends Of{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gi=-90,zi=1;class dv extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Gi,zi,t,e);s.layers=this.layers,this.add(s);const r=new en(Gi,zi,t,e);r.layers=this.layers,this.add(r);const o=new en(Gi,zi,t,e);o.layers=this.layers,this.add(o);const a=new en(Gi,zi,t,e);a.layers=this.layers,this.add(a);const l=new en(Gi,zi,t,e);l.layers=this.layers,this.add(l);const c=new en(Gi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fv extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yu=new ae;class pv{constructor(t,e,i=0,s=1/0){this.ray=new ll(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(t,e=!0,i=[]){return Cc(t,this,i,e),i.sort(qu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Cc(t[s],this,i,e);return i.sort(qu),i}}function qu(n,t){return n.distance-t.distance}function Cc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Cc(r[o],t,e,!0)}}const Ll=class Ll{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ll.prototype.isMatrix2=!0;let Ku=Ll;function Zu(n,t,e,i){const s=mv(i);switch(e){case gf:return n*t;case el:return n*t/s.components*s.byteLength;case nl:return n*t/s.components*s.byteLength;case Mi:return n*t*2/s.components*s.byteLength;case il:return n*t*2/s.components*s.byteLength;case _f:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case sl:return n*t*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Or:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:case $a:return Math.max(n,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(n,8)*Math.max(t,8)/2;case Ja:case ja:case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qa:case qr:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _c:case xc:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sc:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Kr:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(n){switch(n){case Ye:case df:return{byteLength:1,components:1};case Bs:case ff:case Bn:return{byteLength:2,components:1};case Qc:case tl:return{byteLength:2,components:4};case Tn:case jc:case hn:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function gv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,d[h]=M)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const M=d[f];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xv=`#ifdef USE_ALPHAHASH
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
#endif`,vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
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
#endif`,bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tv=`#ifdef USE_BATCHING
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
#endif`,Av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pv=`#ifdef USE_IRIDESCENCE
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
#endif`,Iv=`#ifdef USE_BUMPMAP
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
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zv=`vec3 transformedNormal = objectNormal;
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
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,tS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sS=`#ifdef USE_GRADIENTMAP
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
}`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lS=`#ifdef USE_ENVMAP
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
#endif`,uS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pS=`PhysicalMaterial material;
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
#endif`,mS=`uniform sampler2D dfgLUT;
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
}`,gS=`
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
#endif`,_S=`#if defined( RE_IndirectDiffuse )
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
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,SS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RS=`#if defined( USE_POINTS_UV )
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
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DS=`#ifdef USE_MORPHTARGETS
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
#endif`,NS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,US=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HS=`#ifdef USE_NORMALMAP
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
#endif`,GS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nM=`float getShadowMask() {
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
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
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
#endif`,rM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
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
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
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
#endif`,dM=`#ifdef USE_TRANSMISSION
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
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
}`,bM=`#if DEPTH_PACKING == 3200
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
}`,TM=`#define DISTANCE
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
}`,AM=`#define DISTANCE
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`uniform float scale;
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
}`,PM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,LM=`uniform vec3 diffuse;
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
}`,DM=`#define LAMBERT
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
}`,NM=`#define LAMBERT
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
}`,UM=`#define MATCAP
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
}`,OM=`#define MATCAP
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
}`,FM=`#define NORMAL
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
}`,kM=`#define NORMAL
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
}`,BM=`#define PHONG
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
}`,HM=`#define PHONG
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
}`,GM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
}`,VM=`#define TOON
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
}`,WM=`#define TOON
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
}`,XM=`uniform float size;
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
}`,YM=`uniform vec3 diffuse;
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
}`,qM=`#include <common>
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
}`,KM=`uniform vec3 color;
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
}`,ZM=`uniform float rotation;
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
}`,$M=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:_v,alphahash_pars_fragment:xv,alphamap_fragment:vv,alphamap_pars_fragment:Sv,alphatest_fragment:Mv,alphatest_pars_fragment:yv,aomap_fragment:Ev,aomap_pars_fragment:bv,batching_pars_vertex:Tv,batching_vertex:Av,begin_vertex:Rv,beginnormal_vertex:wv,bsdfs:Cv,iridescence_fragment:Pv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Lv,clipping_planes_pars_fragment:Dv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Uv,color_fragment:Ov,color_pars_fragment:Fv,color_pars_vertex:kv,color_vertex:Bv,common:Hv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:zv,displacementmap_pars_vertex:Vv,displacementmap_vertex:Wv,emissivemap_fragment:Xv,emissivemap_pars_fragment:Yv,colorspace_fragment:qv,colorspace_pars_fragment:Kv,envmap_fragment:Zv,envmap_common_pars_fragment:$v,envmap_pars_fragment:Jv,envmap_pars_vertex:jv,envmap_physical_pars_fragment:lS,envmap_vertex:Qv,fog_vertex:tS,fog_pars_vertex:eS,fog_fragment:nS,fog_pars_fragment:iS,gradientmap_pars_fragment:sS,lightmap_pars_fragment:rS,lights_lambert_fragment:oS,lights_lambert_pars_fragment:aS,lights_pars_begin:cS,lights_toon_fragment:uS,lights_toon_pars_fragment:hS,lights_phong_fragment:dS,lights_phong_pars_fragment:fS,lights_physical_fragment:pS,lights_physical_pars_fragment:mS,lights_fragment_begin:gS,lights_fragment_maps:_S,lights_fragment_end:xS,lightprobes_pars_fragment:vS,logdepthbuf_fragment:SS,logdepthbuf_pars_fragment:MS,logdepthbuf_pars_vertex:yS,logdepthbuf_vertex:ES,map_fragment:bS,map_pars_fragment:TS,map_particle_fragment:AS,map_particle_pars_fragment:RS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:CS,morphinstance_vertex:PS,morphcolor_vertex:IS,morphnormal_vertex:LS,morphtarget_pars_vertex:DS,morphtarget_vertex:NS,normal_fragment_begin:US,normal_fragment_maps:OS,normal_pars_fragment:FS,normal_pars_vertex:kS,normal_vertex:BS,normalmap_pars_fragment:HS,clearcoat_normal_fragment_begin:GS,clearcoat_normal_fragment_maps:zS,clearcoat_pars_fragment:VS,iridescence_pars_fragment:WS,opaque_fragment:XS,packing:YS,premultiplied_alpha_fragment:qS,project_vertex:KS,dithering_fragment:ZS,dithering_pars_fragment:$S,roughnessmap_fragment:JS,roughnessmap_pars_fragment:jS,shadowmap_pars_fragment:QS,shadowmap_pars_vertex:tM,shadowmap_vertex:eM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:sM,skinning_vertex:rM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:cM,tonemapping_fragment:lM,tonemapping_pars_fragment:uM,transmission_fragment:hM,transmission_pars_fragment:dM,uv_pars_fragment:fM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:_M,background_frag:xM,backgroundCube_vert:vM,backgroundCube_frag:SM,cube_vert:MM,cube_frag:yM,depth_vert:EM,depth_frag:bM,distance_vert:TM,distance_frag:AM,equirect_vert:RM,equirect_frag:wM,linedashed_vert:CM,linedashed_frag:PM,meshbasic_vert:IM,meshbasic_frag:LM,meshlambert_vert:DM,meshlambert_frag:NM,meshmatcap_vert:UM,meshmatcap_frag:OM,meshnormal_vert:FM,meshnormal_frag:kM,meshphong_vert:BM,meshphong_frag:HM,meshphysical_vert:GM,meshphysical_frag:zM,meshtoon_vert:VM,meshtoon_frag:WM,points_vert:XM,points_frag:YM,shadow_vert:qM,shadow_frag:KM,sprite_vert:ZM,sprite_frag:$M},mt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Sn={basic:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Fe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Fe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new te(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Fe([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Fe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Fe([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Fe([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Fe([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Fe([mt.lights,mt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Sn.physical={uniforms:Fe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const yr={r:0,b:0,g:0},JM=new ae,Bf=new Vt;Bf.set(-1,0,0,0,1,0,0,0,1);function jM(n,t,e,i,s,r){const o=new te(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(v){let E=!1;const y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(v,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===po)?(c===void 0&&(c=new Ut(new xe(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:es(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bf),c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ut(new cs(2,2),new An({name:"BackgroundMaterial",uniforms:es(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(yr,Uf(n)),e.buffers.color.setClear(yr.r,yr.g,yr.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:M,dispose:m}}function QM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(R,F,W,X,N){let z=!1;const U=d(R,X,W,F);r!==U&&(r=U,c(r.object)),z=f(R,X,W,N),z&&g(R,X,W,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(R,F,W,X),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,F,W,X){const N=X.wireframe===!0;let z=i[F.id];z===void 0&&(z={},i[F.id]=z);const U=R.isInstancedMesh===!0?R.id:0;let j=z[U];j===void 0&&(j={},z[U]=j);let nt=j[W.id];nt===void 0&&(nt={},j[W.id]=nt);let dt=nt[N];return dt===void 0&&(dt=h(l()),nt[N]=dt),dt}function h(R){const F=[],W=[],X=[];for(let N=0;N<e;N++)F[N]=0,W[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,F,W,X){const N=r.attributes,z=F.attributes;let U=0;const j=W.getAttributes();for(const nt in j)if(j[nt].location>=0){const xt=N[nt];let At=z[nt];if(At===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(At=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(At=R.instanceColor)),xt===void 0||xt.attribute!==At||At&&xt.data!==At.data)return!0;U++}return r.attributesNum!==U||r.index!==X}function g(R,F,W,X){const N={},z=F.attributes;let U=0;const j=W.getAttributes();for(const nt in j)if(j[nt].location>=0){let xt=z[nt];xt===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const At={};At.attribute=xt,xt&&xt.data&&(At.data=xt.data),N[nt]=At,U++}r.attributes=N,r.attributesNum=U,r.index=X}function M(){const R=r.newAttributes;for(let F=0,W=R.length;F<W;F++)R[F]=0}function p(R){m(R,0)}function m(R,F){const W=r.newAttributes,X=r.enabledAttributes,N=r.attributeDivisors;W[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),N[R]!==F&&(n.vertexAttribDivisor(R,F),N[R]=F)}function v(){const R=r.newAttributes,F=r.enabledAttributes;for(let W=0,X=F.length;W<X;W++)F[W]!==R[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function E(R,F,W,X,N,z,U){U===!0?n.vertexAttribIPointer(R,F,W,N,z):n.vertexAttribPointer(R,F,W,X,N,z)}function y(R,F,W,X){M();const N=X.attributes,z=W.getAttributes(),U=F.defaultAttributeValues;for(const j in z){const nt=z[j];if(nt.location>=0){let dt=N[j];if(dt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),dt!==void 0){const xt=dt.normalized,At=dt.itemSize,Yt=t.get(dt);if(Yt===void 0)continue;const ee=Yt.buffer,Ht=Yt.type,$=Yt.bytesPerElement,gt=Ht===n.INT||Ht===n.UNSIGNED_INT||dt.gpuType===jc;if(dt.isInterleavedBufferAttribute){const ot=dt.data,Ct=ot.stride,Ot=dt.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<nt.locationSize;Dt++)m(nt.location+Dt,ot.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<nt.locationSize;Dt++)p(nt.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Dt=0;Dt<nt.locationSize;Dt++)E(nt.location+Dt,At/nt.locationSize,Ht,xt,Ct*$,(Ot+At/nt.locationSize*Dt)*$,gt)}else{if(dt.isInstancedBufferAttribute){for(let ot=0;ot<nt.locationSize;ot++)m(nt.location+ot,dt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ot=0;ot<nt.locationSize;ot++)p(nt.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let ot=0;ot<nt.locationSize;ot++)E(nt.location+ot,At/nt.locationSize,Ht,xt,At*$,At/nt.locationSize*ot*$,gt)}}else if(U!==void 0){const xt=U[j];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(nt.location,xt);break;case 3:n.vertexAttrib3fv(nt.location,xt);break;case 4:n.vertexAttrib4fv(nt.location,xt);break;default:n.vertexAttrib1fv(nt.location,xt)}}}}v()}function w(){A();for(const R in i){const F=i[R];for(const W in F){const X=F[W];for(const N in X){const z=X[N];for(const U in z)u(z[U].object),delete z[U];delete X[N]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const F=i[R.id];for(const W in F){const X=F[W];for(const N in X){const z=X[N];for(const U in z)u(z[U].object),delete z[U];delete X[N]}}delete i[R.id]}function P(R){for(const F in i){const W=i[F];for(const X in W){const N=W[X];if(N[R.id]===void 0)continue;const z=N[R.id];for(const U in z)u(z[U].object),delete z[U];delete N[R.id]}}}function x(R){for(const F in i){const W=i[F],X=R.isInstancedMesh===!0?R.id:0,N=W[X];if(N!==void 0){for(const z in N){const U=N[z];for(const j in U)u(U[j].object),delete U[j];delete N[z]}delete W[X],Object.keys(W).length===0&&delete i[F]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:p,disableUnusedAttributes:v}}function ty(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ey(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==dn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ye&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hn&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:T}}function ny(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new hi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:i,E=v*4;let y=m.clippingState||null;l.value=y,y=u(g,h,E,f);for(let w=0;w!==E;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const m=f+M*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==M;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}const Qn=4,$u=[.125,.215,.35,.446,.526,.582],fi=20,iy=256,vs=new xl,Ju=new te;let oa=null,aa=0,ca=0,la=!1;const sy=new L;class ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=sy}=r;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,ca),this._renderer.xr.enabled=la,t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Bn,format:dn,colorSpace:Zr,depthBuffer:!1},s=Qu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ry(r)),this._blurMaterial=ay(r,t,e),this._ggxMaterial=oy(r,t,e)}return s}_compileMaterial(t){const e=new Ut(new Le,t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,i,s,r){const l=new en(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ju),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new xe,new mo({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let m=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,m=!0):(p.color.copy(Ju),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;Vi(s,y*w,E>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Si||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vi(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,vs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,M=this._sizeLods[i],p=3*M*(i>g-Qn?i-g+Qn:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Vi(r,p,m,3*M,2*M),s.setRenderTarget(r),s.render(a,vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Vi(t,p,m,3*M,2*M),s.setRenderTarget(t),s.render(a,vs)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),M=r/g,p=isFinite(r)?1+Math.floor(u*M):fi;p>fi&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const m=[];let v=0;for(let P=0;P<fi;++P){const x=P/M,A=Math.exp(-x*x/2);m.push(A),P===0?v+=A:P<p&&(v+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const y=this._sizeLods[s],w=3*y*(s>E-Qn?s-E+Qn:0),T=4*(this._cubeSize-y);Vi(e,w,T,3*y,2*y),l.setRenderTarget(e),l.render(d,vs)}}function ry(n){const t=[],e=[],i=[];let s=n;const r=n-Qn+1+$u.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Qn?l=$u[o-n+Qn-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,M=3,p=2,m=1,v=new Float32Array(M*g*f),E=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,x=T>2?0:-1,A=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];v.set(A,M*g*T),E.set(h,p*g*T);const I=[T,T,T,T,T,T];y.set(I,m*g*T)}const w=new Le;w.setAttribute("position",new fn(v,M)),w.setAttribute("uv",new fn(E,p)),w.setAttribute("faceIndex",new fn(y,m)),i.push(new Ut(w,null)),s>Qn&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Qu(n,t,e){const i=new bn(n,t,e);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vi(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oy(n,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ay(n,t,e){const i=new Float32Array(fi),s=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function th(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function eh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}class Hf extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Fn});r.uniforms.tEquirect.value=e;const o=new Ut(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=Oe),new dv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function cy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===wo||f===Co)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Hf(g.height);return M.fromEquirectangularTexture(n,h),t.set(h,M),h.addEventListener("dispose",c),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===wo||f===Co,M=f===Si||f===ji;if(g||M){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new ju(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return g&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new ju(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===wo?h.mapping=Si:f===Co&&(h.mapping=ji),h}function l(h){let f=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ly(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&bc("WebGLRenderer: "+i+" extension not supported."),s}}}function uy(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(f!==null){const v=f.array;M=f.version;for(let E=0,y=v.length;E<y;E+=3){const w=v[E+0],T=v[E+1],P=v[E+2];h.push(w,T,T,P,P,w)}}else{const v=g.array;M=g.version;for(let E=0,y=v.length/3-1;E<y;E+=3){const w=E+0,T=E+1,P=E+2;h.push(w,T,T,P,P,w)}}const p=new(g.count>=65535?yf:Mf)(h,1);p.version=M;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=h[p];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,t,e){const i=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let I=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var f=I;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),p===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*T*4*d),x=new vf(P,w,T,d);x.type=hn,x.needsUpdate=!0;const A=y*4;for(let R=0;R<d;R++){const F=m[R],W=v[R],X=E[R],N=w*T*4*R;for(let z=0;z<F.count;z++){const U=z*A;g===!0&&(s.fromBufferAttribute(F,z),P[N+U+0]=s.x,P[N+U+1]=s.y,P[N+U+2]=s.z,P[N+U+3]=0),M===!0&&(s.fromBufferAttribute(W,z),P[N+U+4]=s.x,P[N+U+5]=s.y,P[N+U+6]=s.z,P[N+U+7]=0),p===!0&&(s.fromBufferAttribute(X,z),P[N+U+8]=s.x,P[N+U+9]=s.y,P[N+U+10]=s.z,P[N+U+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new pt(w,T)},i.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function py(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const my={[sf]:"LINEAR_TONE_MAPPING",[rf]:"REINHARD_TONE_MAPPING",[of]:"CINEON_TONE_MAPPING",[af]:"ACES_FILMIC_TONE_MAPPING",[lf]:"AGX_TONE_MAPPING",[uf]:"NEUTRAL_TONE_MAPPING",[cf]:"CUSTOM_TONE_MAPPING"};function gy(n,t,e,i,s){const r=new bn(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Qi(t,e):void 0}),o=new bn(t,e,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),a=new Le;a.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new _e([0,2,0,0,2,0],2));const l=new rv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ut(a,l),u=new xl(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,M=null,p=[],m=!1;this.setSize=function(v,E){r.setSize(v,E),o.setSize(v,E);for(let y=0;y<p.length;y++){const w=p[y];w.setSize&&w.setSize(v,E)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let w=0;w<p.length;w++){const T=p[w];T.setSize&&T.setSize(E,y)}},this.begin=function(v,E){if(f||v.toneMapping===En&&p.length===0)return!1;if(M=E,E!==null){const y=E.width,w=E.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return m===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=En,!0},this.hasRenderPass=function(){return m},this.end=function(v,E){v.toneMapping=g,f=!0;let y=r,w=o;for(let T=0;T<p.length;T++){const P=p[T];if(P.enabled!==!1&&(P.render(v,w,y,E),P.needsSwap!==!1)){const x=y;y=w,w=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},Qt.getTransfer(d)===le&&(l.defines.SRGB_TRANSFER="");const T=my[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(M),v.render(c,u),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Gf=new ke,Pc=new Qi(1,1),zf=new vf,Vf=new nx,Wf=new bf,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xo(n,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _y(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function My(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;oh.set(i),n.uniformMatrix2fv(this.addr,!1,oh),Re(e,i)}}function yy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;rh.set(i),n.uniformMatrix3fv(this.addr,!1,rh),Re(e,i)}}function Ey(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;sh.set(i),n.uniformMatrix4fv(this.addr,!1,sh),Re(e,i)}}function by(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function wy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function Ly(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pc.compareFunction=e.isReversedDepthBuffer()?ol:rl,r=Pc):r=Gf,e.setTexture2D(t||r,s)}function Dy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vf,s)}function Ny(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Wf,s)}function Uy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zf,s)}function Oy(n){switch(n){case 5126:return _y;case 35664:return xy;case 35665:return vy;case 35666:return Sy;case 35674:return My;case 35675:return yy;case 35676:return Ey;case 5124:case 35670:return by;case 35667:case 35671:return Ty;case 35668:case 35672:return Ay;case 35669:case 35673:return Ry;case 5125:return wy;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Fy(n,t){n.uniform1fv(this.addr,t)}function ky(n,t){const e=ls(t,this.size,2);n.uniform2fv(this.addr,e)}function By(n,t){const e=ls(t,this.size,3);n.uniform3fv(this.addr,e)}function Hy(n,t){const e=ls(t,this.size,4);n.uniform4fv(this.addr,e)}function Gy(n,t){const e=ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zy(n,t){const e=ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vy(n,t){const e=ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wy(n,t){n.uniform1iv(this.addr,t)}function Xy(n,t){n.uniform2iv(this.addr,t)}function Yy(n,t){n.uniform3iv(this.addr,t)}function qy(n,t){n.uniform4iv(this.addr,t)}function Ky(n,t){n.uniform1uiv(this.addr,t)}function Zy(n,t){n.uniform2uiv(this.addr,t)}function $y(n,t){n.uniform3uiv(this.addr,t)}function Jy(n,t){n.uniform4uiv(this.addr,t)}function jy(n,t,e){const i=this.cache,s=t.length,r=xo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Pc:o=Gf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qy(n,t,e){const i=this.cache,s=t.length,r=xo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vf,r[o])}function tE(n,t,e){const i=this.cache,s=t.length,r=xo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wf,r[o])}function eE(n,t,e){const i=this.cache,s=t.length,r=xo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zf,r[o])}function nE(n){switch(n){case 5126:return Fy;case 35664:return ky;case 35665:return By;case 35666:return Hy;case 35674:return Gy;case 35675:return zy;case 35676:return Vy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return Ky;case 36294:return Zy;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}class iE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Oy(e.type)}}class sE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nE(e.type)}}class rE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function ah(n,t){n.seq.push(t),n.map[t.id]=t}function oE(n,t,e){const i=n.name,s=i.length;for(ua.lastIndex=0;;){const r=ua.exec(i),o=ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ah(e,c===void 0?new iE(a,n,t):new sE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new rE(a),ah(e,d)),e=d}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);oE(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ch(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const aE=37297;let cE=0;function lE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const lh=new Vt;function uE(n){Qt._getMatrix(lh,Qt.workingColorSpace,n);const t=`mat3( ${lh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case $r:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function uh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+lE(n.getShaderSource(t),a)}else return r}function hE(n,t){const e=uE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dE={[sf]:"Linear",[rf]:"Reinhard",[of]:"Cineon",[af]:"ACESFilmic",[lf]:"AgX",[uf]:"Neutral",[cf]:"Custom"};function fE(n,t){const e=dE[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new L;function pE(){Qt.getLuminanceCoefficients(Er);const n=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function gE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _E(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function As(n){return n!==""}function hh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(xE,SE)}const vE=new Map;function SE(n,t){let e=Kt[t];if(e===void 0){const i=vE.get(t);if(i!==void 0)e=Kt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const ME=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(n){return n.replace(ME,yE)}function yE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const EE={[Lr]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function bE(n){return EE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TE={[Si]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function AE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":TE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const RE={[ji]:"ENVMAP_MODE_REFRACTION"};function wE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":RE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CE={[nf]:"ENVMAP_BLENDING_MULTIPLY",[U_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function PE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":CE[n.combine]||"ENVMAP_BLENDING_NONE"}function IE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function LE(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bE(e),c=AE(e),u=wE(e),d=PE(e),h=IE(e),f=mE(e),g=gE(r),M=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`)):(p=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Kt.tonemapping_pars_fragment:"",e.toneMapping!==En?fE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,hE("linearToOutputTexel",e.outputColorSpace),pE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=Ic(o),o=hh(o,e),o=dh(o,e),a=Ic(a),a=hh(a,e),a=dh(a,e),o=fh(o),a=fh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=v+p+o,y=v+m+a,w=ch(s,s.VERTEX_SHADER,E),T=ch(s,s.FRAGMENT_SHADER,y);s.attachShader(M,w),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(R){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(T)||"",N=F.trim(),z=W.trim(),U=X.trim();let j=!0,nt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,w,T);else{const dt=uh(s,w,"vertex"),xt=uh(s,T,"fragment");jt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+dt+`
`+xt)}else N!==""?Nt("WebGLProgram: Program Info Log:",N):(z===""||U==="")&&(nt=!1);nt&&(R.diagnostics={runnable:j,programLog:N,vertexShader:{log:z,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(w),s.deleteShader(T),x=new Fr(s,M),A=_E(s,M)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,aE)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cE++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let DE=0;class NE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new UE(t),e.set(t,i)),i}}class UE{constructor(t){this.id=DE++,this.code=t,this.usedTimes=0}}function OE(n){return n===Mi||n===qr||n===Kr}function FE(n,t,e,i,s,r){const o=new cl,a=new NE,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,I,R,F,W){const X=R.fog,N=F.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||z,U),nt=j&&j.mapping===po?j.image.height:null,dt=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const xt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,At=xt!==void 0?xt.length:0;let Yt=0;N.morphAttributes.position!==void 0&&(Yt=1),N.morphAttributes.normal!==void 0&&(Yt=2),N.morphAttributes.color!==void 0&&(Yt=3);let ee,Ht,$,gt;if(dt){const Wt=Sn[dt];ee=Wt.vertexShader,Ht=Wt.fragmentShader}else ee=x.vertexShader,Ht=x.fragmentShader,a.update(x),$=a.getVertexShaderID(x),gt=a.getFragmentShaderID(x);const ot=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,ne=!!x.map,Ft=!!x.matcap,J=!!j,it=!!x.aoMap,Q=!!x.lightMap,vt=!!x.bumpMap,ft=!!x.normalMap,kt=!!x.displacementMap,C=!!x.emissiveMap,Gt=!!x.metalnessMap,Rt=!!x.roughnessMap,Bt=x.anisotropy>0,st=x.clearcoat>0,oe=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,k=x.transmission>0,K=Bt&&!!x.anisotropyMap,tt=st&&!!x.clearcoatMap,rt=st&&!!x.clearcoatNormalMap,lt=st&&!!x.clearcoatRoughnessMap,Y=b&&!!x.iridescenceMap,Z=b&&!!x.iridescenceThicknessMap,Mt=_&&!!x.sheenColorMap,bt=_&&!!x.sheenRoughnessMap,ut=!!x.specularMap,at=!!x.specularColorMap,zt=!!x.specularIntensityMap,qt=k&&!!x.transmissionMap,re=k&&!!x.thicknessMap,D=!!x.gradientMap,ct=!!x.alphaMap,q=x.alphaTest>0,yt=!!x.alphaHash,ht=!!x.extensions;let et=En;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(et=n.toneMapping);const Pt={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:Ht,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ne,matcap:Ft,envMap:J,envMapMode:J&&j.mapping,envMapCubeUVHeight:nt,aoMap:it,lightMap:Q,bumpMap:vt,normalMap:ft,displacementMap:kt,emissiveMap:C,normalMapObjectSpace:ft&&x.normalMapType===B_,normalMapTangentSpace:ft&&x.normalMapType===Ec,packedNormalMap:ft&&x.normalMapType===Ec&&OE(x.normalMap.format),metalnessMap:Gt,roughnessMap:Rt,anisotropy:Bt,anisotropyMap:K,clearcoat:st,clearcoatMap:tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:lt,dispersion:oe,iridescence:b,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:_,sheenColorMap:Mt,sheenRoughnessMap:bt,specularMap:ut,specularColorMap:at,specularIntensityMap:zt,transmission:k,transmissionMap:qt,thicknessMap:re,gradientMap:D,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:q,alphaHash:yt,combine:x.combine,mapUv:ne&&g(x.map.channel),aoMapUv:it&&g(x.aoMap.channel),lightMapUv:Q&&g(x.lightMap.channel),bumpMapUv:vt&&g(x.bumpMap.channel),normalMapUv:ft&&g(x.normalMap.channel),displacementMapUv:kt&&g(x.displacementMap.channel),emissiveMapUv:C&&g(x.emissiveMap.channel),metalnessMapUv:Gt&&g(x.metalnessMap.channel),roughnessMapUv:Rt&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:tt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(x.sheenRoughnessMap.channel),specularMapUv:ut&&g(x.specularMap.channel),specularColorMapUv:at&&g(x.specularColorMap.channel),specularIntensityMapUv:zt&&g(x.specularIntensityMap.channel),transmissionMapUv:qt&&g(x.transmissionMap.channel),thicknessMapUv:re&&g(x.thicknessMap.channel),alphaMapUv:ct&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||Bt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(ne||ct),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Yt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:ne&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:C&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)A.push(I),A.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(A,x),v(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function E(x){const A=f[x.type];let I;if(A){const R=Sn[A];I=nv.clone(R.uniforms)}else I=x.uniforms;return I}function y(x,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new LE(n,A,x,s),c.push(I),u.set(A,I)),I}function w(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function kE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function BE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function mh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,M,p,m){let v=n[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:m},n[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=o(h),v.groupOrder=M,v.renderOrder=h.renderOrder,v.z=p,v.group=m),t++,v}function l(h,f,g,M,p,m){const v=a(h,f,g,M,p,m);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):e.push(v)}function c(h,f,g,M,p,m){const v=a(h,f,g,M,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||BE),i.length>1&&i.sort(f||mh),s.length>1&&s.sort(f||mh)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function HE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new gh,n.set(i,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function GE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new te};break;case"SpotLight":e={position:new L,direction:new L,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function zE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let VE=0;function WE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function XE(n){const t=new GE,e=zE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new ae,o=new ae;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,M=0,p=0,m=0,v=0,E=0,y=0,w=0,T=0,P=0;c.sort(WE);for(let A=0,I=c.length;A<I;A++){const R=c[A],F=R.color,W=R.intensity,X=R.distance;let N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Mi?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=F.r*W,d+=F.g*W,h+=F.b*W;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],W);P++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,j=e.get(R);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=R.shadow.matrix,v++}i.directional[f]=z,f++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(F).multiplyScalar(W),z.distance=X,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[M]=z;const U=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,U.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[M]=U.matrix,R.castShadow){const j=e.get(R);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=N,y++}M++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(F).multiplyScalar(W),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=z,p++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const U=R.shadow,j=e.get(R);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=z,g++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(W),z.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[m]=z,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=f,x.pointLength=g,x.spotLength=M,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=P,i.version=VE++)}function l(c,u){let d=0,h=0,f=0,g=0,M=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const E=c[m];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:i}}function _h(n){const t=new XE(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function YE(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new _h(n),t.set(s,[a])):r>=o.length?(a=new _h(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const qE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KE=`uniform sampler2D shadow_pass;
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
}`,ZE=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],$E=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],xh=new ae,Ss=new L,ha=new L;function JE(n,t,e){let i=new ul;const s=new pt,r=new pt,o=new Me,a=new ov,l=new av,c={},u=e.maxTextureSize,d={[ei]:Ge,[Ge]:ei,[Mn]:Mn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:qE,fragmentShader:KE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ut(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let m=this.type;this.render=function(T,P,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===g_&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lr);const A=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=m!==this.type;W&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=T.length;X<N;X++){const z=T[X],U=z.shadow;if(U===void 0){Nt("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const j=U.getFrameExtents();s.multiply(j),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,U.mapSize.y=r.y));const nt=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=nt,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===bs){if(z.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new bn(s.x,s.y,{format:Mi,type:Bn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new Qi(s.x,s.y,hn),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=Hn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Pe,U.map.depthTexture.magFilter=Pe}else z.isPointLight?(U.map=new Hf(s.x),U.map.depthTexture=new Mx(s.x,Tn)):(U.map=new bn(s.x,s.y),U.map.depthTexture=new Qi(s.x,s.y,Tn)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=Hn,this.type===Lr?(U.map.depthTexture.compareFunction=nt?ol:rl,U.map.depthTexture.minFilter=Oe,U.map.depthTexture.magFilter=Oe):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Pe,U.map.depthTexture.magFilter=Pe);U.camera.updateProjectionMatrix()}const dt=U.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<dt;xt++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,xt),n.clear();else{xt===0&&(n.setRenderTarget(U.map),n.clear());const At=U.getViewport(xt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(o)}if(z.isPointLight){const At=U.camera,Yt=U.matrix,ee=z.distance||At.far;ee!==At.far&&(At.far=ee,At.updateProjectionMatrix()),Ss.setFromMatrixPosition(z.matrixWorld),At.position.copy(Ss),ha.copy(At.position),ha.add(ZE[xt]),At.up.copy($E[xt]),At.lookAt(ha),At.updateMatrixWorld(),Yt.makeTranslation(-Ss.x,-Ss.y,-Ss.z),xh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),U._frustum.setFromProjectionMatrix(xh,At.coordinateSystem,At.reversedDepth)}else U.updateMatrices(z);i=U.getFrustum(),y(P,x,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===bs&&v(U,x),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,I,R)};function v(T,P){const x=t.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bn(s.x,s.y,{format:Mi,type:Bn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,h,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,f,M,null)}function E(T,P,x,A){let I=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)I=R;else if(I=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=I.uuid,W=P.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let N=X[W];N===void 0&&(N=I.clone(),X[W]=N,P.addEventListener("dispose",w)),I=N}if(I.visible=P.visible,I.wireframe=P.wireframe,A===bs?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:d[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=n.properties.get(I);F.light=x}return I}function y(T,P,x,A,I){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===bs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const W=t.update(T),X=T.material;if(Array.isArray(X)){const N=W.groups;for(let z=0,U=N.length;z<U;z++){const j=N[z],nt=X[j.materialIndex];if(nt&&nt.visible){const dt=E(T,nt,A,I);T.onBeforeShadow(n,T,P,x,W,dt,j),n.renderBufferDirect(x,null,W,dt,T,j),T.onAfterShadow(n,T,P,x,W,dt,j)}}}else if(X.visible){const N=E(T,X,A,I);T.onBeforeShadow(n,T,P,x,W,N,null),n.renderBufferDirect(x,null,W,N,T,null),T.onAfterShadow(n,T,P,x,W,N,null)}}const F=T.children;for(let W=0,X=F.length;W<X;W++)y(F[W],P,x,A,I)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const A=c[x],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function jE(n,t){function e(){let D=!1;const ct=new Me;let q=null;const yt=new Me(0,0,0,0);return{setMask:function(ht){q!==ht&&!D&&(n.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){D=ht},setClear:function(ht,et,Pt,Wt,ye){ye===!0&&(ht*=Wt,et*=Wt,Pt*=Wt),ct.set(ht,et,Pt,Wt),yt.equals(ct)===!1&&(n.clearColor(ht,et,Pt,Wt),yt.copy(ct))},reset:function(){D=!1,q=null,yt.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,q=null,yt=null,ht=null;return{setReversed:function(et){if(ct!==et){const Pt=t.get("EXT_clip_control");et?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const Wt=ht;ht=null,this.setClear(Wt)}},getReversed:function(){return ct},setTest:function(et){et?ot(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(et){q!==et&&!D&&(n.depthMask(et),q=et)},setFunc:function(et){if(ct&&(et=Z_[et]),yt!==et){switch(et){case ka:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=et}},setLocked:function(et){D=et},setClear:function(et){ht!==et&&(ht=et,ct&&(et=1-et),n.clearDepth(et))},reset:function(){D=!1,q=null,yt=null,ht=null,ct=!1}}}function s(){let D=!1,ct=null,q=null,yt=null,ht=null,et=null,Pt=null,Wt=null,ye=null;return{setTest:function(ue){D||(ue?ot(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ue){ct!==ue&&!D&&(n.stencilMask(ue),ct=ue)},setFunc:function(ue,wn,mn){(q!==ue||yt!==wn||ht!==mn)&&(n.stencilFunc(ue,wn,mn),q=ue,yt=wn,ht=mn)},setOp:function(ue,wn,mn){(et!==ue||Pt!==wn||Wt!==mn)&&(n.stencilOp(ue,wn,mn),et=ue,Pt=wn,Wt=mn)},setLocked:function(ue){D=ue},setClear:function(ue){ye!==ue&&(n.clearStencil(ue),ye=ue)},reset:function(){D=!1,ct=null,q=null,yt=null,ht=null,et=null,Pt=null,Wt=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],M=null,p=!1,m=null,v=null,E=null,y=null,w=null,T=null,P=null,x=new te(0,0,0),A=0,I=!1,R=null,F=null,W=null,X=null,N=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,j=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),U=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),U=j>=2);let dt=null,xt={};const At=n.getParameter(n.SCISSOR_BOX),Yt=n.getParameter(n.VIEWPORT),ee=new Me().fromArray(At),Ht=new Me().fromArray(Yt);function $(D,ct,q,yt){const ht=new Uint8Array(4),et=n.createTexture();n.bindTexture(D,et),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<q;Pt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(ct+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return et}const gt={};gt[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(Ji),vt(!1),ft(ou),ot(n.CULL_FACE),it(Fn);function ot(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ct(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ot(D,ct){return h[D]!==ct?(n.bindFramebuffer(D,ct),h[D]=ct,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ct),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(D,ct){let q=g,yt=!1;if(D){q=f.get(ct),q===void 0&&(q=[],f.set(ct,q));const ht=D.textures;if(q.length!==ht.length||q[0]!==n.COLOR_ATTACHMENT0){for(let et=0,Pt=ht.length;et<Pt;et++)q[et]=n.COLOR_ATTACHMENT0+et;q.length=ht.length,yt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,yt=!0);yt&&n.drawBuffers(q)}function ne(D){return M!==D?(n.useProgram(D),M=D,!0):!1}const Ft={[di]:n.FUNC_ADD,[x_]:n.FUNC_SUBTRACT,[v_]:n.FUNC_REVERSE_SUBTRACT};Ft[S_]=n.MIN,Ft[M_]=n.MAX;const J={[y_]:n.ZERO,[E_]:n.ONE,[b_]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[P_]:n.SRC_ALPHA_SATURATE,[w_]:n.DST_COLOR,[A_]:n.DST_ALPHA,[T_]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[C_]:n.ONE_MINUS_DST_COLOR,[R_]:n.ONE_MINUS_DST_ALPHA,[I_]:n.CONSTANT_COLOR,[L_]:n.ONE_MINUS_CONSTANT_COLOR,[D_]:n.CONSTANT_ALPHA,[N_]:n.ONE_MINUS_CONSTANT_ALPHA};function it(D,ct,q,yt,ht,et,Pt,Wt,ye,ue){if(D===Fn){p===!0&&(Ct(n.BLEND),p=!1);return}if(p===!1&&(ot(n.BLEND),p=!0),D!==__){if(D!==m||ue!==I){if((v!==di||w!==di)&&(n.blendEquation(n.FUNC_ADD),v=di,w=di),ue)switch(D){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:jt("WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cu:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",D);break}E=null,y=null,T=null,P=null,x.set(0,0,0),A=0,m=D,I=ue}return}ht=ht||ct,et=et||q,Pt=Pt||yt,(ct!==v||ht!==w)&&(n.blendEquationSeparate(Ft[ct],Ft[ht]),v=ct,w=ht),(q!==E||yt!==y||et!==T||Pt!==P)&&(n.blendFuncSeparate(J[q],J[yt],J[et],J[Pt]),E=q,y=yt,T=et,P=Pt),(Wt.equals(x)===!1||ye!==A)&&(n.blendColor(Wt.r,Wt.g,Wt.b,ye),x.copy(Wt),A=ye),m=D,I=!1}function Q(D,ct){D.side===Mn?Ct(n.CULL_FACE):ot(n.CULL_FACE);let q=D.side===Ge;ct&&(q=!q),vt(q),D.blending===Zi&&D.transparent===!1?it(Fn):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const yt=D.stencilWrite;a.setTest(yt),yt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),C(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){R!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),R=D)}function ft(D){D!==p_?(ot(n.CULL_FACE),D!==F&&(D===ou?n.cullFace(n.BACK):D===m_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),F=D}function kt(D){D!==W&&(U&&n.lineWidth(D),W=D)}function C(D,ct,q){D?(ot(n.POLYGON_OFFSET_FILL),(X!==ct||N!==q)&&(X=ct,N=q,o.getReversed()&&(ct=-ct),n.polygonOffset(ct,q))):Ct(n.POLYGON_OFFSET_FILL)}function Gt(D){D?ot(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function Rt(D){D===void 0&&(D=n.TEXTURE0+z-1),dt!==D&&(n.activeTexture(D),dt=D)}function Bt(D,ct,q){q===void 0&&(dt===null?q=n.TEXTURE0+z-1:q=dt);let yt=xt[q];yt===void 0&&(yt={type:void 0,texture:void 0},xt[q]=yt),(yt.type!==D||yt.texture!==ct)&&(dt!==q&&(n.activeTexture(q),dt=q),n.bindTexture(D,ct||gt[D]),yt.type=D,yt.texture=ct)}function st(){const D=xt[dt];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function _(){try{n.texSubImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function k(){try{n.texSubImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function rt(){try{n.texStorage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function lt(){try{n.texStorage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function Y(){try{n.texImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function Z(){try{n.texImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function Mt(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function bt(D,ct){d[D]!==ct&&(n.pixelStorei(D,ct),d[D]=ct)}function ut(D){ee.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function at(D){Ht.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ht.copy(D))}function zt(D,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let yt=q.get(D);yt===void 0&&(yt=n.getUniformBlockIndex(ct,D.name),q.set(D,yt))}function qt(D,ct){const yt=c.get(ct).get(D);l.get(ct)!==yt&&(n.uniformBlockBinding(ct,yt,D.__bindingPointIndex),l.set(ct,yt))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},dt=null,xt={},h={},f=new WeakMap,g=[],M=null,p=!1,m=null,v=null,E=null,y=null,w=null,T=null,P=null,x=new te(0,0,0),A=0,I=!1,R=null,F=null,W=null,X=null,N=null,ee.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Ot,drawBuffers:Dt,useProgram:ne,setBlending:it,setMaterial:Q,setFlipSided:vt,setCullFace:ft,setLineWidth:kt,setPolygonOffset:C,setScissorTest:Gt,activeTexture:Rt,bindTexture:Bt,unbindTexture:st,compressedTexImage2D:oe,compressedTexImage3D:b,texImage2D:Y,texImage3D:Z,pixelStorei:bt,getParameter:Mt,updateUBOMapping:zt,uniformBlockBinding:qt,texStorage2D:rt,texStorage3D:lt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:ut,viewport:at,reset:re}}function QE(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,_){return g?new OffscreenCanvas(b,_):Jr("canvas")}function p(b,_,k){let K=1;const tt=oe(b);if((tt.width>k||tt.height>k)&&(K=k/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const rt=Math.floor(K*tt.width),lt=Math.floor(K*tt.height);h===void 0&&(h=M(rt,lt));const Y=_?M(rt,lt):h;return Y.width=rt,Y.height=lt,Y.getContext("2d").drawImage(b,0,0,rt,lt),Nt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+rt+"x"+lt+")."),Y}else return"data"in b&&Nt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps}function v(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,_,k,K,tt,rt=!1){if(b!==null){if(n[b]!==void 0)return n[b];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let lt;K&&(lt=t.get("EXT_texture_norm16"),lt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8),k===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),k===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),_===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8),k===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),k===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),k===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const Z=rt?$r:Qt.getTransfer(tt);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=Z===le?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),k===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(b,_){let k;return b?_===null||_===Tn||_===Hs?k=n.DEPTH24_STENCIL8:_===hn?k=n.DEPTH32F_STENCIL8:_===Bs&&(k=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===Hs?k=n.DEPTH_COMPONENT24:_===hn?k=n.DEPTH_COMPONENT32F:_===Bs&&(k=n.DEPTH_COMPONENT16),k}function T(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pe&&b.minFilter!==Oe?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function P(b){const _=b.target;_.removeEventListener("dispose",P),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),R(_)}function A(b){const _=i.get(b);if(_.__webglInit===void 0)return;const k=b.source,K=f.get(k);if(K){const tt=K[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(b),Object.keys(K).length===0&&f.delete(k)}i.remove(b)}function I(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const k=b.source,K=f.get(k);delete K[_.__cacheKey],o.memory.textures--}function R(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let tt=0;tt<_.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(_.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,tt=k.length;K<tt;K++){const rt=i.get(k[K]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(b)}let F=0;function W(){F=0}function X(){return F}function N(b){F=b}function z(){const b=F;return b>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),F+=1,b}function U(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){const k=i.get(b);if(b.isVideoTexture&&Bt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(k,b,_);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function nt(b,_){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Ct(k,b,_);return}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function dt(b,_){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Ct(k,b,_);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function xt(b,_){const k=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&k.__version!==b.version){Ot(k,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}const At={[Xa]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},Yt={[Pe]:n.NEAREST,[F_]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},ee={[H_]:n.NEVER,[X_]:n.ALWAYS,[G_]:n.LESS,[rl]:n.LEQUAL,[z_]:n.EQUAL,[ol]:n.GEQUAL,[V_]:n.GREATER,[W_]:n.NOTEQUAL};function Ht(b,_){if(_.type===hn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Oe||_.magFilter===Po||_.magFilter===Js||_.magFilter===mi||_.minFilter===Oe||_.minFilter===Po||_.minFilter===Js||_.minFilter===mi)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,At[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,At[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,At[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Yt[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Yt[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pe||_.minFilter!==Js&&_.minFilter!==mi||_.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",P));const K=_.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const rt=U(_);if(rt!==b.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[rt].usedTimes++;const lt=tt[b.__cacheKey];lt!==void 0&&(tt[b.__cacheKey].usedTimes--,lt.usedTimes===0&&I(_)),b.__cacheKey=rt,b.__webglTexture=tt[rt].texture}return k}function gt(b,_,k){return Math.floor(Math.floor(b/k)/_)}function ot(b,_,k,K){const rt=b.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,K,_.data);else{rt.sort((bt,ut)=>bt.start-ut.start);let lt=0;for(let bt=1;bt<rt.length;bt++){const ut=rt[lt],at=rt[bt],zt=ut.start+ut.count,qt=gt(at.start,_.width,4),re=gt(ut.start,_.width,4);at.start<=zt+1&&qt===re&&gt(at.start+at.count-1,_.width,4)===qt?ut.count=Math.max(ut.count,at.start+at.count-ut.start):(++lt,rt[lt]=at)}rt.length=lt+1;const Y=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let bt=0,ut=rt.length;bt<ut;bt++){const at=rt[bt],zt=Math.floor(at.start/4),qt=Math.ceil(at.count/4),re=zt%_.width,D=Math.floor(zt/_.width),ct=qt,q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,re,D,ct,q,k,K,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function Ct(b,_,k){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const tt=$(b,_),rt=_.source;e.bindTexture(K,b.__webglTexture,n.TEXTURE0+k);const lt=i.get(rt);if(rt.version!==lt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const q=Qt.getPrimaries(Qt.workingColorSpace),yt=_.colorSpace===Jn?null:Qt.getPrimaries(_.colorSpace),ht=_.colorSpace===Jn||q===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=p(_.image,!1,s.maxTextureSize);Z=st(_,Z);const Mt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type);let ut=y(_.internalFormat,Mt,bt,_.normalized,_.colorSpace,_.isVideoTexture);Ht(K,_);let at;const zt=_.mipmaps,qt=_.isVideoTexture!==!0,re=lt.__version===void 0||tt===!0,D=rt.dataReady,ct=T(_,Z);if(_.isDepthTexture)ut=w(_.format===gi,_.type),re&&(qt?e.texStorage2D(n.TEXTURE_2D,1,ut,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,ut,Z.width,Z.height,0,Mt,bt,null));else if(_.isDataTexture)if(zt.length>0){qt&&re&&e.texStorage2D(n.TEXTURE_2D,ct,ut,zt[0].width,zt[0].height);for(let q=0,yt=zt.length;q<yt;q++)at=zt[q],qt?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,bt,at.data):e.texImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,Mt,bt,at.data);_.generateMipmaps=!1}else qt?(re&&e.texStorage2D(n.TEXTURE_2D,ct,ut,Z.width,Z.height),D&&ot(_,Z,Mt,bt)):e.texImage2D(n.TEXTURE_2D,0,ut,Z.width,Z.height,0,Mt,bt,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ut,zt[0].width,zt[0].height,Z.depth);for(let q=0,yt=zt.length;q<yt;q++)if(at=zt[q],_.format!==dn)if(Mt!==null)if(qt){if(D)if(_.layerUpdates.size>0){const ht=Zu(at.width,at.height,_.format,_.type);for(const et of _.layerUpdates){const Pt=at.data.subarray(et*ht/at.data.BYTES_PER_ELEMENT,(et+1)*ht/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,et,at.width,at.height,1,Mt,Pt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Z.depth,Mt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ut,at.width,at.height,Z.depth,0,at.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Z.depth,Mt,bt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,ut,at.width,at.height,Z.depth,0,Mt,bt,at.data)}else{qt&&re&&e.texStorage2D(n.TEXTURE_2D,ct,ut,zt[0].width,zt[0].height);for(let q=0,yt=zt.length;q<yt;q++)at=zt[q],_.format!==dn?Mt!==null?qt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,at.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,bt,at.data):e.texImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,Mt,bt,at.data)}else if(_.isDataArrayTexture)if(qt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ut,Z.width,Z.height,Z.depth),D)if(_.layerUpdates.size>0){const q=Zu(Z.width,Z.height,_.format,_.type);for(const yt of _.layerUpdates){const ht=Z.data.subarray(yt*q/Z.data.BYTES_PER_ELEMENT,(yt+1)*q/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,Z.width,Z.height,1,Mt,bt,ht)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Mt,bt,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,Z.width,Z.height,Z.depth,0,Mt,bt,Z.data);else if(_.isData3DTexture)qt?(re&&e.texStorage3D(n.TEXTURE_3D,ct,ut,Z.width,Z.height,Z.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Mt,bt,Z.data)):e.texImage3D(n.TEXTURE_3D,0,ut,Z.width,Z.height,Z.depth,0,Mt,bt,Z.data);else if(_.isFramebufferTexture){if(re)if(qt)e.texStorage2D(n.TEXTURE_2D,ct,ut,Z.width,Z.height);else{let q=Z.width,yt=Z.height;for(let ht=0;ht<ct;ht++)e.texImage2D(n.TEXTURE_2D,ht,ut,q,yt,0,Mt,bt,null),q>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Z.parentNode!==q){q.appendChild(Z),d.add(_),q.onpaint=Wt=>{const ye=Wt.changedElements;for(const ue of d)ye.includes(ue.image)&&(ue.needsUpdate=!0)},q.requestPaint();return}const yt=0,ht=n.RGBA,et=n.RGBA,Pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,yt,ht,et,Pt,Z),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(qt&&re){const q=oe(zt[0]);e.texStorage2D(n.TEXTURE_2D,ct,ut,q.width,q.height)}for(let q=0,yt=zt.length;q<yt;q++)at=zt[q],qt?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Mt,bt,at):e.texImage2D(n.TEXTURE_2D,q,ut,Mt,bt,at);_.generateMipmaps=!1}else if(qt){if(re){const q=oe(Z);e.texStorage2D(n.TEXTURE_2D,ct,ut,q.width,q.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,bt,Z)}else e.texImage2D(n.TEXTURE_2D,0,ut,Mt,bt,Z);m(_)&&v(K),lt.__version=rt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ot(b,_,k){if(_.image.length!==6)return;const K=$(b,_),tt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const rt=i.get(tt);if(tt.version!==rt.__version||K===!0){e.activeTexture(n.TEXTURE0+k);const lt=Qt.getPrimaries(Qt.workingColorSpace),Y=_.colorSpace===Jn?null:Qt.getPrimaries(_.colorSpace),Z=_.colorSpace===Jn||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,bt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!Mt&&!bt?ut[et]=p(_.image[et],!0,s.maxCubemapSize):ut[et]=bt?_.image[et].image:_.image[et],ut[et]=st(_,ut[et]);const at=ut[0],zt=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),re=y(_.internalFormat,zt,qt,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,ct=rt.__version===void 0||K===!0,q=tt.dataReady;let yt=T(_,at);Ht(n.TEXTURE_CUBE_MAP,_);let ht;if(Mt){D&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,re,at.width,at.height);for(let et=0;et<6;et++){ht=ut[et].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){const Wt=ht[Pt];_.format!==dn?zt!==null?D?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,Wt.width,Wt.height,zt,Wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,re,Wt.width,Wt.height,0,Wt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,Wt.width,Wt.height,zt,qt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,re,Wt.width,Wt.height,0,zt,qt,Wt.data)}}}else{if(ht=_.mipmaps,D&&ct){ht.length>0&&yt++;const et=oe(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,re,et.width,et.height)}for(let et=0;et<6;et++)if(bt){D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,zt,qt,ut[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,re,ut[et].width,ut[et].height,0,zt,qt,ut[et].data);for(let Pt=0;Pt<ht.length;Pt++){const ye=ht[Pt].image[et].image;D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,ye.width,ye.height,zt,qt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,re,ye.width,ye.height,0,zt,qt,ye.data)}}else{D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,zt,qt,ut[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,re,zt,qt,ut[et]);for(let Pt=0;Pt<ht.length;Pt++){const Wt=ht[Pt];D?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,zt,qt,Wt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,re,zt,qt,Wt.image[et])}}}m(_)&&v(n.TEXTURE_CUBE_MAP),rt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Dt(b,_,k,K,tt,rt){const lt=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),Z=y(k.internalFormat,lt,Y,k.normalized,k.colorSpace),Mt=i.get(_),bt=i.get(k);if(bt.__renderTarget=_,!Mt.__hasExternalTextures){const ut=Math.max(1,_.width>>rt),at=Math.max(1,_.height>>rt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,Z,ut,at,_.depth,0,lt,Y,null):e.texImage2D(tt,rt,Z,ut,at,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,tt,bt.__webglTexture,0,Gt(_)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,tt,bt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(b,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,tt=K&&K.isDepthTexture?K.type:null,rt=w(_.stencilBuffer,tt),lt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(_),rt,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(_),rt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,rt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,b)}else{const K=_.textures;for(let tt=0;tt<K.length;tt++){const rt=K[tt],lt=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),Z=y(rt.internalFormat,lt,Y,rt.normalized,rt.colorSpace);Rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(_),Z,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(b,_,k){const K=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(_.depthTexture);if(tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_.depthTexture);const Mt=r.convert(_.depthTexture.format),bt=r.convert(_.depthTexture.type);let ut;_.depthTexture.format===Hn?ut=n.DEPTH_COMPONENT24:_.depthTexture.format===gi&&(ut=n.DEPTH24_STENCIL8);for(let at=0;at<6;at++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ut,_.width,_.height,0,Mt,bt,null)}}else j(_.depthTexture,0);const rt=tt.__webglTexture,lt=Gt(_),Y=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Z=_.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)Rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,rt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,rt,0);else if(_.depthTexture.format===gi)Rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,rt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,rt,0);else throw new Error("Unknown depthTexture format")}function J(b){const _=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let K=0;K<6;K++)Ft(_.__webglFramebuffer[K],b,K);else{const K=b.texture.mipmaps;K&&K.length>0?Ft(_.__webglFramebuffer[0],b,0):Ft(_.__webglFramebuffer,b,0)}else if(k){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(_.__webglDepthbuffer[K],b,!1);else{const tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ne(_.__webglDepthbuffer,b,!1);else{const tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,_,k){const K=i.get(b);_!==void 0&&Dt(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&J(b)}function Q(b){const _=b.texture,k=i.get(b),K=i.get(_);b.addEventListener("dispose",x);const tt=b.textures,rt=b.isWebGLCubeRenderTarget===!0,lt=tt.length>1;if(lt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,o.memory.textures++),rt){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let Z=0;Z<_.mipmaps.length;Z++)k.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else k.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)k.__webglFramebuffer[Y]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,Z=tt.length;Y<Z;Y++){const Mt=i.get(tt[Y]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Rt(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<tt.length;Y++){const Z=tt[Y];k.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const Mt=r.convert(Z.format,Z.colorSpace),bt=r.convert(Z.type),ut=y(Z.internalFormat,Mt,bt,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),at=Gt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,ut,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Dt(k.__webglFramebuffer[Y][Z],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Dt(k.__webglFramebuffer[Y],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(_)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Y=0,Z=tt.length;Y<Z;Y++){const Mt=tt[Y],bt=i.get(Mt);let ut=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,bt.__webglTexture),Ht(ut,Mt),Dt(k.__webglFramebuffer,b,Mt,n.COLOR_ATTACHMENT0+Y,ut,0),m(Mt)&&v(ut)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,K.__webglTexture),Ht(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Dt(k.__webglFramebuffer[Z],b,_,n.COLOR_ATTACHMENT0,Y,Z);else Dt(k.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,Y,0);m(_)&&v(Y),e.unbindTexture()}b.depthBuffer&&J(b)}function vt(b){const _=b.textures;for(let k=0,K=_.length;k<K;k++){const tt=_[k];if(m(tt)){const rt=E(b),lt=i.get(tt).__webglTexture;e.bindTexture(rt,lt),v(rt),e.unbindTexture()}}}const ft=[],kt=[];function C(b){if(b.samples>0){if(Rt(b)===!1){const _=b.textures,k=b.width,K=b.height;let tt=n.COLOR_BUFFER_BIT;const rt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(b),Y=_.length>1;if(Y)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Z=b.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Mt]);const bt=i.get(_[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,tt,n.NEAREST),l===!0&&(ft.length=0,kt.length=0,ft.push(n.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ft.push(rt),kt.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Mt]);const bt=i.get(_[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Gt(b){return Math.min(s.maxSamples,b.samples)}function Rt(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Bt(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function st(b,_){const k=b.colorSpace,K=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Zr&&k!==Jn&&(Qt.getTransfer(k)===le?(K!==dn||tt!==Ye)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",k)),_}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=xt,this.rebindTextures=it,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tb(n,t){function e(i,s=Jn){let r;const o=Qt.getTransfer(s);if(i===Ye)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===df)return n.BYTE;if(i===ff)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===jc)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===Bn)return n.HALF_FLOAT;if(i===gf)return n.ALPHA;if(i===_f)return n.RGB;if(i===dn)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===el)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===Mi)return n.RG;if(i===il)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===Dr||i===Nr||i===Ur||i===Or)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qa||i===Ka||i===Za||i===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===ja||i===Qa||i===tc||i===ec||i===qr||i===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ja||i===ja)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tc)return r.COMPRESSED_R11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qr)return r.COMPRESSED_RG11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===cc||i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_c||i===xc||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_c)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sc||i===Mc||i===Kr||i===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
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

}`;class ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Tf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new An({vertexShader:eb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sb extends bi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",p=new ib,m={},v=e.getContextAttributes();let E=null,y=null;const w=[],T=[],P=new pt;let x=null;const A=new en;A.viewport=new Me;const I=new en;I.viewport=new Me;const R=[A,I],F=new fv;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=w[$];return gt===void 0&&(gt=new ko,w[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=w[$];return gt===void 0&&(gt=new ko,w[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=w[$];return gt===void 0&&(gt=new ko,w[$]=gt),gt.getHandSpace()};function N($){const gt=T.indexOf($.inputSource);if(gt===-1)return;const ot=w[gt];ot!==void 0&&(ot.update($.inputSource,$.frame,c||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",U);for(let $=0;$<w.length;$++){const gt=T[$];gt!==null&&(T[$]=null,w[$].disconnect(gt))}W=null,X=null,p.reset();for(const $ in m)delete m[$];t.setRenderTarget(E),f=null,h=null,d=null,s=null,y=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Ct=null,Ot=null;v.depth&&(Ot=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=v.stencil?gi:Hn,Ct=v.stencil?Hs:Tn);const Dt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new bn(h.textureWidth,h.textureHeight,{format:dn,type:Ye,depthTexture:new Qi(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U($){for(let gt=0;gt<$.removed.length;gt++){const ot=$.removed[gt],Ct=T.indexOf(ot);Ct>=0&&(T[Ct]=null,w[Ct].disconnect(ot))}for(let gt=0;gt<$.added.length;gt++){const ot=$.added[gt];let Ct=T.indexOf(ot);if(Ct===-1){for(let Dt=0;Dt<w.length;Dt++)if(Dt>=T.length){T.push(ot),Ct=Dt;break}else if(T[Dt]===null){T[Dt]=ot,Ct=Dt;break}if(Ct===-1)break}const Ot=w[Ct];Ot&&Ot.connect(ot)}}const j=new L,nt=new L;function dt($,gt,ot){j.setFromMatrixPosition(gt.matrixWorld),nt.setFromMatrixPosition(ot.matrixWorld);const Ct=j.distanceTo(nt),Ot=gt.projectionMatrix.elements,Dt=ot.projectionMatrix.elements,ne=Ot[14]/(Ot[10]-1),Ft=Ot[14]/(Ot[10]+1),J=(Ot[9]+1)/Ot[5],it=(Ot[9]-1)/Ot[5],Q=(Ot[8]-1)/Ot[0],vt=(Dt[8]+1)/Dt[0],ft=ne*Q,kt=ne*vt,C=Ct/(-Q+vt),Gt=C*-Q;if(gt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Gt),$.translateZ(C),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Rt=ne+C,Bt=Ft+C,st=ft-Gt,oe=kt+(Ct-Gt),b=J*Ft/Bt*Rt,_=it*Ft/Bt*Rt;$.projectionMatrix.makePerspective(st,oe,b,_,Rt,Bt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xt($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let gt=$.near,ot=$.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),F.near=I.near=A.near=gt,F.far=I.far=A.far=ot,(W!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,X=F.far),F.layers.mask=$.layers.mask|6,A.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const Ct=$.parent,Ot=F.cameras;xt(F,Ct);for(let Dt=0;Dt<Ot.length;Dt++)xt(Ot[Dt],Ct);Ot.length===2?dt(F,A,I):F.projectionMatrix.copy(A.projectionMatrix),At($,F,Ct)};function At($,gt,ot){ot===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function($){return m[$]};let Yt=null;function ee($,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ct=!1;ot.length!==F.cameras.length&&(F.cameras.length=0,Ct=!0);for(let Ft=0;Ft<ot.length;Ft++){const J=ot[Ft];let it=null;if(f!==null)it=f.getViewport(J);else{const vt=d.getViewSubImage(h,J);it=vt.viewport,Ft===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let Q=R[Ft];Q===void 0&&(Q=new en,Q.layers.enable(Ft),Q.viewport=new Me,R[Ft]=Q),Q.matrix.fromArray(J.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(J.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(it.x,it.y,it.width,it.height),Ft===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ct===!0&&F.cameras.push(Q)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const Ft=d.getDepthInformation(ot[0]);Ft&&Ft.isValid&&Ft.texture&&p.init(Ft,s.renderState)}if(Ot&&Ot.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Ft=0;Ft<ot.length;Ft++){const J=ot[Ft].camera;if(J){let it=m[J];it||(it=new Tf,m[J]=it);const Q=d.getCameraImage(J);it.sourceTexture=Q}}}}for(let ot=0;ot<w.length;ot++){const Ct=T[ot],Ot=w[ot];Ct!==null&&Ot!==void 0&&Ot.update(Ct,gt,c||o)}Yt&&Yt($,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Ht=new kf;Ht.setAnimationLoop(ee),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}}const rb=new ae,Xf=new Vt;Xf.set(-1,0,0,0,1,0,0,0,1);function ob(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Uf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ab(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const y=E.program;i.uniformBlockBinding(v,y)}function c(v,E){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));const w=E.program;i.updateUBOMapping(v,w);const T=t.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const E=d();v.__bindingPointIndex=E;const y=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=s[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,P=y.length;T<P;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let A=0,I=x.length;A<I;A++){const R=x[A];if(f(R,T,A,w)===!0){const F=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let N=0;N<W.length;N++){const z=W[N],U=M(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,F+X,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):ArrayBuffer.isView(z)?R.__data.set(new z.constructor(z.buffer,z.byteOffset,R.__data.length)):(z.toArray(R.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,E,y,w){const T=v.value,P=E+"_"+y;if(w[P]===void 0)return typeof T=="number"||typeof T=="boolean"?w[P]=T:ArrayBuffer.isView(T)?w[P]=T.slice():w[P]=T.clone(),!0;{const x=w[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(v){const E=v.uniforms;let y=0;const w=16;for(let P=0,x=E.length;P<x;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let I=0,R=A.length;I<R;I++){const F=A[I],W=Array.isArray(F.value)?F.value:[F.value];for(let X=0,N=W.length;X<N;X++){const z=W[X],U=M(z),j=y%w,nt=j%U.boundary,dt=j+nt;y+=nt,dt!==0&&w-dt<U.storage&&(y+=w-dt),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=U.storage}}}const T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function M(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const cb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function lb(){return xn===null&&(xn=new Ef(cb,16,16,Mi,Bn),xn.name="DFG_LUT",xn.minFilter=Oe,xn.magFilter=Oe,xn.wrapS=On,xn.wrapT=On,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class ub{constructor(t={}){const{canvas:e=q_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ye}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=f,p=new Set([sl,il,nl]),m=new Set([Ye,Tn,Bs,Hs,Qc,tl]),v=new Uint32Array(4),E=new Int32Array(4),y=new L;let w=null,T=null;const P=[],x=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let R=!1,F=null;this._outputColorSpace=tn;let W=0,X=0,N=null,z=-1,U=null;const j=new Me,nt=new Me;let dt=null;const xt=new te(0);let At=0,Yt=e.width,ee=e.height,Ht=1,$=null,gt=null;const ot=new Me(0,0,Yt,ee),Ct=new Me(0,0,Yt,ee);let Ot=!1;const Dt=new ul;let ne=!1,Ft=!1;const J=new ae,it=new L,Q=new Me,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function kt(){return N===null?Ht:1}let C=i;function Gt(S,O){return e.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),C===null){const O="webgl2";if(C=Gt(O,S),C===null)throw Gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw jt("WebGLRenderer: "+S.message),S}let Rt,Bt,st,oe,b,_,k,K,tt,rt,lt,Y,Z,Mt,bt,ut,at,zt,qt,re,D,ct,q;function yt(){Rt=new ly(C),Rt.init(),D=new tb(C,Rt),Bt=new ey(C,Rt,t,D),st=new jE(C,Rt),Bt.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),oe=new dy(C),b=new kE,_=new QE(C,Rt,st,b,Bt,D,oe),k=new cy(I),K=new gv(C),ct=new QM(C,K),tt=new uy(C,K,oe,ct),rt=new py(C,tt,K,ct,oe),zt=new fy(C,Bt,_),bt=new ny(b),lt=new FE(I,k,Rt,Bt,ct,bt),Y=new ob(I,b),Z=new HE,Mt=new YE(Rt),at=new jM(I,k,st,rt,g,l),ut=new JE(I,rt,Bt),q=new ab(C,oe,Bt,st),qt=new ty(C,Rt,oe),re=new hy(C,Rt,oe),oe.programs=lt.programs,I.capabilities=Bt,I.extensions=Rt,I.properties=b,I.renderLists=Z,I.shadowMap=ut,I.state=st,I.info=oe}yt(),M!==Ye&&(A=new gy(M,e.width,e.height,s,r));const ht=new sb(I,C);this.xr=ht,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(S){S!==void 0&&(Ht=S,this.setSize(Yt,ee,!1))},this.getSize=function(S){return S.set(Yt,ee)},this.setSize=function(S,O,V=!0){if(ht.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=S,ee=O,e.width=Math.floor(S*Ht),e.height=Math.floor(O*Ht),V===!0&&(e.style.width=S+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Yt*Ht,ee*Ht).floor()},this.setDrawingBufferSize=function(S,O,V){Yt=S,ee=O,Ht=V,e.width=Math.floor(S*V),e.height=Math.floor(O*V),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(M===Ye){jt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(ot)},this.setViewport=function(S,O,V,H){S.isVector4?ot.set(S.x,S.y,S.z,S.w):ot.set(S,O,V,H),st.viewport(j.copy(ot).multiplyScalar(Ht).round())},this.getScissor=function(S){return S.copy(Ct)},this.setScissor=function(S,O,V,H){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,O,V,H),st.scissor(nt.copy(Ct).multiplyScalar(Ht).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(S){st.setScissorTest(Ot=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,V=!0){let H=0;if(S){let G=!1;if(N!==null){const St=N.texture.format;G=p.has(St)}if(G){const St=N.texture.type,Tt=m.has(St),_t=at.getClearColor(),wt=at.getClearAlpha(),It=_t.r,Xt=_t.g,Zt=_t.b;Tt?(v[0]=It,v[1]=Xt,v[2]=Zt,v[3]=wt,C.clearBufferuiv(C.COLOR,0,v)):(E[0]=It,E[1]=Xt,E[2]=Zt,E[3]=wt,C.clearBufferiv(C.COLOR,0,E))}else H|=C.COLOR_BUFFER_BIT}O&&(H|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),at.dispose(),Z.dispose(),Mt.dispose(),b.dispose(),k.dispose(),rt.dispose(),ct.dispose(),q.dispose(),lt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Dl),ht.removeEventListener("sessionend",Nl),ri.stop()};function et(S){S.preventDefault(),pu("WebGLRenderer: Context Lost."),R=!0}function Pt(){pu("WebGLRenderer: Context Restored."),R=!1;const S=oe.autoReset,O=ut.enabled,V=ut.autoUpdate,H=ut.needsUpdate,G=ut.type;yt(),oe.autoReset=S,ut.enabled=O,ut.autoUpdate=V,ut.needsUpdate=H,ut.type=G}function Wt(S){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ye(S){const O=S.target;O.removeEventListener("dispose",ye),ue(O)}function ue(S){wn(S),b.remove(S)}function wn(S){const O=b.get(S).programs;O!==void 0&&(O.forEach(function(V){lt.releaseProgram(V)}),S.isShaderMaterial&&lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,V,H,G,St){O===null&&(O=vt);const Tt=G.isMesh&&G.matrixWorld.determinant()<0,_t=yp(S,O,V,H,G);st.setMaterial(H,Tt);let wt=V.index,It=1;if(H.wireframe===!0){if(wt=tt.getWireframeAttribute(V),wt===void 0)return;It=2}const Xt=V.drawRange,Zt=V.attributes.position;let Lt=Xt.start*It,he=(Xt.start+Xt.count)*It;St!==null&&(Lt=Math.max(Lt,St.start*It),he=Math.min(he,(St.start+St.count)*It)),wt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,wt.count)):Zt!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,Zt.count));const Ee=he-Lt;if(Ee<0||Ee===1/0)return;ct.setup(G,H,_t,V,wt);let Se,de=qt;if(wt!==null&&(Se=K.get(wt),de=re,de.setIndex(Se)),G.isMesh)H.wireframe===!0?(st.setLineWidth(H.wireframeLinewidth*kt()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(G.isLine){let De=H.linewidth;De===void 0&&(De=1),st.setLineWidth(De*kt()),G.isLineSegments?de.setMode(C.LINES):G.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else G.isPoints?de.setMode(C.POINTS):G.isSprite&&de.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const De=G._multiDrawStarts,Et=G._multiDrawCounts,ze=G._multiDrawCount,ie=wt?K.get(wt).bytesPerElement:1,Je=b.get(H).currentProgram.getUniforms();for(let gn=0;gn<ze;gn++)Je.setValue(C,"_gl_DrawID",gn),de.render(De[gn]/ie,Et[gn])}else if(G.isInstancedMesh)de.renderInstances(Lt,Ee,G.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,De);de.renderInstances(Lt,Ee,Et)}else de.render(Lt,Ee)};function mn(S,O,V){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,$s(S,O,V),S.side=ei,S.needsUpdate=!0,$s(S,O,V),S.side=Mn):$s(S,O,V)}this.compile=function(S,O,V=null){V===null&&(V=S),T=Mt.get(V),T.init(O),x.push(T),V.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const St=G.material;if(St)if(Array.isArray(St))for(let Tt=0;Tt<St.length;Tt++){const _t=St[Tt];mn(_t,V,G),H.add(_t)}else mn(St,V,G),H.add(St)}),T=x.pop(),H},this.compileAsync=function(S,O,V=null){const H=this.compile(S,O,V);return new Promise(G=>{function St(){if(H.forEach(function(Tt){b.get(Tt).currentProgram.isReady()&&H.delete(Tt)}),H.size===0){G(S);return}setTimeout(St,10)}Rt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Eo=null;function Sp(S){Eo&&Eo(S)}function Dl(){ri.stop()}function Nl(){ri.start()}const ri=new kf;ri.setAnimationLoop(Sp),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(S){Eo=S,ht.setAnimationLoop(S),S===null?ri.stop():ri.start()},ht.addEventListener("sessionstart",Dl),ht.addEventListener("sessionend",Nl),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;F!==null&&F.renderStart(S,O);const V=ht.enabled===!0&&ht.isPresenting===!0,H=A!==null&&(N===null||V)&&A.begin(I,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,O,N),T=Mt.get(S,x.length),T.init(O),T.state.textureUnits=_.getTextureUnits(),x.push(T),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Dt.setFromProjectionMatrix(J,yn,O.reversedDepth),Ft=this.localClippingEnabled,ne=bt.init(this.clippingPlanes,Ft),w=Z.get(S,P.length),w.init(),P.push(w),ht.enabled===!0&&ht.isPresenting===!0){const Tt=I.xr.getDepthSensingMesh();Tt!==null&&bo(Tt,O,-1/0,I.sortObjects)}bo(S,O,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort($,gt),ft=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ft&&at.addToRenderList(w,S),this.info.render.frame++,ne===!0&&bt.beginShadows();const G=T.state.shadowsArray;if(ut.render(G,S,O),ne===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Tt=w.opaque,_t=w.transmissive;if(T.setupLights(),O.isArrayCamera){const wt=O.cameras;if(_t.length>0)for(let It=0,Xt=wt.length;It<Xt;It++){const Zt=wt[It];Ol(Tt,_t,S,Zt)}ft&&at.render(S);for(let It=0,Xt=wt.length;It<Xt;It++){const Zt=wt[It];Ul(w,S,Zt,Zt.viewport)}}else _t.length>0&&Ol(Tt,_t,S,O),ft&&at.render(S),Ul(w,S,O)}N!==null&&X===0&&(_.updateMultisampleRenderTarget(N),_.updateRenderTargetMipmap(N)),H&&A.end(I),S.isScene===!0&&S.onAfterRender(I,S,O),ct.resetDefaultState(),z=-1,U=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),ne===!0&&bt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,F!==null&&F.renderEnd()};function bo(S,O,V,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Dt.intersectsSprite(S)){H&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const Tt=rt.update(S),_t=S.material;_t.visible&&w.push(S,Tt,_t,V,Q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Dt.intersectsObject(S))){const Tt=rt.update(S),_t=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Q.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Q.copy(Tt.boundingSphere.center)),Q.applyMatrix4(S.matrixWorld).applyMatrix4(J)),Array.isArray(_t)){const wt=Tt.groups;for(let It=0,Xt=wt.length;It<Xt;It++){const Zt=wt[It],Lt=_t[Zt.materialIndex];Lt&&Lt.visible&&w.push(S,Tt,Lt,V,Q.z,Zt)}}else _t.visible&&w.push(S,Tt,_t,V,Q.z,null)}}const St=S.children;for(let Tt=0,_t=St.length;Tt<_t;Tt++)bo(St[Tt],O,V,H)}function Ul(S,O,V,H){const{opaque:G,transmissive:St,transparent:Tt}=S;T.setupLightsView(V),ne===!0&&bt.setGlobalState(I.clippingPlanes,V),H&&st.viewport(j.copy(H)),G.length>0&&Zs(G,O,V),St.length>0&&Zs(St,O,V),Tt.length>0&&Zs(Tt,O,V),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ol(S,O,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Lt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:Lt?Bn:Ye,minFilter:mi,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const St=T.state.transmissionRenderTarget[H.id],Tt=H.viewport||j;St.setSize(Tt.z*I.transmissionResolutionScale,Tt.w*I.transmissionResolutionScale);const _t=I.getRenderTarget(),wt=I.getActiveCubeFace(),It=I.getActiveMipmapLevel();I.setRenderTarget(St),I.getClearColor(xt),At=I.getClearAlpha(),At<1&&I.setClearColor(16777215,.5),I.clear(),ft&&at.render(V);const Xt=I.toneMapping;I.toneMapping=En;const Zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ne===!0&&bt.setGlobalState(I.clippingPlanes,H),Zs(S,V,H),_.updateMultisampleRenderTarget(St),_.updateRenderTargetMipmap(St),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Ee=O.length;he<Ee;he++){const Se=O[he],{object:de,geometry:De,material:Et,group:ze}=Se;if(Et.side===Mn&&de.layers.test(H.layers)){const ie=Et.side;Et.side=Ge,Et.needsUpdate=!0,Fl(de,V,H,De,Et,ze),Et.side=ie,Et.needsUpdate=!0,Lt=!0}}Lt===!0&&(_.updateMultisampleRenderTarget(St),_.updateRenderTargetMipmap(St))}I.setRenderTarget(_t,wt,It),I.setClearColor(xt,At),Zt!==void 0&&(H.viewport=Zt),I.toneMapping=Xt}function Zs(S,O,V){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,St=S.length;G<St;G++){const Tt=S[G],{object:_t,geometry:wt,group:It}=Tt;let Xt=Tt.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),_t.layers.test(V.layers)&&Fl(_t,O,V,wt,Xt,It)}}function Fl(S,O,V,H,G,St){S.onBeforeRender(I,O,V,H,G,St),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(I,O,V,H,S,St),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,I.renderBufferDirect(V,O,H,G,S,St),G.side=ei,G.needsUpdate=!0,I.renderBufferDirect(V,O,H,G,S,St),G.side=Mn):I.renderBufferDirect(V,O,H,G,S,St),S.onAfterRender(I,O,V,H,G,St)}function $s(S,O,V){O.isScene!==!0&&(O=vt);const H=b.get(S),G=T.state.lights,St=T.state.shadowsArray,Tt=G.state.version,_t=lt.getParameters(S,G.state,St,O,V,T.state.lightProbeGridArray),wt=lt.getProgramCacheKey(_t);let It=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Xt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=k.get(S.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",ye),It=new Map,H.programs=It);let Zt=It.get(wt);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===Tt)return Bl(S,_t),Zt}else _t.uniforms=lt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,_t),S.onBeforeCompile(_t,I),Zt=lt.acquireProgram(_t,wt),It.set(wt,Zt),H.uniforms=_t.uniforms;const Lt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=bt.uniform),Bl(S,_t),H.needsLights=bp(S),H.lightsStateVersion=Tt,H.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=Zt,H.uniformsList=null,Zt}function kl(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Fr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Bl(S,O){const V=b.get(S);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Mp(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let V=0,H=S.length;V<H;V++){const G=S[V];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function yp(S,O,V,H,G){O.isScene!==!0&&(O=vt),_.resetTextureUnits();const St=O.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,_t=N===null?I.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qt.workingColorSpace,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=k.get(H.envMap||Tt,wt),Xt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color;let Se=En;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Se=I.toneMapping);const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,De=de!==void 0?de.length:0,Et=b.get(H),ze=T.state.lights;if(ne===!0&&(Ft===!0||S!==U)){const ge=S===U&&H.id===z;bt.setState(H,S,ge)}let ie=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ze.state.version||Et.outputColorSpace!==_t||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==It||H.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==bt.numPlanes||Et.numIntersection!==bt.numIntersection)||Et.vertexAlphas!==Xt||Et.vertexTangents!==Zt||Et.morphTargets!==Lt||Et.morphNormals!==he||Et.morphColors!==Ee||Et.toneMapping!==Se||Et.morphTargetsCount!==De||!!Et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,Et.__version=H.version);let Je=Et.currentProgram;ie===!0&&(Je=$s(H,O,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,Je,Et));let gn=!1,zn=!1,Ai=!1;const fe=Je.getUniforms(),be=Et.uniforms;if(st.useProgram(Je.program)&&(gn=!0,zn=!0,Ai=!0),H.id!==z&&(z=H.id,zn=!0),Et.needsLights){const ge=Mp(T.state.lightProbeGridArray,G);Et.lightProbeGrid!==ge&&(Et.lightProbeGrid=ge,zn=!0)}if(gn||U!==S){st.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),fe.setValue(C,"projectionMatrix",S.projectionMatrix),fe.setValue(C,"viewMatrix",S.matrixWorldInverse);const Wn=fe.map.cameraPosition;Wn!==void 0&&Wn.setValue(C,it.setFromMatrixPosition(S.matrixWorld)),Bt.logarithmicDepthBuffer&&fe.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),U!==S&&(U=S,zn=!0,Ai=!0)}if(Et.needsLights&&(ze.state.directionalShadowMap.length>0&&fe.setValue(C,"directionalShadowMap",ze.state.directionalShadowMap,_),ze.state.spotShadowMap.length>0&&fe.setValue(C,"spotShadowMap",ze.state.spotShadowMap,_),ze.state.pointShadowMap.length>0&&fe.setValue(C,"pointShadowMap",ze.state.pointShadowMap,_)),G.isSkinnedMesh){fe.setOptional(C,G,"bindMatrix"),fe.setOptional(C,G,"bindMatrixInverse");const ge=G.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),fe.setValue(C,"boneTexture",ge.boneTexture,_))}G.isBatchedMesh&&(fe.setOptional(C,G,"batchingTexture"),fe.setValue(C,"batchingTexture",G._matricesTexture,_),fe.setOptional(C,G,"batchingIdTexture"),fe.setValue(C,"batchingIdTexture",G._indirectTexture,_),fe.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(C,"batchingColorTexture",G._colorsTexture,_));const Vn=V.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&zt.update(G,V,Je),(zn||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,fe.setValue(C,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(be.envMapIntensity.value=O.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=lb()),zn){if(fe.setValue(C,"toneMappingExposure",I.toneMappingExposure),Et.needsLights&&Ep(be,Ai),St&&H.fog===!0&&Y.refreshFogUniforms(be,St),Y.refreshMaterialUniforms(be,H,Ht,ee,T.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.lightProbeGrid){const ge=Et.lightProbeGrid;be.probesSH.value=ge.texture,be.probesMin.value.copy(ge.boundingBox.min),be.probesMax.value.copy(ge.boundingBox.max),be.probesResolution.value.copy(ge.resolution)}Fr.upload(C,kl(Et),be,_)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fr.upload(C,kl(Et),be,_),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(C,"center",G.center),fe.setValue(C,"modelViewMatrix",G.modelViewMatrix),fe.setValue(C,"normalMatrix",G.normalMatrix),fe.setValue(C,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ge=H.uniformsGroups;for(let Wn=0,Ri=ge.length;Wn<Ri;Wn++){const Hl=ge[Wn];q.update(Hl,Je),q.bind(Hl,Je)}}return Je}function Ep(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function bp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,O,V){const H=b.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=O,b.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const V=b.get(S);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};const Tp=C.createFramebuffer();this.setRenderTarget=function(S,O=0,V=0){N=S,W=O,X=V;let H=null,G=!1,St=!1;if(S){const _t=b.get(S);if(_t.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(C.FRAMEBUFFER,_t.__webglFramebuffer),j.copy(S.viewport),nt.copy(S.scissor),dt=S.scissorTest,st.viewport(j),st.scissor(nt),st.setScissorTest(dt),z=-1;return}else if(_t.__webglFramebuffer===void 0)_.setupRenderTarget(S);else if(_t.__hasExternalTextures)_.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Xt=S.depthTexture;if(_t.__boundDepthTexture!==Xt){if(Xt!==null&&b.has(Xt)&&(S.width!==Xt.image.width||S.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(S)}}const wt=S.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);const It=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[O])?H=It[O][V]:H=It[O],G=!0):S.samples>0&&_.useMultisampledRTT(S)===!1?H=b.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[V]:H=It,j.copy(S.viewport),nt.copy(S.scissor),dt=S.scissorTest}else j.copy(ot).multiplyScalar(Ht).floor(),nt.copy(Ct).multiplyScalar(Ht).floor(),dt=Ot;if(V!==0&&(H=Tp),st.bindFramebuffer(C.FRAMEBUFFER,H)&&st.drawBuffers(S,H),st.viewport(j),st.scissor(nt),st.setScissorTest(dt),G){const _t=b.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,V)}else if(St){const _t=O;for(let wt=0;wt<S.textures.length;wt++){const It=b.get(S.textures[wt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+wt,It.__webglTexture,V,_t)}}else if(S!==null&&V!==0){const _t=b.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_t.__webglTexture,V)}z=-1},this.readRenderTargetPixels=function(S,O,V,H,G,St,Tt,_t=0){if(!(S&&S.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt){st.bindFramebuffer(C.FRAMEBUFFER,wt);try{const It=S.textures[_t],Xt=It.format,Zt=It.type;if(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Xt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Zt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&V>=0&&V<=S.height-G&&C.readPixels(O,V,H,G,D.convert(Xt),D.convert(Zt),St)}finally{const It=N!==null?b.get(N).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,O,V,H,G,St,Tt,_t=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt)if(O>=0&&O<=S.width-H&&V>=0&&V<=S.height-G){st.bindFramebuffer(C.FRAMEBUFFER,wt);const It=S.textures[_t],Xt=It.format,Zt=It.type;if(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.bufferData(C.PIXEL_PACK_BUFFER,St.byteLength,C.STREAM_READ),C.readPixels(O,V,H,G,D.convert(Xt),D.convert(Zt),0);const he=N!==null?b.get(N).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,he);const Ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await K_(C,Ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,St),C.deleteBuffer(Lt),C.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,V=0){const H=Math.pow(2,-V),G=Math.floor(S.image.width*H),St=Math.floor(S.image.height*H),Tt=O!==null?O.x:0,_t=O!==null?O.y:0;_.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Tt,_t,G,St),st.unbindTexture()};const Ap=C.createFramebuffer(),Rp=C.createFramebuffer();this.copyTextureToTexture=function(S,O,V=null,H=null,G=0,St=0){let Tt,_t,wt,It,Xt,Zt,Lt,he,Ee;const Se=S.isCompressedTexture?S.mipmaps[St]:S.image;if(V!==null)Tt=V.max.x-V.min.x,_t=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,It=V.min.x,Xt=V.min.y,Zt=V.isBox3?V.min.z:0;else{const be=Math.pow(2,-G);Tt=Math.floor(Se.width*be),_t=Math.floor(Se.height*be),S.isDataArrayTexture?wt=Se.depth:S.isData3DTexture?wt=Math.floor(Se.depth*be):wt=1,It=0,Xt=0,Zt=0}H!==null?(Lt=H.x,he=H.y,Ee=H.z):(Lt=0,he=0,Ee=0);const de=D.convert(O.format),De=D.convert(O.type);let Et;O.isData3DTexture?(_.setTexture3D(O,0),Et=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_.setTexture2DArray(O,0),Et=C.TEXTURE_2D_ARRAY):(_.setTexture2D(O,0),Et=C.TEXTURE_2D),st.activeTexture(C.TEXTURE0),st.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),st.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),st.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ze=st.getParameter(C.UNPACK_ROW_LENGTH),ie=st.getParameter(C.UNPACK_IMAGE_HEIGHT),Je=st.getParameter(C.UNPACK_SKIP_PIXELS),gn=st.getParameter(C.UNPACK_SKIP_ROWS),zn=st.getParameter(C.UNPACK_SKIP_IMAGES);st.pixelStorei(C.UNPACK_ROW_LENGTH,Se.width),st.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Se.height),st.pixelStorei(C.UNPACK_SKIP_PIXELS,It),st.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),st.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt);const Ai=S.isDataArrayTexture||S.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const be=b.get(S),Vn=b.get(O),ge=b.get(be.__renderTarget),Wn=b.get(Vn.__renderTarget);st.bindFramebuffer(C.READ_FRAMEBUFFER,ge.__webglFramebuffer),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ri=0;Ri<wt;Ri++)Ai&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(S).__webglTexture,G,Zt+Ri),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(O).__webglTexture,St,Ee+Ri)),C.blitFramebuffer(It,Xt,Tt,_t,Lt,he,Tt,_t,C.DEPTH_BUFFER_BIT,C.NEAREST);st.bindFramebuffer(C.READ_FRAMEBUFFER,null),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||b.has(S)){const be=b.get(S),Vn=b.get(O);st.bindFramebuffer(C.READ_FRAMEBUFFER,Ap),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,Rp);for(let ge=0;ge<wt;ge++)Ai?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.__webglTexture,G,Zt+ge):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,be.__webglTexture,G),fe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Vn.__webglTexture,St,Ee+ge):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vn.__webglTexture,St),G!==0?C.blitFramebuffer(It,Xt,Tt,_t,Lt,he,Tt,_t,C.COLOR_BUFFER_BIT,C.NEAREST):fe?C.copyTexSubImage3D(Et,St,Lt,he,Ee+ge,It,Xt,Tt,_t):C.copyTexSubImage2D(Et,St,Lt,he,It,Xt,Tt,_t);st.bindFramebuffer(C.READ_FRAMEBUFFER,null),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else fe?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Et,St,Lt,he,Ee,Tt,_t,wt,de,De,Se.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Et,St,Lt,he,Ee,Tt,_t,wt,de,Se.data):C.texSubImage3D(Et,St,Lt,he,Ee,Tt,_t,wt,de,De,Se):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,St,Lt,he,Tt,_t,de,De,Se.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,St,Lt,he,Se.width,Se.height,de,Se.data):C.texSubImage2D(C.TEXTURE_2D,St,Lt,he,Tt,_t,de,De,Se);st.pixelStorei(C.UNPACK_ROW_LENGTH,ze),st.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie),st.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),st.pixelStorei(C.UNPACK_SKIP_ROWS,gn),st.pixelStorei(C.UNPACK_SKIP_IMAGES,zn),St===0&&O.generateMipmaps&&C.generateMipmap(Et),st.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&_.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?_.setTextureCube(S,0):S.isData3DTexture?_.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_.setTexture2DArray(S,0):_.setTexture2D(S,0),st.unbindTexture()},this.resetState=function(){W=0,X=0,N=null,st.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const vl=765,Sl=503,hb=4,qi=512,xi=334,Yf=253,qf=142,Kf=23,Zf=qf+Kf,$f=xi+Zf,vo=249,Ks=(Yf-vo)/2,Jf=164,jf=29,db=48,fb=172,pb=156,mb=8,Ml=Ks+jf,Xi=146,gb=13,_b=8,xb=Ml+gb,vb=Ml+2,Sb=2,Mb=32,yb=vo,Eb=Ks,bb=vo,Tb=Ks,Qf=37,Ab=2,Rb=7,tp=$f-Jf,ep=tp-Qf*Ab,np=26,ip=190,wb=ep,sp=np*2+ip,Cb=Ks+Math.round((vo-sp)/2),vh=Math.PI/2;function Pb(n,t,e,i){const s=l=>{const c=n.getBoundingClientRect();return{x:(l.clientX-c.left)/c.width*qi,y:(l.clientY-c.top)/c.height*xi}},r=l=>{const{x:c,y:u}=s(l),d=i(c,u);t(d.x,d.y)},o=l=>{if(l.button!==0)return;l.preventDefault();const{x:c,y:u}=s(l),d=i(c,u);e(d.x,d.y)},a=()=>{t(NaN,NaN)};return n.addEventListener("pointermove",r),n.addEventListener("pointerdown",o),n.addEventListener("pointerleave",a),()=>{n.removeEventListener("pointermove",r),n.removeEventListener("pointerdown",o),n.removeEventListener("pointerleave",a)}}const He={deepWater:2648208,shallow:3836072,reefExposed:4884640,reefSubmerged:3174544,sand:13217914,grass:5081660,coralSolid:6965848,tideZone:3442856},da=.12,Ib=.06,Lb=.003,Db=.35,Nb=16033736,Ub=15235240,Ob=8964336;function Sh(n,t=.9){return new Ce({color:n,roughness:t,flatShading:!0})}function Fb(){const n=new se,t=new Ut(new yi(.12,.16,.1,8),Sh(Nb,.7));t.position.y=.05,n.add(t);const e=[-.08,-.04,0,.04,.08];for(const i of e){const s=new Ut(new xe(.03,.14,.03),Sh(Ub,.85));s.position.set(i,-.08,0),n.add(s)}return n}class kb{constructor(){B(this,"root",new se);B(this,"bubble");B(this,"currentX",0);B(this,"currentY",0);B(this,"currentZ",0);B(this,"initialized",!1);const t=Fb();this.bubble=new Ut(new _l(Db,12,10),new Ce({color:Ob,transparent:!0,opacity:.28,roughness:.15,metalness:.05,flatShading:!0})),this.root.add(this.bubble,t),this.root.visible=!1}sync(t,e,i,s,r){if(this.root.visible=t,!t)return;this.initialized||(this.currentX=e,this.currentY=i,this.currentZ=s,this.initialized=!0),this.currentX+=(e-this.currentX)*da,this.currentY+=(i-this.currentY)*da,this.currentZ+=(s-this.currentZ)*da;const o=Math.sin(r*Lb)*Ib;this.root.position.set(this.currentX,this.currentY+o,this.currentZ),this.root.rotation.y=r*4e-4}dispose(){this.root.traverse(t=>{t instanceof Ut&&(t.geometry.dispose(),t.material.dispose())})}}const Mh=.25,fa=.85,Bb=.55,Hb=.24,br=.5,Tr=.45,Gb=.3;function So(n){return Math.min(1,Math.max(0,n))}function un(n){const t=So(n);return .5-.5*Math.cos(Math.PI*t)}function Lc(n,t){return Math.hypot(n,t)<1e-6?null:Math.atan2(t,n)}function yh(n,t,e){const i=Math.PI*2;let s=(t-n)%i;return s>Math.PI&&(s-=i),s<-Math.PI&&(s+=i),n+s*So(e)}function rp(n){return Lc(n.end.x-n.start.x,n.end.y-n.start.y)??Lc(n.start.x-n.entry.x,n.start.y-n.entry.y)}function zb(n,t){const e=rp(n);if(e===null)return null;const i=Lc(n.start.x-n.entry.x,n.start.y-n.entry.y)??e;if(t<=Un)return yh(i,e,un(t/Un));if(t>=fa){const s=qe(nn(e))*Math.PI/180;return yh(e,s,(t-fa)/(1-fa))}return e}function Vb(n,t){const e=n.zoneRadius,i=Math.sin(t*Math.PI),s=un(t/Mh)*un((1-t)/Mh);return{liftY:e*.26+i*e*.05,pitch:0,roll:n.rideSide*s*.12,yawOffset:n.rideSide*s*(Math.PI/2),offsetX:0,offsetY:0,riderLean:-s*.1,riderCrouch:s*.2}}function Wb(n,t){const e=n.zoneRadius,i=e*.9;let s=0;if(t<.26){const o=t/.26;s=un(o)*e*.58}else if(t<.5){const o=(t-.26)/.24;s=e*.58+un(o)*(i-e*.58)}else{const o=(t-.5)/.5;s=i-un(o)*(i-e*.1)}const r=.3*Math.cos(t*Math.PI);return{liftY:s,pitch:r,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:r*.15,riderCrouch:0}}function Xb(n,t){const e=Math.sin(t*Math.PI);return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:-e*.35,riderCrouch:e*.45}}function Yb(n,t){const e=n.zoneRadius,i=e*.34,s=Math.sin(t*Math.PI),r=rp(n)??n.rotationRadians,o={x:-Math.sin(r),y:Math.cos(r)},a=n.rideSide;return{liftY:e*.14+s*e*.42,pitch:0,roll:a*(.38+s*.12),yawOffset:0,offsetX:o.x*a*i*s,offsetY:o.y*a*i*s,riderLean:-s*.12,riderCrouch:s*.15}}function qb(n,t){const e=n.zoneRadius,i=e*Bb,s=i*Hb,r=Un;let o,a,l=0;if(t<r){const c=t/r;o=un(c)*s,a=Tr*un(c)}else if(t<br){const c=(t-r)/(br-r);o=s+un(c)*(i-s),a=Tr}else{const c=(t-br)/(1-br);o=i*(1-un(c))+e*Gb*Math.sin(Math.PI*c);const u=un(c/.92);a=Tr-u*(Math.PI*2+Tr),l=Math.sin(Math.PI*c)*.5}return{liftY:o,pitch:a,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0,riderCrouch:l}}function Kb(n){const t=So(n)*Math.PI*2;return{liftY:.06+Math.sin(n*Math.PI)*.1,pitch:Math.sin(t)*.06,roll:Math.sin(t)*.35,yawOffset:t*.12,travelYawRadians:null,offsetX:0,offsetY:0,riderLean:Math.cos(t)*.12,riderCrouch:.2}}function Zb(n){const t=So(n.progress);return{...(()=>{switch(n.type){case"rail":return Vb(n,t);case"brain_coral":return Wb(n,t);case"tunnel":return Xb(n,t);case"wall_ride":return Yb(n,t);case"jump":return qb(n,t);default:return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0,riderCrouch:0}}})(),travelYawRadians:zb(n,t)}}function Ke(n,t,e=0){return{x:n,y:e,z:t}}function $b(n){return{x:n.x,y:n.z}}function Dc(n){return-qe(n)*Math.PI/180}function yl(n){return-n}const pa=13145182,Jb=3829413,jb=4860946,Mo=5917238,El=13213798,bl=16041282,op=9067050,ap=13213776,Qb=7027242,tT=13936690,Eh=16746666,Ar=1.2,cp=11027500,lp=6044190,eT=16033721,nT=16777215,iT=1.2,sT=1.25,bh=.4,Th=.35,up=.32,hp=.28,Ah=[{shirt:2984558,hair:2758672,boardWood:12093514,boardStripe:15258698},{shirt:9055566,hair:1839628,boardWood:13213798,boardStripe:6734568},{shirt:6971317,hair:3811864,boardWood:10123850,boardStripe:16033721},{shirt:12755516,hair:2365968,boardWood:12093514,boardStripe:9429114},{shirt:14700600,hair:1314828,boardWood:15919832,boardStripe:14698568}],rT=.05,oT=.35;function Rh(n,t,e,i,s,r=null){const o=i?Zb(i):r!==null?Kb(r):null,a=Ke(n+((o==null?void 0:o.offsetX)??0),t+((o==null?void 0:o.offsetY)??0)),l=Wc(n,t,s),c=o!==null&&o.travelYawRadians!==null?yl(o.travelYawRadians):Dc(e);return{worldX:a.x,worldZ:a.z,boardY:l+((o==null?void 0:o.liftY)??0),rotationY:c+((o==null?void 0:o.yawOffset)??0),pitch:(o==null?void 0:o.pitch)??0,roll:(o==null?void 0:o.roll)??0,riderLean:(o==null?void 0:o.riderLean)??0,riderCrouch:(o==null?void 0:o.riderCrouch)??0}}function dp(n,t,e){const i=new se,s=new se;s.rotation.order="YXZ";const r=new se;r.position.y=rT;const{group:o,cosmetics:a}=Tl(n,t);return s.add(o,r),i.add(s),{rig:i,tilt:s,riderAnchor:r,wake:e,cosmetics:a}}function wh(n,t,e){n.rig.position.set(e.worldX,e.boardY,e.worldZ),n.rig.rotation.y=e.rotationY,n.tilt.rotation.set(e.roll,0,e.pitch),t.position.set(0,0,0),t.rotation.set(0,0,e.riderLean),t.scale.y=1-e.riderCrouch*oT}function kr(n,t=.9){return new Ce({color:n,roughness:t,flatShading:!0})}function Nn(n,t,e,i,s,r,o){const a=new Ut(new xe(n,t,e),kr(i));return a.position.set(s,r,o),a}function yo(n,t=1){const e=new se;return e.add(Nn(.09,.18,.08,n.pants,0,.09,-.055),Nn(.09,.18,.08,n.pants,0,.09,.055),Nn(.13,.24,.22,n.shirt,0,.3,0),Nn(.08,.2,.07,n.shirt,0,.32,-.145),Nn(.08,.2,.07,n.shirt,0,.32,.145),Nn(.06,.05,.06,pa,0,.195,-.145),Nn(.06,.05,.06,pa,0,.195,.145),Nn(.12,.13,.12,pa,0,.485,0)),n.hair!==null&&e.add(Nn(.13,.05,.13,n.hair,-.005,.565,0)),e.scale.setScalar(t),e}function aT(){const n=new Pf;n.moveTo(-.62,-.13),n.lineTo(-.3,-.22),n.lineTo(.22,-.2),n.lineTo(.58,-.08),n.lineTo(.68,0),n.lineTo(.58,.08),n.lineTo(.22,.2),n.lineTo(-.3,.22),n.lineTo(-.62,.13),n.closePath();const t=new gl(n,{depth:.07,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t.translate(0,-.035,0),t}function Tl(n=El,t=bl){const e=new se,i=kr(n,.8),s=new Ut(aT(),i),r=kr(t),o=new Ut(new xe(.95,.02,.09),r);o.position.set(0,.04,0);const a=kr(n,.8),l=new Ut(new xe(.1,.12,.03),a);l.position.set(-.48,-.08,0);const c=new Ce({color:Eh,emissive:Eh,emissiveIntensity:.85,flatShading:!0}),u=new Ut(new xe(.92,.025,.02),c);u.position.set(0,.055,-.21),u.visible=!1;const d=new Ut(new xe(.92,.025,.02),c);return d.position.set(0,.055,.21),d.visible=!1,e.add(s,o,l,u,d),{group:e,cosmetics:{deckMat:i,stripeMat:r,finMat:a,railLeft:u,railRight:d}}}function Ch(n,t){let e=El,i=bl;t.has("rosewood_board")?(e=Qb,i=tT):t.has("surf_guru_board")&&(e=op,i=ap),n.deckMat.color.setHex(e),n.finMat.color.setHex(e),n.stripeMat.color.setHex(i);const s=t.has("coral_rail_cosmetic");n.railLeft.visible=s,n.railRight.visible=s}function cT(){return yo({shirt:Jb,pants:Mo,hair:jb})}function fp(n,t){const e=new se,i=new Ut(new yi(.5,.5,.02,16),new Ce({color:eT,transparent:!0,opacity:n}));i.scale.set(1.9,1,.8);const s=new Ut(new yi(.42,.42,.02,16),new Ce({color:nT,transparent:!0,opacity:t}));return s.scale.set(1.6,1,.65),e.add(i,s),e.visible=!1,e}function Ph(n,t,e,i){const s=t?iT:1;n.scale.set(s,1,s);const r=n.children[0],o=n.children[1];if(!(r instanceof Ut)||!(o instanceof Ut))return;const a=r.material,l=o.material;if(!(a instanceof Ce)||!(l instanceof Ce))return;const c=t?sT:1;a.opacity=e*c,l.opacity=i*c}function lT(n){const t=dp(n.boardWood,n.boardStripe,fp(up,hp)),e=yo({shirt:n.shirt,pants:Mo,hair:n.hair});return t.riderAnchor.add(e),t.rig.visible=!1,{parts:t,rider:e}}function uT(){return yo({shirt:cp,pants:Mo,hair:lp},1.1)}function hT(){const n=new se,t=yo({shirt:cp,pants:Mo,hair:lp},1.1),{group:e}=Tl(op,ap);return e.rotation.set(.15,0,-Math.PI/2.15),e.position.set(.1,.45,-.4),n.add(t,e),n}class dT{constructor(){B(this,"root",new se);B(this,"playerParts",dp(El,bl,fp(bh,Th)));B(this,"dockBoardMesh",Tl());B(this,"player",cT());B(this,"pet",new kb);B(this,"demoSurferPool",[]);B(this,"npcPool",[]);this.root.add(this.playerParts.rig,this.playerParts.wake,this.dockBoardMesh.group,this.player,this.pet.root)}sync(t,e,i=0){const s=t.progression.unlocked;Ch(this.playerParts.cosmetics,s),Ch(this.dockBoardMesh.cosmetics,s);const r=s.has("teeny_tai"),o=Ze(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y)),a=t.surfboard.speedState==="seated"&&o==="sand",l=a?0:qe(t.surfboard.currentHeading)*Math.PI/180,c=Rh(t.surfboard.position.x,t.surfboard.position.y,t.surfboard.currentHeading,t.trickAnimation,t.tide),u=a?0:Dc(t.surfboard.currentHeading),d=c.boardY;this.playerParts.rig.visible=t.boardMounted,this.dockBoardMesh.group.visible=!t.boardMounted,this.player.visible=!0,this.syncNpcs(t,e),this.syncDemoSurfers(t);const h=qe(t.surfboard.currentHeading)*Math.PI/180;if(!t.boardMounted){const p=Ke(t.boardDockX,t.boardDockY),m=Ke(t.surfboard.position.x,t.surfboard.position.y),v=pi(t.boardDockX,t.boardDockY,"sand"),E=Ze(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y)),y=E==="grass"||E==="sand"?pi(t.surfboard.position.x,t.surfboard.position.y,E):v;this.dockBoardMesh.group.position.set(p.x,v,p.z),this.dockBoardMesh.group.rotation.set(0,0,0),this.player.parent!==this.root&&this.root.add(this.player),this.player.position.set(m.x,y,m.z),this.player.rotation.set(0,Dc(t.surfboard.currentHeading),0),this.player.scale.y=1,this.playerParts.wake.visible=!1;const w=h+Math.PI;this.pet.sync(r,m.x+Math.cos(w)*Ar,y+.5,m.z+Math.sin(w)*Ar,i);return}this.player.parent!==this.playerParts.riderAnchor&&(this.playerParts.riderAnchor.add(this.player),this.player.rotation.set(0,0,0)),wh(this.playerParts,this.player,c);const f=t.surfboard.speedState==="riding"&&t.trickAnimation===null,g=t.trickSpeedBoostTicksRemaining>0;if(this.playerParts.wake.visible=f,f){const p=l+Math.PI;this.playerParts.wake.position.set(c.worldX+Math.cos(p)*.85,d+.02,c.worldZ+Math.sin(p)*.85),this.playerParts.wake.rotation.set(0,u,0),Ph(this.playerParts.wake,g,bh,Th)}const M=l+Math.PI;this.pet.sync(r,c.worldX+Math.cos(M)*Ar,d+.25,c.worldZ+Math.sin(M)*Ar,i)}syncDemoSurfers(t){for(;this.demoSurferPool.length<t.demoSurfers.length;){const e=Ah[this.demoSurferPool.length%Ah.length],i=lT(e);this.demoSurferPool.push(i),this.root.add(i.parts.rig,i.parts.wake)}for(let e=0;e<this.demoSurferPool.length;e+=1){const i=this.demoSurferPool[e],s=t.demoSurfers[e];if(!s){i.parts.rig.visible=!1,i.parts.wake.visible=!1;continue}const r=Rh(s.surfboard.position.x,s.surfboard.position.y,s.surfboard.currentHeading,s.trickAnimation,t.tide,s.tideSpinProgress),o=qe(s.surfboard.currentHeading)*Math.PI/180;i.parts.rig.visible=!0,wh(i.parts,i.rider,r);const a=s.trickAnimation===null&&(s.surfboard.speedState==="riding"||s.tideSpinProgress!==null),l=s.trickSpeedBoostTicksRemaining>0;if(i.parts.wake.visible=a,a){const c=o+Math.PI;i.parts.wake.position.set(r.worldX+Math.cos(c)*.85,r.boardY+.02,r.worldZ+Math.sin(c)*.85),i.parts.wake.rotation.set(0,r.rotationY,0),Ph(i.parts.wake,l,up,hp)}}}syncNpcs(t,e){for(;this.npcPool.length<t.npcs.length;){const s=t.npcs[this.npcPool.length].id==="guru"?hT():uT();this.npcPool.push(s),this.root.add(s)}for(let i=0;i<this.npcPool.length;i+=1){const s=this.npcPool[i];if(i>=t.npcs.length){s.visible=!1;continue}const r=t.npcs[i];s.visible=!0;const o=Ke(r.x,r.y),a=Ze(e,Math.floor(r.x),Math.floor(r.y)),l=a==="grass"||a==="sand"?pi(r.x,r.y,a):pi(r.x,r.y,"sand");s.position.set(o.x,l,o.z),s.rotation.y=yl(Math.atan2(t.boardDockY-r.y,t.boardDockX-r.x))}}dispose(){this.pet.dispose(),this.root.traverse(t=>{t instanceof Ut&&(t.geometry.dispose(),t.material.dispose())})}}function pp(n,t,e,i){return n==="coral_rideable"&&i!==null?Cd(t,e,i)/is>.35?"reef_submerged":"reef_exposed":n}function to(n){switch(n){case"deep_water":return He.deepWater;case"shallow":return He.shallow;case"reef_exposed":return He.reefExposed;case"reef_submerged":return He.reefSubmerged;case"sand":return He.sand;case"grass":return He.grass;case"coral_solid":return He.coralSolid;case"tide_zone":return He.tideZone;default:return He.deepWater}}const vn=new ae,ma=28,Ih=.08,Rr=52,fT=.38,ga=8,_a=4;function Nc(n,t,e){var i,s;return e?((i=n.outerRadiusAtAngle)==null?void 0:i.call(n,t))??n.outerRadius:((s=n.innerRadiusAtAngle)==null?void 0:s.call(n,t))??n.innerRadius}function pT(n,t,e){const i=Nc(n,t,!1),s=Nc(n,t,!0);return i+(s-i)*e}function mT(n,t,e){const i=me(e?t+.04:t-.04);return Id(i,n)}class gT{constructor(){B(this,"root",new se);B(this,"leading",null);B(this,"trailing",null);B(this,"washBody",null);B(this,"washCrest",null);B(this,"capacity",0);B(this,"washCapacity",0);const t=new Ce({color:15268095,transparent:!0,opacity:.75,roughness:.3,metalness:.05}),e=new Ce({color:9357536,transparent:!0,opacity:.45,roughness:.5,metalness:.05}),i=new Ce({color:16777215,transparent:!0,opacity:.94,roughness:.14,metalness:.02,emissive:13691647,emissiveIntensity:.24}),s=new Ce({color:16777215,transparent:!0,opacity:.82,roughness:.1,metalness:.04,emissive:16777215,emissiveIntensity:.14});this.capacity=ma*4;const r=Math.max(.35,wa*.08);this.leading=new _i(new xe(1,r,.08),t,this.capacity),this.trailing=new _i(new xe(1,r,.08),e,this.capacity),this.washCapacity=Rr*ga*_a*2,this.washBody=new _i(new xe(1,1,1),i,this.washCapacity),this.washCrest=new _i(new xe(1,1,1),s,this.washCapacity);for(const o of[this.leading,this.trailing,this.washBody,this.washCrest])o.visible=!1,o.frustumCulled=!1;this.root.add(this.leading,this.trailing,this.washBody,this.washCrest)}sync(t){if(!t||!this.leading||!this.trailing||!this.washBody||!this.washCrest){for(const a of[this.leading,this.trailing,this.washBody,this.washCrest])a&&(a.visible=!1);return}const e=Ke(t.centerX,t.centerY),i=Math.max(.35,wa*.08),s=[{angle:t.phaseRadians,leading:!0},{angle:me(t.phaseRadians+t.sweepRadians),leading:!1}];let r=0,o=0;for(const a of s){const l=mT(t,a.angle,a.leading),c=a.leading?.18:.14,u=a.leading?this.leading:this.trailing;let d=a.leading?r:o;for(const h of[!1,!0]){const f=Nc(t,a.angle,h);for(let g=0;g<=ma&&!(d>=this.capacity);g+=1){const M=a.angle+c*(g/ma-.5),p=f+(h?Ih:-Ih),m=e.x+Math.cos(M)*p,v=e.z+Math.sin(M)*p,E=wd(a.leading?.04:.96),y=a.leading?.75+l*.9:.45+l*.55;y<.05?vn.makeScale(0,0,0):vn.makeScale(y,i*(.8+l*1.1),y*.65),vn.setPosition(m,E+i*.45,v),u.setMatrixAt(d,vn),d+=1}}a.leading?r=d:o=d}this.leading.count=r,this.leading.instanceMatrix.needsUpdate=!0,this.leading.visible=r>0,this.trailing.count=o,this.trailing.instanceMatrix.needsUpdate=!0,this.trailing.visible=o>0,this.syncCurlingWash(t,e)}syncCurlingWash(t,e){if(!this.washBody||!this.washCrest)return;const i=me(t.phaseRadians+t.sweepRadians),s=is;let r=0,o=0;for(let a=0;a<_a;a+=1){const l=a/_a,c=me(i-l*.06),u=1-l*.22;for(let d=0;d<=Rr;d+=1){const h=c+fT*(d/Rr-.5),f=1-Math.abs(d/Rr-.5)*1.15;for(let g=0;g<ga&&!(r>=this.washCapacity||o>=this.washCapacity);g+=1){const M=(g+.5)/ga,p=pT(t,h,M),m=e.x+Math.cos(h)*p,v=e.z+Math.sin(h)*p,E=s*u*(.9+g%3*.05)*f,y=1.55+M*1.05-l*.2,w=.72+M*.38;vn.makeScale(y,E,w),vn.setPosition(m,E*.5,v),this.washBody.setMatrixAt(r,vn),r+=1;const T=E*.32,P=E*.92,x=l*.35+M*.12,A=e.x+Math.cos(h-x)*(p-.15),I=e.z+Math.sin(h-x)*(p-.15);vn.makeScale(y*1.6,T,w*1.4),vn.setPosition(A,P+T*.42,I),this.washCrest.setMatrixAt(o,vn),o+=1}}}this.washBody.count=r,this.washBody.instanceMatrix.needsUpdate=!0,this.washBody.visible=r>0,this.washCrest.count=o,this.washCrest.instanceMatrix.needsUpdate=!0,this.washCrest.visible=o>0}dispose(){for(const t of[this.leading,this.trailing,this.washBody,this.washCrest])t&&(t.geometry.dispose(),t.material.dispose(),t.removeFromParent());this.leading=null,this.trailing=null,this.washBody=null,this.washCrest=null}}const Ki=.06,wr=Ki/2,_T=.35,Qe=new ae,xT=.01,vT=.08,ST=.35,Lh=new ae().makeScale(0,0,0),MT=new Set(["coral_rideable","shallow"]),Dh=new te(He.reefExposed),yT=new te(He.reefSubmerged);function Nh(n,t){const e=new Map;for(let i=0;i<n.heightTiles;i+=1)for(let s=0;s<n.widthTiles;s+=1){const r=n.tiles[i][s];let o=null;if(t&&(r==="grass"||r==="sand"))o=to(r);else if(!t&&r!=="deep_water"&&r!=="grass"&&r!=="sand"&&r!=="coral_rideable"){const l=pp(r,s+.5,i+.5,null);o=to(l)}if(o===null)continue;const a=e.get(o)??[];a.push({tx:s,ty:i}),e.set(o,a)}return e}function ET(n){const t=[];for(let e=0;e<n.heightTiles;e+=1)for(let i=0;i<n.widthTiles;i+=1)n.tiles[e][i]==="coral_rideable"&&t.push({tx:i,ty:e});return t}function bT(n,t,e){return e==="grass"||e==="sand"?pi(n+.5,t+.5,e):Ki}function Uh(n,t,e,i){const s=[];for(const[r,o]of n){const a=new _i(new xe(1,1,1),new Ce({color:r}),o.length);a.castShadow=!1,a.receiveShadow=!1;for(let l=0;l<o.length;l+=1){const{tx:c,ty:u}=o[l],d=t.tiles[u][c],h=i.landElevation?bT(c,u,d):i.flatHeight,f=i.landElevation?h/2:i.flatCenterY;Qe.makeScale(1,h,1),Qe.setPosition(c+.5,f,u+.5),a.setMatrixAt(l,Qe),MT.has(d)&&e.push({tx:c,ty:u,mesh:a,index:l,baseCenterY:f,tileHeight:h,angle:0,inRing:!0,lastWave:Number.NaN})}a.instanceMatrix.needsUpdate=!0,s.push(a)}return s}function xa(n){for(const t of n)t.geometry.dispose(),t.material.dispose()}class TT{constructor(){B(this,"root",new se);B(this,"tideEdges",new gT);B(this,"water",null);B(this,"landMeshes",[]);B(this,"overlayMeshes",[]);B(this,"tideAnimInstances",[]);B(this,"waterCaps",null);B(this,"coralMesh",null);B(this,"coralTiles",[]);B(this,"coralSubmerged",new Uint8Array(0));B(this,"polarReady",!1);B(this,"mapKey",null);this.root.add(this.tideEdges.root)}build(t,e){const i=`${t.widthTiles}x${t.heightTiles}:${sm()}`;if(this.mapKey===i)return;this.destroy();const s=new Ce({color:He.deepWater,roughness:.85,metalness:.05});this.water=new Ut(new cs(t.widthTiles,t.heightTiles),s),this.water.rotation.x=-Math.PI/2,this.water.position.set(t.widthTiles/2,0,t.heightTiles/2),this.water.receiveShadow=!0,this.root.add(this.water);const r=Nh(t,!0);this.landMeshes=Uh(r,t,[],{landElevation:!0,flatHeight:Ki,flatCenterY:wr});for(const o of this.landMeshes)this.root.add(o);this.rebuildOverlay(t,e),this.mapKey=i}rebuildOverlay(t,e){for(const s of this.overlayMeshes)this.root.remove(s);xa(this.overlayMeshes),this.overlayMeshes=[],this.waterCaps&&(this.root.remove(this.waterCaps),this.waterCaps.geometry.dispose(),this.waterCaps.material.dispose(),this.waterCaps=null),this.coralMesh&&(this.root.remove(this.coralMesh),this.coralMesh.geometry.dispose(),this.coralMesh.material.dispose(),this.coralMesh=null),this.tideAnimInstances=[];const i=Nh(t,!1);this.overlayMeshes=Uh(i,t,this.tideAnimInstances,{landElevation:!1,flatHeight:Ki,flatCenterY:wr});for(const s of this.overlayMeshes)this.root.add(s);if(this.buildCoralMesh(t),this.tideAnimInstances.length>0){this.waterCaps=new _i(new xe(1,1,1),new Ce({color:He.shallow,transparent:!0,opacity:.62,roughness:.35,metalness:.1}),this.tideAnimInstances.length);for(let s=0;s<this.tideAnimInstances.length;s+=1)this.waterCaps.setMatrixAt(s,Lh);this.waterCaps.instanceMatrix.needsUpdate=!0,this.root.add(this.waterCaps)}this.polarReady=!1,this.updateTideVisuals(t,e)}buildCoralMesh(t){if(this.coralTiles=ET(t),this.coralSubmerged=new Uint8Array(this.coralTiles.length).fill(255),this.coralTiles.length===0)return;const e=new _i(new xe(1,1,1),new Ce({color:16777215}),this.coralTiles.length);e.castShadow=!1,e.receiveShadow=!1;for(let i=0;i<this.coralTiles.length;i+=1){const{tx:s,ty:r}=this.coralTiles[i];Qe.makeScale(1,Ki,1),Qe.setPosition(s+.5,wr,r+.5),e.setMatrixAt(i,Qe),e.setColorAt(i,Dh),this.tideAnimInstances.push({tx:s,ty:r,mesh:e,index:i,baseCenterY:wr,tileHeight:Ki,angle:0,inRing:!0,lastWave:Number.NaN})}e.instanceMatrix.needsUpdate=!0,this.coralMesh=e,this.root.add(e)}initPolarCache(t){var e,i;for(const s of this.tideAnimInstances){const r=s.tx+.5-t.centerX,o=s.ty+.5-t.centerY,a=Math.hypot(r,o);s.angle=Math.atan2(o,r);const l=((e=t.innerRadiusAtAngle)==null?void 0:e.call(t,s.angle))??t.innerRadius,c=((i=t.outerRadiusAtAngle)==null?void 0:i.call(t,s.angle))??t.outerRadius;s.inRing=a>=l-.5&&a<=c+.5,s.lastWave=Number.NaN}this.polarReady=!0}updateTideVisuals(t,e){var o;e&&!this.polarReady&&this.initPolarCache(e);const i=new Set;let s=!1,r=!1;for(let a=0;a<this.tideAnimInstances.length;a+=1){const l=this.tideAnimInstances[a],c=e&&l.inRing?Vc(l.angle,e):0;if(Math.abs(c-l.lastWave)<xT)continue;l.lastWave=c;const u=c/is,d=l.baseCenterY-u*Ra;if(Qe.makeScale(1,l.tileHeight,1),Qe.setPosition(l.tx+.5,d,l.ty+.5),l.mesh.setMatrixAt(l.index,Qe),i.add(l.mesh),this.waterCaps){if(c<vT)this.waterCaps.setMatrixAt(a,Lh);else{const h=l.baseCenterY-l.tileHeight/2-u*Ra,f=Math.max(_T,c-h);Qe.makeScale(1,f,1),Qe.setPosition(l.tx+.5,h+f/2,l.ty+.5),this.waterCaps.setMatrixAt(a,Qe)}s=!0}if(this.coralMesh&&l.mesh===this.coralMesh){const h=u>ST?1:0;this.coralSubmerged[l.index]!==h&&(this.coralSubmerged[l.index]=h,this.coralMesh.setColorAt(l.index,h?yT:Dh),r=!0)}}for(const a of i)a.instanceMatrix.needsUpdate=!0;s&&this.waterCaps&&(this.waterCaps.instanceMatrix.needsUpdate=!0),r&&((o=this.coralMesh)!=null&&o.instanceColor)&&(this.coralMesh.instanceColor.needsUpdate=!0),this.tideEdges.sync(e)}setWaterScroll(t,e){if(!this.water)return;const i=this.water.material;i.map=null}destroy(){this.water&&(this.water.geometry.dispose(),this.water.material.dispose(),this.root.remove(this.water),this.water=null);for(const t of this.landMeshes)this.root.remove(t);xa(this.landMeshes),this.landMeshes=[];for(const t of this.overlayMeshes)this.root.remove(t);xa(this.overlayMeshes),this.overlayMeshes=[],this.waterCaps&&(this.root.remove(this.waterCaps),this.waterCaps.geometry.dispose(),this.waterCaps.material.dispose(),this.waterCaps=null),this.coralMesh&&(this.root.remove(this.coralMesh),this.coralMesh.geometry.dispose(),this.coralMesh.material.dispose(),this.coralMesh=null),this.coralTiles=[],this.coralSubmerged=new Uint8Array(0),this.tideAnimInstances=[],this.polarReady=!1,this.tideEdges.sync(null),this.mapKey=null}}const AT=Math.PI*.75,RT=.55,wT=28,Oh=.15,Fh=1.45,CT=8,PT=160,kh=1.8,Bh=1.2,Hh=.004,IT=.08,LT=.6;class DT{constructor(t){B(this,"camera");B(this,"yaw",AT);B(this,"pitch",RT);B(this,"distance",wT);B(this,"focusTarget",new L);B(this,"focusCurrent",new L);B(this,"focusInitialized",!1);B(this,"scratch",new L);B(this,"middleMouseDragging",!1);B(this,"lastPointerX",0);B(this,"lastPointerY",0);B(this,"arrowLeft",!1);B(this,"arrowRight",!1);B(this,"arrowUp",!1);B(this,"arrowDown",!1);this.camera=new en(50,t,.1,500)}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setFocus(t,e){const i=Ke(t,e,LT);this.focusTarget.set(i.x,i.y,i.z),this.focusInitialized||(this.focusCurrent.copy(this.focusTarget),this.focusInitialized=!0)}update(t){const e=1-Math.exp(-10*t);this.focusCurrent.lerp(this.focusTarget,e),this.arrowLeft&&(this.yaw+=kh*t),this.arrowRight&&(this.yaw-=kh*t),this.arrowUp&&(this.pitch=Math.min(Fh,this.pitch+Bh*t)),this.arrowDown&&(this.pitch=Math.max(Oh,this.pitch-Bh*t));const i=Math.cos(this.pitch),s=Math.sin(this.pitch),r=Math.cos(this.yaw),o=Math.sin(this.yaw);this.scratch.set(this.distance*i*r,this.distance*s,this.distance*i*o),this.camera.position.copy(this.focusCurrent).add(this.scratch),this.camera.lookAt(this.focusCurrent)}handleKeyDown(t){switch(t){case"ArrowLeft":return this.arrowLeft=!0,!0;case"ArrowRight":return this.arrowRight=!0,!0;case"ArrowUp":return this.arrowUp=!0,!0;case"ArrowDown":return this.arrowDown=!0,!0;default:return!1}}handleKeyUp(t){switch(t){case"ArrowLeft":return this.arrowLeft=!1,!0;case"ArrowRight":return this.arrowRight=!1,!0;case"ArrowUp":return this.arrowUp=!1,!0;case"ArrowDown":return this.arrowDown=!1,!0;default:return!1}}onPointerDown(t){t.button===1&&(t.preventDefault(),this.middleMouseDragging=!0,this.lastPointerX=t.clientX,this.lastPointerY=t.clientY)}onPointerMove(t){if(!this.middleMouseDragging)return;const e=t.clientX-this.lastPointerX,i=t.clientY-this.lastPointerY;this.lastPointerX=t.clientX,this.lastPointerY=t.clientY,this.yaw+=e*Hh,this.pitch=Math.max(Oh,Math.min(Fh,this.pitch+i*Hh))}onPointerUp(t){t.button===1&&this.endMiddleMouseDrag()}onPointerCancel(){this.endMiddleMouseDrag()}endMiddleMouseDrag(){this.middleMouseDragging=!1}onWheel(t){const e=1+t*IT*.001;this.distance=Math.max(CT,Math.min(PT,this.distance*e))}getCompassRotationRadians(){return vh-this.yaw}getViewFacingRadians(){return this.yaw+Math.PI}snapNorth(){this.yaw=vh}}const Ms=.2,NT=1.4,Gh=.9,zh=51380,UT=.3,OT=.9,FT=.07;function kT(){const n=new se,t=new Ut(new cs(1,1),new mo({color:zh,transparent:!0,opacity:UT,side:Mn,depthWrite:!1}));t.rotation.x=-Math.PI/2;const e=.5,i=new Le;i.setAttribute("position",new _e([-e,0,-e,e,0,-e,e,0,e,-e,0,e],3));const s=new Sx(i,new hl({color:zh,transparent:!0,opacity:OT}));return n.add(t,s),n.visible=!1,n}function BT(n,t,e=1){const i=new Le;return i.setAttribute("position",new _e(n,3)),new dl(i,new hl({color:t,transparent:e<1,opacity:e}))}class HT{constructor(){B(this,"root",new se);B(this,"walkClick",new se);B(this,"tide",new se);B(this,"facing",new se);B(this,"headingArrow",new se);B(this,"intendedGhost",new se);B(this,"trueTile",kT());B(this,"trueTileEnabled",!1);B(this,"lines",[]);this.root.add(this.walkClick,this.tide,this.facing,this.headingArrow,this.intendedGhost,this.trueTile)}sync(t,e){this.clearDynamic(),this.drawWalkClick(t),this.drawTide(t),this.drawFacing(t,e),this.drawHeadingArrow(t),this.drawIntendedGhost(t),this.updateTrueTile(t,e)}setTrueTileVisible(t){this.trueTileEnabled=t,this.trueTile.visible=t}updateTrueTile(t,e){if(!this.trueTileEnabled)return;const i=Math.floor(t.simulationPosition.x),s=Math.floor(t.simulationPosition.y),r=Ze(e,i,s),o=r==="grass"||r==="sand"?pi(i+.5,s+.5,r):Wc(i+.5,s+.5,t.tide);this.trueTile.position.set(i+.5,o+FT,s+.5)}clearDynamic(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),t.removeFromParent();this.lines=[],this.walkClick.clear(),this.tide.clear(),this.facing.clear(),this.headingArrow.clear(),this.intendedGhost.clear()}addLine(t,e,i,s=1){const r=BT(e,i,s);t.add(r),this.lines.push(r)}drawWalkClick(t){if(t.boardMounted||t.walkTargetTx===null||t.walkTargetTy===null)return;const e=t.walkTargetTx,i=t.walkTargetTy,s=t.walkClickValid?16776960:16729156,r=.15;this.addLine(this.walkClick,[e+r,Ms,i+r,e+1-r,Ms,i+1-r],s),this.addLine(this.walkClick,[e+1-r,Ms,i+r,e+r,Ms,i+1-r],s)}drawTide(t){const e=t.tide;if(!e)return;const i=Ke(e.centerX,e.centerY),s=[e.phaseRadians,me(e.phaseRadians+e.sweepRadians)],r=.12,o=36;for(const a of s)for(const l of[e.innerRadius,e.outerRadius]){const c=[];for(let u=0;u<=o;u+=1){const d=a+r*(u/o-.5);c.push(i.x+Math.cos(d)*l,Ms*.5,i.z+Math.sin(d)*l)}this.addLine(this.tide,c,12118271,.55)}}drawFacing(t,e){const i=Ke(t.surfboard.position.x,t.surfboard.position.y);let s;if(!t.boardMounted){s=qe(t.surfboard.currentHeading)*Math.PI/180;const d=.35,h=i.y+.35;this.addLine(this.facing,[i.x,h,i.z,i.x+Math.cos(s)*d,h,i.z+Math.sin(s)*d],16777215);return}const r=Ze(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y));s=t.surfboard.speedState==="seated"&&r==="sand"?0:qe(t.surfboard.currentHeading)*Math.PI/180;const a=.55,l=i.x+Math.cos(s)*a,c=i.z+Math.sin(s)*a;this.addLine(this.facing,[i.x,i.y+.15,i.z,l,i.y+.15,c],16777215);const u=new Ut(new go(.01,.08,4,12),new mo({color:16777215}));u.position.set(l,i.y+.15,c),u.rotation.x=Math.PI/2,this.facing.add(u)}drawHeadingArrow(t){if(!t.boardMounted||t.hoverHeading===null||t.cursorWorldX===null||t.cursorWorldY===null)return;const e=Ke(t.surfboard.position.x,t.surfboard.position.y),i=qe(t.hoverHeading)*Math.PI/180,s=e.x+Math.cos(i)*Gh,r=e.z+Math.sin(i)*Gh,o=t.clickValid?16777215:16729156;this.addLine(this.headingArrow,[e.x,e.y+.18,e.z,s,e.y+.18,r],o,.5);const a=NT*.5,l=s+Math.cos(i)*a,c=r+Math.sin(i)*a;this.addLine(this.headingArrow,[s,e.y+.18,r,l,e.y+.18,c],o)}drawIntendedGhost(t){if(!t.boardMounted||t.surfboard.currentHeading===t.surfboard.intendedHeading)return;const e=Ke(t.surfboard.position.x,t.surfboard.position.y),i=qe(t.surfboard.intendedHeading)*Math.PI/180,s=.45;this.addLine(this.intendedGhost,[e.x,e.y+.16,e.z,e.x+Math.cos(i)*s,e.y+.16,e.z+Math.sin(i)*s],11193599,.6)}dispose(){this.clearDynamic();for(const t of this.trueTile.children)(t instanceof Ut||t instanceof dl)&&(t.geometry.dispose(),t.material.dispose());this.trueTile.clear()}}const GT=.06,zT=.2,Al="trick-hitbox",VT=1,mp=.55,WT=.12,gp=.14,XT=2.2,YT=.5;function qT(n,t){switch(n){case"tunnel":return t*(Gc+ao+km);case"wall_ride":return t*1.125;case"brain_coral":return t*.8;case"jump":return t*(mp+gp*.5);case"rail":default:return t*.57}}function KT(n,t){return qT(n,t)+GT+zT}function _p(n,t){return t?Wc(n.center.x,n.center.y,t)-Ir:0}function ZT(n,t,e,i){const s=_p(n,t);if(!i)return s;const r=qm(n,t,e);return s-r*KT(n.type,n.radius)}function $T(n){switch(n){case"rail":return{base:16033721,accent:16041282};case"tunnel":return{base:10185727,accent:13219071};case"jump":return{base:16747586,accent:16769126};case"brain_coral":return{base:16740020,accent:16752338};case"wall_ride":return{base:7260415,accent:12117759};default:return{base:16033721,accent:16041282}}}function pn(n,t){return new Ce({color:n,transparent:t<1,opacity:t,roughness:.7,metalness:.1,flatShading:!0})}function JT(n,t,e,i){const s=n.getObjectByName(Al);{s&&(s.visible=!1);return}}function Vh(n,t,e){const i=new se,s=n*.24,r=new Ut(new xe(n*2.3,n*.08,n*.12),pn(t.accent,e));r.position.y=s;for(const o of[-1,1]){const a=new Ut(new xe(n*.14,s,n*.14),pn(t.base,e));a.position.set(o*n*.85,s/2,0);const l=new Ut(new xe(n*.3,n*.06,n*.3),pn(t.base,e));l.position.set(o*n*.85,n*.03,0),i.add(a,l)}return i.add(r),i}function jT(n,t,e){const i=new se,s=new Ut(new go(n*Gc,n*ao,6,12,Math.PI),pn(t.accent,e));return s.scale.set(1,1,Sd),s.position.y=n*Md,i.add(s),i.rotation.y=Math.PI/2,i}function Wh(n,t,e,i){const s=n*VT,r=n*mp,o=n*WT,a=n*gp,l=n*XT,c=r+o,u=Math.atan2(c,s),d=s*YT,h=s+d,f=a/2*Math.cos(u)+h/2*Math.sin(u),g=r-f,M=-t*(a/2*Math.sin(u)-h/2*Math.cos(u)),p=new Ut(new xe(l,a,h),pn(e.base,i));return p.position.set(0,g,M),p.rotation.x=t*u,p}function QT(n,t,e){const i=new se;return i.add(Wh(n,-1,t,e),Wh(n,1,t,e)),i.rotation.y=Math.PI/2,i}function tA(n,t,e){const i=new se,s=new Ut(new Is(n*.55,1),pn(t.base,e));s.position.y=n*.32,s.scale.y=.8;const r=new Ut(new Is(n*.3,0),pn(t.accent,e));r.position.set(n*.25,n*.48,n*.15);const o=new Ut(new Is(n*.2,0),pn(t.accent,e));return o.position.set(-n*.28,n*.42,-n*.18),i.add(s,r,o),i}function eA(n,t,e){const i=new se,s=new Ut(new xe(n*.24,n*1.15,n*1.35),pn(t.base,e));s.position.set(0,n*.48,0);const r=new Ut(new xe(n*.34,n*.14,n*1.45),pn(t.accent,e));return r.position.y=n*1.02,i.add(s,r),i.rotation.y=Math.PI/2,i}function nA(n,t,e,i){switch(n){case"rail":return Vh(t,e,i);case"tunnel":return jT(t,e,i);case"jump":return QT(t,e,i);case"brain_coral":return tA(t,e,i);case"wall_ride":return eA(t,e,i);default:return Vh(t,e,i)}}function iA(n,t,e,i){const s=pn(16774502,i*.9),r=t==="jump"?[-1,1]:[1];for(const o of r){const a=new se;a.rotation.y=Math.PI/2;for(const l of[-.72,-.52,-.32]){const c=new Ut(new zs(e*.15,e*.25,3),s);c.rotation.x=Math.PI,c.rotation.z=Math.PI,c.position.set(0,e*.08,o*(e*l+e*.22)),a.add(c)}n.add(a)}}function sA(n){const t=n.children.filter(e=>e.name!==Al);for(const e of t)n.remove(e),e.traverse(i=>{if(i instanceof Ut){i.geometry.dispose();const s=i.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}})}function rA(n,t,e){const i=!n.tricked&&!e&&t.trickPrepare!==null&&t.trickPrepare.slot===n.prepareSlot;return`${n.id}:${n.type}:${n.radius}:${i}`}function oA(n,t){n.traverse(e=>{if(e instanceof Ut&&e.name!==Al){const i=e.material;i.opacity=t,i.transparent=t<1}})}class aA{constructor(){B(this,"root",new se);B(this,"pool",[]);B(this,"meshKeys",[])}sync(t,e=0){const i=t.tide,s=t.trickZones;for(;this.pool.length<s.length;){const r=new se;this.pool.push(r),this.meshKeys.push(""),this.root.add(r)}for(let r=0;r<this.pool.length;r+=1){const o=this.pool[r];if(r>=s.length){o.visible=!1;continue}const a=s[r];o.visible=!0;const l=i?ii(a,i):!1,u=bd(a,i,e),d=rA(a,t,l);if(this.meshKeys[r]!==d){sA(o);const g=$T(a.type),M=nA(a.type,a.radius,g,u);o.add(M),!a.tricked&&!l&&t.trickPrepare!==null&&t.trickPrepare.slot===a.prepareSlot&&iA(o,a.type,a.radius,u),this.meshKeys[r]=d}else oA(o,u);const h=Ke(a.center.x,a.center.y),f=ZT(a,i,e,l);_p(a,i),JT(o,a.type,a.radius),o.position.set(h.x,f,h.z),o.rotation.y=yl(a.rotationRadians+(a.rotationJitterRadians??0))}}dispose(){for(const t of this.pool)t.traverse(e=>{e instanceof Ut&&(e.geometry.dispose(),e.material.dispose())});this.pool=[],this.root.clear()}}const cA=10189884,lA=8018984,uA=7031338,hA=12096616,dA=[{angle:Math.PI/2-.35,distanceShare:.55,footprint:5,facing:Math.PI/2},{angle:Math.PI/2+.55,distanceShare:.6,footprint:3.6,facing:Math.PI/2+.6},{angle:-2.7,distanceShare:.58,footprint:4.2,facing:-2.7},{angle:-.2,distanceShare:.5,footprint:3.2,facing:-.2}];function Cr(n){return new Ce({color:n,roughness:.9,flatShading:!0})}function fA(n){const t=new se,e=n*.05,i=n*.24,s=n*.38,r=n*.5,o=n*.36,a=new Ut(new xe(r*2.2,e,o*2.3),Cr(hA));a.position.y=e/2,t.add(a);for(const d of[-1,1])for(const h of[-1,1]){const f=new Ut(new yi(n*.035,n*.045,i,5),Cr(uA));f.position.set(d*r*.85,e+i/2,h*o*.85),t.add(f)}const l=e+i,c=new Ut(new zs(n*.78,s,4),Cr(cA));c.scale.set(1.25,1,.95),c.rotation.y=Math.PI/4,c.position.y=l+s/2,t.add(c);const u=new Ut(new zs(n*.16,s*.28,4),Cr(lA));return u.rotation.y=Math.PI/4,u.position.y=l+s+s*.1,t.add(u),t}function pA(){const n=new se;for(const t of dA){const e=Oc(t.angle)*t.distanceShare,i=sn+Math.cos(t.angle)*e,s=rn+Math.sin(t.angle)*e,r=pi(i,s,"grass"),o=fA(t.footprint),a=Ke(i,s);o.position.set(a.x,r,a.z),o.rotation.y=-t.facing+Math.PI/2,n.add(o)}return n}function mA(n){n.traverse(t=>{t instanceof Ut&&(t.geometry.dispose(),t.material.dispose())})}const va=new L,Sa=new L,Ma=new pt,Wi=new L;class gA{constructor(){B(this,"renderer",null);B(this,"scene",null);B(this,"orbitCamera",null);B(this,"raycaster",new pv);B(this,"mapMeshes",null);B(this,"entities",null);B(this,"tricks",null);B(this,"overlays",null);B(this,"village",null);B(this,"container",null);B(this,"lastFrameMs",0);B(this,"unbindPointer",null);B(this,"unbindCamera",null);B(this,"xpContainer",null)}async init(t,e){this.container=t,this.renderer=new ub({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setSize(qi,xi,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(He.deepWater),t.appendChild(this.renderer.domElement),this.scene=new ux;const i=new hv(16777215,.55),s=new uv(16774368,.85);s.position.set(40,80,30),this.scene.add(i,s),this.orbitCamera=new DT(qi/xi),this.mapMeshes=new TT,this.entities=new dT,this.tricks=new aA,this.overlays=new HT,this.village=pA(),this.scene.add(this.mapMeshes.root,this.tricks.root,this.entities.root,this.overlays.root,this.village),this.xpContainer=document.createElement("div"),this.xpContainer.className="xp-drop-layer",this.xpContainer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",t.style.position="relative",t.appendChild(this.xpContainer),this.bindCameraEvents(this.renderer.domElement)}getCanvas(){if(!this.renderer)throw new Error("Renderer not initialized");return this.renderer.domElement}bindPointerInput(t,e){var i;return(i=this.unbindPointer)==null||i.call(this),this.unbindPointer=Pb(this.getCanvas(),t,e,(s,r)=>this.screenToWorld(s,r)),this.unbindPointer}handleKeyDown(t){var e;return((e=this.orbitCamera)==null?void 0:e.handleKeyDown(t.code))??!1}handleKeyUp(t){var e;return((e=this.orbitCamera)==null?void 0:e.handleKeyUp(t.code))??!1}resize(t){!this.renderer||!this.orbitCamera||(this.renderer.setSize(t.width,t.height,!1),this.orbitCamera.setAspect(t.width/t.height))}worldToScreen(t,e){if(!this.orbitCamera)return{x:0,y:0};const i=Ke(t,e,.5);return Wi.set(i.x,i.y,i.z),Wi.project(this.orbitCamera.camera),{x:(Wi.x+1)/2*qi,y:(-Wi.y+1)/2*xi}}screenToWorld(t,e){if(!this.orbitCamera)return{x:0,y:0};Ma.x=t/qi*2-1,Ma.y=-(e/xi)*2+1,this.raycaster.setFromCamera(Ma,this.orbitCamera.camera);const i=this.raycaster.ray;va.copy(i.origin),Sa.copy(i.direction);const s=Sa.y;if(Math.abs(s)<1e-6)return{x:NaN,y:NaN};const r=-va.y/s;return r<0?{x:NaN,y:NaN}:(Wi.copy(va).addScaledVector(Sa,r),$b(Wi))}render(t,e,i=performance.now(),s=0){if(!this.renderer||!this.scene||!this.orbitCamera||!this.mapMeshes||!this.entities||!this.tricks||!this.overlays)return;const r=this.lastFrameMs>0?i-this.lastFrameMs:16;this.lastFrameMs=i;const o=Math.min(.1,r/1e3);this.mapMeshes.build(e,t.tide),this.mapMeshes.updateTideVisuals(e,t.tide),this.orbitCamera.setFocus(t.surfboard.position.x,t.surfboard.position.y),this.orbitCamera.update(o),this.tricks.sync(t,s),this.entities.sync(t,e,i),this.overlays.sync(t,e),this.renderer.render(this.scene,this.orbitCamera.camera)}getCompassRotationRadians(){var t;return((t=this.orbitCamera)==null?void 0:t.getCompassRotationRadians())??0}getViewFacingRadians(){var t;return((t=this.orbitCamera)==null?void 0:t.getViewFacingRadians())??0}snapCameraNorth(){var t;(t=this.orbitCamera)==null||t.snapNorth()}setTrueTileVisible(t){var e;(e=this.overlays)==null||e.setTrueTileVisible(t)}setVillageVisible(t){this.village&&(this.village.visible=t)}showXpDrop(t,e,i){if(!this.xpContainer)return;const s=this.worldToScreen(e,i),r=document.createElement("div");r.textContent=t,r.style.cssText="position:absolute;color:#7ecf8f;font:12px monospace;white-space:nowrap;",r.style.left=`${s.x}px`,r.style.top=`${s.y-10}px`,this.xpContainer.appendChild(r);const o=()=>{const a=parseFloat(r.style.top);if(r.style.top=`${a-.5}px`,r.style.opacity=`${parseFloat(r.style.opacity||"1")-.02}`,parseFloat(r.style.opacity||"1")<=0){r.remove();return}requestAnimationFrame(o)};requestAnimationFrame(o)}syncMapAfterTick(t,e){var i;(i=this.mapMeshes)==null||i.updateTideVisuals(e,t.tide)}destroy(){var t,e,i,s,r,o,a,l,c;(t=this.unbindPointer)==null||t.call(this),(e=this.unbindCamera)==null||e.call(this),(i=this.entities)==null||i.dispose(),(s=this.tricks)==null||s.dispose(),(r=this.overlays)==null||r.dispose(),this.village&&(mA(this.village),this.village=null),(o=this.mapMeshes)==null||o.destroy(),(a=this.renderer)==null||a.dispose(),(l=this.renderer)==null||l.domElement.remove(),(c=this.xpContainer)==null||c.remove(),this.renderer=null,this.scene=null,this.container}bindCameraEvents(t){const e=this.orbitCamera;if(!e)return;const i=c=>{e.onPointerDown(c),c.button===1&&t.setPointerCapture(c.pointerId)},s=c=>e.onPointerMove(c),r=c=>{c.button===1&&t.hasPointerCapture(c.pointerId)&&t.releasePointerCapture(c.pointerId),e.onPointerUp(c)},o=c=>{t.hasPointerCapture(c.pointerId)&&t.releasePointerCapture(c.pointerId),e.onPointerCancel()},a=c=>{c.preventDefault(),e.onWheel(c.deltaY)},l=c=>c.preventDefault();t.addEventListener("pointerdown",i),t.addEventListener("pointermove",s),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",o),t.addEventListener("wheel",a,{passive:!1}),t.addEventListener("contextmenu",l),this.unbindCamera=()=>{t.removeEventListener("pointerdown",i),t.removeEventListener("pointermove",s),t.removeEventListener("pointerup",r),t.removeEventListener("pointercancel",o),t.removeEventListener("wheel",a),t.removeEventListener("contextmenu",l)}}}function _A(n,t,e){return{x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e}}function Xh(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function xp(n){return Math.min(1,Math.max(0,n))}function Ys(n){return n?n.ticksElapsed/n.ticksTotal:0}function ya(n,t){const e={...n.position};return{segmentStart:e,segmentEnd:e,headingStart:n.currentHeading,headingEnd:n.currentHeading,intendedHeadingStart:n.intendedHeading,intendedHeadingEnd:n.intendedHeading,trickProgressStart:Ys(t),trickProgressEnd:Ys(t)}}function Ea(n,t,e,i,s){n.segmentStart={...t.position},n.segmentEnd={...e.position},n.headingStart=t.currentHeading,n.headingEnd=e.currentHeading,n.intendedHeadingStart=t.intendedHeading,n.intendedHeadingEnd=e.intendedHeading,n.trickProgressStart=Ys(i),n.trickProgressEnd=Ys(s)}function Yh(n,t,e){if(e)return;const i=t.position,s=Xh(n.segmentStart,n.segmentEnd);if(Xh(i,n.segmentEnd)>Math.max(.2,s*.5+.05)){const o={...i};n.segmentStart=o,n.segmentEnd=o,n.headingStart=t.currentHeading,n.headingEnd=t.currentHeading,n.intendedHeadingStart=t.intendedHeading,n.intendedHeadingEnd=t.intendedHeading,n.trickProgressStart=0,n.trickProgressEnd=0}}function qh(n,t,e,i){const s=xp(i),r=e?n.trickProgressStart+(n.trickProgressEnd-n.trickProgressStart)*s:0,o=e!==null?Dd(e,r):_A(n.segmentStart,n.segmentEnd,s),a=e?{...e,progress:r}:null;return{surfboard:{...t,position:o,currentHeading:ba(n.headingStart,n.headingEnd,s),intendedHeading:ba(n.intendedHeadingStart,n.intendedHeadingEnd,s)},trickAnimation:a}}class xA{constructor(){B(this,"player",ya({position:{x:0,y:0},currentHeading:0,intendedHeading:0},null));B(this,"demoSurfers",new Map)}reset(t){Ea(this.player,t.surfboard,t.surfboard,t.trickAnimation,t.trickAnimation),this.demoSurfers.clear();for(const e of t.demoSurfers)this.demoSurfers.set(e.id,ya(e.surfboard,e.trickAnimation))}onSimulationTick(t,e){Ea(this.player,t.surfboard,e.surfboard,t.trickAnimation,e.trickAnimation);const i=new Set;for(const s of e.demoSurfers){i.add(s.id);let r=this.demoSurfers.get(s.id);r||(r=ya(s.surfboard,s.trickAnimation),this.demoSurfers.set(s.id,r));const o=t.demoSurfers.find(a=>a.id===s.id);Ea(r,(o==null?void 0:o.surfboard)??s.surfboard,s.surfboard,(o==null?void 0:o.trickAnimation)??null,s.trickAnimation)}for(const s of this.demoSurfers.keys())i.has(s)||this.demoSurfers.delete(s)}ensureSynced(t){Yh(this.player,t.surfboard,t.trickAnimation);for(const e of t.demoSurfers){const i=this.demoSurfers.get(e.id);i&&Yh(i,e.surfboard,e.trickAnimation)}}buildDisplaySnapshot(t,e,i){const s=qh(this.player,t.surfboard,t.trickAnimation,i);let r=t.tide;if(t.tide&&e!==null){const a=xp(i),l=e+t.tide.advancePerTick*a;r={...t.tide,phaseRadians:l}}const o=t.demoSurfers.map(a=>{const l=this.demoSurfers.get(a.id);if(!l)return{...a,trickAnimation:vA(a.trickAnimation)};const c=qh(l,a.surfboard,a.trickAnimation,i);return{...a,surfboard:c.surfboard,trickAnimation:c.trickAnimation}});return{...t,surfboard:s.surfboard,trickAnimation:s.trickAnimation,tide:r,demoSurfers:o,simulationPosition:{...t.surfboard.position}}}}function vA(n){return n?{...n,progress:Ys(n)}:null}class SA{constructor(t,e,i){B(this,"root");B(this,"tuning");this.root=t,this.tuning={...e},this.root.classList.add("hidden"),this.root.innerHTML=`
      <div><strong>Debug</strong> [F3] hide, [1/2/3] tune turn/paddle/ride</div>
      <div id="debug-lines"></div>
    `,window.addEventListener("keydown",s=>{if(s.key==="F3"){s.preventDefault(),this.root.classList.toggle("hidden");return}this.root.classList.contains("hidden")||(s.key==="1"&&(this.tuning.turnRate=Math.max(5,this.tuning.turnRate-2.5),i(this.tuning)),s.key==="2"&&(this.tuning.speedPaddle=Math.max(1,this.tuning.speedPaddle-1),i(this.tuning)),s.key==="3"&&(this.tuning.speedRide=Math.max(1,this.tuning.speedRide-1),i(this.tuning)),s.key==="!"&&(this.tuning.turnRate+=2.5,i(this.tuning)),s.key==="@"&&(this.tuning.speedPaddle+=1,i(this.tuning)),s.key==="#"&&(this.tuning.speedRide+=1,i(this.tuning)))})}update(t){if(this.root.classList.contains("hidden"))return;const e=this.root.querySelector("#debug-lines");if(!e)return;const{surfboard:i}=t;e.innerHTML=`
      pos: ${i.position.x.toFixed(2)}, ${i.position.y.toFixed(2)}<br/>
      heading: ${i.currentHeading} → ${i.intendedHeading}<br/>
      speed: ${i.speedState} | rotating: ${i.isRotating}<br/>
      turn: ${this.tuning.turnRate}° paddle: ${Gl(this.tuning.speedPaddle)} ride: ${Gl(this.tuning.speedRide)} tiles/tick<br/>
      tide: ${t.tide?`${(t.tide.phaseRadians*180/Math.PI).toFixed(0)}° sweep`:"off"}<br/>
      tick: ${t.tickCount}
    `}}const MA="/osrs-surfing-sim/assets/osrs",yA="/osrs-surfing-sim/assets/surf";function ce(n){return`${MA}/${n}`}function ui(n){return`${yA}/${n}`}const pe={fixed:{minimapFrame:ce("fixed_mode/minimap_and_compass_frame.png"),compassDial:ce("other/compass.png")},chatbox:{stones:ce("chatbox/buttons_background_stones.png")},tabs:{combat:ce("tab/combat.png"),stats:ce("tab/stats.png"),quests:ce("tab/quests.png"),inventory:ce("tab/inventory.png"),equipment:ce("tab/equipment.png"),prayer:ce("tab/prayer.png"),magic:ce("tab/magic.png"),friends:ce("tab/friends.png"),ignores:ce("tab/ignores.png"),clanChannel:ce("tab/clan_channel.png"),accountManagement:ce("tab/account_management.png"),logout:ce("tab/logout.png"),options:ce("tab/options.png"),emotes:ce("tab/emotes.png")},surf:{boardUpright:ui("board_upright.svg"),boardPlanted:ui("board_planted.svg"),ride:ui("board_ride.svg"),reverse:ui("board_reverse.svg"),stanceGrind:ui("stance_grind.svg"),stanceTuck:ui("stance_tuck.svg"),stanceAir:ui("stance_air.svg")},sailing:{steering:ce("sailing/steering.png"),notSteering:ce("sailing/not_steering.png"),tabStats:ce("sailing/tab_stats.png"),tabFacilities:ce("sailing/tab_facilities.png"),tabCrew:ce("sailing/tab_crew.png")},skill:{agility:ce("skill/agility.png"),sailing:ce("skill/sailing.png")},chevron:{up:ce("chevron/yellow_up_single.png"),upDouble:ce("chevron/yellow_up_double.png"),down:ce("chevron/yellow_down_single.png"),downStop:ce("chevron/yellow_down_stop.png")}},EA=50;class bA{constructor(t){B(this,"root");B(this,"messagesEl");B(this,"lines",[]);this.root=t,this.root.className="osrs-chatbox";const e=pe;this.root.innerHTML=`
      <div class="osrs-chatbox-messages" id="chat-messages"></div>
      <div class="osrs-chatbox-stones">
        <img src="${e.chatbox.stones}" alt="" class="osrs-chatbox-stones-bg" />
      </div>
    `,this.messagesEl=this.root.querySelector("#chat-messages"),this.push("Welcome to Ura Ura Swell.","game")}push(t,e="game"){const i=e==="xp"?'<span class="chat-xp">':e==="system"?'<span class="chat-sys">':"<span>";this.lines.push(`${i}${t}</span>`),this.lines.length>EA&&this.lines.shift(),this.messagesEl.innerHTML=this.lines.join("<br/>"),this.messagesEl.scrollTop=this.messagesEl.scrollHeight}}function eo(n){return n instanceof HTMLButtonElement&&n.disabled}function vp(n,t){const e=n.getBoundingClientRect();return t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom}function jn(n,t){let e=null;const i=()=>{e=null},s=a=>{a.button!==0||eo(n)||(e=a.pointerId,n.setPointerCapture(a.pointerId))},r=a=>{a.button!==0||e!==a.pointerId||(n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),i(),!(eo(n)||!vp(n,a))&&(a.preventDefault(),t()))},o=a=>{e===a.pointerId&&(n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),i())};return n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",o),()=>{n.removeEventListener("pointerdown",s),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",o)}}function TA(n,t,e){let i=null,s=null;const r=()=>{i=null,s=null},o=c=>{if(c.button!==0)return;const u=c.target.closest(t);if(!(u instanceof HTMLElement)||eo(u))return;const d=u.getAttribute("data-unlock");d&&(i=c.pointerId,s=d,n.setPointerCapture(c.pointerId))},a=c=>{if(c.button!==0||i!==c.pointerId||s===null)return;n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId);const u=s;r();const d=n.querySelector(`[data-unlock="${u}"]`);d instanceof HTMLElement&&(eo(d)||!vp(d,c)||(c.preventDefault(),e(d)))},l=c=>{i===c.pointerId&&(n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId),r())};return n.addEventListener("pointerdown",o),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",l),()=>{n.removeEventListener("pointerdown",o),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",l)}}const AA=.35,RA=.04;class wA{constructor(t,e,i,s){B(this,"canvas");B(this,"ctx");B(this,"compassNeedle");B(this,"baseCanvas",null);B(this,"tideCanvas",null);B(this,"tideCtx",null);B(this,"lastTidePhase",Number.NaN);B(this,"baseMap",null);B(this,"coralTiles",[]);i.src=pe.fixed.minimapFrame,i.alt="",i.decoding="async",this.canvas=document.createElement("canvas"),this.canvas.width=Xi,this.canvas.height=Xi,this.canvas.className="osrs-minimap-canvas",t.appendChild(this.canvas);const r=this.canvas.getContext("2d");if(!r)throw new Error("Minimap canvas unsupported");this.ctx=r;const o=e.querySelector("img");if(!o)throw new Error("Minimap compass needle missing");this.compassNeedle=o,this.compassNeedle.src=pe.fixed.compassDial,this.compassNeedle.alt="Compass",jn(e,s)}setCompassRotation(t){const e=t*180/Math.PI;this.compassNeedle.style.transform=`rotate(${e}deg)`}ensureBaseCanvas(t){if(this.baseMap===t&&this.baseCanvas)return;const e=Xi,i=document.createElement("canvas");i.width=e,i.height=e;const s=i.getContext("2d");if(!s)throw new Error("Minimap base canvas unsupported");const r=e/t.widthTiles,o=e/t.heightTiles;this.coralTiles=[];for(let l=0;l<t.heightTiles;l+=1)for(let c=0;c<t.widthTiles;c+=1){const u=t.tiles[l][c];let d=pp(u,c+.5,l+.5,null);u==="coral_rideable"&&(this.coralTiles.push({tx:c,ty:l,angle:Number.NaN}),d="reef_exposed");const h=to(d);s.fillStyle=`#${h.toString(16).padStart(6,"0")}`,s.fillRect(c*r,l*o,Math.ceil(r),Math.ceil(o))}this.baseCanvas=i;const a=document.createElement("canvas");a.width=e,a.height=e,this.tideCanvas=a,this.tideCtx=a.getContext("2d"),this.lastTidePhase=Number.NaN,this.baseMap=t}repaintTideOverlay(t,e){const i=this.tideCtx;if(!i||Math.abs(t.phaseRadians-this.lastTidePhase)<RA)return;this.lastTidePhase=t.phaseRadians;const r=Xi,o=r/e.widthTiles,a=r/e.heightTiles;i.clearRect(0,0,r,r);const l=to("reef_submerged");i.fillStyle=`#${l.toString(16).padStart(6,"0")}`;for(const c of this.coralTiles)Number.isNaN(c.angle)&&(c.angle=Math.atan2(c.ty+.5-t.centerY,c.tx+.5-t.centerX)),Vc(c.angle,t)/is>AA&&i.fillRect(c.tx*o,c.ty*a,Math.ceil(o),Math.ceil(a))}update(t,e){this.ensureBaseCanvas(e),t.tide&&this.repaintTideOverlay(t.tide,e);const i=this.ctx,s=Xi,r=s/2,o=s/e.widthTiles,a=s/e.heightTiles;i.clearRect(0,0,s,s),i.save(),i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.clip(),this.baseCanvas&&i.drawImage(this.baseCanvas,0,0),this.tideCanvas&&i.drawImage(this.tideCanvas,0,0);const l=t.surfboard.position.x*o,c=t.surfboard.position.y*a;i.fillStyle="#ffff00",i.beginPath(),i.arc(l,c,3,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1,i.stroke(),i.restore()}}const CA={Bronze:"linear-gradient(180deg, #e8a55c 0%, #8b5a2b 100%)",Iron:"linear-gradient(180deg, #d8d8d8 0%, #6a6a6a 100%)",Steel:"linear-gradient(180deg, #c8d4e0 0%, #6a7a8a 100%)",Mithril:"linear-gradient(180deg, #7eb8e8 0%, #2a5080 100%)",Adamant:"linear-gradient(180deg, #5ecf8a 0%, #1a5c38 100%)",Rune:"linear-gradient(180deg, #7ec8f0 0%, #2868a8 100%)",Dragon:"linear-gradient(180deg, #f0a050 0%, #8b2020 100%)"},Kh="linear-gradient(180deg, #06c206 0%, #048004 100%)",Zh="linear-gradient(180deg, #7ee8f0 0%, #1a7a8a 100%)",PA=[{slot:0,icon:pe.surf.stanceGrind,features:"Rail · Coral",title:"Grind stance (1) — slide rails and brain coral"},{slot:1,icon:pe.surf.stanceTuck,features:"Tunnel · Wall",title:"Tuck stance (2) — duck tunnels and wall rides"},{slot:2,icon:pe.surf.stanceAir,features:"Jump",title:"Air stance (3) — launch off jumps"}];function $h(n,t){const e=pe;switch(t){case"toggle-full":{const i=n!=="seated";return{icon:i?e.surf.boardPlanted:e.surf.ride,title:i?"Stop":"Full speed ahead",disabled:!1,targetState:i?"seated":"riding"}}case"speed-down":return n==="riding"?{icon:e.chevron.down,title:"Slow down",disabled:!1,targetState:"paddling"}:n==="paddling"?{icon:e.chevron.downStop,title:"Stop",disabled:!1,targetState:"seated"}:n==="seated"?{icon:e.surf.reverse,title:"Reverse",disabled:!1,targetState:"reversing"}:{icon:e.surf.reverse,title:"Reverse",disabled:!0,targetState:null};case"speed-up":return n==="reversing"?{icon:e.surf.boardPlanted,title:"Stop",disabled:!1,targetState:"seated"}:n==="seated"?{icon:e.chevron.up,title:"Increase speed",disabled:!1,targetState:"paddling"}:n==="paddling"?{icon:e.chevron.upDouble,title:"Full speed",disabled:!1,targetState:"riding"}:{icon:e.chevron.up,title:"Full speed",disabled:!0,targetState:null}}}class IA{constructor(t,e){B(this,"root");B(this,"callbacks");B(this,"activeTab","board");B(this,"speedState","seated");this.root=t,this.callbacks=e,this.root.className="osrs-control-panel osrs-sailing-panel",this.root.innerHTML=this.renderShell(),this.bindEvents()}update(t){this.speedState=t.surfboard.speedState;const e=this.root.querySelector("#steering-icon"),i=this.root.querySelector("#steering-label"),s=t.surfboard.speedState!=="seated";e&&(e.src=s?pe.sailing.steering:pe.sailing.notSteering),i&&(i.textContent=s?"Steering":"Drifting"),this.updateNavButtons(t.surfboard.speedState);const r=this.root.querySelector("#board-tier-title");r&&(r.textContent=h_(t.progression.unlocked));const o=this.root.querySelector("#combo-bar-fill"),a=this.root.querySelector("#combo-label");if(o&&a){const v=t.progression.session.combo,E=K0(v);o.style.width=v>0?`${E/10*100}%`:"100%",o.style.background=v>0?CA[Ro(v)]:Kh,a.textContent=v>0?`${v}x · ${Ro(v)} combo`:"Ready"}const l=this.root.querySelector("#surf-boost-bar"),c=this.root.querySelector("#surf-boost-bar-fill"),u=this.root.querySelector("#surf-boost-label"),d=t.trickSpeedBoostTicksRemaining;if(l&&c&&u){const v=d>0;l.classList.toggle("hidden",!v),v&&(c.style.width=`${d/ud*100}%`,c.style.background=Zh,u.textContent=`Surf boost · ${d}`)}const h=t.progression.session;this.setText("#stats-combo",h.combo>0?`${h.combo} (${Ro(h.combo)})`:"0"),this.setText("#stats-max-combo",String(h.maxCombo)),this.setText("#stats-tricks",String(h.tricksLanded)),this.setText("#stats-tokens",String(t.progression.coralTokens)),this.syncTokenDisplay(t.progression.coralTokens);const f=t.boardMounted&&t.surfboard.speedState==="riding"&&t.trickAnimation===null;this.root.querySelectorAll("[data-prepare-slot]").forEach(v=>{var T;const E=Number(v.dataset.prepareSlot),y=t.trickPrepare!==null&&t.trickPrepare.slot===E&&t.trickPrepare.ticksSincePrepare>0;v.disabled=!f,v.classList.toggle("primed",y);const w=v.querySelector(".osrs-stance-ticks");w&&(w.textContent=((T=t.trickPrepare)==null?void 0:T.slot)===E?String(t.trickPrepare.ticksSincePrepare):"")});const g=this.root.querySelector("#stance-footnote");g&&(g.textContent=f?`Prime ${Fc}–${oo} ticks before the feature`:"Reach full speed to prime stances");const M=this.root.querySelector("#board-guidance");M&&M.classList.toggle("hidden",t.boardMounted);const p=this.root.querySelector("#board-mounted-controls");p&&p.classList.toggle("hidden",!t.boardMounted);const m=this.root.querySelector("#dismount-btn");m&&(m.disabled=!t.canDismountBoard)}setVisible(t){this.root.classList.toggle("hidden",!t)}renderShell(){const t=pe;return`
      <div class="osrs-panel-chrome">
        <div class="osrs-panel-header">
          <img src="${t.surf.boardUpright}" alt="" class="osrs-panel-icon" width="18" height="18" />
          <span class="osrs-panel-title" id="board-tier-title">Camphor Board</span>
        </div>
        <div class="osrs-status-bar">
          <div class="osrs-status-bar-fill" id="combo-bar-fill" style="width: 100%; background: ${Kh}"></div>
          <span class="osrs-status-bar-label" id="combo-label">Ready</span>
        </div>
        <div class="osrs-status-bar osrs-surf-boost-bar hidden" id="surf-boost-bar">
          <div class="osrs-status-bar-fill osrs-surf-boost-bar-fill" id="surf-boost-bar-fill" style="width: 100%; background: ${Zh}"></div>
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
              ${PA.map(e=>this.renderStanceButton(e)).join("")}
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
        <span class="osrs-stance-name">${hd(t.slot)}</span>
        <span class="osrs-stance-features">${t.features}</span>
      </button>
    `}bindEvents(){var i;for(const s of this.root.querySelectorAll(".osrs-stone-tab"))jn(s,()=>{const r=s.dataset.tab;this.activeTab=r,this.root.querySelectorAll(".osrs-stone-tab").forEach(o=>o.classList.remove("active")),s.classList.add("active"),this.root.querySelectorAll(".osrs-tab-body").forEach(o=>{o.classList.toggle("active",o.dataset.panel===r)})});this.root.querySelectorAll("[data-nav-btn]").forEach(s=>{jn(s,()=>{if(s.disabled)return;const r=s.dataset.navBtn,o=$h(this.speedState,r);o.targetState&&this.callbacks.onSpeedState(o.targetState)})}),this.root.querySelectorAll("[data-prepare-slot]").forEach(s=>{jn(s,()=>{if(s.disabled)return;const r=Number(s.dataset.prepareSlot);this.callbacks.onPrepareTrick(r)})});const t=this.root.querySelector("#shop-btn");t instanceof HTMLElement&&jn(t,()=>{this.callbacks.onOpenShop()});const e=this.root.querySelector("#dismount-btn");e instanceof HTMLElement&&jn(e,()=>{e instanceof HTMLButtonElement&&e.disabled||this.callbacks.onDismountBoard()}),(i=this.root.querySelector("#true-tile-toggle"))==null||i.addEventListener("change",s=>{this.callbacks.onToggleTrueTile(s.target.checked)})}updateNavButtons(t){this.root.querySelectorAll("[data-nav-btn]").forEach(e=>{const i=e.dataset.navBtn,s=$h(t,i);e.disabled=s.disabled,e.title=s.title;const r=e.querySelector("img");r&&(r.src=s.icon,r.alt=s.title),e.classList.toggle("active",i==="toggle-full"&&t==="riding")})}setText(t,e){const i=this.root.querySelector(t);i&&(i.textContent=e)}syncTokenDisplay(t){const e=this.root.querySelector("#coral-tokens-rewards");e&&(e.textContent=String(t))}}class LA{constructor(t,e){B(this,"root");B(this,"body");B(this,"onPurchase");B(this,"visible",!1);this.root=t,this.onPurchase=e,this.root.className="osrs-shop-panel hidden",this.root.innerHTML=`
      <div class="osrs-shop-header osrs-panel-header">
        <img src="${pe.sailing.tabCrew}" alt="" width="20" height="20" />
        <span class="osrs-panel-title">Coral Rewards</span>
        <button type="button" class="osrs-shop-close" aria-label="Close reward shop">×</button>
      </div>
      <div class="osrs-shop-body"></div>
    `;const i=this.root.querySelector(".osrs-shop-body");if(!(i instanceof HTMLElement))throw new Error("Shop panel body element missing");this.body=i;const s=this.root.querySelector(".osrs-shop-close");s instanceof HTMLElement&&jn(s,()=>this.hide()),TA(this.body,"[data-unlock]",r=>{const o=r.getAttribute("data-unlock");o&&this.onPurchase(o)})}isVisible(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("hidden",!this.visible)}hide(){this.visible=!1,this.root.classList.add("hidden")}update(t){this.body.innerHTML=`
      <p class="osrs-stat-line">Coral Tokens: <strong>${t.coralTokens}</strong></p>
      <div class="osrs-shop-list">
        ${fo.map(e=>this.renderUnlock(e,t)).join("")}
      </div>
    `}renderUnlock(t,e){const i=e.unlocked.has(t.id),s=tf(e,t),r=t.tokenCost===null?"Earn only":`${t.tokenCost} Coral Tokens`;let o;i?o="Unlocked":t.demoDisabled?o="Disabled for this demo":t.earnOnly?o="Earn only 1/500 from successful tricks":s.ok?o="Purchase":o=s.reason??"Locked";const a=i||!s.ok;return`
      <div class="osrs-shop-item">
        <div class="osrs-shop-item-title">${t.name}</div>
        <div class="osrs-shop-item-desc">${t.description}</div>
        <div class="osrs-shop-item-cost">${r}</div>
        <button type="button" class="osrs-stone-btn" data-unlock="${t.id}" ${a?"disabled":""}>
          ${o}
        </button>
      </div>
    `}}class DA{constructor(t){B(this,"root");this.root=t,this.root.className="osrs-control-panel osrs-skills-panel hidden",this.root.innerHTML=this.renderShell()}update(t){const e=t.progression.xp.agility,i=t.progression.xp.sailing;this.updateSkillRow("agility",Na(e),Yr(e).percent),this.updateSkillRow("sailing",Ua(i),Yr(i).percent);const s=this.root.querySelector("#tricks-landed");s&&(s.textContent=String(t.progression.session.tricksLanded));const r=this.root.querySelector("#coral-tokens");r&&(r.textContent=String(t.progression.coralTokens));const o=Na(e)+Ua(i),a=this.root.querySelector("#total-level");a&&(a.textContent=String(o))}setVisible(t){this.root.classList.toggle("hidden",!t)}renderShell(){const t=pe;return`
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
    `}updateSkillRow(t,e,i){const s=this.root.querySelector(`#${t}-label`),r=this.root.querySelector(`#${t}-fill`);s&&(s.textContent=`${t==="agility"?"Agility":"Sailing"} ${e}`),r&&(r.style.width=`${i}%`)}}const NA=[{id:"combat",icon:pe.tabs.combat,label:"Sailing Options"},{id:"stats",icon:pe.tabs.stats,label:"Skills"},{icon:pe.tabs.quests,label:"Quest List"},{icon:pe.tabs.inventory,label:"Inventory"},{icon:pe.tabs.equipment,label:"Worn Equipment"},{icon:pe.tabs.prayer,label:"Prayer"},{icon:pe.tabs.magic,label:"Magic"}],UA=[{icon:pe.tabs.friends,label:"Friends List"},{icon:pe.tabs.ignores,label:"Ignore List"},{icon:pe.tabs.clanChannel,label:"Chat-channel"},{icon:pe.tabs.accountManagement,label:"Account Management"},{icon:pe.tabs.logout,label:"Logout"},{icon:pe.tabs.options,label:"Settings"},{icon:pe.tabs.emotes,label:"Emotes"}];class OA{constructor(t,e,i){B(this,"topRoot");B(this,"bottomRoot");B(this,"activeTab","combat");B(this,"onTabChange");this.topRoot=t,this.bottomRoot=e,this.onTabChange=i,this.render()}setActiveTab(t){this.activeTab=t,this.syncActiveState()}render(){this.topRoot.className="osrs-tab-strip osrs-tab-strip-top",this.bottomRoot.className="osrs-tab-strip osrs-tab-strip-bottom",this.topRoot.innerHTML='<div class="osrs-tab-strip-inner"></div>',this.bottomRoot.innerHTML='<div class="osrs-tab-strip-inner"></div>';const t=this.topRoot.querySelector(".osrs-tab-strip-inner"),e=this.bottomRoot.querySelector(".osrs-tab-strip-inner");if(!(!t||!e)){t.innerHTML=NA.map(i=>this.tabButtonHtml(i)).join(""),e.innerHTML=UA.map(i=>this.tabButtonHtml(i,!1)).join("");for(const i of t.querySelectorAll("[data-tab]")){const s=i.dataset.tab;s!=="combat"&&s!=="stats"||jn(i,()=>{this.activeTab=s,this.syncActiveState(),this.onTabChange(s)})}}}tabButtonHtml(t,e=!0){const i=e&&(t.id==="combat"||t.id==="stats");return`
      <button
        type="button"
        class="osrs-game-tab ${t.id===this.activeTab?"active":""}"
        title="${t.label}"
        ${t.id?`data-tab="${t.id}"`:""}
        ${i?"":"disabled"}
      >
        <img src="${t.icon}" alt="${t.label}" />
      </button>
    `}syncActiveState(){this.topRoot.querySelectorAll("[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===this.activeTab)})}}function Jh(n){return n<=0?"0/h":n>=1e6?`${(n/1e6).toFixed(1)}M/h`:n>=1e4?`${Math.round(n/1e3)}k/h`:`${n.toLocaleString()}/h`}class FA{constructor(t){B(this,"root");this.root=t,this.root.className="osrs-viewport-xp-hud",this.root.innerHTML=this.renderShell()}update(t,e){const i=t.progression.xp.agility,s=t.progression.xp.sailing,r=Yr(i),o=Yr(s),a=e.rates();this.updateSkillRow("agility",r.level,r.percent,a.agility),this.updateSkillRow("sailing",o.level,o.percent,a.sailing);const l=this.root.querySelector("#viewport-total-xp-rate");l&&(l.textContent=Jh(a.total))}renderShell(){const t=pe;return`
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
    `}updateSkillRow(t,e,i,s){const r=this.root.querySelector(`#viewport-${t}-label`),o=this.root.querySelector(`#viewport-${t}-fill`),a=this.root.querySelector(`#viewport-${t}-rate`);r&&(r.textContent=`${t==="agility"?"Agility":"Sailing"} ${e}`),o&&(o.style.width=`${i}%`),a&&(a.textContent=Jh(s))}}const kA=5*6e4,BA=1e3;class HA{constructor(){B(this,"samples",[])}record(t,e,i=performance.now()){t<=0&&e<=0||(this.samples.push({at:i,agility:t,sailing:e}),this.prune(i))}rates(t=performance.now()){if(this.prune(t),this.samples.length===0)return{agility:0,sailing:0,total:0};let e=0,i=0;for(const a of this.samples)e+=a.agility,i+=a.sailing;const s=this.samples[0].at,o=Math.max(t-s,BA)/36e5;return{agility:Math.round(e/o),sailing:Math.round(i/o),total:Math.round((e+i)/o)}}prune(t){const e=t-kA;for(;this.samples.length>0&&this.samples[0].at<e;)this.samples.shift()}}const jh=32,GA=.5;function zA(){const n=window.innerWidth-jh,t=window.innerHeight-jh;return Math.max(GA,Math.min(n/vl,t/Sl))}function Qh(n,t){const e=zA();return n.style.width=`${vl*e}px`,n.style.height=`${Sl*e}px`,t.style.transform=`scale(${e})`,t.style.transformOrigin="top left",e}const VA={Digit1:0,Digit2:1,Digit3:2},WA=["Click the ground to walk. Click Kaulu to talk.","Click your surfboard on the sand ring to paddle out.","Prime Grind, Tuck, or Air stance 1–5 ticks before you hit the matching coral feature."];class Rl{constructor(t,e,i,s,r,o,a,l,c,u){B(this,"simulation");B(this,"renderer");B(this,"chatbox");B(this,"sailingPanel");B(this,"skillsPanel");B(this,"viewportXpHud");B(this,"xpRateTracker",new HA);B(this,"tabStrip");B(this,"shopPanel");B(this,"debugPanel");B(this,"minimap");B(this,"unbindPointer",null);B(this,"visualFrameId",null);B(this,"lastVisualFrameMs",0);B(this,"lastSimTickTimeMs",0);B(this,"motion",new xA);B(this,"tidePhaseFrom",null);B(this,"paused",!1);B(this,"lastDisplayPosition",{x:0,y:0});B(this,"lastTickBlend",0);B(this,"lastSavedProgressionFingerprint","");B(this,"onKeyDown",t=>{if(this.renderer.handleKeyDown(t)){t.preventDefault();return}const e=VA[t.code];e!==void 0&&(t.preventDefault(),this.simulation.prepareTrick(e))});B(this,"onKeyUp",t=>{this.renderer.handleKeyUp(t)&&t.preventDefault()});this.simulation=t,this.renderer=e,this.chatbox=i,this.sailingPanel=s,this.skillsPanel=r,this.viewportXpHud=o,this.tabStrip=a,this.shopPanel=l,this.debugPanel=c,this.minimap=u}static async mount(){var z;const t=document.getElementById("osrs-scale-shell"),e=document.getElementById("osrs-scale-wrap");t&&e&&(Qh(t,e),window.addEventListener("resize",()=>Qh(t,e)));const i=new URLSearchParams(window.location.search).get("arena")==="animtest",s=i?null:f_(),r=new d_({arena:i?F0():w0(),initialProgression:s??void 0}),o=document.getElementById("game-root"),a=document.getElementById("viewport-xp-hud"),l=document.getElementById("sailing-panel"),c=document.getElementById("skills-panel"),u=document.getElementById("shop-panel"),d=document.getElementById("debug-panel"),h=document.getElementById("chatbox-root"),f=document.getElementById("tab-strip-top"),g=document.getElementById("tab-strip-bottom"),M=document.getElementById("minimap-map"),p=document.getElementById("minimap-compass"),m=document.getElementById("minimap-frame");if(!o||!a||!l||!c||!u||!d||!h||!f||!g||!M||!p||!m)throw new Error("Missing required DOM elements");const v=new gA;await v.init(o,1),v.setVillageVisible(!i);const E=new wA(M,p,m,()=>v.snapCameraNorth()),y=new bA(h);for(const U of WA)y.push(U,"game");const w={turnRate:ti.turnRateDegPerTick,speedPaddle:ti.speedPaddle,speedRide:ti.speedRide};r.setStats({turnRateDegPerTick:w.turnRate,speedPaddle:w.speedPaddle,speedRide:w.speedRide});const T=new SA(d,w,U=>{r.setStats({turnRateDegPerTick:U.turnRate,speedPaddle:U.speedPaddle,speedRide:U.speedRide})}),P={sailing:null,skills:null},x=new LA(u,U=>{var dt,xt;const j=r.tryPurchaseUnlock(U);j&&y.push(j,"system");const nt=r.getSnapshot();ru(nt.progression),x.update(nt.progression),(dt=P.sailing)==null||dt.update(nt),(xt=P.skills)==null||xt.update(nt)}),A=new DA(c),I=new FA(a);P.skills=A;const R=new IA(l,{onSpeedState:U=>r.setSpeedState(U),onOpenShop:()=>{x.toggle(),x.update(r.getSnapshot().progression)},onPrepareTrick:U=>r.prepareTrick(U),onToggleTrueTile:U=>v.setTrueTileVisible(U),onDismountBoard:()=>{const U=r.tryDismountBoard();U&&y.push(U,"system")}});P.sailing=R;const F=(U,j)=>{R.setVisible(U==="combat"),A.setVisible(U==="stats"),j.setActiveTab(U)},W=new OA(f,g,U=>F(U,W)),X=new Rl(r,v,y,R,A,I,W,x,T,E);F("combat",W);const N=r.getSnapshot();return s&&X.seedProgressionFingerprint(N.progression),X.motion.reset(N),X.tidePhaseFrom=((z=N.tide)==null?void 0:z.phaseRadians)??null,X.wireViewport(),X.startTickLoop(),i||r.queueIntroSurf(),window.addEventListener("keydown",X.onKeyDown),window.addEventListener("keyup",X.onKeyUp),window.addEventListener("beforeunload",()=>X.destroy()),X}wireViewport(){this.unbindPointer=this.renderer.bindPointerInput((t,e)=>{if(Number.isNaN(t)){this.simulation.clearCursor();return}this.simulation.setCursor(t,e)},(t,e)=>{this.simulation.clickWorld(t,e)})}setPaused(t){if(this.paused=t,!t){const e=performance.now();this.lastVisualFrameMs=e,this.lastSimTickTimeMs=e}}resetTickBlendTimer(){this.lastSimTickTimeMs=performance.now(),this.lastTickBlend=0}startTickLoop(){const t=performance.now();this.lastVisualFrameMs=t,this.lastSimTickTimeMs=t,this.visualFrameId=requestAnimationFrame(e=>this.onVisualFrame(e))}onGameTick(){var s;const t=this.simulation.getSnapshot();this.tidePhaseFrom=((s=t.tide)==null?void 0:s.phaseRadians)??null,this.simulation.setCameraFacing(this.renderer.getViewFacingRadians()),this.simulation.tick();const e=this.simulation.getSnapshot();this.motion.onSimulationTick(t,e);const i=this.simulation.getArena().map;this.renderer.syncMapAfterTick(e,i),this.sailingPanel.update(e),this.skillsPanel.update(e),this.viewportXpHud.update(e,this.xpRateTracker),this.shopPanel.isVisible()&&this.shopPanel.update(e.progression),this.persistProgressionIfChanged(e.progression),this.debugPanel.update(e);for(const r of this.simulation.consumeDialogue())this.chatbox.push(r,"game");for(const r of this.simulation.consumeXpDrops()){this.xpRateTracker.record(r.agility,r.sailing);const o=r.tokens>0?` +${r.tokens} Tokens`:"";this.renderer.showXpDrop(`+${r.agility} Agil +${r.sailing} Sail${o}`,r.x,r.y);const a=r.tokens>0?`, +${r.tokens} Coral Tokens`:"";this.chatbox.push(`+${r.agility} Agility XP, +${r.sailing} Sailing XP${a}`,"xp")}}onVisualFrame(t){if(!this.paused){const e=this.simulation.tickMs;t-this.lastSimTickTimeMs>=e&&(this.onGameTick(),this.lastSimTickTimeMs+=e,t-this.lastSimTickTimeMs>=e&&(this.lastSimTickTimeMs=t));const i=Math.min(1,Math.max(0,(t-this.lastSimTickTimeMs)/e));this.renderVisuals(t,i)}this.lastVisualFrameMs=t,this.visualFrameId=requestAnimationFrame(e=>this.onVisualFrame(e))}renderVisuals(t=performance.now(),e=0){const i=this.simulation.getSnapshot(),s=this.simulation.getArena().map;this.motion.ensureSynced(i);const r=this.motion.buildDisplaySnapshot(i,this.tidePhaseFrom,e);this.lastDisplayPosition={...r.surfboard.position},this.lastTickBlend=e,this.renderer.render(r,s,t,e),this.viewportXpHud.update(i,this.xpRateTracker),this.minimap.update(r,s),this.minimap.setCompassRotation(this.renderer.getCompassRotationRadians())}renderFrame(){this.renderVisuals(performance.now(),this.lastTickBlend)}getDisplayPosition(){return{...this.lastDisplayPosition}}getTickBlend(){return this.lastTickBlend}seedProgressionFingerprint(t){this.lastSavedProgressionFingerprint=this.progressionFingerprint(t)}progressionFingerprint(t){return JSON.stringify({xp:t.xp,coralTokens:t.coralTokens,unlocked:[...t.unlocked].sort(),combo:t.session.combo,maxCombo:t.session.maxCombo,tricksLanded:t.session.tricksLanded})}persistProgressionIfChanged(t){const e=this.progressionFingerprint(t);e!==this.lastSavedProgressionFingerprint&&(this.lastSavedProgressionFingerprint=e,ru(t))}destroy(){var t;this.persistProgressionIfChanged(this.simulation.getSnapshot().progression),this.visualFrameId!==null&&cancelAnimationFrame(this.visualFrameId),(t=this.unbindPointer)==null||t.call(this),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.destroy()}}const Jt=n=>`${n}px`;function XA(){const n=document.documentElement,t={"--osrs-frame-width":Jt(vl),"--osrs-frame-height":Jt(Sl),"--osrs-window-top-height":Jt(hb),"--osrs-grid-height":Jt($f),"--osrs-viewport-width":Jt(qi),"--osrs-viewport-height":Jt(xi),"--osrs-chat-height":Jt(Zf),"--osrs-chat-messages-height":Jt(qf),"--osrs-chat-stones-height":Jt(Kf),"--osrs-sidebar-width":Jt(Yf),"--osrs-sidebar-content-left":Jt(Ks),"--osrs-minimap-height":Jt(Jf),"--osrs-minimap-left-edge":Jt(jf),"--osrs-minimap-right-edge":Jt(db),"--osrs-minimap-frame-left":Jt(Ml),"--osrs-minimap-frame-width":Jt(fb),"--osrs-minimap-frame-height":Jt(pb),"--osrs-minimap-map-left":Jt(xb),"--osrs-minimap-map-top":Jt(_b),"--osrs-minimap-map-size":Jt(Xi),"--osrs-minimap-compass-left":Jt(vb),"--osrs-minimap-compass-top":Jt(Sb),"--osrs-minimap-compass-size":Jt(Mb),"--osrs-minimap-bottom-left":Jt(Eb),"--osrs-minimap-bottom-width":Jt(yb),"--osrs-minimap-bottom-height":Jt(mb),"--osrs-tab-strip-width":Jt(bb),"--osrs-tab-strip-left":Jt(Tb),"--osrs-tab-slot-count":String(Rb),"--osrs-tab-bar-height":Jt(Qf),"--osrs-sidebar-body-height":Jt(tp),"--osrs-interface-panel-height":Jt(ep),"--osrs-interface-row-width":Jt(sp),"--osrs-interface-row-left":Jt(Cb),"--osrs-side-panel-edge-width":Jt(np),"--osrs-side-panel-width":Jt(ip),"--osrs-side-panel-height":Jt(wb)};for(const[e,i]of Object.entries(t))n.style.setProperty(e,i)}const YA={"--osrs-url-window-top":"fixed_mode/window_frame_edge_top.png","--osrs-url-top-right-corner":"fixed_mode/top_right_corner.png","--osrs-url-chatbox-bg":"chatbox/background.png","--osrs-url-minimap-left":"fixed_mode/minimap_left_edge.png","--osrs-url-minimap-right":"fixed_mode/minimap_right_edge.png","--osrs-url-minimap-frame":"fixed_mode/minimap_and_compass_frame.png","--osrs-url-minimap-bottom":"fixed_mode/minimap_frame_bottom.png","--osrs-url-tabs-top":"fixed_mode/tabs_top_row.png","--osrs-url-tabs-bottom":"fixed_mode/tabs_row_bottom.png","--osrs-url-tab-selected":"tab_stone_middle_selected.png","--osrs-url-side-panel":"fixed_mode/side_panel_background.png","--osrs-url-side-panel-edge-left":"side_panel_edge_left.png","--osrs-url-side-panel-edge-right":"side_panel_edge_right.png","--osrs-url-stone-btn":"button/stone_button_9slice.png","--osrs-url-stone-btn-hovered":"button/stone_button_9slice_hovered.png","--osrs-url-stone-btn-disabled":"button/stone_button_9slice_disabled.png","--osrs-url-stone-tab":"chatbox/button.png","--osrs-url-stone-tab-hovered":"chatbox/button_hovered.png","--osrs-url-stone-tab-selected":"chatbox/button_selected.png"};function qA(){const n=document.documentElement;for(const[t,e]of Object.entries(YA))n.style.setProperty(t,`url("${ce(e)}")`)}qA();XA();KA();Rl.mount().catch(n=>{console.error(n)});function KA(){const n=document.getElementById("demo-notice-main"),t=document.getElementById("demo-notice-close");!n||!t||t.addEventListener("click",()=>{n.classList.add("hidden")})}
