import Link from 'next/link'
import classes from '../styles/Header.module.css'

export const Header = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.navTitle}>
                <p className={classes.navTitleText}>Books and Albums</p>
            </div>
            <div className={classes.navLinks}>
                <ul  className={classes.navLinksList}>
                    <li className={classes.navLink}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={classes.navLink}>
                        <Link href='/books'>Books</Link>
                    </li>
                    <li className={classes.navLink}>
                        <Link href='/albums'>Albums</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}