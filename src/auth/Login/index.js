import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import styles from './Login.module.scss';

const Login = () => {

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.signin}>
                    <form className={styles.form}>
                        <label>Username</label>
                        <input type="text"></input>
                        <label>Password</label>
                        <input type="password"></input>
                        <button type="submit" className={styles.btnlogin}>Log In</button>
                        <span>Dont have an account?</span>
                        <Link to='/signup' className={styles.btnSignup}>Create account</Link>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login;