# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# WorkOS-Style React + TypeScript + TailwindCSS Template

This project is a **WorkOS-inspired** landing page built with **React, TypeScript, TailwindCSS**, and **Framer Motion** for animations.

---

## 🚀 Features
✅ Fully responsive **WorkOS-style** landing page  
✅ Smooth **animations** with Framer Motion  
✅ **Dropdown navigation** with Radix UI  
✅ TailwindCSS-based **modern UI**  
✅ **Dark mode hero section** with gradients  

---

## 📌 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd workos-clone
npm install
npm run dev

workos-clone/
│── src/
│   ├── components/
│   │   ├── Hero.tsx        # Animated hero section
│   │   ├── Navbar.tsx      # Responsive navbar with dropdown
│   │   ├── Features.tsx    # Feature cards with hover effects
│   ├── pages/
│   │   ├── Home.tsx        # Home page with sections
│   │   ├── Features.tsx    # Features page
│   │   ├── Pricing.tsx     # Pricing page
│   │   ├── Contact.tsx     # Contact page
│   ├── App.tsx             # Main routing
│   ├── index.css           # Tailwind styles
│── public/
│── package.json
│── README.md

🖌️ Customization
🎨 Update Colors & Fonts
Edit tailwind.config.js:

export default {
  theme: {
    extend: {
      colors: {
        primary: "#0a2540", // WorkOS-style dark blue
        secondary: "#24a0ed", // WorkOS bright blue
      },
    },
  },
};

✨ Modify Animations
Animations are inside Hero.tsx, Features.tsx, and Navbar.tsx:
<motion.h1 
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Build the Future of Authentication
</motion.h1>

🚀 Deployment
📌 Deploy to Vercel
npm run build
vercel deploy
📌 Deploy to Netlify
npm run build
netlify deploy
💡 Next Steps
🔥 Add authentication (Firebase/Auth0)
🛠️ Integrate a CMS (Sanity/Strapi)
🌍 Deploy on Strato or AWS

❤️ Contributions
Feel free to fork & improve the project! PRs are welcome. 🚀

📞 Support
For any questions, open an issue or reach out! 🚀


---

### 📌 Now you can create a **`README.md`** file and paste the content above into it.

If you need a **downloadable** version, let me know! 🚀🔥
