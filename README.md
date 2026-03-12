# DDD + Observer Pattern: Inventory Management 🚀

This project demonstrates how to implement **Domain-Driven Design (DDD)** principles using the **Observer Pattern**. The goal is to keep the "Business Logic" (the Domain) pure and isolated from "Side Effects" (Infrastructure/Technical concerns) like logging, UI updates, or external notifications.

---

## 🏗 Project Architecture

We follow a layered approach to ensure the code is maintainable and testable:

* **/domain**: Contains the **Aggregate Roots** and **Entities**. This layer has zero dependencies. It only cares about business rules (e.g., `Product.ts`).
* **/observers**: Contains the **Domain Event Handlers**. These are the "listeners" that react when something happens in the domain (e.g., `InventoryHandlers.ts`).
* **index.ts**: The **Application Service** that wires the domain objects to their observers and executes the use cases.

---

## 🛠 Business Rules (The Domain)

In this E-Commerce example, we manage **Product Stock** with the following constraints:

1.  **Integrity**: A product's `StockLevel` can never drop below zero. If an order exceeds available stock, the domain throws an explicit `Error`.
2.  **State Change**: When `reduceStock(quantity)` is called, the state updates and notifies all subscribers.
3.  **Reactivity**: 
    * **Low Stock**: If stock falls below 5, a "Reorder" process is triggered.
    * **Out of Stock**: If stock hits 0, the UI is notified to mark the item as "Unavailable."

---

## 🔧 Technical Setup & ESM Imports

This project uses **ES Modules (ESM)** with `nodenext` module resolution. 

> [!IMPORTANT]
> **Mandatory Extensions:** Because of TypeScript's strict ESM requirements, **all relative imports must include the `.js` extension**, even though the source files are `.ts`.
>
> * ✅ `import { Product } from "./domain/Product.js";`
> * ❌ `import { Product } from "./domain/Product";`

### Quick Start
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the project:**
    ```bash
    npm start
    ```

---

## 📝 Implementation Logic

The implementation follows a 3-phase approach:

1.  **Phase 1 (The Rule):** Inside `reduceStock()`, we check if `quantity > stock`.
2.  **Phase 2 (The Hook):** After updating state, we call `this.notifyObservers()`.
3.  **Phase 3 (The Plug):** In `index.ts`, we "plug in" external functions like `LowStockObserver` to react to those changes without cluttering the Domain file.

---

## 📂 Documentation

Detailed domain logic flow and class diagrams can be found in:
👉 `/docs/domain-logic.md`