import React from "react";
import { Suspense } from "react";// Suspense API isn used in asynchronous data fetching and asychronous data fetching and rendering
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const Landing = React.lazy(()=> import ("./components/landing"));//lazy loading
const Dashboard = React.lazy(()=> import ("./components/dashboard"));//lazy loading

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback = {"loading..."}><Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback = {"loading..."}><Dashboard /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//to solve the issue of useNavigate not working since it can only be used inside a component, the solution:
function AppBar() {
  const navigate = useNavigate();//navigate  to perform client-side routing
  return (
    <div>
      <div className="top-bar">
        <div className="div-to-left">V's React App</div>
        <div className="div-to-right">
          <button onClick={() => {navigate('/')}}>Landing Page</button>
          <button onClick={() => {navigate('/dashboard')}}>
            Dashboard Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
