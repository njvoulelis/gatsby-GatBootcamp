import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function AboutPage() {
    return (
            <Layout>
            <h1>About us bruh</h1>
            <p>this is a bio</p>
            <p><Link to="/contact">Contact me here</Link></p>
            </Layout>
    )
}
