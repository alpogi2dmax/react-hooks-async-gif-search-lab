import React, { useEffect, useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {

    const [gifs, setGifs] = useState([])

    function search(word) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=0RSFERpZ9P8fPl10rgHfyiKERuk6E6IU&rating=g`)
            .then(r => r.json())
            .then(data => setGifs(data.data))
    }

    console.log(gifs)


    return (
        <div>
            <GifSearch onSearch={search}/>
            {gifs.map(gif => (
                <GifList key={gif.id} gif={gif.images.downsized.url}/>
            ))}
        </div>
        
    )
}

export default GifListContainer