import Team from '../team';

test('should iterate over the characters in the team', () => {
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

  expect(iterator.next().value).toEqual(char0);
  expect(iterator.next().value).toEqual(char1);
  expect(iterator.next().value).toEqual(char2);
  expect(iterator.next().done).toBeTruthy();
});
