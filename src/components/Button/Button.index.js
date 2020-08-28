import React from 'react';
import { string } from 'prop-types';

import StyledButton from './Button.styles';

const Button = (props) => {
  const { label, ...rest } = props;
  return (
    <StyledButton type="button" {...rest}>
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'primary',
};

Button.propTypes = {
  label: string.isRequired,
  color: string,
};

export default Button;
