import Image from 'next/image'
import heroImage from '../assets/heroImage.jpeg'
import classes from '../styles/Hero.module.css'

export const Hero = () => {
    return(
        <div className={classes.hero}>
            <div className={classes.heroText}>
                <p className={classes.heroTitle}>100 Greatest Books and Albums Ever</p>
                <p className={classes.heroPara}>Curated from all the top lists on the interwebs</p>
            </div>
            <div className={classes.heroImage}>
                <Image src={heroImage} alt="" className="img-fluid"/>
            </div>
        </div>
    )
}