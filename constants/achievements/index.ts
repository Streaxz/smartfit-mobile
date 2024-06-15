type TAchieve = Record<number, string>;

export const Achievements: TAchieve = {
  0: 'Новобранец',
  5: 'Начинающий Атлет',
  10: 'Исследователь Фитнеса',
  15: 'Ученик Спорта',
  20: 'Энтузиаст Тренировок',
  25: 'Посвященный Спортсмен',
  30: 'Испытатель Сил',
  35: 'Активный Участник',
  40: 'Уверенный Атлет',
  45: 'Любитель Фитнеса',
  50: 'Опытный Спортсмен',
  55: 'Продвинутый Тренер',
  60: 'Умелый Воин',
  65: 'Мастер Спорта',
  70: 'Эксперт Тренировок',
  75: 'Профессионал Фитнеса',
  80: 'Ветеран Спорта',
  85: 'Гуру Тренировок',
  90: 'Легенда Фитнеса',
  95: 'Икона Спорта',
};

export const getAchievement: (level: number) => string = (lvl) => {
  return Achievements[Math.floor(lvl / 5) * 5];
};