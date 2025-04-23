import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboardLayout';
import Login from './login';

const Registration = React.lazy(() => import('registration/Module'));
// Add a module declaration for 'registration/Dashboard' if it is a remote/federated module
const RegistrationDashboard = React.lazy(
  () => import('registration/Dashboard')
);

const Region = React.lazy(() => import('registration/Region'));
const Branch = React.lazy(() => import('registration/Branch'));
const Employee = React.lazy(() => import('registration/Employee'));
const Organization = React.lazy(() => import('registration/Organization'));

const Benefit = React.lazy(() => import('benefit/Module'));
const Contribution = React.lazy(() => import('contribution/Module'));
const Finance = React.lazy(() => import('finance/Module'));
const Asset = React.lazy(() => import('asset/Module'));
const Customer = React.lazy(() => import('customer/Module'));

export function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />

      {/* Dashboard Routes */}
      <Route
        path="/registration"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <Registration />
          </DashboardLayout>
        }
      />
      <Route
        path="/registration/region"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <Region />
          </DashboardLayout>
        }
      />
      <Route
        path="/registration/branch"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <Branch />
          </DashboardLayout>
        }
      />
      <Route
        path="/registration/organization"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <Organization />
          </DashboardLayout>
        }
      />
      <Route
        path="/registration/employee"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <Employee />
          </DashboardLayout>
        }
      />

      <Route path="/benefit" element={<Benefit />} />
      <Route path="/contribution" element={<Contribution />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/asset" element={<Asset />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default App;
