// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import DetailDisplay from "./components/DetailDisplay";
import ReportPage from "./components/ReportPage";
import AddUser from "./components/AddUser";
import UserManagement from "./components/UserManagement";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Default route to redirect to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/detail-display" element={<DetailDisplay />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
