/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
        {pageContext.name}
      </Heading>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Tag
