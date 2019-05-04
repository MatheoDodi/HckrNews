import Comment from './Comment';

export default ({ comments }) => (
  <div className="comment-list">
    <ul>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
    <style jsx>{`
      .comment-list ul {
        padding-left: 2.5rem;
        list-style: none;
        border-left: 2px solid rgba(0, 0, 0, 0);
        transition: all 0.2s;
      }

      .comment-list ul:hover {
        border-left: 2px solid rgba(0, 0, 0, 0.2);
      }
    `}</style>
  </div>
);
