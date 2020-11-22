/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Flex } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { LogoSvg } from '../../../components/logo/logo';

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <Flex sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4], alignItems: "center" }}>
        <LogoSvg />
        {siteTitle}
      </Flex>
    </Link>
  )
}

export default HeaderTitle
