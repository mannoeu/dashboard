import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10000;
  padding: 1rem;

  ${(props) =>
    props.show
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 0, 0, 0.8);
          opacity: 1;
          pointer-events: all;
        `
      : css`
          opacity: 0;
          background: transparent;
          pointer-events: none;
        `};

  transition: all 0.2s ease;
`;

export const Content = styled.div`
  position: absolute;
  left: 50%;
  ${(props) =>
    props.show
      ? css`
          top: 12%;
          transform: translate(-50%, 0%);
          background: ${({ theme }) => theme.colors.white};
        `
      : css`
          top: -100%;
          transform: translate(-50%, 0%);
          background: transparent;
        `};

  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  max-width: ${(props) => {
    switch (props.size) {
      case "lg":
        return "1280px";
      case "md":
        return "800px";
      default:
        return "480px";
    }
  }};

  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    > h4 {
      padding-right: 1rem;
      font-size: 1rem;
      line-height: 1.125rem;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }

    > button {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};

      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      transition: all 0.2s linear;

      &:hover {
        background: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
