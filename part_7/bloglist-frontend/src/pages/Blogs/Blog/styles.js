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

  div {
    a.dont-break-out {
      /* css to handle long urls */

      /* These are technically the same, but use both */
      overflow-wrap: break-word;
      word-wrap: break-word;

      -ms-word-break: break-all;
      /* This is the dangerous one in WebKit, as it breaks things wherever */
      word-break: break-all;
      /* Instead use this non-standard one: */
      word-break: break-word;

      /* Adds a hyphen where the word breaks, if supported (No Blink) */
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;

      margin: 10px 0;
      font-size: 16px;
    }

    button.remove {
      height: 24px;
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      color: ${colors.white};
      margin: 10px 0 5px;
      font-size: 12px;
      padding: 0 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ee4d64')};
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      button.like {
        height: 20px;
        background: ${colors.addButton};
        transition: background 0.2s;
        margin: 5px 0;
        border: 0;
        border-radius: 4px;
        font-weight: bold;
        color: ${colors.white};
        font-size: 12px;
        padding: 0 10px;

        &:hover {
          background: ${darken(0.08, `${colors.addButton}`)};
        }
      }

      p {
        margin-right: 5px;
      }
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

export const Comments = styled.div`
  margin-top: 20px;

  ul {
    list-style-type: square;
    margin-top: 15px;
    margin-left: 25px;

    li {
      line-height: 1.5;
    }
  }
`;

export const Form = styled.form`
  margin-top: 15px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    input {
      width: 50%;
      height: 28px;
      padding: 0 15px;
      border-radius: 4px;
      border: 1px solid ${colors.border};
      margin-right: 10px;
    }

    button {
      height: 28px;
      background: ${colors.addButton};
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      color: ${colors.white};
      font-size: 12px;
      padding: 0 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, `${colors.addButton}`)};
      }
    }
  }
`;
