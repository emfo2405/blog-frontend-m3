
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import { Link } from "react-router-dom";
import './BlogPost.scss';


type PostProps = {
    id: number,
    title: string;
    content: string;
    excerpt: string;
    image: string;
    created: string;
    getPosts: () => Promise<void>;
    showButtons?: boolean;
    showFullPost?: boolean;
};


function BlogPost({id, title, image, content, excerpt, created, getPosts, showButtons = true, showFullPost = false}: PostProps) {


return (

        <div className='post' key={id}>
            <h2>{title}</h2>
            
            <img className='blogImg' src={image}></img>
            <div className="postLayout">
            <div className="postContent">
            <p className='lineheight'>{showFullPost ? content : excerpt}</p>
            <p className='date'>{new Date(created).toLocaleDateString("sv-SE")}</p>


           {showButtons && (
                <>
            <Link to={`/blog/${id}`} className="showPost">Visa hela inlägget</Link>


            </>

            )}

            <div>
            <UpdatePost id={id} title={title} content={content} excerpt={excerpt} image={image} getPosts={getPosts}/>
            <DeletePost id={id} getPosts={getPosts}/>
            </div>
            </div>
</div>
        </div>

);
}

export default BlogPost;