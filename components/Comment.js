import CommentList from './CommentList';

export default ({ comment }) => (
  <li>
    <div className="date-author">
      <span className="author link">{comment.user}</span>{' '}
      <span className="date link">{comment.time_ago}</span>
    </div>
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />
    {comment.comments.length > 0 && <CommentList comments={comment.comments} />}
    <style jsx>{`
      .date-author {
        color: #828282;
        font-size: 0.8em;
      }

      .author {
        font-size: 0.9em;
        font-weight: bold;
      }

      .link:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `}</style>
  </li>
);
