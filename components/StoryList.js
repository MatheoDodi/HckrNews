import Link from 'next/link';

const StoryList = ({ stories }) => (
  <div className="story-list">
    {stories.map(story => (
      <div key={story.id} className="story">
        <h2 className="story-title">
          <a href={story.url}>{story.title}</a>
          <div className="story-details">
            <span>{story.points || 0} points</span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </h2>
      </div>
    ))}
    <style jsx>
      {`
        .story-list {
          padding: 0;
        }

        .story {
          padding: 1.5rem 3rem;
          transition: all 0.3s;
        }

        .story:hover {
          background: #ffefe6;
        }

        .story-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }

        .story-title a {
          color: #444;
          text-decoration: none;
        }

        .story-title a:hover,
        .story-details a:hover {
          color: #111;
        }

        .story-details {
          font-size: 0.7rem;
          font-weight: bold;
        }

        .story-details span {
          margin-right: 1em;
          color: #f70;
        }

        .story-details a {
          font-weight: lighter;
          color: #7b8794;
          text-decoration: none;
          font-size: 0.8rem;
        }
      `}
    </style>
  </div>
);

export default StoryList;
