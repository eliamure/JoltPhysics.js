(()=>{
'use strict';
const {int,pick,fmt,make,round,prime,gcd,lcm}=window.QF;
function age13(d,v,r){let a,b,c,n,x,y;
 if(d===1){
  if(v===0){a=pick(r,[5,10,20,25,50,75]);b=20*int(r,1,100);c=b*a/100;return make(13,d,v,'Percentuali',`Quanto vale il ${a}% di ${b}?`,c,[b-a,c+a,c*10],`${b} × ${a}/100 = ${c}.`)}
  if(v===1){a=int(r,20,500);b=pick(r,[10,20,25,50]);c=a*(1+b/100);return make(13,d,v,'Percentuali',`Aumenta ${a} del ${b}%.`,fmt(c),[fmt(a+b),fmt(a*(1-b/100)),fmt(c+1)],`Incremento = ${fmt(a*b/100)}; totale = ${fmt(c)}.`)}
  if(v===2){a=int(r,100,900);b=pick(r,[10,20,25,40,50]);c=a*(1-b/100);return make(13,d,v,'Sconti',`Un prodotto da ${a} € è scontato del ${b}%. Prezzo finale?`,`${fmt(c)} €`,[`${fmt(a-b)} €`,`${fmt(a*b/100)} €`,`${fmt(c+b)} €`],`Prezzo finale = ${a} × (1−${b}/100) = ${fmt(c)} €.`)}
  a=int(r,20,500);b=int(r,1,50);c=round(b/a*100,1);return make(13,d,v,'Percentuali',`${b} rappresenta quale percentuale di ${a}?`,`${fmt(c)}%`,[`${fmt(a/b)}%`,`${b}%`,`${fmt(c+10)}%`],`${b}/${a} × 100 = ${fmt(c)}%.`)
 }
 if(d===2){
  if(v===0){a=int(r,2,10);b=int(r,2,6);c=a**b;return make(13,d,v,'Potenze',`Quanto vale ${a}^${b}?`,c,[a*b,c+a,c-a],`${a} elevato a ${b} vale ${c}.`)}
  if(v===1){a=int(r,2,12);b=int(r,2,6);c=a**b;return make(13,d,v,'Potenze',`Qual è la base di una potenza con esponente ${b} e risultato ${c}?`,a,[b,a+1,c/b],`${a}^${b} = ${c}.`)}
  if(v===2){a=int(r,20,120);b=int(r,20,150-a);c=180-a-b;return make(13,d,v,'Geometria',`Due angoli di un triangolo misurano ${a}° e ${b}°. Il terzo?`,`${c}°`,[`${a+b}°`,`${c+10}°`,`${180-c}°`],`La somma interna è 180°, quindi ${c}°.`)}
  a=int(r,2,20);b=int(r,2,20);c=Math.sqrt(a*a+b*b);return make(13,d,v,'Geometria',`Triangolo rettangolo con cateti ${a} e ${b}: ipotenusa circa?`,fmt(c),[fmt(a+b),fmt(Math.abs(a-b)),fmt(c+2)],`Per Pitagora: √(${a}²+${b}²) = ${fmt(c)}.`)
 }
 if(d===3){
  if(v===0){a=int(r,2,12);x=int(r,1,50);b=int(r,0,40);c=a*x+b;return make(13,d,v,'Algebra',`Se ${a}x + ${b} = ${c}, quanto vale x?`,x,[x+1,x-1,Math.floor(c/a)],`${a}x=${c-b}; x=${x}.`)}
  if(v===1){a=int(r,2,12);x=int(r,1,50);b=int(r,1,40);c=a*x-b;return make(13,d,v,'Algebra',`Se ${a}x − ${b} = ${c}, quanto vale x?`,x,[x+1,x-1,Math.floor(c/a)],`${a}x=${c+b}; x=${x}.`)}
  if(v===2){a=int(r,1,20);b=int(r,1,20);c=2*a+3*b;return make(13,d,v,'Espressioni',`Calcola 2a + 3b con a=${a} e b=${b}.`,c,[5*(a+b),2*a+b,c+1],`2×${a}+3×${b}=${c}.`)}
  a=int(r,2,20);b=int(r,2,20);c=(a+b)*(a-b);return make(13,d,v,'Prodotti notevoli',`Quanto vale (${a}+${b})(${a}−${b})?`,c,[a*a+b*b,(a-b)**2,c+2*b],`Differenza di quadrati: ${a}²−${b}²=${c}.`)
 }
 if(d===4){
  if(v===0){n=int(r,1,1023);b=n.toString(2);return make(13,d,v,'Informatica',`Il binario ${b} in decimale vale?`,n,[n+1,n-1,n*2],`${b}₂ = ${n}₁₀.`)}
  if(v===1){n=int(r,20,800);c=prime(n)?'Sì':'No';return make(13,d,v,'Numeri primi',`Il numero ${n} è primo?`,c,[c==='Sì'?'No':'Sì','Solo se dispari','Non determinabile'],prime(n)?`${n} ha soltanto 1 e se stesso come divisori.`:`${n} possiede divisori ulteriori.`)}
  if(v===2){a=int(r,2,80);b=int(r,2,80);c=gcd(a,b);return make(13,d,v,'Divisibilità',`MCD tra ${a} e ${b}?`,c,[lcm(a,b),c+1,Math.max(1,c-1)],`Il massimo divisore comune è ${c}.`)}
  a=int(r,2,40);b=int(r,2,40);c=lcm(a,b);return make(13,d,v,'Divisibilità',`mcm tra ${a} e ${b}?`,c,[gcd(a,b),c+a,Math.max(1,c-b)],`Il minimo multiplo comune è ${c}.`)
 }
 if(v===0){a=int(r,1,20);b=int(r,1,10);c=a+5*b;return make(13,d,v,'Sequenze',`Termine successivo: ${a}, ${a+b}, ${a+2*b}, ${a+3*b}, ${a+4*b}, ...`,c,[c+b,c-1,a+4*b],`La differenza costante è ${b}; il prossimo è ${c}.`)}
 if(v===1){a=int(r,2,8);b=int(r,1,5);c=a*(3**b);return make(13,d,v,'Sequenze',`Se una sequenza parte da ${a} e triplica ${b} volte, quale valore raggiunge?`,c,[a*3*b,a**b,c+3],`${a} × 3^${b} = ${c}.`)}
 if(v===2){a=int(r,5,30);b=int(r,2,9);c=a*b;return make(13,d,v,'Velocità',`Percorri ${c} km in ${b} ore a velocità costante. Velocità media?`,`${a} km/h`,[`${c+b} km/h`,`${b} km/h`,`${a+b} km/h`],`${c} ÷ ${b} = ${a} km/h.`)}
 a=int(r,1,12);b=int(r,1,12);c=a*b;return make(13,d,v,'Probabilità',`Un dado a ${a} facce e uno a ${b} facce: quanti esiti ordinati possibili?`,c,[a+b,Math.max(a,b),c+1],`Principio di moltiplicazione: ${a}×${b}=${c}.`)
}
window.QF.age13=age13;
})();
