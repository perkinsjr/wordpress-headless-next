export const ALL_POSTS = `
query AllPosts {
  posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
      nodes {
        id
        date
        title
        slug
        excerpt
      }
  }
}
`;

export const GET_ALL_POSTS_WITH_SLUG = `
{
  posts(first: 10000) {
      nodes {
        slug
      }
  }
}
`;

export const POST_BY_SLUG = `
query PostBySlug($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    content
  }
}
`;
