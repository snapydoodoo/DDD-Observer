# Domain Example: Inventory Management

### Phase 1: Business Logic (The Rule)
The domain ensures stock never drops below zero.
```typescript
if (this.stock < quantity) {
    throw new Error("Insufficient stock for this order.");
}
this.stock -= quantity;
this.notifyStockChanged(this.stock);
