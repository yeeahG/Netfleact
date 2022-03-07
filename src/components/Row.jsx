import React from 'react'
import './Row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = () => {
    console.log('Row rendered');
  return (
    <div className="row">
        {/*Title*/}
        <h2>NETFLIX ORIGINALS</h2>

        <div className="row__posters">
            {/* 여러 장의 영화 포스터*/}
            
        </div>

    </div>
  )
}

export default Row