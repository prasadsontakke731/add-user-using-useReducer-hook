import React, { useReducer, useState } from 'react'


const initialValue = [{ id: 1, name: "AAA", email: "a@gmail.com" }]

function preducer(state, action) {
    switch (action.type) {
        case "add":
            return ([...state, action.payload])
        default:
            return false
    }
}
const Person = () => {
    const [state, dispatch] = useReducer(preducer, initialValue)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function addUser(e) {
        e.preventDefault()

        const user = { id: Date.now(), name, email }

        dispatch({ type: "add", payload: user })

    }
    return (
        <div className='form' style={{ display: "flex", justifyContent: "space-evenly" }}>
            <form action="" onSubmit={addUser}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g Prasad' /> <br /><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g p@gmail.com' /> <br /><br />
                <button className='btnperson' type=''>Click</button>
            </form>

            <table border={3}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>

                {
                    state.map((p, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{p.name}</td>


                                    <td>{p.email}</td>
                                    <td><button>DELETE</button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>

        </div>
    )
}

export default Person