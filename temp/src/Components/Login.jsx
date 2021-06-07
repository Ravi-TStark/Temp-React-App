import React from 'react'
import team from '../team.png'
import user from '../user.png'
import password from '../pass.png'
import './Login.css'

function Login() {
    return (
        <div className="loginContainer">
            <img className="loginImage" src={team} />
            <div>
                <div className="input">
                    <img className="inputIcons" src={user} />
                    <input type="text" placeholder="Email Address" />
                </div>
                <br />
                <div className="input">
                    <img className="inputIcons" src={password} />
                    <input type="password" placeholder="Password" />
                </div>
                <br />
                <span id="remMe"> <input type="checkbox"/><span>Remember Me</span></span>
                <a href="#" id="forPass">Forgot Password</a>
                <br />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login
