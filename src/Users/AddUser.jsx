import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Errormodel from '../UI/ErrorModel';
import styles from './AddUser.module.css';

const Adduser = (props) => {

    const [enteredName, setenteredName] = useState('');
    const [enteredAge, setenteredAge] = useState('');
    const [error, setError] = useState();
    const nameInput = useRef();
    const ageInput = useRef();

    const addUserHandler = (e) => {
        e.preventDefault()

        const user = {
            id: Math.random().toString,
            userName: enteredName,
            userAge: enteredAge
        }

        if(!enteredName.trim().length > 0){
            setError({
                title: "Invalid Input!",
                message: "Username is Empty!!"
            })
            return;
        }
        
        if(+enteredAge < 1){
            setError({
                title: "Invalid Input!",
                message: "User age must not be empty or < 1"
            })
        }
        
        props.addUser(user);
        nameInput.current.value = '';
        ageInput.current.value = '';
    }

    const userNameChangeHandler = (e) => {
        setenteredName(e.target.value)
    }

    const userAgeChangeHandler = e => {
        setenteredAge(e.target.value)
    }

    const errorHandler = e => {
        setError(null)
    }

    return (
        <>
            {error && <Errormodel title={error.title} message={error.message} onConfirm={errorHandler}  />}

            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id='username'
                        onChange={userNameChangeHandler}
                        ref={nameInput}
                    />

                    <label htmlFor="age">User Age</label>
                    <input
                        type="number"
                        id='age'
                        onChange={userAgeChangeHandler}
                        ref={ageInput}
                    />

                    <Button type="submit" btnTxt="Add User" />
                </form>
            </Card>
        </>
    );
}

export default Adduser;
