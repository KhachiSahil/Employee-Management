import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Employee from "./Component/Employee";
import Navbar from "./Component/Navbar";
import Sidebar from "./SmallComponent/Dashboard/Sidebar";
import MainContent from "./SmallComponent/Dashboard/MainComponent";
import Login from "./Component/Login";
import Crud from "./Component/Crud";
import Notadmin from "./Component/Notadmin";
import { RecoilRoot,useRecoilValue } from "recoil";
import { isClient } from "../recoil/atoms";

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const page = useRecoilValue(isClient);

  return (
    <>
      {isLoginPage ? (
        <Login />
      ) : (
        <>
            <Navbar />
            {page==='admin'?(<Sidebar />):(<></>)}

          <Routes>
            <Route path="/dashboard" element={<MainContent />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/employees" element={<Employee />} />
            <Route path="/dashboard/crud" element={<Crud />} />
            <Route path="/employee" element={<Notadmin/>}/> 
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
