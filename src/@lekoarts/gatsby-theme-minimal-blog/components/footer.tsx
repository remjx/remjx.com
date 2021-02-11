/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} remjx. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to this website's source code"
          href="https://github.com/remjx/remjx.com"
        >
          <FaGithub size="24px" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
