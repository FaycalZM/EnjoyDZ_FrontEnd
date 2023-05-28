import { GoogleLogout } from "react-google-login";
const clientId = "185044356153-ho8qbsf74b2fs2f1a43dfnnobt6kh024.apps.googleusercontent.com"

function Logout(){

    const onSuccess = (res) => {
        console.log("LOGOUT SUCCESFULY", res)
    }


    return (
        <div id="signInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )   
}

export default Logout