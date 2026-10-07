import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ArrowRight: React.FC<IconProps> = ({
  width = 19,
  height = 12,
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 12"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M1 6h16M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
};

export default ArrowRight;
