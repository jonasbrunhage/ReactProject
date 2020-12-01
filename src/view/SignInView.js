import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const SignInView = () => {
    const [user, setUser] = useState("unknown user")
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const login = (e) => {
        e.preventDefault()
        setLoggedInUser(user)
    }
    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>

            <br />
            <h2>Please fill in your name to be an know user</h2>

            <form>
                <input onChange={event => setUser(event.target.value)} />
                <button onClick={(e) => login(e)}>Submit</button>
            </form>
        </div>
    )
}
