import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={`${styles.navbar}`}>
            <ul className={`${styles.navbar_nav}`}>
                <li>
                    <Link href='/' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span>Logo here</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span>Experience</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span>Projects</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a className={`${styles.nav_link}`}>
                            <span>About</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar