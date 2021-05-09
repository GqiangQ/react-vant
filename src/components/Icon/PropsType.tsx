export default interface ButtonPropsType {
    name?: string;
    dot?: boolean;
    badge?: string | number;
    color?: boolean;
    size?: string | number;
    classPrefix?: string;
    tag?: string;
    onclick?: ()=>void
  }