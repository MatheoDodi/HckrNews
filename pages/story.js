import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

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
      <Layout title={story.title} backButton={true}>
        <main>
          <h1 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h1>
          <div className="story-details">
            <strong className="story-points">{story.points} points</strong>
            <strong className="story-comments">
              {story.comments_count} comments
            </strong>
            <strong className="story-time">{story.time_ago}</strong>
          </div>
          <CommentList comments={story.comments} />
        </main>
        <style jsx>{`
          main {
            padding: 1em;
          }

          .story-title {
            color: #444;
            font-size: 1.3em;
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

          .story-details {
            font-size: 0.8rem;
            padding-bottom: 3rem;
            margin-bottom: 1em;
            display: flex;
            align-items: center;
          }

          .story-details strong {
            margin-right: 1em;
          }

          .story-details a {
            color: #f70;
          }

          .story-points {
            color: #f70;
            font-size: 0.7rem;
          }

          .story-comments {
            color: #7b8794;
            font-weight: 100;
          }

          .story-time {
            margin-left: auto;
            color: #7b8794;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Story;
