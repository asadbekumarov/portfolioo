import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href = '#',
  className = '',
  children,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {children || 'Live Project'}
    </motion.a>
  );
};

export default LiveProjectButton;
