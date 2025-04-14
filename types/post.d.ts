export type Post = {
  slug: string
  content: string
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

export type SearchResultPost = {
  slug: string
  title: string
  body: string
}
