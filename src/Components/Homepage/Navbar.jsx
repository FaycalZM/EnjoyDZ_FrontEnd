import '../styles/navbar.css'
import Logo from '../ressources/Logo.png'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="nav-bar">
      <img className="logo" src={Logo} alt="Logo"/>
      <ul className="list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Search</a></li>
        <li><a href="/search">About</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
      <div className='btn-ctn'>
        <Link to='/login'><button className="connect-button">Sign in</button> </Link>
        <Link to='/signup'><a className="signup-button">Register</a></Link>
      </div>
    </nav>
  );
}
export default Navbar;