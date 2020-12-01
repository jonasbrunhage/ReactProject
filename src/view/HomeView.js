import React, { useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const HomeView = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <h1>This is the HomeView</h1>
            <h2>{loggedInUser}</h2>
        </div>
    )
}
