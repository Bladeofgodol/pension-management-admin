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
const Project = React.lazy(() => import('registration/Project'));
const RegistrationForm = React.lazy(() => import('registration/Form'));
const RegistrationReport = React.lazy(() => import('registration/Report'));

const Benefit = React.lazy(() => import('benefit/Module'));
const BenefitDashboard = React.lazy(() => import('benefit/Dashboard'));
const BenefitEntitlement = React.lazy(() => import('benefit/Entitlement'));
const BenefitRetiree = React.lazy(() => import('benefit/Retiree'));

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
      <Route
        path="/registration/project"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <Project />
          </DashboardLayout>
        }
      />
      <Route
        path="/registration/form"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <RegistrationForm />
          </DashboardLayout>
        }
      />
      <Route
        path="/registration/report"
        element={
          <DashboardLayout dashboard={<RegistrationDashboard />}>
            <RegistrationReport />
          </DashboardLayout>
        }
      />

      <Route
        path="/benefit"
        element={
          <DashboardLayout dashboard={<BenefitDashboard />}>
            <Benefit />
          </DashboardLayout>
        }
      />
      <Route
        path="/benefit/entitlement"
        element={
          <DashboardLayout dashboard={<BenefitDashboard />}>
            <BenefitEntitlement />
          </DashboardLayout>
        }
      />
      <Route
        path="/benefit/retirees"
        element={
          <DashboardLayout dashboard={<BenefitDashboard />}>
            <BenefitRetiree />
          </DashboardLayout>
        }
      />
      <Route path="/contribution" element={<Contribution />} />
      <Route path="/fundFinance" element={<Finance />} />
      <Route path="/investmentAsset" element={<Asset />} />
      <Route path="/customerService" element={<Customer />} />
    </Routes>
  );
}

export default App;
