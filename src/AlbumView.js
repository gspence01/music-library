import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function AlbumView(){
    const [albumData, setAlbumData] = useState([])
    const {id} = useParams()
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

    useEffect(()=>{
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')
    console.log(justSongs)
    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key = {i}>
                <p style={{'color': 'rgb(160, 237, 46)'}}>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            {albumData.length > 0 ? <h2>{`Songs from album ${albumData[0].collectionName}`}</h2> : <h2>Loading</h2>}
            <img src={albumData[0].artworkUrl30} alt={albumData[0].collectionName}></img>
            {navButtons()}
           {renderSongs}
        </div>
    )
}