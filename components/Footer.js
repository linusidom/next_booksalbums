import classes from '../styles/Footer.module.css'

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <p>This page was brought to you by <a href="https://nextjs.org/" target='_blank' rel='noopener noreferrer'>NextJS</a></p>
        </div>
    )
}