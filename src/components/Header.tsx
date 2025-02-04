import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
      }}
    >
      <h1 style={{ margin: 0 }}>MyApp</h1>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '15px',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/feed"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Feed
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
