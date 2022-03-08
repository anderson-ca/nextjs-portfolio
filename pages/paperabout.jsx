// import Link from 'next/link';
import Image from 'next/image';
import FaceBtn from '../components/FaceBtn';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/state';
import styles from '../styles/paperAbout.module.css';




const PaperAbout = () => {
  const mycontext = useAppContext();
  const [aub, setAUB] = useState({});
  // console.log('this is my context in side paper about page ===> ', mycontext);
  // const ugly_btn = mycontext.activeUglyButton;
  // console.log("->", ugly_btn)
  // setUglyButtons([...ugly_btn_list])
  

  useEffect(() => {
    // console.log('you are active...')
    // if (ugly_btn) {
    //   console.log('you exist...', ugly_btn);
    // } else {
      
    // }
    // setAUB(ugly_btn);
    console.log('you are active...', mycontext.activeUglyButton)
  }, [mycontext.activeUglyButton]);

  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.section} ${styles.top}`}>
        <h1 className={`${styles.title}`}>HOWDY!</h1>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li} ${styles.c}`}>
            <FaceBtn uglyBtnName={'linda'} />
          </li>
          <li className={`${styles.li} ${styles.b}`}>
            <FaceBtn uglyBtnName={'steve'} />
            <div className={`${styles.li_text_wrapper}`}>
              <h3>Who am I?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae iusto, odit voluptates necessitatibus dicta consequuntur, deserunt repellat quibusdam nemo natus? Neque hic sunt maiores rerum labore ipsam, aspernatur architecto.</p>
            </div>
          </li>
          <li className={`${styles.li} ${styles.a}`}>
            <FaceBtn uglyBtnName={'rick'} />
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