import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export default function Footer() {
    const auth = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <footer>
            <p>Created By {auth.site.siteMetadata.author} Copyright 2019</p>
        </footer>
    )
}
