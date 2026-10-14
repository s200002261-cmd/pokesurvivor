/* PokéSurvivor Traditional Chinese UI overlay, first implementation. */
(()=>{'use strict';
const dict={"Gira el móvil":"請將手機橫向旋轉","PokéSurvivor se juega en horizontal.":"PokéSurvivor 需要橫向畫面。","Mundo Misterioso":"不可思議的世界","Entrar":"登入","Crear cuenta":"建立帳號","Nombre":"名稱","Contraseña":"密碼","Entrar con Google":"使用 Google 登入","Jugar como invitado":"以訪客身分遊玩","Guía":"遊戲指南","Pokédex":"寶可夢圖鑑","Aviso legal y privacidad":"法律聲明與隱私權","Tu personalidad es…":"你的性格是……","Tu compañero:":"你的夥伴：","¡Vamos juntos!":"一起出發吧！","Elegir otro":"重新選擇","Elige a tu compañero":"選擇你的夥伴","Los iniciales de todas las regiones, y dos amigos más.":"各地區的初始寶可夢，還有兩位特別夥伴。","Volver":"返回","Elegir":"選擇","Normal":"一般","Jugar":"開始遊戲","Entra en la mazmorra":"進入迷宮","Pokémon":"寶可夢","Tu colección":"你的收藏","Mejoras":"強化","Haz más fuerte cada run":"讓每次冒險都更強","Gacha":"抽獎","9 regiones · Pokémon y shinies":"9 個地區・寶可夢與異色寶可夢","Misiones":"任務","Misiones, logros y perfil":"任務、成就與個人資料","Amigos":"好友","Juega en grupo, hasta 4":"最多 4 人一起遊玩","Ajustes":"設定","Sonido, gráficos, controles y cuenta":"音效、畫面、操作與帳號","Salir":"登出","Aviso legal":"法律聲明","Novedades":"更新公告","Cerrar":"關閉","Apoyar el proyecto":"支持專案","Sonido":"音效","Gráficos":"畫面","Controles":"操作","Cuenta":"帳號","Acerca de":"關於","Proyecto de fan":"粉絲創作專案","es un juego hecho por fans,":"是一款由粉絲製作的遊戲，","gratuito y sin ánimo de lucro":"免費且非營利","Criptomonedas":"加密貨幣","Contenido de terceros":"第三方內容","Contacto y retirada de contenido":"聯絡與內容下架","Código fuente:":"原始碼：","Privacidad":"隱私權","Amigos y ranking: tu":"好友與排行榜：你的","apodo":"暱稱","Partidas en grupo: tu navegador se conecta":"多人遊戲：你的瀏覽器將直接連線","directamente":"直接","Borrar mi cuenta y mi partida":"刪除我的帳號與存檔","Cargando…":"載入中……","Sobrevive a las hordas con tu compañero Pokémon":"與寶可夢夥伴一起抵禦敵人的攻勢","Pulsa para empezar":"點擊開始","PokéSurvivor necesita JavaScript para funcionar. Actívalo para jugar.":"PokéSurvivor 需要 JavaScript，請啟用後再遊玩。","Guía del juego":"遊戲指南","Pokédex: todos los Pokémon jugables":"寶可夢圖鑑：所有可遊玩的寶可夢","Elige tu apodo":"設定你的暱稱","Guardar apodo":"儲存暱稱","Ahora no":"暫時不要","Ir a la sala":"前往房間","Añadir amigo":"新增好友","Sala":"房間","Menú":"選單","Salir de la sala":"離開房間","Invitar amigos":"邀請好友","Empezar partida":"開始遊戲","Logros":"成就","Perfil":"個人資料","Unirme":"加入","No, gracias":"不用了，謝謝","Tirar ×1 ·":"抽獎 ×1 ·","Tirar ×10 ·":"抽獎 ×10 ·","Continuar":"繼續","¡Nivel":"等級","Elige una recompensa ·":"選擇一項獎勵 ·","Cambiar opciones (":"重抽選項 (","¡Vínculo!":"羈絆！","Los movimientos unidos se lanzan a la vez y ocupan un solo hueco":"組合招式會同時施放，而且只佔用一個欄位","Atrás":"返回","¡Un objeto!":"獲得道具！","Sólo puedes llevar uno ·":"只能攜帶一件 ·","Pausa":"暫停","moverse ·":"移動 ·","movimiento ·":"招式 ·","ciclar ·":"切換 ·","pausa":"暫停","Arrastra el dedo para moverte · toca un ataque para cambiarlo":"滑動手指移動，點擊招式切換","Partida en grupo: el juego sigue mientras estás aquí.":"多人遊戲中，即使開啟此畫面遊戲仍會繼續。","Abandonar run":"放棄本次冒險","Has caído…":"你倒下了……","Volver al menú":"返回主選單","Ranking":"排行榜","· tiempo aguantado":"· 生存時間","Quitar filtro":"清除篩選","Inicio":"首頁","Iniciar sesión":"登入","Registrarse":"註冊","Cancelar":"取消","Confirmar":"確認","Guardar":"儲存","Sí":"是","No":"否","Listo":"完成","Aceptar":"確定","Error":"錯誤","Cargando":"載入中","Buscar":"搜尋","Nombre de usuario":"使用者名稱","Contraseña incorrecta":"密碼錯誤","Cerrar sesión":"登出","Invitar":"邀請","En línea":"在線上","Desconectado":"離線","Conectando…":"連線中……","Esperando…":"等待中……","Empezar":"開始","Nivel":"等級","Vida":"生命值","Ataque":"攻擊","Defensa":"防禦","Velocidad":"速度","Experiencia":"經驗值","Raro":"稀有","Legendario":"傳說","Shiny":"異色","Común":"普通","Épico":"史詩","Gratis":"免費","Colección":"收藏","Desbloquear":"解鎖","Equipar":"裝備","Eliminar":"刪除","Idioma":"語言","Español":"西班牙文","Inglés":"英文","English":"英文","Español (España)":"西班牙文","Todos":"全部","Todas":"全部","Fuego":"火","Agua":"水","Planta":"草","Eléctrico":"電","Hielo":"冰","Lucha":"格鬥","Veneno":"毒","Tierra":"地面","Volador":"飛行","Psíquico":"超能力","Bicho":"蟲","Roca":"岩石","Fantasma":"幽靈","Dragón":"龍","Siniestro":"惡","Acero":"鋼","Hada":"妖精","Play":"開始遊戲","Settings":"設定","Friends":"好友","Pokedex":"寶可夢圖鑑","Missions":"任務","Achievements":"成就","Upgrades":"強化","Back":"返回","Close":"關閉","Continue":"繼續","Pause":"暫停","Save":"儲存","Cancel":"取消","Confirm":"確認","Log in":"登入","Sign in with Google":"使用 Google 登入","Log out":"登出","Invite friends":"邀請好友","Start game":"開始遊戲","Choose":"選擇","Loading…":"載入中……","Fire":"火","Water":"水","Grass":"草","Electric":"電","Ice":"冰","Fighting":"格鬥","Poison":"毒","Ground":"地面","Flying":"飛行","Psychic":"超能力","Bug":"蟲","Rock":"岩石","Ghost":"幽靈","Dragon":"龍","Dark":"惡","Steel":"鋼","Fairy":"妖精"};
Object.assign(dict,{"Ascuas":"火花","Lanzallamas":"噴射火焰","Giro Fuego":"火焰旋渦","Onda Ígnea":"熱風","Llamarada":"大字爆炎","Sofoco":"過熱","Fuego Sagrado":"神聖之火","Erupción":"噴火","Pistola Agua":"水槍","Burbuja":"泡沫","Hidrobomba":"水炮","Escaldar":"熱水","Hidrocañón":"加農水炮","Acua Aro":"水流環","Látigo Cepa":"藤鞭","Hoja Afilada":"飛葉快刀","Tormenta Floral":"落英繽紛","Gigadrenado":"終極吸取","Hierba Lazo":"打草結","Rayo":"十萬伏特","Trueno":"打雷","Impactrueno":"電擊","Chispa":"電光","Voltiocambio":"伏特替換","Rayo Hielo":"冰凍光束","Ventisca":"暴風雪","Nieve Polvo":"細雪","Puño Hielo":"冰凍拳","Puño Fuego":"火焰拳","Puño Trueno":"雷電拳","Bola Sombra":"暗影球","Lengüetazo":"舌舔","Tinieblas":"黑夜魔影","Garra Umbría":"暗影爪","Pulso Umbrío":"惡之波動","Triturar":"咬碎","Mordisco":"咬住","Golpe Bajo":"突襲","Psíquico":"精神強念","Confusión":"念力","Psicorrayo":"幻象光線","Psicocorte":"精神利刃","Hiperrayo":"破壞光線","Rapidez":"高速星星","Ataque Rápido":"電光一閃","Placaje":"撞擊","Arañazo":"抓","Corte":"居合斬","Cuchillada":"劈開","Terremoto":"地震","Excavar":"挖洞","Bofetón Lodo":"擲泥","Lanzarrocas":"落石","Avalancha":"岩崩","Roca Afilada":"尖石攻擊","Onda Certera":"真氣彈","A Bocajarro":"近身戰","Puño Bala":"子彈拳","Puño Meteoro":"彗星拳","Cabeza de Hierro":"鐵頭","Cola Férrea":"鐵尾","Brillo Mágico":"魔法閃耀","Fuerza Lunar":"月亮之力","Viento Feérico":"妖精之風","Pulso Dragón":"龍之波動","Garra Dragón":"龍爪","Cometa Draco":"流星群","Enfado":"逆鱗","Tóxico":"劇毒","Bomba Lodo":"污泥炸彈","Ácido":"溶解液","Picotazo Veneno":"毒針","Picotazo":"啄","Tajo Aéreo":"空氣之刃","Vendaval":"暴風","Ataque Ala":"翅膀攻擊","Zumbido":"蟲鳴","Tijera X":"十字剪","Megacuerno":"超級角擊","Drenadoras":"寄生種子","Danza Espada":"劍舞","Danza Dragón":"龍之舞","Protección":"守住","Recuperación":"自我再生","Descanso":"睡覺","Deseo":"祈願","Sustituto":"替身","Ember":"火花","Flamethrower":"噴射火焰","Fire Spin":"火焰旋渦","Heat Wave":"熱風","Fire Blast":"大字爆炎","Overheat":"過熱","Sacred Fire":"神聖之火","Water Gun":"水槍","Hydro Pump":"水炮","Scald":"熱水","Vine Whip":"藤鞭","Razor Leaf":"飛葉快刀","Petal Blizzard":"落英繽紛","Giga Drain":"終極吸取","Grass Knot":"打草結","Thunderbolt":"十萬伏特","Thunder":"打雷","Thunder Shock":"電擊","Ice Beam":"冰凍光束","Blizzard":"暴風雪","Shadow Ball":"暗影球","Dark Pulse":"惡之波動","Psychic":"精神強念","Confusion":"念力","Hyper Beam":"破壞光線","Quick Attack":"電光一閃","Tackle":"撞擊","Scratch":"抓","Earthquake":"地震","Rock Slide":"岩崩","Stone Edge":"尖石攻擊","Close Combat":"近身戰","Bullet Punch":"子彈拳","Meteor Mash":"彗星拳","Iron Head":"鐵頭","Iron Tail":"鐵尾","Dazzling Gleam":"魔法閃耀","Moonblast":"月亮之力","Dragon Pulse":"龍之波動","Dragon Claw":"龍爪","Draco Meteor":"流星群","Outrage":"逆鱗","Sludge Bomb":"污泥炸彈","Air Slash":"空氣之刃","Hurricane":"暴風","X-Scissor":"十字剪","Megahorn":"超級角擊","Leech Seed":"寄生種子","Swords Dance":"劍舞","Dragon Dance":"龍之舞","Protect":"守住","Recover":"自我再生","Rest":"睡覺","Wish":"祈願","Substitute":"替身"});

// Upgrade page localization (UI strings only; mechanics untouched).
Object.assign(dict, {
  'Vitalidad': '生命力',
  'Fuerza': '力量',
  'Zancada': '步伐',
  'Reflejos': '反射神經',
  'Coraza': '護甲',
  'Síntesis': '生命再生',
  'Imán': '磁力',
  'Sabiduría': '智慧',
  'Fortuna': '幸運',
  'Repertorio': '招式擴充',
  'Golpe Crítico': '會心一擊',
  'Cambio de cartas': '卡牌重抽',
  'Veto': '招式封鎖',
  '+8 vida': '生命值 +8',
  '+4% daño': '傷害 +4%',
  '+3% velocidad': '移動速度 +3%',
  '-3% recarga': '冷卻時間 -3%',
  '+2% defensa': '防禦 +2%',
  '+0.2 vida/s': '每秒恢復 0.2 生命值',
  '+12% recogida': '拾取範圍 +12%',
  '+5% experiencia': '經驗值 +5%',
  '+8% Pokémonedas': '寶可夢幣 +8%',
  'Empiezas con 2 movimientos': '開局可攜帶 2 個招式',
  '+3% de críticos (x1,5 de daño)': '會心一擊機率 +3%（傷害 ×1.5）',
  '+1 cambio de cartas de nivel por run': '每次冒險增加 1 次升級卡牌重抽',
  'Bloquea 1 movimiento: no te sale en las cartas': '封鎖 1 個招式，使其不出現在升級卡牌中',
  'Atajos de movimientos': '招式快捷欄',
  'Elige qué movimiento va siempre en cada hueco (teclas 1-4 o los iconos de abajo), para la memoria muscular. Si aún no tienes tantos movimientos, va al hueco más cercano.': '設定各欄位固定出現的招式（按鍵 1–4 或下方圖示），方便熟悉操作。若招式數量不足，會放入最接近的欄位。',
  'Libre': '不指定',
  'Máx.': '已滿級',
  'Elige': '選擇',
  'Toca los movimientos que no quieres que te salgan en las cartas': '點選不想在升級卡牌中出現的招式',
  'El movimiento de inicio no se puede vetar.': '無法封鎖初始招式。',
  'compañero': '夥伴',
  'niveles': '級',
  'nivel': '等級'
});
const pokemon=Object.create(null);
const names=["妙蛙種子","妙蛙草","妙蛙花","小火龍","火恐龍","噴火龍","傑尼龜","卡咪龜","水箭龜","綠毛蟲","鐵甲蛹","巴大蝶","獨角蟲","鐵殼蛹","大針蜂","波波","比比鳥","大比鳥","小拉達","拉達","烈雀","大嘴雀","阿柏蛇","阿柏怪","皮卡丘","雷丘","穿山鼠","穿山王","尼多蘭","尼多娜","尼多后","尼多朗","尼多力諾","尼多王","皮皮","皮可西","六尾","九尾","胖丁","胖可丁","超音蝠","大嘴蝠","走路草","臭臭花","霸王花","派拉斯","派拉斯特","毛球","摩魯蛾","地鼠","三地鼠","喵喵","貓老大","可達鴨","哥達鴨","猴怪","火爆猴","卡蒂狗","風速狗","蚊香蝌蚪","蚊香君","蚊香泳士","凱西","勇基拉","胡地","腕力","豪力","怪力","喇叭芽","口呆花","大食花","瑪瑙水母","毒刺水母","小拳石","隆隆石","隆隆岩","小火馬","烈焰馬","呆呆獸","呆殼獸","小磁怪","三合一磁怪","大蔥鴨","嘟嘟","嘟嘟利","小海獅","白海獅","臭泥","臭臭泥","大舌貝","刺甲貝","鬼斯","鬼斯通","耿鬼","大岩蛇","催眠貘","引夢貘人","大鉗蟹","巨鉗蟹","霹靂電球","頑皮雷彈","蛋蛋","椰蛋樹","卡拉卡拉","嘎啦嘎啦","飛腿郎","快拳郎","大舌頭","瓦斯彈","雙彈瓦斯","獨角犀牛","鑽角犀獸","吉利蛋","蔓藤怪","袋獸","墨海馬","海刺龍","角金魚","金魚王","海星星","寶石海星","魔牆人偶","飛天螳螂","迷唇姐","電擊獸","鴨嘴火獸","凱羅斯","肯泰羅","鯉魚王","暴鯉龍","拉普拉斯","百變怪","伊布","水伊布","雷伊布","火伊布","多邊獸","菊石獸","多刺菊石獸","化石盔","鐮刀盔","化石翼龍","卡比獸","急凍鳥","閃電鳥","火焰鳥","迷你龍","哈克龍","快龍","超夢","夢幻"];
let officialReady=false;
for(let i=0;i<names.length;i++)pokemon[i+1]=names[i];
// The source is PokeAPI's official localized species-name CSV; language 4 = zh-Hant.
async function loadOfficial(){
 try{
  const response=await fetch('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon_species_names.csv',{cache:'force-cache'});
  if(!response.ok)throw Error('HTTP '+response.status);
  const csv=await response.text();let count=0;
  for(const line of csv.split(/\r?\n/)){
   const m=/^(\d+),4,([^,\r\n]+)/.exec(line);
   if(m){pokemon[Number(m[1])]=m[2];count++;}
  }
  officialReady=count>900;
  if(officialReady){try{localStorage.setItem('ps.zhTW.pokemon',JSON.stringify(pokemon));}catch(e){};refresh();}
 }catch(e){console.warn('zh-TW: official names unavailable, using cached/fallback names',e);}
}
try{const cached=JSON.parse(localStorage.getItem('ps.zhTW.pokemon')||'null');if(cached&&Object.keys(cached).length>900){Object.assign(pokemon,cached);officialReady=true;}}catch(e){}
const exact=new Map(Object.entries(dict));
let nameLookup=Object.create(null);
function rebuildNames(){
 try{
  if(typeof G!=='undefined'&&G.DEX)for(const p of G.DEX){if(p&&p.dex&&p.name&&pokemon[p.dex])nameLookup[p.name.toLowerCase()]=pokemon[p.dex];}
 }catch(e){}
}
function translate(s){if(!s||!s.trim())return s;
 const raw=s.trim();if(exact.has(raw))return s.replace(raw,exact.get(raw));
 const dynamic=raw.match(/^Elegir \(\d+\/\d+\)$/);if(dynamic)return s.replace(raw, '選擇 '+raw.slice(7));
 const companion=raw.match(/^\(compañero\)$/);if(companion)return s.replace(raw,'（夥伴）');
 const levels=raw.match(/^(\d+) niveles$/);if(levels)return s.replace(raw,levels[1]+' 級');
 const toast=raw.match(/^(.*): nivel (\d+)$/);if(toast)return s.replace(raw,toast[1]+': 等級 '+toast[2]);
 const veto=raw.match(/^Ya tienes (\d+) vetados: quita uno primero$/);if(veto)return s.replace(raw,'已封鎖 '+veto[1]+' 個招式，請先取消一個');
 const key=raw.toLowerCase();if(nameLookup[key])return s.replace(raw,nameLookup[key]);
 let out=s;
 // Only replace full token occurrences; avoid changing player-entered text and URLs.
 for(const [en,zh] of Object.entries(nameLookup)){
  if(en.length<3||!out.toLowerCase().includes(en))continue;
  const escaped=en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  try{out=out.replace(new RegExp('(^|[^\\p{L}])('+escaped+')(?=$|[^\\p{L}])','giu'),(_,before)=>before+zh);}catch(e){}
 }
 for(const [a,b] of exact){if(a.length<5||!out.includes(a))continue;
  // Full phrase replacement only, to prevent corrupting embedded dynamic data.
  if(out.trim()===a) return out.replace(a,b);
 }
 return out;
}
const ignored=new Set(['SCRIPT','STYLE','TEXTAREA','INPUT','OPTION','CODE','PRE']);
function allowed(el){return !!el&&!el.closest('[translate="no"], [contenteditable="true"]')&&!ignored.has(el.tagName);}
function walk(root){if(!root)return;
 if(root.nodeType===3){if(!allowed(root.parentElement))return;const s=root.nodeValue,t=translate(s);if(t!==s)root.nodeValue=t;return;}
 if(root.nodeType!==1)return;if(!allowed(root))return;
 for(const attr of ['placeholder','title','aria-label'])if(root.hasAttribute(attr)){const old=root.getAttribute(attr),next=translate(old);if(old!==next)root.setAttribute(attr,next);}
 for(const child of [...root.childNodes])walk(child);
}
let busy=false,queued=false;
function refresh(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;if(busy)return;busy=true;rebuildNames();try{walk(document.body)}finally{busy=false;}})}
function observe(){if(!document.body)return;refresh();new MutationObserver(()=>{if(!busy)refresh()}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','title','aria-label']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observe,{once:true});else observe();
// Localize canvas labels without altering game logic.
for(const method of ['fillText','strokeText']){
 const original=CanvasRenderingContext2D.prototype[method];
 CanvasRenderingContext2D.prototype[method]=function(text,...args){return original.call(this,typeof text==='string'?translate(text):text,...args)};
}
for(const method of ['alert','confirm']){const old=window[method];window[method]=function(message){return old.call(window,typeof message==='string'?translate(message):message)}}
window.PS_ZH_TW={translate,pokemon,refresh,get officialReady(){return officialReady;}};
loadOfficial();
let attempts=0;const init=setInterval(()=>{refresh();if(++attempts>=12)clearInterval(init);},750);
})();