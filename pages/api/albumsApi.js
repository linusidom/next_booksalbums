import fs from 'fs'
import path from 'path'

function albumsHandler(req, res) {
    if(req.method === 'GET'){
        const filePath = path.join(process.cwd(), "", 'albums.json')

        const fileData = fs.readFileSync(filePath)

        const data = JSON.parse(fileData)

        return res.status(200).json({message: data})
    }
}

export default albumsHandler