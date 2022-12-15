export const AlbumItem = (props) => {
    return(
        <tr height='65px'>
            <td>{props.album.title}</td>
            <td>{props.album.artist}</td>
            <td><a href={props.album.wikilink} target='_blank' rel='noreferrer noopener'>Read More</a></td>
            <td><a href={props.album.amazonlink} target='_blank' rel='noreferrer noopener'>Buy This Album</a></td>
            <td>{props.album.occurrences}</td>
            <td>{props.album.year}</td>
        </tr>
    )
}