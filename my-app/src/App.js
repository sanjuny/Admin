import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DepartmentPage from "./pages/DepartmentPage";
import EmployeePage from "./pages/EmployeePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/EmployeeManagment" element={<EmployeePage />} />
          <Route path="/Department" element={<DepartmentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
