import React, { useContext } from 'react'
import './NavBar.css'
import Logo from '../../shared/images/logo.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/provider/UserProvider'



export const NavBar = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="navBarWrapper">
            <img onClick={() => history.push("/home")} className="logo" src={Logo} alt={"Error"} />
            <span className="signIn" onClick={() => history.push('/signin')}>Sign in</span>
            <span>{loggedInUser}</span>
        </div>
    )
}
