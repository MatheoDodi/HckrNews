import Error from 'next/error';
import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class Index extends React.Component {
  state = {
    currentPage: 1
  };

  static async getInitialProps({ req, res, query }) {
    let stories;

    try {
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${query.page || 1}`
      );
      stories = await res.json();
      console.log(stories);
    } catch (err) {
      stories = [];
    }

    return {
      stories
    };
  }

  render() {
    const { stories } = this.props;
    const { currentPage } = this.state;
    if (!stories.length) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Hckr News"
        description="A Hacker News clone made with NextJS"
      >
        <StoryList stories={stories} />

        <footer>
          <Link href={`/?page=${currentPage + 1}`}>
            <a
              onClick={() =>
                this.setState(prevState => ({
                  currentPage: prevState.currentPage + 1
                }))
              }
            >
              Next Page
            </a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 2rem 3rem;
            background: #f70;
            font-size: 1.2rem;
          }

          footer a {
            font-weight: 100;
            color: white;
            text-decoration: none;
          }

          footer a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
