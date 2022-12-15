import classes from '../styles/BooksSection.module.css'
import { BookList } from './BookList'

export const BooksSection = () => {
    return(
        <div className={`${classes.booksSection}, ${classes.sectionTwo}`}>
            <div className={classes.bookList}>
                <BookList/>
            </div>
            <div className={classes.bookText}>
                Books
            </div>
            
        </div>
    )
}