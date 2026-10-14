(async () => {
let events=[];
try { const response=await fetch('content/agenda.json',{cache:'no-store'}); if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();events=Array.isArray(data.events)?data.events:[]; }catch(err){console.error('Non se puido cargar a axenda',err);document.querySelector('#fixtures').textContent='Non foi posible cargar a axenda.';return;}
const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
let month=today.slice(0,7),selected='';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=s=>new Date(s+'T12:00:00').toLocaleDateString('gl-ES',{day:'numeric',month:'long',year:'numeric'});
const dateKey=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const matches=e=>(!document.querySelector('#region').value||e.region===document.querySelector('#region').value)&&(!document.querySelector('#weapon').value||e.weapon==='Todas'||e.weapon===document.querySelector('#weapon').value);
const card=e=>`<article class="fixture"><div class="fixture-date">${esc(fmt(e.start))}${e.end!==e.start?' — '+esc(fmt(e.end)):''}</div><span class="fixture-status">${e.provisional?'PROVISIONAL':'CONVOCATORIA'} · ${esc(e.region)}</span><h3>${esc(e.title)}</h3><p>${esc(e.category)} · ${esc(e.weapon)}<br>${esc(e.place)}</p>${e.note?'<p>'+esc(e.note)+'</p>':''}${e.source && /^[a-z0-9_-]+$/.test(e.source)?`<a href="assets/${e.source}.pdf" target="_blank" rel="noopener">Ver documento completo ↗</a>`:""}</article>`;
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
