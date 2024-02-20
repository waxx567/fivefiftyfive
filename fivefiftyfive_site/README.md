# Wayne McRae 3D portfolio landing page

## My portfolio using:

React Vite framework
ThreeJS - 3D graphics library for rendering and animating 3D models.
React Three Fiber - library for creating 3D graphics with ThreeJS in React.
TailwindCSS - utility-first CSS styling framework
Framer Motion - motion control.

### Showcases:

Load, create and customize 3D models and geometries with various lights.
Code is reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices.
Send emails through a form on the website.
Responsive across all devices with site performance improved using Suspense and Preload.

#### Features on the page:

The page contains advanced 3D models and motion manipulation with smooth animations. As a result, it may take a second or two (not long) to load.
A counter has been added to inform the user of what is going on.

The main hero image of the computer can be swiveled left or right.

The about section (Overview) cards come in with an animation and move around when hovered over.

The experience section (Work Day) cards come in with an animation.

The tech section shapes with the logos can be spun right round in all directions.

# Developer access:

- In command prompt window

from
C://Users/LENOVO/

cd Documents
cd GitHub
cd fivefiftyfive
cd fivefiftyfive_site

- Activate virtual environment

conda activate vEnv555

You are now here:
(vEnv555) C://Users/LENOVO/Documents/GitHub/fivefiftyfive/fivefiftyfive_site

npm run dev

Ctrl click on the localhost link to go to the page

React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Process to create this page

Create application.

`npm create vite@latest ./ -- --template react`

Install TailwindCSS and initialize.

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init`

Install dependencies.

`npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`

Configure source folder files.

Delete `/src/App.css`.

Simplify `/src/App.jsx` (rafce).

Update `/src/index.css`.

Create `src/styles.js`.

Update `tailwind.config.js`.

Create `/src/utils/motion.js`.

Create `/src/constants.index.js`.

`npm run dev`

Ctrl click on the `localhost` link

Update `index.html`.

Update `Navbar.jsx`.
