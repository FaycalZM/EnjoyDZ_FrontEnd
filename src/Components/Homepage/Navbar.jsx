import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav >
      <div >
        <img src="../../assets/Logo.png" alt="Logo" />
      </div>
      <ul >
        <li><a href="/">home</a></li>
        <li><a href="/about">search</a></li>
        <li><a href="/search">about</a></li>
        <li><a href="/contact">contact us</a></li>
      </ul>
      <div >
        <Link to = '/connect'><button>Connect</button></Link>
        <Link to = '/signup'><button >Sign up</button></Link>
      </div>
    </nav>
  );
}
export default Navbar;