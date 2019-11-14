import React from 'react';
import '../css/Login.css'

class Login extends React.Component{
    render() {
        return(
            <div className="log-container">
                <form className="formLog">
                    <h1>Logueate</h1>
                    <label className="titleInput">User</label>
                    <input className="logInput"/>
                    <label className="titleInput">Password</label>
                    <input className="logInput" type="password"/>
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