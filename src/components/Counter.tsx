import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ 
  value, 
  suffix = '', 
  duration = 2000, 
  className = '' 
}: CounterProps) {
  const { count, elementRef } = useCounter(value, { duration });

  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-300 ${className}`}
    >
      {count}{suffix}
    </div>
  );
}
