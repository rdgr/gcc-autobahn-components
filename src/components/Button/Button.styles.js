import styled from 'styled-components';
import ty from '../../framework/ty';

const StyledButton = styled.button`
  ${ty`
    ba lh-solid flex items-center justify-center ph2 ph4-ns pv3 br2 fw7 f5 pointer
    ${(props) => props.theme.button.base}
    ${(props) => props.theme.button[props.color]}
  `}
  transition: all .5s ease;
  &:hover {
    filter: brightness(110%);
  }
`;

export default StyledButton;
