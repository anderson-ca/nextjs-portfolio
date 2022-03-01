import styles from '../styles/About.module.css';
import Image from 'next/image';
import Divider from '../components/Divider';

const about = () => {
  return (
    <div className={styles.about}>
      <div className={`${styles.text_wrapper}`}>
        <div className={`${styles.text_bg}`}>
          <h2>Title here</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam architecto deserunt odit nulla, aut nisi perspiciatis facilis et, explicabo porro placeat officiis iusto vitae, eveniet provident maiores fugiat accusantium numquam!</p>
        </div>
      </div>
      <div className={`${styles.top}`}>
        <div className={`${styles.divider_wrapper}`}>
          <svg className={`${styles.svg}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={styles.shape_fill}></path>
          </svg>
        </div>
      </div>
      <div className={`${styles.svg_figure} ${styles.head}`}>
        <Image src='/fuckfuck.svg' alt='fuck' height={'500rem'} width={'500rem'} />
      </div>
      <div className={`${styles.svg_figure} ${styles.body}`}>
        <Image src='/fuckyou-body.svg' alt='fuck' height={'800rem'} width={'800rem'} />
      </div>
    </div>
  )
}

export default about