import { Outlet } from 'react-router';
import { Link, Header } from './Content.styled';

export default function ContentPage() {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </Header>
  );
}
