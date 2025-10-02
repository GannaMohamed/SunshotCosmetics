# 🌞 Sunshot Website  

A modern **beauty & skincare brand website** built with **Next.js** and **Tailwind CSS**.  
This project showcases a full design-to-code workflow, from early design concepts (neobrutalism + minimalism) to a fully responsive implementation.

---

## ✨ Vision & Design Process  

### 🎨 1. The Design Thinking
- The brand direction was guided by **neobrutalism minimalism**:
  - Strong contrasts: clean layouts with **flat sections** divided by bold grid lines.
  - Minimal shapes & color palette, relying on brand variables (`--navy`, `--red`, `--yellow`, `--offwhite`, `--babyblue`, `--grey`).
  - Typography as identity: **large headlines**, thin weights for elegance, and capitalized text for impact.  
- Inspiration: a balance between *modern editorial design* and *raw, grid-based layouts*.

### 🖌️ 2. From Figma to Code
- Wireframes and mockups were done in **Figma** with a **12-column grid** as the foundation.
- Each section (Hero, Collection, Brand Story, Contact, Footer) was carefully mapped into reusable React components.
- Decisions like hover states (yellow background fill + navy text/border) came from iterating on **interaction micro-designs**.

### 🪞 3. Components & Reusability
- **NavItem**: Custom navigation item that handles active/hover states.
- **Button / ButtonSecondary**: Two button variants with optional icons (`button icon.svg`) and hover transitions.
- **Badge**: Two types (filled, outlined) for product highlights like *Fresh Arrival*, *Best Seller*, etc.
- **Title**: Section title with support for repetition (for a strong graphic identity).
- **Product**: Flex/grid layout alternating between image + details, with row reversal for variety.

---

## 🛠️ Development Approach  

### ⚡ Tech Stack
- [Next.js](https://nextjs.org/) → React framework for routing, performance, and deployment.
- [Tailwind CSS](https://tailwindcss.com/) → Utility-first CSS framework for responsive design and custom styling.
- Next.js `<Image>` for optimized image handling.

### 📐 Layout System
- **12-column grid** for consistent spacing and alignment across sections.
- Flexbox for sub-layouts (hero text, product cards, footer sections).
- Combined grid + flex to handle **content-heavy + visual sections**.

### 📱 Responsive Approach
- **Mobile-first** coding:
  - Small screens: simplified layout → focus only on essential content centered on screen (hero text, buttons).
  - Medium and large screens: grid layout → supporting imagery, side elements, decorative icons.
- Utility classes (`hidden md:flex`, `col-span-*`, `md:flex-row`, etc.) control breakpoints.
- Hero and Product layouts adapt seamlessly between **stacked** and **split-screen** views.

---

## 🧩 Key Features
- **Hero Section**: Bold headline with flexible two-button call-to-action.
- **Collection Section**: Product cards with alternating layouts (image left/right).
- **Story Section**: Brand logo and narrative text with call-to-action.
- **Contact Section**: Two-column responsive split with support message and form.
- **Footer**: Discover / About / Support navigation + social icons + copyright.

---


## 🔮 Future Enhancements
- Implement the two other pages, About and Contact.
- Add interactions & animations.
- Arabic Version.

---

## 📷 Preview
*(Include a screenshot of the landing page here once deployed)*

