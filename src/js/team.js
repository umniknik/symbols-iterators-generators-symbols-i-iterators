export default class Team {
  constructor(obj) {
    this.obj = obj;
  }

  team() {
    let current = 0;
    const objj = this.obj;

    this.obj[Symbol.iterator] = function () {
      return {
        next() {
          if (current < objj.length) {
            return {
              done: false,
              value: objj[current++],
            };
          }
          return {
            done: true,
          };
        },
      };
    };

    return this.obj; // Возвращаем массив членов команды
  }
}
