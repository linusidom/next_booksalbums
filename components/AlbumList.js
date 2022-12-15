import { useEffect, useState } from "react"
import { AlbumItem } from "./AlbumItem"
import {Table} from 'react-bootstrap'

export const AlbumList = () => {
    const [data, setData] = useState('')

    const sendRequest = () => {
        fetch('/api/albumsApi')
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
                    <th width='25%'>Title</th>
                    <th width='20%'>Artist</th>
                    <th width='10%'>Wiki</th>
                    <th width='15%'>Amazon</th>
                    <th>Occurrences</th>
                    <th>Published</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(album => <AlbumItem key={album.id} album={album}/>)}    
            </tbody>
        </Table>
        
    </div>)
}