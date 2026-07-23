(()=>{
'use strict';
const VERSION='2.3.0', AGES=[10,13,16,20], PASS=85;
const $=s=>document.querySelector(s);
const int=(r,min,max)=>min+Math.floor(r()*(max-min+1));
const pick=(r,a)=>a[Math.floor(r()*a.length)];
const round=(n,d=2)=>Number(n.toFixed(d));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b)[a,b]=[b,a%b];return a};
const lcm=(a,b)=>Math.abs(a*b)/gcd(a,b);
const prime=n=>{if(n<2)return false;for(let i=2;i*i<=n;i++)if(n%i===0)return false;return true};
const comb=(n,k)=>{k=Math.min(k,n-k);let x=1;for(let i=1;i<=k;i++)x=x*(n-k+i)/i;return Math.round(x)};
const hash=s=>{let h=2166136261;for(const c of String(s))h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
const rng=seed=>{let a=hash(seed)||1;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
const shuffle=(r,a)=>{a=[...a];for(let i=a.length-1;i;i--){const j=int(r,0,i);[a[i],a[j]]=[a[j],a[i]]}return a};
const fmt=n=>Number.isInteger(n)?String(n):String(round(n,2)).replace('.',',');
const make=(age,d,f,cat,q,c,wrong,e)=>({age,d,f,cat,q,c:String(c),a:uniqueAnswers(c,wrong),e});
function uniqueAnswers(correct,wrong){const c=String(correct);const out=[c];for(const value of wrong.map(String))if(!out.includes(value))out.push(value);let step=1;while(out.length<4){const n=Number(c.replace(',','.'));const v=Number.isFinite(n)?fmt(n+(step%2?step:-step)):['Nessuna','Entrambe','Impossibile'][step-1]||`Opzione ${step}`;if(!out.includes(v))out.push(v);step++}return out.slice(0,4)}
window.QF={VERSION,AGES,PASS,$,int,pick,round,gcd,lcm,prime,comb,hash,rng,shuffle,fmt,make,uniqueAnswers};
})();
