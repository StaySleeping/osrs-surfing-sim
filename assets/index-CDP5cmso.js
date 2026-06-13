var Sp=Object.defineProperty;var yp=(n,t,e)=>t in n?Sp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var B=(n,t,e)=>yp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xe=16,no=360/Xe,Ep=600,bp=22.5,Rs=2,Tp=2,Yh=2.5,Ap=2.75,Rp=3;function io(n){return n*Rs}function Nl(n){return n/Rs}const wp=io(Tp),qh=io(Yh),Cp=io(Ap),Pp=io(Rp),ti={turnRateDegPerTick:bp,speedPaddle:wp,speedRide:qh},Kh=280,Zh=224,sn=Kh/2,rn=Zh/2,$h=20,Ip=26,Lp=30,Pc=33,Dp=36,Jh=Pc+Dp,Np=8,Up=8.25,Op=8.5,Fp=8.75,kp=7,Bp=-.9,Hp=.55,Gp=8,zp=2.3,Vp=.45,Wp=4,Xp=7;function Ul(n,t,e){let i=n-t;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return Math.exp(-(i*i)/(2*e*e))}function Yp(n,t){const e=.26*Math.sin(n+.7)+.5*Math.sin(n*2+.55)+.34*Math.sin(n*3+1.85)+.18*Math.sin(n*5+.95)+.08*Math.sin(n*8+2.6),i=t*e-Gp*Ul(n,Bp,Hp)+Wp*Ul(n,zp,Vp);return Math.max(i,Xp-$h)}function so(n,t,e){return t+Yp(n,e)}function qp(n,t,e){return t+e*(.38*Math.sin(n+2.35)+.27*Math.sin(n*3+.15)+.2*Math.sin(n*6+3.05)+.15*Math.sin(n*9+1.2))}function Ic(n){return so(n,$h,Np)}function Br(n){return so(n,Ip,Up)}function Kp(n){return so(n,Lp,Op)}function Hr(n){return so(n,Pc,Fp)}function Ls(n){return qp(n,Jh,kp)}function Zp(n,t){return Math.atan2(t-rn+.5,n-sn+.5)}function $p(n,t){return Math.hypot(n-sn+.5,t-rn+.5)}const jh=.1,ys=.25,Qh=1.8;function Jp(){return`${jh}|${ys}|${Qh}`}function pi(n,t,e){const i=Math.atan2(t-rn,n-sn),s=Math.hypot(n-sn,t-rn),r=Ic(i),o=Br(i);if(e==="grass"){const c=r>0?Math.min(1,s/r):1,u=(1-c)*(1-c);return ys+u*(Qh-ys)}const a=o-r,l=a>0?Math.min(1,Math.max(0,(s-r)/a)):1;return ys+l*(jh-ys)}const td=Pc,ed=Jh,Lc=1,ro=5,jp=1.5,Qp=14,tm=Math.PI*2,em=(td+ed)/2,nm=1.35,im=em*(tm/Qp),sm=im/Yh,nd=Math.ceil(sm*nm),rm=["Grind","Tuck","Air"];function id(n){return rm[n]}function Dc(n){const t=n%360;return t<0?t+360:t}function qe(n){return Dc(n*no)}function om(n){const t=Dc(n);return Math.round(t/no)%Xe}function nn(n){const t=Dc(n*180/Math.PI);return om(t)}function Nc(n){const t=qe(n)*Math.PI/180;return{x:Math.cos(t),y:Math.sin(t)}}function am(n,t){let e=(t-n)%Xe;return e>Xe/2&&(e-=Xe),e<-Xe/2&&(e+=Xe),e}function cm(n,t,e){const i=am(n,t);if(i===0)return n;const s=Math.max(1,Math.round(e/no)),r=Math.sign(i)*Math.min(Math.abs(i),s);return(n+r+Xe)%Xe}function Ea(n,t,e){const i=Math.min(1,Math.max(0,e)),s=qe(n);let o=qe(t)-s;return o>180&&(o-=360),o<-180&&(o+=360),(s+o*i)/no}function sd(n){return n==="grass"||n==="sand"}function lm(n){return n==="deep_water"||n==="shallow"||n==="tide_zone"}function rd(n){return n==="sand"||n==="deep_water"||n==="shallow"||n==="coral_rideable"||n==="tide_zone"}function od(n,t,e){const i=Array.from({length:t},()=>Array.from({length:n},()=>e));return{widthTiles:n,heightTiles:t,tiles:i,blockedQuarters:new Set}}function Es(n,t,e,i){e<0||e>=n.heightTiles||t<0||t>=n.widthTiles||(n.tiles[e][t]=i)}function Ze(n,t,e){return e<0||e>=n.heightTiles||t<0||t>=n.widthTiles?null:n.tiles[e][t]}function um(n,t,e){const i=Math.floor(t),s=Math.floor(e),r=Ze(n,i,s);return r===null?!1:lm(r)}function qs(n,t,e){const i=Ze(n,Math.floor(t),Math.floor(e));return i===null?!1:rd(i)&&i!=="grass"}const hm=[{tx:1,ty:0},{tx:-1,ty:0},{tx:0,ty:1},{tx:0,ty:-1}],dm=[{tx:1,ty:1},{tx:1,ty:-1},{tx:-1,ty:1},{tx:-1,ty:-1}];function Pr(n,t,e){const i=Ze(n,t,e);return i===null?!1:sd(i)}function fm(n,t,e,i,s){if(!Pr(n,i,s))return!1;const r=i-t,o=s-e;return r===0||o===0?!0:Pr(n,t+r,e)&&Pr(n,t,e+o)}function bo(n,t){return`${n},${t}`}function pm(n,t,e,i,s){if(!Pr(n,i,s))return null;if(t===i&&e===s)return[{tx:t,ty:e}];const r=[{tx:t,ty:e}],o=new Map;for(o.set(bo(t,e),null);r.length>0;){const a=r.shift();if(a.tx===i&&a.ty===s){const c=[];let u=a;for(;u;)c.push(u),u=o.get(bo(u.tx,u.ty))??null;return c.reverse(),c}const l=[...hm,...dm];for(const c of l){const u=a.tx+c.tx,d=a.ty+c.ty,h=bo(u,d);o.has(h)||fm(n,a.tx,a.ty,u,d)&&(o.set(h,a),r.push({tx:u,ty:d}))}}return null}function mm(n,t){return{x:n+.5,y:t+.5}}const gm=2;function _m(n,t,e,i=!0){return{path:n,pathIndex:n.length>1?1:0,running:i,walkTickCounter:0,targetTx:t,targetTy:e}}function xm(n,t,e){const i=Ze(n,Math.floor(t),Math.floor(e));return i===null?!1:sd(i)}function vm(n,t,e,i){const s=Math.floor(e),r=Math.floor(i);if(!xm(n,e,i))return null;const o=Math.floor(t.x),a=Math.floor(t.y),l=pm(n,o,a,s,r);return l?_m(l,s,r):null}function Mm(n,t,e){if(e.pathIndex>=e.path.length)return{position:n,heading:t,walk:null,moved:!1};if(!e.running&&(e.walkTickCounter+=1,e.walkTickCounter%gm!==0))return{position:n,heading:t,walk:e,moved:!1};const i=e.path[e.pathIndex],s=mm(i.tx,i.ty),r=nn(Math.atan2(s.y-n.y,s.x-n.x)),o={...e,pathIndex:e.pathIndex+1},a=o.pathIndex>=o.path.length;return{position:s,heading:r,walk:a?null:o,moved:!0}}function ad(n,t,e=0){return{position:{x:n,y:t},currentHeading:e,intendedHeading:e,speedState:"seated",isRotating:!1}}function Sm(n,t,e,i){const s=Math.atan2(i-t,e-n);return nn(s)}function ym(n,t){return n.speedState==="paddling"?t.speedPaddle/Rs:n.speedState==="riding"?t.speedRide/Rs:n.speedState==="reversing"?-t.speedPaddle/Rs:0}function Em(n,t){const e={...n};return t.setIntendedHeading!==void 0&&(e.intendedHeading=t.setIntendedHeading,e.isRotating=e.intendedHeading!==e.currentHeading),t.startPaddle&&(e.speedState="paddling"),t.standUp&&e.speedState!=="seated"&&(e.speedState="riding"),t.lieDown&&e.speedState==="riding"&&(e.speedState="paddling"),t.reverse&&e.speedState==="seated"&&(e.speedState="reversing"),t.stop&&(e.speedState="seated"),e}function bm(n,t,e){const i=Ze(n,Math.floor(t),Math.floor(e));return i===null?!0:!rd(i)}function Uc(n,t,e={},i=ti){const s=Em(n,e);let r=!1,o=!1,a=!1;const l=s.currentHeading;s.isRotating&&(s.currentHeading=cm(s.currentHeading,s.intendedHeading,i.turnRateDegPerTick),s.isRotating=s.currentHeading!==s.intendedHeading,a=s.currentHeading!==l);const c=ym(s,i);if(c!==0){const u=Nc(s.currentHeading),d=s.position.x+u.x*c,h=s.position.y+u.y*c;bm(t,d,h)?o=!0:(s.position={x:d,y:h},r=!0)}return{state:s,moved:r,collided:o,headingChanged:a}}function Tm(){return{ticksRemaining:nd}}function cd(){return Tm()}function ld(n,t){return!t||t.ticksRemaining<=0?n:{...n,speedRide:n.speedRide*jp}}function ud(n,t){const e=n.ticksRemaining-1;return e>0?{ticksRemaining:e}:null}const Am=1,Gr=.55,Rm=.12,wm=2.2,Cm=.08,hd=.08;function Pm(){return Am*Gr/(Gr+Rm)+Cm}const Oc=.6,oo=.14,dd=3.25,fd=oo,Im=.06,Lm=.04,Ol=.5,Dm={rail:1.15,jump:Pm(),brain_coral:.8,wall_ride:.675},Nm={rail:.45,jump:wm/2,brain_coral:.8,wall_ride:.17},Fl={rail:.54,jump:Gr+hd,brain_coral:.8,wall_ride:1.09},kl={rail:.27,jump:(Gr+hd)/2,brain_coral:.4,wall_ride:.55};function Um(){const n=Oc,t=oo,e=dd,i=fd,s=Lm,r=i+n+t;return{halfAlongRide:t*e+s,halfLateral:n+t+s,height:r+s,centerY:r/2}}function pd(n,t){if(n==="tunnel"){const s=Um();return{halfAlongRide:t*s.halfAlongRide,halfLateral:t*s.halfLateral,height:t*s.height,centerY:t*s.centerY}}const e=t*Dm[n],i=t*Nm[n];return n==="wall_ride"?{halfAlongRide:e+Ol,halfLateral:i+Ol,height:t*Fl[n],centerY:t*kl[n]}:{halfAlongRide:e,halfLateral:i,height:t*Fl[n],centerY:t*kl[n]}}function md(n){const t=pd(n.type,n.radius);return Math.max(t.halfAlongRide,t.halfLateral)}function Om(n,t){const e=t.x-n.center.x,i=t.y-n.center.y,s=Math.cos(n.rotationRadians),r=Math.sin(n.rotationRadians);return{alongRide:e*s+i*r,lateral:-e*r+i*s}}function Fm(n,t){const{halfAlongRide:e,halfLateral:i}=pd(n.type,n.radius),s=Om(n,t);return Math.abs(s.alongRide)<=e&&Math.abs(s.lateral)<=i}const km=.92,Ds=2;function Bm(n,t){const e=pe(n),i=pe(t);return e<=i?i-e:zr-e+i}function gd(n,t){const e=vd(n);return Bm(t.phaseRadians,e)<=t.advancePerTick*Ds+1e-9}function _d(n,t,e=0){if(!t||!ii(n,t))return 1;const i=Math.atan2(n.center.y-t.centerY,n.center.x-t.centerX);if(n.spawnedAtHighTide){if(!gd(i,t))return 0;const r=(n.emergedRenderTicks??0)+e;return Math.min(1,r/Ds)}const s=(n.submergedRenderTicks??0)+e;return Math.max(0,1-Math.min(1,s/Ds))}function Hm(n,t,e=0){return!t||!ii(n,t)?0:1-_d(n,t,e)}function Gm(n,t){return n.map(e=>{if(!ii(e,t))return e.submergedRenderTicks===void 0&&e.emergedRenderTicks===void 0?e:{...e,submergedRenderTicks:void 0,emergedRenderTicks:void 0};const i=Math.atan2(e.center.y-t.centerY,e.center.x-t.centerX);if(e.spawnedAtHighTide){if(!gd(i,t))return e.emergedRenderTicks===void 0?e:{...e,emergedRenderTicks:void 0};const r=e.emergedRenderTicks;return r===void 0?{...e,emergedRenderTicks:0,submergedRenderTicks:void 0}:r>=Ds?e:{...e,emergedRenderTicks:r+1}}const s=e.submergedRenderTicks;return s===void 0?{...e,submergedRenderTicks:0,emergedRenderTicks:void 0}:s>=Ds?e:{...e,submergedRenderTicks:s+1,emergedRenderTicks:void 0}})}const zr=Math.PI*2,zm=.05;function Vm(n){return{centerX:n.centerX,centerY:n.centerY,innerRadius:n.innerRadius,outerRadius:n.outerRadius,sweepRadians:n.sweepRadians,phaseRadians:0,advancePerTick:n.advancePerTick??zm,innerRadiusAtAngle:n.innerRadiusAtAngle,outerRadiusAtAngle:n.outerRadiusAtAngle}}function Wm(n){return{...n,phaseRadians:pe(n.phaseRadians+n.advancePerTick)}}function pe(n){const t=n%zr;return t<0?t+zr:t}function xd(n,t,e){const i=pe(t),s=pe(t+e),r=pe(n);return i<=s?r>=i&&r<=s:r>=i||r<=s}function ns(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.3||r>l+.4?!1:xd(o,e.phaseRadians,e.sweepRadians)}function ii(n,t){return ns(n.center.x,n.center.y,t)}function Xm(n){return pe(n.phaseRadians+n.sweepRadians)}function Ym(n,t){return pe(n-t.sweepRadians/2)}function qm(n,t){return pe(n-t.sweepRadians)}function vd(n){return pe(n)}function Km(n,t){return Zm(qm(n,t),Ym(n,t),km)}function Bl(n,t){const e=Km(n,t),i=vd(n);return $m(t.phaseRadians,e,i)}function Zm(n,t,e){const i=pe(n),s=pe(t);if(i<=s)return pe(i+(s-i)*e);const r=zr-i+s;return pe(i+r*e)}function $m(n,t,e){const i=pe(n),s=pe(t),r=pe(e);return s<=r?i>=s&&i<=r:i>=s||i<=r}function Vr(n,t){return pe(t-n)}function Md(n,t,e){let i=null,s=1/0;for(const r of n){if(r.tricked||e&&ii(r,e))continue;const o=t.x-r.center.x,a=t.y-r.center.y,l=Math.sqrt(o*o+a*a);Fm(r,t)&&l<s&&(i=r,s=l)}return i}function Jm(n){return n.ticksSincePrepare>=Lc&&n.ticksSincePrepare<=ro}function Wr(n){if(!n)return null;const t=n.ticksSincePrepare+1;return t>ro?null:{...n,ticksSincePrepare:t}}function jm(n,t){return n.map(e=>e.id===t?{...e,tricked:!0}:e)}const Qm=Math.PI*2,Ir=.12,ba=2.6,Ta=4.4,is=Ta*1.12,Hl=.3,Gl=.1;function tg(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function Sd(n){const t=is;if(n<=Hl)return t*tg(n/Hl);const e=1-Gl;if(n<=e)return t;const i=(n-e)/Gl;return t*(1-i)}function Fc(n,t){const e=Ed(n,t);return e===null?0:Sd(e)}function yd(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.5||r>l+.5?0:Fc(o,e)}function Ed(n,t){if(!xd(n,t.phaseRadians,t.sweepRadians))return null;const e=pe(t.phaseRadians),i=pe(n),s=pe(e+t.sweepRadians);return e<=s||i>=e?(i-e)/t.sweepRadians:(Qm-e+i)/t.sweepRadians}function bd(n,t){const e=Ed(n,t);return e===null?0:Math.sin(Math.PI*e)}function eg(n,t,e){var c,u;const i=n-e.centerX,s=t-e.centerY,r=Math.hypot(i,s),o=Math.atan2(s,i),a=((c=e.innerRadiusAtAngle)==null?void 0:c.call(e,o))??e.innerRadius,l=((u=e.outerRadiusAtAngle)==null?void 0:u.call(e,o))??e.outerRadius;return r<a-.5||r>l+.5?0:bd(o,e)}function kc(n,t,e){if(!e)return Ir;const i=yd(n,t,e);if(i<=0)return Ir;const s=eg(n,t,e),r=Ir-s*ba,o=Math.min(1,s+i/is);return r+o*(i-r)}const ng=2,Un=.28,ig={rail:1.85,jump:1.65,tunnel:1.75,wall_ride:1.55,brain_coral:1.2},sg=.46;function rg(n){const t=n.rotationRadians,e=Math.cos(t),i=Math.sin(t);return{x:e,y:i}}function Ns(n,t,e,i){return n*e+t*i}const og=.05;function ag(n,t,e){const i=rg(n),s=Nc(e),r=Ns(s.x,s.y,i.x,i.y);if(Math.abs(r)>=og)return r>=0?i:{x:-i.x,y:-i.y};const o={x:t.x-n.center.x,y:t.y-n.center.y};return Ns(o.x,o.y,i.x,i.y)<=0?i:{x:-i.x,y:-i.y}}function cg(n,t,e){const i={x:t.x-n.center.x,y:t.y-n.center.y},s=Ns(i.x,i.y,e.x,e.y);return{x:n.center.x+e.x*s,y:n.center.y+e.y*s}}function lg(n){return nn(Math.atan2(n.y,n.x))}function ug(n){return{x:-n.y,y:n.x}}function hg(n,t,e){const i=ug(e),s={x:t.x-n.center.x,y:t.y-n.center.y},r=Ns(s.x,s.y,i.x,i.y);return Math.abs(r)<.01||r>=0?1:-1}function zl(n,t,e){return{x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e}}function Td(n){return n?{type:n.type,zoneRadius:n.zoneRadius,zoneCenter:{...n.zoneCenter},rotationRadians:n.rotationRadians,rideSide:n.rideSide,entry:{...n.entry},start:{...n.start},end:{...n.end},ticksElapsed:n.ticksElapsed,ticksTotal:n.ticksTotal}:null}function Ad(n,t){const e=Math.min(1,Math.max(0,t));if(e<=Un){const s=e/Un;return zl(n.entry,n.start,s)}const i=(e-Un)/(1-Un);return zl(n.start,n.end,i)}function dg(n,t,e,i){const r=t.radius*ig[t.type]*sg,o=-r,a=r,l=cg(t,e,i),c=Ns(l.x-t.center.x,l.y-t.center.y,i.x,i.y),u=Math.max(o,Math.min(c,a)),d={x:t.center.x+i.x*u,y:t.center.y+i.y*u};for(let h=4;h>=1;h-=1){const f=h/4,g=u+(a-u)*f,S=t.center.x+i.x*g,p=t.center.y+i.y*g;if(qs(n,S,p))return{start:d,end:{x:S,y:p}}}return{start:d,end:{...d}}}function Rd(n,t,e,i){const s=ag(t,e,i),r=lg(s),{start:o,end:a}=dg(n,t,e,s);return{zoneId:t.id,type:t.type,zoneRadius:t.radius,zoneCenter:{...t.center},rotationRadians:t.rotationRadians,rideSide:hg(t,e,s),entry:{...e},entryHeading:i,start:o,end:a,endHeading:r,ticksElapsed:0,ticksTotal:ng}}function fg(n,t){const e=Math.min(1,Math.max(0,t));if(e<=Un){const i=e/Un;return Ea(n.entryHeading,n.endHeading,i)}return n.endHeading}function wd(n){const t=n.ticksElapsed+1,e=Math.min(1,t/n.ticksTotal),i=Ad(n,e),s=fg(n,e);return t>=n.ticksTotal?{state:null,position:{...n.end},heading:n.endHeading}:{state:{...n,ticksElapsed:t},position:i,heading:s}}const ws=Math.PI*2,Gn=.55,pg=.28,mg=.5,gg=.22,Vl=.22,_g=.12,ao=.4,Cd=.22,Aa=8,xg=2,vg=45,Mg=4,Sg=2,Ra=12,Bc=.18,yg=16,Eg=7,bg=.7,Tg=40,Ag=5,Rg=2,wg=4,Cg=9,Pg=.3,Ig=25,Lg=30,Dg=.5,Ng=70,Ug=8,Og=4,Pd=10,Id={kind:"loop",ringDepth:Gn,doesTricks:!0};function Ld(n){return{direction:1,wanderTarget:null,loungeTicksRemaining:0,lastPosition:null,stuckTicks:0,rngState:n>>>0||1}}function Us(n){let t=n.rngState;return t^=t<<13>>>0,t^=t>>>17,t^=t<<5>>>0,n.rngState=t>>>0,n.rngState/4294967296}function co(n,t){let e=(t-n)%ws;return e>Math.PI&&(e-=ws),e<-Math.PI&&(e+=ws),e}function $e(n,t){const e=n-sn,i=t-rn;return{angle:Math.atan2(i,e),radius:Math.hypot(e,i)}}function Hc(n){return n+Math.PI/2}function Dd(n){return ws-n.sweepRadians}function Fg(n,t){const{fromTrailing:e}=lo(n,t);return e>Dd(t)*mg}function kg(n,t){const{fromTrailing:e,toLeading:i}=lo(n,t),s=t.sweepRadians*gg,r=t.sweepRadians*ao+vi(t);return e<s||i<r}function Bg(n,t){const{fromTrailing:e,toLeading:i}=lo(n,t),s=t.sweepRadians*Vl,r=t.sweepRadians*Vl+vi(t);return e<s||i<r}function Hg(n,t,e=Gn){const i=Os(n,t),s=t.sweepRadians*ao+vi(t),r=t.sweepRadians*Cd+vi(t);if(i>=s)return e;const o=Math.min(e,pg),a=1-(i-r)/Math.max(s-r,.01),l=Math.min(1,Math.max(0,a));return e+(o-e)*l}function Gg(n,t){const e=Hr(n),i=Ls(n),s=e+(i-e)*t;return{x:sn+Math.cos(n)*s,y:rn+Math.sin(n)*s}}function si(n,t=null,e=Gn){const i=t?Hg(n,t,e):e;return Gg(n,i)}function Nd(n,t,e,i,s=Gn,r=1){const{angle:o,radius:a}=$e(n.x,n.y),l=si(o,i,s),c=Math.hypot(l.x-sn,l.y-rn),u=Hc(o)+(r===1?0:Math.PI),h=i!==null&&Os(o,i)<i.sweepRadians*ao+vi(i)?.2:.08,f=a-c,g=Math.max(-.45,Math.min(.45,f*h)),S=Math.cos(u)*.82+Math.cos(o)*g+(t-n.x)*.06,p=Math.sin(u)*.82+Math.sin(o)*g+(e-n.y)*.06;return nn(Math.atan2(p,S))}function lo(n,t){const e=Xm(t),i=t.phaseRadians;return{fromTrailing:Vr(e,n),toLeading:Vr(n,i)}}function vi(n){return n.advancePerTick*Mg}function Os(n,t){return lo(n,t).toLeading}function zg(n,t,e,i=Gn){if(ns(n.x,n.y,e))return!1;const{angle:s}=$e(n.x,n.y),r=Os(s,e),o=e.sweepRadians*Cd+vi(e),a=Wg(n,e,t.speedState,i);return r<o||a}function Vg(n){return(n+xg+Xe)%Xe}function Wg(n,t,e,i=Gn){if(e!=="riding")return!1;const{angle:s,radius:r}=$e(n.x,n.y),o=t.sweepRadians*ao+vi(t);if(Os(s,t)>o*1.15)return!1;const l=2.5/Math.max(r,1);for(let c=1;c<=Sg;c+=1){const u=s+l*c,d=si(u,null,i);if(ns(d.x,d.y,t)||Os(u,t)<o)return!0}return!1}function Xg(n,t,e){if(!t)return{standUp:!0};const{angle:i}=$e(n.x,n.y);return ns(n.x,n.y,t)?{lieDown:!0}:e?{standUp:!0}:kg(i,t)?{lieDown:!0}:{standUp:!0}}function Yg(n,t,e,i=null){if(!e)return null;const s=$e(n.x,n.y).angle,r=Bg(s,e),o=Dd(e);let a=null,l=1/0;for(const c of t){if(c.tricked||ii(c,e))continue;const u=Math.atan2(c.center.y-e.centerY,c.center.x-e.centerX);if(i&&Math.abs(co(i.centerRadians,u))>i.halfWidthRadians)continue;const d=Vr(s,u);if(!(Vr(u,s)<=_g)&&d>o)continue;const f=Math.hypot(n.x-c.center.x,n.y-c.center.y);f<l&&(l=f,a=c)}return r&&a!==null&&l>Ra+4?null:a}function Ud(n,t){const e=Math.hypot(n.x-t.center.x,n.y-t.center.y);if(e>20)return{steerX:t.center.x,steerY:t.center.y};if(e>md(t)+2.5)return{steerX:t.center.x,steerY:t.center.y};const i=n.x+Math.cos(t.rotationRadians)*5,s=n.y+Math.sin(t.rotationRadians)*5;return{steerX:i,steerY:s}}function Od(n,t,e,i){if(e)return;const s=Math.hypot(n.x-t.center.x,n.y-t.center.y),r=i?Ra+4:Ra,o=md(t)*(i?.35:.45);if(s<r&&s>o)return t.prepareSlot}function Fd(n,t,e){const i=Math.hypot(e.x-t.x,e.y-t.y),s=Math.max(1,Math.ceil(i/Og));for(let r=1;r<=s;r+=1){const o=r/s,a=t.x+(e.x-t.x)*o,l=t.y+(e.y-t.y)*o;if(!qs(n,a,l))return!1}return!0}function qg(n,t,e){for(let i=0;i<Ug;i+=1){const s=Us(e)*ws-Math.PI,r=Br(s)+2,o=Ls(s)+10,a=r+Us(e)*(o-r),l=sn+Math.cos(s)*a,c=rn+Math.sin(s)*a;if(qs(n,l,c)&&Fd(n,t,{x:l,y:c}))return{x:l,y:c}}return si($e(t.x,t.y).angle+.6)}function Kg(n){const t={...n};return Us(t)<Dg?(t.loungeTicksRemaining=Ng,t.wanderTarget=null,{aiState:t,lounge:!0}):{aiState:t,lounge:!1}}function Zg(n,t){const{surfboard:e,map:i}=n,s=e.position;if(t.loungeTicksRemaining>0)return t.loungeTicksRemaining-=1,{stop:!0,setIntendedHeading:e.currentHeading};const r=t.lastPosition,o=!r||Math.hypot(s.x-r.x,s.y-r.y)>.01;t.lastPosition={...s},t.stuckTicks=o?0:t.stuckTicks+1,t.stuckTicks>Pd&&(t.wanderTarget=null,t.stuckTicks=0);const a=t.wanderTarget,l=a?Math.hypot(a.x-s.x,a.y-s.y):1/0;if(!a||l<wg){if(Us(t)<Pg)return t.loungeTicksRemaining=Ig+Math.floor(Us(t)*Lg),t.wanderTarget=null,{stop:!0,setIntendedHeading:e.currentHeading};t.wanderTarget=qg(i,s,t)}const c=t.wanderTarget,u=nn(Math.atan2(c.y-s.y,c.x-s.x));return{...l>Cg?{standUp:!0}:{lieDown:!0},setIntendedHeading:u}}function $g(n,t,e){const{surfboard:i,trickPrepare:s,trickZones:r,tide:o}=n,a=i.position,l=$e(a.x,a.y).angle;if(t.kind==="sector"){const v=co(t.centerRadians,l);v>t.halfWidthRadians?e.direction=-1:v<-t.halfWidthRadians&&(e.direction=1)}const c=t.kind==="sector"?e.direction:1,u=o!==null&&Fg(l,o),d=t.kind==="sector"?{centerRadians:t.centerRadians,halfWidthRadians:t.halfWidthRadians}:null,h=t.doesTricks&&c===1?Yg(a,r,o,d):null;let f=a.x,g=a.y;if(h){const v=Ud(a,h);f=v.steerX,g=v.steerY}else{const v=l+c*Bc,E=si(v,o,t.ringDepth);f=E.x,g=E.y}const m={...Xg(a,o,h!==null),setIntendedHeading:Nd(a,f,g,o,t.ringDepth,c)};if(h){const v=Od(a,h,s,u);v!==void 0&&(m.prepareSlot=v)}return m}function Jg(n,t,e){for(const i of[0,.5,-.5,1,-1]){const s=t.facingRadians+i;for(const r of[1,1.4,2,2.8]){const o=t.x+Math.cos(s)*e*r,a=t.y+Math.sin(s)*e*r;if(qs(n,o,a))return{x:o,y:a}}}return si($e(t.x,t.y).angle)}function jg(n,t,e,i){let s=null,r=1/0;for(const o of e){if(o.tricked||i&&ii(o,i))continue;const a=Math.atan2(o.center.y-t.y,o.center.x-t.x);if(Math.abs(co(t.facingRadians,a))>bg||Math.hypot(o.center.x-t.x,o.center.y-t.y)>Tg)continue;const c=Math.hypot(o.center.x-n.x,o.center.y-n.y);c<r&&(r=c,s=o)}return s}function Wl(n,t,e,i){if(Fd(n,e,i))return nn(Math.atan2(i.y-e.y,i.x-e.x));const s=$e(e.x,e.y).angle,r=$e(i.x,i.y).angle,o=co(s,r)>=0?1:-1,a=si(s+o*Bc*1.5,t);return nn(Math.atan2(a.y-e.y,a.x-e.x))}function Qg(n,t,e){const{surfboard:i,trickPrepare:s,trickZones:r,tide:o,map:a,audience:l}=n,c=i.position;if(!l){const p=$e(c.x,c.y).angle,m=si(p+Bc,o);return{standUp:!0,setIntendedHeading:Nd(c,m.x,m.y,o)}}if(o&&ns(c.x,c.y,o)){const p=Hc($e(c.x,c.y).angle)+Math.PI;return{standUp:!0,setIntendedHeading:nn(p)}}if(Math.hypot(c.x-l.x,c.y-l.y)<Eg)return{standUp:!0,setIntendedHeading:nn(Math.atan2(c.y-l.y,c.x-l.x))};const d=e.lastPosition,h=!d||Math.hypot(c.x-d.x,c.y-d.y)>.01;if(e.lastPosition={...c},e.stuckTicks=h?0:e.stuckTicks+1,e.stuckTicks>Pd)return e.stuckTicks=0,{standUp:!0,setIntendedHeading:nn($e(c.x,c.y).angle)};const f=jg(c,l,r,o);if(f){const p=Ud(c,f),m={standUp:!0,setIntendedHeading:Wl(a,o,c,{x:p.steerX,y:p.steerY})},v=Od(c,f,s,!0);return v!==void 0&&(m.prepareSlot=v),m}const g=Jg(a,l,t.followDistance);return Math.hypot(g.x-c.x,g.y-c.y)<Ag?{standUp:!0,setIntendedHeading:(i.currentHeading+Rg+Xe)%Xe}:{standUp:!0,setIntendedHeading:Wl(a,o,c,g)}}function t0(n){const t=n.behavior??Id,e={...n.aiState??Ld(1)},{surfboard:i}=n,s=t.kind==="explorer"&&e.loungeTicksRemaining>0;return i.speedState==="seated"&&!s?{input:{startPaddle:!0,standUp:!0,setIntendedHeading:i.currentHeading},aiState:e}:{input:t.kind==="explorer"?Zg(n,e):t.kind==="showoff"?Qg(n,t,e):$g(n,t,e),aiState:e}}function e0(n,t=Gn){const e=si(n,null,t);return{x:e.x,y:e.y,heading:nn(Hc(n))}}const uo=4,n0=12,Xr=["rail","tunnel","jump","brain_coral","wall_ride"],Gc={rail:0,brain_coral:0,tunnel:1,wall_ride:1,jump:2},i0=.22,Xl=.22,s0=.92,kd=5,r0=.2,Fs=Math.PI*2,Yl=-5,o0=5;function Bd(n=Math.random){const t=o0-Yl;return(Yl+n()*t)*Math.PI/180}function a0(n){return n-Math.PI/2}function Hd(n,t){const e=a0(n),i=n+Math.PI/2;return t?i:e}function c0(){return{nextZoneId:1e3}}function zc(n,t){return Xd(i0+n*(Fs/t))}function Gd(n=Math.random){return Xl+n()*(s0-Xl)}function zd(n,t){return Math.atan2(n.center.y-t.centerY,n.center.x-t.centerX)}function Vd(n,t,e){const i=Hr(t),s=Ls(t);for(let r=e;r>=.18;r-=.04){const o=i+(s-i)*r,a=sn+Math.cos(t)*o,l=rn+Math.sin(t)*o;if(Ze(n,Math.floor(a),Math.floor(l))==="coral_rideable")return{x:a,y:l}}return null}function Wd(n,t){for(const e of t)if(Math.hypot(n.x-e.center.x,n.y-e.center.y)-uo*2<n0)return!1;return!0}function l0(n=Math.random){return Xr[Math.floor(n()*Xr.length)]}function u0(n,t,e,i,s,r,o=Math.random,a=!0,l=!1){const c=Vd(n,t,r);if(!c||a&&!Wd(c,s)||!l&&ns(c.x,c.y,e))return null;const u=l0(o),d=o()<r0,h=Hd(t,d);return{id:i,type:u,prepareSlot:Gc[u],center:c,radius:uo,rotationRadians:h,rotationJitterRadians:Bd(o),tricked:!1}}function h0(n,t,e,i,s,r,o){for(let a=0;a<kd;a+=1){const l=u0(n,t,e,i,s,Gd(r),r,!0,o);if(l)return l}return null}function d0(n,t,e,i,s,r=Math.random){const o=Fs/s*.35,a=[];for(const l of n){const c=zd(l,t);if(!ii(l,t)){a.push(l.spawnedAtHighTide?{...l,spawnedAtHighTide:void 0}:l);continue}Bl(c,t)&&!l.spawnedAtHighTide||a.push(l)}for(let l=0;l<s&&!(a.length>=s);l+=1){if(f0(a,t,l,s,o))continue;const c=zc(l,s);if(!Bl(c,t))continue;const u=h0(e,c,t,`feature-${i.nextZoneId}`,a,r,!0);u&&(i.nextZoneId+=1,a.push({...u,spawnedAtHighTide:!0}))}return a}function f0(n,t,e,i,s){const r=zc(e,i);return n.some(o=>{const a=zd(o,t);return p0(a,r,s)})}function p0(n,t,e){let i=Math.abs(Xd(n-t));return i>Math.PI&&(i=Fs-i),i<=e}function Xd(n){const t=n%Fs;return t<0?t+Fs:t}const wa=14;function m0(n){const t=[];for(let e=0;e<wa;e+=1){const i=zc(e,wa);let s=null;for(let l=0;l<kd;l+=1){const c=Vd(n,i,Gd());if(c&&Wd(c,t)){s=c;break}}if(!s)continue;const r=Xr[e%Xr.length],o=e%5===0,a=Hd(i,o);t.push({id:`${r}-${e}`,type:r,prepareSlot:Gc[r],center:s,radius:uo,rotationRadians:a,rotationJitterRadians:Bd(),tricked:!1})}return t}const ql=2.3,g0=.9,_0=.45,x0=.82,v0=1.25;function M0(){return[{id:"nalu",name:"Nalu",spawnAngle:-Math.PI/4,behavior:{kind:"loop",ringDepth:Gn,doesTricks:!0}},{id:"kai",name:"Kai",spawnAngle:ql,behavior:{kind:"sector",centerRadians:ql,halfWidthRadians:g0,ringDepth:_0,doesTricks:!0}},{id:"hina",name:"Hina",spawnAngle:-Math.PI*3/4,behavior:{kind:"loop",ringDepth:x0,doesTricks:!1}},{id:"tama",name:"Tama",spawnAngle:Math.PI,behavior:{kind:"explorer"}},{id:"koa",name:"Koa",spawnAngle:Math.PI/2+.4,behavior:{kind:"showoff",followDistance:yg},speedMultiplier:v0}].map(t=>{const e=t.behavior.kind==="loop"||t.behavior.kind==="sector"?t.behavior.ringDepth:void 0,i=e0(t.spawnAngle,e);return{id:t.id,name:t.name,startX:i.x,startY:i.y,startHeading:i.heading,behavior:t.behavior,speedMultiplier:t.speedMultiplier}})}function S0(){const n=Kh,t=Zh,e=od(n,t,"deep_water");for(let h=0;h<t;h+=1)for(let f=0;f<n;f+=1){const g=Zp(f,h),S=$p(f,h),p=Ic(g),m=Br(g),v=Kp(g),E=Hr(g),y=Ls(g);S<=p?Es(e,f,h,"grass"):S<=m?Es(e,f,h,"sand"):S<=v?Es(e,f,h,"shallow"):S>=E&&S<=y&&Es(e,f,h,"coral_rideable")}const i=Math.PI/2,s=Br(i),r=sn,o=rn+s-1.5,a=4,l=r,c=o-a,u=r+1.2,d=o-1.5;return{map:e,spawnX:l,spawnY:c,spawnHeading:4,boardDockX:r,boardDockY:o,requiresBoardMount:!0,tide:{centerX:sn,centerY:rn,innerRadius:td,outerRadius:ed,innerRadiusAtAngle:Hr,outerRadiusAtAngle:Ls,sweepRadians:Math.PI/1.35,advancePerTick:.0565},npcs:[{id:"guru",name:"Kaulu the Surf Guru",x:u,y:d,interactRadius:.9,dialogue:["Welcome to Coral Park, surfer!","Your board sits on the sand ring — click it when you are ready.","Ride the wide reef loop around the island.","Yellow chevrons show which way to ride through each feature.","Grind the rails and brain coral, Tuck through tunnels and wall rides, catch Air off jumps.","Prime the matching stance 1–5 ticks before you hit the feature.","Tai'ura's tide submerges features — they fade underwater, then fresh coral rises as the swell passes.","Watch Nalu and her friends ride the reef — they time the swell to hit features in the dry zone."]}],demoSurfers:M0(),trickZones:m0(e)}}const y0=200,E0=64,b0=26,T0=44,A0=36,R0=28,w0=["rail","brain_coral","tunnel","wall_ride","jump"],us={minX:2,maxX:9,minY:31,maxY:39};function C0(n,t){return{x:R0+n*A0,y:t}}function Kl(n,t,e){return w0.map((i,s)=>({id:`anim-${i}${e}`,type:i,prepareSlot:Gc[i],center:C0(s,n),radius:uo,rotationRadians:t,tricked:!1}))}function P0(){const n=od(y0,E0,"deep_water");for(let t=us.minY;t<=us.maxY;t+=1)for(let e=us.minX;e<=us.maxX;e+=1)Es(n,e,t,"sand");return{map:n,spawnX:5.5,spawnY:35.5,spawnHeading:0,boardDockX:us.maxX+.5,boardDockY:35.5,requiresBoardMount:!0,trickZones:[...Kl(b0,0,""),...Kl(T0,Math.PI,"-counter")],tide:null,npcs:[],demoSurfers:[]}}function I0(n,t,e){for(const i of n){const s=t-i.x,r=e-i.y;if(Math.hypot(s,r)<=i.interactRadius)return i}return null}function L0(n,t,e){for(const i of n)if(Math.floor(i.x)===t&&Math.floor(i.y)===e)return i;return null}function D0(n,t,e,i=0){for(const s of n){const r=t-s.x,o=e-s.y;if(Math.hypot(r,o)<=s.interactRadius+i)return s}return null}function Zl(n,t,e,i=.3){const s=t-n.x,r=e-n.y;return Math.hypot(s,r)<=n.interactRadius+i}function N0(n){let t=2166136261;for(let e=0;e<n.length;e+=1)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function U0(n,t){const e=ad(n.startX,n.startY,n.startHeading),i=t??{...ti},s=n.speedMultiplier??1,r=s===1?i:{turnRateDegPerTick:i.turnRateDegPerTick*s,speedPaddle:i.speedPaddle*s,speedRide:i.speedRide*s};return{config:n,behavior:n.behavior??Id,aiState:Ld(N0(n.id)),surfboard:{...e,speedState:"riding"},trickPrepare:null,trickAnimation:null,activeTrickZoneId:null,tideSpinTicksRemaining:0,trickSpeedBoost:null,stats:r}}function O0(n){return n.tideSpinTicksRemaining<=0?null:1-n.tideSpinTicksRemaining/Aa}function F0(n){var t;return{id:n.config.id,name:n.config.name,surfboard:{...n.surfboard,position:{...n.surfboard.position}},trickPrepare:n.trickPrepare?{...n.trickPrepare}:null,trickAnimation:Td(n.trickAnimation),trickSpeedBoostTicksRemaining:((t=n.trickSpeedBoost)==null?void 0:t.ticksRemaining)??0,tideSpinProgress:O0(n)}}function k0(n,t,e){const i=Rd(e,t,n.surfboard.position,n.surfboard.currentHeading);return{...n,trickPrepare:null,trickAnimation:i,trickSpeedBoost:cd(),activeTrickZoneId:null,tideSpinTicksRemaining:0,surfboard:{...n.surfboard,speedState:"riding",intendedHeading:i.endHeading,isRotating:!1}}}function To(n,t){const e={...n.stats,turnRateDegPerTick:vg},i=Uc(n.surfboard,t,{lieDown:!0,setIntendedHeading:Vg(n.surfboard.currentHeading)},e);return{...n,surfboard:i.state,tideSpinTicksRemaining:Math.max(0,n.tideSpinTicksRemaining-1),trickPrepare:Wr(n.trickPrepare),activeTrickZoneId:null}}function B0(n,t,e,i,s=null){if(n.trickAnimation){const f=wd(n.trickAnimation);return{...n,trickAnimation:f.state,surfboard:{...n.surfboard,position:f.position,currentHeading:f.heading,intendedHeading:f.heading,isRotating:!1},trickPrepare:Wr(n.trickPrepare)}}if(n.tideSpinTicksRemaining>0)return To(n,t);const r=n.behavior.kind==="loop"||n.behavior.kind==="sector"?n.behavior.ringDepth:Gn;if(n.behavior.kind!=="showoff"&&i&&zg(n.surfboard.position,n.surfboard,i,r)){if(n.behavior.kind!=="explorer")return To({...n,tideSpinTicksRemaining:Aa},t);if(n.aiState.loungeTicksRemaining<=0){const f=Kg(n.aiState);if(n={...n,aiState:f.aiState},!f.lounge)return To({...n,tideSpinTicksRemaining:Aa},t)}}const o=t0({surfboard:n.surfboard,trickPrepare:n.trickPrepare,trickZones:e,tide:i,map:t,behavior:n.behavior,aiState:n.aiState,audience:s}),{prepareSlot:a,...l}=o.input;let c={...n,aiState:o.aiState};a!==void 0&&(c={...c,trickPrepare:{slot:a,ticksSincePrepare:0}});const u=c.trickSpeedBoost!==null&&c.surfboard.speedState==="riding"&&!c.trickAnimation,d=ld(c.stats,u?c.trickSpeedBoost:null),h=Uc(c.surfboard,t,l,d);if(c={...c,surfboard:h.state,trickPrepare:Wr(c.trickPrepare)},c.surfboard.speedState!=="riding"?c={...c,trickSpeedBoost:null}:u&&c.trickSpeedBoost&&(c={...c,trickSpeedBoost:ud(c.trickSpeedBoost)}),c.surfboard.speedState!=="seated"){const f=Md(e,c.surfboard.position,i);return f&&c.activeTrickZoneId!==f.id?k0({...c,activeTrickZoneId:f.id},f,t):f?c:{...c,activeTrickZoneId:null}}return{...c,activeTrickZoneId:null}}const ho=[{id:"teeny_tai",name:"Teeny Tai",description:"Cute jellyfish spirit in a shimmering water bubble — earned from tricks.",tokenCost:null,earnOnly:!0},{id:"taiura_blessing",name:"Tai'ura's Blessing",description:"Coral blessing for ship combat ammo recovery.",tokenCost:500,minSailingLevel:40,demoDisabled:!0},{id:"ebb_and_flow",name:"Ebb and Flow",description:"Lunar spell — weapon swap grants a boosted attack.",tokenCost:750,minSailingLevel:60,demoDisabled:!0},{id:"living_coral",name:"Living Coral",description:"20% chance to double grinding output.",tokenCost:400,minAgilityLevel:50,demoDisabled:!0},{id:"coral_rail_cosmetic",name:"Coral Rail Trim",description:"Cosmetic surfboard rail glow.",tokenCost:150},{id:"surf_guru_board",name:"Ironwood Board",description:"Ironwood hull — faster ride speed and darker deck.",tokenCost:250,minAgilityLevel:30},{id:"rosewood_board",name:"Rosewood Board",description:"Rosewood hull — fastest ride speed and rich deck finish.",tokenCost:250,requiresUnlock:"surf_guru_board"}],Vc=["Bronze","Iron","Steel","Mithril","Adamant","Rune","Dragon"],ks=10;function H0(n){return n<=0?1:Math.min(Vc.length,Math.floor(n/ks)+1)}function Yd(n){return n<=0?0:Math.min(Vc.length-1,Math.floor(n/ks))}function Ao(n){return Vc[Yd(n)]}function G0(n){if(n<=0)return 0;const t=n%ks;return t===0?ks:t}function z0(n){if(n<=0)return 0;const t=Yd(n);return Math.max(0,(t-1)*ks)}const V0=45,W0=35,X0=1/4,$l=6,Y0=10,q0=1/500,K0=new Set(ho.map(n=>n.id));function Z0(){return{xp:{agility:0,sailing:0},coralTokens:0,unlocked:new Set,session:{tricksLanded:0,combo:0,maxCombo:0}}}function $0(n){return{xp:{...n.xp},coralTokens:n.coralTokens,unlocked:new Set(n.unlocked),session:{...n.session}}}function J0(n){return{xp:{...n.xp},coralTokens:n.coralTokens,unlocked:[...n.unlocked],session:{...n.session}}}function wi(n){return typeof n=="number"&&Number.isFinite(n)&&n>=0}function j0(n){if(!n||typeof n!="object")return null;const t=n;if(!t.xp||typeof t.xp!="object"||!wi(t.xp.agility)||!wi(t.xp.sailing)||!wi(t.coralTokens)||!t.session||typeof t.session!="object"||!wi(t.session.tricksLanded)||!wi(t.session.combo)||!wi(t.session.maxCombo)||!Array.isArray(t.unlocked))return null;const e=[];for(const i of t.unlocked){if(typeof i!="string"||!K0.has(i))return null;e.push(i)}return{xp:{agility:t.xp.agility,sailing:t.xp.sailing},coralTokens:t.coralTokens,unlocked:new Set(e),session:{tricksLanded:t.session.tricksLanded,combo:t.session.combo,maxCombo:t.session.maxCombo}}}function Ca(n){return Math.floor(Math.sqrt(n/100))+1}function Pa(n){return Math.floor(Math.sqrt(n/120))+1}function qd(n,t){if(t.demoDisabled)return{ok:!1,reason:"Disabled for this demo"};if(t.earnOnly)return{ok:!1,reason:"Earned through gameplay only (1/500 from successful tricks)"};if(n.unlocked.has(t.id))return{ok:!1,reason:"Already unlocked"};if(t.requiresUnlock&&!n.unlocked.has(t.requiresUnlock)){const e=ho.find(i=>i.id===t.requiresUnlock);return{ok:!1,reason:`Requires ${(e==null?void 0:e.name)??t.requiresUnlock}`}}return t.tokenCost!==null&&n.coralTokens<t.tokenCost?{ok:!1,reason:"Not enough Coral Tokens"}:t.minAgilityLevel&&Ca(n.xp.agility)<t.minAgilityLevel?{ok:!1,reason:`Requires Agility ${t.minAgilityLevel}`}:t.minSailingLevel&&Pa(n.xp.sailing)<t.minSailingLevel?{ok:!1,reason:`Requires Sailing ${t.minSailingLevel}`}:{ok:!0}}function Q0(n,t){const e=ho.find(r=>r.id===t);if(!e)return{state:n,success:!1,reason:"Unknown unlock"};const i=qd(n,e);return i.ok?{state:{...n,coralTokens:e.tokenCost!==null?n.coralTokens-e.tokenCost:n.coralTokens,unlocked:new Set([...n.unlocked,t])},success:!0}:{state:n,success:!1,reason:i.reason}}function t_(n=Math.random){if(n()>=X0)return 0;const t=Y0-$l+1,e=Math.floor(n()*t);return $l+e}function e_(n,t=Math.random){const e=n.session.combo+1,i=H0(e),s={agility:V0*i,sailing:W0*i},r=t_(t);let o=null;const a=new Set(n.unlocked);return!a.has("teeny_tai")&&t()<q0&&(a.add("teeny_tai"),o="teeny_tai"),{state:{...n,xp:{agility:n.xp.agility+s.agility,sailing:n.xp.sailing+s.sailing},coralTokens:n.coralTokens+r,unlocked:a,session:{tricksLanded:n.session.tricksLanded+1,combo:e,maxCombo:Math.max(n.session.maxCombo,e)}},xpGained:s,tokensGained:r,unlockGained:o}}function n_(n){const t=z0(n.session.combo);return t===n.session.combo?n:{...n,session:{...n.session,combo:t}}}function Jl(n){let t=qh;return n.has("rosewood_board")?t=Pp:n.has("surf_guru_board")&&(t=Cp),{turnRateDegPerTick:ti.turnRateDegPerTick,speedPaddle:ti.speedPaddle,speedRide:t}}function i_(n){return n.has("rosewood_board")?"Rosewood Board":n.has("surf_guru_board")?"Ironwood Board":"Camphor Board"}class s_{constructor(t){B(this,"surfboard");B(this,"progression");B(this,"trickZones");B(this,"tide");B(this,"pendingInput",{});B(this,"stats");B(this,"arena");B(this,"tickMs");B(this,"cursorWorldX",null);B(this,"cursorWorldY",null);B(this,"hoverHeading",null);B(this,"clickValid",!0);B(this,"tickCount",0);B(this,"xpDrops",[]);B(this,"npcDialogueIndex",new Map);B(this,"proximityGreeted",new Set);B(this,"pendingDialogue",[]);B(this,"boardMounted");B(this,"boardDockX");B(this,"boardDockY");B(this,"walk",null);B(this,"walkClickMarker",null);B(this,"pendingNpcTalk",null);B(this,"pendingBoardMount",!1);B(this,"pendingIntroSurf",!1);B(this,"trickZoneTideSync");B(this,"trickPrepare",null);B(this,"activeTrickZoneId",null);B(this,"trickAnimation",null);B(this,"trickSpeedBoost",null);B(this,"tideFrozen",!1);B(this,"cameraFacingRadians",null);B(this,"movementFrozen",!1);B(this,"boardInteractRadius",1.3);B(this,"demoSurfers",[]);this.arena=t.arena,this.boardMounted=!t.arena.requiresBoardMount,this.boardDockX=t.arena.boardDockX,this.boardDockY=t.arena.boardDockY,this.stats=t.stats??{...ti},this.tickMs=t.tickMs??Ep,this.surfboard=ad(t.arena.spawnX,t.arena.spawnY,t.arena.spawnHeading),this.progression=t.initialProgression?$0(t.initialProgression):Z0(),t.stats||(this.stats=Jl(this.progression.unlocked)),this.trickZones=t.arena.trickZones.map(e=>({...e})),this.tide=t.arena.tide?Vm(t.arena.tide):null,this.trickZoneTideSync=c0(),this.demoSurfers=t.arena.demoSurfers.map(e=>U0(e,this.stats))}getSnapshot(){var t,e,i,s;return{surfboard:{...this.surfboard,position:{...this.surfboard.position}},progression:{...this.progression,unlocked:new Set(this.progression.unlocked),session:{...this.progression.session},xp:{...this.progression.xp}},trickZones:this.trickZones.map(r=>({...r,center:{...r.center}})),npcs:this.arena.npcs.map(r=>({...r,dialogue:[...r.dialogue]})),boardDockX:this.boardDockX,boardDockY:this.boardDockY,boardMounted:this.boardMounted,canDismountBoard:this.canDismountBoard(),tide:this.tide?{...this.tide}:null,cursorWorldX:this.cursorWorldX,cursorWorldY:this.cursorWorldY,hoverHeading:this.hoverHeading,clickValid:this.clickValid,tickCount:this.tickCount,walkTargetTx:((t=this.walkClickMarker)==null?void 0:t.tx)??null,walkTargetTy:((e=this.walkClickMarker)==null?void 0:e.ty)??null,walkClickValid:((i=this.walkClickMarker)==null?void 0:i.valid)??!0,onFootMoving:this.walk!==null,trickPrepare:this.trickPrepare?{...this.trickPrepare}:null,trickAnimation:Td(this.trickAnimation),trickSpeedBoostTicksRemaining:((s=this.trickSpeedBoost)==null?void 0:s.ticksRemaining)??0,demoSurfers:this.demoSurfers.map(r=>F0(r))}}consumeXpDrops(){const t=this.xpDrops;return this.xpDrops=[],t}setCursor(t,e){if(this.cursorWorldX=t,this.cursorWorldY=e,!this.boardMounted){this.clickValid=!0,this.hoverHeading=null;return}const i=this.boardMounted?qs(this.arena.map,t,e):um(this.arena.map,t,e);this.clickValid=i,this.clickValid?this.hoverHeading=Sm(this.surfboard.position.x,this.surfboard.position.y,t,e):this.hoverHeading=null}clearCursor(){this.cursorWorldX=null,this.cursorWorldY=null,this.hoverHeading=null,this.clickValid=!0}consumeDialogue(){const t=this.pendingDialogue;return this.pendingDialogue=[],t}queueIntroSurf(){this.boardMounted||!this.arena.requiresBoardMount||(this.pendingIntroSurf=!0,this.handleBoardClick())}clickWorld(t,e){const i=Math.floor(t),s=Math.floor(e),r=I0(this.arena.npcs,t,e)??L0(this.arena.npcs,i,s);if(r){this.handleNpcClick(r);return}if(!this.boardMounted&&this.isBoardClick(i,s,t,e)){this.handleBoardClick();return}if(!this.boardMounted){this.pendingNpcTalk=null,this.pendingBoardMount=!1,this.pendingIntroSurf=!1,this.clickToWalk(t,e);return}this.clickOcean(t,e)}handleNpcClick(t){if(Zl(t,this.surfboard.position.x,this.surfboard.position.y)){this.queueNpcDialogue(t);return}this.pendingNpcTalk=t,this.pendingBoardMount=!1,this.pendingIntroSurf=!1,this.clickToWalk(t.x,t.y)}handleBoardClick(){if(this.isNearBoard()){this.tryMountBoard();return}this.pendingBoardMount=!0,this.pendingNpcTalk=null,this.clickToWalk(this.boardDockX,this.boardDockY)}isBoardClick(t,e,i,s){const r=Math.floor(this.boardDockX),o=Math.floor(this.boardDockY);if(t===r&&e===o)return!0;const a=i-this.boardDockX,l=s-this.boardDockY;return Math.hypot(a,l)<=this.boardInteractRadius}isNearBoard(){const t=this.surfboard.position.x-this.boardDockX,e=this.surfboard.position.y-this.boardDockY;return Math.hypot(t,e)<=this.boardInteractRadius}isRiderOnSand(){return Ze(this.arena.map,Math.floor(this.surfboard.position.x),Math.floor(this.surfboard.position.y))==="sand"}canDismountBoard(){return this.boardMounted&&this.surfboard.speedState==="seated"&&this.trickAnimation===null&&this.isRiderOnSand()}clickToWalk(t,e){const i=Math.floor(t),s=Math.floor(e),r=vm(this.arena.map,this.surfboard.position,t,e);if(!r){this.walk=null,this.walkClickMarker={tx:i,ty:s,valid:!1};return}this.walk=r,this.walkClickMarker={tx:i,ty:s,valid:!0}}tryMountBoard(){return this.boardMounted||this.surfboard.speedState!=="seated"||!this.isNearBoard()?!1:(this.boardMounted=!0,this.walk=null,this.walkClickMarker=null,this.pendingBoardMount=!1,this.surfboard={...this.surfboard,position:{x:this.boardDockX,y:this.boardDockY},currentHeading:this.arena.spawnHeading,intendedHeading:this.arena.spawnHeading,isRotating:!1},this.pendingDialogue.push("You climb onto your surfboard."),this.pendingIntroSurf&&this.beginIntroRide(),!0)}beginIntroRide(){if(this.pendingIntroSurf=!1,!this.boardMounted)return;const t=this.boardDockY+10;this.clickOcean(this.boardDockX,t),this.setSpeedState("riding")}tryDismountBoard(){if(!this.boardMounted)return"You are not on your surfboard.";if(this.surfboard.speedState!=="seated")return"Stop moving before leaving your board.";if(this.trickAnimation)return"Finish your trick before leaving your board.";if(!this.isRiderOnSand())return"You can only leave your board on the sand.";const t=this.surfboard.position.x,e=this.surfboard.position.y,i=Number.isFinite(this.surfboard.currentHeading)?this.surfboard.currentHeading:this.arena.spawnHeading;this.boardDockX=t,this.boardDockY=e,this.boardMounted=!1,this.trickPrepare=null,this.trickSpeedBoost=null,this.pendingInput={};const{x:s,y:r}=Nc(i),o=t-s*.9,a=e-r*.9;let l={x:t,y:e};if(Number.isFinite(o)&&Number.isFinite(a)){const c=Ze(this.arena.map,Math.floor(o),Math.floor(a));(c==="sand"||c==="grass")&&(l={x:o,y:a})}return this.surfboard={...this.surfboard,position:l,speedState:"seated",isRotating:!1},this.pendingDialogue.push("You leave your surfboard on the sand."),null}clickOcean(t,e){this.setCursor(t,e),!(!this.clickValid||this.hoverHeading===null)&&(this.pendingInput.setIntendedHeading=this.hoverHeading)}queueNpcDialogue(t){const e=this.npcDialogueIndex.get(t.id)??0,i=t.dialogue[e];i!==void 0&&(this.pendingDialogue.push(`${t.name}: ${i}`),this.npcDialogueIndex.set(t.id,e+1))}checkProximityDialogue(){if(this.boardMounted&&this.surfboard.speedState!=="seated")return;const t=D0(this.arena.npcs,this.surfboard.position.x,this.surfboard.position.y,.6);!t||this.proximityGreeted.has(t.id)||(this.proximityGreeted.add(t.id),this.queueNpcDialogue(t))}resolvePendingInteractions(){this.pendingNpcTalk&&Zl(this.pendingNpcTalk,this.surfboard.position.x,this.surfboard.position.y)&&(this.queueNpcDialogue(this.pendingNpcTalk),this.pendingNpcTalk=null),this.pendingBoardMount&&this.isNearBoard()&&this.tryMountBoard()}setSpeedState(t){if(t==="seated")this.pendingInput.stop=!0;else if(t==="paddling"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.startPaddle=!0)}else if(t==="riding"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}if(!this.boardMounted)return;this.surfboard.speedState==="seated"&&(this.pendingInput.startPaddle=!0),this.pendingInput.standUp=!0}else if(t==="reversing"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.reverse=!0)}}prepareTrick(t){!this.boardMounted||this.surfboard.speedState!=="riding"||this.trickAnimation||(this.trickPrepare={slot:t,ticksSincePrepare:0})}clearTrickPrepare(){this.trickPrepare=null}resolveTrickZoneEntry(t){const e=this.trickPrepare,i=e!==null&&e.slot===t.prepareSlot&&Jm(e);if(this.trickPrepare=null,!i){this.bailTrick(t);return}const s=e_(this.progression);this.progression=s.state,s.unlockGained==="teeny_tai"&&this.pendingDialogue.push("You have a funny feeling like you're being followed."),this.trickZones=jm(this.trickZones,t.id),this.trickSpeedBoost=cd(),this.trickAnimation=Rd(this.arena.map,t,this.surfboard.position,this.surfboard.currentHeading),this.surfboard={...this.surfboard,intendedHeading:this.trickAnimation.endHeading,isRotating:!1},this.activeTrickZoneId=null,this.xpDrops.push({agility:s.xpGained.agility,sailing:s.xpGained.sailing,tokens:s.tokensGained,x:this.surfboard.position.x,y:this.surfboard.position.y})}bailTrick(t,e){this.trickPrepare=null,this.trickAnimation=null,this.trickSpeedBoost=null,this.progression=n_(this.progression),this.activeTrickZoneId=null,this.surfboard={...this.surfboard,speedState:"seated",isRotating:!1},this.pendingDialogue.push(e??`Bailed on the ${t.type}! Prime ${id(t.prepareSlot)} ${Lc}–${ro} ticks before you hit it.`)}checkTrickZoneResolution(){if(this.trickAnimation)return;if(!this.boardMounted||this.surfboard.speedState!=="riding"){this.activeTrickZoneId=null;return}const t=Md(this.trickZones,this.surfboard.position,this.tide);if(!t){this.activeTrickZoneId=null;return}this.activeTrickZoneId!==t.id&&(this.activeTrickZoneId=t.id,this.resolveTrickZoneEntry(t))}tryPurchaseUnlock(t){const e=Q0(this.progression,t);return e.success?(this.progression=e.state,this.stats=Jl(this.progression.unlocked),null):e.reason??"Purchase failed"}setStats(t){this.stats={...this.stats,...t}}setCameraFacing(t){this.cameraFacingRadians=t}setTideFrozen(t){this.tideFrozen=t}setMovementFrozen(t){this.movementFrozen=t}getArena(){return this.arena}tickTrickAnimationMovement(){if(!this.trickAnimation)return;const t=wd(this.trickAnimation);this.trickAnimation=t.state,this.surfboard={...this.surfboard,position:t.position,currentHeading:t.heading,intendedHeading:t.heading,isRotating:!1}}tick(){if(this.boardMounted&&!this.movementFrozen)if(this.trickAnimation)this.tickTrickAnimationMovement();else{const e=this.trickSpeedBoost!==null&&this.surfboard.speedState==="riding"&&!this.trickAnimation,i=ld(this.stats,e?this.trickSpeedBoost:null),s=Uc(this.surfboard,this.arena.map,this.pendingInput,i);this.surfboard=s.state,this.surfboard.speedState!=="riding"?(this.trickSpeedBoost=null,this.trickPrepare&&this.clearTrickPrepare()):e&&this.trickSpeedBoost&&(this.trickSpeedBoost=ud(this.trickSpeedBoost))}else if(this.walk){const e=Mm(this.surfboard.position,this.surfboard.currentHeading,this.walk);this.walk=e.walk,this.surfboard={...this.surfboard,position:e.position,currentHeading:e.heading,intendedHeading:e.heading},e.walk||(this.walkClickMarker=null,this.resolvePendingInteractions())}this.pendingInput={},this.trickPrepare=Wr(this.trickPrepare),this.checkTrickZoneResolution(),this.tide&&!this.tideFrozen&&(this.tide=Wm(this.tide),this.trickZones=d0(this.trickZones,this.tide,this.arena.map,this.trickZoneTideSync,wa),this.trickZones=Gm(this.trickZones,this.tide)),this.checkProximityDialogue();const t={x:this.surfboard.position.x,y:this.surfboard.position.y,facingRadians:this.cameraFacingRadians??qe(this.surfboard.currentHeading)*Math.PI/180};this.demoSurfers=this.demoSurfers.map(e=>B0(e,this.arena.map,this.trickZones,this.tide,t)),this.tickCount+=1}}const Kd="osrs-surfing-progression";function r_(){try{const n=localStorage.getItem(Kd);return n?j0(JSON.parse(n)):null}catch{return null}}function jl(n){try{localStorage.setItem(Kd,JSON.stringify(J0(n)))}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="184",o_=0,Ql=1,a_=2,Lr=1,c_=2,bs=3,ei=0,Ge=1,Sn=2,Fn=0,Zi=1,tu=2,eu=3,nu=4,l_=5,di=100,u_=101,h_=102,d_=103,f_=104,p_=200,m_=201,g_=202,__=203,Ia=204,La=205,x_=206,v_=207,M_=208,S_=209,y_=210,E_=211,b_=212,T_=213,A_=214,Da=0,Na=1,Ua=2,Ji=3,Oa=4,Fa=5,ka=6,Ba=7,Zd=0,R_=1,w_=2,En=0,$d=1,Jd=2,jd=3,Qd=4,tf=5,ef=6,nf=7,sf=300,Mi=301,ji=302,Ro=303,wo=304,fo=306,Ha=1e3,On=1001,Ga=1002,Pe=1003,C_=1004,Js=1005,Oe=1006,Co=1007,mi=1008,Ye=1009,rf=1010,of=1011,Bs=1012,Xc=1013,Tn=1014,hn=1015,Bn=1016,Yc=1017,qc=1018,Hs=1020,af=35902,cf=35899,lf=1021,uf=1022,dn=1023,Hn=1026,gi=1027,Kc=1028,Zc=1029,Si=1030,$c=1031,Jc=1033,Dr=33776,Nr=33777,Ur=33778,Or=33779,za=35840,Va=35841,Wa=35842,Xa=35843,Ya=36196,qa=37492,Ka=37496,Za=37488,$a=37489,Yr=37490,Ja=37491,ja=37808,Qa=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,uc=37820,hc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,qr=36285,_c=36286,P_=3200,xc=0,I_=1,Jn="",tn="srgb",Kr="srgb-linear",Zr="linear",le="srgb",Ci=7680,iu=519,L_=512,D_=513,N_=514,jc=515,U_=516,O_=517,Qc=518,F_=519,su=35044,ru="300 es",yn=2e3,Gs=2001;function k_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B_(){const n=$r("canvas");return n.style.display="block",n}const ou={};function au(...n){const t="THREE."+n.shift();console.log(t,...n)}function hf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=hf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function jt(...n){n=hf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function vc(...n){const t=n.join(" ");t in ou||(ou[t]=!0,Nt(...n))}function H_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const G_={[Da]:Na,[Ua]:ka,[Oa]:Ba,[Ji]:Fa,[Na]:Da,[ka]:Ua,[Ba]:Oa,[Fa]:Ji};class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,Mc=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function z_(n,t){return(n%t+t)%t}function Io(n,t,e){return(1-e)*n+e*t}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sl=class Sl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sl.prototype.isVector2=!0;let pt=Sl;class rs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*S;p<0&&(h=-h,f=-f,g=-g,S=-S,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,a=Math.sin(a*v)/E,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+S*a}else{l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+S*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yl=class yl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yl.prototype.isVector3=!0;let D=yl;const Lo=new D,cu=new rs,El=class El{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],S=s[0],p=s[3],m=s[6],v=s[1],E=s[4],y=s[7],w=s[2],T=s[5],P=s[8];return r[0]=o*S+a*v+l*w,r[3]=o*p+a*E+l*T,r[6]=o*m+a*y+l*P,r[1]=c*S+u*v+d*w,r[4]=c*p+u*E+d*T,r[7]=c*m+u*y+d*P,r[2]=h*S+f*v+g*w,r[5]=h*p+f*E+g*T,r[8]=h*m+f*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=d*S,t[1]=(s*c-u*i)*S,t[2]=(a*i-s*o)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=f*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};El.prototype.isMatrix3=!0;let Vt=El;const Do=new Vt,lu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V_(){const n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:t,whitePoint:i,transfer:Zr,toXYZ:lu,fromXYZ:uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:lu,fromXYZ:uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const Qt=V_();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class W_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pi===void 0&&(Pi=$r("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Pi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(kn(e[i]/255)*255):e[i]=kn(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X_=0;class tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(No(s[o].image)):r.push(No(s[o]))}else r=No(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function No(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Y_=0;const Uo=new D;class ke extends bi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=On,s=On,r=Oe,o=mi,a=dn,l=Ye,c=ke.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ss(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=sf;ke.DEFAULT_ANISOTROPY=1;const bl=class bl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(f+1)/2,w=(m+1)/2,T=(u+h)/4,P=(d+S)/4,x=(g+p)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=P/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=x/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-S)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bl.prototype.isVector4=!0;let Se=bl;class q_ extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new ke(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new tl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends q_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class df extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class K_ extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eo=class eo{constructor(t,e,i,s,r,o,a,l,c,u,d,h,f,g,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,S,p)}set(t,e,i,s,r,o,a,l,c,u,d,h,f,g,S,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,S=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-S*c,e[9]=-a*l,e[2]=S-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,S=c*d;e[0]=h+S*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=S+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,S=c*d;e[0]=h-S*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=S-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,S=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,S=a*c;e[0]=l*u,e[4]=S-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-S*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,S=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z_,t,$_)}lookAt(t,e,i){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Xn.crossVectors(i,Ve),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Xn.crossVectors(i,Ve)),Xn.normalize(),js.crossVectors(Ve,Xn),s[0]=Xn.x,s[4]=js.x,s[8]=Ve.x,s[1]=Xn.y,s[5]=js.y,s[9]=Ve.y,s[2]=Xn.z,s[6]=js.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],S=i[6],p=i[10],m=i[14],v=i[3],E=i[7],y=i[11],w=i[15],T=s[0],P=s[4],x=s[8],A=s[12],L=s[1],R=s[5],U=s[9],W=s[13],Y=s[2],I=s[6],H=s[10],F=s[14],j=s[3],nt=s[7],ft=s[11],St=s[15];return r[0]=o*T+a*L+l*Y+c*j,r[4]=o*P+a*R+l*I+c*nt,r[8]=o*x+a*U+l*H+c*ft,r[12]=o*A+a*W+l*F+c*St,r[1]=u*T+d*L+h*Y+f*j,r[5]=u*P+d*R+h*I+f*nt,r[9]=u*x+d*U+h*H+f*ft,r[13]=u*A+d*W+h*F+f*St,r[2]=g*T+S*L+p*Y+m*j,r[6]=g*P+S*R+p*I+m*nt,r[10]=g*x+S*U+p*H+m*ft,r[14]=g*A+S*W+p*F+m*St,r[3]=v*T+E*L+y*Y+w*j,r[7]=v*P+E*R+y*I+w*nt,r[11]=v*x+E*U+y*H+w*ft,r[15]=v*A+E*W+y*F+w*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],S=t[7],p=t[11],m=t[15],v=l*f-c*h,E=a*f-c*d,y=a*h-l*d,w=o*f-c*u,T=o*h-l*u,P=o*d-a*u;return e*(S*v-p*E+m*y)-i*(g*v-p*w+m*T)+s*(g*E-S*w+m*P)-r*(g*y-S*T+p*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],S=t[13],p=t[14],m=t[15],v=e*a-i*o,E=e*l-s*o,y=e*c-r*o,w=i*l-s*a,T=i*c-r*a,P=s*c-r*l,x=u*S-d*g,A=u*p-h*g,L=u*m-f*g,R=d*p-h*S,U=d*m-f*S,W=h*m-f*p,Y=v*W-E*U+y*R+w*L-T*A+P*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return t[0]=(a*W-l*U+c*R)*I,t[1]=(s*U-i*W-r*R)*I,t[2]=(S*P-p*T+m*w)*I,t[3]=(h*T-d*P-f*w)*I,t[4]=(l*L-o*W-c*A)*I,t[5]=(e*W-s*L+r*A)*I,t[6]=(p*y-g*P-m*E)*I,t[7]=(u*P-h*y+f*E)*I,t[8]=(o*U-a*L+c*x)*I,t[9]=(i*L-e*U-r*x)*I,t[10]=(g*T-S*y+m*v)*I,t[11]=(d*y-u*T-f*v)*I,t[12]=(a*A-o*R-l*x)*I,t[13]=(e*R-i*A+s*x)*I,t[14]=(S*E-g*w-p*v)*I,t[15]=(u*w-d*E+h*v)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,S=o*u,p=o*d,m=a*d,v=l*c,E=l*u,y=l*d,w=i.x,T=i.y,P=i.z;return s[0]=(1-(S+m))*w,s[1]=(f+y)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(h+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+E)*P,s[9]=(p-v)*P,s[10]=(1-(h+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ii.set(s[0],s[1],s[2]).length();const a=Ii.set(s[4],s[5],s[6]).length(),l=Ii.set(s[8],s[9],s[10]).length();r<0&&(o=-o),on.copy(this);const c=1/o,u=1/a,d=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=yn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Gs)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yn,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===yn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===Gs)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};eo.prototype.isMatrix4=!0;let ae=eo;const Ii=new D,on=new ae,Z_=new D(0,0,0),$_=new D(1,1,1),Xn=new D,js=new D,Ve=new D,hu=new ae,du=new rs;class ni{constructor(t=0,e=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J_=0;const fu=new D,Li=new rs,Cn=new ae,Qs=new D,ds=new D,j_=new D,Q_=new rs,pu=new D(1,0,0),mu=new D(0,1,0),gu=new D(0,0,1),_u={type:"added"},tx={type:"removed"},Di={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Ie extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new D,e=new ni,i=new rs,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Vt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qs.copy(t):Qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ds,Qs,this.up):Cn.lookAt(Qs,ds,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Cn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_u),Di.child=t,this.dispatchEvent(Di),Di.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tx),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_u),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,j_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Q_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class se extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,i),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function ko(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=z_(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ko(o,r,t+1/3),this.g=ko(o,r,t),this.b=ko(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Qt.workingToColorSpace(Ue.copy(this),t),Math.round($t(Ue.r*255,0,255))*65536+Math.round($t(Ue.g*255,0,255))*256+Math.round($t(Ue.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=tn){Qt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,s=Ue.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(tr);const i=Io(Yn.h,tr.h,e),s=Io(Yn.s,tr.s,e),r=Io(Yn.l,tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new te;te.NAMES=ff;class nx extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const an=new D,Pn=new D,Bo=new D,In=new D,Ni=new D,Ui=new D,xu=new D,Ho=new D,Go=new D,zo=new D,Vo=new Se,Wo=new Se,Xo=new Se;class ln{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){an.subVectors(s,e),Pn.subVectors(i,e),Bo.subVectors(t,e);const o=an.dot(an),a=an.dot(Pn),l=an.dot(Bo),c=Pn.dot(Pn),u=Pn.dot(Bo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,i),Xo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(t,e,i,s){return an.subVectors(i,e),Pn.subVectors(t,e),an.cross(Pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),an.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,i),Ui.subVectors(r,i),Ho.subVectors(t,i);const l=Ni.dot(Ho),c=Ui.dot(Ho);if(l<=0&&c<=0)return e.copy(i);Go.subVectors(t,s);const u=Ni.dot(Go),d=Ui.dot(Go);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ni,o);zo.subVectors(t,r);const f=Ni.dot(zo),g=Ui.dot(zo);if(g>=0&&f<=g)return e.copy(r);const S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ui,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return xu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(xu,a);const m=1/(p+S+h);return o=S*m,a=h*m,e.copy(i).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ti{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),nr.subVectors(this.max,fs),Oi.subVectors(t.a,fs),Fi.subVectors(t.b,fs),ki.subVectors(t.c,fs),qn.subVectors(Fi,Oi),Kn.subVectors(ki,Fi),oi.subVectors(Oi,ki);let e=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-oi.y,oi.x,0];return!Yo(e,Oi,Fi,ki,nr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Oi,Fi,ki,nr))?!1:(ir.crossVectors(qn,Kn),e=[ir.x,ir.y,ir.z],Yo(e,Oi,Fi,ki,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,er=new Ti,Oi=new D,Fi=new D,ki=new D,qn=new D,Kn=new D,oi=new D,fs=new D,nr=new D,ir=new D,ai=new D;function Yo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ai.fromArray(n,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Te=new D,sr=new pt;let ix=0;class fn extends bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ix++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==su&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class pf extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mf extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const sx=new Ti,ps=new D,qo=new D;class os{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(qo)),this.expandByPoint(ps.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rx=0;const je=new ae,Ko=new Ie,Bi=new D,We=new Ti,ms=new Ti,we=new D;class Le extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k_(t)?mf:pf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(We.min,ms.min),We.expandByPoint(we),we.addVectors(We.max,ms.max),We.expandByPoint(we)):(We.expandByPoint(ms.min),We.expandByPoint(ms.max))}We.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),we.add(Bi)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new D,l[x]=new D;const c=new D,u=new D,d=new D,h=new pt,f=new pt,g=new pt,S=new D,p=new D;function m(x,A,L){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,L),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(S),a[A].add(S),a[L].add(S),l[x].add(p),l[A].add(p),l[L].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,A=v.length;x<A;++x){const L=v[x],R=L.start,U=L.count;for(let W=R,Y=R+U;W<Y;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const E=new D,y=new D,w=new D,T=new D;function P(x){w.fromBufferAttribute(s,x),T.copy(w);const A=a[x];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(T,A);const R=y.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,A=v.length;x<A;++x){const L=v[x],R=L.start,U=L.count;for(let W=R,Y=R+U;W<Y;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new fn(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ox=0;class as extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Zi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=La,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==La&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Dn=new D,Zo=new D,rr=new D,Zn=new D,$o=new D,or=new D,Jo=new D;class nl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=Zn.dot(this.direction),l=-Zn.dot(rr),c=Zn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const S=1/u;d*=S,h*=S,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zo).addScaledVector(rr,h),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,s,r){$o.subVectors(e,t),or.subVectors(i,t),Jo.crossVectors($o,or);let o=this.direction.dot(Jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(or.crossVectors(Zn,or));if(l<0)return null;const c=a*this.direction.dot($o.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(Jo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class po extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vu=new ae,ci=new nl,ar=new os,Mu=new D,cr=new D,lr=new D,ur=new D,jo=new D,hr=new D,Su=new D,dr=new D;class Ut extends Ie{constructor(t=new Le,e=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(jo.fromBufferAttribute(d,t),o?hr.addScaledVector(jo,u):hr.addScaledVector(jo.sub(e),u))}e.add(hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(ar.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ar,Mu)===null||ci.origin.distanceToSquared(Mu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),ci.copy(t.ray).applyMatrix4(vu),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const p=h[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=E;y<w;y+=3){const T=a.getX(y),P=a.getX(y+1),x=a.getX(y+2);s=fr(this,m,t,i,c,u,d,T,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let p=g,m=S;p<m;p+=3){const v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=fr(this,o,t,i,c,u,d,v,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const p=h[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=E;y<w;y+=3){const T=y,P=y+1,x=y+2;s=fr(this,m,t,i,c,u,d,T,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=g,m=S;p<m;p+=3){const v=p,E=p+1,y=p+2;s=fr(this,o,t,i,c,u,d,v,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ax(n,t,e,i,s,r,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;dr.copy(a),dr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:n}}function fr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,cr),n.getVertexPosition(l,lr),n.getVertexPosition(c,ur);const u=ax(n,t,e,i,cr,lr,ur,Su);if(u){const d=new D;ln.getBarycoord(Su,cr,lr,ur,d),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,d,new pt)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,d,new pt)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};ln.getNormal(cr,lr,ur,h.normal),u.face=h,u.barycoord=d}return u}class gf extends ke{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Pe,u=Pe,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yu extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new ae,Eu=new ae,pr=[],bu=new Ti,cx=new ae,gs=new Ut,_s=new os;class _i extends Ut{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yu(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hi),bu.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(bu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hi),_s.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(i),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),Eu.multiplyMatrices(i,Hi),gs.matrixWorld=Eu,gs.raycast(t,pr);for(let o=0,a=pr.length;o<a;o++){const l=pr[o];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gf(new Float32Array(s*this.count),s,this.count,Kc,hn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qo=new D,lx=new D,ux=new Vt;class hi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Qo.subVectors(i,e).cross(lx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ux.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new os,hx=new pt(.5,.5),mr=new D;class il{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],p=r[10],m=r[11],v=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,m-g,w-v).normalize(),s[1].setComponents(c+o,f+u,m+g,w+v).normalize(),s[2].setComponents(c+a,f+d,m+S,w+E).normalize(),s[3].setComponents(c-a,f-d,m-S,w-E).normalize(),i)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,f-h,m-p,w-y).normalize();else if(s[4].setComponents(c-l,f-h,m-p,w-y).normalize(),e===yn)s[5].setComponents(c+l,f+h,m+p,w+y).normalize();else if(e===Gs)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=hx.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jr=new D,jr=new D,Tu=new ae,xs=new nl,gr=new os,ta=new D,Au=new D;class rl extends Ie{constructor(t=new Le,e=new sl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Jr.fromBufferAttribute(e,s-1),jr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Jr.distanceTo(jr);t.setAttribute("lineDistance",new _e(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;Tu.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=f,p=g-1;S<p;S+=c){const m=u.getX(S),v=u.getX(S+1),E=_r(this,t,xs,l,m,v,S);E&&e.push(E)}if(this.isLineLoop){const S=u.getX(g-1),p=u.getX(f),m=_r(this,t,xs,l,S,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=f,p=g-1;S<p;S+=c){const m=_r(this,t,xs,l,S,S+1,S);m&&e.push(m)}if(this.isLineLoop){const S=_r(this,t,xs,l,g-1,f,g-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _r(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Jr.fromBufferAttribute(a,s),jr.fromBufferAttribute(a,r),e.distanceSqToSegment(Jr,jr,ta,Au)>i)return;ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:Au.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class dx extends rl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class _f extends ke{constructor(t=[],e=Mi,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qi extends ke{constructor(t,e,i=Tn,s,r,o,a=Pe,l=Pe,c,u=Hn,d=1){if(u!==Hn&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fx extends Qi{constructor(t,e=Tn,i=Mi,s,r,o=Pe,a=Pe,l,c=Hn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xf extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xe extends Le{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function g(S,p,m,v,E,y,w,T,P,x,A){const L=y/P,R=w/x,U=y/2,W=w/2,Y=T/2,I=P+1,H=x+1;let F=0,j=0;const nt=new D;for(let ft=0;ft<H;ft++){const St=ft*R-W;for(let At=0;At<I;At++){const Yt=At*L-U;nt[S]=Yt*v,nt[p]=St*E,nt[m]=Y,c.push(nt.x,nt.y,nt.z),nt[S]=0,nt[p]=0,nt[m]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),d.push(At/P),d.push(1-ft/x),F+=1}}for(let ft=0;ft<x;ft++)for(let St=0;St<P;St++){const At=h+St+I*ft,Yt=h+St+I*(ft+1),ee=h+(St+1)+I*(ft+1),Ht=h+(St+1)+I*ft;l.push(At,Yt,Ht),l.push(Yt,ee,Ht),j+=6}a.addGroup(f,j,A),f+=j,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yi extends Le{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const S=[],p=i/2;let m=0;v(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function v(){const y=new D,w=new D;let T=0;const P=(e-t)/i;for(let x=0;x<=r;x++){const A=[],L=x/r,R=L*(e-t)+t;for(let U=0;U<=s;U++){const W=U/s,Y=W*l+a,I=Math.sin(Y),H=Math.cos(Y);w.x=R*I,w.y=-L*i+p,w.z=R*H,d.push(w.x,w.y,w.z),y.set(I,P,H).normalize(),h.push(y.x,y.y,y.z),f.push(W,1-L),A.push(g++)}S.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){const L=S[A][x],R=S[A+1][x],U=S[A+1][x+1],W=S[A][x+1];(t>0||A!==0)&&(u.push(L,R,W),T+=3),(e>0||A!==r-1)&&(u.push(R,U,W),T+=3)}c.addGroup(m,T,0),m+=T}function E(y){const w=g,T=new pt,P=new D;let x=0;const A=y===!0?t:e,L=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*L,0),h.push(0,L,0),f.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const Y=U/s*l+a,I=Math.cos(Y),H=Math.sin(Y);P.x=A*H,P.y=p*L,P.z=A*I,d.push(P.x,P.y,P.z),h.push(0,L,0),T.x=I*.5+.5,T.y=H*.5*L+.5,f.push(T.x,T.y),g++}for(let U=0;U<s;U++){const W=w+U,Y=R+U;y===!0?u.push(Y,Y+1,W):u.push(Y+1,Y,W),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zs extends yi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const E=new D,y=new D,w=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],y),f(e[T+2],w),l(E,y,w,v)}function l(v,E,y,w){const T=w+1,P=[];for(let x=0;x<=T;x++){P[x]=[];const A=v.clone().lerp(y,x/T),L=E.clone().lerp(y,x/T),R=T-x;for(let U=0;U<=R;U++)U===0&&x===T?P[x][U]=A:P[x][U]=A.clone().lerp(L,U/R)}for(let x=0;x<T;x++)for(let A=0;A<2*(T-x)-1;A++){const L=Math.floor(A/2);A%2===0?(h(P[x][L+1]),h(P[x+1][L]),h(P[x][L])):(h(P[x][L+1]),h(P[x+1][L+1]),h(P[x+1][L]))}}function c(v){const E=new D;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(v),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const v=new D;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const y=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(y,1-w)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const E=o[v+0],y=o[v+2],w=o[v+4],T=Math.max(E,y,w),P=Math.min(E,y,w);T>.9&&P<.1&&(E<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,E){const y=v*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const v=new D,E=new D,y=new D,w=new D,T=new pt,P=new pt,x=new pt;for(let A=0,L=0;A<r.length;A+=9,L+=6){v.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),T.set(o[L+0],o[L+1]),P.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),w.copy(v).add(E).add(y).divideScalar(3);const R=p(w);S(T,L+0,v,R),S(P,L+2,E,R),S(x,L+4,y,R)}}function S(v,E,y,w){w<0&&v.x===1&&(o[E]=v.x-1),y.x===0&&y.z===0&&(o[E]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.vertices,t.indices,t.radius,t.detail)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,s=[],r=[],o=[],a=new D,l=new ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class al extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class px extends al{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ru=new D,wu=new D,ea=new cl,na=new cl,ia=new cl;class mx extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wu.subVectors(s[0],s[1]).add(s[0]),c=wu);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ru.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),g<1e-4&&(g=S),p<1e-4&&(p=S),ea.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,S,p),na.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,S,p),ia.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,S,p)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),na.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),ia.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(ea.calc(l),na.calc(l),ia.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function gx(n,t){const e=1-n;return e*e*t}function _x(n,t){return 2*(1-n)*n*t}function xx(n,t){return n*n*t}function Cs(n,t,e,i){return gx(n,t)+_x(n,e)+xx(n,i)}function vx(n,t){const e=1-n;return e*e*e*t}function Mx(n,t){const e=1-n;return 3*e*e*n*t}function Sx(n,t){return 3*(1-n)*n*n*t}function yx(n,t){return n*n*n*t}function Ps(n,t,e,i,s){return vx(n,t)+Mx(n,e)+Sx(n,i)+yx(n,s)}class vf extends Rn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ex extends Rn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mf extends Rn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bx extends Rn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends Rn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tx extends Rn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Cu(a,l.x,c.x,u.x,d.x),Cu(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Sc=Object.freeze({__proto__:null,ArcCurve:px,CatmullRomCurve3:mx,CubicBezierCurve:vf,CubicBezierCurve3:Ex,EllipseCurve:al,LineCurve:Mf,LineCurve3:bx,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:Tx,SplineCurve:yf});class Ax extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}}class Pu extends Ax{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Mf(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Sf(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new vf(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new yf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new al(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ef extends Pu{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Pu().fromJSON(s))}return this}}function Rx(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=bf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Lx(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let u=a,d=l;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Vs(r,o,e,a,l,c,0),o}function bf(n,t,e,i,s){let r;if(s===Vx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Iu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Iu(o/i|0,n[o],n[o+1],r);return r&&ts(r,r.next)&&(Xs(r),r=r.next),r}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ts(e,e.next)||ve(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Fx(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Cx(n,i,s,r):wx(n)){t.push(l.i,n.i,c.i),Xs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Px(Ei(n),t),Vs(n,t,e,i,s,r,2)):o===2&&Ix(n,t,e,i,s,r):Vs(Ei(n),t,e,i,s,r,1);break}}}function wx(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Ts(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cx(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),S=Math.max(a,l,c),p=Math.max(u,d,h),m=yc(f,g,t,e,i),v=yc(S,p,t,e,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=m&&y&&y.z<=v;){if(E.x>=f&&E.x<=S&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ts(a,u,l,d,c,h,E.x,E.y)&&ve(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=S&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Ts(a,u,l,d,c,h,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=S&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ts(a,u,l,d,c,h,E.x,E.y)&&ve(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=S&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Ts(a,u,l,d,c,h,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Px(n,t){let e=n;do{const i=e.prev,s=e.next.next;!ts(i,s)&&Af(i,e,e.next,s)&&Ws(i,s)&&Ws(s,i)&&(t.push(i.i,e.i,s.i),Xs(e),Xs(e.next),e=n=s),e=e.next}while(e!==n);return Ei(e)}function Ix(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hx(o,a)){let l=Rf(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Vs(o,t,e,i,s,r,0),Vs(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Lx(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=bf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Bx(c))}s.sort(Dx);for(let r=0;r<s.length;r++)e=Nx(s[r],e);return e}function Dx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Nx(n,t){const e=Ux(n,t);if(!e)return t;const i=Rf(e,n);return Ei(i,i.next),Ei(e,e.next)}function Ux(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(ts(n,e))return e;do{if(ts(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Tf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Ws(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Ox(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Ox(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function Fx(n,t,e,i){let s=n;do s.z===0&&(s.z=yc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kx(s)}function kx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function yc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Bx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Tf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ts(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Tf(n,t,e,i,s,r,o,a)}function Hx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Gx(n,t)&&(Ws(n,t)&&Ws(t,n)&&zx(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||ts(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ts(n,t){return n.x===t.x&&n.y===t.y}function Af(n,t,e,i){const s=vr(ve(n,t,e)),r=vr(ve(n,t,i)),o=vr(ve(e,i,n)),a=vr(ve(e,i,t));return!!(s!==r&&o!==a||s===0&&xr(n,e,t)||r===0&&xr(n,i,t)||o===0&&xr(e,n,i)||a===0&&xr(e,t,i))}function xr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function vr(n){return n>0?1:n<0?-1:0}function Gx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Af(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ws(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function zx(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Rf(n,t){const e=Ec(n.i,n.x,n.y),i=Ec(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Iu(n,t,e,i){const s=Ec(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ec(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Wx{static triangulate(t,e,i=2){return Rx(t,e,i)}}class Yi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Yi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Lu(t),Du(i,t);let o=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Du(i,e[l]);const a=Wx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Lu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Du(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ll extends Le{constructor(t=new Ef([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Xx;let E,y=!1,w,T,P,x;if(m){E=m.getSpacedPoints(u),y=!0,h=!1;const J=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,J),T=new D,P=new D,x=new D}h||(p=0,f=0,g=0,S=0);const A=a.extractPoints(c);let L=A.shape;const R=A.holes;if(!Yi.isClockWise(L)){L=L.reverse();for(let J=0,it=R.length;J<it;J++){const Q=R[J];Yi.isClockWise(Q)&&(R[J]=Q.reverse())}}function W(J){const Q=10000000000000001e-36;let xt=J[0];for(let dt=1;dt<=J.length;dt++){const kt=dt%J.length,C=J[kt],Gt=C.x-xt.x,Rt=C.y-xt.y,Bt=Gt*Gt+Rt*Rt,st=Math.max(Math.abs(C.x),Math.abs(C.y),Math.abs(xt.x),Math.abs(xt.y)),oe=Q*st*st;if(Bt<=oe){J.splice(kt,1),dt--;continue}xt=C}}W(L),R.forEach(W);const Y=R.length,I=L;for(let J=0;J<Y;J++){const it=R[J];L=L.concat(it)}function H(J,it,Q){return it||jt("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,Q)}const F=L.length;function j(J,it,Q){let xt,dt,kt;const C=J.x-it.x,Gt=J.y-it.y,Rt=Q.x-J.x,Bt=Q.y-J.y,st=C*C+Gt*Gt,oe=C*Bt-Gt*Rt;if(Math.abs(oe)>Number.EPSILON){const b=Math.sqrt(st),_=Math.sqrt(Rt*Rt+Bt*Bt),k=it.x-Gt/b,K=it.y+C/b,tt=Q.x-Bt/_,rt=Q.y+Rt/_,lt=((tt-k)*Bt-(rt-K)*Rt)/(C*Bt-Gt*Rt);xt=k+C*lt-J.x,dt=K+Gt*lt-J.y;const X=xt*xt+dt*dt;if(X<=2)return new pt(xt,dt);kt=Math.sqrt(X/2)}else{let b=!1;C>Number.EPSILON?Rt>Number.EPSILON&&(b=!0):C<-Number.EPSILON?Rt<-Number.EPSILON&&(b=!0):Math.sign(Gt)===Math.sign(Bt)&&(b=!0),b?(xt=-Gt,dt=C,kt=Math.sqrt(st)):(xt=C,dt=Gt,kt=Math.sqrt(st/2))}return new pt(xt/kt,dt/kt)}const nt=[];for(let J=0,it=I.length,Q=it-1,xt=J+1;J<it;J++,Q++,xt++)Q===it&&(Q=0),xt===it&&(xt=0),nt[J]=j(I[J],I[Q],I[xt]);const ft=[];let St,At=nt.concat();for(let J=0,it=Y;J<it;J++){const Q=R[J];St=[];for(let xt=0,dt=Q.length,kt=dt-1,C=xt+1;xt<dt;xt++,kt++,C++)kt===dt&&(kt=0),C===dt&&(C=0),St[xt]=j(Q[xt],Q[kt],Q[C]);ft.push(St),At=At.concat(St)}let Yt;if(p===0)Yt=Yi.triangulateShape(I,R);else{const J=[],it=[];for(let Q=0;Q<p;Q++){const xt=Q/p,dt=f*Math.cos(xt*Math.PI/2),kt=g*Math.sin(xt*Math.PI/2)+S;for(let C=0,Gt=I.length;C<Gt;C++){const Rt=H(I[C],nt[C],kt);Ct(Rt.x,Rt.y,-dt),xt===0&&J.push(Rt)}for(let C=0,Gt=Y;C<Gt;C++){const Rt=R[C];St=ft[C];const Bt=[];for(let st=0,oe=Rt.length;st<oe;st++){const b=H(Rt[st],St[st],kt);Ct(b.x,b.y,-dt),xt===0&&Bt.push(b)}xt===0&&it.push(Bt)}}Yt=Yi.triangulateShape(J,it)}const ee=Yt.length,Ht=g+S;for(let J=0;J<F;J++){const it=h?H(L[J],At[J],Ht):L[J];y?(P.copy(w.normals[0]).multiplyScalar(it.x),T.copy(w.binormals[0]).multiplyScalar(it.y),x.copy(E[0]).add(P).add(T),Ct(x.x,x.y,x.z)):Ct(it.x,it.y,0)}for(let J=1;J<=u;J++)for(let it=0;it<F;it++){const Q=h?H(L[it],At[it],Ht):L[it];y?(P.copy(w.normals[J]).multiplyScalar(Q.x),T.copy(w.binormals[J]).multiplyScalar(Q.y),x.copy(E[J]).add(P).add(T),Ct(x.x,x.y,x.z)):Ct(Q.x,Q.y,d/u*J)}for(let J=p-1;J>=0;J--){const it=J/p,Q=f*Math.cos(it*Math.PI/2),xt=g*Math.sin(it*Math.PI/2)+S;for(let dt=0,kt=I.length;dt<kt;dt++){const C=H(I[dt],nt[dt],xt);Ct(C.x,C.y,d+Q)}for(let dt=0,kt=R.length;dt<kt;dt++){const C=R[dt];St=ft[dt];for(let Gt=0,Rt=C.length;Gt<Rt;Gt++){const Bt=H(C[Gt],St[Gt],xt);y?Ct(Bt.x,Bt.y+E[u-1].y,E[u-1].x+Q):Ct(Bt.x,Bt.y,d+Q)}}}$(),gt();function $(){const J=s.length/3;if(h){let it=0,Q=F*it;for(let xt=0;xt<ee;xt++){const dt=Yt[xt];Ot(dt[2]+Q,dt[1]+Q,dt[0]+Q)}it=u+p*2,Q=F*it;for(let xt=0;xt<ee;xt++){const dt=Yt[xt];Ot(dt[0]+Q,dt[1]+Q,dt[2]+Q)}}else{for(let it=0;it<ee;it++){const Q=Yt[it];Ot(Q[2],Q[1],Q[0])}for(let it=0;it<ee;it++){const Q=Yt[it];Ot(Q[0]+F*u,Q[1]+F*u,Q[2]+F*u)}}i.addGroup(J,s.length/3-J,0)}function gt(){const J=s.length/3;let it=0;ot(I,it),it+=I.length;for(let Q=0,xt=R.length;Q<xt;Q++){const dt=R[Q];ot(dt,it),it+=dt.length}i.addGroup(J,s.length/3-J,1)}function ot(J,it){let Q=J.length;for(;--Q>=0;){const xt=Q;let dt=Q-1;dt<0&&(dt=J.length-1);for(let kt=0,C=u+p*2;kt<C;kt++){const Gt=F*kt,Rt=F*(kt+1),Bt=it+xt+Gt,st=it+dt+Gt,oe=it+dt+Rt,b=it+xt+Rt;Dt(Bt,st,oe,b)}}}function Ct(J,it,Q){l.push(J),l.push(it),l.push(Q)}function Ot(J,it,Q){ne(J),ne(it),ne(Q);const xt=s.length/3,dt=v.generateTopUV(i,s,xt-3,xt-2,xt-1);Ft(dt[0]),Ft(dt[1]),Ft(dt[2])}function Dt(J,it,Q,xt){ne(J),ne(it),ne(xt),ne(it),ne(Q),ne(xt);const dt=s.length/3,kt=v.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);Ft(kt[0]),Ft(kt[1]),Ft(kt[3]),Ft(kt[1]),Ft(kt[2]),Ft(kt[3])}function ne(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Ft(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Yx(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sc[s.type]().fromJSON(s)),new ll(i,t.options)}}const Xx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],S=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-d),new pt(h,1-g),new pt(S,1-m)]:[new pt(a,1-l),new pt(u,1-d),new pt(f,1-g),new pt(p,1-m)]}};function Yx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Is extends ol{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Is(t.radius,t.detail)}}class cs extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],S=[],p=[];for(let m=0;m<u;m++){const v=m*h-o;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-v,0),S.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const E=v+c*m,y=v+c*(m+1),w=v+1+c*(m+1),T=v+1+c*m;f.push(E,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(S,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class ul extends Le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,h=new D,f=[],g=[],S=[],p=[];for(let m=0;m<=i;m++){const v=[],E=m/i;let y=0;m===0&&o===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const T=w/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),p.push(T+y,1-E),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const E=u[m][v+1],y=u[m][v],w=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&f.push(E,y,T),(m!==i-1||l<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(S,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mo extends Le{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new D,f=new D,g=new D;for(let S=0;S<=i;S++){const p=o+S/i*a;for(let m=0;m<=s;m++){const v=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(S/i)}}for(let S=1;S<=i;S++)for(let p=1;p<=s;p++){const m=(s+1)*S+p-1,v=(s+1)*(S-1)+p-1,E=(s+1)*(S-1)+p,y=(s+1)*S+p;l.push(m,v,y),l.push(v,E,y)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function es(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Nu(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Nu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=es(n[e]);for(const s in i)t[s]=i[s]}return t}function Nu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Kx={clone:es,merge:Fe};var Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=qx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jx extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ce extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jx extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qx extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cf extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const sa=new ae,Uu=new D,Ou=new D;class tv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Gs||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mr=new D,Sr=new rs,_n=new D;class Pf extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mr,Sr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,Sr,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Mr,Sr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,Sr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new D,Fu=new pt,ku=new pt;class en extends Pf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,ku),e.subVectors(ku,Fu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class hl extends Pf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ev extends tv{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends Cf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new ev}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class iv extends Cf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gi=-90,zi=1;class sv extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Gi,zi,t,e);s.layers=this.layers,this.add(s);const r=new en(Gi,zi,t,e);r.layers=this.layers,this.add(r);const o=new en(Gi,zi,t,e);o.layers=this.layers,this.add(o);const a=new en(Gi,zi,t,e);a.layers=this.layers,this.add(a);const l=new en(Gi,zi,t,e);l.layers=this.layers,this.add(l);const c=new en(Gi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rv extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Bu=new ae;class ov{constructor(t,e,i=0,s=1/0){this.ray=new nl(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(t,e=!0,i=[]){return bc(t,this,i,e),i.sort(Hu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,i,e);return i.sort(Hu),i}}function Hu(n,t){return n.distance-t.distance}function bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}const Tl=class Tl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Tl.prototype.isMatrix2=!0;let Gu=Tl;function zu(n,t,e,i){const s=av(i);switch(e){case lf:return n*t;case Kc:return n*t/s.components*s.byteLength;case Zc:return n*t/s.components*s.byteLength;case Si:return n*t*2/s.components*s.byteLength;case $c:return n*t*2/s.components*s.byteLength;case uf:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case Jc:return n*t*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Or:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(n,16)*Math.max(t,8)/4;case za:case Wa:return Math.max(n,8)*Math.max(t,8)/2;case Ya:case qa:case Za:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Yr:case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case dc:case fc:case pc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case mc:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qr:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function av(n){switch(n){case Ye:case rf:return{byteLength:1,components:1};case Bs:case of:case Bn:return{byteLength:2,components:1};case Yc:case qc:return{byteLength:2,components:4};case Tn:case Xc:case hn:return{byteLength:4,components:1};case af:case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function If(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const S=d[f];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mv=`#ifdef USE_AOMAP
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
#endif`,gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_v=`#ifdef USE_BATCHING
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
#endif`,xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ev=`#ifdef USE_BUMPMAP
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nv=`vec3 transformedNormal = objectNormal;
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
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$v=`#ifdef USE_GRADIENTMAP
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
}`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eM=`#ifdef USE_ENVMAP
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
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
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
#endif`,aM=`uniform sampler2D dfgLUT;
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
}`,cM=`
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
#endif`,lM=`#if defined( RE_IndirectDiffuse )
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
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
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,xS=`#define DISTANCE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,yS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,bS=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,wS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,IS=`#define PHONG
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
}`,LS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,NS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,OS=`#define TOON
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
}`,FS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,zS=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:lv,alphahash_pars_fragment:uv,alphamap_fragment:hv,alphamap_pars_fragment:dv,alphatest_fragment:fv,alphatest_pars_fragment:pv,aomap_fragment:mv,aomap_pars_fragment:gv,batching_pars_vertex:_v,batching_vertex:xv,begin_vertex:vv,beginnormal_vertex:Mv,bsdfs:Sv,iridescence_fragment:yv,bumpmap_pars_fragment:Ev,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:Av,clipping_planes_vertex:Rv,color_fragment:wv,color_pars_fragment:Cv,color_pars_vertex:Pv,color_vertex:Iv,common:Lv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Uv,displacementmap_vertex:Ov,emissivemap_fragment:Fv,emissivemap_pars_fragment:kv,colorspace_fragment:Bv,colorspace_pars_fragment:Hv,envmap_fragment:Gv,envmap_common_pars_fragment:zv,envmap_pars_fragment:Vv,envmap_pars_vertex:Wv,envmap_physical_pars_fragment:eM,envmap_vertex:Xv,fog_vertex:Yv,fog_pars_vertex:qv,fog_fragment:Kv,fog_pars_fragment:Zv,gradientmap_pars_fragment:$v,lightmap_pars_fragment:Jv,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:tM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:sM,lights_phong_pars_fragment:rM,lights_physical_fragment:oM,lights_physical_pars_fragment:aM,lights_fragment_begin:cM,lights_fragment_maps:lM,lights_fragment_end:uM,lightprobes_pars_fragment:hM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:_M,map_particle_fragment:xM,map_particle_pars_fragment:vM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:SM,morphinstance_vertex:yM,morphcolor_vertex:EM,morphnormal_vertex:bM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:RM,normal_fragment_maps:wM,normal_pars_fragment:CM,normal_pars_vertex:PM,normal_vertex:IM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:OM,opaque_fragment:FM,packing:kM,premultiplied_alpha_fragment:BM,project_vertex:HM,dithering_fragment:GM,dithering_pars_fragment:zM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:YM,shadowmap_vertex:qM,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:$M,skinning_vertex:JM,skinnormal_vertex:jM,specularmap_fragment:QM,specularmap_pars_fragment:tS,tonemapping_fragment:eS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:sS,uv_pars_fragment:rS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:cS,background_vert:lS,background_frag:uS,backgroundCube_vert:hS,backgroundCube_frag:dS,cube_vert:fS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distance_vert:_S,distance_frag:xS,equirect_vert:vS,equirect_frag:MS,linedashed_vert:SS,linedashed_frag:yS,meshbasic_vert:ES,meshbasic_frag:bS,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:RS,meshmatcap_frag:wS,meshnormal_vert:CS,meshnormal_frag:PS,meshphong_vert:IS,meshphong_frag:LS,meshphysical_vert:DS,meshphysical_frag:NS,meshtoon_vert:US,meshtoon_frag:OS,points_vert:FS,points_frag:kS,shadow_vert:BS,shadow_frag:HS,sprite_vert:GS,sprite_frag:zS},mt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Mn={basic:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Fe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Fe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new te(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Fe([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Fe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Fe([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Fe([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Fe([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Fe([mt.lights,mt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Mn.physical={uniforms:Fe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const yr={r:0,b:0,g:0},VS=new ae,Lf=new Vt;Lf.set(-1,0,0,0,1,0,0,0,1);function WS(n,t,e,i,s,r){const o=new te(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(v){let E=!1;const y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(v,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===fo)?(c===void 0&&(c=new Ut(new xe(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:es(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lf),c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ut(new cs(2,2),new An({name:"BackgroundMaterial",uniforms:es(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(yr,wf(n)),e.buffers.color.setClear(yr.r,yr.g,yr.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:S,dispose:m}}function XS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(R,U,W,Y,I){let H=!1;const F=d(R,Y,W,U);r!==F&&(r=F,c(r.object)),H=f(R,Y,W,I),H&&g(R,Y,W,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(R,U,W,Y),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,U,W,Y){const I=Y.wireframe===!0;let H=i[U.id];H===void 0&&(H={},i[U.id]=H);const F=R.isInstancedMesh===!0?R.id:0;let j=H[F];j===void 0&&(j={},H[F]=j);let nt=j[W.id];nt===void 0&&(nt={},j[W.id]=nt);let ft=nt[I];return ft===void 0&&(ft=h(l()),nt[I]=ft),ft}function h(R){const U=[],W=[],Y=[];for(let I=0;I<e;I++)U[I]=0,W[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:Y,object:R,attributes:{},index:null}}function f(R,U,W,Y){const I=r.attributes,H=U.attributes;let F=0;const j=W.getAttributes();for(const nt in j)if(j[nt].location>=0){const St=I[nt];let At=H[nt];if(At===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(At=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(At=R.instanceColor)),St===void 0||St.attribute!==At||At&&St.data!==At.data)return!0;F++}return r.attributesNum!==F||r.index!==Y}function g(R,U,W,Y){const I={},H=U.attributes;let F=0;const j=W.getAttributes();for(const nt in j)if(j[nt].location>=0){let St=H[nt];St===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(St=R.instanceColor));const At={};At.attribute=St,St&&St.data&&(At.data=St.data),I[nt]=At,F++}r.attributes=I,r.attributesNum=F,r.index=Y}function S(){const R=r.newAttributes;for(let U=0,W=R.length;U<W;U++)R[U]=0}function p(R){m(R,0)}function m(R,U){const W=r.newAttributes,Y=r.enabledAttributes,I=r.attributeDivisors;W[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),I[R]!==U&&(n.vertexAttribDivisor(R,U),I[R]=U)}function v(){const R=r.newAttributes,U=r.enabledAttributes;for(let W=0,Y=U.length;W<Y;W++)U[W]!==R[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function E(R,U,W,Y,I,H,F){F===!0?n.vertexAttribIPointer(R,U,W,I,H):n.vertexAttribPointer(R,U,W,Y,I,H)}function y(R,U,W,Y){S();const I=Y.attributes,H=W.getAttributes(),F=U.defaultAttributeValues;for(const j in H){const nt=H[j];if(nt.location>=0){let ft=I[j];if(ft===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),ft!==void 0){const St=ft.normalized,At=ft.itemSize,Yt=t.get(ft);if(Yt===void 0)continue;const ee=Yt.buffer,Ht=Yt.type,$=Yt.bytesPerElement,gt=Ht===n.INT||Ht===n.UNSIGNED_INT||ft.gpuType===Xc;if(ft.isInterleavedBufferAttribute){const ot=ft.data,Ct=ot.stride,Ot=ft.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<nt.locationSize;Dt++)m(nt.location+Dt,ot.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<nt.locationSize;Dt++)p(nt.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Dt=0;Dt<nt.locationSize;Dt++)E(nt.location+Dt,At/nt.locationSize,Ht,St,Ct*$,(Ot+At/nt.locationSize*Dt)*$,gt)}else{if(ft.isInstancedBufferAttribute){for(let ot=0;ot<nt.locationSize;ot++)m(nt.location+ot,ft.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ot=0;ot<nt.locationSize;ot++)p(nt.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let ot=0;ot<nt.locationSize;ot++)E(nt.location+ot,At/nt.locationSize,Ht,St,At*$,At/nt.locationSize*ot*$,gt)}}else if(F!==void 0){const St=F[j];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(nt.location,St);break;case 3:n.vertexAttrib3fv(nt.location,St);break;case 4:n.vertexAttrib4fv(nt.location,St);break;default:n.vertexAttrib1fv(nt.location,St)}}}}v()}function w(){A();for(const R in i){const U=i[R];for(const W in U){const Y=U[W];for(const I in Y){const H=Y[I];for(const F in H)u(H[F].object),delete H[F];delete Y[I]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const W in U){const Y=U[W];for(const I in Y){const H=Y[I];for(const F in H)u(H[F].object),delete H[F];delete Y[I]}}delete i[R.id]}function P(R){for(const U in i){const W=i[U];for(const Y in W){const I=W[Y];if(I[R.id]===void 0)continue;const H=I[R.id];for(const F in H)u(H[F].object),delete H[F];delete I[R.id]}}}function x(R){for(const U in i){const W=i[U],Y=R.isInstancedMesh===!0?R.id:0,I=W[Y];if(I!==void 0){for(const H in I){const F=I[H];for(const j in F)u(F[j].object),delete F[j];delete I[H]}delete W[Y],Object.keys(W).length===0&&delete i[U]}}}function A(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function YS(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==dn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ye&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hn&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:T}}function KS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new hi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:i,E=v*4;let y=m.clippingState||null;l.value=y,y=u(g,h,E,f);for(let w=0;w!==E;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,g!==!0||p===null){const m=f+S*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==S;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}const Qn=4,Vu=[.125,.215,.35,.446,.526,.582],fi=20,ZS=256,vs=new hl,Wu=new te;let ra=null,oa=0,aa=0,ca=!1;const $S=new D;class Xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=$S}=r;ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=ca,t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Bn,format:dn,colorSpace:Kr,depthBuffer:!1},s=Yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JS(r)),this._blurMaterial=QS(r,t,e),this._ggxMaterial=jS(r,t,e)}return s}_compileMaterial(t){const e=new Ut(new Le,t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,i,s,r){const l=new en(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Wu),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new xe,new po({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let m=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,m=!0):(p.color.copy(Wu),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;Vi(s,y*w,E>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(S,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Mi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vi(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,vs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[i],p=3*S*(i>g-Qn?i-g+Qn:0),m=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Vi(r,p,m,3*S,2*S),s.setRenderTarget(r),s.render(a,vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Vi(t,p,m,3*S,2*S),s.setRenderTarget(t),s.render(a,vs)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),S=r/g,p=isFinite(r)?1+Math.floor(u*S):fi;p>fi&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const m=[];let v=0;for(let P=0;P<fi;++P){const x=P/S,A=Math.exp(-x*x/2);m.push(A),P===0?v+=A:P<p&&(v+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const y=this._sizeLods[s],w=3*y*(s>E-Qn?s-E+Qn:0),T=4*(this._cubeSize-y);Vi(e,w,T,3*y,2*y),l.setRenderTarget(e),l.render(d,vs)}}function JS(n){const t=[],e=[],i=[];let s=n;const r=n-Qn+1+Vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Qn?l=Vu[o-n+Qn-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,S=3,p=2,m=1,v=new Float32Array(S*g*f),E=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,x=T>2?0:-1,A=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];v.set(A,S*g*T),E.set(h,p*g*T);const L=[T,T,T,T,T,T];y.set(L,m*g*T)}const w=new Le;w.setAttribute("position",new fn(v,S)),w.setAttribute("uv",new fn(E,p)),w.setAttribute("faceIndex",new fn(y,m)),i.push(new Ut(w,null)),s>Qn&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Yu(n,t,e){const i=new bn(n,t,e);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vi(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jS(n,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function QS(n,t,e){const i=new Float32Array(fi),s=new D(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:go(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function qu(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ku(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}class Df extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _f(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Fn});r.uniforms.tEquirect.value=e;const o=new Ut(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=Oe),new sv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function ty(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ro||f===wo)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new Df(g.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Ro||f===wo,S=f===Mi||f===ji;if(g||S){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Xu(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return g&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new Xu(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===Ro?h.mapping=Mi:f===wo&&(h.mapping=ji),h}function l(h){let f=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ey(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&vc("WebGLRenderer: "+i+" extension not supported."),s}}}function ny(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(f!==null){const v=f.array;S=f.version;for(let E=0,y=v.length;E<y;E+=3){const w=v[E+0],T=v[E+1],P=v[E+2];h.push(w,T,T,P,P,w)}}else{const v=g.array;S=g.version;for(let E=0,y=v.length/3-1;E<y;E+=3){const w=E+0,T=E+1,P=E+2;h.push(w,T,T,P,P,w)}}const p=new(g.count>=65535?mf:pf)(h,1);p.version=S;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function iy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let S=0;for(let p=0;p<f;p++)S+=h[p];e.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ry(n,t,e){const i=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var f=L;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),p===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*T*4*d),x=new df(P,w,T,d);x.type=hn,x.needsUpdate=!0;const A=y*4;for(let R=0;R<d;R++){const U=m[R],W=v[R],Y=E[R],I=w*T*4*R;for(let H=0;H<U.count;H++){const F=H*A;g===!0&&(s.fromBufferAttribute(U,H),P[I+F+0]=s.x,P[I+F+1]=s.y,P[I+F+2]=s.z,P[I+F+3]=0),S===!0&&(s.fromBufferAttribute(W,H),P[I+F+4]=s.x,P[I+F+5]=s.y,P[I+F+6]=s.z,P[I+F+7]=0),p===!0&&(s.fromBufferAttribute(Y,H),P[I+F+8]=s.x,P[I+F+9]=s.y,P[I+F+10]=s.z,P[I+F+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new pt(w,T)},i.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function oy(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const ay={[$d]:"LINEAR_TONE_MAPPING",[Jd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[ef]:"AGX_TONE_MAPPING",[nf]:"NEUTRAL_TONE_MAPPING",[tf]:"CUSTOM_TONE_MAPPING"};function cy(n,t,e,i,s){const r=new bn(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Qi(t,e):void 0}),o=new bn(t,e,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),a=new Le;a.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new _e([0,2,0,0,2,0],2));const l=new Jx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ut(a,l),u=new hl(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,S=null,p=[],m=!1;this.setSize=function(v,E){r.setSize(v,E),o.setSize(v,E);for(let y=0;y<p.length;y++){const w=p[y];w.setSize&&w.setSize(v,E)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let w=0;w<p.length;w++){const T=p[w];T.setSize&&T.setSize(E,y)}},this.begin=function(v,E){if(f||v.toneMapping===En&&p.length===0)return!1;if(S=E,E!==null){const y=E.width,w=E.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return m===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=En,!0},this.hasRenderPass=function(){return m},this.end=function(v,E){v.toneMapping=g,f=!0;let y=r,w=o;for(let T=0;T<p.length;T++){const P=p[T];if(P.enabled!==!1&&(P.render(v,w,y,E),P.needsSwap!==!1)){const x=y;y=w,w=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},Qt.getTransfer(d)===le&&(l.defines.SRGB_TRANSFER="");const T=ay[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(S),v.render(c,u),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Nf=new ke,Tc=new Qi(1,1),Uf=new df,Of=new K_,Ff=new _f,Zu=[],$u=[],Ju=new Float32Array(16),ju=new Float32Array(9),Qu=new Float32Array(4);function ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _o(n,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ly(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),Re(e,i)}}function py(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;ju.set(i),n.uniformMatrix3fv(this.addr,!1,ju),Re(e,i)}}function my(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),Re(e,i)}}function gy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function My(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function by(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=e.isReversedDepthBuffer()?Qc:jc,r=Tc):r=Nf,e.setTexture2D(t||r,s)}function Ty(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Of,s)}function Ay(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ff,s)}function Ry(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Uf,s)}function wy(n){switch(n){case 5126:return ly;case 35664:return uy;case 35665:return hy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return My;case 36294:return Sy;case 36295:return yy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}function Cy(n,t){n.uniform1fv(this.addr,t)}function Py(n,t){const e=ls(t,this.size,2);n.uniform2fv(this.addr,e)}function Iy(n,t){const e=ls(t,this.size,3);n.uniform3fv(this.addr,e)}function Ly(n,t){const e=ls(t,this.size,4);n.uniform4fv(this.addr,e)}function Dy(n,t){const e=ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ny(n,t){const e=ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Uy(n,t){const e=ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Oy(n,t){n.uniform1iv(this.addr,t)}function Fy(n,t){n.uniform2iv(this.addr,t)}function ky(n,t){n.uniform3iv(this.addr,t)}function By(n,t){n.uniform4iv(this.addr,t)}function Hy(n,t){n.uniform1uiv(this.addr,t)}function Gy(n,t){n.uniform2uiv(this.addr,t)}function zy(n,t){n.uniform3uiv(this.addr,t)}function Vy(n,t){n.uniform4uiv(this.addr,t)}function Wy(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Tc:o=Nf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Xy(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Of,r[o])}function Yy(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ff,r[o])}function qy(n,t,e){const i=this.cache,s=t.length,r=_o(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uf,r[o])}function Ky(n){switch(n){case 5126:return Cy;case 35664:return Py;case 35665:return Iy;case 35666:return Ly;case 35674:return Dy;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return Oy;case 35667:case 35671:return Fy;case 35668:case 35672:return ky;case 35669:case 35673:return By;case 5125:return Hy;case 36294:return Gy;case 36295:return zy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return qy}}class Zy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wy(e.type)}}class $y{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ky(e.type)}}class Jy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function th(n,t){n.seq.push(t),n.map[t.id]=t}function jy(n,t,e){const i=n.name,s=i.length;for(la.lastIndex=0;;){const r=la.exec(i),o=la.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){th(e,c===void 0?new Zy(a,n,t):new $y(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Jy(a),th(e,d)),e=d}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function eh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Qy=37297;let tE=0;function eE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const nh=new Vt;function nE(n){Qt._getMatrix(nh,Qt.workingColorSpace,n);const t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Zr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ih(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+eE(n.getShaderSource(t),a)}else return r}function iE(n,t){const e=nE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const sE={[$d]:"Linear",[Jd]:"Reinhard",[jd]:"Cineon",[Qd]:"ACESFilmic",[ef]:"AgX",[nf]:"Neutral",[tf]:"Custom"};function rE(n,t){const e=sE[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new D;function oE(){Qt.getLuminanceCoefficients(Er);const n=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function cE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function As(n){return n!==""}function sh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(uE,dE)}const hE=new Map;function dE(n,t){let e=Kt[t];if(e===void 0){const i=hE.get(t);if(i!==void 0)e=Kt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ac(e)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(fE,pE)}function pE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const mE={[Lr]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function gE(n){return mE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _E={[Mi]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function xE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_E[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vE={[ji]:"ENVMAP_MODE_REFRACTION"};function ME(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SE={[Zd]:"ENVMAP_BLENDING_MULTIPLY",[R_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function yE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":SE[n.combine]||"ENVMAP_BLENDING_NONE"}function EE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function bE(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gE(e),c=xE(e),u=ME(e),d=yE(e),h=EE(e),f=aE(e),g=cE(r),S=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`)):(p=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Kt.tonemapping_pars_fragment:"",e.toneMapping!==En?rE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,iE("linearToOutputTexel",e.outputColorSpace),oE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=Ac(o),o=sh(o,e),o=rh(o,e),a=Ac(a),a=sh(a,e),a=rh(a,e),o=oh(o),a=oh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=v+p+o,y=v+m+a,w=eh(s,s.VERTEX_SHADER,E),T=eh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,w),s.attachShader(S,T),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(R){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(S)||"",W=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(T)||"",I=U.trim(),H=W.trim(),F=Y.trim();let j=!0,nt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,w,T);else{const ft=ih(s,w,"vertex"),St=ih(s,T,"fragment");jt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+ft+`
`+St)}else I!==""?Nt("WebGLProgram: Program Info Log:",I):(H===""||F==="")&&(nt=!1);nt&&(R.diagnostics={runnable:j,programLog:I,vertexShader:{log:H,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(w),s.deleteShader(T),x=new Fr(s,S),A=lE(s,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,Qy)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tE++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=T,this}let TE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new RE(t),e.set(t,i)),i}}class RE{constructor(t){this.id=TE++,this.code=t,this.usedTimes=0}}function wE(n){return n===Si||n===Yr||n===qr}function CE(n,t,e,i,s,r){const o=new el,a=new AE,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,A,L,R,U,W){const Y=R.fog,I=U.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||H,F),nt=j&&j.mapping===fo?j.image.height:null,ft=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const St=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,At=St!==void 0?St.length:0;let Yt=0;I.morphAttributes.position!==void 0&&(Yt=1),I.morphAttributes.normal!==void 0&&(Yt=2),I.morphAttributes.color!==void 0&&(Yt=3);let ee,Ht,$,gt;if(ft){const Wt=Mn[ft];ee=Wt.vertexShader,Ht=Wt.fragmentShader}else ee=x.vertexShader,Ht=x.fragmentShader,a.update(x),$=a.getVertexShaderID(x),gt=a.getFragmentShaderID(x);const ot=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,ne=!!x.map,Ft=!!x.matcap,J=!!j,it=!!x.aoMap,Q=!!x.lightMap,xt=!!x.bumpMap,dt=!!x.normalMap,kt=!!x.displacementMap,C=!!x.emissiveMap,Gt=!!x.metalnessMap,Rt=!!x.roughnessMap,Bt=x.anisotropy>0,st=x.clearcoat>0,oe=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,k=x.transmission>0,K=Bt&&!!x.anisotropyMap,tt=st&&!!x.clearcoatMap,rt=st&&!!x.clearcoatNormalMap,lt=st&&!!x.clearcoatRoughnessMap,X=b&&!!x.iridescenceMap,Z=b&&!!x.iridescenceThicknessMap,Mt=_&&!!x.sheenColorMap,bt=_&&!!x.sheenRoughnessMap,ut=!!x.specularMap,at=!!x.specularColorMap,zt=!!x.specularIntensityMap,qt=k&&!!x.transmissionMap,re=k&&!!x.thicknessMap,N=!!x.gradientMap,ct=!!x.alphaMap,q=x.alphaTest>0,yt=!!x.alphaHash,ht=!!x.extensions;let et=En;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(et=n.toneMapping);const Pt={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:Ht,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ne,matcap:Ft,envMap:J,envMapMode:J&&j.mapping,envMapCubeUVHeight:nt,aoMap:it,lightMap:Q,bumpMap:xt,normalMap:dt,displacementMap:kt,emissiveMap:C,normalMapObjectSpace:dt&&x.normalMapType===I_,normalMapTangentSpace:dt&&x.normalMapType===xc,packedNormalMap:dt&&x.normalMapType===xc&&wE(x.normalMap.format),metalnessMap:Gt,roughnessMap:Rt,anisotropy:Bt,anisotropyMap:K,clearcoat:st,clearcoatMap:tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:lt,dispersion:oe,iridescence:b,iridescenceMap:X,iridescenceThicknessMap:Z,sheen:_,sheenColorMap:Mt,sheenRoughnessMap:bt,specularMap:ut,specularColorMap:at,specularIntensityMap:zt,transmission:k,transmissionMap:qt,thicknessMap:re,gradientMap:N,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:q,alphaHash:yt,combine:x.combine,mapUv:ne&&g(x.map.channel),aoMapUv:it&&g(x.aoMap.channel),lightMapUv:Q&&g(x.lightMap.channel),bumpMapUv:xt&&g(x.bumpMap.channel),normalMapUv:dt&&g(x.normalMap.channel),displacementMapUv:kt&&g(x.displacementMap.channel),emissiveMapUv:C&&g(x.emissiveMap.channel),metalnessMapUv:Gt&&g(x.metalnessMap.channel),roughnessMapUv:Rt&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:tt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(x.sheenRoughnessMap.channel),specularMapUv:ut&&g(x.specularMap.channel),specularColorMapUv:at&&g(x.specularColorMap.channel),specularIntensityMapUv:zt&&g(x.specularIntensityMap.channel),transmissionMapUv:qt&&g(x.transmissionMap.channel),thicknessMapUv:re&&g(x.thicknessMap.channel),alphaMapUv:ct&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(dt||Bt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(ne||ct),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Yt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:ne&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:C&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(A,x),v(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function E(x){const A=f[x.type];let L;if(A){const R=Mn[A];L=Kx.clone(R.uniforms)}else L=x.uniforms;return L}function y(x,A){let L=u.get(A);return L!==void 0?++L.usedTimes:(L=new bE(n,A,x,s),c.push(L),u.set(A,L)),L}function w(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function PE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function IE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ch(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,S,p,m){let v=n[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:m},n[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=o(h),v.groupOrder=S,v.renderOrder=h.renderOrder,v.z=p,v.group=m),t++,v}function l(h,f,g,S,p,m){const v=a(h,f,g,S,p,m);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):e.push(v)}function c(h,f,g,S,p,m){const v=a(h,f,g,S,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||IE),i.length>1&&i.sort(f||ch),s.length>1&&s.sort(f||ch)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function LE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new lh,n.set(i,[o])):s>=r.length?(o=new lh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function DE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new te};break;case"SpotLight":e={position:new D,direction:new D,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function NE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let UE=0;function OE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function FE(n){const t=new DE,e=NE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new ae,o=new ae;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,S=0,p=0,m=0,v=0,E=0,y=0,w=0,T=0,P=0;c.sort(OE);for(let A=0,L=c.length;A<L;A++){const R=c[A],U=R.color,W=R.intensity,Y=R.distance;let I=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Si?I=R.shadow.map.texture:I=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=U.r*W,d+=U.g*W,h+=U.b*W;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],W);P++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,j=e.get(R);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=I,i.directionalShadowMatrix[f]=R.shadow.matrix,v++}i.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(U).multiplyScalar(W),H.distance=Y,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[S]=H;const F=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,F.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[S]=F.matrix,R.castShadow){const j=e.get(R);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=I,y++}S++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(U).multiplyScalar(W),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=H,p++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const F=R.shadow,j=e.get(R);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(W),H.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==S||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=S,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=f,x.pointLength=g,x.spotLength=S,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=P,i.version=UE++)}function l(c,u){let d=0,h=0,f=0,g=0,S=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const E=c[m];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function uh(n){const t=new FE(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function kE(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new uh(n),t.set(s,[a])):r>=o.length?(a=new uh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
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
}`,GE=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],zE=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],hh=new ae,Ms=new D,ua=new D;function VE(n,t,e){let i=new il;const s=new pt,r=new pt,o=new Se,a=new jx,l=new Qx,c={},u=e.maxTextureSize,d={[ei]:Ge,[Ge]:ei,[Sn]:Sn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:BE,fragmentShader:HE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ut(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let m=this.type;this.render=function(T,P,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===c_&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lr);const A=n.getRenderTarget(),L=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Fn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=m!==this.type;W&&P.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=T.length;Y<I;Y++){const H=T[Y],F=H.shadow;if(F===void 0){Nt("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const j=F.getFrameExtents();s.multiply(j),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,F.mapSize.y=r.y));const nt=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=nt,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===bs){if(H.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new bn(s.x,s.y,{format:Si,type:Bn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Qi(s.x,s.y,hn),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Hn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pe,F.map.depthTexture.magFilter=Pe}else H.isPointLight?(F.map=new Df(s.x),F.map.depthTexture=new fx(s.x,Tn)):(F.map=new bn(s.x,s.y),F.map.depthTexture=new Qi(s.x,s.y,Tn)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Hn,this.type===Lr?(F.map.depthTexture.compareFunction=nt?Qc:jc,F.map.depthTexture.minFilter=Oe,F.map.depthTexture.magFilter=Oe):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pe,F.map.depthTexture.magFilter=Pe);F.camera.updateProjectionMatrix()}const ft=F.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<ft;St++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,St),n.clear();else{St===0&&(n.setRenderTarget(F.map),n.clear());const At=F.getViewport(St);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(o)}if(H.isPointLight){const At=F.camera,Yt=F.matrix,ee=H.distance||At.far;ee!==At.far&&(At.far=ee,At.updateProjectionMatrix()),Ms.setFromMatrixPosition(H.matrixWorld),At.position.copy(Ms),ua.copy(At.position),ua.add(GE[St]),At.up.copy(zE[St]),At.lookAt(ua),At.updateMatrixWorld(),Yt.makeTranslation(-Ms.x,-Ms.y,-Ms.z),hh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),F._frustum.setFromProjectionMatrix(hh,At.coordinateSystem,At.reversedDepth)}else F.updateMatrices(H);i=F.getFrustum(),y(P,x,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===bs&&v(F,x),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,L,R)};function v(T,P){const x=t.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bn(s.x,s.y,{format:Si,type:Bn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,h,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,f,S,null)}function E(T,P,x,A){let L=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)L=R;else if(L=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=L.uuid,W=P.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let I=Y[W];I===void 0&&(I=L.clone(),Y[W]=I,P.addEventListener("dispose",w)),L=I}if(L.visible=P.visible,L.wireframe=P.wireframe,A===bs?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:d[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=n.properties.get(L);U.light=x}return L}function y(T,P,x,A,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===bs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const W=t.update(T),Y=T.material;if(Array.isArray(Y)){const I=W.groups;for(let H=0,F=I.length;H<F;H++){const j=I[H],nt=Y[j.materialIndex];if(nt&&nt.visible){const ft=E(T,nt,A,L);T.onBeforeShadow(n,T,P,x,W,ft,j),n.renderBufferDirect(x,null,W,ft,T,j),T.onAfterShadow(n,T,P,x,W,ft,j)}}}else if(Y.visible){const I=E(T,Y,A,L);T.onBeforeShadow(n,T,P,x,W,I,null),n.renderBufferDirect(x,null,W,I,T,null),T.onAfterShadow(n,T,P,x,W,I,null)}}const U=T.children;for(let W=0,Y=U.length;W<Y;W++)y(U[W],P,x,A,L)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const A=c[x],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function WE(n,t){function e(){let N=!1;const ct=new Se;let q=null;const yt=new Se(0,0,0,0);return{setMask:function(ht){q!==ht&&!N&&(n.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){N=ht},setClear:function(ht,et,Pt,Wt,ye){ye===!0&&(ht*=Wt,et*=Wt,Pt*=Wt),ct.set(ht,et,Pt,Wt),yt.equals(ct)===!1&&(n.clearColor(ht,et,Pt,Wt),yt.copy(ct))},reset:function(){N=!1,q=null,yt.set(-1,0,0,0)}}}function i(){let N=!1,ct=!1,q=null,yt=null,ht=null;return{setReversed:function(et){if(ct!==et){const Pt=t.get("EXT_clip_control");et?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const Wt=ht;ht=null,this.setClear(Wt)}},getReversed:function(){return ct},setTest:function(et){et?ot(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(et){q!==et&&!N&&(n.depthMask(et),q=et)},setFunc:function(et){if(ct&&(et=G_[et]),yt!==et){switch(et){case Da:n.depthFunc(n.NEVER);break;case Na:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Oa:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case ka:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=et}},setLocked:function(et){N=et},setClear:function(et){ht!==et&&(ht=et,ct&&(et=1-et),n.clearDepth(et))},reset:function(){N=!1,q=null,yt=null,ht=null,ct=!1}}}function s(){let N=!1,ct=null,q=null,yt=null,ht=null,et=null,Pt=null,Wt=null,ye=null;return{setTest:function(ue){N||(ue?ot(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ue){ct!==ue&&!N&&(n.stencilMask(ue),ct=ue)},setFunc:function(ue,wn,mn){(q!==ue||yt!==wn||ht!==mn)&&(n.stencilFunc(ue,wn,mn),q=ue,yt=wn,ht=mn)},setOp:function(ue,wn,mn){(et!==ue||Pt!==wn||Wt!==mn)&&(n.stencilOp(ue,wn,mn),et=ue,Pt=wn,Wt=mn)},setLocked:function(ue){N=ue},setClear:function(ue){ye!==ue&&(n.clearStencil(ue),ye=ue)},reset:function(){N=!1,ct=null,q=null,yt=null,ht=null,et=null,Pt=null,Wt=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],S=null,p=!1,m=null,v=null,E=null,y=null,w=null,T=null,P=null,x=new te(0,0,0),A=0,L=!1,R=null,U=null,W=null,Y=null,I=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),F=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),F=j>=2);let ft=null,St={};const At=n.getParameter(n.SCISSOR_BOX),Yt=n.getParameter(n.VIEWPORT),ee=new Se().fromArray(At),Ht=new Se().fromArray(Yt);function $(N,ct,q,yt){const ht=new Uint8Array(4),et=n.createTexture();n.bindTexture(N,et),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<q;Pt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(ct+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return et}const gt={};gt[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(Ji),xt(!1),dt(Ql),ot(n.CULL_FACE),it(Fn);function ot(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ct(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ot(N,ct){return h[N]!==ct?(n.bindFramebuffer(N,ct),h[N]=ct,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ct),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(N,ct){let q=g,yt=!1;if(N){q=f.get(ct),q===void 0&&(q=[],f.set(ct,q));const ht=N.textures;if(q.length!==ht.length||q[0]!==n.COLOR_ATTACHMENT0){for(let et=0,Pt=ht.length;et<Pt;et++)q[et]=n.COLOR_ATTACHMENT0+et;q.length=ht.length,yt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,yt=!0);yt&&n.drawBuffers(q)}function ne(N){return S!==N?(n.useProgram(N),S=N,!0):!1}const Ft={[di]:n.FUNC_ADD,[u_]:n.FUNC_SUBTRACT,[h_]:n.FUNC_REVERSE_SUBTRACT};Ft[d_]=n.MIN,Ft[f_]=n.MAX;const J={[p_]:n.ZERO,[m_]:n.ONE,[g_]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[y_]:n.SRC_ALPHA_SATURATE,[M_]:n.DST_COLOR,[x_]:n.DST_ALPHA,[__]:n.ONE_MINUS_SRC_COLOR,[La]:n.ONE_MINUS_SRC_ALPHA,[S_]:n.ONE_MINUS_DST_COLOR,[v_]:n.ONE_MINUS_DST_ALPHA,[E_]:n.CONSTANT_COLOR,[b_]:n.ONE_MINUS_CONSTANT_COLOR,[T_]:n.CONSTANT_ALPHA,[A_]:n.ONE_MINUS_CONSTANT_ALPHA};function it(N,ct,q,yt,ht,et,Pt,Wt,ye,ue){if(N===Fn){p===!0&&(Ct(n.BLEND),p=!1);return}if(p===!1&&(ot(n.BLEND),p=!0),N!==l_){if(N!==m||ue!==L){if((v!==di||w!==di)&&(n.blendEquation(n.FUNC_ADD),v=di,w=di),ue)switch(N){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:jt("WebGLState: Invalid blending: ",N);break}else switch(N){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eu:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",N);break}E=null,y=null,T=null,P=null,x.set(0,0,0),A=0,m=N,L=ue}return}ht=ht||ct,et=et||q,Pt=Pt||yt,(ct!==v||ht!==w)&&(n.blendEquationSeparate(Ft[ct],Ft[ht]),v=ct,w=ht),(q!==E||yt!==y||et!==T||Pt!==P)&&(n.blendFuncSeparate(J[q],J[yt],J[et],J[Pt]),E=q,y=yt,T=et,P=Pt),(Wt.equals(x)===!1||ye!==A)&&(n.blendColor(Wt.r,Wt.g,Wt.b,ye),x.copy(Wt),A=ye),m=N,L=!1}function Q(N,ct){N.side===Sn?Ct(n.CULL_FACE):ot(n.CULL_FACE);let q=N.side===Ge;ct&&(q=!q),xt(q),N.blending===Zi&&N.transparent===!1?it(Fn):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const yt=N.stencilWrite;a.setTest(yt),yt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),C(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function dt(N){N!==o_?(ot(n.CULL_FACE),N!==U&&(N===Ql?n.cullFace(n.BACK):N===a_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),U=N}function kt(N){N!==W&&(F&&n.lineWidth(N),W=N)}function C(N,ct,q){N?(ot(n.POLYGON_OFFSET_FILL),(Y!==ct||I!==q)&&(Y=ct,I=q,o.getReversed()&&(ct=-ct),n.polygonOffset(ct,q))):Ct(n.POLYGON_OFFSET_FILL)}function Gt(N){N?ot(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function Rt(N){N===void 0&&(N=n.TEXTURE0+H-1),ft!==N&&(n.activeTexture(N),ft=N)}function Bt(N,ct,q){q===void 0&&(ft===null?q=n.TEXTURE0+H-1:q=ft);let yt=St[q];yt===void 0&&(yt={type:void 0,texture:void 0},St[q]=yt),(yt.type!==N||yt.texture!==ct)&&(ft!==q&&(n.activeTexture(q),ft=q),n.bindTexture(N,ct||gt[N]),yt.type=N,yt.texture=ct)}function st(){const N=St[ft];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function k(){try{n.texSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function rt(){try{n.texStorage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function lt(){try{n.texStorage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function X(){try{n.texImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function Z(){try{n.texImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Mt(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function bt(N,ct){d[N]!==ct&&(n.pixelStorei(N,ct),d[N]=ct)}function ut(N){ee.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function at(N){Ht.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ht.copy(N))}function zt(N,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let yt=q.get(N);yt===void 0&&(yt=n.getUniformBlockIndex(ct,N.name),q.set(N,yt))}function qt(N,ct){const yt=c.get(ct).get(N);l.get(ct)!==yt&&(n.uniformBlockBinding(ct,yt,N.__bindingPointIndex),l.set(ct,yt))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ft=null,St={},h={},f=new WeakMap,g=[],S=null,p=!1,m=null,v=null,E=null,y=null,w=null,T=null,P=null,x=new te(0,0,0),A=0,L=!1,R=null,U=null,W=null,Y=null,I=null,ee.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Ot,drawBuffers:Dt,useProgram:ne,setBlending:it,setMaterial:Q,setFlipSided:xt,setCullFace:dt,setLineWidth:kt,setPolygonOffset:C,setScissorTest:Gt,activeTexture:Rt,bindTexture:Bt,unbindTexture:st,compressedTexImage2D:oe,compressedTexImage3D:b,texImage2D:X,texImage3D:Z,pixelStorei:bt,getParameter:Mt,updateUBOMapping:zt,uniformBlockBinding:qt,texStorage2D:rt,texStorage3D:lt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:ut,viewport:at,reset:re}}function XE(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,_){return g?new OffscreenCanvas(b,_):$r("canvas")}function p(b,_,k){let K=1;const tt=oe(b);if((tt.width>k||tt.height>k)&&(K=k/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const rt=Math.floor(K*tt.width),lt=Math.floor(K*tt.height);h===void 0&&(h=S(rt,lt));const X=_?S(rt,lt):h;return X.width=rt,X.height=lt,X.getContext("2d").drawImage(b,0,0,rt,lt),Nt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+rt+"x"+lt+")."),X}else return"data"in b&&Nt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps}function v(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,_,k,K,tt,rt=!1){if(b!==null){if(n[b]!==void 0)return n[b];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let lt;K&&(lt=t.get("EXT_texture_norm16"),lt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===n.RED&&(k===n.FLOAT&&(X=n.R32F),k===n.HALF_FLOAT&&(X=n.R16F),k===n.UNSIGNED_BYTE&&(X=n.R8),k===n.UNSIGNED_SHORT&&lt&&(X=lt.R16_EXT),k===n.SHORT&&lt&&(X=lt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.R8UI),k===n.UNSIGNED_SHORT&&(X=n.R16UI),k===n.UNSIGNED_INT&&(X=n.R32UI),k===n.BYTE&&(X=n.R8I),k===n.SHORT&&(X=n.R16I),k===n.INT&&(X=n.R32I)),_===n.RG&&(k===n.FLOAT&&(X=n.RG32F),k===n.HALF_FLOAT&&(X=n.RG16F),k===n.UNSIGNED_BYTE&&(X=n.RG8),k===n.UNSIGNED_SHORT&&lt&&(X=lt.RG16_EXT),k===n.SHORT&&lt&&(X=lt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RG8UI),k===n.UNSIGNED_SHORT&&(X=n.RG16UI),k===n.UNSIGNED_INT&&(X=n.RG32UI),k===n.BYTE&&(X=n.RG8I),k===n.SHORT&&(X=n.RG16I),k===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGB8UI),k===n.UNSIGNED_SHORT&&(X=n.RGB16UI),k===n.UNSIGNED_INT&&(X=n.RGB32UI),k===n.BYTE&&(X=n.RGB8I),k===n.SHORT&&(X=n.RGB16I),k===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),k===n.UNSIGNED_INT&&(X=n.RGBA32UI),k===n.BYTE&&(X=n.RGBA8I),k===n.SHORT&&(X=n.RGBA16I),k===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(k===n.UNSIGNED_SHORT&&lt&&(X=lt.RGB16_EXT),k===n.SHORT&&lt&&(X=lt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const Z=rt?Zr:Qt.getTransfer(tt);k===n.FLOAT&&(X=n.RGBA32F),k===n.HALF_FLOAT&&(X=n.RGBA16F),k===n.UNSIGNED_BYTE&&(X=Z===le?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&lt&&(X=lt.RGBA16_EXT),k===n.SHORT&&lt&&(X=lt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function w(b,_){let k;return b?_===null||_===Tn||_===Hs?k=n.DEPTH24_STENCIL8:_===hn?k=n.DEPTH32F_STENCIL8:_===Bs&&(k=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===Hs?k=n.DEPTH_COMPONENT24:_===hn?k=n.DEPTH_COMPONENT32F:_===Bs&&(k=n.DEPTH_COMPONENT16),k}function T(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pe&&b.minFilter!==Oe?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function P(b){const _=b.target;_.removeEventListener("dispose",P),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),R(_)}function A(b){const _=i.get(b);if(_.__webglInit===void 0)return;const k=b.source,K=f.get(k);if(K){const tt=K[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(b),Object.keys(K).length===0&&f.delete(k)}i.remove(b)}function L(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const k=b.source,K=f.get(k);delete K[_.__cacheKey],o.memory.textures--}function R(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let tt=0;tt<_.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(_.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,tt=k.length;K<tt;K++){const rt=i.get(k[K]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(b)}let U=0;function W(){U=0}function Y(){return U}function I(b){U=b}function H(){const b=U;return b>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),U+=1,b}function F(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){const k=i.get(b);if(b.isVideoTexture&&Bt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(k,b,_);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function nt(b,_){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Ct(k,b,_);return}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function ft(b,_){const k=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Ct(k,b,_);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function St(b,_){const k=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&k.__version!==b.version){Ot(k,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}const At={[Ha]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},Yt={[Pe]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},ee={[L_]:n.NEVER,[F_]:n.ALWAYS,[D_]:n.LESS,[jc]:n.LEQUAL,[N_]:n.EQUAL,[Qc]:n.GEQUAL,[U_]:n.GREATER,[O_]:n.NOTEQUAL};function Ht(b,_){if(_.type===hn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Oe||_.magFilter===Co||_.magFilter===Js||_.magFilter===mi||_.minFilter===Oe||_.minFilter===Co||_.minFilter===Js||_.minFilter===mi)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,At[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,At[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,At[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Yt[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Yt[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pe||_.minFilter!==Js&&_.minFilter!==mi||_.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",P));const K=_.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const rt=F(_);if(rt!==b.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[rt].usedTimes++;const lt=tt[b.__cacheKey];lt!==void 0&&(tt[b.__cacheKey].usedTimes--,lt.usedTimes===0&&L(_)),b.__cacheKey=rt,b.__webglTexture=tt[rt].texture}return k}function gt(b,_,k){return Math.floor(Math.floor(b/k)/_)}function ot(b,_,k,K){const rt=b.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,k,K,_.data);else{rt.sort((bt,ut)=>bt.start-ut.start);let lt=0;for(let bt=1;bt<rt.length;bt++){const ut=rt[lt],at=rt[bt],zt=ut.start+ut.count,qt=gt(at.start,_.width,4),re=gt(ut.start,_.width,4);at.start<=zt+1&&qt===re&&gt(at.start+at.count-1,_.width,4)===qt?ut.count=Math.max(ut.count,at.start+at.count-ut.start):(++lt,rt[lt]=at)}rt.length=lt+1;const X=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let bt=0,ut=rt.length;bt<ut;bt++){const at=rt[bt],zt=Math.floor(at.start/4),qt=Math.ceil(at.count/4),re=zt%_.width,N=Math.floor(zt/_.width),ct=qt,q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,re,N,ct,q,k,K,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function Ct(b,_,k){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const tt=$(b,_),rt=_.source;e.bindTexture(K,b.__webglTexture,n.TEXTURE0+k);const lt=i.get(rt);if(rt.version!==lt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const q=Qt.getPrimaries(Qt.workingColorSpace),yt=_.colorSpace===Jn?null:Qt.getPrimaries(_.colorSpace),ht=_.colorSpace===Jn||q===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=p(_.image,!1,s.maxTextureSize);Z=st(_,Z);const Mt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type);let ut=y(_.internalFormat,Mt,bt,_.normalized,_.colorSpace,_.isVideoTexture);Ht(K,_);let at;const zt=_.mipmaps,qt=_.isVideoTexture!==!0,re=lt.__version===void 0||tt===!0,N=rt.dataReady,ct=T(_,Z);if(_.isDepthTexture)ut=w(_.format===gi,_.type),re&&(qt?e.texStorage2D(n.TEXTURE_2D,1,ut,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,ut,Z.width,Z.height,0,Mt,bt,null));else if(_.isDataTexture)if(zt.length>0){qt&&re&&e.texStorage2D(n.TEXTURE_2D,ct,ut,zt[0].width,zt[0].height);for(let q=0,yt=zt.length;q<yt;q++)at=zt[q],qt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,bt,at.data):e.texImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,Mt,bt,at.data);_.generateMipmaps=!1}else qt?(re&&e.texStorage2D(n.TEXTURE_2D,ct,ut,Z.width,Z.height),N&&ot(_,Z,Mt,bt)):e.texImage2D(n.TEXTURE_2D,0,ut,Z.width,Z.height,0,Mt,bt,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ut,zt[0].width,zt[0].height,Z.depth);for(let q=0,yt=zt.length;q<yt;q++)if(at=zt[q],_.format!==dn)if(Mt!==null)if(qt){if(N)if(_.layerUpdates.size>0){const ht=zu(at.width,at.height,_.format,_.type);for(const et of _.layerUpdates){const Pt=at.data.subarray(et*ht/at.data.BYTES_PER_ELEMENT,(et+1)*ht/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,et,at.width,at.height,1,Mt,Pt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Z.depth,Mt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ut,at.width,at.height,Z.depth,0,at.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,at.width,at.height,Z.depth,Mt,bt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,ut,at.width,at.height,Z.depth,0,Mt,bt,at.data)}else{qt&&re&&e.texStorage2D(n.TEXTURE_2D,ct,ut,zt[0].width,zt[0].height);for(let q=0,yt=zt.length;q<yt;q++)at=zt[q],_.format!==dn?Mt!==null?qt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,at.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,at.width,at.height,Mt,bt,at.data):e.texImage2D(n.TEXTURE_2D,q,ut,at.width,at.height,0,Mt,bt,at.data)}else if(_.isDataArrayTexture)if(qt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ut,Z.width,Z.height,Z.depth),N)if(_.layerUpdates.size>0){const q=zu(Z.width,Z.height,_.format,_.type);for(const yt of _.layerUpdates){const ht=Z.data.subarray(yt*q/Z.data.BYTES_PER_ELEMENT,(yt+1)*q/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,Z.width,Z.height,1,Mt,bt,ht)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Mt,bt,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,Z.width,Z.height,Z.depth,0,Mt,bt,Z.data);else if(_.isData3DTexture)qt?(re&&e.texStorage3D(n.TEXTURE_3D,ct,ut,Z.width,Z.height,Z.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Mt,bt,Z.data)):e.texImage3D(n.TEXTURE_3D,0,ut,Z.width,Z.height,Z.depth,0,Mt,bt,Z.data);else if(_.isFramebufferTexture){if(re)if(qt)e.texStorage2D(n.TEXTURE_2D,ct,ut,Z.width,Z.height);else{let q=Z.width,yt=Z.height;for(let ht=0;ht<ct;ht++)e.texImage2D(n.TEXTURE_2D,ht,ut,q,yt,0,Mt,bt,null),q>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Z.parentNode!==q){q.appendChild(Z),d.add(_),q.onpaint=Wt=>{const ye=Wt.changedElements;for(const ue of d)ye.includes(ue.image)&&(ue.needsUpdate=!0)},q.requestPaint();return}const yt=0,ht=n.RGBA,et=n.RGBA,Pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,yt,ht,et,Pt,Z),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(qt&&re){const q=oe(zt[0]);e.texStorage2D(n.TEXTURE_2D,ct,ut,q.width,q.height)}for(let q=0,yt=zt.length;q<yt;q++)at=zt[q],qt?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Mt,bt,at):e.texImage2D(n.TEXTURE_2D,q,ut,Mt,bt,at);_.generateMipmaps=!1}else if(qt){if(re){const q=oe(Z);e.texStorage2D(n.TEXTURE_2D,ct,ut,q.width,q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,bt,Z)}else e.texImage2D(n.TEXTURE_2D,0,ut,Mt,bt,Z);m(_)&&v(K),lt.__version=rt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ot(b,_,k){if(_.image.length!==6)return;const K=$(b,_),tt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const rt=i.get(tt);if(tt.version!==rt.__version||K===!0){e.activeTexture(n.TEXTURE0+k);const lt=Qt.getPrimaries(Qt.workingColorSpace),X=_.colorSpace===Jn?null:Qt.getPrimaries(_.colorSpace),Z=_.colorSpace===Jn||lt===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,bt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!Mt&&!bt?ut[et]=p(_.image[et],!0,s.maxCubemapSize):ut[et]=bt?_.image[et].image:_.image[et],ut[et]=st(_,ut[et]);const at=ut[0],zt=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),re=y(_.internalFormat,zt,qt,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ct=rt.__version===void 0||K===!0,q=tt.dataReady;let yt=T(_,at);Ht(n.TEXTURE_CUBE_MAP,_);let ht;if(Mt){N&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,re,at.width,at.height);for(let et=0;et<6;et++){ht=ut[et].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){const Wt=ht[Pt];_.format!==dn?zt!==null?N?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,Wt.width,Wt.height,zt,Wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,re,Wt.width,Wt.height,0,Wt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,Wt.width,Wt.height,zt,qt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,re,Wt.width,Wt.height,0,zt,qt,Wt.data)}}}else{if(ht=_.mipmaps,N&&ct){ht.length>0&&yt++;const et=oe(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,re,et.width,et.height)}for(let et=0;et<6;et++)if(bt){N?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,zt,qt,ut[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,re,ut[et].width,ut[et].height,0,zt,qt,ut[et].data);for(let Pt=0;Pt<ht.length;Pt++){const ye=ht[Pt].image[et].image;N?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,ye.width,ye.height,zt,qt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,re,ye.width,ye.height,0,zt,qt,ye.data)}}else{N?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,zt,qt,ut[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,re,zt,qt,ut[et]);for(let Pt=0;Pt<ht.length;Pt++){const Wt=ht[Pt];N?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,zt,qt,Wt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,re,zt,qt,Wt.image[et])}}}m(_)&&v(n.TEXTURE_CUBE_MAP),rt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Dt(b,_,k,K,tt,rt){const lt=r.convert(k.format,k.colorSpace),X=r.convert(k.type),Z=y(k.internalFormat,lt,X,k.normalized,k.colorSpace),Mt=i.get(_),bt=i.get(k);if(bt.__renderTarget=_,!Mt.__hasExternalTextures){const ut=Math.max(1,_.width>>rt),at=Math.max(1,_.height>>rt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,Z,ut,at,_.depth,0,lt,X,null):e.texImage2D(tt,rt,Z,ut,at,0,lt,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,tt,bt.__webglTexture,0,Gt(_)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,tt,bt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(b,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,tt=K&&K.isDepthTexture?K.type:null,rt=w(_.stencilBuffer,tt),lt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(_),rt,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(_),rt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,rt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,b)}else{const K=_.textures;for(let tt=0;tt<K.length;tt++){const rt=K[tt],lt=r.convert(rt.format,rt.colorSpace),X=r.convert(rt.type),Z=y(rt.internalFormat,lt,X,rt.normalized,rt.colorSpace);Rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(_),Z,_.width,_.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(b,_,k){const K=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(_.depthTexture);if(tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_.depthTexture);const Mt=r.convert(_.depthTexture.format),bt=r.convert(_.depthTexture.type);let ut;_.depthTexture.format===Hn?ut=n.DEPTH_COMPONENT24:_.depthTexture.format===gi&&(ut=n.DEPTH24_STENCIL8);for(let at=0;at<6;at++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ut,_.width,_.height,0,Mt,bt,null)}}else j(_.depthTexture,0);const rt=tt.__webglTexture,lt=Gt(_),X=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Z=_.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)Rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,rt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,rt,0);else if(_.depthTexture.format===gi)Rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,rt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,rt,0);else throw new Error("Unknown depthTexture format")}function J(b){const _=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let K=0;K<6;K++)Ft(_.__webglFramebuffer[K],b,K);else{const K=b.texture.mipmaps;K&&K.length>0?Ft(_.__webglFramebuffer[0],b,0):Ft(_.__webglFramebuffer,b,0)}else if(k){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(_.__webglDepthbuffer[K],b,!1);else{const tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ne(_.__webglDepthbuffer,b,!1);else{const tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,_,k){const K=i.get(b);_!==void 0&&Dt(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&J(b)}function Q(b){const _=b.texture,k=i.get(b),K=i.get(_);b.addEventListener("dispose",x);const tt=b.textures,rt=b.isWebGLCubeRenderTarget===!0,lt=tt.length>1;if(lt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,o.memory.textures++),rt){k.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[X]=[];for(let Z=0;Z<_.mipmaps.length;Z++)k.__webglFramebuffer[X][Z]=n.createFramebuffer()}else k.__webglFramebuffer[X]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)k.__webglFramebuffer[X]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(lt)for(let X=0,Z=tt.length;X<Z;X++){const Mt=i.get(tt[X]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Rt(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let X=0;X<tt.length;X++){const Z=tt[X];k.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[X]);const Mt=r.convert(Z.format,Z.colorSpace),bt=r.convert(Z.type),ut=y(Z.internalFormat,Mt,bt,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),at=Gt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,ut,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,k.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Dt(k.__webglFramebuffer[X][Z],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Z);else Dt(k.__webglFramebuffer[X],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);m(_)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let X=0,Z=tt.length;X<Z;X++){const Mt=tt[X],bt=i.get(Mt);let ut=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,bt.__webglTexture),Ht(ut,Mt),Dt(k.__webglFramebuffer,b,Mt,n.COLOR_ATTACHMENT0+X,ut,0),m(Mt)&&v(ut)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(X=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,K.__webglTexture),Ht(X,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Dt(k.__webglFramebuffer[Z],b,_,n.COLOR_ATTACHMENT0,X,Z);else Dt(k.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,X,0);m(_)&&v(X),e.unbindTexture()}b.depthBuffer&&J(b)}function xt(b){const _=b.textures;for(let k=0,K=_.length;k<K;k++){const tt=_[k];if(m(tt)){const rt=E(b),lt=i.get(tt).__webglTexture;e.bindTexture(rt,lt),v(rt),e.unbindTexture()}}}const dt=[],kt=[];function C(b){if(b.samples>0){if(Rt(b)===!1){const _=b.textures,k=b.width,K=b.height;let tt=n.COLOR_BUFFER_BIT;const rt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(b),X=_.length>1;if(X)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Z=b.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Mt]);const bt=i.get(_[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,tt,n.NEAREST),l===!0&&(dt.length=0,kt.length=0,dt.push(n.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(dt.push(rt),kt.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[Mt]);const bt=i.get(_[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Gt(b){return Math.min(s.maxSamples,b.samples)}function Rt(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Bt(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function st(b,_){const k=b.colorSpace,K=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Kr&&k!==Jn&&(Qt.getTransfer(k)===le?(K!==dn||tt!==Ye)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",k)),_}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=nt,this.setTexture3D=ft,this.setTextureCube=St,this.rebindTextures=it,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function YE(n,t){function e(i,s=Jn){let r;const o=Qt.getTransfer(s);if(i===Ye)return n.UNSIGNED_BYTE;if(i===Yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rf)return n.BYTE;if(i===of)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===Xc)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===Bn)return n.HALF_FLOAT;if(i===lf)return n.ALPHA;if(i===uf)return n.RGB;if(i===dn)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===Kc)return n.RED;if(i===Zc)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===$c)return n.RG_INTEGER;if(i===Jc)return n.RGBA_INTEGER;if(i===Dr||i===Nr||i===Ur||i===Or)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===Va||i===Wa||i===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===qa||i===Ka||i===Za||i===$a||i===Yr||i===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ya||i===qa)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Za)return r.COMPRESSED_R11_EAC;if(i===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===Ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ja||i===Qa||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===cc||i===lc||i===uc||i===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ic)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===fc||i===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===dc)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mc||i===gc||i===qr||i===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KE=`
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

}`;class ZE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new xf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new An({vertexShader:qE,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends bi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const S=typeof XRWebGLBinding<"u",p=new ZE,m={},v=e.getContextAttributes();let E=null,y=null;const w=[],T=[],P=new pt;let x=null;const A=new en;A.viewport=new Se;const L=new en;L.viewport=new Se;const R=[A,L],U=new rv;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=w[$];return gt===void 0&&(gt=new Fo,w[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=w[$];return gt===void 0&&(gt=new Fo,w[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=w[$];return gt===void 0&&(gt=new Fo,w[$]=gt),gt.getHandSpace()};function I($){const gt=T.indexOf($.inputSource);if(gt===-1)return;const ot=w[gt];ot!==void 0&&(ot.update($.inputSource,$.frame,c||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",F);for(let $=0;$<w.length;$++){const gt=T[$];gt!==null&&(T[$]=null,w[$].disconnect(gt))}W=null,Y=null,p.reset();for(const $ in m)delete m[$];t.setRenderTarget(E),f=null,h=null,d=null,s=null,y=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Ct=null,Ot=null;v.depth&&(Ot=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=v.stencil?gi:Hn,Ct=v.stencil?Hs:Tn);const Dt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new bn(h.textureWidth,h.textureHeight,{format:dn,type:Ye,depthTexture:new Qi(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F($){for(let gt=0;gt<$.removed.length;gt++){const ot=$.removed[gt],Ct=T.indexOf(ot);Ct>=0&&(T[Ct]=null,w[Ct].disconnect(ot))}for(let gt=0;gt<$.added.length;gt++){const ot=$.added[gt];let Ct=T.indexOf(ot);if(Ct===-1){for(let Dt=0;Dt<w.length;Dt++)if(Dt>=T.length){T.push(ot),Ct=Dt;break}else if(T[Dt]===null){T[Dt]=ot,Ct=Dt;break}if(Ct===-1)break}const Ot=w[Ct];Ot&&Ot.connect(ot)}}const j=new D,nt=new D;function ft($,gt,ot){j.setFromMatrixPosition(gt.matrixWorld),nt.setFromMatrixPosition(ot.matrixWorld);const Ct=j.distanceTo(nt),Ot=gt.projectionMatrix.elements,Dt=ot.projectionMatrix.elements,ne=Ot[14]/(Ot[10]-1),Ft=Ot[14]/(Ot[10]+1),J=(Ot[9]+1)/Ot[5],it=(Ot[9]-1)/Ot[5],Q=(Ot[8]-1)/Ot[0],xt=(Dt[8]+1)/Dt[0],dt=ne*Q,kt=ne*xt,C=Ct/(-Q+xt),Gt=C*-Q;if(gt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Gt),$.translateZ(C),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Rt=ne+C,Bt=Ft+C,st=dt-Gt,oe=kt+(Ct-Gt),b=J*Ft/Bt*Rt,_=it*Ft/Bt*Rt;$.projectionMatrix.makePerspective(st,oe,b,_,Rt,Bt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function St($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let gt=$.near,ot=$.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),U.near=L.near=A.near=gt,U.far=L.far=A.far=ot,(W!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,Y=U.far),U.layers.mask=$.layers.mask|6,A.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Ct=$.parent,Ot=U.cameras;St(U,Ct);for(let Dt=0;Dt<Ot.length;Dt++)St(Ot[Dt],Ct);Ot.length===2?ft(U,A,L):U.projectionMatrix.copy(A.projectionMatrix),At($,U,Ct)};function At($,gt,ot){ot===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Mc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return m[$]};let Yt=null;function ee($,gt){if(u=gt.getViewerPose(c||o),g=gt,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ct=!1;ot.length!==U.cameras.length&&(U.cameras.length=0,Ct=!0);for(let Ft=0;Ft<ot.length;Ft++){const J=ot[Ft];let it=null;if(f!==null)it=f.getViewport(J);else{const xt=d.getViewSubImage(h,J);it=xt.viewport,Ft===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let Q=R[Ft];Q===void 0&&(Q=new en,Q.layers.enable(Ft),Q.viewport=new Se,R[Ft]=Q),Q.matrix.fromArray(J.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(J.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(it.x,it.y,it.width,it.height),Ft===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ct===!0&&U.cameras.push(Q)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Ft=d.getDepthInformation(ot[0]);Ft&&Ft.isValid&&Ft.texture&&p.init(Ft,s.renderState)}if(Ot&&Ot.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Ft=0;Ft<ot.length;Ft++){const J=ot[Ft].camera;if(J){let it=m[J];it||(it=new xf,m[J]=it);const Q=d.getCameraImage(J);it.sourceTexture=Q}}}}for(let ot=0;ot<w.length;ot++){const Ct=T[ot],Ot=w[ot];Ct!==null&&Ot!==void 0&&Ot.update(Ct,gt,c||o)}Yt&&Yt($,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Ht=new If;Ht.setAnimationLoop(ee),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}}const JE=new ae,kf=new Vt;kf.set(-1,0,0,0,1,0,0,0,1);function jE(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,wf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const y=E.program;i.uniformBlockBinding(v,y)}function c(v,E){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));const w=E.program;i.updateUBOMapping(v,w);const T=t.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const E=d();v.__bindingPointIndex=E;const y=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=s[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,P=y.length;T<P;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let A=0,L=x.length;A<L;A++){const R=x[A];if(f(R,T,A,w)===!0){const U=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let I=0;I<W.length;I++){const H=W[I],F=S(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+Y,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):ArrayBuffer.isView(H)?R.__data.set(new H.constructor(H.buffer,H.byteOffset,R.__data.length)):(H.toArray(R.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,E,y,w){const T=v.value,P=E+"_"+y;if(w[P]===void 0)return typeof T=="number"||typeof T=="boolean"?w[P]=T:ArrayBuffer.isView(T)?w[P]=T.slice():w[P]=T.clone(),!0;{const x=w[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(v){const E=v.uniforms;let y=0;const w=16;for(let P=0,x=E.length;P<x;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let L=0,R=A.length;L<R;L++){const U=A[L],W=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,I=W.length;Y<I;Y++){const H=W[Y],F=S(H),j=y%w,nt=j%F.boundary,ft=j+nt;y+=nt,ft!==0&&w-ft<F.storage&&(y+=w-ft),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=F.storage}}}const T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function S(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function eb(){return xn===null&&(xn=new gf(tb,16,16,Si,Bn),xn.name="DFG_LUT",xn.minFilter=Oe,xn.magFilter=Oe,xn.wrapS=On,xn.wrapT=On,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class nb{constructor(t={}){const{canvas:e=B_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ye}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=f,p=new Set([Jc,$c,Zc]),m=new Set([Ye,Tn,Bs,Hs,Yc,qc]),v=new Uint32Array(4),E=new Int32Array(4),y=new D;let w=null,T=null;const P=[],x=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let R=!1,U=null;this._outputColorSpace=tn;let W=0,Y=0,I=null,H=-1,F=null;const j=new Se,nt=new Se;let ft=null;const St=new te(0);let At=0,Yt=e.width,ee=e.height,Ht=1,$=null,gt=null;const ot=new Se(0,0,Yt,ee),Ct=new Se(0,0,Yt,ee);let Ot=!1;const Dt=new il;let ne=!1,Ft=!1;const J=new ae,it=new D,Q=new Se,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function kt(){return I===null?Ht:1}let C=i;function Gt(M,O){return e.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),C===null){const O="webgl2";if(C=Gt(O,M),C===null)throw Gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw jt("WebGLRenderer: "+M.message),M}let Rt,Bt,st,oe,b,_,k,K,tt,rt,lt,X,Z,Mt,bt,ut,at,zt,qt,re,N,ct,q;function yt(){Rt=new ey(C),Rt.init(),N=new YE(C,Rt),Bt=new qS(C,Rt,t,N),st=new WE(C,Rt),Bt.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),oe=new sy(C),b=new PE,_=new XE(C,Rt,st,b,Bt,N,oe),k=new ty(L),K=new cv(C),ct=new XS(C,K),tt=new ny(C,K,oe,ct),rt=new oy(C,tt,K,ct,oe),zt=new ry(C,Bt,_),bt=new KS(b),lt=new CE(L,k,Rt,Bt,ct,bt),X=new jE(L,b),Z=new LE,Mt=new kE(Rt),at=new WS(L,k,st,rt,g,l),ut=new VE(L,rt,Bt),q=new QE(C,oe,Bt,st),qt=new YS(C,Rt,oe),re=new iy(C,Rt,oe),oe.programs=lt.programs,L.capabilities=Bt,L.extensions=Rt,L.properties=b,L.renderLists=Z,L.shadowMap=ut,L.state=st,L.info=oe}yt(),S!==Ye&&(A=new cy(S,e.width,e.height,s,r));const ht=new $E(L,C);this.xr=ht,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(M){M!==void 0&&(Ht=M,this.setSize(Yt,ee,!1))},this.getSize=function(M){return M.set(Yt,ee)},this.setSize=function(M,O,V=!0){if(ht.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=M,ee=O,e.width=Math.floor(M*Ht),e.height=Math.floor(O*Ht),V===!0&&(e.style.width=M+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Yt*Ht,ee*Ht).floor()},this.setDrawingBufferSize=function(M,O,V){Yt=M,ee=O,Ht=V,e.width=Math.floor(M*V),e.height=Math.floor(O*V),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(S===Ye){jt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(ot)},this.setViewport=function(M,O,V,G){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,O,V,G),st.viewport(j.copy(ot).multiplyScalar(Ht).round())},this.getScissor=function(M){return M.copy(Ct)},this.setScissor=function(M,O,V,G){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,O,V,G),st.scissor(nt.copy(Ct).multiplyScalar(Ht).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(M){st.setScissorTest(Ot=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){gt=M},this.getClearColor=function(M){return M.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,V=!0){let G=0;if(M){let z=!1;if(I!==null){const vt=I.texture.format;z=p.has(vt)}if(z){const vt=I.texture.type,Tt=m.has(vt),_t=at.getClearColor(),wt=at.getClearAlpha(),It=_t.r,Xt=_t.g,Zt=_t.b;Tt?(v[0]=It,v[1]=Xt,v[2]=Zt,v[3]=wt,C.clearBufferuiv(C.COLOR,0,v)):(E[0]=It,E[1]=Xt,E[2]=Zt,E[3]=wt,C.clearBufferiv(C.COLOR,0,E))}else G|=C.COLOR_BUFFER_BIT}O&&(G|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),at.dispose(),Z.dispose(),Mt.dispose(),b.dispose(),k.dispose(),rt.dispose(),ct.dispose(),q.dispose(),lt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Al),ht.removeEventListener("sessionend",Rl),ri.stop()};function et(M){M.preventDefault(),au("WebGLRenderer: Context Lost."),R=!0}function Pt(){au("WebGLRenderer: Context Restored."),R=!1;const M=oe.autoReset,O=ut.enabled,V=ut.autoUpdate,G=ut.needsUpdate,z=ut.type;yt(),oe.autoReset=M,ut.enabled=O,ut.autoUpdate=V,ut.needsUpdate=G,ut.type=z}function Wt(M){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ye(M){const O=M.target;O.removeEventListener("dispose",ye),ue(O)}function ue(M){wn(M),b.remove(M)}function wn(M){const O=b.get(M).programs;O!==void 0&&(O.forEach(function(V){lt.releaseProgram(V)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,V,G,z,vt){O===null&&(O=xt);const Tt=z.isMesh&&z.matrixWorld.determinant()<0,_t=mp(M,O,V,G,z);st.setMaterial(G,Tt);let wt=V.index,It=1;if(G.wireframe===!0){if(wt=tt.getWireframeAttribute(V),wt===void 0)return;It=2}const Xt=V.drawRange,Zt=V.attributes.position;let Lt=Xt.start*It,he=(Xt.start+Xt.count)*It;vt!==null&&(Lt=Math.max(Lt,vt.start*It),he=Math.min(he,(vt.start+vt.count)*It)),wt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,wt.count)):Zt!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,Zt.count));const Ee=he-Lt;if(Ee<0||Ee===1/0)return;ct.setup(z,G,_t,V,wt);let Me,de=qt;if(wt!==null&&(Me=K.get(wt),de=re,de.setIndex(Me)),z.isMesh)G.wireframe===!0?(st.setLineWidth(G.wireframeLinewidth*kt()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(z.isLine){let De=G.linewidth;De===void 0&&(De=1),st.setLineWidth(De*kt()),z.isLineSegments?de.setMode(C.LINES):z.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else z.isPoints?de.setMode(C.POINTS):z.isSprite&&de.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const De=z._multiDrawStarts,Et=z._multiDrawCounts,ze=z._multiDrawCount,ie=wt?K.get(wt).bytesPerElement:1,Je=b.get(G).currentProgram.getUniforms();for(let gn=0;gn<ze;gn++)Je.setValue(C,"_gl_DrawID",gn),de.render(De[gn]/ie,Et[gn])}else if(z.isInstancedMesh)de.renderInstances(Lt,Ee,z.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,De);de.renderInstances(Lt,Ee,Et)}else de.render(Lt,Ee)};function mn(M,O,V){M.transparent===!0&&M.side===Sn&&M.forceSinglePass===!1?(M.side=Ge,M.needsUpdate=!0,$s(M,O,V),M.side=ei,M.needsUpdate=!0,$s(M,O,V),M.side=Sn):$s(M,O,V)}this.compile=function(M,O,V=null){V===null&&(V=M),T=Mt.get(V),T.init(O),x.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const G=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const vt=z.material;if(vt)if(Array.isArray(vt))for(let Tt=0;Tt<vt.length;Tt++){const _t=vt[Tt];mn(_t,V,z),G.add(_t)}else mn(vt,V,z),G.add(vt)}),T=x.pop(),G},this.compileAsync=function(M,O,V=null){const G=this.compile(M,O,V);return new Promise(z=>{function vt(){if(G.forEach(function(Tt){b.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){z(M);return}setTimeout(vt,10)}Rt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let yo=null;function fp(M){yo&&yo(M)}function Al(){ri.stop()}function Rl(){ri.start()}const ri=new If;ri.setAnimationLoop(fp),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(M){yo=M,ht.setAnimationLoop(M),M===null?ri.stop():ri.start()},ht.addEventListener("sessionstart",Al),ht.addEventListener("sessionend",Rl),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(M,O);const V=ht.enabled===!0&&ht.isPresenting===!0,G=A!==null&&(I===null||V)&&A.begin(L,I);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,O,I),T=Mt.get(M,x.length),T.init(O),T.state.textureUnits=_.getTextureUnits(),x.push(T),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Dt.setFromProjectionMatrix(J,yn,O.reversedDepth),Ft=this.localClippingEnabled,ne=bt.init(this.clippingPlanes,Ft),w=Z.get(M,P.length),w.init(),P.push(w),ht.enabled===!0&&ht.isPresenting===!0){const Tt=L.xr.getDepthSensingMesh();Tt!==null&&Eo(Tt,O,-1/0,L.sortObjects)}Eo(M,O,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort($,gt),dt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,dt&&at.addToRenderList(w,M),this.info.render.frame++,ne===!0&&bt.beginShadows();const z=T.state.shadowsArray;if(ut.render(z,M,O),ne===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const Tt=w.opaque,_t=w.transmissive;if(T.setupLights(),O.isArrayCamera){const wt=O.cameras;if(_t.length>0)for(let It=0,Xt=wt.length;It<Xt;It++){const Zt=wt[It];Cl(Tt,_t,M,Zt)}dt&&at.render(M);for(let It=0,Xt=wt.length;It<Xt;It++){const Zt=wt[It];wl(w,M,Zt,Zt.viewport)}}else _t.length>0&&Cl(Tt,_t,M,O),dt&&at.render(M),wl(w,M,O)}I!==null&&Y===0&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),G&&A.end(L),M.isScene===!0&&M.onAfterRender(L,M,O),ct.resetDefaultState(),H=-1,F=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),ne===!0&&bt.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,U!==null&&U.renderEnd()};function Eo(M,O,V,G){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Dt.intersectsSprite(M)){G&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const Tt=rt.update(M),_t=M.material;_t.visible&&w.push(M,Tt,_t,V,Q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Dt.intersectsObject(M))){const Tt=rt.update(M),_t=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Q.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Q.copy(Tt.boundingSphere.center)),Q.applyMatrix4(M.matrixWorld).applyMatrix4(J)),Array.isArray(_t)){const wt=Tt.groups;for(let It=0,Xt=wt.length;It<Xt;It++){const Zt=wt[It],Lt=_t[Zt.materialIndex];Lt&&Lt.visible&&w.push(M,Tt,Lt,V,Q.z,Zt)}}else _t.visible&&w.push(M,Tt,_t,V,Q.z,null)}}const vt=M.children;for(let Tt=0,_t=vt.length;Tt<_t;Tt++)Eo(vt[Tt],O,V,G)}function wl(M,O,V,G){const{opaque:z,transmissive:vt,transparent:Tt}=M;T.setupLightsView(V),ne===!0&&bt.setGlobalState(L.clippingPlanes,V),G&&st.viewport(j.copy(G)),z.length>0&&Zs(z,O,V),vt.length>0&&Zs(vt,O,V),Tt.length>0&&Zs(Tt,O,V),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Cl(M,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Lt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new bn(1,1,{generateMipmaps:!0,type:Lt?Bn:Ye,minFilter:mi,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const vt=T.state.transmissionRenderTarget[G.id],Tt=G.viewport||j;vt.setSize(Tt.z*L.transmissionResolutionScale,Tt.w*L.transmissionResolutionScale);const _t=L.getRenderTarget(),wt=L.getActiveCubeFace(),It=L.getActiveMipmapLevel();L.setRenderTarget(vt),L.getClearColor(St),At=L.getClearAlpha(),At<1&&L.setClearColor(16777215,.5),L.clear(),dt&&at.render(V);const Xt=L.toneMapping;L.toneMapping=En;const Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ne===!0&&bt.setGlobalState(L.clippingPlanes,G),Zs(M,V,G),_.updateMultisampleRenderTarget(vt),_.updateRenderTargetMipmap(vt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Ee=O.length;he<Ee;he++){const Me=O[he],{object:de,geometry:De,material:Et,group:ze}=Me;if(Et.side===Sn&&de.layers.test(G.layers)){const ie=Et.side;Et.side=Ge,Et.needsUpdate=!0,Pl(de,V,G,De,Et,ze),Et.side=ie,Et.needsUpdate=!0,Lt=!0}}Lt===!0&&(_.updateMultisampleRenderTarget(vt),_.updateRenderTargetMipmap(vt))}L.setRenderTarget(_t,wt,It),L.setClearColor(St,At),Zt!==void 0&&(G.viewport=Zt),L.toneMapping=Xt}function Zs(M,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,vt=M.length;z<vt;z++){const Tt=M[z],{object:_t,geometry:wt,group:It}=Tt;let Xt=Tt.material;Xt.allowOverride===!0&&G!==null&&(Xt=G),_t.layers.test(V.layers)&&Pl(_t,O,V,wt,Xt,It)}}function Pl(M,O,V,G,z,vt){M.onBeforeRender(L,O,V,G,z,vt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(L,O,V,G,M,vt),z.transparent===!0&&z.side===Sn&&z.forceSinglePass===!1?(z.side=Ge,z.needsUpdate=!0,L.renderBufferDirect(V,O,G,z,M,vt),z.side=ei,z.needsUpdate=!0,L.renderBufferDirect(V,O,G,z,M,vt),z.side=Sn):L.renderBufferDirect(V,O,G,z,M,vt),M.onAfterRender(L,O,V,G,z,vt)}function $s(M,O,V){O.isScene!==!0&&(O=xt);const G=b.get(M),z=T.state.lights,vt=T.state.shadowsArray,Tt=z.state.version,_t=lt.getParameters(M,z.state,vt,O,V,T.state.lightProbeGridArray),wt=lt.getProgramCacheKey(_t);let It=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Xt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=k.get(M.envMap||G.environment,Xt),G.envMapRotation=G.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",ye),It=new Map,G.programs=It);let Zt=It.get(wt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===Tt)return Ll(M,_t),Zt}else _t.uniforms=lt.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,V,_t),M.onBeforeCompile(_t,L),Zt=lt.acquireProgram(_t,wt),It.set(wt,Zt),G.uniforms=_t.uniforms;const Lt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=bt.uniform),Ll(M,_t),G.needsLights=_p(M),G.lightsStateVersion=Tt,G.needsLights&&(Lt.ambientLightColor.value=z.state.ambient,Lt.lightProbe.value=z.state.probe,Lt.directionalLights.value=z.state.directional,Lt.directionalLightShadows.value=z.state.directionalShadow,Lt.spotLights.value=z.state.spot,Lt.spotLightShadows.value=z.state.spotShadow,Lt.rectAreaLights.value=z.state.rectArea,Lt.ltc_1.value=z.state.rectAreaLTC1,Lt.ltc_2.value=z.state.rectAreaLTC2,Lt.pointLights.value=z.state.point,Lt.pointLightShadows.value=z.state.pointShadow,Lt.hemisphereLights.value=z.state.hemi,Lt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Lt.spotLightMatrix.value=z.state.spotLightMatrix,Lt.spotLightMap.value=z.state.spotLightMap,Lt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Zt,G.uniformsList=null,Zt}function Il(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Fr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Ll(M,O){const V=b.get(M);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function pp(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let V=0,G=M.length;V<G;V++){const z=M[V];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function mp(M,O,V,G,z){O.isScene!==!0&&(O=xt),_.resetTextureUnits();const vt=O.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,_t=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qt.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,It=k.get(G.envMap||Tt,wt),Xt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color;let Me=En;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Me=L.toneMapping);const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,De=de!==void 0?de.length:0,Et=b.get(G),ze=T.state.lights;if(ne===!0&&(Ft===!0||M!==F)){const me=M===F&&G.id===H;bt.setState(G,M,me)}let ie=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ze.state.version||Et.outputColorSpace!==_t||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==It||G.fog===!0&&Et.fog!==vt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==bt.numPlanes||Et.numIntersection!==bt.numIntersection)||Et.vertexAlphas!==Xt||Et.vertexTangents!==Zt||Et.morphTargets!==Lt||Et.morphNormals!==he||Et.morphColors!==Ee||Et.toneMapping!==Me||Et.morphTargetsCount!==De||!!Et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,Et.__version=G.version);let Je=Et.currentProgram;ie===!0&&(Je=$s(G,O,z),U&&G.isNodeMaterial&&U.onUpdateProgram(G,Je,Et));let gn=!1,zn=!1,Ai=!1;const fe=Je.getUniforms(),be=Et.uniforms;if(st.useProgram(Je.program)&&(gn=!0,zn=!0,Ai=!0),G.id!==H&&(H=G.id,zn=!0),Et.needsLights){const me=pp(T.state.lightProbeGridArray,z);Et.lightProbeGrid!==me&&(Et.lightProbeGrid=me,zn=!0)}if(gn||F!==M){st.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),fe.setValue(C,"projectionMatrix",M.projectionMatrix),fe.setValue(C,"viewMatrix",M.matrixWorldInverse);const Wn=fe.map.cameraPosition;Wn!==void 0&&Wn.setValue(C,it.setFromMatrixPosition(M.matrixWorld)),Bt.logarithmicDepthBuffer&&fe.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,zn=!0,Ai=!0)}if(Et.needsLights&&(ze.state.directionalShadowMap.length>0&&fe.setValue(C,"directionalShadowMap",ze.state.directionalShadowMap,_),ze.state.spotShadowMap.length>0&&fe.setValue(C,"spotShadowMap",ze.state.spotShadowMap,_),ze.state.pointShadowMap.length>0&&fe.setValue(C,"pointShadowMap",ze.state.pointShadowMap,_)),z.isSkinnedMesh){fe.setOptional(C,z,"bindMatrix"),fe.setOptional(C,z,"bindMatrixInverse");const me=z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),fe.setValue(C,"boneTexture",me.boneTexture,_))}z.isBatchedMesh&&(fe.setOptional(C,z,"batchingTexture"),fe.setValue(C,"batchingTexture",z._matricesTexture,_),fe.setOptional(C,z,"batchingIdTexture"),fe.setValue(C,"batchingIdTexture",z._indirectTexture,_),fe.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(C,"batchingColorTexture",z._colorsTexture,_));const Vn=V.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&zt.update(z,V,Je),(zn||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,fe.setValue(C,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(be.envMapIntensity.value=O.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=eb()),zn){if(fe.setValue(C,"toneMappingExposure",L.toneMappingExposure),Et.needsLights&&gp(be,Ai),vt&&G.fog===!0&&X.refreshFogUniforms(be,vt),X.refreshMaterialUniforms(be,G,Ht,ee,T.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.lightProbeGrid){const me=Et.lightProbeGrid;be.probesSH.value=me.texture,be.probesMin.value.copy(me.boundingBox.min),be.probesMax.value.copy(me.boundingBox.max),be.probesResolution.value.copy(me.resolution)}Fr.upload(C,Il(Et),be,_)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fr.upload(C,Il(Et),be,_),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(C,"center",z.center),fe.setValue(C,"modelViewMatrix",z.modelViewMatrix),fe.setValue(C,"normalMatrix",z.normalMatrix),fe.setValue(C,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const me=G.uniformsGroups;for(let Wn=0,Ri=me.length;Wn<Ri;Wn++){const Dl=me[Wn];q.update(Dl,Je),q.bind(Dl,Je)}}return Je}function gp(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function _p(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,O,V){const G=b.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(M.texture).__webglTexture=O,b.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const V=b.get(M);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};const xp=C.createFramebuffer();this.setRenderTarget=function(M,O=0,V=0){I=M,W=O,Y=V;let G=null,z=!1,vt=!1;if(M){const _t=b.get(M);if(_t.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(C.FRAMEBUFFER,_t.__webglFramebuffer),j.copy(M.viewport),nt.copy(M.scissor),ft=M.scissorTest,st.viewport(j),st.scissor(nt),st.setScissorTest(ft),H=-1;return}else if(_t.__webglFramebuffer===void 0)_.setupRenderTarget(M);else if(_t.__hasExternalTextures)_.rebindTextures(M,b.get(M.texture).__webglTexture,b.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Xt=M.depthTexture;if(_t.__boundDepthTexture!==Xt){if(Xt!==null&&b.has(Xt)&&(M.width!==Xt.image.width||M.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(M)}}const wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);const It=b.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[O])?G=It[O][V]:G=It[O],z=!0):M.samples>0&&_.useMultisampledRTT(M)===!1?G=b.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[V]:G=It,j.copy(M.viewport),nt.copy(M.scissor),ft=M.scissorTest}else j.copy(ot).multiplyScalar(Ht).floor(),nt.copy(Ct).multiplyScalar(Ht).floor(),ft=Ot;if(V!==0&&(G=xp),st.bindFramebuffer(C.FRAMEBUFFER,G)&&st.drawBuffers(M,G),st.viewport(j),st.scissor(nt),st.setScissorTest(ft),z){const _t=b.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,V)}else if(vt){const _t=O;for(let wt=0;wt<M.textures.length;wt++){const It=b.get(M.textures[wt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+wt,It.__webglTexture,V,_t)}}else if(M!==null&&V!==0){const _t=b.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_t.__webglTexture,V)}H=-1},this.readRenderTargetPixels=function(M,O,V,G,z,vt,Tt,_t=0){if(!(M&&M.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt){st.bindFramebuffer(C.FRAMEBUFFER,wt);try{const It=M.textures[_t],Xt=It.format,Zt=It.type;if(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Xt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Zt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-G&&V>=0&&V<=M.height-z&&C.readPixels(O,V,G,z,N.convert(Xt),N.convert(Zt),vt)}finally{const It=I!==null?b.get(I).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,O,V,G,z,vt,Tt,_t=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt)if(O>=0&&O<=M.width-G&&V>=0&&V<=M.height-z){st.bindFramebuffer(C.FRAMEBUFFER,wt);const It=M.textures[_t],Xt=It.format,Zt=It.type;if(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(O,V,G,z,N.convert(Xt),N.convert(Zt),0);const he=I!==null?b.get(I).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,he);const Ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await H_(C,Ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Lt),C.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,V=0){const G=Math.pow(2,-V),z=Math.floor(M.image.width*G),vt=Math.floor(M.image.height*G),Tt=O!==null?O.x:0,_t=O!==null?O.y:0;_.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Tt,_t,z,vt),st.unbindTexture()};const vp=C.createFramebuffer(),Mp=C.createFramebuffer();this.copyTextureToTexture=function(M,O,V=null,G=null,z=0,vt=0){let Tt,_t,wt,It,Xt,Zt,Lt,he,Ee;const Me=M.isCompressedTexture?M.mipmaps[vt]:M.image;if(V!==null)Tt=V.max.x-V.min.x,_t=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,It=V.min.x,Xt=V.min.y,Zt=V.isBox3?V.min.z:0;else{const be=Math.pow(2,-z);Tt=Math.floor(Me.width*be),_t=Math.floor(Me.height*be),M.isDataArrayTexture?wt=Me.depth:M.isData3DTexture?wt=Math.floor(Me.depth*be):wt=1,It=0,Xt=0,Zt=0}G!==null?(Lt=G.x,he=G.y,Ee=G.z):(Lt=0,he=0,Ee=0);const de=N.convert(O.format),De=N.convert(O.type);let Et;O.isData3DTexture?(_.setTexture3D(O,0),Et=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_.setTexture2DArray(O,0),Et=C.TEXTURE_2D_ARRAY):(_.setTexture2D(O,0),Et=C.TEXTURE_2D),st.activeTexture(C.TEXTURE0),st.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),st.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),st.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ze=st.getParameter(C.UNPACK_ROW_LENGTH),ie=st.getParameter(C.UNPACK_IMAGE_HEIGHT),Je=st.getParameter(C.UNPACK_SKIP_PIXELS),gn=st.getParameter(C.UNPACK_SKIP_ROWS),zn=st.getParameter(C.UNPACK_SKIP_IMAGES);st.pixelStorei(C.UNPACK_ROW_LENGTH,Me.width),st.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Me.height),st.pixelStorei(C.UNPACK_SKIP_PIXELS,It),st.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),st.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt);const Ai=M.isDataArrayTexture||M.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const be=b.get(M),Vn=b.get(O),me=b.get(be.__renderTarget),Wn=b.get(Vn.__renderTarget);st.bindFramebuffer(C.READ_FRAMEBUFFER,me.__webglFramebuffer),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ri=0;Ri<wt;Ri++)Ai&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(M).__webglTexture,z,Zt+Ri),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(O).__webglTexture,vt,Ee+Ri)),C.blitFramebuffer(It,Xt,Tt,_t,Lt,he,Tt,_t,C.DEPTH_BUFFER_BIT,C.NEAREST);st.bindFramebuffer(C.READ_FRAMEBUFFER,null),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||b.has(M)){const be=b.get(M),Vn=b.get(O);st.bindFramebuffer(C.READ_FRAMEBUFFER,vp),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mp);for(let me=0;me<wt;me++)Ai?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.__webglTexture,z,Zt+me):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,be.__webglTexture,z),fe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Vn.__webglTexture,vt,Ee+me):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vn.__webglTexture,vt),z!==0?C.blitFramebuffer(It,Xt,Tt,_t,Lt,he,Tt,_t,C.COLOR_BUFFER_BIT,C.NEAREST):fe?C.copyTexSubImage3D(Et,vt,Lt,he,Ee+me,It,Xt,Tt,_t):C.copyTexSubImage2D(Et,vt,Lt,he,It,Xt,Tt,_t);st.bindFramebuffer(C.READ_FRAMEBUFFER,null),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Et,vt,Lt,he,Ee,Tt,_t,wt,de,De,Me.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Et,vt,Lt,he,Ee,Tt,_t,wt,de,Me.data):C.texSubImage3D(Et,vt,Lt,he,Ee,Tt,_t,wt,de,De,Me):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,Lt,he,Tt,_t,de,De,Me.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,Lt,he,Me.width,Me.height,de,Me.data):C.texSubImage2D(C.TEXTURE_2D,vt,Lt,he,Tt,_t,de,De,Me);st.pixelStorei(C.UNPACK_ROW_LENGTH,ze),st.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie),st.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),st.pixelStorei(C.UNPACK_SKIP_ROWS,gn),st.pixelStorei(C.UNPACK_SKIP_IMAGES,zn),vt===0&&O.generateMipmaps&&C.generateMipmap(Et),st.unbindTexture()},this.initRenderTarget=function(M){b.get(M).__webglFramebuffer===void 0&&_.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_.setTextureCube(M,0):M.isData3DTexture?_.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_.setTexture2DArray(M,0):_.setTexture2D(M,0),st.unbindTexture()},this.resetState=function(){W=0,Y=0,I=null,st.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const dl=765,fl=503,ib=4,qi=512,xi=334,Bf=253,Hf=142,Gf=23,zf=Hf+Gf,Vf=xi+zf,xo=249,Ks=(Bf-xo)/2,Wf=164,Xf=29,sb=48,rb=172,ob=156,ab=8,pl=Ks+Xf,Xi=146,cb=13,lb=8,ub=pl+cb,hb=pl+2,db=2,fb=32,pb=xo,mb=Ks,gb=xo,_b=Ks,Yf=37,xb=2,vb=7,qf=Vf-Wf,Kf=qf-Yf*xb,Zf=26,$f=190,Mb=Kf,Jf=Zf*2+$f,Sb=Ks+Math.round((xo-Jf)/2),dh=Math.PI/2;function yb(n,t,e,i){const s=l=>{const c=n.getBoundingClientRect();return{x:(l.clientX-c.left)/c.width*qi,y:(l.clientY-c.top)/c.height*xi}},r=l=>{const{x:c,y:u}=s(l),d=i(c,u);t(d.x,d.y)},o=l=>{if(l.button!==0)return;l.preventDefault();const{x:c,y:u}=s(l),d=i(c,u);e(d.x,d.y)},a=()=>{t(NaN,NaN)};return n.addEventListener("pointermove",r),n.addEventListener("pointerdown",o),n.addEventListener("pointerleave",a),()=>{n.removeEventListener("pointermove",r),n.removeEventListener("pointerdown",o),n.removeEventListener("pointerleave",a)}}const He={deepWater:2648208,shallow:3836072,reefExposed:4884640,reefSubmerged:3174544,sand:13217914,grass:5081660,coralSolid:6965848,tideZone:3442856},ha=.12,Eb=.06,bb=.003,Tb=.35,Ab=16033736,Rb=15235240,wb=8964336;function fh(n,t=.9){return new Ce({color:n,roughness:t,flatShading:!0})}function Cb(){const n=new se,t=new Ut(new yi(.12,.16,.1,8),fh(Ab,.7));t.position.y=.05,n.add(t);const e=[-.08,-.04,0,.04,.08];for(const i of e){const s=new Ut(new xe(.03,.14,.03),fh(Rb,.85));s.position.set(i,-.08,0),n.add(s)}return n}class Pb{constructor(){B(this,"root",new se);B(this,"bubble");B(this,"currentX",0);B(this,"currentY",0);B(this,"currentZ",0);B(this,"initialized",!1);const t=Cb();this.bubble=new Ut(new ul(Tb,12,10),new Ce({color:wb,transparent:!0,opacity:.28,roughness:.15,metalness:.05,flatShading:!0})),this.root.add(this.bubble,t),this.root.visible=!1}sync(t,e,i,s,r){if(this.root.visible=t,!t)return;this.initialized||(this.currentX=e,this.currentY=i,this.currentZ=s,this.initialized=!0),this.currentX+=(e-this.currentX)*ha,this.currentY+=(i-this.currentY)*ha,this.currentZ+=(s-this.currentZ)*ha;const o=Math.sin(r*bb)*Eb;this.root.position.set(this.currentX,this.currentY+o,this.currentZ),this.root.rotation.y=r*4e-4}dispose(){this.root.traverse(t=>{t instanceof Ut&&(t.geometry.dispose(),t.material.dispose())})}}const ph=.25,da=.85,Ib=.55,Lb=.24,br=.5,Tr=.45,Db=.3;function vo(n){return Math.min(1,Math.max(0,n))}function un(n){const t=vo(n);return .5-.5*Math.cos(Math.PI*t)}function Rc(n,t){return Math.hypot(n,t)<1e-6?null:Math.atan2(t,n)}function mh(n,t,e){const i=Math.PI*2;let s=(t-n)%i;return s>Math.PI&&(s-=i),s<-Math.PI&&(s+=i),n+s*vo(e)}function jf(n){return Rc(n.end.x-n.start.x,n.end.y-n.start.y)??Rc(n.start.x-n.entry.x,n.start.y-n.entry.y)}function Nb(n,t){const e=jf(n);if(e===null)return null;const i=Rc(n.start.x-n.entry.x,n.start.y-n.entry.y)??e;if(t<=Un)return mh(i,e,un(t/Un));if(t>=da){const s=qe(nn(e))*Math.PI/180;return mh(e,s,(t-da)/(1-da))}return e}function Ub(n,t){const e=n.zoneRadius,i=Math.sin(t*Math.PI),s=un(t/ph)*un((1-t)/ph);return{liftY:e*.26+i*e*.05,pitch:0,roll:n.rideSide*s*.12,yawOffset:n.rideSide*s*(Math.PI/2),offsetX:0,offsetY:0,riderLean:-s*.1,riderCrouch:s*.2}}function Ob(n,t){const e=n.zoneRadius,i=e*.9;let s=0;if(t<.26){const o=t/.26;s=un(o)*e*.58}else if(t<.5){const o=(t-.26)/.24;s=e*.58+un(o)*(i-e*.58)}else{const o=(t-.5)/.5;s=i-un(o)*(i-e*.1)}const r=.3*Math.cos(t*Math.PI);return{liftY:s,pitch:r,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:r*.15,riderCrouch:0}}function Fb(n,t){const e=Math.sin(t*Math.PI);return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:-e*.35,riderCrouch:e*.45}}function kb(n,t){const e=n.zoneRadius,i=e*.34,s=Math.sin(t*Math.PI),r=jf(n)??n.rotationRadians,o={x:-Math.sin(r),y:Math.cos(r)},a=n.rideSide;return{liftY:e*.14+s*e*.42,pitch:0,roll:a*(.38+s*.12),yawOffset:0,offsetX:o.x*a*i*s,offsetY:o.y*a*i*s,riderLean:-s*.12,riderCrouch:s*.15}}function Bb(n,t){const e=n.zoneRadius,i=e*Ib,s=i*Lb,r=Un;let o,a,l=0;if(t<r){const c=t/r;o=un(c)*s,a=Tr*un(c)}else if(t<br){const c=(t-r)/(br-r);o=s+un(c)*(i-s),a=Tr}else{const c=(t-br)/(1-br);o=i*(1-un(c))+e*Db*Math.sin(Math.PI*c);const u=un(c/.92);a=Tr-u*(Math.PI*2+Tr),l=Math.sin(Math.PI*c)*.5}return{liftY:o,pitch:a,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0,riderCrouch:l}}function Hb(n){const t=vo(n)*Math.PI*2;return{liftY:.06+Math.sin(n*Math.PI)*.1,pitch:Math.sin(t)*.06,roll:Math.sin(t)*.35,yawOffset:t*.12,travelYawRadians:null,offsetX:0,offsetY:0,riderLean:Math.cos(t)*.12,riderCrouch:.2}}function Gb(n){const t=vo(n.progress);return{...(()=>{switch(n.type){case"rail":return Ub(n,t);case"brain_coral":return Ob(n,t);case"tunnel":return Fb(n,t);case"wall_ride":return kb(n,t);case"jump":return Bb(n,t);default:return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0,riderCrouch:0}}})(),travelYawRadians:Nb(n,t)}}function Ke(n,t,e=0){return{x:n,y:e,z:t}}function zb(n){return{x:n.x,y:n.z}}function wc(n){return-qe(n)*Math.PI/180}function ml(n){return-n}const fa=13145182,Vb=3829413,Wb=4860946,Mo=5917238,gl=13213798,_l=16041282,Qf=9067050,tp=13213776,Xb=7027242,Yb=13936690,gh=16746666,Ar=1.2,ep=11027500,np=6044190,qb=16033721,Kb=16777215,Zb=1.2,$b=1.25,_h=.4,xh=.35,ip=.32,sp=.28,vh=[{shirt:2984558,hair:2758672,boardWood:12093514,boardStripe:15258698},{shirt:9055566,hair:1839628,boardWood:13213798,boardStripe:6734568},{shirt:6971317,hair:3811864,boardWood:10123850,boardStripe:16033721},{shirt:12755516,hair:2365968,boardWood:12093514,boardStripe:9429114},{shirt:14700600,hair:1314828,boardWood:15919832,boardStripe:14698568}],Jb=.05,jb=.35;function Mh(n,t,e,i,s,r=null){const o=i?Gb(i):r!==null?Hb(r):null,a=Ke(n+((o==null?void 0:o.offsetX)??0),t+((o==null?void 0:o.offsetY)??0)),l=kc(n,t,s),c=o!==null&&o.travelYawRadians!==null?ml(o.travelYawRadians):wc(e);return{worldX:a.x,worldZ:a.z,boardY:l+((o==null?void 0:o.liftY)??0),rotationY:c+((o==null?void 0:o.yawOffset)??0),pitch:(o==null?void 0:o.pitch)??0,roll:(o==null?void 0:o.roll)??0,riderLean:(o==null?void 0:o.riderLean)??0,riderCrouch:(o==null?void 0:o.riderCrouch)??0}}function rp(n,t,e){const i=new se,s=new se;s.rotation.order="YXZ";const r=new se;r.position.y=Jb;const{group:o,cosmetics:a}=xl(n,t);return s.add(o,r),i.add(s),{rig:i,tilt:s,riderAnchor:r,wake:e,cosmetics:a}}function Sh(n,t,e){n.rig.position.set(e.worldX,e.boardY,e.worldZ),n.rig.rotation.y=e.rotationY,n.tilt.rotation.set(e.roll,0,e.pitch),t.position.set(0,0,0),t.rotation.set(0,0,e.riderLean),t.scale.y=1-e.riderCrouch*jb}function kr(n,t=.9){return new Ce({color:n,roughness:t,flatShading:!0})}function Nn(n,t,e,i,s,r,o){const a=new Ut(new xe(n,t,e),kr(i));return a.position.set(s,r,o),a}function So(n,t=1){const e=new se;return e.add(Nn(.09,.18,.08,n.pants,0,.09,-.055),Nn(.09,.18,.08,n.pants,0,.09,.055),Nn(.13,.24,.22,n.shirt,0,.3,0),Nn(.08,.2,.07,n.shirt,0,.32,-.145),Nn(.08,.2,.07,n.shirt,0,.32,.145),Nn(.06,.05,.06,fa,0,.195,-.145),Nn(.06,.05,.06,fa,0,.195,.145),Nn(.12,.13,.12,fa,0,.485,0)),n.hair!==null&&e.add(Nn(.13,.05,.13,n.hair,-.005,.565,0)),e.scale.setScalar(t),e}function Qb(){const n=new Ef;n.moveTo(-.62,-.13),n.lineTo(-.3,-.22),n.lineTo(.22,-.2),n.lineTo(.58,-.08),n.lineTo(.68,0),n.lineTo(.58,.08),n.lineTo(.22,.2),n.lineTo(-.3,.22),n.lineTo(-.62,.13),n.closePath();const t=new ll(n,{depth:.07,bevelEnabled:!1});return t.rotateX(-Math.PI/2),t.translate(0,-.035,0),t}function xl(n=gl,t=_l){const e=new se,i=kr(n,.8),s=new Ut(Qb(),i),r=kr(t),o=new Ut(new xe(.95,.02,.09),r);o.position.set(0,.04,0);const a=kr(n,.8),l=new Ut(new xe(.1,.12,.03),a);l.position.set(-.48,-.08,0);const c=new Ce({color:gh,emissive:gh,emissiveIntensity:.85,flatShading:!0}),u=new Ut(new xe(.92,.025,.02),c);u.position.set(0,.055,-.21),u.visible=!1;const d=new Ut(new xe(.92,.025,.02),c);return d.position.set(0,.055,.21),d.visible=!1,e.add(s,o,l,u,d),{group:e,cosmetics:{deckMat:i,stripeMat:r,finMat:a,railLeft:u,railRight:d}}}function yh(n,t){let e=gl,i=_l;t.has("rosewood_board")?(e=Xb,i=Yb):t.has("surf_guru_board")&&(e=Qf,i=tp),n.deckMat.color.setHex(e),n.finMat.color.setHex(e),n.stripeMat.color.setHex(i);const s=t.has("coral_rail_cosmetic");n.railLeft.visible=s,n.railRight.visible=s}function tT(){return So({shirt:Vb,pants:Mo,hair:Wb})}function op(n,t){const e=new se,i=new Ut(new yi(.5,.5,.02,16),new Ce({color:qb,transparent:!0,opacity:n}));i.scale.set(1.9,1,.8);const s=new Ut(new yi(.42,.42,.02,16),new Ce({color:Kb,transparent:!0,opacity:t}));return s.scale.set(1.6,1,.65),e.add(i,s),e.visible=!1,e}function Eh(n,t,e,i){const s=t?Zb:1;n.scale.set(s,1,s);const r=n.children[0],o=n.children[1];if(!(r instanceof Ut)||!(o instanceof Ut))return;const a=r.material,l=o.material;if(!(a instanceof Ce)||!(l instanceof Ce))return;const c=t?$b:1;a.opacity=e*c,l.opacity=i*c}function eT(n){const t=rp(n.boardWood,n.boardStripe,op(ip,sp)),e=So({shirt:n.shirt,pants:Mo,hair:n.hair});return t.riderAnchor.add(e),t.rig.visible=!1,{parts:t,rider:e}}function nT(){return So({shirt:ep,pants:Mo,hair:np},1.1)}function iT(){const n=new se,t=So({shirt:ep,pants:Mo,hair:np},1.1),{group:e}=xl(Qf,tp);return e.rotation.set(.15,0,-Math.PI/2.15),e.position.set(.1,.45,-.4),n.add(t,e),n}class sT{constructor(){B(this,"root",new se);B(this,"playerParts",rp(gl,_l,op(_h,xh)));B(this,"dockBoardMesh",xl());B(this,"player",tT());B(this,"pet",new Pb);B(this,"demoSurferPool",[]);B(this,"npcPool",[]);this.root.add(this.playerParts.rig,this.playerParts.wake,this.dockBoardMesh.group,this.player,this.pet.root)}sync(t,e,i=0){const s=t.progression.unlocked;yh(this.playerParts.cosmetics,s),yh(this.dockBoardMesh.cosmetics,s);const r=s.has("teeny_tai"),o=Ze(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y)),a=t.surfboard.speedState==="seated"&&o==="sand",l=a?0:qe(t.surfboard.currentHeading)*Math.PI/180,c=Mh(t.surfboard.position.x,t.surfboard.position.y,t.surfboard.currentHeading,t.trickAnimation,t.tide),u=a?0:wc(t.surfboard.currentHeading),d=c.boardY;this.playerParts.rig.visible=t.boardMounted,this.dockBoardMesh.group.visible=!t.boardMounted,this.player.visible=!0,this.syncNpcs(t,e),this.syncDemoSurfers(t);const h=qe(t.surfboard.currentHeading)*Math.PI/180;if(!t.boardMounted){const p=Ke(t.boardDockX,t.boardDockY),m=Ke(t.surfboard.position.x,t.surfboard.position.y),v=pi(t.boardDockX,t.boardDockY,"sand"),E=Ze(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y)),y=E==="grass"||E==="sand"?pi(t.surfboard.position.x,t.surfboard.position.y,E):v;this.dockBoardMesh.group.position.set(p.x,v,p.z),this.dockBoardMesh.group.rotation.set(0,0,0),this.player.parent!==this.root&&this.root.add(this.player),this.player.position.set(m.x,y,m.z),this.player.rotation.set(0,wc(t.surfboard.currentHeading),0),this.player.scale.y=1,this.playerParts.wake.visible=!1;const w=h+Math.PI;this.pet.sync(r,m.x+Math.cos(w)*Ar,y+.5,m.z+Math.sin(w)*Ar,i);return}this.player.parent!==this.playerParts.riderAnchor&&(this.playerParts.riderAnchor.add(this.player),this.player.rotation.set(0,0,0)),Sh(this.playerParts,this.player,c);const f=t.surfboard.speedState==="riding"&&t.trickAnimation===null,g=t.trickSpeedBoostTicksRemaining>0;if(this.playerParts.wake.visible=f,f){const p=l+Math.PI;this.playerParts.wake.position.set(c.worldX+Math.cos(p)*.85,d+.02,c.worldZ+Math.sin(p)*.85),this.playerParts.wake.rotation.set(0,u,0),Eh(this.playerParts.wake,g,_h,xh)}const S=l+Math.PI;this.pet.sync(r,c.worldX+Math.cos(S)*Ar,d+.25,c.worldZ+Math.sin(S)*Ar,i)}syncDemoSurfers(t){for(;this.demoSurferPool.length<t.demoSurfers.length;){const e=vh[this.demoSurferPool.length%vh.length],i=eT(e);this.demoSurferPool.push(i),this.root.add(i.parts.rig,i.parts.wake)}for(let e=0;e<this.demoSurferPool.length;e+=1){const i=this.demoSurferPool[e],s=t.demoSurfers[e];if(!s){i.parts.rig.visible=!1,i.parts.wake.visible=!1;continue}const r=Mh(s.surfboard.position.x,s.surfboard.position.y,s.surfboard.currentHeading,s.trickAnimation,t.tide,s.tideSpinProgress),o=qe(s.surfboard.currentHeading)*Math.PI/180;i.parts.rig.visible=!0,Sh(i.parts,i.rider,r);const a=s.trickAnimation===null&&(s.surfboard.speedState==="riding"||s.tideSpinProgress!==null),l=s.trickSpeedBoostTicksRemaining>0;if(i.parts.wake.visible=a,a){const c=o+Math.PI;i.parts.wake.position.set(r.worldX+Math.cos(c)*.85,r.boardY+.02,r.worldZ+Math.sin(c)*.85),i.parts.wake.rotation.set(0,r.rotationY,0),Eh(i.parts.wake,l,ip,sp)}}}syncNpcs(t,e){for(;this.npcPool.length<t.npcs.length;){const s=t.npcs[this.npcPool.length].id==="guru"?iT():nT();this.npcPool.push(s),this.root.add(s)}for(let i=0;i<this.npcPool.length;i+=1){const s=this.npcPool[i];if(i>=t.npcs.length){s.visible=!1;continue}const r=t.npcs[i];s.visible=!0;const o=Ke(r.x,r.y),a=Ze(e,Math.floor(r.x),Math.floor(r.y)),l=a==="grass"||a==="sand"?pi(r.x,r.y,a):pi(r.x,r.y,"sand");s.position.set(o.x,l,o.z),s.rotation.y=ml(Math.atan2(t.boardDockY-r.y,t.boardDockX-r.x))}}dispose(){this.pet.dispose(),this.root.traverse(t=>{t instanceof Ut&&(t.geometry.dispose(),t.material.dispose())})}}function ap(n,t,e,i){return n==="coral_rideable"&&i!==null?yd(t,e,i)/is>.35?"reef_submerged":"reef_exposed":n}function Qr(n){switch(n){case"deep_water":return He.deepWater;case"shallow":return He.shallow;case"reef_exposed":return He.reefExposed;case"reef_submerged":return He.reefSubmerged;case"sand":return He.sand;case"grass":return He.grass;case"coral_solid":return He.coralSolid;case"tide_zone":return He.tideZone;default:return He.deepWater}}const vn=new ae,pa=28,bh=.08,Rr=52,rT=.38,ma=8,ga=4;function Cc(n,t,e){var i,s;return e?((i=n.outerRadiusAtAngle)==null?void 0:i.call(n,t))??n.outerRadius:((s=n.innerRadiusAtAngle)==null?void 0:s.call(n,t))??n.innerRadius}function oT(n,t,e){const i=Cc(n,t,!1),s=Cc(n,t,!0);return i+(s-i)*e}function aT(n,t,e){const i=pe(e?t+.04:t-.04);return bd(i,n)}class cT{constructor(){B(this,"root",new se);B(this,"leading",null);B(this,"trailing",null);B(this,"washBody",null);B(this,"washCrest",null);B(this,"capacity",0);B(this,"washCapacity",0);const t=new Ce({color:15268095,transparent:!0,opacity:.75,roughness:.3,metalness:.05}),e=new Ce({color:9357536,transparent:!0,opacity:.45,roughness:.5,metalness:.05}),i=new Ce({color:16777215,transparent:!0,opacity:.94,roughness:.14,metalness:.02,emissive:13691647,emissiveIntensity:.24}),s=new Ce({color:16777215,transparent:!0,opacity:.82,roughness:.1,metalness:.04,emissive:16777215,emissiveIntensity:.14});this.capacity=pa*4;const r=Math.max(.35,Ta*.08);this.leading=new _i(new xe(1,r,.08),t,this.capacity),this.trailing=new _i(new xe(1,r,.08),e,this.capacity),this.washCapacity=Rr*ma*ga*2,this.washBody=new _i(new xe(1,1,1),i,this.washCapacity),this.washCrest=new _i(new xe(1,1,1),s,this.washCapacity);for(const o of[this.leading,this.trailing,this.washBody,this.washCrest])o.visible=!1,o.frustumCulled=!1;this.root.add(this.leading,this.trailing,this.washBody,this.washCrest)}sync(t){if(!t||!this.leading||!this.trailing||!this.washBody||!this.washCrest){for(const a of[this.leading,this.trailing,this.washBody,this.washCrest])a&&(a.visible=!1);return}const e=Ke(t.centerX,t.centerY),i=Math.max(.35,Ta*.08),s=[{angle:t.phaseRadians,leading:!0},{angle:pe(t.phaseRadians+t.sweepRadians),leading:!1}];let r=0,o=0;for(const a of s){const l=aT(t,a.angle,a.leading),c=a.leading?.18:.14,u=a.leading?this.leading:this.trailing;let d=a.leading?r:o;for(const h of[!1,!0]){const f=Cc(t,a.angle,h);for(let g=0;g<=pa&&!(d>=this.capacity);g+=1){const S=a.angle+c*(g/pa-.5),p=f+(h?bh:-bh),m=e.x+Math.cos(S)*p,v=e.z+Math.sin(S)*p,E=Sd(a.leading?.04:.96),y=a.leading?.75+l*.9:.45+l*.55;y<.05?vn.makeScale(0,0,0):vn.makeScale(y,i*(.8+l*1.1),y*.65),vn.setPosition(m,E+i*.45,v),u.setMatrixAt(d,vn),d+=1}}a.leading?r=d:o=d}this.leading.count=r,this.leading.instanceMatrix.needsUpdate=!0,this.leading.visible=r>0,this.trailing.count=o,this.trailing.instanceMatrix.needsUpdate=!0,this.trailing.visible=o>0,this.syncCurlingWash(t,e)}syncCurlingWash(t,e){if(!this.washBody||!this.washCrest)return;const i=pe(t.phaseRadians+t.sweepRadians),s=is;let r=0,o=0;for(let a=0;a<ga;a+=1){const l=a/ga,c=pe(i-l*.06),u=1-l*.22;for(let d=0;d<=Rr;d+=1){const h=c+rT*(d/Rr-.5),f=1-Math.abs(d/Rr-.5)*1.15;for(let g=0;g<ma&&!(r>=this.washCapacity||o>=this.washCapacity);g+=1){const S=(g+.5)/ma,p=oT(t,h,S),m=e.x+Math.cos(h)*p,v=e.z+Math.sin(h)*p,E=s*u*(.9+g%3*.05)*f,y=1.55+S*1.05-l*.2,w=.72+S*.38;vn.makeScale(y,E,w),vn.setPosition(m,E*.5,v),this.washBody.setMatrixAt(r,vn),r+=1;const T=E*.32,P=E*.92,x=l*.35+S*.12,A=e.x+Math.cos(h-x)*(p-.15),L=e.z+Math.sin(h-x)*(p-.15);vn.makeScale(y*1.6,T,w*1.4),vn.setPosition(A,P+T*.42,L),this.washCrest.setMatrixAt(o,vn),o+=1}}}this.washBody.count=r,this.washBody.instanceMatrix.needsUpdate=!0,this.washBody.visible=r>0,this.washCrest.count=o,this.washCrest.instanceMatrix.needsUpdate=!0,this.washCrest.visible=o>0}dispose(){for(const t of[this.leading,this.trailing,this.washBody,this.washCrest])t&&(t.geometry.dispose(),t.material.dispose(),t.removeFromParent());this.leading=null,this.trailing=null,this.washBody=null,this.washCrest=null}}const Ki=.06,wr=Ki/2,lT=.35,Qe=new ae,uT=.01,hT=.08,dT=.35,Th=new ae().makeScale(0,0,0),fT=new Set(["coral_rideable","shallow"]),Ah=new te(He.reefExposed),pT=new te(He.reefSubmerged);function Rh(n,t){const e=new Map;for(let i=0;i<n.heightTiles;i+=1)for(let s=0;s<n.widthTiles;s+=1){const r=n.tiles[i][s];let o=null;if(t&&(r==="grass"||r==="sand"))o=Qr(r);else if(!t&&r!=="deep_water"&&r!=="grass"&&r!=="sand"&&r!=="coral_rideable"){const l=ap(r,s+.5,i+.5,null);o=Qr(l)}if(o===null)continue;const a=e.get(o)??[];a.push({tx:s,ty:i}),e.set(o,a)}return e}function mT(n){const t=[];for(let e=0;e<n.heightTiles;e+=1)for(let i=0;i<n.widthTiles;i+=1)n.tiles[e][i]==="coral_rideable"&&t.push({tx:i,ty:e});return t}function gT(n,t,e){return e==="grass"||e==="sand"?pi(n+.5,t+.5,e):Ki}function wh(n,t,e,i){const s=[];for(const[r,o]of n){const a=new _i(new xe(1,1,1),new Ce({color:r}),o.length);a.castShadow=!1,a.receiveShadow=!1;for(let l=0;l<o.length;l+=1){const{tx:c,ty:u}=o[l],d=t.tiles[u][c],h=i.landElevation?gT(c,u,d):i.flatHeight,f=i.landElevation?h/2:i.flatCenterY;Qe.makeScale(1,h,1),Qe.setPosition(c+.5,f,u+.5),a.setMatrixAt(l,Qe),fT.has(d)&&e.push({tx:c,ty:u,mesh:a,index:l,baseCenterY:f,tileHeight:h,angle:0,inRing:!0,lastWave:Number.NaN})}a.instanceMatrix.needsUpdate=!0,s.push(a)}return s}function _a(n){for(const t of n)t.geometry.dispose(),t.material.dispose()}class _T{constructor(){B(this,"root",new se);B(this,"tideEdges",new cT);B(this,"water",null);B(this,"landMeshes",[]);B(this,"overlayMeshes",[]);B(this,"tideAnimInstances",[]);B(this,"waterCaps",null);B(this,"coralMesh",null);B(this,"coralTiles",[]);B(this,"coralSubmerged",new Uint8Array(0));B(this,"polarReady",!1);B(this,"mapKey",null);this.root.add(this.tideEdges.root)}build(t,e){const i=`${t.widthTiles}x${t.heightTiles}:${Jp()}`;if(this.mapKey===i)return;this.destroy();const s=new Ce({color:He.deepWater,roughness:.85,metalness:.05});this.water=new Ut(new cs(t.widthTiles,t.heightTiles),s),this.water.rotation.x=-Math.PI/2,this.water.position.set(t.widthTiles/2,0,t.heightTiles/2),this.water.receiveShadow=!0,this.root.add(this.water);const r=Rh(t,!0);this.landMeshes=wh(r,t,[],{landElevation:!0,flatHeight:Ki,flatCenterY:wr});for(const o of this.landMeshes)this.root.add(o);this.rebuildOverlay(t,e),this.mapKey=i}rebuildOverlay(t,e){for(const s of this.overlayMeshes)this.root.remove(s);_a(this.overlayMeshes),this.overlayMeshes=[],this.waterCaps&&(this.root.remove(this.waterCaps),this.waterCaps.geometry.dispose(),this.waterCaps.material.dispose(),this.waterCaps=null),this.coralMesh&&(this.root.remove(this.coralMesh),this.coralMesh.geometry.dispose(),this.coralMesh.material.dispose(),this.coralMesh=null),this.tideAnimInstances=[];const i=Rh(t,!1);this.overlayMeshes=wh(i,t,this.tideAnimInstances,{landElevation:!1,flatHeight:Ki,flatCenterY:wr});for(const s of this.overlayMeshes)this.root.add(s);if(this.buildCoralMesh(t),this.tideAnimInstances.length>0){this.waterCaps=new _i(new xe(1,1,1),new Ce({color:He.shallow,transparent:!0,opacity:.62,roughness:.35,metalness:.1}),this.tideAnimInstances.length);for(let s=0;s<this.tideAnimInstances.length;s+=1)this.waterCaps.setMatrixAt(s,Th);this.waterCaps.instanceMatrix.needsUpdate=!0,this.root.add(this.waterCaps)}this.polarReady=!1,this.updateTideVisuals(t,e)}buildCoralMesh(t){if(this.coralTiles=mT(t),this.coralSubmerged=new Uint8Array(this.coralTiles.length).fill(255),this.coralTiles.length===0)return;const e=new _i(new xe(1,1,1),new Ce({color:16777215}),this.coralTiles.length);e.castShadow=!1,e.receiveShadow=!1;for(let i=0;i<this.coralTiles.length;i+=1){const{tx:s,ty:r}=this.coralTiles[i];Qe.makeScale(1,Ki,1),Qe.setPosition(s+.5,wr,r+.5),e.setMatrixAt(i,Qe),e.setColorAt(i,Ah),this.tideAnimInstances.push({tx:s,ty:r,mesh:e,index:i,baseCenterY:wr,tileHeight:Ki,angle:0,inRing:!0,lastWave:Number.NaN})}e.instanceMatrix.needsUpdate=!0,this.coralMesh=e,this.root.add(e)}initPolarCache(t){var e,i;for(const s of this.tideAnimInstances){const r=s.tx+.5-t.centerX,o=s.ty+.5-t.centerY,a=Math.hypot(r,o);s.angle=Math.atan2(o,r);const l=((e=t.innerRadiusAtAngle)==null?void 0:e.call(t,s.angle))??t.innerRadius,c=((i=t.outerRadiusAtAngle)==null?void 0:i.call(t,s.angle))??t.outerRadius;s.inRing=a>=l-.5&&a<=c+.5,s.lastWave=Number.NaN}this.polarReady=!0}updateTideVisuals(t,e){var o;e&&!this.polarReady&&this.initPolarCache(e);const i=new Set;let s=!1,r=!1;for(let a=0;a<this.tideAnimInstances.length;a+=1){const l=this.tideAnimInstances[a],c=e&&l.inRing?Fc(l.angle,e):0;if(Math.abs(c-l.lastWave)<uT)continue;l.lastWave=c;const u=c/is,d=l.baseCenterY-u*ba;if(Qe.makeScale(1,l.tileHeight,1),Qe.setPosition(l.tx+.5,d,l.ty+.5),l.mesh.setMatrixAt(l.index,Qe),i.add(l.mesh),this.waterCaps){if(c<hT)this.waterCaps.setMatrixAt(a,Th);else{const h=l.baseCenterY-l.tileHeight/2-u*ba,f=Math.max(lT,c-h);Qe.makeScale(1,f,1),Qe.setPosition(l.tx+.5,h+f/2,l.ty+.5),this.waterCaps.setMatrixAt(a,Qe)}s=!0}if(this.coralMesh&&l.mesh===this.coralMesh){const h=u>dT?1:0;this.coralSubmerged[l.index]!==h&&(this.coralSubmerged[l.index]=h,this.coralMesh.setColorAt(l.index,h?pT:Ah),r=!0)}}for(const a of i)a.instanceMatrix.needsUpdate=!0;s&&this.waterCaps&&(this.waterCaps.instanceMatrix.needsUpdate=!0),r&&((o=this.coralMesh)!=null&&o.instanceColor)&&(this.coralMesh.instanceColor.needsUpdate=!0),this.tideEdges.sync(e)}setWaterScroll(t,e){if(!this.water)return;const i=this.water.material;i.map=null}destroy(){this.water&&(this.water.geometry.dispose(),this.water.material.dispose(),this.root.remove(this.water),this.water=null);for(const t of this.landMeshes)this.root.remove(t);_a(this.landMeshes),this.landMeshes=[];for(const t of this.overlayMeshes)this.root.remove(t);_a(this.overlayMeshes),this.overlayMeshes=[],this.waterCaps&&(this.root.remove(this.waterCaps),this.waterCaps.geometry.dispose(),this.waterCaps.material.dispose(),this.waterCaps=null),this.coralMesh&&(this.root.remove(this.coralMesh),this.coralMesh.geometry.dispose(),this.coralMesh.material.dispose(),this.coralMesh=null),this.coralTiles=[],this.coralSubmerged=new Uint8Array(0),this.tideAnimInstances=[],this.polarReady=!1,this.tideEdges.sync(null),this.mapKey=null}}const xT=Math.PI*.75,vT=.55,MT=28,Ch=.15,Ph=1.45,ST=8,yT=160,Ih=1.8,Lh=1.2,Dh=.004,ET=.08,bT=.6;class TT{constructor(t){B(this,"camera");B(this,"yaw",xT);B(this,"pitch",vT);B(this,"distance",MT);B(this,"focusTarget",new D);B(this,"focusCurrent",new D);B(this,"focusInitialized",!1);B(this,"scratch",new D);B(this,"middleMouseDragging",!1);B(this,"lastPointerX",0);B(this,"lastPointerY",0);B(this,"arrowLeft",!1);B(this,"arrowRight",!1);B(this,"arrowUp",!1);B(this,"arrowDown",!1);this.camera=new en(50,t,.1,500)}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setFocus(t,e){const i=Ke(t,e,bT);this.focusTarget.set(i.x,i.y,i.z),this.focusInitialized||(this.focusCurrent.copy(this.focusTarget),this.focusInitialized=!0)}update(t){const e=1-Math.exp(-10*t);this.focusCurrent.lerp(this.focusTarget,e),this.arrowLeft&&(this.yaw+=Ih*t),this.arrowRight&&(this.yaw-=Ih*t),this.arrowUp&&(this.pitch=Math.min(Ph,this.pitch+Lh*t)),this.arrowDown&&(this.pitch=Math.max(Ch,this.pitch-Lh*t));const i=Math.cos(this.pitch),s=Math.sin(this.pitch),r=Math.cos(this.yaw),o=Math.sin(this.yaw);this.scratch.set(this.distance*i*r,this.distance*s,this.distance*i*o),this.camera.position.copy(this.focusCurrent).add(this.scratch),this.camera.lookAt(this.focusCurrent)}handleKeyDown(t){switch(t){case"ArrowLeft":return this.arrowLeft=!0,!0;case"ArrowRight":return this.arrowRight=!0,!0;case"ArrowUp":return this.arrowUp=!0,!0;case"ArrowDown":return this.arrowDown=!0,!0;default:return!1}}handleKeyUp(t){switch(t){case"ArrowLeft":return this.arrowLeft=!1,!0;case"ArrowRight":return this.arrowRight=!1,!0;case"ArrowUp":return this.arrowUp=!1,!0;case"ArrowDown":return this.arrowDown=!1,!0;default:return!1}}onPointerDown(t){t.button===1&&(t.preventDefault(),this.middleMouseDragging=!0,this.lastPointerX=t.clientX,this.lastPointerY=t.clientY)}onPointerMove(t){if(!this.middleMouseDragging)return;const e=t.clientX-this.lastPointerX,i=t.clientY-this.lastPointerY;this.lastPointerX=t.clientX,this.lastPointerY=t.clientY,this.yaw+=e*Dh,this.pitch=Math.max(Ch,Math.min(Ph,this.pitch+i*Dh))}onPointerUp(t){t.button===1&&this.endMiddleMouseDrag()}onPointerCancel(){this.endMiddleMouseDrag()}endMiddleMouseDrag(){this.middleMouseDragging=!1}onWheel(t){const e=1+t*ET*.001;this.distance=Math.max(ST,Math.min(yT,this.distance*e))}getCompassRotationRadians(){return dh-this.yaw}getViewFacingRadians(){return this.yaw+Math.PI}snapNorth(){this.yaw=dh}}const Ss=.2,AT=1.4,Nh=.9,Uh=51380,RT=.3,wT=.9,CT=.07;function PT(){const n=new se,t=new Ut(new cs(1,1),new po({color:Uh,transparent:!0,opacity:RT,side:Sn,depthWrite:!1}));t.rotation.x=-Math.PI/2;const e=.5,i=new Le;i.setAttribute("position",new _e([-e,0,-e,e,0,-e,e,0,e,-e,0,e],3));const s=new dx(i,new sl({color:Uh,transparent:!0,opacity:wT}));return n.add(t,s),n.visible=!1,n}function IT(n,t,e=1){const i=new Le;return i.setAttribute("position",new _e(n,3)),new rl(i,new sl({color:t,transparent:e<1,opacity:e}))}class LT{constructor(){B(this,"root",new se);B(this,"walkClick",new se);B(this,"tide",new se);B(this,"facing",new se);B(this,"headingArrow",new se);B(this,"intendedGhost",new se);B(this,"trueTile",PT());B(this,"trueTileEnabled",!1);B(this,"lines",[]);this.root.add(this.walkClick,this.tide,this.facing,this.headingArrow,this.intendedGhost,this.trueTile)}sync(t,e){this.clearDynamic(),this.drawWalkClick(t),this.drawTide(t),this.drawFacing(t,e),this.drawHeadingArrow(t),this.drawIntendedGhost(t),this.updateTrueTile(t,e)}setTrueTileVisible(t){this.trueTileEnabled=t,this.trueTile.visible=t}updateTrueTile(t,e){if(!this.trueTileEnabled)return;const i=Math.floor(t.simulationPosition.x),s=Math.floor(t.simulationPosition.y),r=Ze(e,i,s),o=r==="grass"||r==="sand"?pi(i+.5,s+.5,r):kc(i+.5,s+.5,t.tide);this.trueTile.position.set(i+.5,o+CT,s+.5)}clearDynamic(){for(const t of this.lines)t.geometry.dispose(),t.material.dispose(),t.removeFromParent();this.lines=[],this.walkClick.clear(),this.tide.clear(),this.facing.clear(),this.headingArrow.clear(),this.intendedGhost.clear()}addLine(t,e,i,s=1){const r=IT(e,i,s);t.add(r),this.lines.push(r)}drawWalkClick(t){if(t.boardMounted||t.walkTargetTx===null||t.walkTargetTy===null)return;const e=t.walkTargetTx,i=t.walkTargetTy,s=t.walkClickValid?16776960:16729156,r=.15;this.addLine(this.walkClick,[e+r,Ss,i+r,e+1-r,Ss,i+1-r],s),this.addLine(this.walkClick,[e+1-r,Ss,i+r,e+r,Ss,i+1-r],s)}drawTide(t){const e=t.tide;if(!e)return;const i=Ke(e.centerX,e.centerY),s=[e.phaseRadians,pe(e.phaseRadians+e.sweepRadians)],r=.12,o=36;for(const a of s)for(const l of[e.innerRadius,e.outerRadius]){const c=[];for(let u=0;u<=o;u+=1){const d=a+r*(u/o-.5);c.push(i.x+Math.cos(d)*l,Ss*.5,i.z+Math.sin(d)*l)}this.addLine(this.tide,c,12118271,.55)}}drawFacing(t,e){const i=Ke(t.surfboard.position.x,t.surfboard.position.y);let s;if(!t.boardMounted){s=qe(t.surfboard.currentHeading)*Math.PI/180;const d=.35,h=i.y+.35;this.addLine(this.facing,[i.x,h,i.z,i.x+Math.cos(s)*d,h,i.z+Math.sin(s)*d],16777215);return}const r=Ze(e,Math.floor(t.surfboard.position.x),Math.floor(t.surfboard.position.y));s=t.surfboard.speedState==="seated"&&r==="sand"?0:qe(t.surfboard.currentHeading)*Math.PI/180;const a=.55,l=i.x+Math.cos(s)*a,c=i.z+Math.sin(s)*a;this.addLine(this.facing,[i.x,i.y+.15,i.z,l,i.y+.15,c],16777215);const u=new Ut(new mo(.01,.08,4,12),new po({color:16777215}));u.position.set(l,i.y+.15,c),u.rotation.x=Math.PI/2,this.facing.add(u)}drawHeadingArrow(t){if(!t.boardMounted||t.hoverHeading===null||t.cursorWorldX===null||t.cursorWorldY===null)return;const e=Ke(t.surfboard.position.x,t.surfboard.position.y),i=qe(t.hoverHeading)*Math.PI/180,s=e.x+Math.cos(i)*Nh,r=e.z+Math.sin(i)*Nh,o=t.clickValid?16777215:16729156;this.addLine(this.headingArrow,[e.x,e.y+.18,e.z,s,e.y+.18,r],o,.5);const a=AT*.5,l=s+Math.cos(i)*a,c=r+Math.sin(i)*a;this.addLine(this.headingArrow,[s,e.y+.18,r,l,e.y+.18,c],o)}drawIntendedGhost(t){if(!t.boardMounted||t.surfboard.currentHeading===t.surfboard.intendedHeading)return;const e=Ke(t.surfboard.position.x,t.surfboard.position.y),i=qe(t.surfboard.intendedHeading)*Math.PI/180,s=.45;this.addLine(this.intendedGhost,[e.x,e.y+.16,e.z,e.x+Math.cos(i)*s,e.y+.16,e.z+Math.sin(i)*s],11193599,.6)}dispose(){this.clearDynamic();for(const t of this.trueTile.children)(t instanceof Ut||t instanceof rl)&&(t.geometry.dispose(),t.material.dispose());this.trueTile.clear()}}const DT=.06,NT=.2,vl="trick-hitbox",UT=1,cp=.55,OT=.12,lp=.14,FT=2.2,kT=.5;function BT(n,t){switch(n){case"tunnel":return t*(Oc+oo+Im);case"wall_ride":return t*1.125;case"brain_coral":return t*.8;case"jump":return t*(cp+lp*.5);case"rail":default:return t*.57}}function HT(n,t){return BT(n,t)+DT+NT}function up(n,t){return t?kc(n.center.x,n.center.y,t)-Ir:0}function GT(n,t,e,i){const s=up(n,t);if(!i)return s;const r=Hm(n,t,e);return s-r*HT(n.type,n.radius)}function zT(n){switch(n){case"rail":return{base:16033721,accent:16041282};case"tunnel":return{base:10185727,accent:13219071};case"jump":return{base:16747586,accent:16769126};case"brain_coral":return{base:16740020,accent:16752338};case"wall_ride":return{base:7260415,accent:12117759};default:return{base:16033721,accent:16041282}}}function pn(n,t){return new Ce({color:n,transparent:t<1,opacity:t,roughness:.7,metalness:.1,flatShading:!0})}function VT(n,t,e,i){const s=n.getObjectByName(vl);{s&&(s.visible=!1);return}}function Oh(n,t,e){const i=new se,s=n*.24,r=new Ut(new xe(n*2.3,n*.08,n*.12),pn(t.accent,e));r.position.y=s;for(const o of[-1,1]){const a=new Ut(new xe(n*.14,s,n*.14),pn(t.base,e));a.position.set(o*n*.85,s/2,0);const l=new Ut(new xe(n*.3,n*.06,n*.3),pn(t.base,e));l.position.set(o*n*.85,n*.03,0),i.add(a,l)}return i.add(r),i}function WT(n,t,e){const i=new se,s=new Ut(new mo(n*Oc,n*oo,6,12,Math.PI),pn(t.accent,e));return s.scale.set(1,1,dd),s.position.y=n*fd,i.add(s),i.rotation.y=Math.PI/2,i}function Fh(n,t,e,i){const s=n*UT,r=n*cp,o=n*OT,a=n*lp,l=n*FT,c=r+o,u=Math.atan2(c,s),d=s*kT,h=s+d,f=a/2*Math.cos(u)+h/2*Math.sin(u),g=r-f,S=-t*(a/2*Math.sin(u)-h/2*Math.cos(u)),p=new Ut(new xe(l,a,h),pn(e.base,i));return p.position.set(0,g,S),p.rotation.x=t*u,p}function XT(n,t,e){const i=new se;return i.add(Fh(n,-1,t,e),Fh(n,1,t,e)),i.rotation.y=Math.PI/2,i}function YT(n,t,e){const i=new se,s=new Ut(new Is(n*.55,1),pn(t.base,e));s.position.y=n*.32,s.scale.y=.8;const r=new Ut(new Is(n*.3,0),pn(t.accent,e));r.position.set(n*.25,n*.48,n*.15);const o=new Ut(new Is(n*.2,0),pn(t.accent,e));return o.position.set(-n*.28,n*.42,-n*.18),i.add(s,r,o),i}function qT(n,t,e){const i=new se,s=new Ut(new xe(n*.24,n*1.15,n*1.35),pn(t.base,e));s.position.set(0,n*.48,0);const r=new Ut(new xe(n*.34,n*.14,n*1.45),pn(t.accent,e));return r.position.y=n*1.02,i.add(s,r),i.rotation.y=Math.PI/2,i}function KT(n,t,e,i){switch(n){case"rail":return Oh(t,e,i);case"tunnel":return WT(t,e,i);case"jump":return XT(t,e,i);case"brain_coral":return YT(t,e,i);case"wall_ride":return qT(t,e,i);default:return Oh(t,e,i)}}function ZT(n,t,e,i){const s=pn(16774502,i*.9),r=t==="jump"?[-1,1]:[1];for(const o of r){const a=new se;a.rotation.y=Math.PI/2;for(const l of[-.72,-.52,-.32]){const c=new Ut(new zs(e*.15,e*.25,3),s);c.rotation.x=Math.PI,c.rotation.z=Math.PI,c.position.set(0,e*.08,o*(e*l+e*.22)),a.add(c)}n.add(a)}}function $T(n){const t=n.children.filter(e=>e.name!==vl);for(const e of t)n.remove(e),e.traverse(i=>{if(i instanceof Ut){i.geometry.dispose();const s=i.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}})}function JT(n,t,e){const i=!n.tricked&&!e&&t.trickPrepare!==null&&t.trickPrepare.slot===n.prepareSlot;return`${n.id}:${n.type}:${n.radius}:${i}`}function jT(n,t){n.traverse(e=>{if(e instanceof Ut&&e.name!==vl){const i=e.material;i.opacity=t,i.transparent=t<1}})}class QT{constructor(){B(this,"root",new se);B(this,"pool",[]);B(this,"meshKeys",[])}sync(t,e=0){const i=t.tide,s=t.trickZones;for(;this.pool.length<s.length;){const r=new se;this.pool.push(r),this.meshKeys.push(""),this.root.add(r)}for(let r=0;r<this.pool.length;r+=1){const o=this.pool[r];if(r>=s.length){o.visible=!1;continue}const a=s[r];o.visible=!0;const l=i?ii(a,i):!1,u=_d(a,i,e),d=JT(a,t,l);if(this.meshKeys[r]!==d){$T(o);const g=zT(a.type),S=KT(a.type,a.radius,g,u);o.add(S),!a.tricked&&!l&&t.trickPrepare!==null&&t.trickPrepare.slot===a.prepareSlot&&ZT(o,a.type,a.radius,u),this.meshKeys[r]=d}else jT(o,u);const h=Ke(a.center.x,a.center.y),f=GT(a,i,e,l);up(a,i),VT(o,a.type,a.radius),o.position.set(h.x,f,h.z),o.rotation.y=ml(a.rotationRadians+(a.rotationJitterRadians??0))}}dispose(){for(const t of this.pool)t.traverse(e=>{e instanceof Ut&&(e.geometry.dispose(),e.material.dispose())});this.pool=[],this.root.clear()}}const tA=10189884,eA=8018984,nA=7031338,iA=12096616,sA=[{angle:Math.PI/2-.35,distanceShare:.55,footprint:5,facing:Math.PI/2},{angle:Math.PI/2+.55,distanceShare:.6,footprint:3.6,facing:Math.PI/2+.6},{angle:-2.7,distanceShare:.58,footprint:4.2,facing:-2.7},{angle:-.2,distanceShare:.5,footprint:3.2,facing:-.2}];function Cr(n){return new Ce({color:n,roughness:.9,flatShading:!0})}function rA(n){const t=new se,e=n*.05,i=n*.24,s=n*.38,r=n*.5,o=n*.36,a=new Ut(new xe(r*2.2,e,o*2.3),Cr(iA));a.position.y=e/2,t.add(a);for(const d of[-1,1])for(const h of[-1,1]){const f=new Ut(new yi(n*.035,n*.045,i,5),Cr(nA));f.position.set(d*r*.85,e+i/2,h*o*.85),t.add(f)}const l=e+i,c=new Ut(new zs(n*.78,s,4),Cr(tA));c.scale.set(1.25,1,.95),c.rotation.y=Math.PI/4,c.position.y=l+s/2,t.add(c);const u=new Ut(new zs(n*.16,s*.28,4),Cr(eA));return u.rotation.y=Math.PI/4,u.position.y=l+s+s*.1,t.add(u),t}function oA(){const n=new se;for(const t of sA){const e=Ic(t.angle)*t.distanceShare,i=sn+Math.cos(t.angle)*e,s=rn+Math.sin(t.angle)*e,r=pi(i,s,"grass"),o=rA(t.footprint),a=Ke(i,s);o.position.set(a.x,r,a.z),o.rotation.y=-t.facing+Math.PI/2,n.add(o)}return n}function aA(n){n.traverse(t=>{t instanceof Ut&&(t.geometry.dispose(),t.material.dispose())})}const xa=new D,va=new D,Ma=new pt,Wi=new D;class cA{constructor(){B(this,"renderer",null);B(this,"scene",null);B(this,"orbitCamera",null);B(this,"raycaster",new ov);B(this,"mapMeshes",null);B(this,"entities",null);B(this,"tricks",null);B(this,"overlays",null);B(this,"village",null);B(this,"container",null);B(this,"lastFrameMs",0);B(this,"unbindPointer",null);B(this,"unbindCamera",null);B(this,"xpContainer",null)}async init(t,e){this.container=t,this.renderer=new nb({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setSize(qi,xi,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(He.deepWater),t.appendChild(this.renderer.domElement),this.scene=new nx;const i=new iv(16777215,.55),s=new nv(16774368,.85);s.position.set(40,80,30),this.scene.add(i,s),this.orbitCamera=new TT(qi/xi),this.mapMeshes=new _T,this.entities=new sT,this.tricks=new QT,this.overlays=new LT,this.village=oA(),this.scene.add(this.mapMeshes.root,this.tricks.root,this.entities.root,this.overlays.root,this.village),this.xpContainer=document.createElement("div"),this.xpContainer.className="xp-drop-layer",this.xpContainer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",t.style.position="relative",t.appendChild(this.xpContainer),this.bindCameraEvents(this.renderer.domElement)}getCanvas(){if(!this.renderer)throw new Error("Renderer not initialized");return this.renderer.domElement}bindPointerInput(t,e){var i;return(i=this.unbindPointer)==null||i.call(this),this.unbindPointer=yb(this.getCanvas(),t,e,(s,r)=>this.screenToWorld(s,r)),this.unbindPointer}handleKeyDown(t){var e;return((e=this.orbitCamera)==null?void 0:e.handleKeyDown(t.code))??!1}handleKeyUp(t){var e;return((e=this.orbitCamera)==null?void 0:e.handleKeyUp(t.code))??!1}resize(t){!this.renderer||!this.orbitCamera||(this.renderer.setSize(t.width,t.height,!1),this.orbitCamera.setAspect(t.width/t.height))}worldToScreen(t,e){if(!this.orbitCamera)return{x:0,y:0};const i=Ke(t,e,.5);return Wi.set(i.x,i.y,i.z),Wi.project(this.orbitCamera.camera),{x:(Wi.x+1)/2*qi,y:(-Wi.y+1)/2*xi}}screenToWorld(t,e){if(!this.orbitCamera)return{x:0,y:0};Ma.x=t/qi*2-1,Ma.y=-(e/xi)*2+1,this.raycaster.setFromCamera(Ma,this.orbitCamera.camera);const i=this.raycaster.ray;xa.copy(i.origin),va.copy(i.direction);const s=va.y;if(Math.abs(s)<1e-6)return{x:NaN,y:NaN};const r=-xa.y/s;return r<0?{x:NaN,y:NaN}:(Wi.copy(xa).addScaledVector(va,r),zb(Wi))}render(t,e,i=performance.now(),s=0){if(!this.renderer||!this.scene||!this.orbitCamera||!this.mapMeshes||!this.entities||!this.tricks||!this.overlays)return;const r=this.lastFrameMs>0?i-this.lastFrameMs:16;this.lastFrameMs=i;const o=Math.min(.1,r/1e3);this.mapMeshes.build(e,t.tide),this.mapMeshes.updateTideVisuals(e,t.tide),this.orbitCamera.setFocus(t.surfboard.position.x,t.surfboard.position.y),this.orbitCamera.update(o),this.tricks.sync(t,s),this.entities.sync(t,e,i),this.overlays.sync(t,e),this.renderer.render(this.scene,this.orbitCamera.camera)}getCompassRotationRadians(){var t;return((t=this.orbitCamera)==null?void 0:t.getCompassRotationRadians())??0}getViewFacingRadians(){var t;return((t=this.orbitCamera)==null?void 0:t.getViewFacingRadians())??0}snapCameraNorth(){var t;(t=this.orbitCamera)==null||t.snapNorth()}setTrueTileVisible(t){var e;(e=this.overlays)==null||e.setTrueTileVisible(t)}setVillageVisible(t){this.village&&(this.village.visible=t)}showXpDrop(t,e,i){if(!this.xpContainer)return;const s=this.worldToScreen(e,i),r=document.createElement("div");r.textContent=t,r.style.cssText="position:absolute;color:#7ecf8f;font:12px monospace;white-space:nowrap;",r.style.left=`${s.x}px`,r.style.top=`${s.y-10}px`,this.xpContainer.appendChild(r);const o=()=>{const a=parseFloat(r.style.top);if(r.style.top=`${a-.5}px`,r.style.opacity=`${parseFloat(r.style.opacity||"1")-.02}`,parseFloat(r.style.opacity||"1")<=0){r.remove();return}requestAnimationFrame(o)};requestAnimationFrame(o)}syncMapAfterTick(t,e){var i;(i=this.mapMeshes)==null||i.updateTideVisuals(e,t.tide)}destroy(){var t,e,i,s,r,o,a,l,c;(t=this.unbindPointer)==null||t.call(this),(e=this.unbindCamera)==null||e.call(this),(i=this.entities)==null||i.dispose(),(s=this.tricks)==null||s.dispose(),(r=this.overlays)==null||r.dispose(),this.village&&(aA(this.village),this.village=null),(o=this.mapMeshes)==null||o.destroy(),(a=this.renderer)==null||a.dispose(),(l=this.renderer)==null||l.domElement.remove(),(c=this.xpContainer)==null||c.remove(),this.renderer=null,this.scene=null,this.container}bindCameraEvents(t){const e=this.orbitCamera;if(!e)return;const i=c=>{e.onPointerDown(c),c.button===1&&t.setPointerCapture(c.pointerId)},s=c=>e.onPointerMove(c),r=c=>{c.button===1&&t.hasPointerCapture(c.pointerId)&&t.releasePointerCapture(c.pointerId),e.onPointerUp(c)},o=c=>{t.hasPointerCapture(c.pointerId)&&t.releasePointerCapture(c.pointerId),e.onPointerCancel()},a=c=>{c.preventDefault(),e.onWheel(c.deltaY)},l=c=>c.preventDefault();t.addEventListener("pointerdown",i),t.addEventListener("pointermove",s),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",o),t.addEventListener("wheel",a,{passive:!1}),t.addEventListener("contextmenu",l),this.unbindCamera=()=>{t.removeEventListener("pointerdown",i),t.removeEventListener("pointermove",s),t.removeEventListener("pointerup",r),t.removeEventListener("pointercancel",o),t.removeEventListener("wheel",a),t.removeEventListener("contextmenu",l)}}}function lA(n,t,e){return{x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e}}function kh(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function hp(n){return Math.min(1,Math.max(0,n))}function Ys(n){return n?n.ticksElapsed/n.ticksTotal:0}function Sa(n,t){const e={...n.position};return{segmentStart:e,segmentEnd:e,headingStart:n.currentHeading,headingEnd:n.currentHeading,intendedHeadingStart:n.intendedHeading,intendedHeadingEnd:n.intendedHeading,trickProgressStart:Ys(t),trickProgressEnd:Ys(t)}}function ya(n,t,e,i,s){n.segmentStart={...t.position},n.segmentEnd={...e.position},n.headingStart=t.currentHeading,n.headingEnd=e.currentHeading,n.intendedHeadingStart=t.intendedHeading,n.intendedHeadingEnd=e.intendedHeading,n.trickProgressStart=Ys(i),n.trickProgressEnd=Ys(s)}function Bh(n,t,e){if(e)return;const i=t.position,s=kh(n.segmentStart,n.segmentEnd);if(kh(i,n.segmentEnd)>Math.max(.2,s*.5+.05)){const o={...i};n.segmentStart=o,n.segmentEnd=o,n.headingStart=t.currentHeading,n.headingEnd=t.currentHeading,n.intendedHeadingStart=t.intendedHeading,n.intendedHeadingEnd=t.intendedHeading,n.trickProgressStart=0,n.trickProgressEnd=0}}function Hh(n,t,e,i){const s=hp(i),r=e?n.trickProgressStart+(n.trickProgressEnd-n.trickProgressStart)*s:0,o=e!==null?Ad(e,r):lA(n.segmentStart,n.segmentEnd,s),a=e?{...e,progress:r}:null;return{surfboard:{...t,position:o,currentHeading:Ea(n.headingStart,n.headingEnd,s),intendedHeading:Ea(n.intendedHeadingStart,n.intendedHeadingEnd,s)},trickAnimation:a}}class uA{constructor(){B(this,"player",Sa({position:{x:0,y:0},currentHeading:0,intendedHeading:0},null));B(this,"demoSurfers",new Map)}reset(t){ya(this.player,t.surfboard,t.surfboard,t.trickAnimation,t.trickAnimation),this.demoSurfers.clear();for(const e of t.demoSurfers)this.demoSurfers.set(e.id,Sa(e.surfboard,e.trickAnimation))}onSimulationTick(t,e){ya(this.player,t.surfboard,e.surfboard,t.trickAnimation,e.trickAnimation);const i=new Set;for(const s of e.demoSurfers){i.add(s.id);let r=this.demoSurfers.get(s.id);r||(r=Sa(s.surfboard,s.trickAnimation),this.demoSurfers.set(s.id,r));const o=t.demoSurfers.find(a=>a.id===s.id);ya(r,(o==null?void 0:o.surfboard)??s.surfboard,s.surfboard,(o==null?void 0:o.trickAnimation)??null,s.trickAnimation)}for(const s of this.demoSurfers.keys())i.has(s)||this.demoSurfers.delete(s)}ensureSynced(t){Bh(this.player,t.surfboard,t.trickAnimation);for(const e of t.demoSurfers){const i=this.demoSurfers.get(e.id);i&&Bh(i,e.surfboard,e.trickAnimation)}}buildDisplaySnapshot(t,e,i){const s=Hh(this.player,t.surfboard,t.trickAnimation,i);let r=t.tide;if(t.tide&&e!==null){const a=hp(i),l=e+t.tide.advancePerTick*a;r={...t.tide,phaseRadians:l}}const o=t.demoSurfers.map(a=>{const l=this.demoSurfers.get(a.id);if(!l)return{...a,trickAnimation:hA(a.trickAnimation)};const c=Hh(l,a.surfboard,a.trickAnimation,i);return{...a,surfboard:c.surfboard,trickAnimation:c.trickAnimation}});return{...t,surfboard:s.surfboard,trickAnimation:s.trickAnimation,tide:r,demoSurfers:o,simulationPosition:{...t.surfboard.position}}}}function hA(n){return n?{...n,progress:Ys(n)}:null}class dA{constructor(t,e,i){B(this,"root");B(this,"tuning");this.root=t,this.tuning={...e},this.root.classList.add("hidden"),this.root.innerHTML=`
      <div><strong>Debug</strong> [F3] hide, [1/2/3] tune turn/paddle/ride</div>
      <div id="debug-lines"></div>
    `,window.addEventListener("keydown",s=>{if(s.key==="F3"){s.preventDefault(),this.root.classList.toggle("hidden");return}this.root.classList.contains("hidden")||(s.key==="1"&&(this.tuning.turnRate=Math.max(5,this.tuning.turnRate-2.5),i(this.tuning)),s.key==="2"&&(this.tuning.speedPaddle=Math.max(1,this.tuning.speedPaddle-1),i(this.tuning)),s.key==="3"&&(this.tuning.speedRide=Math.max(1,this.tuning.speedRide-1),i(this.tuning)),s.key==="!"&&(this.tuning.turnRate+=2.5,i(this.tuning)),s.key==="@"&&(this.tuning.speedPaddle+=1,i(this.tuning)),s.key==="#"&&(this.tuning.speedRide+=1,i(this.tuning)))})}update(t){if(this.root.classList.contains("hidden"))return;const e=this.root.querySelector("#debug-lines");if(!e)return;const{surfboard:i}=t;e.innerHTML=`
      pos: ${i.position.x.toFixed(2)}, ${i.position.y.toFixed(2)}<br/>
      heading: ${i.currentHeading} → ${i.intendedHeading}<br/>
      speed: ${i.speedState} | rotating: ${i.isRotating}<br/>
      turn: ${this.tuning.turnRate}° paddle: ${Nl(this.tuning.speedPaddle)} ride: ${Nl(this.tuning.speedRide)} tiles/tick<br/>
      tide: ${t.tide?`${(t.tide.phaseRadians*180/Math.PI).toFixed(0)}° sweep`:"off"}<br/>
      tick: ${t.tickCount}
    `}}const fA="/osrs-surfing-sim/assets/osrs",pA="/osrs-surfing-sim/assets/surf";function ce(n){return`${fA}/${n}`}function ui(n){return`${pA}/${n}`}const ge={fixed:{minimapFrame:ce("fixed_mode/minimap_and_compass_frame.png"),compassDial:ce("other/compass.png")},chatbox:{stones:ce("chatbox/buttons_background_stones.png")},tabs:{combat:ce("tab/combat.png"),stats:ce("tab/stats.png"),quests:ce("tab/quests.png"),inventory:ce("tab/inventory.png"),equipment:ce("tab/equipment.png"),prayer:ce("tab/prayer.png"),magic:ce("tab/magic.png"),friends:ce("tab/friends.png"),ignores:ce("tab/ignores.png"),clanChannel:ce("tab/clan_channel.png"),accountManagement:ce("tab/account_management.png"),logout:ce("tab/logout.png"),options:ce("tab/options.png"),emotes:ce("tab/emotes.png")},surf:{boardUpright:ui("board_upright.svg"),boardPlanted:ui("board_planted.svg"),ride:ui("board_ride.svg"),reverse:ui("board_reverse.svg"),stanceGrind:ui("stance_grind.svg"),stanceTuck:ui("stance_tuck.svg"),stanceAir:ui("stance_air.svg")},sailing:{steering:ce("sailing/steering.png"),notSteering:ce("sailing/not_steering.png"),tabStats:ce("sailing/tab_stats.png"),tabFacilities:ce("sailing/tab_facilities.png"),tabCrew:ce("sailing/tab_crew.png")},skill:{agility:ce("skill/agility.png"),sailing:ce("skill/sailing.png")},chevron:{up:ce("chevron/yellow_up_single.png"),upDouble:ce("chevron/yellow_up_double.png"),down:ce("chevron/yellow_down_single.png"),downStop:ce("chevron/yellow_down_stop.png")}},mA=50;class gA{constructor(t){B(this,"root");B(this,"messagesEl");B(this,"lines",[]);this.root=t,this.root.className="osrs-chatbox";const e=ge;this.root.innerHTML=`
      <div class="osrs-chatbox-messages" id="chat-messages"></div>
      <div class="osrs-chatbox-stones">
        <img src="${e.chatbox.stones}" alt="" class="osrs-chatbox-stones-bg" />
      </div>
    `,this.messagesEl=this.root.querySelector("#chat-messages"),this.push("Welcome to Ura Ura Swell.","game")}push(t,e="game"){const i=e==="xp"?'<span class="chat-xp">':e==="system"?'<span class="chat-sys">':"<span>";this.lines.push(`${i}${t}</span>`),this.lines.length>mA&&this.lines.shift(),this.messagesEl.innerHTML=this.lines.join("<br/>"),this.messagesEl.scrollTop=this.messagesEl.scrollHeight}}function to(n){return n instanceof HTMLButtonElement&&n.disabled}function dp(n,t){const e=n.getBoundingClientRect();return t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom}function jn(n,t){let e=null;const i=()=>{e=null},s=a=>{a.button!==0||to(n)||(e=a.pointerId,n.setPointerCapture(a.pointerId))},r=a=>{a.button!==0||e!==a.pointerId||(n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),i(),!(to(n)||!dp(n,a))&&(a.preventDefault(),t()))},o=a=>{e===a.pointerId&&(n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),i())};return n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",o),()=>{n.removeEventListener("pointerdown",s),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",o)}}function _A(n,t,e){let i=null,s=null;const r=()=>{i=null,s=null},o=c=>{if(c.button!==0)return;const u=c.target.closest(t);if(!(u instanceof HTMLElement)||to(u))return;const d=u.getAttribute("data-unlock");d&&(i=c.pointerId,s=d,n.setPointerCapture(c.pointerId))},a=c=>{if(c.button!==0||i!==c.pointerId||s===null)return;n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId);const u=s;r();const d=n.querySelector(`[data-unlock="${u}"]`);d instanceof HTMLElement&&(to(d)||!dp(d,c)||(c.preventDefault(),e(d)))},l=c=>{i===c.pointerId&&(n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId),r())};return n.addEventListener("pointerdown",o),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",l),()=>{n.removeEventListener("pointerdown",o),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",l)}}const xA=.35,vA=.04;class MA{constructor(t,e,i,s){B(this,"canvas");B(this,"ctx");B(this,"compassNeedle");B(this,"baseCanvas",null);B(this,"tideCanvas",null);B(this,"tideCtx",null);B(this,"lastTidePhase",Number.NaN);B(this,"baseMap",null);B(this,"coralTiles",[]);i.src=ge.fixed.minimapFrame,i.alt="",i.decoding="async",this.canvas=document.createElement("canvas"),this.canvas.width=Xi,this.canvas.height=Xi,this.canvas.className="osrs-minimap-canvas",t.appendChild(this.canvas);const r=this.canvas.getContext("2d");if(!r)throw new Error("Minimap canvas unsupported");this.ctx=r;const o=e.querySelector("img");if(!o)throw new Error("Minimap compass needle missing");this.compassNeedle=o,this.compassNeedle.src=ge.fixed.compassDial,this.compassNeedle.alt="Compass",jn(e,s)}setCompassRotation(t){const e=t*180/Math.PI;this.compassNeedle.style.transform=`rotate(${e}deg)`}ensureBaseCanvas(t){if(this.baseMap===t&&this.baseCanvas)return;const e=Xi,i=document.createElement("canvas");i.width=e,i.height=e;const s=i.getContext("2d");if(!s)throw new Error("Minimap base canvas unsupported");const r=e/t.widthTiles,o=e/t.heightTiles;this.coralTiles=[];for(let l=0;l<t.heightTiles;l+=1)for(let c=0;c<t.widthTiles;c+=1){const u=t.tiles[l][c];let d=ap(u,c+.5,l+.5,null);u==="coral_rideable"&&(this.coralTiles.push({tx:c,ty:l,angle:Number.NaN}),d="reef_exposed");const h=Qr(d);s.fillStyle=`#${h.toString(16).padStart(6,"0")}`,s.fillRect(c*r,l*o,Math.ceil(r),Math.ceil(o))}this.baseCanvas=i;const a=document.createElement("canvas");a.width=e,a.height=e,this.tideCanvas=a,this.tideCtx=a.getContext("2d"),this.lastTidePhase=Number.NaN,this.baseMap=t}repaintTideOverlay(t,e){const i=this.tideCtx;if(!i||Math.abs(t.phaseRadians-this.lastTidePhase)<vA)return;this.lastTidePhase=t.phaseRadians;const r=Xi,o=r/e.widthTiles,a=r/e.heightTiles;i.clearRect(0,0,r,r);const l=Qr("reef_submerged");i.fillStyle=`#${l.toString(16).padStart(6,"0")}`;for(const c of this.coralTiles)Number.isNaN(c.angle)&&(c.angle=Math.atan2(c.ty+.5-t.centerY,c.tx+.5-t.centerX)),Fc(c.angle,t)/is>xA&&i.fillRect(c.tx*o,c.ty*a,Math.ceil(o),Math.ceil(a))}update(t,e){this.ensureBaseCanvas(e),t.tide&&this.repaintTideOverlay(t.tide,e);const i=this.ctx,s=Xi,r=s/2,o=s/e.widthTiles,a=s/e.heightTiles;i.clearRect(0,0,s,s),i.save(),i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.clip(),this.baseCanvas&&i.drawImage(this.baseCanvas,0,0),this.tideCanvas&&i.drawImage(this.tideCanvas,0,0);const l=t.surfboard.position.x*o,c=t.surfboard.position.y*a;i.fillStyle="#ffff00",i.beginPath(),i.arc(l,c,3,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=1,i.stroke(),i.restore()}}const SA={Bronze:"linear-gradient(180deg, #e8a55c 0%, #8b5a2b 100%)",Iron:"linear-gradient(180deg, #d8d8d8 0%, #6a6a6a 100%)",Steel:"linear-gradient(180deg, #c8d4e0 0%, #6a7a8a 100%)",Mithril:"linear-gradient(180deg, #7eb8e8 0%, #2a5080 100%)",Adamant:"linear-gradient(180deg, #5ecf8a 0%, #1a5c38 100%)",Rune:"linear-gradient(180deg, #7ec8f0 0%, #2868a8 100%)",Dragon:"linear-gradient(180deg, #f0a050 0%, #8b2020 100%)"},Gh="linear-gradient(180deg, #06c206 0%, #048004 100%)",zh="linear-gradient(180deg, #7ee8f0 0%, #1a7a8a 100%)",yA=[{slot:0,icon:ge.surf.stanceGrind,features:"Rail · Coral",title:"Grind stance (1) — slide rails and brain coral"},{slot:1,icon:ge.surf.stanceTuck,features:"Tunnel · Wall",title:"Tuck stance (2) — duck tunnels and wall rides"},{slot:2,icon:ge.surf.stanceAir,features:"Jump",title:"Air stance (3) — launch off jumps"}];function Vh(n,t){const e=ge;switch(t){case"toggle-full":{const i=n!=="seated";return{icon:i?e.surf.boardPlanted:e.surf.ride,title:i?"Stop":"Full speed ahead",disabled:!1,targetState:i?"seated":"riding"}}case"speed-down":return n==="riding"?{icon:e.chevron.down,title:"Slow down",disabled:!1,targetState:"paddling"}:n==="paddling"?{icon:e.chevron.downStop,title:"Stop",disabled:!1,targetState:"seated"}:n==="seated"?{icon:e.surf.reverse,title:"Reverse",disabled:!1,targetState:"reversing"}:{icon:e.surf.reverse,title:"Reverse",disabled:!0,targetState:null};case"speed-up":return n==="reversing"?{icon:e.surf.boardPlanted,title:"Stop",disabled:!1,targetState:"seated"}:n==="seated"?{icon:e.chevron.up,title:"Increase speed",disabled:!1,targetState:"paddling"}:n==="paddling"?{icon:e.chevron.upDouble,title:"Full speed",disabled:!1,targetState:"riding"}:{icon:e.chevron.up,title:"Full speed",disabled:!0,targetState:null}}}class EA{constructor(t,e){B(this,"root");B(this,"callbacks");B(this,"activeTab","board");B(this,"speedState","seated");this.root=t,this.callbacks=e,this.root.className="osrs-control-panel osrs-sailing-panel",this.root.innerHTML=this.renderShell(),this.bindEvents()}update(t){this.speedState=t.surfboard.speedState;const e=this.root.querySelector("#steering-icon"),i=this.root.querySelector("#steering-label"),s=t.surfboard.speedState!=="seated";e&&(e.src=s?ge.sailing.steering:ge.sailing.notSteering),i&&(i.textContent=s?"Steering":"Drifting"),this.updateNavButtons(t.surfboard.speedState);const r=this.root.querySelector("#board-tier-title");r&&(r.textContent=i_(t.progression.unlocked));const o=this.root.querySelector("#combo-bar-fill"),a=this.root.querySelector("#combo-label");if(o&&a){const v=t.progression.session.combo,E=G0(v);o.style.width=v>0?`${E/10*100}%`:"100%",o.style.background=v>0?SA[Ao(v)]:Gh,a.textContent=v>0?`${v}x · ${Ao(v)} combo`:"Ready"}const l=this.root.querySelector("#surf-boost-bar"),c=this.root.querySelector("#surf-boost-bar-fill"),u=this.root.querySelector("#surf-boost-label"),d=t.trickSpeedBoostTicksRemaining;if(l&&c&&u){const v=d>0;l.classList.toggle("hidden",!v),v&&(c.style.width=`${d/nd*100}%`,c.style.background=zh,u.textContent=`Surf boost · ${d}`)}const h=t.progression.session;this.setText("#stats-combo",h.combo>0?`${h.combo} (${Ao(h.combo)})`:"0"),this.setText("#stats-max-combo",String(h.maxCombo)),this.setText("#stats-tricks",String(h.tricksLanded)),this.setText("#stats-tokens",String(t.progression.coralTokens)),this.syncTokenDisplay(t.progression.coralTokens);const f=t.boardMounted&&t.surfboard.speedState==="riding"&&t.trickAnimation===null;this.root.querySelectorAll("[data-prepare-slot]").forEach(v=>{var T;const E=Number(v.dataset.prepareSlot),y=t.trickPrepare!==null&&t.trickPrepare.slot===E&&t.trickPrepare.ticksSincePrepare>0;v.disabled=!f,v.classList.toggle("primed",y);const w=v.querySelector(".osrs-stance-ticks");w&&(w.textContent=((T=t.trickPrepare)==null?void 0:T.slot)===E?String(t.trickPrepare.ticksSincePrepare):"")});const g=this.root.querySelector("#stance-footnote");g&&(g.textContent=f?`Prime ${Lc}–${ro} ticks before the feature`:"Reach full speed to prime stances");const S=this.root.querySelector("#board-guidance");S&&S.classList.toggle("hidden",t.boardMounted);const p=this.root.querySelector("#board-mounted-controls");p&&p.classList.toggle("hidden",!t.boardMounted);const m=this.root.querySelector("#dismount-btn");m&&(m.disabled=!t.canDismountBoard)}setVisible(t){this.root.classList.toggle("hidden",!t)}renderShell(){const t=ge;return`
      <div class="osrs-panel-chrome">
        <div class="osrs-panel-header">
          <img src="${t.surf.boardUpright}" alt="" class="osrs-panel-icon" width="18" height="18" />
          <span class="osrs-panel-title" id="board-tier-title">Camphor Board</span>
        </div>
        <div class="osrs-status-bar">
          <div class="osrs-status-bar-fill" id="combo-bar-fill" style="width: 100%; background: ${Gh}"></div>
          <span class="osrs-status-bar-label" id="combo-label">Ready</span>
        </div>
        <div class="osrs-status-bar osrs-surf-boost-bar hidden" id="surf-boost-bar">
          <div class="osrs-status-bar-fill osrs-surf-boost-bar-fill" id="surf-boost-bar-fill" style="width: 100%; background: ${zh}"></div>
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
              ${yA.map(e=>this.renderStanceButton(e)).join("")}
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
        <span class="osrs-stance-name">${id(t.slot)}</span>
        <span class="osrs-stance-features">${t.features}</span>
      </button>
    `}bindEvents(){var i;for(const s of this.root.querySelectorAll(".osrs-stone-tab"))jn(s,()=>{const r=s.dataset.tab;this.activeTab=r,this.root.querySelectorAll(".osrs-stone-tab").forEach(o=>o.classList.remove("active")),s.classList.add("active"),this.root.querySelectorAll(".osrs-tab-body").forEach(o=>{o.classList.toggle("active",o.dataset.panel===r)})});this.root.querySelectorAll("[data-nav-btn]").forEach(s=>{jn(s,()=>{if(s.disabled)return;const r=s.dataset.navBtn,o=Vh(this.speedState,r);o.targetState&&this.callbacks.onSpeedState(o.targetState)})}),this.root.querySelectorAll("[data-prepare-slot]").forEach(s=>{jn(s,()=>{if(s.disabled)return;const r=Number(s.dataset.prepareSlot);this.callbacks.onPrepareTrick(r)})});const t=this.root.querySelector("#shop-btn");t instanceof HTMLElement&&jn(t,()=>{this.callbacks.onOpenShop()});const e=this.root.querySelector("#dismount-btn");e instanceof HTMLElement&&jn(e,()=>{e instanceof HTMLButtonElement&&e.disabled||this.callbacks.onDismountBoard()}),(i=this.root.querySelector("#true-tile-toggle"))==null||i.addEventListener("change",s=>{this.callbacks.onToggleTrueTile(s.target.checked)})}updateNavButtons(t){this.root.querySelectorAll("[data-nav-btn]").forEach(e=>{const i=e.dataset.navBtn,s=Vh(t,i);e.disabled=s.disabled,e.title=s.title;const r=e.querySelector("img");r&&(r.src=s.icon,r.alt=s.title),e.classList.toggle("active",i==="toggle-full"&&t==="riding")})}setText(t,e){const i=this.root.querySelector(t);i&&(i.textContent=e)}syncTokenDisplay(t){const e=this.root.querySelector("#coral-tokens-rewards");e&&(e.textContent=String(t))}}class bA{constructor(t,e){B(this,"root");B(this,"body");B(this,"onPurchase");B(this,"visible",!1);this.root=t,this.onPurchase=e,this.root.className="osrs-shop-panel hidden",this.root.innerHTML=`
      <div class="osrs-shop-header osrs-panel-header">
        <img src="${ge.sailing.tabCrew}" alt="" width="20" height="20" />
        <span class="osrs-panel-title">Coral Rewards</span>
        <button type="button" class="osrs-shop-close" aria-label="Close reward shop">×</button>
      </div>
      <div class="osrs-shop-body"></div>
    `;const i=this.root.querySelector(".osrs-shop-body");if(!(i instanceof HTMLElement))throw new Error("Shop panel body element missing");this.body=i;const s=this.root.querySelector(".osrs-shop-close");s instanceof HTMLElement&&jn(s,()=>this.hide()),_A(this.body,"[data-unlock]",r=>{const o=r.getAttribute("data-unlock");o&&this.onPurchase(o)})}isVisible(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("hidden",!this.visible)}hide(){this.visible=!1,this.root.classList.add("hidden")}update(t){this.body.innerHTML=`
      <p class="osrs-stat-line">Coral Tokens: <strong>${t.coralTokens}</strong></p>
      <div class="osrs-shop-list">
        ${ho.map(e=>this.renderUnlock(e,t)).join("")}
      </div>
    `}renderUnlock(t,e){const i=e.unlocked.has(t.id),s=qd(e,t),r=t.tokenCost===null?"Earn only":`${t.tokenCost} Coral Tokens`;let o;i?o="Unlocked":t.demoDisabled?o="Disabled for this demo":t.earnOnly?o="Earn only 1/500 from successful tricks":s.ok?o="Purchase":o=s.reason??"Locked";const a=i||!s.ok;return`
      <div class="osrs-shop-item">
        <div class="osrs-shop-item-title">${t.name}</div>
        <div class="osrs-shop-item-desc">${t.description}</div>
        <div class="osrs-shop-item-cost">${r}</div>
        <button type="button" class="osrs-stone-btn" data-unlock="${t.id}" ${a?"disabled":""}>
          ${o}
        </button>
      </div>
    `}}class TA{constructor(t){B(this,"root");this.root=t,this.root.className="osrs-control-panel osrs-skills-panel hidden",this.root.innerHTML=this.renderShell()}update(t){const e=t.progression.xp.agility,i=t.progression.xp.sailing;this.updateSkillRow("agility",Ca(e),e%1e3,1e3),this.updateSkillRow("sailing",Pa(i),i%1200,1200);const s=this.root.querySelector("#tricks-landed");s&&(s.textContent=String(t.progression.session.tricksLanded));const r=this.root.querySelector("#coral-tokens");r&&(r.textContent=String(t.progression.coralTokens));const o=Ca(e)+Pa(i),a=this.root.querySelector("#total-level");a&&(a.textContent=String(o))}setVisible(t){this.root.classList.toggle("hidden",!t)}renderShell(){const t=ge;return`
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
    `}updateSkillRow(t,e,i,s){const r=this.root.querySelector(`#${t}-label`),o=this.root.querySelector(`#${t}-fill`);r&&(r.textContent=`${t==="agility"?"Agility":"Sailing"} ${e}`),o&&(o.style.width=`${Math.min(100,i/s*100)}%`)}}const AA=[{id:"combat",icon:ge.tabs.combat,label:"Sailing Options"},{id:"stats",icon:ge.tabs.stats,label:"Skills"},{icon:ge.tabs.quests,label:"Quest List"},{icon:ge.tabs.inventory,label:"Inventory"},{icon:ge.tabs.equipment,label:"Worn Equipment"},{icon:ge.tabs.prayer,label:"Prayer"},{icon:ge.tabs.magic,label:"Magic"}],RA=[{icon:ge.tabs.friends,label:"Friends List"},{icon:ge.tabs.ignores,label:"Ignore List"},{icon:ge.tabs.clanChannel,label:"Chat-channel"},{icon:ge.tabs.accountManagement,label:"Account Management"},{icon:ge.tabs.logout,label:"Logout"},{icon:ge.tabs.options,label:"Settings"},{icon:ge.tabs.emotes,label:"Emotes"}];class wA{constructor(t,e,i){B(this,"topRoot");B(this,"bottomRoot");B(this,"activeTab","combat");B(this,"onTabChange");this.topRoot=t,this.bottomRoot=e,this.onTabChange=i,this.render()}setActiveTab(t){this.activeTab=t,this.syncActiveState()}render(){this.topRoot.className="osrs-tab-strip osrs-tab-strip-top",this.bottomRoot.className="osrs-tab-strip osrs-tab-strip-bottom",this.topRoot.innerHTML='<div class="osrs-tab-strip-inner"></div>',this.bottomRoot.innerHTML='<div class="osrs-tab-strip-inner"></div>';const t=this.topRoot.querySelector(".osrs-tab-strip-inner"),e=this.bottomRoot.querySelector(".osrs-tab-strip-inner");if(!(!t||!e)){t.innerHTML=AA.map(i=>this.tabButtonHtml(i)).join(""),e.innerHTML=RA.map(i=>this.tabButtonHtml(i,!1)).join("");for(const i of t.querySelectorAll("[data-tab]")){const s=i.dataset.tab;s!=="combat"&&s!=="stats"||jn(i,()=>{this.activeTab=s,this.syncActiveState(),this.onTabChange(s)})}}}tabButtonHtml(t,e=!0){const i=e&&(t.id==="combat"||t.id==="stats");return`
      <button
        type="button"
        class="osrs-game-tab ${t.id===this.activeTab?"active":""}"
        title="${t.label}"
        ${t.id?`data-tab="${t.id}"`:""}
        ${i?"":"disabled"}
      >
        <img src="${t.icon}" alt="${t.label}" />
      </button>
    `}syncActiveState(){this.topRoot.querySelectorAll("[data-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.tab===this.activeTab)})}}const Wh=32,CA=.5;function PA(){const n=window.innerWidth-Wh,t=window.innerHeight-Wh;return Math.max(CA,Math.min(n/dl,t/fl))}function Xh(n,t){const e=PA();return n.style.width=`${dl*e}px`,n.style.height=`${fl*e}px`,t.style.transform=`scale(${e})`,t.style.transformOrigin="top left",e}const IA={Digit1:0,Digit2:1,Digit3:2},LA=["Click the ground to walk. Click Kaulu to talk.","Click your surfboard on the sand ring to paddle out.","Prime Grind, Tuck, or Air stance 1–5 ticks before you hit the matching coral feature."];class Ml{constructor(t,e,i,s,r,o,a,l,c){B(this,"simulation");B(this,"renderer");B(this,"chatbox");B(this,"sailingPanel");B(this,"skillsPanel");B(this,"tabStrip");B(this,"shopPanel");B(this,"debugPanel");B(this,"minimap");B(this,"unbindPointer",null);B(this,"visualFrameId",null);B(this,"lastVisualFrameMs",0);B(this,"lastSimTickTimeMs",0);B(this,"motion",new uA);B(this,"tidePhaseFrom",null);B(this,"paused",!1);B(this,"lastDisplayPosition",{x:0,y:0});B(this,"lastTickBlend",0);B(this,"lastSavedProgressionFingerprint","");B(this,"onKeyDown",t=>{if(this.renderer.handleKeyDown(t)){t.preventDefault();return}const e=IA[t.code];e!==void 0&&(t.preventDefault(),this.simulation.prepareTrick(e))});B(this,"onKeyUp",t=>{this.renderer.handleKeyUp(t)&&t.preventDefault()});this.simulation=t,this.renderer=e,this.chatbox=i,this.sailingPanel=s,this.skillsPanel=r,this.tabStrip=o,this.shopPanel=a,this.debugPanel=l,this.minimap=c}static async mount(){var Y;const t=document.getElementById("osrs-scale-shell"),e=document.getElementById("osrs-scale-wrap");t&&e&&(Xh(t,e),window.addEventListener("resize",()=>Xh(t,e)));const i=new URLSearchParams(window.location.search).get("arena")==="animtest",s=i?null:r_(),r=new s_({arena:i?P0():S0(),initialProgression:s??void 0}),o=document.getElementById("game-root"),a=document.getElementById("sailing-panel"),l=document.getElementById("skills-panel"),c=document.getElementById("shop-panel"),u=document.getElementById("debug-panel"),d=document.getElementById("chatbox-root"),h=document.getElementById("tab-strip-top"),f=document.getElementById("tab-strip-bottom"),g=document.getElementById("minimap-map"),S=document.getElementById("minimap-compass"),p=document.getElementById("minimap-frame");if(!o||!a||!l||!c||!u||!d||!h||!f||!g||!S||!p)throw new Error("Missing required DOM elements");const m=new cA;await m.init(o,1),m.setVillageVisible(!i);const v=new MA(g,S,p,()=>m.snapCameraNorth()),E=new gA(d);for(const I of LA)E.push(I,"game");const y={turnRate:ti.turnRateDegPerTick,speedPaddle:ti.speedPaddle,speedRide:ti.speedRide};r.setStats({turnRateDegPerTick:y.turnRate,speedPaddle:y.speedPaddle,speedRide:y.speedRide});const w=new dA(u,y,I=>{r.setStats({turnRateDegPerTick:I.turnRate,speedPaddle:I.speedPaddle,speedRide:I.speedRide})}),T={sailing:null,skills:null},P=new bA(c,I=>{var j,nt;const H=r.tryPurchaseUnlock(I);H&&E.push(H,"system");const F=r.getSnapshot();jl(F.progression),P.update(F.progression),(j=T.sailing)==null||j.update(F),(nt=T.skills)==null||nt.update(F)}),x=new TA(l);T.skills=x;const A=new EA(a,{onSpeedState:I=>r.setSpeedState(I),onOpenShop:()=>{P.toggle(),P.update(r.getSnapshot().progression)},onPrepareTrick:I=>r.prepareTrick(I),onToggleTrueTile:I=>m.setTrueTileVisible(I),onDismountBoard:()=>{const I=r.tryDismountBoard();I&&E.push(I,"system")}});T.sailing=A;const L=(I,H)=>{A.setVisible(I==="combat"),x.setVisible(I==="stats"),H.setActiveTab(I)},R=new wA(h,f,I=>L(I,R)),U=new Ml(r,m,E,A,x,R,P,w,v);L("combat",R);const W=r.getSnapshot();return s&&U.seedProgressionFingerprint(W.progression),U.motion.reset(W),U.tidePhaseFrom=((Y=W.tide)==null?void 0:Y.phaseRadians)??null,U.wireViewport(),U.startTickLoop(),i||r.queueIntroSurf(),window.addEventListener("keydown",U.onKeyDown),window.addEventListener("keyup",U.onKeyUp),window.addEventListener("beforeunload",()=>U.destroy()),U}wireViewport(){this.unbindPointer=this.renderer.bindPointerInput((t,e)=>{if(Number.isNaN(t)){this.simulation.clearCursor();return}this.simulation.setCursor(t,e)},(t,e)=>{this.simulation.clickWorld(t,e)})}setPaused(t){if(this.paused=t,!t){const e=performance.now();this.lastVisualFrameMs=e,this.lastSimTickTimeMs=e}}resetTickBlendTimer(){this.lastSimTickTimeMs=performance.now(),this.lastTickBlend=0}startTickLoop(){const t=performance.now();this.lastVisualFrameMs=t,this.lastSimTickTimeMs=t,this.visualFrameId=requestAnimationFrame(e=>this.onVisualFrame(e))}onGameTick(){var s;const t=this.simulation.getSnapshot();this.tidePhaseFrom=((s=t.tide)==null?void 0:s.phaseRadians)??null,this.simulation.setCameraFacing(this.renderer.getViewFacingRadians()),this.simulation.tick();const e=this.simulation.getSnapshot();this.motion.onSimulationTick(t,e);const i=this.simulation.getArena().map;this.renderer.syncMapAfterTick(e,i),this.sailingPanel.update(e),this.skillsPanel.update(e),this.shopPanel.isVisible()&&this.shopPanel.update(e.progression),this.persistProgressionIfChanged(e.progression),this.debugPanel.update(e);for(const r of this.simulation.consumeDialogue())this.chatbox.push(r,"game");for(const r of this.simulation.consumeXpDrops()){const o=r.tokens>0?` +${r.tokens} Tokens`:"";this.renderer.showXpDrop(`+${r.agility} Agil +${r.sailing} Sail${o}`,r.x,r.y);const a=r.tokens>0?`, +${r.tokens} Coral Tokens`:"";this.chatbox.push(`+${r.agility} Agility XP, +${r.sailing} Sailing XP${a}`,"xp")}}onVisualFrame(t){if(!this.paused){const e=this.simulation.tickMs;t-this.lastSimTickTimeMs>=e&&(this.onGameTick(),this.lastSimTickTimeMs+=e,t-this.lastSimTickTimeMs>=e&&(this.lastSimTickTimeMs=t));const i=Math.min(1,Math.max(0,(t-this.lastSimTickTimeMs)/e));this.renderVisuals(t,i)}this.lastVisualFrameMs=t,this.visualFrameId=requestAnimationFrame(e=>this.onVisualFrame(e))}renderVisuals(t=performance.now(),e=0){const i=this.simulation.getSnapshot(),s=this.simulation.getArena().map;this.motion.ensureSynced(i);const r=this.motion.buildDisplaySnapshot(i,this.tidePhaseFrom,e);this.lastDisplayPosition={...r.surfboard.position},this.lastTickBlend=e,this.renderer.render(r,s,t,e),this.minimap.update(r,s),this.minimap.setCompassRotation(this.renderer.getCompassRotationRadians())}renderFrame(){this.renderVisuals(performance.now(),this.lastTickBlend)}getDisplayPosition(){return{...this.lastDisplayPosition}}getTickBlend(){return this.lastTickBlend}seedProgressionFingerprint(t){this.lastSavedProgressionFingerprint=this.progressionFingerprint(t)}progressionFingerprint(t){return JSON.stringify({xp:t.xp,coralTokens:t.coralTokens,unlocked:[...t.unlocked].sort(),combo:t.session.combo,maxCombo:t.session.maxCombo,tricksLanded:t.session.tricksLanded})}persistProgressionIfChanged(t){const e=this.progressionFingerprint(t);e!==this.lastSavedProgressionFingerprint&&(this.lastSavedProgressionFingerprint=e,jl(t))}destroy(){var t;this.persistProgressionIfChanged(this.simulation.getSnapshot().progression),this.visualFrameId!==null&&cancelAnimationFrame(this.visualFrameId),(t=this.unbindPointer)==null||t.call(this),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.destroy()}}const Jt=n=>`${n}px`;function DA(){const n=document.documentElement,t={"--osrs-frame-width":Jt(dl),"--osrs-frame-height":Jt(fl),"--osrs-window-top-height":Jt(ib),"--osrs-grid-height":Jt(Vf),"--osrs-viewport-width":Jt(qi),"--osrs-viewport-height":Jt(xi),"--osrs-chat-height":Jt(zf),"--osrs-chat-messages-height":Jt(Hf),"--osrs-chat-stones-height":Jt(Gf),"--osrs-sidebar-width":Jt(Bf),"--osrs-sidebar-content-left":Jt(Ks),"--osrs-minimap-height":Jt(Wf),"--osrs-minimap-left-edge":Jt(Xf),"--osrs-minimap-right-edge":Jt(sb),"--osrs-minimap-frame-left":Jt(pl),"--osrs-minimap-frame-width":Jt(rb),"--osrs-minimap-frame-height":Jt(ob),"--osrs-minimap-map-left":Jt(ub),"--osrs-minimap-map-top":Jt(lb),"--osrs-minimap-map-size":Jt(Xi),"--osrs-minimap-compass-left":Jt(hb),"--osrs-minimap-compass-top":Jt(db),"--osrs-minimap-compass-size":Jt(fb),"--osrs-minimap-bottom-left":Jt(mb),"--osrs-minimap-bottom-width":Jt(pb),"--osrs-minimap-bottom-height":Jt(ab),"--osrs-tab-strip-width":Jt(gb),"--osrs-tab-strip-left":Jt(_b),"--osrs-tab-slot-count":String(vb),"--osrs-tab-bar-height":Jt(Yf),"--osrs-sidebar-body-height":Jt(qf),"--osrs-interface-panel-height":Jt(Kf),"--osrs-interface-row-width":Jt(Jf),"--osrs-interface-row-left":Jt(Sb),"--osrs-side-panel-edge-width":Jt(Zf),"--osrs-side-panel-width":Jt($f),"--osrs-side-panel-height":Jt(Mb)};for(const[e,i]of Object.entries(t))n.style.setProperty(e,i)}const NA={"--osrs-url-window-top":"fixed_mode/window_frame_edge_top.png","--osrs-url-top-right-corner":"fixed_mode/top_right_corner.png","--osrs-url-chatbox-bg":"chatbox/background.png","--osrs-url-minimap-left":"fixed_mode/minimap_left_edge.png","--osrs-url-minimap-right":"fixed_mode/minimap_right_edge.png","--osrs-url-minimap-frame":"fixed_mode/minimap_and_compass_frame.png","--osrs-url-minimap-bottom":"fixed_mode/minimap_frame_bottom.png","--osrs-url-tabs-top":"fixed_mode/tabs_top_row.png","--osrs-url-tabs-bottom":"fixed_mode/tabs_row_bottom.png","--osrs-url-tab-selected":"tab_stone_middle_selected.png","--osrs-url-side-panel":"fixed_mode/side_panel_background.png","--osrs-url-side-panel-edge-left":"side_panel_edge_left.png","--osrs-url-side-panel-edge-right":"side_panel_edge_right.png","--osrs-url-stone-btn":"button/stone_button_9slice.png","--osrs-url-stone-btn-hovered":"button/stone_button_9slice_hovered.png","--osrs-url-stone-btn-disabled":"button/stone_button_9slice_disabled.png","--osrs-url-stone-tab":"chatbox/button.png","--osrs-url-stone-tab-hovered":"chatbox/button_hovered.png","--osrs-url-stone-tab-selected":"chatbox/button_selected.png"};function UA(){const n=document.documentElement;for(const[t,e]of Object.entries(NA))n.style.setProperty(t,`url("${ce(e)}")`)}UA();DA();Ml.mount().catch(n=>{console.error(n)});
