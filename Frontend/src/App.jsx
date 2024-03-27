import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Employee from "./Component/Employee";
import Navbar from "./Component/Navbar";
import Sidebar from "./SmallComponent/Dashboard/Sidebar";
import MainContent from "./SmallComponent/Dashboard/MainComponent";
import Login from "./Component/Login";
import Crud from "./Component/Crud";
import Notadmin from "./Component/Notadmin";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {isLoginPage ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<MainContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/employees" element={<Employee />} />
            <Route path="/dashboard/crud" element={<Crud />} />
            <Route path="/s" element={<Notadmin/>}/> 
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
