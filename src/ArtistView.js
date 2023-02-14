import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArtistView(){
    const [artistData, setArtistData] = useState([])
    const { id } = useParams()
    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}