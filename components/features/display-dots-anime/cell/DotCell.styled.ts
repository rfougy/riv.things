import styled from "@emotion/styled";

export const Dot = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
  display: inline-block;
  height: 0.425rem;
  margin: 0.085rem;
  opacity: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? 0 : 1};
  width: 0.425rem;

  @media (max-width: 40em) {
    height: 0.25rem;
    margin: 0.05rem;
    width: 0.25rem;
  }
`;
