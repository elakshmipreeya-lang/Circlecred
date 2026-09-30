# CircleCred 💸🤝

**CircleCred** is a UPI-powered savings-circle (ROSCA) application where members contribute a fixed amount on schedule, take turns receiving the pooled payout, and build a **Savings Reliability Profile** based on their contribution behavior.

---

## 📁 Project Structure

```text
circlecred/
├── frontend/          # React + TypeScript + Vite + Tailwind CSS + Lucide React + React Router
├── backend/           # Node.js + Express + TypeScript REST API
├── database/          # SQL schemas, migrations, and seed scripts
├── docs/              # System architecture, API documentation, and DB design
├── .gitignore
├── README.md
└── package.json       # Root script launcher
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation

Install dependencies for both frontend and backend:

```bash
# Install frontend packages
cd frontend
npm install

# Install backend packages
cd ../backend
npm install
```

---

## 🏃 Running the Application

### 1. Run Frontend (Vite + React)
```bash
# From root directory:
npm run dev:frontend

# Or directly in frontend folder:
cd frontend
npm run dev
```
- Frontend dev server starts at: `http://localhost:5173`

### 2. Run Backend (Express + TypeScript)
```bash
# From root directory:
npm run dev:backend

# Or directly in backend folder:
cd backend
npm run dev
```
- Backend REST API starts at: `http://localhost:5000`
- Health check endpoint: `http://localhost:5000/api/health`

---

## 🏗️ Build Verification

To verify TypeScript compilation and production bundle builds:

```bash
# From root directory:
npm run build
```

---

## 📖 Documentation
- [API Documentation](docs/API.md)
- [Database Schema Design](docs/DATABASE.md)
- [Architecture Overview](docs/ARCHITECTURE.md)