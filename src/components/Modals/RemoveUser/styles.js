import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-size: 0.875rem;
    line-height: 1.098rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.black};

    > strong {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 240px;
  width: 100%;

  margin: 1.25rem auto 0;
`;

export const Button = styled.button`
  width: max-content;
  min-width: 6rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  border: none;
  background: ${({ theme, danger }) =>
    danger ? theme.colors.danger : theme.colors.secondary};
  color: ${({ theme, danger }) =>
    danger ? theme.colors.white : theme.colors.black};
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1.025rem;
`;
