import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 5px;
  border: 1px solid #333;
  border-radius: 4px;
  margin-top: 5px;

  a {
    color: #4d85ee;
    font-size: 13px;

    &:hover {
      color: ${darken(0.08, `#4d85ee`)};
    }
  }
`;
