import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Form = styled.form`
  div {
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-top: 10px;
    }
  }
  button {
    height: 24px;
    background: ${colors.addButton};
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    color: ${colors.white};
    margin: 5px 0;
    font-size: 12px;
    padding: 0 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, `${colors.addButton}`)};
    }
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${colors.darkGray};

  input {
    width: 100%;
    height: 28px;
    margin: 5px 0 5px;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid ${colors.border};
  }
`;
