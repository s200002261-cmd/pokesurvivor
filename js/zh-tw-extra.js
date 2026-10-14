/* PokéSurvivor zh-TW: English / Spanish dynamic UI supplement. No gameplay changes. */
(()=>{'use strict';
const pairs={
'Vitality':'生命力','Strength':'力量','Stride':'步伐','Reflexes':'反射神經','Guard':'防護','Regeneration':'自我再生','Magnet':'磁力','Wisdom':'智慧','Luck':'幸運','Move slot':'招式欄位','Move slots':'招式欄位','Critical hit':'會心一擊','Reroll':'卡牌重抽','Ban':'招式封鎖','Max.':'已滿級','MAX':'已滿級','Max':'已滿級','Free':'不指定','Move shortcuts':'招式快捷欄','Choose':'選擇','Select':'選擇','Back':'返回','Upgrades':'強化','Upgrade':'強化','Pokémon':'寶可夢','Companion':'夥伴','Levels':'等級','Level':'等級',
'Vitalidad':'生命力','Fuerza':'力量','Paso':'步伐','Reflejos':'反射神經','Defensa':'防護','Regeneración':'自我再生','Imán':'磁力','Sabiduría':'智慧','Suerte':'幸運','Veto':'招式封鎖','Máx.':'已滿級','Libre':'不指定','Atajos de movimientos':'招式快捷欄',
'+8 HP':'生命值 +8','+8 health':'生命值 +8','+4% damage':'傷害 +4%','+3% speed':'移動速度 +3%','-3% cooldown':'冷卻時間 -3%','+2% defense':'防禦 +2%','+0.2 HP/s':'每秒回復 0.2 生命值','+12% pickup range':'拾取範圍 +12%','+5% experience':'經驗值 +5%','+8% coins':'寶可夢幣 +8%',
'+8 vida':'生命值 +8','+4% daño':'傷害 +4%','+3% velocidad':'移動速度 +3%','-3% recarga':'冷卻時間 -3%','+2% defensa':'防禦 +2%','+0.2 vida/s':'每秒回復 0.2 生命值','+12% recogida':'拾取範圍 +12%','+5% experiencia':'經驗值 +5%','+8% Pokémonedas':'寶可夢幣 +8%',
'Each Pokémon has its own upgrades: they only apply when you play with it.':'每隻寶可夢都有獨立的強化效果，只有使用該寶可夢時才會生效。',
'Cada Pokémon tiene sus propias mejoras: sólo cuentan cuando juegas con él.':'每隻寶可夢都有獨立的強化效果，只有使用該寶可夢時才會生效。',
'Move shortcuts':'招式快捷欄','Atajos de movimientos':'招式快捷欄',
'Choose which move always goes in each slot (keys 1-4 or the icons below), for muscle memory. If you do not have that many moves yet, it goes to the closest slot.':'設定每個欄位固定使用的招式（按鍵 1–4 或下方圖示）。若招式不足，會自動安排到最接近的欄位。',
'Elige qué movimiento va siempre en cada hueco (teclas 1-4 o los iconos de abajo), para la memoria muscular. Si aún no tienes tantos movimientos, va al hueco más cercano.':'設定每個欄位固定使用的招式（按鍵 1–4 或下方圖示）。若招式不足，會自動安排到最接近的欄位。',
'Johto Mystery':'城都地區的神祕寶可夢','Kanto Mystery':'關都地區的神祕寶可夢','Hoenn Mystery':'豐緣地區的神祕寶可夢','Sinnoh Mystery':'神奧地區的神祕寶可夢','Unova Mystery':'合眾地區的神祕寶可夢','Kalos Mystery':'卡洛斯地區的神祕寶可夢','Alola Mystery':'阿羅拉地區的神祕寶可夢','Galar Mystery':'伽勒爾地區的神祕寶可夢','Paldea Mystery':'帕底亞地區的神祕寶可夢',
'You have':'已擁有','of':'／','Owned':'已擁有','Available':'可獲得','Collection':'收藏','Gacha':'抽獎','Draw':'抽獎','Tickets':'抽獎券','Ticket':'抽獎券','Common':'普通','Rare':'稀有','Epic':'史詩','Legendary':'傳說','Shiny':'異色',
'Play':'開始遊戲','Settings':'設定','Friends':'好友','Missions':'任務','Achievements':'成就','Pokedex':'寶可夢圖鑑','Pokédex':'寶可夢圖鑑','Close':'關閉','Cancel':'取消','Confirm':'確認','Save':'儲存','Continue':'繼續','Pause':'暫停','Retry':'重試','Loading':'載入中','Login':'登入','Logout':'登出',
'Fire':'火','Water':'水','Grass':'草','Electric':'電','Ice':'冰','Fighting':'格鬥','Poison':'毒','Ground':'地面','Flying':'飛行','Psychic':'超能力','Bug':'蟲','Rock':'岩石','Ghost':'幽靈','Dragon':'龍','Dark':'惡','Steel':'鋼','Fairy':'妖精','Normal':'一般'
};
const map=new Map(Object.entries(pairs));

// Names are supplied by the existing official-name loader in js/zh-tw.js.
// Do not mutate G.DEX_BY or saved Pokemon IDs; only change displayed labels.
function translatePokemonName(label){
 try {
  const loc=window.PS_ZH_TW;
  if(!loc||!loc.pokemon||typeof G==='undefined'||!G.DEX_BY)return label;
  const m=/^(.+?)(?=\s*\(|\s*[·・]|$)/.exec(label);
  if(!m)return label;
  const source=m[1].trim();
  for(const [id,p] of Object.entries(G.DEX_BY)){
   if(!p||!p.name||p.name.toLowerCase()!==source.toLowerCase())continue;
   const translated=loc.pokemon[Number(id)];
   if(translated)return label.replace(source,translated);
  }
 }catch(e){}
 return label;
}

const upgrades={
'Fortune':'幸運','Repertoire':'招式欄位','Critical Hit':'會心一擊','Card reroll':'卡牌重抽',
'+8% PokéDollars':'寶可夢幣 +8%','Start with 2 moves':'開局可使用 2 個招式',
'+3% critical chance (x1.5 damage)':'會心一擊率 +3%（傷害 ×1.5）',
'+1 level-up card reroll per run':'每次冒險額外重抽 1 次升級卡牌',
'+12% pickup':'拾取範圍 +12%','+5% XP':'經驗值 +5%',
'Ban 1 move: it never shows up in your cards':'封鎖 1 個招式，使其不會出現在升級卡牌中',
'Choose which move always goes in each slot (keys 1-4 or the icons at the bottom), for muscle memory. If you do not have that many moves yet, it goes to the closest slot.':'設定每個欄位固定使用的招式（按鍵 1～4 或下方圖示），方便熟悉操作。若招式數量不足，會自動安排到最接近的欄位。',
'Swords Dance':'劍舞','Charizard':'噴火龍','Gengar':'耿鬼','Mewtwo':'超夢','Giratina':'騎拉帝納','Koraidon':'故勒頓','Fezandipiti':'吉雉雞','Rayquaza':'烈空坐','Bulbasaur':'妙蛙種子','Ivysaur':'妙蛙草',
'partner':'夥伴','niveles':'級',
'Ban 1 move: it never shows up in your cards':'封鎖 1 個招式，讓它不再出現在升級卡牌中',
'Each Pokémon has its own upgrades: they only count when you play with it.':'每隻寶可夢都有獨立的強化效果，只有使用該寶可夢時才會生效。',
'Choose which move always goes in each slot (keys 1-4 or the icons at the bottom), for muscle memory. If you do not have that many moves yet, it goes to the closest slot.':'設定每個欄位固定使用的招式（按鍵 1～4 或下方圖示），若招式不足則自動安排至最接近的欄位。',
};
for(const [a,b] of Object.entries(upgrades))map.set(a,b);
function tr(value){
 if(typeof value!=='string'||!value.trim())return value;
 const t=value.trim();if(map.has(t))return value.replace(t,map.get(t));
 let m=t.match(/^You have\s+(\d+)\s+of\s+(\d+)(.*)$/i);if(m)return value.replace(t,`已擁有 ${m[1]}／${m[2]}${m[3].replace(/\bshiny\b/gi,'異色')}`);
 m=t.match(/^(\d+)\s+(?:levels?|niveles)$/i);if(m)return value.replace(t,`${m[1]} 級`);
 m=t.match(/^Choose\s*\((\d+\/\d+)\)$/i);if(m)return value.replace(t,`選擇（${m[1]}）`);
 // Compound names, stat lines and native <select> options are single text nodes.
 let out=translatePokemonName(t);
 const sorted=[...map.entries()].filter(([a])=>a.length>=3).sort((a,b)=>b[0].length-a[0].length);
 for(const [a,b] of sorted){
   const esc=a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
   try{out=out.replace(new RegExp('(^|[^\\p{L}])('+esc+')(?=$|[^\\p{L}])','giu'),(_,pre)=>pre+b);}catch(e){}
 }
 out=out.replace(/\b(\d+)\s+niveles\b/gi,'$1 級').replace(/\bpartner\b/gi,'夥伴');
 return out===t?value:value.replace(t,out);
}
let busy=false,queued=false;
function run(){queued=false;if(busy||!document.body)return;busy=true;try{const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=walk.nextNode()){if(n.parentElement&&/^(SCRIPT|STYLE|TEXTAREA|PRE|CODE)$/.test(n.parentElement.tagName))continue;const next=tr(n.nodeValue);if(next!==n.nodeValue)n.nodeValue=next;}for(const el of document.querySelectorAll('[placeholder],[title],[aria-label]'))for(const a of ['placeholder','title','aria-label']){const v=el.getAttribute(a);if(v!==null){const t=tr(v);if(t!==v)el.setAttribute(a,t);}}}finally{busy=false;}}
function schedule(){if(!queued){queued=true;requestAnimationFrame(run);}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
new MutationObserver(()=>{if(!busy)schedule()}).observe(document.documentElement,{subtree:true,childList:true,characterData:true});
})();
