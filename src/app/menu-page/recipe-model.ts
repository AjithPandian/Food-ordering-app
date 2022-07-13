export class Recipe {
  constructor(
    public name: string,
    public type: string,
    public cuisine: string,
    public availability: Object,
    public price: number
  ) {}
}
