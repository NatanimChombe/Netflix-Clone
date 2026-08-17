import React from 'react'
import requests from '../../../utils/requests'
import Row from '../Row/Row'

function Rowlist() {
return (
    <>
        <Row 
        title ="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row 
        title ="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
        />
        <Row 
        title ="TopRatedMovies"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={false}
        />
        <Row 
        title ="ActionMovies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
        />
        <Row 
        title ="ComedyMovies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
        />
        <Row 
        title =" HorrorMovies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
        />
        <Row 
        title =" RomanceMovies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
        />
        <Row 
        title ="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
        />
        <Row 
        title ="TvShow"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={false}
        />

    </>
)
}

export default Rowlist