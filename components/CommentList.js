import Comment from './Comment';

export default ({ comments, nested }) => (
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
        padding-left: 3rem;
        list-style: none;
        transition: all 0.2s;
      }
    `}</style>
  </div>
);
