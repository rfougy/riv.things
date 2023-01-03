import _ from "lodash";
import { useEffect } from "react";
import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils";
import IAllCoords from "../../../interfaces/IAllCoords";
import { useDisplayDotsCoordsContext } from "../../context/DisplayDotsCoordsContext";
import DotWord from "./word/DotWord";

import { Container } from "./DisplayDotsAnime.styled";

const DisplayDotsAnime: React.FC<{ text?: string }> = ({
  text = "DISPLAY DOTS!",
}) => {
  const { setInactiveCoords, setInactiveCoordsIsInContext } =
    useDisplayDotsCoordsContext();

  const upperCaseText = text.toUpperCase();

  const coordsByWordAndSpace: any = Object.values(
    groupCoordsByWordAndSpace(upperCaseText)
  );
  const coordsByChar: IAllCoords[] = Object.values(
    groupCoordsByChar(upperCaseText)
  );
  const allInactiveCoords: number[][] = coordsByChar.reduce(
    (inactiveCoordsList: number[][], coordGroup: IAllCoords) => {
      inactiveCoordsList.push(...coordGroup.inactiveCoords);
      return inactiveCoordsList;
    },
    []
  );

  useEffect(() => {
    setInactiveCoords(shuffleArr(allInactiveCoords));
    setInactiveCoordsIsInContext(true);
  }, []);

  return (
    <Container>
      {coordsByWordAndSpace.map((wordOrSpace: any, index: number) => (
        <DotWord key={index} wordOrSpace={wordOrSpace} />
      ))}
    </Container>
  );
};

export default DisplayDotsAnime;
