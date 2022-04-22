import React from 'react';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModel.module.css'

const Errormodel = (props) => {
    return (
        <>
        <div className={styles.backdrop} onClick={props.onConfirm} />
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button btnTxt="Okay" onClick={props.onConfirm} />
            </footer>
        </Card>
        </>
    );
}

export default Errormodel;
