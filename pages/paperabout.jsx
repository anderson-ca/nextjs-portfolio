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
        <h1 className={`${styles.title}`}>HOWDY!</h1>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li} ${styles.a}`}>
            <FaceBtn btnSize={'100%'} btnDecorationSize={'100%'} />
          </li>
          <li className={`${styles.li} ${styles.b}`}>
            <FaceBtn btnSize={'100%'} btnDecorationSize={'100%'} />
          </li>
          <li className={`${styles.li} ${styles.c}`}>
            <FaceBtn btnSize={'100%'} btnDecorationSize={'100%'} />
          </li>
        </ul>
      </div>
      <div className={`${styles.section} ${styles.bottom}`}>
        <div className={`${styles.p}`}>
          <q>
            The creation of a single world comes from a huge number of fragments and chaos.
          </q>
          <h3 className={`${styles.h3}`}>&mdash; Hayao Miyazaki</h3>
        </div>
        <div className={`${styles.guy_wrapper}`}>
          <Image src='/guy.svg' alt='blah' height={'250px'} width={'250px'} />
        </div>
      </div>
    </div>
  )
}

export default PaperAbout