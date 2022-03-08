import styles from '../styles/FaceBtn.module.css';
import { useAppContext } from '../context/state';
import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/state';
import Image from 'next/image';

const FaceBtn = ({ uglyBtnName }) => {

    const mycontext = useAppContext();
    const addUglyBtn = mycontext.handleAddUglyBtn;
    const updateClick = mycontext.handleUpdateClick;
    const updateHover = mycontext.handleUpdateHover;
    const [click, setClick] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const newBtn = {
            'name': uglyBtnName,
            'click': false,
            'hover': false
        }
        addUglyBtn(newBtn)
        console.log(mycontext.uglyButtons)
    }, [])

    // const {click, setClick} = useAppContext();

    useEffect(() => {
        console.log('my hook is working 👌')
        console.log('is btn pressed? ', click);
        //update click here
        console.log('now I need to update the global click bool');
        console.log(updateClick(uglyBtnName, !click));

    }, [click, updateClick]);

    useEffect(() => {
        console.log("hover active...");
        console.log('now I need to update the local hover bool -> ', hover);
        updateHover(uglyBtnName, !hover)

    }, [hover, updateHover]);

    const handleClick = () => setClick(!click);
    const handleHover = () => setHover(!hover);

    return (
        <div onMouseLeave={handleHover} onMouseEnter={handleHover} onMouseDown={handleClick} onMouseUp={handleClick} className={styles.face_btn_wrapper}>
            <div className={`${styles.btn} ${styles.slide_in_blurred_top}`}>
                <Image src='/angry2.svg' alt='faceless btn' height={`100%`} width={`100%`} />
            </div>
            <div className={click ? styles.btn : `${styles.btn} ${styles.pressed}`}>
                <Image src='/btn.svg' alt='faceless btn' height={`100%`} width={`100%`} />
            </div>
            <div className={click ? `${styles.btn} ${styles.pressed}` : styles.btn}>
                <Image src='/btn-pressed.svg' alt='faceless btn' height={`100%`} width={`100%`} />
            </div>
        </div>
    )
}

export default FaceBtn