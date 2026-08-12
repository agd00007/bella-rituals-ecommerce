# 💄 Bella Ritual

Bella Ritual is a cosmetics e-commerce web application developed as part of my Higher Technician Degree in Web Application Development (DAW).

The application provides a complete online shopping experience, allowing users to browse cosmetic products, filter and search the catalog, manage their shopping cart, create an account, and place orders.

## ✨ Features

- User registration and authentication
- Product catalog
- Product search and filtering
- Product detail pages
- Shopping cart management
- Order management
- Responsive design for desktop, tablet and mobile devices
- Administration interface

- ## 🛠️ Technologies

- **React** - Frontend development and reusable components
- **Vite** - Development and build tool
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Application routing and navigation
- **React Admin** - Administration interface
- **React Icons** - Icons and visual elements
- **Swiper** - Interactive sliders and carousels

### Backend

- **Node.js** - Backend runtime environment
- **Express** - REST API and server-side logic
- **MongoDB** - Database for users and product data
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing and authentication
- **CORS** - Communication between frontend and backend
- **Axios** - HTTP requests

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/agd00007/bella-rituals-ecommerce.git
```

### 2. Install frontend dependencies

From the project root:

```bash
npm install
```

### 3. Install backend dependencies

Go to the backend folder:

```bash
cd backend
```

Then install the backend dependencies:

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

The application connects to:

```text
mongodb://127.0.0.1:27017/makeupDB
```

### 5. Start the backend

From the `backend` folder:

```bash
npm start
```
## 📁 Project Structure

```text
bella-rituals-ecommerce/
│
├── backend/              # Node.js, Express and MongoDB backend
├── public/               # Public and static assets
├── src/                  # React application source code
│
├── index.html            # Main HTML entry point
├── package.json          # Frontend dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.cjs    # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # Project documentation
```

The application follows a separated frontend/backend architecture. The React frontend is located in `src`, while the Node.js and Express API and MongoDB connection are contained in `backend`.

### 6. Start the frontend

Open another terminal, return to the project root and run:

```bash
npm run dev
```
