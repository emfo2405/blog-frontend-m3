import { useState } from 'react'
import { useParams } from 'react-router-dom';


function BlogPost() {
    const {id} = useParams() as {id: string};
  return (
    <>
    <h1>Välkommen till bloggpost med id: {id}</h1>
    </>
  )
}

export default BlogPost