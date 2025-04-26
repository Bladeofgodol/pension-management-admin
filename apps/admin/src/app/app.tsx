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
const BenefitReport = React.lazy(() => import('benefit/Report'));

const Contribution = React.lazy(() => import('contribution/Module'));
const ContributionDashboard = React.lazy(
  () => import('contribution/Dashboard')
);
const ContributionContribution = React.lazy(
  () => import('contribution/Contribution')
);
const ContributionOutstanding = React.lazy(
  () => import('contribution/Outstanding')
);
const ContributionRecordContribution = React.lazy(
  () => import('contribution/RecordContrib')
);
const ContributionMissingContribution = React.lazy(
  () => import('contribution/MissingContrib')
);

const Finance = React.lazy(() => import('finance/Module'));
const FinanceDashboard = React.lazy(() => import('finance/Dashboard'));
const FinanceBudget = React.lazy(() => import('finance/Budget'));
const FinanceForm = React.lazy(() => import('finance/Form'));
const FinanceRetiree = React.lazy(() => import('finance/Retiree'));

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
        path="/registration/region/delete"
        element={
          <DashboardLayout
            dashboard={<RegistrationDashboard />}
            blur={true}
            deleteMessage={
              <div className="py-5 gap-5 flex flex-col">
                <div className="text-2xl font-bold">Are You Sure</div>
                <div className="text-xl text-grey">
                  This will delete Region 1 entry from the system
                </div>
              </div>
            }
          >
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
        path="/registration/branch/delete"
        element={
          <DashboardLayout
            dashboard={<RegistrationDashboard />}
            blur={true}
            deleteMessage={
              <div className="py-5 gap-5 flex flex-col">
                <div className="text-2xl font-bold">Are You Sure</div>
                <div className="text-xl text-grey">
                  This will delete Branch 1 entry from the system
                </div>
              </div>
            }
          >
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
        path="/registration/organization/delete"
        element={
          <DashboardLayout
            dashboard={<RegistrationDashboard />}
            blur={true}
            deleteMessage={
              <div className="py-5 gap-5 flex flex-col">
                <div className="text-2xl font-bold">Are You Sure</div>
                <div className="text-xl text-grey">
                  This will delete Org 1 entry from the system
                </div>
              </div>
            }
          >
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
        path="/registration/employee/delete"
        element={
          <DashboardLayout
            dashboard={<RegistrationDashboard />}
            blur={true}
            deleteMessage={
              <div className="py-5 gap-5 flex flex-col">
                <div className="text-2xl font-bold">Are You Sure</div>
                <div className="text-xl text-grey">
                  This will delete Abebe Yelema entry from the system
                </div>
              </div>
            }
          >
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
        path="/registration/project/delete"
        element={
          <DashboardLayout
            dashboard={<RegistrationDashboard />}
            blur={true}
            deleteMessage={
              <div className="py-5 gap-5 flex flex-col">
                <div className="text-2xl font-bold">Are You Sure</div>
                <div className="text-xl text-grey">
                  This will delete Project 1 entry from the system
                </div>
              </div>
            }
          >
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
      <Route
        path="/benefit/report"
        element={
          <DashboardLayout dashboard={<BenefitDashboard />}>
            <BenefitReport />
          </DashboardLayout>
        }
      />
      <Route
        path="/contribution"
        element={
          <DashboardLayout dashboard={<ContributionDashboard />}>
            <Contribution />
          </DashboardLayout>
        }
      />
      <Route
        path="/contribution/contribution"
        element={
          <DashboardLayout dashboard={<ContributionDashboard />}>
            <ContributionContribution />
          </DashboardLayout>
        }
      />
      <Route
        path="/contribution/outstanding"
        element={
          <DashboardLayout dashboard={<ContributionDashboard />}>
            <ContributionOutstanding />
          </DashboardLayout>
        }
      />
      <Route
        path="/contribution/recordcontrib"
        element={
          <DashboardLayout dashboard={<ContributionDashboard />}>
            <ContributionRecordContribution />
          </DashboardLayout>
        }
      />
      <Route
        path="/contribution/missingContrib"
        element={
          <DashboardLayout dashboard={<ContributionDashboard />}>
            <ContributionMissingContribution />
          </DashboardLayout>
        }
      />

      <Route
        path="/fundFinance"
        element={
          <DashboardLayout dashboard={<FinanceDashboard />}>
            <Finance />
          </DashboardLayout>
        }
      />
      <Route
        path="/fundFinance/budget"
        element={
          <DashboardLayout dashboard={<FinanceDashboard />}>
            <FinanceBudget />
          </DashboardLayout>
        }
      />
      <Route
        path="/fundFinance/form"
        element={
          <DashboardLayout dashboard={<FinanceDashboard />}>
            <FinanceForm />
          </DashboardLayout>
        }
      />
      <Route
        path="/fundFinance/retiree"
        element={
          <DashboardLayout dashboard={<FinanceDashboard />}>
            <FinanceRetiree />
          </DashboardLayout>
        }
      />

      <Route path="/investmentAsset" element={<Asset />} />
      <Route path="/customerService" element={<Customer />} />
    </Routes>
  );
}

export default App;
