import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 340px;
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }

  > section {
    max-width: 200px;
    width: 100%;

    display: flex;
    flex-direction: column;

    > h4 {
      font-size: 1.5rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      > span {
        margin-top: 0.5rem;
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;
