# Feedback — Joseph: DDD + Observer Pattern (Inventory Management)

---

## Overall Impression

This is a clean, well-structured submission that clearly demonstrates an understanding of the core DDD + Observer assignment. The separation of concerns is solid, the business rules are correctly enforced, and the README is genuinely useful. Good work.

---

## What Went Well

### ✅ Architecture is exactly right
The three-layer split — `/domain`, `/observers`, `index.ts` — matches the assignment's intent perfectly. The `Product` class knows nothing about logging or UI updates. The observers handle all of that externally. This is the point of the exercise, and you nailed it.

### ✅ The README is excellent
This stands out. You explain *why* ESM imports require `.js` extensions, include a Quick Start section, and document the 3-phase implementation logic (Rule → Hook → Plug). A reader who has never seen the project can get it running and understand it in under five minutes. That's rare and valuable.

### ✅ Business rules are clean and explicit
The guard clause in `reduceStock()` is exactly right:
```ts
if (quantity > this._stock) {
  throw new Error(`Insufficient stock for ${this.name}.`);
}
```
The domain throws. It doesn't log, it doesn't return null — it throws. That's correct DDD behaviour.

### ✅ Two distinct observers with different trigger conditions
`LowStockObserver` and `OutOfStockObserver` each check their own condition independently. This is a good pattern — observers should be self-contained and not rely on the domain to pre-filter for them.

### ✅ `index.ts` tells a story
The test scenario (sell 6 → sell 4 → try to sell 1 more) walks through all three outcomes: low stock alert, out-of-stock update, and error handling. It's a complete demonstration, not just a one-liner sanity check.

### ✅ Good docs folder
The `docs/` folder exists and contains a `domain.md` with the business rules and pattern explained. The inclusion of a domain example in a separate docs file satisfies the assignment requirement.

---

## Things to Improve

### ⚠️ `docs/domain.md` references a file that doesn't exist
The README points to `/docs/domain-logic.md`, but the actual file is `domain.md`. One of the two should be updated so the link isn't broken.

### ⚠️ No `unsubscribe` mechanism
The `subscribe` method works, but there's no way to remove an observer once attached. For this assignment it's acceptable, but worth noting as a natural next step.

### ⚠️ `Stock` could be a branded type
Right now `_stock` is a plain `number`. If you wanted to push further into DDD territory, a `StockLevel` branded type that prevents negative values at the type level would make the domain even more robust. Not required, but a strong extension.

---

## Summary

| Area | Assessment |
|---|---|
| Domain isolation | ✅ Clean |
| Observer pattern | ✅ Correct |
| Business rule enforcement | ✅ Works as expected |
| README quality | ✅ Above average |
| `/docs` domain example | ✅ Present |
| Code quality | ✅ Readable and consistent |
| Minor issues | Filename typo, broken README link |

Strong submission overall. The README alone puts this above many projects at this stage.
