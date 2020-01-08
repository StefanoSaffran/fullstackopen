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
  }

  h3 {
    margin: 10px 0;
  }

  ul {
    list-style-type: square;
    margin-left: 25px;

    li {
      line-height: 1.5;
    }
  }

  a {
    text-align: center;
    margin-top: 20px;
    color: ${colors.addButton};
    font-size: 16px;

    &:hover {
      color: ${darken(0.08, `${colors.addButton}`)};
    }
  }
`;
