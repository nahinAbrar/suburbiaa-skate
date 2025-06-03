**Suburbia Skate** A modern, interactive skateboarding storefront built with Next.js, Prismic CMS, and cutting-edge web technologies._

Live Link
---------

[https://skate-suburbia.netlify.app/](https://skate-suburbia.netlify.app/)

Table of Contents
-----------------

*   [Overview](#overview)
    
*   [Features](#features)
    
*   [Tech Stack](#tech-stack)
    
*   [Getting Started](#getting-started)
    
    *   [Prerequisites](#prerequisites)
        
    *   [Installation](#installation)
        
    *   [Available Scripts](#available-scripts)
        
*   [Directory Structure](#directory-structure)
    
*   [Customization & Usage](#customization--usage)
    
*   [Deployment](#deployment)
    
*   [Contributing](#contributing)
    
*   [License](#license)
    
*   [Contact](5#contact)
    

Overview
--------

Suburbia Skate is a fully responsive, content-driven skateboarding storefront implemented with Next.js (Turbopack), Prismic CMS (Slice Machine), and a suite of modern front-end libraries. Visitors can browse curated deck “drops,” customize virtual boards in real time (leveraging React Three Fiber and Matter.js), and learn about the team and brand’s mission. The goal is to offer a seamless shopping and customization experience, powered by headless CMS content and performant animations/scrolling.

Features
--------

*   **Prismic-Powered Content**
    
    *   Headless CMS integration via @prismicio/client, @prismicio/react, and @prismicio/next. All pages (Home, About, Team, Product Detail, etc.) pull data from Prismic “slices.”
        
    *   Slice Machine setup for creating and previewing new content types.
        
*   **Next.js & Turbopack**
    
    *   Fast development server (next dev --turbopack) and optimized production builds (next build).
        
    *   File-based routing under pages/.
        
    *   API routes (if needed) for any server-side functionality.
        
*   **Interactive 3D Board Customizer**
    
    *   Built with @react-three/fiber and @react-three/drei for rendering a 3D skateboard deck in real time.
        
    *   Physics interactions via matter-js (e.g., draggable decals or tilt animations).
        
    *   Smooth scrolling and scroll-triggered animations via gsap and the @gsap/react integration.
        
    *   Lenis (@studio-freight/lenis) for silky-smooth, hardware-accelerated scroll behavior.
        
*   **Styling & Utility Classes**
    
    *   Tailwind CSS (tailwindcss, fluid-tailwind, autoprefixer, postcss) for utility-first styling and responsive design.
        
    *   clsx for conditional className concatenation.
        
*   **TypeScript & ESLint**
    
    *   Strong typing throughout the codebase (typescript, @types/node, @types/react, etc.).
        
    *   Linting with eslint and eslint-config-next.
        
*   **Iconography & UI Helpers**
    
    *   react-icons for scalable SVG icons.
        
*   **Deployment-Ready**
    
    *   Zero-configuration deployment on Vercel or Netlify (CI/CD pulls from GitHub).
        

Tech Stack
----------

*   **Framework:** Next.js v15.3.1 (with Turbopack)
    
*   **Language:** TypeScript (v5)
    
*   **CMS:** Prismic (Slice Machine)
    
*   **3D & Physics:**
    
    *   React Three Fiber v9.x
        
    *   Drei v10.x
        
    *   Matter.js v0.20.0
        
*   **Animation & Scroll:**
    
    *   GSAP v3.13.0 with @gsap/react
        
    *   Lenis v1.x (@studio-freight/lenis)
        
*   **Styling:**
    
    *   Tailwind CSS v3.4.1
        
    *   Fluid-Tailwind v1.0.4
        
    *   PostCSS & Autoprefixer
        
*   **Icons:** React Icons v5.5.0
    
*   **Utilities:** clsx v2.1.1
    
*   **Linting/Formatting:** ESLint v9.x, @eslint/eslintrc, eslint-config-next
    

Getting Started
---------------

### Prerequisites

*   **Node.js** (v14 or later) and **npm** installed globally.
    
*   A Prismic account and a repository (for Slice Machine‐driven content).
    
*   (Optional) Git CLI for cloning and version control.
    

### Installation

1.  git clone https://github.com/nahinAbrar/suburbiaa-skate.gitcd suburbiaa-skate
    
2.  npm install
    
3.  **Set up your Prismic repository**
    
    *   If you don’t have a Prismic repo yet, follow Prismic’s docs to create one.
        
    *   Copy the prismic.json or sm.json (Slice Machine) from this project into your local folder if it isn’t already there.
        
    *   npm run slicemachine
        
    *   In the Prismic dashboard, note your repository’s API endpoint and create an access token if needed.
        

### Available Scripts

Once your environment is set up, you can run:

### Start the development server with Turbopack  
npm run dev  
### Build for production (output in .next/)  
npm run build  
### Start the production server (after build)  
npm run start  
### Run ESLint to lint files  
npm run lint  
### Launch Slice Machine UI for editing/creating slices  
npm run slicemachine

Customization & Usage
---------------------

1.  **Browse “Latest Drop” Decks**
    
    *   On the home page (/), Prismic slices render the latest products. Each deck card displays an image, name, and price.
        
    *   Click “Customize” to navigate to the 3D board customizer.
        
2.  **3D Board Customizer**
    
    *   The **BoardCustomizer** component mounts a React Three Fiber canvas with a 3D skateboard model.
        
    *   Use UI controls (buttons, dropdowns) to swap deck textures (e.g., Oni Mask, Pink Drop, Yellow & Black).
        
    *   Change grip tape patterns or add decals; Matter.js governs any physics-related interactions (e.g., floating decals or tilt gestures).
        
    *   GSAP animations (scroll triggers, on-load transitions) and Lenis (smooth scrolling) enhance the UX.
        
    *   When finished, “Add to Cart” (front-end only) or “Get Price” can be wired to a checkout flow.
        
3.  **Content Editing via Prismic**
    
    *   In Prismic’s Slices, you can add new “Hero”, “Product”, or “TeamMember” slices. Each slice corresponds to a React component under src/slices/.
        
    *   After creating or editing a slice in the Slice Machine UI, run npm run slicemachine and push the generated code changes.
        
    *   Content editors can then update text, images, and structured data through Prismic’s dashboard without redeploying.
        
4.  **Styling & Layout**
    
    *   Global styles and Tailwind’s base imports live in src/styles/globals.css.
        
    *   Utility classes (spacing, typography, flex/grid) come from Tailwind’s configuration (tailwind.config.js + fluid-tailwind plugin).
        
    *   Component-level CSS is handled via Tailwind’s className strings (no CSS Modules unless added manually).
        

Deployment
----------

This project is deployment-ready for both **Vercel** (recommended for Next.js) and **Netlify**.

### Vercel

1.  **Connect your GitHub repository** to Vercel.
    
2.  Vercel will auto-detect the Next.js project and set:
    
    *   Framework Preset: **Next.js**
        
    *   Build Command: npm run build
        
    *   Output Directory: .next
        
3.  Every push to main (or your chosen branch) triggers an automatic build and deployment.
    

### Netlify

1.  **Connect the repository** to Netlify.
    
2.  Configure build settings:
    
    *   npm run build
        
    *   .next
        
3.  **Deploy**. Netlify will build and serve the Next.js app with serverless functions (if any).
    

Contributing
------------

Contributions are welcome! If you’d like to:

1.  **Fork** the repo.
    
2.  git checkout -b feature/
    
3.  **Make your changes** (e.g., add a new slice, improve customizer UX, fix a styling bug).
    
4.  git commit -m "feat: add new deck texture and update slice schema"
    
5.  git push origin feature/
    
6.  **Open a Pull Request** against main.
    
    *   Please include screenshots or short GIFs if your change affects UI/UX.
        
    *   Clearly describe what you changed and why.
        

License
-------

This project is licensed under the **MIT License**.

Contact
-------

*   **Repository:** [github.com/nahinAbrar/suburbiaa-skate](https://github.com/nahinAbrar/suburbiaa-skate)
    
*   **Owner:** Nahin Abrar
    
*   **Credits: PrismicIo Youtube**
    
*   For questions or feature requests, open an issue in the GitHub repo’s Issues tab.
    
    Built with ❤️ using Next.js, Prismic, and the latest web technologies.
