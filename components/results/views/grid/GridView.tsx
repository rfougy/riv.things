import { useEffect } from "react";
import { useModalContext } from "../../../../context/ModalContext";
import PostCard from "./card/PostCard";

import { Grid, GridItem } from "./GridView.styled";

const GridView: React.FC<{
  content: any;
}> = ({ content }) => {
  const { setContent, handleModalOpen } = useModalContext();

  useEffect(() => setContent(content), [content, setContent]);

  return content ? (
    <Grid>
      {content.map((singleContent: any, index: number) => (
        <GridItem key={index} onClick={() => handleModalOpen(singleContent)}>
          <PostCard
            path={singleContent.path}
            frontmatter={singleContent.frontmatter}
          />
        </GridItem>
      ))}
    </Grid>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default GridView;
