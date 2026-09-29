import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href = '#contact',
  className = '',
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      style={buttonStyle}
      className={`inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest cursor-pointer select-none px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
    >
      {children || 'Contact Me'}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="border-none bg-transparent p-0">
      {content}
    </button>
  );
};

export default ContactButton;
