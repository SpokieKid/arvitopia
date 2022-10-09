import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Content below seems to have some problem...</h1>
        <h2>Will fix in next update</h2>
        <p>
          No Brainer Arvin's Storage.

          Migrating from my Obsidian Publish site to here.

          Update Log:

          09_27
          - Have the idea of using Next.js

          09_30
          - Learn React

          10_01
          - Usage of Link.href
          - Code spittig and prefetching

          10_02
          - next.js optimizes images files on-demand, as users request them
          - CSS Styling
            - can import css to any JS files (nextjs feature)
            - can import from 3-rd party plugin
            - can directly write css jsx within components
            - can load a style from any components
            - using `module.css` the file must ends with this extension name
          - `_app.js`
            - This `App` component is the top-level component which will be common across all the different pages. You can use this `App` component to keep state when navigating between pages
          - changelog
            - learned using css and `module.css` to style the site (tho in a rather simple way. But i'm learning): now it is in a centered fashion.
            - learned how to use `global.css` to style the `_app.js` in a global fashion.
          - questions
            - what's the diff between `.header {}` in the `.module.css` and `a {}` in `.css` file? why one has a `.` in front of every element's name and the other don't.

          10_09
          - Update Layout and css utils
          - updated index.js
        </p>
      </section>
    </Layout>
  )
}
