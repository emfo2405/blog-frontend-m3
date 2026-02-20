import { useAuth } from "../context/AuthContext";
import type { NewPost } from "../types/auth.types"
import { useState } from "react";
import './UpdatePost.scss'

interface UpdateProps {
    id: number,
    title: string, 
    content: string, 
    image: string,
    getPosts: () => Promise<void>
}


function UpdatePost({id, title, content, image, getPosts} : UpdateProps) {
    const [newPost, setNewPost] = useState<NewPost>({title: title, content: content, image:image})

    const [error, setError] = useState<string | null>(null);
    const [show, setShow] = useState<boolean>(false);
    const { user } = useAuth();

    const token = localStorage.getItem("token");
  

    //Funktion för att uppdatera post
    const updateBlogPost = async (updateBlogPost: NewPost) => {
        try { 
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
                console.error(error);
                new Error;
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
        <input type='text' id='content' name='content' required value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})}></input><br/>

        <label htmlFor='image'>Bild:</label><br/>
        <input type='url' id='image' name='image' onChange={(e) => setNewPost({...newPost, image: e.target.value})}></input><br/>

        <input className="formButton" type='submit' value="Uppdatera"></input>
    </form> }
</>)}

</>
  )
}

export default UpdatePost