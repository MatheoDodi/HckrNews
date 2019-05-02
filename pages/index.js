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
    } catch (err) {
      console.log(err);
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
              Next Page ({currentPage + 1})
            </a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }

          footer a {
            font-weight: bold;
            color: black;
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
