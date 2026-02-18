import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import type {Post} from "../types/auth.types"
import BlogPost from '../components/BlogPost';
import {useParams} from 'react-router-dom'


function ShowPost() {

  const {id} = useParams<{id:string}>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
  

  //Funktion för att hämta in blogginlägg
  const getOnePost = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`https://blogposts-frontendm3.onrender.com/api/post/${id}/`)
        setLoading(false);
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
  };
  getOnePost();
}, [id]);


  return (
    <>
    <h2>Blogginlägg</h2>
    { loading && <p>Läser in blogginlägg...</p>}
    {post && (
       <BlogPost key={post.id} id={post.id} title={post.title} image={post.image} content={post.content} created={post.createdAt} getPosts={async () => {}} showButtons={false}/>
    )}
    <Outlet />
    </>
  )
}

export default ShowPost