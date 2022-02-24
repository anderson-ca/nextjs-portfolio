import { CgBorderBottom, CgBorderLeft, CgBorderRight, CgDistributeVertical } from "react-icons/cg";
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
                            <span><CgBorderLeft /></span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/experience' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span>Experience</span>
                            <span><CgBorderLeft /></span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/projects' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span>Projects</span>
                            <span><CgBorderLeft /></span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/about' passHref>
                        <a className={`${styles.nav_link}`}>
                            <span>About</span>
                            <span><CgBorderLeft /></span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar