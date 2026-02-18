

interface DeleteProps {
    id:number,
    getPosts: () => void;
}

const token = localStorage.getItem("token");

function DeletePost({id, getPosts}: DeleteProps) {

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
        throw error;
    }
}

  return (
<>
    <button onClick={() => deletePost(id)}>Radera inlägg</button>
</>
  )
}

export default DeletePost