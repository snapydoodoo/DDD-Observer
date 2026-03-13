import { Product } from "../domain/product.js";

export const LowStockObserver = (product: Product) => {
  if (product.stock > 0 && product.stock < 5) {
    console.log(`[ALERT]: ${product.name} is low on stock (${product.stock} left). Triggering reorder...`);
  }
};

export const OutOfStockObserver = (product: Product) => {
  if (product.stock === 0) {
    console.log(`[UI UPDATE]: ${product.name} is out of stock. Marking as 'Unavailable' on website.`);
  }
};