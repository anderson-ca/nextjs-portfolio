import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/paperAbout.module.css';

const PaperAbout = () => {

  const [click, setClick] = useState(false);


  useEffect(() => {
    console.log('my hook is working 👌')
    console.log('is btn pressed? ', click);
    let element = document.getElementById('#inactive');
    console.log('my element -> ', element);
  }, [click]);

  const handleClick = () => setClick(!click);

  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.section} ${styles.top}`}>
        <div className={`${styles.howdy_wrapper}`}>
          <Image src='/howdy.svg' alt='blah' height={'250px'} width={'250px'} />
        </div>
        <ul className={`${styles.ul}`}>
          {/* <li className={`${styles.li} ${styles.a}`}>
            <FaceBtn btnSize={'100%'} btnDecorationSize={'15px'} />
          </li> */}
          <li className={`${styles.li} ${styles.b}`}>
            <FaceBtn btnSize={'100%'} btnDecorationSize={'50px'} />
          </li>
          {/* <li className={`${styles.li} ${styles.c}`}>
            <FaceBtn btnSize={'100%'} btnDecorationSize={'50px'} />
          </li> */}
        </ul>
      </div>
      <div className={`${styles.section} ${styles.bottom}`}>
        <p className={`${styles.p}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius aperiam distinctio cupiditate? Necessitatibus ipsa praesentium libero unde quasi hic eius doloribus, ab ipsam omnis deleniti recusandae perferendis sunt dolorum.</p>
        <div className={`${styles.guy_wrapper}`}>
          <Image src='/guy.svg' alt='blah' height={'250px'} width={'250px'} />
        </div>
      </div>
    </div>
  )
}

export default PaperAbout