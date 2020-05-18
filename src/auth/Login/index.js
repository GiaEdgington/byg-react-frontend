import React from 'react';
import styles from './Login.module.scss';

const Login = () => {

    return (
        <div className={styles.signin}>
            <form className={styles.form}>
                <label>Username</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <button type="submit" className={styles.btnlogin}>Log In</button>
                <span>Dont have an account?</span>
                <button className={styles.btnSignup}>Create account</button>
            </form>
            
        </div>
    )

}

export default Login;