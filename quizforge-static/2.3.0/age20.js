(()=>{
'use strict';
const {int,pick,fmt,make,round,comb,lcm,gcd}=window.QF;
function age20(d,v,r){let a,b,c,n,x,y,arr,sum;
 if(d===1){
  if(v===0){arr=Array.from({length:7},()=>int(r,1,150));sum=arr.reduce((s,n)=>s+n,0);c=round(sum/7,2);return make(20,d,v,'Statistica',`Media del campione ${arr.join(', ')}?`,fmt(c),[fmt(c+2),fmt(c-2),sum],`Somma ${sum}, divisa per 7: ${fmt(c)}.`)}
  if(v===1){arr=Array.from({length:9},()=>int(r,1,99)).sort((x,y)=>x-y);c=arr[4];return make(20,d,v,'Statistica',`Mediana di ${arr.join(', ')}?`,c,[arr[3],arr[5],round(arr.reduce((s,n)=>s+n,0)/9,2)],`Con 9 valori ordinati, la mediana è il quinto: ${c}.`)}
  if(v===2){a=int(r,10,100);b=int(r,2,30);c=round(a/b,2);return make(20,d,v,'Rapporti',`Rapporto ${a}:${b}, in forma decimale?`,fmt(c),[fmt(b/a),fmt(a-b),fmt(c+1)],`${a}/${b}=${fmt(c)}.`)}
  a=int(r,100,5000);b=pick(r,[5,10,15,20,25]);c=a*(1+b/100);return make(20,d,v,'Finanza',`Capitale ${a} € con rendimento semplice del ${b}%: montante dopo un periodo?`,`${fmt(c)} €`,[`${fmt(a+b)} €`,`${fmt(a*b/100)} €`,`${fmt(a*(1-b/100))} €`],`${a}×(1+${b}/100)=${fmt(c)} €.`)
 }
 if(d===2){
  if(v===0){a=int(r,100,20000);b=int(r,1,99);c=Math.floor(a*b/100);return make(20,d,v,'Analisi dati',`Il ${b}% di ${a} righe: quante circa?`,c,[a-c,c+100,b],`${a}×${b}/100≈${c}.`)}
  if(v===1){a=int(r,2,200);b=int(r,2,50);c=round(a/b,3);return make(20,d,v,'Throughput',`${a} richieste in ${b} secondi: throughput medio?`,`${fmt(c)} req/s`,[`${a*b} req/s`,`${fmt(b/a)} req/s`,`${fmt(c+1)} req/s`],`${a}/${b}=${fmt(c)} req/s.`)}
  if(v===2){a=int(r,10,500);b=int(r,1,99);c=round(a*(1-b/100),2);return make(20,d,v,'Affidabilità',`${a} job con failure rate ${b}%: successi attesi?`,fmt(c),[fmt(a*b/100),fmt(a-b),fmt(c+b)],`${a}×(1−${b}/100)=${fmt(c)}.`)}
  a=int(r,1,50);b=int(r,1,50);c=round((a/(a+b))*100,2);return make(20,d,v,'Probabilità',`In un set con ${a} successi e ${b} fallimenti, percentuale di successo?`,`${fmt(c)}%`,[`${fmt(100-c)}%`,`${a}%`,`${fmt(a/b)}%`],`${a}/(${a}+${b})×100=${fmt(c)}%.`)
 }
 if(d===3){
  if(v===0){a=int(r,16,65536);c=round(Math.log2(a),2);return make(20,d,v,'Complessità',`Quanto vale log₂(${a}), circa?`,fmt(c),[fmt(c+1),fmt(c-1),a/2],`log₂(${a})≈${fmt(c)}.`)}
  if(v===1){a=int(r,2,20);b=int(r,2,12);c=a**b;return make(20,d,v,'Complessità',`Una ricerca esaustiva su ${b} variabili con ${a} stati ciascuna esplora quanti casi?`,c,[a*b,a+b,b**a],`${a}^${b}=${c}.`)}
  if(v===2){n=int(r,5,30);x=int(r,2,Math.min(8,n-1));c=comb(n,x);return make(20,d,v,'Combinatoria',`Quante combinazioni di ${x} elementi da ${n}?`,c,[n*x,c+n,x**n],`C(${n},${x})=${c}.`)}
  a=int(r,2,20);b=int(r,2,20);c=lcm(a,b);return make(20,d,v,'Scheduling',`Due task ricorrono ogni ${a} e ${b} minuti. Dopo quanti minuti coincidono?`,`${c} minuti`,[`${gcd(a,b)} minuti`,`${a+b} minuti`,`${a*b+1} minuti`],`La coincidenza avviene al mcm(${a},${b})=${c}.`)
 }
 if(d===4){
  if(v===0){n=pick(r,[24,25,26,27,28,29,30]);c=2**(32-n)-2;return make(20,d,v,'Reti',`Quanti host IPv4 utilizzabili offre una rete /${n}?`,c,[c+2,2**(32-n),Math.max(0,c-2)],`2^(32−${n})−2=${c}.`)}
  if(v===1){n=pick(r,[16,20,24,28]);c=2**(32-n);return make(20,d,v,'Reti',`Quanti indirizzi totali contiene una rete IPv4 /${n}?`,c,[c-2,c+2,32-n],`Gli indirizzi sono 2^(32−${n})=${c}.`)}
  if(v===2){a=int(r,1,255);b=int(r,1,255);c=a^b;return make(20,d,v,'Bitwise',`Quanto vale ${a} XOR ${b}?`,c,[a&b,a|b,a+b],`${a} XOR ${b}=${c}.`)}
  n=int(r,1,65535);c=n.toString(16).toUpperCase();return make(20,d,v,'Sistemi numerici',`Converti ${n} in esadecimale.`,c,[n.toString(2),n.toString(8),`${c}0`],`${n}₁₀=${c}₁₆.`)
 }
 if(v===0){a=int(r,2,20);b=int(r,2,20);c=a*b;return make(20,d,v,'Big-O',`Due cicli annidati eseguono rispettivamente ${a} e ${b} iterazioni. Iterazioni totali?`,c,[a+b,Math.max(a,b),c+a],`${a}×${b}=${c}.`)}
 if(v===1){a=int(r,100,10000);b=pick(r,[2,4,5,10]);c=Math.ceil(a/b);return make(20,d,v,'Sharding',`${a} record distribuiti uniformemente su ${b} shard: massimo atteso per shard?`,c,[a*b,a-b,Math.floor(a/b)+b],`ceil(${a}/${b})=${c}.`)}
 if(v===2){a=int(r,2,20);b=int(r,2,20);c=a+b-a*b/100;return make(20,d,v,'Rischio',`Due controlli riducono il rischio del ${a}% e del ${b}% in modo indipendente. Riduzione combinata?`,`${fmt(c)}%`,[`${a+b}%`,`${fmt(a*b/100)}%`,`${fmt(Math.abs(a-b))}%`],`a+b−ab/100=${fmt(c)}%.`)}
 a=int(r,2,12);b=int(r,2,12);c=a*b;return make(20,d,v,'Capacità',`${a} nodi gestiscono ${b} richieste/s ciascuno. Capacità teorica totale?`,`${c} req/s`,[`${a+b} req/s`,`${Math.max(a,b)} req/s`,`${c+b} req/s`],`${a}×${b}=${c} req/s.`)
}
window.QF.age20=age20;
})();
