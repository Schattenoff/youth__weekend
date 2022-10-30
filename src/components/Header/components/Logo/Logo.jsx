import React from 'react';
import { useResize } from '../../../../hooks/useResize';

const Logo = () => {
  const { innerWidth: width } = useResize();
  return (
    <>
      <h1>{width < 993 ? 'YW' : 'Youth weekend'}</h1>
    </>
  );
}

export default Logo;