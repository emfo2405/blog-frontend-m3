import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import './DeletePost.scss'

interface DeleteProps {
    id:number,
    getPosts: () => void;
}

const token = localStorage.getItem("token");

function DeletePost({id, getPosts}: DeleteProps) {
    const [error, setError] = useState<string | null>(null);

const { user } = useAuth();

const deletePost = async (id:number) => {
    try {
        const resp = await fetch(`https://blogposts-frontendm3.onrender.com/api/post/${id}/`, {
            method: "DELETE",
            headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
            }
        });

        if(!resp.ok) {
            throw new Error("Delete misslyckades");
        } else {
            getPosts();
        }
    } catch(error) {
        setError("Något gick fel med att radera inlägget...");
        console.error("Något gick fel: ", error);
    }
}

  return (
<>
{user && (<>
<button className="deleteButton" onClick={() => deletePost(id)}>Radera inlägg</button>
 </>)}
 {
    error && <p className="errorMessage">{error}</p>
 }
    
</>
  )
}

export default DeletePost