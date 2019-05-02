import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';

class Story extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const { id: storyId } = query;
    let story;

    try {
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await res.json();
    } catch (err) {
      console.log(err);
      story = null;
    }

    console.log(story);

    return { story };
  }

  render() {
    const { story } = this.props;
    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title={story.title}>
        <main>
          <h1 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h1>
          <div className="story-details">
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago}</strong>
          </div>
        </main>
        <style jsx>{`
          main {
            padding: 1em;
          }

          .story-title {
            font-size: 1.2em;
            margin: 0;
            font-weight: 300;
            padding-bottom: 0.5em;
          }

          .story-title a {
            color: #333;
            text-decoration: none;
          }

          .story-title a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Story;