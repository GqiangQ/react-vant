import * as React from 'react'

export default interface IconPropsType {
    name?: string;
    dot?: boolean;
    badge?: string | number;
    size?: string | number;
    className?: string;
    color?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>
  }