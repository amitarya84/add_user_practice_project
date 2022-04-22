import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'

const Userslist = (props) => {

    return (
        <>
            <Card className={classes.users}>
                <ul>
                    {props.usersList.map(user => <li key={user.id}><span>{user.userName}</span> <span>({user.userAge}years old)</span></li>)}
                </ul>
            </Card>
        </>
    );
}

export default Userslist;