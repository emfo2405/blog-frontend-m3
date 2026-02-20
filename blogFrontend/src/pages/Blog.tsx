import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import type {Post} from "../types/auth.types"
import BlogPost from '../components/BlogPost';
import './Blog.scss'

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
        setLoading(false);
      if(!resp.ok) {
        throw Error;
      } else {
        const data = await resp.json();

        setPost(data);
        setError(null);
        console.log(post);
        console.log(data);

      }

    } catch(error){
      throw error
    }
  }


  return (
    <div id='blog'>
    <h1>Välkommen till bloggen!</h1>
    { loading && <p className="loading">Läser in blogginlägg...</p>}
    <div className='postPosition'>
    {post.map((post) => (
       <BlogPost key={post.id} id={post.id} title={post.title} image={post.image} content={post.content} created={post.createdAt} getPosts={getPosts}/>
    ))}
    <Outlet />
    </div>
    </div>
  )
}

export default Blog