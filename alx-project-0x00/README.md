# ALX Project 0x00 - Airbnb Clone

This project is a simple Airbnb clone built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It demonstrates basic Next.js routing, component usage, and TypeScript interfaces.

## Project Structure

- `pages/` - Contains all page routes:
  - `index.tsx` - Home page
  - `landing.tsx` - Landing page
  - `about.tsx` - About page
- `components/` - Reusable components:
  - `Card.tsx`
  - `Pill.tsx`
  - `Button.tsx` (if implemented)
- `interfaces/` - TypeScript interfaces:
  - `index.ts`
- `styles/` - Global styles
- `public/` - Static assets (images, icons)
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `package.json` - Project dependencies

## Features Implemented

1. **TypeScript Setup**  
   Project initialized with TypeScript support.

2. **ESLint Configuration**  
   Linting configured to follow Next.js recommended rules.

3. **Import Alias**  
   Configured `@/*` paths for cleaner imports.

4. **Pages Router**  
   Simple pages router without using the App Router.

5. **Reusable Components**  
   - `Card` component wraps content
   - `Pill` component accepts a `title` prop
   - `Button` component (if implemented) supports multiple sizes and styles

## Running the Project

Install dependencies:

```bash
npm install

