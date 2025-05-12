# Irman Wafi's Portfolio

Hi and salam! 👋 This is my personal portfolio website built with Svelte. It showcases my journey through professional experiences, education, and various projects I've worked on. 

> **Note**: Some images and content in this repository are my personal assets. If you're planning to use this, make sure to replace them with your own.

## 🌐 Live

[![Portfolio](https://img.shields.io/badge/My_Portfolio-irmanwafi.website-blue?style=for-the-badge&logo=svelte&logoColor=white&labelColor=black)](https://irmanwafi.website) [![Cloudflare](https://img.shields.io/badge/Powered_by-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white&labelColor=black)](https://pages.cloudflare.com/)

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: 
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
  - [shadcn-svelte](https://www.shadcn-svelte.com/) - Beautiful UI components
- **Icons & Fonts**: 
  - [UnoCSS](https://unocss.dev/) with Carbon Icons
  - Browse icons at [Icônes](https://icones.js.org/collection/carbon)
- **Theme**: [mode-watcher](https://github.com/bluwy/mode-watcher) for dark/light mode
- **Markdown**: Powered by PrismJS, marked, and DOMPurify
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js >= 16 (i use 20.17.0)
- pnpm (prefer to use this)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/irmanwafi/irman-portfolio.git
cd irman-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

The site will be available at `http://localhost:5173`

### Build

To create a production build:
```bash
pnpm run build
```

To preview the build locally:
```bash
pnpm run preview
```

## 🌍 Deployment

This site is running on Cloudflare Pages. To deploy your own version:

1. Fork this repository
2. Create a Cloudflare Pages project
3. Connect your repository
4. Configure the build settings:
   - Build command: `pnpm run build`
   - Build output directory: `build`
   - Environment variables:
     - `NODE_VERSION`: 20.17.0

## 📁 Project Structure

```
src/
├── lib/            # Core components and utilities
│   ├── components/ # UI components
│   ├── data/      # Content data
│   └── utils/     # Helper functions
├── routes/         # Pages and routing
└── app.html       # HTML template
```

## ✨ Current Features

- 🌗 Dark/Light mode
- 📱 Fully responsive design
- 🎨 Clean and modern UI
- ⚡ Fast performance
- 📊 Experience timeline
- 🎓 Education showcase
- 💼 Project portfolio
- 🔍 Full-text search

## 🚧 Upcoming Features *will do it on my free time hehe

- 🤖 AI-powered features:
  - Chat interface using local LLMs (Ollama)
  - Smart project recommendations
  - Auto-generated project summaries
  - Code explanation feature
- 📊 Interactive data visualizations
- 🗣️ Blog section for tech articles
- 🌐 Multi-language support
- 📱 Progressive Web App (PWA) support
- 🔄 Real-time project updates
- 📈 GitHub contributions graph
- 💬 Comments section for blog posts
- 📧 Contact form with anti-spam protection

## 🛠️ Customization

Want to make it your own? Here's what you need to modify:

1. Update your information in `src/lib/data/`
2. Customize the theme in `src/app.css`
3. Modify markdown styles in `src/markdown.css`
4. Replace the logos in `static/logos/`
5. Change `static/favicon.png` to your own icon

Remember to replace all personal images in the `static/` directory with your own! Tqsm.
