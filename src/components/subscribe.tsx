/** @jsx jsx */
import React from 'react';
import { jsx, Heading, Link } from "theme-ui"
// import { SocialIcons } from "./social-icons"

export const Subscribe = () => (
  <div>
    <br />
    <Heading as="h2" variant="styles.h3">
      Did you enjoy this post?
    </Heading>
    <p
      sx={{
        mt: 3,
        fontSize: [1, 1, 2]
      }}
    >
      <Link activeClassName="active" href="https://remjx.eo.page/1n9rc" target="_blank">
        Sign up for my newsletter
      </Link>
      {/* {' or follow me:'} */}
    </p>
    {/* <SocialIcons /> */}
  </div>

)