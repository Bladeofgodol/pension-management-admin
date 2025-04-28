import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/layout';
import AllContributions from './allContributions';
import Apply from './apply retirment';
import FAQ from './faq';
import Home from './home';
import Login from './login';
import ReportEmployer from './reportEmployer';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/contributions"
          element={
            <Layout>
              <AllContributions />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/report-employer"
          element={
            <Layout>
              <ReportEmployer />
            </Layout>
          }
        />
        <Route
          path="/apply"
          element={
            <Layout>
              <Apply />
            </Layout>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
