import React from 'react';
import StarburstBadge from './Badges/StarburstBadge';
import CircleBadge from './Badges/CircleBadge';

const BADGE_MAP = {
  'starburst': StarburstBadge,
  'circle': CircleBadge,
  'none': () => null
};

export default function ProductCard({ item, badgeStyle, className, showDataSpot }) {
  const BadgeComponent = BADGE_MAP[badgeStyle] || BADGE_MAP['none'];

  let imageUrl = "https://via.placeholder.com/150"; // Default placeholder

  if (item.image && item.image.url) {
    // Live backend data structure
    imageUrl = item.image.url;
  } else if (item.image_url) {
    // Mock data structure
    const imageName = Array.isArray(item.image_url) ? item.image_url[0] : item.image_url;
    imageUrl = `/src/assets/${imageName}`;
  }

  return (
    <div className={`product-card ${className || ''}`}>

      <img src={imageUrl} alt={item.name} />
      
      <h3>{item.name}</h3>
      
      <div className="price-and-savings-row">
        <div className="price-row">
          <span className="current-price">₹{item.price}</span>
          <span className="mrp">₹{item.mrp}</span>
        </div>
        <div className="dataspo-and-discount">
          {showDataSpot && <p className="data-spot-bubble">spot</p>}
          <BadgeComponent savings={item.savings} />
        </div>
      </div>
    </div>
  );
}

