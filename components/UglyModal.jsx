import styles from '../styles/UglyModal.module.css';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';

const UglyModal = () => {
    const modalRef = useRef(null);
    const hoverRef = useRef(null);
    const clickRef = useRef(null);
    const mycontext = useAppContext();
    const sharedBtnState = mycontext.uglyBtn;


    const checkBtnState = (myClass, click, truetie, falsie, defaultie) => {
        if (hover) {

            if (click) {
                myClass = `${truetie}`
            } else if ((!click && click !== null)) {
                myClass = `${falsie}`
            } else {
                myClass = `${defaultie}`
            }

        } else if (!hover && hover !== null) {

        }

    }

    useEffect(() => {
        if (sharedBtnState.click) {
            console.log('🌟  inside ugly modal click!', modalRef.current.classList);
            modalRef.current.className = `${styles.scale_in_ver_top}`;
        } else if (!sharedBtnState.click && sharedBtnState.click !== null) {
            console.log('🧼 inside ugly modal click!', modalRef.current);
            modalRef.current.className = `${styles.fade_out_top}`;
        } else {
            modalRef.current.className = `${styles.ugly_modal}`;
        }

        switch (sharedBtnState.name) {
            case 'lucinda':
                console.log(sharedBtnState.name, ' here... 👧', modalRef.current.className);
                console.log("🤠 yea-yea!", modalRef.current.className);
                // if (sharedBtnState.hover) {
                //     modalRef.current.className = `${styles.hover_mode}`;
        
                // } else if (!sharedBtnState.hover && sharedBtnState.hover !== null) {
                //     modalRef.current.className = `${styles.ugly_modal}`;
                // }

                break;

            case 'beth':
                console.log(sharedBtnState.name, ' here... 👱‍♀️');
                break;

            case 'rick':
                console.log(sharedBtnState.name, ' here... 🧓');
                break;

            case 'lionel':
                console.log(sharedBtnState.name, ' here... 🎍');
                break;


        }


    }, [sharedBtnState]);

    return (
        <div ref={modalRef} className={`${styles.ugly_modal}`}>
            <div ref={hoverRef} className={`${styles.ugly_hover}`}></div>
            <div ref={clickRef} className={`${styles.ugly_click}`}></div>
        </div>
    )
}

export default UglyModal