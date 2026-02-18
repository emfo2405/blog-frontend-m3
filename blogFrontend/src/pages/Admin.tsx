import { useState } from 'react'
import type { Post, NewPost, ErrorData } from '../types/auth.types'
import { useNavigate } from 'react-router-dom';



function Admin() {
  const [post, setPost] = useState<Post[] | []>([]);
  const [error, setError] = useState<ErrorData>({});
  const navigate = useNavigate();

const [newPost, setNewPost] = useState<NewPost>({title:"", content:"", image:""})
const token = localStorage.getItem("token");

const validateInput = ((data: NewPost) => {

  const validationErrors: ErrorData = {};
 
  if(!data.title) {
    validationErrors.title = "Fyll i en titel!";
  }

  if(data.content.length <3) {
    validationErrors.content = "Skriv ett innehåll längre än 3 tecken!";
  }

  return validationErrors;
})

const submitForm = ((event:any) => {
  event.preventDefault();

  const validationErrors = validateInput(newPost);

  if(Object.keys(validationErrors).length > 0) {
    setError(validationErrors);
  } else {
    setError({});

    addPost(newPost);
    setNewPost({title:"", content:"", image:""
    });
  }
})

  const addPost = async (newPost: NewPost) => {
    try {
      const resp = await fetch("https://blogposts-frontendm3.onrender.com/api/post/", {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost)
      });

      if(!resp.ok){
        throw new Error("POST-anrop misslyckades");
      } else {
        const addedPost: Post = await resp.json();
        setPost((oldPosts) => [...oldPosts, addedPost]);
        navigate("/blog");

      }

    } catch(error){
      throw error
    }
  }
  

  return (
    <>
    <h1>Välkommen till Admin!</h1>
    <h2>Skapa ett nytt inlägg</h2>
        <form onSubmit={submitForm}>
        {error.title && (
            <p>{error.title}</p>
        )}
        <label htmlFor='title'>Titel:</label><br/>
        <input type='text' id='title' name='title' required value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}></input><br/>

        <label htmlFor='content'>Inlägg:</label><br/>
        <input type='text' id='content' name='content' required value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})}></input><br/>

        <label htmlFor='image'>Bild:</label><br/>
        <input type='url' id='image' name='image' onChange={(e) => setNewPost({...newPost, image: e.target.value})}></input><br/>

        <input type='submit' value="Lägg till"></input>
    </form> 
    
    </>
  )
}

export default Admin