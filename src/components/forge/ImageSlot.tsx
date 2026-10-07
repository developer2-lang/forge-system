import React from 'react';

interface ImageSlotProps {
  slot: string;
  className?: string;
  dark?: boolean;
  children?: React.ReactNode;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  slot,
  className = '',
  dark = false,
  children,
}) => {
  const classes = ['imgslot', dark ? 'imgslot--dark' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} data-slot={slot}>
      {children || slot}
    </div>
  );
};

export default ImageSlot;
