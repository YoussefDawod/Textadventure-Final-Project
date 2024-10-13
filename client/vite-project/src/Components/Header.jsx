import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src="/Logo/TIA-Logo-3.png" alt="Logo" />
      </Link>

      <nav>
        <Link to="/stories">Stories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/register">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
