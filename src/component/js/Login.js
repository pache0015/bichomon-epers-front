import React from 'react';
import '../css/Login.css'

class Login extends React.Component{
    render() {
        return(
            <div className="log-container">
                <h1>Logueate</h1>
                <form className="formLog">
                    <div className="inputContainer">
                    <label className="titleInput">User</label>
                    <input className="logInput"/>
                    </div>
                    <div className="inputContainer">
                    <label className="titleInput">Password</label>
                    <input className="logInput" type="password"/>
                    </div>
                    <button type="submit" value="submit" className="btnLog">
                        Ingresa con tu cuenta de Facebook
                    </button>
                    <button type="button" value="submit" className="btnLog">
                        Ingresa con tu cuenta de Google
                    </button>
                    <button type="button" value="submit" className="btnLog">
                        Login
                    </button>
                    <button type="submit" value="submit" className="btnLog">
                        Register
                    </button>

                </form>
            </div>
        )
    }

}
export default Login