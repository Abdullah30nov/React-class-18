import { TextField } from '@mui/material';
import Style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    return (
        <div className={Style.main}>
            <div className={Style.Login}>
                <form className={Style.form} >
                    <h1>Login</h1>
                    <br />
                    <br />
                    <TextField
                        id='outlined-basic'
                        label='Enter your Email'
                        type='email'
                        variant='outlined'
                        // onChange={handleEmailChange}
                        className={Style.Input}
                    />
                    <br />
                    <br />
                    <TextField
                        id='outlined-basic'
                        label='Password'
                        type='password'
                        variant='outlined'
                        // onChange={handlePasswordChange}
                        className={Style.Input}
                    />
                    <br />
                    <br />
                    <p>
                        Create New <Link to='/Signup'>Account</Link>
                    </p>
                    <button type='submit' className={Style.btn}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Login;