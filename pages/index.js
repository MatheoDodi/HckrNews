import Error from 'next/error';
import fetch from 'isomorphic-fetch';
import StoryList from '../components/StoryList';

class Index extends React.Component {
  static async getInitialProps() {
    let stories;

    try {
      const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
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
    if (!stories.length) {
      return <Error statusCode={503} />;
    }
    return (
      <div>
        <h1>Hckr News</h1>
        <StoryList stories={stories} />
      </div>
    );
  }
}

export default Index;
