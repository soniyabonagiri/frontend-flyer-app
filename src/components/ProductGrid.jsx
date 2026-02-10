import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, badgeStyle }) {
  if (products.length === 7) {
    return (
      <div className="product-grid-7-items">
        {products.map((item, index) => {
          let spanClass = '';
          if (index < 2) {
            spanClass = 'span-3';
          } else if (index < 5) {
            spanClass = 'span-2';
          } else {
            spanClass = 'span-3';
          }
          return (
            <ProductCard
              key={item.id || index}
              item={item}
              badgeStyle={badgeStyle}
              className={spanClass}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="product-grid product-grid-3col">
      {products.map((item, index) => {
        let customClass = '';
        if (index === 0) {
          customClass = 'white-text';
        } else if (index === 1) { // 6th product
          customClass = 'red-discount-text';
        } else if (index === 2) {
          customClass = 'white-text blue-product-image-padding';
        }
        return (
          <ProductCard
            key={item.id || index}
            item={item}
            badgeStyle={badgeStyle}
            className={customClass}
          />
        );
      })}
    </div>
  );
}

