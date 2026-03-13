import { Product } from "./domain/product.js";
import { LowStockObserver, OutOfStockObserver } from "./observers/InventoryHandelers.js";

// Rest of your code remains the same...

// 1. Initialize Domain Entity
const laptop = new Product("p1", "MacBook Pro", 10);

// 2. Attach Observers (The "Side Effects")
laptop.subscribe(LowStockObserver);
laptop.subscribe(OutOfStockObserver);

// 3. Execute Business Logic
console.log(`Initial stock: ${laptop.stock}`);

try {
  console.log("\n--- Selling 6 units ---");
  laptop.reduceStock(6); // Should trigger Low Stock (4 remaining)

  console.log("\n--- Selling 4 units ---");
  laptop.reduceStock(4); // Should trigger Out of Stock (0 remaining)

  console.log("\n--- Selling 1 unit ---");
  laptop.reduceStock(1); // Should throw Error
} catch (error: any) {
  console.error(`[ERROR]: ${error.message}`);
}