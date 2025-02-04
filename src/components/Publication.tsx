const Publication = ({ post }) => {
  return (
    <div
      key={post.id}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <p>{post.content}</p>

      <div
        style={{ width: '100%', height: '200px', backgroundColor: 'gray' }}
      ></div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <span>❤️ {post.likes}</span>
        <span>💬 {post.comments}</span>
        <span>🔖 {post.saves}</span>
      </div>
    </div>
  );
};

export { Publication };
