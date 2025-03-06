# CodeMate: AI-Powered Coding Assistant



[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](#contributing)
[![Deployment](https://img.shields.io/badge/deployment-Vercel-blue.svg)](https://codemate-taupe.vercel.app/)

## 🚀 Overview
**CodeMate** is an AI-powered coding assistant that helps developers write, debug, and understand code more efficiently. Built using the **MERN stack** and powered by **Gemini API**, CodeMate provides intelligent suggestions, explanations, and real-time assistance.

## ✨ Features
- 💡 **AI-Powered Code Assistance**: Get real-time code suggestions and explanations.
- 🔍 **Code Debugging & Optimization**: Identify issues and optimize your code.
- 📝 **Code Documentation Generator**: Automatically generate documentation for your projects.
- 🌍 **Multi-Language Support**: Works with multiple programming languages.
- 📁 **Project-Based Code Understanding**: Analyzes entire repositories for insights.
- 🛠 **Seamless Integration**: Integrates with GitHub for better workflow.

## 🛠 Tech Stack
- **Frontend**: React (Vite), TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: Gemini API
- **Deployment**: Vercel (Frontend), Render (Backend)

## 📸 Screenshots
![CodeMate UI](https://your-image-link.com)

## 🎯 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB
- Git
- Vite (for frontend development)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Jasmeet-011/Codemate.git
cd Codemate
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in both `backend` and `frontend` directories and add necessary environment variables:
```env
# Backend .env file
PORT=5000
MONGO_URI=your_mongo_db_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

```env
# Frontend .env file
VITE_BACKEND_URL=http://localhost:5000
```

### 4️⃣ Start the Application
#### Backend
```sh
cd backend
npm start
```
#### Frontend
```sh
cd frontend
npm run dev
```

## 📜 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/analyze` | Analyze and debug code |
| `POST` | `/api/suggest` | Get AI-powered code suggestions |
| `GET`  | `/api/docs` | Generate documentation |

## ✅ Best Practices Adopted
- ✅ **Modular Code Structure**: Clean separation of concerns.
- ✅ **Error Handling & Logging**: Implemented using middleware.
- ✅ **Environment Variables**: Secure API keys & database credentials.
- ✅ **Code Linting & Formatting**: Using ESLint and Prettier.
- ✅ **Responsive UI**: Built with TailwindCSS.

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 📩 Contact
For any questions or feedback, reach out via [GitHub Issues](https://github.com/Jasmeet-011/Codemate/issues) or email **your.email@example.com**.

---
🎯 **Star this repo** ⭐ if you find CodeMate helpful!
