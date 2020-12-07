import React, { useContext } from 'react'
import './NavBar.css'
import Logo from '../../shared/images/logo.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/provider/UserProvider'



export const NavBar = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const logout = () => {
        setLoggedInUser(false)
    }

    const displayUser = () => {
        if (loggedInUser) {
            return <div className="profileName">
                <span >{loggedInUser}</span>
                <div className="logout" onClick={() => logout()}>Logout</div>
            </div>

        }
        else {
            return <span className="signIn" onClick={() => history.push('/signin')}>Sign in</span>
        }

    }

    return (
        <div className="navBarWrapper">
            <img onClick={() => history.push("/home")} className="logo" src={Logo} alt={"Error"} />
            <span onClick={() => history.push("/pokemon")} className="pokemon">Search Pokemon</span>

            {displayUser()}
        </div>
    )
}
