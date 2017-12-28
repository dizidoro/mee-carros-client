export class Color {
  static readonly colors: Color[] = [
    new Color('BRANCO', 'Branco'),
    new Color('VERDE', 'Verde'),
    new Color('PRETO', 'Preto')

  ];
  readonly viewValue: string;
  readonly value: string;

  private constructor(value: string, viewValue: string) {
    this.value = value;
    this.viewValue = viewValue;
  }
}
