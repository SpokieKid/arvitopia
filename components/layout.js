import styles from './layout.module.css';
import Image from 'next/image';
import utilsStyle from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';

const name = "Arvin";
export const siteName = "Arvin's Brain";




export default function Layout({ children, home }) {
    return <div className={styles.container}>
        <Head>
            <meta
                name="Arvin's Brain"
                content="Where Arvin's Brain is stored"
            />
            <meta
                property='og:image'
            />
        </Head>
        <header className={styles.header}>
            { 
            // why here is a { } below the header? the other elements don't
                home ? (
                    <> 
                        <h1 className={utilsStyle.heading2Xl}>{name}</h1>
                    </>

                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/noun.png"
                                    className={utilsStyle.borderCircle}
                                    height={108}
                                    width={108}
                                    alt='Link png'
                                />
                            </a>
                        </Link>
                        <h2 className={utilsStyle.headingLg}>
                            <Link href="/">
                                <a className={utilsStyle.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )
            }
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </div>
        )}
        </div>;
}