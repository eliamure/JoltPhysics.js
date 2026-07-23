(()=>{
'use strict';
const {int,fmt,make,round,comb}=window.QF;
function age16(d,v,r){let a,b,c,n,x,y,arr,sum;
 if(d===1){
  if(v===0){arr=Array.from({length:5},()=>int(r,1,100));sum=arr.reduce((s,n)=>s+n,0);c=round(sum/arr.length,2);return make(16,d,v,'Statistica',`Media di ${arr.join(', ')}?`,fmt(c),[fmt(c+1),fmt(c-1),sum],`Somma ${sum}, divisa per ${arr.length}: ${fmt(c)}.`)}
  if(v===1){arr=Array.from({length:7},()=>int(r,1,80)).sort((x,y)=>x-y);c=arr[3];return make(16,d,v,'Statistica',`Mediana di ${arr.join(', ')}?`,c,[arr[2],arr[4],round(arr.reduce((s,n)=>s+n,0)/7,2)],`Con 7 valori ordinati, la mediana è il quarto: ${c}.`)}
  if(v===2){a=int(r,1,20);b=int(r,1,20);c=Math.abs(a-b);return make(16,d,v,'Valore assoluto',`Quanto vale |${a} − ${b}|?`,c,[a-b,a+b,c+1],`Il valore assoluto della differenza è ${c}.`)}
  a=int(r,2,30);b=int(r,2,30);c=round((a+b)/2,2);return make(16,d,v,'Media',`Media aritmetica tra ${a} e ${b}?`,fmt(c),[a+b,fmt(c+1),fmt(Math.abs(a-b))],`(${a}+${b})/2 = ${fmt(c)}.`)
 }
 if(d===2){
  if(v===0){a=int(r,2,80);b=int(r,1,30);c=a*b;return make(16,d,v,'Fisica',`Resistenza ${a} Ω e corrente ${b} A: tensione?`,`${c} V`,[`${a+b} V`,`${a} V`,`${b} V`],`Legge di Ohm: V=R×I=${c} V.`)}
  if(v===1){a=int(r,2,50);b=int(r,2,20);c=a/b;return make(16,d,v,'Fisica',`Una forza di ${a} N agisce su ${b} kg. Accelerazione?`,`${fmt(c)} m/s²`,[`${a*b} m/s²`,`${fmt(b/a)} m/s²`,`${fmt(c+1)} m/s²`],`a=F/m=${a}/${b}=${fmt(c)} m/s².`)}
  if(v===2){a=int(r,10,200);b=int(r,2,20);c=a*b;return make(16,d,v,'Energia',`Potenza ${a} W usata per ${b} s: energia?`,`${c} J`,[`${a+b} J`,`${fmt(a/b)} J`,`${c+b} J`],`E=P×t=${a}×${b}=${c} J.`)}
  a=int(r,10,200);b=int(r,2,20);c=a/b;return make(16,d,v,'Moto uniforme',`Percorso ${a} m in ${b} s: velocità media?`,`${fmt(c)} m/s`,[`${a*b} m/s`,`${fmt(b/a)} m/s`,`${fmt(c+2)} m/s`],`v=s/t=${a}/${b}=${fmt(c)} m/s.`)
 }
 if(d===3){
  if(v===0){a=int(r,2,12);b=int(r,2,8);c=a**b;return make(16,d,v,'Logaritmi',`Quanto vale log_${a}(${c})?`,b,[a,b+1,c/a],`${a}^${b}=${c}, quindi il logaritmo vale ${b}.`)}
  if(v===1){a=int(r,2,12);b=int(r,2,8);c=a**b;return make(16,d,v,'Logaritmi',`Se log_${a}(x)=${b}, quanto vale x?`,c,[a*b,a+b,c+a],`x=${a}^${b}=${c}.`)}
  if(v===2){a=int(r,1,20);b=int(r,1,20);c=int(r,1,20);x=b*b-4*a*c;return make(16,d,v,'Algebra',`Discriminante di ${a}x² + ${b}x + ${c}=0?`,x,[b*b+4*a*c,b-4*a*c,x+4],`Δ=b²−4ac=${x}.`)}
  a=int(r,1,12);b=int(r,1,12);x=a+b;y=a*b;c=`x = ${Math.min(a,b)} oppure x = ${Math.max(a,b)}`;return make(16,d,v,'Algebra',`Soluzioni di x² − ${x}x + ${y}=0?`,c,[`x = ${x}`,`x = ${-a} oppure x = ${-b}`,`x = 0 oppure x = ${y}`],`(x−${a})(x−${b})=0.`)
 }
 if(d===4){
  if(v===0){n=int(r,16,65535);b=n.toString(16).toUpperCase();return make(16,d,v,'Informatica',`L'esadecimale ${b} in decimale vale?`,n,[n+16,n-1,n*2],`${b}₁₆ = ${n}₁₀.`)}
  if(v===1){n=int(r,16,4095);b=n.toString(2);c=n.toString(16).toUpperCase();return make(16,d,v,'Informatica',`Converti ${b}₂ in esadecimale.`,c,[String(n),`${c}0`,n.toString(8)],`${b}₂ = ${c}₁₆.`)}
  if(v===2){a=int(r,2,20);b=int(r,2,20);c=a&b;return make(16,d,v,'Bitwise',`Quanto vale ${a} AND ${b} in decimale?`,c,[a|b,a^b,a+b],`${a} AND ${b} = ${c}.`)}
  a=int(r,1,20);b=int(r,1,8);c=a<<b;return make(16,d,v,'Bitwise',`Quanto vale ${a} << ${b}?`,c,[a*b,a+b,a**b],`Uno shift a sinistra di ${b} posizioni moltiplica per 2^${b}: ${c}.`)
 }
 if(v===0){a=int(r,100,5000);b=int(r,1,99);c=Math.floor(a*b/100);return make(16,d,v,'Dati',`Il ${b}% di ${a} record: quanti circa?`,c,[a-c,c+100,b],`${a}×${b}/100≈${c}.`)}
 if(v===1){a=int(r,16,8192);c=round(Math.log2(a),2);return make(16,d,v,'Complessità',`Quanto vale log₂(${a}), circa?`,fmt(c),[fmt(c+1),fmt(c-1),a/2],`log₂(${a})≈${fmt(c)}.`)}
 if(v===2){n=int(r,8,24);c=2**n;return make(16,d,v,'Combinatoria digitale',`Quante configurazioni rappresentano ${n} bit?`,c,[2*n,n**2,c-2],`Ogni bit ha 2 stati: 2^${n}=${c}.`)}
 n=int(r,6,20);x=int(r,2,Math.min(6,n-2));c=comb(n,x);return make(16,d,v,'Combinatoria',`Quante combinazioni di ${x} elementi da ${n}?`,c,[n*x,c+n,x**n],`C(${n},${x})=${c}.`)
}
window.QF.age16=age16;
})();
