import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 4px;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  a {
    color: ${colors.primary};
    margin: 10px 0;
    font-size: 16px;
    &:hover {
      color: ${darken(0.08, `${colors.primary}`)};
    }
  }

  div {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        margin-right: 5px;
      }
    }
  }
`;
