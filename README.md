# AZ Pharmacy Website — React + Vite

A clean, modern, and trustworthy informational website for **AZ Pharmacy**, built with **React 18**, **Vite**, and **Tailwind CSS**.

This website is designed strictly as an **informational business portal** for a local pharmacy to introduce services, showcase product categories, verify stock availability via phone/WhatsApp, and provide location and contact details.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or newer recommended)
- npm or yarn

### Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be live at `http://localhost:3000`.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture & File Structure

```
az-pharmacy-website/
├── index.html                   # HTML entry with Plus Jakarta Sans & SEO meta tags
├── package.json                 # Project dependencies and Vite build scripts
├── vite.config.js               # Vite configuration (port 3000, React plugin)
├── tailwind.config.js           # Medical Blue & Wellness Green custom color palette
├── postcss.config.js            # PostCSS configuration for Tailwind CSS
├── .gitignore                   # Git ignore patterns
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application container & navigation router
│   ├── index.css                # Tailwind directives & smooth custom styling
│   ├── data/
│   │   └── pharmacyData.js      # Centralized pharmacy info, products, services & FAQs
│   ├── components/
│   │   ├── Icons.jsx            # Crisp, self-contained SVG icons (zero package dependencies)
│   │   ├── Navbar.jsx           # Top notification bar, branding, nav links, CTAs & mobile drawer
│   │   ├── Footer.jsx           # Quick links, categories, contact info, hours & medical disclaimer
│   │   ├── ProductCard.jsx      # Product card with status badges and WhatsApp stock inquiry
│   │   └── ProductModal.jsx     # Detailed view with packaging, dosage notes & instant CTAs
│   └── pages/
│       ├── HomePage.jsx         # Hero, highlights, about preview, category grid, CTA banners
│       ├── AboutPage.jsx        # Story, community mission, core values & licensed pharmacist care
│       ├── ProductsPage.jsx     # Live keyword search, category pills, OTC/Rx filter & inquiry banner
│       ├── ServicesPage.jsx     # 6 core services (dispensing, checks, advice, delivery) & FAQs
│       └── ContactPage.jsx      # Contact cards, anti-spam form, opening hours & Google Maps embed
└── [Markdown Specs]
    ├── home.md
    ├── about.md
    ├── products.md
    ├── services.md
    ├── contact.md
    ├── footer.md
    └── design-guide.md
```

---

## 🎨 Visual Direction & Design Compliance

Per `design-guide.md`:
- **Primary Color:** Medical Blue (`#0284c7`, `#0369a1`) representing clinical hygiene and trust.
- **Secondary Color:** Soft Green (`#10b981`, `#059669`) representing wellness and health.
- **Backgrounds:** Clean white (`#ffffff`) and soft slate (`#f8fafc`).
- **Typography:** `Plus Jakarta Sans` and `Inter` sans-serif fonts.
- **Tone:** Professional, welcoming, modern, and compliant with health claims guidelines.

---

## ⚙️ How to Customize Pharmacy Details

All contact information, products, services, operating hours, and address details are centralized in:
👉 [`src/data/pharmacyData.js`](src/data/pharmacyData.js)

### Updating Phone and WhatsApp:
```javascript
export const pharmacyInfo = {
  phone: "+92 332 5479257",         // Display format
  phoneRaw: "+923325479257",        // tel: link format
  whatsapp: "+92 332 5479257",      // Display format
  whatsappRaw: "923325479257",      // wa.me format (no spaces or plus)
  ...
};
```

### Adding or Modifying Products:
Add or edit objects in the `products` array inside `src/data/pharmacyData.js` with:
- `name`: Name of the medicine/product
- `category`: Category identifier (`medicines`, `vitamins`, `supplies`, `baby`, `personal`, `equipment`)
- `description`: Accurate medical description
- `prescriptionRequired`: `true` or `false`
- `image`: Image URL
- `availability`: "In Stock" or "Prescription Required"

---

## ⚖️ Important Medical Notice

This is an **informational website** for AZ Pharmacy.
- Prescription medications are dispensed only upon receipt and verification of a valid prescription from an authorized medical practitioner.
- No medical claims or automated transactions are processed through this website.
