export const BookItem = (props) => {
    return(
        <tr height='65px'>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td><a href={props.book.wikilink} target='_blank' rel='noreferrer noopener'>Read More</a></td>
            <td><a href={props.book.amazonlink} target='_blank' rel='noreferrer noopener'>Buy This Book</a></td>
            <td>{props.book.occurrences}</td>
            <td>{props.book.pubdate}</td>
        </tr>
    )
}