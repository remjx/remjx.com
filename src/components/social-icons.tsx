import React from 'react'
import { Link, Flex } from 'theme-ui'
import { FaTwitter } from 'react-icons/fa';

export const SocialIcons = () => (
    <Flex>
        <Link href="https://twitter.com/remjxd" target="_blank">
            <FaTwitter size="24px" color="#1da1f2" title="twitter" />
        </Link>
    </Flex>
);
