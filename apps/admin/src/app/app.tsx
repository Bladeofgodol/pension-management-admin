import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboardLayout';
import Login from './login';

const Registration = React.lazy(() => import('registration/Module'));
const RegistrationDashboard = React.lazy(
  () => import('registration/Dashboard')
);
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
      <Route path="/benefit" element={<Benefit />} />
      <Route path="/contribution" element={<Contribution />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/asset" element={<Asset />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default App;
