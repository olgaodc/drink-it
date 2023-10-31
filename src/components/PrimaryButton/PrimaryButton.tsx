import React from 'react';
import { Button } from 'antd';
import styles from './PrimaryButton.module.css';

interface Props {
    htmlType?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = ({
    children,
    onClick,
}) => {
  return (
    <Button className={styles.button} type="primary" onClick={onClick}>{children}</Button>
  )
}

export default PrimaryButton