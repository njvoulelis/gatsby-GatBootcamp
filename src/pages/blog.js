import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

export default function BlogPage() {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              fields{
                slug
              }
            }
          }
        }
      }
    `)
    console.log(data);
    return (
        <Layout>
            <h1>Blog Baby</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) =>
                    <li className={blogStyles.post}>
                        <h2><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
                        <p>{edge.node.frontmatter.date}</p>
                    </li>
                )}
            </ol>
        </Layout>
    )
}
