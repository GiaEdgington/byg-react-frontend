import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

import Header from '../../components/Header';
import styles from './SignUp.module.scss';

const SignUp = () => {
    const { updateUser, updatePassword, user, password } = useContext(AppContext);
    
    const handleChange = (username) => {
        updateUser(username);
    };

    const handlePassword = (userPassword) => {
        updatePassword(userPassword);
    };

    const createUser = async () => {
        try {
            let newUser = await fetch('http://localhost:3000/auth/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({
                    username: user,
                    password: password
                })
            })
            console.log(newUser); 
        } catch (err) {
            console.log(err)
        }
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
                        <button type="button" value="submit" onClick={createUser} className={styles.btnlogin}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;