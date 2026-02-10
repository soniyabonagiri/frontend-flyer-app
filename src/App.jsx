import React, { useState, useEffect } from 'react';
import FlyerContainer from './components/FlyerContainer';
import { getProducts } from './services/api';
import samplePayload from './mocks/sample_payload.json'; // Keep this for the 'config'

function App() {
  // Initialize state with the config from the mock and an empty array for data
  const [flyerPayload, setFlyerPayload] = useState({
    config: samplePayload.config,
    data: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the backend
    getProducts()
      .then(fetchedProducts => {
        // Combine fetched data with the existing config
        setFlyerPayload(prevPayload => ({
          ...prevPayload,
          data: fetchedProducts,
        }));
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Make sure the backend server is running.");
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this runs once on mount

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <FlyerContainer payload={flyerPayload} />
    </div>
  );
}

export default App;