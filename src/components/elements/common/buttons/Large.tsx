import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 5px 9px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: rgb(var(--ig-primary-button));
  color: rgb(var(--web-always-white));
  font-size: 14px;
  font-weight: var(--font-weight-system-semibold);
  text-align: center;
  text-overflow: ellipsis;

  &:disabled,
  &:active {
    background-color: rgba(var(--ig-primary-button), 0.3);
    cursor: default;
  }
`;

interface LargeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Large = ({
  children,
  loading = false,
  disabled,
  ...rest
}: LargeProps): ReactElement => {
  return (
    <Button disabled={disabled || loading} {...rest}>
      {loading ? 'loading...' : children}
    </Button>
  );
};

export default Large;
