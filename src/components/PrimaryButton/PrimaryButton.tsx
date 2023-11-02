import React, { forwardRef } from 'react';
import { Button } from 'antd';
import styles from './PrimaryButton.module.css';
import { motion } from 'framer-motion';

interface Props {
    htmlType?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({
    children,
    onClick,
}, ref) => {
  return (
    <Button 
      className={styles.button} 
      ref={ref} 
      type="primary" 
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

export default PrimaryButton

export const MPrimaryButton = motion(PrimaryButton);