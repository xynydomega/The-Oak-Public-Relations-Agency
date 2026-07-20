export const articleQuery = `
*[_type == "article" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  featuredImage,
  author,
  category,
  featured,
  publishedAt,
  seoTitle,
  metaDescription
}
`;

export const allArticlesQuery = `
*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  author,
  category,
  featured,
  publishedAt
}
`;