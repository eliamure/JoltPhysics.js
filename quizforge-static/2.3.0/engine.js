(()=>{
'use strict';
const {VERSION,rng,shuffle,int,age10,age13,age16,age20}=window.QF;
function generateQuestion(age,d,f,r){const v=f%4;if(age===10)return age10(d,v,r);if(age===13)return age13(d,v,r);if(age===16)return age16(d,v,r);return age20(d,v,r)}
function validate(q){if(!q||!q.q||!q.e||q.a.length!==4||new Set(q.a).size!==4||!q.a.includes(q.c))throw new Error(`Domanda non valida: ${JSON.stringify(q)}`);return q}
function buildQuiz(age,seed,count){const r=rng(`${VERSION}:${age}:${seed}:${count}`),out=[],seen=new Set();const perDifficulty=count/5;for(let d=1;d<=5;d++)for(let j=0;j<perDifficulty;j++){let q,attempt=0;do{const family=(j+int(r,0,3))%4;q=validate(generateQuestion(age,d,family,r));attempt++}while(seen.has(q.q)&&attempt<100);if(seen.has(q.q))throw new Error('Impossibile generare una domanda univoca');seen.add(q.q);q.a=shuffle(r,q.a);out.push(q)}return shuffleByDifficulty(r,out)}
function shuffleByDifficulty(r,items){const groups=new Map();for(const q of items){if(!groups.has(q.d))groups.set(q.d,[]);groups.get(q.d).push(q)}const out=[];for(const d of [...groups.keys()].sort((a,b)=>a-b))out.push(...shuffle(r,groups.get(d)));return out}
Object.assign(window.QF,{generateQuestion,validate,buildQuiz,shuffleByDifficulty});
})();
