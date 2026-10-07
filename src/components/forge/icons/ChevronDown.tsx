import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ChevronDown: React.FC<IconProps> = ({
  width = 10,
  height = 6,
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
};

export default ChevronDown;
