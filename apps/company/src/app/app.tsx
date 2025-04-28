import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboardLayout';
import Employees from './employees';
import EmployeesPage from './employeesPage';
import Home from './home';
import Login from './login';
import PayNow from './payNow';
import ProjectsPage from './projects';
import Reports from './reports';
import EligibleRetireesPage from './retirees';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/paynow" element={<PayNow />} />
        <Route path="/employees" element={<Employees />} />
        <Route
          path="/projects"
          element={
            <DashboardLayout>
              <ProjectsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/employeesPage"
          element={
            <DashboardLayout>
              <EmployeesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/report"
          element={
            <DashboardLayout>
              <Reports />
            </DashboardLayout>
          }
        />
        <Route
          path="/retirees"
          element={
            <DashboardLayout>
              <EligibleRetireesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/home"
          element={
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
