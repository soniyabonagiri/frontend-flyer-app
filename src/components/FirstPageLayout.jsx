import React from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';
import ProductCard from './ProductCard';
import '../styles/flyer.css';

const BlueSection = () => <div className="blue-section"></div>;
const RedSection = () => <div className="red-section"></div>;
const WhiteSection = () => <div className="white-section"></div>;

export default function FirstPageLayout({ config, data }) {
  // Products for the blue section
  const blueBgProducts = data.slice(0, 2);
  // Products for the red background area (3rd and 4th)
  const redBgProducts = data.slice(2, 4);
  // Remaining products for the grid
  const otherProducts = data.slice(4);

  return (
    <div className="flyer-custom first-page-layout">
      <div className="background-layer">
        <div className="top-section">
          <BlueSection />
          <RedSection />
        </div>
        <WhiteSection />
      </div>
      <div className="content-layer">
        <div className="content-top-section">
          <div className="header-blue-bg">
            <img src="https://res.cloudinary.com/dk4ulq8ww/image/upload/v1770640118/dmartlogo_eq0t1s.avif" alt="Logo" className="blue-section-logo" />
            <div className="blue-section-products">
              {blueBgProducts.map(item => (
                <ProductCard key={item.id} item={item} badgeStyle={config.badgeStyle} />
              ))}
            </div>
          </div>
          <div className="header-red-bg">
            <div className="subtitle-light-blue-strip">
              <p>{config.header.subtitle}</p>
            </div>
            <Header
              title={config.header.title}
            />
            <div className="red-bg-products">
              {redBgProducts.map(item => (
                <ProductCard key={item.id} item={item} badgeStyle={config.badgeStyle} showDataSpot={true} />
              ))}
            </div>
          </div>
        </div>
        <div className="product-grid-container">
          <ProductGrid
            products={otherProducts}
            badgeStyle={config.badgeStyle}
          />
        </div>
      </div>
    </div>
  );
}
