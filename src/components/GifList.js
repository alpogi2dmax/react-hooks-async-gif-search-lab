import React from "react";

function GifList({gif}) {

    console.log(gif)

    return (
        <ul>
            <li>
                <img src={gif} />
            </li>
        </ul>
    )
}

export default GifList
