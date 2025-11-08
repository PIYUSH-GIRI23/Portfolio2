# 🚀 Piyush Giri - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full-Stack Developer. Built with React, Vite, and Tailwind CSS, featuring smooth animations, glass-morphism design, and an intuitive user experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://piyushx.tech)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/PIYUSH-GIRI23)

## ✨ Features

- 🎨 **Modern Design** - Glass-morphism UI with gradient accents
- 🌊 **Smooth Animations** - Scroll-based animations using Intersection Observer API
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **SEO Optimized** - Clean structure and semantic HTML
- 🌈 **Interactive Elements** - Hover effects, transitions, and micro-interactions
- 🔍 **Project Showcase** - Detailed project pages with screenshots and tech stacks

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

### Design
- **Glass-morphism** - Modern frosted glass effect
- **Custom Animations** - CSS animations with scroll triggers
- **Gradient Accents** - Vibrant color schemes
- **Playfair Display & Poppins** - Professional typography

## 📂 Project Structure

```
client/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   ├── cli-todo/       # CLI Todo project screenshots
│   │   ├── shortr/         # Shortr project screenshots
│   │   ├── zipp/           # Zipp project screenshots
│   │   └── skills/         # Technology icons
│   ├── components/
│   │   ├── About.jsx       # About page with bio & tech stack
│   │   ├── Experience.jsx  # Work experience & education
│   │   ├── Homepage.jsx    # Landing page
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Projects.jsx    # Projects listing page
│   │   ├── Skills.jsx      # Skills showcase
│   │   └── projects/
│   │       ├── cli-todo/
│   │       │   └── CliTodo.jsx
│   │       ├── shortr/
│   │       │   └── Shortr.jsx
│   │       └── zipp/
│   │           └── Zipp.jsx
│   ├── App.css            # Global styles & animations
│   ├── App.jsx            # Main app component with routing
│   ├── index.css          # Tailwind directives
│   └── main.jsx           # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PIYUSH-GIRI23/portfolio.git
   cd portfolio/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Homepage | Landing page with hero section |
| `/about` | About | Personal bio, tech stack, tools & platforms |
| `/skills` | Skills | Detailed skills showcase with descriptions |
| `/experience` | Experience | Work experience, education & achievements |
| `/projects` | Projects | Project listing with cards |
| `/projects/zipp` | Zipp | Cloud clipboard app details |
| `/projects/shortr` | Shortr | URL shortener details |
| `/projects/cli-todo` | CLI Todo | Terminal todo app details |

## 🎨 Key Features Breakdown

### Animation System
- Scroll-triggered animations using Intersection Observer
- Multiple animation types: fade-in, slide, scale
- Staggered delays for sequential reveals
- Respects user's `prefers-reduced-motion` setting

### Design System
- **Glass Cards** - Backdrop blur with transparency
- **Gradient Backgrounds** - Smooth color transitions
- **Interactive Elements** - Hover states and transforms
- **Timeline Component** - For work experience display
- **Skill Cards** - Enhanced cards with 3D effects

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Collapsible mobile navigation
- Adaptive layouts and typography

## 🌟 Projects Featured

### 1. Zipp
Cloud clipboard application for cross-device syncing
- **Tech**: React, Express, MongoDB, Redis, Cloudinary
- **Live**: [zipp.piyushx.tech](https://zipp.piyushx.tech)

### 2. Shortr
URL shortener with analytics and QR codes
- **Tech**: React, Express, MongoDB, Redis, JWT, OAuth
- **Live**: [x.piyushx.tech](https://x.piyushx.tech)

### 3. CLI Todo
Terminal-first todo application in C++
- **Tech**: C++, Shell Script, Bash
- **Docs**: [cli.todo.piyushx.tech](https://cli.todo.piyushx.tech)

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Performance Optimizations

- ⚡ Vite for fast HMR and optimized builds
- 🖼️ Optimized image loading
- 🔄 Code splitting with React Router
- 📦 Tree shaking for smaller bundles
- 🎨 Tailwind CSS purging for minimal CSS

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Piyush Giri**
- Email: [giri.piyush2003@gmail.com](mailto:giri.piyush2003@gmail.com)
- GitHub: [@PIYUSH-GIRI23](https://github.com/PIYUSH-GIRI23)
- Portfolio: [piyushx.tech](https://piyushx.tech)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Design inspiration from modern portfolio trends

---

<div align="center">
  <p>Built with ❤️ by Piyush Giri</p>
  <p>© 2025 Piyush Giri. All rights reserved.</p>
</div>
