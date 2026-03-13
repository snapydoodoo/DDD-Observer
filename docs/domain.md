# Domain Logic: Inventory Management

## Business Rules
1. **Integrity:** Stock cannot be reduced below 0.
2. **Reactivity:** The Domain notifies the system when stock changes, but does not handle the "how" (Email, SMS, DB updates).

## Pattern: Observer
We use the **Observer Pattern** to decouple the `Product` entity from infrastructure concerns.
- **Subject:** `Product` class.
- **Observers:** Functions that react to `StockLevel` changes.


