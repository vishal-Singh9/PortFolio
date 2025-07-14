# Vishal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing the work and skills of Vishal Singh, a passionate Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with modern web technologies
- **Interactive UI**: Smooth scrolling navigation and engaging user experience
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project presentations with live demos
- **Skills Display**: Comprehensive skills and technologies overview

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Custom CSS animations and transitions

## 📁 Project Structure

```
vishal-portfolio/
├── public/
│   ├── favicon.svg          # Custom VS logo
│   └── assets/              # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Project portfolio
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer component
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── assets/              # Images and media
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vishalsingh/vishal-portfolio.git
cd vishal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Colors and Theming

The project uses a custom design system defined in `src/index.css`. You can modify the CSS variables to change the color scheme:

```css
:root {
  --primary: 262 83% 58%;
  --primary-foreground: 210 40% 98%;
  --primary-glow: 262 100% 75%;
  /* ... other variables */
}
```

### Components

All components are built with TypeScript and follow consistent patterns:
- Responsive design by default
- Accessible markup
- Consistent styling with Tailwind CSS
- Smooth animations and transitions

## 📸 Screenshots

The portfolio includes:
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal story and professional highlights
- **Skills Section**: Technical skills organized by categories
- **Projects Section**: Featured projects with detailed descriptions
- **Contact Section**: Professional contact form and information
- **Footer**: Additional navigation and social links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About Vishal Singh

Full Stack Developer with 5+ years of experience building modern web applications. Passionate about creating beautiful, functional, and scalable digital experiences using cutting-edge technologies.

**Contact**: vishal.singh@example.com  
**GitHub**: [@vishalsingh](https://github.com/vishalsingh)  
**LinkedIn**: [linkedin.com/in/vishalsingh](https://linkedin.com/in/vishalsingh)

---

Built with ❤️ and lots of coffee by Vishal Singh
