import React from 'react'

function MovieList() {
    const movies = ["DEVARA", "ANIMAL", "KGF", "BAHUBALI", "RRR"]
  return (
    <div>
      {
        movies.map(movie => <h1>{movie}</h1>)
      }

    </div>
  )
}

export default MovieList