import React from 'react';

const Logo = ({ src, alt = "Logo", className = "" }) => {
  return (
    <a href="/" className={`logo-link ${className}`}>
      <img src={src} alt={alt} className="logo-img" />
    </a>
  );
};

export default Logo;