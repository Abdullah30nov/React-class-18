import { TextField } from '@mui/material'
import Style from './Signup.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/firebase'
function Signup() {
    const [firstname, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lastname, setLastName] = useState('')
    const [file, setFile] = useState('')
    // const navigate = useNavigate()
    const handleFirstNameChange = ((e)=>{setFirstName(e.target.value)})
    const handleEmailChange = ((e)=>{setEmail(e.target.value)})
    const handlePasswordChange = ((e)=>{setPassword(e.target.value)})
    const handleLastNameChange = ((e)=>{setLastName(e.target.value)})
    const handleFileChange = ((e)=>{
        const profile =(e.target.files[0])
        const UserProfile =URL.createObjectURL(profile)
        setFile(UserProfile)
    })
const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        const obj ={
            firstname,
            lastname,
            email,
            file
        }
        setFirstName('')
        setEmail('')
        setPassword('')
        setLastName('')
       await createUserWithEmailAndPassword(auth, email, password)
  .then((doc) => {
    console.log(doc.user.uid)
    localStorage.setItem('userId',doc.user.uid)
    localStorage.setItem('userData',JSON.stringify(obj))
    navigate(   '/')
  })
  .catch((error) => {
    console.log(error)
  });
    }
    return (
        <>
            <div className={Style.main}>
                <div className={Style.Login}>
                    <form className={Style.form} onSubmit={handleSubmit}>
                        <h1>Signup</h1><br /><br />
                        <TextField
                            id='outlined-basic'
                            label="First Name"
                            variant='outlined'
                            value={firstname}
                            onChange={handleFirstNameChange}
                            className={Style.Input}
                        /><br /><br />
                            <TextField
                                id='outlined-basic'
                                label="Last Name"
                                variant='outlined'
                                type="text"
                                value={lastname}
                                onChange={handleLastNameChange}
                                className={Style.Input}
                            /><br /><br />
                        <TextField
                            id='outlined-basic'
                            label="Email"
                            variant='outlined'
                            value={email}
                            onChange={handleEmailChange}
                            className={Style.Input}
                        /><br /><br />
                        <TextField
                            id='outlined-basic'
                            label="Password"
                            variant='outlined'
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={Style.Input}
                        /><br /><br />
                        <TextField
                            id='outlined-basic'
                            variant='outlined'
                            type="file"
                            onChange={handleFileChange}
                            className={Style.Input}
                        /><br /><br />
                        <p>Already have an <Link to='/'>Account</Link></p>
                        <button type="submit" className={Style.btn}>Signup</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup