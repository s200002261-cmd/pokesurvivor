/* ============ items.js — objetos equipables (uno por run) ============
 * Se encuentran en los cofres (a veces en los normales, a menudo en los de
 * candado) y los sueltan los jefes. Sólo puedes llevar UNO; si encuentras
 * otro, eliges con cuál quedarte. Duran lo que dura la run.
 *
 *   on(pl)   se lo pones (lo que hace mientras lo llevas)
 *   off(pl)  se lo quitas (deshace lo de on)
 * Los que reaccionan a algo (golpe mortal, daño hecho...) los mira el
 * jugador con pl.hasItem(id).
 */
G.Items = (() => {
  const LIST = [
    { id: 'leftovers', name: '剩飯', desc: '每秒回復最大生命值的 1.5%。',
      on: p => { p.regenFlat += p.maxHp * 0.015; p._itemRegen = p.maxHp * 0.015; },
      off: p => { p.regenFlat -= p._itemRegen || 0; } },
    { id: 'choiceband', name: '講究頭帶', desc: '傷害提高 40%，但無法切換招式。',
      on: p => { p.atkMul *= 1.4; }, off: p => { p.atkMul /= 1.4; } },
    { id: 'quickclaw', name: '先制之爪', desc: '所有招式的冷卻時間縮短 20%。',
      on: p => { p.cdMul *= 0.8; }, off: p => { p.cdMul /= 0.8; } },
    { id: 'focussash', name: '氣勢披帶', desc: '受到原本會倒下的攻擊時，保留 1 點生命值（每 60 秒觸發一次）。',
      on: () => {}, off: () => {} },
    { id: 'shellbell', name: '貝殼之鈴', desc: '根據造成的傷害回復生命值。',
      on: () => {}, off: () => {} },
    { id: 'amuletcoin', name: '護符金幣', desc: '本次冒險結束時獲得的寶可夢幣增加 50%。',
      on: p => { p.coinMul *= 1.5; }, off: p => { p.coinMul /= 1.5; } },
    { id: 'luckyegg', name: '幸運蛋', desc: '獲得的經驗值增加 30%。',
      on: p => { p.xpMul *= 1.3; }, off: p => { p.xpMul /= 1.3; } },
    { id: 'lifeorb', name: '生命寶珠', desc: '傷害提高 30%，但每次攻擊會消耗少量生命值。',
      on: p => { p.atkMul *= 1.3; }, off: p => { p.atkMul /= 1.3; } },
    { id: 'choicescarf', name: '講究圍巾', desc: '移動速度提高 35%。',
      on: p => { p.spdMul *= 1.35; }, off: p => { p.spdMul /= 1.35; } },
    { id: 'rockyhelmet', name: '凸凸頭盔', desc: '以近身攻擊命中你的敵人會受到反傷。',
      on: () => {}, off: () => {} },
    { id: 'assaultvest', name: '突擊背心', desc: '受到的傷害降低 20%。',
      on: p => { p.dmgReduce += 0.2; }, off: p => { p.dmgReduce -= 0.2; } }
  ];
  const BY = {};
  for (const it of LIST) BY[it.id] = it;

  /** Uno al azar, distinto del que ya llevas. */
  function roll(except) {
    const pool = LIST.filter(i => i.id !== except);
    return G.U.pick(pool).id;
  }

  return { LIST, BY, roll };
})();
