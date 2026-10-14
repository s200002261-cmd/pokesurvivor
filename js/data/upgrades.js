/* ============ upgrades.js — mejoras permanentes entre runs ============
 * Se compran con Pokémonedas en el menú. `per` es lo que da cada nivel.
 */
G.Upgrades = (() => {
  const LIST = [
    { id: 'hp',     icon: 'heart', name: '生命力',      unit: '+8 生命值',            max: 10, base: 60,  grow: 1.35 },
    { id: 'atk',    icon: 'fist', name: '力量',         unit: '+4% 傷害',           max: 10, base: 80,  grow: 1.38 },
    { id: 'spd',    icon: 'boot', name: '步伐',        unit: '+3% 移動速度',      max: 8,  base: 70,  grow: 1.4 },
    { id: 'cd',     icon: 'clock', name: '反射神經',       unit: '-3% 冷卻時間',        max: 8,  base: 90,  grow: 1.42 },
    { id: 'def',    icon: 'shield', name: '防護',         unit: '+2% 防禦',        max: 8,  base: 80,  grow: 1.4 },
    { id: 'regen',  icon: 'sprout', name: '自我再生',       unit: '+0.2 生命值／秒',        max: 5,  base: 120, grow: 1.5 },
    { id: 'magnet', icon: 'magnet', name: '磁力',           unit: '+12% 拾取範圍',      max: 6,  base: 50,  grow: 1.4 },
    { id: 'xp',     icon: 'book', name: '智慧',      unit: '+5% 經驗值',    max: 8,  base: 100, grow: 1.42 },
    { id: 'coins',  icon: 'coin', name: '幸運',        unit: '+8% 寶可夢幣',    max: 8,  base: 120, grow: 1.45 },
    { id: 'moves',  icon: 'cards', name: '招式欄位',     unit: '開局可使用 2 個招式', max: 1, base: 1500, grow: 1 },
    { id: 'crit',   icon: 'star', name: '會心一擊',  unit: '會心一擊率 +3%（傷害 ×1.5）', max: 10, base: 90, grow: 1.4 },
    { id: 'reroll', icon: 'up', name: '卡牌重抽', unit: '每場可額外重抽 1 次升級卡牌', max: 5, base: 150, grow: 1.6 },
    { id: 'ban',    icon: 'ban', name: '招式封鎖',           unit: '封鎖 1 個招式，使其不再出現在卡牌選項', max: 3, base: 300, grow: 1.9 }
  ];
  const BY = {};
  for (const u of LIST) BY[u.id] = u;

  function cost(id, lvl) {
    const u = BY[id];
    return Math.round(u.base * Math.pow(u.grow, lvl) / 10) * 10;
  }

  /** Niveles comprados -> modificadores para G.Player. */
  function perks(levels = {}) {
    // Nunca por encima del máximo (una partida editada a mano no da más poder).
    const L = id => Math.max(0, Math.min(BY[id].max, Math.floor(+levels[id] || 0)));
    return {
      hp: L('hp') * 8,
      atkMul: 1 + L('atk') * 0.04,
      spdMul: 1 + L('spd') * 0.03,
      cdMul: 1 - L('cd') * 0.03,
      dmgReduce: L('def') * 0.02,
      regen: L('regen') * 0.2,
      magnetMul: 1 + L('magnet') * 0.12,
      xpMul: 1 + L('xp') * 0.05,
      coinMul: 1 + L('coins') * 0.08,
      startMoves: 1 + L('moves'),
      crit: L('crit') * 0.03,
      rerolls: L('reroll'),
      bans: L('ban')
    };
  }

  return { LIST, BY, cost, perks };
})();
