
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import { Link } from "react-router-dom";
import './BlogPost.scss';


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
            <div className="postLayout">
            <img className='blogImg' src={image}></img>
            <div>
            <p className='lineheight'>{content}</p>
            <p className='date'>{new Date(created).toLocaleDateString("sv-SE")}</p>


           {showButtons && (
                <>
            <Link to={`/blog/${id}`} className="showPost">Visa hela inlägget</Link>


            </>

            )}

            <div>
            <UpdatePost id={id} title={title} content={content} image={image} getPosts={getPosts}/>
            <DeletePost id={id} getPosts={getPosts}/>
            </div>
            </div>
</div>
        </div>

);
}

export default BlogPost;