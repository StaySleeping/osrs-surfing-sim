var ld=Object.defineProperty;var ud=(i,e,t)=>e in i?ld(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var q=(i,e,t)=>ud(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const yn=16,us=360/yn,dd=600,hd=22.5,qr=2,fd=2,pd=2.5;function Pl(i){return i*qr}function Ko(i){return i/qr}const md=Pl(fd),gd=Pl(pd),Ri={turnRateDegPerTick:hd,speedPaddle:md,speedRide:gd},_d=1,Il=4,xd=["Low","Medium","High"];function vs(i){return xd[i]}function uo(i){const e=i%360;return e<0?e+360:e}function cn(i){return uo(i*us)}function vd(i){const e=uo(i);return Math.round(e/us)%yn}function or(i){const e=uo(i*180/Math.PI);return vd(e)}function Dl(i){const e=cn(i)*Math.PI/180;return{x:Math.cos(e),y:Math.sin(e)}}function Md(i,e){let t=(e-i)%yn;return t>yn/2&&(t-=yn),t<-yn/2&&(t+=yn),t}function Sd(i,e,t){const n=Md(i,e);if(n===0)return i;const r=Math.max(1,Math.round(t/us)),s=Math.sign(n)*Math.min(Math.abs(n),r);return(i+s+yn)%yn}function da(i,e,t){const n=Math.min(1,Math.max(0,t)),r=cn(i);let a=cn(e)-r;return a>180&&(a-=360),a<-180&&(a+=360),(r+a*n)/us}function Ll(i){return i==="grass"||i==="sand"}function yd(i){return i==="deep_water"||i==="shallow"||i==="tide_zone"}function Ul(i){return i==="sand"||i==="deep_water"||i==="shallow"||i==="coral_rideable"||i==="tide_zone"}function Ed(i,e,t){const n=Array.from({length:e},()=>Array.from({length:i},()=>t));return{widthTiles:i,heightTiles:e,tiles:n,blockedQuarters:new Set}}function hr(i,e,t,n){t<0||t>=i.heightTiles||e<0||e>=i.widthTiles||(i.tiles[t][e]=n)}function Xn(i,e,t){return t<0||t>=i.heightTiles||e<0||e>=i.widthTiles?null:i.tiles[t][e]}function bd(i,e,t){const n=Math.floor(e),r=Math.floor(t),s=Xn(i,n,r);return s===null?!1:yd(s)}function Nl(i,e,t){const n=Xn(i,Math.floor(e),Math.floor(t));return n===null?!1:Ul(n)&&n!=="grass"}const Td=[{tx:1,ty:0},{tx:-1,ty:0},{tx:0,ty:1},{tx:0,ty:-1}],Ad=[{tx:1,ty:1},{tx:1,ty:-1},{tx:-1,ty:1},{tx:-1,ty:-1}];function kr(i,e,t){const n=Xn(i,e,t);return n===null?!1:Ll(n)}function wd(i,e,t,n,r){if(!kr(i,n,r))return!1;const s=n-e,a=r-t;return s===0||a===0?!0:kr(i,e+s,t)&&kr(i,e,t+a)}function Ms(i,e){return`${i},${e}`}function Rd(i,e,t,n,r){if(!kr(i,n,r))return null;if(e===n&&t===r)return[{tx:e,ty:t}];const s=[{tx:e,ty:t}],a=new Map;for(a.set(Ms(e,t),null);s.length>0;){const o=s.shift();if(o.tx===n&&o.ty===r){const c=[];let d=o;for(;d;)c.push(d),d=a.get(Ms(d.tx,d.ty))??null;return c.reverse(),c}const l=[...Td,...Ad];for(const c of l){const d=o.tx+c.tx,h=o.ty+c.ty,u=Ms(d,h);a.has(u)||wd(i,o.tx,o.ty,d,h)&&(a.set(u,o),s.push({tx:d,ty:h}))}}return null}function Cd(i,e){return{x:i+.5,y:e+.5}}const Pd=2;function Id(i,e,t,n=!0){return{path:i,pathIndex:i.length>1?1:0,running:n,walkTickCounter:0,targetTx:e,targetTy:t}}function Dd(i,e,t){const n=Xn(i,Math.floor(e),Math.floor(t));return n===null?!1:Ll(n)}function Ld(i,e,t,n){const r=Math.floor(t),s=Math.floor(n);if(!Dd(i,t,n))return null;const a=Math.floor(e.x),o=Math.floor(e.y),l=Rd(i,a,o,r,s);return l?Id(l,r,s):null}function Ud(i,e,t){if(t.pathIndex>=t.path.length)return{position:i,heading:e,walk:null,moved:!1};if(!t.running&&(t.walkTickCounter+=1,t.walkTickCounter%Pd!==0))return{position:i,heading:e,walk:t,moved:!1};const n=t.path[t.pathIndex],r=Cd(n.tx,n.ty),s=or(Math.atan2(r.y-i.y,r.x-i.x)),a={...t,pathIndex:t.pathIndex+1},o=a.pathIndex>=a.path.length;return{position:r,heading:s,walk:o?null:a,moved:!0}}function Fl(i,e,t=0){return{position:{x:i,y:e},currentHeading:t,intendedHeading:t,speedState:"seated",isRotating:!1}}function Nd(i,e,t,n){const r=Math.atan2(n-e,t-i);return or(r)}function Fd(i,e){return i.speedState==="paddling"?e.speedPaddle/qr:i.speedState==="riding"?e.speedRide/qr:0}function Od(i,e){const t={...i};return e.setIntendedHeading!==void 0&&(t.intendedHeading=e.setIntendedHeading,t.isRotating=t.intendedHeading!==t.currentHeading),e.startPaddle&&(t.speedState="paddling"),e.standUp&&t.speedState!=="seated"&&(t.speedState="riding"),e.lieDown&&t.speedState==="riding"&&(t.speedState="paddling"),e.stop&&(t.speedState="seated"),t}function Bd(i,e,t){const n=Xn(i,Math.floor(e),Math.floor(t));return n===null?!0:!Ul(n)}function Ol(i,e,t={},n=Ri){const r=Od(i,t);let s=!1,a=!1,o=!1;const l=r.currentHeading;r.isRotating&&(r.currentHeading=Sd(r.currentHeading,r.intendedHeading,n.turnRateDegPerTick),r.isRotating=r.currentHeading!==r.intendedHeading,o=r.currentHeading!==l);const c=Fd(r,n);if(c>0){const d=Dl(r.currentHeading),h=r.position.x+d.x*c,u=r.position.y+d.y*c;Bd(e,h,u)?a=!0:(r.position={x:h,y:u},s=!0)}return{state:r,moved:s,collided:a,headingChanged:o}}const kd=.92,er=2;function Hd(i,e){const t=vt(i),n=vt(e);return t<=n?n-t:Kr-t+n}function Bl(i,e){const t=Hl(i);return Hd(e.phaseRadians,t)<=e.advancePerTick*er+1e-9}function kl(i,e,t=0){if(!e||!si(i,e))return 1;const n=Math.atan2(i.center.y-e.centerY,i.center.x-e.centerX);if(i.spawnedAtHighTide){if(!Bl(n,e))return 0;const s=(i.emergedRenderTicks??0)+t;return Math.min(1,s/er)}const r=(i.submergedRenderTicks??0)+t;return Math.max(0,1-Math.min(1,r/er))}function Gd(i,e,t=0){return!e||!si(i,e)?0:1-kl(i,e,t)}function zd(i,e){return i.map(t=>{if(!si(t,e))return t.submergedRenderTicks===void 0&&t.emergedRenderTicks===void 0?t:{...t,submergedRenderTicks:void 0,emergedRenderTicks:void 0};const n=Math.atan2(t.center.y-e.centerY,t.center.x-e.centerX);if(t.spawnedAtHighTide){if(!Bl(n,e))return t.emergedRenderTicks===void 0?t:{...t,emergedRenderTicks:void 0};const s=t.emergedRenderTicks;return s===void 0?{...t,emergedRenderTicks:0,submergedRenderTicks:void 0}:s>=er?t:{...t,emergedRenderTicks:s+1}}const r=t.submergedRenderTicks;return r===void 0?{...t,submergedRenderTicks:0,emergedRenderTicks:void 0}:r>=er?t:{...t,submergedRenderTicks:r+1,emergedRenderTicks:void 0}})}const Kr=Math.PI*2,Vd=.05;function Wd(i){return{centerX:i.centerX,centerY:i.centerY,innerRadius:i.innerRadius,outerRadius:i.outerRadius,sweepRadians:i.sweepRadians,phaseRadians:0,advancePerTick:i.advancePerTick??Vd,innerRadiusAtAngle:i.innerRadiusAtAngle,outerRadiusAtAngle:i.outerRadiusAtAngle}}function Xd(i){return{...i,phaseRadians:vt(i.phaseRadians+i.advancePerTick)}}function vt(i){const e=i%Kr;return e<0?e+Kr:e}function Yd(i,e,t){const n=vt(e),r=vt(e+t),s=vt(i);return n<=r?s>=n&&s<=r:s>=n||s<=r}function ds(i,e,t){var c,d;const n=i-t.centerX,r=e-t.centerY,s=Math.hypot(n,r),a=Math.atan2(r,n),o=((c=t.innerRadiusAtAngle)==null?void 0:c.call(t,a))??t.innerRadius,l=((d=t.outerRadiusAtAngle)==null?void 0:d.call(t,a))??t.outerRadius;return s<o-.3||s>l+.4?!1:Yd(a,t.phaseRadians,t.sweepRadians)}function si(i,e){return ds(i.center.x,i.center.y,e)}function qd(i){return vt(i.phaseRadians+i.sweepRadians)}function Kd(i,e){return vt(i-e.sweepRadians/2)}function $d(i,e){return vt(i-e.sweepRadians)}function Hl(i){return vt(i)}function Zd(i,e){return jd($d(i,e),Kd(i,e),kd)}function $o(i,e){const t=Zd(i,e),n=Hl(i);return Jd(e.phaseRadians,t,n)}function jd(i,e,t){const n=vt(i),r=vt(e);if(n<=r)return vt(n+(r-n)*t);const s=Kr-n+r;return vt(n+s*t)}function Jd(i,e,t){const n=vt(i),r=vt(e),s=vt(t);return r<=s?n>=r&&n<=s:n>=r||n<=s}function ha(i,e){return vt(e-i)}function Gl(i,e,t){let n=null,r=1/0;for(const s of i){if(s.tricked||t&&si(s,t))continue;const a=e.x-s.center.x,o=e.y-s.center.y,l=Math.sqrt(a*a+o*o);l<=s.radius&&l<r&&(n=s,r=l)}return n}function Qd(i){return i.ticksSincePrepare>=_d&&i.ticksSincePrepare<=Il}function fa(i){if(!i)return null;const e=i.ticksSincePrepare+1;return e>Il?null:{...i,ticksSincePrepare:e}}function eh(i,e){return i.map(t=>t.id===e?{...t,tricked:!0}:t)}const th=2,wi=.28,nh={rail:1.85,jump:1.65,tunnel:1.75,wall_ride:1.55,brain_coral:1.2},ih=.46;function rh(i){const e=i.rotationRadians,t=Math.cos(e),n=Math.sin(e);switch(i.type){case"jump":return{x:-t,y:-n};case"tunnel":return{x:t,y:n};case"rail":case"wall_ride":case"brain_coral":default:return{x:t,y:n}}}function tr(i,e,t,n){return i*t+e*n}function sh(i,e,t){const n=rh(i),r={x:e.x-i.center.x,y:e.y-i.center.y},s=tr(r.x,r.y,n.x,n.y);if(Math.abs(s)>=i.radius*.08)return s<0?n:{x:-n.x,y:-n.y};const a=Dl(t),o=tr(a.x,a.y,n.x,n.y);return Math.abs(o)>=.05?o>=0?n:{x:-n.x,y:-n.y}:n}function ah(i,e,t){const n={x:e.x-i.center.x,y:e.y-i.center.y},r=tr(n.x,n.y,t.x,t.y);return{x:i.center.x+t.x*r,y:i.center.y+t.y*r}}function oh(i){return or(Math.atan2(i.y,i.x))}function ch(i){return{x:-i.y,y:i.x}}function lh(i,e,t){const n=ch(t),r={x:e.x-i.center.x,y:e.y-i.center.y},s=tr(r.x,r.y,n.x,n.y);return Math.abs(s)<.01||s>=0?1:-1}function Zo(i,e,t){return{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t}}function zl(i){return i?{type:i.type,zoneRadius:i.zoneRadius,zoneCenter:{...i.zoneCenter},rotationRadians:i.rotationRadians,rideSide:i.rideSide,entry:{...i.entry},start:{...i.start},end:{...i.end},ticksElapsed:i.ticksElapsed,ticksTotal:i.ticksTotal}:null}function Vl(i,e){const t=Math.min(1,Math.max(0,e));if(t<=wi){const r=t/wi;return Zo(i.entry,i.start,r)}const n=(t-wi)/(1-wi);return Zo(i.start,i.end,n)}function uh(i,e,t,n){const s=e.radius*nh[e.type]*ih,a=-s,o=s,l=ah(e,t,n),c=tr(l.x-e.center.x,l.y-e.center.y,n.x,n.y),d=Math.max(a,Math.min(c,o)),h={x:e.center.x+n.x*d,y:e.center.y+n.y*d};for(let u=4;u>=1;u-=1){const m=u/4,x=d+(o-d)*m,S=e.center.x+n.x*x,p=e.center.y+n.y*x;if(Nl(i,S,p))return{start:h,end:{x:S,y:p}}}return{start:h,end:{...h}}}function Wl(i,e,t,n){const r=sh(e,t,n),s=oh(r),{start:a,end:o}=uh(i,e,t,r);return{zoneId:e.id,type:e.type,zoneRadius:e.radius,zoneCenter:{...e.center},rotationRadians:e.rotationRadians,rideSide:lh(e,t,r),entry:{...t},entryHeading:n,start:a,end:o,endHeading:s,ticksElapsed:0,ticksTotal:th}}function dh(i,e){const t=Math.min(1,Math.max(0,e));if(t<=wi){const n=t/wi;return da(i.entryHeading,i.endHeading,n)}return i.endHeading}function Xl(i){const e=i.ticksElapsed+1,t=Math.min(1,e/i.ticksTotal),n=Vl(i,t),r=dh(i,t);return e>=i.ticksTotal?{state:null,position:{...i.end},heading:i.endHeading}:{state:{...i,ticksElapsed:e},position:n,heading:r}}const Yl=560,ql=448,Gn=Yl/2,zn=ql/2,hh=8,fh=17,ph=23,Kl=25,$l=64,mh=1.1,gh=1.6,_h=2,xh=2.4,vh=5.2;function hs(i,e,t){return e+t*(.44*Math.sin(i*2.2+.55)+.3*Math.sin(i*3.9+1.85)+.18*Math.sin(i*6.3+.95)+.12*Math.sin(i*8.7+2.6))}function Mh(i,e,t){return e+t*(.38*Math.sin(i*1.45+2.35)+.27*Math.sin(i*3.2+.15)+.2*Math.sin(i*5.6+3.05)+.15*Math.sin(i*9.4+1.2))}function Sh(i){return hs(i,hh,mh)}function jo(i){return hs(i,fh,gh)}function yh(i){return hs(i,ph,_h)}function $r(i){return hs(i,Kl,xh)}function Zr(i){return Mh(i,$l,vh)}function Eh(i,e){return Math.atan2(e-zn+.5,i-Gn+.5)}function bh(i,e){return Math.hypot(i-Gn+.5,e-zn+.5)}const Th=Kl,Ah=$l,wh=.55,Rh=.28,Ch=.18,Ph=.55,Ih=18,Dh=12,Jo=.18;function nr(i,e){const t=i-Gn,n=e-zn;return{angle:Math.atan2(n,t),radius:Math.hypot(t,n)}}function Zl(i){return i+Math.PI/2}function jr(i){const e=$r(i),t=Zr(i),n=e+(t-e)*wh;return{x:Gn+Math.cos(i)*n,y:zn+Math.sin(i)*n}}function Lh(i,e,t){const{angle:n,radius:r}=nr(i.x,i.y),s=jr(n),a=Zl(n),o=r-Math.hypot(s.x-Gn,s.y-zn),l=Math.max(-.35,Math.min(.35,o*.08)),c=Math.cos(a)*.82+Math.cos(n)*l+(e-i.x)*.06,d=Math.sin(a)*.82+Math.sin(n)*l+(t-i.y)*.06;return or(Math.atan2(d,c))}function Uh(i,e){const t=qd(e),n=e.phaseRadians;return{fromTrailing:ha(t,i),toLeading:ha(i,n)}}function Nh(i,e,t){if(!e)return t?{standUp:!0}:{standUp:!0};const{angle:n}=nr(i.x,i.y),r=ds(i.x,i.y,e),{fromTrailing:s,toLeading:a}=Uh(n,e),o=e.sweepRadians*Rh,l=e.sweepRadians*Ch;return t?{standUp:!0}:r||a<l?{standUp:!0}:s>o?{lieDown:!0}:{standUp:!0}}function Fh(i,e,t){if(!t)return null;const n=nr(i.x,i.y).angle,r=t.sweepRadians*Ph;let s=null,a=1/0;for(const o of e){if(o.tricked||si(o,t))continue;const l=Math.atan2(o.center.y-t.centerY,o.center.x-t.centerX),c=ha(n,l);if(c<=.05||c>r)continue;const d=Math.hypot(i.x-o.center.x,i.y-o.center.y),h=c+d*.02;h<a&&(a=h,s=o)}return s}function Oh(i,e){const t=Math.hypot(i.x-e.center.x,i.y-e.center.y);if(t>20)return{steerX:e.center.x,steerY:e.center.y};if(t>e.radius+2.5)return{steerX:e.center.x,steerY:e.center.y};const n=i.x+Math.cos(e.rotationRadians)*5,r=i.y+Math.sin(e.rotationRadians)*5;return{steerX:n,steerY:r}}function Bh(i,e,t){if(t)return;const n=Math.hypot(i.x-e.center.x,i.y-e.center.y);if(n<Dh&&n>e.radius*.45)return e.prepareSlot}function kh(i){const{surfboard:e,trickPrepare:t,trickZones:n,tide:r}=i,s=e.position;if(e.speedState==="seated")return{startPaddle:!0,standUp:!0,setIntendedHeading:e.currentHeading};const a=Fh(s,n,r);let o=s.x,l=s.y;if(a)if(Math.hypot(s.x-a.center.x,s.y-a.center.y)<=Ih){const u=Oh(s,a);o=u.steerX,l=u.steerY}else{const u=jr(nr(s.x,s.y).angle+Jo*.65);o=u.x,l=u.y}else{const h=nr(s.x,s.y).angle+Jo,u=jr(h);o=u.x,l=u.y}const d={...Nh(s,r,a),setIntendedHeading:Lh(s,o,l)};if(a){const h=Bh(s,a,t);h!==void 0&&(d.prepareSlot=h)}return d}function Hh(i){const e=jr(i);return{x:e.x,y:e.y,heading:or(Zl(i))}}const ho=4,Gh=12,Jr=["rail","tunnel","jump","brain_coral","wall_ride"],jl={rail:0,brain_coral:0,tunnel:1,wall_ride:1,jump:2},zh=.22,Qo=.22,Vh=.92,Jl=5,Wh=.2,ir=Math.PI*2,ec=-5,Xh=5;function Ql(i=Math.random){const e=Xh-ec;return(ec+i()*e)*Math.PI/180}function eu(i){return i-Math.PI/2}function Yh(){return{nextZoneId:1e3}}function fo(i,e){return su(zh+i*(ir/e))}function tu(i=Math.random){return Qo+i()*(Vh-Qo)}function nu(i,e){return Math.atan2(i.center.y-e.centerY,i.center.x-e.centerX)}function iu(i,e,t){const n=$r(e),r=Zr(e);for(let s=t;s>=.18;s-=.04){const a=n+(r-n)*s,o=Gn+Math.cos(e)*a,l=zn+Math.sin(e)*a;if(Xn(i,Math.floor(o),Math.floor(l))==="coral_rideable")return{x:o,y:l}}return null}function ru(i,e){for(const t of e)if(Math.hypot(i.x-t.center.x,i.y-t.center.y)-ho*2<Gh)return!1;return!0}function qh(i=Math.random){return Jr[Math.floor(i()*Jr.length)]}function Kh(i,e,t,n,r,s,a=Math.random,o=!0,l=!1){const c=iu(i,e,s);if(!c||o&&!ru(c,r)||!l&&ds(c.x,c.y,t))return null;const d=qh(a),u=a()<Wh?e+Math.PI/2:eu(e);return{id:n,type:d,prepareSlot:jl[d],center:c,radius:ho,rotationRadians:u,rotationJitterRadians:Ql(a),tricked:!1}}function $h(i,e,t,n,r,s,a){for(let o=0;o<Jl;o+=1){const l=Kh(i,e,t,n,r,tu(s),s,!0,a);if(l)return l}return null}function Zh(i,e,t,n,r,s=Math.random){const a=ir/r*.35,o=[];for(const l of i){const c=nu(l,e);if(!si(l,e)){o.push(l.spawnedAtHighTide?{...l,spawnedAtHighTide:void 0}:l);continue}$o(c,e)&&!l.spawnedAtHighTide||o.push(l)}for(let l=0;l<r&&!(o.length>=r);l+=1){if(jh(o,e,l,r,a))continue;const c=fo(l,r);if(!$o(c,e))continue;const d=$h(t,c,e,`feature-${n.nextZoneId}`,o,s,!0);d&&(n.nextZoneId+=1,o.push({...d,spawnedAtHighTide:!0}))}return o}function jh(i,e,t,n,r){const s=fo(t,n);return i.some(a=>{const o=nu(a,e);return Jh(o,s,r)})}function Jh(i,e,t){let n=Math.abs(su(i-e));return n>Math.PI&&(n=ir-n),n<=t}function su(i){const e=i%ir;return e<0?e+ir:e}const pa=15;function Qh(i){const e=[];for(let t=0;t<pa;t+=1){const n=fo(t,pa);let r=null;for(let l=0;l<Jl;l+=1){const c=iu(i,n,tu());if(c&&ru(c,e)){r=c;break}}if(!r)continue;const s=Jr[t%Jr.length],o=t%5===0?n+Math.PI/2:eu(n);e.push({id:`${s}-${t}`,type:s,prepareSlot:jl[s],center:r,radius:ho,rotationRadians:o,rotationJitterRadians:Ql(),tricked:!1})}return e}function ef(){const i=Yl,e=ql,t=Ed(i,e,"deep_water");for(let u=0;u<e;u+=1)for(let m=0;m<i;m+=1){const x=Eh(m,u),S=bh(m,u),p=Sh(x),f=jo(x),M=yh(x),b=$r(x),E=Zr(x);S<=p?hr(t,m,u,"grass"):S<=f?hr(t,m,u,"sand"):S<=M?hr(t,m,u,"shallow"):S>=b&&S<=E&&hr(t,m,u,"coral_rideable")}const n=Math.PI/2,r=jo(n),s=Gn,a=zn+r-1.5,o=s-1.2,l=a-1.8,c=s+1.2,d=a-1.5,h=Hh(-Math.PI/4);return{map:t,spawnX:o,spawnY:l,spawnHeading:4,boardDockX:s,boardDockY:a,requiresBoardMount:!0,tide:{centerX:Gn,centerY:zn,innerRadius:Th,outerRadius:Ah,innerRadiusAtAngle:$r,outerRadiusAtAngle:Zr,sweepRadians:Math.PI/1.35,advancePerTick:.044},npcs:[{id:"guru",name:"Kaulu the Surf Guru",x:c,y:d,interactRadius:.9,dialogue:["Welcome to Coral Park, surfer!","Your board sits on the sand ring — click it when you are ready.","Ride the wide reef loop around the island.","Yellow chevrons show which way to ride through each feature.","Prime a trick button 1–4 ticks before you hit the matching coral.","Tai'ura's tide submerges features — they fade underwater, then fresh coral rises as the swell passes.","Watch Nalu ride the reef loop — she times the swell to hit every feature in the dry zone."]}],demoSurfer:{id:"nalu",name:"Nalu",startX:h.x,startY:h.y,startHeading:h.heading},trickZones:Qh(t)}}function tf(i,e,t){for(const n of i){const r=e-n.x,s=t-n.y;if(Math.hypot(r,s)<=n.interactRadius)return n}return null}function nf(i,e,t){for(const n of i)if(Math.floor(n.x)===e&&Math.floor(n.y)===t)return n;return null}function rf(i,e,t,n=0){for(const r of i){const s=e-r.x,a=t-r.y;if(Math.hypot(s,a)<=r.interactRadius+n)return r}return null}function tc(i,e,t,n=.3){const r=e-i.x,s=t-i.y;return Math.hypot(r,s)<=i.interactRadius+n}function sf(i,e){const t=Fl(i.startX,i.startY,i.startHeading);return{config:i,surfboard:{...t,speedState:"riding"},trickPrepare:null,trickAnimation:null,activeTrickZoneId:null,stats:e??{...Ri}}}function af(i){return{id:i.config.id,name:i.config.name,surfboard:{...i.surfboard,position:{...i.surfboard.position}},trickPrepare:i.trickPrepare?{...i.trickPrepare}:null,trickAnimation:zl(i.trickAnimation)}}function of(i,e,t){const n=Wl(t,e,i.surfboard.position,i.surfboard.currentHeading);return{...i,trickPrepare:null,trickAnimation:n,activeTrickZoneId:null,surfboard:{...i.surfboard,speedState:"riding",intendedHeading:n.endHeading,isRotating:!1}}}function cf(i,e,t,n){if(i.trickAnimation){const c=Xl(i.trickAnimation);return{...i,trickAnimation:c.state,surfboard:{...i.surfboard,position:c.position,currentHeading:c.heading,intendedHeading:c.heading,isRotating:!1},trickPrepare:fa(i.trickPrepare)}}const r=kh({surfboard:i.surfboard,trickPrepare:i.trickPrepare,trickZones:t,tide:n}),{prepareSlot:s,...a}=r;let o=i;s!==void 0&&(o={...o,trickPrepare:{slot:s,ticksSincePrepare:0}});const l=Ol(o.surfboard,e,a,o.stats);if(o={...o,surfboard:l.state,trickPrepare:fa(o.trickPrepare)},o.surfboard.speedState!=="seated"){const c=Gl(t,o.surfboard.position,n);return c&&o.activeTrickZoneId!==c.id?of({...o,activeTrickZoneId:c.id},c,e):c?o:{...o,activeTrickZoneId:null}}return{...o,activeTrickZoneId:null}}const Qr=[{id:"teeny_tai",name:"Teeny Tai",description:"Miniature wave spirit pet resembling Tai'ura.",tokenCost:null,earnOnly:!0},{id:"taiura_blessing",name:"Tai'ura's Blessing",description:"Coral blessing for ship combat ammo recovery.",tokenCost:500,minSailingLevel:40},{id:"ebb_and_flow",name:"Ebb and Flow",description:"Lunar spell — weapon swap grants a boosted attack.",tokenCost:750,minSailingLevel:60},{id:"living_coral",name:"Living Coral",description:"20% chance to double grinding output.",tokenCost:400,minAgilityLevel:50},{id:"coral_rail_cosmetic",name:"Coral Rail Trim",description:"Cosmetic surfboard rail glow.",tokenCost:150},{id:"surf_guru_board",name:"Ironwood Board",description:"Tier-2 surfboard cosmetic from the guru.",tokenCost:300,minAgilityLevel:30}],po=["Bronze","Iron","Steel","Mithril","Adamant","Rune","Dragon"];function lf(i){return i<=0?1:Math.min(po.length,Math.floor(i/10)+1)}function uf(i){return i<=0?0:Math.min(po.length-1,Math.floor(i/10))}function nc(i){return po[uf(i)]}function df(i){if(i<=0)return 0;const e=i%10;return e===0?10:e}const hf=45,ff=35,ic=1/10,rc=6,pf=10,mf=new Set(Qr.map(i=>i.id));function gf(){return{xp:{agility:0,sailing:0},coralTokens:0,unlocked:new Set,session:{tricksLanded:0,combo:0,maxCombo:0}}}function _f(i){return{xp:{...i.xp},coralTokens:i.coralTokens,unlocked:new Set(i.unlocked),session:{...i.session}}}function xf(i){return{xp:{...i.xp},coralTokens:i.coralTokens,unlocked:[...i.unlocked],session:{...i.session}}}function ui(i){return typeof i=="number"&&Number.isFinite(i)&&i>=0}function vf(i){if(!i||typeof i!="object")return null;const e=i;if(!e.xp||typeof e.xp!="object"||!ui(e.xp.agility)||!ui(e.xp.sailing)||!ui(e.coralTokens)||!e.session||typeof e.session!="object"||!ui(e.session.tricksLanded)||!ui(e.session.combo)||!ui(e.session.maxCombo)||!Array.isArray(e.unlocked))return null;const t=[];for(const n of e.unlocked){if(typeof n!="string"||!mf.has(n))return null;t.push(n)}return{xp:{agility:e.xp.agility,sailing:e.xp.sailing},coralTokens:e.coralTokens,unlocked:new Set(t),session:{tricksLanded:e.session.tricksLanded,combo:e.session.combo,maxCombo:e.session.maxCombo}}}function au(i){return Math.floor(Math.sqrt(i/100))+1}function ou(i){return Math.floor(Math.sqrt(i/120))+1}function cu(i,e){return e.earnOnly?{ok:!1,reason:"Earned through gameplay only"}:i.unlocked.has(e.id)?{ok:!1,reason:"Already unlocked"}:e.tokenCost!==null&&i.coralTokens<e.tokenCost?{ok:!1,reason:"Not enough Coral Tokens"}:e.minAgilityLevel&&au(i.xp.agility)<e.minAgilityLevel?{ok:!1,reason:`Requires Agility ${e.minAgilityLevel}`}:e.minSailingLevel&&ou(i.xp.sailing)<e.minSailingLevel?{ok:!1,reason:`Requires Sailing ${e.minSailingLevel}`}:{ok:!0}}function Mf(i,e){const t=Qr.find(s=>s.id===e);if(!t)return{state:i,success:!1,reason:"Unknown unlock"};const n=cu(i,t);return n.ok?{state:{...i,coralTokens:t.tokenCost!==null?i.coralTokens-t.tokenCost:i.coralTokens,unlocked:new Set([...i.unlocked,e])},success:!0}:{state:i,success:!1,reason:n.reason}}function Sf(i=Math.random){const e=i();if(e>=ic)return 0;const t=pf-rc+1,n=Math.floor(e/ic*t);return rc+Math.min(t-1,n)}function yf(i,e=Math.random){const t=i.session.combo+1,n=lf(t),r={agility:hf*n,sailing:ff*n},s=Sf(e);return{state:{...i,xp:{agility:i.xp.agility+r.agility,sailing:i.xp.sailing+r.sailing},coralTokens:i.coralTokens+s,session:{tricksLanded:i.session.tricksLanded+1,combo:t,maxCombo:Math.max(i.session.maxCombo,t)}},xpGained:r,tokensGained:s}}function Ef(i){return i.session.combo===0?i:{...i,session:{...i.session,combo:0}}}class bf{constructor(e){q(this,"surfboard");q(this,"progression");q(this,"trickZones");q(this,"tide");q(this,"pendingInput",{});q(this,"stats");q(this,"arena");q(this,"tickMs");q(this,"cursorWorldX",null);q(this,"cursorWorldY",null);q(this,"hoverHeading",null);q(this,"clickValid",!0);q(this,"tickCount",0);q(this,"xpDrops",[]);q(this,"npcDialogueIndex",new Map);q(this,"proximityGreeted",new Set);q(this,"pendingDialogue",[]);q(this,"boardMounted");q(this,"walk",null);q(this,"walkClickMarker",null);q(this,"pendingNpcTalk",null);q(this,"pendingBoardMount",!1);q(this,"trickZoneTideSync");q(this,"trickPrepare",null);q(this,"activeTrickZoneId",null);q(this,"trickAnimation",null);q(this,"tideFrozen",!1);q(this,"movementFrozen",!1);q(this,"boardInteractRadius",1.3);q(this,"demoSurfer",null);this.arena=e.arena,this.boardMounted=!e.arena.requiresBoardMount,this.stats=e.stats??{...Ri},this.tickMs=e.tickMs??dd,this.surfboard=Fl(e.arena.spawnX,e.arena.spawnY,e.arena.spawnHeading),this.progression=e.initialProgression?_f(e.initialProgression):gf(),this.trickZones=e.arena.trickZones.map(t=>({...t})),this.tide=e.arena.tide?Wd(e.arena.tide):null,this.trickZoneTideSync=Yh(),this.demoSurfer=e.arena.demoSurfer?sf(e.arena.demoSurfer,this.stats):null}getSnapshot(){var e,t,n;return{surfboard:{...this.surfboard,position:{...this.surfboard.position}},progression:{...this.progression,unlocked:new Set(this.progression.unlocked),session:{...this.progression.session},xp:{...this.progression.xp}},trickZones:this.trickZones.map(r=>({...r,center:{...r.center}})),npcs:this.arena.npcs.map(r=>({...r,dialogue:[...r.dialogue]})),boardDockX:this.arena.boardDockX,boardDockY:this.arena.boardDockY,boardMounted:this.boardMounted,tide:this.tide?{...this.tide}:null,cursorWorldX:this.cursorWorldX,cursorWorldY:this.cursorWorldY,hoverHeading:this.hoverHeading,clickValid:this.clickValid,tickCount:this.tickCount,walkTargetTx:((e=this.walkClickMarker)==null?void 0:e.tx)??null,walkTargetTy:((t=this.walkClickMarker)==null?void 0:t.ty)??null,walkClickValid:((n=this.walkClickMarker)==null?void 0:n.valid)??!0,onFootMoving:this.walk!==null,trickPrepare:this.trickPrepare?{...this.trickPrepare}:null,trickAnimation:zl(this.trickAnimation),demoSurfer:this.demoSurfer?af(this.demoSurfer):null}}consumeXpDrops(){const e=this.xpDrops;return this.xpDrops=[],e}setCursor(e,t){if(this.cursorWorldX=e,this.cursorWorldY=t,!this.boardMounted){this.clickValid=!0,this.hoverHeading=null;return}const n=this.boardMounted?Nl(this.arena.map,e,t):bd(this.arena.map,e,t);this.clickValid=n,this.clickValid?this.hoverHeading=Nd(this.surfboard.position.x,this.surfboard.position.y,e,t):this.hoverHeading=null}clearCursor(){this.cursorWorldX=null,this.cursorWorldY=null,this.hoverHeading=null,this.clickValid=!0}consumeDialogue(){const e=this.pendingDialogue;return this.pendingDialogue=[],e}clickWorld(e,t){const n=Math.floor(e),r=Math.floor(t),s=tf(this.arena.npcs,e,t)??nf(this.arena.npcs,n,r);if(s){this.handleNpcClick(s);return}if(!this.boardMounted&&this.isBoardClick(n,r,e,t)){this.handleBoardClick();return}if(!this.boardMounted){this.pendingNpcTalk=null,this.pendingBoardMount=!1,this.clickToWalk(e,t);return}this.clickOcean(e,t)}handleNpcClick(e){if(tc(e,this.surfboard.position.x,this.surfboard.position.y)){this.queueNpcDialogue(e);return}this.pendingNpcTalk=e,this.pendingBoardMount=!1,this.clickToWalk(e.x,e.y)}handleBoardClick(){if(this.isNearBoard()){this.tryMountBoard();return}this.pendingBoardMount=!0,this.pendingNpcTalk=null,this.clickToWalk(this.arena.boardDockX,this.arena.boardDockY)}isBoardClick(e,t,n,r){const s=Math.floor(this.arena.boardDockX),a=Math.floor(this.arena.boardDockY);if(e===s&&t===a)return!0;const o=n-this.arena.boardDockX,l=r-this.arena.boardDockY;return Math.hypot(o,l)<=this.boardInteractRadius}isNearBoard(){const e=this.surfboard.position.x-this.arena.boardDockX,t=this.surfboard.position.y-this.arena.boardDockY;return Math.hypot(e,t)<=this.boardInteractRadius}clickToWalk(e,t){const n=Math.floor(e),r=Math.floor(t),s=Ld(this.arena.map,this.surfboard.position,e,t);if(!s){this.walk=null,this.walkClickMarker={tx:n,ty:r,valid:!1};return}this.walk=s,this.walkClickMarker={tx:n,ty:r,valid:!0}}tryMountBoard(){return this.boardMounted||this.surfboard.speedState!=="seated"||!this.isNearBoard()?!1:(this.boardMounted=!0,this.walk=null,this.walkClickMarker=null,this.pendingBoardMount=!1,this.surfboard={...this.surfboard,position:{x:this.arena.boardDockX,y:this.arena.boardDockY},currentHeading:this.arena.spawnHeading,intendedHeading:this.arena.spawnHeading,isRotating:!1},this.pendingDialogue.push("You climb onto your surfboard."),!0)}clickOcean(e,t){this.setCursor(e,t),!(!this.clickValid||this.hoverHeading===null)&&(this.pendingInput.setIntendedHeading=this.hoverHeading)}queueNpcDialogue(e){const t=this.npcDialogueIndex.get(e.id)??0,n=e.dialogue[t];n!==void 0&&(this.pendingDialogue.push(`${e.name}: ${n}`),this.npcDialogueIndex.set(e.id,t+1))}checkProximityDialogue(){if(this.boardMounted&&this.surfboard.speedState!=="seated")return;const e=rf(this.arena.npcs,this.surfboard.position.x,this.surfboard.position.y,.6);!e||this.proximityGreeted.has(e.id)||(this.proximityGreeted.add(e.id),this.queueNpcDialogue(e))}resolvePendingInteractions(){this.pendingNpcTalk&&tc(this.pendingNpcTalk,this.surfboard.position.x,this.surfboard.position.y)&&(this.queueNpcDialogue(this.pendingNpcTalk),this.pendingNpcTalk=null),this.pendingBoardMount&&this.isNearBoard()&&this.tryMountBoard()}setSpeedState(e){if(e==="seated")this.pendingInput.stop=!0;else if(e==="paddling"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}this.boardMounted&&(this.pendingInput.startPaddle=!0)}else if(e==="riding"){if(!this.boardMounted){if(!this.isNearBoard()){this.pendingDialogue.push("Walk to your surfboard on the beach first.");return}this.tryMountBoard()}if(!this.boardMounted)return;this.surfboard.speedState==="seated"&&(this.pendingInput.startPaddle=!0),this.pendingInput.standUp=!0}}prepareTrick(e){!this.boardMounted||this.surfboard.speedState==="seated"||this.trickAnimation||(this.trickPrepare={slot:e,ticksSincePrepare:0})}clearTrickPrepare(){this.trickPrepare=null}resolveTrickZoneEntry(e){const t=this.trickPrepare,n=t!==null&&t.slot===e.prepareSlot&&Qd(t);if(this.trickPrepare=null,!n){this.bailTrick(e);return}const r=yf(this.progression);this.progression=r.state,this.trickZones=eh(this.trickZones,e.id),this.trickAnimation=Wl(this.arena.map,e,this.surfboard.position,this.surfboard.currentHeading),this.surfboard={...this.surfboard,intendedHeading:this.trickAnimation.endHeading,isRotating:!1},this.activeTrickZoneId=null,this.xpDrops.push({agility:r.xpGained.agility,sailing:r.xpGained.sailing,tokens:r.tokensGained,x:this.surfboard.position.x,y:this.surfboard.position.y})}bailTrick(e,t){this.trickPrepare=null,this.trickAnimation=null,this.progression=Ef(this.progression),this.activeTrickZoneId=null,this.surfboard={...this.surfboard,speedState:"seated",isRotating:!1},this.pendingDialogue.push(t??`Bailed on the ${e.type}! Prime the trick 1–4 ticks before you hit it.`)}checkTrickZoneResolution(){if(this.trickAnimation)return;if(!this.boardMounted||this.surfboard.speedState!=="riding"){this.activeTrickZoneId=null;return}const e=Gl(this.trickZones,this.surfboard.position,this.tide);if(!e){this.activeTrickZoneId=null;return}this.activeTrickZoneId!==e.id&&(this.activeTrickZoneId=e.id,this.resolveTrickZoneEntry(e))}tryPurchaseUnlock(e){const t=Mf(this.progression,e);return t.success?(this.progression=t.state,null):t.reason??"Purchase failed"}setStats(e){this.stats={...this.stats,...e}}setTideFrozen(e){this.tideFrozen=e}setMovementFrozen(e){this.movementFrozen=e}getArena(){return this.arena}tickTrickAnimationMovement(){if(!this.trickAnimation)return;const e=Xl(this.trickAnimation);this.trickAnimation=e.state,this.surfboard={...this.surfboard,position:e.position,currentHeading:e.heading,intendedHeading:e.heading,isRotating:!1}}tick(){if(this.boardMounted&&!this.movementFrozen)if(this.trickAnimation)this.tickTrickAnimationMovement();else{const e=Ol(this.surfboard,this.arena.map,this.pendingInput,this.stats);this.surfboard=e.state}else if(this.walk){const e=Ud(this.surfboard.position,this.surfboard.currentHeading,this.walk);this.walk=e.walk,this.surfboard={...this.surfboard,position:e.position,currentHeading:e.heading,intendedHeading:e.heading},e.walk||(this.walkClickMarker=null,this.resolvePendingInteractions())}this.pendingInput={},this.trickPrepare=fa(this.trickPrepare),this.checkTrickZoneResolution(),this.tide&&!this.tideFrozen&&(this.tide=Xd(this.tide),this.trickZones=Zh(this.trickZones,this.tide,this.arena.map,this.trickZoneTideSync,pa),this.trickZones=zd(this.trickZones,this.tide)),this.checkProximityDialogue(),this.demoSurfer&&(this.demoSurfer=cf(this.demoSurfer,this.arena.map,this.trickZones,this.tide)),this.tickCount+=1}}const lu="osrs-surfing-progression";function Tf(){try{const i=localStorage.getItem(lu);return i?vf(JSON.parse(i)):null}catch{return null}}function sc(i){try{localStorage.setItem(lu,JSON.stringify(xf(i)))}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="184",Af=0,ac=1,wf=2,Hr=1,Rf=2,Zi=3,Vn=0,Nt=1,En=2,An=0,Ci=1,oc=2,cc=3,lc=4,Cf=5,Qn=100,Pf=101,If=102,Df=103,Lf=104,Uf=200,Nf=201,Ff=202,Of=203,ma=204,ga=205,Bf=206,kf=207,Hf=208,Gf=209,zf=210,Vf=211,Wf=212,Xf=213,Yf=214,_a=0,xa=1,va=2,Ii=3,Ma=4,Sa=5,ya=6,Ea=7,uu=0,qf=1,Kf=2,un=0,du=1,hu=2,fu=3,pu=4,mu=5,gu=6,_u=7,xu=300,ii=301,Di=302,Ss=303,ys=304,fs=306,ba=1e3,bn=1001,Ta=1002,bt=1003,$f=1004,fr=1005,Pt=1006,Es=1007,ti=1008,Ht=1009,vu=1010,Mu=1011,rr=1012,go=1013,fn=1014,Jt=1015,Rn=1016,_o=1017,xo=1018,sr=1020,Su=35902,yu=35899,Eu=1021,bu=1022,Qt=1023,Cn=1026,ni=1027,vo=1028,Mo=1029,ri=1030,So=1031,yo=1033,Gr=33776,zr=33777,Vr=33778,Wr=33779,Aa=35840,wa=35841,Ra=35842,Ca=35843,Pa=36196,Ia=37492,Da=37496,La=37488,Ua=37489,es=37490,Na=37491,Fa=37808,Oa=37809,Ba=37810,ka=37811,Ha=37812,Ga=37813,za=37814,Va=37815,Wa=37816,Xa=37817,Ya=37818,qa=37819,Ka=37820,$a=37821,Za=36492,ja=36494,Ja=36495,Qa=36283,eo=36284,ts=36285,to=36286,Zf=3200,no=0,jf=1,kn="",Vt="srgb",ns="srgb-linear",is="linear",$e="srgb",di=7680,uc=519,Jf=512,Qf=513,ep=514,Eo=515,tp=516,np=517,bo=518,ip=519,dc=35044,hc="300 es",ln=2e3,ar=2001;function rp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sp(){const i=rs("canvas");return i.style.display="block",i}const fc={};function pc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Tu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Tu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Tu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function io(...i){const e=i.join(" ");e in fc||(fc[e]=!0,we(...i))}function ap(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const op={[_a]:xa,[va]:ya,[Ma]:Ea,[Ii]:Sa,[xa]:_a,[ya]:va,[Ea]:Ma,[Sa]:Ii};class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bs=Math.PI/180,ro=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function cp(i,e){return(i%e+e)%e}function Ts(i,e,t){return(1-t)*i+t*e}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const No=class No{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};No.prototype.isVector2=!0;let Ge=No;class Ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3],u=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(h!==S||l!==u||c!==m||d!==x){let p=l*u+c*m+d*x+h*S;p<0&&(u=-u,m=-m,x=-x,S=-S,p=-p);let f=1-o;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);f=Math.sin(f*M)/b,o=Math.sin(o*M)/b,l=l*f+u*o,c=c*f+m*o,d=d*f+x*o,h=h*f+S*o}else{l=l*f+u*o,c=c*f+m*o,d=d*f+x*o,h=h*f+S*o;const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[a],u=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+d*h+l*m-c*u,e[t+1]=l*x+d*u+c*h-o*m,e[t+2]=c*x+d*m+o*u-l*h,e[t+3]=d*x-o*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),h=o(s/2),u=l(n/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*m*x,this._y=c*m*h-u*d*x,this._z=c*d*x+u*m*h,this._w=c*d*h-u*m*x;break;case"YXZ":this._x=u*d*h+c*m*x,this._y=c*m*h-u*d*x,this._z=c*d*x-u*m*h,this._w=c*d*h+u*m*x;break;case"ZXY":this._x=u*d*h-c*m*x,this._y=c*m*h+u*d*x,this._z=c*d*x+u*m*h,this._w=c*d*h-u*m*x;break;case"ZYX":this._x=u*d*h-c*m*x,this._y=c*m*h+u*d*x,this._z=c*d*x-u*m*h,this._w=c*d*h+u*m*x;break;case"YZX":this._x=u*d*h+c*m*x,this._y=c*m*h+u*d*x,this._z=c*d*x-u*m*h,this._w=c*d*h-u*m*x;break;case"XZY":this._x=u*d*h-c*m*x,this._y=c*m*h-u*d*x,this._z=c*d*x+u*m*h,this._w=c*d*h+u*m*x;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fo=class Fo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return As.copy(this).projectOnVector(e),this.sub(As)}reflect(e){return this.sub(As.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fo.prototype.isVector3=!0;let F=Fo;const As=new F,mc=new Ni,Oo=class Oo{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],x=n[8],S=r[0],p=r[3],f=r[6],M=r[1],b=r[4],E=r[7],C=r[2],T=r[5],R=r[8];return s[0]=a*S+o*M+l*C,s[3]=a*p+o*b+l*T,s[6]=a*f+o*E+l*R,s[1]=c*S+d*M+h*C,s[4]=c*p+d*b+h*T,s[7]=c*f+d*E+h*R,s[2]=u*S+m*M+x*C,s[5]=u*p+m*b+x*T,s[8]=u*f+m*E+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,m=c*s-a*l,x=t*h+n*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=h*S,e[1]=(r*c-d*n)*S,e[2]=(o*n-r*a)*S,e[3]=u*S,e[4]=(d*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ws.makeScale(e,t)),this}rotate(e){return this.premultiply(ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oo.prototype.isMatrix3=!0;let Pe=Oo;const ws=new Pe,gc=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const i={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=wn(r.r),r.g=wn(r.g),r.b=wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===kn?is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ns]:{primaries:e,whitePoint:n,transfer:is,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const ze=lp();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=rs("canvas")),hi.width=e.width,hi.height=e.height;const r=hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dp=0;class To{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rs(r[a].image)):s.push(Rs(r[a]))}else s=Rs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?up.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let hp=0;const Cs=new F;class Dt extends ai{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=bn,r=bn,s=Pt,a=ti,o=Qt,l=Ht,c=Dt.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=cr(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=xu;Dt.DEFAULT_ANISOTROPY=1;const Bo=class Bo{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],x=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,C=(f+1)/2,T=(d+u)/4,R=(h+S)/4,_=(x+p)/4;return b>E&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=R/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=T/r,s=_/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=_/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-x)*(p-x)+(h-S)*(h-S)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(h-S)/M,this.z=(u-d)/M,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bo.prototype.isVector4=!0;let ht=Bo;class fp extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Dt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new To(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends fp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Au extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ls=class ls{constructor(e,t,n,r,s,a,o,l,c,d,h,u,m,x,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,h,u,m,x,S,p)}set(e,t,n,r,s,a,o,l,c,d,h,u,m,x,S,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=m,f[7]=x,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ls().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,m=a*h,x=o*d,S=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,x=c*d,S=c*h;t[0]=u+S*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-x,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,x=c*d,S=c*h;t[0]=u-S*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*d,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*h,x=o*d,S=o*h;t[0]=l*d,t[4]=x*c-m,t[8]=u*c+S,t[1]=l*h,t[5]=S*c+u,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*d,t[4]=S-u*h,t[8]=x*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*h+x,t[10]=u-S*h}else if(e.order==="XZY"){const u=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+S,t[5]=a*d,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*d,t[10]=S*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Ln.crossVectors(n,Bt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Ln.crossVectors(n,Bt)),Ln.normalize(),pr.crossVectors(Bt,Ln),r[0]=Ln.x,r[4]=pr.x,r[8]=Bt.x,r[1]=Ln.y,r[5]=pr.y,r[9]=Bt.y,r[2]=Ln.z,r[6]=pr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],x=n[2],S=n[6],p=n[10],f=n[14],M=n[3],b=n[7],E=n[11],C=n[15],T=r[0],R=r[4],_=r[8],A=r[12],P=r[1],w=r[5],U=r[9],V=r[13],X=r[2],L=r[6],z=r[10],H=r[14],Q=r[3],ee=r[7],ue=r[11],ve=r[15];return s[0]=a*T+o*P+l*X+c*Q,s[4]=a*R+o*w+l*L+c*ee,s[8]=a*_+o*U+l*z+c*ue,s[12]=a*A+o*V+l*H+c*ve,s[1]=d*T+h*P+u*X+m*Q,s[5]=d*R+h*w+u*L+m*ee,s[9]=d*_+h*U+u*z+m*ue,s[13]=d*A+h*V+u*H+m*ve,s[2]=x*T+S*P+p*X+f*Q,s[6]=x*R+S*w+p*L+f*ee,s[10]=x*_+S*U+p*z+f*ue,s[14]=x*A+S*V+p*H+f*ve,s[3]=M*T+b*P+E*X+C*Q,s[7]=M*R+b*w+E*L+C*ee,s[11]=M*_+b*U+E*z+C*ue,s[15]=M*A+b*V+E*H+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],x=e[3],S=e[7],p=e[11],f=e[15],M=l*m-c*u,b=o*m-c*h,E=o*u-l*h,C=a*m-c*d,T=a*u-l*d,R=a*h-o*d;return t*(S*M-p*b+f*E)-n*(x*M-p*C+f*T)+r*(x*b-S*C+f*R)-s*(x*E-S*T+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],x=e[12],S=e[13],p=e[14],f=e[15],M=t*o-n*a,b=t*l-r*a,E=t*c-s*a,C=n*l-r*o,T=n*c-s*o,R=r*c-s*l,_=d*S-h*x,A=d*p-u*x,P=d*f-m*x,w=h*p-u*S,U=h*f-m*S,V=u*f-m*p,X=M*V-b*U+E*w+C*P-T*A+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/X;return e[0]=(o*V-l*U+c*w)*L,e[1]=(r*U-n*V-s*w)*L,e[2]=(S*R-p*T+f*C)*L,e[3]=(u*T-h*R-m*C)*L,e[4]=(l*P-a*V-c*A)*L,e[5]=(t*V-r*P+s*A)*L,e[6]=(p*E-x*R-f*b)*L,e[7]=(d*R-u*E+m*b)*L,e[8]=(a*U-o*P+c*_)*L,e[9]=(n*P-t*U-s*_)*L,e[10]=(x*T-S*E+f*M)*L,e[11]=(h*E-d*T-m*M)*L,e[12]=(o*A-a*w-l*_)*L,e[13]=(t*w-n*A+r*_)*L,e[14]=(S*b-x*C-p*M)*L,e[15]=(d*C-h*b+u*M)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,m=s*d,x=s*h,S=a*d,p=a*h,f=o*h,M=l*c,b=l*d,E=l*h,C=n.x,T=n.y,R=n.z;return r[0]=(1-(S+f))*C,r[1]=(m+E)*C,r[2]=(x-b)*C,r[3]=0,r[4]=(m-E)*T,r[5]=(1-(u+f))*T,r[6]=(p+M)*T,r[7]=0,r[8]=(x+b)*R,r[9]=(p-M)*R,r[10]=(1-(u+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=fi.set(r[0],r[1],r[2]).length();const o=fi.set(r[4],r[5],r[6]).length(),l=fi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yt.copy(this);const c=1/a,d=1/o,h=1/l;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=d,Yt.elements[5]*=d,Yt.elements[6]*=d,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=ln,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===ln)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===ar)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ln,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===ln)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===ar)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ls.prototype.isMatrix4=!0;let nt=ls;const fi=new F,Yt=new nt,mp=new F(0,0,0),gp=new F(1,1,1),Ln=new F,pr=new F,Bt=new F,xc=new nt,vc=new Ni;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _p=0;const Mc=new F,pi=new Ni,_n=new nt,mr=new F,Hi=new F,xp=new F,vp=new Ni,Sc=new F(1,0,0),yc=new F(0,1,0),Ec=new F(0,0,1),bc={type:"added"},Mp={type:"removed"},mi={type:"childadded",child:null},Ps={type:"childremoved",child:null};class At extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,t=new Wn,n=new Ni,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Hi,mr,this.up):_n.lookAt(mr,Hi,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(_n),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),mi.child=e,this.dispatchEvent(mi),mi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class st extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),f=this._getHandJoint(c,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Ds(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ze.workingColorSpace){if(e=cp(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ds(a,s,e+1/3),this.g=Ds(a,s,e),this.b=Ds(a,s,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ze.workingToColorSpace(Ct.copy(this),e),Math.round(Ve(Ct.r*255,0,255))*65536+Math.round(Ve(Ct.g*255,0,255))*256+Math.round(Ve(Ct.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Vt){ze.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(gr);const n=Ts(Un.h,gr.h,t),r=Ts(Un.s,gr.s,t),s=Ts(Un.l,gr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ke;Ke.NAMES=wu;class yp extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new F,xn=new F,Ls=new F,vn=new F,gi=new F,_i=new F,Tc=new F,Us=new F,Ns=new F,Fs=new F,Os=new ht,Bs=new ht,ks=new ht;class jt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),xn.subVectors(n,t),Ls.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(xn),l=qt.dot(Ls),c=xn.dot(xn),d=xn.dot(Ls),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-o*d)*u,x=(a*d-o*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Os.setScalar(0),Bs.setScalar(0),ks.setScalar(0),Os.fromBufferAttribute(e,t),Bs.fromBufferAttribute(e,n),ks.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Os,s.x),a.addScaledVector(Bs,s.y),a.addScaledVector(ks,s.z),a}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),xn.subVectors(e,t),qt.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,n),_i.subVectors(s,n),Us.subVectors(e,n);const l=gi.dot(Us),c=_i.dot(Us);if(l<=0&&c<=0)return t.copy(n);Ns.subVectors(e,r);const d=gi.dot(Ns),h=_i.dot(Ns);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(gi,a);Fs.subVectors(e,s);const m=gi.dot(Fs),x=_i.dot(Fs);if(x>=0&&m<=x)return t.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(_i,o);const p=d*x-m*h;if(p<=0&&h-d>=0&&m-x>=0)return Tc.subVectors(s,r),o=(h-d)/(h-d+(m-x)),t.copy(r).addScaledVector(Tc,o);const f=1/(p+S+u);return a=S*f,o=u*f,t.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),xr.subVectors(this.max,Gi),xi.subVectors(e.a,Gi),vi.subVectors(e.b,Gi),Mi.subVectors(e.c,Gi),Nn.subVectors(vi,xi),Fn.subVectors(Mi,vi),qn.subVectors(xi,Mi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-qn.z,qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,qn.z,0,-qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-qn.y,qn.x,0];return!Hs(t,xi,vi,Mi,xr)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,xi,vi,Mi,xr))?!1:(vr.crossVectors(Nn,Fn),t=[vr.x,vr.y,vr.z],Hs(t,xi,vi,Mi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new F,new F,new F,new F,new F,new F,new F,new F],Kt=new F,_r=new oi,xi=new F,vi=new F,Mi=new F,Nn=new F,Fn=new F,qn=new F,Gi=new F,xr=new F,vr=new F,Kn=new F;function Hs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kn.fromArray(i,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),d=n.dot(Kn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const gt=new F,Mr=new Ge;let Ep=0;class tn extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bp=new oi,zi=new F,Gs=new F;class Fi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(Gs)),this.expandByPoint(zi.copy(e.center).sub(Gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tp=0;const zt=new nt,zs=new At,Si=new F,kt=new oi,Vi=new oi,yt=new F;class Lt extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?Cu:Ru)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return zs.lookAt(e),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(kt.min,Vi.min),kt.expandByPoint(yt),yt.addVectors(kt.max,Vi.max),kt.expandByPoint(yt)):(kt.expandByPoint(Vi.min),kt.expandByPoint(Vi.max))}kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)yt.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),yt.add(Si)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new F,l[_]=new F;const c=new F,d=new F,h=new F,u=new Ge,m=new Ge,x=new Ge,S=new F,p=new F;function f(_,A,P){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,P),u.fromBufferAttribute(s,_),m.fromBufferAttribute(s,A),x.fromBufferAttribute(s,P),d.sub(c),h.sub(c),m.sub(u),x.sub(u);const w=1/(m.x*x.y-x.x*m.y);isFinite(w)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(w),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(w),o[_].add(S),o[A].add(S),o[P].add(S),l[_].add(p),l[A].add(p),l[P].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){const P=M[_],w=P.start,U=P.count;for(let V=w,X=w+U;V<X;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new F,E=new F,C=new F,T=new F;function R(_){C.fromBufferAttribute(r,_),T.copy(C);const A=o[_];b.copy(A),b.sub(C.multiplyScalar(C.dot(A))).normalize(),E.crossVectors(T,A);const w=E.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,w)}for(let _=0,A=M.length;_<A;++_){const P=M[_],w=P.start,U=P.count;for(let V=w,X=w+U;V<X;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,d=new F,h=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let m=0,x=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let f=0;f<d;f++)u[x++]=c[m++]}return new tn(u,d,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ap=0;class Oi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Ci,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sn=new F,Vs=new F,Sr=new F,On=new F,Ws=new F,yr=new F,Xs=new F;class wo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vs.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Vs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=On.dot(this.direction),l=-On.dot(Sr),c=On.lengthSq(),d=Math.abs(1-a*a);let h,u,m,x;if(d>0)if(h=a*l-o,u=a*o-l,x=s*d,h>=0)if(u>=-x)if(u<=x){const S=1/d;h*=S,u*=S,m=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vs).addScaledVector(Sr,u),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,r,s){Ws.subVectors(t,e),yr.subVectors(n,e),Xs.crossVectors(Ws,yr);let a=this.direction.dot(Xs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(yr.crossVectors(On,yr));if(l<0)return null;const c=o*this.direction.dot(Ws.cross(On));if(c<0||l+c>a)return null;const d=-o*On.dot(Xs);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ro extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ac=new nt,$n=new wo,Er=new Fi,wc=new F,br=new F,Tr=new F,Ar=new F,Ys=new F,wr=new F,Rc=new F,Rr=new F;class Ne extends At{constructor(e=new Lt,t=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Ys.fromBufferAttribute(h,e),a?wr.addScaledVector(Ys,d):wr.addScaledVector(Ys.sub(t),d))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Er.containsPoint($n.origin)===!1&&($n.intersectSphere(Er,wc)===null||$n.origin.distanceToSquared(wc)>(e.far-e.near)**2))&&(Ac.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const p=u[x],f=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,C=b;E<C;E+=3){const T=o.getX(E),R=o.getX(E+1),_=o.getX(E+2);r=Cr(this,f,e,n,c,d,h,T,R,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=x,f=S;p<f;p+=3){const M=o.getX(p),b=o.getX(p+1),E=o.getX(p+2);r=Cr(this,a,e,n,c,d,h,M,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const p=u[x],f=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,C=b;E<C;E+=3){const T=E,R=E+1,_=E+2;r=Cr(this,f,e,n,c,d,h,T,R,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=x,f=S;p<f;p+=3){const M=p,b=p+1,E=p+2;r=Cr(this,a,e,n,c,d,h,M,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function wp(i,e,t,n,r,s,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Vn,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,br),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Ar);const d=wp(i,e,t,n,br,Tr,Ar,Rc);if(d){const h=new F;jt.getBarycoord(Rc,br,Tr,Ar,h),r&&(d.uv=jt.getInterpolatedAttribute(r,o,l,c,h,new Ge)),s&&(d.uv1=jt.getInterpolatedAttribute(s,o,l,c,h,new Ge)),a&&(d.normal=jt.getInterpolatedAttribute(a,o,l,c,h,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};jt.getNormal(br,Tr,Ar,u.normal),d.face=u,d.barycoord=h}return d}class Pu extends Dt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=bt,d=bt,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends tn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yi=new nt,Pc=new nt,Pr=[],Ic=new oi,Rp=new nt,Wi=new Ne,Xi=new Fi;class Cp extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Ic.copy(e.boundingBox).applyMatrix4(yi),this.boundingBox.union(Ic)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Xi.copy(e.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(Xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),e.ray.intersectsSphere(Xi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yi),Pc.multiplyMatrices(n,yi),Wi.matrixWorld=Pc,Wi.raycast(e,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=s,l.object=this,t.push(l)}Pr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pu(new Float32Array(r*this.count),r,this.count,vo,Jt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qs=new F,Pp=new F,Ip=new Pe;class Jn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qs.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(qs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ip.getNormalMatrix(e),r=this.coplanarPoint(qs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Fi,Dp=new Ge(.5,.5),Ir=new F;class Co{constructor(e=new Jn,t=new Jn,n=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],m=s[7],x=s[8],S=s[9],p=s[10],f=s[11],M=s[12],b=s[13],E=s[14],C=s[15];if(r[0].setComponents(c-a,m-d,f-x,C-M).normalize(),r[1].setComponents(c+a,m+d,f+x,C+M).normalize(),r[2].setComponents(c+o,m+h,f+S,C+b).normalize(),r[3].setComponents(c-o,m-h,f-S,C-b).normalize(),n)r[4].setComponents(l,u,p,E).normalize(),r[5].setComponents(c-l,m-u,f-p,C-E).normalize();else if(r[4].setComponents(c-l,m-u,f-p,C-E).normalize(),t===ln)r[5].setComponents(c+l,m+u,f+p,C+E).normalize();else if(t===ar)r[5].setComponents(l,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=Dp.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ir.x=r.normal.x>0?e.max.x:e.min.x,Ir.y=r.normal.y>0?e.max.y:e.min.y,Ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iu extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ss=new F,as=new F,Dc=new nt,Yi=new wo,Dr=new Fi,Ks=new F,Lc=new F;class Lp extends At{constructor(e=new Lt,t=new Iu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ss.fromBufferAttribute(t,r-1),as.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ss.distanceTo(as);e.setAttribute("lineDistance",new lt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Dr.radius+=s,e.ray.intersectsSphere(Dr)===!1)return;Dc.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Dc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let S=m,p=x-1;S<p;S+=c){const f=d.getX(S),M=d.getX(S+1),b=Lr(this,e,Yi,l,f,M,S);b&&t.push(b)}if(this.isLineLoop){const S=d.getX(x-1),p=d.getX(m),f=Lr(this,e,Yi,l,S,p,x-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=m,p=x-1;S<p;S+=c){const f=Lr(this,e,Yi,l,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){const S=Lr(this,e,Yi,l,x-1,m,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(ss.fromBufferAttribute(o,r),as.fromBufferAttribute(o,s),t.distanceSqToSegment(ss,as,Ks,Lc)>n)return;Ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ks);if(!(c<e.near||c>e.far))return{distance:c,point:Lc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Du extends Dt{constructor(e=[],t=ii,n,r,s,a,o,l,c,d){super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Li extends Dt{constructor(e,t,n=fn,r,s,a,o=bt,l=bt,c,d=Cn,h=1){if(d!==Cn&&d!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new To(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Up extends Li{constructor(e,t=fn,n=ii,r,s,a=bt,o=bt,l,c=Cn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lu extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xt extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(h,2));function x(S,p,f,M,b,E,C,T,R,_,A){const P=E/R,w=C/_,U=E/2,V=C/2,X=T/2,L=R+1,z=_+1;let H=0,Q=0;const ee=new F;for(let ue=0;ue<z;ue++){const ve=ue*w-V;for(let Ee=0;Ee<L;Ee++){const Xe=Ee*P-U;ee[S]=Xe*M,ee[p]=ve*b,ee[f]=X,c.push(ee.x,ee.y,ee.z),ee[S]=0,ee[p]=0,ee[f]=T>0?1:-1,d.push(ee.x,ee.y,ee.z),h.push(Ee/R),h.push(1-ue/_),H+=1}}for(let ue=0;ue<_;ue++)for(let ve=0;ve<R;ve++){const Ee=u+ve+L*ue,Xe=u+ve+L*(ue+1),Ze=u+(ve+1)+L*(ue+1),Le=u+(ve+1)+L*ue;l.push(Ee,Xe,Le),l.push(Xe,Ze,Le),Q+=6}o.addGroup(m,Q,A),m+=Q,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hn extends Lt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],d=t/2,h=Math.PI/2*e,u=t,m=2*h+u,x=n*2+s,S=r+1,p=new F,f=new F;for(let M=0;M<=x;M++){let b=0,E=0,C=0,T=0;if(M<=n){const A=M/n,P=A*Math.PI/2;E=-d-e*Math.cos(P),C=e*Math.sin(P),T=-e*Math.cos(P),b=A*h}else if(M<=n+s){const A=(M-n)/s;E=-d+A*t,C=e,T=0,b=h+A*u}else{const A=(M-n-s)/n,P=A*Math.PI/2;E=d+e*Math.sin(P),C=e*Math.cos(P),T=e*Math.sin(P),b=h+u+A*h}const R=Math.max(0,Math.min(1,b/m));let _=0;M===0?_=.5/r:M===x&&(_=-.5/r);for(let A=0;A<=r;A++){const P=A/r,w=P*Math.PI*2,U=Math.sin(w),V=Math.cos(w);f.x=-C*V,f.y=E,f.z=C*U,o.push(f.x,f.y,f.z),p.set(-C*V,T,C*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(P+_,R)}if(M>0){const A=(M-1)*S;for(let P=0;P<r;P++){const w=A+P,U=A+P+1,V=M*S+P,X=M*S+P+1;a.push(w,U,V),a.push(U,X,V)}}}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Tn extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],u=[],m=[];let x=0;const S=[],p=n/2;let f=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(m,2));function M(){const E=new F,C=new F;let T=0;const R=(t-e)/n;for(let _=0;_<=s;_++){const A=[],P=_/s,w=P*(t-e)+e;for(let U=0;U<=r;U++){const V=U/r,X=V*l+o,L=Math.sin(X),z=Math.cos(X);C.x=w*L,C.y=-P*n+p,C.z=w*z,h.push(C.x,C.y,C.z),E.set(L,R,z).normalize(),u.push(E.x,E.y,E.z),m.push(V,1-P),A.push(x++)}S.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const P=S[A][_],w=S[A+1][_],U=S[A+1][_+1],V=S[A][_+1];(e>0||A!==0)&&(d.push(P,w,V),T+=3),(t>0||A!==s-1)&&(d.push(w,U,V),T+=3)}c.addGroup(f,T,0),f+=T}function b(E){const C=x,T=new Ge,R=new F;let _=0;const A=E===!0?e:t,P=E===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,p*P,0),u.push(0,P,0),m.push(.5,.5),x++;const w=x;for(let U=0;U<=r;U++){const X=U/r*l+o,L=Math.cos(X),z=Math.sin(X);R.x=A*z,R.y=p*P,R.z=A*L,h.push(R.x,R.y,R.z),u.push(0,P,0),T.x=L*.5+.5,T.y=z*.5*P+.5,m.push(T.x,T.y),x++}for(let U=0;U<r;U++){const V=C+U,X=w+U;E===!0?d.push(X,X+1,V):d.push(X+1,X,V),_+=3}c.addGroup(f,_,E===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends Tn{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Po(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Lt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),d(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const b=new F,E=new F,C=new F;for(let T=0;T<t.length;T+=3)m(t[T+0],b),m(t[T+1],E),m(t[T+2],C),l(b,E,C,M)}function l(M,b,E,C){const T=C+1,R=[];for(let _=0;_<=T;_++){R[_]=[];const A=M.clone().lerp(E,_/T),P=b.clone().lerp(E,_/T),w=T-_;for(let U=0;U<=w;U++)U===0&&_===T?R[_][U]=A:R[_][U]=A.clone().lerp(P,U/w)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){const P=Math.floor(A/2);A%2===0?(u(R[_][P+1]),u(R[_+1][P]),u(R[_][P])):(u(R[_][P+1]),u(R[_+1][P+1]),u(R[_+1][P]))}}function c(M){const b=new F;for(let E=0;E<s.length;E+=3)b.x=s[E+0],b.y=s[E+1],b.z=s[E+2],b.normalize().multiplyScalar(M),s[E+0]=b.x,s[E+1]=b.y,s[E+2]=b.z}function d(){const M=new F;for(let b=0;b<s.length;b+=3){M.x=s[b+0],M.y=s[b+1],M.z=s[b+2];const E=p(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;a.push(E,1-C)}x(),h()}function h(){for(let M=0;M<a.length;M+=6){const b=a[M+0],E=a[M+2],C=a[M+4],T=Math.max(b,E,C),R=Math.min(b,E,C);T>.9&&R<.1&&(b<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function m(M,b){const E=M*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function x(){const M=new F,b=new F,E=new F,C=new F,T=new Ge,R=new Ge,_=new Ge;for(let A=0,P=0;A<s.length;A+=9,P+=6){M.set(s[A+0],s[A+1],s[A+2]),b.set(s[A+3],s[A+4],s[A+5]),E.set(s[A+6],s[A+7],s[A+8]),T.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),C.copy(M).add(b).add(E).divideScalar(3);const w=p(C);S(T,P+0,M,w),S(R,P+2,b,w),S(_,P+4,E,w)}}function S(M,b,E,C){C<0&&M.x===1&&(a[b]=M.x-1),E.x===0&&E.z===0&&(a[b]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.vertices,e.indices,e.radius,e.detail)}}class os extends Io{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new os(e.radius,e.detail)}}class lr extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,m=[],x=[],S=[],p=[];for(let f=0;f<d;f++){const M=f*u-a;for(let b=0;b<c;b++){const E=b*h-s;x.push(E,-M,0),S.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const b=M+c*f,E=M+c*(f+1),C=M+1+c*(f+1),T=M+1+c*f;m.push(b,E,T),m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new lt(x,3)),this.setAttribute("normal",new lt(S,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends Lt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],d=[],h=[],u=new F,m=new F,x=new F;for(let S=0;S<=n;S++){const p=a+S/n*o;for(let f=0;f<=r;f++){const M=f/r*s;m.x=(e+t*Math.cos(p))*Math.cos(M),m.y=(e+t*Math.cos(p))*Math.sin(M),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),x.subVectors(m,u).normalize(),d.push(x.x,x.y,x.z),h.push(f/r),h.push(S/n)}}for(let S=1;S<=n;S++)for(let p=1;p<=r;p++){const f=(r+1)*S+p-1,M=(r+1)*(S-1)+p-1,b=(r+1)*(S-1)+p,E=(r+1)*S+p;l.push(f,M,E),l.push(M,b,E)}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Uc(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Uc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Np(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Fp={clone:Ui,merge:It};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kp extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tt extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hp extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gp extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nu extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const $s=new nt,Nc=new F,Fc=new F;class zp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Ht,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),$s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ar||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ur=new F,Nr=new Ni,sn=new F;class Fu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ur,Nr,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Nr,sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ur,Nr,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Nr,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new F,Oc=new Ge,Bc=new Ge;class Wt extends Fu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Do extends Fu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vp extends zp{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wp extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Vp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xp extends Nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ei=-90,bi=1;class Yp extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ei,bi,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Ei,bi,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Ei,bi,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ei,bi,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Ei,bi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ei,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class qp extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kc=new nt;class Kp{constructor(e,t,n=0,r=1/0){this.ray=new wo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kc),this}intersectObject(e,t=!0,n=[]){return so(e,this,n,t),n.sort(Hc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)so(e[r],this,n,t);return n.sort(Hc),n}}function Hc(i,e){return i.distance-e.distance}function so(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)so(s[a],e,t,!0)}}const ko=class ko{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};ko.prototype.isMatrix2=!0;let Gc=ko;function zc(i,e,t,n){const r=$p(n);switch(t){case Eu:return i*e;case vo:return i*e/r.components*r.byteLength;case Mo:return i*e/r.components*r.byteLength;case ri:return i*e*2/r.components*r.byteLength;case So:return i*e*2/r.components*r.byteLength;case bu:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case yo:return i*e*4/r.components*r.byteLength;case Gr:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ra:return Math.max(i,8)*Math.max(e,8)/2;case Pa:case Ia:case La:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case es:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Za:case ja:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ts:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $p(i){switch(i){case Ht:case vu:return{byteLength:1,components:1};case rr:case Mu:case Rn:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case fn:case go:case Jt:return{byteLength:4,components:1};case Su:case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ou(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Zp(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<h.length;m++){const x=h[u],S=h[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,x=h.length;m<x;m++){const S=h[m];i.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
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
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,$m=`uniform sampler2D dfgLUT;
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
}`,Zm=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,s_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,u_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,v_=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,y_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,b_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:jp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:rm,batching_pars_vertex:sm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:cm,bsdfs:lm,iridescence_fragment:um,bumpmap_pars_fragment:dm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:xm,color_vertex:vm,common:Mm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Em,displacementmap_vertex:bm,emissivemap_fragment:Tm,emissivemap_pars_fragment:Am,colorspace_fragment:wm,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Vm,envmap_vertex:Lm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:km,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Gm,lights_pars_begin:zm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:Ym,lights_phong_pars_fragment:qm,lights_physical_fragment:Km,lights_physical_pars_fragment:$m,lights_fragment_begin:Zm,lights_fragment_maps:jm,lights_fragment_end:Jm,lightprobes_pars_fragment:Qm,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:ag,map_particle_pars_fragment:og,metalnessmap_fragment:cg,metalnessmap_pars_fragment:lg,morphinstance_vertex:ug,morphcolor_vertex:dg,morphnormal_vertex:hg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:xg,normal_vertex:vg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:bg,opaque_fragment:Tg,packing:Ag,premultiplied_alpha_fragment:wg,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:kg,skinnormal_vertex:Hg,specularmap_fragment:Gg,specularmap_pars_fragment:zg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:Yg,uv_pars_fragment:qg,uv_pars_vertex:Kg,uv_vertex:$g,worldpos_vertex:Zg,background_vert:jg,background_frag:Jg,backgroundCube_vert:Qg,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:r_,distance_vert:s_,distance_frag:a_,equirect_vert:o_,equirect_frag:c_,linedashed_vert:l_,linedashed_frag:u_,meshbasic_vert:d_,meshbasic_frag:h_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:__,meshnormal_frag:x_,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:y_,meshtoon_vert:E_,meshtoon_frag:b_,points_vert:T_,points_frag:A_,shadow_vert:w_,shadow_frag:R_,sprite_vert:C_,sprite_frag:P_},le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},on={basic:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:It([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:It([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:It([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:It([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:It([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:It([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:It([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:It([le.lights,le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};on.physical={uniforms:It([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Fr={r:0,b:0,g:0},I_=new nt,Bu=new Pe;Bu.set(-1,0,0,0,1,0,0,0,1);function D_(i,e,t,n,r,s){const a=new Ke(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function m(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const E=M.backgroundBlurriness>0;b=e.get(b,E)}return b}function x(M){let b=!1;const E=m(M);E===null?p(a,o):E&&E.isColor&&(p(E,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,b){const E=m(b);E&&(E.isCubeTexture||E.mapping===fs)?(c===void 0&&(c=new Ne(new Xt(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ui(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bu),c.material.toneMapped=ze.getTransfer(E.colorSpace)!==$e,(d!==E||h!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ne(new lr(2,2),new pn({name:"BackgroundMaterial",uniforms:Ui(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ze.getTransfer(E.colorSpace)!==$e,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(Fr,Uu(i)),t.buffers.color.setClear(Fr.r,Fr.g,Fr.b,b,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:x,addToRenderList:S,dispose:f}}function L_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(w,U,V,X,L){let z=!1;const H=h(w,X,V,U);s!==H&&(s=H,c(s.object)),z=m(w,X,V,L),z&&x(w,X,V,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(w,U,V,X),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function h(w,U,V,X){const L=X.wireframe===!0;let z=n[U.id];z===void 0&&(z={},n[U.id]=z);const H=w.isInstancedMesh===!0?w.id:0;let Q=z[H];Q===void 0&&(Q={},z[H]=Q);let ee=Q[V.id];ee===void 0&&(ee={},Q[V.id]=ee);let ue=ee[L];return ue===void 0&&(ue=u(l()),ee[L]=ue),ue}function u(w){const U=[],V=[],X=[];for(let L=0;L<t;L++)U[L]=0,V[L]=0,X[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:X,object:w,attributes:{},index:null}}function m(w,U,V,X){const L=s.attributes,z=U.attributes;let H=0;const Q=V.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const ve=L[ee];let Ee=z[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==X}function x(w,U,V,X){const L={},z=U.attributes;let H=0;const Q=V.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let ve=z[ee];ve===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor));const Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),L[ee]=Ee,H++}s.attributes=L,s.attributesNum=H,s.index=X}function S(){const w=s.newAttributes;for(let U=0,V=w.length;U<V;U++)w[U]=0}function p(w){f(w,0)}function f(w,U){const V=s.newAttributes,X=s.enabledAttributes,L=s.attributeDivisors;V[w]=1,X[w]===0&&(i.enableVertexAttribArray(w),X[w]=1),L[w]!==U&&(i.vertexAttribDivisor(w,U),L[w]=U)}function M(){const w=s.newAttributes,U=s.enabledAttributes;for(let V=0,X=U.length;V<X;V++)U[V]!==w[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function b(w,U,V,X,L,z,H){H===!0?i.vertexAttribIPointer(w,U,V,L,z):i.vertexAttribPointer(w,U,V,X,L,z)}function E(w,U,V,X){S();const L=X.attributes,z=V.getAttributes(),H=U.defaultAttributeValues;for(const Q in z){const ee=z[Q];if(ee.location>=0){let ue=L[Q];if(ue===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const ve=ue.normalized,Ee=ue.itemSize,Xe=e.get(ue);if(Xe===void 0)continue;const Ze=Xe.buffer,Le=Xe.type,Z=Xe.bytesPerElement,fe=Le===i.INT||Le===i.UNSIGNED_INT||ue.gpuType===go;if(ue.isInterleavedBufferAttribute){const re=ue.data,Te=re.stride,Ce=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ee.locationSize;Ae++)f(ee.location+Ae,re.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<ee.locationSize;Ae++)p(ee.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ae=0;Ae<ee.locationSize;Ae++)b(ee.location+Ae,Ee/ee.locationSize,Le,ve,Te*Z,(Ce+Ee/ee.locationSize*Ae)*Z,fe)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)f(ee.location+re,ue.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<ee.locationSize;re++)p(ee.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let re=0;re<ee.locationSize;re++)b(ee.location+re,Ee/ee.locationSize,Le,ve,Ee*Z,Ee/ee.locationSize*re*Z,fe)}}else if(H!==void 0){const ve=H[Q];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(ee.location,ve);break;case 3:i.vertexAttrib3fv(ee.location,ve);break;case 4:i.vertexAttrib4fv(ee.location,ve);break;default:i.vertexAttrib1fv(ee.location,ve)}}}}M()}function C(){A();for(const w in n){const U=n[w];for(const V in U){const X=U[V];for(const L in X){const z=X[L];for(const H in z)d(z[H].object),delete z[H];delete X[L]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const U=n[w.id];for(const V in U){const X=U[V];for(const L in X){const z=X[L];for(const H in z)d(z[H].object),delete z[H];delete X[L]}}delete n[w.id]}function R(w){for(const U in n){const V=n[U];for(const X in V){const L=V[X];if(L[w.id]===void 0)continue;const z=L[w.id];for(const H in z)d(z[H].object),delete z[H];delete L[w.id]}}}function _(w){for(const U in n){const V=n[U],X=w.isInstancedMesh===!0?w.id:0,L=V[X];if(L!==void 0){for(const z in L){const H=L[z];for(const Q in H)d(H[Q].object),delete H[Q];delete L[z]}delete V[X],Object.keys(V).length===0&&delete n[U]}}}function A(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function U_(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let m=0;m<d;m++)u+=c[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function N_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Qt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ht&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jt&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(we("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,maxSamples:C,samples:T}}function F_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Jn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||r;return r=u,n=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const x=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const M=s?0:n,b=M*4;let E=f.clippingState||null;l.value=E,E=d(x,u,b,m);for(let C=0;C!==b;++C)E[C]=t[C];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,x){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,x!==!0||p===null){const f=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,E=m;b!==S;++b,E+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const Hn=4,Vc=[.125,.215,.35,.446,.526,.582],ei=20,O_=256,qi=new Do,Wc=new Ke;let Zs=null,js=0,Js=0,Qs=!1;const B_=new F;class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=B_}=s;Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,js,Js),this._renderer.xr.enabled=Qs,e.scissorTest=!1,Ti(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Rn,format:Qt,colorSpace:ns,depthBuffer:!1},r=Yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k_(s)),this._blurMaterial=G_(s,e,t),this._ggxMaterial=H_(s,e,t)}return r}_compileMaterial(e){const t=new Ne(new Lt,e);this._renderer.compile(t,qi)}_sceneToCubeUV(e,t,n,r,s){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Wc),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Xt,new Ro({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let f=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,f=!0):(p.color.copy(Wc),f=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[b]));const C=this._cubeSize;Ti(r,E*C,b>2?C:0,C,C),h.setRenderTarget(r),f&&h.render(S,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ii||e.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ti(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,m=h*u,{_lodMax:x}=this,S=this._sizeLods[n],p=3*S*(n>x-Hn?n-x+Hn:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,Ti(s,p,f,3*S,2*S),r.setRenderTarget(s),r.render(o,qi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Ti(e,p,f,3*S,2*S),r.setRenderTarget(e),r.render(o,qi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),S=s/x,p=isFinite(s)?1+Math.floor(d*S):ei;p>ei&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const f=[];let M=0;for(let R=0;R<ei;++R){const _=R/S,A=Math.exp(-_*_/2);f.push(A),R===0?M+=A:R<p&&(M+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=x,u.mipInt.value=b-n;const E=this._sizeLods[r],C=3*E*(r>b-Hn?r-b+Hn:0),T=4*(this._cubeSize-E);Ti(t,C,T,3*E,2*E),l.setRenderTarget(t),l.render(h,qi)}}function k_(i){const e=[],t=[],n=[];let r=i;const s=i-Hn+1+Vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Hn?l=Vc[a-i+Hn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,x=6,S=3,p=2,f=1,M=new Float32Array(S*x*m),b=new Float32Array(p*x*m),E=new Float32Array(f*x*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,_=T>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];M.set(A,S*x*T),b.set(u,p*x*T);const P=[T,T,T,T,T,T];E.set(P,f*x*T)}const C=new Lt;C.setAttribute("position",new tn(M,S)),C.setAttribute("uv",new tn(b,p)),C.setAttribute("faceIndex",new tn(E,f)),n.push(new Ne(C,null)),r>Hn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yc(i,e,t){const n=new dn(i,e,t);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ti(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function H_(i,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ms(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function G_(i,e,t){const n=new Float32Array(ei),r=new F(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ms(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function qc(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Kc(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ms(){return`

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
	`}class ku extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Du(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xt(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:An});s.uniforms.tEquirect.value=t;const a=new Ne(r,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Pt),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function z_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Ss||m===ys)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const S=new ku(x.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,x=m===Ss||m===ys,S=m===ii||m===Di;if(x||S){let p=t.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Xc(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return x&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Xc(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,m){return m===Ss?u.mapping=ii:m===ys&&(u.mapping=Di),u}function l(u){let m=0;const x=6;for(let S=0;S<x;S++)u[S]!==void 0&&m++;return m===x}function c(u){const m=u.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function V_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&io("WebGLRenderer: "+n+" extension not supported."),r}}}function W_(i,e,t,n){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,x=h.attributes.position;let S=0;if(x===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let b=0,E=M.length;b<E;b+=3){const C=M[b+0],T=M[b+1],R=M[b+2];u.push(C,T,T,R,R,C)}}else{const M=x.array;S=x.version;for(let b=0,E=M.length/3-1;b<E;b+=3){const C=b+0,T=b+1,R=b+2;u.push(C,T,T,R,R,C)}}const p=new(x.count>=65535?Cu:Ru)(u,1);p.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function d(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function X_(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,s,h*a),t.update(u,n,1)}function c(h,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,h*a,m),t.update(u,n,m))}function d(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Y_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function q_(i,e,t){const n=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let C=o.attributes.position.count*E,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*T*4*h),_=new Au(R,C,T,h);_.type=Jt,_.needsUpdate=!0;const A=E*4;for(let w=0;w<h;w++){const U=f[w],V=M[w],X=b[w],L=C*T*4*w;for(let z=0;z<U.count;z++){const H=z*A;x===!0&&(r.fromBufferAttribute(U,z),R[L+H+0]=r.x,R[L+H+1]=r.y,R[L+H+2]=r.z,R[L+H+3]=0),S===!0&&(r.fromBufferAttribute(V,z),R[L+H+4]=r.x,R[L+H+5]=r.y,R[L+H+6]=r.z,R[L+H+7]=0),p===!0&&(r.fromBufferAttribute(X,z),R[L+H+8]=r.x,R[L+H+9]=r.y,R[L+H+10]=r.z,R[L+H+11]=X.itemSize===4?r.w:1)}}u={count:h,texture:_,size:new Ge(C,T)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function K_(i,e,t,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const $_={[du]:"LINEAR_TONE_MAPPING",[hu]:"REINHARD_TONE_MAPPING",[fu]:"CINEON_TONE_MAPPING",[pu]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function Z_(i,e,t,n,r){const s=new dn(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Li(e,t):void 0}),a=new dn(e,t,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),o=new Lt;o.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lt([0,2,0,0,2,0],2));const l=new kp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ne(o,l),d=new Do(-1,1,1,-1,0,1);let h=null,u=null,m=!1,x,S=null,p=[],f=!1;this.setSize=function(M,b){s.setSize(M,b),a.setSize(M,b);for(let E=0;E<p.length;E++){const C=p[E];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){p=M,f=p.length>0&&p[0].isRenderPass===!0;const b=s.width,E=s.height;for(let C=0;C<p.length;C++){const T=p[C];T.setSize&&T.setSize(b,E)}},this.begin=function(M,b){if(m||M.toneMapping===un&&p.length===0)return!1;if(S=b,b!==null){const E=b.width,C=b.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return f===!1&&M.setRenderTarget(s),x=M.toneMapping,M.toneMapping=un,!0},this.hasRenderPass=function(){return f},this.end=function(M,b){M.toneMapping=x,m=!0;let E=s,C=a;for(let T=0;T<p.length;T++){const R=p[T];if(R.enabled!==!1&&(R.render(M,C,E,b),R.needsSwap!==!1)){const _=E;E=C,C=_}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,l.defines={},ze.getTransfer(h)===$e&&(l.defines.SRGB_TRANSFER="");const T=$_[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(S),M.render(c,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Hu=new Dt,ao=new Li(1,1),Gu=new Au,zu=new pp,Vu=new Du,$c=[],Zc=[],jc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$c[r];if(s===void 0&&(s=new Float32Array(r),$c[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gs(i,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function t0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),St(t,n)}}function n0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),St(t,n)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),St(t,n)}}function r0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function c0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function h0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ao.compareFunction=t.isReversedDepthBuffer()?bo:Eo,s=ao):s=Hu,t.setTexture2D(e||s,r)}function f0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zu,r)}function p0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vu,r)}function m0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gu,r)}function g0(i){switch(i){case 5126:return j_;case 35664:return J_;case 35665:return Q_;case 35666:return e0;case 35674:return t0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return r0;case 35667:case 35671:return s0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return c0;case 36294:return l0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function _0(i,e){i.uniform1fv(this.addr,e)}function x0(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function v0(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function M0(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function S0(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y0(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E0(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b0(i,e){i.uniform1iv(this.addr,e)}function T0(i,e){i.uniform2iv(this.addr,e)}function A0(i,e){i.uniform3iv(this.addr,e)}function w0(i,e){i.uniform4iv(this.addr,e)}function R0(i,e){i.uniform1uiv(this.addr,e)}function C0(i,e){i.uniform2uiv(this.addr,e)}function P0(i,e){i.uniform3uiv(this.addr,e)}function I0(i,e){i.uniform4uiv(this.addr,e)}function D0(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ao:a=Hu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function L0(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zu,s[a])}function U0(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vu,s[a])}function N0(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gu,s[a])}function F0(i){switch(i){case 5126:return _0;case 35664:return x0;case 35665:return v0;case 35666:return M0;case 35674:return S0;case 35675:return y0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return w0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g0(t.type)}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F0(t.type)}}class k0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function el(i,e){i.seq.push(e),i.map[e.id]=e}function H0(i,e,t){const n=i.name,r=n.length;for(ea.lastIndex=0;;){const s=ea.exec(n),a=ea.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){el(t,c===void 0?new O0(o,i,e):new B0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new k0(o),el(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);H0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const G0=37297;let z0=0;function V0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const nl=new Pe;function W0(i){ze._getMatrix(nl,ze.workingColorSpace,i);const e=`mat3( ${nl.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case is:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(e),o)}else return s}function X0(i,e){const t=W0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Y0={[du]:"Linear",[hu]:"Reinhard",[fu]:"Cineon",[pu]:"ACESFilmic",[gu]:"AgX",[_u]:"Neutral",[mu]:"Custom"};function q0(i,e){const t=Y0[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new F;function K0(){ze.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Z0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ji(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(J0,ex)}const Q0=new Map;function ex(i,e){let t=Fe[e];if(t===void 0){const n=Q0.get(e);if(n!==void 0)t=Fe[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(tx,nx)}function nx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ol(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ix={[Hr]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function rx(i){return ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sx={[ii]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE_UV"};function ax(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ox={[Di]:"ENVMAP_MODE_REFRACTION"};function cx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lx={[uu]:"ENVMAP_BLENDING_MULTIPLY",[qf]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lx[i.combine]||"ENVMAP_BLENDING_NONE"}function dx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hx(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=rx(t),c=ax(t),d=cx(t),h=ux(t),u=dx(t),m=$0(t),x=Z0(s),S=r.createProgram();let p,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ji).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(p=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Fe.tonemapping_pars_fragment:"",t.toneMapping!==un?q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,X0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=oo(a),a=rl(a,t),a=sl(a,t),o=oo(o),o=rl(o,t),o=sl(o,t),a=al(a),o=al(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+p+a,E=M+f+o,C=tl(r,r.VERTEX_SHADER,b),T=tl(r,r.FRAGMENT_SHADER,E);r.attachShader(S,C),r.attachShader(S,T),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(w){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(S)||"",V=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(T)||"",L=U.trim(),z=V.trim(),H=X.trim();let Q=!0,ee=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,C,T);else{const ue=il(r,C,"vertex"),ve=il(r,T,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+ue+`
`+ve)}else L!==""?we("WebGLProgram: Program Info Log:",L):(z===""||H==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Q,programLog:L,vertexShader:{log:z,prefix:p},fragmentShader:{log:H,prefix:f}})}r.deleteShader(C),r.deleteShader(T),_=new Xr(r,S),A=j0(r,S)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,G0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=T,this}let fx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mx(e),t.set(e,n)),n}}class mx{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function gx(i){return i===ri||i===es||i===ts}function _x(i,e,t,n,r,s){const a=new Ao,o=new px,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,A,P,w,U,V){const X=w.fog,L=U.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||z,H),ee=Q&&Q.mapping===fs?Q.image.height:null,ue=m[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&we("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ve=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ee=ve!==void 0?ve.length:0;let Xe=0;L.morphAttributes.position!==void 0&&(Xe=1),L.morphAttributes.normal!==void 0&&(Xe=2),L.morphAttributes.color!==void 0&&(Xe=3);let Ze,Le,Z,fe;if(ue){const Ie=on[ue];Ze=Ie.vertexShader,Le=Ie.fragmentShader}else Ze=_.vertexShader,Le=_.fragmentShader,o.update(_),Z=o.getVertexShaderID(_),fe=o.getFragmentShaderID(_);const re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ce=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,ot=!!_.map,ke=!!_.matcap,je=!!Q,at=!!_.aoMap,Be=!!_.lightMap,_t=!!_.bumpMap,ct=!!_.normalMap,Ft=!!_.displacementMap,D=!!_.emissiveMap,xt=!!_.metalnessMap,He=!!_.roughnessMap,it=_.anisotropy>0,ce=_.clearcoat>0,ut=_.dispersion>0,y=_.iridescence>0,g=_.sheen>0,O=_.transmission>0,K=it&&!!_.anisotropyMap,J=ce&&!!_.clearcoatMap,te=ce&&!!_.clearcoatNormalMap,oe=ce&&!!_.clearcoatRoughnessMap,W=y&&!!_.iridescenceMap,$=y&&!!_.iridescenceThicknessMap,pe=g&&!!_.sheenColorMap,_e=g&&!!_.sheenRoughnessMap,se=!!_.specularMap,ne=!!_.specularColorMap,Re=!!_.specularIntensityMap,Ue=O&&!!_.transmissionMap,qe=O&&!!_.thicknessMap,I=!!_.gradientMap,ie=!!_.alphaMap,Y=_.alphaTest>0,me=!!_.alphaHash,ae=!!_.extensions;let j=un;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(j=i.toneMapping);const Se={shaderID:ue,shaderType:_.type,shaderName:_.name,vertexShader:Ze,fragmentShader:Le,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,instancingMorph:Ce&&U.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:ke,envMap:je,envMapMode:je&&Q.mapping,envMapCubeUVHeight:ee,aoMap:at,lightMap:Be,bumpMap:_t,normalMap:ct,displacementMap:Ft,emissiveMap:D,normalMapObjectSpace:ct&&_.normalMapType===jf,normalMapTangentSpace:ct&&_.normalMapType===no,packedNormalMap:ct&&_.normalMapType===no&&gx(_.normalMap.format),metalnessMap:xt,roughnessMap:He,anisotropy:it,anisotropyMap:K,clearcoat:ce,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:ut,iridescence:y,iridescenceMap:W,iridescenceThicknessMap:$,sheen:g,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:se,specularColorMap:ne,specularIntensityMap:Re,transmission:O,transmissionMap:Ue,thicknessMap:qe,gradientMap:I,opaque:_.transparent===!1&&_.blending===Ci&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:Y,alphaHash:me,combine:_.combine,mapUv:ot&&x(_.map.channel),aoMapUv:at&&x(_.aoMap.channel),lightMapUv:Be&&x(_.lightMap.channel),bumpMapUv:_t&&x(_.bumpMap.channel),normalMapUv:ct&&x(_.normalMap.channel),displacementMapUv:Ft&&x(_.displacementMap.channel),emissiveMapUv:D&&x(_.emissiveMap.channel),metalnessMapUv:xt&&x(_.metalnessMap.channel),roughnessMapUv:He&&x(_.roughnessMap.channel),anisotropyMapUv:K&&x(_.anisotropyMap.channel),clearcoatMapUv:J&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(_.sheenRoughnessMap.channel),specularMapUv:se&&x(_.specularMap.channel),specularColorMapUv:ne&&x(_.specularColorMap.channel),specularIntensityMapUv:Re&&x(_.specularIntensityMap.channel),transmissionMapUv:Ue&&x(_.transmissionMap.channel),thicknessMapUv:qe&&x(_.thicknessMap.channel),alphaMapUv:ie&&x(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ct||it),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(ot||ie),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:D&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===Nt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function b(_){const A=m[_.type];let P;if(A){const w=on[A];P=Fp.clone(w.uniforms)}else P=_.uniforms;return P}function E(_,A){let P=d.get(A);return P!==void 0?++P.usedTimes:(P=new hx(i,A,_,r),c.push(P),d.set(A,P)),P}function C(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:R}}function xx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ll(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,S,p,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=x,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=p,M.group=f),e++,M}function l(u,m,x,S,p,f){const M=o(u,m,x,S,p,f);x.transmission>0?n.push(M):x.transparent===!0?r.push(M):t.push(M)}function c(u,m,x,S,p,f){const M=o(u,m,x,S,p,f);x.transmission>0?n.unshift(M):x.transparent===!0?r.unshift(M):t.unshift(M)}function d(u,m){t.length>1&&t.sort(u||vx),n.length>1&&n.sort(m||cl),r.length>1&&r.sort(m||cl)}function h(){for(let u=e,m=i.length;u<m;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function Mx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ll,i.set(n,[a])):r>=s.length?(a=new ll,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ke};break;case"SpotLight":t={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ex=0;function bx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tx(i){const e=new Sx,t=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,s=new nt,a=new nt;function o(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,x=0,S=0,p=0,f=0,M=0,b=0,E=0,C=0,T=0,R=0;c.sort(bx);for(let A=0,P=c.length;A<P;A++){const w=c[A],U=w.color,V=w.intensity,X=w.distance;let L=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ri?L=w.shadow.map.texture:L=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=U.r*V,h+=U.g*V,u+=U.b*V;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],V);R++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const H=w.shadow,Q=t.get(w);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=L,n.directionalShadowMatrix[m]=w.shadow.matrix,M++}n.directional[m]=z,m++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(U).multiplyScalar(V),z.distance=X,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[S]=z;const H=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,H.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[S]=H.matrix,w.castShadow){const Q=t.get(w);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=L,E++}S++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(U).multiplyScalar(V),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=z,p++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const H=w.shadow,Q=t.get(w);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=L,n.pointShadowMatrix[x]=w.shadow.matrix,b++}n.point[x]=z,x++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(V),z.groundColor.copy(w.groundColor).multiplyScalar(V),n.hemi[f]=z,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==S||_.rectAreaLength!==p||_.hemiLength!==f||_.numDirectionalShadows!==M||_.numPointShadows!==b||_.numSpotShadows!==E||_.numSpotMaps!==C||_.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=p,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,_.directionalLength=m,_.pointLength=x,_.spotLength=S,_.rectAreaLength=p,_.hemiLength=f,_.numDirectionalShadows=M,_.numPointShadows=b,_.numSpotShadows=E,_.numSpotMaps=C,_.numLightProbes=R,n.version=Ex++)}function l(c,d){let h=0,u=0,m=0,x=0,S=0;const p=d.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:n}}function ul(i){const e=new Tx(i),t=[],n=[],r=[];function s(u){h.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ax(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ul(i),e.set(r,[o])):s>=a.length?(o=new ul(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`,Cx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Px=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],dl=new nt,Ki=new F,ta=new F;function Ix(i,e,t){let n=new Co;const r=new Ge,s=new Ge,a=new ht,o=new Hp,l=new Gp,c={},d=t.maxTextureSize,h={[Vn]:Nt,[Nt]:Vn,[En]:En},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:wx,fragmentShader:Rx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ne(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let f=this.type;this.render=function(T,R,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Rf&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hr);const A=i.getRenderTarget(),P=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),U=i.state;U.setBlending(An),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=f!==this.type;V&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(L=>L.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,L=T.length;X<L;X++){const z=T[X],H=z.shadow;if(H===void 0){we("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Q=H.getFrameExtents();r.multiply(Q),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,H.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ee,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Zi){if(z.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new dn(r.x,r.y,{format:ri,type:Rn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Li(r.x,r.y,Jt),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Cn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=bt,H.map.depthTexture.magFilter=bt}else z.isPointLight?(H.map=new ku(r.x),H.map.depthTexture=new Up(r.x,fn)):(H.map=new dn(r.x,r.y),H.map.depthTexture=new Li(r.x,r.y,fn)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Cn,this.type===Hr?(H.map.depthTexture.compareFunction=ee?bo:Eo,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=bt,H.map.depthTexture.magFilter=bt);H.camera.updateProjectionMatrix()}const ue=H.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ue;ve++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(H.map),i.clear());const Ee=H.getViewport(ve);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),U.viewport(a)}if(z.isPointLight){const Ee=H.camera,Xe=H.matrix,Ze=z.distance||Ee.far;Ze!==Ee.far&&(Ee.far=Ze,Ee.updateProjectionMatrix()),Ki.setFromMatrixPosition(z.matrixWorld),Ee.position.copy(Ki),ta.copy(Ee.position),ta.add(Cx[ve]),Ee.up.copy(Px[ve]),Ee.lookAt(ta),Ee.updateMatrixWorld(),Xe.makeTranslation(-Ki.x,-Ki.y,-Ki.z),dl.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),H._frustum.setFromProjectionMatrix(dl,Ee.coordinateSystem,Ee.reversedDepth)}else H.updateMatrices(z);n=H.getFrustum(),E(R,_,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Zi&&M(H,_),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(A,P,w)};function M(T,R){const _=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new dn(r.x,r.y,{format:ri,type:Rn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,_,m,S,null)}function b(T,R,_,A){let P=null;const w=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)P=w;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=P.uuid,V=R.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let L=X[V];L===void 0&&(L=P.clone(),X[V]=L,R.addEventListener("dispose",C)),P=L}if(P.visible=R.visible,P.wireframe=R.wireframe,A===Zi?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=i.properties.get(P);U.light=_}return P}function E(T,R,_,A,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Zi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const V=e.update(T),X=T.material;if(Array.isArray(X)){const L=V.groups;for(let z=0,H=L.length;z<H;z++){const Q=L[z],ee=X[Q.materialIndex];if(ee&&ee.visible){const ue=b(T,ee,A,P);T.onBeforeShadow(i,T,R,_,V,ue,Q),i.renderBufferDirect(_,null,V,ue,T,Q),T.onAfterShadow(i,T,R,_,V,ue,Q)}}}else if(X.visible){const L=b(T,X,A,P);T.onBeforeShadow(i,T,R,_,V,L,null),i.renderBufferDirect(_,null,V,L,T,null),T.onAfterShadow(i,T,R,_,V,L,null)}}const U=T.children;for(let V=0,X=U.length;V<X;V++)E(U[V],R,_,A,P)}function C(T){T.target.removeEventListener("dispose",C);for(const _ in c){const A=c[_],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Dx(i,e){function t(){let I=!1;const ie=new ht;let Y=null;const me=new ht(0,0,0,0);return{setMask:function(ae){Y!==ae&&!I&&(i.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){I=ae},setClear:function(ae,j,Se,Ie,ft){ft===!0&&(ae*=Ie,j*=Ie,Se*=Ie),ie.set(ae,j,Se,Ie),me.equals(ie)===!1&&(i.clearColor(ae,j,Se,Ie),me.copy(ie))},reset:function(){I=!1,Y=null,me.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,Y=null,me=null,ae=null;return{setReversed:function(j){if(ie!==j){const Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const Ie=ae;ae=null,this.setClear(Ie)}},getReversed:function(){return ie},setTest:function(j){j?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(j){Y!==j&&!I&&(i.depthMask(j),Y=j)},setFunc:function(j){if(ie&&(j=op[j]),me!==j){switch(j){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=j}},setLocked:function(j){I=j},setClear:function(j){ae!==j&&(ae=j,ie&&(j=1-j),i.clearDepth(j))},reset:function(){I=!1,Y=null,me=null,ae=null,ie=!1}}}function r(){let I=!1,ie=null,Y=null,me=null,ae=null,j=null,Se=null,Ie=null,ft=null;return{setTest:function(Je){I||(Je?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!I&&(i.stencilMask(Je),ie=Je)},setFunc:function(Je,gn,nn){(Y!==Je||me!==gn||ae!==nn)&&(i.stencilFunc(Je,gn,nn),Y=Je,me=gn,ae=nn)},setOp:function(Je,gn,nn){(j!==Je||Se!==gn||Ie!==nn)&&(i.stencilOp(Je,gn,nn),j=Je,Se=gn,Ie=nn)},setLocked:function(Je){I=Je},setClear:function(Je){ft!==Je&&(i.clearStencil(Je),ft=Je)},reset:function(){I=!1,ie=null,Y=null,me=null,ae=null,j=null,Se=null,Ie=null,ft=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},m=new WeakMap,x=[],S=null,p=!1,f=null,M=null,b=null,E=null,C=null,T=null,R=null,_=new Ke(0,0,0),A=0,P=!1,w=null,U=null,V=null,X=null,L=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=Q>=2);let ue=null,ve={};const Ee=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),Ze=new ht().fromArray(Ee),Le=new ht().fromArray(Xe);function Z(I,ie,Y,me){const ae=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<Y;Se++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ie+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return j}const fe={};fe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Ii),_t(!1),ct(ac),re(i.CULL_FACE),at(An);function re(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Te(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ce(I,ie){return u[I]!==ie?(i.bindFramebuffer(I,ie),u[I]=ie,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(I,ie){let Y=x,me=!1;if(I){Y=m.get(ie),Y===void 0&&(Y=[],m.set(ie,Y));const ae=I.textures;if(Y.length!==ae.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Se=ae.length;j<Se;j++)Y[j]=i.COLOR_ATTACHMENT0+j;Y.length=ae.length,me=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,me=!0);me&&i.drawBuffers(Y)}function ot(I){return S!==I?(i.useProgram(I),S=I,!0):!1}const ke={[Qn]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};ke[Df]=i.MIN,ke[Lf]=i.MAX;const je={[Uf]:i.ZERO,[Nf]:i.ONE,[Ff]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[zf]:i.SRC_ALPHA_SATURATE,[Hf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function at(I,ie,Y,me,ae,j,Se,Ie,ft,Je){if(I===An){p===!0&&(Te(i.BLEND),p=!1);return}if(p===!1&&(re(i.BLEND),p=!0),I!==Cf){if(I!==f||Je!==P){if((M!==Qn||C!==Qn)&&(i.blendEquation(i.FUNC_ADD),M=Qn,C=Qn),Je)switch(I){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",I);break}else switch(I){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",I);break}b=null,E=null,T=null,R=null,_.set(0,0,0),A=0,f=I,P=Je}return}ae=ae||ie,j=j||Y,Se=Se||me,(ie!==M||ae!==C)&&(i.blendEquationSeparate(ke[ie],ke[ae]),M=ie,C=ae),(Y!==b||me!==E||j!==T||Se!==R)&&(i.blendFuncSeparate(je[Y],je[me],je[j],je[Se]),b=Y,E=me,T=j,R=Se),(Ie.equals(_)===!1||ft!==A)&&(i.blendColor(Ie.r,Ie.g,Ie.b,ft),_.copy(Ie),A=ft),f=I,P=!1}function Be(I,ie){I.side===En?Te(i.CULL_FACE):re(i.CULL_FACE);let Y=I.side===Nt;ie&&(Y=!Y),_t(Y),I.blending===Ci&&I.transparent===!1?at(An):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const me=I.stencilWrite;o.setTest(me),me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),D(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function ct(I){I!==Af?(re(i.CULL_FACE),I!==U&&(I===ac?i.cullFace(i.BACK):I===wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),U=I}function Ft(I){I!==V&&(H&&i.lineWidth(I),V=I)}function D(I,ie,Y){I?(re(i.POLYGON_OFFSET_FILL),(X!==ie||L!==Y)&&(X=ie,L=Y,a.getReversed()&&(ie=-ie),i.polygonOffset(ie,Y))):Te(i.POLYGON_OFFSET_FILL)}function xt(I){I?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function He(I){I===void 0&&(I=i.TEXTURE0+z-1),ue!==I&&(i.activeTexture(I),ue=I)}function it(I,ie,Y){Y===void 0&&(ue===null?Y=i.TEXTURE0+z-1:Y=ue);let me=ve[Y];me===void 0&&(me={type:void 0,texture:void 0},ve[Y]=me),(me.type!==I||me.texture!==ie)&&(ue!==Y&&(i.activeTexture(Y),ue=Y),i.bindTexture(I,ie||fe[I]),me.type=I,me.texture=ie)}function ce(){const I=ve[ue];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function O(){try{i.texSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function te(){try{i.texStorage2D(...arguments)}catch(I){We("WebGLState:",I)}}function oe(){try{i.texStorage3D(...arguments)}catch(I){We("WebGLState:",I)}}function W(){try{i.texImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function $(){try{i.texImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function pe(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function _e(I,ie){h[I]!==ie&&(i.pixelStorei(I,ie),h[I]=ie)}function se(I){Ze.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function ne(I){Le.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Le.copy(I))}function Re(I,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let me=Y.get(I);me===void 0&&(me=i.getUniformBlockIndex(ie,I.name),Y.set(I,me))}function Ue(I,ie){const me=c.get(ie).get(I);l.get(ie)!==me&&(i.uniformBlockBinding(ie,me,I.__bindingPointIndex),l.set(ie,me))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},ue=null,ve={},u={},m=new WeakMap,x=[],S=null,p=!1,f=null,M=null,b=null,E=null,C=null,T=null,R=null,_=new Ke(0,0,0),A=0,P=!1,w=null,U=null,V=null,X=null,L=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Te,bindFramebuffer:Ce,drawBuffers:Ae,useProgram:ot,setBlending:at,setMaterial:Be,setFlipSided:_t,setCullFace:ct,setLineWidth:Ft,setPolygonOffset:D,setScissorTest:xt,activeTexture:He,bindTexture:it,unbindTexture:ce,compressedTexImage2D:ut,compressedTexImage3D:y,texImage2D:W,texImage3D:$,pixelStorei:_e,getParameter:pe,updateUBOMapping:Re,uniformBlockBinding:Ue,texStorage2D:te,texStorage3D:oe,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:J,scissor:se,viewport:ne,reset:qe}}function Lx(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,d=new WeakMap,h=new Set;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,g){return x?new OffscreenCanvas(y,g):rs("canvas")}function p(y,g,O){let K=1;const J=ut(y);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const te=Math.floor(K*J.width),oe=Math.floor(K*J.height);u===void 0&&(u=S(te,oe));const W=g?S(te,oe):u;return W.width=te,W.height=oe,W.getContext("2d").drawImage(y,0,0,te,oe),we("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+oe+")."),W}else return"data"in y&&we("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function f(y){return y.generateMipmaps}function M(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(y,g,O,K,J,te=!1){if(y!==null){if(i[y]!==void 0)return i[y];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let oe;K&&(oe=e.get("EXT_texture_norm16"),oe||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=g;if(g===i.RED&&(O===i.FLOAT&&(W=i.R32F),O===i.HALF_FLOAT&&(W=i.R16F),O===i.UNSIGNED_BYTE&&(W=i.R8),O===i.UNSIGNED_SHORT&&oe&&(W=oe.R16_EXT),O===i.SHORT&&oe&&(W=oe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.R8UI),O===i.UNSIGNED_SHORT&&(W=i.R16UI),O===i.UNSIGNED_INT&&(W=i.R32UI),O===i.BYTE&&(W=i.R8I),O===i.SHORT&&(W=i.R16I),O===i.INT&&(W=i.R32I)),g===i.RG&&(O===i.FLOAT&&(W=i.RG32F),O===i.HALF_FLOAT&&(W=i.RG16F),O===i.UNSIGNED_BYTE&&(W=i.RG8),O===i.UNSIGNED_SHORT&&oe&&(W=oe.RG16_EXT),O===i.SHORT&&oe&&(W=oe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RG8UI),O===i.UNSIGNED_SHORT&&(W=i.RG16UI),O===i.UNSIGNED_INT&&(W=i.RG32UI),O===i.BYTE&&(W=i.RG8I),O===i.SHORT&&(W=i.RG16I),O===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGB8UI),O===i.UNSIGNED_SHORT&&(W=i.RGB16UI),O===i.UNSIGNED_INT&&(W=i.RGB32UI),O===i.BYTE&&(W=i.RGB8I),O===i.SHORT&&(W=i.RGB16I),O===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),O===i.UNSIGNED_INT&&(W=i.RGBA32UI),O===i.BYTE&&(W=i.RGBA8I),O===i.SHORT&&(W=i.RGBA16I),O===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&oe&&(W=oe.RGB16_EXT),O===i.SHORT&&oe&&(W=oe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){const $=te?is:ze.getTransfer(J);O===i.FLOAT&&(W=i.RGBA32F),O===i.HALF_FLOAT&&(W=i.RGBA16F),O===i.UNSIGNED_BYTE&&(W=$===$e?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&oe&&(W=oe.RGBA16_EXT),O===i.SHORT&&oe&&(W=oe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function C(y,g){let O;return y?g===null||g===fn||g===sr?O=i.DEPTH24_STENCIL8:g===Jt?O=i.DEPTH32F_STENCIL8:g===rr&&(O=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fn||g===sr?O=i.DEPTH_COMPONENT24:g===Jt?O=i.DEPTH_COMPONENT32F:g===rr&&(O=i.DEPTH_COMPONENT16),O}function T(y,g){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==bt&&y.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){const g=y.target;g.removeEventListener("dispose",R),A(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&h.delete(g)}function _(y){const g=y.target;g.removeEventListener("dispose",_),w(g)}function A(y){const g=n.get(y);if(g.__webglInit===void 0)return;const O=y.source,K=m.get(O);if(K){const J=K[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(y),Object.keys(K).length===0&&m.delete(O)}n.remove(y)}function P(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const O=y.source,K=m.get(O);delete K[g.__cacheKey],a.memory.textures--}function w(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let J=0;J<g.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[K][J]);else i.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)i.deleteFramebuffer(g.__webglFramebuffer[K]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=y.textures;for(let K=0,J=O.length;K<J;K++){const te=n.get(O[K]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(y)}let U=0;function V(){U=0}function X(){return U}function L(y){U=y}function z(){const y=U;return y>=r.maxTextures&&we("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),U+=1,y}function H(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){const O=n.get(y);if(y.isVideoTexture&&it(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const K=y.image;if(K===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(O,y,g);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function ee(y,g){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Te(O,y,g);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ue(y,g){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Te(O,y,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ve(y,g){const O=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Ce(O,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Ee={[ba]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},Xe={[bt]:i.NEAREST,[$f]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Ze={[Jf]:i.NEVER,[ip]:i.ALWAYS,[Qf]:i.LESS,[Eo]:i.LEQUAL,[ep]:i.EQUAL,[bo]:i.GEQUAL,[tp]:i.GREATER,[np]:i.NOTEQUAL};function Le(y,g){if(g.type===Jt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===Es||g.magFilter===fr||g.magFilter===ti||g.minFilter===Pt||g.minFilter===Es||g.minFilter===fr||g.minFilter===ti)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ee[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ee[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ee[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Xe[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Ze[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===bt||g.minFilter!==fr&&g.minFilter!==ti||g.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Z(y,g){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",R));const K=g.source;let J=m.get(K);J===void 0&&(J={},m.set(K,J));const te=H(g);if(te!==y.__cacheKey){J[te]===void 0&&(J[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[te].usedTimes++;const oe=J[y.__cacheKey];oe!==void 0&&(J[y.__cacheKey].usedTimes--,oe.usedTimes===0&&P(g)),y.__cacheKey=te,y.__webglTexture=J[te].texture}return O}function fe(y,g,O){return Math.floor(Math.floor(y/O)/g)}function re(y,g,O,K){const te=y.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,K,g.data);else{te.sort((_e,se)=>_e.start-se.start);let oe=0;for(let _e=1;_e<te.length;_e++){const se=te[oe],ne=te[_e],Re=se.start+se.count,Ue=fe(ne.start,g.width,4),qe=fe(se.start,g.width,4);ne.start<=Re+1&&Ue===qe&&fe(ne.start+ne.count-1,g.width,4)===Ue?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++oe,te[oe]=ne)}te.length=oe+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let _e=0,se=te.length;_e<se;_e++){const ne=te[_e],Re=Math.floor(ne.start/4),Ue=Math.ceil(ne.count/4),qe=Re%g.width,I=Math.floor(Re/g.width),ie=Ue,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,qe,I,ie,Y,O,K,g.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function Te(y,g,O){let K=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=i.TEXTURE_3D);const J=Z(y,g),te=g.source;t.bindTexture(K,y.__webglTexture,i.TEXTURE0+O);const oe=n.get(te);if(te.version!==oe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Y=ze.getPrimaries(ze.workingColorSpace),me=g.colorSpace===kn?null:ze.getPrimaries(g.colorSpace),ae=g.colorSpace===kn||Y===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let $=p(g.image,!1,r.maxTextureSize);$=ce(g,$);const pe=s.convert(g.format,g.colorSpace),_e=s.convert(g.type);let se=E(g.internalFormat,pe,_e,g.normalized,g.colorSpace,g.isVideoTexture);Le(K,g);let ne;const Re=g.mipmaps,Ue=g.isVideoTexture!==!0,qe=oe.__version===void 0||J===!0,I=te.dataReady,ie=T(g,$);if(g.isDepthTexture)se=C(g.format===ni,g.type),qe&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,se,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,se,$.width,$.height,0,pe,_e,null));else if(g.isDataTexture)if(Re.length>0){Ue&&qe&&t.texStorage2D(i.TEXTURE_2D,ie,se,Re[0].width,Re[0].height);for(let Y=0,me=Re.length;Y<me;Y++)ne=Re[Y],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ne.width,ne.height,pe,_e,ne.data):t.texImage2D(i.TEXTURE_2D,Y,se,ne.width,ne.height,0,pe,_e,ne.data);g.generateMipmaps=!1}else Ue?(qe&&t.texStorage2D(i.TEXTURE_2D,ie,se,$.width,$.height),I&&re(g,$,pe,_e)):t.texImage2D(i.TEXTURE_2D,0,se,$.width,$.height,0,pe,_e,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,se,Re[0].width,Re[0].height,$.depth);for(let Y=0,me=Re.length;Y<me;Y++)if(ne=Re[Y],g.format!==Qt)if(pe!==null)if(Ue){if(I)if(g.layerUpdates.size>0){const ae=zc(ne.width,ne.height,g.format,g.type);for(const j of g.layerUpdates){const Se=ne.data.subarray(j*ae/ne.data.BYTES_PER_ELEMENT,(j+1)*ae/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,j,ne.width,ne.height,1,pe,Se)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ne.width,ne.height,$.depth,pe,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,se,ne.width,ne.height,$.depth,0,ne.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ne.width,ne.height,$.depth,pe,_e,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,se,ne.width,ne.height,$.depth,0,pe,_e,ne.data)}else{Ue&&qe&&t.texStorage2D(i.TEXTURE_2D,ie,se,Re[0].width,Re[0].height);for(let Y=0,me=Re.length;Y<me;Y++)ne=Re[Y],g.format!==Qt?pe!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,se,ne.width,ne.height,0,ne.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ne.width,ne.height,pe,_e,ne.data):t.texImage2D(i.TEXTURE_2D,Y,se,ne.width,ne.height,0,pe,_e,ne.data)}else if(g.isDataArrayTexture)if(Ue){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,se,$.width,$.height,$.depth),I)if(g.layerUpdates.size>0){const Y=zc($.width,$.height,g.format,g.type);for(const me of g.layerUpdates){const ae=$.data.subarray(me*Y/$.data.BYTES_PER_ELEMENT,(me+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,$.width,$.height,1,pe,_e,ae)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,pe,_e,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,$.width,$.height,$.depth,0,pe,_e,$.data);else if(g.isData3DTexture)Ue?(qe&&t.texStorage3D(i.TEXTURE_3D,ie,se,$.width,$.height,$.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,pe,_e,$.data)):t.texImage3D(i.TEXTURE_3D,0,se,$.width,$.height,$.depth,0,pe,_e,$.data);else if(g.isFramebufferTexture){if(qe)if(Ue)t.texStorage2D(i.TEXTURE_2D,ie,se,$.width,$.height);else{let Y=$.width,me=$.height;for(let ae=0;ae<ie;ae++)t.texImage2D(i.TEXTURE_2D,ae,se,Y,me,0,pe,_e,null),Y>>=1,me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),$.parentNode!==Y){Y.appendChild($),h.add(g),Y.onpaint=Ie=>{const ft=Ie.changedElements;for(const Je of h)ft.includes(Je.image)&&(Je.needsUpdate=!0)},Y.requestPaint();return}const me=0,ae=i.RGBA,j=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,me,ae,j,Se,$),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ue&&qe){const Y=ut(Re[0]);t.texStorage2D(i.TEXTURE_2D,ie,se,Y.width,Y.height)}for(let Y=0,me=Re.length;Y<me;Y++)ne=Re[Y],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe,_e,ne):t.texImage2D(i.TEXTURE_2D,Y,se,pe,_e,ne);g.generateMipmaps=!1}else if(Ue){if(qe){const Y=ut($);t.texStorage2D(i.TEXTURE_2D,ie,se,Y.width,Y.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,_e,$)}else t.texImage2D(i.TEXTURE_2D,0,se,pe,_e,$);f(g)&&M(K),oe.__version=te.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ce(y,g,O){if(g.image.length!==6)return;const K=Z(y,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+O);const te=n.get(J);if(J.version!==te.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const oe=ze.getPrimaries(ze.workingColorSpace),W=g.colorSpace===kn?null:ze.getPrimaries(g.colorSpace),$=g.colorSpace===kn||oe===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,_e=g.image[0]&&g.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!pe&&!_e?se[j]=p(g.image[j],!0,r.maxCubemapSize):se[j]=_e?g.image[j].image:g.image[j],se[j]=ce(g,se[j]);const ne=se[0],Re=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type),qe=E(g.internalFormat,Re,Ue,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,ie=te.__version===void 0||K===!0,Y=J.dataReady;let me=T(g,ne);Le(i.TEXTURE_CUBE_MAP,g);let ae;if(pe){I&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,ne.width,ne.height);for(let j=0;j<6;j++){ae=se[j].mipmaps;for(let Se=0;Se<ae.length;Se++){const Ie=ae[Se];g.format!==Qt?Re!==null?I?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Ie.width,Ie.height,Re,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,qe,Ie.width,Ie.height,0,Ie.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Ie.width,Ie.height,Re,Ue,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,qe,Ie.width,Ie.height,0,Re,Ue,Ie.data)}}}else{if(ae=g.mipmaps,I&&ie){ae.length>0&&me++;const j=ut(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,j.width,j.height)}for(let j=0;j<6;j++)if(_e){I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,Re,Ue,se[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,se[j].width,se[j].height,0,Re,Ue,se[j].data);for(let Se=0;Se<ae.length;Se++){const ft=ae[Se].image[j].image;I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,ft.width,ft.height,Re,Ue,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,qe,ft.width,ft.height,0,Re,Ue,ft.data)}}else{I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re,Ue,se[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Re,Ue,se[j]);for(let Se=0;Se<ae.length;Se++){const Ie=ae[Se];I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Re,Ue,Ie.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,qe,Re,Ue,Ie.image[j])}}}f(g)&&M(i.TEXTURE_CUBE_MAP),te.__version=J.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ae(y,g,O,K,J,te){const oe=s.convert(O.format,O.colorSpace),W=s.convert(O.type),$=E(O.internalFormat,oe,W,O.normalized,O.colorSpace),pe=n.get(g),_e=n.get(O);if(_e.__renderTarget=g,!pe.__hasExternalTextures){const se=Math.max(1,g.width>>te),ne=Math.max(1,g.height>>te);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,te,$,se,ne,g.depth,0,oe,W,null):t.texImage2D(J,te,$,se,ne,0,oe,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,_e.__webglTexture,0,xt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,_e.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(y,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const K=g.depthTexture,J=K&&K.isDepthTexture?K.type:null,te=C(g.stencilBuffer,J),oe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(g),te,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,y)}else{const K=g.textures;for(let J=0;J<K.length;J++){const te=K[J],oe=s.convert(te.format,te.colorSpace),W=s.convert(te.type),$=E(te.internalFormat,oe,W,te.normalized,te.colorSpace);He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(g),$,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(g),$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(y,g,O){const K=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Le(i.TEXTURE_CUBE_MAP,g.depthTexture);const pe=s.convert(g.depthTexture.format),_e=s.convert(g.depthTexture.type);let se;g.depthTexture.format===Cn?se=i.DEPTH_COMPONENT24:g.depthTexture.format===ni&&(se=i.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,g.width,g.height,0,pe,_e,null)}}else Q(g.depthTexture,0);const te=J.__webglTexture,oe=xt(g),W=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,$=g.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Cn)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,te,0);else if(g.depthTexture.format===ni)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,te,0);else throw new Error("Unknown depthTexture format")}function je(y){const g=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=K}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)ke(g.__webglFramebuffer[K],y,K);else{const K=y.texture.mipmaps;K&&K.length>0?ke(g.__webglFramebuffer[0],y,0):ke(g.__webglFramebuffer,y,0)}else if(O){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=i.createRenderbuffer(),ot(g.__webglDepthbuffer[K],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}}else{const K=y.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ot(g.__webglDepthbuffer,y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(y,g,O){const K=n.get(y);g!==void 0&&Ae(K.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&je(y)}function Be(y){const g=y.texture,O=n.get(y),K=n.get(g);y.addEventListener("dispose",_);const J=y.textures,te=y.isWebGLCubeRenderTarget===!0,oe=J.length>1;if(oe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=g.version,a.memory.textures++),te){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let $=0;$<g.mipmaps.length;$++)O.__webglFramebuffer[W][$]=i.createFramebuffer()}else O.__webglFramebuffer[W]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)O.__webglFramebuffer[W]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(oe)for(let W=0,$=J.length;W<$;W++){const pe=n.get(J[W]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&He(y)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<J.length;W++){const $=J[W];O.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const pe=s.convert($.format,$.colorSpace),_e=s.convert($.type),se=E($.internalFormat,pe,_e,$.normalized,$.colorSpace,y.isXRRenderTarget===!0),ne=xt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,se,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,O.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Le(i.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ae(O.__webglFramebuffer[W][$],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,$);else Ae(O.__webglFramebuffer[W],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let W=0,$=J.length;W<$;W++){const pe=J[W],_e=n.get(pe);let se=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(se=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,_e.__webglTexture),Le(se,pe),Ae(O.__webglFramebuffer,y,pe,i.COLOR_ATTACHMENT0+W,se,0),f(pe)&&M(se)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(W=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,K.__webglTexture),Le(W,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ae(O.__webglFramebuffer[$],y,g,i.COLOR_ATTACHMENT0,W,$);else Ae(O.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,W,0);f(g)&&M(W),t.unbindTexture()}y.depthBuffer&&je(y)}function _t(y){const g=y.textures;for(let O=0,K=g.length;O<K;O++){const J=g[O];if(f(J)){const te=b(y),oe=n.get(J).__webglTexture;t.bindTexture(te,oe),M(te),t.unbindTexture()}}}const ct=[],Ft=[];function D(y){if(y.samples>0){if(He(y)===!1){const g=y.textures,O=y.width,K=y.height;let J=i.COLOR_BUFFER_BIT;const te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(y),W=g.length>1;if(W)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const $=y.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const _e=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,J,i.NEAREST),l===!0&&(ct.length=0,Ft.length=0,ct.push(i.COLOR_ATTACHMENT0+pe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ct.push(te),Ft.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const _e=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function xt(y){return Math.min(r.maxSamples,y.samples)}function He(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function it(y){const g=a.render.frame;d.get(y)!==g&&(d.set(y,g),y.update())}function ce(y,g){const O=y.colorSpace,K=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==ns&&O!==kn&&(ze.getTransfer(O)===$e?(K!==Qt||J!==Ht)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",O)),g}function ut(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.getTextureUnits=X,this.setTextureUnits=L,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=ve,this.rebindTextures=at,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ux(i,e){function t(n,r=kn){let s;const a=ze.getTransfer(r);if(n===Ht)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===Jt)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===bu)return i.RGB;if(n===Qt)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===So)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Gr||n===zr||n===Vr||n===Wr)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===wa||n===Ra||n===Ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Ia||n===Da||n===La||n===Ua||n===es||n===Na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pa||n===Ia)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Da)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return s.COMPRESSED_R11_EAC;if(n===Ua)return s.COMPRESSED_SIGNED_R11_EAC;if(n===es)return s.COMPRESSED_RG11_EAC;if(n===Na)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===ka||n===Ha||n===Ga||n===za||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===Ka||n===$a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===ja||n===Ja)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===eo||n===ts||n===to)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Nx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",p=new Ox,f={},M=t.getContextAttributes();let b=null,E=null;const C=[],T=[],R=new Ge;let _=null;const A=new Wt;A.viewport=new ht;const P=new Wt;P.viewport=new ht;const w=[A,P],U=new qp;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=C[Z];return fe===void 0&&(fe=new Is,C[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=C[Z];return fe===void 0&&(fe=new Is,C[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=C[Z];return fe===void 0&&(fe=new Is,C[Z]=fe),fe.getHandSpace()};function L(Z){const fe=T.indexOf(Z.inputSource);if(fe===-1)return;const re=C[fe];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let Z=0;Z<C.length;Z++){const fe=T[Z];fe!==null&&(T[Z]=null,C[Z].disconnect(fe))}V=null,X=null,p.reset();for(const Z in f)delete f[Z];e.setRenderTarget(b),m=null,u=null,h=null,r=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Te=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?ni:Cn,Te=M.stencil?sr:fn);const Ae={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new dn(u.textureWidth,u.textureHeight,{format:Qt,type:Ht,depthTexture:new Li(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new dn(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(Z){for(let fe=0;fe<Z.removed.length;fe++){const re=Z.removed[fe],Te=T.indexOf(re);Te>=0&&(T[Te]=null,C[Te].disconnect(re))}for(let fe=0;fe<Z.added.length;fe++){const re=Z.added[fe];let Te=T.indexOf(re);if(Te===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=T.length){T.push(re),Te=Ae;break}else if(T[Ae]===null){T[Ae]=re,Te=Ae;break}if(Te===-1)break}const Ce=C[Te];Ce&&Ce.connect(re)}}const Q=new F,ee=new F;function ue(Z,fe,re){Q.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Te=Q.distanceTo(ee),Ce=fe.projectionMatrix.elements,Ae=re.projectionMatrix.elements,ot=Ce[14]/(Ce[10]-1),ke=Ce[14]/(Ce[10]+1),je=(Ce[9]+1)/Ce[5],at=(Ce[9]-1)/Ce[5],Be=(Ce[8]-1)/Ce[0],_t=(Ae[8]+1)/Ae[0],ct=ot*Be,Ft=ot*_t,D=Te/(-Be+_t),xt=D*-Be;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(D),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const He=ot+D,it=ke+D,ce=ct-xt,ut=Ft+(Te-xt),y=je*ke/it*He,g=at*ke/it*He;Z.projectionMatrix.makePerspective(ce,ut,y,g,He,it),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let fe=Z.near,re=Z.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(re=p.depthFar)),U.near=P.near=A.near=fe,U.far=P.far=A.far=re,(V!==U.near||X!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,X=U.far),U.layers.mask=Z.layers.mask|6,A.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Te=Z.parent,Ce=U.cameras;ve(U,Te);for(let Ae=0;Ae<Ce.length;Ae++)ve(Ce[Ae],Te);Ce.length===2?ue(U,A,P):U.projectionMatrix.copy(A.projectionMatrix),Ee(Z,U,Te)};function Ee(Z,fe,re){re===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ro*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(Z){return f[Z]};let Xe=null;function Ze(Z,fe){if(d=fe.getViewerPose(c||a),x=fe,d!==null){const re=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Te=!1;re.length!==U.cameras.length&&(U.cameras.length=0,Te=!0);for(let ke=0;ke<re.length;ke++){const je=re[ke];let at=null;if(m!==null)at=m.getViewport(je);else{const _t=h.getViewSubImage(u,je);at=_t.viewport,ke===0&&(e.setRenderTargetTextures(E,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(E))}let Be=w[ke];Be===void 0&&(Be=new Wt,Be.layers.enable(ke),Be.viewport=new ht,w[ke]=Be),Be.matrix.fromArray(je.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(je.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(at.x,at.y,at.width,at.height),ke===0&&(U.matrix.copy(Be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Te===!0&&U.cameras.push(Be)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=n.getBinding();const ke=h.getDepthInformation(re[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,r.renderState)}if(Ce&&Ce.includes("camera-access")&&S){e.state.unbindTexture(),h=n.getBinding();for(let ke=0;ke<re.length;ke++){const je=re[ke].camera;if(je){let at=f[je];at||(at=new Lu,f[je]=at);const Be=h.getCameraImage(je);at.sourceTexture=Be}}}}for(let re=0;re<C.length;re++){const Te=T[re],Ce=C[re];Te!==null&&Ce!==void 0&&Ce.update(Te,fe,c||a)}Xe&&Xe(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}const Le=new Ou;Le.setAnimationLoop(Ze),this.setAnimationLoop=function(Z){Xe=Z},this.dispose=function(){}}}const kx=new nt,Wu=new Pe;Wu.set(-1,0,0,0,1,0,0,0,1);function Hx(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Uu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,M,b,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),S(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,M,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Nt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Nt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,E=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Wu),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,M,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gx(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const E=b.program;n.uniformBlockBinding(M,E)}function c(M,b){let E=r[M.id];E===void 0&&(x(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",p));const C=b.program;n.updateUBOMapping(M,C);const T=e.render.frame;s[M.id]!==T&&(u(M),s[M.id]=T)}function d(M){const b=h();M.__bindingPointIndex=b;const E=i.createBuffer(),C=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=r[M.id],E=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=E.length;T<R;T++){const _=Array.isArray(E[T])?E[T]:[E[T]];for(let A=0,P=_.length;A<P;A++){const w=_[A];if(m(w,T,A,C)===!0){const U=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let L=0;L<V.length;L++){const z=V[L],H=S(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,U+X,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):ArrayBuffer.isView(z)?w.__data.set(new z.constructor(z.buffer,z.byteOffset,w.__data.length)):(z.toArray(w.__data,X),X+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,b,E,C){const T=M.value,R=b+"_"+E;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:ArrayBuffer.isView(T)?C[R]=T.slice():C[R]=T.clone(),!0;{const _=C[R];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return C[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function x(M){const b=M.uniforms;let E=0;const C=16;for(let R=0,_=b.length;R<_;R++){const A=Array.isArray(b[R])?b[R]:[b[R]];for(let P=0,w=A.length;P<w;P++){const U=A[P],V=Array.isArray(U.value)?U.value:[U.value];for(let X=0,L=V.length;X<L;X++){const z=V[X],H=S(z),Q=E%C,ee=Q%H.boundary,ue=Q+ee;E+=ee,ue!==0&&C-ue<H.storage&&(E+=C-ue),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=H.storage}}}const T=E%C;return T>0&&(E+=C-T),M.__size=E,M.__cache={},this}function S(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):we("WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){const b=M.target;b.removeEventListener("dispose",p);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function Vx(){return an===null&&(an=new Pu(zx,16,16,ri,Rn),an.name="DFG_LUT",an.minFilter=Pt,an.magFilter=Pt,an.wrapS=bn,an.wrapT=bn,an.generateMipmaps=!1,an.needsUpdate=!0),an}class Wx{constructor(e={}){const{canvas:t=sp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ht}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const S=m,p=new Set([yo,So,Mo]),f=new Set([Ht,fn,rr,sr,_o,xo]),M=new Uint32Array(4),b=new Int32Array(4),E=new F;let C=null,T=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let w=!1,U=null;this._outputColorSpace=Vt;let V=0,X=0,L=null,z=-1,H=null;const Q=new ht,ee=new ht;let ue=null;const ve=new Ke(0);let Ee=0,Xe=t.width,Ze=t.height,Le=1,Z=null,fe=null;const re=new ht(0,0,Xe,Ze),Te=new ht(0,0,Xe,Ze);let Ce=!1;const Ae=new Co;let ot=!1,ke=!1;const je=new nt,at=new F,Be=new ht,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ft(){return L===null?Le:1}let D=n;function xt(v,N){return t.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),D===null){const N="webgl2";if(D=xt(N,v),D===null)throw xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw We("WebGLRenderer: "+v.message),v}let He,it,ce,ut,y,g,O,K,J,te,oe,W,$,pe,_e,se,ne,Re,Ue,qe,I,ie,Y;function me(){He=new V_(D),He.init(),I=new Ux(D,He),it=new N_(D,He,e,I),ce=new Dx(D,He),it.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),ut=new Y_(D),y=new xx,g=new Lx(D,He,ce,y,it,I,ut),O=new z_(P),K=new Zp(D),ie=new L_(D,K),J=new W_(D,K,ut,ie),te=new K_(D,J,K,ie,ut),Re=new q_(D,it,g),_e=new F_(y),oe=new _x(P,O,He,it,ie,_e),W=new Hx(P,y),$=new Mx,pe=new Ax(He),ne=new D_(P,O,ce,te,x,l),se=new Ix(P,te,it),Y=new Gx(D,ut,it,ce),Ue=new U_(D,He,ut),qe=new X_(D,He,ut),ut.programs=oe.programs,P.capabilities=it,P.extensions=He,P.properties=y,P.renderLists=$,P.shadowMap=se,P.state=ce,P.info=ut}me(),S!==Ht&&(A=new Z_(S,t.width,t.height,r,s));const ae=new Bx(P,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(v){v!==void 0&&(Le=v,this.setSize(Xe,Ze,!1))},this.getSize=function(v){return v.set(Xe,Ze)},this.setSize=function(v,N,G=!0){if(ae.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=v,Ze=N,t.width=Math.floor(v*Le),t.height=Math.floor(N*Le),G===!0&&(t.style.width=v+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Xe*Le,Ze*Le).floor()},this.setDrawingBufferSize=function(v,N,G){Xe=v,Ze=N,Le=G,t.width=Math.floor(v*G),t.height=Math.floor(N*G),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(S===Ht){We("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){we("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(re)},this.setViewport=function(v,N,G,B){v.isVector4?re.set(v.x,v.y,v.z,v.w):re.set(v,N,G,B),ce.viewport(Q.copy(re).multiplyScalar(Le).round())},this.getScissor=function(v){return v.copy(Te)},this.setScissor=function(v,N,G,B){v.isVector4?Te.set(v.x,v.y,v.z,v.w):Te.set(v,N,G,B),ce.scissor(ee.copy(Te).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(v){ce.setScissorTest(Ce=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,G=!0){let B=0;if(v){let k=!1;if(L!==null){const he=L.texture.format;k=p.has(he)}if(k){const he=L.texture.type,xe=f.has(he),de=ne.getClearColor(),Me=ne.getClearAlpha(),ye=de.r,De=de.g,Oe=de.b;xe?(M[0]=ye,M[1]=De,M[2]=Oe,M[3]=Me,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=ye,b[1]=De,b[2]=Oe,b[3]=Me,D.clearBufferiv(D.COLOR,0,b))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ne.dispose(),$.dispose(),pe.dispose(),y.dispose(),O.dispose(),te.dispose(),ie.dispose(),Y.dispose(),oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ho),ae.removeEventListener("sessionend",Go),Yn.stop()};function j(v){v.preventDefault(),pc("WebGLRenderer: Context Lost."),w=!0}function Se(){pc("WebGLRenderer: Context Restored."),w=!1;const v=ut.autoReset,N=se.enabled,G=se.autoUpdate,B=se.needsUpdate,k=se.type;me(),ut.autoReset=v,se.enabled=N,se.autoUpdate=G,se.needsUpdate=B,se.type=k}function Ie(v){We("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ft(v){const N=v.target;N.removeEventListener("dispose",ft),Je(N)}function Je(v){gn(v),y.remove(v)}function gn(v){const N=y.get(v).programs;N!==void 0&&(N.forEach(function(G){oe.releaseProgram(G)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,G,B,k,he){N===null&&(N=_t);const xe=k.isMesh&&k.matrixWorld.determinant()<0,de=id(v,N,G,B,k);ce.setMaterial(B,xe);let Me=G.index,ye=1;if(B.wireframe===!0){if(Me=J.getWireframeAttribute(G),Me===void 0)return;ye=2}const De=G.drawRange,Oe=G.attributes.position;let be=De.start*ye,Qe=(De.start+De.count)*ye;he!==null&&(be=Math.max(be,he.start*ye),Qe=Math.min(Qe,(he.start+he.count)*ye)),Me!==null?(be=Math.max(be,0),Qe=Math.min(Qe,Me.count)):Oe!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,Oe.count));const pt=Qe-be;if(pt<0||pt===1/0)return;ie.setup(k,B,de,G,Me);let dt,et=Ue;if(Me!==null&&(dt=K.get(Me),et=qe,et.setIndex(dt)),k.isMesh)B.wireframe===!0?(ce.setLineWidth(B.wireframeLinewidth*Ft()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(k.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),ce.setLineWidth(wt*Ft()),k.isLineSegments?et.setMode(D.LINES):k.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else k.isPoints?et.setMode(D.POINTS):k.isSprite&&et.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(He.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const wt=k._multiDrawStarts,ge=k._multiDrawCounts,Ot=k._multiDrawCount,Ye=Me?K.get(Me).bytesPerElement:1,Gt=y.get(B).currentProgram.getUniforms();for(let rn=0;rn<Ot;rn++)Gt.setValue(D,"_gl_DrawID",rn),et.render(wt[rn]/Ye,ge[rn])}else if(k.isInstancedMesh)et.renderInstances(be,pt,k.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,wt);et.renderInstances(be,pt,ge)}else et.render(be,pt)};function nn(v,N,G){v.transparent===!0&&v.side===En&&v.forceSinglePass===!1?(v.side=Nt,v.needsUpdate=!0,dr(v,N,G),v.side=Vn,v.needsUpdate=!0,dr(v,N,G),v.side=En):dr(v,N,G)}this.compile=function(v,N,G=null){G===null&&(G=v),T=pe.get(G),T.init(N),_.push(T),G.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),v!==G&&v.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const de=he[xe];nn(de,G,k),B.add(de)}else nn(he,G,k),B.add(he)}),T=_.pop(),B},this.compileAsync=function(v,N,G=null){const B=this.compile(v,N,G);return new Promise(k=>{function he(){if(B.forEach(function(xe){y.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){k(v);return}setTimeout(he,10)}He.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let _s=null;function td(v){_s&&_s(v)}function Ho(){Yn.stop()}function Go(){Yn.start()}const Yn=new Ou;Yn.setAnimationLoop(td),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(v){_s=v,ae.setAnimationLoop(v),v===null?Yn.stop():Yn.start()},ae.addEventListener("sessionstart",Ho),ae.addEventListener("sessionend",Go),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;U!==null&&U.renderStart(v,N);const G=ae.enabled===!0&&ae.isPresenting===!0,B=A!==null&&(L===null||G)&&A.begin(P,L);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,L),T=pe.get(v,_.length),T.init(N),T.state.textureUnits=g.getTextureUnits(),_.push(T),je.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ae.setFromProjectionMatrix(je,ln,N.reversedDepth),ke=this.localClippingEnabled,ot=_e.init(this.clippingPlanes,ke),C=$.get(v,R.length),C.init(),R.push(C),ae.enabled===!0&&ae.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&xs(xe,N,-1/0,P.sortObjects)}xs(v,N,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(Z,fe),ct=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ct&&ne.addToRenderList(C,v),this.info.render.frame++,ot===!0&&_e.beginShadows();const k=T.state.shadowsArray;if(se.render(k,v,N),ot===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&A.hasRenderPass())===!1){const xe=C.opaque,de=C.transmissive;if(T.setupLights(),N.isArrayCamera){const Me=N.cameras;if(de.length>0)for(let ye=0,De=Me.length;ye<De;ye++){const Oe=Me[ye];Vo(xe,de,v,Oe)}ct&&ne.render(v);for(let ye=0,De=Me.length;ye<De;ye++){const Oe=Me[ye];zo(C,v,Oe,Oe.viewport)}}else de.length>0&&Vo(xe,de,v,N),ct&&ne.render(v),zo(C,v,N)}L!==null&&X===0&&(g.updateMultisampleRenderTarget(L),g.updateRenderTargetMipmap(L)),B&&A.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),ie.resetDefaultState(),z=-1,H=null,_.pop(),_.length>0?(T=_[_.length-1],g.setTextureUnits(T.state.textureUnits),ot===!0&&_e.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,U!==null&&U.renderEnd()};function xs(v,N,G,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ae.intersectsSprite(v)){B&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(je);const xe=te.update(v),de=v.material;de.visible&&C.push(v,xe,de,G,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ae.intersectsObject(v))){const xe=te.update(v),de=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(je)),Array.isArray(de)){const Me=xe.groups;for(let ye=0,De=Me.length;ye<De;ye++){const Oe=Me[ye],be=de[Oe.materialIndex];be&&be.visible&&C.push(v,xe,be,G,Be.z,Oe)}}else de.visible&&C.push(v,xe,de,G,Be.z,null)}}const he=v.children;for(let xe=0,de=he.length;xe<de;xe++)xs(he[xe],N,G,B)}function zo(v,N,G,B){const{opaque:k,transmissive:he,transparent:xe}=v;T.setupLightsView(G),ot===!0&&_e.setGlobalState(P.clippingPlanes,G),B&&ce.viewport(Q.copy(B)),k.length>0&&ur(k,N,G),he.length>0&&ur(he,N,G),xe.length>0&&ur(xe,N,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Vo(v,N,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const be=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new dn(1,1,{generateMipmaps:!0,type:be?Rn:Ht,minFilter:ti,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const he=T.state.transmissionRenderTarget[B.id],xe=B.viewport||Q;he.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const de=P.getRenderTarget(),Me=P.getActiveCubeFace(),ye=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(ve),Ee=P.getClearAlpha(),Ee<1&&P.setClearColor(16777215,.5),P.clear(),ct&&ne.render(G);const De=P.toneMapping;P.toneMapping=un;const Oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),ot===!0&&_e.setGlobalState(P.clippingPlanes,B),ur(v,G,B),g.updateMultisampleRenderTarget(he),g.updateRenderTargetMipmap(he),He.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,pt=N.length;Qe<pt;Qe++){const dt=N[Qe],{object:et,geometry:wt,material:ge,group:Ot}=dt;if(ge.side===En&&et.layers.test(B.layers)){const Ye=ge.side;ge.side=Nt,ge.needsUpdate=!0,Wo(et,G,B,wt,ge,Ot),ge.side=Ye,ge.needsUpdate=!0,be=!0}}be===!0&&(g.updateMultisampleRenderTarget(he),g.updateRenderTargetMipmap(he))}P.setRenderTarget(de,Me,ye),P.setClearColor(ve,Ee),Oe!==void 0&&(B.viewport=Oe),P.toneMapping=De}function ur(v,N,G){const B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,he=v.length;k<he;k++){const xe=v[k],{object:de,geometry:Me,group:ye}=xe;let De=xe.material;De.allowOverride===!0&&B!==null&&(De=B),de.layers.test(G.layers)&&Wo(de,N,G,Me,De,ye)}}function Wo(v,N,G,B,k,he){v.onBeforeRender(P,N,G,B,k,he),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,N,G,B,v,he),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=Nt,k.needsUpdate=!0,P.renderBufferDirect(G,N,B,k,v,he),k.side=Vn,k.needsUpdate=!0,P.renderBufferDirect(G,N,B,k,v,he),k.side=En):P.renderBufferDirect(G,N,B,k,v,he),v.onAfterRender(P,N,G,B,k,he)}function dr(v,N,G){N.isScene!==!0&&(N=_t);const B=y.get(v),k=T.state.lights,he=T.state.shadowsArray,xe=k.state.version,de=oe.getParameters(v,k.state,he,N,G,T.state.lightProbeGridArray),Me=oe.getProgramCacheKey(de);let ye=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=O.get(v.envMap||B.environment,De),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,ye===void 0&&(v.addEventListener("dispose",ft),ye=new Map,B.programs=ye);let Oe=ye.get(Me);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===xe)return Yo(v,de),Oe}else de.uniforms=oe.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,G,de),v.onBeforeCompile(de,P),Oe=oe.acquireProgram(de,Me),ye.set(Me,Oe),B.uniforms=de.uniforms;const be=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=_e.uniform),Yo(v,de),B.needsLights=sd(v),B.lightsStateVersion=xe,B.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Oe,B.uniformsList=null,Oe}function Xo(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=Xr.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Yo(v,N){const G=y.get(v);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function nd(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;E.setFromMatrixPosition(N.matrixWorld);for(let G=0,B=v.length;G<B;G++){const k=v[G];if(k.texture!==null&&k.boundingBox.containsPoint(E))return k}return null}function id(v,N,G,B,k){N.isScene!==!0&&(N=_t),g.resetTextureUnits();const he=N.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,de=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ze.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ye=O.get(B.envMap||xe,Me),De=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,pt=!!G.morphAttributes.color;let dt=un;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(dt=P.toneMapping);const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=et!==void 0?et.length:0,ge=y.get(B),Ot=T.state.lights;if(ot===!0&&(ke===!0||v!==H)){const rt=v===H&&B.id===z;_e.setState(B,v,rt)}let Ye=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ot.state.version||ge.outputColorSpace!==de||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==ye||B.fog===!0&&ge.fog!==he||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==De||ge.vertexTangents!==Oe||ge.morphTargets!==be||ge.morphNormals!==Qe||ge.morphColors!==pt||ge.toneMapping!==dt||ge.morphTargetsCount!==wt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,ge.__version=B.version);let Gt=ge.currentProgram;Ye===!0&&(Gt=dr(B,N,k),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Gt,ge));let rn=!1,Pn=!1,ci=!1;const tt=Gt.getUniforms(),mt=ge.uniforms;if(ce.useProgram(Gt.program)&&(rn=!0,Pn=!0,ci=!0),B.id!==z&&(z=B.id,Pn=!0),ge.needsLights){const rt=nd(T.state.lightProbeGridArray,k);ge.lightProbeGrid!==rt&&(ge.lightProbeGrid=rt,Pn=!0)}if(rn||H!==v){ce.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),tt.setValue(D,"projectionMatrix",v.projectionMatrix),tt.setValue(D,"viewMatrix",v.matrixWorldInverse);const Dn=tt.map.cameraPosition;Dn!==void 0&&Dn.setValue(D,at.setFromMatrixPosition(v.matrixWorld)),it.logarithmicDepthBuffer&&tt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),H!==v&&(H=v,Pn=!0,ci=!0)}if(ge.needsLights&&(Ot.state.directionalShadowMap.length>0&&tt.setValue(D,"directionalShadowMap",Ot.state.directionalShadowMap,g),Ot.state.spotShadowMap.length>0&&tt.setValue(D,"spotShadowMap",Ot.state.spotShadowMap,g),Ot.state.pointShadowMap.length>0&&tt.setValue(D,"pointShadowMap",Ot.state.pointShadowMap,g)),k.isSkinnedMesh){tt.setOptional(D,k,"bindMatrix"),tt.setOptional(D,k,"bindMatrixInverse");const rt=k.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),tt.setValue(D,"boneTexture",rt.boneTexture,g))}k.isBatchedMesh&&(tt.setOptional(D,k,"batchingTexture"),tt.setValue(D,"batchingTexture",k._matricesTexture,g),tt.setOptional(D,k,"batchingIdTexture"),tt.setValue(D,"batchingIdTexture",k._indirectTexture,g),tt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&tt.setValue(D,"batchingColorTexture",k._colorsTexture,g));const In=G.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Re.update(k,G,Gt),(Pn||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,tt.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(mt.envMapIntensity.value=N.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=Vx()),Pn){if(tt.setValue(D,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&rd(mt,ci),he&&B.fog===!0&&W.refreshFogUniforms(mt,he),W.refreshMaterialUniforms(mt,B,Le,Ze,T.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){const rt=ge.lightProbeGrid;mt.probesSH.value=rt.texture,mt.probesMin.value.copy(rt.boundingBox.min),mt.probesMax.value.copy(rt.boundingBox.max),mt.probesResolution.value.copy(rt.resolution)}Xr.upload(D,Xo(ge),mt,g)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xr.upload(D,Xo(ge),mt,g),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tt.setValue(D,"center",k.center),tt.setValue(D,"modelViewMatrix",k.modelViewMatrix),tt.setValue(D,"normalMatrix",k.normalMatrix),tt.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const rt=B.uniformsGroups;for(let Dn=0,li=rt.length;Dn<li;Dn++){const qo=rt[Dn];Y.update(qo,Gt),Y.bind(qo,Gt)}}return Gt}function rd(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function sd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,N,G){const B=y.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),y.get(v.texture).__webglTexture=N,y.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const G=y.get(v);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const ad=D.createFramebuffer();this.setRenderTarget=function(v,N=0,G=0){L=v,V=N,X=G;let B=null,k=!1,he=!1;if(v){const de=y.get(v);if(de.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),Q.copy(v.viewport),ee.copy(v.scissor),ue=v.scissorTest,ce.viewport(Q),ce.scissor(ee),ce.setScissorTest(ue),z=-1;return}else if(de.__webglFramebuffer===void 0)g.setupRenderTarget(v);else if(de.__hasExternalTextures)g.rebindTextures(v,y.get(v.texture).__webglTexture,y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(de.__boundDepthTexture!==De){if(De!==null&&y.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const ye=y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ye[N])?B=ye[N][G]:B=ye[N],k=!0):v.samples>0&&g.useMultisampledRTT(v)===!1?B=y.get(v).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[G]:B=ye,Q.copy(v.viewport),ee.copy(v.scissor),ue=v.scissorTest}else Q.copy(re).multiplyScalar(Le).floor(),ee.copy(Te).multiplyScalar(Le).floor(),ue=Ce;if(G!==0&&(B=ad),ce.bindFramebuffer(D.FRAMEBUFFER,B)&&ce.drawBuffers(v,B),ce.viewport(Q),ce.scissor(ee),ce.setScissorTest(ue),k){const de=y.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,G)}else if(he){const de=N;for(let Me=0;Me<v.textures.length;Me++){const ye=y.get(v.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,ye.__webglTexture,G,de)}}else if(v!==null&&G!==0){const de=y.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,G)}z=-1},this.readRenderTargetPixels=function(v,N,G,B,k,he,xe,de=0){if(!(v&&v.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){ce.bindFramebuffer(D.FRAMEBUFFER,Me);try{const ye=v.textures[de],De=ye.format,Oe=ye.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de),!it.textureFormatReadable(De)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Oe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-B&&G>=0&&G<=v.height-k&&D.readPixels(N,G,B,k,I.convert(De),I.convert(Oe),he)}finally{const ye=L!==null?y.get(L).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(v,N,G,B,k,he,xe,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(N>=0&&N<=v.width-B&&G>=0&&G<=v.height-k){ce.bindFramebuffer(D.FRAMEBUFFER,Me);const ye=v.textures[de],De=ye.format,Oe=ye.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de),!it.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(N,G,B,k,I.convert(De),I.convert(Oe),0);const Qe=L!==null?y.get(L).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,Qe);const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ap(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(be),D.deleteSync(pt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,G=0){const B=Math.pow(2,-G),k=Math.floor(v.image.width*B),he=Math.floor(v.image.height*B),xe=N!==null?N.x:0,de=N!==null?N.y:0;g.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,xe,de,k,he),ce.unbindTexture()};const od=D.createFramebuffer(),cd=D.createFramebuffer();this.copyTextureToTexture=function(v,N,G=null,B=null,k=0,he=0){let xe,de,Me,ye,De,Oe,be,Qe,pt;const dt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(G!==null)xe=G.max.x-G.min.x,de=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,ye=G.min.x,De=G.min.y,Oe=G.isBox3?G.min.z:0;else{const mt=Math.pow(2,-k);xe=Math.floor(dt.width*mt),de=Math.floor(dt.height*mt),v.isDataArrayTexture?Me=dt.depth:v.isData3DTexture?Me=Math.floor(dt.depth*mt):Me=1,ye=0,De=0,Oe=0}B!==null?(be=B.x,Qe=B.y,pt=B.z):(be=0,Qe=0,pt=0);const et=I.convert(N.format),wt=I.convert(N.type);let ge;N.isData3DTexture?(g.setTexture3D(N,0),ge=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(g.setTexture2DArray(N,0),ge=D.TEXTURE_2D_ARRAY):(g.setTexture2D(N,0),ge=D.TEXTURE_2D),ce.activeTexture(D.TEXTURE0),ce.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),ce.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ce.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ot=ce.getParameter(D.UNPACK_ROW_LENGTH),Ye=ce.getParameter(D.UNPACK_IMAGE_HEIGHT),Gt=ce.getParameter(D.UNPACK_SKIP_PIXELS),rn=ce.getParameter(D.UNPACK_SKIP_ROWS),Pn=ce.getParameter(D.UNPACK_SKIP_IMAGES);ce.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),ce.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),ce.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),ce.pixelStorei(D.UNPACK_SKIP_ROWS,De),ce.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const ci=v.isDataArrayTexture||v.isData3DTexture,tt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const mt=y.get(v),In=y.get(N),rt=y.get(mt.__renderTarget),Dn=y.get(In.__renderTarget);ce.bindFramebuffer(D.READ_FRAMEBUFFER,rt.__webglFramebuffer),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let li=0;li<Me;li++)ci&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(v).__webglTexture,k,Oe+li),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(N).__webglTexture,he,pt+li)),D.blitFramebuffer(ye,De,xe,de,be,Qe,xe,de,D.DEPTH_BUFFER_BIT,D.NEAREST);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||y.has(v)){const mt=y.get(v),In=y.get(N);ce.bindFramebuffer(D.READ_FRAMEBUFFER,od),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,cd);for(let rt=0;rt<Me;rt++)ci?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,k,Oe+rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,k),tt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,In.__webglTexture,he,pt+rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,In.__webglTexture,he),k!==0?D.blitFramebuffer(ye,De,xe,de,be,Qe,xe,de,D.COLOR_BUFFER_BIT,D.NEAREST):tt?D.copyTexSubImage3D(ge,he,be,Qe,pt+rt,ye,De,xe,de):D.copyTexSubImage2D(ge,he,be,Qe,ye,De,xe,de);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else tt?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(ge,he,be,Qe,pt,xe,de,Me,et,wt,dt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,he,be,Qe,pt,xe,de,Me,et,dt.data):D.texSubImage3D(ge,he,be,Qe,pt,xe,de,Me,et,wt,dt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,be,Qe,xe,de,et,wt,dt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,be,Qe,dt.width,dt.height,et,dt.data):D.texSubImage2D(D.TEXTURE_2D,he,be,Qe,xe,de,et,wt,dt);ce.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),ce.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),ce.pixelStorei(D.UNPACK_SKIP_PIXELS,Gt),ce.pixelStorei(D.UNPACK_SKIP_ROWS,rn),ce.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),he===0&&N.generateMipmaps&&D.generateMipmap(ge),ce.unbindTexture()},this.initRenderTarget=function(v){y.get(v).__webglFramebuffer===void 0&&g.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?g.setTextureCube(v,0):v.isData3DTexture?g.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?g.setTexture2DArray(v,0):g.setTexture2D(v,0),ce.unbindTexture()},this.resetState=function(){V=0,X=0,L=null,ce.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}const Xu=765,Yu=503,Ji=512,Qi=334;function Xx(i,e,t,n){const r=l=>{const c=i.getBoundingClientRect();return{x:(l.clientX-c.left)/c.width*Ji,y:(l.clientY-c.top)/c.height*Qi}},s=l=>{const{x:c,y:d}=r(l),h=n(c,d);e(h.x,h.y)},a=l=>{if(l.button!==0)return;l.preventDefault();const{x:c,y:d}=r(l),h=n(c,d);t(h.x,h.y)},o=()=>{e(NaN,NaN)};return i.addEventListener("pointermove",s),i.addEventListener("pointerdown",a),i.addEventListener("pointerleave",o),()=>{i.removeEventListener("pointermove",s),i.removeEventListener("pointerdown",a),i.removeEventListener("pointerleave",o)}}const $t={deepWater:2648208,shallow:3836072,reefExposed:4884640,reefSubmerged:3174544,sand:13217914,grass:5081660,coralSolid:6965848,tideZone:3442856};function qu(i){return Math.min(1,Math.max(0,i))}function na(i){const e=qu(i);return .5-.5*Math.cos(Math.PI*e)}function Yx(i){const e=i.rotationRadians,t=i.rideSide;return{x:-Math.sin(e)*t,y:Math.cos(e)*t}}function qx(i,e){const t=i.zoneRadius,n=Math.sin(e*Math.PI);return{liftY:t*.26+n*t*.05,pitch:n*.1,roll:i.rideSide*(.14+n*.06),yawOffset:Math.PI/2,offsetX:0,offsetY:0,riderLean:i.rideSide*n*.12}}function Kx(i,e){const t=i.zoneRadius,n=t*.9;let r=0;if(e<.26){const a=e/.26;r=na(a)*t*.58}else if(e<.5){const a=(e-.26)/.24;r=t*.58+na(a)*(n-t*.58)}else{const a=(e-.5)/.5;r=n-na(a)*(n-t*.1)}const s=e<.5?-.3*Math.sin(e*Math.PI*3.2):.12*Math.sin((e-.5)*Math.PI);return{liftY:r,pitch:s,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:s*.35}}function $x(i,e){const t=i.zoneRadius,n=Math.sin(e*Math.PI);return{liftY:-n*t*.1,pitch:n*.22,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:n*.08}}function Zx(i,e){const t=i.zoneRadius,n=Yx(i),r=t*.34,s=Math.sin(e*Math.PI);return{liftY:t*.14+s*t*.42,pitch:s*.2*i.rideSide,roll:-i.rideSide*(.38+s*.12),yawOffset:0,offsetX:n.x*r,offsetY:n.y*r,riderLean:-i.rideSide*s*.18}}function jx(i,e){const t=i.zoneRadius,n=Math.sin(e*Math.PI),r=e*Math.PI*1.1;return{liftY:n*t*.62,pitch:-n*.4-r*.65,roll:Math.sin(e*Math.PI*2.2)*.48,yawOffset:0,offsetX:0,offsetY:0,riderLean:Math.sin(e*Math.PI*2)*.15}}function Jx(i){const e=qu(i.progress);switch(i.type){case"rail":return qx(i,e);case"brain_coral":return Kx(i,e);case"tunnel":return $x(i,e);case"wall_ride":return Zx(i,e);case"jump":return jx(i,e);default:return{liftY:0,pitch:0,roll:0,yawOffset:0,offsetX:0,offsetY:0,riderLean:0}}}function en(i,e,t=0){return{x:i,y:t,z:e}}function Qx(i){return{x:i.x,y:i.z}}function co(i){return-cn(i)*Math.PI/180}function ev(i){return-i}const Lo=16764006,Ku=3829413,tv=13213798,nv=16041282,iv=2984558,rv=2758672,sv=12093514,av=15258698,ov=6044190,hl=16033721,fl=16777215,Yr=.12,cv=.22;function pl(i,e,t,n){const r=n?Jx(n):null,s=en(i+((r==null?void 0:r.offsetX)??0),e+((r==null?void 0:r.offsetY)??0));return{worldX:s.x,worldZ:s.z,boardY:Yr+((r==null?void 0:r.liftY)??0),rotationY:co(t)+((r==null?void 0:r.yawOffset)??0),pitch:(r==null?void 0:r.pitch)??0,roll:(r==null?void 0:r.roll)??0,riderLean:(r==null?void 0:r.riderLean)??0}}function ml(i,e,t){i.position.set(t.worldX,t.boardY,t.worldZ),i.rotation.set(t.pitch,t.rotationY,t.roll),e.position.set(t.worldX,t.boardY+cv,t.worldZ),e.rotation.set(t.riderLean,t.rotationY,t.roll*.35)}function ia(i=tv,e=nv){const t=new st,n=new Ne(new Tn(.45,.45,.08,24),new Tt({color:i,roughness:.8}));n.scale.set(1.6,1,.55);const r=new Ne(new Tn(.08,.08,.09,12),new Tt({color:e,roughness:.7}));return r.scale.set(1.2,1,.5),r.position.y=.02,t.add(n,r),t}function lv(){const i=new st,e=new Ne(new hn(.14,.28,4,8),new Tt({color:Ku,roughness:.85}));e.position.y=.28;const t=new Ne(new hn(.1,.08,4,8),new Tt({color:Lo,roughness:.85}));return t.position.y=.52,i.add(e,t),i}function uv(){const i=new st,e=new Ne(new hn(.14,.26,4,8),new Tt({color:iv,roughness:.85}));e.position.y=.27;const t=new Ne(new hn(.1,.08,4,8),new Tt({color:Lo,roughness:.85}));t.position.y=.51;const n=new Ne(new hn(.12,.14,4,8),new Tt({color:rv,roughness:.9}));return n.position.y=.66,i.add(e,t,n),i}function dv(){const i=new st,e=new Ne(new hn(.16,.3,4,8),new Tt({color:Ku,roughness:.85}));e.position.y=.3;const t=new Ne(new hn(.11,.1,4,8),new Tt({color:Lo,roughness:.85}));t.position.y=.56;const n=new Ne(new hn(.12,.04,4,8),new Tt({color:ov,roughness:.9}));return n.position.y=.68,i.add(e,t,n),i}class hv{constructor(){q(this,"root",new st);q(this,"ridingBoard",ia());q(this,"dockBoard",ia());q(this,"player",lv());q(this,"wake",new st);q(this,"demoSurferBoard",ia(sv,av));q(this,"demoSurfer",uv());q(this,"demoSurferWake",new st);q(this,"npcPool",[]);this.root.add(this.ridingBoard,this.dockBoard,this.player,this.wake,this.demoSurferBoard,this.demoSurfer,this.demoSurferWake);const e=new Ne(new Tn(.5,.5,.02,16),new Tt({color:hl,transparent:!0,opacity:.4}));e.scale.set(1.9,1,.8);const t=new Ne(new Tn(.42,.42,.02,16),new Tt({color:fl,transparent:!0,opacity:.35}));t.scale.set(1.6,1,.65),this.wake.add(e,t),this.wake.visible=!1;const n=new Ne(new Tn(.5,.5,.02,16),new Tt({color:hl,transparent:!0,opacity:.32}));n.scale.set(1.9,1,.8);const r=new Ne(new Tn(.42,.42,.02,16),new Tt({color:fl,transparent:!0,opacity:.28}));r.scale.set(1.6,1,.65),this.demoSurferWake.add(n,r),this.demoSurferWake.visible=!1,this.demoSurferBoard.visible=!1,this.demoSurfer.visible=!1}sync(e,t){const n=Xn(t,Math.floor(e.surfboard.position.x),Math.floor(e.surfboard.position.y)),r=e.surfboard.speedState==="seated"&&n==="sand",s=r?0:cn(e.surfboard.currentHeading)*Math.PI/180,a=pl(e.surfboard.position.x,e.surfboard.position.y,e.surfboard.currentHeading,e.trickAnimation),o=r?0:co(e.surfboard.currentHeading),l=a.boardY;if(this.ridingBoard.visible=e.boardMounted,this.dockBoard.visible=!e.boardMounted,this.player.visible=!0,this.syncNpcs(e),this.syncDemoSurfer(e),!e.boardMounted){const d=en(e.boardDockX,e.boardDockY),h=en(e.surfboard.position.x,e.surfboard.position.y);this.dockBoard.position.set(d.x,Yr,d.z),this.dockBoard.rotation.set(0,0,0),this.player.position.set(h.x,Yr,h.z),this.player.rotation.set(0,co(e.surfboard.currentHeading),0),this.ridingBoard.position.set(0,-100,0);return}ml(this.ridingBoard,this.player,a),this.dockBoard.position.set(0,-100,0);const c=e.surfboard.speedState==="riding"&&e.trickAnimation===null;if(this.wake.visible=c,c){const d=s+Math.PI;this.wake.position.set(a.worldX+Math.cos(d)*.85,l+.02,a.worldZ+Math.sin(d)*.85),this.wake.rotation.set(0,o,0)}}syncDemoSurfer(e){const t=e.demoSurfer;if(!t){this.demoSurferBoard.visible=!1,this.demoSurfer.visible=!1,this.demoSurferWake.visible=!1;return}const n=pl(t.surfboard.position.x,t.surfboard.position.y,t.surfboard.currentHeading,t.trickAnimation),r=cn(t.surfboard.currentHeading)*Math.PI/180;this.demoSurferBoard.visible=!0,this.demoSurfer.visible=!0,ml(this.demoSurferBoard,this.demoSurfer,n);const s=t.surfboard.speedState==="riding"&&t.trickAnimation===null;if(this.demoSurferWake.visible=s,s){const a=r+Math.PI;this.demoSurferWake.position.set(n.worldX+Math.cos(a)*.85,n.boardY+.02,n.worldZ+Math.sin(a)*.85),this.demoSurferWake.rotation.set(0,n.rotationY,0)}}syncNpcs(e){for(;this.npcPool.length<e.npcs.length;){const t=dv();this.npcPool.push(t),this.root.add(t)}for(let t=0;t<this.npcPool.length;t+=1){const n=this.npcPool[t];if(t>=e.npcs.length){n.visible=!1;continue}const r=e.npcs[t];n.visible=!0;const s=en(r.x,r.y);n.position.set(s.x,Yr,s.z)}}dispose(){this.root.traverse(e=>{e instanceof Ne&&(e.geometry.dispose(),e.material.dispose())})}}function $u(i,e,t,n){return i==="coral_rideable"?n!==null&&ds(e,t,n)?"reef_submerged":"reef_exposed":i}function lo(i){switch(i){case"deep_water":return $t.deepWater;case"shallow":return $t.shallow;case"reef_exposed":return $t.reefExposed;case"reef_submerged":return $t.reefSubmerged;case"sand":return $t.sand;case"grass":return $t.grass;case"coral_solid":return $t.coralSolid;case"tide_zone":return $t.tideZone;default:return $t.deepWater}}const Zu=.12,fv=Zu/2,ju=.06,pv=ju/2,ra=new nt;function gl(i,e,t){const n=new Map;for(let r=0;r<i.heightTiles;r+=1)for(let s=0;s<i.widthTiles;s+=1){const a=i.tiles[r][s];let o=null;if(t&&(a==="grass"||a==="sand"))o=lo(a);else if(!t&&a!=="deep_water"&&a!=="grass"&&a!=="sand"){const c=$u(a,s+.5,r+.5,e);o=lo(c)}if(o===null)continue;const l=n.get(o)??[];l.push({tx:s,ty:r}),n.set(o,l)}return n}function _l(i,e,t){const n=[];for(const[r,s]of i){const a=new Cp(new Xt(1,1,1),new Tt({color:r}),s.length);a.castShadow=!1,a.receiveShadow=!1;for(let o=0;o<s.length;o+=1){const{tx:l,ty:c}=s[o];ra.makeScale(1,e,1),ra.setPosition(l+.5,t,c+.5),a.setMatrixAt(o,ra)}a.instanceMatrix.needsUpdate=!0,n.push(a)}return n}function sa(i){for(const e of i)e.geometry.dispose(),e.material.dispose()}class mv{constructor(){q(this,"root",new st);q(this,"water",null);q(this,"landMeshes",[]);q(this,"overlayMeshes",[]);q(this,"mapKey",null)}build(e,t){if(this.mapKey===`${e.widthTiles}x${e.heightTiles}`)return;this.destroy();const n=new Tt({color:$t.deepWater,roughness:.85,metalness:.05});this.water=new Ne(new lr(e.widthTiles,e.heightTiles),n),this.water.rotation.x=-Math.PI/2,this.water.position.set(e.widthTiles/2,0,e.heightTiles/2),this.water.receiveShadow=!0,this.root.add(this.water);const r=gl(e,t,!0);this.landMeshes=_l(r,Zu,fv);for(const s of this.landMeshes)this.root.add(s);this.rebuildOverlay(e,t),this.mapKey=`${e.widthTiles}x${e.heightTiles}`}rebuildOverlay(e,t){for(const r of this.overlayMeshes)this.root.remove(r);sa(this.overlayMeshes),this.overlayMeshes=[];const n=gl(e,t,!1);this.overlayMeshes=_l(n,ju,pv);for(const r of this.overlayMeshes)this.root.add(r)}setWaterScroll(e,t){if(!this.water)return;const n=this.water.material;n.map=null}destroy(){this.water&&(this.water.geometry.dispose(),this.water.material.dispose(),this.root.remove(this.water),this.water=null);for(const e of this.landMeshes)this.root.remove(e);sa(this.landMeshes),this.landMeshes=[];for(const e of this.overlayMeshes)this.root.remove(e);sa(this.overlayMeshes),this.overlayMeshes=[],this.mapKey=null}}const gv=Math.PI*.75,_v=.55,xv=28,xl=.15,vl=1.45,vv=8,Mv=80,Ml=1.8,Sl=1.2,yl=.004,Sv=.08,yv=.6;class Ev{constructor(e){q(this,"camera");q(this,"yaw",gv);q(this,"pitch",_v);q(this,"distance",xv);q(this,"focusTarget",new F);q(this,"focusCurrent",new F);q(this,"focusInitialized",!1);q(this,"scratch",new F);q(this,"middleMouseDragging",!1);q(this,"lastPointerX",0);q(this,"lastPointerY",0);q(this,"arrowLeft",!1);q(this,"arrowRight",!1);q(this,"arrowUp",!1);q(this,"arrowDown",!1);this.camera=new Wt(50,e,.1,500)}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setFocus(e,t){const n=en(e,t,yv);this.focusTarget.set(n.x,n.y,n.z),this.focusInitialized||(this.focusCurrent.copy(this.focusTarget),this.focusInitialized=!0)}update(e){const t=1-Math.exp(-10*e);this.focusCurrent.lerp(this.focusTarget,t),this.arrowLeft&&(this.yaw-=Ml*e),this.arrowRight&&(this.yaw+=Ml*e),this.arrowUp&&(this.pitch=Math.max(xl,this.pitch-Sl*e)),this.arrowDown&&(this.pitch=Math.min(vl,this.pitch+Sl*e));const n=Math.cos(this.pitch),r=Math.sin(this.pitch),s=Math.cos(this.yaw),a=Math.sin(this.yaw);this.scratch.set(this.distance*n*s,this.distance*r,this.distance*n*a),this.camera.position.copy(this.focusCurrent).add(this.scratch),this.camera.lookAt(this.focusCurrent)}handleKeyDown(e){switch(e){case"ArrowLeft":return this.arrowLeft=!0,!0;case"ArrowRight":return this.arrowRight=!0,!0;case"ArrowUp":return this.arrowUp=!0,!0;case"ArrowDown":return this.arrowDown=!0,!0;default:return!1}}handleKeyUp(e){switch(e){case"ArrowLeft":return this.arrowLeft=!1,!0;case"ArrowRight":return this.arrowRight=!1,!0;case"ArrowUp":return this.arrowUp=!1,!0;case"ArrowDown":return this.arrowDown=!1,!0;default:return!1}}onPointerDown(e){e.button===1&&(e.preventDefault(),this.middleMouseDragging=!0,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY)}onPointerMove(e){if(!this.middleMouseDragging)return;const t=e.clientX-this.lastPointerX,n=e.clientY-this.lastPointerY;this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.yaw+=t*yl,this.pitch=Math.max(xl,Math.min(vl,this.pitch+n*yl))}onPointerUp(e){e.button===1&&this.endMiddleMouseDrag()}onPointerCancel(){this.endMiddleMouseDrag()}endMiddleMouseDrag(){this.middleMouseDragging=!1}onWheel(e){const t=1+e*Sv*.001;this.distance=Math.max(vv,Math.min(Mv,this.distance*t))}}const $i=.2,bv=1.4,El=.9;function Tv(i,e,t=1){const n=new Lt;return n.setAttribute("position",new lt(i,3)),new Lp(n,new Iu({color:e,transparent:t<1,opacity:t}))}class Av{constructor(){q(this,"root",new st);q(this,"walkClick",new st);q(this,"tide",new st);q(this,"facing",new st);q(this,"headingArrow",new st);q(this,"intendedGhost",new st);q(this,"lines",[]);this.root.add(this.walkClick,this.tide,this.facing,this.headingArrow,this.intendedGhost)}sync(e,t){this.clearDynamic(),this.drawWalkClick(e),this.drawTide(e),this.drawFacing(e,t),this.drawHeadingArrow(e),this.drawIntendedGhost(e)}clearDynamic(){for(const e of this.lines)e.geometry.dispose(),e.material.dispose(),e.removeFromParent();this.lines=[],this.walkClick.clear(),this.tide.clear(),this.facing.clear(),this.headingArrow.clear(),this.intendedGhost.clear()}addLine(e,t,n,r=1){const s=Tv(t,n,r);e.add(s),this.lines.push(s)}drawWalkClick(e){if(e.boardMounted||e.walkTargetTx===null||e.walkTargetTy===null)return;const t=e.walkTargetTx,n=e.walkTargetTy,r=e.walkClickValid?16776960:16729156,s=.15;this.addLine(this.walkClick,[t+s,$i,n+s,t+1-s,$i,n+1-s],r),this.addLine(this.walkClick,[t+1-s,$i,n+s,t+s,$i,n+1-s],r)}drawTide(e){const t=e.tide;if(!t)return;const n=en(t.centerX,t.centerY),r=[t.phaseRadians,vt(t.phaseRadians+t.sweepRadians)],s=.12,a=36;for(const o of r)for(const l of[t.innerRadius,t.outerRadius]){const c=[];for(let d=0;d<=a;d+=1){const h=o+s*(d/a-.5);c.push(n.x+Math.cos(h)*l,$i*.5,n.z+Math.sin(h)*l)}this.addLine(this.tide,c,12118271,.55)}}drawFacing(e,t){const n=en(e.surfboard.position.x,e.surfboard.position.y);let r;if(!e.boardMounted){r=cn(e.surfboard.currentHeading)*Math.PI/180;const h=.35,u=n.y+.35;this.addLine(this.facing,[n.x,u,n.z,n.x+Math.cos(r)*h,u,n.z+Math.sin(r)*h],16777215);return}const s=Xn(t,Math.floor(e.surfboard.position.x),Math.floor(e.surfboard.position.y));r=e.surfboard.speedState==="seated"&&s==="sand"?0:cn(e.surfboard.currentHeading)*Math.PI/180;const o=.55,l=n.x+Math.cos(r)*o,c=n.z+Math.sin(r)*o;this.addLine(this.facing,[n.x,n.y+.15,n.z,l,n.y+.15,c],16777215);const d=new Ne(new ps(.01,.08,4,12),new Ro({color:16777215}));d.position.set(l,n.y+.15,c),d.rotation.x=Math.PI/2,this.facing.add(d)}drawHeadingArrow(e){if(!e.boardMounted||e.hoverHeading===null||e.cursorWorldX===null||e.cursorWorldY===null)return;const t=en(e.surfboard.position.x,e.surfboard.position.y),n=cn(e.hoverHeading)*Math.PI/180,r=t.x+Math.cos(n)*El,s=t.z+Math.sin(n)*El,a=e.clickValid?16777215:16729156;this.addLine(this.headingArrow,[t.x,t.y+.18,t.z,r,t.y+.18,s],a,.5);const o=bv*.5,l=r+Math.cos(n)*o,c=s+Math.sin(n)*o;this.addLine(this.headingArrow,[r,t.y+.18,s,l,t.y+.18,c],a)}drawIntendedGhost(e){if(!e.boardMounted||e.surfboard.currentHeading===e.surfboard.intendedHeading)return;const t=en(e.surfboard.position.x,e.surfboard.position.y),n=cn(e.surfboard.intendedHeading)*Math.PI/180,r=.45;this.addLine(this.intendedGhost,[t.x,t.y+.16,t.z,t.x+Math.cos(n)*r,t.y+.16,t.z+Math.sin(n)*r],11193599,.6)}dispose(){this.clearDynamic()}}const wv=.06,Rv=.2,Ju=.5,Qu=.065;function Cv(i,e){switch(i){case"tunnel":return e*(Ju+Qu+.06);case"wall_ride":return e*1.125;case"brain_coral":return e*.8;case"jump":return e*.4;case"rail":default:return e*.57}}function Pv(i,e){return Cv(i,e)+wv+Rv}function Iv(i,e,t,n){return n?-Gd(i,e,t)*Pv(i.type,i.radius):0}function Dv(i){switch(i){case"rail":return{base:16033721,accent:16041282};case"tunnel":return{base:10185727,accent:13219071};case"jump":return{base:16747586,accent:16769126};case"brain_coral":return{base:16740020,accent:16752338};case"wall_ride":return{base:7260415,accent:12117759};default:return{base:16033721,accent:16041282}}}function mn(i,e){return new Tt({color:i,transparent:e<1,opacity:e,roughness:.7,metalness:.1})}function bl(i,e,t){const n=new st,r=new Ne(new Xt(i*2.3,i*.1,i*.2),mn(e.base,t));r.position.y=i*.22;const s=new Ne(new Xt(i*.32,i*.4,i*.32),mn(e.accent,t));return s.position.set(0,i*.34,0),n.add(r,s),n}function Lv(i,e,t){const n=new st,r=new Ne(new ps(i*Ju,i*Qu,10,20,Math.PI),mn(e.accent,t));return r.rotation.x=0,r.position.y=i*.08,n.add(r),n.rotation.y=Math.PI/2,n}function Uv(i,e,t){const n=new st,r=new Ne(new Xt(i*1.4,i*.35,i*1.1),mn(e.base,t));r.position.set(0,i*.18,-i*.15),r.rotation.x=-.35;const s=new Ne(new Xt(i*1.5,i*.1,i*.2),mn(e.accent,t));return s.position.set(0,i*.35,i*.45),n.add(r,s),n.rotation.y=3*Math.PI/2,n}function Nv(i,e,t){const n=new st,r=new Ne(new os(i*.55,1),mn(e.base,t));r.position.y=i*.35;const s=new Ne(new os(i*.3,0),mn(e.accent,t));return s.position.set(i*.25,i*.5,i*.15),n.add(r,s),n}function Fv(i,e,t){const n=new st,r=new Ne(new Xt(i*.24,i*1.15,i*1.35),mn(e.base,t));r.position.set(0,i*.48,0);const s=new Ne(new Xt(i*.34,i*.14,i*1.45),mn(e.accent,t));return s.position.y=i*1.02,n.add(r,s),n.rotation.y=Math.PI/2,n}function Ov(i,e,t,n){switch(i){case"rail":return bl(e,t,n);case"tunnel":return Lv(e,t,n);case"jump":return Uv(e,t,n);case"brain_coral":return Nv(e,t,n);case"wall_ride":return Fv(e,t,n);default:return bl(e,t,n)}}function Bv(i){switch(i){case"jump":return-Math.PI/2;default:return Math.PI/2}}function kv(i,e,t,n){const r=new st;r.rotation.y=Bv(e);const s=mn(16774502,n*.9);for(const a of[-.72,-.52,-.32]){const o=new Ne(new Po(t*.15,t*.25,3),s);o.rotation.x=Math.PI,o.rotation.z=Math.PI,o.position.set(0,t*.08,t*a+t*.22),r.add(o)}i.add(r)}function Hv(i){for(;i.children.length>0;){const e=i.children[0];i.remove(e),e.traverse(t=>{if(t instanceof Ne){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(r=>r.dispose()):n.dispose()}})}}function Gv(i,e,t){const n=!i.tricked&&!t&&e.trickPrepare!==null&&e.trickPrepare.slot===i.prepareSlot;return`${i.id}:${i.type}:${i.radius}:${n}`}function zv(i,e){i.traverse(t=>{if(t instanceof Ne){const n=t.material;n.opacity=e,n.transparent=e<1}})}class Vv{constructor(){q(this,"root",new st);q(this,"pool",[]);q(this,"meshKeys",[])}sync(e,t=0){const n=e.tide,r=e.trickZones;for(;this.pool.length<r.length;){const s=new st;this.pool.push(s),this.meshKeys.push(""),this.root.add(s)}for(let s=0;s<this.pool.length;s+=1){const a=this.pool[s];if(s>=r.length){a.visible=!1;continue}const o=r[s];a.visible=!0;const l=n?si(o,n):!1,d=kl(o,n,t),h=Gv(o,e,l);if(this.meshKeys[s]!==h){Hv(a);const m=Dv(o.type),x=Ov(o.type,o.radius,m,d);a.add(x),!o.tricked&&!l&&e.trickPrepare!==null&&e.trickPrepare.slot===o.prepareSlot&&kv(a,o.type,o.radius,d),this.meshKeys[s]=h}else zv(a,d);const u=en(o.center.x,o.center.y);a.position.set(u.x,Iv(o,n,t,l),u.z),a.rotation.y=ev(o.rotationRadians+(o.rotationJitterRadians??0))}}dispose(){for(const e of this.pool)e.traverse(t=>{t instanceof Ne&&(t.geometry.dispose(),t.material.dispose())});this.pool=[],this.root.clear()}}const aa=new F,oa=new F,ca=new Ge,Ai=new F;class Wv{constructor(){q(this,"renderer",null);q(this,"scene",null);q(this,"orbitCamera",null);q(this,"raycaster",new Kp);q(this,"mapMeshes",null);q(this,"entities",null);q(this,"tricks",null);q(this,"overlays",null);q(this,"container",null);q(this,"lastFrameMs",0);q(this,"unbindPointer",null);q(this,"unbindCamera",null);q(this,"xpContainer",null)}async init(e,t){this.container=e,this.renderer=new Wx({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setSize(Ji,Qi,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor($t.deepWater),e.appendChild(this.renderer.domElement),this.scene=new yp;const n=new Xp(16777215,.55),r=new Wp(16774368,.85);r.position.set(40,80,30),this.scene.add(n,r),this.orbitCamera=new Ev(Ji/Qi),this.mapMeshes=new mv,this.entities=new hv,this.tricks=new Vv,this.overlays=new Av,this.scene.add(this.mapMeshes.root,this.tricks.root,this.entities.root,this.overlays.root),this.xpContainer=document.createElement("div"),this.xpContainer.className="xp-drop-layer",this.xpContainer.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",e.style.position="relative",e.appendChild(this.xpContainer),this.bindCameraEvents(this.renderer.domElement)}getCanvas(){if(!this.renderer)throw new Error("Renderer not initialized");return this.renderer.domElement}bindPointerInput(e,t){var n;return(n=this.unbindPointer)==null||n.call(this),this.unbindPointer=Xx(this.getCanvas(),e,t,(r,s)=>this.screenToWorld(r,s)),this.unbindPointer}handleKeyDown(e){var t;return((t=this.orbitCamera)==null?void 0:t.handleKeyDown(e.code))??!1}handleKeyUp(e){var t;return((t=this.orbitCamera)==null?void 0:t.handleKeyUp(e.code))??!1}resize(e){!this.renderer||!this.orbitCamera||(this.renderer.setSize(e.width,e.height,!1),this.orbitCamera.setAspect(e.width/e.height))}worldToScreen(e,t){if(!this.orbitCamera)return{x:0,y:0};const n=en(e,t,.5);return Ai.set(n.x,n.y,n.z),Ai.project(this.orbitCamera.camera),{x:(Ai.x+1)/2*Ji,y:(-Ai.y+1)/2*Qi}}screenToWorld(e,t){if(!this.orbitCamera)return{x:0,y:0};ca.x=e/Ji*2-1,ca.y=-(t/Qi)*2+1,this.raycaster.setFromCamera(ca,this.orbitCamera.camera);const n=this.raycaster.ray;aa.copy(n.origin),oa.copy(n.direction);const r=oa.y;if(Math.abs(r)<1e-6)return{x:NaN,y:NaN};const s=-aa.y/r;return s<0?{x:NaN,y:NaN}:(Ai.copy(aa).addScaledVector(oa,s),Qx(Ai))}render(e,t,n=performance.now(),r=0){if(!this.renderer||!this.scene||!this.orbitCamera||!this.mapMeshes||!this.entities||!this.tricks||!this.overlays)return;const s=this.lastFrameMs>0?n-this.lastFrameMs:16;this.lastFrameMs=n;const a=Math.min(.1,s/1e3);this.mapMeshes.build(t,e.tide),this.orbitCamera.setFocus(e.surfboard.position.x,e.surfboard.position.y),this.orbitCamera.update(a),this.tricks.sync(e,r),this.entities.sync(e,t),this.overlays.sync(e,t),this.renderer.render(this.scene,this.orbitCamera.camera)}showXpDrop(e,t,n){if(!this.xpContainer)return;const r=this.worldToScreen(t,n),s=document.createElement("div");s.textContent=e,s.style.cssText="position:absolute;color:#7ecf8f;font:12px monospace;white-space:nowrap;",s.style.left=`${r.x}px`,s.style.top=`${r.y-10}px`,this.xpContainer.appendChild(s);const a=()=>{const o=parseFloat(s.style.top);if(s.style.top=`${o-.5}px`,s.style.opacity=`${parseFloat(s.style.opacity||"1")-.02}`,parseFloat(s.style.opacity||"1")<=0){s.remove();return}requestAnimationFrame(a)};requestAnimationFrame(a)}syncMapAfterTick(e,t){var n,r;(n=this.mapMeshes)==null||n.build(t,e.tide),(r=this.mapMeshes)==null||r.rebuildOverlay(t,e.tide)}destroy(){var e,t,n,r,s,a,o,l,c;(e=this.unbindPointer)==null||e.call(this),(t=this.unbindCamera)==null||t.call(this),(n=this.entities)==null||n.dispose(),(r=this.tricks)==null||r.dispose(),(s=this.overlays)==null||s.dispose(),(a=this.mapMeshes)==null||a.destroy(),(o=this.renderer)==null||o.dispose(),(l=this.renderer)==null||l.domElement.remove(),(c=this.xpContainer)==null||c.remove(),this.renderer=null,this.scene=null,this.container}bindCameraEvents(e){const t=this.orbitCamera;if(!t)return;const n=c=>{t.onPointerDown(c),c.button===1&&e.setPointerCapture(c.pointerId)},r=c=>t.onPointerMove(c),s=c=>{c.button===1&&e.hasPointerCapture(c.pointerId)&&e.releasePointerCapture(c.pointerId),t.onPointerUp(c)},a=c=>{e.hasPointerCapture(c.pointerId)&&e.releasePointerCapture(c.pointerId),t.onPointerCancel()},o=c=>{c.preventDefault(),t.onWheel(c.deltaY)},l=c=>c.preventDefault();e.addEventListener("pointerdown",n),e.addEventListener("pointermove",r),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",a),e.addEventListener("wheel",o,{passive:!1}),e.addEventListener("contextmenu",l),this.unbindCamera=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",r),e.removeEventListener("pointerup",s),e.removeEventListener("pointercancel",a),e.removeEventListener("wheel",o),e.removeEventListener("contextmenu",l)}}}function Xv(i,e,t){return{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t}}function Tl(i,e){return Math.hypot(i.x-e.x,i.y-e.y)}function ed(i){return Math.min(1,Math.max(0,i))}function cs(i){return i?i.ticksElapsed/i.ticksTotal:0}function la(i,e){const t={...i.position};return{segmentStart:t,segmentEnd:t,headingStart:i.currentHeading,headingEnd:i.currentHeading,intendedHeadingStart:i.intendedHeading,intendedHeadingEnd:i.intendedHeading,trickProgressStart:cs(e),trickProgressEnd:cs(e)}}function ua(i,e,t,n,r){i.segmentStart={...e.position},i.segmentEnd={...t.position},i.headingStart=e.currentHeading,i.headingEnd=t.currentHeading,i.intendedHeadingStart=e.intendedHeading,i.intendedHeadingEnd=t.intendedHeading,i.trickProgressStart=cs(n),i.trickProgressEnd=cs(r)}function Al(i,e,t){if(t)return;const n=e.position,r=Tl(i.segmentStart,i.segmentEnd);if(Tl(n,i.segmentEnd)>Math.max(.2,r*.5+.05)){const a={...n};i.segmentStart=a,i.segmentEnd=a,i.headingStart=e.currentHeading,i.headingEnd=e.currentHeading,i.intendedHeadingStart=e.intendedHeading,i.intendedHeadingEnd=e.intendedHeading,i.trickProgressStart=0,i.trickProgressEnd=0}}function wl(i,e,t,n){const r=ed(n),s=t?i.trickProgressStart+(i.trickProgressEnd-i.trickProgressStart)*r:0,a=t!==null?Vl(t,s):Xv(i.segmentStart,i.segmentEnd,r),o=t?{...t,progress:s}:null;return{surfboard:{...e,position:a,currentHeading:da(i.headingStart,i.headingEnd,r),intendedHeading:da(i.intendedHeadingStart,i.intendedHeadingEnd,r)},trickAnimation:o}}class Yv{constructor(){q(this,"player",la({position:{x:0,y:0},currentHeading:0,intendedHeading:0},null));q(this,"demoSurfer",null)}reset(e){ua(this.player,e.surfboard,e.surfboard,e.trickAnimation,e.trickAnimation),this.resetDemoSurfer(e)}onSimulationTick(e,t){var n,r;ua(this.player,e.surfboard,t.surfboard,e.trickAnimation,t.trickAnimation),t.demoSurfer?(this.demoSurfer||(this.demoSurfer=la(t.demoSurfer.surfboard,t.demoSurfer.trickAnimation)),ua(this.demoSurfer,((n=e.demoSurfer)==null?void 0:n.surfboard)??t.demoSurfer.surfboard,t.demoSurfer.surfboard,((r=e.demoSurfer)==null?void 0:r.trickAnimation)??null,t.demoSurfer.trickAnimation)):this.demoSurfer=null}ensureSynced(e){Al(this.player,e.surfboard,e.trickAnimation),e.demoSurfer&&this.demoSurfer&&Al(this.demoSurfer,e.demoSurfer.surfboard,e.demoSurfer.trickAnimation)}buildDisplaySnapshot(e,t,n){const r=wl(this.player,e.surfboard,e.trickAnimation,n);let s=e.tide;if(e.tide&&t!==null){const o=ed(n),l=t+e.tide.advancePerTick*o;s={...e.tide,phaseRadians:l}}let a=null;if(e.demoSurfer&&this.demoSurfer){const o=wl(this.demoSurfer,e.demoSurfer.surfboard,e.demoSurfer.trickAnimation,n);a={...e.demoSurfer,surfboard:o.surfboard,trickAnimation:o.trickAnimation}}return{...e,surfboard:r.surfboard,trickAnimation:r.trickAnimation,tide:s,demoSurfer:a}}resetDemoSurfer(e){if(!e.demoSurfer){this.demoSurfer=null;return}this.demoSurfer=la(e.demoSurfer.surfboard,e.demoSurfer.trickAnimation)}}class qv{constructor(e,t,n){q(this,"root");q(this,"tuning");this.root=e,this.tuning={...t},this.root.innerHTML=`
      <div><strong>Debug</strong> [1/2/3] tune turn/paddle/ride</div>
      <div id="debug-lines"></div>
    `,window.addEventListener("keydown",r=>{r.key==="1"&&(this.tuning.turnRate=Math.max(5,this.tuning.turnRate-2.5),n(this.tuning)),r.key==="2"&&(this.tuning.speedPaddle=Math.max(1,this.tuning.speedPaddle-1),n(this.tuning)),r.key==="3"&&(this.tuning.speedRide=Math.max(1,this.tuning.speedRide-1),n(this.tuning)),r.key==="!"&&(this.tuning.turnRate+=2.5,n(this.tuning)),r.key==="@"&&(this.tuning.speedPaddle+=1,n(this.tuning)),r.key==="#"&&(this.tuning.speedRide+=1,n(this.tuning))})}update(e){const t=this.root.querySelector("#debug-lines");if(!t)return;const{surfboard:n}=e;t.innerHTML=`
      pos: ${n.position.x.toFixed(2)}, ${n.position.y.toFixed(2)}<br/>
      heading: ${n.currentHeading} → ${n.intendedHeading}<br/>
      speed: ${n.speedState} | rotating: ${n.isRotating}<br/>
      turn: ${this.tuning.turnRate}° paddle: ${Ko(this.tuning.speedPaddle)} ride: ${Ko(this.tuning.speedRide)} tiles/tick<br/>
      tide: ${e.tide?`${(e.tide.phaseRadians*180/Math.PI).toFixed(0)}° sweep`:"off"}<br/>
      tick: ${e.tickCount}
    `}}const Kv="/osrs-surfing-sim/assets/osrs",$v="/osrs-surfing-sim/assets/surf";function Et(i){return`${Kv}/${i}`}function jn(i){return`${$v}/${i}`}const Zt={chatbox:{stones:Et("chatbox/buttons_background_stones.png")},tabs:{combat:Et("tab/combat.png"),stats:Et("tab/stats.png"),sailing:Et("tab/sailing.png"),inventory:Et("tab/inventory.png"),prayer:Et("tab/prayer.png"),magic:Et("tab/magic.png")},sailing:{raft:jn("surfboard.svg"),setSails:jn("wave_ride.svg"),unsetSailsSlow:jn("wave_paddle.svg"),unsetSailsFast:jn("wave_stop.svg"),reverse:jn("wave_lie_down.svg"),sails:jn("wave_paddle.svg"),steering:Et("sailing/steering.png"),notSteering:Et("sailing/not_steering.png"),tabStats:Et("sailing/tab_stats.png"),tabFacilities:Et("sailing/tab_facilities.png"),tabCrew:Et("sailing/tab_crew.png"),viewSailingOptions:jn("wave_panel.svg")},skill:{agility:Et("skill/agility.png"),sailing:Et("skill/sailing.png")},chevron:{up:Et("chevron/yellow_up_single.png"),down:Et("chevron/yellow_down_single.png")}},Zv=50;class jv{constructor(e){q(this,"root");q(this,"messagesEl");q(this,"lines",[]);this.root=e,this.root.className="osrs-chatbox";const t=Zt;this.root.innerHTML=`
      <div class="osrs-chatbox-messages" id="chat-messages"></div>
      <div class="osrs-chatbox-stones">
        <img src="${t.chatbox.stones}" alt="" class="osrs-chatbox-stones-bg" />
      </div>
    `,this.messagesEl=this.root.querySelector("#chat-messages"),this.push("Welcome to Ura Ura Swell.","game")}push(e,t="game"){const n=t==="xp"?'<span class="chat-xp">':t==="system"?'<span class="chat-sys">':"<span>";this.lines.push(`${n}${e}</span>`),this.lines.length>Zv&&this.lines.shift(),this.messagesEl.innerHTML=this.lines.join("<br/>"),this.messagesEl.scrollTop=this.messagesEl.scrollHeight}}const Br=146;class Jv{constructor(e){q(this,"canvas");q(this,"ctx");this.canvas=document.createElement("canvas"),this.canvas.width=Br,this.canvas.height=Br,this.canvas.className="osrs-minimap-canvas",e.appendChild(this.canvas);const t=this.canvas.getContext("2d");if(!t)throw new Error("Minimap canvas unsupported");this.ctx=t}update(e,t){const n=this.ctx,r=Br/t.widthTiles,s=Br/t.heightTiles;for(let l=0;l<t.heightTiles;l+=1)for(let c=0;c<t.widthTiles;c+=1){const d=t.tiles[l][c],h=$u(d,c+.5,l+.5,e.tide),u=lo(h);n.fillStyle=`#${u.toString(16).padStart(6,"0")}`,n.fillRect(c*r,l*s,Math.ceil(r),Math.ceil(s))}const a=e.surfboard.position.x*r,o=e.surfboard.position.y*s;n.fillStyle="#ffff00",n.beginPath(),n.arc(a,o,3,0,Math.PI*2),n.fill(),n.strokeStyle="#000",n.lineWidth=1,n.stroke()}}const Qv={Bronze:"linear-gradient(180deg, #e8a55c 0%, #8b5a2b 100%)",Iron:"linear-gradient(180deg, #d8d8d8 0%, #6a6a6a 100%)",Steel:"linear-gradient(180deg, #c8d4e0 0%, #6a7a8a 100%)",Mithril:"linear-gradient(180deg, #7eb8e8 0%, #2a5080 100%)",Adamant:"linear-gradient(180deg, #5ecf8a 0%, #1a5c38 100%)",Rune:"linear-gradient(180deg, #7ec8f0 0%, #2868a8 100%)",Dragon:"linear-gradient(180deg, #f0a050 0%, #8b2020 100%)"};class eM{constructor(e,t){q(this,"root");q(this,"callbacks");q(this,"activeTab","movement");q(this,"speedState","seated");this.root=e,this.callbacks=t,this.root.className="osrs-sailing-panel",this.root.innerHTML=this.renderShell(),this.bindEvents()}update(e){this.speedState=e.surfboard.speedState;const t=this.root.querySelector("#steering-icon");t&&(t.src=e.surfboard.speedState==="seated"?Zt.sailing.notSteering:Zt.sailing.steering),this.setActiveSpeed(e.surfboard.speedState);const n=this.root.querySelector("#combo-bar-fill"),r=this.root.querySelector("#combo-label");if(n&&r){const d=e.progression.session.combo,h=df(d);n.style.width=d>0?`${h/10*100}%`:"0%",n.style.background=Qv[nc(d)],r.textContent=d>0?`${nc(d)} · ${d}`:"Combo"}const s=e.progression.xp.agility,a=e.progression.xp.sailing;this.updateSkillRow("agility",au(s),s%1e3,1e3),this.updateSkillRow("sailing",ou(a),a%1200,1200);const o=String(e.progression.coralTokens),l=this.root.querySelector("#coral-tokens");l&&(l.textContent=o),this.syncTokenDisplay(e.progression.coralTokens);const c=this.root.querySelector("#tricks-landed");c&&(c.textContent=String(e.progression.session.tricksLanded)),this.root.querySelectorAll("[data-prepare-slot]").forEach(d=>{var x;const h=Number(d.dataset.prepareSlot),u=e.trickPrepare!==null&&e.trickPrepare.slot===h&&e.trickPrepare.ticksSincePrepare>0;d.classList.toggle("primed",u);const m=d.querySelector(".prepare-ticks");m&&(m.textContent=((x=e.trickPrepare)==null?void 0:x.slot)===h?String(e.trickPrepare.ticksSincePrepare):"·")})}renderShell(){const e=Zt;return`
      <div class="osrs-panel-chrome">
        <div class="osrs-panel-header">
          <img src="${e.sailing.viewSailingOptions}" alt="" class="osrs-panel-icon" width="20" height="20" />
          <span class="osrs-panel-title">Ura Ura Board</span>
          <img src="${e.sailing.raft}" alt="" class="osrs-boat-thumb" width="32" height="32" />
        </div>
        <div class="osrs-hp-bar">
          <div class="osrs-hp-bar-fill" id="combo-bar-fill"></div>
          <span class="osrs-hp-bar-label" id="combo-label">Combo</span>
        </div>
        <div class="osrs-tab-row">
          <button type="button" class="osrs-tab" data-tab="stats" title="Stats">
            <img src="${e.sailing.tabStats}" alt="Stats" width="28" height="28" />
          </button>
          <button type="button" class="osrs-tab active" data-tab="movement" title="Movement">
            <img src="${e.sailing.tabFacilities}" alt="Movement" width="28" height="28" />
          </button>
          <button type="button" class="osrs-tab" data-tab="rewards" title="Rewards">
            <img src="${e.sailing.tabCrew}" alt="Rewards" width="28" height="28" />
          </button>
        </div>
        <div class="osrs-tab-body" data-panel="stats">
          <div class="osrs-stat-row">
            <img src="${e.skill.agility}" alt="" width="18" height="18" />
            <span id="agility-label">Agility 1</span>
            <div class="osrs-xp-track"><div class="osrs-xp-fill agility" id="agility-fill"></div></div>
          </div>
          <div class="osrs-stat-row">
            <img src="${e.skill.sailing}" alt="" width="18" height="18" />
            <span id="sailing-label">Sailing 1</span>
            <div class="osrs-xp-track"><div class="osrs-xp-fill sailing" id="sailing-fill"></div></div>
          </div>
          <div class="osrs-stat-line">Tricks: <span id="tricks-landed">0</span></div>
          <div class="osrs-stat-line">Coral Tokens: <span id="coral-tokens">0</span></div>
        </div>
        <div class="osrs-tab-body active" data-panel="movement">
          <p class="osrs-section-label">Navigation</p>
          <div class="osrs-movement-grid">
            <button type="button" class="osrs-sprite-btn" data-action="lie-down" title="Lie down (paddle)">
              <img src="${e.sailing.reverse}" alt="Lie down" />
            </button>
            <button type="button" class="osrs-sprite-btn" data-action="speed-up" title="Stand — ride swell">
              <img src="${e.chevron.up}" alt="Faster" />
            </button>
            <button type="button" class="osrs-sprite-btn" disabled aria-hidden="true"></button>
            <button type="button" class="osrs-sprite-btn osrs-boat-center" disabled aria-hidden="true">
              <img src="${e.sailing.raft}" alt="" id="boat-center-icon" />
            </button>
            <button type="button" class="osrs-sprite-btn" data-action="paddle" title="Paddle">
              <img src="${e.sailing.sails}" alt="Paddle" />
            </button>
            <button type="button" class="osrs-sprite-btn" data-action="speed-down" title="Slow / seated">
              <img src="${e.chevron.down}" alt="Slower" />
            </button>
            <button type="button" class="osrs-sprite-btn" data-action="stop" title="Stop — seated">
              <img src="${e.sailing.unsetSailsFast}" alt="Stop" id="stop-icon" />
            </button>
            <img src="${e.sailing.steering}" alt="" class="osrs-steering-badge" id="steering-icon" />
          </div>
          <div class="osrs-movement-row">
            <button type="button" class="osrs-sprite-btn wide" data-action="paddle" title="Start paddling">
              <img src="${e.sailing.unsetSailsSlow}" alt="Paddle" />
              <span>Paddle</span>
            </button>
            <button type="button" class="osrs-sprite-btn wide" data-action="ride" title="Stand on swell">
              <img src="${e.sailing.setSails}" alt="Ride" />
              <span>Ride</span>
            </button>
          </div>
          <p class="osrs-section-label">Stance</p>
          <div class="osrs-trick-prepare-row">
            <button type="button" class="osrs-trick-prepare-btn" data-prepare-slot="0" title="Low stance (1) — rail, brain coral">
              <span class="prepare-label">${vs(0)}</span>
              <span class="prepare-ticks">·</span>
            </button>
            <button type="button" class="osrs-trick-prepare-btn" data-prepare-slot="1" title="Medium stance (2) — tunnel, wall ride">
              <span class="prepare-label">${vs(1)}</span>
              <span class="prepare-ticks">·</span>
            </button>
            <button type="button" class="osrs-trick-prepare-btn" data-prepare-slot="2" title="High stance (3) — jump">
              <span class="prepare-label">${vs(2)}</span>
              <span class="prepare-ticks">·</span>
            </button>
          </div>
          <p class="osrs-hint">Prime Low, Medium, or High 1–4 ticks before the matching feature. Too early or late = bail.</p>
        </div>
        <div class="osrs-tab-body" data-panel="rewards">
          <p class="osrs-section-label">Coral Token Shop</p>
          <div class="osrs-stat-line">Balance: <span id="coral-tokens-rewards">0</span></div>
          <button type="button" class="osrs-stone-btn" id="shop-btn">Open Reward Shop</button>
        </div>
      </div>
    `}bindEvents(){var e,t,n,r;for(const s of this.root.querySelectorAll(".osrs-tab"))s.addEventListener("click",()=>{const a=s.dataset.tab;this.activeTab=a,this.root.querySelectorAll(".osrs-tab").forEach(o=>o.classList.remove("active")),s.classList.add("active"),this.root.querySelectorAll(".osrs-tab-body").forEach(o=>{o.classList.toggle("active",o.dataset.panel===a)})});this.root.querySelectorAll('[data-action="paddle"]').forEach(s=>{s.addEventListener("click",()=>this.callbacks.onSpeedState("paddling"))}),this.root.querySelectorAll('[data-action="ride"]').forEach(s=>{s.addEventListener("click",()=>this.callbacks.onSpeedState("riding"))}),this.root.querySelectorAll('[data-action="stop"]').forEach(s=>{s.addEventListener("click",()=>this.callbacks.onSpeedState("seated"))}),(e=this.root.querySelector('[data-action="lie-down"]'))==null||e.addEventListener("click",()=>{this.callbacks.onLieDown()}),(t=this.root.querySelector('[data-action="speed-up"]'))==null||t.addEventListener("click",()=>{this.speedState==="seated"?this.callbacks.onSpeedState("paddling"):this.callbacks.onSpeedState("riding")}),(n=this.root.querySelector('[data-action="speed-down"]'))==null||n.addEventListener("click",()=>{this.speedState==="riding"?this.callbacks.onLieDown():this.callbacks.onSpeedState("seated")}),this.root.querySelectorAll("[data-prepare-slot]").forEach(s=>{s.addEventListener("click",()=>{const a=Number(s.dataset.prepareSlot);this.callbacks.onPrepareTrick(a)})}),(r=this.root.querySelector("#shop-btn"))==null||r.addEventListener("click",()=>{this.callbacks.onOpenShop()})}setActiveSpeed(e){this.root.querySelectorAll(".osrs-sprite-btn[data-action]").forEach(t=>{const n=t.dataset.action,r=n==="paddle"&&e==="paddling"||n==="ride"&&e==="riding"||n==="stop"&&e==="seated";t.classList.toggle("active",r)})}updateSkillRow(e,t,n,r){const s=this.root.querySelector(`#${e}-label`),a=this.root.querySelector(`#${e}-fill`);s&&(s.textContent=`${e==="agility"?"Agility":"Sailing"} ${t}`),a&&(a.style.width=`${Math.min(100,n/r*100)}%`)}syncTokenDisplay(e){const t=this.root.querySelector("#coral-tokens-rewards");t&&(t.textContent=String(e))}}class tM{constructor(e,t){q(this,"root");q(this,"onPurchase");q(this,"visible",!1);this.root=e,this.onPurchase=t,this.root.className="osrs-shop-panel hidden"}toggle(){this.visible=!this.visible,this.root.classList.toggle("hidden",!this.visible)}hide(){this.visible=!1,this.root.classList.add("hidden")}update(e){this.root.innerHTML=`
      <div class="osrs-shop-chrome">
        <div class="osrs-panel-header">
          <img src="${Zt.sailing.tabCrew}" alt="" width="20" height="20" />
          <span class="osrs-panel-title">Coral Rewards</span>
        </div>
        <p class="osrs-stat-line">Coral Tokens: <strong>${e.coralTokens}</strong></p>
        <div class="osrs-shop-list">
          ${Qr.map(t=>this.renderUnlock(t,e)).join("")}
        </div>
      </div>
    `;for(const t of Qr){const n=this.root.querySelector(`[data-unlock="${t.id}"]`);!n||t.earnOnly||n.addEventListener("click",()=>this.onPurchase(t.id))}}renderUnlock(e,t){const n=t.unlocked.has(e.id),r=cu(t,e),s=e.tokenCost===null?"Earn only":`${e.tokenCost} Coral Tokens`,a=n?"Unlocked":r.ok?"Purchase":r.reason??"Locked";return`
      <div class="osrs-shop-item">
        <div class="osrs-shop-item-title">${e.name}</div>
        <div class="osrs-shop-item-desc">${e.description}</div>
        <div class="osrs-shop-item-cost">${s}</div>
        <button type="button" class="osrs-stone-btn" data-unlock="${e.id}" ${n||!r.ok?"disabled":""}>
          ${a}
        </button>
      </div>
    `}}const nM=[{id:"combat",icon:Zt.tabs.combat,label:"Combat"},{id:"stats",icon:Zt.tabs.stats,label:"Stats"},{id:"sailing",icon:Zt.tabs.sailing,label:"Sailing",active:!0},{id:"inventory",icon:Zt.tabs.inventory,label:"Inventory"},{id:"prayer",icon:Zt.tabs.prayer,label:"Prayer"},{id:"magic",icon:Zt.tabs.magic,label:"Magic"}];class iM{constructor(e){e.innerHTML='<div class="osrs-tab-strip-inner"></div>';const t=e.querySelector(".osrs-tab-strip-inner");t&&(t.innerHTML=nM.map(n=>`
      <button type="button" class="osrs-game-tab ${n.active?"active":""}" title="${n.label}" disabled>
        <img src="${n.icon}" alt="${n.label}" width="33" height="36" />
      </button>
    `).join(""))}}const Rl=32;function rM(){const i=window.innerWidth-Rl,e=window.innerHeight-Rl;return Math.max(1,Math.floor(Math.min(i/Xu,e/Yu)))}function Cl(i,e){const t=rM();return i.style.width=`${Xu*t}px`,i.style.height=`${Yu*t}px`,e.style.transform=`scale(${t})`,e.style.transformOrigin="top left",t}const sM={Digit1:0,Digit2:1,Digit3:2},aM=["Click the ground to walk. Click Kaulu to talk.","Click your surfboard on the sand ring to paddle out.","Prime Low, Medium, or High stance 1–4 ticks before you hit the matching coral feature."];class Uo{constructor(e,t,n,r,s,a,o){q(this,"simulation");q(this,"renderer");q(this,"chatbox");q(this,"sidePanel");q(this,"shopPanel");q(this,"debugPanel");q(this,"minimap");q(this,"unbindPointer",null);q(this,"visualFrameId",null);q(this,"lastVisualFrameMs",0);q(this,"lastSimTickTimeMs",0);q(this,"motion",new Yv);q(this,"tidePhaseFrom",null);q(this,"paused",!1);q(this,"lastDisplayPosition",{x:0,y:0});q(this,"lastTickBlend",0);q(this,"lastSavedProgressionFingerprint","");q(this,"onKeyDown",e=>{if(this.renderer.handleKeyDown(e)){e.preventDefault();return}const t=sM[e.code];t!==void 0&&(e.preventDefault(),this.simulation.prepareTrick(t))});q(this,"onKeyUp",e=>{this.renderer.handleKeyUp(e)&&e.preventDefault()});this.simulation=e,this.renderer=t,this.chatbox=n,this.sidePanel=r,this.shopPanel=s,this.debugPanel=a,this.minimap=o}static async mount(){var C;const e=document.getElementById("osrs-scale-shell"),t=document.getElementById("osrs-scale-wrap");e&&t&&(Cl(e,t),window.addEventListener("resize",()=>Cl(e,t)));const n=Tf(),r=new bf({arena:ef(),initialProgression:n??void 0}),s=document.getElementById("game-root"),a=document.getElementById("side-panel"),o=document.getElementById("shop-panel"),l=document.getElementById("debug-panel"),c=document.getElementById("chatbox-root"),d=document.getElementById("tab-strip"),h=document.getElementById("minimap-canvas");if(!s||!a||!o||!l||!c||!d||!h)throw new Error("Missing required DOM elements");const u=new Wv;await u.init(s,1),new iM(d);const m=new Jv(h),x=new jv(c);for(const T of aM)x.push(T,"game");const S={turnRate:Ri.turnRateDegPerTick,speedPaddle:Ri.speedPaddle,speedRide:Ri.speedRide};r.setStats({turnRateDegPerTick:S.turnRate,speedPaddle:S.speedPaddle,speedRide:S.speedRide});const p=new qv(l,S,T=>{r.setStats({turnRateDegPerTick:T.turnRate,speedPaddle:T.speedPaddle,speedRide:T.speedRide})}),f=new tM(o,T=>{const R=r.tryPurchaseUnlock(T);R&&x.push(R,"system");const _=r.getSnapshot();sc(_.progression),f.update(_.progression),M.update(_)}),M=new eM(a,{onSpeedState:T=>r.setSpeedState(T),onLieDown:()=>{r.getSnapshot().surfboard.speedState==="riding"?r.setSpeedState("paddling"):r.setSpeedState("seated")},onOpenShop:()=>{f.toggle(),f.update(r.getSnapshot().progression)},onPrepareTrick:T=>r.prepareTrick(T)}),b=new Uo(r,u,x,M,f,p,m),E=r.getSnapshot();return n&&b.seedProgressionFingerprint(E.progression),b.motion.reset(E),b.tidePhaseFrom=((C=E.tide)==null?void 0:C.phaseRadians)??null,b.wireViewport(),b.startTickLoop(),window.addEventListener("keydown",b.onKeyDown),window.addEventListener("keyup",b.onKeyUp),window.addEventListener("beforeunload",()=>b.destroy()),b}wireViewport(){this.unbindPointer=this.renderer.bindPointerInput((e,t)=>{if(Number.isNaN(e)){this.simulation.clearCursor();return}this.simulation.setCursor(e,t)},(e,t)=>{this.simulation.clickWorld(e,t)})}setPaused(e){if(this.paused=e,!e){const t=performance.now();this.lastVisualFrameMs=t,this.lastSimTickTimeMs=t}}resetTickBlendTimer(){this.lastSimTickTimeMs=performance.now(),this.lastTickBlend=0}startTickLoop(){const e=performance.now();this.lastVisualFrameMs=e,this.lastSimTickTimeMs=e,this.visualFrameId=requestAnimationFrame(t=>this.onVisualFrame(t))}onGameTick(){var r;const e=this.simulation.getSnapshot();this.tidePhaseFrom=((r=e.tide)==null?void 0:r.phaseRadians)??null,this.simulation.tick();const t=this.simulation.getSnapshot();this.motion.onSimulationTick(e,t);const n=this.simulation.getArena().map;this.renderer.syncMapAfterTick(t,n),this.sidePanel.update(t),this.shopPanel.update(t.progression),this.persistProgressionIfChanged(t.progression),this.debugPanel.update(t),this.minimap.update(t,n);for(const s of this.simulation.consumeDialogue())this.chatbox.push(s,"game");for(const s of this.simulation.consumeXpDrops()){const a=s.tokens>0?` +${s.tokens} Tokens`:"";this.renderer.showXpDrop(`+${s.agility} Agil +${s.sailing} Sail${a}`,s.x,s.y);const o=s.tokens>0?`, +${s.tokens} Coral Tokens`:"";this.chatbox.push(`+${s.agility} Agility XP, +${s.sailing} Sailing XP${o}`,"xp")}}onVisualFrame(e){if(!this.paused){const t=this.simulation.tickMs;e-this.lastSimTickTimeMs>=t&&(this.onGameTick(),this.lastSimTickTimeMs=e);const n=Math.min(1,Math.max(0,(e-this.lastSimTickTimeMs)/t));this.renderVisuals(e,n)}this.lastVisualFrameMs=e,this.visualFrameId=requestAnimationFrame(t=>this.onVisualFrame(t))}renderVisuals(e=performance.now(),t=0){const n=this.simulation.getSnapshot(),r=this.simulation.getArena().map;this.motion.ensureSynced(n);const s=this.motion.buildDisplaySnapshot(n,this.tidePhaseFrom,t);this.lastDisplayPosition={...s.surfboard.position},this.lastTickBlend=t,this.renderer.render(s,r,e,t)}renderFrame(){this.renderVisuals(performance.now(),this.lastTickBlend)}getDisplayPosition(){return{...this.lastDisplayPosition}}getTickBlend(){return this.lastTickBlend}seedProgressionFingerprint(e){this.lastSavedProgressionFingerprint=this.progressionFingerprint(e)}progressionFingerprint(e){return JSON.stringify({xp:e.xp,coralTokens:e.coralTokens,unlocked:[...e.unlocked].sort(),combo:e.session.combo,maxCombo:e.session.maxCombo,tricksLanded:e.session.tricksLanded})}persistProgressionIfChanged(e){const t=this.progressionFingerprint(e);t!==this.lastSavedProgressionFingerprint&&(this.lastSavedProgressionFingerprint=t,sc(e))}destroy(){var e;this.persistProgressionIfChanged(this.simulation.getSnapshot().progression),this.visualFrameId!==null&&cancelAnimationFrame(this.visualFrameId),(e=this.unbindPointer)==null||e.call(this),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.renderer.destroy()}}const oM={"--osrs-url-window-top":"fixed_mode/window_frame_edge_top.png","--osrs-url-chatbox-bg":"chatbox/background.png","--osrs-url-minimap-left":"fixed_mode/minimap_left_edge.png","--osrs-url-minimap-right":"fixed_mode/minimap_right_edge.png","--osrs-url-minimap-frame":"fixed_mode/minimap_and_compass_frame.png","--osrs-url-minimap-bottom":"fixed_mode/minimap_frame_bottom.png","--osrs-url-tabs-top":"fixed_mode/tabs_top_row.png","--osrs-url-side-panel":"fixed_mode/side_panel_background.png"};function cM(){const i=document.documentElement;for(const[e,t]of Object.entries(oM))i.style.setProperty(e,`url("${Et(t)}")`)}cM();Uo.mount().catch(i=>{console.error(i)});
