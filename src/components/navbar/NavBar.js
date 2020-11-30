import React from 'react'
import './NavBar.css'
import Logo from '../../shared/images/logo.svg'
import { useHistory } from 'react-router-dom'


export const NavBar = () => {
    const history = useHistory()
    return (
        <div className="navBarWrapper">
            <img onClick={() => history.push("/home")} className="logo" src={Logo} alt={"Error"} />
            <span className="signIn" onClick={() => history.push('signin')}>Sign in</span>
        </div>
    )
}
