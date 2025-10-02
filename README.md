# 🌞 Sunshot Website

**Live Site:** (Link to live deployment here)

A modern, high-impact **beauty and skincare brand website** built with **Next.js** and styled using **Tailwind CSS**. This project serves as a full-stack design-to-code case study, translating a bold, graphic design concept into a responsive, performant web application.

## ✨ The Vision: Neo-Brutalism Meets Minimalism

This project's aesthetic is driven by the **neo-brutalism minimalism** direction of the Sunshot brand:

* **Grid & Contrast:** The layout is founded on a **12-column grid**, emphasizing strong contrasts. Sections are flat, bold, and cleanly divided by lines and geometric shapes.
* **Color & Identity:** A restrained palette (`navy`, `red`, `yellow`, `offwhite`, `babyblue`) ensures focus. Typography is the main visual identity: **oversized headlines**, thin weights for elegance, and impactful capitalization.
* **Interaction:** Micro-designs, like the **signature hover state** (yellow background fill with navy text/border), were essential to making the raw design feel interactive and alive.

## 🛠️ Tech Stack & Development

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js** | Routing, server-side rendering, and production-ready performance. |
| **Styling** | **Tailwind CSS** | Utility-first, mobile-first styling for rapid, custom component development. |
| **Assets** | Next.js `<Image>` | Optimized image handling for fast load times. |

### 📐 Layout & Components

The **12-column grid** from the Figma wireframes is the single source of truth for the entire layout. We used a mix of Tailwind's **Grid** and **Flexbox** utilities to handle complex visual structures, ensuring every element is precisely aligned.

**Key Reusable Components:**

* **Button / ButtonSecondary:** Two variants, incorporating optional `button-icon.svg` and defined hover transitions.
* **Product Card:** Alternating flex/grid layout that supports row reversal, enabling the showcase to feel dynamic without custom styling per item.
* **Section Title:** Custom component that supports repetition (for a strong graphic effect) and large, impactful sizing.

### 📱 Responsive Approach

We coded **mobile-first** (`sm:` and `md:` breakpoints). The layout prioritizes essential content (headlines, CTAs) on small screens, hiding decorative or supplementary elements until the larger grid can support them. The Hero and Product sections transition seamlessly from **stacked** to **split-screen** views.

## 🧩 Core Features Implemented

* **Hero:** Bold, brand-defining headline with a dual-CTA (Call-to-Action) button setup.
* **Collection:** A structured product showcase alternating between image-left and image-right layouts.
* **Brand Story:** Dedicated section for the narrative text and a primary CTA.
* **Contact Form:** Responsive two-column split design with form fields and a support message.
* **Footer:** Clear, multi-column navigation (`Discover`, `Support`) integrated with social links and copyright.

## 🔮 Future Roadmap

* Implement full content for the **About Us** and **Contact** pages.
* Integrate subtle interaction and entrance animations.
* Complete the **Modern Standard Arabic** version for full bilingual support.

---

## 📷 Preview

(Include a screenshot of the landing page here once deployed)
