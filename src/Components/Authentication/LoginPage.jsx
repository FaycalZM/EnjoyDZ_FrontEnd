import { useEffect } from 'react';
import logo from '../ressources/Logo.png'; // Replace with the actual path to your logo image
import { gapi } from 'gapi-script';
import Logout from './Logout'
import Login from './Login'

const clientId = "185044356153-ho8qbsf74b2fs2f1a43dfnnobt6kh024.apps.googleusercontent.com"
function LoginPage() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  },[]);

  return (
    <div className="login-page">
      <div className='login'>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Login to your account</h1>
        <h5>Login using your gmail adress</h5>
        <Login/>
        <Logout/>
      </div>
    </div>

  );
}

export default LoginPage;

