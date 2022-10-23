import {
  getPosts,
  getFileNamesInDirectory,
  getCategories,
} from "../getCmsContent";

export function getDynamicPagePaths() {
  const sections: any = getFileNamesInDirectory();
  const allCategories: any = getCategories(sections);
  const allPosts = getPosts(allCategories);

  const pathToRepoPage = [{ params: { slug: [] } }];

  const pathToSectionPage = sections.map((section: string) => ({
    params: {
      slug: [section],
    },
  }));

  const pathToCategoryPage = allCategories.map((category: any) => ({
    params: {
      slug: [category.section, category.title],
    },
  }));

  const pathToPostPage = allPosts.map((post: any) => ({
    params: {
      slug: [
        post.frontmatter.section,
        post.frontmatter.category,
        post.fileName,
      ],
    },
  }));

  return {
    pathToRepoPage,
    pathToSectionPage,
    pathToCategoryPage,
    pathToPostPage,
  };
}
