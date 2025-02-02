# Passkey Authentication in MERN Stack

A proof-of-concept implementation of **passkey authentication** using the **WebAuthn API** in a **MERN stack application**. This enables **passwordless login** with device biometrics, security keys, or platform authenticators.

## 🛠 Installation & Setup

### Backend Setup
```sh
cd backend
npm install
cp .env.example .env  # Configure your MongoDB URI
npm run dev  # Start the server with nodemon
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev  # Start Vite development server
```

## 🔐 Usage
### 1️⃣ Register a Passkey
- Open the frontend at `http://localhost:5173`
- Enter a username and click **Register Passkey**
- Authenticate using your device’s biometrics or a security key

### 2️⃣ Authenticate with a Passkey
- Click **Login with Passkey**
- Authenticate using the registered passkey

## 🏗 Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite, @simplewebauthn/browser
- **Auth:** WebAuthn API, @simplewebauthn/server

## 📜 License
MIT License

---
> This project is a proof of concept and should not be used in production without additional security enhancements.

