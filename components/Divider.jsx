import styles from '../styles/Divider.module.css';

const Divider = () => {
    return (
        <div className={`${styles.divider_wrapper}`}>

            <svg className={`${styles.svg}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={styles.shape_fill}></path>
            </svg>
            <p className={`${styles.p} ${styles.top}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae at? Laboriosam iste esse hic. Eos tempore ratione atque amet sed, labore placeat ad possimus iure dolorem necessitatibus molestiae accusantium!</p>
        </div>
    )
}

export default Divider
