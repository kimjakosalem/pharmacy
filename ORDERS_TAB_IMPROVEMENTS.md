# Orders Tab - Layout & Pagination Improvements

---

## What Changed

Your Orders tab now has a **much better layout**:

### **Before:**
```
1. Order Settings (at top)
2. Low / Out of Stock (LONG LIST - hundreds of items)
   ↓ (You scrolled forever to get past this)
3. Add Any Product
4. Order List
5. Purchase Order Preview
```

### **After:**
```
1. Order Settings (at top)
2. Add Any Product
3. Order List
4. Purchase Order Preview
5. Low / Out of Stock (at bottom, with PAGINATION)
```

---

## Key Improvements

### **1. Low Stock List Moved to Bottom**
- No more scrolling past the list to get to the tools
- You can now easily see Order Settings → Add Product → Build Order → See Preview

### **2. Pagination on Low Stock List**
- **Shows only 10 items per page** instead of all 800+
- **Prev/Next buttons** to browse pages
- Shows "Page X of Y" so you know where you are

### **Example:**
- You have 800 low stock items
- Before: Long scroll through all 800
- After: See 10 per page, click "Next" to see more

---

## How to Use It

### Creating a Purchase Order:

1. **Go to Orders tab**
2. **Order Settings** (top)
   - Enter PO number, date, notes
3. **Add Any Product** (second card)
   - Search for specific products you want to order
   - Click to add to order
4. **Order List** (third card)
   - See products you've added
   - Adjust quantities
5. **Purchase Order Preview** (fourth card)
   - See formatted PO ready to export
   - Export as CSV or print
6. **Low / Out of Stock** (bottom, optional)
   - If you want to order low-stock items
   - Scroll through pages and check boxes
   - Check "All" button adds all to order

---

## Technical Details

### Pagination Variables
```javascript
let lowStockPageIndex = 0;      // Current page (starts at 0)
let lowStockPageSize = 10;      // Show 10 items per page
```

### Pagination Controls
- Shows: "Page 1 of 80" (if 800 items)
- Click "Prev" to go back
- Click "Next" to go forward
- Buttons are disabled when at first/last page

---

## Can I Change Page Size?

Yes! If you want to show 20 items per page instead of 10:

1. Open your `index.html` in a text editor (Notepad)
2. Find this line (around line 1475):
   ```javascript
   let orderItems = {}, lowStockPageIndex = 0, lowStockPageSize = 10;
   ```
3. Change the `10` to `20`:
   ```javascript
   let orderItems = {}, lowStockPageIndex = 0, lowStockPageSize = 20;
   ```
4. Save and reload your POS app
5. Low stock list now shows 20 per page

---

## Before & After Flow

### Old Way (Painful)
1. Open Orders tab
2. See "Low Stock" list with 800+ items
3. Scroll forever
4. Finally reach "Add Any Product" tool
5. Add products manually
6. Build order
7. Export

### New Way (Fast)
1. Open Orders tab
2. See "Order Settings" immediately
3. Use "Add Any Product" to search & add specific products
4. Build order, preview, export
5. *(Optional)* If you want to order low-stock items:
   - Scroll down to "Low / Out of Stock"
   - Browse 10 items per page
   - Check boxes for the ones you want

---

## Summary

✓ **Low stock list moved to bottom** — No more blocking your main workflow  
✓ **Pagination shows 10 items per page** — Easy to browse  
✓ **Prev/Next buttons** — Navigate pages effortlessly  
✓ **Check All / Uncheck All buttons** — Quick selection  
✓ **Better flow** — Settings → Search → Build → Preview → Review low stock

Your Orders tab is now much more usable! 🎉
