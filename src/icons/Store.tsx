import { IconSvgProps } from '../types';

export const Store = (props: IconSvgProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.5 3H18.5L22 7V9C22 10.0144 21.6215 10.9413 21 11.6458V21H3V11.6458C2.37852 10.9413 2 10.0144 2 9V7L5.5 3ZM5 12.8738V19H9L9.00001 17C9.00001 15.3431 10.3432 14 12 14C13.6569 14 15 15.3431 15 17V19H19V12.8738C18.6802 12.9561 18.3451 13 18 13C16.8053 13 15.7329 12.4762 15 11.6458C14.2671 12.4762 13.1947 13 12 13C10.8053 13 9.73295 12.4762 9 11.6458C8.26706 12.4762 7.19469 13 6 13C5.65489 13 5.31975 12.9561 5 12.8738Z"
    />
  </svg>
);
