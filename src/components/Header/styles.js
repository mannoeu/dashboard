import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  z-index: 1000;

  > h3 {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 1.098rem;

    > span {
      margin-top: 0.25rem;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;
