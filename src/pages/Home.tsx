export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <h2>Bem-vindo à Home!</h2>
        <p>Explore o feed ou acesse seu perfil.</p>
      </div>
    </div>
  );
}
