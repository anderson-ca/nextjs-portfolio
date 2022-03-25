import styles from '../styles/UglyModal.module.css';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/state';

const UglyModal = () => {
    const modalRef = useRef(null);
    const hoverRef = useRef(null);
    const clickRef = useRef(null);
    const mycontext = useAppContext();
    const sharedBtnState = mycontext.uglyBtn;

    const handleHoverAnimation = (sharedBtn) => {
        if (sharedBtn.hover) {
            modalRef.current.className = `${styles.show}`;
            hoverRef.current.className = `${styles.hover_mode}`
        } else if (!sharedBtn.hover && sharedBtn.hover !== null) {
            hoverRef.current.className = `${styles.hide}`;
        } else {
            hoverRef.current.className = `${styles.hide}`;
        }
    }

    const handleClickAnimation = (sharedBtn) => {
        if (sharedBtn.click) {
            modalRef.current.className = `${styles.show}`;
            clickRef.current.className = `${styles.scale_in_ver_top}`;
        } else if (!sharedBtn.click && sharedBtn.click !== null) {
            modalRef.current.className = `${styles.show}`;
            clickRef.current.className = `${styles.fade_out_top}`;
        } else {
            clickRef.current.className = `${styles.hide}`;
        }

    }

    useEffect(() => {
        modalRef.current.className = `${styles.hide}`;

        handleHoverAnimation(sharedBtnState);
        handleClickAnimation(sharedBtnState);

    }, [sharedBtnState]);

    return (
        <div ref={modalRef} className={`${styles.ugly_modal_wrapper}`}>
            <div ref={hoverRef} className={`${styles.ugly_hover}`}></div>
            <div ref={clickRef} className={`${styles.ugly_click}`}></div>
        </div>
    )
}

export default UglyModal