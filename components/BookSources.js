import classes from '../styles/BookSources.module.css'

export const BookSources = () => {
    return(
        <div className={classes.bookSources}>
            <div className={classes.bookSourcesText}>
                <p className={classes.bookSourcesHeader}>Book Sources</p>
            </div>

            <div className={classes.bookSourcesList}>
                <li><a href="http://www.businessinsider.com/100-books-everyone-should-read-amazon-goodreads-2015-3">Business Insider</a></li>
                <li><a href="https://www.listchallenges.com/bbcs-top-100-books-you-need-to-read-before-you-die/vote">List Challenge</a></li>
                <li><a href="https://www.realsimple.com/work-life/entertainment/amazon-100-book-list">Real Simple</a></li>
                <li><a href="https://archive.nytimes.com/www.nytimes.com/library/books/072098best-novels-list.html">NY Times</a></li>
                <li><a href="https://www.abebooks.com/books/100-books-to-read-in-lifetime/index.shtml">Abe Books</a></li>
                <li><a href="https://www.artofmanliness.com/2008/05/14/100-must-read-books-the-essential-mans-library/">Art of Manliness</a></li>
                <li><a href="http://www.modernlibrary.com/top-100/100-best-novels/">Modern Library</a></li>
                <li><a href="http://www.harvard.com/ajax/top100/">Harvard List</a></li>
                <li><a href="https://www.theguardian.com/books/2015/aug/17/the-100-best-novels-written-in-english-the-full-list">Guardian</a></li>
                <li><a href="https://www.librarything.com/bookaward/Newsweek%27s+Top+100+Books%3A+The+Meta-List">Library Think</a></li>
            </div>
        </div>
    )
}