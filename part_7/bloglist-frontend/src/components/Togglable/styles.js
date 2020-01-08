import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const ToggleButton = styled.button`
  height: 24px;
  background: ${colors.addButton};
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: ${colors.white};
  margin: 5px 0 10px;
  font-size: 12px;
  padding: 0 10px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, `${colors.addButton}`)};
  }
`;

export const CancelButton = styled.button`
  height: 24px;
  background: ${colors.lightGray};
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: ${colors.white};
  margin: 5px 0 10px;
  font-size: 12px;
  padding: 0 10px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, `${colors.lightGray}`)};
  }
`;
