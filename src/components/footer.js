import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './footer.module.scss'

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
        <footer className={footerStyles.footer}>
            <p>Created By {auth.site.siteMetadata.author} Copyright 2019</p>
        </footer>
    )
}
