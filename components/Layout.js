import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children, title, description, backButton, router }) => (
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
        {backButton && (
          <button className="back-button" onClick={() => Router.back()}>
            Go Back
          </button>
        )}
      </nav>

      {children}
    </div>

    <style jsx>{`
      .container {
        border-radius: 7px 7px 0 0;
        max-width: 60%;
        margin: 2rem auto;
        background: #fff;
        box-shadow: 0 5px 15px 3px rgba(0, 0, 0, 0.25);
      }

      nav {
        border-radius: 7px 7px 0 0;
        background: white;
        padding: 3rem;
        font-size: 2rem;
        border-bottom: 5px #f60 solid;
        position: relative;
        display: flex;
      }

      nav > * {
        display: inline-block;
        color: white;
      }

      nav a {
        text-decoration: none;
      }

      nav .main-title {
        font-weight: bold;
        color: #f60;
      }

      nav .main-title:hover {
        color: #ff8800;
      }

      .back-button {
        margin-left: auto;
        background: #f60;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 3px;
        font-size: 1rem;
        box-shadow: 0 0 10px 2px rgba(255, 119, 0, 0);
        transition: all 0.3s;
      }

      .back-button:hover {
        box-shadow: 0 0 10px rgba(255, 119, 0, 0.75);
        cursor: pointer;
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
