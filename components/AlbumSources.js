import classes from '../styles/AlbumSources.module.css'

export const AlbumSources = () => {
    return(
        <div className={classes.albumSources}>
            <div className={classes.albumSourcesText}>
                <p className={classes.albumSourcesHeader}>Album Sources</p>
            </div>

            <div className={classes.albumSourcesList}>
                <li><a href="https://www.discogs.com/lists/The-Guardian-100-Best-Albums-Ever/10967?page=1&limit=100">Discogs</a>
                </li>
                <li><a href="http://www.popvortex.com/music/100-greatest-albums/">PopVortex</a></li>
                <li><a href="https://www.besteveralbums.com/thechart.php?c=5&cbid=0&f=&fv=&orderby=Rank&sortdir=asc&page=2">Best Ever Albums</a></li>
                <li><a href="https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/?list_page=9">Rolling Stone Top 500 of all Time</a></li>
                <li><a href="https://www.billboard.com/charts/greatest-billboard-200-albums">BillBoard Best 200 albums of all Time</a></li>
                <li><a href="https://www.digitalmusicnews.com/2017/02/16/100-best-selling-albums-all-time/">Digital Music News</a></li>
                <li><a href="http://www.nme.com/photos/the-500-greatest-albums-of-all-time-100-1-1426116">NME Greatest Albums</a></li>
                <li><a href="https://www.stereogum.com/1395702/entertainment-weeklys-100-greatest-albums-ever/franchises/list/">StereoGum</a></li>
                <li><a href="http://absoluteradio.co.uk/competitions/100-greatest-albums/results.html">Absolute Radio</a></li>

            </div>
        </div>
    )
}