# Monorepo Singularity

A full-stack application demonstrating modern web development practices with a React frontend and Node.js backend, all containerized with Docker.

## 🚀 Overview

This project showcases a comprehensive approach to full-stack development, implementing a pet services platform with user authentication. The application is structured as a monorepo, allowing for efficient management of both frontend and backend codebases from a single repository.

The project demonstrates several key software development concepts:

- **Monorepo Architecture**: Unified management of frontend and backend code
- **Hexagonal Architecture**: Clean separation of concerns in the backend
- **Containerization**: Docker implementation for consistent deployment
- **Modern Frontend**: React with TypeScript and state management
- **Secure Authentication**: JWT-based user authentication system

## 🏗️ Project Structure

```
monorepo-singularity/
├── frontend/                # React frontend application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── api/             # API integration
│   │   ├── components/      # React components
│   │   ├── Icons/           # SVG icons and assets
│   │   └── store/           # Zustand state management
│   └── Dockerfile           # Frontend container configuration
│
├── backend/                 # Node.js backend application
│   ├── src/                 # Source code
│   │   ├── application/     # Application services (business logic)
│   │   ├── domain/          # Domain models and repositories
│   │   ├── infraestructure/ # Controllers and routes
│   │   ├── middleware/      # Authentication middleware
│   │   └── utils/           # Utility functions
│   └── Dockerfile           # Backend container configuration
│
└── docker-compose.yml       # Container orchestration configuration
```

## 🛠️ Technology Stack

### Frontend
- **React**: UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript
- **Vite**: Modern build tool for faster development
- **Zustand**: Lightweight state management
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: Type-safe JavaScript
- **JWT**: JSON Web Tokens for authentication
- **Hexagonal Architecture**: Clean separation of concerns

### DevOps
- **Docker**: Containerization platform
- **Docker Compose**: Multi-container orchestration
- **Nginx**: Web server for the frontend

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose installed
- Node.js (for local development)

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/yourusername/monorepo-singularity.git
cd monorepo-singularity
```

2. Build and start the containers:
```bash
docker-compose up -d
```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development servers:
```bash
npm run dev
```

## 🏛️ Architecture

### Hexagonal Architecture (Backend)

The backend follows a hexagonal architecture (also known as ports and adapters) to maintain a clear separation of concerns:

- **Domain Layer**: Contains business logic and entities
- **Application Layer**: Orchestrates the flow of data and implements use cases
- **Infrastructure Layer**: Handles external concerns like HTTP routing and data storage

This architecture ensures that the business logic remains isolated from external dependencies, making the system more maintainable and testable.

### Frontend Architecture

The frontend is organized around a component-based architecture with:

- **Components**: Reusable UI elements
- **Sections**: Page-specific component arrangements
- **Store**: State management with Zustand
- **API**: Service layer for backend communication

## 🔒 Security

The application implements several security best practices:

- JWT-based authentication
- Password hashing (in production environments)
- Protected routes for authenticated users
- Environment variable management for sensitive information

## 🌟 Key Features

- User registration and authentication
- Protected routes requiring authentication
- Responsive design for various device sizes
- Containerized deployment for consistent environments
- Monorepo structure for simplified development workflow

## 📝 License

This project is licensed under the ISC License.
