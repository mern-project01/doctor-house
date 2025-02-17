import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContex from './components/AuthContext/UserContex.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContex>
      <App />
    </UserContex>
  </StrictMode>
);
