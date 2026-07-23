(()=>{
'use strict';
const {int,pick,fmt,make}=window.QF;
function age10(d,v,r){let a,b,c,n,x;
 if(d===1){
  if(v===0){a=int(r,100,900);b=int(r,20,500);c=a+b;return make(10,d,v,'Calcolo',`Quanto fa ${a} + ${b}?`,c,[c+10,c-1,c+1],`${a} + ${b} = ${c}.`)}
  if(v===1){a=int(r,200,999);b=int(r,20,a-10);c=a-b;return make(10,d,v,'Calcolo',`Quanto fa ${a} − ${b}?`,c,[a+b,c+10,c-1],`${a} − ${b} = ${c}.`)}
  if(v===2){a=int(r,20,90);b=int(r,2,9);c=a+b*10;return make(10,d,v,'Valore posizionale',`Aggiungi ${b} decine al numero ${a}.`,c,[a+b,c-10,c+1],`${b} decine valgono ${b*10}; ${a}+${b*10}=${c}.`)}
  a=int(r,100,999);c=Math.round(a/10)*10;return make(10,d,v,'Arrotondamenti',`Arrotonda ${a} alla decina più vicina.`,c,[Math.floor(a/10)*10,Math.ceil(a/100)*100,c+10],`La cifra delle unità determina la decina più vicina: ${c}.`)
 }
 if(d===2){
  if(v===0){a=int(r,2,12);b=int(r,2,12);c=a*b;return make(10,d,v,'Tabelline',`Quanto fa ${a} × ${b}?`,c,[c+a,c-b,c+1],`${a} × ${b} = ${c}.`)}
  if(v===1){a=int(r,2,12);b=int(r,2,12);c=a*b;return make(10,d,v,'Divisioni',`Quanto fa ${c} ÷ ${a}?`,b,[a,b+1,Math.max(1,b-1)],`${c} ÷ ${a} = ${b}.`)}
  if(v===2){a=int(r,3,15);b=int(r,2,8);c=a*b;return make(10,d,v,'Problemi',`${b} scatole contengono ${a} matite ciascuna. Quante matite ci sono?`,c,[a+b,c-a,c+b],`${b} × ${a} = ${c} matite.`)}
  a=int(r,40,200);b=pick(r,[2,4,5,10]);c=a*b;return make(10,d,v,'Proporzioni semplici',`Un quaderno costa ${a} centesimi. Quanto costano ${b} quaderni?`,`${c} centesimi`,[`${a+b} centesimi`,`${c-a} centesimi`,`${c+100} centesimi`],`${a} × ${b} = ${c} centesimi.`)
 }
 if(d===3){
  if(v===0){a=int(r,3,30);b=int(r,3,25);c=a*b;return make(10,d,v,'Geometria',`Rettangolo ${a} cm × ${b} cm: qual è l'area?`,`${c} cm²`,[`${2*(a+b)} cm²`,`${a+b} cm²`,`${c+1} cm²`],`Area = ${a} × ${b} = ${c} cm².`)}
  if(v===1){a=int(r,3,30);b=int(r,3,25);c=2*(a+b);return make(10,d,v,'Geometria',`Rettangolo con lati ${a} cm e ${b} cm: qual è il perimetro?`,`${c} cm`,[`${a*b} cm`,`${a+b} cm`,`${c+2} cm`],`Perimetro = 2 × (${a}+${b}) = ${c} cm.`)}
  if(v===2){a=int(r,2,25);c=a*a;return make(10,d,v,'Geometria',`Un quadrato ha lato ${a} cm. Qual è l'area?`,`${c} cm²`,[`${4*a} cm²`,`${2*a} cm²`,`${c+a} cm²`],`Area del quadrato = lato × lato = ${c} cm².`)}
  a=int(r,2,20);c=4*a;return make(10,d,v,'Geometria',`Un quadrato ha lato ${a} cm. Qual è il perimetro?`,`${c} cm`,[`${a*a} cm`,`${2*a} cm`,`${c+4} cm`],`Perimetro = 4 × ${a} = ${c} cm.`)
 }
 if(d===4){
  if(v===0){b=pick(r,[2,3,4,5,10]);a=int(r,1,b-1);x=int(r,2,40);n=b*x;c=a*x;return make(10,d,v,'Frazioni',`Quanto vale ${a}/${b} di ${n}?`,c,[x,n-c,c+a],`${n} ÷ ${b} × ${a} = ${c}.`)}
  if(v===1){b=pick(r,[2,4,5,10]);x=int(r,2,40);n=b*x;return make(10,d,v,'Frazioni',`Quale frazione di ${n} è ${x}?`,`1/${b}`,[`${b}/1`,`1/${b+1}`,`${x}/${b}`],`${n} ÷ ${x} = ${b}, quindi ${x} è 1/${b} di ${n}.`)}
  if(v===2){a=int(r,1,9);b=int(r,a+1,12);c=b-a;return make(10,d,v,'Tempo',`Una lezione inizia alle ${a}:00 e finisce alle ${b}:00. Quanto dura?`,`${c} ore`,[`${a+b} ore`,`${c+1} ore`,`${b} ore`],`${b} − ${a} = ${c} ore.`)}
  a=int(r,1,9);b=int(r,1,9);c=100*a+10*b;return make(10,d,v,'Denaro',`Quanti centesimi sono ${a} euro e ${b*10} centesimi?`,`${c} centesimi`,[`${a+b*10} centesimi`,`${a*10+b} centesimi`,`${c+10} centesimi`],`${a} euro = ${a*100} centesimi; totale ${c}.`)
 }
 if(v===0){a=int(r,1,80);b=int(r,2,20);c=a+4*b;return make(10,d,v,'Sequenze',`Completa: ${a}, ${a+b}, ${a+2*b}, ${a+3*b}, ...`,c,[c+b,c-1,(a+3*b)*2],`Si aggiunge sempre ${b}: il prossimo numero è ${c}.`)}
 if(v===1){a=int(r,2,20);c=a*(2**4);return make(10,d,v,'Sequenze',`Completa: ${a}, ${a*2}, ${a*4}, ${a*8}, ...`,c,[a*10,a*12,a*18],`Ogni termine raddoppia: ${a*8} × 2 = ${c}.`)}
 if(v===2){a=int(r,10,99);b=int(r,10,99);c=Math.max(a,b);return make(10,d,v,'Logica',`Qual è il maggiore tra ${a}, ${b}, ${a-1} e ${b-1}?`,c,[Math.min(a,b),a-1,b-1],`Confrontando i valori, il maggiore è ${c}.`)}
 a=int(r,2,12);b=int(r,2,12);x=int(r,1,12);c=a+b-x;return make(10,d,v,'Problemi',`Hai ${a} figurine, ne ricevi ${b} e ne regali ${x}. Quante ne restano?`,c,[a+b,a-x,c+1],`${a}+${b}−${x}=${c}.`)
}
window.QF.age10=age10;
})();
