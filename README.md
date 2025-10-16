# Drone Prenzli Page

A modern, responsive portfolio website showcasing aerial photography and drone footage of Prenzlauer Berg, Berlin.

## Features

- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Interactive Gallery**: Photo modal with navigation controls
- **Video Showcase**: Featured drone footage with hover effects
- **Modern UI**: Dark theme with emerald accent colors
- **Smooth Animations**: CSS transitions and hover effects
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd drone-prenzli-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Deployment

This project is optimized for deployment on Netlify, Vercel, or any static hosting service.

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The site will be automatically deployed on every push to your main branch.

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # Vite environment types
```

## Customization

- Update contact information in `App.tsx`
- Replace placeholder images with your actual drone footage
- Modify colors and styling in Tailwind classes
- Add your own video content and metadata

## License

© 2025 Enrique Berlin Aerials. All rights reserved.
