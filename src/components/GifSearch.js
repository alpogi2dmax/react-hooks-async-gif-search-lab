import React, { useEffect, useState} from "react";

function GifSearch({onSearch}) {

    const [search, setSearch] = useState('')

    function handleSearchChange(e) {
        setSearch(e.target.value)
    }

    console.log(search)

    function handleSearchSubmit(e) {
        e.preventDefault()
        onSearch(search)
        setSearch('')
    }

    return(
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input type='text' placeholder="Type in Search" value={search} onChange={handleSearchChange} ></input>
                <input type='submit' value='GIF Search'></input>
            </form>
        </div>
    )
}

export default GifSearch