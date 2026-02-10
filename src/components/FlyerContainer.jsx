import React from 'react';
import '../styles/themes.css';
import '../styles/flyer.css';
import Header from './Header';
import ProductGrid from './ProductGrid';
import FirstPageLayout from './FirstPageLayout';

const PRODUCTS_ON_FIRST_PAGE = 7;
const PRODUCTS_PER_SUBSEQUENT_PAGE = 6;

const PagedFlyer = ({ payload }) => {
  if (!payload || !payload.config) return <div>Loading...</div>;

  const { config, data } = payload;

  const pages = [];
  let currentIndex = 0;

  // First page
  if (data.length > 0) {
    pages.push(data.slice(currentIndex, PRODUCTS_ON_FIRST_PAGE));
    currentIndex = PRODUCTS_ON_FIRST_PAGE;
  }

  // Subsequent pages
  while (currentIndex < data.length) {
    pages.push(data.slice(currentIndex, currentIndex + PRODUCTS_PER_SUBSEQUENT_PAGE));
    currentIndex += PRODUCTS_PER_SUBSEQUENT_PAGE;
  }

  return (
    <div className="flyer-wrapper" data-theme={config.theme}>
      {pages.map((pageData, pageIndex) => {
        if (pageIndex === 0) {
          return <FirstPageLayout key={pageIndex} config={config} data={pageData} />;
        }
        return (
          <div key={pageIndex} className="flyer-custom page-break">
            <Header
              title={config.header.title}
              subtitle={config.header.subtitle}
            />
            <ProductGrid
              products={pageData}
              badgeStyle={config.badgeStyle}
            />
          </div>
        );
      })}
    </div>
  );
};

export default function FlyerContainer({ payload }) {
  return <PagedFlyer payload={payload} />;
}
