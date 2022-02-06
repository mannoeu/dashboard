import styled, { css, keyframes } from "styled-components";

const wave = (props) => keyframes`
  from {
    background-color: ${props.theme.colors.gray};
  } to {
    background-color: ${props.theme.colors.gray_light};
  }
`;

export const TableContainer = styled.article`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 2rem;
  border-radius: 0.5rem;
  border: 0.063rem solid ${({ theme }) => theme.colors.light};
  padding: 1rem 1rem 0rem;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    width: 0.5rem;
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 0.42rem;
    border-radius: 0.42rem;
  }
`;

export const Headings = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
  list-style: none;
  grid-gap: 0.5rem;
  justify-items: center;
  padding-bottom: 1rem;
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.light};

  @media (max-width: 599px) {
    display: none;
  }
`;

export const Heading = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.098rem;
  cursor: ${({ canSort }) => (canSort ? "pointer" : "normal")};

  > span {
    padding: 0.25rem;
  }
`;

export const Row = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
  list-style: none;
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  padding: 1rem 0rem;

  & + & {
    border-top: 0.063rem solid ${({ theme }) => theme.colors.light};
  }

  li {
    font-size: 0.875rem;
    line-height: 1.098rem;

    > b {
      display: none;
    }

    ${({ loading }) =>
      loading &&
      css`
        padding: 0.5rem;

        width: 100%;
        min-width: 80px;
        max-width: 160px;
        border-radius: 0.25rem;

        background: ${({ theme }) => theme.colors.gray};
        animation: 1s linear 0s infinite alternate ${wave};
      `};
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;

    > li {
      width: 100%;

      display: flex;
      align-items: center;

      > b {
        margin-right: 0.25rem;
        display: block;
      }

      ${({ loading }) =>
        loading &&
        css`
          max-width: 100%;
        `};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  button + button {
    margin-left: 0.5rem;
  }

  @media (max-width: 599px) {
    width: 100%;
    justify-content: center;
  }
`;

export const IconButton = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, danger }) =>
    danger ? theme.colors.danger : theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, danger }) =>
    danger ? theme.colors.white : theme.colors.black};
  position: relative;
  transition: all 0.2s linear;

  :before {
    ${({ tooltip }) => tooltip && `content: "${tooltip}";`};
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    top: 0;
    transform: translateY(-40px);
    width: max-content;
    min-width: 50px;
    max-width: 130px;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.black};

    font-size: 0.75rem;
    line-height: 1.2rem;
    transition: all 0.2s ease-out;

    user-select: none;
    pointer-events: none;

    opacity: 0;
    z-index: 2000;
  }

  &:hover:before {
    opacity: 1;
    width: max-content;
    transform: translateY(-28px);
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const Empty = styled.div`
  margin: 10rem auto;
  width: 100%;
  display: flex;
  justify-content: center;

  > p {
    font-size: 0.875rem;
    line-height: 1.098rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

Headings.defaultProps = {
  canSort: false,
};

Row.defaultProps = {
  loading: false,
};

IconButton.defaultProps = {
  danger: false,
  tooltip: "",
};
