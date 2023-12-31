import { lightTheme } from "./../../../styles/theme";
import styled from "@emotion/styled";

export const Button = styled.button`
  border: 0.1rem solid
    ${(props: any) =>
      props.forModal ? lightTheme.secondary : props.theme.primary};
  border-radius: 5vh;

  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: ${(props: any) =>
    props.forModal ? lightTheme.secondary : props.theme.primary};
  background-color: ${(props: any) =>
    props.forModal
      ? "transparent"
      : props.theme.id === "light"
      ? props.theme.secondary
      : "none"};

  &:hover {
    cursor: cell;

    color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.secondary : "none"};
    background-color: ${(props: any) =>
      props.forModal
        ? "#2D2D2D"
        : props.theme.id === "light"
        ? props.theme.primary
        : "#2D2D2D"};
  }
`;
