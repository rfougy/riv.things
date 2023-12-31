import Link from "next/link";
import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import { Box } from "./PostCard.styled";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const { title, coverImage, placeholderImage }: IPostFrontMatter = frontmatter;

  return (
    <Box>
      <Image
        src={coverImage}
        alt={`Cover image for post titled '${title}'`}
        width={650}
        height={100}
        placeholder="blur"
        blurDataURL={placeholderImage}
        style={{
          maxWidth: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default PostCard;
