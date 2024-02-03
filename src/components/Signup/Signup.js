import { useState } from "react"

export const Signup = () => {
    const [name, setName] = useState()
    const [userid, setUserID] = useState()
    console.log("name", name)
    return (<>
        <p>signup</p>
            <label for="name">Enter Your Name</label>
            <input type="text" name="name" value={name} onChange={(event) => {
                setName(event.target.value);
            }} />

            <label for="userid">Enter Your User ID</label>
            <input type="text" name="userid" value={userid} onChange={(event) => {
                setUserID(event.target.value);
            }}/>

            <label for="password">Enter Your Password</label>
            <input type="password" name="password" value={name} onChange={(event) => {
                setName(event.target.value);
            }}/>

            <label for="employee_id">Enter Your Employee ID</label>
            <input type="text" name="employee_id" value={name} onChange={(event) => {
                setName(event.target.value);
            }}/>

            <label for="phone_number">Enter Your Phone Number</label>
            <input type="text" name="phone_number" value={name} onChange={(event) => {
                setName(event.target.value);
            }}/>

            <label for="designation">Enter Your Designation</label>
            <input type="text" name="designation" value={name} onChange={(event) => {
                setName(event.target.value);
            }}/>

            <button type="submit">Submit</button>
    </>)
}