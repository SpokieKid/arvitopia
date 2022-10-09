import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function firstPost () {
    return (
        <Layout>
            <Head>
                <title>
                    First Post
                </title>
            </Head>
            <h1>No Brainer Arvin</h1>
            <h2>Into the Unknown</h2>
            <h2>Contact</h2>
            <p>Twitter: @arvinatwild Email: arvinchen98@outlook.com</p>
            <p>Migrating from https://publish.obsidian.md/arvitopia - my original site - to here</p>
            <h2>Current Plans</h2>
            <p>- Add markdown support (individual file & folder)</p>
            <p>- Add backlink support</p>
            <p>- Style the site</p>
        </Layout>
    
    )
}