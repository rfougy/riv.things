import { ReactElement, useEffect, useState } from "react";
import { Box, Divider } from "./CollapsibleList.styled";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";
import Toggler from "./toggler/Toggler";

const CollapsibleList: React.FC<{
  children: ReactElement<any, any>;
  button?: {
    title: string;
    handleOnClick: (e?: React.MouseEvent<HTMLElement>) => any;
  };
}> = ({ children, button }) => {
  const [expanded, setExpanded] = useState<boolean>();

  const isVerticalView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  useEffect(() => setExpanded(!isVerticalView), [isVerticalView]);

  return isVerticalView ? (
    <Box>
      <Toggler
        title="FILTER OPTIONS"
        button={button}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <Divider />
      {expanded && (
        <>
          {children}
          <Divider />
        </>
      )}
    </Box>
  ) : (
    children
  );
};

export default CollapsibleList;
