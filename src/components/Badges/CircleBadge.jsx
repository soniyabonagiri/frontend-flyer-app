import React from 'react';

export default function CircleBadge({ savings }) {
  const style = {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  };

  return <div style={style} className="badge-text">Save {savings}</div>;
}
