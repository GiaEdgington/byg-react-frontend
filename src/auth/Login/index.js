import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

import Header from '../../components/Header';
import styles from './Login.module.scss';

const Login = () => {
    const { updateUser, updatePassword, logUser} = useContext(AppContext);

    const handleChange = (username) => {
        updateUser(username);
    };

    const handlePassword = (userPassword) => {
        updatePassword(userPassword);
    }

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.signin}>
                    <form className={styles.form}>
                        <label>Username</label>
                        <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
                        <label>Password</label>
                        <input type="password" onChange={(e) => handlePassword(e.target.value)}></input>
                        <button type="button" value="submit" onClick={logUser} className={styles.btnlogin}>Log In</button>
                        <span>Dont have an account?</span>
                        <Link to='/signup' className={styles.btnSignup}>Create account</Link>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login;