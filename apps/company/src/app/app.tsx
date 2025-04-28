import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboardLayout';
import Home from './home';
import Login from './login';
import PayNow from './payNow';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/paynow" element={<PayNow />} />
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
