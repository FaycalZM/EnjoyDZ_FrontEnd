import { GoogleLogin } from "react-google-login";
const clientId = "185044356153-ho8qbsf74b2fs2f1a43dfnnobt6kh024.apps.googleusercontent.com"

function Login(){
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res )
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED!  res: ", res)
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={"Login"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    )   
}

export default Login