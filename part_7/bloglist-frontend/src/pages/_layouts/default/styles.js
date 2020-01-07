import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    45deg,
    ${colors.primary},
    ${darken(0.5, `${colors.primary}`)}
  );
`;
