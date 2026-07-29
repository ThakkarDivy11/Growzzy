'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number; // duration in ms
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  const valueStr = String(value);

  // Parse prefix, main numeric value, decimal places, and suffix
  const match = valueStr.match(/^([^0-9.]*)([0-9.]+)(.*)$/);

  const prefix = match ? match[1] : '';
  const targetNum = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const isDecimal = match ? match[2].includes('.') : false;
  const decimalPlaces = (match && isDecimal && match[2].includes('.')) ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out cubic animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = easedProgress * targetNum;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, targetNum, duration]);

  const formattedValue = isDecimal
    ? count.toFixed(decimalPlaces)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};
