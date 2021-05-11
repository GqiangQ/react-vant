import * as React from 'react'

export interface ButtonPropsType {
    type?: 'primary' | 'info' | 'warning' | 'danger' | 'default';
    size?: 'large' | 'normal' | 'small' | 'mini';
    color?: string;
    icon?: string;
    block?: boolean;
    plain?: boolean;
    square?: boolean;
    round?: boolean;
    disabled?: boolean;
    hairline?: boolean;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    touchstart?: React.MouseEventHandler<HTMLButtonElement>
  }
export default ButtonPropsType