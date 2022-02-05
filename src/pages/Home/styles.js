import styled from "styled-components";

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
