import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

import Header from '../../components/Header';
import styles from './SignUp.module.scss';

const SignUp = () => {
    const { updateUser, updatePassword, password, user } = useContext(AppContext);
    
    const handleChange = (username) => {
        updateUser(username);
    };

    const handlePassword = (userPassword) => {
        updatePassword(userPassword);
    };

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
                        <button type="submit" className={styles.btnlogin}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;