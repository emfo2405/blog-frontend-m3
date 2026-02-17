import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import type {Post} from "../types/auth.types"


function Blog() {

  const [post, setPost] = useState<Post[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts();
  }, []);

  //Funktion för att hämta in blogginlägg
  const getPosts = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://blogposts-frontendm3.onrender.com/api/post/")

      if(!resp.ok) {
        throw Error;
      } else {
        const data = await resp.json();

        setPost(data);
        setError(null);
      }

    } catch(error){
      throw error
    }
  }


  return (
    <>
    <h1>Välkommen till bloggen!</h1>
    <Outlet />
    </>
  )
}

export default Blog