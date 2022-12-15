import classes from '../styles/AlbumsSection.module.css'
import { AlbumList } from './AlbumList'

export const AlbumsSection = () => {
    return(
        <div className={`${classes.albumsSection}, ${classes.sectionTwo}`}>
            <div className={classes.albumText}>
                Albums
            </div>
            <div className={classes.albumList}>
                <AlbumList/>
            </div>
        </div>
    )
}