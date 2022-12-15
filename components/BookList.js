import { useEffect, useState } from "react"
import { BookItem } from "./BookItem"
import {Table} from 'react-bootstrap'

export const BookList = () => {
    const [data, setData] = useState('')

    const sendRequest = () => {
        fetch('/api/booksApi')
        .then(res => res.json())
        .then(data => setData(data.message))
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        sendRequest()
    },[])

    

    return (
    <div>
        <Table striped bordered hover variant='light' responsive>
            <thead>
                <tr>
                    <th width='15%'>Title</th>
                    <th width='15%'>Author</th>
                    <th width='10%'>Wiki</th>
                    <th width='10%'>Amazon</th>
                    <th>Occurrences</th>
                    <th>Published</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(book => <BookItem key={book.id} book={book}/>)}    
            </tbody>
        </Table>
        
    </div>)
}