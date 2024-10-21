import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src="/Logo/TIA-Logo-1.png" alt="Logo" />
      </Link>

      <nav>
        <Link to="/stories">Stories</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        
      </nav>
    </header>
  );
};

export default Header;
