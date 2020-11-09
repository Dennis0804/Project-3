import React from 'react'

const Login = (props) => {
    const login = ()=>{
        localStorage.setItem('userinfo','tom')
        props.history.replace(props.location.state)
    }
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
