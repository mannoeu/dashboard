import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

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

  > div.order-mobile {
    display: none;

    cursor: pointer;
    margin-top: 2rem;

    padding: 0.8rem 0.5rem;
    background: ${({ theme }) => theme.colors.light};

    > p {
      font-size: 1.2rem;
      line-height: 1.125rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > i {
        font-size: 0.875rem;
        line-height: 1.098rem;
      }
    }

    > button {
      cursor: pointer;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;

      border: none;
      margin-top: 0.5rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      transition: all 0.8s ease;

      &.asc {
        transform: rotate(180deg);
      }
      &.desc {
        transform: rotate(-180deg);
      }
    }
  }

  @media (max-width: 599px) {
    > div.order-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;

  max-width: 200px;
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 1rem auto 0;

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

  @media (max-width: 599px) {
    max-width: unset;
  }
`;
