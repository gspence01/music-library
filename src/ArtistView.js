import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    const navigate = useNavigate()

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }
   
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <img style={{'width':'150px', 'height': 'auto'}} src={album.artworkUrl100} alt={album.collectionName}></img>
                
                <Link to = {`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
                <hr></hr>
            </div>
        )
    })

    return (
        <div>
            {artistData.length>0 ? <h2>{`Albums by ${artistData[0].artistName}`}</h2> : <h2>Loading album names...</h2>}
            {navButtons()} <br></br>
            {renderAlbums}
        </div>
    )
}
