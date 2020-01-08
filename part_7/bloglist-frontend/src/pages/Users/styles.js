import styled from 'styled-components';
import { darken } from 'polished';

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
`;

export const Table = styled.table`
  margin-top: 15px;
`;

export const THead = styled.thead`
  th {
    text-align: initial;
    margin-bottom: 5px;
  }
`;

export const TBody = styled.tbody`
  tr {
    td {
      a {
        font-weight: bold;

        &:hover {
          color: ${darken(0.1, `#333`)};
        }
      }
    }
  }
`;
