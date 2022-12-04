 export class RegExp1 extends RegExp {
    [Symbol.split](str, limit) {
      const result = RegExp.prototype[Symbol.split].call(this, str, limit);
      return result.map(x => `(${x})`);
    }
  }