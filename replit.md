# Qatar Elétrica - Electrical Materials Distributor

## Overview

Qatar Elétrica is a Brazilian electrical materials distributor website built as a full-stack application. The platform serves as a company showcase and contact portal for electrical equipment and industrial automation products. The application features a modern, responsive design with sections for company information, product categories, partner brands, and contact forms. It's designed to present the company's extensive inventory of over 20,000 electrical items and facilitate customer inquiries through integrated contact mechanisms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API routing
- **Language**: TypeScript for type safety across the entire stack
- **Storage Layer**: In-memory storage implementation with interface for future database integration
- **Session Management**: Built-in session handling for user interactions

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: Simple user management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Provider**: Configured for Neon Database serverless PostgreSQL

### Development Environment
- **Monorepo Structure**: Shared TypeScript types between client and server in `/shared` directory
- **Asset Management**: Static assets served from `/attached_assets` with Vite alias configuration
- **Development Tools**: Hot module replacement, error overlays, and Replit-specific development plugins
- **Code Quality**: Consistent TypeScript configuration across client, server, and shared code

### UI/UX Design System
- **Theme**: Professional blue and neutral color palette reflecting electrical industry standards
- **Typography**: Inter font family for modern, readable text
- **Components**: Comprehensive set of reusable UI components including forms, navigation, cards, and interactive elements
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA-compliant components with proper keyboard navigation and screen reader support

### Contact Integration
- **Form Handling**: React Hook Form with Zod validation for contact inquiries
- **Email Integration**: Mailto links for direct email client integration
- **Toast Notifications**: User feedback system for form submissions and interactions

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting configured via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database access layer with PostgreSQL dialect

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible React components
- **Lucide React**: Modern icon library for consistent iconography
- **Font Awesome**: Icon library for additional visual elements

### Development Tools
- **Replit Integration**: Development banner, cartographer, and runtime error modal for enhanced development experience
- **Vite Plugins**: Build optimization and development experience enhancements

### Styling Dependencies
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS processing with autoprefixer for browser compatibility
- **Class Variance Authority**: Type-safe styling variants for component consistency

### State Management
- **TanStack Query**: Server state management with caching, synchronization, and background updates
- **Wouter**: Minimalist routing solution for single-page application navigation

### Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for form data and API contracts
- **Hookform Resolvers**: Integration layer between React Hook Form and Zod validation