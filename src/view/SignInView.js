import React, { useState } from 'react'

export const SignInView = () => {
    const [user, setUser] = useState("unknown user")
    return (
        <div>
            <h1>Welcome {user}</h1>
            <br />
            <h2>Please fill in your name to be an know user</h2>

            <form>
                <input onChange={event => setUser(event.target.value)} />
                <button onClick={() => setUser("Jonas")}>Submit</button>
            </form>
        </div>
    )
}
