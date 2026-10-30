import {DEMO_STEPS} from './presentation.js';
const $=s=>document.querySelector(s),frame=$('#product'),total=DEMO_STEPS.reduce((n,s)=>n+s.seconds,0),starts=DEMO_STEPS.map((_,i)=>DEMO_STEPS.slice(0,i).reduce((n,s)=>n+s.seconds,0));
let elapsed=0,playing=false,started=false,ready=false,last=0,current=-1;
const time=n=>Math.floor(n/60)+':'+String(Math.floor(n%60)).padStart(2,'0');
function fit(){frame.style.transform='scale('+$('#stage').clientWidth/1440+')';}
new ResizeObserver(fit).observe($('#stage'));fit();
$('#chapters').innerHTML=DEMO_STEPS.map((s,i)=>`<button data-step="${i}"><small>${String(i+1).padStart(2,'0')} · ${time(starts[i])}</small>${s.title}</button>`).join('');
function draw(force=false){const i=elapsed>=total?DEMO_STEPS.length-1:starts.findLastIndex(n=>n<=elapsed);if(i!==current||force){current=i;const s=DEMO_STEPS[i];$('#step-count').textContent=String(i+1).padStart(2,'0')+' / 08';$('#pillar').textContent=s.pillar;$('#step-title').textContent=s.title;$('#caption').textContent=s.caption;document.querySelectorAll('[data-step]').forEach((b,j)=>{b.classList.toggle('active',j===i);if(j===i)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});if(ready)frame.contentWindow.postMessage({type:'studio-demo-step',step:i},location.origin);}$('#seek').value=elapsed;$('#time').textContent=time(elapsed)+' / '+time(total);$('#play').textContent=playing?'Ⅱ Pause':elapsed>=total?'↺ Replay':'▶ Play';$('#play').setAttribute('aria-label',playing?'Pause walkthrough':elapsed>=total?'Replay walkthrough':'Play walkthrough');}
function begin(){started=true;$('#cover').hidden=true;$('#cover').style.display='none';$('#stage').scrollIntoView({block:'start'});if(elapsed>=total)elapsed=0;playing=true;last=performance.now();draw(true);}
$('#start').onclick=begin;$('#play').onclick=()=>{if(!started||elapsed>=total){begin();return;}playing=!playing;last=performance.now();draw();};
function jump(i){started=true;$('#cover').hidden=true;$('#cover').style.display='none';$('#stage').scrollIntoView({block:'start'});elapsed=starts[Math.max(0,Math.min(DEMO_STEPS.length-1,i))];last=performance.now();draw(true);}
$('#previous').onclick=()=>jump(current-1);$('#next').onclick=()=>jump(current+1);$('#restart').onclick=()=>{elapsed=0;begin();};$('#seek').oninput=e=>{started=true;$('#cover').style.display='none';elapsed=+e.target.value;last=performance.now();draw();};
$('#chapters').onclick=e=>{const b=e.target.closest('[data-step]');if(b)jump(+b.dataset.step);};
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==frame.contentWindow||e.data?.type!=='studio-demo-ready')return;ready=true;draw(true);});
document.addEventListener('visibilitychange',()=>{if(document.hidden){playing=false;draw();}last=performance.now();});
function tick(now){if(playing&&ready){elapsed=Math.min(total,elapsed+(now-last)/1000);if(elapsed===total)playing=false;draw();}last=now;requestAnimationFrame(tick);}draw();requestAnimationFrame(tick);
