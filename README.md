# Orchids Website

A modern Next.js application for the Orchids organization, serving both frontend and backend functionality.

## Features

- **Full-Stack Next.js App**: Built with Next.js 15 using the App Router
- **TypeScript**: Fully typed for better developer experience
- **Tailwind CSS**: Modern, utility-first CSS framework
- **API Routes**: Backend functionality with RESTful API endpoints
- **Responsive Design**: Mobile-friendly and accessible
- **Modern UI**: Clean and professional design

## Pages

- **Home** (`/`): Landing page with organization overview
- **About** (`/about`): Information about the organization's mission and values
- **Contact** (`/contact`): Contact form with backend API integration

## API Endpoints

- **POST /api/contact**: Handle contact form submissions
- **GET /api/health**: Health check endpoint for monitoring

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── api/             # API routes (backend)
│   │   │   ├── contact/     # Contact form API
│   │   │   └── health/      # Health check API
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: Node.js 20+
- **Package Manager**: npm

## Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Docker containers
- Any Node.js hosting platform

For more details on deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is private and proprietary to the Orchids organization.

