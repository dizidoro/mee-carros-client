export class Year {
  static readonly years: Year[] =
    Array.from(new Array(30),
      (val, index) => new Year((new Date()).getFullYear() - index));

  readonly value: number;

  private constructor(value) {
    this.value = value;
  }
}
