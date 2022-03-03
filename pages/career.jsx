import styles from '../styles/Career.module.css';
import Image from 'next/image';

const career = () => {
  return (
    <div className={styles.career}>
      <div className={`${styles.svg_wrapper}`}>
        <Image src='/careerhead.svg' alt='my face' height={'800rem'} width={'800px'} />
      </div>
      <ul className={`${styles.ul}`}>
        <li className={`${styles.li} ${styles.accenture}`}>
          <div className={`${styles.text_wrapper}`}>
            <h2 className={`${styles.text_shadow_pop_br} `}>Accenture</h2>
            <p className={`${styles.text_shadow_pop_br} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at perspiciatis laudantium optio eveniet quam quasi! Maiores tempore asperiores culpa cum, ullam eligendi aliquam! Ducimus quisquam pariatur saepe non sapiente.</p>
            <h4 className={`${styles.text_shadow_pop_br} `}>Software Engineer</h4>
            <p className={`${styles.text_shadow_pop_br} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at perspiciatis laudantium optio eveniet quam quasi! Maiores tempore asperiores culpa cum, ullam eligendi aliquam! Ducimus quisquam pariatur saepe non sapiente.</p>
          </div>
        </li>
        <li className={`${styles.li} ${styles.klaviyo}`}>
          <div className={`${styles.text_wrapper}`}>
            <h2 className={`${styles.text_shadow_pop_br} `}>Klaviyo</h2>
            <p className={`${styles.text_shadow_pop_br} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at perspiciatis laudantium optio eveniet quam quasi! Maiores tempore asperiores culpa cum, ullam eligendi aliquam! Ducimus quisquam pariatur saepe non sapiente.</p>
            <h4 className={`${styles.text_shadow_pop_br} `}>Sales Engineer</h4>
            <p className={`${styles.text_shadow_pop_br} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at perspiciatis laudantium optio eveniet quam quasi! Maiores tempore asperiores culpa cum, ullam eligendi aliquam! Ducimus quisquam pariatur saepe non sapiente.</p>
          </div>
        </li>
        <li className={`${styles.li} ${styles.oracle}`}>
          <div className={`${styles.text_wrapper}`}>
            <h2 className={`${styles.text_shadow_pop_br} `}>Oracle</h2>
            <p className={`${styles.text_shadow_pop_br} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at perspiciatis laudantium optio eveniet quam quasi! Maiores tempore asperiores culpa cum, ullam eligendi aliquam! Ducimus quisquam pariatur saepe non sapiente.</p>
            <h4 className={`${styles.text_shadow_pop_br} `}>Cloud Engineer</h4>
            <p className={`${styles.text_shadow_pop_br} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at perspiciatis laudantium optio eveniet quam quasi! Maiores tempore asperiores culpa cum, ullam eligendi aliquam! Ducimus quisquam pariatur saepe non sapiente.</p>
          </div>
        </li>
      </ul>
      <div className={`${styles.arrow_wrapper}`}>
        <Image src='/arrow.svg' alt='my face' height={'100rem'} width={'100px'} />
      </div>
    </div>
  )
}

export default career;