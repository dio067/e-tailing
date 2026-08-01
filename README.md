# E-Tailing

A simple full-stack web application for managing products. Users can view, add, edit, and delete products through a clean and responsive interface.

## Tech Stack

### Backend

- Node.js
- Express.js
- PostgreSQL (Neon)
- Arcjet

### Frontend

- React
- Vite
- Tailwind CSS
- Zustand
- React Router
- Axios

## Features

- View all products
- Add new products
- Edit existing products
- Delete products
- Dark and light mode
- Rate limiting and bot protection

## Screenshots

![Catalog](docs/screenshots/catalog.png)

![Add Product](docs/screenshots/add-product.png)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Arcjet API key

### Installation

```bash
git clone https://github.com/dio067/e-tailing.git
cd e-tailing
npm install
cp .env.example .env
```

Add your database and Arcjet credentials to the `.env` file.

(Optional) Seed the database with sample products:

```bash
npm run seed
```

Start the backend & frontend in Root dir:

```bash
npm run dev
```

**Live demo:** https://e-tailing.vercel.app
