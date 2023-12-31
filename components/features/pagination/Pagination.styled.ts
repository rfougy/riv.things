import { breakpoints } from "./../../../styles/theme";
import styled from "@emotion/styled";

export const Box = styled.div`
  margin-top: 4rem;
`;

export const PageNav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
`;

export const Button = styled.button`
  border: solid 0.1rem ${(props: any) => props.theme.primary};
  border-radius: 1rem;
  display: flex;
  flex-wrap: no-wrap;
  margin: 0 0.35rem;
  padding: 0.4rem 0.7rem;
  opacity: ${(props: any) => (props.disabled ? "0.5" : "1")};

  &:hover {
    background: ${(props: any) => props.theme.highlight};
  }

  @media (max-width: ${breakpoints.xs}) {
    border: solid 0.075rem ${(props: any) => props.theme.primary};
  }
`;

export const PageNumber = styled.p`
  font-size: 0.75rem;
  margin: 0 1rem;
  text-align: center;
`;
