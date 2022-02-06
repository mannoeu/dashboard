import styled from "styled-components";

export const Field = styled.fieldset`
  border: 0;

  & + fieldset {
    margin-top: 1rem;
  }

  > label {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    line-height: 1.098rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;

    > input {
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 0.063rem solid ${({ theme }) => theme.colors.light};
      border: ;
    }
  }
  > span {
    font-size: 0.75rem;
    line-height: 1.025rem;
    color: ${({ theme }) => theme.colors.danger};
  }
`;
