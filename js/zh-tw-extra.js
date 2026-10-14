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
function tr(value){if(typeof value!=='string'||!value.trim())return value;const t=value.trim();if(map.has(t))return value.replace(t,map.get(t));let m=t.match(/^You have\s+(\d+)\s+of\s+(\d+)$/i);if(m)return `已擁有 ${m[1]}／${m[2]}`;m=t.match(/^(\d+)\s+levels?$/i);if(m)return `${m[1]} 級`;m=t.match(/^Choose\s*\((\d+\/\d+)\)$/i);if(m)return `選擇（${m[1]}）`;return value;}
let busy=false,queued=false;
function run(){queued=false;if(busy||!document.body)return;busy=true;try{const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=walk.nextNode()){if(n.parentElement&&/^(SCRIPT|STYLE|TEXTAREA|PRE|CODE)$/.test(n.parentElement.tagName))continue;const next=tr(n.nodeValue);if(next!==n.nodeValue)n.nodeValue=next;}for(const el of document.querySelectorAll('[placeholder],[title],[aria-label]'))for(const a of ['placeholder','title','aria-label']){const v=el.getAttribute(a);if(v!==null){const t=tr(v);if(t!==v)el.setAttribute(a,t);}}}finally{busy=false;}}
function schedule(){if(!queued){queued=true;requestAnimationFrame(run);}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
new MutationObserver(()=>{if(!busy)schedule()}).observe(document.documentElement,{subtree:true,childList:true,characterData:true});
})();
