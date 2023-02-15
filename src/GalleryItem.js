import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width' : '25vw',
        'minHeight' : '20vh',
        'border' : '1px solid white',
        'borderRadius': '10px',
        'margin' : '2px',
        'backgroundColor': '#28252A',
        'color': 'white'
    }

    const detailStyle = {
        'width' : '80vw',
        'minHeight' : '20vh',
        'border' : '1px solid black',
        'borderRadius': '10px',
        'margin' : '2px',
        'backgroundImage' : `url(${props.item.artworkUrl100})`,
        'backgroundRepeat' : 'no-repeat',
        'backgroundSize' : 'cover',
        'color' : 'rgb(160, 237, 46)',
        'WebkitTextStroke': '1px black'
    }

    const simpleView = () => {
        return (
            <div style = {simpleStyle}>
                <h3 style={{color: 'rgb(160, 237, 46)'}}>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailedView = () => {
        return (
            <div className='detailed' style={detailStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>by</h4>
                <h3>
                    <Link to = {`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h4>on album</h4>
                <h3>
                    <Link to = {`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    return (
        <div onClick= {()=> setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailedView() : simpleView()}
        </div>
    )
}