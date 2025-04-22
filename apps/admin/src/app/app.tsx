import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const Registration = React.lazy(() => import('registration/Module'));
const Benefit = React.lazy(() => import('benefit/Module'));
const Contribution = React.lazy(() => import('contribution/Module'));
const Finance = React.lazy(() => import('finance/Module'));
const Asset = React.lazy(() => import('asset/Module'));
const Customer = React.lazy(() => import('customer/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/benefit">Benefit</Link>
        </li>
        <li>
          <Link to="/contribution">Contribution</Link>
        </li>
        <li>
          <Link to="/finance">Finance</Link>
        </li>
        <li>
          <Link to="/asset">Asset</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="admin" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
