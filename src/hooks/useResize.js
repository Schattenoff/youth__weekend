import { useEffect } from "react";
import { useState } from "react";

export function useResize() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return { innerWidth, setInnerWidth };
}