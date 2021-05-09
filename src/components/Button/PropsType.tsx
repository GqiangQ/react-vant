export interface ButtonPropsType {
    type?: 'primary' | 'info' | 'warning' | 'danger';
    size?: 'large' | 'small' | 'mini';
    color: string;
    icon: string;
    block: boolean;
    plain: boolean;
    square: boolean;
    round: boolean;
    disabled?: boolean;
    hairline: boolean;
    loading?: boolean;
  }