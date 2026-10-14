(() => {
const events=[];
function add(start,end,title,region,weapon,category,place='',note='',source='') {events.push({start,end:end||start,title,region,weapon,category,place:place||'Sede por confirmar',note,source:source|| (region==='Portugal'?'portugal':'galicia'),provisional:!source});}
add('2026-10-18','','I TGR de Espada · Miniesgrima e M15','Galicia','Espada','M9 · M11 · M13 · M15','Pavillón Pablo Beiro · Vigo','Apertura 09:00. M13: chamada 09:30, comezo 10:00. M9: 10:30 / 11:00. M15 e M11: 14:00 / 14:30. Inscrición pechada o 9 de outubro ás 12:00. A convocatoria específica substitúe a data antiga do borrador.','vigo');
add('2026-10-24','2026-10-25','TNR Espada Feminina · Liga Iberdrola','España','Espada','Absoluta','Polideportivo Barrio de Las Delicias · Valladolid','Sábado individual: chamada 13:00, comezo 14:00. Domingo equipos: chamada 09:00, comezo 10:00. Entrada libre.','valladolid');
[
['2026-10-17','2026-10-18','I TGR Espada Absoluto','Espada','Absoluta · M17'],
['2026-11-07','2026-11-08','II TGR Florete M15 · II Miniesgrima','Florete','M9 · M11 · M13 · M15'],
['2026-11-14','2026-11-15','II TGR Espada Absoluto · I TGR M17','Espada','Absoluta · M17'],
['2026-12-12','2026-12-13','II TGR Florete Absoluto e M17','Florete','Absoluta · M17'],
['2026-12-19','2026-12-20','I TGR Sabre M15 · I Miniesgrima','Sabre','M9 · M11 · M13 · M15'],
['2027-01-09','2027-01-10','II TGR Espada M15 · II Miniesgrima','Espada','M9 · M11 · M13 · M15'],
['2027-01-23','2027-01-24','III Encontro Miniesgrima Florete','Florete','M9 · M11 · M13'],
['2027-01-23','2027-01-24','II TGR Sabre M17 e Absoluto','Sabre','M17 · Absoluta'],
['2027-01-30','2027-01-31','II TGR Espada Absoluto (segundo borrador)','Espada','Absoluta'],
['2027-02-06','2027-02-07','II TGR Espada M17 · III Miniesgrima','Espada','M9 · M11 · M13 · M17'],
['2027-02-20','2027-02-21','II TGR Sabre M15 · II Miniesgrima','Sabre','M9 · M11 · M13 · M15'],
['2027-03-13','2027-03-14','Campionato Galicia M15 · Criterium Espada','Espada','M9 · M11 · M13 · M15'],
['2027-03-13','2027-03-14','III TGR Espada Absoluto','Espada','Absoluta'],
['2027-03-20','2027-03-21','III TGR Florete Absoluto','Florete','Absoluta'],
['2027-04-03','2027-04-04','Campionato Galicia M15 · Criterium Florete','Florete','M11 · M13 · M15'],
['2027-04-10','2027-04-11','III TGR Sabre Absoluto · Miniesgrima','Sabre','M9 · M11 · M13 · Absoluta'],
['2027-05-29','2027-05-30','Campionato Galicia Sabre Mini e M15','Sabre','M9 · M11 · M13 · M15']
].forEach(r=>add(r[0],r[1],r[2],'Galicia',r[3],r[4]));
[
['2026-10-17','2026-10-18','Jornadas Técnicas','A definir'],
['2026-10-24','2026-10-25','Circuito Juvenil I','Iniciados · Cadetes','Proposta: Clube CPM'],
['2026-10-24','','Circuito Veteranos I','Veteranos','Proposta: Clube CPM'],
['2026-10-31','','Circuito Juniores I','Juniores'],
['2026-11-01','','Circuito Seniores I','Seniores'],
['2026-11-07','2026-11-08','Curso de Arbitragem Nacional','Arbitraxe','Norte · por definir'],
['2026-11-21','2026-11-22','Encontro Kids I','Benjamins · Infantis','Proposta: Clube NGD'],
['2026-12-19','2026-12-20','Torneio JUN II e SEN II','Juniores · Seniores'],
['2027-01-16','2027-01-17','Circuito Juvenil II','Iniciados · Cadetes'],
['2027-01-17','','Circuito Veteranos II','Veteranos'],
['2027-01-23','2027-01-24','Encontro Kids II','Benjamins · Infantis'],
['2027-01-30','2027-01-31','Estágio Nacional','Cadetes · Juniores'],
['2027-02-06','2027-02-07','Torneio Margarida Martins · JUN III e SEN III','Juniores · Seniores'],
['2027-02-27','2027-02-28','Encontro Kids III','Benjamins · Infantis'],
['2027-03-06','2027-03-07','Campeonato Nacional Cadetes','Cadetes'],
['2027-03-20','2027-03-21','Torneio Artur Moreira · JUN IV e SEN IV','Juniores · Seniores'],
['2027-04-03','2027-04-04','Encontro Kids IV','Benjamins · Infantis'],
['2027-04-24','2027-04-25','Campeonato Nacional Juniores','Juniores'],
['2027-05-02','','Campeonato Nacional Veteranos','Veteranos'],
['2027-05-08','2027-05-09','Torneio João Pedro Faria · JUN V e SEN V','Juniores · Seniores'],
['2027-05-22','2027-05-23','Finais Nacionais Circuito Juvenil','Iniciados · Cadetes'],
['2027-05-29','2027-05-30','Encontro Kids V','Benjamins · Infantis'],
['2027-06-05','2027-06-06','Campeonato Nacional Seniores','Seniores']
].forEach(r=>add(r[0],r[1],r[2],'Portugal','Todas',r[3],r[4]));
const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
let month=today.slice(0,7),selected='';
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=s=>new Date(s+'T12:00:00').toLocaleDateString('gl-ES',{day:'numeric',month:'long',year:'numeric'});
const dateKey=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const matches=e=>(!document.querySelector('#region').value||e.region===document.querySelector('#region').value)&&(!document.querySelector('#weapon').value||e.weapon==='Todas'||e.weapon===document.querySelector('#weapon').value);
const card=e=>`<article class="fixture"><div class="fixture-date">${esc(fmt(e.start))}${e.end!==e.start?' — '+esc(fmt(e.end)):''}</div><span class="fixture-status">${e.provisional?'PROVISIONAL':'CONVOCATORIA'} · ${esc(e.region)}</span><h3>${esc(e.title)}</h3><p>${esc(e.category)} · ${esc(e.weapon)}<br>${esc(e.place)}</p>${e.note?'<p>'+esc(e.note)+'</p>':''}<a href="assets/${e.source}.pdf" target="_blank" rel="noopener">Ver documento completo ↗</a></article>`;
function render(){
document.querySelector('#today-label').textContent='Hoxe: '+fmt(today)+' · Europe/Madrid';
const [y,m]=month.split('-').map(Number), first=new Date(y,m-1,1),last=new Date(y,m,0).getDate();
document.querySelector('#month-title').textContent=first.toLocaleDateString('gl-ES',{month:'long',year:'numeric'});
let cells=Array.from({length:(first.getDay()+6)%7},()=>'<span class="day empty"></span>');
for(let n=1;n<=last;n++){const key=month+'-'+String(n).padStart(2,'0'),list=events.filter(e=>matches(e)&&e.start<=key&&e.end>=key);cells.push(`<button type="button" class="day ${key===today?'is-today':''} ${key<today?'is-past':''} ${selected===key?'selected':''}" data-day="${key}" aria-label="${esc(fmt(key))}: ${list.length} eventos"><strong>${n}</strong>${list.length?'<span>'+list.length+' cita'+(list.length>1?'s':'')+'</span>':''}</button>`);}
document.querySelector('#days').innerHTML=cells.join('');
const list=events.filter(matches).filter(e=>selected?e.start<=selected&&e.end>=selected:document.querySelector('#show-past').checked||e.end>=today).sort((a,b)=>a.start.localeCompare(b.start));
document.querySelector('#list-title').textContent=selected?'Eventos do '+fmt(selected):'Próximas citas · '+list.length;
const container=document.querySelector('#fixtures');
const previouslyOpen=new Set([...container.querySelectorAll('details.month-events[open]')].map(el=>el.dataset.month));
if(selected){container.innerHTML=list.map(card).join('')||'<p>Non hai citas nesta selección. Proba outro día ou filtro.</p>';}
else if(!list.length){container.innerHTML='<p>Non hai citas nesta selección. Proba outro día ou filtro.</p>';}
else{
  const groups=new Map();
  list.forEach(e=>{const key=e.start.slice(0,7);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(e);});
  const firstMonth=groups.keys().next().value;
  container.innerHTML=[...groups].map(([key,items])=>{
    const [year,mon]=key.split('-').map(Number);
    const label=new Date(year,mon-1,1).toLocaleDateString('gl-ES',{month:'long',year:'numeric'});
    const expanded=previouslyOpen.size?previouslyOpen.has(key):key===firstMonth;
    return '<details class="month-events" data-month="'+key+'" '+(expanded?'open':'')+'><summary><span class="month-title">'+esc(label)+'</span><span class="month-count">'+items.length+' evento'+(items.length!==1?'s':'')+'</span><span class="month-chevron" aria-hidden="true">⌄</span></summary><div class="month-fixtures">'+items.map(card).join('')+'</div></details>';
  }).join('');
}
document.querySelector('#clear-day').hidden=!selected;
document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=b.dataset.day;render();document.querySelector('#list-title').scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelectorAll('[data-expires]').forEach(el=>el.hidden=el.dataset.expires<today);
}
document.querySelectorAll('#region,#weapon,#show-past').forEach(el=>el.addEventListener('change',()=>{selected='';render()}));
document.querySelector('#clear-day').onclick=()=>{selected='';render()};
document.querySelectorAll('[data-month]').forEach(b=>b.onclick=()=>{const [y,m]=month.split('-').map(Number);month=dateKey(new Date(y,m-1+Number(b.dataset.month),1)).slice(0,7);selected='';render()});
document.querySelector('#go-today').onclick=()=>{month=today.slice(0,7);selected='';render()};render();
window.cecviCalendar={events,today};
})();
