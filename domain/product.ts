type StockObserver = (product: Product) => void;

export class Product {
  private observers: StockObserver[] = [];

  constructor(
    public readonly id: string,
    public name: string,
    private _stock: number
  ) {}

  get stock(): number {
    return this._stock;
  }

  // Phase 3: "Plug in" the observers
  public subscribe(observer: StockObserver): void {
    this.observers.push(observer);
  }

  // Phase 1: Write the logic
  public reduceStock(quantity: number): void {
    if (quantity > this._stock) {
      throw new Error(`Insufficient stock for ${this.name}.`);
    }

    this._stock -= quantity;

    // Phase 2: Call the observers
    this.notifyObservers();
  }

  private notifyObservers(): void {
    this.observers.forEach((callback) => callback(this));
  }
}