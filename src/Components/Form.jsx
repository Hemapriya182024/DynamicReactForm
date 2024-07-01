import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        Name: "Hemapriya",
        Age: 22,
        Gender: "Female",
        IsMarried: false

    });
    return (
        <div className='DisplayForm'>
            <h2>Dynamic form  with React Usestate</h2>
            <table >
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.Name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.Age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.Gender}</td>
                    </tr>
                    <tr>
                        <td>Marital Status</td>
                        <td>{user.IsMarried ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
            <form className='Form'>
                <label>Name:</label>
                <input type="text" value={user.Name} onChange={(e) => setUser({ ...user, Name: e.target.value })} />
                <label>Age:</label>
                <input type="number" value={user.Age} onChange={(e) => setUser({ ...user, Age: e.target.value })} />
                <label>Gender:</label>
                <select value={user.Gender} onChange={(e) => setUser({ ...user, Gender: e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Marital Status:</label><input type="checkbox" checked={user.IsMarried} onChange={(e) => setUser({ ...user, IsMarried: e.target.checked })} />

            </form>


        </div>
    )
}

export default Form
