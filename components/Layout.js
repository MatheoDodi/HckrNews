import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => (
  <div>
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span className="main-title">Hckr News</span>
          </a>
        </Link>
      </nav>

      {children}
    </div>

    <style jsx>{`
      .container {
        border-radius: 7px 7px 0 0;
        max-width: 60%;
        margin: 1rem auto;
        background: #fff;
        box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.18);
      }

      nav {
        border-radius: 7px 7px 0 0;
        background: white;
        padding: 3rem;
        font-size: 2rem;
      }

      nav > * {
        display: inline-block;
        color: black;
      }

      nav a {
        text-decoration: none;
      }

      nav .main-title {
        font-weight: bold;
        color: #f60;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: linear-gradient(to bottom, #ff6600, #ff4400);
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
