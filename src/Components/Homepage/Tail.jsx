
import '../styles/tail.css'
import logo from '../ressources/Logo.png'
import ftimg from '../ressources/foot.png'
import fb from '../ressources/login/fb.png'
import linkedin from '../ressources/login/linkedin.png'

function PageTail() {
  return (
    <footer>
      <div className='f1'>
        <img src={logo} alt='logo.png'></img>
        <p> asdfasdfjdsl aldfad asdfsdf sadfasdf </p>
        <div className='icons-ctn'>
          <img src={fb} alt='facebook icon'></img>
          <img src={linkedin} alt='linkedIn icon'></img>
        </div>
      </div>

      <div className='f2'>
        <h3>Services provided</h3>
        <ul style = {{listStyleType: 'disc'}}>
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className='f3'>
        <img className='ftimg' src={ftimg} alt="foot image" />
      </div>
      <h5>Copyright © 2023 <sapn>AuraTech</sapn> All Rights Reserved</h5>
    </footer>
  );
}

export default PageTail;

