import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.4rem;
    line-height: 1.125rem;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.098rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;

  max-width: 200px;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  border-radius: 0.25rem;
  border: 0.063rem solid ${({ theme }) => theme.colors.secondary};

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.2s ease;

  > span {
    flex: none;
    margin-right: 0.25rem;
    padding-right: 0.5rem;
    border-right: 0.063rem solid ${({ theme }) => theme.colors.black};
  }

  > b {
    margin: 0 auto;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 1rem auto 0;
  padding: 1rem;
  border: 0.063rem solid ${({ theme }) => theme.colors.light};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
`;

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

export const Submit = styled.div`
  margin-top: 2rem;
  ${({ flex, justify }) =>
    flex &&
    css`
      display: flex;
      justify-content: ${justify ? justify : "flex-start"};
    `};
  button + button {
    margin-left: 1rem;
  }
`;
