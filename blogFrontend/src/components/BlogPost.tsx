import ShowPost from "../pages/ShowPost";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import { Link } from "react-router-dom";



type PostProps = {
    id: number,
    title: string;
    content: string;
    image: string;
    created: string;
    getPosts: () => Promise<void>;
    showButtons?: boolean;
};


function BlogPost({id, title, image, content, created, getPosts, showButtons = true}: PostProps) {


return (

        <div className='post' key={id}>
            <h2>{title}</h2>
            <img className='blogImg' src={image}></img>
            <p className='lineheight'>{content}</p>
            <p className='lineheight'>{new Date(created).toLocaleDateString("sv-SE")}</p>

            <UpdatePost id={id} title={title} content={content} image={image} getPosts={getPosts}/>
            <DeletePost id={id} getPosts={getPosts}/>
            {showButtons && (
                <>
            <Link to={`/blog/${id}`}>Visa hela inlägget</Link>


            </>
            )}

        </div>

);
}

export default BlogPost;