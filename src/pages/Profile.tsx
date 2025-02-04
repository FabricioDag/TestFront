export default function Profile() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Perfil</h2>
      <div
        style={{
          display: 'inline-block',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="Avatar"
          style={{ borderRadius: '50%', marginBottom: '10px' }}
        />
        <h3>Usuário Exemplo</h3>
        <p>Email: exemplo@email.com</p>
        <p>Postagens: 12</p>
      </div>
    </div>
  );
}
