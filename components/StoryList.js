import Link from 'next/link';

const StoryList = ({ stories }) => (
  <div className="story-list">
    {stories.map(story => (
      <div key={story.id} className="story">
        <h2 className="story-title">
          <a href={story.url}>{story.title}</a>
        </h2>
        <div className="story-details">
          <div>
            <svg
              className="icon"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 55.867 55.867"
            >
              <path
                d="M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558
	s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024
	l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506
	c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017
	l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"
              />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>

            <span>{story.points || 0} points</span>
          </div>
          <div className="comment-icon-count">
            <svg
              className="icon"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 60 60"
            >
              <path
                d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689
	c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01
	c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5
	c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4
	S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z"
              />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>

            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      </div>
    ))}
    <style jsx>
      {`
        .story-list {
          background: #f70;
        }

        .story {
          padding: 1.8rem 3rem;
          transition: all 0.3s;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          font-size: 0.8rem;
          flex-basis: 13%;
          display: flex;
          flex-direction: column;
          color: #7b8794;
        }

        .story-details span {
          margin-bottom: 0.5rem;
        }

        .story-details a {
          font-weight: lighter;
          text-decoration: none;
          font-size: 0.8rem;
          color: #7b8794;
        }

        .story-details a:hover {
          color: #f70;
        }

        .icon {
          height: 12px;
          fill: #f70;
          margin-right: 8px;
        }
      `}
    </style>
  </div>
);

export default StoryList;
