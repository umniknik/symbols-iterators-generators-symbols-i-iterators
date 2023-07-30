import Team from './team';

const char0 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char1 = {
  name: 'Воин',
  type: 'Boin',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Маг',
  type: 'MAG',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char = [char0, char1, char2];

const team = new Team(char);

const iterator = team.team()[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
