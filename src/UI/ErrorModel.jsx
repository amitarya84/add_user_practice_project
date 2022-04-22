import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModel.module.css'



const Errormodel = (props) => {

    function Backdrop() {
        return <div className={styles.backdrop} onClick={props.onConfirm} />
    }
    function Model() {
        return (
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
        )
    }

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Model />,
                document.getElementById('overlay-root')
            )}

        </>
    );
}

export default Errormodel;
