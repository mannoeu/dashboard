import styled from "styled-components";
import theme from "styles/global";

export const Button = styled.button`
  width: max-content;
  min-width: 6rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  border: none;
  background: ${({ theme, danger, disabled, secondary }) =>
    disabled
      ? theme.colors.gray_dark
      : danger
      ? theme.colors.danger
      : secondary
      ? "transparent"
      : theme.colors.secondary};
  color: ${({ theme, danger, disabled, secondary }) =>
    disabled
      ? theme.colors.gray_dark
      : danger
      ? theme.colors.white
      : secondary
      ? theme.colors.gray_dark
      : theme.colors.black};
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1.025rem;
  border: 0.063rem solid
    ${({ theme, danger, disabled, secondary }) =>
      disabled
        ? theme.colors.gray_dark
        : danger
        ? theme.colors.danger
        : secondary
        ? theme.colors.gray_dark
        : theme.colors.secondary};
`;
