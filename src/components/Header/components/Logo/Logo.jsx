import React from 'react';

const Logo = () => {
  return (
    <>
      <h1>{window.innerWidth < 993 ? 'YW' : 'Youth weekend'}</h1>
    </>
  );
}

export default Logo;