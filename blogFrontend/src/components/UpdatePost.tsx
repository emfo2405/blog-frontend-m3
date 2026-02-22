import { useAuth } from "../context/AuthContext";
import type { NewPost } from "../types/auth.types"
import { useState } from "react";
import './UpdatePost.scss'

interface UpdateProps {
    id: number,
    title: string, 
    content: string, 
    excerpt: string,
    image: string,
    getPosts: () => Promise<void>
}


function UpdatePost({id, title, content, excerpt, image, getPosts} : UpdateProps) {
    const [newPost, setNewPost] = useState<NewPost>({title: title, content: content, excerpt: excerpt, image:image})

    const [error, setError] = useState<string | null>(null);
    const [show, setShow] = useState<boolean>(false);
    const { user } = useAuth();

  

    //Funktion för att uppdatera post
    const updateBlogPost = async (updateBlogPost: NewPost) => {
        try { 
        const token = localStorage.getItem("token");

        if(!token) {
            throw new Error("Ingen token hittades");
        }

            const resp = await fetch(`https://blogposts-frontendm3.onrender.com/api/post/${id}/`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateBlogPost)
                });


                if(!resp.ok) {
                    throw new Error("Update misslyckades");
                } else {
                    getPosts();
                }

            } catch(error) {
                console.error("Något gick fel: ", error);
                setError("Något gick fel med att uppdatera");
            };

        }

        const updateForm = ((event:any) => {
            event.preventDefault();
            updateBlogPost(newPost);
        })
    

  return (
<>
{user && (<>
    <button id="updatePost" onClick={() => setShow(setting => !setting)}>{show ? "Dölj" : "Uppdatera inlägg"}</button>

{show &&
        <form className="updateForm" onSubmit={updateForm}>

        <label htmlFor='title'>Titel:</label><br/>
        <input type='text' id='title' name='title' required value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}></input><br/>

        <label htmlFor='content'>Inlägg:</label><br/>
        <textarea id='content' name='content' required value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})}></textarea><br/>

        <label htmlFor='excerpt'>Utdrag:</label><br/>
        <input type='text' id='excerpt' name='excerpt' required value={newPost.excerpt} onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}></input><br/>

        <label htmlFor='image'>Bild:</label><br/>
        <input type='url' id='image' name='image' onChange={(e) => setNewPost({...newPost, image: e.target.value})}></input><br/>

        <input className="formButton" type='submit' value="Uppdatera"></input>

        {
            error && <p className="errorMessage">{error}</p>
        }
    </form> 
}
</>)}

</>
  )
}

export default UpdatePost