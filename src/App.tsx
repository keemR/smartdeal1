import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { deals, categoryDescriptions } from './data/deals';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/digital"
            element={
              <CategoryPage
                title="Digital Deals"
                description={categoryDescriptions.digital}
                deals={deals.digital}
              />
            }
          />
          <Route
            path="/grocery"
            element={
              <CategoryPage
                title="Grocery Coupons"
                description={categoryDescriptions.grocery}
                deals={deals.grocery}
              />
            }
          />
          <Route
            path="/lifestyle"
            element={
              <CategoryPage
                title="Lifestyle Discounts"
                description={categoryDescriptions.lifestyle}
                deals={deals.lifestyle}
              />
            }
          />
          <Route
            path="/travel"
            element={
              <CategoryPage
                title="Travel Savings"
                description={categoryDescriptions.travel}
                deals={deals.travel}
              />
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;