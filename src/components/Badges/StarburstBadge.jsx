import React from 'react';

export default function StarburstBadge({ savings }) {
  const style = {
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  };

  return <div style={style} className="badge-text">-{savings}</div>;
}
