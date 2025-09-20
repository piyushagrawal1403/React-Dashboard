# 📊 SaaS Dashboard Frontend  

A **next-generation dashboard interface** that blends performance, accessibility, and modern design. Built with **React + Vite**, styled with **Tailwind CSS**, and enhanced with **Framer Motion** for smooth animations. Supports **light/dark themes**, responsive layouts, and easy navigation.  

---

## ✨ Features  

- **🖥️ Dashboard Interface** – Clean and minimal layout for a great user experience  
- **📂 Sidebar + Navbar** – Responsive design with seamless integration  
- **📊 Interactive Charts & Tables** – Dynamic visualization of data  
- **🌙 Dark/Light Mode Toggle** – Personalized theme switching  
- **🔀 Routing** – Smooth navigation across multiple pages  
- **🎞️ Animations** – Framer Motion-powered modern transitions  

---

## 🛠️ Tech Stack  

- **React** – Component-based UI library  
- **Vite** – Lightning-fast development/build tool  
- **Tailwind CSS** – Utility-first styling framework  
- **Framer Motion** – Powerful animation library  

---

## ⚡ Getting Started  

### 📋 Prerequisites  
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (v14.18.0 or higher)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  

---

### 🚀 Installation  

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   App runs at **http://localhost:5173**  

4. **Build for production**  
   ```bash
   npm run build
   ```

5. **Preview production build**  
   ```bash
   npm run preview
   ```

---

## 🎨 Tailwind CSS  

- Configured with **PostCSS** + **Autoprefixer** for cross-browser support  
- Customize design in **`tailwind.config.js`**  
- Utility-first classes allow fast and responsive development  

---

## 🎥 Framer Motion  

Use Framer Motion to add animations easily:  

```jsx
import { motion } from "framer-motion";

<motion.div 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ duration: 0.5 }}
>
  Hello Dashboard 👋
</motion.div>
```

---

## 🧹 ESLint  

Configured with:  
- `eslint-plugin-react`  
- `eslint-plugin-react-hooks`  
- `eslint-plugin-react-refresh`  

Run lint check:  
```bash
npm run lint
```

---

## 📜 Scripts  

| Command           | Description                     |
|-------------------|---------------------------------|
| `npm run dev`     | Start development server        |
| `npm run build`   | Build for production            |
| `npm run preview` | Preview production build        |
| `npm run lint`    | Run ESLint checks               |

---

## ⚙️ Additional Configuration  

- **Vite Plugin React** – Optimized builds + fast refresh  
- **PostCSS & Autoprefixer** – Ensures cross-browser compatibility  
