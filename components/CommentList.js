import Comment from './Comment';

export default ({ comments }) => (
  <div className="comment-list">
    {comments.length > 0 && (
      <ul>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    )}
    <style jsx>{`
      .comment-list ul {
        padding-left: 2.5rem;
        list-style: none;
        border-left: 2.5px solid rgba(0, 0, 0, 0);
        transition: all 0.2s;
      }

      .comment-list ul:hover {
        border-left: 2.5px solid rgba(255, 119, 0, 0.5);
      }
    `}</style>
  </div>
);
